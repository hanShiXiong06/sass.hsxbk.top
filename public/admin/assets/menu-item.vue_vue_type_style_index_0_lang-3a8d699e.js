import{d as E,j as B,l as p,u as t,h as a,c as l,s as m,w as r,a as i,t as c,F as x,T as N,e as V,i as w,v as k,B as h,f as T,d6 as j,aU as F,d7 as M}from"./index-a3bdc7eb.js";import"./el-sub-menu-4ed993c7.js";import"./el-tooltip-4ed993c7.js";/* empty css                  */const U={class:k(["ml-[10px]"])},$={key:2,class:"!border-0 !border-t-[1px] border-solid mx-[25px] bg-[#f7f7f7] my-[5px]"},q=E({__name:"menu-item",props:{routes:{type:Object,required:!0}},setup(e){const g=e,y=T(),o=B().siteInfo,n=p(()=>g.routes.meta),b=p(()=>{const u={};return o==null||o.apps.forEach(s=>{u[s.key]=s}),o==null||o.site_addons.forEach(s=>{u[s.key]=s}),u});return(u,s)=>{const S=j,v=F,f=M;return t(n).show?(a(),l(x,{key:0},[e.routes.children?(a(),m(S,{key:0,index:String(e.routes.name)},{title:r(()=>[i("span",U,c(t(n).title),1)]),default:r(()=>[(a(!0),l(x,null,N(e.routes.children,(d,C)=>(a(),m(q,{routes:d,key:C},null,8,["routes"]))),128))]),_:1},8,["index"])):(a(),l(x,{key:1},[t(n).addon&&t(n).parent_route&&t(n).parent_route.addon==""?(a(),m(f,{key:0,index:String(e.routes.name),onClick:s[0]||(s[0]=d=>t(y).push({name:e.routes.name}))},{title:r(()=>[V(v,{placement:"right",effect:"light"},{content:r(()=>[w(" 该功能仅限"+c(t(b)[t(n).addon].title)+"使用 ",1)]),default:r(()=>[i("span",{class:k([{"text-[15px]":e.routes.meta.class==1},{"text-[14px]":e.routes.meta.class!=1},{"ml-[10px]":e.routes.meta.class==2,"ml-[15px]":e.routes.meta.class==3}])},c(t(n).title),3)]),_:1})]),_:1},8,["index"])):(a(),m(f,{key:1,index:String(e.routes.name),onClick:s[1]||(s[1]=d=>t(y).push({name:e.routes.name}))},{title:r(()=>[i("span",{class:k([{"text-[15px]":e.routes.meta.class==1},{"text-[14px]":e.routes.meta.class!=1},{"ml-[10px]":e.routes.meta.class==2,"ml-[15px]":e.routes.meta.class==3}])},c(t(n).title),3)]),_:1},8,["index"]))],64)),e.routes.is_border?(a(),l("div",$)):h("",!0)],64)):h("",!0)}}});export{q as _};
