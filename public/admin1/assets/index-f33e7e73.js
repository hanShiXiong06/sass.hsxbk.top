import{d as j,bY as F,j as $,r as v,G as r,l as z,h as s,s as w,w as n,a as o,e as a,c as m,Q as x,i as h,t as l,u as p,F as g,P as S,b4 as C,q as u,v as V,d1 as H,d2 as M,E as q,a1 as A,z as G,x as O,f as P}from"./index-17984968.js";/* empty css                  *//* empty css                   *//* empty css                  *//* empty css                           */import{_ as Q}from"./index.vue_vue_type_script_setup_true_lang-8e50df98.js";import Y from"./user-info-7748a4d1.js";import{_ as J}from"./_plugin-vue_export-helper-c27b6911.js";/* empty css                *//* empty css                */import"./el-form-item-4ed993c7.js";/* empty css                 *//* empty css                         *//* empty css                  *//* empty css                     *//* empty css                  */import"./personal-6c8df3b2.js";import"./index.vue_vue_type_script_setup_true_lang-c9e0833c.js";import"./index-0ce1f7fc.js";/* empty css                        */import"./index.vue_vue_type_style_index_0_lang-c5bcb8a9.js";import"./attachment-a816d3ef.js";/* empty css                   */import"./index.vue_vue_type_script_setup_true_lang-8693344a.js";/* empty css               *//* empty css                  *//* empty css                  *//* empty css                      *//* empty css                    *//* empty css                 */import"./el-tooltip-4ed993c7.js";/* empty css                 *//* empty css               *//* empty css               *//* empty css                    */import"./index.vue_vue_type_script_setup_true_lang-5615c67a.js";/* empty css                   */import"./sortable.esm-be94e56d.js";/* empty css                        */const K={class:"left-panel flex items-center text-[14px] leading-[1]"},W={class:"flex items-center h-full pl-[10px] hidden-xs-only"},X={class:"right-panel h-full flex items-center justify-end"},Z={class:"navbar-item flex items-center h-full cursor-pointer"},ee={class:"dialog-footer"},te={class:"flex flex-wrap"},oe=["onClick"],ie=["onClick"],ne={class:"dialog-footer"},re=j({__name:"index",setup(se){const L=O();P();const y=F();$().routers;const c=v(!1),_=v(""),f=v("");r.get("comparisonTokenStorage")&&(_.value=r.get("comparisonTokenStorage")),r.get("comparisonSiteIdStorage")&&(f.value=r.get("comparisonSiteIdStorage")),document.addEventListener("visibilitychange",t=>{document.visibilityState==="visible"&&(f.value!=r.get("siteId")||_.value!=r.get("token"))&&(c.value=!0)});const E=()=>{c.value=!1,location.reload()},I=()=>{y.routeRefreshTag&&y.refreshRouterView()},B=z(()=>{const t=L.matched.filter(i=>i.meta.title);return t[0]&&t[0].path=="/"&&t.splice(0,1),t});return r.set({key:"currHeadMenuName",data:""}),(t,i)=>{const D=Q,R=H,T=M,k=q,b=A,U=G;return s(),w(U,{class:"h-[64px] layout-admin flex items-center justify-between px-[15px]"},{default:n(()=>[o("div",K,[o("div",{class:"navbar-item flex items-center h-full cursor-pointer",onClick:I},[a(D,{name:"element-Refresh"})]),o("div",W,[a(T,{separator:"/"},{default:n(()=>[(s(!0),m(g,null,x(p(B),(e,d)=>(s(),w(R,{key:d},{default:n(()=>[h(l(e.meta.title),1)]),_:2},1024))),128))]),_:1})])]),o("div",X,[o("div",Z,[a(Y)])]),S(o("input",{type:"hidden","onUpdate:modelValue":i[0]||(i[0]=e=>_.value=e)},null,512),[[C,_.value]]),S(o("input",{type:"hidden","onUpdate:modelValue":i[1]||(i[1]=e=>f.value=e)},null,512),[[C,f.value]]),a(b,{modelValue:c.value,"onUpdate:modelValue":i[2]||(i[2]=e=>c.value=e),title:p(u)("layout.detectionLoginTip"),width:"30%","close-on-click-modal":!1,"close-on-press-escape":!1,"show-close":!1},{footer:n(()=>[o("span",ee,[a(k,{onClick:E},{default:n(()=>[h(l(p(u)("layout.detectionLoginOperation")),1)]),_:1})])]),default:n(()=>[o("span",null,l(p(u)("layout.detectionLoginContent")),1)]),_:1},8,["modelValue","title"]),a(b,{modelValue:t.showDialog,"onUpdate:modelValue":i[3]||(i[3]=e=>t.showDialog=e),title:p(u)("indexTemplate"),width:"550px","destroy-on-close":!0},{footer:n(()=>[o("span",ne,[a(k,{type:"primary",onClick:t.submitIndex},{default:n(()=>[h(l(p(u)("confirm")),1)]),_:1},8,["onClick"])])]),default:n(()=>[o("div",te,[t.index_path==""?(s(!0),m(g,{key:0},x(t.indexList,(e,d)=>(s(),m("div",{key:d},[o("div",{onClick:N=>t.index_path=e.view_path,class:V(["index-item py-[5px] px-[10px] mr-[10px] rounded-[3px] cursor-pointer",e.is_use==1?"bg-primary text-[#fff]":""])},[o("span",null,l(e.name),1)],10,oe)]))),128)):(s(!0),m(g,{key:1},x(t.indexList,(e,d)=>(s(),m("div",{key:d},[o("div",{onClick:N=>t.index_path=e.view_path,class:V(["index-item py-[5px] px-[10px] mr-[10px] rounded-[3px] cursor-pointer",t.index_path==e.view_path?"bg-primary text-[#fff]":""])},[o("span",null,l(e.name),1)],10,ie)]))),128))])]),_:1},8,["modelValue","title"])]),_:1})}}});const Qe=J(re,[["__scopeId","data-v-f810207e"]]);export{Qe as default};
