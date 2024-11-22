import{d as e,r as t,L as a,g as l,h as r,o,c as s,w as n,b as d,A as p,y as u,P as i,Q as c,a7 as x,R as m,z as f,f as v,u as b,E as _,bF as g,t as h,i as y,D as k,a6 as V,C as w,bt as j,j as C,e as S,v as z,ah as M}from"./index-7bf68536.js";import{_ as U}from"./u-loading-icon.b37701e7.js";import{_ as O}from"./u-empty.68b4529f.js";import{_ as T}from"./u-popup.be4bfacd.js";import{j as A}from"./order.3552570e.js";import{_ as E,a as F}from"./u-form.78a4f7c2.js";import{_ as R}from"./u-input.09a5cedd.js";import{_ as $}from"./uni-popup.3d2f7726.js";const q=e({__name:"select-store",emits:["confirm"],setup(e,{expose:j,emit:C}){const S=t(!1),z=t(!1),M=t(!0),E=t([]),F=t(null),R=a({lat:0,lng:0}),$=()=>{C("confirm",F.value),S.value=!1},q=e=>{if((e=parseFloat(e))<1e3)return`${e}m`;return`${(e/1e3).toFixed(2)}km`};return j({open:()=>{z.value||(z.value=!0,g({type:"gcj02",success:e=>{R.lat=e.latitude,R.lng=e.longitude},fail:e=>{if(e.errno)if(104==e.errno){h({title:"用户未授权隐私权限，获取位置失败",icon:"none"})}else if(112==e.errno){h({title:"隐私协议中未声明，获取位置失败",icon:"none"})}if(e.errMsg)if(-1!=e.errMsg.indexOf("getLocation:fail")||-1!=e.errMsg.indexOf("deny")||-1!=e.errMsg.indexOf("denied")){h({title:"用户未授权获取位置权限，将无法提供距离最近的门店",icon:"none"})}else h({title:e.errMsg,icon:"none"})}}),setTimeout((()=>{A({latlng:R}).then((({data:e})=>{E.value=e,M.value=!1})).catch((()=>{M.value=!1}))}),1500)),S.value=!0}}),(e,t)=>{const a=y,g=k,h=l(r("u-loading-icon"),U),j=l(r("u-empty"),O),C=V,z=w,A=l(r("u-popup"),T);return o(),s(A,{show:S.value,onClose:t[1]||(t[1]=e=>S.value=!1),mode:"bottom",round:10},{default:n((()=>[d(a,{onTouchmove:t[0]||(t[0]=p((()=>{}),["prevent","stop"])),class:"popup-common"},{default:n((()=>[d(a,{class:"title"},{default:n((()=>[u("请选择自提点")])),_:1}),d(C,{"scroll-y":"true",class:"h-[50vh]"},{default:n((()=>[d(a,{class:"p-[var(--popup-sidebar-m)] pt-0 text-sm"},{default:n((()=>[(o(!0),i(c,null,x(E.value,(e=>(o(),s(a,{class:m(["mt-[var(--top-m)] border-1 border-[#eee] border-solid rounded-[var(--rounded-mid)] px-[var(--pad-sidebar-m)] py-[var(--pad-top-m)] mb-[var(--top-m)]",{"!border-primary bg-[var(--primary-color-light2)]":F.value&&F.value.store_id==e.store_id}]),onClick:t=>{return a=e,void(F.value?F.value=F.value.store_id!=a.store_id?a:null:F.value=a);var a}},{default:n((()=>[d(a,{class:"flex"},{default:n((()=>[d(a,{class:"flex-1 w-0"},{default:n((()=>[d(g,{class:"text-[30rpx] text-[#333]"},{default:n((()=>[u(f(e.store_name),1)])),_:2},1024),d(g,{class:"text-[26rpx] ml-[12rpx] text-[var(--text-color-light6)]"},{default:n((()=>[u(f(e.store_mobile),1)])),_:2},1024)])),_:2},1024),e.distance?(o(),s(a,{key:0},{default:n((()=>[d(g,{class:"text-red text-[26rpx] font-normal"},{default:n((()=>[u(f(q(e.distance)),1)])),_:2},1024)])),_:2},1024)):v("v-if",!0)])),_:2},1024),d(a,{class:"mt-[20rpx] text-[26rpx] leading-[1.4] flex"},{default:n((()=>[d(g,{class:"flex-shrink-0"},{default:n((()=>[u("门店地址：")])),_:1}),d(g,null,{default:n((()=>[u(f(e.full_address),1)])),_:2},1024)])),_:2},1024),d(a,{class:"mt-[16rpx] text-[26rpx]"},{default:n((()=>[u("营业时间："+f(e.trade_time),1)])),_:2},1024)])),_:2},1032,["class","onClick"])))),256))])),_:1}),M.value?(o(),s(a,{key:0,class:"h-[50vh] flex items-center flex-col justify-center"},{default:n((()=>[d(h,{vertical:!0})])),_:1})):v("v-if",!0),M.value||E.value.length?v("v-if",!0):(o(),s(a,{key:1,class:"h-[95%] flex items-center flex-col justify-center"},{default:n((()=>[d(j,{text:"没有可选择的自提点",icon:b(_)("static/resource/images/empty.png")},null,8,["icon"])])),_:1}))])),_:1}),d(a,{class:"btn-wrap"},{default:n((()=>[d(z,{class:"primary-btn-bg btn",onClick:$},{default:n((()=>[u("确认")])),_:1})])),_:1})])),_:1})])),_:1},8,["show"])}}});const L=e({__name:"invoice",emits:["confirm"],setup(e,{expose:a,emit:_}){const g=t(),h=t({is_invoice:2,invoice_content:[]}),k=t(!1);t(!1);const U=t({header_type:1,header_name:"",type:"",name:"",tax_number:"",telephone:"",address:"",bank_name:"",bank_card_number:""}),O=C((()=>1==h.value.is_invoice));j.get("shop/config/invoice").then((({data:e})=>{h.value=e,e.invoice_content.length&&(U.value.name=e.invoice_content[0])})).catch();const T=e=>{M((()=>{U.value.tax_number=e.replace(/[^0-9a-zA-Z]/g,"")}))},A=t(null),q=C((()=>({header_name:{type:"string",required:k.value,message:"请输入发票抬头",trigger:["blur","change"]},tax_number:[{type:"string",required:k.value&&2==U.value.header_type,message:"请输入纳税人识别号",trigger:["blur","change"]},{validator(e,t,a){/^[0-9a-zA-Z]+$/.test(t)||2!=U.header_type?a():a(new Error("请输入正确的纳税人识别号"))}}]}))),L=()=>{A.value.validate().then((()=>{var e;const t=k.value?U.value:{};_("confirm",t),null==(e=g.value)||e.close()}))};return a({open:()=>{var e;null==(e=g.value)||e.open()},invoiceOpen:O}),(e,t)=>{const a=y,_=l(r("u-form-item"),E),j=l(r("u-input"),R),C=l(r("u-form"),F),M=V,O=w,P=l(r("uni-popup"),$);return o(),s(P,{ref_key:"popupRef",ref:g,type:"bottom"},{default:n((()=>[d(a,{class:"bg-[#fff] rounded-[10rpx] popup-common",onTouchmove:t[10]||(t[10]=p((()=>{}),["prevent","stop"]))},{default:n((()=>[d(a,{class:"title"},{default:n((()=>[u("请填写发票信息")])),_:1}),d(M,{"scroll-y":!0,class:"h-[50vh]"},{default:n((()=>[d(a,{class:"px-[var(--popup-sidebar-m)] pb-[60rpx] pt-0 text-sm"},{default:n((()=>[d(C,{labelPosition:"left",model:U.value,labelWidth:"200rpx",labelStyle:{"font-size":"28rpx"},errorType:"toast",rules:b(q),ref_key:"formRef",ref:A},{default:n((()=>[d(a,{class:"mt-[10rpx]"},{default:n((()=>[d(_,{label:"需要发票",leftIconStyle:"text-[28rpx]"},{default:n((()=>[d(a,{class:"flex"},{default:n((()=>[d(a,{class:m(["h-[60rpx] box-border rounded px-[30rpx] leading-[56rpx] mr-[20rpx] border-[2rpx] border-[var(--temp-bg)] bg-[var(--temp-bg)] border-solid text-[24rpx]",{"!bg-[var(--primary-color-light)] !text-[var(--primary-color)] !border-primary":!k.value}]),onClick:t[0]||(t[0]=e=>k.value=!1)},{default:n((()=>[u("不需要")])),_:1},8,["class"]),d(a,{class:m(["h-[60rpx] box-border rounded px-[30rpx] leading-[56rpx] border-[2rpx] border-[var(--temp-bg)] border-solid text-[24rpx] bg-[var(--temp-bg)]",{"!bg-[var(--primary-color-light)] !text-[var(--primary-color)] !border-primary":k.value}]),onClick:t[1]||(t[1]=e=>k.value=!0)},{default:n((()=>[u("需要")])),_:1},8,["class"])])),_:1})])),_:1})])),_:1}),S(d(a,null,{default:n((()=>[d(a,{class:"mt-[10rpx]"},{default:n((()=>[d(_,{label:"抬头类型"},{default:n((()=>[d(a,{class:"flex"},{default:n((()=>[d(a,{class:m(["h-[60rpx] box-border rounded px-[30rpx] mr-[20rpx] leading-[56rpx] border-[2rpx] border-[var(--temp-bg)] border-solid text-[24rpx] bg-[var(--temp-bg)]",{"!bg-[var(--primary-color-light)] !text-[var(--primary-color)] !border-primary":1==U.value.header_type}]),onClick:t[2]||(t[2]=e=>U.value.header_type=1)},{default:n((()=>[u("个人")])),_:1},8,["class"]),d(a,{class:m(["h-[60rpx] box-border rounded px-[30rpx] leading-[56rpx] border-[2rpx] border-[var(--temp-bg)] border-solid text-[24rpx] bg-[var(--temp-bg)]",{"!bg-[var(--primary-color-light)] !text-[var(--primary-color)] !border-primary":2==U.value.header_type}]),onClick:t[3]||(t[3]=e=>U.value.header_type=2)},{default:n((()=>[u("企业")])),_:1},8,["class"])])),_:1})])),_:1})])),_:1}),d(a,{class:"mt-[10rpx]"},{default:n((()=>[d(_,{label:"发票内容",prop:"header_name"},{default:n((()=>[d(a,{class:"flex flex-wrap"},{default:n((()=>[(o(!0),i(c,null,x(h.value.invoice_content,((e,t)=>(o(),s(a,{class:m(["box-border rounded px-[20rpx] py-[12rpx] leading-[1.4] border-[2rpx] border-[var(--temp-bg)] border-solid text-[24rpx] bg-[var(--temp-bg)] my-[10rpx]",{"!bg-[var(--primary-color-light)] !text-[var(--primary-color)] !border-primary":U.value.name==e,"mr-[20rpx]":h.value.invoice_content.length-1!=t}]),onClick:t=>U.value.name=e},{default:n((()=>[u(f(e),1)])),_:2},1032,["class","onClick"])))),256))])),_:1})])),_:1})])),_:1}),d(a,{class:"mt-[10rpx]"},{default:n((()=>[d(_,{label:"发票抬头",prop:"header_name"},{default:n((()=>[d(j,{fontSize:"28rpx",modelValue:U.value.header_name,"onUpdate:modelValue":t[4]||(t[4]=e=>U.value.header_name=e),modelModifiers:{trim:!0},border:"none","placeholder-class":"!text-[var(--text-color-light9)] text-[28rpx]",clearable:"",placeholder:"请输入发票抬头"},null,8,["modelValue"])])),_:1})])),_:1}),2==U.value.header_type?(o(),s(a,{key:0},{default:n((()=>[d(a,{class:"mt-[10rpx]"},{default:n((()=>[d(_,{label:"纳税人识别号",prop:"tax_number"},{default:n((()=>[d(j,{fontSize:"28rpx",modelValue:U.value.tax_number,"onUpdate:modelValue":t[5]||(t[5]=e=>U.value.tax_number=e),modelModifiers:{trim:!0},border:"none",clearable:"",placeholder:"请输入纳税人识别号","placeholder-class":"!text-[var(--text-color-light9)] text-[28rpx]",onChange:T},null,8,["modelValue"])])),_:1})])),_:1}),v(' <view class="py-[20rpx] h-[48rpx] flex items-center">\r\n\t\t\t\t\t\t\t\t\t<text class="text-[30rpx]">更多选填内容</text>\r\n\t\t\t\t\t\t\t\t\t<text class="text-xs text-gray-subtitle ml-[10rpx]">注册地址、电话、开户银行及账号</text>\r\n\t\t\t\t\t\t\t\t\t<view class="text-xs text-right flex-1" @click="optionalShow = !optionalShow">\r\n\t\t\t\t\t\t\t\t\t\t<text>{{ optionalShow ? \'收起\' : \'展开\' }}</text>\r\n\t\t\t\t\t\t\t\t\t\t<text class="text-[30rpx] nc-iconfont text-gray-subtitle ml-[5rpx]" :class="optionalShow ? \'nc-icon-shangV6xx-1\' : \'nc-icon-xiaV6xx\'"></text>\r\n\t\t\t\t\t\t\t\t\t</view>\r\n\t\t\t\t\t\t\t\t</view> '),d(a,{class:"mt-[10rpx]"},{default:n((()=>[d(_,{label:"注册地址"},{default:n((()=>[d(j,{fontSize:"28rpx",modelValue:U.value.address,"onUpdate:modelValue":t[6]||(t[6]=e=>U.value.address=e),"placeholder-class":"!text-[var(--text-color-light9)] text-[28rpx]",border:"none",clearable:"",placeholder:"(选填)请输入企业注册地址"},null,8,["modelValue"])])),_:1})])),_:1}),d(a,{class:"mt-[10rpx]"},{default:n((()=>[d(_,{label:"注册电话"},{default:n((()=>[d(j,{fontSize:"28rpx",modelValue:U.value.telephone,"onUpdate:modelValue":t[7]||(t[7]=e=>U.value.telephone=e),"placeholder-class":"!text-[var(--text-color-light9)] text-[28rpx]",border:"none",clearable:"",placeholder:"(选填)请输入企业注册电话"},null,8,["modelValue"])])),_:1})])),_:1}),d(a,{class:"mt-[10rpx]"},{default:n((()=>[d(_,{label:"开户银行"},{default:n((()=>[d(j,{fontSize:"28rpx",modelValue:U.value.bank_name,"onUpdate:modelValue":t[8]||(t[8]=e=>U.value.bank_name=e),"placeholder-class":"!text-[var(--text-color-light9)] text-[28rpx]",border:"none",clearable:"",placeholder:"(选填)请输入企业开户银行"},null,8,["modelValue"])])),_:1})])),_:1}),d(a,{class:"mt-[10rpx]"},{default:n((()=>[d(_,{label:"银行账号"},{default:n((()=>[d(j,{fontSize:"28rpx",modelValue:U.value.bank_card_number,"onUpdate:modelValue":t[9]||(t[9]=e=>U.value.bank_card_number=e),"placeholder-class":"!text-[var(--text-color-light9)] text-[28rpx]",border:"none",clearable:"",placeholder:"(选填)请输入企业开户银行账号"},null,8,["modelValue"])])),_:1})])),_:1})])),_:1})):v("v-if",!0)])),_:1},512),[[z,k.value]])])),_:1},8,["model","rules"])])),_:1})])),_:1}),d(a,{class:"btn-wrap"},{default:n((()=>[d(O,{class:"primary-btn-bg btn",onClick:L},{default:n((()=>[u("确认")])),_:1})])),_:1})])),_:1})])),_:1},512)}}});export{q as _,L as a};