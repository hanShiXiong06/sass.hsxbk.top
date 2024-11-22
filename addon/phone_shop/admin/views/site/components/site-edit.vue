<template>
    <el-dialog v-model="showDialog" :title="formData.id ? t('updateSite') : t('addSite')" width="50%"
        class="diy-dialog-wrap" :destroy-on-close="true">

        <el-form :model="formData" label-width="120px" ref="formRef" :rules="formRules" class="page-form"
            v-loading="loading">
            <el-form-item :label="t('siteId')" prop="site_id">
                <el-input v-model="formData.site_id" clearable :placeholder="t('siteIdPlaceholder')"
                    class="input-width" />
            </el-form-item>

            <el-form-item :label="t('siteName')" prop="site_name">
                <el-input v-model="formData.site_name" clearable :placeholder="t('siteNamePlaceholder')"
                    class="input-width" />
            </el-form-item>

            <el-form-item :label="t('client')" prop="client">
                <el-input v-model="formData.client" clearable :placeholder="t('clientPlaceholder')"
                    class="input-width" />
            </el-form-item>

            <el-form-item :label="t('categoryStatus')" prop="category_status">
                <el-radio-group v-model="formData.category_status" :placeholder="t('categoryStatusPlaceholder')">
                    <el-radio v-for="(item, index) in category_statusList" :key="index" :label="item.value">
                        {{ item.name }}
                    </el-radio>
                </el-radio-group>
            </el-form-item>

            <el-form-item :label="t('brandStatus')" prop="brand_status">
                <el-radio-group v-model="formData.brand_status" :placeholder="t('brandStatusPlaceholder')">
                    <el-radio v-for="(item, index) in brand_statusList" :key="index" :label="item.value">
                        {{ item.name }}
                    </el-radio>
                </el-radio-group>
            </el-form-item>

            <el-form-item :label="t('labelGroupStatus')" prop="label_group_status">
                <el-radio-group v-model="formData.label_group_status" :placeholder="t('labelGroupStatusPlaceholder')">
                    <el-radio v-for="(item, index) in label_group_statusList" :key="index" :label="item.value">
                        {{ item.name }}
                    </el-radio>
                </el-radio-group>
            </el-form-item>

            <el-form-item :label="t('labelStatus')" prop="label_status">
                <el-radio-group v-model="formData.label_status" :placeholder="t('labelStatusPlaceholder')">
                    <el-radio v-for="(item, index) in label_statusList" :key="index" :label="item.value">
                        {{ item.name }}
                    </el-radio>
                </el-radio-group>
            </el-form-item>

            <el-form-item :label="t('serviceStatus')" prop="service_status">
                <el-radio-group v-model="formData.service_status" :placeholder="t('serviceStatusPlaceholder')">
                    <el-radio v-for="(item, index) in service_statusList" :key="index" :label="item.value">
                        {{ item.name }}
                    </el-radio>
                </el-radio-group>
            </el-form-item>
            <el-form-item :label="t('priceStatus')" prop="price_status">
                <el-radio-group v-model="formData.price_status" :placeholder="t('priceStatusPlaceholder')">
                    <el-radio v-for="(item, index) in price_statusList" :key="index" :label="item.value">
                        {{ item.name }}
                    </el-radio>
                </el-radio-group>
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
import { addSite, editSite, getSiteInfo } from '@/addon/phone_shop/api/site'

let showDialog = ref(false)
const loading = ref(false)

/**
 * 表单数据
 */
const initialFormData = {
    id: '',
    site_id: '',
    site_name: '',
    client: '',
    category_status: '',
    brand_status: '',
    label_group_status: '',
    label_status: '',
    service_status: '',
    price_statusList: ''
}
const formData: Record<string, any> = reactive({ ...initialFormData })

const formRef = ref<FormInstance>()

// 表单验证规则
const formRules = computed(() => {
    return {
        site_name: [
            { required: true, message: t('siteNamePlaceholder'), trigger: 'blur' },

        ]
        ,
        client: [
            { required: true, message: t('clientPlaceholder'), trigger: 'blur' },

        ]
        ,
        category_status: [
            { required: true, message: t('categoryStatusPlaceholder'), trigger: 'blur' },

        ]
        ,
        brand_status: [
            { required: true, message: t('brandStatusPlaceholder'), trigger: 'blur' },

        ]
        ,
        label_group_status: [
            { required: true, message: t('labelGroupStatusPlaceholder'), trigger: 'blur' },

        ]
        ,
        label_status: [
            { required: true, message: t('labelStatusPlaceholder'), trigger: 'blur' },

        ]
        ,
        service_status: [
            { required: true, message: t('serviceStatusPlaceholder'), trigger: 'blur' },

        ],
        price_status: [
            { required: true, message: t('serviceStatusPlaceholder'), trigger: 'blur' },

        ],

    }
})

const emit = defineEmits(['complete'])

/**
 * 确认
 * @param formEl
 */
const confirm = async (formEl: FormInstance | undefined) => {
    if (loading.value || !formEl) return
    let save = formData.id ? editSite : addSite

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
let category_statusList = ref([])
const category_statusDictList = async () => {
    category_statusList.value = await (await useDictionary('status')).data.dictionary
}
category_statusDictList();
watch(() => category_statusList.value, () => { formData.category_status = category_statusList.value[0].value })
let brand_statusList = ref([])
const brand_statusDictList = async () => {
    brand_statusList.value = await (await useDictionary('status')).data.dictionary
}
brand_statusDictList();
watch(() => brand_statusList.value, () => { formData.brand_status = brand_statusList.value[0].value })
let label_group_statusList = ref([])
const label_group_statusDictList = async () => {
    label_group_statusList.value = await (await useDictionary('status')).data.dictionary
}
label_group_statusDictList();
watch(() => label_group_statusList.value, () => { formData.label_group_status = label_group_statusList.value[0].value })
let label_statusList = ref([])
const label_statusDictList = async () => {
    label_statusList.value = await (await useDictionary('status')).data.dictionary
}
label_statusDictList();
watch(() => label_statusList.value, () => { formData.label_status = label_statusList.value[0].value })
let service_statusList = ref([])
const service_statusDictList = async () => {
    service_statusList.value = await (await useDictionary('status')).data.dictionary
}
service_statusDictList();
watch(() => service_statusList.value, () => { formData.service_status = service_statusList.value[0].value })
let price_statusList = ref([])
const price_statusDictList = async () => {
    price_statusList.value = await (await useDictionary('status')).data.dictionary
}
price_statusDictList();
watch(() => price_statusList.value, () => { formData.price_status = price_statusList.value[0].value })


const setFormData = async (row: any = null) => {
    Object.assign(formData, initialFormData)
    loading.value = true
    if (row) {
        const data = await (await getSiteInfo(row.id)).data
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
// const idCardVerify = (rule: any, value: any, callback: any) => {
//     if (value && !/^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/.test(value)) {
//         callback(new Error(t('generateIdCard')))
//     } else {
//         callback()
//     }
// }

// 验证邮箱号
// const emailVerify = (rule: any, value: any, callback: any) => {
//     if (value && !/\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/.test(value)) {
//         callback(new Error(t('generateEmail')))
//     } else {
//         callback()
//     }
// }

// 验证请输入整数
// const numberVerify = (rule: any, value: any, callback: any) => {
//     if (!Number.isInteger(value)) {
//         callback(new Error(t('generateNumber')))
//     } else {
//         callback()
//     }
// }

defineExpose({
    showDialog,
    setFormData
})
</script>

<style lang="scss" scoped></style>
<style lang="scss">
.diy-dialog-wrap .el-form-item__label {
    height: auto !important;
}
</style>
