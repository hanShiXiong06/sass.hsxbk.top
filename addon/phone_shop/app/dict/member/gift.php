<?php

return [
    'shop_coupon' => [
        'key' => 'phone_shop_coupon',
        'name' => '优惠券', // 礼包名称
        'desc' => '发放优惠券', // 礼包说明
        'component' => '/src/addon/phone_shop/views/member/components/gift-coupon.vue',
        // 礼包发放调用方法
        'grant' => function($site_id, $member_id, $config) {
            $service = new \addon\phone_shop\app\service\core\coupon\CoreCouponMemberService();
            foreach ($config[ 'coupon_id' ] as $coupon_id) {
                if (!isset($config[ 'coupon_list' ][ 'id_' . $coupon_id ])) continue;
                $service->sendCoupon($site_id, $member_id, $coupon_id, $config[ 'coupon_list' ][ 'id_' . $coupon_id ]);
            }
        },
        "content" => [
            // 管理端
            'admin' => function($site_id, $config) {
                $content = [];
                $model = ( new addon\phone_shop\app\model\coupon\Coupon() );
                $coupon_list = $model->where([ [ 'site_id', '=', $site_id ], [ 'id', 'in', $config[ 'coupon_id' ] ] ])->field('id,title')->select()->toArray();
                if (!empty($coupon_list)) {
                    foreach ($coupon_list as $item) {
                        $content[] = $item[ 'title' ] . '*' . $config[ 'coupon_list' ][ 'id_' . $item[ 'id' ] ];
                    }
                }
                return implode(',', $content);
            },
            // 会员等级
            'member_level' => function($site_id, $config) {
                $content = [];
                $model = ( new addon\phone_shop\app\model\coupon\Coupon() );
                $coupon_list = $model->where([ [ 'site_id', '=', $site_id ], [ 'id', 'in', $config[ 'coupon_id' ] ] ])->field('id,price')->select()->toArray();
                if (!empty($coupon_list)) {
                    foreach ($coupon_list as $item) {
                        $content[] = [
                            'text' => round($item[ 'price' ]) . "元优惠券",
                            'background' => '/addon/phone_shop/gift/gift_coupon_bg.png'
                        ];
                    }
                }
                return $content;
            },
            // 会员签到（日签）
            'member_sign' => function($site_id, $config) {
                $content = [];
                $model = ( new addon\phone_shop\app\model\coupon\Coupon() );
                $coupon_list = $model->where([ [ 'site_id', '=', $site_id ], [ 'id', 'in', $config[ 'coupon_id' ] ] ])->field('id,price')->select()->toArray();
                if (!empty($coupon_list)) {
                    foreach ($coupon_list as $item) {
                        $content[] = [
                            'text' => round($item[ 'price' ]) . "元优惠券",
                            'icon' => '/addon/phone_shop/sign/coupon.png'
                        ];
                    }
                }
                return $content;
            },
            // 会员签到（连签）
            'member_sign_continue' => function($site_id, $config) {
                $content = [];
                $model = ( new addon\phone_shop\app\model\coupon\Coupon() );
                $coupon_list = $model->where([ [ 'site_id', '=', $site_id ], [ 'id', 'in', $config[ 'coupon_id' ] ] ])->field('id,price')->select()->toArray();
                if (!empty($coupon_list)) {
                    foreach ($coupon_list as $item) {
                        $content[] = [
                            'text' => round($item[ 'price' ]) . "元优惠券",
                            'icon' => '/addon/phone_shop/sign/coupon01.png'
                        ];
                    }
                }
                return $content;
            }
        ]
    ]
];
