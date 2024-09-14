<?php

namespace addon\tk_cps\app\service\core;

use addon\tk_cps\app\dict\config\ConfigDict;
use app\dict\member\MemberAccountTypeDict;
use app\model\member\MemberLevel;
use app\service\core\member\CoreMemberAccountService;
use app\service\core\member\CoreMemberConfigService;
use app\service\core\member\CoreMemberService;
use app\service\core\sys\CoreConfigService;
use core\base\BaseApiService;
use core\dict\DictLoader;
use Exception;
use addon\tk_cps\app\model\bwcorder\BwcOrder;
use think\facade\Db;
use think\facade\Log;
use addon\tk_cps\app\model\fenxiao\FenxiaoMember;
use addon\tk_cps\app\model\fenxiao\FenxiaoOrder;

class BwcService extends BaseApiService
{

    public function __construct()
    {
        parent::__construct();

    }

    /**
     * @Notes:进行分销分佣结算
     * @Interface fenxiaoEvent
     * @param $orderInfo
     * @return true
     * @author: TK
     * @Time: 2024/5/24   上午12:17
     */
    public function fenxiaoEvent($orderInfo)
    {
        $member_id = $orderInfo['member_id'];
        $site_id = $orderInfo['site_id'];
        $fenxiaoMemberModel = new FenxiaoMember();
        $fenxiaoOrderModel = new FenxiaoOrder();
        $fenxiaoModelInfo = $fenxiaoOrderModel->where(['order_id' => $orderInfo['orderSn']])->findOrEmpty();
        if ($fenxiaoModelInfo->isEmpty()) {
            $fenxiaoOrderModel->save([
                'order_id' => $orderInfo['orderSn'],
                'site_id' => $orderInfo['site_id'],
                'member_id' => $orderInfo['member_id'],
                'type' => 0,
                'status' => 0,
                'create_time' => time()
            ]);

        }

        //查询是否有上级会员
        $fenxiaoMemberInfo = $fenxiaoMemberModel->where(['site_id' => $site_id, 'member_id' => $member_id])->findOrEmpty();

        if ($fenxiaoMemberInfo->isEmpty()) return true;
        //获取一级分销会员信息
        $p_member_info = (new CoreMemberService())->getInfoByMemberId($site_id, $fenxiaoMemberInfo['pid'], 'nickname, point, member_level');
        if (empty($p_member_info)) return true;

        $p_member_info['member_level'] = (new MemberLevel())->where([['level_id', '=', $p_member_info['member_level']]])->field('site_id,level_id,level_benefits')->findOrEmpty()->toArray();
        if ($p_member_info['member_level'] && !empty($p_member_info['member_level']['level_benefits'])) {
            $level_benefits = $p_member_info['member_level']['level_benefits'];
            foreach ($level_benefits as $k => $v) {
                if ($k == 'tk_cps_bwc_fenxiao' && $v['is_use'] == 1) {
                    //比列
                    if ($v['fenxiao_type'] == 0 && $v['first_rate'] > 0) {
                        $commission = $v['first_rate'] / 100 * $orderInfo['commission'];
                    }
                    //固定金额
                    if ($v['fenxiao_type'] == 1 && $v['first_commission'] > 0) {
                        $commission = $v['first_commission'];
                    }

                    $commission = number_format($commission, 2, '.', '');

                    //记录佣金信息
                    $orderFenxiao = $fenxiaoOrderModel->where(['order_id' => $orderInfo['orderSn']])->update([
                        'first_commission' => $commission,
                    ]);

                    (new CoreMemberAccountService())->addLog($orderInfo['site_id'], $fenxiaoMemberInfo['pid'], MemberAccountTypeDict::COMMISSION, $commission, 'bwc_award', '霸王餐一级分销激励');
                    $fenxiaoOrderModel->where(['order_id' => $orderInfo['orderSn']])->update([
                        'status' => 1,
                        'update_time' => time()
                    ]);
                }
            }
        }
        //获取二级分销信息
        $pp_fenxiaoMemberInfo = $fenxiaoMemberModel->where(['site_id' => $site_id, 'member_id' => $fenxiaoMemberInfo['pid']])->findOrEmpty();
        if ($pp_fenxiaoMemberInfo->isEmpty()) return true;
        $pp_member_info = (new CoreMemberService())->getInfoByMemberId($site_id, $pp_fenxiaoMemberInfo['pid'], 'nickname, point, member_level');
        if (empty($p_member_info)) return true;
        $pp_member_info['member_level'] = (new MemberLevel())->where([['level_id', '=', $pp_member_info['member_level']]])->field('site_id,level_id,level_benefits')->findOrEmpty()->toArray();

        if ($pp_member_info['member_level'] && !empty($pp_member_info['member_level']['level_benefits'])) {
            $level_benefits = $pp_member_info['member_level']['level_benefits'];

            foreach ($level_benefits as $k => $v) {
                if ($k == 'tk_cps_bwc_fenxiao' && $v['is_use'] == 1) {
                    //比列
                    if ($v['fenxiao_type'] == 0 && $v['second_rate'] > 0) {
                        $commission = $v['second_rate'] / 100 * $orderInfo['commission'];
                    }
                    //固定金额
                    if ($v['fenxiao_type'] == 1 && $v['second_commission'] > 0) {
                        $commission = $v['second_commission'];
                    }
                    $commission = number_format($commission, 2, '.', '');
                    //记录佣金信息
                    $orderFenxiao = $fenxiaoOrderModel->where(['order_id' => $orderInfo['orderSn']])->update([
                        'two_commission' => $commission,
                    ]);

                    (new CoreMemberAccountService())->addLog($orderInfo['site_id'], $pp_fenxiaoMemberInfo['pid'], MemberAccountTypeDict::COMMISSION, $commission, 'bwc_award', '霸王餐二级分销激励');
                    $fenxiaoOrderModel->where(['order_id' => $orderInfo['orderSn']])->update([
                        'status' => 1,
                        'update_time' => time()
                    ]);


                }
            }
        }
        return true;
    }

    /**
     * @Notes:进行分销关系验证绑定
     * @Interface checkFenxiao
     * @param $data
     * @return array
     * @author: TK
     * @Time: 2024/5/23   上午9:49
     */
    public function checkFenxiao($data)
    {
        if ($this->member_id == $data['pid']) return [];
        $fenxiaoMemberModel = new FenxiaoMember();
        $fenxiaoMemberInfo = $fenxiaoMemberModel->where(['site_id' => $this->site_id, 'member_id' => $this->member_id])->findOrEmpty();
        //会员分销关系存在不进行管理
        if (!$fenxiaoMemberInfo->isEmpty()) return [];
        //上级会员信息及权限判断
        $p_member_info = (new CoreMemberService())->getInfoByMemberId($this->site_id, $data['pid'], 'nickname, point, member_level');
        if (empty($p_member_info)) return [];
        $p_member_info['member_level'] = (new MemberLevel())->where([['level_id', '=', $p_member_info['member_level']]])->field('site_id,level_id,level_benefits')->findOrEmpty()->toArray();
        if ($p_member_info['member_level'] && !empty($p_member_info['member_level']['level_benefits'])) {
            $level_benefits = $p_member_info['member_level']['level_benefits'];
            foreach ($level_benefits as $k => $v) {
                if ($k == 'tk_cps_bwc_fenxiao' && $v['is_use'] == 1) {
                    //等级拥有分销权限
                    $fenxiaoMemberModel->create([
                        'site_id' => $this->site_id,
                        'member_id' => $this->member_id,
                        'pid' => $data['pid'],
                        'create_time' => time()
                    ]);
                }
            }
        }
        return [];
    }

    /**
     * @Notes:会员等级激励
     * @Interface sendLevel
     * @param $site_id
     * @param $member_id
     * @return true
     * @author: TK
     * @Time: 2024/5/22   下午2:39
     */
    public function sendLevel($site_id, $member_id)
    {
        $member_info = (new CoreMemberService())->getInfoByMemberId($site_id, $member_id, 'nickname, point, member_level');
        $member_info['member_level'] = (new MemberLevel())->where([['level_id', '=', $member_info['member_level']]])->field('site_id,level_id,level_benefits')->findOrEmpty()->toArray();
        if ($member_info['member_level'] && !empty($member_info['member_level']['level_benefits'])) {
            $level_benefits = $member_info['member_level']['level_benefits'];
            foreach ($level_benefits as $k => $v) {
                if ($k == 'tk_cps_bwc_level' && $v['is_use'] == 1 && $v['expand'] > 0) {
                    (new CoreMemberAccountService())->addLog($site_id, $member_id, MemberAccountTypeDict::MONEY, $v['expand'], 'bwc_award', '霸王餐等级单单激励');
                }
            }
        }
        return true;
    }

    /**
     * @Notes:发放积分
     * @Interface sendPoint
     * @param int $site_id
     * @param int $member_id
     * @param string $key
     * @param array $param
     * @return true
     * @author: TK
     * @Time: 2024/5/21   下午5:40
     */
    public static function sendPoint(int $site_id, int $member_id, string $key, array $param = [])
    {
        $config = (new CoreMemberConfigService())->getPointRuleConfig($site_id)['grant'] ?? [];
        if (!isset($config[$key]) || (isset($config[$key]['is_use'])&& !$config[$key]['is_use'])) return true;

        $config = $config[$key];

        $dict = (new DictLoader("PointRule"))->load()['grant'] ?? [];
        if (!isset($dict[$key])) return true;
        $dict = $dict[$key];

        $point = $config['point'] ?? 0;
        if (isset($dict['calculate']) && !empty($dict['calculate'])) {
            $calculate = $dict['calculate'];
            if ($calculate instanceof \Closure) {
                $point = $calculate($config, $param);
            } else if (class_exists($calculate)) {
                $point = (new $calculate())->handle($config, $param);
            }
        }

        if ($point <= 0) return true;

        (new CoreMemberAccountService())->addLog($site_id, $member_id, MemberAccountTypeDict::POINT, $point, $param['from_type'] ?? '', $param['memo'] ?? $dict['desc'], $param['related_id'] ?? 0);
        return true;
    }

    /**
     * @Notes:发放会员成长值
     * @Interface sendGrowth
     * @param int $site_id
     * @param int $member_id
     * @param string $key
     * @param array $param
     * @return true
     * @author: TK
     * @Time: 2024/5/21   下午5:41
     */
    public static function sendGrowth(int $site_id, int $member_id, string $key, array $param = [])
    {
        $config = (new CoreMemberConfigService())->getGrowthRuleConfig($site_id);
        if (!isset($config[$key]) ||(isset($config[$key]['is_use'])&& !$config[$key]['is_use'])) return true;

        $config = $config[$key];

        $dict = (new DictLoader("GrowthRule"))->load();
        if (!isset($dict[$key])) return true;
        $dict = $dict[$key];

        $growth = $config['growth'] ?? 0;
        if (isset($dict['calculate']) && !empty($dict['calculate'])) {
            $calculate = $dict['calculate'];
            if ($calculate instanceof \Closure) {
                $growth = $calculate($config, $param);
            } else if (class_exists($calculate)) {
                $growth = (new $calculate())->handle($config, $param);
            }
        }

        if ($growth <= 0) return true;

        (new CoreMemberAccountService())->addLog($site_id, $member_id, MemberAccountTypeDict::GROWTH, $growth, $param['from_type'] ?? '', $param['momo'] ?? $dict['desc'], $param['related_id'] ?? 0);
        return true;
    }

    /**
     * @Notes:通知回调
     * @Interface notice
     * @param $data
     * @return bool|string
     * @author: TK
     * @Time: 2024/5/20   下午5:41
     */

    public function notice($data)
    {
        Log::write('-------------霸王餐订单回调---' . date('Y-m-d H:i:s', time()));
        Log::write($data);
        Db::startTrans();
        try {
            $bwcModel = new BwcOrder();
            $orderInfo = $bwcModel->where(['orderSn' => $data['orderSn']])->findOrEmpty();
            if ($orderInfo->isEmpty()) return '订单不存在';
            $config = $this->getSiteConfig($orderInfo['site_id']);
            $rate = $config['fanxianratio'] / 100;
            $orderInfo->where(['orderSn' => $data['orderSn']])->update(
                [
                    'state' => $data['state'],
                    'reason' => $data['reason'],
                    'xgzSettleStatus' => $data['xgzSettleStatus'],
                    'planType' => $data['planType'],
                    'commissionType' => $data['commissionType'],
                    'commission' => $data['commission'] > 0 ? $data['commission'] : "",
                    'paidAmount' => $data['paidAmount'],
                    'ecommissionRatio' => $data['eCommissionRatio'],
                    'ecommission' => $data['eCommission'],
                    'userOrderSn' => $data['userOrderSn'],
                    'finishedTime' => $data['finishedTime'],
                    'fanxian' => number_format($data['commission'] > 0 ? $data['commission'] * $rate : 0, 2, '.', ''),
                    'is_fanxian' => $orderInfo['state'] == 8 ? 1 : 0,
                ]
            );
            if ($data['state'] == 8) {
                $this->fanXian($config, $bwcModel, $data['orderSn']);
            }
            Db::Commit();
            return true;
        } catch (Exception $e) {
            Log::write('-------------霸王餐订单回调失败---' . date('Y-m-d H:i:s', time()));
            Log::write($e->getMessage());
            Db::rollback();
            return false;
        }

    }

    /**
     * @Notes:返现事件
     * @Interface fanXian
     * @param $config
     * @param $orderSn
     * @return bool
     * @author: TK
     * @Time: 2024/5/20   下午5:21
     */
    public function fanXian($config, $bwcModel, $orderSn)
    {
        $orderInfo = $bwcModel->where(['orderSn' => $orderSn])->findOrEmpty();
        if ($orderInfo->isEmpty()) return false;
        if ($orderInfo['state'] == 8 && $orderInfo['is_fanxian'] == 0) {
            $bwcModel->where(['orderSn' => $orderSn])->update(['is_fanxian' => 1]);
            $config['js_type'] = $config['js_type'] ?? 1;
            //结算可提现余额
            if ($config['js_type'] == 0) {
                (new CoreMemberAccountService())->addLog($orderInfo['site_id'], $orderInfo['member_id'], MemberAccountTypeDict::MONEY, $orderInfo['fanxian'], 'bwc_award', '霸王餐激励');
            }
            //计算到不可提现余额
            if ($config['js_type'] == 1) {
                (new CoreMemberAccountService())->addLog($orderInfo['site_id'], $orderInfo['member_id'], MemberAccountTypeDict::BALANCE, $orderInfo['fanxian'], 'bwc_award', '霸王餐激励');
            }
            //结算积分
            if ($config['js_type'] == 2) {
                $orderInfo['fanxian'] = round($orderInfo['fanxian'], 0);
                (new CoreMemberAccountService())->addLog($orderInfo['site_id'], $orderInfo['member_id'], MemberAccountTypeDict::POINT, $orderInfo['fanxian'], 'bwc_award', '霸王餐激励');
            }
            //进行成长值发放
            $this->sendGrowth($orderInfo['site_id'], $orderInfo['member_id'], 'tk_cps_bwc_order', ['from_type' => 'tk_cps_bwc_order']);
            //积分发放
            $this->sendPoint($orderInfo['site_id'], $orderInfo['member_id'], 'tk_cps_bwc_order', ['from_type' => 'tk_cps_bwc_order', 'momo' => '霸王餐订单完成奖励']);
            //会员等级激励发放
            $this->sendLevel($orderInfo['site_id'], $orderInfo['member_id']);
            //进行分销结算
            $this->fenxiaoEvent($orderInfo);
        }
        return true;
    }

    /**
     * @Notes:定时同步联盟订单状态
     * @Interface cronOrder
     * @throws Exception
     * @author: TK
     * @Time: 2024/5/20   下午5:17
     */
    public function cronOrder()
    {
        $pageSize = 100;
        $startTime = date("Y-m-d H:i:s", time() - 60 * 30);
        $endTime = date("Y-m-d H:i:s", time());
        for ($i = 1; $i <= 10; $i++) {
            $offset = ($i - 1) * $pageSize;
            $param = [
                'queryType' => 2,
                'startTime' => $startTime,
                'endTime' => $endTime,
                'offset' => $offset,
                'pageSize' => 100
            ];
            $result = $this->bwcOrder($param)['data'];
            if (empty($result)) break;
            $list = $result['orderList'] ?? [];
            if (!empty($list)) {
                foreach ($list as $item) {
                    //整合通知调用
                    $this->notice([
                        'orderSn' => $item['orderSn'] ?? '',
                        'state' => $item['state'] ?? '',
                        'reason' => $item['reason'] ?? '',
                        'xgzSettleStatus' => $item['xgzSettleStatus'] ?? '',
                        'planType' => $item['planType'] ?? '',
                        'commissionType' => $item['commissionType'] ?? '',
                        'commission' => $item['commission'] ?? '',
                        'paidAmount' => $item['paidAmount'] ?? '',
                        'eCommissionRatio' => $item['ecommissionRatio'] ?? '',
                        'eCommission' => $item['ecommission'] ?? '',
                        'orderTelephone' => $item['orderTelephone'] ?? '',
                        'userOrderSn' => $item['userOrderSn'] ?? '',
                    ]);
                }
            }
        }
    }

    /**
     * @Notes:霸王餐订单列表
     * @Interface bwcOrder
     * @param $data
     * @return array
     * @throws Exception
     * @author: TK
     * @Time: 2024/5/12   上午9:09
     */
    public function bwcOrder($data)
    {
        $res = $this->execute('xgzBwcOrder/union/list', $data);
        return $res;
    }

    /**
     * @Notes:上传截图
     * @Interface submitReview
     * @param $data
     * @return array
     * @throws Exception
     * @author: TK
     * @Time: 2024/5/12   上午9:09
     */
    public function submitReview($data)
    {
        $res = $this->execute('bwc/union/submitReview', $data);
        return [];
    }

    /**
     * @Notes:确认订单
     * @Interface confirmOrder
     * @param $data
     * @return array
     * @throws Exception
     * @author: TK
     * @Time: 2024/5/12   上午9:10
     */
    public function confirmOrder($data)
    {
        $res = $this->execute('bwc/union/confirmOrder', $data);
        return [];
    }

    /**
     * @Notes:取消订单
     * @Interface cancelEvent
     * @param $data
     * @return array
     * @throws Exception
     * @author: TK
     * @Time: 2024/5/12   上午9:10
     */
    public function cancelEvent($data)
    {

        $bwcModel = new BwcOrder();
        $where = [
            ['orderSn', '=', $data['orderSn']],
            ['site_id', '=', $this->site_id],
            ['member_id', '=', $this->member_id],
        ];
        $updateData = [
            'state' => 1,
        ];
        $bwcModel->update($updateData, $where);
        $this->execute('bwc/union/cancelevent', $data);
        return [];
    }

    /**
     * @Notes:霸王餐报名
     * @Interface signUp
     * @param $data
     * @return array
     * @throws Exception
     * @author: TK
     * @Time: 2024/5/12   上午9:10
     */
    public function signUp($data)
    {
        Db::startTrans();
        try {
            $bwcModel = new BwcOrder();
            $sid = 'sid' . $this->member_id;
            $data['notifyUrl'] = (new CommonService())->getUrl() . '/api/tk_cps/bwcnotice';  //回掉URL
            $data['sid'] = $sid;
            $insertData = $data['data'];
            $params = [
                'site_id' => $this->site_id,
                'member_id' => $this->member_id,
                'orderSn' => 'fh',
                'sid' => $sid,
                'create_time' => time(),
                'order_no' => create_no(),
                'name' => $insertData['name'] ?? '',
                'address' => $insertData['address'] ?? '',
                'logo' => $insertData['logo'],
                'shopOriginId' => $insertData['shopOriginId'] ?? '',
                'orderTelephone' => $data['telephone'],
                'platform' => $insertData['platform'],
                'platformName' => $insertData['platformName'],
                'platformLogo' => $insertData['platformLogo'],
                'source' => $insertData['source'],
                'actionUrl' => json_encode($insertData['actionUrl']),
                'commissionType' => $insertData['plan']['commissionType'],
                'planType'=>$insertData['plan']['planType'],
                'planTypeCh' => $insertData['plan']['planTypeCh'],
                'planTypeDescCh' => $insertData['plan']['planTypeDescCh'],
                'minAmount' => $insertData['plan']['minAmount'],
                'maxAmount' => $insertData['plan']['commission'],
                'commissionRatio' => $insertData['plan']['ratio'],
                'planId' => $data['planId'],
                'state' => 3
            ];
            $bwcData = $data;
            unset($bwcData['data']);
            $res = $this->execute('bwc/union/signUp', $bwcData);
            //霸王餐订单号存入数据库   进行数据入库
            if ($res['code'] == 0) {
                $orderSn = $res['data']['orderSn'];
                $params['orderSn'] = $orderSn;
                $bwcOrder = $bwcModel->create($params);
            } else {
                Log::write('-------------霸王餐活动报名失败---' . date('Y-m-d H:i:s', time()));
                Log::write($bwcData);
                Log::write($res);
                Db::rollback();
                throw new Exception($res['message']);
            }
            Db::Commit();
            return $bwcOrder->id;
        } catch (Exception $e) {
            Db::rollback();
            throw new Exception($e->getMessage());
        }

    }

    /**
     * @Notes:活动信息
     * @Interface actInfo
     * @param $data
     * @return mixed
     * @throws Exception
     * @author: TK
     * @Time: 2024/5/12   上午9:10
     */
    public function actInfo($data)
    {
        $config = $this->getSiteConfig($this->site_id);
        $rate = $config['fanxianratio'] / 100;
        $res=$this->execute('bwc/union/shopDetail', $data);
        if ($res['code'] != 0){
            $res['data']=[];
            return $res;
        }
        $res['data']['plan']['ratio']=number_format(($res['data']['plan']['ratio']/100*$rate)*100, 2, '.', '');
        $res['data']['plan']['commission']=number_format($res['data']['plan']['commission']*$rate, 2, '.', '');

        return $res;
    }

    /**
     * @Notes:活动列表
     * @Interface actList
     * @param $data
     * @return mixed
     * @throws Exception
     * @author: TK
     * @Time: 2024/5/12   上午9:10
     */
    public function actList($data)
    {
        $config = $this->getSiteConfig($this->site_id);
        $rate = $config['fanxianratio'] / 100;
        $res=$this->execute('bwc/union/merchantList', $data);
        $merchantList=$res['data']['merchantList'];
        foreach ($merchantList as $k => $v) {
           if($v['planList']){
               foreach ($v['planList'] as $k1=>$v1){
                   $merchantList[$k]['planList'][$k1]['ratio']= number_format(($v1['ratio']/100*$rate)*100, 2, '.', '');
                   $merchantList[$k]['planList'][$k1]['commission']= number_format($v1['commission']*$rate, 2, '.', '');
               }
           }
        }
        $res['data']['merchantList']=$merchantList;
        return $res;
    }

    /**
     * @Notes:签名生成
     * @Interface sign_create
     * @param $data
     * @param $secret
     * @return string
     * @author: TK
     * @Time: 2024/5/12   上午9:11
     */
    public function sign_create($data, $secret = '')
    {
        ksort($data);
        $stringToBeSigned = '';
        foreach ($data as $k => $v) {
            if ($v === "" || $v === null) continue;
            if (!is_array($v) && "@" != substr($v, 0, 1)) {
                if (is_bool($v)) {
                    $stringToBeSigned .= "$k" . ($v == true ? "true" : "false");
                } else {
                    $stringToBeSigned .= "$k$v";
                }

            }
        }
        return strtolower(md5($secret . $stringToBeSigned . $secret));
    }

    /**
     * @Notes:  公用调用方法
     * @Interface execute
     * @param $path //具体方法
     * @param $data //参数
     * @return mixed
     * @throws Exception
     * @author: TK
     * @Time: 2024/5/12   上午8:20
     */
    public function execute($path, $data)
    {
        $config = $this->getConfig();
        //联盟对接信息
        $appkey = $config['appkey'];
        $appsecret = $config['appsecret'];
        $data['timeStamp'] = time();
        $sign = $this->sign_create($data, $appsecret);
        $data['sign'] = $sign;
        $curl = curl_init();
        curl_setopt_array($curl, array(
            CURLOPT_URL => 'https://api.xiguazhu.com/' . $path,
            CURLOPT_RETURNTRANSFER => true,
            CURLOPT_ENCODING => '',
            CURLOPT_MAXREDIRS => 10,
            CURLOPT_TIMEOUT => 0,
            CURLOPT_FOLLOWLOCATION => true,
            CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
            CURLOPT_CUSTOMREQUEST => 'POST',
            CURLOPT_POSTFIELDS => json_encode($data),
            CURLOPT_HTTPHEADER => array(
                'Content-Type: application/json',
                'appKey:' . $appkey
            ),
        ));
        $result = curl_exec($curl);
        $err = curl_error($curl);
        curl_close($curl);
        if ($err) {
            throw new Exception($err);
        } else {
            return json_decode($result, true);
        }
    }

    public function getSiteConfig($site_id)
    {
        $info = (new CoreConfigService())->getConfig($site_id, ConfigDict::getBwcType());
        if (!isset($info['value'])) {
            throw new Exception('请先完成霸王餐配置');
        }
        return $info['value'];
    }

    public function getConfig()
    {
        $info = (new CoreConfigService())->getConfig($this->site_id, ConfigDict::getBwcType());
        if (!isset($info['value'])) {
            throw new Exception('请先完成霸王餐配置');
        }
        return $info['value'];
    }
}