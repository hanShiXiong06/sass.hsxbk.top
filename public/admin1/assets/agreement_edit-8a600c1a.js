import{d as R,bY as S,x as j,f as N,r as k,c3 as T,n as $,l as q,q as n,h as x,c as A,a as s,u as o,t as p,P as I,s as U,w as m,e as l,i as y,J as L,K as O,L as z,a0 as J,E as K,U as Y}from"./index-17984968.js";/* empty css                   *//* empty css                  *//* empty css                *//* empty css                */import{_ as G}from"./index.vue_vue_type_script_setup_true_lang-a8924ef7.js";import"./el-form-item-4ed993c7.js";/* empty css                 */import{a as H,e as M}from"./agreement-69a7419e.js";import"./index.vue_vue_type_style_index_0_lang-c5bcb8a9.js";/* empty css                  *//* empty css                   */import"./attachment-a816d3ef.js";import"./index.vue_vue_type_script_setup_true_lang-8693344a.js";/* empty css                        *//* empty css               *//* empty css                  *//* empty css                  *//* empty css                     *//* empty css                  *//* empty css                      *//* empty css                    *//* empty css                 */import"./el-tooltip-4ed993c7.js";/* empty css                 *//* empty css               *//* empty css               *//* empty css                    *//* empty css                         */import"./index.vue_vue_type_script_setup_true_lang-5615c67a.js";/* empty css                   */import"./index.vue_vue_type_script_setup_true_lang-8e50df98.js";/* empty css                */import"./_plugin-vue_export-helper-c27b6911.js";const Q={class:"main-container"},W={class:"detail-head"},X=s("span",{class:"iconfont iconxiangzuojiantou !text-xs"},null,-1),Z={class:"ml-[1px]"},ee=s("span",{class:"adorn"},"|",-1),te={class:"right"},oe={class:"fixed-footer-wrap"},ae={class:"fixed-footer"},Ue=R({__name:"agreement_edit",setup(se){S();const d=j(),_=N(),f=d.query.key||"",r=k(!1),w=T(),V=d.meta.title,g={agreement_key:"",content:"",title:"",agreement_key_name:""},t=$({...g});r.value=!0,f&&(async(c="")=>{Object.assign(t,g);const e=await(await H(c)).data;Object.keys(t).forEach(a=>{e[a]!=null&&(t[a]=e[a])}),console.log(t),r.value=!1})(f);const v=k(),E=q(()=>({title:[{required:!0,message:n("titlePlaceholder"),trigger:"blur"}]})),C=async c=>{r.value||!c||await c.validate(async e=>{if(e){r.value=!0;const a=t;a.key=t.agreement_key,M(a).then(u=>{r.value=!1,h()}).catch(()=>{r.value=!1})}})},h=()=>{w.removeTab(d.path),_.push({path:"/tk_jhkd/baseconfig/agreement"})};return(c,e)=>{const a=L,u=O,D=G,B=z,F=J,b=K,P=Y;return x(),A("div",Q,[s("div",W,[s("div",{class:"left",onClick:e[0]||(e[0]=i=>o(_).push({path:"/setting/agreement"}))},[X,s("span",Z,p(o(n)("returnToPreviousPage")),1)]),ee,s("span",te,p(o(V)),1)]),I((x(),U(F,{class:"box-card !border-none",shadow:"never"},{default:m(()=>[l(B,{model:t,"label-width":"90px",ref_key:"formRef",ref:v,rules:o(E),class:"page-form"},{default:m(()=>[l(u,{label:o(n)("title"),prop:"title"},{default:m(()=>[l(a,{modelValue:t.title,"onUpdate:modelValue":e[1]||(e[1]=i=>t.title=i),clearable:"",placeholder:o(n)("titlePlaceholder"),class:"input-width",maxlength:"20"},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),l(u,{label:o(n)("content")},{default:m(()=>[l(D,{modelValue:t.content,"onUpdate:modelValue":e[2]||(e[2]=i=>t.content=i)},null,8,["modelValue"])]),_:1},8,["label"])]),_:1},8,["model","rules"])]),_:1})),[[P,r.value]]),s("div",oe,[s("div",ae,[l(b,{type:"primary",onClick:e[3]||(e[3]=i=>C(v.value))},{default:m(()=>[y(p(o(n)("save")),1)]),_:1}),l(b,{onClick:e[4]||(e[4]=i=>h())},{default:m(()=>[y(p(o(n)("cancel")),1)]),_:1})])])])}}});export{Ue as default};