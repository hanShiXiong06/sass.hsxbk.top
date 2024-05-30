<?php
// +----------------------------------------------------------------------
// | Niucloud-admin 企业快速开发的saas管理平台
// +----------------------------------------------------------------------
// | 官方网址：https://www.niucloud-admin.com
// +----------------------------------------------------------------------
// | niucloud团队 版权所有 开源版本可自由商用
// +----------------------------------------------------------------------
// | Author: Niucloud Team
// +----------------------------------------------------------------------

namespace addon\o2o\app\service\admin;

use addon\o2o\app\service\core\CoreStatService;
use core\base\BaseAdminService;

/**
 * 统计
 * Class StatService
 * @package app\service\admin
 */
class StatService extends BaseAdminService
{
    /**
     * 获取统计数据
     * @param string $start_date
     * @param string $end_date
     * @return array
     */
    public function getStat(string $start_date = '', string $end_date = '') {
        return (new CoreStatService())->getStat($this->site_id, $start_date, $end_date);
    }

    /**
     * 获取区间统计数据
     * @param string $start_date
     * @param string $end_date
     * @return array|null
     */
    public function getStatData(string $start_date, string $end_date) {
        return (new CoreStatService())->getStatData($this->site_id, $start_date, $end_date);
    }

    /**
     * 获取某天统计数据
     * @param string $start_date
     * @param string $end_date
     * @return array|null
     */
    public function getHourStatData(string $date) {
        return (new CoreStatService())->getHourStatData($this->site_id, $date);
    }

    /**
     * 获取月统计数据
     * @param string $start_date
     * @param string $end_date
     * @return array
     */
    public function getMonthStat(string $start_date = '', string $end_date = '') {
        return (new CoreStatService())->getMonthStat($this->site_id, $start_date, $end_date);
    }
}