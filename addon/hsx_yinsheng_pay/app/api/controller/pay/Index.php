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

namespace addon\hsx_yinsheng_pay\app\api\controller\pay;

use addon\hsx_yinsheng_pay\app\service\core\common;
use addon\hsx_yinsheng_pay\app\service\core\YsfApiService;

use core\base\BaseApiController;
use think\Response;

class Index extends BaseApiController
{
    /**
     * Hello World
     * @return Response
     */
    public function pay()
    {   
        
        $url  = 'http://172.20.10.2:82/upload/attachment/document/yinsheng/100005/';
        $config = [
            // 请求地址域名 测试
        //    'BASE_URL' => 'https://appdev.ysepay.com',
            // 请求地址域名 生产
            'BASE_URL' => 'https://ysgate.ysepay.com',
            /**
             * 发起方商户号 服务商在银盛给自己开设的商户号，即可当作发起方商户号
             * 生产环境需要使用自己的发起发商户号，并找相应的对接人员开通所需要的接口权限，并告知是国密还是RSA
             */
            'CERT_ID' => '826121648160110',
            /**
             * 商户端私钥证书密码
             * 生产环境需要使用自己私钥的密码
             */
            'MERC_PRIVATE_FILE_PASSWORD' => 'a111111',
        

            /**
             * 银盛端公钥证书 (RSA加密)
             * 生产环境需要自行去开放平台上下载银盛公钥证书，也可以找对接人提供
             */
            'YS_PUBLIC_CER_PATH' => $url.'cert/rsa/businessgate.cer',
            /**
             * 商户端的私钥证书 (RSA加密)
             * 生产环境需要使用自己生产的私钥证书
             */
            'MERC_PRIVATE_FILE' => $url."/cert/rsa/rsa.pfx",

            /**
             * 银盛端公钥证书 (国密SM2加)
             * 生产环境需要自行去开放平台上下载银盛公钥证书，也可以找对接人提供
             */
            'SM2_YS_PUBLIC_CER_PATH' =>  $url."/cert/sm2/sm2businessgate.cer",

            /**
             * 商户端的私钥证书 (国密SM2加密)
             * 生产环境需要使用自己生产的私钥证书
             */
            'SM2_MERC_PRIVATE_FILE' =>  $url."/cert/sm2/826341457228011.sm2"
        ];


      
        $ysfApiService = new YsfApiService($config);

        # 电子合同查询签约状态
        $result = $ysfApiService->queryContract(time(), '');
       
        return success('SUCCESS', json_encode($result, true));
    }

    /**
     * notify
     * @return Response
     * 异步回调函数 接受银盛的回调
     * */ 
    public function notify()
{


    // 确保日志目录存在
    $log_dir = __DIR__ . "/log";
    if (!is_dir($log_dir)) {
        mkdir($log_dir, 0755, true);
    }

    // 构建日志文件路径
    $log_file = $log_dir . "/" . date("Y-m-d") . ".txt";

    // 获取POST数据
    $post = $_POST;

    // 调用addlog方法写入日志
    $this->addlog($post,$log_file);

    // 返回成功消息
    return 'SUCCESS';
}

public function addlog($post,$log_file)
{
    // 打开日志文件，如果不存在则创建
    $fp = fopen($log_file, "a+");
    if ($fp === false) {
        return 'ERROR: Unable to open log file.';
    }

    // 写入日志信息
    fwrite($fp, '==========post=========' . date("Y-m-d H:i:s") . '==================' . "\r\n");
    fwrite($fp, '==========首次======================' . "\r\n");
    fwrite($fp, 'http://' . $_SERVER['HTTP_HOST'] . $_SERVER['REQUEST_URI'] . "\r\n");
    fwrite($fp, var_export($post, true) . "\r\n");

    // 关闭文件
    fclose($fp);
}
}
