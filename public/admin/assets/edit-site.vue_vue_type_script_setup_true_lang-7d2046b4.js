import{d as Q,r as m,n as W,l as C,q as a,a2 as Z,h as n,s as f,w as s,a as c,e as r,i as b,t as _,u as o,R as L,c as g,F as k,T as U,A as ee,a0 as le,K as ae,L as te,ac as oe,aD as re,a1 as se,cz as ie,bO as de,M as ne,E as ue,X as pe,Y as me}from"./index-99f00cf3.js";/* empty css                   *//* empty css                  *//* empty css                   *//* empty css                  *//* empty css                *//* empty css                       *//* empty css                 *//* empty css                     *//* empty css                  *//* empty css                  *//* empty css               *//* empty css                  *//* empty css                  */import"./el-form-item-4ed993c7.js";import{_ as ce}from"./member_head-d9fd7b2c.js";import{m as _e,n as fe,o as ge,p as ve}from"./site-f20ee68d.js";import{c as we}from"./user-b61685bc.js";import{g as be}from"./addon-c964def0.js";const he={key:0},xe={class:"flex items-center"},Ve={class:"flex items-center"},Pe={key:1,src:ce,alt:"",class:"mr-[10px] w-[24px]"},ye={key:1},Te={class:"text-[12px] text-[#a9a9a9] leading-normal mt-[5px]"},De={class:"text-[12px] text-[#a9a9a9] leading-normal mt-[5px]"},Ee={class:"text-[12px] text-[#a9a9a9] leading-normal mt-[5px]"},ke={class:"dialog-footer"},Je=Q({__name:"edit-site",emits:["complete"],setup(Ue,{expose:N,emit:M}){const v=m(!1),p=m(!0),h=m([]),I=m([]),$=m([]);we({}).then(({data:i})=>{I.value=i});const x=new Date;x.setTime(x.getTime()+3600*1e3*2*360);const S={site_id:"",site_name:"",real_name:"",uid:"",username:"",password:"",confirm_password:"",expire_time:x,site_domain:"",group_id:""},t=W({...S}),q=m(),V=m(!0),P=m(!0),y=m(!0),T=i=>{let e=setTimeout(()=>{clearTimeout(e),i=="user_name_input"&&(V.value=!1),i=="password_input"&&(P.value=!1),i=="confirm_password_input"&&(y.value=!1)},200)};(async()=>{h.value=await(await _e()).data})();const A=m([]);be().then(({data:i})=>{A.value=i}).catch();const F=async(i=null)=>{if(p.value=!0,Object.assign(t,S),i){const e=await(await fe(i.site_id)).data;$.value=e,Object.keys(t).forEach(d=>{e[d]!=null&&(t[d]=e[d])})}p.value=!1},R=C(()=>({site_name:[{required:!0,message:a("siteNamePlaceholder"),trigger:"blur"}],group_id:[{required:!0,message:a("groupIdPlaceholder"),trigger:"blur"}],uid:[{required:!0,message:a("uIdPlaceholder"),trigger:"blur"},{validator:(i,e,d)=>{t.uid===""?d(new Error(a("managerPlaceholder"))):d()},trigger:"blur"}],username:[{required:t.uid==0,message:a("usernamePlaceholder"),trigger:"blur"}],password:[{required:t.uid==0,message:a("passwordPlaceholder"),trigger:"blur"}],real_name:[{required:!0,message:a("userRealNamePlaceholder"),trigger:"blur"}],confirm_password:[{required:t.uid==0,message:a("confirmPasswordPlaceholder"),trigger:"blur"},{validator:(i,e,d)=>{t.uid==0&&e!=t.password?d(new Error(a("confirmPasswordError"))):d()},trigger:"blur"}],expire_time:[{required:!0,message:a("expireTimePlaceholder"),trigger:"blur"}]})),O=C(()=>p.value?"":t.site_id?a("editSite"):a("addSite")),G=async i=>{p.value||!i||await i.validate(async e=>{if(e){p.value=!0;const d=t;(d.site_id?ge:ve)(d).then(w=>{p.value=!1,v.value=!1,M("complete")}).catch(()=>{p.value=!1})}})};return window.onload=function(){for(var i=document.getElementsByTagName("input"),e=0;e<i.length;e++)i[e].setAttribute("autocomplete","off")},N({showDialog:v,setFormData:F,loading:p}),(i,e)=>{const d=ae,u=te,w=oe,D=re,j=Z("Plus"),z=se,K=ie,X=de,Y=ne,B=ue,H=pe,J=me;return n(),f(H,{modelValue:v.value,"onUpdate:modelValue":e[17]||(e[17]=l=>v.value=l),title:o(O),width:"500px","destroy-on-close":!0},{footer:s(()=>[c("span",ke,[r(B,{onClick:e[15]||(e[15]=l=>v.value=!1)},{default:s(()=>[b(_(o(a)("cancel")),1)]),_:1}),r(B,{type:"primary",loading:p.value,onClick:e[16]||(e[16]=l=>G(q.value))},{default:s(()=>[b(_(o(a)("confirm")),1)]),_:1},8,["loading"])])]),default:s(()=>[L((n(),f(Y,{model:t,"label-width":"100px",ref_key:"formRef",ref:q,rules:o(R),class:"page-form",autocomplete:"off"},{default:s(()=>[t.site_id==0?(n(),g("div",he,[r(u,{label:o(a)("siteName"),prop:"site_name"},{default:s(()=>[r(d,{modelValue:t.site_name,"onUpdate:modelValue":e[0]||(e[0]=l=>t.site_name=l),modelModifiers:{trim:!0},maxlength:"20",clearable:"",placeholder:o(a)("siteNamePlaceholder"),class:"input-width"},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),r(u,{label:o(a)("groupId"),prop:"group_id"},{default:s(()=>[r(D,{modelValue:t.group_id,"onUpdate:modelValue":e[1]||(e[1]=l=>t.group_id=l),clearable:"",placeholder:o(a)("groupIdPlaceholder"),class:"input-width"},{default:s(()=>[(n(!0),g(k,null,U(h.value,(l,E)=>(n(),f(w,{label:l.group_name,value:l.group_id,key:E},null,8,["label","value"]))),128))]),_:1},8,["modelValue","placeholder"])]),_:1},8,["label"]),r(u,{label:o(a)("manager"),prop:"uid"},{default:s(()=>[r(D,{modelValue:t.uid,"onUpdate:modelValue":e[2]||(e[2]=l=>t.uid=l),placeholder:o(a)("managerPlaceholder"),class:"input-width",filterable:""},{default:s(()=>[r(w,{label:o(a)("newAddManager"),value:0},{default:s(()=>[c("div",xe,[r(z,{class:"mr-[10px]"},{default:s(()=>[r(j)]),_:1}),b(" "+_(o(a)("newAddManager")),1)])]),_:1},8,["label"]),(n(!0),g(k,null,U(I.value,l=>(n(),f(w,{key:l.uid,label:l.username,value:l.uid},{default:s(()=>[c("div",Ve,[l.head_img?(n(),f(K,{key:0,src:o(ee)(l.head_img),size:"small",class:"mr-[10px]"},null,8,["src"])):(n(),g("img",Pe)),b(" "+_(l.username),1)])]),_:2},1032,["label","value"]))),128))]),_:1},8,["modelValue","placeholder"])]),_:1},8,["label"]),L(c("div",null,[r(u,{label:o(a)("username"),prop:"username"},{default:s(()=>[r(d,{modelValue:t.username,"onUpdate:modelValue":e[3]||(e[3]=l=>t.username=l),modelModifiers:{trim:!0},clearable:"",placeholder:o(a)("usernamePlaceholder"),class:"input-width",readonly:V.value,onClick:e[4]||(e[4]=l=>T("user_name_input")),onBlur:e[5]||(e[5]=l=>V.value=!0)},null,8,["modelValue","placeholder","readonly"])]),_:1},8,["label"]),r(u,{label:o(a)("password"),prop:"password"},{default:s(()=>[r(d,{modelValue:t.password,"onUpdate:modelValue":e[6]||(e[6]=l=>t.password=l),modelModifiers:{trim:!0},clearable:"",placeholder:o(a)("passwordPlaceholder"),class:"input-width","show-password":!0,type:"password",readonly:P.value,onClick:e[7]||(e[7]=l=>T("password_input")),onBlur:e[8]||(e[8]=l=>P.value=!0)},null,8,["modelValue","placeholder","readonly"])]),_:1},8,["label"]),r(u,{label:o(a)("confirmPassword"),prop:"confirm_password"},{default:s(()=>[r(d,{modelValue:t.confirm_password,"onUpdate:modelValue":e[9]||(e[9]=l=>t.confirm_password=l),modelModifiers:{trim:!0},placeholder:o(a)("confirmPasswordPlaceholder"),type:"password","show-password":!0,clearable:"",class:"input-width",readonly:y.value,onClick:e[10]||(e[10]=l=>T("confirm_password_input")),onBlur:e[11]||(e[11]=l=>y.value=!0)},null,8,["modelValue","placeholder","readonly"])]),_:1},8,["label"])],512),[[le,t.uid===0]])])):(n(),g("div",ye,[r(u,{label:o(a)("siteName")},{default:s(()=>[b(_(t.site_name),1)]),_:1},8,["label"]),r(u,{label:o(a)("groupId"),prop:"group_id"},{default:s(()=>[r(D,{modelValue:t.group_id,"onUpdate:modelValue":e[12]||(e[12]=l=>t.group_id=l),clearable:"",placeholder:o(a)("groupIdPlaceholder"),class:"input-width"},{default:s(()=>[(n(!0),g(k,null,U(h.value,(l,E)=>(n(),f(w,{label:l.group_name,value:l.group_id,key:E},null,8,["label","value"]))),128))]),_:1},8,["modelValue","placeholder"])]),_:1},8,["label"])])),r(u,{label:o(a)("siteDomain"),prop:"site_domain"},{default:s(()=>[r(d,{modelValue:t.site_domain,"onUpdate:modelValue":e[13]||(e[13]=l=>t.site_domain=l),modelModifiers:{trim:!0},clearable:"",placeholder:o(a)("siteDomainPlaceholder"),class:"input-width"},null,8,["modelValue","placeholder"]),c("div",null,[c("p",Te,_(o(a)("siteDomainTips")),1),c("p",De,_(o(a)("siteDomainTipsTwo")),1),c("p",Ee,_(o(a)("siteDomainTipsThree")),1)])]),_:1},8,["label"]),r(u,{label:o(a)("expireTime"),prop:"expire_time",class:"input-width"},{default:s(()=>[r(X,{class:"flex-1 !flex",modelValue:t.expire_time,"onUpdate:modelValue":e[14]||(e[14]=l=>t.expire_time=l),clearable:"",type:"datetime",placeholder:o(a)("expireTimePlaceholder")},null,8,["modelValue","placeholder"])]),_:1},8,["label"])]),_:1},8,["model","rules"])),[[J,p.value]])]),_:1},8,["modelValue","title"])}}});export{Je as _};
