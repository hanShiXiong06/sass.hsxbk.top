import{d as _,l as f,R as d,q as u,b7 as g,G as y,h as x,s as V,w as n,b as h,e as v,u as o,bp as b,i as k,t as w,b8 as S,J as E,bh as $}from"./index-17984968.js";/* empty css                    *//* empty css                 */const F=_({__name:"index",props:{modelValue:{type:String,default:""},api:{type:String,default:"sys/document/document"}},emits:["update:modelValue"],setup(p,{emit:r}){const l=p,t=f({get(){return l.modelValue},set(e){r("update:modelValue",e)}}),a={action:`/adminapi//${l.api}`,showFileList:!1,headers:{},accept:".doc,.docx,.xml,.txt,.pem,.zip,.rar,.7z,.crt,.key",onSuccess:(e,s)=>{if(e.code!=null&&e.code!=1){d({message:e.msg,type:"error"});return}t.value=e.data.url,d({message:u("upload.success"),type:"success"})}};return a.headers.token=g(),a.headers["site-id"]=y.get("siteId")||0,(e,s)=>{const i=E,c=$;return x(),V(c,S(a,{class:"w-full upload-file"}),{default:n(()=>[h(e.$slots,"default",{},()=>[v(i,{modelValue:o(t),"onUpdate:modelValue":s[0]||(s[0]=m=>b(t)?t.value=m:null),class:"w-full",readonly:!0,title:o(t)},{append:n(()=>[k(w(o(u)("upload.root")),1)]),_:1},8,["modelValue","title"])])]),_:3},16)}}});export{F as _};