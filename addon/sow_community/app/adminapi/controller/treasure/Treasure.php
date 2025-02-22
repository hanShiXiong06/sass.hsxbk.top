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

namespace addon\sow_community\app\adminapi\controller\treasure;

use addon\sow_community\app\service\admin\treasure\TreasureService;
use core\base\BaseAdminController;

/**
 * 社区宝贝库控制器
 * Class Treasure
 * @package addon\sow_community\app\adminapi\controller\treasure
 */
class Treasure extends BaseAdminController
{

    /**
     * 获取社区宝贝库分页列表
     * @return \think\Response
     */
    public function pages()
    {
        $data = $this->request->params([
            [ "keyword", '' ],
            [ "relate_type", '' ],
            [ "select_type", '' ]
        ]);
        return success(( new TreasureService() )->getPage($data));
    }

    /**
     * 修改宝贝是否参与种草
     * @return \think\Response
     */
    public function editJoin()
    {
        $data = $this->request->params([
            [ "relate_ids", "" ],
            [ "relate_type", '' ],
            [ "is_join", 0 ]
        ]);
        ( new TreasureService() )->editJoin($data);
        return success('SUCCESS');
    }

    /**
     * 宝贝类型列表
     * @return \think\Response
     */
    public function typeList()
    {
        return success(data: ( new TreasureService() )->getTypeList());
    }

    /**
     * 社区宝贝库选择列表
     * @return \think\Response
     */
    public function selectList()
    {
        $data = $this->request->params([
            [ 'keyword', '' ],
            [ 'relate_type', '' ],
            [ "select_type", 'all' ],
            [ 'treasure_ids', [] ]
        ]);
        return success(( new TreasureService() )->getSelectList($data));
    }

}
