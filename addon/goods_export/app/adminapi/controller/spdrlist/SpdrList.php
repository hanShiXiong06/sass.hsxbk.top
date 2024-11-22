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

namespace addon\goods_export\app\adminapi\controller\spdrlist;

use core\base\BaseAdminController;
use addon\goods_export\app\service\admin\spdrlist\SpdrListService;


/**
 * 商品导入列控制器
 * Class SpdrList
 * @package addon\spdr\app\adminapi\controller\spdrlist
 */
class SpdrList extends BaseAdminController
{
   /**
    * 获取商品导入列列表
    * @return \think\Response
    */
    public function lists(){
        $data = $this->request->params([
             ["status",""],
             ["create_time",["",""]]
        ]);
        return success((new SpdrListService())->getPage($data));
    }

    /**
     * 商品导入列详情
     * @param int $id
     * @return \think\Response
     */
    public function info(int $id){
        return success((new SpdrListService())->getInfo($id));
    }

    /**
     * 添加商品导入列
     * @return \think\Response
     */
    public function add(){
        $data = $this->request->params([
             ["name",""],
             ["cat_id",0],
             ["cat_name",""],
             ["flie",""],
             ["num",0],
             ["success_num",0],
             ["fail_num",0],
             ["status",""],

        ]);
        $this->validate($data, 'addon\goods_export\app\validate\spdrlist\SpdrList.add');
        $id = (new SpdrListService())->add($data);
        return success('ADD_SUCCESS', ['id' => $id]);
    }

    /**
     * 商品导入列编辑
     * @param $id  商品导入列id
     * @return \think\Response
     */
    public function edit(int $id){
        $data = $this->request->params([
             ["name",""],
             ["cat_id",0],
             ["cat_name",""],
             ["flie",""],
             ["num",0],
             ["success_num",0],
             ["fail_num",0],
             ["status",""],

        ]);
        $this->validate($data, 'addon\goods_export\app\validate\spdrlist\SpdrList.edit');
        (new SpdrListService())->edit($id, $data);
        return success('EDIT_SUCCESS');
    }

    /**
     * 商品导入列删除
     * @param $id  商品导入列id
     * @return \think\Response
     */
    public function del(int $id){
        (new SpdrListService())->del($id);
        return success('DELETE_SUCCESS');
    }

    
}
