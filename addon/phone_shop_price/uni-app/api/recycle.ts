import request from "@/utils/request";

/***************************************************** hello world ****************************************************/
export function getCategoryTree() {
  return request.get(`phone_shop_price/recycle_category_tree`);
}
// 获取 商家的收货地址
export function getShopAddressList() {
  // 如果 request.get(`phone_shop_price/address_list`) 没有数据
  // 则请求 request.get(`shop_price/address_list`);
  return request.get(`phone_shop_price/address_list`).then((res) => {
    if (res.data.data.length === 0) {
      return request.get(`shop_price/address_list`);
    }
    return res;
  });
}

// ecycle_price/recycle_category/tree

export function getTree() {
  return request.get("recycle_price/recycle_category/tree");
}

export function getModelList(data: any) {
  // recycle_model/list
  return request.get("recycle_price/recycle_model/list", {
    brandId: data.id,
    typeId: data.typeId,
    limit: data.limit,
    page: data.page,
  });
}

// 获取问题列表 getQuetionList
export function getQuetionList(id: number) {
  return request.get("recycle_price/question/list", { modelId: id });
}

export function getPrice(data: any) {
  return request.post("recycle_price/calculate/price", data);
}

// 发送当前订单的回收信息
export function sendOrderInfo(data: any) {
  return request.post("recycle_price/phone_shop_recycle_order", data);
}
