import{d as V,r as S,D as w,d9 as C,da as D,l as m,h as E,c as T,e as l,w as _,a,t as p,u as n,q as u,br as f,aS as U,bv as B,V as j,cU as N,db as c}from"./index-5a756a51.js";/* empty css                  *//* empty css                   *//* empty css                     *//* empty css                        *//* empty css                 *//* empty css                  *//* empty css                  */import{_ as $}from"./index.vue_vue_type_script_setup_true_lang-75313763.js";import{_ as q}from"./_plugin-vue_export-helper-c27b6911.js";const z={class:"flex"},I={class:"setting-item flex items-center justify-between mb-[10px]"},M={class:"title text-base text-tx-secondary"},P={class:"setting-item flex items-center justify-between mb-[10px]"},R={class:"title text-base text-tx-secondary"},A=V({__name:"layout-setting",setup(F){const r=S(!1),e=w(),v=C(),g=D(v),i=m({get(){return e.dark},set(s){e.setTheme("dark",s),g(s),c(e.theme,e.dark?"dark":"light")}});m({get(){return e.sidebar},set(s){e.setTheme("sidebar",s),c(e.theme,e.dark?"dark":"light")}});const d=m({get(){return e.theme},set(s){e.setTheme("theme",s),c(e.theme,e.dark?"dark":"light")}});return(s,t)=>{const k=$,x=U,h=B,y=j,b=N;return E(),T("div",z,[l(k,{name:"element Setting",onClick:t[0]||(t[0]=o=>r.value=!0)}),l(b,{modelValue:r.value,"onUpdate:modelValue":t[3]||(t[3]=o=>r.value=o),title:n(u)("layout.layoutSetting"),size:"300px"},{default:_(()=>[l(y,null,{default:_(()=>[a("div",I,[a("div",M,p(n(u)("layout.darkMode")),1),a("div",null,[l(x,{modelValue:n(i),"onUpdate:modelValue":t[1]||(t[1]=o=>f(i)?i.value=o:null),"active-value":!0,"inactive-value":!1},null,8,["modelValue"])])]),a("div",P,[a("div",R,p(n(u)("layout.themeColor")),1),a("div",null,[l(h,{modelValue:n(d),"onUpdate:modelValue":t[2]||(t[2]=o=>f(d)?d.value=o:null)},null,8,["modelValue"])])])]),_:1})]),_:1},8,["modelValue","title"])])}}});const Z=q(A,[["__scopeId","data-v-0b835080"]]);export{Z as default};
