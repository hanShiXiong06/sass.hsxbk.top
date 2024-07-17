<template>
  <div class="main-container">
    <el-card class="box-card !border-none" shadow="never">
      <div class="flex justify-between items-center">
        <span class="text-lg">{{ pageName }}</span>
        <el-button type="primary" @click="addEvent">
          {{ t("addSysDept") }}
        </el-button>
      </div>

      <el-card
        class="box-card !border-none my-[10px] table-search-wrap"
        shadow="never"
      >
        <el-form
          :inline="true"
          :model="sysDeptTable.searchParam"
          ref="searchFormRef"
        >
          <el-form-item :label="t('deptName')" prop="dept_name">
            <el-input
              v-model="sysDeptTable.searchParam.dept_name"
              :placeholder="t('deptNamePlaceholder')"
            />
          </el-form-item>
          <el-form-item :label="t('status')" prop="status">
            <el-select
              v-model="sysDeptTable.searchParam.status"
              clearable
              class="input-item"
              :placeholder="t('statusPlaceholder')"
            >
              <el-option :label="t('statusNormal')" :value="1"></el-option>
              <el-option :label="t('statusStop')" :value="0"></el-option>
            </el-select>
          </el-form-item>

          <el-form-item>
            <el-button type="primary" @click="loadSysDeptList()">{{
              t("search")
            }}</el-button>
            <el-button @click="resetForm(searchFormRef)">{{
              t("reset")
            }}</el-button>
          </el-form-item>
        </el-form>
      </el-card>

      <div class="mt-[10px]">
        <el-table
          :data="sysDeptTable.data"
          size="large"
          row-key="dept_name"
          v-loading="sysDeptTable.loading"
        >
          <template #empty>
            <span>{{ !sysDeptTable.loading ? t("emptyData") : "" }}</span>
          </template>
          <el-table-column
            prop="dept_name"
            :label="t('deptName')"
            min-width="120"
            :show-overflow-tooltip="true"
          />

          <el-table-column
            prop="sort"
            :label="t('sort')"
            min-width="120"
            :show-overflow-tooltip="true"
          />
          <el-table-column :label="t('status')" min-width="120" align="center">
            <template #default="{ row }">
              <el-tag class="ml-2" type="success" v-if="row.status == 1">{{
                t("statusNormal")
              }}</el-tag>
              <el-tag class="ml-2" type="error" v-if="row.status == 0">{{
                t("statusStop")
              }}</el-tag>
            </template>
          </el-table-column>

          <el-table-column
            :label="t('operation')"
            fixed="right"
            min-width="120"
          >
            <template #default="{ row }">
              <el-button type="primary" link @click="bindEvent(row)">{{
                t("bind")
              }}</el-button>
              <el-button type="primary" link @click="editEvent(row)">{{
                t("edit")
              }}</el-button>
              <el-button
                type="primary"
                link
                @click="deleteEvent(row.dept_id)"
                >{{ t("delete") }}</el-button
              >
            </template>
          </el-table-column>
        </el-table>
      </div>

      <edit
        ref="editSysDeptDialog"
        :menu-tree="sysDeptTable.data"
        @complete="loadSysDeptList"
      />
      <bind ref="bindSysDeptDialog" @complete="loadSysDeptList" />
    </el-card>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from "vue";
import { t } from "@/lang";
import {
  getSysDeptList,
  deleteSysDept,
} from "@/addon/data_scope/api/data_scope";
import { ElMessageBox, FormInstance } from "element-plus";
import Edit from "@/addon/data_scope/views/data_scope/components/sysdept-edit.vue";
import Bind from "@/addon/data_scope/views/data_scope/components/sysdept-bind.vue";
import { useRoute } from "vue-router";
const route = useRoute();
const pageName = route.meta.title;

let sysDeptTable = reactive({
  page: 1,
  limit: 10,
  total: 0,
  loading: true,
  data: [],
  searchParam: {
    site_id: "",
    dept_name: "",
    status: "",
  },
});

const searchFormRef = ref<FormInstance>();

// 选中数据
const selectData = ref<any[]>([]);

// 字典数据

/**
 * 获取部门列表
 */
const loadSysDeptList = (page: number = 1) => {
  sysDeptTable.loading = true;
  sysDeptTable.page = page;

  getSysDeptList({
    page: sysDeptTable.page,
    limit: sysDeptTable.limit,
    ...sysDeptTable.searchParam,
  })
    .then((res) => {
      sysDeptTable.loading = false;
      sysDeptTable.data = res.data;
    })
    .catch(() => {
      sysDeptTable.loading = false;
    });
};
loadSysDeptList();

const editSysDeptDialog: Record<string, any> | null = ref(null);
const bindSysDeptDialog: Record<string, any> | null = ref(null);

/**
 * 关联用户
 */
const bindEvent = (data: any) => {
  bindSysDeptDialog.value.setFormData(data);
  bindSysDeptDialog.value.showDialog = true;
};

/**
 * 添加部门
 */
const addEvent = () => {
  editSysDeptDialog.value.setFormData();
  editSysDeptDialog.value.showDialog = true;
};

/**
 * 编辑部门
 * @param data
 */
const editEvent = (data: any) => {
  editSysDeptDialog.value.setFormData(data);
  editSysDeptDialog.value.showDialog = true;
};

/**
 * 删除部门
 */
const deleteEvent = (id: number) => {
  ElMessageBox.confirm(t("sysDeptDeleteTips"), t("warning"), {
    confirmButtonText: t("confirm"),
    cancelButtonText: t("cancel"),
    type: "warning",
  }).then(() => {
    deleteSysDept(id)
      .then(() => {
        loadSysDeptList();
      })
      .catch(() => {});
  });
};

const resetForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  formEl.resetFields();
  loadSysDeptList();
};
</script>

<style lang="scss" scoped>
/* 多行超出隐藏 */
.multi-hidden {
  word-break: break-all;
  text-overflow: ellipsis;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
</style>
