import{d as F,r as u,n as P,l as k,q as l,h as x,s as V,w as r,a as c,e as n,i as b,t as _,u as o,P as B,J as I,K as M,L as R,E as j,a1 as q,U as L}from"./index-17984968.js";/* empty css                   *//* empty css                  *//* empty css                   *//* empty css                  *//* empty css                */import O from"./index-0ce1f7fc.js";import"./el-form-item-4ed993c7.js";/* empty css                 */import{e as T,a as $,b as J}from"./delivery-9c7fac72.js";const K={class:"input-width text-[12px] text-[#999] mt-[5px] leading-[20px]"},S={class:"dialog-footer"},oe=F({__name:"company-edit",emits:["complete"],setup(z,{expose:w,emit:h}){const i=u(!1),m=u(!1),f={company_id:"",company_name:"",logo:"",url:"",express_no:""},a=P({...f}),y=u(),C=k(()=>({company_name:[{required:!0,message:l("companyNamePlaceholder"),trigger:"blur"}]})),N=async d=>{if(m.value||!d)return;const e=a.company_id?T:$;await d.validate(async s=>{s&&(m.value=!0,e(a).then(g=>{m.value=!1,i.value=!1,h("complete")}).catch(()=>{m.value=!1}))})};return w({showDialog:i,setFormData:async(d=null)=>{if(Object.assign(a,f),m.value=!0,d){const e=await(await J(d.company_id)).data;e&&Object.keys(a).forEach(s=>{e[s]!=null&&(a[s]=e[s])})}m.value=!1}}),(d,e)=>{const s=I,p=M,g=O,D=R,v=j,E=q,U=L;return x(),V(E,{modelValue:i.value,"onUpdate:modelValue":e[6]||(e[6]=t=>i.value=t),title:a.company_id?o(l)("updateCompany"):o(l)("addCompany"),width:"500px",class:"diy-dialog-wrap","destroy-on-close":!0},{footer:r(()=>[c("span",S,[n(v,{onClick:e[4]||(e[4]=t=>i.value=!1)},{default:r(()=>[b(_(o(l)("cancel")),1)]),_:1}),n(v,{type:"primary",loading:m.value,onClick:e[5]||(e[5]=t=>N(y.value))},{default:r(()=>[b(_(o(l)("confirm")),1)]),_:1},8,["loading"])])]),default:r(()=>[B((x(),V(D,{model:a,"label-width":"120px",ref_key:"formRef",ref:y,rules:o(C),class:"page-form"},{default:r(()=>[n(p,{label:o(l)("companyName"),prop:"company_name"},{default:r(()=>[n(s,{modelValue:a.company_name,"onUpdate:modelValue":e[0]||(e[0]=t=>a.company_name=t),modelModifiers:{trim:!0},clearable:"",placeholder:o(l)("companyNamePlaceholder"),class:"input-width"},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),n(p,{label:o(l)("logo")},{default:r(()=>[n(g,{modelValue:a.logo,"onUpdate:modelValue":e[1]||(e[1]=t=>a.logo=t)},null,8,["modelValue"])]),_:1},8,["label"]),n(p,{label:o(l)("url")},{default:r(()=>[n(s,{modelValue:a.url,"onUpdate:modelValue":e[2]||(e[2]=t=>a.url=t),modelModifiers:{trim:!0},clearable:"",placeholder:o(l)("urlPlaceholder"),class:"input-width"},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),n(p,{label:o(l)("expressNo")},{default:r(()=>[c("div",null,[n(s,{modelValue:a.express_no,"onUpdate:modelValue":e[3]||(e[3]=t=>a.express_no=t),modelModifiers:{trim:!0},clearable:"",placeholder:o(l)("expressNoPlaceholder"),class:"input-width"},null,8,["modelValue","placeholder"]),c("p",K,_(o(l)("expressNoTips")),1)])]),_:1},8,["label"])]),_:1},8,["model","rules"])),[[U,m.value]])]),_:1},8,["modelValue","title"])}}});export{oe as _};