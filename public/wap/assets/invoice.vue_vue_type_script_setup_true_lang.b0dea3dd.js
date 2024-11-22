import{d as e,r as a,L as l,g as r,h as t,o,c as s,w as u,b as d,A as n,y as p,P as i,Q as c,a7 as m,R as x,z as f,f as _,u as b,E as v,bF as h,t as y,i as g,D as k,a6 as V,C as w,bt as C,j,e as U,v as M,ah as z}from"./index-7bf68536.js";import{_ as A}from"./u-loading-icon.b37701e7.js";import{_ as T}from"./u-empty.68b4529f.js";import{_ as E}from"./u-popup.be4bfacd.js";import{j as F}from"./order.2608f784.js";import{_ as $,a as q}from"./u-form.78a4f7c2.js";import{_ as L}from"./u-input.09a5cedd.js";const P=e({__name:"select-store",emits:["confirm"],setup(e,{expose:C,emit:j}){const U=a(!1),M=a(!1),z=a(!0),$=a([]),q=a(null),L=l({lat:0,lng:0}),P=()=>{j("confirm",q.value),U.value=!1},R=e=>{if((e=parseFloat(e))<1e3)return`${e}m`;return`${(e/1e3).toFixed(2)}km`};return C({open:()=>{M.value||(M.value=!0,h({type:"gcj02",success:e=>{L.lat=e.latitude,L.lng=e.longitude},fail:e=>{if(e.errMsg&&e.errno)if(104==e.errno){y({title:"用户未授权隐私权限，获取位置失败",icon:"none"})}else if(112==e.errno){y({title:"隐私协议中未声明，获取位置失败",icon:"none"})}else if("getLocation:fail auth deny"==e.errMsg){y({title:"用户未授权获取位置的权限",icon:"none"})}else y({title:e.errMsg,icon:"none"})}}),setTimeout((()=>{F({latlng:L}).then((({data:e})=>{$.value=e,z.value=!1})).catch((()=>{z.value=!1}))}),1500)),U.value=!0}}),(e,a)=>{const l=g,h=k,y=r(t("u-loading-icon"),A),C=r(t("u-empty"),T),j=V,M=w,F=r(t("u-popup"),E);return o(),s(F,{show:U.value,onClose:a[1]||(a[1]=e=>U.value=!1),mode:"bottom",round:10,closeable:!0},{default:u((()=>[d(l,{onTouchmove:a[0]||(a[0]=n((()=>{}),["prevent","stop"]))},{default:u((()=>[d(l,{class:"text-center p-[30rpx]"},{default:u((()=>[p("请选择自提点")])),_:1}),d(j,{"scroll-y":"true",class:"h-[50vh]"},{default:u((()=>[d(l,{class:"p-[30rpx] pt-0 text-sm"},{default:u((()=>[(o(!0),i(c,null,m($.value,(e=>(o(),s(l,{class:x(["mt-[30rpx] p-[30rpx] border-1 !border-[#eee] border-solid rounded-[20rpx]",{"!border-primary bg-primary-light":q.value&&q.value.store_id==e.store_id}]),onClick:a=>{return l=e,void(q.value?q.value=q.value.store_id!=l.store_id?l:null:q.value=l);var l}},{default:u((()=>[d(l,{class:"font-bold flex"},{default:u((()=>[d(l,{class:"flex-1 w-0"},{default:u((()=>[d(h,null,{default:u((()=>[p(f(e.store_name),1)])),_:2},1024),d(h,{class:"text-[26rpx] ml-[20rpx]"},{default:u((()=>[p(f(e.store_mobile),1)])),_:2},1024)])),_:2},1024),e.distance?(o(),s(l,{key:0},{default:u((()=>[d(h,{class:"text-red text-xs font-normal"},{default:u((()=>[p(f(R(e.distance)),1)])),_:2},1024)])),_:2},1024)):_("v-if",!0)])),_:2},1024),d(l,{class:"mt-[16rpx] text-[26rpx]"},{default:u((()=>[p(f(e.full_address),1)])),_:2},1024),d(l,{class:"mt-[16rpx] text-[26rpx]"},{default:u((()=>[p("营业时间："+f(e.trade_time),1)])),_:2},1024)])),_:2},1032,["class","onClick"])))),256))])),_:1}),z.value?(o(),s(l,{key:0,class:"h-[50vh] flex items-center flex-col justify-center"},{default:u((()=>[d(y,{vertical:!0})])),_:1})):_("v-if",!0),z.value||$.value.length?_("v-if",!0):(o(),s(l,{key:1,class:"h-[50vh] flex items-center flex-col justify-center"},{default:u((()=>[d(C,{text:"没有可选择的自提点",icon:b(v)("static/resource/images/empty.png")},null,8,["icon"])])),_:1}))])),_:1}),d(l,{class:"p-[30rpx]"},{default:u((()=>[d(M,{class:"bg-[var(--primary-color)] text-[#fff] h-[80rpx] leading-[80rpx] rounded-[100rpx] text-[28rpx]",onClick:P},{default:u((()=>[p("确认")])),_:1})])),_:1})])),_:1})])),_:1},8,["show"])}}});const R=e({__name:"invoice",emits:["confirm"],setup(e,{expose:l,emit:v}){const h=a(!1),y=a({is_invoice:2,invoice_content:[]}),A=a(!1),T=a(!1),F=a({header_type:1,header_name:"",type:"",name:"",tax_number:"",telephone:"",address:"",bank_name:"",bank_card_number:""}),P=j((()=>1==y.value.is_invoice));C.get("phone_shop/config/invoice").then((({data:e})=>{y.value=e,e.invoice_content.length&&(F.value.name=e.invoice_content[0])})).catch();const R=e=>{z((()=>{F.value.tax_number=e.replace(/[^0-9a-zA-Z]/g,"")}))},Z=a(null),B=j((()=>({header_name:{type:"string",required:A.value,message:"请输入发票抬头",trigger:["blur","change"]},tax_number:[{type:"string",required:A.value&&2==F.value.header_type,message:"请输入纳税人识别号",trigger:["blur","change"]},{validator(e,a,l){/^[0-9a-zA-Z]+$/.test(a)||2!=F.header_type?l():l(new Error("请输入正确的纳税人识别号"))}}]}))),D=()=>{Z.value.validate().then((()=>{const e=A.value?F.value:{};v("confirm",e),h.value=!1}))};return l({open:()=>{h.value=!0},invoiceOpen:P}),(e,a)=>{const l=g,v=r(t("u-form-item"),$),C=r(t("u-input"),L),j=k,z=r(t("u-form"),q),P=V,H=w,I=r(t("u-popup"),E);return o(),s(I,{show:h.value,onClose:a[12]||(a[12]=e=>h.value=!1),mode:"bottom",round:10,closeable:!0,safeAreaInsetBottom:!0,customStyle:{maxHeight:"58vh"}},{default:u((()=>[d(l,{onTouchmove:a[11]||(a[11]=n((()=>{}),["prevent","stop"]))},{default:u((()=>[d(l,{class:"text-center p-[30rpx] box-border h-[111rpx]"},{default:u((()=>[p("请填写发票信息")])),_:1}),d(P,{"scroll-y":!0,class:"max-h-[calc(50vh-211rpx)]"},{default:u((()=>[d(l,{class:"p-[30rpx] pt-0 text-sm"},{default:u((()=>[d(z,{labelPosition:"left",model:F.value,labelWidth:"200rpx",errorType:"toast",rules:b(B),ref_key:"formRef",ref:Z},{default:u((()=>[d(l,{class:"mt-[10rpx]"},{default:u((()=>[d(v,{label:"需要发票","border-bottom":!0},{default:u((()=>[d(l,{class:"flex"},{default:u((()=>[d(l,{class:x(["rounded px-[30rpx] py-[10rpx] mr-[20rpx] border-1 !border-[#eee] border-solid text-sm",{"bg-primary text-white !border-primary":!A.value}]),onClick:a[0]||(a[0]=e=>A.value=!1)},{default:u((()=>[p(" 不需要")])),_:1},8,["class"]),d(l,{class:x(["rounded px-[30rpx] py-[10rpx] border-1 !border-[#eee] border-solid text-sm",{"bg-primary text-white !border-primary":A.value}]),onClick:a[1]||(a[1]=e=>A.value=!0)},{default:u((()=>[p("需要 ")])),_:1},8,["class"])])),_:1})])),_:1})])),_:1}),U(d(l,null,{default:u((()=>[d(l,{class:"mt-[10rpx]"},{default:u((()=>[d(v,{label:"抬头类型","border-bottom":!0},{default:u((()=>[d(l,{class:"flex"},{default:u((()=>[d(l,{class:x(["rounded px-[30rpx] py-[10rpx] mr-[20rpx] border-1 !border-[#eee] border-solid text-sm",{"bg-primary text-white !border-primary":1==F.value.header_type}]),onClick:a[2]||(a[2]=e=>F.value.header_type=1)},{default:u((()=>[p("个人")])),_:1},8,["class"]),d(l,{class:x(["rounded px-[30rpx] py-[10rpx] border-1 !border-[#eee] border-solid text-sm",{"bg-primary text-white !border-primary":2==F.value.header_type}]),onClick:a[3]||(a[3]=e=>F.value.header_type=2)},{default:u((()=>[p("企业")])),_:1},8,["class"])])),_:1})])),_:1})])),_:1}),d(l,{class:"mt-[10rpx]"},{default:u((()=>[d(v,{label:"发票内容",prop:"header_name","border-bottom":!0},{default:u((()=>[d(l,{class:"flex flex-wrap"},{default:u((()=>[(o(!0),i(c,null,m(y.value.invoice_content,(e=>(o(),s(l,{class:x(["rounded px-[30rpx] my-[10rpx] py-[10rpx] mr-[20rpx] border-1 !border-[#eee] border-solid text-sm whitespace-normal",{"bg-primary text-white !border-primary":F.value.name==e}]),onClick:a=>F.value.name=e},{default:u((()=>[p(f(e),1)])),_:2},1032,["class","onClick"])))),256))])),_:1})])),_:1})])),_:1}),d(l,{class:"mt-[10rpx]"},{default:u((()=>[d(v,{label:"发票抬头",prop:"header_name","border-bottom":!0},{default:u((()=>[d(C,{modelValue:F.value.header_name,"onUpdate:modelValue":a[4]||(a[4]=e=>F.value.header_name=e),modelModifiers:{trim:!0},border:"none",clearable:"",placeholder:"请输入发票抬头"},null,8,["modelValue"])])),_:1})])),_:1}),2==F.value.header_type?(o(),s(l,{key:0},{default:u((()=>[d(l,{class:"mt-[10rpx]"},{default:u((()=>[d(v,{label:"纳税人识别号",prop:"tax_number","border-bottom":!0},{default:u((()=>[d(C,{modelValue:F.value.tax_number,"onUpdate:modelValue":a[5]||(a[5]=e=>F.value.tax_number=e),modelModifiers:{trim:!0},border:"none",clearable:"",placeholder:"请输入纳税人识别号",onChange:R},null,8,["modelValue"])])),_:1})])),_:1}),d(l,{class:"py-[20rpx] flex items-baseline"},{default:u((()=>[d(j,{class:"text-[30rpx]"},{default:u((()=>[p("更多选填内容")])),_:1}),d(j,{class:"text-xs text-gray-subtitle ml-[10rpx]"},{default:u((()=>[p("注册地址、电话、开户银行及账号")])),_:1}),d(l,{class:"text-xs text-right flex-1",onClick:a[6]||(a[6]=e=>T.value=!T.value)},{default:u((()=>[d(j,null,{default:u((()=>[p(f(T.value?"收起":"展开"),1)])),_:1}),d(j,{class:x(["text-[30rpx] nc-iconfont text-gray-subtitle ml-[5rpx]",T.value?"nc-icon-shangV6xx-1":"nc-icon-xiaV6xx"])},null,8,["class"])])),_:1})])),_:1}),U(d(l,null,{default:u((()=>[d(l,{class:"mt-[10rpx]"},{default:u((()=>[d(v,{label:"注册地址","border-bottom":!0},{default:u((()=>[d(C,{modelValue:F.value.address,"onUpdate:modelValue":a[7]||(a[7]=e=>F.value.address=e),border:"none",clearable:"",placeholder:"(选填)请输入企业注册地址"},null,8,["modelValue"])])),_:1})])),_:1}),d(l,{class:"mt-[10rpx]"},{default:u((()=>[d(v,{label:"注册电话","border-bottom":!0},{default:u((()=>[d(C,{modelValue:F.value.telephone,"onUpdate:modelValue":a[8]||(a[8]=e=>F.value.telephone=e),border:"none",clearable:"",placeholder:"(选填)请输入企业注册电话"},null,8,["modelValue"])])),_:1})])),_:1}),d(l,{class:"mt-[10rpx]"},{default:u((()=>[d(v,{label:"开户银行","border-bottom":!0},{default:u((()=>[d(C,{modelValue:F.value.bank_name,"onUpdate:modelValue":a[9]||(a[9]=e=>F.value.bank_name=e),border:"none",clearable:"",placeholder:"(选填)请输入企业开户银行"},null,8,["modelValue"])])),_:1})])),_:1}),d(l,{class:"mt-[10rpx]"},{default:u((()=>[d(v,{label:"银行账号","border-bottom":!0},{default:u((()=>[d(C,{modelValue:F.value.bank_card_number,"onUpdate:modelValue":a[10]||(a[10]=e=>F.value.bank_card_number=e),border:"none",clearable:"",placeholder:"(选填)请输入企业开户银行账号"},null,8,["modelValue"])])),_:1})])),_:1})])),_:1},512),[[M,T.value]])])),_:1})):_("v-if",!0)])),_:1},512),[[M,A.value]])])),_:1},8,["model","rules"])])),_:1})])),_:1}),d(l,{class:"p-[30rpx]"},{default:u((()=>[d(H,{class:"bg-[var(--primary-color)] text-[#fff] h-[80rpx] leading-[80rpx] rounded-[100rpx] text-[28rpx]",onClick:D},{default:u((()=>[p("确认")])),_:1})])),_:1})])),_:1})])),_:1},8,["show"])}}});export{P as _,R as a};