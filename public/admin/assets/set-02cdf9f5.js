import{d as k,x as B,r as g,n as F,h,c as j,a as p,t as i,u as a,R as I,s as K,w as o,e as l,q as s,i as u,b$ as E,a3 as M,aw as G,c2 as L,L as O,cO as S,au as $,av as q,K as Y,a7 as z,M as A,E as H,Y as J}from"./index-99f00cf3.js";/* empty css                   *//* empty css                  *//* empty css                *//* empty css                *//* empty css                 *//* empty css                       *//* empty css                 *//* empty css                       *//* empty css                     *//* empty css                  *//* empty css               *//* empty css                  *//* empty css                  */import"./el-form-item-4ed993c7.js";/* empty css                          *//* empty css                    */import{T as P,U as Q}from"./vipcard-cf1e419a.js";const W={class:"main-container"},X={class:"flex ml-[18px] justify-between items-center mt-[20px] mb-[5px]"},Z={class:"text-page-title"},ee=p("br",null,null,-1),te={class:"demo-time-range"},ae={class:"text-[12px] text-[#a9a9a9]"},le={class:"fixed-footer-wrap"},oe={class:"fixed-footer"},Re=k({__name:"set",setup(se){const T=B().meta.title,m=g(!1),n=F({week:[],start:"",end:"",interval:"",advance:"",max:"",member_num:""});(async()=>{m.value=!0;const r=await(await P()).data;Object.keys(n).forEach(e=>{r[e]!=null&&(n[e]=r[e]),r[e]!=null&&e=="start"&&(n[e]=x(r[e])),r[e]!=null&&e=="end"&&(n[e]=x(r[e]))}),m.value=!1})();const v=g(),y=async r=>{m.value||!r||await r.validate(async e=>{if(e){m.value=!0;const t=M(n);if(t.week=t.week.join(","),t.start=b(t.start),t.end=b(t.end),t.start>t.end){const c=t.start;t.start=t.end,t.end=c}Q(t).then(c=>{m.value=!1}).catch(()=>{m.value=!1})}})},b=r=>{const e=r.split(":");return e[0]*60*60+e[1]*60},x=r=>{let e=Math.floor(r/3600),t=Math.floor(r/60)-e*60;return e=e<10?"0"+e:e,t=t<10?"0"+t:t,e+":"+t};return(r,e)=>{const t=G,c=L,_=O,V=S,f=$,R=q,w=Y,C=z,N=A,U=H,D=J;return h(),j("div",W,[p("div",X,[p("span",Z,i(a(T)),1)]),I((h(),K(N,{model:n,"label-width":"150px",ref_key:"formRef",ref:v,rules:r.formRules,class:"page-form"},{default:o(()=>[l(C,{class:"box-card !border-none",shadow:"never"},{default:o(()=>[l(_,{label:a(s)("reserveTime")},{default:o(()=>[l(c,{modelValue:n.week,"onUpdate:modelValue":e[0]||(e[0]=d=>n.week=d)},{default:o(()=>[l(t,{label:"1"},{default:o(()=>[u(i(a(s)("monday")),1)]),_:1}),l(t,{label:"2"},{default:o(()=>[u(i(a(s)("tuesday")),1)]),_:1}),l(t,{label:"3"},{default:o(()=>[u(i(a(s)("wednesday")),1)]),_:1}),l(t,{label:"4"},{default:o(()=>[u(i(a(s)("thursday")),1)]),_:1}),l(t,{label:"5"},{default:o(()=>[u(i(a(s)("friday")),1)]),_:1}),l(t,{label:"6"},{default:o(()=>[u(i(a(s)("saturday")),1)]),_:1}),l(t,{label:"7"},{default:o(()=>[u(i(a(s)("sunday")),1)]),_:1}),ee]),_:1},8,["modelValue"])]),_:1},8,["label"]),l(_,null,{default:o(()=>[p("div",te,[l(V,{modelValue:n.start,"onUpdate:modelValue":e[1]||(e[1]=d=>n.start=d),class:"mr-4",placeholder:a(s)("startTime"),start:"00:00",step:"00:15",end:"23:30"},null,8,["modelValue","placeholder"]),u("- "),l(V,{modelValue:n.end,"onUpdate:modelValue":e[2]||(e[2]=d=>n.end=d),placeholder:a(s)("endTime"),start:"00:15",step:"00:15",end:"23:45"},null,8,["modelValue","placeholder"])])]),_:1}),l(_,{label:a(s)("reserveTimeInterval")},{default:o(()=>[l(R,{modelValue:n.interval,"onUpdate:modelValue":e[3]||(e[3]=d=>n.interval=d)},{default:o(()=>[l(f,{label:30},{default:o(()=>[u("30"+i(a(s)("minute")),1)]),_:1}),l(f,{label:60},{default:o(()=>[u("1"+i(a(s)("hour")),1)]),_:1}),l(f,{label:90},{default:o(()=>[u("90"+i(a(s)("minute")),1)]),_:1}),l(f,{label:120},{default:o(()=>[u("2"+i(a(s)("hour")),1)]),_:1})]),_:1},8,["modelValue"])]),_:1},8,["label"]),l(_,{label:a(s)("reserveEarly")},{default:o(()=>[l(w,{class:"input-width",onKeyup:e[4]||(e[4]=d=>a(E)(d)),modelValue:n.advance,"onUpdate:modelValue":e[5]||(e[5]=d=>n.advance=d)},{append:o(()=>[u(i(a(s)("hour")),1)]),_:1},8,["modelValue"])]),_:1},8,["label"]),l(_,{label:a(s)("reserveNumber")},{default:o(()=>[p("div",null,[l(w,{class:"input-width",onKeyup:e[6]||(e[6]=d=>a(E)(d)),modelValue:n.max,"onUpdate:modelValue":e[7]||(e[7]=d=>n.max=d)},{append:o(()=>[u(i(a(s)("personNum")),1)]),_:1},8,["modelValue"]),p("p",ae,i(a(s)("reserveNumberTips")),1)])]),_:1},8,["label"])]),_:1})]),_:1},8,["model","rules"])),[[D,m.value]]),p("div",le,[p("div",oe,[l(U,{type:"primary",loading:m.value,onClick:e[8]||(e[8]=d=>y(v.value))},{default:o(()=>[u(i(a(s)("save")),1)]),_:1},8,["loading"])])])])}}});export{Re as default};