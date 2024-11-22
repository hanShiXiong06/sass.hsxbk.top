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

namespace addon\qf_notice\app\adminapi\controller\qflog;

use core\base\BaseAdminController;
use addon\qf_notice\app\service\admin\qflog\QflogService;


/**
 * 发送日志控制器
 * Class Qflog
 * @package addon\qf_notice\app\adminapi\controller\qflog
 */
class Qflog extends BaseAdminController
{
   /**
    * 获取发送日志列表
    * @return \think\Response
    */
    public function lists(){
        $data = $this->request->params([
             ["addon_name",""],
             ["type",""],
             ["create_time",["",""]]
        ]);
        return success((new QflogService())->getPage($data));
    }

    /**
     * 发送日志详情
     * @param int $id
     * @return \think\Response
     */
    public function info(int $id){
        return success((new QflogService())->getInfo($id));
    }

    /**
     * 添加发送日志
     * @return \think\Response
     */
    public function add(){
        $data = $this->request->params([
             ["addon_name",""],
             ["wx_openid",""],
             ["email",""],
             ["mobile",""],
             ["type",""],
             ["log",""],

        ]);
        $this->validate($data, 'addon\qf_notice\app\validate\qflog\Qflog.add');
        $id = (new QflogService())->add($data);
        return success('ADD_SUCCESS', ['id' => $id]);
    }

    /**
     * 发送日志编辑
     * @param $id  发送日志id
     * @return \think\Response
     */
    public function edit(int $id){
        $data = $this->request->params([
             ["addon_name",""],
             ["wx_openid",""],
             ["email",""],
             ["mobile",""],
             ["type",""],
             ["log",""],

        ]);
        $this->validate($data, 'addon\qf_notice\app\validate\qflog\Qflog.edit');
        (new QflogService())->edit($id, $data);
        return success('EDIT_SUCCESS');
    }

    /**
     * 发送日志删除
     * @param $id  发送日志id
     * @return \think\Response
     */
    public function del(int $id){
        (new QflogService())->del($id);
        return success('DELETE_SUCCESS');
    }
    public function delselect()
    {
        $data = $this->request->post();
        (new  QflogService())->delselect($data);
        return success('DELETE_SUCCESS');
    }
    
}
