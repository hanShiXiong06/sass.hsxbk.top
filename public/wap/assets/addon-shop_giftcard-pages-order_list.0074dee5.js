import{d as e,r as t,p as a,s as r,H as l,x as s,F as o,o as d,c as i,w as c,b as n,P as p,a7 as u,Q as x,f,u as m,n as _,a8 as g,a9 as v,i as y,a6 as h,g as b,h as k,R as j,y as C,z as w,A as F,E as S,a as M,c3 as z,k as E,D as I,B as U}from"./index-7bf68536.js";import{_ as R}from"./u--image.b3bf1d5c.js";import{_ as V}from"./pay.d2e850e8.js";import{g as A,a as B,o as O}from"./order.bb3e4e36.js";import{M as P}from"./mescroll-body.b6d57b41.js";import{M as D}from"./mescroll-empty.fcefb74e.js";import{u as H}from"./useMescroll.26ccf5de.js";import{_ as L}from"./_plugin-vue_export-helper.1b428a4d.js";import"./u-image.e46f68ef.js";import"./u-icon.0c1c54c7.js";import"./u-transition.cdf87992.js";import"./u-popup.be4bfacd.js";import"./u-safe-bottom.908eeae4.js";import"./pay.2db06871.js";import"./mescroll-i18n.14e7fe02.js";/* empty css                                                                       */const N=L(e({__name:"order_list",setup(e){const{mescrollInit:L,downCallback:N,getMescroll:Q}=H(v,g),$=t([]),q=t(!1),G=t(!1),J=t(""),K=t([]);t(null),a((e=>{if(!r())return l().setLoginBack({url:"/addon/shop_giftcard/pages/order_list"}),!1;J.value=e.status||"",W()})),s((()=>{Q()&&Q().resetUpScroll()}));const T=e=>{q.value=!1;let t={page:e.num,limit:e.size,status:J.value};B(t).then((t=>{let a=t.data.data;1==e.num&&($.value=[]),$.value=$.value.concat(a),e.endSuccess(a.length),q.value=!0})).catch((()=>{q.value=!0,e.endErr()}))},W=()=>{G.value=!1,K.value=[];let e={name:o("all"),status:""};K.value.push(e),A().then((e=>{Object.values(e.data).forEach(((e,t)=>{K.value.push(e)})),G.value=!0})).catch((()=>{G.value=!0}))},X=t(null),Y=(e,t="")=>{var a;"pay"==t?null==(a=X.value)||a.open(e.order_type,e.order_id,`/addon/shop_giftcard/pages/order_detail?order_id=${e.order_id}`):"close"==t&&Z(e)},Z=e=>{z({title:o("tips"),content:o("tipsOne"),confirmColor:E().themeColor["--primary-color"],success:t=>{t.confirm&&O(e.order_id).then((e=>{Q().resetUpScroll()}))}})};return(e,t)=>{const a=y,r=h,l=I,s=U,g=b(k("u--image"),R),v=b(k("pay"),V);return d(),i(a,{class:"bg-[var(--page-bg-color)] min-h-screen overflow-hidden order-list",style:_(e.themeColor())},{default:c((()=>[G.value?(d(),i(a,{key:0,class:"fixed left-0 top-0 right-0 z-10"},{default:c((()=>[n(r,{"scroll-x":!0,class:"tab-style-2 !p-[0]"},{default:c((()=>[n(a,{class:"tab-content !justify-around"},{default:c((()=>[(d(!0),p(x,null,u(K.value,((e,t)=>(d(),i(a,{class:j(["tab-items",{"class-select":J.value===e.status.toString()}]),onClick:t=>{return a=e.status,J.value=a.toString(),$.value=[],void Q().resetUpScroll();var a}},{default:c((()=>[C(w(e.name),1)])),_:2},1032,["class","onClick"])))),256))])),_:1})])),_:1})])),_:1})):f("v-if",!0),n(P,{ref:"mescrollRef",top:"88rpx",onInit:m(L),down:{use:!1},onUp:T},{default:c((()=>[$.value.length?(d(),i(a,{key:0,class:"sidebar-margin pt-[var(--top-m)]"},{default:c((()=>[(d(!0),p(x,null,u($.value,((e,t)=>(d(),i(a,{key:t,class:"mb-[var(--top-m)] card-template"},{default:c((()=>[n(a,{onClick:F((t=>{M({url:"/addon/shop_giftcard/pages/order_detail",param:{order_id:e.order_id}})}),["stop"])},{default:c((()=>[n(a,{class:"flex justify-between items-center"},{default:c((()=>[n(a,{class:"text-[#303133] text-[26rpx] font-400 leading-[36rpx]"},{default:c((()=>[n(l,{class:j(["iconfont text-[var(--primary-color)] text-[34rpx]",{"iconchuzhikaV6mm text-[#EF000C]":"balance"==e.card_right_type,"iconduihuankaV6mm-1 text-[#FF7700]":"goods"==e.card_right_type}])},null,8,["class"]),n(l,{class:"ml-[12rpx] text-[28rpx]"},{default:c((()=>[C(w(e.card_right_type_name),1)])),_:2},1024)])),_:2},1024),n(a,{class:j(["text-[#303133] text-[26rpx] leading-[34rpx]",{"text-primary":1==e.status,"!text-[var(--text-color-light9)]":-1==e.status}])},{default:c((()=>[C(w(e.status_name),1)])),_:2},1032,["class"])])),_:2},1024),(d(),i(a,{class:"flex box-border mt-[20rpx]",key:t},{default:c((()=>[n(g,{width:"240rpx",height:"170rpx",radius:"var(--goods-rounded-big)",src:m(S)(e.card_cover?e.card_cover:""),mode:"aspectFill"},{error:c((()=>["balance"==e.card_right_type?(d(),i(s,{key:0,class:"w-[240rpx] h-[170rpx] rounded-[var(--goods-rounded-big)] overflow-hidden",src:m(S)("addon/shop_giftcard/diy/index/value_card.jpg"),mode:"aspectFill"},null,8,["src"])):(d(),i(s,{key:1,class:"w-[240rpx] h-[170rpx] rounded-[var(--goods-rounded-big)] overflow-hidden",src:m(S)("addon/shop_giftcard/diy/index/redemption_card.jpg"),mode:"aspectFill"},null,8,["src"]))])),_:2},1032,["radius","src"]),n(a,{class:"ml-[20rpx] flex flex-1 flex-col box-border"},{default:c((()=>[n(a,{class:"max-w-[402rpx] text-[28rpx] leading-[40rpx] font-400 truncate text-[#303133]"},{default:c((()=>[C(w(e.body),1)])),_:2},1024),"balance"==e.card_right_type?(d(),i(a,{key:0,class:"max-w-[402rpx] text-[#303133] text-[24rpx] font-400 leading-[36rpx] text-[var(--text-color-light6)] truncate mt-[14rpx]"},{default:c((()=>[C(w(e.balance)+w(m(o)("yuanStoredValueCard")),1)])),_:2},1024)):f("v-if",!0),n(a,{class:"flex justify-between items-baseline mt-auto"},{default:c((()=>[n(a,{class:"leading-[42rpx]"},{default:c((()=>[n(l,{class:"text-[22rpx] font-400 price-font"},{default:c((()=>[C("￥")])),_:1}),n(l,{class:"text-[36rpx] font-500 price-font"},{default:c((()=>[C(w(parseFloat(e.card_price).toFixed(2).split(".")[0]),1)])),_:2},1024),n(l,{class:"text-[22rpx] font-500 price-font"},{default:c((()=>[C("."+w(parseFloat(e.card_price).toFixed(2).split(".")[1]),1)])),_:2},1024)])),_:2},1024),n(l,{class:"text-right text-[26rpx] font-400 w-[90rpx] text-[var(--text-color-light6)] leading-[36rpx]"},{default:c((()=>[C("x"+w(e.num),1)])),_:2},1024)])),_:2},1024)])),_:2},1024)])),_:2},1024))])),_:2},1032,["onClick"]),n(a,{class:"flex items-baseline justify-between mt-[20rpx]"},{default:c((()=>[n(a,{class:"text-[22rpx] text-[var(--text-color-light9)] leading-[30rpx] mr-[6rpx]"},{default:c((()=>[C(w(e.create_time),1)])),_:2},1024),n(a,{class:"flex items-end"},{default:c((()=>[n(a,{class:"text-[22rpx] font-400 leading-[30rpx] text-[#303133]"},{default:c((()=>[C(w(m(o)("actualPayment"))+"：",1)])),_:1}),n(a,{class:"leading-[1] text-[var(--price-text-color)]"},{default:c((()=>[n(l,{class:"text-[22rpx] leading-[26rpx] price-font"},{default:c((()=>[C("￥")])),_:1}),n(l,{class:"text-[36rpx] font-500 leading-[40rpx] price-font"},{default:c((()=>[C(w(parseFloat(e.order_money).toFixed(2).split(".")[0]),1)])),_:2},1024),n(l,{class:"text-[22rpx] font-500 leading-[28rpx] price-font"},{default:c((()=>[C("."+w(parseFloat(e.order_money).toFixed(2).split(".")[1]),1)])),_:2},1024)])),_:2},1024)])),_:2},1024)])),_:2},1024),1==e.status?(d(),i(a,{key:0,class:"flex justify-end text-[28rpx] mt-[20rpx] items-center"},{default:c((()=>[1==e.status?(d(),i(a,{key:0,class:"text-[24rpx] font-500 leading-[52rpx] h-[56rpx] min-w-[150rpx] text-center border-[2rpx] border-solid border-[var(--text-color-light9)] rounded-full text-[var(--text-color-light6)] box-border",onClick:F((t=>Y(e,"close")),["stop"])},{default:c((()=>[C(w(m(o)("orderClose")),1)])),_:2},1032,["onClick"])):f("v-if",!0),1==e.status?(d(),i(a,{key:1,class:"text-[24rpx] font-500 flex-center h-[56rpx] min-w-[150rpx] text-center border-[0] text-[#fff] primary-btn-bg rounded-full ml-[20rpx] box-border",onClick:F((t=>Y(e,"pay")),["stop"])},{default:c((()=>[C(w(m(o)("topay")),1)])),_:2},1032,["onClick"])):f("v-if",!0)])),_:2},1024)):f("v-if",!0)])),_:2},1024)))),128))])),_:1})):f("v-if",!0),!$.value.length&&q.value?(d(),i(D,{key:1,option:{tip:m(o)("cardEmpty"),icon:m(S)("addon/shop_giftcard/empty.png")}},null,8,["option"])):f("v-if",!0)])),_:1},8,["onInit"]),n(v,{ref_key:"payRef",ref:X,onClose:e.payClose},null,8,["onClose"])])),_:1},8,["style"])}}}),[["__scopeId","data-v-acbbfec8"]]);export{N as default};
