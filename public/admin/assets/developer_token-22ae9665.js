import{d as w,r as i,cd as E,n as y,q as l,h as _,c as V,e as n,w as s,R as B,s as D,a as c,t as d,u as r,i as T,ce as C,K as R,L as N,E as q,M as F,a7 as I,Y as L}from"./index-37fee5a0.js";/* empty css                   *//* empty css                *//* empty css                *//* empty css                  */import"./el-form-item-4ed993c7.js";/* empty css                 */const P={class:"main-container"},K={class:"panel-title !text-sm"},M={class:"text-[14px] text-[#a9a9a9] leading-tight mt-[10px]"},H=w({__name:"developer_token",setup(S){const e=i(!0),o=i({token:""});E().then(({data:t})=>{e.value=!1,t.token&&(o.value=t)});const u=i(),v=y({token:[{required:!0,message:l("tokenPlaceholder"),trigger:"blur"}]}),f=async t=>{e.value||!t||await t.validate(async a=>{a&&(e.value=!0,C(o.value).then(()=>{e.value=!1}).catch(()=>{e.value=!1}))})};return(t,a)=>{const k=R,m=N,h=q,g=F,x=I,b=L;return _(),V("div",P,[n(x,{class:"box-card !border-none",shadow:"never"},{default:s(()=>[B((_(),D(g,{class:"page-form",model:o.value,"label-width":"0",ref_key:"formRef",ref:u,rules:v},{default:s(()=>[c("h3",K,d(r(l)("developerTokenEdit")),1),n(m,{label:"",prop:"token"},{default:s(()=>[c("div",null,[n(k,{modelValue:o.value.token,"onUpdate:modelValue":a[0]||(a[0]=p=>o.value.token=p),placeholder:r(l)("tokenPlaceholder"),class:"input-width",clearable:"",maxlength:"30"},null,8,["modelValue","placeholder"])]),c("div",M,d(r(l)("tokenTips")),1)]),_:1}),n(m,{label:""},{default:s(()=>[n(h,{type:"primary",loading:e.value,onClick:a[1]||(a[1]=p=>f(u.value))},{default:s(()=>[T(d(r(l)("save")),1)]),_:1},8,["loading"])]),_:1})]),_:1},8,["model","rules"])),[[b,e.value]])]),_:1})])}}});export{H as default};
