import{d as R,r as m,n as C,l as F,h as g,s as y,w as a,a as b,e as l,i as d,R as B,u as U,at as I,au as N,L as j,K as q,E as L,M as O,X as $,Y as G}from"./index-5a756a51.js";/* empty css                   *//* empty css                  *//* empty css                   *//* empty css                *//* empty css                  *//* empty css                 */import"./el-form-item-4ed993c7.js";/* empty css                       *//* empty css                 */import{e as K,g as M}from"./delivery-944778f5.js";const T=b("a",{href:"https://open.yunyangwl.com/#/personalCenter",target:"_blank"},"云洋后台",-1),X={class:"dialog-footer"},le=R({__name:"yunyang",emits:["complete"],setup(Y,{expose:V,emit:w}){const p=m(!1),r=m(!0),f={delivery_type:"",is_use:"",appid:"",appkey:""},t=C({...f}),_=m(),k=F(()=>({appid:[{required:!0,message:"请输入appid",trigger:"blur"}],appkey:[{required:!0,message:"请输入appkey",trigger:"blur"}]})),D=async n=>{r.value||!n||await n.validate(async e=>{e&&(r.value=!0,K(t).then(c=>{r.value=!1,p.value=!1,w("complete")}).catch(()=>{r.value=!1}))})};return V({showDialog:p,setFormData:async(n=null)=>{if(r.value=!0,Object.assign(t,f),n){const e=await(await M(n.delivery_type)).data;Object.keys(t).forEach(o=>{e[o]!=null&&(t[o]=e[o]),e.params[o]!=null&&(t[o]=e.params[o].value)})}r.value=!1}}),(n,e)=>{const o=I,c=N,i=j,v=q,u=L,E=O,h=$,x=G;return g(),y(h,{modelValue:p.value,"onUpdate:modelValue":e[5]||(e[5]=s=>p.value=s),title:"云洋物流",width:"580px","destroy-on-close":!0},{footer:a(()=>[b("span",X,[l(u,{onClick:e[3]||(e[3]=s=>p.value=!1)},{default:a(()=>[d("取消")]),_:1}),l(u,{type:"primary",loading:r.value,onClick:e[4]||(e[4]=s=>D(_.value))},{default:a(()=>[d("确认")]),_:1},8,["loading"])])]),default:a(()=>[B((g(),y(E,{model:t,"label-width":"140px",ref_key:"formRef",ref:_,rules:U(k),class:"page-form"},{default:a(()=>[l(i,{label:"是否启用"},{default:a(()=>[l(c,{modelValue:t.is_use,"onUpdate:modelValue":e[0]||(e[0]=s=>t.is_use=s)},{default:a(()=>[l(o,{label:1},{default:a(()=>[d("启用")]),_:1}),l(o,{label:0},{default:a(()=>[d("停用")]),_:1})]),_:1},8,["modelValue"])]),_:1}),l(i,{label:"appid",prop:"appid"},{default:a(()=>[l(v,{modelValue:t.appid,"onUpdate:modelValue":e[1]||(e[1]=s=>t.appid=s),placeholder:"appid",class:"input-width",clearable:""},null,8,["modelValue"])]),_:1}),l(i,{label:"appkey",prop:"appkey"},{default:a(()=>[l(v,{modelValue:t.appkey,"onUpdate:modelValue":e[2]||(e[2]=s=>t.appkey=s),placeholder:"appkey",class:"input-width",clearable:""},null,8,["modelValue"])]),_:1}),l(i,{label:"常用导航"},{default:a(()=>[l(u,null,{default:a(()=>[T]),_:1})]),_:1})]),_:1},8,["model","rules"])),[[x,r.value]])]),_:1},8,["modelValue"])}}});export{le as _};
