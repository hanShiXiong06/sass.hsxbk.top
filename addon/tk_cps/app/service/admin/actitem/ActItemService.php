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

namespace addon\tk_cps\app\service\admin\actitem;

use addon\tk_cps\app\model\actitem\ActItem;

use core\base\BaseAdminService;


/**
 * 活动详情服务层
 * Class ActItemService
 * @package addon\tk_cps\app\service\admin\actitem
 */
class ActItemService extends BaseAdminService
{
    public function __construct()
    {
        parent::__construct();
        $this->model = new ActItem();
    }

    /**
     * 获取活动详情列表
     * @param array $where
     * @return array
     */
    public function getPage(array $where = [])
    {
        $field = 'id,act_id,act_name,type,site_id,h5,weapp,aliapp,share_info,create_time';
        $order = 'create_time desc';
        $search_model = $this->model->where([ [ 'site_id' ,"=", $this->site_id ] ])->withSearch(["id","act_id","act_name","type","h5","weapp","aliapp","share_info","create_time"], $where)->field($field)->order($order);;
        $list = $this->pageQuery($search_model);
        return $list;
    }

    /**
     * 获取活动详情信息
     * @param int $id
     * @return array
     */
    public function getInfo(int $id)
    {
        $field = 'id,act_id,act_name,type,site_id,h5,weapp,aliapp,share_info,create_time';

        $info = $this->model->field($field)->where([['id', "=", $id]])->findOrEmpty()->toArray();;
        return $info;
    }

    /**
     * 添加活动详情
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
     * 活动详情编辑
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
     * 删除活动详情
     * @param int $id
     * @return bool
     */
    public function del(int $id)
    {
        $model = $this->model->where([['id', '=', $id],['site_id', '=', $this->site_id]])->find();
        $res = $model->delete();
        return $res;
    }
    public function delselect($ids){
        $res=$this->model->where('id', 'in', $ids)->delete();
        return $res;
    }
}
