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

namespace addon\sow_community\app\service\admin\treasure;

use addon\sow_community\app\model\Treasure;
use addon\sow_community\app\service\core\treasure\CoreTreasureService;
use core\base\BaseAdminService;

/**
 * 社区宝贝库服务层
 * Class TreasureService
 * @package  addon\sow_community\app\service\admin\content;
 */
class TreasureService extends BaseAdminService
{
    public function __construct()
    {
        parent::__construct();
        $this->model = new Treasure();
    }

    /**
     * 获取社区宝贝库分页列表
     * @param array $where
     * @return array
     * @throws \think\db\exception\DbException
     */
    public function getPage(array $where = [])
    {
        $core_treasure_service = new CoreTreasureService();
        $where[ 'site_id' ] = $this->site_id;
        if ($where[ 'select_type' ] == 'all' || $where[ 'select_type' ] == 'unselected') {
            $join_ids = $this->model->where([ [ 'is_join', "=", 1 ], [ 'relate_type', '=', $where[ 'relate_type' ] ], [ 'site_id', '=', $where[ 'site_id' ] ] ])->column('relate_id');//查询已参与的
            if ($where[ 'select_type' ] == 'unselected') {
                $where[ 'join_ids' ] = $join_ids;
            }
            $list = $core_treasure_service->getTreasureDataList($where);
            $type_list = $core_treasure_service->getTreasureTypeList();
            if (!empty($list[ 'data' ])) {
                foreach ($list[ 'data' ] as $k => $v) {
                    $list[ 'data' ][ $k ][ 'relate_type_name' ] = $type_list[ $v[ 'relate_type' ] ] ?? '';
                    $treasure = $this->model->field('is_join')->where([ [ 'relate_id', '=', $v[ 'relate_id' ] ], [ 'relate_type', '=', $v[ 'relate_type' ] ], [ 'site_id', '=', $this->site_id ] ])->findOrEmpty();
                    if ($treasure->isEmpty()) {
                        $list[ 'data' ][ $k ][ 'is_join' ] = 0;
                    } else {
                        $list[ 'data' ][ $k ][ 'is_join' ] = $treasure[ 'is_join' ];
                    }
                }
            }
        } else {
            $list = $core_treasure_service->getTreasureSelectList($where);
        }
        return $list;
    }

    /**
     * 修改宝贝是否参与种草
     * @return bool
     */
    public function editJoin($data)
    {
        $data[ 'site_id' ] = $this->site_id;
        $list = ( new CoreTreasureService() )->getTreasureDataList($data, false);

        // 如果返回的关联数据中不包含已选择的数据，则将旧数据设为不参与
        $relate_ids = array_column($list, 'relate_id');
        foreach ($data[ 'relate_ids' ] as $relate_id) {
            if (!in_array($relate_id, $relate_ids)) {
                $this->model->where([ [ 'relate_id', '=', $relate_id ], [ 'relate_type', '=', $data[ 'relate_type' ] ], [ 'site_id', '=', $this->site_id ] ])->update([ 'is_join' => 0 ]);
            }
        }

        foreach ($list as $k => $v) {
            $treasure = $this->model->where([ [ 'relate_id', '=', $v[ 'relate_id' ] ], [ 'relate_type', '=', $v[ 'relate_type' ] ], [ 'site_id', '=', $this->site_id ] ])->findOrEmpty();
            $v[ 'is_join' ] = $data[ 'is_join' ];
            if ($treasure->isEmpty()) {
                if ($v[ 'is_join' ]) {
                    $this->model->create($v);
                }
            } else {
                $treasure->save($v);
            }
        }
        return true;
    }

    /**
     * 获取社区宝贝库类型列表
     * @return array
     */
    public function getTypeList()
    {
        return ( new CoreTreasureService() )->getTreasureTypeList();
    }

    /**
     * 获取社区宝贝库选择列表
     * @return array
     */
    public function getSelectList(array $where = [])
    {
        $where[ 'site_id' ] = $this->site_id;
        return ( new CoreTreasureService() )->getTreasureSelectList($where);
    }

}
