import{d as B,j,l as v,u as e,h as n,c,s as l,w as o,B as u,a as i,t as d,F as p,T as N,e as g,i as V,v as f,A as T,f as $,db as F,J as M,aa as q,dc as z}from"./index-99f00cf3.js";import"./el-sub-menu-4ed993c7.js";import"./el-tooltip-4ed993c7.js";/* empty css                  *//* empty css                 *//* empty css                        */import{_ as A}from"./index.vue_vue_type_script_setup_true_lang-49ab6f2c.js";const D={key:0,class:"w-[16px] h-[16px] relative flex items-center"},I={class:f(["ml-[10px]"])},J={class:"w-[16px] h-[16px] relative flex justify-center"},L={class:"w-[16px] h-[16px] relative flex justify-center"},O={key:2,class:"!border-0 !border-t-[1px] border-solid mx-[25px] bg-[#f7f7f7] my-[5px]"},R=B({__name:"menu-item",props:{routes:{type:Object,required:!0}},setup(t){const b=t,y=$(),r=j().siteInfo,s=v(()=>b.routes.meta),h=v(()=>{const m={};return r==null||r.apps.forEach(a=>{m[a.key]=a}),r==null||r.site_addons.forEach(a=>{m[a.key]=a}),m});return(m,a)=>{const k=A,w=F,S=M,E=q,_=z;return e(s).show?(n(),c(p,{key:0},[t.routes.children?(n(),l(w,{key:0,index:String(t.routes.name)},{title:o(()=>[e(s).icon?(n(),c("div",D,[e(s).icon?(n(),l(k,{key:0,name:e(s).icon,class:"absolute !w-auto"},null,8,["name"])):u("",!0)])):u("",!0),i("span",I,d(e(s).title),1)]),default:o(()=>[(n(!0),c(p,null,N(t.routes.children,(x,C)=>(n(),l(R,{routes:x,key:C},null,8,["routes"]))),128))]),_:1},8,["index"])):(n(),c(p,{key:1},[e(s).addon&&e(s).parent_route&&e(s).parent_route.addon==""?(n(),l(_,{key:0,index:String(t.routes.name),onClick:a[0]||(a[0]=x=>e(y).push({name:t.routes.name}))},{title:o(()=>[g(E,{placement:"right",effect:"light"},{content:o(()=>[V(" 该功能仅限"+d(e(h)[e(s).addon].title)+"使用 ",1)]),default:o(()=>[i("span",{class:f([{"text-[15px]":t.routes.meta.class==1},{"text-[14px]":t.routes.meta.class!=1},{"ml-[10px]":t.routes.meta.class==2,"ml-[15px]":t.routes.meta.class==3}])},d(e(s).title),3)]),_:1})]),default:o(()=>[i("div",J,[g(S,{class:"w-[16px] h-[16px] rounded-[50%] overflow-hidden",src:e(T)(e(h)[e(s).addon].icon),fit:"fill"},null,8,["src"])])]),_:1},8,["index"])):(n(),l(_,{key:1,index:String(t.routes.name),onClick:a[1]||(a[1]=x=>e(y).push({name:t.routes.name}))},{title:o(()=>[i("span",{class:f([{"text-[15px]":t.routes.meta.class==1},{"text-[14px]":t.routes.meta.class!=1},{"ml-[10px]":t.routes.meta.class==2,"ml-[15px]":t.routes.meta.class==3}])},d(e(s).title),3)]),default:o(()=>[i("div",L,[e(s).icon?(n(),l(k,{key:0,name:e(s).icon,class:"absolute top-[50%] -translate-y-[50%]"},null,8,["name"])):u("",!0)])]),_:1},8,["index"]))],64)),t.routes.is_border?(n(),c("div",O)):u("",!0)],64)):u("",!0)}}});export{R as _};
