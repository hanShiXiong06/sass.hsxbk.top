<template>
  <el-form ref="formRef" :model="formData" :rules="formRules">
    <el-form-item label="" prop="discount" class="!mb-[10px]">
      <div>
        <div class="flex items-center">
          <el-checkbox
            v-model="formData.is_use"
            :true-label="1"
            :false-label="0"
            label=""
            size="large"
          />
          <span class="ml-[10px] el-form-item__label">聚合快递分销</span>
          <div class="w-[680px]" v-show="formData.is_use">
            <span class="ml-[10px] el-form-item__label">分销方式</span>
            <el-radio-group v-model="formData.fenxiao_type">
              <el-radio :label="0">按比例</el-radio>
              <el-radio :label="1">按固定金额</el-radio>
            </el-radio-group>
            <div
              v-if="formData.fenxiao_type == 0"
              class="flex items-center mt-[5px]"
            >
              <span class="ml-[10px] mr-4">一级分销</span>
              <el-input
                style="width: 80px"
                v-model="formData.first_rate"
                placeholder="请输入"
                class="w-[120px]"
              />
              <span class="ml-[5px]">%</span>
            </div>
            <div
              v-if="formData.fenxiao_type == 0"
              class="flex items-center mt-[5px]"
            >
              <span class="ml-[10px] mr-4">二级分销</span>
              <el-input
                style="width: 80px"
                v-model="formData.second_rate"
                placeholder="请输入"
                class="w-[120px]"
              />
              <span class="ml-[5px]">%</span>
            </div>

            <div
              v-if="formData.fenxiao_type == 1"
              class="flex items-center mt-[5px]"
            >
              <span class="ml-[10px] mr-4">一级分销</span>
              <el-input
                style="width: 80px"
                v-model="formData.first_commission"
                placeholder="请输入"
                class="w-[120px]"
              />
              <span class="ml-[5px]">元</span>
            </div>

            <div
              v-if="formData.fenxiao_type == 1"
              class="flex items-center mt-[5px]"
            >
              <span class="ml-[10px] mr-4">二级分销</span>
              <el-input
                style="width: 80px"
                v-model="formData.second_commission"
                placeholder="请输入"
                class="w-[120px]"
              />
              <span class="ml-[5px]">元</span>
            </div>
          </div>
        </div>
        <div class="text-sm text-gray-400 mb-[5px]">
          开启后将获得推广权限，将可以获取推广订单的返利，如不需开启二级分销，填写0即可
        </div>
      </div>
    </el-form-item>
  </el-form>
</template>

<script lang="ts" setup>
import { computed, reactive, ref, watch } from "vue";
import { FormRules } from "element-plus";
import Test from "@/utils/test";

const props = defineProps({
  modelValue: {
    type: Object,
    default: () => {
      return {};
    },
  },
});
const emits = defineEmits(["update:modelValue"]);

const formData = ref({
  is_use: 0,
  fenxiao_type: "",
  first_rate: "",
  second_rate: "",
  first_commission: "",
  second_commission: "",
});
const formRef = ref(null);

const formRules = reactive<FormRules>({
  expand: [
    {
      validator: (rule: any, value: any, callback: any) => {
        if (formData.value.is_use) {
          if (Test.empty(formData.value.expand)) {
            callback("请输入折扣");
          }
          if (!Test.decimal(formData.value.expand, 1)) {
            callback("折扣格式错误");
          }
          if (
            parseFloat(formData.value.expand) < 0.1 ||
            parseFloat(formData.value.expand) > 9.9
          ) {
            callback("折扣只能输入0.1~9.9之间的值");
          }
          if (formData.value.discount <= 0) {
            callback("折扣不能小于等于0");
          }
          callback();
        } else {
          callback();
        }
      },
    },
  ],
});

const value = computed({
  get() {
    return props.modelValue;
  },
  set(value) {
    emits("update:modelValue", value);
  },
});

watch(
  () => value.value,
  (nval, oval) => {
    if ((!oval || !Object.keys(oval).length) && Object.keys(nval).length) {
      formData.value = value.value;
    }
  },
  { immediate: true }
);

watch(
  () => formData.value,
  () => {
    value.value = formData.value;
  },
  { deep: true }
);

const verify = async () => {
  let verify = true;
  await formRef.value?.validate((valid) => {
    verify = valid;
  });
  return verify;
};

defineExpose({
  verify,
});
</script>

<style lang="scss" scoped>
</style>
