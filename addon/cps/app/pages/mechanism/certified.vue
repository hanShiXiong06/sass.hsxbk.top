<template>
	<!-- <view class="bg-[#f8f8f8] min-h-screen overflow-hidden pb-3 box-border"> -->
	<view>
		<view class="header">
            <view class="info">
                <view class="info-item">
                    <u-icon name="map"></u-icon>
                    <view style="margin-left: 10rpx;">实时位置：浙江省杭州市庙后王路</view>
                </view>
                <view class="info-item" style="margin-top: 10rpx;">
                    <u-icon name="clock"></u-icon>
                    <view style="margin-left: 10rpx;">更新时间：2023-07-28</view>
                </view>
            </view>
			<view class="avatar">
				<u-avatar :src="img(info?.headimg)" size="50" leftIcon="none"></u-avatar>
				<view class="user">
					<view class="user-data">
						<view class="name">
							{{ info?.nickname }} 
						</view>
						<view class="uid">技师ID: {{ info?.member_no }} </view>
					</view>
					<view class="user-code">
						<view>个人信息></view>
						<view class="grid" style="margin-top: 10rpx;">
                            <u-button shape="circle" size="mini" color="rgb(245, 63, 63)">报警110</u-button>
                        </view>
					</view>
				</view>
			</view>
		</view>
        <view style="padding: 30rpx;">
            <view class="statistics">
                <view class="statistics-item">
                    <view class="value">￥666</view>
                    <view class="label">今日收益</view>
                </view>
                <view class="statistics-item">
                    <view class="value">6</view>
                    <view class="label">服务订单</view>
                </view>
                <view class="statistics-item">
                    <view class="value">2</view>
                    <view class="label">消息</view>
                </view>
            </view>
        </view>
        <view class="tag-list">
			<view class="tag-list-item">
				<u-icon size="100rpx" color="rgb(255, 90, 95)" name="data:image/png;base64,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"/>
				<view class="name">发动态</view>
			</view>
			<view class="tag-list-item">
				<u-icon size="100rpx" color="rgb(255, 90, 95)" name="data:image/png;base64,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"/>
				<view class="name">发案例</view>
			</view>
			<view class="tag-list-item">
				<u-icon size="100rpx" color="rgb(255, 90, 95)" name="data:image/png;base64,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"/>
				<view class="name">发招募</view>
			</view>
			<view class="tag-list-item">
				<u-icon size="100rpx" color="rgb(255, 90, 95)" name="data:image/png;base64,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"/>
				<view class="name">抢单大厅</view>
			</view>
		</view>
		<view class="content">
			<view class="content-item" style="background: rgb(229, 243, 255);color: rgb(36, 111, 182);">
				<u-icon :size="40" name="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAABHNCSVQICAgIfAhkiAAAALlJREFUWIXtlUEKwjAQRWeSnEBvJb2EHkwvIb2Vbu2izLgqJAWFIpjXkLdKIaGPPzOJSKdxdMvm0/Xhy3q8HP9yNmz5SQ3wgkXUeRlqkrcAPsEu+Ctp9T1VsfjCzgRVXpU8PrKzBI0n2Gme8i2+Pe+1RHLG82FY1qspdtyQFIJucEFVZV/UKspO0Og9GOhvMT5BNXgP4qfY6SUWMbaga2KXWOkJ2gwXDBE+xcEjO0FLEZ6gzLgEO83zBun3O67gu0GfAAAAAElFTkSuQmCC"/>
				<view class="content-text">
					<view class="name">日程管理</view>
				</view>
			</view>
			<view class="content-item" style="background: rgb(255, 239, 234);color: rgb(184, 108, 38);">
				<u-icon :size="40" name="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAABHNCSVQICAgIfAhkiAAAA1tJREFUWIXtWEtIVFEY/v5zx/EBGW2kgoiowArJIIgW4fUZBYMgKb0sZt0qoVyqhQRFuQ6iIY0IhSBnEajDjEi4yLAn6apl60TSZu49fwsdX8055947Nyjog4F75/z/932c/9zzAv7jLwInbZuTth0mJxWTzEm7Z+UBvYqQDAh9FMtkgmoEMshJu0djSqXUS7FMn18tXwY5adtgpP2KbFGs99Ojwmvgaq8VZw4AGOm1oeEBnnowlJ77XdlTyY09+EfMAboPaxPMJWZ4LodfeCm1tsQ8Wl8H8ER4lgqJ8C1qnbytao4YkrvBWPYlSJgC45T3eOHomrUGWSILMhskorvUmr63Kfdl/Q1mvmk0yNwF4I6SW5n3ou4kQwwbzQEPqC09UJij/joDXWYO2UFtk9OF2tQfiRQSjGXdj4FJlTkAoLb0AAOTJh7J1nEVh7rEJCUg9OVlZLXtACDpNYiPGniU41Bp0GWrVhCWtLyMgmXZrA2HQHoeBDAoIWaElJ0Gfe0XCADEXAMmbSUkiRlVm3IMRs9NzJrGjmBcMBukahMPHFf6NggARmLGsjvS2K9Kd0ca+71wRM+n36s49PMg8JYYR3Qx5PJB+bxhOCd5beG3BB0WQDtcBqCfR5nwWddumqg/MLBfF7Nmiqh7PRGQBmN5uIa51rjdcp41xECIeRHzC2Katy6m7uti9GsxAIetuQjc5vBsrSPHYtQU42nDmhtqbAYhXJOM8ZLO1LgpzPOZxBlqijN4X3Gu8qL0NdI5kfAW6wPOUOMlBvYGs7WGqZLO1JTXYN/HTmewuZ1Z7vGbt4rpkqsp4/K4EYHOxc6TplYS2O0nx3V4JhpPvfGrFfhmgRPNtS7xMS+xFtMsxcffBdEp7upjsKXKkVxDQFVBY4I+0pWxT8VoFGUwD060VLuSD238zxL0heJjc2Hwh4bs45YT/Oj0gTA5jSuJH5RQdh5WmIweSsxPz1RiCZX59yzL7cJyKnU5Kkg3spB/jpL4jnIs0OVXC7oc9akucXZnzs3uCmLEL6RDi6Vu7htdyyxubStYYn4Yq8g6SzvgcctULMjiCGhbwV21/uojYZcBKPuRLS0HACG4rFgzUq6cTyqiP/MHqWWKZ5QdEeyGdbg96ieeOkbMx9N/Fb8AZWaRL1SlAgAAAAAASUVORK5CYII="/>
				<view class="content-text">
					<view class="name">服务管理</view>
				</view>
			</view>
		</view>

		<view class="fn-list bg-[#f8f8f8]">
			<view class="title">其它功能</view>
			<view class="fn-list-item">
				<u-icon :size="25" name="account"/>
				<view class="name">购买物料</view>
			</view>
			<view class="fn-list-item">
				<u-icon :size="25" name="order"/>
				<view class="name">学习培训</view>
			</view>
			<view class="fn-list-item">
				<u-icon :size="25" name="kefu-ermai"/>
				<view class="name">邀请有奖</view>
			</view>
			<view class="fn-list-item">
				<u-icon :size="25" name="map"/>
				<view class="name">接单号码</view>
			</view>
			
			<view class="fn-list-item">
				<u-icon :size="25" name="info-circle"/>
				<view class="name">提现</view>
			</view>
			<view class="fn-list-item">
				<u-icon :size="25" name="setting"/>
				<view class="name">我的动态</view>
			</view>
			<view class="fn-list-item">
				<u-icon :size="25" name="warning"/>
				<view class="name">意见反馈</view>
			</view>
			<view class="fn-list-item">
				<u-icon :size="25" name="bell"/>
				<view class="name">保证金</view>
			</view>
		</view>

	</view>
</template>

<script lang="ts" setup>
import { computed, ref, watch } from 'vue'
import { img, isWeixinBrowser, redirect, urlDeconstruction } from '@/utils/common'
import { wechatSync } from '@/app/api/system'
import useDiyStore from '@/app/stores/diy'
import useMemberStore from '@/stores/member'
const memberStore = useMemberStore()
const diyStore = useDiyStore();
// #ifdef H5
const { query }:any = urlDeconstruction(location.href)
if (query.code && isWeixinBrowser()) {
    wechatSync({ code: query.code }).then(res => {
        memberStore.getMemberInfo()
    })
}
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
</script>
<style lang="scss" scoped>
.header {
	padding: 40rpx 40rpx 100rpx 40rpx;
	color: rgba(255, 255, 255, 0.9);
	border-bottom-right-radius: 5%;
	border-bottom-left-radius: 5%;
	background: linear-gradient(180.00deg, rgb(67, 207, 124),rgba(244, 249, 232, 0) 100%);
    color: rgb(22, 85, 68);
    .info {
        backdrop-filter: blur(20rpx);
        border-radius: 25rpx;
        padding: 24rpx;
        background: linear-gradient(132.61deg, rgba(255, 255, 255, 0.8) 0.636%,rgba(255, 255, 255, 0.8) 1.63%,rgba(255, 255, 255, 0.6) 30.135%,rgba(255, 255, 255, 0.4) 67.914%,rgba(255, 255, 255, 0.2) 100%);
        &-item {
            display: flex;
            align-items: center;
        }
    }
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
			&-code {
				text-align: center;
			}
			&-member-code {
				padding: 4rpx 20rpx;
				background: rgb(254, 217, 164);
				color: rgb(165, 110, 51);
				font-size: 22rpx;
				border-radius: 50rpx;
			}
			.grid {
				display: flex;
				justify-content: center;
			}
		}
	}
}
.statistics {
    padding: 30rpx 70rpx;
    display: flex;
    justify-content: space-between;
    text-align: center;
    font-size: 26rpx;
    margin-top: 38rpx;
    background: #f8f8f8;
    color: rgba(0, 0, 0, 0.9);
    margin-top: -30rpx;
    .value {
        font-size: 48rpx;
    }
    .label {
        font-size: 28rpx;
    }
}
.content {
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 100%;
	padding: 0 60rpx;
	box-sizing: border-box;
	margin-top: 40rpx;
	&-item {
		width: 285rpx;
		padding: 30rpx 30rpx;
		box-sizing: border-box;
		display: flex;
		align-items: center;
		border-radius: 25rpx;
		// justify-content: space-between;
	}
	&-text {
		margin-left: 20rpx;
	}
	.name {
		font-size: 28rpx;
		font-weight: 400;
	}
	.unit {
		font-size: 22rpx;
		margin-left: 10rpx;
	}
	.value {
		display: flex;
		align-items: center;
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
.tag-list {
    display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 20rpx 0 10rpx 0;
	font-size: 24rpx;
	flex-wrap: wrap;
    &-item {
		display: flex;
		align-items: center;
		flex-wrap: wrap;
		justify-content: center;
		margin-bottom: 20rpx;
		.name {
			width: 100%;
			margin-top: -10rpx;
			text-align: center;
		}
	}
}
</style>
