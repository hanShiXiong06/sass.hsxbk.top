import{d as a,r as e,x as s,p as t,L as n,o,c as i,w as r,b as u,f as d,a3 as p,g as c,h as l,i as m,a$ as h}from"./index-71c7df08.js";import{a as f}from"./cps.ffaf49dc.js";const v=a({__name:"index",setup(a){const{setShare:v,onShareAppMessage:x,onShareTimeline:_}=p();v(),x(),_();const y=e();return s((()=>{})),t((a=>{f({type:a.type,act_id:a.act_id}).then((a=>{y.value=a.data,n({title:a.data.act_name}),""!=y.value.h5?window.location.href=y.value.h5:uni.$u.toast("当前渠道不支持此活动")}))})),(a,e)=>{const s=c(l("u-empty"),h),t=m;return y.value&&""==y.value.h5?(o(),i(t,{key:0,class:"mt-[200px]"},{default:r((()=>[u(s,{mode:"data",text:"该活动不支持此渠道~~~"})])),_:1})):d("v-if",!0)}}});export{v as default};
