import{d as C,D as R,j as B,r as V,l as F,bU as p,h as l,s as h,w as o,e as r,u as c,c as _,A as N,T as U,F as D,a as d,x as M,J as q,bE as z,d6 as A,V as H,N as I,z as J}from"./index-6f32d09b.js";/* empty css                     *//* empty css                */import"./el-tooltip-4ed993c7.js";/* empty css                  *//* empty css                 *//* empty css                        */import{_ as L}from"./icon-addon-339e16d0.js";import{_ as T}from"./menu-item.vue_vue_type_style_index_0_lang-827f3dcc.js";const $={key:0,class:"logo flex items-center m-auto h-[64px]"},G=d("div",{class:"flex justify-center items-center w-full h-[40px]"},[d("img",{class:"max-w-[40px]",src:L,alt:"","object-fit":"contain"})],-1),K={key:1,class:"logo flex items-center justify-center h-[64px]"},O=d("i",{class:"text-3xl iconfont iconyunkongjian"},null,-1),P=[O],Q=d("div",{class:"h-[48px]"},null,-1),le=C({__name:"side",setup(W){const i=R(),a=B(),f=M(),s=a.siteInfo,m=a.routers,x=a.addonIndexRoute,t=V([]),u={},g=F(()=>a.siteInfo.icon?a.siteInfo.icon:i.website.icon);if(m.forEach(e=>{e.original_name=e.name,e.meta.addon==""?(e.children&&e.children.length&&(e.name=p(e.children)),t.value.push(e)):e.meta.addon!=""&&(s==null?void 0:s.apps.length)==1&&(s==null?void 0:s.apps[0].key)==e.meta.addon?e.children?(e.children.forEach(n=>{n.original_name=n.name,n.children&&n.children.length&&(n.name=p(n.children))}),t.value.unshift(...e.children)):t.value.unshift(e):u[e.meta.addon]=e}),(s==null?void 0:s.apps.length)>1){const e=[];s==null||s.apps.forEach(n=>{u[n.key]&&(u[n.key].name=x[n.key],e.push(u[n.key]))}),t.value.unshift(...e)}return(e,n)=>{const y=q,v=z,k=A,E=H,w=I,b=J;return l(),h(b,{class:"w-[200px] h-screen layout-aside flex flex-col"},{default:o(()=>[r(v,{class:"logo-wrap flex items-center justify-center h-[64px]"},{default:o(()=>[c(i).menuIsCollapse?(l(),_("div",K,P)):(l(),_("div",$,[r(y,{style:{width:"40px",height:"40px"},src:c(N)(c(g)),fit:"contain"},{error:o(()=>[G]),_:1},8,["src"])]))]),_:1}),r(w,{class:"menu-wrap"},{default:o(()=>[r(E,null,{default:o(()=>[r(k,{"default-active":c(f).name,router:!0,class:"aside-menu h-full","unique-opened":!0,collapse:c(i).menuIsCollapse},{default:o(()=>[(l(!0),_(D,null,U(t.value,(j,S)=>(l(),h(T,{routes:j,key:S},null,8,["routes"]))),128))]),_:1},8,["default-active","collapse"]),Q]),_:1})]),_:1})]),_:1})}}});export{le as _};
