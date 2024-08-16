<?php
declare (strict_types = 1);

namespace addon\tk_cps\app\listener\poster;



/**
 * 商品海报类型
 */
class ActPosterType
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
                'type' => 'tk_cps_act',
                'addon' => 'tk_cps',
                'name' => 'CPS活动海报',
                'decs' => 'CPS活动海报',
                'icon' => 'addon/tk_cps/icon.png'
            ]
        ];

    }
}
