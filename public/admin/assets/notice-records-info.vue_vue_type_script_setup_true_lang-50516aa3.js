import{d as x,r as p,n as B,l as F,h as r,s as y,w as o,a as i,e as n,i as C,t as l,u as t,q as a,R as N,c as u,B as f,L as R,M as T,E as j,X as I,Y as L}from"./index-37fee5a0.js";/* empty css                   *//* empty css                  *//* empty css                   *//* empty css                  *//* empty css                */import"./el-form-item-4ed993c7.js";const O={class:"input-width"},q={class:"input-width"},K={key:0},M={key:1},S={key:2},U={class:"input-width"},X={class:"input-width"},Y={class:"input-width"},$={class:"dialog-footer"},ee=x({__name:"notice-records-info",setup(z,{expose:g}){const m=p(!1),d=p(!0),v={create_time:0,message_data:"",message_key:"",message_type:"",name:"",nickname:"",receiver:"",notice_type:""},e=B({...v}),b=p(),w=F(()=>({}));return g({showDialog:m,setFormData:async(_=null)=>{d.value=!0,Object.assign(e,v),_&&Object.keys(e).forEach(s=>{_[s]!=null&&(e[s]=_[s])}),d.value=!1}}),(_,s)=>{const c=R,k=T,D=j,E=I,V=L;return r(),y(E,{modelValue:m.value,"onUpdate:modelValue":s[1]||(s[1]=h=>m.value=h),title:t(a)("messageInfo"),width:"550px","destroy-on-close":!0},{footer:o(()=>[i("span",$,[n(D,{type:"primary",onClick:s[0]||(s[0]=h=>m.value=!1)},{default:o(()=>[C(l(t(a)("confirm")),1)]),_:1})])]),default:o(()=>[N((r(),y(k,{model:e,"label-width":"110px",ref_key:"formRef",ref:b,rules:t(w),class:"page-form"},{default:o(()=>[n(c,{label:t(a)("messageKey")},{default:o(()=>[i("div",O,l(e.name),1)]),_:1},8,["label"]),n(c,{label:t(a)("smsType")},{default:o(()=>[i("div",q,[e.notice_type=="sms"?(r(),u("div",K,l(t(a)("sms")),1)):f("",!0),e.notice_type=="wechat"?(r(),u("div",M,l(t(a)("wechat")),1)):f("",!0),e.notice_type=="weapp"?(r(),u("div",S,l(t(a)("weapp")),1)):f("",!0)])]),_:1},8,["label"]),n(c,{label:t(a)("nickname")},{default:o(()=>[i("div",U,l(e.nickname),1)]),_:1},8,["label"]),n(c,{label:t(a)("receiver")},{default:o(()=>[i("div",X,l(e.receiver),1)]),_:1},8,["label"]),n(c,{label:t(a)("createTime")},{default:o(()=>[i("div",Y,l(e.create_time),1)]),_:1},8,["label"])]),_:1},8,["model","rules"])),[[V,d.value]])]),_:1},8,["modelValue","title"])}}});export{ee as _};
