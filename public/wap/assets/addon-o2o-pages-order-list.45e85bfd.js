import{d as e,r as t,j as a,o as l,c as s,w as r,b as o,E as i,F as n,G as u,f as c,u as d,n as m,a5 as p,a6 as f,i as _,a4 as x,g as v,h,H as y,x as b,y as g,V as j,t as w,a as k,c1 as S,C}from"./index-e6ce9fbf.js";import{_ as M}from"./u-icon.c5d9cd81.js";import{_ as U}from"./u--image.2a363e1d.js";import{_ as I}from"./u-button.7a41d301.js";import{_ as z}from"./pay.16fd6339.js";import{_ as E}from"./tabbar.2cc8e58f.js";import{g as D,b as F,c as R,d as G}from"./order.4818855c.js";import{M as H}from"./mescroll-body.dc3de07c.js";import{M as L}from"./mescroll-empty.b423055b.js";import{u as O}from"./useMescroll.26ccf5de.js";import{_ as P}from"./_plugin-vue_export-helper.1b428a4d.js";import"./u-image.c9386d77.js";import"./u-transition.6919b33f.js";import"./u-loading-icon.39fd4711.js";import"./u-popup.b16d6e1d.js";import"./u-safe-bottom.1ba5bfba.js";import"./pay.f23cf994.js";import"./u-badge.7d0ca9d8.js";import"./u-tabbar.2615c204.js";import"./mescroll-uni-option.2f7b06f4.js";import"./mescroll-i18n.6025c811.js";/* empty css                                                                       */const V=P(e({__name:"list",setup(e){const{mescrollInit:P,downCallback:V,getMescroll:Y}=O(f,p),$=t([]),q=t(!1),A=t(!1),B=t(""),J=t([]);a((e=>{B.value=e.order_status||"",K()}));const K=()=>{A.value=!1,J.value=[];J.value.push({name:"全部",status:""}),D().then((e=>{Object.values(e.data).forEach(((e,t)=>{J.value.push(e)})),A.value=!0})).catch((()=>{A.value=!0}))},N=e=>{q.value=!1;let t={page:e.num,limit:e.size,order_status:B.value};F(t).then((t=>{let a=t.data.data;1==e.num&&($.value=[]),$.value=$.value.concat(a),e.endSuccess(a.length),q.value=!0})).catch((()=>{q.value=!0,e.endErr()}))},Q=t(null),T=e=>{S({title:"提示",content:"您确定要删除该订单吗？",success:t=>{t.confirm&&R(e.order_id).then((e=>{Y().resetUpScroll()})).catch((()=>{Y().resetUpScroll()}))}})},W=e=>{S({title:"提示",content:"您确定要删除该订单吗？",success:t=>{t.confirm&&G(e.order_id).then((e=>{Y().resetUpScroll()})).catch((()=>{Y().resetUpScroll()}))}})};return(e,t)=>{const a=_,p=x,f=C,S=v(h("u-icon"),M),D=v(h("u--image"),U),F=v(h("u-button"),I),R=v(h("pay"),z),G=v(h("tabbar"),E);return l(),s(a,{class:"bg-[#f8f8f8] min-h-screen overflow-hidden",style:m(e.themeColor())},{default:r((()=>[A.value?(l(),s(a,{key:0,class:"fixed left-0 top-0 right-0 z-10"},{default:r((()=>[o(p,{"scroll-x":"true",class:"scroll-Y box-border px-[24rpx] bg-white"},{default:r((()=>[o(a,{class:"flex whitespace-nowrap justify-around"},{default:r((()=>[(l(!0),i(u,null,n(J.value,((e,t)=>(l(),s(a,{class:y(["text-sm leading-[90rpx]",{"class-select":B.value===e.status.toString()}]),onClick:t=>{return a=e.status,B.value=a.toString(),$.value=[],void Y().resetUpScroll();var a}},{default:r((()=>[b(g(e.name),1)])),_:2},1032,["class","onClick"])))),256))])),_:1})])),_:1})])),_:1})):c("v-if",!0),o(H,{ref:"mescrollRef",top:"114rpx",onInit:d(P),onDown:d(V),onUp:N},{default:r((()=>[(l(!0),i(u,null,n($.value,((e,t)=>(l(),s(a,{key:e.order_id,class:"mx-3 mb-3 bg-white p-3 rounded"},{default:r((()=>[o(a,{class:"flex justify-between items-center text-sm text-gray-500 pb-3 border-0 border-b border-slate-200 border-solid"},{default:r((()=>[o(a,null,{default:r((()=>[b(g(e.order_no),1)])),_:2},1024),o(f,null,{default:r((()=>[b(g(e.order_status_info.name),1)])),_:2},1024)])),_:2},1024),o(a,null,{default:r((()=>[(l(!0),i(u,null,n(e.item,((t,i)=>(l(),s(a,{class:"order-goods-item flex mt-[30rpx]",key:i,onClick:t=>{k({url:"/addon/o2o/pages/order/detail",param:{order_id:e.order_id}})}},{default:r((()=>[o(a,{class:"w-[160rpx] h-[160rpx] flex-2"},{default:r((()=>[o(D,{class:"rounded-[10rpx] overflow-hidden",width:"160rpx",height:"160rpx",src:d(j)(t.item_image_thumb_small?t.item_image_thumb_small:""),model:"aspectFill"},{error:r((()=>[o(S,{name:"photo",color:"#999",size:"50"})])),_:2},1032,["src"])])),_:2},1024),o(a,{class:"ml-[20rpx] flex flex-1 flex-col justify-between"},{default:r((()=>[o(a,{class:"flex justify-between items-center"},{default:r((()=>[o(f,{class:"text-[28rpx] text-item leading-[40rpx] max-h-[80rpx] w-[360rpx] multi-hidden"},{default:r((()=>[b(g(t.item_name),1)])),_:2},1024),o(f,{class:"shrink-0 text-[24rpx] text-[var(--primary-color)] ml-[10rpx] leading-[40rpx]"},{default:r((()=>[b(g(t.pay_time?"":d(w)("notPaid")),1)])),_:2},1024)])),_:2},1024),o(a,{class:"flex justify-between"},{default:r((()=>[o(f,{class:"text-right text-[28rpx] text-[var(--price-text-color)] price-font"},{default:r((()=>[b("￥"+g(t.price),1)])),_:2},1024),o(f,{class:"text-right text-[24rpx]"},{default:r((()=>[b("x"+g(t.num),1)])),_:2},1024)])),_:2},1024)])),_:2},1024)])),_:2},1032,["onClick"])))),128))])),_:2},1024),c(' <view class="flex items-center justify-between  text-[28rpx]  mt-[40rpx]">\r\n                        <text class="text-[#999]">{{ item.create_time }}</text>\r\n\t\t\t\t\t</view> '),o(a,{class:"flex items-center justify-end mt-[30rpx]"},{default:r((()=>[o(a,null,{default:r((()=>[o(f,null,{default:r((()=>[b(g(d(w)("orderMoney")),1)])),_:1}),o(f,{class:"text-[var(--price-text-color)] price-font"},{default:r((()=>[b("￥"+g(e.total_money),1)])),_:2},1024)])),_:2},1024),o(a,{class:"ml-3"},{default:r((()=>[o(f,null,{default:r((()=>[b(g(d(w)("payMoney")),1)])),_:1}),o(f,{class:"text-[var(--price-text-color)] price-font"},{default:r((()=>[b("￥"+g(e.total_pay_money),1)])),_:2},1024)])),_:2},1024)])),_:2},1024),o(a,{class:"flex justify-end mt-3"},{default:r((()=>[(l(!0),i(u,null,n(e.order_status_info.member_action,((t,a)=>(l(),s(F,{text:t.name,customStyle:{marginRight:"0px",marginLeft:"8rpx",width:"auto"},shape:"circle",size:"small",onClick:a=>((e,t="")=>{var a;"pay"==t?null==(a=Q.value)||a.open(e.order_type,e.order_id,`/addon/o2o/pages/order/detail?order_id=${e.order_id}`):"cancel"==t?T(e):"delete"==t&&W(e)})(e,t.key),key:a},null,8,["text","onClick"])))),128))])),_:2},1024)])),_:2},1024)))),128)),!$.value.length&&q.value?(l(),s(L,{key:0,option:{icon:d(j)("static/resource/images/empty.png"),tip:d(w)("nothingMore")}},null,8,["option"])):c("v-if",!0)])),_:1},8,["onInit","onDown"]),o(R,{ref_key:"payRef",ref:Q},null,512),o(G)])),_:1},8,["style"])}}}),[["__scopeId","data-v-cbb362e8"]]);export{V as default};
