import{d as X,r as m,l as z,q as o,h as d,s as p,w as u,a as H,e as s,i as k,t as w,u as n,c as f,F as b,T as g,B as V,ao as J,a3 as K,at as Q,au as W,L as Y,ab as Z,aC as ee,M as le,E as ae,X as te}from"./index-a3bdc7eb.js";/* empty css                  *//* empty css                   *//* empty css                  *//* empty css                *//* empty css                 *//* empty css               *//* empty css                  *//* empty css                  *//* empty css                     *//* empty css                  */import"./el-form-item-4ed993c7.js";/* empty css                       *//* empty css                 */import{c as oe}from"./dict-712f00e1.js";import{g as ue,m as re,o as de}from"./tools-282873ec.js";const ne={class:"dialog-footer"},Ce=X({__name:"edit-view-type",emits:["complete"],setup(se,{expose:A,emit:U}){const i=m(!1),x=m(""),C={select_type:1,dict_type:"",addon:"",model:"",value_key:"",label_key:""},e=m({...C}),h=m(),F=m([]),L=m([]),D=t=>{re(t).then(a=>{L.value=a.data})},P=m([]);(async()=>{let{data:t}=await ue({});P.value=[{title:"系统",key:"system"}],P.value.push(...t),D({addon:"system"})})();const B=t=>{e.value.model="",D({addon:t})},E=m([]),T=t=>{de(t).then(a=>{E.value=a.data})},R=t=>{T({model:t})},$=z(()=>({dict_type:[{validator:(t,a,r)=>{e.value.select_type==1&&e.value.dict_type==""?r(new Error(o("dictTypePlaceholder"))):r()},trigger:"blur"}],addon:[{validator:(t,a,r)=>{e.value.select_type==2&&e.value.addon==""?r(new Error(o("addonsPlaceholder"))):r()},trigger:"blur"}],model:[{validator:(t,a,r)=>{e.value.select_type==2&&e.value.model==""?r(new Error(o("associatedModelPlaceholder"))):r()},trigger:"blur"}],value_key:[{validator:(t,a,r)=>{e.value.select_type==2&&e.value.value_key==""?r(new Error(o("remotePullDownValuePlaceholder"))):r()},trigger:"blur"}],label_key:[{validator:(t,a,r)=>{e.value.select_type==2&&e.value.label_key==""?r(new Error(o("remotePullDownLabelPlaceholder"))):r()},trigger:"blur"}]})),G=()=>{oe().then(t=>{F.value=t.data})},N=async t=>{t&&await t.validate(async a=>{a&&(U("complete",J(e.value)),i.value=!1)})},O=async(t=null)=>{e.value=K(Object.assign(C,t)),G(),e.value.model!=""&&(D({addon:e.value.addon}),T({model:e.value.model})),i.value=!0},S=t=>{var a;(a=h.value)==null||a.clearValidate(),t()};return A({showDialog:i,setFormData:O}),(t,a)=>{const r=Q,j=W,c=Y,v=Z,_=ee,q=le,M=ae,I=te;return d(),p(I,{modelValue:i.value,"onUpdate:modelValue":a[8]||(a[8]=l=>i.value=l),title:x.value,width:"480px","before-close":S,"destroy-on-close":!0},{footer:u(()=>[H("span",ne,[s(M,{onClick:a[6]||(a[6]=l=>i.value=!1)},{default:u(()=>[k(w(n(o)("cancel")),1)]),_:1}),s(M,{type:"primary",onClick:a[7]||(a[7]=l=>N(h.value))},{default:u(()=>[k(w(n(o)("confirm")),1)]),_:1})])]),default:u(()=>[s(q,{model:e.value,"label-width":"130px",ref_key:"formRef",ref:h,rules:n($),class:"page-form"},{default:u(()=>[s(c,{label:n(o)("selectType"),prop:"type"},{default:u(()=>[s(j,{modelValue:e.value.select_type,"onUpdate:modelValue":a[0]||(a[0]=l=>e.value.select_type=l)},{default:u(()=>[s(r,{label:1},{default:u(()=>[k(w(n(o)("dictType")),1)]),_:1}),s(r,{label:2},{default:u(()=>[k(w(n(o)("remotePullDown")),1)]),_:1})]),_:1},8,["modelValue"])]),_:1},8,["label"]),e.value.select_type==1?(d(),p(c,{key:0,label:n(o)("dictType"),prop:"dict_type"},{default:u(()=>[s(_,{class:"input-width",placeholder:n(o)("dictTypePlaceholder"),modelValue:e.value.dict_type,"onUpdate:modelValue":a[1]||(a[1]=l=>e.value.dict_type=l),filterable:"",remote:"",clearable:""},{default:u(()=>[(d(!0),f(b,null,g(F.value,l=>(d(),p(v,{label:l.name,value:l.key,key:l.key},null,8,["label","value"]))),128))]),_:1},8,["placeholder","modelValue"])]),_:1},8,["label"])):V("",!0),e.value.select_type==2?(d(),p(c,{key:1,label:n(o)("addons"),prop:"addon"},{default:u(()=>[s(_,{modelValue:e.value.addon,"onUpdate:modelValue":a[2]||(a[2]=l=>e.value.addon=l),placeholder:n(o)("addonsPlaceholder"),class:"input-width",onChange:B},{default:u(()=>[(d(!0),f(b,null,g(P.value,(l,y)=>(d(),p(v,{label:l.title,value:l.key,key:y},null,8,["label","value"]))),128))]),_:1},8,["modelValue","placeholder"])]),_:1},8,["label"])):V("",!0),e.value.select_type==2?(d(),p(c,{key:2,label:n(o)("associatedModel"),prop:"model"},{default:u(()=>[s(_,{placeholder:n(o)("associatedModelPlaceholder"),modelValue:e.value.model,"onUpdate:modelValue":a[3]||(a[3]=l=>e.value.model=l),class:"input-width",filterable:"",onChange:R},{default:u(()=>[(d(!0),f(b,null,g(L.value,l=>(d(),p(v,{label:l,value:l,key:l},null,8,["label","value"]))),128))]),_:1},8,["placeholder","modelValue"])]),_:1},8,["label"])):V("",!0),e.value.select_type==2?(d(),p(c,{key:3,prop:"value_key",label:n(o)("remotePullDownValue")},{default:u(()=>[s(_,{class:"input-width",placeholder:n(o)("remotePullDownValuePlaceholder"),modelValue:e.value.value_key,"onUpdate:modelValue":a[4]||(a[4]=l=>e.value.value_key=l)},{default:u(()=>[(d(!0),f(b,null,g(E.value,(l,y)=>(d(),p(v,{label:`${l.name}:${l.comment}`,value:l.name,key:y},null,8,["label","value"]))),128))]),_:1},8,["placeholder","modelValue"])]),_:1},8,["label"])):V("",!0),e.value.select_type==2?(d(),p(c,{key:4,prop:"label_key",label:n(o)("remotePullDownLabel")},{default:u(()=>[s(_,{class:"input-width",placeholder:n(o)("remotePullDownLabelPlaceholder"),modelValue:e.value.label_key,"onUpdate:modelValue":a[5]||(a[5]=l=>e.value.label_key=l)},{default:u(()=>[(d(!0),f(b,null,g(E.value,(l,y)=>(d(),p(v,{label:`${l.name}:${l.comment}`,value:l.name,key:y},null,8,["label","value"]))),128))]),_:1},8,["placeholder","modelValue"])]),_:1},8,["label"])):V("",!0)]),_:1},8,["model","rules"])]),_:1},8,["modelValue","title"])}}});export{Ce as _};
