import{d as C,r as _,n as h,q as r,h as x,c as N,e as s,w as d,R as B,s as F,a as f,t as g,u as n,bR as R,i as D,K as M,L as $,M as I,a7 as P,E as k,Y as q}from"./index-29db729d.js";/* empty css                   *//* empty css                  *//* empty css                *//* empty css                     *//* empty css                 */import{_ as H,$ as K}from"./member-a45af035.js";const L={class:"main-container"},S={class:"panel-title !text-sm"},T={class:"form-tip"},U={class:"text-lg"},j={class:"fixed-footer-wrap"},z={class:"fixed-footer"},te=C({__name:"member",setup(A){const p=_(!0),i=_({}),v=_(""),b=h({prefix:[{validator:(a,e,l)=>{e&&!/^[a-zA-Z]*$/g.test(e)?l(new Error(r("prefixHint"))):l()},trigger:"blur"}],length:[{required:!0,message:r("lengthPlaceholder"),trigger:["blur","change"]},{validator:(a,e,l)=>{parseInt(e)>30||parseInt(e)-t.prefix.length<4?l(new Error(r("lengthHint"))):l()},trigger:"blur"}]}),t=h({prefix:"",length:10});(async()=>{const a=await(await H()).data;Object.keys(t).forEach(e=>{a[e]!=null&&(t[e]=a[e])}),m(i.value),p.value=!1})();const m=async a=>{await a.validate(e=>{if(e){let l="";const u=t.length-t.prefix.length-1;for(let c=1;c<=u;c++)l+="0";v.value=t.prefix+l+"1"}})},w=async a=>{p.value||!a||await a.validate(e=>{e&&K(t).then(()=>{p.value=!1,m(i.value)}).catch(()=>{p.value=!1})})};return(a,e)=>{const l=M,u=$,c=I,V=P,y=k,E=q;return x(),N("div",L,[s(V,{class:"box-card !border-none",shadow:"never"},{default:d(()=>[B((x(),F(c,{class:"page-form",model:t,"label-width":"150px",ref_key:"ruleFormRef",ref:i,rules:b},{default:d(()=>[f("h3",S,g(n(r)("memberNoRule")),1),s(u,{label:n(r)("prefix"),prop:"prefix"},{default:d(()=>[s(l,{modelValue:t.prefix,"onUpdate:modelValue":e[0]||(e[0]=o=>t.prefix=o),placeholder:n(r)("prefixPlaceholder"),class:"input-width",clearable:"",maxlength:"20",onChange:e[1]||(e[1]=o=>m(i.value))},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),s(u,{label:n(r)("length"),prop:"length"},{default:d(()=>[s(l,{modelValue:t.length,"onUpdate:modelValue":e[2]||(e[2]=o=>t.length=o),modelModifiers:{trim:!0},placeholder:n(r)("lengthPlaceholder"),class:"input-width",clearable:"",onKeyup:e[3]||(e[3]=o=>n(R)(o)),onChange:e[4]||(e[4]=o=>m(i.value)),onBlur:e[5]||(e[5]=o=>t.length=o.target.value)},null,8,["modelValue","placeholder"]),f("div",T,g(n(r)("lengthTips")),1)]),_:1},8,["label"]),s(u,null,{default:d(()=>[f("div",U,g(v.value),1)]),_:1})]),_:1},8,["model","rules"])),[[E,p.value]])]),_:1}),f("div",j,[f("div",z,[s(y,{type:"primary",onClick:e[6]||(e[6]=o=>w(i.value))},{default:d(()=>[D(g(n(r)("save")),1)]),_:1})])])])}}});export{te as default};
