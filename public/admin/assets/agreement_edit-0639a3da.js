import{d as S,bZ as j,x as N,f as P,r as k,c5 as T,n as $,l as q,q as n,h as x,c as A,a as s,u as o,t as p,R as I,s as L,w as m,e as l,i as y,K as O,L as U,M as z,a7 as K,E as M,Y}from"./index-37fee5a0.js";/* empty css                   *//* empty css                  *//* empty css                *//* empty css                */import{_ as Z}from"./index.vue_vue_type_script_setup_true_lang-6267846f.js";import"./el-form-item-4ed993c7.js";/* empty css                 */import{a as G,e as H}from"./agreement-87ffa88b.js";import"./index.vue_vue_type_style_index_0_lang-9e528ade.js";/* empty css                  *//* empty css                   */import"./attachment-78567e2f.js";import"./index.vue_vue_type_script_setup_true_lang-1f515813.js";/* empty css                        *//* empty css               *//* empty css                  *//* empty css                  *//* empty css                     *//* empty css                  *//* empty css                      *//* empty css                    */import"./el-tooltip-4ed993c7.js";/* empty css                 *//* empty css               *//* empty css               *//* empty css                    *//* empty css                    */import"./el-dropdown-item-4ed993c7.js";import"./index.vue_vue_type_script_setup_true_lang-a7856b99.js";/* empty css                   */import"./index.vue_vue_type_script_setup_true_lang-165de32d.js";import"./_plugin-vue_export-helper-c27b6911.js";const J={class:"main-container"},Q={class:"detail-head"},W=s("span",{class:"iconfont iconxiangzuojiantou !text-xs"},null,-1),X={class:"ml-[1px]"},ee=s("span",{class:"adorn"},"|",-1),te={class:"right"},oe={class:"fixed-footer-wrap"},ae={class:"fixed-footer"},Ie=S({__name:"agreement_edit",setup(se){j();const d=N(),_=P(),f=d.query.key||"",r=k(!1),w=T(),V=d.meta.title,g={agreement_key:"",content:"",title:"",agreement_key_name:""},t=$({...g});r.value=!0,f&&(async(c="")=>{Object.assign(t,g);const e=await(await G(c)).data;Object.keys(t).forEach(a=>{e[a]!=null&&(t[a]=e[a])}),console.log(t),r.value=!1})(f);const v=k(),E=q(()=>({title:[{required:!0,message:n("titlePlaceholder"),trigger:"blur"}]})),C=async c=>{r.value||!c||await c.validate(async e=>{if(e){r.value=!0;const a=t;a.key=t.agreement_key,H(a).then(u=>{r.value=!1,h()}).catch(()=>{r.value=!1})}})},h=()=>{w.removeTab(d.path),_.push({path:"/tk_jhkd/baseconfig/agreement"})};return(c,e)=>{const a=O,u=U,D=Z,R=z,B=K,b=M,F=Y;return x(),A("div",J,[s("div",Q,[s("div",{class:"left",onClick:e[0]||(e[0]=i=>o(_).push({path:"/setting/agreement"}))},[W,s("span",X,p(o(n)("returnToPreviousPage")),1)]),ee,s("span",te,p(o(V)),1)]),I((x(),L(B,{class:"box-card !border-none",shadow:"never"},{default:m(()=>[l(R,{model:t,"label-width":"90px",ref_key:"formRef",ref:v,rules:o(E),class:"page-form"},{default:m(()=>[l(u,{label:o(n)("title"),prop:"title"},{default:m(()=>[l(a,{modelValue:t.title,"onUpdate:modelValue":e[1]||(e[1]=i=>t.title=i),clearable:"",placeholder:o(n)("titlePlaceholder"),class:"input-width",maxlength:"20"},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),l(u,{label:o(n)("content")},{default:m(()=>[l(D,{modelValue:t.content,"onUpdate:modelValue":e[2]||(e[2]=i=>t.content=i)},null,8,["modelValue"])]),_:1},8,["label"])]),_:1},8,["model","rules"])]),_:1})),[[F,r.value]]),s("div",oe,[s("div",ae,[l(b,{type:"primary",onClick:e[3]||(e[3]=i=>C(v.value))},{default:m(()=>[y(p(o(n)("save")),1)]),_:1}),l(b,{onClick:e[4]||(e[4]=i=>h())},{default:m(()=>[y(p(o(n)("cancel")),1)]),_:1})])])])}}});export{Ie as default};
