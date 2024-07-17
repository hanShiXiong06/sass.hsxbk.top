<template>
  <el-dialog
    v-model="showDialog"
    :title="t('bindUserDept')"
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
      <el-form-item :label="t('userName')" prop="uid">
        <el-select
          :model-value="uid"
          :placeholder="t('accountNumberPlaceholder')"
          class="input-width"
          filterable
          clearable
          multiple
          :default-first-option="true"
          @change="selectUser"
        >
          <el-option
            v-for="item in userList"
            :key="item.uid"
            :label="item.username"
            :value="item.uid"
          >
            <div class="flex items-center">
              <el-avatar
                :src="img(item.head_img)"
                size="small"
                class="mr-[10px]"
                v-if="item.head_img"
              />
              <img
                src="@/app/assets/images/member_head.png"
                alt=""
                class="mr-[10px] w-[24px]"
                v-else
              />
              {{ item.username }}
            </div>
          </el-option>
        </el-select>
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
import { bindUserToDept, getBindUser } from "@/addon/data_scope/api/data_scope";
import { getAllUserList } from "@/app/api/user";
import { img } from "@/utils/common";
import { AnyObject } from "@/types/global";

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
};
const formData: Record<string, any> = reactive({ ...initialFormData });

const formRef = ref<FormInstance>();

// 表单验证规则
const formRules = computed(() => {
  return {
    uid: [
      {
        validator: (rule: any, value: string, callback: any) => {
          if (!formData.uid && uid.value === "")
            callback(new Error(t("managerPlaceholder")));
          else callback();
        },
        trigger: "blur",
      },
    ],
  };
});

const emit = defineEmits(["complete"]);

const uid = ref<number | string>("");
const userList = ref<AnyObject>([]);
const getUserList = () => {
  getAllUserList({})
    .then(({ data }) => {
      userList.value = data;
    })
    .catch();
};
getUserList();

const selectUser = (value: any) => {
  uid.value = value;
};

/**
 * 确认
 * @param formEl
 */
const confirm = async (formEl: FormInstance | undefined) => {
  if (loading.value || !formEl) return;
  let save = bindUserToDept;

  await formEl.validate(async (valid) => {
    if (valid) {
      loading.value = true;

      let data = formData;
      data.uid = uid.value;
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
  initialFormData.dept_id = row.dept_id;
  Object.assign(formData, initialFormData);
  loading.value = true;
  if (row) {
    const data = await (await getBindUser(row.dept_id)).data;
    uid.value = data;
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

