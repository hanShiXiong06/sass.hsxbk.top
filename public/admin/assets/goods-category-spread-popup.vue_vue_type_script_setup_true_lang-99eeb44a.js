import{d as k,n as B,r as o,aR as D,aO as L,Q as $,U as f,q as t,h as I,s as N,w as c,a,e as i,t as d,u as n,i as Q,J as j,E as O,K as R,X as T}from"./index-a3bdc7eb.js";/* empty css                  *//* empty css                   *//* empty css                 *//* empty css                  *//* empty css                 *//* empty css                        */import{b as q}from"./browser-a1ac24ac.js";const J={class:"promote-flex flex"},K={class:"promote-img flex justify-center items-center bg-[#f8f8f8] w-[150px] h-[150px]"},M={class:"px-[20px] flex-1"},P={class:"mb-[10px]"},X=["href"],oe=k({__name:"goods-category-spread-popup",setup(z,{expose:w}){const u=B({}),s=o(!1),_=o("");o("");const p=o(""),l=o(""),m=o("");D().then(e=>{_.value=e.data.wap_url});const h=()=>{l.value=`${_.value}${m.value}`,q.toDataURL(l.value,{errorCorrectionLevel:"L",margin:0,width:120}).then(e=>{p.value=e})},x=e=>{Object.assign(u,e),m.value=`/addon/phone_shop/pages/goods/list?curr_goods_category=${u.category_id}`,h(),s.value=!0},{copy:y,isSupported:b,copied:g}=L(),C=e=>{b.value||f({message:t("notSupportCopy"),type:"warning"}),y(e)};return $(g,()=>{g.value&&f({message:t("copySuccess"),type:"success"})}),w({showDialog:s,show:x}),(e,r)=>{const E=j,V=O,S=R,U=T;return I(),N(U,{modelValue:s.value,"onUpdate:modelValue":r[1]||(r[1]=v=>s.value=v),title:n(t)("goodsCategorySpreadTitle"),width:"500px","destroy-on-close":!0},{default:c(()=>[a("div",J,[a("div",K,[i(E,{src:p.value},null,8,["src"])]),a("div",M,[a("div",P,d(n(t)("spreadLink")),1),i(S,{class:"mb-[10px]",readonly:"",value:l.value},{append:c(()=>[i(V,{onClick:r[0]||(r[0]=v=>C(l.value))},{default:c(()=>[Q(d(n(t)("copy")),1)]),_:1})]),_:1},8,["value"]),a("a",{class:"text-primary",href:p.value,download:""},d(n(t)("downloadQrcode")),9,X)])])]),_:1},8,["modelValue","title"])}}});export{oe as _};
