import{d as E,r as u,n as T,l as F,q as t,h as f,c as C,e as s,w as c,a as l,t as m,u as a,R as N,s as B,i as D,cn as M,co as S,K as q,L as R,aS as I,M as K,a7 as U,E as L,Y as $}from"./index-2a89d409.js";/* empty css                   *//* empty css                  *//* empty css                *//* empty css                *//* empty css                  */import"./el-form-item-4ed993c7.js";/* empty css                 */import{_ as j}from"./_plugin-vue_export-helper-c27b6911.js";const O={class:"main-container"},P={class:"flex justify-between items-center"},Y={class:"text-page-title"},Z={class:"ml-[10px]"},z={class:"ml-[150px] text-sm text-gray-400"},A={class:"fixed-footer-wrap"},G={class:"fixed-footer"},H=E({__name:"map",setup(J){const n=u(!1),_=u(),o=T({key:"",is_open:1,valid_time:0}),v=F(()=>({valid_time:[{required:!0,trigger:"blur",validator:(r,e,i)=>{e===""?i(new Error(t("validTimePlaceholder"))):isNaN(e)||!/^\d{0,10}$/.test(e)?i(new Error(t("validTimeFormatTips"))):e<0?i(new Error(t("validTimeNotZeroTips"))):i()}}]}));(async()=>{const r=await(await M()).data;o.key=r.key})();const w=async r=>{n.value||!r||await r.validate(async e=>{e&&(n.value=!0,S(o).then(()=>{n.value=!1}).catch(()=>{n.value=!1}))})},y=()=>{window.open("https://www.kancloud.cn/niucloud/niucloud-admin-develop/3214217")},x=()=>{window.open("https://lbs.qq.com/dev/console/key/manage")};return(r,e)=>{const i=q,p=R,g=I,k=K,b=U,h=L,V=$;return f(),C("div",O,[s(b,{class:"box-card !border-none",shadow:"never"},{default:c(()=>[l("div",P,[l("span",Y,m(a(t)("mapSetting")),1)]),N((f(),B(k,{class:"page-form mt-[20px]",model:o,rules:a(v),"label-width":"150px",ref_key:"formRef",ref:_},{default:c(()=>[s(p,{label:a(t)("mapKey"),prop:"key"},{default:c(()=>[s(i,{modelValue:o.key,"onUpdate:modelValue":e[0]||(e[0]=d=>o.key=d),modelModifiers:{trim:!0},class:"input-width",clearable:""},null,8,["modelValue"]),l("span",{class:"ml-2 cursor-pointer tutorial-btn",onClick:y},m(a(t)("clickTutorial")),1),l("span",{class:"ml-2 cursor-pointer secret-btn",onClick:x},m(a(t)("clickSecretKey")),1)]),_:1},8,["label"]),s(p,{label:a(t)("isOpen"),prop:"is_open"},{default:c(()=>[s(g,{modelValue:o.is_open,"onUpdate:modelValue":e[1]||(e[1]=d=>o.is_open=d),"active-value":1,"inactive-value":0},null,8,["modelValue"])]),_:1},8,["label"]),s(p,{label:a(t)("validTime"),prop:"valid_time"},{default:c(()=>[s(i,{modelValue:o.valid_time,"onUpdate:modelValue":e[2]||(e[2]=d=>o.valid_time=d),modelModifiers:{trim:!0},class:"!w-[120px]"},null,8,["modelValue"]),l("span",Z,m(a(t)("minutes")),1)]),_:1},8,["label"]),l("div",z,m(a(t)("validTimeTips")),1)]),_:1},8,["model","rules"])),[[V,n.value]])]),_:1}),l("div",A,[l("div",G,[s(h,{type:"primary",loading:n.value,onClick:e[3]||(e[3]=d=>w(_.value))},{default:c(()=>[D(m(a(t)("save")),1)]),_:1},8,["loading"])])])])}}});const ne=j(H,[["__scopeId","data-v-a4570e6a"]]);export{ne as default};
