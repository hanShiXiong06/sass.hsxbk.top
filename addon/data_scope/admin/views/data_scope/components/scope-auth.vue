<template>
  <el-dialog
    v-model="showDialog"
    :title="popTitle"
    width="500px"
    :destroy-on-close="true"
  >
    <el-form
      :model="formData"
      label-width="90px"
      ref="formRef"
      :rules="formRules"
      class="page-form"
      v-loading="loading"
    >
      <el-form-item :label="t('ruleType')" prop="data_scope">
        <el-select
          v-model="formData.data_scope"
          clearable
          class="input-item"
          :placeholder="t('ruleTypePlaceholder')"
        >
          <el-option
            v-for="(item, index) in ruleData"
            :label="item"
            :value="index"
          ></el-option>
        </el-select>
      </el-form-item>

      <el-form-item
        :label="t('deptList')"
        prop="dept_ids"
        v-show="formData.data_scope == 2"
      >
        <div class="flex items-center justify-between w-11/12">
          <div>
            <el-checkbox v-model="selectAll" :label="t('selectAll')" />
            <el-checkbox
              v-model="formData.check_strictly"
              :label="t('checkStrictly')"
            />
          </div>
          <el-button link type="primary" @click="menuAction()">{{
            t("foldText")
          }}</el-button>
        </div>
        <el-scrollbar height="35vh" class="w-full">
          <el-tree
            :data="depts"
            :props="{ label: 'dept_name', value: 'dept_id' }"
            :default-checked-keys="formData.dept_ids"
            :check-strictly="formData.check_strictly"
            show-checkbox
            default-expand-all
            @check-change="handleCheckChange"
            node-key="dept_id"
            ref="treeRef"
          />
        </el-scrollbar>
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

<script lang="ts" setup async>
import { ref, reactive, computed, watch, toRaw, nextTick } from "vue";
import { t } from "@/lang";
import type { FormInstance } from "element-plus";
import {
  getScopeInfo,
  saveScopeInfo,
  getScopeRuleList,
  getSysDeptList,
} from "@/addon/data_scope/api/data_scope";
import { debounce } from "@/utils/common";

const showDialog = ref(false);
const loading = ref(false);
const isOpen = ref(true);

let popTitle: string = "";

// 获取部门数据
const depts = ref<Record<string, any>[]>([]);
getSysDeptList().then((res) => {
  depts.value = res.data;
});

// 全选
const selectAll = ref(false);
const treeRef: Record<string, any> | null = ref(null);
watch(selectAll, () => {
  if (selectAll.value) {
    treeRef.value.setCheckedNodes(toRaw(depts.value));
  } else {
    treeRef.value.setCheckedNodes([]);
  }
});

const handleCheckChange = debounce((e) => {
  formData.dept_ids = treeRef.value.getCheckedKeys();
});

const menuAction = () => {
  if (isOpen.value) {
    collapseAll(depts.value);
    isOpen.value = false;
  } else {
    unFoldAll(depts.value);
    isOpen.value = true;
  }
};

// 全部展开
const unFoldAll = (data: any) => {
  Object.keys(data).forEach((key: string | any) => {
    treeRef.value.store.nodesMap[data[key].dept_id].expanded = true;
    if (data[key].children && data[key].children.length > 0)
      collapseAll(data[key].children);
  });
};
// 全部折叠
const collapseAll = (data: any) => {
  Object.keys(data).forEach((key: string | any) => {
    treeRef.value.store.nodesMap[data[key].dept_id].expanded = false;
    if (data[key].children && data[key].children.length > 0)
      collapseAll(data[key].children);
  });
};
/**
 * 表单数据
 */
const initialFormData = {
  role_id: 0,
  data_scope: "1",
  check_strictly: false,
  dept_ids: [],
};
const formData: Record<string, any> = reactive({ ...initialFormData });

const formRef = ref<FormInstance>();

// 字典数据
const ruleData = ref<any>([]);
const setDictData = async () => {
  ruleData.value = await (await getScopeRuleList()).data;
};
setDictData();

// 表单验证规则
const formRules = computed(() => {
  return {
    data_scope: [
      { required: true, message: t("ruleTypePlaceholder"), trigger: "blur" },
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
  const save = saveScopeInfo;

  await formEl.validate(async (valid) => {
    if (valid) {
      loading.value = true;

      const data = Object.assign({}, formData);
      data.dept_ids = data.dept_ids.concat(treeRef.value.getHalfCheckedKeys());
      save(data)
        .then((res) => {
          loading.value = false;
          showDialog.value = false;

          emit("complete");
        })
        .catch(() => {
          loading.value = false;
          // showDialog.value = false
        });
    }
  });
};

const setFormData = async (row: any = null) => {
  loading.value = true;
  selectAll.value = false;
  initialFormData.role_id = row.role_id;
  Object.assign(formData, initialFormData);
  if (row) {
    popTitle = t("setDataScope");
    const data = await (await getScopeInfo(row.role_id)).data;
    Object.keys(formData).forEach((key: string) => {
      if (data[key] != undefined) {
        if (key == "dept_ids") {
          const arr = data.dept_ids.split(",");
          const newArr: any = [];
          Object.keys(arr).forEach((i) => {
            nextTick(() => {
              treeRef.value.setChecked(arr[i], true, false);
            });
          });
          formData[key] = newArr;
        } else {
          formData[key] = data[key];
        }
      }
    });
    formData["check_strictly"] = !!formData["check_strictly"];
  }
  loading.value = false;
};

defineExpose({
  showDialog,
  setFormData,
});
</script>

<style lang="scss" scoped></style>
