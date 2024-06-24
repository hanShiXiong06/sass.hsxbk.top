import{d as e,r as l,p as a,g as t,h as r,o as s,c as o,w as u,b as d,_ as n,x as c,E as p,G as i,F as m,H as x,y as _,f,u as v,V as b,ba as h,I as y,i as g,C as k,a4 as V,aD as C,t as w,a as j,bu as A,m as M,e as U,v as T}from"./index-656dc629.js";import{_ as S}from"./u-loading-icon.5e5c27a0.js";import{_ as F}from"./u-empty.833a4c70.js";import{_ as $}from"./u-button.e2de732d.js";import{_ as q}from"./u-popup.7e287da6.js";import{j as E}from"./order.49a0a3c1.js";import{_ as G,a as H}from"./u-form.c0d77e08.js";import{_ as I}from"./u-input.cf99fb96.js";const P=e({__name:"select-store",emits:["confirm"],setup(e,{expose:C,emit:w}){const j=l(!1),A=l(!1),M=l(!0),U=l([]),T=l(null),G=a({lat:0,lng:0}),H=()=>{w("confirm",T.value),j.value=!1},I=e=>{if((e=parseFloat(e))<1e3)return`${e}m`;return`${(e/1e3).toFixed(2)}km`};return C({open:()=>{A.value||(A.value=!0,h({type:"gcj02",success:e=>{G.lat=e.latitude,G.lng=e.longitude},fail:e=>{if(e.errMsg&&e.errno)if(104==e.errno){y({title:"用户未授权隐私权限，获取位置失败",icon:"none"})}else if(112==e.errno){y({title:"隐私协议中未声明，获取位置失败",icon:"none"})}else if("getLocation:fail auth deny"==e.errMsg){y({title:"用户未授权获取位置的权限",icon:"none"})}else y({title:e.errMsg,icon:"none"})}}),setTimeout((()=>{E({latlng:G}).then((({data:e})=>{U.value=e,M.value=!1})).catch((()=>{M.value=!1}))}),1500)),j.value=!0}}),(e,l)=>{const a=g,h=k,y=t(r("u-loading-icon"),S),C=t(r("u-empty"),F),w=V,A=t(r("u-button"),$),E=t(r("u-popup"),q);return s(),o(E,{show:j.value,onClose:l[1]||(l[1]=e=>j.value=!1),mode:"bottom",round:10,closeable:!0},{default:u((()=>[d(a,{onTouchmove:l[0]||(l[0]=n((()=>{}),["prevent","stop"]))},{default:u((()=>[d(a,{class:"text-center p-[30rpx]"},{default:u((()=>[c("请选择自提点")])),_:1}),d(w,{"scroll-y":"true",class:"h-[50vh]"},{default:u((()=>[d(a,{class:"p-[30rpx] pt-0 text-sm"},{default:u((()=>[(s(!0),p(i,null,m(U.value,(e=>(s(),o(a,{class:x(["mt-[30rpx] p-[30rpx] border-1 !border-[#eee] border-solid rounded-[20rpx]",{"!border-primary bg-primary-light":T.value&&T.value.store_id==e.store_id}]),onClick:l=>{return a=e,void(T.value?T.value=T.value.store_id!=a.store_id?a:null:T.value=a);var a}},{default:u((()=>[d(a,{class:"font-bold flex"},{default:u((()=>[d(a,{class:"flex-1 w-0"},{default:u((()=>[d(h,null,{default:u((()=>[c(_(e.store_name),1)])),_:2},1024),d(h,{class:"text-[26rpx] ml-[20rpx]"},{default:u((()=>[c(_(e.store_mobile),1)])),_:2},1024)])),_:2},1024),e.distance?(s(),o(a,{key:0},{default:u((()=>[d(h,{class:"text-red text-xs font-normal"},{default:u((()=>[c(_(I(e.distance)),1)])),_:2},1024)])),_:2},1024)):f("v-if",!0)])),_:2},1024),d(a,{class:"mt-[16rpx] text-[26rpx]"},{default:u((()=>[c(_(e.full_address),1)])),_:2},1024),d(a,{class:"mt-[16rpx] text-[26rpx]"},{default:u((()=>[c("营业时间："+_(e.trade_time),1)])),_:2},1024)])),_:2},1032,["class","onClick"])))),256))])),_:1}),M.value?(s(),o(a,{key:0,class:"h-[50vh] flex items-center flex-col justify-center"},{default:u((()=>[d(y,{vertical:!0})])),_:1})):f("v-if",!0),M.value||U.value.length?f("v-if",!0):(s(),o(a,{key:1,class:"h-[50vh] flex items-center flex-col justify-center"},{default:u((()=>[d(C,{text:"没有可选择的自提点",icon:v(b)("static/resource/images/empty.png")},null,8,["icon"])])),_:1}))])),_:1}),d(a,{class:"p-[30rpx]"},{default:u((()=>[d(A,{type:"primary",text:"确认",shape:"circle",onClick:H})])),_:1})])),_:1})])),_:1},8,["show"])}}}),R=e({__name:"address-list",emits:["confirm"],setup(e,{expose:a,emit:b}){const h=l(!1),y=l(!1),A=l("");let M=l({}),U=l([]);C({}).then((({data:e})=>{U.value=e,y.value=!1}));const T=(e,l=2)=>{uni.setStorage({key:"selectAddressCallback",data:{back:"/addon/shop/pages/order/payment",delivery:M.value.delivery},success(){j({url:"/app/pages/member/address_edit",param:{id:e.id,source:"shop_order_payment",isSelectMap:l}})}})},S=()=>{uni.setStorage({key:"selectAddressCallback",data:{back:"/addon/shop/pages/order/payment",delivery:M.value.delivery},success(){j({url:"/app/pages/member/address_edit",param:{source:"shop_order_payment"}})}})};return a({open:e=>{h.value=!0,M.value=e,A.value=e.id}}),(e,l)=>{const a=g,y=k,C=V,j=t(r("u-button"),$),F=t(r("u-popup"),q);return s(),o(F,{show:h.value,onClose:l[1]||(l[1]=e=>h.value=!1),mode:"bottom",round:10,closeable:!0},{default:u((()=>[d(a,{onTouchmove:l[0]||(l[0]=n((()=>{}),["prevent","stop"]))},{default:u((()=>[d(a,{class:"text-center p-[30rpx]"},{default:u((()=>[c(_(v(w)("selectAddress")),1)])),_:1}),d(C,{"scroll-y":"true",class:"max-h-[50vh]"},{default:u((()=>[(s(!0),p(i,null,m(v(U),((e,l)=>(s(),o(a,{key:e.id,class:x(["flex items-center px-[30rpx]",{"mb-[30rpx]":v(U).length-1!=l,"text-[var(--primary-color)]":e.id==A.value}]),onClick:e=>(e=>{let l=U.value[e];if("local_delivery"!=M.value.delivery||l.lat||l.lng){let l={};l.address_id=U.value[e].id,l.delivery=M.value.delivery,b("confirm",l)}else T(l,1);h.value=!1})(l)},{default:u((()=>[d(y,{class:"nc-iconfont nc-icon-dingweiV6xx-1 text-[36rpx]"}),d(a,{class:"flex flex-col mx-[30rpx] w-[480rpx]"},{default:u((()=>[d(a,{class:"flex items-center truncate leading-[1.5]"},{default:u((()=>[d(y,{class:"mr-[8rpx] text-[28rpx] truncate max-w-[300rpx]"},{default:u((()=>[c(_(e.name),1)])),_:2},1024),d(y,{class:"text-[28rpx]"},{default:u((()=>[c(_(e.mobile),1)])),_:2},1024)])),_:2},1024),d(a,{class:"truncate text-[28rpx] leading-[1.5]"},{default:u((()=>[c(_(e.full_address),1)])),_:2},1024)])),_:2},1024),d(y,{class:"nc-iconfont nc-icon-xiugaiV6xx text-[32rpx] ml-auto",onClick:l=>T(e)},null,8,["onClick"])])),_:2},1032,["class","onClick"])))),128)),!v(U)||v(U)&&!v(U).length?(s(),o(a,{key:0,class:"text-[#666] text-[28rpx] text-center"},{default:u((()=>[c(_(v(w)("emptyAddress")),1)])),_:1})):f("v-if",!0)])),_:1}),d(a,{class:"p-[30rpx] pt-[40rpx]"},{default:u((()=>[d(j,{type:"primary",text:v(w)("addAddress"),shape:"circle",onClick:S},null,8,["text"])])),_:1})])),_:1})])),_:1},8,["show"])}}});const z=e({__name:"invoice",emits:["confirm"],setup(e,{expose:a,emit:b}){const h=l(!1),y=l({is_invoice:2,invoice_content:[]}),C=l(!1),w=l(!1),j=l({header_type:1,header_name:"",type:"",name:"",tax_number:"",telephone:"",address:"",bank_name:"",bank_card_number:""}),S=M((()=>1==y.value.is_invoice));A.get("shop/config/invoice").then((({data:e})=>{y.value=e,e.invoice_content.length&&(j.value.name=e.invoice_content[0])})).catch();const F=l(null),E=M((()=>({header_name:{type:"string",required:C.value,message:"请输入发票抬头",trigger:["blur","change"]},tax_number:[{type:"string",required:C.value&&2==j.value.header_type,message:"请输入纳税人识别号",trigger:["blur","change"]},{validator(e,l,a){/^[0-9a-zA-Z]+$/.test(l)||2!=j.header_type?a():a(new Error("请输入正确的纳税人识别号"))}}]}))),P=()=>{F.value.validate().then((()=>{const e=C.value?j.value:{};b("confirm",e),h.value=!1}))};return a({open:()=>{h.value=!0},invoiceOpen:S}),(e,l)=>{const a=g,b=t(r("u-form-item"),G),A=t(r("u-input"),I),M=k,S=t(r("u-form"),H),R=V,z=t(r("u-button"),$),B=t(r("u-popup"),q);return s(),o(B,{show:h.value,onClose:l[12]||(l[12]=e=>h.value=!1),mode:"bottom",round:10,closeable:!0,safeAreaInsetBottom:!0,customStyle:{maxHeight:"50vh"}},{default:u((()=>[d(a,{onTouchmove:l[11]||(l[11]=n((()=>{}),["prevent","stop"]))},{default:u((()=>[d(a,{class:"text-center p-[30rpx]"},{default:u((()=>[c("请填写发票信息")])),_:1}),d(R,{"scroll-y":!0,class:"max-h-[50vh]"},{default:u((()=>[d(a,{class:"p-[30rpx] pt-0 text-sm"},{default:u((()=>[d(S,{labelPosition:"left",model:j.value,labelWidth:"200rpx",errorType:"toast",rules:v(E),ref_key:"formRef",ref:F},{default:u((()=>[d(a,{class:"mt-[10rpx]"},{default:u((()=>[d(b,{label:"需要发票","border-bottom":!0},{default:u((()=>[d(a,{class:"flex"},{default:u((()=>[d(a,{class:x(["rounded px-[30rpx] py-[10rpx] mr-[20rpx] border-1 !border-[#eee] border-solid text-sm",{"bg-primary text-white !border-primary":!C.value}]),onClick:l[0]||(l[0]=e=>C.value=!1)},{default:u((()=>[c("不需要")])),_:1},8,["class"]),d(a,{class:x(["rounded px-[30rpx] py-[10rpx] border-1 !border-[#eee] border-solid text-sm",{"bg-primary text-white !border-primary":C.value}]),onClick:l[1]||(l[1]=e=>C.value=!0)},{default:u((()=>[c("需要")])),_:1},8,["class"])])),_:1})])),_:1})])),_:1}),U(d(a,null,{default:u((()=>[d(a,{class:"mt-[10rpx]"},{default:u((()=>[d(b,{label:"抬头类型","border-bottom":!0},{default:u((()=>[d(a,{class:"flex"},{default:u((()=>[d(a,{class:x(["rounded px-[30rpx] py-[10rpx] mr-[20rpx] border-1 !border-[#eee] border-solid text-sm",{"bg-primary text-white !border-primary":1==j.value.header_type}]),onClick:l[2]||(l[2]=e=>j.value.header_type=1)},{default:u((()=>[c("个人")])),_:1},8,["class"]),d(a,{class:x(["rounded px-[30rpx] py-[10rpx] border-1 !border-[#eee] border-solid text-sm",{"bg-primary text-white !border-primary":2==j.value.header_type}]),onClick:l[3]||(l[3]=e=>j.value.header_type=2)},{default:u((()=>[c("企业")])),_:1},8,["class"])])),_:1})])),_:1})])),_:1}),d(a,{class:"mt-[10rpx]"},{default:u((()=>[d(b,{label:"发票内容",prop:"header_name","border-bottom":!0},{default:u((()=>[d(a,{class:"flex"},{default:u((()=>[(s(!0),p(i,null,m(y.value.invoice_content,(e=>(s(),o(a,{class:x(["rounded px-[30rpx] py-[10rpx] mr-[20rpx] border-1 !border-[#eee] border-solid text-sm",{"bg-primary text-white !border-primary":j.value.name==e}]),onClick:l=>j.value.name=e},{default:u((()=>[c(_(e),1)])),_:2},1032,["class","onClick"])))),256))])),_:1})])),_:1})])),_:1}),d(a,{class:"mt-[10rpx]"},{default:u((()=>[d(b,{label:"发票抬头",prop:"header_name","border-bottom":!0},{default:u((()=>[d(A,{modelValue:j.value.header_name,"onUpdate:modelValue":l[4]||(l[4]=e=>j.value.header_name=e),modelModifiers:{trim:!0},border:"none",clearable:"",placeholder:"请输入发票抬头"},null,8,["modelValue"])])),_:1})])),_:1}),2==j.value.header_type?(s(),o(a,{key:0},{default:u((()=>[d(a,{class:"mt-[10rpx]"},{default:u((()=>[d(b,{label:"纳税人识别号",prop:"tax_number","border-bottom":!0},{default:u((()=>[d(A,{modelValue:j.value.tax_number,"onUpdate:modelValue":l[5]||(l[5]=e=>j.value.tax_number=e),modelModifiers:{trim:!0},border:"none",clearable:"",placeholder:"请输入纳税人识别号"},null,8,["modelValue"])])),_:1})])),_:1}),d(a,{class:"py-[20rpx] flex items-baseline"},{default:u((()=>[d(M,{class:"text-[30rpx]"},{default:u((()=>[c("更多选填内容")])),_:1}),d(M,{class:"text-xs text-gray-subtitle ml-[10rpx]"},{default:u((()=>[c("注册地址、电话、开户银行及账号")])),_:1}),d(a,{class:"text-xs text-right flex-1",onClick:l[6]||(l[6]=e=>w.value=!w.value)},{default:u((()=>[d(M,null,{default:u((()=>[c(_(w.value?"收起":"展开"),1)])),_:1}),d(M,{class:x(["text-[30rpx] nc-iconfont text-gray-subtitle ml-[5rpx]",w.value?"nc-icon-shangV6xx-1":"nc-icon-xiaV6xx"])},null,8,["class"])])),_:1})])),_:1}),U(d(a,null,{default:u((()=>[d(a,{class:"mt-[10rpx]"},{default:u((()=>[d(b,{label:"注册地址","border-bottom":!0},{default:u((()=>[d(A,{modelValue:j.value.address,"onUpdate:modelValue":l[7]||(l[7]=e=>j.value.address=e),border:"none",clearable:"",placeholder:"(选填)请输入企业注册地址"},null,8,["modelValue"])])),_:1})])),_:1}),d(a,{class:"mt-[10rpx]"},{default:u((()=>[d(b,{label:"注册电话","border-bottom":!0},{default:u((()=>[d(A,{modelValue:j.value.telephone,"onUpdate:modelValue":l[8]||(l[8]=e=>j.value.telephone=e),border:"none",clearable:"",placeholder:"(选填)请输入企业注册电话"},null,8,["modelValue"])])),_:1})])),_:1}),d(a,{class:"mt-[10rpx]"},{default:u((()=>[d(b,{label:"开户银行","border-bottom":!0},{default:u((()=>[d(A,{modelValue:j.value.bank_name,"onUpdate:modelValue":l[9]||(l[9]=e=>j.value.bank_name=e),border:"none",clearable:"",placeholder:"(选填)请输入企业开户银行"},null,8,["modelValue"])])),_:1})])),_:1}),d(a,{class:"mt-[10rpx]"},{default:u((()=>[d(b,{label:"银行账号","border-bottom":!0},{default:u((()=>[d(A,{modelValue:j.value.bank_card_number,"onUpdate:modelValue":l[10]||(l[10]=e=>j.value.bank_card_number=e),border:"none",clearable:"",placeholder:"(选填)请输入企业开户银行账号"},null,8,["modelValue"])])),_:1})])),_:1})])),_:1},512),[[T,w.value]])])),_:1})):f("v-if",!0)])),_:1},512),[[T,C.value]])])),_:1},8,["model","rules"])])),_:1})])),_:1}),d(a,{class:"p-[30rpx]"},{default:u((()=>[d(z,{type:"primary",text:"确认",shape:"circle",onClick:P})])),_:1})])),_:1})])),_:1},8,["show"])}}});export{P as _,z as a,R as b};
