<?php
namespace addon\hsx_yinsheng_pay\app\service\core;


// require_once dirname(__FILE__) . "/../../util/DateUtil.php";
// require_once dirname(__FILE__) . "../../util/StrUtil.php";
// require_once dirname(__FILE__) . "../../util/RSA256Util.php";
// require_once dirname(__FILE__) . "../../util/AESUtil.php";
// require_once dirname(__FILE__) . "../../util/SignUtil.php";
// require_once dirname(__FILE__) . "../../util/HttpClient.php";
// require_once dirname(__FILE__) . "../../util/FileUtil.php";
use  addon\hsx_yinsheng_pay\app\util\DateUtil;
use  addon\hsx_yinsheng_pay\app\util\StrUtil;
use  addon\hsx_yinsheng_pay\app\util\RSA256Util;
use  addon\hsx_yinsheng_pay\app\util\AESUtil;
use  addon\hsx_yinsheng_pay\app\util\SignUtil;
use  addon\hsx_yinsheng_pay\app\util\HttpClient;
use  addon\hsx_yinsheng_pay\app\util\FileUtil;
use  addon\hsx_yinsheng_pay\app\util\LogUtil;
use  addon\hsx_yinsheng_pay\app\listener\PaySuccess as listenerPaySuccess;
use  addon\hsx_yinsheng_pay\app\service\core\CoreOrderService;
use addon\recharge\app\model\RechargeOrder;
use app\dict\pay\OnlinePayDict;
use app\dict\pay\PayDict;
use app\job\pay\PayReturnTo;
use app\model\pay\Pay;
use addon\phone_shop\app\model\order\Order;
use core\base\BaseCoreService;
use core\exception\PayException;
use app\service\core\pay\CorePayEventService;
use think\db\exception\DataNotFoundException;
use think\db\exception\DbException;
use think\db\exception\ModelNotFoundException;

use think\facade\Db;
use think\facade\Log;
use think\Model;
use Throwable;



/**
 * 接口服务类
 */
class YsfApiService extends BaseCoreService
{
    /**
     * @param $baseUrl string 请求地址域名
     * @param $merchantId string 发起方商户号
     * @param $publicCertPath string 银盛端公钥证书文件路径
     * @param $privateCertPath string 商户端的私钥证书文件路径
     * @param $privateCertPwd string 私钥证书密码
     */
    private $baseUrl;
    private $merchantId;
    private $publicCertPath;
    private $privateCertPath;
    private $privateCertPwd;


    public function __construct($type ,$params)
    {
        

        // 初始化类
        parent::__construct();
        $this->model = new Pay();
        $this->pay_event = new CorePayEventService();

        $this->site_id = $params['site_id'];
        $this->notify_url = 'http://111.224.82.248:82/api/pay/notify/100005/weapp/yinshengpay/pay';
        // $params['notify_url'];
        
        // var_dump($params);
        // $BASE_URL  = 'http://172.20.10.2:82/upload/attachment/document/yinsheng/'.$this->site_id.'/';
        $BASE_URL  = 'http://111.224.82.248:82/upload/attachment/document/yinsheng/'.$this->site_id.'/';
        // 
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
            'YS_PUBLIC_CER_PATH' => $BASE_URL.'cert/rsa/businessgate.cer',
            /**
             * 商户端的私钥证书 (RSA加密)
             * 生产环境需要使用自己生产的私钥证书
             */
            'MERC_PRIVATE_FILE' => $BASE_URL."/cert/rsa/rsa.pfx",

            /**
             * 银盛端公钥证书 (国密SM2加)
             * 生产环境需要自行去开放平台上下载银盛公钥证书，也可以找对接人提供
             */
            'SM2_YS_PUBLIC_CER_PATH' =>  $BASE_URL."/cert/sm2/sm2businessgate.cer",

            /**
             * 商户端的私钥证书 (国密SM2加密)
             * 生产环境需要使用自己生产的私钥证书
             */
            'SM2_MERC_PRIVATE_FILE' =>  $BASE_URL."/cert/sm2/826341457228011.sm2"
        ];

        // $setting = SeafoxPaySetting::where(['site_id' => $params['site_id']])->findOrEmpty()->toArray();
        // if(empty($setting['scancode_autograph'])){
        //     throw new CommonException('海狐聚合支付加签未设置');
        // }
        // $this->key =  $setting['scancode_autograph'];
       

        $this->baseUrl = $config['BASE_URL'];
        $this->privateCertPath = $config['MERC_PRIVATE_FILE'];
        $this->merchantId = $config['CERT_ID'];
        $this->publicCertPath = $config['YS_PUBLIC_CER_PATH'];
        $this->privateCertPwd = $config['MERC_PRIVATE_FILE_PASSWORD'];

    }

    private function checkSign($resMap)
    {
        /** 对结果进行解密，并使用银盛公钥验签*/
        if (empty($resMap['sign'])) {
            throw new \RuntimeException('验签失败,未返回加签信息,可能是银盛未配置发起方或者发起方证书类型配置有误,返回结果提示为:' . $resMap['msg']);
        } else {
            if (!RSA256Util::verifySign($this->publicCertPath, $resMap['sign'], SignUtil::map2SortedSignStr($resMap))) {
                throw new \RuntimeException("返回结果验签失败");
            }
        }
    }

    private function decryptBizData(&$resMap, $key)
    {
        /** 使用上面生成的加密密钥key，解密返回的业务参数*/
        if (!empty($resMap['businessData'])) {
            $resMap['businessData'] = json_decode(AESUtil::decrypt(base64_decode($resMap['businessData']), $key), true);
        }
    }

    private function jsonEncode($data)
    {
        LogUtil::debug('bizContent:');
        LogUtil::debug($data);
        return json_encode($data, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
    }

    private function genCommonReqParam($method, $key, $reqId)
    {
        return [
            // 接口名称
            'method' => $method,
            // 发送请求的时间，格式"yyyy-MM-dd HH:mm:ss"
            'timeStamp' => DateUtil::nowTimeStr(),
            // 请求使用的编码格式，固定为utf-8
            'charset' => 'utf-8',
            // 请求唯一流水号,商户系统唯一，要求32个字符内（最少14个字符），只能是数字、大小写字母_-且在同一个商户号下唯一
            'reqId' => $reqId,
            //发起方商户号，服务商在银盛给自己开设的商户号，即可当作发起方商户号，由银盛生成并下发。 注意：不同于子商户号，服务商发展的商户即为子商户号
            'certId' => $this->merchantId,
            // 版本号，默认1.0，按接口文档来
            'version' => "1.2",
            // 银盛公钥加密随机生成的字符串（key）得到的加密值
            'check' => RSA256Util::encryptByPub($this->publicCertPath, $key)
        ];
    }

    private function doSign(array &$reqMap)
    {
        // 使用接入方私钥对排序的请求参数加签，并存放到请求参数里面.privateCertPath:私钥地址，privateCertPwd:私钥密钥
        $reqMap['sign'] = RSA256Util::signWithPfx(SignUtil::map2SortedSignStr($reqMap), $this->privateCertPath, $this->privateCertPwd);
    }

    /**
     * 入网申请
     * @param $reqId string 流水号  要求32个字符内（最少14个字符），只能是数字、大小写字母_-且在同一个商户号下唯一
     * @param $custInfo array 基本信息
     * @param $crpInfo array 法人信息
     * @param $stlAccInfo array 结算信息
     * @param $busInfo array 营业信息
     * @return array
     */
    public function addCustInfoApply($reqId, $custInfo, $crpInfo, $stlAccInfo, $busInfo)
    {
        /** 生成对业务参数加密的随机密钥 */
        $key = StrUtil::randomStr();
        $reqMap = $this->genCommonReqParam('smsc.addCustInfoApply', $key, $reqId);
        /** 封装业务参数,具体参数见文档*/
        /** 使用生成的密钥key对业务参数进行加密，并将加密后的业务参数放入请求参数bizContent中*/
        $reqMap['bizContent'] = AESUtil::encrypt($this->jsonEncode([
            // 基本信息
            'custInfo' => $custInfo,
            // 法人信息
            'crpInfo' => $crpInfo,
            // 结算信息
            'stlAccInfo' => $stlAccInfo,
            // 营业信息
            'busInfo' => $busInfo,
        ]), $key);
        // 签名
        $this->doSign($reqMap);
        $resMap = HttpClient::post($this->baseUrl . '/openapi/t1/smsc/addCustInfoApply', $reqMap);
        $resMap = json_decode(base64_decode($resMap), true);
        $this->checkSign($resMap);
        $this->decryptBizData($resMap, $key);
        return $resMap;
    }

    /**
     * 商户入网申请修改
     * @param $reqId string 流水号  要求32个字符内（最少14个字符），只能是数字、大小写字母_-且在同一个商户号下唯一
     * @param $sysFlowId string 入网申请流水
     * @param $custInfo array 基本信息
     * @param $crpInfo array 法人信息
     * @param $stlAccInfo array 结算信息
     * @param $busInfo array 营业信息
     * @return array
     */
    public function modifyCustInfoApply($reqId, $sysFlowId, $custInfo, $crpInfo, $stlAccInfo, $busInfo)
    {
        /** 生成对业务参数加密的随机密钥 */
        $key = StrUtil::randomStr();
        $reqMap = $this->genCommonReqParam('smsc.modifyCustInfoApply', $key, $reqId);
        /** 封装业务参数,具体参数见文档*/
        /** 使用生成的密钥key对业务参数进行加密，并将加密后的业务参数放入请求参数bizContent中*/
        $reqMap['bizContent'] = AESUtil::encrypt($this->jsonEncode([
            // 入网申请流水
            'sysFlowId' => $sysFlowId,
            // 基本信息
            'custInfo' => $custInfo,
            // 法人信息
            'crpInfo' => $crpInfo,
            // 结算信息
            'stlAccInfo' => $stlAccInfo,
            // 营业信息
            'busInfo' => $busInfo,
        ]), $key);
        // 签名
        $this->doSign($reqMap);
        $resMap = HttpClient::post($this->baseUrl . '/openapi/smsc/modifyCustInfoApply', $reqMap);
        $resMap = json_decode(base64_decode($resMap), true);
        $this->checkSign($resMap);
        $this->decryptBizData($resMap, $key);
        return $resMap;
    }


    /**
     * 图片上传
     * @param $reqId string 流水号  要求32个字符内（最少14个字符），只能是数字、大小写字母_-且在同一个商户号下唯一
     * @param $sysFlowId string 入网申请流水号,调用商户入网申请接口成功会返回入网申请流水号。
     * @param $picType string 图片类型， A001-营业执照 A002-法人身份证正面(头像面) A003-法人身份证反面(国徽面) A004-结算账户正面(卡号面) A005-结算账户反面 A006-商户门头照片 A007-内景照片 A008-收银台照片 A009-手持身份证合影照片 A010-收单协议盖章页 A011-开户许可证 A012-收单协议首页 A013-非法人身份证头像面 A014-非法人身份证国徽面 B001-租赁合同 第一页 B002-租赁合同 第二页 B003-租赁合同 第三页 B004-法人/非法人手持授权书 B005-法人/非法人结算授权书 B006-租赁面积图片 B007-经营业务图片 B008-其他1 B009-其他2
     * @param $filePath string 文件路径
     * @return array
     */
    public function imageUpload($reqId, $sysFlowId, $picType, $filePath)
    {
        /** 生成对业务参数加密的随机密钥 */
        $key = StrUtil::randomStr();
        $reqMap = $this->genCommonReqParam('file.smsc.upload', $key, $reqId);
        $sha256 = hash_file('sha256', $filePath);
        $picNm = basename($filePath);
        /** 封装业务参数,具体参数见文档*/
        /** 使用生成的密钥key对业务参数进行加密，并将加密后的业务参数放入请求参数bizContent中*/
        $reqMap['bizContent'] = AESUtil::encrypt($this->jsonEncode([
            'meta' => [
                // 入网申请流水号,调用商户入网申请接口成功会返回入网申请流水号。
                'sysFlowId' => $sysFlowId,
                //图片类型， A001-营业执照 A002-法人身份证正面(头像面) A003-法人身份证反面(国徽面) A004-结算账户正面(卡号面) A005-结算账户反面 A006-商户门头照片 A007-内景照片 A008-收银台照片 A009-手持身份证合影照片 A010-收单协议盖章页 A011-开户许可证 A012-收单协议首页 A013-非法人身份证头像面 A014-非法人身份证国徽面 B001-租赁合同 第一页 B002-租赁合同 第二页 B003-租赁合同 第三页 B004-法人/非法人手持授权书 B005-法人/非法人结算授权书 B006-租赁面积图片 B007-经营业务图片 B008-其他1 B009-其他2
                'picType' => $picType,
                // 图片名称
                'picNm' => $picNm,
                // sha256
                'sha256' => $sha256,
            ]
        ]), $key);
        // 签名
        $this->doSign($reqMap);
        //图片文件,将媒体图片进行二进制转换，得到的媒体图片二进制内容，在请求body中上传此二进制内容。媒体图片只支持JPG、JPEG、BMP、PNG格式，文件大小不能超过2M
        $reqMap['file'] = new \CURLFile(realpath($filePath));
        $resMap = HttpClient::post($this->baseUrl . '/openapi/file/smsc/upload', $reqMap);
        $resMap = json_decode(base64_decode($resMap), true);
        $this->checkSign($resMap);
        $this->decryptBizData($resMap, $key);
        return $resMap;
    }

    /**
     * 商户入网审核
     * @param $reqId string 流水号  要求32个字符内（最少14个字符），只能是数字、大小写字母_-且在同一个商户号下唯一
     * @param $sysFlowId string 入网申请流水号,调用商户入网申请接口成功会返回入网申请流水号
     * @param $auditFlag string 审核标志 Y通过,N拒绝
     */
    public function auditCustInfoApply($reqId, $sysFlowId, $auditFlag)
    {
        /** 生成对业务参数加密的随机密钥 */
        $key = StrUtil::randomStr();
        $reqMap = $this->genCommonReqParam('smsc.auditCustInfoApply', $key, $reqId);
        /** 封装业务参数,具体参数见文档*/
        /** 使用生成的密钥key对业务参数进行加密，并将加密后的业务参数放入请求参数bizContent中*/
        $reqMap['bizContent'] = AESUtil::encrypt($this->jsonEncode([
            // 入网申请流水号,调用商户入网申请接口成功会返回入网申请流水号。
            'sysFlowId' => $sysFlowId,
            // 审核标志 Y通过,N拒绝
            'auditFlag' => $auditFlag,
        ]), $key);
        // 签名
        $this->doSign($reqMap);
        $resMap = HttpClient::post($this->baseUrl . '/openapi/t1/smsc/auditCustInfoApply', $reqMap);
        $resMap = json_decode(base64_decode($resMap), true);
        $this->checkSign($resMap);
        $this->decryptBizData($resMap, $key);
        return $resMap;
    }

    /**
     * 查询商户状态
     * @param $reqId string 流水号  要求32个字符内（最少14个字符），只能是数字、大小写字母_-且在同一个商户号下唯一
     * @param $sysFlowId string 入网申请流水号,调用商户入网申请接口成功会返回入网申请流水号
     */
    public function queryCustApply($reqId, $sysFlowId)
    {
        /** 生成对业务参数加密的随机密钥 */
        $key = StrUtil::randomStr();
        $reqMap = $this->genCommonReqParam('smsc.queryCustApply', $key, $reqId);
        /** 封装业务参数,具体参数见文档*/
        /** 使用生成的密钥key对业务参数进行加密，并将加密后的业务参数放入请求参数bizContent中*/
        $reqMap['bizContent'] = AESUtil::encrypt($this->jsonEncode([
            // 入网申请流水号,调用商户入网申请接口成功会返回入网申请流水号。
            'sysFlowId' => $sysFlowId,
        ]), $key);
        // 签名
        $this->doSign($reqMap);
        $resMap = HttpClient::post($this->baseUrl . '/openapi/smsc/queryCustApply', $reqMap);
        $resMap = json_decode(base64_decode($resMap), true);
        $this->checkSign($resMap);
        $this->decryptBizData($resMap, $key);
        return $resMap;
    }

    /**
     * 合同签约
     * @param $reqId string 流水号  要求32个字符内（最少14个字符），只能是数字、大小写字母_-且在同一个商户号下唯一
     * @param $signData array 签约数据
     */
    public function smscSign($reqId, $signData)
    {
        /** 生成对业务参数加密的随机密钥 */
        $key = StrUtil::randomStr();
        $reqMap = $this->genCommonReqParam('smsc.sign', $key, $reqId);
        /** 封装业务参数,具体参数见文档*/
        /** 使用生成的密钥key对业务参数进行加密，并将加密后的业务参数放入请求参数bizContent中*/
        $reqMap['bizContent'] = AESUtil::encrypt($this->jsonEncode($signData), $key);
        // 签名
        $this->doSign($reqMap);
        $resMap = HttpClient::post($this->baseUrl . '/openapi/t1/smsc/sign', $reqMap);
        $resMap = json_decode(base64_decode($resMap), true);
        $this->checkSign($resMap);
        $this->decryptBizData($resMap, $key);
        return $resMap;
    }

    /**
     * 重发签约短信或邮件
     * @param $reqId string 流水号  要求32个字符内（最少14个字符），只能是数字、大小写字母_-且在同一个商户号下唯一
     * @param $signId string 签约ID,发起签约时候返回
     * @param $isSendConMsg string 签约通知标识 contractType=2时必填 0(短信+邮件) 1(短信) 2(邮件) 3(不通知)
     */
    public function sendSmsOrEmailMsg($reqId, $signId, $isSendConMsg)
    {
        /** 生成对业务参数加密的随机密钥 */
        $key = StrUtil::randomStr();
        $reqMap = $this->genCommonReqParam('smsc.sign.sendSmsOrEmailMsg', $key, $reqId);
        /** 封装业务参数,具体参数见文档*/
        /** 使用生成的密钥key对业务参数进行加密，并将加密后的业务参数放入请求参数bizContent中*/
        $reqMap['bizContent'] = AESUtil::encrypt($this->jsonEncode([
            'signId' => $signId,
            'isSendConMsg' => $isSendConMsg,
        ]), $key);
        // 签名
        $this->doSign($reqMap);
        $resMap = HttpClient::post($this->baseUrl . '/openapi/smsc/sign/sendSmsOrEmailMsg', $reqMap);
        $resMap = json_decode(base64_decode($resMap), true);
        $this->checkSign($resMap);
        $this->decryptBizData($resMap, $key);
        return $resMap;
    }

    /**
     * 电子合同查询签约状态
     * @param $reqId string 流水号  要求32个字符内（最少14个字符），只能是数字、大小写字母_-且在同一个商户号下唯一
     * @param $signId string 客户签约流水号
     */


    /**
     * 支付的方法
     * */  
    // public function pay($reqId, $signId)
    public function pay( array $params = array())
   
    {
      
        $pay = Pay::where(['site_id' => $this->site_id,'out_trade_no'=>$params['out_trade_no']])->findOrEmpty()->toArray();
        if($pay['trade_type']=='phone_shop'){
            $order = Order::where(['site_id' => $this->site_id,'order_id'=>$pay['trade_id']])->findOrEmpty()->toArray();
        }
        // 如果是其他应用 
        // var_dump($pay);
        if($pay['trade_type'] =='recharge' ){
            $order = RechargeOrder::where(['site_id' => $this->site_id,'order_id'=>$pay['trade_id']])->findOrEmpty()->toArray();
        }
        
        
        // return  $order['order_no'];
        /** 生成对业务参数加密的随机密钥 */
        $key = StrUtil::randomStr();
        $reqMap = $this->genCommonReqParam('order.createOrder', $key, time());
//        //版本号，该接口升级到2.0，按接口文档来
//        $reqMap['version'] = '2.0';
        /** 封装业务参数,具体参数见文档*/
        /** 使用生成的密钥key对业务参数进行加密，并将加密后的业务参数放入请求参数bizContent中*/
        $reqMap['bizContent'] = AESUtil::encrypt($this->jsonEncode([
            'orderId' => $order['order_no'],
            'msgCode' => 'S3001',
            'mercId' => '826121757320282',
            'busiCode' => '00510102',
            'shopDate' => '20240907',
            'amount' => 1 , // $params['money']*100,
            'paymentValidTime' => '30',
            'currency' => 'CNY',
            'backUrl' => $this->notify_url,
            'payMode' => '29',
            // 'h5Join' => '00',
            'note' => $params['body'],
            'remark'=>$params['out_trade_no']
        ]), $key);
        // 签名
        $this->doSign($reqMap);
        $resMap = HttpClient::post($this->baseUrl . '/openapi/order/createOrder', $reqMap);
        $resMap = json_decode(base64_decode($resMap), true);
        $this->checkSign($resMap);
        $this->decryptBizData($resMap, $key);
        // 确保日志目录存在
        $log_dir = __DIR__ . "/log";
        if (!is_dir($log_dir)) {
            mkdir($log_dir, 0755, true);
        }
    
        // 构建日志文件路径
        $log_file = $log_dir . "/" . date("Y-m-d") . ".txt";
    
        $this->addlog($resMap,$log_file);
        $this->addlog($params , $log_file);
        // 

        return $resMap;
    }
    public function notify(string $action, callable $callback)
    {
    //     echo "<pre>";
    //    print_r((new listenerPaySuccess())->handle(['site_id'=>100005,'out_trade_no'=>'20240817468590416654336','trade_type'=>'yinshengpay','trade_id'=>67]));
    //    echo "--2</pre>";
    //    die;
      
        // 确保日志目录存在
        $log_dir = __DIR__ . "/log";
        if (!is_dir($log_dir)) {
            mkdir($log_dir, 0755, true);
        }
    
        // 构建日志文件路径
        $log_file = $log_dir . "/" . date("Y-m-d") . ".txt";
    
        // 获取POST数据
        $post = $_POST;
        // 获取 post的参数
        $post_data = file_get_contents("php://input");

        // 调用addlog方法写入日志
        $this->addlog($post,$log_file);
        // 将 post参数写入日志文件
        $this->addlog($post_data,$log_file);
        // 将 $post_data 转为 数组 
        
        $this->addlog($post_data , $log_file);
        // 将 post_data['bizContent'] 转为 json
        $data = json_decode($post_data, true);
        $data['bizContent'] = json_decode($data['bizContent'], true);   
       
        $this->addlog($data , $log_file);
        
        if($action == 'pay'){

            $out_trade_no = $data['bizContent']['remark'] ;
           
            $status = 'SUCCESS';
            // $rt4_status = $_POST['rt4_status'];

            // if($rt4_status == 'CLOSE'){
            //     $status = 'CLOSED';
            // }
            // 官方退款状态 INIT:已接收DOING:处理中SUCCESS:成功 FAIL:失败CLOSE:关闭 CANCEL:撤销  框架支付状态 SUCCESS CLOSED NOTPAY

            // var_dump($out_trade_no);
            // $callback_result = $callback($out_trade_no, ['status' => $status]);
            // echo 1;
            // 通过 $out_trade_no 查询订单信息
            // if($data['bizContent']['note']=='充值订单'){
            //     // 去订单表查询
            //     $order = (new RechargeOrder())->where(['order_no'=>$out_trade_no])->findOrEmpty()->toArray();
            // }else{
            //     $order = (new Order())->where(['order_no'=>$out_trade_no])->findOrEmpty()->toArray();
            // }
            
       
            // 通过 $order['order_id'] 查询支付信息 中的 交易流水号
            // $pay = (new Pay())->where(['trade_id'=>$order['order_id']])->findOrEmpty()->toArray();
            // $out_trade_no = $pay['out_trade_no'];
            // 然后调用回调函数
            

            // 然后更新订单状态
            $callback_result = $callback($out_trade_no, ['status' => $status]);

            // $callback_result = $callback(  $trade_id , ['status' => $status]);
            // 
            
            
            
            
            if($callback_result){
                exit('success');
            }
            exit('fail');
        }
        // if(!empty($data['bizContent']['payTime'])){
            
        //         $orderid = $data['bizContent']['orderId'] ;
        //         $this->addlog($orderid , $log_file);
        //         (new Order())->where('order_no',$orderid)->update(['status'=>2]);
        //         // 返回成功消息
        //         exit('success');
        // }
        exit('fail');
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
        // 参数一并打印
        if(empty($post)){
            foreach ($post as $key => $value) {
                fwrite($fp, $key . ':' . $value . "\r\n");
            }
        }
        
    
        // 关闭文件
        fclose($fp);
    }
    // public function close(int $site_id, string $out_trade_no)
    public function close($params)
    {
        
          // 确保日志目录存在
        $log_dir = __DIR__ . "/log";
        if (!is_dir($log_dir)) {
            mkdir($log_dir, 0755, true);
        }
          // 构建日志文件路径
        $log_file = $log_dir . "/" . date("Y-m-d") . ".txt";
        $this->addlog($params,$log_file);
        $this->addlog($_REQUEST,$log_file);
        return true;

        // $pay = $this->findPayInfoByOutTradeNo($site_id, $out_trade_no);
        // if ($pay->isEmpty()) throw new PayException('ALIPAY_TRANSACTION_NO_NOT_EXIST');
        // if ($pay[ 'status' ] == PayDict::STATUS_CANCLE) return true;

        // if (!in_array($pay[ 'status' ], [
        //     PayDict::STATUS_WAIT,
        //     PayDict::STATUS_ING
        // ])) throw new PayException('TREAT_PAYMENT_IS_OPEN');
        // if ($pay[ 'status' ] == PayDict::STATUS_ING) {
        //     if (!empty($pay->type)) {
        //         //尝试取消或关闭第三方支付
        //         $close = $this->pay_event->init($site_id, $pay->channel, $pay->type)->close($out_trade_no);
        //         if (!$close) {//有问题查询第三方订单详情
        //             $order = $this->pay_event->init($site_id, $pay->channel, $pay->type)->getOrder($out_trade_no);
        //             if (!empty($order)) {
        //                 if ($order[ 'status' ] == OnlinePayDict::SUCCESS) {//如果已支付,就将支付调整为已支付
        //                     $this->paySuccess($site_id, [
        //                         'out_trade_no' => $out_trade_no,
        //                         'type' => $pay->type
        //                     ]);
        //                     return false;
        //                 }
        //             }
        //         }
        //     }
        // }
        // //支付关闭
        // $this->payClose($site_id, [
        //     'out_trade_no' => $out_trade_no
        // ]);
       
    }

    public function getOrder(string $out_trade_no)
    {
        return $this->pay_event->getOrder([ 'out_trade_no' => $out_trade_no ]);
    }


    /**
     * 电子合同下载
     * @param $reqId string 流水号  要求32个字符内（最少14个字符），只能是数字、大小写字母_-且在同一个商户号下唯一
     * @param $signId string 签约ID,发起签约时候返回
     * @param $savePath string 保存文件路径,为空就不保存
     * @return array
     */
    public function downloadContract($reqId, $signId, $savePath = '')
    {
        /** 生成对业务参数加密的随机密钥 */
        $key = StrUtil::randomStr();
        $reqMap = $this->genCommonReqParam('smsc.sign.downloadContract', $key, $reqId);
        /** 封装业务参数,具体参数见文档*/
        /** 使用生成的密钥key对业务参数进行加密，并将加密后的业务参数放入请求参数bizContent中*/
        $reqMap['bizContent'] = AESUtil::encrypt($this->jsonEncode([
            'signId' => $signId,
        ]), $key);
        // 签名
        $this->doSign($reqMap);
        $resMap = HttpClient::post($this->baseUrl . '/openapi/smsc/sign/downloadContract', $reqMap);
        $resMap = json_decode(base64_decode($resMap), true);
        $this->checkSign($resMap);
        $this->decryptBizData($resMap, $key);
        if ($resMap['code'] == '00000' && !empty($savePath) && !empty($resMap['businessData'])) {
            $businessData = $resMap['businessData'];
            if (!empty($businessData['contractFileString'])) {
                FileUtil::saveFile($savePath, base64_decode($businessData['contractFileString']));
            }
        }
        return $resMap;
    }

    /**
     * 商户基本信息变更申请
     * @param $reqId string 流水号  要求32个字符内（最少14个字符），只能是数字、大小写字母_-且在同一个商户号下唯一
     * @param $baseInfo array 基本信息
     * @return array
     */
    public function changeMercBaseInfo($reqId, array $baseInfo)
    {
        /** 生成对业务参数加密的随机密钥 */
        $key = StrUtil::randomStr();
        $reqMap = $this->genCommonReqParam('smsc.changeMercBaseInfo', $key, $reqId);
        /** 封装业务参数,具体参数见文档*/
        /** 使用生成的密钥key对业务参数进行加密，并将加密后的业务参数放入请求参数bizContent中*/
        $reqMap['bizContent'] = AESUtil::encrypt($this->jsonEncode($baseInfo), $key);
        // 签名
        $this->doSign($reqMap);
        $resMap = HttpClient::post($this->baseUrl . '/openapi/smsc/changeMercBaseInfo', $reqMap);
        $resMap = json_decode(base64_decode($resMap), true);
        $this->checkSign($resMap);
        $this->decryptBizData($resMap, $key);
        return $resMap;
    }

    /**
     * 基本信息变更审核
     * @param $reqId string 流水号  要求32个字符内（最少14个字符），只能是数字、大小写字母_-且在同一个商户号下唯一
     * @param $changeSysFlowId string 变更申请流水号,基本信息变更申请接口返回
     * @param $auditFlag string 审核标志Y审核通过，N审核拒绝
     * @param $auditNote string 审核备注
     * @return array
     */
    public function changeBaseAudit($reqId, $changeSysFlowId, $auditFlag, $auditNote)
    {
        /** 生成对业务参数加密的随机密钥 */
        $key = StrUtil::randomStr();
        $reqMap = $this->genCommonReqParam('smsc.changeBaseAudit', $key, $reqId);
        /** 封装业务参数,具体参数见文档*/
        /** 使用生成的密钥key对业务参数进行加密，并将加密后的业务参数放入请求参数bizContent中*/
        $reqMap['bizContent'] = AESUtil::encrypt($this->jsonEncode([
            'changeSysFlowId' => $changeSysFlowId,
            'auditFlag' => $auditFlag,
            'auditNote' => $auditNote,
        ]), $key);
        // 签名
        $this->doSign($reqMap);
        $resMap = HttpClient::post($this->baseUrl . '/openapi/smsc/changeBaseAudit', $reqMap);
        $resMap = json_decode(base64_decode($resMap), true);
        $this->checkSign($resMap);
        $this->decryptBizData($resMap, $key);
        return $resMap;
    }

    /**
     * 结算信息变更申请
     * @param $reqId string 流水号  要求32个字符内（最少14个字符），只能是数字、大小写字母_-且在同一个商户号下唯一
     * @param array $accInfo 结算信息
     * @return array
     */
    public function changeMercStlAccInfo($reqId, array $accInfo)
    {
        /** 生成对业务参数加密的随机密钥 */
        $key = StrUtil::randomStr();
        $reqMap = $this->genCommonReqParam('smsc.changeMercStlAccInfo', $key, $reqId);
        /** 封装业务参数,具体参数见文档*/
        /** 使用生成的密钥key对业务参数进行加密，并将加密后的业务参数放入请求参数bizContent中*/
        $reqMap['bizContent'] = AESUtil::encrypt($this->jsonEncode($accInfo), $key);
        // 签名
        $this->doSign($reqMap);
        $resMap = HttpClient::post($this->baseUrl . '/openapi/t1/smsc/changeMercStlAccInfo', $reqMap);
        $resMap = json_decode(base64_decode($resMap), true);
        $this->checkSign($resMap);
        $this->decryptBizData($resMap, $key);
        return $resMap;
    }

    /**
     * 结算信息变更审核
     * @param $reqId string 流水号  要求32个字符内（最少14个字符），只能是数字、大小写字母_-且在同一个商户号下唯一
     * @param $changeSysFlowId string 变更流水号 结算信息变更申请成功后返回
     * @param $auditFlag string 审核标志Y审核通过，N审核拒绝
     * @param $auditNote string 审核备注
     * @return array
     */
    public function changeStlAudit($reqId, $changeSysFlowId, $auditFlag, $auditNote)
    {
        /** 生成对业务参数加密的随机密钥 */
        $key = StrUtil::randomStr();
        $reqMap = $this->genCommonReqParam('smsc.changeStlAudit', $key, $reqId);
        /** 封装业务参数,具体参数见文档*/
        /** 使用生成的密钥key对业务参数进行加密，并将加密后的业务参数放入请求参数bizContent中*/
        $reqMap['bizContent'] = AESUtil::encrypt($this->jsonEncode([
            'changeSysFlowId' => $changeSysFlowId,
            'auditFlag' => $auditFlag,
            'auditNote' => $auditNote,
        ]), $key);
        // 签名
        $this->doSign($reqMap);
        $resMap = HttpClient::post($this->baseUrl . '/openapi/smsc/changeStlAudit', $reqMap);
        $resMap = json_decode(base64_decode($resMap), true);
        $this->checkSign($resMap);
        $this->decryptBizData($resMap, $key);
        return $resMap;
    }

    /**
     * 费率信息变更申请
     * @param $reqId string 流水号  要求32个字符内（最少14个字符），只能是数字、大小写字母_-且在同一个商户号下唯一
     * @param array $rateInfo 费率信息
     * @return array
     */
    public function changeRate($reqId, array $rateInfo)
    {
        /** 生成对业务参数加密的随机密钥 */
        $key = StrUtil::randomStr();
        $reqMap = $this->genCommonReqParam('smsc.changeRate', $key, $reqId);
        /** 封装业务参数,具体参数见文档*/
        /** 使用生成的密钥key对业务参数进行加密，并将加密后的业务参数放入请求参数bizContent中*/
        $reqMap['bizContent'] = AESUtil::encrypt($this->jsonEncode($rateInfo), $key);
        // 签名
        $this->doSign($reqMap);
        $resMap = HttpClient::post($this->baseUrl . '/openapi/smsc/changeRate', $reqMap);
        $resMap = json_decode(base64_decode($resMap), true);
        $this->checkSign($resMap);
        $this->decryptBizData($resMap, $key);
        return $resMap;
    }

    /**
     * 费率信息变更审核
     * @param $reqId string 流水号  要求32个字符内（最少14个字符），只能是数字、大小写字母_-且在同一个商户号下唯一
     * @param $changeSysFlowId string 变更流水号 费率信息变更申请成功后返回
     * @param $auditFlag string 审核标志Y审核通过，N审核拒绝
     * @param $auditNote string 审核备注
     * @return array
     */
    public function changeRateAudit($reqId, $changeSysFlowId, $auditFlag, $auditNote)
    {
        /** 生成对业务参数加密的随机密钥 */
        $key = StrUtil::randomStr();
        $reqMap = $this->genCommonReqParam('smsc.changeRateAudit', $key, $reqId);
        /** 封装业务参数,具体参数见文档*/
        /** 使用生成的密钥key对业务参数进行加密，并将加密后的业务参数放入请求参数bizContent中*/
        $reqMap['bizContent'] = AESUtil::encrypt($this->jsonEncode([
            'changeSysFlowId' => $changeSysFlowId,
            'auditFlag' => $auditFlag,
            'auditNote' => $auditNote,
        ]), $key);
        // 签名
        $this->doSign($reqMap);
        $resMap = HttpClient::post($this->baseUrl . '/openapi/smsc/changeRateAudit', $reqMap);
        $resMap = json_decode(base64_decode($resMap), true);
        $this->checkSign($resMap);
        $this->decryptBizData($resMap, $key);
        return $resMap;
    }

    /**
     * 上传变更图片
     * @param $reqId string 流水号  要求32个字符内（最少14个字符），只能是数字、大小写字母_-且在同一个商户号下唯一
     * @param $changeFlowId string 变更申请流水号 变更申请成功后返回
     * @param $picType string 图片类型， A001-营业执照 A002-法人身份证正面(头像面) A003-法人身份证反面(国徽面) A004-结算账户正面(卡号面) A005-结算账户反面 A006-商户门头照片 A007-内景照片 A008-收银台照片 A009-手持身份证合影照片 A010-收单协议盖章页 A011-开户许可证 A012-收单协议首页 A013-非法人身份证头像面 A014-非法人身份证国徽面 B001-租赁合同 第一页 B002-租赁合同 第二页 B003-租赁合同 第三页 B004-法人/非法人手持授权书 B005-法人/非法人结算授权书 B006-租赁面积图片 B007-经营业务图片 B008-其他1 B009-其他2
     * @param $filePath string 文件路径
     * @return array
     */
    public function uploadChangePic($reqId, $changeFlowId, $picType, $filePath)
    {
        /** 生成对业务参数加密的随机密钥 */
        $key = StrUtil::randomStr();
        $reqMap = $this->genCommonReqParam('file.smsc.uploadChangePic', $key, $reqId);
        $sha256 = hash_file('sha256', $filePath);
        $picNm = basename($filePath);
        /** 封装业务参数,具体参数见文档*/
        /** 使用生成的密钥key对业务参数进行加密，并将加密后的业务参数放入请求参数bizContent中*/
        $reqMap['bizContent'] = AESUtil::encrypt($this->jsonEncode([
            'meta' => [
                //变更申请流水号 变更申请成功后返回
                'changeFlowId' => $changeFlowId,
                //图片类型， A001-营业执照 A002-法人身份证正面(头像面) A003-法人身份证反面(国徽面) A004-结算账户正面(卡号面) A005-结算账户反面 A006-商户门头照片 A007-内景照片 A008-收银台照片 A009-手持身份证合影照片 A010-收单协议盖章页 A011-开户许可证 A012-收单协议首页 A013-非法人身份证头像面 A014-非法人身份证国徽面 B001-租赁合同 第一页 B002-租赁合同 第二页 B003-租赁合同 第三页 B004-法人/非法人手持授权书 B005-法人/非法人结算授权书 B006-租赁面积图片 B007-经营业务图片 B008-其他1 B009-其他2
                'picType' => $picType,
                // 图片名称
                'picNm' => $picNm,
                // sha256
                'sha256' => $sha256,
            ]
        ]), $key);
        // 签名
        $this->doSign($reqMap);
        $reqMap['file'] = new \CURLFile(realpath($filePath));
        $resMap = HttpClient::post($this->baseUrl . '/openapi/file/smsc/uploadChangePic', $reqMap);
        $resMap = json_decode(base64_decode($resMap), true);
        $this->checkSign($resMap);
        $this->decryptBizData($resMap, $key);
        return $resMap;
    }

    /**
     * 查询变更状态
     * @param $reqId string 流水号  要求32个字符内（最少14个字符），只能是数字、大小写字母_-且在同一个商户号下唯一
     * @param $changeSysFlowId string 入网申请流水号,调用商户入网申请接口成功会返回入网申请流水号
     * @return array
     */
    public function queryCustChange($reqId, $changeSysFlowId)
    {
        /** 生成对业务参数加密的随机密钥 */
        $key = StrUtil::randomStr();
        $reqMap = $this->genCommonReqParam('smsc.queryCustChange', $key, $reqId);
        /** 封装业务参数,具体参数见文档*/
        /** 使用生成的密钥key对业务参数进行加密，并将加密后的业务参数放入请求参数bizContent中*/
        $reqMap['bizContent'] = AESUtil::encrypt($this->jsonEncode([
            // 入网申请流水号,调用商户入网申请接口成功会返回入网申请流水号。
            'changeSysFlowId' => $changeSysFlowId,
        ]), $key);
        // 签名
        $this->doSign($reqMap);
        $resMap = HttpClient::post($this->baseUrl . '/openapi/smsc/queryCustChange', $reqMap);
        $resMap = json_decode(base64_decode($resMap), true);
        $this->checkSign($resMap);
        $this->decryptBizData($resMap, $key);
        return $resMap;
    }

    /**
     * 报备
     * @param $reqId string 流水号  要求32个字符内（最少14个字符），只能是数字、大小写字母_-且在同一个商户号下唯一
     * @param $sweepData array 报备数据
     * @return array
     */
    public function sweepreport($reqId, array $sweepData)
    {
        /** 生成对业务参数加密的随机密钥 */
        $key = StrUtil::randomStr();
        $reqMap = $this->genCommonReqParam('smsc.saas.sweep.sweepreport', $key, $reqId);
        /** 封装业务参数,具体参数见文档*/
        /** 使用生成的密钥key对业务参数进行加密，并将加密后的业务参数放入请求参数bizContent中*/
        $reqMap['bizContent'] = AESUtil::encrypt($this->jsonEncode($sweepData), $key);
        // 签名
        $this->doSign($reqMap);
        $resMap = HttpClient::post($this->baseUrl . '/openapi/smsc/saas/sweep/sweepreport', $reqMap);
        $resMap = json_decode(base64_decode($resMap), true);
        $this->checkSign($resMap);
        $this->decryptBizData($resMap, $key);
        return $resMap;
    }

    /**
     * 重新报备
     * @param $reqId string 流水号  要求32个字符内（最少14个字符），只能是数字、大小写字母_-且在同一个商户号下唯一
     * @param $sweepData array 重新报备数据
     * @return array
     */
    public function sweepreportAgain($reqId, array $sweepData)
    {
        /** 生成对业务参数加密的随机密钥 */
        $key = StrUtil::randomStr();
        $reqMap = $this->genCommonReqParam('smsc.saas.sweep.reportAgain', $key, $reqId);
        /** 封装业务参数,具体参数见文档*/
        /** 使用生成的密钥key对业务参数进行加密，并将加密后的业务参数放入请求参数bizContent中*/
        $reqMap['bizContent'] = AESUtil::encrypt($this->jsonEncode($sweepData), $key);
        // 签名
        $this->doSign($reqMap);
        $resMap = HttpClient::post($this->baseUrl . '/openapi/smsc/saas/sweep/reportAgain', $reqMap);
        $resMap = json_decode(base64_decode($resMap), true);
        $this->checkSign($resMap);
        $this->decryptBizData($resMap, $key);
        return $resMap;
    }

    /**
     * 码牌绑定
     * 商户进件成功后，商户需要用银盛的码牌进行交易，可以调用本接口， 将银盛预制码与商户进行绑定
     * @param $reqId string 流水号  要求32个字符内（最少14个字符），只能是数字、大小写字母_-且在同一个商户号下唯一
     * @param $mercId string 商户号
     * @param $qryCodeUrl string 二维码识别内容,识别预制码的内容
     * @return array
     */
    public function bindQry($reqId, $mercId, $qryCodeUrl)
    {
        /** 生成对业务参数加密的随机密钥 */
        $key = StrUtil::randomStr();
        $reqMap = $this->genCommonReqParam('smsc.bindQry', $key, $reqId);
        /** 封装业务参数,具体参数见文档*/
        /** 使用生成的密钥key对业务参数进行加密，并将加密后的业务参数放入请求参数bizContent中*/
        $reqMap['bizContent'] = AESUtil::encrypt($this->jsonEncode([
            'mercId' => $mercId,
            'qryCodeUrl' => $qryCodeUrl,
        ]), $key);
        // 签名
        $this->doSign($reqMap);
        $resMap = HttpClient::post($this->baseUrl . '/openapi/smsc/bindQry', $reqMap);
        $resMap = json_decode(base64_decode($resMap), true);
        $this->checkSign($resMap);
        $this->decryptBizData($resMap, $key);
        return $resMap;
    }

    /**
     * 码牌查询
     * 查询商户码牌列表
     * @param $reqId string 流水号  要求32个字符内（最少14个字符），只能是数字、大小写字母_-且在同一个商户号下唯一
     * @param $mercId string 商户号
     * @return array
     */
    public function queryBindQry($reqId, $mercId)
    {
        /** 生成对业务参数加密的随机密钥 */
        $key = StrUtil::randomStr();
        $reqMap = $this->genCommonReqParam('smsc.queryBindQry', $key, $reqId);
        /** 封装业务参数,具体参数见文档*/
        /** 使用生成的密钥key对业务参数进行加密，并将加密后的业务参数放入请求参数bizContent中*/
        $reqMap['bizContent'] = AESUtil::encrypt($this->jsonEncode([
            'mercId' => $mercId,
        ]), $key);
        // 签名
        $this->doSign($reqMap);
        $resMap = HttpClient::post($this->baseUrl . '/openapi/smsc/queryBindQry', $reqMap);
        $resMap = json_decode(base64_decode($resMap), true);
        $this->checkSign($resMap);
        $this->decryptBizData($resMap, $key);
        return $resMap;
    }

    /**
     * 终端绑定
     * 商户进件成功后，商户需要用银盛的 pos 机进行交易，可以调用本接口，将pos 机与商户进行绑定
     * @param $reqId string 流水号  要求32个字符内（最少14个字符），只能是数字、大小写字母_-且在同一个商户号下唯一
     * @param array $bindData 绑定数据
     * @return array
     */
    public function termBind($reqId, array $bindData)
    {
        /** 生成对业务参数加密的随机密钥 */
        $key = StrUtil::randomStr();
        $reqMap = $this->genCommonReqParam('smsc.term.bind', $key, $reqId);
        /** 封装业务参数,具体参数见文档*/
        /** 使用生成的密钥key对业务参数进行加密，并将加密后的业务参数放入请求参数bizContent中*/
        $reqMap['bizContent'] = AESUtil::encrypt($this->jsonEncode($bindData), $key);
        // 签名
        $this->doSign($reqMap);
        $resMap = HttpClient::post($this->baseUrl . '/openapi/smsc/term/bind', $reqMap);
        $resMap = json_decode(base64_decode($resMap), true);
        $this->checkSign($resMap);
        $this->decryptBizData($resMap, $key);
        return $resMap;
    }

    /**
     * 终端解绑
     * 需要将pos 机进行解除，可以调用本接口，将pos 机与商户进行解除绑定
     * @param $reqId string 流水号  要求32个字符内（最少14个字符），只能是数字、大小写字母_-且在同一个商户号下唯一
     * @param array $unBindData 解绑数据
     * @return array
     */
    public function termUnBind($reqId, array $unBindData)
    {
        /** 生成对业务参数加密的随机密钥 */
        $key = StrUtil::randomStr();
        $reqMap = $this->genCommonReqParam('smsc.term.unbind', $key, $reqId);
        /** 封装业务参数,具体参数见文档*/
        /** 使用生成的密钥key对业务参数进行加密，并将加密后的业务参数放入请求参数bizContent中*/
        $reqMap['bizContent'] = AESUtil::encrypt($this->jsonEncode($unBindData), $key);
        // 签名
        $this->doSign($reqMap);
        $resMap = HttpClient::post($this->baseUrl . '/openapi/smsc/term/unbind', $reqMap);
        $resMap = json_decode(base64_decode($resMap), true);
        $this->checkSign($resMap);
        $this->decryptBizData($resMap, $key);
        return $resMap;
    }

    /**
     * 终端号查询
     * 通过商户号查其绑定终端列表
     * @param $reqId string 流水号  要求32个字符内（最少14个字符），只能是数字、大小写字母_-且在同一个商户号下唯一
     * @param $mercId string 商户号
     */
    public function queryTermList($reqId, $mercId)
    {
        /** 生成对业务参数加密的随机密钥 */
        $key = StrUtil::randomStr();
        $reqMap = $this->genCommonReqParam('smsc.term.queryList', $key, $reqId);
        /** 封装业务参数,具体参数见文档*/
        /** 使用生成的密钥key对业务参数进行加密，并将加密后的业务参数放入请求参数bizContent中*/
        $reqMap['bizContent'] = AESUtil::encrypt($this->jsonEncode([
            'mercId' => $mercId,
        ]), $key);
        // 签名
        $this->doSign($reqMap);
        $resMap = HttpClient::post($this->baseUrl . '/openapi/smsc/term/queryList', $reqMap);
        $resMap = json_decode(base64_decode($resMap), true);
        $this->checkSign($resMap);
        $this->decryptBizData($resMap, $key);
        return $resMap;
    }

    /**
     * MCC码查询
     * @param $reqId string 流水号  要求32个字符内（最少14个字符），只能是数字、大小写字母_-且在同一个商户号下唯一
     * @param $mccCd string mcc码,mcc码和商户类型不能全部为空。
     * @param $mercType string 商户类型,1-个体工商户、 2-企业、 3-小微，mcc码和商户类型不能全部为空。
     * @return array
     */
    public function queryMccList($reqId, $mccCd, $mercType)
    {
        /** 生成对业务参数加密的随机密钥 */
        $key = StrUtil::randomStr();
        $reqMap = $this->genCommonReqParam('aggregation.scan.mccQuery', $key, $reqId);
        /** 封装业务参数,具体参数见文档*/
        /** 使用生成的密钥key对业务参数进行加密，并将加密后的业务参数放入请求参数bizContent中*/
        $reqMap['bizContent'] = AESUtil::encrypt($this->jsonEncode([
            'mccCd' => $mccCd,
            'mercType' => $mercType,
        ]), $key);
        // 签名
        $this->doSign($reqMap);
        $resMap = HttpClient::post($this->baseUrl . '/openapi/aggregation/scan/mccQuery', $reqMap);
        $resMap = json_decode(base64_decode($resMap), true);
        $this->checkSign($resMap);
        $this->decryptBizData($resMap, $key);
        return $resMap;
    }

    /**
     * 卡bin查询
     * 根据银行卡号查询卡bin
     * @param $reqId string 流水号  要求32个字符内（最少14个字符），只能是数字、大小写字母_-且在同一个商户号下唯一
     * @param $bankCardNo string 银行卡号
     * @return array
     */
    public function findBankBinByBankCardNo($reqId, $bankCardNo)
    {
        /** 生成对业务参数加密的随机密钥 */
        $key = StrUtil::randomStr();
        $reqMap = $this->genCommonReqParam('trade.findBankBinByBankCardNo', $key, $reqId);
        /** 封装业务参数,具体参数见文档*/
        /** 使用生成的密钥key对业务参数进行加密，并将加密后的业务参数放入请求参数bizContent中*/
        $reqMap['bizContent'] = AESUtil::encrypt($this->jsonEncode([
            'bankCardNo' => $bankCardNo,
        ]), $key);
        // 签名
        $this->doSign($reqMap);
        $resMap = HttpClient::post($this->baseUrl . '/openapi/trade/findBankBinByBankCardNo', $reqMap);
        $resMap = json_decode(base64_decode($resMap), true);
        $this->checkSign($resMap);
        $this->decryptBizData($resMap, $key);
        return $resMap;
    }

    /**
     * 地区信息查询
     * 通过本接口，可以获取省市区的地区码
     * @param $reqId string 流水号  要求32个字符内（最少14个字符），只能是数字、大小写字母_-且在同一个商户号下唯一
     * @param array $findParam 请求参数
     * @return array
     */
    public function findCmmtAreaInfoList($reqId, array $findParam)
    {
        /** 生成对业务参数加密的随机密钥 */
        $key = StrUtil::randomStr();
        $reqMap = $this->genCommonReqParam('pregate.trade.findCmmtAreaInfoList', $key, $reqId);
        /** 封装业务参数,具体参数见文档*/
        /** 使用生成的密钥key对业务参数进行加密，并将加密后的业务参数放入请求参数bizContent中*/
        $reqMap['bizContent'] = AESUtil::encrypt($this->jsonEncode($findParam), $key);
        // 签名
        $this->doSign($reqMap);
        $resMap = HttpClient::post($this->baseUrl . '/openapi/pregate/trade/findCmmtAreaInfoList', $reqMap);
        $resMap = json_decode(base64_decode($resMap), true);
        $this->checkSign($resMap);
        $this->decryptBizData($resMap, $key);
        return $resMap;
    }

    /**
     * 行名行号查询
     * 根据地区、行别、银行名称获取行名行号
     * @param $reqId string 流水号  要求32个字符内（最少14个字符），只能是数字、大小写字母_-且在同一个商户号下唯一
     * @param array $findParam 请求参数
     * @return array
     */
    public function findBankNameAndBankCode($reqId, array $findParam)
    {
        /** 生成对业务参数加密的随机密钥 */
        $key = StrUtil::randomStr();
        $reqMap = $this->genCommonReqParam('pregate.trade.findBankNameAndBankCode', $key, $reqId);
        /** 封装业务参数,具体参数见文档*/
        /** 使用生成的密钥key对业务参数进行加密，并将加密后的业务参数放入请求参数bizContent中*/
        $reqMap['bizContent'] = AESUtil::encrypt($this->jsonEncode($findParam), $key);
        // 签名
        $this->doSign($reqMap);
        $resMap = HttpClient::post($this->baseUrl . '/openapi/pregate/trade/findBankNameAndBankCode', $reqMap);
        $resMap = json_decode(base64_decode($resMap), true);
        $this->checkSign($resMap);
        $this->decryptBizData($resMap, $key);
        return $resMap;
    }

}