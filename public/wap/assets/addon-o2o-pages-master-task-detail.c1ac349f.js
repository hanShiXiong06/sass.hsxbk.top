import{d as e,r as t,p as r,a,o as l,c as s,w as o,u as i,b as d,y as n,z as u,O as p,a6 as m,P as x,f as c,n as f,aS as _,t as b,i as h,g as v,h as g,D as y,F as k,E as w,Q as j,c5 as C}from"./index-2882a2d8.js";import{_ as z}from"./u-icon.1104ad2f.js";import{_ as F,a as S}from"./u-steps.efe1398b.js";import{_ as B}from"./u--image.d52c0594.js";import{_ as A}from"./u-form-item.03ed7ff5.js";import{_ as D}from"./u--form.b2bc768e.js";import{_ as O}from"./u-button.0ab7ff00.js";import{_ as P}from"./u-code-input.d6deff6a.js";import{_ as I}from"./u-modal.c146ecea.js";import{_ as T}from"./u-loading-page.8280c7ab.js";import{c as H,b as L,T as M,f as N,d as V}from"./o2o.50b1eac4.js";import{c as W}from"./technician.dd4f2a12.js";import{_ as E}from"./_plugin-vue_export-helper.1b428a4d.js";import"./u-text.1d25de27.js";import"./u-image.46ebbbc1.js";import"./u-transition.4448d2e5.js";import"./u-line.d7ff94e2.js";/* empty css                                                               */import"./u-form.54744837.js";import"./u-loading-icon.a37f7e61.js";/* empty css                                                                       */import"./u-popup.2abbe959.js";import"./u-overlay.1a317a4e.js";import"./u-safe-bottom.f13b01b8.js";/* empty css                                                                */const Q=E(e({__name:"detail",setup(e){let E=t({}),Q=t(!1),R=t("");r((e=>{R.value=e.order_id,$()}));const $=()=>{W().then((e=>{Object.keys(e.data).length?q(R.value):a({url:"/addon/o2o/pages/index",mode:"reLaunch"})}))},q=e=>{Q.value=!0,H(e).then((e=>{E.value=e.data,Q.value=!1,re()})).catch((()=>{Q.value=!1}))},G=()=>{H(R.value).then((e=>{E.value=e.data,re()})).catch((()=>{}))},J=e=>{C({title:"提示",content:"您确定要转单吗？",success:t=>{t.confirm&&M({order_id:e.order_id}).then((e=>{a({url:"/addon/o2o/pages/master/task/list"})}))}})},K=t(!1),U=t(""),X=e=>{U.value=e},Y=()=>{if(""==U.value)return void b({title:"请输入校验码",icon:"none",duration:1e3});let e={order_id:R.value,check_code:U.value};L(e).then((e=>{K.value=!1,q(R.value)})).catch((()=>{}))},Z=e=>{N({order_id:e.order_id}).then((e=>{q(R.value)}))};function ee(e){var t=new Date(e).getTime();if(null!=t&&""!=t&&t>0){var r=new Date;r.setTime(t);var a=r.getMonth()+1;a=a<10?"0"+a:a;var l=r.getDate();l=l<10?"0"+l:l;var s=r.getHours();s=s<10?"0"+s:s;var o=r.getMinutes();return a+"-"+l+" "+s+":"+(o=o<10?"0"+o:o)}return""}let te=t(0);function re(){return"dispatch"==E.value.order_status_info.status?te.value=0:"wait_service"==E.value.order_status_info.status?te.value=1:"in_service"==E.value.order_status_info.status?te.value=2:"finish"==E.value.order_status_info.status?te.value=3:void 0}return(e,t)=>{const r=h,b=v(g("u-icon"),z),H=y,L=v(g("u-steps-item"),F),M=v(g("u-steps"),S),N=v(g("u--image"),B),W=v(g("u-form-item"),A),$=v(g("u--form"),D),U=v(g("u-button"),O),re=v(g("u-code-input"),P),ae=v(g("u-modal"),I),le=v(g("u-loading-page"),T);return l(),s(r,{style:f(e.themeColor())},{default:o((()=>[!i(Q)&&Object.keys(i(E)).length?(l(),s(r,{key:0,class:"bg-[#f8f8f8] min-h-screen overflow-hidden"},{default:o((()=>[d(r,{class:"bg-linear h-[742rpx] pt-3"}),d(r,{class:"bg-[#fff] mx-3 py-4 px-3 rounded-md -mt-[740rpx]"},{default:o((()=>[d(r,{class:"flex"},{default:o((()=>[d(r,{class:"min-w-[50rpx] flex items-center justify-center"},{default:o((()=>[d(b,{name:"map",size:"20"})])),_:1}),d(r,{class:"flex flex-col ml-[20rpx]"},{default:o((()=>[d(H,{class:"text-[24rpx] mt-[10rpx] leading-[35rpx]"},{default:o((()=>[n(u(i(E).taker_full_address),1)])),_:1}),d(r,null,{default:o((()=>[d(H,{class:"text-[24rpx]"},{default:o((()=>[n(u(i(E).taker_name),1)])),_:1}),d(H,{class:"text-[24rpx] mt-[15rpx]"},{default:o((()=>[n(u(i(E).taker_mobile),1)])),_:1})])),_:1})])),_:1})])),_:1})])),_:1}),d(r,{class:"flex py-4 px-3 bg-white rounded-md box-border mx-3 mt-[20rpx] task-steps"},{default:o((()=>[d(M,{current:i(te),activeColor:"var(--primary-color)"},{default:o((()=>[d(L,{title:i(k)("placeOrder"),desc:i(E).create_time?ee(i(E).create_time):"---"},null,8,["title","desc"]),d(L,{title:i(k)("takeOrders"),desc:i(E).dispatch_time?ee(i(E).dispatch_time):"---"},null,8,["title","desc"]),d(L,{title:i(k)("start"),desc:i(E).service_time?ee(i(E).service_time):"---"},null,8,["title","desc"]),d(L,{title:i(k)("finish"),desc:i(E).finish_time?ee(i(E).finish_time):"---"},null,8,["title","desc"])])),_:1},8,["current"])])),_:1}),d(r,{class:"bg-white py-4 px-3 rounded-md box-border mx-3 mt-[20rpx]"},{default:o((()=>[d(r,{class:"flex justify-between items-center pb-3 border-0 border-b-1 border-solid border-[#F0F0F0] mb-3 text-[26rpx] text-[#666]"},{default:o((()=>[d(H,null,{default:o((()=>[n(u(i(k)("serviceDate"))+u(i(E).reserve_service_time),1)])),_:1}),d(H,{class:"text-[var(--primary-color)]"},{default:o((()=>[n(u(i(E).order_status_info.name),1)])),_:1})])),_:1}),(l(!0),p(x,null,m(i(E).item,((e,t)=>(l(),p(x,{key:t},["buy"==e.item_type||"reservation"==e.item_type?(l(),s(r,{key:0},{default:o((()=>[d(r,{class:"flex items-center border-0"},{default:o((()=>[d(r,{class:"w-[124rpx] h-[124rpx] shrink-0"},{default:o((()=>[d(N,{class:"rounded-[10rpx] overflow-hidden",width:"124rpx",height:"124rpx",src:i(w)(e.item_image?e.item_image:""),model:"aspectFill"},{error:o((()=>[d(b,{name:"photo",color:"#999",size:"50"})])),_:2},1032,["src"])])),_:2},1024),d(r,{class:"flex-1 flex flex-col ml-[20rpx]"},{default:o((()=>[d(r,null,{default:o((()=>[d(H,{class:"text-[28rpx] text-item leading-[40rpx]"},{default:o((()=>[n(u(e.item_name),1)])),_:2},1024)])),_:2},1024),d(r,{class:"text-[24rpx] mt-[14rpx] flex"},{default:o((()=>[d(H,{class:"text-[var(--primary-color)] rounded-[6rpx] py-[6rpx] bg-[var(--label-bg-color)] px-[10rpx]"},{default:o((()=>[n(u(e.item_type_name),1)])),_:2},1024)])),_:2},1024),d(r,{class:"text-[28rpx] mt-[14rpx] flex justify-between"},{default:o((()=>[d(H,{class:"text-[var(--price-text-color)] price-font"},{default:o((()=>[n("￥"+u(e.price),1)])),_:2},1024),d(H,{class:"text-[22rpx] ml-[20rpx]"},{default:o((()=>[n("x"+u(e.num),1)])),_:2},1024)])),_:2},1024)])),_:2},1024)])),_:2},1024),d(r,{class:"flex justify-end self-end w-[100%] mt-[10rpx]"},{default:o((()=>[e.refund_no&&""!=e.refund_status&&"cancel"!=e.refund_status?(l(),s(r,{key:0,class:"text-[26rpx] leading-[56rpx] px-[30rpx] border-[3rpx] border-solid border-[#999] rounded-full ml-[10rpx]",onClick:t=>i(a)({url:"/addon/o2o/pages/master/task/refund",param:{refund_no:e.refund_no}})},{default:o((()=>[n(u(i(k)("viewRefund")),1)])),_:2},1032,["onClick"])):c("v-if",!0)])),_:2},1024)])),_:2},1024)):c("v-if",!0)],64)))),128))])),_:1}),i(E).item.length>1?(l(),s(r,{key:0,class:"bg-white py-4 px-3 rounded-md box-border mx-3 mt-[20rpx]"},{default:o((()=>[d(r,{class:"pb-3 border-0 border-b-1 border-solid border-[#F0F0F0] mb-3 text-[26rpx] text-[#666]"},{default:o((()=>[d(H,null,{default:o((()=>[n(u(i(k)("addServiceItem")),1)])),_:1})])),_:1}),(l(!0),p(x,null,m(i(E).item,((e,t)=>(l(),p(x,{key:t},["custom"==e.item_type?(l(),s(r,{key:0,class:j({"mt-[20rpx]":t})},{default:o((()=>[d(r,{class:"flex items-center"},{default:o((()=>[d(r,{class:"w-[124rpx] h-[124rpx] shrink-0"},{default:o((()=>[d(N,{class:"rounded-[10rpx] overflow-hidden",width:"124rpx",height:"124rpx",src:i(w)(e.item_image?e.item_image:""),model:"aspectFill"},{error:o((()=>[d(b,{name:"photo",color:"#999",size:"50"})])),_:2},1032,["src"])])),_:2},1024),d(r,{class:"flex-1 flex flex-col ml-[20rpx]"},{default:o((()=>[d(r,{class:"flex justify-between"},{default:o((()=>[d(H,{class:"max-h-[80rpx] w-[420rpx] text-[28rpx] leading-[40rpx] multi-hidden"},{default:o((()=>[n(u(e.item_name),1)])),_:2},1024),d(H,{class:"shrink-0 ml-[10rpx] text-[24rpx] leading-[40rpx] text-[var(--primary-color)]"},{default:o((()=>[n(u(e.pay_time?i(k)("havePaid"):i(k)("notPaid")),1)])),_:2},1024)])),_:2},1024),d(r,{class:"text-[24rpx] mt-[14rpx] flex"},{default:o((()=>[d(H,{class:"text-[var(--primary-color)] rounded-[6rpx] py-[6rpx] bg-[var(--label-bg-color)] px-[10rpx]"},{default:o((()=>[n(u(e.item_type_name),1)])),_:2},1024)])),_:2},1024),d(r,{class:"text-[28rpx] mt-[14rpx] flex justify-between"},{default:o((()=>[d(H,{class:"text-[var(--price-text-color)] price-font"},{default:o((()=>[n("￥"+u(e.price),1)])),_:2},1024),d(H,{class:"text-[22rpx] ml-[20rpx]"},{default:o((()=>[n("x"+u(e.num),1)])),_:2},1024)])),_:2},1024)])),_:2},1024)])),_:2},1024),d(r,{class:"flex justify-end mt-[10rpx]"},{default:o((()=>[d(r,{class:"text-[26rpx] leading-[56rpx] px-[30rpx] border-[3rpx] border-solid border-[#999] rounded-full ml-[10rpx]",onClick:t=>{var r;a({url:"/addon/o2o/pages/master/task/show",param:{order_id:(r=e).order_id,order_item_id:r.order_item_id,item_name:r.item_name,price:r.item_money,item_images:r.item_images}})}},{default:o((()=>[n(u(i(k)("show")),1)])),_:2},1032,["onClick"]),e.pay_time?c("v-if",!0):(l(),s(r,{key:0,class:"text-[26rpx] leading-[56rpx] px-[30rpx] border-[3rpx] border-solid border-[#999] rounded-full ml-[10rpx]",onClick:t=>{var r;a({url:"/addon/o2o/pages/master/task/add",param:{order_id:(r=e).order_id,order_item_id:r.order_item_id,item_name:r.item_name,price:r.item_money,item_images:r.item_images}})}},{default:o((()=>[n(u(i(k)("edit")),1)])),_:2},1032,["onClick"])),e.pay_time?c("v-if",!0):(l(),s(r,{key:1,class:"text-[26rpx] leading-[56rpx] px-[30rpx] border-[3rpx] border-solid border-[#999] rounded-full ml-[10rpx]",onClick:t=>{return r=e,void C({title:"提示",content:"您确定要删除该服务项吗？",success:e=>{e.confirm&&V(r.order_item_id).then((e=>{q(R.value)}))}});var r}},{default:o((()=>[n(u(i(k)("delete")),1)])),_:2},1032,["onClick"]))])),_:2},1024)])),_:2},1032,["class"])):c("v-if",!0)],64)))),128))])),_:1})):c("v-if",!0),d(r,{class:"mt-3 bg-white mx-3 px-3 py-4 rounded-md"},{default:o((()=>[d(r,{class:"text-[#1A2336] text-[28rpx] font-bold mb-4"},{default:o((()=>[n(u(i(k)("orderInfo")),1)])),_:1}),d($,{labelPosition:"left",ref:"form1",labelWidth:"90",borderBottom:"false",labelStyle:{color:"#A3A3A3",fontSize:"14px"}},{default:o((()=>[d(W,{label:i(k)("orderNo"),borderBottom:!1},{default:o((()=>[d(r,{class:"border-style w-full !border-0 flex justify-between items-end"},{default:o((()=>[d(H,null,{default:o((()=>[n(u(i(E).order_no),1)])),_:1})])),_:1})])),_:1},8,["label"]),d(W,{label:i(k)("person"),prop:"userInfo.name",borderBottom:!1},{default:o((()=>[d(r,{class:"border-style"},{default:o((()=>[n(u(i(E).taker_name),1)])),_:1})])),_:1},8,["label"]),d(W,{label:i(k)("personTel"),borderBottom:!1},{default:o((()=>[d(r,{class:"border-style"},{default:o((()=>[n(u(i(E).taker_mobile),1)])),_:1})])),_:1},8,["label"]),d(W,{label:i(k)("remark"),borderBottom:!1},{default:o((()=>[d(r,{class:"border-style"},{default:o((()=>[n(u(i(E).member_message?i(E).member_message:"无"),1)])),_:1})])),_:1},8,["label"])])),_:1},512)])),_:1}),d(r,{class:"h-[160rpx] w-full"}),d(r,{class:"flex justify-end items-center bg-white px-3 py-1 fixed left-0 right-0 bottom-0 z-10"},{default:o((()=>[d(r,{class:"flex flex-col items-center justify-center w-[110rpx] mr-auto",onClick:t[0]||(t[0]=e=>{a({url:"/addon/o2o/pages/index",mode:"reLaunch"})})},{default:o((()=>[d(H,{class:"nc-iconfont nc-icon-shouye-xiaolianV6xx text-[36rpx] text-[#333]"}),d(H,{class:"text-xs mt-[2rpx] font-scale"},{default:o((()=>[n(u(i(k)("index")),1)])),_:1})])),_:1}),d(r,{class:"flex flex-wrap justify-end"},{default:o((()=>[d(U,{text:i(k)("contact"),customStyle:{border:"solid 3rpx #999",width:"170rpx",height:"64rpx",lineHeight:"64rpx",fontSize:"26rpx",margin:"16px 0 16px 24rpx"},shape:"circle",onClick:t[1]||(t[1]=e=>{return t=i(E).taker_mobile,void _({phoneNumber:t});var t})},null,8,["text"]),(l(!0),p(x,null,m(i(E).order_status_info.technician_action,((e,t)=>(l(),s(U,{key:t,text:e.name,onClick:t=>{return r=i(E),void("transfer_order"==(l=e.key)?J(r):"start"==l?K.value=!0:"finish"==l?Z(r):"service_pay"==l&&a({url:"/addon/o2o/pages/master/task/add",param:{order_id:r.order_id}}));var r,l},shape:"circle",customStyle:{border:"solid 3rpx #999",width:"170rpx",height:"64rpx",lineHeight:"64rpx",fontSize:"26rpx",margin:"16px 0 16px 24rpx"}},null,8,["text","onClick"])))),128))])),_:1})])),_:1}),c(" 刷新 "),d(r,{class:"fixed bottom-[160rpx] right-[20rpx] rounded-full bg-[#fff] w-[80rpx] h-[80rpx] flex flex-col items-center justify-center shadow-xl",onClick:G},{default:o((()=>[d(H,{class:"nc-iconfont nc-icon-shuaxinV6xx text-[36rpx]"}),d(H,{class:"text-[22rpx] mt-[6rpx]"},{default:o((()=>[n(u(i(k)("refresh")),1)])),_:1})])),_:1})])),_:1})):c("v-if",!0),d(ae,{show:K.value,showCancelButton:"true",onCancel:t[2]||(t[2]=e=>K.value=!1),onConfirm:Y,width:"500rpx"},{default:o((()=>[d($,{labelPosition:"left",class:"!w-[100%]",labelWidth:"100rpx"},{default:o((()=>[d(W,{label:i(k)("checkCode")},{default:o((()=>[d(re,{maxlength:4,focus:!0,size:"50rpx",fontSize:"32rpx",onFinish:X})])),_:1},8,["label"])])),_:1})])),_:1},8,["show"]),d(le,{"bg-color":"rgb(248,248,248)",loading:i(Q),fontSize:"16",color:"#333"},null,8,["loading"])])),_:1},8,["style"])}}}),[["__scopeId","data-v-44b1c35d"]]);export{Q as default};
