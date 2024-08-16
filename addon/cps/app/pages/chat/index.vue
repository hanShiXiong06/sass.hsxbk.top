<template>
    <view class="chat w-full h-screen bg-page">
        <view class="chat-content">
            <view class="chat-content-item">
                <view class="time">7:31</view>
                <view class="chat-box my">
                    <view class="chat-text">您好，请问包邮吗？</view>
                    <u-avatar :src="img(info?.headimg)" size="50" leftIcon="none"></u-avatar>
                </view>
            </view>
            <view class="chat-content-item">
                <view class="time">7:32</view>
                <view class="chat-box">
                    <u-avatar src="" size="50" leftIcon="none"></u-avatar>
                    <view class="chat-text">不好意思，不包邮的哟。
                </view>
            </view>
            <view class="chat-content-item">
                <view class="time">7:33</view>
                <view class="chat-box my">
                    <view class="chat-text">
                        您好，请问有凭证吗？
                    </view>
                    <u-avatar :src="img(info?.headimg)" size="50" leftIcon="none"></u-avatar>
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
            <view class="upload">
                <view class="upload-item" style="margin-left:30rpx">
                    <u-upload
                        :fileList="imgListPreview"
                        @afterRead="afterRead"
                        @delete="deletePic"
                        multiple
                        :maxCount="5">
                        <view class="upload-inner">
                            <text>图片</text>
                        </view>
                    </u-upload>
                </view>
                <view class="upload-item" style="margin-left:20rpx">
                    <u-upload
                        :fileList="videoListPreview"
                        @afterRead="afterRead"
                        @delete="deleteVideo"
                        multiple
                        accept="video"
                        :maxCount="5">
                        <view class="upload-inner">
                            <text>视频</text>
                        </view>
                    </u-upload>
                </view>
            </view>
        </view>
    </view>
</template>
<script lang="ts" setup>
import { computed, ref, watch } from 'vue'
import { img, isWeixinBrowser, redirect, urlDeconstruction } from '@/utils/common'
import { wechatSync } from '@/app/api/system'
import useDiyStore from '@/app/stores/diy'
import useMemberStore from '@/stores/member'
import { uploadImage, uploadVideo } from '@/app/api/system'
const memberStore = useMemberStore()
const diyStore = useDiyStore();
// #ifdef H5
const { query }:any = urlDeconstruction(location.href)
if (query.code && isWeixinBrowser()) {
    wechatSync({ code: query.code }).then(res => {
        memberStore.getMemberInfo()
    })
}
const img_url = ref([])
const video_url = ref([])
const imgListPreview = computed(() => {
    return img_url.value.map(item => {
        return {url: img(item)}
    })
})

const videoListPreview = computed(() => {
    return video_url.value.map(item => {
        return {url: img(item)}
    })
})
const deletePic = (event:any)=> {
    img_url.value.splice(event.index, 1)
}
const deleteVideo = (event:any)=> {
    video_url.value.splice(event.index, 1)
}
const afterRead = (event:any) => {
    event.file.forEach((item:any) => {
        if (item.type.includes('image')) {
            uploadImage({
                filePath: item.url,
                name: 'file'
            }).then((res:any) => {
                if (voucher.value.length < 5 ) {
                    value.img_url.push(res.data.url)
                }
            }).catch(() => {
            })
        } else {
            uploadVideo({
                filePath: item.url,
                name: 'file'
            }).then((res:any) => {
                if (value.video_url.length < 5 ) {
                    value.video_url.push(res.data.url)
                }
            }).catch(() => {
            })
        }
        
        
    })
}
const info:any = computed(() => {
		// 装修模式
		if (diyStore.mode == 'decorate') {
			return {
				headimg: '',
				nickname: '昵称',
				balance: 0,
				point: 0,
				money: 0,
				member_no: 'NIU0000021'
			}
		} else {
			return memberStore.info;
		}
	})
</script>
<style lang="scss" scoped>
.chat-content {
    height: calc(100vh - 200rpx);
    overflow-y: auto;
    &-item {
        padding-top: 32rpx;
        .time {
            text-align: center;
            color: #999
        }
        .chat-box {
            display: flex;
            justify-content: flex-start;
            padding: 30rpx;
            
            .chat-text {
                background: rgb(255, 255, 255);
                margin-left: 24rpx;
                padding: 15rpx 40rpx;
                display: flex;
                justify-content: center;
                align-items: center;
                color: rgb(0, 0, 0);
                border-top-right-radius: 50rpx;
                border-top-left-radius: 50rpx;
                border-bottom-left-radius: 0;
                border-bottom-right-radius: 50rpx;
            }
            &.my {
                justify-content: flex-end;
                .chat-text {
                    background: rgb(6, 195, 145);
                    margin-right: 24rpx;
                    margin-left: 0;
                    color: rgb(255, 255, 255);
                    border-top-right-radius: 50rpx;
                    border-top-left-radius: 50rpx;
                    border-bottom-left-radius: 50rpx;
                    border-bottom-right-radius: 0;
                }
            }
        }
    }
}
.send {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 180rpx;
    box-sizing: border-box;
    flex-wrap: wrap;
    &-input {
        display: flex;
        justify-content: space-between;
        align-items: center;
        background: rgb(245, 245, 247);
        width: 100%;
        padding: 20rpx 30rpx;
        box-sizing: border-box;
    }
    .upload {
        width: 100%;
        display: flex;
        justify-content: flex-start;
        &-item {
            color: rgb(149, 149, 149);
        }
    }
}
</style>