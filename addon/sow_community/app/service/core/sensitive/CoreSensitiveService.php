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

namespace addon\sow_community\app\service\core\sensitive;

use addon\sow_community\app\model\Sensitive;
use core\base\BaseCoreService;

/**
 * 社区敏感词服务层
 * Class CoreSensitiveService
 * @package addon\sow_community\app\service\core
 */
class CoreSensitiveService extends BaseCoreService
{
    public function __construct()
    {
        parent::__construct();
        $this->model = new Sensitive();
    }

    /**
     * 设置社区敏感词
     * @param array $params
     * @return bool
     */
    public function setSensitive(array $params = [])
    {
        $where = array(
            [ 'config_key', '=', 'SENSITIVE' ],
            [ 'site_id', '=', $params[ 'site_id' ] ]
        );
        $data = array(
            'site_id' => $params[ 'site_id' ],
            'config_key' => 'SENSITIVE',
            'value' => $params[ 'value' ],
        );
        $info = $this->getSensitive($params[ 'site_id' ]);
        if (empty($info)) {
            $data[ 'create_time' ] = time();
            $this->model->create($data);
        } else {
            $data[ 'update_time' ] = time();
            $this->model->where($where)->save($data);
        }
        return true;
    }

    /**
     * 获取社区敏感词
     * @param int $site_id
     * @return array
     */
    public function getSensitive(int $site_id)
    {
        return $this->model->where([ [ 'config_key', '=', 'SENSITIVE' ], [ 'site_id', '=', $site_id ] ])->field('id,site_id,config_key,value,create_time')->findOrEmpty()->toArray();
    }

    /**
     * 判断文本是否包含敏感词
     * @param mixed $text
     * @param int $site_id
     * @return bool
     */
    public function containsSensitive(mixed $text, int $site_id)
    {
        $text = strtolower(str_replace(' ', '', preg_replace('/[!@#$%^&*()\[\]{}<>\|?:;"]/', "", $text)));
        $value = $this->getSensitive($site_id)[ 'value' ] ?? '';
        $sensitive_array = [];
        if (!empty($value)) {
            $sensitive_array = explode(',', $value);
        }
        foreach ($sensitive_array as $sensitive) {
            if (stripos($text, str_replace(' ', '', $sensitive)) !== false) {
                return true;
            }
        }
        return false;
    }
}

