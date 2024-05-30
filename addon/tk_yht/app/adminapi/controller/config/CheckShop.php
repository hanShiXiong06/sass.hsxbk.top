<?php

namespace addon\tk_yht\app\adminapi\controller\config;

use addon\tk_yht\app\service\core\CopyGoodsService;
use core\base\BaseAdminController;
use core\exception\CommonException;
class CheckShop extends BaseAdminController
{
   public function checkShop()
   {
       if (!in_array('shop', (new CopyGoodsService())->checkShop())) {
           throw new CommonException('需要搭配niucloud-shop商城使用，暂无使用权限');
       }else{
           return success('验证成功');
       }
   }
}
