import{d as D,x as $,r as f,n as q,q as a,aO as B,Q as I,U as V,h as k,c as K,R as T,s as A,w as s,e as l,a as r,t as u,u as t,i as g,bZ as N,K as F,L,a6 as M,E as O,M as Q,Y as W}from"./index-f7a01263.js";/* empty css                   *//* empty css                     */import{_ as Y}from"./index.vue_vue_type_style_index_0_lang-2d06a8fa.js";/* empty css                  *//* empty css                *//* empty css                 */import{b as Z,c as j,e as z}from"./wxoplatform-cad08c43.js";/* empty css                    */const G={class:"main-container"},H={class:"panel-title !text-sm"},J={class:"panel-title !text-sm"},X={class:"form-tip"},ee={class:"panel-title !text-sm"},ae={class:"panel-title !text-sm"},le={class:"input-width"},oe={class:"form-tip"},te={class:"fixed-footer-wrap"},se={class:"fixed-footer"},ge=D({__name:"setting",setup(de){$().meta.title;const _=f(!0),d=f({app_id:"",app_secret:"",token:"",aes_key:"",develop_app_id:"",develop_upload_private_key:""}),p=f({});Z().then(({data:i})=>{p.value=i}),j().then(({data:i})=>{d.value=i,_.value=!1});const y=f(),w=q({app_id:[{required:!0,message:a("appidPlaceholder"),trigger:"blur"}],app_secret:[{required:!0,message:a("appSecretPlaceholder"),trigger:"blur"}],token:[{required:!0,message:a("tokenPlaceholder"),trigger:"blur"}],aes_key:[{required:!0,message:a("aesKeyPlaceholder"),trigger:"blur"}]}),x=()=>{d.value.aes_key=N(43)},C=async i=>{_.value||!i||await i.validate(async e=>{e&&(_.value=!0,z(d.value).then(()=>{_.value=!1}).catch(()=>{_.value=!1}))})},{copy:P,isSupported:U,copied:b}=B(),c=i=>{if(!U.value){V({message:a("notSupportCopy"),type:"warning"});return}P(i)};return I(b,()=>{b.value&&V({message:a("copySuccess"),type:"success"})}),(i,e)=>{const m=F,n=L,v=M,h=O,S=Y,E=Q,R=W;return k(),K("div",G,[T((k(),A(E,{model:d.value,rules:w,"label-width":"150px",ref_key:"formRef",ref:y,class:"page-form"},{default:s(()=>[l(v,{class:"box-card !border-none",shadow:"never"},{default:s(()=>[r("h3",H,u(t(a)("oplatformSetting")),1),l(n,{label:"APPID",prop:"app_id"},{default:s(()=>[l(m,{modelValue:d.value.app_id,"onUpdate:modelValue":e[0]||(e[0]=o=>d.value.app_id=o),placeholder:t(a)("appidPlaceholder"),class:"input-width",clearable:""},null,8,["modelValue","placeholder"])]),_:1}),l(n,{label:"APPSECRET",prop:"app_secret"},{default:s(()=>[l(m,{modelValue:d.value.app_secret,"onUpdate:modelValue":e[1]||(e[1]=o=>d.value.app_secret=o),placeholder:t(a)("appSecretPlaceholder"),class:"input-width",clearable:""},null,8,["modelValue","placeholder"])]),_:1})]),_:1}),l(v,{class:"box-card mt-[15px] !border-none",shadow:"never"},{default:s(()=>[r("h3",J,u(t(a)("messagesReceiving")),1),l(n,{label:t(a)("empowerReceiveUrl")},{default:s(()=>[l(m,{modelValue:p.value.auth_serve_url,"onUpdate:modelValue":e[3]||(e[3]=o=>p.value.auth_serve_url=o),placeholder:"Please input",class:"!w-[500px]",readonly:!0},{append:s(()=>[r("div",{class:"cursor-pointer",onClick:e[2]||(e[2]=o=>c(p.value.auth_serve_url))},u(t(a)("copy")),1)]),_:1},8,["modelValue"])]),_:1},8,["label"]),l(n,{label:t(a)("messageReceiveUrl")},{default:s(()=>[l(m,{modelValue:p.value.message_serve_url,"onUpdate:modelValue":e[5]||(e[5]=o=>p.value.message_serve_url=o),placeholder:"Please input",class:"!w-[500px]",readonly:!0},{append:s(()=>[r("div",{class:"cursor-pointer",onClick:e[4]||(e[4]=o=>c(p.value.message_serve_url))},u(t(a)("copy")),1)]),_:1},8,["modelValue"])]),_:1},8,["label"]),l(n,{label:t(a)("messageValidationToken"),prop:"token"},{default:s(()=>[l(m,{modelValue:d.value.token,"onUpdate:modelValue":e[6]||(e[6]=o=>d.value.token=o),class:"input-width",clearable:""},null,8,["modelValue"])]),_:1},8,["label"]),l(n,{label:t(a)("messageDecryptKey"),prop:"aes_key"},{default:s(()=>[l(m,{modelValue:d.value.aes_key,"onUpdate:modelValue":e[8]||(e[8]=o=>d.value.aes_key=o),class:"input-width"},{append:s(()=>[r("div",{class:"cursor-pointer",onClick:e[7]||(e[7]=o=>c(d.value.aes_key))},u(t(a)("copy")),1)]),_:1},8,["modelValue"]),r("div",X,[g(u(t(a)("messageDecryptKeyTips")),1),l(h,{type:"primary",link:"",onClick:x},{default:s(()=>[g(u(t(a)("regenerate")),1)]),_:1})])]),_:1},8,["label"])]),_:1}),l(v,{class:"box-card mt-[15px] !border-none",shadow:"never"},{default:s(()=>[r("h3",ee,u(t(a)("domainSetting")),1),l(n,{label:t(a)("empowerStartDomain")},{default:s(()=>[l(m,{modelValue:p.value.auth_launch_domain,"onUpdate:modelValue":e[10]||(e[10]=o=>p.value.auth_launch_domain=o),placeholder:"Please input",class:"input-width",readonly:!0},{append:s(()=>[r("div",{class:"cursor-pointer",onClick:e[9]||(e[9]=o=>c(p.value.auth_launch_domain))},u(t(a)("copy")),1)]),_:1},8,["modelValue"])]),_:1},8,["label"]),l(n,{label:t(a)("wechatDomain")},{default:s(()=>[l(m,{modelValue:p.value.wechat_auth_domain,"onUpdate:modelValue":e[12]||(e[12]=o=>p.value.wechat_auth_domain=o),placeholder:"Please input",class:"input-width",readonly:!0},{append:s(()=>[r("div",{class:"cursor-pointer",onClick:e[11]||(e[11]=o=>c(p.value.wechat_auth_domain))},u(t(a)("copy")),1)]),_:1},8,["modelValue"])]),_:1},8,["label"])]),_:1}),l(v,{class:"box-card mt-[15px] !border-none",shadow:"never"},{default:s(()=>[r("h3",ae,u(t(a)("developerWeappUpload")),1),l(n,{label:t(a)("developAppid"),prop:"develop_app_id"},{default:s(()=>[l(m,{modelValue:d.value.develop_app_id,"onUpdate:modelValue":e[13]||(e[13]=o=>d.value.develop_app_id=o),placeholder:t(a)("developAppidPlaceholder"),class:"input-width",clearable:""},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),l(n,{label:t(a)("uploadKey"),prop:"develop_upload_private_key"},{default:s(()=>[r("div",le,[l(S,{modelValue:d.value.develop_upload_private_key,"onUpdate:modelValue":e[14]||(e[14]=o=>d.value.develop_upload_private_key=o),api:"sys/document/wechat"},null,8,["modelValue"])]),r("div",oe,u(t(a)("uploadIpTips"))+u(p.value.upload_ip),1)]),_:1},8,["label"])]),_:1})]),_:1},8,["model","rules"])),[[R,_.value]]),r("div",te,[r("div",se,[l(h,{type:"primary",loading:_.value,onClick:e[15]||(e[15]=o=>C(y.value))},{default:s(()=>[g(u(t(a)("save")),1)]),_:1},8,["loading"])])])])}}});export{ge as default};
