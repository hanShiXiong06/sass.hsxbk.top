import{d as y,x as B,r as b,n as E,h as g,c as U,a as l,t as r,u as s,P as D,s as N,w as d,e as n,q as a,i as S,aB as k,K as F,aU as T,a0 as M,L as R,E as L,U as O}from"./index-17984968.js";/* empty css                   *//* empty css                  *//* empty css                *//* empty css                *//* empty css                  */import"./el-form-item-4ed993c7.js";/* empty css                    */import{Y as j,Z as A}from"./member-0ccc6229.js";import{_ as I}from"./_plugin-vue_export-helper-c27b6911.js";const J={class:"main-container bg-[#fff] rounded-[4px]"},q={class:"flex ml-[18px] justify-between items-center pt-[20px]"},K={class:"text-page-title"},P={class:"panel-title !text-sm"},Y={class:"form-tip"},Z={class:"form-tip"},$={class:"form-tip"},z={class:"form-tip"},G={class:"panel-title !text-sm"},H={class:"form-tip"},Q={class:"fixed-footer-wrap"},W={class:"fixed-footer"},X=y({__name:"login",setup(ee){const v=B().meta.title,u=b(!0),c=b(),o=E({is_username:0,is_mobile:0,is_auth_register:0,is_bind_mobile:0,agreement_show:0});(async(_=0)=>{const e=await(await j()).data;Object.keys(o).forEach(i=>{e[i]!=null&&(o[i]=Boolean(Number(e[i])))}),u.value=!1})();const p=(_,e)=>{o[e]=_},h=async _=>{u.value||!_||await _.validate(e=>{if(e){const i=JSON.parse(JSON.stringify(o));Object.keys(i).forEach(m=>{i[m]=Number(i[m])}),A(i).then(()=>{u.value=!1}).catch(()=>{u.value=!1})}})};return(_,e)=>{const i=k,m=F,f=T,x=M,w=R,V=L,C=O;return g(),U("div",J,[l("div",q,[l("span",K,r(s(v)),1)]),D((g(),N(w,{model:o,"label-width":"150px",ref_key:"ruleFormRef",ref:c,class:"page-form"},{default:d(()=>[n(x,{class:"box-card !border-none",shadow:"never"},{default:d(()=>[l("h3",P,r(s(a)("commonSetting")),1),n(m,{label:s(a)("logonMode")},{default:d(()=>[n(i,{modelValue:o.is_username,"onUpdate:modelValue":e[0]||(e[0]=t=>o.is_username=t),label:s(a)("isUsername"),onChange:e[1]||(e[1]=t=>p(t,"is_username"))},null,8,["modelValue","label"]),l("div",Y,r(s(a)("isUsernameTip")),1),n(i,{modelValue:o.is_mobile,"onUpdate:modelValue":e[2]||(e[2]=t=>o.is_mobile=t),label:s(a)("isMobile"),onChange:e[3]||(e[3]=t=>p(t,"is_mobile"))},null,8,["modelValue","label"]),l("div",Z,r(s(a)("isMobileTip")),1)]),_:1},8,["label"]),n(m,{label:s(a)("isBindMobile"),prop:"formData.is_bind_mobile"},{default:d(()=>[n(f,{modelValue:o.is_bind_mobile,"onUpdate:modelValue":e[4]||(e[4]=t=>o.is_bind_mobile=t),onChange:e[5]||(e[5]=t=>p(t,"is_bind_mobile"))},null,8,["modelValue"]),l("div",$,r(s(a)("isBindMobileTip")),1)]),_:1},8,["label"]),n(m,{label:s(a)("agreement"),prop:"formData.agreement_show"},{default:d(()=>[n(f,{modelValue:o.agreement_show,"onUpdate:modelValue":e[6]||(e[6]=t=>o.agreement_show=t),onChange:e[7]||(e[7]=t=>p(t,"agreement_show"))},null,8,["modelValue"]),l("div",z,r(s(a)("agreementTips")),1)]),_:1},8,["label"]),l("h3",G,r(s(a)("tripartiteSetting")),1),n(m,{label:s(a)("isAuthRegister"),prop:"formData.is_auth_register"},{default:d(()=>[n(f,{modelValue:o.is_auth_register,"onUpdate:modelValue":e[8]||(e[8]=t=>o.is_auth_register=t),onChange:e[9]||(e[9]=t=>p(t,"is_auth_register"))},null,8,["modelValue"]),l("div",H,r(s(a)("isAuthRegisterTip")),1)]),_:1},8,["label"])]),_:1})]),_:1},8,["model"])),[[C,u.value]]),l("div",Q,[l("div",W,[n(V,{type:"primary",onClick:e[10]||(e[10]=t=>h(c.value))},{default:d(()=>[S(r(s(a)("save")),1)]),_:1})])])])}}});const pe=I(X,[["__scopeId","data-v-b1d8e5bc"]]);export{pe as default};
