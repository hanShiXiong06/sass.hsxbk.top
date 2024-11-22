<?php
/**
 * 作者: TK  微信：addon888
 * 日期: 2024/11/14
 * 时间: 下午4:57
 */

namespace addon\qf_notice\app\listener;

use addon\qf_notice\app\model\addon\Addon;
use addon\qf_notice\app\service\core\SendNoticeService;
use think\Exception;

class QfNoticeSendListener
{
    /**
     * @Notes:入参   site_id    addon_id
     * @Interface handle
     * @param array $data
     * @author: TK
     * @Time: 2024/11/14   下午5:01
     */
    public function handle(array $data)
    {
        $site_id = $data['site_id'];
        $addon_id = $data['addon_id'];
        $addon_info = (new Addon())->where(['site_id' => $site_id, 'id' => $addon_id])->findOrEmpty();
        if ($addon_info->isEmpty()) throw new Exception('未找到应用信息');
        (new SendNoticeService())->sendNotice($site_id, $addon_info);
    }
}