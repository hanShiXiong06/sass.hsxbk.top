import{d as w,x as S,r as h,Y as v,P as k,u as t,h as i,c,s as C,w as n,a as s,t as d,q as a,e,B,aa as E,ac as z,X as N,a0 as D,U as V}from"./index-17984968.js";/* empty css                   *//* empty css                *//* empty css                *//* empty css                 *//* empty css                    *//* empty css               */import"./el-tooltip-4ed993c7.js";/* empty css                  *//* empty css                     *//* empty css                        */import{w as j}from"./tools-4d862b7d.js";const I={class:"main-container attachment-container min-h-[80vh]"},T={class:"flex justify-between items-center"},q={class:"text-page-title"},L={class:"bg-[#fff] pb-[20px] mb-3"},O={class:"pt-[20px] pb-[10px] text-sm"},P={class:"text-[14px]"},R={class:"bg-[#fff] pb-[20px] mb-3"},U={class:"py-[20px] text-sm"},X={class:"text-[14px]"},Y={class:"bg-[#fff] pb-[20px] mb-3"},A={class:"py-[20px] text-sm"},F={class:"text-[14px]"},G={key:0},H={key:1},J={class:"bg-[#fff] pb-[20px] mb-3"},K={class:"py-[20px] text-sm"},M={class:"text-[14px]"},Q={key:0},W={key:1},ue=w({__name:"detection",setup(Z){const g=S().meta.title,o=h({});let m=h(!0);return(()=>{j().then(u=>{o.value=u.data,m.value=!1})})(),(u,te)=>{const l=E,r=z,f=v("Select"),_=N,b=v("CloseBold"),x=D,y=V;return k((i(),c("div",I,[Object.keys(o.value).length?(i(),C(x,{key:0,class:"box-card !border-none",shadow:"never"},{default:n(()=>[s("div",T,[s("span",q,d(t(g)),1)]),s("div",L,[s("p",O,d(t(a)("serverInformation")),1),s("div",P,[e(r,{data:o.value.server,size:"large"},{default:n(()=>[e(l,{prop:"name",label:t(a)("environment"),align:"left","min-width":"200"},null,8,["label"]),e(l,{prop:"server",label:t(a)("version"),align:"left","min-width":"140"},null,8,["label"])]),_:1},8,["data"])])]),s("div",R,[s("p",U,d(t(a)("systemDemand")),1),s("div",X,[e(r,{data:o.value.server_version,size:"large"},{default:n(()=>[e(l,{prop:"name",label:t(a)("environment"),align:"left","min-width":"200"},null,8,["label"]),e(l,{prop:"demand",label:t(a)("demand"),align:"left","min-width":"140"},null,8,["label"]),e(l,{prop:"server",label:t(a)("version"),align:"left","min-width":"140"},null,8,["label"])]),_:1},8,["data"])])]),s("div",Y,[s("p",A,d(t(a)("authorityStatus")),1),s("div",F,[e(r,{data:o.value.system_variables,size:"large"},{default:n(()=>[e(l,{prop:"name",label:t(a)("name"),align:"left","min-width":"200"},null,8,["label"]),e(l,{prop:"need",label:t(a)("demand"),align:"left","min-width":"140"},null,8,["label"]),e(l,{label:t(a)("status"),align:"left","min-width":"140"},{default:n(({row:p})=>[p.status?(i(),c("span",G,[e(_,{color:"green"},{default:n(()=>[e(f)]),_:1})])):(i(),c("span",H,[e(_,{color:"red"},{default:n(()=>[e(b)]),_:1})]))]),_:1},8,["label"])]),_:1},8,["data"])])]),s("div",J,[s("p",K,d(t(a)("process")),1),s("div",M,[e(r,{data:o.value.process,size:"large"},{default:n(()=>[e(l,{prop:"name",label:t(a)("name"),align:"left","min-width":"200"},null,8,["label"]),e(l,{prop:"need",label:t(a)("demand"),align:"left","min-width":"140"},null,8,["label"]),e(l,{label:t(a)("status"),align:"left","min-width":"140"},{default:n(({row:p})=>[p.status?(i(),c("span",Q,[e(_,{color:"green"},{default:n(()=>[e(f)]),_:1})])):(i(),c("span",W,[e(_,{color:"red"},{default:n(()=>[e(b)]),_:1})]))]),_:1},8,["label"])]),_:1},8,["data"])])])]),_:1})):B("",!0)])),[[y,t(m)]])}}});export{ue as default};