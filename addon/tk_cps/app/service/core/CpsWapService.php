<?php

namespace addon\tk_cps\app\service\core;

use core\base\BaseApiService;
use think\Exception;
use addon\tk_cps\app\model\act\Act;
use addon\tk_cps\app\model\actitem\ActItem;

class CpsWapService extends BaseApiService
{
    public function __construct()
    {
        parent::__construct();
        $this->apiKey = (new ConfigService())->getApiKey();
        $this->mapiKey = (new ConfigService())->getMapiKey();
        $this->siteKey = (new ConfigService())->getSiteKey();
        $this->pubId = (new ConfigService())->getPubID();
        $this->actItemModel = (new ActItem());
    }
    public function getPage(array $where = [])
    {
        $field = 'id,act_id,act_name,type,img,icon,poster,commission_rate,introduce,attribution_explain,settlement_time,start_date,end_date,create_time';
        $order = 'create_time desc';
        $search_model = (new Act())->withSearch(["id", "act_id", "act_name", "type", "desc", "img", "icon", "poster", "commission_rate", "introduce", "attribution_explain", "settlement_time", "start_date", "end_date", "create_time"], $where)->field($field)->order($order);
        $list = $this->pageQuery($search_model);
        return $list;
    }
    public function getCpsInfo($type, $actid)
    {
        if($type==11){
            return $this->changeWeappAct($actid);
        }
        //快递100
        if($type==100&&$actid==100){
            $info= [
                'wap_url'=>'',
                'h5'=>'',
                'act_name'=>'快递100',
                'weapp'=>[
                    'appid'=>'wxf772255062165d94',
                    'pagepath'=>'',
                ]
            ];
            return $info;
        }
        $info = $this->actItemModel->where(['site_id' => $this->site_id, 'type' => $type, 'act_id' => $actid])->findOrEmpty();
        if ($info->isEmpty()) {
            (new \addon\tk_cps\app\service\admin\CpsService())->asyncActItem($actid, $type);
            $info = $this->actItemModel->where(['site_id' => $this->site_id, 'type' => $type, 'act_id' => $actid])->findOrEmpty();
        }
        $info = $info->toArray();
        $info['weapp'] = json_decode($info['weapp'], true);
        $info['aliapp'] = json_decode($info['aliapp'], true);
        //蚂蚁星球跟单参数初始化
        if ($info['type'] == 1) {
            $info['h5'] = str_replace('uid=' . $this->siteKey, $this->siteKey . $this->member_id, $info['h5']);
            $info['weapp']['pagepath'] = str_replace('uid=' . $this->siteKey, $this->siteKey . $this->member_id, $info['weapp']['pagepath']);
        }
        $info['wap_url'] = (new CpsService())->wapDomain() . '/addon/tk_cps/pages/index?type=' . $type . '&act_id=' . $actid;
        return $info;
    }
public function changeWeappAct($actid)
{
    $actInfo=$this->getCpsInfo(0,$actid);
    if($actid==152){
       $info=[
           'wap_url'=>'',
           'h5'=>$actInfo['h5'],
           'act_name'=>'抖音团购',
           'path'=>'plugin://meishi/douyin?pub_id='.$this->pubId
       ];
    }
    if($actid==56){
        $info=[
            'wap_url'=>'',
            'h5'=>$actInfo['h5'],
            'act_name'=>'抖音好物',
            'path'=>'plugin://meishi/tiktok?pub_id='.$this->pubId
        ];
    }
    if($actid==114){
        $info=[
            'wap_url'=>'',
            'h5'=>$actInfo['h5'],
            'act_name'=>'电商购物',
            'path'=>'plugin://meishi/dianshang?pub_id='.$this->pubId.'&source=jd,taobao,douyin,pdd,vip'
        ];
    }
    if($actid==7){
        $info=[
            'wap_url'=>'',
            'h5'=>$actInfo['h5'],
            'act_name'=>'美团外卖',
            'path'=>'plugin://meishi/shop?pub_id='.$this->pubId.'&type=meituan&sid='.$this->siteKey.$this->member_id
        ];
    }
    if($actid==9){
        $info=[
            'wap_url'=>'',
            'h5'=>$actInfo['h5'],
            'act_name'=>'美团到店',
            'path'=>'plugin://meishi/home?pub_id='.$this->pubId.'&sid'.$this->siteKey.$this->member_id
        ];
    }
    if($actid==59){
        $info=[
            'wap_url'=>'',
            'h5'=>$actInfo['h5'],
            'act_name'=>'饿了么外卖',
            'path'=>'plugin://meishi/shop?pub_id='.$this->pubId.'&type=ele&sid='.$this->siteKey.$this->member_id
        ];
    }
    if($actid==42){
        $info=[
            'wap_url'=>'',
            'h5'=>$actInfo['h5'],
            'act_name'=>'打车出行',
            'path'=>'plugin://meishi/shop?pub_id='.$this->pubId.'&type=didi&sid='.$this->siteKey.$this->member_id
        ];
    }
    if($actid==94){
        $info=[
            'wap_url'=>'',
            'h5'=>$actInfo['h5'],
            'act_name'=>'酒店住宿',
            'path'=>'plugin://meishi/shop?pub_id='.$this->pubId.'&type=hotel&sid='.$this->siteKey.$this->member_id
        ];
    }
    if($actid==117){
        $info=[
            'wap_url'=>'',
            'h5'=>'',
            'act_name'=>'美团券包',
            'path'=>'plugin://meishi/coupon?pub_id='.$this->pubId
        ];
    }
    if($actid==57){
        $info=[
            'wap_url'=>'',
            'h5'=>$actInfo['h5'],
            'act_name'=>'点餐首页',
            'path'=>'plugin://jtkDc/index?pub_id='.$this->pubId.'&sid='.$this->siteKey.$this->member_id
        ];
    }
    if($actid==16){
        $info=[
            'wap_url'=>'',
            'h5'=>$actInfo['h5'],
            'act_name'=>'肯德基点餐',
            'path'=>'plugin://jtkDc/qzkfcindex?pub_id='.$this->pubId.'&sid='.$this->siteKey.$this->member_id
        ];
    }
    if($actid==26){
        $info=[
            'wap_url'=>'',
            'h5'=>$actInfo['h5'],
            'act_name'=>'麦当劳点餐',
            'path'=>'plugin://jtkDc/mcDonaldindex?pub_id='.$this->pubId.'&sid='.$this->siteKey.$this->member_id
        ];
    }
    if($actid==34){
        $info=[
            'wap_url'=>'',
            'h5'=>$actInfo['h5'],
            'act_name'=>'星巴克点餐',
            'path'=>'plugin://jtkDc/xbkindex?pub_id='.$this->pubId.'&sid='.$this->siteKey.$this->member_id
        ];
    }
    if($actid==33){
        $info=[
            'wap_url'=>'',
            'h5'=>$actInfo['h5'],
            'act_name'=>'瑞幸点餐',
            'path'=>'plugin://jtkDc/rxindex?pub_id='.$this->pubId.'&sid='.$this->siteKey.$this->member_id
        ];
    }
    if($actid==32){
        $info=[
            'wap_url'=>'',
            'h5'=>$actInfo['h5'],
            'act_name'=>'奈雪点餐',
            'path'=>'plugin://jtkDc/nxindex?pub_id='.$this->pubId.'&sid='.$this->siteKey.$this->member_id
        ];
    }
    if($actid==64){
        $info=[
            'wap_url'=>'',
            'h5'=>$actInfo['h5'],
            'act_name'=>'必胜客点餐',
            'path'=>'plugin://jtkDc/bskindex?pub_id='.$this->pubId.'&sid='.$this->siteKey.$this->member_id
        ];
    }
    if($actid==136){
        $info=[
            'wap_url'=>'',
            'h5'=>$actInfo['h5'],
            'act_name'=>'库迪点餐',
            'path'=>'plugin://jtkDc/kudiindex?pub_id='.$this->pubId.'&sid='.$this->siteKey.$this->member_id
        ];
    }
    if($actid==76){
        $info=[
            'wap_url'=>'',
            'h5'=>$actInfo['h5'],
            'act_name'=>'热门电影',
            'path'=>'plugin-private://wx89752980e795bfde/pages/index/index?pub_id='.$this->pubId.'&sid='.$this->siteKey.$this->member_id
        ];
    }
    if($actid==105){
        $info=[
            'wap_url'=>'',
            'h5'=>$actInfo['h5'],
            'act_name'=>'景区门票',
            'path'=>'plugin://menpiao-plugin/home?pub_id='.$this->pubId.'&sid='.$this->siteKey.$this->member_id
        ];
    }
    if($actid==131){
        $info=[
            'wap_url'=>'',
            'h5'=>$actInfo['h5'],
            'act_name'=>'住宿预订',
            'path'=>'plugin://hotel-plugin/index?pub_id='.$this->pubId.'&sid='.$this->siteKey.$this->member_id
        ];
    }
    return $info;
}
    public function http_get($url, $data = null, $headers = false)
    {
        if (!empty($data)) {
            $url = $url . '?' . http_build_query($data);
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

    public function http_post($url, $data = null, $headers = false)
    {
        $curl = curl_init();
        //设置header头
        if ($headers !== false) curl_setopt($curl, CURLOPT_HTTPHEADER, $headers);
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
}