import{d as e,r as a,p as r,a as t,o as l,c as s,w as o,b as d,U as i,ad as n,V as u,f as c,u as p,n as m,ae as f,af as x,t as _,i as v,ac as h,g,h as b,W as y,y as k,z as w,F as C,E as j,A as S,b1 as z,c0 as M,k as U,D as I,b7 as P,bl as E,c9 as F,R as O,ca as R,aM as D,_ as N}from"./index-71c7df08.js";import{g as W,a as A,b as B,T as L,f as Q}from"./o2o.b73b40c6.js";import{c as T}from"./technician.707f779e.js";import{M as V}from"./mescroll-body.49de0f6f.js";import{M as Y}from"./mescroll-empty.95b8c17e.js";import{u as q}from"./useMescroll.26ccf5de.js";import"./mescroll-i18n.00218d15.js";/* empty css                                                                       */const G=N(e({__name:"list",setup(e){const{mescrollInit:N,downCallback:G,getMescroll:H}=q(x,f),J=a([]),K=a(!1),X=a(!1),Z=a(""),$=a([]);r((e=>{Z.value=e.order_status||"",ee()}));const ee=()=>{T().then((e=>{Object.keys(e.data).length?ae():t({url:"/addon/o2o/pages/index",mode:"reLaunch"})}))},ae=()=>{X.value=!0,$.value=[];$.value.push({name:"全部",status:""}),W().then((e=>{Object.values(e.data).forEach(((e,a)=>{$.value.push(e)})),X.value=!1})).catch((()=>{X.value=!1}))},re=e=>{K.value=!1;let a={page:e.num,limit:e.size,order_status:Z.value};A(a).then((a=>{let r=a.data.data;1==e.num&&(J.value=[]),J.value=J.value.concat(r),e.endSuccess(r.length),K.value=!0})).catch((()=>{K.value=!0,e.endErr()}))};let te="";const le=e=>{M({title:"提示",content:"您确定要转单吗？",confirmColor:U().themeColor["--primary-color"],success:a=>{a.confirm&&L({order_id:e.order_id}).then((e=>{H().resetUpScroll()}))}})},se=a(!1),oe=a(""),de=e=>{oe.value=e},ie=()=>{if(""==oe.value)return void _({title:"请输入校验码",icon:"none",duration:1e3});let e={order_id:te,check_code:oe.value};B(e).then((e=>{se.value=!1,t({url:"/addon/o2o/pages/master/task/detail",param:{order_id:te}})})).catch((()=>{se.value=!1,t({url:"/addon/o2o/pages/master/task/detail",param:{order_id:te}})}))},ne=e=>{Q({order_id:e.order_id}).then((e=>{H().resetUpScroll()}))};return(e,a)=>{const r=v,f=h,x=I,_=g(b("u-icon"),P),M=g(b("u--image"),E),U=g(b("u-code-input"),F),W=g(b("u-form-item"),O),A=g(b("u--form"),R),B=g(b("u-modal"),D);return l(),s(r,{style:m(e.themeColor())},{default:o((()=>[d(r,{class:"bg-[#f8f8f8] min-h-screen overflow-hidden"},{default:o((()=>[X.value?c("v-if",!0):(l(),s(r,{key:0,class:"fixed left-0 top-0 right-0 z-10"},{default:o((()=>[d(f,{"scroll-x":"true",class:"scroll-Y box-border px-[24rpx] bg-white"},{default:o((()=>[d(r,{class:"flex whitespace-nowrap justify-around"},{default:o((()=>[(l(!0),i(u,null,n($.value,(e=>(l(),s(r,{class:y(["text-sm leading-[90rpx]",{"class-select":Z.value===e.status.toString()}]),onClick:a=>{return r=e.status,Z.value=r.toString(),J.value=[],void H().resetUpScroll();var r}},{default:o((()=>[k(w(e.name),1)])),_:2},1032,["class","onClick"])))),256))])),_:1})])),_:1})])),_:1})),d(V,{ref:"mescrollRef",top:"104rpx",onInit:p(N),down:{use:!1},onUp:re},{default:o((()=>[d(r,{class:"goods-wrap"},{default:o((()=>[(l(!0),i(u,null,n(J.value,((e,a)=>(l(),s(r,{key:a,class:"mb-[30rpx] bg-[#fff] rounded-md"},{default:o((()=>[d(r,{class:"goods-item",onClick:a=>{return r=e.order_id,void t({url:"/addon/o2o/pages/master/task/detail",param:{order_id:r}});var r}},{default:o((()=>[d(r,{class:"goods-head justify-between items-center"},{default:o((()=>[d(x,null,{default:o((()=>[k(w(p(C)("serviceDate"))+w(e.reserve_service_time),1)])),_:2},1024),d(x,{class:"text-[var(--primary-color)]"},{default:o((()=>[k(w(e.order_status_info.name),1)])),_:2},1024)])),_:2},1024),(l(!0),i(u,null,n(e.item,((e,a)=>(l(),s(r,{class:y({"mt-[20rpx]":a}),key:a},{default:o((()=>[d(r,{class:"order-goods-item flex"},{default:o((()=>[d(r,{class:"w-[160rpx] h-[160rpx] flex-2"},{default:o((()=>[d(M,{class:"rounded-[10rpx] overflow-hidden",width:"160rpx",height:"160rpx",src:p(j)(e.item_image?e.item_image:""),model:"aspectFill"},{error:o((()=>[d(_,{name:"photo",color:"#999",size:"50"})])),_:2},1032,["src"])])),_:2},1024),d(r,{class:"ml-[20rpx] flex-1 flex flex-col justify-between"},{default:o((()=>[d(r,{class:"flex justify-between"},{default:o((()=>[d(x,{class:"max-h-[80rpx] w-[380rpx] text-[28rpx] leading-[40rpx] multi-hidden"},{default:o((()=>[k(w(e.item_name),1)])),_:2},1024),"custom"==e.item_type?(l(),s(x,{key:0,class:"shrink-0 ml-[10rpx] text-[24rpx] leading-[40rpx] text-[var(--primary-color)]"},{default:o((()=>[k(w(e.pay_time?p(C)("havePaid"):p(C)("notPaid")),1)])),_:2},1024)):c("v-if",!0)])),_:2},1024),d(r,{class:"text-[24rpx] mt-[20rpx] flex"},{default:o((()=>[d(x,{class:"text-[var(--primary-color)] rounded-[6rpx] py-[6rpx] bg-[var(--label-bg-color)] px-[10rpx]"},{default:o((()=>[k(w(e.item_type_name),1)])),_:2},1024)])),_:2},1024),d(r,{class:"text-[28rpx] mt-auto flex justify-between"},{default:o((()=>[d(x,{class:"px-[10rpx] py-[4rpx] text-[var(--price-text-color)] price-font"},{default:o((()=>[k("￥"+w(e.price),1)])),_:2},1024),d(x,{class:"text-[22rpx] ml-[20rpx]"},{default:o((()=>[k("x"+w(e.num),1)])),_:2},1024)])),_:2},1024)])),_:2},1024)])),_:2},1024)])),_:2},1032,["class"])))),128)),d(r,{class:"mt-[34rpx] flex justify-end"},{default:o((()=>[d(r,{class:"inline-block text-[26rpx] leading-[56rpx] px-[30rpx] border-[3rpx] border-solid border-[#999] rounded-full",onClick:S((a=>{return r=e.taker_mobile,void z({phoneNumber:r});var r}),["stop"])},{default:o((()=>[k(w(p(C)("contact")),1)])),_:2},1032,["onClick"]),(l(!0),i(u,null,n(e.order_status_info.technician_action,((a,d)=>(l(),s(r,{key:d,class:"inline-block text-[26rpx] leading-[56rpx] px-[30rpx] border-[3rpx] border-solid border-[#999] rounded-full ml-[20rpx]",onClick:S((r=>{return l=e,void("transfer_order"==(s=a.key)?le(l):"start"==s?(te=l.order_id,se.value=!0):"finish"==s?ne(l):"service_pay"==s&&t({url:"/addon/o2o/pages/master/task/add",param:{order_id:l.order_id}}));var l,s}),["stop"])},{default:o((()=>[k(w(a.name),1)])),_:2},1032,["onClick"])))),128))])),_:2},1024)])),_:2},1032,["onClick"])])),_:2},1024)))),128))])),_:1}),!J.value.length&&K.value?(l(),s(Y,{key:0,option:{icon:p(j)("static/resource/images/empty.png"),tip:p(C)("nothingMore")}},null,8,["option"])):c("v-if",!0)])),_:1},8,["onInit"])])),_:1}),d(B,{show:se.value,showCancelButton:"true",onCancel:a[0]||(a[0]=e=>se.value=!1),onConfirm:ie,width:"500rpx",confirmColor:"var(--primary-color)"},{default:o((()=>[d(A,{labelPosition:"left",class:"!w-[100%]",labelWidth:"100rpx",labelStyle:{fontSize:"24rpx"}},{default:o((()=>[d(W,{label:p(C)("checkCode")},{default:o((()=>[d(U,{maxlength:4,focus:!0,size:"50rpx",fontSize:"32rpx",onFinish:de})])),_:1},8,["label"])])),_:1})])),_:1},8,["show"])])),_:1},8,["style"])}}}),[["__scopeId","data-v-c47da897"]]);export{G as default};
