import{d as e,l as a,j as l,r as t,p as s,s as o,q as r,o as u,P as n,b as d,w as p,c as i,y as f,z as c,u as m,f as x,n as _,Q as v,t as y,H as b,i as g,g as h,h as j,a5 as C,C as k,E as w}from"./index-7bf68536.js";import{_ as V}from"./u-icon.0c1c54c7.js";import{_ as B}from"./u-input.09a5cedd.js";import{_ as F}from"./u-popup.be4bfacd.js";import{_ as q}from"./pay.d2e850e8.js";import{c as z}from"./pay.d8c8791c.js";import{g as D}from"./config.634448d3.js";import{_ as L}from"./_plugin-vue_export-helper.1b428a4d.js";import"./u-transition.cdf87992.js";import"./u-safe-bottom.908eeae4.js";import"./u-image.e46f68ef.js";import"./pay.2db06871.js";const N=L(e({__name:"pay",setup(e){const L=a(),N=l((()=>L.info)),A=t(""),E=t(""),I=t(!1),O=t(null),S=t(!1),U=t();(async()=>{const e=await D();U.value=e.data})();const H=()=>{I.value=!1},M=()=>{I.value=!0},P=e=>{let a=e.detail.value;return isNaN(a)?(y({title:"请输入有效金额",icon:"none"}),void(A.value="")):-1!=a.indexOf(".")&&a.split(".")[1].length>2?(y({title:"最多输入两位小数",icon:"none"}),void(A.value="")):(a.startsWith(".")&&(a="0"+a),parseFloat(a)<0?(y({title:"金额必须大于或等于0",icon:"none"}),void(A.value="")):void(A.value=a))};return s((e=>{if(e.price&&(A.value=e.price),!o()){const e=b();r()&&(data.query.code?e.authLogin(data.query.code):e.getAuthCode("snsapi_userinfo"))}})),(e,a)=>{const l=g,t=h(j("u-icon"),V),s=C,o=k,r=h(j("up-input"),B),D=h(j("up-popup"),F),L=h(j("pay"),q);return u(),n(v,null,[d(l,{style:_(e.themeColor())},{default:p((()=>[U.value?(u(),i(l,{key:0,class:"tk-card flex justify-between items-center"},{default:p((()=>[d(l,null,{default:p((()=>[d(l,{class:"font-bold text-[30rpx] mt-1"},{default:p((()=>[f(c(U.value.business_name),1)])),_:1}),d(l,{class:"text-[#21231E] text-[18rpx] mt-2"},{default:p((()=>[f("付款给商户")])),_:1})])),_:1}),d(l,null,{default:p((()=>[d(t,{name:m(w)(U.value.business_logo),size:"42"},null,8,["name"])])),_:1})])),_:1})):x("v-if",!0),d(l,{class:"p-4 pl-8 pr-8"},{default:p((()=>[d(l,null,{default:p((()=>[d(l,null,{default:p((()=>[f("金额")])),_:1}),d(l,{class:"flex items-center mt-3 mb-2"},{default:p((()=>[d(l,{class:"text--[48rpx] font-bold mr-2"},{default:p((()=>[f("￥")])),_:1}),d(s,{type:"digit",class:"h-[76rpx] leading-[76rpx] pl-[10rpx] flex-1 font-bold text-[54rpx] bg-[#fff]",modelValue:A.value,"onUpdate:modelValue":a[0]||(a[0]=e=>A.value=e),maxlength:"7","placeholder-class":"apply-price","adjust-position":!1,onInput:P,autofocus:""},null,8,["modelValue"])])),_:1}),d(l,{class:"line-box"}),d(l,{class:"mt-4 text-[#297bff]",onClick:a[1]||(a[1]=e=>M())},{default:p((()=>[f("添加备注")])),_:1})])),_:1})])),_:1}),d(l,{class:"h-[66rpx]"}),d(l,{class:"b-tabbar safe-area-inset-bottom flex justify-between"},{default:p((()=>[d(l,{class:"flex flex-1"},{default:p((()=>[d(o,{class:"w-[100%] !h-[72rpx] leading-[72rpx] text-[26rpx] rounded-[50rpx]",style:{color:"#ffffff",backgroundColor:"#07C160",borderColor:"#07C160"},onClick:a[2]||(a[2]=e=>(async()=>{var e;if(!A.value)return void y({title:"请输入金额",icon:"none"});if(!N.value){let e=uni.getStorageSync("pid");return e&&e>0?(b().setLoginBack({url:"/addon/fast_pay/pages/pay/pay?mid="+e}),!1):(b().setLoginBack({url:"/addon/fast_pay/pages/pay/pay"}),!1)}if(!/^(0|[1-9]\d*)(\.\d{1,2})?$/.test(A.value))return y({title:"金额必须大于0且最多只能有两位小数",icon:"none"}),void(A.value="");const a=await z({price:A.value,remark:E.value});S.value=!0,null==(e=O.value)||e.open(a.data.trade_type,a.data.trade_id,"/addon/fast_pay/pages/pay/pay")})())},{default:p((()=>[f("立即支付")])),_:1})])),_:1})])),_:1})])),_:1},8,["style"]),d(D,{round:10,show:I.value,onClose:H,onOpen:M,mode:"bottom"},{default:p((()=>[d(l,{class:"pl-4 pr-4 mb-4 mt-4"},{default:p((()=>[d(l,{class:"font-bold text-[28rpx]"},{default:p((()=>[f("添加备注")])),_:1}),d(l,{class:"flex items-center mt-4"},{default:p((()=>[d(r,{placeholder:" ",border:"surround",modelValue:E.value,"onUpdate:modelValue":a[3]||(a[3]=e=>E.value=e),clearable:!0},null,8,["modelValue"])])),_:1}),d(l,{class:"flex mt-4"},{default:p((()=>[d(o,{class:"w-[100%] !h-[72rpx] leading-[72rpx] text-[26rpx] rounded-[10rpx] mr-2",style:{color:"#000000",backgroundColor:"#d8d8d8",borderColor:"#29DB6F"},onClick:a[4]||(a[4]=e=>H())},{default:p((()=>[f("取消")])),_:1}),d(o,{class:"w-[100%] !h-[72rpx] leading-[72rpx] text-[26rpx] rounded-[10rpx]",style:{color:"#ffffff",backgroundColor:"#29DB6F",borderColor:"#29DB6F"},onClick:a[5]||(a[5]=e=>H())},{default:p((()=>[f("确认")])),_:1})])),_:1})])),_:1})])),_:1},8,["show"]),d(L,{ref_key:"payRef",ref:O,onClose:a[6]||(a[6]=e=>S.value=!1)},null,512)],64)}}}),[["__scopeId","data-v-71d6cb95"]]);export{N as default};