import{d as C,n as p,h as i,c as u,e as I,w as l,i as t,a as s,U as m,at as V,au as r,L as S,M as n,E as P}from"./index-37fee5a0.js";/* empty css                  *//* empty css                */import"./el-form-item-4ed993c7.js";/* empty css                       *//* empty css                 */import f from"./index-75241224.js";import{b as M,g as U}from"./part-6a41ed05.js";import{_ as L}from"./_plugin-vue_export-helper-c27b6911.js";/* empty css                        */import"./index.vue_vue_type_style_index_0_lang-9e528ade.js";/* empty css                  *//* empty css                   */import"./attachment-78567e2f.js";/* empty css                   */import"./index.vue_vue_type_script_setup_true_lang-1f515813.js";/* empty css                 *//* empty css               *//* empty css                  *//* empty css                  *//* empty css                     *//* empty css                  *//* empty css                      *//* empty css                    */import"./el-tooltip-4ed993c7.js";/* empty css                 *//* empty css               *//* empty css               *//* empty css                    *//* empty css                    */import"./el-dropdown-item-4ed993c7.js";import"./index.vue_vue_type_script_setup_true_lang-a7856b99.js";/* empty css                   */import"./index.vue_vue_type_script_setup_true_lang-165de32d.js";import"./sortable.esm-be94e56d.js";const g={class:"setting-form"},b={class:"operation-btn"},H=C({__name:"activityApplyUrl",setup(Y){const e=p({SIGN_BOARD_ACTIVITY:"",INTERIOR_PHOTO_ACTIVITY:"",MERCHANT_ENTERPRISE_MEALS_COOPERATION:"",PRIVATE_NONENTERPRISE_UNITS:"",CERTIFICATE_FILE:"",ACTIVITY_RATE_COMMITMENT:"",RUN_SCHOOL_LICENSE_PIC:"",INSTITUTIONAL_ORGANIZATION_PIC:"",SIGN_BOARD_ACTIVITY_methods:1,INTERIOR_PHOTO_ACTIVITY_methods:1,MERCHANT_ENTERPRISE_MEALS_COOPERATION_methods:1,PRIVATE_NONENTERPRISE_UNITS_methods:1,CERTIFICATE_FILE_methods:1,ACTIVITY_RATE_COMMITMENT_methods:1,RUN_SCHOOL_LICENSE_PIC_methods:1,INSTITUTIONAL_ORGANIZATION_PIC_methods:1}),R=()=>{if(!localStorage.getItem("seafoxpay_sid")){m({message:"请先点击商户进件",type:"error"});return}console.log(e),M(e,localStorage.getItem("seafoxpay_sid")).then(o=>{console.log(o),m({message:"设置成功",type:"success"})})};return(()=>{if(!localStorage.getItem("seafoxpay_sid")){m({message:"请先点击商户进件",type:"error"});return}U({type:"activityApplyUrl",sid:localStorage.getItem("seafoxpay_sid")}).then(o=>{o=o.data,e.SIGN_BOARD_ACTIVITY=o.SIGN_BOARD_ACTIVITY?o.SIGN_BOARD_ACTIVITY:"",e.INTERIOR_PHOTO_ACTIVITY=o.INTERIOR_PHOTO_ACTIVITY?o.INTERIOR_PHOTO_ACTIVITY:"",e.MERCHANT_ENTERPRISE_MEALS_COOPERATION=o.MERCHANT_ENTERPRISE_MEALS_COOPERATION?o.MERCHANT_ENTERPRISE_MEALS_COOPERATION:"",e.PRIVATE_NONENTERPRISE_UNITS=o.PRIVATE_NONENTERPRISE_UNITS?o.PRIVATE_NONENTERPRISE_UNITS:"",e.CERTIFICATE_FILE=o.CERTIFICATE_FILE?o.CERTIFICATE_FILE:"",e.ACTIVITY_RATE_COMMITMENT=o.ACTIVITY_RATE_COMMITMENT?o.ACTIVITY_RATE_COMMITMENT:"",e.RUN_SCHOOL_LICENSE_PIC=o.RUN_SCHOOL_LICENSE_PIC?o.RUN_SCHOOL_LICENSE_PIC:"",e.INSTITUTIONAL_ORGANIZATION_PIC=o.INSTITUTIONAL_ORGANIZATION_PIC?o.INSTITUTIONAL_ORGANIZATION_PIC:""})})(),(o,_)=>{const a=f,E=V,N=r,d=S,O=n,A=P;return i(),u("div",g,[I(O,{model:e,"label-width":"150px"},{default:l(()=>[I(d,{label:"门头照_活动报名",prop:"SIGN_BOARD_ACTIVITY"},{default:l(()=>[I(a,{modelValue:e.SIGN_BOARD_ACTIVITY,"onUpdate:modelValue":_[0]||(_[0]=T=>e.SIGN_BOARD_ACTIVITY=T),limit:1},null,8,["modelValue"]),I(N,{modelValue:e.SIGN_BOARD_ACTIVITY_methods,"onUpdate:modelValue":_[1]||(_[1]=T=>e.SIGN_BOARD_ACTIVITY_methods=T)},{default:l(()=>[I(E,{label:1,size:"large"},{default:l(()=>[t("首次上传")]),_:1}),I(E,{label:2,size:"large"},{default:l(()=>[t("更新")]),_:1})]),_:1},8,["modelValue"])]),_:1}),I(d,{label:"室内照_活动报名",prop:"INTERIOR_PHOTO_ACTIVITY"},{default:l(()=>[I(a,{modelValue:e.INTERIOR_PHOTO_ACTIVITY,"onUpdate:modelValue":_[2]||(_[2]=T=>e.INTERIOR_PHOTO_ACTIVITY=T),limit:1},null,8,["modelValue"]),I(N,{modelValue:e.INTERIOR_PHOTO_ACTIVITY_methods,"onUpdate:modelValue":_[3]||(_[3]=T=>e.INTERIOR_PHOTO_ACTIVITY_methods=T)},{default:l(()=>[I(E,{label:1,size:"large"},{default:l(()=>[t("首次上传")]),_:1}),I(E,{label:2,size:"large"},{default:l(()=>[t("更新")]),_:1})]),_:1},8,["modelValue"])]),_:1}),I(d,{label:"商户与企业团餐合作协议(支付宝)",prop:"MERCHANT_ENTERPRISE_MEALS_COOPERATION"},{default:l(()=>[I(a,{modelValue:e.MERCHANT_ENTERPRISE_MEALS_COOPERATION,"onUpdate:modelValue":_[4]||(_[4]=T=>e.MERCHANT_ENTERPRISE_MEALS_COOPERATION=T),limit:1},null,8,["modelValue"]),I(N,{modelValue:e.MERCHANT_ENTERPRISE_MEALS_COOPERATION_methods,"onUpdate:modelValue":_[5]||(_[5]=T=>e.MERCHANT_ENTERPRISE_MEALS_COOPERATION_methods=T)},{default:l(()=>[I(E,{label:1,size:"large"},{default:l(()=>[t("首次上传")]),_:1}),I(E,{label:2,size:"large"},{default:l(()=>[t("更新")]),_:1})]),_:1},8,["modelValue"])]),_:1}),I(d,{label:"民办非企业单位登记证书图片",prop:"PRIVATE_NONENTERPRISE_UNITS"},{default:l(()=>[I(a,{modelValue:e.PRIVATE_NONENTERPRISE_UNITS,"onUpdate:modelValue":_[6]||(_[6]=T=>e.PRIVATE_NONENTERPRISE_UNITS=T),limit:1},null,8,["modelValue"]),I(N,{modelValue:e.PRIVATE_NONENTERPRISE_UNITS_methods,"onUpdate:modelValue":_[7]||(_[7]=T=>e.PRIVATE_NONENTERPRISE_UNITS_methods=T)},{default:l(()=>[I(E,{label:1,size:"large"},{default:l(()=>[t("首次上传")]),_:1}),I(E,{label:2,size:"large"},{default:l(()=>[t("更新")]),_:1})]),_:1},8,["modelValue"])]),_:1}),I(d,{label:"证明文件图片",prop:"CERTIFICATE_FILE"},{default:l(()=>[I(a,{modelValue:e.CERTIFICATE_FILE,"onUpdate:modelValue":_[8]||(_[8]=T=>e.CERTIFICATE_FILE=T),limit:1},null,8,["modelValue"]),I(N,{modelValue:e.CERTIFICATE_FILE_methods,"onUpdate:modelValue":_[9]||(_[9]=T=>e.CERTIFICATE_FILE_methods=T)},{default:l(()=>[I(E,{label:1,size:"large"},{default:l(()=>[t("首次上传")]),_:1}),I(E,{label:2,size:"large"},{default:l(()=>[t("更新")]),_:1})]),_:1},8,["modelValue"])]),_:1}),I(d,{label:"优惠费率承诺函照",prop:"ACTIVITY_RATE_COMMITMENT"},{default:l(()=>[I(a,{modelValue:e.ACTIVITY_RATE_COMMITMENT,"onUpdate:modelValue":_[10]||(_[10]=T=>e.ACTIVITY_RATE_COMMITMENT=T),limit:1},null,8,["modelValue"]),I(N,{modelValue:e.ACTIVITY_RATE_COMMITMENT_methods,"onUpdate:modelValue":_[11]||(_[11]=T=>e.ACTIVITY_RATE_COMMITMENT_methods=T)},{default:l(()=>[I(E,{label:1,size:"large"},{default:l(()=>[t("首次上传")]),_:1}),I(E,{label:2,size:"large"},{default:l(()=>[t("更新")]),_:1})]),_:1},8,["modelValue"])]),_:1}),I(d,{label:"办学资质图片",prop:"RUN_SCHOOL_LICENSE_PIC"},{default:l(()=>[I(a,{modelValue:e.RUN_SCHOOL_LICENSE_PIC,"onUpdate:modelValue":_[12]||(_[12]=T=>e.RUN_SCHOOL_LICENSE_PIC=T),limit:1},null,8,["modelValue"]),I(N,{modelValue:e.RUN_SCHOOL_LICENSE_PIC_methods,"onUpdate:modelValue":_[13]||(_[13]=T=>e.RUN_SCHOOL_LICENSE_PIC_methods=T)},{default:l(()=>[I(E,{label:1,size:"large"},{default:l(()=>[t("首次上传")]),_:1}),I(E,{label:2,size:"large"},{default:l(()=>[t("更新")]),_:1})]),_:1},8,["modelValue"])]),_:1}),I(d,{label:"法人登记证书",prop:"INSTITUTIONAL_ORGANIZATION_PIC"},{default:l(()=>[I(a,{modelValue:e.INSTITUTIONAL_ORGANIZATION_PIC,"onUpdate:modelValue":_[14]||(_[14]=T=>e.INSTITUTIONAL_ORGANIZATION_PIC=T),limit:1},null,8,["modelValue"]),I(N,{modelValue:e.INSTITUTIONAL_ORGANIZATION_PIC_methods,"onUpdate:modelValue":_[15]||(_[15]=T=>e.INSTITUTIONAL_ORGANIZATION_PIC_methods=T)},{default:l(()=>[I(E,{label:1,size:"large"},{default:l(()=>[t("首次上传")]),_:1}),I(E,{label:2,size:"large"},{default:l(()=>[t("更新")]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1},8,["model"]),s("div",b,[I(A,{type:"primary",onClick:R},{default:l(()=>[t("提交")]),_:1})])])}}});const Ce=L(H,[["__scopeId","data-v-007019d2"]]);export{Ce as default};