import{d as x,r as _,n as P,l as R,q as a,h as V,s as h,w as o,a as F,e as s,i as p,t as c,u as t,R as q,at as B,au as C,L as M,K as A,M as I,E as N,X as j,Y as L}from"./index-5a756a51.js";/* empty css                   *//* empty css                  *//* empty css                   *//* empty css                  *//* empty css                *//* empty css                 */import"./el-form-item-4ed993c7.js";/* empty css                       *//* empty css                 */import{b as O,g as $}from"./notice-cb7cb671.js";const G={class:"dialog-footer"},oe=x({__name:"sms-ali",emits:["complete"],setup(T,{expose:w,emit:k}){const u=_(!1),n=_(!0),g={sms_type:"",sign:"",app_key:"",secret_key:"",is_use:""},l=P({...g}),v=_(),S=R(()=>({sign:[{required:!0,message:a("aliSignPlaceholder"),trigger:"blur"}],app_key:[{required:!0,message:a("aliAppKeyPlaceholder"),trigger:"blur"}],secret_key:[{required:!0,message:a("aliSecretKeyPlaceholder"),trigger:"blur"}]})),D=async d=>{n.value||!d||await d.validate(async e=>{e&&(n.value=!0,O(l).then(y=>{n.value=!1,u.value=!1,k("complete")}).catch(()=>{n.value=!1}))})};return w({showDialog:u,setFormData:async(d=null)=>{if(n.value=!0,Object.assign(l,g),d){const e=await(await $(d.sms_type)).data;Object.keys(l).forEach(i=>{e[i]!=null&&(l[i]=e[i]),e.params[i]!=null&&(l[i]=e.params[i].value)})}n.value=!1}}),(d,e)=>{const i=B,y=C,m=M,f=A,E=I,b=N,K=j,U=L;return V(),h(K,{modelValue:u.value,"onUpdate:modelValue":e[6]||(e[6]=r=>u.value=r),title:t(a)("aliSms"),width:"580px","destroy-on-close":!0},{footer:o(()=>[F("span",G,[s(b,{onClick:e[4]||(e[4]=r=>u.value=!1)},{default:o(()=>[p(c(t(a)("cancel")),1)]),_:1}),s(b,{type:"primary",loading:n.value,onClick:e[5]||(e[5]=r=>D(v.value))},{default:o(()=>[p(c(t(a)("confirm")),1)]),_:1},8,["loading"])])]),default:o(()=>[q((V(),h(E,{model:l,"label-width":"140px",ref_key:"formRef",ref:v,rules:t(S),class:"page-form"},{default:o(()=>[s(m,{label:t(a)("isUse")},{default:o(()=>[s(y,{modelValue:l.is_use,"onUpdate:modelValue":e[0]||(e[0]=r=>l.is_use=r)},{default:o(()=>[s(i,{label:1},{default:o(()=>[p(c(t(a)("startUsing")),1)]),_:1}),s(i,{label:0},{default:o(()=>[p(c(t(a)("statusDeactivate")),1)]),_:1})]),_:1},8,["modelValue"])]),_:1},8,["label"]),s(m,{label:t(a)("aliSign"),prop:"sign"},{default:o(()=>[s(f,{modelValue:l.sign,"onUpdate:modelValue":e[1]||(e[1]=r=>l.sign=r),modelModifiers:{trim:!0},placeholder:t(a)("aliSignPlaceholder"),class:"input-width","show-word-limit":"",clearable:""},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),s(m,{label:t(a)("aliAppKey"),prop:"app_key"},{default:o(()=>[s(f,{modelValue:l.app_key,"onUpdate:modelValue":e[2]||(e[2]=r=>l.app_key=r),modelModifiers:{trim:!0},placeholder:t(a)("aliAppKeyPlaceholder"),class:"input-width",clearable:""},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),s(m,{label:t(a)("aliSecretKey"),prop:"secret_key"},{default:o(()=>[s(f,{modelValue:l.secret_key,"onUpdate:modelValue":e[3]||(e[3]=r=>l.secret_key=r),modelModifiers:{trim:!0},placeholder:t(a)("aliSecretKeyPlaceholder"),class:"input-width",clearable:""},null,8,["modelValue","placeholder"])]),_:1},8,["label"])]),_:1},8,["model","rules"])),[[U,n.value]])]),_:1},8,["modelValue","title"])}}});export{oe as default};
