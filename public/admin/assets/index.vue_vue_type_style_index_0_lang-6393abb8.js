import{d as _,l as f,U as d,q as u,b9 as g,G as x,h as y,s as V,w as n,b as v,e as b,u as l,br as h,i as k,t as w,ba as S,K as E,bj as U}from"./index-29db729d.js";/* empty css                    *//* empty css                 */const C=_({__name:"index",props:{modelValue:{type:String,default:""},api:{type:String,default:"sys/document/document"}},emits:["update:modelValue"],setup(p,{emit:r}){const o=p,t=f({get(){return o.modelValue},set(e){r("update:modelValue",e)}}),a={action:`/adminapi//${o.api}`,showFileList:!1,headers:{},accept:".doc,.docx,.xml,.txt,.pem,.zip,.rar,.7z,.crt,.key,.xls,.xlsx",onSuccess:(e,s)=>{if(e.code!=null&&e.code!=1){d({message:e.msg,type:"error"});return}t.value=e.data.url,d({message:u("upload.success"),type:"success"})}};return a.headers.token=g(),a.headers["site-id"]=x.get("siteId")||0,(e,s)=>{const i=E,c=U;return y(),V(c,S(a,{class:"w-full upload-file"}),{default:n(()=>[v(e.$slots,"default",{},()=>[b(i,{modelValue:l(t),"onUpdate:modelValue":s[0]||(s[0]=m=>h(t)?t.value=m:null),class:"w-full",readonly:!0,title:l(t)},{append:n(()=>[k(w(l(u)("upload.root")),1)]),_:1},8,["modelValue","title"])])]),_:3},16)}}});export{C as _};
