<template>
    <div class="main-container">
        <el-card class="box-card !border-none" shadow="never">
            <el-button type="primary" @click="addOrder()">新增订单</el-button>
            <el-card class="box-card !border-none my-[10px] table-search-wrap" shadow="never">
                <el-form :inline="true" :model="orderTable.searchParam" ref="searchFormRef">
                    <el-form-item :label="t('orderFrom')" prop="order_from">
                        <el-select v-model="orderTable.searchParam.order_from" clearable class="input-item">
                            <el-option v-for="(item, index) in orderFromData" :key="index" :label="item"
                                :value="index"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="订单号" prop="order_id">
                        <el-input v-model="orderTable.searchParam.order_id" placeholder="请输入订单号" />
                    </el-form-item>

                    <el-form-item label="发单状态" prop="is_send">
                        <el-select class="w-[280px]" v-model="orderTable.searchParam.is_send" clearable
                            :placeholder="t('isSendPlaceholder')">
                            <el-option label="全部" value=""></el-option>
                            <el-option v-for="(item, index) in is_sendList" :key="index" :label="item.name"
                                :value="item.value" />
                        </el-select>
                    </el-form-item>

                    <el-form-item :label="t('orderStatus')" prop="order_status">
                        <el-select class="w-[280px]" v-model="orderTable.searchParam.order_status" clearable
                            :placeholder="t('orderStatusPlaceholder')">
                            <el-option label="全部" value=""></el-option>
                            <el-option v-for="(item, index) in order_statusList" :key="index" :label="item.name"
                                :value="item.value" />
                        </el-select>
                    </el-form-item>


                    <el-form-item :label="t('refundStatus')" prop="refund_status">
                        <el-select class="w-[280px]" v-model="orderTable.searchParam.refund_status" clearable
                            :placeholder="t('refundStatusPlaceholder')">
                            <el-option label="全部" value=""></el-option>
                            <el-option v-for="(item, index) in refund_statusList" :key="index" :label="item.name"
                                :value="item.value" />
                        </el-select>
                    </el-form-item>

                    <el-form-item :label="t('remark')" prop="remark">
                        <el-input v-model="orderTable.searchParam.remark" :placeholder="t('remarkPlaceholder')" />
                    </el-form-item>
                    <el-form-item :label="t('createTime')" prop="create_time">
                        <el-date-picker v-model="orderTable.searchParam.create_time" type="datetimerange"
                            format="YYYY-MM-DD hh:mm:ss" :start-placeholder="t('startDate')"
                            :end-placeholder="t('endDate')" />
                    </el-form-item>


                    <el-form-item>
                        <el-button type="primary" @click="loadOrderList()">{{ t('search') }}</el-button>
                        <el-button @click="resetForm(searchFormRef)">{{ t('reset') }}</el-button>
                    </el-form-item>
                </el-form>
            </el-card>

            <div class="mt-[10px]">
                <el-table :data="orderTable.data" size="large" v-loading="orderTable.loading">
                    <template #empty>
                        <span>{{ !orderTable.loading ? t('emptyData') : '' }}</span>
                    </template>
                    <el-table-column prop="order_id" label="订单号" min-width="160" :show-overflow-tooltip="true" />

                    <el-table-column prop="order_from" :label="t('orderFrom')" min-width="120"
                        :show-overflow-tooltip="true" />
                    <el-table-column prop="member_id_name" :label="t('memberId')" min-width="120"
                        :show-overflow-tooltip="true" />


                    <el-table-column prop="order_money" :label="t('orderMoney')" min-width="120"
                        :show-overflow-tooltip="true" />

                    <el-table-column prop="order_discount_money" label="优惠金额" min-width="120"
                        :show-overflow-tooltip="true" />

                    <el-table-column label="发单状态" min-width="180" align="center" :show-overflow-tooltip="true">

                        <template #default="{ row }">
                            <div v-for="(item, index) in is_sendList">
                                <el-tag v-if="item.value == row.is_send">{{ item.name }}</el-tag>
                            </div>
                        </template>
                    </el-table-column>

                    <el-table-column :label="t('orderStatus')" min-width="180" align="center"
                        :show-overflow-tooltip="true">

                        <template #default="{ row }">
                            <div v-for="(item, index) in order_statusList">
                                <el-tag v-if="item.value == row.order_status && row.order_status != -1">{{ item.name
                                    }}</el-tag>
                                <el-tag type="warning"
                                    v-if="item.value == row.order_status && row.order_status == -1">{{
                                        item.name
                                    }}</el-tag>
                            </div>
                        </template>
                    </el-table-column>

                    <el-table-column :label="t('refundStatus')" min-width="180" align="center"
                        :show-overflow-tooltip="true">

                        <template #default="{ row }">
                            <div v-for="(item, index) in refund_statusList">
                                <el-tag v-if="item.value == row.refund_status">{{ item.name }}</el-tag>
                            </div>
                        </template>
                    </el-table-column>

                    <el-table-column prop="remark" :label="t('remark')" min-width="120" :show-overflow-tooltip="true" />

                    <el-table-column :label="t('operation')" fixed="right" min-width="220">

                        <template #default="{ row }">
                            <el-button type="primary" link @click="editEvent(row)">详情</el-button>
                            <el-button type="primary" v-if="row.order_status == -1 || row.order_status == 0" link
                                @click="deleteEvent(row.id)">{{
                                    t('delete') }}</el-button>
                            <el-button type="primary" v-if="row.order_status == 1 && row.is_send == 0" link
                                @click="sendEvent(row.order_id)">发单</el-button>
                            <el-button type="primary" v-if="row.order_status == 1" link
                                @click="cancelEvent(row.id)">取消</el-button>
                        </template>
                    </el-table-column>

                </el-table>
                <div class="mt-[16px] flex justify-end">
                    <el-pagination v-model:current-page="orderTable.page" v-model:page-size="orderTable.limit"
                        layout="total, sizes, prev, pager, next, jumper" :total="orderTable.total"
                        @size-change="loadOrderList()" @current-change="loadOrderList" />
                </div>
            </div>

            <edit ref="editOrderDialog" @complete="loadOrderList" />
        </el-card>
    </div>
    <el-dialog v-model="showWap" title="使用移动端账号登录" width="420" height="740" align-center>
        <div class="mt-[-24px]">
            <button @click="goBack" class="mr-2">返回</button>
            <button @click="refreshPage">刷新</button>
        </div>

        <div class="mt-2">
            <iframe ref="myIframeRef" :src="link" width="375" height="667"></iframe>
        </div>
    </el-dialog>
</template>

<script lang="ts" setup>
import { reactive, ref, watch } from 'vue'
import { t } from '@/lang'
import { useDictionary } from '@/app/api/dict'
import { getOrderList, deleteOrder, getWithMemberList, getOrderPayType, getOrderFrom, sendOrder, cancelOrder, getLink } from '@/addon/tk_jhkd/api/order'
import { img } from '@/utils/common'
import { ElMessageBox, ElTag, FormInstance } from 'element-plus'
import Edit from '@/addon/tk_jhkd/views/order/components/order-edit.vue'
import { useRoute } from 'vue-router'
const myIframeRef = ref(null);

const goBack = () => {
    if (myIframeRef.value.contentWindow) {
        myIframeRef.value.contentWindow.history.back();
    }
};

const refreshPage = () => {
    if (myIframeRef.value.contentWindow) {
        myIframeRef.value.contentWindow.location.reload();
    }
};
const showWap = ref(false)
const addOrder = () => {
    showWap.value = true
}
const link = ref()
const getLinkData = async () => {
    link.value = await (await getLink()).msg
}
getLinkData()
const route = useRoute()
const pageName = route.meta.title;
const payTypeData = ref<any[]>([])
const orderFromData = ref([])
const sendEvent = async (order_id) => {
    await sendOrder(order_id)
    loadOrderList()
}
const cancelEvent = async (id) => {
    await cancelOrder({ id: id })
    loadOrderList()
}
const setFormData = async () => {
    // statusData.value = await (await getOrderStatus()).data
    payTypeData.value = await (await getOrderPayType()).data
    orderFromData.value = await (await getOrderFrom()).data
}
setFormData()
let orderTable = reactive({
    page: 1,
    limit: 10,
    total: 0,
    loading: true,
    data: [],
    searchParam: {
        "member_id": "",
        "order_from": "",
        "order_id": "",
        "is_send": "",
        "order_status": "",
        "refund_status": "",
        "remark": "",
        "create_time": []
    }
})

const searchFormRef = ref<FormInstance>()

// 选中数据
const selectData = ref<any[]>([])

// 字典数据
const is_sendList = ref([] as any[])
const is_sendDictList = async () => {
    is_sendList.value = await (await useDictionary('jhkd_is_send')).data.dictionary
}
is_sendDictList();
const is_pickList = ref([] as any[])
const is_pickDictList = async () => {
    is_pickList.value = await (await useDictionary('jhkd_is_pick')).data.dictionary
}
is_pickDictList();
const order_statusList = ref([] as any[])
const order_statusDictList = async () => {
    order_statusList.value = await (await useDictionary('jhkd_order_status')).data.dictionary
}
order_statusDictList();
const refund_statusList = ref([] as any[])
const refund_statusDictList = async () => {
    refund_statusList.value = await (await useDictionary('jhkd_refund_status')).data.dictionary
}
refund_statusDictList();


/**
 * 获取订单列列表
 */
const loadOrderList = (page: number = 1) => {
    orderTable.loading = true
    orderTable.page = page

    getOrderList({
        page: orderTable.page,
        limit: orderTable.limit,
        ...orderTable.searchParam
    }).then(res => {
        orderTable.loading = false
        orderTable.data = res.data.data
        orderTable.total = res.data.total
    }).catch(() => {
        orderTable.loading = false
    })
}
loadOrderList()

const editOrderDialog: Record<string, any> | null = ref(null)

/**
 * 添加订单列
 */
const addEvent = () => {
    editOrderDialog.value.setFormData()
    editOrderDialog.value.showDialog = true
}

/**
 * 编辑订单列
 * @param data
 */
const editEvent = (data: any) => {
    editOrderDialog.value.setFormData(data)
    editOrderDialog.value.showDialog = true
}

/**
 * 删除订单列
 */
const deleteEvent = (id: number) => {
    ElMessageBox.confirm(t('orderDeleteTips'), t('warning'),
        {
            confirmButtonText: t('confirm'),
            cancelButtonText: t('cancel'),
            type: 'warning',
        }
    ).then(() => {
        deleteOrder(id).then(() => {
            loadOrderList()
        }).catch(() => {
        })
    })
}


const memberIdList = ref([])
const setMemberIdList = async () => {
    memberIdList.value = await (await getWithMemberList({})).data
}
setMemberIdList()

const resetForm = (formEl: FormInstance | undefined) => {
    if (!formEl) return
    formEl.resetFields()
    loadOrderList()
}
</script>

<style lang="scss" scoped>
/* 多行超出隐藏 */
.multi-hidden {
    word-break: break-all;
    text-overflow: ellipsis;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
}
</style>
