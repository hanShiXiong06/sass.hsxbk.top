import{d as B,n as D,r as o,aT as I,aS as L,a5 as U,R as g,q as t,h as $,c as N,e as p,w as i,a,t as u,u as r,i as T,I as j,E as Q,J as R,a1 as q}from"./index-17984968.js";/* empty css                  *//* empty css                   *//* empty css                 *//* empty css                  *//* empty css                 *//* empty css                        */import{b as J}from"./browser-a1ac24ac.js";const M={class:"promote-flex flex"},O={class:"promote-img flex justify-center items-center bg-[#f8f8f8] w-[150px] h-[150px]"},P={class:"px-[20px] flex-1"},z={class:"mb-[10px]"},A=["href"],oe=B({__name:"coupon-spread-popup",setup(F,{expose:w}){const d=D({}),s=o(!1),m=o("");o("");const c=o(""),n=o(""),_=o("");I().then(e=>{m.value=e.data.wap_url});const x=()=>{n.value=`${m.value}${_.value}`,J.toDataURL(n.value,{errorCorrectionLevel:"L",margin:0,width:120}).then(e=>{c.value=e})},h=e=>{Object.assign(d,e),_.value=`/addon/shop/pages/coupon/detail?coupon_id=${d.id}`,x(),s.value=!0},{copy:y,isSupported:b,copied:v}=L(),E=e=>{b.value||g({message:t("notSupportCopy"),type:"warning"}),y(e)};return U(v,()=>{v.value&&g({message:t("copySuccess"),type:"success"})}),w({showDialog:s,show:h}),(e,l)=>{const C=j,S=Q,V=R,k=q;return $(),N("div",null,[p(k,{modelValue:s.value,"onUpdate:modelValue":l[1]||(l[1]=f=>s.value=f),title:r(t)("couponSpreadTitle"),width:"500px","destroy-on-close":!0},{default:i(()=>[a("div",M,[a("div",O,[p(C,{src:c.value},null,8,["src"])]),a("div",P,[a("div",z,u(r(t)("spreadLink")),1),p(V,{class:"mb-[10px]",readonly:"",value:n.value},{append:i(()=>[p(S,{onClick:l[0]||(l[0]=f=>E(n.value))},{default:i(()=>[T(u(r(t)("copy")),1)]),_:1})]),_:1},8,["value"]),a("a",{class:"text-primary",href:c.value,download:""},u(r(t)("downloadQrcode")),9,A)])])]),_:1},8,["modelValue","title"])])}}});export{oe as _};