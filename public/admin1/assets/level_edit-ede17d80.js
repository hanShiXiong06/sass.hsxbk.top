import{d as B,x as U,f as q,r as c,n as V,q as o,H as C,h as y,c as I,P as $,s as D,w as m,a,u as s,t as f,e as r,i as F,a0 as G,J as T,K as j,L as A,E as z,U as H}from"./index-17984968.js";/* empty css                   *//* empty css                  *//* empty css                */import"./el-form-item-4ed993c7.js";/* empty css                 *//* empty css                */import{_ as J}from"./member-benefits.vue_vue_type_script_setup_true_lang-e2680fee.js";import{_ as K}from"./member-gift.vue_vue_type_script_setup_true_lang-175f5807.js";import{L as O,A as N,M as S,N as Q}from"./member-0ccc6229.js";const W={class:"main-container"},X={class:"detail-head !ml-[20px] !mb-[5px]"},Y=a("span",{class:"iconfont iconxiangzuojiantou !text-xs"},null,-1),Z={class:"ml-[1px]"},ee=a("span",{class:"adorn"},"|",-1),le={class:"right"},te={class:"panel-title !text-sm"},oe={class:"w-[150px]"},ae={class:"text-sm text-gray-400 mb-[5px]"},se={class:"panel-title !text-sm"},re={class:"pl-[100px]"},ne={class:"panel-title !text-sm"},ie={class:"pl-[100px]"},de={class:"fixed-footer-wrap"},me={class:"fixed-footer"},Ve=B({__name:"level_edit",setup(ue){const p=U(),g=q(),k=p.meta.title,w=c(null),x=c(null),h=c(!0),d=c({min:0,max:0}),l=V({level_id:0,level_name:"",remark:"",growth:"",level_benefits:{},level_gifts:{}}),b=c(),L=V({level_name:[{required:!0,message:o("levelNamePlaceholder"),trigger:"blur"}],growth:[{required:!0,message:o("growthPlaceholder"),trigger:"blur"},{validator:(n,e,t)=>{C.digits(l.growth)||t(o("growthFormatError")),l.growth<=0&&t(o("growthNeedGt")+0),d.value.min&&l.growth<=d.value.min&&t(o("growthNeedGt")+d.value.min),d.value.max&&l.growth>=d.value.max&&t(o("growthNeedLt")+d.value.max),t()}}]});p.query.id?O(p.query.id).then(({data:n})=>{Object.assign(l,n),N().then(({data:e})=>{let t=0;e.forEach((u,v)=>{u.level_id==l.level_id&&(t=v)}),e[t-1]&&(d.value.min=e[t-1].growth),e[t+1]&&(d.value.max=e[t+1].growth)}),h.value=!1}):(N().then(({data:n})=>{n[n.length-1]&&(d.value.min=n[n.length-1].growth)}),h.value=!1);const _=c(!1),R=async n=>{_.value||!n||await n.validate(async e=>{var t,u;if(e){if(!await((t=w.value)==null?void 0:t.verify())||!await((u=x.value)==null?void 0:u.verify()))return;_.value=!0,(l.level_id?S:Q)(l).then(()=>{g.push({path:"/member/level"})}).catch(()=>{_.value=!1})}})};return(n,e)=>{const t=G,u=T,v=j,E=A,M=z,P=H;return y(),I("div",W,[$((y(),D(t,{class:"box-card !border-none",shadow:"never"},{default:m(()=>[a("div",X,[a("div",{class:"left",onClick:e[0]||(e[0]=i=>s(g).push({path:"/member/level"}))},[Y,a("span",Z,f(s(o)("returnToPreviousPage")),1)]),ee,a("span",le,f(s(k)),1)]),r(E,{model:l,"label-width":"120px",ref_key:"formRef",ref:b,rules:L,class:"page-form"},{default:m(()=>[r(t,{class:"box-card !border-none",shadow:"never"},{default:m(()=>[a("h3",te,f(s(o)("basicInfo")),1)]),_:1}),r(v,{label:s(o)("levelName"),prop:"level_name"},{default:m(()=>[r(u,{modelValue:l.level_name,"onUpdate:modelValue":e[1]||(e[1]=i=>l.level_name=i),modelModifiers:{trim:!0},placeholder:s(o)("levelNamePlaceholder"),class:"input-width",maxlength:"20","show-word-limit":"",clearable:""},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),r(v,{label:s(o)("remark"),prop:"remark"},{default:m(()=>[r(u,{modelValue:l.remark,"onUpdate:modelValue":e[2]||(e[2]=i=>l.remark=i),modelModifiers:{trim:!0},type:"textarea",placeholder:s(o)("remarkPlaceholder"),class:"input-width",clearable:"",rows:"4",maxlength:"200","show-word-limit":""},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),r(v,{label:s(o)("growth"),prop:"growth"},{default:m(()=>[a("div",null,[a("div",oe,[r(u,{modelValue:l.growth,"onUpdate:modelValue":e[3]||(e[3]=i=>l.growth=i),modelModifiers:{number:!0,trim:!0},placeholder:s(o)("growthPlaceholder"),clearable:""},null,8,["modelValue","placeholder"])]),a("div",ae,f(s(o)("growthTips")),1)])]),_:1},8,["label"])]),_:1},8,["model","rules"]),r(t,{class:"box-card !border-none",shadow:"never"},{default:m(()=>[a("h3",se,f(s(o)("levelBenefits")),1),a("div",re,[r(J,{ref_key:"benefitsRef",ref:w,modelValue:l.level_benefits,"onUpdate:modelValue":e[4]||(e[4]=i=>l.level_benefits=i)},null,8,["modelValue"])])]),_:1}),r(t,{class:"box-card !border-none",shadow:"never"},{default:m(()=>[a("h3",ne,f(s(o)("levelGift")),1),a("div",ie,[r(K,{ref_key:"giftRef",ref:x,modelValue:l.level_gifts,"onUpdate:modelValue":e[5]||(e[5]=i=>l.level_gifts=i)},null,8,["modelValue"])])]),_:1})]),_:1})),[[P,h.value]]),a("div",de,[a("div",me,[r(M,{type:"primary",loading:_.value,onClick:e[6]||(e[6]=i=>R(b.value))},{default:m(()=>[F(f(s(o)("save")),1)]),_:1},8,["loading"])])])])}}});export{Ve as default};
