import{d as E,r as _,h as f,s as b,w as e,a as d,e as a,i as u,t as s,u as l,q as t,R as k,ae as B,af as C,V as L,E as N,X as F,Y as I}from"./index-2a89d409.js";/* empty css                   *//* empty css                  *//* empty css                   *//* empty css                  *//* empty css                     *//* empty css                             */import{b as S}from"./site-e4a5834c.js";const q={class:"break-all"},R={class:"break-all"},T={class:"dialog-footer"},K=E({__name:"user-log-detail",setup(U,{expose:v}){const i=_(!1),c=_(!1),o=_({username:"",ip:"",url:"",type:"",params:""}),h=async()=>{o.value=await(await S(m)).data,c.value=!1};let m=0;return v({showDialog:i,setFormData:async(p=null)=>{c.value=!0,p&&(m=p.id,h())}}),(p,r)=>{const n=B,D=C,y=L,V=N,w=F,x=I;return f(),b(w,{modelValue:i.value,"onUpdate:modelValue":r[1]||(r[1]=g=>i.value=g),title:l(t)("detail"),width:"500px","destroy-on-close":!0},{footer:e(()=>[d("span",T,[a(V,{onClick:r[0]||(r[0]=g=>i.value=!1)},{default:e(()=>[u(s(l(t)("cancel")),1)]),_:1})])]),default:e(()=>[k((f(),b(y,{height:"400px"},{default:e(()=>[a(D,{column:1},{default:e(()=>[a(n,{label:l(t)("username"),"label-align":"right"},{default:e(()=>[u(s(o.value.username),1)]),_:1},8,["label"]),a(n,{label:l(t)("ip"),"label-align":"right"},{default:e(()=>[u(s(o.value.ip),1)]),_:1},8,["label"]),a(n,{label:l(t)("url"),"label-align":"right"},{default:e(()=>[d("span",q,s(o.value.url),1)]),_:1},8,["label"]),a(n,{label:l(t)("type"),"label-align":"right"},{default:e(()=>[u(s(o.value.type),1)]),_:1},8,["label"]),a(n,{label:l(t)("params"),"label-align":"right"},{default:e(()=>[d("span",R,s(o.value.params),1)]),_:1},8,["label"])]),_:1})]),_:1})),[[x,c.value]])]),_:1},8,["modelValue","title"])}}});export{K as _};
