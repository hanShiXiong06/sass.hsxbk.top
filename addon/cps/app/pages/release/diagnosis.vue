<template>
	<view class="w-full h-screen bg-page">
		<view class="rounded-md bg-white">
			<view>
				<view class="bg-[#f5f5f5] rounded p-[30rpx]">
					<u-upload
						:fileList="voucherListPreview"
						@afterRead="afterRead"
						@delete="deletePic"
						accept="*"
						multiple
						:maxCount="5">
						<view class="upload-inner">
							<view class="plus-icon">
								<u-icon name="plus"></u-icon>
							</view>
							
							<text>选择图片或视频</text>
						</view>
						
					</u-upload>
				</view>
			</view>
		</view>
		<view class="m-[30rpx] bg-white rounded-md overflow-hidden px-[20rpx] py-[10rpx]">
			<u-cell-group :border="false">
				<u-cell title="话题" :is-link="true" :value="topicName"
                    @click="sheetShow = true">
				</u-cell>
			</u-cell-group>
		</view>
		<view class="m-[30rpx] bg-white rounded-md overflow-hidden px-[20rpx] py-[10rpx]">
			<u-cell-group :border="false">
				<view class="title-text">描述</view>
				<textarea v-model="formData.content" cols="30" rows="5" placeholder="说点什么"
                                placeholder-class="text-sm"></textarea>
			</u-cell-group>
		</view>
		<u-action-sheet :actions="sheetList" :show="sheetShow" :closeOnClickOverlay="true"
            :safeAreaInsetBottom="true"
            @close="sheetShow = false" @select="updateTopicName">
		</u-action-sheet>
		<view class="footer">
			<u-button class="save-btn" color="rgb(21, 193, 118)"  type="primary" shape="circle" text="确定发布" @click="save" :loading="operateLoading"></u-button>
		</view>
	</view>
</template>

<script setup lang="ts">
	import { ref, computed } from 'vue'
	import { onLoad } from '@dcloudio/uni-app';
	import { uploadImage, uploadVideo } from '@/app/api/system'
	import { img } from '@/utils/common'
	import { getTopicList, createPosts } from '@/app/api/release'
    const formData = ref({
        video_url: [],
		img_url: [],
		topic_id: '',
		content: ''
    })
	const topicName = ref('')
	const voucher = ref([])
	const sheetList = ref([])

	const sheetShow = ref(false)
	const operateLoading = ref(false)
	onLoad((option : any) => {
		topicName.value = ''
		getTopicListFn()
	})
    const voucherListPreview = computed(() => {
        return voucher.value.map(item => {
            return {url: img(item)}
        })
    })

	const updateTopicName = (e) => {
		topicName.value = e.name
		formData.value.topic_id = e.value
		sheetShow.value = false
	}
	const navigateBack = () => {
		uni.navigateBack({
			delta: 1
		});
	}
	const afterRead = (event:any) => {
		console.log(event.file)
        event.file.forEach((item:any) => {
            if (item.type.includes('image')) {
                uploadImage({
                    filePath: item.url,
                    name: 'file'
                }).then((res:any) => {
                    if (voucher.value.length < 5 ) {
                        voucher.value.push(res.data.url)
						formData.value.img_url.push(res.data.url)
                    }
                }).catch(() => {
                })
            } else {
                uploadVideo({
                    filePath: item.url,
                    name: 'file'
                }).then((res:any) => {
                    if (formData.value.video_url.length < 5 ) {
						voucher.value.push(res.data.url)
                        formData.value.video_url.push(res.data.url)
                    }
                }).catch(() => {
                })
            }
            
			
        })
    }
	const deletePic = (event:any)=> {
		const data = voucher.value?.[event.index] || ''
        voucher.value.splice(event.index, 1)

		const vindex =  formData.value.video_url.findIndex((item:any)=>{
			return data ==item
		})
		if (vindex) {
			formData.value.video_url.splice(vindex, 1)
		}

		const iindex =  formData.value.img_url.findIndex((item:any)=>{
			return data ==item
		})
		if (iindex) {
			formData.value.img_url.splice(iindex, 1)
		}
    }
	const getTopicListFn = () => {
		getTopicList({}).then((res:any)=>{
			const data = res.data || []
			sheetList.value = data.map((item:any) => {
				return {
					name: item.title,
					value: item.id
				}
			})

		})
	}
	const save = () => {
		createPosts({
			...formData.value,
			// img_url: voucher.value,
			kind: 2
		}).then((res:any)=>{
			// console.log(res)
			navigateBack()
		})
	}
</script>

<style lang="scss" scoped>
	.navigate-back {
		position: absolute;
		top: 34rpx;
		left: 34rpx;
		z-index: 999;
		font-size: 16px;
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
	.upload-inner {
		display: flex;
		align-items: center;
		font-size: 28rpx;
        width: 100vw;
	}
	.title-text, textarea {
		padding: 0 40rpx
	}
	textarea {
		height: 60px;
	}
	.footer {
		position: absolute;
		width: 100%;
		left: 0;
		bottom: 20rpx;
		padding: 0 20rpx;
		box-sizing: border-box;
		.save-btn {
			// background: rgb(108, 217, 153);
			width: 100%;
			color: #fff;
		}
	}
</style>