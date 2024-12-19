import request from '@/utils/request'

// 获取回收订单列表
export function getPhoneShopRecycleOrders(params: any) {
    return request.get('/phone_shop_price/admin/phone_shop_recycle_order/lists', { params })
}

// 获取回收订单详情
export function getPhoneShopRecycleOrder(id: number) {
    return request.get(`/phone_shop_price/admin/phone_shop_recycle_order/detail/${id}`)
}

// 添加回收订单
export function addPhoneShopRecycleOrder(data: any) {
    return request.post('/phone_shop_price/admin/phone_shop_recycle_order/add', data)
}

// 编辑回收订单
export function editPhoneShopRecycleOrder(data: any) {
    return request.post('/phone_shop_price/admin/phone_shop_recycle_order/edit', data)
}

// 删除回收订单
export function deletePhoneShopRecycleOrder(id: number) {
    return request.post(`/phone_shop_price/admin/phone_shop_recycle_order/delete/${id}`)
}

// 获取订单设备列表
export function getPhoneShopRecycleOrderDevices(orderId: number) {
    return request.get(`/phone_shop_price/admin/phone_shop_recycle_order_device/lists/${orderId}`)
}

// 添加订单设备
export function addPhoneShopRecycleOrderDevice(data: any) {
    return request.post('/phone_shop_price/admin/phone_shop_recycle_order_device/add', data)
}

// 编辑订单设备
export function editPhoneShopRecycleOrderDevice(data: any) {
    return request.post('/phone_shop_price/admin/phone_shop_recycle_order_device/edit', data)
}

// 删除订单设备
export function deletePhoneShopRecycleOrderDevice(id: number) {
    return request.post(`/phone_shop_price/admin/phone_shop_recycle_order_device/delete/${id}`)
}

// 更新设备状态
export function updatePhoneShopRecycleOrderDeviceStatus(id: number, status: number, checkResult: string) {
    return request.post('/phone_shop_price/admin/phone_shop_recycle_order_device/update_status', {
        id,
        status,
        check_result: checkResult
    })
}

// 更新设备价格
export function updatePhoneShopRecycleOrderDevicePrice(id: number, finalPrice: number, priceRemark: string) {
    return request.post('/phone_shop_price/admin/phone_shop_recycle_order_device/update_price', {
        id,
        final_price: finalPrice,
        price_remark: priceRemark
    })
}


// USER_CODE_BEGIN -- phone_shop_recycle_order
/**
 * 获取回收订单主列表
 * @param params
 * @returns
 */
export function getPhoneShopRecycleOrderList(params: Record<string, any>) {
    return request.get(`phone_shop_price/phone_shop_recycle_order`, {params})
}

/**
 * 获取回收订单主详情
 * @param id 回收订单主id
 * @returns
 */
export function getPhoneShopRecycleOrderInfo(id: number) {
    return request.get(`phone_shop_price/phone_shop_recycle_order/${id}`);
}

/**
 * 添加回收订单主
 * @param params
 * @returns
 */
export function addPhoneShopRecycleOrder(params: Record<string, any>) {
    return request.post('phone_shop_price/phone_shop_recycle_order', params, { showErrorMessage: true, showSuccessMessage: true })
}

/**
 * 编辑回收订单主
 * @param id
 * @param params
 * @returns
 */
export function editPhoneShopRecycleOrder(params: Record<string, any>) {
    return request.put(`phone_shop_price/phone_shop_recycle_order/${params.id}`, params, { showErrorMessage: true, showSuccessMessage: true })
}

/**
 * 删除回收订单主
 * @param id
 * @returns
 */
export function deletePhoneShopRecycleOrder(id: number) {
    return request.delete(`phone_shop_price/phone_shop_recycle_order/${id}`, { showErrorMessage: true, showSuccessMessage: true })
}



// USER_CODE_END -- phone_shop_recycle_order
