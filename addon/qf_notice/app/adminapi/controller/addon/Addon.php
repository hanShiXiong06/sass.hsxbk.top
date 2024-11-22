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

namespace addon\qf_notice\app\adminapi\controller\addon;

use addon\qf_notice\app\dict\type\TypeDict;
use addon\qf_notice\app\service\admin\addon\AddonService;
use core\base\BaseAdminController;


/**
 * 群发应用控制器
 * Class Addon
 * @package addon\qf_notice\app\adminapi\controller\addon
 */
class Addon extends BaseAdminController
{
    public function sendNotice($id)
    {
        return success((new AddonService())->sendNotice($id));
    }
    /**
     * @Notes:获取应用发送渠道类型
     * @Interface getAddonType
     * @return \think\Response
     * @author: TK
     * @Time: 2024/11/1   下午11:30
     */
    public function getAddonType()
    {
        return success(TypeDict::getAddonType());
    }

    /**
     * 获取群发应用列表
     * @return \think\Response
     */
    public function lists()
    {
        $data = $this->request->params([
            ["name", ""],
            ["image", ""],
            ["type", ""],
            ["category_id",""],
            ["create_time", ["", ""]]
        ]);
        return success((new AddonService())->getPage($data));
    }

    /**
     * 群发应用详情
     * @param int $id
     * @return \think\Response
     */
    public function info(int $id)
    {
        return success((new AddonService())->getInfo($id));
    }

    /**
     * 添加群发应用
     * @return \think\Response
     */
    public function add()
    {
        $data = $this->request->params([
            ["name", ""],
            ["desc", ""],
            ["image", ""],
            ["is_main", 1],
            ["type", ""],
            ["config_id", 0],
            ["value", []],
            ["is_go_url", 1],
            ["url", ""],
            ["page", ""],
            ["template_id", ""],
            ["sms_content", ""],
            ["level_id", "-1"],
            ["cat_id", "0"],
            ["category_id",""],
            ["email_content", ""],
            ["email_title", ""],
            ["email_desc", ""],
            ["status", ""],
        ]);
        $this->validate($data, 'addon\qf_notice\app\validate\addon\Addon.add');
        $data['value'] = json_encode($data['value']);
        $id = (new AddonService())->add($data);
        return success('ADD_SUCCESS', ['id' => $id]);
    }

    /**
     * 群发应用编辑
     * @param $id  群发应用id
     * @return \think\Response
     */
    public function edit(int $id)
    {
        $data = $this->request->params([
            ["name", ""],
            ["desc", ""],
            ["image", ""],
            ["is_main", 0],
            ["type", ""],
            ["config_id", 0],
            ["value", []],
            ["is_go_url", 0],
            ["url", ""],
            ["page", ""],
            ["template_id", ""],
            ["sms_content", ""],
            ["level_id", "-1"],
            ["cat_id", "0"],
            ["category_id",""],
            ["email_content", ""],
            ["email_title", ""],
            ["email_desc", ""],
            ["status", ""],
        ]);
        $this->validate($data, 'addon\qf_notice\app\validate\addon\Addon.edit');
        $data['value'] = json_encode($data['value']);
        (new AddonService())->edit($id, $data);
        return success('EDIT_SUCCESS');
    }

    /**
     * 群发应用删除
     * @param $id  群发应用id
     * @return \think\Response
     */
    public function del(int $id)
    {
        (new AddonService())->del($id);
        return success('DELETE_SUCCESS');
    }

    public function getMemberLevelAll(){
        return success(( new AddonService())->getMemberLevelAll());
    }
    public function getCategoryAll(){
        return success(( new AddonService())->getCategoryAll());
    }

    /**
     * @Notes:事件执行演示
     * @Interface sendEvent
     * @author: TK
     * @Time: 2024/11/14   下午5:52
     */
    public function sendEvent()
    {
        event('QfNoticeSend',[
            'site_id'=>'100000',//站点ID
            'addon_id'=>'5'//应用ID
        ]);
    }

}
