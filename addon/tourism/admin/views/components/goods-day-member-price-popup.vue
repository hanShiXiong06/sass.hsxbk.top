<template>
    <div>
        <el-dialog v-model="showDialog" :title="t('editMemberPrice')" width="400px" :destroy-on-close="true">
			<el-form :model="saleArr" label-width="90px" ref="formRulesRef" >
				<el-form-item :label="t('daySetting')" class="items-center">
					<el-radio-group v-model="saleArr.is_set" class="ml-4 input-width">
						<el-radio :label="1" size="large">{{ saleArr.start_date }}</el-radio>
						<el-radio :label="2" size="large">{{ t('dateRange') }}</el-radio>
					</el-radio-group>
				</el-form-item>
				<el-form-item v-if="saleArr.is_set == 2" :label="t('startDate')" class="input-width">
					<el-date-picker type="date" v-model="saleArr.start_date" :placeholder="t('startDate')" value-format="YYYY-MM-DD" />
				</el-form-item>
				<el-form-item v-if="saleArr.is_set == 2" :label="t('endDate')" class="input-width">
					<el-date-picker type="date" v-model="saleArr.end_date" :placeholder="t('endDate')" value-format="YYYY-MM-DD" />
				</el-form-item>
                <el-form-item :label="t('memberPrice')" prop="member_price" class="items-center" >
					<el-radio-group v-model="saleArr.member_price" class="ml-4 input-width">
						<el-radio :label="1" size="large">{{ t('involved') }}</el-radio>
						<el-radio :label="0" size="large">{{ t('noInvolved') }}</el-radio>
					</el-radio-group>
				</el-form-item>
			</el-form>

			<template #footer>
				<span class="dialog-footer">
					<el-button @click="showDialog = false">{{ t('cancel') }}</el-button>
					<el-button type="primary" @click="save">{{ t('confirm') }}</el-button>
				</span>
			</template>
		</el-dialog>
    </div>
</template>

<script lang="ts" setup>
import { t } from '@/lang'
import { ref, reactive } from 'vue'
import { timeStampTurnTime } from '@/utils/common'
import { ElMessage } from 'element-plus'

import {
    editGoodsDayMemberPrice
} from '@/addon/tourism/api/tourism'

const formData: any = reactive({
    member_discount: ''
})
const goods: any = reactive({})
const showDialog = ref(false)

const emit = defineEmits(['load'])

const saleArr = reactive({
    is_set: 1,
    start_date: '',
    end_date: '',
    member_price: 0,
    goods_ids: ''
})

const show = (data: any, levelData: any) => {
    Object.assign(goods, data)
    saleArr.start_date = timeStampTurnTime(new Date().getTime() / 1000, 1)
    showDialog.value = true
}

let saveLoad = false
const save = () => {
    if (saveLoad) return false
    saveLoad = true

    saleArr.goods_ids = goods.goods_id

    editGoodsDayMemberPrice(saleArr).then(res => {
        saveLoad = false
        showDialog.value = false
        emit('load')
    })
}

defineExpose({
    showDialog,
    show
})
</script>

<style lang="scss" scoped>
.form-item-wrap {
    margin-right: 10px !important;

    &.last-child {
        margin-right: 0 !important;
    }
}
</style>
