import request from '@/utils/request'

// 榜单分类列表
export function getRankList(params: Record<string, any>) {
    return request.get(`shop/rank`, params)
}

// 榜单商品列表
export function getRankGoodsList(params: Record<string, any>) {
    return request.get(`shop/rank/goods`, params)
}

// 获取排行榜配置
export function getRankConfig() {
    return request.get(`shop/rank/getRankConfig`)
}





