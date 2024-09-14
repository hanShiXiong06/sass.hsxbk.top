import{d as e,j as r,N as l,r as a,T as o,F as t,o as s,c as d,w as p,b as i,y as m,z as n,u,n as c,a2 as b,a as x,i as f,g,h,C as _,G as w,Q as v,R as y,S as P,_ as V}from"./index-22c9735d.js";import{_ as F}from"./sms-code.vue_vue_type_script_setup_true_lang.b7882cc5.js";import{t as C}from"./topTabbar.34bc4ca3.js";const T=V(e({__name:"resetpwd",setup(e){let V={};C().setTopTabbarParam({title:"",topStatusBar:{bgColor:"#fff",textColor:"#333"}}),r((()=>Object.keys(V).length?w(Number(V.height))+w(V.top)+w(8)+"rpx":"auto"));const T=l({mobile:"",mobile_code:"",mobile_key:"",password:"",confirm_password:""}),k=a(!0);o((()=>{setTimeout((()=>{k.value=!1}),800)}));const S=a(!1),j=a(null),z={password:{type:"string",required:!0,message:t("passwordPlaceholder"),trigger:["blur","change"]},confirm_password:[{type:"string",required:!0,message:t("confirmPasswordPlaceholder"),trigger:["blur","change"]},{validator:(e,r)=>r==T.password,message:t("confirmPasswordError"),trigger:["change","blur"]}],mobile:[{type:"string",required:!0,message:t("mobilePlaceholder"),trigger:["blur","change"]},{validator:(e,r)=>uni.$u.test.mobile(r),message:t("mobileError"),trigger:["change","blur"]}],mobile_code:{type:"string",required:!0,message:t("codePlaceholder"),trigger:["blur","change"]}},U=()=>{j.value.validate().then((()=>{S.value||(S.value=!0,b(T).then((e=>{x({url:"/app/pages/auth/login",mode:"redirectTo"})})).catch((()=>{S.value=!1})))}))};return(e,r)=>{const l=f,a=g(h("u-input"),v),o=g(h("u-form-item"),y),b=g(h("sms-code"),F),x=g(h("u-form"),P),w=_;return s(),d(l,{class:"w-screen h-screen flex flex-col",style:c(e.themeColor())},{default:p((()=>[i(l,{class:"mx-[60rpx]"},{default:p((()=>[i(l,{class:"pt-[140rpx] text-[44rpx] font-500 text-[#333]"},{default:p((()=>[m(n(u(t)("findPassword")),1)])),_:1}),i(l,{class:"text-[26rpx] leading-[39rpx] text-[var(--text-color-light6)] mt-[16rpx] mb-[80rpx]"},{default:p((()=>[m(n(u(t)("findPasswordTip")),1)])),_:1}),i(x,{labelPosition:"left",model:T,errorType:"toast",rules:z,ref_key:"formRef",ref:j},{default:p((()=>[i(l,{class:"h-[88rpx] flex w-full items-center px-[30rpx] rounded-[var(--goods-rounded-mid)] box-border bg-[#F6F6F6]"},{default:p((()=>[i(o,{label:"",prop:"mobile","border-bottom":!1},{default:p((()=>[i(a,{modelValue:T.mobile,"onUpdate:modelValue":r[0]||(r[0]=e=>T.mobile=e),type:"number",maxlength:"11",border:"none",placeholder:u(t)("mobilePlaceholder"),class:"!bg-transparent",disabled:k.value,fontSize:"26rpx",placeholderClass:"!text-[var(--text-color-light9)] text-[26rpx]"},null,8,["modelValue","placeholder","disabled"])])),_:1})])),_:1}),i(l,{class:"h-[88rpx] flex w-full items-center px-[30rpx] rounded-[var(--goods-rounded-mid)] box-border bg-[#F6F6F6] mt-[40rpx]"},{default:p((()=>[i(o,{label:"",prop:"code","border-bottom":!1},{default:p((()=>[i(a,{modelValue:T.mobile_code,"onUpdate:modelValue":r[2]||(r[2]=e=>T.mobile_code=e),type:"number",maxlength:"4",border:"none",placeholder:u(t)("codePlaceholder"),class:"!bg-transparent",disabled:k.value,fontSize:"26rpx",placeholderClass:"!text-[var(--text-color-light9)] text-[26rpx]"},{suffix:p((()=>[i(b,{mobile:T.mobile,type:"find_pass",modelValue:T.mobile_key,"onUpdate:modelValue":r[1]||(r[1]=e=>T.mobile_key=e)},null,8,["mobile","modelValue"])])),_:1},8,["modelValue","placeholder","disabled"])])),_:1})])),_:1}),i(l,{class:"h-[88rpx] flex w-full items-center px-[30rpx] rounded-[var(--goods-rounded-mid)] box-border bg-[#F6F6F6] mt-[40rpx]"},{default:p((()=>[i(o,{label:"",prop:"password","border-bottom":!1},{default:p((()=>[i(a,{modelValue:T.password,"onUpdate:modelValue":r[3]||(r[3]=e=>T.password=e),border:"none",type:"password",maxlength:"40",placeholder:u(t)("passwordPlaceholder"),class:"!bg-transparent",disabled:k.value,fontSize:"26rpx",placeholderClass:"!text-[var(--text-color-light9)] text-[26rpx]"},null,8,["modelValue","placeholder","disabled"])])),_:1})])),_:1}),i(l,{class:"h-[88rpx] flex w-full items-center px-[30rpx] rounded-[var(--goods-rounded-mid)] box-border bg-[#F6F6F6] mt-[40rpx]"},{default:p((()=>[i(o,{label:"",prop:"confirm_password","border-bottom":!1},{default:p((()=>[i(a,{modelValue:T.confirm_password,"onUpdate:modelValue":r[4]||(r[4]=e=>T.confirm_password=e),border:"none",type:"password",maxlength:"40",placeholder:u(t)("confirmPasswordPlaceholder"),class:"!bg-transparent",disabled:k.value,fontSize:"26rpx",placeholderClass:"!text-[var(--text-color-light9)] text-[26rpx]"},null,8,["modelValue","placeholder","disabled"])])),_:1})])),_:1})])),_:1},8,["model"]),i(l,{class:"mt-[160rpx]"},{default:p((()=>[i(w,{class:"w-full h-[80rpx] !bg-[var(--primary-color)] text-[26rpx] rounded-[40rpx] leading-[80rpx] font-500 !text-[#fff]",onClick:U},{default:p((()=>[m(n(u(t)("confirm")),1)])),_:1})])),_:1})])),_:1})])),_:1},8,["style"])}}}),[["__scopeId","data-v-ab28339f"]]);export{T as default};
