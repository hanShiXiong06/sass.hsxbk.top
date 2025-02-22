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

namespace addon\sow_community\app\api\controller\content;

use addon\sow_community\app\service\api\content\TreasureService;
use core\base\BaseApiController;


/**
 * 社区宝贝库控制器
 * Class Treasure
 * @package addon\sow_community\app\api\controller\content
 */
class Treasure extends BaseApiController
{

    /**
     * 获取社区宝贝库分页列表
     * @return \think\Response
     */
    public function pages()
    {
        $data = $this->request->params([
            [ "keyword", '' ],
            [ "relate_type", '' ]
        ]);
        return success(( new TreasureService() )->getPage($data));
    }

    /**
     * 宝贝类型列表
     * @return \think\Response
     */
    public function typeList()
    {
        return success(data: (new TreasureService())->getTypeList());
    }

}
