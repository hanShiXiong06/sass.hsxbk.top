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

namespace addon\tk_vip\app\service\admin\vip;

use addon\tk_vip\app\model\vip\Vip;
use app\model\member\Member;
use app\model\member\MemberLevel;

use app\service\core\member\CoreMemberService;
use core\base\BaseAdminService;


/**
 * 会员VIP管理服务层
 * Class VipService
 * @package addon\tk_vip\app\service\admin\vip
 */
class VipService extends BaseAdminService
{
    public function __construct()
    {
        parent::__construct();
        $this->model = new Vip();
    }

    /**
     * 获取会员VIP管理列表
     * @param array $where
     * @return array
     */
    public function getPage(array $where = [])
    {
        $field = 'id,site_id,member_id,level_id,over_time,update_time,create_time';
        $order = 'update_time desc';

        $search_model = $this->model->where([ [ 'site_id' ,"=", $this->site_id ] ])->withSearch(["member_id","level_id","over_time"], $where)->with(['member','memberLevel'])->field($field)->order($order);
        $list = $this->pageQuery($search_model);
        return $list;
    }

    /**
     * 获取会员VIP管理信息
     * @param int $id
     * @return array
     */
    public function getInfo(int $id)
    {
        $field = 'id,site_id,member_id,level_id,over_time,update_time,create_time';

        $info = $this->model->field($field)->where([['id', "=", $id]])->with(['member','memberLevel'])->findOrEmpty()->toArray();
        return $info;
    }

    /**
     * 添加会员VIP管理
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
     * 会员VIP管理编辑
     * @param int $id
     * @param array $data
     * @return bool
     */
    public function edit(int $id, array $data)
    {
        if($data['over_time']>time()||$data['over_time']==0){
            (new CoreMemberService())->modify($this->site_id, $data['member_id'], 'member_level', $data['level_id']);
        }
        event('VipLog',[
            'site_id'=>$this->site_id,
            'member_id'=>$data['member_id'],
            'level_id'=>$data['level_id'],
            'over_time'=>$data['over_time'],
            'type'=>'admin',
            'body'=>'后台调整'
        ]);
        $this->model->where([['id', '=', $id],['site_id', '=', $this->site_id]])->update($data);
        return true;
    }

    /**
     * 删除会员VIP管理
     * @param int $id
     * @return bool
     */
    public function del(int $id)
    {
        $model = $this->model->where([['id', '=', $id],['site_id', '=', $this->site_id]])->find();
        $res = $model->delete();
        return $res;
    }
    
    public function getMemberAll(){
       $memberModel = new Member();
       return $memberModel->where([["site_id","=",$this->site_id]])->select()->toArray();
    }

    public function getMemberLevelAll(){
       $memberLevelModel = new MemberLevel();
       return $memberLevelModel->where([["site_id","=",$this->site_id]])->select()->toArray();
    }

}
