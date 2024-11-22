import{d as e,r as l,p as a,o as t,c as r,w as s,P as d,b as u,y as o,z as n,u as i,Q as f,a7 as c,f as _,bV as p,n as m,a as x,D as y,i as v,B as b,g,h,C as w,F as k,E as j,be as C,bZ as B}from"./index-7bf68536.js";import{_ as A}from"./u-form.78a4f7c2.js";import{_ as F}from"./u--form.632a93a1.js";import{_ as z,a as P}from"./u-steps.9fc55f35.js";import{_ as R}from"./u-popup.be4bfacd.js";import{_ as T}from"./pay.d2e850e8.js";import{_ as L}from"./u-empty.68b4529f.js";import{_ as N}from"./loading-page.vue_vue_type_script_setup_true_lang.124ad65f.js";import{y as S,z as V,w as D,x as E,A as M,B as O}from"./vipcard.fb0aea23.js";import{_ as U}from"./_plugin-vue_export-helper.1b428a4d.js";import"./u-icon.0c1c54c7.js";import"./u-line.463a2a45.js";import"./u-text.df478cbc.js";import"./u-transition.cdf87992.js";import"./u-safe-bottom.908eeae4.js";import"./u-image.e46f68ef.js";import"./pay.2db06871.js";import"./u-loading-page.566c330a.js";import"./u-loading-icon.b37701e7.js";const I=U(e({__name:"detail",setup(e){let U=0;const I=l(null),K=l(!0),Q=l(1),W=l(!1);l(null),a((e=>{U=e.order_id||0,Z()}));const Z=()=>{S(U).then((e=>{I.value=e.data,e.data.refund_id&&X(e.data.refund_id),K.value=!1})).catch((()=>{K.value=!1}))},$=l(null),q=(e,l="")=>{var a;"pay"==l?null==(a=$.value)||a.open(e.order_type,e.order_id,`/addon/vipcard/pages/order/detail?order_id=${e.order_id}`):"cancel"==l?D(e.order_id).then((e=>{Z()})).catch((()=>{Z()})):"delete"==l?E(e.order_id).then((e=>{x({url:"/addon/vipcard/pages/order/list"})})).catch((()=>{Z()})):"index"==l?x({url:"/addon/vipcard/pages/index",mode:"reLaunch"}):"use"==l&&x({url:"/addon/vipcard/pages/order/my_card_detail",param:{card_id:e.member_card[0].card_id}})};let G=l(!1),H=l({}),J=l(1);const X=e=>{V(e).then((e=>{H.value=e.data,J.value=e.data.refund_log.length?e.data.refund_log.length-1:0}))};return(e,l)=>{const a=y,S=v,V=b,D=g(h("u-form-item"),A),E=g(h("u--form"),F),U=g(h("u-steps-item"),z),X=g(h("u-steps"),P),Y=g(h("u-popup"),R),ee=w,le=g(h("pay"),T),ae=g(h("u-empty"),L),te=g(h("loading-page"),N);return t(),r(S,{style:m(e.themeColor())},{default:s((()=>[K.value?_("v-if",!0):(t(),d(f,{key:0},[I.value?(t(),r(S,{key:0,class:"bg-[#f7f7f7] min-h-screen overflow-hidden"},{default:s((()=>[u(S,{class:"bg-linear h-[480rpx] text-white px-4 pt-5"},{default:s((()=>[u(S,{class:"text-[42rpx] flex items-baseline",onClick:l[0]||(l[0]=e=>W.value=!0)},{default:s((()=>[u(a,{class:"nc-iconfont nc-icon-a-shijianV6xx-36 text-[42rpx] mr-1"}),u(a,{class:"font-bold"},{default:s((()=>{var e,l;return[o(n(i(k)("order"))+n(null==(l=null==(e=I.value)?void 0:e.order_status_info)?void 0:l.name),1)]})),_:1})])),_:1}),u(S,{class:"text-xs mt-3"},{default:s((()=>{var e,l;return[o(n(i(k)("yourOrder"))+n(null==(l=null==(e=I.value)?void 0:e.order_status_info)?void 0:l.name)+n(i(k)("rebook")),1)]})),_:1})])),_:1}),u(S,{class:"-mt-[340rpx]"},{default:s((()=>[u(S,{class:"chunk-wrap p-3 bg-white mx-3 rounded-md"},{default:s((()=>[(t(!0),d(f,null,c(I.value.item,((e,l)=>(t(),r(S,{class:"flex"},{default:s((()=>[u(S,{class:"w-[180rpx] h-[160rpx] mr-3 overflow-hidden rounded leading-none"},{default:s((()=>[u(V,{src:i(j)(e.item_image_thumb_small),mode:"aspectFill",class:"w-[180rpx] h-[160rpx] leading-none"},null,8,["src"])])),_:2},1024),u(S,{class:"flex-1 w-0"},{default:s((()=>[u(S,{class:"font-bold truncate text-sm"},{default:s((()=>[o(n(e.item_name),1)])),_:2},1024),u(S,{class:"flex justify-between"},{default:s((()=>[u(S,{class:"text-[#FA6400] text-xs mt-2"},{default:s((()=>[u(a,{class:"ml-[2rpx]"},{default:s((()=>[o(n(i(k)("currency")),1)])),_:1}),u(a,{class:"text-[38rpx]"},{default:s((()=>[o(n(e.price),1)])),_:2},1024)])),_:2},1024),u(S,{class:"text-sm text-gray-400 flex items-end leading-none"},{default:s((()=>[o(" x"+n(e.num),1)])),_:2},1024)])),_:2},1024)])),_:2},1024)])),_:2},1024)))),256)),u(E,{labelPosition:"left",ref:"form1",labelWidth:"90",labelStyle:{color:"#A3A3A3",fontSize:"14px"}},{default:s((()=>[u(D,{label:i(k)("annualPayment"),borderBottom:""},{default:s((()=>[u(S,{class:"border-style w-full !border-0 flex justify-end items-end"},{default:s((()=>[u(S,{class:"text-[#FA6400] text-xs font-bold"},{default:s((()=>[u(a,{class:"ml-[2rpx]"},{default:s((()=>[o(n(i(k)("currency")),1)])),_:1}),u(a,{class:"text-[28rpx]"},{default:s((()=>[o(n(I.value.pay_money),1)])),_:1})])),_:1})])),_:1})])),_:1},8,["label"]),I.value.order_no?(t(),r(D,{key:0,label:i(k)("onOrder"),borderBottom:""},{default:s((()=>[u(S,{class:"border-style w-full !border-0 flex justify-between items-end"},{default:s((()=>[u(a,null,{default:s((()=>[o(n(I.value.order_no),1)])),_:1}),u(a,{class:"text-xs text-[#7D7C82]",onClick:l[1]||(l[1]=e=>i(C)(I.value.order_no))},{default:s((()=>[o(n(i(k)("copy")),1)])),_:1})])),_:1})])),_:1},8,["label"])):_("v-if",!0),I.value.out_trade_no?(t(),r(D,{key:1,label:i(k)("transactionNumber"),borderBottom:""},{default:s((()=>[u(S,{class:"border-style w-full !border-0 flex justify-between items-end"},{default:s((()=>[u(a,null,{default:s((()=>[o(n(I.value.out_trade_no),1)])),_:1})])),_:1})])),_:1},8,["label"])):_("v-if",!0),u(D,{label:i(k)("orderTime"),borderBottom:""},{default:s((()=>[u(S,{class:"border-style w-full !border-0 flex justify-between items-end"},{default:s((()=>[u(a,null,{default:s((()=>[o(n(I.value.create_time),1)])),_:1})])),_:1})])),_:1},8,["label"]),I.value.close_time?(t(),r(D,{key:2,label:i(k)("offTime"),borderBottom:""},{default:s((()=>[u(S,{class:"border-style !border-0"},{default:s((()=>[o(n(I.value.close_time),1)])),_:1})])),_:1},8,["label"])):_("v-if",!0),I.value.pay_time?(t(),r(D,{key:3,label:i(k)("payTime"),borderBottom:""},{default:s((()=>[u(S,{class:"border-style !border-0"},{default:s((()=>[o(n(I.value.pay_time),1)])),_:1})])),_:1},8,["label"])):_("v-if",!0),I.value.pay_type_name?(t(),r(D,{key:4,label:i(k)("modePayment"),borderBottom:""},{default:s((()=>[u(S,{class:"border-style !border-0"},{default:s((()=>[o(n(I.value.pay_type_name),1)])),_:1})])),_:1},8,["label"])):_("v-if",!0)])),_:1},512)])),_:1})])),_:1}),u(Y,{show:W.value,onClose:l[2]||(l[2]=e=>W.value=!1),closeable:!0},{default:s((()=>[u(S,{class:"text-center py-[30rpx] font-bold leading-none"},{default:s((()=>[u(a,null,{default:s((()=>[o(n(i(k)("orderSchedule")),1)])),_:1})])),_:1}),u(S,{class:"px-6 pb-5 pt-2"},{default:s((()=>[u(X,{current:Q.value,direction:"column"},{default:s((()=>[(t(!0),d(f,null,c(I.value.order_log,((e,l)=>(t(),r(U,{title:e.action,desc:e.action_time,key:l},null,8,["title","desc"])))),128))])),_:1},8,["current"])])),_:1})])),_:1},8,["show"]),u(Y,{show:i(G),onClose:l[3]||(l[3]=e=>p(G)?G.value=!1:G=!1),closeable:!0},{default:s((()=>[i(H).refund_log?(t(),r(S,{key:0,class:"text-center py-[30rpx] font-bold leading-none"},{default:s((()=>[u(a,null,{default:s((()=>[o(n(i(k)("refundProgress")),1)])),_:1})])),_:1})):_("v-if",!0),u(S,{class:"px-6 pb-5 pt-2"},{default:s((()=>[u(X,{current:i(J),direction:"column"},{default:s((()=>[(t(!0),d(f,null,c(i(H).refund_log,((e,l)=>(t(),r(U,{title:e.action_name,desc:e.action_time,key:l},B({_:2},["refuse"==e.action?{name:"desc",fn:s((()=>[u(S,{class:"text-xs text-red"},{default:s((()=>[o(n(i(k)("reasonRefusal"))+"："+n(i(H).refuse_reason),1)])),_:1}),u(S,{class:"text-xs text-[#909193]"},{default:s((()=>[o(n(e.action_time),1)])),_:2},1024)])),key:"0"}:void 0,"completed"==e.action?{name:"desc",fn:s((()=>[u(S,{class:"text-xs text-red"},{default:s((()=>[o(n(i(k)("refundMethod"))+n(i(k)("refundAmount"))+"："+n(i(H).money),1)])),_:1}),u(S,{class:"text-xs text-[#909193]"},{default:s((()=>[o(n(e.action_time),1)])),_:2},1024)])),key:"1"}:void 0]),1032,["title","desc"])))),128))])),_:1},8,["current"])])),_:1})])),_:1},8,["show"]),u(S,{class:"h-[100rpx] tab-bar-placeholder w-full"}),u(S,{class:"flex justify-end tab-bar items-center bg-white px-3 fixed left-0 right-0 bottom-0 z-10"},{default:s((()=>[u(S,{class:"flex items-center mr-auto"},{default:s((()=>[u(S,{class:"flex flex-col items-center mr-[44rpx]",onClick:l[4]||(l[4]=e=>i(x)({url:"/addon/vipcard/pages/index",mode:"reLaunch"}))},{default:s((()=>[u(V,{class:"w-[44rpx] h-[44rpx]",src:i(j)("addon/vipcard/vipcard/service/index.png"),mode:"aspectFill"},null,8,["src"]),u(a,{class:"text-xs text-[#454545] mt-1"},{default:s((()=>[o(n(i(k)("index")),1)])),_:1})])),_:1})])),_:1}),u(S,{class:"flex flex-wrap justify-end flex-1"},{default:s((()=>["wait_use"!=I.value.order_status||I.value.refund_status?_("v-if",!0):(t(),r(ee,{key:0,type:"primary",class:"rounded-[50rpx] text-[26rpx] flex-1 !min-w-[160rpx] !h-[70rpx] !leading-[70rpx] mx-0 my-2 ml-3",onClick:l[5]||(l[5]=e=>q(I.value,"use"))},{default:s((()=>[o(n(i(k)("toUse")),1)])),_:1})),(t(!0),d(f,null,c(I.value.order_status_info.member_action,((e,l)=>(t(),r(ee,{type:"primary",class:"rounded-[50rpx] flex-1 text-[26rpx] !min-w-[160rpx] !h-[70rpx] !leading-[70rpx] mx-0 my-2 ml-3",onClick:l=>q(I.value,e.key)},{default:s((()=>[o(n(e.name),1)])),_:2},1032,["onClick"])))),256)),I.value.order_status_info.is_refund&&["","refund_refuse"].includes(I.value.refund_status)?(t(),r(ee,{key:1,type:"primary",class:"rounded-[50rpx] text-[26rpx] flex-1 !min-w-[160rpx] !h-[70rpx] !leading-[70rpx] mx-0 my-2 ml-3",onClick:l[6]||(l[6]=e=>(()=>{let e={order_id:I.value.order_id};M(e).then((e=>{Z()}))})())},{default:s((()=>[o(n(i(k)("applyRefund")),1)])),_:1})):_("v-if",!0),I.value.refund_no?(t(),r(ee,{key:2,type:"primary",class:"rounded-[50rpx] flex-1 text-[26rpx] !min-w-[160rpx] !h-[70rpx] !leading-[70rpx] mx-0 my-2 ml-3",onClick:l[7]||(l[7]=e=>p(G)?G.value=!0:G=!0)},{default:s((()=>[o(n(i(k)("viewRefund")),1)])),_:1})):_("v-if",!0),I.value.refund_no&&"wait_refund"==I.value.refund_status?(t(),r(ee,{key:3,type:"primary",class:"rounded-[50rpx] text-[26rpx] !min-w-[160rpx] !h-[70rpx] !leading-[70rpx] mx-0 my-2 ml-3 flex-1",onClick:l[8]||(l[8]=e=>{O(I.value.refund_id).then((e=>{Z()}))})},{default:s((()=>[o(n(i(k)("cancelRefund")),1)])),_:1})):_("v-if",!0)])),_:1})])),_:1}),u(le,{ref_key:"payRef",ref:$},null,512)])),_:1})):(t(),r(S,{key:1,class:"w-screen h-screen flex flex-col justify-center items-center"},{default:s((()=>[u(ae,{icon:i(j)("static/resource/images/order_empty.png"),text:i(k)("emptyTips")},null,8,["icon","text"])])),_:1}))],64)),u(te,{loading:K.value},null,8,["loading"])])),_:1},8,["style"])}}}),[["__scopeId","data-v-f224eec0"]]);export{I as default};