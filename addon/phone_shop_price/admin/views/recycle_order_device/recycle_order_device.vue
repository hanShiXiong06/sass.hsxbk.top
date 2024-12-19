<template>
    <div class="main-container">
        <el-card class="box-card !border-none" shadow="never">

            <div class="flex justify-between items-center">
                <span class="text-lg">{{pageName}}</span>
                <el-button type="primary" @click="addEvent">
                    {{ t('addRecycleOrderDevice') }}
                </el-button>
            </div>

            <el-card class="box-card !border-none my-[10px] table-search-wrap" shadow="never">
                <el-form :inline="true" :model="recycleOrderDeviceTable.searchParam" ref="searchFormRef">
                    <el-form-item :label="t('orderId')" prop="order_id">
                        <el-input v-model="recycleOrderDeviceTable.searchParam.order_id" :placeholder="t('orderIdPlaceholder')" />
                    </el-form-item>
                    <el-form-item :label="t('imei')" prop="imei">
                        <el-input v-model="recycleOrderDeviceTable.searchParam.imei" :placeholder="t('imeiPlaceholder')" />
                    </el-form-item>
                    <el-form-item :label="t('model')" prop="model">
                        <el-input v-model="recycleOrderDeviceTable.searchParam.model" :placeholder="t('modelPlaceholder')" />
                    </el-form-item>
                    <el-form-item :label="t('status')" prop="status">
                        <el-input v-model="recycleOrderDeviceTable.searchParam.status" :placeholder="t('statusPlaceholder')" />
                    </el-form-item>
                    <el-form-item :label="t('checkStatus')" prop="check_status">
                        <el-input v-model="recycleOrderDeviceTable.searchParam.check_status" :placeholder="t('checkStatusPlaceholder')" />
                    </el-form-item>
                    <el-form-item :label="t('checkResult')" prop="check_result">
                        <el-input v-model="recycleOrderDeviceTable.searchParam.check_result" :placeholder="t('checkResultPlaceholder')" />
                    </el-form-item>
                    <el-form-item :label="t('initialPrice')" prop="initial_price">
                        <el-input v-model="recycleOrderDeviceTable.searchParam.initial_price" :placeholder="t('initialPricePlaceholder')" />
                    </el-form-item>
                    <el-form-item :label="t('finalPrice')" prop="final_price">
                        <el-input v-model="recycleOrderDeviceTable.searchParam.final_price" :placeholder="t('finalPricePlaceholder')" />
                    </el-form-item>
                    <el-form-item :label="t('priceRemark')" prop="price_remark">
                        <el-input v-model="recycleOrderDeviceTable.searchParam.price_remark" :placeholder="t('priceRemarkPlaceholder')" />
                    </el-form-item>
                    <el-form-item :label="t('createAt')" prop="create_at">
                        <el-input v-model="recycleOrderDeviceTable.searchParam.create_at" :placeholder="t('createAtPlaceholder')" />
                    </el-form-item>
                    <el-form-item :label="t('updateAt')" prop="update_at">
                        <el-input v-model="recycleOrderDeviceTable.searchParam.update_at" :placeholder="t('updateAtPlaceholder')" />
                    </el-form-item>
                    <el-form-item :label="t('checkAt')" prop="check_at">
                        <el-input v-model="recycleOrderDeviceTable.searchParam.check_at" :placeholder="t('checkAtPlaceholder')" />
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="loadRecycleOrderDeviceList()">{{ t('search') }}</el-button>
                        <el-button @click="resetForm(searchFormRef)">{{ t('reset') }}</el-button>
                    </el-form-item>
                </el-form>
            </el-card>

            <div class="mt-[10px]">
                <el-table :data="recycleOrderDeviceTable.data" size="large" v-loading="recycleOrderDeviceTable.loading">
                    <template #empty>
                        <span>{{ !recycleOrderDeviceTable.loading ? t('emptyData') : '' }}</span>
                    </template>
                    <el-table-column prop="order_id" :label="t('orderId')" min-width="120" :show-overflow-tooltip="true"/>
                    
                    <el-table-column prop="imei" :label="t('imei')" min-width="120" :show-overflow-tooltip="true"/>
                    
                    <el-table-column prop="model" :label="t('model')" min-width="120" :show-overflow-tooltip="true"/>
                    
                    <el-table-column prop="status" :label="t('status')" min-width="120" :show-overflow-tooltip="true"/>
                    
                    <el-table-column prop="check_status" :label="t('checkStatus')" min-width="120" :show-overflow-tooltip="true"/>
                    
                    <el-table-column prop="check_result" :label="t('checkResult')" min-width="120" :show-overflow-tooltip="true"/>
                    
                    <el-table-column prop="initial_price" :label="t('initialPrice')" min-width="120" :show-overflow-tooltip="true"/>
                    
                    <el-table-column prop="final_price" :label="t('finalPrice')" min-width="120" :show-overflow-tooltip="true"/>
                    
                    <el-table-column prop="price_remark" :label="t('priceRemark')" min-width="120" :show-overflow-tooltip="true"/>
                    
                    <el-table-column prop="create_at" :label="t('createAt')" min-width="120" :show-overflow-tooltip="true"/>
                    
                    <el-table-column prop="update_at" :label="t('updateAt')" min-width="120" :show-overflow-tooltip="true"/>
                    
                    <el-table-column prop="check_at" :label="t('checkAt')" min-width="120" :show-overflow-tooltip="true"/>
                    
                    <el-table-column :label="t('operation')" fixed="right" min-width="120">
                       <template #default="{ row }">
                           <el-button type="primary" link @click="editEvent(row)">{{ t('edit') }}</el-button>
                           <el-button type="primary" link @click="deleteEvent(row.id)">{{ t('delete') }}</el-button>
                       </template>
                    </el-table-column>

                </el-table>
                <div class="mt-[16px] flex justify-end">
                    <el-pagination v-model:current-page="recycleOrderDeviceTable.page" v-model:page-size="recycleOrderDeviceTable.limit"
                        layout="total, sizes, prev, pager, next, jumper" :total="recycleOrderDeviceTable.total"
                        @size-change="loadRecycleOrderDeviceList()" @current-change="loadRecycleOrderDeviceList" />
                </div>
            </div>

            <edit ref="editRecycleOrderDeviceDialog" @complete="loadRecycleOrderDeviceList" />
        </el-card>
    </div>
</template>

<script lang="ts" setup>
import { reactive, ref, watch } from 'vue'
import { t } from '@/lang'
import { useDictionary } from '@/app/api/dict'
import { getRecycleOrderDeviceList, deleteRecycleOrderDevice } from '@/addon/phone_shop_price/api/recycle_order_device'
import { img } from '@/utils/common'
import { ElMessageBox,FormInstance } from 'element-plus'
import Edit from '@/addon/phone_shop_price/views/recycle_order_device/components/recycle-order-device-edit.vue'
import { useRoute } from 'vue-router'
const route = useRoute()
const pageName = route.meta.title;

let recycleOrderDeviceTable = reactive({
    page: 1,
    limit: 10,
    total: 0,
    loading: true,
    data: [],
    searchParam:{
      "order_id":"",
      "imei":"",
      "model":"",
      "status":"",
      "check_status":"",
      "check_result":"",
      "initial_price":"",
      "final_price":"",
      "price_remark":"",
      "create_at":"",
      "update_at":"",
      "check_at":""
    }
})

const searchFormRef = ref<FormInstance>()

// 选中数据
const selectData = ref<any[]>([])

// 字典数据
    

/**
 * 获取回收订单设备列表
 */
const loadRecycleOrderDeviceList = (page: number = 1) => {
    recycleOrderDeviceTable.loading = true
    recycleOrderDeviceTable.page = page

    getRecycleOrderDeviceList({
        page: recycleOrderDeviceTable.page,
        limit: recycleOrderDeviceTable.limit,
         ...recycleOrderDeviceTable.searchParam
    }).then(res => {
        recycleOrderDeviceTable.loading = false
        recycleOrderDeviceTable.data = res.data.data
        recycleOrderDeviceTable.total = res.data.total
    }).catch(() => {
        recycleOrderDeviceTable.loading = false
    })
}
loadRecycleOrderDeviceList()

const editRecycleOrderDeviceDialog: Record<string, any> | null = ref(null)

/**
 * 添加回收订单设备
 */
const addEvent = () => {
    editRecycleOrderDeviceDialog.value.setFormData()
    editRecycleOrderDeviceDialog.value.showDialog = true
}

/**
 * 编辑回收订单设备
 * @param data
 */
const editEvent = (data: any) => {
    editRecycleOrderDeviceDialog.value.setFormData(data)
    editRecycleOrderDeviceDialog.value.showDialog = true
}

/**
 * 删除回收订单设备
 */
const deleteEvent = (id: number) => {
    ElMessageBox.confirm(t('recycleOrderDeviceDeleteTips'), t('warning'),
        {
            confirmButtonText: t('confirm'),
            cancelButtonText: t('cancel'),
            type: 'warning',
        }
    ).then(() => {
        deleteRecycleOrderDevice(id).then(() => {
            loadRecycleOrderDeviceList()
        }).catch(() => {
        })
    })
}

    

const resetForm = (formEl: FormInstance | undefined) => {
    if (!formEl) return
    formEl.resetFields()
    loadRecycleOrderDeviceList()
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
