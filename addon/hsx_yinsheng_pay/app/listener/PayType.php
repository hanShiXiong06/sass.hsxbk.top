<?php
declare (strict_types=1);

namespace addon\hsx_yinsheng_pay\app\listener;

/**
 *
 */
class PayType
{
    public function handle()
    {
        return [
            'yinshengpay' => [
                'name' => '微信支付(半屏付)',
                'key' => 'yinshengpay',
                'icon' => 'addon/hsx_yinsheng_pay/wechatpay.png',
                'pay_format'=>"EmbeddedMiniProgram",
                'setting_component' => '/src/addon/hsx_yinsheng_pay/views/setting/components/pay-seafoxpay.vue'
            ],
            // 'seafoxpay2' => [
            //     'name' => '聚合支付',
            //     'key' => 'seafoxpay',
            //     'icon' => 'addon/seafox_pay/seafoxpay.png',
            //     'setting_component' => '/src/addon/seafox_pay/views/seafoxpay/setting/components/pay-seafoxpay.vue'
            // ]
        ];
    }
}
