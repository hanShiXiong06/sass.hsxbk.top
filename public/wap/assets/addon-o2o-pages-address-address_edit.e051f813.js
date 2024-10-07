import{d as e,r as a,p as l,aR as r,j as d,o as t,c as s,w as o,b as u,u as i,y as m,z as c,n,aQ as p,aT as v,a as b,g as _,h as f,i as h,F as g,Q as x,R as y,aU as V,bX as P,S as k}from"./index-71c7df08.js";import{_ as C}from"./area-select.vue_vue_type_script_setup_true_lang.8205cddf.js";const U=e({__name:"address_edit",setup(e){const U=a({id:0,name:"",mobile:"",province_id:0,city_id:0,district_id:0,address:"",full_address:"",is_default:0,area:""}),$=a(),j=a(null),A=a(!1);l((e=>{e.id&&r(e.id).then((({data:e})=>{e&&Object.assign(U.value,e)})).catch()}));const R=d((()=>({name:{type:"string",required:!0,message:g("namePlaceholder"),trigger:["blur","change"]},mobile:[{type:"string",required:!0,message:g("mobilePlaceholder"),trigger:["blur","change"]},{validator(e,a,l){/^1[3-9]\d{9}$/.test(a)?l():l(new Error(g("mobileError")))}}],area:{validator:()=>!uni.$u.test.isEmpty(U.value.area),message:g("selectAreaPlaceholder")},address:{type:"string",required:!0,message:g("addressPlaceholder"),trigger:["blur","change"]}}))),q=()=>{$.value.open()},w=e=>{U.value.province_id=e.province.id||0,U.value.city_id=e.city.id||0,U.value.district_id=e.district.id||0,U.value.area=`${e.province.name||""}${e.city.name||""}${e.district.name||""}`},E=a(!1),M=()=>{const e=U.value.id?p:v;j.value.validate().then((()=>{E.value||(E.value=!0,A.value=!0,U.value.full_address=U.value.area+U.value.address,e(U.value).then((e=>{E.value=!1,setTimeout((()=>{A.value=!1,b({url:"/addon/o2o/pages/address/index"})}),1e3)})).catch((()=>{E.value=!1,A.value=!1})))}))};return(e,a)=>{const l=_(f("u-input"),x),r=_(f("u-form-item"),y),d=h,p=_(f("u-switch"),V),v=_(f("u-button"),P),b=_(f("u-form"),k),T=_(f("area-select"),C);return t(),s(d,{style:n(e.themeColor())},{default:o((()=>[u(d,{class:"px-[30rpx]"},{default:o((()=>[u(b,{labelPosition:"left",model:U.value,labelWidth:"200rpx",errorType:"toast",rules:i(R),ref_key:"formRef",ref:j},{default:o((()=>[u(d,{class:"mt-[10rpx]"},{default:o((()=>[u(r,{label:i(g)("name"),prop:"name","border-bottom":!0},{default:o((()=>[u(l,{modelValue:U.value.name,"onUpdate:modelValue":a[0]||(a[0]=e=>U.value.name=e),modelModifiers:{trim:!0},border:"none",clearable:"",placeholder:i(g)("namePlaceholder"),maxlength:"25"},null,8,["modelValue","placeholder"])])),_:1},8,["label"])])),_:1}),u(d,{class:"mt-[10rpx]"},{default:o((()=>[u(r,{label:i(g)("mobile"),prop:"mobile","border-bottom":!0},{default:o((()=>[u(l,{modelValue:U.value.mobile,"onUpdate:modelValue":a[1]||(a[1]=e=>U.value.mobile=e),modelModifiers:{trim:!0},border:"none",clearable:"",placeholder:i(g)("mobilePlaceholder")},null,8,["modelValue","placeholder"])])),_:1},8,["label"])])),_:1}),u(d,{class:"mt-[10rpx]"},{default:o((()=>[u(r,{label:i(g)("selectArea"),prop:"area","border-bottom":!0,onClick:q},{default:o((()=>[U.value.area?(t(),s(d,{key:1,class:"text-[30rpx]"},{default:o((()=>[m(c(U.value.area),1)])),_:1})):(t(),s(d,{key:0,class:"text-gray-placeholder text-[30rpx]"},{default:o((()=>[m(c(i(g)("selectAreaPlaceholder")),1)])),_:1}))])),_:1},8,["label"])])),_:1}),u(d,{class:"mt-[10rpx]"},{default:o((()=>[u(r,{label:i(g)("address"),prop:"address","border-bottom":!0},{default:o((()=>[u(l,{modelValue:U.value.address,"onUpdate:modelValue":a[2]||(a[2]=e=>U.value.address=e),modelModifiers:{trim:!0},border:"none",clearable:"",placeholder:i(g)("addressPlaceholder"),maxlength:"120"},null,8,["modelValue","placeholder"])])),_:1},8,["label"])])),_:1}),u(d,{class:"mt-[10rpx]"},{default:o((()=>[u(r,{label:i(g)("defaultAddress"),prop:"name","border-bottom":!0},{default:o((()=>[u(p,{modelValue:U.value.is_default,"onUpdate:modelValue":a[3]||(a[3]=e=>U.value.is_default=e),size:"20",activeValue:1,inactiveValue:0,activeColor:"var(--primary-color)"},null,8,["modelValue"])])),_:1},8,["label"])])),_:1}),u(d,{class:"mt-[40rpx]"},{default:o((()=>[u(v,{class:"text-[var-(--primary-color)]",type:"primary",shape:"circle",text:i(g)("save"),onClick:M,disabled:A.value,loading:E.value},null,8,["text","disabled","loading"])])),_:1})])),_:1},8,["model","rules"])])),_:1}),u(T,{ref_key:"areaRef",ref:$,onComplete:w,"area-id":U.value.district_id},null,8,["area-id"])])),_:1},8,["style"])}}});export{U as default};
