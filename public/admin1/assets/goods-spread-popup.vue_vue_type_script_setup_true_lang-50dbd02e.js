import{d as k,n as B,r as a,aT as D,aS as I,a5 as L,R as f,q as s,h as U,c as N,e as p,w as u,a as t,t as m,u as r,i as T,I as j,E as Q,J as R,a1 as q}from"./index-17984968.js";/* empty css                  *//* empty css                   *//* empty css                 *//* empty css                  *//* empty css                 *//* empty css                        */import{b as J}from"./browser-a1ac24ac.js";const M={class:"promote-flex flex"},O={class:"promote-img flex justify-center items-center bg-[#f8f8f8] w-[150px] h-[150px]"},P={class:"px-[20px] flex-1"},z={class:"mb-[10px]"},A=["href"],oe=k({__name:"goods-spread-popup",setup(F,{expose:w}){const d=B({}),l=a(!1),_=a("");a("");const i=a(""),n=a(""),c=a("");D().then(e=>{_.value=e.data.wap_url});const h=()=>{n.value=`${_.value}${c.value}`,J.toDataURL(n.value,{errorCorrectionLevel:"L",margin:0,width:120}).then(e=>{i.value=e})},x=(e,o="goods")=>{Object.assign(d,e),o=="goods"?c.value=`/addon/shop/pages/goods/detail?goods_id=${d.goods_id}`:c.value=`/addon/shop/pages/point/detail?id=${d.id}`,h(),l.value=!0},{copy:y,isSupported:b,copied:v}=I(),E=e=>{b.value||f({message:s("notSupportCopy"),type:"warning"}),y(e)};return L(v,()=>{v.value&&f({message:s("copySuccess"),type:"success"})}),w({showDialog:l,show:x}),(e,o)=>{const C=j,S=Q,V=R,$=q;return U(),N("div",null,[p($,{modelValue:l.value,"onUpdate:modelValue":o[1]||(o[1]=g=>l.value=g),title:r(s)("goodsSpreadTitle"),width:"500px","destroy-on-close":!0},{default:u(()=>[t("div",M,[t("div",O,[p(C,{src:i.value},null,8,["src"])]),t("div",P,[t("div",z,m(r(s)("spreadLink")),1),p(V,{class:"mb-[10px]",readonly:"",value:n.value},{append:u(()=>[p(S,{onClick:o[0]||(o[0]=g=>E(n.value))},{default:u(()=>[T(m(r(s)("copy")),1)]),_:1})]),_:1},8,["value"]),t("a",{class:"text-primary",href:i.value,download:""},m(r(s)("downloadQrcode")),9,A)])])]),_:1},8,["modelValue","title"])])}}});export{oe as _};
