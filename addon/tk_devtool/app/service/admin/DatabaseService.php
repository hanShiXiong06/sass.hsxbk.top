<?php

namespace addon\tk_devtool\app\service\admin;

use addon\tk_devtool\app\service\core\CommonService;
use core\base\BaseAdminService;
use think\Exception;
use think\facade\Db;
use think\db\exception\DbException;
use think\Log;

/**
 * 数据库管理工具
 * ClassDatabaseService
 */
class DatabaseService extends BaseAdminService
{

    public function __construct()
    {
        parent::__construct();
    }
    public function exportTableText($tableName){
        $outputDir = root_path() . 'public/addon/tk_devtool/exportsql';
        !is_dir($outputDir) && mkdir($outputDir, 0775, true);

        // 获取数据表的字段结构
        $columns = Db::query("SHOW FULL COLUMNS FROM `{$tableName}`");

        // 构建表结构信息
        $columnContent = '';
        foreach ($columns as $column) {
            $columnContent .= "`{$column['Field']}` {$column['Type']} ";
            if ($column['Null'] == 'NO') {
                $columnContent .= 'NOT NULL ';
            }
            if ($column['Extra'] == 'auto_increment') {
                $columnContent .= 'AUTO_INCREMENT ';
            }
            if (!empty($column['Default'])) {
                $columnContent .= "DEFAULT '{$column['Default']}' ";
            }
            $columnContent .= "COMMENT '{$column['Comment']}'," . PHP_EOL;
        }

        // 添加主键信息
        $columnContent .= "PRIMARY KEY (`id`) USING BTREE" . PHP_EOL;

        // 构建SQL语句来创建数据表结构
        $prefix = config('database.connections.mysql.prefix');
        $newtableName = str_replace($prefix, '', $tableName);
        $sql = "CREATE TABLE IF NOT EXISTS `{{prefix}}{$newtableName}`  (" . PHP_EOL;
        $sql .= $columnContent;
        $sql .= ") ENGINE = InnoDB AUTO_INCREMENT = 220 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci COMMENT = '代码生成表字段信息表' ROW_FORMAT = Dynamic;" . PHP_EOL;

        // 查询表数据
        $data = Db::query("SELECT * FROM `{$tableName}`");

        // 构建插入数据的SQL语句
        $dataSql = '';
        foreach ($data as $row) {
            $values = [];
            foreach ($row as $value) {
                $values[] = is_null($value) ? 'NULL' : "'" . addslashes($value) . "'";
            }
            $dataSql .= "INSERT INTO `{{prefix}}{$newtableName}` VALUES (" . implode(',', $values) . ");" . PHP_EOL;
        }

        // 合并表结构和数据
        $mergedSql = $sql . $dataSql;

        // 导出SQL文件
        $fileName = $outputDir . '/' . $newtableName . '.sql';
        if (!file_put_contents($fileName, $mergedSql)) {
            return false;
        }

        return $mergedSql;
    }

    /**
     * 导出单个表结构
     * @param $tableName
     * @return false|string
     */
    public function exportTable($tableName)
    {
        $outputDir = root_path() . 'public/addon/tk_devtool/exportsql';
        !is_dir($outputDir) && mkdir($outputDir, 0775, true);

        // 获取数据表的字段结构
        $columns = Db::query("SHOW FULL COLUMNS FROM `{$tableName}`");

        // 构建表结构信息
        $columnContent = '';
        foreach ($columns as $column) {
            $columnContent .= "`{$column['Field']}` {$column['Type']} ";
            if ($column['Null'] == 'NO') {
                $columnContent .= 'NOT NULL ';
            }
            if ($column['Extra'] == 'auto_increment') {
                $columnContent .= 'AUTO_INCREMENT ';
            }
            if (!empty($column['Default'])) {
                $columnContent .= "DEFAULT '{$column['Default']}' ";
            }
            $columnContent .= "COMMENT '{$column['Comment']}'," . PHP_EOL;
        }

        // 添加主键信息
        $columnContent .= "PRIMARY KEY (`id`) USING BTREE" . PHP_EOL;

        // 构建SQL语句来创建数据表结构
        $prefix = config('database.connections.mysql.prefix');
        $newtableName = str_replace($prefix, '', $tableName);
        $sql = "CREATE TABLE IF NOT EXISTS `{{prefix}}{$newtableName}`  (" . PHP_EOL;
        $sql .= $columnContent;
        $sql .= ") ENGINE = InnoDB AUTO_INCREMENT = 220 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci COMMENT = '代码生成表字段信息表' ROW_FORMAT = Dynamic;" . PHP_EOL;

        // 查询表数据
        $data = Db::query("SELECT * FROM `{$tableName}`");

        // 构建插入数据的SQL语句
        $dataSql = '';
        foreach ($data as $row) {
            $values = [];
            foreach ($row as $value) {
                $values[] = is_null($value) ? 'NULL' : "'" . addslashes($value) . "'";
            }
            $dataSql .= "INSERT INTO `{{prefix}}{$newtableName}` VALUES (" . implode(',', $values) . ");" . PHP_EOL;
        }

        // 合并表结构和数据
        $mergedSql = $sql . $dataSql;

        // 导出SQL文件
        $fileName = $outputDir . '/' . $newtableName . '.sql';
        if (!file_put_contents($fileName, $mergedSql)) {
            return false;
        }
        return ((new CommonService())->getUrl()) . '/addon/tk_devtool/exportsql/' . $newtableName . '.sql';
    }

    public function backupDatabase()
    {
        $config = config('database.connections.mysql');
        $backupPath = root_path() . 'backup/sql/';
        $fileName = $config['database'] . '_' . date('YmdHis') . '.sql';
        $filePath = $backupPath . $fileName;
        !is_dir($backupPath) && mkdir($backupPath, 0775, true);
        $tables = Db::query('SHOW TABLES');
        $tables = array_column($tables, 'Tables_in_' . $config['database']);
        $sql = '';
        foreach ($tables as $table) {
            $sql .= "DROP TABLE IF EXISTS `$table`;\n";
            $createTableSql = Db::query("SHOW CREATE TABLE `$table`");
            $sql .= $createTableSql[0]['Create Table'] . ";\n";
            $data = Db::query("SELECT * FROM `$table`");
            foreach ($data as $row) {
                $sql .= "INSERT INTO `$table` VALUES (";
                foreach ($row as $value) {
                    $sql .= "'" . addslashes($value) . "', ";
                }
                $sql = rtrim($sql, ', ');
                $sql .= ");\n";
            }
        }
        file_put_contents($filePath, $sql);
        return $filePath;
    }

    /**
     * 修改数据表的字段属性
     * @param string $tableName 数据表名
     * @param string $fieldName 要修改的字段名
     * @param string $newFieldName 新的字段名
     * @param string $fieldType 字段类型
     * @param bool $primaryKey 是否主键
     * @param bool $allowNull 是否允许为空
     * @param int $length 字段长度
     * @return int 影响的行数
     * @throws DbException
     */
    public function alterTableModifyField(
        string $tableName,
        string $fieldName,
        string $newFieldName,
        string $fieldType,
        bool   $primaryKey = false,
        bool   $allowNull = true,
        int    $length = 0
    )
    {
        try {
            $sql = "ALTER TABLE `$tableName` MODIFY COLUMN `$fieldName` `$newFieldName` $fieldType";

            if ($primaryKey) {
                $sql .= " PRIMARY KEY";
            }

            if (!$allowNull) {
                $sql .= " NOT NULL";
            }

            if ($length > 0) {
                $sql .= " ($length)";
            }

            $result = Db::execute($sql);
            return $result;
        } catch (DbException $e) {
            // 处理异常
            throw $e;
        }
    }

    /**
     * 删除数据表
     */
    public function deleteTable($tableName)
    {
        $sql = "DROP TABLE $tableName";
        Db::execute($sql);
        return true;
    }

    /**
     * 获取数据表信息
     */
    public function getTableInfo($tableName)
    {
//        $prefix = config('database.connections.mysql.prefix');
//        $tableName = $prefix . $tableName;
        $database = config('database.connections.mysql.database');
        $tableInfo = [];

        // 获取数据表描述
        $tableDescription = $this->getTableDescription($tableName);
        $tableInfo['name'] = $tableName;
        $tableInfo['comment'] = $tableDescription;

        // 获取字段信息
        $sql = "SHOW FULL COLUMNS FROM {$tableName}";
        $columns = Db::query($sql);
        $fields = [];
        foreach ($columns as $column) {
            $fieldInfo = [];
            $fieldInfo['name'] = $column['Field'];
            $fieldInfo['type'] = ($column['Field'] === 'id') ? 'int' : preg_replace('/\([^)]*\)/', '', $column['Type']);
            $fieldInfo['length'] = $this->getColumnLength($column['Type']);
            $fieldInfo['primary_key'] = ($column['Key'] === 'PRI');
            $fieldInfo['not_null'] = ($column['Null'] === 'NO');
            $fieldInfo['comment'] = $column['Comment']; // 添加注释信息
            $fields[] = $fieldInfo;
        }
        $tableInfo['fields'] = $fields;

        return $tableInfo;
    }


    /**
     * 获取数据字段长度
     */
    public function getColumnLength($columnType)
    {
        preg_match('/\((.*?)\)/', $columnType, $matches);
        return $matches[1] ?? null;
    }

    /**
     * 获取数据表列表
     */
    public function getDatabaseTables()
    {
        $database = config('database.connections.mysql.database');
        $tables = Db::query("SHOW TABLES FROM {$database}");
        $tableNames = [];
        foreach ($tables as $table) {
            $tableName = $table["Tables_in_{$database}"];
            $description = $this->getTableDescription($tableName);
            $tableNames[] = [
                'name' => $tableName,
                'comment' => $description
            ];
        }
        return $tableNames;
    }

    public function getTableDescription($tableName)
    {
        $database = config('database.connections.mysql.database');
        $result = Db::query("SELECT TABLE_COMMENT FROM information_schema.TABLES WHERE TABLE_SCHEMA = '{$database}' AND TABLE_NAME = '{$tableName}'");
        return $result[0]['TABLE_COMMENT'] ?? '';
    }

    /**
     * 创建表
     */
    public function createTable($tableName, $fields, $tableComment = '')
    {
        // 检查表是否已存在
        if (Db::query("SHOW TABLES LIKE '{$tableName}'")) {
            // 表已存在，无需再次创建
            return false;
        }

        // 用于存储表字段的数组
        $tableFields = [];

        foreach ($fields as $field) {
            $fieldName = $field['name'];
            $fieldType = $field['type'];
            $fieldLength = $field['length'];
            $fieldDef = '';

            // 根据字段类型和长度生成字段定义
            switch ($fieldType) {
                case 'int':
                    $fieldDef = 'INT(' . $fieldLength . ')';
                    break;
                case 'varchar':
                    $fieldDef = 'VARCHAR(' . $fieldLength . ')';
                    break;
                case 'text':
                    $fieldDef = 'TEXT';
                    break;
                case 'datetime':
                    $fieldDef = 'DATETIME';
                    break;
                // 处理其他字段类型...
            }

            // 如果有字段注释，则添加字段注释
            $fieldComment = isset($field['comment']) ? ' COMMENT "' . $field['comment'] . '"' : '';

            // 检查字段是否必填
            if($field['not_null']=='true'){
                $fieldRequired = ' NOT NULL';
            }else{
                $fieldRequired = ' NULL';
            }

            // 添加字段定义到表字段数组中
            $tableFields[] = $fieldName . ' ' . $fieldDef . $fieldRequired . $fieldComment;
        }

        // 使用Db类的execute方法创建表
        $sql = 'CREATE TABLE IF NOT EXISTS ' . $tableName . ' (' . implode(',', $tableFields) . ') ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci';
        if (!empty($tableComment)) {
            $sql .= ' COMMENT="' . $tableComment . '"';
        }
        Db::execute($sql);

        // 添加主键和自动递增
        $sqlAlter = 'ALTER TABLE ' . $tableName . ' ADD PRIMARY KEY (id)';
        $sqlAlter .= ', MODIFY id INT(11) UNSIGNED AUTO_INCREMENT';
        Db::execute($sqlAlter);

        return true;
    }


    /**
     * 获取数据表结构信息/不存在会创建表
     */
    public function updateTable($tableName, $fields, $tableComment = '')
    {
        // 检查表是否存在
        $tableExists = Db::query("SHOW TABLES LIKE '{$tableName}'");
        if (!$tableExists) {
            // 表不存在，创建新表
            $this->createTable($tableName, $fields, $tableComment);
            return true;
        }

        // 获取现有表字段
        $existingFields = Db::query("DESCRIBE {$tableName}");
        $existingFieldNames = array_column($existingFields, 'Field');

        // 遍历新字段
        foreach ($fields as $field) {
            $fieldName = $field['name'];
            $fieldType = $field['type'];
            $fieldLength = $field['length'] ?? '';
            $fieldComment = isset($field['comment']) && !empty($field['comment']) ? " COMMENT '{$field['comment']}'" : '';
            if ($field['not_null'] == 'true') {
                $fieldRequired = ' NOT NULL';
            } else {
                $fieldRequired = ' NULL';
            }
            // 根据字段类型生成字段定义
            $fieldDef = $fieldType;
            if ($fieldType !== 'longtext' && $fieldLength) {
                $fieldDef .= "({$fieldLength})";
            }

            // 检查字段是否存在
            $existingField = $this->getField($existingFields, $fieldName);
            // 如果字段不存在，则添加新字段
            if (!isset($existingField)) {
                $sql = "ALTER TABLE {$tableName} ADD COLUMN `{$fieldName}` {$fieldDef} {$fieldRequired} {$fieldComment}";
                Db::execute($sql);
            } else {
                // 如果字段已存在，则更新字段信息
                if ($existingField['Type'] !== $fieldDef || !isset($existingField['Comment']) || $existingField['Comment'] !== $fieldComment || $existingField['Null'] !== $fieldRequired) {
                    $sql = "ALTER TABLE {$tableName} MODIFY COLUMN `{$fieldName}` {$fieldDef}{$fieldRequired}{$fieldComment}";
                    Db::execute($sql);
                }
            }
        }

        // 检查是否有需要删除的字段
        foreach ($existingFields as $field) {
            $fieldName = $field['Field'];
            if (!in_array($fieldName, array_column($fields, 'name'))) {
                // 字段存在于表中但不在新字段列表中，删除字段
                $sql = "ALTER TABLE {$tableName} DROP COLUMN `{$fieldName}`";
                Db::execute($sql);
            }
        }
        // 检查主键是否存在
        $primaryKeyExists = $this->isPrimaryKeyExists($existingFields);
        if (!$primaryKeyExists) {
            // 检查是否存在'id'字段，并设置为自动递增和主键
            if (!in_array('id', $existingFieldNames)) {
                // 添加'id'字段作为自增主键
                $sql = "ALTER TABLE {$tableName} ADD COLUMN id INT(11) UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY";
                Db::execute($sql);
            } else {
                // 检查'id'字段是否已经是自增和主键
                $isAutoIncrement = $this->isAutoIncrement($existingFields, 'id');
                $isPrimaryKey = $this->isPrimaryKey($existingFields, 'id');
                if (!$isAutoIncrement || !$isPrimaryKey) {
                    // 检查主键是否存在
//                    $primaryKeyExists = $this->isPrimaryKeyExists($existingFields);
//                    if (!$primaryKeyExists) {
//                        // 删除现有的主键约束
//                        $sql = "ALTER TABLE {$tableName} DROP PRIMARY KEY";
//                        Db::execute($sql);
//                    }
                    $sql = "ALTER TABLE {$tableName} MODIFY COLUMN id INT(11) UNSIGNED";
                    Db::execute($sql);

                    if ($isAutoIncrement && !$isPrimaryKey) {
                        // 修改'id'字段为主键
                        $sql = "ALTER TABLE {$tableName} DROP PRIMARY KEY, ADD PRIMARY KEY (id)";
                        Db::execute($sql);
                    } else {
                        // 修改'id'字段为自增主键
                        $sql = "ALTER TABLE {$tableName} MODIFY COLUMN id INT(11) UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY";
                        Db::execute($sql);
                    }
                }
            }

        }
        // 更新表注释
        if (!empty($tableComment)) {
            $sql = "ALTER TABLE {$tableName} COMMENT '{$tableComment}'";
            Db::execute($sql);
        }

        return true;
    }


    /**
     * 获取指定字段的信息
     */
    /**
     * 获取指定字段的信息
     */
    private function getField($fields, $fieldName)
    {
        foreach ($fields as $field) {
            if ($field['Field'] === $fieldName) {
                return $field;
            }
        }

        return null;
    }


    /**
     * 检查表中是否存在主键约束
     * @param array $existingFields 表中已存在的字段
     * @return bool
     */
    public function isPrimaryKeyExists($existingFields)
    {
        foreach ($existingFields as $field) {
            if ($field['Key'] === 'PRI') {
                return true;
            }
        }
        return false;
    }

    /**
     * 检查字段是否是主键
     *
     * @param array $fields
     * @param string $fieldName
     * @return bool
     */
    private function isPrimaryKey($fields, $fieldName)
    {
        foreach ($fields as $field) {
            if ($field['Field'] === $fieldName && $field['Key'] === 'PRI') {
                return true;
            }
        }
        return false;
    }

    /**
     * 检查是否有多个主键
     *
     * @param array $fields
     * @return bool
     */
    private function hasMultiplePrimaryKeys($fields)
    {
        $primaryKeyCount = 0;

        foreach ($fields as $field) {
            if ($field['Key'] === 'PRI') {
                $primaryKeyCount++;
            }
        }

        return $primaryKeyCount > 1;
    }


// 辅助函数：获取字段类型
    private function getFieldType($fields, $fieldName)
    {
        foreach ($fields as $field) {
            if ($field['Field'] === $fieldName) {
                return $field['Type'];
            }
        }
        return null;
    }

// 辅助函数：检查字段是否为自增字段
    private function isAutoIncrement($fields, $fieldName)
    {
        foreach ($fields as $field) {
            if ($field['Field'] === $fieldName && $field['Extra'] === 'auto_increment') {
                return true;
            }
        }
        return false;
    }


    private function getTableFields($tableName)
    {
        $fields = [];
        $prefix = config('database.connections.mysql.prefix');

        // 使用SHOW COLUMNS查询获取表字段
        $sql = "SHOW COLUMNS FROM {$tableName}";
        $result = Db::query($sql);

        foreach ($result as $row) {
            $fieldName = $row['Field'];
            $fieldType = $row['Type'];
            $fields[$fieldName] = $fieldType;
        }

        return $fields;
    }

}
