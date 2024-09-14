import{d as e,j as l,r as a,l as o,k as t,p as r,s,t as i,a as u,q as n,K as p,N as d,o as m,c,w as x,b as g,y as _,z as b,u as f,O as v,P as h,f as y,Q as k,A as w,n as j,F as C,R as V,S as T,H as F,T as P,U as A,i as L,g as S,h as U,D as q,C as z,G as B}from"./index-2882a2d8.js";import{_ as R}from"./u-input.6410b5d0.js";import{_ as N}from"./u-form-item.03ed7ff5.js";import{_ as O}from"./sms-code.vue_vue_type_script_setup_true_lang.c0821f07.js";import{_ as $}from"./u-form.54744837.js";import{_ as D,a as E}from"./u-checkbox-group.5e46c6da.js";import{t as G}from"./topTabbar.ab70b119.js";import{_ as H}from"./_plugin-vue_export-helper.1b428a4d.js";import"./u-icon.1104ad2f.js";/* empty css                                                                */import"./u-line.d7ff94e2.js";/* empty css                                                               *//* empty css                                                               */import"./u-modal.c146ecea.js";import"./u-loading-icon.a37f7e61.js";/* empty css                                                                       */import"./u-popup.2abbe959.js";import"./u-overlay.1a317a4e.js";import"./u-transition.4448d2e5.js";import"./u-safe-bottom.f13b01b8.js";/* empty css                                                                *//* empty css                                                                         */const I=H(e({__name:"login",setup(e){let H={};G().setTopTabbarParam({title:"",topStatusBar:{bgColor:"#fff",textColor:"#333"}}),l((()=>Object.keys(H).length?B(Number(H.height))+B(H.top)+B(8)+"rpx":"auto"));const I=a(!0),K=o(),Q=t(),Z=a(""),J=a(!1),M=a(!1);r((async e=>{await Q.getLoginConfig(),s()||Q.login.is_username||Q.login.is_mobile||(i({title:"商家未开启普通账号登录",icon:"none"}),setTimeout((()=>{u({url:"/app/pages/index/index",mode:"reLaunch"})}),100)),e.type?"mobile"==e.type?Q.login.is_mobile&&(Z.value=e.type):"username"==e.type&&Q.login.is_username&&(Z.value=e.type):Q.login.is_username?Z.value="username":Q.login.is_mobile&&(Z.value="mobile"),n()?!Q.login.is_username||Q.login.is_mobile||Q.login.is_auth_register?M.value=!0:M.value=!1:Q.login.is_username&&!Q.login.is_mobile?M.value=!1:M.value=!0}));const W=p({username:"",password:"",mobile:"",mobile_code:"",mobile_key:""});d((()=>{setTimeout((()=>{I.value=!1}),800)}));const X=()=>{J.value=!J.value},Y=()=>{Z.value="username"==Z.value?"mobile":"username"},ee=a(!1),le=l((()=>({username:{type:"string",required:"username"==Z.value,message:C("usernamePlaceholder"),trigger:["blur","change"]},password:{type:"string",required:"username"==Z.value,message:C("passwordPlaceholder"),trigger:["blur","change"]},mobile:[{type:"string",required:"mobile"==Z.value,message:C("mobilePlaceholder"),trigger:["blur","change"]},{validator:(e,l)=>"mobile"!=Z.value||uni.$u.test.mobile(l),message:C("mobileError"),trigger:["change","blur"]}],mobile_code:{type:"string",required:"mobile"==Z.value,message:C("codePlaceholder"),trigger:["blur","change"]}}))),ae=a(null),oe=()=>{ae.value.validate().then((()=>{if(Q.login.agreement_show&&!J.value)return i({title:C("isAgreeTips"),icon:"none"}),!1;if(ee.value)return;ee.value=!0;("username"==Z.value?V:T)(W).then((e=>{K.setToken(e.data.token),Q.login.is_bind_mobile&&!e.data.mobile&&uni.setStorageSync("isbindmobile",!0),F().handleLoginBack()})).catch((()=>{ee.value=!1}))}))},te=()=>{const e=P();if(e.length>1){"app/pages/auth/index"==e[e.length-2].route?A({delta:1}):u({url:"/app/pages/auth/index",mode:"redirectTo"})}else u({url:"/app/pages/auth/index",mode:"redirectTo"})};return(e,l)=>{const a=L,o=S(U("u-input"),R),t=S(U("u-form-item"),N),r=S(U("sms-code"),O),s=S(U("u-form"),$),i=S(U("u-checkbox"),D),n=S(U("u-checkbox-group"),E),p=q,d=z;return Z.value?(m(),c(a,{key:0,class:"w-screen h-screen flex flex-col",style:j(e.themeColor())},{default:x((()=>[g(a,{class:"mx-[60rpx]"},{default:x((()=>[g(a,{class:"pt-[140rpx] text-[44rpx] font-500 text-[#333]"},{default:x((()=>[_(b("username"==Z.value?f(C)("accountLogin"):f(C)("mobileLogin")),1)])),_:1}),g(a,{class:"text-[26rpx] leading-[39rpx] text-[var(--text-color-light6)] mt-[16rpx] mb-[80rpx]"},{default:x((()=>[_(b("username"==Z.value?f(C)("accountLoginTip"):f(C)("mobileLoginTip")),1)])),_:1}),g(s,{labelPosition:"left",model:W,errorType:"toast",rules:f(le),ref_key:"formRef",ref:ae},{default:x((()=>["username"==Z.value?(m(),v(h,{key:0},[g(a,{class:"h-[88rpx] flex w-full items-center px-[30rpx] rounded-[var(--goods-rounded-mid)] box-border bg-[#F6F6F6]"},{default:x((()=>[g(t,{label:"",prop:"username","border-bottom":!1},{default:x((()=>[g(o,{modelValue:W.username,"onUpdate:modelValue":l[0]||(l[0]=e=>W.username=e),border:"none",maxlength:"40",clearable:"",placeholder:f(C)("usernamePlaceholder"),autocomplete:"off",class:"!bg-transparent",disabled:I.value,fontSize:"26rpx",placeholderClass:"!text-[var(--text-color-light9)] text-[26rpx]"},null,8,["modelValue","placeholder","disabled"])])),_:1})])),_:1}),g(a,{class:"h-[88rpx] flex w-full items-center px-[30rpx] rounded-[var(--goods-rounded-mid)] box-border bg-[#F6F6F6] mt-[40rpx]"},{default:x((()=>[g(t,{label:"",prop:"password","border-bottom":!1},{default:x((()=>[g(o,{modelValue:W.password,"onUpdate:modelValue":l[1]||(l[1]=e=>W.password=e),border:"none",type:"password",maxlength:"40",clearable:"",placeholder:f(C)("passwordPlaceholder"),autocomplete:"new-password",class:"!bg-transparent",disabled:I.value,fontSize:"26rpx",placeholderClass:"!text-[var(--text-color-light9)] text-[26rpx]"},null,8,["modelValue","placeholder","disabled"])])),_:1})])),_:1})],64)):y("v-if",!0),"mobile"==Z.value?(m(),v(h,{key:1},[g(a,{class:"h-[88rpx] flex w-full items-center px-[30rpx] rounded-[var(--goods-rounded-mid)] box-border bg-[#F6F6F6]"},{default:x((()=>[g(t,{label:"",prop:"mobile","border-bottom":!1},{default:x((()=>[g(o,{modelValue:W.mobile,"onUpdate:modelValue":l[2]||(l[2]=e=>W.mobile=e),type:"number",maxlength:"11",border:"none",clearable:"",placeholder:f(C)("mobilePlaceholder"),autocomplete:"off",class:"!bg-transparent",disabled:I.value,fontSize:"26rpx",placeholderClass:"!text-[var(--text-color-light9)] text-[26rpx]"},null,8,["modelValue","placeholder","disabled"])])),_:1})])),_:1}),g(a,{class:"h-[88rpx] flex w-full items-center px-[30rpx] rounded-[var(--goods-rounded-mid)] box-border bg-[#F6F6F6] mt-[40rpx] text-[26rpx]"},{default:x((()=>[g(t,{label:"",prop:"mobile_code","border-bottom":!1},{default:x((()=>[g(o,{modelValue:W.mobile_code,"onUpdate:modelValue":l[5]||(l[5]=e=>W.mobile_code=e),type:"number",maxlength:"4",border:"none",clearable:"",class:"!bg-transparent",fontSize:"26rpx",disabled:I.value,placeholder:f(C)("codePlaceholder"),placeholderClass:"!text-[var(--text-color-light9)] text-[26rpx]"},{suffix:x((()=>[f(Q).login.agreement_show?(m(),c(r,{key:0,mobile:W.mobile,type:"login",modelValue:W.mobile_key,"onUpdate:modelValue":l[3]||(l[3]=e=>W.mobile_key=e),isAgree:J.value},null,8,["mobile","modelValue","isAgree"])):(m(),c(r,{key:1,mobile:W.mobile,type:"login",modelValue:W.mobile_key,"onUpdate:modelValue":l[4]||(l[4]=e=>W.mobile_key=e)},null,8,["mobile","modelValue"]))])),_:1},8,["modelValue","disabled","placeholder"])])),_:1})])),_:1})],64)):y("v-if",!0)])),_:1},8,["model","rules"]),"username"==Z.value?(m(),c(a,{key:0,class:"text-right text-[24rpx] text-[var(--text-color-light9)] leading-[34rpx] mt-[20rpx]",onClick:l[6]||(l[6]=e=>f(u)({url:"/app/pages/auth/resetpwd"}))},{default:x((()=>[_(b(f(C)("resetpwd")),1)])),_:1})):y("v-if",!0),g(a,{class:k({"mt-[160rpx]":"username"!=Z.value,"mt-[106rpx]":"username"==Z.value})},{default:x((()=>[f(Q).login.agreement_show?(m(),c(a,{key:0,class:"flex items-center mb-[20rpx] py-[10rpx]",onClick:w(X,["stop"])},{default:x((()=>[g(n,{onChange:X},{default:x((()=>[g(i,{activeColor:"var(--primary-color)",checked:J.value,shape:"circle",size:"24rpx",customStyle:{marginTop:"4rpx"}},null,8,["checked"])])),_:1}),g(a,{class:"text-[24rpx] text-[var(--text-color-light6)] flex items-center flex-wrap"},{default:x((()=>[g(p,null,{default:x((()=>[_(b(f(C)("agreeTips")),1)])),_:1}),g(p,{onClick:l[7]||(l[7]=w((e=>f(u)({url:"/app/pages/auth/agreement?key=privacy"})),["stop"])),class:"text-primary"},{default:x((()=>[_("《"+b(f(C)("privacyAgreement"))+"》",1)])),_:1}),g(p,null,{default:x((()=>[_(b(f(C)("and")),1)])),_:1}),g(p,{onClick:l[8]||(l[8]=w((e=>f(u)({url:"/app/pages/auth/agreement?key=service"})),["stop"])),class:"text-primary"},{default:x((()=>[_("《"+b(f(C)("userAgreement"))+"》",1)])),_:1})])),_:1})])),_:1},8,["onClick"])):y("v-if",!0),g(d,{class:"w-full h-[80rpx] !bg-[var(--primary-color)] text-[26rpx] rounded-[40rpx] leading-[80rpx] font-500 !text-[#fff] !mx-[0]",loadingText:f(C)("logining"),onClick:oe},{default:x((()=>[_(b(f(C)("login")),1)])),_:1},8,["loadingText"]),g(a,{class:"flex items-center justify-between mt-[30rpx]"},{default:x((()=>["username"==Z.value&&f(Q).login.is_mobile||"mobile"==Z.value&&f(Q).login.is_username?(m(),c(a,{key:0,class:"text-[26rpx] text-[var(--text-color-light6)] leading-[34rpx]",onClick:Y},{default:x((()=>[_(b("username"==Z.value?f(C)("mobileLogin"):f(C)("accountLogin")),1)])),_:1})):y("v-if",!0),g(a,{class:"text-[26rpx] text-[#333] leading-[34rpx]",onClick:l[9]||(l[9]=e=>f(u)({url:"/app/pages/auth/register",param:{type:Z.value}}))},{default:x((()=>[g(p,null,{default:x((()=>[_(b(f(C)("noAccount"))+",",1)])),_:1}),g(p,{class:"text-primary"},{default:x((()=>[_(b(f(C)("toRegister")),1)])),_:1})])),_:1})])),_:1})])),_:1},8,["class"])])),_:1}),M.value?(m(),c(a,{key:0,class:"footer w-full"},{default:x((()=>[g(a,{class:"text-[26rpx] leading-[36rpx] text-[#333] text-center mb-[30rpx] font-400"},{default:x((()=>[_(b(f(C)("oneClicklogin")),1)])),_:1}),g(a,{class:"flex justify-center"},{default:x((()=>[g(d,{class:"h-[80rpx] w-[80rpx] text-[46rpx] !text-[#1AAB37] text-center !p-0 !bg-transparent leading-[79rpx] border-[2rpx] rounded-[50%] border-solid border-[#ddd] nc-iconfont nc-icon-weixinV6mm overflow-hidden",onClick:te})])),_:1})])),_:1})):y("v-if",!0)])),_:1},8,["style"])):y("v-if",!0)}}}),[["__scopeId","data-v-128c31ba"]]);export{I as default};
