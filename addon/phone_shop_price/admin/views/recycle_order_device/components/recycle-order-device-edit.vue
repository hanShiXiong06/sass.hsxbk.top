<template>
    <el-dialog v-model="showDialog" :title="formData.id ? t('updateRecycleOrderDevice') : t('addRecycleOrderDevice')" width="50%" class="diy-dialog-wrap" :destroy-on-close="true">
        <el-form :model="formData" label-width="120px" ref="formRef" :rules="formRules" class="page-form" v-loading="loading">
                <el-form-item :label="t('orderId')" prop="order_id">
                    <el-input v-model="formData.order_id" clearable :placeholder="t('orderIdPlaceholder')" class="input-width" />
                </el-form-item>
                
                <el-form-item :label="t('imei')" prop="imei">
                    <el-input v-model="formData.imei" clearable :placeholder="t('imeiPlaceholder')" class="input-width" />
                </el-form-item>
                
                <el-form-item :label="t('model')" prop="model">
                    <el-input v-model="formData.model" clearable :placeholder="t('modelPlaceholder')" class="input-width" />
                </el-form-item>
                
                <el-form-item :label="t('status')" prop="status">
                    <el-input v-model="formData.status" clearable :placeholder="t('statusPlaceholder')" class="input-width" />
                </el-form-item>
                
                <el-form-item :label="t('checkStatus')" prop="check_status">
                    <el-input v-model="formData.check_status" clearable :placeholder="t('checkStatusPlaceholder')" class="input-width" />
                </el-form-item>
                
                <el-form-item :label="t('checkResult')" >
                    <el-input v-model="formData.check_result" clearable :placeholder="t('checkResultPlaceholder')" class="input-width" />
                </el-form-item>
                
                <el-form-item :label="t('initialPrice')" >
                    <el-input v-model="formData.initial_price" clearable :placeholder="t('initialPricePlaceholder')" class="input-width" />
                </el-form-item>
                
                <el-form-item :label="t('finalPrice')" >
                    <el-input v-model="formData.final_price" clearable :placeholder="t('finalPricePlaceholder')" class="input-width" />
                </el-form-item>
                
                <el-form-item :label="t('priceRemark')" >
                    <el-input v-model="formData.price_remark" clearable :placeholder="t('priceRemarkPlaceholder')" class="input-width" />
                </el-form-item>
                
                <el-form-item :label="t('createAt')" >
                    <el-input v-model="formData.create_at" clearable :placeholder="t('createAtPlaceholder')" class="input-width" />
                </el-form-item>
                
                <el-form-item :label="t('updateAt')" >
                    <el-input v-model="formData.update_at" clearable :placeholder="t('updateAtPlaceholder')" class="input-width" />
                </el-form-item>
                
                <el-form-item :label="t('checkAt')" >
                    <el-input v-model="formData.check_at" clearable :placeholder="t('checkAtPlaceholder')" class="input-width" />
                </el-form-item>
                
        </el-form>

        <template #footer>
            <span class="dialog-footer">
                <el-button @click="showDialog = false">{{ t('cancel') }}</el-button>
                <el-button type="primary" :loading="loading" @click="confirm(formRef)">{{
                    t('confirm')
                }}</el-button>
            </span>
        </template>
    </el-dialog>
</template>

<script lang="ts" setup>
import { ref, reactive, computed, watch } from 'vue'
import { useDictionary } from '@/app/api/dict'
import { t } from '@/lang'
import type { FormInstance } from 'element-plus'
import { addRecycleOrderDevice, editRecycleOrderDevice, getRecycleOrderDeviceInfo } from '@/addon/phone_shop_price/api/recycle_order_device'

let showDialog = ref(false)
const loading = ref(false)

/**
 * 表单数据
 */
const initialFormData = {
    id: '',
    order_id: '',
    imei: '',
    model: '',
    status: '',
    check_status: '',
    check_result: '',
    initial_price: '',
    final_price: '',
    price_remark: '',
    create_at: '',
    update_at: '',
    check_at: '',
}
const formData: Record<string, any> = reactive({ ...initialFormData })

const formRef = ref<FormInstance>()

// 表单验证规则
const formRules = computed(() => {
    return {
    order_id: [
        { required: true, message: t('orderIdPlaceholder'), trigger: 'blur' },
        
    ]
,
    imei: [
        { required: true, message: t('imeiPlaceholder'), trigger: 'blur' },
        
    ]
,
    model: [
        { required: true, message: t('modelPlaceholder'), trigger: 'blur' },
        
    ]
,
    status: [
        { required: true, message: t('statusPlaceholder'), trigger: 'blur' },
        
    ]
,
    check_status: [
        { required: true, message: t('checkStatusPlaceholder'), trigger: 'blur' },
        
    ]
,
    check_result: [
        { required: true, message: t('checkResultPlaceholder'), trigger: 'blur' },
        
    ]
,
    initial_price: [
        { required: true, message: t('initialPricePlaceholder'), trigger: 'blur' },
        
    ]
,
    final_price: [
        { required: true, message: t('finalPricePlaceholder'), trigger: 'blur' },
        
    ]
,
    price_remark: [
        { required: true, message: t('priceRemarkPlaceholder'), trigger: 'blur' },
        
    ]
,
    create_at: [
        { required: true, message: t('createAtPlaceholder'), trigger: 'blur' },
        
    ]
,
    update_at: [
        { required: true, message: t('updateAtPlaceholder'), trigger: 'blur' },
        
    ]
,
    check_at: [
        { required: true, message: t('checkAtPlaceholder'), trigger: 'blur' },
        
    ]

    }
})

const emit = defineEmits(['complete'])

/**
 * 确认
 * @param formEl
 */
const confirm = async (formEl: FormInstance | undefined) => {
    if (loading.value || !formEl) return
    let save = formData.id ? editRecycleOrderDevice : addRecycleOrderDevice

    await formEl.validate(async (valid) => {
        if (valid) {
            loading.value = true

            let data = formData

            save(data).then(res => {
                loading.value = false
                showDialog.value = false
                emit('complete')
            }).catch(err => {
                loading.value = false
            })
        }
    })
}

// 获取字典数据
    

    
const setFormData = async (row: any = null) => {
    Object.assign(formData, initialFormData)
    loading.value = true
    if(row){
        const data = await (await getRecycleOrderDeviceInfo(row.id)).data
        if (data) Object.keys(formData).forEach((key: string) => {
            if (data[key] != undefined) formData[key] = data[key]
        })
    }
    loading.value = false
}

// 验证手机号格式
const mobileVerify = (rule: any, value: any, callback: any) => {
    if (value && !/^1[3-9]\d{9}$/.test(value)) {
        callback(new Error(t('generateMobile')))
    } else {
        callback()
    }
}

// 验证身份证号
const idCardVerify = (rule: any, value: any, callback: any) => {
    if (value && !/^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/.test(value)) {
        callback(new Error(t('generateIdCard')))
    } else {
        callback()
    }
}

// 验证邮箱号
const emailVerify = (rule: any, value: any, callback: any) => {
    if (value && !/\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/.test(value)) {
        callback(new Error(t('generateEmail')))
    } else {
        callback()
    }
}

// 验证请输入整数
const numberVerify = (rule: any, value: any, callback: any) => {
    if (!Number.isInteger(value)) {
        callback(new Error(t('generateNumber')))
    } else {
        callback()
    }
}

defineExpose({
    showDialog,
    setFormData
})
</script>

<style lang="scss" scoped></style>
<style lang="scss">
.diy-dialog-wrap .el-form-item__label{
    height: auto  !important;
}
</style>
