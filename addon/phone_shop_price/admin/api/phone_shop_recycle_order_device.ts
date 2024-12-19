import request from '@/utils/request'



// USER_CODE_BEGIN -- phone_shop_recycle_order_device
/**
 * 获取回收订单设备列表
 * @param params
 * @returns
 */
export function getPhoneShopRecycleOrderDeviceList(params: Record<string, any>) {
    return request.get(`phone_shop_price/phone_shop_recycle_order_device`, {params})
}

/**
 * 获取回收订单设备详情
 * @param id 回收订单设备id
 * @returns
 */
export function getPhoneShopRecycleOrderDeviceInfo(id: number) {
    return request.get(`phone_shop_price/phone_shop_recycle_order_device/${id}`);
}

/**
 * 添加回收订单设备
 * @param params
 * @returns
 */
export function addPhoneShopRecycleOrderDevice(params: Record<string, any>) {
    return request.post('phone_shop_price/phone_shop_recycle_order_device', params, { showErrorMessage: true, showSuccessMessage: true })
}

/**
 * 编辑回收订单设备
 * @param id
 * @param params
 * @returns
 */
export function editPhoneShopRecycleOrderDevice(params: Record<string, any>) {
    return request.put(`phone_shop_price/phone_shop_recycle_order_device/${params.id}`, params, { showErrorMessage: true, showSuccessMessage: true })
}

/**
 * 删除回收订单设备
 * @param id
 * @returns
 */
export function deletePhoneShopRecycleOrderDevice(id: number) {
    return request.delete(`phone_shop_price/phone_shop_recycle_order_device/${id}`, { showErrorMessage: true, showSuccessMessage: true })
}



// USER_CODE_END -- phone_shop_recycle_order_device