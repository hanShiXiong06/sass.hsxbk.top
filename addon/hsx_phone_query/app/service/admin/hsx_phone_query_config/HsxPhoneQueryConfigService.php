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

namespace addon\hsx_phone_query\app\service\admin\hsx_phone_query_config;

use addon\hsx_phone_query\app\model\HsxPhoneQueryConfig;

use core\base\BaseAdminService;


/**
 * 配置信息服务层
 * Class HsxPhoneQueryConfigService
 * @package addon\hsx_phone_query\app\service\admin\hsx_phone_query_config
 */
class HsxPhoneQueryConfigService extends BaseAdminService
{
    public function __construct()
    {
        parent::__construct();
        $this->model = new HsxPhoneQueryConfig();
    }

    /**
     * 获取配置信息列表
     * @param array $where
     * @return array
     */
    public function getPage(array $where = [])
    {
        $field = 'id,site_id,appid,Secret';
        $order = 'id asc';

        $search_model = $this->model->where([ [ 'site_id' ,"=", $this->site_id ] ])->withSearch(["id"], $where)->field($field)->order($order);
        $list = $this->pageQuery($search_model);
        return $list;
    }

    /**
     * 获取配置信息信息
     * @param int $id
     * @return array
     */
    public function getInfo(int $id)
    {
        $field = 'id,site_id,appid,Secret';

        $info = $this->model->field($field)->where([['id', "=", $id]])->findOrEmpty()->toArray();
        return $info;
    }

    /**
     * 添加配置信息
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
     * 配置信息编辑
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
     * 删除配置信息
     * @param int $id
     * @return bool
     */
    public function del(int $id)
    {
        $model = $this->model->where([['id', '=', $id],['site_id', '=', $this->site_id]])->find();
        $res = $model->delete();
        return $res;
    }
    
}
