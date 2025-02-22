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

namespace addon\sow_community\app\validate\content;

use addon\sow_community\app\service\core\sensitive\CoreSensitiveService;
use core\base\BaseValidate;
use think\facade\Lang;

/**
 * 社区内容验证器
 * Class Content
 * @package addon\sow_community\app\validate\content
 */
class Content extends BaseValidate
{

    protected $rule = [
        'content_type' => 'require',
        'content_image' => 'checkImageOrVideoRequired',
        'content_video' => 'checkImageOrVideoRequired',
        'content_title' => 'checkSensitive',
        'content' => 'checkSensitive',
        'category_id' => 'require'
    ];

    protected $message = [
        'content_type.require' => [ 'common_validate.require', [ 'content_type' ] ],
        'category_id.require' => 'validate_content.category_id_require'
    ];

    protected $scene = [
        "add" => [ 'content_type', 'content_image', 'content_video', 'content_title', 'content', 'category_id' ],
        "edit" => [ 'content_type', 'content_image', 'content_video', 'content_title', 'content', 'category_id' ]
    ];

    public function checkImageOrVideoRequired($value, $rule, $data)
    {
        return !empty($data[ 'content_image' ]) || !empty($data[ 'content_video' ]) ? true : get_lang("validate_content.content_image_or_video_required");
    }

    /**
     * 敏感词验证
     * @param $value
     * @param $rule
     * @param array $data
     * @return Lang|true
     */
    protected function checkSensitive($value, $rule, $data = [])
    {
        return !( new CoreSensitiveService() )->containsSensitive($value, $this->request->siteId()) ? true : get_lang("validate_content.cannot_contain_sensitive");
    }

}
