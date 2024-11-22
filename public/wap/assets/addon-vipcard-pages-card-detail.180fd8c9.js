import{d as e,r as a,l as t,p as l,s,J as d,E as r,x as i,o as c,c as o,w as n,u,b as p,y as _,z as f,f as x,P as m,a7 as v,Q as g,n as y,H as h,a as b,g as w,h as k,i as j,D as C,B as F,F as S}from"./index-7bf68536.js";import{_ as D}from"./u-swiper.f792d47e.js";import{_ as I}from"./u-parse.525658f5.js";import{_ as B}from"./u-button.359d7329.js";import{_ as L}from"./loading-page.vue_vue_type_script_setup_true_lang.124ad65f.js";import{c as N,d as z,e as E,s as H}from"./vipcard.fb0aea23.js";import{_ as P}from"./_plugin-vue_export-helper.1b428a4d.js";import"./u-loading-icon.b37701e7.js";import"./u-icon.0c1c54c7.js";import"./u-loading-page.566c330a.js";import"./u-transition.cdf87992.js";const T=P(e({__name:"detail",setup(e){let P=a([]),T=a([]),G=a(!0);const J=t();let K={goods:[{num:1,goods_id:""}]},M=a(""),O=a([]);l((e=>{M.value=e.id,G.value=!0,s()&&J.getMemberInfo(),N(e.id).then((e=>{T.value=e.data,d({title:T.value.goods_name}),P.value=[],T.value.goods_image?(T.value.goods_image=T.value.goods_image.split(","),T.value.goods_image.forEach(((e,a)=>{P.value.push(r(e))}))):P.value.push(r(T.value.goods_cover)),O.value=T.value.item,G.value=!1}))}));const Q=a(0);i((()=>{s()&&setTimeout((function(){V()}),700)}));const V=()=>{z({goods_id:M.value,type:"vipcard"}).then((e=>{e.data&&(Q.value=e.data.id),e.data||(Q.value=0)}))};return(e,a)=>{const t=w(k("u-swiper"),D),l=j,d=C,i=F,N=w(k("u-parse"),I),z=w(k("u-button"),B),J=w(k("loading-page"),L);return c(),o(l,{style:y(e.themeColor())},{default:n((()=>[u(G)?x("v-if",!0):(c(),o(l,{key:0,class:"bg-[#f7f7f7] min-h-screen overflow-hidden px-[24rpx] pt-[20rpx]"},{default:n((()=>[p(t,{list:u(P),height:"380rpx",radius:"18rpx"},null,8,["list"]),p(l,{class:"chunk-wrap pt-4 pb-3 rounded-lg relative mt-[24rpx]"},{default:n((()=>[p(l,{class:"font-bold multi-hidden"},{default:n((()=>[_(f(u(T).goods_name),1)])),_:1}),p(l,{class:"flex items-center mt-2 text-[#F55246] text-base font-bold"},{default:n((()=>[p(d,{class:"text-xs"},{default:n((()=>[_("￥")])),_:1}),_(f(u(T).price),1)])),_:1}),p(l,{class:"flex items-center mt-[16rpx] justify-between"},{default:n((()=>[p(d,{class:"text-sm text-[#888]"},{default:n((()=>[_(f(u(S)("soldOut"))+" "+f(u(T).sale_num),1)])),_:1}),p(d,{class:"text-sm text-[#888]"},{default:n((()=>[_(f(u(S)("create"))+"："+f(0==u(T).verify_validity_type&&u(S)("perpetual")||1==u(T).verify_validity_type&&u(T).verify_validity+u(S)("day")||2==u(T).verify_validity_type&&u(T).verify_validity),1)])),_:1})])),_:1})])),_:1}),p(l,{class:"chunk-wrap pt-[34rpx] scheduling rounded-lg"},{default:n((()=>[p(l,{class:"flex justify-between items-center",onClick:a[0]||(a[0]=a=>e.calendarShow=!0)},{default:n((()=>[_(f(u(S)("packageIncluded")),1)])),_:1}),"timecard"==u(T).card_type||"commoncard"==u(T).card_type?(c(),o(l,{key:0,class:"text-xs text-[#888] mt-2"},{default:n((()=>[_(f("commoncard"==u(T).card_type?u(S)("hitCount")+u(T).common_num+" ,":"")+" "+f("timecard"==u(T).card_type?u(S)("unlimitedNumberTimes"):"")+" "+f(u(S)("periodValidity"))+f(0==u(T).verify_validity_type&&u(S)("perpetual")||1==u(T).verify_validity_type&&u(T).verify_validity+u(S)("day")||2==u(T).verify_validity_type&&u(T).verify_validity),1)])),_:1})):x("v-if",!0),p(l,{class:"py-[20rpx]"},{default:n((()=>[(c(!0),m(g,null,v(u(O),((e,a)=>(c(),o(l,{class:"flex mb-[30rpx]",onClick:a=>{b({url:"/addon/vipcard/pages/service/detail",param:{id:e.relate_goods_id}})},key:e.relate_goods_id},{default:n((()=>[p(i,{class:"w-[162rpx] h-[184rpx] mr-[20rpx] rounded-md",src:u(r)(e.goods_cover),mode:"aspectFit"},null,8,["src"]),p(l,{class:"flex flex-col flex-1 py-2 relative"},{default:n((()=>[p(l,{class:"text-sm font-bold truncate"},{default:n((()=>[_(f(e.goods_name),1)])),_:2},1024),"oncecard"==u(T).card_type?(c(),o(l,{key:0,class:"text-[#888] text-xs mt-2 flex items-center justify-between"},{default:n((()=>[p(d,null,{default:n((()=>[_(f(u(S)("usable")),1)])),_:1}),p(d,null,{default:n((()=>[_("x"+f(e.num),1)])),_:2},1024)])),_:2},1024)):x("v-if",!0)])),_:2},1024)])),_:2},1032,["onClick"])))),128))])),_:1})])),_:1}),p(l,{class:"chunk-wrap pt-[34rpx] pb-[24rpx] scheduling rounded-lg"},{default:n((()=>[p(l,{class:"text-center text-[34rpx] font-bold"},{default:n((()=>[_("-- "+f(u(S)("purchaseNotes"))+" --",1)])),_:1}),p(l,{class:"scheduling-content mt-2"},{default:n((()=>[u(T).buy_info?(c(),o(N,{key:0,content:u(T).buy_info,tagStyle:{img:"vertical-align: top;"}},null,8,["content"])):(c(),o(l,{key:1},{default:n((()=>[_(f(u(S)("noPurchaseNotes")),1)])),_:1}))])),_:1})])),_:1}),p(l,{class:"chunk-wrap pt-[34rpx] pb-[24rpx] scheduling rounded-lg"},{default:n((()=>[p(l,{class:"text-center text-[34rpx] font-bold"},{default:n((()=>[_("-- "+f(u(S)("cardDetail"))+" --",1)])),_:1}),p(l,{class:"scheduling-content mt-2"},{default:n((()=>[u(T).goods_content?(c(),o(N,{key:0,content:u(T).goods_content,tagStyle:{img:"vertical-align: top;"}},null,8,["content"])):(c(),o(l,{key:1},{default:n((()=>[_(f(u(S)("noCardDetail")),1)])),_:1}))])),_:1})])),_:1}),p(l,{class:"h-[148rpx] tab-bar-placeholder w-screen"}),p(l,{class:"flex justify-between bg-white px-3 tab-bar fixed bottom-0 left-0 right-0"},{default:n((()=>[p(l,{class:"flex items-center"},{default:n((()=>[p(l,{class:"flex flex-col items-center mr-[44rpx]",onClick:a[1]||(a[1]=e=>u(b)({url:"/addon/vipcard/pages/index",mode:"reLaunch"}))},{default:n((()=>[p(i,{class:"w-[44rpx] h-[44rpx]",src:u(r)("addon/vipcard/vipcard/service/index.png"),mode:"aspectFill"},null,8,["src"]),p(d,{class:"text-xs whitespace-nowrap text-[#454545] mt-1"},{default:n((()=>[_(f(u(S)("index")),1)])),_:1})])),_:1}),p(l,{class:"flex flex-col items-center mr-[44rpx]"},{default:n((()=>[p(i,{class:"w-[44rpx] h-[44rpx]",src:u(r)("addon/vipcard/vipcard/service/service.png"),mode:"aspectFill"},null,8,["src"]),p(d,{class:"text-xs whitespace-nowrap text-[#454545] mt-1"},{default:n((()=>[_(f(u(S)("service")),1)])),_:1})])),_:1}),p(l,{class:"flex flex-col items-center mr-[44rpx]",onClick:a[2]||(a[2]=e=>(e=>{if(!s())return h().setLoginBack({url:"/addon/vipcard/pages/card/detail",param:{id:e.goods_id}}),!1;Q.value>0?E(Q.value).then((()=>{V()})):H({goods_id:M.value,type:"vipcard"}).then((()=>{V()}))})(u(T)))},{default:n((()=>[Q.value>0?(c(),o(i,{key:0,class:"w-[44rpx] h-[44rpx]",src:u(r)("addon/vipcard/vipcard/service/select_collect.png"),mode:"aspectFill"},null,8,["src"])):(c(),o(i,{key:1,class:"w-[44rpx] h-[44rpx]",src:u(r)("addon/vipcard/vipcard/service/collect.png"),mode:"aspectFill"},null,8,["src"])),p(d,{class:"text-xs whitespace-nowrap text-[#454545] mt-1"},{default:n((()=>[_(f(u(S)("collect")),1)])),_:1})])),_:1})])),_:1}),p(z,{text:u(S)("buy"),class:"flex-1 !rounded-3xl !ml-1",type:"primary",size:"16",onClick:a[3]||(a[3]=e=>(e=>{if(!s())return h().setLoginBack({url:"/addon/vipcard/pages/card/detail",param:{id:e.goods_id}}),!1;K.goods[0].goods_id=e.goods_id,uni.setStorageSync("vipcardCreateData",K),b({url:"/addon/vipcard/pages/order/payment"})})(u(T)))},null,8,["text"])])),_:1})])),_:1})),p(J,{loading:u(G)},null,8,["loading"])])),_:1},8,["style"])}}}),[["__scopeId","data-v-14ffb89c"]]);export{T as default};