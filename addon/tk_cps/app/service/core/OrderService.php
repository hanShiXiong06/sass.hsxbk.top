<?php

namespace addon\tk_cps\app\service\core;

use addon\tk_cps\app\dict\config\ConfigDict;
use app\service\core\sys\CoreConfigService;
use core\base\BaseApiService;
use addon\tk_cps\app\model\site\Site;
use core\exception\CommonException;
use Exception;
use addon\tk_cps\app\model\act\ActOrder;

class OrderService extends BaseApiService
{
    public function __construct()
    {
        parent::__construct();
    }

    public function getSite($pageSize = 10)
    {
        $page = 1;
        $sites = [];
        while (true) {
            $currentPageSites = (new Site())->limit($page, $pageSize)->select();
            if (empty($currentPageSites)) {
                // 如果当前页没有数据，则停止查询
                break;
            }
            foreach ($currentPageSites as $k => $v) {
                $config = $this->getConfig($v['site_id']);
                // 这里可以对$config进行处理，例如添加到某个数组中
                $sites[] = $config;
            }
            if (count($currentPageSites) < $pageSize) {
                // 如果当前页数据量少于每页数据量，说明已经到最后一页，停止查询
                break;
            }
            $page++;
        }
        // 返回所有查询到的数据
        return $sites;
    }

    public function jtkOrderList($site_id, $config, $type = 0)
    {
        $page = 1;
        $pageSize = 50;
        $start_time = time() - 60 * 30;
        $end_time = time();
        if ($type == 1) {
            $start_time = '';
            $end_time = '';
        }
        $apikey = $config['api_key'];
        $actOrderModel = new ActOrder();
        while (true) {
            $data = [
                'page' => $page,
                'pagesize' => $pageSize,
                'start_time' => $start_time,
                'end_time' => $end_time,
                'apikey' => $apikey,
                'query_type' => 2,//按照更新时间查询
            ];
            $info = $this->http_get('https://api.jutuike.com/union/orders', $data);
            if(!$info){
                break;
            }
            if (isset($info['code']) && $info['code'] == 1) {
                $orders = $info['data']['data'];
                foreach ($orders as $k => $v) {
                    if (strpos($v['sid'], $config['site_key']) !== false) {
                        //解析获取member_id
                        $member_id = str_replace($config['site_key'], '', $v['sid']);
                        $order_info['site_id'] = $site_id;
                        $order_info['sid'] = $v['sid'];
                        $order_info['member_id'] = $member_id;
                        $order_info['name'] = $v['order_title'];
                        $order_info['order_id'] = $v['order_sn'];
                        $order_info['pay_money'] = $v['pay_price'];
                        $order_info['create_time'] = $v['create_time'];
                        $order_info['pay_time'] = $v['pay_time'];
                        $order_info['rate'] = $v['jtk_share_rate'];
                        $order_info['commission'] = $v['jtk_share_fee'];
                        $order_info['status'] = $v['status'];
                        $order_info['status_name'] = $v['status_desc'];
                        $order_info['chanel'] = '聚推客';
                        if ($v['status'] == 3) {
                            $order_info['pt_js'] = 1;
                        } else {
                            $order_info['pt_js'] = 0;
                        }
                        $info = $actOrderModel->where(['order_id' => $order_info['order_id']])->findOrEmpty();
                        if ($info->isEmpty()) {
                            $actOrderModel->create($order_info);
                        } else {
                            $actOrderModel->where(['order_id' => $order_info['order_id']])->update($order_info);
                        }
                    }
                }
                if (count($orders) < $pageSize) {
                    // 如果当前页数据量少于每页数据量，说明已经到最后一页，停止查询
                    break;
                }
                $page++;
            }
        }
    }

    //蚂蚁星球--其他订单
    public function myxqOtherOrder($site_id, $config, $type = 0)
    {
        $page = 1;
        $pageSize = 50;
        $start_time = time() - 60 * 30;
        $end_time = time();
        if ($type == 1) {
            $start_time = '';
            $end_time = '';
        }
        $apikey = $config['mapi_key'];
        $actOrderModel = new ActOrder();
        while (true) {
            $data = [
                'page' => $page,
                'limit' => $pageSize,
                'starttime' => $start_time,
                'endtime' => $end_time,
                'apikey' => $apikey,
                'querytype' => 2,//按照更新时间查询
            ];
            $info = $this->m_http_get('http://api-gw.haojingke.com/index.php/v2/api/index/pforder', $data, $config['secret']);
            if(!$info){
                break;
            }
            if (isset($info['status_code'])&&$info['status_code'] == 200) {
                $orders = $info['data']['data'];
                foreach ($orders as $k => $v) {
                    //解析获取member_id
                    if (strpos($v['extend_id'], $config['site_key']) !== false) {
                        $member_id = str_replace($config['site_key'], '', $v['extend_id']);
                        $order_info['site_id'] = $site_id;
                        $order_info['sid'] = $v['extend_id'];
                        $order_info['member_id'] = $member_id;
                        $order_info['name'] = $v['goods_name'];
                        $order_info['order_id'] = $v['orderid'];
                        $order_info['pay_money'] = $v['cosprice'] / 100;
                        $order_info['create_time'] = date('Y-m-d H:i:s', $v['ordertime']);
                        $order_info['pay_time'] = date('Y-m-d H:i:s', $v['ordertime']);
                        $order_info['rate'] = 0;
                        $order_info['commission'] = $v['commission'] / 100;
                        $order_info['status'] = $v['validcode'];
                        $order_info['status_name'] = $v['valistatus'];
                        $order_info['chanel'] = '蚂蚁星球';
                        if ($v['isbalance'] == 1) {
                            $order_info['pt_js'] = 1;
                        } else {
                            $order_info['pt_js'] = 0;
                        }
                        $actinfo = $actOrderModel->where(['order_id' => $order_info['order_id']])->findOrEmpty();
                        if ($actinfo->isEmpty()) {
                            $actOrderModel->create($order_info);
                        } else {
                            $actOrderModel->where(['order_id' => $order_info['order_id']])->update($order_info);
                        }
                    }
                }
                if ($page * $pageSize > $info['data']['total']) {
                    break;
                }
                $page++;
            }else{
                break;
            }
        }
    }

    //蚂蚁星球--充值订单
    public function myxqRechargeOrder($site_id, $config, $type = 0)
    {
        $page = 1;
        $pageSize = 50;
        $start_time = time() - 60 * 30;
        $end_time = time();
        if ($type == 1) {
            $start_time = '';
            $end_time = '';
        }
        $apikey = $config['mapi_key'];
        $actOrderModel = new ActOrder();
        while (true) {
            $data = [
                'page' => $page,
                'limit' => $pageSize,
                'starttime' => $start_time,
                'endtime' => $end_time,
                'apikey' => $apikey,
//                'querytype' => 2,//按照更新时间查询
            ];
            $info = $this->m_http_get('http://api-gw.haojingke.com/index.php/v2/api/open/rerechargeorder', $data, $config['secret']);
            if(!$info){
                break;
            }
            if (isset($info['status_code'])&&$info['status_code'] == 200) {
                $orders = $info['data']['list'];
                foreach ($orders as $k => $v) {
                    //解析获取member_id
                    if (strpos($v['uid'], $config['site_key']) !== false) {
                        $member_id = str_replace($config['site_key'], '', $v['uid']);
                        $order_info['site_id'] = $site_id;
                        $order_info['sid'] = $v['uid'];
                        $order_info['member_id'] = $member_id;
                        $order_info['name'] = $v['goods_name'];
                        $order_info['order_id'] = $v['orderid'];
                        $order_info['pay_money'] = $v['price'] / 100;
                        $order_info['create_time'] = date('Y-m-d H:i:s', $v['createdtime']);
                        $order_info['pay_time'] = date('Y-m-d H:i:s', $v['createdtime']);
                        $order_info['rate'] = 0;
                        $order_info['commission'] = $v['commission'] / 100;
                        $order_info['status'] = $v['status'];
                        $order_info['status_name'] = $v['statusstr'];
                        $order_info['chanel'] = '蚂蚁星球';
                        if ($v['isbalance'] == 1) {
                            $order_info['pt_js'] = 1;
                        } else {
                            $order_info['pt_js'] = 0;
                        }
                        $actinfo = $actOrderModel->where(['order_id' => $order_info['order_id']])->findOrEmpty();
                        if ($actinfo->isEmpty()) {
                            $actOrderModel->create($order_info);
                        } else {
                            $actOrderModel->where(['order_id' => $order_info['order_id']])->update($order_info);
                        }
                    }
                }
                if ($page * $pageSize > $info['data']['total']) {
                    break;
                }
                $page++;
            }else{
                break;
            }
        }
    }

    //蚂蚁星球--电影票订单
    public function myxqMovieOrder($site_id, $config, $type = 0)
    {
        $page = 1;
        $pageSize = 50;
        $start_time = time() - 60 * 30;
        $end_time = time();
        if ($type == 1) {
            $start_time = '';
            $end_time = '';
        }
        $apikey = $config['mapi_key'];
        $actOrderModel = new ActOrder();
        while (true) {
            $data = [
                'page' => $page,
                'limit' => $pageSize,
                'starttime' => $start_time,
                'endtime' => $end_time,
                'apikey' => $apikey,
//                'querytype' => 2,//按照更新时间查询
            ];
            $info = $this->m_http_get('http://api-gw.haojingke.com/index.php/v2/api/open/movieorder', $data, $config['secret']);
            if(!$info){
                break;
            }
            if (isset($info['status_code'])&&$info['status_code'] == 200)  {
                $orders = $info['data']['list'];
                foreach ($orders as $k => $v) {
                    //解析获取member_id
                    if (strpos($v['uid'], $config['site_key']) !== false) {
                        $member_id = str_replace($config['site_key'], '', $v['uid']);
                        $order_info['site_id'] = $site_id;
                        $order_info['sid'] = $v['uid'];
                        $order_info['member_id'] = $member_id;
                        $order_info['name'] = $v['seatno'];
                        $order_info['order_id'] = $v['orderid'];
                        $order_info['pay_money'] = $v['price'] / 100;
                        $order_info['create_time'] = date('Y-m-d H:i:s', $v['createdtime']);
                        $order_info['pay_time'] = date('Y-m-d H:i:s', $v['createdtime']);
                        $order_info['rate'] = $v['commission'] / $v['price'] * 100;
                        $order_info['commission'] = $v['commission'] / 100;
                        $order_info['status'] = $v['status'];
                        $order_info['status_name'] = $v['status'];
                        $order_info['chanel'] = '蚂蚁星球';
                        if ($v['isbalance'] == 1) {
                            $order_info['pt_js'] = 1;
                        } else {
                            $order_info['pt_js'] = 0;
                        }
                        $actinfo = $actOrderModel->where(['order_id' => $order_info['order_id']])->findOrEmpty();
                        if ($actinfo->isEmpty()) {
                            $actOrderModel->create($order_info);
                        } else {
                            $actOrderModel->where(['order_id' => $order_info['order_id']])->update($order_info);
                        }
                    }
                }
                if ($page * $pageSize > $info['data']['total']) {
                    break;
                }
                $page++;
            }else{
                break;
            }
        }
    }

    //蚂蚁星球--点餐订单
    public function myxqDcOrder($site_id, $config, $type = 0)
    {
        $page = 1;
        $pageSize = 50;
        $start_time = time() - 60 * 30;
        $end_time = time();
        if ($type == 1) {
            $start_time = '';
            $end_time = '';
        }
        $apikey = $config['mapi_key'];
        $actOrderModel = new ActOrder();
        while (true) {
            $data = [
                'page' => $page,
                'limit' => $pageSize,
                'starttime' => $start_time,
                'endtime' => $end_time,
                'apikey' => $apikey,
//                'querytype' => 2,//按照更新时间查询
            ];
            $info = $this->m_http_get('http://api-gw.haojingke.com/index.php/v2/api/open/dcorder', $data, $config['secret']);
            if(!$info){
                break;
            }
            if (isset($info['status_code'])&&$info['status_code'] == 200)  {
                $orders = $info['data']['list'];
                foreach ($orders as $k => $v) {
                    //解析获取member_id
                    if (strpos($v['uid'], $config['site_key']) !== false) {
                        $member_id = str_replace($config['site_key'], '', $v['uid']);
                        $order_info['site_id'] = $site_id;
                        $order_info['sid'] = $v['uid'];
                        $order_info['member_id'] = $member_id;
                        $order_info['name'] = $v['storeName'];
                        $order_info['order_id'] = $v['orderid'];
                        $order_info['pay_money'] = $v['price'];
                        $order_info['create_time'] = date('Y-m-d H:i:s', $v['createdtime']);
                        $order_info['pay_time'] = date('Y-m-d H:i:s', $v['createdtime']);
                        $order_info['rate'] = $v['commission'] / $v['price'] * 100;
                        $order_info['commission'] = $v['commission'];
                        $order_info['status'] = $v['status'];
                        $order_info['status_name'] = $v['status'];
                        $order_info['chanel'] = '蚂蚁星球';
                        if ($v['isbalance'] == 1) {
                            $order_info['pt_js'] = 1;
                        } else {
                            $order_info['pt_js'] = 0;
                        }
                        $actinfo = $actOrderModel->where(['order_id' => $order_info['order_id']])->findOrEmpty();
                        if ($actinfo->isEmpty()) {
                            $actOrderModel->create($order_info);
                        } else {
                            $actOrderModel->where(['order_id' => $order_info['order_id']])->update($order_info);
                        }
                    }
                }
                if ($page * $pageSize > $info['data']['total']) {
                    break;
                }
                $page++;
            }else{
                break;
            }
        }
    }

    //蚂蚁星球--周边优惠订单
    public function myxqNearOrder($site_id, $config, $type = 0)
    {
        $page = 1;
        $pageSize = 50;
        $start_time = time() - 60 * 30;
        $end_time = time();
        if ($type == 1) {
            $start_time = '';
            $end_time = '';
        }
        $apikey = $config['mapi_key'];
        $actOrderModel = new ActOrder();
        while (true) {
            $data = [
                'page' => $page,
                'limit' => $pageSize,
                'starttime' => $start_time,
                'endtime' => $end_time,
                'apikey' => $apikey,
//                'querytype' => 2,//按照更新时间查询
            ];
            $info = $this->m_http_get('http://api-gw.haojingke.com/index.php/v2/api/open/nearorder', $data, $config['secret']);
            if(!$info){
                break;
            }
            if (isset($info['status_code'])&&$info['status_code'] == 200)  {
                $orders = $info['data']['list'];
                foreach ($orders as $k => $v) {
                    //解析获取member_id
                    if (strpos($v['uid'], $config['site_key']) !== false) {
                        $member_id = str_replace($config['site_key'], '', $v['uid']);
                        $order_info['site_id'] = $site_id;
                        $order_info['sid'] = $v['uid'];
                        $order_info['member_id'] = $member_id;
                        $order_info['name'] = $v['goods_name'];
                        $order_info['order_id'] = $v['orderid'];
                        $order_info['pay_money'] = $v['payprice'] / 100;
                        $order_info['create_time'] = date('Y-m-d H:i:s', $v['createdtime']);
                        $order_info['pay_time'] = date('Y-m-d H:i:s', $v['createdtime']);
                        $order_info['rate'] = $v['commission'] / $v['payprice'] * 100;
                        $order_info['commission'] = $v['commission'] / 100;
                        $order_info['status'] = $v['status'];
                        $order_info['status_name'] = $v['statusstr'];
                        $order_info['chanel'] = '蚂蚁星球';
                        if ($v['isbalance'] == 1) {
                            $order_info['pt_js'] = 1;
                        } else {
                            $order_info['pt_js'] = 0;
                        }
                        $actinfo = $actOrderModel->where(['order_id' => $order_info['order_id']])->findOrEmpty();
                        if ($actinfo->isEmpty()) {
                            $actOrderModel->create($order_info);
                        } else {
                            $actOrderModel->where(['order_id' => $order_info['order_id']])->update($order_info);
                        }
                    }
                }
                if ($page * $pageSize > $info['data']['total']) {
                    break;
                }
                $page++;
            }else{
                break;
            }
        }
    }

    public function getConfig($site_id)
    {
        $info = (new CoreConfigService())->getConfig($site_id, ConfigDict::getType());
        if (empty($info)) {
            $info['value']['auto_submit'] = '0';
            $info['value']['password'] = 'Aa321123';
            $info['value']['is_webhook'] = '0';
        }
        return $info['value'];
    }

    public function m_http_get($url, $data, $secret, $headers = false)
    {

        if (!empty($data)) {
            ksort($data);
            $strparam = '';
            foreach ($data as $key => $value) {
                if ($value && $key !== 'apikey') {
                    $strparam .= $key . '=' . $value . '&';
                }
            }
            $strparam = rtrim($strparam, '&');
            $strsign = 'secret=' . $secret . '&' . $strparam . '&secret=' . $secret;
            $sign = strtolower(md5($strsign));
            $url = $url . '?' . http_build_query($data) . '&sign=' . $sign;
        }
        $curl = curl_init();
        //设置header头
        if ($headers !== false) curl_setopt($curl, CURLOPT_HTTPHEADER, $headers);
        curl_setopt($curl, CURLOPT_URL, $url);

        curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, FALSE);
        curl_setopt($curl, CURLOPT_SSL_VERIFYHOST, FALSE);
        curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);
        $output = curl_exec($curl);
        curl_close($curl);
        return json_decode($output, true);
    }

    public function http_get($url, $data = null, $headers = false)
    {
        if (!empty($data)) {
            $url = $url . '?' . http_build_query($data);
        }
        $curl = curl_init();
        //设置header头
        if ($headers !== false) curl_setopt($curl, CURLOPT_HTTPHEADER, $headers);
        curl_setopt($curl, CURLOPT_URL, $url);

        curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, FALSE);
        curl_setopt($curl, CURLOPT_SSL_VERIFYHOST, FALSE);
        curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);
        $output = curl_exec($curl);
        curl_close($curl);
        return json_decode($output, true);
    }

    public function http_post($url, $data = null, $headers = false)
    {
        $curl = curl_init();
        //设置header头
        if ($headers !== false) curl_setopt($curl, CURLOPT_HTTPHEADER, $headers);
        curl_setopt($curl, CURLOPT_URL, $url);

        curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, FALSE);
        curl_setopt($curl, CURLOPT_SSL_VERIFYHOST, FALSE);

        if (!empty($data)) {
            curl_setopt($curl, CURLOPT_POST, 1);
            curl_setopt($curl, CURLOPT_POSTFIELDS, $data);
        }
        curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);
        $result = curl_exec($curl);
        $err = curl_error($curl);
        curl_close($curl);
        if ($err) {
            throw new Exception($err);
        } else {
            return json_decode($result, true);
        }
    }
}
