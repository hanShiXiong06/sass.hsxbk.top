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

namespace addon\fast_pay\app\service\admin\businessorder;

use addon\fast_pay\app\model\businessorder\BusinessOrder;
use app\model\member\Member;
use addon\fast_pay\app\model\business\Business;
use core\base\BaseAdminService;


/**
 * 商户订单列服务层
 * Class BusinessOrderService
 * @package addon\fast_pay\app\service\admin\businessorder
 */
class BusinessOrderService extends BaseAdminService
{
    public function __construct()
    {
        parent::__construct();
        $this->model = new BusinessOrder();
    }

    /**
     * 获取商户订单列列表
     * @param array $where
     * @return array
     */
    public function getPage(array $where = [])
    {
        $field = 'id,site_id,member_id,business_id,order_from,order_id,order_money,order_discount_money,order_status,refund_status,out_trade_no,remark,pay_time,create_time,close_reason,is_enable_refund,close_time,ip,update_time,delete_time';
        $order = 'create_time desc';

        $search_model = $this->model->where([ [ 'site_id' ,"=", $this->site_id ] ])->withSearch(["id","member_id","business_id","order_from","order_id","order_status","out_trade_no","pay_time"], $where)->with(['member','member','business'])->field($field)->order($order);
        $list = $this->pageQuery($search_model);
        return $list;
    }

    /**
     * 获取商户订单列信息
     * @param int $id
     * @return array
     */
    public function getInfo(int $id)
    {
        $field = 'id,site_id,member_id,business_id,order_from,order_id,order_money,order_discount_money,order_status,refund_status,out_trade_no,remark,pay_time,create_time,close_reason,is_enable_refund,close_time,ip,update_time,delete_time';

        $info = $this->model->field($field)->where([['id', "=", $id]])->with(['member','member','business'])->findOrEmpty()->toArray();
        return $info;
    }

    /**
     * 添加商户订单列
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
     * 商户订单列编辑
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
     * 删除商户订单列
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
       $memberModel = new Member();
       return $memberModel->where([["site_id","=",$this->site_id]])->select()->toArray();
    }


    public function getBusinessAll(){
       $businessModel = new Business();
       return $businessModel->where([["site_id","=",$this->site_id]])->select()->toArray();
    }

}
