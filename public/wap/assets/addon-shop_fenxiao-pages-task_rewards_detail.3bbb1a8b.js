import{d as e,r as a,p as s,o as t,c as l,w as r,b as o,O as u,a6 as c,P as n,f as i,u as d,n as m,a7 as p,a8 as _,i as v,a5 as f,Q as x,y as b,z as y,a0 as g,ca as h,E as j}from"./index-2882a2d8.js";import{c as k}from"./task.ae33da5e.js";import{M as w}from"./mescroll-body.e69cb222.js";import{M as I}from"./mescroll-empty.7f392528.js";import{u as M}from"./useMescroll.26ccf5de.js";import{_ as C}from"./_plugin-vue_export-helper.1b428a4d.js";import"./mescroll-i18n.c2747603.js";/* empty css                                                                       */const S=C(e({__name:"task_rewards_detail",setup(e){const{mescrollInit:C,getMescroll:S}=M(_,p),U=a(0);s((e=>{U.value=Number(e.id)}));const z=a(!0),N=a(!0),Q=a([]),R=a(2),B=a([{label:"全部",value:2},{label:"待发放",value:0},{label:"已发放",value:1}]),E=e=>{z.value=!0,k(Number(U.value)).then((a=>{z.value=!1,N.value=!1,Q.value=a.data.filter((e=>2===R.value||e.is_send===R.value)),e.endSuccess(0)}))};return(e,a)=>{const s=v,p=f;return t(),l(s,{class:"bg-[var(--page-bg-color)] min-h-[100vh]",style:m(e.themeColor())},{default:r((()=>[o(w,{ref:"mescrollRef",top:"88rpx",down:{use:!1},onInit:d(C),onUp:E},{default:r((()=>[N.value?i("v-if",!0):(t(),l(s,{key:0,class:"fixed top-0 left-0 right-0 z-10"},{default:r((()=>[o(p,{"scroll-x":!0,class:"tab-style-2"},{default:r((()=>[o(s,{class:"tab-content !justify-around"},{default:r((()=>[(t(!0),u(n,null,c(B.value,((e,a)=>(t(),l(s,{class:x(["tab-items",{"class-select":R.value===e.value}]),onClick:a=>{return s=e.value,R.value=s,void S().resetUpScroll();var s}},{default:r((()=>[b(y(e.label),1)])),_:2},1032,["class","onClick"])))),256))])),_:1})])),_:1})])),_:1})),Q.value.length?(t(),l(s,{key:1,class:"sidebar-marign pt-[var(--top-m)]"},{default:r((()=>[(t(!0),u(n,null,c(Q.value,((e,a)=>(t(),l(s,{class:"box-border mb-[var(--top-m)] card-template"},{default:r((()=>[o(s,{class:"w-full flex justify-between items-center"},{default:r((()=>[o(s,{class:"text-[36rpx] font-500 text-[var(--price-text-color)]"},{default:r((()=>[b(" +"+y(d(g)(e.reward_money)),1)])),_:2},1024),o(s,{class:x(["text-[26rpx]",{"text-[#999]":e.is_send,"text-[#333]":!e.is_send}])},{default:r((()=>[b(y(e.is_send?"已发放":"待发放"),1)])),_:2},1032,["class"])])),_:2},1024),e.is_send?(t(),l(s,{key:0,class:"text-[24rpx] text-[var(--text-color-light9)] mt-[20rpx]"},{default:r((()=>[b("已于 "+y(e.send_time)+" 发放该奖励",1)])),_:2},1024)):(t(),l(s,{key:1,class:"text-[24rpx] text-[var(--text-color-light9)] mt-[20rpx]"},{default:r((()=>[b("预计于 "+y(d(h)(e.send_timer))+" 发放该奖励",1)])),_:2},1024))])),_:2},1024)))),256))])),_:1})):i("v-if",!0),Q.value.length||z.value?i("v-if",!0):(t(),l(I,{key:2,option:{icon:d(j)("static/resource/images/empty.png")}},null,8,["option"]))])),_:1},8,["onInit"])])),_:1},8,["style"])}}}),[["__scopeId","data-v-7a68ac75"]]);export{S as default};