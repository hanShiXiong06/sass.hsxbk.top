import{d as e,r as a,p as r,a as t,o as l,c as s,w as o,b as i,P as d,a7 as u,Q as n,f as c,u as p,n as m,a8 as f,a9 as _,t as x,i as v,a6 as h,g,h as y,R as b,y as j,z as k,F as w,E as C,A as S,aT as z,c3 as M,k as U,D as I}from"./index-7bf68536.js";import{_ as P}from"./u-icon.0c1c54c7.js";import{_ as E}from"./u--image.b3bf1d5c.js";import{_ as F}from"./u-code-input.0bb27fda.js";import{_ as A}from"./u-form.78a4f7c2.js";import{_ as D}from"./u--form.632a93a1.js";import{_ as L}from"./u-modal.b47eb877.js";import{g as N,a as O,b as R,T,f as Y}from"./o2o.b941d7a5.js";import{c as B}from"./technician.3e30e06a.js";import{M as Q}from"./mescroll-body.b6d57b41.js";import{M as V}from"./mescroll-empty.fcefb74e.js";import{u as W}from"./useMescroll.26ccf5de.js";import{_ as q}from"./_plugin-vue_export-helper.1b428a4d.js";import"./u-image.e46f68ef.js";import"./u-transition.cdf87992.js";import"./u-line.463a2a45.js";import"./u-loading-icon.b37701e7.js";import"./u-popup.be4bfacd.js";import"./u-safe-bottom.908eeae4.js";import"./mescroll-i18n.14e7fe02.js";/* empty css                                                                       */const G=q(e({__name:"list",setup(e){const{mescrollInit:q,downCallback:G,getMescroll:H}=W(_,f),J=a([]),K=a(!1),X=a(!1),Z=a(""),$=a([]);r((e=>{Z.value=e.order_status||"",ee()}));const ee=()=>{B().then((e=>{Object.keys(e.data).length?ae():t({url:"/addon/o2o/pages/index",mode:"reLaunch"})}))},ae=()=>{X.value=!0,$.value=[];$.value.push({name:"全部",status:""}),N().then((e=>{Object.values(e.data).forEach(((e,a)=>{$.value.push(e)})),X.value=!1})).catch((()=>{X.value=!1}))},re=e=>{K.value=!1;let a={page:e.num,limit:e.size,order_status:Z.value};O(a).then((a=>{let r=a.data.data;1==e.num&&(J.value=[]),J.value=J.value.concat(r),e.endSuccess(r.length),K.value=!0})).catch((()=>{K.value=!0,e.endErr()}))};let te="";const le=e=>{M({title:"提示",content:"您确定要转单吗？",confirmColor:U().themeColor["--primary-color"],success:a=>{a.confirm&&T({order_id:e.order_id}).then((e=>{H().resetUpScroll()}))}})},se=a(!1),oe=a(""),ie=e=>{oe.value=e},de=()=>{if(""==oe.value)return void x({title:"请输入校验码",icon:"none",duration:1e3});let e={order_id:te,check_code:oe.value};R(e).then((e=>{se.value=!1,t({url:"/addon/o2o/pages/master/task/detail",param:{order_id:te}})})).catch((()=>{se.value=!1,t({url:"/addon/o2o/pages/master/task/detail",param:{order_id:te}})}))},ue=e=>{Y({order_id:e.order_id}).then((e=>{H().resetUpScroll()}))};return(e,a)=>{const r=v,f=h,_=I,x=g(y("u-icon"),P),M=g(y("u--image"),E),U=g(y("u-code-input"),F),N=g(y("u-form-item"),A),O=g(y("u--form"),D),R=g(y("u-modal"),L);return l(),s(r,{style:m(e.themeColor())},{default:o((()=>[i(r,{class:"bg-[#f8f8f8] min-h-screen overflow-hidden"},{default:o((()=>[X.value?c("v-if",!0):(l(),s(r,{key:0,class:"fixed left-0 top-0 right-0 z-10"},{default:o((()=>[i(f,{"scroll-x":"true",class:"scroll-Y box-border px-[24rpx] bg-white"},{default:o((()=>[i(r,{class:"flex whitespace-nowrap justify-around"},{default:o((()=>[(l(!0),d(n,null,u($.value,(e=>(l(),s(r,{class:b(["text-sm leading-[90rpx]",{"class-select":Z.value===e.status.toString()}]),onClick:a=>{return r=e.status,Z.value=r.toString(),J.value=[],void H().resetUpScroll();var r}},{default:o((()=>[j(k(e.name),1)])),_:2},1032,["class","onClick"])))),256))])),_:1})])),_:1})])),_:1})),i(Q,{ref:"mescrollRef",top:"104rpx",onInit:p(q),down:{use:!1},onUp:re},{default:o((()=>[i(r,{class:"goods-wrap"},{default:o((()=>[(l(!0),d(n,null,u(J.value,((e,a)=>(l(),s(r,{key:a,class:"mb-[30rpx] bg-[#fff] rounded-md"},{default:o((()=>[i(r,{class:"goods-item",onClick:a=>{return r=e.order_id,void t({url:"/addon/o2o/pages/master/task/detail",param:{order_id:r}});var r}},{default:o((()=>[i(r,{class:"goods-head justify-between items-center"},{default:o((()=>[i(_,null,{default:o((()=>[j(k(p(w)("serviceDate"))+k(e.reserve_service_time),1)])),_:2},1024),i(_,{class:"text-[var(--primary-color)]"},{default:o((()=>[j(k(e.order_status_info.name),1)])),_:2},1024)])),_:2},1024),(l(!0),d(n,null,u(e.item,((e,a)=>(l(),s(r,{class:b({"mt-[20rpx]":a}),key:a},{default:o((()=>[i(r,{class:"order-goods-item flex"},{default:o((()=>[i(r,{class:"w-[160rpx] h-[160rpx] flex-2"},{default:o((()=>[i(M,{class:"rounded-[10rpx] overflow-hidden",width:"160rpx",height:"160rpx",src:p(C)(e.item_image?e.item_image:""),model:"aspectFill"},{error:o((()=>[i(x,{name:"photo",color:"#999",size:"50"})])),_:2},1032,["src"])])),_:2},1024),i(r,{class:"ml-[20rpx] flex-1 flex flex-col justify-between"},{default:o((()=>[i(r,{class:"flex justify-between"},{default:o((()=>[i(_,{class:"max-h-[80rpx] w-[380rpx] text-[28rpx] leading-[40rpx] multi-hidden"},{default:o((()=>[j(k(e.item_name),1)])),_:2},1024),"custom"==e.item_type?(l(),s(_,{key:0,class:"shrink-0 ml-[10rpx] text-[24rpx] leading-[40rpx] text-[var(--primary-color)]"},{default:o((()=>[j(k(e.pay_time?p(w)("havePaid"):p(w)("notPaid")),1)])),_:2},1024)):c("v-if",!0)])),_:2},1024),i(r,{class:"text-[24rpx] mt-[20rpx] flex"},{default:o((()=>[i(_,{class:"text-[var(--primary-color)] rounded-[6rpx] py-[6rpx] bg-[var(--label-bg-color)] px-[10rpx]"},{default:o((()=>[j(k(e.item_type_name),1)])),_:2},1024)])),_:2},1024),i(r,{class:"text-[28rpx] mt-auto flex justify-between"},{default:o((()=>[i(_,{class:"px-[10rpx] py-[4rpx] text-[var(--price-text-color)] price-font"},{default:o((()=>[j("￥"+k(e.price),1)])),_:2},1024),i(_,{class:"text-[22rpx] ml-[20rpx]"},{default:o((()=>[j("x"+k(e.num),1)])),_:2},1024)])),_:2},1024)])),_:2},1024)])),_:2},1024)])),_:2},1032,["class"])))),128)),i(r,{class:"mt-[34rpx] flex justify-end"},{default:o((()=>[i(r,{class:"inline-block text-[26rpx] leading-[56rpx] px-[30rpx] border-[3rpx] border-solid border-[#999] rounded-full",onClick:S((a=>{return r=e.taker_mobile,void z({phoneNumber:r});var r}),["stop"])},{default:o((()=>[j(k(p(w)("contact")),1)])),_:2},1032,["onClick"]),(l(!0),d(n,null,u(e.order_status_info.technician_action,((a,i)=>(l(),s(r,{key:i,class:"inline-block text-[26rpx] leading-[56rpx] px-[30rpx] border-[3rpx] border-solid border-[#999] rounded-full ml-[20rpx]",onClick:S((r=>{return l=e,void("transfer_order"==(s=a.key)?le(l):"start"==s?(te=l.order_id,se.value=!0):"finish"==s?ue(l):"service_pay"==s&&t({url:"/addon/o2o/pages/master/task/add",param:{order_id:l.order_id}}));var l,s}),["stop"])},{default:o((()=>[j(k(a.name),1)])),_:2},1032,["onClick"])))),128))])),_:2},1024)])),_:2},1032,["onClick"])])),_:2},1024)))),128))])),_:1}),!J.value.length&&K.value?(l(),s(V,{key:0,option:{icon:p(C)("static/resource/images/empty.png"),tip:p(w)("nothingMore")}},null,8,["option"])):c("v-if",!0)])),_:1},8,["onInit"])])),_:1}),i(R,{show:se.value,showCancelButton:"true",onCancel:a[0]||(a[0]=e=>se.value=!1),onConfirm:de,width:"500rpx",confirmColor:"var(--primary-color)"},{default:o((()=>[i(O,{labelPosition:"left",class:"!w-[100%]",labelWidth:"100rpx",labelStyle:{fontSize:"24rpx"}},{default:o((()=>[i(N,{label:p(w)("checkCode")},{default:o((()=>[i(U,{maxlength:4,focus:!0,size:"50rpx",fontSize:"32rpx",onFinish:ie})])),_:1},8,["label"])])),_:1})])),_:1},8,["show"])])),_:1},8,["style"])}}}),[["__scopeId","data-v-c47da897"]]);export{G as default};