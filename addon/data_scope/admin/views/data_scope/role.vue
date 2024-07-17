<template>
  <div class="main-container">
    <el-card class="box-card !border-none" shadow="never">
      <div class="flex justify-between items-center">
        <span class="text-lg">{{ pageName }}</span>
        <el-button type="primary" @click="asyncEvent">
          {{ t("asyncRole") }}
        </el-button>
      </div>
      <el-alert title="" type="success">
        <template #default>
          <p>1、添加、删除、编辑角色，请移步至 权限管理 -> 角色管理</p>
          <p>
            2、由于不对主框架进行侵入开发，如已进行上述操作，请点击右侧的
            "同步角色" 按钮，保证此插件附表数据与角色表一致
          </p>
        </template>
      </el-alert>
      <div>
        <el-table
          :data="roleTableData.data"
          size="large"
          v-loading="roleTableData.loading"
        >
          <template #empty>
            <span>{{ !roleTableData.loading ? t("emptyData") : "" }}</span>
          </template>
          <el-table-column prop="role_name" :label="t('roleName')" />
          <el-table-column :label="t('status')">
            <template #default="{ row }">
              <el-tag type="success" v-if="row.status == 1">{{
                row.status_name
              }}</el-tag>
              <el-tag type="error" v-if="row.status == 0">{{
                row.status_name
              }}</el-tag>
            </template>
          </el-table-column>
          <el-table-column
            prop="create_time"
            :label="t('createTime')"
          ></el-table-column>
          <el-table-column
            :label="t('operation')"
            align="right"
            fixed="right"
            width="130"
          >
            <template #default="{ row }">
              <el-button type="primary" link @click="authEvent(row)">{{
                t("auth")
              }}</el-button>
            </template>
          </el-table-column>
        </el-table>

        <div class="mt-[16px] flex justify-end">
          <el-pagination
            v-model:current-page="roleTableData.page"
            v-model:page-size="roleTableData.limit"
            layout="total, sizes, prev, pager, next, jumper"
            :total="roleTableData.total"
            @size-change="loadRoleList()"
            @current-change="loadRoleList"
          />
        </div>
      </div>

      <auth-role ref="editRoleDialog" @complete="loadRoleList()" />
    </el-card>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive } from "vue";
import { t } from "@/lang";
import { getRoleList } from "@/app/api/sys";
import { syncRole } from "@/addon/data_scope/api/data_scope";
import AuthRole from "@/addon/data_scope/views/data_scope/components/scope-auth.vue";
import { useRoute } from "vue-router";
import { ElMessage } from "element-plus";

const route = useRoute();
const pageName = route.meta.title;
const roleTableData = reactive({
  page: 1,
  limit: 10,
  total: 0,
  loading: true,
  data: [],
  searchParam: {
    search: "",
  },
});

/**
 * 获取角色列表
 */
const loadRoleList = (page: number = 1) => {
  roleTableData.loading = true;
  roleTableData.page = page;

  getRoleList({
    page: roleTableData.page,
    limit: roleTableData.limit,
    role_name: roleTableData.searchParam.search,
  })
    .then((res) => {
      roleTableData.loading = false;
      roleTableData.data = res.data.data;
      roleTableData.total = res.data.total;
    })
    .catch(() => {
      roleTableData.loading = false;
    });
};
loadRoleList();

// 同步角色信息
const asyncEvent = () => {
  syncRole().then((res) => {
    ElMessage.success(res.msg);
  });
};

const editRoleDialog: Record<string, any> | null = ref(null);

/**
 * 权限角色
 * @param data
 */
const authEvent = (data: any) => {
  editRoleDialog.value.setFormData(data);
  editRoleDialog.value.showDialog = true;
};
</script>

<style lang="scss" scoped></style>
