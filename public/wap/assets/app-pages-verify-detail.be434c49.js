import{d as e,r as l,j as a,a9 as t,X as s,o as r,c as d,w as x,E as u,b as n,G as f,F as p,u as m,f as i,n as o,i as c,g as _,h as b,x as g,b8 as y,V as v,y as j,C as h,N as w}from"./index-905183d4.js";import{_ as k}from"./u-loading-page.7aa0a449.js";import{b as C}from"./verify.a1cbf2dc.js";import"./u-loading-icon.c376267d.js";import"./_plugin-vue_export-helper.1b428a4d.js";import"./u-transition.dbaca185.js";const F=e({__name:"detail",setup(e){const F=l(!0);let z=l("");a((e=>{e.code&&(z.value=e.code)})),t((()=>{s()&&G()}));let E=l({});const G=()=>{F.value=!0,C(z.value).then((e=>{E.value=e.data,F.value=!1}))};return(e,l)=>{const a=h,t=c,s=w,C=_(b("u-loading-page"),k);return r(),d(t,{style:o(e.themeColor()),class:"bg-[#f8f8f8] min-h-[100vh] overflow-hidden"},{default:x((()=>[F.value?i("v-if",!0):(r(),u(f,{key:0},[n(t,{class:"bg-[#fff] rounded-[16rpx] mt-[30rpx] mx-[30rpx]"},{default:x((()=>[(r(!0),u(f,null,p(m(E).value.list,((e,l)=>(r(),d(t,{class:"py-[10rpx] flex flex-col",key:l},{default:x((()=>[n(t,{class:"mb-[20rpx]"},{default:x((()=>[n(a,{class:"px-[10rpx] text-sm flex items-center mt-[10rpx] ml-[16rpx]"},{default:x((()=>[g("订单明细")])),_:1})])),_:1}),y("span",{class:"xian border-[#e7e7e7] border-solid border-0 border-b-[4rpx] w-[690rpx]"}),n(t,{class:"flex mt-[40rpx] px-[20rpx]"},{default:x((()=>[e.cover?(r(),d(s,{key:0,class:"w-[120rpx] h-[120rpx]",mode:"aspectFit",src:m(v)(e.cover)},null,8,["src"])):(r(),d(s,{key:1,class:"w-[120rpx] h-[120rpx]",mode:"aspectFit",src:m(v)("addon/tourism/tourism/member/hotel.png")},null,8,["src"])),n(t,{class:"flex flex-col flex-1 ml-[10rpx]"},{default:x((()=>[n(t,{class:"multi-hidden leading-[1.2]"},{default:x((()=>[g(j(e.name),1)])),_:2},1024),n(t,{class:"multi-hidden leading-[1.2] mt-[50rpx] text-xs flex"},{default:x((()=>[n(t,{class:"ml-auto text-[#909399] mr-[30rpx] font-normal"},{default:x((()=>[g("×1")])),_:1})])),_:1})])),_:2},1024)])),_:2},1024)])),_:2},1024)))),128)),n(t,{class:"border-0 border-b-[4rpx] leading-[1] border-[#e7e7e7] border-solid mx-[20rpx] mt-[20rpx]"}),(r(!0),u(f,null,p(m(E).value.content.diy,((e,l)=>(r(),d(t,{key:l,class:"ml-[40rpx] mr-[30rpx] text-[#838383] text-sm"},{default:x((()=>[(r(!0),u(f,null,p(e.list,((e,l)=>(r(),d(t,{class:"flex items-center leading-[1] mt-[40rpx] justify-between",key:l},{default:x((()=>[n(a,null,{default:x((()=>[g(j(e.title),1)])),_:2},1024),n(t,{class:"ml-[60rpx]"},{default:x((()=>[g(j(e.value),1)])),_:2},1024)])),_:2},1024)))),128)),n(t,{class:"flex items-center leading-[1] mt-[40rpx] justify-between pb-[30rpx]"},{default:x((()=>[n(a,null,{default:x((()=>[g("创建时间")])),_:1}),n(t,{class:"ml-[60rpx]"},{default:x((()=>[g("2024-05-28 10:11:03")])),_:1})])),_:1})])),_:2},1024)))),128))])),_:1}),n(t,{class:"bg-[#fff] rounded-[16rpx] mt-[20rpx] mx-[30rpx]"},{default:x((()=>[(r(!0),u(f,null,p(m(E).value.list,((e,l)=>(r(),d(t,{class:"py-[10rpx] flex flex-col",key:l},{default:x((()=>[n(t,{class:"mb-[20rpx]"},{default:x((()=>[n(a,{class:"px-[10rpx] text-sm flex items-center mt-[10rpx] ml-[17rpx]"},{default:x((()=>[g("核销信息")])),_:1})])),_:1}),y("span",{class:"xian border-[#e7e7e7] border-solid border-0 border-b-[4rpx] w-[690rpx]"}),n(t,{class:"ml-[10rpx] mr-[30rpx] text-[#838383] text-sm pb-[30rpx]"},{default:x((()=>[n(t,{class:"flex items-center leading-[1] mt-[50rpx] justify-between"},{default:x((()=>[n(a,{class:"ml-[30rpx]"},{default:x((()=>[g("核销类型")])),_:1}),n(t,null,{default:x((()=>[g(j(m(E).type_name),1)])),_:1})])),_:1}),n(t,{class:"flex items-center leading-[1] mt-[50rpx] justify-between"},{default:x((()=>[n(a,{class:"ml-[30rpx]"},{default:x((()=>[g("核销状态")])),_:1}),n(t,null,{default:x((()=>[g("已核销")])),_:1})])),_:1}),n(t,{class:"flex items-center leading-[1] mt-[50rpx] justify-between"},{default:x((()=>[n(a,{class:"ml-[30rpx]"},{default:x((()=>[g("核销人员")])),_:1}),n(t,null,{default:x((()=>[g(j(m(E).member?m(E).member.nickname:"--"),1)])),_:1})])),_:1}),n(t,{class:"flex items-center leading-[1] mt-[50rpx] justify-between"},{default:x((()=>[n(a,{class:"ml-[30rpx]"},{default:x((()=>[g("核销时间")])),_:1}),n(t,null,{default:x((()=>[g(j(m(E).create_time),1)])),_:1})])),_:1}),(r(!0),u(f,null,p(m(E).value.content.fixed,((e,l)=>(r(),d(t,{class:"flex items-center leading-[1] mt-[50rpx]"},{default:x((()=>[n(a,null,{default:x((()=>[g(j(e.title),1)])),_:2},1024),n(t,null,{default:x((()=>[g(j(e.value),1)])),_:2},1024)])),_:2},1024)))),256))])),_:2},1024)])),_:2},1024)))),128))])),_:1})],64)),n(C,{loading:F.value,"loading-text":"",loadingColor:"var(--primary-color)",iconSize:"35"},null,8,["loading"])])),_:1},8,["style"])}}});export{F as default};