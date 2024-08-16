<template>
    <view class="bg-[#f8f8f8] ">
        <view class="min-h-screen overflow-hidden pb-3 box-border">
            <view class="content-bg pt-3">
                <view class="content-inner bg-[#fff]">
                    <u-image  width="180rpx" height="120rpx" radius="10rpx" src=""  mode="aspectFill"/>
                    <view class="detali">
                        <view class="name">七喜到家</view>
                        <view class="manSum">
                            <view>已认证3人 </view>
                            <u-icon name="arrow-down"/>
                        </view>
                    </view>
                    <view class="content-tag">
                        <view class="content-tag-item" @click="redirect({url: `/app/pages/mechanism/authentication`})">
                            认证收纳师
                            <u-icon color="rgb(25, 181, 132)" name="account-fill"/>
                        </view>
                        <view class="content-tag-item" @click="redirect({url:`/app/pages/mechanism/member`})">
                            机构课程
                            <u-icon  color="rgb(25, 181, 132)" name="calendar-fill"/>
                        </view>
                        <view class="content-tag-item" @click="redirect({url:`/app/pages/mechanism/member`})">
                            机构介绍
                            <u-icon  color="rgb(25, 181, 132)" name="phone-fill"/>
                        </view>
                    </view>
                    </view>
            </view>
            <view class="technician-list">
                <view class="technician-list-item">
                    <view class="technician-list-item-content">
                        <view class="img"> <u-image bgColor="#999" shape="circle" width="100rpx" height="100rpx" radius="10rpx" class="mr-[14rpx]" src=""  mode="aspectFill"/></view>
                        <view class="text">
                            <view class="name">
                                上海整理师Linda 
                                <view class="fire">
                                    <u-icon name="heart" color="#fa9c69" /> 860
                                </view>
                            </view>
                            <view class="fans">                                
                                <view class="fan-num">
                                    粉丝
                                    <view style="font-weight: bold;margin-left: 10rpx;">8</view>
                                </view>
                            </view>
                        </view>
                        <view class="consulting">
                            <u-button shape="circle" color="#fa9c69" type="primary" @click="redirect({url: `/app/pages/chat/index`})">咨询</u-button>
                        </view>
                    </view>
                </view>
                <view class="technician-list-item">
                    <view class="technician-list-item-content">
                        <view class="img"> <u-image bgColor="#999" shape="circle" width="100rpx" height="100rpx" radius="10rpx" class="mr-[14rpx]" src=""  mode="aspectFill"/></view>
                        <view class="text">
                            <view class="name">
                                上海整理师Linda 
                                <view class="fire">
                                    <u-icon name="heart" color="#fa9c69" /> 860
                                </view>
                            </view>
                            <view class="fans">                                
                                <view class="fan-num">
                                    粉丝
                                    <view style="font-weight: bold;margin-left: 10rpx;">8</view>
                                </view>
                            </view>
                        </view>
                        <view class="consulting">
                            <u-button shape="circle" color="#fa9c69" type="primary" @click="redirect({url: `/app/pages/chat/index`})">咨询</u-button>
                        </view>
                    </view>
                </view>
                <view class="technician-list-item">
                    <view class="technician-list-item-content">
                        <view class="img"> <u-image bgColor="#999" shape="circle" width="100rpx" height="100rpx" radius="10rpx" class="mr-[14rpx]" src=""  mode="aspectFill"/></view>
                        <view class="text">
                            <view class="name">
                                上海整理师Linda 
                                <view class="fire">
                                    <u-icon name="heart" color="#fa9c69" /> 860
                                </view>
                            </view>
                            <view class="fans">                                
                                <view class="fan-num">
                                    粉丝
                                    <view style="margin-left: 10rpx;">8</view>
                                </view>
                            </view>
                        </view>
                        <view class="consulting">
                            <u-button shape="circle" color="#fa9c69" type="primary" @click="redirect({url: `/app/pages/chat/index`})">咨询</u-button>
                        </view>
                    </view>
                </view>
            </view>
        </view>
        <template v-if="diyStore.mode == ''">
            <view class="pt-[20rpx]"></view>
            <tabbar :addon="tabbarAddonName" />
        </template>
    </view>
</template>
<script lang="ts" setup>
import { onMounted, nextTick, computed } from 'vue';
import useConfigStore from '@/stores/config'
import useDiyStore from '@/app/stores/diy';
import { redirect } from '@/utils/common'
const diyStore = useDiyStore();
const props = defineProps(['data','pullDownRefreshCount']);
const tabbarAddonName = computed(() => {
    return 'o2o'
})
const data = computed(() => {
       if (diyStore.mode == 'decorate') {
           return diyStore;
       } else {
           return props.data;
       }
})
</script>
<style lang="scss" scoped>
.content-bg {
    background: linear-gradient(180.00deg, rgba(21, 193, 118, 1),rgba(21, 193, 118, .3) 100%);
    padding-bottom: 40rpx;
}
.content-inner {
    padding: 40rpx 30rpx;
    width: 620rpx;
    margin: 100rpx auto 0 auto;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    .detali {
        margin-left: 30rpx;
        .name {
            font-size: 28rpx;
            font-weight: bold;
        }
        .manSum {
            display: flex;
            align-items: center;
            justify-content: space-between;
            font-size: 22rpx;
            margin-top: 20rpx;
            background: rgb(243, 243, 243);
            padding: 3rpx 10rpx;
        }
    }
}
.content-tag {
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-top: 30rpx;
    &-item {
        color: rgb(25, 181, 132);
        width: 155rpx;
        display: flex;
        border-radius: 15rpx;
        font-size: 24rpx;
        padding: 30rpx 20rpx;
        align-items: center;
        justify-content: space-between;
        background: linear-gradient(180.00deg, rgb(226, 247, 240),rgba(226, 247, 240, 0) 100%);
    }
}
.technician-list {
    padding: 20rpx;
    &-item {
        background: #fff;
        margin-bottom: 20rpx;
        &-content {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 40rpx;
            .name {
                display: flex;
                justify-content: space-between;
                align-items: center;
                font-weight: bold;
                width: 300rpx;
            }
            .star,.fan-num {
                display: flex;
                align-items: center;
                width: 100%;
            }
            .fire {
                margin-left: 10rpx;
                color: #fa9c69;
                display: flex;
                align-items: center;
            }
            .text {
                width: 350rpx;
            }
            .fans {
                display: flex;
                justify-content: space-between;
                align-items: center;
                width: 100%;
                font-size: 24rpx;
                color: #999;
            }
        }
    }
}
</style>