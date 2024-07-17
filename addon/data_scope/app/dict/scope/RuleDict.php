<?php
namespace addon\data_scope\app\dict\scope;
/**
 * Created by php2py on 2024/6/11.
 * Description:
 */
class RuleDict
{
    // 所有数据权限
    const ALL_SCOPE = 1;
    // 自定义数据权限
    const CUSTOM_SCOPE = 2;
    // 所在部门数据权限
    const SELF_DEPT_SCOPE = 3;
    // 本部门及子部门数据权限
    const DEPT_BELOW_SCOPE = 4;
    // 本人数据权限
    const SELF_SCOPE = 5;

    public static function getData()
    {
        return [
            self::ALL_SCOPE => get_lang('dict_scope_rule.all_scope'),
            self::CUSTOM_SCOPE => get_lang('dict_scope_rule.custom_scope'),
            self::SELF_DEPT_SCOPE => get_lang('dict_scope_rule.self_dept_scope'),
            self::DEPT_BELOW_SCOPE => get_lang('dict_scope_rule.dept_below_scope'),
            self::SELF_SCOPE => get_lang('dict_scope_rule.self_scope'),
        ];
    }
}