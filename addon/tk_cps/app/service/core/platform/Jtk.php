<?php

namespace addon\tk_cps\app\service\core\platform;
use addon\tk_cps\app\model\act\Act;
use addon\tk_cps\app\model\act\ActOrder;
use addon\tk_cps\app\service\core\CommonService;
use core\exception\CommonException;
use Exception;

/**
 * 聚推客活动驱动封装
 */
class Jtk extends BasePlatform
{
    protected $config;

    /**
     * @Notes:初始值  根据需要赋值即可
     * @Interface initialize
     * @param array $config
     * @author: TK
     * @Time: 2024/10/7   下午11:04
     */
    protected function initialize(array $config = [])
    {
        parent::initialize($config);
        $this->commonService = new CommonService();
        $this->type=$config['type']??'';
        $this->apiKey=$config['api_key']??'';
        $this->pub_id=$config['pub_id']??'';
        $this->site_id=$config['site_id']??'';
        $this->site_key=$config['site_key']??'';
    }

    /**
     * @Notes:分页形式获取活动列表  $data=[]
     * @Interface getActiveAll
     * @param $data
     * @throws Exception
     * @author: TK
     * @Time: 2024/10/7   上午11:21
     */
    public function getActiveAll($data)
    {
        $this->actModel = new Act();
        $page = 1;
        $pageSize = 50;
        $maxRetry = 3; // 最大重试次数
        $retryCount = 0; // 重试计数器
        $actCount = 0; // 活动计数器
        try {
            while (true) {
                $data = [
                    'page' => $page,
                    'pageSize' => $pageSize,
                    'apikey' => $this->apiKey,
                ];
                $info =$this->commonService->http_get('http://api.jutuike.com/union/act_list', $data);
                if (!$info) {
                    if (++$retryCount >=$maxRetry) {
                        break;
                    }
                    continue;
                }
                if (!isset($info['code']) ||$info['code'] != 1) {
                    break;
                }
                $actData =$info['data']['data'];
                if (empty($actData)) {
                    break;
                }
                foreach ($actData as$k => $v) {
                    $actDataToSave[] = [
                        'site_id'=>$this->site_id,
                        'act_id' => $v['act_id'],
                        'act_name' => $v['act_name'],
                        'desc' => $v['desc'],
                        'type' => $this->type,
                        'img' => $v['img'],
                        'icon' => $v['icon'],
                        'poster' => $v['poster'],
                        'commission_rate' => $v['commission_rate'],
                        'introduce' => $v['introduce'],
                        'attribution_explain' => $v['attribution_explain'],
                        'end_date' => $v['end_date'],
                        'start_date' => $v['start_date'],
                        'settlement_time' => $v['settlement_time'],
                    ];
                }
                $this->actModel->where(['type' =>$this->type,'site_id'=>$this->site_id])->delete();
                $this->actModel->saveAll($actDataToSave);
                $actCount += count($actDataToSave);
                if (count($actData) <$pageSize) {
                    break;
                }
                $page++;
                $retryCount = 0; // 重置重试计数器
            }
        } catch (Exception $e) {
            throw new Exception($e->getMessage());
        }
    }


    /**
     * @Notes:获取活动信息，$data  传入字段   活动：act_id   跟单：uid
     * @Interface getActiveInfo
     * @param $data
     * @return array
     * @throws Exception
     * @author: TK
     * @Time: 2024/9/20   上午2:39
     */
    public function getActiveInfo($data)
    {
        try {
            $resdata = $this->commonService->http_get('http://api.jutuike.com/union/act', ['apikey' => $this->apiKey, 'act_id' => $data['act_id'], 'sid' => $data['uid']]);
            if ($resdata['code'] == 1) {
                $getdata = $resdata['data'];
                $weapp = [
                    'appid' => isset($getdata['we_app_info']) ? $getdata['we_app_info']['app_id'] : '',
                    'pagepath' => isset($getdata['we_app_info']) ? $getdata['we_app_info']['page_path'] : '',
                    'original_id' => $getdata['original_id'] ?? ''
                ];
                $aliapp = [
                    'appid' => isset($getdata['alipay_app_info']) ? $getdata['alipay_app_info']['app_id'] : '',
                    'pagepath' => isset($getdata['alipay_app_info']) ? $getdata['alipay_app_info']['page_path'] : '',
                    'original_id' => $getdata['original_id'] ?? ''
                ];
                $h5 = '';
                if (isset($getdata['h5']) && $getdata['h5'] != '') {
                    $h5 = ($getdata['h5']);
                }
                if (isset($getdata['long_h5']) && $getdata['long_h5'] != '') {
                    $h5 = ($getdata['long_h5']);
                }
                return [
                    'act_name' => $getdata['act_name'] ?? '未定义活动标题',
                    'act_id' => $data['act_id'],
                    'site_id' => $this->site_id,
                    'h5' => $h5 ?? '',
                    'weapp' => $weapp,
                    'aliapp' => $aliapp,
                    'type' => $this->type
                ];
            } else {
                throw new CommonException($data['msg']);
            }
        } catch (Exception $e) {
            throw new Exception($e->getMessage());
        }
    }

    /**
     * @Notes:实时获取订单列表
     * 这里传值不做统一规范，根据实际的接口传值调用即可
     * 仅统一调用进出口，如有多个类型的订单列表接口，自行根据传入类型标记及其他值判断封装调用
     * @Interface getOrderList
     * @param $data
     * @return array
     * @throws Exception
     * @author: TK
     * @Time: 2024/10/7   下午5:46
     */
    public function getOrderList($data)
    {
        try {
            $data['apikey']=$this->apiKey;
            $info=$this->commonService->http_get('https://api.jutuike.com/union/orders',$data);
            if ($info['code'] == 1) {
                return $info['data'];
            }
            else {
                throw new CommonException($info['msg']);
            }
        } catch (Exception $e) {
            throw new Exception($e->getMessage());
        }
    }

    /**
     * @Notes:同步订单列表
     * 主要用于解析同步当前站点的订单数据进行入库操作  绑定订单等操作
     * type值0  查询当前2分钟内订单  1查询存量订单
     * @Interface asyncOrder
     * @param $data
     * @return array
     * @throws Exception
     * @author: TK
     * @Time: 2024/10/7   下午10:59
     */
    public function asyncOrder($data)
    {
        try {
            $page = 1;
            $pageSize = 50;
            $maxRetry = 3; // 最大重试次数
            $retryCount = 0; // 重试计数器
            $orderCount = 0; // 订单计数器
            $start_time = time() - 60 * 2;
            $end_time = time();
            if ($data['type'] == 1) {
                $start_time = '';
                $end_time = '';
            }
            $actOrderModel = new ActOrder();
            while (true) {
                $data = [
                    'page' => $page,
                    'pageSize' => $pageSize,
                    'start_time' => $start_time,
                    'end_time' => $end_time,
                    'apikey' => $this->apiKey,
                    'query_type' => 2, // 按照更新时间查询
                ];
                $info =$this->commonService->http_get('https://api.jutuike.com/union/orders', $data);
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
                    if (strpos($v['sid'],$this->site_key) !== false) {
                        // 解析获取 member_id
                        $member_id = str_replace($this->site_key, '', $v['sid']);
                        $order_info = [
                            'site_id' => $this->site_id,
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
        } catch (Exception $e) {
            throw new Exception($e->getMessage());
        }
    }
}