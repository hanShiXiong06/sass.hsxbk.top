import{d as e,r as s,o as t,c as a,w as o,b as l,u as n,P as r,a7 as i,Q as u,f as m,a8 as c,a9 as d,i as f,g as p,h as _,y as v,z as y}from"./index-7bf68536.js";import{_ as g}from"./u-tag.c797e3e1.js";import{a as j}from"./pay.d8c8791c.js";import{M as x}from"./mescroll-body.b6d57b41.js";import{M as h}from"./mescroll-empty.fcefb74e.js";import{u as k}from"./useMescroll.26ccf5de.js";import{_ as b}from"./_plugin-vue_export-helper.1b428a4d.js";import"./u-icon.0c1c54c7.js";import"./u-transition.cdf87992.js";import"./mescroll-i18n.14e7fe02.js";/* empty css                                                                       */const w=b(e({__name:"list",setup(e){const{mescrollInit:b,downCallback:w,getMescroll:z}=k(d,c);let I=s([]),M=s(!1);const D=e=>{M.value=!1;let s={page:e.num,limit:e.size};j(s).then((s=>{let t=s.data.data;1==e.num&&(I.value=[]),I.value=I.value.concat(t),console.log(I.value),e.endSuccess(t.length),M.value=!0})).catch((()=>{M.value=!0,e.endErr()}))};return(e,s)=>{const c=f,d=p(_("u-tag"),g);return t(),a(c,{class:"bg-[#f8f8f8] min-h-screen overflow-hidden"},{default:o((()=>[l(x,{ref:"mescrollRef",top:"64rpx",onInit:n(b),onDown:n(w),onUp:D},{default:o((()=>[n(I).length>0?(t(!0),r(u,{key:0},i(n(I),((e,s)=>(t(),a(c,{class:"tk-card",key:"index"},{default:o((()=>[l(c,{class:"flex items-center"},{default:o((()=>[l(c,null,{default:o((()=>[v("订单号：")])),_:1}),l(c,{class:"font-bold text-sm"},{default:o((()=>[v(y(e.order_id),1)])),_:2},1024)])),_:2},1024),l(c,{class:"flex justify-between mt-2"},{default:o((()=>[l(c,{class:"font-bold text-[34rpx]"},{default:o((()=>[v("￥"+y(e.order_money),1)])),_:2},1024),l(c,null,{default:o((()=>[10==e.order_status?(t(),a(d,{key:0,text:"已支付",size:"mini"})):m("v-if",!0),10!=e.order_status?(t(),a(d,{key:1,text:"未支付",plain:"",size:"mini"})):m("v-if",!0)])),_:2},1024)])),_:2},1024)])),_:2},1024)))),128)):m("v-if",!0),!n(I).length&&n(M)?(t(),a(h,{key:1,option:{icon:e.img("static/resource/images/empty.png")}},null,8,["option"])):m("v-if",!0)])),_:1},8,["onInit","onDown"])])),_:1})}}}),[["__scopeId","data-v-82d41dff"]]);export{w as default};
