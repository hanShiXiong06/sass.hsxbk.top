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

namespace addon\qf_notice\app\service\admin\addon;

use addon\qf_notice\app\dict\type\TypeDict;
use addon\qf_notice\app\model\addon\Addon;

use addon\qf_notice\app\service\core\SendNoticeService;
use addon\qf_notice\app\model\category\Category;
use app\model\member\MemberLevel;
use core\base\BaseAdminService;


/**
 * 群发应用服务层
 * Class AddonService
 * @package addon\qf_notice\app\service\admin\addon
 */
class AddonService extends BaseAdminService
{
    public function __construct()
    {
        parent::__construct();
        $this->model = new Addon();
    }
    public function sendNotice(int $id)
    {
        $info = $this->model->where([['id', "=", $id]])->findOrEmpty()->toArray();
        (new SendNoticeService())->sendNotice($this->site_id,$info);
        return [];
    }
    /**
     * 获取群发应用列表
     * @param array $where
     * @return array
     */
    public function getPage(array $where = [])
    {
        $field = 'id,site_id,name,desc,image,is_main,type,config_id,value,is_go_url,url,page,create_time,level_id,cat_id,category_id,status';
        $order = 'create_time desc';
        $search_model = $this->model->where([ [ 'site_id' ,"=", $this->site_id ] ])
            ->withSearch(["name","image","type","category_id","create_time"], $where)->field($field)->order($order);
        $list = $this->pageQuery($search_model);
        foreach ($list['data'] as $k => $v) {
            $list['data'][$k]['type_name']=TypeDict::getAddonType($list['data'][$k]['type'])['name'];
        }
        return $list;
    }

    /**
     * 获取群发应用信息
     * @param int $id
     * @return array
     */
    public function getInfo(int $id)
    {
        $field = 'id,site_id,name,desc,image,is_main,type,config_id,value,is_go_url,url,page,create_time,template_id,sms_content,level_id,cat_id,email_title,email_content,email_desc,category_id,status';
        $info = $this->model->field($field)->where([['id', "=", $id]])->findOrEmpty()->toArray();
        $info['value']=json_decode($info['value'],true);
        return $info;
    }

    /**
     * 添加群发应用
     * @param array $data
     * @return mixed
     */
    public function add(array $data)
    {
        $data['site_id'] = $this->site_id;
        $res = $this->model->create($data);
        return $res->id;

    }

    /**
     * 群发应用编辑
     * @param int $id
     * @param array $data
     * @return bool
     */
    public function edit(int $id, array $data)
    {

        $this->model->where([['id', '=', $id],['site_id', '=', $this->site_id]])->update($data);
        return true;
    }

    /**
     * 删除群发应用
     * @param int $id
     * @return bool
     */
    public function del(int $id)
    {
        $model = $this->model->where([['id', '=', $id],['site_id', '=', $this->site_id]])->find();
        $res = $model->delete();
        return $res;
    }
    public function getMemberLevelAll(){
        $memberLevelModel = new MemberLevel();
        return $memberLevelModel->where([["site_id","=",$this->site_id]])->select()->toArray();
    }

    public function getCategoryAll(){
        $categoryModel = new Category();
        return $categoryModel->where([["site_id","=",$this->site_id]])->select()->toArray();
    }
}
