import{b9 as e,d as t,r as l,o as a,c as s,w as o,b as r,E as i,F as n,G as c,f as u,u as d,n as p,H as f,a5 as x,a6 as _,bt as v,N as g,i as m,ag as h,a4 as b,g as k,h as y,V as w,x as j,y as C,bk as F,X as z,B as S,bX as E,a as G,I,ai as B,C as M}from"./index-905183d4.js";import{_ as T}from"./u-icon.86a2aad0.js";import{_ as U}from"./u--image.b5d65e0e.js";import{_ as D}from"./u-loading-page.7aa0a449.js";import{M as L}from"./mescroll-body.b8d008ed.js";import{M as X}from"./mescroll-empty.f9bce990.js";import{u as A}from"./useMescroll.26ccf5de.js";import{_ as H}from"./_plugin-vue_export-helper.1b428a4d.js";import"./u-image.44c969ef.js";import"./u-transition.dbaca185.js";import"./u-loading-icon.c376267d.js";import"./mescroll-uni-option.0af4878d.js";import"./mescroll-i18n.6025c811.js";/* empty css                                                                       */const N=H(t({__name:"list",setup(t){const{mescrollInit:H,downCallback:N,getMescroll:O}=A(_,x),R=l([]),V=l([]),$=l(0),q=l(""),J=l([]),K=l(!0),P=l(!0);l({title:"",topStatusBar:{style:"style-1",bgColor:"transparent",textColor:"#fff"}});P.value=!0,e.get("shop/discount/config").then((e=>{R.value=e.data,P.value=!1})).catch((()=>{P.value=!1}));var Q;(Q={limit:4},e.get("shop/discount",Q)).then((e=>{V.value=e.data,V.value&&V.value.length&&W(e.data[0])}));const W=e=>{$.value=e.active_id,q.value=e.active_status_name,O().resetUpScroll(),v({scrollTop:0,duration:1})},Y=t=>{if(0==V.value.length)return;K.value=!0,function(t){return e.get("shop/discount/goods",t)}({page:t.num,limit:t.size,active_id:$.value}).then((e=>{let l=e.data.data.map((e=>e));1==t.num&&(J.value=[]),J.value=J.value.concat(l),t.endSuccess(l.length),K.value=!1})).catch((()=>{K.value=!1,t.endErr()}))},Z=e=>{G({url:"/addon/shop/pages/goods/detail",param:{sku_id:e}})},ee=e=>{I({title:`活动${e.activeGoods.active_goods_status_name}`,icon:"none"})};return(e,t)=>{const l=g,x=m,_=B,v=h,I=M,A=b,O=k(y("u-icon"),T),q=k(y("u--image"),U),Q=k(y("u-loading-page"),D);return a(),s(x,{class:"discount bg-[#f6f6f6] min-h-[100vh]",style:p(e.themeColor())},{default:o((()=>[r(x,{class:"fixed top-0 left-0 w-full z-10 text-[0]"},{default:o((()=>[R.value.length?(a(),s(v,{key:0,class:"swiper ns-indicator-dots h-[490rpx]",autoplay:"true",circular:"true",interval:5e3,"indicator-dots":""},{default:o((()=>[(a(!0),i(c,null,n(R.value,((e,t)=>(a(),s(_,{class:"swiper-item",key:t},{default:o((()=>[r(x,{onClick:t=>(e=>{if(Object.keys(e).length){if(!e.url)return;if("app/pages/member/index"==F()&&!z())return void S().setLoginBack({url:e.url});E(e)}else G(e)})(e.toLink)},{default:o((()=>[r(x,{class:"item h-[490rpx]"},{default:o((()=>[e.imageUrl?(a(),s(l,{key:0,src:d(w)(e.imageUrl),mode:"scaleToFill",class:"w-full h-full","show-menu-by-longpress":!0},null,8,["src"])):u("v-if",!0)])),_:2},1024)])),_:2},1032,["onClick"])])),_:2},1024)))),128))])),_:1})):u("v-if",!0),P.value||R.value.length?u("v-if",!0):(a(),s(l,{key:1,src:d(w)("addon/shop/discount/discount_banner.png"),mode:"scaleToFill",class:"w-full h-[490rpx]","show-menu-by-longpress":!0},null,8,["src"])),V.value.length?(a(),s(x,{key:2,class:"relative w-full h-[110rpx] mt-[-40rpx] z-5"},{default:o((()=>[r(x,{class:"bg-[#f24f3d] w-[750rpx] rounded-tl-[24rpx] rounded-tr-[24rpx] h-[96rpx] absolute left-0 bottom-0"}),r(A,{"scroll-x":!0,class:"h-[110rpx] absolute left-0 bottom-0 z-5"},{default:o((()=>[r(x,{class:"flex items-end h-[100%]",style:p({width:187.5*V.value.length+"rpx"})},{default:o((()=>[(a(!0),i(c,null,n(V.value,((e,t)=>(a(),s(x,{class:"w-[187.5rpx] h-[96rpx] relative flex-shrink-0",onClick:t=>W(e)},{default:o((()=>[r(x,{class:"w-full absolute left-0 top-0 z-10 text-[#fff] text-center pt-[10rpx]"},{default:o((()=>[r(x,{class:f(["text-[28rpx] leading-[39rpx] font-500 px-[10rpx] h-[39rpx] overflow-hidden",{"!text-[#333]":$.value==e.active_id}])},{default:o((()=>[j(C(e.active_desc),1)])),_:2},1032,["class"]),r(x,{class:"flex justify-center w-full"},{default:o((()=>[r(I,{class:f(["text-[22rpx] leading-[34rpx] font-400 mt-[5rpx]",{"active flex items-center justify-center":$.value==e.active_id}])},{default:o((()=>[j(C("not_active"==e.active_status?"预告":e.active_status_name),1)])),_:2},1032,["class"])])),_:2},1024)])),_:2},1024),$.value==e.active_id?(a(),i(c,{key:0},[V.value.length<4?(a(),s(l,{key:0,class:f(["absolute bottom-0 z-5 h-[110rpx] z-5",{"left-0 w-[230rpx]":0==t,"left-[-41.25rpx] w-[270rpx]":0!=t}]),src:d(w)(0==t?"addon/shop/discount/nav-left.png":"addon/shop/discount/nav-center.png")},null,8,["class","src"])):u("v-if",!0),V.value.length>=4?(a(),s(l,{key:1,class:f(["absolute bottom-0 z-5 h-[110rpx] z-5",{"left-0 w-[230rpx]":0==t,"left-[-41.25rpx] w-[270rpx]":0!=t&&t!=V.value.length-1,"right-0 w-[230rpx]":t==V.value.length-1}]),src:d(w)(0==t?"addon/shop/discount/nav-left.png":t==V.value.length-1?"addon/shop/discount/nav-right.png":"addon/shop/discount/nav-center.png")},null,8,["class","src"])):u("v-if",!0)],64)):u("v-if",!0)])),_:2},1032,["onClick"])))),256))])),_:1},8,["style"])])),_:1})])),_:1})):u("v-if",!0)])),_:1}),r(L,{ref:"mescrollRef",top:V.value.length?"590rpx":"520rpx",onInit:d(H),onDown:d(N),onUp:Y},{default:o((()=>[r(x,{class:"px-[30rpx] bg-[#F4F6F8]"},{default:o((()=>[(a(!0),i(c,null,n(J.value,((e,t)=>(a(),s(x,{key:t,class:f(["bg-[#fff] p-[20rpx] flex rounded-[16rpx]",{"mb-[20rpx]":t<J.value.length-1,"mb-[30rpx]":t==J.value.length-1}])},{default:o((()=>[r(x,{class:"w-[240rpx] h-[240rpx] rounded-[16rpx]"},{default:o((()=>["active"!=e.activeGoods.active_goods_status?(a(),s(q,{key:0,width:"240rpx",height:"240rpx",src:d(w)(e.goods_cover_thumb_mid?e.goods_cover_thumb_mid:""),model:"aspectFill",onClick:t=>ee(e)},{error:o((()=>[r(O,{name:"photo",color:"#999",size:"50"})])),_:2},1032,["src","onClick"])):(a(),s(q,{key:1,width:"240rpx",height:"240rpx",src:d(w)(e.goods_cover_thumb_mid?e.goods_cover_thumb_mid:""),model:"aspectFill",onClick:t=>Z(e.goodsSku.sku_id)},{error:o((()=>[r(O,{name:"photo",color:"#999",size:"50"})])),_:2},1032,["src","onClick"]))])),_:2},1024),r(x,{class:"ml-[20rpx] flex-1 flex flex-col justify-between"},{default:o((()=>[r(x,null,{default:o((()=>[r(x,{class:"w-[390rpx] max-h-[78rpx] text-[28rpx] leading-[39rpx] multi-hidden"},{default:o((()=>[j(C(e.goods_name),1)])),_:2},1024),e.goods_label_name&&e.goods_label_name.length?(a(),s(x,{key:0,class:"w-[390rpx] mt-[10rpx] text-[#999999] text-[24rpx] font-400 max-h-[68rpx] multi-hidden"},{default:o((()=>[j(C(e.goods_label_name.map((e=>e.label_name)).join(" | ")),1)])),_:2},1024)):u("v-if",!0)])),_:2},1024),r(x,{class:"w-full h-[78rpx] bg-[#FFECEC] flex justify-between rounded-[40rpx]"},{default:o((()=>[r(x,{class:"mr-[20rpx] pl-[29rpx] flex-1 flex flex-col justify-center"},{default:o((()=>[r(x,{class:"text-[#EF000C] flex items-center"},{default:o((()=>[r(x,null,{default:o((()=>[r(I,{class:"text-[20rpx] font-500"},{default:o((()=>[j("￥")])),_:1}),r(I,{class:"text-[36rpx] font-bold"},{default:o((()=>[j(C(parseFloat(e.goodsSku.active_discount_price).toFixed(2).split(".")[0])+".",1)])),_:2},1024),r(I,{class:"text-[26rpx] font-bold"},{default:o((()=>[j(C(parseFloat(e.goodsSku.active_discount_price).toFixed(2).split(".")[1]),1)])),_:2},1024)])),_:2},1024),e.goodsSku.active_discount_rate<10?(a(),s(x,{key:0,class:"px-[4rpx] border-[1rpx] border-[#EF000C] border-solid h-[20rpx] text-[18rpx] ml-[6rpx] rounded-[4rpx] leading-[20rpx] flex items-center"},{default:o((()=>[j(C(e.goodsSku.active_discount_rate)+"折",1)])),_:2},1024)):u("v-if",!0)])),_:2},1024),r(x,{class:"flex items-center mt-[-5rpx]"},{default:o((()=>[r(x,{class:f(["w-[20rpx] h-[20rpx] mr-[2rpx] rounded-[10rpx] text-center text-[#fff] bg-[#EF000C] flex items-center justify-center",{"!bg-[#FF8540]":"active"!=e.activeGoods.active_goods_status}])},{default:o((()=>[r(I,{class:"text-[12rpx] iconzhekou iconfont"})])),_:2},1032,["class"]),r(x,{class:f(["text-[18rpx] font-400 text-[#EF000C]",{"!text-[#FF8540]":"active"!=e.activeGoods.active_goods_status}])},{default:o((()=>[j("已省"+C(e.goodsSku.active_reduce_money)+"元",1)])),_:2},1032,["class"])])),_:2},1024)])),_:2},1024),r(x,{class:f(["active-button w-[106rpx] h-[78rpx] box-border pl-[25rpx] leading-[78rpx] text-[#fff]",{"!w-[116rpx]":"active"!=e.activeGoods.active_goods_status}]),style:p({"background-image":"url("+d(w)("active"!=e.activeGoods.active_goods_status?"addon/shop/discount/no-active.png":"addon/shop/discount/active.png")+")"})},{default:o((()=>["active"!=e.activeGoods.active_goods_status?(a(),s(I,{key:0,class:"text-[26rpx] font-500",onClick:t=>ee(e)},{default:o((()=>[j(C(e.activeGoods.active_goods_status_name),1)])),_:2},1032,["onClick"])):(a(),s(x,{key:1,class:"h-full flex items-center justify-between",onClick:t=>Z(e.goodsSku.sku_id)},{default:o((()=>[r(I,{class:"text-[40rpx]"},{default:o((()=>[j("抢")])),_:1}),r(I,{class:"text-[20rpx] iconxiayibu iconfont mr-[16rpx]"})])),_:2},1032,["onClick"]))])),_:2},1032,["class","style"])])),_:2},1024)])),_:2},1024)])),_:2},1032,["class"])))),128)),J.value.length||K.value?u("v-if",!0):(a(),s(x,{key:0,class:f(["flex justify-center w-[100%] items-center justify-center bg-[#fff] rounded-[16rpx]",{"h-[calc(100vh-620rpx)]":V.value.length,"h-[calc(100vh-550rpx)]":!V.value.length}])},{default:o((()=>[r(X,{option:{tip:"暂无商品，请看看其他商品吧！"}})])),_:1},8,["class"]))])),_:1})])),_:1},8,["top","onInit","onDown"]),r(Q,{"bg-color":"rgb(248,248,248)",loading:K.value,loadingText:"",fontSize:"16",color:"#303133"},null,8,["loading"])])),_:1},8,["style"])}}}),[["__scopeId","data-v-50d6fb0c"]]);export{N as default};