import{d as e,j as a,l,r as t,N as r,p as o,F as s,o as i,c as d,w as n,b as u,y as p,z as c,u as m,A as b,f as g,n as x,O as f,P as _,a as h,H as y,i as v,g as k,h as S,D as C,C as T,G as V,k as j,Q as w,R as F,S as P,I as O,J as z,_ as A}from"./index-22c9735d.js";import{_ as I}from"./sms-code.vue_vue_type_script_setup_true_lang.b7882cc5.js";import{t as M}from"./topTabbar.34bc4ca3.js";const U=A(e({__name:"bind",setup(e){let A={};M().setTopTabbarParam({title:"",topStatusBar:{bgColor:"#fff",textColor:"#333"}}),a((()=>Object.keys(A).length?V(Number(A.height))+V(A.top)+V(8)+"rpx":"auto"));const U=l(),q=a((()=>U.info)),B=a((()=>j().login)),E=t(!1),N=t(!1),R=r({mobile:"",mobile_code:"",mobile_key:""}),D=t(!0);t(null),o((()=>{setTimeout((()=>{D.value=!1}),800),uni.getStorageSync("openid")&&Object.assign(R,{openid:uni.getStorageSync("openid")}),uni.getStorageSync("pid")&&Object.assign(R,{pid:uni.getStorageSync("pid")}),uni.getStorageSync("unionid")&&Object.assign(R,{unionid:uni.getStorageSync("unionid")})}));const G={mobile:[{type:"string",required:!0,message:s("mobilePlaceholder"),trigger:["blur","change"]},{validator(e,a,l){/^1[3-9]\d{9}$/.test(a)?l():l(new Error("请输入正确的手机号"))},message:s("mobileError"),trigger:["change","blur"]}],mobile_code:{type:"string",required:!0,message:s("codePlaceholder"),trigger:["blur","change"]}},H=()=>{N.value=!N.value},J=t(null),L=()=>{J.value.validate().then((()=>{if(E.value)return;E.value=!0;(q.value?f:_)(R).then((e=>{q.value?(U.getMemberInfo(),h({url:"/app/pages/member/personal",mode:"redirectTo"})):(U.setToken(e.data.token),y().handleLoginBack())})).catch((()=>{E.value=!1}))}))};return(e,a)=>{const l=v,t=k(S("u-input"),w),r=k(S("u-form-item"),F),o=k(S("sms-code"),I),f=k(S("u-form"),P),_=k(S("u-checkbox"),O),y=k(S("u-checkbox-group"),z),V=C,j=T;return i(),d(l,{class:"w-screen h-screen flex flex-col",style:x(e.themeColor())},{default:n((()=>[u(l,{class:"mx-[60rpx]"},{default:n((()=>[u(l,{class:"pt-[140rpx] text-[50rpx] text-[#333]"},{default:n((()=>[p(c(m(s)("bindMobile")),1)])),_:1}),u(l,{class:"text-[26rpx] leading-[39rpx] text-[var(--text-color-light6)] mt-[16rpx] mb-[80rpx]"},{default:n((()=>[p(c(m(s)("bindMobileTip")),1)])),_:1}),u(f,{labelPosition:"left",model:R,errorType:"toast",rules:G,ref_key:"formRef",ref:J},{default:n((()=>[u(l,{class:"h-[90rpx] flex w-full items-center px-[30rpx] rounded-[var(--goods-rounded-mid)] box-border bg-[#F6F6F6]"},{default:n((()=>[u(r,{label:"",prop:"mobile","border-bottom":!1},{default:n((()=>[u(t,{modelValue:R.mobile,"onUpdate:modelValue":a[0]||(a[0]=e=>R.mobile=e),type:"number",maxlength:"11",border:"none",placeholder:m(s)("mobilePlaceholder"),class:"!bg-transparent",disabled:D.value,fontSize:"26rpx",placeholderClass:"!text-[var(--text-color-light9)] text-[26rpx]"},null,8,["modelValue","placeholder","disabled"])])),_:1})])),_:1}),u(l,{class:"h-[90rpx] flex w-full items-center px-[30rpx] rounded-[var(--goods-rounded-mid)] box-border bg-[#F6F6F6] mt-[40rpx]"},{default:n((()=>[u(r,{label:"",prop:"mobile_code","border-bottom":!1},{default:n((()=>[u(t,{modelValue:R.mobile_code,"onUpdate:modelValue":a[2]||(a[2]=e=>R.mobile_code=e),type:"number",maxlength:"4",border:"none",placeholder:m(s)("codePlaceholder"),class:"!bg-transparent",disabled:D.value,fontSize:"26rpx",placeholderClass:"!text-[var(--text-color-light9)]"},{suffix:n((()=>[u(o,{mobile:R.mobile,type:"bind_mobile",modelValue:R.mobile_key,"onUpdate:modelValue":a[1]||(a[1]=e=>R.mobile_key=e)},null,8,["mobile","modelValue"])])),_:1},8,["modelValue","placeholder","disabled"])])),_:1})])),_:1})])),_:1},8,["model"]),u(l,{class:"mt-[100rpx]"},{default:n((()=>[m(B).agreement_show?(i(),d(l,{key:0,class:"flex items-center mb-[20rpx] py-[10rpx]",onClick:b(H,["stop"])},{default:n((()=>[u(y,{onChange:H},{default:n((()=>[u(_,{activeColor:"var(--primary-color)",checked:N.value,shape:"circle",size:"24rpx",customStyle:{marginTop:"4rpx"}},null,8,["checked"])])),_:1}),u(l,{class:"text-[24rpx] text-[var(--text-color-light6)] flex items-center flex-wrap"},{default:n((()=>[u(V,null,{default:n((()=>[p(c(m(s)("agreeTips")),1)])),_:1}),u(V,{onClick:a[3]||(a[3]=b((e=>m(h)({url:"/app/pages/auth/agreement?key=privacy"})),["stop"])),class:"text-primary"},{default:n((()=>[p("《"+c(m(s)("privacyAgreement"))+"》",1)])),_:1}),u(V,null,{default:n((()=>[p(c(m(s)("and")),1)])),_:1}),u(V,{onClick:a[4]||(a[4]=b((e=>m(h)({url:"/app/pages/auth/agreement?key=service"})),["stop"])),class:"text-primary"},{default:n((()=>[p("《"+c(m(s)("userAgreement"))+"》",1)])),_:1})])),_:1})])),_:1},8,["onClick"])):g("v-if",!0),u(j,{class:"w-full h-[80rpx] !bg-[var(--primary-color)] text-[26rpx] rounded-[40rpx] leading-[80rpx] font-500 !text-[#fff]",onClick:L},{default:n((()=>[p(c(m(s)("bind")),1)])),_:1})])),_:1})])),_:1})])),_:1},8,["style"])}}}),[["__scopeId","data-v-c5833b81"]]);export{U as default};