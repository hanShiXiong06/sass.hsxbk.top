import{d as e,r as t,p as a,o as r,c as l,w as s,b as o,O as d,a6 as p,P as i,f as u,u as n,n as x,a7 as c,a8 as f,i as _,a5 as m,g as v,h as y,Q as b,y as h,z as g,F as k,E as j,A as F,a as C,c5 as w,k as S,B as E,D as U}from"./index-2882a2d8.js";import{_ as I}from"./u--image.d52c0594.js";import{_ as M}from"./pay.d604a92e.js";import{d as z,e as R,o as A,b as D}from"./order.35117c90.js";import{g as O}from"./shop.365b8e43.js";import{M as P}from"./mescroll-body.e69cb222.js";import{M as Q}from"./mescroll-empty.7f392528.js";import{u as $}from"./useMescroll.26ccf5de.js";import{_ as B}from"./_plugin-vue_export-helper.1b428a4d.js";import"./u-image.46ebbbc1.js";import"./u-icon.1104ad2f.js";import"./u-transition.4448d2e5.js";import"./u-popup.2abbe959.js";import"./u-overlay.1a317a4e.js";import"./u-safe-bottom.f13b01b8.js";import"./pay.a752545f.js";import"./mescroll-i18n.c2747603.js";/* empty css                                                                       */const G=B(e({__name:"order_list",setup(e){const{mescrollInit:B,downCallback:G,getMescroll:J}=$(f,c),N=t([]),T=t(!1),Y=t(!1),q=t(""),H=t([]),K=t(""),L=t(""),V=t(!1);a((e=>{q.value=e.status||"",W(),Z()}));const W=()=>{O().then((e=>{K.value=e.data}))},X=e=>{T.value=!1;let t={page:e.num,limit:e.size,status:q.value,activity_type:"exchange"};R(t).then((t=>{let a=t.data.data;1==e.num&&(N.value=[]),N.value=N.value.concat(a),e.endSuccess(a.length),L.value=t.data.mch_id,V.value=t.data.is_trade_managed,T.value=!0})).catch((()=>{T.value=!0,e.endErr()}))},Z=()=>{Y.value=!1,H.value=[];H.value.push({name:"全部",status:""}),z().then((e=>{Object.values(e.data).forEach(((e,t)=>{H.value.push(e)})),Y.value=!0})).catch((()=>{Y.value=!0}))},ee=t(null),te=(e,t="")=>{var a;"pay"==t?null==(a=ee.value)||a.open(e.order_type,e.order_id,`/addon/phone_shop/pages/order/detail?order_id=${e.order_id}`):"close"==t?ae(e):"finish"==t?re(e):"evaluate"==t&&(e.is_evaluate?C({url:"/addon/phone_shop/pages/evaluate/order_evaluate_view",param:{order_id:e.order_id}}):C({url:"/addon/phone_shop/pages/evaluate/order_evaluate",param:{order_id:e.order_id}}))},ae=e=>{w({title:"提示",content:"您确定要关闭该订单吗？",confirmColor:S().themeColor["--primary-color"],success:t=>{t.confirm&&A(e.order_id).then((e=>{J().resetUpScroll()}))}})},re=e=>{w({title:"提示",content:"您确定物品已收到吗？",confirmColor:S().themeColor["--primary-color"],success:t=>{t.confirm&&D(e.order_id).then((e=>{J().resetUpScroll()}))}})};return(e,t)=>{const a=_,c=m,f=E,w=v(y("u--image"),I),S=U,z=v(y("pay"),M);return r(),l(a,{class:"bg-[#F6F6F6] min-h-screen overflow-hidden order-list",style:x(e.themeColor())},{default:s((()=>[Y.value?(r(),l(a,{key:0,class:"fixed left-0 top-0 right-0 z-10"},{default:s((()=>[o(c,{"scroll-x":"true",class:"scroll-Y box-border px-[30rpx] bg-white"},{default:s((()=>[o(a,{class:"flex whitespace-nowrap justify-between"},{default:s((()=>[(r(!0),d(i,null,p(H.value,((e,t)=>(r(),l(a,{class:b(["text-[28rpx] leading-[90rpx]",{"class-select":q.value===e.status.toString()}]),onClick:t=>{return a=e.status,q.value=a.toString(),N.value=[],void J().resetUpScroll();var a}},{default:s((()=>[h(g(e.name),1)])),_:2},1032,["class","onClick"])))),256))])),_:1})])),_:1})])),_:1})):u("v-if",!0),o(P,{ref:"mescrollRef",top:"90rpx",onInit:n(B),down:{use:!1},onUp:X},{default:s((()=>[N.value.length?(r(),l(a,{key:0,class:"mx-[30rpx] mt-[20rpx]"},{default:s((()=>[(r(!0),d(i,null,p(N.value,((e,t)=>(r(),l(a,{key:t,class:"mb-[20rpx] bg-[#fff] p-[20rpx] rounded-[16rpx]"},{default:s((()=>[o(a,{onClick:t=>{C({url:"/addon/phone_shop/pages/order/detail",param:{order_id:e.order_id}})}},{default:s((()=>[o(a,{class:"flex justify-between items-center"},{default:s((()=>[o(a,{class:"text-[#303133] text-[28rpx] font-400 leading-[30rpx]"},{default:s((()=>[h(g(n(k)("orderNo"))+"："+g(e.order_no),1)])),_:2},1024),o(a,{class:"text-[#EF900A] text-[28rpx]"},{default:s((()=>[h(g(e.status_name.name),1)])),_:2},1024)])),_:2},1024),(r(!0),d(i,null,p(e.order_goods,((t,p)=>(r(),l(a,{class:"flex box-border mt-[30rpx]",key:p},{default:s((()=>[o(a,{class:"w-[150rpx] h-[150rpx]"},{default:s((()=>[o(w,{class:"rounded-[10rpx] overflow-hidden",width:"150rpx",height:"150rpx",src:n(j)(t.goods_image_thumb_small?t.goods_image_thumb_small:""),model:"aspectFill"},{error:s((()=>[o(f,{class:"rounded-[10rpx] overflow-hidden w-[150rpx] h-[150rpx]",src:n(j)("static/resource/images/diy/shop_default.jpg"),mode:"aspectFill"},null,8,["src"])])),_:2},1032,["src"])])),_:2},1024),o(a,{class:"ml-[20rpx] flex flex-1 flex-col justify-between box-border"},{default:s((()=>[o(a,null,{default:s((()=>[o(S,{class:"text-[28rpx] text-item leading-[40rpx] text-[#303133]"},{default:s((()=>[h(g(t.goods_name),1)])),_:2},1024),t.sku_name?(r(),l(a,{key:0},{default:s((()=>[o(a,{class:"text-[24rpx] truncate mt-[10rpx] text-[#999] leading-[28rpx] max-w-[480rpx]"},{default:s((()=>[h(g(t.sku_name),1)])),_:2},1024)])),_:2},1024)):u("v-if",!0)])),_:2},1024),o(a,{class:"flex justify-between items-center text-[#303133]"},{default:s((()=>[o(a,{class:"text-right leading-[28rpx] price-font"},{default:s((()=>["exchange"==e.activity_type?(r(),d(i,{key:0},[o(S,null,{default:s((()=>[h(g(t.extend.point)+g(n(k)("point")),1)])),_:2},1024),parseFloat(t.price)?(r(),d(i,{key:0},[o(S,{class:"text-[28rpx]"},{default:s((()=>[h("+")])),_:1}),o(S,{class:"text-[24rpx]"},{default:s((()=>[h("￥")])),_:1}),o(S,{class:"text-[32rpx] font-500"},{default:s((()=>[h(g(parseFloat(t.price).toFixed(2).split(".")[0]),1)])),_:2},1024),o(S,{class:"text-[22rpx] font-500"},{default:s((()=>[h("."+g(parseFloat(t.price).toFixed(2).split(".")[1]),1)])),_:2},1024)],64)):u("v-if",!0)],64)):(r(),d(i,{key:1},[o(S,{class:"text-[24rpx]"},{default:s((()=>[h("￥")])),_:1}),o(S,{class:"text-[32rpx] font-500"},{default:s((()=>[h(g(parseFloat(t.price).toFixed(2).split(".")[0]),1)])),_:2},1024),o(S,{class:"text-[22rpx] font-500"},{default:s((()=>[h("."+g(parseFloat(t.price).toFixed(2).split(".")[1]),1)])),_:2},1024)],64))])),_:2},1024),o(S,{class:"text-right text-[26rpx]"},{default:s((()=>[h("x"+g(t.num),1)])),_:2},1024)])),_:2},1024)])),_:2},1024)])),_:2},1024)))),128))])),_:2},1032,["onClick"]),o(a,{class:"flex justify-between items-center mt-[20rpx]"},{default:s((()=>[o(S,{class:"text-[#666] text-[24rpx]"},{default:s((()=>[h(g(e.create_time),1)])),_:2},1024),o(a,{class:"flex items-center"},{default:s((()=>[o(a,{class:"text-[#999] text-[22rpx] mr-[4rpx]"},{default:s((()=>[h(g(n(k)("actualPayment"))+"：",1)])),_:1}),o(a,{class:"text-[var(--price-text-color)] price-font"},{default:s((()=>["exchange"==e.activity_type?(r(),d(i,{key:0},[o(S,null,{default:s((()=>[h(g(e.point)+g(n(k)("point")),1)])),_:2},1024),parseFloat(e.order_money)?(r(),d(i,{key:0},[o(S,{class:"text-[28rpx]"},{default:s((()=>[h("+")])),_:1}),o(S,{class:"text-[26rpx]"},{default:s((()=>[h("￥")])),_:1}),o(S,{class:"text-[36rpx] font-500"},{default:s((()=>[h(g(parseFloat(e.order_money).toFixed(2).split(".")[0]),1)])),_:2},1024),o(S,{class:"text-[24rpx] font-500"},{default:s((()=>[h("."+g(parseFloat(e.order_money).toFixed(2).split(".")[1]),1)])),_:2},1024)],64)):u("v-if",!0)],64)):(r(),d(i,{key:1},[o(S,{class:"text-[26rpx]"},{default:s((()=>[h("￥")])),_:1}),o(S,{class:"text-[36rpx] font-500"},{default:s((()=>[h(g(parseFloat(e.order_money).toFixed(2).split(".")[0]),1)])),_:2},1024),o(S,{class:"text-[24rpx] font-500"},{default:s((()=>[h("."+g(parseFloat(e.order_money).toFixed(2).split(".")[1]),1)])),_:2},1024)],64))])),_:2},1024)])),_:2},1024)])),_:2},1024),1==e.status||3==e.status||5==e.status&&1==K.value.is_evaluate?(r(),l(a,{key:0,class:"flex justify-end text-[28rpx] mt-[20rpx] items-center"},{default:s((()=>[1==e.status?(r(),l(a,{key:0,class:"inline-block text-[24rpx] leading-[52rpx] px-[23rpx] border-[2rpx] border-solid border-[#999] rounded-full text-[#303133] box-border",onClick:F((t=>te(e,"close")),["stop"])},{default:s((()=>[h(g(n(k)("orderClose")),1)])),_:2},1032,["onClick"])):u("v-if",!0),1==e.status?(r(),l(a,{key:1,class:"inline-block text-[24rpx] leading-[52rpx] px-[23rpx] border-[2rpx] border-solid text-[#fff] border-primary bg-primary rounded-full ml-[20rpx] box-border",onClick:F((t=>te(e,"pay")),["stop"])},{default:s((()=>[h(g(n(k)("topay")),1)])),_:2},1032,["onClick"])):u("v-if",!0),3==e.status?(r(),l(a,{key:2,class:"inline-block text-[24rpx] leading-[52rpx] px-[23rpx] border-[2rpx] border-solid text-[#fff] border-primary bg-primary rounded-full ml-[20rpx] box-border",onClick:F((t=>te(e,"finish")),["stop"])},{default:s((()=>[h(g(n(k)("orderFinish")),1)])),_:2},1032,["onClick"])):u("v-if",!0),5==e.status&&1==K.value.is_evaluate?(r(),l(a,{key:3,class:"inline-block text-[24rpx] leading-[52rpx] px-[23rpx] border-[2rpx] border-solid border-[#999] rounded-full ml-[20rpx] text-[#303133] box-border",onClick:F((t=>te(e,"evaluate")),["stop"])},{default:s((()=>[h(g(1==e.is_evaluate?n(k)("selectedEvaluate"):n(k)("evaluate")),1)])),_:2},1032,["onClick"])):u("v-if",!0)])),_:2},1024)):u("v-if",!0)])),_:2},1024)))),128))])),_:1})):u("v-if",!0),!N.value.length&&T.value?(r(),l(a,{key:1,class:"mx-[30rpx] mt-[20rpx] rounded-[16rpx] flex items-center justify-center noData"},{default:s((()=>[o(Q,{option:{tip:"暂无订单"}})])),_:1})):u("v-if",!0)])),_:1},8,["onInit"]),o(z,{ref_key:"payRef",ref:ee,onClose:e.payClose},null,8,["onClose"])])),_:1},8,["style"])}}}),[["__scopeId","data-v-c785ef5b"]]);export{G as default};
