import{O as h,d as q,x as F,f as I,r as m,l as N,n as $,h as v,c as A,a as n,t as b,u as p,R as L,s as U,w as s,e as a,i as u,q as j,aW as M,a7 as O,at as P,au as G,L as K,K as T,E as W,M as Y,Y as z}from"./index-37fee5a0.js";/* empty css                   *//* empty css                *//* empty css                  *//* empty css                 */import"./el-form-item-4ed993c7.js";/* empty css                       *//* empty css                 *//* empty css                *//* empty css                 */import{g as H}from"./config-a0063fe8.js";function J(c){return h.get(`tk_yht/sms/${c}`)}function Q(c){return h.put(`tk_yht/sms/${c.sms_type}`,c,{showSuccessMessage:!0})}const X={class:"main-container"},Z={class:"flex ml-[18px] justify-between items-center mt-[20px]"},ee={class:"text-[20px]"},te=n("a",{href:"https://api.crmeb.com/",target:"_blank"},"打开一号通后台",-1),ae=n("span",{class:"ml-2 relative flex h-3 w-3 mb"},[n("span",{class:"animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"}),n("span",{class:"relative inline-flex rounded-full h-3 w-3 bg-sky-400"})],-1),se={class:"fixed-footer-wrap"},oe={class:"fixed-footer"},ke=q({__name:"config",setup(c){const w=F(),x=I(),V=w.meta.title;m();const l=m(!0),f=m(),E=o=>{x.push(o)},D=N(()=>({access_key:[{required:!0,message:"access_key必须填写",trigger:"blur"}],secret_key:[{required:!0,message:"secret_key必须填写",trigger:"blur"}]})),t=$({...{sms_type:"",access_key:"",secret_key:"",is_use:""}});(async()=>{l.value=!0;const o=await(await J("yht")).data;if(Object.keys(t).forEach(e=>{o[e]!=null&&(t[e]=o[e]),o.params[e]!=null&&(t[e]=o.params[e].value)}),t.access_key==""||t.secret_key==""){const e=await H();t.access_key=e.data.access_key,t.secret_key=e.data.secret_key}l.value=!1})();const R=async o=>{l.value||!o||await o.validate(async e=>{e&&(l.value=!0,Q(t).then(d=>{l.value=!1}).catch(()=>{l.value=!1}))})};return(o,e)=>{const y=M,d=O,g=P,C=G,i=K,k=T,_=W,B=Y,S=z;return v(),A("div",X,[n("div",Z,[n("span",ee,b(p(V)),1)]),L((v(),U(B,{model:t,"label-width":"140px",ref_key:"formRef",ref:f,rules:p(D),class:"page-form"},{default:s(()=>[a(d,{class:"box-card !border-none",shadow:"never"},{default:s(()=>[a(d,{class:"!border-none",shadow:"never",style:{width:"640px"}},{default:s(()=>[a(y,{type:"warning",title:"首次配置默认使用通用设置信息，也可自定义配置，用于框架短信驱动发送",closable:!1,"show-icon":""})]),_:1}),a(i,{label:"短信启用"},{default:s(()=>[a(C,{modelValue:t.is_use,"onUpdate:modelValue":e[0]||(e[0]=r=>t.is_use=r)},{default:s(()=>[a(g,{label:1},{default:s(()=>[u("启用")]),_:1}),a(g,{label:0},{default:s(()=>[u("停用")]),_:1})]),_:1},8,["modelValue"])]),_:1}),a(i,{label:"access_key",prop:"access_key"},{default:s(()=>[a(k,{modelValue:t.access_key,"onUpdate:modelValue":e[1]||(e[1]=r=>t.access_key=r),placeholder:"access_key一号通后台应用管理获得APPID",class:"input-width",clearable:""},null,8,["modelValue"])]),_:1}),a(i,{label:"secret_key",prop:"secret_key"},{default:s(()=>[a(k,{modelValue:t.secret_key,"onUpdate:modelValue":e[2]||(e[2]=r=>t.secret_key=r),placeholder:"secret_key一号通后台应用管理获得AppSecret",class:"input-width",clearable:""},null,8,["modelValue"])]),_:1}),a(i,{label:"常用导航"},{default:s(()=>[a(_,null,{default:s(()=>[te]),_:1}),a(_,{onClick:e[3]||(e[3]=r=>E("/setting/notice/template"))},{default:s(()=>[u(" 设置模板 "),ae]),_:1})]),_:1})]),_:1})]),_:1},8,["model","rules"])),[[S,l.value]]),n("div",se,[n("div",oe,[a(_,{type:"primary",loading:l.value,onClick:e[4]||(e[4]=r=>R(f.value))},{default:s(()=>[u(b(p(j)("confirm")),1)]),_:1},8,["loading"])])])])}}});export{ke as default};
