import{d as e,r as t,j as a,o as l,c as s,w as r,b as o,E as i,F as n,G as u,f as c,u as d,n as m,a5 as p,a6 as f,i as _,a4 as x,g as v,h,H as y,x as b,y as g,V as j,t as w,a as k,c1 as C,C as S}from"./index-905183d4.js";import{_ as M}from"./u-icon.86a2aad0.js";import{_ as U}from"./u--image.b5d65e0e.js";import{_ as z}from"./u-button.d3798ecb.js";import{_ as E}from"./pay.2560ca84.js";import{_ as I}from"./tabbar.f4383367.js";import{g as D,b as R,c as F,d as A}from"./order.7616de0f.js";import{M as B}from"./mescroll-body.b8d008ed.js";import{M as G}from"./mescroll-empty.f9bce990.js";import{u as H}from"./useMescroll.26ccf5de.js";import{_ as L}from"./_plugin-vue_export-helper.1b428a4d.js";import"./u-image.44c969ef.js";import"./u-transition.dbaca185.js";import"./u-loading-icon.c376267d.js";import"./u-popup.e3f6594b.js";import"./u-safe-bottom.e94b03c1.js";import"./pay.01186f9d.js";import"./u-badge.82a65592.js";import"./u-tabbar.bedfa48a.js";import"./mescroll-uni-option.0af4878d.js";import"./mescroll-i18n.6025c811.js";/* empty css                                                                       */const N=L(e({__name:"list",setup(e){const{mescrollInit:L,downCallback:N,getMescroll:O}=H(f,p),P=t([]),V=t(!1),Y=t(!1),$=t(""),q=t([]);a((e=>{$.value=e.order_status||"",J()}));const J=()=>{Y.value=!1,q.value=[];q.value.push({name:"全部",status:""}),D().then((e=>{Object.values(e.data).forEach(((e,t)=>{q.value.push(e)})),Y.value=!0})).catch((()=>{Y.value=!0}))},K=e=>{V.value=!1;let t={page:e.num,limit:e.size,order_status:$.value};R(t).then((t=>{let a=t.data.data;1==e.num&&(P.value=[]),P.value=P.value.concat(a),e.endSuccess(a.length),V.value=!0})).catch((()=>{V.value=!0,e.endErr()}))},Q=t(null),T=e=>{C({title:"提示",content:"您确定要删除该订单吗？",success:t=>{t.confirm&&F(e.order_id).then((e=>{O().resetUpScroll()})).catch((()=>{O().resetUpScroll()}))}})},W=e=>{C({title:"提示",content:"您确定要删除该订单吗？",success:t=>{t.confirm&&A(e.order_id).then((e=>{O().resetUpScroll()})).catch((()=>{O().resetUpScroll()}))}})};return(e,t)=>{const a=_,p=x,f=S,C=v(h("u-icon"),M),D=v(h("u--image"),U),R=v(h("u-button"),z),F=v(h("pay"),E),A=v(h("tabbar"),I);return l(),s(a,{class:"bg-[#f8f8f8] min-h-screen overflow-hidden",style:m(e.themeColor())},{default:r((()=>[Y.value?(l(),s(a,{key:0,class:"fixed left-0 top-0 right-0 z-10"},{default:r((()=>[o(p,{"scroll-x":"true",class:"scroll-Y box-border px-[24rpx] bg-white"},{default:r((()=>[o(a,{class:"flex whitespace-nowrap justify-around"},{default:r((()=>[(l(!0),i(u,null,n(q.value,((e,t)=>(l(),s(a,{class:y(["text-sm leading-[90rpx]",{"class-select":$.value===e.status.toString()}]),onClick:t=>{return a=e.status,$.value=a.toString(),P.value=[],void O().resetUpScroll();var a}},{default:r((()=>[b(g(e.name),1)])),_:2},1032,["class","onClick"])))),256))])),_:1})])),_:1})])),_:1})):c("v-if",!0),o(B,{ref:"mescrollRef",top:"114rpx",onInit:d(L),onDown:d(N),onUp:K},{default:r((()=>[(l(!0),i(u,null,n(P.value,((e,t)=>(l(),s(a,{key:e.order_id,class:"mx-3 mb-3 bg-white p-3 rounded"},{default:r((()=>[o(a,{class:"flex justify-between items-center text-sm text-gray-500 pb-3 border-0 border-b border-slate-200 border-solid"},{default:r((()=>[o(a,null,{default:r((()=>[b(g(e.order_no),1)])),_:2},1024),o(f,null,{default:r((()=>[b(g(e.order_status_info.name),1)])),_:2},1024)])),_:2},1024),o(a,null,{default:r((()=>[(l(!0),i(u,null,n(e.item,((t,i)=>(l(),s(a,{class:"order-goods-item flex mt-[30rpx]",key:i,onClick:t=>{k({url:"/addon/o2o/pages/order/detail",param:{order_id:e.order_id}})}},{default:r((()=>[o(a,{class:"w-[160rpx] h-[160rpx] flex-2"},{default:r((()=>[o(D,{class:"rounded-[10rpx] overflow-hidden",width:"160rpx",height:"160rpx",src:d(j)(t.item_image_thumb_small?t.item_image_thumb_small:""),model:"aspectFill"},{error:r((()=>[o(C,{name:"photo",color:"#999",size:"50"})])),_:2},1032,["src"])])),_:2},1024),o(a,{class:"ml-[20rpx] flex flex-1 flex-col justify-between"},{default:r((()=>[o(a,{class:"flex justify-between items-center"},{default:r((()=>[o(f,{class:"text-[28rpx] text-item leading-[40rpx] max-h-[80rpx] w-[360rpx] multi-hidden"},{default:r((()=>[b(g(t.item_name),1)])),_:2},1024),o(f,{class:"shrink-0 text-[24rpx] text-[var(--primary-color)] ml-[10rpx] leading-[40rpx]"},{default:r((()=>[b(g(t.pay_time?"":d(w)("notPaid")),1)])),_:2},1024)])),_:2},1024),o(a,{class:"flex justify-between"},{default:r((()=>[o(f,{class:"text-right text-[28rpx] text-[var(--price-text-color)] price-font"},{default:r((()=>[b("￥"+g(t.price),1)])),_:2},1024),o(f,{class:"text-right text-[24rpx]"},{default:r((()=>[b("x"+g(t.num),1)])),_:2},1024)])),_:2},1024)])),_:2},1024)])),_:2},1032,["onClick"])))),128))])),_:2},1024),c(' <view class="flex items-center justify-between  text-[28rpx]  mt-[40rpx]">\r\n                        <text class="text-[#999]">{{ item.create_time }}</text>\r\n\t\t\t\t\t</view> '),o(a,{class:"flex items-center justify-end mt-[30rpx]"},{default:r((()=>[o(a,null,{default:r((()=>[o(f,null,{default:r((()=>[b(g(d(w)("orderMoney")),1)])),_:1}),o(f,{class:"text-[var(--price-text-color)] price-font"},{default:r((()=>[b("￥"+g(e.total_money),1)])),_:2},1024)])),_:2},1024),o(a,{class:"ml-3"},{default:r((()=>[o(f,null,{default:r((()=>[b(g(d(w)("payMoney")),1)])),_:1}),o(f,{class:"text-[var(--price-text-color)] price-font"},{default:r((()=>[b("￥"+g(e.total_pay_money),1)])),_:2},1024)])),_:2},1024)])),_:2},1024),o(a,{class:"flex justify-end mt-3"},{default:r((()=>[(l(!0),i(u,null,n(e.order_status_info.member_action,((t,a)=>(l(),s(R,{text:t.name,customStyle:{marginRight:"0px",marginLeft:"8rpx",width:"auto"},shape:"circle",size:"small",onClick:a=>((e,t="")=>{var a;"pay"==t?null==(a=Q.value)||a.open(e.order_type,e.order_id,`/addon/o2o/pages/order/detail?order_id=${e.order_id}`):"cancel"==t?T(e):"delete"==t&&W(e)})(e,t.key),key:a},null,8,["text","onClick"])))),128))])),_:2},1024)])),_:2},1024)))),128)),!P.value.length&&V.value?(l(),s(G,{key:0,option:{icon:d(j)("static/resource/images/empty.png"),tip:d(w)("nothingMore")}},null,8,["option"])):c("v-if",!0)])),_:1},8,["onInit","onDown"]),o(F,{ref_key:"payRef",ref:Q},null,512),o(A)])),_:1},8,["style"])}}}),[["__scopeId","data-v-cbb362e8"]]);export{N as default};