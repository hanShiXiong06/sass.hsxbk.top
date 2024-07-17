import request from "@/utils/request";
// USER_CODE_BEGIN -- data_scope_sys_dept
/**
 * 获取部门列表
 * @param params
 * @returns
 */
export function getSysDeptList(params: Record<string, any>) {
  return request.get(`data_scope/sysdept`, { params });
}

/**
 * 获取部门详情
 * @param dept_id 部门dept_id
 * @returns
 */
export function getSysDeptInfo(dept_id: number) {
  return request.get(`data_scope/sysdept/${dept_id}`);
}

/**
 * 添加部门
 * @param params
 * @returns
 */
export function addSysDept(params: Record<string, any>) {
  return request.post("data_scope/sysdept", params, {
    showErrorMessage: true,
    showSuccessMessage: true,
  });
}

/**
 * 获取部门详情
 * @param dept_id 部门dept_id
 * @returns
 */
export function getBindUser(dept_id: number) {
  return request.get(`data_scope/sysdept/bind/${dept_id}`);
}

/**
 * 添加用户和部门关联关系
 * @param params
 * @returns
 */
export function bindUserToDept(params: Record<string, any>) {
  return request.post("data_scope/sysdept/bind", params, {
    showErrorMessage: true,
    showSuccessMessage: true,
  });
}

/**
 * 编辑部门
 * @param dept_id
 * @param params
 * @returns
 */
export function editSysDept(params: Record<string, any>) {
  return request.put(`data_scope/sysdept/${params.dept_id}`, params, {
    showErrorMessage: true,
    showSuccessMessage: true,
  });
}

/**
 * 删除部门
 * @param dept_id
 * @returns
 */
export function deleteSysDept(dept_id: number) {
  return request.delete(`data_scope/sysdept/${dept_id}`, {
    showErrorMessage: true,
    showSuccessMessage: true,
  });
}

export function getWithSysDeptList(params: Record<string, any>) {
  return request.get("data_scope/sys_dept_all", { params });
}

/**
 * 同步角色信息
 * @param params
 * @returns
 */
export function syncRole() {
  return request.get(`data_scope/sysdept/sync_role`);
}

// USER_CODE_END -- data_scope_sys_dept

// USER_CODE_BEGIN -- data_scope_role_dept
/**
 * 获取数据权限的规则
 * @param params
 * @returns
 */
export function getScopeInfo(role_id: number) {
  return request.get(`data_scope/scope/info/${role_id}`);
}

/**
 * 保存数据权限的规则
 * @param params
 * @returns
 */
export function saveScopeInfo(params: Record<string, any>) {
  return request.post("data_scope/scope/info", params, {
    showErrorMessage: true,
    showSuccessMessage: true,
  });
}
/**
 * 获取数据权限的规则
 * @param params
 * @returns
 */
export function getScopeRuleList(params: Record<string, any>) {
  return request.get(`data_scope/scope/rule`, { params });
}
// USER_CODE_END -- data_scope_role_dept

