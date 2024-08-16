<?php
// +----------------------------------------------------------------------
// | Niucloud-admin 企业快速开发的多应用管理平台
// +----------------------------------------------------------------------
// | 官方网址：https://www.niucloud.com
// +----------------------------------------------------------------------
// | niucloud团队 版权所有 开源版本可自由商用
// +----------------------------------------------------------------------
// | Author: Niucloud Team
// +----------------------------------------------------------------------

namespace addon\tk_cps\app\service\admin\act;

use addon\tk_cps\app\model\act\Act;
use addon\tk_cps\app\model\actitem\ActItem;
use addon\tk_cps\app\service\core\ConfigService;
use core\base\BaseAdminService;
use addon\tk_cps\app\service\admin\CpsService;
use core\exception\CommonException;
use addon\tk_cps\app\service\core\CommonService;
use addon\tk_cps\app\service\core\FetchService;

/**
 * CPS活动链接服务层
 * Class ActService
 * @package addon\tk_cps\app\service\admin\act
 */
class ActService extends BaseAdminService
{
    public function __construct()
    {
        parent::__construct();
        $this->model = new Act();
        $this->actModel = new Act();
        $this->actItemModel = new ActItem();
    }

    /**
     * 获取CPS活动链接列表
     * @param array $where
     * @return array
     */
    public function getPage(array $where = [])
    {
        $field = 'id,act_id,act_name,type,desc,img,icon,poster,commission_rate,introduce,attribution_explain,settlement_time,start_date,end_date,create_time';
        $order = 'create_time desc';

        $search_model = $this->model->withSearch(["id", "act_id", "act_name", "type", "desc", "img", "icon", "poster", "commission_rate", "introduce", "attribution_explain", "settlement_time", "start_date", "end_date", "create_time"], $where)->field($field)->order($order);
        $list = $this->pageQuery($search_model);
        return $list;
    }

    public function saveImg(int $id)
    {
        $field = 'id,act_id,act_name,type,desc,img,icon,poster,commission_rate,introduce,attribution_explain,settlement_time,start_date,end_date,create_time';
        $info = $this->model->field($field)->where([['id', "=", $id]])->findOrEmpty()->toArray();
        $this->fetchImg($info['img']);
        $this->fetchImg($info['icon']);
        return true;
    }
    public function fetchImg($url)
    {
        (new FetchService())->image($url, $this->site_id, 'cps_img/' . $this->site_id . '/' . date('Y') . date('m') . date('d'));
        return true;
    }

    /**
     * 获取CPS活动链接信息
     * @param int $id
     * @return array
     */
    public function getInfo(int $id)
    {
        $field = 'id,act_id,act_name,type,desc,img,icon,poster,commission_rate,introduce,attribution_explain,settlement_time,start_date,end_date,create_time';

        $info = $this->model->field($field)->where([['id', "=", $id]])->findOrEmpty()->toArray();
        return $info;
    }

    /**
     * 推广信息
     * @param int $id
     * @return array|null
     */
    public function shareInfo(int $id)
    {
        $info = $this->model->where(['id' => $id])->findOrEmpty();
        if ($info->isEmpty()) throw new CommonException('活动未找到');
        $data = (new CpsService())->asyncActItem($info['act_id'], $info['type']);
        return $data;
    }

    //队列形式同步所有
    public function asyncCpsItemJob($site_id, $type, $act_id)
    {
        $this->commonService = new CommonService();
        $this->apiKey = (new ConfigService())->getApiKey($site_id);
        $this->mapiKey = (new ConfigService())->getMapiKey($site_id);
        $this->siteKey = (new ConfigService())->getSiteKey($site_id);
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
                $info = $this->actItemModel->where(['site_id' => $site_id, ' type' => $type, 'act_id' => $act_id])->findOrEmpty();
                $h5 = '';
                if (isset($getdata['h5']) && $getdata['h5'] != '') {
                    $h5 = ($getdata['h5']);
                }
                if (isset($getdata['long_h5']) && $getdata['long_h5'] != '') {
                    $h5 = ($getdata['long_h5']);
                }
                if ($info->isEmpty()) {
                    $info->save([
                        'act_name' => $getdata['act_name'] ?? '未命名活动',
                        'act_id' => $act_id,
                        'site_id' => $site_id,
                        'h5' => $h5,
                        'weapp' => json_encode($weapp),
                        'aliapp' => json_encode($aliapp),
                        'type' => $type
                    ]);
                } else {
                    $info->where(['site_id' => $site_id, 'type' => $type, 'act_id' => $act_id])->update([
                        'act_name' => $getdata['act_name'] ?? '未命名活动',
                        'act_id' => $act_id,
                        'site_id' => $site_id,
                        'h5' => $h5,
                        'weapp' => json_encode($weapp),
                        'aliapp' => json_encode($aliapp),
                        'type' => $type
                    ]);
                }
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
                $info = $this->actItemModel->where(['site_id' => $site_id, ' type' => $type, 'act_id' => $act_id])->findOrEmpty();
                if ($info->isEmpty()) {
                    $info->save([
                        'act_name' => $getdata['wenan'],
                        'act_id' => $act_id,
                        'site_id' => $site_id,
                        'h5' => $getdata['url'] ?? '',
                        'weapp' => json_encode($weapp),
                        'aliapp' => json_encode($aliapp),
                        'type' => $type
                    ]);
                } else {
                    $info->where(['site_id' => $site_id, 'type' => $type, 'act_id' => $act_id])->update([
                        'act_name' => $getdata['wenan'],
                        'act_id' => $act_id,
                        'site_id' => $site_id,
                        'h5' => $getdata['url'] ?? '',
                        'weapp' => json_encode($weapp),
                        'aliapp' => json_encode($aliapp),
                        'type' => $type,
                    ]);
                }
            }
        }
    }

}
