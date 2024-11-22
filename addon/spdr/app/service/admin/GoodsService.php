<?php
// +----------------------------------------------------------------------
// | Author: TK
// +----------------------------------------------------------------------

namespace addon\spdr\app\service\admin;

use addon\shop\app\model\goods\Goods;
use addon\shop\app\model\goods\GoodsSku;
use addon\shop\app\model\goods\GoodsSpec;
use addon\spdr\app\job\goods\ImportGoods;
use app\service\core\site\CoreSiteService;
use app\service\core\sys\CoreConfigService;
use core\base\BaseAdminService;
use core\exception\AdminException;
use core\exception\CommonException;
use PhpOffice\PhpSpreadsheet\IOFactory;
use addon\spdr\app\model\spdrlist\SpdrList;
use think\facade\Cache;
use think\facade\Db;
use think\facade\Log;

/**
 * 商品服务层
 * Class GoodsService
 * @package addon\shop\app\service\admin\goods
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
     * @Notes:商品导入执行方法
     * 导入格式必须严格按照模板填写
     * @Interface import
     * @param $data
     * @author: TK
     * @Time: 2024/6/21   下午9:33
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
            'cat_id' => $data['goods_category'],
            'flie' => $data['file_url'],
        ]);
        foreach ($finalData as $key => $value) {
            if (!isset($value['商品名称'])) {
                $failCount++;
                continue;
            }
            $goods_image = implode(',', array_map(function ($item) {
                if (is_array($item)) {
                    return implode('', $item);
                }
                return $item;
            }, json_decode($value['商品轮播图'] ?? '[]', true)));
            //数组组装
            $info = [
                'goods_name' => $value['商品名称'] ?? '',
                'sub_title' => $data['副标题'] ?? "",
                'goods_cover' => $value['商品缩略图'] ?? '',
                'goods_image' => $goods_image,
                'goods_category' => $data['goods_category'],
                'goods_type' => $data['goods_type'],
                'brand_id' => 0,
                'label_ids' => [],
                'service_ids' => [],
                'supplier_id' => 0,
                'status' => $data['status'],
                'sort' => 0,
                // 规格类型，single：单规格，multi：多规格
                'spec_type' => $spec_type,
                //单规格数据
                'price' => $value['售价'] ?? '',
                'market_price' => $value['原价'] ?? '',
                'cost_price' => $value['成本价'] ?? '',
                'weight' => 0,
                'volume' => 0,
                'stock' => $value['商品库存'] ?? '',
                'sku_no' => '',
                'unit' => $value['单位'] ?? '',
                'virtual_sale_num' => $value['虚拟销量'] ?? 0,
                //多规格数据
                'goods_spec_format' => $spec_data,
                'goods_sku_data' => $goods_sku_data,
                //配送设置
                'delivery_type' => json_decode($value['配送类型'] ?? '[]', true),
                'is_free_shipping' => 1,
                'fee_type' => 'template',
                'delivery_money' => '0',
                'delivery_template_id' => 0,
                'goods_desc' => $value['商品详情'] ?? '',
                //商品详情
            ];
            $info['attr_id'] = '';
            $info['attr_format'] = '';
            $info['member_discount'] = 0;
            $info['poster_id'] = 0;
            $successCount++;
            ImportGoods::dispatch(['site_id' => $this->site_id, 'info' => $info, 'islocal' => $data['islocal']]);
        }
        $spdrInfo->num = count($finalData);
        $spdrInfo->success_num = $successCount;
        $spdrInfo->fail_num = $failCount;
        $spdrInfo->save();
        unlink($filePath);
        // 返回准备好的数据
        return $finalData;
    }

    public function asyncGoods($site_id, $info, $islocal = '0')
    {
        try {
            //处理主图和轮播图
            $info['goods_cover'] = $this->saveImage(str_replace("\t", "", $info['goods_cover']), $islocal, $site_id);
            $info['goods_image'] = $this->saveImage(str_replace("\t", "", explode(",", $info['goods_image'])), $islocal, $site_id);
            $arr = $this->getImageArr($info['goods_desc']);
            $info['goods_desc'] = $this->goodsDetail($info['goods_desc'], $arr, $islocal, $site_id);
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

            $goods_data = [
                'site_id' => $site_id,
                'goods_name' => $data['goods_name'],
                'sub_title' => $data['sub_title'],
                'goods_type' => $data['goods_type'],
                'goods_cover' => $data['goods_cover'],
                'goods_image' => $data['goods_image'],
                'goods_category' => array_map(function ($item) {
                    return (string)$item;
                }, $data['goods_category']),
                'goods_desc' => $data['goods_desc'],
                'brand_id' => $data['brand_id'],
                'label_ids' => array_map(function ($item) {
                    return (string)$item;
                }, $data['label_ids']),
                'service_ids' => array_map(function ($item) {
                    return (string)$item;
                }, $data['service_ids']),
                'unit' => $data['unit'],
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
                    'market_price' => $data['market_price'],
                    'sale_price' => $data['price'],
                    'cost_price' => $data['cost_price'],
                    'stock' => $data['stock'],
                    'weight' => $data['weight'],
                    'volume' => $data['volume'],
                    'is_default' => 1
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
    public function saveImage($imgUrl, $islocal = '', $site_id = '')
    {
        //增加图片,检测
        if (is_array($imgUrl)) {
            $newUrl = [];
            foreach ($imgUrl as $k => $v) {
                if ($islocal == '0') {
                    $newUrl[] = $v;
                } else {
                    $url = (new FetchService())->image($v, $site_id, 'spdr/' . $site_id . '/' . date('Y') . date('m') . date('d'));
                    $url['url'] = str_replace('public/', '', $url['url']);
                    $newUrl[] = $url['url'];
                }
            }
            return implode(",", $newUrl);
        } else {
            if ($imgUrl == '') {
                return '';
            }
            if ($islocal == '0') {
                return $imgUrl;
            }
            $imgUrl = (new FetchService())->image($imgUrl, $site_id, 'spdr/' . $site_id . '/' . date('Y') . date('m') . date('d'));
            $imgUrl['url'] = str_replace('public/', '', $imgUrl['url']);
            return $imgUrl['url'];
        }
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
}
