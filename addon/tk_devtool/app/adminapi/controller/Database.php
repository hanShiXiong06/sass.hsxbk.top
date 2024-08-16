<?php
// +----------------------------------------------------------------------
// | Author: 沐
// +----------------------------------------------------------------------

namespace addon\tk_devtool\app\adminapi\controller;

use addon\tk_devtool\app\service\admin\DatabaseService;
use core\base\BaseAdminController;

class Database extends BaseAdminController
{
    public function getDatabaseTables()
    {
        return success('获取数据表成功', (new DatabaseService())->getDatabaseTables());
    }

    public function getTableInfo()
    {
        $data = $this->request->params([
            ['name', 'tk_demo_ceshi'],
        ]);

        return success('', (new DatabaseService())->getTableInfo($data['name']));
    }

    public function deleteTable()
    {
        $data = $this->request->params([
            ['name', 'tk_demo_ceshi'],
        ]);

        return success('删除表成功', (new DatabaseService())->deleteTable($data['name']));
    }

    public function updateTable()
    {
        $data = $this->request->params([
            ['name', 'tk_demo_ceshi'],
            ['fields', []],
            ['comment', 'CURD生成表'],
            ['type',''],
        ]);
        $tableName = $data['name'];
        $fields = $data['fields'];
        $tableComment = $data['comment'];
        (new DatabaseService())->updateTable($tableName, $fields, $tableComment);
        return success('操作成功','');
    }

    public function backupDatabase()
    {
        return success('备份成功', (new DatabaseService())->backupDatabase());
    }
    public function exportTable()
    {
        $data = $this->request->params([
            ['name', 'tk_demo_ceshi'],
        ]);
        $file=(new DatabaseService())->exportTable($data['name']);
        return success('导出成功',$file);
    }
    public function exportTableText(){
        $data = $this->request->params([
            ['name', 'tk_ceshi_demo'],
        ]);
        $file=(new DatabaseService())->exportTableText($data['name']);
        return success('导出成功',$file);
    }
    /**
     * 测试接口
     */
    public function ceshi()
    {
        $data = $this->request->params([
            ['name', 'tk_ceshi'],
            ['fields', []],
            ['comment', 'CURD生成表'],
            ['type',''],
        ]);
        $tableName = $data['name'];
        $fields = $data['fields'];
        $tableComment = $data['comment'];
        (new DatabaseService())->updateTable($tableName, $fields, $tableComment);
        return success('操作成功','');
    }
}
