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

namespace addon\hlwoauth\app\adminapi\controller\hlwoauth;

use core\base\BaseAdminController;
use addon\hlwoauth\app\service\admin\hlwoauth\DomainService;


/**
 * 域名授权控制器
 * Class Domain
 * @package addon\hlwoauth\app\adminapi\controller\hlwoauth
 */
class Domain extends BaseAdminController
{
   /**
    * 获取域名授权列表
    * @return \think\Response
    */
    public function lists(){
        $data = $this->request->params([
             ["name",""],
             ["number",""],
             ["status",""],
             ["scope",""],
             ["create_time",["",""]]
        ]);
        return success((new DomainService())->getPage($data));
    }

    /**
     * 域名授权详情
     * @param int $id
     * @return \think\Response
     */
    public function info(int $id){
        return success((new DomainService())->getInfo($id));
    }

    /**
     * 添加域名授权
     * @return \think\Response
     */
    public function add(){
        $data = $this->request->params([
             ["name",""],
             ["domain",""],
             ["auth_url",""],
             ["scope",""],
             ["number",0],
             ["status",0],

        ]);
        $this->validate($data, 'addon\hlwoauth\app\validate\hlwoauth\Domain.add');
        $id = (new DomainService())->add($data);
        return success('ADD_SUCCESS', ['id' => $id]);
    }

    /**
     * 域名授权编辑
     * @param $id  域名授权id
     * @return \think\Response
     */
    public function edit(int $id){
        $data = $this->request->params([
             ["name",""],
             ["domain",""],
             ["auth_url",""],
             ["scope",""],
             ["number",0],
             ["status",0],

        ]);
        $this->validate($data, 'addon\hlwoauth\app\validate\hlwoauth\Domain.edit');
        (new DomainService())->edit($id, $data);
        return success('EDIT_SUCCESS');
    }

    /**
     * 域名授权删除
     * @param $id  域名授权id
     * @return \think\Response
     */
    public function del(int $id){
        (new DomainService())->del($id);
        return success('DELETE_SUCCESS');
    }

    
}
