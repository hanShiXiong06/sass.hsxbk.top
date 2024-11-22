import{bt as e,d as a,r as s,a$ as l,j as t,L as r,p as o,o as n,c as d,w as u,b as c,u as i,f as p,y as f,z as m,n as _,P as x,a7 as g,Q as v,A as h,a8 as b,a9 as k,bb as y,g as j,h as w,B as C,D as F,i as E,a6 as T,C as I,E as z,F as P,R,a as M,G as S}from"./index-7bf68536.js";import{_ as D}from"./top-tabbar.b8292bd6.js";import{_ as L}from"./u-popup.be4bfacd.js";import{M as A}from"./mescroll-body.b6d57b41.js";import{u as B}from"./useMescroll.26ccf5de.js";import{M as G}from"./mescroll-empty.fcefb74e.js";import{t as U}from"./topTabbar.f3f9eebd.js";import{u as q}from"./useGoods.e187513d.js";import{_ as N}from"./_plugin-vue_export-helper.1b428a4d.js";import"./useLocation.2a69509a.js";import"./manifest.c5d7e573.js";import"./cloneDeep.77735539.js";import"./u-transition.cdf87992.js";import"./u-icon.0c1c54c7.js";import"./u-safe-bottom.908eeae4.js";import"./mescroll-i18n.14e7fe02.js";/* empty css                                                                       */const O=N(a({__name:"rank",setup(a){const N=q(),{mescrollInit:O,downCallback:Q,getMescroll:W}=B(k,b),$=s(null),H=s(!1);l();let J={};let K=U().setTopTabbarParam({title:"排行榜"});const V=t((()=>S(Number(J.height)+J.top+8)+30+"rpx;")),X=s(!1),Y=()=>{X.value=!1},Z=s([]),ee=s([]),ae=s(1),se=s(10),le=s(!1),te=(a=!1)=>{var s;le.value||(le.value=!0,(s={page:ae.value,limit:se.value},e.get("shop/rank",s)).then((e=>{const s=e.data.data;Z.value=[...Z.value,...s],a&&Z.value&&Z.value.length?ie(Z.value[0].rank_id,0):Z.value.length||(H.value=!1),s.length>0&&ae.value++})).catch((e=>{console.error("加载分类数据失败",e)})).finally((()=>{le.value=!1})))};let re=0;const oe=e=>{const a=e.detail.scrollLeft,s=e.detail.scrollWidth,l=y(750);a>re&&a+l>=s-100&&!le.value&&te(),re=a},ne=r({}),de=()=>{e.get("shop/rank/getRankConfig").then((e=>{console.log(e.data),Object.assign(ne,e.data)}))},ue=s(0),ce=s(0);function ie(e,a){var s;H.value=!1,ee.value=[],ue.value=a,ce.value=e,null==(s=W())||s.resetUpScroll()}const pe=a=>{if(0==Z.value.length)return;H.value=!1;let s={page:a.num,limit:a.size,rank_id:ce.value};var l;(l=s,e.get("shop/rank/goods",l)).then((e=>{let s=e.data.data.map((e=>e));1==a.num&&(ee.value=[]),ee.value=ee.value.concat(s),a.endSuccess(s.length),H.value=!0})).catch((()=>{H.value=!0,a.endErr()}))};function fe(e){switch(e){case 1:return z("addon/shop/rank/rank_first.png");case 2:return z("addon/shop/rank/rank_second.png");case 3:return z("addon/shop/rank/rank_third.png");default:return z("addon/shop/rank/rank.png")}}return o((async e=>{te(!0),de()})),(e,a)=>{const s=j(w("top-tabbar"),D),l=C,t=F,r=E,o=T,b=I,k=j(w("u-popup"),L);return n(),d(r,{class:"min-h-[100vh]",style:_(e.themeColor())},{default:u((()=>[c(s,{data:i(K),isFill:!1,class:"top-header"},null,8,["data"]),p(" 顶部图片 "),c(r,{class:"rank-head"},{default:u((()=>[c(l,{class:"w-[100%] h-[426rpx]",src:i(z)(ne.rank_images),mode:"aspectFill"},null,8,["src"]),c(r,{class:"content"},{default:u((()=>[c(t,{class:"text-[26rpx]"},{default:u((()=>[f(m(ne.rank_name),1)])),_:1})])),_:1}),ne.rank_remark?(n(),d(r,{key:0,class:"side-tab",style:_({top:i(V)}),onClick:a[0]||(a[0]=e=>X.value=!0)},{default:u((()=>[c(t,{class:"iconfont icona-paihangbangpc30 icon"}),c(t,{class:"desc"},{default:u((()=>[f(m(i(P)("rankingRules")),1)])),_:1})])),_:1},8,["style"])):p("v-if",!0)])),_:1}),c(r,{class:"rank-list p-[20rpx] relative -mt-[50rpx]"},{default:u((()=>[p(" 榜单分类按钮 "),c(o,{"scroll-x":"true",class:"category-slider",onScroll:oe},{default:u((()=>[(n(!0),x(v,null,g(Z.value,((e,a)=>(n(),d(r,{class:R(["category-btn",{active:ue.value===a}]),key:a,onClick:s=>ie(e.rank_id,a)},{default:u((()=>[c(r,null,{default:u((()=>[f(m(e.name),1)])),_:2},1024)])),_:2},1032,["class","onClick"])))),128))])),_:1}),p(" 列表 "),c(A,{ref_key:"mescrollRef",ref:$,bottom:"60px",onInit:i(O),down:{use:!1},onUp:pe},{default:u((()=>[ee.value.length?(n(!0),x(v,{key:0},g(ee.value,((e,a)=>(n(),d(r,{class:R(["bg-[#fff] flex rounded-[var(--rounded-mid)] p-[20rpx]",{"mb-[20rpx]":ee.value.length-1!=a}]),key:e.goods_id},{default:u((()=>[c(r,{class:"w-[240rpx] h-[240rpx] flex items-center justify-center relative"},{default:u((()=>[p(" 榜单排名图片 "),a<10?(n(),d(l,{key:0,class:"absolute top-[-5rpx] left-[0rpx] w-[50rpx] h-[58rpx]",style:{zIndex:9},src:fe(e.rank_num),mode:"aspectFill"},null,8,["src"])):p("v-if",!0),a<10?(n(),d(r,{key:1,class:"absolute top-[3rpx] left-[0rpx] flex items-center justify-center w-[50rpx] h-[50rpx]",style:{zIndex:10}},{default:u((()=>[c(t,{class:"text-[24rpx] font-bold text-[#fff]"},{default:u((()=>[f(m(a+1),1)])),_:2},1024)])),_:2},1024)):p("v-if",!0),e.goods_cover_thumb_mid?(n(),d(l,{key:2,class:"w-[250rpx] h-[250rpx] rounded-[var(--rounded-mid)]",src:i(z)(e.goods_cover_thumb_mid),mode:"aspectFill",onError:a=>e.goods_cover_thumb_mid="static/resource/images/diy/shop_default.jpg"},null,8,["src","onError"])):(n(),d(l,{key:3,class:"w-[240rpx] h-[240rpx] rounded-[var(--rounded-mid)]",src:i(z)("static/resource/images/diy/shop_default.jpg"),mode:"aspectFill"},null,8,["src"]))])),_:2},1024),c(r,{class:"flex flex-col flex-1 justify-between ml-[20rpx] pt-[4rpx]"},{default:u((()=>[c(r,{class:"text-[28rpx] text-[#333] leading-[40rpx] multi-hidden mb-[10rpx]"},{default:u((()=>[e.goods_brand?(n(),d(r,{key:0,class:"brand-tag"},{default:u((()=>[f(m(e.goods_brand.brand_name),1)])),_:2},1024)):p("v-if",!0),f(" "+m(e.goods_name),1)])),_:2},1024),e.goods_label_name&&e.goods_label_name.length?(n(),d(r,{key:0,class:"flex flex-wrap"},{default:u((()=>[(n(!0),x(v,null,g(e.goods_label_name,((e,a)=>(n(),x(v,null,["icon"==e.style_type&&e.icon?(n(),d(l,{key:0,class:"img-tag",src:i(z)(e.icon),mode:"heightFix",onError:a=>i(N).error(e,"icon")},null,8,["src","onError"])):"diy"!=e.style_type&&e.icon?p("v-if",!0):(n(),d(r,{key:1,class:"base-tag",style:_(i(N).baseTagStyle(e))},{default:u((()=>[f(m(e.label_name),1)])),_:2},1032,["style"]))],64)))),256))])),_:2},1024)):p("v-if",!0),c(r,{class:"flex items-center justify-between"},{default:u((()=>[c(r,{class:"text-[var(--price-text-color)] flex items-baseline"},{default:u((()=>[c(t,{class:"text-[24rpx] font-500 mr-[4rpx]"},{default:u((()=>[f("￥")])),_:1}),c(t,{class:"text-[40rpx] font-500"},{default:u((()=>[f(m(i(N).goodsPrice(e).toFixed(2).split(".")[0]),1)])),_:2},1024),c(t,{class:"text-[24rpx] font-500"},{default:u((()=>[f("."+m(i(N).goodsPrice(e).toFixed(2).split(".")[1]),1)])),_:2},1024)])),_:2},1024),c(r,{class:"bank-buying primary-btn-bg",onClick:a=>{return s=e.goods_id,void M({url:"/addon/shop/pages/goods/detail",param:{goods_id:s}});var s}},{default:u((()=>[f(" 去购买 ")])),_:2},1032,["onClick"])])),_:2},1024)])),_:2},1024)])),_:2},1032,["class"])))),128)):p("v-if",!0),!ee.value.length&&H.value?(n(),d(G,{key:1,option:{tip:"暂无商品",btnText:"去逛逛"},onEmptyclick:a[1]||(a[1]=e=>i(M)({url:"/addon/shop/goods/list",mode:"navigateTo"}))})):p("v-if",!0)])),_:1},8,["onInit"]),c(r,{onTouchmove:a[3]||(a[3]=h((()=>{}),["prevent","stop"]))},{default:u((()=>[c(k,{show:X.value,onClose:Y,mode:"center",round:"var(--rounded-big)"},{default:u((()=>[c(r,{class:"w-[570rpx] px-[32rpx] popup-common center"},{default:u((()=>[c(r,{class:"title"},{default:u((()=>[f(m(i(P)("rankingRules")),1)])),_:1}),c(o,{"scroll-y":!0,class:"px-[30rpx] box-border max-h-[260rpx]"},{default:u((()=>[c(r,{class:"text-[28rpx] leading-[40rpx] mb-[20rpx]"},{default:u((()=>[f(m(ne.rank_remark),1)])),_:1})])),_:1}),c(r,{class:"btn-wrap !pt-[40rpx]"},{default:u((()=>[c(b,{class:"primary-btn-bg w-[480rpx] h-[70rpx] text-[26rpx] leading-[70rpx] rounded-[35rpx] !text-[#fff] font-500",onClick:a[2]||(a[2]=e=>X.value=!1)},{default:u((()=>[f("我知道了")])),_:1})])),_:1})])),_:1})])),_:1},8,["show"])])),_:1})])),_:1})])),_:1},8,["style"])}}}),[["__scopeId","data-v-603d7888"]]);export{O as default};
