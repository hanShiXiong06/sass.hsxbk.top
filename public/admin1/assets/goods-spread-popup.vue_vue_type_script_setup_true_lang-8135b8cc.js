import{d as B,n as D,r as o,aT as I,aS as L,a5 as U,R as f,q as t,h as $,c as N,e as r,w as i,a,t as d,u as p,i as T,I as j,E as Q,J as R,a1 as q}from"./index-17984968.js";/* empty css                  *//* empty css                   *//* empty css                 *//* empty css                  *//* empty css                 *//* empty css                        */import{b as J}from"./browser-a1ac24ac.js";const M={class:"promote-flex flex"},O={class:"promote-img flex justify-center items-center bg-[#f8f8f8] w-[150px] h-[150px]"},P={class:"px-[20px] flex-1"},z={class:"mb-[10px]"},A=["href"],oe=B({__name:"goods-spread-popup",setup(F,{expose:w}){const u=D({}),s=o(!1),m=o("");o("");const c=o(""),l=o(""),_=o("");I().then(e=>{m.value=e.data.wap_url});const x=()=>{l.value=`${m.value}${_.value}`,J.toDataURL(l.value,{errorCorrectionLevel:"L",margin:0,width:120}).then(e=>{c.value=e})},h=e=>{Object.assign(u,e),_.value=`/addon/o2o/pages/goods/detail?goods_id=${u.goods_id}`,x(),s.value=!0},{copy:y,isSupported:b,copied:v}=L(),E=e=>{b.value||f({message:t("notSupportCopy"),type:"warning"}),y(e)};return U(v,()=>{v.value&&f({message:t("copySuccess"),type:"success"})}),w({showDialog:s,show:h}),(e,n)=>{const C=j,S=Q,V=R,k=q;return $(),N("div",null,[r(k,{modelValue:s.value,"onUpdate:modelValue":n[1]||(n[1]=g=>s.value=g),title:p(t)("goodsSpreadTitle"),width:"500px","destroy-on-close":!0},{default:i(()=>[a("div",M,[a("div",O,[r(C,{src:c.value},null,8,["src"])]),a("div",P,[a("div",z,d(p(t)("spreadLink")),1),r(V,{class:"mb-[10px]",readonly:"",value:l.value},{append:i(()=>[r(S,{onClick:n[0]||(n[0]=g=>E(l.value))},{default:i(()=>[T(d(p(t)("copy")),1)]),_:1})]),_:1},8,["value"]),a("a",{class:"text-primary",href:c.value,download:""},d(p(t)("downloadQrcode")),9,A)])])]),_:1},8,["modelValue","title"])])}}});export{oe as _};
