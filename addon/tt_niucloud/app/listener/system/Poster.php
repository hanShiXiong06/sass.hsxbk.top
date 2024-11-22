<?php
declare ( strict_types = 1 );

namespace addon\tt_niucloud\app\listener\system;

use app\service\admin\sys\SystemService;
use core\exception\ApiException;

/**
 * 系统海报数据
 */
class Poster
{
    /**
     * 系统海报数据
     * @param $data
     * @return array
     */
    public function handle($data)
    {
        $site_id = $data[ 'site_id' ];
        $param = $data[ 'param' ];
        $member_id = $param[ 'member_id' ] ?? 0;
        $page = !empty($param['page']) ? $param['page'] : 'index';
        
        $url = '';
        $urlArr = (new SystemService())->getUrl();
        if (in_array($data['channel'], ['wechat', 'h5'])) {
            $url = $urlArr['wap_url'];
        } elseif($data['channel'] == 'pc') {
            $url = $urlArr['web_url'];
        }

        return [
            'url' => [
                'url' => $url,
                'page' => 'app/pages/'.$page.'/index',
                'data' => [
                    ['key' => 'mid', 'value' => $member_id]
                ],
            ]
        ];
    }
}
