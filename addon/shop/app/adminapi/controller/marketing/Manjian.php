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

namespace addon\shop\app\adminapi\controller\marketing;

use addon\shop\app\service\admin\marketing\ManjianService;
use core\base\BaseAdminController;


/**
 * 满减送控制器
 * Class Manjian
 * @package addon\shop\app\adminapi\controller\marketing
 */
class Manjian extends BaseAdminController
{

    /**
     * 获取满减列表
     * @return \think\Response
     */
    public function lists()
    {
        $data = $this->request->params([
            [ "manjian_name", "" ],
            [ "status", "" ],
            [ "date", "" ],
        ]);
        return success(( new ManjianService() )->getPage($data));
    }


    /**
     * 满减送关闭
     * @return \think\Response
     */
    public function closeManjian($id)
    {
        (new ManjianService())->closeManjian($id);
        return success('SUCCESS');
    }

    /**
     * 满减送删除
     * @return \think\Response
     */
    public function del($id)
    {
        ( new ManjianService() )->del($id);
        return success('DELETE_SUCCESS');
    }

    /**
     * 满减送详情
     * @param int $id
     * @return \think\Response
     */
    public function info($id)
    {
        return success(( new ManjianService() )->info($id));
    }

    /**
     * 参与会员
     * @param int $id
     * @return \think\Response
     * @throws \think\db\exception\DbException
     */
    public function member(int $id)
    {
        $data = $this->request->params([
            [ 'keyword', '' ],
        ]);

        return success(( new ManjianService() )->member($id, $data));
    }

    /**
     * 参与商品
     * @param int $id
     * @return \think\Response
     * @throws \think\db\exception\DbException
     */
    public function goods(int $id)
    {
        $data = $this->request->params([
            [ 'keyword', '' ],
        ]);

        return success(( new ManjianService() )->goods($id, $data));
    }


    /**
     * 添加满减送
     * @return \think\Response
     */
    public function add()
    {
        $data = $this->request->params([
            [ "manjian_name", '' ],//名称
            [ "condition_type", '' ],//条件类型
            [ "goods_type", '' ],//参与商品
            [ "join_member_type", '' ],//参与会员
            [ "rule_type", ''],//优惠规格
            [ "rule_json", ''],//优惠规则json
            [ "goods_ids", [] ],//商品id集
            [ "level_ids", []],//会员等级id集
            [ "label_ids", [] ],//会员标签id集
            [ "start_time", '' ],//开始时间
            [ "end_time", '' ],//开始时间
            [ "remark", '' ],//备注
            [ "goods_data", [] ],//参与商品json数据
        ]);

        $id = ( new ManjianService() )->add($data);
        return success('ADD_SUCCESS', [ 'id' => $id ]);
    }

    /**
     * 获取满减送编辑数据
     * @return \think\Response
     */
    public function init()
    {
        $data = $this->request->params([
            [ "manjian_id", 0 ],
        ]);
        return success(( new ManjianService() )->getInit($data));
    }

    /**
     * 商品编辑
     * @param $id
     * @return \think\Response
     */
    public function edit($id)
    {
        $data = $this->request->params([
            [ "manjian_name", '' ],//名称
            [ "condition_type", '' ],//条件类型
            [ "goods_type", '' ],//参与商品
            [ "join_member_type", '' ],//参与会员
            [ "rule_type", ''],//优惠规格
            [ "rule_json", []],//优惠规则json
            [ "goods_ids", [] ],//商品id集
            [ "level_ids", []],//会员等级id集
            [ "label_ids", [] ],//会员标签id集
            [ "start_time", '' ],//开始时间
            [ "end_time", '' ],//开始时间
            [ "remark", '' ],//备注
            [ "goods_data", [] ],//参与商品json数据
        ]);

        $res = ( new ManjianService() )->edit($id, $data);
        return success('EDIT_SUCCESS');
    }

}