import{O as d,d as F,r as p,n as R,l as k,q as n,h,s as C,w as c,a as B,e as m,br as y,i as E,t as b,u as r,R as S,K as $,L as I,M as L,E as N,X as O,Y as j}from"./index-99f00cf3.js";/* empty css                   *//* empty css                  *//* empty css                   *//* empty css                  *//* empty css                */import"./el-form-item-4ed993c7.js";/* empty css                 */function ee(t){return d.get("qf_notice/usercat",{params:t})}function P(t){return d.get(`qf_notice/usercat/${t}`)}function K(t){return d.post("qf_notice/usercat",t,{showErrorMessage:!0,showSuccessMessage:!0})}function T(t){return d.put(`qf_notice/usercat/${t.id}`,t,{showErrorMessage:!0,showSuccessMessage:!0})}function te(t){return d.delete(`qf_notice/usercat/${t}`,{showErrorMessage:!0,showSuccessMessage:!0})}const X={class:"dialog-footer"},ae=F({__name:"usercat-edit",emits:["complete"],setup(t,{expose:U,emit:V}){let a=p(!1);const o=p(!1),_={id:"",name:""},s=R({..._}),g=p(),q=k(()=>({name:[{required:!0,message:n("namePlaceholder"),trigger:"blur"}]})),D=async i=>{if(o.value||!i)return;let e=s.id?T:K;await i.validate(async l=>{l&&(o.value=!0,e(s).then(f=>{o.value=!1,a.value=!1,V("complete")}).catch(f=>{o.value=!1}))})};return U({showDialog:a,setFormData:async(i=null)=>{if(Object.assign(s,_),o.value=!0,i){const e=await(await P(i.id)).data;e&&Object.keys(s).forEach(l=>{e[l]!=null&&(s[l]=e[l])})}o.value=!1}}),(i,e)=>{const l=$,v=I,f=L,w=N,M=O,x=j;return h(),C(M,{modelValue:r(a),"onUpdate:modelValue":e[3]||(e[3]=u=>y(a)?a.value=u:a=u),title:s.id?r(n)("updateUserCat"):r(n)("addUserCat"),width:"50%",class:"diy-dialog-wrap","destroy-on-close":!0},{footer:c(()=>[B("span",X,[m(w,{onClick:e[1]||(e[1]=u=>y(a)?a.value=!1:a=!1)},{default:c(()=>[E(b(r(n)("cancel")),1)]),_:1}),m(w,{type:"primary",loading:o.value,onClick:e[2]||(e[2]=u=>D(g.value))},{default:c(()=>[E(b(r(n)("confirm")),1)]),_:1},8,["loading"])])]),default:c(()=>[S((h(),C(f,{model:s,"label-width":"120px",ref_key:"formRef",ref:g,rules:r(q),class:"page-form"},{default:c(()=>[m(v,{label:r(n)("name")},{default:c(()=>[m(l,{modelValue:s.name,"onUpdate:modelValue":e[0]||(e[0]=u=>s.name=u),clearable:"",placeholder:r(n)("namePlaceholder"),class:"input-width"},null,8,["modelValue","placeholder"])]),_:1},8,["label"])]),_:1},8,["model","rules"])),[[x,o.value]])]),_:1},8,["modelValue","title"])}}});export{ae as _,te as d,ee as g};
