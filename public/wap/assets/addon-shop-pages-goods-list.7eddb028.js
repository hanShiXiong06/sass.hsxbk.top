import{_ as e}from"./u-input.07f64251.js";import{d as t,r as a,j as l,q as s,t as o,o as r,c,w as p,b as i,u as n,aN as u,H as x,x as d,f,_ as m,E as _,F as v,G as b,b8 as g,n as h,a5 as y,a6 as j,U as k,g as w,h as C,C as F,i as S,y as V,V as U,a as z}from"./index-905183d4.js";import{_ as M}from"./u-button.d3798ecb.js";import{_ as I}from"./u-popup.e3f6594b.js";import{_ as D}from"./u-icon.86a2aad0.js";import{_ as N}from"./u--image.b5d65e0e.js";import{_ as T}from"./tabbar.f4383367.js";import{b as E,c as A}from"./goods.2e1a20de.js";import{M as q}from"./mescroll-body.b8d008ed.js";import{M as B}from"./mescroll-empty.f9bce990.js";import{u as G}from"./useMescroll.26ccf5de.js";import{_ as H}from"./_plugin-vue_export-helper.1b428a4d.js";import"./u-loading-icon.c376267d.js";import"./u-transition.dbaca185.js";import"./u-safe-bottom.e94b03c1.js";import"./u-image.44c969ef.js";import"./u-badge.82a65592.js";import"./u-tabbar.bedfa48a.js";import"./mescroll-uni-option.0af4878d.js";import"./mescroll-i18n.6025c811.js";/* empty css                                                                       */const R=H(t({__name:"list",setup(t){const{mescrollInit:H,downCallback:R,getMescroll:J}=G(j,y),{setShare:K,onShareAppMessage:L,onShareTimeline:O}=k();K(),L(),O();let P=a([]),Q=a([]),W=a(""),X=a(""),Y=a(null),Z=a(!1),$=a(!1),ee=a(""),te=a(""),ae=a(""),le=a("all");a(!1);let se=a({start_price:"",end_price:""}),oe=a(!0);l((async e=>{X.value=e.curr_goods_category||"",ee.value=e.goods_name||"",W.value=e.coupon_id||"",await E().then((e=>{P.value.push({category_name:"全部",category_id:""}),P.value=P.value.concat(e.data)}))}));const re=e=>{Z.value=!1;let t={goods_category:X.value,page:e.num,limit:e.size,keyword:ee.value,coupon_id:W.value,order:"all"===le.value?"":le.value,sort:"price"==le.value?te.value:ae.value,start_price:se.value.start_price,end_price:se.value.end_price};A(t).then((t=>{let a=t.data.data;1===Number(e.num)&&(Q.value=[]),Q.value=Q.value.concat(a),e.endSuccess(a.length),Z.value=!0})).catch((()=>{Z.value=!0,e.endErr()}))},ce=e=>{le.value=e,e==le.value&&"price"==e&&(ae.value="",te.value?te.value="asc"==te.value?"desc":"asc":te.value="asc"),e==le.value&&"sale_num"==e&&(te.value="",ae.value?ae.value="asc"==ae.value?"desc":"asc":ae.value="asc"),"label"==e?(ae.value="asc",te.value="asc",$.value=!0):($.value=!1,Q.value=[],J().resetUpScroll())},pe=()=>{oe.value=!oe.value},ie=e=>{z({url:"/addon/shop/pages/goods/detail",param:{goods_id:e},mode:"navigateTo"})},ne=()=>{ee.value="",X.value="",W.value="",te.value="",ae.value="",se.value.start_price="",se.value.end_price="",$.value=!1,le.value="all",oe.value=!0,Q.value=[],J().resetUpScroll()};return s((()=>{setTimeout((()=>{J().optUp.textNoMore=o("end")}),500)})),(t,a)=>{const l=w(C("u-input"),e),s=F,o=S,y=w(C("u-button"),M),j=w(C("u-popup"),I),k=w(C("u-icon"),D),z=w(C("u--image"),N),E=w(C("tabbar"),T);return r(),c(o,{class:"bg-gray-100 min-h-[100vh]",style:h(t.themeColor())},{default:p((()=>[i(o,{class:"fixed left-0 right-0 top-0 product-warp bg-[#fff] px-[30rpx]"},{default:p((()=>[i(o,{class:"h-[88rpx] box-border py-[14rpx] flex items-center justify-between"},{default:p((()=>[i(o,{class:"flex-1 flex items-center h-[60rpx] bg-[#F6F8F8] rounded-[33rpx] pl-[32rpx] pr-[20rpx] mr-[30rpx]"},{default:p((()=>[i(l,{class:"flex-1",maxlength:"50",modelValue:n(ee),"onUpdate:modelValue":a[0]||(a[0]=e=>u(ee)?ee.value=e:ee=e),onConfirm:a[1]||(a[1]=e=>ce("all")),placeholder:"请搜索您想要的商品",placeholderClass:"text-[#a5a6a6] text-[26rpx]",fontSize:"26rpx",clearable:"",border:"none"},null,8,["modelValue"]),i(s,{class:"iconfont iconxiazai17 text-[30rpx] ml-[18rpx] font-bold !text-[#999]",onClick:a[2]||(a[2]=e=>ce("all"))})])),_:1}),i(o,{class:x(["iconfont text-[44rpx]",n(oe)?"iconshangpinliebiao":"iconliebiaoxingshi"]),onClick:pe},null,8,["class"])])),_:1}),i(o,{class:"flex justify-between tems-center py-[22rpx] px-[20rpx]"},{default:p((()=>[i(o,{class:"flex items-center justify-between text-[24rpx] text-[#666] flex-1"},{default:p((()=>[i(s,{class:x({"text-[#303133] ":"all"==n(le)}),onClick:a[3]||(a[3]=e=>ce("all"))},{default:p((()=>[d("综合排序")])),_:1},8,["class"]),i(o,{class:x(["flex items-center",{"text-[#303133]":"sale_num"==n(le)}]),onClick:a[4]||(a[4]=e=>ce("sale_num"))},{default:p((()=>[i(s,{class:"mr-[4rpx]"},{default:p((()=>[d("销量")])),_:1}),"asc"!=n(ae)&&"desc"!=n(ae)?(r(),c(s,{key:0,class:"text-[16rpx] iconfont iconshangxiajiantouheise"})):"asc"==n(ae)?(r(),c(s,{key:1,class:"text-[16rpx] iconfont iconjiantoushang font-bold"})):"desc"==n(ae)?(r(),c(s,{key:2,class:"text-[16rpx] iconfont iconxialajiantouxiao"})):f("v-if",!0)])),_:1},8,["class"]),i(o,{class:x(["flex items-center",{"text-[#303133]":"price"==n(le)}]),onClick:a[5]||(a[5]=e=>ce("price"))},{default:p((()=>[i(s,{class:"mr-[4rpx]"},{default:p((()=>[d("价格")])),_:1}),"asc"!=n(te)&&"desc"!=n(te)?(r(),c(s,{key:0,class:"text-[16rpx] iconfont iconshangxiajiantouheise"})):"asc"==n(te)?(r(),c(s,{key:1,class:"text-[16rpx] iconfont iconjiantoushang font-bold"})):"desc"==n(te)?(r(),c(s,{key:2,class:"text-[16rpx] iconfont iconxialajiantouxiao"})):f("v-if",!0)])),_:1},8,["class"]),i(o,{class:x(["flex items-center",{"text-[#303133]":"label"==n(le)}]),onClick:a[6]||(a[6]=e=>ce("label"))},{default:p((()=>[i(s,{class:"mr-[2rpx]"},{default:p((()=>[d("筛选")])),_:1}),i(s,{class:"iconfont iconshaixuan text-[16rpx]"})])),_:1},8,["class"])])),_:1})])),_:1})])),_:1}),i(j,{show:n($),mode:"top",onClose:a[10]||(a[10]=e=>u($)?$.value=!1:$=!1)},{default:p((()=>[i(o,{onTouchmove:a[9]||(a[9]=m((()=>{}),["prevent","stop"]))},{default:p((()=>[i(o,{class:"text-sm font-bold px-[30rpx] mt-3"},{default:p((()=>[d("全部分类")])),_:1}),i(o,{class:"flex flex-wrap pl-[30rpx] pt-[30rpx]"},{default:p((()=>[(r(!0),_(b,null,v(n(P),((e,t)=>(r(),c(s,{onClick:t=>{return a=e.category_id,X.value=a,Q.value=[],void J().resetUpScroll();var a},key:e.category_id,class:x(["px-[26rpx] border-[2rpx] border-solid border-transparent h-[60rpx] mr-[30rpx] mb-[30rpx] flex items-center justify-center bg-[#F4F4F4] rounded-[8rpx] text-xs",{"label-select":n(X)==e.category_id}])},{default:p((()=>[d(V(e.category_name),1)])),_:2},1032,["onClick","class"])))),128))])),_:1}),f("        价格区间筛选 "),i(o,{class:"text-sm font-bold px-[30rpx] mt-3"},{default:p((()=>[d("价格区间")])),_:1}),i(o,{class:"flex flex-wrap pl-[30rpx] pt-[30rpx] mr-3"},{default:p((()=>[i(l,{placeholder:"请输入查找最低价格",border:"surround",class:"mr-3",prefixIconStyle:"font-size: 22px;color: #909399",modelValue:n(se).start_price,"onUpdate:modelValue":a[7]||(a[7]=e=>n(se).start_price=e)},null,8,["modelValue"]),d(" - "),i(l,{placeholder:"请输入最高价格",border:"surround",class:"ml-3",modelValue:n(se).end_price,"onUpdate:modelValue":a[8]||(a[8]=e=>n(se).end_price=e)},null,8,["modelValue"])])),_:1}),i(o,{class:"text-sm font-bold px-[30rpx] mt-3"},{default:p((()=>[d("操作")])),_:1}),i(o,{class:"flex flex-wrap justify-end pl-[30rpx] p-[30rpx]"},{default:p((()=>[g("div",{class:"flex"},[i(y,{type:"primary",class:"mr-3",text:"重置",onClick:ne}),i(y,{type:"success",plain:!0,onClick:ce,text:"搜索"})])])),_:1})])),_:1})])),_:1},8,["show"]),i(q,{ref_key:"mescrollRef",ref:Y,top:"160rpx",bottom:"50px",onInit:n(H),onDown:n(R),onUp:re},{default:p((()=>[n(Q).length?(r(),c(o,{key:0,class:x(["px-[30rpx]",n(oe)?"":"flex justify-between flex-wrap"])},{default:p((()=>[(r(!0),_(b,null,v(n(Q),((e,t)=>(r(),_(b,null,[n(oe)?(r(),c(o,{key:0,class:x(["bg-white flex p-[20rpx] rounded-[16rpx] overflow-hidden mt-[20rpx]",{"mb-[20rpx]":t+1==n(Q).length}]),onClick:t=>ie(e.goods_id)},{default:p((()=>[i(z,{class:"rounded-[10rpx] overflow-hidden",width:"190rpx",height:"190rpx",src:n(U)(e.goods_cover_thumb_mid?e.goods_cover_thumb_mid:""),model:"aspectFill"},{error:p((()=>[i(k,{name:"photo",color:"#999",size:"50"})])),_:2},1032,["src"]),i(o,{class:"flex-1 flex flex-col ml-[20rpx] py-[6rpx]"},{default:p((()=>[i(o,{class:"text-[28rpx] text-[#303133] leading-[40rpx] multi-hidden mb-[10rpx]"},{default:p((()=>[d(V(e.goods_name),1)])),_:2},1024),i(o,{class:"w-[450rpx] max-h-[80rpx] text-[20rpx] leading-[40rpx] truncate"},{default:p((()=>[d(V(e.sub_title),1)])),_:2},1024),i(o,{class:"mt-auto flex justify-between items-baseline"},{default:p((()=>[i(o,{class:"text-[var(--price-text-color)] price-font flex items-baseline"},{default:p((()=>[i(s,{class:"text-[26rpx] font-500"},{default:p((()=>[d("￥")])),_:1}),i(s,{class:"text-[36rpx] font-500"},{default:p((()=>[d(V(parseFloat(e.goodsSku.price).toFixed(2).split(".")[0]),1)])),_:2},1024),i(s,{class:"text-[24rpx] font-500"},{default:p((()=>[d("."+V(parseFloat(e.goodsSku.price).toFixed(2).split(".")[1]),1)])),_:2},1024)])),_:2},1024),i(s,{class:"text-[24rpx] text-[#999]"},{default:p((()=>[d("已售"+V(e.sale_num)+V(e.unit),1)])),_:2},1024)])),_:2},1024)])),_:2},1024)])),_:2},1032,["class","onClick"])):(r(),c(o,{key:1,class:"w-[334rpx] flex flex-col bg-[#fff] box-border rounded-[12rpx] overflow-hidden mt-[20rpx]",onClick:t=>ie(e.goods_id)},{default:p((()=>[i(z,{width:"334rpx",height:"334rpx",src:n(U)(e.goods_cover_thumb_mid?e.goods_cover_thumb_mid:""),model:"aspectFill"},{error:p((()=>[i(k,{name:"photo",color:"#999",size:"50"})])),_:2},1032,["src"]),i(o,{class:"px-[16rpx] flex-1 pt-[16rpx] pb-[20rpx] flex flex-col justify-between"},{default:p((()=>[i(o,{class:"text-[#303133] leading-[40rpx] text-[28rpx] multi-hidden"},{default:p((()=>[d(V(e.goods_name),1)])),_:2},1024),i(o,{class:"w-[300rpx] max-h-[80rpx] text-[20rpx] leading-[40rpx] truncate"},{default:p((()=>[d(V(e.sub_title),1)])),_:2},1024),i(o,{class:"flex justify-between items-baseline mt-[16rpx]"},{default:p((()=>[i(o,{class:"text-[var(--price-text-color)] price-font flex items-baseline"},{default:p((()=>[f('\t\t\t\t\t\t\t\t\t\t<text class="text-[20rpx]  mr-[4rpx]">￥</text>'),f('\t\t\t\t\t\t\t\t\t\t<text class="text-[36rpx] font-500">{{ item.goodsSku.price }}</text>'),i(s,{class:"text-[26rpx] font-500"},{default:p((()=>[d("￥")])),_:1}),i(s,{class:"text-[36rpx] font-500"},{default:p((()=>[d(V(parseFloat(e.goodsSku.price).toFixed(2).split(".")[0]),1)])),_:2},1024),i(s,{class:"text-[24rpx] font-500"},{default:p((()=>[d("."+V(parseFloat(e.goodsSku.price).toFixed(2).split(".")[1]),1)])),_:2},1024)])),_:2},1024),i(s,{class:"text-[24rpx] text-[#999]"},{default:p((()=>[d("已售"+V(e.sale_num)+V(e.unit),1)])),_:2},1024)])),_:2},1024)])),_:2},1024)])),_:2},1032,["onClick"]))],64)))),256))])),_:1},8,["class"])):f("v-if",!0),!n(Q).length&&n(Z)?(r(),c(o,{key:1,class:"mx-[30rpx] mt-[20rpx] bg-[#fff] rounded-[16rpx] noData flex items-center justify-center"},{default:p((()=>[i(B,{option:{tip:"暂无商品"}})])),_:1})):f("v-if",!0)])),_:1},8,["onInit","onDown"]),i(E,{addon:"shop"})])),_:1},8,["style"])}}}),[["__scopeId","data-v-30c1dcaa"]]);export{R as default};