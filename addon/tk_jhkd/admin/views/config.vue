<template>
  <div class="main-container">
    <el-form :model="formData" label-width="150px" ref="ruleFormRef" :rules="rules" class="page-form"
      v-loading="loading">
      <el-card class="box-card !border-none" shadow="never">
        <el-descriptions title="配置说明" column="1">
          <el-descriptions-item label="价格说明">计算价格系统会限制在优惠价格和官方价格之间，低于优惠价会自动加2元，高于官方价会自动减0.02</el-descriptions-item>
          <el-descriptions-item label="充值说明">对接后台账户余额大于100元才能下单</el-descriptions-item>
          <el-descriptions-item label="回调地址">必须在对应平台后台配置正确回调地址才能下单</el-descriptions-item>
          <el-descriptions-item label="取消订单">配置为0,客户揽收推送前可以取消，如30,不管是否揽收，客户30分钟后就不能自主取消订单</el-descriptions-item>
        </el-descriptions>
        <el-card class="!border-none" shadow="never" style="width: 640px">
          <el-alert type="warning" title="使用前请先完成基本设置" :closable="false" show-icon />
        </el-card>
        <el-form-item label="平台余额" v-if="balance">
          <span class="text-sm text-bold capitalize">{{ balance }}</span>
        </el-form-item>
        <el-form-item label="发单方式" prop="autosend">
          <el-radio-group v-model="formData.autosend">
            <el-radio :label="'0'">手动</el-radio>
            <el-radio :label="'1'">自动</el-radio>
          </el-radio-group>
        </el-form-item>
        <!-- <el-form-item :label="t('bindMobile')" prop="bindMobile">
          <el-input
            v-model="formData.bindMobile"
            style="width: 200px"
            :placeholder="t('bindMobilePlaceholder')"
          />
        </el-form-item>
        <el-form-item :label="t('username')" prop="username">
          <el-input
            v-model="formData.username"
            style="width: 200px"
            :placeholder="t('usernamePlaceholder')"
          />
        </el-form-item>

        <el-form-item :label="t('privateKey')" prop="privateKey">
          <el-input
            v-model="formData.privateKey"
            style="width: 200px"
            :placeholder="t('privateKeyPlaceholder')"
          />
        </el-form-item> -->

        <el-form-item :label="t('floatWay')" prop="floatWay">
          <el-radio-group v-model="formData.floatWay">
            <el-radio :label="'floatWayFixed'">{{
              t("floatWayFixed")
            }}</el-radio>
            <el-radio :label="'floatWayRate'">{{ t("floatWayRate") }}</el-radio>
            <el-radio :label="'floatWayBetwn'">{{
              t("floatWayBetwn")
            }}</el-radio>
          </el-radio-group>
        </el-form-item>

        <el-form-item :label="t('floatAmount')" prop="floatAmount" v-if="formData.floatWay == 'floatWayFixed'">
          <el-input v-model="formData.floatAmount" style="width: 200px" :placeholder="t('floatAmountPlaceholder')" />
          <span class="ml-[4px]">元</span>
        </el-form-item>

        <el-form-item :label="t('floatRate')" prop="floatRate" v-if="formData.floatWay == 'floatWayRate'">
          <el-input v-model="formData.floatRate" style="width: 200px" :placeholder="t('floatRatePlaceholder')" />
          <span class="ml-[4px]">%</span>
        </el-form-item>
        <el-form-item v-if="formData.floatWay == 'floatWayBetwn'">
          <span class="ml-[4px] mr-2">首重降价</span>
          <el-input v-model="formData.firstAmount" style="width: 80px" :placeholder="t('floatRatePlaceholder')" />
          <span class="ml-[4px] mr-2 ml-6">续重降价</span>
          <el-input v-model="formData.secondAmount" style="width: 80px" :placeholder="t('floatRatePlaceholder')" />
        </el-form-item>
        <el-form-item label="取消订单">
          <el-input v-model="formData.cancelmin" style="width: 80px" placeholder="单位分" />
          <span class="ml-2">单位:分</span>
        </el-form-item>
        <el-popover placement="top-start" title="" :width="200" trigger="hover" content="请在易达后台配置回调地址">
          <template #reference>
            <el-form-item label="易达回调地址">
              <span class="ml-[4px]">{{ formData.noticeurl }}</span>
              <div style="width: 640px"></div>
            </el-form-item>
          </template>
        </el-popover>
        <el-popover placement="top-start" title="" :width="200" trigger="hover" content="请在云洋后台配置回调地址">
          <template #reference>
            <el-form-item label="云洋回调地址">
              <span class="ml-[4px]">{{ formData.noticeurlyy }}</span>
              <div style="width: 640px"></div>
            </el-form-item>
          </template>
        </el-popover>
        <el-popover placement="top-start" title="" :width="200" trigger="hover" content="请在辛达后台配置回调地址">
          <template #reference>
            <el-form-item label="辛达回调地址">
              <span class="ml-[4px]">{{ formData.noticeurlxd }}</span>
              <div style="width: 640px"></div>
            </el-form-item>
          </template>
        </el-popover>
      </el-card>
    </el-form>
    <div class="fixed-footer-wrap">
      <div class="fixed-footer">
        <el-button type="primary" @click="onSave()">{{ t("save") }}</el-button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from "vue";
import { t } from "@/lang";
import {
  getJhkdConfig,
  setJhkdConfig,
  getBalance,
} from "@/addon/tk_jhkd/api/tkjhkd";
import { FormInstance, ElMessage } from "element-plus";
const loading = ref(true);
const ruleFormRef = ref<FormInstance>();
const balance = ref();
const formData = reactive({
  username: "",
  privateKey: "",
  floatWay: "floatWayFixed",
  floatAmount: "2",
  firstAmount: "2",
  secondAmount: "2",
  floatRate: "10",
  noticeurl: "",
  noticeurlyy: "",
  noticeurlxd: "",
  bindMobile: "",
  autosend: "1",
  cancelmin: "120",
});
const getData = async () => {
  const data = await getJhkdConfig({});
  loading.value = false;
  for (const key in formData) {
    formData[key] = data.data.value[key];
  }
  const data1 = await getBalance();
  balance.value = data1.msg;
  if (balance.value <= 100) {
    ElMessage("可用余额不大于100，为保证正常下单请前往充值");
  }
};
getData();
const onSave = async () => {
  await setJhkdConfig(formData);
  getData();
};
</script>

<style lang="scss" scoped></style>
