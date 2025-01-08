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

namespace addon\goods_export\app\adminapi\controller\spdr;

use core\base\BaseAdminController;
use addon\goods_export\app\service\admin\GoodsService;
use core\exception\CommonException;

use PhpOffice\PhpSpreadsheet\IOFactory;

/**
 * 商品控制器
 * Class Goods
 * @package addon\shop\app\adminapi\controller\goods
 */
class Goods extends BaseAdminController
{
    public function importAdmin()
    {
        $data = $this->request->params([
            ["file_url", ""],
            ['goods_category', '[1]'],
            ['goods_type', 'real'],
            ['num',1000],
            ['status',0],
            ['islocal',0],
        ]);
        (new GoodsService())->import($data);
        return success('操作成功');
    }

    public function import()
    {
        $data = $this->request->params([
            ["file_url", ""],
            ['goods_category', '[1]'],
            ['goods_type', 'real'],
            ['num',50],
            ['status',0],
            ['islocal',0],
        ]);
        (new GoodsService())->import($data);
        return success('操作成功');
    }

    public function checkShop()
    {
        if (!in_array('phone_shop', (new GoodsService())->checkShop())) {
            throw new CommonException('需要搭配二手商城使用，暂无使用权限');
        } else {
            return success('验证成功');
        }
    }

    /**
     * @Notes:导出商品
     * @Interface export
     * @return \think\Response
     * @author: TK
     * @Time: 2024/6/21   下午2:35\
     */
    public function export()
    {
        $data = $this->request->params([
            ["goods_name", ""],
            ["goods_category", ''],
            ["goods_type", ""],
            ["brand_id", ""],
            ["label_ids", ""],
            ["start_sale_num", ""],
            ["end_sale_num", ""],
            ["start_price", ""],
            ["end_price", ""],
            ["status", ""],
            ['order', ''],
            ['sort', '']
        ]);
        return success((new GoodsService())->getPage($data));
    }
    public function export_hsx()
    {
        $data = $this->request->params([
            ["goods_name", ""],
            ["goods_category", ''],
            ["goods_type", ""],
            ["brand_id", ""],
            ["label_ids", ""],
            ["start_sale_num", ""],
            ["end_sale_num", ""],
            ["start_price", ""],
            ["end_price", ""],
            ["status", "1"],
            ['order', ''],
            ['sort', '']
        ]);
        return success((new GoodsService())->getPageHsx($data));
    }

    // 批量更新二手机价格
    public function importRecycleCategory()
    {
        $data = $this->request->params([
            ['file_url', ''],
        ]);
        
        if (empty($data['file_url'])) {
            throw new CommonException('请上传文件');
        }
        
        return (new GoodsService())->importRecycleCategory($data);
    }

}
