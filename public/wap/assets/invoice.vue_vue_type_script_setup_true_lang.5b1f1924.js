import{d as e,r as a,q as l,g as r,h as t,o,c as s,w as u,b as d,Y as n,y as p,I as i,K as c,J as m,L as x,z as f,f as _,u as b,l as v,bc as h,H as y,i as g,D as k,a2 as V,E as w,bu as C,p as j,e as U,v as M,af as T}from"./index-d8a8f699.js";import{_ as q}from"./u-loading-icon.6808ae8c.js";import{_ as z}from"./u-empty.41eb000a.js";import{_ as A}from"./u-popup.0d48946e.js";import{j as $}from"./order.6a01647a.js";import{_ as E,a as F}from"./u-form.11d92cf8.js";import{_ as H}from"./u-input.9468a367.js";const I=e({__name:"select-store",emits:["confirm"],setup(e,{expose:C,emit:j}){const U=a(!1),M=a(!1),T=a(!0),E=a([]),F=a(null),H=l({lat:0,lng:0}),I=()=>{j("confirm",F.value),U.value=!1},J=e=>{if((e=parseFloat(e))<1e3)return`${e}m`;return`${(e/1e3).toFixed(2)}km`};return C({open:()=>{M.value||(M.value=!0,h({type:"gcj02",success:e=>{H.lat=e.latitude,H.lng=e.longitude},fail:e=>{if(e.errMsg&&e.errno)if(104==e.errno){y({title:"用户未授权隐私权限，获取位置失败",icon:"none"})}else if(112==e.errno){y({title:"隐私协议中未声明，获取位置失败",icon:"none"})}else if("getLocation:fail auth deny"==e.errMsg){y({title:"用户未授权获取位置的权限",icon:"none"})}else y({title:e.errMsg,icon:"none"})}}),setTimeout((()=>{$({latlng:H}).then((({data:e})=>{E.value=e,T.value=!1})).catch((()=>{T.value=!1}))}),1500)),U.value=!0}}),(e,a)=>{const l=g,h=k,y=r(t("u-loading-icon"),q),C=r(t("u-empty"),z),j=V,M=w,$=r(t("u-popup"),A);return o(),s($,{show:U.value,onClose:a[1]||(a[1]=e=>U.value=!1),mode:"bottom",round:10,closeable:!0},{default:u((()=>[d(l,{onTouchmove:a[0]||(a[0]=n((()=>{}),["prevent","stop"]))},{default:u((()=>[d(l,{class:"text-center p-[30rpx]"},{default:u((()=>[p("请选择自提点")])),_:1}),d(j,{"scroll-y":"true",class:"h-[50vh]"},{default:u((()=>[d(l,{class:"p-[30rpx] pt-0 text-sm"},{default:u((()=>[(o(!0),i(c,null,m(E.value,(e=>(o(),s(l,{class:x(["mt-[30rpx] p-[30rpx] border-1 !border-[#eee] border-solid rounded-[20rpx]",{"!border-primary bg-primary-light":F.value&&F.value.store_id==e.store_id}]),onClick:a=>{return l=e,void(F.value?F.value=F.value.store_id!=l.store_id?l:null:F.value=l);var l}},{default:u((()=>[d(l,{class:"font-bold flex"},{default:u((()=>[d(l,{class:"flex-1 w-0"},{default:u((()=>[d(h,null,{default:u((()=>[p(f(e.store_name),1)])),_:2},1024),d(h,{class:"text-[26rpx] ml-[20rpx]"},{default:u((()=>[p(f(e.store_mobile),1)])),_:2},1024)])),_:2},1024),e.distance?(o(),s(l,{key:0},{default:u((()=>[d(h,{class:"text-red text-xs font-normal"},{default:u((()=>[p(f(J(e.distance)),1)])),_:2},1024)])),_:2},1024)):_("v-if",!0)])),_:2},1024),d(l,{class:"mt-[16rpx] text-[26rpx]"},{default:u((()=>[p(f(e.full_address),1)])),_:2},1024),d(l,{class:"mt-[16rpx] text-[26rpx]"},{default:u((()=>[p("营业时间："+f(e.trade_time),1)])),_:2},1024)])),_:2},1032,["class","onClick"])))),256))])),_:1}),T.value?(o(),s(l,{key:0,class:"h-[50vh] flex items-center flex-col justify-center"},{default:u((()=>[d(y,{vertical:!0})])),_:1})):_("v-if",!0),T.value||E.value.length?_("v-if",!0):(o(),s(l,{key:1,class:"h-[50vh] flex items-center flex-col justify-center"},{default:u((()=>[d(C,{text:"没有可选择的自提点",icon:b(v)("static/resource/images/empty.png")},null,8,["icon"])])),_:1}))])),_:1}),d(l,{class:"p-[30rpx]"},{default:u((()=>[d(M,{class:"bg-[var(--primary-color)] text-[#fff] h-[80rpx] leading-[80rpx] rounded-[100rpx] text-[28rpx]",onClick:I},{default:u((()=>[p("确认")])),_:1})])),_:1})])),_:1})])),_:1},8,["show"])}}});const J=e({__name:"invoice",emits:["confirm"],setup(e,{expose:l,emit:v}){const h=a(!1),y=a({is_invoice:2,invoice_content:[]}),q=a(!1),z=a(!1),$=a({header_type:1,header_name:"",type:"",name:"",tax_number:"",telephone:"",address:"",bank_name:"",bank_card_number:""}),I=j((()=>1==y.value.is_invoice));C.get("phone_shop/config/invoice").then((({data:e})=>{y.value=e,e.invoice_content.length&&($.value.name=e.invoice_content[0])})).catch();const J=e=>{T((()=>{$.value.tax_number=e.replace(/[^0-9a-zA-Z]/g,"")}))},L=a(null),Z=j((()=>({header_name:{type:"string",required:q.value,message:"请输入发票抬头",trigger:["blur","change"]},tax_number:[{type:"string",required:q.value&&2==$.value.header_type,message:"请输入纳税人识别号",trigger:["blur","change"]},{validator(e,a,l){/^[0-9a-zA-Z]+$/.test(a)||2!=$.header_type?l():l(new Error("请输入正确的纳税人识别号"))}}]}))),B=()=>{L.value.validate().then((()=>{const e=q.value?$.value:{};v("confirm",e),h.value=!1}))};return l({open:()=>{h.value=!0},invoiceOpen:I}),(e,a)=>{const l=g,v=r(t("u-form-item"),E),C=r(t("u-input"),H),j=k,T=r(t("u-form"),F),I=V,D=w,K=r(t("u-popup"),A);return o(),s(K,{show:h.value,onClose:a[12]||(a[12]=e=>h.value=!1),mode:"bottom",round:10,closeable:!0,safeAreaInsetBottom:!0,customStyle:{maxHeight:"58vh"}},{default:u((()=>[d(l,{onTouchmove:a[11]||(a[11]=n((()=>{}),["prevent","stop"]))},{default:u((()=>[d(l,{class:"text-center p-[30rpx] box-border h-[111rpx]"},{default:u((()=>[p("请填写发票信息")])),_:1}),d(I,{"scroll-y":!0,class:"max-h-[calc(50vh-211rpx)]"},{default:u((()=>[d(l,{class:"p-[30rpx] pt-0 text-sm"},{default:u((()=>[d(T,{labelPosition:"left",model:$.value,labelWidth:"200rpx",errorType:"toast",rules:b(Z),ref_key:"formRef",ref:L},{default:u((()=>[d(l,{class:"mt-[10rpx]"},{default:u((()=>[d(v,{label:"需要发票","border-bottom":!0},{default:u((()=>[d(l,{class:"flex"},{default:u((()=>[d(l,{class:x(["rounded px-[30rpx] py-[10rpx] mr-[20rpx] border-1 !border-[#eee] border-solid text-sm",{"bg-primary text-white !border-primary":!q.value}]),onClick:a[0]||(a[0]=e=>q.value=!1)},{default:u((()=>[p(" 不需要")])),_:1},8,["class"]),d(l,{class:x(["rounded px-[30rpx] py-[10rpx] border-1 !border-[#eee] border-solid text-sm",{"bg-primary text-white !border-primary":q.value}]),onClick:a[1]||(a[1]=e=>q.value=!0)},{default:u((()=>[p("需要 ")])),_:1},8,["class"])])),_:1})])),_:1})])),_:1}),U(d(l,null,{default:u((()=>[d(l,{class:"mt-[10rpx]"},{default:u((()=>[d(v,{label:"抬头类型","border-bottom":!0},{default:u((()=>[d(l,{class:"flex"},{default:u((()=>[d(l,{class:x(["rounded px-[30rpx] py-[10rpx] mr-[20rpx] border-1 !border-[#eee] border-solid text-sm",{"bg-primary text-white !border-primary":1==$.value.header_type}]),onClick:a[2]||(a[2]=e=>$.value.header_type=1)},{default:u((()=>[p("个人")])),_:1},8,["class"]),d(l,{class:x(["rounded px-[30rpx] py-[10rpx] border-1 !border-[#eee] border-solid text-sm",{"bg-primary text-white !border-primary":2==$.value.header_type}]),onClick:a[3]||(a[3]=e=>$.value.header_type=2)},{default:u((()=>[p("企业")])),_:1},8,["class"])])),_:1})])),_:1})])),_:1}),d(l,{class:"mt-[10rpx]"},{default:u((()=>[d(v,{label:"发票内容",prop:"header_name","border-bottom":!0},{default:u((()=>[d(l,{class:"flex flex-wrap"},{default:u((()=>[(o(!0),i(c,null,m(y.value.invoice_content,(e=>(o(),s(l,{class:x(["rounded px-[30rpx] my-[10rpx] py-[10rpx] mr-[20rpx] border-1 !border-[#eee] border-solid text-sm whitespace-normal",{"bg-primary text-white !border-primary":$.value.name==e}]),onClick:a=>$.value.name=e},{default:u((()=>[p(f(e),1)])),_:2},1032,["class","onClick"])))),256))])),_:1})])),_:1})])),_:1}),d(l,{class:"mt-[10rpx]"},{default:u((()=>[d(v,{label:"发票抬头",prop:"header_name","border-bottom":!0},{default:u((()=>[d(C,{modelValue:$.value.header_name,"onUpdate:modelValue":a[4]||(a[4]=e=>$.value.header_name=e),modelModifiers:{trim:!0},border:"none",clearable:"",placeholder:"请输入发票抬头"},null,8,["modelValue"])])),_:1})])),_:1}),2==$.value.header_type?(o(),s(l,{key:0},{default:u((()=>[d(l,{class:"mt-[10rpx]"},{default:u((()=>[d(v,{label:"纳税人识别号",prop:"tax_number","border-bottom":!0},{default:u((()=>[d(C,{modelValue:$.value.tax_number,"onUpdate:modelValue":a[5]||(a[5]=e=>$.value.tax_number=e),modelModifiers:{trim:!0},border:"none",clearable:"",placeholder:"请输入纳税人识别号",onChange:J},null,8,["modelValue"])])),_:1})])),_:1}),d(l,{class:"py-[20rpx] flex items-baseline"},{default:u((()=>[d(j,{class:"text-[30rpx]"},{default:u((()=>[p("更多选填内容")])),_:1}),d(j,{class:"text-xs text-gray-subtitle ml-[10rpx]"},{default:u((()=>[p("注册地址、电话、开户银行及账号")])),_:1}),d(l,{class:"text-xs text-right flex-1",onClick:a[6]||(a[6]=e=>z.value=!z.value)},{default:u((()=>[d(j,null,{default:u((()=>[p(f(z.value?"收起":"展开"),1)])),_:1}),d(j,{class:x(["text-[30rpx] nc-iconfont text-gray-subtitle ml-[5rpx]",z.value?"nc-icon-shangV6xx-1":"nc-icon-xiaV6xx"])},null,8,["class"])])),_:1})])),_:1}),U(d(l,null,{default:u((()=>[d(l,{class:"mt-[10rpx]"},{default:u((()=>[d(v,{label:"注册地址","border-bottom":!0},{default:u((()=>[d(C,{modelValue:$.value.address,"onUpdate:modelValue":a[7]||(a[7]=e=>$.value.address=e),border:"none",clearable:"",placeholder:"(选填)请输入企业注册地址"},null,8,["modelValue"])])),_:1})])),_:1}),d(l,{class:"mt-[10rpx]"},{default:u((()=>[d(v,{label:"注册电话","border-bottom":!0},{default:u((()=>[d(C,{modelValue:$.value.telephone,"onUpdate:modelValue":a[8]||(a[8]=e=>$.value.telephone=e),border:"none",clearable:"",placeholder:"(选填)请输入企业注册电话"},null,8,["modelValue"])])),_:1})])),_:1}),d(l,{class:"mt-[10rpx]"},{default:u((()=>[d(v,{label:"开户银行","border-bottom":!0},{default:u((()=>[d(C,{modelValue:$.value.bank_name,"onUpdate:modelValue":a[9]||(a[9]=e=>$.value.bank_name=e),border:"none",clearable:"",placeholder:"(选填)请输入企业开户银行"},null,8,["modelValue"])])),_:1})])),_:1}),d(l,{class:"mt-[10rpx]"},{default:u((()=>[d(v,{label:"银行账号","border-bottom":!0},{default:u((()=>[d(C,{modelValue:$.value.bank_card_number,"onUpdate:modelValue":a[10]||(a[10]=e=>$.value.bank_card_number=e),border:"none",clearable:"",placeholder:"(选填)请输入企业开户银行账号"},null,8,["modelValue"])])),_:1})])),_:1})])),_:1},512),[[M,z.value]])])),_:1})):_("v-if",!0)])),_:1},512),[[M,q.value]])])),_:1},8,["model","rules"])])),_:1})])),_:1}),d(l,{class:"p-[30rpx]"},{default:u((()=>[d(D,{class:"bg-[var(--primary-color)] text-[#fff] h-[80rpx] leading-[80rpx] rounded-[100rpx] text-[28rpx]",onClick:B},{default:u((()=>[p("确认")])),_:1})])),_:1})])),_:1})])),_:1},8,["show"])}}});export{I as _,J as a};
