import{d as P,r as c,n as F,l as q,q as l,h as v,s as y,w as i,a as B,e as n,i as h,t as b,u as t,R as C,K as R,L as U,M as I,E as M,X as N,Y as j}from"./index-5a756a51.js";/* empty css                   *//* empty css                  *//* empty css                   *//* empty css                  *//* empty css                */import"./el-form-item-4ed993c7.js";/* empty css                 */import{e as L,a as O,g as $}from"./dict-5274e75e.js";const K={class:"dialog-footer"},Z=P({__name:"edit",emits:["complete"],setup(S,{expose:w,emit:V}){const m=c(!1),s=c(!1),p={id:"",name:"",key:"",memo:""},a=F({...p}),f=c(),D=q(()=>({name:[{required:!0,message:l("namePlaceholder"),trigger:"blur"}],key:[{required:!0,message:l("keyPlaceholder"),trigger:"blur"}],data:[{required:!0,message:l("dataPlaceholder"),trigger:"blur"}]})),k=async d=>{if(s.value||!d)return;const e=a.id?L:O;await d.validate(async o=>{o&&(s.value=!0,e(a).then(_=>{s.value=!1,m.value=!1,V("complete")}).catch(()=>{s.value=!1}))})};return w({showDialog:m,setFormData:async(d=null)=>{if(Object.assign(a,p),s.value=!0,d){const e=await(await $(d.id)).data;e&&Object.keys(a).forEach(o=>{e[o]!=null&&(a[o]=e[o])})}s.value=!1}}),(d,e)=>{const o=R,u=U,_=I,g=M,x=N,E=j;return v(),y(x,{modelValue:m.value,"onUpdate:modelValue":e[5]||(e[5]=r=>m.value=r),title:a.id?t(l)("updateDict"):t(l)("addDict"),width:"480",class:"diy-dialog-wrap","destroy-on-close":!0},{footer:i(()=>[B("span",K,[n(g,{onClick:e[3]||(e[3]=r=>m.value=!1)},{default:i(()=>[h(b(t(l)("cancel")),1)]),_:1}),n(g,{type:"primary",loading:s.value,onClick:e[4]||(e[4]=r=>k(f.value))},{default:i(()=>[h(b(t(l)("confirm")),1)]),_:1},8,["loading"])])]),default:i(()=>[C((v(),y(_,{model:a,"label-width":"120px",ref_key:"formRef",ref:f,rules:t(D),class:"page-form"},{default:i(()=>[n(u,{label:t(l)("name"),prop:"name"},{default:i(()=>[n(o,{modelValue:a.name,"onUpdate:modelValue":e[0]||(e[0]=r=>a.name=r),modelModifiers:{trim:!0},clearable:"",maxlength:"40","show-word-limit":"",placeholder:t(l)("namePlaceholder"),class:"input-width"},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),n(u,{label:t(l)("key"),prop:"key"},{default:i(()=>[n(o,{modelValue:a.key,"onUpdate:modelValue":e[1]||(e[1]=r=>a.key=r),modelModifiers:{trim:!0},clearable:"",maxlength:"40","show-word-limit":"",placeholder:t(l)("keyPlaceholder"),class:"input-width"},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),n(u,{label:t(l)("memo")},{default:i(()=>[n(o,{modelValue:a.memo,"onUpdate:modelValue":e[2]||(e[2]=r=>a.memo=r),type:"textarea",clearable:"",placeholder:t(l)("memoPlaceholder"),class:"input-width"},null,8,["modelValue","placeholder"])]),_:1},8,["label"])]),_:1},8,["model","rules"])),[[E,s.value]])]),_:1},8,["modelValue","title"])}}});export{Z as _};
