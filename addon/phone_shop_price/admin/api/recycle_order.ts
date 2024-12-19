import request from '@/utils/request'

// USER_CODE_BEGIN -- phone_shop_recycle_order
/**
 * 获取回收订单主列表
 * @param params
 * @returns
 */
export function getRecycleOrderList(params: Record<string, any>) {
    return request.get(`phone_shop_price/recycle_order`, {params})
}

/**
 * 获取回收订单主详情
 * @param id 回收订单主id
 * @returns
 */
export function getRecycleOrderInfo(id: number) {
    return request.get(`phone_shop_price/recycle_order/${id}`);
}

/**
 * 添加回收订单主
 * @param params
 * @returns
 */
export function addRecycleOrder(params: Record<string, any>) {
    return request.post('phone_shop_price/recycle_order', params, { showErrorMessage: true, showSuccessMessage: true })
}

/**
 * 编辑回收订单主
 * @param id
 * @param params
 * @returns
 */
export function editRecycleOrder(params: Record<string, any>) {
    return request.put(`phone_shop_price/recycle_order/${params.id}`, params, { showErrorMessage: true, showSuccessMessage: true })
}

/**
 * 删除回收订单主
 * @param id
 * @returns
 */
export function deleteRecycleOrder(id: number) {
    return request.delete(`phone_shop_price/recycle_order/${id}`, { showErrorMessage: true, showSuccessMessage: true })
}



// USER_CODE_END -- phone_shop_recycle_order
