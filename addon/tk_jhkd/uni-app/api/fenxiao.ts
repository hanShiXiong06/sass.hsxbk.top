
import request from '@/utils/request'

/***************************************************** 分销相关接口 ****************************************************/
export function checkFenxiao(params : Record<string, any>) {
	return request.post(`tk_jhkd/checkfenxiao`, params)
}
export function getFenxiaoInfo() {
	return request.get(`tk_jhkd/fenxiao/getfenxiaofnfo`)
}
/**
 * 获取分销会员
 * @param {any} params 
 * @return 
 */
export function getFenxiaoMember(params) {
	return request.get(`tk_jhkd/fenxiao/getfenxiaomember`, params)
}
/**
 * 获取分销订单
 * @param {any} params 
 * @return 
 */
export function getFenxiaoOrder(params) {
	return request.get(`tk_jhkd/fenxiao/getfenxiaoorder`, params)
}
export function getOrderData() {
	return request.get(`tk_jhkd/fenxiao/getorderdata`)
}