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

namespace addon\phone_shop_price\app\service\admin\phone_shop_recycle_order;

use addon\phone_shop_price\app\model\phone_shop_recycle_order\PhoneShopRecycleOrder;
use app\model\member\Member;

use core\base\BaseAdminService;


/**
 * 回收订单服务层
 * Class PhoneShopRecycleOrderService
 * @package addon\phone_shop_price\app\service\admin\phone_shop_recycle_order
 */
class PhoneShopRecycleOrderService extends BaseAdminService
{
    public function __construct()
    {
        parent::__construct();
        $this->model = new PhoneShopRecycleOrder();
    }

    /**
     * 获取回收订单列表
     * @param array $where
     * @return array
     */
    public function getPage(array $where = [])
    {
        $field = 'id,member_id,site_id,count,express_id,send_username,telphone,pay_type,account,status,create_at,over_at,comment,close_express_id';
        $order = 'create_at asc';

        $search_model = $this->model->where([ [ 'site_id' ,"=", $this->site_id ] ])->withSearch(["id","count","express_id","send_username","telphone","pay_type","account","status","create_at","over_at","comment","close_express_id"], $where)->with(['member'])->field($field)->order($order);
        $list = $this->pageQuery($search_model);
        return $list;
    }

    /**
     * 获取回收订单信息
     * @param int $id
     * @return array
     */
    public function getInfo(int $id)
    {
        $field = 'id,member_id,site_id,count,express_id,send_username,telphone,pay_type,account,status,create_at,over_at,comment,close_express_id';

        $info = $this->model->field($field)->where([['id', "=", $id]])->with(['member'])->findOrEmpty()->toArray();
        return $info;
    }

    /**
     * 添加回收订单
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
     * 回收订单编辑
     * @param int $id
     * @param array $data
     * @return bool
     */
    public function edit(int $id, array $data)
    {
        // $data['update_at'] = time();
        $this->model->where([['id', '=', $id],['site_id', '=', $this->site_id]])->update($data);
        return true;
    }

    /**
     * 删除回收订单
     * @param int $id
     * @return bool
     */
    public function del(int $id)
    {
        $model = $this->model->where([['id', '=', $id],['site_id', '=', $this->site_id]])->find();
        $res = $model->delete();
        return $res;
    }
    
    public function getMemberAll(){
       // $memberModel = new Member();
       return [] ; // $memberModel->where([["site_id","=",$this->site_id]])->select()->toArray();
    }

}
