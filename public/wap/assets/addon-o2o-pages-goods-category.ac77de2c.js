import{d as e,r as l,p as a,o as t,c as r,w as o,b as s,f as i,u,P as c,a7 as n,Q as p,y as d,z as x,n as m,a8 as f,a9 as v,a5 as _,D as g,i as h,a6 as b,g as y,h as k,F as j,R as w,A as C,E,a as F,s as z,B as M,C as V}from"./index-7bf68536.js";import{_ as I}from"./u-popup.be4bfacd.js";import{_ as U}from"./u-icon.0c1c54c7.js";import{_ as P}from"./u--image.b3bf1d5c.js";import{_ as S}from"./loading-page.vue_vue_type_script_setup_true_lang.124ad65f.js";import{_ as D}from"./tabbar.e049672c.js";import{a as A,b as B}from"./goods.6e957cea.js";import{M as R}from"./mescroll-body.b6d57b41.js";import{M as H}from"./mescroll-empty.fcefb74e.js";import{u as J}from"./useMescroll.26ccf5de.js";import{_ as K}from"./_plugin-vue_export-helper.1b428a4d.js";import"./u-transition.cdf87992.js";import"./u-safe-bottom.908eeae4.js";import"./u-image.e46f68ef.js";import"./u-loading-page.566c330a.js";import"./u-loading-icon.b37701e7.js";import"./u-badge.d8d91719.js";import"./u-tabbar.d98653fa.js";import"./cloneDeep.77735539.js";import"./mescroll-i18n.14e7fe02.js";/* empty css                                                                       */const N=K(e({__name:"category",setup(e){const{mescrollInit:K,downCallback:N,getMescroll:O}=J(v,f),Q=l([]),q=l(""),G=l(""),L=l(!0),T=l(!1),W=l(!1),X=e=>{L.value=!0,T.value=!1;let l={page:e.num,limit:e.size,goods_category:G.value,goods_name:q.value};B(l).then((l=>{let a=l.data.data;1==e.num&&(Q.value=[]),Q.value=Q.value.concat(a),L.value=!1,e.endSuccess(a.length),Q.value.length||(T.value=!0)})).catch((()=>{L.value=!1,T.value=!0,e.endErr()}))};a((()=>{Z()}));const Y=l([]),Z=()=>{L.value=!0,A().then((e=>{Y.value=e.data,e.data[0].children&&e.data[0].children.length?G.value=e.data[0].children[0].category_id:G.value=e.data[0].category_id,L.value=!1})).catch((()=>{L.value=!1}))},$=l(0),ee=l(0),le=(e,l)=>{ee.value=e,G.value=l.category_id,W.value=!1,O().resetUpScroll()};l(!0);const ae=()=>{O().resetUpScroll()};let te=e=>{let l="";return l=e.member_discount&&z()?"member_price":"",l},re=e=>{let l="0.00";return l=e.member_discount&&z()?e.goods_sku.member_price||"0.00":e.goods_sku.price||"0.00",parseFloat(l).toFixed(2)};return(e,l)=>{const a=_,f=g,v=h,z=b,A=y(k("u-popup"),I),B=y(k("u-icon"),U),J=y(k("u--image"),P),N=M,Z=V,oe=y(k("loading-page"),S),se=y(k("tabbar"),D);return t(),r(v,{class:"min-h-screen category",style:m(e.themeColor())},{default:o((()=>[Y.value.length?(t(),r(v,{key:0,class:"mescroll-box bg-[#f8f8f8]"},{default:o((()=>{var e;return[s(R,{ref:"mescrollRef",top:(null==(e=Y.value[$.value])?void 0:e.children)?"187rpx":"105rpx",down:{use:!1},onInit:u(K),onUp:X},{default:o((()=>{var e;return[i(" 头部搜索 "),s(v,{class:"search-box z-10 bg-[#fff] fixed top-0 left-0 right-0"},{default:o((()=>[s(a,{class:"search-ipt text-sm",type:"text",modelValue:q.value,"onUpdate:modelValue":l[0]||(l[0]=e=>q.value=e),placeholder:u(j)("searchKeywordPlaceholder")},null,8,["modelValue","placeholder"]),s(v,{class:"flex items-center z-2 h-[66rpx] absolute right-[48rpx] top-[18rpx]"},{default:o((()=>[s(f,{class:"nc-iconfont nc-icon-sousuoV6xx text-[30rpx]",onClick:ae})])),_:1})])),_:1}),i(" 左侧切换 "),s(v,{class:"tabs-box z-10 fixed left-0 bg-[#fff] bottom-[100rpx] top-[105rpx] pb-ios"},{default:o((()=>[s(z,{"scroll-y":!0,class:"h-[100%]"},{default:o((()=>[(t(!0),c(p,null,n(Y.value,((e,l)=>(t(),r(v,{class:w(["tab-item",{"tab-item-active":l==$.value}]),key:l,onClick:a=>((e,l)=>{$.value=e,l.children&&l.children.length?le(0,l.children[0]):(G.value=l.category_id,O().resetUpScroll())})(l,e)},{default:o((()=>[s(v,{class:"text-box"},{default:o((()=>[d(x(e.category_name),1)])),_:2},1024)])),_:2},1032,["class","onClick"])))),128))])),_:1})])),_:1}),i(" 二级菜单点击 "),(null==(e=Y.value[$.value])?void 0:e.children)?(t(),r(v,{key:0,class:"sort-tabs flex items-center h-[92rpx] px-[24rpx] py-[20rpx] bg-[#fff] fixed left-[182rpx] right-0 top-[105rpx] box-border z-10"},{default:o((()=>[W.value?(t(),c(p,{key:1},[s(v,{class:"flex-1 h-[48rpx] text-[22rpx] text-[#E2E2E2] px-[24rpx] leading-[48rpx]"},{default:o((()=>[d(x(u(j)("allCategory")),1)])),_:1}),s(f,{class:"nc-iconfont nc-icon-shangV6xx-1 transform text-[32rpx] rotate-180",onClick:l[2]||(l[2]=e=>W.value=!1)})],64)):(t(),c(p,{key:0},[s(z,{"scroll-x":!0,"scroll-with-animation":"","scroll-into-view":"id"+(ee.value?ee.value-1:0),class:"flex-1 box-border px-[24rpx] bg-white"},{default:o((()=>[s(v,{class:"h-[55rpx] items-center flex"},{default:o((()=>{var e;return[(t(!0),c(p,null,n(null==(e=Y.value[$.value])?void 0:e.children,((e,l)=>(t(),r(f,{class:w(["flex-shrink-0 px-[24rpx] h-[48rpx] text-[22rpx] leading-[48rpx] border-[2rpx] border-[#E2E2E2] border-solid rounded-[24rpx] border-box mr-[20rpx]",{"sub-tab-active":l===ee.value}]),key:Y.value[$.value].category_id,id:"id"+l,onClick:a=>le(l,e)},{default:o((()=>[d(x(e.category_name),1)])),_:2},1032,["class","id","onClick"])))),128))]})),_:1})])),_:1},8,["scroll-into-view"]),s(f,{class:"nc-iconfont nc-icon-shangV6xx-1 text-[32rpx]",onClick:l[1]||(l[1]=e=>W.value=!0)})],64))])),_:1})):i("v-if",!0),s(v,{class:"labelPopup"},{default:o((()=>[s(A,{show:W.value,mode:"top",onClose:l[3]||(l[3]=e=>W.value=!1),duration:"80"},{default:o((()=>[s(v,{class:"flex flex-wrap py-[24rpx]"},{default:o((()=>{var e;return[(t(!0),c(p,null,n(null==(e=Y.value[$.value])?void 0:e.children,((e,l)=>(t(),r(f,{class:w(["flex-shrink-0 w-[160rpx] ml-[22rpx] mb-[24rpx] text-center h-[48rpx] text-[22rpx] leading-[48rpx] border-solid rounded-[24rpx] border-[2rpx] box-border border-[#E2E2E2]",{"sub-tab-active":l===ee.value}]),key:Y.value[$.value].category_id,onClick:a=>le(l,e)},{default:o((()=>[d(x(e.category_name),1)])),_:2},1032,["class","onClick"])))),128))]})),_:1})])),_:1},8,["show"])])),_:1}),s(v,{class:"pl-[182rpx] pt-[20rpx]",style:{width:"calc(100% - 182rpx)"}},{default:o((()=>[(t(!0),c(p,null,n(Q.value,((e,l)=>(t(),r(v,{class:w(["bg-white flex px-[20rpx] py-[20rpx] mx-[16rpx] border-0 border-solid border-[#F0F0F0] rounded-[12rpx] box-border",{"mt-[16rpx]":l}]),key:e.goods_id,onClick:C((l=>{F({url:"/addon/o2o/pages/goods/detail",param:{sku_id:e.goods_sku.sku_id}})}),["stop"])},{default:o((()=>[s(J,{width:"200rpx",height:"200rpx",radius:"10rpx",src:u(E)(e.cover_thumb_small),mode:"aspectFill"},{error:o((()=>[s(B,{name:"photo",color:"#999",size:"80"})])),_:2},1032,["src"]),s(v,{class:"flex flex-col flex-1 justify-between ml-[14rpx]"},{default:o((()=>[s(v,{class:"w-[278rpx] h-[80rpx] leading-[40rpx] multi-hidden text-[#303133] text-[30rpx]"},{default:o((()=>[d(x(e.goods_name),1)])),_:2},1024),s(v,{class:"flex items-center mt-2 text-[#F55246] text-xs"},{default:o((()=>[s(v,{class:"text-[var(--price-text-color)]"},{default:o((()=>[s(f,{class:"text-[28rpx] price-font"},{default:o((()=>[d("￥")])),_:1}),s(f,{class:"text-[28rpx] price-font"},{default:o((()=>[d(x(u(re)(e)),1)])),_:2},1024),"member_price"==u(te)(e)?(t(),r(N,{key:0,class:"h-[24rpx] ml-[10rpx] w-[60rpx]",src:u(E)("addon/o2o/VIP.png"),mode:"heightFix"},null,8,["src"])):i("v-if",!0)])),_:2},1024)])),_:2},1024),s(v,{class:"flex items-center mt-auto justify-between"},{default:o((()=>[s(f,{class:"text-[22rpx] text-[#888]"},{default:o((()=>[d(x(u(j)("soldOut"))+" "+x(e.sale_num),1)])),_:2},1024),s(Z,{class:"text-[#fff] bg-[var(--primary-color)] self-end rounded-3xl text-[26rpx] min-w-[110rpx] h-[44rpx] leading-[44rpx] mx-0 mt-auto"},{default:o((()=>[d(x(u(j)("reserveBtn")),1)])),_:1})])),_:2},1024)])),_:2},1024)])),_:2},1032,["class","onClick"])))),128)),Q.value.length||L.value||!T.value?i("v-if",!0):(t(),r(H,{key:0,option:{icon:u(E)("static/resource/images/empty.png"),tip:u(j)("nothingMore")}},null,8,["option"]))])),_:1})]})),_:1},8,["top","onInit"])]})),_:1})):i("v-if",!0),Y.value.length||L.value?i("v-if",!0):(t(),r(H,{key:1,option:{icon:u(E)("static/resource/images/empty.png"),tip:u(j)("nothingMore")}},null,8,["option"])),s(oe,{loading:L.value},null,8,["loading"]),s(se)])),_:1},8,["style"])}}}),[["__scopeId","data-v-e20fcc8e"]]);export{N as default};
