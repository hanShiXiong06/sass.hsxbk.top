import request from '@/utils/request'





// USER_CODE_BEGIN -- phone_shop_site
/**
 * 获取站点(二手)管理列表
 * @param params
 * @returns
 */
export function getSiteList(params: Record<string, any>) {
    return request.get(`phone_shop/site`, {params})
}

/**
 * 获取站点(二手)管理详情
 * @param id 站点(二手)管理id
 * @returns
 */
export function getSiteInfo(id: number) {
    return request.get(`phone_shop/site/${id}`);
}

/**
 * 添加站点(二手)管理
 * @param params
 * @returns
 */
export function addSite(params: Record<string, any>) {
    return request.post('phone_shop/site', params, { showErrorMessage: true, showSuccessMessage: true })
}

/**
 * 编辑站点(二手)管理
 * @param id
 * @param params
 * @returns
 */
export function editSite(params: Record<string, any>) {
    return request.put(`phone_shop/site/${params.id}`, params, { showErrorMessage: true, showSuccessMessage: true })
}

/**
 * 删除站点(二手)管理
 * @param id
 * @returns
 */
export function deleteSite(id: number) {
    return request.delete(`phone_shop/site/${id}`, { showErrorMessage: true, showSuccessMessage: true })
}



// USER_CODE_END -- phone_shop_site
