<?php
namespace addon\hsx_phone_query\app\service\admin\hsx_phone_query_list;

use addon\hsx_phone_query\app\model\HsxPhoneQueryInfo;
use core\base\BaseAdminService;

/**
 * 查询记录管理服务层
 */
class HsxPhoneQueryListService extends BaseAdminService
{
    /**
     * 获取查询记录列表
     */
    public function getList($params = [])
    {
        // 明确指定主表字段
        $field = [
            'hsx_phone_query_info.id', 
            'hsx_phone_query_info.sn', 
            'hsx_phone_query_info.type_id',  
            'hsx_phone_query_info.info', 
            'hsx_phone_query_info.create_time', 
            'hsx_phone_query_info.is_look', 
            'hsx_phone_query_info.member_id',
            'member.nickname as member_nickname'  // 直接取会员昵称
            
        ];
        
        $condition = [];
        
        // 关键词搜索
        if (!empty($params['keyword'])) {
            $condition[] = ['hsx_phone_query_info.sn', 'like', "%{$params['keyword']}%"];
        }
        
        // 时间范围处理
        if (!empty($params['start_time'])) {
            $start_time = strtotime($params['start_time'] . ' 00:00:00');
            $condition[] = ['hsx_phone_query_info.create_time', '>=', $start_time];
        }
        if (!empty($params['end_time'])) {
            $end_time = strtotime($params['end_time'] . ' 23:59:59');
            $condition[] = ['hsx_phone_query_info.create_time', '<=', $end_time];
        }

        $model = new HsxPhoneQueryInfo();
        $list = $model->alias('hsx_phone_query_info')  // 添加别名
            ->withJoin(['member'])
            ->where($condition)
            ->field($field)
            ->order('hsx_phone_query_info.create_time desc')
            ->append(['type_name'])
            ->page($params['page'], $params['limit'])
            ->select()
            ->toArray();

        $count = $model->where($condition)->count();

        // 格式化数据
        foreach ($list as &$item) {
            if (!empty($item['info'])) {
                $item['info'] = is_array($item['info']) ? $item['info'] : json_decode($item['info'], true);
            }
            if (!empty($item['create_time']) && is_numeric($item['create_time'])) {
                $item['create_time'] = date('Y-m-d H:i:s', intval($item['create_time']));
            }
            
            // 简化会员信息
            $item['member_info'] = [
                'nickname' => $item['member_nickname'] ?? ''
                
            ];
            unset($item['member_nickname']);
        }

        return [
            'count' => $count,
            'list' => $list
        ];
    }

    /**
     * 获取查询记录详情
     */
    public function getInfo($id)
    {
        $field = 'id,sn,type_id,info,create_time,is_look,member_id';
        
        $info = (new HsxPhoneQueryInfo())->where([['id', '=', $id]])
            ->field($field)
            ->append(['type_name'])
            ->find();

        if (!$info) {
            return [];
        }

        $data = $info->toArray();
        
        // 格式化数据
        if (!empty($data['info'])) {
            $data['info'] = is_array($data['info']) ? $data['info'] : json_decode($data['info'], true);
        }
        if (!empty($data['create_time']) && is_numeric($data['create_time'])) {
            $data['create_time'] = date('Y-m-d H:i:s', intval($data['create_time']));
        }

        return $data;
    }
}
