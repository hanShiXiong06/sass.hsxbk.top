<?php

namespace addon\qf_notice\app\adminapi\controller\import;
use addon\qf_notice\app\service\admin\import\ImportService;
use core\base\BaseAdminController;


class Import extends BaseAdminController
{

    public function import()
    {
        $data = $this->request->params([
            ["file_url", ""],
            ["cat_id",""],
            ["num",10000],
        ]);
        (new ImportService())->import($data);
        return success('操作成功');
    }

}
