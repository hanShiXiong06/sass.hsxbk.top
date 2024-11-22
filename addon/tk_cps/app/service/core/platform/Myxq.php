<?php

namespace addon\tk_cps\app\service\core\platform;

use addon\tk_cps\app\model\act\Act;
use addon\tk_cps\app\model\act\ActOrder;
use addon\tk_cps\app\service\core\CommonService;
use core\exception\CommonException;
use Exception;

/**
 * 蚂蚁星球活动
 */
class Myxq extends BasePlatform
{
    protected $config;

    /**
     * @param array $config
     * @return void
     */
    protected function initialize(array $config = [])
    {
        parent::initialize($config);
        $this->config = $config;
        $this->commonService = new CommonService();
        $this->type = $config['type'] ?? '';
        $this->apiKey = $config['api_key'] ?? '';
        $this->secret = $config['secret'] ?? '';
        $this->site_id = $config['site_id'] ?? '';
        $this->site_key=$config['site_key']??'';
    }

    /**
     * @Notes:分页形式获取活动列表
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
                    'limit' => $pageSize,
                    'apikey' => $this->apiKey,
                ];
                $info = $this->commonService->http_get('http://api-gw.haojingke.com/index.php/v2/api/index/actlist', $data);
                if (!$info) {
                    if (++$retryCount >= $maxRetry) {
                        break;
                    }
                    continue;
                }
                if (!isset($info['status_code']) || $info['status_code'] != 200) {
                    break;
                }
                $actData = $info['data']['list'];
                if (empty($actData)) {
                    break;
                }
                foreach ($actData as $k => $v) {
                    $actDataToSave[] = [
                        'site_id'=>$this->site_id,
                        'act_id' => $v['actid'],
                        'act_name' => $v['act_name'],
                        'desc' => $v['act_desc'],
                        'type' => $this->type,
                        'img' => $v['act_banner'],
                        'icon' => $v['act_logo'],
                        'poster' => $v['act_bg'],
                        'commission_rate' => $v['act_rate'],
                        'introduce' => $v['act_wenan'],
                        'attribution_explain' => $v['act_note'],
                        'end_date' => date('Y-m-d', $v['endtime']),
                        'start_date' => date('Y-m-d', $v['begintime']),
                        'settlement_time' => $v['balance_cycle'],
                    ];
                }
                $this->actModel->where(['type' => $this->type,'site_id'=>$this->site_id,])->delete();
                $this->actModel->saveAll($actDataToSave);
                $actCount += count($actDataToSave);
                if ($info['data']['total'] < $actCount || $info['data']['hasMore'] == 0) {
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
     * @Notes:获取活动信息，需要传入 act_id、uid
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
            $resdata = $this->commonService->http_get('http://api-gw.haojingke.com/index.php/v2/api/index/actunionurl', ['apikey' => $this->apiKey, 'actid' => $data['act_id'], 'extend_id' => $data['uid']]);
            if ($resdata['status_code'] == 200) {
                $getdata = $resdata['data'];
                $weapp = [
                    'appid' => $getdata['we_app_info']['app_id'] ?? '',
                    'pagepath' => $getdata['we_app_info']['path'] ?? '',
                ];
                $aliapp = [
                    'appid' => '',
                    'pagepath' => '',
                    'original_id' => ''
                ];
                $info = [
                    'act_name' => $getdata['wenan'] ?? '未定义活动标题',
                    'act_id' => $data['act_id'],
                    'site_id' => $this->site_id,
                    'h5' => $getdata['url'] ?? '',
                    'weapp' => $weapp,
                    'aliapp' => $aliapp,
                    'type' => $this->type
                ];
                return $info;
            } else {
                throw new CommonException('MYXQ-ERROR'.$resdata['message']);
            }
        } catch (Exception $e) {
            throw new Exception($e->getMessage());
        }
    }

    /**
     * @Notes:实时获取订单列表
     * 这里传值不做统一规范，根据实际的接口传值调用即可
     * 仅统一调用进出口，如有多个类型的订单列表接口，自行根据传入类型及其他值判断封装即可
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
            $defaultOrderFunction = 'myxqOtherOrder';
            switch ($data['order_type']) {
                case 'recharge':
                    $orderFunction = 'myxqRechargeOrder';
                    break;
                case 'movie':
                    $orderFunction = 'myxqMovieOrder';
                    break;
                case 'dc':
                    $orderFunction = 'myxqDcOrder';
                    break;
                case 'shop':
                    $orderFunction = 'myxqShopOrder';
                    break;
                case 'near':
                    $orderFunction = 'myxqNearOrder';
                    break;
                case 'other':
                default:
                    $orderFunction =$defaultOrderFunction;
                    break;
            }
            unset($data['order_type']);
            return $this->$orderFunction($data);
        } catch (Exception $e) {
            throw new Exception($e->getMessage());
        }
    }

    /**
     * @Notes:同步订单
     * @Interface asyncOrder
     * @param $data
     * @return array
     * @throws Exception
     * @author: TK
     * @Time: 2024/10/7   下午11:55
     */
    public function asyncOrder($data)
    {
        try {
            $this->myxqOtherOrderAsync($data['type']);
            $this->myxqRechargeOrderAsync($data['type']);
            $this->myxqMovieOrderAsync($data['type']);
            $this->myxqDcOrderAsync($data['type']);
            $this->myxqNearOrderAsync($data['type']);
            return [];
        } catch (Exception $e) {
            throw new Exception($e->getMessage());
        }
    }
    //蚂蚁星球--其他订单
    public function myxqOtherOrderAsync($type = 0)
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
            $start_time = time() - 60 * 2;
            $end_time = time();
        }

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
                'apikey' => $this->apiKey,
                'querytype' => 2, // 按照更新时间查询
            ];
            $info =$this->m_http_get('http://api-gw.haojingke.com/index.php/v2/api/index/pforder', $data,$this->secret);
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
                    if (strpos($v['extend_id'],$this->site_key) !== false) {
                        $member_id = str_replace($this->site_key, '', $v['extend_id']);
                        $order_info['site_id'] = $this->site_id;
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
    public function myxqRechargeOrderAsync($type = 0)
    {
        $maxRetry = 3; // 最大重试次数
        $maxLoop = 100; // 最大循环次数
        $retryCount = 0; // 当前重试次数
        $loopCount = 0; // 当前循环次数

        $page = 1;
        $pageSize = 50;
        $start_time = time() - 60 * 2;
        $end_time = time();
        if ($type == 1) {
            $start_time = '';
            $end_time = '';
            $maxLoop = 1000;
        }
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
                'apikey' => $this->apiKey,
                // 'querytype' => 2,//按照更新时间查询
            ];
            $info =$this->m_http_get('http://api-gw.haojingke.com/index.php/v2/api/open/rerechargeorder', $data,$this->secret);

            if (!$info) {
                $retryCount++;
                continue; // 如果获取信息失败，则增加重试次数并继续循环
            }

            if (isset($info['status_code']) &&$info['status_code'] == 200) {
                $orders =$info['data']['list'];
                foreach ($orders as$k => $v) {
                    // 解析获取member_id
                    if (strpos($v['uid'],$this->site_key) !== false) {
                        $member_id = str_replace($this->site_key, '', $v['uid']);
                        $order_info['site_id'] = $this->site_id;
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
    public function myxqMovieOrderAsync($type = 0)
    {
        $page = 1;
        $pageSize = 50;
        $start_time = time() - 60 * 2;
        $end_time = time();
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
                'apikey' => $this->apiKey,
                // 'querytype' => 2,//按照更新时间查询
            ];
            $info =$this->m_http_get('http://api-gw.haojingke.com/index.php/v2/api/open/movieorder', $data,$this->secret);

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
                    if (strpos($v['uid'],$this->site_key) !== false) {
                        $member_id = str_replace($this->site_key, '', $v['uid']);
                        $order_info = [
                            'site_id' => $this->site_id,
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
    public function myxqDcOrderAsync($type = 0)
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
                'apikey' => $this->apiKey,
                // 'querytype' => 2, // 按照更新时间查询
            ];

            $info =$this->m_http_get('http://api-gw.haojingke.com/index.php/v2/api/open/dcorder', $data,$this->secret);

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
                    if (strpos($v['uid'],$this->site_key) !== false) {
                        $member_id = str_replace($this->site_key, '', $v['uid']);
                        $order_info = [
                            'site_id' => $this->site_key,
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
    public function myxqNearOrderAsync($type = 0)
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
            $start_time = time() - 60 * 2;
            $end_time = time();
        }
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
                'apikey' => $this->apiKey,
                // 'querytype' => 2, // 按照更新时间查询
            ];

            $info =$this->m_http_get('http://api-gw.haojingke.com/index.php/v2/api/open/nearorder', $data,$this->secret);

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
                    if (strpos($v['uid'],$this->site_key) !== false) {
                        $member_id = str_replace($this->site_key, '', $v['uid']);
                        $order_info = [
                            'site_id' => $this->site_id,
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

    /**
     * @Notes:充值订单
     * @Interface myxqRechargeOrder
     * @param $data
     * @return mixed
     * @author: TK
     * @Time: 2024/10/7   下午9:59
     */
    public function myxqRechargeOrder($data)
    {
        $data['apikey'] = $this->apiKey;
        $info = $this->m_http_get('http://api-gw.haojingke.com/index.php/v2/api/open/rerechargeorder', $data,$this->secret);
        if ($info['status_code'] == 200) {
            foreach ($info['data']['list'] as $k => $v) {
                $info['data']['list'][$k]['rechargeno'] = $this->hidePhoneNumber($v['rechargeno']);
            }
            return $info['data'];
        } else {
            throw new CommonException($info['message']);
        }
    }

    /**
     * @Notes:隐藏手机号中间四位
     * @Interface hidePhoneNumber
     * @param $phone
     * @return array|string|string[]|null
     * @author: TK
     * @Time: 2024/10/7   下午9:59
     */
    public function hidePhoneNumber($phone)
    {
        $pattern = '/(\d{3})\d{4}(\d{4})/';
        $replacement = '$1****$2';
        $hidden_phone = preg_replace($pattern, $replacement, $phone);

        return $hidden_phone;
    }

    /**
     * @Notes:电影票订单
     * @Interface myxqMovieOrder
     * @param $data
     * @return mixed
     * @author: TK
     * @Time: 2024/10/7   下午9:59
     */
    public function myxqMovieOrder($data)
    {
        $data['apikey'] = $this->apiKey;
        $info = $this->m_http_get('http://api-gw.haojingke.com/index.php/v2/api/open/movieorder', $data,$this->secret);
        if ($info['status_code'] == 200) {
            return $info['data'];
        } else {
            throw new CommonException($info['message']);
        }
    }

    /**
     * @Notes:点餐订单
     * @Interface myxqDcOrder
     * @param $data
     * @return mixed
     * @author: TK
     * @Time: 2024/10/7   下午9:58
     */
    public function myxqDcOrder($data)
    {
        $data['apikey'] = $this->apiKey;
        $info = $this->m_http_get('http://api-gw.haojingke.com/index.php/v2/api/open/dcorder', $data,$this->secret);
        if ($info['status_code'] == 200) {
            return $info['data'];
        } else {
            throw new CommonException($info['message']);
        }
    }

    /**
     * @Notes:点餐订单详情
     * @Interface myxqDcOrderDetail
     * @param $data
     * @return mixed
     * @author: TK
     * @Time: 2024/10/7   下午9:58
     */
    public function myxqDcOrderDetail($data)
    {
        $data['apikey'] = $this->apiKey;
        $info = $this->m_http_get('http://api-gw.haojingke.com/index.php/v2/api/open/dcorderdetail', $data,$this->secret);
        if ($info['status_code'] == 200) {
            return $info['data'];
        } else {
            throw new CommonException($info['message']);
        }

    }

    /**
     * @Notes:周边订单
     * @Interface myxqNearOrder
     * @param $data
     * @return mixed
     * @author: TK
     * @Time: 2024/10/7   下午9:58
     */
    public function myxqNearOrder($data)
    {
        $data['apikey'] = $this->apiKey;
        $info = $this->m_http_get('http://api-gw.haojingke.com/index.php/v2/api/open/nearorder?', $data,$this->secret);
        if ($info['status_code'] == 200) {
            return $info['data'];
        } else {
            throw new CommonException($info['message']);
        }
    }

    /**
     * @Notes:商城订单
     * @Interface myxqShopOrder
     * @param $data
     * @return mixed
     * @author: TK
     * @Time: 2024/10/7   下午9:57
     */
    public function myxqShopOrder($data)
    {
        $data['apikey'] = $this->apiKey;
        $info = $this->m_http_get('http://api-gw.haojingke.com/index.php/v2/api/open/shoporder?', $data,$this->secret);
        if ($info['status_code'] == 200) {
            return $info['data'];
        } else {
            throw new CommonException($info['message']);
        }
    }

    /**
     * @Notes:其他订单
     * @Interface myxqOtherOrder
     * @param $data
     * @return mixed
     * @author: TK
     * @Time: 2024/10/7   下午9:57
     */
    public function myxqOtherOrder($data)
    {
        $data['apikey'] = $this->apiKey;
        $info = $this->m_http_get('http://api-gw.haojingke.com/index.php/v2/api/index/pforder', $data,$this->secret);
        if ($info['status_code'] == 200) {
            return $info['data'];
        } else {
            throw new CommonException($info['message']);
        }
    }

    /**
     * @Notes:封装get方法
     * @Interface m_http_get
     * @param $url
     * @param $data
     * @param $headers
     * @return mixed
     * @author: TK
     * @Time: 2024/10/7   下午9:57
     */
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

}