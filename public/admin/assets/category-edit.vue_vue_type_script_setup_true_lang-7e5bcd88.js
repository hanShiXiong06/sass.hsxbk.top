import{d as U,r as p,n as R,l as I,q as l,h as _,s as f,w as n,a as L,e as s,i as V,t as w,u as o,R as M,c as P,F as T,T as j,b_ as q,K as G,L as K,ab as S,aC as $,M as X,E as Y,X as z,Y as A}from"./index-a3bdc7eb.js";/* empty css                   *//* empty css                  *//* empty css                   *//* empty css                  *//* empty css                */import H from"./index-a76a08b7.js";/* empty css                 *//* empty css               *//* empty css                  *//* empty css                  *//* empty css                     *//* empty css                  */import"./el-form-item-4ed993c7.js";import{e as J,a as Q,b as W,c as Z}from"./category-2b62e3d4.js";const ee={class:"dialog-footer"},ve=U({__name:"category-edit",emits:["complete"],setup(ae,{expose:C,emit:E}){const m=p(!1),i=p(!1),y={category_id:0,category_name:"",image:"",sort:0,pid:0},a=R({...y}),v=p(),D=I(()=>({category_name:[{required:!0,message:l("categoryNamePlaceholder"),trigger:"blur"}]})),F=async d=>{if(i.value||!d)return;const e=a.category_id>0?J:Q;await d.validate(async r=>{r&&(i.value=!0,e(a).then(g=>{i.value=!1,m.value=!1,E("complete")}).catch(()=>{i.value=!1}))})},u=p([]);return C({showDialog:m,setFormData:async(d=null)=>{if(Object.assign(a,y),u.value=await(await W({type:1})).data,i.value=!0,d){const e=await(await Z(d.category_id)).data;if(e&&Object.keys(a).forEach(r=>{e[r]!=null&&(a[r]=e[r])}),a.category_id>0)for(let r in u.value)a.category_id==u.value[r].category_id&&u.value.splice(r,1)}i.value=!1}}),(d,e)=>{const r=G,c=K,g=S,N=$,k=H,x=X,b=Y,h=z,B=A;return _(),f(h,{modelValue:m.value,"onUpdate:modelValue":e[7]||(e[7]=t=>m.value=t),title:a.category_id?o(l)("updateO2oGoodsCategory"):o(l)("addO2oGoodsCategory"),width:"500px","destroy-on-close":!0},{footer:n(()=>[L("span",ee,[s(b,{onClick:e[5]||(e[5]=t=>m.value=!1)},{default:n(()=>[V(w(o(l)("cancel")),1)]),_:1}),s(b,{type:"primary",loading:i.value,onClick:e[6]||(e[6]=t=>F(v.value))},{default:n(()=>[V(w(o(l)("confirm")),1)]),_:1},8,["loading"])])]),default:n(()=>[M((_(),f(x,{model:a,"label-width":"90px",ref_key:"formRef",ref:v,rules:o(D),class:"page-form"},{default:n(()=>[s(c,{label:o(l)("categoryName"),prop:"category_name"},{default:n(()=>[s(r,{modelValue:a.category_name,"onUpdate:modelValue":e[0]||(e[0]=t=>a.category_name=t),modelModifiers:{trim:!0},clearable:"",placeholder:o(l)("categoryNamePlaceholder"),class:"input-width"},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),s(c,{label:o(l)("upCategory")},{default:n(()=>[s(N,{modelValue:a.pid,"onUpdate:modelValue":e[1]||(e[1]=t=>a.pid=t),class:"input-width"},{default:n(()=>[s(g,{value:0,label:o(l)("categoryTips")},null,8,["label"]),(_(!0),P(T,null,j(u.value,(t,O)=>(_(),f(g,{key:O,label:t.category_name,value:t.category_id},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1},8,["label"]),s(c,{label:o(l)("image")},{default:n(()=>[s(k,{modelValue:a.image,"onUpdate:modelValue":e[2]||(e[2]=t=>a.image=t)},null,8,["modelValue"])]),_:1},8,["label"]),s(c,{label:o(l)("sort"),prop:"sort"},{default:n(()=>[s(r,{modelValue:a.sort,"onUpdate:modelValue":e[3]||(e[3]=t=>a.sort=t),modelModifiers:{trim:!0},clearable:"",placeholder:o(l)("sortPlaceholder"),class:"input-width",onKeyup:e[4]||(e[4]=t=>o(q)(t))},null,8,["modelValue","placeholder"])]),_:1},8,["label"])]),_:1},8,["model","rules"])),[[B,i.value]])]),_:1},8,["modelValue","title"])}}});export{ve as _};
