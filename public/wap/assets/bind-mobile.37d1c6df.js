import{d as e,r as l,l as a,j as o,L as r,O as t,F as s,o as i,c as n,w as p,b as d,y as u,z as m,u as c,A as b,f as g,R as x,t as _,M as f,i as h,a5 as v,g as y,h as k,D as S,C as w,a as V,k as j}from"./index-7bf68536.js";import{_ as C,a as A}from"./u-form.78a4f7c2.js";import{_ as T}from"./sms-code.vue_vue_type_script_setup_true_lang.eace8f61.js";import{_ as P,a as U}from"./u-checkbox-group.b2a485bf.js";import{_ as z}from"./u-popup.be4bfacd.js";import{_ as I}from"./_plugin-vue_export-helper.1b428a4d.js";const O=I(e({__name:"bind-mobile",setup(e,{expose:I}){const O=l(!1),B=a(),M=o((()=>B.info)),q=o((()=>j().login)),E=l(!1),R=l(!1),D=r({mobile:"",mobile_code:"",mobile_key:""}),F=l(!0);t((()=>{setTimeout((()=>{F.value=!1}),800),uni.getStorageSync("openid")&&Object.assign(D,{openid:uni.getStorageSync("openid")}),uni.getStorageSync("pid")&&Object.assign(D,{pid:uni.getStorageSync("pid")}),uni.getStorageSync("unionid")&&Object.assign(D,{unionid:uni.getStorageSync("unionid")})}));const L={mobile:[{type:"string",required:!0,message:s("mobilePlaceholder"),trigger:["blur","change"]},{validator(e,l,a){/^1[3-9]\d{9}$/.test(l)?a():a(new Error("请输入正确的手机号"))},message:s("mobileError"),trigger:["change","blur"]}],mobile_code:{type:"string",required:!0,message:s("codePlaceholder"),trigger:["blur","change"]}},W=()=>{R.value=!R.value},Z=l(null),$=()=>{Z.value.validate().then((()=>{R.value||!q.value.agreement_show?E.value||(E.value=!0,f(D).then((e=>{B.getMemberInfo(),M.value.mobile&&uni.removeStorageSync("isbindmobile"),O.value=!1})).catch((()=>{E.value=!1}))):_({title:s("isAgreeTips"),icon:"none"})}))};return I({open:()=>{O.value=!0}}),(e,l)=>{const a=h,o=v,r=y(k("u-form-item"),C),t=y(k("sms-code"),T),_=y(k("u-checkbox"),P),f=y(k("u-checkbox-group"),U),j=S,I=w,B=y(k("u-form"),A),M=y(k("u-popup"),z);return i(),n(M,{show:O.value,onClose:l[7]||(l[7]=e=>O.value=!1),mode:"center",round:10,closeable:!0,safeAreaInsetBottom:!1,zIndex:"10086"},{default:p((()=>[d(a,{onTouchmove:l[6]||(l[6]=b((()=>{}),["prevent","stop"])),class:"max-w-[550rpx] w-[550rpx] box-border"},{default:p((()=>[d(a,{class:"text-center py-[var(--pad-top-m)] text-[32rpx] font-500 leading-[46rpx]"},{default:p((()=>[u(m(c(s)("bindMobile")),1)])),_:1}),d(a,{class:"px-[var(--pad-sidebar-m)] pb-[var(--pad-top-m)]"},{default:p((()=>[d(B,{labelPosition:"left",model:D,errorType:"toast",rules:L,ref_key:"formRef",ref:Z},{default:p((()=>[d(r,{label:"",prop:"mobile",borderBottom:!0},{default:p((()=>[d(o,{modelValue:D.mobile,"onUpdate:modelValue":l[0]||(l[0]=e=>D.mobile=e),type:"number",maxlength:"11",placeholder:c(s)("mobilePlaceholder"),class:"w-full h-[50rpx] leading-[50rpx] !bg-transparent !px-[20rpx] text-[26rpx] text-[#333]",disabled:F.value,"placeholder-class":"bind-mobile"},null,8,["modelValue","placeholder","disabled"])])),_:1}),d(a,{class:"mt-[20rpx]"},{default:p((()=>[d(r,{label:"",prop:"mobile_code",borderBottom:!0},{right:p((()=>[c(q).agreement_show?(i(),n(t,{key:0,mobile:D.mobile,type:"login",modelValue:D.mobile_key,"onUpdate:modelValue":l[2]||(l[2]=e=>D.mobile_key=e),isAgree:R.value},null,8,["mobile","modelValue","isAgree"])):(i(),n(t,{key:1,mobile:D.mobile,type:"login",modelValue:D.mobile_key,"onUpdate:modelValue":l[3]||(l[3]=e=>D.mobile_key=e)},null,8,["mobile","modelValue"]))])),default:p((()=>[d(o,{modelValue:D.mobile_code,"onUpdate:modelValue":l[1]||(l[1]=e=>D.mobile_code=e),type:"number",maxlength:"6",placeholder:c(s)("codePlaceholder"),class:"box-border w-full h-[50rpx] leading-[50rpx] !bg-transparent !px-[20rpx] text-[26rpx] text-[#333]",disabled:F.value,"placeholder-class":"bind-mobile"},null,8,["modelValue","placeholder","disabled"])])),_:1})])),_:1}),c(q).agreement_show?(i(),n(a,{key:0,class:"flex items-center mt-[30rpx] pl-[10rpx] py-[10rpx]",onClick:b(W,["stop"])},{default:p((()=>[d(f,{onChange:W},{default:p((()=>[d(_,{activeColor:"var(--primary-color)",checked:R.value,shape:"circle",size:"24rpx",customStyle:{marginTop:"4rpx"}},null,8,["checked"])])),_:1}),d(a,{class:"text-[24rpx] text-[var(--text-color-light6)] flex items-center flex-wrap"},{default:p((()=>[d(j,null,{default:p((()=>[u(m(c(s)("agreeTips")),1)])),_:1}),d(j,{onClick:l[4]||(l[4]=b((e=>c(V)({url:"/app/pages/auth/agreement?key=privacy"})),["stop"])),class:"text-primary"},{default:p((()=>[u("《"+m(c(s)("privacyAgreement"))+"》",1)])),_:1}),d(j,null,{default:p((()=>[u(m(c(s)("and")),1)])),_:1}),d(j,{onClick:l[5]||(l[5]=b((e=>c(V)({url:"/app/pages/auth/agreement?key=service"})),["stop"])),class:"text-primary"},{default:p((()=>[u("《"+m(c(s)("userAgreement"))+"》",1)])),_:1})])),_:1})])),_:1},8,["onClick"])):g("v-if",!0),d(a,{class:"mt-[100rpx]"},{default:p((()=>[d(I,{class:x(["primary-btn-bg text-[26rpx] !text-[#fff] !h-[80rpx] leading-[80rpx] rounded-full font-500",{"opacity-50":E.value}]),disabled:E.value,onClick:$},{default:p((()=>[u(m(c(s)("bind")),1)])),_:1},8,["class","disabled"])])),_:1})])),_:1},8,["model"])])),_:1})])),_:1})])),_:1},8,["show"])}}}),[["__scopeId","data-v-8e7c2d98"]]);export{O as b};
