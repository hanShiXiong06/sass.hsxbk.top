import{d as a,r as e,x as t,p as s,J as o,o as r,c as i,w as n,b as p,f as u,Y as m,g as l,h as c,i as d}from"./index-2882a2d8.js";import{_ as h}from"./u-empty.662c89c7.js";import{a as _}from"./cps.6fc4edcd.js";import"./u-icon.1104ad2f.js";import"./_plugin-vue_export-helper.1b428a4d.js";const f=a({__name:"index",setup(a){const{setShare:f,onShareAppMessage:v,onShareTimeline:x}=m();f(),v(),x();const j=e();return t((()=>{})),s((a=>{_({type:a.type,act_id:a.act_id}).then((a=>{j.value=a.data,o({title:a.data.act_name}),""!=j.value.h5?window.location.href=j.value.h5:uni.$u.toast("当前渠道不支持此活动")}))})),(a,e)=>{const t=l(c("u-empty"),h),s=d;return j.value&&""==j.value.h5?(r(),i(s,{key:0,class:"mt-[200px]"},{default:n((()=>[p(t,{mode:"data",text:"该活动不支持此渠道~~~"})])),_:1})):u("v-if",!0)}}});export{f as default};
