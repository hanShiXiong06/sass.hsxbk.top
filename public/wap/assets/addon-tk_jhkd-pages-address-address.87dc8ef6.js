import{d as e,r as a,p as t,aN as s,F as l,o as r,c as d,w as o,f as u,b as i,e as n,v as c,U as p,ad as f,V as x,W as _,n as b,a as v,i as m,g as y,h as k,ac as h,y as g,z as C,u as w,aO as j,aP as z,D as S,aJ as A,c8 as F,bX as I,bF as O,_ as T}from"./index-71c7df08.js";import{M as $}from"./mescroll-empty.95b8c17e.js";import"./mescroll-i18n.00218d15.js";/* empty css                                                                       */const B=T(e({__name:"address",setup(e){const T=a(!0),B=a(0),D=a([{name:"快递地址",key:"address"},{name:"同城配送地址",key:"location_address"}]),E=a([]),J=a([]),M=a(""),N=a("");t((e=>{M.value=e.type||"",N.value=e.source||"",e.type&&(B.value="address"==e.type?0:1)})),s({}).then((({data:e})=>{const a=[],t=[];e.forEach((e=>{"address"==e.type?a.push(e):t.push(e)})),N.value?E.value=0==B.value?a:t:E.value=e,T.value=!1})).catch((()=>{T.value=!1}));const P=()=>{const e=`/addon/tk_jhkd/pages/address/${D.value[B.value].key}_edit`;v({url:e,param:{type:D.value[B.value].key,source:N.value}})},Q=e=>{const a=`/addon/tk_jhkd/pages/address/${D.value[B.value].key}_edit`;v({url:a,param:{id:e,type:D.value[B.value].key,source:N.value}})},R=a([{text:l("delete"),style:{backgroundColor:"#F56C6C"}}]),U=e=>{const a=uni.getStorageSync("selectAddressCallback");a&&(a.address_id=e.id,uni.setStorage({key:"selectAddressCallback",data:a,success(){v({url:a.back,mode:"redirectTo"})}}))},V=e=>{const a=B.value?J:E,t=a.value[e.index];z(t.id).then((()=>{a.value.splice(e.index,1)})).catch()};return(e,a)=>{const t=m,s=S,v=y(k("u-swipe-action-item"),A),z=y(k("u-swipe-action"),F),D=y(k("u-button"),I),M=y(k("u-tabbar"),O),W=h;return T.value?u("v-if",!0):(r(),d(t,{key:0,style:b(e.themeColor())},{default:o((()=>[u(' <view class="border-0 !border-b !border-[#eee] border-solid fixed top-0 left-0 right-0 z-99 bg-[#fff]"\r\n\t\t\tv-if="!source">\r\n\t\t\t<u-tabs :list="tabs" @click="switchTab" :current="current"\r\n\t\t\t\titemStyle="width:50%;height:88rpx;box-sizing: border-box;"></u-tabs>\r\n\t\t</view> '),i(W,{"scroll-y":"true",class:_({"pt-[0rpx]":!N.value})},{default:o((()=>[i(z,null,{default:o((()=>[n(i(t,{class:"p-[12rpx]"},{default:o((()=>[(r(!0),p(x,null,f(E.value,(e=>(r(),d(v,{options:R.value,onClick:V},{default:o((()=>[i(t,{class:"border-2 !border-b !border-[#f5f5f5] border-solid pb-[30rpx] flex items-center p-2"},{default:o((()=>[i(t,{class:"flex-1 line-feed",onClick:a=>U(e)},{default:o((()=>[i(t,{class:"font-bold my-[10rpx] text-sm line-feed"},{default:o((()=>[g(C(e.full_address),1)])),_:2},1024),i(t,{class:"text-sm flex items-center"},{default:o((()=>[i(t,null,{default:o((()=>[g(C(e.name),1)])),_:2},1024),i(s,{class:"text-[26rpx] text-gray-subtitle"},{default:o((()=>[g(C(w(j)(e.mobile)),1)])),_:2},1024),1==e.is_default?(r(),d(t,{key:0,class:"bg-primary text-white text-xs px-[10rpx] leading-none flex items-center h-[32rpx] ml-[10rpx] rounded min-w-[50rpx]"},{default:o((()=>[g(C(w(l)("default")),1)])),_:1})):u("v-if",!0)])),_:2},1024)])),_:2},1032,["onClick"]),i(s,{class:"iconfont iconbianji shrink-0 text-[40rpx] p-[20rpx] pr-0",onClick:a=>Q(e.id)},null,8,["onClick"])])),_:2},1024)])),_:2},1032,["options"])))),256)),E.value.length?u("v-if",!0):(r(),d(t,{key:0,class:"pt-[20vh]"},{default:o((()=>[i($,{option:{tip:"暂无地址"}})])),_:1}))])),_:1},512),[[c,0==B.value]]),n(i(t,{class:"p-[30rpx]"},{default:o((()=>[(r(!0),p(x,null,f(J.value,(e=>(r(),d(v,{options:R.value,onClick:V},{default:o((()=>[i(t,{class:"border-0 !border-b !border-[#f5f5f5] border-solid pb-[30rpx] flex items-center"},{default:o((()=>[i(t,{class:"flex-1",onClick:a=>U(e)},{default:o((()=>[i(t,{class:"font-bold my-[10rpx] text-sm line-feed"},{default:o((()=>[g(C(e.full_address),1)])),_:2},1024),i(t,{class:"text-sm flex items-center"},{default:o((()=>[i(t,null,{default:o((()=>[g(C(e.name),1)])),_:2},1024),i(s,{class:"text-[26rpx] text-gray-subtitle"},{default:o((()=>[g(C(w(j)(e.mobile)),1)])),_:2},1024),1==e.is_default?(r(),d(t,{key:0,class:"bg-primary text-white text-xs px-[10rpx] leading-none flex items-center h-[32rpx] ml-[10rpx] rounded min-w-[50rpx]"},{default:o((()=>[g(C(w(l)("default")),1)])),_:1})):u("v-if",!0)])),_:2},1024)])),_:2},1032,["onClick"]),i(s,{class:"iconfont iconbianji shrink-0 text-[40rpx] p-[20rpx] pr-0",onClick:a=>Q(e.id)},null,8,["onClick"])])),_:2},1024)])),_:2},1032,["options"])))),256)),J.value.length?u("v-if",!0):(r(),d(t,{key:0,class:"pt-[20vh]"},{default:o((()=>[i($,{option:{tip:"暂无地址"}})])),_:1}))])),_:1},512),[[c,1==B.value]])])),_:1}),i(M,{fixed:!0,safeAreaInsetBottom:!0,border:!1,zIndex:"99"},{default:o((()=>[i(t,{class:"p-[24rpx] pt-0 w-full"},{default:o((()=>[i(D,{type:"primary",shape:"circle",text:"新增地址",onClick:P})])),_:1})])),_:1})])),_:1},8,["class"])])),_:1},8,["style"]))}}}),[["__scopeId","data-v-33347de4"]]);export{B as default};
