import{d as e,r as s,j as l,o as a,c as t,w as r,b as o,u,E as n,F as i,G as d,f as p,n as c,a5 as f,a6 as m,i as x,H as _,x as v,y as b,c6 as y,$ as j,V as g}from"./index-905183d4.js";import{b as h}from"./task.287f672e.js";import{M as k}from"./mescroll-body.b8d008ed.js";import{M as w}from"./mescroll-empty.f9bce990.js";import{u as C}from"./useMescroll.26ccf5de.js";import{_ as I}from"./_plugin-vue_export-helper.1b428a4d.js";import"./mescroll-uni-option.0af4878d.js";import"./mescroll-i18n.6025c811.js";/* empty css                                                                       */const M=I(e({__name:"task_rewards_detail",setup(e){const{mescrollInit:I,getMescroll:M}=C(m,f),z=s(0);l((e=>{z.value=Number(e.id)}));let E=s(!0),N=s(!0);const S=s([]),U=s(2),A=s([{label:"全部",value:2},{label:"待发放",value:0},{label:"已发放",value:1}]),B=e=>{E.value=!0,h(Number(z.value)).then((s=>{E.value=!1,N.value=!1,S.value=s.data.filter((e=>2===U.value||e.is_send===U.value)),e.endSuccess(0)}))};return(e,s)=>{const l=x;return a(),t(l,{class:"bg-[#fff] min-h-[100vh]",style:c(e.themeColor())},{default:r((()=>[o(k,{ref:"mescrollRef",top:"110rpx",down:{use:!1},onInit:u(I),onUp:B},{default:r((()=>[u(N)?p("v-if",!0):(a(),t(l,{key:0,class:"flex fixed top-0 left-0 right-0 z-10 whitespace-nowrap justify-around mb-[20rpx]"},{default:r((()=>[(a(!0),n(d,null,i(A.value,((e,s)=>(a(),t(l,{class:_(["text-[28rpx] leading-[90rpx] font-bold",{"class-select":U.value===e.value}]),onClick:s=>{return l=e.value,U.value=l,void M().resetUpScroll();var l}},{default:r((()=>[v(b(e.label),1)])),_:2},1032,["class","onClick"])))),256))])),_:1})),(a(!0),n(d,null,i(S.value,((e,s)=>(a(),t(l,{class:"flex py-[30rpx] box-border border-0 border-solid border-[#ddd] mx-[24rpx] border-b-[1rpx]"},{default:r((()=>[o(l,{class:"flex-1 flex flex-col justify-between"},{default:r((()=>[o(l,{class:"text-[26rpx] font-600"},{default:r((()=>[v(b(e.is_send?"已发放":"待发放"),1)])),_:2},1024),e.is_send?(a(),t(l,{key:0,class:"text-[24rpx] text-[#999]"},{default:r((()=>[v("已于 "+b(e.send_time)+" 发放该奖励 ",1)])),_:2},1024)):(a(),t(l,{key:1,class:"text-[24rpx] text-[#999]"},{default:r((()=>[v("预计于 "+b(u(y)(e.send_timer))+" 发放该奖励",1)])),_:2},1024))])),_:2},1024),o(l,{class:"text-[35rpx] font-600 text-[var(--price-text-color)] h-[100rpx] leading-[100rpx]"},{default:r((()=>[v(" +"+b(u(j)(e.reward_money)),1)])),_:2},1024)])),_:2},1024)))),256)),S.value.length||u(E)?p("v-if",!0):(a(),t(w,{key:1,option:{icon:u(g)("static/resource/images/empty.png")}},null,8,["option"]))])),_:1},8,["onInit"])])),_:1},8,["style"])}}}),[["__scopeId","data-v-9d82b0b7"]]);export{M as default};
