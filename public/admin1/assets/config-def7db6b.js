import{d as N,x as j,f as $,r as y,n as b,q as e,aS as B,a5 as K,R as x,h as V,c as O,a as s,u as t,t as i,P as I,s as L,w as l,e as o,i as f,J as W,K as z,a0 as F,az as Q,aA as G,L as J,E as H,U as X}from"./index-17984968.js";/* empty css                   *//* empty css                  *//* empty css                *//* empty css                       *//* empty css                 *//* empty css                */import Y from"./index-0ce1f7fc.js";import"./el-form-item-4ed993c7.js";/* empty css                 */import{g as Z,b as ee,e as te}from"./wechat-d86b9043.js";/* empty css                        */import"./index.vue_vue_type_style_index_0_lang-c5bcb8a9.js";/* empty css                  *//* empty css                   */import"./attachment-a816d3ef.js";import"./index.vue_vue_type_script_setup_true_lang-8693344a.js";/* empty css               *//* empty css                  *//* empty css                  *//* empty css                     *//* empty css                  *//* empty css                      *//* empty css                    *//* empty css                 */import"./el-tooltip-4ed993c7.js";/* empty css                 *//* empty css               *//* empty css               *//* empty css                    *//* empty css                         */import"./index.vue_vue_type_script_setup_true_lang-5615c67a.js";/* empty css                   */import"./index.vue_vue_type_script_setup_true_lang-8e50df98.js";/* empty css                */import"./_plugin-vue_export-helper-c27b6911.js";import"./sortable.esm-be94e56d.js";const oe={class:"main-container"},ae={class:"detail-head"},le=s("span",{class:"iconfont iconxiangzuojiantou !text-xs"},null,-1),se={class:"ml-[1px]"},ie=s("span",{class:"adorn"},"|",-1),re={class:"right"},ne={class:"panel-title !text-sm"},de={class:"form-tip"},pe={class:"panel-title !text-sm"},ce={class:"form-tip"},ue={class:"form-tip"},me={class:"panel-title !text-sm"},_e={class:"form-tip"},he={class:"form-tip"},fe={class:"form-tip"},ge={class:"form-tip"},be={class:"form-tip"},ve={class:"flex"},we={class:"panel-title !text-sm"},ye={class:"form-tip"},xe={class:"fixed-footer-wrap"},Ve={class:"fixed-footer"},nt=N({__name:"config",setup(ke){const k=j(),P=$(),S=k.meta.title,m=y(!0),n=b({wechat_name:"",wechat_original:"",app_id:"",app_secret:"",qr_code:"",token:"",encoding_aes_key:"",encryption_type:"not_encrypt"}),v=y(),C=b({wechat_name:[{required:!0,message:e("wechatNamePlaceholder"),trigger:"blur"}],wechat_original:[{required:!0,message:e("wechatOriginalPlaceholder"),trigger:"blur"}],app_id:[{required:!0,message:e("appidPlaceholder"),trigger:"blur"}],app_secret:[{required:!0,message:e("appSecretPlaceholder"),trigger:"blur"}],token:[{required:!0,message:e("tokenPlaceholder"),trigger:"blur"}],encoding_aes_key:[{required:!0,message:e("encodingAesKeyPlaceholder"),trigger:"blur"}]});Z().then(u=>{Object.assign(n,u.data),m.value=!1});const c=b({business_domain:"",js_secure_domain:"",serve_url:"",web_auth_domain:""});ee().then(u=>{Object.assign(c,u.data),m.value=!1});const{copy:E,isSupported:M,copied:w}=B(),_=u=>{if(!M.value){x({message:e("notSupportCopy"),type:"warning"});return}E(u)};K(w,()=>{w.value&&x({message:e("copySuccess"),type:"success"})});const T=async u=>{m.value||!u||await u.validate(async a=>{a&&(m.value=!0,te(n).then(()=>{m.value=!1}).catch(()=>{m.value=!1}))})};return(u,a)=>{const p=W,d=z,q=Y,h=F,g=Q,A=G,U=J,R=H,D=X;return V(),O("div",oe,[s("div",ae,[s("div",{class:"left",onClick:a[0]||(a[0]=r=>t(P).push({path:"/channel/wechat"}))},[le,s("span",se,i(t(e)("returnToPreviousPage")),1)]),ie,s("span",re,i(t(S)),1)]),I((V(),L(U,{model:n,"label-width":"150px",ref_key:"formRef",ref:v,rules:C,class:"page-form"},{default:l(()=>[o(h,{class:"box-card !border-none",shadow:"never"},{default:l(()=>[s("h3",ne,i(t(e)("wechatInfo")),1),o(d,{label:t(e)("wechatName"),prop:"wechat_name"},{default:l(()=>[o(p,{modelValue:n.wechat_name,"onUpdate:modelValue":a[1]||(a[1]=r=>n.wechat_name=r),modelModifiers:{trim:!0},placeholder:t(e)("wechatNamePlaceholder"),class:"input-width",clearable:""},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),o(d,{label:t(e)("wechatOriginal"),prop:"wechat_original"},{default:l(()=>[o(p,{modelValue:n.wechat_original,"onUpdate:modelValue":a[2]||(a[2]=r=>n.wechat_original=r),modelModifiers:{trim:!0},placeholder:t(e)("wechatOriginalPlaceholder"),class:"input-width",clearable:""},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),o(d,{label:t(e)("wechatQrcode"),prop:"qr_code"},{default:l(()=>[o(q,{modelValue:n.qr_code,"onUpdate:modelValue":a[3]||(a[3]=r=>n.qr_code=r)},null,8,["modelValue"]),s("div",de,i(t(e)("wechatQrcodeTips")),1)]),_:1},8,["label"])]),_:1}),o(h,{class:"box-card !border-none mt-[16px]",shadow:"never"},{default:l(()=>[s("h3",pe,i(t(e)("wechatDevelopInfo")),1),o(d,{label:t(e)("wechatAppid"),prop:"app_id"},{default:l(()=>[o(p,{modelValue:n.app_id,"onUpdate:modelValue":a[4]||(a[4]=r=>n.app_id=r),modelModifiers:{trim:!0},placeholder:t(e)("appidPlaceholder"),class:"input-width",clearable:""},null,8,["modelValue","placeholder"]),s("div",ce,i(t(e)("wechatAppidTips")),1)]),_:1},8,["label"]),o(d,{label:t(e)("wechatAppsecret"),prop:"app_secret"},{default:l(()=>[o(p,{modelValue:n.app_secret,"onUpdate:modelValue":a[5]||(a[5]=r=>n.app_secret=r),modelModifiers:{trim:!0},placeholder:t(e)("appSecretPlaceholder"),class:"input-width",clearable:""},null,8,["modelValue","placeholder"]),s("div",ue,i(t(e)("wechatAppsecretTips")),1)]),_:1},8,["label"])]),_:1}),o(h,{class:"box-card !border-none mt-[16px]",shadow:"never"},{default:l(()=>[s("h3",me,i(t(e)("theServerSetting")),1),o(d,{label:"URL"},{default:l(()=>[o(p,{"model-value":c.serve_url,placeholder:"Please input",class:"input-width",readonly:!0},{append:l(()=>[s("div",{class:"cursor-pointer",onClick:a[6]||(a[6]=r=>_(c.serve_url))},i(t(e)("copy")),1)]),_:1},8,["model-value"])]),_:1}),o(d,{label:"Token",prop:"token"},{default:l(()=>[o(p,{modelValue:n.token,"onUpdate:modelValue":a[7]||(a[7]=r=>n.token=r),modelModifiers:{trim:!0},placeholder:t(e)("tokenPlaceholder"),class:"input-width",maxlength:"32","show-word-limit":"",clearable:""},null,8,["modelValue","placeholder"]),s("div",_e,i(t(e)("tokenTips")),1)]),_:1}),o(d,{label:"EncodingAESKey",prop:"encoding_aes_key"},{default:l(()=>[o(p,{modelValue:n.encoding_aes_key,"onUpdate:modelValue":a[8]||(a[8]=r=>n.encoding_aes_key=r),modelModifiers:{trim:!0},placeholder:t(e)("encodingAesKeyPlaceholder"),class:"input-width",maxlength:"43","show-word-limit":"",clearable:""},null,8,["modelValue","placeholder"]),s("div",he,i(t(e)("encodingAESKeyTips")),1)]),_:1}),o(d,{label:t(e)("encryptionType"),prop:"encryption_type"},{default:l(()=>[o(A,{modelValue:n.encryption_type,"onUpdate:modelValue":a[9]||(a[9]=r=>n.encryption_type=r)},{default:l(()=>[o(g,{label:"not_encrypt"},{default:l(()=>[f(i(t(e)("cleartextMode")),1)]),_:1}),o(g,{label:"compatible"},{default:l(()=>[f(i(t(e)("compatibleMode")),1)]),_:1}),o(g,{label:"safe"},{default:l(()=>[f(i(t(e)("safeMode")),1)]),_:1})]),_:1},8,["modelValue"]),s("div",fe,i(t(e)("cleartextModeTips")),1),s("div",ge,i(t(e)("compatibleModeTips")),1),s("div",be,i(t(e)("safeModeTips")),1)]),_:1},8,["label"])]),_:1}),o(h,{class:"box-card !border-none mt-[16px]",shadow:"never"},{default:l(()=>[s("div",ve,[s("h3",we,i(t(e)("functionSetting")),1)]),o(d,{label:""},{default:l(()=>[s("div",ye,i(t(e)("functionSettingTips")),1)]),_:1}),o(d,{label:t(e)("businessDomain")},{default:l(()=>[o(p,{"model-value":c.business_domain,placeholder:"Please input",class:"input-width",readonly:!0},{append:l(()=>[s("div",{class:"cursor-pointer",onClick:a[10]||(a[10]=r=>_(c.business_domain))},i(t(e)("copy")),1)]),_:1},8,["model-value"])]),_:1},8,["label"]),o(d,{label:t(e)("jsSecureDomain")},{default:l(()=>[o(p,{"model-value":c.js_secure_domain,placeholder:"Please input",class:"input-width",readonly:!0},{append:l(()=>[s("div",{class:"cursor-pointer",onClick:a[11]||(a[11]=r=>_(c.business_domain))},i(t(e)("copy")),1)]),_:1},8,["model-value"])]),_:1},8,["label"]),o(d,{label:t(e)("webAuthDomain")},{default:l(()=>[o(p,{"model-value":c.web_auth_domain,placeholder:"Please input",class:"input-width",readonly:!0},{append:l(()=>[s("div",{class:"cursor-pointer",onClick:a[12]||(a[12]=r=>_(c.business_domain))},i(t(e)("copy")),1)]),_:1},8,["model-value"])]),_:1},8,["label"])]),_:1})]),_:1},8,["model","rules"])),[[D,m.value]]),s("div",xe,[s("div",Ve,[o(R,{type:"primary",loading:m.value,onClick:a[13]||(a[13]=r=>T(v.value))},{default:l(()=>[f(i(t(e)("save")),1)]),_:1},8,["loading"])])])])}}});export{nt as default};
