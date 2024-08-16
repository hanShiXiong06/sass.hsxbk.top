<template>
    <view>
        <view>
            <view style="display: flex;align-items: center;padding: 20rpx;">
                <view style="padding-right: 20rpx; display: flex;align-items: center;" @click="selectArea" >
                    <u-icon name="map-fill" color="rgb(21, 193, 118)" /> <text style="margin: 0 15rpx;">{{ area || '北京' }}</text> <u-icon name="arrow-down-fill" />
                </view>
                <u-input
                    shape="circle"
                    placeholder="请输入机构名"
                    prefixIcon="search"
                    prefixIconStyle="font-size: 45rpx;color: #909399"
                    placeholderStyle="font-size: 28rpx;"
                ></u-input>
                <view style="padding: 0 20rpx; display: flex;align-items: center;">
                    <u-button shape="circle" color="rgb(21, 193, 118)" type="primary">搜索</u-button>
                </view>
            </view>
            <view class="pb-3 pt-1 flex items-center justify-between px-[24rpx]">
				<text :class="['text-sm']">推荐机构</text>
				<view class="flex items-center text-color">
					<text class="text-sm mr-[4rpx]">信用排序</text>
					<!-- <text class="text-xs iconfont iconjiantoushang font-bold"></text> -->
					<text class="text-xs iconfont iconxialajiantouxiao"></text>
				</view>
				<view class="flex items-center">
					<text class="text-sm mr-[4rpx]">区域</text>
					<!-- <text class="text-xs iconfont iconjiantoushang font-bold"></text> -->
					<text class="text-xs iconfont iconxialajiantouxiao"></text>
				</view>
				<view class="flex items-center">
					<text class="text-sm mr-[2rpx]">筛选</text>
                    <!-- <text class="text-xs iconfont iconxialajiantouxiao"></text> -->
					<text class="iconfont iconshaixuan"></text>
				</view>
			</view>
            <view class="mechanism-list">
                <view class="mechanism-list-item" v-for="(item, key) in mechanismList" :key="key" @click="toDetailPage(item)">
                    <view class="img">
                        <u-image  width="210rpx" height="150rpx" radius="10rpx" class="mr-[14rpx]" :src="item.img"  mode="aspectFill"/>
                    </view>
                    <view class="name">{{ item.name }}</view>
                </view>
            </view>
            <view class="all-city"><u-icon name="map" /> <view style="margin-left: 10rpx;">全部城市</view></view>
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
                                <view class="star">
                                    <u-icon name="star" color="#fa9c69" />
                                    <u-icon name="star" color="#fa9c69" />
                                    <u-icon name="star" color="#fa9c69" />
                                    <u-icon name="star" color="#fa9c69" />
                                    <u-icon name="star" color="#fa9c69" />
                                </view>
                                
                                <view class="fan-num">
                                    粉丝
                                    <view style="margin-left: 10rpx;">8</view>
                                </view>
                            </view>
                        </view>
                        <view class="consulting">
                            <u-button shape="circle" color="#fa9c69" type="primary">咨询</u-button>
                        </view>
                    </view>
                    <view class="img-list">
                        <view class="img"> <u-image bgColor="#999" width="180rpx" height="120rpx" radius="10rpx" class="mr-[14rpx]" src=""  mode="aspectFill"/></view>
                        <view class="img"> <u-image bgColor="#999" width="180rpx" height="120rpx" radius="10rpx" class="mr-[14rpx]" src=""  mode="aspectFill"/></view>
                        <view class="img"> <u-image bgColor="#999" width="180rpx" height="120rpx" radius="10rpx" class="mr-[14rpx]" src=""  mode="aspectFill"/></view>
                    </view>
                    <view class="comment">
                        <u-avatar src="" size="14"></u-avatar><view style="margin-left: 10rpx;">整理师非常nice, 也很有经验, 体验非常好</view>
                    </view>
                </view>
            </view>
        </view>
        <area-select ref="areaRef" @complete="areaSelectComplete"/>
        <template v-if="diyStore.mode == ''">
            <view class="pt-[20rpx]"></view>
            <tabbar :addon="tabbarAddonName" />
        </template>
    </view>
</template>
<script setup lang="ts">
import { ref, reactive, computed } from 'vue';
import { onLoad, onShow, onPullDownRefresh } from '@dcloudio/uni-app';
import { redirect } from '@/utils/common'
import useDiyStore from '@/app/stores/diy';

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

const area = ref('')
const areaRef = ref()


const selectArea = () => {
    areaRef.value.open()
}
const areaSelectComplete = (event:any) => {
    area.value = `${event.city.name}`
}
const toDetailPage = (item:any) => {
    console.log(item)
    redirect({ url: `/app/pages/mechanism/detail` })
}
const mechanismList = [
    { name : '喜乐空间', img: '' },
    { name : '艺恩整理', img: '' },
    { name : '整理生活', img: '' },
    { name : '留存道整理', img: '' },
    { name : '安安整理', img: '' },
    { name : '莉家整理', img: '' },
    { name : 'JALO整理', img: '' },
    { name : '整理家', img: '' },
    { name : '小凡收纳', img: '' }
]
onShow(() => {
   
})
</script>
<style lang="scss" scoped>
@import '@/addon/o2o/styles/common.scss';
.mechanism-list {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    padding: 20rpx;
    &-item {
        width: 210rpx;
        .name {
            text-align: center;
            font-size: 26rpx;
            padding: 10rpx 0;
        }
        .img {
            border: 1rpx solid #e2dbdb;
        }
    }
}
.all-city {
    width: 90%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #fff;
    margin: 20rpx auto;
    border-radius: 10rpx;
    padding: 10rpx 0;
    border: 1rpx solid #e2dbdb;
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
        .img-list {
            padding: 0 40rpx;
            display: flex;
            justify-content: space-between;
            align-items: center;
            flex-wrap: wrap;
        }
        .comment {
            display: flex;
            align-items: center;
            font-size: 24rpx;
            padding: 10rpx 40rpx;
        }
    }
}
</style>