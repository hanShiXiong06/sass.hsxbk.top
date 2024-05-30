import request from '@/utils/request'


/***************************************************** 项目 ****************************************************/

/**
 * 获取项目列表(分页)
 * @param params
 * @returns
 */
export function getGoodsList(params: Record<string, any>) {
    return request.get(`o2o/goods`, {params})
}
/**
 * 获取项目列表（不分页）
 * @returns
 */
export function getGoodsListTo() {
    return request.get(`o2o/goods/list`)
}

/**
 * 添加项目
 * @param params
 * @returns
 */
export function addGoods(params: Record<string, any>) {
    return request.post('o2o/goods', params, {showErrorMessage: true, showSuccessMessage: true})
}

/**
 * 编辑项目
 * @param params
 * @returns
 */
export function editGoods(params: Record<string, any>) {
    return request.put(`o2o/goods/${params.goods_id}`, params, {showErrorMessage: true, showSuccessMessage: true})
}

/**
 * 项目详情
 * @param id
 * @returns
 */
export function getGoodsDetail(params: Record<string, any>) {
    return request.get(`o2o/goods/init`,{params})
}
/**
 * 修改项目状态(上架,下架)
 * @param id
 * @returns
 */
export function editGoodsStatus(params: Record<string, any>) {
    return request.put(`o2o/goods/status/${params.goods_id}`, params, {
        showErrorMessage: true,
        showSuccessMessage: true
    })
}
/**
 * 修改项目排序
 * @param id
 * @returns
 */
export function editGoodsSort(params: Record<string, any>) {
    return request.put(`o2o/goods/sort/${params.goods_id}`, params, {
        showErrorMessage: true,
        showSuccessMessage: true
    })
}
/**
 * 删除项目
 * @param id
 * @returns
 */
export function deleteGoods(id: number) {
    return request.delete(`o2o/goods/${id}`, {showErrorMessage: true, showSuccessMessage: true})
}
