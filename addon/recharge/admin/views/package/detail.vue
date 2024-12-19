<template>
    <el-drawer v-model="showDialog" :title="t('detailTitle')" direction="rtl" :before-close="handleClose" class="member-detail-drawer">
        <div class="main-container" v-loading="loading">
            <div>
                <el-card class="card !border-none" shadow="never" >
                    <h3 class="panel-title">{{ t('basicInfo') }}</h3>
                    <el-form class="mt-[15px]" :model="formData" label-width="120px" ref="formRef" label-position="left">
                    <div class="relative" shadow="never" v-if="formData">
                        <el-row>
                            <el-col :span="8">
                                <el-form-item :label="t('rechargeName')">
                                    <div class="input-width">
                                        <span>{{formData.recharge_name}}</span>
                                    </div>
                                </el-form-item>
                            </el-col>
                            <el-col :span="8">
                                <el-form-item :label="t('status')">
                                    <div class="input-width">
                                        <span>{{formData.status_name}}</span>
                                    </div>
                                </el-form-item>
                            </el-col>
                            <el-col :span="8">
                                <el-form-item :label="t('faceValue')">
                                    <div class="input-width">
                                        <span>{{formData.face_value}}</span>
                                    </div>
                                </el-form-item>
                            </el-col>
                            <el-col :span="8">
                                <el-form-item :label="t('price')">
                                    <div class="input-width">
                                        <span>{{formData.buy_price}}</span>
                                    </div>
                                </el-form-item>
                            </el-col>
                            <el-col :span="8">
                                <el-form-item :label="t('point')">
                                    <div class="input-width">
                                        <span>{{formData.point}}</span>
                                    </div>
                                </el-form-item>
                            </el-col>
                            <el-col :span="8">
                                <el-form-item :label="t('growth')">
                                    <div class="input-width">
                                        <span>{{formData.growth}}</span>
                                    </div>
                                </el-form-item>
                            </el-col>
                            <el-col :span="8">
                                <el-form-item :label="t('createTime')">
                                    <div class="input-width">
                                        <span>{{formData.create_time}}</span>
                                    </div>
                                </el-form-item>
                            </el-col>
                        </el-row>
                    </div>

                </el-form>
                </el-card>
            </div>
        </div>
    </el-drawer>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'
import { t } from '@/lang'
import {getRechargePackageInfo} from "@/addon/recharge/api/recharge";
import { FormInstance } from 'element-plus'
import { useRouter, useRoute } from 'vue-router'
import { img } from '@/utils/common'

const route = useRoute()
const router = useRouter()

const showDialog = ref(false)
const loading = ref(false)
let id = ''
const formData:Record<string, any> = ref({})

const handleClose = (done: () => void) => {
    showDialog.value = false;
}

const getRechargePackageInfoFn= (id:number)=>{
    loading.value = true
    const data = {
        recharge_id: id
    }
    getRechargePackageInfo(data).then((res:any)=>{
        formData.value = Object.assign(formData.value,res.data)
        loading.value = false
    })
}

const setFormData = async (row: any = null) => {
    id = row.id;
    getRechargePackageInfoFn(Number(id))
}


defineExpose({
    showDialog,
    setFormData
})
</script>
<style lang="scss">
.member-detail-drawer{
    width: 1000px !important;
}
</style>
