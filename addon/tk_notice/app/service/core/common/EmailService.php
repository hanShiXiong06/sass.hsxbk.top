<?php

namespace addon\tk_notice\app\service\core\common;
require __DIR__ . '/phpmailer/src/PHPMailerXFEmail.php';
require __DIR__ . '/phpmailer/src/ExceptionXFEmail.php';
require __DIR__ . '/phpmailer/src/SMTPXFEmail.php';

use addon\tk_notice\app\service\core\common\phpmailer\src\PHPMailerXFEmail;
use core\base\BaseApiService;
use Exception;
use think\facade\Cache;
use think\facade\Log;

/**
 * Email邮件服务封装
 */
class EmailService extends BaseApiService
{
    public function __construct()
    {
        parent::__construct();
    }

    public function sendMsg($config, $text, $toemail = '', $key = 'tk_notice_notice_email')
    {
        Log::write('---TK-消息通知-email执行---' . date('Y-m-d H:i:s', time()));
        try {
            $title = $config['email_title'] ?? '站点通知';
            if ($config['email_min'] == '') {
                $config['email_min'] = 0;
            }
            if (!Cache::get($key)) {
                $fromemail = $config['email_from'];
                if ($toemail == '') {
                    $toemail = $config['email_to'];
                }
                $password = $config['email_password'];
                $host = $config['email_host'];
                $mail = new PHPMailerXFEmail();
                $mail->isSMTP();// 使用SMTP服务
                $mail->CharSet = "utf8";// 编码格式为utf8，不设置编码的话，中文会出现乱码
                $mail->Host = $host;// 发送方的SMTP服务器地址
                $mail->SMTPAuth = true;// 是否使用身份验证
                $mail->Username = $fromemail;// 发送方的163邮箱用户名，就是你申请163的SMTP服务使用的163邮箱</span><span style="color:#333333;">
                $mail->Password = $password;// 发送方的邮箱密码，注意用163邮箱这里填写的是“客户端授权密码”而不是邮箱的登录密码！</span><span style="color:#333333;">
                $mail->SMTPSecure = "ssl";// 使用ssl协议方式</span><span style="color:#333333;">
                $mail->Port = 465;
                $mail->setFrom($fromemail, $title);
                $mail->addAddress($toemail, '站点新任务');
                $mail->Subject = '站点通知';// 邮件标题
                $mail->Body = $text;// 邮件正文
                $mail->send();
                Cache::set($key, $config['email_min'] ? (string)(60 * (int)$config['email_min']) : '');
            }
            return true;
        } catch (Exception $e) {
            Log::write('---TK-消息通知失败-email---' . $e->getMessage() . date('Y-m-d H:i:s', time()));
        }
    }

}