import{d as J,r as m,n as Q,l as L,q as a,a2 as W,h as n,s as g,w as s,a as c,e as r,i as b,t as _,u as o,R as N,c as f,F as D,T,A as Z,a0 as ee,K as le,L as ae,aa as te,aB as oe,a1 as re,aI as se,bO as ie,M as de,E as ne,X as ue,Y as pe}from"./index-6ea097a6.js";/* empty css                   *//* empty css                  *//* empty css                   *//* empty css                  *//* empty css                     *//* empty css                       *//* empty css                 *//* empty css                     *//* empty css                  *//* empty css                  *//* empty css               *//* empty css                  *//* empty css                  */import{_ as me}from"./member_head-a897263d.js";import{k as ce,m as _e,n as ge,o as fe}from"./site-24414ab1.js";import{g as ve}from"./user-e18a06a5.js";import{g as we}from"./addon-0c58aeca.js";const be={key:0},he={class:"flex items-center"},xe={class:"flex items-center"},Ve={key:1,src:me,alt:"",class:"mr-[10px] w-[24px]"},ye={key:1},Pe={class:"text-[12px] text-[#a9a9a9] leading-normal mt-[5px]"},ke={class:"text-[12px] text-[#a9a9a9] leading-normal mt-[5px]"},Ee={class:"text-[12px] text-[#a9a9a9] leading-normal mt-[5px]"},De={class:"dialog-footer"},Ye=J({__name:"edit-site",emits:["complete"],setup(Te,{expose:S,emit:A}){const v=m(!1),p=m(!0),h=m([]),I=m([]),C=m([]);ve({}).then(({data:d})=>{I.value=d}).catch();const x=new Date;x.setTime(x.getTime()+3600*1e3*2*360);const U={site_id:"",site_name:"",real_name:"",uid:"",username:"",password:"",confirm_password:"",expire_time:x,site_domain:"",group_id:""},t=Q({...U}),B=m(),V=m(!0),y=m(!0),P=m(!0);(async()=>{h.value=await(await ce()).data})();const $=m([]);we().then(({data:d})=>{$.value=d}).catch();const F=async(d=null)=>{if(p.value=!0,Object.assign(t,U),d){const e=await(await _e(d.site_id)).data;C.value=e,Object.keys(t).forEach(i=>{e[i]!=null&&(t[i]=e[i])})}p.value=!1},R=L(()=>({site_name:[{required:!0,message:a("siteNamePlaceholder"),trigger:"blur"}],group_id:[{required:!0,message:a("groupIdPlaceholder"),trigger:"blur"}],uid:[{required:!0,message:a("uIdPlaceholder"),trigger:"blur"},{validator:(d,e,i)=>{t.uid===""?i(new Error(a("managerPlaceholder"))):i()},trigger:"blur"}],username:[{required:t.uid==0,message:a("usernamePlaceholder"),trigger:"blur"}],password:[{required:t.uid==0,message:a("passwordPlaceholder"),trigger:"blur"}],real_name:[{required:!0,message:a("userRealNamePlaceholder"),trigger:"blur"}],confirm_password:[{required:t.uid==0,message:a("confirmPasswordPlaceholder"),trigger:"blur"},{validator:(d,e,i)=>{t.uid==0&&e!=t.password?i(new Error(a("confirmPasswordError"))):i()},trigger:"blur"}],expire_time:[{required:!0,message:a("expireTimePlaceholder"),trigger:"blur"}]})),O=L(()=>p.value?"":t.site_id?a("editSite"):a("addSite")),G=async d=>{p.value||!d||await d.validate(async e=>{if(e){p.value=!0;const i=t;(i.site_id?ge:fe)(i).then(w=>{p.value=!1,v.value=!1,A("complete")}).catch(()=>{p.value=!1})}})};return window.onload=function(){for(var d=document.getElementsByTagName("input"),e=0;e<d.length;e++)d[e].setAttribute("autocomplete","off")},S({showDialog:v,setFormData:F,loading:p}),(d,e)=>{const i=le,u=ae,w=te,k=oe,M=W("Plus"),j=re,z=se,K=ie,X=de,q=ne,Y=ue,H=pe;return n(),g(Y,{modelValue:v.value,"onUpdate:modelValue":e[17]||(e[17]=l=>v.value=l),title:o(O),width:"500px","destroy-on-close":!0},{footer:s(()=>[c("span",De,[r(q,{onClick:e[15]||(e[15]=l=>v.value=!1)},{default:s(()=>[b(_(o(a)("cancel")),1)]),_:1}),r(q,{type:"primary",loading:p.value,onClick:e[16]||(e[16]=l=>G(B.value))},{default:s(()=>[b(_(o(a)("confirm")),1)]),_:1},8,["loading"])])]),default:s(()=>[N((n(),g(X,{model:t,"label-width":"100px",ref_key:"formRef",ref:B,rules:o(R),class:"page-form",autocomplete:"off"},{default:s(()=>[t.site_id==0?(n(),f("div",be,[r(u,{label:o(a)("siteName"),prop:"site_name"},{default:s(()=>[r(i,{modelValue:t.site_name,"onUpdate:modelValue":e[0]||(e[0]=l=>t.site_name=l),maxlength:"20",clearable:"",placeholder:o(a)("siteNamePlaceholder"),class:"input-width"},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),r(u,{label:o(a)("groupId"),prop:"group_id"},{default:s(()=>[r(k,{modelValue:t.group_id,"onUpdate:modelValue":e[1]||(e[1]=l=>t.group_id=l),clearable:"",placeholder:o(a)("groupIdPlaceholder"),class:"input-width"},{default:s(()=>[(n(!0),f(D,null,T(h.value,(l,E)=>(n(),g(w,{label:l.group_name,value:l.group_id,key:E},null,8,["label","value"]))),128))]),_:1},8,["modelValue","placeholder"])]),_:1},8,["label"]),r(u,{label:o(a)("manager"),prop:"uid"},{default:s(()=>[r(k,{modelValue:t.uid,"onUpdate:modelValue":e[2]||(e[2]=l=>t.uid=l),placeholder:o(a)("managerPlaceholder"),class:"input-width",filterable:""},{default:s(()=>[r(w,{label:o(a)("newAddManager"),value:0},{default:s(()=>[c("div",he,[r(j,{class:"mr-[10px]"},{default:s(()=>[r(M)]),_:1}),b(" "+_(o(a)("newAddManager")),1)])]),_:1},8,["label"]),(n(!0),f(D,null,T(I.value,l=>(n(),g(w,{key:l.uid,label:l.username,value:l.uid},{default:s(()=>[c("div",xe,[l.head_img?(n(),g(z,{key:0,src:o(Z)(l.head_img),size:"small",class:"mr-[10px]"},null,8,["src"])):(n(),f("img",Ve)),b(" "+_(l.username),1)])]),_:2},1032,["label","value"]))),128))]),_:1},8,["modelValue","placeholder"])]),_:1},8,["label"]),N(c("div",null,[r(u,{label:o(a)("username"),prop:"username"},{default:s(()=>[r(i,{modelValue:t.username,"onUpdate:modelValue":e[3]||(e[3]=l=>t.username=l),clearable:"",placeholder:o(a)("usernamePlaceholder"),class:"input-width",readonly:V.value,onClick:e[4]||(e[4]=l=>V.value=!1),onBlur:e[5]||(e[5]=l=>V.value=!0)},null,8,["modelValue","placeholder","readonly"])]),_:1},8,["label"]),r(u,{label:o(a)("password"),prop:"password"},{default:s(()=>[r(i,{modelValue:t.password,"onUpdate:modelValue":e[6]||(e[6]=l=>t.password=l),clearable:"",placeholder:o(a)("passwordPlaceholder"),class:"input-width","show-password":!0,type:"password",readonly:y.value,onClick:e[7]||(e[7]=l=>y.value=!1),onBlur:e[8]||(e[8]=l=>y.value=!0)},null,8,["modelValue","placeholder","readonly"])]),_:1},8,["label"]),r(u,{label:o(a)("confirmPassword"),prop:"confirm_password"},{default:s(()=>[r(i,{modelValue:t.confirm_password,"onUpdate:modelValue":e[9]||(e[9]=l=>t.confirm_password=l),placeholder:o(a)("confirmPasswordPlaceholder"),type:"password","show-password":!0,clearable:"",class:"input-width",readonly:P.value,onClick:e[10]||(e[10]=l=>P.value=!1),onBlur:e[11]||(e[11]=l=>P.value=!0)},null,8,["modelValue","placeholder","readonly"])]),_:1},8,["label"])],512),[[ee,t.uid===0]])])):(n(),f("div",ye,[r(u,{label:o(a)("siteName")},{default:s(()=>[b(_(t.site_name),1)]),_:1},8,["label"]),r(u,{label:o(a)("groupId"),prop:"group_id"},{default:s(()=>[r(k,{modelValue:t.group_id,"onUpdate:modelValue":e[12]||(e[12]=l=>t.group_id=l),clearable:"",placeholder:o(a)("groupIdPlaceholder"),class:"input-width"},{default:s(()=>[(n(!0),f(D,null,T(h.value,(l,E)=>(n(),g(w,{label:l.group_name,value:l.group_id,key:E},null,8,["label","value"]))),128))]),_:1},8,["modelValue","placeholder"])]),_:1},8,["label"])])),r(u,{label:o(a)("siteDomain"),prop:"site_domain"},{default:s(()=>[r(i,{modelValue:t.site_domain,"onUpdate:modelValue":e[13]||(e[13]=l=>t.site_domain=l),clearable:"",placeholder:o(a)("siteDomainPlaceholder"),class:"input-width"},null,8,["modelValue","placeholder"]),c("div",null,[c("p",Pe,_(o(a)("siteDomainTips")),1),c("p",ke,_(o(a)("siteDomainTipsTwo")),1),c("p",Ee,_(o(a)("siteDomainTipsThree")),1)])]),_:1},8,["label"]),r(u,{label:o(a)("expireTime"),prop:"expire_time",class:"input-width"},{default:s(()=>[r(K,{class:"flex-1 !flex",modelValue:t.expire_time,"onUpdate:modelValue":e[14]||(e[14]=l=>t.expire_time=l),clearable:"",type:"datetime",placeholder:o(a)("expireTimePlaceholder")},null,8,["modelValue","placeholder"])]),_:1},8,["label"])]),_:1},8,["model","rules"])),[[H,p.value]])]),_:1},8,["modelValue","title"])}}});export{Ye as _};