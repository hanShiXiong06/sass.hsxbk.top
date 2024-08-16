import{d as e,r as t,j as a,aD as s,x as l,o as r,c as o,w as i,f as d,b as u,e as n,v as c,I as p,J as f,K as x,u as m,L as b,n as _,a as v,i as k,g as y,h,a2 as g,y as C,z as j,aE as w,aF as z,D as A}from"./index-d8a8f699.js";import{_ as I}from"./u-swipe-action-item.22eea3d6.js";import{_ as S}from"./u-swipe-action.6a25fe41.js";import{_ as E}from"./u-button.aa0eb212.js";import{_ as T}from"./u-tabbar.5fed7184.js";import{M as $}from"./mescroll-empty.2fe85dec.js";import{_ as D}from"./_plugin-vue_export-helper.1b428a4d.js";import"./u-icon.5ba98c98.js";import"./u-loading-icon.6808ae8c.js";import"./u-safe-bottom.a4431b09.js";import"./mescroll-i18n.49872024.js";const F=D(e({__name:"address",setup(e){const D=t(!0),F=t(0),K=t([{name:"快递地址",key:"address"},{name:"同城配送地址",key:"location_address"}]),B=t([]),J=t([]),L=t(""),M=t("");a((e=>{L.value=e.type||"",M.value=e.source||"",e.type&&(F.value="address"==e.type?0:1)})),s({}).then((({data:e})=>{const t=[],a=[];e.forEach((e=>{"address"==e.type?t.push(e):a.push(e)})),M.value?B.value=0==F.value?t:a:B.value=e,D.value=!1})).catch((()=>{D.value=!1}));const U=()=>{const e=`/addon/tk_jhkd/pages/address/${K.value[F.value].key}_edit`;v({url:e,param:{type:K.value[F.value].key,source:M.value}})},W=e=>{const t=`/addon/tk_jhkd/pages/address/${K.value[F.value].key}_edit`;v({url:t,param:{id:e,type:K.value[F.value].key,source:M.value}})},X=t([{text:l("delete"),style:{backgroundColor:"#F56C6C"}}]),Z=e=>{const t=uni.getStorageSync("selectAddressCallback");t&&(t.address_id=e.id,uni.setStorage({key:"selectAddressCallback",data:t,success(){v({url:t.back,mode:"redirectTo"})}}))},q=e=>{const t=F.value?J:B,a=t.value[e.index];z(a.id).then((()=>{t.value.splice(e.index,1)})).catch()};return(e,t)=>{const a=k,s=A,v=y(h("u-swipe-action-item"),I),z=y(h("u-swipe-action"),S),K=y(h("u-button"),E),L=y(h("u-tabbar"),T),G=g;return D.value?d("v-if",!0):(r(),o(a,{key:0,style:_(e.themeColor())},{default:i((()=>[d(' <view class="border-0 !border-b !border-[#eee] border-solid fixed top-0 left-0 right-0 z-99 bg-[#fff]"\r\n\t\t\tv-if="!source">\r\n\t\t\t<u-tabs :list="tabs" @click="switchTab" :current="current"\r\n\t\t\t\titemStyle="width:50%;height:88rpx;box-sizing: border-box;"></u-tabs>\r\n\t\t</view> '),u(G,{"scroll-y":"true",class:b({"pt-[0rpx]":!M.value})},{default:i((()=>[u(z,null,{default:i((()=>[n(u(a,{class:"p-[12rpx]"},{default:i((()=>[(r(!0),p(x,null,f(B.value,(e=>(r(),o(v,{options:X.value,onClick:q},{default:i((()=>[u(a,{class:"border-0 !border-b !border-[#f5f5f5] border-solid pb-[30rpx] flex items-center p-2"},{default:i((()=>[u(a,{class:"flex-1 line-feed",onClick:t=>Z(e)},{default:i((()=>[u(a,{class:"font-bold my-[10rpx] text-sm line-feed"},{default:i((()=>[C(j(e.full_address),1)])),_:2},1024),u(a,{class:"text-sm flex items-center"},{default:i((()=>[u(a,null,{default:i((()=>[C(j(e.name),1)])),_:2},1024),u(s,{class:"text-[26rpx] text-gray-subtitle"},{default:i((()=>[C(j(m(w)(e.mobile)),1)])),_:2},1024),1==e.is_default?(r(),o(a,{key:0,class:"bg-primary text-white text-xs px-[10rpx] leading-none flex items-center h-[32rpx] ml-[10rpx] rounded min-w-[50rpx]"},{default:i((()=>[C(j(m(l)("default")),1)])),_:1})):d("v-if",!0)])),_:2},1024)])),_:2},1032,["onClick"]),u(s,{class:"iconfont iconbianji shrink-0 text-[40rpx] p-[20rpx] pr-0",onClick:t=>W(e.id)},null,8,["onClick"])])),_:2},1024)])),_:2},1032,["options"])))),256)),B.value.length?d("v-if",!0):(r(),o(a,{key:0,class:"pt-[20vh]"},{default:i((()=>[u($,{option:{tip:"暂无收货地址"}})])),_:1}))])),_:1},512),[[c,0==F.value]]),n(u(a,{class:"p-[30rpx]"},{default:i((()=>[(r(!0),p(x,null,f(J.value,(e=>(r(),o(v,{options:X.value,onClick:q},{default:i((()=>[u(a,{class:"border-0 !border-b !border-[#f5f5f5] border-solid pb-[30rpx] flex items-center"},{default:i((()=>[u(a,{class:"flex-1",onClick:t=>Z(e)},{default:i((()=>[u(a,{class:"font-bold my-[10rpx] text-sm line-feed"},{default:i((()=>[C(j(e.full_address),1)])),_:2},1024),u(a,{class:"text-sm flex items-center"},{default:i((()=>[u(a,null,{default:i((()=>[C(j(e.name),1)])),_:2},1024),u(s,{class:"text-[26rpx] text-gray-subtitle"},{default:i((()=>[C(j(m(w)(e.mobile)),1)])),_:2},1024),1==e.is_default?(r(),o(a,{key:0,class:"bg-primary text-white text-xs px-[10rpx] leading-none flex items-center h-[32rpx] ml-[10rpx] rounded min-w-[50rpx]"},{default:i((()=>[C(j(m(l)("default")),1)])),_:1})):d("v-if",!0)])),_:2},1024)])),_:2},1032,["onClick"]),u(s,{class:"iconfont iconbianji shrink-0 text-[40rpx] p-[20rpx] pr-0",onClick:t=>W(e.id)},null,8,["onClick"])])),_:2},1024)])),_:2},1032,["options"])))),256)),J.value.length?d("v-if",!0):(r(),o(a,{key:0,class:"pt-[20vh]"},{default:i((()=>[u($,{option:{tip:"暂无收货地址"}})])),_:1}))])),_:1},512),[[c,1==F.value]])])),_:1}),u(L,{fixed:!0,safeAreaInsetBottom:!0,border:!1,zIndex:"99"},{default:i((()=>[u(a,{class:"p-[24rpx] pt-0 w-full"},{default:i((()=>[u(K,{type:"primary",shape:"circle",text:m(l)("createAddress"),onClick:U},null,8,["text"])])),_:1})])),_:1})])),_:1},8,["class"])])),_:1},8,["style"]))}}}),[["__scopeId","data-v-082730fa"]]);export{F as default};
