import{d as e,r as a,F as s,o as t,c as l,w as o,b as r,O as d,a6 as i,P as n,u,f as c,n as p,aE as f,a as m,i as _,g as x,h as b,a5 as y,y as v,z as g,aF as k,E as h,aG as C,D as j}from"./index-2882a2d8.js";import{_ as w}from"./u-swipe-action-item.0ac4441e.js";import{_ as A}from"./u-empty.662c89c7.js";import{_ as F}from"./u-swipe-action.4803e6c2.js";import{_ as S}from"./u-button.0ab7ff00.js";import{_ as E}from"./u-tabbar.b113c065.js";import{_ as H}from"./_plugin-vue_export-helper.1b428a4d.js";import"./u-icon.1104ad2f.js";import"./u-loading-icon.a37f7e61.js";/* empty css                                                                       */import"./u-safe-bottom.f13b01b8.js";const I=H(e({__name:"index",setup(e){const H=a(!0),I=a([]);f({}).then((({data:e})=>{I.value=e,H.value=!1})).catch((()=>{H.value=!1}));const z=()=>{m({url:"/addon/o2o/pages/address/address_edit"})},B=a([{text:s("delete"),style:{backgroundColor:"#F56C6C"}}]);return(e,a)=>{const f=_,D=j,G=x(b("u-swipe-action-item"),w),O=x(b("u-empty"),A),P=x(b("u-swipe-action"),F),V=x(b("u-button"),S),$=x(b("u-tabbar"),E),q=y;return t(),l(f,{style:p(e.themeColor())},{default:o((()=>[H.value?c("v-if",!0):(t(),l(q,{key:0,"scroll-y":"true"},{default:o((()=>[r(P,null,{default:o((()=>[r(f,{class:"p-[30rpx] pt-[0]"},{default:o((()=>[(t(!0),d(n,null,i(I.value,((e,a)=>(t(),l(G,{options:B.value,onClick:e=>(e=>{const a=I.value[e];C(a.id).then((()=>{I.value.splice(e,1)})).catch()})(a)},{default:o((()=>[r(f,{class:"border-0 !border-b !border-[#f5f5f5] border-solid py-[20rpx] flex items-center"},{default:o((()=>[r(f,{class:"flex-1 line-feed",onClick:a=>(e=>{const a=uni.getStorageSync("selectAddressCallback");a&&(a.address_id=e.id,uni.setStorage({key:"selectAddressCallback",data:a,success(){m({url:a.back})}}))})(e)},{default:o((()=>[r(f,{class:"font-bold my-[10rpx] text-sm line-feed w-full"},{default:o((()=>[v(g(e.full_address),1)])),_:2},1024),r(f,{class:"text-sm flex items-center"},{default:o((()=>[r(f,null,{default:o((()=>[v(g(e.name),1)])),_:2},1024),r(D,{class:"text-[26rpx] text-gray-subtitle"},{default:o((()=>[v(g(u(k)(e.mobile)),1)])),_:2},1024),1==e.is_default?(t(),l(f,{key:0,class:"bg-primary text-white text-xs px-[10rpx] leading-none flex items-center h-[32rpx] ml-[10rpx] rounded min-w-[100rpx]"},{default:o((()=>[v(g(u(s)("default")),1)])),_:1})):c("v-if",!0)])),_:2},1024)])),_:2},1032,["onClick"]),r(D,{class:"iconfont iconVector-77 mr-[24rpx] shrink-0",onClick:a=>{return s=e.id,void m({url:"/addon/o2o/pages/address/address_edit",param:{id:s}});var s}},null,8,["onClick"])])),_:2},1024)])),_:2},1032,["options","onClick"])))),256)),I.value.length?c("v-if",!0):(t(),l(f,{key:0,class:"pt-[15vh]"},{default:o((()=>[r(O,{text:u(s)("noHomeAddress"),icon:u(h)("static/resource/images/empty.png")},null,8,["text","icon"])])),_:1}))])),_:1})])),_:1}),r($,{fixed:!0,safeAreaInsetBottom:!0,border:!1},{default:o((()=>[r(f,{class:"p-[24rpx] pt-0 w-full"},{default:o((()=>[r(V,{type:"primary",shape:"circle",text:u(s)("addHomeAddress"),onClick:z},null,8,["text"])])),_:1})])),_:1})])),_:1}))])),_:1},8,["style"])}}}),[["__scopeId","data-v-61a3b3d6"]]);export{I as default};
