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

namespace app\service\api\member;

use app\model\member\MemberAddress;
use core\base\BaseApiService;


/**
 * 会员收货地址服务层
 * Class AddressService
 * @package app\service\admin\address
 */
class AddressService extends BaseApiService
{
    public function __construct()
    {
        parent::__construct();
        $this->model = new MemberAddress();
    }

    /**
     * 获取会员收货地址列表
     * @param array $where
     * @return array
     */
    public function getList(array $where = [])
    {
        $field = 'id,member_id,name,mobile,address,address_name,full_address,is_default,type';
        $order = 'is_default desc, id desc';

        $list = $this->model->where([ ['site_id', '=', $this->site_id],['member_id', '=', $this->member_id ] ])->withSearch(["type"], $where)->field($field)->order($order)->select()->toArray();
        return $list;
    }

    /**
     * 获取会员收货地址信息
     * @param int $id
     * @return array
     */
    public function getInfo(int $id)
    {
        $field = 'id,member_id,name,mobile,province_id,city_id,district_id,address,address_name,full_address,lng,lat,is_default,type';

        $info = $this->model->field($field)->where([ ['id', '=', $id], ['site_id', '=', $this->site_id], ['member_id', '=', $this->member_id ] ])->findOrEmpty()->toArray();
        return $info;
    }

    /**
     * 添加会员收货地址
     * @param array $data
     * @return mixed
     */
    public function add(array $data)
    {
        if ($data['is_default']) {
            $this->model->where([ ['member_id', '=', $this->member_id ], ['type', '=', $data['type']] ])->update(['is_default' => 0]);
        }
        $data['member_id'] = $this->member_id;
        $data['site_id'] = $this->site_id;
        $res = $this->model->create($data);
        return $res->id;
    }

    /**
     * 会员收货地址编辑
     * @param int $id
     * @param array $data
     * @return bool
     */
    public function edit(int $id, array $data)
    {
        if ($data['is_default']) {
            $this->model->where([ ['member_id', '=', $this->member_id ], ['type', '=', $data['type']] ])->update(['is_default' => 0]);
        }
        $this->model->where([ ['id', '=', $id], ['site_id', '=', $this->site_id], ['member_id', '=', $this->member_id ] ])->update($data);
        return true;
    }

    /**
     * 删除会员收货地址
     * @param int $id
     * @return bool
     */
    public function del(int $id)
    {
        $model = $this->model->where([ ['id', '=', $id], ['site_id', '=', $this->site_id], ['member_id', '=', $this->member_id ] ])->find();
        $res = $model->delete();
        return $res;
    }
    /*
     * addressParser
     * */
    public function addressParser($address){
        // 发送网络请求
        // 接口地址 : http://cloud.kuaidi100.com
        // methods : post
        /*
        * 名称	类型	是否必须	描述
          secret_key	string	true	用户授权key
          secret_code	string	true	接口编号
          secret_sign	string	true	加密签名：md5(secret_key+secret_secret)转大写
          content	string	true	例如：张三,13800138000,广东省深圳市南山区科技园十二路金蝶软件园

      * */

        // 将key 转大写
         $key = '22AB0B4E2EC0927439DD48F0FC761753';
        // 接口编号
        $params="";
        $params.='secret_key=3vyYxUHA8w3RQZ5BZ3'.'&';
        $params.='secret_code=0db4f037e2094f15a811261722e8a6e9'.'&';
        $params.='secret_sign='.$key.'&';
        $params.='content='.$address.'&';
        $params.=substr($params,0,-1);
        $ch=curl_init();
        curl_setopt($ch,CURLOPT_POST,1);
        curl_setopt($ch,CURLOPT_HEADER,0);
        curl_setopt($ch,CURLOPT_URL,'http://cloud.kuaidi100.com/api');
        curl_setopt($ch,CURLOPT_POSTFIELDS,$params);
        curl_setopt($ch,CURLOPT_RETURNTRANSFER,1);
        $result=curl_exec($ch);

        return  json_decode($result, true);;
    }

}
