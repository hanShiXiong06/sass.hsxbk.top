<template>
	<!-- 内容 -->
	<div class="content-wrap" v-show="diyStore.editTab == 'content'">
		<!-- 选择数据源 -->
		<div class="edit-attr-item-wrap">
			<h3 class="mb-[10px]">{{ t("selectSource") }}</h3>
			<el-form label-width="80px" class="px-[10px]">
				<el-form-item :label="t('ticketsSelectPopupSelectTicketsButton')">
				<el-radio-group v-model="diyStore.editComponent.source" :title="t('ticketsSelectPopupSelectTicketsButton')">
					<el-radio label="all">{{ t('ticketsSelectPopupAllTickets') }}</el-radio>
					<el-radio label="custom">{{ t('manualSelectionSources') }}</el-radio>
				</el-radio-group>
				</el-form-item>
				<el-form-item :label="t('goodsNum')" v-if="diyStore.editComponent.source == 'all'">
					<div class="flex items-center w-full ml-[5px]">
						<el-slider class="flex-1" v-model="diyStore.editComponent.num" max="20" size="small" />
						<span class="ml-[15px]">{{ diyStore.editComponent.num }}</span>
					</div>
				</el-form-item>
				<el-form-item :label="t('customGoods')" v-if="diyStore.editComponent.source == 'custom'">
					<tickets-select-popup ref="goodsSelectPopupRef" v-model="diyStore.editComponent.scenic_id" :min="1"
									:max="99" />
				</el-form-item>
			</el-form>
		</div>
	</div>
	<!-- 样式 -->
	<div class="style-wrap" v-show="diyStore.editTab == 'style'">
		<!-- 组件样式 -->
		<slot name="style"></slot>
	</div>
</template>

<script lang="ts" setup>
import { t } from '@/lang'
import useDiyStore from '@/stores/modules/diy'
import ticketsSelectPopup from '@/addon/tourism/views/components/tickets-select-popup.vue'
const diyStore:any = useDiyStore()
diyStore.editComponent.ignore = [] // 忽略公共属性

defineExpose({})

</script>

<style lang="scss" scoped></style>
