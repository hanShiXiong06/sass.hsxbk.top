import{d as k,j as w,n as C,r as d,h as E,s as F,w as l,a as V,e as t,i as b,t as f,u as n,q as s,aJ as B,L as S,K as R,M as j,E as D,X as M,f as $}from"./index-99f00cf3.js";/* empty css                  *//* empty css                   *//* empty css                  *//* empty css                *//* empty css                 */import"./el-form-item-4ed993c7.js";import q from"./index-015c0c3e.js";import{g as J,s as K}from"./personal-780a22fb.js";const L={class:"flex justify-end"},Y=k({__name:"index",setup(P,{expose:h}){const _=w();$();const a=C({}),p=d(),r=d(!0),u=d(!1),c=()=>{J().then(i=>{r.value=!1;const e=i.data;a.head_img=e.head_img,a.real_name=e.real_name,a.username=e.username})};c();const I=()=>{u.value=!0,c()},U=i=>{r.value||!i||i.validate(e=>{if(e)r.value=!0,K(a).then(g=>{r.value=!1,u.value=!1;let m=B(_.userInfo);m.head_img=a.head_img,_.setUserInfo(m)}).catch(()=>{r.value=!1});else return!1})};return h({open:I}),(i,e)=>{const g=q,m=S,x=R,y=j,v=D,N=M;return E(),F(N,{modelValue:u.value,"onUpdate:modelValue":e[4]||(e[4]=o=>u.value=o),title:n(s)("accountSettings"),width:"500"},{footer:l(()=>[V("div",L,[t(v,{type:"primary",onClick:e[2]||(e[2]=o=>U(p.value)),loading:r.value},{default:l(()=>[b(f(n(s)("save")),1)]),_:1},8,["loading"]),t(v,{onClick:e[3]||(e[3]=o=>u.value=!1)},{default:l(()=>[b(f(n(s)("cancel")),1)]),_:1})])]),default:l(()=>[t(y,{model:a,"label-width":"90px",ref_key:"formRef",ref:p,class:"page-form"},{default:l(()=>[t(m,{label:n(s)("headImg")},{default:l(()=>[t(g,{modelValue:a.head_img,"onUpdate:modelValue":e[0]||(e[0]=o=>a.head_img=o),limit:1,type:"avatar",imageFit:"cover"},null,8,["modelValue"])]),_:1},8,["label"]),t(m,{label:n(s)("userName")},{default:l(()=>[V("span",null,f(a.username),1)]),_:1},8,["label"]),t(m,{label:n(s)("realName")},{default:l(()=>[t(x,{modelValue:a.real_name,"onUpdate:modelValue":e[1]||(e[1]=o=>a.real_name=o),modelModifiers:{trim:!0},placeholder:n(s)("realNamePlaceholder"),clearable:"",class:"input-width"},null,8,["modelValue","placeholder"])]),_:1},8,["label"])]),_:1},8,["model"])]),_:1},8,["modelValue","title"])}}});export{Y as _};
