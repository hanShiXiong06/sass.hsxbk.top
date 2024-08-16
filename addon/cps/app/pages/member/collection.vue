<template>
	<view class="bg-[#f8f8f8] min-h-screen overflow-hidden">
		<view class="fixed left-0 right-0 top-0 bg-[#fff] px-[24rpx] py-[10rpx] z-10">
			<input class=" h-[70rpx] bg-[#F6F8F8] rounded-[36rpx] pl-[20rpx] text-sm" type="text" clearable v-model="searchName" :placeholder="t('searchPlaceholder')">
			<text class="iconfont iconxiazai17 absolute right-[42rpx] top-[30rpx] text-[32rpx]" @click="searchNameFn"></text>
		</view>
		<mescroll-body ref="mescrollRef" top="90rpx" @init="mescrollInit" @down="downCallback" @up="getTechnicianListFn">
			<block v-for="(item,index) in technicianList" :key="index">
				<view class="bg-[#fff] mx-3 mt-3 flex items-center p-3 rounded" @click="toLink(item.id)">
					<view>
						<view class="w-[110rpx] h-[110rpx] flex justify-center">
							<u-avatar :src="img(item.headimg_mid)" shape="circle" size="55" v-if="item.headimg_mid"></u-avatar>
							<u-avatar src="" size="55" v-else></u-avatar>
						</view>
						<view class="flex justify-center"><text class="text-[20rpx] bg-[#333333] text-[#a9a089] px-[10rpx] py-[6rpx] rounded-full mt-[10rpx]">{{ item.status == 1 ? t('service') : item.status == -1 ? t('haveLeft') : t('takeBreak') }}</text></view>
					</view>
					<view class="ml-2 flex-1 ">
						<view class="pb-[15rpx] border-0 border-solid border-b-[2rpx] border-[#ebeef5] ">
							<view class="flex justify-between items-center">
								<text class="text-[32rpx] font-bold">{{item.name}}</text>
								<text class="text-[22rpx]">{{item.working_age}}{{ t('year') }}</text>
							</view>
							<!-- <view class="flex items-center mt-[15rpx] flex-wrap" v-if="item.label != ''">
								<text class=" text-[22rpx] px-[10rpx] py-[6rpx] border-solid border-[2rpx] border-[var(--primary-color)] text-[var(--primary-color)] rounded-full mb-[10rpx]" :class="{'ml-[10rpx]':subIndex}" v-for="(subItem,subIndex) in item.label.split(',')" :key="subIndex">{{ subItem }}</text>
							</view> -->
							<view class="mt-[15rpx] text-[26rpx]">
								<view class="flex justify-between items-center">
									<view class="flex items-center">
										<view class="text-[22rpx]">
											<text class="iconfont iconxingxing text-[#fca943]"></text>
											<text>5.0</text>
											<text class="ml-[15rpx]">{{t('service')}}{{ item.order_num }}单</text>
										</view>
	
									</view>
									<text class="">{{item.position_name}}</text>
								</view>
							</view>
						</view>
						<view class="flex py-[10rpx] items-center text-[#aaaaaa] leading-[32rpx]">
							<view class="flex items-center">
								<text class="iconfont iconpinglun"></text>
								<text class="text-[22rpx] ml-[5rpx]">5</text>
							</view>
							<view class="flex items-center ml-[10rpx]">
								<text class="iconfont iconxiangqing"></text>
								<text class="text-[22rpx] ml-[5rpx]">{{ t('detail') }}</text>
							</view>
						</view>
					</view>
				</view>
			</block>
			<mescroll-empty :option="{'icon': img('static/resource/images/empty.png'),'tip': t('nothingMore')}" v-if="!technicianList.length && loading"></mescroll-empty>
		</mescroll-body>
		<tabbar />
	</view>
</template>

<script setup lang="ts">
	import { ref } from 'vue';
	import { t } from '@/locale'
	import { img, redirect } from '@/utils/common';
	import MescrollBody from '@/components/mescroll/mescroll-body/mescroll-body.vue';
	import MescrollEmpty from '@/components/mescroll/mescroll-empty/mescroll-empty.vue';
	import useMescroll from '@/components/mescroll/hooks/useMescroll.js';
	import { onPageScroll, onReachBottom } from '@dcloudio/uni-app';
	import {getTechnicianList} from '@/addon/o2o/api/technician'
	const { mescrollInit, downCallback, getMescroll } = useMescroll(onPageScroll, onReachBottom);
	let technicianList = ref<Array<Object>>([]);
	let searchName = ref("");
	let loading = ref<boolean>(false);
	const getTechnicianListFn = (mescroll) => {
		loading.value = false;
		let data : object = {
			page: mescroll.num,
			limit: mescroll.size,
			name: searchName.value
		}
		getTechnicianList(data).then((res) => {
			let newArr = (res.data.data as Array<Object>);
			//设置列表数据
			if (mescroll.num == 1) {
				technicianList.value = []; //如果是第一页需手动制空列表
			}
			technicianList.value = technicianList.value.concat(newArr);
			mescroll.endSuccess(newArr.length);
			loading.value = true;
		}).catch(() => {
			loading.value = true;
			mescroll.endErr(); // 请求失败, 结束加载
		})
	}
	// 跳转详情页
	const toLink = (id:any) => {
		redirect({ url: '/app/pages/directContract/technicianDetail',param:{id:id}})
	}
	// 搜索技师
	const searchNameFn = () => {
		getMescroll().resetUpScroll()
	}
</script>

<style lang="scss" scoped>
@import '@/addon/o2o/styles/common.scss';
	:deep(.u-tabbar__placeholder) {
		display: none !important;
	}
</style>