import{d as e,j as o,l as t,r as l,K as a,p as r,F as s,o as i,c as p,w as u,b as n,y as d,z as m,u as c,A as _,f as b,n as g,L as x,M as f,a as h,H as v,i as y,g as j,h as k,D as S,C,G as T,k as w}from"./index-9317da28.js";import{_ as V}from"./u-input.e030155a.js";import{_ as F}from"./u-form-item.83fe1c60.js";import{_ as P}from"./sms-code.vue_vue_type_script_setup_true_lang.ef47410d.js";import{_ as z}from"./u-form.cfe692b2.js";import{_ as M,a as O}from"./u-checkbox-group.2c561dd7.js";import{t as q}from"./topTabbar.9a918190.js";import{_ as A}from"./_plugin-vue_export-helper.1b428a4d.js";import"./u-icon.5e775659.js";/* empty css                                                                */import"./u-line.30917996.js";/* empty css                                                               *//* empty css                                                               */import"./u-modal.42c2671a.js";import"./u-loading-icon.aabe3d05.js";/* empty css                                                                       */import"./u-popup.1f2ebcae.js";import"./u-transition.65be38eb.js";import"./u-safe-bottom.3546c5bb.js";/* empty css                                                                *//* empty css                                                                         */const U=A(e({__name:"bind",setup(e){let A={};q().setTopTabbarParam({title:"",topStatusBar:{bgColor:"#fff",textColor:"#333"}}),o((()=>Object.keys(A).length?T(Number(A.height))+T(A.top)+T(8)+"rpx":"auto"));const U=t(),B=o((()=>U.info)),E=o((()=>w().login)),I=l(!1),L=l(!1),D=a({mobile:"",mobile_code:"",mobile_key:""}),G=l(!0);l(null),r((()=>{setTimeout((()=>{G.value=!1}),800),uni.getStorageSync("openid")&&Object.assign(D,{openid:uni.getStorageSync("openid")}),uni.getStorageSync("pid")&&Object.assign(D,{pid:uni.getStorageSync("pid")}),uni.getStorageSync("unionid")&&Object.assign(D,{unionid:uni.getStorageSync("unionid")})}));const H={mobile:[{type:"string",required:!0,message:s("mobilePlaceholder"),trigger:["blur","change"]},{validator(e,o,t){/^1[3-9]\d{9}$/.test(o)?t():t(new Error("请输入正确的手机号"))},message:s("mobileError"),trigger:["change","blur"]}],mobile_code:{type:"string",required:!0,message:s("codePlaceholder"),trigger:["blur","change"]}},K=()=>{L.value=!L.value},N=l(null),R=()=>{N.value.validate().then((()=>{if(I.value)return;I.value=!0;(B.value?x:f)(D).then((e=>{B.value?(U.getMemberInfo(),h({url:"/app/pages/member/personal",mode:"redirectTo"})):(U.setToken(e.data.token),v().handleLoginBack())})).catch((()=>{I.value=!1}))}))};return(e,o)=>{const t=y,l=j(k("u-input"),V),a=j(k("u-form-item"),F),r=j(k("sms-code"),P),x=j(k("u-form"),z),f=j(k("u-checkbox"),M),v=j(k("u-checkbox-group"),O),T=S,w=C;return i(),p(t,{class:"w-screen h-screen flex flex-col",style:g(e.themeColor())},{default:u((()=>[n(t,{class:"mx-[60rpx]"},{default:u((()=>[n(t,{class:"pt-[140rpx] text-[50rpx] text-[#333]"},{default:u((()=>[d(m(c(s)("bindMobile")),1)])),_:1}),n(t,{class:"text-[26rpx] leading-[39rpx] text-[var(--text-color-light6)] mt-[16rpx] mb-[80rpx]"},{default:u((()=>[d(m(c(s)("bindMobileTip")),1)])),_:1}),n(x,{labelPosition:"left",model:D,errorType:"toast",rules:H,ref_key:"formRef",ref:N},{default:u((()=>[n(t,{class:"h-[90rpx] flex w-full items-center px-[30rpx] rounded-[var(--goods-rounded-mid)] box-border bg-[#F6F6F6]"},{default:u((()=>[n(a,{label:"",prop:"mobile","border-bottom":!1},{default:u((()=>[n(l,{modelValue:D.mobile,"onUpdate:modelValue":o[0]||(o[0]=e=>D.mobile=e),type:"number",maxlength:"11",border:"none",clearable:"",placeholder:c(s)("mobilePlaceholder"),class:"!bg-transparent",disabled:G.value,fontSize:"26rpx",placeholderClass:"!text-[var(--text-color-light9)] text-[26rpx]"},null,8,["modelValue","placeholder","disabled"])])),_:1})])),_:1}),n(t,{class:"h-[90rpx] flex w-full items-center px-[30rpx] rounded-[var(--goods-rounded-mid)] box-border bg-[#F6F6F6] mt-[40rpx]"},{default:u((()=>[n(a,{label:"",prop:"mobile_code","border-bottom":!1},{default:u((()=>[n(l,{modelValue:D.mobile_code,"onUpdate:modelValue":o[2]||(o[2]=e=>D.mobile_code=e),type:"number",maxlength:"4",border:"none",clearable:"",placeholder:c(s)("codePlaceholder"),class:"!bg-transparent",disabled:G.value,fontSize:"26rpx",placeholderClass:"!text-[var(--text-color-light9)]"},{suffix:u((()=>[n(r,{mobile:D.mobile,type:"bind_mobile",modelValue:D.mobile_key,"onUpdate:modelValue":o[1]||(o[1]=e=>D.mobile_key=e)},null,8,["mobile","modelValue"])])),_:1},8,["modelValue","placeholder","disabled"])])),_:1})])),_:1})])),_:1},8,["model"]),n(t,{class:"mt-[100rpx]"},{default:u((()=>[c(E).agreement_show?(i(),p(t,{key:0,class:"flex items-center mb-[20rpx] py-[10rpx]",onClick:_(K,["stop"])},{default:u((()=>[n(v,{onChange:K},{default:u((()=>[n(f,{activeColor:"var(--primary-color)",checked:L.value,shape:"circle",size:"24rpx",customStyle:{marginTop:"4rpx"}},null,8,["checked"])])),_:1}),n(t,{class:"text-[24rpx] text-[var(--text-color-light6)] flex items-center flex-wrap"},{default:u((()=>[n(T,null,{default:u((()=>[d(m(c(s)("agreeTips")),1)])),_:1}),n(T,{onClick:o[3]||(o[3]=_((e=>c(h)({url:"/app/pages/auth/agreement?key=privacy"})),["stop"])),class:"text-primary"},{default:u((()=>[d("《"+m(c(s)("privacyAgreement"))+"》",1)])),_:1}),n(T,null,{default:u((()=>[d(m(c(s)("and")),1)])),_:1}),n(T,{onClick:o[4]||(o[4]=_((e=>c(h)({url:"/app/pages/auth/agreement?key=service"})),["stop"])),class:"text-primary"},{default:u((()=>[d("《"+m(c(s)("userAgreement"))+"》",1)])),_:1})])),_:1})])),_:1},8,["onClick"])):b("v-if",!0),n(w,{class:"w-full h-[80rpx] !bg-[var(--primary-color)] text-[26rpx] rounded-[40rpx] leading-[80rpx] font-500 !text-[#fff]",onClick:R},{default:u((()=>[d(m(c(s)("bind")),1)])),_:1})])),_:1})])),_:1})])),_:1},8,["style"])}}}),[["__scopeId","data-v-821478d5"]]);export{U as default};