<template>
    <view>
        <view>
        <view style="display: flex;align-items: center;padding: 20rpx;">
            <view style="padding-right: 20rpx; display: flex;align-items: center;" @click="selectArea" >
                <u-icon name="map-fill" color="rgb(21, 193, 118)" /> <text style="margin: 0 15rpx;">{{ area || '北京' }}</text> <u-icon name="arrow-down-fill" />
            </view>
            <u-input
                shape="circle"
                placeholder="请输入技师姓名"
                prefixIcon="search"
                prefixIconStyle="font-size: 45rpx;color: #909399"
                placeholderStyle="font-size: 28rpx;"
            ></u-input>
            <view style="padding: 0 20rpx; display: flex;align-items: center;">
                <u-button shape="circle" color="rgb(21, 193, 118)" type="primary">搜索</u-button>
            </view>
          </view>
        </view>
        <view class="pb-3 pt-1 flex items-center justify-between px-[24rpx]">
				<text :class="['text-sm']">推荐收纳师</text>
				<view class="flex items-center text-color">
					<text class="text-sm mr-[4rpx]">距离优先</text>
					<!-- <text class="text-xs iconfont iconjiantoushang font-bold"></text> -->
					<text class="text-xs iconfont iconxialajiantouxiao"></text>
				</view>
				<view class="flex items-center">
					<text class="text-sm mr-[4rpx]">性别</text>
					<!-- <text class="text-xs iconfont iconjiantoushang font-bold"></text> -->
					<text class="text-xs iconfont iconxialajiantouxiao"></text>
				</view>
				<view class="flex items-center">
					<text class="text-sm mr-[2rpx]">服务项目</text>
                    <text class="text-xs iconfont iconxialajiantouxiao"></text>
					<text class="iconfont iconshaixuan"></text>
				</view>
			</view>
        <mescroll-body ref="mescrollRef" @init="mescrollInit" @down="downCallback" @up="getTechnicianListFn">
			<block v-for="(item,index) in technicianList" :key="index">
				<view class="bg-[#fff] mx-3 mt-3 flex items-center p-3 rounded list-item">
                    <view class="data-header ">
                        <view class="level pink">普通</view>
                        <view class="time">最早可约：10:30</view>
                    </view>
					<view  class="flex justify-between items-center">
						<view class="w-[110rpx] h-[110rpx] flex justify-center">
							<u-avatar :src="img(item.headimg_mid)" shape="circle" size="66" v-if="item.headimg_mid"></u-avatar>
							<u-avatar src="" size="66" v-else></u-avatar>
						</view>
                        <view class="item-width">
                            <view>
                                <text class="text-[32rpx] font-bold">{{item.name}}</text>
                                <!-- <text class="text-[22rpx]">{{item.working_age}}{{ t('year') }}</text> -->
                            </view>
                            <view class="flex items-center justify-between item-detail">
                                <view class="text-[22rpx] flex items-center">
                                    <text class="iconfont iconxiangqing"></text>
                                    <text>清河健康</text>
                                    <text class="ml-[15rpx]">预约次数：{{ item.order_num }}</text>
                                </view>
                                <!-- <text class="">{{item.position_name}}</text> -->
                                <view class="appointment">
                                    <view class="position flex items-center justify-center">
                                        <u-icon name="map-fill" color="rgb(21, 193, 118)" />14km
                                    </view>
                                    <u-button size="mini" color="rgb(21, 193, 118)" @click="toLink(item.id)" type="primary">立即预约</u-button>
                                </view>
                            </view>
                            <view class="flex py-[10rpx] items-center text-[#aaaaaa] leading-[32rpx]">
                                    
                                <view class="flex">
                                    <u-rate v-model="item.score" readonly></u-rate> {{ filterScore(item.score) }}
                                 
                                    <!-- <text class="iconfont iconpinglun action"></text>
                                    <text class="text-[22rpx] ml-[5rpx]">5</text> -->
                                </view>
                                
                                <view class="flex items-center ml-[10rpx]">
                                    <u-icon name="heart-fill" color="rgb(250, 53, 52)" /> <text>{{ item.fans_count }}</text>
                                    <!-- <text class="iconfont iconxingxing"></text>
                                    <text>{{ item.fans_count }}</text> -->
                                </view>
                            </view>
                        </view>
				</view>
			</view>
			</block>
            <area-select type="city" ref="areaRef" @complete="areaSelectComplete" :area-id="queryParam.district_id"/>
			<mescroll-empty :option="{'icon': img('static/resource/images/empty.png'),'tip': t('nothingMore')}" v-if="!technicianList.length && loading"></mescroll-empty>
		</mescroll-body>
        <template v-if="diyStore.mode == ''">
            <view class="pt-[20rpx]"></view>
            <tabbar :addon="tabbarAddonName" />
        </template>
    </view>
</template>
<script setup lang="ts">
import { ref, reactive, computed } from 'vue';
import { onLoad, onShow, onPullDownRefresh } from '@dcloudio/uni-app';
import { t } from '@/locale'
import { img, redirect } from '@/utils/common';
import MescrollBody from '@/components/mescroll/mescroll-body/mescroll-body.vue';
import MescrollEmpty from '@/components/mescroll/mescroll-empty/mescroll-empty.vue';
import useMescroll from '@/components/mescroll/hooks/useMescroll.js';
import {getTechnicianList} from '@/addon/o2o/api/technician'
import { onPageScroll, onReachBottom } from '@dcloudio/uni-app';

import useDiyStore from '@/app/stores/diy';

const diyStore = useDiyStore();
const props = defineProps(['data','pullDownRefreshCount']);
const tabbarAddonName = computed(() => {
    return 'o2o'
})
const filterScore = computed(() => {
  return (score) => {
    return Number(score).toFixed(2)
  };
});

const data = computed(() => {
       if (diyStore.mode == 'decorate') {
           return diyStore;
       } else {
           return props.data;
       }
})


const { mescrollInit, downCallback, getMescroll } = useMescroll(onPageScroll, onReachBottom);
const technicianList = ref<Array<any>>([]);
const loading = ref(true);
const searchName = ref("");
const area = ref('')
const areaRef = ref()
const queryParam:any = ref({})
const getTechnicianListFn = (mescroll) => {
    loading.value = false;
    let data : object = {
        page: mescroll.num,
        limit: mescroll.size,
        name: searchName.value
    }
    getTechnicianList(data).then((res) => {
        let newArr = (res.data.data as Array<Object>);
        //设置列表数据
        if (mescroll.num == 1) {
            technicianList.value = []; //如果是第一页需手动制空列表
        }
        technicianList.value = technicianList.value.concat(newArr);
        mescroll.endSuccess(newArr.length);
        loading.value = true;
    }).catch(() => {
        loading.value = true;
        mescroll.endErr(); // 请求失败, 结束加载
    })
}
// 跳转详情页
const toLink = (id:any) => {
    redirect({ url: '/app/pages/directContract/technicianDetail',param:{id:id}})
}
// 搜索技师
const searchNameFn = () => {
    getMescroll().resetUpScroll()
}
const selectArea = () => {
    areaRef.value.open()
}
const areaSelectComplete = (event:any) => {
    area.value = `${event.city.name}`
}
onShow(() => {
   
})
</script>
<style lang="scss" scoped>
@import '@/addon/o2o/styles/common.scss';
	:deep(.u-tabbar__placeholder) {
		display: none !important;
	}
    .data-header {
        width: 100%;
        display: flex;
        justify-content: space-between;
        font-size: 24rpx;
        margin-bottom: -20rpx;
        .level {
            padding: 1rpx 10rpx;
            text-align: center;
            color: #fff;
            border-top-left-radius: 13rpx;
            border-bottom-right-radius: 13rpx;
            margin-left: -20rpx;
            &.pink {
                background: rgb(254, 88, 144);
            }
        }
        .time {
            padding: 1rpx 12rpx;
            background: rgb(255, 248, 250);
            color: rgb(21, 193, 118);
        }
        
    }
    .list-item {
        flex-wrap: wrap;
    }
    .item-width {
        width: calc(100% - 132rpx);
    }
    .item-detail {
        width: 100%;
        height: 40rpx;
    }
    .position {
        color: rgb(21, 193, 118);
    }
    .iconxingxing {
        &.action {
            color: rgb(21, 193, 118);
        }
    }
    .appointment {
        width: 120rpx;
        // font-size: 24rpx;
    }
    :deep(::marker) {
        color: #fff;
        display: none;
    }
</style>