import{d as E,r as d,n as V,l as k,h as p,s as v,w as a,a as l,e as i,i as F,t as n,u as s,q as o,P as B,K as C,L as N,E as R,a1 as T,U as j}from"./index-17984968.js";/* empty css                   *//* empty css                  *//* empty css                   *//* empty css                  *//* empty css                */import"./el-form-item-4ed993c7.js";const I={class:"input-width"},K={class:"input-width"},L={class:"input-width"},O={class:"input-width"},U={class:"dialog-footer"},M=E({__name:"notice-records-info",setup(q,{expose:g}){const r=d(!1),_=d(!0),u={create_time:0,message_data:"",message_key:"",message_type:"",name:"",nickname:"",mobile:"",sms_type_name:""},e=V({...u}),b=d(),h=k(()=>({}));return g({showDialog:r,setFormData:async(m=null)=>{_.value=!0,Object.assign(e,u),m&&Object.keys(e).forEach(t=>{m[t]!=null&&(e[t]=m[t])}),_.value=!1}}),(m,t)=>{const c=C,y=N,w=R,D=T,x=j;return p(),v(D,{modelValue:r.value,"onUpdate:modelValue":t[1]||(t[1]=f=>r.value=f),title:s(o)("messageInfo"),width:"550px","destroy-on-close":!0},{footer:a(()=>[l("span",U,[i(w,{type:"primary",onClick:t[0]||(t[0]=f=>r.value=!1)},{default:a(()=>[F(n(s(o)("confirm")),1)]),_:1})])]),default:a(()=>[B((p(),v(y,{model:e,"label-width":"110px",ref_key:"formRef",ref:b,rules:s(h),class:"page-form"},{default:a(()=>[i(c,{label:s(o)("messageKey")},{default:a(()=>[l("div",I,n(e.name),1)]),_:1},8,["label"]),i(c,{label:s(o)("smsType")},{default:a(()=>[l("div",K,n(e.sms_type_name),1)]),_:1},8,["label"]),i(c,{label:s(o)("receiver")},{default:a(()=>[l("div",L,n(e.mobile),1)]),_:1},8,["label"]),i(c,{label:s(o)("createTime")},{default:a(()=>[l("div",O,n(e.create_time),1)]),_:1},8,["label"])]),_:1},8,["model","rules"])),[[x,_.value]])]),_:1},8,["modelValue","title"])}}});export{M as _};