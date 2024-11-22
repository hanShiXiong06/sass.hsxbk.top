import{d as e,r as a,p as l,aJ as t,j as r,aK as s,t as d,o,c as u,w as i,b as n,u as m,y as c,z as p,n as v,aI as f,aL as _,a as b,i as g,g as h,h as y,a6 as x,F as V}from"./index-7bf68536.js";import{_ as j}from"./u-input.09a5cedd.js";import{_ as w,a as k}from"./u-form.78a4f7c2.js";import{_ as C}from"./u-icon.0c1c54c7.js";import{_ as S}from"./u-switch.63b76ae8.js";import{_ as q}from"./u-button.359d7329.js";import{m as I}from"./manifest.c5d7e573.js";import"./_plugin-vue_export-helper.1b428a4d.js";import"./u-line.463a2a45.js";import"./u-loading-icon.b37701e7.js";const U=e({__name:"edit",setup(e){a("");const U=a({id:0,name:"",mobile:"",lat:"",lng:"",address:"",address_name:"",full_address:"",is_default:0,area:"",type:"location_address"}),P=a(!1);a(null),l((e=>{if(e.id)t(e.id).then((({data:e})=>{e&&(Object.assign(U.value,e),U.value.area=U.value.full_address.replace(U.value.address,"").replace(U.value.address_name,""))})).catch();else if(option.name){uni.getStorageSync("addressInfo")&&Object.assign(U.value,uni.getStorageSync("addressInfo")),U.value.address=option.name,O(option.latng);var a=z("latng").split(",");U.value.lat=a[0],U.value.lng=a[1]}}));const $=a(null),A=r((()=>({address:{type:"string",required:!0,message:"请填写门牌号",trigger:["blur","change"]},name:{type:"string",required:!0,message:"请输入联系人姓名",trigger:["blur","change"]},mobile:[{type:"string",required:!0,message:"请输入手机号码",trigger:["blur","change"]},{validator:()=>uni.$u.test.mobile(U.value.mobile),message:"请输入正确的手机号"}]}))),z=e=>{for(var a=window.location.search.substring(1).split("&"),l=0;l<a.length;l++){var t=a[l].split("=");if(t[0]==e)return t[1]}return!1},O=e=>{s({latlng:e}).then((e=>{e.data&&e.data.length?(U.value.full_address="",U.value.full_address+=null!=e.data.province?e.data.province:"",U.value.full_address+=null!=e.data.city?""+e.data.city:"",U.value.full_address+=null!=e.data.district?""+e.data.district:"",U.value.address_name=U.value.full_address.replace(/-/g,""),U.value.area=e.data.full_address,U.value.province_id=null!=e.data.province_id?e.data.province_id:0,U.value.city_id=null!=e.data.city_id?e.data.city_id:0,U.value.district_id=null!=e.data.district_id?e.data.district_id:0):d({title:e.msg,icon:"none"})}))},R=a(!1),T=()=>{if(uni.$u.test.isEmpty(U.value.area))return void d({title:"请选择地址",icon:"none"});const e=U.value.id?f:_;$.value.validate().then((()=>{R.value||(R.value=!0,P.value=!0,U.value.full_address=`${U.value.area}${U.value.address_name}${U.value.address}`,e(U.value).then((e=>{R.value=!1,uni.removeStorageSync("addressInfo"),setTimeout((()=>{P.value=!1,b({url:"/addon/o2o/pages/address/index"})}),1e3)})).catch((()=>{R.value=!1,P.value=!1})))}))},E=()=>{var e=U.value;uni.setStorageSync("addressInfo",e);let a=location.href;window.location.href="https://apis.map.qq.com/tools/locpicker?search=1&type=0&backurl="+encodeURIComponent(a)+"&key="+I.h5.sdkConfigs.maps.qqmap.key+"&referer=myapp"};return(e,a)=>{const l=g,t=h(y("u-input"),j),r=h(y("u-form-item"),w),s=h(y("u-icon"),C),d=h(y("u-switch"),S),f=h(y("u-button"),q),_=h(y("u-form"),k),b=x;return o(),u(l,{style:v(e.themeColor())},{default:i((()=>[n(b,{"scroll-y":"true",class:"bg-page h-screen"},{default:i((()=>[n(l,{class:"h-[30rpx]"}),n(l,{class:"m-[30rpx] mt-0 p-[30rpx] pt-[10rpx] rounded-md bg-white"},{default:i((()=>[n(_,{labelPosition:"left",model:U.value,labelWidth:"200rpx",errorType:"toast",rules:m(A),ref_key:"formRef",ref:$},{default:i((()=>[n(l,{class:"mt-[10rpx]"},{default:i((()=>[n(r,{label:m(V)("name"),prop:"name","border-bottom":!0},{default:i((()=>[n(t,{modelValue:U.value.name,"onUpdate:modelValue":a[0]||(a[0]=e=>U.value.name=e),border:"none",clearable:"",maxlength:"25",placeholder:m(V)("namePlaceholder")},null,8,["modelValue","placeholder"])])),_:1},8,["label"])])),_:1}),n(l,{class:"mt-[10rpx]"},{default:i((()=>[n(r,{label:m(V)("mobile"),prop:"mobile","border-bottom":!0},{default:i((()=>[n(t,{modelValue:U.value.mobile,"onUpdate:modelValue":a[1]||(a[1]=e=>U.value.mobile=e),border:"none",clearable:"",placeholder:m(V)("mobilePlaceholder")},null,8,["modelValue","placeholder"])])),_:1},8,["label"])])),_:1}),n(l,{class:"mt-[10rpx]"},{default:i((()=>[n(r,{label:m(V)("homeAddress"),prop:"address_name","border-bottom":!0},{default:i((()=>[n(l,{class:"flex justify-between flex-1",onClick:E},{default:i((()=>[n(l,{class:"text-[#c3c4d5] text-[15px]"},{default:i((()=>[c(p(U.value.area?U.value.address_name:m(V)("selectAddressPlaceholder")),1)])),_:1}),n(s,{name:"arrow-right",color:"#c3c4d5"})])),_:1})])),_:1},8,["label"])])),_:1}),n(l,{class:"mt-[10rpx]"},{default:i((()=>[n(r,{label:m(V)("address"),prop:"address","border-bottom":!0},{default:i((()=>[n(t,{modelValue:U.value.address,"onUpdate:modelValue":a[2]||(a[2]=e=>U.value.address=e),border:"none",clearable:"",maxlength:"120",placeholder:m(V)("addressPlaceholder")},null,8,["modelValue","placeholder"])])),_:1},8,["label"])])),_:1}),n(l,{class:"mt-[10rpx]"},{default:i((()=>[n(r,{label:m(V)("defaultAddress"),prop:"name","border-bottom":!0},{default:i((()=>[n(d,{modelValue:U.value.is_default,"onUpdate:modelValue":a[3]||(a[3]=e=>U.value.is_default=e),size:"20",activeValue:1,inactiveValue:0,activeColor:"var(--primary-color)"},null,8,["modelValue"])])),_:1},8,["label"])])),_:1}),n(l,{class:"mt-[40rpx]"},{default:i((()=>[n(f,{class:"text-[var-(--primary-color)]",type:"primary",shape:"circle",text:m(V)("save"),onClick:T,disabled:P.value,loading:R.value},null,8,["text","disabled","loading"])])),_:1})])),_:1},8,["model","rules"])])),_:1})])),_:1})])),_:1},8,["style"])}}});export{U as default};
