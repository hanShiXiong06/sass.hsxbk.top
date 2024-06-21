
import request from '@/utils/request'

/***************************************************** CPS联盟 ****************************************************/
export function getCpsInfo(params : Record<string, any>) {
	return request.get(`tk_cps/cpsinfo`, params)
}
export function getActList(params : Record<string, any>) {
	return request.get(`tk_cps/actlist`, params)
}