import{d as k,n as B,r as t,aR as D,aO as L,Q as $,U as g,q as a,h as I,c as N,e as r,w as p,a as o,t as d,u as c,i as Q,J as j,E as O,K as R,X as T}from"./index-6f32d09b.js";/* empty css                  *//* empty css                   *//* empty css                 *//* empty css                  *//* empty css                 *//* empty css                        */import{b as q}from"./browser-a1ac24ac.js";const J={class:"promote-flex flex"},K={class:"promote-img flex justify-center items-center bg-[#f8f8f8] w-[150px] h-[150px]"},M={class:"px-[20px] flex-1"},P={class:"mb-[10px]"},X=["href"],te=k({__name:"giftcard-spread-popup",setup(z,{expose:w}){const u=B({}),s=t(!1),m=t("");t("");const i=t(""),l=t(""),_=t("");D().then(e=>{m.value=e.data.wap_url});const x=()=>{l.value=`${m.value}${_.value}`,q.toDataURL(l.value,{errorCorrectionLevel:"L",margin:0,width:120}).then(e=>{i.value=e})},h=e=>{Object.assign(u,e),_.value=`/addon/shop_giftcard/pages/detail?giftcard_id=${u.giftcard_id}`,x(),s.value=!0},{copy:y,isSupported:b,copied:v}=L(),E=e=>{b.value||g({message:a("notSupportCopy"),type:"warning"}),y(e)};return $(v,()=>{v.value&&g({message:a("copySuccess"),type:"success"})}),w({showDialog:s,show:h}),(e,n)=>{const C=j,V=O,S=R,U=T;return I(),N("div",null,[r(U,{modelValue:s.value,"onUpdate:modelValue":n[1]||(n[1]=f=>s.value=f),title:c(a)("giftcardSpreadTitle"),width:"500px","destroy-on-close":!0},{default:p(()=>[o("div",J,[o("div",K,[r(C,{src:i.value},null,8,["src"])]),o("div",M,[o("div",P,d(c(a)("spreadLink")),1),r(S,{class:"mb-[10px]",readonly:"",value:l.value},{append:p(()=>[r(V,{onClick:n[0]||(n[0]=f=>E(l.value))},{default:p(()=>[Q(d(c(a)("copy")),1)]),_:1})]),_:1},8,["value"]),o("a",{class:"text-primary",href:i.value,download:""},d(c(a)("downloadQrcode")),9,X)])])]),_:1},8,["modelValue","title"])])}}});export{te as _};
