import{d as j,c0 as F,j as $,r as v,G as a,l as z,h as s,s as w,w as n,a as t,e as r,c as m,T as x,i as h,t as l,u as p,F as g,R as C,b6 as S,q as u,v as V,d5 as H,d6 as M,E as q,X as A,z as G,x as O}from"./index-6ea097a6.js";/* empty css                  *//* empty css                   *//* empty css                  *//* empty css                           */import{_ as X}from"./index.vue_vue_type_script_setup_true_lang-3cb6d3b1.js";import J from"./user-info-974272bd.js";import K from"./layout-setting-439eda95.js";import{_ as P}from"./_plugin-vue_export-helper-c27b6911.js";/* empty css                     *//* empty css                 *//* empty css                    *//* empty css                  *//* empty css                     */import"./el-dropdown-item-4ed993c7.js";/* empty css                  */import"./personal-199ec8ff.js";import"./index.vue_vue_type_script_setup_true_lang-7658cbf5.js";import"./index-a6a5e859.js";/* empty css                        */import"./index.vue_vue_type_style_index_0_lang-b4429e25.js";import"./attachment-eff12253.js";/* empty css                   */import"./index.vue_vue_type_script_setup_true_lang-5136f203.js";/* empty css               *//* empty css                  *//* empty css                  *//* empty css                      *//* empty css                    */import"./el-tooltip-4ed993c7.js";/* empty css                 *//* empty css               *//* empty css               *//* empty css                    */import"./index.vue_vue_type_script_setup_true_lang-7edbe634.js";/* empty css                   */import"./sortable.esm-be94e56d.js";/* empty css                        *//* empty css                  *//* empty css                        *//* empty css                  */const Q={class:"left-panel flex items-center text-[14px] leading-[1]"},W={class:"flex items-center h-full pl-[10px] hidden-xs-only"},Y={class:"right-panel h-full flex items-center justify-end"},Z={class:"navbar-item flex items-center h-full cursor-pointer"},ee={class:"navbar-item flex items-center h-full cursor-pointer"},te={class:"dialog-footer"},oe={class:"flex flex-wrap"},ie=["onClick"],ne=["onClick"],re={class:"dialog-footer"},ae=j({__name:"index",setup(se){const L=O(),y=F();$();const c=v(!1),f=v(""),_=v("");a.get("comparisonTokenStorage")&&(f.value=a.get("comparisonTokenStorage")),a.get("comparisonSiteIdStorage")&&(_.value=a.get("comparisonSiteIdStorage")),document.addEventListener("visibilitychange",o=>{document.visibilityState==="visible"&&(_.value!=a.get("siteId")||f.value!=a.get("token"))&&(c.value=!0)});const E=()=>{c.value=!1,location.reload()},I=()=>{y.routeRefreshTag&&y.refreshRouterView()},B=z(()=>{const o=L.matched.filter(i=>i.meta.title);return o[0]&&o[0].path=="/"&&o.splice(0,1),o});return a.set({key:"currHeadMenuName",data:""}),(o,i)=>{const T=X,D=H,R=M,k=q,b=A,U=G;return s(),w(U,{class:"h-[64px] layout-admin flex items-center justify-between px-[15px]"},{default:n(()=>[t("div",Q,[t("div",{class:"navbar-item flex items-center h-full cursor-pointer",onClick:I},[r(T,{name:"element Refresh"})]),t("div",W,[r(R,{separator:"/"},{default:n(()=>[(s(!0),m(g,null,x(p(B),(e,d)=>(s(),w(D,{key:d},{default:n(()=>[h(l(e.meta.title),1)]),_:2},1024))),128))]),_:1})])]),t("div",Y,[t("div",Z,[r(K)]),t("div",ee,[r(J)])]),C(t("input",{type:"hidden","onUpdate:modelValue":i[0]||(i[0]=e=>f.value=e)},null,512),[[S,f.value]]),C(t("input",{type:"hidden","onUpdate:modelValue":i[1]||(i[1]=e=>_.value=e)},null,512),[[S,_.value]]),r(b,{modelValue:c.value,"onUpdate:modelValue":i[2]||(i[2]=e=>c.value=e),title:p(u)("layout.detectionLoginTip"),width:"30%","close-on-click-modal":!1,"close-on-press-escape":!1,"show-close":!1},{footer:n(()=>[t("span",te,[r(k,{onClick:E},{default:n(()=>[h(l(p(u)("layout.detectionLoginOperation")),1)]),_:1})])]),default:n(()=>[t("span",null,l(p(u)("layout.detectionLoginContent")),1)]),_:1},8,["modelValue","title"]),r(b,{modelValue:o.showDialog,"onUpdate:modelValue":i[3]||(i[3]=e=>o.showDialog=e),title:p(u)("indexTemplate"),width:"550px","destroy-on-close":!0},{footer:n(()=>[t("span",re,[r(k,{type:"primary",onClick:o.submitIndex},{default:n(()=>[h(l(p(u)("confirm")),1)]),_:1},8,["onClick"])])]),default:n(()=>[t("div",oe,[o.index_path==""?(s(!0),m(g,{key:0},x(o.indexList,(e,d)=>(s(),m("div",{key:d},[t("div",{onClick:N=>o.index_path=e.view_path,class:V(["index-item py-[5px] px-[10px] mr-[10px] rounded-[3px] cursor-pointer",e.is_use==1?"bg-primary text-[#fff]":""])},[t("span",null,l(e.name),1)],10,ie)]))),128)):(s(!0),m(g,{key:1},x(o.indexList,(e,d)=>(s(),m("div",{key:d},[t("div",{onClick:N=>o.index_path=e.view_path,class:V(["index-item py-[5px] px-[10px] mr-[10px] rounded-[3px] cursor-pointer",o.index_path==e.view_path?"bg-primary text-[#fff]":""])},[t("span",null,l(e.name),1)],10,ne)]))),128))])]),_:1},8,["modelValue","title"])]),_:1})}}});const Pe=P(ae,[["__scopeId","data-v-f083a763"]]);export{Pe as default};