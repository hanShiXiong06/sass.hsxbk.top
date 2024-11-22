import{d as t,r as e,o as a,c as r,w as l,b as o,u as s,y as d,z as i,f as n,n as p,a as c,B as u,g as x,h as m,i as f,D as _,c2 as g,C as v,E as b,F as h}from"./index-7bf68536.js";import{_ as y}from"./u--image.b3bf1d5c.js";import{_ as w}from"./u-tabbar.d98653fa.js";import{_ as j}from"./pay.d2e850e8.js";import{c as k,d as F}from"./order.bb3e4e36.js";import{_ as C}from"./_plugin-vue_export-helper.1b428a4d.js";import"./u-image.e46f68ef.js";import"./u-icon.0c1c54c7.js";import"./u-transition.cdf87992.js";import"./u-safe-bottom.908eeae4.js";import"./u-popup.be4bfacd.js";import"./pay.2db06871.js";const S=C(t({__name:"payment",setup(t){const C=e({order_key:"",member_remark:"",giftcard_data:{giftcard_id:"",num:1,balance:"",material_id:""}}),S=e(null),V=e(),N=e(!1);uni.getStorageSync("giftCardOrderCreateData")&&Object.assign(C.value,uni.getStorageSync("giftCardOrderCreateData"));k(C.value).then((({data:t})=>{S.value=t,C.value.order_key=t.order_key})).catch();let I=0;const M=()=>{N.value||(N.value=!0,C.value.member_remark.length>200&&(C.value.member_remark=C.value.member_remark.substr(0,200)),F(C.value).then((({data:t})=>{var e;I=t.order_id,0==S.value.basic.order_money?c({url:"/addon/shop_giftcard/pages/order_detail",param:{order_id:I},mode:"redirectTo"}):null==(e=V.value)||e.open(t.trade_type,t.order_id,`/addon/shop_giftcard/pages/order_detail?order_id=${t.order_id}`)})).catch((()=>{N.value=!1})))},O=()=>{c({url:"/addon/shop_giftcard/pages/order_detail",param:{order_id:I},mode:"redirectTo"})};return(t,e)=>{const c=u,k=x(m("u--image"),y),F=f,N=_,I=g,z=v,B=x(m("u-tabbar"),w),D=x(m("pay"),j);return a(),r(F,{style:p(t.themeColor())},{default:l((()=>[S.value?(a(),r(F,{key:0,class:"bg-[var(--page-bg-color)] min-h-[100vh]"},{default:l((()=>[o(F,{class:"pt-[var(--top-m)] sidebar-margin payment-bottom"},{default:l((()=>[o(F,{class:"mb-[var(--top-m)] card-template"},{default:l((()=>[o(F,{class:"flex"},{default:l((()=>[o(k,{radius:"var(--goods-rounded-big)",width:"280rpx",height:"200rpx",src:s(b)(S.value.goods_data.card_cover),model:"aspectFill"},{error:l((()=>["balance"==S.value.goods_data.card_right_type?(a(),r(c,{key:0,class:"w-[280rpx] h-[200rpx] rounded-[var(--goods-rounded-big)] overflow-hidden",src:s(b)("addon/shop_giftcard/diy/index/value_card.jpg"),mode:"aspectFill"},null,8,["src"])):(a(),r(c,{key:1,class:"w-[280rpx] h-[200rpx] rounded-[var(--goods-rounded-big)] overflow-hidden",src:s(b)("addon/shop_giftcard/diy/index/redemption_card.jpg"),mode:"aspectFill"},null,8,["src"]))])),_:1},8,["src"]),o(F,{class:"flex flex-1 w-0 flex-col justify-between ml-[20rpx] py-[6rpx]"},{default:l((()=>[o(F,{class:"line-normal"},{default:l((()=>[o(F,{class:"truncate text-[#303133] text-[28rpx] leading-[32rpx]"},{default:l((()=>[d(i(S.value.goods_data.card_name),1)])),_:1}),"balance"==S.value.goods_data.card_right_type?(a(),r(F,{key:0,class:"mt-[20rpx] flex items-center justify-between"},{default:l((()=>[o(N,{class:"truncate text-[24rpx] text-[var(--text-color-light9)] leading-[28rpx]"},{default:l((()=>[d(i(S.value.goods_data.balance)+i(s(h)("yuanStoredValueCard")),1)])),_:1})])),_:1})):n("v-if",!0)])),_:1}),o(F,{class:"flex justify-between items-baseline"},{default:l((()=>[o(F,{class:"text-[var(--price-text-color)] flex items-baseline price-font"},{default:l((()=>[o(N,{class:"text-[24rpx] font-500 mr-[4rpx]"},{default:l((()=>[d("￥")])),_:1}),o(N,{class:"text-[40rpx] font-500"},{default:l((()=>[d(i(parseFloat(S.value.goods_data.card_price).toFixed(2).split(".")[0]),1)])),_:1}),o(N,{class:"text-[24rpx] font-500"},{default:l((()=>[d("."+i(parseFloat(S.value.goods_data.card_price).toFixed(2).split(".")[1]),1)])),_:1})])),_:1}),o(F,{class:"font-400 text-[28rpx] text-[var(--text-color-light9)]"},{default:l((()=>[o(N,null,{default:l((()=>[d("x")])),_:1}),o(N,null,{default:l((()=>[d(i(S.value.goods_data.num),1)])),_:1})])),_:1})])),_:1})])),_:1})])),_:1})])),_:1}),n(" 购买数量 "),n(' <view class="card-template mb-[var(--top-m)]">\r\n\t\t\t\t    <view class="card-template-item justify-between">\r\n\t\t\t\t        <view class="text-[28rpx] w-[150rpx] leading-[30rpx] text-[#303133]">购买数量</view>\r\n\t\t\t\t        <u-number-box :min="1" :max="stock" integer :step="1" input-width="68rpx" v-model="buyNum" input-height="52rpx">\r\n\t\t\t\t        \t<template #minus>\r\n\t\t\t\t        \t\t<text class="text-[30rpx] nc-iconfont nc-icon-jianV6xx font-500" :class="{ \'!text-[var(--text-color-light9)]\': buyNum <= 1 }"></text>\r\n\t\t\t\t        \t</template>\r\n\t\t\t\t        \t<template #input>\r\n\t\t\t\t        \t\t<input  class="text-[#303133] text-[28rpx] mx-[10rpx] w-[80rpx] h-[44rpx] bg-[var(--temp-bg)] leading-[44rpx] text-center rounded-[6rpx]" type="number" @input="goodsSkuInputFn" @blur="goodsSkuBlurFn" v-model="buyNum"  />\r\n\t\t\t\t        \t</template>\r\n\t\t\t\t        \t<template #plus>\r\n\t\t\t\t        \t\t<text class="text-[30rpx] nc-iconfont nc-icon-jiahaoV6xx font-500" :class="{ \'!text-[var(--text-color-light9)]\': buyNum >= stock }"></text>\r\n\t\t\t\t        \t</template>\r\n\t\t\t\t        </u-number-box>\r\n\t\t\t\t    </view>\r\n\t\t\t\t</view> '),n(" 订单留言 "),o(F,{class:"card-template"},{default:l((()=>[o(F,{class:"title"},{default:l((()=>[d(i(s(h)("orderMessage")),1)])),_:1}),o(I,{modelValue:C.value.member_remark,"onUpdate:modelValue":e[0]||(e[0]=t=>C.value.member_remark=t),modelModifiers:{trim:!0},class:"text-[#333] leading-[1.3] w-[100%] h-[140rpx] text-[28rpx]",placeholder:s(h)("remarkPlaceholder"),"placeholder-class":"text-[var(--text-color-light9)] text-[28rpx]",maxlength:"200"},null,8,["modelValue","placeholder"])])),_:1})])),_:1}),o(B,{fixed:!0,placeholder:!0,safeAreaInsetBottom:!0,zIndex:"10"},{default:l((()=>[o(F,{class:"flex-1 flex items-center justify-between pl-[30rpx] pr-[20rpx]"},{default:l((()=>[o(F,{class:"flex items-baseline"},{default:l((()=>[o(N,{class:"text-[26rpx] text-[#333] leading-[32rpx]"},{default:l((()=>[d(i(s(h)("total"))+"：",1)])),_:1}),o(F,{class:"inline-block"},{default:l((()=>[o(N,{class:"text-[26rpx] font-500 text-[var(--price-text-color)] price-font leading-[30rpx]"},{default:l((()=>[d("￥")])),_:1}),o(N,{class:"text-[44rpx] font-500 text-[var(--price-text-color)] price-font leading-[46rpx]"},{default:l((()=>[d(i(parseFloat(S.value.basic.order_money).toFixed(2).split(".")[0]),1)])),_:1}),o(N,{class:"text-[26rpx] font-500 text-[var(--price-text-color)] price-font leading-[46rpx]"},{default:l((()=>[d("."+i(parseFloat(S.value.basic.order_money).toFixed(2).split(".")[1]),1)])),_:1})])),_:1})])),_:1}),o(z,{class:"w-[196rpx] h-[70rpx] font-500 text-[26rpx] leading-[70rpx] !text-[#fff] m-0 rounded-full primary-btn-bg remove-border","hover-class":"none",onClick:M},{default:l((()=>[d(i(s(h)("placeOrder")),1)])),_:1})])),_:1})])),_:1}),o(D,{ref_key:"payRef",ref:V,onClose:O},null,512)])),_:1})):n("v-if",!0)])),_:1},8,["style"])}}}),[["__scopeId","data-v-24a98756"]]);export{S as default};