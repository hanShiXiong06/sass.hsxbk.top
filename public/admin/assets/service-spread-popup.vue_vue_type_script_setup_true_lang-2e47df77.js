import{d as k,n as B,r as t,aS as D,aP as L,Q as $,U as g,q as o,h as I,c as N,e as r,w as i,a,t as d,u as p,i as Q,J as j,E as P,K as T,X as q}from"./index-99f00cf3.js";/* empty css                  *//* empty css                   *//* empty css                 *//* empty css                  *//* empty css                 *//* empty css                        */import{b as J}from"./browser-a1ac24ac.js";const K={class:"promote-flex flex"},M={class:"promote-img flex justify-center items-center bg-[#f8f8f8] w-[150px] h-[150px]"},O={class:"px-[20px] flex-1"},R={class:"mb-[10px]"},X=["href"],te=k({__name:"service-spread-popup",setup(z,{expose:w}){const u=B({}),s=t(!1),m=t("");t("");const c=t(""),l=t(""),v=t("");D().then(e=>{m.value=e.data.wap_url});const x=()=>{l.value=`${m.value}${v.value}`,J.toDataURL(l.value,{errorCorrectionLevel:"L",margin:0,width:120}).then(e=>{c.value=e})},h=e=>{Object.assign(u,e),v.value=`/addon/vipcard/pages/service/detail?id=${u.goods_id}`,x(),s.value=!0},{copy:y,isSupported:b,copied:_}=L(),E=e=>{b.value||g({message:o("notSupportCopy"),type:"warning"}),y(e)};return $(_,()=>{_.value&&g({message:o("copySuccess"),type:"success"})}),w({showDialog:s,show:h}),(e,n)=>{const C=j,S=P,V=T,U=q;return I(),N("div",null,[r(U,{modelValue:s.value,"onUpdate:modelValue":n[1]||(n[1]=f=>s.value=f),title:p(o)("serviceSpreadTitle"),width:"500px","destroy-on-close":!0},{default:i(()=>[a("div",K,[a("div",M,[r(C,{src:c.value},null,8,["src"])]),a("div",O,[a("div",R,d(p(o)("spreadLink")),1),r(V,{class:"mb-[10px]",readonly:"",value:l.value},{append:i(()=>[r(S,{onClick:n[0]||(n[0]=f=>E(l.value))},{default:i(()=>[Q(d(p(o)("copy")),1)]),_:1})]),_:1},8,["value"]),a("a",{class:"text-primary",href:c.value,download:""},d(p(o)("downloadQrcode")),9,X)])])]),_:1},8,["modelValue","title"])])}}});export{te as _};
