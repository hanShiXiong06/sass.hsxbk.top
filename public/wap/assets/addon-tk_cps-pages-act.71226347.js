import{d as e,r as a,o,U as t,b as s,w as l,u as r,V as n,ad as c,c as d,f as i,ae as p,af as u,a3 as m,g as f,h as _,i as h,y,z as g,E as v,a as w,Q as b,B as j,_ as k}from"./index-71c7df08.js";import{_ as x}from"./tabbar.a37cc2d9.js";import{_ as C}from"./pay.6aa36878.js";import{g as S,a as E}from"./cps.ffaf49dc.js";import{M as I}from"./mescroll-body.49de0f6f.js";import{M}from"./mescroll-empty.95b8c17e.js";import{u as U}from"./useMescroll.26ccf5de.js";import"./cloneDeep.77735539.js";import"./pay.4cfa8889.js";import"./mescroll-i18n.00218d15.js";/* empty css                                                                       */const O=k(e({__name:"act",setup(e){const{mescrollInit:k,downCallback:O,getMescroll:R}=U(u,p),{setShare:V,onShareAppMessage:D,onShareTimeline:z}=m();let P=a([]),Q=a(!1);V(),D(),z(),a([]);const A=a(""),B=e=>{if(-1===e.url.indexOf("style=embedded"))-1!=e.url.indexOf("http")||-1!=e.url.indexOf("http")?window.location.href=e.url:w({url:e.url});else{let a=function(e){const a={},o=e.split("&");for(const t of o){const[e,o]=t.split("=");a[e]=decodeURIComponent(o)}return a};const o=e.url.split("?")[1];if(o){const e=a(o),t=e.type,s=e.act_id;E({type:t,act_id:s}).then((e=>{""!=e.data.h5&&(window.location.href=e.data.h5),""!=e.data.wap_url&&(window.location.href=e.data.wap_url)})).catch((e=>{console.error("获取CPS信息失败",e)}))}else console.error("链接中没有查询参数")}},L=e=>{Q.value=!1;let a={page:e.num,limit:e.size,act_name:A.value};S(a).then((a=>{let o=a.data.data;1==e.num&&(P.value=[]),P.value=P.value.concat(o),e.endSuccess(o.length),Q.value=!0})).catch((()=>{Q.value=!0,e.endErr()}))};return(e,a)=>{const p=f(_("u-input"),b),u=h,m=j,w=f(_("tabbar"),x),S=f(_("pay"),C);return o(),t(n,null,[s(u,{class:"bg-[#f8f8f8] min-h-screen overflow-hidden"},{default:l((()=>[s(u,{class:"tk-card fl items-center"},{default:l((()=>[s(p,{clearable:"",modelValue:A.value,"onUpdate:modelValue":a[0]||(a[0]=e=>A.value=e),placeholder:"如美团|饿了么|点餐|滴滴等",onChange:a[1]||(a[1]=e=>{R().resetUpScroll()})},null,8,["modelValue"])])),_:1}),s(I,{ref:"mescrollRef",top:"0",onInit:r(k),onDown:r(O),onUp:L},{default:l((()=>[(o(!0),t(n,null,c(r(P),((a,t)=>(o(),d(u,{class:"tk-card",onClick:e=>(e=>{const a="/addon/tk_cps/pages/index?type="+e.type+"&act_id="+e.act_id+"&style=embedded";B({url:a})})(a)},{default:l((()=>[s(m,{style:{width:"100%",height:"120px","background-color":"#eeeeee","border-radius":"8px"},mode:a.mode,src:a.img,onError:e.imageError},null,8,["mode","src","onError"]),s(u,{class:"font-bold"},{default:l((()=>[y(g(a.act_name),1)])),_:2},1024)])),_:2},1032,["onClick"])))),256)),!r(P).length&&r(Q)?(o(),d(M,{key:0,option:{icon:r(v)("static/resource/images/empty.png")}},null,8,["option"])):i("v-if",!0)])),_:1},8,["onInit","onDown"])])),_:1}),s(w,{addon:"tk_cps"}),s(S,{ref:"payRef",onClose:a[2]||(a[2]=a=>e.payLoading=!1)},null,512)],64)}}}),[["__scopeId","data-v-e4a1adcd"]]);export{O as default};
