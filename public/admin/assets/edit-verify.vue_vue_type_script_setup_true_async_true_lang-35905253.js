import{d as N,r as p,l as R,q as t,h as d,s as _,w as i,a as k,e as r,i as b,t as c,u as m,c as x,F as g,ao as I,a3 as $,aE as j,L as O,M as S,E as T,X}from"./index-a3bdc7eb.js";/* empty css                  *//* empty css                   *//* empty css                  *//* empty css                */import"./el-form-item-4ed993c7.js";/* empty css                 *//* empty css                        */const z={class:"dialog-footer"},ee=N({__name:"edit-verify",emits:["complete"],setup(A,{expose:V,emit:y}){const u=p(!1),M=p(""),f={validate_type:"",min_number:1,max_number:120,betweenMin:1,betweenMax:120},l=p({...f}),v=p(),E=(o,e,a)=>{e?e>l.value.betweenMax?a(new Error(t("minPlaceholder1"))):a():a(new Error(t("minPlaceholder")))},h=(o,e,a)=>{e?e<l.value.betweenMin?a(new Error(t("maxPlaceholder1"))):a():a(new Error(t("maxPlaceholder")))},P=(o,e,a)=>{e>l.value.view_max?a(new Error(t("min1Placeholder1"))):a()},q=(o,e,a)=>{e?e<l.value.view_min?a(new Error(t("max1Placeholder1"))):a():a(new Error(t("max1Placeholder")))},D=R(()=>({min_number:[{required:!0,message:t("minPlaceholder"),trigger:"change"}],max_number:[{required:!0,message:t("maxPlaceholder"),trigger:"change"}],betweenMin:[{required:!0,validator:E,trigger:"change"}],betweenMax:[{required:!0,validator:h,trigger:"change"}],view_min:[{required:!0,validator:P,trigger:"change"}],view_max:[{required:!0,validator:q,trigger:"change"}]})),L=async o=>{o&&await o.validate(async e=>{e&&(y("complete",I(l.value)),u.value=!1)})},U=async(o=null)=>{l.value=$(Object.assign(f,o)),u.value=!0},F=o=>{var e;(e=v.value)==null||e.clearValidate(),o()};return V({showDialog:u,setFormData:U}),(o,e)=>{const a=j,s=O,B=S,w=T,C=X;return d(),_(C,{modelValue:u.value,"onUpdate:modelValue":e[8]||(e[8]=n=>u.value=n),title:M.value,width:"480px","before-close":F,"destroy-on-close":!0},{footer:i(()=>[k("span",z,[r(w,{onClick:e[6]||(e[6]=n=>u.value=!1)},{default:i(()=>[b(c(m(t)("cancel")),1)]),_:1}),r(w,{type:"primary",onClick:e[7]||(e[7]=n=>L(v.value))},{default:i(()=>[b(c(m(t)("confirm")),1)]),_:1})])]),default:i(()=>[r(B,{model:l.value,"label-width":"130px",ref_key:"formRef",ref:v,rules:m(D),class:"page-form"},{default:i(()=>[l.value.validate_type=="min"?(d(),_(s,{key:0,label:m(t)("minLabel"),prop:"min_number"},{default:i(()=>[r(a,{modelValue:l.value.min_number,"onUpdate:modelValue":e[0]||(e[0]=n=>l.value.min_number=n),step:1,"step-strictly":"",min:1,class:"input-width"},null,8,["modelValue"])]),_:1},8,["label"])):l.value.validate_type=="max"?(d(),_(s,{key:1,label:m(t)("maxLabel"),prop:"max_number"},{default:i(()=>[r(a,{modelValue:l.value.max_number,"onUpdate:modelValue":e[1]||(e[1]=n=>l.value.max_number=n),step:1,"step-strictly":"",min:1,class:"input-width"},null,8,["modelValue"])]),_:1},8,["label"])):l.value.view_type==="number"?(d(),x(g,{key:2},[r(s,{label:m(t)("minLabel1"),prop:"view_min"},{default:i(()=>[r(a,{modelValue:l.value.view_min,"onUpdate:modelValue":e[2]||(e[2]=n=>l.value.view_min=n),min:0,"value-on-clear":0,class:"input-width"},null,8,["modelValue"])]),_:1},8,["label"]),r(s,{label:m(t)("maxLabel1"),prop:"view_max"},{default:i(()=>[r(a,{modelValue:l.value.view_max,"onUpdate:modelValue":e[3]||(e[3]=n=>l.value.view_max=n),min:1,class:"input-width"},null,8,["modelValue"])]),_:1},8,["label"])],64)):(d(),x(g,{key:3},[r(s,{label:m(t)("minLabel"),prop:"betweenMin"},{default:i(()=>[r(a,{modelValue:l.value.betweenMin,"onUpdate:modelValue":e[4]||(e[4]=n=>l.value.betweenMin=n),step:1,"step-strictly":"",min:1,class:"input-width"},null,8,["modelValue"])]),_:1},8,["label"]),r(s,{label:m(t)("maxLabel"),prop:"betweenMax"},{default:i(()=>[r(a,{modelValue:l.value.betweenMax,"onUpdate:modelValue":e[5]||(e[5]=n=>l.value.betweenMax=n),step:1,"step-strictly":"",min:1,class:"input-width"},null,8,["modelValue"])]),_:1},8,["label"])],64))]),_:1},8,["model","rules"])]),_:1},8,["modelValue","title"])}}});export{ee as _};
