<?php
// +----------------------------------------------------------------------
// | Niucloud-admin 企业快速开发的saas管理平台
// +----------------------------------------------------------------------
// | 官方网址：https://www.niucloud.com
// +----------------------------------------------------------------------
// | niucloud团队 版权所有 开源版本可自由商用
// +----------------------------------------------------------------------
// | Author: Niucloud Team
// +----------------------------------------------------------------------

namespace addon\shop\app\listener\order;

use addon\shop\app\dict\order\InvoiceDict;
use addon\shop\app\model\order\Invoice;

/**
 * 发票导出数据源查询
 * Class MemberExportTypeListener
 * @package app\listener\member
 */
class ShopInvoiceExportDataListener
{

    public function handle($param)
    {
        $data = [];
        if ($param['type'] == 'shop_invoice') {
            $model = new Invoice();
            $order = 'id desc';
            //查询导出订单数据
            $search_model = $model->withSearch(["header_name", "create_time", "invoice_time"], $param['where'])->where([['site_id', '=', $param['site_id']], ['status', '=', InvoiceDict::OPEN]])->append(['header_type_name', 'type_name', 'is_invoice_name'])->field('*')->order($order);
            if ($param['page']['page'] > 0 && $param['page']['limit'] > 0) {
                $data = $search_model->page($param['page']['page'], $param['page']['limit'])->select()->toArray();
            } else {
                $data = $search_model->select()->toArray();
            }
        }
        return $data;
    }
}