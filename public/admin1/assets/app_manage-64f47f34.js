import{d as C,f as V,j as M,r as y,n as N,P as R,h as l,c as x,a as e,t as s,u as a,q as o,e as u,w as i,F as j,Q as D,A as T,s as U,i as P,B as k,a7 as w,G as L,E as q,I as z,ab as G,ad as O,a4 as Q,U as $,p as H,g as J}from"./index-17984968.js";/* empty css                   *//* empty css                 *//* empty css                */import"./el-tooltip-4ed993c7.js";/* empty css                  *//* empty css                 *//* empty css                        *//* empty css                  */import{_ as K}from"./apply_empty-cdca3e85.js";import{g as W}from"./addon-0759f12a.js";import{_ as X}from"./_plugin-vue_export-helper-c27b6911.js";const Y=""+new URL("app_store_default-c0531792.png",import.meta.url).href,f=d=>(H("data-v-1052d0e0"),d=d(),J(),d),Z={class:"box-border pt-[68px] px-[76px] overview-top"},ee={key:0},te={class:"flex justify-between items-center"},se={class:"font-[600] text-[26px] text-[#222] leading-[37px]"},ae={class:"font-[500] text-[14px] text-[#222] leading-[20px] mt-[12px]"},oe=f(()=>e("div",{class:"mr-[9px] text-[#3F3F3F] iconfont iconxiazai01"},null,-1)),ne={class:"font-[600] text-[14px] text-[#222] leading-[20px]"},pe={class:"flex flex-wrap mt-[40px]"},ie=["onClick"],ce={class:"bg-[#F7FAFB] py-[18px] px-[24px] flex items-center app-item-head"},re=f(()=>e("div",{class:"image-slot"},[e("img",{class:"w-[40px] h-[40px] rounded-[8px]",src:Y})],-1)),le={class:"py-[18px] px-[24px]"},de={class:"font-[600] leading-[1] text-[14px] text-[#222]"},_e={class:"text-[13px] text-[#6D7278] leading-[18px] mt-[6px] truncate"},xe=f(()=>e("div",{class:"w-[230px] mx-auto"},[e("img",{src:K,class:"max-w-full",alt:""})],-1)),ue={class:"flex items-center"},me=C({__name:"app_manage",setup(d){const v=V(),m=M(),n=y(!0),_=N({appList:[]}),h=y({});(()=>{n.value=!0,W().then(p=>{Object.values(p.data).forEach((t,c)=>{t.type=="app"&&_.appList.push(t)}),m.routers.forEach((t,c)=>{t.children&&t.children.length?(t.name=w(t.children),h.value[t.meta.app]=w(t.children)):h.value[t.meta.app]=t.name}),n.value=!1}).catch(()=>{n.value=!1})})();const b=p=>{L.set({key:"menuAppStorage",data:p.key}),L.set({key:"plugMenuTypeStorage",data:""});const t=m.appMenuList;t.push(p.key),m.setAppMenuList(t);const c=h.value[p.key];v.push({name:c})},g=()=>{v.push("/app_manage/app_store")};return(p,t)=>{const c=q,F=z,E=G,S=O,A=Q,I=$;return R((l(),x("div",Z,[_.appList&&!n.value?(l(),x("div",ee,[e("div",te,[e("div",null,[e("div",se,s(a(o)("app")),1),e("div",ae,s(a(o)("versionInfo"))+" "+s(a(o)("currentVersion")),1)]),u(c,{onClick:g,class:"px-[15px]"},{default:i(()=>[oe,e("span",ne,s(a(o)("appStore")),1)]),_:1})]),e("div",pe,[(l(!0),x(j,null,D(_.appList,(r,B)=>(l(),x("div",{key:B,class:"app-item w-[280px] box-border !bg-[#fff] rounded-[6px] cursor-pointer mr-[20px] mb-[20px] overflow-hidden",onClick:fe=>b(r)},[e("div",ce,[u(F,{class:"w-[44px] h-[44px] rounded-[8px]",src:a(T)(r.icon),fit:"contain"},{error:i(()=>[re]),_:2},1032,["src"])]),e("div",le,[e("div",de,s(r.title),1),u(E,{class:"box-item",effect:"light",content:r.desc,placement:"bottom-start"},{default:i(()=>[e("div",_e,s(r.desc),1)]),_:2},1032,["content"])])],8,ie))),128)),!_.appList.length&&!n.value?(l(),U(A,{key:0,class:"mx-auto overview-empty"},{image:i(()=>[xe]),description:i(()=>[e("p",ue,[e("span",null,s(a(o)("descriptionLeft")),1),u(S,{type:"primary",onClick:g,class:"mx-[5px]"},{default:i(()=>[P(s(a(o)("link")),1)]),_:1}),e("span",null,s(a(o)("descriptionRight")),1)])]),_:1})):k("",!0)])])):k("",!0)])),[[I,n.value]])}}});const Be=X(me,[["__scopeId","data-v-1052d0e0"]]);export{Be as default};
