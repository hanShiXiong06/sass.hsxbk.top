import{d as e,j as l,L as a,r,O as o,l as t,k as s,p as i,s as d,t as n,a as u,o as p,c as m,w as c,b as g,y as b,z as x,u as f,P as h,Q as _,f as v,A as y,n as k,F as w,W as V,X as C,H as F,U as j,V as P,i as S,g as T,h as U,B as z,D as R,C as A,G as q}from"./index-7bf68536.js";import{_ as L}from"./u-input.09a5cedd.js";import{_ as O,a as B}from"./u-form.78a4f7c2.js";import{u as E,_ as W}from"./sms-code.vue_vue_type_script_setup_true_lang.eace8f61.js";import{_ as X,a as D}from"./u-checkbox-group.b2a485bf.js";import{t as G}from"./topTabbar.f3f9eebd.js";import{_ as H}from"./_plugin-vue_export-helper.1b428a4d.js";import"./u-icon.0c1c54c7.js";import"./u-line.463a2a45.js";import"./u-modal.b47eb877.js";import"./u-loading-icon.b37701e7.js";import"./u-popup.be4bfacd.js";import"./u-transition.cdf87992.js";import"./u-safe-bottom.908eeae4.js";const I=H(e({__name:"register",setup(e){let H={};G().setTopTabbarParam({title:"",topStatusBar:{bgColor:"#fff",textColor:"#333"}}),l((()=>Object.keys(H).length?q(Number(H.height))+q(H.top)+q(8)+"rpx":"auto"));const I=a({username:"",password:"",confirm_password:"",mobile:"",mobile_code:"",mobile_key:"",captcha_key:"",captcha_code:""}),N=r(!0);o((()=>{setTimeout((()=>{N.value=!1}),800)}));const Q=t(),Y=s(),Z=r("");i((async e=>{await Y.getLoginConfig(),d()||Y.login.is_username||Y.login.is_mobile||Y.login.is_bind_mobile||(n({title:"商家未开启普通账号注册",icon:"none"}),setTimeout((()=>{u({url:"/app/pages/index/index",mode:"reLaunch"})}),100)),uni.getStorageSync("openid")&&Object.assign(I,{openid:uni.getStorageSync("openid")}),uni.getStorageSync("pid")&&Object.assign(I,{pid:uni.getStorageSync("pid")}),Y.login.is_username?K.value="username":(Y.login.is_mobile||Y.login.is_bind_mobile)&&(K.value="mobile"),Z.value=e.type}));const $=E(I);$.refresh();const J=r(!1),K=r(""),M=()=>{ae.value=!ae.value},ee=l((()=>{const e=[];return Y.login.is_username&&e.push({type:"username",title:w("usernameRegister")}),Y.login.is_mobile&&!Y.login.is_bind_mobile&&e.push({type:"mobile",title:w("mobileRegister")}),e})),le=l((()=>({username:{type:"string",required:"username"==K.value,message:w("usernamePlaceholder"),trigger:["blur","change"]},password:{type:"string",required:"username"==K.value,message:w("passwordPlaceholder"),trigger:["blur","change"]},confirm_password:[{type:"string",required:"username"==K.value,message:w("confirmPasswordPlaceholder"),trigger:["blur","change"]},{validator:(e,l)=>l==I.password,message:w("confirmPasswordError"),trigger:["change","blur"]}],mobile:[{type:"string",required:"mobile"==K.value||Y.login.is_bind_mobile,message:w("mobilePlaceholder"),trigger:["blur","change"]},{validator:(e,l)=>"mobile"!=K.value&&!Y.login.is_bind_mobile||uni.$u.test.mobile(l),message:w("mobileError"),trigger:["change","blur"]}],mobile_code:{type:"string",required:"mobile"==K.value||Y.login.is_bind_mobile,message:w("codePlaceholder"),trigger:["blur","change"]},captcha_code:{type:"string",required:"username"==K.value,message:w("captchaPlaceholder"),trigger:["blur","change"]}}))),ae=r(!1),re=r(null),oe=()=>{re.value.validate().then((()=>{if(Y.login.agreement_show&&!ae.value)return n({title:w("isAgreeTips"),icon:"none"}),!1;if(J.value)return;J.value=!0;("username"==K.value?V:C)(I).then((e=>{Q.setToken(e.data.token),F().handleLoginBack()})).catch((()=>{J.value=!1,$.refresh()}))}))},te=()=>{const e=j();if(e.length>1){"app/pages/auth/login"==e[e.length-2].route?P({delta:1}):u({url:"/app/pages/auth/login",mode:"redirectTo"})}else u({url:"/app/pages/auth/login",mode:"redirectTo"})};return(e,l)=>{const a=S,r=T(U("u-input"),L),o=T(U("u-form-item"),O),t=T(U("sms-code"),W),s=z,i=T(U("u-form"),B),d=T(U("u-checkbox"),X),n=T(U("u-checkbox-group"),D),V=R,C=A;return K.value?(p(),m(a,{key:0,class:"w-screen h-screen flex flex-col",style:k(e.themeColor())},{default:c((()=>[g(a,{class:"mx-[60rpx]"},{default:c((()=>[g(a,{class:"pt-[140rpx] text-[44rpx] font-500 text-[#333]"},{default:c((()=>[b(x("username"==K.value?f(w)("usernameRegister"):f(w)("mobileRegister")),1)])),_:1}),g(a,{class:"text-[26rpx] leading-[39rpx] text-[var(--text-color-light6)] mt-[16rpx] mb-[80rpx]"},{default:c((()=>[b(x("username"==K.value?f(w)("usernameRegisterTip"):f(w)("mobileRegisterTip")),1)])),_:1}),g(i,{labelPosition:"left",model:I,errorType:"toast",rules:f(le),ref_key:"formRef",ref:re},{default:c((()=>["username"==K.value?(p(),h(_,{key:0},[g(a,{class:"h-[88rpx] flex w-full items-center px-[30rpx] rounded-[var(--goods-rounded-mid)] box-border bg-[#F6F6F6]"},{default:c((()=>[g(o,{label:"",prop:"username","border-bottom":!1},{default:c((()=>[g(r,{modelValue:I.username,"onUpdate:modelValue":l[0]||(l[0]=e=>I.username=e),border:"none",maxlength:"40",placeholder:f(w)("usernamePlaceholder"),class:"!bg-transparent",disabled:N.value,fontSize:"26rpx",placeholderClass:"!text-[var(--text-color-light9)] text-[26rpx]"},null,8,["modelValue","placeholder","disabled"])])),_:1})])),_:1}),g(a,{class:"h-[88rpx] flex w-full items-center px-[30rpx] rounded-[var(--goods-rounded-mid)] box-border bg-[#F6F6F6] mt-[40rpx]"},{default:c((()=>[g(o,{label:"",prop:"password","border-bottom":!1},{default:c((()=>[g(r,{modelValue:I.password,"onUpdate:modelValue":l[1]||(l[1]=e=>I.password=e),border:"none",type:"password",maxlength:"40",placeholder:f(w)("passwordPlaceholder"),class:"!bg-transparent",disabled:N.value,fontSize:"26rpx",placeholderClass:"!text-[var(--text-color-light9)] text-[26rpx]"},null,8,["modelValue","placeholder","disabled"])])),_:1})])),_:1}),g(a,{class:"h-[88rpx] flex w-full items-center px-[30rpx] rounded-[var(--goods-rounded-mid)] box-border bg-[#F6F6F6] mt-[40rpx]"},{default:c((()=>[g(o,{label:"",prop:"confirm_password","border-bottom":!1},{default:c((()=>[g(r,{modelValue:I.confirm_password,"onUpdate:modelValue":l[2]||(l[2]=e=>I.confirm_password=e),border:"none",type:"password",maxlength:"40",placeholder:f(w)("confirmPasswordPlaceholder"),class:"!bg-transparent",disabled:N.value,fontSize:"26rpx",placeholderClass:"!text-[var(--text-color-light9)] text-[26rpx]"},null,8,["modelValue","placeholder","disabled"])])),_:1})])),_:1})],64)):v("v-if",!0),"mobile"==K.value||f(Y).login.is_bind_mobile?(p(),h(_,{key:1},[g(a,{class:"h-[88rpx] flex w-full items-center px-[30rpx] rounded-[var(--goods-rounded-mid)] box-border bg-[#F6F6F6] mt-[40rpx]"},{default:c((()=>[g(o,{label:"",prop:"mobile","border-bottom":!1},{default:c((()=>[g(r,{modelValue:I.mobile,"onUpdate:modelValue":l[3]||(l[3]=e=>I.mobile=e),border:"none",maxlength:"11",placeholder:f(w)("mobilePlaceholder"),class:"!bg-transparent",disabled:N.value,fontSize:"26rpx",placeholderClass:"!text-[var(--text-color-light9)] text-[26rpx]"},null,8,["modelValue","placeholder","disabled"])])),_:1})])),_:1}),g(a,{class:"h-[88rpx] flex w-full items-center px-[30rpx] rounded-[var(--goods-rounded-mid)] box-border bg-[#F6F6F6] mt-[40rpx]"},{default:c((()=>[g(o,{label:"",prop:"mobile_code","border-bottom":!1},{default:c((()=>[g(r,{modelValue:I.mobile_code,"onUpdate:modelValue":l[6]||(l[6]=e=>I.mobile_code=e),border:"none",maxlength:"4",placeholder:f(w)("codePlaceholder"),class:"!bg-transparent",disabled:N.value,fontSize:"26rpx",placeholderClass:"!text-[var(--text-color-light9)] text-[26rpx]"},{suffix:c((()=>[f(Y).login.agreement_show?(p(),m(t,{key:0,mobile:I.mobile,type:"login",modelValue:I.mobile_key,"onUpdate:modelValue":l[4]||(l[4]=e=>I.mobile_key=e),isAgree:ae.value},null,8,["mobile","modelValue","isAgree"])):(p(),m(t,{key:1,mobile:I.mobile,type:"login",modelValue:I.mobile_key,"onUpdate:modelValue":l[5]||(l[5]=e=>I.mobile_key=e)},null,8,["mobile","modelValue"]))])),_:1},8,["modelValue","placeholder","disabled"])])),_:1})])),_:1})],64)):v("v-if",!0),"username"==K.value?(p(),m(a,{key:2,class:"h-[88rpx] flex w-full items-center px-[30rpx] rounded-[var(--goods-rounded-mid)] box-border bg-[#F6F6F6] mt-[40rpx]"},{default:c((()=>[g(o,{label:"",prop:"captcha_code","border-bottom":!1},{default:c((()=>[g(r,{modelValue:I.captcha_code,"onUpdate:modelValue":l[8]||(l[8]=e=>I.captcha_code=e),border:"none",placeholder:f(w)("captchaPlaceholder"),class:"!bg-transparent",disabled:N.value,fontSize:"26rpx",placeholderClass:"!text-[var(--text-color-light9)] text-[26rpx]"},{suffix:c((()=>[g(s,{src:f($).image.value,class:"h-[48rpx] w-[60rpx] ml-[20rpx]",mode:"heightFix",onClick:l[7]||(l[7]=e=>f($).refresh())},null,8,["src"])])),_:1},8,["modelValue","placeholder","disabled"])])),_:1})])),_:1})):v("v-if",!0)])),_:1},8,["model","rules"]),g(a,{class:"mt-[160rpx]"},{default:c((()=>[f(Y).login.agreement_show?(p(),m(a,{key:0,class:"flex items-center mb-[20rpx] py-[10rpx]",onClick:y(M,["stop"])},{default:c((()=>[g(n,{onChange:M},{default:c((()=>[g(d,{activeColor:"var(--primary-color)",checked:ae.value,shape:"circle",size:"24rpx",customStyle:{marginTop:"4rpx"}},null,8,["checked"])])),_:1}),g(a,{class:"text-[24rpx] text-[var(--text-color-light6)] flex items-center flex-wrap"},{default:c((()=>[g(V,null,{default:c((()=>[b(x(f(w)("agreeTips")),1)])),_:1}),g(V,{onClick:l[9]||(l[9]=y((e=>f(u)({url:"/app/pages/auth/agreement?key=privacy"})),["stop"])),class:"text-primary"},{default:c((()=>[b("《"+x(f(w)("privacyAgreement"))+"》",1)])),_:1}),g(V,null,{default:c((()=>[b(x(f(w)("and")),1)])),_:1}),g(V,{onClick:l[10]||(l[10]=y((e=>f(u)({url:"/app/pages/auth/agreement?key=service"})),["stop"])),class:"text-primary"},{default:c((()=>[b("《"+x(f(w)("userAgreement"))+"》",1)])),_:1})])),_:1})])),_:1},8,["onClick"])):v("v-if",!0),g(C,{class:"w-full h-[80rpx] !bg-[var(--primary-color)] text-[26rpx] rounded-[40rpx] leading-[80rpx] font-500 !text-[#fff]",onClick:oe},{default:c((()=>[b(x(f(w)("register")),1)])),_:1}),g(a,{class:"flex items-center justify-between mt-[30rpx]"},{default:c((()=>[f(ee).length>1?(p(),m(a,{key:0,class:"text-[26rpx] text-[var(--text-color-light6)] leading-[34rpx]",onClick:l[11]||(l[11]=e=>K.value="username"==K.value?"mobile":"username")},{default:c((()=>[b(x("username"==K.value?f(w)("mobileRegister"):f(w)("usernameRegister")),1)])),_:1})):v("v-if",!0),g(a,{class:"text-[26rpx] text-[#333] leading-[34rpx]",onClick:te},{default:c((()=>[g(V,null,{default:c((()=>[b(x(f(w)("haveAccount"))+",",1)])),_:1}),g(V,{class:"text-primary"},{default:c((()=>[b(x(f(w)("toLogin")),1)])),_:1})])),_:1})])),_:1})])),_:1})])),_:1})])),_:1},8,["style"])):v("v-if",!0)}}}),[["__scopeId","data-v-52504d27"]]);export{I as default};
