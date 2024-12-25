export enum OrderStatus {
    PENDING_CONFIRM = 1,
    CHECKING = 2,
    CHECKED = 3,
    PAYING = 4,
    PAYED = 5,
    COMPLETED = 6,
    CANCELLED = 7,
    RETURNING = 8,
    RETURNED = 9
}

export enum DeliveryType {
    MAIL = 'mail',
    SELF = 'self'
}

export interface ApiResponse<T> {
    code: number
    data: T
    msg: string
}

export interface OrderListData {
    total: number
    data: OrderItem[]
}

export interface OrderListResponse {
    total: number
    data: OrderItem[]
}

export interface OrderItem {
    id: number
    order_no: string
    status: OrderStatus
    delivery_type: DeliveryType
    send_username: string
    telphone: string
    create_at: number
}

export interface SearchForm {
    order_no: string
    status: OrderStatus | ''
    delivery_type: DeliveryType | ''
    create_time: string[]
}

export interface OrderAction {
    type: string
    name: string
} 