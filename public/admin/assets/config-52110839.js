import{O as y,d as k,x as q,r as v,n as B,aR as O,aO as R,Q as D,U as g,q as a,h as I,c as M,e as n,w as l,a as r,t as u,u as c,i as U,aS as j,L as F,K as P,M as $,a7 as K,E as L}from"./index-6f32d09b.js";/* empty css                  *//* empty css                *//* empty css                *//* empty css                 */import"./el-form-item-4ed993c7.js";/* empty css                  */import{_ as Q}from"./_plugin-vue_export-helper-c27b6911.js";function T(){return y.get("channel/pc/config")}function z(_){return y.put("channel/pc/config",_,{showSuccessMessage:!0})}const A={class:"main-container"},G={class:"flex justify-between items-center"},H={class:"text-page-title"},J={class:"ml-2 cursor-pointer visit-btn"},W={class:"fixed-footer-wrap"},X={class:"fixed-footer"},Y=k({__name:"config",setup(_){const h=q().meta.title,o=v(!0),e=B({is_open:!1,request_url:""}),d=v();O().then(t=>{e.request_url=t.data.web_url+"/",o.value=!1}),T().then(t=>{Object.assign(e,t.data),e.is_open=Boolean(Number(e.is_open)),o.value=!1});const{copy:b,isSupported:w,copied:m}=R(),x=t=>{if(!w.value){g({message:a("notSupportCopy"),type:"warning"});return}b(t)};D(m,()=>{m.value&&g({message:a("copySuccess"),type:"success"})});const C=async t=>{o.value||!t||await t.validate(async s=>{if(s){o.value=!0;const i={...e};i.is_open=Number(i.is_open),z(i).then(()=>{o.value=!1}).catch(()=>{o.value=!1})}})};return(t,s)=>{const i=j,f=F,E=P,N=$,S=K,V=L;return I(),M("div",A,[n(S,{class:"box-card !border-none",shadow:"never"},{default:l(()=>[r("div",G,[r("span",H,u(c(h)),1)]),n(N,{class:"page-form mt-[20px]",model:e,"label-width":"150px",ref_key:"formRef",ref:d},{default:l(()=>[n(f,{label:c(a)("isOpen")},{default:l(()=>[n(i,{modelValue:e.is_open,"onUpdate:modelValue":s[0]||(s[0]=p=>e.is_open=p)},null,8,["modelValue"])]),_:1},8,["label"]),n(f,{label:c(a)("pCDomainName")},{default:l(()=>[n(E,{"model-value":e.request_url,class:"input-width",readonly:!0},{append:l(()=>[r("div",{class:"cursor-pointer",onClick:s[1]||(s[1]=p=>x(e.request_url))},u(c(a)("copy")),1)]),_:1},8,["model-value"]),r("span",J,u(c(a)("clickVisit")),1)]),_:1},8,["label"])]),_:1},8,["model"])]),_:1}),r("div",W,[r("div",X,[n(V,{type:"primary",loading:o.value,onClick:s[2]||(s[2]=p=>C(d.value))},{default:l(()=>[U(u(c(a)("save")),1)]),_:1},8,["loading"])])])])}}});const ce=Q(Y,[["__scopeId","data-v-02d90452"]]);export{ce as default};
