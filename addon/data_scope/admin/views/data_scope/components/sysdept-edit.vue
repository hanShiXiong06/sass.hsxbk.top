<template>
  <el-dialog
    v-model="showDialog"
    :title="formData.dept_id ? t('updateSysDept') : t('addSysDept')"
    width="50%"
    class="diy-dialog-wrap"
    :destroy-on-close="true"
  >
    <el-form
      :model="formData"
      label-width="120px"
      ref="formRef"
      :rules="formRules"
      class="page-form"
      v-loading="loading"
    >
      <el-form-item :label="t('pDeptId')">
        <el-tree-select
          v-model="formData.p_dept_id"
          :props="{ label: 'dept_name', value: 'dept_id' }"
          :data="pDeptIdList"
          :render-after-expand="false"
        />
      </el-form-item>

      <el-form-item :label="t('deptName')" prop="dept_name">
        <el-input
          v-model="formData.dept_name"
          clearable
          :placeholder="t('deptNamePlaceholder')"
          class="input-width"
        />
      </el-form-item>

      <el-form-item :label="t('sort')">
        <el-input-number
          v-model="formData.sort"
          clearable
          :placeholder="t('sortPlaceholder')"
        />
      </el-form-item>

      <el-form-item :label="t('status')">
        <el-radio-group v-model="formData.status">
          <el-radio :label="1">{{ t("statusNormal") }}</el-radio>
          <el-radio :label="0">{{ t("statusStop") }}</el-radio>
        </el-radio-group>
      </el-form-item>
    </el-form>

    <template #footer>
      <span class="dialog-footer">
        <el-button @click="showDialog = false">{{ t("cancel") }}</el-button>
        <el-button
          type="primary"
          :loading="loading"
          @click="confirm(formRef)"
          >{{ t("confirm") }}</el-button
        >
      </span>
    </template>
  </el-dialog>
</template>

<script lang="ts" setup>
import { ref, reactive, computed, watch } from "vue";
import { t } from "@/lang";
import type { FormInstance } from "element-plus";
import {
  addSysDept,
  editSysDept,
  getSysDeptInfo,
} from "@/addon/data_scope/api/data_scope";

let showDialog = ref(false);
const loading = ref(false);

const props = defineProps({
  menuTree: {
    type: Array,
    default: [],
  },
});
const pDeptIdList = ref([] as any[]);
watch(
  () => props.menuTree,
  async (val) => {
    pDeptIdList.value = [{ dept_name: "顶级", dept_id: 0 }];
    pDeptIdList.value.push(...val);
  }
);

/**
 * 表单数据
 */
const initialFormData = {
  dept_id: "",
  p_dept_id: "",
  dept_name: "",
  sort: 20,
  status: 1,
};
const formData: Record<string, any> = reactive({ ...initialFormData });

const formRef = ref<FormInstance>();

// 表单验证规则
const formRules = computed(() => {
  return {
    p_dept_id: [
      { required: true, message: t("pDeptIdPlaceholder"), trigger: "blur" },
    ],
    dept_name: [
      { required: true, message: t("deptNamePlaceholder"), trigger: "blur" },
    ],
    sort: [{ required: true, message: t("sortPlaceholder"), trigger: "blur" }],
    status: [
      { required: true, message: t("statusPlaceholder"), trigger: "blur" },
    ],
  };
});

const emit = defineEmits(["complete"]);

/**
 * 确认
 * @param formEl
 */
const confirm = async (formEl: FormInstance | undefined) => {
  if (loading.value || !formEl) return;
  let save = formData.dept_id ? editSysDept : addSysDept;

  await formEl.validate(async (valid) => {
    if (valid) {
      loading.value = true;

      let data = formData;

      save(data)
        .then((res) => {
          loading.value = false;
          showDialog.value = false;
          emit("complete");
        })
        .catch((err) => {
          loading.value = false;
        });
    }
  });
};

// 获取字典数据

const setFormData = async (row: any = null) => {
  Object.assign(formData, initialFormData);
  loading.value = true;
  if (row) {
    const data = await (await getSysDeptInfo(row.dept_id)).data;
    if (data)
      Object.keys(formData).forEach((key: string) => {
        if (data[key] != undefined) formData[key] = data[key];
      });
  }
  loading.value = false;
};

defineExpose({
  showDialog,
  setFormData,
});
</script>

<style lang="scss" scoped></style>
<style lang="scss">
.diy-dialog-wrap .el-form-item__label {
  height: auto !important;
}
</style>
