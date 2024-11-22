<?php
// +----------------------------------------------------------------------
// | Niucloud-admin 企业快速开发的saas管理平台
// +----------------------------------------------------------------------
// | 官方网址：https://www.niucloud.com
// +----------------------------------------------------------------------
// | niucloud团队 版权所有 开源版本可自由商用
// +----------------------------------------------------------------------
// | Author: Niucloud Team
// +----------------------------------------------------------------------

namespace addon\qf_notice\app\service\core\send;

use addon\qf_notice\app\model\qflog\Qflog;
use app\service\core\wechat\CoreWechatService;
use EasyWeChat\Kernel\Exceptions\InvalidArgumentException;
use EasyWeChat\Kernel\Exceptions\InvalidConfigException;
use EasyWeChat\Kernel\Support\Collection;
use GuzzleHttp\Exception\GuzzleException;
use Psr\Http\Message\ResponseInterface;
use think\facade\Log;


class Wechat
{

    public function __construct($site_id)
    {
        $this->site_id = $site_id;
    }

    /**
     * 消息发送
     * @param array $data
     * @return array|Collection|object|ResponseInterface|string
     * @throws GuzzleException
     * @throws InvalidArgumentException
     * @throws InvalidConfigException
     */
    public function send(array $data)
    {
        $openid = $data['openid'];
        $template_id = $data['template_id'];
        $temp_data = $data['temp_data'];
        $url = $data['url'];
        $miniprogram = $data['miniprogram'] ?? [];
        $api = CoreWechatService::appApiClient($this->site_id);
        $param = [
            'touser' => $openid,
            'template_id' => $template_id,
            'url' => $url,
            'miniprogram' => $miniprogram,
            'data' => $temp_data,
        ];
        if (!empty($client_msg_id)) {
            $param['client_msg_id'] = $client_msg_id;
        }
        $res = $api->postJson('cgi-bin/message/template/send', $param);
        (new Qflog())->create([
            'site_id' => $this->site_id,
            'addon_name'=>$data['addon_name'],
            'type' => 'wechat',
            'wx_openid' => $openid,
            'log' => $res,
            'create_time'=>time()
        ]);
        return $res;
    }

    /**
     * 添加模板消息
     * @param array $data
     * @return array|Collection|object|ResponseInterface|string
     * @throws GuzzleException
     * @throws InvalidConfigException
     */
    public function addTemplate(array $data)
    {
        $api = CoreWechatService::appApiClient($this->site_id);
        return $api->postJson('cgi-bin/template/api_add_template', [
            'template_id_short' => $data['shortId'],
            'keyword_name_list' => $data['keyword_name_list']
        ]);
    }

    /**
     * 删除
     * @param array $data
     * @return array|Collection|object|ResponseInterface|string
     * @throws GuzzleException
     * @throws InvalidConfigException
     */
    public function delete(array $data)
    {
        $api = CoreWechatService::appApiClient($this->site_id);

        return $api->postJson('cgi-bin/template/del_private_template', [
            'template_id' => $data['templateId'],
        ]);
    }

    /**
     * 获取
     * @return void
     */
    public function get()
    {

    }
}