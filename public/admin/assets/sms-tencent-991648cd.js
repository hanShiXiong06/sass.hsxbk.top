import{d as k,r as f,n as x,l as R,q as t,h,s as w,w as s,a as q,e as o,i as p,t as _,u as a,R as F,at as M,au as B,L as C,K,M as A,E as N,X as j,Y as L}from"./index-6f32d09b.js";/* empty css                   *//* empty css                  *//* empty css                   *//* empty css                  *//* empty css                *//* empty css                 */import"./el-form-item-4ed993c7.js";/* empty css                       *//* empty css                 */import{b as O,g as $}from"./notice-b28bde60.js";const G={class:"dialog-footer"},oe=k({__name:"sms-tencent",emits:["complete"],setup(T,{expose:y,emit:S}){const u=f(!1),i=f(!0),g={sms_type:"",sign:"",access_key:"",secret_key:"",is_use:"",app_id:"",secret_id:""},l=x({...g}),b=f(),D=R(()=>({sign:[{required:!0,message:t("tencentSignPlaceholder"),trigger:"blur"}],app_id:[{required:!0,message:t("tencentAppIdPlaceholder"),trigger:"blur"}],secret_id:[{required:!0,message:t("tencentSecretIdPlaceholder"),trigger:"blur"}],secret_key:[{required:!0,message:t("tencentSecretKeyPlaceholder"),trigger:"blur"}]})),I=async d=>{i.value||!d||await d.validate(async e=>{e&&(i.value=!0,O(l).then(v=>{i.value=!1,u.value=!1,S("complete")}).catch(()=>{i.value=!1}))})};return y({showDialog:u,setFormData:async(d=null)=>{if(i.value=!0,Object.assign(l,g),d){const e=await(await $(d.sms_type)).data;Object.keys(l).forEach(n=>{e[n]!=null&&(l[n]=e[n]),e.params[n]!=null&&(l[n]=e.params[n].value)})}i.value=!1}}),(d,e)=>{const n=M,v=B,c=C,m=K,E=A,V=N,P=j,U=L;return h(),w(P,{modelValue:u.value,"onUpdate:modelValue":e[7]||(e[7]=r=>u.value=r),title:a(t)("tencentSms"),width:"580px","destroy-on-close":!0},{footer:s(()=>[q("span",G,[o(V,{onClick:e[5]||(e[5]=r=>u.value=!1)},{default:s(()=>[p(_(a(t)("cancel")),1)]),_:1}),o(V,{type:"primary",loading:i.value,onClick:e[6]||(e[6]=r=>I(b.value))},{default:s(()=>[p(_(a(t)("confirm")),1)]),_:1},8,["loading"])])]),default:s(()=>[F((h(),w(E,{model:l,"label-width":"140px",ref_key:"formRef",ref:b,rules:a(D),class:"page-form"},{default:s(()=>[o(c,{label:a(t)("isUse")},{default:s(()=>[o(v,{modelValue:l.is_use,"onUpdate:modelValue":e[0]||(e[0]=r=>l.is_use=r)},{default:s(()=>[o(n,{label:1},{default:s(()=>[p(_(a(t)("startUsing")),1)]),_:1}),o(n,{label:0},{default:s(()=>[p(_(a(t)("statusDeactivate")),1)]),_:1})]),_:1},8,["modelValue"])]),_:1},8,["label"]),o(c,{label:a(t)("tencentSign"),prop:"sign"},{default:s(()=>[o(m,{modelValue:l.sign,"onUpdate:modelValue":e[1]||(e[1]=r=>l.sign=r),modelModifiers:{trim:!0},placeholder:a(t)("tencentSignPlaceholder"),class:"input-width","show-word-limit":"",clearable:""},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),o(c,{label:a(t)("tencentAppId"),prop:"app_id"},{default:s(()=>[o(m,{modelValue:l.app_id,"onUpdate:modelValue":e[2]||(e[2]=r=>l.app_id=r),modelModifiers:{trim:!0},placeholder:a(t)("tencentAppIdPlaceholder"),class:"input-width","show-word-limit":"",clearable:""},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),o(c,{label:a(t)("tencentSecretId"),prop:"secret_id"},{default:s(()=>[o(m,{modelValue:l.secret_id,"onUpdate:modelValue":e[3]||(e[3]=r=>l.secret_id=r),modelModifiers:{trim:!0},placeholder:a(t)("tencentSecretIdPlaceholder"),class:"input-width",clearable:""},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),o(c,{label:a(t)("tencentSecretKey"),prop:"secret_key"},{default:s(()=>[o(m,{modelValue:l.secret_key,"onUpdate:modelValue":e[4]||(e[4]=r=>l.secret_key=r),modelModifiers:{trim:!0},placeholder:a(t)("tencentSecretKeyPlaceholder"),class:"input-width",clearable:""},null,8,["modelValue","placeholder"])]),_:1},8,["label"])]),_:1},8,["model","rules"])),[[U,i.value]])]),_:1},8,["modelValue","title"])}}});export{oe as default};
