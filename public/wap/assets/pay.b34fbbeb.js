import{d as e,q as a,bV as t,r as l,bC as r,a as p,g as o,h as s,o as n,c as u,w as d,A as i,b as c,y,z as v,u as m,F as _,a0 as f,O as x,P as g,a6 as b,E as h,f as S,t as k,i as w,a5 as C,C as T}from"./index-9317da28.js";import{_ as j}from"./u-image.74ac23f6.js";import{_ as I}from"./u-icon.5e775659.js";import{_ as P}from"./u-popup.1f2ebcae.js";import{p as O,g as R}from"./pay.25e81968.js";import{_ as E}from"./_plugin-vue_export-helper.1b428a4d.js";const z=E(e({__name:"pay",emits:["close"],setup(e,{expose:E,emit:z}){a()&&t.init();const A=l(!1),H=l(!1),U=l(null),$=l(""),q=()=>{var e,l;uni.$u.test.isEmpty($.value)?k({title:_("pay.notHavePayType"),icon:"none"}):H.value||(H.value=!0,O({trade_type:null==(e=U.value)?void 0:e.trade_type,trade_id:null==(l=U.value)?void 0:l.trade_id,type:$.value,openid:uni.getStorageSync("openid")||""}).then((e=>{var l,r,o,s,n,u;switch($.value){case"wechatpay":a()?(e.data.timestamp=e.data.timeStamp,delete e.data.timeStamp,t.pay({...e.data,success:()=>{V()},cancel:()=>{H.value=!1}})):(uni.setStorageSync("paymenting",{trade_type:null==(l=U.value)?void 0:l.trade_type,trade_id:null==(r=U.value)?void 0:r.trade_id}),location.href=e.data.h5_url);break;case"alipay":a()?p({url:"/app/pages/pay/browser",param:{trade_type:null==(o=U.value)?void 0:o.trade_type,trade_id:null==(s=U.value)?void 0:s.trade_id,alipay:encodeURIComponent(e.data.url)},mode:"redirectTo"}):(uni.setStorageSync("paymenting",{trade_type:null==(n=U.value)?void 0:n.trade_type,trade_id:null==(u=U.value)?void 0:u.trade_id}),location.href=e.data.url);break;default:if(e.data.url)return void p({url:e.data.url,param:e.data.param||{},mode:"redirectTo"});V()}})).catch((()=>{H.value=!1})))};r("checkIsReturnAfterPayment",(()=>{const e=uni.getStorageSync("paymenting");uni.getStorageSync("paymenting")&&p({url:"/app/pages/pay/result",param:{trade_type:e.trade_type,trade_id:e.trade_id},mode:"redirectTo",success(){uni.removeStorageSync("paymenting")}})}));const F=l(!1),V=()=>{var e,a;p({url:"/app/pages/pay/result",param:{trade_type:null==(e=U.value)?void 0:e.trade_type,trade_id:null==(a=U.value)?void 0:a.trade_id},mode:"redirectTo"})},B=()=>{uni.removeStorageSync("paymenting"),A.value=!1,z("close")};return E({open:(e,a,t="")=>{F.value||(F.value=!0,uni.setStorageSync("payReturn",encodeURIComponent(t)),R(e,a).then((e=>{let{data:a}=e;U.value=a,uni.$u.test.isEmpty(a)?k({title:_("pay.notObtainedInfo"),icon:"none"}):0!=a.money?($.value=a.pay_type_list[0]?a.pay_type_list[0].key:"",A.value=!0,F.value=!1):V()})).catch((()=>{F.value=!1})))}}),(e,a)=>{const t=w,l=o(s("u-image"),j),r=o(s("u-icon"),I),p=C,k=T,O=o(s("u-popup"),P);return n(),u(O,{show:A.value,round:10,onClose:B,closeable:!0,bgColor:"#fff",zIndex:"10081",closeOnClickOverlay:!1},{default:d((()=>[U.value?(n(),u(t,{key:0,class:"flex flex-col h-[75vh] popup-common",onTouchmove:a[0]||(a[0]=i((()=>{}),["prevent","stop"]))},{default:d((()=>[c(t,{class:"head"},{default:d((()=>[c(t,{class:"title"},{default:d((()=>[y(v(m(_)("pay.payTitle")),1)])),_:1}),c(t,{class:"flex items-end justify-center w-full text-xl font-bold py-[20rpx] price-font"},{default:d((()=>[c(t,{class:"text-base mr-[4rpx]"},{default:d((()=>[y(v(m(_)("currency")),1)])),_:1}),y(" "+v(m(f)(U.value.money)),1)])),_:1})])),_:1}),c(p,{"scroll-y":"true",class:"flex-1 pt-[20rpx]"},{default:d((()=>[c(t,{class:"flex text-[28rpx] px-[36rpx] py-[20rpx] mb-[10rpx]"},{default:d((()=>[c(t,{class:"text-[var(--text-color-light6)]"},{default:d((()=>[y(v(m(_)("pay.orderInfo")),1)])),_:1}),c(t,{class:"text-right flex-1 pl-[30rpx] truncate"},{default:d((()=>[y(v(U.value.body),1)])),_:1})])),_:1}),c(t,{class:"mx-[var(--popup-sidebar-m)] px-[30rpx] bg-white rounded-[20rpx] bg-[var(--temp-bg)]"},{default:d((()=>[U.value.pay_type_list.length?(n(!0),x(g,{key:0},b(U.value.pay_type_list,((e,a)=>(n(),u(t,{class:"pay-item py-[30rpx] flex items-center border-0 border-b border-solid border-[#eee]",key:a,onClick:a=>$.value=e.key},{default:d((()=>[c(l,{src:m(h)(e.icon),width:"50rpx",height:"50rpx"},null,8,["src"]),c(t,{class:"flex-1 px-[20rpx] text-[28rpx] font-500"},{default:d((()=>[y(v(e.name),1)])),_:2},1024),e.key==$.value?(n(),u(r,{key:0,name:"checkbox-mark",color:"var(--primary-color)"})):S("v-if",!0)])),_:2},1032,["onClick"])))),128)):(n(),u(t,{key:1,class:"py-[30rpx] text-center text-[24rpx] text-gray-subtitle"},{default:d((()=>[y(v(m(_)("pay.notHavePayType")),1)])),_:1}))])),_:1})])),_:1}),c(t,{class:"btn-wrap"},{default:d((()=>[c(k,{class:"primary-btn-bg btn","hover-class":"none",loading:H.value,onClick:q},{default:d((()=>[y(v(m(_)("pay.confirmPay")),1)])),_:1},8,["loading"])])),_:1})])),_:1})):S("v-if",!0)])),_:1},8,["show"])}}}),[["__scopeId","data-v-adb3a49d"]]);export{z as _};
