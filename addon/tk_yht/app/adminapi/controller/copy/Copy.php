<?php


namespace addon\tk_yht\app\adminapi\controller\copy;

use addon\tk_yht\app\service\admin\CommonConfigService;
use core\base\BaseAdminController;
use addon\tk_yht\app\service\admin\CopyGoodsService;
use think\Exception;

class Copy extends BaseAdminController
{
    /**
     * 采集产品
     */
    public function copyGoods()
    {
        $data = $this->request->params([
            ['url', ''],
            ['stock', 999],
            ['goods_category', '[1]'],
            ['goods_type', 'real'],
            ['islocal','0']
        ]);
        // 使用正则表达式检查换行符
        if (preg_match("/\r\n|\r|\n/", $data['url'])) {
            $urls = preg_split("/\r\n|\r|\n/", $data['url']);
            if(count($urls)>5) throw new Exception('最多支持5个产品采集');
            foreach ($urls as $k => $v) {
                $data['url'] = $v;
                (new CopyGoodsService())->copyGoods($data);
            }
            return success('操作成功');
        } else {
            return success((new CopyGoodsService())->copyGoods($data));
        }
    }
}
