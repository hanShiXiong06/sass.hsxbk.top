<template>
	<!-- 内容 -->
	<div class="content-wrap" v-show="diyStore.editTab == 'content'">
		<div class="edit-attr-item-wrap">
			<h3 class="mb-[10px]">{{ t('activeCubeBlockContent') }}</h3>
			<el-form label-width="85px" class="px-[10px]">

				<div ref="blockBoxRef">
					<div v-for="(item,index) in diyStore.editComponent.list" :key="item.id" class="item-wrap p-[10px] pb-0 relative border border-dashed border-gray-300 mb-[16px]">
						<el-form-item :label="t('bgImage')">
							<upload-image v-model="item.imageUrl" :limit="1"/>
						</el-form-item>
                        
                        <el-form-item :label="t('listFrameColor')">
                             <!-- :predefine="diyStore.predefineColors"  -->
                            <el-color-picker v-model="item.listFrame.startColor" show-alpha/>
                            <icon name="iconfont iconmap-connect" size="20px" class="block !text-gray-400 mx-[5px]"/>
                             <!-- :predefine="diyStore.predefineColors" -->
                            <el-color-picker v-model="item.listFrame.endColor" show-alpha/>
                        </el-form-item>

						<el-form-item :label="t('rankingTitleIcon')">
                            <upload-image v-model="item.title.icon" :limit="1"/>
						</el-form-item>

                        <el-form-item :label="t('rankingTitleImage')">
                            <upload-image v-model="item.title.img" :limit="1"/>
                        </el-form-item>

						<el-form-item :label="t('rankingSubTitle')">
							<el-input v-model.trim="item.subTitle.text" :placeholder="t('activeCubeSubTitlePlaceholder')" clearable maxlength="6" show-word-limit/>
						</el-form-item>
                        
                        <el-form-item :label="t('rankingSubTitleTextColor')">
                            <el-color-picker v-model="item.subTitle.textColor" show-alpha :predefine="diyStore.predefineColors" />
                        </el-form-item>

						<el-form-item :label="t('rankingSubTitleLink')">
							<diy-link v-model="item.subTitle.link"/>
						</el-form-item>

                        <el-form-item :label="t('goodsSelectPopupSelectGoodsButton')">
                            <el-radio-group v-model="item.source" :title="t('goodsSelectPopupSelectGoodsButton')">
                                <el-radio label="all">{{ t('goodsSelectPopupAllGoods') }}</el-radio>
                                <!-- <el-radio label="category">{{ t('selectCategory') }}</el-radio>
                                <el-radio label="custom">{{ t('manualSelectionSources') }}</el-radio> -->
                            </el-radio-group>
                        </el-form-item>

						<div class="del absolute cursor-pointer z-[2] top-[-8px] right-[-8px]" v-show="diyStore.editComponent.list.length > 1" @click="diyStore.editComponent.list.splice(index,1)">
							<icon name="element CircleCloseFilled" color="#bbb" size="20px"/>
						</div>
					</div>
				</div>

				<el-button v-show="diyStore.editComponent.list.length < 10" class="w-full" @click="addItem">{{ t('activeCubeAddItem') }}</el-button>

			</el-form>
		</div>
	</div>

	<!-- 样式 -->
	<div class="style-wrap" v-show="diyStore.editTab == 'style'">
        <div class="edit-attr-item-wrap">
			<h3 class="mb-[10px]">{{ t('rankingStyle') }}</h3>
			<el-form label-width="90px" class="px-[10px]">
                <el-form-item :label="t('topRounded')">
					<el-slider v-model="diyStore.editComponent.topRankingRounded" show-input size="small" class="ml-[10px] diy-nav-slider" :max="50" />
				</el-form-item>
				<el-form-item :label="t('bottomRounded')">
					<el-slider v-model="diyStore.editComponent.bottomRankingRounded" show-input size="small" class="ml-[10px] diy-nav-slider" :max="50" />
				</el-form-item>
			</el-form>
		</div>

		<!-- 组件样式 -->
		<slot name="style"></slot>
	</div>
</template>

<script lang="ts" setup>
import { getCategoryTree } from '@/addon/shop/api/goods'
import { t } from '@/lang'
import { img } from '@/utils/common'
import useDiyStore from '@/stores/modules/diy'
import { ref, reactive, onMounted,nextTick } from 'vue'
import { ElTable } from 'element-plus'
import goodsSelectPopup from '@/addon/shop/views/goods/components/goods-select-popup.vue'

const diyStore:any = useDiyStore()
diyStore.editComponent.ignore = [] // 忽略公共属性

// 组件验证
diyStore.editComponent.verify = (index: number) => {
    const res = { code: true, message: '' }

    if(diyStore.value[index].source == 'category'){
        if(diyStore.value[index].goods_category == ''){
            res.code = false
            res.message = t('goodsCategoryPlaceholder')
        }
    }else if(diyStore.value[index].source == 'custom'){
        if(diyStore.value[index].goods_ids.length == 0){
            res.code = false
            res.message = t('goodsPlaceholder')
        }
    }

    return res
}

console.log("数据源", diyStore.editComponent.list);
const addItem = () => {
    diyStore.editComponent.list.push({
        id: diyStore.generateRandom(),
        imageUrl: '',
        title: {
            icon: '',
            img: ''
        },
        subTitle: {
            text: '查看更多',
            textColor: '#FFFFFF',
            link: {
                name: ''
            }
        },
        listFrame: {
            startColor: '#FEA715',
            endColor: '#FE1E00',
        },
        source: 'all',
        elementRounded: {
            topRounded: '',
            bottomRounded: ''
        }
    })
}


defineExpose({})

</script>

<style lang="scss" scoped></style>
<style lang="scss">
	.goods-list-slider {
		.el-slider__input {
			width: 100px;
		}
	}
</style>
