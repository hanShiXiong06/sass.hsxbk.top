import{d as P,r as n,x as j,bD as A,aR as F,n as W,aO as G,Q as K,U as D,q as t,h as g,c as O,a as o,R as y,a0 as b,t as i,u as s,e as l,w as p,i as B,s as R,A as Q,B as z,G as H,K as X,E as Y,L as Z,J as ee,M as ae}from"./index-37fee5a0.js";/* empty css                *//* empty css                 *//* empty css                        */import"./el-form-item-4ed993c7.js";/* empty css                  *//* empty css                 */import{g as te}from"./weapp-d6776f80.js";import{b as oe}from"./browser-a1ac24ac.js";const se={class:"main-container w-[375px] mx-auto mt-[20px] mb-[40px] relative"},le={class:"flex full-container h-[800px]"},ne=["src"],pe={class:"w-[375px] border border-slate-100 bg-body pt-[20px] px-[20px]"},re={class:"font-bold text-xl mb-[40px]"},ie={class:"mb-[20px] flex flex-col"},ce={class:"mb-[10px]"},de={key:0,class:"w-[400px] absolute bg-body top-[10%] -right-[450px]"},ue={class:"info-wrap mt-[20px]"},me={class:"px-[20px] pb-[10px] font-bold"},_e={class:"px-[20px] pb-[10px] font-bold mt-[40px]"},ve={class:"text-gray-400"},ke=P({__name:"preview",setup(fe){const u=n(""),m=n(""),_=n(""),r=n(""),d=n(!1),v=n(!1),I=n(0),C=n(0),f=j();f.query.page=f.query.page||"",A("setLayout")("decorate"),F().then(e=>{u.value=e.data.wap_url,L()});const T=()=>{if(m.value.trim().length==0){D({type:"warning",message:`${t("wapDomainPlaceholder")}`});return}u.value=m.value+"/wap",L(),H.set({key:"wap_domain",data:u.value}),d.value=!0,v.value=!1},L=()=>{if(f.query.page){r.value=`${u.value}${f.query.page}`,oe.toDataURL(r.value,{errorCorrectionLevel:"L",margin:0,width:100}).then(w=>{_.value=w});const e=()=>{I.value=new Date().getTime(),U()};e();let a=0,c=setInterval(()=>{if(k.value||a>=50){clearInterval(c);return}e(),a++},200);setTimeout(()=>{C.value==0&&q()},1e3*10)}},k=n(!1);window.addEventListener("message",e=>{try{let a={type:""};if(typeof e.data=="string"?a=JSON.parse(e.data):typeof e.data=="object"&&(a=e.data),a.type&&["appOnLaunch","appOnReady"].indexOf(a.type)!=-1){v.value=!1,d.value=!0;let c=new Date().getTime();k.value=!0,C.value=c-I.value}}catch(a){q(),console.log("preview 后台接受数据错误",a)}},!1);const U=()=>{const e=JSON.stringify({type:"appOnReady",message:"加载完成"});window.previewIframe&&window.previewIframe.contentWindow.postMessage(e,"*")},q=()=>{v.value=!0,d.value=!1,r.value="",_.value=""},h=W({qr_code:""});te().then(e=>{if(e.code==1){const a=e.data;h.qr_code=a.qr_code}});const{copy:M,isSupported:$,copied:E}=G(),J=e=>{$.value||D({message:t("notSupportCopy"),type:"warning"}),M(e)};return K(E,()=>{E.value&&D({message:t("copySuccess"),type:"success"})}),(e,a)=>{const c=X,w=Y,x=Z,S=ee,V=ae;return g(),O("div",se,[o("div",le,[y(o("iframe",{class:"w-[375px]",src:r.value,frameborder:"0",id:"previewIframe"},null,8,ne),[[b,d.value]]),y(o("div",pe,[o("div",re,i(s(t)("developTitle")),1),o("div",ie,[o("text",ce,i(s(t)("wapDomain")),1),l(c,{modelValue:m.value,"onUpdate:modelValue":a[0]||(a[0]=N=>m.value=N),placeholder:s(t)("wapDomainPlaceholder"),clearable:""},null,8,["modelValue","placeholder"])]),l(w,{type:"primary",onClick:T},{default:p(()=>[B(i(s(t)("confirm")),1)]),_:1})],512),[[b,v.value]]),d.value?(g(),O("div",de,[o("div",ue,[o("div",me,i(s(t)("h5")),1),l(V,{"label-width":"40px",class:"px-[20px]"},{default:p(()=>[y(l(x,{label:s(t)("link")},{default:p(()=>[l(c,{readonly:"",value:r.value},{append:p(()=>[l(w,{onClick:a[1]||(a[1]=N=>J(r.value)),class:"bg-primary copy"},{default:p(()=>[B(i(s(t)("copy")),1)]),_:1})]),_:1},8,["value"])]),_:1},8,["label"]),[[b,r.value]]),y(l(x,{label:" "},{default:p(()=>[l(S,{src:_.value},null,8,["src"])]),_:1},512),[[b,_.value]])]),_:1}),o("div",_e,i(s(t)("weapp")),1),l(V,{"label-width":"40px",class:"px-[20px]"},{default:p(()=>[h.qr_code?(g(),R(x,{key:0,label:" "},{default:p(()=>[l(S,{class:"w-[100px] h-[100px]",src:s(Q)(h.qr_code)},null,8,["src"])]),_:1})):(g(),R(x,{key:1,label:" "},{default:p(()=>[o("span",ve,i(s(t)("weappNotSet")),1)]),_:1}))]),_:1})])])):z("",!0)])])}}});export{ke as default};
