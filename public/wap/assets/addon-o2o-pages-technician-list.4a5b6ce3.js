import{d as e,r as a,o as t,c as s,w as l,b as r,u as o,aN as n,E as c,F as i,G as p,f as x,n as f,a5 as u,a6 as d,a3 as m,C as _,i as b,g,h,t as y,V as v,x as j,y as k,a as w}from"./index-905183d4.js";import{_ as C}from"./u-avatar.c19cb462.js";import{_ as V}from"./tabbar.f4383367.js";import{M as z}from"./mescroll-body.b8d008ed.js";import{M}from"./mescroll-empty.f9bce990.js";import{u as F}from"./useMescroll.26ccf5de.js";import{g as I}from"./technician.9275e072.js";import{_ as D}from"./_plugin-vue_export-helper.1b428a4d.js";import"./u-icon.86a2aad0.js";import"./u-text.86301043.js";import"./u-badge.82a65592.js";import"./u-tabbar.bedfa48a.js";import"./u-safe-bottom.e94b03c1.js";import"./mescroll-uni-option.0af4878d.js";import"./mescroll-i18n.6025c811.js";/* empty css                                                                       */const E=D(e({__name:"list",setup(e){const{mescrollInit:D,downCallback:E,getMescroll:U}=F(d,u);let B=a([]),S=a(""),A=a(!1);const G=e=>{A.value=!1;let a={page:e.num,limit:e.size,name:S.value};I(a).then((a=>{let t=a.data.data;1==e.num&&(B.value=[]),B.value=B.value.concat(t),e.endSuccess(t.length),A.value=!0})).catch((()=>{A.value=!0,e.endErr()}))},L=()=>{U().resetUpScroll()};return(e,a)=>{const u=m,d=_,F=b,I=g(h("u-avatar"),C),U=g(h("tabbar"),V);return t(),s(F,{class:"bg-[#f8f8f8] min-h-screen overflow-hidden",style:f(e.themeColor())},{default:l((()=>[r(F,{class:"fixed left-0 right-0 top-0 bg-[#fff] px-[24rpx] py-[10rpx] z-10"},{default:l((()=>[r(F,{class:"bg-[#F6F8F8] rounded-[36rpx] flex items-center pr-[20rpx]"},{default:l((()=>[r(u,{class:"h-[70rpx] pl-[20rpx] text-sm flex-1 mr-[20px]",type:"text",clearable:"",modelValue:o(S),"onUpdate:modelValue":a[0]||(a[0]=e=>n(S)?S.value=e:S=e),placeholder:o(y)("searchPlaceholder"),onConfirm:L},null,8,["modelValue","placeholder"]),r(d,{class:"nc-iconfont nc-icon-sousuoV6xx !text-[28rpx] leading-[70px]",onClick:L})])),_:1})])),_:1}),r(z,{ref:"mescrollRef",top:"90rpx",onInit:o(D),onDown:o(E),onUp:G},{default:l((()=>[(t(!0),c(p,null,i(o(B),((e,a)=>(t(),s(F,{key:a,class:"bg-[#fff] mx-3 mt-3 p-3 rounded",onClick:a=>{return t=e.id,void w({url:"/addon/o2o/pages/technician/detail",param:{id:t}});var t}},{default:l((()=>[r(F,{class:"flex"},{default:l((()=>[r(F,{class:"w-[110rpx] h-[110rpx] flex justify-center"},{default:l((()=>[e.headimg_mid?(t(),s(I,{key:0,src:o(v)(e.headimg_mid),shape:"circle",size:"55"},null,8,["src"])):(t(),s(I,{key:1,src:"",size:"55"}))])),_:2},1024),r(F,{class:"flex-1 flex flex-col justify-between ml-[20rpx] pb-[15rpx] border-0 border-solid border-b-[2rpx] border-[#ebeef5]"},{default:l((()=>[r(F,{class:"flex justify-between items-center"},{default:l((()=>[r(d,{class:"text-[32rpx] font-600 leading-[34rpx]"},{default:l((()=>[j(k(e.name),1)])),_:2},1024),r(d,{class:"text-[22rpx]"},{default:l((()=>[j(k(e.working_age)+k(o(y)("year")),1)])),_:2},1024)])),_:2},1024),r(F,{class:"mt-auto text-[26rpx]"},{default:l((()=>[r(F,{class:"flex justify-between items-center"},{default:l((()=>[r(F,{class:"flex items-center"},{default:l((()=>[r(F,{class:"text-[22rpx]"},{default:l((()=>[r(d,{class:"iconfont iconxingxing text-[#fca943] !text-[28rpx]"}),r(d,{class:"ml-[6rpx]"},{default:l((()=>[j("5.0")])),_:1}),r(d,{class:"ml-[15rpx]"},{default:l((()=>[j(k(o(y)("service"))+k(e.order_num)+"单",1)])),_:2},1024)])),_:2},1024)])),_:2},1024),r(d,null,{default:l((()=>[j(k(e.position_name),1)])),_:2},1024)])),_:2},1024)])),_:2},1024)])),_:2},1024)])),_:2},1024),r(F,{class:"flex"},{default:l((()=>[r(F,{class:"min-w-[110rpx] text-center"},{default:l((()=>[r(d,{class:"text-[20rpx] bg-[#333333] text-[#a9a089] px-[10rpx] py-[6rpx] rounded-full mt-[10rpx]"},{default:l((()=>[j(k(1==e.status?o(y)("service"):-1==e.status?o(y)("haveLeft"):o(y)("takeBreak")),1)])),_:2},1024)])),_:2},1024),r(F,{class:"flex flex-1 ml-[20rpx] py-[10rpx] items-center text-[#aaaaaa] leading-[32rpx]"},{default:l((()=>[r(F,{class:"flex items-center"},{default:l((()=>[r(d,{class:"nc-iconfont nc-icon-dianxinxiV6xx text-[32rpx]"}),r(d,{class:"text-[22rpx] ml-[5rpx]"},{default:l((()=>[j("5")])),_:1})])),_:1}),r(F,{class:"flex items-center ml-[10rpx]"},{default:l((()=>[r(d,{class:"nc-iconfont nc-icon-dakaixinxiV6xx text-[30rpx]"}),r(d,{class:"text-[22rpx] ml-[5rpx]"},{default:l((()=>[j(k(o(y)("detail")),1)])),_:1})])),_:1})])),_:1})])),_:2},1024)])),_:2},1032,["onClick"])))),128)),!o(B).length&&o(A)?(t(),s(M,{key:0,option:{icon:o(v)("static/resource/images/empty.png"),tip:o(y)("nothingMore")}},null,8,["option"])):x("v-if",!0)])),_:1},8,["onInit","onDown"]),r(U)])),_:1},8,["style"])}}}),[["__scopeId","data-v-a08384d3"]]);export{E as default};