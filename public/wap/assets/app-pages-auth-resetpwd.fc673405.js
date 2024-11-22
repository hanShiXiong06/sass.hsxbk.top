import{d as e,j as r,L as o,r as l,O as a,F as t,o as s,c as d,w as p,b as i,y as m,z as u,u as n,n as c,Y as b,a as x,i as f,g,h,C as _,G as w}from"./index-7bf68536.js";import{_ as v}from"./u-input.09a5cedd.js";import{_ as y,a as V}from"./u-form.78a4f7c2.js";import{_ as j}from"./sms-code.vue_vue_type_script_setup_true_lang.eace8f61.js";import{t as P}from"./topTabbar.f3f9eebd.js";import{_ as F}from"./_plugin-vue_export-helper.1b428a4d.js";import"./u-icon.0c1c54c7.js";import"./u-line.463a2a45.js";import"./u-modal.b47eb877.js";import"./u-loading-icon.b37701e7.js";import"./u-popup.be4bfacd.js";import"./u-transition.cdf87992.js";import"./u-safe-bottom.908eeae4.js";const C=F(e({__name:"resetpwd",setup(e){let F={};P().setTopTabbarParam({title:"",topStatusBar:{bgColor:"#fff",textColor:"#333"}}),r((()=>Object.keys(F).length?w(Number(F.height))+w(F.top)+w(8)+"rpx":"auto"));const C=o({mobile:"",mobile_code:"",mobile_key:"",password:"",confirm_password:""}),T=l(!0);a((()=>{setTimeout((()=>{T.value=!1}),800)}));const k=l(!1),z=l(null),U={password:{type:"string",required:!0,message:t("passwordPlaceholder"),trigger:["blur","change"]},confirm_password:[{type:"string",required:!0,message:t("confirmPasswordPlaceholder"),trigger:["blur","change"]},{validator:(e,r)=>r==C.password,message:t("confirmPasswordError"),trigger:["change","blur"]}],mobile:[{type:"string",required:!0,message:t("mobilePlaceholder"),trigger:["blur","change"]},{validator:(e,r)=>uni.$u.test.mobile(r),message:t("mobileError"),trigger:["change","blur"]}],mobile_code:{type:"string",required:!0,message:t("codePlaceholder"),trigger:["blur","change"]}},S=()=>{z.value.validate().then((()=>{k.value||(k.value=!0,b(C).then((e=>{x({url:"/app/pages/auth/login",mode:"redirectTo"})})).catch((()=>{k.value=!1})))}))};return(e,r)=>{const o=f,l=g(h("u-input"),v),a=g(h("u-form-item"),y),b=g(h("sms-code"),j),x=g(h("u-form"),V),w=_;return s(),d(o,{class:"w-screen h-screen flex flex-col",style:c(e.themeColor())},{default:p((()=>[i(o,{class:"mx-[60rpx]"},{default:p((()=>[i(o,{class:"pt-[140rpx] text-[44rpx] font-500 text-[#333]"},{default:p((()=>[m(u(n(t)("findPassword")),1)])),_:1}),i(o,{class:"text-[26rpx] leading-[39rpx] text-[var(--text-color-light6)] mt-[16rpx] mb-[80rpx]"},{default:p((()=>[m(u(n(t)("findPasswordTip")),1)])),_:1}),i(x,{labelPosition:"left",model:C,errorType:"toast",rules:U,ref_key:"formRef",ref:z},{default:p((()=>[i(o,{class:"h-[88rpx] flex w-full items-center px-[30rpx] rounded-[var(--goods-rounded-mid)] box-border bg-[#F6F6F6]"},{default:p((()=>[i(a,{label:"",prop:"mobile","border-bottom":!1},{default:p((()=>[i(l,{modelValue:C.mobile,"onUpdate:modelValue":r[0]||(r[0]=e=>C.mobile=e),type:"number",maxlength:"11",border:"none",placeholder:n(t)("mobilePlaceholder"),class:"!bg-transparent",disabled:T.value,fontSize:"26rpx",placeholderClass:"!text-[var(--text-color-light9)] text-[26rpx]"},null,8,["modelValue","placeholder","disabled"])])),_:1})])),_:1}),i(o,{class:"h-[88rpx] flex w-full items-center px-[30rpx] rounded-[var(--goods-rounded-mid)] box-border bg-[#F6F6F6] mt-[40rpx]"},{default:p((()=>[i(a,{label:"",prop:"code","border-bottom":!1},{default:p((()=>[i(l,{modelValue:C.mobile_code,"onUpdate:modelValue":r[2]||(r[2]=e=>C.mobile_code=e),type:"number",maxlength:"4",border:"none",placeholder:n(t)("codePlaceholder"),class:"!bg-transparent",disabled:T.value,fontSize:"26rpx",placeholderClass:"!text-[var(--text-color-light9)] text-[26rpx]"},{suffix:p((()=>[i(b,{mobile:C.mobile,type:"find_pass",modelValue:C.mobile_key,"onUpdate:modelValue":r[1]||(r[1]=e=>C.mobile_key=e)},null,8,["mobile","modelValue"])])),_:1},8,["modelValue","placeholder","disabled"])])),_:1})])),_:1}),i(o,{class:"h-[88rpx] flex w-full items-center px-[30rpx] rounded-[var(--goods-rounded-mid)] box-border bg-[#F6F6F6] mt-[40rpx]"},{default:p((()=>[i(a,{label:"",prop:"password","border-bottom":!1},{default:p((()=>[i(l,{modelValue:C.password,"onUpdate:modelValue":r[3]||(r[3]=e=>C.password=e),border:"none",type:"password",maxlength:"40",placeholder:n(t)("passwordPlaceholder"),class:"!bg-transparent",disabled:T.value,fontSize:"26rpx",placeholderClass:"!text-[var(--text-color-light9)] text-[26rpx]"},null,8,["modelValue","placeholder","disabled"])])),_:1})])),_:1}),i(o,{class:"h-[88rpx] flex w-full items-center px-[30rpx] rounded-[var(--goods-rounded-mid)] box-border bg-[#F6F6F6] mt-[40rpx]"},{default:p((()=>[i(a,{label:"",prop:"confirm_password","border-bottom":!1},{default:p((()=>[i(l,{modelValue:C.confirm_password,"onUpdate:modelValue":r[4]||(r[4]=e=>C.confirm_password=e),border:"none",type:"password",maxlength:"40",placeholder:n(t)("confirmPasswordPlaceholder"),class:"!bg-transparent",disabled:T.value,fontSize:"26rpx",placeholderClass:"!text-[var(--text-color-light9)] text-[26rpx]"},null,8,["modelValue","placeholder","disabled"])])),_:1})])),_:1})])),_:1},8,["model"]),i(o,{class:"mt-[160rpx]"},{default:p((()=>[i(w,{class:"w-full h-[80rpx] !bg-[var(--primary-color)] text-[26rpx] rounded-[40rpx] leading-[80rpx] font-500 !text-[#fff]",onClick:S},{default:p((()=>[m(u(n(t)("confirm")),1)])),_:1})])),_:1})])),_:1})])),_:1},8,["style"])}}}),[["__scopeId","data-v-ab28339f"]]);export{C as default};
