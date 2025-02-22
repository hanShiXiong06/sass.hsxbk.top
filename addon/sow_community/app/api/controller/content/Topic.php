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

use addon\sow_community\app\service\api\content\TopicService;
use core\base\BaseApiController;


/**
 * 社区话题控制器
 * Class Topic
 * @package addon\sow_community\app\api\controller\content
 */
class Topic extends BaseApiController
{

    /**
     * 获取社区话题列表
     * @return \think\Response
     */
    public function lists()
    {
        $data = $this->request->params([
            [ "topic_name", "" ],
        ]);
        return success(( new TopicService() )->getList($data));
    }

}
