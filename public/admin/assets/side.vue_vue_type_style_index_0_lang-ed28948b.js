import{d as B,D as N,j as R,r as D,l as F,bV as f,h as c,s as h,w as t,e as o,u as n,c as p,A as m,i as T,t as M,B as x,T as $,F as q,a as z,x as A,J as H,aa as J,bE as L,da as O,V as U,N as G,z as K}from"./index-99f00cf3.js";/* empty css                     *//* empty css                */import"./el-tooltip-4ed993c7.js";/* empty css                  *//* empty css                 *//* empty css                        */import{_ as P}from"./menu-item.vue_vue_type_style_index_0_lang-88a34075.js";const Q={key:0,class:"flex justify-center items-center h-[64px] w-full px-[10px]"},W={key:0,class:"flex-1 w-0 overflow-text truncate ml-[10px] text-white"},X=z("div",{class:"h-[48px]"},null,-1),le=B({__name:"side",setup(Y){const d=N(),_=R(),g=A(),s=_.siteInfo,v=_.routers,y=_.addonIndexRoute,l=D([]),u={},r=F(()=>d.website);if(v.forEach(e=>{e.original_name=e.name,e.meta.addon==""?(e.children&&e.children.length&&(e.name=f(e.children)),l.value.push(e)):e.meta.addon!=""&&(s==null?void 0:s.apps.length)==1&&(s==null?void 0:s.apps[0].key)==e.meta.addon?e.children?(e.children.forEach(a=>{a.original_name=a.name,a.children&&a.children.length&&(a.name=f(a.children))}),l.value.unshift(...e.children)):l.value.unshift(e):u[e.meta.addon]=e}),(s==null?void 0:s.apps.length)>1){const e=[];s==null||s.apps.forEach(a=>{u[a.key]&&(u[a.key].name=y[a.key],e.push(u[a.key]))}),l.value.unshift(...e)}return(e,a)=>{const k=H,w=J,E=L,b=O,S=U,V=G,C=K;return c(),h(C,{class:"h-screen flex flex-col"},{default:t(()=>[o(V,{class:"menu-wrap"},{default:t(()=>[o(E,{class:"logo-wrap flex items-center justify-center h-[64px] w-[var(--aside-width)]"},{default:t(()=>[Object.keys(n(r)).length?(c(),p("div",Q,[o(k,{src:n(m)(n(r).icon),class:"w-[44px] h-[44px] rounded-[50%]",onError:a[0]||(a[0]=i=>n(r).icon=n(m)("static/resource/images/niucloud_icon.jpg"))},null,8,["src"]),n(d).menuIsCollapse?x("",!0):(c(),p("div",W,[o(w,{effect:"dark",content:n(r).site_name,placement:"top"},{default:t(()=>[T(M(n(r).site_name),1)]),_:1},8,["content"])]))])):x("",!0)]),_:1}),o(S,{class:"menu-scrollbar flex-1 h-0"},{default:t(()=>[o(b,{"default-active":n(g).name,router:!0,"unique-opened":!1,collapse:n(d).menuIsCollapse,"background-color":"#1f2531","text-color":"#fff","active-text-color":"#fff"},{default:t(()=>[(c(!0),p(q,null,$(l.value,(i,j)=>(c(),h(P,{routes:i,key:j},null,8,["routes"]))),128))]),_:1},8,["default-active","collapse"]),X]),_:1})]),_:1})]),_:1})}}});export{le as _};
