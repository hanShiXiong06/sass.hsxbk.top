<template>
    <view class="page">
        <view class="bg-white shadow rounded p-4">
            邮寄地址:
            <view class="flex">
                <view>{{ address }}
                </view><u-icon name="cut" size="18" @click="toCopy"></u-icon>
            </view>


        </view>
        <view class="list mt-2" v-for="item in categoryList">
            <view class="title">{{ item.category_name }}</view>
            <view class="list_box bg-white shadow rounded" v-if="item.child_list && item.child_list.length > 0">
                <view class="list_item" v-for="child in item.child_list">
                    <view>
                        <view>
                            <up-image radius="10" :show-loading="true" :src="child.image" width="40px" height="40px"
                                @click="handleClick(child.category_id)"></up-image>
                        </view>
                        <view>{{ child.category_name }}
                        </view>
                    </view>
                </view>
            </view>
            <view class="list_box bg-white shadow rounded" v-else>
                <view class="list_item ">
                    <view>暂无报价</view>
                </view>
            </view>
        </view>
    </view>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { getCategoryTree } from '@/addon/phone_shop_price/api/recycle'
import { onLoad } from '@dcloudio/uni-app'
let categoryList = ref('');
let flattenCategoryList = ref([])
onLoad(() => {
    getCategoryTree().then((res) => {
        categoryList.value = res.data
        // 开始遍历
        flattenCategoryList.value = flattenArray(res.data);
    })
})
const handleClick = (id: number) => {
    imgListPreview(flattenCategoryList.value, id);


}



function flattenArray(data) {
    let result = [];
    data.forEach(item => {
        // 将每个一级分类加入结果
        if (item.images) result.push(item);
        // 如果有子分类，递归处理并加入结果
        if (item.child_list && item.child_list.length > 0) {
            result = result.concat(flattenArray(item.child_list));
        }
    });
    return result;
}




//预览图片
const imgListPreview = (item: any, index: any) => {
    if (Array.isArray(item)) {
        if (!item.length) return false;
        // 通过 category_id 找到目标对象
        const i = item.findIndex(v => v.category_id === index);

        // 检查是否找到了匹配的对象
        if (i === -1 || !item[i].images) return false;

        const urlList = Array.isArray(item[i].images) ? item[i].images : [item[i].images];  // 确保 images 是数组
        uni.previewImage({
            indicator: "number",
            current: 0,  // 在这里选择当前图片的索引
            loop: true,
            urls: urlList
        });
    } else {
        // 处理单个对象的情况
        if (item === '') return false;

        const urlList = [img(item)];  // 处理单个对象时，images 字段的获取
        uni.previewImage({
            indicator: "number",
            loop: true,
            urls: urlList
        });
    }
}
const address = '河北省石家庄市新华区太和电子城6楼天泰通讯 周小湄 15533672656'
const toCopy = () => {
    // 复制商品名称 及价格

    uni.setClipboardData({
        data: address,
        success() {
            uni.showToast({
                title: '复制成功',
                icon: 'none'
            })
        }
    })
}

</script>
<style lang="scss" scoped>
.page {
    height: 100vh;
    background-color: #efefef;
    padding: 10px;
}

.list_item {}

.list {
    display: flex;
    flex-direction: column;

    margin-bottom: 20rpx;

    .title {
        text-align: center;
        font-weight: 600;
    }
}

.list_box {

    display: flex;
    // 一行4个
    flex-wrap: wrap;
    justify-content: space-between;
    border-radius: 10rpx;
    padding: 10rpx;

    .list_item {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 25%;
        justify-content: center;
        font-size: 24rpx;
        margin-top: 5rpx;

        >view {
            display: flex;
            flex-direction: column;
            align-items: center;
            margin-top: 5rpx;
        }
    }
}
</style>
