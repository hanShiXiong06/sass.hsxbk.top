<?php

namespace addon\tk_cps\app\service\admin\order;

use addon\tk_cps\app\model\actitem\ActItem;

use addon\tk_cps\app\service\core\CloudService as CommonAuth;
use addon\tk_cps\app\service\core\CommonService;
use addon\tk_cps\app\service\core\ConfigService;
use core\base\BaseAdminService;
use core\exception\CommonException;


/**
 * 订单服务层
 */
class OrderService extends BaseAdminService
{
    public function __construct()
    {
        parent::__construct();
        $this->apiKey = (new ConfigService())->getApiKey();
        $this->mapiKey = (new ConfigService())->getMapiKey();
        $this->siteKey = (new ConfigService())->getSiteKey();
        $this->secret = (new ConfigService())->getSecret();
        $this->commonService = new CommonService();

    }
    //聚推客--订单列表
    public function jtkOrderList($data)
    {
        $data['apikey']=$this->apiKey;
//        $data['sid']=$this->siteKey;
        $info=$this->commonService->http_get('https://api.jutuike.com/union/orders',$data);
        if ($info['code'] == 1) {
            return $info['data'];
        }
        else {
            throw new CommonException($info['msg']);
        }
    }
    public function hidePhoneNumber($phone) {
        // 使用正则表达式匹配手机号码中间的数字
        $pattern = '/(\d{3})\d{4}(\d{4})/';
        $replacement = '$1****$2';
        $hidden_phone = preg_replace($pattern, $replacement, $phone);

        return $hidden_phone;
    }
    //蚂蚁星球--充值订单
    public function myxqRechargeOrder($data)
    {
        $data['apikey'] = $this->mapiKey;
        $info= $this->m_http_get('http://api-gw.haojingke.com/index.php/v2/api/open/rerechargeorder', $data);
        if ($info['status_code'] == 200) {
            foreach ($info['data']['list'] as $k=>$v){
                $info['data']['list'][$k]['rechargeno']=$this->hidePhoneNumber($v['rechargeno']);
            }
            return $info['data'];
        }
        else {
            throw new CommonException($info['message']);
        }
    }

    //蚂蚁星球--电影票订单
    public function myxqMovieOrder($data)
    {
        $data['apikey'] = $this->mapiKey;
        $info= $this->m_http_get('http://api-gw.haojingke.com/index.php/v2/api/open/movieorder', $data);
        if ($info['status_code'] == 200) {
            return $info['data'];
        }
        else {
            throw new CommonException($info['message']);
        }
    }

    //蚂蚁星球--点餐订单
    public function myxqDcOrder($data)
    {
        $data['apikey'] = $this->mapiKey;
        $info= $this->m_http_get('http://api-gw.haojingke.com/index.php/v2/api/open/dcorder', $data);
        if ($info['status_code'] == 200) {
            return $info['data'];
        }
        else {
            throw new CommonException($info['message']);
        }
    }

    //蚂蚁星球--点餐订单详情
    public function myxqDcOrderDetail($data)
    {
        $data['apikey'] = $this->mapiKey;
        $info= $this->m_http_get('http://api-gw.haojingke.com/index.php/v2/api/open/dcorderdetail', $data);
        if ($info['status_code'] == 200) {
            return $info['data'];
        }
        else {
            throw new CommonException($info['message']);
        }

    }

    //蚂蚁星球--周边订单
    public function myxqNearOrder($data)
    {
        $data['apikey'] = $this->mapiKey;
        $info= $this->m_http_get('http://api-gw.haojingke.com/index.php/v2/api/open/nearorder?', $data);
        if ($info['status_code'] == 200) {
            return $info['data'];
        }
        else {
            throw new CommonException($info['message']);
        }
    }

    //蚂蚁星球--自营商品订单
    public function myxqShopOrder($data)
    {
        $data['apikey'] = $this->mapiKey;
        $info= $this->m_http_get('http://api-gw.haojingke.com/index.php/v2/api/open/shoporder?', $data);
        if ($info['status_code'] == 200) {
            return $info['data'];
        }
        else {
            throw new CommonException($info['message']);
        }
    }

    //蚂蚁星球--其他订单
    public function myxqOtherOrder($data)
    {
        $data['apikey'] = $this->mapiKey;
        $info = $this->m_http_get('http://api-gw.haojingke.com/index.php/v2/api/index/pforder', $data);
        if ($info['status_code'] == 200) {
            return $info['data'];
        }
        else {
            throw new CommonException($info['message']);
        }
    }

    public function m_http_get($url, $data = null, $headers = false)
    {

        if (!empty($data)) {
            ksort($data);
            $strparam = '';
            foreach ($data as $key => $value) {
                if ($value && $key !== 'apikey') {
                    $strparam .= $key . '=' . $value . '&';
                }
            }
            $strparam = rtrim($strparam, '&');
            $strsign = 'secret=' . $this->secret . '&' . $strparam . '&secret=' . $this->secret;
            $sign = strtolower(md5($strsign));
            $url = $url . '?' . http_build_query($data) . '&sign=' . $sign;
        }
        $curl = curl_init();
        //设置header头
        if ($headers !== false) curl_setopt($curl, CURLOPT_HTTPHEADER, $headers);
        curl_setopt($curl, CURLOPT_URL, $url);

        curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, FALSE);
        curl_setopt($curl, CURLOPT_SSL_VERIFYHOST, FALSE);
        curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);
        $output = curl_exec($curl);
        curl_close($curl);
        return json_decode($output, true);
    }
}
