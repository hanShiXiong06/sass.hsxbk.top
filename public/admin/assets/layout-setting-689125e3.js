import{d as S,r as w,D as C,da as D,db as E,l as c,h as U,c as T,e as n,w as f,a as s,t as _,u as o,q as i,br as p,aS as j,bv as B,V as $,cU as N,dc as x,G as q}from"./index-6f32d09b.js";/* empty css                  *//* empty css                   *//* empty css                     *//* empty css                        *//* empty css                 *//* empty css                  *//* empty css                  */import{_ as z}from"./index.vue_vue_type_script_setup_true_lang-0724e2f9.js";import{_ as G}from"./_plugin-vue_export-helper-c27b6911.js";const I={class:"flex"},M={class:"setting-item flex items-center justify-between mb-[10px]"},P={class:"title text-base text-tx-secondary"},R={class:"setting-item flex items-center justify-between mb-[10px]"},A={class:"title text-base text-tx-secondary"},F={class:"setting-item flex items-center justify-between mb-[10px]"},H={class:"title text-base text-tx-secondary"},J=S({__name:"layout-setting",setup(K){const r=w(!1),t=C(),g=D(),y=E(g),d=c({get(){return t.dark},set(a){t.setTheme("dark",a),y(a),x(t.theme,t.dark?"dark":"light")}}),u=c({get(){return t.tab},set(a){t.$patch(e=>{e.tab=a,q.set({key:"tab",data:a})})}}),m=c({get(){return t.theme},set(a){t.setTheme("theme",a),x(t.theme,t.dark?"dark":"light")}});return(a,e)=>{const b=z,v=j,k=B,V=$,h=N;return U(),T("div",I,[n(b,{name:"element Setting",onClick:e[0]||(e[0]=l=>r.value=!0)}),n(h,{modelValue:r.value,"onUpdate:modelValue":e[4]||(e[4]=l=>r.value=l),title:o(i)("layout.layoutSetting"),size:"300px"},{default:f(()=>[n(V,null,{default:f(()=>[s("div",M,[s("div",P,_(o(i)("layout.darkMode")),1),s("div",null,[n(v,{modelValue:o(d),"onUpdate:modelValue":e[1]||(e[1]=l=>p(d)?d.value=l:null),"active-value":!0,"inactive-value":!1},null,8,["modelValue"])])]),s("div",R,[s("div",A,_(o(i)("layout.themeColor")),1),s("div",null,[n(k,{modelValue:o(m),"onUpdate:modelValue":e[2]||(e[2]=l=>p(m)?m.value=l:null)},null,8,["modelValue"])])]),s("div",F,[s("div",H,_(o(i)("layout.tab")),1),s("div",null,[n(v,{modelValue:o(u),"onUpdate:modelValue":e[3]||(e[3]=l=>p(u)?u.value=l:null),"active-value":!0,"inactive-value":!1},null,8,["modelValue"])])])]),_:1})]),_:1},8,["modelValue","title"])])}}});const ae=G(J,[["__scopeId","data-v-62ca2f34"]]);export{ae as default};
