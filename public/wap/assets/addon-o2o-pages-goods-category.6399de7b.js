import{d as e,r as l,p as a,o as t,c as r,w as o,b as s,f as i,u as n,c8 as c,O as u,a6 as p,P as d,y as x,z as m,n as f,a7 as _,a8 as g,a4 as v,D as b,i as h,a5 as y,g as k,h as j,F as w,Q as C,A as E,E as F,a as z,s as V,B as M,C as S}from"./index-2882a2d8.js";import{_ as U}from"./u-popup.2abbe959.js";import{_ as I}from"./u-icon.1104ad2f.js";import{_ as P}from"./u--image.d52c0594.js";import{_ as D}from"./u-loading-page.8280c7ab.js";import{_ as A}from"./tabbar.f422f3d5.js";import{a as B,b as O}from"./goods.5c02a3d2.js";import{M as Q}from"./mescroll-body.e69cb222.js";import{M as R}from"./mescroll-empty.7f392528.js";import{u as K}from"./useMescroll.26ccf5de.js";import{_ as T}from"./_plugin-vue_export-helper.1b428a4d.js";import"./u-overlay.1a317a4e.js";import"./u-transition.4448d2e5.js";import"./u-safe-bottom.f13b01b8.js";import"./u-image.46ebbbc1.js";import"./u-loading-icon.a37f7e61.js";/* empty css                                                                       */import"./u-badge.e8ba7dff.js";import"./u-tabbar.b113c065.js";import"./mescroll-i18n.c2747603.js";/* empty css                                                                       */const $=T(e({__name:"category",setup(e){const{mescrollInit:T,downCallback:$,getMescroll:q}=K(g,_);let G=l([]),H=l(""),J=l(""),L=l(!0),N=l(!1),W=l(!1);const X=e=>{L.value=!0,N.value=!1;let l={page:e.num,limit:e.size,goods_category:J.value,goods_name:H.value};O(l).then((l=>{let a=l.data.data;1==e.num&&(G.value=[]),G.value=G.value.concat(a),L.value=!1,e.endSuccess(a.length),G.value.length||(N.value=!0)})).catch((()=>{L.value=!1,N.value=!0,e.endErr()}))};a((()=>{Z()}));const Y=l([]),Z=()=>{L.value=!0,B().then((e=>{Y.value=e.data,e.data[0].children&&e.data[0].children.length?J.value=e.data[0].children[0].category_id:J.value=e.data[0].category_id,L.value=!1})).catch((()=>{L.value=!1}))},ee=l(0),le=l(0),ae=(e,l)=>{le.value=e,J.value=l.category_id,W.value=!1,q().resetUpScroll()};l(!0);const te=()=>{q().resetUpScroll()};let re=e=>{let l="";return l=e.member_discount&&V()?"member_price":"",l},oe=e=>{let l="0.00";return l=e.member_discount&&V()?e.goods_sku.member_price||"0.00":e.goods_sku.price||"0.00",parseFloat(l).toFixed(2)};return(e,l)=>{const a=v,_=b,g=h,V=y,B=k(j("u-popup"),U),O=k(j("u-icon"),I),K=k(j("u--image"),P),Z=M,se=S,ie=k(j("u-loading-page"),D),ne=k(j("tabbar"),A);return t(),r(g,{class:"min-h-screen category",style:f(e.themeColor())},{default:o((()=>[Y.value.length?(t(),r(g,{key:0,class:"mescroll-box bg-[#f8f8f8]"},{default:o((()=>{var e;return[s(Q,{ref:"mescrollRef",top:(null==(e=Y.value[ee.value])?void 0:e.children)?"187rpx":"105rpx",down:{use:!1},onInit:n(T),onDown:n($),onUp:X},{default:o((()=>{var e;return[i(" 头部搜索 "),s(g,{class:"search-box z-10 bg-[#fff] fixed top-0 left-0 right-0"},{default:o((()=>[s(a,{class:"search-ipt text-sm",type:"text",modelValue:n(H),"onUpdate:modelValue":l[0]||(l[0]=e=>c(H)?H.value=e:H=e),placeholder:n(w)("searchKeywordPlaceholder")},null,8,["modelValue","placeholder"]),s(g,{class:"flex items-center z-2 h-[66rpx] absolute right-[48rpx] top-[18rpx]"},{default:o((()=>[s(_,{class:"nc-iconfont nc-icon-sousuoV6xx text-[30rpx]",onClick:te})])),_:1})])),_:1}),i(" 左侧切换 "),s(g,{class:"tabs-box z-10 fixed left-0 bg-[#fff] bottom-[100rpx] top-[105rpx] pb-ios"},{default:o((()=>[s(V,{"scroll-y":!0,class:"h-[100%]"},{default:o((()=>[(t(!0),u(d,null,p(Y.value,((e,l)=>(t(),r(g,{class:C(["tab-item",{"tab-item-active":l==ee.value}]),key:e.site_id,onClick:a=>((e,l)=>{ee.value=e,l.children&&l.children.length?ae(0,l.children[0]):(J.value=l.category_id,q().resetUpScroll())})(l,e)},{default:o((()=>[s(g,{class:"text-box"},{default:o((()=>[x(m(e.category_name),1)])),_:2},1024)])),_:2},1032,["class","onClick"])))),128))])),_:1})])),_:1}),i(" 二级菜单点击 "),(null==(e=Y.value[ee.value])?void 0:e.children)?(t(),r(g,{key:0,class:"sort-tabs flex items-center h-[92rpx] px-[24rpx] py-[20rpx] bg-[#fff] fixed left-[182rpx] right-0 top-[105rpx] box-border z-10"},{default:o((()=>[n(W)?(t(),u(d,{key:1},[s(g,{class:"flex-1 h-[48rpx] text-[22rpx] text-[#E2E2E2] px-[24rpx] leading-[48rpx]"},{default:o((()=>[x(m(n(w)("allCategory")),1)])),_:1}),s(_,{class:"nc-iconfont nc-icon-shangV6xx-1 transform text-[32rpx] rotate-180",onClick:l[2]||(l[2]=e=>c(W)?W.value=!1:W=!1)})],64)):(t(),u(d,{key:0},[s(V,{"scroll-x":!0,"scroll-with-animation":"","scroll-into-view":"id"+(le.value?le.value-1:0),class:"flex-1 box-border px-[24rpx] bg-white"},{default:o((()=>[s(g,{class:"h-[55rpx] items-center flex"},{default:o((()=>{var e;return[(t(!0),u(d,null,p(null==(e=Y.value[ee.value])?void 0:e.children,((e,l)=>(t(),r(_,{class:C(["flex-shrink-0 px-[24rpx] h-[48rpx] text-[22rpx] leading-[48rpx] border-[2rpx] border-[#E2E2E2] border-solid rounded-[24rpx] border-box mr-[20rpx]",{"sub-tab-active":l===le.value}]),key:Y.value[ee.value].category_id,id:"id"+l,onClick:a=>ae(l,e)},{default:o((()=>[x(m(e.category_name),1)])),_:2},1032,["class","id","onClick"])))),128))]})),_:1})])),_:1},8,["scroll-into-view"]),s(_,{class:"nc-iconfont nc-icon-shangV6xx-1 text-[32rpx]",onClick:l[1]||(l[1]=e=>c(W)?W.value=!0:W=!0)})],64))])),_:1})):i("v-if",!0),s(g,{class:"labelPopup"},{default:o((()=>[s(B,{show:n(W),mode:"top",onClose:l[3]||(l[3]=e=>c(W)?W.value=!1:W=!1),duration:"80"},{default:o((()=>[s(g,{class:"flex flex-wrap py-[24rpx]"},{default:o((()=>{var e;return[(t(!0),u(d,null,p(null==(e=Y.value[ee.value])?void 0:e.children,((e,l)=>(t(),r(_,{class:C(["flex-shrink-0 w-[160rpx] ml-[22rpx] mb-[24rpx] text-center h-[48rpx] text-[22rpx] leading-[48rpx] border-solid rounded-[24rpx] border-[2rpx] box-border border-[#E2E2E2]",{"sub-tab-active":l===le.value}]),key:Y.value[ee.value].category_id,onClick:a=>ae(l,e)},{default:o((()=>[x(m(e.category_name),1)])),_:2},1032,["class","onClick"])))),128))]})),_:1})])),_:1},8,["show"])])),_:1}),s(g,{class:"pl-[182rpx] pt-[20rpx]",style:{width:"calc(100% - 182rpx)"}},{default:o((()=>[(t(!0),u(d,null,p(n(G),((e,l)=>(t(),r(g,{class:C(["bg-white flex px-[20rpx] py-[20rpx] mx-[16rpx] border-0 border-solid border-[#F0F0F0] rounded-[12rpx] box-border",{"mt-[16rpx]":l}]),key:e.goods_id,onClick:E((l=>{z({url:"/addon/o2o/pages/goods/detail",param:{sku_id:e.goods_sku.sku_id}})}),["stop"])},{default:o((()=>[s(K,{width:"200rpx",height:"200rpx",radius:"10rpx",src:n(F)(e.cover_thumb_small),mode:"aspectFill"},{error:o((()=>[s(O,{name:"photo",color:"#999",size:"80"})])),_:2},1032,["src"]),s(g,{class:"flex flex-col flex-1 justify-between ml-[14rpx]"},{default:o((()=>[s(g,{class:"w-[278rpx] h-[80rpx] leading-[40rpx] multi-hidden text-[#303133] text-[30rpx]"},{default:o((()=>[x(m(e.goods_name),1)])),_:2},1024),s(g,{class:"flex items-center mt-2 text-[#F55246] text-xs"},{default:o((()=>[s(g,{class:"text-[var(--price-text-color)]"},{default:o((()=>[s(_,{class:"text-[28rpx] price-font"},{default:o((()=>[x("￥")])),_:1}),s(_,{class:"text-[28rpx] price-font"},{default:o((()=>[x(m(n(oe)(e)),1)])),_:2},1024),"member_price"==n(re)(e)?(t(),r(Z,{key:0,class:"h-[24rpx] ml-[10rpx] w-[60rpx]",src:n(F)("addon/o2o/VIP.png"),mode:"heightFix"},null,8,["src"])):i("v-if",!0)])),_:2},1024)])),_:2},1024),s(g,{class:"flex items-center mt-auto justify-between"},{default:o((()=>[s(_,{class:"text-[22rpx] text-[#888]"},{default:o((()=>[x(m(n(w)("soldOut"))+" "+m(e.sale_num),1)])),_:2},1024),s(se,{class:"text-[#fff] bg-[var(--primary-color)] self-end rounded-3xl text-[26rpx] min-w-[110rpx] h-[44rpx] leading-[44rpx] mx-0 mt-auto"},{default:o((()=>[x(m(n(w)("reserveBtn")),1)])),_:1})])),_:2},1024)])),_:2},1024)])),_:2},1032,["class","onClick"])))),128)),n(G).length||n(L)||!n(N)?i("v-if",!0):(t(),r(R,{key:0,option:{icon:n(F)("static/resource/images/empty.png"),tip:n(w)("nothingMore")}},null,8,["option"]))])),_:1})]})),_:1},8,["top","onInit","onDown"])]})),_:1})):i("v-if",!0),Y.value.length||n(L)?i("v-if",!0):(t(),r(g,{key:1,class:"flex justify-center w-[100%]"},{default:o((()=>[s(R,{option:{icon:n(F)("static/resource/images/empty.png"),tip:n(w)("nothingMore")}},null,8,["option"])])),_:1})),s(ie,{"bg-color":"rgb(248,248,248)",loading:n(L),"loading-text":"加载中...",fontSize:"14",color:"#333"},null,8,["loading"]),s(ne)])),_:1},8,["style"])}}}),[["__scopeId","data-v-8fe4aa7a"]]);export{$ as default};