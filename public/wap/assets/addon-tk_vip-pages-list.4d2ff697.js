import{d as e,r as s,p as t,o as a,P as l,b as o,w as r,u as n,y as u,Q as i,a7 as m,f as c,c as p,a8 as d,a9 as f,i as _,g as x,h as y,C as v,z as j,E as b,a as g}from"./index-7bf68536.js";import{_ as h}from"./u-icon.0c1c54c7.js";import{_ as k}from"./pay.d2e850e8.js";import{g as w}from"./order.03dfa5e5.js";import{M as z}from"./mescroll-body.b6d57b41.js";import{M}from"./mescroll-empty.fcefb74e.js";import{u as C}from"./useMescroll.26ccf5de.js";import{_ as I}from"./_plugin-vue_export-helper.1b428a4d.js";import"./u-image.e46f68ef.js";import"./u-transition.cdf87992.js";import"./u-popup.be4bfacd.js";import"./u-safe-bottom.908eeae4.js";import"./pay.2db06871.js";import"./mescroll-i18n.14e7fe02.js";/* empty css                                                                       */const D=I(e({__name:"list",setup(e){const I=s(null),D=s(!1),{mescrollInit:E,downCallback:R,getMescroll:A}=C(f,d);let F=s([]),L=s(!1);s(!1);let N=s("");s([]),s([]),t((e=>{N.value=e.status||""}));const P=e=>{L.value=!1;let s={page:e.num,limit:e.size,status:N.value};w(s).then((s=>{let t=s.data.data;1==e.num&&(F.value=[]),F.value=F.value.concat(t),e.endSuccess(t.length),L.value=!0})).catch((()=>{L.value=!0,e.endErr()}))};return(e,s)=>{const t=_,d=x(y("u-icon"),h),f=v,w=x(y("pay"),k);return a(),l(i,null,[o(t,{class:"bg-[#f8f8f8] min-h-screen overflow-hidden"},{default:r((()=>[o(z,{ref:"mescrollRef",top:"64rpx",onInit:n(E),onDown:n(R),onUp:P},{default:r((()=>[o(t,{class:"font-bold ml-2 text-[32rpx]","mb-2":""},{default:r((()=>[u("购买记录")])),_:1}),n(F).length>0?(a(!0),l(i,{key:0},m(n(F),((e,s)=>(a(),p(t,{class:"tk-card",key:s},{default:r((()=>[o(t,{class:"flex items-center justify-between"},{default:r((()=>[o(t,{class:"font-bold text-xs"},{default:r((()=>[u(j(e.body),1)])),_:2},1024),o(t,{class:"text-[#f43034]"},{default:r((()=>[u("￥"+j(e.order_money),1)])),_:2},1024)])),_:2},1024),o(t,{class:"line-box mb-1"}),o(t,{class:"flex items-center justify-between"},{default:r((()=>[o(t,{class:"text-xs text-red-400"},{default:r((()=>[u(j(e.level_id_name),1)])),_:2},1024),o(t,{class:"text-xs text-slate-500"},{default:r((()=>[u(j(e.create_time),1)])),_:2},1024)])),_:2},1024)])),_:2},1024)))),128)):c("v-if",!0),!n(F).length&&n(L)?(a(),p(M,{key:1,option:{icon:n(b)("static/resource/images/empty.png")}},null,8,["option"])):c("v-if",!0)])),_:1},8,["onInit","onDown"])])),_:1}),o(f,{onClick:s[0]||(s[0]=e=>n(g)({url:"/addon/tk_vip/pages/index",mode:"reLaunch"})),class:"fixed bottom-48 right-4 z-50 rounded-full p-2 text-white hover:bg-blue-700"},{default:r((()=>[o(d,{name:"arrow-left-double",color:"#000000",size:"24"})])),_:1}),o(w,{ref_key:"payRef",ref:I,onClose:s[1]||(s[1]=e=>D.value=!1)},null,512)],64)}}}),[["__scopeId","data-v-ad3a838e"]]);export{D as default};
