import{d as A,D as U,j as q,r as g,a7 as C,a5 as z,h as n,s as i,w as c,e as h,a as d,u as o,c as r,A as H,Q as S,F as k,t as M,cY as L,B as w,x as Q,f as Y,bD as G,I as J,d8 as K,d3 as O,S as P,M as T,z as W}from"./index-17984968.js";/* empty css                     *//* empty css                */import"./el-tooltip-4ed993c7.js";/* empty css                  */import"./el-sub-menu-4ed993c7.js";import{_ as X}from"./index.vue_vue_type_script_setup_true_lang-8e50df98.js";/* empty css                 *//* empty css                        */import{_ as Z}from"./icon-addon-339e16d0.js";import{_ as I}from"./menu-item.vue_vue_type_style_index_0_lang-16f4c452.js";const ee={class:"w-[124px] px-[8px] bg-[#282c34] h-screen one-menu"},ae={key:0,class:"logo flex items-center m-auto h-[64px]"},se=["src"],te={key:1,class:"max-h-[40px] max-w-[40px] rounded-full",src:Z,alt:""},ne={key:1,class:"logo flex items-center justify-center h-[64px]"},le=d("i",{class:"text-3xl iconfont iconyunkongjian"},null,-1),oe=[le],ce={key:0,class:"w-[16px] h-[16px] relative flex justify-center"},re={class:"relative flex-1 w-0"},de={class:"ml-[10px] w-full truncate"},ue=d("div",{class:"h-[48px]"},null,-1),ie={class:"w-[140px] h-[64px] flex items-center justify-center text-[16px] border-0 border-b-[1px] border-solid border-[#eee]"},_e=d("div",{class:"h-[48px]"},null,-1),Se=A({__name:"side",setup(pe){const x=U(),v=q(),t=Q(),R=Y(),e=v.siteInfo,j=v.routers,B=v.addonIndexRoute,_=g([]),u=g([]),m={};if(j.forEach(a=>{a.original_name=a.name,a.meta.addon==""?(a.children&&a.children.length&&(a.name=C(a.children)),_.value.push(a)):a.meta.addon!=""&&(e==null?void 0:e.apps.length)<=1&&(e==null?void 0:e.apps[0].key)==a.meta.addon?a.children?(a.children.forEach(s=>{s.original_name=s.name,s.children&&s.children.length&&(s.name=C(s.children))}),_.value.unshift(...a.children)):_.value.unshift(a):m[a.meta.addon]=a}),(e==null?void 0:e.apps.length)>1){const a=[];e==null||e.apps.forEach(s=>{var f;a.push({path:m[s.key]?m[s.key].path:"",meta:{icon:((f=m[s.key])==null?void 0:f.meta.icon)||"element-Setting",addon:s.key,title:s.title,app:s.app,show:!0},original_name:s.key,name:B[s.key]})}),_.value.unshift(...a)}const p=g(t.matched[1].name);return z(t,()=>{(e==null?void 0:e.apps.length)>1?(u.value=t.matched[1].children,p.value=t.matched[1].name):t.meta.addon==""?(p.value=t.matched[1].name,u.value=t.matched[1].children??[]):t.meta.addon&&t.meta.addon!=(e==null?void 0:e.apps[0].key)?(p.value="/site/app",u.value=t.matched[1].children??[]):(p.value=t.matched[2].name,u.value=t.matched[2].children??[])},{immediate:!0}),(a,s)=>{const f=G,D=J,V=X,F=K,E=O,b=P,N=T,$=W;return n(),i($,{class:"w-100 h-screen"},{default:c(()=>[h(N,{class:"p-0 flex"},{default:c(()=>[d("div",ee,[h(f,{class:"logo-wrap"},{default:c(()=>[o(x).menuIsCollapse?(n(),r("div",ne,oe)):(n(),r("div",ae,[o(e).logo?(n(),r("img",{key:0,class:"max-h-[40px] max-w-[40px] rounded-full",src:o(H)(o(e).logo),alt:""},null,8,se)):(n(),r("img",te))]))]),_:1}),h(b,{class:"h-[calc( 100vh - 64px )]"},{default:c(()=>[h(E,{"default-active":p.value,router:!0,class:"aside-menu","unique-opened":"true",collapse:o(x).menuIsCollapse},{default:c(()=>[(n(!0),r(k,null,S(_.value,(l,y)=>(n(),r(k,{key:y},[l.meta.show?(n(),i(F,{key:0,index:l.original_name,onClick:he=>o(R).push({name:l.name})},{title:c(()=>[d("div",re,[d("span",de,M(l.meta.short_title||l.meta.title),1)])]),default:c(()=>[l.meta.icon?(n(),r("div",ce,[o(L)(l.meta.icon)?(n(),i(D,{key:0,class:"w-[16px] h-[16px] rounded-[50%] overflow-hidden",src:l.meta.icon,fit:"fill"},null,8,["src"])):(n(),i(V,{key:1,name:l.meta.icon,class:"absolute top-[50%] -translate-y-[50%]"},null,8,["name"]))])):w("",!0)]),_:2},1032,["index","onClick"])):w("",!0)],64))),128))]),_:1},8,["default-active","collapse"]),ue]),_:1})]),u.value.length?(n(),i(b,{key:0,class:"two-menu w-[140px]"},{default:c(()=>[d("div",ie,M(o(t).matched[1].meta.title),1),h(E,{"default-active":o(t).name,router:!0,class:"aside-menu",collapse:o(x).menuIsCollapse},{default:c(()=>[(n(!0),r(k,null,S(u.value,(l,y)=>(n(),i(I,{routes:l,key:y},null,8,["routes"]))),128))]),_:1},8,["default-active","collapse"]),_e]),_:1})):w("",!0)]),_:1})]),_:1})}}});export{Se as _};