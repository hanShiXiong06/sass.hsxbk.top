import { OrderStatus, DeliveryType, OrderAction } from '../types'

export { OrderStatus, DeliveryType }

export const ORDER_STATUS_TEXT: Record<OrderStatus, string> = {
    [OrderStatus.PENDING_CONFIRM]: '待确认',
    [OrderStatus.CHECKING]: '质检中',
    [OrderStatus.CHECKED]: '已质检',
    [OrderStatus.PAYING]: '打款中',
    [OrderStatus.PAYED]: '已打款',
    [OrderStatus.COMPLETED]: '已完成',
    [OrderStatus.CANCELLED]: '已取消',
    [OrderStatus.RETURNING]: '退回中',
    [OrderStatus.RETURNED]: '已退回'
}

export const DELIVERY_TYPE_TEXT: Record<DeliveryType, string> = {
    [DeliveryType.MAIL]: '邮寄',
    [DeliveryType.SELF]: '自送'
}

export const ORDER_ACTION: Record<string, OrderAction> = {
    confirm: { type: 'confirm', name: '确认' },
    check: { type: 'check', name: '质检' },
    pay: { type: 'pay', name: '打款' },
    complete: { type: 'complete', name: '完成' },
    cancel: { type: 'cancel', name: '取消' },
    return: { type: 'return', name: '退回' }
}

export function getStatusActions(status: OrderStatus): OrderAction[] {
    const actionMap: Record<OrderStatus, string[]> = {
        [OrderStatus.PENDING_CONFIRM]: ['confirm', 'cancel'],
        [OrderStatus.CHECKING]: ['check', 'cancel'],
        [OrderStatus.CHECKED]: ['pay', 'return'],
        [OrderStatus.PAYING]: ['complete', 'cancel'],
        [OrderStatus.PAYED]: ['complete'],
        [OrderStatus.COMPLETED]: [],
        [OrderStatus.CANCELLED]: [],
        [OrderStatus.RETURNING]: ['return'],
        [OrderStatus.RETURNED]: []
    }

    return (actionMap[status] || []).map(type => ORDER_ACTION[type])
} 