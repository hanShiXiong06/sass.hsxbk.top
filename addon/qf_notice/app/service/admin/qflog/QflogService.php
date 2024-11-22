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

namespace addon\qf_notice\app\service\admin\qflog;

use addon\qf_notice\app\dict\type\TypeDict;
use addon\qf_notice\app\model\qflog\Qflog;

use core\base\BaseAdminService;


/**
 * 发送日志服务层
 * Class QflogService
 * @package addon\qf_notice\app\service\admin\qflog
 */
class QflogService extends BaseAdminService
{
    public function __construct()
    {
        parent::__construct();
        $this->model = new Qflog();
    }

    /**
     * 获取发送日志列表
     * @param array $where
     * @return array
     */
    public function getPage(array $where = [])
    {
        $field = 'id,site_id,addon_name,wx_openid,email,mobile,type,log,create_time';
        $order = 'create_time desc';

        $search_model = $this->model->where([ [ 'site_id' ,"=", $this->site_id ] ])->withSearch(["addon_name","type","create_time"], $where)->field($field)->order($order);
        $list = $this->pageQuery($search_model);
        foreach ($list['data'] as $k => $v) {
            $list['data'][$k]['type_name']=TypeDict::getAddonType($list['data'][$k]['type'])['name'];
        }
        return $list;
    }

    /**
     * 获取发送日志信息
     * @param int $id
     * @return array
     */
    public function getInfo(int $id)
    {
        $field = 'id,site_id,addon_name,wx_openid,email,mobile,type,log,create_time';

        $info = $this->model->field($field)->where([['id', "=", $id]])->findOrEmpty()->toArray();
        return $info;
    }

    /**
     * 添加发送日志
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
     * 发送日志编辑
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
     * 删除发送日志
     * @param int $id
     * @return bool
     */
    public function del(int $id)
    {
        $model = $this->model->where([['id', '=', $id],['site_id', '=', $this->site_id]])->find();
        $res = $model->delete();
        return $res;
    }
    public function delselect($ids){
        $res=$this->model->where('id', 'in', $ids)->delete();
        return $res;
    }
}
