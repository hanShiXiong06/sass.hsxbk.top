import{d as P,r as c,n as q,l as B,q as a,h as y,s as h,w as i,a as w,e as n,i as b,t as p,u as o,R as C,K as R,L as U,M as I,E as M,X as N,Y as T}from"./index-6f32d09b.js";/* empty css                   *//* empty css                  *//* empty css                   *//* empty css                  *//* empty css                */import"./el-form-item-4ed993c7.js";/* empty css                 */import{e as $,a as j,g as L}from"./dict-d40e7387.js";const O={class:"form-tip"},z={class:"dialog-footer"},ee=P({__name:"edit",emits:["complete"],setup(A,{expose:V,emit:k}){const m=c(!1),s=c(!1),f={id:"",name:"",key:"",memo:""},t=q({...f}),_=c(),D=B(()=>({name:[{required:!0,message:a("namePlaceholder"),trigger:"blur"}],key:[{required:!0,message:a("keyPlaceholder"),trigger:"blur"},{validator:(d,e,l)=>{/^[a-zA-Z_]+$/.test(e)?l():l(new Error(a("keyFormatTips")))},trigger:"blur"}],data:[{required:!0,message:a("dataPlaceholder"),trigger:"blur"}]})),x=async d=>{if(s.value||!d)return;const e=t.id?$:j;await d.validate(async l=>{l&&(s.value=!0,e(t).then(g=>{s.value=!1,m.value=!1,k("complete")}).catch(()=>{s.value=!1}))})};return V({showDialog:m,setFormData:async(d=null)=>{if(Object.assign(t,f),s.value=!0,d){const e=await(await L(d.id)).data;e&&Object.keys(t).forEach(l=>{e[l]!=null&&(t[l]=e[l])})}s.value=!1}}),(d,e)=>{const l=R,u=U,g=I,v=M,E=N,F=T;return y(),h(E,{modelValue:m.value,"onUpdate:modelValue":e[5]||(e[5]=r=>m.value=r),title:t.id?o(a)("updateDict"):o(a)("addDict"),width:"480",class:"diy-dialog-wrap","destroy-on-close":!0},{footer:i(()=>[w("span",z,[n(v,{onClick:e[3]||(e[3]=r=>m.value=!1)},{default:i(()=>[b(p(o(a)("cancel")),1)]),_:1}),n(v,{type:"primary",loading:s.value,onClick:e[4]||(e[4]=r=>x(_.value))},{default:i(()=>[b(p(o(a)("confirm")),1)]),_:1},8,["loading"])])]),default:i(()=>[C((y(),h(g,{model:t,"label-width":"120px",ref_key:"formRef",ref:_,rules:o(D),class:"page-form"},{default:i(()=>[n(u,{label:o(a)("name"),prop:"name"},{default:i(()=>[n(l,{modelValue:t.name,"onUpdate:modelValue":e[0]||(e[0]=r=>t.name=r),modelModifiers:{trim:!0},clearable:"",maxlength:"40","show-word-limit":"",placeholder:o(a)("namePlaceholder"),class:"input-width"},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),n(u,{label:o(a)("key"),prop:"key"},{default:i(()=>[n(l,{modelValue:t.key,"onUpdate:modelValue":e[1]||(e[1]=r=>t.key=r),modelModifiers:{trim:!0},clearable:"",maxlength:"40","show-word-limit":"",placeholder:o(a)("keyPlaceholder"),class:"input-width"},null,8,["modelValue","placeholder"]),w("p",O,p(o(a)("keyFormatTips")),1)]),_:1},8,["label"]),n(u,{label:o(a)("memo")},{default:i(()=>[n(l,{modelValue:t.memo,"onUpdate:modelValue":e[2]||(e[2]=r=>t.memo=r),type:"textarea",clearable:"",placeholder:o(a)("memoPlaceholder"),class:"input-width"},null,8,["modelValue","placeholder"])]),_:1},8,["label"])]),_:1},8,["model","rules"])),[[F,s.value]])]),_:1},8,["modelValue","title"])}}});export{ee as _};
