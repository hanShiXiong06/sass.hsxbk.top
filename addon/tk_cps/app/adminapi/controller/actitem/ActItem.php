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

namespace addon\tk_cps\app\adminapi\controller\actitem;

use core\base\BaseAdminController;
use addon\tk_cps\app\service\admin\actitem\ActItemService;


/**
 * 活动详情控制器
 * Class ActItem
 * @package addon\tk_cps\app\adminapi\controller\actitem
 */
class ActItem extends BaseAdminController
{
   /**
    * 获取活动详情列表
    * @return \think\Response
    */
    public function lists(){
        $data = $this->request->params([
             ["act_id",""],
             ["act_name",""],
             ["type",""],
             ["h5",""],
             ["weapp",""],
             ["aliapp",""],
             ["share_info",""],
             ["create_time",""]
        ]);
        return success((new ActItemService())->getPage($data));
    }

    /**
     * 活动详情详情
     * @param int $id
     * @return \think\Response
     */
    public function info(int $id){
        return success((new ActItemService())->getInfo($id));
    }

    /**
     * 添加活动详情
     * @return \think\Response
     */
    public function add(){
        $data = $this->request->params([
             ["act_id",0],
             ["act_name",""],
             ["type",0],
             ["h5",""],
             ["weapp",""],
             ["aliapp",""],
             ["share_info",""],

        ]);
        $this->validate($data, 'addon\tk_cps\app\validate\actitem\ActItem.add');
        $id = (new ActItemService())->add($data);
        return success('ADD_SUCCESS', ['id' => $id]);
    }

    /**
     * 活动详情编辑
     * @param $id  活动详情id
     * @return \think\Response
     */
    public function edit(int $id){
        $data = $this->request->params([
             ["act_id",0],
             ["act_name",""],
             ["type",0],
             ["h5",""],
             ["weapp",""],
             ["aliapp",""],
             ["share_info",""],

        ]);
        $this->validate($data, 'addon\tk_cps\app\validate\actitem\ActItem.edit');
        (new ActItemService())->edit($id, $data);
        return success('EDIT_SUCCESS');
    }

    /**
     * 活动详情删除
     * @param $id  活动详情id
     * @return \think\Response
     */
    public function del(int $id){
        (new ActItemService())->del($id);
        return success('DELETE_SUCCESS');
    }

    public function delselect()
    {
        $data = $this->request->post();
        (new ActItemService())->delselect($data);
        return success('删除成功');
    }

}
