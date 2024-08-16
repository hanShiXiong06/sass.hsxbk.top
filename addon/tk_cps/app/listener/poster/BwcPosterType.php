<?php
declare (strict_types = 1);

namespace addon\tk_cps\app\listener\poster;



/**
 * 商品海报类型
 */
class BwcPosterType
{
    /**
     * 商品海报
     * @param $data
     * @return void
     */
    public function handle($data = [])
    {
        return [
            [
                'type' => 'tk_cps_bwc',
                'addon' => 'tk_cps',
                'name' => '霸王餐海报',
                'decs' => '霸王餐海报',
                'icon' => 'addon/tk_cps/icon.png'
            ]
        ];

    }
}
