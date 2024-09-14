import{bt as e,d as t,r as a,p as l,o as s,c as r,w as o,O as n,b as u,u as d,y as c,z as i,f as p,Q as m,P as _,a6 as f,n as x,a7 as g,a8 as v,B as y,D as h,i as b,g as k,h as w,E as j,a0 as F,F as C}from"./index-2882a2d8.js";import{_ as I}from"./loading-page.vue_vue_type_script_setup_true_lang.cb99ee23.js";import{M}from"./mescroll-body.e69cb222.js";import{M as S}from"./mescroll-empty.7f392528.js";import{u as U}from"./useMescroll.26ccf5de.js";import{a as z}from"./fenxiao.cc7bcc27.js";import{_ as D}from"./_plugin-vue_export-helper.1b428a4d.js";import"./u-loading-page.8280c7ab.js";import"./u-loading-icon.a37f7e61.js";/* empty css                                                                       */import"./u-transition.4448d2e5.js";import"./mescroll-i18n.c2747603.js";/* empty css                                                                       */const E=D(t({__name:"agent_list",setup(t){const{mescrollInit:D,downCallback:E,getMescroll:N}=U(v,g),Q=a("");l((async()=>{await e.get("shop_fenxiao/order/agent/config").then((e=>{Q.value=e.data.is_open}))}));const R=a([]),B=a({member:{}}),O=a({}),P=a(!0),T=a(!0);P.value=!0,z().then((e=>{B.value=e.data,P.value=!1})).catch((()=>{P.value=!1}));const Z=t=>{let a={is_settlement:q.value,page:t.num,limit:t.size};var l;T.value=!0,(l=a,e.get("shop_fenxiao/order/agent",l)).then((e=>{let a=e.data.data;1==t.num&&(R.value=[]),R.value=R.value.concat(a),T.value=!1,t.endSuccess(a.length)})).catch((()=>{T.value=!1,t.endErr()}))},$=()=>{e.get("shop_fenxiao/order/agent/stat").then((e=>{O.value=e.data}))};$();const q=a(1),A=e=>{q.value=e,R.value=[],N().resetUpScroll(),$()};return(e,t)=>{const a=y,l=h,g=b,v=k(w("loading-page"),I);return s(),r(g,{class:"bg-[#f8f8f8] min-h-[100vh]",style:x(e.themeColor())},{default:o((()=>[P.value||1!=Q.value?p("v-if",!0):(s(),n(_,{key:0},[u(g,{class:"flex items-center wrap-bg p-[50rpx]"},{default:o((()=>[B.value.member&&B.value.member.headimg?(s(),r(a,{key:0,class:"w-[90rpx] h-[90rpx] rounded-full mr-[20rpx]",src:d(j)(B.value.member.headimg),mode:"aspectFill"},null,8,["src"])):(s(),r(a,{key:1,class:"w-[90rpx] h-[90rpx] rounded-full mr-[20rpx]",src:d(j)("addon/shop_fenxiao/index/head.png"),mode:"aspectFill"},null,8,["src"])),u(g,{class:"flex flex-col"},{default:o((()=>[u(g,{class:"flex items-center"},{default:o((()=>[u(l,{class:"truncate text-[#fff] max-w-[380rpx] mr-[10rpx] font-500 text-[30rpx]"},{default:o((()=>[c(i(B.value.member.nickname||B.value.member.username),1)])),_:1}),B.value.agent_level?(s(),r(l,{key:0,class:"bg-primary-light !text-[var(--primary-color)] !text-[22rpx] px-[10rpx] h-[36rpx] ml-[10rpx] tag-item"},{default:o((()=>[c(i(B.value.agent_level.name),1)])),_:1})):p("v-if",!0)])),_:1}),B.value.agent_level?(s(),r(l,{key:0,class:"text-[#fff] text-[24rpx] mt-[14rpx]"},{default:o((()=>[c("享"+i(Number(B.value.agent_level.discount))+"折优惠",1)])),_:1})):(s(),r(l,{key:1,class:"text-[#fff] text-[24rpx] mt-[14rpx]"},{default:o((()=>[c("您还不是渠道代理商")])),_:1}))])),_:1})])),_:1}),u(g,{class:"tab-style-3"},{default:o((()=>[u(g,{class:m(["tab-items",{"class-select":1==q.value}]),onClick:t[0]||(t[0]=e=>A(1))},{default:o((()=>[u(l,null,{default:o((()=>[c("已结算")])),_:1}),u(l,null,{default:o((()=>[c("("+i(d(F)(O.value.agent_commission))+")",1)])),_:1})])),_:1},8,["class"]),u(g,{class:m(["tab-items",{"class-select":0==q.value}]),onClick:t[1]||(t[1]=e=>A(0))},{default:o((()=>[u(l,null,{default:o((()=>[c("待结算")])),_:1}),u(l,null,{default:o((()=>[c("("+i(d(F)(O.value.unsettlement))+")",1)])),_:1})])),_:1},8,["class"])])),_:1}),u(M,{ref:"mescrollRef",bottom:"100rpx",onInit:d(D),down:{use:!1},onUp:Z},{default:o((()=>[R.value.length?(s(),r(g,{key:0,class:"sidebar-marign pt-[var(--top-m)]"},{default:o((()=>[(s(!0),n(_,null,f(R.value,((e,t)=>(s(),r(g,{class:"mb-[var(--top-m)] card-template",key:t},{default:o((()=>[u(g,{class:"flex items-center justify-between text-[26rpx] leading-[36rpx] text-[#333]"},{default:o((()=>[u(g,null,{default:o((()=>[u(l,null,{default:o((()=>[c(i(d(C)("orderNo"))+":",1)])),_:1}),u(l,{class:"ml-[10rpx]"},{default:o((()=>[c(i(e.order_no),1)])),_:2},1024)])),_:2},1024),u(l,{class:"text-[var(--text-color-light6)]"},{default:o((()=>[c(i(e.is_settlement?"已结算":"未结算"),1)])),_:2},1024)])),_:2},1024),u(g,{class:"flex pt-[20rpx]"},{default:o((()=>[e.order_goods&&e.order_goods.goods_image_thumb_mid?(s(),r(a,{key:0,class:"w-[180rpx] h-[180rpx] rounded-[var(--goods-rounded-big)]",src:d(j)(e.order_goods.goods_image_thumb_mid),mode:"aspectFill"},null,8,["src"])):(s(),r(a,{key:1,class:"w-[160rpx] h-[160rpx] rounded-[var(--goods-rounded-big)]",src:d(j)("addon/shop_fenxiao/index/commission_rank.png"),mode:"aspectFill"},null,8,["src"])),u(g,{class:"flex flex-1 flex-col ml-[20rpx] pb-[6rpx]"},{default:o((()=>[u(g,{class:"w-[462rpx] text-[28rpx] truncate leading-[1.5]"},{default:o((()=>[c(i(e.order_goods.goods_name),1)])),_:2},1024),u(g,{class:"text-[var(--text-color-light6)] flex items-center whitespace-nowrap mt-[20rpx] text-[24rpx]"},{default:o((()=>[u(g,{class:"flex items-center"},{default:o((()=>[u(l,null,{default:o((()=>[c("购买人：")])),_:1}),u(g,{class:"max-w-[120rpx] truncate"},{default:o((()=>[c(i(e.shop_order.member.nickname||"-"),1)])),_:2},1024)])),_:2},1024)])),_:2},1024),u(g,{class:"flex items-center justify-between mt-[auto]"},{default:o((()=>[u(g,{class:"text-[var(--price-text-color)] inline-block leading-[1] price-font font-500"},{default:o((()=>[u(l,{class:"text-[22rpx]"},{default:o((()=>[c("￥")])),_:1}),u(l,{class:"text-[36rpx]"},{default:o((()=>[c(i(d(F)(e.order_goods.goods_money).split(".")[0]),1)])),_:2},1024),u(l,{class:"text-[22rpx]"},{default:o((()=>[c("."+i(d(F)(e.order_goods.goods_money).split(".")[1]),1)])),_:2},1024)])),_:2},1024),e.order_goods&&1!=e.order_goods.status&&e.order_goods.status_name?(s(),r(g,{key:0,class:"text-[24rpx] text-[var(--text-color-light9)]"},{default:o((()=>[c(i(d(C)("refundStatus"))+i(e.order_goods.status_name),1)])),_:2},1024)):p("v-if",!0)])),_:2},1024)])),_:2},1024)])),_:2},1024),u(g,{class:"flex items-center justify-between mt-[20rpx] flex-wrap"},{default:o((()=>[u(g,{class:"flex items-center text-[24rpx]"},{default:o((()=>[u(l,{class:"mr-[4rpx]"},{default:o((()=>[c("折扣:")])),_:1}),u(g,{class:"text-[var(--price-text-color)]"},{default:o((()=>[c(i(parseFloat(e.agent_discount))+"折 ",1)])),_:2},1024)])),_:2},1024),u(g,{class:"text-[24rpx] flex items-center"},{default:o((()=>[u(l,{class:"mr-[4rpx]"},{default:o((()=>[c("计算价:")])),_:1}),u(l,{class:"text-[var(--price-text-color)]"},{default:o((()=>[c(i(d(F)(e.order_original_goods_money)||"0.00"),1)])),_:2},1024)])),_:2},1024),u(g,{class:"text-[24rpx] flex items-center"},{default:o((()=>[u(l,{class:"mr-[4rpx]"},{default:o((()=>[c("佣金:")])),_:1}),u(l,{class:"text-[var(--price-text-color)]"},{default:o((()=>[c(i(d(F)(e.commission)||"0.00"),1)])),_:2},1024)])),_:2},1024)])),_:2},1024)])),_:2},1024)))),128))])),_:1})):p("v-if",!0),R.value.length||T.value?p("v-if",!0):(s(),r(S,{key:1,option:{icon:d(j)("static/resource/images/empty.png")}},null,8,["option"]))])),_:1},8,["onInit"])],64)),0!=Q.value||P.value?p("v-if",!0):(s(),r(g,{key:1,class:"pt-[var(--top-m)] footer"},{default:o((()=>[u(S,{option:{icon:d(j)("static/resource/images/empty.png"),tip:"渠道代理设置未开启"}},null,8,["option"])])),_:1})),u(v,{loading:P.value},null,8,["loading"])])),_:1},8,["style"])}}}),[["__scopeId","data-v-8d4d7676"]]);export{E as default};
