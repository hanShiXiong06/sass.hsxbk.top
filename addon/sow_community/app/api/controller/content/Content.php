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

use addon\sow_community\app\service\api\content\ContentCollectService;
use addon\sow_community\app\service\api\content\ContentLikeService;
use addon\sow_community\app\service\api\content\ContentService;
use core\base\BaseApiController;


/**
 * 社区内容控制器
 * Class Content
 * @package addon\sow_community\app\api\controller\content
 */
class Content extends BaseApiController
{
    /**
     * 社区内容分页列表
     * @return \think\Response
     */
    public function pages()
    {
        $data = $this->request->params([
            [ "category_id", "" ],
            [ "content_title", "" ],
            [ "content_type", "" ],
            [ "is_follow", 0 ],
            [ "start_id", 0 ],
            [ "member_id", "" ],
            [ "topic_id", 0 ],
            [ "topic_name", '' ],
            [ "type", '' ]
        ]);

        return success(( new ContentService() )->getPage($data));
    }

    /**
     * 获取我赞过的作品
     * @return \think\Response
     */
    public function likeLists()
    {
        $data = $this->request->params([
            [ "member_id", "" ]
        ]);
        return success(( new ContentLikeService() )->getLikeLists($data));
    }

    /**
     * 获取我收藏的作品
     * @return \think\Response
     */
    public function collectLists()
    {
        return success(( new ContentCollectService() )->getCollectLists());
    }

    /**
     * 内容详情
     * @param $id
     * @return \think\Response
     */
    public function detail($id)
    {
        return success(( new ContentService() )->getDetail($id));
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
            [ "location", '' ]
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
     * @param $id - 社区内容id
     * @return \think\Response
     */
    public function del(int $id)
    {
        ( new ContentService() )->del($id);
        return success('DELETE_SUCCESS');
    }

    /**
     * 社区内容点赞
     * @param $id
     * @return \think\Response
     */
    public function like($id)
    {
        $data = $this->request->params([
            [ "status", 1 ],
        ]);
        return success(data: ( new ContentLikeService() )->like($id, $data[ 'status' ]));
    }

    /**
     * 社区内容收藏
     * @param $id
     * @return \think\Response
     */
    public function collect($id)
    {
        $data = $this->request->params([
            [ "status", 1 ],
        ]);
        return success(data: ( new ContentCollectService() )->collect($id, $data[ 'status' ]));
    }

    /**
     * 社区内容浏览
     * @param $id
     * @return \think\Response
     */
    public function browse($id)
    {
        ( new ContentService() )->browse($id);
        return success('SUCCESS');
    }

    /**
     * 社区内容分享
     * @param $id
     * @return \think\Response
     */
    public function share($id)
    {
        ( new ContentService() )->share($id);
        return success('SUCCESS');
    }

    /**
     * 宝贝内容分页列表
     * @return \think\Response
     */
    public function treasureContentPage()
    {
        $data = $this->request->params([
            [ "treasure_id", 0 ]
        ]);

        return success(( new ContentService() )->getTreasureContentPage($data[ 'treasure_id' ]));
    }

}
