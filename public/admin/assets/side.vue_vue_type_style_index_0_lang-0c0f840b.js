import{d as q,D as z,j as H,r as x,l as J,bU as C,Q as j,h as n,s as i,w as c,e as _,a as u,u as r,c as d,A as L,T as M,F as k,t as S,bt as Q,B as R,x as T,f as G,J as K,bE as P,d8 as W,d6 as X,V as Y,N as Z,z as I,a3 as ee}from"./index-6f32d09b.js";/* empty css                     *//* empty css                */import"./el-tooltip-4ed993c7.js";/* empty css                  */import"./el-sub-menu-4ed993c7.js";import{_ as ae}from"./index.vue_vue_type_script_setup_true_lang-0724e2f9.js";/* empty css                 *//* empty css                        */import{_ as te}from"./icon-addon-339e16d0.js";import{_ as se}from"./menu-item.vue_vue_type_style_index_0_lang-7dcc225a.js";const ne={class:"one-menu w-[124px] h-screen px-[8px] bg-[#282c34]"},le={key:0,class:"logo flex items-center m-auto h-[64px]"},oe=u("div",{class:"flex justify-center items-center w-full h-[40px]"},[u("img",{class:"max-w-[40px]",src:te,alt:"","object-fit":"contain"})],-1),ce={key:1,class:"logo flex items-center justify-center h-[64px]"},re=u("i",{class:"text-3xl iconfont iconyunkongjian"},null,-1),ue=[re],de={key:0,class:"w-[16px] h-[16px] relative flex justify-center"},ie={key:1,class:"w-[16px] h-[16px]"},_e={class:"relative flex-1 w-0"},pe={class:"ml-[10px] w-full truncate"},he=u("div",{class:"h-[48px]"},null,-1),me={class:"w-[140px] h-[64px] flex items-center justify-center text-[16px] border-b-[1px] border-solid border-[var(--el-border-color-lighter)]"},fe=u("div",{class:"h-[48px]"},null,-1),Be=q({__name:"side",setup(ve){const s=T(),B=G(),f=z(),p=H(),a=p.siteInfo,D=p.routers,V=p.addonIndexRoute,h=x([]),o=x([]),v={},N=J(()=>p.siteInfo.icon?p.siteInfo.icon:f.website.icon);if(D.forEach(e=>{e.original_name=e.name,e.meta.addon==""?(e.children&&e.children.length&&(e.name=C(e.children)),h.value.push(e)):e.meta.addon!=""&&(a==null?void 0:a.apps.length)<=1&&(a==null?void 0:a.apps[0].key)==e.meta.addon?e.children?(e.children.forEach(t=>{t.original_name=t.name,t.children&&t.children.length&&(t.name=C(t.children))}),h.value.unshift(...e.children)):h.value.unshift(e):v[e.meta.addon]=e}),(a==null?void 0:a.apps.length)>1){const e=[];a==null||a.apps.forEach(t=>{v[t.key]&&(v[t.key].name=V[t.key],e.push(v[t.key]))}),h.value.unshift(...e)}const m=x(s.matched[1].name);j(s,()=>{if((a==null?void 0:a.apps.length)>1)o.value=s.matched[1].children,m.value=s.matched[1].name;else{const e=s.matched[1];e.meta.addon==""?(m.value=s.matched[1].name,o.value=s.matched[1].children??[]):e.meta.addon==(a==null?void 0:a.apps[0].key)?(m.value=s.matched[2].name,o.value=s.matched[2].children??[]):(m.value=s.matched[1].name,o.value=s.matched[1].children??[])}},{immediate:!0});const y=x([]);return j(o.value,()=>{if(y.value=[],o.value&&Object.values(o.value).length){let e=ee(o.value);for(let t in e)y.value.push(e[t].name)}},{immediate:!0}),(e,t)=>{const w=K,U=P,F=ae,$=W,b=X,E=Y,A=Z,O=I;return n(),i(O,{class:"w-100 h-screen"},{default:c(()=>[_(A,{class:"flex p-0"},{default:c(()=>[u("div",ne,[_(U,{class:"logo-wrap"},{default:c(()=>[r(f).menuIsCollapse?(n(),d("div",ce,ue)):(n(),d("div",le,[_(w,{style:{width:"40px",height:"40px"},src:r(L)(r(N)),fit:"contain"},{error:c(()=>[oe]),_:1},8,["src"])]))]),_:1}),_(E,{class:"h-[calc( 100vh - 64px )]"},{default:c(()=>[_(b,{"default-active":m.value,router:!0,class:"aside-menu","unique-opened":!0,collapse:r(f).menuIsCollapse},{default:c(()=>[(n(!0),d(k,null,M(h.value,(l,g)=>(n(),d(k,{key:g},[l.meta.show?(n(),i($,{key:0,index:l.original_name,onClick:xe=>r(B).push({name:l.name})},{title:c(()=>[u("div",_e,[u("span",pe,S(l.meta.short_title||l.meta.title),1)])]),default:c(()=>[l.meta.icon?(n(),d("div",de,[r(Q)(l.meta.icon)?(n(),i(w,{key:0,class:"w-[16px] h-[16px] rounded-[50%] overflow-hidden",src:l.meta.icon,fit:"fill"},null,8,["src"])):(n(),i(F,{key:1,name:l.meta.icon,class:"absolute top-[50%] -translate-y-[50%]"},null,8,["name"]))])):(n(),d("div",ie))]),_:2},1032,["index","onClick"])):R("",!0)],64))),128))]),_:1},8,["default-active","collapse"]),he]),_:1})]),o.value.length?(n(),i(E,{key:0,class:"two-menu w-[140px]"},{default:c(()=>[u("div",me,S(r(s).matched[1].meta.title),1),_(b,{class:"aside-menu","default-active":r(s).name,"default-openeds":y.value,router:!0,collapse:r(f).menuIsCollapse},{default:c(()=>[(n(!0),d(k,null,M(o.value,(l,g)=>(n(),i(se,{routes:l,key:g},null,8,["routes"]))),128))]),_:1},8,["default-active","default-openeds","collapse"]),fe]),_:1})):R("",!0)]),_:1})]),_:1})}}});export{Be as _};
