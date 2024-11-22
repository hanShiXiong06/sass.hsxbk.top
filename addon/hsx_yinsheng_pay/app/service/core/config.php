<?php
namespace addon\hsx_yinsheng_pay\app\service\core;

 $url  = 'http://localhost:82/upload/attachment/document/yinsheng/100005/';
 [
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

