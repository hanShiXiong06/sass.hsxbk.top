<template>
    <div class="main-container">
        <el-card class="box-card !border-none" shadow="never">

            <div class="flex justify-between items-center">
                <span class="text-lg">{{pageName}}</span>
                <el-button type="primary" @click="addEvent">
                    {{ t('addPhoneShopRecycleOrder') }}
                </el-button>
            </div>

            <el-card class="box-card !border-none my-[10px] table-search-wrap" shadow="never">
                <el-form :inline="true" :model="phoneShopRecycleOrderTable.searchParam" ref="searchFormRef">
                    <el-form-item :label="t('orderNo')" prop="order_no">
                        <el-input v-model="phoneShopRecycleOrderTable.searchParam.order_no" :placeholder="t('orderNoPlaceholder')" />
                    </el-form-item>
                    <el-form-item :label="t('memberId')" prop="member_id">
                        <el-input v-model="phoneShopRecycleOrderTable.searchParam.member_id" :placeholder="t('memberIdPlaceholder')" />
                    </el-form-item>
                    <el-form-item :label="t('siteId')" prop="site_id">
                        <el-input v-model="phoneShopRecycleOrderTable.searchParam.site_id" :placeholder="t('siteIdPlaceholder')" />
                    </el-form-item>
                    <el-form-item :label="t('count')" prop="count">
                        <el-input v-model="phoneShopRecycleOrderTable.searchParam.count" :placeholder="t('countPlaceholder')" />
                    </el-form-item>
                    <el-form-item :label="t('expressId')" prop="express_id">
                        <el-input v-model="phoneShopRecycleOrderTable.searchParam.express_id" :placeholder="t('expressIdPlaceholder')" />
                    </el-form-item>
                    <el-form-item :label="t('sendUsername')" prop="send_username">
                        <el-input v-model="phoneShopRecycleOrderTable.searchParam.send_username" :placeholder="t('sendUsernamePlaceholder')" />
                    </el-form-item>
                    <el-form-item :label="t('telphone')" prop="telphone">
                        <el-input v-model="phoneShopRecycleOrderTable.searchParam.telphone" :placeholder="t('telphonePlaceholder')" />
                    </el-form-item>
                    <el-form-item :label="t('payType')" prop="pay_type">
                        <el-input v-model="phoneShopRecycleOrderTable.searchParam.pay_type" :placeholder="t('payTypePlaceholder')" />
                    </el-form-item>
                    <el-form-item :label="t('account')" prop="account">
                        <el-input v-model="phoneShopRecycleOrderTable.searchParam.account" :placeholder="t('accountPlaceholder')" />
                    </el-form-item>
                    <el-form-item :label="t('deliveryType')" prop="delivery_type">
                        <el-input v-model="phoneShopRecycleOrderTable.searchParam.delivery_type" :placeholder="t('deliveryTypePlaceholder')" />
                    </el-form-item>
                    <el-form-item :label="t('returnType')" prop="return_type">
                        <el-input v-model="phoneShopRecycleOrderTable.searchParam.return_type" :placeholder="t('returnTypePlaceholder')" />
                    </el-form-item>
                    <el-form-item :label="t('qrcodeImage')" prop="qrcode_image">
                        <el-input v-model="phoneShopRecycleOrderTable.searchParam.qrcode_image" :placeholder="t('qrcodeImagePlaceholder')" />
                    </el-form-item>
                    <el-form-item :label="t('returnAddress')" prop="return_address">
                        <el-input v-model="phoneShopRecycleOrderTable.searchParam.return_address" :placeholder="t('returnAddressPlaceholder')" />
                    </el-form-item>
                    <el-form-item :label="t('status')" prop="status">
                        <el-input v-model="phoneShopRecycleOrderTable.searchParam.status" :placeholder="t('statusPlaceholder')" />
                    </el-form-item>
                    <el-form-item :label="t('createAt')" prop="create_at">
                        <el-input v-model="phoneShopRecycleOrderTable.searchParam.create_at" :placeholder="t('createAtPlaceholder')" />
                    </el-form-item>
                    <el-form-item :label="t('updateAt')" prop="update_at">
                        <el-input v-model="phoneShopRecycleOrderTable.searchParam.update_at" :placeholder="t('updateAtPlaceholder')" />
                    </el-form-item>
                    <el-form-item :label="t('overAt')" prop="over_at">
                        <el-input v-model="phoneShopRecycleOrderTable.searchParam.over_at" :placeholder="t('overAtPlaceholder')" />
                    </el-form-item>
                    <el-form-item :label="t('comment')" prop="comment">
                        <el-input v-model="phoneShopRecycleOrderTable.searchParam.comment" :placeholder="t('commentPlaceholder')" />
                    </el-form-item>
                    <el-form-item :label="t('closeExpressId')" prop="close_express_id">
                        <el-input v-model="phoneShopRecycleOrderTable.searchParam.close_express_id" :placeholder="t('closeExpressIdPlaceholder')" />
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="loadPhoneShopRecycleOrderList()">{{ t('search') }}</el-button>
                        <el-button @click="resetForm(searchFormRef)">{{ t('reset') }}</el-button>
                    </el-form-item>
                </el-form>
            </el-card>

            <div class="mt-[10px]">
                <el-table :data="phoneShopRecycleOrderTable.data" size="large" v-loading="phoneShopRecycleOrderTable.loading">
                    <template #empty>
                        <span>{{ !phoneShopRecycleOrderTable.loading ? t('emptyData') : '' }}</span>
                    </template>
                    <el-table-column prop="order_no" :label="t('orderNo')" min-width="120" :show-overflow-tooltip="true"/>
                    
                    <el-table-column prop="member_id" :label="t('memberId')" min-width="120" :show-overflow-tooltip="true"/>
                    
                    <el-table-column prop="count" :label="t('count')" min-width="120" :show-overflow-tooltip="true"/>
                    
                    <el-table-column prop="express_id" :label="t('expressId')" min-width="120" :show-overflow-tooltip="true"/>
                    
                    <el-table-column prop="send_username" :label="t('sendUsername')" min-width="120" :show-overflow-tooltip="true"/>
                    
                    <el-table-column prop="telphone" :label="t('telphone')" min-width="120" :show-overflow-tooltip="true"/>
                    
                    <el-table-column prop="pay_type" :label="t('payType')" min-width="120" :show-overflow-tooltip="true"/>
                    
                    <el-table-column prop="account" :label="t('account')" min-width="120" :show-overflow-tooltip="true"/>
                    
                    <el-table-column prop="delivery_type" :label="t('deliveryType')" min-width="120" :show-overflow-tooltip="true"/>
                    
                    <el-table-column prop="return_type" :label="t('returnType')" min-width="120" :show-overflow-tooltip="true"/>
                    
                    <el-table-column prop="qrcode_image" :label="t('qrcodeImage')" min-width="120" :show-overflow-tooltip="true"/>
                    
                    <el-table-column prop="return_address" :label="t('returnAddress')" min-width="120" :show-overflow-tooltip="true"/>
                    
                    <el-table-column prop="status" :label="t('status')" min-width="120" :show-overflow-tooltip="true"/>
                    
                    <el-table-column prop="create_at" :label="t('createAt')" min-width="120" :show-overflow-tooltip="true"/>
                    
                    <el-table-column prop="update_at" :label="t('updateAt')" min-width="120" :show-overflow-tooltip="true"/>
                    
                    <el-table-column prop="over_at" :label="t('overAt')" min-width="120" :show-overflow-tooltip="true"/>
                    
                    <el-table-column prop="comment" :label="t('comment')" min-width="120" :show-overflow-tooltip="true"/>
                    
                    <el-table-column prop="close_express_id" :label="t('closeExpressId')" min-width="120" :show-overflow-tooltip="true"/>
                    
                    <el-table-column :label="t('operation')" fixed="right" min-width="120">
                       <template #default="{ row }">
                           <el-button type="primary" link @click="editEvent(row)">{{ t('edit') }}</el-button>
                           <el-button type="primary" link @click="deleteEvent(row.id)">{{ t('delete') }}</el-button>
                       </template>
                    </el-table-column>

                </el-table>
                <div class="mt-[16px] flex justify-end">
                    <el-pagination v-model:current-page="phoneShopRecycleOrderTable.page" v-model:page-size="phoneShopRecycleOrderTable.limit"
                        layout="total, sizes, prev, pager, next, jumper" :total="phoneShopRecycleOrderTable.total"
                        @size-change="loadPhoneShopRecycleOrderList()" @current-change="loadPhoneShopRecycleOrderList" />
                </div>
            </div>

            <edit ref="editPhoneShopRecycleOrderDialog" @complete="loadPhoneShopRecycleOrderList" />
        </el-card>
    </div>
</template>

<script lang="ts" setup>
import { reactive, ref, watch } from 'vue'
import { t } from '@/lang'
import { useDictionary } from '@/app/api/dict'
import { getPhoneShopRecycleOrderList, deletePhoneShopRecycleOrder } from '@/addon/phone_shop_price/api/phone_shop_recycle_order'
import { img } from '@/utils/common'
import { ElMessageBox,FormInstance } from 'element-plus'
import Edit from '@/addon/phone_shop_price/views/phone_shop_recycle_order/components/phone-shop-recycle-order-edit.vue'
import { useRoute } from 'vue-router'
const route = useRoute()
const pageName = route.meta.title;

let phoneShopRecycleOrderTable = reactive({
    page: 1,
    limit: 10,
    total: 0,
    loading: true,
    data: [],
    searchParam:{
      "order_no":"",
      "member_id":"",
      "site_id":"",
      "count":"",
      "express_id":"",
      "send_username":"",
      "telphone":"",
      "pay_type":"",
      "account":"",
      "delivery_type":"",
      "return_type":"",
      "qrcode_image":"",
      "return_address":"",
      "status":"",
      "create_at":"",
      "update_at":"",
      "over_at":"",
      "comment":"",
      "close_express_id":""
    }
})

const searchFormRef = ref<FormInstance>()

// 选中数据
const selectData = ref<any[]>([])

// 字典数据
    

/**
 * 获取回收订单主列表
 */
const loadPhoneShopRecycleOrderList = (page: number = 1) => {
    phoneShopRecycleOrderTable.loading = true
    phoneShopRecycleOrderTable.page = page

    getPhoneShopRecycleOrderList({
        page: phoneShopRecycleOrderTable.page,
        limit: phoneShopRecycleOrderTable.limit,
         ...phoneShopRecycleOrderTable.searchParam
    }).then(res => {
        phoneShopRecycleOrderTable.loading = false
        phoneShopRecycleOrderTable.data = res.data.data
        phoneShopRecycleOrderTable.total = res.data.total
    }).catch(() => {
        phoneShopRecycleOrderTable.loading = false
    })
}
loadPhoneShopRecycleOrderList()

const editPhoneShopRecycleOrderDialog: Record<string, any> | null = ref(null)

/**
 * 添加回收订单主
 */
const addEvent = () => {
    editPhoneShopRecycleOrderDialog.value.setFormData()
    editPhoneShopRecycleOrderDialog.value.showDialog = true
}

/**
 * 编辑回收订单主
 * @param data
 */
const editEvent = (data: any) => {
    editPhoneShopRecycleOrderDialog.value.setFormData(data)
    editPhoneShopRecycleOrderDialog.value.showDialog = true
}

/**
 * 删除回收订单主
 */
const deleteEvent = (id: number) => {
    ElMessageBox.confirm(t('phoneShopRecycleOrderDeleteTips'), t('warning'),
        {
            confirmButtonText: t('confirm'),
            cancelButtonText: t('cancel'),
            type: 'warning',
        }
    ).then(() => {
        deletePhoneShopRecycleOrder(id).then(() => {
            loadPhoneShopRecycleOrderList()
        }).catch(() => {
        })
    })
}

    

const resetForm = (formEl: FormInstance | undefined) => {
    if (!formEl) return
    formEl.resetFields()
    loadPhoneShopRecycleOrderList()
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
