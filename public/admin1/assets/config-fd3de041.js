import{d as B,x as V,r as f,h as m,c as h,a as r,t as u,u as l,P as y,s as O,w as c,e as d,q as s,bZ as I,i as R,B as F,J as P,K as j,aB as D,a0 as U,L as K,E as S,U as q}from"./index-17984968.js";/* empty css                   *//* empty css                  *//* empty css                *//* empty css                *//* empty css                    */import"./el-form-item-4ed993c7.js";/* empty css                 */import{g as J,s as M}from"./order-9cf50b74.js";const T={class:"main-container pt-[20px]"},Z={class:"flex ml-[18px] justify-between items-center"},$={class:"text-page-title"},z={class:"panel-title !text-sm pl-[15px]"},A={class:"!text-sm"},G={class:"text-[12px] text-[#a9a9a9] leading-normal mt-[5px]"},H={key:0,class:"fixed-footer-wrap"},Q={class:"fixed-footer"},de=B({__name:"config",setup(W){const g=V().meta.title,o=f({close_length:"10",is_close:"1"}),x=f({close_length:[{validator:(a,e,t)=>o.value.is_close!="2"?e==""?t(new Error(s("CloseLengthPlaceholder"))):Number(e)>=10&&Number(e)<=1440?t():t(new Error(s("closeOrderInfoBottom"))):t(),trigger:"blur"}],finish_length:[{validator:(a,e,t)=>o.value.is_finish!="2"?e==""?t(new Error(s("finishLengthPlaceholder"))):Number(e)>=1&&Number(e)<=30?t():t(new Error(s("confirmBottom"))):t(),trigger:"blur"}],refund_length:[{validator:(a,e,t)=>o.value.no_allow_refund!="2"?e==""?t(new Error(s("validRefundLengthPlaceholder"))):Number(e)>=1&&Number(e)<=30?t():t(new Error(s("refundBottom"))):t(),trigger:"blur"}]}),n=f(!1),_=()=>{n.value=!0,J().then(a=>{Object.values(a.data).forEach(e=>{o.value=Object.assign(o.value,e)}),o.value.invoice_content.length||o.value.invoice_content.push(""),n.value=!1}).catch(()=>{n.value=!1})};_();const p=f(),b=async a=>{await a.validate(async e=>{e&&(n.value=!0,M(o.value).then(t=>{_()}).catch(()=>{n.value=!1}))})};return(a,e)=>{const t=P,v=j,w=D,E=U,C=K,L=S,N=q;return m(),h("div",T,[r("div",Z,[r("span",$,u(l(g)),1)]),y((m(),O(C,{model:o.value,"label-width":"95",ref_key:"formRef",ref:p,rules:x.value,class:"page-form"},{default:c(()=>[d(E,{class:"box-card !border-none",shadow:"never"},{default:c(()=>[r("h3",z,u(l(s)("closeOrderInfo")),1),d(v,{prop:"close_length"},{default:c(()=>[r("div",null,[r("p",A,[r("span",null,u(l(s)("closeOrderInfoLeft")),1),d(t,{modelValue:o.value.close_length,"onUpdate:modelValue":e[0]||(e[0]=i=>o.value.close_length=i),modelModifiers:{trim:!0},class:"!w-[120px] mx-[10px]",onKeyup:e[1]||(e[1]=i=>l(I)(i)),clearable:""},null,8,["modelValue"]),r("span",null,u(l(s)("closeOrderInfoRight")),1)]),r("p",G,u(l(s)("closeOrderInfoBottom")),1)])]),_:1}),d(v,{prop:"is_close"},{default:c(()=>[d(w,{modelValue:o.value.is_close,"onUpdate:modelValue":e[2]||(e[2]=i=>o.value.is_close=i),label:l(s)("isClose"),"true-label":"1","false-label":"2"},null,8,["modelValue","label"])]),_:1})]),_:1})]),_:1},8,["model","rules"])),[[N,n.value]]),n.value?F("",!0):(m(),h("div",H,[r("div",Q,[d(L,{type:"primary",onClick:e[3]||(e[3]=i=>b(p.value))},{default:c(()=>[R(u(l(s)("save")),1)]),_:1})])]))])}}});export{de as default};
