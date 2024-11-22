import{bt as e,d as a,r as t,p as l,o as s,c as r,w as o,P as n,b as d,u,y as i,z as c,f as m,R as p,Q as _,a7 as x,n as f,a8 as v,a9 as g,B as h,D as y,i as b,g as k,h as w,E as j,a1 as F,F as C}from"./index-7bf68536.js";import{_ as I}from"./loading-page.vue_vue_type_script_setup_true_lang.124ad65f.js";import{M}from"./mescroll-body.b6d57b41.js";import{M as S}from"./mescroll-empty.fcefb74e.js";import{u as z}from"./useMescroll.26ccf5de.js";import{f as E}from"./fenxiao.745a840a.js";import{_ as R}from"./_plugin-vue_export-helper.1b428a4d.js";import"./u-loading-page.566c330a.js";import"./u-loading-icon.b37701e7.js";import"./u-transition.cdf87992.js";import"./mescroll-i18n.14e7fe02.js";/* empty css                                                                       */const U=R(a({__name:"team_dividend",setup(a){const{mescrollInit:R,downCallback:U,getMescroll:B}=z(g,v),D=t("");l((async()=>{await e.get("shop_fenxiao/order/team/config").then((e=>{D.value=e.data.is_open}))}));const N=t([]),P=t(!0),Q=t(!0),q=a=>{let t={is_settlement:J.value,page:a.num,limit:a.size};var l;Q.value=!0,(l=t,e.get("shop_fenxiao/order/team",l)).then((e=>{let t=e.data.data;1==a.num&&(N.value=[]),N.value=N.value.concat(t),Q.value=!1,a.endSuccess(t.length)})).catch((()=>{Q.value=!1,a.endErr()}))},A=t({}),G=()=>{e.get("shop_fenxiao/order/team/stat").then((e=>{A.value=e.data}))};G();const H=t({});P.value=!0,E().then((e=>{H.value=e.data,P.value=!1}));const J=t(1),K=e=>{J.value=e,N.value=[],B().resetUpScroll(),G()};return(e,a)=>{const t=h,l=y,v=b,g=k(w("loading-page"),I);return s(),r(v,{class:"bg-[#f8f8f8] min-h-[100vh] team-dividend",style:f(e.themeColor())},{default:o((()=>[P.value||1!=D.value?m("v-if",!0):(s(),n(_,{key:0},[d(v,{class:"flex items-center wrap-bg p-[40rpx]"},{default:o((()=>[H.value.member&&H.value.member.headimg?(s(),r(t,{key:0,class:"w-[90rpx] h-[90rpx] rounded-full mr-[20rpx]",src:u(j)(H.value.member.headimg),mode:"aspectFill"},null,8,["src"])):(s(),r(t,{key:1,class:"w-[90rpx] h-[90rpx] rounded-full mr-[20rpx]",src:u(j)("addon/shop_fenxiao/index/head.png"),mode:"aspectFill"},null,8,["src"])),d(v,{class:"flex flex-col"},{default:o((()=>[d(v,{class:"flex items-center"},{default:o((()=>[d(l,{class:"truncate max-w-[380rpx] mr-[10rpx] text-[30rpx] font-500 text-[#fff]"},{default:o((()=>[i(c(H.value.member.nickname||H.value.member.username),1)])),_:1}),H.value.fenxiao_level?(s(),r(l,{key:0,class:"bg-primary-light !text-[var(--primary-color)] !text-[22rpx] px-[10rpx] h-[36rpx] ml-[10rpx] tag-item"},{default:o((()=>[i(c(H.value.fenxiao_level.level_name),1)])),_:1})):m("v-if",!0)])),_:1}),H.value.fenxiao_level?(s(),r(l,{key:0,class:"text-[#fff] text-[24rpx] mt-[14rpx]"},{default:o((()=>[i("团队分红比率 "+c(H.value.fenxiao_level.team_rate)+"%",1)])),_:1})):m("v-if",!0)])),_:1})])),_:1}),d(v,{class:"tab-style-3"},{default:o((()=>[d(v,{class:p(["tab-items",{"class-select":1==J.value}]),onClick:a[0]||(a[0]=e=>K(1))},{default:o((()=>[d(l,null,{default:o((()=>[i("已结算")])),_:1}),d(l,null,{default:o((()=>[i("("+c(u(F)(A.value.team_commission))+")",1)])),_:1})])),_:1},8,["class"]),d(v,{class:p(["tab-items",{"class-select":0==J.value}]),onClick:a[1]||(a[1]=e=>K(0))},{default:o((()=>[d(l,{class:"text-[28rpx]"},{default:o((()=>[i("待结算")])),_:1}),d(l,{class:"text-[28rpx]"},{default:o((()=>[i("("+c(u(F)(A.value.unsettlement))+")",1)])),_:1})])),_:1},8,["class"])])),_:1}),d(M,{ref:"mescrollRef",onInit:u(R),down:{use:!1},onUp:q},{default:o((()=>[N.value.length?(s(),r(v,{key:0,class:"pt-[var(--top-m)]"},{default:o((()=>[(s(!0),n(_,null,x(N.value,((e,a)=>(s(),r(v,{class:"sidebar-margin mb-[var(--top-m)] card-template",key:a},{default:o((()=>[d(v,{class:"flex items-center justify-between text-[26rpx] leading-[36rpx] text-[#333]"},{default:o((()=>[d(v,null,{default:o((()=>[d(l,null,{default:o((()=>[i(c(u(C)("orderNo"))+":",1)])),_:1}),d(l,{class:"ml-[10rpx]"},{default:o((()=>[i(c(e.order_no),1)])),_:2},1024)])),_:2},1024),d(l,{class:"text-[var(--text-color-light6)]"},{default:o((()=>[i(c(e.is_settlement?"已结算":"未结算"),1)])),_:2},1024)])),_:2},1024),d(v,{class:"flex pt-[20rpx]"},{default:o((()=>[e.order_goods&&e.order_goods.goods_image_thumb_mid?(s(),r(t,{key:0,class:"w-[180rpx] h-[180rpx] rounded-[var(--goods-rounded-big)]",src:u(j)(e.order_goods.goods_image_thumb_mid),mode:"aspectFill"},null,8,["src"])):(s(),r(t,{key:1,class:"w-[180rpx] h-[180rpx] rounded-[var(--goods-rounded-big)]",src:u(j)("addon/shop_fenxiao/index/commission_rank.png"),mode:"aspectFill"},null,8,["src"])),d(v,{class:"flex flex-1 flex-col ml-[20rpx] pb-[6rpx]"},{default:o((()=>[d(v,{class:"w-[462rpx] text-[28rpx] truncate leading-[1.5]"},{default:o((()=>[i(c(e.order_goods.goods_name),1)])),_:2},1024),d(v,{class:"text-[var(--text-color-light6)] flex items-center whitespace-nowrap mt-[20rpx] text-[24rpx]"},{default:o((()=>[d(l,null,{default:o((()=>[i("购买人：")])),_:1}),d(v,{class:"max-w-[120rpx] truncate"},{default:o((()=>[i(c(e.shop_order.member.nickname||"-"),1)])),_:2},1024)])),_:2},1024),d(v,{class:"flex justify-between items-center mt-[auto] pb-[6rpx]"},{default:o((()=>[d(v,{class:"text-[var(--price-text-color)] price-font font-500 inline-block leading-[1]"},{default:o((()=>[d(l,{class:"text-[22rpx] mr-[4rpx]"},{default:o((()=>[i("￥")])),_:1}),d(l,{class:"text-[36rpx]"},{default:o((()=>[i(c(u(F)(e.order_goods.goods_money).split(".")[0]),1)])),_:2},1024),d(l,{class:"text-[22rpx]"},{default:o((()=>[i("."+c(u(F)(e.order_goods.goods_money).split(".")[1]),1)])),_:2},1024)])),_:2},1024),e.order_goods&&1!=e.order_goods.status&&e.order_goods.status_name?(s(),r(v,{key:0,class:"text-[24rpx] text-[var(--text-color-light9)]"},{default:o((()=>[i(c(u(C)("refundStatus"))+c(e.order_goods.status_name),1)])),_:2},1024)):m("v-if",!0)])),_:2},1024)])),_:2},1024)])),_:2},1024),d(v,{class:"flex items-center justify-between mt-[20rpx] flex-wrap"},{default:o((()=>[d(v,{class:"flex items-center text-[24rpx] leading-[35rpx]"},{default:o((()=>[d(l,{class:"mr-[4rpx]"},{default:o((()=>[i("分红比率:")])),_:1}),e.commission_rate||e.team_flat_rate?(s(),r(v,{key:0,class:"text-[var(--price-text-color)]"},{default:o((()=>[i(c(e.team_flat_rate>0?e.team_flat_rate+"%(平级分红比率)":e.commission_rate+"%"),1)])),_:2},1024)):(s(),r(v,{key:1,class:"flex items-center"},{default:o((()=>[i("--")])),_:1}))])),_:2},1024),d(v,{class:"text-[24rpx] flex items-center leading-[35rpx]"},{default:o((()=>[d(l,{class:"mr-[4rpx]"},{default:o((()=>[i("佣金:")])),_:1}),d(l,{class:"text-[var(--price-text-color)]"},{default:o((()=>[i(c(u(F)(e.commission)||"0.00"),1)])),_:2},1024)])),_:2},1024)])),_:2},1024)])),_:2},1024)))),128))])),_:1})):m("v-if",!0),N.value.length||Q.value?m("v-if",!0):(s(),r(S,{key:1,option:{icon:u(j)("static/resource/images/empty.png")}},null,8,["option"]))])),_:1},8,["onInit"])],64)),0!=D.value||P.value?m("v-if",!0):(s(),r(v,{key:1,class:"pt-[var(--top-m)] footer"},{default:o((()=>[d(S,{option:{tip:"团队分红设置未开启"}})])),_:1})),d(g,{loading:P.value},null,8,["loading"])])),_:1},8,["style"])}}}),[["__scopeId","data-v-b166034b"]]);export{U as default};
