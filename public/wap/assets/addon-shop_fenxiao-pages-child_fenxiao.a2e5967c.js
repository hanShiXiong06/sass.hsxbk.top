import{d as e,r as a,o as l,c as r,w as s,u as o,E as t,F as i,G as n,f as m,b as x,n as d,a as p,i as u,g as c,h as f,a4 as _,V as g,x as h,y as v,N as y,C as b}from"./index-905183d4.js";import{_ as j}from"./u-empty.09c683e5.js";import{_ as k}from"./u-loading-page.7aa0a449.js";import{c as w}from"./fenxiao.dacba751.js";import"./u-icon.86a2aad0.js";import"./_plugin-vue_export-helper.1b428a4d.js";import"./u-loading-icon.c376267d.js";import"./u-transition.dbaca185.js";const F=e({__name:"child_fenxiao",setup(e){let F=a([]),C=a(!0);return C.value=!0,w().then((e=>{F.value=[],F.value=e.data,C.value=!1})).catch((()=>{C.value=!0,p({url:"/app/pages/member/index",mode:"switchTab"})})),(e,a)=>{const p=y,w=b,T=u,z=c(f("u-empty"),j),E=_,G=c(f("u-loading-page"),k);return l(),r(T,{class:"bg-[#f8f8f8] min-h-[100vh]",style:d(e.themeColor())},{default:s((()=>[o(C)?m("v-if",!0):(l(),r(E,{key:0,"scroll-y":"true"},{default:s((()=>[(l(!0),t(n,null,i(o(F),((e,a)=>(l(),r(T,{class:"flex items-center bg-[#fff] mx-[30rpx] my-[20rpx] rounded-[10rpx] p-[30rpx]",key:a},{default:s((()=>[e.member.headimg?(l(),r(p,{key:0,class:"w-[90rpx] h-[90rpx] mr-[20rpx]",src:o(g)(e.member.headimg),mode:"widthFix"},null,8,["src"])):(l(),r(p,{key:1,class:"w-[90rpx] h-[90rpx] mr-[20rpx]",src:o(g)("addon/shop_fenxiao/index/head.png"),mode:"widthFix"},null,8,["src"])),x(T,{class:"flex flex-col"},{default:s((()=>[x(T,{class:"flex items-center"},{default:s((()=>[e.member?(l(),r(w,{key:0,class:"text-[28rpx] mr-[10rpx]"},{default:s((()=>[h(v(e.member.nickname||e.member.username),1)])),_:2},1024)):m("v-if",!0),e.fenxiao_level&&e.fenxiao_level.level_name?(l(),r(w,{key:1,class:"text-[24rpx] border-[2rpx] px-[12rpx] py-[2rpx] border-solid border-[var(--primary-color)] text-[var(--primary-color)] rounded-[4rpx]"},{default:s((()=>[h(v(e.fenxiao_level.level_name),1)])),_:2},1024)):m("v-if",!0)])),_:2},1024),x(w,{class:"text-[#999] text-[24rpx] mt-[16rpx]"},{default:s((()=>[h("加入时间:"+v(e.create_time),1)])),_:2},1024)])),_:2},1024),x(T,{class:"flex flex-col ml-auto items-end text-[24rpx]"},{default:s((()=>[x(w,{class:"leading-normal"},{default:s((()=>[h(v(e.child_fenxiao_num)+" 人",1)])),_:2},1024),x(w,{class:"leading-normal"},{default:s((()=>[h(v(e.fenxiao_order_num)+" 单",1)])),_:2},1024),x(w,{class:"leading-normal"},{default:s((()=>[h(v(e.fenxiao_commission)+" 元",1)])),_:2},1024)])),_:2},1024)])),_:2},1024)))),128)),o(F).length||o(C)?m("v-if",!0):(l(),r(z,{key:0,mode:"data",icon:o(g)("static/resource/images/empty.png")},null,8,["icon"]))])),_:1})),x(G,{"bg-color":"rgb(248,248,248)",loading:o(C),loadingText:"",fontSize:"16",color:"#333"},null,8,["loading"])])),_:1},8,["style"])}}});export{F as default};