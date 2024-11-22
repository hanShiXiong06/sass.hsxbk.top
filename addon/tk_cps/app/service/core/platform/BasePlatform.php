<?php

namespace addon\tk_cps\app\service\core\platform;

/**
 * 三方平台项目公共驱动
 */
abstract class BasePlatform extends CommonLoader
{
    /**
     * @var array
     */
    private $config;

    /**
     * 初始化
     * @param array $config
     * @return void
     */
    protected function initialize(array $config = [])
    {
        $this->config = $config;
    }

    /**
     * @Notes:获取三方活动列表
     * @Interface getActiveAll
     * @param $data
     * @return mixed
     * @author: TK
     * @Time: 2024/9/20   上午1:12
     */
    abstract protected function getActiveAll($data);

    /**
     * @Notes:获取活动信息列表
     * @Interface getActiveInfo
     * @param $data
     * @return mixed
     * @author: TK
     * @Time: 2024/9/20   上午1:13
     */
    abstract protected function getActiveInfo($data);

    /**
     * @Notes:同步近30分钟的订单
     * @Interface asyncOrder
     * @param $data
     * @return mixed
     * @author: TK
     * @Time: 2024/9/20   上午1:14
     */
    abstract protected function asyncOrder($data);

    /**
     * @Notes:获取订单列表实时
     * @Interface getOrderList
     * @param $data
     * @return mixed
     * @author: TK
     * @Time: 2024/10/7   下午5:45
     */
    abstract protected function getOrderList($data);
}
