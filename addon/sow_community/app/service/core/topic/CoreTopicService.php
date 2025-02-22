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

namespace addon\sow_community\app\service\core\topic;

use addon\sow_community\app\model\Topic;
use core\base\BaseCoreService;
use think\facade\Db;

/**
 * 社区话题服务层
 * Class CoreTopicService
 * @package  addon\sow_community\app\service\core\topic;
 */
class CoreTopicService extends BaseCoreService
{
    public function __construct()
    {
        parent::__construct();
        $this->model = new Topic();
    }

    /**
     * 更新社区话题统计数据
     * @param int $topic_id
     * @param int $site_id
     * @param string $field
     * @param int $num
     * @return bool
     */
    public function editStatNum($topic_id, $site_id, $field, $num)
    {
        $topic = $this->model->where([ [ 'topic_id', '=', $topic_id ], [ 'site_id', '=', $site_id ] ])->findOrEmpty();
        if (!$topic->isEmpty()) {
            $update_data = [];
            if ($num != 0) {
                if ($num > 0) {
                    $item_sql = ' + ' . abs($num);
                } else if ($num < 0) {
                    $item_sql = ' - ' . abs($num);
                }
                $update_data[ $field ] = Db::raw('CASE WHEN ' . $field . $item_sql . '>= 0 THEN ' . $field . $item_sql . ' ELSE 0 END');
            }
            if ($update_data) {
                $topic->save($update_data);
            }
        }
        return true;
    }

}
