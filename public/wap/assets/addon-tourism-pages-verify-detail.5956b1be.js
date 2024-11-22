import{d as e,r as t,p as l,o as a,c as s,w as u,P as r,b as x,y as f,z as d,u as _,f as m,Q as p,n,i as c,g as o,h as i,F as y}from"./index-7bf68536.js";import{_ as v}from"./u-empty.68b4529f.js";import{_ as g}from"./loading-page.vue_vue_type_script_setup_true_lang.124ad65f.js";import{H as w}from"./tourism.3586533e.js";import"./u-icon.0c1c54c7.js";import"./_plugin-vue_export-helper.1b428a4d.js";import"./u-loading-page.566c330a.js";import"./u-loading-icon.b37701e7.js";import"./u-transition.cdf87992.js";const h=e({__name:"detail",setup(e){const h=t(!0),j=t(null);return l((e=>{w(e.code).then((e=>{e.data.order_id&&(j.value=e.data),h.value=!1})).catch((()=>{h.value=!1}))})),(e,t)=>{const l=c,w=o(i("u-empty"),v),b=o(i("loading-page"),g);return a(),s(l,{style:n(e.themeColor())},{default:u((()=>[h.value?m("v-if",!0):(a(),r(p,{key:0},[j.value?(a(),s(l,{key:0,class:"bg-[#f7f7f7] min-h-screen overflow-hidden"},{default:u((()=>[x(l,{class:"h-[30rpx]"}),x(l,{class:"mx-[30rpx]"},{default:u((()=>[x(l,{class:"bg-white px-[30rpx] py-[40rpx] rounded"},{default:u((()=>[x(l,{class:"text-center font-bold"},{default:u((()=>[f(d(j.value.verify_code),1)])),_:1}),x(l,{class:"text-center font-bold text-[#f00] mt-[10rpx] text-sm"},{default:u((()=>[f(d(j.value.verify_time?_(y)("used"):_(y)("waitUse")),1)])),_:1})])),_:1}),"way"==j.value.order_type?(a(),s(l,{key:0,class:"bg-white px-[30rpx] py-[30rpx] rounded mt-[20rpx]"},{default:u((()=>[x(l,{class:"flex text-sm"},{default:u((()=>[x(l,{class:"text-gray-400 w-[150rpx]"},{default:u((()=>[f(d(_(y)("wayInfo"))+"：",1)])),_:1}),x(l,null,{default:u((()=>[f(d(j.value.way.way_name),1)])),_:1})])),_:1}),x(l,{class:"flex text-sm mt-[20rpx]"},{default:u((()=>[x(l,{class:"text-gray-400 w-[150rpx]"},{default:u((()=>[f(d(_(y)("reserveTime"))+"：",1)])),_:1}),x(l,null,{default:u((()=>[f(d(j.value.start_time),1)])),_:1})])),_:1}),x(l,{class:"flex text-sm mt-[20rpx]"},{default:u((()=>[x(l,{class:"text-gray-400 w-[150rpx]"},{default:u((()=>[f(d(_(y)("touristNum"))+"：",1)])),_:1}),x(l,null,{default:u((()=>[f(d(j.value.num),1)])),_:1})])),_:1})])),_:1})):m("v-if",!0),"scenic"==j.value.order_type?(a(),s(l,{key:1,class:"bg-white px-[30rpx] py-[30rpx] rounded mt-[20rpx]"},{default:u((()=>[x(l,{class:"flex text-sm"},{default:u((()=>[x(l,{class:"text-gray-400 w-[150rpx]"},{default:u((()=>[f(d(_(y)("scenicInfo"))+"：",1)])),_:1}),x(l,null,{default:u((()=>[f(d(j.value.scenic.scenic_name),1)])),_:1})])),_:1}),x(l,{class:"flex text-sm mt-[20rpx]"},{default:u((()=>[x(l,{class:"text-gray-400 w-[150rpx]"},{default:u((()=>[f(d(_(y)("ticketInfo"))+"：",1)])),_:1}),x(l,null,{default:u((()=>[f(d(j.value.goods_name),1)])),_:1})])),_:1}),x(l,{class:"flex text-sm mt-[20rpx]"},{default:u((()=>[x(l,{class:"text-gray-400 w-[150rpx]"},{default:u((()=>[f(d(_(y)("reserveTime"))+"：",1)])),_:1}),x(l,null,{default:u((()=>[f(d(j.value.start_time),1)])),_:1})])),_:1}),x(l,{class:"flex text-sm mt-[20rpx]"},{default:u((()=>[x(l,{class:"text-gray-400 w-[150rpx]"},{default:u((()=>[f(d(_(y)("touristNum"))+"：",1)])),_:1}),x(l,null,{default:u((()=>[f(d(j.value.num),1)])),_:1})])),_:1})])),_:1})):m("v-if",!0),"hotel"==j.value.order_type?(a(),s(l,{key:2,class:"bg-white px-[30rpx] py-[30rpx] rounded mt-[20rpx]"},{default:u((()=>[x(l,{class:"flex text-sm"},{default:u((()=>[x(l,{class:"text-gray-400 w-[150rpx]"},{default:u((()=>[f(d(_(y)("orderNo"))+"：",1)])),_:1}),x(l,null,{default:u((()=>[f(d(j.value.hotel.hotel_name),1)])),_:1})])),_:1}),x(l,{class:"flex text-sm mt-[20rpx]"},{default:u((()=>[x(l,{class:"text-gray-400 w-[150rpx]"},{default:u((()=>[f(d(_(y)("roomInfo"))+"：",1)])),_:1}),x(l,null,{default:u((()=>[f(d(j.value.goods_name),1)])),_:1})])),_:1}),x(l,{class:"flex text-sm mt-[20rpx]"},{default:u((()=>[x(l,{class:"text-gray-400 w-[150rpx]"},{default:u((()=>[f(d(_(y)("hotelStartTime"))+"：",1)])),_:1}),x(l,null,{default:u((()=>[f(d(j.value.start_time),1)])),_:1})])),_:1}),x(l,{class:"flex text-sm mt-[20rpx]"},{default:u((()=>[x(l,{class:"text-gray-400 w-[150rpx]"},{default:u((()=>[f(d(_(y)("hotelEndTime"))+"：",1)])),_:1}),x(l,null,{default:u((()=>[f(d(j.value.end_time),1)])),_:1})])),_:1}),x(l,{class:"flex text-sm mt-[20rpx]"},{default:u((()=>[x(l,{class:"text-gray-400 w-[150rpx]"},{default:u((()=>[f(d(_(y)("hoteltNum"))+"：",1)])),_:1}),x(l,null,{default:u((()=>[f(d(j.value.num),1)])),_:1})])),_:1})])),_:1})):m("v-if",!0),x(l,{class:"bg-white px-[30rpx] py-[30rpx] rounded mt-[20rpx]"},{default:u((()=>[x(l,{class:"flex text-sm"},{default:u((()=>[x(l,{class:"text-gray-400 w-[150rpx]"},{default:u((()=>[f(d(_(y)("orderNo"))+"：",1)])),_:1}),x(l,null,{default:u((()=>[f(d(j.value.order_no),1)])),_:1})])),_:1}),x(l,{class:"flex text-sm mt-[20rpx]"},{default:u((()=>[x(l,{class:"text-gray-400 w-[150rpx]"},{default:u((()=>[f(d(_(y)("createTime"))+"：",1)])),_:1}),x(l,null,{default:u((()=>[f(d(j.value.create_time),1)])),_:1})])),_:1}),x(l,{class:"flex text-sm mt-[20rpx]"},{default:u((()=>[x(l,{class:"text-gray-400 w-[150rpx]"},{default:u((()=>[f(d(_(y)("payTime"))+"：",1)])),_:1}),x(l,null,{default:u((()=>[f(d(j.value.pay_time),1)])),_:1})])),_:1}),0!=j.value.verify_time?(a(),s(l,{key:0,class:"flex text-sm mt-[20rpx]"},{default:u((()=>[x(l,{class:"text-gray-400 w-[150rpx]"},{default:u((()=>[f(d(_(y)("verifyTime"))+"：",1)])),_:1}),x(l,null,{default:u((()=>[f(d(j.value.verify_time),1)])),_:1})])),_:1})):m("v-if",!0)])),_:1})])),_:1})])),_:1})):(a(),s(l,{key:1,class:"w-screen h-screen flex flex-col justify-center items-center"},{default:u((()=>[x(w,{icon:e.img("static/resource/images/order_empty.png"),text:_(y)("verifyDetailEmpty")},null,8,["icon","text"])])),_:1}))],64)),x(b,{loading:h.value},null,8,["loading"])])),_:1},8,["style"])}}});export{h as default};