import{d as C,D as R,j as B,r as D,l as F,a7 as p,h as l,s as h,w as o,e as r,u as c,c as _,A as M,Q as V,F as I,a as d,x as N,I as U,bD as q,d3 as z,S as A,M as H,z as L}from"./index-17984968.js";/* empty css                     *//* empty css                */import"./el-tooltip-4ed993c7.js";/* empty css                  *//* empty css                 *//* empty css                        */import{_ as Q}from"./icon-addon-339e16d0.js";import{_ as $}from"./menu-item.vue_vue_type_style_index_0_lang-cfceef41.js";const G={key:0,class:"logo flex items-center m-auto h-[64px]"},J=d("div",{class:"flex justify-center items-center w-full h-[40px]"},[d("img",{class:"max-w-[40px]",src:Q,alt:"","object-fit":"contain"})],-1),K={key:1,class:"logo flex items-center justify-center h-[64px]"},O=d("i",{class:"text-3xl iconfont iconyunkongjian"},null,-1),P=[O],T=d("div",{class:"h-[48px]"},null,-1),le=C({__name:"side",setup(W){const i=R(),a=B(),f=N(),s=a.siteInfo,m=a.routers,x=a.addonIndexRoute,t=D([]),u={},g=F(()=>a.siteInfo.icon?a.siteInfo.icon:i.website.icon);if(m.forEach(e=>{e.original_name=e.name,e.meta.addon==""?(e.children&&e.children.length&&(e.name=p(e.children)),t.value.push(e)):e.meta.addon!=""&&(s==null?void 0:s.apps.length)==1&&(s==null?void 0:s.apps[0].key)==e.meta.addon?e.children?(e.children.forEach(n=>{n.original_name=n.name,n.children&&n.children.length&&(n.name=p(n.children))}),t.value.unshift(...e.children)):t.value.unshift(e):u[e.meta.addon]=e}),(s==null?void 0:s.apps.length)>1){const e=[];s==null||s.apps.forEach(n=>{u[n.key]&&(u[n.key].name=x[n.key],e.push(u[n.key]))}),t.value.unshift(...e)}return(e,n)=>{const y=U,v=q,k=z,E=A,w=H,S=L;return l(),h(S,{class:"w-[200px] h-screen layout-aside flex flex-col"},{default:o(()=>[r(v,{class:"logo-wrap flex items-center justify-center h-[64px]"},{default:o(()=>[c(i).menuIsCollapse?(l(),_("div",K,P)):(l(),_("div",G,[r(y,{style:{width:"40px",height:"40px"},src:c(M)(c(g)),fit:"contain"},{error:o(()=>[J]),_:1},8,["src"])]))]),_:1}),r(w,{class:"menu-wrap"},{default:o(()=>[r(E,null,{default:o(()=>[r(k,{"default-active":c(f).name,router:!0,class:"aside-menu h-full","unique-opened":!0,collapse:c(i).menuIsCollapse},{default:o(()=>[(l(!0),_(I,null,V(t.value,(j,b)=>(l(),h($,{routes:j,key:b},null,8,["routes"]))),128))]),_:1},8,["default-active","collapse"]),T]),_:1})]),_:1})]),_:1})}}});export{le as _};
