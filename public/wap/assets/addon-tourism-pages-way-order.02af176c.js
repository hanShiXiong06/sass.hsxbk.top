import{d as e,r as t,j as l,m as a,o as s,c as r,w as o,b as u,x as n,y as i,u as d,f as c,E as m,F as f,G as x,n as p,I as _,aK as v,a as y,Y as b,i as h,C as g,g as w,h as j,a4 as C}from"./index-905183d4.js";import{_ as k}from"./u-number-box.3b1a803a.js";import{_ as F}from"./u-parse.b0851c53.js";import{_ as V}from"./u-popup.e3f6594b.js";import{_ as S}from"./u--input.f049e512.js";import{_ as $}from"./u-form.7ae4e9da.js";import{_ as A}from"./u--form.8d42ab01.js";import{_ as E}from"./u-button.d3798ecb.js";import{_ as D}from"./pay.2560ca84.js";import{_ as B}from"./u-empty.09c683e5.js";import{_ as U}from"./u-loading-page.7aa0a449.js";import{w as z,f as N,h as I,i as K}from"./tourism.31e9949d.js";import{_ as P}from"./_plugin-vue_export-helper.1b428a4d.js";import"./u-icon.86a2aad0.js";import"./u-transition.dbaca185.js";import"./u-safe-bottom.e94b03c1.js";import"./u-input.07f64251.js";import"./u-line.9e44f7cf.js";import"./u-loading-icon.c376267d.js";import"./u-image.44c969ef.js";import"./pay.01186f9d.js";const G=P(e({__name:"order",setup(e){const P=e=>{R.value.num=e.value,q()},G=t(null),H=t(null),J=t(!0),O=t(""),R=t(uni.getStorageSync("wayCreateData")||{}),T=t(null),W=t(!1),X=t(!1),Y=t("");l((()=>{z(R.value).then((({data:e})=>{J.value=!1,T.value=e,Y.value=e.goods_info.buy_info,ee()})).catch((e=>{O.value=e.msg,J.value=!1}))}));const q=()=>{J.value=!0,N(R.value).then((({data:e})=>{T.value=e,J.value=!1})).catch((e=>{J.value=!1,_({title:e.msg,icon:"none"})}))},L=t(!1),M=()=>{if(Z()){if(L.value)return;L.value=!0;const e=uni.$u.deepClone(v(R.value));e.buyer_info=JSON.stringify(e.buyer_info),I(e).then((({data:e})=>{var t;null==(t=H.value)||t.open(e.trade_type,e.trade_id,`/addon/tourism/pages/order/detail?order_id=${e.trade_id}`),L.value=!1})).catch((e=>{L.value=!1,_({title:e.msg,icon:"none"})}))}};let Q=t("0");K().then((e=>{Q.value=e.data.is_allow_refund}));const Z=()=>{const e=R.value.buyer_info;if(uni.$u.test.isEmpty(e.name))return _({title:"请输入联系人姓名",icon:"none"}),!1;if(uni.$u.test.isEmpty(R.value.mobile))return _({title:"请输入手机号",icon:"none"}),!1;if(!/^1[3-9]\d{9}$/.test(R.value.mobile))return _({title:"请输入正确的手机号",icon:"none"}),!1;if(uni.$u.test.isEmpty(e.id_card))return _({title:"请输入身份证号",icon:"none"}),!1;return!!/^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/.test(e.id_card)||(_({title:"请输入正确的身份证号",icon:"none"}),!1)},ee=()=>{var e;R.value.buyer_info={name:"",id_card:""},R.value.mobile="",T.value.reserve_time=te(null==(e=T.value)?void 0:e.reserve_time)};a((()=>T.value?T.value.goods_info.goods_attribute.split(","):[]));const te=e=>{const t=new Date(e);return uni.$u.timeFormat(t,"yyyy-mm-dd ")+["周日","周一","周二","周三","周四","周五","周六"][t.getDay()]},le=()=>{y({url:"/addon/tourism/pages/order/list",mode:"redirectTo"})},ae=()=>{b()};return(e,t)=>{const l=h,a=g,_=w(j("u-number-box"),k),v=w(j("u-parse"),F),y=C,b=w(j("u-popup"),V),z=w(j("u--input"),S),N=w(j("u-form-item"),$),I=w(j("u--form"),A),K=w(j("u-button"),E),q=w(j("pay"),D),Z=w(j("u-empty"),B),ee=w(j("u-loading-page"),U);return s(),r(l,{style:p(e.themeColor())},{default:o((()=>[T.value?(s(),r(l,{key:0,class:"bg-[#f7f7f7] min-h-screen overflow-hidden"},{default:o((()=>[u(l,{class:"chunk-wrap pb-2 pt-4"},{default:o((()=>[u(l,{class:"font-bold"},{default:o((()=>[n(i(T.value.goods_info.goods_name),1)])),_:1}),u(l,{class:"flex justify-between items-center mt-3"},{default:o((()=>[u(l,{class:"text-xs text-[#888]"},{default:o((()=>[u(a,{class:"text-[#FA6400] text-[26rpx]"},{default:o((()=>[n("￥")])),_:1}),u(a,{class:"text-[#FA6400] text-[38rpx]"},{default:o((()=>[n(i(T.value.order_items[0].price),1)])),_:1}),n(" /人起 ")])),_:1}),u(l,{class:"text-xs"},{default:o((()=>[n("出发日期："+i(R.value.reserve_time.split("/").join("-")),1)])),_:1})])),_:1}),u(l,{class:"flex justify-between items-center mt-3"},{default:o((()=>[u(a,{class:"text-sm"},{default:o((()=>[n("选择人数")])),_:1}),u(_,{modelValue:R.value.num,"onUpdate:modelValue":t[0]||(t[0]=e=>R.value.num=e),max:T.value.goods_info.stock,onChange:P},null,8,["modelValue","max"])])),_:1}),u(l,{class:"flex items-center justify-between mt-5 bg-[#FFF1E7] py-[16rpx] px-[18rpx] rounded-md"},{default:o((()=>[u(a,{class:"text-xs text-[#E02020]"},{default:o((()=>[n(i(Number(d(Q))?"随时可退":"购买后不可退款"),1)])),_:1}),u(l,{class:"flex items-center text-[#774C33] text-xs",onClick:t[1]||(t[1]=e=>X.value=!0)},{default:o((()=>[u(a,null,{default:o((()=>[n("购买须知")])),_:1}),u(a,{class:"nc-iconfont nc-icon-youV6xx text-[26rpx]"})])),_:1})])),_:1})])),_:1}),c(" 购买须知弹窗 "),u(b,{show:X.value,onClose:t[2]||(t[2]=e=>X.value=!1),closeable:!0},{default:o((()=>[u(l,{class:"text-center py-[30rpx] font-bold leading-none"},{default:o((()=>[u(a,null,{default:o((()=>[n("购买须知")])),_:1})])),_:1}),u(l,{class:"pt-[28rpx] pb-[40rpx] px-[28rpx]"},{default:o((()=>[u(y,{class:"max-h-[60vh]","scroll-y":!0},{default:o((()=>[Y.value?(s(),r(v,{key:0,content:Y.value,tagStyle:{img:"vertical-align: top;"}},null,8,["content"])):(s(),r(a,{key:1,class:"block px-5"},{default:o((()=>[n("暂无购买须知")])),_:1}))])),_:1})])),_:1})])),_:1},8,["show"]),u(l,{class:"chunk-wrap"},{default:o((()=>[u(l,{class:"chunk-head"},{default:o((()=>[u(a,null,{default:o((()=>[n("游客信息")])),_:1}),u(l,{class:"text-xs"},{default:o((()=>[n("需填写"),u(a,{class:"text-[#FF2F11]"},{default:o((()=>[n("1")])),_:1}),n("位，用于入园身份验证")])),_:1})])),_:1}),u(l,{class:"py-2"},{default:o((()=>[u(I,{labelPosition:"left",model:R.value,ref_key:"form",ref:G,labelWidth:"90",labelStyle:{color:"#A3A3A3",fontSize:"14px"}},{default:o((()=>[u(N,{label:"联系姓名",prop:"buyer_info.name",borderBottom:""},{default:o((()=>[u(l,{class:"border-style"},{default:o((()=>[u(z,{border:"none",placeholder:"请输入联系姓名",placeholderClass:"text-sm",modelValue:R.value.buyer_info.name,"onUpdate:modelValue":t[3]||(t[3]=e=>R.value.buyer_info.name=e)},null,8,["modelValue"])])),_:1})])),_:1}),u(N,{label:"手机号",prop:"mobile",borderBottom:""},{default:o((()=>[u(l,{class:"border-style"},{default:o((()=>[u(z,{border:"none",placeholder:"请输入手机号",placeholderClass:"text-sm",modelValue:R.value.mobile,"onUpdate:modelValue":t[4]||(t[4]=e=>R.value.mobile=e)},null,8,["modelValue"])])),_:1})])),_:1}),u(N,{label:"证件类型",borderBottom:""},{default:o((()=>[u(l,{class:"border-style"},{default:o((()=>[u(a,{class:"text-sm"},{default:o((()=>[n("身份证")])),_:1})])),_:1})])),_:1}),u(N,{label:"证件号",prop:"buyer_info.id_card",borderBottom:""},{default:o((()=>[u(l,{class:"border-style !border-0"},{default:o((()=>[u(z,{border:"none",placeholder:"请输入证件号",placeholderClass:"text-sm",modelValue:R.value.buyer_info.id_card,"onUpdate:modelValue":t[5]||(t[5]=e=>R.value.buyer_info.id_card=e)},null,8,["modelValue"])])),_:1})])),_:1})])),_:1},8,["model"])])),_:1})])),_:1}),c(' <view class="chunk-wrap">\r\n                <view class="chunk-head">\r\n                    <text>支付方式</text>\r\n                </view>\r\n                <view class="flex justify-between items-center h-[80rpx]">\r\n                    <view class="flex items-center">\r\n                        <image class="w-[42rpx] h-[42rpx]" :src="img(\'addon/tourism/tourism/way/discount_coupon.png\')" mode="widthFix"></image>\r\n                        <text class="ml-1 text-xs">微信支付</text>\r\n                    </view>\r\n                    <u-radio :labelDisabled="true"></u-radio>\r\n                </view>\r\n            </view>\r\n\r\n            <view class="chunk-wrap">\r\n                <view class="chunk-head">\r\n                    <text>优惠信息</text>\r\n                </view>\r\n                <view class="flex justify-between items-center h-[80rpx]">\r\n                    <view class="flex items-center">\r\n                        <image class="w-[42rpx] h-[42rpx]" :src="img(\'addon/tourism/tourism/way/discount_coupon.png\')" mode="widthFix"></image>\r\n                        <text class="ml-1 text-xs">抵用券</text>\r\n                    </view>\r\n                    <text class="text-[#999] text-xs flex items-center">查看<text class="nc-iconfont nc-icon-youV6xx text-[26rpx]"></text></text>\r\n                </view>\r\n            </view> '),u(l,{class:"h-[148rpx] w-screen"}),u(l,{class:"bg-white p-3 fixed bottom-0 left-0 right-0 flex items-center justify-between"},{default:o((()=>[u(l,{class:"text-[#FA6400] text-xs"},{default:o((()=>[u(a,null,{default:o((()=>[n("总价")])),_:1}),u(a,{class:"ml-[2rpx]"},{default:o((()=>[n("￥")])),_:1}),u(a,{class:"text-[38rpx]"},{default:o((()=>[n(i(T.value.order_money.toFixed(2)),1)])),_:1})])),_:1}),u(l,{class:"ml-auto mr-2",onClick:t[6]||(t[6]=e=>W.value=!W.value)},{default:o((()=>[u(a,{class:"text-[#686868] text-xs mr-1"},{default:o((()=>[n("明细")])),_:1}),u(a,{class:"nc-iconfont nc-icon-shangV6xx-1 text-[#C2C2C2] text-xs font-bold"})])),_:1}),u(K,{text:"提交订单",color:"var(--primary-color)",shape:"circle",customStyle:{lineHeight:"76rpx",margin:"0rpx",color:"#fff",width:"278rpx"},type:"primary",size:"16",loading:L.value,onClick:M},null,8,["loading"])])),_:1}),u(b,{show:W.value,onClose:t[7]||(t[7]=e=>W.value=!1),closeable:!0},{default:o((()=>[u(l,{class:"text-center py-[30rpx] font-bold leading-none"},{default:o((()=>[u(a,null,{default:o((()=>[n("费用明细")])),_:1})])),_:1}),u(y,{"scroll-y":"true",class:"max-h-[40vh]"},{default:o((()=>[u(l,{class:"flex px-[30rpx] mt-[20rpx]"},{default:o((()=>[u(l,{class:"font-bold"},{default:o((()=>[n("总价")])),_:1}),u(l,{class:"text-right flex-1 font-bold"},{default:o((()=>[u(a,{class:"text-sm font-normal"},{default:o((()=>[n("￥")])),_:1}),u(a,{class:"text-[38rpx]"},{default:o((()=>[n(i(T.value.order_money.toFixed(2)),1)])),_:1})])),_:1})])),_:1}),(s(!0),m(x,null,f(T.value.order_items,((e,t)=>(s(),r(l,{class:"flex px-[30rpx] mt-[10rpx] text-sm text-gray-subtitle"},{default:o((()=>[c(" <view>{{ item.year }}-{{ item.month }}-{{ item.day }}</view> "),u(l,null,{default:o((()=>[n(i(T.value.reserve_time)+" 出发",1)])),_:1}),u(l,{class:"text-right flex-1"},{default:o((()=>[u(a,{class:"text-xs"},{default:o((()=>[n("￥")])),_:1}),u(a,null,{default:o((()=>[n(i(null==e?void 0:e.price),1)])),_:2},1024),u(a,{class:"mx-[10rpx]"},{default:o((()=>[n("x")])),_:1}),u(a,null,{default:o((()=>[n(i(e.num),1)])),_:2},1024)])),_:2},1024)])),_:2},1024)))),256)),c(' <view class="flex px-[30rpx] mt-[10rpx] text-sm text-gray-subtitle">\r\n                        <view>{{ paymentData.reserve_time }} 出发</view>\r\n                        <view class="text-right flex-1"></view>\r\n                    </view> ')])),_:1}),u(l,{class:"h-[150rpx]"})])),_:1},8,["show"])])),_:1})):c("v-if",!0),u(q,{ref_key:"payRef",ref:H,onClose:le},null,512),O.value?(s(),r(l,{key:1,class:"w-screen h-screen flex flex-col justify-center items-center"},{default:o((()=>[u(Z,{icon:e.img("static/resource/images/order_empty.png"),text:O.value},null,8,["icon","text"]),u(l,{class:"w-[240rpx] mt-[40rpx]"},{default:o((()=>[u(K,{type:"primary",text:"返回上一页",shape:"circle",onClick:ae})])),_:1})])),_:1})):c("v-if",!0),u(ee,{loading:J.value,"loading-text":"","bg-color":"none",loadingColor:"var(--primary-color)",iconSize:"35"},null,8,["loading"])])),_:1},8,["style"])}}}),[["__scopeId","data-v-7fd66c63"]]);export{G as default};