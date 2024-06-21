<?php
// +----------------------------------------------------------------------
// | Niucloud-admin 企业快速开发的saas管理平台
// +----------------------------------------------------------------------
// | 官方网址：https://www.niucloud.com
// +----------------------------------------------------------------------
// | niucloud团队 版权所有 开源版本可自由商用
// +----------------------------------------------------------------------
// | Author: Niucloud Team
// +----------------------------------------------------------------------

namespace app\service\admin\weapp;

use app\dict\notice\NoticeTypeDict;
use app\service\admin\notice\NoticeService;
use app\service\core\notice\CoreNoticeService;
use app\service\core\weapp\CoreWeappDeliveryService;
use core\base\BaseAdminService;
use core\exception\NoticeException;
use core\template\TemplateLoader;
use EasyWeChat\Kernel\Exceptions\InvalidArgumentException;
use think\db\exception\DataNotFoundException;
use think\db\exception\DbException;
use think\db\exception\ModelNotFoundException;

/**
 * 小程序发货信息管理服务
 * Class WeappDeliveryService
 * @package app\service\admin\weapp
 */
class WeappDeliveryService extends BaseAdminService
{

    /**
     * 查询小程序是否已开通发货信息管理服务
     * @return mixed
     * @throws InvalidArgumentException
     */
    public function getIsTradeManaged()
    {
        $site_id = $this->site_id;
        $core_notice_service = new CoreWeappDeliveryService();
        $result = $core_notice_service->isTradeManaged($site_id);
        if ($result[ 'errcode' ] == 0 && $result[ 'is_trade_managed' ]) {
            return true;
        }
        return false;
    }

}