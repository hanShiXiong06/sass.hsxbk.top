import{d as A,x as B,f as N,r as b,n as T,aO as R,Q as $,U as v,q as e,h,c as D,e as a,w as s,u as l,aP as O,R as Q,s as I,a as p,t as r,i as g,aQ as L,a6 as W,K as F,L as M,M as j,E as H,Y}from"./index-f7a01263.js";/* empty css                   *//* empty css                  *//* empty css                     */import{_ as z}from"./index.vue_vue_type_style_index_0_lang-2d06a8fa.js";import G from"./index-e6c6f5a6.js";/* empty css                 *//* empty css                *//* empty css                   *//* empty css                       */import{g as J,a as X,s as Z}from"./aliapp-230698d8.js";/* empty css                    *//* empty css                        */import"./index.vue_vue_type_style_index_0_lang-0595c85c.js";/* empty css                  *//* empty css                   */import"./attachment-893e498c.js";import"./index.vue_vue_type_script_setup_true_lang-473c7dda.js";/* empty css               *//* empty css                  *//* empty css                  *//* empty css                     *//* empty css                  *//* empty css                      *//* empty css                    */import"./el-tooltip-4ed993c7.js";/* empty css                 *//* empty css               *//* empty css               *//* empty css                    */import"./el-dropdown-item-4ed993c7.js";import"./index.vue_vue_type_script_setup_true_lang-a36ce1b6.js";/* empty css                   */import"./index.vue_vue_type_script_setup_true_lang-73e73d1c.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./sortable.esm-be94e56d.js";const ee={class:"main-container"},ae={class:"panel-title !text-sm"},le={class:"form-tip"},te={class:"panel-title !text-sm"},oe={class:"input-width"},ie={class:"form-tip"},se={class:"input-width"},pe={class:"form-tip"},re={class:"input-width"},ne={class:"form-tip"},de={class:"panel-title !text-sm"},ue={class:"panel-title !text-sm"},me={class:"fixed-footer-wrap"},ce={class:"fixed-footer"},Je=A({__name:"config",setup(_e){const w=B();N();const V=w.meta.title,u=b(!0),o=T({name:"",qrcode:"",private_key:"",app_id:"",aes_key:"",public_key_crt:"",alipay_public_key_crt:"",alipay_with_crt:"",request_url:""}),f=b();J().then(n=>{Object.assign(o,n.data),u.value=!1}),X().then(n=>{o.request_url=n.data.domain});const{copy:k,isSupported:x,copied:y}=R(),C=n=>{if(!x.value){v({message:e("notSupportCopy"),type:"warning"});return}k(n)};$(y,()=>{y.value&&v({message:e("copySuccess"),type:"success"})});const E=async n=>{u.value||!n||await n.validate(async t=>{t&&(u.value=!0,Z(o).then(()=>{u.value=!1}).catch(()=>{u.value=!1}))})};return(n,t)=>{const S=L,m=W,c=F,d=M,U=G,_=z,q=j,P=H,K=Y;return h(),D("div",ee,[a(m,{class:"card !border-none",shadow:"never"},{default:s(()=>[a(S,{content:l(V),icon:l(O),onBack:t[0]||(t[0]=i=>n.$router.back())},null,8,["content","icon"])]),_:1}),Q((h(),I(q,{class:"page-form mt-[15px]",model:o,"label-width":"150px",ref_key:"formRef",ref:f},{default:s(()=>[a(m,{class:"box-card !border-none",shadow:"never"},{default:s(()=>[p("h3",ae,r(l(e)("aliappSet")),1),a(d,{label:l(e)("aliappName")},{default:s(()=>[a(c,{modelValue:o.name,"onUpdate:modelValue":t[1]||(t[1]=i=>o.name=i),placeholder:l(e)("aliappNamePlaceholder"),class:"input-width",clearable:""},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),a(d,{label:l(e)("aliappQrcode")},{default:s(()=>[a(U,{modelValue:o.qrcode,"onUpdate:modelValue":t[2]||(t[2]=i=>o.qrcode=i)},null,8,["modelValue"]),p("div",le,r(l(e)("aliappQrcodeTips")),1)]),_:1},8,["label"])]),_:1}),a(m,{class:"box-card !border-none mt-[15px]",shadow:"never"},{default:s(()=>[p("h3",te,r(l(e)("aliappDevelopInfo")),1),a(d,{label:l(e)("aliappOriginal")},{default:s(()=>[a(c,{modelValue:o.private_key,"onUpdate:modelValue":t[3]||(t[3]=i=>o.private_key=i),placeholder:l(e)("aliappOriginalPlaceholder"),class:"input-width",clearable:""},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),a(d,{label:l(e)("aliappAppid")},{default:s(()=>[a(c,{modelValue:o.app_id,"onUpdate:modelValue":t[4]||(t[4]=i=>o.app_id=i),placeholder:l(e)("appidPlaceholder"),class:"input-width",clearable:""},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),a(d,{label:l(e)("countersignType")},{default:s(()=>[g(r(l(e)("certificate")),1)]),_:1},8,["label"]),a(d,{label:l(e)("publicKey")},{default:s(()=>[p("div",oe,[a(_,{modelValue:o.public_key_crt,"onUpdate:modelValue":t[5]||(t[5]=i=>o.public_key_crt=i),api:"sys/document/aliyun"},null,8,["modelValue"])]),p("div",ie,r(l(e)("publicKeyTips")),1)]),_:1},8,["label"]),a(d,{label:l(e)("alipayPublicKey")},{default:s(()=>[p("div",se,[a(_,{modelValue:o.alipay_public_key_crt,"onUpdate:modelValue":t[6]||(t[6]=i=>o.alipay_public_key_crt=i),api:"sys/document/aliyun"},null,8,["modelValue"])]),p("div",pe,r(l(e)("alipayPublicKeyTips")),1)]),_:1},8,["label"]),a(d,{label:l(e)("alipayWithCrt")},{default:s(()=>[p("div",re,[a(_,{modelValue:o.alipay_with_crt,"onUpdate:modelValue":t[7]||(t[7]=i=>o.alipay_with_crt=i),api:"sys/document/aliyun"},null,8,["modelValue"])]),p("div",ne,r(l(e)("alipayWithCrtTips")),1)]),_:1},8,["label"])]),_:1}),a(m,{class:"box-card !border-none mt-[15px]",shadow:"never"},{default:s(()=>[p("h3",de,r(l(e)("theServerSetting")),1),a(d,{label:"AESKey"},{default:s(()=>[a(c,{modelValue:o.aes_key,"onUpdate:modelValue":t[8]||(t[8]=i=>o.aes_key=i),placeholder:l(e)("AESKeyPlaceholder"),class:"input-width","show-word-limit":"",clearable:""},null,8,["modelValue","placeholder"])]),_:1})]),_:1}),a(m,{class:"box-card !border-none mt-[15px]",shadow:"never"},{default:s(()=>[p("h3",ue,r(l(e)("functionSetting")),1),a(d,{label:l(e)("serveWhiteList")},{default:s(()=>[a(c,{"model-value":o.request_url,class:"input-width",readonly:!0},{append:s(()=>[p("div",{class:"cursor-pointer",onClick:t[9]||(t[9]=i=>C(o.request_url))},r(l(e)("copy")),1)]),_:1},8,["model-value"])]),_:1},8,["label"])]),_:1})]),_:1},8,["model"])),[[K,u.value]]),p("div",me,[p("div",ce,[a(P,{type:"primary",loading:u.value,onClick:t[10]||(t[10]=i=>E(f.value))},{default:s(()=>[g(r(l(e)("save")),1)]),_:1},8,["loading"])])])])}}});export{Je as default};
