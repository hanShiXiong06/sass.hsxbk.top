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

namespace addon\sow_community\app\adminapi\controller\topic;

use addon\sow_community\app\service\admin\topic\TopicService;
use core\base\BaseAdminController;


/**
 * 社区话题控制器
 * Class Topic
 * @package addon\sow_community\app\adminapi\controller\topic
 */
class Topic extends BaseAdminController
{

    /**
     * 获取社区话题分页列表
     * @return \think\Response
     */
    public function pages()
    {
        $data = $this->request->params([
            [ "topic_name", "" ],
            [ 'status', '' ],
            [ 'order', '' ],
            [ 'sort', '' ],
            [ 'is_recommend', '' ],
        ]);
        return success(( new TopicService() )->getPage($data));
    }

    /**
     * 获取社区话题列表
     * @return \think\Response
     */
    public function lists()
    {
        $data = $this->request->params([
            [ "topic_name", "" ],
            [ 'status', '' ],
            [ 'is_recommend', '' ],
        ]);
        return success(( new TopicService() )->getList($data));
    }

    /**
     * 社区话题详情
     * @param int $id
     * @return \think\Response
     */
    public function info(int $id)
    {
        return success(( new TopicService() )->getInfo($id));
    }

    /**
     * 添加社区话题
     * @return \think\Response
     */
    public function add()
    {
        $data = $this->request->params([
            [ "category_id", "" ],
            [ "topic_name", "" ],
            [ 'status', 0 ],
            [ 'is_recommend', 1 ],
            [ "sort", 0 ]
        ]);
        $this->validate($data, 'addon\sow_community\app\validate\topic\Topic.add');
        $id = ( new TopicService() )->add($data);
        return success('ADD_SUCCESS', [ 'id' => $id ]);
    }

    /**
     * 社区话题编辑
     * @param $id - 社区话题id
     * @return \think\Response
     */
    public function edit(int $id)
    {
        $data = $this->request->params([
            [ "category_id", "" ],
            [ "topic_name", "" ],
            [ 'status', 0 ],
            [ 'is_recommend', 1 ],
            [ "sort", 0 ]
        ]);
        $data[ 'topic_id' ] = $id;
        $this->validate($data, 'addon\sow_community\app\validate\topic\Topic.edit');
        ( new TopicService() )->edit($id, $data);
        return success('EDIT_SUCCESS');
    }

    /**
     * 社区话题删除
     * @param $id - 社区话题id
     * @return \think\Response
     */
    public function del(int $id)
    {
        ( new TopicService() )->del($id);
        return success('DELETE_SUCCESS');
    }

    /**
     * 修改社区话题排序号
     * @return \think\Response
     */
    public function modifySort()
    {
        $data = $this->request->params([
            [ 'topic_id', '' ],
            [ 'sort', '' ],
        ]);
        ( new TopicService() )->modifySort($data);
        return success('SUCCESS');
    }

    /**
     * 修改社区话题状态
     * @return \think\Response
     */
    public function modifyStatus()
    {
        $data = $this->request->params([
            [ 'topic_id', '' ],
            [ 'status', '' ],
        ]);
        ( new TopicService() )->modifyStatus($data);
        return success('SUCCESS');
    }

    /**
     * 修改社区话题推荐状态
     * @return \think\Response
     */
    public function modifyRecommend()
    {
        $data = $this->request->params([
            [ 'topic_id', '' ],
            [ 'is_recommend', '' ],
        ]);
        ( new TopicService() )->modifyRecommend($data);
        return success('SUCCESS');
    }

    /**
     * 获取社区话题内容
     * @return \think\Response
     */
    public function getContent()
    {
        $data = $this->request->params([
            [ 'topic_id', '' ],
        ]);
        return success(( new TopicService() )->getContent($data));
    }

}
