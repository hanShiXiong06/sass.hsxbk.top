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

namespace addon\phone_shop\app\service\admin\refund;

use addon\phone_shop\app\dict\order\OrderRefundLogDict;
use addon\phone_shop\app\model\order\OrderRefund;
use addon\phone_shop\app\service\core\refund\CoreRefundActionService;
use core\base\BaseAdminService;

/**
 *  退款操作服务层
 */
class RefundActionService extends BaseAdminService
{
    public function __construct()
    {
        parent::__construct();
        $this->model = new OrderRefund();
    }

    /**
     * 审核退款申请
     * @param $data ['is-agree]
     * @return void
     */
    public function auditApply($data)
    {
        $data[ 'main_type' ] = OrderRefundLogDict::STORE;
        $data[ 'main_id' ] = $this->uid;
        $data[ 'site_id' ] = $this->site_id;
        (new CoreRefundActionService())->auditApply($data);
        return true;
    }

    /**
     * 审核是否确认收货
     * @param $data
     * @return true
     */
    public function auditRefundGoods($data)
    {
        $data[ 'main_type' ] = OrderRefundLogDict::STORE;
        $data[ 'main_id' ] = $this->uid;
        $data[ 'site_id' ] = $this->site_id;
        (new CoreRefundActionService())->auditRefundGoods($data);
        return true;
    }

}
