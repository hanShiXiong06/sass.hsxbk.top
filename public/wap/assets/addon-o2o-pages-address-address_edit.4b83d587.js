import{_ as e}from"./u-input.e030155a.js";import{d as a,r as l,p as r,aH as t,j as o,o as s,c as d,w as i,b as u,u as m,y as n,z as p,n as c,aJ as _,aK as v,a as b,g as f,h,i as g,F as y}from"./index-9317da28.js";import{_ as x}from"./u-form-item.83fe1c60.js";import{_ as j}from"./u-switch.4466d14d.js";import{_ as V}from"./u-button.c3400270.js";import{_ as P}from"./u-form.cfe692b2.js";import{_ as k}from"./area-select.vue_vue_type_script_setup_true_lang.cd88be8d.js";import"./u-icon.5e775659.js";import"./_plugin-vue_export-helper.1b428a4d.js";/* empty css                                                                */import"./u-line.30917996.js";/* empty css                                                               */import"./u-loading-icon.aabe3d05.js";/* empty css                                                                       */import"./u-popup.1f2ebcae.js";import"./u-transition.65be38eb.js";import"./u-safe-bottom.3546c5bb.js";const C=a({__name:"address_edit",setup(a){const C=l({id:0,name:"",mobile:"",province_id:0,city_id:0,district_id:0,address:"",full_address:"",is_default:0,area:""}),$=l(),w=l(null),A=l(!1);r((e=>{e.id&&t(e.id).then((({data:e})=>{e&&Object.assign(C.value,e)})).catch()}));const U=o((()=>({name:{type:"string",required:!0,message:y("namePlaceholder"),trigger:["blur","change"]},mobile:[{type:"string",required:!0,message:y("mobilePlaceholder"),trigger:["blur","change"]},{validator(e,a,l){/^1[3-9]\d{9}$/.test(a)?l():l(new Error(y("mobileError")))}}],area:{validator:()=>!uni.$u.test.isEmpty(C.value.area),message:y("selectAreaPlaceholder")},address:{type:"string",required:!0,message:y("addressPlaceholder"),trigger:["blur","change"]}}))),q=()=>{$.value.open()},E=e=>{C.value.province_id=e.province.id||0,C.value.city_id=e.city.id||0,C.value.district_id=e.district.id||0,C.value.area=`${e.province.name||""}${e.city.name||""}${e.district.name||""}`},M=l(!1),z=()=>{const e=C.value.id?_:v;w.value.validate().then((()=>{M.value||(M.value=!0,A.value=!0,C.value.full_address=C.value.area+C.value.address,e(C.value).then((e=>{M.value=!1,setTimeout((()=>{A.value=!1,b({url:"/addon/o2o/pages/address/index"})}),1e3)})).catch((()=>{M.value=!1,A.value=!1})))}))};return(a,l)=>{const r=f(h("u-input"),e),t=f(h("u-form-item"),x),o=g,_=f(h("u-switch"),j),v=f(h("u-button"),V),b=f(h("u-form"),P),R=f(h("area-select"),k);return s(),d(o,{style:c(a.themeColor())},{default:i((()=>[u(o,{class:"px-[30rpx]"},{default:i((()=>[u(b,{labelPosition:"left",model:C.value,labelWidth:"200rpx",errorType:"toast",rules:m(U),ref_key:"formRef",ref:w},{default:i((()=>[u(o,{class:"mt-[10rpx]"},{default:i((()=>[u(t,{label:m(y)("name"),prop:"name","border-bottom":!0},{default:i((()=>[u(r,{modelValue:C.value.name,"onUpdate:modelValue":l[0]||(l[0]=e=>C.value.name=e),modelModifiers:{trim:!0},border:"none",clearable:"",placeholder:m(y)("namePlaceholder"),maxlength:"25"},null,8,["modelValue","placeholder"])])),_:1},8,["label"])])),_:1}),u(o,{class:"mt-[10rpx]"},{default:i((()=>[u(t,{label:m(y)("mobile"),prop:"mobile","border-bottom":!0},{default:i((()=>[u(r,{modelValue:C.value.mobile,"onUpdate:modelValue":l[1]||(l[1]=e=>C.value.mobile=e),modelModifiers:{trim:!0},border:"none",clearable:"",placeholder:m(y)("mobilePlaceholder")},null,8,["modelValue","placeholder"])])),_:1},8,["label"])])),_:1}),u(o,{class:"mt-[10rpx]"},{default:i((()=>[u(t,{label:m(y)("selectArea"),prop:"area","border-bottom":!0,onClick:q},{default:i((()=>[C.value.area?(s(),d(o,{key:1,class:"text-[30rpx]"},{default:i((()=>[n(p(C.value.area),1)])),_:1})):(s(),d(o,{key:0,class:"text-gray-placeholder text-[30rpx]"},{default:i((()=>[n(p(m(y)("selectAreaPlaceholder")),1)])),_:1}))])),_:1},8,["label"])])),_:1}),u(o,{class:"mt-[10rpx]"},{default:i((()=>[u(t,{label:m(y)("address"),prop:"address","border-bottom":!0},{default:i((()=>[u(r,{modelValue:C.value.address,"onUpdate:modelValue":l[2]||(l[2]=e=>C.value.address=e),modelModifiers:{trim:!0},border:"none",clearable:"",placeholder:m(y)("addressPlaceholder"),maxlength:"120"},null,8,["modelValue","placeholder"])])),_:1},8,["label"])])),_:1}),u(o,{class:"mt-[10rpx]"},{default:i((()=>[u(t,{label:m(y)("defaultAddress"),prop:"name","border-bottom":!0},{default:i((()=>[u(_,{modelValue:C.value.is_default,"onUpdate:modelValue":l[3]||(l[3]=e=>C.value.is_default=e),size:"20",activeValue:1,inactiveValue:0,activeColor:"var(--primary-color)"},null,8,["modelValue"])])),_:1},8,["label"])])),_:1}),u(o,{class:"mt-[40rpx]"},{default:i((()=>[u(v,{class:"text-[var-(--primary-color)]",type:"primary",shape:"circle",text:m(y)("save"),onClick:z,disabled:A.value,loading:M.value},null,8,["text","disabled","loading"])])),_:1})])),_:1},8,["model","rules"])])),_:1}),u(R,{ref_key:"areaRef",ref:$,onComplete:E,"area-id":C.value.district_id},null,8,["area-id"])])),_:1},8,["style"])}}});export{C as default};
