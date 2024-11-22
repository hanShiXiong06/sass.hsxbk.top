<template>
    <el-dialog v-model="showDialog" :title="formData.reserve_id ? t('updateReserve') : t('addReserve')" width="500px" :destroy-on-close="true">
        <el-form :model="formData" label-width="90px" ref="formRef" :rules="formRules" class="page-form" v-loading="loading">
                <el-form-item :label="t('phone')" prop="phone" v-if="!formData.reserve_id">
                    <el-input v-model="formData.mobile" :placeholder="t('phonePlaceholder')" class="input-width">
                        <template #append>
                            <span class="iconfont iconsousuo text-[#a3a6ab] cursor-pointer" @click="getMemberInfoFn(formData.mobile)"></span>
                        </template>
                    </el-input>
                </el-form-item>
                <el-form-item :label="t('client')" prop="reserve_name">
                    <el-input v-model="formData.reserve_name" disabled :placeholder="t('clientPlaceholder')" class="input-width" />
                </el-form-item>
                <el-form-item :label="t('reserveItem')" prop="goods_id">
                    <el-select v-model="formData.goods_id" class="input-width" :placeholder="t('reserveItemPlaceholder')">
                        <el-option v-for="item in serviceList" :key="item.goods_id" :label="item.goods_name" :value="item.goods_id"/>
                    </el-select>
                </el-form-item>
                <el-form-item :label="t('technician')" prop="technician_id">
                    <el-select v-model="formData.technician_id" class="input-width" :placeholder="t('technicianPlaceholder')">
                        <el-option v-for="item in technicianList" :key="item.id" :label="item.name" :value="item.id"/>
                    </el-select>
                </el-form-item>

                <el-form-item :label="t('arrivalTime')" prop="reserve_date">
                     <div class="input-width">
                        <el-date-picker v-model="formData.reserve_date" type="datetime" value-format="YYYY-MM-DD HH:mm:ss" :placeholder="t('arrivalTimePlaceholder')"/>
                     </div>
                </el-form-item>

                <el-form-item :label="t('remark')">
                    <el-input v-model="formData.remark" :rows="2" type="textarea" :placeholder="t('remarkPlaceholder')" class="input-width" />
                </el-form-item>

        </el-form>

        <template #footer>
            <span class="dialog-footer">
                <el-button @click="showDialog = false">{{ t('cancel') }}</el-button>
                <el-button type="primary" :loading="loading" @click="confirm(formRef)">{{ t('confirm') }}</el-button>
            </span>
        </template>
    </el-dialog>
</template>

<script lang="ts" setup>
import { ref, reactive, computed } from 'vue'
import { t } from '@/lang'
import type { FormInstance } from 'element-plus'
import { addReserve, editReserve, getMemberInfo, getServicePagesList, getTechnicianListTo } from '@/addon/vipcard/api/vipcard'

const showDialog = ref(false)
const loading = ref(false)

/**
 * 表单数据
 */
const initialFormData = {
    reserve_id: '',
    mobile: '',
    member_id: '',
    reserve_name: '',
    reserve_date: '',
    goods_id: '',
    remark: '',
    technician_id: ''
}
const formData: Record<string, any> = reactive({ ...initialFormData })

const formRef = ref<FormInstance>()

// 表单验证规则
const formRules = computed(() => {
    return {
        member_id: [
            { required: true, message: t('memberIdPlaceholder'), trigger: 'blur' }
        ],
        reserve_date: [
            { required: true, message: t('arrivalTimePlaceholder'), trigger: 'blur' }
        ],
        goods_id: [
            { required: true, message: t('reserveItemPlaceholder'), trigger: ['blur', 'change'] }
        ],
        technician_id: [
            { required: true, message: t('technicianPlaceholder'), trigger: ['blur', 'change'] }
        ],
        reserve_name: [
            { required: true, message: t('memberNamePlaceholder'), trigger: 'blur' }
        ]
    }
})

const emit = defineEmits(['complete'])

// 通过搜索手机号来获取会员
const memberInfo = ref({})
const getMemberInfoFn = (mobile:any) => {
    getMemberInfo({
        mobile
    }).then(res => {
        memberInfo.value = Object.keys(res.data).length ? res.data : {}
        formData.member_id = memberInfo.value.member_id || ''
        formData.reserve_name = memberInfo.value.nickname || ''
    })
}

// 获取项目列表
const serviceList = ref([])
const getServicePagesListFn = () => {
    getServicePagesList({}).then(res => {
        serviceList.value = res.data
    })
}

getServicePagesListFn()

/**
 * 确认
 * @param formEl
 */
const confirm = async (formEl: FormInstance | undefined) => {
    if (loading.value || !formEl) return
    const save = formData.reserve_id ? editReserve : addReserve

    await formEl.validate(async (valid) => {
        if (valid) {
            loading.value = true

            const data = formData
            save(data).then(res => {
                loading.value = false
                showDialog.value = false
                emit('complete')
            }).catch(() => {
                loading.value = false
            })
        }
    })
}

const technicianList = ref([])
const setFormData = async (row: any = null) => {
    technicianList.value = await (await getTechnicianListTo()).data
    Object.assign(formData, initialFormData)
    if (row) {
        if (row) {
            Object.keys(formData).forEach((key: string) => {
                if (row[key] != undefined) formData[key] = row[key]
            })
        }
    }
    loading.value = false
}

defineExpose({
    showDialog,
    setFormData
})
</script>

<style lang="scss" scoped></style>
