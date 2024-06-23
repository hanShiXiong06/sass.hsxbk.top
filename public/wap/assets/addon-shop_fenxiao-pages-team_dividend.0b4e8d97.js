import{b9 as e,d as t,r,o as a,c as s,w as l,u as o,E as n,b as d,x as m,y as c,f,H as i,G as x,F as p,n as u,a5 as _,a6 as g,N as b,C as v,i as y,g as h,h as w,V as k,$ as j,t as C}from"./index-905183d4.js";import{_ as F}from"./u-loading-page.7aa0a449.js";import{M as z}from"./mescroll-body.b8d008ed.js";import{M as I}from"./mescroll-empty.f9bce990.js";import{u as M}from"./useMescroll.26ccf5de.js";import{f as S}from"./fenxiao.dacba751.js";import{_ as D}from"./_plugin-vue_export-helper.1b428a4d.js";import"./u-loading-icon.c376267d.js";import"./u-transition.dbaca185.js";import"./mescroll-uni-option.0af4878d.js";import"./mescroll-i18n.6025c811.js";/* empty css                                                                       */const E=D(t({__name:"team_dividend",setup(t){const{mescrollInit:D,downCallback:E,getMescroll:U}=M(g,_);let A=r([]),B=r(!0),G=r(!0);const H=t=>{let r={is_settlement:V.value,page:t.num,limit:t.size};var a;G.value=!0,(a=r,e.get("shop_fenxiao/order/team",a)).then((e=>{let r=e.data.data;1==t.num&&(A.value=[]),A.value=A.value.concat(r),G.value=!1,t.endSuccess(r.length)})).catch((()=>{G.value=!1,t.endErr()}))};let N=r({});const R=()=>{e.get("shop_fenxiao/order/team/stat").then((e=>{N.value=e.data}))};R();let T=r({});B.value=!0,S().then((e=>{T.value=e.data,B.value=!1}));let V=r(1);const $=e=>{V.value=e,A.value=[],U().resetUpScroll(),R()};return(e,t)=>{const r=b,_=v,g=y,M=h(w("u-loading-page"),F);return a(),s(g,{class:"bg-[#f8f8f8] min-h-[100vh]",style:u(e.themeColor())},{default:l((()=>[o(B)?f("v-if",!0):(a(),n(x,{key:0},[d(g,{class:"flex items-center wrap-bg p-[40rpx]"},{default:l((()=>[o(T).member&&o(T).member.headimg?(a(),s(r,{key:0,class:"w-[90rpx] h-[90rpx] rounded-full mr-[20rpx]",src:o(k)(o(T).member.headimg),mode:"aspectFill"},null,8,["src"])):(a(),s(r,{key:1,class:"w-[90rpx] h-[90rpx] rounded-full mr-[20rpx]",src:o(k)("addon/shop_fenxiao/index/head.png"),mode:"aspectFill"},null,8,["src"])),d(g,{class:"flex flex-col"},{default:l((()=>[d(g,{class:"flex items-center"},{default:l((()=>[d(_,{class:"truncate max-w-[380rpx] mr-[10rpx] text-[28rpx] text-[#fff]"},{default:l((()=>[m(c(o(T).member.nickname||o(T).member.username),1)])),_:1}),o(T).fenxiao_level?(a(),s(_,{key:0,class:"text-[#fff] text-[24rpx] border-[2rpx] border-solid border-[#fff] px-[6rpx] py-[8rpx] whitespace-nowrap"},{default:l((()=>[m(c(o(T).fenxiao_level.level_name),1)])),_:1})):f("v-if",!0)])),_:1}),o(T).fenxiao_level?(a(),s(_,{key:0,class:"text-[#fff] text-[24rpx] mt-[14rpx]"},{default:l((()=>[m("团队分红比率 "+c(o(T).fenxiao_level.team_rate)+"%",1)])),_:1})):f("v-if",!0)])),_:1})])),_:1}),d(g,{class:"bg-[#fff] sticky top-[0] z-10"},{default:l((()=>[d(g,{class:"flex whitespace-nowrap justify-around overflow-hidden"},{default:l((()=>[d(g,{class:i(["text-center justify-center flex flex-1 h-[90rpx] mx-[60rpx] items-center border-0 border-b-[2rpx] border-solid border-[transparent]",{"!border-[var(--primary-color)] text-[var(--primary-color)]":1==o(V)}]),onClick:t[0]||(t[0]=e=>$(1))},{default:l((()=>[d(_,{class:"text-[28rpx]"},{default:l((()=>[m("已结算")])),_:1}),d(_,{class:"text-[28rpx]"},{default:l((()=>[m("("+c(o(j)(o(N).team_commission))+")",1)])),_:1})])),_:1},8,["class"]),d(g,{class:i(["text-sm text-center justify-center flex flex-1 h-[90rpx] mx-[60rpx] items-center border-0 border-b-[2rpx] border-solid border-[transparent]",{"!border-[var(--primary-color)] text-[var(--primary-color)]":0==o(V)}]),onClick:t[1]||(t[1]=e=>$(0))},{default:l((()=>[d(_,{class:"text-[28rpx]"},{default:l((()=>[m("待结算")])),_:1}),d(_,{class:"text-[28rpx]"},{default:l((()=>[m("("+c(o(j)(o(N).unsettlement))+")",1)])),_:1})])),_:1},8,["class"])])),_:1})])),_:1}),d(z,{ref:"mescrollRef",onInit:o(D),onDown:o(E),onUp:H},{default:l((()=>[(a(!0),n(x,null,p(o(A),((e,t)=>(a(),s(g,{class:"bg-[#fff] rounded-[16rpx] p-[30rpx] mx-[24rpx] mt-[24rpx]",key:t},{default:l((()=>[d(g,{class:"flex items-center justify-between text-[28rpx]"},{default:l((()=>[d(_,null,{default:l((()=>[m("订单："+c(e.order_no),1)])),_:2},1024),d(_,{class:"text-[var(--primary-color)]"},{default:l((()=>[m(c(e.is_settlement?"已结算":"未结算"),1)])),_:2},1024)])),_:2},1024),d(g,{class:"flex pt-[40rpx]"},{default:l((()=>[e.order_goods&&e.order_goods.goods_image_thumb_mid?(a(),s(r,{key:0,class:"w-[160rpx] h-[160rpx] rounded-[10rpx]",src:o(k)(e.order_goods.goods_image_thumb_mid),mode:"aspectFill"},null,8,["src"])):(a(),s(r,{key:1,class:"w-[160rpx] h-[160rpx] rounded-[10rpx]",src:o(k)("addon/shop_fenxiao/index/commission_rank.png"),mode:"aspectFill"},null,8,["src"])),d(g,{class:"flex flex-1 flex-col ml-[20rpx]"},{default:l((()=>[d(g,{class:"text-[28rpx] leading-[1.5]"},{default:l((()=>[d(_,null,{default:l((()=>[m(c(e.order_goods.goods_name.length>21?e.order_goods.goods_name.substr(0,21)+"...":e.order_goods.goods_name),1)])),_:2},1024),d(g,{class:"text-[#999] ml-[10rpx] inline-block whitespace-nowrap"},{default:l((()=>[d(g,{class:"flex items-center"},{default:l((()=>[d(_,null,{default:l((()=>[m("(购买人：")])),_:1}),d(g,{class:"max-w-[120rpx] truncate"},{default:l((()=>[m(c(e.shop_order.member.nickname||"-"),1)])),_:2},1024),d(_,null,{default:l((()=>[m(")")])),_:1})])),_:2},1024)])),_:2},1024)])),_:2},1024),d(g,{class:"text-[var(--primary-color)] mt-[20rpx] text-[28rpx] font-bold"},{default:l((()=>[m(" ￥"+c(o(j)(e.order_goods.goods_money)),1)])),_:2},1024),e.order_goods&&1!=e.order_goods.status&&e.order_goods.status_name?(a(),s(g,{key:0,class:"mt-[20rpx] text-[24rpx] text-[#999]"},{default:l((()=>[m(c(o(C)("refundStatus"))+c(e.order_goods.status_name),1)])),_:2},1024)):f("v-if",!0)])),_:2},1024)])),_:2},1024),d(g,{class:"flex items-center justify-between mt-[40rpx] flex-wrap"},{default:l((()=>[d(g,{class:"flex items-center text-[24rpx]"},{default:l((()=>[d(_,null,{default:l((()=>[m("分红比率：")])),_:1}),e.commission_rate||e.team_flat_rate?(a(),s(g,{key:0,class:"text-[var(--primary-color)]"},{default:l((()=>[m(c(e.team_flat_rate>0?e.team_flat_rate+"%(平级分红比率)":e.commission_rate+"%"),1)])),_:2},1024)):(a(),s(g,{key:1,class:"flex items-center"},{default:l((()=>[m("--")])),_:1}))])),_:2},1024),d(g,{class:"text-[24rpx] flex items-center"},{default:l((()=>[d(_,null,{default:l((()=>[m("佣金：")])),_:1}),d(_,{class:"text-[var(--primary-color)]"},{default:l((()=>[m(c(o(j)(e.commission)||"0.00"),1)])),_:2},1024)])),_:2},1024)])),_:2},1024)])),_:2},1024)))),128)),o(A).length||o(G)?f("v-if",!0):(a(),s(I,{key:0,option:{icon:o(k)("static/resource/images/empty.png")}},null,8,["option"]))])),_:1},8,["onInit","onDown"])],64)),d(M,{"bg-color":"rgb(248,248,248)",loading:o(B),loadingText:"",fontSize:"16",color:"#333"},null,8,["loading"])])),_:1},8,["style"])}}}),[["__scopeId","data-v-e851b6e8"]]);export{E as default};
