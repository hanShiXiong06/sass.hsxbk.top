import{d as q,G as a,dc as $,D as A,bZ as G,r as d,l as v,aJ as H,h as u,s as g,w as t,e as o,a as e,c as x,T as J,i as b,t as _,u as r,F as O,q as l,B as P,R as y,b6 as w,v as X,d3 as Z,d4 as K,aM as Q,aN as Y,E as ee,X as te,z as oe,x as ne,f as ie}from"./index-5a756a51.js";/* empty css                  *//* empty css                   *//* empty css                  *//* empty css               *//* empty css               *//* empty css                           */import{_ as re}from"./index.vue_vue_type_script_setup_true_lang-75313763.js";import se from"./layout-setting-ff1bd778.js";import ae from"./user-info-fcffd73a.js";import{_ as le}from"./_plugin-vue_export-helper-c27b6911.js";/* empty css                  *//* empty css                     *//* empty css                        *//* empty css                 *//* empty css                  *//* empty css                */import"./el-form-item-4ed993c7.js";/* empty css                    *//* empty css                  */import"./el-dropdown-item-4ed993c7.js";/* empty css                  */import"./personal-e4d84ee0.js";import"./index.vue_vue_type_script_setup_true_lang-649bb1ea.js";import"./index-92c2e799.js";/* empty css                        */import"./index.vue_vue_type_style_index_0_lang-c0b4b1fc.js";import"./attachment-a9811edd.js";/* empty css                   */import"./index.vue_vue_type_script_setup_true_lang-cb419dfd.js";/* empty css               *//* empty css                  *//* empty css                  *//* empty css                      *//* empty css                    */import"./el-tooltip-4ed993c7.js";/* empty css                 *//* empty css                    */import"./index.vue_vue_type_script_setup_true_lang-477c25f7.js";/* empty css                   */import"./sortable.esm-be94e56d.js";/* empty css                        */const ce={class:"left-panel h-full flex items-center"},pe={class:"flex items-center h-full pl-[10px] hidden-xs-only"},me={class:"right-panel h-full flex items-center justify-end"},de=["title"],ue=["title"],_e={class:"navbar-item flex items-center h-full cursor-pointer"},fe={class:"navbar-item flex items-center h-full cursor-pointer"},he={class:"dialog-footer"},ve=q({__name:"index",setup(ge){const k=a.get("app_type");$();const S=A(),f=G(),E=ne(),C=ie(),V=d(window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth),T=v(()=>S.dark),c=d(!1),p=d(""),m=d("");a.get("comparisonTokenStorage")&&(p.value=a.get("comparisonTokenStorage")),a.get("comparisonSiteIdStorage")&&(m.value=a.get("comparisonSiteIdStorage")),document.addEventListener("visibilitychange",n=>{document.visibilityState==="visible"&&(m.value!=a.get("siteId")||p.value!=a.get("token"))&&(c.value=!0)});const B=()=>{c.value=!1,location.href=`${location.origin}/site/`};H(()=>{window.onresize=()=>(()=>{V.value=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth})()});const I=()=>{f.routeRefreshTag&&f.refreshRouterView()},R=v(()=>{const n=E.matched.filter(i=>i.meta.title);return n[0]&&n[0].path=="/"&&n.splice(0,1),n}),W=()=>{const n=C.resolve({path:"/preview/wap",query:{page:"/"}});window.open(n.href)};return(n,i)=>{const L=re,D=Z,N=K,h=Q,F=Y,z=ee,M=te,U=oe;return u(),g(U,{class:X(["h-full px-[10px]",{"layout-header border-b border-color":!r(T)}])},{default:t(()=>[o(F,{class:"w-100 h-full w-full"},{default:t(()=>[o(h,{span:12},{default:t(()=>[e("div",ce,[e("div",{class:"navbar-item flex items-center h-full cursor-pointer",onClick:I},[o(L,{name:"element Refresh"})]),e("div",pe,[o(N,{separator:"/"},{default:t(()=>[(u(!0),x(O,null,J(r(R),(s,j)=>(u(),g(D,{key:j},{default:t(()=>[b(_(s.meta.title),1)]),_:2},1024))),128))]),_:1})])])]),_:1}),o(h,{span:12},{default:t(()=>[e("div",me,[e("i",{class:"iconfont iconicon_huojian1 cursor-pointer px-[8px]",title:r(l)("visitWap"),onClick:W},null,8,de),r(k)=="site"?(u(),x("i",{key:0,class:"iconfont iconlingdang-xianxing cursor-pointer px-[8px]",title:r(l)("newInfo")},null,8,ue)):P("",!0),e("div",_e,[o(se)]),e("div",fe,[o(ae)])])]),_:1})]),_:1}),y(e("input",{type:"hidden","onUpdate:modelValue":i[0]||(i[0]=s=>p.value=s)},null,512),[[w,p.value]]),y(e("input",{type:"hidden","onUpdate:modelValue":i[1]||(i[1]=s=>m.value=s)},null,512),[[w,m.value]]),o(M,{modelValue:c.value,"onUpdate:modelValue":i[2]||(i[2]=s=>c.value=s),title:r(l)("layout.detectionLoginTip"),width:"30%","close-on-click-modal":!1,"close-on-press-escape":!1,"show-close":!1},{footer:t(()=>[e("span",he,[o(z,{onClick:B},{default:t(()=>[b(_(r(l)("layout.detectionLoginOperation")),1)]),_:1})])]),default:t(()=>[e("span",null,_(r(l)("layout.detectionLoginContent")),1)]),_:1},8,["modelValue","title"])]),_:1},8,["class"])}}});const at=le(ve,[["__scopeId","data-v-8fb3713a"]]);export{at as default};