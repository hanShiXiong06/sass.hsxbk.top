import{d as R,r as m,n as U,l as k,q as a,h as v,s as V,w as r,a as u,e as o,i as P,t as f,u as p,R as F,H as _,K as B,L as N,M as S,E as M,X as $,Y as j}from"./index-29db729d.js";/* empty css                   *//* empty css                  *//* empty css                   *//* empty css                  *//* empty css                     */import{_ as L}from"./index.vue_vue_type_style_index_0_lang-6393abb8.js";/* empty css                 *//* empty css                    */const O={class:"form-tip"},T={class:"input-width"},A={class:"input-width"},H={class:"input-width"},K={class:"dialog-footer"},oe=R({__name:"pay-alipay",emits:["complete"],setup(X,{expose:w,emit:C}){const s=m(!1),n=m(!0),g={type:"alipay",app_id:"",config:{app_secret_cert:"",app_public_cert_path:"",alipay_public_cert_path:"",alipay_root_cert_path:""},channel:"",status:0,is_default:0},e=U({...g}),y=m(),x=k(()=>({"config.app_id":[{required:!0,message:a("appIdPlaceholder"),trigger:"blur"}],"config.app_secret_cert":[{required:!0,message:a("appSecretCertPlaceholder"),trigger:"blur"}],"config.app_public_cert_path":[{required:!0,message:a("appPublicCertPathPlaceholder"),trigger:"blur"}],"config.alipay_public_cert_path":[{required:!0,message:a("alipayPublicCertPathPlaceholder"),trigger:"blur"}],"config.alipay_root_cert_path":[{required:!0,message:a("alipayRootCertPathPlaceholder"),trigger:"blur"}]})),D=async i=>{n.value||!i||await i.validate(async t=>{t&&(C("complete",e),s.value=!1)})};return w({showDialog:s,setFormData:async(i=null)=>{n.value=!0,Object.assign(e,g),i&&(Object.keys(e).forEach(t=>{i[t]!=null&&(e[t]=i[t])}),e.channel=i.redio_key.split("_")[0],e.status=Number(e.status)),n.value=!1},enableVerify:()=>{let i=!0;return(_.empty(e.config.app_id)||_.empty(e.config.app_secret_cert)||_.empty(e.config.app_public_cert_path)||_.empty(e.config.alipay_public_cert_path)||_.empty(e.config.alipay_root_cert_path))&&(i=!1),i}}),(i,t)=>{const h=B,c=N,d=L,q=S,b=M,E=$,I=j;return v(),V(E,{modelValue:s.value,"onUpdate:modelValue":t[7]||(t[7]=l=>s.value=l),title:p(a)("updateAlipay"),width:"550px","destroy-on-close":!0},{footer:r(()=>[u("span",K,[o(b,{onClick:t[5]||(t[5]=l=>s.value=!1)},{default:r(()=>[P(f(p(a)("cancel")),1)]),_:1}),o(b,{type:"primary",loading:n.value,onClick:t[6]||(t[6]=l=>D(y.value))},{default:r(()=>[P(f(p(a)("confirm")),1)]),_:1},8,["loading"])])]),default:r(()=>[F((v(),V(q,{model:e,"label-width":"110px",ref_key:"formRef",ref:y,rules:p(x),class:"page-form"},{default:r(()=>[o(c,{label:p(a)("appId"),prop:"config.app_id"},{default:r(()=>[o(h,{modelValue:e.config.app_id,"onUpdate:modelValue":t[0]||(t[0]=l=>e.config.app_id=l),modelModifiers:{trim:!0},placeholder:p(a)("appIdPlaceholder"),class:"input-width",maxlength:"32","show-word-limit":"",clearable:""},null,8,["modelValue","placeholder"]),u("div",O,f(p(a)("appIdTips")),1)]),_:1},8,["label"]),o(c,{label:p(a)("appSecretCert"),prop:"config.app_secret_cert"},{default:r(()=>[o(h,{modelValue:e.config.app_secret_cert,"onUpdate:modelValue":t[1]||(t[1]=l=>e.config.app_secret_cert=l),placeholder:p(a)("appSecretCertPlaceholder"),class:"input-width",type:"textarea",rows:"4",clearable:""},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),o(c,{label:p(a)("appPublicCertPath"),prop:"config.app_public_cert_path"},{default:r(()=>[u("div",T,[o(d,{modelValue:e.config.app_public_cert_path,"onUpdate:modelValue":t[2]||(t[2]=l=>e.config.app_public_cert_path=l),modelModifiers:{trim:!0},api:"sys/document/aliyun"},null,8,["modelValue"])])]),_:1},8,["label"]),o(c,{label:p(a)("alipayPublicCertPath"),prop:"config.alipay_public_cert_path"},{default:r(()=>[u("div",A,[o(d,{modelValue:e.config.alipay_public_cert_path,"onUpdate:modelValue":t[3]||(t[3]=l=>e.config.alipay_public_cert_path=l),api:"sys/document/aliyun"},null,8,["modelValue"])])]),_:1},8,["label"]),o(c,{label:p(a)("alipayRootCertPath"),prop:"config.alipay_root_cert_path"},{default:r(()=>[u("div",H,[o(d,{modelValue:e.config.alipay_root_cert_path,"onUpdate:modelValue":t[4]||(t[4]=l=>e.config.alipay_root_cert_path=l),api:"sys/document/aliyun"},null,8,["modelValue"])])]),_:1},8,["label"])]),_:1},8,["model","rules"])),[[I,n.value]])]),_:1},8,["modelValue","title"])}}});export{oe as default};
