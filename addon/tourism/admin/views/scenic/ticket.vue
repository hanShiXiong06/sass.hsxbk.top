<template>
    <div class="main-container">
        <el-card class="box-card !border-none" shadow="never">

            <div class="flex justify-between items-center">
                <div class="detail-head">
                    <div class="left" @click="router.push({ path: '/tourism/product/scenic/scenic' })">
                        <span class="iconfont iconxiangzuojiantou !text-xs"></span>
                        <span class="ml-[1px]">{{ t('returnToPreviousPage') }}</span>
                        <span class="adorn">|</span>
                        <span class="right">{{ pageName }}</span>
                    </div>
                </div>
                <el-button type="primary" class="w-[100px]" @click="addEvent">
                    {{ t('addTicket') }}
                </el-button>
            </div>
            <el-card class="box-card !border-none my-[10px] table-search-wrap" shadow="never">
                <el-form :inline="true" :model="tourismScenicTable.searchParam" ref="searchFormRef">
                    <el-form-item :label="t('ticketName')" prop="goods_name">
                        <el-input v-model="tourismScenicTable.searchParam.goods_name"
                            :placeholder="t('scenicNamePlaceholder')" />
                    </el-form-item>
                    <el-form-item :label="t('createTime')" prop="create_time">
                        <el-date-picker v-model="tourismScenicTable.searchParam.create_time" type="datetimerange"
                            value-format="YYYY-MM-DD HH:mm:ss" :start-placeholder="t('startDate')"
                            :end-placeholder="t('endDate')" />
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="loadTourismScenicList()">{{ t('search') }}</el-button>
                        <el-button @click="resetForm(searchFormRef)">{{ t('reset') }}</el-button>
                    </el-form-item>
                </el-form>
            </el-card>

            <div class="mt-[10px]">
                <el-table :data="tourismScenicTable.data" size="large" v-loading="tourismScenicTable.loading">
                    <template #empty>
                        <span>{{ !tourismScenicTable.loading ? t('emptyData') : '' }}</span>
                    </template>
                    <el-table-column prop="goods_name" :label="t('ticketName')" min-width="120" />
                    <el-table-column prop="price" :label="t('ticketPrice')" min-width="120" />
                    <el-table-column prop="stock" :label="t('ticketStock')" min-width="120" />
                    <el-table-column prop="status_name" :label="t('status')" min-width="120" />
                    <el-table-column prop="create_time" :label="t('createTime')" min-width="170" />
                    <el-table-column :label="t('operation')" fixed="right" min-width="150" align="right">
                        <template #default="{ row }">
                            <el-button type="primary" link @click="renew(0, row.goods_id)" v-if="row.status == 1">{{
                                t('down') }}</el-button>
                            <el-button type="primary" link @click="renew(1, row.goods_id)" v-if="row.status == 0">{{ t('up')
                            }}</el-button>
                            <el-button type="primary" link @click="editEvent(row)">{{ t('edit') }}</el-button>
                            <el-button type="primary" link @click="deleteEvent(row.goods_id)">{{ t('delete') }}</el-button>
                        </template>
                    </el-table-column>

                </el-table>
                <div class="mt-[16px] flex justify-end">
                    <el-pagination v-model:current-page="tourismScenicTable.page"
                        v-model:page-size="tourismScenicTable.limit" layout="total, sizes, prev, pager, next, jumper"
                        :total="tourismScenicTable.total" @size-change="loadTourismScenicList()"
                        @current-change="loadTourismScenicList" />
                </div>
            </div>

        </el-card>
    </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'
import { t } from '@/lang'
import { getTicketList, deleteTicket, editTicketStatus } from '@/addon/tourism/api/tourism'
import { ElMessageBox, FormInstance } from 'element-plus'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const pageName = route.meta.title
const id: number = parseInt(route.query.id as string)
const tourismScenicTable = reactive({
    page: 1,
    limit: 10,
    total: 0,
    loading: true,
    data: [],
    searchParam: {
        goods_name: '',
        create_time: ''
    }
})

const searchFormRef = ref<FormInstance>()

/**
 * 获取门票列表
 */
const loadTourismScenicList = (page: number = 1) => {
    tourismScenicTable.loading = true
    tourismScenicTable.page = page

    getTicketList({
        scenic_id: id,
        page: tourismScenicTable.page,
        limit: tourismScenicTable.limit,
        ...tourismScenicTable.searchParam
    }).then(res => {
        tourismScenicTable.loading = false
        tourismScenicTable.data = res.data.data
        tourismScenicTable.total = res.data.total
    }).catch(() => {
        tourismScenicTable.loading = false
    })
}
loadTourismScenicList()

const router = useRouter()

/**
 * 添加门票
 */
const addEvent = () => {
    router.push('/tourism/product/scenic/edit_ticket?scenic_id=' + id)
}

/**
 * 编辑门票
 * @param data
 */
const editEvent = (data: any) => {
    router.push('/tourism/product/scenic/edit_ticket?scenic_id=' + id + '&id=' + data.goods_id)
}

/**
 * 删除门票
 */
const deleteEvent = (id: number) => {
    ElMessageBox.confirm(t('tourismScenicDeleteTips'), t('warning'),
        {
            confirmButtonText: t('confirm'),
            cancelButtonText: t('cancel'),
            type: 'warning'
        }
    ).then(() => {
        deleteTicket(id).then(() => {
            loadTourismScenicList()
        }).catch(() => {
        })
    })
}

const resetForm = (formEl: FormInstance | undefined) => {
    if (!formEl) return
    formEl.resetFields()
    loadTourismScenicList()
}

const renew = (tag: number, id: number) => {
    editTicketStatus({
        status: tag,
        goods_id: id
    }).then(() => {
        loadTourismScenicList()
    })
}
</script>

<style lang="scss" scoped></style>
