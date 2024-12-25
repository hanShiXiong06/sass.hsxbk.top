import request from "@/utils/request";

// 获取回收订单列表
export function getRecycleOrderList(params: any) {
  return request.get("/phone_shop_price/recycle_order/list", params);
}

// 更新回收订单状态
export function updateRecycleOrder(id: string, data: any) {
  return request.put(
    `/phone_shop_price/recycle_order/${id}`,

    data
  );
}

// 删除回收订单
export function deleteRecycleOrder(id: number) {
  return request.delete(`/phone_shop_price/recycle_order/${id}`);
}

// 更新设备状态
export function updateDeviceStatus(id: string, data: any) {
  return request.put(`/phone_shop_price/recycle_order/device/${id}`, data);
}

// 添加回收设备
export function addRecycleDevice(data: any) {
  return request.post("/phone_shop_price/recycle_order/device", data);
}
// 删除回收设备
export function deleteRecycleDevice(id: number) {
  return request.delete(`/phone_shop_price/recycle_order/device/${id}`);
}

/**
 * 获取订单状态列表
 */
export function getOrderStatus() {
  return request.get("/phone_shop_price/recycle_order/status");
}

/**
 * 获取设备状态列表
 */
export function getDeviceStatus() {
  return request.get("/phone_shop_price/recycle_order/device/status");
}
