import{d as S,r as w,D as C,d9 as D,da as E,l as c,h as U,c as T,e as n,w as f,a as s,t as _,u as a,q as i,br as p,aS as j,bv as B,V as $,cU as N,db as x,G as q}from"./index-5a756a51.js";/* empty css                  *//* empty css                   *//* empty css                     *//* empty css                        *//* empty css                 *//* empty css                  *//* empty css                  */import{_ as z}from"./index.vue_vue_type_script_setup_true_lang-75313763.js";import{_ as G}from"./_plugin-vue_export-helper-c27b6911.js";const I={class:"flex"},M={class:"setting-item flex items-center justify-between mb-[10px]"},P={class:"title text-base text-tx-secondary"},R={class:"setting-item flex items-center justify-between mb-[10px]"},A={class:"title text-base text-tx-secondary"},F={class:"setting-item flex items-center justify-between mb-[10px]"},H={class:"title text-base text-tx-secondary"},J=S({__name:"layout-setting",setup(K){const r=w(!1),t=C(),g=D(),y=E(g),d=c({get(){return t.dark},set(l){t.setTheme("dark",l),y(l),x(t.theme,t.dark?"dark":"light")}}),u=c({get(){return t.tab},set(l){t.$patch(e=>{e.tab=l,q.set({key:"tab",data:l})})}}),m=c({get(){return t.theme},set(l){t.setTheme("theme",l),x(t.theme,t.dark?"dark":"light")}});return(l,e)=>{const b=z,v=j,k=B,V=$,h=N;return U(),T("div",I,[n(b,{name:"element Setting",onClick:e[0]||(e[0]=o=>r.value=!0)}),n(h,{modelValue:r.value,"onUpdate:modelValue":e[4]||(e[4]=o=>r.value=o),title:a(i)("layout.layoutSetting"),size:"300px"},{default:f(()=>[n(V,null,{default:f(()=>[s("div",M,[s("div",P,_(a(i)("layout.darkMode")),1),s("div",null,[n(v,{modelValue:a(d),"onUpdate:modelValue":e[1]||(e[1]=o=>p(d)?d.value=o:null),"active-value":!0,"inactive-value":!1},null,8,["modelValue"])])]),s("div",R,[s("div",A,_(a(i)("layout.themeColor")),1),s("div",null,[n(k,{modelValue:a(m),"onUpdate:modelValue":e[2]||(e[2]=o=>p(m)?m.value=o:null)},null,8,["modelValue"])])]),s("div",F,[s("div",H,_(a(i)("layout.tab")),1),s("div",null,[n(v,{modelValue:a(u),"onUpdate:modelValue":e[3]||(e[3]=o=>p(u)?u.value=o:null),"active-value":!0,"inactive-value":!1},null,8,["modelValue"])])])]),_:1})]),_:1},8,["modelValue","title"])])}}});const le=G(J,[["__scopeId","data-v-c1d14314"]]);export{le as default};
