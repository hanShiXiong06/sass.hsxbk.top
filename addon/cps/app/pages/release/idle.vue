<template>
	<view class="w-full h-screen bg-page">
		<view class="page-content">
			<view class="first-group bg-white rounded-md overflow-hidden py-[10rpx]">
				<u-cell-group :border="false">
					<u-cell title="标题">
						<template #value>
							<input class="input" placeholder="商品标题、品牌型号可以帮助搜索" v-model="formData.title"/>
						</template>
					</u-cell>
					<view>
						<view class="title-text">描述</view>
						<textarea v-model="formData.content" cols="30" rows="5" placeholder="详细描述商品的购买详情、使用情况及出售原因"
							placeholder-class="text-sm"></textarea>
						<view>
							<view class="rounded p-[30rpx]">
								<u-upload
									@afterRead="afterRead"
									:fileList="imgUrlsPreview"
									@delete="deleteImgUrls"
									multiple
									:maxCount="5"
								>
									<view class="upload-inner">
										<view class="plus-icon">
											<u-icon name="plus"></u-icon>
										</view>
									</view>
									
								</u-upload>
							</view>
						</view>
					</view>
				</u-cell-group>
			</view>
			<view class="rounded-md overflow-hidden px-[20rpx] py-[10rpx]">
				<u-cell-group :border="false">
					<view class="cell-mr-bottom bg-white">
						<u-cell title="分类" :is-link="true" :value="categoryName"
							@click="categoryShow = true">
						</u-cell>
					</view>
					<view class="cell-mr-bottom bg-white">
						<u-cell title="交易方式">
							<template #value>
								<view @click="formData.trans_method=item.value" :class="[formData.trans_method == item.value && 'plain', 'circle', 'tag']" v-for="(item, key) in trans_method_list" :key="key">
									{{ item.label }}
								</view>
							</template>
						</u-cell>
					</view>
					<view class="cell-mr-bottom bg-white">
						<u-cell title="新旧程度">
							<template #value>
								<view @click="formData.novelty_level=item.value" :class="[formData.novelty_level == item.value && 'plain', 'circle', 'tag']" v-for="(item, key) in novelty_level_list" :key="key">{{ item.label }}</view>
							</template>
						</u-cell>
					</view>
					<view class="cell-mr-bottom bg-white">
						<u-cell title="参数">
							<template #value>
								<view @click="setParam(item)" :class="[formData.param && formData.param[item.key] && 'plain', 'circle', 'tag']" v-for="(item, key) in param_list" :key="key">{{ item.label }}</view>
							</template>
						</u-cell>
					</view>
					<view class="cell-mr-bottom bg-white">
						<u-cell title="同步到社区" :is-link="true"  @click="selectArea" :value="area">
						</u-cell>
					</view>
					<view class="cell-mr-bottom bg-white">
						<u-cell title="类型">
							<template #value>
								<view @click="formData.kind=item.value" :class="[formData.kind == item.value && 'plain', 'circle', 'tag']" v-for="(item, key) in kind_list" :key="key">{{ item.label }}</view>
							</template>
						</u-cell>
					</view>
				</u-cell-group>
			</view>
		</view>
		<view class="footer">
			<u-button class="save-btn" color="rgb(21, 193, 118)"  type="primary" shape="circle" text="确定发布" @click="save" :loading="operateLoading"></u-button>
		</view>
		<u-action-sheet :actions="categoryList" :show="categoryShow" :closeOnClickOverlay="true"
            :safeAreaInsetBottom="true"
            @close="categoryShow = false" @select="updateCategoryShow">
		</u-action-sheet>
		<u-modal :show="setParamShow" :closeOnClickOverlay="true" @close="setParamShow = false"
            :show-cancel-button="true"
            @cancel="setParamShow = false" :title="`设置${paramModalData.label}`">
            <view class="w-full mt-[20rpx] border-0 border-b border-gray-300 border-solid py-[20rpx]">
                <input type="nickname" v-model="paramModalData.value" placeholder="请参数输入值">
            </view>
            <template #confirmButton>
                <view class="mt-[10rpx]">
                    <u-button type="primary" text="确认" shape="circle"
                        @click="setParamConfirm"></u-button>
                </view>
            </template>
        </u-modal>
		<area-select ref="areaRef" @complete="areaSelectComplete" :area-id="formData.district_id"/>
    </view>
</template>

<script setup lang="ts">
	import { ref, reactive, computed } from 'vue'
	import { onLoad } from '@dcloudio/uni-app'
	import { getCategory, idleAdd } from '@/app/api/release'
	import { uploadImage } from '@/app/api/system'
	import { img } from '@/utils/common'
	const areaRef = ref()
    // import { t } from '@/locale'
    const formData:any = ref({})
	const img_urls:any = ref([])
	const categoryList = ref([])
    const operateLoading = ref(false)
	const categoryShow = ref(false)
	const setParamShow = ref(false)
	let paramModalData:any = reactive({
		key: '',
		value: '',
		label: ''
	})
	
	const categoryName = ref('选择分类')
	const area = ref('选择社区')
	const trans_method_list = reactive([
		{ value: 1, label: '自提' },
		{ value: 2, label: '同城面交' },
		{ value: 3, label: '邮寄' }
	])
	const novelty_level_list = reactive([
		{ value: '九成', label: '九成' },
		{ value: '八成', label: '八成' },
		{ value: '七成', label: '七成' },
		{ value: '其它', label: '其它' }
	])
	const param_list = reactive([
		{ key: 'brand', label: '品牌', value: '' },
		{ key: 'originalValue', label: '原值', value: '' },
		{ key: 'standards', label: '规格', value: '' },
		{ key: 'weight', label: '重量', value: '' },
		{ key: 'quantity', label: '数量', value: '' }
	])
	const kind_list = ref([
		{ value: 1, label: '一口价' },
		{ value: 2, label: '免费赠送' },
	])
	const navigateBack = () => {
		uni.navigateBack({
			delta: 1
		});
	}
	onLoad((option : any) => {
		getCategoryList()
	})
	const selectArea = () => {
        areaRef.value.open()
    }
	const setParam = (item:any) => {
		if (formData.value.param?.[item.key]) {
			formData.value.param[item.key] = undefined
		} else {
			paramModalData = JSON.parse(JSON.stringify(item))
			setParamShow.value = true
		}
	}
	const setParamConfirm = () => {
		if (!formData.value.param) {
			formData.value.param = {}
		}
		formData.value.param[paramModalData.key] = paramModalData.value
		paramModalData = { key: '', value: '', label: '' }
		setParamShow.value = false
	}
	const areaSelectComplete = (event:any) => {
        formData.value.province_id = event.province.id || 0
        formData.value.city_id = event.city.id || 0
        formData.value.district_id = event.district.id || 0
        area.value = `${event.province.name || ''}${event.city.name || ''}${event.district.name || ''}`
    }
    const imgUrlsPreview = computed(() => {
		return img_urls.value.map((item:any) => {
            return {url: img(item)}
        })
	})
	const afterRead = (event:any) => {
        event.file.forEach((item:any) => {
            uploadImage({
                filePath: item.url,
                name: 'file'
            }).then((res:any) => {
                img_urls.value.push(res.data.url)
                
            }).catch(() => {
            })
        })
    }
	const deleteImgUrls = (event:any) => {
        img_urls.value.splice(event.index, 1)
    }
	const getCategoryList = () => {
		getCategory().then((res:any)=>{
			const data = res?.data || []
			categoryList.value = data.map((item:any) => {
				return {
					name: item.category_name,
					value: item.category_id
				}
			})
		})
	}
	const updateCategoryShow = (e:any) => {
		categoryName.value = e.name
		formData.value.category_id = e.value
		categoryShow.value = false
	}
	const save = () => {
		idleAdd({
			...formData.value,
			param: JSON.stringify(formData.value.param)
		}).then((res:any)=>{
			// console.log(res)
			navigateBack()
		})
	}
</script>

<style lang="scss" scoped>
	.title-text, textarea {
		padding: 0 40rpx
	}
	:deep(.plus-icon) {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100rpx;
		height: 100rpx;
		background-color: rgb(232, 232, 232);
		margin-right: 20rpx;
	}
	textarea {
		height: 60px;
	}
	.footer {
		position: absolute;
		width: 100%;
		left: 0;
		bottom: 10rpx;
		padding: 0 20rpx;
		box-sizing: border-box;
		.save-btn {
			// background: rgb(108, 217, 153);
			width: 100%;
			color: #fff;
		}
	}
	.bg-page {
		padding-top: 30rpx;
		box-sizing: border-box;
	}
	.first-group {
		margin: 0 30rpx 30rpx 30rpx;
	}
	.input {
		width: calc(100% - 150rpx);
	}
	.cell-mr-bottom {
		margin-bottom: 20rpx;
	}
	.tag {
		border: 1rpx solid #aaa8a8;
		color: #aaa8a8;
		padding: 1rpx 15rpx;
		font-size: 22rpx;
		display: inline-block;
		&.plain {
			border: 1rpx solid rgb(255, 91, 100);
			color: rgb(255, 91, 100);
			background: rgba(250, 232, 232, 0.93);
		}
	}
	.circle {
		margin-left: 20rpx;
		border-radius: 50rpx;
	}
	.page-content {
		overflow: auto;
		height: calc(100% - 200rpx);
	}
</style>