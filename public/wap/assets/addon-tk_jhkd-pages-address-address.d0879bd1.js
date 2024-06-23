import{d as e,r as t,j as a,aD as s,t as l,o as r,c as o,w as i,f as d,b as u,e as n,v as c,E as p,F as f,G as x,u as m,H as _,n as b,a as v,i as y,g as k,h,a4 as g,x as j,y as C,aE as w,aF as A,C as E}from"./index-905183d4.js";import{_ as S}from"./u-swipe-action-item.93bd90a4.js";import{_ as z}from"./u-swipe-action.72e56da6.js";import{_ as F}from"./u-button.d3798ecb.js";import{_ as I}from"./u-tabbar.bedfa48a.js";import{M as B}from"./mescroll-empty.f9bce990.js";import{_ as D}from"./_plugin-vue_export-helper.1b428a4d.js";import"./u-icon.86a2aad0.js";import"./u-loading-icon.c376267d.js";import"./u-safe-bottom.e94b03c1.js";import"./mescroll-uni-option.0af4878d.js";import"./mescroll-i18n.6025c811.js";/* empty css                                                                       */const T=D(e({__name:"address",setup(e){const D=t(!0),T=t(0),$=t([{name:"快递地址",key:"address"},{name:"同城配送地址",key:"location_address"}]),G=t([]),H=t([]),M=t(""),N=t("");a((e=>{M.value=e.type||"",N.value=e.source||"",e.type&&(T.value="address"==e.type?0:1)})),s({}).then((({data:e})=>{const t=[],a=[];e.forEach((e=>{"address"==e.type?t.push(e):a.push(e)})),N.value?G.value=0==T.value?t:a:G.value=e,D.value=!1})).catch((()=>{D.value=!1}));const W=()=>{const e=`/addon/tk_jhkd/pages/address/${$.value[T.value].key}_edit`;v({url:e,param:{type:$.value[T.value].key,source:N.value}})},X=e=>{const t=`/addon/tk_jhkd/pages/address/${$.value[T.value].key}_edit`;v({url:t,param:{id:e,type:$.value[T.value].key,source:N.value}})},q=t([{text:l("delete"),style:{backgroundColor:"#F56C6C"}}]),J=e=>{const t=uni.getStorageSync("selectAddressCallback");t&&(t.address_id=e.id,uni.setStorage({key:"selectAddressCallback",data:t,success(){v({url:t.back,mode:"redirectTo"})}}))},K=e=>{const t=T.value?H:G,a=t.value[e.index];A(a.id).then((()=>{t.value.splice(e.index,1)})).catch()};return(e,t)=>{const a=y,s=E,v=k(h("u-swipe-action-item"),S),A=k(h("u-swipe-action"),z),$=k(h("u-button"),F),M=k(h("u-tabbar"),I),L=g;return D.value?d("v-if",!0):(r(),o(a,{key:0,style:b(e.themeColor())},{default:i((()=>[d(' <view class="border-0 !border-b !border-[#eee] border-solid fixed top-0 left-0 right-0 z-99 bg-[#fff]"\r\n\t\t\tv-if="!source">\r\n\t\t\t<u-tabs :list="tabs" @click="switchTab" :current="current"\r\n\t\t\t\titemStyle="width:50%;height:88rpx;box-sizing: border-box;"></u-tabs>\r\n\t\t</view> '),u(L,{"scroll-y":"true",class:_({"pt-[0rpx]":!N.value})},{default:i((()=>[u(A,null,{default:i((()=>[n(u(a,{class:"p-[12rpx]"},{default:i((()=>[(r(!0),p(x,null,f(G.value,(e=>(r(),o(v,{options:q.value,onClick:K},{default:i((()=>[u(a,{class:"border-0 !border-b !border-[#f5f5f5] border-solid pb-[30rpx] flex items-center p-2"},{default:i((()=>[u(a,{class:"flex-1 line-feed",onClick:t=>J(e)},{default:i((()=>[u(a,{class:"font-bold my-[10rpx] text-sm line-feed"},{default:i((()=>[j(C(e.full_address),1)])),_:2},1024),u(a,{class:"text-sm flex items-center"},{default:i((()=>[u(a,null,{default:i((()=>[j(C(e.name),1)])),_:2},1024),u(s,{class:"text-[26rpx] text-gray-subtitle"},{default:i((()=>[j(C(m(w)(e.mobile)),1)])),_:2},1024),1==e.is_default?(r(),o(a,{key:0,class:"bg-primary text-white text-xs px-[10rpx] leading-none flex items-center h-[32rpx] ml-[10rpx] rounded min-w-[50rpx]"},{default:i((()=>[j(C(m(l)("default")),1)])),_:1})):d("v-if",!0)])),_:2},1024)])),_:2},1032,["onClick"]),u(s,{class:"iconfont iconbianji shrink-0 text-[40rpx] p-[20rpx] pr-0",onClick:t=>X(e.id)},null,8,["onClick"])])),_:2},1024)])),_:2},1032,["options"])))),256)),G.value.length?d("v-if",!0):(r(),o(a,{key:0,class:"pt-[20vh]"},{default:i((()=>[u(B,{option:{tip:"暂无收货地址"}})])),_:1}))])),_:1},512),[[c,0==T.value]]),n(u(a,{class:"p-[30rpx]"},{default:i((()=>[(r(!0),p(x,null,f(H.value,(e=>(r(),o(v,{options:q.value,onClick:K},{default:i((()=>[u(a,{class:"border-0 !border-b !border-[#f5f5f5] border-solid pb-[30rpx] flex items-center"},{default:i((()=>[u(a,{class:"flex-1",onClick:t=>J(e)},{default:i((()=>[u(a,{class:"font-bold my-[10rpx] text-sm line-feed"},{default:i((()=>[j(C(e.full_address),1)])),_:2},1024),u(a,{class:"text-sm flex items-center"},{default:i((()=>[u(a,null,{default:i((()=>[j(C(e.name),1)])),_:2},1024),u(s,{class:"text-[26rpx] text-gray-subtitle"},{default:i((()=>[j(C(m(w)(e.mobile)),1)])),_:2},1024),1==e.is_default?(r(),o(a,{key:0,class:"bg-primary text-white text-xs px-[10rpx] leading-none flex items-center h-[32rpx] ml-[10rpx] rounded min-w-[50rpx]"},{default:i((()=>[j(C(m(l)("default")),1)])),_:1})):d("v-if",!0)])),_:2},1024)])),_:2},1032,["onClick"]),u(s,{class:"iconfont iconbianji shrink-0 text-[40rpx] p-[20rpx] pr-0",onClick:t=>X(e.id)},null,8,["onClick"])])),_:2},1024)])),_:2},1032,["options"])))),256)),H.value.length?d("v-if",!0):(r(),o(a,{key:0,class:"pt-[20vh]"},{default:i((()=>[u(B,{option:{tip:"暂无收货地址"}})])),_:1}))])),_:1},512),[[c,1==T.value]])])),_:1}),u(M,{fixed:!0,safeAreaInsetBottom:!0,border:!1,zIndex:"99"},{default:i((()=>[u(a,{class:"p-[24rpx] pt-0 w-full"},{default:i((()=>[u($,{type:"primary",shape:"circle",text:m(l)("createAddress"),onClick:W},null,8,["text"])])),_:1})])),_:1})])),_:1},8,["class"])])),_:1},8,["style"]))}}}),[["__scopeId","data-v-082730fa"]]);export{T as default};