import{d as K,x as Q,r as h,l as X,Y,P as G,h as a,c,a as e,t as g,u as s,e as l,w as i,s as U,F as x,Q as L,A as H,B as V,q as p,i as E,cT as J,cU as M,K as O,X as W,E as Z,L as ee,a0 as te,U as oe,p as se,g as le}from"./index-17984968.js";/* empty css                   *//* empty css                *//* empty css                *//* empty css                  *//* empty css                */import{_ as ae}from"./index.vue_vue_type_style_index_0_lang-3ffe5d9a.js";import"./el-form-item-4ed993c7.js";import ie from"./index-0ce1f7fc.js";import{k as re,l as ne}from"./marketing-cc0d1b16.js";import{_ as ce}from"./_plugin-vue_export-helper-c27b6911.js";/* empty css                  *//* empty css                   *//* empty css                     *//* empty css                 */import"./diy-90301b82.js";/* empty css                        */import"./index.vue_vue_type_style_index_0_lang-c5bcb8a9.js";import"./attachment-a816d3ef.js";import"./index.vue_vue_type_script_setup_true_lang-8693344a.js";/* empty css               *//* empty css                  *//* empty css                  *//* empty css                  *//* empty css                      *//* empty css                    *//* empty css                 */import"./el-tooltip-4ed993c7.js";/* empty css                 *//* empty css               *//* empty css               *//* empty css                    *//* empty css                         */import"./index.vue_vue_type_script_setup_true_lang-5615c67a.js";/* empty css                   */import"./index.vue_vue_type_script_setup_true_lang-8e50df98.js";import"./sortable.esm-be94e56d.js";const pe=""+new URL("discount_config-529ffddb.png",import.meta.url).href,me=""+new URL("discount_banner-7034cc02.png",import.meta.url).href,de=_=>(se("data-v-f93e225d"),_=_(),le(),_),ue={class:"main-container pt-[20px]"},_e={class:"flex ml-[18px] justify-between items-center"},fe={class:"text-page-title"},ge={class:"flex"},ve={class:"w-[340px] h-[680px] bg-[#f6f6f6] overflow-hidden relative z-0"},he=de(()=>e("img",{class:"absolute top-0 left-0 z-10 pointer-events-none",src:pe},null,-1)),xe={class:"absolute top-0 left-0 w-[340px]"},be={key:0,class:"w-full h-[256px]",src:me},Ce=["src"],ke={class:"ml-[16px]"},we={class:"panel-title !text-[16px]","data-v-f52cd396":""},ye=["onClick"],Ue={class:"flex w-full justify-center"},Le={class:"fixed-footer-wrap"},Ve={class:"fixed-footer"},Ee=K({__name:"config",setup(_){const I=Q().meta.title,r=h(!1),F=X(()=>t.value.list.every(o=>o.imageUrl=="")),t=h({list:[{imageUrl:"",toLink:{name:""}}]}),b=h(),C=()=>{r.value=!0,re().then(o=>{o.data.length&&(t.value.list=o.data),r.value=!1}).catch(()=>{r.value=!1})};C();const S=()=>{t.value.list.push({imageUrl:"",toLink:{name:""}})},B=o=>{t.value.list.splice(o,1)},D=async o=>{r.value||!o||await o.validate(async f=>{f&&(r.value=!0,ne(t.value).then(k=>{r.value=!1,C()}).catch(()=>{r.value=!1}))})},N=()=>{console.log(t.value.list)};return(o,f)=>{const k=J,R=M,$=ie,w=O,A=ae,P=Y("CircleCloseFilled"),q=W,y=Z,z=ee,T=te,j=oe;return G((a(),c("div",ue,[e("div",_e,[e("span",fe,g(s(I)),1)]),l(T,{class:"box-card !border-none",shadow:"never"},{default:i(()=>[e("div",ge,[e("div",ve,[he,e("div",xe,[s(F)?(a(),c("img",be)):(a(),U(R,{key:1,height:"256px",arrow:"never"},{default:i(()=>[(a(!0),c(x,null,L(t.value.list,(n,m)=>(a(),c(x,{key:"img"+m},[n.imageUrl?(a(),U(k,{key:0},{default:i(()=>[e("img",{class:"w-full h-full",src:s(H)(n.imageUrl)},null,8,Ce)]),_:2},1024)):V("",!0)],64))),128))]),_:1}))])]),e("div",ke,[e("h3",we,g(s(p)("headTitle")),1),l(z,{model:t.value,"label-width":"120px",ref_key:"formRef",ref:b,class:"page-form"},{default:i(()=>[(a(!0),c(x,null,L(t.value.list,(n,m)=>(a(),c("div",{class:"border-[1px] border-[#e7e7e7] border-dashed w-[500px] pt-[15px] mb-[15px] relative item",key:m},[l(w,{label:s(p)("image"),prop:`list.${m}.imageUrl`,rules:[{required:!0,trigger:"change",validator:(d,v,u)=>{v||u(s(p)("imagePlaceholder")),u()}}]},{default:i(()=>[l($,{modelValue:n.imageUrl,"onUpdate:modelValue":d=>n.imageUrl=d,limit:1},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1032,["label","prop","rules"]),l(w,{label:s(p)("toLink"),prop:`list.${m}.toLink.url`,rules:[{required:!0,trigger:"change",validator:(d,v,u)=>{v||u(s(p)("toLinkPlaceholder")),u()}}]},{default:i(()=>[l(A,{modelValue:n.toLink,"onUpdate:modelValue":d=>n.toLink=d,onSuccess:N},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1032,["label","prop","rules"]),t.value.list.length>1?(a(),c("span",{key:0,class:"cursor-pointer absolute top-[-8px] right-[-8px] delete",onClick:d=>B(m)},[l(q,{color:"#bbbbbb",size:"20px"},{default:i(()=>[l(P)]),_:1})],8,ye)):V("",!0)]))),128)),e("div",Ue,[l(y,{class:"w-[400px]",onClick:S},{default:i(()=>[E(g(s(p)("addConfigList")),1)]),_:1})])]),_:1},8,["model"])])])]),_:1}),e("div",Le,[e("div",Ve,[l(y,{type:"primary",onClick:f[0]||(f[0]=n=>D(b.value))},{default:i(()=>[E(g(s(p)("save")),1)]),_:1})])])])),[[j,r.value]])}}});const ut=ce(Ee,[["__scopeId","data-v-f93e225d"]]);export{ut as default};