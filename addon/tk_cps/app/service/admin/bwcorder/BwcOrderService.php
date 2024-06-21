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

namespace addon\tk_cps\app\service\admin\bwcorder;

use addon\tk_cps\app\model\bwcorder\BwcOrder;

use core\base\BaseAdminService;


/**
 * 霸王餐订单服务层
 * Class BwcOrderService
 * @package addon\tk_cps\app\service\admin\bwcorder
 */
class BwcOrderService extends BaseAdminService
{
    public function __construct()
    {
        parent::__construct();
        $this->model = new BwcOrder();
    }

    /**
     * 获取霸王餐订单列表
     * @param array $where
     * @return array
     */
    public function getPage(array $where = [])
    {
        $field = 'id,site_id,member_id,orderSn,order_no,userOrderSn,paidAmount,shopOriginId,orderTelephone,name,logo,address,distance,platform,platformName,platformLogo,source,actionUrl,planId,planTypeCh,planTypeDescCh,plan,commissionType,sid,minAmount,maxAmount,commission,commissionRatio,ecommission,ecommissionRatio,state,createTime,finishedTime,xgzSettleStatus,xgzSettleTime,create_time,close_time,reason,fanxian,is_fanxian';
        $order = 'create_time desc';

         $search_model = $this->model->where([ [ 'site_id' ,"=", $this->site_id ] ])->withSearch(["member_id","orderSn","order_no","userOrderSn","paidAmount","shopOriginId","orderTelephone","name","logo","address","platformName","platformLogo","source","planId","planTypeCh","planTypeDescCh","commissionType","sid","minAmount","maxAmount","commission","commissionRatio","ecommission","ecommissionRatio","state","createTime","finishedTime","xgzSettleStatus","xgzSettleTime","create_time","close_time","reason","fanxian","is_fanxian"], $where)->field($field)->order($order);;
        $list = $this->pageQuery($search_model);
        return $list;
    }

    /**
     * 获取霸王餐订单信息
     * @param int $id
     * @return array
     */
    public function getInfo(int $id)
    {
        $field = 'id,site_id,member_id,orderSn,order_no,userOrderSn,paidAmount,shopOriginId,orderTelephone,name,logo,address,distance,platform,platformName,platformLogo,source,actionUrl,planId,planTypeCh,planTypeDescCh,plan,commissionType,sid,minAmount,maxAmount,commission,commissionRatio,ecommission,ecommissionRatio,state,createTime,finishedTime,xgzSettleStatus,xgzSettleTime,create_time,close_time,reason,fanxian,is_fanxian';

        $info = $this->model->field($field)->where([['id', "=", $id]])->findOrEmpty()->toArray();;
        return $info;
    }

    /**
     * 添加霸王餐订单
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
     * 霸王餐订单编辑
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
     * 删除霸王餐订单
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
