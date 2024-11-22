import{d as e,r as t,p as a,o as r,c as l,w as s,b as o,P as i,a7 as n,Q as d,f as p,u as x,n as u,a8 as c,a9 as f,i as _,a6 as m,g as v,h as g,R as y,y as h,z as b,A as k,F,be as w,E as j,a as C,c3 as M,k as S,D as z,B as E}from"./index-7bf68536.js";import{_ as I}from"./u--image.b3bf1d5c.js";import{_ as U}from"./pay.d2e850e8.js";import{d as R,e as A,o as B,b as N}from"./order.3552570e.js";import{g as P}from"./shop.23520c6c.js";import{M as T}from"./mescroll-body.b6d57b41.js";import{M as D}from"./mescroll-empty.fcefb74e.js";import{u as O}from"./useMescroll.26ccf5de.js";import{_ as Q}from"./_plugin-vue_export-helper.1b428a4d.js";import"./u-image.e46f68ef.js";import"./u-icon.0c1c54c7.js";import"./u-transition.cdf87992.js";import"./u-popup.be4bfacd.js";import"./u-safe-bottom.908eeae4.js";import"./pay.2db06871.js";import"./mescroll-i18n.14e7fe02.js";/* empty css                                                                       */const V=Q(e({__name:"list",setup(e){const{mescrollInit:Q,downCallback:V,getMescroll:$}=O(f,c),q=t([]),G=t(!1),H=t(!1),J=t(""),K=t([]),L=t(""),W=t(""),X=t(!1);t(null),a((e=>{J.value=e.status||"",Y(),ee()}));const Y=()=>{P().then((e=>{L.value=e.data}))},Z=e=>{G.value=!1;let t={page:e.num,limit:e.size,status:J.value};A(t).then((t=>{let a=t.data.data;1==e.num&&(q.value=[]),a.forEach((e=>{e.is_show_evaluate=!0;let t=0;for(let a=0;a<e.order_goods.length;a++)1==e.order_goods[a].status&&1!=e.order_goods[a].is_enable_refund||t++;t==e.order_goods.length&&(e.is_show_evaluate=!1)})),q.value=q.value.concat(a),e.endSuccess(a.length),W.value=t.data.mch_id,X.value=t.data.is_trade_managed,G.value=!0})).catch((()=>{G.value=!0,e.endErr()}))},ee=()=>{H.value=!1,K.value=[];K.value.push({name:"全部",status:""}),R().then((e=>{Object.values(e.data).forEach(((e,t)=>{K.value.push(e)})),H.value=!0})).catch((()=>{H.value=!0}))},te=t(null),ae=(e,t="")=>{var a;"pay"==t?null==(a=te.value)||a.open(e.order_type,e.order_id,`/addon/shop/pages/order/detail?order_id=${e.order_id}`):"close"==t?re(e):"finish"==t?le(e):"evaluate"==t&&(e.is_evaluate?C({url:"/addon/shop/pages/evaluate/order_evaluate_view",param:{order_id:e.order_id}}):C({url:"/addon/shop/pages/evaluate/order_evaluate",param:{order_id:e.order_id}}))},re=e=>{M({title:"提示",content:"您确定要关闭该订单吗？",confirmColor:S().themeColor["--primary-color"],success:t=>{t.confirm&&B(e.order_id).then((e=>{$().resetUpScroll()}))}})},le=e=>{M({title:"提示",content:"您确定物品已收到吗？",confirmColor:S().themeColor["--primary-color"],success:t=>{t.confirm&&N(e.order_id).then((e=>{$().resetUpScroll()}))}})};return(e,t)=>{const a=_,c=m,f=z,M=E,S=v(g("u--image"),I),R=v(g("pay"),U);return r(),l(a,{class:"bg-[var(--page-bg-color)] min-h-screen overflow-hidden order-list",style:u(e.themeColor())},{default:s((()=>[H.value?(r(),l(a,{key:0,class:"fixed left-0 top-0 right-0 z-10"},{default:s((()=>[o(c,{"scroll-x":!0,class:"tab-style-2"},{default:s((()=>[o(a,{class:"tab-content"},{default:s((()=>[(r(!0),i(d,null,n(K.value,((e,t)=>(r(),l(a,{class:y(["tab-items",{"class-select":J.value===e.status.toString()}]),onClick:t=>{return a=e.status,J.value=a.toString(),q.value=[],void $().resetUpScroll();var a}},{default:s((()=>[h(b(e.name),1)])),_:2},1032,["class","onClick"])))),256))])),_:1})])),_:1})])),_:1})):p("v-if",!0),o(T,{ref:"mescrollRef",top:"88rpx",onInit:x(Q),down:{use:!1},onUp:Z},{default:s((()=>[q.value.length?(r(),l(a,{key:0,class:"sidebar-margin pt-[var(--top-m)]"},{default:s((()=>[(r(!0),i(d,null,n(q.value,((e,t)=>(r(),l(a,{key:t,class:"mb-[var(--top-m)] card-template"},{default:s((()=>[o(a,{onClick:k((t=>{C({url:"/addon/shop/pages/order/detail",param:{order_id:e.order_id}})}),["stop"])},{default:s((()=>[o(a,{class:"flex justify-between items-center"},{default:s((()=>[o(a,{class:"text-[#303133] text-[26rpx] font-400 leading-[36rpx]"},{default:s((()=>[o(f,null,{default:s((()=>[h(b(x(F)("orderNo"))+":",1)])),_:1}),o(f,{class:"ml-[10rpx]"},{default:s((()=>[h(b(e.order_no),1)])),_:2},1024),o(f,{class:"text-[#303133] text-[26rpx] font-400 nc-iconfont nc-icon-fuzhiV6xx1 ml-[11rpx]",onClick:k((t=>x(w)(e.order_no)),["stop"])},null,8,["onClick"])])),_:2},1024),o(a,{class:y(["text-[#303133] text-[26rpx] leading-[34rpx]",{"text-primary":1==e.status,"!text-[var(--text-color-light9)]":5==e.status||-1==e.status}])},{default:s((()=>[h(b(e.status_name.name),1)])),_:2},1032,["class"])])),_:2},1024),(r(!0),i(d,null,n(e.order_goods,((t,n)=>(r(),i(d,{key:n},[o(a,{class:"flex box-border mt-[20rpx]"},{default:s((()=>[o(S,{width:"150rpx",height:"150rpx",radius:"var(--goods-rounded-big)",src:x(j)(t.goods_image_thumb_small?t.goods_image_thumb_small:""),mode:"aspectFill"},{error:s((()=>[o(M,{class:"w-[150rpx] h-[150rpx] rounded-[var(--goods-rounded-big)] overflow-hidden",src:x(j)("static/resource/images/diy/shop_default.jpg"),mode:"aspectFill"},null,8,["src"])])),_:2},1032,["radius","src"]),o(a,{class:"ml-[20rpx] flex flex-1 flex-col box-border"},{default:s((()=>[o(a,{class:"flex justify-between items-baseline"},{default:s((()=>[o(a,{class:"max-w-[322rpx] text-[28rpx] leading-[40rpx] font-400 truncate text-[#303133]"},{default:s((()=>[h(b(t.goods_name),1)])),_:2},1024),"exchange"==e.activity_type?(r(),i(d,{key:0},[parseFloat(t.price)?(r(),l(a,{key:0,class:"text-right ml-[10rpx] leading-[42rpx]"},{default:s((()=>[o(f,{class:"text-[22rpx] font-400 price-font"},{default:s((()=>[h("￥")])),_:1}),o(f,{class:"text-[36rpx] font-500 price-font"},{default:s((()=>[h(b(parseFloat(t.price).toFixed(2).split(".")[0]),1)])),_:2},1024),o(f,{class:"text-[22rpx] font-500 price-font"},{default:s((()=>[h("."+b(parseFloat(t.price).toFixed(2).split(".")[1]),1)])),_:2},1024)])),_:2},1024)):p("v-if",!0)],64)):(r(),l(a,{key:1,class:"text-right leading-[42rpx] ml-[10rpx]"},{default:s((()=>[o(f,{class:"text-[22rpx] price-font"},{default:s((()=>[h("￥")])),_:1}),o(f,{class:"text-[36rpx] font-500 price-font"},{default:s((()=>[h(b(parseFloat(t.price).toFixed(2).split(".")[0]),1)])),_:2},1024),o(f,{class:"text-[22rpx] font-500 price-font"},{default:s((()=>[h("."+b(parseFloat(t.price).toFixed(2).split(".")[1]),1)])),_:2},1024)])),_:2},1024))])),_:2},1024),o(a,{class:"flex justify-between items-baseline text-[#303133] mt-[14rpx]"},{default:s((()=>[o(a,null,{default:s((()=>[t.sku_name?(r(),l(a,{key:0,class:"text-[24rpx] text-[var(--text-color-light6)] font-400 truncate leading-[34rpx] max-w-[369rpx] mb-[10rpx]"},{default:s((()=>[h(b(t.sku_name),1)])),_:2},1024)):p("v-if",!0),"virtual"!=e.delivery_type?(r(),l(a,{key:1,class:"text-[24rpx] font-400 leading-[34rpx] text-[var(--text-color-light6)]"},{default:s((()=>[h(b(x(F)("deliveryType"))+" ： "+b(e.delivery_type_name),1)])),_:2},1024)):(r(),l(a,{key:2,class:"text-[24rpx] font-400 leading-[34rpx] text-[var(--text-color-light6)]"},{default:s((()=>[h(b(x(F)("createTime"))+" ："+b(e.create_time),1)])),_:2},1024))])),_:2},1024),o(f,{class:"text-right text-[26rpx] font-400 w-[90rpx] leading-[36rpx]"},{default:s((()=>[h("x"+b(t.num),1)])),_:2},1024)])),_:2},1024)])),_:2},1024)])),_:2},1024),t.extend&&t.extend.is_newcomer&&t.num>1?(r(),l(a,{key:0,class:"flex items-center box-border mt-[8rpx]"},{default:s((()=>[o(M,{class:"h-[24rpx] w-[56rpx]",src:x(j)("addon/shop/newcomer.png"),mode:"heightFix"},null,8,["src"]),o(a,{class:"text-[24rpx] text-[#FFB000] leading-[34rpx] ml-[8rpx]"},{default:s((()=>[h("第1"+b(t.unit)+"，￥"+b(parseFloat(t.extend.newcomer_price).toFixed(2))+"/"+b(t.unit)+"；第"+b(t.num>2?"2~"+t.num:"2")+b(t.unit)+"，￥"+b(parseFloat(t.price).toFixed(2))+"/"+b(t.unit),1)])),_:2},1024)])),_:2},1024)):p("v-if",!0)],64)))),128))])),_:2},1032,["onClick"]),o(a,{class:"flex justify-end items-center mt-[20rpx]"},{default:s((()=>[o(a,{class:"flex items-baseline"},{default:s((()=>[parseFloat(e.delivery_money)?(r(),l(a,{key:0,class:"text-[22rpx] text-[var(--text-color-light9)] leading-[30rpx] mr-[6rpx]"},{default:s((()=>[h(b(x(F)("service")),1)])),_:1})):p("v-if",!0),o(a,{class:"text-[22rpx] font-400 leading-[30rpx] text-[#303133]"},{default:s((()=>[h(b(x(F)("actualPayment"))+"：",1)])),_:1}),o(a,{class:"leading-[1] text-[var(--price-text-color)]"},{default:s((()=>["exchange"==e.activity_type?(r(),i(d,{key:0},[o(f,{class:"text-[36rpx] mr-[2rpx] leading-[40rpx] price-font font-500"},{default:s((()=>[h(b(e.point),1)])),_:2},1024),o(f,{class:"text-[20rpx] leading-[28rpx] font-500"},{default:s((()=>[h(b(x(F)("point")),1)])),_:1}),parseFloat(e.order_money)?(r(),i(d,{key:0},[o(f,{class:"text-[20rpx] mx-[4rpx] font-500 leading-[28rpx]"},{default:s((()=>[h("+")])),_:1}),o(f,{class:"text-[36rpx] font-500 leading-[40rpx] price-font"},{default:s((()=>[h(b(parseFloat(e.order_money).toFixed(2)),1)])),_:2},1024),o(f,{class:"text-[20rpx] font-500 leading-[28rpx] ml-[2rpx]"},{default:s((()=>[h(b(x(F)("money")),1)])),_:1})],64)):p("v-if",!0)],64)):(r(),i(d,{key:1},[o(f,{class:"text-[22rpx] leading-[26rpx] price-font"},{default:s((()=>[h("￥")])),_:1}),o(f,{class:"text-[36rpx] font-500 leading-[40rpx] price-font"},{default:s((()=>[h(b(parseFloat(e.order_money).toFixed(2).split(".")[0]),1)])),_:2},1024),o(f,{class:"text-[22rpx] font-500 leading-[28rpx] price-font"},{default:s((()=>[h("."+b(parseFloat(e.order_money).toFixed(2).split(".")[1]),1)])),_:2},1024)],64))])),_:2},1024)])),_:2},1024)])),_:2},1024),1==e.status||3==e.status||5==e.status&&e.is_show_evaluate&&1==L.value.is_evaluate?(r(),l(a,{key:0,class:"flex justify-end text-[28rpx] mt-[20rpx] items-center"},{default:s((()=>[1==e.status?(r(),l(a,{key:0,class:"text-[24rpx] font-500 leading-[52rpx] h-[56rpx] min-w-[150rpx] text-center border-[2rpx] border-solid border-[var(--text-color-light9)] rounded-full text-[var(--text-color-light6)] box-border",onClick:k((t=>ae(e,"close")),["stop"])},{default:s((()=>[h(b(x(F)("orderClose")),1)])),_:2},1032,["onClick"])):p("v-if",!0),1==e.status?(r(),l(a,{key:1,class:"text-[24rpx] font-500 flex-center h-[56rpx] min-w-[150rpx] text-center border-[0] text-[#fff] primary-btn-bg rounded-full ml-[20rpx] box-border",onClick:k((t=>ae(e,"pay")),["stop"])},{default:s((()=>[h(b(x(F)("topay")),1)])),_:2},1032,["onClick"])):p("v-if",!0),3==e.status?(r(),l(a,{key:2,class:"text-[24rpx] font-500 flex-center h-[56rpx] min-w-[150rpx] text-center border-[0] text-[#fff] primary-btn-bg rounded-full ml-[20rpx] box-border",onClick:k((t=>ae(e,"finish")),["stop"])},{default:s((()=>[h(b(x(F)("orderFinish")),1)])),_:2},1032,["onClick"])):p("v-if",!0),5==e.status&&e.is_show_evaluate&&1==L.value.is_evaluate?(r(),l(a,{key:3,class:"text-[24rpx] font-500 leading-[52rpx] h-[56rpx] min-w-[150rpx] text-center border-[2rpx] border-solid border-[var(--text-color-light9)] rounded-full ml-[20rpx] text-[var(--text-color-light6)] box-border",onClick:k((t=>ae(e,"evaluate")),["stop"])},{default:s((()=>[h(b(1==e.is_evaluate?x(F)("selectedEvaluate"):x(F)("evaluate")),1)])),_:2},1032,["onClick"])):p("v-if",!0)])),_:2},1024)):p("v-if",!0)])),_:2},1024)))),128))])),_:1})):p("v-if",!0),!q.value.length&&G.value?(r(),l(D,{key:1,option:{tip:"暂无订单"}})):p("v-if",!0)])),_:1},8,["onInit"]),o(R,{ref_key:"payRef",ref:te,onClose:e.payClose},null,8,["onClose"])])),_:1},8,["style"])}}}),[["__scopeId","data-v-a4e030a2"]]);export{V as default};
