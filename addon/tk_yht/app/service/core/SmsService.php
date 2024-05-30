<?php

namespace addon\tk_yht\app\service\core;

use app\service\core\sys\CoreConfigService;
use core\exception\CommonException;
use core\exception\NoticeException;
use Exception;
use think\facade\Cache;
use addon\tk_yht\app\dict\common\CommonDict;
/**
 * 短信服务层
 */
class SmsService extends YhtService
{
    /**
     * @param array $config
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }


    /**
     * 发送短信
     * @return bool|mixed
     * @throws Exception
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
                throw new Exception($res['msg']);
            }
        } catch ( Exception $e ) {
            throw new Exception($e->getMessage());
        }
    }

    /**
     *获取模板
     */
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
     *发送记录
     */
    public function record(int $page = 0, int $limit = 15)
    {
        $token = $this->access_token;
        $res = $this->http_get('v2/sms_v2/record', [
            'page' => 1,
            'limit' => 20,
            'appid'=>$this->access_key,
        ], $token);
        return $res;
    }

}