<?php
// +----------------------------------------------------------------------
// | Author: TK
// +----------------------------------------------------------------------

namespace addon\goods_export\app\service\admin;

use addon\phone_shop\app\model\goods\Goods;
use addon\phone_shop\app\model\goods\GoodsSku;
use addon\phone_shop\app\model\goods\GoodsSpec;
use addon\goods_export\app\job\goods\ImportGoods;
use app\service\core\site\CoreSiteService;
use app\service\core\sys\CoreConfigService;
use core\base\BaseAdminService;
use core\exception\AdminException;
use core\exception\CommonException;
use PhpOffice\PhpSpreadsheet\IOFactory;
use addon\goods_export\app\model\spdrlist\SpdrList;
use think\facade\Cache;
use think\facade\Db;
use think\facade\Log;
use addon\phone_shop_price\app\model\recycle_category\RecycleCategory;

/**
 * 商品服务层
 * Class GoodsService
 * @package addon\phone_shop\app\service\admin\goods
 */
class GoodsService extends BaseAdminService
{
    public function __construct()
    {
        parent::__construct();
        $this->model = new Goods();
    }

    public function getDomain()
    {
        $info = (new CoreConfigService())->getConfig(0, 'SPDR_DOMAIN');
        return $info['value']['domain'];
    }

    /**
     * 获取或创建分类ID
     * @param string $categoryName 分类名称
     * @param int $level 分类级别
     * @param int $pid 父级ID
     * @param string $parentName 父级名称(用于生成full_name)
     * @return int 分类ID
     */
    protected function getCategoryId($categoryName, $level = 1, $pid = 0, $parentName = '')
    {
        if (empty($categoryName)) return 0;
        
        $categoryModel = new \addon\phone_shop\app\model\goods\Category();
        $where = [
            ['category_name', '=', $categoryName],
            ['level', '=', $level],
           //  ['site_id', '=', $this->site_id]
        ];
        
        if ($level == 2) {
            $where[] = ['pid', '=', $pid];
        }
        
        $category = $categoryModel->where($where)->find();
        
        if (!$category) {
            $data = [
                'site_id' => $this->site_id,
                'category_name' => $categoryName,
                'level' => $level,
                'pid' => $pid,
                'memory_group' => 0,
                'create_time' => time()
            ];
            
            if ($level == 2) {
                $data['category_full_name'] = $parentName . '/' . $categoryName;
            }
            
            $category = $categoryModel->create($data);
        }
        
        return [$category['category_id'], $category['memory_group']];
    }

    /**
     * 获取或创建品牌ID
     * @param string $brandName 品牌名称
     * @return int 品牌ID
     */
    protected function getBrandId($brandName)
    {
        if (empty($brandName)) return 0;
        
        $brandModel = new \addon\phone_shop\app\model\goods\Brand();
        $brand = $brandModel->where([
            ['brand_name', '=', $brandName],
           //  ['site_id', '=', $this->site_id]
        ])->find();
        
        if (!$brand) {
            $brand = $brandModel->create([
                'site_id' => $this->site_id,
                'brand_name' => $brandName,
                'desc' => $brandName,
                'create_time' => time()
            ]);
        }
        
        return $brand['brand_id'];
    }

    /**
     * 获取或创建内存规格ID
     * @param string $specName 规格名称
     * @return string 规格ID
     */
    protected function getMemoryId($specName)
    {
        if (empty($specName)) return '';
        // specName  如果 末尾是 B 通过正则表达式 去掉 
        $specName = preg_replace('/B$/', '', $specName);

        $memoryModel = new \addon\phone_shop\app\model\goods\Memory();
        $memory = $memoryModel->where([
            ['spec_name', '=', $specName],
            // ['site_id', '=', $this->site_id]
        ])->find();
        
        if (!$memory) {
            $memory = $memoryModel->create([
                'site_id' => $this->site_id,
                'spec_name' => $specName,
                'create_time' => time()
            ]);
        }
        
        return $memory['spec_id'];
    }

    /**
     * 获取或创建标签ID列表
     * @param string $tagString 标签字符串(逗号分隔)
     * @return array 标签ID数组
     */
    protected function getLabelIds($tagString)
    {
        if (empty($tagString)) return [];
        
        $labelModel = new \addon\phone_shop\app\model\goods\Label();
        $labelIds = [];
        $tags = explode(',', $tagString);
        
        foreach ($tags as $tag) {
            $tag = trim($tag);
            if (empty($tag)) continue;
            
            $label = $labelModel->where([
                ['label_name', '=', $tag],
              //   ['site_id', '=', $this->site_id]
            ])->find();
            
            if (!$label) {
                $label = $labelModel->create([
                    'site_id' => $this->site_id,
                    'label_name' => $tag,
                    'create_time' => time()
                ]);
            }
            
            $labelIds[] = (string)$label['label_id'];
        }
        
        return $labelIds;
    }

    /**
     * 计算商品价格
     * @param float $marketPrice 市场价格
     * @return array [售价, 加价后的价格]
     */
    protected function calculatePrice($marketPrice)
    {
        $marketPrice = floatval($marketPrice);
        $price = $marketPrice;
        
        if ($marketPrice >= 0 && $marketPrice < 1000) {
            $price = $marketPrice + 100;
        } else if ($marketPrice >= 1000 && $marketPrice < 5000) {
            $price = $marketPrice + 200;
        } else {
            $price = $marketPrice + 300;
        }
        
        return [
            'market_price' => $marketPrice,
            'price' => $price
        ];
    }

    /**
     * 导入商品数据
     * @param array $data
     * @return array
     * @throws CommonException
     */
    public function import($data)
    {
        (new CoreConfigService())->setConfig(0, 'SPDR_DOMAIN', ['domain' => $this->getUrl()]);
        $filePath = $data['file_url'];
        $extension = pathinfo($filePath, PATHINFO_EXTENSION);
        if ($extension !== 'xlsx') {
            unlink($filePath);
            throw new CommonException("暂只支持xlsx格式文件");
        }
     
        $spreadsheet = IOFactory::load($filePath);
        $sheetData = $spreadsheet->getActiveSheet()->toArray(null, true, true, true);
        $headers = array_shift($sheetData);
        $cleanHeaders = array_map(function ($header) {
            return strtolower(preg_replace('/\s+/', '', $header));
        }, $headers);
        $finalData = array_map(function ($row) use ($cleanHeaders) {
            return array_combine($cleanHeaders, $row);
        }, $sheetData);
        if (count($finalData) > $data['num']) {
            unlink($filePath);
            throw new CommonException("单次最多导入" . $data['num'] . "条数据，请分次导入");
        }

        $spec_type = 'single';
        $spec_data = [];
        $goods_sku_data = [];
        $successCount = 0;
        $failCount = 0;
        $spdrModel = new SpdrList();
        $spdrInfo = $spdrModel->create([
            'site_id' => $this->site_id,
            'flie' => $data['file_url'],
        ]);

        foreach ($finalData as $key => $value) {
            if (!isset($value['商品名称'])) {
                $failCount++;
                continue;
            }

            // 处理分类
            $goods_category = [];
            if (isset($value['一级分类']) && !empty($value['一级分类'])) {
                $level1Id = $this->getCategoryId($value['一级分类'], 1)[0];
                $goods_category[] = (string)$level1Id;

                if (isset($value['二级分类']) && !empty($value['二级分类'])) {
                    $level2Id = $this->getCategoryId($value['二级分类'], 2, $level1Id, $value['一级分类'])[0];
                    $goods_category[] = (string)$level2Id;
                    $memory_group = $this->getCategoryId($value['二级分类'], 2, $level1Id, $value['一级分类'])[1];
                }
            }

            // 处理品牌
            $brand_id = $this->getBrandId($value['商品等级'] ?? '');

            // 处理内存规格
            $memory_ids = $this->getMemoryId($value['内存规格'] ?? '');

            // 处理标签
            $label_ids = $this->getLabelIds($value['标签'] ?? '');

            // 处理价格
            $prices = $this->calculatePrice($value['售价'] ?? 0);

            // 组装商品数据
            $info = [
                'goods_no' => $successCount,
                'goods_name' => $value['商品名称'] ?? '',
                'sub_title' => $value['副标题'] ?? "",
                'goods_image' => $this->joinUrl($value['轮播图'],'.jpg') ?? '',
                'goods_desc' => $this->joinUrl($value['视频'],'.mp4') ?? '',
                'goods_category' => json_encode($goods_category),
                'goods_type' => 'real',
                'brand_id' => $brand_id,
                'label_ids' => $label_ids,
                'service_ids' => [],
                'supplier_id' => 0,
                'status' => $data['status'],
                'sort' => 0,
                'memory_ids' => $memory_ids,
                'memory_group' => $memory_group,
                "member_discount" => "fixed_price",
                'spec_type' => $spec_type,
                'sale_price' => $prices['market_price'],
                'price' => $prices['price'],
                'market_price' => $prices['market_price'],
                'cost_price' => $value['成本价'] ?? '',
                'weight' => 0,
                'volume' => 0,
                'stock' => 1,
                'sku_no' => $value['sn'] ?? '',
                'unit' => $value['单位'] ?? '',
                'virtual_sale_num' => 0,
                'goods_spec_format' => $spec_data,
                'goods_sku_data' => $goods_sku_data,
                'delivery_type' => json_decode($value['配送类型'] ?? '[]', true),
                'is_free_shipping' => 1,
                'fee_type' => 'template',
                'delivery_money' => '0',
                'delivery_template_id' => 0,
            ];

            $info['attr_id'] = '';
            $info['attr_format'] = '';
            $info['poster_id'] = 0;
            $successCount++;
            ImportGoods::dispatch(['site_id' => $this->site_id, 'info' => $info, 'islocal' => $data['islocal']]);
        }

        $spdrInfo->num = count($finalData);
        $spdrInfo->success_num = $successCount;
        $spdrInfo->fail_num = $failCount;
        $spdrInfo->save();
        unlink($filePath);
        
        return $finalData;
    }

    public function asyncGoods($site_id, $info, $islocal = '0')
    {
        try {
            //处理主图和轮播图
            // $info['goods_cover'] = $this->saveImage(str_replace("\t", "", $info['goods_cover']), $islocal, $site_id);
            // $info['goods_image'] = $this->saveImage(str_replace("\t", "", explode(",", $info['goods_image'])), $islocal, $site_id);
            $arr = $this->getImageArr($info['goods_desc']);
            $info['goods_desc'] = $info['goods_desc'];
            $this->addGoods($site_id, $info);
        } catch (\Exception $e) {
            Log::write('--导入商品失败--' . date('Y-m-d H:i:s', time()));
            Log::write($e->getMessage());
        }
    }

    /**
     * @Notes:验证权限
     * @Interface checkShop
     * @return array
     * @author: TK
     * @Time: 2024/6/21   下午6:31
     */
    public function checkShop()
    {
        $addons = (new CoreSiteService())->getAddonKeysBySiteId($this->site_id);
        return $addons;
    }

    // 写一个包装的方法 
    // 参数 xxxx  得到的数据是 :  https://vip.123pan.cn/1832133965/tiantai/{$xxx}.png 做一个字符的拼接就好了
  public function joinUrl($url, $last_name)
{
    // 检查 $url 中是否包含逗号
    if (strpos($url, ',') === false) {
        // 检查单个 URL 是否包含 .jpg 或 .png
        if (strpos($url, '.jpg') !== false || strpos($url, '.png') !== false) {
            // 直接返回不添加 $last_name
            return 'https://vip.123pan.cn/1832133965/tiantai/' . $url;
        } else {
            // 返回拼接后的 URL
            return 'https://vip.123pan.cn/1832133965/tiantai/' . $url . $last_name;
        }
    } else {
        // 如果包含逗号，将 $url 通过逗号分割为数组
        $urls = explode(',', $url);
        // 初始化一个空字符串用于存储处理后的 URL
        $joinedUrls = '';
        // 循环处理每个 URL
        foreach ($urls as $singleUrl) {
            $trimmedUrl = trim($singleUrl);
            // 检查每个 URL 是否包含 .jpg 或 .png
            if (strpos($trimmedUrl, '.jpg') !== false || strpos($trimmedUrl, '.png') !== false) {
                // 直接拼接不添加 $last_name
                $joinedUrls .= 'https://vip.123pan.cn/1832133965/tiantai/' . $trimmedUrl . ', ';
            } else {
                // 添加 $last_name
                $joinedUrls .= 'https://vip.123pan.cn/1832133965/tiantai/' . $trimmedUrl . $last_name . ', ';
            }
        }
        // 移除最后一个逗号并返回结果
        return rtrim($joinedUrls, ', ');
    }
}



    /**
     * @Notes:获取商品列表并导出
     * @Interface getPage
     * @param array $where
     * @return array
     * @throws \PhpOffice\PhpSpreadsheet\Writer\Exception
     * @throws \think\db\exception\DbException
     * @author: TK
     * @Time: 2024/6/21   下午9:35
     */
    public function getPage(array $where = [])
    {
        $field = 'goods_id,site_id,goods_name,goods_type,goods_cover,stock,sale_num,status,sort,create_time,member_discount,sub_title,goods_image,unit,goods_desc,delivery_type,virtual_sale_num';
        $order = 'sort asc, create_time desc';
        $sku_where = [
            ['goodsSku.is_default', '=', 1],
        ];

        if (!empty($where['start_price']) && !empty($where['end_price'])) {
            $money = [$where['start_price'], $where['end_price']];
            sort($money);
            $sku_where[] = ['goodsSku.price', 'between', $money];
        } else if (!empty($where['start_price'])) {
            $sku_where[] = ['goodsSku.price', '>=', $where['start_price']];
        } else if (!empty($where['end_price'])) {
            $sku_where[] = ['goodsSku.price', '<=', $where['end_price']];
        }
        if (!empty($where['order'])) {
            $order = $where['order'] . ' ' . $where['sort'];
        }

        $search_model = $this->model->where([['goods.site_id', '=', $this->site_id]])->withSearch(["goods_name", "goods_type", "brand_id", "goods_category", "label_ids", 'service_ids', "sale_num", "status"], $where)
            ->field($field)
            ->withJoin([
                'goodsSku' => ['sku_id', 'goods_id', 'price', 'member_price', 'market_price', 'cost_price']
            ])->where($sku_where)->order($order)->append(['goods_type_name', 'goods_edit_path', 'goods_cover_thumb_small']);
        $list = $this->pageQuery($search_model);

        foreach ($list['data'] as $k => $v) {
            $urlsArray = explode(',', $v['goods_image']);
            foreach ($urlsArray as $key => $url) {
                $urlsArray[$key] = ['pic_url' => $url];
            }
            $list['data'][$k]['goods_image'] = json_encode($urlsArray);
            $list['data'][$k]['spec_type'] = '0';
            $list['data'][$k]['delivery_type'] = json_encode($v['delivery_type']);
            $list['data'][$k]['price'] = $v['goodsSku']['price'];
            $list['data'][$k]['market_price'] = $v['goodsSku']['market_price'];
            $list['data'][$k]['cost_price'] = $v['goodsSku']['cost_price'];
            $list['data'][$k]['keyword'] = '';
            $list['data'][$k]['video'] = '';
            $list['data'][$k]['sku_spec'] = '';
            $list['data'][$k]['sku_list'] = '';
        }
        $this->export($list['data']);
        return $list;
    }

    public function getPageHsx(array $where = [])
    {
        $field = 'goods_id,goods_category,site_id,goods_name,status,sort,create_time,sub_title';
        $order = 'sort asc, create_time desc';
        $sku_where = [
            ['goodsSku.is_default', '=', 1],
        ];

        if (!empty($where['start_price']) && !empty($where['end_price'])) {
            $money = [$where['start_price'], $where['end_price']];
            sort($money);
            $sku_where[] = ['goodsSku.price', 'between', $money];
        } else if (!empty($where['start_price'])) {
            $sku_where[] = ['goodsSku.price', '>=', $where['start_price']];
        } else if (!empty($where['end_price'])) {
            $sku_where[] = ['goodsSku.price', '<=', $where['end_price']];
        }
        if (!empty($where['order'])) {
            $order = $where['order'] . ' ' . $where['sort'];
        }

        $search_model = $this->model->where([['goods.site_id', '=', $this->site_id]])->withSearch(["goods_name", "goods_type", "brand_id", "goods_category", "label_ids", 'service_ids', "sale_num", "status"], $where)
            ->field($field)
            ->withJoin([
                'goodsSku' => ['sku_id', 'goods_id', 'price', 'member_price', 'market_price','sku_no', 'cost_price']
            ])->where($sku_where)->order($order)->append(['goods_type_name', 'goods_edit_path', 'goods_cover_thumb_small']);
        $list = $this->pageQuery($search_model);

        foreach ($list['data'] as $k => $v) {

            // if (isset($v['goodsSku']['member_price'])) {
            //     $member_price = json_decode($v['goodsSku']['member_price'], true);
            //     $list['data'][$k]['price'] = $member_price[0]['price'];
            // }else{
            //     $list['data'][$k]['price'] = $v['goodsSku']['price'];
            // }

           
            $list['data'][$k]['sku_no'] = $v['goodsSku']['sku_no'];
//            if (is_array( $list['data'][$k]['goods_category'] )) {
//                $goods_category =  implode(",", $list['data'][$k]['goods_category']);
//            }

            // 将数组元素赋值给变量
            if (isset($list['data'][$k]['goods_category'][0])) {
                $goods_category1 = $list['data'][$k]['goods_category'][0];
            }else{
                $goods_category1  = '';
            }
            if (isset($list['data'][$k]['goods_category'][1])) {
                $goods_category2 = $list['data'][$k]['goods_category'][1];
            }else{
                $goods_category2  = '';
            }

            // 将变量赋值到列表
            $list['data'][$k]['goods_category1'] = $goods_category1;
            $list['data'][$k]['goods_category2'] = $goods_category2;

            // 数组转字符串  $list['data'][$k]['goods_category']
            // 判断 isset($list['data'][$k]['member_price'] ) 里面的值是一个 json 字符串 转为数组 并 赋值给 price
          

//            $list['data'][$k]['cost_price'] = $v['goodsSku']['cost_price'];
        }

        $this->export_hsx($list['data']);
        return $list;
    }

    /**
     * @Notes:非队列形式直接导出封装
     * @Interface export
     * @param $data
     * @throws \PhpOffice\PhpSpreadsheet\Writer\Exception
     * @author: TK
     * @Time: 2024/6/21   下午9:34
     */
    public function export($data)
    {

        $data_column = [
            'goods_id' => [
                'name' => '商品ID',
            ],
            'goods_name' => [
                'name' => '商品名称'
            ],
            'sub_title' => [
                'name' => '副标题'
            ],
            'keyword' => [
                'name' => '关键字'
            ],
            'market_price' => [
                'name' => '原价'
            ],
            'cost_price' => [
                'name' => '成本价'
            ],
            'goods_desc' => [
                'name' => '商品详情'
            ],
            'goods_cover' => [
                'name' => '商品缩略图'
            ],
            'goods_image' => [
                'name' => '商品轮播图'
            ],
            'video' => [
                'name' => '商品视频'
            ],
            'unit' => [
                'name' => '单位'
            ],
            'price' => [
                'name' => '售价'
            ],
            'spec_type' => [
                'name' => '是否使用规格'
            ],
            'sku_spec' => [
                'name' => '规格组'
            ],
            'sku_list' => [
                'name' => '规格详情'
            ],
            'stock' => [
                'name' => '商品库存'
            ],
            'virtual_sale_num' => [
                'name' => '虚拟销量'
            ],
            'goods_type' => [
                'name' => '商品类型'
            ],
            'delivery_type' => [
                'name' => '配送类型'
            ],
        ];

        (new CoreExportService())->export($this->site_id, 'spdr_export_goods', $data_column, $data);
    }



    /**
     * @Notes:添加产品
     * @Interface addGoods
     * @param $site_id
     * @param array $data
     * @return mixed
     * @author: TK
     * @Time: 2024/6/22   下午6:19
     */
    public function addGoods($site_id, array $data)
    {
        try {
            Db::startTrans();
            $goods_sku_model = new GoodsSku();
            $goods_spec_model = new GoodsSpec();

            // 商品封面
            if (!empty($data['goods_image'])) $data['goods_cover'] = explode(',', $data['goods_image'])[0];
            // 获取商品最后添加的商品id getLastGoodsId
           $goods_id =  $this->model->getLastGoodsId();
           if (!empty($data['goods_desc'])) {
                // Check if the string does not start with '<'
                if (substr($data['goods_desc'], 0, 1) !== '<') {
                    $data['goods_desc'] = "<p><video src=\"{$data['goods_desc']}\"></video></p>";
                }
                // Else case can be handled here if needed
            }

            $goods_data = [
                'goods_no'=>  $goods_id+1,
                'site_id' => $site_id,
                'goods_name' => $data['goods_name'],
                'sub_title' => $data['sub_title'],
                'goods_type' => $data['goods_type'],
                'goods_cover' => $data['goods_cover'],
                'goods_image' => $data['goods_image'],
                'goods_category' => $data['goods_category'],
                'goods_desc' => $data['goods_desc'],
                'brand_id' => $data['brand_id'],
                'label_ids' => array_map(function ($item) {
                    return (string)$item;
                }, $data['label_ids']),
                'service_ids' => array_map(function ($item) {
                    return (string)$item;
                }, $data['service_ids']),
                'unit' => $data['unit'],
                'memory_ids'=>$data['memory_ids'],
                'memory_group' => $data['memory_group'],
                'stock' => $data['stock'],
                'virtual_sale_num' => $data['virtual_sale_num'],
                'status' => $data['status'],
                'sort' => $data['sort'],
                'attr_id' => $data['attr_id'],
                'attr_format' => $data['attr_format'],
                'delivery_type' => $data['delivery_type'],
                'is_free_shipping' => $data['is_free_shipping'],
                'fee_type' => $data['fee_type'],
                'delivery_money' => $data['delivery_money'],
                'delivery_template_id' => $data['delivery_template_id'],
                'supplier_id' => $data['supplier_id'],
                'member_discount' => $data['member_discount'],
                'poster_id' => $data['poster_id'],
                'create_time' => time()
            ];
           //  var_dump($goods_data);
            $res = $this->model->create($goods_data);

            if ($data['spec_type'] == 'single') {
                // 单规格
                $sku_data = [
                    'site_id' => $site_id,
                    'sku_name' => '',
                    'sku_image' => $data['goods_cover'],
                    'sku_no' => $data['sku_no'],
                    'goods_id' => $res->goods_id,
                    'sku_spec_format' => '', // sku规格格式
                    'price' => $data['price'],
                    'market_price' => $data['sale_price'],
                    'sale_price' => $data['sale_price'],
                    'cost_price' => $data['cost_price'],
                    'stock' => $data['stock'],
                    'weight' => $data['weight'],
                    'volume' => $data['volume'],
                    'is_default' => 1,
                   //  "member_price"=> json_encode($data['member_price']),
                ];
                $goods_sku_model->save($sku_data);

            } elseif ($data['spec_type'] == 'multi') {

                // 多规格数据
                $sku_data = [];
                $default_spec_count = 0;
                foreach ($data['goods_sku_data'] as $k => $v) {
                    $sku_spec_format = [];
                    foreach ($v['sku_spec'] as $ck => $cv) {
                        $sku_spec_format[] = $cv['spec_value_name'];
                    }
                    $sku_data[] = [
                        'site_id' => $site_id,
                        'sku_name' => $v['spec_name'],
                        'sku_image' => !empty($v['sku_image']) ? $v['sku_image'] : $data['goods_cover'],
                        'sku_no' => $v['sku_no'],
                        'goods_id' => $res->goods_id,
                        'sku_spec_format' => implode(',', $sku_spec_format), // sku规格格式
                        'price' => $v['price'],
                        'market_price' => $v['market_price'],
                        'sale_price' => $v['price'],
                        'cost_price' => $v['cost_price'],
                        'stock' => $v['stock'],
                        'weight' => $v['weight'],
                        'volume' => $v['volume'],
                        'is_default' => $v['is_default']
                    ];
                    if ($v['is_default'] == 1) $default_spec_count++;
                }

                if ($default_spec_count == 0) throw new AdminException('SHOP_GOODS_NOT_HAS_DEFAULT_SPEC');

                $goods_sku_model->insertAll($sku_data);

                // 商品规格值
                $spec_data = [];
                foreach ($data['goods_spec_format'] as $k => $v) {
                    $spec_values = [];
                    foreach ($v['values'] as $ck => $cv) {
                        $spec_values[] = $cv['spec_value_name'];
                    }
                    $spec_data[] = [
                        'goods_id' => $res->goods_id,
                        'spec_name' => $v['spec_name'],
                        'spec_values' => implode(',', $spec_values)
                    ];
                }
                $goods_spec_model->insertAll($spec_data);

            }

            Db::commit();

            event('AfterGoodsEdit', [
                'goods_id' => $res->goods_id,
                'goods_data' => $goods_data,
                'sku_data' => $sku_data
            ]);

            return true;
        } catch (\Exception $e) {
            Db::rollback();
            Log::write('---商品写入出错---' . date('Y-m-d H:i:s', time()));
            Log::write($e->getMessage());
            throw new CommonException($e->getMessage());
        }
    }
    /**
     * @Notes:拉取网络图像
     * @Interface saveImage
     * @param $imgUrl
     * @param $islocal
     * @param $site_id
     * @return mixed|string
     * @throws \Exception
     * @author: TK
     * @Time: 2024/6/22   下午6:19
     */
    //保存图片为服务器配置配置
    public function saveImage($imgUrls, $islocal = '', $site_id = '')
    {
        // 检查是否是逗号分隔的字符串
        if (strpos($imgUrls, ',') !== false) {
            // 拆分图片URL数组
            $imgUrlArray = explode(',', $imgUrls);
        } else {
            // 如果不是逗号分隔的字符串，直接放入数组
            $imgUrlArray = [$imgUrls];
        }
    
        // 初始化返回的数组
        $newUrls = [];
    
        // 遍历图片地址数组
        foreach ($imgUrlArray as $imgUrl) {
            // 清除URL两边的空格
            $imgUrl = trim($imgUrl);
    
            // 检查图片地址是否为空
            if ($imgUrl == '') {
                continue;
            }
    
            // 检查是否为本地图片
            if ($islocal == '0') {
                // 如果是本地图片，直接添加到返回数组
                $newUrls[] = $imgUrl;
            } else {
                // 如果不是本地图片，使用FetchService获取图片并处理路径
                $url = (new FetchService())->image($imgUrl, $site_id, 'spdr/' . $site_id . '/' . date('Y') . date('m') . date('d'));
                $url['url'] = str_replace('public/', '', $url['url']);
                $newUrls[] = $url['url'];
            }
        }
    
        // 将处理后的图片地址数组转换为逗号分隔的字符串并返回
        return implode(",", $newUrls);
    }

    /**
     * @Notes:整理详情图像
     * @Interface getImageArr
     * @param $content
     * @return array|string[]
     * @author: TK
     * @Time: 2024/6/22   下午6:20
     */
    public function getImageArr($content)
    {
        preg_match_all('/<img[^>]+src="([^"]+)"[^>]*>/i', $content, $matches);
        return $matches[1] ?: [];
    }

    /**
     * @Notes:商品详情处理
     * @Interface goodsDetail
     * @param $content
     * @param $imageAttr
     * @param $islocal
     * @param $site_id
     * @return array|mixed|string|string[]
     * @throws \Exception
     * @author: TK
     * @Time: 2024/6/22   下午6:20
     */
    public function goodsDetail($content, $imageAttr, $islocal = '', $site_id = '')
    {
        foreach ($imageAttr as $k => $v) {

            $url = $this->saveImage($v, $islocal, $site_id);
            //适配云oss
            if (strpos($url, 'http') === false) {
                $url = $this->getDomain() . '/' . $url;
            }
            $content = str_replace($v, $url, $content);
        }
        return $content;
    }

    /**获取服务器域名
     * @Notes:
     * @Interface getUrl
     * @return string
     * @author: TK
     * @Time: 2024/6/22   下午6:21
     */

    public function getUrl()
    {
        $isSecure = isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] === 'on';
        $domain = $_SERVER['HTTP_HOST'];
        if ($isSecure) {
            $url = 'https://' . $domain;
        } else {
            $url = 'http://' . $domain;
        }
        return $url;
    }
    public function export_hsx($data)
    {

        $data_column = [
            'goods_id' => [
                'name' => '商品ID',
            ],
            'goods_name' => [
                'name' => '商品名称'
            ],
            'sub_title' => [
                'name' => '副标题'
            ],
//            'cost_price' => [
//                'name' => '成本价'
//            ],
            'sku_no' => [
                'name' => '串号'
            ],
            'price' => [
                'name' => '售价'
            ],
            'goods_category1' => [
                'name' => '商品一级分类'
            ],
            'goods_category2' => [
                'name' => '商品二级分类'
            ],
        ];

        (new CoreExportService())->export($this->site_id, 'spdr_export_goods', $data_column, $data);
    }

    /**
     * 批量导入更新二手机图片
     * @param array $data
     * @return true
     */
    public function importRecycleCategory($data)
    {
        try {
            Log::write('开始导入处理，接收到的数据：' . json_encode($data), 'debug');
            
            if (empty($data['file_url'])) {
                throw new CommonException('文件不存在');
            }

            $file_path = public_path() . ltrim($data['file_url'], '/');
            Log::write('文件完整路径：' . $file_path, 'debug');
            
            if (!file_exists($file_path)) {
                throw new CommonException('文件不存在');
            }

            // 读取Excel文件
            $spreadsheet = IOFactory::load($file_path);
            $worksheet = $spreadsheet->getActiveSheet();
            $highestRow = $worksheet->getHighestRow();
            Log::write('Excel文件总行数：' . $highestRow, 'debug');

            // 开始事务
            Db::startTrans();
            try {
                $successCount = 0;
                $failCount = 0;
                
                // 从第二行开始读取数据（第一行是标题）
                for ($row = 2; $row <= $highestRow; $row++) {
                    $category_id = trim($worksheet->getCellByColumnAndRow(4, $row)->getValue());  // 第一列是分类ID
                    $image = trim($worksheet->getCellByColumnAndRow(6, $row)->getValue());  // 第三列是图片路径

                    Log::write('处理第' . $row . '行数据：分类ID=' . $category_id . ', 图片=' . $image, 'debug');

                    // 验证数据
                    if (empty($category_id) || empty($image)) {
                        Log::write('第' . $row . '行数据无效，分类ID或图片为空，跳过', 'debug');
                        $failCount++;
                        continue;
                    }

                    // 直接更新数据
                    $result = RecycleCategory::where('category_id', $category_id)->update([
                        'images' => $image,
                        'update_time' => time()
                    ]);
                    Log::write('更新结果：' . ($result ? '成功' : '失败') . '，SQL：' . Db::getLastSql(), 'debug');
                    
                    if ($result) {
                        $successCount++;
                    } else {
                        $failCount++;
                    }
                }

                // 提交事务
                Db::commit();
                Log::write('导入完成，成功：' . $successCount . '条，失败：' . $failCount . '条', 'debug');
                return success('导入成功，成功：' . $successCount . '条，失败：' . $failCount . '条');
            } catch (\Exception $e) {
                // 回滚事务
                Db::rollback();
                Log::write('导入异常：' . $e->getMessage(), 'error');
                throw new CommonException($e->getMessage());
            }
        } catch (\Exception $e) {
            Log::write('导入失败：' . $e->getMessage(), 'error');
            throw new CommonException($e->getMessage());
        } finally {
            // 删除临时文件
            if (isset($file_path) && file_exists($file_path)) {
                @unlink($file_path);
                Log::write('清理临时文件：' . $file_path, 'debug');
            }
        }
    }

}
