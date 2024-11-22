<?php
// +----------------------------------------------------------------------
// | Author: TK
// +----------------------------------------------------------------------

namespace addon\qf_notice\app\service\core;

use addon\qf_notice\app\dict\config\ConfigDict;
use addon\qf_notice\app\job\send\SendEmail;
use addon\qf_notice\app\job\send\SendSms;
use addon\qf_notice\app\job\send\SendWechat;
use addon\qf_notice\app\model\addon\Addon;
use addon\qf_notice\app\model\user\User;
use app\model\member\Member;
use app\service\core\sys\CoreConfigService;
use core\base\BaseApiService;
use think\Exception;


/**
 * 公用消息发送服务层封装
 */
class SendNoticeService extends BaseApiService
{
    public function __construct()
    {
        parent::__construct();
        $this->model = new Addon();
    }

    /**
     * @Notes:公用信息发送封装
     * @Interface sendNotice
     * @param $site_id
     * @param $addoninfo
     * @throws \think\db\exception\DbException
     * @author: TK
     * @Time: 2024/11/4   下午9:28
     */

    public function sendNotice($site_id, $addoninfo)
    {
        if(isset($addoninfo['status'])&&$addoninfo['status']==0) throw new Exception('该消息应用未启用');
        if ($addoninfo['type'] == 'wechat') {
            $this->sendWechatNotice($site_id, $addoninfo);
        }
        if ($addoninfo['type'] == 'sms') {
            $this->sendSmsNotice($site_id, $addoninfo);
        }
        //邮箱发送
        if ($addoninfo['type'] == 'email') {
            $this->sendEmailNotice($site_id, $addoninfo);
        }
    }

    /**
     * @Notes:获取配置
     * @Interface getConfig
     * @return mixed
     * @throws Exception
     * @author: TK
     * @Time: 2024/11/14   上午10:08
     */
    public function getConfig($site_id)
    {
        $info = (new CoreConfigService())->getConfig($site_id, ConfigDict::getType());
        if (empty($info)) {
            throw new Exception('请先配置基础信息');
        }
        return $info['value'];
    }
    /**
     * @Notes:邮箱发送
     * @Interface sendEmailNotice
     * @param $site_id
     * @param $addon_info
     * @author: TK
     * @Time: 2024/11/14   上午12:36
     */
    public function sendEmailNotice($site_id, $addon_info)
    {
        $current_page = 1;
        $limit = 1;
        $userModel=new User();
        $config= $this->getConfig($site_id);
        $config['email_title']=$addon_info['email_title']??'消息发送';
        $config['email_desc']=$addon_info['email_desc']??'消息发送';
        while (true) {
            $list = $this->getUserList($site_id, $addon_info['cat_id'],'email', $current_page, $limit);
            if (empty($list['data'])) break;
            foreach ($list['data'] as $k => $v) {
                    SendEmail::dispatch([
                        'config' => $config,
                        'content'=>$addon_info['email_content'],
                        'email'=>$v['email'],
                    ]);
                    //更改发送次数
                    $userModel->where(['site_id'=>$site_id,'mobile'=>$v['mobile']])->update(['num'=>$v['num']+1]);
            }
            if ($current_page * $limit >= $list['total']) {
                break;
            }
            $current_page++;
        }
    }
    /**
     * @Notes:发送短信信息
     * @Interface sendSmsNotice
     * @param $site_id
     * @param $addon_info
     * @throws \think\db\exception\DbException
     * @author: TK
     * @Time: 2024/11/4   下午9:28
     */
    public function sendSmsNotice($site_id, $addon_info)
    {

        $value = json_decode($addon_info['value'], true);
        $data = [];
        foreach ($value as $k => $v) {
            $data[$v['field']] = $v['value'];
        }
        $template_id = $addon_info['template_id'];
        if ($addon_info['is_main'] == 1) {
            $current_page = 1;
            $limit = 1;
            while (true) {
                $list = $this->getSystemMemberList($site_id, $addon_info['level_id'],'mobile', $current_page, $limit);
                if (empty($list['data'])) break;
                foreach ($list['data'] as $k => $v) {
                    if ($this->isChineseMobile($v['mobile'])) {
                        $send_data=[
                            'addon_name' => $addon_info['name'],
                            'mobile' => $v['mobile'],
                            'template_id' => $template_id,
                            'temp_data' => $data,
                            'sms_content' => $addon_info['sms_content']
                        ];
                        SendSms::dispatch([
                            'site_id' => $site_id,
                            'data' => $send_data
                        ]);
                    }
                }
                if ($current_page * $limit >= $list['total']) {
                    break;
                }
                $current_page++;
            }
        }
        if ($addon_info['is_main'] == 0) {
            $current_page = 1;
            $limit = 1;
            $userModel=new User();
            while (true) {
                $list = $this->getUserList($site_id, $addon_info['cat_id'],'mobile', $current_page, $limit);
                if (empty($list['data'])) break;
                foreach ($list['data'] as $k => $v) {
                    if ($this->isChineseMobile($v['mobile'])) {
                        $send_data=[
                            'addon_name' => $addon_info['name'],
                            'mobile' => $v['mobile'],
                            'template_id' => $template_id,
                            'temp_data' => $data,
                            'sms_content' => $addon_info['sms_content']
                        ];
                        SendSms::dispatch([
                            'site_id' => $site_id,
                            'data' => $send_data
                        ]);
                        //更改发送次数
                        $userModel->where(['site_id'=>$site_id,'mobile'=>$v['mobile']])->update(['num'=>$v['num']+1]);
                    }
                }
                if ($current_page * $limit >= $list['total']) {
                    break;
                }
                $current_page++;
            }
        }
    }

    /**
     * @Notes:简单检查手机号是否合法
     * @Interface isChineseMobile
     * @param $mobile
     * @return bool
     * @author: TK
     * @Time: 2024/11/4   下午9:27
     */

    public function isChineseMobile($mobile)
    {
        $pattern = '/^1[3-9]\d{9}$/';
        return preg_match($pattern, $mobile) == 1;
    }

    /**
     * @Notes:发送公众号类目模板消息
     * @Interface sendWechatNotice
     * @param $site_id
     * @param $addon_info
     * @throws \think\db\exception\DbException
     * @author: TK
     * @Time: 2024/11/4   下午9:28
     */
    public function sendWechatNotice($site_id, $addon_info)
    {
        $value = json_decode($addon_info['value'], true);
        $data = [];
        foreach ($value as $k => $v) {
            $data[$v['field']]['value'] = $v['value'];
        }
        $template_id = $addon_info['template_id'];
        $url = $addon_info['url'];
        if ($addon_info['is_main'] == 1) {
            $current_page = 1;
            $limit = 1;
            while (true) {
                $list = $this->getSystemMemberList($site_id, $addon_info['level_id'],'wx_openid', $current_page, $limit);
                if (empty($list['data'])) break;
                foreach ($list['data'] as $k => $v) {
                    SendWechat::dispatch([
                        'site_id' => $site_id,
                        'data' => [
                            'addon_name' => $addon_info['name'],
                            'openid' => $v['wx_openid'],
                            'template_id' => $template_id,
                            'temp_data' => $data,
                            'url' => $url,
                        ]
                    ]);
                }
                if ($current_page * $limit >= $list['total']) {
                    break;
                }
                $current_page++;
            }
        }

    }

    /**
     * @Notes:获取系统会员列表
     * @Interface getSystemMemberList
     * @param $site_id
     * @param $level_id
     * @param $field_s
     * @param $page
     * @param $limit
     * @return array
     * @throws \think\db\exception\DbException
     * @author: TK
     * @Time: 2024/11/4   下午9:27
     */
    public function getSystemMemberList($site_id,$level_id, $field_s,$page = 1, $limit = 50)
    {
        $where = [];
        if ($level_id != '-1') {
            $where['member_level'] =$level_id;
        }
        $field = 'member_id, site_id, mobile, wx_openid, weapp_openid, wx_unionid, ali_openid, douyin_openid,member_level';
        $list = (new Member())
            ->field($field)
            ->where('site_id', '=', $site_id)
            ->where($field_s, '<>', '')
            ->where($where)
            ->paginate([
                'list_rows' => $limit,
                'page' => $page,
            ]);

        return $list->toArray();
    }
    public function getUserList($site_id,$cat_id, $field_s,$page = 1, $limit = 50)
    {
        $where = [];
        if ($cat_id != '0') {
            $where['cat_id'] =$cat_id;
        }
        $list = (new User())
            ->where('site_id', '=', $site_id)
            ->where($field_s, '<>', '')
            ->where($where)
            ->paginate([
                'list_rows' => $limit,
                'page' => $page,
            ]);
        return $list->toArray();
    }
}
