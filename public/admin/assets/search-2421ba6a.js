import{d as z,x as N,f as F,r as w,n as g,h as c,c as f,a as s,u as a,t as d,q as l,R as K,s as U,w as n,e as o,i as _,B as y,at as j,au as A,E as M,L as $,K as L,a7 as Y,M as q,Y as G,p as O,g as H}from"./index-6f32d09b.js";/* empty css                   *//* empty css                *//* empty css                *//* empty css                 */import"./el-form-item-4ed993c7.js";/* empty css                  *//* empty css                       *//* empty css                 */import{m as J,n as Q}from"./delivery-346280b9.js";import{_ as W}from"./_plugin-vue_export-helper-c27b6911.js";const V=u=>(O("data-v-4028277f"),u=u(),H(),u),X={class:"main-container"},Z={class:"flex ml-[18px] justify-between items-center mt-[20px]"},ee={class:"detail-head !m-0"},te=V(()=>s("span",{class:"iconfont iconxiangzuojiantou !text-xs"},null,-1)),ae={class:"ml-[1px]"},oe=V(()=>s("span",{class:"adorn"},"|",-1)),se={class:"right"},le={key:0,class:"text-[12px] text-[#b2b2b2]"},ne={key:1,class:"text-[12px] text-[#b2b2b2]"},ie={key:0},de={class:"text-[12px] text-[#b2b2b2]"},re={class:"text-[12px] text-[#b2b2b2]"},pe={class:"fixed-footer-wrap"},_e={class:"fixed-footer"},ce=z({__name:"search",setup(u){const E=N(),D=F(),B=E.meta.title,p=w(!0),t=g({interface_type:1,kdniao_id:"",kdniao_app_key:"",kdniao_is_pay:1,kd100_app_key:"",kd100_customer:""});(async()=>{const r=await(await J()).data;Object.keys(t).forEach(e=>{r[e]!=null&&(t[e]=r[e])}),p.value=!1})();const I=r=>{window.open(r,"_blank")},k=w(),R=g({}),C=async r=>{p.value||!r||await r.validate(async e=>{e&&(p.value=!0,Q(t).then(()=>{p.value=!1}).catch(()=>{p.value=!1}))})};return(r,e)=>{const v=j,b=A,h=M,m=$,x=L,P=Y,T=q,S=G;return c(),f("div",X,[s("div",Z,[s("div",ee,[s("div",{class:"left",onClick:e[0]||(e[0]=i=>a(D).push("/shop/order/delivery"))},[te,s("span",ae,d(a(l)("returnToPreviousPage")),1)]),oe,s("span",se,d(a(B)),1)])]),K((c(),U(T,{model:t,"label-width":"150px",ref_key:"formRef",ref:k,rules:R,class:"page-form"},{default:n(()=>[o(P,{class:"box-card !border-none",shadow:"never"},{default:n(()=>[o(m,{label:a(l)("interfaceType"),prop:"interface_type"},{default:n(()=>[s("div",null,[o(b,{modelValue:t.interface_type,"onUpdate:modelValue":e[1]||(e[1]=i=>t.interface_type=i)},{default:n(()=>[o(v,{label:1,size:"large"},{default:n(()=>[_(d(a(l)("kdn")),1)]),_:1})]),_:1},8,["modelValue"]),t.interface_type==1?(c(),f("p",le,[_(d(a(l)("promptTips1-1")),1),o(h,{class:"button-size",type:"primary",link:"",onClick:e[2]||(e[2]=i=>I("https://www.kdniao.com"))},{default:n(()=>[_("https://www.kdniao.com")]),_:1})])):y("",!0),t.interface_type==1?(c(),f("p",ne,d(a(l)("promptTips1-2")),1)):y("",!0)])]),_:1},8,["label"]),t.interface_type==1?(c(),f("div",ie,[o(m,{label:a(l)("isPayEdition"),prop:"kdn_is_pay",class:"items-center"},{default:n(()=>[o(b,{modelValue:t.kdniao_is_pay,"onUpdate:modelValue":e[3]||(e[3]=i=>t.kdniao_is_pay=i)},{default:n(()=>[o(v,{label:1,size:"large"},{default:n(()=>[_(d(a(l)("free")),1)]),_:1}),o(v,{label:2,size:"large"},{default:n(()=>[_(d(a(l)("pay")),1)]),_:1})]),_:1},8,["modelValue"])]),_:1},8,["label"]),o(m,{label:"EBusinessID",class:"input-item"},{default:n(()=>[s("div",null,[o(x,{modelValue:t.kdniao_id,"onUpdate:modelValue":e[4]||(e[4]=i=>t.kdniao_id=i),modelModifiers:{trim:!0},placeholder:a(l)("kdnEBusinessIDPlaceholder"),class:"input-width",clearable:""},null,8,["modelValue","placeholder"]),s("p",de,d(a(l)("kdnEBusinessIDTips")),1)])]),_:1}),o(m,{label:"APPKEY",class:"input-item"},{default:n(()=>[s("div",null,[o(x,{modelValue:t.kdniao_app_key,"onUpdate:modelValue":e[5]||(e[5]=i=>t.kdniao_app_key=i),modelModifiers:{trim:!0},clearable:"",placeholder:a(l)("kdnAppKeyPlaceholder"),class:"input-width"},null,8,["modelValue","placeholder"]),s("p",re,d(a(l)("kdnAppKeyTips")),1)])]),_:1})])):y("",!0)]),_:1})]),_:1},8,["model","rules"])),[[S,p.value]]),s("div",pe,[s("div",_e,[o(h,{type:"primary",loading:p.value,onClick:e[6]||(e[6]=i=>C(k.value))},{default:n(()=>[_(d(a(l)("save")),1)]),_:1},8,["loading"])])])])}}});const Ee=W(ce,[["__scopeId","data-v-4028277f"]]);export{Ee as default};
