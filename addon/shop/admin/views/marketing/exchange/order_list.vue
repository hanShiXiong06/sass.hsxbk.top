<template>
	<div class="main-container">
		<el-card class="box-card !border-none" shadow="never">

			<div class="flex justify-between items-center">
				<span class="text-page-title">{{ pageName }}</span>
			</div>

			<el-card class="box-card !border-none my-[10px] table-search-wrap" shadow="never">
				<el-form :inline="true" :model="orderTable.searchParam" ref="searchFormRef">

					<el-form-item :label="t('orderInfo')" prop='search_name'>
						<el-select v-model="orderTable.searchParam.search_type" clearable class="input-item">
							<el-option :label="t('orderNo')" value="order_no"></el-option>
							<el-option :label="t('outTradeNo')" value="out_trade_no"></el-option>
						</el-select>
						<el-input class="input-item ml-3" v-model.trim="orderTable.searchParam.search_name" />
					</el-form-item>
					<el-form-item :label="t('payType')" prop='pay_type'>
						<el-select v-model="orderTable.searchParam.pay_type" clearable class="input-item">
							<el-option v-for="(item, index) in payTypeData" :key="index" :label="item.name" :value="item.key"></el-option>
						</el-select>
					</el-form-item>
					<el-form-item :label="t('fromType')" prop='from_type'>
						<el-select v-model="orderTable.searchParam.order_from" clearable class="input-item">
							<el-option v-for="(item, index) in orderFromData" :key="index" :label="item" :value="index"></el-option>
						</el-select>
					</el-form-item>
					<el-form-item :label="t('createTime')" prop="create_time">
						<el-date-picker v-model="orderTable.searchParam.create_time" type="datetimerange"
							value-format="YYYY-MM-DD HH:mm:ss" :start-placeholder="t('startDate')"
							:end-placeholder="t('endDate')" />
					</el-form-item>
					<el-form-item :label="t('payTime')" prop="pay_time">
						<el-date-picker v-model="orderTable.searchParam.pay_time" type="datetimerange"
							value-format="YYYY-MM-DD HH:mm:ss" :start-placeholder="t('startDate')"
							:end-placeholder="t('endDate')" />
					</el-form-item>
					<el-form-item>
						<el-button type="primary" @click="loadOrderList()">{{ t('search') }}</el-button>
						<el-button @click="resetForm(searchFormRef)">{{ t('reset') }}</el-button>
						<!-- <el-button type="primary" @click="exportSelectEvent">{{ t('export') }}</el-button> -->
					</el-form-item>
				</el-form>
			</el-card>
			<el-tabs v-model="activeName" class="demo-tabs" @tab-change="handleClick">
				<el-tab-pane :label="t('all')" name=""></el-tab-pane>
				<el-tab-pane :label="t('toBeShipped')" name="2"></el-tab-pane>
				<el-tab-pane :label="t('shipped')" name="3"></el-tab-pane>
				<el-tab-pane :label="t('completed')" name="5"></el-tab-pane>
				<el-tab-pane :label="t('closed')" name="-1"></el-tab-pane>
			</el-tabs>
			<div>
				<el-table :data="orderTable.data" size="large" class="table-top" @select-all="selectAllCheck">
					<el-table-column type="selection" width="40" />
					<el-table-column :label="t('orderGoods')" min-width="200" />
					<el-table-column :label="t('goodsPriceNumber')" min-width="120" />
					<el-table-column :label="t('orderMoney')" min-width="120" />
					<el-table-column :label="t('orderStatus')" min-width="100" />
					<!-- <el-table-column :label="t('operation')" fixed="right" align="right" min-width="120" /> -->
				</el-table>
				<div class="table-body min-h-[150px]" v-loading="orderTable.loading">
					<div v-if="!orderTable.loading">
						<template v-if="orderTable.data.length">
							<div v-for="(item, index) in orderTable.data" :key="index">
								<div
									class="flex items-center justify-between bg-[#f7f8fa] mt-[10px] border-[#e4e7ed] border-solid border-b-[1px] px-3 h-[35px] text-[12px] text-[#666]">
									<div>
										<span>{{ t('orderNo') }}：{{ (item as any).order_no }}</span>
										<span class="ml-5">{{ t('createTime') }}：{{ (item as any).create_time }}</span>
										<!-- <span class="ml-5">{{ t('orderFrom') }}：{{ (item as any).order_form_name }}</span> -->
										<span class="ml-5" v-if="item.pay">{{ t('payType') }}：{{ (item as any).pay.type_name }}</span>
									</div>
									<div>
										<!-- <el-button type="primary" link>{{ t('offlinePayment') }}</el-button> -->
										<el-button type="primary" link @click="detailEvent(item)">{{ t('info') }}</el-button>
									</div>
								</div>

								<el-table :data="(item as any).order_goods" size="large" :show-header="false" :span-method="arraySpanMethod" ref="multipleTable">
									<el-table-column type="selection" width="40" />
									<el-table-column align="left" min-width="200">
										<template #default="{ row }">
											<div class="flex cursor-pointer">
												<div class="flex items-center min-w-[50px] mr-[10px]">
													<img class="w-[50px] h-[50px]" v-if="row.goods_image" :src="img(row.goods_image)" alt="">
													<img class="w-[50px] h-[50px]" v-else src="" alt="">
												</div>
												<div class="flex flex-col">
													<p class="multi-hidden text-[14px]">{{ row.goods_name }}</p>
													<span class="text-[12px] text-[#999]">{{ row.sku_name }}</span>
												</div>
											</div>
										</template>
									</el-table-column>
									<el-table-column min-width="120">
										<template #default="{ row }">
											<div class="flex flex-col">
												<span v-if="item.activity_type == 'exchange'">{{ row.extend.point }}{{ t('point') }}
													<span v-if="parseFloat(row.price)">+￥{{ row.price }}</span>
												</span>
												<span v-else class="text-[13px]">￥{{ row.price }}</span>
												<span class="text-[13px] mt-[5px]">{{ row.num }}{{ t('piece') }}</span>
											</div>
										</template>
									</el-table-column>
									<el-table-column min-width="120" class-name="border-0 border-l-[1px] border-solid border-[var(--el-table-border-color)]">
										<template #default>
											<span v-if="item.activity_type == 'exchange'" class="text-[14px]">{{ item.point }}{{ t('point') }}
												<span v-if="parseFloat(item.order_money)">+￥{{ item.order_money }}</span>
											</span>
											<span v-else class="text-[14px]">￥{{ item.order_money }}</span>
										</template>
									</el-table-column>
									<el-table-column min-width="100">
										<template #default>
											<span class="text-[14px]">{{ item.status_name.name }}</span>
										</template>
									</el-table-column>
								</el-table>
								<div v-if="item.shop_remark" class="text-[14px] min-h-[30px] leading-[30px] px-3 bg-[#fff0e5] text-[#ff7f5b]">
									<span class="mr-[5px]">{{ t('notes') }}：</span>
									<span>{{ item.shop_remark }}</span>
								</div>
							</div>
						</template>
						<el-empty v-else :image-size="1" :description="t('emptyData')" />
					</div>
				</div>
				<div class="mt-[16px] flex justify-end">
					<el-pagination v-model:current-page="orderTable.page" v-model:page-size="orderTable.limit"
						layout="total, sizes, prev, pager, next, jumper" :total="orderTable.total"
						@size-change="loadOrderList()" @current-change="loadOrderList" />
				</div>
			</div>
		</el-card>
	</div>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'
import { t } from '@/lang'
import { getOrderList, getOrderStatus, getOrderPayType, getOrderFrom } from '@/addon/shop/api/order'
import { img } from '@/utils/common'
import { ElMessageBox, FormInstance } from 'element-plus'
import { useRouter, useRoute } from 'vue-router'

const route = useRoute()
const router = useRouter()
const pageName = route.meta.title
const activeName = ref('')

const statusData = ref([])
const payTypeData = ref<any[]>([])
const orderFromData = ref([])
const setFormData = async () => {
	statusData.value = await (await getOrderStatus()).data
	payTypeData.value = await (await getOrderPayType()).data
	orderFromData.value = await (await getOrderFrom()).data
}
setFormData()

const multipleTable: Record<string, any> | null = ref(null)
const isSelectAll = ref(false)
const selectAllCheck = () => {
	if (isSelectAll.value == false) {
		isSelectAll.value = true
		for (const i in orderTable.data) {
			for (const j in orderTable.data[i].order_goods) {
				multipleTable.value[i].toggleRowSelection(orderTable.data[i].order_goods[j], true)
			}
		}
	} else {
		isSelectAll.value = false
		for (const v in orderTable.data) {
			for (const k in orderTable.data[v].order_goods) {
				multipleTable.value[v].clearSelection()
			}
		}
	}
}
interface OrderTable {
	page: number
	limit: number
	total: number
	loading: boolean
	data: any[]
	searchParam: any,
}
const orderTable = reactive<OrderTable>({
	page: 1,
	limit: 10,
	total: 0,
	loading: true,
	data: [],
	searchParam: {
		search_type: 'order_no',
		search_name: '',
		pay_type: '',
		order_from: '',
		status: '',
		create_time: [],
		pay_time: [],
		activity_type:'exchange'
	}
})

const searchFormRef = ref<FormInstance>()

/**
 * 获取订单列表
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
		orderTable.data = res.data.data.map((el: any) => {
			el.order_goods.forEach((v: any) => {
				v.rowNum = el.order_goods.length
			})
			return el
		})
		orderTable.total = res.data.total
	}).catch(() => {
		orderTable.loading = false
	})
}
loadOrderList()

const handleClick = (event: any) => {
	orderTable.searchParam.status = event
	loadOrderList()
}

// 合并表格行
const arraySpanMethod = ({
	row,
	column,
	rowIndex,
	columnIndex
}) => {
	if (rowIndex === 0) {
		if (columnIndex === 0) {
			return [row.rowNum, 1]
		} else if (columnIndex > 3) {
			return [row.rowNum, 1]
		} else {
			return [1, 1]
		}
	} else {
		if (columnIndex === 0) {
			return [0, 0]
		} else if (columnIndex > 3) {
			return [0, 0]
		} else {
			return [1, 1]
		}
	}
}

// 订单详情
const detailEvent = (data: any) => {
	router.push('/shop/order/detail?order_id=' + data.order_id)
}

const resetForm = (formEl: FormInstance | undefined) => {
	if (!formEl) return
	formEl.resetFields()
	loadOrderList()
}
</script>

<style lang="scss" scoped>
.table-top :deep(.el-table__body-wrapper) {
	display: none;
}

.input-item {
	width: 150px !important;
}

:deep(.el-table) {
	--el-table-row-hover-bg-color: var(--el-transfer-border-color);
}

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
