<?php

return [
    'bind' => [

    ],
    'listen' => [
        //导出数据
        'ExportData' => [
            //商品列表导出
            'addon\spdr\app\listener\goods\ShopGoodsExportDataListener',
        ],
        //导出数据类型
        'ExportDataType' => [
            //订单列表导出
            'addon\spdr\app\listener\goods\ShopGoodsExportDataTypeListener',
        ],
    ],
    'subscribe' => [
    ],
];