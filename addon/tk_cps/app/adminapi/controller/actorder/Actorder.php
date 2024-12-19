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

namespace addon\tk_cps\app\adminapi\controller\actorder;

use addon\tk_cps\app\service\admin\actorder\ActorderService;
use core\base\BaseAdminController;


/**
 * CPS活动订单控制器
 * Class Actorder
 * @package addon\tk_cps\app\adminapi\controller\actorder
 */
class Actorder extends BaseAdminController
{
    public function asyncorder()
    {
        (new ActorderService())->asyncOrder();
        return success('后台正在处理，请稍后刷新界面');

    }

    /**
     * 获取CPS活动订单列表
     * @return \think\Response
     */
    public function lists()
    {
        $data = $this->request->params([
            ["sid", ""],
            ["order_id", ""],
            ["jl_js", ""],
            ["pt_js", ""],
            ["create_time", ["", ""]]
        ]);
        return success((new ActorderService())->getPage($data));
    }

    /**
     * CPS活动订单详情
     * @param int $id
     * @return \think\Response
     */
    public function info(int $id)
    {
        return success((new ActorderService())->getInfo($id));
    }

    /**
     * 添加CPS活动订单
     * @return \think\Response
     */
    public function add()
    {
        $data = $this->request->params([
            ["sid", ""],
            ["member_id", ""],
            ["name", ""],
            ["chanel", ""],
            ["order_id", ""],
            ["pay_money", 0.00],
            ["rate", ""],
            ["commission", 0.00],
            ["status", ""],
            ["status_name", ""],
            ["jl_js", ""],
            ["pt_js", ""],

        ]);
        $this->validate($data, 'addon\tk_cps\app\validate\actorder\Actorder.add');
        $id = (new ActorderService())->add($data);
        return success('ADD_SUCCESS', ['id' => $id]);
    }

    /**
     * CPS活动订单编辑
     * @param $id  CPS活动订单id
     * @return \think\Response
     */
    public function edit(int $id)
    {
        $data = $this->request->params([
            ["sid", ""],
            ["member_id", ""],
            ["name", ""],
            ["chanel", ""],
            ["order_id", ""],
            ["pay_money", 0.00],
            ["rate", ""],
            ["commission", 0.00],
            ["status", ""],
            ["status_name", ""],
            ["jl_js", ""],
            ["pt_js", ""],

        ]);
        $this->validate($data, 'addon\tk_cps\app\validate\actorder\Actorder.edit');
        (new ActorderService())->edit($id, $data);
        return success('EDIT_SUCCESS');
    }

    /**
     * CPS活动订单删除
     * @param $id  CPS活动订单id
     * @return \think\Response
     */
    public function del(int $id)
    {
        (new ActorderService())->del($id);
        return success('DELETE_SUCCESS');
    }


}
