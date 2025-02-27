<template>
    <div>

        1122
        <div @click="show">
            <slot>
                <el-button>{{ t('goodsSelectPopupSelectGoodsButton') }}</el-button>
                <div class="inline-block ml-[10px] text-[14px]" v-show="goodsIds.length">
                    <span>{{ t('goodsSelectPopupSelect') }}</span>
                    <span class="text-primary mx-[2px]">{{ goodsIds.length }}</span>
                    <span>{{ t('goodsSelectPopupPiece') }}</span>
                </div>
            </slot>
        </div>
        <el-dialog v-model="showDialog" :title="t('goodsSelectPopupSelectGoodsDialog')" width="1000px"
            :close-on-press-escape="false" :destroy-on-close="true" :close-on-click-modal="false">

            <el-form :inline="true" :model="goodsTable.searchParam" ref="searchFormRef">
                <el-form-item prop="select_type" class="form-item-wrap">
                    <el-select v-model="goodsTable.searchParam.select_type" @change="handleSelectTypeChange">
                        <el-option :label="t('goodsSelectPopupAllGoods')" value="all" />
                        <el-option :label="t('goodsSelectPopupSelectedGoods')" value="selected" />
                    </el-select>
                </el-form-item>
                <el-form-item :label="t('goodsSelectPopupGoodsName')" prop="keyword" class="form-item-wrap">
                    <el-input v-model="goodsTable.searchParam.keyword"
                        :placeholder="t('goodsSelectPopupGoodsNamePlaceholder')" maxlength="60" />
                </el-form-item>
                <el-form-item :label="t('goodsSelectPopupGoodsCategory')" prop="goods_category" class="form-item-wrap">
                    <el-cascader v-model="goodsTable.searchParam.goods_category" :options="goodsCategoryOptions"
                        :placeholder="t('goodsSelectPopupGoodsCategoryPlaceholder')" clearable
                        :props="{ value: 'value', label: 'label', emitPath: false }" />
                </el-form-item>
                <el-form-item :label="t('goodsSelectPopupGoodsType')" prop="goods_type" class="form-item-wrap">
                    <el-select v-model="goodsTable.searchParam.goods_type"
                        :placeholder="t('goodsSelectPopupGoodsTypePlaceholder')" clearable>
                        <el-option v-for="item in goodsType" :key="item.type" :label="item.name" :value="item.type" />
                    </el-select>
                </el-form-item>
                <el-form-item class="form-item-wrap">
                    <el-button type="primary" @click="loadGoodsList()">{{ t('search') }}</el-button>
                    <el-button @click="resetForm(searchFormRef)">{{ t('reset') }}</el-button>
                </el-form-item>
            </el-form>

            <el-table :data="goodsTable.data" size="large" v-loading="goodsTable.loading" ref="goodsListTableRef"
                max-height="400" @select="handleSelectChange" @select-all="handleSelectAllChange">
                <template #empty>
                    <span>{{ !goodsTable.loading ? t('emptyData') : '' }}</span>
                </template>
                <el-table-column type="selection" width="55" />
                <el-table-column prop="goods_id" :label="t('goodsSelectPopupGoodsInfo')" min-width="400">
                    <template #default="{ row }">
                        <div class="flex items-center cursor-pointer">
                            <div class="min-w-[60px] h-[60px] flex items-center justify-center">
                                <el-image v-if="row.goods_cover_thumb_small" class="w-[60px] h-[60px]"
                                    :src="img(row.goods_cover_thumb_small)" fit="contain">
                                    <template #error>
                                        <div class="image-slot">
                                            <img class="w-[60px] h-[60px]"
                                                src="@/addon/phone_shop/assets/goods_default.png" />
                                        </div>
                                    </template>
                                </el-image>
                                <img v-else class="w-[70px] h-[60px]" src="@/addon/phone_shop/assets/goods_default.png"
                                    fit="contain" />
                            </div>
                            <div class="ml-2">
                                <span :title="row.goods_name" class="multi-hidden">{{ row.goods_name }}</span>
                                <span class="text-primary text-[12px]">{{ row.goods_type_name }}</span>
                            </div>
                        </div>
                    </template>
                </el-table-column>

                <el-table-column prop="price" :label="t('goodsSelectPopupPrice')" min-width="120" align="right">
                    <template #default="{ row }">
                        <div>￥{{ row.goodsSku.price }}</div>
                    </template>
                </el-table-column>

                <el-table-column prop="stock" :label="t('goodsSelectPopupStock')" min-width="120" align="right" />

            </el-table>
            <div class="mt-[16px] flex">
                <div class="flex items-center flex-1">
                    <div class="layui-table-bottom-left-container mr-[10px]" v-show="selectGoodsNum">
                        <span>{{ t('goodsSelectPopupBeforeTip') }}</span>
                        <span class="text-primary mx-[2px]">{{ selectGoodsNum }}</span>
                        <span>{{ t('goodsSelectPopupAfterTip') }}</span>
                    </div>
                    <el-button type="primary" link @click="clear" v-show="selectGoodsNum">{{
                        t('goodsSelectPopupClearGoods')
                        }}</el-button>
                </div>
                <el-pagination v-model:current-page="goodsTable.page" v-model:page-size="goodsTable.limit"
                    layout="total, sizes, prev, pager, next, jumper" :total="goodsTable.total"
                    @size-change="loadGoodsList()" @current-change="loadGoodsList" />
            </div>

            <template #footer>
                <span class="dialog-footer">
                    <el-button @click="showDialog = false">{{ t('cancel') }}</el-button>
                    <el-button type="primary" @click="save">{{ t('confirm') }}</el-button>
                </span>
            </template>
        </el-dialog>
    </div>
</template>

<script lang="ts" setup>
import { t } from '@/lang'
import { ref, reactive, computed, nextTick } from 'vue'
import { cloneDeep } from 'lodash-es'
import { img } from '@/utils/common'
import { ElMessage } from 'element-plus'
import { getGoodsSelectPageList, getCategoryTree, getGoodsType } from '@/addon/phone_shop/api/goods'

const prop = defineProps({
    modelValue: {
        type: String,
        default: ''
    },
    max: {
        type: Number,
        default: 0
    },
    min: {
        type: Number,
        default: 0
    }
})

const emit = defineEmits(['update:modelValue', 'goodsSelect'])

const goodsIds: any = computed({
    get() {
        return prop.modelValue
    },
    set(value) {
        emit('update:modelValue', value)
    }
})

const showDialog = ref(false)

// 已选商品列表
const selectGoods: any = reactive({})

// 已选商品列表id
const selectGoodsId: any = reactive([])

// 已选商品数量
const selectGoodsNum: any = computed(() => {
    return Object.keys(selectGoods).length
})

const goodsTable = reactive({
    page: 1,
    limit: 10,
    total: 0,
    loading: true,
    data: [],
    searchParam: {
        keyword: '',
        goods_category: [],
        select_type: 'all',
        goods_ids: '',
        verify_goods_ids: '',
        goods_type: ''
    }
})

const searchFormRef = ref()

// 查询全部/已选商品
const handleSelectTypeChange = (value: any) => {
    loadGoodsList()
}

// 商品分类
const goodsCategoryOptions: any = reactive([])

// 商品类型
const goodsType: any = reactive([])

// 初始化数据
const initData = () => {
    // 查询商品分类树结构
    getCategoryTree().then((res) => {
        const data = res.data
        if (data) {
            const goodsCategoryTree: any = []
            data.forEach((item: any) => {
                const children: any = []
                if (item.child_list) {
                    item.child_list.forEach((childItem: any) => {
                        children.push({
                            value: childItem.category_id,
                            label: childItem.category_name
                        })
                    })
                }
                goodsCategoryTree.push({
                    value: item.category_id,
                    label: item.category_name,
                    children
                })
            })
            goodsCategoryOptions.splice(0, goodsCategoryOptions.length, ...goodsCategoryTree)
        }
    })

    // 商品类型
    getGoodsType().then((res) => {
        const data = res.data
        if (data) {
            for (const k in data) {
                goodsType.push(data[k])
            }
        }
    })
}

initData()

const goodsListTableRef = ref()

// 选中数据
const multipleSelection: any = ref([])

// 监听表格复选框
const handleSelectChange = (selection: any, row: any) => {
    // 是否选中
    let isSelected = false
    for (let i = 0; i < selection.length; i++) {
        if (selection[i].goods_id == row.goods_id) {
            isSelected = true
            break
        }
    }
    if (isSelected) {
        selectGoodsId.push(row.goods_id)
        selectGoods['goods_' + row.goods_id] = row
    } else {
        selectGoodsId.splice(selectGoodsId.indexOf(row.goods_id), 1)
        // 未选中，删除当前商品
        delete selectGoods['goods_' + row.goods_id]
    }

    // 当所选数量超出限制数量【prop.max】时，添加一个就会删除开头的第一个或多个，最终保证所选的数量小于等于prop.max
    if (prop.max && prop.max > 0 && Object.keys(selectGoods).length > 0 && Object.keys(selectGoods).length > prop.max) {
        let len = Object.keys(selectGoods).length;
        len = len - prop.max;

        let goodsIdCopy = cloneDeep(selectGoodsId);
        goodsIdCopy.forEach((item, index, arr) => {
            if (index < len) {
                let indent = selectGoodsId.indexOf(item)
                delete selectGoods['goods_' + selectGoodsId[indent]]
                selectGoodsId.splice(indent, 1)
            }
        });
        setGoodsSelected();
    }
}

// 监听表格全选
const handleSelectAllChange = (selection: any) => {
    if (selection.length) {
        selection.forEach((item: any) => {
            selectGoods['goods_' + item.goods_id] = item
            if (selectGoodsId.indexOf(item.goods_id) == -1) {
                selectGoodsId.push(item.goods_id)
            }
        })
    } else {
        // 未选中，删除当前页面的数据
        goodsTable.data.forEach((item: any) => {
            selectGoodsId.splice(selectGoodsId.indexOf(item.goods_id), 1)
            delete selectGoods['goods_' + item.goods_id]
        })
    }
}

/**
 * 获取商品列表
 */
const loadGoodsList = (page: number = 1, callback: any = null) => {
    goodsTable.loading = true
    goodsTable.page = page

    const searchData = cloneDeep(goodsTable.searchParam);

    if (searchData.select_type == 'selected') {
        const goods_ids = <any>[]
        for (let k in selectGoods) {
            goods_ids.push(parseInt(k.replace('goods_', '')))
        }
        searchData.goods_ids = goods_ids
    } else {
        searchData.goods_ids = '';
    }

    getGoodsSelectPageList({
        page: goodsTable.page,
        limit: goodsTable.limit,
        ...searchData
    }).then(res => {
        goodsTable.loading = false
        goodsTable.data = res.data.data
        goodsTable.total = res.data.total

        if (callback) callback(res.data.verify_goods_ids)

        setGoodsSelected();

    }).catch(() => {
        goodsTable.loading = false
    })

}

// 表格设置选中状态
const setGoodsSelected = () => {
    nextTick(() => {
        if (!goodsListTableRef.value) return;
        for (let i = 0; i < goodsTable.data.length; i++) {
            goodsListTableRef.value.toggleRowSelection(goodsTable.data[i], false);
            if (selectGoods['goods_' + goodsTable.data[i].goods_id]) {
                goodsListTableRef.value.toggleRowSelection(goodsTable.data[i], true);
            }
        }
    });
}

const resetForm = (formEl: FormInstance | undefined) => {
    if (!formEl) return
    formEl.resetFields()

    loadGoodsList()
}

const show = () => {
    for (let k in selectGoods) {
        delete selectGoods[k];
    }
    // 检测商品id集合是否存在，移除不存在的商品id，纠正数据准确性
    goodsTable.searchParam.verify_goods_ids = goodsIds.value;
    loadGoodsList(1, (verify_goods_ids: any) => {
        // 第一次打开弹出框时，纠正数据，并且赋值已选商品
        if (goodsIds.value) {
            goodsIds.value.splice(0, goodsIds.value.length, ...verify_goods_ids)
            goodsIds.value.forEach((item: any) => {
                if (!selectGoods['goods_' + item]) {
                    selectGoods['goods_' + item] = {};
                }
            })

            // 赋值已选择的商品
            for (let i = 0; i < goodsTable.data.length; i++) {
                if (goodsIds.value.indexOf(goodsTable.data[i].goods_id) != -1) {
                    selectGoods['goods_' + goodsTable.data[i].goods_id] = goodsTable.data[i];
                }
            }
        }
    })
    showDialog.value = true
}

// 清空已选商品
const clear = () => {
    for (let k in selectGoods) {
        delete selectGoods[k];
    }
    setGoodsSelected();
}

const save = () => {
    if (prop.min && selectGoodsNum.value < prop.min) {
        ElMessage({
            type: 'warning',
            message: `${t('goodsSelectPopupGoodsMinTip')}${prop.min}${t('goodsSelectPopupPiece')}`,
        });
        return;
    }

    if (prop.max && prop.max > 0 && selectGoodsNum.value && selectGoodsNum.value > prop.max) {
        ElMessage({
            type: 'warning',
            message: `${t('goodsSelectPopupGoodsMaxTip')}${prop.max}${t('goodsSelectPopupPiece')}`,
        });
        return;
    }

    let ids: any = [];
    for (let k in selectGoods) {
        ids.push(parseInt(k.replace('goods_', '')));
    }

    goodsIds.value.splice(0, goodsIds.value.length, ...ids)
    emit('goodsSelect', selectGoods)
    initSearchParam();
    showDialog.value = false
}

// 重置表单搜索
const initSearchParam = () => {
    goodsTable.searchParam.keyword = '';
    goodsTable.searchParam.goods_category = [];
    goodsTable.searchParam.select_type = 'all';
    goodsTable.searchParam.goods_ids = '';
    goodsTable.searchParam.verify_goods_ids = '';
    goodsTable.searchParam.goods_type = '';
}

defineExpose({
    showDialog,
    selectGoods,
    selectGoodsNum
})
</script>

<style lang="scss" scoped>
.form-item-wrap {
    margin-right: 10px !important;
    margin-bottom: 10px !important;

    &.last-child {
        margin-right: 0 !important;
    }
}
</style>
