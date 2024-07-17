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

namespace addon\tk_cps\app\service\admin\actorder;

use addon\tk_cps\app\model\actorder\Actorder;

use core\base\BaseAdminService;


/**
 * CPS活动订单服务层
 * Class ActorderService
 * @package addon\tk_cps\app\service\admin\actorder
 */
class ActorderService extends BaseAdminService
{
    public function __construct()
    {
        parent::__construct();
        $this->model = new Actorder();
    }

    /**
     * 获取CPS活动订单列表
     * @param array $where
     * @return array
     */
    public function getPage(array $where = [])
    {
        $field = 'id,sid,site_id,member_id,name,chanel,order_id,pay_money,rate,commission,status,status_name,jl_js,pt_js,create_time,pay_time';
        $order = 'create_time desc';

         $search_model = $this->model->where([ [ 'site_id' ,"=", $this->site_id ] ])->withSearch(["sid","order_id","jl_js","pt_js","create_time"], $where)->field($field)->order($order);;
        $list = $this->pageQuery($search_model);
        return $list;
    }

    /**
     * 获取CPS活动订单信息
     * @param int $id
     * @return array
     */
    public function getInfo(int $id)
    {
        $field = 'id,sid,site_id,member_id,name,chanel,order_id,pay_money,rate,commission,status,status_name,jl_js,pt_js,create_time,pay_time';

        $info = $this->model->field($field)->where([['id', "=", $id]])->findOrEmpty()->toArray();;
        return $info;
    }

    /**
     * 添加CPS活动订单
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
     * CPS活动订单编辑
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
     * 删除CPS活动订单
     * @param int $id
     * @return bool
     */
    public function del(int $id)
    {
        $model = $this->model->where([['id', '=', $id],['site_id', '=', $this->site_id]])->find();
        $res = $model->delete();
        return $res;
    }
    
}
