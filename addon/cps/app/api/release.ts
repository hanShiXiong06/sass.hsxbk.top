import request from '@/utils/request'

/**
 * 获取话题列表
*/
export function getTopicList(params : Record<string, any>) {
	return request.get('o2o/posts/getTopicList', params)
}

/**
 * 创建帖子( 包括1-动态 2-收纳诊断 )
*/
export function createPosts(params : Record<string, any>) {
	return request.post('o2o/posts/create', params)
}

/**
 * 招募列表
*/
export function getRecruitList(params : Record<string, any>) {
	return request.get('o2o/technician/recruit/lists', params)
}

/**
 * 添加招募
*/
export function recruitAdd(params : Record<string, any>) {
	return request.post('o2o/technician/recruit/add', params)
}

/**
 * 创建案例
*/
export function createCase(params : Record<string, any>) {
	return request.post('o2o/case/create', params)
}
/**
 * 项目分类
 * @returns
 */
export function getCategory() {
    return request.get('o2o/category')
}
/**
 * 预约设置
 * @returns
 */
export function getReserveConfig() {
    return request.get('o2o/config/reserve')
}

/**
 * 创建闲置
 * @returns
 */
export function idleAdd(params : Record<string, any>) {
    return request.post('o2o/idle/add', params)
}