<?php

namespace addon\tk_yht\app\service\admin;

use addon\shop\app\service\admin\goods\GoodsService;
use addon\tk_yht\app\service\core\CopyGoodsService as CoreCopyGoodsService;
use addon\tk_yht\app\service\core\FetchService;
use core\base\BaseAdminService;
use think\Exception;
use think\facade\Cache;
use think\facade\Log;

/**
 * 采集产品服务层
 */
class CopyGoodsService extends BaseAdminService
{
    public function __construct()
    {
        parent::__construct();
        $this->isLocal = '0';
    }

    //采集产品
    public function copyGoods($params)
    {
        $this->isLocal = $params['islocal'];
        $goodsUrl = $params['url'];
        //防止重复采集缓存操作
        if (!Cache::get($params['url'])) {
            $data = (new CoreCopyGoodsService())->copyGoods($goodsUrl);
            Cache::set($params['url'], $data, 60 * 150);
        }
        $data = Cache::get($params['url']);
        if (isset($data['status']) && $data['status'] == 200) {
            $data = $data['data'];
            $spec_data = [];
            if (count($data['items']) > 0) {
                //适配规格值
                foreach ($data['items'] as $k => $v) {
                    $spec_data[$k]['spec_name'] = $v['value'];
                    $vdata = [];
                    foreach ($v['detail'] as $vk => $vv) {
                        $vdata[$vk]['spec_value_name'] = $vv;
                    }
                    $spec_data[$k]['values'] = $vdata;
                }
                //适配规格项
                $goods_sku_data = [];
                foreach ($data['info']['value'] as $gk => $gv) {
                    $spec_value_data = $gv['detail'];
                    $newSpecName = [];
                    $sku_spec = [];
                    foreach ($spec_value_data as $sk => $sv) {
                        $newSpecName[] = $sv;
                        $sku_spec[$sk]['spec_value_name'] = $sv;
                    }
                    $goods_sku_data[$gk]['sku_image'] = $this->saveImage($gv['pic'], $this->isLocal);
                    $goods_sku_data[$gk]['sku_no'] = '';
                    $goods_sku_data[$gk]['sku_spec'] = $sku_spec;
                    $goods_sku_data[$gk]['spec_name'] = implode(" ", $newSpecName);
                    $goods_sku_data[$gk]['price'] = $gv['price'];
                    $goods_sku_data[$gk]['market_price'] = $gv['price'];
                    $goods_sku_data[$gk]['sale_price'] = $gv['price'];
                    $goods_sku_data[$gk]['cost_price'] = '';
                    $goods_sku_data[$gk]['stock'] = $params['stock'];
                    $goods_sku_data[$gk]['weight'] = $gv['weight'];
                    $goods_sku_data[$gk]['volume'] = $gv['volume'];
                    $goods_sku_data[$gk]['is_default'] = $gk == 0 ? 1 : 0;
                }
                $spec_type = 'multi';
            } else {
                $spec_type = 'single';
            }
            $info = [
                'goods_name' => $data['store_name'],
                'sub_title' => $data['store_info'],
                'goods_cover' => $this->saveImage($data['image'], $this->isLocal),
                'goods_image' => $this->saveImage($data['slider_image'], '1'),
                'goods_category' => $params['goods_category'],
                'goods_type' => $params['goods_type'],
                'goods_video' => $params['video_link']??"",
                'brand_id' => 0,
                'label_ids' => [],
                'service_ids' => [],
                'supplier_id' => 0,
                'status' => 0,
                'sort' => 0,
                // 规格类型，single：单规格，multi：多规格
                'spec_type' => $spec_type,
                //单规格数据
                'price' => $data['price'] ?? '',
                'market_price' => $data['ot_price'] ?? '',
                'cost_price' => $data['cost'] ?? '',
                'weight' => 0,
                'volume' => 0,
                'stock' => $params['stock'],
                'sku_no' => '',
                'unit' => $data['unit_name'] ?? '',
                'virtual_sale_num' => $data['ficti'] ?? 0,
                //多规格数据
                'goods_spec_format' => $spec_data,
                'goods_sku_data' => $goods_sku_data,
                //配送设置
                'delivery_type' => explode(',', 'express'),
                'is_free_shipping' => 1,
                'fee_type' => 'template',
                'delivery_money' => '0',
                'delivery_template_id' => 0,
                //商品详情
            ];
            if (isset($data['description_images'])) {
                $info['goods_desc'] = $this->goodsDetail($data['description'], $data['description_images'] ?? '',$this->isLocal);
            } else {
                $info['goods_desc'] = '默认信息';
            }
            $info['attr_id']='';
            $info['attr_format']='';
            $info['member_discount']=0;
            $info['poster_id']=0;
            $info['is_limit']=0;
            $info['limit_type']=1;
            $info['max_buy']=0;
            $info['min_buy']=0;
            $info['is_gift']=0;
            return (new GoodsService())->add($info);
        } else {
            throw new Exception(isset($data['status']) ? $data['msg'] : '采集失败:请使用正确的商品ID或店铺ID');
        }
    }

    //保存图片为服务器配置配置
    public function saveImage($imgUrl, $islocal = '')
    {
        //增加图片,检测
        if (is_array($imgUrl)) {
            $newUrl = [];
            foreach ($imgUrl as $k => $v) {
                $isAli = $this->checkAli($v);
                if ($isAli == true||$islocal=='0') {
                    $newUrl[] = $v;
                }else{
                    $v = $this->checkUrl($v);
                    $url = (new FetchService())->image($v, $this->site_id, 'yht_copy/' . $this->site_id . '/' . date('Y') . date('m') . date('d'));
                    $newUrl[] = $url['url'];
                }
            }
            return implode(",", $newUrl);
        } else {
            if ($imgUrl == '') {
                return '';
            }
            $isAli = $this->checkAli($imgUrl);
            if ($isAli == true||$islocal=='0') {
                return $imgUrl;
            }
            $imgUrl = $this->checkUrl($imgUrl);
            $imgUrl = (new FetchService())->image($imgUrl, $this->site_id, 'yht_copy/' . $this->site_id . '/' . date('Y') . date('m') . date('d'));
            return $imgUrl['url'];
        }
    }

    //优化阿里链接
    public function checkAli($url)
    {
        if (strpos($url, 'alicdn.com') !== false) {
            return false;
        } else {
            return false;
        }
    }

    //淘宝部分图片不带http时候的图片美化
    public function checkUrl($url)
    {
        if (strpos($url, 'https') !== false || strpos($url, 'http') !== false) {
            return $url;
        } else {
            return 'https:' . $url;
        }
    }

    //商品详情图片替换
    public function goodsDetail($content, $imageAttr,$islocal='')
    {

        foreach ($imageAttr as $k => $v) {
            $url = $this->saveImage($v,$islocal);
            //适配云oss
            if (strpos($url, 'http') === false) {
                $url = (new CommonConfigService())->getUrl() . '/' . $url;
            }
            $content = str_replace($v, $url, $content);
        }
        return $content;
    }

    //采集记录
    public function copyLog()
    {

    }
}
