import{d as K,r as f,n as S,l as x,q as a,h as V,s as k,w as r,a as h,e as o,i as _,t as m,u as t,R,c9 as F,ca as C,at as A,au as I,L as N,K as j,M as L,E as O,X as T,Y as $}from"./index-37fee5a0.js";/* empty css                   *//* empty css                  *//* empty css                   *//* empty css                  *//* empty css                *//* empty css                 */import"./el-form-item-4ed993c7.js";/* empty css                       *//* empty css                 */const G={class:"form-tip"},M={class:"dialog-footer"},oe=K({__name:"storage-qiniu",emits:["complete"],setup(X,{expose:q,emit:w}){const d=f(!1),u=f(!0),g={storage_type:"",bucket:"",access_key:"",secret_key:"",domain:"",is_use:""},l=S({...g}),b=f(),D=x(()=>({bucket:[{required:!0,message:a("qiniuBucketPlaceholder"),trigger:"blur"}],access_key:[{required:!0,message:a("qiniuAccessKeyPlaceholder"),trigger:"blur"}],secret_key:[{required:!0,message:a("qiniuSecretKeyPlaceholder"),trigger:"blur"}],endpoint:[{required:!0,message:a("aliEndpointPlaceholder"),trigger:"blur"}],domain:[{required:!0,message:a("domainPlaceholder"),trigger:"blur"}]})),E=async n=>{u.value||!n||await n.validate(async e=>{e&&(u.value=!0,F(l).then(v=>{u.value=!1,d.value=!1,w("complete")}).catch(()=>{u.value=!1}))})};return q({showDialog:d,setFormData:async(n=null)=>{if(u.value=!0,Object.assign(l,g),n){const e=await(await C(n.storage_type)).data;Object.keys(l).forEach(i=>{e[i]!=null&&(l[i]=e[i]),e.params[i]!=null&&(l[i]=e.params[i].value)})}u.value=!1}}),(n,e)=>{const i=A,v=I,c=N,p=j,P=L,y=O,B=T,U=$;return V(),k(B,{modelValue:d.value,"onUpdate:modelValue":e[7]||(e[7]=s=>d.value=s),title:t(a)("qiniuStorage"),width:"580px","destroy-on-close":!0},{footer:r(()=>[h("span",M,[o(y,{onClick:e[5]||(e[5]=s=>d.value=!1)},{default:r(()=>[_(m(t(a)("cancel")),1)]),_:1}),o(y,{type:"primary",loading:u.value,onClick:e[6]||(e[6]=s=>E(b.value))},{default:r(()=>[_(m(t(a)("confirm")),1)]),_:1},8,["loading"])])]),default:r(()=>[R((V(),k(P,{model:l,"label-width":"140px",ref_key:"formRef",ref:b,rules:t(D),class:"page-form"},{default:r(()=>[o(c,{label:t(a)("isUse")},{default:r(()=>[o(v,{modelValue:l.is_use,"onUpdate:modelValue":e[0]||(e[0]=s=>l.is_use=s)},{default:r(()=>[o(i,{label:"1"},{default:r(()=>[_(m(t(a)("startUsing")),1)]),_:1}),o(i,{label:"0"},{default:r(()=>[_(m(t(a)("statusDeactivate")),1)]),_:1})]),_:1},8,["modelValue"])]),_:1},8,["label"]),o(c,{label:t(a)("qiniuBucket"),prop:"bucket"},{default:r(()=>[o(p,{modelValue:l.bucket,"onUpdate:modelValue":e[1]||(e[1]=s=>l.bucket=s),placeholder:t(a)("qiniuBucketPlaceholder"),class:"input-width","show-word-limit":"",clearable:""},null,8,["modelValue","placeholder"]),h("div",G,m(t(a)("qiniuBucketTips")),1)]),_:1},8,["label"]),o(c,{label:t(a)("qiniuAccessKey"),prop:"access_key"},{default:r(()=>[o(p,{modelValue:l.access_key,"onUpdate:modelValue":e[2]||(e[2]=s=>l.access_key=s),placeholder:t(a)("qiniuAccessKeyPlaceholder"),class:"input-width",clearable:""},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),o(c,{label:t(a)("qiniuSecretKey"),prop:"secret_key"},{default:r(()=>[o(p,{modelValue:l.secret_key,"onUpdate:modelValue":e[3]||(e[3]=s=>l.secret_key=s),placeholder:t(a)("qiniuSecretKeyPlaceholder"),class:"input-width",clearable:""},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),o(c,{label:t(a)("domain"),prop:"domain"},{default:r(()=>[o(p,{modelValue:l.domain,"onUpdate:modelValue":e[4]||(e[4]=s=>l.domain=s),placeholder:t(a)("domainPlaceholder"),class:"input-width",clearable:""},null,8,["modelValue","placeholder"])]),_:1},8,["label"])]),_:1},8,["model","rules"])),[[U,u.value]])]),_:1},8,["modelValue","title"])}}});export{oe as default};
