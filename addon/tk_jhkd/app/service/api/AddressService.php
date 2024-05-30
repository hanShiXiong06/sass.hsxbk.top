<?php
namespace addon\tk_jhkd\app\service\api;
use addon\tk_jhkd\app\model\MemberAddress;
use core\base\BaseApiService;

/**
 * 聚合快递通知列表服务层
 * Class TkjhkdNoticeService
 * @package app\service\admin\tkjhkd_notice
 */
class AddressService extends BaseApiService
{
    public function __construct()
    {
        parent::__construct();
        $this->MemberAddressModel = new MemberAddress();
    }

    public function getMemberAddressInfo($id)
    {
        $info = $this->MemberAddressModel->where(['id' => $id])
            ->findOrEmpty()->append(['province_name', 'city_name', 'district_name']);
        //适配框架地址信息获取省/市/区
        $info['full_address'] = str_replace($info['province_name'] . $info['city_name'] . $info['district_name'], "", $info['full_address']);;
        $info['address'] = $info['province_name'] . '-' . $info['city_name'] . '-' . $info['district_name'];
        // 删除指定键
        $info = array_diff_key($info->toArray(), array_flip(['province_name', 'city_name', 'district_name']));
        return $info;
    }
}