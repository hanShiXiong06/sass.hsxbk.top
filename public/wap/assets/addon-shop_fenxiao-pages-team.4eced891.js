import{d as e,r as a,o as t,c as l,w as s,b as r,Q as i,y as o,O as n,a6 as p,P as c,f as u,n as m,a as x,D as d,i as f,a5 as _,g as v,h as g,u as h,E as y,z as b,B as k}from"./index-9317da28.js";import{_ as j}from"./loading-page.vue_vue_type_script_setup_true_lang.c92b07c2.js";import{d as w}from"./fenxiao.4ded0069.js";import{M as C}from"./mescroll-empty.82e9c349.js";import"./u-loading-page.de89bca9.js";import"./u-loading-icon.aabe3d05.js";/* empty css                                                                       */import"./_plugin-vue_export-helper.1b428a4d.js";import"./u-transition.65be38eb.js";import"./mescroll-i18n.f3c5a2b0.js";const z=e({__name:"team",setup(e){const z=a("direct"),D=e=>{z.value=e},F=a({}),O=a(!0);return O.value=!0,w().then((e=>{F.value=e.data,O.value=!1})).catch((()=>{O.value=!0,x({url:"/app/pages/member/index",mode:"switchTab"})})),(e,a)=>{const x=d,w=f,Q=k,B=_,E=v(g("loading-page"),j);return t(),l(w,{class:"bg-[#f8f8f8] min-h-[100vh]",style:m(e.themeColor())},{default:s((()=>[r(w,{class:"fixed top-[0] left-[0] right-[0] z-10"},{default:s((()=>[r(w,{class:"tab-style-3"},{default:s((()=>[r(x,{class:i(["tab-items",{"class-select":"direct"==z.value}]),onClick:a[0]||(a[0]=e=>D("direct"))},{default:s((()=>[o("直推")])),_:1},8,["class"]),r(x,{class:i(["tab-items",{"class-select":"indirect"==z.value}]),onClick:a[1]||(a[1]=e=>D("indirect"))},{default:s((()=>[o("间推")])),_:1},8,["class"])])),_:1})])),_:1}),r(w,{class:"pt-[88rpx]"}),O.value?u("v-if",!0):(t(),l(B,{key:0,"scroll-y":"true"},{default:s((()=>[F.value[z.value].length?(t(),l(w,{key:0,class:"pt-[var(--top-m)]"},{default:s((()=>[(t(!0),n(c,null,p(F.value[z.value],((e,a)=>(t(),l(w,{class:"flex items-center sidebar-marign mb-[var(--top-m)] card-template",key:a},{default:s((()=>[e.headimg?(t(),l(Q,{key:0,class:"w-[90rpx] h-[90rpx] mr-[20rpx] rounded-full",src:h(y)(e.headimg),mode:"widthFix"},null,8,["src"])):(t(),l(Q,{key:1,class:"w-[90rpx] h-[90rpx] mr-[20rpx] rounded-full",src:h(y)("addon/shop_fenxiao/index/head.png"),mode:"widthFix"},null,8,["src"])),r(w,{class:"flex flex-col"},{default:s((()=>[r(w,{class:"flex items-center"},{default:s((()=>[r(w,{class:"mr-[10rpx] flex items-center"},{default:s((()=>[r(x,{class:"text-[30rpx] font-500"},{default:s((()=>[o(b(e.nickname||e.username),1)])),_:2},1024),r(x,{class:"bg-primary-light !text-[var(--primary-color)] !text-[22rpx] px-[10rpx] h-[36rpx] ml-[10rpx] tag-item"},{default:s((()=>[o(b(e.is_fenxiao?"分销商":"会员"),1)])),_:2},1024)])),_:2},1024),e.is_fenxiao?(t(),l(x,{key:0,class:"bg-primary-light !text-[var(--primary-color)] !text-[22rpx] px-[10rpx] h-[36rpx] ml-[10rpx] tag-item"},{default:s((()=>[o(b(e.fenxiao.fenxiao_level.level_name),1)])),_:2},1024)):u("v-if",!0)])),_:2},1024),"indirect"==z.value&&!e.is_fenxiao&&e.fenxiao&&e.fenxiao.member?(t(),l(x,{key:0,class:"text-[var(--text-color-light6)] text-[24rpx] mt-[20rpx]"},{default:s((()=>[o("上级分销商:"+b(e.fenxiao.member.nickname),1)])),_:2},1024)):u("v-if",!0),r(x,{class:"text-[var(--text-color-light6)] text-[24rpx] mt-[16rpx]"},{default:s((()=>[o("加入时间: "+b(e.create_time),1)])),_:2},1024)])),_:2},1024)])),_:2},1024)))),128))])),_:1})):u("v-if",!0),F.value[z.value]&&F.value[z.value].length?u("v-if",!0):(t(),l(C,{key:1,option:{tip:"暂无数据"}}))])),_:1})),r(E,{loading:O.value},null,8,["loading"])])),_:1},8,["style"])}}});export{z as default};
