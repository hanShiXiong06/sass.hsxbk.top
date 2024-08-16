<template>
	<view class="w-full h-screen bg-page">
		<view class="first-group bg-white rounded-md overflow-hidden px-[20rpx] py-[10rpx]">
			<view>
                <input class="input-title" type="text" placeholder="请输入案例标题与关键字" v-model="formData.title" placeholder-class="text-sm"/>
                <textarea v-model="formData.content" cols="30" rows="5" 
                placeholder="描述案例整体情况。例如客户痛点丶整理思路丶服务过程等(1000字以内)" placeholder-class="text-sm"></textarea>
            </view>
		</view>
		<view class="m-[30rpx] bg-white rounded-md overflow-hidden px-[20rpx] py-[10rpx]">
			<u-cell-group :border="false">
				<u-cell title="关联订单" :is-link="true" :value="orderName"
                    @click="orderShow = true">
				</u-cell>
			</u-cell-group>
		</view>
		<view class="m-[30rpx] bg-white rounded-md overflow-hidden px-[20rpx] py-[10rpx]">
			<view>
				<view class="title-text">服务前照片</view>
                <view class="rounded p-[30rpx]">
					<u-upload
						@afterRead="afterReadBeforeImgUrls"
                        :fileList="beforeImgUrlsPreview"
                        @delete="deleteBeforeImgUrls"
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
            <view>
				<view class="title-text">服务后照片</view>
                <view class="rounded p-[30rpx]">
					<u-upload
						@afterRead="afterReadAfterImgUrls"
                        :fileList="afterImgUrlsPreview"
                        @delete="deleteAfterImgUrls"
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
        <u-action-sheet :actions="recruitList" :show="orderShow" :closeOnClickOverlay="true"
            :safeAreaInsetBottom="true"
            @close="orderShow = false" @select="updateorderName">
		</u-action-sheet>
		<view class="footer">
			<u-button class="save-btn" color="rgb(21, 193, 118)" type="primary" shape="circle" text="确定发布" @click="save" :loading="operateLoading"></u-button>
		</view>
	</view>
</template>

<script setup lang="ts">
	import { ref, computed } from 'vue'
	import { onLoad } from '@dcloudio/uni-app';
	import { uploadImage } from '@/app/api/system'
	import { img } from '@/utils/common'
	import { getRecruitList, createCase } from '@/app/api/release'
    const formData:any = ref({})
    const orderName = ref('选择订单')
	const recruitList = ref([])
	const orderShow = ref(false)
    const before_img_urls:any = ref([])
    const after_img_urls:any = ref([])
	const operateLoading = ref(false)
	onLoad((option : any) => {
		getRecruitListFn()
	})
    const beforeImgUrlsPreview = computed(() => {
        return before_img_urls.value.map((item:any) => {
            return {url: img(item)}
        })
    })
    const afterImgUrlsPreview = computed(() => {
        return after_img_urls.value.map((item:any) => {
            return {url: img(item)}
        })
    })
	const updateorderName = (e:any) => {
		orderName.value = e.name
		formData.value.order_id = e.value
		orderShow.value = false
	}
	const navigateBack = () => {
		uni.navigateBack({
			delta: 1
		});
	}
	const getRecruitListFn = () => {
		getRecruitList({
            // order_plat: 1
        }).then((res:any)=>{
			const data = res?.data?.data || []
			recruitList.value = data.map((item:any) => {
				return {
					name: item.content,
					value: item.id
				}
			})

		})
	}
	const save = () => {
		createCase({
			...formData.value,
            before_img_urls: before_img_urls.value,
            after_img_urls: after_img_urls.value,
		}).then((res:any)=>{
			// console.log(res)
			navigateBack()
		})
	}
    const afterReadBeforeImgUrls = (event:any) => {
        event.file.forEach((item:any) => {
            uploadImage({
                filePath: item.url,
                name: 'file'
            }).then((res:any) => {
                before_img_urls.value.push(res.data.url)
                
            }).catch(() => {
            })
        })
    }
    const deleteBeforeImgUrls = (event:any) => {
        before_img_urls.value.splice(event.index, 1)
    }
    const afterReadAfterImgUrls = (event:any) => {
        event.file.forEach((item:any) => {
            uploadImage({
                filePath: item.url,
                name: 'file'
            }).then((res:any) => {
                after_img_urls.value.push(res.data.url)
                
            }).catch(() => {
            })
        })
    }
    const deleteAfterImgUrls = (event:any) => {
        after_img_urls.value.splice(event.index, 1)
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
	// .upload-inner {
	// 	display: flex;
	// 	align-items: center;
	// 	font-size: 28rpx;
	// }
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
    
    .tip {
        color: rgb(145, 144, 144);
        font-size: 24rpx;
        margin: 10rpx 0 20rpx 0;
    }
    .bg-page {
		padding-top: 30rpx;
		box-sizing: border-box;
	}
    .first-group {
		margin: 0 30rpx 30rpx 30rpx;
	}
    .input-title {
        padding: 10rpx 40rpx;
        margin-bottom: 10rpx;
        height: 50rpx;
        line-height: 50rpx;
        font-weight: bold;
    }
</style>