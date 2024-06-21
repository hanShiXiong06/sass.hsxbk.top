<template>
  <div class="main-container">
    <el-form
      :model="formData"
      label-width="140px"
      ref="formRef"
      :rules="formRules"
      class="page-form"
      v-loading="loading"
    >
      <el-card class="box-card !border-none" shadow="never">
        <el-card class="!border-none" shadow="never" style="width: 640px">
          <el-alert
            type="warning"
            title="请完善接口信息为自己后台信息"
            :closable="false"
            show-icon
          />
        </el-card>

        <el-form-item label="聚推客pub_id" prop="pub_id">
          <el-input
            v-model="formData.pub_id"
            placeholder="聚推客pub_id后台身份ID"
            class="input-width"
            clearable
          />
        </el-form-item>

        <el-form-item label="聚推客apikey" prop="api_key">
          <el-input
            v-model="formData.api_key"
            placeholder="聚推客apikey"
            class="input-width"
            clearable
          />
        </el-form-item>
        <el-form-item label="蚂蚁星球apikey" prop="mapi_key">
          <el-input
            v-model="formData.mapi_key"
            placeholder="蚂蚁星球apikey"
            class="input-width"
            clearable
          />
        </el-form-item>
        <el-form-item label="蚂蚁星球secret" prop="secret">
          <el-input
            v-model="formData.secret"
            placeholder="蚂蚁星球secret"
            class="input-width"
            clearable
          />
        </el-form-item>
        <el-form-item label="站点key" prop="site_key">
          <el-input
            disabled="true"
            v-model="formData.site_key"
            placeholder="站点key"
            class="input-width"
            clearable
          />
        </el-form-item>
      </el-card>
    </el-form>

    <div class="!border-none mt-4" shadow="never" style="width: 640px">
      <el-alert
        type="info"
        title="这里上传的是带插件的小程序，请先在渠道-微信小程序里面配置好小程序APPID、密钥和上传密钥，小程序需要关闭白名单或者放行IP"
        :closable="false"
        show-icon
      />
      <el-button
        :loading="loading"
        class="mb-6 ml-6"
        type="primary"
        @click="codeUploadEvent()"
      >
        云上传小程序
      </el-button>
    </div>
    <div class="fixed-footer-wrap">
      <div class="fixed-footer">
        <el-button
          type="primary"
          :loading="loading"
          @click="confirm(formRef)"
          >{{ t("confirm") }}</el-button
        >
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref, computed } from "vue";
import { t } from "@/lang";
import {
  getConfig,
  setConfig,
  downCode,
  addFile,
  delFile,
  codeUpload,
} from "@/addon/tk_cps/api/config";
import { FormInstance, FormRules } from "element-plus";
import { useRoute, useRouter } from "vue-router";
const route = useRoute();
const router = useRouter();
const pageName = route.meta.title;
const ruleFormRef = ref<FormInstance>();
const isAdmin = ref(false);
const loading = ref(true);
const codeUploadEvent = async () => {
  loading.value = true;
  try {
    await codeUpload();
    router.push("/channel/weapp/code");
  } catch (error) {
  } finally {
    loading.value = false;
  }
};

const formRef = ref<FormInstance>();
const checkAdmin = () => {
  let adminId = "00";
  let siteId = "-1";
  if (localStorage.getItem("admin.userinfo")) {
    adminId = JSON.parse(localStorage.getItem("admin.userinfo")).uid;
  }
  if (localStorage.getItem("site.userinfo")) {
    siteId = JSON.parse(localStorage.getItem("site.userinfo")).uid;
  }
  if (adminId === siteId) {
    isAdmin.value = true;
  }
};
checkAdmin();
const downCodeEvent = async () => {
  const res = await downCode();
  const fileUrl = res.data;
  const link = document.createElement("a");
  link.href = fileUrl;
  link.target = "_blank";
  link.download = "uniapp.zip";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
/**
 * 链接跳转
 */
const toLink = (link: any) => {
  router.push(link);
};
// 表单验证规则
const formRules = computed(() => {
  return {
    pub_id: [
      { required: true, message: "聚推客pub_id必须填写", trigger: "blur" },
    ],
    api_key: [
      { required: true, message: "聚推客apikey必须填写", trigger: "blur" },
    ],
    mapi_key: [
      { required: true, message: "蚂蚁星球apikey必须填写", trigger: "blur" },
    ],
    secret: [
      { required: true, message: "蚂蚁星球secret必须填写", trigger: "blur" },
    ],
  };
});
/**
 * 表单数据
 */
const initialFormData = {
  pub_id: "",
  api_key: "",
  mapi_key: "",
  secret: "",
  site_key: "",
};
const formData: Record<string, any> = reactive({ ...initialFormData });

const getData = async () => {
  loading.value = true;
  const data = await getConfig();
  for (const key in formData) {
    formData[key] = data.data[key];
  }
  loading.value = false;
};
getData();
/**
 * 确认
 * @param formEl
 */
const confirm = async (formEl: FormInstance | undefined) => {
  if (loading.value || !formEl) return;

  await formEl.validate(async (valid) => {
    if (valid) {
      loading.value = true;
      const data = formData;
      setConfig(data)
        .then((res) => {
          loading.value = false;
        })
        .catch(() => {
          loading.value = false;
          // showDialog.value = false
        });
    }
  });
};
</script>

<style lang="scss" scoped></style>
