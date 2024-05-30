<?php
return [
    //需要进行整理
    'o2o_order_pay' => [
        'temp_key' => 'OPENTM402074360',
        'content' => [
            ['下单时间', '{create_time}', 'keyword1'],
            ['订单编号', '{order_no}', 'keyword2'],
            ['商品信息', '{goods_name}', 'keyword3'],
            ['订单金额', '{order_money}', 'keyword4']
        ],
    ],
    'o2o_order_auto_close' => [
        'temp_key' => 'OPENTM205543831',
        'content' => [
            ['订单商品', '{goods_name}', 'keyword1'],
            ['订单编号', '{order_no}', 'keyword2'],
            ['下单时间', '{create_time}', 'keyword3'],
            ['订单金额', '{order_money}', 'keyword4'],
            ['关闭时间', '{close_time}', 'keyword5'],
        ],
    ],
    'o2o_refund_success' => [
        'temp_key' => 'OPENTM417988131',
        'content' => [
            ['订单编号', '{order_no}', 'keyword1'],
            ['商品名称', '{goods_name}', 'keyword2'],
            ['退款金额', '{money}', 'keyword3']
        ]
    ],
    'o2o_refund_refuse' => [
        'temp_key' => 'OPENTM418276608',
        'content' => [
            ['订单号', '{order_no}', 'keyword1'],
            ['退款金额', '{money}', 'keyword2'],
            ['拒绝退款理由', '{reason}', 'keyword3'],
        ]
    ]
];