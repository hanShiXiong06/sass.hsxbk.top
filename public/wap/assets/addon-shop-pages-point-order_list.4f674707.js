import{d as e,r as t,p as r,o as a,c as l,w as s,b as o,O as d,a6 as i,P as n,f as p,u,n as x,a7 as c,a8 as f,i as m,a5 as _,g as v,h as g,Q as y,y as h,z as b,F as k,A as C,bw as j,E as w,a as F,c1 as S,k as z,D as E,B as I}from"./index-9317da28.js";import{_ as M}from"./u--image.5461b7b7.js";import{_ as U}from"./pay.b34fbbeb.js";import{d as O,e as P,o as N,b as Q}from"./order.69407eee.js";import{g as R}from"./shop.7e320f2e.js";import{M as T}from"./mescroll-body.c2f6fcce.js";import{M as A}from"./mescroll-empty.82e9c349.js";import{u as B}from"./useMescroll.26ccf5de.js";import{_ as D}from"./_plugin-vue_export-helper.1b428a4d.js";import"./u-image.74ac23f6.js";import"./u-icon.5e775659.js";import"./u-transition.65be38eb.js";import"./u-popup.1f2ebcae.js";import"./u-safe-bottom.3546c5bb.js";import"./pay.25e81968.js";import"./mescroll-i18n.f3c5a2b0.js";const V=D(e({__name:"order_list",setup(e){const{mescrollInit:D,downCallback:V,getMescroll:$}=B(f,c),q=t([]),G=t(!1),H=t(!1),J=t(""),K=t([]),L=t(""),W=t(""),X=t(!1);r((e=>{J.value=e.status||"",Y(),ee()}));const Y=()=>{R().then((e=>{L.value=e.data}))},Z=e=>{G.value=!1;let t={page:e.num,limit:e.size,status:J.value,activity_type:"exchange"};P(t).then((t=>{let r=t.data.data;1==e.num&&(q.value=[]),q.value=q.value.concat(r),e.endSuccess(r.length),W.value=t.data.mch_id,X.value=t.data.is_trade_managed,G.value=!0})).catch((()=>{G.value=!0,e.endErr()}))},ee=()=>{H.value=!1,K.value=[];K.value.push({name:"全部",status:""}),O().then((e=>{Object.values(e.data).forEach(((e,t)=>{K.value.push(e)})),H.value=!0})).catch((()=>{H.value=!0}))},te=t(null),re=(e,t="")=>{var r;"pay"==t?null==(r=te.value)||r.open(e.order_type,e.order_id,`/addon/shop/pages/order/detail?order_id=${e.order_id}`):"close"==t?ae(e):"finish"==t?le(e):"evaluate"==t&&(e.is_evaluate?F({url:"/addon/shop/pages/evaluate/order_evaluate_view",param:{order_id:e.order_id}}):F({url:"/addon/shop/pages/evaluate/order_evaluate",param:{order_id:e.order_id}}))},ae=e=>{S({title:"提示",content:"您确定要关闭该订单吗？",confirmColor:z().themeColor["--primary-color"],success:t=>{t.confirm&&N(e.order_id).then((e=>{$().resetUpScroll()}))}})},le=e=>{S({title:"提示",content:"您确定物品已收到吗？",confirmColor:z().themeColor["--primary-color"],success:t=>{t.confirm&&Q(e.order_id).then((e=>{$().resetUpScroll()}))}})};return(e,t)=>{const r=m,c=_,f=E,S=I,z=v(g("u--image"),M),O=v(g("pay"),U);return a(),l(r,{class:"bg-[var(--page-bg-color)] min-h-screen overflow-hidden order-list",style:x(e.themeColor())},{default:s((()=>[H.value?(a(),l(r,{key:0,class:"fixed left-0 top-0 right-0 z-10"},{default:s((()=>[o(c,{"scroll-x":!0,class:"tab-style-2"},{default:s((()=>[o(r,{class:"tab-content"},{default:s((()=>[(a(!0),d(n,null,i(K.value,((e,t)=>(a(),l(r,{class:y(["tab-items",{"class-select":J.value===e.status.toString()}]),onClick:t=>{return r=e.status,J.value=r.toString(),q.value=[],void $().resetUpScroll();var r}},{default:s((()=>[h(b(e.name),1)])),_:2},1032,["class","onClick"])))),256))])),_:1})])),_:1})])),_:1})):p("v-if",!0),o(T,{ref:"mescrollRef",top:"88rpx",onInit:u(D),down:{use:!1},onUp:Z},{default:s((()=>[q.value.length?(a(),l(r,{key:0,class:"sidebar-marign pt-[var(--top-m)]"},{default:s((()=>[(a(!0),d(n,null,i(q.value,((e,t)=>(a(),l(r,{key:t,class:"mb-[var(--top-m)] card-template"},{default:s((()=>[o(r,{onClick:t=>{F({url:"/addon/shop/pages/order/detail",param:{order_id:e.order_id}})}},{default:s((()=>[o(r,{class:"flex justify-between items-center"},{default:s((()=>[o(r,{class:"text-[#303133] text-[26rpx] font-400 leading-[30rpx]"},{default:s((()=>[o(f,null,{default:s((()=>[h(b(u(k)("orderNo"))+":",1)])),_:1}),o(f,{class:"ml-[10rpx]"},{default:s((()=>[h(b(e.order_no),1)])),_:2},1024),o(f,{class:"text-[303133] text-[26rpx] font-400 nc-iconfont nc-icon-fuzhiV6xx1 ml-[11rpx]",onClick:C((t=>u(j)(e.order_no)),["stop"])},null,8,["onClick"])])),_:2},1024),o(r,{class:y(["text-[#303133] text-[26rpx] leading-[34rpx]",{"text-primary":1==e.status,"!text-[var(--text-color-light9)]":5==e.status||-1==e.status}])},{default:s((()=>[h(b(e.status_name.name),1)])),_:2},1032,["class"])])),_:2},1024),(a(!0),d(n,null,i(e.order_goods,((t,d)=>(a(),l(r,{class:"flex box-border mt-[20rpx]",key:d},{default:s((()=>[o(z,{width:"150rpx",height:"150rpx",radius:"var(--goods-rounded-big)",src:u(w)(t.goods_image_thumb_small?t.goods_image_thumb_small:""),model:"aspectFill"},{error:s((()=>[o(S,{class:"w-[150rpx] h-[150rpx] rounded-[var(--goods-rounded-big)] overflow-hidden",src:u(w)("static/resource/images/diy/shop_default.jpg"),mode:"aspectFill"},null,8,["src"])])),_:2},1032,["radius","src"]),o(r,{class:"ml-[20rpx] flex flex-1 flex-col box-border"},{default:s((()=>[o(r,{class:"max-w-[490rpx] text-[28rpx] leading-[40rpx] font-400 truncate text-[#303133]"},{default:s((()=>[h(b(t.goods_name),1)])),_:2},1024),o(r,{class:"flex justify-between items-baseline text-[#303133] mt-[14rpx]"},{default:s((()=>[o(r,null,{default:s((()=>[t.sku_name?(a(),l(r,{key:0,class:"text-[24rpx] text-[var(--text-color-light6)] font-400 truncate leading-[34rpx] max-w-[369rpx] mb-[10rpx]"},{default:s((()=>[h(b(t.sku_name),1)])),_:2},1024)):p("v-if",!0),"virtual"!=e.delivery_type?(a(),l(r,{key:1,class:"text-[24rpx] font-400 leading-[34rpx] text-[var(--text-color-light6)]"},{default:s((()=>[h(b(u(k)("deliveryType"))+" ： "+b(e.delivery_type_name),1)])),_:2},1024)):(a(),l(r,{key:2,class:"text-[24rpx] font-400 leading-[34rpx] text-[var(--text-color-light6)]"},{default:s((()=>[h(b(u(k)("createTime"))+" ："+b(e.create_time),1)])),_:2},1024))])),_:2},1024),o(f,{class:"text-right text-[26rpx] font-400 w-[90rpx] leading-[36rpx]"},{default:s((()=>[h("x"+b(t.num),1)])),_:2},1024)])),_:2},1024)])),_:2},1024)])),_:2},1024)))),128))])),_:2},1032,["onClick"]),o(r,{class:"flex justify-end items-center mt-[20rpx]"},{default:s((()=>[parseFloat(e.delivery_money)?(a(),l(r,{key:0,class:"text-[22rpx] text-[var(--text-color-light9)] leading-[30rpx] mr-[6rpx]"},{default:s((()=>[h(b(u(k)("service")),1)])),_:1})):p("v-if",!0),o(r,{class:"flex items-center"},{default:s((()=>[o(r,{class:"text-[22rpx] font-400 leading-[30rpx] text-[#303133]"},{default:s((()=>[h(b(u(k)("actualPayment"))+"：",1)])),_:1}),o(r,{class:"text-[var(--price-text-color)] price-font"},{default:s((()=>[o(f,{class:"text-[36rpx] mr-[2rpx]"},{default:s((()=>[h(b(e.point),1)])),_:2},1024),o(f,{class:"text-[30rpx]"},{default:s((()=>[h(b(u(k)("point")),1)])),_:1}),parseFloat(e.order_money)?(a(),d(n,{key:0},[o(f,{class:"text-[30rpx] mx-[4rpx]"},{default:s((()=>[h("+")])),_:1}),o(f,{class:"text-[36rpx] price-font"},{default:s((()=>[h(b(parseFloat(e.order_money)),1)])),_:2},1024),o(f,{class:"text-[30rpx] price-font ml-[2rpx]"},{default:s((()=>[h(b(u(k)("money")),1)])),_:1})],64)):p("v-if",!0)])),_:2},1024)])),_:2},1024)])),_:2},1024),1==e.status||3==e.status||5==e.status&&1==L.value.is_evaluate?(a(),l(r,{key:0,class:"flex justify-end text-[28rpx] mt-[20rpx] items-center"},{default:s((()=>[1==e.status?(a(),l(r,{key:0,class:"text-[24rpx] font-500 leading-[52rpx] h-[56rpx] min-w-[150rpx] text-center border-[2rpx] border-solid border-[var(--text-color-light9)] rounded-full text-[var(--text-color-light6)] box-bordertext-[24rpx] font-500 leading-[52rpx] h-[56rpx] min-w-[150rpx] text-center border-[2rpx] border-solid border-[var(--text-color-light9)] rounded-full text-[var(--text-color-light6)] box-border",onClick:C((t=>re(e,"close")),["stop"])},{default:s((()=>[h(b(u(k)("orderClose")),1)])),_:2},1032,["onClick"])):p("v-if",!0),1==e.status?(a(),l(r,{key:1,class:"text-[24rpx] font-500 leading-[52rpx] h-[56rpx] min-w-[150rpx] text-center border-[2rpx] border-solid text-[#fff] border-primary bg-primary rounded-full ml-[20rpx] box-border",onClick:C((t=>re(e,"pay")),["stop"])},{default:s((()=>[h(b(u(k)("topay")),1)])),_:2},1032,["onClick"])):p("v-if",!0),3==e.status?(a(),l(r,{key:2,class:"text-[24rpx] font-500 leading-[52rpx] h-[56rpx] min-w-[150rpx] text-center border-[2rpx] border-solid text-[#fff] border-primary bg-primary rounded-full ml-[20rpx] box-border",onClick:C((t=>re(e,"finish")),["stop"])},{default:s((()=>[h(b(u(k)("orderFinish")),1)])),_:2},1032,["onClick"])):p("v-if",!0),5==e.status&&1==L.value.is_evaluate?(a(),l(r,{key:3,class:"text-[24rpx] font-500 leading-[52rpx] h-[56rpx] min-w-[150rpx] text-center border-[2rpx] border-solid border-[var(--text-color-light9)] rounded-full ml-[20rpx] text-[var(--text-color-light6)] box-border",onClick:C((t=>re(e,"evaluate")),["stop"])},{default:s((()=>[h(b(1==e.is_evaluate?u(k)("selectedEvaluate"):u(k)("evaluate")),1)])),_:2},1032,["onClick"])):p("v-if",!0)])),_:2},1024)):p("v-if",!0)])),_:2},1024)))),128))])),_:1})):p("v-if",!0),!q.value.length&&G.value?(a(),l(A,{key:1,option:{tip:"暂无订单"}})):p("v-if",!0)])),_:1},8,["onInit"]),o(O,{ref_key:"payRef",ref:te,onClose:e.payClose},null,8,["onClose"])])),_:1},8,["style"])}}}),[["__scopeId","data-v-3e4c194e"]]);export{V as default};
