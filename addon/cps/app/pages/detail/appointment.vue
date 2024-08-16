<template>
    <view class="appointment">
        <view class="header">
            <u-image height="400rpx" width="100%"></u-image>
        </view>
        <view class="server">
            <view class="server-item">
                <view style="font-size: 40rpx;">全屋收纳服务</view>
                <view><u-icon name="share-square" size="25" color="rgb(21, 193, 118)" /> </view>
            </view>
           
            <view class="charge server-item">
                <view style="font-weight: bold;color: rgb(255, 87, 51);font-size: 32rpx;">
                    ￥198/小时/人 <text class="originalPrice">￥298.00</text>
                </view>
                <view class="sold ">已售:365</view>
            </view>
        </view>
        <view style="padding: 20rpx;">
            <view class="equity">
                <view class="equity-item">
                    <u-icon name="checkmark-circle" color="rgb(21, 193, 118)"></u-icon>
                    <text class="text">实名认证</text>
                </view>
                <view class="equity-item">
                    <u-icon name="checkmark-circle" color="rgb(21, 193, 118)"></u-icon>
                    <text class="text">爽约包退</text>
                </view>
                <view class="equity-item">
                    <u-icon name="checkmark-circle" color="rgb(21, 193, 118)"></u-icon>
                    <text class="text">资质证书</text>
                </view>
                <view class="equity-item">
                    <u-icon name="checkmark-circle" color="rgb(21, 193, 118)"></u-icon>
                    <text class="text">不满意退款</text>
                </view>
            </view>
            <view style="font-size: 24rpx; font-weight: bold;margin-top: 30rpx;">
                服务项目
            </view>
            <view style="font-size: 26rpx;">这里是服务项目的简介，下面是图片</view>
            <view style="margin-top: 10rpx;">
                <u-image height="100" width="100%"/>
            </view>
        </view>
        <view class="showPayModal">
            <view class="link">
                <view class="link-item left">
                    期望上门服务时间
                </view>
                <view class="link-item right">
                    <text class="link-time">2024/3/25/11:00</text>
                    <u-icon name="arrow-right" />
                </view>
            </view>
            <view class="link" style="margin-top:20rpx">
                <view class="link-item left">
                    选择您的服务地址
                </view>
                <view class="link-item right">
                    <u-icon name="arrow-right" />
                </view>
            </view>
            <view class="shopp">
                <view class="flex border-0 border-solid border-[#F0F0F0] rounded-[12rpx] box-border">
                    <u-image  width="150rpx" height="150rpx" radius="10rpx" class="mr-[14rpx]"
                    src=""  mode="aspectFill">
                        <template #error>
                            <u-icon name="photo" color="#999"></u-icon>
                        </template>
                    </u-image>
                    <view class="flex flex-col flex-1 justify-between">
                        <view style="display: flex;">
                            <view class="w-[240rpx] leading-[40rpx] multi-hidden text-[#303133] text-[30rpx]">全屋整理收纳服务</view>
                        </view>
                        <view style="color: rgb(249, 112, 112);font-size: 26rpx;">
                            单价: 198元/小时/人
                        </view>
                        <view style="color: rgb(125, 121, 121);font-size: 24rpx;">
                            (3小时起购)
                        </view>
                        <view style="color: rgb(249, 112, 112);font-size: 26rpx;">
                            <view class="sum">合计: ¥594.00</view>
                        </view>
                    </view>
                    <view class="num">
                        <u-number-box buttonSize="20"></u-number-box>
                    </view>
                </view>
            </view>
            <view class="link">
                <view class="link-item left">
                    服务技师:
                </view>
                <view class="link-item right">
                    <text class="link-text">当当</text>
                    <u-icon name="arrow-right" />
                </view>
            </view>
            <view class="link">
                <view class="link-item left">
                    服务人数:
                </view>
                <view class="link-item right">
                    <u-number-box buttonSize="20"></u-number-box>
                </view>
            </view>
            <view class="tip">
                注意：默认选择一位收纳师，如需多位收纳师请选择人数，其他收纳师有系统指派
            </view>
            <view class="link">
                <view class="remark">
                    备注:
                    <view class="link-textarea">
                        <textarea cols="10" rows="3" placeholder="请输入订单备注"
                                placeholder-class="text-sm"></textarea>
                    </view>
                    
                </view>
                <view class="link-item right">
                    
                </view>
            </view>
            <view class="pay">
                <view class="order-tip">下单后，系统将自动发短信提醒收纳师接单</view>
                <view class="pay-content">
                    <view class="pay-content-left">
                        <view class="pay-content-detail">全屋收纳 单价：198/1小时/人*2人*数量3  合计 ：1188.0 </view>
                        <view class="price">
                            待支付： <view style="color: rgb(249, 112, 112)">￥1188.00</view>
                        </view>
                    </view>
                    <view class="pay-content-right">
                        <u-button shape="circle" color="rgb(21, 193, 118)">立即预约</u-button>
                    </view>
                </view>
            </view>
        </view>
    </view>
</template>
<style lang="scss" scoped>
.server {
    margin-top: 10rpx;
    &-item {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 28rpx;
    }
    .originalPrice,
    .sold {
        font-size: 20rpx;
        color: rgb(153, 153, 153);
    }
    .originalPrice {
        text-decoration: line-through; 
    }
}
.equity {
    background: rgb(255, 249, 246);
    padding: 30rpx;
    display: flex;
    justify-content: space-between;
    border-radius: 15rpx;
    &-item {
        display: flex;
        align-items: center;
        font-size: 24rpx;
        color: rgb(153, 153, 153);
        .text {
            margin-left: 10rpx;
        }
    }
}
</style>