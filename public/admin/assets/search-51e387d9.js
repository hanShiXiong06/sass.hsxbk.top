import{d as z,x as F,f as q,r as v,n as g,h as d,c as k,a as t,u as l,t as p,q as x,R as A,s as L,w as o,e as n,i as u,B as P,aW as T,a7 as U,at as $,au as G,L as O,M as W,E as Y,Y as H,p as J,g as K,U as Q}from"./index-6f32d09b.js";/* empty css                   *//* empty css                  *//* empty css                */import"./el-form-item-4ed993c7.js";/* empty css                       *//* empty css                 *//* empty css                *//* empty css                 */import{r as w,c as X}from"./checkshop-9bda528f.js";import{g as Z}from"./config-3f6d52e9.js";import{_ as ee}from"./_plugin-vue_export-helper-c27b6911.js";function te(r){return w.post("tk_yht/delivery/setconfig",r,{showErrorMessage:!0,showSuccessMessage:!0})}function se(){return w.get("tk_yht/delivery/getconfig")}const b=r=>(J("data-v-52138269"),r=r(),K(),r),ae={class:"main-container"},oe={class:"flex ml-[18px] justify-between items-center mt-[20px]"},ne={class:"detail-head !m-0"},ce=b(()=>t("span",{class:"iconfont iconxiangzuojiantou !text-xs"},null,-1)),re={class:"ml-[1px]"},ie=b(()=>t("span",{class:"adorn"},"|",-1)),le={class:"right"},_e={key:0,class:"text-[12px] text-[#b2b2b2]"},de={class:"fixed-footer-wrap"},pe={class:"fixed-footer"},ue=z({__name:"search",setup(r){const E=F(),m=q(),C=E.meta.title,c=v(!0),R=async()=>{const a=await Z();a.data.access_key=="AppId"?(Q({message:"请先完成通用配置，才能开启物流查询",type:"info"}),m.push("/commonconfig")):(s.yht_access_key=a.data.access_key,s.yht_secret_key=a.data.secret_key)},s=g({interface_type:1,kdniao_id:"",kdniao_app_key:"",kdniao_is_pay:1,kd100_app_key:"",kd100_customer:"",yht_access_key:"",yht_secret_key:""});(async()=>{await X(),S()})();const S=async(a=0)=>{const e=await(await se()).data;Object.keys(s).forEach(i=>{e[i]!=null&&(s[i]=e[i])}),R(),c.value=!1},f=v(),V=g({}),B=async a=>{c.value||!a||await a.validate(async e=>{e&&(c.value=!0,te(s).then(()=>{c.value=!1}).catch(()=>{c.value=!1}))})};return(a,e)=>{const i=T,h=U,y=$,D=G,I=O,N=W,M=Y,j=H;return d(),k("div",ae,[t("div",oe,[t("div",ne,[t("div",{class:"left",onClick:e[0]||(e[0]=_=>l(m).push("/shop/order/delivery"))},[ce,t("span",re,p(l(x)("returnToPreviousPage")),1)]),ie,t("span",le,p(l(C)),1)])]),A((d(),L(N,{model:s,"label-width":"150px",ref_key:"formRef",ref:f,rules:V,class:"page-form"},{default:o(()=>[n(h,{class:"box-card !border-none",shadow:"never"},{default:o(()=>[n(h,{class:"!border-none",shadow:"never",style:{width:"640px"}},{default:o(()=>[n(i,{type:"warning",title:"说明:支持1000多家以上快递物流公司查询，单号自动识别，接口稳定，高效。",closable:!1,"show-icon":""})]),_:1}),n(I,{label:"是否启用",prop:"interface_type",class:""},{default:o(()=>[t("div",null,[n(D,{modelValue:s.interface_type,"onUpdate:modelValue":e[1]||(e[1]=_=>s.interface_type=_)},{default:o(()=>[n(y,{label:1,size:"large"},{default:o(()=>[u("关闭")]),_:1}),n(y,{label:1001,size:"large"},{default:o(()=>[u("启用")]),_:1})]),_:1},8,["modelValue"]),s.interface_type==1001?(d(),k("p",_e," 启用将会切换niucloud-shop商城系统的物流查询为一号通接口 ")):P("",!0)])]),_:1})]),_:1})]),_:1},8,["model","rules"])),[[j,c.value]]),t("div",de,[t("div",pe,[n(M,{type:"primary",loading:c.value,onClick:e[2]||(e[2]=_=>B(f.value))},{default:o(()=>[u(p(l(x)("save")),1)]),_:1},8,["loading"])])])])}}});const Se=ee(ue,[["__scopeId","data-v-52138269"]]);export{Se as default};
