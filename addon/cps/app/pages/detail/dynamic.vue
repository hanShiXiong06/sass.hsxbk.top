<template>
    <view class="dynamic">
        <view class="user data-box">
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
                                <view style="font-size: 28rpx;"><u-button style="font-size: 24rpx;" size="mini" shape="circle" color="rgb(32, 187, 15)">查看</u-button></view>
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
        <view class="data-box" style="margin-top: 50rpx;border-radius: 16rpx;background: rgb(245, 245, 247);">
            <view class="flex items-center p-3 rounded">
					<view>
						<view class="flex justify-center">
							<u-image src="" width="80rpx" height="80rpx"></u-image>
						</view>
					</view>
					<view class="ml-2 flex-1 ">
						<view class="pb-[15rpx] border-0 border-solid border-b-[2rpx] border-[#ebeef5] ">
							<view class="flex justify-between items-center">
								<text class="text-[24rpx] font-bold">全屋收纳服务</text>
                                <view style="font-size: 28rpx;" @click="redirect({ url: '/app/pages/detail/appointment',param:{}})">
                                    <u-button style="font-size: 24rpx;" size="mini" shape="circle" color="rgb(252, 119, 131)">预约</u-button>
                                </view>
							</view>
							
						</view>
						<view class="flex py-[10rpx] items-center text-[#aaaaaa] leading-[32rpx]" style="margin-top: -20rpx;">
							<view class="flex items-center">
                                北京市 <u-icon name="map" color="rgb(155, 155, 155)" size="32rpx"></u-icon>
								<text class="text-[22rpx] ml-[5rpx]">29人预约</text>
							</view>
						</view>
					</view>
			</view>
        </view>
        <view style="margin-top: 30rpx;">
            <view class="title">全部评论</view>
            <view class="bg-white flex px-[20rpx] py-[20rpx]  mx-[16rpx] border-0 border-solid border-[#F0F0F0] rounded-[12rpx] box-border">
                    <view style="display: flex;align-items: center;">
                        <u-avatar :size="50">
                        </u-avatar>
                        
                        <view style="margin-left: 15rpx;" class="w-[380rpx]">
                            <view style="color: rgb(153, 153, 153) font-size: 34rpx;overflow: hidden;white-space: nowrap; text-overflow: ellipsis;">一只小可爱</view>
                            <view style="color: rgb(153, 153, 153); font-size: 24rpx;">
                                5小时前
                            </view>
                            <view style="display: flex;"><text>请问是哪个品牌的呀？</text> </view>
                        </view>
                    </view>
                   
            </view>
            <view class="bg-white flex px-[20rpx] py-[20rpx]  mx-[16rpx] border-0 border-solid border-[#F0F0F0] rounded-[12rpx] box-border">
                    <view style="display: flex;align-items: center;">
                        <u-avatar :size="50">
                        </u-avatar>
                        
                        <view style="margin-left: 15rpx;" class="w-[380rpx]">
                            <view style="color: rgb(153, 153, 153) font-size: 34rpx;overflow: hidden;white-space: nowrap; text-overflow: ellipsis;">一只小可爱</view>
                            <view style="color: rgb(153, 153, 153); font-size: 24rpx;">
                                5小时前
                            </view>
                            <view style="display: flex;"><text>请问是哪个品牌的呀？</text> </view>
                        </view>
                    </view>
                   
            </view>
        </view>
        <view class="send">
            <view class="send-input">
                <u-input>
                    <template #suffix>
                        <u-icon size="30" name="play-circle"></u-icon>
                    </template>
                </u-input>
            </view>
            <u-icon size="30" name="share-square"></u-icon>
        </view>
    </view>
</template>
<script lang="ts" setup>
import { img, redirect } from '@/utils/common';
</script>
<style lang="scss" scoped>
.dynamic {
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
</style>