import{O as x,d as M,r as m,n as B,h as s,c as d,R as F,s as v,w as n,e as l,a,F as Y,T as I,B as y,i as N,t as S,u as U,q as O,aW as R,ac as q,aD as H,bO as T,K as W,a7 as A,M as K,E as P,Y as $}from"./index-99f00cf3.js";/* empty css                   *//* empty css                  *//* empty css                *//* empty css                *//* empty css                 *//* empty css                       *//* empty css                     *//* empty css                  *//* empty css               *//* empty css                  *//* empty css                  *//* empty css                 */import{g as j}from"./vip-83a8ed5c.js";function z(){return x.get("tk_vip/config/getconfig")}function G(c){return x.post("tk_vip/config/setconfig",c,{showErrorMessage:!0,showSuccessMessage:!0})}const J={class:"main-container"},Q={class:"flex mt-4"},X=a("span",{class:"ml-[10px] el-form-item__label"},"送会员等级",-1),Z={class:"flex items-center ml-[8px] w-[140px]"},ee={key:0,class:"flex items-center ml-[8px]"},te={key:1,class:"flex"},oe={class:"w-[70px] ml-8"},le=a("span",{class:"ml-[15px] el-form-item__label"},"天",-1),ae={class:"fixed-footer-wrap"},se={class:"fixed-footer"},be=M({__name:"index",setup(c){const _=m([]);(async()=>{_.value=await(await j({})).data})();const p=m(!0),g=m(),e=B({level_id:"",day:0,over_type:"common",over_time:""}),u=async()=>{const r=await z();console.log(r),p.value=!1;for(const t in e)e[t]=r.data[t]};u();const w=async()=>{await G(e),u()};return(r,t)=>{const b=R,i=q,f=H,V=T,h=W,k=A,E=K,L=P,D=$;return s(),d("div",J,[F((s(),v(E,{model:e,"label-width":"150px",ref_key:"ruleFormRef",ref:g,rules:r.rules,class:"page-form"},{default:n(()=>[l(k,{class:"box-card !border-none",shadow:"never"},{default:n(()=>[l(b,{type:"info",class:"w-[120px]",title:"新用户注册时候默认赠送会员等级权益,0代表最初始的默认等级",closable:!1,"show-icon":""}),a("div",Q,[X,l(f,{class:"input-width",modelValue:e.level_id,"onUpdate:modelValue":t[0]||(t[0]=o=>e.level_id=o),clearable:"",placeholder:"请选择"},{default:n(()=>[l(i,{label:"请选择",value:""}),(s(!0),d(Y,null,I(_.value,(o,C)=>(s(),v(i,{key:C,label:o.level_name,value:o.level_id},null,8,["label","value"]))),128))]),_:1},8,["modelValue"]),a("div",Z,[l(f,{modelValue:e.over_type,"onUpdate:modelValue":t[1]||(t[1]=o=>e.over_type=o),placeholder:"选择到期类型",style:{width:"240px"}},{default:n(()=>[l(i,{key:"common",label:"天数",value:"common"}),l(i,{key:"fixed",label:"固定到期",value:"fixed"})]),_:1},8,["modelValue"])]),e.over_type=="fixed"?(s(),d("div",ee,[l(V,{class:"ml-2",modelValue:e.over_time,"onUpdate:modelValue":t[2]||(t[2]=o=>e.over_time=o),type:"datetime",placeholder:"请选择时间",format:"YYYY-MM-DD HH:mm:ss"},null,8,["modelValue"])])):y("",!0),e.over_type=="common"?(s(),d("div",te,[a("div",oe,[l(h,{modelValue:e.day,"onUpdate:modelValue":t[3]||(t[3]=o=>e.day=o),modelModifiers:{trim:!0},clearable:""},null,8,["modelValue"])]),le])):y("",!0)])]),_:1})]),_:1},8,["model","rules"])),[[D,p.value]]),a("div",ae,[a("div",se,[l(L,{type:"primary",onClick:t[4]||(t[4]=o=>w())},{default:n(()=>[N(S(U(O)("save")),1)]),_:1})])])])}}});export{be as default};