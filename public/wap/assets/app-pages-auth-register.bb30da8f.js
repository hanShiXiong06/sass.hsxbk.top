import{d as e,j as l,K as a,r,N as o,l as t,k as s,p as i,s as d,t as n,a as u,o as p,c as m,w as c,b as g,y as b,z as x,u as f,O as h,P as _,f as v,A as y,n as k,F as w,V,W as C,H as F,T as j,U as P,i as S,g as T,h as R,B as U,D as z,C as A,G as q}from"./index-ef55c51f.js";import{_ as L}from"./u-input.dca6912e.js";import{_ as O,a as B}from"./u-form.a93afe0f.js";import{u as E,_ as N}from"./sms-code.vue_vue_type_script_setup_true_lang.0ffde4e1.js";import{_ as D,a as G}from"./u-checkbox-group.ddf7dda9.js";import{t as H}from"./topTabbar.bfb63973.js";import{_ as I}from"./_plugin-vue_export-helper.1b428a4d.js";import"./u-icon.ea2e3f36.js";import"./u-line.54e03fd2.js";import"./u-modal.8223c8eb.js";import"./u-loading-icon.26cceccf.js";import"./u-popup.eb4425a0.js";import"./u-transition.f866f84e.js";const K=I(e({__name:"register",setup(e){let I={};H().setTopTabbarParam({title:"",topStatusBar:{bgColor:"#fff",textColor:"#333"}}),l((()=>Object.keys(I).length?q(Number(I.height))+q(I.top)+q(8)+"rpx":"auto"));const K=a({username:"",password:"",confirm_password:"",mobile:"",mobile_code:"",mobile_key:"",captcha_key:"",captcha_code:""}),W=r(!0);o((()=>{setTimeout((()=>{W.value=!1}),800)}));const $=t(),J=s(),M=r("");i((async e=>{await J.getLoginConfig(),d()||J.login.is_username||J.login.is_mobile||J.login.is_bind_mobile||(n({title:"商家未开启普通账号注册",icon:"none"}),setTimeout((()=>{u({url:"/app/pages/index/index",mode:"reLaunch"})}),100)),uni.getStorageSync("openid")&&Object.assign(K,{openid:uni.getStorageSync("openid")}),uni.getStorageSync("pid")&&Object.assign(K,{pid:uni.getStorageSync("pid")}),J.login.is_username?Y.value="username":(J.login.is_mobile||J.login.is_bind_mobile)&&(Y.value="mobile"),M.value=e.type}));const Q=E(K);Q.refresh();const X=r(!1),Y=r(""),Z=()=>{ae.value=!ae.value},ee=l((()=>{const e=[];return J.login.is_username&&e.push({type:"username",title:w("usernameRegister")}),J.login.is_mobile&&!J.login.is_bind_mobile&&e.push({type:"mobile",title:w("mobileRegister")}),e})),le=l((()=>({username:{type:"string",required:"username"==Y.value,message:w("usernamePlaceholder"),trigger:["blur","change"]},password:{type:"string",required:"username"==Y.value,message:w("passwordPlaceholder"),trigger:["blur","change"]},confirm_password:[{type:"string",required:"username"==Y.value,message:w("confirmPasswordPlaceholder"),trigger:["blur","change"]},{validator:(e,l)=>l==K.password,message:w("confirmPasswordError"),trigger:["change","blur"]}],mobile:[{type:"string",required:"mobile"==Y.value||J.login.is_bind_mobile,message:w("mobilePlaceholder"),trigger:["blur","change"]},{validator:(e,l)=>"mobile"!=Y.value&&!J.login.is_bind_mobile||uni.$u.test.mobile(l),message:w("mobileError"),trigger:["change","blur"]}],mobile_code:{type:"string",required:"mobile"==Y.value||J.login.is_bind_mobile,message:w("codePlaceholder"),trigger:["blur","change"]},captcha_code:{type:"string",required:"username"==Y.value,message:w("captchaPlaceholder"),trigger:["blur","change"]}}))),ae=r(!1),re=r(null),oe=()=>{re.value.validate().then((()=>{if(J.login.agreement_show&&!ae.value)return n({title:w("isAgreeTips"),icon:"none"}),!1;if(X.value)return;X.value=!0;("username"==Y.value?V:C)(K).then((e=>{$.setToken(e.data.token),F().handleLoginBack()})).catch((()=>{X.value=!1,Q.refresh()}))}))},te=()=>{const e=j();if(e.length>1){"app/pages/auth/login"==e[e.length-2].route?P({delta:1}):u({url:"/app/pages/auth/login",mode:"redirectTo"})}else u({url:"/app/pages/auth/login",mode:"redirectTo"})};return(e,l)=>{const a=S,r=T(R("u-input"),L),o=T(R("u-form-item"),O),t=T(R("sms-code"),N),s=U,i=T(R("u-form"),B),d=T(R("u-checkbox"),D),n=T(R("u-checkbox-group"),G),V=z,C=A;return Y.value?(p(),m(a,{key:0,class:"w-screen h-screen flex flex-col",style:k(e.themeColor())},{default:c((()=>[g(a,{class:"mx-[60rpx]"},{default:c((()=>[g(a,{class:"pt-[140rpx] text-[44rpx] font-500 text-[#333]"},{default:c((()=>[b(x("username"==Y.value?f(w)("usernameRegister"):f(w)("mobileRegister")),1)])),_:1}),g(a,{class:"text-[26rpx] leading-[39rpx] text-[var(--text-color-light6)] mt-[16rpx] mb-[80rpx]"},{default:c((()=>[b(x("username"==Y.value?f(w)("usernameRegisterTip"):f(w)("mobileRegisterTip")),1)])),_:1}),g(i,{labelPosition:"left",model:K,errorType:"toast",rules:f(le),ref_key:"formRef",ref:re},{default:c((()=>["username"==Y.value?(p(),h(_,{key:0},[g(a,{class:"h-[88rpx] flex w-full items-center px-[30rpx] rounded-[var(--goods-rounded-mid)] box-border bg-[#F6F6F6]"},{default:c((()=>[g(o,{label:"",prop:"username","border-bottom":!1},{default:c((()=>[g(r,{modelValue:K.username,"onUpdate:modelValue":l[0]||(l[0]=e=>K.username=e),border:"none",maxlength:"40",clearable:"",placeholder:f(w)("usernamePlaceholder"),class:"!bg-transparent",disabled:W.value,fontSize:"26rpx",placeholderClass:"!text-[var(--text-color-light9)] text-[26rpx]"},null,8,["modelValue","placeholder","disabled"])])),_:1})])),_:1}),g(a,{class:"h-[88rpx] flex w-full items-center px-[30rpx] rounded-[var(--goods-rounded-mid)] box-border bg-[#F6F6F6] mt-[40rpx]"},{default:c((()=>[g(o,{label:"",prop:"password","border-bottom":!1},{default:c((()=>[g(r,{modelValue:K.password,"onUpdate:modelValue":l[1]||(l[1]=e=>K.password=e),border:"none",type:"password",maxlength:"40",clearable:"",placeholder:f(w)("passwordPlaceholder"),class:"!bg-transparent",disabled:W.value,fontSize:"26rpx",placeholderClass:"!text-[var(--text-color-light9)] text-[26rpx]"},null,8,["modelValue","placeholder","disabled"])])),_:1})])),_:1}),g(a,{class:"h-[88rpx] flex w-full items-center px-[30rpx] rounded-[var(--goods-rounded-mid)] box-border bg-[#F6F6F6] mt-[40rpx]"},{default:c((()=>[g(o,{label:"",prop:"confirm_password","border-bottom":!1},{default:c((()=>[g(r,{modelValue:K.confirm_password,"onUpdate:modelValue":l[2]||(l[2]=e=>K.confirm_password=e),border:"none",type:"password",maxlength:"40",clearable:"",placeholder:f(w)("confirmPasswordPlaceholder"),class:"!bg-transparent",disabled:W.value,fontSize:"26rpx",placeholderClass:"!text-[var(--text-color-light9)] text-[26rpx]"},null,8,["modelValue","placeholder","disabled"])])),_:1})])),_:1})],64)):v("v-if",!0),"mobile"==Y.value||f(J).login.is_bind_mobile?(p(),h(_,{key:1},[g(a,{class:"h-[88rpx] flex w-full items-center px-[30rpx] rounded-[var(--goods-rounded-mid)] box-border bg-[#F6F6F6] mt-[40rpx]"},{default:c((()=>[g(o,{label:"",prop:"mobile","border-bottom":!1},{default:c((()=>[g(r,{modelValue:K.mobile,"onUpdate:modelValue":l[3]||(l[3]=e=>K.mobile=e),border:"none",clearable:"",maxlength:"11",placeholder:f(w)("mobilePlaceholder"),class:"!bg-transparent",disabled:W.value,fontSize:"26rpx",placeholderClass:"!text-[var(--text-color-light9)] text-[26rpx]"},null,8,["modelValue","placeholder","disabled"])])),_:1})])),_:1}),g(a,{class:"h-[88rpx] flex w-full items-center px-[30rpx] rounded-[var(--goods-rounded-mid)] box-border bg-[#F6F6F6] mt-[40rpx]"},{default:c((()=>[g(o,{label:"",prop:"mobile_code","border-bottom":!1},{default:c((()=>[g(r,{modelValue:K.mobile_code,"onUpdate:modelValue":l[6]||(l[6]=e=>K.mobile_code=e),border:"none",clearable:"",maxlength:"4",placeholder:f(w)("codePlaceholder"),class:"!bg-transparent",disabled:W.value,fontSize:"26rpx",placeholderClass:"!text-[var(--text-color-light9)] text-[26rpx]"},{suffix:c((()=>[f(J).login.agreement_show?(p(),m(t,{key:0,mobile:K.mobile,type:"login",modelValue:K.mobile_key,"onUpdate:modelValue":l[4]||(l[4]=e=>K.mobile_key=e),isAgree:ae.value},null,8,["mobile","modelValue","isAgree"])):(p(),m(t,{key:1,mobile:K.mobile,type:"login",modelValue:K.mobile_key,"onUpdate:modelValue":l[5]||(l[5]=e=>K.mobile_key=e)},null,8,["mobile","modelValue"]))])),_:1},8,["modelValue","placeholder","disabled"])])),_:1})])),_:1})],64)):v("v-if",!0),"username"==Y.value?(p(),m(a,{key:2,class:"h-[88rpx] flex w-full items-center px-[30rpx] rounded-[var(--goods-rounded-mid)] box-border bg-[#F6F6F6] mt-[40rpx]"},{default:c((()=>[g(o,{label:"",prop:"captcha_code","border-bottom":!1},{default:c((()=>[g(r,{modelValue:K.captcha_code,"onUpdate:modelValue":l[8]||(l[8]=e=>K.captcha_code=e),border:"none",clearable:"",placeholder:f(w)("captchaPlaceholder"),class:"!bg-transparent",disabled:W.value,fontSize:"26rpx",placeholderClass:"!text-[var(--text-color-light9)] text-[26rpx]"},{suffix:c((()=>[g(s,{src:f(Q).image.value,class:"h-[48rpx] w-[60rpx] ml-[20rpx]",mode:"heightFix",onClick:l[7]||(l[7]=e=>f(Q).refresh())},null,8,["src"])])),_:1},8,["modelValue","placeholder","disabled"])])),_:1})])),_:1})):v("v-if",!0)])),_:1},8,["model","rules"]),g(a,{class:"mt-[160rpx]"},{default:c((()=>[f(J).login.agreement_show?(p(),m(a,{key:0,class:"flex items-center mb-[20rpx] py-[10rpx]",onClick:y(Z,["stop"])},{default:c((()=>[g(n,{onChange:Z},{default:c((()=>[g(d,{activeColor:"var(--primary-color)",checked:ae.value,shape:"circle",size:"24rpx",customStyle:{marginTop:"4rpx"}},null,8,["checked"])])),_:1}),g(a,{class:"text-[24rpx] text-[var(--text-color-light6)] flex items-center flex-wrap"},{default:c((()=>[g(V,null,{default:c((()=>[b(x(f(w)("agreeTips")),1)])),_:1}),g(V,{onClick:l[9]||(l[9]=y((e=>f(u)({url:"/app/pages/auth/agreement?key=privacy"})),["stop"])),class:"text-primary"},{default:c((()=>[b("《"+x(f(w)("privacyAgreement"))+"》",1)])),_:1}),g(V,null,{default:c((()=>[b(x(f(w)("and")),1)])),_:1}),g(V,{onClick:l[10]||(l[10]=y((e=>f(u)({url:"/app/pages/auth/agreement?key=service"})),["stop"])),class:"text-primary"},{default:c((()=>[b("《"+x(f(w)("userAgreement"))+"》",1)])),_:1})])),_:1})])),_:1},8,["onClick"])):v("v-if",!0),g(C,{class:"w-full h-[80rpx] !bg-[var(--primary-color)] text-[26rpx] rounded-[40rpx] leading-[80rpx] font-500 !text-[#fff]",onClick:oe},{default:c((()=>[b(x(f(w)("register")),1)])),_:1}),g(a,{class:"flex items-center justify-between mt-[30rpx]"},{default:c((()=>[f(ee).length>1?(p(),m(a,{key:0,class:"text-[26rpx] text-[var(--text-color-light6)] leading-[34rpx]",onClick:l[11]||(l[11]=e=>Y.value="username"==Y.value?"mobile":"username")},{default:c((()=>[b(x("username"==Y.value?f(w)("mobileRegister"):f(w)("usernameRegister")),1)])),_:1})):v("v-if",!0),g(a,{class:"text-[26rpx] text-[#333] leading-[34rpx]",onClick:te},{default:c((()=>[g(V,null,{default:c((()=>[b(x(f(w)("haveAccount"))+",",1)])),_:1}),g(V,{class:"text-primary"},{default:c((()=>[b(x(f(w)("toLogin")),1)])),_:1})])),_:1})])),_:1})])),_:1})])),_:1})])),_:1},8,["style"])):v("v-if",!0)}}}),[["__scopeId","data-v-28e381a1"]]);export{K as default};
