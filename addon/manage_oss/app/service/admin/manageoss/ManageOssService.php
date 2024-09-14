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

namespace addon\manage_oss\app\service\admin\manageoss;

use addon\manage_oss\app\model\manageoss\ManageOss;
use addon\manage_oss\app\service\core\CoreStorageService;
use app\model\site\Site;

use core\base\BaseAdminService;
use think\Exception;


/**
 * 存储管理服务层
 * Class ManageOssService
 * @package addon\manage_oss\app\service\admin\manageoss
 */
class ManageOssService extends BaseAdminService
{
    public function __construct()
    {
        parent::__construct();
        $this->model = new ManageOss();
        if ($this->site_id != 0) throw new Exception('仅对平台管理员开放');
    }

    /**
     * 获取存储管理列表
     * @param array $where
     * @return array
     */
    public function getPage(array $where = [])
    {
        $field = 'id,site_id,value,size,use_size,limit';
        $order = 'id desc';
        $search_model = $this->model->withSearch([], $where)->with(['site'])->field($field)->order($order);
        $list = $this->pageQuery($search_model);
        $list['data'] = array_map(function ($item) {
            $item['value'] = json_decode($item['value'], true);
            $item['storage_name'] = [];
            foreach ($item['value'] as $k => $v) {
                $item['storage_name'][] = $this->storageName($v);
            }
            return $item;
        }, $list['data']);
        return $list;
    }

    public function storageName($storage_type)
    {
        $storageList = (new CoreStorageService())->getStorageList(0,2);
        foreach ($storageList as $k => $v){
            if ($v['storage_type'] == $storage_type) {
                return $v['name'];
            }
        }
    }

    /**
     * 获取存储管理信息
     * @param int $id
     * @return array
     */
    public function getInfo(int $id)
    {
        $field = 'id,site_id,value,size,use_size,limit';

        $info = $this->model->field($field)->where([['id', "=", $id]])->with(['site'])->findOrEmpty()->toArray();
        $info['value'] = json_decode($info['value'], true);
        return $info;
    }

    /**
     * 添加存储管理
     * @param array $data
     * @return mixed
     */
    public function add(array $data)
    {
        if ($data['site_id'] > 0) {
            $info = $this->model->where([['site_id', '=', $data['site_id']]])->findOrEmpty();
            if (!$info->isEmpty()) throw new Exception('已存在站点配置，请修改或删除后添加');
            $res = $this->model->create($data);
            return $res->id;
        } else {
            throw new Exception('请选择正确的站点');
        }
    }

    /**
     * 存储管理编辑
     * @param int $id
     * @param array $data
     * @return bool
     */
    public function edit(int $id, array $data)
    {

        $this->model->where([['id', '=', $id]])->update($data);
        return true;
    }

    /**
     * 删除存储管理
     * @param int $id
     * @return bool
     */
    public function del(int $id)
    {
        $model = $this->model->where([['id', '=', $id]])->find();
        $res = $model->delete();
        return $res;
    }

    public function getSiteAll()
    {
        $siteModel = new Site();
        return $siteModel->select()->toArray();
    }

}