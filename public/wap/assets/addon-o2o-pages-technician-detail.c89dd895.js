import{d as e,r as t,j as a,o as r,c as s,w as l,u as o,b as d,x as p,y as x,E as c,F as n,G as i,f as u,H as f,n as m,bB as _,g,h as b,i as h,C as v,V as y,t as k,a as j,X as w,N as C}from"./index-e6ce9fbf.js";import{_ as F}from"./u-avatar.d1f888c3.js";import{_ as I,a as N}from"./u-row.70d7f72b.js";import{_ as S}from"./u-icon.c5d9cd81.js";import{_ as V}from"./u--image.2a363e1d.js";import{_ as z}from"./u-loading-page.76c2d95f.js";import{a as A}from"./technician.da0e3750.js";import{_ as B}from"./_plugin-vue_export-helper.1b428a4d.js";import"./u-text.9aefeac5.js";import"./u-image.c9386d77.js";import"./u-transition.6919b33f.js";import"./u-loading-icon.39fd4711.js";const E=B(e({__name:"detail",setup(e){let B=t(!0),E=t({}),G=0;a((e=>{G=e.id||0,H()}));const H=()=>{B.value=!0,A(G).then((e=>{E.value=e.data,B.value=!1})).catch((()=>{B.value=!1}))};let O=e=>{let t="";return t=e.member_discount&&w()?"member_price":"",t},P=e=>{let t="0.00";return t=e.member_discount&&w()?e.goodsSku.member_price:e.goodsSku.price,parseFloat(t).toFixed(2)};return(e,t)=>{const a=g(b("u-avatar"),F),w=h,A=v,G=g(b("u-col"),I),H=g(b("u-row"),N),X=g(b("u-icon"),S),q=g(b("u--image"),V),D=C,J=g(b("u-loading-page"),z);return r(),s(w,{style:m(e.themeColor())},{default:l((()=>[Object.keys(o(E)).length?(r(),s(w,{key:0,class:"bg-[#f8f8f8] min-h-screen overflow-hidden pb-3 box-border"},{default:l((()=>[d(w,{class:"bg-linear h-[480rpx] pt-3"},{default:l((()=>[d(w,{class:"bg-[#fff] rounded-lg mx-3 p-3 flex items-center"},{default:l((()=>[d(w,{class:"w-[80rpx] h-[80rpx]"},{default:l((()=>[o(E).headimg?(r(),s(a,{key:0,src:o(y)(o(E).headimg),shape:"circle",class:"w-[80rpx] h-[80rpx]"},null,8,["src"])):(r(),s(a,{key:1,src:"",shape:"circle",class:"w-[80rpx] h-[80rpx]"}))])),_:1}),d(w,{class:"flex-1 ml-2"},{default:l((()=>[d(w,null,{default:l((()=>[d(A,null,{default:l((()=>[p(x(o(E).name),1)])),_:1})])),_:1}),""!=o(E).label?(r(),s(w,{key:0,class:"mt-[2rpx] flex flex-wrap items-center"},{default:l((()=>[(r(!0),c(i,null,n(o(E).label.split(","),((e,t)=>(r(),s(A,{class:"text-[22rpx] px-[10rpx] py-[6rpx] border-solid border-[2rpx] border-[var(--primary-color)] text-[var(--primary-color)] rounded-full mb-[4rpx] mr-[10rpx]",key:t},{default:l((()=>[p(x(e),1)])),_:2},1024)))),128))])),_:1})):u("v-if",!0)])),_:1}),d(w,{class:"nc-iconfont nc-icon-dianhuaV6xx text-[36rpx]",onClick:t[0]||(t[0]=e=>{return t=o(E).mobile,void _({phoneNumber:t});var t})})])),_:1}),d(w,{class:"mt-[30rpx] bg-[#fff] mx-3 p-3 rounded-lg"},{default:l((()=>[d(H,{justify:"space-between"},{default:l((()=>[d(G,{span:"3"},{default:l((()=>[d(w,{class:"text-[28rpx] text-center"},{default:l((()=>[p(x(o(E).order_num),1)])),_:1}),d(w,{class:"text-[24rpx] text-center text-[#999] mt-[10rpx]"},{default:l((()=>[p(x(o(k)("orderNum")),1)])),_:1})])),_:1}),d(G,{span:"3"},{default:l((()=>[d(w,{class:"text-[28rpx] text-center"},{default:l((()=>[p(x(o(E).working_age)+x(o(k)("year")),1)])),_:1}),d(w,{class:"text-[24rpx] text-center text-[#999] mt-[10rpx]"},{default:l((()=>[p(x(o(k)("workingAge")),1)])),_:1})])),_:1}),d(G,{span:"3"},{default:l((()=>[d(w,{class:"text-[28rpx] text-center"},{default:l((()=>[p(x(o(E).age)+x(o(k)("annum")),1)])),_:1}),d(w,{class:"text-[24rpx] text-center text-[#999] mt-[10rpx]"},{default:l((()=>[p(x(o(k)("age")),1)])),_:1})])),_:1}),d(G,{span:"3"},{default:l((()=>[d(w,{class:"text-[28rpx] text-center"},{default:l((()=>[p(x(o(E).position_name?o(E).position_name:"无"),1)])),_:1}),d(w,{class:"text-[24rpx] text-center text-[#999] mt-[10rpx]"},{default:l((()=>[p(x(o(k)("position")),1)])),_:1})])),_:1})])),_:1})])),_:1})])),_:1}),d(w,{class:"-mt-[185rpx]"},{default:l((()=>[o(E).desc?(r(),s(w,{key:0,class:"mx-3 py-4 px-3 bg-[#fff] rounded-md box-border"},{default:l((()=>[d(w,{class:"text-[28rpx]"},{default:l((()=>[p(x(o(k)("basicInfo")),1)])),_:1}),d(w,{class:"text-[24rpx] mt-[20rpx] leading-[32rpx]"},{default:l((()=>[p(x(o(E).desc),1)])),_:1})])),_:1})):u("v-if",!0)])),_:1}),d(w,{class:f(["mx-3 py-4 px-3 bg-[#fff] rounded-md box-border",{"mt-[30rpx]":""!=o(E).desc}])},{default:l((()=>[d(w,{class:"text-[28rpx] mb-[20rpx]"},{default:l((()=>[p(x(o(k)("serviceItem")),1)])),_:1}),(r(!0),c(i,null,n(o(E).goods,((e,t)=>(r(),s(w,{key:t,class:f(["flex",{"mt-[20rpx]":t}])},{default:l((()=>[d(w,{class:"w-[160rpx] h-[160rpx]",onClick:t=>{return a=e.goods_info.goods_id,void j({url:"/addon/o2o/pages/goods/detail",param:{goods_id:a}});var a}},{default:l((()=>[d(q,{class:"rounded-[10rpx] overflow-hidden",width:"160rpx",height:"160rpx",src:o(y)(e.goods_info.cover_thumb_small?e.goods_info.cover_thumb_small:""),model:"aspectFill"},{error:l((()=>[d(X,{name:"photo",color:"#999",size:"50"})])),_:2},1032,["src"])])),_:2},1032,["onClick"]),d(w,{class:"flex-1 ml-[20rpx] flex flex-col justify-between"},{default:l((()=>[d(w,null,{default:l((()=>[p(x(e.goods_info.goods_name),1)])),_:2},1024),d(A,{class:"text-[var(--primary-color)] text-[28rpx] price-font"},{default:l((()=>[p(" ￥"+x(o(P)(e.goods_info))+" ",1),"member_price"==o(O)(e.goods_info)?(r(),s(D,{key:0,class:"h-[24rpx] ml-[4rpx] w-[60rpx]",src:o(y)("addon/o2o/VIP.png"),mode:"heightFix"},null,8,["src"])):u("v-if",!0)])),_:2},1024)])),_:2},1024)])),_:2},1032,["class"])))),128))])),_:1},8,["class"])])),_:1})):u("v-if",!0),d(J,{"bg-color":"rgb(248,248,248)",loading:o(B),fontSize:"16",color:"#333"},null,8,["loading"])])),_:1},8,["style"])}}}),[["__scopeId","data-v-4993cfdd"]]);export{E as default};
