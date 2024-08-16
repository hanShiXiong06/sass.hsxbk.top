<template>
    <view style="background: #f1dee2;" class="min-h-screen overflow-hidden pb-3 box-border">
        <view class="integral">
            <view class="title">
                <view>我的德分</view>
                    <view class="my">
                        <text style="font-weight: bold;">600</text>分
                        <view style="margin-left: 20rpx;width: 150rpx;">
                            <u-button color="#d2abbe" shape="circle" type="primary" :plain="true">账单</u-button>
                        </view>
                </view>
            </view>
            <view class="integral-content">
                <view class="integral-title">新手福利</view>
                <view class="integral-content-item">
                    <view class="flex justify-between items-center">
                        <view class="icon">
                            <u-icon name="grid" color="rgba(255, 255, 255, 0.71)" size="40"></u-icon>
                        </view>
                        <view>
                            <view>发布物品</view>
                            <view class="num">
                                <u-icon  size="25" color="#eac32e" name="rmb-circle-fill"></u-icon> 
                                +50德分
                            </view>
                        </view>
                    </view>
                    <view class="button">
                        <u-button  size="40" color="#d2abbe" shape="circle" type="primary">去完成</u-button>
                    </view>
                </view>
                <view class="integral-content-item">
                    <view class="flex justify-between items-center">
                        <view class="icon">
                            <u-icon name="grid" color="rgba(255, 255, 255, 0.71)" size="40"></u-icon>
                        </view>
                        <view>
                            <view>成功送出一件物品</view>
                            <view class="num">
                                <u-icon  size="25" color="#eac32e" name="rmb-circle-fill"></u-icon> 
                                +50德分
                            </view>
                        </view>
                    </view>
                    <view class="button">
                        <u-button  size="40" color="#d2abbe" shape="circle" type="primary">去完成</u-button>
                    </view>
                </view>
                <view class="integral-content-item">
                    <view class="flex justify-between items-center">
                        <view class="icon">
                            <u-icon name="grid" color="rgba(255, 255, 255, 0.71)" size="40"></u-icon>
                        </view>
                        <view>
                            <view>成功获得一件物品</view>
                            <view class="num">
                                <u-icon  size="25" color="#eac32e" name="rmb-circle-fill"></u-icon> 
                                +2德分
                            </view>
                        </view>
                    </view>
                    <view class="button">
                        <u-button  size="40" color="#d2abbe" shape="circle" type="primary">去完成</u-button>
                    </view>
                </view>
            </view>
            <view class="integral-content">
                <view class="integral-title">每日福利</view>
                <view class="integral-content-item">
                    <view class="flex justify-between items-center">
                        <view class="icon">
                            <u-icon name="grid" color="rgba(255, 255, 255, 0.71)" size="40"></u-icon>
                        </view>
                        <view>
                            <view>签到</view>
                            <view class="num">
                                <u-icon  size="25" color="#eac32e" name="rmb-circle-fill"></u-icon> 
                                +2德分
                            </view>
                        </view>
                    </view>
                    <view class="button">
                        <u-button  size="40" color="#d2abbe" shape="circle" type="primary">去完成</u-button>
                    </view>
                </view>
                <view class="integral-content-item">
                    <view class="flex justify-between items-center">
                        <view class="icon">
                            <u-icon name="grid" color="rgba(255, 255, 255, 0.71)" size="40"></u-icon>
                        </view>
                        <view>
                            <view>邀请新用户</view>
                            <view class="num">
                                <u-icon  size="25" color="#eac32e" name="rmb-circle-fill"></u-icon> 
                                +50德分
                            </view>
                        </view>
                    </view>
                    <view class="button">
                        <u-button  size="40" color="#d2abbe" shape="circle" type="primary">去完成</u-button>
                    </view>
                </view>
                <view class="integral-content-item">
                    <view class="flex justify-between items-center">
                        <view class="icon">
                            <u-icon name="grid" color="rgba(255, 255, 255, 0.71)" size="40"></u-icon>
                        </view>
                        <view>
                            <view>发布一件物品</view>
                            <view class="num">
                                <u-icon  size="25" color="#eac32e" name="rmb-circle-fill"></u-icon> 
                                +1德分
                            </view>
                        </view>
                    </view>
                    <view class="button">
                        <u-button  size="40" color="#d2abbe" shape="circle" type="primary">去完成</u-button>
                    </view>
                </view>
                <view class="integral-content-item">
                    <view class="flex justify-between items-center">
                        <view class="icon">
                            <u-icon name="grid" color="rgba(255, 255, 255, 0.71)" size="40"></u-icon>
                        </view>
                        <view>
                            <view>收藏一件物品</view>
                            <view class="num">
                                <u-icon  size="25" color="#eac32e" name="rmb-circle-fill"></u-icon> 
                                +1德分
                            </view>
                        </view>
                    </view>
                    <view class="button">
                        <u-button  size="40" color="#d2abbe" shape="circle" type="primary">去完成</u-button>
                    </view>
                </view>
            </view>
            <view class="integral-content">
                <view class="integral-title">每日福利</view>
                <view class="integral-content-item">
                    <view class="flex justify-between items-center">
                        <view class="icon">
                            <u-icon name="grid" color="rgba(255, 255, 255, 0.71)" size="40"></u-icon>
                        </view>
                        <view>
                            <view>首次得到宝贝</view>
                            <view class="num">
                                <u-icon  size="25" color="#eac32e" name="rmb-circle-fill"></u-icon> 
                                +2德分
                            </view>
                        </view>
                    </view>
                    <view class="button">
                        <u-button  size="40" color="#d2abbe" shape="circle" type="primary">去完成</u-button>
                    </view>
                </view>
            </view>
        </view>
    </view>
</template>
<style lang="scss" scoped>
    .integral {
        padding: 30rpx;
        .title {
            color: #fff;
            font-size: 32rpx;
            .my {
                display: flex;
                align-items: center;
            }
        }
        &-title {
            font-weight: bold;
            font-size: 26rpx;
            padding: 30rpx 30rpx 10rpx 30rpx;
        }
        &-content {
            background-color: #fff;
            border-radius: 25rpx;
            margin-top: 40rpx;
            .icon {
                background: #f1dee2;
                border-radius: 50%;
                overflow: hidden;
                height: 80rpx;
                width: 80rpx;
                margin-right: 30rpx;
            }
            .num {
                background: #f1dee2;
                color: #d2abbe;
                display: flex;
                align-items: center;
                width: 200rpx;
                border-radius: 50rpx;
            }
            .button {
                width: 150rpx;
            }
            &-item {
                display: flex;
                padding: 30rpx;
                align-items: center;
                justify-content: space-between; 
            }
        }
    }
</style>