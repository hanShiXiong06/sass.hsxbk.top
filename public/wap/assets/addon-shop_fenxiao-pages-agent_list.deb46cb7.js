import{b9 as e,d as t,r,o as a,c as s,w as l,u as o,E as n,b as d,x as c,y as p,f as x,H as f,G as m,F as u,n as i,a5 as _,a6 as g,N as b,C as y,i as v,g as h,h as k,V as w,$ as j,t as C}from"./index-905183d4.js";import{_ as F}from"./u-loading-page.7aa0a449.js";import{M as z}from"./mescroll-body.b8d008ed.js";import{M as I}from"./mescroll-empty.f9bce990.js";import{u as M}from"./useMescroll.26ccf5de.js";import{a as S}from"./fenxiao.dacba751.js";import{_ as D}from"./_plugin-vue_export-helper.1b428a4d.js";import"./u-loading-icon.c376267d.js";import"./u-transition.dbaca185.js";import"./mescroll-uni-option.0af4878d.js";import"./mescroll-i18n.6025c811.js";/* empty css                                                                       */const E=D(t({__name:"agent_list",setup(t){const{mescrollInit:D,downCallback:E,getMescroll:N}=M(g,_);let U=r([]),A=r({member:{}}),B=r({}),G=r(!0),H=r(!0);G.value=!0,S().then((e=>{A.value=e.data,G.value=!1})).catch((()=>{G.value=!1}));const R=t=>{let r={is_settlement:V.value,page:t.num,limit:t.size};var a;H.value=!0,(a=r,e.get("shop_fenxiao/order/agent",a)).then((e=>{let r=e.data.data;1==t.num&&(U.value=[]),U.value=U.value.concat(r),H.value=!1,t.endSuccess(r.length)})).catch((()=>{H.value=!1,t.endErr()}))},T=()=>{e.get("shop_fenxiao/order/agent/stat").then((e=>{B.value=e.data}))};T();let V=r(1);const $=e=>{V.value=e,U.value=[],N().resetUpScroll(),T()};return(e,t)=>{const r=b,_=y,g=v,M=h(k("u-loading-page"),F);return a(),s(g,{class:"bg-[#f8f8f8] min-h-[100vh]",style:i(e.themeColor())},{default:l((()=>[o(G)?x("v-if",!0):(a(),n(m,{key:0},[d(g,{class:"flex items-center wrap-bg p-[50rpx]"},{default:l((()=>[o(A).member&&o(A).member.headimg?(a(),s(r,{key:0,class:"w-[90rpx] h-[90rpx] rounded-full mr-[20rpx]",src:o(w)(o(A).member.headimg),mode:"aspectFill"},null,8,["src"])):(a(),s(r,{key:1,class:"w-[90rpx] h-[90rpx] rounded-full mr-[20rpx]",src:o(w)("addon/shop_fenxiao/index/head.png"),mode:"aspectFill"},null,8,["src"])),d(g,{class:"flex flex-col"},{default:l((()=>[d(g,{class:"flex items-center"},{default:l((()=>[d(_,{class:"truncate text-[#fff] max-w-[380rpx] mr-[10rpx] text-[28rpx]"},{default:l((()=>[c(p(o(A).member.nickname||o(A).member.username),1)])),_:1}),o(A).agent_level?(a(),s(_,{key:0,class:"text-[#fff] text-[24rpx] border-[2rpx] border-solid border-[#fff] px-[6rpx] py-[8rpx] whitespace-nowrap"},{default:l((()=>[c(p(o(A).agent_level.name),1)])),_:1})):x("v-if",!0)])),_:1}),o(A).agent_level?(a(),s(_,{key:0,class:"text-[#fff] text-[24rpx] mt-[14rpx]"},{default:l((()=>[c("享"+p(Number(o(A).agent_level.discount))+"折优惠",1)])),_:1})):(a(),s(_,{key:1,class:"text-[#fff] text-[24rpx] mt-[14rpx]"},{default:l((()=>[c("您还不是渠道代理商")])),_:1}))])),_:1})])),_:1}),d(g,{class:"bg-[#fff] sticky top-[0] z-10"},{default:l((()=>[d(g,{class:"flex whitespace-nowrap justify-around"},{default:l((()=>[d(g,{class:f(["text-center justify-center flex flex-1 h-[90rpx] mx-[60rpx] items-center border-0 border-b-[2rpx] border-solid border-[transparent]",{"!border-[var(--primary-color)] text-[var(--primary-color)]":1==o(V)}]),onClick:t[0]||(t[0]=e=>$(1))},{default:l((()=>[d(_,{class:"text-[28rpx]"},{default:l((()=>[c("已结算")])),_:1}),d(_,{class:"text-[28rpx]"},{default:l((()=>[c("("+p(o(j)(o(B).agent_commission))+")",1)])),_:1})])),_:1},8,["class"]),d(g,{class:f(["text-sm text-center justify-center flex flex-1 h-[90rpx] mx-[60rpx] items-center border-0 border-b-[2rpx] border-solid border-[transparent]",{"!border-[var(--primary-color)] text-[var(--primary-color)]":0==o(V)}]),onClick:t[1]||(t[1]=e=>$(0))},{default:l((()=>[d(_,{class:"text-[28rpx]"},{default:l((()=>[c("待结算")])),_:1}),d(_,{class:"text-[28rpx]"},{default:l((()=>[c("("+p(o(j)(o(B).unsettlement))+")",1)])),_:1})])),_:1},8,["class"])])),_:1})])),_:1}),d(z,{ref:"mescrollRef",onInit:o(D),onDown:o(E),onUp:R},{default:l((()=>[(a(!0),n(m,null,u(o(U),((e,t)=>(a(),s(g,{class:"ranking-list bg-[#fff] rounded-[16rpx] mx-[24rpx] mt-[24rpx]",key:t},{default:l((()=>[d(g,{class:"bg-[#fff] rounded-[10rpx] p-[30rpx] mb-[18rpx]"},{default:l((()=>[d(g,{class:"flex items-center justify-between text-[28rpx]"},{default:l((()=>[d(_,null,{default:l((()=>[c("订单号："+p(e.order_no),1)])),_:2},1024),d(_,{class:"text-[var(--primary-color)]"},{default:l((()=>[c(p(e.is_settlement?"已结算":"未结算"),1)])),_:2},1024)])),_:2},1024),d(g,{class:"flex pt-[40rpx]"},{default:l((()=>[e.order_goods&&e.order_goods.goods_image_thumb_mid?(a(),s(r,{key:0,class:"w-[160rpx] h-[160rpx] rounded-[10rpx]",src:o(w)(e.order_goods.goods_image_thumb_mid),mode:"aspectFill"},null,8,["src"])):(a(),s(r,{key:1,class:"w-[160rpx] h-[160rpx] rounded-[10rpx]",src:o(w)("addon/shop_fenxiao/index/commission_rank.png"),mode:"aspectFill"},null,8,["src"])),d(g,{class:"flex flex-1 flex-col ml-[20rpx]"},{default:l((()=>[d(g,{class:"text-[28rpx] leading-[1.5]"},{default:l((()=>[d(_,null,{default:l((()=>[c(p(e.order_goods.goods_name.length>21?e.order_goods.goods_name.substr(0,21)+"...":e.order_goods.goods_name),1)])),_:2},1024),d(g,{class:"text-[#999] ml-[10rpx] inline-block whitespace-nowrap"},{default:l((()=>[d(g,{class:"flex items-center"},{default:l((()=>[d(_,null,{default:l((()=>[c("(购买人：")])),_:1}),d(g,{class:"max-w-[120rpx] truncate"},{default:l((()=>[c(p(e.shop_order.member.nickname||"-"),1)])),_:2},1024),d(_,null,{default:l((()=>[c(")")])),_:1})])),_:2},1024)])),_:2},1024)])),_:2},1024),d(g,{class:"text-[var(--primary-color)] font-bold mt-[20rpx] text-[28rpx]"},{default:l((()=>[c(" ￥"+p(o(j)(e.order_goods.goods_money)),1)])),_:2},1024),e.order_goods&&1!=e.order_goods.status&&e.order_goods.status_name?(a(),s(g,{key:0,class:"mt-[20rpx] text-[24rpx] text-[#999]"},{default:l((()=>[c(p(o(C)("refundStatus"))+p(e.order_goods.status_name),1)])),_:2},1024)):x("v-if",!0)])),_:2},1024)])),_:2},1024),d(g,{class:"flex items-center justify-between mt-[40rpx] flex-wrap"},{default:l((()=>[d(g,{class:"flex items-center text-[24rpx]"},{default:l((()=>[d(_,null,{default:l((()=>[c("折扣：")])),_:1}),d(g,{class:"text-[var(--primary-color)]"},{default:l((()=>[c(p(parseFloat(e.agent_discount))+"折 ",1)])),_:2},1024)])),_:2},1024),d(g,{class:"text-[24rpx] flex items-center"},{default:l((()=>[d(_,null,{default:l((()=>[c("计算价：")])),_:1}),d(_,{class:"text-[var(--primary-color)]"},{default:l((()=>[c(p(o(j)(e.order_original_goods_money)||"0.00"),1)])),_:2},1024)])),_:2},1024),d(g,{class:"text-[24rpx] flex items-center"},{default:l((()=>[d(_,null,{default:l((()=>[c("佣金：")])),_:1}),d(_,{class:"text-[var(--primary-color)]"},{default:l((()=>[c(p(o(j)(e.commission)||"0.00"),1)])),_:2},1024)])),_:2},1024)])),_:2},1024)])),_:2},1024)])),_:2},1024)))),128)),o(U).length||o(H)?x("v-if",!0):(a(),s(I,{key:0,option:{icon:o(w)("static/resource/images/empty.png")}},null,8,["option"]))])),_:1},8,["onInit","onDown"])],64)),d(M,{"bg-color":"rgb(248,248,248)",loading:o(G),loadingText:"",fontSize:"16",color:"#333"},null,8,["loading"])])),_:1},8,["style"])}}}),[["__scopeId","data-v-e6265979"]]);export{E as default};
