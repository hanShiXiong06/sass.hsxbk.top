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

namespace addon\sow_community\app\validate\topic;

use addon\sow_community\app\service\admin\topic\TopicService;
use core\base\BaseValidate;

/**
 * 社区分类验证器
 * Class Topic
 * @package addon\sow_community\app\validate\topic
 */
class Topic extends BaseValidate
{

    protected $rule = [
        'topic_name' => 'require|checkTopicNameUnique',
    ];

    protected $message = [
        'topic_name.require' => [ 'common_validate.require', [ 'topic_name' ] ]
    ];

    protected $scene = [
        "add" => [ 'topic_name' ],
        "edit" => [ 'topic_name' ]
    ];

    public function checkTopicNameUnique($value, $rule, $data)
    {
        return ( new TopicService() )->checkTopicNameUnique($data) ? get_lang("common_validate.topic_name_unique") : true;
    }

}
