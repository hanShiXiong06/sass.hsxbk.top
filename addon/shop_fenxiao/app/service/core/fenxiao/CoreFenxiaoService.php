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

namespace addon\shop_fenxiao\app\service\core\fenxiao;

use addon\shop\app\dict\order\OrderDict;
use addon\shop\app\model\order\Order;
use addon\shop_fenxiao\app\dict\fenxiao\FenxiaoApplyDict;
use addon\shop_fenxiao\app\dict\fenxiao\FenxiaoDict;
use addon\shop_fenxiao\app\model\fenxiao\Fenxiao;
use addon\shop_fenxiao\app\model\fenxiao\FenxiaoApply;
use addon\shop_fenxiao\app\model\fenxiao\FenxiaoMember;
use app\model\member\Member;
use core\base\BaseCoreService;
use core\exception\CommonException;
use think\Collection;
use think\db\exception\DataNotFoundException;
use think\db\exception\DbException;
use think\db\exception\ModelNotFoundException;
use think\Model;


/**
 * 分销
 */
class CoreFenxiaoService extends BaseCoreService
{

    public function __construct()
    {
        parent::__construct();
        $this->model = new Fenxiao();
    }

    /**
     * 查询分销商(有效的)
     * @param $site_id
     * @param $member_id
     * @return Fenxiao|array|mixed|Model
     */
    public function findOfAction($site_id, $member_id)
    {
        return $this->model->where(
            [
                ['site_id', '=', $site_id],
                ['member_id', '=', $member_id],
                ['status', '=', FenxiaoDict::NORMAL]
            ]
        )->findOrEmpty();
    }

    /**
     * 添加分销商
     * @param $site_id
     * @param $member_id
     * @return true
     */
    public function add($site_id, $member_id, $data = [])
    {
        $level_id = $data['level_id'] ?? 0;
        if ($level_id == 0) {
            $level = (new CoreFenxiaoLevelService())->findDefaultFenxiaoLevel($site_id);
        } else {
            $level = (new CoreFenxiaoLevelService())->findFenxiaoLevel($site_id, $level_id);
        }
        if ($level->isEmpty()) throw new CommonException('SHOP_FENXIAO_PLEASE_SELECT_FENXIAO_LEVEL');
        //判断分销商是否是否是有效的会员
        $member = (new Member())->where([['site_id', '=', $site_id], ['member_id', '=', $member_id]])->findOrEmpty();
        if($member->isEmpty()) throw new CommonException('SHOP_FENXIAO_PLEASE_SELECT_MEMBER');
        $fenxiao = (new Fenxiao())->where([['site_id', '=', $site_id], ['member_id', '=', $member_id]])->findOrEmpty();
        if(!$fenxiao->isEmpty()) throw new CommonException('SHOP_FENXIAO_ALREADY_FENXIAO');
        if (isset($data['parent'])) {
            if ($data['parent'] > 0) {
                $parent_fenxiao = $this->find($site_id, $data['parent']);
                if ($parent_fenxiao->isEmpty()) throw new CommonException('SHOP_FENXIAO_PLEASE_SELECT_FENXIAO_PARENT');
                $parent = $parent_fenxiao->member_id;
            } else {
                $parent = 0;
            }
        } else {
            $parent_fenxiao = (new FenxiaoMember())->where([['site_id', '=', $site_id], ['member_id', '=', $member_id]])->findOrEmpty();
            $parent = $parent_fenxiao['fenxiao_member_id'] ?? 0;
        }

        //增加分销商
        $insert_data = [
            'site_id' => $site_id,
            'member_id' => $member_id,
            'level_id' => $level['level_id'],
            'fenxiao_no' => "NO" . (100000 + $member_id),
            'parent' => $parent,
            'status' => FenxiaoDict::NORMAL,
        ];
        $this->model->create($insert_data);
        (new FenxiaoApply())->where([['site_id', '=', $site_id], ['member_id', '=', $member_id]])->update(['status' => FenxiaoApplyDict::AUDIT, 'audit_time' => time()]);
        //同步修改分销会员关系表
        (new FenxiaoMember())->where([['site_id', '=', $site_id], ['member_id', '=', $member_id]])->update([
            'is_fenxiao' => 1,
            'fenxiao_member_id' => $member_id
        ]);
        return $member_id;
    }

    /**
     * @param $site_id
     * @param $member_id
     */
    public function find($site_id, $member_id)
    {
        return $this->model->where([['site_id', '=', $site_id], ['member_id', '=', $member_id]])->findOrEmpty();
    }

    /**
     * 会员数据
     * @param int $site_id
     * @param int $member_id
     * @return void
     */
    public function getMemberData(int $site_id, int $member_id)
    {

        //先查询自己的下一级
        $child_list = $this->getChildMemberOfOne($site_id, $member_id);
        $child_count = count($child_list);

        $child_fenxiao_list = $this->getChildFenxiaoOfOne($site_id, $member_id);
        $child_fenxiao_count = count($child_fenxiao_list);
        //自购订单列表
        $order_list = (new Order())->where([['site_id', '=', $site_id], ['member_id', '=', $member_id], ['status', '=', OrderDict::FINISH]])->select();

        $order_sum = 0;
        $order_num = 0;
        foreach ($order_list as $v) {
            $order_sum += $v['order_money'];
            $order_num++;
        }
        return [
            'order_sum' => $order_sum,
            'order_num' => $order_num,
            'child_count' => $child_count + $child_fenxiao_count,
            'child_fenxiao_count' => $child_fenxiao_count
        ];

    }

    /**
     * 分销下一级会员
     * @param int $site_id
     * @param $member_id
     * @return void
     */
    public function getChildMemberOfOne(int $site_id, $member_id)
    {
        //下一级会员
        return (new FenxiaoMember())->where([['site_id', '=', $site_id], ['fenxiao_member_id', '=', $member_id], ['is_fenxiao', '=', 0]])->select()->toArray();

    }

    /**
     * 下一级分销商
     * @param int $site_id
     * @param $member_id
     * @return array
     * @throws DataNotFoundException
     * @throws DbException
     * @throws ModelNotFoundException
     */
    public function getChildFenxiaoOfOne(int $site_id, $member_id)
    {
        //下一级会员
        return (new Fenxiao())->where([['site_id', '=', $site_id], ['parent', '=', $member_id]])->with(['fenxiao_level', 'member' => function($query){
            $query->withField('member_id, nickname, headimg, username');
        }])->select()->toArray();
    }

    /**
     * 获取我的团队
     * @param $site_id
     * @param $member_id
     * @return array
     * @throws DataNotFoundException
     * @throws DbException
     * @throws ModelNotFoundException
     */
    public function getTeam($site_id, $member_id)
    {
        $data = [
            'direct' => [],
            'indirect' => [],
        ];
        //查询直属下级会员
        $child_member_list = $this->getChildMemberOfOne($site_id, $member_id);
        if (!empty($child_member_list)) {
            $child_member_ids = array_column($child_member_list, 'member_id');
            $data['direct'] = (new Member())->where([['site_id', '=', $site_id], ['member_id', 'in', $child_member_ids]])->select()->toArray();
        }
        //查询下级分销商
        $child_fenxiao_list = $this->getChildFenxiaoOfOne($site_id, $member_id);
        if (!empty($child_fenxiao_list)) {
            $child_fenxiao_member_ids = array_column($child_fenxiao_list, 'member_id');
            $child_fenxiao_member_list = (new FenxiaoMember())->where([['site_id', '=', $site_id], ['fenxiao_member_id', 'in', $child_fenxiao_member_ids]])->select()->toArray();
            if (!empty($child_fenxiao_member_list)) {
                //
                $child_fenxiao_only_member_list = [];
                foreach($child_fenxiao_member_list as $child_fenxiao_member_list_v){
                    if($child_fenxiao_member_list_v['is_fenxiao'] == 0){
                        $child_fenxiao_only_member_list[$child_fenxiao_member_list_v['member_id']] = $child_fenxiao_member_list_v['fenxiao_member_id'];
                    }
                }
                $child_fenxiao_member_ids = array_merge($child_fenxiao_member_ids, array_column($child_fenxiao_member_list, 'member_id'));
            }
            $data['indirect'] = (new Member())->where([['site_id', '=', $site_id], ['member_id', 'in', $child_fenxiao_member_ids]])->select()->toArray();
            $child_fenxiao_column = array_column($child_fenxiao_list, null, 'member_id');
            foreach ($data['indirect'] as &$v) {
                $item_fenxiao = $child_fenxiao_column[$v['member_id']] ?? [];
                if(!empty($item_fenxiao)){
                    $v['is_fenxiao'] = true;
                    $v['fenxiao'] = $item_fenxiao;
                }else{
                    $v['is_fenxiao'] = false;
                    $parent_member_id = $child_fenxiao_only_member_list[$v['member_id']] ?? 0;
                    $v['fenxiao'] = $child_fenxiao_column[$parent_member_id] ?? [];
                }

            }
        }
        return $data;
    }

    /**
     * 下级分销商
     * @param $site_id
     * @param $member_id
     * @return Member[]|array|Collection
     * @throws DataNotFoundException
     * @throws DbException
     * @throws ModelNotFoundException
     */
    public function getChildFenxiao($site_id, $member_id)
    {
        //下一级会员
        return (new Fenxiao())->where([['site_id', '=', $site_id], ['parent', '=', $member_id]])->with(
            [
                'member' => function ($query) {
                    $query->field('member_id,nickname,headimg,commission,commission_get,commission_cash_outing');
                },
                'fenxiao_level' => function ($query) {
                    $query->withField('level_id, level_name');
                },
            ]
        )->select()->toArray();
    }

}
