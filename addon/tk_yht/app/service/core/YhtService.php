<?php

namespace addon\tk_yht\app\service\core;

use app\service\core\sys\CoreConfigService;
use core\base\BaseAdminService;
use core\exception\CommonException;
use core\exception\NoticeException;
use Exception;
use think\facade\Cache;
use addon\tk_yht\app\dict\common\CommonDict;

/**
 * 一号通短信
 * Class Yht
 * @package app\core\sms\driver
 */
class YhtService extends BaseAdminService
{


    protected $access_key = '';
    protected $secret_key = '';
    protected $access_token = '';

    /**
     * @param array $config
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
        $this->config = $this->getConfig();
        if (!$this->config) throw new CommonException('通用配置未完成，请先完成通用配置');
        $this->config = $this->config['value'];
        $this->access_key = $this->config['access_key'] ?? '';
        $this->secret_key = $this->config['secret_key'] ?? '';
        $this->access_token = $this->getToken();
    }


    /**
     * 发送短信
     * @return bool|mixed
     */

    public function getToken()
    {
        $access_token = Cache::get('ydt_access_token_' . $this->access_key, '');
        if ($access_token == '') {
            $res = $this->http_post('v2/user/login', [
                'access_key' => $this->access_key,
                'secret_key' => $this->secret_key,
            ]);
            if ($res['status'] == 200) {
                Cache::set('ydt_access_token_' . $this->access_key, $res['data']['access_token'], 864000 - 1);
                $access_token = Cache::get('ydt_access_token_' . $this->access_key, '');
                return $access_token;
            } else {
                throw new CommonException('一号通token获取失败');
            }
        }
        return $access_token;
    }

    public function http_get($url, $data = null, $token = false)
    {
        $url = 'http://sms.crmeb.net/api/' . $url;
        $curl = curl_init();
        //设置header头
        if ($token !== false) curl_setopt($curl, CURLOPT_HTTPHEADER, ['Authorization:' . $token]);
        curl_setopt($curl, CURLOPT_URL, $url);

        curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, FALSE);
        curl_setopt($curl, CURLOPT_SSL_VERIFYHOST, FALSE);

        if (!empty($data)) {
            curl_setopt($curl, CURLOPT_POST, 1);
            curl_setopt($curl, CURLOPT_POSTFIELDS, $data);
        }
        curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);
        $result = curl_exec($curl);
        $err = curl_error($curl);
        curl_close($curl);
        if ($err) {
            throw new Exception($err);
        } else {
            return json_decode($result, true);
        }
    }

    public function http_post($url, $data = null, $token = false)
    {
        $url = 'http://sms.crmeb.net/api/' . $url;
        $curl = curl_init();
        if ($token !== false) curl_setopt($curl, CURLOPT_HTTPHEADER, ['Authorization:' . $token]);
        curl_setopt($curl, CURLOPT_URL, $url);
        curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, FALSE);
        curl_setopt($curl, CURLOPT_SSL_VERIFYHOST, FALSE);
        if (!empty($data)) {
            curl_setopt($curl, CURLOPT_POST, 1);
            curl_setopt($curl, CURLOPT_POSTFIELDS, $data);
        }
        curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);
        $result = curl_exec($curl);
        $err = curl_error($curl);
        curl_close($curl);
        if ($err) {
            throw new Exception($err);
        } else {
            return json_decode($result, true);
        }
    }


    public function template(int $page = 0, int $limit = 15)
    {
        $token = $this->access_token;
        $res = $this->http_post('v2/sms_v2/temps', [
            'page' => 1,
            'limit' => 20,
        ], $token);
        return $res;
    }

    /**
     * 获取配置信息
     * @param $site_id
     * @param string $config_key
     */
    public function getConfig()
    {
        return (new CoreConfigService())->getConfig($this->site_id, CommonDict::getType());
    }

}