import{d as e,r as t,o as l,c as a,w as s,E as r,b as u,x,y as d,u as f,f as n,G as i,n as c,I as o,t as p,i as m,g as _,h as y,C as v,a as g,V as h}from"./index-905183d4.js";import{_ as w}from"./u-button.d3798ecb.js";import{_ as b}from"./u-input.07f64251.js";import{_ as k}from"./u-empty.09c683e5.js";import{_ as j}from"./u-loading-page.7aa0a449.js";import{G as T,H as C,I}from"./tourism.31e9949d.js";import"./u-loading-icon.c376267d.js";import"./_plugin-vue_export-helper.1b428a4d.js";import"./u-icon.86a2aad0.js";import"./u-transition.dbaca185.js";const N=e({__name:"index",setup(e){const N=t(!0),V=t(!1),S=t(""),E=t(!1),P=t(null);T().then((()=>{V.value=!0,N.value=!1})).catch((()=>{N.value=!1}));const R=()=>{uni.$u.test.isEmpty(S.value)?o({title:p("inputPlaceholder"),icon:"none"}):C(S.value).then((e=>{Object.values(e.data).length?(P.value=e.data,S.value=""):o({title:p("notSearchResult"),icon:"none"})})).catch((()=>{o({title:p("notSearchResult"),icon:"none"})}))},G=()=>{E.value||(E.value=!0,I(P.value.verify_code).then((()=>{P.value=null,E.value=!1})).catch((()=>{E.value=!1})))};return(e,t)=>{const o=m,T=_(y("u-button"),w),C=_(y("u-input"),b),I=v,E=_(y("u-empty"),k),O=_(y("u-loading-page"),j);return l(),a(o,{style:c(e.themeColor())},{default:s((()=>[N.value?n("v-if",!0):(l(),r(i,{key:0},[V.value?(l(),a(o,{key:0,class:"bg-[#f7f7f7] min-h-screen overflow-hidden"},{default:s((()=>[u(o,{class:"h-[30rpx]"}),P.value?(l(),a(o,{key:0,class:"mx-[30rpx]"},{default:s((()=>[u(o,{class:"bg-white px-[30rpx] py-[40rpx] rounded"},{default:s((()=>[u(o,{class:"text-center font-bold"},{default:s((()=>[x(d(P.value.verify_code),1)])),_:1}),u(o,{class:"text-center font-bold text-[#f00] mt-[10rpx] text-sm"},{default:s((()=>[x(d(P.value.verify_time?f(p)("used"):f(p)("waitUse")),1)])),_:1})])),_:1}),"way"==P.value.order_type?(l(),a(o,{key:0,class:"bg-white px-[30rpx] py-[30rpx] rounded mt-[20rpx]"},{default:s((()=>[u(o,{class:"flex text-sm"},{default:s((()=>[u(o,{class:"text-gray-400 w-[150rpx]"},{default:s((()=>[x(d(f(p)("wayInfo"))+"：",1)])),_:1}),u(o,null,{default:s((()=>[x(d(P.value.way.way_name),1)])),_:1})])),_:1}),u(o,{class:"flex text-sm mt-[20rpx]"},{default:s((()=>[u(o,{class:"text-gray-400 w-[150rpx]"},{default:s((()=>[x(d(f(p)("reserveTime"))+"：",1)])),_:1}),u(o,null,{default:s((()=>[x(d(P.value.start_time),1)])),_:1})])),_:1}),u(o,{class:"flex text-sm mt-[20rpx]"},{default:s((()=>[u(o,{class:"text-gray-400 w-[150rpx]"},{default:s((()=>[x(d(f(p)("touristNum"))+"：",1)])),_:1}),u(o,null,{default:s((()=>[x(d(P.value.num),1)])),_:1})])),_:1})])),_:1})):n("v-if",!0),"scenic"==P.value.order_type?(l(),a(o,{key:1,class:"bg-white px-[30rpx] py-[30rpx] rounded mt-[20rpx]"},{default:s((()=>[u(o,{class:"flex text-sm"},{default:s((()=>[u(o,{class:"text-gray-400 w-[150rpx]"},{default:s((()=>[x(d(f(p)("scenicInfo"))+"：",1)])),_:1}),u(o,null,{default:s((()=>[x(d(P.value.scenic.scenic_name),1)])),_:1})])),_:1}),u(o,{class:"flex text-sm mt-[20rpx]"},{default:s((()=>[u(o,{class:"text-gray-400 w-[150rpx]"},{default:s((()=>[x(d(f(p)("ticketInfo"))+"：",1)])),_:1}),u(o,null,{default:s((()=>[x(d(P.value.goods_name),1)])),_:1})])),_:1}),u(o,{class:"flex text-sm mt-[20rpx]"},{default:s((()=>[u(o,{class:"text-gray-400 w-[150rpx]"},{default:s((()=>[x(d(f(p)("reserveTime"))+"：",1)])),_:1}),u(o,null,{default:s((()=>[x(d(P.value.start_time),1)])),_:1})])),_:1}),u(o,{class:"flex text-sm mt-[20rpx]"},{default:s((()=>[u(o,{class:"text-gray-400 w-[150rpx]"},{default:s((()=>[x(d(f(p)("touristNum"))+"：",1)])),_:1}),u(o,null,{default:s((()=>[x(d(P.value.num),1)])),_:1})])),_:1})])),_:1})):n("v-if",!0),"hotel"==P.value.order_type?(l(),a(o,{key:2,class:"bg-white px-[30rpx] py-[30rpx] rounded mt-[20rpx]"},{default:s((()=>[u(o,{class:"flex text-sm"},{default:s((()=>[u(o,{class:"text-gray-400 w-[150rpx]"},{default:s((()=>[x(d(f(p)("orderNo"))+"：",1)])),_:1}),u(o,null,{default:s((()=>[x(d(P.value.hotel.hotel_name),1)])),_:1})])),_:1}),u(o,{class:"flex text-sm mt-[20rpx]"},{default:s((()=>[u(o,{class:"text-gray-400 w-[150rpx]"},{default:s((()=>[x(d(f(p)("roomInfo"))+"：",1)])),_:1}),u(o,null,{default:s((()=>[x(d(P.value.goods_name),1)])),_:1})])),_:1}),u(o,{class:"flex text-sm mt-[20rpx]"},{default:s((()=>[u(o,{class:"text-gray-400 w-[150rpx]"},{default:s((()=>[x(d(f(p)("hotelStartTime"))+"：",1)])),_:1}),u(o,null,{default:s((()=>[x(d(P.value.start_time),1)])),_:1})])),_:1}),u(o,{class:"flex text-sm mt-[20rpx]"},{default:s((()=>[u(o,{class:"text-gray-400 w-[150rpx]"},{default:s((()=>[x(d(f(p)("hotelEndTime"))+"：",1)])),_:1}),u(o,null,{default:s((()=>[x(d(P.value.end_time),1)])),_:1})])),_:1}),u(o,{class:"flex text-sm mt-[20rpx]"},{default:s((()=>[u(o,{class:"text-gray-400 w-[150rpx]"},{default:s((()=>[x(d(f(p)("hoteltNum"))+"：",1)])),_:1}),u(o,null,{default:s((()=>[x(d(P.value.num),1)])),_:1})])),_:1})])),_:1})):n("v-if",!0),u(o,{class:"bg-white px-[30rpx] py-[30rpx] rounded mt-[20rpx]"},{default:s((()=>[u(o,{class:"flex text-sm"},{default:s((()=>[u(o,{class:"text-gray-400 w-[150rpx]"},{default:s((()=>[x(d(f(p)("orderNo"))+"：",1)])),_:1}),u(o,null,{default:s((()=>[x(d(P.value.order_no),1)])),_:1})])),_:1}),u(o,{class:"flex text-sm mt-[20rpx]"},{default:s((()=>[u(o,{class:"text-gray-400 w-[150rpx]"},{default:s((()=>[x(d(f(p)("createTime"))+"：",1)])),_:1}),u(o,null,{default:s((()=>[x(d(P.value.create_time),1)])),_:1})])),_:1}),u(o,{class:"flex text-sm mt-[20rpx]"},{default:s((()=>[u(o,{class:"text-gray-400 w-[150rpx]"},{default:s((()=>[x(d(f(p)("payTime"))+"：",1)])),_:1}),u(o,null,{default:s((()=>[x(d(P.value.pay_time),1)])),_:1})])),_:1}),0!=P.value.verify_time?(l(),a(o,{key:0,class:"flex text-sm mt-[20rpx]"},{default:s((()=>[u(o,{class:"text-gray-400 w-[150rpx]"},{default:s((()=>[x(d(f(p)("verifyTime"))+"：",1)])),_:1}),u(o,null,{default:s((()=>[x(d(P.value.verify_time),1)])),_:1})])),_:1})):n("v-if",!0)])),_:1}),0==P.value.verify_time?(l(),a(o,{key:3,class:"mt-[30rpx]"},{default:s((()=>[u(T,{text:f(p)("confirmVerify"),type:"primary",shape:"circle",onClick:G},null,8,["text"])])),_:1})):n("v-if",!0),u(o,{class:"mt-[30rpx]"},{default:s((()=>[u(T,{text:f(p)("verifyOther"),type:"primary",shape:"circle",onClick:t[0]||(t[0]=e=>P.value=null),plain:!0},null,8,["text"])])),_:1})])),_:1})):(l(),a(o,{key:1,class:"bg-white px-[30rpx] py-[50rpx] mx-[30rpx] rounded"},{default:s((()=>[u(o,{class:"text-center mt-[30rpx]"},{default:s((()=>[x(d(f(p)("verifyTitle")),1)])),_:1}),u(o,{class:"my-[60rpx]"},{default:s((()=>[u(C,{placeholder:f(p)("inputPlaceholder"),border:"surround",inputAlign:"center",modelValue:S.value,"onUpdate:modelValue":t[1]||(t[1]=e=>S.value=e)},null,8,["placeholder","modelValue"])])),_:1}),u(T,{text:f(p)("search"),type:"primary",shape:"circle",disabled:!S.value,onClick:R},null,8,["text","disabled"])])),_:1})),u(o,{class:"text-center mt-[20rpx]"},{default:s((()=>[u(o,{onClick:t[2]||(t[2]=e=>f(g)({url:"/addon/tourism/pages/verify/record"}))},{default:s((()=>[u(I,{class:"text-primary text-sm"},{default:s((()=>[x(d(f(p)("verifyRecord")),1)])),_:1})])),_:1})])),_:1})])),_:1})):(l(),a(o,{key:1,class:"w-screen h-screen flex flex-col justify-center items-center"},{default:s((()=>[u(E,{icon:f(h)("static/resource/images/order_empty.png"),text:f(p)("notIsVerifier")},null,8,["icon","text"])])),_:1}))],64)),u(O,{loading:N.value,"loading-text":"",loadingColor:"var(--primary-color)",iconSize:"35"},null,8,["loading"])])),_:1},8,["style"])}}});export{N as default};
