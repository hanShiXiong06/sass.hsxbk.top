import{bu as e,d as t,p as a,r as l,o as s,c as o,w as r,b as i,u as n,f as u,n as c,I as d,J as p,K as x,L as f,y as v,a3 as g,a4 as _,l as m,bt as h,bl as b,G as y,C as k,b_ as w,g as j,h as F,Q as C,i as z,a2 as E,E as S,z as G,a as T,a9 as I,H as L,D as M}from"./index-d8a8f699.js";import{_ as U}from"./u-swiper.efc69b22.js";import{_ as B}from"./u--image.2df700b8.js";import{_ as D}from"./u-empty.41eb000a.js";import{_ as J}from"./u-loading-page.c740ef13.js";import{M as O}from"./mescroll-body.f9302aea.js";import{M as $}from"./mescroll-empty.2fe85dec.js";import{u as H}from"./useMescroll.26ccf5de.js";import{t as K}from"./topTabbar.a37f79d9.js";import{_ as N}from"./_plugin-vue_export-helper.1b428a4d.js";import"./u-loading-icon.6808ae8c.js";import"./u-image.e646392b.js";import"./u-icon.5ba98c98.js";import"./u-transition.db07fff7.js";import"./mescroll-i18n.49872024.js";const P=N(t({__name:"list",setup(t){let N={};const P=a((()=>Object.keys(N).length?I(Number(N.height))+I(N.top)+I(8)+368+"rpx":"490rpx")),{mescrollInit:Q,downCallback:R,getMescroll:W}=H(_,g),X=l([]),Y=l([]),Z=l(0),q=l(""),A=l([]),V=l(!0),ee=l(!0);K().setTopTabbarParam({title:"限时折扣"});const te=l([]);ee.value=!0,e.get("shop/discount/config").then((e=>{X.value=e.data,te.value=X.value.map((e=>m(e.imageUrl))),ee.value=!1})).catch((()=>{ee.value=!1}));var ae;(ae={limit:4},e.get("shop/discount",ae)).then((e=>{Y.value=e.data,ie(),Y.value&&Y.value.length?le(e.data[0]):V.value=!1}));const le=e=>{var t;Z.value=e.active_id,q.value=e.active_status_name,null==(t=W())||t.resetUpScroll(),h({scrollTop:0,duration:1})},se=t=>{if(0==Y.value.length)return;V.value=!0,function(t){return e.get("shop/discount/goods",t)}({page:t.num,limit:t.size,active_id:Z.value}).then((e=>{let a=e.data.data.map((e=>e));1==t.num&&(A.value=[]),A.value=A.value.concat(a),t.endSuccess(a.length),V.value=!1})).catch((()=>{V.value=!1,t.endErr()}))},oe=e=>{let t=X.value[e].toLink;if(Object.keys(t).length){if(!t.name)return;if("app/pages/member/index"==b()&&!y())return void k().setLoginBack({url:t.url});w(t)}},re=l(""),ie=()=>{re.value=Y.value.length?590:520,re.value=re.value+"rpx"};return(e,t)=>{const a=j(F("u-swiper"),U),l=C,g=z,_=M,h=E,b=j(F("u--image"),B),y=j(F("u-empty"),D),k=S,w=j(F("u-loading-page"),J);return s(),o(g,{class:"discount bg-[#f6f6f6] min-h-[100vh]",style:c(e.themeColor())},{default:r((()=>[i(g,{class:"fixed top-0 left-0 w-full z-10 text-[0]"},{default:r((()=>[X.value.length?(s(),o(a,{key:0,list:te.value,indicator:X.value.length,indicatorStyle:{bottom:"46rpx"},autoplay:!0,height:n(P),onClick:oe},null,8,["list","indicator","height"])):u("v-if",!0),ee.value||X.value.length?u("v-if",!0):(s(),o(l,{key:1,src:n(m)("addon/shop/discount/discount_banner.png"),mode:"scaleToFill",class:"w-full",style:c({height:n(P)}),"show-menu-by-longpress":!0},null,8,["src","style"])),Y.value.length?(s(),o(g,{key:2,class:"relative w-full h-[110rpx] mt-[-40rpx] z-5"},{default:r((()=>[i(g,{class:"bg-[#f24f3d] w-[750rpx] rounded-tl-[24rpx] rounded-tr-[24rpx] h-[96rpx] absolute left-0 bottom-0"}),i(h,{"scroll-x":!0,class:"h-[110rpx] absolute left-0 bottom-0 z-5"},{default:r((()=>[i(g,{class:"flex items-end h-[100%]",style:c({width:187.5*Y.value.length+"rpx"})},{default:r((()=>[(s(!0),d(x,null,p(Y.value,((e,t)=>(s(),o(g,{class:"w-[187.5rpx] h-[96rpx] relative flex-shrink-0",onClick:t=>le(e)},{default:r((()=>[i(g,{class:"w-full absolute left-0 top-0 z-10 text-[#fff] text-center pt-[10rpx]"},{default:r((()=>[i(g,{class:f(["text-[28rpx] leading-[39rpx] font-500 px-[10rpx] h-[39rpx] overflow-hidden",{"!text-[#333]":Z.value==e.active_id}])},{default:r((()=>[v(G(e.active_desc),1)])),_:2},1032,["class"]),i(g,{class:"flex justify-center w-full"},{default:r((()=>[i(_,{class:f(["text-[22rpx] leading-[34rpx] font-400 mt-[5rpx]",{"active flex items-center justify-center":Z.value==e.active_id}])},{default:r((()=>[v(G("not_active"==e.active_status?"预告":e.active_status_name),1)])),_:2},1032,["class"])])),_:2},1024)])),_:2},1024),Z.value==e.active_id?(s(),d(x,{key:0},[Y.value.length<4?(s(),o(l,{key:0,class:f(["absolute bottom-0 z-5 h-[110rpx] z-5",{"left-0 w-[230rpx]":0==t,"left-[-41.25rpx] w-[270rpx]":0!=t}]),src:n(m)(0==t?"addon/shop/discount/nav-left.png":"addon/shop/discount/nav-center.png")},null,8,["class","src"])):u("v-if",!0),Y.value.length>=4?(s(),o(l,{key:1,class:f(["absolute bottom-0 z-5 h-[110rpx] z-5",{"left-0 w-[230rpx]":0==t,"left-[-41.25rpx] w-[270rpx]":0!=t&&t!=Y.value.length-1,"right-0 w-[230rpx]":t==Y.value.length-1}]),src:n(m)(0==t?"addon/shop/discount/nav-left.png":t==Y.value.length-1?"addon/shop/discount/nav-right.png":"addon/shop/discount/nav-center.png")},null,8,["class","src"])):u("v-if",!0)],64)):u("v-if",!0)])),_:2},1032,["onClick"])))),256))])),_:1},8,["style"])])),_:1})])),_:1})):u("v-if",!0)])),_:1}),Y.value.length?(s(),o(O,{key:0,ref:"mescrollRef",top:re.value,onInit:n(Q),down:{use:!1},onUp:se},{default:r((()=>[i(g,{class:"sidebar-marign bg-[#F4F6F8]"},{default:r((()=>[(s(!0),d(x,null,p(A.value,((e,t)=>(s(),o(g,{key:t,class:f(["bg-[#fff] p-[20rpx] flex rounded-[16rpx]",{"mb-[20rpx]":t<A.value.length-1,"mb-[30rpx]":t==A.value.length-1}]),onClick:t=>(e=>{"active"==e.activeGoods.active_goods_status?T({url:"/addon/shop/pages/goods/detail",param:{sku_id:e.goodsSku.sku_id}}):L({title:`活动${e.activeGoods.active_goods_status_name}`,icon:"none"})})(e)},{default:r((()=>[i(g,{class:"w-[240rpx] h-[240rpx]"},{default:r((()=>[i(b,{width:"240rpx",height:"240rpx",radius:"16rpx",src:n(m)(e.goods_cover_thumb_mid?e.goods_cover_thumb_mid:""),model:"aspectFill"},{error:r((()=>[i(l,{class:"rounded-[16rpx] overflow-hidden w-[240rpx] h-[240rpx]",src:n(m)("static/resource/images/diy/shop_default.jpg"),mode:"aspectFill"},null,8,["src"])])),_:2},1032,["src"])])),_:2},1024),i(g,{class:"ml-[20rpx] flex-1 flex flex-col justify-between"},{default:r((()=>[i(g,null,{default:r((()=>[i(g,{class:"text-[28rpx] font-500 leading-[39rpx] multi-hidden"},{default:r((()=>[v(G(e.goods_name),1)])),_:2},1024),e.goods_label_name&&e.goods_label_name.length?(s(),o(g,{key:0,class:"mt-[10rpx] text-[#999999] text-[24rpx] font-400 multi-hidden"},{default:r((()=>[v(G(e.goods_label_name.map((e=>e.label_name)).join(" | ")),1)])),_:2},1024)):u("v-if",!0)])),_:2},1024),i(g,{class:"w-full h-[80rpx] bg-[#FFECEC] flex justify-between rounded-[40rpx]"},{default:r((()=>[i(g,{class:"mr-[20rpx] pl-[20rpx] flex-1 flex flex-col justify-center"},{default:r((()=>[i(g,{class:"text-[#EF000C] flex items-baseline"},{default:r((()=>[i(_,{class:"text-[20rpx] leading-[26rpx] font-400 price-font"},{default:r((()=>[v("￥")])),_:1}),i(_,{class:"text-[32rpx] leading-[40rpx] font-500 price-font"},{default:r((()=>[v(G(parseFloat(e.goodsSku.active_discount_price).toFixed(2).split(".")[0])+".",1)])),_:2},1024),i(_,{class:"text-[22rpx] leading-[28rpx] font-500 price-font"},{default:r((()=>[v(G(parseFloat(e.goodsSku.active_discount_price).toFixed(2).split(".")[1]),1)])),_:2},1024),e.goodsSku.active_discount_rate<10?(s(),o(g,{key:0,class:"px-[4rpx] border-[1rpx] border-[#EF000C] border-solid text-[18rpx] ml-[6rpx] rounded-[4rpx] leading-[24rpx] transform translate-y-[-4rpx]"},{default:r((()=>[v(G(e.goodsSku.active_discount_rate)+"折",1)])),_:2},1024)):u("v-if",!0)])),_:2},1024),i(g,{class:"flex items-center mt-[2rpx]"},{default:r((()=>[i(g,{class:f(["w-[20rpx] h-[20rpx] mr-[4rpx] rounded-[12.5rpx] text-[#fff] bg-[#EF000C] flex items-center justify-center",{"!bg-[#FF8540]":"active"!=e.activeGoods.active_goods_status}])},{default:r((()=>[i(_,{class:"text-[10rpx] iconzhekou iconfont"})])),_:2},1032,["class"]),i(g,{class:f(["text-[18rpx] font-400 text-[#EF000C] leading-[24rpx]",{"!text-[#FF8540]":"active"!=e.activeGoods.active_goods_status}])},{default:r((()=>[v("已省"+G(e.goodsSku.active_reduce_money)+"元",1)])),_:2},1032,["class"])])),_:2},1024)])),_:2},1024),i(g,{class:f(["active-button w-[106rpx] h-[78rpx] box-border pl-[25rpx] leading-[78rpx] text-[#fff]",{"!w-[116rpx]":"active"!=e.activeGoods.active_goods_status}]),style:c({"background-image":"url("+n(m)("active"!=e.activeGoods.active_goods_status?"addon/shop/discount/no-active.png":"addon/shop/discount/active.png")+")"})},{default:r((()=>["active"!=e.activeGoods.active_goods_status?(s(),o(_,{key:0,class:"text-[26rpx] font-500"},{default:r((()=>[v(G(e.activeGoods.active_goods_status_name),1)])),_:2},1024)):(s(),o(g,{key:1,class:"h-full flex items-center justify-between"},{default:r((()=>[i(_,{class:"text-[40rpx]"},{default:r((()=>[v("抢")])),_:1}),i(_,{class:"text-[20rpx] iconxiayibu iconfont mr-[16rpx]"})])),_:1}))])),_:2},1032,["class","style"])])),_:2},1024)])),_:2},1024)])),_:2},1032,["class","onClick"])))),128)),A.value.length||V.value?u("v-if",!0):(s(),o(g,{key:0,class:f(["flex justify-center w-[100%] items-center",{"h-[calc(100vh-620rpx)]":Y.value.length,"h-[calc(100vh-550rpx)]":!Y.value.length}])},{default:r((()=>[i($,{option:{tip:"暂无商品，请看看其他商品吧！"}})])),_:1},8,["class"]))])),_:1})])),_:1},8,["top","onInit"])):u("v-if",!0),Y.value.length||V.value?u("v-if",!0):(s(),o(g,{key:1,class:"flex flex-col justify-center items-center h-[calc(100vh-550rpx)] fixed left-[30rpx] right-[30rpx]",style:c({top:re.value})},{default:r((()=>[i(y,{text:"暂无活动，请看看其他商品吧！",width:"347rpx",height:"265rpx",icon:n(m)("static/resource/images/system/empty.png")},null,8,["icon"]),i(k,{shape:"circle",plain:"true",class:"w-[220rpx] mt-[42rpx] text-[28rpx] h-[66rpx] leading-[62rpx] !text-[#EF000C] !border-[#EF000C] border-[2rpx] rounded-full",onClick:t[0]||(t[0]=e=>n(T)({url:"/addon/shop/pages/goods/list"}))},{default:r((()=>[v("去逛逛")])),_:1})])),_:1},8,["style"])),i(w,{"bg-color":"rgb(248,248,248)",loading:V.value,loadingText:"",fontSize:"16",color:"#303133"},null,8,["loading"])])),_:1},8,["style"])}}}),[["__scopeId","data-v-4b59ac52"]]);export{P as default};
