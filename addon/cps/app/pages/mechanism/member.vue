<template>
	<view class="bg-[#f8f8f8] min-h-screen overflow-hidden pb-3 box-border">
	<!-- <view> -->
		<view class="header">
			<view class="avatar">
				<u-avatar :src="img(info?.headimg)" size="50" leftIcon="none"></u-avatar>
				<view class="user">
					<view class="user-data">
						<view class="name">
							范b冰
						</view>
						<view class="uid">机构名称</view>
					</view>
				</view>
                <view class="user-code">
					<view class="grid">
                        <u-icon name="grid" color="rgba(255, 255, 255, 0.71)" size="40"></u-icon>
                        <u-icon style="margin-left: 20rpx;" name="setting" color="rgba(255, 255, 255, 0.71)" size="30"></u-icon>
                    </view>
				</view>
			</view>
            <view class="authentication">
                <view class="authentication-item">
                    <view class="icon"  @click="redirect({url: `/app/pages/mechanism/authentication`})">
                        <u-icon size="80" name="data:image/image/png;base64,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" />
                        <view class="name">认证收纳师</view>
                    </view>
                </view>
                <view class="authentication-item">
                    <view class="icon">
                        <u-icon size="80" name="data:image/image/png;base64,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" />
                        <view class="name">课程管理</view>
                    </view>
                </view>
            </view>
		</view>
        <view class="content">
            <view class="content-inner">
                <view class="content-inner-item">
                    <view class="value">
                        ￥0.00
                    </view>
                    <view class="label">
                        可提现金额(元)
                    </view>
                </view>
                <view class="content-inner-item">
                    <view class="value">
                        ￥3860
                    </view>
                    <view class="label">
                        未结算金额(元)
                    </view>
                </view>
                <view class="btn">
                    <u-button @click="redirect({url:`/app/pages/member/apply_cash_out`})" shape="circle" color="linear-gradient(90.00deg, rgb(17, 160, 174),rgb(0, 199, 170) 97.124%)">去提现</u-button>
                </view>
            </view>
        </view>
		<view class="fn-list bg-[#f8f8f8]">
			<view class="title">其它功能</view>
			<view class="fn-list-item">
				<u-icon :size="25" name="account"/>
				<view class="name">待审核</view>
			</view>
			<view class="fn-list-item">
				<u-icon :size="25" name="order"/>
				<view class="name">订单管理</view>
			</view>
			<view class="fn-list-item">
				<u-icon :size="25" name="kefu-ermai"/>
				<view class="name">保证金</view>
			</view>
			<view class="fn-list-item">
				<u-icon :size="25" name="map"/>
				<view class="name">总收入</view>
			</view>
		</view>
	<!-- #ifdef MP-WEIXIN -->
	<information-filling ref="infoFill"></information-filling>
	<!-- #endif -->

	<template v-if="diyStore.mode == ''">
		<view class="pt-[20rpx]"></view>
		<tabbar :addon="tabbarAddonName" />
	</template>
	</view>
</template>

<script lang="ts" setup>
	import { computed, ref, watch } from 'vue'
	import useMemberStore from '@/stores/member'
	import { useLogin } from '@/hooks/useLogin'
	import { img, isWeixinBrowser, redirect, urlDeconstruction, moneyFormat } from '@/utils/common'
	import { wechatSync } from '@/app/api/system'
	import useDiyStore from '@/app/stores/diy'
	import useConfigStore from '@/stores/config'
	const props = defineProps(['component', 'index', 'data', 'pullDownRefresh']);

	const diyStore = useDiyStore();

	const data = computed(() => {
       if (diyStore.mode == 'decorate') {
           return diyStore;
       } else {
           return props.data;
       }
   })

   const tabbarAddonName = computed(() => {
       return 'o2o'
   })


	watch(
		() => props.pullDownRefresh,
		(newValue, oldValue) => {
			// 处理下拉刷新业务
		}
	)

	const memberStore = useMemberStore()

	// #ifdef H5
	const { query } = urlDeconstruction(location.href)
	if (query.code && isWeixinBrowser()) {
		wechatSync({ code: query.code }).then(res => {
			memberStore.getMemberInfo()
		})
	}
	// #endif

	const info:any = computed(() => {
		// 装修模式
		if (diyStore.mode == 'decorate') {
			return {
				headimg: '',
				nickname: '昵称',
				balance: 0,
				point: 0,
				money: 0,
				member_no: 'NIU0000021'
			}
		} else {
			return memberStore.info;
		}
	})

	const money = computed(() => {
		if (info.value) {
			let m = parseFloat(info.value.balance) + parseFloat(info.value.money)
			return moneyFormat(m.toString());
		} else {
			return 0;
		}
	})

	const toLogin = () => {
		useLogin().setLoginBack({ url: '/addon/o2o/pages/member/index' })
	}

	const infoFill = ref(false)
	const clickAvatar = () => {
		// #ifdef MP-WEIXIN
		infoFill.value.show = true
		// #endif

		// #ifdef H5
		if (isWeixinBrowser()) {
			useLogin().getAuthCode('snsapi_userinfo')
		} else {
			redirect({ url: '/app/pages/member/personal' })
		}
		// #endif
	}
</script>

<style lang="scss" scoped>
.header {
	padding: 40rpx 40rpx 100rpx 40rpx;
	color: rgba(255, 255, 255, 0.9);
	border-bottom-right-radius: 5%;
	border-bottom-left-radius: 5%;
	background: linear-gradient(180.00deg, rgb(16, 165, 174), rgb(1, 198, 171) 100%);	
	.avatar {
		width: 100%;
		margin-top: 20rpx;
		display: flex;
		align-items: center;
		font-size: 24rpx;
		.user {
			display: flex;
			justify-content: space-between;
			width: 100%;
			padding-left: 10rpx;
			align-items: center;
			&-data {
				.name {
					display: flex;
					.edit {
						color: rgba(0, 0, 0, 0.6);
						display: flex;
						margin-left: 20rpx;
					}
				}
				.uid {
					margin-top: 10rpx;
				}
			}
		}
        .grid {
            display: flex;
            justify-content: space-between;
        }
	}
}
.authentication {
    display: flex;
    justify-content: space-between;
    padding: 0 30rpx;
    margin-top: 20rpx;
    &-item {
        .icon {
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
        }
        .name {
            width: 100%;
            text-align: center;
            margin-top: -20rpx;
        }
    }
}
.content {
    padding: 20rpx 28rpx;
    margin-top: -80rpx;
    &-inner {
        padding: 40rpx 68rpx;
        background: #FFF;
        border-radius: 25rpx;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        .value {
            color: rgba(0, 0, 0, 0.9);
            font-size: 32rpx;
            text-align: center;
        }
        .label {
            font-size: 24rpx;
            text-align: center;
            color: rgba(0, 0, 0, 0.6);
        }
    }
    .btn {
        width: 100%;
        text-align: center;
        padding: 0 100rpx;
        margin-top: 30rpx;
    }
}
.fn-list {
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 20rpx 28rpx;
	font-size: 24rpx;
	margin: 32rpx;
	flex-wrap: wrap;
    background: #FFF;
	.title {
		font-weight: bold;
		font-size: 28rpx;
		width: 100%;
		margin: 15rpx 0;
	}
	&-item {
		display: flex;
		align-items: center;
		flex-wrap: wrap;
		justify-content: center;
		margin-bottom: 20rpx;
		.name {
			width: 100%;
			margin-top: 10rpx;
			text-align: center;
		}
	}
}
</style>
