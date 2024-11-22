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

namespace addon\qf_notice\app\service\admin\user;

use addon\qf_notice\app\model\user\User;
use addon\qf_notice\app\model\usercat\UserCat;

use core\base\BaseAdminService;


/**
 * 用户列服务层
 * Class UserService
 * @package addon\qf_notice\app\service\admin\user
 */
class UserService extends BaseAdminService
{
    public function __construct()
    {
        parent::__construct();
        $this->model = new User();
    }
    public function clearUser()
    {
        $this->model->where([ [ 'site_id' ,"=", $this->site_id ] ])->delete();
        return [];
    }
    /**
     * 获取用户列列表
     * @param array $where
     * @return array
     */
    public function getPage(array $where = [])
    {
        $field = 'id,site_id,cat_id,nickname,headimg,config_id,mobile,openid,unionid,email,num,create_time';
        $order = 'create_time desc';

        $search_model = $this->model->where([ [ 'site_id' ,"=", $this->site_id ] ])->withSearch(["cat_id","mobile","create_time"], $where)->with(['userCat'])->field($field)->order($order);
        $list = $this->pageQuery($search_model);
        return $list;
    }

    /**
     * 获取用户列信息
     * @param int $id
     * @return array
     */
    public function getInfo(int $id)
    {
        $field = 'id,site_id,cat_id,nickname,headimg,config_id,mobile,openid,unionid,email,num,create_time';

        $info = $this->model->field($field)->where([['id', "=", $id]])->with(['userCat'])->findOrEmpty()->toArray();
        return $info;
    }

    /**
     * 添加用户列
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
     * 用户列编辑
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
     * 删除用户列
     * @param int $id
     * @return bool
     */
    public function del(int $id)
    {
        $model = $this->model->where([['id', '=', $id],['site_id', '=', $this->site_id]])->find();
        $res = $model->delete();
        return $res;
    }
    
    public function getUserCatAll(){
       $userCatModel = new UserCat();
       return $userCatModel->where([["site_id","=",$this->site_id]])->select()->toArray();
    }
    public function delselect($ids){
        $res=$this->model->where('id', 'in', $ids)->delete();
        return $res;
    }
}
