<?php

namespace addon\tk_yht\app\service\core;

use app\service\core\site\CoreSiteService;
use Exception;
/**
 * 物流查询
 */
class CopyGoodsService extends YhtService
{
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * 获取当前站点拥有的应用插件
     * @return array
     */
    public function checkShop()
    {
        $addons=(new CoreSiteService())->getAddonKeysBySiteId($this->site_id);
        return $addons;
    }

    /**
     * 物流查询
     * @throws Exception
     */
    public function copyGoods(string $url)
    {
        try {
            $res = $this->http_post('v2/copy/goods', [
                'url' => $url,
            ], $this->access_token);
            if($res['status']==200){
                return $res;
            }else{
                throw new Exception($res['msg']);
            }
        } catch ( Exception $e ) {
            throw new Exception($e->getMessage());
        }
    }

}