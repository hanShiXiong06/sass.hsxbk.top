import{d as N,r as v,n as U,l as L,h as m,s as h,w as t,a as _,e as s,i as f,t as p,u as l,q as n,P as S,c as D,F as j,Q as K,az as O,aA as T,K as $,L as q,E as z,a1 as A,U as G}from"./index-17984968.js";/* empty css                   *//* empty css                  *//* empty css                   *//* empty css                  *//* empty css                */import"./el-form-item-4ed993c7.js";/* empty css                       *//* empty css                 */import{e as I}from"./notice-12272e91.js";const P={class:"input-width"},Q={class:"input-width"},H={class:"input-width"},J={class:"dialog-footer"},ie=N({__name:"notice-weapp",emits:["complete"],setup(M,{expose:V,emit:E}){const d=v(!1),i=v(!0),g={is_weapp:0,key:"",name:"",title:"",type:"",content:[],first:"",remark:"",temp_key:""},a=U({...g}),b=v(),k=L(()=>({})),F=async o=>{i.value||!o||await o.validate(async e=>{if(e){i.value=!0;const u=a;u.status=u.is_weapp,I(u).then(w=>{i.value=!1,d.value=!1,E("complete")}).catch(()=>{i.value=!1})}})};return V({showDialog:d,setFormData:async(o=null)=>{i.value=!0,Object.assign(a,g),o&&Object.keys(a).forEach(e=>{o[e]!=null&&(a[e]=o[e]),o.weapp&&o.weapp[e]!=null&&(a[e]=o.weapp[e])}),i.value=!1}}),(o,e)=>{const u=O,w=T,c=$,x=q,y=z,B=A,R=G;return m(),h(B,{modelValue:d.value,"onUpdate:modelValue":e[3]||(e[3]=r=>d.value=r),title:l(n)("noticeSetting"),width:"550px","destroy-on-close":!0},{footer:t(()=>[_("span",J,[s(y,{onClick:e[1]||(e[1]=r=>d.value=!1)},{default:t(()=>[f(p(l(n)("cancel")),1)]),_:1}),s(y,{type:"primary",loading:i.value,onClick:e[2]||(e[2]=r=>F(b.value))},{default:t(()=>[f(p(l(n)("confirm")),1)]),_:1},8,["loading"])])]),default:t(()=>[S((m(),h(x,{model:a,"label-width":"110px",ref_key:"formRef",ref:b,rules:l(k),class:"page-form"},{default:t(()=>[s(c,{label:l(n)("status")},{default:t(()=>[s(w,{modelValue:a.is_weapp,"onUpdate:modelValue":e[0]||(e[0]=r=>a.is_weapp=r)},{default:t(()=>[s(u,{label:1},{default:t(()=>[f(p(l(n)("startUsing")),1)]),_:1}),s(u,{label:0},{default:t(()=>[f(p(l(n)("statusDeactivate")),1)]),_:1})]),_:1},8,["modelValue"])]),_:1},8,["label"]),s(c,{label:l(n)("name")},{default:t(()=>[_("div",P,p(a.name),1)]),_:1},8,["label"]),s(c,{label:l(n)("weappTempKey")},{default:t(()=>[_("div",Q,p(a.temp_key),1)]),_:1},8,["label"]),s(c,{label:l(n)("content")},{default:t(()=>[_("div",H,[(m(!0),D(j,null,K(a.content,(r,C)=>(m(),D("div",{key:C},p(r[0])+"："+p(r[1]),1))),128))])]),_:1},8,["label"])]),_:1},8,["model","rules"])),[[R,i.value]])]),_:1},8,["modelValue","title"])}}});export{ie as _};
