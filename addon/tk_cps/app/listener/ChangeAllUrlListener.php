<?php


namespace addon\tk_cps\app\listener;
use addon\tk_cps\app\service\core\CpsWapService;
/**
 * 转化链接
 */
class ChangeAllUrlListener
{
    /**
     * 应用管理
     * @param $data
     */
    public function handle($value)
    {
      return (new CpsWapService())->changeAllUrl($value);
    }
}