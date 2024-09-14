import request from "@/utils/request";

/***************************************************** hello world ****************************************************/
export function getCategoryTree() {
  return request.get(`phone_shop_price/recycle_category_tree`);
}
