<template>
    <div class="main-container">
        <el-card class="box-card !border-none" shadow="never">

            <div class="flex justify-between items-center">
                <div class="detail-head">
                    <div class="left" @click="router.push({ path: '/tourism/product/hotel/hotel' })">
                        <span class="iconfont iconxiangzuojiantou !text-xs"></span>
                        <span class="ml-[1px]">{{ t('returnToPreviousPage') }}</span>
                        <span class="adorn">|</span>
                        <span class="right">{{ pageName }}</span>
                    </div>
                </div>
                <el-button type="primary" class="w-[100px]" @click="addEvent">
                    {{ t('addTourismGoods') }}
                </el-button>
            </div>

            <el-card class="box-card !border-none my-[10px] table-search-wrap" shadow="never">
                <el-form :inline="true" :model="tourismGoodsTable.searchParam" ref="searchFormRef">
                    <el-form-item :label="t('goodsName')" prop="goods_name">
                        <el-input v-model="tourismGoodsTable.searchParam.goods_name"
                            :placeholder="t('goodsNamePlaceholder')" />
                    </el-form-item>
                    <el-form-item :label="t('createTime')" prop="create_time">
                        <el-date-picker v-model="tourismGoodsTable.searchParam.create_time" type="datetimerange"
                            value-format="YYYY-MM-DD HH:mm:ss" :start-placeholder="t('startDate')"
                            :end-placeholder="t('endDate')" />
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="loadTourismGoodsList()">{{ t('search') }}</el-button>
                        <el-button @click="resetForm(searchFormRef)">{{ t('reset') }}</el-button>
                    </el-form-item>
                </el-form>
            </el-card>

            <div class="mt-[10px]">
                <el-table :data="tourismGoodsTable.data" size="large" v-loading="tourismGoodsTable.loading">
                    <template #empty>
                        <span>{{ !tourismGoodsTable.loading ? t('emptyData') : '' }}</span>
                    </template>
                    <el-table-column :label="t('roomInfo')" min-width="240" align="left">
                        <template #default="{ row }">
                            <div class="flex">
                                <div class="min-w-[60px] h-[60px] flex items-center justify-center">
                                    <img class="max-w-[60px] max-h-[60px]" :src="img(row.cover_thumb_small)" />
                                </div>
                                <div class="flex flex flex-col ml-2">
                                    <span class="multi-hidden">{{ row.goods_name }}</span>
                                </div>
                            </div>
                        </template>
                    </el-table-column>
                    <el-table-column prop="price" :label="t('price')" min-width="120" />
                    <el-table-column prop="stock" :label="t('stock')" min-width="120" />
                    <el-table-column prop="create_time" :label="t('createTime')" min-width="120" />
                    <!-- <el-table-column prop="stock" :label="t('stock')" min-width="120" /> -->
                    <el-table-column prop="status_name" :label="t('status')" min-width="120" />
                    <el-table-column :label="t('operation')" align="right" fixed="right" min-width="160">
                        <template #default="{ row }">
                            <el-button type="primary" v-if="row.status == 0" link
                                @click="editStatusEvent(1, row.goods_id)">{{ t('up') }}</el-button>
                            <el-button type="primary" v-if="row.status == 1" link
                                @click="editStatusEvent(0, row.goods_id)">{{ t('down') }}</el-button>
                            <el-button type="primary" link @click="editEvent(row)">{{ t('edit') }}</el-button>
                            <el-button type="primary" link @click="deleteEvent(row.goods_id)">{{ t('delete') }}</el-button>
                        </template>
                    </el-table-column>

                </el-table>
                <div class="mt-[16px] flex justify-end">
                    <el-pagination v-model:current-page="tourismGoodsTable.page" v-model:page-size="tourismGoodsTable.limit"
                        layout="total, sizes, prev, pager, next, jumper" :total="tourismGoodsTable.total"
                        @size-change="loadTourismGoodsList()" @current-change="loadTourismGoodsList" />
                </div>
            </div>
        </el-card>
    </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'
import { t } from '@/lang'
import { getRoomList, deleteRoom, editRoomStatus } from '@/addon/tourism/api/tourism'
import { img } from '@/utils/common'
import { ElMessageBox, FormInstance } from 'element-plus'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const pageName = route.meta.title
const id: number = parseInt(route.query.id as string)

const tourismGoodsTable = reactive({
    page: 1,
    limit: 10,
    total: 0,
    loading: true,
    data: [],
    searchParam: {
        goods_name: '',
        create_time: []
    }
})

const searchFormRef = ref<FormInstance>()

/**
 * 获取商品表列表
 */
const loadTourismGoodsList = (page: number = 1) => {
    tourismGoodsTable.loading = true
    tourismGoodsTable.page = page

    getRoomList({
        hotel_id: id,
        page: tourismGoodsTable.page,
        limit: tourismGoodsTable.limit,
        ...tourismGoodsTable.searchParam
    }).then(res => {
        tourismGoodsTable.loading = false
        tourismGoodsTable.data = res.data.data
        tourismGoodsTable.total = res.data.total
    }).catch(() => {
        tourismGoodsTable.loading = false
    })
}
loadTourismGoodsList()

const router = useRouter()

/**
 * 添加商品
 */
const addEvent = () => {
    router.push('/tourism/product/hotel/edit_room?hotel_id=' + id)
}

/**
 * 编辑商品
 * @param data
 */
const editEvent = (data: any) => {
    router.push('/tourism/product/hotel/edit_room?hotel_id=' + id + '&id=' + data.goods_id)
}

/**
 * 商品上下架状态
 * @param data
 */
const editStatusEvent = (num: number, goodsId: number) => {
    const prompt = num == 1 ? t('upPrompt') : t('downPrompt')
    ElMessageBox.confirm(prompt, t('warning'),
        {
            confirmButtonText: t('confirm'),
            cancelButtonText: t('cancel'),
            type: 'warning'
        }
    ).then(() => {
        editRoomStatus({
            id: goodsId,
            status: num
        }).then(() => {
            loadTourismGoodsList()
        })
    })
}

/**
 * 删除商品表
 */
const deleteEvent = (id: number) => {
    ElMessageBox.confirm(t('tourismGoodsDeleteTips'), t('warning'),
        {
            confirmButtonText: t('confirm'),
            cancelButtonText: t('cancel'),
            type: 'warning'
        }
    ).then(() => {
        deleteRoom(id).then(() => {
            loadTourismGoodsList()
        }).catch(() => {
        })
    })
}
// 重置
const resetForm = (formEl: FormInstance | undefined) => {
    if (!formEl) return
    formEl.resetFields()
    loadTourismGoodsList()
}
</script>

<style lang="scss" scoped></style>
