<template>
	<view class="bg-[#f8f8f8] min-h-screen overflow-hidden pb-3 box-border" v-if="Object.keys(technicianDetail).length">
		<view class="content-bg h-[480rpx] pt-3">
			<view class="mx-3  p-3 flex items-center">
				<view class="headimg">
					<u-avatar size="61" :src="img(technicianDetail.headimg)" v-if="technicianDetail.headimg"  class="headimg"></u-avatar>
					<u-avatar size="61" src="" v-else  class="headimg"></u-avatar>
				</view>
				<view class="header-right">
                    <view>
                        <view class="flex items-center pl-20 header-right-item">
                            <text class="name">{{ technicianDetail.name }}</text>
                            <view class="follow">关注</view> 
                        </view>
                        <view class="flex items-center pl-20 header-right-item">
                            <!-- <u-icon color="rgb(246, 199, 96)" name="checkmark-circle-fill"></u-icon> -->
                            <u-image class="header-right-item-img" :show-loading="true" src="data:image/png;base64,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" width="36rpx" height="36rpx"></u-image>
                            <text class="mechanism">某某机构认证收纳师</text>
                        </view>
                        <view class="flex items-center pl-20 header-right-item">
                            <u-image class="header-right-item-img" :show-loading="true" src="data:image/png;base64,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" width="36rpx" height="36rpx"></u-image>
                            <text class="realName">已实名认证</text>
                        </view>
                    </view>
                    <view class="header-right-icon">
                        <view class="share">
                            <u-icon name="share-square" color="rgba(255, 255, 255, 0.71)" size="20"></u-icon>
                            <view>分享</view>
                        </view>
                        <u-icon name="grid" color="rgba(255, 255, 255, 0.71)" size="35"></u-icon>
                    </view>
				</view>
			</view>
			<view class="mt-[30rpx] mx-3  p-3 rounded-lg ">
				<u-row justify="space-between">
					<u-col span="3" class="col-r-border">
						<view class="text-[28rpx] text-center">79</view>
						<view class="text-[24rpx] text-center mt-[10rpx]">收藏</view>
					</u-col>
					<u-col span="3" class="col-r-border">
						<view class="text-[28rpx] text-center">32</view>
						<view class="text-[24rpx] text-center mt-[10rpx]">关注</view>
					</u-col>
					<u-col span="3" class="col-r-border">
						<view class="text-[28rpx] text-center">260</view>
						<view class="text-[24rpx] text-center mt-[10rpx]">粉丝</view>
					</u-col>
					<u-col span="3">
						<view class="text-[28rpx] text-center">269</view>
						<view class="text-[24rpx] text-center mt-[10rpx]">获赞</view>
					</u-col>
				</u-row>
			</view>
            <view class="introduction">
                <text>中国传媒大学 大三三大法宝沙克设计的发货很快就...</text> 展开
                <view class="more">
                    <u-icon name="arrow-down" color="#fff" size="24rpx"></u-icon>
                </view>
               
            </view>
		</view>
        <view>
            <u-tabs lineColor="rgba(21, 193, 118, 1)" :current="current" :list="tabsList"
            @change="onChange"
                :activeStyle="{
                    color: 'rgba(21, 193, 118, 1)',
                    fontWeight: 'bold',
                    transform: 'scale(1.05)'
                }">
            </u-tabs>
        </view>
        <view class="px-[16rpx]">
            <view v-if="current==0">
                <view :class="['w-[332rpx] bg-[#fff] box-border rounded-[12rpx] overflow-hidden',{'mt-[24rpx]': index > 1}]" :style="{float: index%2?'right':'left'}" v-for="(item,index) in technicianDetail.goods" :key="index" @click="redirect({ url: '/app/pages/detail/dynamic',param:{}})">
                    <!-- <u--image 
                        width="332rpx"
                        height=""
                        :src="item.cover_img"
                        mode="widthFix">
                        <template #error>
                            <u-icon name="photo" color="#999" size="30"></u-icon>
                        </template>
                    </u--image> -->
                    <!-- <image src="" mode="heightFix"></image> -->
                    <view class="px-[16rpx] mt-[18rpx] h-[80rpx] leading-[40rpx] text-[36rpx] multi-hidden">
                        北京欢迎你
                    </view>
                    <view class="px-[16rpx] pb-[20rpx] flex items-center mt-[12rpx]" >
                        <u-avatar size="50rpx" ></u-avatar> <text style="margin-left: 12rpx;">zhangMs</text>
                    </view>
                    <view class="px-[16rpx] pb-[20rpx] flex justify-between items-end mt-[12rpx]" >
                        <!-- var(--price-text-color) -->
                        <!-- "liked": false 当前登录用户是否点赞了,true和false分别代表有点赞和没点赞  "like_count": 1,//点赞数 -->
                        <text class="text-[22rpx] text-[#888] leading-[31rpx]">01-21 03:28(北京)</text>
                        <view class="text-[22rpx] text-[#888] leading-[31rpx]" style="display: flex; align-items: center;flex: 1;justify-content: flex-end;"><u-icon name="eye" />  1 <u-icon name="chat" /> 2</view>
                    </view>
                </view>
            </view>
            <view v-else-if="current==1" class="pt-[20rpx]" style="width: 100%;">
                <view :class="['bg-[#fff] box-border rounded-[12rpx] overflow-hidden']" @click="redirect({url: `/app/pages/detail/case`})">
                    <u-image 
                        width="100%"
                        height="200rpx"
                        src=""
                        mode="widthFix">
                        <template #error>
                            <u-icon name="photo" color="#999" size="30"></u-icon>
                        </template>
                    </u-image>
                    <view class="flex justify-between items-center">
                        <view class="px-[16rpx] pb-[20rpx] flex items-center mt-[12rpx]" >
                            <u-avatar size="50rpx" src="item.member.headimg"></u-avatar> 
                            <text style="margin:0 12rpx;">特拉法尔 </text>
                            <view class="text-[22rpx] text-[#888]">2个小时前</view> 
                            <view style="margin-left: 12rpx;" class="text-[22rpx] text-[#888]">北京</view>
                        </view>
                        <view class="px-[16rpx] pb-[20rpx] flex justify-between items-end mt-[12rpx]" >
                            <!-- var(--price-text-color) -->
                            <!-- "liked": false 当前登录用户是否点赞了,true和false分别代表有点赞和没点赞  "like_count": 1,//点赞数 -->
                            <text class="text-[22rpx] text-[#888] leading-[31rpx]"></text>
                            <view class="text-[22rpx] text-[#888] leading-[31rpx]" style="display: flex; align-items: center;flex: 1;justify-content: flex-end;">
                                <u-icon name="eye" />  1 
                                <u-icon name="heart" /> 2 
                                <u-icon name="chat" /> 3
                            </view>
                        </view>
                    </view>
                    
                    <view class="py-[16rpx] text-[24rpx]" style="color: rgb(145, 144, 144);">
                            无论我们处于人生那个阶段，无论我们是租的房子还是买
                            的房子，的会尽快发货的十六分的法律角度思考v或多方，
                            爱好就是打开了好地方v的话就是点击开始v的接口v看VS
                        </view>
                </view>
            </view>
            <view v-else-if="current==2" class="pt-[20rpx]" style="width: 100%;">
                <view class="bg-white flex px-[20rpx] py-[20rpx]  mx-[16rpx] border-0 border-solid border-[#F0F0F0] rounded-[12rpx] box-border">
                    <view style="display: flex;align-items: center;">
                        <u-avatar :size="50">
                        </u-avatar>
                        
                        <view style="margin-left: 15rpx;" class="w-[380rpx]">
                            <view style="color: rgb(108, 108, 108); font-size: 34rpx;overflow: hidden;white-space: nowrap; text-overflow: ellipsis;font-weight: bold;">一只小可爱</view>
                            <view style="display: flex;"><text>请问是哪个品牌的呀？</text> </view>
                        </view>
                    </view>
                    <view style="color: rgb(108, 108, 108); font-size: 24rpx;">
                        5小时前
                    </view>
                </view>
            </view>
            <view v-else-if="current==3" class="pt-[20rpx]" style="width: 100%;">
                <view class="bg-white flex px-[20rpx] py-[20rpx]  mx-[16rpx] border-0 border-solid border-[#F0F0F0] rounded-[12rpx] box-border" :class="{ 'mt-[16rpx]': index }" v-for="(item,index) in technicianDetail.goods" :key="index">
                    <u-image  width="200rpx" height="200rpx" radius="10rpx" class="mr-[14rpx]"
                    :src="item.goods_cover"  mode="aspectFill">
                        <template #error>
                            <u-icon name="photo" color="#999" size="80"></u-icon>
                        </template>
                    </u-image>
                    <view class="flex flex-col flex-1 justify-between">
                        <view style="display: flex;">
                            <view class="w-[240rpx] leading-[40rpx] multi-hidden text-[#303133] text-[30rpx]">服务{{ index+1 }}</view>
                            <view style="font-size: 24rpx;text-align: right;margin-left: auto;">超过100人预约</view>
                        </view>
                        <view style="color: rgb(153, 153, 153);font-size: 24rpx;">
                            服务{{ index+1 }}
                        </view>
                        <view class="flex items-center mt-2 text-[#F55246] text-xs">
                            <text class="text-[22rpx] text-[#888]" style="text-decoration-line: line-through;">￥100</text>
                        </view>
                            <view class="flex items-center mt-auto justify-between">
                                <view class="text-[var(--price-text-color)]">
                                    <text class="text-[28rpx] price-font">￥</text>
                                    <text class="text-[28rpx] price-font">200</text>
                                    <text style="color: rgb(153, 153, 153); font-size: 24rpx;">小时/人</text>
                                </view>
                                <button style="background-color: rgba(21, 193, 118, 1);"  @click="appointment(item)" class="text-[#fff] self-end rounded-3xl text-[26rpx] min-w-[110rpx] h-[44rpx] leading-[44rpx] mx-0 mt-auto">预约</button>
                            </view>
                    </view>
                </view>
            </view>
        </view>
        <u-popup :show="showPayModal" :round="10" mode="bottom" @close="showPayModal = false">
            <view class="showPayModal">
                <view class="title">确定订单</view>
                <view class="area" @click="selectArea">
                    <view class="area-item">
                        <text class="area-text">{{ area }}</text>
                        <view class="tag green">
                            父母家
                        </view>
                        <view class="tag yellow">
                            默认
                        </view>
                    </view>
                    <u-icon name="arrow-right" />
                </view>
                <view class="user">
                    <view class="name">牛先生</view>
                    <view class="iphone">13800138088</view>
                </view>
                <view class="link">
                    <view class="link-item left">
                        预约时间
                    </view>
                    <view class="link-item right" @click="handleTime">
                        <text class="link-time">{{ serviceTime }}</text>
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
                        订单备注:
                        <view class="link-textarea">
                            <textarea cols="10" rows="3" placeholder="请输入订单备注"
                                    placeholder-class="text-sm"></textarea>
                        </view>
                        
                    </view>
                    <view class="link-item right">
                        
                    </view>
                </view>
                <view class="pay">
                    <view class="pay-title">支付方式: </view>
                    <view class="radio">
                        <view class="radio-item">
                            <view class="flex">
                                <u-icon size="20" name="data:image/png;base64,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" />
                                <view class="radio-name">微信</view>
                            </view>
                            <view><u-radio></u-radio></view>
                        </view>
                        <view class="radio-item">
                            <view class="flex">
                                <u-icon size="20" name="data:image/png;base64,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" />
                                <view class="radio-name">支付宝</view>
                            </view>
                            <view><u-radio></u-radio></view>
                        </view>
                    </view>
                    <view class="order-tip">下单后，系统将自动发短信提醒收纳师接单</view>
                    <view class="pay-content">
                        <view class="pay-content-left">
                            <view class="pay-content-detail">全屋收纳 单价：198/1小时/人*2人*数量3  合计 ：1188.0 </view>
                            <view class="price">
                                待支付： <view style="color: rgb(249, 112, 112)">￥1188.00</view>
                            </view>
                        </view>
                        <view class="pay-content-right">
                            <u-button shape="circle" color="rgb(21, 193, 118)">立即支付</u-button>
                        </view>
                    </view>
                </view>
                
            </view>
        </u-popup>
        <area-select ref="areaRef" @complete="areaSelectComplete" :area-id="detail.district_id"/>
        <ns-select-time ref="selectTime"  :rules="service_time" :isQuantum="true"  @change="getTime"  @getStamp="getStamp" v-if="Object.keys(service_time).length"></ns-select-time>
        <u-loading-page bg-color="rgb(248,248,248)" :loading="loading" fontSize="16" color="#333"></u-loading-page>
        <template v-if="diyStore.mode == ''">
            <view class="pt-[20rpx]"></view>
            <tabbar :addon="tabbarAddonName" />
        </template>
    </view>

</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { t } from '@/locale'
import { img, redirect } from '@/utils/common';
import { getTechnicianDetail } from '@/addon/o2o/api/technician'
import { onLoad, onShow } from '@dcloudio/uni-app'
import nsSelectTime from '@/app/components/ns-select-time'
import { getReserveConfig } from '@/app/api/release'


import useDiyStore from '@/app/stores/diy';

const diyStore = useDiyStore();
const props = defineProps(['data','pullDownRefreshCount']);
const tabbarAddonName = computed(() => {
    return 'o2o'
})

let service_time = ref({})//获取配置时间
const serviceTime = ref('选择时间')
const areaRef = ref()
const detail:any = ref({})
const area = ref('省市区')
let loading = ref<boolean>(true);
const showPayModal = ref(false)
let technicianDetail = ref({})
let id = 0
const current = ref<number>(3)
onLoad((option: any) => {
	id = option.id || 0
	getTechnicianDetailFn()
    getReserveConfigFn()
})
const tabsList = ref([
    { name: '动态' },
	{ name: '案例' },
	{ name: '评价' },
    { name: '服务' }
])
// 技师详情
const getTechnicianDetailFn = () => {
	loading.value = true
	getTechnicianDetail(id).then(res => {
		technicianDetail.value = res.data
		loading.value = false
	}).catch(() => {
		loading.value = false
	})
}
// 联系技师
const callPhoto = (tel:any) => {
	uni.makePhoneCall({
		phoneNumber: tel,
	});
}
const onChange = ({index}:{index:number}) => {
	current.value = index
}
const appointment = (item:any) => {
    showPayModal.value = true
}
// 跳转商品详情
const toLink = (num:any) => {
	redirect({url:'/addon/o2o/pages/goods/detail',param:{goods_id:num}})
}
const areaSelectComplete = (event:any) => {
    detail.value.province_id = event.province.id || 0
    detail.value.city_id = event.city.id || 0
    detail.value.district_id = event.district.id || 0
    area.value = `${event.province.name || ''}${event.city.name || ''}${event.district.name || ''}`
}
// 时间(月日时间段)
const getTime = (e:any)=> {
    // console.log(e)
    serviceTime.value = e;
}
// 时间(年-月-日)
const getStamp = (e:any) =>{
    const time = serviceTime.value.split(' ')?.[1] || ''
    const start = e + ` ${time.split('-')?.[0]}`
    const end = e + ` ${time.split('-')?.[1]}`
    
    detail.value.start_time = new Date(start).getTime() /1000
    detail.value.end_time = new Date(end).getTime() /1000
}
const selectArea = () => {
    areaRef.value.open()
}
let selectTime:any = ref(null)
const handleTime = () =>{
    selectTime.value.show = true
}
const getReserveConfigFn = ()=>{
    getReserveConfig().then((res:any) =>{
        service_time.value = res.data
    })
}
</script>

<style lang="scss" scoped>


.bg-linear {
	background: linear-gradient(360deg, #F8F8F8 0%, $u-primary 100%);
}
.content-bg {
    background: linear-gradient(180.00deg, rgba(21, 193, 118, 1),rgba(21, 193, 118, .5) 100%);
    // background: rgba(0, 0, 0, .9);
    color: #fff;
}
.col-r-border {
    border-right: 1rpx solid #fff;;
}
.follow {
    width: auto !important;
    padding: 1rpx 20rpx;
    color: rgb(253, 10, 7);
    font-size: 24rpx;
    display: inline-block;
    background: rgb(245, 245, 247);
    border-radius: 25rpx;
    font-size: 20rpx;
}
.header-right{
    width: 100%;
    &-item {
        margin-bottom: 15rpx;
        &-img {
            margin-right: 10rpx;
        }
    }
}
.headimg {
    width: 122rpx;
    height: 122rpx;
}
.name {
    font-weight: bold;
    margin: 0 30rpx 0 0;
}
.pl-20 {
    padding-left: 20rpx;
}
.mechanism {
    padding-left: 20rpx;
    font-size: 20rpx;
    border-radius: 25rpx;
    padding: 1rpx 10rpx;
    color: rgb(142, 93, 25);
    background: linear-gradient(90.00deg, rgb(246, 199, 96),rgb(255, 255, 255) 100%);
}
.realName {
    font-size: 20rpx;
    color: rgb(255, 253, 253);
    border-radius: 25rpx;
    padding: 0 10rpx;
    background: rgba(255, 255, 255, 0.37);
}
.header-right {
    display: flex;
    justify-content: space-between;
    .share {
        position: absolute;
        right: 20rpx;
        top: 20rpx;
        font-size: 20rpx;
    }
    &-icon {
        margin-top: 80rpx;
    }
}
.introduction {
    text-align: center;
    font-size: 22rpx;
    .more {
        display: inline-block;
    }
}
</style>