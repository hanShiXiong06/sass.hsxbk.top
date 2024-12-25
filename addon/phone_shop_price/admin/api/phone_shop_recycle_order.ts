import request from "@/utils/request";

/**
 * 获取回收订单列表
 */
export function getRecycleOrderList(params: any) {
  return request.get("/phone_shop_price/recycle_order/list", { params });
}

/**
 * 获取回收订单详情
 */
export function getRecycleOrderDetail(id: string) {
  return request.get(`/phone_shop_price/recycle_order/${id}`);
}

/**
 * 添加回收订单
 */
export function addRecycleOrder(data: any) {
  return request.post("/phone_shop_price/recycle_order", data);
}

/**
 * 编辑回收订单
 */
export function updateRecycleOrder(id: string, data: any) {
  return request.put(`/phone_shop_price/recycle_order/${id}`, data);
}

/**
 * 删除回收订单
 */
export function deleteRecycleOrder(id: string) {
  return request.delete(`/phone_shop_price/recycle_order/${id}`);
}

/**
 * 获取设备列表
 */
export function getRecycleDeviceList(params: any) {
  return request.get("/phone_shop_price/recycle_device", { params });
}

/**
 * 获取设备详情
 */
export function getRecycleDeviceDetail(id: string) {
  return request.get(`/phone_shop_price/recycle_device/${id}`);
}

/**
 * 添加设备
 */
export function addRecycleDevice(data: any) {
  return request.post("/phone_shop_price/recycle_device", data);
}

/**
 * 编辑设备
 */
export function updateRecycleDevice(id: string, data: any) {
  return request.put(`/phone_shop_price/recycle_device/${id}`, data);
}

/**
 * 删除设备
 */
export function deleteRecycleDevice(id: string) {
  return request.delete(`/phone_shop_price/recycle_device/${id}`);
}

/**
 * 更新设备价格
 */
export function updateDeviceFinalPrice(id: string, data: any) {
  return request.put(
    `/phone_shop_price/recycle_device/${id}/final_price`,
    data
  );
}

/**
 * 更新设备状态
 */
export function updateDeviceStatus(id: string, data: any) {
  return request.put(`/phone_shop_price/recycle_device/${id}/status`, data);
}

/**
 * 更新设备价格
 */
export function updateDevicePrice(id: string, data: any) {
  return request.put(`/phone_shop_price/recycle_device/${id}/price`, data);
}
