import{d as M,r as f,n as R,l as F,h as b,s as g,w as l,a as V,e as t,i as d,R as U,u as B,au as C,av as q,L as I,K as N,E as j,M as k,X as L,Y as O}from"./index-99f00cf3.js";/* empty css                   *//* empty css                  *//* empty css                   *//* empty css                *//* empty css                  *//* empty css                 */import"./el-form-item-4ed993c7.js";/* empty css                       *//* empty css                 */import{e as $,g as G}from"./delivery-b29458ec.js";const T=V("a",{href:"https://www.yida178.cn/",target:"_blank"},"易达后台",-1),X={class:"dialog-footer"},te=M({__name:"yida",emits:["complete"],setup(Y,{expose:w,emit:y}){const n=f(!1),s=f(!0),_={delivery_type:"",is_use:"",bindMobile:"",username:"",privateKey:""},a=R({..._}),c=f(),D=F(()=>({bindMobile:[{required:!0,message:"请输入绑定手机号",trigger:"blur"}],username:[{required:!0,message:"请输入用户名",trigger:"blur"}],privateKey:[{required:!0,message:"请输入密钥",trigger:"blur"}]})),E=async i=>{s.value||!i||await i.validate(async e=>{e&&(s.value=!0,$(a).then(v=>{s.value=!1,n.value=!1,y("complete")}).catch(()=>{s.value=!1}))})};return w({showDialog:n,setFormData:async(i=null)=>{if(s.value=!0,Object.assign(a,_),i){const e=await(await G(i.delivery_type)).data;Object.keys(a).forEach(r=>{e[r]!=null&&(a[r]=e[r]),e.params[r]!=null&&(a[r]=e.params[r].value)})}s.value=!1}}),(i,e)=>{const r=C,v=q,u=I,m=N,p=j,h=k,x=L,K=O;return b(),g(x,{modelValue:n.value,"onUpdate:modelValue":e[6]||(e[6]=o=>n.value=o),title:"易达178",width:"580px","destroy-on-close":!0},{footer:l(()=>[V("span",X,[t(p,{onClick:e[4]||(e[4]=o=>n.value=!1)},{default:l(()=>[d("取消")]),_:1}),t(p,{type:"primary",loading:s.value,onClick:e[5]||(e[5]=o=>E(c.value))},{default:l(()=>[d("确认")]),_:1},8,["loading"])])]),default:l(()=>[U((b(),g(h,{model:a,"label-width":"140px",ref_key:"formRef",ref:c,rules:B(D),class:"page-form"},{default:l(()=>[t(u,{label:"是否启用"},{default:l(()=>[t(v,{modelValue:a.is_use,"onUpdate:modelValue":e[0]||(e[0]=o=>a.is_use=o)},{default:l(()=>[t(r,{label:1},{default:l(()=>[d("启用")]),_:1}),t(r,{label:0},{default:l(()=>[d("停用")]),_:1})]),_:1},8,["modelValue"])]),_:1}),t(u,{label:"绑定手机",prop:"bindMobile"},{default:l(()=>[t(m,{modelValue:a.bindMobile,"onUpdate:modelValue":e[1]||(e[1]=o=>a.bindMobile=o),placeholder:"请输入绑定手机号",class:"input-width","show-word-limit":"",clearable:""},null,8,["modelValue"])]),_:1}),t(u,{label:"用户名",prop:"username"},{default:l(()=>[t(m,{modelValue:a.username,"onUpdate:modelValue":e[2]||(e[2]=o=>a.username=o),placeholder:"用户名",class:"input-width",clearable:""},null,8,["modelValue"])]),_:1}),t(u,{label:"易达密钥",prop:"privateKey"},{default:l(()=>[t(m,{modelValue:a.privateKey,"onUpdate:modelValue":e[3]||(e[3]=o=>a.privateKey=o),placeholder:"请输入密钥",class:"input-width",clearable:""},null,8,["modelValue"])]),_:1}),t(u,{label:"常用导航"},{default:l(()=>[t(p,null,{default:l(()=>[T]),_:1})]),_:1})]),_:1},8,["model","rules"])),[[K,s.value]])]),_:1},8,["modelValue"])}}});export{te as _};
