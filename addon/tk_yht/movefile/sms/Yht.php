<?php

namespace core\sms;

use core\exception\CommonException;
use core\exception\NoticeException;
use Exception;
use think\facade\Cache;
use think\facade\Log;

/**
 * 一号通短信
 * Class Yht
 * @package app\core\sms\driver
 */
class Yht extends BaseSms
{


    protected $access_key = '';
    protected $secret_key = '';
    protected $access_token='';
    /**
     * @param array $config
     * @return void
     */
    protected function initialize(array $config = [])
    {
        parent::initialize($config);
        $this->access_key = $config['access_key'] ?? '';
        $this->secret_key = $config['secret_key'] ?? '';
        $this->access_token=$this->getToken();
    }


    /**
     * 发送短信
     * @return bool|mixed
     */
    public function send(string $mobile, string $template_id, array $data = [])
    {
        try {
            $res = $this->http_post('v2/sms_v2/send', [
                'phone' => $mobile,
                'temp_id' => $template_id,
                'param'=> json_encode($data)
            ], $this->access_token);
            if($res['status']==200){
                return $res;
            }else{
                throw new \think\Exception($res['msg']);
            }
        } catch ( Exception $e ) {
            throw new NoticeException($e->getMessage());
        }
    }

    public function getToken()
    {
        $access_token = Cache::get('ydt_access_token_'.$this->access_key, '');
        if ($access_token == '') {
            $res = $this->http_post('v2/user/login', [
                'access_key' => $this->access_key,
                'secret_key' => $this->secret_key,
            ]);
            if ($res['status'] == 200) {
                Cache::set('ydt_access_token_'.$this->access_key, $res['data']['access_token'], 864000 - 1);
                $access_token = Cache::get('ydt_access_token_'.$this->access_key, '');
                return $access_token;
            }else{
                throw new CommonException('请核对一号通应用信息，鉴权token失败');
            }
        }
        return $access_token;
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

    public function modify(string $sign = null, string $mobile, string $code)
    {

    }

    public function template(int $page = 0, int $limit = 15, int $type = 1)
    {
        $token = $this->access_token;
        $res = $this->http_post('v2/sms_v2/temps', [
            'page' => 1,
            'limit' => 20,
        ], $token);
        return $res;
    }

    public function apply(string $title, string $content, int $type)
    {
    }

    public function localTemplate(int $type, int $page, int $limit)
    {
    }

    public function record($id)
    {
    }
}