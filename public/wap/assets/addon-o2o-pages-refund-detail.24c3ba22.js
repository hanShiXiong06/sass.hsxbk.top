import{d as e,r,p as l,bc as t,c6 as a,o as s,c as o,w as d,b as u,u as f,f as x,y as n,z as p,U as i,ad as c,V as _,n as m,a as v,B as b,i as h,g,h as y,D as w,E as k,F as j,c7 as C,b7 as F,bl as O,aM as z,_ as E}from"./index-71c7df08.js";import{_ as V}from"./loading-page.vue_vue_type_script_setup_true_lang.c7dc2256.js";import{h as B,i as M}from"./order.7a0e41bc.js";const A=E(e({__name:"detail",setup(e){const E=r({}),A=r(!0),D=r("");l((e=>{D.value=e.refund_no,I(D.value)}));const I=e=>{A.value=!0,B(e).then((e=>{E.value=e.data,A.value=!1})).catch((()=>{A.value=!1}))},L=r(!1);let N="",R="";const T=()=>{M(N).then((e=>{L.value=!1,v({url:"/addon/o2o/pages/order/detail",param:{order_id:R}})})).catch((()=>{L.value=!1}))},U=()=>{L.value=!1};return t((()=>{a()})),(e,r)=>{const l=b,t=h,a=g(y("u-icon"),F),B=g(y("u--image"),O),M=w,D=g(y("u-modal"),z),I=g(y("loading-page"),V);return s(),o(t,{style:m(e.themeColor())},{default:d((()=>[!A.value&&Object.keys(E.value).length?(s(),o(t,{key:0,class:"bg-[#f8f8f8] min-h-screen overflow-hidden"},{default:d((()=>[u(t,{class:"pb-[200rpx]"},{default:d((()=>[E.value.status_name?(s(),o(t,{key:0,class:"flex status-item text-[32rpx] bg-primary h-[170rpx]"},{default:d((()=>[u(t,{class:"ml-[50rpx]"},{default:d((()=>[-1!=["wait_refund","refunding"].indexOf(E.value.status)?(s(),o(l,{key:0,class:"w-[70rpx] h-[70rpx] mt-[45rpx]",src:f(k)("addon/o2o/refund/payment.png")},null,8,["src"])):x("v-if",!0),-1!=["refund_completed"].indexOf(E.value.status)?(s(),o(l,{key:1,class:"w-[70rpx] h-[70rpx] mt-[45rpx]",src:f(k)("addon/o2o/refund/complete.png")},null,8,["src"])):x("v-if",!0),-1!=["cancel","refund_fail","refund_refuse"].indexOf(E.value.status)?(s(),o(l,{key:2,class:"w-[70rpx] h-[70rpx] mt-[45rpx]",src:f(k)("addon/o2o/refund/close.png")},null,8,["src"])):x("v-if",!0)])),_:1}),u(t,{class:"ml-[20rpx] text-[#fff] mt-[50rpx] text-[40rpx]"},{default:d((()=>[n(p(E.value.status_name),1)])),_:1})])),_:1})):x("v-if",!0),u(t,{class:"bg-[#fff] mx-[30rpx] p-[30rpx] rounded-[10rpx] flex justify-between flex-wrap mt-[30rpx]"},{default:d((()=>[u(t,{class:"w-[160rpx] h-[160rpx] flex-2",onClick:r[0]||(r[0]=e=>{return r=E.value.order_item.goods_id,void v({url:"/addon/o2o/pages/goods/detail",param:{goods_id:r}});var r})},{default:d((()=>[u(B,{class:"rounded-[10rpx] overflow-hidden",width:"160rpx",height:"160rpx",src:f(k)(E.value.order_item.item_image_thumb_small?E.value.order_item.item_image_thumb_small:""),model:"aspectFill"},{error:d((()=>[u(a,{name:"photo",color:"#999",size:"50"})])),_:1},8,["src"])])),_:1}),u(t,{class:"ml-[20rpx] flex flex-1 flex-col justify-between"},{default:d((()=>[u(t,null,{default:d((()=>[u(M,{class:"text-[28rpx] text-item leading-[40rpx]"},{default:d((()=>[n(p(E.value.order_item.item_name),1)])),_:1})])),_:1}),u(t,{class:"text-[24rpx] flex"},{default:d((()=>[u(M,{class:"text-[var(--primary-color)] rounded-[6rpx] py-[6rpx] bg-[var(--label-bg-color)] px-[10rpx]"},{default:d((()=>[n(p("reservation"==E.value.order_item.item_type?"预约":"一口价"),1)])),_:1})])),_:1}),u(t,{class:"flex justify-between"},{default:d((()=>[u(M,{class:"text-right text-[28rpx] text-[var(--price-text-color)] price-font"},{default:d((()=>[n("￥"+p(E.value.order_item.price),1)])),_:1}),u(M,{class:"text-right text-sm"},{default:d((()=>[u(M,{class:"text-[26rpx]"},{default:d((()=>[n("x")])),_:1}),n(p(E.value.order_item.num),1)])),_:1})])),_:1})])),_:1})])),_:1}),u(t,{class:"bg-[#fff] mx-[30rpx] p-[30rpx] mt-[30rpx] rounded-[10rpx]"},{default:d((()=>[u(t,{class:"flex justify-between text-[28rpx] pt-[20rpx] border-top-[2rpx] border-[solid] border-[#f1f1f1]"},{default:d((()=>[u(t,null,{default:d((()=>[n(p(f(j)("refundMoney")),1)])),_:1}),u(t,{class:"w-[400rpx] multi-hidden text-right leading-[1.2]"},{default:d((()=>[n(p("wait_refund"==E.value.status?parseFloat(E.value.apply_money).toFixed(2):parseFloat(E.value.money).toFixed(2)),1)])),_:1})])),_:1}),u(t,{class:"flex justify-between text-[28rpx] pt-[20rpx] border-top-[2rpx] border-[solid] border-[#f1f1f1] mt-[40rpx]"},{default:d((()=>[u(t,null,{default:d((()=>[n(p(f(j)("refundCause")),1)])),_:1}),u(t,{class:"w-[400rpx] multi-hidden text-right leading-[1.2]"},{default:d((()=>[n(p(E.value.reason||"--"),1)])),_:1})])),_:1}),u(t,{class:"flex justify-between text-[28rpx] pt-[20rpx] border-top-[2rpx] border-[solid] border-[#f1f1f1] mt-[40rpx]"},{default:d((()=>[u(t,null,{default:d((()=>[n(p(f(j)("refundNo")),1)])),_:1}),u(t,null,{default:d((()=>[n(p(E.value.refund_no),1)])),_:1})])),_:1}),u(t,{class:"flex justify-between text-[28rpx] pt-[20rpx] border-top-[2rpx] border-[solid] border-[#f1f1f1] mt-[40rpx]"},{default:d((()=>[u(t,null,{default:d((()=>[n(p(f(j)("createTime")),1)])),_:1}),u(t,null,{default:d((()=>[n(p(E.value.create_time),1)])),_:1})])),_:1}),u(t,{class:"flex justify-between text-[28rpx] pt-[20rpx] border-top-[2rpx] border-[solid] border-[#f1f1f1] mt-[40rpx]"},{default:d((()=>[u(t,null,{default:d((()=>[n(p(f(j)("createExplain")),1)])),_:1}),u(t,{class:"max-w-[480rpx]"},{default:d((()=>[n(p(E.value.remark),1)])),_:1})])),_:1}),E.value.voucher?(s(),o(t,{key:0,class:"text-[28rpx] pt-[20rpx] border-top-[2rpx] border-[solid] border-[#f1f1f1] mt-[40rpx]"},{default:d((()=>[u(t,null,{default:d((()=>[n(p(f(j)("voucher")),1)])),_:1}),u(t,{class:"flex mt-[20rpx] flex-wrap"},{default:d((()=>[(s(!0),i(_,null,c(E.value.voucher.split(","),((e,r)=>(s(),o(t,{class:"w-[140rpx] h-[140rpx] mr-[10rpx] mb-[10rpx]",onClick:r=>(e=>{let r=[];E.value.voucher&&(r=E.value.voucher.split(",").map((e=>k(e)))),C({current:k(e),urls:r,indicator:"number",loop:!0})})(e)},{default:d((()=>[u(B,{class:"rounded-[10rpx] overflow-hidden",width:"140rpx",height:"140rpx",src:f(k)(e||""),model:"aspectFill"},{error:d((()=>[u(a,{name:"photo",color:"#999",size:"50"})])),_:2},1032,["src"])])),_:2},1032,["onClick"])))),256))])),_:1})])),_:1})):x("v-if",!0),E.value.refuse_reason?(s(),o(t,{key:1,class:"flex justify-between text-[28rpx] pt-[20rpx] border-top-[2rpx] border-[solid] border-[#f1f1f1] mt-[40rpx]"},{default:d((()=>[u(t,null,{default:d((()=>[n(p(f(j)("createExplain")),1)])),_:1}),u(t,{class:"max-w-[480rpx]"},{default:d((()=>[n(p(E.value.refuse_reason),1)])),_:1})])),_:1})):x("v-if",!0)])),_:1}),u(t,{class:"bg-[#fff] mx-[30rpx] p-[30rpx] mt-[30rpx] rounded-[10rpx]"},{default:d((()=>[u(t,{class:"flex justify-between text-[28rpx] border-top-[2rpx] border-[solid] border-[#f1f1f1]"},{default:d((()=>[u(t,null,{default:d((()=>[n(p(f(j)("record")),1)])),_:1}),u(t,{class:"flex items-center",onClick:r[1]||(r[1]=e=>f(v)({url:"/addon/o2o/pages/refund/log",param:{refund_no:E.value.refund_no}}))},{default:d((()=>[u(M,null,{default:d((()=>[n(p(f(j)("check")),1)])),_:1}),u(M,{class:"nc-iconfont nc-icon-youV6xx text-[26rpx] text-[var(--text-color-light6)]"})])),_:1})])),_:1})])),_:1}),u(t,{class:"flex tab-bar justify-between items-center bg-[#fff] fixed left-0 right-0 bottom-0 min-h-[100rpx] px-1 flex-wrap"},{default:d((()=>[u(t,{class:"flex ml-[30rpx] w-[70rpx] flex-col justify-center items-center",onClick:r[2]||(r[2]=e=>f(v)({url:"/addon/o2o/pages/index",mode:"reLaunch"}))},{default:d((()=>[u(M,{class:"nc-iconfont nc-icon-shouye-xiaolianV6xx text-[34rpx]"}),u(M,{class:"text-xs mt-1"},{default:d((()=>[n(p(f(j)("index")),1)])),_:1})])),_:1}),u(t,{class:"flex justify-end mr-[30rpx]"},{default:d((()=>["wait_refund"==E.value.status?(s(),o(t,{key:0,class:"inline-block text-[26rpx] leading-[56rpx] px-[30rpx] border-[3rpx] border-solid border-[#999] rounded-full ml-[20rpx]",onClick:r[3]||(r[3]=e=>{return r=E.value,N=r.refund_id,R=r.order_id,void(L.value=!0);var r})},{default:d((()=>[n(p(f(j)("refundApply")),1)])),_:1})):x("v-if",!0)])),_:1})])),_:1})])),_:1}),x(" 取消退款 "),u(D,{show:L.value,confirmColor:"var(--primary-color)",content:f(j)("cancelRefundContent"),showCancelButton:!0,closeOnClickOverlay:!0,onCancel:U,onConfirm:T},null,8,["show","content"])])),_:1})):x("v-if",!0),u(I,{loading:A.value},null,8,["loading"])])),_:1},8,["style"])}}}),[["__scopeId","data-v-579c668d"]]);export{A as default};
