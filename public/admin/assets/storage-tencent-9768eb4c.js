import{d as S,r as f,n as q,l as x,q as l,h as y,s as h,w as s,a as k,e as o,i as _,t as p,u as t,R,c9 as F,ca as C,at as A,au as I,L as N,K as j,M as L,E as O,X as T,Y as $}from"./index-2a89d409.js";/* empty css                   *//* empty css                  *//* empty css                   *//* empty css                  *//* empty css                *//* empty css                 */import"./el-form-item-4ed993c7.js";/* empty css                       *//* empty css                 */const G={class:"form-tip"},M={class:"dialog-footer"},oe=S({__name:"storage-tencent",emits:["complete"],setup(X,{expose:w,emit:P}){const c=f(!1),d=f(!0),g={storage_type:"",bucket:"",access_key:"",secret_key:"",domain:"",is_use:"",region:""},a=q({...g}),b=f(),D=x(()=>({bucket:[{required:!0,message:l("tencentBucketPlaceholder"),trigger:"blur"}],access_key:[{required:!0,message:l("tencentAccessKeyPlaceholder"),trigger:"blur"}],secret_key:[{required:!0,message:l("tencentSecretKeyPlaceholder"),trigger:"blur"}],region:[{required:!0,message:l("regionPlaceholder"),trigger:"blur"}],domain:[{required:!0,message:l("domainPlaceholder"),trigger:"blur"}]})),U=async i=>{d.value||!i||await i.validate(async e=>{e&&(d.value=!0,F(a).then(v=>{d.value=!1,c.value=!1,P("complete")}).catch(()=>{d.value=!1}))})};return w({showDialog:c,setFormData:async(i=null)=>{if(d.value=!0,Object.assign(a,g),i){const e=await(await C(i.storage_type)).data;Object.keys(a).forEach(n=>{e[n]!=null&&(a[n]=e[n]),e.params[n]!=null&&(a[n]=e.params[n].value)})}d.value=!1}}),(i,e)=>{const n=A,v=I,u=N,m=j,B=L,V=O,E=T,K=$;return y(),h(E,{modelValue:c.value,"onUpdate:modelValue":e[8]||(e[8]=r=>c.value=r),title:t(l)("tencentStorage"),width:"580px","destroy-on-close":!0},{footer:s(()=>[k("span",M,[o(V,{onClick:e[6]||(e[6]=r=>c.value=!1)},{default:s(()=>[_(p(t(l)("cancel")),1)]),_:1}),o(V,{type:"primary",loading:d.value,onClick:e[7]||(e[7]=r=>U(b.value))},{default:s(()=>[_(p(t(l)("confirm")),1)]),_:1},8,["loading"])])]),default:s(()=>[R((y(),h(B,{model:a,"label-width":"140px",ref_key:"formRef",ref:b,rules:t(D),class:"page-form"},{default:s(()=>[o(u,{label:t(l)("isUse")},{default:s(()=>[o(v,{modelValue:a.is_use,"onUpdate:modelValue":e[0]||(e[0]=r=>a.is_use=r)},{default:s(()=>[o(n,{label:"1"},{default:s(()=>[_(p(t(l)("startUsing")),1)]),_:1}),o(n,{label:"0"},{default:s(()=>[_(p(t(l)("statusDeactivate")),1)]),_:1})]),_:1},8,["modelValue"])]),_:1},8,["label"]),o(u,{label:t(l)("tencentBucket"),prop:"bucket"},{default:s(()=>[o(m,{modelValue:a.bucket,"onUpdate:modelValue":e[1]||(e[1]=r=>a.bucket=r),placeholder:t(l)("tencentBucketPlaceholder"),class:"input-width","show-word-limit":"",clearable:""},null,8,["modelValue","placeholder"]),k("div",G,p(t(l)("tencentBucketTips")),1)]),_:1},8,["label"]),o(u,{label:t(l)("tencentAccessKey"),prop:"access_key"},{default:s(()=>[o(m,{modelValue:a.access_key,"onUpdate:modelValue":e[2]||(e[2]=r=>a.access_key=r),placeholder:t(l)("tencentAccessKeyPlaceholder"),class:"input-width",clearable:""},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),o(u,{label:t(l)("tencentSecretKey"),prop:"secret_key"},{default:s(()=>[o(m,{modelValue:a.secret_key,"onUpdate:modelValue":e[3]||(e[3]=r=>a.secret_key=r),placeholder:t(l)("tencentSecretKeyPlaceholder"),class:"input-width",clearable:""},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),o(u,{label:t(l)("region"),prop:"region"},{default:s(()=>[o(m,{modelValue:a.region,"onUpdate:modelValue":e[4]||(e[4]=r=>a.region=r),placeholder:t(l)("regionPlaceholder"),class:"input-width",clearable:""},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),o(u,{label:t(l)("domain"),prop:"domain"},{default:s(()=>[o(m,{modelValue:a.domain,"onUpdate:modelValue":e[5]||(e[5]=r=>a.domain=r),placeholder:t(l)("domainPlaceholder"),class:"input-width",clearable:""},null,8,["modelValue","placeholder"])]),_:1},8,["label"])]),_:1},8,["model","rules"])),[[K,d.value]])]),_:1},8,["modelValue","title"])}}});export{oe as default};
