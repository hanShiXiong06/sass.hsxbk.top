import{d as R,r as p,n as F,l as B,h as g,s as b,w as a,a as V,e as l,i as d,R as C,u as U,at as I,au as N,L as j,K as q,E as L,M as O,X as $,Y as G}from"./index-37fee5a0.js";/* empty css                   *//* empty css                  *//* empty css                   *//* empty css                *//* empty css                  *//* empty css                 */import"./el-form-item-4ed993c7.js";/* empty css                       *//* empty css                 */import{e as K,g as M}from"./delivery-d250b9b5.js";const T=V("a",{href:"https://xdwl.dadisci.com/#/login",target:"_blank"},"辛达后台",-1),X={class:"dialog-footer"},le=R({__name:"xinda",emits:["complete"],setup(Y,{expose:y,emit:w}){const i=p(!1),r=p(!0),c={delivery_type:"",is_use:"",username:"",secretkey:""},t=F({...c}),f=p(),D=B(()=>({username:[{required:!0,message:"请输入用户名",trigger:"blur"}],secretkey:[{required:!0,message:"请输入密钥",trigger:"blur"}]})),x=async n=>{r.value||!n||await n.validate(async e=>{e&&(r.value=!0,K(t).then(_=>{r.value=!1,i.value=!1,w("complete")}).catch(()=>{r.value=!1}))})};return y({showDialog:i,setFormData:async(n=null)=>{if(r.value=!0,Object.assign(t,c),n){const e=await(await M(n.delivery_type)).data;Object.keys(t).forEach(o=>{e[o]!=null&&(t[o]=e[o]),e.params[o]!=null&&(t[o]=e.params[o].value)})}r.value=!1}}),(n,e)=>{const o=I,_=N,u=j,v=q,m=L,E=O,k=$,h=G;return g(),b(k,{modelValue:i.value,"onUpdate:modelValue":e[5]||(e[5]=s=>i.value=s),title:"辛达物流",width:"580px","destroy-on-close":!0},{footer:a(()=>[V("span",X,[l(m,{onClick:e[3]||(e[3]=s=>i.value=!1)},{default:a(()=>[d("取消")]),_:1}),l(m,{type:"primary",loading:r.value,onClick:e[4]||(e[4]=s=>x(f.value))},{default:a(()=>[d("确认")]),_:1},8,["loading"])])]),default:a(()=>[C((g(),b(E,{model:t,"label-width":"140px",ref_key:"formRef",ref:f,rules:U(D),class:"page-form"},{default:a(()=>[l(u,{label:"是否启用"},{default:a(()=>[l(_,{modelValue:t.is_use,"onUpdate:modelValue":e[0]||(e[0]=s=>t.is_use=s)},{default:a(()=>[l(o,{label:1},{default:a(()=>[d("启用")]),_:1}),l(o,{label:0},{default:a(()=>[d("停用")]),_:1})]),_:1},8,["modelValue"])]),_:1}),l(u,{label:"用户",prop:"username"},{default:a(()=>[l(v,{modelValue:t.username,"onUpdate:modelValue":e[1]||(e[1]=s=>t.username=s),placeholder:"用户",class:"input-width",clearable:""},null,8,["modelValue"])]),_:1}),l(u,{label:"密钥",prop:"secretkey"},{default:a(()=>[l(v,{modelValue:t.secretkey,"onUpdate:modelValue":e[2]||(e[2]=s=>t.secretkey=s),placeholder:"密钥",class:"input-width",clearable:""},null,8,["modelValue"])]),_:1}),l(u,{label:"常用导航"},{default:a(()=>[l(m,null,{default:a(()=>[T]),_:1})]),_:1})]),_:1},8,["model","rules"])),[[h,r.value]])]),_:1},8,["modelValue"])}}});export{le as _};
