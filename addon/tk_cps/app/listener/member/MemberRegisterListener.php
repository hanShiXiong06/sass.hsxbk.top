<?php
// +----------------------------------------------------------------------
// | Author: TK
// +----------------------------------------------------------------------

namespace addon\tk_cps\app\listener\member;

use addon\tk_cps\app\service\core\fenxiao\FenxiaoService;

/**
 * 会员注册成功事件
 */
class MemberRegisterListener
{
    /**
     * 会员注册进绑定拦截
     */
    public function handle($member)
    {
        if(isset($member[ 'pid' ])){
            (new FenxiaoService())->bindFenxiao($member);
        }
        return '';
    }
}