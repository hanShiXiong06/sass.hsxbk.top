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

namespace addon\sow_community\app\adminapi\controller\content;

use addon\sow_community\app\dict\ContentDict;
use addon\sow_community\app\service\admin\content\ContentService;
use core\base\BaseAdminController;

/**
 * 社区内容控制器
 * Class Content
 * @package addon\sow_community\app\adminapi\controller\content
 */
class Content extends BaseAdminController
{

    /**
     * 获取社区内容分页列表
     * @return \think\Response
     */
    public function pages()
    {
        $data = $this->request->params([
            [ "content_title", '' ],
            [ "content_type", '' ],
            [ "topic_id", 0 ],
            [ 'status', '' ],
        ]);
        return success(( new ContentService() )->getPage($data));
    }

    /**
     * 社区内容详情
     * @param int $id
     * @return \think\Response
     */
    public function info(int $id)
    {
        return success(( new ContentService() )->getInfo($id));
    }

    /**
     * 添加社区内容
     * @return \think\Response
     */
    public function add()
    {
        $data = $this->request->params([
            [ "content_type", 1 ],
            [ "content_title", '' ],
            [ "content_image", '' ],
            [ "content_video", '' ],
            [ "content_cover", '' ],
            [ "content_cover_width", '' ],
            [ "content_cover_height", '' ],
            [ "content", '' ],
            [ "category_id", '' ],
            [ "treasure_ids", [] ],
            [ "topic_ids", [] ],
            [ "location", '' ],
            [ "member_id", 0 ],//为0时表示后台添加
        ]);
        $this->validate($data, 'addon\sow_community\app\validate\content\Content.add');
        $id = ( new ContentService() )->add($data);
        return success('ADD_SUCCESS', [ 'id' => $id ]);
    }

    /**
     * 编辑社区内容
     * @param $id - 社区内容id
     * @return \think\Response
     */
    public function edit(int $id)
    {
        $data = $this->request->params([
            [ "content_type", 1 ],
            [ "content_title", '' ],
            [ "content_image", '' ],
            [ "content_video", '' ],
            [ "content_cover", '' ],
            [ "content_cover_width", '' ],
            [ "content_cover_height", '' ],
            [ "content", '' ],
            [ "category_id", '' ],
            [ "treasure_ids", [] ],
            [ "topic_ids", [] ],
            [ "location", '' ]
        ]);
        $data[ 'content_id' ] = $id;
        $this->validate($data, 'addon\sow_community\app\validate\content\Content.edit');
        ( new ContentService() )->edit($id, $data);
        return success('EDIT_SUCCESS');
    }

    /**
     * 社区内容删除
     * @return \think\Response
     */
    public function del()
    {
        $data = $this->request->params([
            [ "content_ids", [] ]
        ]);
        ( new ContentService() )->del($data[ 'content_ids' ]);
        return success('DELETE_SUCCESS');
    }

    /**
     * 社区内容审核
     * @return \think\Response
     */
    public function audit(int $id)
    {
        $data = $this->request->params([
            [ 'status', '' ],
            [ 'refuse_reason', '' ]
        ]);
        ( new ContentService() )->audit($id, $data);
        return success('SUCCESS');
    }

    /**
     * 社区内容强制下架
     * @return \think\Response
     */
    public function statusOff()
    {
        $data = $this->request->params([
            [ "content_ids", [] ]
        ]);
        ( new ContentService() )->statusOff($data[ 'content_ids' ]);
        return success('SUCCESS');
    }

    /**
     * 社区内容状态列表
     * @return \think\Response
     */
    public function statusList()
    {
        return success(data: ContentDict::getStatusList());
    }

}
