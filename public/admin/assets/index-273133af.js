import{d as b,j as I,f as C,r as _,R as L,h as s,c as o,e as p,w as d,F as S,T as A,u as x,A as E,a as e,t as m,B as u,q as j,J as B,aa as R,a7 as D,Y as N,p as V,g as F}from"./index-37fee5a0.js";/* empty css                   *//* empty css                *//* empty css                 *//* empty css                 *//* empty css                        */import{_ as q}from"./app_default-ef62993a.js";import{g as J}from"./site-20a949a1.js";import{_ as T}from"./_plugin-vue_export-helper-c27b6911.js";const r=a=>(V("data-v-3692f982"),a=a(),F(),a),U={class:"main-container"},Y=r(()=>e("div",{class:"flex justify-between items-center"},[e("span",{class:"text-page-title"},"应用管理")],-1)),$={key:0,class:"flex flex-wrap plug-list pb-10 plug-large"},z=["onClick"],G=r(()=>e("div",{class:"image-slot"},[e("img",{class:"w-[50px] h-[50px]",src:q})],-1)),H={class:"flex flex-col justify-between w-[180px]"},K={class:"text-[14px] flex items-center"},M={class:"app-text max-w-[170px]"},O=r(()=>e("span",{class:"iconfont iconxiaochengxu2 text-[#00b240] ml-[4px] !text-[14px]"},null,-1)),P={class:"app-text text-[12px] text-[#999]"},Q={key:1,class:"empty flex items-center justify-center"},W=b({__name:"index",setup(a){const l=I().addonIndexRoute,f=C(),n=_([]),i=_(!0);(async()=>{const t=await J();n.value=t.data,i.value=!1})();const v=t=>{l[t]&&f.push({name:l[t]})};return(t,Z)=>{const g=B,h=R,y=D,w=N;return L((s(),o("div",U,[p(y,{class:"box-card !border-none",shadow:"never"},{default:d(()=>[Y,n.value.length?(s(),o("div",$,[(s(!0),o(S,null,A(n.value,(c,k)=>(s(),o("div",{key:k+"b",class:"app-item relative cursor-pointer mt-[20px] mr-4 bg-[#f7f7f7] w-[264px] flex py-[20px] px-[17px]",onClick:ee=>v(c.key)},[p(g,{class:"w-[40px] h-[40px] mr-[10px]",src:x(E)(c.icon),fit:"contain"},{error:d(()=>[G]),_:2},1032,["src"]),e("div",H,[e("div",K,[e("span",M,m(c.title),1),O]),e("p",P,m(c.desc),1)])],8,z))),128))])):u("",!0),!i.value&&!n.value.length?(s(),o("div",Q,[p(h,{description:x(j)("emptyAppData")},null,8,["description"])])):u("",!0)]),_:1})])),[[w,i.value]])}}});const le=T(W,[["__scopeId","data-v-3692f982"]]);export{le as default};