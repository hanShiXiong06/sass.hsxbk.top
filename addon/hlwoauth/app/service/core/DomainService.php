<?php
// +----------------------------------------------------------------------
// | 企业快速开发管理系统  niucloud-dev
// +----------------------------------------------------------------------
// | 公司网址：https://www.gshlkj.com
// +----------------------------------------------------------------------
// | 互连创客 版权所有 2024/10/8 10:51
// +----------------------------------------------------------------------
// | Author: zhuyl@gshlkj.com
// +----------------------------------------------------------------------


namespace addon\hlwoauth\app\service\core;
use core\base\BaseCoreService;
use addon\hlwoauth\app\model\hlwoauth\Domain;
use app\service\core\wechat\CoreWechatServeService;
class DomainService extends BaseCoreService
{
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * @param $params
     * @return void
     * @throws \think\db\exception\DataNotFoundException
     * @throws \think\db\exception\DbException
     * @throws \think\db\exception\ModelNotFoundException
     * Author: zhuyl@gshlkj.com
     * create by 2024/10/8 12:04
     */
    public function wxAuth($params){
        try{
            $domain = new Domain();
            $domainData=$domain->where(['site_id'=>$params['site_id'],'id'=>$params['id']])->find();
            if(empty($domainData) || empty($domainData['status'])){
                throw new \Exception('域名授权不存在或已停用');
            }
            if(!empty($params['code'])){
                $redirectUri = $domainData['domain'];
                if(!empty($params['state'])){
                    $stateRedirectUri=cache($params['state']);
                    if($stateRedirectUri){
                        $redirectUri=$stateRedirectUri;
                    }
                }
                $domainUrl = parse_url($redirectUri);
                $paramsData=[
                    'code'=>$params['code'],
                    'state'=>$params['state']
                ];
                $paramsString=http_build_query($paramsData);
                if(empty($domainUrl['query'])){
                    $url=$redirectUri.'?'.$paramsString;
                }else{
                    $url=$redirectUri.'&'.$paramsString;
                }
                $domainData->number += 1;
                $domainData->save();
            }else{
                $scope=$domainData['scope']??'snsapi_base';
                if(!empty($params['scope']) && in_array(trim($params['scope']),['snsapi_base','snsapi_userinfo'])){
                    $scope=trim($params['scope']);
                }
                $url=(new CoreWechatServeService())->authorization($params['site_id'],$domainData['auth_url'],$scope);
                if(!empty($params['redirect_uri'])){
                    parse_str(parse_url($url, PHP_URL_QUERY), $result);
                    $state= $result['state'] ?? '';
                    if($state){
                        cache($state,$params['redirect_uri'],60);
                    }
                }
            }
        }catch (\Exception $e){
            throw new \Exception($e->getMessage());
        }
        header("Location: $url");
        exit;
    }
}