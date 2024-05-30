<template>
  <div class="main-container">
    <div class="flex ml-[18px] justify-between items-center mt-[20px]">
      <span class="text-[20px]">{{ pageName }}</span>
    </div>
    <el-form :model="formData" label-width="140px" ref="formRef" :rules="formRules" class="page-form"
      v-loading="loading">
      <el-card class="box-card !border-none" shadow="never">
        <el-card class="!border-none" shadow="never" style="width: 640px;">
          <el-alert type="warning" title="本存储需使用123盘直链功能，目前会员才有此权限，普通会员每月有100G流量，超级会员有1T流量，可以按需购买流量，价格非常有性价比具体查看官方商城"
            :closable="false" show-icon />
        </el-card>
        <el-form-item label="是否启用">
          <el-radio-group v-model="formData.is_use">
            <el-radio :label="'1'">启用</el-radio>
            <el-radio :label="'0'">停用</el-radio>
          </el-radio-group>
        </el-form-item>

        <el-form-item label="clientID" prop="clientID">
          <el-input v-model="formData.clientID" placeholder="请填写client_id" class="input-width" clearable />
        </el-form-item>

        <el-form-item label="clientSecret" prop="clientSecret">
          <el-input v-model="formData.clientSecret" placeholder="请填写client_secret" class="input-width" clearable />
        </el-form-item>
        <el-form-item label="上传目录" prop="dir">
          <el-input v-model="formData.dir" placeholder="如oss,根目录下需要不存在这个目录" class="input-width" clearable />
        </el-form-item>
        <el-form-item label="域名前缀" prop="domain">
          <el-input v-model="formData.domain" placeholder="进入123盘的直链空间获取地址" class="input-width" clearable />
          <div class="ml-2 text-[#666]">域名组成：https://vip.123pan.cn/会员uid/目录</div>
        </el-form-item>
        <el-form-item label="快速导航">
          <el-button>
            <a href="https://www.123pan.com/s/Ggx9-gAmJv.html" target="_blank">123网盘注册</a>
          </el-button>

          <el-button>
            <a href="https://www.123pan.com/developer" target="_blank">开放平台申请</a>
          </el-button>
          <el-button v-if="isAdmin == true" type="primary" @click="addDriver()">
            注入驱动
          </el-button>
        </el-form-item>

      </el-card>
    </el-form>
    <div class="fixed-footer-wrap">
      <div class="fixed-footer">
        <el-button type="primary" :loading="loading" @click="confirm(formRef)">保存配置</el-button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref, computed } from 'vue'
import { getStorageInfo, editStorage, addDriver } from '@/addon/tk_pan/api/storage'
import { FormInstance, FormRules } from 'element-plus'
import { useRoute, useRouter } from 'vue-router'
const route = useRoute()
const router = useRouter()
const pageName = route.meta.title
const ruleFormRef = ref<FormInstance>()
const loading = ref(true)
const formRef = ref<FormInstance>()
const isAdmin = ref(false)
const checkAdmin = () => {
  let adminId = '00'
  let siteId = '-1'
  if (localStorage.getItem('admin.userinfo')) {
    adminId = JSON.parse(localStorage.getItem('admin.userinfo')).uid
  }
  if (localStorage.getItem('site.userinfo')) {
    siteId = JSON.parse(localStorage.getItem('site.userinfo')).uid
  }
  if (adminId === siteId) {
    isAdmin.value = true
  }
}
checkAdmin()
/**
 * 链接跳转
 */
const toLink = (link: any) => {
  router.push(link)
}
// 表单验证规则
const formRules = computed(() => {
  return {
    clientID: [
      { required: true, message: 'client_id必须填写', trigger: 'blur' }
    ],
    clientSecret: [
      { required: true, message: 'client_secret必须填写', trigger: 'blur' }
    ],
    dir: [
      { required: true, message: '目录名称必须填写', trigger: 'blur' }
    ]
  }
})
/**
 * 表单数据
 */
const initialFormData = {
  storage_type: '',
  clientID: '',
  clientSecret: '',
  dir: '',
  domain: 'https://vip.123pan.cn/id/dir',
  is_use: '0'
}
const formData: Record<string, any> = reactive({ ...initialFormData })

const getData = async () => {
  loading.value = true
  const data = await (await getStorageInfo('ott')).data
  Object.keys(formData).forEach((key: string) => {
    if (data[key] != undefined) formData[key] = data[key]
    if (data.params[key] != undefined) formData[key] = data.params[key].value
  })
  console.log(formData)
  loading.value = false
}
getData()
/**
 * 确认
 * @param formEl
 */
const confirm = async (formEl: FormInstance | undefined) => {
  if (loading.value || !formEl) return

  await formEl.validate(async (valid) => {
    if (valid) {
      loading.value = true
      const data = formData
      editStorage(data).then(res => {
        loading.value = false
      }).catch(() => {
        loading.value = false
        // showDialog.value = false
      })
    }
  })
}
</script>

<style lang="scss" scoped></style>
