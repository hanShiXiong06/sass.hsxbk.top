import{d as q,G as a,de as A,D as G,c0 as H,r as _,l as w,aJ as J,h as l,s as f,w as o,e as n,a as e,u as i,c as b,T as O,i as k,t as v,F as P,q as p,B as X,R as C,b6 as S,v as K,d3 as Q,d4 as Y,aM as Z,aN as ee,E as te,X as oe,z as ne,x as ie,f as se}from"./index-f7a01263.js";/* empty css                  *//* empty css                   *//* empty css                  *//* empty css               *//* empty css               *//* empty css                           */import{_ as re}from"./index.vue_vue_type_script_setup_true_lang-73e73d1c.js";import ae from"./layout-setting-d8bd84e0.js";import le from"./user-info-ce88ec79.js";import{_ as ce}from"./_plugin-vue_export-helper-c27b6911.js";/* empty css                  *//* empty css                     *//* empty css                        *//* empty css                 *//* empty css                  *//* empty css                     *//* empty css                    *//* empty css                  */import"./el-dropdown-item-4ed993c7.js";/* empty css                  */import"./personal-d01240e9.js";import"./index.vue_vue_type_script_setup_true_lang-e25bb7ae.js";import"./index-e6c6f5a6.js";/* empty css                        */import"./index.vue_vue_type_style_index_0_lang-0595c85c.js";import"./attachment-893e498c.js";/* empty css                   */import"./index.vue_vue_type_script_setup_true_lang-473c7dda.js";/* empty css               *//* empty css                  *//* empty css                  *//* empty css                      *//* empty css                    */import"./el-tooltip-4ed993c7.js";/* empty css                 *//* empty css                    */import"./index.vue_vue_type_script_setup_true_lang-a36ce1b6.js";/* empty css                   */import"./sortable.esm-be94e56d.js";/* empty css                        */const pe={class:"left-panel h-full flex items-center"},me={class:"flex items-center h-full pl-[10px]"},ue={class:"right-panel h-full flex items-center justify-end"},de=["title"],_e=["title"],fe={class:"navbar-item flex items-center h-full cursor-pointer"},he={class:"navbar-item flex items-center h-full cursor-pointer"},ve={class:"dialog-footer"},ge=q({__name:"index",setup(xe){const E=a.get("app_type");A();const c=G(),g=H(),I=ie(),V=se(),x=_(window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth),T=w(()=>c.dark),m=_(!1),u=_(""),d=_("");a.get("comparisonTokenStorage")&&(u.value=a.get("comparisonTokenStorage")),a.get("comparisonSiteIdStorage")&&(d.value=a.get("comparisonSiteIdStorage")),document.addEventListener("visibilitychange",t=>{document.visibilityState==="visible"&&(d.value!=a.get("siteId")||u.value!=a.get("token"))&&(m.value=!0)});const B=()=>{m.value=!1,location.href=`${location.origin}/site/`};J(()=>{window.onresize=()=>(()=>{x.value=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth})()});const R=()=>{c.$patch(t=>{x.value<768?(t.menuDrawer=!0,t.menuIsCollapse=!1):c.toggleMenuCollapse(!c.menuIsCollapse)})},W=()=>{g.routeRefreshTag&&g.refreshRouterView()},L=w(()=>{const t=I.matched.filter(s=>s.meta.title);return t[0]&&t[0].path=="/"&&t.splice(0,1),t}),D=()=>{const t=V.resolve({path:"/preview/wap",query:{page:"/"}});window.open(t.href)};return(t,s)=>{const h=re,F=Q,M=Y,y=Z,N=ee,z=te,U=oe,$=ne;return l(),f($,{class:K(["h-full px-[10px]",{"layout-header border-b border-color":!i(T)}])},{default:o(()=>[n(N,{class:"w-100 h-full w-full"},{default:o(()=>[n(y,{span:12},{default:o(()=>[e("div",pe,[e("div",{class:"hidden-sm-and-up navbar-item flex items-center h-full cursor-pointer",onClick:R},[i(c).menuIsCollapse?(l(),f(h,{key:0,name:"element Expand"})):(l(),f(h,{key:1,name:"element Fold"}))]),e("div",{class:"navbar-item flex items-center h-full cursor-pointer",onClick:W},[n(h,{name:"element Refresh"})]),e("div",me,[n(M,{separator:"/"},{default:o(()=>[(l(!0),b(P,null,O(i(L),(r,j)=>(l(),f(F,{key:j},{default:o(()=>[k(v(r.meta.title),1)]),_:2},1024))),128))]),_:1})])])]),_:1}),n(y,{span:12},{default:o(()=>[e("div",ue,[e("i",{class:"iconfont iconicon_huojian1 cursor-pointer px-[8px]",title:i(p)("visitWap"),onClick:D},null,8,de),i(E)=="site"?(l(),b("i",{key:0,class:"iconfont iconlingdang-xianxing cursor-pointer px-[8px]",title:i(p)("newInfo")},null,8,_e)):X("",!0),e("div",fe,[n(ae)]),e("div",he,[n(le)])])]),_:1})]),_:1}),C(e("input",{type:"hidden","onUpdate:modelValue":s[0]||(s[0]=r=>u.value=r)},null,512),[[S,u.value]]),C(e("input",{type:"hidden","onUpdate:modelValue":s[1]||(s[1]=r=>d.value=r)},null,512),[[S,d.value]]),n(U,{modelValue:m.value,"onUpdate:modelValue":s[2]||(s[2]=r=>m.value=r),title:i(p)("layout.detectionLoginTip"),width:"30%","close-on-click-modal":!1,"close-on-press-escape":!1,"show-close":!1},{footer:o(()=>[e("span",ve,[n(z,{onClick:B},{default:o(()=>[k(v(i(p)("layout.detectionLoginOperation")),1)]),_:1})])]),default:o(()=>[e("span",null,v(i(p)("layout.detectionLoginContent")),1)]),_:1},8,["modelValue","title"])]),_:1},8,["class"])}}});const at=ce(ge,[["__scopeId","data-v-6a73c2dd"]]);export{at as default};
