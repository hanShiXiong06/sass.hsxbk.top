import{d as L,f as S,r as E,h as V,c as U,R as N,s as k,w as l,e as t,a as u,t as d,u as a,q as o,i as f,ca as w,U as T,as as I,at as K,L as j,ab as M,K as $,ac as q,a6 as z,M as G,E as O,Y}from"./index-f7a01263.js";/* empty css                   *//* empty css                  *//* empty css                     *//* empty css                *//* empty css                 *//* empty css                    */import"./el-tooltip-4ed993c7.js";/* empty css                  *//* empty css                     *//* empty css                 *//* empty css                        *//* empty css               *//* empty css                       *//* empty css                 */import{g as A,s as H}from"./team-14e134cc.js";import{_ as J}from"./_plugin-vue_export-helper-c27b6911.js";const P={class:"main-container"},Q={class:"text text-[14px] leading-[25px]"},W={class:"fixed-footer-wrap"},X={class:"fixed-footer"},Z=L({__name:"level",setup(ee){S();const v=E(!1);let i=E({is_open:"0",level:[],loading:!1});const g=()=>{v.value=!0,A().then(e=>{i.value.is_open=e.data.is_open.toString(),i.value.level=e.data.level,v.value=!1})};g();const h=(e,s,m)=>{const _=/^([1-9]\d*|0)(\.\d+)?$|^0\.(?!0+\b)\d+(\d*[1-9])?$/;if(!e)return!1;e=Number(e),_.test(e)||(T.error(o("teamTips")),e=0),parseFloat(e)>100&&(T.error(o("teamTipsNumericalRange")),e=100),i.value.level.forEach((p,c)=>{p.level_id==m.level_id&&(p[s]=parseFloat(e).toFixed(2))})};let b=!1;const y=()=>{let e={};if(e.is_open=i.value.is_open,e.level=[],i.value.level.forEach((s,m)=>{let _={};_.level_id=s.level_id,_.team_rate=s.team_rate,_.team_flat_rate=s.team_flat_rate,e.level.push(_)}),b)return!1;b=!0,H(e).then(s=>{g(),b=!1})};return(e,s)=>{const m=I,_=K,p=j,c=M,x=$,R=q,C=z,B=G,D=O,F=Y;return V(),U("div",P,[N((V(),k(C,{class:"card !border-none",shadow:"never"},{default:l(()=>[t(B,{class:"page-form",model:e.formData,"label-width":"180px",rules:e.formRules,ref:"formRef"},{default:l(()=>[u("div",Q,d(a(o)("baseTitle")),1),t(C,{class:"card !border-none",shadow:"never"},{default:l(()=>[t(p,{label:a(o)("isEnable")},{default:l(()=>[t(_,{modelValue:a(i).is_open,"onUpdate:modelValue":s[0]||(s[0]=n=>a(i).is_open=n)},{default:l(()=>[t(m,{label:"1"},{default:l(()=>[f(d(a(o)("are")),1)]),_:1}),t(m,{label:"0"},{default:l(()=>[f(d(a(o)("no")),1)]),_:1})]),_:1},8,["modelValue"])]),_:1},8,["label"]),t(p,{label:a(o)("teamLevel")},{default:l(()=>[t(R,{data:a(i).level,size:"large",ref:"goodsListTableRef",onSelectionChange:e.handleSelectionChange},{empty:l(()=>[u("span",null,d(a(o)("emptyData")),1)]),default:l(()=>[t(c,{prop:"level_name",label:a(o)("fenxiaoLevel"),"min-width":"200"},{default:l(({row:n})=>[u("div",null,d(n.level_name),1)]),_:1},8,["label"]),t(c,{prop:"team_rate",label:a(o)("bonus"),"min-width":"200"},{default:l(({row:n})=>[t(x,{modelValue:n.team_rate,"onUpdate:modelValue":r=>n.team_rate=r,maxlength:"6","show-word-limit":"",onChange:r=>h(r,"team_rate",n),clearable:"",class:"!w-[180px]",onKeyup:s[1]||(s[1]=r=>a(w)(r)),placeholder:a(o)("setBonus")},{append:l(()=>[f("%")]),_:2},1032,["modelValue","onUpdate:modelValue","onChange","placeholder"])]),_:1},8,["label"]),t(c,{prop:"team_flat_rate",label:a(o)("bonus_flat"),"min-width":"300"},{default:l(({row:n})=>[t(x,{modelValue:n.team_flat_rate,"onUpdate:modelValue":r=>n.team_flat_rate=r,maxlength:"6","show-word-limit":"",onChange:r=>h(r,"team_flat_rate",n),clearable:"",class:"!w-[180px]",onKeyup:s[2]||(s[2]=r=>a(w)(r)),placeholder:a(o)("setBonus")},{append:l(()=>[f("%")]),_:2},1032,["modelValue","onUpdate:modelValue","onChange","placeholder"])]),_:1},8,["label"])]),_:1},8,["data","onSelectionChange"])]),_:1},8,["label"])]),_:1})]),_:1},8,["model","rules"])]),_:1})),[[F,v.value]]),u("div",W,[u("div",X,[t(D,{type:"primary",onClick:y},{default:l(()=>[f(d(a(o)("save")),1)]),_:1})])])])}}});const ge=J(Z,[["__scopeId","data-v-3f89e201"]]);export{ge as default};
