<template>
    <view class="topic">
        <view class="header">
            <view class="title">
                <view>
                    <text style="font-size: 28rpx;font-weight: bold;color: rgb(255, 90, 95)">#</text> 
                    衣橱整理收纳的技巧
                </view>
                <view>
                    <u-button size="mini" shape="circle" color="rgb(21, 193, 118)">我要参与</u-button>
                </view>
            </view>
            <view style="margin-top: 10rpx;font-size: 20rpx;padding-left: 30rpx;">
                5人参与此话题
            </view>
        </view>
        <view class="join">
            <view class="join-item">快来加入吧—</view>
            <view class="join-item">这里是话题的介绍</view>
        </view>
        <view class="data-box">
            <view class="flex items-center p-3 rounded">
                <view>
                    <view class="flex justify-center">
                        <u-avatar src="" shape="circle" size="40"></u-avatar>
                    </view>
                </view>
                <view class="ml-2 flex-1 ">
                    <view class="pb-[15rpx]">
                        <view class="flex justify-between items-center">
                            <text class="text-[24rpx] font-bold">
                                拯救地球好累
                                <text class="tag plain">精华</text> <text class="tag plain">置顶</text>
                            </text>
                            <view style="font-size: 28rpx;"><u-button style="font-size: 24rpx;" size="mini" shape="circle" color="rgb(32, 187, 15)">关注</u-button></view>
                        </view>
                        
                    </view>
                    <view class="flex py-[10rpx] items-center text-[#aaaaaa] leading-[32rpx]" style="margin-top: -20rpx;">
                        <view class="flex items-center">
                            <text class="text-[22rpx] ml-[5rpx]">07/18 15:48  发布于上海市</text>
                        </view>
                    </view>
                </view>
                <view style="width:100%;font-size:24rpx;margin-top:20rpx">
                    无论我们处于人生那个阶段，无论我们是租的房子还是买的房子，的会尽快发货的十六分的...
                </view>
                <view class="images-list">
                    <view class="images-list-ltem">
                        <u-image 
                            width="200rpx"
                            height="200rpx"/>
                    </view>
                    <view class="images-list-ltem">
                        <u-image 
                            width="200rpx"
                            height="200rpx"/>
                    </view>
                    <view class="images-list-ltem">
                        <u-image 
                            width="200rpx"
                            height="200rpx"/>
                    </view>
                </view>
                <view class="tag-list">
                    <view class="tag-list-item"># 超人不会飞</view>
                    <view class="tag-list-item"># 超人不会飞</view>
                </view>
                <view class="icon-text">
                    <view class="flex items-center">
                        <u-icon name="heart" color="rgb(153, 153, 153)" size="32rpx"></u-icon>
                        4
                    </view>
                    <view class="flex items-center"><u-icon name="plus-circle"></u-icon>21</view>
                    <view><text class="iconfont iconpinglun"></text>21</view>
                    <view><u-icon name="more-dot-fill"></u-icon></view>
                </view>
			</view>
        </view>
        <template v-if="diyStore?.mode == ''">
            <view class="pt-[20rpx]"></view>
            <tabbar :addon="tabbarAddonName" />
        </template>
    </view>
</template>
<script lang="ts" setup>
import { ref, computed } from 'vue';
import { img, redirect } from '@/utils/common';


import useDiyStore from '@/app/stores/diy';

const diyStore = useDiyStore();
const props = defineProps(['data','pullDownRefreshCount']);
const tabbarAddonName = computed(() => {
    return 'o2o'
})
</script>
<style lang="scss" scoped>
.topic {
    .header {
        border-bottom-right-radius: 25rpx;
        border-bottom-left-radius: 25rpx;
        padding: 60rpx 32rpx;
        background: linear-gradient(180.00deg, rgba(21, 193, 118, 1),rgba(21, 193, 118, .5) 100%);
        color: #000;
    }
}

.title {
    font-size: 32rox;
    font-weight: bold;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.join {
    width: 90%;
    background: #f8f8f8;
    margin: -30rpx auto 20rpx auto;
    font-size: 22rpx;
    &-item {
        padding: 24rpx;
    }
}
.data-box {
    padding: 20rpx;
}
.tag {
    border: 1rpx solid #aaa8a8;
    color: #aaa8a8;
    padding: 1rpx 15rpx;
    font-size: 20rpx;
    display: inline-block;
    &.plain {
        border: 1rpx solid rgb(255, 91, 100);
        color: rgb(255, 91, 100);
        background: rgba(250, 232, 232, 0.93);
    }
}
.items-center {
    flex-wrap: wrap
}
.images-list {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin-top : 10rpx
}
.tag-list {
    display: flex;
    flex-wrap: wrap;
    &-item {
        font-size: 22rpx;
        color: rgb(30, 176, 89);
        background: rgba(214, 253, 244, 0.53);
        margin: 20rpx 20rpx 0 0;
        padding: 2rpx 20rpx;
        border-radius: 50rpx;
    }
}
.icon-text {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: rgb(153, 153, 153);
    margin-top: 10rpx;
}
</style>