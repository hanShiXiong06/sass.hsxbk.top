import{d as e,r as l,p as a,N as s,F as t,o,c as r,w as c,b as n,u as p,c5 as i,Q as u,y as x,z as d,O as m,a6 as f,P as _,f as g,n as b,a7 as v,a8 as h,a4 as y,D as k,i as w,g as j,h as C,E as F,a as V,s as I,B as M}from"./index-9317da28.js";import{_ as z}from"./u-popup.1f2ebcae.js";import{_ as P}from"./u-icon.5e775659.js";import{_ as U}from"./u--image.5461b7b7.js";import{_ as N}from"./tabbar.31005363.js";import{a as D,b as O}from"./goods.ad1c2fa3.js";import{M as S}from"./mescroll-body.c2f6fcce.js";import{M as E}from"./mescroll-empty.82e9c349.js";import{u as Q}from"./useMescroll.26ccf5de.js";import{_ as T}from"./_plugin-vue_export-helper.1b428a4d.js";import"./u-transition.65be38eb.js";import"./u-safe-bottom.3546c5bb.js";import"./u-image.74ac23f6.js";import"./u-badge.4fd7810d.js";import"./u-tabbar.c8394bc9.js";import"./mescroll-i18n.f3c5a2b0.js";const A=T(e({__name:"list",setup(e){const{mescrollInit:T,downCallback:A,getMescroll:B}=Q(h,v);let R=l([]),q=l([]),G=l(""),H=l(""),J=l(null),K=l(!1),L=l(!1),W=l(""),X=l("asc"),Y=l("asc"),Z=l("all"),$=l(!0);a((async e=>{H.value=e.curr_goods_category||"",W.value=e.goods_name||"",G.value=e.coupon_id||"",await D().then((e=>{R.value.push({category_name:"全部",category_id:""}),R.value=R.value.concat(e.data)}))}));const ee=e=>{K.value=!1;let l={goods_category:H.value,page:e.num,limit:e.size,goods_name:W.value,coupon_id:G.value,order:"all"===Z.value?"":Z.value,sort:"price"==Z.value?X.value:Y.value};O(l).then((l=>{let a=l.data.data;1===Number(e.num)&&(q.value=[]),q.value=q.value.concat(a),e.endSuccess(a.length),K.value=!0})).catch((()=>{K.value=!0,e.endErr()}))},le=e=>{e==Z.value&&"price"==e&&(Y.value="asc",X.value="asc"==X.value?"desc":"asc"),e==Z.value&&"sale_num"==e&&(X.value="asc",Y.value="asc"==Y.value?"desc":"asc"),Z.value=e,"label"==e?(Y.value="asc",X.value="asc",L.value=!0):(L.value=!1,q.value=[],B().resetUpScroll())},ae=()=>{$.value=!$.value},se=e=>{V({url:"/addon/o2o/pages/goods/detail",param:{goods_id:e},mode:"navigateTo"})};s((()=>{setTimeout((()=>{B().optUp.textNoMore=t("end")}),500)}));let te=e=>{let l="";return l=e.member_discount&&I()?"member_price":"",l},oe=e=>{let l="0.00";return l=e.member_discount&&I()?e.goods_sku.member_price||"0.00":e.goods_sku.price||"0.00",parseFloat(l).toFixed(2)};return(e,l)=>{const a=y,s=k,v=w,h=j(C("u-popup"),z),V=j(C("u-icon"),P),I=j(C("u--image"),U),D=M,O=j(C("tabbar"),N);return o(),r(v,{class:"bg-gray-100 min-h-[100vh]",style:b(e.themeColor())},{default:c((()=>[n(v,{class:"fixed left-0 right-0 top-0 product-warp bg-[#fff] px-[24rpx]"},{default:c((()=>[n(v,{class:"flex items-center h-[106rpx] box-border py-[24rpx]"},{default:c((()=>[n(v,{class:"bg-[#F5F5F5] flex items-center justify-between h-[66rpx] rounded-[33rpx] flex-1 pl-[20rpx] mr-[40rpx]"},{default:c((()=>[n(a,{class:"uni-input text-[24rpx] flex-1",maxlength:"50",modelValue:p(W),"onUpdate:modelValue":l[0]||(l[0]=e=>i(W)?W.value=e:W=e),onConfirm:l[1]||(l[1]=e=>le("all")),placeholder:p(t)("searchPlaceholder")},null,8,["modelValue","placeholder"]),n(s,{class:"nc-iconfont nc-icon-sousuoV6xx text-[30rpx] mr-[18rpx]",onClick:l[2]||(l[2]=e=>le("all"))})])),_:1}),n(s,{class:u(["nc-iconfont text-[44rpx]",p($)?"nc-icon-yingyongzhongxinV6xx":"nc-icon-yingyongliebiaoV6xx"]),onClick:ae},null,8,["class"])])),_:1}),n(v,{class:"pb-3 pt-1 flex items-center justify-between"},{default:c((()=>[n(s,{class:u(["text-sm",{"text-color":"all"==p(Z)}]),onClick:l[3]||(l[3]=e=>le("all"))},{default:c((()=>[x(d(p(t)("synthesis")),1)])),_:1},8,["class"]),n(v,{class:u(["flex items-center",[{"text-color":"sale_num"==p(Z)}]]),onClick:l[4]||(l[4]=e=>le("sale_num"))},{default:c((()=>[n(s,{class:"text-sm mr-[4rpx]"},{default:c((()=>[x(d(p(t)("sales")),1)])),_:1}),"asc"==p(Y)?(o(),r(s,{key:0,class:"text-[26rpx] nc-iconfont nc-icon-shangV6xx-1 font-bold"})):(o(),r(s,{key:1,class:"text-[26rpx] nc-iconfont nc-icon-xiaV6xx"}))])),_:1},8,["class"]),n(v,{class:u(["flex items-center",[{"text-color":"price"==p(Z)}]]),onClick:l[5]||(l[5]=e=>le("price"))},{default:c((()=>[n(s,{class:"text-sm mr-[4rpx]"},{default:c((()=>[x(d(p(t)("price")),1)])),_:1}),"asc"==p(X)?(o(),r(s,{key:0,class:"text-[26rpx] nc-iconfont nc-icon-shangV6xx-1 font-bold"})):(o(),r(s,{key:1,class:"text-[26rpx] nc-iconfont nc-icon-xiaV6xx"}))])),_:1},8,["class"]),n(v,{class:u(["flex items-center",[{"text-color":"label"==p(Z)}]]),onClick:l[6]||(l[6]=e=>le("label"))},{default:c((()=>[n(s,{class:"text-sm mr-[2rpx]"},{default:c((()=>[x(d(p(t)("screen")),1)])),_:1}),n(s,{class:"iconfont icon-Vector-102"})])),_:1},8,["class"])])),_:1})])),_:1}),n(h,{show:p(L),mode:"top",onClose:l[7]||(l[7]=e=>i(L)?L.value=!1:L=!1)},{default:c((()=>[n(v,{class:"text-sm font-bold px-[30rpx] mt-3"},{default:c((()=>[x(d(p(t)("allCategory")),1)])),_:1}),n(v,{class:"flex flex-wrap pl-[30rpx] pt-[30rpx]"},{default:c((()=>[(o(!0),m(_,null,f(p(R),((e,l)=>(o(),r(s,{onClick:l=>{return a=e.category_id,H.value=a,q.value=[],B().resetUpScroll(),void(L.value=!1);var a},key:e.category_id,class:u(["px-[26rpx] border-[2rpx] border-solid border-transparent h-[60rpx] mr-[30rpx] mb-[30rpx] flex items-center justify-center bg-[#F4F4F4] rounded-[8rpx] text-xs",{"label-select":p(H)==e.category_id}])},{default:c((()=>[x(d(e.category_name),1)])),_:2},1032,["onClick","class"])))),128))])),_:1})])),_:1},8,["show"]),n(S,{ref_key:"mescrollRef",ref:J,top:"196rpx",bottom:"50px",onInit:p(T),onDown:p(A),onUp:ee},{default:c((()=>[n(v,{class:u(["p-[24rpx] !pb-0",p($)?"":"flex justify-between flex-wrap"])},{default:c((()=>[(o(!0),m(_,null,f(p(q),((e,l)=>(o(),m(_,null,[p($)?(o(),r(v,{key:0,class:u(["bg-white flex p-[20rpx] rounded-[16rpx]",{"mt-[20rpx]":l}]),onClick:l=>se(e.goods_id)},{default:c((()=>[n(I,{class:"rounded-[10rpx] overflow-hidden",width:"200rpx",height:"200rpx",src:p(F)(e.cover_thumb_small?e.cover_thumb_small:""),mode:"aspectFill"},{error:c((()=>[n(V,{name:"photo",color:"#999",size:"50"})])),_:2},1032,["src"]),n(v,{class:"flex-1 flex flex-col ml-[20rpx]"},{default:c((()=>[n(v,{class:"text-[26rpx] font-500 h-[80rpx] leading-[40rpx] multi-hidden mb-[10rpx]"},{default:c((()=>[x(d(e.goods_name),1)])),_:2},1024),n(v,{class:"mt-auto flex justify-between items-end"},{default:c((()=>[n(v,{class:"flex flex-col"},{default:c((()=>[n(s,{class:"text-[28rpx] text-[var(--price-text-color)] price-font"},{default:c((()=>[x(" ￥"+d(p(oe)(e))+" ",1),"member_price"==p(te)(e)?(o(),r(D,{key:0,class:"h-[24rpx] ml-[4rpx] w-[60rpx]",src:p(F)("addon/o2o/VIP.png"),mode:"heightFix"},null,8,["src"])):g("v-if",!0)])),_:2},1024)])),_:2},1024),n(s,{class:"text--[24rpx] text-[#666]"},{default:c((()=>[x("已售"+d(e.sale_num),1)])),_:2},1024)])),_:2},1024)])),_:2},1024)])),_:2},1032,["class","onClick"])):(o(),r(v,{key:1,class:"w-[342rpx] bg-[#fff] box-border rounded-[10rpx] overflow-hidden mt-[20rpx]",onClick:l=>se(e.goods_id)},{default:c((()=>[n(I,{width:"342rpx",height:"342rpx",src:p(F)(e.cover_thumb_small?e.cover_thumb_small:""),mode:"aspectFill"},{error:c((()=>[n(V,{name:"photo",color:"#999",size:"50"})])),_:2},1032,["src"]),n(v,{class:"pl-[22rpx] pr-[30rpx] mt-[18rpx] h-[80rpx] leading-[40rpx] text-[26rpx] font-500 multi-hidden"},{default:c((()=>[x(d(e.goods_name),1)])),_:2},1024),n(v,{class:"pl-[22rpx] pb-[20rpx] pr-[30rpx] flex justify-between items-end mt-[12rpx]"},{default:c((()=>[n(v,{class:"flex justify-between items-end"},{default:c((()=>[n(s,{class:"text-[28rpx] text-[var(--price-text-color)] price-font"},{default:c((()=>[x(" ￥"+d(p(oe)(e))+" ",1),"member_price"==p(te)(e)?(o(),r(D,{key:0,class:"h-[24rpx] ml-[4rpx] w-[60rpx]",src:p(F)("addon/o2o/VIP.png"),mode:"heightFix"},null,8,["src"])):g("v-if",!0)])),_:2},1024)])),_:2},1024),n(s,{class:"text--[24rpx] text-[#666] leading-[31rpx]"},{default:c((()=>[x(d(p(t)("soldOut"))+d(e.sale_num),1)])),_:2},1024)])),_:2},1024)])),_:2},1032,["onClick"]))],64)))),256))])),_:1},8,["class"]),!p(q).length&&p(K)?(o(),r(E,{key:0,option:{icon:p(F)("static/resource/images/empty.png"),tip:p(t)("nothingMore")}},null,8,["option"])):g("v-if",!0)])),_:1},8,["onInit","onDown"]),n(O)])),_:1},8,["style"])}}}),[["__scopeId","data-v-4b80c3b2"]]);export{A as default};