<template>
   <div class="main-container">
        <el-card class="box-card !border-none" shadow="never">
            <el-page-header :content="formData.content_id ? t('updateContent') : t('addContent')" :icon="ArrowLeft" @back="back()" />
        </el-card>
        <el-card class="box-card mt-[15px] !border-none" shadow="never">
            <el-tabs v-model="activeName" >
                <el-tab-pane :label="t('basicInfoTab')" name="basic">
                    <el-form :model="formData" label-width="120px" ref="basicFormRef" :rules="formRules" class="page-form">
                        <el-form-item :label="t('contentType')" prop="content_type">
                            <el-radio-group class="mx-[10px]" v-model="formData.content_type">
                                <el-radio :label="1">{{ t('imageText') }}</el-radio>
                                <el-radio :label="2">{{ t('shortVideo') }}</el-radio>
                            </el-radio-group>
                        </el-form-item>
                        <el-form-item :label="t('categoryId')" prop="category_id">
                            <el-select v-model="formData.category_id" :placeholder="t('categoryIdPlaceholder')"  clearable class="input-width">
                                <el-option v-for="(item,index) in categoryList" :key="index"  :label="item.category_name" :value="item.category_id" />
                            </el-select>
                            <div class="ml-[10px]">
                                <span class="cursor-pointer text-primary mr-[10px]" @click="getCategoryFn(true)">{{ t('refresh') }}</span>
                                <span class="cursor-pointer text-primary" @click="toCategoryEvent">{{ t('addCategory') }}</span>
                            </div>
                        </el-form-item>
                        <el-form-item :label="t('contentTitle')" prop="content_title">
                            <el-input v-model.trim="formData.content_title" clearable :placeholder="t('contentTitlePlaceholder')" class="input-width" maxlength="60" show-word-limit />
                        </el-form-item>
                        <el-form-item :label="t('content')" prop="content">
                            <el-input v-model="formData.content" type="textarea" rows="4" clearable :placeholder="t('contentPlaceholder')" class="input-width" maxlength="300" show-word-limit />
                        </el-form-item>
                        <el-form-item :label="t('contentImage')" prop="content_image" v-if="formData.content_type == 1">
                            <div>
                                <upload-image v-model="formData.content_image" :limit="9" @change="selectImg" />
                                <div class="text-[#999] text-[12px]">默认第一张为封面图,建议尺寸：226 * 300px</div>
                            </div>
                        </el-form-item>
                        <template v-if="formData.content_type == 2">
                            <el-form-item :label="t('contentVideo')" prop="content_video">
                                <div>
                                    <upload-video v-model="formData.content_video" :limit="1" />
                                    <el-input v-model.trim="formData.content_video" clearable :placeholder="t('contentVideoTips')" class="input-width mt-[10px]" />
                                </div>
                            </el-form-item>
                            <el-form-item :label="t('contentCover')" prop="content_cover">
                                <upload-image v-model="formData.content_cover" :limit="1" @change="selectImg" />
                            </el-form-item>
                        </template>
                        <el-form-item :label="t('topicId')" prop="topic_ids">
                            <el-select v-model="formData.topic_ids" :placeholder="t('topicIdPlaceholder')" multiple collapse-tags collapse-tags-tooltip :multiple-limit="5" clearable class="input-width">
                                <el-option v-for="(item,index) in topicList" :key="index"  :label="item.topic_name" :value="item.topic_id" />
                            </el-select>
                        </el-form-item>
                        <el-form-item :label="t('selectMember')" prop="member_id" v-if="formData.member_id || !formData.content_id">
                            <div  v-if="formData.member_id" class="!w-[200px] border-[1px] border-[#e4e4e4] border-solid px-[11px] h-[33px]">{{ formData.nickname }}</div>
                            <el-button  v-if="!formData.content_id" class="ml-[10px]" type="primary"  @click="selectMemberFn">{{ formData.nickname ? t('reselectMember') : t('selectMember') }}</el-button>
                        </el-form-item>
                    </el-form>
                </el-tab-pane>
                <el-tab-pane :label="t('addCowryTab')" name="addCowry">
                    <el-form :model="formData" label-width="120px" ref="addCowryFormRef" :rules="formRules" class="page-form">
                        <div class="mb-[10px] flex items-center">
                            <el-button type="primary" @click="AddCowry()" >{{t('addCowry')}}</el-button>
                            <el-button @click="batchDeleteCowry" >{{ t('batchDeleteCowry') }}</el-button>
                        </div>
                        <el-table :data="cwryData" size="large"  ref="cwryTableRef" @selection-change="handleSelectionChange">
                            <template #empty>
                                <span>{{ !cwryData.length ? t('emptyData') : '' }}</span>
                            </template>
                            <el-table-column type="selection" width="55" />
                            <el-table-column :label="t('cwryInfo')" min-width="300">
                                <template #default="{ row }">
                                    <div class="flex items-center cursor-pointer">
                                        <div class="min-w-[70px] h-[70px] flex items-center justify-center">
                                            <el-image v-if="row.treasure_image" class="w-[70px] h-[70px]" :src="img(row.treasure_image)" fit="contain">
                                                <template #error>
                                                    <div class="image-slot">
                                                        <img class="w-[70px] h-[70px]" src="@/addon/sow_community/assets/default_img.png" />
                                                    </div>
                                                </template>
                                            </el-image>
                                            <img v-else class="w-[70px] h-[70px]" src="@/addon/sow_community/assets/default_img.png" fit="contain" />
                                        </div>
                                        <div class="ml-2  flex flex-col items-start">
                                            <span :title="row.treasure_name" class="multi-hidden">{{ row.treasure_name }}</span>
                                            <span class="text-primary text-[12px]">{{ row.treasure_sub_name }}</span>
                                        </div>
                                    </div>
                                </template>
                            </el-table-column>
                            <el-table-column prop="relate_type_name" :label="t('relateTypeName')" min-width="120" />
                            <el-table-column prop="treasure_price" :label="t('treasurePrice')" min-width="120" />
                            <el-table-column :label="t('operation')" fixed="right" align="right" min-width="120">
                                <template #default="{ row, $index }">
                                    <el-button type="primary" link @click="deleteEvent(row.treasure_id, $index)">{{ t('delete') }}</el-button>
                                </template>
                            </el-table-column>
                        </el-table>
                    </el-form>
                </el-tab-pane>
            </el-tabs>
        </el-card>
        <div class="fixed-footer-wrap">
            <div class="fixed-footer">
                <el-button type="primary" @click="save()">{{ t('save') }}</el-button>
                <el-button @click="back()">{{ t('back') }}</el-button>
            </div>
        </div>
        <select-member ref="selectMemberRef" @confirm="selectMemberConfirm"></select-member>
        <treasure-select-popup ref="treasureSelectPopupRef" v-model="formData.treasure_ids" :min="1" :max="5" @treasurSelect="handelTreasure" />
   </div>
</template>

<script setup lang="ts">
import { reactive, ref, computed } from 'vue'
import { t } from '@/lang'
import { img, filterBlank } from '@/utils/common'
import { getTopic } from '@/addon/sow_community/api/topic'
import { getContentInfo, addContent, editContent } from '@/addon/sow_community/api/content'
import { getCategory } from '@/addon/sow_community/api/category'
import { ArrowLeft } from '@element-plus/icons-vue'
import { useRoute, useRouter } from 'vue-router'
import { cloneDeep } from 'lodash-es'
import { ElMessage, FormInstance } from 'element-plus'
import selectMember from './components/select-member.vue'
import treasureSelectPopup from './components/treasure-select-popup.vue'

const route = useRoute()
const router = useRouter()
const repeat = ref(false)
const activeName: any = ref('basic')
const initialFormData = {
    content_id: '',
    content_type: 1,
    category_id: '',
    content_title: '',
    content: '',
    content_image: '',
    topic_ids: [],
    content_video: '',
    content_cover: '',
    member_id: '',
    headimg: '',
    nickname: '',
    treasure_ids: [],
    content_cover_height:'',
    content_cover_width:''
}

const formData: Record<string, any> = reactive({ ...initialFormData })
formData.content_id = route.query.content_id

// 处理高度
const handleHeight = () => {
    const imageArray = formData.content_image.split(',')
    let imageSrc =img(formData.content_type == 1 ? imageArray[0] : formData.content_cover) 
    const image = new Image()
    image.src = imageSrc
    image.onload = async () => {
        formData.content_cover_width = image.width
        formData.content_cover_height = image.height    
        console.log(formData.content_cover_width, formData.content_cover_height); 
    }
}

const getContentInfoFn = () => {
    getContentInfo(formData.content_id).then(res => {
        Object.keys(formData).forEach((key: string) => {
            if (res.data[key] != undefined) formData[key] = res.data[key]
        })
        formData.nickname = res.data.member ? res.data.member.nickname : '';
        formData.topic_ids = res.data.topic_ids && res.data.topic_ids.map((item: any) => { return Number(item)})
        formData.treasure_ids = res.data.treasure_ids && res.data.treasure_ids.map((item: any) => { return Number(item)})
        cwryData.value = res.data.treasure_list || []

        handleHeight();
    });
}
if (route.query.content_id) {
    getContentInfoFn()
}
// 表单验证规则
const formRules = computed(() => {
    return {
        category_id: [
            { required: true, message: t('categoryIdPlaceholder'), trigger: 'blur' }
        ],
        content: [
            { required: true, message: t('contentPlaceholder'), trigger: 'blur' }
        ],
        content_image: [
            { required: true, message: t('contentImagePlaceholder'), trigger: 'blur' }
        ],
        content_video: [
            { required: true, message: t('contentVideoPlaceholder'), trigger: 'blur' }
        ],
        content_cover: [
            { required: true, message: t('contentCoverPlaceholder'), trigger: 'blur' }
        ]
    }
})

// 获取话题列表
const topicList = ref<any>([])
const getTopicFn = () => {
    getTopic().then((res: any) => {
        topicList.value = res.data
    })
}
getTopicFn()
// 获取分类列表
const categoryList = ref<any>([])
const getCategoryFn = (bool = false) => {
    getCategory().then((res: any) => {
        categoryList.value = res.data
        if (bool) {
            ElMessage({
                message: t('refreshSuccess'),
                type: 'success'
            })
        }
    })
}
getCategoryFn()

// 选择用户
const selectMemberRef = ref<any>(null)
const selectMemberFn = () => {
    selectMemberRef.value.open()
}
// 选择会员回调
const selectMemberConfirm = (data: any) => {
    formData.member_id = data.member_id
    formData.headimg = data.headimg
    formData.nickname = data.nickname
}
// 添加宝贝
const treasureSelectPopupRef = ref<any>(null)
const AddCowry = () => {
    treasureSelectPopupRef.value.open()
}

// 选中数据
const multipleSelection: any = ref([])

const cwryTableRef = ref()

const cwryData = ref([])

// 添加宝贝回调
const handelTreasure = (data: any) => {
    cwryData.value = data
}
// 监听表格选中
const handleSelectionChange = (val: []) => {
    multipleSelection.value = val
}

// 批量删除
const batchDeleteCowry = () => {
    if (multipleSelection.value.length == 0) {
        ElMessage({
            type: 'warning',
            message: `${t('batchEmptySelectedGoodsTips')}`
        })
        return
    }

    const cowryIds: any = []
    multipleSelection.value.forEach((item: any) => {
        cowryIds.push(item.treasure_id)
    })
    cowryIds.forEach((id: any) => {
        cwryData.value.forEach((item: any, index: number) => {
            if (item.treasure_id == id) {
                cwryData.value.splice(index, 1)
            }
        })
        formData.treasure_ids = formData.treasure_ids.filter((item: any) => {
            return item != id
        })
    })
}
// 单个删除
const deleteEvent = (treasureId: number, index: number) => {
    cwryData.value.splice(index, 1)
    formData.treasure_ids = formData.treasure_ids.filter((item: any) => {
        return item != treasureId
    })
}

const basicFormRef = ref<FormInstance>()
const addCowryFormRef = ref<FormInstance>()
const verify = (callback: any) => {
    const formRef = [
        {
            key: 'basic',
            verify: false,
            ref: basicFormRef.value
        },
        {
            key: 'addCowry',
            verify: false,
            ref: addCowryFormRef.value
        }
    ]
    formRef.forEach((el: any, index) => {
        el.ref.validate((valid: any) => {
            el.verify = valid
        })
    })

    setTimeout(() => {
        let verify = true
        // 检测验证，并且定位tab页面
        for (let i = 0; i < formRef.length; i++) {
            if (formRef[i].verify == false) {
                activeName.value = formRef[i].key
                verify = false
                break
            }
        }
        if (verify && callback) callback()
    }, 10)
}
const selectImg = (url: string) => {
    handleHeight()
}

// 保存数据
const save = (callback: any = null) => {
    verify(() => {
        if (repeat.value) return
        repeat.value = true

        const api = formData.content_id ? editContent : addContent
        formData.treasure_ids = cwryData.value.map((item: any) => { return item.treasure_id })
        const data = cloneDeep(formData)

        if (callback) {
            Object.assign(data, callback(data))
        }
        api(data).then((res: any) => {
            repeat.value = false
            router.push('/sow_community/content/list')
        }).catch(() => {
            repeat.value = false
        })
    })
}
const back = () => {
    router.push('/sow_community/content/list')
}

// 跳转到商品分类，添加分类
const toCategoryEvent = () => {
    const url = router.resolve({
        path: '/sow_community/category/list'
    })
    window.open(url.href)
}

</script>

<style lang="scss" scoped>

</style>
