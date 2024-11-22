import{d as e,r as t,p as l,j as a,o as s,c as r,w as o,b as u,y as n,z as i,u as d,f as c,P as m,a7 as f,Q as x,n as p,t as _,aM as v,a as y,U as b,V as g,i as h,D as w,g as j,h as k,a6 as C,C as V}from"./index-7bf68536.js";import{_ as F}from"./u-number-box.30c0ab2e.js";import{_ as $}from"./u-parse.525658f5.js";import{_ as A}from"./u-popup.be4bfacd.js";import{_ as S}from"./u--input.ddc1d28b.js";import{_ as D}from"./u-form.78a4f7c2.js";import{_ as E}from"./u--form.632a93a1.js";import{_ as U}from"./u-button.359d7329.js";import{_ as z}from"./pay.d2e850e8.js";import{_ as B}from"./u-empty.68b4529f.js";import{_ as N}from"./loading-page.vue_vue_type_script_setup_true_lang.124ad65f.js";import{w as I,f as L,h as M,i as P}from"./tourism.3586533e.js";import{_ as X}from"./_plugin-vue_export-helper.1b428a4d.js";import"./u-icon.0c1c54c7.js";import"./u-transition.cdf87992.js";import"./u-safe-bottom.908eeae4.js";import"./u-input.09a5cedd.js";import"./u-line.463a2a45.js";import"./u-loading-icon.b37701e7.js";import"./u-image.e46f68ef.js";import"./pay.2db06871.js";import"./u-loading-page.566c330a.js";const G=X(e({__name:"order",setup(e){const X=e=>{O.value.num=e.value,q()},G=t(null),H=t(null),J=t(!0),K=t(""),O=t(uni.getStorageSync("wayCreateData")||{}),Q=t(null),R=t(!1),T=t(!1),W=t("");l((()=>{I(O.value).then((({data:e})=>{J.value=!1,Q.value=e,W.value=e.goods_info.buy_info,le()})).catch((e=>{K.value=e.msg,J.value=!1}))}));const q=()=>{J.value=!0,L(O.value).then((({data:e})=>{Q.value=e,J.value=!1})).catch((e=>{J.value=!1,_({title:e.msg,icon:"none"})}))},Y=t(!1),Z=()=>{if(te()){if(Y.value)return;Y.value=!0;const e=uni.$u.deepClone(v(O.value));e.buyer_info=JSON.stringify(e.buyer_info),M(e).then((({data:e})=>{var t;null==(t=H.value)||t.open(e.trade_type,e.trade_id,`/addon/tourism/pages/order/detail?order_id=${e.trade_id}`),Y.value=!1})).catch((e=>{Y.value=!1,_({title:e.msg,icon:"none"})}))}};let ee=t("0");P().then((e=>{ee.value=e.data.is_allow_refund}));const te=()=>{const e=O.value.buyer_info;if(uni.$u.test.isEmpty(e.name))return _({title:"请输入联系人姓名",icon:"none"}),!1;if(uni.$u.test.isEmpty(O.value.mobile))return _({title:"请输入手机号",icon:"none"}),!1;if(!/^1[3-9]\d{9}$/.test(O.value.mobile))return _({title:"请输入正确的手机号",icon:"none"}),!1;if(uni.$u.test.isEmpty(e.id_card))return _({title:"请输入身份证号",icon:"none"}),!1;return!!/^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/.test(e.id_card)||(_({title:"请输入正确的身份证号",icon:"none"}),!1)},le=()=>{var e;O.value.buyer_info={name:"",id_card:""},O.value.mobile="",Q.value.reserve_time=ae(null==(e=Q.value)?void 0:e.reserve_time)};a((()=>Q.value?Q.value.goods_info.goods_attribute.split(","):[]));const ae=e=>{const t=new Date(e);return uni.$u.timeFormat(t,"yyyy-mm-dd ")+["周日","周一","周二","周三","周四","周五","周六"][t.getDay()]},se=()=>{y({url:"/addon/tourism/pages/order/list",mode:"redirectTo"})},re=()=>{b().length>1?g({delta:1}):y({url:"/addon/tourism/pages/index",mode:"reLaunch"})};return(e,t)=>{const l=h,a=w,_=j(k("u-number-box"),F),v=j(k("u-parse"),$),y=C,b=j(k("u-popup"),A),g=j(k("u--input"),S),I=j(k("u-form-item"),D),L=j(k("u--form"),E),M=j(k("u-button"),U),P=j(k("pay"),z),q=j(k("u-empty"),B),te=V,le=j(k("loading-page"),N);return s(),r(l,{style:p(e.themeColor())},{default:o((()=>[Q.value?(s(),r(l,{key:0,class:"bg-[#f7f7f7] min-h-screen overflow-hidden"},{default:o((()=>[u(l,{class:"chunk-wrap pb-2 pt-4"},{default:o((()=>[u(l,{class:"font-bold"},{default:o((()=>[n(i(Q.value.goods_info.goods_name),1)])),_:1}),u(l,{class:"flex justify-between items-center mt-3"},{default:o((()=>[u(l,{class:"text-xs text-[#888]"},{default:o((()=>[u(a,{class:"text-[#FA6400] text-[26rpx]"},{default:o((()=>[n("￥")])),_:1}),u(a,{class:"text-[#FA6400] text-[38rpx]"},{default:o((()=>[n(i(Q.value.order_items[0].price),1)])),_:1}),n(" /人起 ")])),_:1}),u(l,{class:"text-xs"},{default:o((()=>[n("出发日期："+i(O.value.reserve_time.split("/").join("-")),1)])),_:1})])),_:1}),u(l,{class:"flex justify-between items-center mt-3"},{default:o((()=>[u(a,{class:"text-sm"},{default:o((()=>[n("选择人数")])),_:1}),u(_,{modelValue:O.value.num,"onUpdate:modelValue":t[0]||(t[0]=e=>O.value.num=e),max:Q.value.goods_info.stock,onChange:X},null,8,["modelValue","max"])])),_:1}),u(l,{class:"flex items-center justify-between mt-5 bg-[#FFF1E7] py-[16rpx] px-[18rpx] rounded-md"},{default:o((()=>[u(a,{class:"text-xs text-[#E02020]"},{default:o((()=>[n(i(Number(d(ee))?"随时可退":"购买后不可退款"),1)])),_:1}),u(l,{class:"flex items-center text-[#774C33] text-xs",onClick:t[1]||(t[1]=e=>T.value=!0)},{default:o((()=>[u(a,null,{default:o((()=>[n("购买须知")])),_:1}),u(a,{class:"nc-iconfont nc-icon-youV6xx text-[26rpx]"})])),_:1})])),_:1})])),_:1}),c(" 购买须知弹窗 "),u(b,{show:T.value,onClose:t[2]||(t[2]=e=>T.value=!1),closeable:!0},{default:o((()=>[u(l,{class:"text-center py-[30rpx] font-bold leading-none"},{default:o((()=>[u(a,null,{default:o((()=>[n("购买须知")])),_:1})])),_:1}),u(l,{class:"pt-[28rpx] pb-[40rpx] px-[28rpx]"},{default:o((()=>[u(y,{class:"max-h-[60vh]","scroll-y":!0},{default:o((()=>[W.value?(s(),r(v,{key:0,content:W.value,tagStyle:{img:"vertical-align: top;"}},null,8,["content"])):(s(),r(a,{key:1,class:"block px-5"},{default:o((()=>[n("暂无购买须知")])),_:1}))])),_:1})])),_:1})])),_:1},8,["show"]),u(l,{class:"chunk-wrap"},{default:o((()=>[u(l,{class:"chunk-head"},{default:o((()=>[u(a,null,{default:o((()=>[n("游客信息")])),_:1}),u(l,{class:"text-xs"},{default:o((()=>[n("需填写"),u(a,{class:"text-[#FF2F11]"},{default:o((()=>[n("1")])),_:1}),n("位，用于入园身份验证")])),_:1})])),_:1}),u(l,{class:"py-2"},{default:o((()=>[u(L,{labelPosition:"left",model:O.value,ref_key:"form",ref:G,labelWidth:"90",labelStyle:{color:"#A3A3A3",fontSize:"14px"}},{default:o((()=>[u(I,{label:"联系姓名",prop:"buyer_info.name",borderBottom:""},{default:o((()=>[u(l,{class:"border-style"},{default:o((()=>[u(g,{border:"none",placeholder:"请输入联系姓名",placeholderClass:"text-sm",modelValue:O.value.buyer_info.name,"onUpdate:modelValue":t[3]||(t[3]=e=>O.value.buyer_info.name=e)},null,8,["modelValue"])])),_:1})])),_:1}),u(I,{label:"手机号",prop:"mobile",borderBottom:""},{default:o((()=>[u(l,{class:"border-style"},{default:o((()=>[u(g,{border:"none",placeholder:"请输入手机号",placeholderClass:"text-sm",modelValue:O.value.mobile,"onUpdate:modelValue":t[4]||(t[4]=e=>O.value.mobile=e)},null,8,["modelValue"])])),_:1})])),_:1}),u(I,{label:"证件类型",borderBottom:""},{default:o((()=>[u(l,{class:"border-style"},{default:o((()=>[u(a,{class:"text-sm"},{default:o((()=>[n("身份证")])),_:1})])),_:1})])),_:1}),u(I,{label:"证件号",prop:"buyer_info.id_card",borderBottom:""},{default:o((()=>[u(l,{class:"border-style !border-0"},{default:o((()=>[u(g,{border:"none",placeholder:"请输入证件号",placeholderClass:"text-sm",modelValue:O.value.buyer_info.id_card,"onUpdate:modelValue":t[5]||(t[5]=e=>O.value.buyer_info.id_card=e)},null,8,["modelValue"])])),_:1})])),_:1})])),_:1},8,["model"])])),_:1})])),_:1}),c(' <view class="chunk-wrap">\r\n                <view class="chunk-head">\r\n                    <text>支付方式</text>\r\n                </view>\r\n                <view class="flex justify-between items-center h-[80rpx]">\r\n                    <view class="flex items-center">\r\n                        <image class="w-[42rpx] h-[42rpx]" :src="img(\'addon/tourism/tourism/way/discount_coupon.png\')" mode="widthFix"></image>\r\n                        <text class="ml-1 text-xs">微信支付</text>\r\n                    </view>\r\n                    <u-radio :labelDisabled="true"></u-radio>\r\n                </view>\r\n            </view>\r\n\r\n            <view class="chunk-wrap">\r\n                <view class="chunk-head">\r\n                    <text>优惠信息</text>\r\n                </view>\r\n                <view class="flex justify-between items-center h-[80rpx]">\r\n                    <view class="flex items-center">\r\n                        <image class="w-[42rpx] h-[42rpx]" :src="img(\'addon/tourism/tourism/way/discount_coupon.png\')" mode="widthFix"></image>\r\n                        <text class="ml-1 text-xs">抵用券</text>\r\n                    </view>\r\n                    <text class="text-[var(--text-color-light9)] text-xs flex items-center">查看<text class="nc-iconfont nc-icon-youV6xx text-[26rpx]"></text></text>\r\n                </view>\r\n            </view> '),u(l,{class:"h-[148rpx] w-screen"}),u(l,{class:"bg-white p-3 fixed bottom-0 left-0 right-0 flex items-center justify-between"},{default:o((()=>[u(l,{class:"text-[#FA6400] text-xs"},{default:o((()=>[u(a,null,{default:o((()=>[n("总价")])),_:1}),u(a,{class:"ml-[2rpx]"},{default:o((()=>[n("￥")])),_:1}),u(a,{class:"text-[38rpx]"},{default:o((()=>[n(i(Q.value.order_money.toFixed(2)),1)])),_:1})])),_:1}),u(l,{class:"ml-auto mr-2",onClick:t[6]||(t[6]=e=>R.value=!R.value)},{default:o((()=>[u(a,{class:"text-[#686868] text-xs mr-1"},{default:o((()=>[n("明细")])),_:1}),u(a,{class:"nc-iconfont nc-icon-shangV6xx-1 text-[#C2C2C2] text-xs font-bold"})])),_:1}),u(M,{text:"提交订单",color:"var(--primary-color)",shape:"circle",customStyle:{lineHeight:"76rpx",margin:"0rpx",color:"#fff",width:"278rpx"},type:"primary",size:"16",loading:Y.value,onClick:Z},null,8,["loading"])])),_:1}),u(b,{show:R.value,onClose:t[7]||(t[7]=e=>R.value=!1),closeable:!0},{default:o((()=>[u(l,{class:"text-center py-[30rpx] font-bold leading-none"},{default:o((()=>[u(a,null,{default:o((()=>[n("费用明细")])),_:1})])),_:1}),u(y,{"scroll-y":"true",class:"max-h-[40vh]"},{default:o((()=>[u(l,{class:"flex px-[30rpx] mt-[20rpx]"},{default:o((()=>[u(l,{class:"font-bold"},{default:o((()=>[n("总价")])),_:1}),u(l,{class:"text-right flex-1 font-bold"},{default:o((()=>[u(a,{class:"text-sm font-normal"},{default:o((()=>[n("￥")])),_:1}),u(a,{class:"text-[38rpx]"},{default:o((()=>[n(i(Q.value.order_money.toFixed(2)),1)])),_:1})])),_:1})])),_:1}),(s(!0),m(x,null,f(Q.value.order_items,((e,t)=>(s(),r(l,{class:"flex px-[30rpx] mt-[10rpx] text-sm text-gray-subtitle"},{default:o((()=>[c(" <view>{{ item.year }}-{{ item.month }}-{{ item.day }}</view> "),u(l,null,{default:o((()=>[n(i(Q.value.reserve_time)+" 出发",1)])),_:1}),u(l,{class:"text-right flex-1"},{default:o((()=>[u(a,{class:"text-xs"},{default:o((()=>[n("￥")])),_:1}),u(a,null,{default:o((()=>[n(i(null==e?void 0:e.price),1)])),_:2},1024),u(a,{class:"mx-[10rpx]"},{default:o((()=>[n("x")])),_:1}),u(a,null,{default:o((()=>[n(i(e.num),1)])),_:2},1024)])),_:2},1024)])),_:2},1024)))),256)),c(' <view class="flex px-[30rpx] mt-[10rpx] text-sm text-gray-subtitle">\r\n                        <view>{{ paymentData.reserve_time }} 出发</view>\r\n                        <view class="text-right flex-1"></view>\r\n                    </view> ')])),_:1}),u(l,{class:"h-[150rpx]"})])),_:1},8,["show"])])),_:1})):c("v-if",!0),u(P,{ref_key:"payRef",ref:H,onClose:se},null,512),K.value?(s(),r(l,{key:1,class:"w-screen h-screen flex flex-col justify-center items-center"},{default:o((()=>[u(q,{icon:e.img("static/resource/images/order_empty.png"),text:K.value},null,8,["icon","text"]),u(l,{class:"w-[240rpx] mt-[40rpx]"},{default:o((()=>[u(te,{class:"bg-[var(--primary-color)] text-[#fff] h-[80rpx] leading-[80rpx] rounded-[100rpx] text-[28rpx]",onClick:re},{default:o((()=>[n("返回上一页")])),_:1})])),_:1})])),_:1})):c("v-if",!0),u(le,{loading:J.value},null,8,["loading"])])),_:1},8,["style"])}}}),[["__scopeId","data-v-6c6f5c6c"]]);export{G as default};