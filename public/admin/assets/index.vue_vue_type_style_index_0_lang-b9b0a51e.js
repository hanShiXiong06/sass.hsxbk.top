import{d as _,l as f,U as d,q as u,b9 as g,G as y,h as V,s as x,w as n,b as v,e as b,u as l,br as h,i as w,t as S,ba as k,K as E,bj as U}from"./index-37fee5a0.js";/* empty css                    *//* empty css                 */const F=_({__name:"index",props:{modelValue:{type:String,default:""},api:{type:String,default:"sys/document/document"}},emits:["update:modelValue"],setup(p,{emit:r}){const o=p,a=f({get(){return o.modelValue},set(e){r("update:modelValue",e)}}),t={action:`/adminapi//${o.api}`,showFileList:!1,headers:{},accept:".xlsx",onSuccess:(e,s)=>{if(e.code!=null&&e.code!=1){d({message:e.msg,type:"error"});return}a.value=e.data.url,d({message:u("upload.success"),type:"success"})}};return t.headers.token=g(),t.headers["site-id"]=y.get("siteId")||0,(e,s)=>{const i=E,c=U;return V(),x(c,k(t,{class:"w-full upload-file"}),{default:n(()=>[v(e.$slots,"default",{},()=>[b(i,{modelValue:l(a),"onUpdate:modelValue":s[0]||(s[0]=m=>h(a)?a.value=m:null),class:"w-full",readonly:!0,title:l(a)},{append:n(()=>[w(S(l(u)("upload.root")),1)]),_:1},8,["modelValue","title"])])]),_:3},16)}}});export{F as _};
