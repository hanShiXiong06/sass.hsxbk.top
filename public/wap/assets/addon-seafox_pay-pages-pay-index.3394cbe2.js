import{d as e,q as a,bw as n,r,p,bC as s,a as i,o,c as d,t as l,D as u}from"./index-7bf68536.js";import{g as y}from"./pay.2db06871.js";const c=e({__name:"index",emits:["close"],setup(e,{expose:c,emit:_}){a()&&n.init();const m=r({trade_type:"",trade_id:""});p((e=>{var t,r;console.log(e,e.paySign,"query"),m.value.trade_type=e.trade_type||"",m.value.trade_id=e.trade_id,a()?(e.timestamp=e.timeStamp,delete e.timeStamp,e.package="prepay_id="+e.package_value,console.log(e),n.pay({...e,success:()=>{g()},cancel:()=>{loading.value=!1}})):(uni.setStorageSync("paymenting",{trade_type:null==(t=m.value)?void 0:t.trade_type,trade_id:null==(r=m.value)?void 0:r.trade_id}),location.href=e.h5_url)})),s("checkIsReturnAfterPayment",(()=>{const e=uni.getStorageSync("paymenting");uni.getStorageSync("paymenting")&&i({url:"/app/pages/pay/result",param:{trade_type:e.trade_type,trade_id:e.trade_id},mode:"redirectTo",success(){uni.removeStorageSync("paymenting")}})}));const v=r(!1),g=()=>{var e,a;i({url:"/app/pages/pay/result",param:{trade_type:null==(e=m.value)?void 0:e.trade_type,trade_id:null==(a=m.value)?void 0:a.trade_id},mode:"redirectTo"})};return c({open:(e,a,n="")=>{v.value||(v.value=!0,uni.setStorageSync("payReturn",encodeURIComponent(n)),y(e,a).then((e=>{let{data:a}=e;m.value=a,uni.$u.test.isEmpty(a)?l({title:t("pay.notObtainedInfo"),icon:"none"}):0!=a.money?(type.value=a.pay_type_list[0]?a.pay_type_list[0].key:"",show.value=!0,v.value=!1):g()})).catch((()=>{v.value=!1})))}}),(e,a)=>{const t=u;return o(),d(t,{class:"text-[20px]"})}}});export{c as default};
