import{_ as e}from"./u-input.09a5cedd.js";import{d as a,Z as o,r as t,o as s,P as r,b as l,w as n,u as i,Q as p,a7 as c,c as d,f as m,a8 as u,a9 as f,g as _,h,i as j,y as g,z as y,E as b,a as v,B as w}from"./index-7bf68536.js";import{_ as x}from"./tabbar.e049672c.js";import{_ as k}from"./pay.d2e850e8.js";import{g as C,a as I}from"./cps.81000113.js";import{M}from"./mescroll-body.b6d57b41.js";import{M as S}from"./mescroll-empty.fcefb74e.js";import{u as E}from"./useMescroll.26ccf5de.js";import{a as D}from"./common.1828864e.js";import{_ as U}from"./_plugin-vue_export-helper.1b428a4d.js";import"./u-icon.0c1c54c7.js";import"./u-badge.d8d91719.js";import"./u-tabbar.d98653fa.js";import"./u-safe-bottom.908eeae4.js";import"./cloneDeep.77735539.js";import"./u-image.e46f68ef.js";import"./u-transition.cdf87992.js";import"./u-popup.be4bfacd.js";import"./pay.2db06871.js";import"./mescroll-i18n.14e7fe02.js";/* empty css                                                                       */const z=U(a({__name:"act",setup(a){const{mescrollInit:U,downCallback:z,getMescroll:O}=E(f,u),{setShare:R,onShareAppMessage:V,onShareTimeline:A}=o();let P=t([]),B=t(!1);R(),V(),A(),D(),t([]);const F=t(""),H=e=>{if(-1===e.url.indexOf("style=embedded"))-1!=e.url.indexOf("http")||-1!=e.url.indexOf("http")?window.location.href=e.url:v({url:e.url});else{let a=function(e){const a={},o=e.split("&");for(const t of o){const[e,o]=t.split("=");a[e]=decodeURIComponent(o)}return a};const o=e.url.split("?")[1];if(o){const e=a(o),t=e.type,s=e.act_id;I({type:t,act_id:s}).then((e=>{""!=e.data.h5&&(window.location.href=e.data.h5),""!=e.data.wap_url&&(window.location.href=e.data.wap_url)})).catch((e=>{console.error("获取CPS信息失败",e)}))}else console.error("链接中没有查询参数")}},J=e=>{B.value=!1;let a={page:e.num,limit:e.size,act_name:F.value};C(a).then((a=>{let o=a.data.data;1==e.num&&(P.value=[]),P.value=P.value.concat(o),e.endSuccess(o.length),B.value=!0})).catch((()=>{B.value=!0,e.endErr()}))};return(a,o)=>{const t=_(h("u-input"),e),u=j,f=w,v=_(h("tabbar"),x),C=_(h("pay"),k);return s(),r(p,null,[l(u,{class:"bg-[#f8f8f8] min-h-screen overflow-hidden"},{default:n((()=>[l(u,{class:"tk-card fl items-center"},{default:n((()=>[l(t,{clearable:"",modelValue:F.value,"onUpdate:modelValue":o[0]||(o[0]=e=>F.value=e),placeholder:"如美团|饿了么|点餐|滴滴等",onChange:o[1]||(o[1]=e=>{O().resetUpScroll()})},null,8,["modelValue"])])),_:1}),l(M,{ref:"mescrollRef",top:"0",onInit:i(U),onDown:i(z),onUp:J},{default:n((()=>[(s(!0),r(p,null,c(i(P),((e,o)=>(s(),d(u,{class:"tk-card",onClick:a=>(e=>{const a="/addon/tk_cps/pages/index?type="+e.type+"&act_id="+e.act_id+"&style=embedded";H({url:a})})(e)},{default:n((()=>[l(f,{style:{width:"100%",height:"120px","background-color":"#eeeeee","border-radius":"8px"},mode:e.mode,src:e.img,onError:a.imageError},null,8,["mode","src","onError"]),l(u,{class:"font-bold"},{default:n((()=>[g(y(e.act_name),1)])),_:2},1024)])),_:2},1032,["onClick"])))),256)),!i(P).length&&i(B)?(s(),d(S,{key:0,option:{icon:i(b)("static/resource/images/empty.png")}},null,8,["option"])):m("v-if",!0)])),_:1},8,["onInit","onDown"])])),_:1}),l(v,{addon:"tk_cps"}),l(C,{ref:"payRef",onClose:o[2]||(o[2]=e=>a.payLoading=!1)},null,512)],64)}}}),[["__scopeId","data-v-53dba76d"]]);export{z as default};