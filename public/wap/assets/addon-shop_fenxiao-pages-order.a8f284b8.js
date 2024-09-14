import{d as e,r as t,o as a,c as l,w as s,O as r,b as o,u as c,y as n,z as d,f as i,Q as u,P as x,a6 as m,n as p,a7 as f,a8 as _,B as v,D as g,i as h,g as y,h as b,E as k,a0 as w,F as j}from"./index-9317da28.js";import{_ as F}from"./loading-page.vue_vue_type_script_setup_true_lang.c92b07c2.js";import{M as C}from"./mescroll-body.c2f6fcce.js";import{M as I}from"./mescroll-empty.82e9c349.js";import{u as M}from"./useMescroll.26ccf5de.js";import{h as S,i as z,f as D}from"./fenxiao.4ded0069.js";import{_ as E}from"./_plugin-vue_export-helper.1b428a4d.js";import"./u-loading-page.de89bca9.js";import"./u-loading-icon.aabe3d05.js";/* empty css                                                                       */import"./u-transition.65be38eb.js";import"./mescroll-i18n.f3c5a2b0.js";const N=E(e({__name:"order",setup(e){const{mescrollInit:E,downCallback:N,getMescroll:O}=M(_,f),P=t([]),Q=t(!0),U=t(!0),B=e=>{let t={is_settlement:G.value,page:e.num,limit:e.size};U.value=!0,S(t).then((t=>{let a=t.data.data;1==e.num&&(P.value=[]),P.value=P.value.concat(a),U.value=!1,e.endSuccess(a.length)})).catch((()=>{U.value=!1,e.endErr()}))},R=t({}),q=()=>{z().then((e=>{R.value=e.data}))};q();const A=t({});Q.value=!0,D().then((e=>{A.value=e.data,Q.value=!1}));const G=t(1),H=e=>{G.value=e,P.value=[],O().resetUpScroll(),q()};return(e,t)=>{const f=v,_=g,M=h,S=y(b("loading-page"),F);return a(),l(M,{class:"bg-[#f8f8f8] min-h-[100vh]",style:p(e.themeColor())},{default:s((()=>[Q.value?i("v-if",!0):(a(),r(x,{key:0},[o(M,{class:"flex items-center order-bg-wrap p-[40rpx]"},{default:s((()=>[A.value.member&&A.value.member.headimg?(a(),l(f,{key:0,class:"w-[80rpx] h-[80rpx] rounded-full mr-[20rpx]",src:c(k)(A.value.member.headimg),mode:"aspectFill"},null,8,["src"])):(a(),l(f,{key:1,class:"w-[80rpx] h-[80rpx] rounded-full mr-[20rpx]",src:c(k)("addon/shop_fenxiao/index/head.png"),mode:"aspectFill"},null,8,["src"])),o(M,{class:"flex flex-col"},{default:s((()=>[o(M,{class:"flex items-center"},{default:s((()=>[o(_,{class:"truncate max-w-[380rpx] text-[#fff] font-500 mr-[10rpx] text-[30rpx]"},{default:s((()=>[n(d(A.value.member.nickname||A.value.member.username),1)])),_:1}),A.value.fenxiao_level?(a(),l(_,{key:0,class:"bg-primary-light !text-[var(--primary-color)] !text-[22rpx] px-[10rpx] h-[34rpx] ml-[10rpx] tag-item"},{default:s((()=>[n(d(A.value.fenxiao_level.level_name),1)])),_:1})):i("v-if",!0)])),_:1})])),_:1})])),_:1}),o(M,{class:"tab-style-3"},{default:s((()=>[o(M,{class:u(["tab-items",{"class-select":1==G.value}]),onClick:t[0]||(t[0]=e=>H(1))},{default:s((()=>[o(_,{class:"text-[28rpx]"},{default:s((()=>[n("已结算")])),_:1}),o(_,{class:"text-[28rpx]"},{default:s((()=>[n("("+d(c(w)(R.value.fenxiao_commission))+")",1)])),_:1})])),_:1},8,["class"]),o(M,{class:u(["tab-items",{"class-select":0==G.value}]),onClick:t[1]||(t[1]=e=>H(0))},{default:s((()=>[o(_,{class:"text-[28rpx]"},{default:s((()=>[n("待结算")])),_:1}),o(_,{class:"text-[28rpx]"},{default:s((()=>[n("("+d(c(w)(R.value.unsettlement))+")",1)])),_:1})])),_:1},8,["class"])])),_:1}),o(C,{ref:"mescrollRef",bottom:"100rpx",onInit:c(E),down:{use:!1},onUp:B},{default:s((()=>[P.value.length?(a(),l(M,{key:0,class:"sidebar-marign pt-[var(--top-m)]"},{default:s((()=>[(a(!0),r(x,null,m(P.value,((e,t)=>(a(),l(M,{class:"card-template mb-[var(--top-m)]",key:t},{default:s((()=>[o(M,{class:"flex items-center justify-between text-[26rpx] leading-[36rpx] text-[#333]"},{default:s((()=>[o(M,null,{default:s((()=>[o(_,null,{default:s((()=>[n(d(c(j)("orderNo"))+":",1)])),_:1}),o(_,{class:"ml-[10rpx]"},{default:s((()=>[n(d(e.order_no),1)])),_:2},1024)])),_:2},1024),o(_,{class:"text-[var(--text-color-light6)]"},{default:s((()=>[n(d(e.is_settlement?"已结算":"未结算"),1)])),_:2},1024)])),_:2},1024),o(M,{class:"flex pt-[20rpx]"},{default:s((()=>[e.order_goods&&e.order_goods.goods_image_thumb_mid?(a(),l(f,{key:0,class:"w-[180rpx] h-[180rpx] rounded-[var(--goods-rounded-big)] shrink-0",src:c(k)(e.order_goods.goods_image_thumb_mid),mode:"aspectFill"},null,8,["src"])):(a(),l(f,{key:1,class:"w-[180rpx] h-[180rpx] rounded-[var(--goods-rounded-big)] shrink-0",src:c(k)("addon/shop_fenxiao/index/commission_rank.png"),mode:"aspectFill"},null,8,["src"])),o(M,{class:"flex flex-1 flex-col ml-[20rpx] w-[470rpx] pb-[6rpx]"},{default:s((()=>[o(M,{class:"w-[462rpx] text-[28rpx] truncate leading-[1.5]"},{default:s((()=>[n(d(e.order_goods.goods_name),1)])),_:2},1024),o(M,{class:"text-[var(--text-color-light6)] flex items-center whitespace-nowrap mt-[20rpx] text-[24rpx]"},{default:s((()=>[o(M,{class:"flex items-center"},{default:s((()=>[o(_,null,{default:s((()=>[n("购买人：")])),_:1}),o(M,{class:"max-w-[120rpx] truncate"},{default:s((()=>[n(d(e.shop_order.member.nickname||"-"),1)])),_:2},1024)])),_:2},1024)])),_:2},1024),o(M,{class:"flex items-center justify-between mt-[auto]"},{default:s((()=>[o(M,{class:"inline-block leading-[1]"},{default:s((()=>[o(_,{class:"text-[var(--price-text-color)] text-[22rpx] price-font font-500 mr-[4rpx]"},{default:s((()=>[n("￥")])),_:1}),o(_,{class:"text-[var(--price-text-color)] text-[36rpx] price-font font-500"},{default:s((()=>[n(d(c(w)(e.order_goods.goods_money).split(".")[0]),1)])),_:2},1024),o(_,{class:"text-[var(--price-text-color)] text-[22rpx] price-font font-500"},{default:s((()=>[n("."+d(c(w)(e.order_goods.goods_money).split(".")[1]),1)])),_:2},1024)])),_:2},1024),e.order_goods&&1!=e.order_goods.status&&e.order_goods.status_name?(a(),l(M,{key:0,class:"text-[24rpx] text-[var(--text-color-light9)]"},{default:s((()=>[n(d(c(j)("refundStatus"))+d(e.order_goods.status_name),1)])),_:2},1024)):i("v-if",!0)])),_:2},1024)])),_:2},1024)])),_:2},1024),o(M,{class:"flex items-center justify-between mt-[20rpx] flex-wrap"},{default:s((()=>[i(' <view class="text-[24rpx] flex items-center leading-[35rpx]">\r\n\t\t\t\t\t\t\t\t<text>购买人：</text>\r\n\t\t\t\t\t\t\t\t<text class="text-[var(--primary-color)]">{{ item.shop_order.member.nickname||\'-\' }}</text>\r\n\t\t\t\t\t\t\t</view> '),o(M,{class:"text-[24rpx] flex items-center leading-[35rpx]"},{default:s((()=>[o(_,{class:"mr-[4rpx]"},{default:s((()=>[n("计算价:")])),_:1}),o(_,{class:"text-[var(--price-text-color)]"},{default:s((()=>[n("￥"+d(c(w)(e.order_goods_money)),1)])),_:2},1024)])),_:2},1024),e.calculate_type?(a(),l(M,{key:0,class:"flex items-center text-[24rpx] leading-[35rpx]"},{default:s((()=>[o(_,{class:"mr-[4rpx]"},{default:s((()=>[n(d(e.calculate_type_name)+":",1)])),_:2},1024),o(_,{class:"text-[var(--price-text-color)]"},{default:s((()=>[n(d(1!=e.calculate_type?"￥"+c(w)(e.commission):e.commission_rate+"%"),1)])),_:2},1024)])),_:2},1024)):i("v-if",!0),o(M,{class:"flex items-center text-[24rpx]"},{default:s((()=>[o(_,{class:"mr-[4rpx]"},{default:s((()=>[n("佣金:")])),_:1}),o(M,{class:"text-[var(--primary-color)]"},{default:s((()=>[n(d(c(w)(e.commission)||"0.00"),1)])),_:2},1024)])),_:2},1024)])),_:2},1024)])),_:2},1024)))),128))])),_:1})):i("v-if",!0),P.value.length||U.value?i("v-if",!0):(a(),l(I,{key:1,option:{icon:c(k)("static/resource/images/empty.png")}},null,8,["option"]))])),_:1},8,["onInit"])],64)),o(S,{loading:Q.value},null,8,["loading"])])),_:1},8,["style"])}}}),[["__scopeId","data-v-fac1d9e7"]]);export{N as default};
