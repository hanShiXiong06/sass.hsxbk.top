import{d as e,r as a,p as s,x as t,F as l,o as r,c,w as o,b as d,P as n,a7 as u,Q as i,f as p,y as f,z as x,u as m,n as _,aF as v,a as g,i as h,C as y,a6 as b,aG as k,A as C,R as j,aH as A,aI as S,D as w}from"./index-7bf68536.js";import{M as F}from"./mescroll-empty.fcefb74e.js";import{_ as z}from"./_plugin-vue_export-helper.1b428a4d.js";import"./mescroll-i18n.14e7fe02.js";/* empty css                                                                       */const E=z(e({__name:"address",setup(e){const z=a(!0),E=a(0),I=a([]);a([]);const V=a(""),D=a("");s((e=>{V.value=e.type||"",D.value=e.source||"",e.type&&(E.value="address"==e.type?0:1),uni.getStorageSync("selectAddressCallback")&&uni.removeStorage({key:"selectAddressCallback"})}));t((()=>{v({}).then((({data:e})=>{const a=[],s=[];e.forEach((e=>{"address"==e.type?a.push(e):s.push(e)})),D.value?I.value=0==E.value?a:s:I.value=e,z.value=!1})).catch((()=>{z.value=!1}))}));const G=()=>{g({url:"/app/pages/member/address_edit",param:{source:D.value}})};a([{text:l("delete"),style:{backgroundColor:"#F56C6C"}}]);return(e,a)=>{const s=h,t=w,v=y,E=b;return z.value?p("v-if",!0):(r(),c(s,{key:0,class:"address bg-[var(--page-bg-color)] min-h-[100vh]",style:_(e.themeColor())},{default:o((()=>[d(E,{"scroll-y":"true"},{default:o((()=>[I.value.length?(r(),c(s,{key:0,class:"sidebar-margin pt-[var(--top-m)]"},{default:o((()=>[(r(!0),n(i,null,u(I.value,((e,a)=>(r(),c(s,{class:"mb-[var(--top-m)] rounded-[var(--rounded-big)] overflow-hidden"},{default:o((()=>[d(s,{class:"flex flex-col card-template"},{default:o((()=>[d(s,{class:"flex-1 line-feed mr-[20rpx]",onClick:a=>(e=>{const a=uni.getStorageSync("selectAddressCallback");a&&(a.address_id=e.id,uni.setStorage({key:"selectAddressCallback",data:a,success(){g({url:a.back,mode:"redirectTo"})}}))})(e)},{default:o((()=>[d(s,{class:"flex items-center"},{default:o((()=>[d(s,{class:"text-[#333] text-[30rpx] leading-[34rpx] font-500"},{default:o((()=>[f(x(e.name),1)])),_:2},1024),d(t,{class:"text-[#333] text-[30rpx] ml-[10rpx]"},{default:o((()=>[f(x(m(k)(e.mobile)),1)])),_:2},1024)])),_:2},1024),d(s,{class:"mt-[16rpx] text-[26rpx] line-feed text-[var(--text-color-light9)] leading-[1.4]"},{default:o((()=>[f(x(e.full_address),1)])),_:2},1024)])),_:2},1032,["onClick"]),d(s,{class:"flex justify-between pt-[26rpx]"},{default:o((()=>[d(s,{class:"flex items-center text-[28rpx] leading-none",onClick:C((e=>(e=>{const a=I.value[e];a.is_default||(a.is_default=1,S(a).then((()=>{I.value.forEach(((a,s)=>{a.is_default&&(a.is_default=0),s==e&&(a.is_default=1)}))})).catch())})(a)),["stop"])},{default:o((()=>[d(t,{class:j(["iconfont !text-[28rpx] mr-[10rpx]",{"iconduigou text-primary":e.is_default,iconcheckbox_nol:!e.is_default}])},null,8,["class"]),f(" 设为默认 ")])),_:2},1032,["onClick"]),d(s,{class:"flex"},{default:o((()=>[d(s,{class:"text-[28rpx]",onClick:C((a=>{return s=e.id,void g({url:"/app/pages/member/address_edit",param:{id:s,source:D.value}});var s}),["stop"])},{default:o((()=>[d(t,{class:"nc-iconfont nc-icon-xiugaiV6xx shrink-0 text-[28rpx] mr-[4rpx]"}),f("编辑")])),_:2},1032,["onClick"]),d(s,{onClick:C((e=>(e=>{const a=I.value[e];A(a.id).then((()=>{I.value.splice(e,1)})).catch()})(a)),["stop"]),class:"ml-[40rpx] text-[28rpx]"},{default:o((()=>[d(t,{class:"nc-iconfont nc-icon-shanchu-yuangaizhiV6xx shrink-0 text-[28rpx] mr-[4rpx]"}),f("删除")])),_:2},1032,["onClick"])])),_:2},1024)])),_:2},1024)])),_:2},1024)])),_:2},1024)))),256))])),_:1})):p("v-if",!0),I.value.length?p("v-if",!0):(r(),c(F,{key:1,option:{tip:"暂无收货地址"}})),d(s,{class:"w-full footer"},{default:o((()=>[d(s,{class:"py-[var(--top-m)] px-[var(--sidebar-m)] footer w-full fixed bottom-0 left-0 right-0 box-border"},{default:o((()=>[d(v,{"hover-class":"none",class:"primary-btn-bg text-[#fff] h-[80rpx] leading-[80rpx] rounded-[100rpx] text-[26rpx] font-500",onClick:G},{default:o((()=>[f(x(m(l)("createAddress")),1)])),_:1})])),_:1})])),_:1})])),_:1})])),_:1},8,["style"]))}}}),[["__scopeId","data-v-6adcbc5a"]]);export{E as default};
