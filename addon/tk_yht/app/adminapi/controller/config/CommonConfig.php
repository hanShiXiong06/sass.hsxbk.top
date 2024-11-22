<?php

namespace addon\tk_yht\app\adminapi\controller\config;

use addon\tk_yht\app\job\AddonUpgrade;
use addon\tk_yht\app\service\core\CloudService as CommonAuth;
use addon\tk_yht\Addon;
use addon\tk_yht\app\service\admin\CommonConfigService;
use core\base\BaseAdminController;
use core\exception\AdminException;
use think\Response;

class CommonConfig extends BaseAdminController
{

    public function addFile()
    {
        return success('操作成功', (new AddonUpgrade())->doJob());
    }

    /**
     * 获取配置
     */
    public function getConfig()
    {
        $res = (new CommonConfigService())->getConfig();
        return success($res);
    }

    /**
     * 保存配置
     */
    public function setConfig()
    {
        (new CommonAuth())->auth();
        $data = $this->request->params([
            ['access_key', ''],
            ['secret_key', ''],
        ]);
        (new CommonConfigService())->setConfig($data);
        return success('保存成功');
    }

}
