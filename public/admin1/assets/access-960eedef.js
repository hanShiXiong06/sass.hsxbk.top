import{d as j,f as V,r as v,aQ as B,Y as z,h as N,c as T,a as t,t as a,u as o,q as n,e as s,w as e,aR as u,i as w,A as q,aD as F,aE as R,X as D,E as Q,ae as $,af as M,ag as P,I as U,ah as X,p as Y,g as G}from"./index-17984968.js";/* empty css               *//* empty css                 *//* empty css                        *//* empty css               *//* empty css                *//* empty css                  *//* empty css                *//* empty css                    */import{g as H}from"./aliapp-8dd5c3b6.js";import{_ as J}from"./_plugin-vue_export-helper-c27b6911.js";const K=i=>(Y("data-v-e99a4238"),i=i(),G(),i),L={class:"w-full p-5 bg-body"},O={class:"flex justify-between items-center mb-[20px]"},W={class:"text-page-title"},Z={class:"p-[20px]"},ee={class:"text-[16px] mb-[20px]"},te={class:"text-[14px] text-[#303133] font-[700]"},se={class:"text-[#999]"},oe={class:"mt-[20px] mb-[40px] h-[32px]"},ne={class:"text-[14px] text-[#303133] font-[700]"},ae={class:"text-[#999]"},le={class:"mt-[20px] mb-[40px] h-[32px]"},ce={class:"text-[14px] text-[#303133] font-[700]"},pe={class:"text-[#999]"},ie=K(()=>t("div",{class:"mt-[20px] mb-[40px] h-[32px]"},null,-1)),de={class:"text-[14px] text-[#303133] font-[700]"},re={class:"text-[#999]"},_e={class:"flex justify-center"},xe={class:"w-[100%] h-[100%] flex items-center justify-center bg-[#f5f7fa]"},ue={class:"mt-[22px] text-center"},fe={class:"text-[14px] text-[#303133] font-[700]"},me=j({__name:"access",setup(i){const h=V(),f=v("/channel/aliapp"),l=v(2),d=v("");B(async()=>{const p=await H();d.value=p.data.qr_code});const y=p=>{window.open(p,"_blank")},k=p=>{h.push({path:f.value})};return(p,c)=>{const C=F,E=R,r=z("CircleCheckFilled"),_=D,b=Q,x=$,S=M,g=P,A=U,I=X;return N(),T("div",L,[t("div",O,[t("span",W,a(o(n)("title")),1)]),s(E,{modelValue:f.value,"onUpdate:modelValue":c[0]||(c[0]=m=>f.value=m),class:"demo-tabs",onTabChange:k},{default:e(()=>[s(C,{label:o(n)("weappAccessFlow"),name:"/channel/aliapp"},null,8,["label"])]),_:1},8,["modelValue"]),t("div",Z,[t("p",ee,a(o(n)("weappInlet")),1),s(I,null,{default:e(()=>[s(g,{span:20},{default:e(()=>[s(S,{direction:"vertical"},{default:e(()=>[s(x,null,u({title:e(()=>[t("p",te,a(o(n)("weappAttestation")),1)]),description:e(()=>[t("span",se,a(o(n)("weappAttest")),1),t("div",oe,[s(b,{type:"primary",onClick:c[1]||(c[1]=m=>y("https://open.alipay.com/develop/manage"))},{default:e(()=>[w(a(o(n)("clickAccess")),1)]),_:1})])]),_:2},[l.value>1?{name:"icon",fn:e(()=>[s(_,{size:"25px",class:"text-color"},{default:e(()=>[s(r)]),_:1})]),key:"0"}:l.value==1?{name:"icon",fn:e(()=>[t("div",{class:"w-[24px] h-[24px] box-border rounded-full bg-color1 flex items-center justify-center"},[t("div",{class:"h-[12px] w-[12px] bg-color rounded-full"})])]),key:"1"}:{name:"icon",fn:e(()=>[t("div",{class:"w-[24px] h-[24px] text-[#fff] bg-[#778aa3] text-center leading-[24px] rounded-full"},"1")]),key:"2"}]),1024),s(x,null,u({title:e(()=>[t("p",ne,a(o(n)("weappSetting")),1)]),description:e(()=>[t("span",ae,a(o(n)("emplace")),1),t("div",le,[s(b,{type:"primary",plain:"",onClick:c[2]||(c[2]=m=>o(h).push("/channel/aliapp/config"))},{default:e(()=>[w(a(o(n)("weappSettingBtn")),1)]),_:1})])]),_:2},[l.value>2?{name:"icon",fn:e(()=>[s(_,{size:"25px"},{default:e(()=>[s(r)]),_:1})]),key:"0"}:l.value==2?{name:"icon",fn:e(()=>[t("div",{class:"w-[24px] h-[24px] box-border rounded-full bg-color1 flex items-center justify-center"},[t("div",{class:"h-[12px] w-[12px] bg-color rounded-full"})])]),key:"1"}:{name:"icon",fn:e(()=>[t("div",{class:"w-[24px] h-[24px] text-[#fff] bg-[#778aa3] text-center leading-[24px] rounded-full"},"2")]),key:"2"}]),1024),s(x,null,u({title:e(()=>[t("p",ce,a(o(n)("uploadVersion")),1)]),description:e(()=>[t("span",pe,a(o(n)("releaseCourse")),1),ie]),_:2},[l.value>3?{name:"icon",fn:e(()=>[s(_,{size:"25px"},{default:e(()=>[s(r)]),_:1})]),key:"0"}:l.value==3?{name:"icon",fn:e(()=>[t("div",{class:"w-[24px] h-[24px] box-border rounded-full bg-color1 flex items-center justify-center"},[t("div",{class:"h-[12px] w-[12px] bg-color rounded-full"})])]),key:"1"}:{name:"icon",fn:e(()=>[t("div",{class:"w-[24px] h-[24px] text-[#fff] bg-[#778aa3] text-center leading-[24px] rounded-full"},"3")]),key:"2"}]),1024),s(x,null,u({title:e(()=>[t("p",de,a(o(n)("completeAccess")),1)]),description:e(()=>[t("span",re,a(o(n)("releaseCourse")),1)]),_:2},[l.value>4?{name:"icon",fn:e(()=>[s(_,{size:"25px"},{default:e(()=>[s(r)]),_:1})]),key:"0"}:l.value==4?{name:"icon",fn:e(()=>[t("div",{class:"w-[24px] h-[24px] box-border rounded-full bg-color1 flex items-center justify-center"},[t("div",{class:"h-[12px] w-[12px] bg-color rounded-full"})])]),key:"1"}:{name:"icon",fn:e(()=>[t("div",{class:"w-[24px] h-[24px] text-[#fff] bg-[#778aa3] text-center leading-[24px] rounded-full"},"4")]),key:"2"}]),1024)]),_:1})]),_:1}),s(g,{span:4},{default:e(()=>[t("div",_e,[s(A,{class:"w-[180px] h-[180px]",src:d.value?o(q)(d.value):""},{error:e(()=>[t("div",xe,[t("span",null,a(d.value?o(n)("fileErr"):o(n)("emptyQrCode")),1)])]),_:1},8,["src"])]),t("div",ue,[t("p",fe,a(o(n)("clickAccess2")),1)])]),_:1})]),_:1})])])}}});const Ie=J(me,[["__scopeId","data-v-e99a4238"]]);export{Ie as default};