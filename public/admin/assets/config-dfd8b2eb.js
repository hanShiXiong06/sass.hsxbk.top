import{d as q,x as C,r as n,n as _,h as c,c as B,a as u,t as f,u as y,R as D,s as R,w as o,e as a,i as b,q as U,m as F,G as N,K as I,L,a7 as S,M as T,E as A,Y as G}from"./index-5a756a51.js";/* empty css                   *//* empty css                  *//* empty css                *//* empty css                */import"./el-form-item-4ed993c7.js";/* empty css                 */import{g as k,s as K}from"./cps-965b632c.js";const M={class:"main-container"},O={class:"flex ml-[18px] justify-between items-center mt-[20px] mb-[5px]"},Y={class:"text-[20px]"},$=u("h3",{class:"panel-title !text-sm"},"蚂蚁星球",-1),z=u("h3",{class:"panel-title !text-sm"},"聚推客",-1),H={class:"fixed-footer-wrap"},J={class:"fixed-footer"},ie=q({__name:"config",setup(P){const g=C().meta.title,i=n(!0),v=n(),t=_({my_uid:"",my_apikey:"",my_secret:"",jutuike_pub_id:"",jutuike_apikey:""});(async(r=0)=>{const e=await(await k()).data;Object.keys(t).forEach(s=>{e[s]!=null&&(t[s]=e[s])}),v.value=F(),i.value=!1})();const p=n(),w=_({my_uid:[{required:!0,message:"蚂蚁星球会员id不能空",trigger:"blur"}],my_apikey:[{required:!0,message:"蚂蚁星球apikey不能空",trigger:"blur"}],my_secret:[{required:!0,message:"蚂蚁星球secret不能空",trigger:"blur"}],jutuike_pub_id:[{required:!0,message:"聚推客pub_id不能空",trigger:"blur"}],jutuike_apikey:[{required:!0,message:"聚推客apikey不能空",trigger:"blur"}]}),x=async r=>{i.value||!r||await r.validate(async e=>{e&&(i.value=!0,K(t).then(()=>{i.value=!1,V()}).catch(()=>{i.value=!1}))})},V=async()=>{const r=await(await k()).data;N.set({key:"siteInfo",data:r})};return(r,e)=>{const s=I,d=L,m=S,h=T,j=A,E=G;return c(),B("div",M,[u("div",O,[u("span",Y,f(y(g)),1)]),D((c(),R(h,{model:t,"label-width":"150px",ref_key:"formRef",ref:p,rules:w,class:"page-form"},{default:o(()=>[a(m,{class:"box-card !border-none",shadow:"never"},{default:o(()=>[$,a(d,{label:"会员id",prop:"my_uid"},{default:o(()=>[a(s,{modelValue:t.my_uid,"onUpdate:modelValue":e[0]||(e[0]=l=>t.my_uid=l),placeholder:"请输入会员id",class:"input-width",clearable:""},null,8,["modelValue"])]),_:1}),a(d,{label:"apikey",prop:"my_apikey"},{default:o(()=>[a(s,{modelValue:t.my_apikey,"onUpdate:modelValue":e[1]||(e[1]=l=>t.my_apikey=l),placeholder:"请输入apikey",class:"input-width",clearable:""},null,8,["modelValue"])]),_:1}),a(d,{label:"secret",prop:"my_secret"},{default:o(()=>[a(s,{modelValue:t.my_secret,"onUpdate:modelValue":e[2]||(e[2]=l=>t.my_secret=l),placeholder:"请输入secret",class:"input-width",clearable:""},null,8,["modelValue"])]),_:1})]),_:1}),a(m,{class:"box-card !border-none",shadow:"never"},{default:o(()=>[z,a(d,{label:"pub_id",prop:"jutuike_pub_id"},{default:o(()=>[a(s,{modelValue:t.jutuike_pub_id,"onUpdate:modelValue":e[3]||(e[3]=l=>t.jutuike_pub_id=l),placeholder:"请输入pub_id",class:"input-width",clearable:""},null,8,["modelValue"])]),_:1}),b(),a(d,{label:"apikey",prop:"jutuike_apikey"},{default:o(()=>[a(s,{modelValue:t.jutuike_apikey,"onUpdate:modelValue":e[4]||(e[4]=l=>t.jutuike_apikey=l),placeholder:"请输入apikey",class:"input-width",clearable:""},null,8,["modelValue"])]),_:1})]),_:1})]),_:1},8,["model","rules"])),[[E,i.value]]),u("div",H,[u("div",J,[a(j,{type:"primary",loading:i.value,onClick:e[5]||(e[5]=l=>x(p.value))},{default:o(()=>[b(f(y(U)("save")),1)]),_:1},8,["loading"])])])])}}});export{ie as default};
