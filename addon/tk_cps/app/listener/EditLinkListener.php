<?php


namespace addon\tk_cps\app\listener;
use addon\tk_cps\app\service\core\CpsService;
/**
 * 修改链接中的pub_id
 */
class EditLinkListener
{
    /**
     * 应用管理
     * @param $data
     */
    public function handle($value)
    {
      return (new CpsService())->editPubId($value);
    }
}