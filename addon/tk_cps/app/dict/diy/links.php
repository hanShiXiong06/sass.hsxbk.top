<?php
$data=[
    'TK_CPS_COMMONLINK' => [
        'key' => 'tk_cps',
        'addon_title' => 'CPS联盟',
        'title' => 'CPS联盟',
        'child_list' => [
            [
                'name' => 'TK_CPS_DIY',
                'title' => 'CPS首页',
                'url' => '/addon/tk_cps/pages/diy',
                'is_share' => 1,
                'action' => 'decorate'
            ],
            [
                'name' => 'TK_CPS_DIY_MEMBER',
                'title' => 'CPS个人中心',
                'url' => '/addon/tk_cps/pages/member',
                'is_share' => 1,
                'action' => 'decorate'
            ],
            [
                'name' => 'TK_CPS_MEMBER_FENXIAO',
                'title' => '分销中心',
                'url' => '/addon/tk_cps/pages/fenxiao/index',
                'is_share' => 1,
                'action' => 'decorate'
            ],
            [
                'name' => 'TK_CPS_ACT_LIST',
                'title' => '活动列表',
                'url' => '/addon/tk_cps/pages/act',
                'is_share' => 1,
                'action' => ''
            ],
            [
                'name' => 'TK_CPS_ACT_BWC_LIST',
                'title' => '霸王餐列表',
                'url' => '/addon/tk_cps/pages/bwc/act',
                'is_share' => 1,
                'action' => ''
            ],
            [
                'name' => 'TK_CPS_ORDER_BWC_LIST',
                'title' => '霸王餐订单',
                'url' => '/addon/tk_cps/pages/bwc/order',
                'is_share' => 1,
                'action' => ''
            ],
        ]
    ],
];
$dir=project_path().'niucloud/addon/tk_cps/app/dict/diy/link';
$files = scandir($dir);
foreach ($files as $file) {
    if ($file == '.' || $file == '..') {
        continue;
    }
    $path = $dir . '/' . $file;
    if (is_file($path) && pathinfo($file, PATHINFO_EXTENSION) == 'php' ) {
        $filedata=include($path);
        $data = empty($path) ? $data : array_merge2($data, $filedata);
    }
}
return $data;
