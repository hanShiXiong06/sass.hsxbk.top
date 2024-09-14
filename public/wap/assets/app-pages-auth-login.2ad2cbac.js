import{d as e,j as l,r as a,l as t,k as r,p as o,s,t as i,a as n,q as u,N as d,T as p,o as m,c,w as x,b as g,y as b,z as f,u as h,U as v,V as _,f as y,W as k,A as w,n as C,F as V,X as T,Y as F,H as P,Z as A,$ as L,i as S,g as j,h as U,D as z,C as q,G as B,Q as R,R as I,S as N,I as $,J as D,_ as E}from"./index-22c9735d.js";import{_ as G}from"./sms-code.vue_vue_type_script_setup_true_lang.b7882cc5.js";import{t as H}from"./topTabbar.34bc4ca3.js";const J=E(e({__name:"login",setup(e){let E={};H().setTopTabbarParam({title:"",topStatusBar:{bgColor:"#fff",textColor:"#333"}}),l((()=>Object.keys(E).length?B(Number(E.height))+B(E.top)+B(8)+"rpx":"auto"));const J=a(!0),O=t(),Q=r(),W=a(""),X=a(!1),Y=a(!1);o((async e=>{await Q.getLoginConfig(),s()||Q.login.is_username||Q.login.is_mobile||(i({title:"商家未开启普通账号登录",icon:"none"}),setTimeout((()=>{n({url:"/app/pages/index/index",mode:"reLaunch"})}),100)),e.type?"mobile"==e.type?Q.login.is_mobile&&(W.value=e.type):"username"==e.type&&Q.login.is_username&&(W.value=e.type):Q.login.is_username?W.value="username":Q.login.is_mobile&&(W.value="mobile"),u()?!Q.login.is_username||Q.login.is_mobile||Q.login.is_auth_register?Y.value=!0:Y.value=!1:Q.login.is_username&&!Q.login.is_mobile?Y.value=!1:Y.value=!0}));const Z=d({username:"",password:"",mobile:"",mobile_code:"",mobile_key:""});p((()=>{setTimeout((()=>{J.value=!1}),800)}));const K=()=>{X.value=!X.value},M=()=>{W.value="username"==W.value?"mobile":"username"},ee=a(!1),le=l((()=>({username:{type:"string",required:"username"==W.value,message:V("usernamePlaceholder"),trigger:["blur","change"]},password:{type:"string",required:"username"==W.value,message:V("passwordPlaceholder"),trigger:["blur","change"]},mobile:[{type:"string",required:"mobile"==W.value,message:V("mobilePlaceholder"),trigger:["blur","change"]},{validator:(e,l)=>"mobile"!=W.value||uni.$u.test.mobile(l),message:V("mobileError"),trigger:["change","blur"]}],mobile_code:{type:"string",required:"mobile"==W.value,message:V("codePlaceholder"),trigger:["blur","change"]}}))),ae=a(null),te=()=>{ae.value.validate().then((()=>{if(Q.login.agreement_show&&!X.value)return i({title:V("isAgreeTips"),icon:"none"}),!1;if(ee.value)return;ee.value=!0;("username"==W.value?T:F)(Z).then((e=>{O.setToken(e.data.token),Q.login.is_bind_mobile&&!e.data.mobile&&uni.setStorageSync("isbindmobile",!0),P().handleLoginBack()})).catch((()=>{ee.value=!1}))}))},re=()=>{const e=A();if(e.length>1){"app/pages/auth/index"==e[e.length-2].route?L({delta:1}):n({url:"/app/pages/auth/index",mode:"redirectTo"})}else n({url:"/app/pages/auth/index",mode:"redirectTo"})};return(e,l)=>{const a=S,t=j(U("u-input"),R),r=j(U("u-form-item"),I),o=j(U("sms-code"),G),s=j(U("u-form"),N),i=j(U("u-checkbox"),$),u=j(U("u-checkbox-group"),D),d=z,p=q;return W.value?(m(),c(a,{key:0,class:"w-screen h-screen flex flex-col",style:C(e.themeColor())},{default:x((()=>[g(a,{class:"mx-[60rpx]"},{default:x((()=>[g(a,{class:"pt-[140rpx] text-[44rpx] font-500 text-[#333]"},{default:x((()=>[b(f("username"==W.value?h(V)("accountLogin"):h(V)("mobileLogin")),1)])),_:1}),g(a,{class:"text-[26rpx] leading-[39rpx] text-[var(--text-color-light6)] mt-[16rpx] mb-[80rpx]"},{default:x((()=>[b(f("username"==W.value?h(V)("accountLoginTip"):h(V)("mobileLoginTip")),1)])),_:1}),g(s,{labelPosition:"left",model:Z,errorType:"toast",rules:h(le),ref_key:"formRef",ref:ae},{default:x((()=>["username"==W.value?(m(),v(_,{key:0},[g(a,{class:"h-[88rpx] flex w-full items-center px-[30rpx] rounded-[var(--goods-rounded-mid)] box-border bg-[#F6F6F6]"},{default:x((()=>[g(r,{label:"",prop:"username","border-bottom":!1},{default:x((()=>[g(t,{modelValue:Z.username,"onUpdate:modelValue":l[0]||(l[0]=e=>Z.username=e),border:"none",maxlength:"40",placeholder:h(V)("usernamePlaceholder"),autocomplete:"off",class:"!bg-transparent",disabled:J.value,fontSize:"26rpx",placeholderClass:"!text-[var(--text-color-light9)] text-[26rpx]"},null,8,["modelValue","placeholder","disabled"])])),_:1})])),_:1}),g(a,{class:"h-[88rpx] flex w-full items-center px-[30rpx] rounded-[var(--goods-rounded-mid)] box-border bg-[#F6F6F6] mt-[40rpx]"},{default:x((()=>[g(r,{label:"",prop:"password","border-bottom":!1},{default:x((()=>[g(t,{modelValue:Z.password,"onUpdate:modelValue":l[1]||(l[1]=e=>Z.password=e),border:"none",type:"password",maxlength:"40",placeholder:h(V)("passwordPlaceholder"),autocomplete:"new-password",class:"!bg-transparent",disabled:J.value,fontSize:"26rpx",placeholderClass:"!text-[var(--text-color-light9)] text-[26rpx]"},null,8,["modelValue","placeholder","disabled"])])),_:1})])),_:1})],64)):y("v-if",!0),"mobile"==W.value?(m(),v(_,{key:1},[g(a,{class:"h-[88rpx] flex w-full items-center px-[30rpx] rounded-[var(--goods-rounded-mid)] box-border bg-[#F6F6F6]"},{default:x((()=>[g(r,{label:"",prop:"mobile","border-bottom":!1},{default:x((()=>[g(t,{modelValue:Z.mobile,"onUpdate:modelValue":l[2]||(l[2]=e=>Z.mobile=e),type:"number",maxlength:"11",border:"none",placeholder:h(V)("mobilePlaceholder"),autocomplete:"off",class:"!bg-transparent",disabled:J.value,fontSize:"26rpx",placeholderClass:"!text-[var(--text-color-light9)] text-[26rpx]"},null,8,["modelValue","placeholder","disabled"])])),_:1})])),_:1}),g(a,{class:"h-[88rpx] flex w-full items-center px-[30rpx] rounded-[var(--goods-rounded-mid)] box-border bg-[#F6F6F6] mt-[40rpx] text-[26rpx]"},{default:x((()=>[g(r,{label:"",prop:"mobile_code","border-bottom":!1},{default:x((()=>[g(t,{modelValue:Z.mobile_code,"onUpdate:modelValue":l[5]||(l[5]=e=>Z.mobile_code=e),type:"number",maxlength:"4",border:"none",class:"!bg-transparent",fontSize:"26rpx",disabled:J.value,placeholder:h(V)("codePlaceholder"),placeholderClass:"!text-[var(--text-color-light9)] text-[26rpx]"},{suffix:x((()=>[h(Q).login.agreement_show?(m(),c(o,{key:0,mobile:Z.mobile,type:"login",modelValue:Z.mobile_key,"onUpdate:modelValue":l[3]||(l[3]=e=>Z.mobile_key=e),isAgree:X.value},null,8,["mobile","modelValue","isAgree"])):(m(),c(o,{key:1,mobile:Z.mobile,type:"login",modelValue:Z.mobile_key,"onUpdate:modelValue":l[4]||(l[4]=e=>Z.mobile_key=e)},null,8,["mobile","modelValue"]))])),_:1},8,["modelValue","disabled","placeholder"])])),_:1})])),_:1})],64)):y("v-if",!0)])),_:1},8,["model","rules"]),"username"==W.value?(m(),c(a,{key:0,class:"text-right text-[24rpx] text-[var(--text-color-light9)] leading-[34rpx] mt-[20rpx]",onClick:l[6]||(l[6]=e=>h(n)({url:"/app/pages/auth/resetpwd"}))},{default:x((()=>[b(f(h(V)("resetpwd")),1)])),_:1})):y("v-if",!0),g(a,{class:k({"mt-[160rpx]":"username"!=W.value,"mt-[106rpx]":"username"==W.value})},{default:x((()=>[h(Q).login.agreement_show?(m(),c(a,{key:0,class:"flex items-center mb-[20rpx] py-[10rpx]",onClick:w(K,["stop"])},{default:x((()=>[g(u,{onChange:K},{default:x((()=>[g(i,{activeColor:"var(--primary-color)",checked:X.value,shape:"circle",size:"24rpx",customStyle:{marginTop:"4rpx"}},null,8,["checked"])])),_:1}),g(a,{class:"text-[24rpx] text-[var(--text-color-light6)] flex items-center flex-wrap"},{default:x((()=>[g(d,null,{default:x((()=>[b(f(h(V)("agreeTips")),1)])),_:1}),g(d,{onClick:l[7]||(l[7]=w((e=>h(n)({url:"/app/pages/auth/agreement?key=privacy"})),["stop"])),class:"text-primary"},{default:x((()=>[b("《"+f(h(V)("privacyAgreement"))+"》",1)])),_:1}),g(d,null,{default:x((()=>[b(f(h(V)("and")),1)])),_:1}),g(d,{onClick:l[8]||(l[8]=w((e=>h(n)({url:"/app/pages/auth/agreement?key=service"})),["stop"])),class:"text-primary"},{default:x((()=>[b("《"+f(h(V)("userAgreement"))+"》",1)])),_:1})])),_:1})])),_:1},8,["onClick"])):y("v-if",!0),g(p,{class:"w-full h-[80rpx] !bg-[var(--primary-color)] text-[26rpx] rounded-[40rpx] leading-[80rpx] font-500 !text-[#fff] !mx-[0]",loadingText:h(V)("logining"),onClick:te},{default:x((()=>[b(f(h(V)("login")),1)])),_:1},8,["loadingText"]),g(a,{class:"flex items-center justify-between mt-[30rpx]"},{default:x((()=>["username"==W.value&&h(Q).login.is_mobile||"mobile"==W.value&&h(Q).login.is_username?(m(),c(a,{key:0,class:"text-[26rpx] text-[var(--text-color-light6)] leading-[34rpx]",onClick:M},{default:x((()=>[b(f("username"==W.value?h(V)("mobileLogin"):h(V)("accountLogin")),1)])),_:1})):y("v-if",!0),g(a,{class:"text-[26rpx] text-[#333] leading-[34rpx]",onClick:l[9]||(l[9]=e=>h(n)({url:"/app/pages/auth/register",param:{type:W.value}}))},{default:x((()=>[g(d,null,{default:x((()=>[b(f(h(V)("noAccount"))+",",1)])),_:1}),g(d,{class:"text-primary"},{default:x((()=>[b(f(h(V)("toRegister")),1)])),_:1})])),_:1})])),_:1})])),_:1},8,["class"])])),_:1}),Y.value?(m(),c(a,{key:0,class:"footer w-full"},{default:x((()=>[g(a,{class:"text-[26rpx] leading-[36rpx] text-[#333] text-center mb-[30rpx] font-400"},{default:x((()=>[b(f(h(V)("oneClicklogin")),1)])),_:1}),g(a,{class:"flex justify-center"},{default:x((()=>[g(p,{class:"h-[80rpx] w-[80rpx] text-[46rpx] !text-[#1AAB37] text-center !p-0 !bg-transparent leading-[79rpx] border-[2rpx] rounded-[50%] border-solid border-[#ddd] nc-iconfont nc-icon-weixinV6mm overflow-hidden",onClick:re})])),_:1})])),_:1})):y("v-if",!0)])),_:1},8,["style"])):y("v-if",!0)}}}),[["__scopeId","data-v-a5f2fcf3"]]);export{J as default};