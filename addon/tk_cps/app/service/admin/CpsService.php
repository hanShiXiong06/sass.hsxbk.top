<?php

namespace addon\tk_cps\app\service\admin;

use addon\tk_cps\app\service\core\CommonService;
use addon\tk_cps\app\service\core\ConfigService;
use think\Exception;
use core\base\BaseApiService;
use core\exception\CommonException;
use addon\tk_cps\app\model\act\Act;
use addon\tk_cps\app\model\actitem\ActItem;
use addon\tk_cps\app\job\ActItemJob;
use addon\tk_cps\app\model\job\Job;
class CpsService extends BaseApiService
{
    protected $fromPath;
    protected $toPath;

    public function __construct()
    {
        parent::__construct();
        $this->commonService = new CommonService();
        $this->apiKey = (new ConfigService())->getApiKey();
        $this->mapiKey = (new ConfigService())->getMapiKey();
        $this->siteKey = (new ConfigService())->getSiteKey();
        $this->actModel = new Act();
        $this->actItemModel = new ActItem();
    }

    public function getAllItem()
    {
        //增加队列检查
        $num=count((new Job())->select());
        if($num>50) throw new \think\Exception('任务繁忙，请稍后操作');
        $data = $this->actModel->select();
        foreach ($data as $k => $v) {
            ActItemJob::dispatch(['site_id' => $this->site_id, 'type' => $v['type'], 'act_id' => $v['act_id']]);
        }
        return true;
    }

    //获取活动内容
    public function asyncAct($type)
    {
        //同步活动前删除推广
        $this->actItemModel->where(['site_id'=>$this->site_id])->delete();
        if ($type == 0) {
            $data = $this->commonService->http_get('http://api.jutuike.com/union/act_list', ['apikey' => $this->apiKey, 'pageSize' => 100]);
            if ($data['code'] == 1) {
                $actData = []; // 创建一个空数组用于保存数据
                foreach ($data['data']['data'] as $k => $v) {
                    $actData[] = [
                        'act_id' => $v['act_id'],
                        'act_name' => $v['act_name'],
                        'desc' => $v['desc'],
                        'type' => $type,
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
                $this->actModel->where(['type' => $type])->delete();
                $this->actModel->saveAll($actData); // 一次性保存所有数据
                return true;
            } else {
                throw new CommonException($data['msg']);
            }
        }
        if ($type == 1) {
            $data = $this->commonService->http_get('http://api-gw.haojingke.com/index.php/v2/api/index/actlist', ['apikey' => $this->mapiKey, 'limit' => 100]);
            if ($data['status_code'] == 200) {
                $actData = []; // 创建一个空数组用于保存数据
                foreach ($data['data']['list'] as $k => $v) {
                    $actData[] = [
                        'act_id' => $v['actid'],
                        'act_name' => $v['act_name'],
                        'desc' => $v['act_desc'],
                        'type' => $type,
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
                $this->actModel->where(['type' => $type])->delete();
                $this->actModel->saveAll($actData); // 一次性保存所有数据
                return true;
            } else {
                throw new CommonException($data['message']);
            }
        }

    }

    //同步活动
    public function asyncActItem($act_id, $type = 0)
    {
        if ($type == 0) {
            $data = $this->commonService->http_get('http://api.jutuike.com/union/act', ['apikey' => $this->apiKey, 'act_id' => $act_id, 'sid' => $this->siteKey]);
            if ($data['code'] == 1) {
                $getdata = $data['data'];
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
                $info = $this->actItemModel->where(['site_id' => $this->site_id, ' type' => $type, 'act_id' => $act_id])->findOrEmpty();
                $h5='';
                if (isset($getdata['h5']) && $getdata['h5'] != '') {
                    $h5 = ($getdata['h5']);
                }
                if (isset($getdata['long_h5']) && $getdata['long_h5'] != '') {
                    $h5 = ($getdata['long_h5']);
                }
                if ($info->isEmpty()) {
                    $info->save([
                        'act_name' => $getdata['act_name']??'未定义活动标题',
                        'act_id' => $act_id,
                        'site_id' => $this->site_id,
                        'h5' => $h5 ?? '',
                        'weapp' => json_encode($weapp),
                        'aliapp' => json_encode($aliapp),
                        'type' => $type
                    ]);
                } else {
                    $info->where(['site_id' => $this->site_id, 'type' => $type, 'act_id' => $act_id])->update([
                        'act_name' => $getdata['act_name'],
                        'act_id' => $act_id,
                        'site_id' => $this->site_id,
                        'h5' => $h5 ?? '',
                        'weapp' => json_encode($weapp),
                        'aliapp' => json_encode($aliapp),
                        'type' => $type
                    ]);
                }
                $info = $this->actItemModel->where(['site_id' => $this->site_id, 'type' => $type, 'act_id' => $act_id])->findOrEmpty()->toArray();
                $info['weapp'] = json_decode($info['weapp'], true);
                $info['aliapp'] = json_decode($info['aliapp'], true);
                return $info;
            } else {
                throw new CommonException($data['msg']);
            }

        }
        if ($type == 1) {
            $data = $this->commonService->http_get('http://api-gw.haojingke.com/index.php/v2/api/index/actunionurl', ['apikey' => $this->mapiKey, 'actid' => $act_id, 'extend_id' => $this->siteKey]);
            if ($data['status_code'] == 200) {
                $getdata = $data['data'];
                $weapp = [
                    'appid' => $getdata['we_app_info']['app_id'] ?? '',
                    'pagepath' => $getdata['we_app_info']['path'] ?? '',
                ];
                $aliapp = [
                    'appid' => '',
                    'pagepath' => '',
                    'original_id' => ''
                ];
                $info = $this->actItemModel->where(['site_id' => $this->site_id, ' type' => $type, 'act_id' => $act_id])->findOrEmpty();
                if ($info->isEmpty()) {
                    $info->save([
                        'act_name' => $getdata['wenan']??'未定义活动标题',
                        'act_id' => $act_id,
                        'site_id' => $this->site_id,
                        'h5' => $getdata['url'] ?? '',
                        'weapp' => json_encode($weapp),
                        'aliapp' => json_encode($aliapp),
                        'type' => $type
                    ]);
                } else {
                    $info->where(['site_id' => $this->site_id, 'type' => $type, 'act_id' => $act_id])->update([
                        'act_name' => $getdata['wenan'],
                        'act_id' => $act_id,
                        'site_id' => $this->site_id,
                        'h5' => $getdata['url'] ?? '',
                        'weapp' => json_encode($weapp),
                        'aliapp' => json_encode($aliapp),
                        'type' => $type,
                    ]);
                }
                $info = $this->actItemModel->where(['site_id' => $this->site_id, 'type' => $type, 'act_id' => $act_id])->findOrEmpty()->toArray();
                $info['weapp'] = json_decode($info['weapp'], true);
                $info['aliapp'] = json_decode($info['aliapp'], true);
                return $info;
            } else {
                throw new CommonException($data['message']);
            }

        }
    }

}