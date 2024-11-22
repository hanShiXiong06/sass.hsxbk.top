import{d as e,r,p as t,b2 as l,b$ as a,o as s,c as o,w as u,b as d,u as f,f as p,y as n,z as x,P as i,a7 as c,Q as m,n as _,a as v,B as b,i as g,g as h,h as y,D as w,E as j,F as k,bo as C}from"./index-7bf68536.js";import{_ as F}from"./u-icon.0c1c54c7.js";import{_ as O}from"./u--image.b3bf1d5c.js";import{_ as z}from"./u-modal.b47eb877.js";import{_ as E}from"./loading-page.vue_vue_type_script_setup_true_lang.124ad65f.js";import{h as V,i as A}from"./order.d71d5845.js";import{_ as B}from"./_plugin-vue_export-helper.1b428a4d.js";import"./u-image.e46f68ef.js";import"./u-transition.cdf87992.js";import"./u-line.463a2a45.js";import"./u-loading-icon.b37701e7.js";import"./u-popup.be4bfacd.js";import"./u-safe-bottom.908eeae4.js";import"./u-loading-page.566c330a.js";const M=B(e({__name:"detail",setup(e){const B=r({}),M=r(!0),N=r("");t((e=>{N.value=e.refund_no,D(N.value)}));const D=e=>{M.value=!0,V(e).then((e=>{B.value=e.data,M.value=!1})).catch((()=>{M.value=!1}))},I=r(!1);let L="",P="";const Q=()=>{A(L).then((e=>{I.value=!1,v({url:"/addon/o2o/pages/order/detail",param:{order_id:P}})})).catch((()=>{I.value=!1}))},R=()=>{I.value=!1};return l((()=>{a()})),(e,r)=>{const t=b,l=g,a=h(y("u-icon"),F),V=h(y("u--image"),O),A=w,N=h(y("u-modal"),z),D=h(y("loading-page"),E);return s(),o(l,{style:_(e.themeColor())},{default:u((()=>[!M.value&&Object.keys(B.value).length?(s(),o(l,{key:0,class:"bg-[#f8f8f8] min-h-screen overflow-hidden"},{default:u((()=>[d(l,{class:"pb-[200rpx]"},{default:u((()=>[B.value.status_name?(s(),o(l,{key:0,class:"flex status-item text-[32rpx] bg-primary h-[170rpx]"},{default:u((()=>[d(l,{class:"ml-[50rpx]"},{default:u((()=>[-1!=["wait_refund","refunding"].indexOf(B.value.status)?(s(),o(t,{key:0,class:"w-[70rpx] h-[70rpx] mt-[45rpx]",src:f(j)("addon/o2o/refund/payment.png")},null,8,["src"])):p("v-if",!0),-1!=["refund_completed"].indexOf(B.value.status)?(s(),o(t,{key:1,class:"w-[70rpx] h-[70rpx] mt-[45rpx]",src:f(j)("addon/o2o/refund/complete.png")},null,8,["src"])):p("v-if",!0),-1!=["cancel","refund_fail","refund_refuse"].indexOf(B.value.status)?(s(),o(t,{key:2,class:"w-[70rpx] h-[70rpx] mt-[45rpx]",src:f(j)("addon/o2o/refund/close.png")},null,8,["src"])):p("v-if",!0)])),_:1}),d(l,{class:"ml-[20rpx] text-[#fff] mt-[50rpx] text-[40rpx]"},{default:u((()=>[n(x(B.value.status_name),1)])),_:1})])),_:1})):p("v-if",!0),d(l,{class:"bg-[#fff] mx-[30rpx] p-[30rpx] rounded-[10rpx] flex justify-between flex-wrap mt-[30rpx]"},{default:u((()=>[d(l,{class:"w-[160rpx] h-[160rpx] flex-2",onClick:r[0]||(r[0]=e=>{return r=B.value.order_item.goods_id,void v({url:"/addon/o2o/pages/goods/detail",param:{goods_id:r}});var r})},{default:u((()=>[d(V,{class:"rounded-[10rpx] overflow-hidden",width:"160rpx",height:"160rpx",src:f(j)(B.value.order_item.item_image_thumb_small?B.value.order_item.item_image_thumb_small:""),model:"aspectFill"},{error:u((()=>[d(a,{name:"photo",color:"#999",size:"50"})])),_:1},8,["src"])])),_:1}),d(l,{class:"ml-[20rpx] flex flex-1 flex-col justify-between"},{default:u((()=>[d(l,null,{default:u((()=>[d(A,{class:"text-[28rpx] text-item leading-[40rpx]"},{default:u((()=>[n(x(B.value.order_item.item_name),1)])),_:1})])),_:1}),d(l,{class:"text-[24rpx] flex"},{default:u((()=>[d(A,{class:"text-[var(--primary-color)] rounded-[6rpx] py-[6rpx] bg-[var(--label-bg-color)] px-[10rpx]"},{default:u((()=>[n(x("reservation"==B.value.order_item.item_type?"预约":"一口价"),1)])),_:1})])),_:1}),d(l,{class:"flex justify-between"},{default:u((()=>[d(A,{class:"text-right text-[28rpx] text-[var(--price-text-color)] price-font"},{default:u((()=>[n("￥"+x(B.value.order_item.price),1)])),_:1}),d(A,{class:"text-right text-sm"},{default:u((()=>[d(A,{class:"text-[26rpx]"},{default:u((()=>[n("x")])),_:1}),n(x(B.value.order_item.num),1)])),_:1})])),_:1})])),_:1})])),_:1}),d(l,{class:"bg-[#fff] mx-[30rpx] p-[30rpx] mt-[30rpx] rounded-[10rpx]"},{default:u((()=>[d(l,{class:"flex justify-between text-[28rpx] pt-[20rpx] border-top-[2rpx] border-[solid] border-[#f1f1f1]"},{default:u((()=>[d(l,null,{default:u((()=>[n(x(f(k)("refundMoney")),1)])),_:1}),d(l,{class:"w-[400rpx] multi-hidden text-right leading-[1.2]"},{default:u((()=>[n(x("wait_refund"==B.value.status?parseFloat(B.value.apply_money).toFixed(2):parseFloat(B.value.money).toFixed(2)),1)])),_:1})])),_:1}),d(l,{class:"flex justify-between text-[28rpx] pt-[20rpx] border-top-[2rpx] border-[solid] border-[#f1f1f1] mt-[40rpx]"},{default:u((()=>[d(l,null,{default:u((()=>[n(x(f(k)("refundCause")),1)])),_:1}),d(l,{class:"w-[400rpx] multi-hidden text-right leading-[1.2]"},{default:u((()=>[n(x(B.value.reason||"--"),1)])),_:1})])),_:1}),d(l,{class:"flex justify-between text-[28rpx] pt-[20rpx] border-top-[2rpx] border-[solid] border-[#f1f1f1] mt-[40rpx]"},{default:u((()=>[d(l,null,{default:u((()=>[n(x(f(k)("refundNo")),1)])),_:1}),d(l,null,{default:u((()=>[n(x(B.value.refund_no),1)])),_:1})])),_:1}),d(l,{class:"flex justify-between text-[28rpx] pt-[20rpx] border-top-[2rpx] border-[solid] border-[#f1f1f1] mt-[40rpx]"},{default:u((()=>[d(l,null,{default:u((()=>[n(x(f(k)("createTime")),1)])),_:1}),d(l,null,{default:u((()=>[n(x(B.value.create_time),1)])),_:1})])),_:1}),d(l,{class:"flex justify-between text-[28rpx] pt-[20rpx] border-top-[2rpx] border-[solid] border-[#f1f1f1] mt-[40rpx]"},{default:u((()=>[d(l,null,{default:u((()=>[n(x(f(k)("createExplain")),1)])),_:1}),d(l,{class:"max-w-[480rpx]"},{default:u((()=>[n(x(B.value.remark),1)])),_:1})])),_:1}),B.value.voucher?(s(),o(l,{key:0,class:"text-[28rpx] pt-[20rpx] border-top-[2rpx] border-[solid] border-[#f1f1f1] mt-[40rpx]"},{default:u((()=>[d(l,null,{default:u((()=>[n(x(f(k)("voucher")),1)])),_:1}),d(l,{class:"flex mt-[20rpx] flex-wrap"},{default:u((()=>[(s(!0),i(m,null,c(B.value.voucher.split(","),((e,r)=>(s(),o(l,{class:"w-[140rpx] h-[140rpx] mr-[10rpx] mb-[10rpx]",onClick:r=>(e=>{let r=[];B.value.voucher&&(r=B.value.voucher.split(",").map((e=>j(e)))),C({current:j(e),urls:r,indicator:"number",loop:!0})})(e)},{default:u((()=>[d(V,{class:"rounded-[10rpx] overflow-hidden",width:"140rpx",height:"140rpx",src:f(j)(e||""),model:"aspectFill"},{error:u((()=>[d(a,{name:"photo",color:"#999",size:"50"})])),_:2},1032,["src"])])),_:2},1032,["onClick"])))),256))])),_:1})])),_:1})):p("v-if",!0),B.value.refuse_reason?(s(),o(l,{key:1,class:"flex justify-between text-[28rpx] pt-[20rpx] border-top-[2rpx] border-[solid] border-[#f1f1f1] mt-[40rpx]"},{default:u((()=>[d(l,null,{default:u((()=>[n(x(f(k)("createExplain")),1)])),_:1}),d(l,{class:"max-w-[480rpx]"},{default:u((()=>[n(x(B.value.refuse_reason),1)])),_:1})])),_:1})):p("v-if",!0)])),_:1}),d(l,{class:"bg-[#fff] mx-[30rpx] p-[30rpx] mt-[30rpx] rounded-[10rpx]"},{default:u((()=>[d(l,{class:"flex justify-between text-[28rpx] border-top-[2rpx] border-[solid] border-[#f1f1f1]"},{default:u((()=>[d(l,null,{default:u((()=>[n(x(f(k)("record")),1)])),_:1}),d(l,{class:"flex items-center",onClick:r[1]||(r[1]=e=>f(v)({url:"/addon/o2o/pages/refund/log",param:{refund_no:B.value.refund_no}}))},{default:u((()=>[d(A,null,{default:u((()=>[n(x(f(k)("check")),1)])),_:1}),d(A,{class:"nc-iconfont nc-icon-youV6xx text-[26rpx] text-[var(--text-color-light6)]"})])),_:1})])),_:1})])),_:1}),d(l,{class:"flex tab-bar justify-between items-center bg-[#fff] fixed left-0 right-0 bottom-0 min-h-[100rpx] px-1 flex-wrap"},{default:u((()=>[d(l,{class:"flex ml-[30rpx] w-[70rpx] flex-col justify-center items-center",onClick:r[2]||(r[2]=e=>f(v)({url:"/addon/o2o/pages/index",mode:"reLaunch"}))},{default:u((()=>[d(A,{class:"nc-iconfont nc-icon-shouye-xiaolianV6xx text-[34rpx]"}),d(A,{class:"text-xs mt-1"},{default:u((()=>[n(x(f(k)("index")),1)])),_:1})])),_:1}),d(l,{class:"flex justify-end mr-[30rpx]"},{default:u((()=>["wait_refund"==B.value.status?(s(),o(l,{key:0,class:"inline-block text-[26rpx] leading-[56rpx] px-[30rpx] border-[3rpx] border-solid border-[#999] rounded-full ml-[20rpx]",onClick:r[3]||(r[3]=e=>{return r=B.value,L=r.refund_id,P=r.order_id,void(I.value=!0);var r})},{default:u((()=>[n(x(f(k)("refundApply")),1)])),_:1})):p("v-if",!0)])),_:1})])),_:1})])),_:1}),p(" 取消退款 "),d(N,{show:I.value,confirmColor:"var(--primary-color)",content:f(k)("cancelRefundContent"),showCancelButton:!0,closeOnClickOverlay:!0,onCancel:R,onConfirm:Q},null,8,["show","content"])])),_:1})):p("v-if",!0),d(D,{loading:M.value},null,8,["loading"])])),_:1},8,["style"])}}}),[["__scopeId","data-v-579c668d"]]);export{M as default};
