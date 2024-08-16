<template>
	<view class="w-full h-screen bg-page">
		<view class="first-group bg-white rounded-md overflow-hidden px-[20rpx] py-[10rpx]">
			<u-cell-group :border="false">
				<u-cell title="关联订单" :is-link="true" :value="orderName"
                    @click="orderShow = true">
				</u-cell>
				<u-cell title="服务内容">
                    <template #value>
                        <input class="content" placeholder="请输入服务内容说明" v-model="formData.content"/>
                    </template>
                </u-cell>
			</u-cell-group>
		</view>
        <u-cell-group :border="false">
            <view class="tip">
                招募发布后会在抢单大厅的招募板块中显示，兼职人员将通过您个人资料中设置的联系方式联系您。
            </view>
        </u-cell-group>
        <view class="m-[30rpx] bg-white rounded-md overflow-hidden px-[20rpx] py-[10rpx]">
            <u-cell-group :border="false">
                <u-cell title="服务地区" :is-link="true" @click="selectArea" :value="area"></u-cell>
                <u-cell title="服务时间" :is-link="true" :value="serviceTime" @click="handleTime"></u-cell>
            </u-cell-group>
        </view>
        <view class="m-[30rpx] bg-white rounded-md overflow-hidden px-[20rpx] py-[10rpx]">
			<u-cell-group :border="false">
                <view class="title-text">要求描述</view>
				<textarea v-model="formData.ask" cols="30" rows="5" placeholder="可填写对招募人员的要求，如性别，年龄，擅长技能，经验，人数等要求"
                                placeholder-class="text-sm"></textarea>
            </u-cell-group>
        </view>
		<u-action-sheet :actions="recruitList" :show="orderShow" :closeOnClickOverlay="true"
            :safeAreaInsetBottom="true"
            @close="orderShow = false" @select="updateorderName">
		</u-action-sheet>
		<view class="footer">
			<div class="footer-tip">
				招募信息将在服务结束日期的零点失效
			</div>
			<u-button class="save-btn" type="primary" shape="circle" text="立即发布" color="rgb(21, 193, 118)"  @click="save" :loading="operateLoading"></u-button>
		</view>
        <ns-select-time ref="selectTime"  :rules="service_time" :isQuantum="true"  @change="getTime"  @getStamp="getStamp" v-if="Object.keys(service_time).length"></ns-select-time>
        <area-select ref="areaRef" @complete="areaSelectComplete" :area-id="formData.district_id"/>
    </view>
</template>

<script setup lang="ts">
	import { ref } from 'vue'
	import { onLoad } from '@dcloudio/uni-app';
	import { getRecruitList, recruitAdd, getReserveConfig } from '@/app/api/release'
    import nsSelectTime from '@/app/components/ns-select-time'
    // import { t } from '@/locale'
    let service_time = ref({})//获取配置时间
    const formData:any = ref({})
	const orderName = ref('选择订单')
	const recruitList = ref([])
    const serviceTime = ref('选择时间')
    const area = ref('省市区')
    const areaRef = ref()

	const orderShow = ref(false)
	const operateLoading = ref(false)
    let selectTime:any = ref(null)
    const handleTime = () =>{
        selectTime.value.show = true
    }
	onLoad((option : any) => {
		getRecruitListFn()
        getReserveConfigFn()
	})

	const updateorderName = (e:any) => {
		orderName.value = e.name
		formData.value.order_id = e.value
		orderShow.value = false
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
        
        formData.value.start_time = new Date(start).getTime() /1000
        formData.value.end_time = new Date(end).getTime() /1000
    }
	const navigateBack = () => {
		uni.navigateBack({
			delta: 1
		});
	}
	const getRecruitListFn = () => {
		getRecruitList({
            // order_plat: 1
        }).then((res:any)=>{
			const data = res?.data?.data || []
			recruitList.value = data.map((item:any) => {
				return {
					name: item.content,
					value: item.id
				}
			})

		})
	}
    const getReserveConfigFn = ()=>{
        getReserveConfig().then((res:any) =>{
            service_time.value = res.data
        })
    }
    const selectArea = () => {
        areaRef.value.open()
    }
    const areaSelectComplete = (event:any) => {
        formData.value.province_id = event.province.id || 0
        formData.value.city_id = event.city.id || 0
        formData.value.district_id = event.district.id || 0
        area.value = `${event.province.name || ''}${event.city.name || ''}${event.district.name || ''}`
    }
    
	const save = () => {
		recruitAdd({
			...formData.value,
		}).then((res:any)=>{
			// console.log(res)
			navigateBack()
		})
	}
</script>

<style lang="scss" scoped>
    .content {
        text-align: right;
    }
	.title-text, textarea {
		padding: 0 40rpx
	}
    .tip {
        color: rgb(145, 144, 144);
        font-size: 24rpx;
		padding: 0 50rpx 20rpx 50rpx;
    }
	textarea {
		height: 60px;
	}
	.footer {
		position: absolute;
		width: 100%;
		left: 0;
		bottom: 20rpx;
		padding: 0 20rpx;
		box-sizing: border-box;
		&-tip {
			font-size: 24rpx;
			text-align: center;
		}
		.save-btn {
			// background: rgb(108, 217, 153);
			width: 100%;
			color: #fff;
		}
	}
	.bg-page {
		padding-top: 30rpx;
		box-sizing: border-box;
	}
	.first-group {
		margin: 0 30rpx 30rpx 30rpx;
	}
</style>