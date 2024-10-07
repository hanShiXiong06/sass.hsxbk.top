<?php
namespace addon\hsx_yinsheng_pay\app\service\core;

// 调试模式
const DEBUG_MODE = true;

function print_json($json)
{
    $json_encode = json_encode($json, JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT);
    echo "<pre>result:\n\n$json_encode</pre>";
}


// 扫码工作日到账费率 busOpenType=00时必填
function getCodeScanT1Fee()
{
    return [
        // 微信扫码费率
        'wxPayFee' => [
            'rateType' => "0", //收费方式 这里只支持0按百分比
            'rateFee' => "0.60", //费率 单位为% 填0.53代表0.53%
            'rateBottom' => "60", //最低收费 单位为分
        ],
        //支付宝扫码费率
        'aliPayFee' => [
            'rateType' => "0", //收费方式 这里只支持0按百分比
            'rateFee' => "0.61", //费率 单位为% 填0.53代表0.53%
            'rateBottom' => "61", //最低收费 单位为分
        ],
        //银联一档借记卡扫码费率(>1000)
        'bank1debitPayFee' => [
            'rateType' => '0',//收费方式 这里只支持0按百分比
            'rateFee' => "0.62",//费率 单位为% 填0.53代表0.53%
            'rateBottom' => "62",//最低收费 单位为分
            'rateTop' => "1062",//最高收费 单位为分
        ],
        //银联一档贷记卡扫码费率(>1000)
        'bank1creditPayFee' => [
            'rateType' => "0", //收费方式 这里只支持0按百分比
            'rateFee' => "0.63", //费率 单位为% 填0.53代表0.53%
            'rateBottom' => "63", //最低收费 单位为分
        ],
        //银联二档借记卡扫码费率(<=1000)
        'bank2debitPayFee' => [
            'rateType' => '0',//收费方式 这里只支持0按百分比
            'rateFee' => "0.64",//费率 单位为% 填0.53代表0.53%
            'rateBottom' => "64",//最低收费 单位为分
            'rateTop' => "1064",//最高收费 单位为分
        ],
        //银联二档贷记卡扫码费率(<=1000)
        'bank2creditPayFee' => [
            'rateType' => "0", //收费方式 这里只支持0按百分比
            'rateFee' => "0.65", //费率 单位为% 填0.53代表0.53%
            'rateBottom' => "65", //最低收费 单位为分
        ]
    ];
}

// 扫码实时到账垫资费 busOpenType=01时必填
function getCodeScanD0Fee()
{
    return [
        'rateType' => "0", //收费方式 这里只支持0按百分比
        'rateFee' => "0.66", //费率 单位为% 填0.53代表0.53%
        'rateBottom' => "66", //最低收费 单位为分
    ];
}

// 刷卡工作日到账费率 busOpenType=10时必填
function getSwCardT1Fee()
{
    return [
        'debitPayFee' => [
            'rateType' => '0',//收费方式 这里只支持0按百分比
            'rateFee' => "0.67",//费率 单位为% 填0.53代表0.53%
            'rateBottom' => "67",//最低收费 单位为分
            'rateTop' => "1067",//最高收费 单位为分
        ],
        'creditPayFee' => [
            'rateType' => "0", //收费方式 这里只支持0按百分比
            'rateFee' => "0.68", //费率 单位为% 填0.53代表0.53%
            'rateBottom' => "68", //最低收费 单位为分
        ]
    ];
}

// 刷卡实时到账垫资费 busOpenType=11时必填
function getSwCardD0Fee()
{
    return [
        'debitPayFee' => [
            'rateType' => '0',//收费方式 0 按百分比 1按固定金额
            'rateFee' => "0.69",// 费率 按百分比时单位为% 按固定金额时 单位为分
            'rateBottom' => "69",//最低收费 单位为分 按百分比时生效
            'rateTop' => "1069",//最高收费 单位为分 按百分比时生效
        ],
        'creditPayFee' => [
            'rateType' => '0',//收费方式 0 按百分比 1按固定金额
            'rateFee' => "0.70",// 费率 按百分比时单位为% 按固定金额时 单位为分
            'rateBottom' => "70",//最低收费 单位为分 按百分比时生效
            'rateTop' => "1070",//最高收费 单位为分 按百分比时生效
        ]
    ];
}

/**
 * 天天到账垫资费 busOpenType=20时必填
 */
function getD1Fee()
{
    return [
        'rateType' => '0',//收费方式 0 按百分比 1按固定金额
        'rateFee' => "0.71",// 费率 按百分比时单位为% 按固定金额时 单位为分
        'rateBottom' => "71",//最低收费 单位为分 按百分比时生效
    ];
}