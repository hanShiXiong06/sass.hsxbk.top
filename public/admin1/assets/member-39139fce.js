import{d as C,r as g,n as h,q as r,h as x,c as N,P as B,s as F,w as i,e as s,a as f,t as _,u as n,bZ as D,i as I,J as $,K as M,a0 as P,L as R,E as U,U as k}from"./index-17984968.js";/* empty css                   *//* empty css                  *//* empty css                *//* empty css                */import"./el-form-item-4ed993c7.js";/* empty css                 */import{_ as q,$ as H}from"./member-0ccc6229.js";import{_ as K}from"./_plugin-vue_export-helper-c27b6911.js";const L={class:"main-container"},S={class:"panel-title"},T={class:"form-tip"},Z={class:"text-lg"},j={class:"fixed-footer-wrap"},z={class:"fixed-footer"},A=C({__name:"member",setup(J){const d=g(!0),p=g({}),v=g(""),b=h({prefix:[{validator:(o,e,l)=>{e&&!/^[a-zA-Z]*$/g.test(e)?l(new Error(r("prefixHint"))):l()},trigger:"blur"}],length:[{required:!0,message:r("lengthPlaceholder"),trigger:["blur","change"]},{validator:(o,e,l)=>{parseInt(e)>30||parseInt(e)-t.prefix.length<4?l(new Error(r("lengthHint"))):l()},trigger:"blur"}]}),t=h({prefix:"",length:10});(async()=>{const o=await(await q()).data;Object.keys(t).forEach(e=>{o[e]!=null&&(t[e]=o[e])}),u(p.value),d.value=!1})();const u=async o=>{await o.validate(e=>{if(e){let l="";const m=t.length-t.prefix.length-1;for(let c=1;c<=m;c++)l+="0";v.value=t.prefix+l+"1"}})},w=async o=>{d.value||!o||await o.validate(e=>{e&&H(t).then(()=>{d.value=!1,u()}).catch(()=>{d.value=!1})})};return(o,e)=>{const l=$,m=M,c=P,y=R,V=U,E=k;return x(),N("div",L,[B((x(),F(y,{model:t,"label-width":"150px",ref_key:"ruleFormRef",ref:p,rules:b,class:"page-form"},{default:i(()=>[s(c,{class:"box-card !border-none",shadow:"never"},{default:i(()=>[f("h3",S,_(n(r)("memberNoRule")),1),s(m,{label:n(r)("prefix"),prop:"prefix"},{default:i(()=>[s(l,{modelValue:t.prefix,"onUpdate:modelValue":e[0]||(e[0]=a=>t.prefix=a),placeholder:n(r)("prefixPlaceholder"),class:"input-width",clearable:"",maxlength:"20",onChange:e[1]||(e[1]=a=>u(p.value))},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),s(m,{label:n(r)("length"),prop:"length"},{default:i(()=>[s(l,{modelValue:t.length,"onUpdate:modelValue":e[2]||(e[2]=a=>t.length=a),modelModifiers:{trim:!0},placeholder:n(r)("lengthPlaceholder"),class:"input-width",clearable:"",onKeyup:e[3]||(e[3]=a=>n(D)(a)),onChange:e[4]||(e[4]=a=>u(p.value)),onBlur:e[5]||(e[5]=a=>t.length=a.target.value)},null,8,["modelValue","placeholder"]),f("div",T,_(n(r)("lengthTips")),1)]),_:1},8,["label"]),s(m,null,{default:i(()=>[f("div",Z,_(v.value),1)]),_:1})]),_:1})]),_:1},8,["model","rules"])),[[E,d.value]]),f("div",j,[f("div",z,[s(V,{type:"primary",onClick:e[6]||(e[6]=a=>w(p.value))},{default:i(()=>[I(_(n(r)("save")),1)]),_:1})])])])}}});const re=K(A,[["__scopeId","data-v-5ec83867"]]);export{re as default};