import{d as e,r as t,j as a,o as r,c as l,w as s,u as o,b as d,E as i,F as p,G as n,f as u,n as x,a5 as c,a6 as f,i as _,a4 as m,g as v,h as y,H as b,x as g,y as h,t as k,V as j,_ as F,a as C,c1 as w,C as S}from"./index-905183d4.js";import{_ as E}from"./u-icon.86a2aad0.js";import{_ as z}from"./u--image.b5d65e0e.js";import{_ as D}from"./pay.2560ca84.js";import{c as I,d as M,o as U,a as A}from"./order.f2e9a9a3.js";import{g as N}from"./shop.810a07e8.js";import{M as R}from"./mescroll-body.b8d008ed.js";import{M as B}from"./mescroll-empty.f9bce990.js";import{u as G}from"./useMescroll.26ccf5de.js";import{_ as H}from"./_plugin-vue_export-helper.1b428a4d.js";import"./u-image.44c969ef.js";import"./u-transition.dbaca185.js";import"./u-button.d3798ecb.js";import"./u-loading-icon.c376267d.js";import"./u-popup.e3f6594b.js";import"./u-safe-bottom.e94b03c1.js";import"./pay.01186f9d.js";import"./mescroll-uni-option.0af4878d.js";import"./mescroll-i18n.6025c811.js";/* empty css                                                                       */const O=H(e({__name:"list",setup(e){const{mescrollInit:H,downCallback:O,getMescroll:P}=G(f,c);let V=t([]),Y=t(!1),$=t(!1),q=t(""),J=t([]);const K=t("");let L=t(""),Q=t(!1);a((e=>{q.value=e.status||"",T(),X()}));const T=()=>{N().then((e=>{K.value=e.data}))},W=e=>{Y.value=!1;let t={page:e.num,limit:e.size,status:q.value};M(t).then((t=>{let a=t.data.data;1==e.num&&(V.value=[]),V.value=V.value.concat(a),e.endSuccess(a.length),L.value=t.data.mch_id,Q.value=t.data.is_trade_managed,Y.value=!0})).catch((()=>{Y.value=!0,e.endErr()}))},X=()=>{$.value=!1,J.value=[];J.value.push({name:"全部",status:""}),I().then((e=>{Object.values(e.data).forEach(((e,t)=>{J.value.push(e)})),$.value=!0})).catch((()=>{$.value=!0}))},Z=t(null),ee=(e,t="")=>{var a;"pay"==t?null==(a=Z.value)||a.open(e.order_type,e.order_id,`/addon/shop/pages/order/detail?order_id=${e.order_id}`):"close"==t?te(e):"finish"==t?ae(e):"evaluate"==t&&(e.is_evaluate?C({url:"/addon/shop/pages/evaluate/order_evaluate_view",param:{order_id:e.order_id}}):C({url:"/addon/shop/pages/evaluate/order_evaluate",param:{order_id:e.order_id}}))},te=e=>{w({title:"提示",content:"您确定要关闭该订单吗？",success:t=>{t.confirm&&U(e.order_id).then((e=>{P().resetUpScroll()}))}})},ae=e=>{w({title:"提示",content:"您确定物品已收到吗？",success:t=>{t.confirm&&A(e.order_id).then((e=>{P().resetUpScroll()}))}})};return(e,t)=>{const a=_,c=m,f=v(y("u-icon"),E),w=v(y("u--image"),z),I=S,M=v(y("pay"),D);return r(),l(a,{class:"bg-[#F6F6F6] min-h-screen overflow-hidden order-list",style:x(e.themeColor())},{default:s((()=>[o($)?(r(),l(a,{key:0,class:"fixed left-0 top-0 right-0 z-10"},{default:s((()=>[d(c,{"scroll-x":"true",class:"scroll-Y box-border px-[30rpx] bg-white"},{default:s((()=>[d(a,{class:"flex whitespace-nowrap justify-between"},{default:s((()=>[(r(!0),i(n,null,p(o(J),((e,t)=>(r(),l(a,{class:b(["text-[28rpx] leading-[90rpx]",{"class-select":o(q)===e.status.toString()}]),onClick:t=>{return a=e.status,q.value=a.toString(),V.value=[],void P().resetUpScroll();var a}},{default:s((()=>[g(h(e.name),1)])),_:2},1032,["class","onClick"])))),256))])),_:1})])),_:1})])),_:1})):u("v-if",!0),d(R,{ref:"mescrollRef",top:"90rpx",onInit:o(H),onDown:o(O),onUp:W},{default:s((()=>[o(V).length?(r(),l(a,{key:0,class:"mx-[30rpx] mt-[20rpx]"},{default:s((()=>[(r(!0),i(n,null,p(o(V),((e,t)=>(r(),l(a,{key:t,class:"mb-[20rpx] bg-[#fff] p-[20rpx] rounded-[16rpx]"},{default:s((()=>[d(a,{onClick:t=>{C({url:"/addon/shop/pages/order/detail",param:{order_id:e.order_id}})}},{default:s((()=>[d(a,{class:"flex justify-between items-center"},{default:s((()=>[d(a,{class:"text-[#303133] text-[28rpx] font-400 leading-[30rpx]"},{default:s((()=>[g(h(o(k)("orderNo"))+"："+h(e.order_no),1)])),_:2},1024),d(a,{class:"text-[#EF900A] text-[28rpx]"},{default:s((()=>[g(h(e.status_name.name),1)])),_:2},1024)])),_:2},1024),(r(!0),i(n,null,p(e.order_goods,((t,p)=>(r(),l(a,{class:"flex box-border mt-[30rpx]",key:p},{default:s((()=>[d(a,{class:"w-[150rpx] h-[150rpx]"},{default:s((()=>[d(w,{class:"rounded-[10rpx] overflow-hidden",width:"150rpx",height:"150rpx",src:o(j)(t.goods_image_thumb_small?t.goods_image_thumb_small:""),model:"aspectFill"},{error:s((()=>[d(f,{name:"photo",color:"#999",size:"50"})])),_:2},1032,["src"])])),_:2},1024),d(a,{class:"ml-[20rpx] flex flex-1 flex-col justify-between box-border"},{default:s((()=>[d(a,null,{default:s((()=>[d(I,{class:"text-[28rpx] text-item leading-[40rpx] text-[#303133]"},{default:s((()=>[g(h(t.goods_name),1)])),_:2},1024),t.sku_name?(r(),l(a,{key:0},{default:s((()=>[d(a,{class:"text-[24rpx] truncate mt-[10rpx] text-[#999] leading-[28rpx] max-w-[480rpx]"},{default:s((()=>[g(h(t.sku_name),1)])),_:2},1024)])),_:2},1024)):u("v-if",!0),t.sku_no?(r(),l(a,{key:1},{default:s((()=>[d(a,{class:"text-[24rpx] truncate mt-[10rpx] text-[#999] leading-[28rpx] max-w-[480rpx]"},{default:s((()=>[g(" 串号: "+h(t.sku_no),1)])),_:2},1024)])),_:2},1024)):u("v-if",!0)])),_:2},1024),d(a,{class:"flex justify-between items-center text-[#303133]"},{default:s((()=>[d(a,{class:"text-right leading-[28rpx] price-font"},{default:s((()=>["exchange"==e.activity_type?(r(),i(n,{key:0},[d(I,null,{default:s((()=>[g(h(t.extend.point)+h(o(k)("point")),1)])),_:2},1024),parseFloat(t.price)?(r(),i(n,{key:0},[d(I,{class:"text-[28rpx]"},{default:s((()=>[g("+")])),_:1}),d(I,{class:"text-[24rpx]"},{default:s((()=>[g("￥")])),_:1}),d(I,{class:"text-[32rpx] font-500"},{default:s((()=>[g(h(parseFloat(t.price).toFixed(2).split(".")[0]),1)])),_:2},1024),d(I,{class:"text-[22rpx] font-500"},{default:s((()=>[g("."+h(parseFloat(t.price).toFixed(2).split(".")[1]),1)])),_:2},1024)],64)):u("v-if",!0)],64)):(r(),i(n,{key:1},[d(I,{class:"text-[24rpx]"},{default:s((()=>[g("￥")])),_:1}),d(I,{class:"text-[32rpx] font-500"},{default:s((()=>[g(h(parseFloat(t.price).toFixed(2).split(".")[0]),1)])),_:2},1024),d(I,{class:"text-[22rpx] font-500"},{default:s((()=>[g("."+h(parseFloat(t.price).toFixed(2).split(".")[1]),1)])),_:2},1024)],64))])),_:2},1024),d(I,{class:"text-right text-[26rpx]"},{default:s((()=>[g("x"+h(t.num),1)])),_:2},1024)])),_:2},1024)])),_:2},1024)])),_:2},1024)))),128))])),_:2},1032,["onClick"]),d(a,{class:"flex justify-between items-center mt-[20rpx]"},{default:s((()=>[d(I,{class:"text-[#666] text-[24rpx]"},{default:s((()=>[g(h(e.create_time),1)])),_:2},1024),d(a,{class:"flex items-center"},{default:s((()=>[d(a,{class:"text-[#999] text-[22rpx] mr-[4rpx]"},{default:s((()=>[g(h(o(k)("actualPayment"))+"：",1)])),_:1}),d(a,{class:"text-[var(--price-text-color)] price-font"},{default:s((()=>["exchange"==e.activity_type?(r(),i(n,{key:0},[d(I,null,{default:s((()=>[g(h(e.point)+h(o(k)("point")),1)])),_:2},1024),parseFloat(e.order_money)?(r(),i(n,{key:0},[d(I,{class:"text-[28rpx]"},{default:s((()=>[g("+")])),_:1}),d(I,{class:"text-[26rpx]"},{default:s((()=>[g("￥")])),_:1}),d(I,{class:"text-[36rpx] font-500"},{default:s((()=>[g(h(parseFloat(e.order_money).toFixed(2).split(".")[0]),1)])),_:2},1024),d(I,{class:"text-[24rpx] font-500"},{default:s((()=>[g("."+h(parseFloat(e.order_money).toFixed(2).split(".")[1]),1)])),_:2},1024)],64)):u("v-if",!0)],64)):(r(),i(n,{key:1},[d(I,{class:"text-[26rpx]"},{default:s((()=>[g("￥")])),_:1}),d(I,{class:"text-[36rpx] font-500"},{default:s((()=>[g(h(parseFloat(e.order_money).toFixed(2).split(".")[0]),1)])),_:2},1024),d(I,{class:"text-[24rpx] font-500"},{default:s((()=>[g("."+h(parseFloat(e.order_money).toFixed(2).split(".")[1]),1)])),_:2},1024)],64))])),_:2},1024)])),_:2},1024)])),_:2},1024),1==e.status||3==e.status||5==e.status&&1==K.value.is_evaluate?(r(),l(a,{key:0,class:"flex justify-end text-[28rpx] mt-[20rpx] items-center"},{default:s((()=>[1==e.status?(r(),l(a,{key:0,class:"inline-block text-[24rpx] leading-[52rpx] px-[23rpx] border-[2rpx] border-solid border-[#999] rounded-full text-[#303133] box-border",onClick:F((t=>ee(e,"close")),["stop"])},{default:s((()=>[g(h(o(k)("orderClose")),1)])),_:2},1032,["onClick"])):u("v-if",!0),1==e.status?(r(),l(a,{key:1,class:"inline-block text-[24rpx] leading-[52rpx] px-[23rpx] border-[2rpx] border-solid text-[#fff] border-primary bg-primary rounded-full ml-[20rpx] box-border",onClick:F((t=>ee(e,"pay")),["stop"])},{default:s((()=>[g(h(o(k)("topay")),1)])),_:2},1032,["onClick"])):u("v-if",!0),3==e.status?(r(),l(a,{key:2,class:"inline-block text-[24rpx] leading-[52rpx] px-[23rpx] border-[2rpx] border-solid text-[#fff] border-primary bg-primary rounded-full ml-[20rpx] box-border",onClick:F((t=>ee(e,"finish")),["stop"])},{default:s((()=>[g(h(o(k)("orderFinish")),1)])),_:2},1032,["onClick"])):u("v-if",!0),5==e.status&&1==K.value.is_evaluate?(r(),l(a,{key:3,class:"inline-block text-[24rpx] leading-[52rpx] px-[23rpx] border-[2rpx] border-solid border-[#999] rounded-full ml-[20rpx] text-[#303133] box-border",onClick:F((t=>ee(e,"evaluate")),["stop"])},{default:s((()=>[g(h(o(k)("evaluate")),1)])),_:2},1032,["onClick"])):u("v-if",!0)])),_:2},1024)):u("v-if",!0)])),_:2},1024)))),128))])),_:1})):u("v-if",!0),!o(V).length&&o(Y)?(r(),l(a,{key:1,class:"mx-[30rpx] mt-[20rpx] bg-[#fff] rounded-[16rpx] flex items-center justify-center noData"},{default:s((()=>[d(B,{option:{tip:"暂无订单"}})])),_:1})):u("v-if",!0)])),_:1},8,["onInit","onDown"]),d(M,{ref_key:"payRef",ref:Z,onClose:e.payClose},null,8,["onClose"])])),_:1},8,["style"])}}}),[["__scopeId","data-v-37ea5eb0"]]);export{O as default};