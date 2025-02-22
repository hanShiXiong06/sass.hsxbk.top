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

namespace addon\manage_oss\app\adminapi\controller\manageoss;

use addon\manage_oss\app\service\admin\manageoss\StorageConfigService;
use core\base\BaseAdminController;
use addon\manage_oss\app\service\admin\manageoss\ManageOssService;


/**
 * 存储管理控制器
 * Class ManageOss
 * @package addon\manage_oss\app\adminapi\controller\manageoss
 */
class ManageOss extends BaseAdminController
{
    /**
     * @Notes:获取云存储配置列表
     * @Interface storageList
     * @return \think\Response
     * @author: TK
     * @Time: 2024/8/21   上午7:58
     */
    public function storageList()
    {
        $data = $this->request->params([
            ['type', 2]
        ]);
        $res = (new StorageConfigService())->getStorageList($data['type']);
        return success($res);
    }

    /**
     * 获取存储管理列表
     * @return \think\Response
     */
    public function lists()
    {
        $data = $this->request->params([

        ]);
        return success((new ManageOssService())->getPage($data));
    }

    /**
     * 存储管理详情
     * @param int $id
     * @return \think\Response
     */
    public function info(int $id)
    {
        return success((new ManageOssService())->getInfo($id));
    }

    /**
     * 添加存储管理
     * @return \think\Response
     */
    public function add()
    {
        $data = $this->request->params([
            ["value", []],
            ["size", 0.00],
            ["use_size", 0.00],
            ["limit", ""],
            ["site_id", 0],
        ]);
        $this->validate($data, 'addon\manage_oss\app\validate\manageoss\ManageOss.add');
        $data['value'] = json_encode($data['value']);
        $id = (new ManageOssService())->add($data);
        return success('ADD_SUCCESS', ['id' => $id]);
    }

    /**
     * 存储管理编辑
     * @param $id  存储管理id
     * @return \think\Response
     */
    public function edit(int $id)
    {
        $data = $this->request->params([
            ["value", []],
            ["size", 0.00],
            ["use_size", 0.00],
            ["limit", ""],
            ["site_id", 0],
        ]);
        $this->validate($data, 'addon\manage_oss\app\validate\manageoss\ManageOss.edit');
        $data['value'] = json_encode($data['value']);
        (new ManageOssService())->edit($id, $data);
        return success('EDIT_SUCCESS');
    }

    /**
     * 存储管理删除
     * @param $id  存储管理id
     * @return \think\Response
     */
    public function del(int $id)
    {
        (new ManageOssService())->del($id);
        return success('DELETE_SUCCESS');
    }

    public function getSiteAll()
    {
        return success((new ManageOssService())->getSiteAll());
    }

}
