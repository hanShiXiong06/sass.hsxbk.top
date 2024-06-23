import{_ as e}from"./u-input.07f64251.js";import{d as t,r as a,q as l,t as s,o,c as r,w as n,b as i,u as c,aN as p,f as x,H as u,x as f,E as d,F as m,G as _,n as v,a5 as h,a6 as g,U as b,g as j,h as y,C as k,i as w,V as C,y as F,a as z,N as M}from"./index-905183d4.js";import{_ as S}from"./u-icon.86a2aad0.js";import{_ as I}from"./u--image.b5d65e0e.js";import{_ as U}from"./tabbar.f4383367.js";import{b as D}from"./point.d005bfc9.js";import{M as N}from"./mescroll-body.b8d008ed.js";import{M as T}from"./mescroll-empty.f9bce990.js";import{u as V}from"./useMescroll.26ccf5de.js";import{_ as E}from"./_plugin-vue_export-helper.1b428a4d.js";import"./u-image.44c969ef.js";import"./u-transition.dbaca185.js";import"./u-badge.82a65592.js";import"./u-tabbar.bedfa48a.js";import"./u-safe-bottom.e94b03c1.js";import"./mescroll-uni-option.0af4878d.js";import"./mescroll-i18n.6025c811.js";/* empty css                                                                       */const A=E(t({__name:"list",setup(t){const{mescrollInit:E,downCallback:A,getMescroll:B}=V(g,h),{setShare:q,onShareAppMessage:G,onShareTimeline:H}=b();q(),G(),H();let R=a([]),J=a(""),K=a(""),L=a(null),O=a(!1),P=a(""),Q=a(""),W=a(""),X=a("total_order_num");const Y=e=>{O.value=!1;let t={goods_category:K.value,page:e.num,limit:e.size,names:P.value,coupon_id:J.value,order:"total_order_num"===X.value?"":X.value,sort:"price"==X.value?Q.value:W.value};D(t).then((t=>{let a=t.data.data;1===Number(e.num)&&(R.value=[]),R.value=R.value.concat(a),e.endSuccess(a.length),O.value=!0})).catch((()=>{O.value=!0,e.endErr()}))},Z=e=>{X.value=e,"total_order_num"==e&&(W.value="",Q.value=""),"price"==e&&(W.value="",Q.value?Q.value="asc"==Q.value?"desc":"asc":Q.value="asc"),"total_exchange_num"==e&&(Q.value="",W.value?W.value="asc"==W.value?"desc":"asc":W.value="asc"),R.value=[],B().resetUpScroll()};return l((()=>{setTimeout((()=>{B().optUp.textNoMore=s("end")}),500)})),(t,a)=>{const l=j(y("u-input"),e),s=k,h=w,g=j(y("u-icon"),S),b=j(y("u--image"),I),D=M,V=j(y("tabbar"),U);return o(),r(h,{class:"bg-gray-100 min-h-[100vh]",style:v(t.themeColor())},{default:n((()=>[i(h,{class:"fixed left-0 right-0 top-0 product-warp bg-[#fff] px-[30rpx] z-10"},{default:n((()=>[i(h,{class:"h-[88rpx] box-border py-[14rpx] flex items-center justify-between"},{default:n((()=>[i(h,{class:"flex-1 flex items-center h-[60rpx] bg-[#F6F8F8] rounded-[33rpx] pl-[32rpx] pr-[20rpx]"},{default:n((()=>[i(l,{class:"flex-1",maxlength:"50",modelValue:c(P),"onUpdate:modelValue":a[0]||(a[0]=e=>p(P)?P.value=e:P=e),onConfirm:a[1]||(a[1]=e=>Z("total_order_num")),placeholder:"请搜索您想要的商品",placeholderClass:"text-[#a5a6a6] text-[26rpx]",fontSize:"26rpx",clearable:"",border:"none"},null,8,["modelValue"]),i(s,{class:"iconfont iconxiazai17 text-[30rpx] ml-[18rpx] font-bold !text-[#999]",onClick:a[2]||(a[2]=e=>Z("total_order_num"))})])),_:1}),x(" <view :class=\"['iconfont text-[44rpx]', listType ? 'iconshangpinliebiao' : 'iconliebiaoxingshi']\" @click=\"listIconBtn\"></view> ")])),_:1}),i(h,{class:"flex justify-between tems-center py-[22rpx] px-[20rpx]"},{default:n((()=>[i(h,{class:"flex items-center justify-between text-[24rpx] text-[#666] flex-1"},{default:n((()=>[i(s,{class:u({"text-[#303133] ":"total_order_num"==c(X)}),onClick:a[3]||(a[3]=e=>Z("total_order_num"))},{default:n((()=>[f("综合排序")])),_:1},8,["class"]),i(h,{class:u(["flex items-center",{"text-[#303133]":"total_exchange_num"==c(X)}]),onClick:a[4]||(a[4]=e=>Z("total_exchange_num"))},{default:n((()=>[i(s,{class:"mr-[4rpx]"},{default:n((()=>[f("销量")])),_:1}),"asc"!=c(W)&&"desc"!=c(W)?(o(),r(s,{key:0,class:"text-[16rpx] iconfont iconshangxiajiantouheise"})):"asc"==c(W)?(o(),r(s,{key:1,class:"text-[16rpx] iconfont iconjiantoushang font-bold"})):"desc"==c(W)?(o(),r(s,{key:2,class:"text-[16rpx] iconfont iconxialajiantouxiao"})):x("v-if",!0)])),_:1},8,["class"]),i(h,{class:u(["flex items-center",{"text-[#303133]":"price"==c(X)}]),onClick:a[5]||(a[5]=e=>Z("price"))},{default:n((()=>[i(s,{class:"mr-[4rpx]"},{default:n((()=>[f("价格")])),_:1}),"asc"!=c(Q)&&"desc"!=c(Q)?(o(),r(s,{key:0,class:"text-[16rpx] iconfont iconshangxiajiantouheise"})):"asc"==c(Q)?(o(),r(s,{key:1,class:"text-[16rpx] iconfont iconjiantoushang font-bold"})):"desc"==c(Q)?(o(),r(s,{key:2,class:"text-[16rpx] iconfont iconxialajiantouxiao"})):x("v-if",!0)])),_:1},8,["class"])])),_:1})])),_:1})])),_:1}),i(N,{ref_key:"mescrollRef",ref:L,top:"160rpx",bottom:"50px",onInit:c(E),onDown:c(A),onUp:Y},{default:n((()=>[c(R).length?(o(),r(h,{key:0,class:"px-[30rpx] flex justify-between flex-wrap"},{default:n((()=>[(o(!0),d(_,null,m(c(R),((e,t)=>(o(),r(h,{class:"w-[334rpx] flex flex-col bg-[#fff] box-border rounded-[16rpx] overflow-hidden mt-[20rpx]",onClick:t=>{return a=e.id,void z({url:"/addon/shop/pages/point/detail",param:{id:a},mode:"navigateTo"});var a}},{default:n((()=>[i(b,{width:"334rpx",height:"334rpx",src:c(C)(e.goods_cover_thumb_mid?e.goods_cover_thumb_mid:""),model:"aspectFill"},{error:n((()=>[i(g,{name:"photo",color:"#999",size:"50"})])),_:2},1032,["src"]),i(h,{class:"px-[16rpx] flex-1 pt-[10rpx] pb-[20rpx] flex flex-col justify-between"},{default:n((()=>[i(h,{class:"text-[#333] leading-[40rpx] text-[28rpx] multi-hidden"},{default:n((()=>[f(F(e.names),1)])),_:2},1024),i(h,{class:"text-[24rpx] font-400 leading-[34rpx] mt-[10rpx] text-[#999]"},{default:n((()=>[f("已兑"+F(e.total_exchange_num)+"人",1)])),_:2},1024),i(h,{class:"flex justify-between flex-wrap items-center mt-[16rpx]"},{default:n((()=>[i(h,{class:"flex"},{default:n((()=>[i(D,{class:"h-[28rpx]",src:c(C)("addon/shop/exchange/point-icon.png"),mode:"heightFix"},null,8,["src"]),i(s,{class:"text-[var(--price-text-color)] price-font text-[32rpx] ml-[2rpx]"},{default:n((()=>[f(F(e.point),1)])),_:2},1024),e.price&&e.price>0?(o(),r(s,{key:0,class:"text-[#333] font-400 text-[24rpx] mt-[7rpx]"},{default:n((()=>[f("+")])),_:1})):x("v-if",!0),e.price&&e.price>0?(o(),r(s,{key:1,class:"text-[var(--price-text-color)] font-400 text-[22rpx] mt-[10rpx]"},{default:n((()=>[f("￥"+F(parseFloat(e.price).toFixed(2)),1)])),_:2},1024)):x("v-if",!0)])),_:2},1024),i(h,{class:"w-[80rpx] h-[46rpx] text-[28rpx] leading-[46rpx] !text-[#fff] m-0 rounded-full !bg-[var(--primary-color)] font-400 remove-border text-center",shape:"circle"},{default:n((()=>[f("兑换")])),_:1})])),_:2},1024)])),_:2},1024)])),_:2},1032,["onClick"])))),256))])),_:1})):x("v-if",!0),!c(R).length&&c(O)?(o(),r(h,{key:1,class:"mx-[30rpx] mt-[20rpx] bg-[#fff] rounded-[16rpx] noData flex items-center justify-center"},{default:n((()=>[i(T,{option:{tip:"暂无商品"}})])),_:1})):x("v-if",!0)])),_:1},8,["onInit","onDown"]),i(V,{addon:"shop"})])),_:1},8,["style"])}}}),[["__scopeId","data-v-c5803d71"]]);export{A as default};
