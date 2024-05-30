<template>
  <el-dialog v-model="showDialog" title="订单详情" width="50%" class="diy-dialog-wrap" :destroy-on-close="true">
    <el-card v-if="detailData">
      <div>
        <div class="flex items-center mt-4">
          <div
            class="mr-[28px] p-4 pl-12 pr-12 rounded-md statistic-card bg-gradient-to-r from-indigo-50 from-10% via-sky-50 via-10% to-emerald-50 to-10%"
            v-if="startaddress">
            <div class="font-bold text-slate-400">订单金额</div>
            <div class="text-2xl">{{ detailData.order_money }}</div>
          </div>
          <div
            class="mr-[28px] p-4 pl-12 pr-12 rounded-md statistic-card bg-gradient-to-r from-indigo-50 from-10% via-sky-50 via-10% to-emerald-50 to-10%"
            v-if="startaddress">
            <div class="font-bold text-slate-400">优惠金额</div>
            <div class="text-2xl">{{ detailData.order_discount_money }}</div>
          </div>
        </div>
        <div class="flex mt-4">
          <div class="mr-4">
            <span>订单号：</span>
            <span class="font-bold"> {{ detailData.order_id }} </span>
          </div>
          <div class="mr-4">
            <span>运单号：</span>
            <span class="font-bold">
              {{ detailData.orderInfo.delivery_id }}
            </span>
          </div>
          <div class="mr-2">
            <span>创建时间：</span>
            <span class=""> {{ detailData.create_time }} </span>
          </div>
        </div>
        <div class="flex mt-6">
          <span>用户：</span>
          <span class="font-bold">{{ detailData.memberInfo.nickname }} </span>
          <el-tag class="ml-2 mr-12">{{ detailData.order_from }}</el-tag>
          <span class="bg-cyan-50 rounded-md pl-2 pr-2 mr-4">
            {{ detailData.orderInfo.goods }}-{{
              detailData.orderInfo.weight
            }}kg-{{ detailData.orderInfo.long }}x{{
              detailData.orderInfo.width
            }}x{{ detailData.orderInfo.height }}cm
          </span>
          <div v-if="detailData.orderInfo.bj_price">
            保价：{{ detailData.orderInfo.bj_price }}
          </div>
        </div>
      </div>
      <div class="mt-4 flex">
        <div class="mr-4">支付信息</div>
        <el-tag v-if="detailData.payInfo.status_name" class="mr-4" type="info">
          {{ detailData.payInfo.status_name }}
        </el-tag>
        <el-tag v-if="detailData.payInfo.type_name" class="mr-4" type="success">
          {{ detailData.payInfo.type_name }}
        </el-tag>
        <div v-if="detailData.payInfo.pay_time">
          {{ detailData.payInfo.pay_time }}
        </div>
      </div>

      <div class="mt-4 flex items-center">
        <div class="mr-4">订单状态</div>
        <el-tag class="mr-2">
          {{ detailData.order_status_arr.name }}
        </el-tag>
        <el-tag v-if="detailData.is_send == 1"> 已发单 </el-tag>
        <el-tag type="info" v-if="detailData.is_send == 0"> 未发单 </el-tag>
        <span class="ml-4 font-bold">{{ detailData.close_reason }}</span>
      </div>

      <div class="mt-4 flex items-center" v-if="detailData.remark">
        <div class="mr-4">订单备注</div>
        <span class="ml-4 font-bold">{{ detailData.remark }}</span>
      </div>

      <div class="flex items-center mt-4">
        <div
          class="mr-[28px] p-4 rounded-md statistic-card bg-gradient-to-r from-indigo-50 from-10% via-sky-50 via-10% to-emerald-50 to-10%"
          v-if="startaddress">
          <div class="font-bold">{{ startaddress.address }}</div>
          <div>{{ startaddress.full_address }}</div>
          <div class="flex text-xs text-current">
            <div class="mr-2">{{ startaddress.name }}</div>
            <div class="text-current font-bold">{{ startaddress.mobile }}</div>
          </div>
        </div>
        <el-icon class="mr-[28px]" size="28">
          <Right />
        </el-icon>
        <div
          class="p-4 rounded-md statistic-card bg-gradient-to-r from-indigo-50 from-10% via-sky-50 via-10% to-emerald-50 to-10%"
          v-if="endaddress">
          <div class="font-bold">{{ endaddress.address }}</div>
          <div>{{ endaddress.full_address }}</div>
          <div class="flex text-xs text-current">
            <div class="mr-2">{{ endaddress.name }}</div>
            <div class="text-current font-bold">{{ endaddress.mobile }}</div>
          </div>
        </div>
      </div>
      <el-divider v-if="deliveryInfo" class="mt-4" content-position="left">轨迹跟踪</el-divider>
      <div class="mt-2">
        <div class="flex items-center mb-4">
          <el-avatar v-if="detailData && detailData.orderInfo.delivery_arry.logo"
            :src="img(detailData.orderInfo.delivery_arry.logo)" />
          <div class="ml-1 p-2">
            <div>{{ detailData.orderInfo.delivery_arry.name }}</div>
            <div class="font-bold">{{ detailData.orderInfo.delivery_id }}</div>
          </div>
          <div class="ml-8" v-if="pickInfo">
            <div class="flex">
              <div class="mr-2">揽件员:{{ pickInfo.courierName }}</div>
              <div class="">联系电话:{{ pickInfo.courierPhone }}</div>
            </div>

            <div v-if="pickInfo.pickUpCode">
              取件码:{{ pickInfo.pickUpCode }}
            </div>
          </div>
          <el-tag class="ml-8 font-bold">{{
            detailData.orderInfo.order_status_desc
              ? detailData.orderInfo.order_status_desc
              : "未取件"
          }}</el-tag>
        </div>

        <el-timeline>
          <el-timeline-item v-for="(activity, index) in deliveryInfo" :key="index" :timestamp="activity.time">
            {{ activity.desc }}
          </el-timeline-item>
        </el-timeline>
      </div>
    </el-card>
  </el-dialog>
</template>

<script lang="ts" setup>
import { ref, reactive, computed, watch } from "vue";
import { useDictionary } from "@/app/api/dict";
import type { FormInstance } from "element-plus";
import { img } from "@/utils/common";
import { getOrderInfo, getDeliveryInfo } from "@/addon/tk_jhkd/api/order";

const showDialog = ref(false);
const loading = ref(false);

const detailData = ref();
const deliveryInfo = ref();
const pickInfo = ref();
const startaddress = ref();
const endaddress = ref();
const emit = defineEmits(["complete"]);
const setDeliveryInfo = async (delivery_id) => {
  const data = await getDeliveryInfo(delivery_id);
  deliveryInfo.value = data.data;
};
const setFormData = async (row: any = null) => {
  loading.value = true;
  if (row) {
    const data = await (await getOrderInfo(row.id)).data;
    detailData.value = data;
    startaddress.value = JSON.parse(detailData.value.orderInfo.start_address);
    endaddress.value = JSON.parse(detailData.value.orderInfo.end_address);
    if (detailData.value.orderInfo.courier_context) {
      pickInfo.value = JSON.parse(detailData.value.orderInfo.courier_context);
    }
    if (detailData.value.orderInfo.delivery_id) {
      setDeliveryInfo(detailData.value.orderInfo.delivery_id);
    }
  }
  loading.value = false;
};

defineExpose({
  showDialog,
  setFormData,
});
</script>

<style lang="scss" scoped></style>
<style lang="scss">
.diy-dialog-wrap .el-form-item__label {
  height: auto !important;
}
</style>
