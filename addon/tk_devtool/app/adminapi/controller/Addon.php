<?php
// +----------------------------------------------------------------------
// | Author: TK
// +----------------------------------------------------------------------

namespace addon\tk_devtool\app\adminapi\controller;

use addon\tk_devtool\app\service\admin\AddonService;
use app\service\admin\addon\AddonDevelopService;
use core\base\BaseAdminController;

class Addon extends BaseAdminController
{
//    public function ceshi()
//    {
//        $data = $this->request->params([
//            ['file_url', 'upload/attachment/document/applet/0/202407/16/1721140245420862bf24e4d25dbc269bce3c966a4e_local.zip'],
//            ['addon_key','']
//        ]);
//        return success('操作成功', (new AddonService())->uploadAddon($data));
//    }
    public function build($key){

        return success('打包成功',(new AddonService())->build($key));
    }

   public function addonUpload()
   {
       $data = $this->request->params([
           ['file_url', ''],
           ['addon_key','']
       ]);
       return success('操作成功', (new AddonService())->uploadAddon($data));
   }
}
