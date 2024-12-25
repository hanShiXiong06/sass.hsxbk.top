<template>
    <div class="recycle-order-list h-full">
        <el-card class="box-card !border-none h-full" shadow="never">
            <!-- 面包屑导航 -->
            <div class="mb-4">
                <el-breadcrumb separator="/">
                    <el-breadcrumb-item :to="{ path: '/phone_shop_price' }">手机回收</el-breadcrumb-item>
                    <el-breadcrumb-item>回收订单列表</el-breadcrumb-item>
                </el-breadcrumb>
            </div>

            <!-- 搜索表单 -->
            <el-form :inline="true" :model="searchForm" class="mb-4">
                <el-form-item label="订单编号">
                    <el-input v-model="searchForm.order_id" placeholder="请输入订单编号" clearable />
                </el-form-item>
                <el-form-item label="寄件人">
                    <el-input v-model="searchForm.send_username" placeholder="请输入寄件人" clearable />
                </el-form-item>
                <el-form-item label="联系电话">
                    <el-input v-model="searchForm.telphone" placeholder="请输入联系电话" clearable />
                </el-form-item>
                <el-form-item label="订单状态">
                    <el-select v-model="searchForm.status" placeholder="请选择状态" clearable>
                        <el-option label="待收货" :value="1" />
                        <el-option label="已收货" :value="2" />
                        <el-option label="质检中" :value="3" />
                        <el-option label="待确认" :value="4" />
                        <el-option label="待打款" :value="5" />
                        <el-option label="已完成" :value="6" />
                        <el-option label="待退货" :value="7" />
                        <el-option label="已寄出" :value="8" />
                        <el-option label="已关闭" :value="9" />
                    </el-select>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="getList(1)">搜索</el-button>
                    <el-button @click="resetSearch">重置</el-button>
                </el-form-item>
            </el-form>
            <!-- 列表 -->
            <div class="list-container">
                <el-table v-loading="loading" :data="list" style="width: 100% ; height:850px;overflow:scroll">
                    <el-table-column type="expand">
                        <template #default="{ row }">
                            <el-table :data="row.devices || []" border>
                                <el-table-column prop="imei" label="IMEI" width="180" />
                                <el-table-column prop="model" label="型号" width="120" />
                                <el-table-column prop="initial_price" label="预估价格" width="120">
                                    <template #default="{ row: device }">
                                        {{ device.initial_price || 0 }} 元
                                    </template>
                                </el-table-column>
                                <el-table-column prop="final_price" label="最终价格" width="120">
                                    <template #default="{ row: device }">
                                        {{ device.final_price || 0 }} 元
                                    </template>
                                </el-table-column>
                                <el-table-column prop="status" label="状态" width="120">
                                    <template #default="{ row: device }">
                                        <el-tag :type="getDeviceStatusType(device.status)">
                                            {{ getDeviceStatusText(device.status) }}
                                        </el-tag>
                                    </template>
                                </el-table-column>
                                <el-table-column prop="check_result" label="验机结果" min-width="200"
                                    show-overflow-tooltip />
                                <el-table-column label="操作" width="200" fixed="right">
                                    <template #default="{ row: device }">
                                        <div class="el-button-group">
                                            <el-button type="primary" link @click="editDevice(device, row.id)">
                                                验机/定价
                                            </el-button>
                                            <el-button type="danger" link @click="handleDeviceDelete(device)">
                                                删除
                                            </el-button>
                                        </div>
                                    </template>
                                </el-table-column>
                            </el-table>
                        </template>
                    </el-table-column>
                    <el-table-column prop="order_no" label="id" min-width="180" show-overflow-tooltip>
                        <!-- 订单和运单号 -->
                        <template #default="{ row }">
                            <div class="flex flex-col">
                                <span>订单:{{ row.order_no }}</span> <br>

                                <span v-if="row.delivery_type == 'mail'">运单:{{ row.express_id }}</span>
                                <span v-else>到店回收订单</span>
                            </div>
                        </template>
                    </el-table-column>
                    <el-table-column prop="send_username" label="寄件人" width="120" />
                    <el-table-column prop="telphone" label="联系电话" width="120" />
                    <el-table-column label="设备统计" width="200">
                        <template #default="{ row }">
                            <el-tooltip effect="dark" placement="top" :content="`总数量: ${row.device_stats.total}
                                待验机: ${row.device_stats.pending}
                                验机中: ${row.device_stats.checking}
                                已验机: ${row.device_stats.checked}
                                已完成: ${row.device_stats.completed}
                                已退货: ${row.device_stats.returned}  
                                总金额: ¥${row.device_stats.total_amount}`">
                                <div class="device-stats">

                                    <div class="stats-row">
                                        <span class="stats-label">用户统计总数量:</span>
                                        <span class="stats-value">{{ row.count }}</span>
                                    </div>
                                    <div class="stats-row">
                                        <span class="stats-label">核验总数量:</span>
                                        <span class="stats-value">{{ row.device_stats.total }}</span>
                                    </div>
                                    <div class="stats-row">
                                        <span class="stats-label">总金额:</span>
                                        <span class="stats-value">¥{{ row.device_stats.total_amount }}</span>
                                    </div>
                                </div>
                            </el-tooltip>
                        </template>
                    </el-table-column>
                    <el-table-column prop="status" label="订单状态" width="120">
                        <template #default="{ row }">
                            <el-tag :type="getOrderStatusType(row.status)">
                                {{ getOrderStatusText(row.status) }}
                            </el-tag>
                        </template>
                    </el-table-column>
                    <el-table-column prop="create_at" label="创建时间" width="180">
                        <template #default="{ row }">
                            {{ formatTimestamp(row.create_at) }}
                        </template>
                    </el-table-column>
                    <el-table-column label="操作" width="180" fixed="right">
                        <template #default="{ row }">
                            <el-button-group>

                                <!-- 待签收状态 -->
                                <template v-if="row.status == 1">
                                    <el-button type="success" link @click="handleReceive(row)">
                                        确认收货
                                    </el-button>
                                    <el-button type="success" link @click="addDevice(row)">
                                        添加设备
                                    </el-button>
                                    <el-button type="danger" link @click="handleCancel(row)">
                                        取消订单
                                    </el-button>

                                </template>

                                <!-- 质检中状态 -->
                                <template v-else-if="row.status == 2">
                                    <!-- 无操作按钮 -->
                                </template>

                                <!-- 质检完成状态 -->
                                <template v-else-if="row.status == 3">
                                    <!-- 无操作按钮 -->
                                </template>

                                <!-- 客户确认状态 -->
                                <template v-else-if="row.status == 4">
                                    <el-button type="primary" link @click="viewPayment(row)">
                                        查看收款码
                                    </el-button>
                                    <el-button v-if="canReturn(row)" type="warning" link @click="handleReturn(row)">
                                        申请退货
                                    </el-button>
                                    <el-button type="success" link @click="handleComplete(row)">
                                        完成订单
                                    </el-button>
                                </template>
                            </el-button-group>
                        </template>
                    </el-table-column>
                </el-table>

                <!-- 分页 -->
                <div class="mt-4 flex justify-end">
                    <el-pagination v-model:current-page="page" v-model:page-size="limit" :page-sizes="[10, 20, 50, 100]"
                        :total="total" layout="total, sizes, prev, pager, next, jumper" @size-change="handleSizeChange"
                        @current-change="handleCurrentChange" />
                </div>
            </div>
        </el-card>

        <!-- 修改状态弹窗 -->
        <el-dialog v-model="editVisible" title="修改订单状态" width="400px" destroy-on-close>
            <el-form :model="editForm" label-width="100px">
                <el-form-item label="当前状态">
                    <el-tag :type="getOrderStatusType(editForm.currentStatus)">
                        {{ getOrderStatusText(editForm.currentStatus) }}
                    </el-tag>
                </el-form-item>
                <el-form-item label="目标状态">
                    <el-select v-model="editForm.status" placeholder="请选择状态">
                        <el-option v-for="status in getAvailableNextStatus(editForm.currentStatus)" :key="status"
                            :label="getOrderStatusText(status)" :value="status" />
                    </el-select>
                </el-form-item>
            </el-form>
            <template #footer>
                <el-button @click="editVisible = false">取消</el-button>
                <el-button type="primary" @click="submitEdit" :disabled="!editForm.status">确定</el-button>
            </template>
        </el-dialog>

        <!-- 收款信息弹窗 -->
        <el-dialog v-model="paymentVisible" title="收款信息" width="500px" destroy-on-close>
            <el-form :model="paymentForm" label-width="100px">
                <el-form-item label="收款账号">
                    <el-input v-model="paymentForm.account" disabled />
                </el-form-item>
                <el-form-item label="收款方式">
                    <el-input v-model="paymentForm.pay_type" disabled />
                </el-form-item>
                <el-form-item label="收款金额">
                    <el-input v-model="paymentForm.amount" disabled>
                        <template #append>元</template>
                    </el-input>
                </el-form-item>
            </el-form>
            <template #footer>
                <el-button @click="paymentVisible = false">关闭</el-button>
            </template>
        </el-dialog>

        <!-- 设备编辑弹窗 -->
        <el-dialog v-model="deviceEditVisible" title="设备验机结果和定价" width="600px" destroy-on-close>
            <el-form :model="deviceEditForm" label-width="100px" :rules="deviceEditRules" ref="deviceEditFormRef">
                <el-form-item label="IMEI">
                    <el-input v-model="deviceEditForm.imei" disabled />
                </el-form-item>
                <el-form-item label="型号">
                    <el-input v-model="deviceEditForm.model" />
                </el-form-item>
                <el-form-item label="当前状态">
                    <el-tag :type="getDeviceStatusType(deviceEditForm.currentStatus)">
                        {{ getDeviceStatusText(deviceEditForm.currentStatus) }}
                    </el-tag>
                </el-form-item>

                <el-form-item label="验机结果" prop="check_result">
                    <el-input v-model="deviceEditForm.check_result" type="textarea" :rows="3" placeholder="请输入验机结果" />
                </el-form-item>
                <el-form-item label="外观照片">
                    <upload-image v-model="deviceEditForm.check_images" :limit="10" />
                </el-form-item>
                <el-form-item label="预估价格">
                    <el-input v-model="deviceEditForm.initial_price" type="number" disabled>
                        <template #append>元</template>
                    </el-input>
                </el-form-item>
                <el-form-item label="最终报价" prop="final_price">
                    <el-input v-model="deviceEditForm.final_price" type="number">
                        <template #append>元</template>
                    </el-input>
                </el-form-item>
                <el-form-item label="价格备注" prop="price_remark">
                    <el-input v-model="deviceEditForm.price_remark" type="textarea" :rows="2" placeholder="请输入价格备注" />
                </el-form-item>

            </el-form>
            <template #footer>

                <el-button @click="deviceEditVisible = false">取消</el-button>
                <el-button type="success" @click="submitDeviceEdit('CHECK_PRICE')">
                    确认质检并定价
                </el-button>
                <!--  <template
                     v-if="deviceEditForm.currentStatus === DeviceStatus.PENDING_CHECK" >
                    <el-button type="success" @click="submitDeviceEdit('CHECK_PRICE')">
                        确认质检并定价
                    </el-button>
                </template> -->
                <!-- <template v-else-if="deviceEditForm.currentStatus === DeviceStatus.CHECKING">
                    <el-button type="primary" @click="submitDeviceEdit()" :loading="deviceEditLoading">
                        完成质检
                    </el-button>
                </template> -->
                <!-- <template v-else-if="deviceEditForm.currentStatus === DeviceStatus.CHECKED">
                    <el-button type="primary" @click="submitDeviceEdit()" :loading="deviceEditLoading">
                        确认价格
                    </el-button>
                </template> -->
                <!-- <template v-else>
                    <el-button type="primary" @click="submitDeviceEdit()" :loading="deviceEditLoading">
                        完成
                    </el-button>
                </template> -->
            </template>
        </el-dialog>

        <!-- 添加设备弹窗 -->
        <el-dialog v-model="deviceAddVisible" title="添加设备" width="600px" destroy-on-close>
            <el-form :model="deviceAddForm" label-width="100px">
                <el-form-item label="IMEI" required>
                    <el-input v-model="deviceAddForm.imei" placeholder="请输入设备IMEI" />
                </el-form-item>
                <el-form-item label="型号" required>
                    <el-input v-model="deviceAddForm.model" placeholder="请输入设备型号" />
                </el-form-item>
                <el-form-item label="预估价格" required>
                    <el-input v-model="deviceAddForm.initial_price" type="number">
                        <template #append>元</template>
                    </el-input>
                </el-form-item>
                <el-form-item label="备注">
                    <el-input v-model="deviceAddForm.remark" type="textarea" :rows="2" placeholder="请输入备注" />
                </el-form-item>
            </el-form>
            <template #footer>
                <el-button @click="deviceAddVisible = false">取消</el-button>
                <el-button type="primary" @click="submitDeviceAdd">确定</el-button>
            </template>
        </el-dialog>


    </div>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted } from 'vue'
import { ElMessage, ElMessageBox } from 'element-plus'
import type { FormInstance, UploadFile } from 'element-plus'
import { Plus } from '@element-plus/icons-vue'
import dayjs from 'dayjs'
import { getRecycleOrderList, updateRecycleOrder, deleteRecycleOrder, deleteRecycleDevice, updateDeviceStatus, addRecycleDevice, getOrderStatus, getDeviceStatus } from '@/addon/phone_shop_price/api/recycle_order'

// API请求参数类型
interface DeviceStatusUpdateParams {
    order_id: number
    status: number
    check_result?: string
    check_images?: string
    final_price?: number
    price_remark?: string
    check_status?: number
}

// 类型定义
interface DeviceStats {
    total: number
    PENDING_RECEIVE: number
    checking: number
    checked: number
    completed: number
    returned: number
    total_amount: number
}

interface Device {
    id: number
    imei: string
    model: string
    status: number
    initial_price: number
    final_price: number
    check_result: string | null
    check_images?: string
    price_remark?: string
}

interface Order {
    id: number
    order_no: string
    send_username: string
    telphone: string
    status: number
    create_at: number
    devices: Device[]
    device_stats: DeviceStats
    account?: string
    pay_type?: string
    amount?: number
    peding?: number
    is_returned?: boolean
}

interface SearchForm {
    order_id: string
    send_username: string
    telphone: string
    status: number | ''
}

// 状态常量
const OrderStatus = {
    PENDING_CONFIRM: 1, // 待确认
    CHECKING: 2, // 质检中
    CHECKED: 3, // 已质检
    PAYING: 4, // 待打款
    PAYED: 5, // 已打款
    COMPLETED: 6, // 已完成
    CANCELLED: 7, // 已取消
    RETURNING: 8, // 退回中
    RETURNED: 9 // 已退回
} as const

const DeviceStatus = {
    PENDING_CHECK: 1, // 待质检
    CHECKING: 2, // 质检中
    CHECKED: 3, // 已质检
    CONFIRMED: 4, // 已确认
    COMPLETED: 5, // 已完成
    RETURNED: 6 // 已退回
} as const

// 状态文本映射（响应式）
const orderStatusMap = ref<Record<number, string>>({})
const deviceStatusMap = ref<Record<number, string>>({})

// 初始化
onMounted(() => {
    // 获取订单状态列表
    getOrderStatus().then((res: any) => {
        console.log('订单状态列表:', res.data)
        orderStatusMap.value = res.data
    }).catch((err: any) => {
        console.error('获取订单状态列表失败:', err)
    })

    // 获取设备状态列表
    getDeviceStatus().then((res: any) => {
        console.log('设备状态列表:', res.data)
        deviceStatusMap.value = res.data
    }).catch((err: any) => {
        console.error('获取设备状态列表失败:', err)
    })

    getList()
})

// 获取订单状态文字
const getOrderStatusText = (status: number) => {
    return orderStatusMap.value[status] || '未知状态'
}

// 获取设备状态文字
const getDeviceStatusText = (status: number) => {
    return deviceStatusMap.value[status] || '未知状态'
}

// 响应式数据
const loading = ref(false)
const list = ref<Order[]>([])
const page = ref(1)
const limit = ref(10)
const total = ref(0)

// 搜索表单
const searchForm = reactive<SearchForm>({
    order_id: '',
    send_username: '',
    telphone: '',
    status: ''
})

// 编辑表单
const editVisible = ref(false)
const editForm = reactive({
    id: 0,
    currentStatus: 0,
    status: 0
})

// 收款信息
const paymentVisible = ref(false)
const paymentForm = reactive({
    account: '',
    pay_type: '',
    amount: 0
})

// 设备编辑
const deviceEditVisible = ref(false)
interface DeviceEditForm {
    id: number
    order_id: number
    imei: string
    model: string
    currentStatus: number
    check_result: string
    check_images: string
    initial_price: number
    final_price: number
    price_remark: string
}

const deviceEditForm = reactive<DeviceEditForm>({
    id: 0,
    order_id: 0,
    imei: '',
    model: '',
    currentStatus: 0,
    check_result: '',
    check_images: '',
    initial_price: 0,
    final_price: 0,
    price_remark: ''
})

// 添加设备
const deviceAddVisible = ref(false)
const deviceAddForm = reactive({
    order_id: 0,
    imei: '',
    model: '',
    initial_price: 0,
    remark: ''
})

// 收货相关
const receiveVisible = ref(false)
const receiveLoading = ref(false)
const receiveFormRef = ref<FormInstance>()
const receiveForm = reactive({
    order_id: 0,
    receiver: '',
    remark: '',
    images: [] as UploadFile[]
})

const receiveRules = {
    receiver: [
        { required: true, message: '请输入收货人姓名', trigger: 'blur' }
    ],
    remark: [
        { required: true, message: '请输入收货备注信息', trigger: 'blur' }
    ]
}

// 设备编辑表单验证规则
const deviceEditRules = {
    check_result: [
        { required: true, message: '请输入验机结果', trigger: 'blur' }
    ],
    final_price: [
        { required: true, message: '请输入最终价格', trigger: 'blur' },
        { min: 0, message: '价格必须大于0', trigger: 'blur' }
    ],
    price_remark: [
        { required: true, message: '请输入价格备注', trigger: 'blur' }
    ]
}

const deviceEditFormRef = ref<FormInstance>()
const deviceEditLoading = ref(false)

// 获取设备操作按钮文字
const getDeviceActionText = (status: number) => {
    const actionMap: Record<number, string> = {
        [DeviceStatus.PENDING_CHECK]: '确认质检并定价',
        [DeviceStatus.CHECKING]: '完成质检',
        [DeviceStatus.CHECKED]: '确认价格',
        [DeviceStatus.CONFIRMED]: '完成'
    }
    return actionMap[status] || '确定'
}

// 获取设备操作类型
const getDeviceAction = (status: number): 'CHECK' | 'CHECK_PRICE' | undefined => {
    const actionMap: Record<number, 'CHECK' | 'CHECK_PRICE' | undefined> = {
        [DeviceStatus.PENDING_CHECK]: 'CHECK_PRICE',
        [DeviceStatus.CHECKING]: undefined,
        [DeviceStatus.CHECKED]: undefined,
        [DeviceStatus.CONFIRMED]: undefined
    }
    return actionMap[status]
}

// 方法实现
const getList = async (p = 1) => {
    loading.value = true
    try {
        const response = await getRecycleOrderList({
            page: p,
            limit: limit.value,
            ...searchForm
        })

        list.value = response.data.data || []
        total.value = response.data.total || 0

    } catch (error) {
        console.error('获取列表失败:', error)
        ElMessage.error('获取列表失败')
    } finally {
        loading.value = false
    }
}

const resetSearch = () => {
    Object.keys(searchForm).forEach(key => {
        searchForm[key as keyof SearchForm] = ''
    })
    getList(1)
}

const handleSizeChange = (val: number) => {
    limit.value = val
    getList(1)
}

const handleCurrentChange = (val: number) => {
    page.value = val
    getList(val)
}

const formatTimestamp = (timestamp: number) => {
    return dayjs(timestamp * 1000).format('YYYY-MM-DD HH:mm:ss')
}

const getOrderStatusType = (status: number) => {
    const typeMap: Record<number, string> = {
        [OrderStatus.PENDING_CONFIRM]: 'warning',
        [OrderStatus.CHECKING]: 'primary',
        [OrderStatus.CHECKED]: 'success',
        [OrderStatus.PAYING]: 'warning',
        [OrderStatus.PAYED]: 'warning',
        [OrderStatus.COMPLETED]: 'success',
        [OrderStatus.CANCELLED]: 'info',
        [OrderStatus.RETURNING]: 'warning',
        [OrderStatus.RETURNED]: 'info'
    }
    return typeMap[status] || 'info'
}

const getDeviceStatusType = (status: number) => {
    const typeMap: Record<number, string> = {
        [DeviceStatus.PENDING_CHECK]: 'warning',
        [DeviceStatus.CHECKING]: 'primary',
        [DeviceStatus.CHECKED]: 'success',
        [DeviceStatus.CONFIRMED]: 'warning',
        [DeviceStatus.COMPLETED]: 'success',
        [DeviceStatus.RETURNED]: 'info'
    }
    return typeMap[status] || 'info'
}

const getAvailableNextStatus = (currentStatus: number): number[] => {
    const statusFlow: Record<number, number[]> = {
        [OrderStatus.PENDING_CONFIRM]: [OrderStatus.CHECKING, OrderStatus.CANCELLED], // 待确认 -> 质检中/已取消
        [OrderStatus.CHECKING]: [OrderStatus.CHECKED, OrderStatus.CANCELLED], // 质检中 -> 已质检/已取消
        [OrderStatus.CHECKED]: [OrderStatus.PAYING, OrderStatus.CANCELLED], // 已质检 -> 待打款/已取消
        [OrderStatus.PAYING]: [OrderStatus.PAYED, OrderStatus.CANCELLED], // 待打款 -> 已打款/已取消
        [OrderStatus.PAYED]: [OrderStatus.COMPLETED, OrderStatus.CANCELLED], // 已打款 -> 已完成/已取消
        [OrderStatus.COMPLETED]: [OrderStatus.CANCELLED], // 已完成 -> 已取消
        [OrderStatus.CANCELLED]: [], // 已取消 -> 无
        [OrderStatus.RETURNING]: [OrderStatus.RETURNED, OrderStatus.CANCELLED], // 退回中 -> 已退回/已取消
        [OrderStatus.RETURNED]: [OrderStatus.CANCELLED] // 已退回 -> 已取消
    }
    return statusFlow[currentStatus] || []
}

const handleEdit = (row: Order) => {
    editForm.id = row.id
    editForm.currentStatus = row.status
    // 获取可选的下一个状态列表
    const nextStatusList = getAvailableNextStatus(row.status)
    // 设置默认值为第一个可选状态
    editForm.status = nextStatusList.length > 0 ? nextStatusList[0] : 0
    editVisible.value = true
}

const submitEdit = async () => {
    const availableStatus = getAvailableNextStatus(editForm.currentStatus)
    if (!availableStatus.includes(editForm.status)) {
        ElMessage.error('不允许的状态变化')
        return
    }
    try {
        const response = await updateRecycleOrder(String(editForm.id), {
            status: editForm.status,
            old_status: editForm.currentStatus
        })

        if (response.data) {
            ElMessage.success('状态更新成功')
            editVisible.value = false
            getList(page.value)
        } else {
            ElMessage.error('状态更新失败')
        }
    } catch (error) {
        console.error('更新状态失败:', error)
        ElMessage.error('状态更新失败')
    }
}

const handleDelete = async (row: Order) => {
    try {
        await ElMessageBox.confirm('确定删除该订单吗？', '提示', {
            type: 'warning'
        })
        await deleteRecycleOrder(row.id)
        ElMessage.success('删除成功')
        getList(page.value)
    } catch (error) {
        if (error !== 'cancel') {
            console.error('删除失败:', error)
            ElMessage.error('删除失败')
        }
    }
}

// 设备删除方法
const handleDeviceDelete = async (device: Device) => {
    try {
        await ElMessageBox.confirm('确定要删除该设备吗？', '提示', {
            type: 'warning'
        })
        await deleteRecycleDevice(device.id)
        ElMessage.success('删除成功')
        getList(page.value)
    } catch (error) {
        if (error !== 'cancel') {
            console.error('删除失败:', error)
            ElMessage.error('删除失败')
        }
    }
}

const viewPayment = (row: Order) => {
    paymentForm.account = row.account || ''
    paymentForm.pay_type = row.pay_type || ''
    paymentForm.amount = row.amount || 0
    paymentVisible.value = true
}

const editDevice = (device: Device, orderId: number) => {
    deviceEditForm.id = device.id
    deviceEditForm.order_id = orderId
    deviceEditForm.imei = device.imei
    deviceEditForm.model = device.model
    deviceEditForm.currentStatus = device.status
    deviceEditForm.check_result = device.check_result || ''
    deviceEditForm.check_images = device.check_images || ''
    deviceEditForm.initial_price = device.initial_price || 0
    deviceEditForm.final_price = device.final_price || 0
    deviceEditForm.price_remark = device.price_remark || ''
    deviceEditVisible.value = true
}

const submitDeviceEdit = async (action?: 'CHECK' | 'CHECK_PRICE') => {
    if (!deviceEditFormRef.value) return

    try {
        deviceEditLoading.value = true
        let params: DeviceStatusUpdateParams = {
            order_id: deviceEditForm.order_id,
            status: deviceEditForm.currentStatus,
            check_result: deviceEditForm.check_result,
            check_images: deviceEditForm.check_images,
            final_price: deviceEditForm.final_price,
            price_remark: deviceEditForm.price_remark,
            check_status: 1
        }

        // 处理待质检状态
        if (deviceEditForm.currentStatus === DeviceStatus.PENDING_CHECK) {
            // 验证质检结果字段
            await deviceEditFormRef.value.validateField('check_result')

            if (action === 'CHECK') {
                // 只确认质检，进入质检中状态
                params = {
                    ...params,
                    status: 3,
                    check_result: deviceEditForm.check_result,
                    check_images: deviceEditForm.check_images,
                    check_status: 0
                }
            } else if (action === 'CHECK_PRICE') {
                // 确认质检并定价，直接进入已确认状态
                await deviceEditFormRef.value.validate()
                params = {
                    ...params,
                    status: 3,
                    check_result: deviceEditForm.check_result,
                    check_images: deviceEditForm.check_images,
                    final_price: deviceEditForm.final_price,
                    price_remark: deviceEditForm.price_remark,
                    check_status: 1
                }
            }
        }
        // 处��质检中状态
        else if (deviceEditForm.currentStatus === DeviceStatus.CHECKING) {
            // 完成质检，进入已确认状态
            await deviceEditFormRef.value.validate()
            params = {
                ...params,
                status: 3,
                check_result: deviceEditForm.check_result,
                check_images: deviceEditForm.check_images,
                final_price: deviceEditForm.final_price,
                price_remark: deviceEditForm.price_remark,
                check_status: 1
            }
        }

        const response = await updateDeviceStatus(String(deviceEditForm.id), params)
        if (response.data) {
            ElMessage.success('更新设备信息成功')
            deviceEditVisible.value = false
            getList(page.value)
        } else {
            ElMessage.error('更新设备信息失败')
        }
    } catch (error) {
        console.error('更新设备信息失败:', error)
        ElMessage.error('更新设备信息失败')
    } finally {
        deviceEditLoading.value = false
    }
}

const addDevice = (row: Order) => {
    deviceAddForm.order_id = row.id
    deviceAddForm.imei = ''
    deviceAddForm.model = ''
    deviceAddForm.initial_price = 0
    deviceAddForm.remark = ''
    deviceAddVisible.value = true
}

const submitDeviceAdd = async () => {
    if (!deviceAddForm.imei || !deviceAddForm.model || !deviceAddForm.initial_price) {
        ElMessage.error('请填写完整的设备信息')
        return
    }
    try {
        await addRecycleDevice(deviceAddForm)
        ElMessage.success('添加设备成功')
        deviceAddVisible.value = false
        getList(page.value)
    } catch (error) {
        console.error('添加设备失败:', error)
        ElMessage.error('添加设备失败')
    }
}

const handleReceive = async (row: Order) => {
    // 确认收货只修改订单状态
    // 弹出一个confirm 对话框，确认收货
    const res = await ElMessageBox.confirm('确定要确认收货吗？', '提示', {
        type: 'warning'
    })
    if (!res) return
    updateRecycleOrder(String(row.id), {
        status: 2,
        old_status: row.status
    })
}

const onUploadSuccess = (response: any, file: UploadFile) => {
    if (response.code === 1) {
        receiveForm.images.push(file)
    } else {
        ElMessage.error('上传图片失败')
    }
}

const onUploadError = () => {
    ElMessage.error('上传图片失败')
}

const submitReceive = async () => {
    if (!receiveFormRef.value) return

    try {
        await receiveFormRef.value.validate()
        receiveLoading.value = true

        await updateRecycleOrder(String(receiveForm.order_id), {
            status: OrderStatus.PENDING_CONFIRM,
            receiver: receiveForm.receiver,
            receive_remark: receiveForm.remark,
            receive_images: receiveForm.images.map(file => file.url)
        })

        ElMessage.success('确认收货成功')
        receiveVisible.value = false
        getList(page.value)
    } catch (error) {
        console.error('确认收货失败:', error)
        ElMessage.error('确认收货失败')
    } finally {
        receiveLoading.value = false
    }
}

// 取消订单
const handleCancel = async (row: Order) => {
    try {
        await ElMessageBox.confirm('确定要取消该订单吗？', '提示', {
            type: 'warning'
        })
        await updateRecycleOrder(String(row.id), {
            status: OrderStatus.CANCELLED,
            old_status: row.status
        })
        ElMessage.success('订单已取消')
        getList(page.value)
    } catch (error) {
        if (error !== 'cancel') {
            console.error('取消订单失败:', error)
            ElMessage.error('取消订单失败')
        }
    }
}

// 检查是否可以退货
const canReturn = (row: Order): boolean => {
    // 这里可以添加具体的退货条件判断
    return row.status === OrderStatus.PAYING && !row.is_returned
}

// 申请退货
const handleReturn = async (row: Order) => {
    try {
        await ElMessageBox.confirm('确定要申请退货吗？', '提示', {
            type: 'warning'
        })
        await updateRecycleOrder(String(row.id), {
            status: OrderStatus.RETURNING,
            old_status: row.status
        })
        ElMessage.success('退货申请已提交')
        getList(page.value)
    } catch (error) {
        if (error !== 'cancel') {
            console.error('申请退货失败:', error)
            ElMessage.error('申请退货失败')
        }
    }
}

// 完成订单
const handleComplete = async (row: Order) => {
    try {
        await ElMessageBox.confirm('确定要完成该订单吗？', '提示', {
            type: 'warning'
        })
        await updateRecycleOrder(String(row.id), {
            status: OrderStatus.COMPLETED,
            old_status: row.status
        })
        ElMessage.success('订单已完成')
        getList(page.value)
    } catch (error) {
        if (error !== 'cancel') {
            console.error('完成订单失败:', error)
            ElMessage.error('完成订单失败')
        }
    }
}
</script>

<style lang="scss" scoped>
.recycle-order-list {
    padding: 0px;

    box-sizing: border-box;

    .el-card {
        height: calc(100vh - 40px);
        display: flex;
        flex-direction: column;
    }

    :deep(.el-card__body) {
        flex: 1;
        display: flex;
        flex-direction: column;
        overflow: hidden;
        padding: 20px;

        .el-table {
            flex: 1;
            overflow: hidden;

            :deep(.el-table__inner-wrapper) {
                height: 100%;
            }

            :deep(.el-table__body-wrapper) {
                overflow-y: auto;
            }
        }
    }
}

.el-table {
    :deep(.el-table__expanded-cell) {
        padding: 20px !important;
    }
}

.el-button-group {
    .el-button {
        margin-left: 0 !important;
    }
}

.device-stats {
    padding: 4px 8px;

    .stats-row {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 2px 0;

        .stats-label {
            color: #666;
            font-size: 13px;
        }

        .stats-value {
            font-weight: 500;
            color: #409EFF;
        }
    }
}

.upload-demo {
    height: 100px;
}

// 添加上传组件的样式
:deep(.el-upload--picture-card) {
    --el-upload-picture-card-size: 100px;
}

:deep(.el-upload-list--picture-card) {
    --el-upload-list-picture-card-size: 100px;
    display: flex;
    flex-wrap: wrap;
    gap: 8px;

    .el-upload-list__item {
        margin: 0;
    }
}

:deep(.el-upload-list--picture-card .el-upload-list__item) {
    width: var(--el-upload-list-picture-card-size);
    height: var(--el-upload-list-picture-card-size);
}

:deep(.el-upload--picture-card) {
    width: var(--el-upload-picture-card-size);
    height: var(--el-upload-picture-card-size);
}
</style>