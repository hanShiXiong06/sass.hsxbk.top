import{_ as e}from"./u-input.07f64251.js";import{d as o,r as a,o as t,E as s,b as r,w as l,u as n,G as i,F as c,c as p,f as d,a5 as u,a6 as m,U as f,g as _,h,i as g,x as j,y as b,V as y,a as v,N as w}from"./index-905183d4.js";import{_ as x}from"./tabbar.f4383367.js";import{_ as k}from"./pay.2560ca84.js";import{g as C,a as E}from"./cps.db4e4b8a.js";import{M as S}from"./mescroll-body.b8d008ed.js";import{M as I}from"./mescroll-empty.f9bce990.js";import{u as M}from"./useMescroll.26ccf5de.js";import{_ as U}from"./_plugin-vue_export-helper.1b428a4d.js";import"./u-icon.86a2aad0.js";import"./u-badge.82a65592.js";import"./u-tabbar.bedfa48a.js";import"./u-safe-bottom.e94b03c1.js";import"./u-image.44c969ef.js";import"./u-transition.dbaca185.js";import"./u-button.d3798ecb.js";import"./u-loading-icon.c376267d.js";import"./u-popup.e3f6594b.js";import"./pay.01186f9d.js";import"./mescroll-uni-option.0af4878d.js";import"./mescroll-i18n.6025c811.js";/* empty css                                                                       */const V=U(o({__name:"act",setup(o){const{mescrollInit:U,downCallback:V,getMescroll:D}=M(m,u),{setShare:O,onShareAppMessage:R,onShareTimeline:z}=f();let A=a([]),N=a(!1);O(),R(),z(),a([]);const B=a(""),F=e=>{if(-1===e.url.indexOf("style=embedded"))-1!=e.url.indexOf("http")||-1!=e.url.indexOf("http")?window.location.href=e.url:v({url:e.url});else{let o=function(e){const o={},a=e.split("&");for(const t of a){const[e,a]=t.split("=");o[e]=decodeURIComponent(a)}return o};const a=e.url.split("?")[1];if(a){const e=o(a),t=e.type,s=e.act_id;E({type:t,act_id:s}).then((e=>{""!=e.data.h5&&(window.location.href=e.data.h5),""!=e.data.wap_url&&(window.location.href=e.data.wap_url)})).catch((e=>{console.error("获取CPS信息失败",e)}))}else console.error("链接中没有查询参数")}},G=e=>{N.value=!1;let o={page:e.num,limit:e.size,act_name:B.value};C(o).then((o=>{let a=o.data.data;1==e.num&&(A.value=[]),A.value=A.value.concat(a),e.endSuccess(a.length),N.value=!0})).catch((()=>{N.value=!0,e.endErr()}))};return(o,a)=>{const u=_(h("u-input"),e),m=g,f=w,v=_(h("tabbar"),x),C=_(h("pay"),k);return t(),s(i,null,[r(m,{class:"bg-[#f8f8f8] min-h-screen overflow-hidden"},{default:l((()=>[r(m,{class:"tk-card fl items-center"},{default:l((()=>[r(u,{clearable:"",modelValue:B.value,"onUpdate:modelValue":a[0]||(a[0]=e=>B.value=e),placeholder:"如美团|饿了么|点餐|滴滴等",onChange:a[1]||(a[1]=e=>{D().resetUpScroll()})},null,8,["modelValue"])])),_:1}),r(S,{ref:"mescrollRef",top:"0",onInit:n(U),onDown:n(V),onUp:G},{default:l((()=>[(t(!0),s(i,null,c(n(A),((e,a)=>(t(),p(m,{class:"tk-card",onClick:o=>(e=>{const o="/addon/tk_cps/pages/index?type="+e.type+"&act_id="+e.act_id+"&style=embedded";F({url:o})})(e)},{default:l((()=>[r(f,{style:{width:"100%",height:"120px","background-color":"#eeeeee","border-radius":"8px"},mode:e.mode,src:e.img,onError:o.imageError},null,8,["mode","src","onError"]),r(m,{class:"font-bold"},{default:l((()=>[j(b(e.act_name),1)])),_:2},1024)])),_:2},1032,["onClick"])))),256)),!n(A).length&&n(N)?(t(),p(I,{key:0,option:{icon:n(y)("static/resource/images/empty.png")}},null,8,["option"])):d("v-if",!0)])),_:1},8,["onInit","onDown"])])),_:1}),r(v,{addon:"tk_cps"}),r(C,{ref:"payRef",onClose:a[2]||(a[2]=e=>o.payLoading=!1)},null,512)],64)}}}),[["__scopeId","data-v-e4a1adcd"]]);export{V as default};
