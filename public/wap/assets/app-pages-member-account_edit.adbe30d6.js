import{d as e,r as a,p as l,m as t,j as o,a1 as r,o as n,c,w as d,b as u,E as s,x as m,y as p,u as i,G as b,f as _,n as f,aB as h,aC as y,a as x,aA as g,i as k,g as v,h as V,a4 as j,t as P}from"./index-905183d4.js";import{_ as A}from"./u-input.07f64251.js";import{_ as N,a as T}from"./u-form.7ae4e9da.js";import{_ as C}from"./u-button.d3798ecb.js";import{_ as R}from"./u-modal.a7c7d867.js";import"./u-icon.86a2aad0.js";import"./_plugin-vue_export-helper.1b428a4d.js";import"./u-line.9e44f7cf.js";import"./u-loading-icon.c376267d.js";import"./u-popup.e3f6594b.js";import"./u-transition.dbaca185.js";import"./u-safe-bottom.e94b03c1.js";const w=e({__name:"account_edit",setup(e){const w=a(!1),M=a(null),U=a("get"),B=a(!1),q=l({account_id:0,account_type:"bank",bank_name:"",realname:"",account_no:""}),E=t((()=>({realname:{type:"string",required:!0,message:"bank"==q.account_type?P("bankRealnamePlaceholder"):P("alipayRealnamePlaceholder"),trigger:["blur","change"]},bank_name:{type:"string",required:"bank"==q.account_type,message:P("bankNamePlaceholder"),trigger:["blur","change"]},account_no:{type:"string",required:!0,message:"bank"==q.account_type?P("bankAccountNoPlaceholder"):P("alipayAccountNoPlaceholder"),trigger:["blur","change"]}})));o((e=>{e.type&&(q.account_type=e.type),e.mode&&(U.value=e.mode),e.id&&(q.account_id=e.id,r({account_id:e.id}).then((e=>{e.data&&Object.keys(q).forEach((a=>{null!=e.data[a]&&(q[a]=e.data[a])}))})))}));const O=()=>{const e=q.account_id?h:y;M.value.validate().then((()=>{w.value||(w.value=!0,e(q).then((e=>{"get"==U.value?x({url:"/app/pages/member/account",param:{type:q.account_type,mode:U.value}}):x({url:"/app/pages/member/apply_cash_out",param:{account_id:q.account_id?q.account_id:e.data.id,type:q.account_type},mode:"redirectTo"})})).catch((()=>{w.value=!1})))}))},W=()=>{g(q.account_id).then((()=>{x({url:"/app/pages/member/account",mode:"redirectTo"})}))};return(e,a)=>{const l=k,t=v(V("u-input"),A),o=v(V("u-form-item"),N),r=v(V("u-form"),T),h=v(V("u-button"),C),y=j,x=v(V("u-modal"),R);return n(),c(l,{style:f(e.themeColor())},{default:d((()=>[u(y,{"scroll-y":"true",class:"w-screen h-screen bg-page"},{default:d((()=>[u(l,{class:"h-[30rpx]"}),u(l,{class:"p-[30rpx] bg-white mx-[32rpx] rounded"},{default:d((()=>["bank"==q.account_type?(n(),s(b,{key:0},[u(l,{class:"text-center text-base font-bold mt-[50rpx]"},{default:d((()=>[m(p(i(P)("addBankCard")),1)])),_:1}),u(l,{class:"text-center text-sm mt-[10rpx]"},{default:d((()=>[m(p(i(P)("addBankCardTips")),1)])),_:1}),u(l,{class:"mt-[50rpx]"},{default:d((()=>[u(r,{labelPosition:"left",model:q,labelWidth:"200rpx",errorType:"toast",rules:i(E),ref_key:"formRef",ref:M},{default:d((()=>[u(l,{class:"mt-[10rpx]"},{default:d((()=>[u(o,{label:i(P)("bankRealname"),prop:"realname","border-bottom":!0},{default:d((()=>[u(t,{modelValue:q.realname,"onUpdate:modelValue":a[0]||(a[0]=e=>q.realname=e),modelModifiers:{trim:!0},border:"none",clearable:"",placeholder:i(P)("bankRealnamePlaceholder")},null,8,["modelValue","placeholder"])])),_:1},8,["label"])])),_:1}),u(l,{class:"mt-[10rpx]"},{default:d((()=>[u(o,{label:i(P)("bankName"),prop:"bank_name","border-bottom":!0},{default:d((()=>[u(t,{modelValue:q.bank_name,"onUpdate:modelValue":a[1]||(a[1]=e=>q.bank_name=e),modelModifiers:{trim:!0},border:"none",clearable:"",placeholder:i(P)("bankNamePlaceholder")},null,8,["modelValue","placeholder"])])),_:1},8,["label"])])),_:1}),u(l,{class:"mt-[10rpx]"},{default:d((()=>[u(o,{label:i(P)("bankAccountNo"),prop:"account_no","border-bottom":!0},{default:d((()=>[u(t,{modelValue:q.account_no,"onUpdate:modelValue":a[2]||(a[2]=e=>q.account_no=e),modelModifiers:{trim:!0},border:"none",clearable:"",placeholder:i(P)("bankAccountNoPlaceholder")},null,8,["modelValue","placeholder"])])),_:1},8,["label"])])),_:1})])),_:1},8,["model","rules"])])),_:1})],64)):_("v-if",!0),"alipay"==q.account_type?(n(),s(b,{key:1},[u(l,{class:"text-center text-base font-bold mt-[50rpx]"},{default:d((()=>[m(p(i(P)("addAlipayAccount")),1)])),_:1}),u(l,{class:"text-center text-sm mt-[10rpx]"},{default:d((()=>[m(p(i(P)("addAlipayAccountTips")),1)])),_:1}),u(l,{class:"mt-[50rpx]"},{default:d((()=>[u(r,{labelPosition:"left",model:q,labelWidth:"200rpx",errorType:"toast",rules:i(E),ref_key:"formRef",ref:M},{default:d((()=>[u(l,{class:"mt-[10rpx]"},{default:d((()=>[u(o,{label:i(P)("alipayRealname"),prop:"realname","border-bottom":!0},{default:d((()=>[u(t,{modelValue:q.realname,"onUpdate:modelValue":a[3]||(a[3]=e=>q.realname=e),modelModifiers:{trim:!0},border:"none",clearable:"",placeholder:i(P)("alipayRealnamePlaceholder")},null,8,["modelValue","placeholder"])])),_:1},8,["label"])])),_:1}),u(l,{class:"mt-[10rpx]"},{default:d((()=>[u(o,{label:i(P)("alipayAccountNo"),prop:"account_no","border-bottom":!0},{default:d((()=>[u(t,{modelValue:q.account_no,"onUpdate:modelValue":a[4]||(a[4]=e=>q.account_no=e),modelModifiers:{trim:!0},border:"none",clearable:"",placeholder:i(P)("alipayAccountNoPlaceholder")},null,8,["modelValue","placeholder"])])),_:1},8,["label"])])),_:1})])),_:1},8,["model","rules"])])),_:1})],64)):_("v-if",!0),u(l,{class:"mt-[100rpx]"},{default:d((()=>[u(h,{text:i(P)("save"),type:"primary",shape:"circle",loading:w.value,onClick:O},null,8,["text","loading"])])),_:1})])),_:1})])),_:1}),u(x,{show:B.value,content:i(P)("deleteConfirm"),confirmText:i(P)("confirm"),cancelText:i(P)("cancel"),showCancelButton:!0,onConfirm:W,onCancel:a[5]||(a[5]=e=>B.value=!1)},null,8,["show","content","confirmText","cancelText"])])),_:1},8,["style"])}}});export{w as default};
