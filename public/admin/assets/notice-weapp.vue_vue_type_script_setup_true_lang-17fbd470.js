import{d as N,r as v,n as L,l as S,h as m,s as h,w as t,a as _,e as s,i as f,t as p,u as l,q as n,R as T,c as D,F as U,T as j,as as O,at as $,L as q,M as G,E as I,X as K,Y as M}from"./index-f7a01263.js";/* empty css                   *//* empty css                  *//* empty css                   *//* empty css                  *//* empty css                     *//* empty css                       *//* empty css                 */import{e as X}from"./notice-bd839023.js";const Y={class:"input-width"},z={class:"input-width"},A={class:"input-width"},H={class:"dialog-footer"},ne=N({__name:"notice-weapp",emits:["complete"],setup(J,{expose:V,emit:E}){const d=v(!1),i=v(!0),g={is_weapp:0,key:"",name:"",title:"",type:"",content:[],first:"",remark:"",temp_key:""},a=L({...g}),b=v(),k=S(()=>({})),F=async o=>{i.value||!o||await o.validate(async e=>{if(e){i.value=!0;const u=a;u.status=u.is_weapp,X(u).then(w=>{i.value=!1,d.value=!1,E("complete")}).catch(()=>{i.value=!1})}})};return V({showDialog:d,setFormData:async(o=null)=>{i.value=!0,Object.assign(a,g),o&&Object.keys(a).forEach(e=>{o[e]!=null&&(a[e]=o[e]),o.weapp&&o.weapp[e]!=null&&(a[e]=o.weapp[e])}),i.value=!1}}),(o,e)=>{const u=O,w=$,c=q,x=G,y=I,R=K,B=M;return m(),h(R,{modelValue:d.value,"onUpdate:modelValue":e[3]||(e[3]=r=>d.value=r),title:l(n)("noticeSetting"),width:"550px","destroy-on-close":!0},{footer:t(()=>[_("span",H,[s(y,{onClick:e[1]||(e[1]=r=>d.value=!1)},{default:t(()=>[f(p(l(n)("cancel")),1)]),_:1}),s(y,{type:"primary",loading:i.value,onClick:e[2]||(e[2]=r=>F(b.value))},{default:t(()=>[f(p(l(n)("confirm")),1)]),_:1},8,["loading"])])]),default:t(()=>[T((m(),h(x,{model:a,"label-width":"110px",ref_key:"formRef",ref:b,rules:l(k),class:"page-form"},{default:t(()=>[s(c,{label:l(n)("status")},{default:t(()=>[s(w,{modelValue:a.is_weapp,"onUpdate:modelValue":e[0]||(e[0]=r=>a.is_weapp=r)},{default:t(()=>[s(u,{label:1},{default:t(()=>[f(p(l(n)("startUsing")),1)]),_:1}),s(u,{label:0},{default:t(()=>[f(p(l(n)("statusDeactivate")),1)]),_:1})]),_:1},8,["modelValue"])]),_:1},8,["label"]),s(c,{label:l(n)("name")},{default:t(()=>[_("div",Y,p(a.name),1)]),_:1},8,["label"]),s(c,{label:l(n)("weappTempKey")},{default:t(()=>[_("div",z,p(a.temp_key),1)]),_:1},8,["label"]),s(c,{label:l(n)("content")},{default:t(()=>[_("div",A,[(m(!0),D(U,null,j(a.content,(r,C)=>(m(),D("div",{key:C},p(r[0])+"："+p(r[1]),1))),128))])]),_:1},8,["label"])]),_:1},8,["model","rules"])),[[B,i.value]])]),_:1},8,["modelValue","title"])}}});export{ne as _};
