import{d as N,x as P,f as S,r as y,c7 as q,n as I,l as M,q as i,h as k,c as T,e as o,w as l,u as a,aP as U,R as j,s as A,a as w,i as h,t as V,c8 as L,c9 as O,aQ as H,a6 as K,K as Q,L as Y,M as z,E as G,Y as J}from"./index-6ea097a6.js";/* empty css                   *//* empty css                  *//* empty css                     */import{_ as W}from"./index.vue_vue_type_script_setup_true_lang-97412148.js";/* empty css                 *//* empty css                *//* empty css                   *//* empty css                       */import"./index.vue_vue_type_style_index_0_lang-b4429e25.js";/* empty css                  *//* empty css                   */import"./attachment-eff12253.js";import"./index.vue_vue_type_script_setup_true_lang-5136f203.js";/* empty css                        *//* empty css               *//* empty css                  *//* empty css                  *//* empty css                     *//* empty css                  *//* empty css                      *//* empty css                    */import"./el-tooltip-4ed993c7.js";/* empty css                 *//* empty css               *//* empty css               *//* empty css                    *//* empty css                    */import"./el-dropdown-item-4ed993c7.js";import"./index.vue_vue_type_script_setup_true_lang-7edbe634.js";/* empty css                   */import"./index.vue_vue_type_script_setup_true_lang-3cb6d3b1.js";import"./_plugin-vue_export-helper-c27b6911.js";const X={class:"main-container"},Z={class:"fixed-footer-wrap"},ee={class:"fixed-footer"},Ie=N({__name:"agreement_edit",setup(te){const d=P(),x=S(),u=d.query.key||"",s=y(!1),E=q(),B=d.meta.title,_={agreement_key:"",content:"",title:"",agreement_key_name:""},t=I({..._});s.value=!0,u&&(async(m="")=>{Object.assign(t,_);const e=await(await L(m)).data;Object.keys(t).forEach(r=>{e[r]!=null&&(t[r]=e[r])}),s.value=!1})(u);const f=y(),D=M(()=>({title:[{required:!0,message:i("titlePlaceholder"),trigger:"blur"}]})),R=async m=>{s.value||!m||await m.validate(async e=>{if(e){s.value=!0;const r=t;r.key=t.agreement_key,O(r).then(p=>{s.value=!1,g()}).catch(()=>{s.value=!1})}})},g=()=>{E.removeTab(d.path),x.push({path:"/setting/agreement"})};return(m,e)=>{const r=H,p=K,v=Q,c=Y,C=W,F=z,b=G,$=J;return k(),T("div",X,[o(p,{class:"card !border-none",shadow:"never"},{default:l(()=>[o(r,{content:a(B),icon:a(U),onBack:e[0]||(e[0]=n=>m.$router.back())},null,8,["content","icon"])]),_:1}),j((k(),A(p,{class:"box-card mt-[15px] !border-none",shadow:"never"},{default:l(()=>[o(F,{model:t,"label-width":"90px",ref_key:"formRef",ref:f,rules:a(D),class:"page-form"},{default:l(()=>[o(c,{label:a(i)("type")},{default:l(()=>[o(v,{modelValue:t.agreement_key_name,"onUpdate:modelValue":e[1]||(e[1]=n=>t.agreement_key_name=n),modelModifiers:{trim:!0},readonly:"",class:"input-width"},null,8,["modelValue"])]),_:1},8,["label"]),o(c,{label:a(i)("title"),prop:"title"},{default:l(()=>[o(v,{modelValue:t.title,"onUpdate:modelValue":e[2]||(e[2]=n=>t.title=n),modelModifiers:{trim:!0},clearable:"",placeholder:a(i)("titlePlaceholder"),class:"input-width",maxlength:"20"},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),o(c,{label:a(i)("content")},{default:l(()=>[o(C,{modelValue:t.content,"onUpdate:modelValue":e[3]||(e[3]=n=>t.content=n)},null,8,["modelValue"])]),_:1},8,["label"])]),_:1},8,["model","rules"])]),_:1})),[[$,s.value]]),w("div",Z,[w("div",ee,[o(b,{type:"primary",onClick:e[4]||(e[4]=n=>R(f.value))},{default:l(()=>[h(V(a(i)("save")),1)]),_:1}),o(b,{onClick:e[5]||(e[5]=n=>g())},{default:l(()=>[h(V(a(i)("cancel")),1)]),_:1})])])])}}});export{Ie as default};