import{d as V,x as C,f as D,r as d,l as E,n as R,h as y,c as B,a as r,t as k,u as _,R as F,s as N,w as o,e as t,i as q,q as A,aW as I,a7 as L,K as P,L as S,E as U,M as j,Y as K}from"./index-37fee5a0.js";/* empty css                   *//* empty css                *//* empty css                  */import"./el-form-item-4ed993c7.js";/* empty css                 *//* empty css                *//* empty css                 */import{g as M,s as T}from"./config-a0063fe8.js";const W={class:"main-container"},Y={class:"flex ml-[18px] justify-between items-center mt-[20px]"},$={class:"text-[20px]"},z=r("a",{href:"https://api.crmeb.com/",target:"_blank"},"打开一号通后台",-1),G={class:"fixed-footer-wrap"},H={class:"fixed-footer"},ne=V({__name:"set",setup(J){const g=C();D();const v=g.meta.title;d();const a=d(!0),m=d(),h=E(()=>({access_key:[{required:!0,message:"access_key必须填写",trigger:"blur"}],secret_key:[{required:!0,message:"secret_key必须填写",trigger:"blur"}]})),s=R({...{access_key:"",secret_key:""}});(async()=>{a.value=!0;const l=await M();for(const e in s)s[e]=l.data[e];a.value=!1})();const b=async l=>{a.value||!l||await l.validate(async e=>{e&&(a.value=!0,T(s).then(c=>{a.value=!1}).catch(()=>{a.value=!1}))})};return(l,e)=>{const u=I,c=L,p=P,i=S,f=U,w=j,x=K;return y(),B("div",W,[r("div",Y,[r("span",$,k(_(v)),1)]),F((y(),N(w,{model:s,"label-width":"140px",ref_key:"formRef",ref:m,rules:_(h),class:"page-form"},{default:o(()=>[t(c,{class:"box-card !border-none",shadow:"never"},{default:o(()=>[t(c,{class:"!border-none",shadow:"never",style:{width:"640px"}},{default:o(()=>[t(u,{type:"warning",title:"1、应用于本插件接口/方法调用 2、后续适配相关驱动快速配置",closable:!1,"show-icon":""})]),_:1}),t(i,{label:"access_key",prop:"access_key"},{default:o(()=>[t(p,{modelValue:s.access_key,"onUpdate:modelValue":e[0]||(e[0]=n=>s.access_key=n),placeholder:"access_key一号通后台应用管理获得APPID",class:"input-width",clearable:""},null,8,["modelValue"])]),_:1}),t(i,{label:"secret_key",prop:"secret_key"},{default:o(()=>[t(p,{modelValue:s.secret_key,"onUpdate:modelValue":e[1]||(e[1]=n=>s.secret_key=n),placeholder:"secret_key一号通后台应用管理获得AppSecret",class:"input-width",clearable:""},null,8,["modelValue"])]),_:1}),t(i,{label:"管理后台"},{default:o(()=>[t(f,null,{default:o(()=>[z]),_:1})]),_:1})]),_:1})]),_:1},8,["model","rules"])),[[x,a.value]]),r("div",G,[r("div",H,[t(f,{type:"primary",loading:a.value,onClick:e[2]||(e[2]=n=>b(m.value))},{default:o(()=>[q(k(_(A)("confirm")),1)]),_:1},8,["loading"])])])])}}});export{ne as default};
