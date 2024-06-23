import{_ as e}from"./u-input.07f64251.js";import{d as a,r as l,j as r,aG as t,m as o,o as s,c as d,w as u,b as i,u as m,x as n,y as p,n as c,aI as v,aJ as b,a as _,g as f,h,i as g,t as x}from"./index-905183d4.js";import{_ as y,a as j}from"./u-form.7ae4e9da.js";import{_ as V}from"./u-switch.b3c679e0.js";import{_ as P}from"./u-button.d3798ecb.js";import{_ as k}from"./area-select.vue_vue_type_script_setup_true_lang.90f3d421.js";import"./u-icon.86a2aad0.js";import"./_plugin-vue_export-helper.1b428a4d.js";import"./u-line.9e44f7cf.js";import"./u-loading-icon.c376267d.js";import"./u-popup.e3f6594b.js";import"./u-transition.dbaca185.js";import"./u-safe-bottom.e94b03c1.js";const C=a({__name:"address_edit",setup(a){const C=l({id:0,name:"",mobile:"",province_id:0,city_id:0,district_id:0,address:"",full_address:"",is_default:0,area:""}),$=l(),w=l(null),A=l(!1);r((e=>{e.id&&t(e.id).then((({data:e})=>{e&&Object.assign(C.value,e)})).catch()}));const U=o((()=>({name:{type:"string",required:!0,message:x("namePlaceholder"),trigger:["blur","change"]},mobile:[{type:"string",required:!0,message:x("mobilePlaceholder"),trigger:["blur","change"]},{validator(e,a,l){/^1[3-9]\d{9}$/.test(a)?l():l(new Error(x("mobileError")))}}],area:{validator:()=>!uni.$u.test.isEmpty(C.value.area),message:x("selectAreaPlaceholder")},address:{type:"string",required:!0,message:x("addressPlaceholder"),trigger:["blur","change"]}}))),q=()=>{$.value.open()},E=e=>{C.value.province_id=e.province.id||0,C.value.city_id=e.city.id||0,C.value.district_id=e.district.id||0,C.value.area=`${e.province.name||""}${e.city.name||""}${e.district.name||""}`},M=l(!1),R=()=>{const e=C.value.id?v:b;w.value.validate().then((()=>{M.value||(M.value=!0,A.value=!0,C.value.full_address=C.value.area+C.value.address,e(C.value).then((e=>{M.value=!1,setTimeout((()=>{A.value=!1,_({url:"/addon/o2o/pages/address/index"})}),1e3)})).catch((()=>{M.value=!1,A.value=!1})))}))};return(a,l)=>{const r=f(h("u-input"),e),t=f(h("u-form-item"),y),o=g,v=f(h("u-switch"),V),b=f(h("u-button"),P),_=f(h("u-form"),j),T=f(h("area-select"),k);return s(),d(o,{style:c(a.themeColor())},{default:u((()=>[i(o,{class:"px-[30rpx]"},{default:u((()=>[i(_,{labelPosition:"left",model:C.value,labelWidth:"200rpx",errorType:"toast",rules:m(U),ref_key:"formRef",ref:w},{default:u((()=>[i(o,{class:"mt-[10rpx]"},{default:u((()=>[i(t,{label:m(x)("name"),prop:"name","border-bottom":!0},{default:u((()=>[i(r,{modelValue:C.value.name,"onUpdate:modelValue":l[0]||(l[0]=e=>C.value.name=e),modelModifiers:{trim:!0},border:"none",clearable:"",placeholder:m(x)("namePlaceholder"),maxlength:"25"},null,8,["modelValue","placeholder"])])),_:1},8,["label"])])),_:1}),i(o,{class:"mt-[10rpx]"},{default:u((()=>[i(t,{label:m(x)("mobile"),prop:"mobile","border-bottom":!0},{default:u((()=>[i(r,{modelValue:C.value.mobile,"onUpdate:modelValue":l[1]||(l[1]=e=>C.value.mobile=e),modelModifiers:{trim:!0},border:"none",clearable:"",placeholder:m(x)("mobilePlaceholder")},null,8,["modelValue","placeholder"])])),_:1},8,["label"])])),_:1}),i(o,{class:"mt-[10rpx]"},{default:u((()=>[i(t,{label:m(x)("selectArea"),prop:"area","border-bottom":!0,onClick:q},{default:u((()=>[C.value.area?(s(),d(o,{key:1,class:"text-[30rpx]"},{default:u((()=>[n(p(C.value.area),1)])),_:1})):(s(),d(o,{key:0,class:"text-gray-placeholder text-[30rpx]"},{default:u((()=>[n(p(m(x)("selectAreaPlaceholder")),1)])),_:1}))])),_:1},8,["label"])])),_:1}),i(o,{class:"mt-[10rpx]"},{default:u((()=>[i(t,{label:m(x)("address"),prop:"address","border-bottom":!0},{default:u((()=>[i(r,{modelValue:C.value.address,"onUpdate:modelValue":l[2]||(l[2]=e=>C.value.address=e),modelModifiers:{trim:!0},border:"none",clearable:"",placeholder:m(x)("addressPlaceholder"),maxlength:"120"},null,8,["modelValue","placeholder"])])),_:1},8,["label"])])),_:1}),i(o,{class:"mt-[10rpx]"},{default:u((()=>[i(t,{label:m(x)("defaultAddress"),prop:"name","border-bottom":!0},{default:u((()=>[i(v,{modelValue:C.value.is_default,"onUpdate:modelValue":l[3]||(l[3]=e=>C.value.is_default=e),size:"20",activeValue:1,inactiveValue:0,activeColor:"var(--primary-color)"},null,8,["modelValue"])])),_:1},8,["label"])])),_:1}),i(o,{class:"mt-[40rpx]"},{default:u((()=>[i(b,{class:"text-[var-(--primary-color)]",type:"primary",shape:"circle",text:m(x)("save"),onClick:R,disabled:A.value,loading:M.value},null,8,["text","disabled","loading"])])),_:1})])),_:1},8,["model","rules"])])),_:1}),i(T,{ref_key:"areaRef",ref:$,onComplete:E,"area-id":C.value.district_id},null,8,["area-id"])])),_:1},8,["style"])}}});export{C as default};