import{d as U,r as p,n as k,l as C,q as t,h as v,s as V,w as d,a as M,e as r,i as w,t as y,u as o,R as P,b_ as R,K as q,L as I,M as j,E as K,X as L,Y as O}from"./index-2a89d409.js";/* empty css                   *//* empty css                  *//* empty css                   *//* empty css                  *//* empty css                */import $ from"./index-deaeeb3b.js";import"./el-form-item-4ed993c7.js";/* empty css                 */import{o as S,p as T,q as X}from"./goods-60ec1a36.js";const Y={class:"dialog-footer"},oe=U({__name:"brand-edit",emits:["complete"],setup(z,{expose:x,emit:B}){const u=p(!1),s=p(!1),f=p(""),_={brand_id:"",brand_name:"",logo:"",desc:"",sort:""},l=k({..._}),b=p(),h=C(()=>({brand_name:[{required:!0,message:t("brandNamePlaceholder"),trigger:"blur"}]})),D=async i=>{if(s.value||!i)return;const e=l.brand_id?S:T;await i.validate(async n=>{n&&(s.value=!0,e(l).then(c=>{s.value=!1,u.value=!1,B("complete")}).catch(c=>{s.value=!1}))})};return x({showDialog:u,setFormData:async(i=null)=>{if(Object.assign(l,_),s.value=!0,i){const e=await(await X(i.brand_id)).data;f.value=t("updateBrand"),e&&Object.keys(l).forEach(n=>{e[n]!=null&&(l[n]=e[n])})}else f.value=t("addBrand");s.value=!1}}),(i,e)=>{const n=q,m=I,c=$,E=j,g=K,N=L,F=O;return v(),V(N,{modelValue:u.value,"onUpdate:modelValue":e[9]||(e[9]=a=>u.value=a),title:f.value,width:"500px",class:"diy-dialog-wrap","destroy-on-close":!0},{footer:d(()=>[M("span",Y,[r(g,{onClick:e[7]||(e[7]=a=>u.value=!1)},{default:d(()=>[w(y(o(t)("cancel")),1)]),_:1}),r(g,{type:"primary",loading:s.value,onClick:e[8]||(e[8]=a=>D(b.value))},{default:d(()=>[w(y(o(t)("confirm")),1)]),_:1},8,["loading"])])]),default:d(()=>[P((v(),V(E,{model:l,"label-width":"120px",ref_key:"formRef",ref:b,rules:o(h),class:"page-form"},{default:d(()=>[r(m,{label:o(t)("brandName"),prop:"brand_name"},{default:d(()=>[r(n,{modelValue:l.brand_name,"onUpdate:modelValue":e[0]||(e[0]=a=>l.brand_name=a),modelModifiers:{trim:!0},clearable:"",placeholder:o(t)("brandNamePlaceholder"),class:"input-width",maxlength:"20",onBlur:e[1]||(e[1]=a=>l.brand_name=a.target.value)},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),r(m,{label:o(t)("logo")},{default:d(()=>[r(c,{modelValue:l.logo,"onUpdate:modelValue":e[2]||(e[2]=a=>l.logo=a)},null,8,["modelValue"])]),_:1},8,["label"]),r(m,{label:o(t)("desc")},{default:d(()=>[r(n,{modelValue:l.desc,"onUpdate:modelValue":e[3]||(e[3]=a=>l.desc=a),modelModifiers:{trim:!0},type:"textarea",clearable:"",placeholder:o(t)("descPlaceholder"),class:"input-width",maxlength:"200"},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),r(m,{label:o(t)("sort")},{default:d(()=>[r(n,{modelValue:l.sort,"onUpdate:modelValue":e[4]||(e[4]=a=>l.sort=a),modelModifiers:{trim:!0},maxlength:"6","show-word-limit":"",clearable:"",placeholder:o(t)("sortPlaceholder"),class:"input-width",onKeyup:e[5]||(e[5]=a=>o(R)(a)),onBlur:e[6]||(e[6]=a=>l.sort=a.target.value)},null,8,["modelValue","placeholder"])]),_:1},8,["label"])]),_:1},8,["model","rules"])),[[F,s.value]])]),_:1},8,["modelValue","title"])}}});export{oe as _};
