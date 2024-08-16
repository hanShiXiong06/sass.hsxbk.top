<template>
    <view class="case">
        <view class="data-box" style="border-radius: 16rpx;background: rgb(245, 245, 247);">
            <view class="flex items-center p-3 rounded">
					<view>
						<view class="flex justify-center">
							<u-avatar src="" shape="circle" size="40"></u-avatar>
						</view>
					</view>
					<view class="ml-2 flex-1 ">
						<view class="pb-[15rpx] border-0 border-solid border-b-[2rpx] border-[#ebeef5] ">
							<view class="flex justify-between items-center">
								<text class="text-[24rpx] font-bold">拯救地球好累</text>
                                <view style="font-size: 28rpx;"><u-button style="font-size: 24rpx;" size="mini" shape="circle" color="rgb(32, 187, 15)">关注</u-button></view>
							</view>
							
						</view>
						<view class="flex py-[10rpx] items-center text-[#aaaaaa] leading-[32rpx]" style="margin-top: -20rpx;">
							<view class="flex items-center">
								<text class="text-[22rpx] ml-[5rpx]">我的第一张相册</text>
							</view>
						</view>
					</view>
			</view>
        </view>
        <view style="margin-top: 60rpx;">
            <u-image 
					width="100%"
					height="300rpx"
					src=""
					mode="widthFix">
					<template #error>
						<u-icon name="photo" color="rgb(153, 153, 153)" size="30"></u-icon>
					</template>
				</u-image>
                <view class="icon-text">
                    <view>07/18 15:48</view>
                    <view><text class="iconfont iconpinglun"></text>21</view>
                    <view class="flex items-center"><u-icon name="heart" color="rgb(153, 153, 153)" size="32rpx"></u-icon>4</view>
                </view>
        </view>
        <view class="text">
            无论我们处于人生那个阶段，无论我们是租的房子还是买的房
            子，的会尽快发货的十六分的法律角度思考v或多方，爱好就是打开了好地方v的话就是点击开始v的接口v看VS
        </view>
        <view style="margin-top: 40rpx;">
            <view class="title">整理前</view>
            <u-image 
					width="100%"
					height="300rpx"
					src=""
					mode="widthFix">
					<template #error>
						<u-icon name="photo" color="rgb(153, 153, 153)" size="30"></u-icon>
					</template>
				</u-image>
        </view>
        <view style="margin-top: 40rpx;">
            <view class="title">整理后</view>
            <u-image 
					width="100%"
					height="300rpx"
					src=""
					mode="widthFix">
					<template #error>
						<u-icon name="photo" color="rgb(153, 153, 153)" size="30"></u-icon>
					</template>
				</u-image>
        </view>
        <view class="footer">
            <view class="icons">
                <view class="footer-item">
                    <view class="icons-item">
                        <u-icon name="star" color="rgb(153, 153, 153)" size="32rpx"></u-icon>
                    </view>
                    <view>收藏</view>
                </view>
                <view class="footer-item">
                    <view class="icons-item">
                        <u-icon name="heart" color="rgb(153, 153, 153)" size="32rpx"></u-icon>
                    </view>
                    <view>点赞</view>
                </view>
                <view class="footer-item">
                    <view class="icons-item">
                        <u-icon name="share-square" color="rgb(153, 153, 153)" size="32rpx"></u-icon>
                    </view>
                    <view>分享</view>
                </view>
            </view>
            <view>
                <u-button shape="circle" color="rgb(21, 193, 118)">免费咨询</u-button>
            </view>
        </view>
    </view>
</template>
<script lang="ts" setup>
import { img, redirect } from '@/utils/common';
</script>
<style lang="scss" scoped>
.case {
    padding: 32rpx;
    .user {
        background: rgb(205, 245, 222);
    }
}
.icon-text {
    display: flex;
    justify-content: space-between;
    color: rgb(153, 153, 153);
    margin-top: 10rpx;
}

.text {
    font-size: 28rpx;
    margin-top: 30rpx;
    font-size: 26rpx;
}

.title {
    font-size: 32rox;
    font-weight: bold;
}
.send {
    display: flex;
    justify-content: space-between;
    align-items: center;
    &-input {
        display: flex;
        justify-content: space-between;
        align-items: center;
        background: rgb(245, 245, 247);
        width: 100%;
    }
}
.footer {
    padding: 16rpx 8rpx;
    margin-top: 20rpx;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 24rpx;
    color: rgb(153, 153, 153);
    &-item {
        margin-right: 30rpx;
    }
    .icons {
        display: flex;
        align-items: center;
        &-item {
            display: flex;
            justify-content: center;
        }
    }
}
</style>