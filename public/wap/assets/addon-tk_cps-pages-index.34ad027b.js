import{d as a,Z as e,r as t,x as s,p as o,J as r,o as i,c as m,w as n,b as p,f as u,g as c,h as l,i as d}from"./index-7bf68536.js";import{_ as h}from"./u-empty.68b4529f.js";import{a as f}from"./cps.81000113.js";import{a as _}from"./common.1828864e.js";import"./u-icon.0c1c54c7.js";import"./_plugin-vue_export-helper.1b428a4d.js";const v=a({__name:"index",setup(a){const{setShare:v,onShareAppMessage:x,onShareTimeline:j}=e();v(),x(),j(),_();const y=t();return s((()=>{})),o((a=>{f({type:a.type,act_id:a.act_id}).then((a=>{y.value=a.data,r({title:a.data.act_name}),""!=y.value.h5?window.location.href=y.value.h5:uni.$u.toast("当前渠道不支持此活动")}))})),(a,e)=>{const t=c(l("u-empty"),h),s=d;return y.value&&""==y.value.h5?(i(),m(s,{key:0,class:"mt-[200px]"},{default:n((()=>[p(t,{mode:"data",text:"该活动不支持此渠道~~~"})])),_:1})):u("v-if",!0)}}});export{v as default};