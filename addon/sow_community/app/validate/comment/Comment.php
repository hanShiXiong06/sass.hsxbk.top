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

namespace addon\sow_community\app\validate\comment;

use addon\sow_community\app\service\core\sensitive\CoreSensitiveService;
use core\base\BaseValidate;
use think\facade\Lang;

/**
 * 社区评论验证器
 * Class Comment
 * @package addon\sow_community\app\validate\comment
 */
class Comment extends BaseValidate
{

    protected $rule = [
        'content_id' => 'require',
        'comment_content' => 'require|checkSensitive',
    ];

    protected $message = [
        'content_id.require' => [ 'common_validate.require', [ 'content_id' ] ],
        'comment_content.require' => [ 'common_validate.require', [ 'comment_content' ] ],
    ];

    protected $scene = [
        "add" => [ 'content_id', 'comment_content' ],
        "edit" => [ 'content_id', 'comment_content' ]
    ];

    /**
     * 敏感词验证
     * @param $value
     * @param $rule
     * @param array $data
     * @return Lang|true
     */
    protected function checkSensitive($value, $rule, $data = [])
    {
        return !( new CoreSensitiveService() )->containsSensitive($value, $this->request->siteId()) ? true : get_lang("validate_comment.cannot_contain_sensitive");
    }

}
