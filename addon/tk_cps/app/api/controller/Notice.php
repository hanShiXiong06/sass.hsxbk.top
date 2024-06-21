<?php
namespace addon\tk_cps\app\api\controller;
use addon\tk_cps\app\service\core\BwcService;
use core\base\BaseController;
use think\Response;
class Notice extends BaseController
{
   public function bwcNotice()
   {
       $data = $this->request->params([
           ['orderTelephone', ''],
           ['reason', ''],
           ['xgzSettleStatus',''],
           ['planType', ''],
           ['orderSn', ''],
           ['commissionType', ''],
           ['commission', ''],
           ['state', ''],
           ['paidAmount', ''],
           ['eCommissionRatio', ''],
           ['eCommission',''],
           ['userOrderSn',''],
           ['finishedTime',''],
       ]);
       (new BwcService())->notice($data);
       return Response::create(['message' => '响应成功', 'code' => 0], 'json', 200);
   }
}