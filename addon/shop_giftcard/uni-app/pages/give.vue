<template>
	<view class="bg-[#f8f8f8] min-h-[100vh]" :style="themeColor()">
		<template v-if="Object.keys(detail).length">
			<view class="px-[var(--sidebar-m)] py-[var(--top-m)]">
				<view class="w-full h-[430rpx] relative">
					<image v-if="detail.card_cover" class="w-full h-[430rpx] rounded-[var(--rounded-mid)]" :src="img(detail.card_cover)" @error="detail.card_cover= defaultCard(detail)" mode="aspectFill"></image>
					<image v-else class="w-full h-[430rpx] rounded-[var(--rounded-mid)]" :src="img(defaultCard(detail))" mode="aspectFill"></image>
					<view class="absolute bottom-[var(--pad-top-m)] left-0 right-0 flex justify-center">
						<button
						:class="{'!bg-[#EF000C]':detail.giftcard.card_right_type=='balance','!bg-[#FF7700]':detail.giftcard.card_right_type=='goods'}"
						class="h-[44rpx] font-500 text-[24rpx] !text-[#fff] bg-[var(--primary-color)] m-0 rounded-[var(--rounded-big)] remove-border">
							<text class="text-[20rpx] text-[24rpx] iconfont mr-[5rpx]"
								:class="{'iconchuzhikaV6mm':detail.giftcard.card_right_type=='balance','iconduihuankaV6mm-1':detail.giftcard.card_right_type=='goods'}"></text>
							<text v-if="detail.giftcard.card_right_type=='balance'"
							class="leading-[44rpx]">{{detail.balance}}元</text>
							<text class="leading-[44rpx]">{{detail.giftcard.card_right_type_name}}</text>
						</button>
					</view>
				</view>
				<view class="mt-[var(--top-m)] card-template">
					<view class="title">送上您的祝福</view>
					<view v-if="detail.giftcard.blessing_json" class="w-full flex flex-wrap gap-x-[var(--pad-sidebar-m)]">
						<view 
						v-for="item in detail.giftcard.blessing_json"
						:key="item.id"
						@click="blessingItemClick(item.blessing)"
						class="h-[60rpx] px-[30rpx] box-border text-[28rpx] leading-[56rpx] rounded-[30rpx] bg-[var(--temp-bg)] mb-[var(--pad-top-m)] box-border border-[2rpx] border-solid border-[var(--temp-bg)]"
						:class="{'!border-[var(--primary-color)] !bg-[var(--primary-color-light)] !text-[var(--primary-color)]':item.blessing === formData.blessing}">
							{{item.blessing}}
						</view>
						<view
						@click="blessingItemClick('')"
						class="h-[60rpx] px-[30rpx] box-border text-[28rpx] leading-[56rpx] rounded-[30rpx] bg-[var(--temp-bg)] mb-[var(--pad-top-m)] box-border border-[2rpx] border-solid border-[var(--temp-bg)]"
						:class="{'!border-[var(--primary-color)] !bg-[var(--primary-color-light)] !text-[var(--primary-color)]':active}">
							自定义祝福语
						</view>
					</view>
					<view v-if="active" class="h-[200rpx] bg-[var(--temp-bg)] rounded-[var(--rounded-big)] px-[var(--pad-sidebar-m)] py-[var(--pad-top-m)] box-border">
						<textarea class="leading-[1.5] h-[100%] w-[100%] text-[28rpx]" v-model.trim="blessing" cols="30" rows="5" placeholder="请输入祝福语" placeholder-class="text-[28rpx] text-[var(--text-color-light9)]" maxlength="20" @blur="blessingBlur"/>
					</view>
				</view>
			</view>
			<view class="tab-bar-placeholder"></view>
			<view class="border-[0] border-t-[2rpx] border-solid border-[#f5f5f5] w-[100%] flex justify-between px-[var(--pad-sidebar-m)] bg-[#fff] box-border fixed left-0 bottom-0 tab-bar z-1 items-center">
				<button
					v-if="detail.status=='to_use' && detail.giftcard.is_give"
					class="w-full !h-[70rpx] font-500 text-[26rpx] !text-[#fff] primary-btn-bg !m-0 leading-[70rpx] rounded-full remove-border"
					:class="{'opacity-40':disable}"
					@click="save">确定赠送好友</button>
			</view>
			<share-poster ref="sharePosterRef" posterType="shop_giftcard_give" :posterId="detail.giftcard.poster_id" :copyUrl="copyUrl" :posterParam="posterParam" :copyUrlParam="copyUrlParam" />
		</template>
		
		<loading-page :loading="loading"></loading-page>

		<!-- #ifdef MP-WEIXIN -->
		<!-- 小程序隐私协议 -->
		<wx-privacy-popup ref="wxPrivacyPopupRef"></wx-privacy-popup>
		<!-- #endif -->
	</view>
</template>

<script setup lang="ts">
	import { redirect,img,getToken } from '@/utils/common';
	import { onLoad } from '@dcloudio/uni-app'
	import {ref, computed,nextTick} from 'vue'
	import { t } from '@/locale'
	import useMemberStore from '@/stores/member'
	import { giveCard } from '@/addon/shop_giftcard/api/card';
	import sharePoster from '@/components/share-poster/share-poster.vue'
	import { useShare }from '@/hooks/useShare'
	import { useLogin } from '@/hooks/useLogin'

	// 会员信息
	const memberStore = useMemberStore()
	const userInfo = computed(() => memberStore.info)
	
	const detail: any = ref({})
	const loading = ref(true)
	const disable = ref(false)
	const formData = ref({
		card_id:'',
		blessing:'',
	})
	const active = ref(false)
	const blessing = ref('')
	// 分享
	const{setShare} = useShare()
	const wxPrivacyPopupRef:any = ref(null)

	onLoad((option: any)=> {

		if (!option.card_id) {
			uni.showToast({ title: '礼品卡不存在', icon: 'none' })
			setTimeout(() => {
				redirect({ url: '/addon/shop_giftcard/pages/index', mode: 'reLaunch' })
			}, 600)
		} else {
			// 检测是否登录
			if (!getToken()) {
				useLogin().setLoginBack({
					url: '/addon/shop_giftcard/pages/give',
					param: { card_id: option.card_id }
				})
				return false
			}

			nextTick(() => {
				// #ifdef MP
				if(wxPrivacyPopupRef.value) wxPrivacyPopupRef.value.proactive();
				// #endif
			})

			formData.value.card_id = option.card_id
			if(userInfo.value){
				giveCardFn()
			}else{
				memberStore.getMemberInfo(()=>{
					giveCardFn()
				})
			}

		}
	})

	const giveCardFn = (callback: any = null)=> {
		loading.value = true
		giveCard(formData.value).then((res: any) => {
			if (res.data) {
				detail.value = res.data;

				copyUrlFn();
				let link = '';
				let path = '/addon/shop_giftcard/pages/receive_info' + copyUrlParam.value;

				// #ifdef H5
				let pathName = location.pathname;
				let packageArr: any = ['/app/', '/addon/'];
				for (let i = 0; i < packageArr.length; i++) {
					if (pathName.indexOf(packageArr[i]) != -1) {
						pathName = pathName.substr(0, pathName.indexOf(packageArr[i]));
					}
				}

				link = location.origin + pathName + path;
				// #endif

				setTimeout(()=>{
					let share = {
						title: '嘿！朋友送你一张礼品卡，快来领取吧~',
						desc: formData.value.blessing,
						url: detail.value.card_cover,
						link,
						path
					}

					setShare({
						wechat: {
							...share
						},
						weapp: {
							...share
						}
					});
				},600);

				if (callback) callback();
			}
			loading.value = false
			disable.value = false

		}).catch(() => {
			loading.value = false
			disable.value = false
		})
	}

	const blessingItemClick = (val:any)=> {
		active.value = val ? false : true
		if (val) blessing.value = ''
		formData.value.blessing = val
	}

	const blessingBlur = ()=>{
		blessing.value = blessing.value.substr(0,20)
	}

	const save = ()=> {
		if (disable.value) return
		if(active.value) formData.value.blessing = blessing.value
		if (!formData.value.blessing) {
			uni.showToast({ title: '请填写您的祝福语', icon: 'none' })
			return
		}
		disable.value = true
		giveCardFn(()=>{
			openShareFn()
		})
	}

	/************* 分享海报-start **************/
	const sharePosterRef: any = ref(null);
	const copyUrl = ref('/addon/shop_giftcard/pages/receive_info')
	const copyUrlParam = ref('');
	
	let posterParam: any = {};
	
	// 分享海报链接
	const copyUrlFn = ()=>{
	   copyUrlParam.value = '?give_id=' + detail.value.give_id;
	   if (userInfo.value && userInfo.value.member_id) copyUrlParam.value += '&mid=' + userInfo.value.member_id;
	}
	
	const openShareFn = ()=>{
	   posterParam.give_id = detail.value.give_id;
	   if (userInfo.value && userInfo.value.member_id) posterParam.member_id = userInfo.value.member_id;
	   sharePosterRef.value.openShare()
	}
	/************* 分享海报-end **************/
	const defaultCard = (data)=> {
		let imgUrl = '';
		if(data.giftcard.card_right_type == 'balance'){
			imgUrl = 'addon/shop_giftcard/diy/index/value_card.jpg';
		}else{
			imgUrl = 'addon/shop_giftcard/diy/index/redemption_card.jpg';
		}
		return imgUrl;
	}
</script>

<style lang="scss" scoped>
	.tab-bar-placeholder {
		padding-bottom: calc(constant(safe-area-inset-bottom) + 100rpx);
		padding-bottom: calc(env(safe-area-inset-bottom) + 100rpx);
	}
	
	.tab-bar {
		padding-top: 16rpx;
		padding-bottom: calc(constant(safe-area-inset-bottom) + 16rpx);
		padding-bottom: calc(env(safe-area-inset-bottom) + 16rpx);
	}
</style>