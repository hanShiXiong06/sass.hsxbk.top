import{d as e,l as a,m as l,r as o,p as t,q as r,t as s,o as i,c as n,w as u,b as d,x as m,y as p,u as c,f as b,n as g,z as f,A as _,a as x,B as h,i as y,g as v,h as k,C as j,D as S}from"./index-e6ce9fbf.js";import{_ as T}from"./u-input.b98e66b2.js";import{_ as V,a as C}from"./u-form.f2229701.js";import{_ as P}from"./sms-code.vue_vue_type_script_setup_true_lang.16ee56a1.js";import{_ as w,a as q}from"./u-checkbox-group.35b90624.js";import{_ as A}from"./u-button.7a41d301.js";import{_ as O}from"./_plugin-vue_export-helper.1b428a4d.js";import"./u-icon.c5d9cd81.js";import"./u-line.ebbd60c6.js";import"./u-modal.a2c072b7.js";import"./u-loading-icon.39fd4711.js";import"./u-popup.b16d6e1d.js";import"./u-transition.6919b33f.js";import"./u-safe-bottom.1ba5bfba.js";const U=O(e({__name:"bind",setup(e){const O=a(),U=l((()=>O.info)),z=l((()=>S().login)),B=o(!1),E=o(!1),I=t({mobile:"",mobile_code:"",mobile_key:""});let M=o(!0);r((()=>{setTimeout((()=>{M.value=!1}),800)})),uni.getStorageSync("openid")&&Object.assign(I,{openid:uni.getStorageSync("openid")}),uni.getStorageSync("pid")&&Object.assign(I,{pid:uni.getStorageSync("pid")}),uni.getStorageSync("unionid")&&Object.assign(I,{unionid:uni.getStorageSync("unionid")});const R={mobile:[{type:"string",required:!0,message:s("mobilePlaceholder"),trigger:["blur","change"]},{validator(e,a,l){/^1[3-9]\d{9}$/.test(a)?l():l(new Error("请输入正确的手机号"))},message:s("mobileError"),trigger:["change","blur"]}],mobile_code:{type:"string",required:!0,message:s("codePlaceholder"),trigger:["blur","change"]}},D=()=>{E.value=!E.value},L=o(null),Q=()=>{L.value.validate().then((()=>{if(B.value)return;B.value=!0;(U.value?f:_)(I).then((e=>{U.value?(O.getMemberInfo(),x({url:"/app/pages/member/personal",mode:"redirectTo"})):(O.setToken(e.data.token),h().handleLoginBack())})).catch((()=>{B.value=!1}))}))};return(e,a)=>{const l=y,o=v(k("u-input"),T),t=v(k("u-form-item"),V),r=v(k("sms-code"),P),f=v(k("u-checkbox"),w),_=v(k("u-checkbox-group"),q),h=j,S=v(k("u-button"),A),O=v(k("u-form"),C);return i(),n(l,{class:"w-screen h-screen flex flex-col",style:g(e.themeColor())},{default:u((()=>[d(l,{class:"flex-1"},{default:u((()=>[d(l,{class:"h-[100rpx]"}),d(l,{class:"px-[60rpx] pt-[100rpx] mb-[100rpx]"},{default:u((()=>[d(l,{class:"font-bold text-lg"},{default:u((()=>[m(p(c(s)("bindMobile")),1)])),_:1})])),_:1}),d(l,{class:"px-[60rpx]"},{default:u((()=>[d(O,{labelPosition:"left",model:I,errorType:"toast",rules:R,ref_key:"formRef",ref:L},{default:u((()=>[d(t,{label:"",prop:"mobile","border-bottom":!0},{default:u((()=>[d(o,{modelValue:I.mobile,"onUpdate:modelValue":a[0]||(a[0]=e=>I.mobile=e),border:"none",clearable:"",placeholder:c(s)("mobilePlaceholder"),class:"!bg-transparent",disabled:c(M)},null,8,["modelValue","placeholder","disabled"])])),_:1}),d(l,{class:"mt-[40rpx]"},{default:u((()=>[d(t,{label:"",prop:"mobile_code","border-bottom":!0},{default:u((()=>[d(o,{modelValue:I.mobile_code,"onUpdate:modelValue":a[2]||(a[2]=e=>I.mobile_code=e),border:"none",clearable:"",placeholder:c(s)("codePlaceholder"),class:"!bg-transparent",disabled:c(M)},{suffix:u((()=>[d(r,{mobile:I.mobile,type:"bind_mobile",modelValue:I.mobile_key,"onUpdate:modelValue":a[1]||(a[1]=e=>I.mobile_key=e)},null,8,["mobile","modelValue"])])),_:1},8,["modelValue","placeholder","disabled"])])),_:1})])),_:1}),!c(U)&&c(z).agreement_show?(i(),n(l,{key:0,class:"flex items-start mt-[30rpx]"},{default:u((()=>[d(_,null,{default:u((()=>[d(f,{activeColor:"var(--primary-color)",checked:E.value,shape:"shape",size:"14",onChange:D,customStyle:{marginTop:"4rpx"}},null,8,["checked"])])),_:1}),d(l,{class:"text-xs text-gray-400 flex flex-wrap"},{default:u((()=>[m(p(c(s)("agreeTips"))+" ",1),d(l,{onClick:a[3]||(a[3]=e=>c(x)({url:"/app/pages/auth/agreement?key=service"}))},{default:u((()=>[d(h,{class:"text-primary"},{default:u((()=>[m("《"+p(c(s)("userAgreement"))+"》",1)])),_:1})])),_:1}),d(l,{onClick:a[4]||(a[4]=e=>c(x)({url:"/app/pages/auth/agreement?key=privacy"}))},{default:u((()=>[d(h,{class:"text-primary"},{default:u((()=>[m("《"+p(c(s)("privacyAgreement"))+"》",1)])),_:1})])),_:1})])),_:1})])),_:1})):b("v-if",!0),d(l,{class:"mt-[60rpx]"},{default:u((()=>[d(S,{type:"primary",text:c(s)("bind"),loading:B.value,loadingText:c(s)("binding"),onClick:Q},null,8,["text","loading","loadingText"])])),_:1})])),_:1},8,["model"])])),_:1})])),_:1})])),_:1},8,["style"])}}}),[["__scopeId","data-v-92a02775"]]);export{U as default};
