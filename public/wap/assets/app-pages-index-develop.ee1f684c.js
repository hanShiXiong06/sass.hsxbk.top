import{d as e,K as a,o as l,c as t,w as s,b as r,y as o,z as i,u as p,n as d,t as n,F as c,i as u,D as x,g as m,h as f,C as _}from"./index-ef55c51f.js";import{_ as b}from"./u-input.dca6912e.js";import{m as g}from"./manifest.3a40c0c0.js";import"./u-icon.ea2e3f36.js";import"./_plugin-vue_export-helper.1b428a4d.js";const h=e({__name:"develop",setup(e){const h=a({siteId:"",baseUrl:`${location.origin}/api/`,imgUrl:""}),v=()=>{if(0==h.siteId.length)return void n({title:c("siteIdPlaceholder"),icon:"none"});if(!/^[0-9]+$/.test(h.siteId))return void n({title:c("pleaseEnterNumber"),icon:"none"});uni.setStorageSync("wap_site_id",h.siteId);let e=uni.getStorageSync("develop_before_path")||"/app/pages/index/index";"/app/pages/index/develop"==e&&(e="/app/pages/index/index"),e=e.replace("/",""),uni.removeStorageSync("develop_before_path"),location.href=`${location.origin}${g.h5.router.base}${e}`};return(e,a)=>{const n=u,g=x,I=m(f("u-input"),b),y=_;return l(),t(n,{class:"mt-[80rpx] px-[60rpx]",style:d(e.themeColor())},{default:s((()=>[r(n,{class:"font-bold text-xl mb-[80rpx]"},{default:s((()=>[o(i(p(c)("developTitle")),1)])),_:1}),r(n,{class:"mb-[40rpx] flex flex-col"},{default:s((()=>[r(g,{class:"mb-[10rpx]"},{default:s((()=>[o(i(p(c)("baseUrl")),1)])),_:1}),r(g,{class:"text-sm"},{default:s((()=>[o(i(h.baseUrl),1)])),_:1})])),_:1}),r(n,{class:"mb-[40rpx] flex flex-col"},{default:s((()=>[r(g,{class:"mb-[10rpx]"},{default:s((()=>[o(i(p(c)("imgUrl")),1)])),_:1}),r(g,{class:"text-sm"},{default:s((()=>[o(i(h.imgUrl),1)])),_:1})])),_:1}),r(n,{class:"mb-[40rpx] flex flex-col"},{default:s((()=>[r(g,{class:"mb-[20rpx]"},{default:s((()=>[o(i(p(c)("siteId")),1)])),_:1}),r(I,{modelValue:h.siteId,"onUpdate:modelValue":a[0]||(a[0]=e=>h.siteId=e),clearable:"",placeholder:p(c)("siteIdPlaceholder")},null,8,["modelValue","placeholder"])])),_:1}),r(y,{class:"mt-[80rpx] bg-[var(--primary-color)] text-[#fff] h-[80rpx] leading-[80rpx] rounded-[100rpx] text-[28rpx]",onClick:v},{default:s((()=>[o(i(p(c)("confirm")),1)])),_:1})])),_:1},8,["style"])}}});export{h as default};
