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

    public function jtkOrderList($site_id,$config, $type = 0)
    {
        $page = 1;
        $pageSize = 50;
        $maxRetry = 3; // 最大重试次数
        $retryCount = 0; // 重试计数器
        $orderCount = 0; // 订单计数器

        $start_time = time() - 60 * 30;
        $end_time = time();
        if ($type == 1) {
            $start_time = '';
            $end_time = '';
        }

        $apikey =$config['api_key'];
        $actOrderModel = new ActOrder();

        while (true) {
            $data = [
                'page' => $page,
                'pagesize' => $pageSize,
                'start_time' => $start_time,
                'end_time' => $end_time,
                'apikey' => $apikey,
                'query_type' => 2, // 按照更新时间查询
            ];

            $info =$this->http_get('https://api.jutuike.com/union/orders', $data);

            if (!$info) {
                if (++$retryCount >=$maxRetry) {
                    // 如果重试次数达到限制，则终止循环
                    break;
                }
                continue; // 重试请求
            }

            if (!isset($info['code']) ||$info['code'] != 1) {
                // 如果返回数据中没有正确的 code 或者 code 不是 1，则终止循环
                break;
            }

            $orders =$info['data']['data'];
            foreach ($orders as $k => $v) {
                if (strpos($v['sid'],$config['site_key']) !== false) {
                    // 解析获取 member_id
                    $member_id = str_replace($config['site_key'], '', $v['sid']);
                    $order_info = [
                        'site_id' => $site_id,
                        'sid' => $v['sid'],
                        'member_id' => $member_id,
                        'name' => $v['order_title'],
                        'order_id' => $v['order_sn'],
                        'pay_money' => $v['pay_price'],
                        'create_time' => $v['create_time'],
                        'pay_time' => $v['pay_time'],
                        'rate' => $v['jtk_share_rate'],
                        'commission' => $v['jtk_share_fee'],
                        'status' => $v['status'],
                        'status_name' => $v['status_desc'],
                        'chanel' => '聚推客',
                        'pt_js' => $v['status'] == 3 ? 1 : 0,
                    ];

                    $existingOrder =$actOrderModel->where(['order_id' => $order_info['order_id']])->findOrEmpty();
                    if ($existingOrder->isEmpty()) {
                        $actOrderModel->create($order_info);
                    } else {
                        $actOrderModel->where(['order_id' =>$order_info['order_id']])->update($order_info);
                    }
                    $orderCount++; // 计数器增加
                }
            }

            if (count($orders) <$pageSize || $orderCount == 0) {
                // 如果当前页数据量少于每页数据量，或者没有处理任何订单，停止查询
                break;
            }

            $page++;
            $retryCount = 0; // 重置重试计数器
        }
    }


    //蚂蚁星球--其他订单
    public function myxqOtherOrder($site_id,$config, $type = 0)
    {
        $page = 1;
        $pageSize = 50;
        $maxRetry = 3; // 最大重试次数
        $maxLoop = 100; // 最大循环次数
        $retry = 0; // 当前重试次数
        $loop = 0; // 当前循环次数

        if ($type == 1) {
            $start_time = '';
            $end_time = '';
            $maxLoop = 1000;
        } else {
            $start_time = time() - 60 * 30;
            $end_time = time();
        }

        $apikey =$config['mapi_key'];
        $actOrderModel = new ActOrder();

        while (true) {
            if ($loop >=$maxLoop) {
                // 日志记录：达到最大循环次数
                break;
            }
            $loop++;

            $data = [
                'page' => $page,
                'limit' => $pageSize,
                'starttime' => $start_time,
                'endtime' => $end_time,
                'apikey' => $apikey,
                'querytype' => 2, // 按照更新时间查询
            ];
            $info =$this->m_http_get('http://api-gw.haojingke.com/index.php/v2/api/index/pforder', $data,$config['secret']);
            if (!$info) {
                if ($retry >=$maxRetry) {
                    // 日志记录：达到最大重试次数
                    break;
                }
                $retry++;
                continue;
            }
            if (isset($info['status_code']) &&$info['status_code'] == 200) {
                $orders =$info['data']['data'];
                foreach ($orders as$k => $v) {
                    // 解析获取member_id
                    if (strpos($v['extend_id'],$config['site_key']) !== false) {
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
                if ($page *$pageSize >= $info['data']['total']) {
                    break;
                }
                $page++;
            } else {
                if ($retry >=$maxRetry) {
                    // 日志记录：达到最大重试次数
                    break;
                }
                $retry++;
            }
        }
    }

    //蚂蚁星球--充值订单
    public function myxqRechargeOrder($site_id,$config, $type = 0)
    {
        $maxRetry = 3; // 最大重试次数
        $maxLoop = 100; // 最大循环次数
        $retryCount = 0; // 当前重试次数
        $loopCount = 0; // 当前循环次数

        $page = 1;
        $pageSize = 50;
        $start_time = time() - 60 * 30;
        $end_time = time();
        if ($type == 1) {
            $start_time = '';
            $end_time = '';
            $maxLoop = 1000;
        }
        $apikey =$config['mapi_key'];
        $actOrderModel = new ActOrder();

        while (true) {
            if ($retryCount >=$maxRetry || $loopCount >=$maxLoop) {
                break; // 如果达到最大重试或循环次数，则退出循环
            }

            $data = [
                'page' => $page,
                'limit' => $pageSize,
                'starttime' => $start_time,
                'endtime' => $end_time,
                'apikey' => $apikey,
                // 'querytype' => 2,//按照更新时间查询
            ];
            $info =$this->m_http_get('http://api-gw.haojingke.com/index.php/v2/api/open/rerechargeorder', $data,$config['secret']);

            if (!$info) {
                $retryCount++;
                continue; // 如果获取信息失败，则增加重试次数并继续循环
            }

            if (isset($info['status_code']) &&$info['status_code'] == 200) {
                $orders =$info['data']['list'];
                foreach ($orders as$k => $v) {
                    // 解析获取member_id
                    if (strpos($v['uid'],$config['site_key']) !== false) {
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
                if ($page *$pageSize > $info['data']['total']) {
                    break;
                }
                $page++;
                $loopCount++;
            } else {
                $retryCount++;
            }
        }
    }


    //蚂蚁星球--电影票订单
    public function myxqMovieOrder($site_id,$config, $type = 0)
    {
        $page = 1;
        $pageSize = 50;
        $start_time = time() - 60 * 30;
        $end_time = time();
        $apikey =$config['mapi_key'];
        $actOrderModel = new ActOrder();
        $maxRetry = 3; // 最大重试次数
        $retryCount = 0; // 当前重试次数
        $maxLoop = 100; // 最大循环次数
        $loopCount = 0; // 当前循环次数
        if ($type == 1) {
            $start_time = '';
            $end_time = '';
            $maxLoop = 1000;
        }
        while (true) {
            if ($loopCount >=$maxLoop) {
                echo "达到最大循环次数，退出循环。\n";
                break;
            }
            $loopCount++;

            $data = [
                'page' => $page,
                'limit' => $pageSize,
                'starttime' => $start_time,
                'endtime' => $end_time,
                'apikey' => $apikey,
                // 'querytype' => 2,//按照更新时间查询
            ];
            $info =$this->m_http_get('http://api-gw.haojingke.com/index.php/v2/api/open/movieorder', $data,$config['secret']);

            if (!$info) {
                if ($retryCount <$maxRetry) {
                    $retryCount++;
                    continue;
                } else {
                    break;
                }
            }
            if (isset($info['status_code']) &&$info['status_code'] == 200) {
                $orders =$info['data']['list'];
                foreach ($orders as$k => $v) {
                    // 解析获取member_id
                    if (strpos($v['uid'],$config['site_key']) !== false) {
                        $member_id = str_replace($config['site_key'], '', $v['uid']);
                        $order_info = [
                            'site_id' => $site_id,
                            'sid' => $v['uid'],
                            'member_id' => $member_id,
                            'name' => $v['seatno'],
                            'order_id' => $v['orderid'],
                            'pay_money' => $v['price'] / 100,
                            'create_time' => date('Y-m-d H:i:s', $v['createdtime']),
                            'pay_time' => date('Y-m-d H:i:s', $v['createdtime']),
                            'rate' => $v['commission'] /$v['price'] * 100,
                            'commission' => $v['commission'] / 100,
                            'status' => $v['status'],
                            'status_name' => $v['status'],
                            'chanel' => '蚂蚁星球',
                            'pt_js' => $v['isbalance'] == 1 ? 1 : 0,
                        ];
                        $actinfo =$actOrderModel->where(['order_id' => $order_info['order_id']])->findOrEmpty();
                        if ($actinfo->isEmpty()) {
                            $actOrderModel->create($order_info);
                        } else {
                            $actOrderModel->where(['order_id' =>$order_info['order_id']])->update($order_info);
                        }
                    }
                }
                if ($page *$pageSize > $info['data']['total']) {
                    break;
                }
                $page++;
            } else {
                if ($retryCount <$maxRetry) {
                    $retryCount++;
                } else {
                    break;
                }
            }
        }
    }

    //蚂蚁星球--点餐订单
    public function myxqDcOrder($site_id,$config, $type = 0)
    {
        $page = 1;
        $pageSize = 50;
        $maxRetry = 3; // 最大重试次数
        $maxLoop = 100; // 最大循环次数
        $retry = 0; // 当前重试次数
        $loopCount = 0; // 当前循环次数

        if ($type == 1) {
            $start_time = '';
            $end_time = '';
            $maxLoop = 1000;
        } else {
            $start_time = time() - 60 * 30;
            $end_time = time();
        }

        $apikey =$config['mapi_key'];
        $actOrderModel = new ActOrder();

        while (true) {
            if ($loopCount >=$maxLoop) {
                break;
            }

            $data = [
                'page' => $page,
                'limit' => $pageSize,
                'starttime' => $start_time,
                'endtime' => $end_time,
                'apikey' => $apikey,
                // 'querytype' => 2, // 按照更新时间查询
            ];

            $info =$this->m_http_get('http://api-gw.haojingke.com/index.php/v2/api/open/dcorder', $data,$config['secret']);

            if (!$info) {
                if ($retry <$maxRetry) {
                    $retry++;
                    continue;
                } else {
                    break;
                }
            }

            if (isset($info['status_code']) &&$info['status_code'] == 200) {
                $orders =$info['data']['list'];
                foreach ($orders as$v) {
                    if (strpos($v['uid'],$config['site_key']) !== false) {
                        $member_id = str_replace($config['site_key'], '', $v['uid']);
                        $order_info = [
                            'site_id' => $site_id,
                            'sid' => $v['uid'],
                            'member_id' => $member_id,
                            'name' => $v['storeName'],
                            'order_id' => $v['orderid'],
                            'pay_money' => $v['price'],
                            'create_time' => date('Y-m-d H:i:s', $v['createdtime']),
                            'pay_time' => date('Y-m-d H:i:s', $v['createdtime']),
                            'rate' => $v['commission'] /$v['price'] * 100,
                            'commission' => $v['commission'],
                            'status' => $v['status'],
                            'status_name' => $v['status'],
                            'chanel' => '蚂蚁星球',
                            'pt_js' => $v['isbalance'] == 1 ? 1 : 0,
                        ];

                        $actinfo =$actOrderModel->where(['order_id' => $order_info['order_id']])->findOrEmpty();
                        if ($actinfo->isEmpty()) {
                            $actOrderModel->create($order_info);
                        } else {
                            $actOrderModel->where(['order_id' =>$order_info['order_id']])->update($order_info);
                        }
                    }
                }

                if ($page *$pageSize >= $info['data']['total']) {
                    break;
                }

                $page++;
                $loopCount++;
            } else {
                if ($retry <$maxRetry) {
                    $retry++;
                } else {
                    break;
                }
            }
        }
    }


    //蚂蚁星球--周边优惠订单
    public function myxqNearOrder($site_id,$config, $type = 0)
    {
        $page = 1;
        $pageSize = 50;
        $maxRetry = 3; // 最大重试次数
        $maxLoop = 100; // 最大循环次数
        $retry = 0; // 当前重试次数
        $loopCount = 0; // 当前循环次数

        if ($type == 1) {
            $start_time = '';
            $end_time = '';
            $maxLoop=1000;
        } else {
            $start_time = time() - 60 * 30;
            $end_time = time();
        }

        $apikey =$config['mapi_key'];
        $actOrderModel = new ActOrder();

        while (true) {
            if ($loopCount >=$maxLoop) {
                break;
            }

            $data = [
                'page' => $page,
                'limit' => $pageSize,
                'starttime' => $start_time,
                'endtime' => $end_time,
                'apikey' => $apikey,
                // 'querytype' => 2, // 按照更新时间查询
            ];

            $info =$this->m_http_get('http://api-gw.haojingke.com/index.php/v2/api/open/nearorder', $data,$config['secret']);

            if (!$info) {
                if ($retry <$maxRetry) {
                    $retry++;
                    continue;
                } else {
                    break;
                }
            }

            if (isset($info['status_code']) &&$info['status_code'] == 200) {
                $orders =$info['data']['list'];
                foreach ($orders as$v) {
                    if (strpos($v['uid'],$config['site_key']) !== false) {
                        $member_id = str_replace($config['site_key'], '', $v['uid']);
                        $order_info = [
                            'site_id' => $site_id,
                            'sid' => $v['uid'],
                            'member_id' => $member_id,
                            'name' => $v['goods_name'],
                            'order_id' => $v['orderid'],
                            'pay_money' => $v['payprice'] / 100,
                            'create_time' => date('Y-m-d H:i:s', $v['createdtime']),
                            'pay_time' => date('Y-m-d H:i:s', $v['createdtime']),
                            'rate' => $v['commission'] /$v['payprice'] * 100,
                            'commission' => $v['commission'] / 100,
                            'status' => $v['status'],
                            'status_name' => $v['statusstr'],
                            'chanel' => '蚂蚁星球',
                            'pt_js' => $v['isbalance'] == 1 ? 1 : 0,
                        ];

                        $actinfo =$actOrderModel->where(['order_id' => $order_info['order_id']])->findOrEmpty();
                        if ($actinfo->isEmpty()) {
                            $actOrderModel->create($order_info);
                        } else {
                            $actOrderModel->where(['order_id' =>$order_info['order_id']])->update($order_info);
                        }
                    }
                }

                if ($page *$pageSize >= $info['data']['total']) {
                    break;
                }
                $page++;
                $loopCount++;
            } else {
                if ($retry <$maxRetry) {
                    $retry++;
                } else {
                    break;
                }
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
