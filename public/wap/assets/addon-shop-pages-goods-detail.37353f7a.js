import{d as e,r as t,p as l,m as a,o as r,c as s,w as o,b as u,u as i,Y as d,y as p,z as n,f as c,I as x,J as f,K as _,L as m,C as v,aK as g,H as b,a as h,l as y,bp as k,Q as w,g as j,h as C,i as S,D as F,a2 as O,E as T,G as V,j as L,X as z,s as A,af as I,a7 as B,be as E,a4 as D,b0 as N,b$ as P,n as R,S as J,b3 as U,U as H,V as $,b4 as K}from"./index-d8a8f699.js";import{_ as M}from"./u-swiper.efc69b22.js";import{_ as X}from"./u-count-down.c4f9dc91.js";import{_ as Y}from"./u-avatar.f700209e.js";import{_ as G}from"./u-icon.5ba98c98.js";import{_ as Q}from"./u--image.2df700b8.js";import{_ as W}from"./u-parse.8b113dfe.js";import{_ as Z,a as q}from"./u-popup.0d48946e.js";import{_ as ee}from"./u-loading-page.c740ef13.js";import{d as te,e as le,f as ae,h as re}from"./goods.69affd8d.js";import{b as se,d as oe}from"./coupon.181434da.js";import{_ as ue}from"./u-number-box.a80e7907.js";import{u as ie}from"./cart.d2c6bfc6.js";import{b as de}from"./bind-mobile.63a8d6d0.js";import{_ as pe}from"./_plugin-vue_export-helper.1b428a4d.js";import{_ as ne}from"./share-poster.b1e17ebe.js";import"./u-loading-icon.6808ae8c.js";import"./u-text.b9c32215.js";import"./u-image.e646392b.js";import"./u-transition.db07fff7.js";import"./u-safe-bottom.a4431b09.js";import"./u-form.11d92cf8.js";import"./u-line.d86b0940.js";import"./sms-code.vue_vue_type_script_setup_true_lang.ce239318.js";import"./u-input.9468a367.js";import"./u-modal.3708081d.js";import"./u-checkbox-group.00090a01.js";const ce=pe(e({__name:"ns-goods-sku",props:["goodsDetail"],emits:["change"],setup(e,{expose:L,emit:z}){const A=e,I=t(!1),B=t(null),E=t({skuId:"",name:[]}),D=t(""),N=t(1),P=l((()=>{let e="0.00";return e=Object.keys(K.value).length&&Object.keys(K.value.goods).length&&K.value.goods.is_discount&&K.value.sale_price!=K.value.price?K.value.sale_price:Object.keys(K.value).length&&Object.keys(K.value.goods).length&&K.value.goods.member_discount&&V()&&K.value.member_price!=K.value.price?K.value.member_price:K.value.price,e})),R=a(),J=l((()=>R.info)),U=ie();U.getList();const H=l((()=>U.cartList)),$=()=>{I.value=!1},K=l((()=>{let e=JSON.parse(JSON.stringify(A.goodsDetail));return Object.keys(e).length&&(Object.keys(E.value.name).length||(E.value.name=e.sku_spec_format.split(",")),e.goodsSpec.forEach(((e,t)=>{let l=e.spec_values.split(",");e.values=[],l.forEach(((l,a)=>{e.values[a]={},e.values[a].name=l,e.values[a].selected=!1,e.values[a].disabled=!1,E.value.name.forEach(((r,s)=>{s==t&&r==l&&(e.values[a].selected=!0)}))}))})),M(),e.skuList&&Object.keys(e.skuList).length&&e.skuList.forEach(((t,l)=>{t.sku_id==E.value.skuId&&(e.detail=t)}))),e})),M=()=>{A.goodsDetail.skuList.forEach(((e,t)=>{e.sku_spec_format==E.value.name.toString()&&(E.value.skuId=e.sku_id,z("change",e.sku_id))}))},X=t(null),Y=()=>{if(!J.value)return v().setLoginBack({url:"/addon/shop/pages/goods/detail",param:{sku_id:K.value.sku_id}}),!1;if(uni.getStorageSync("isbindmobile"))return X.value.open(),!1;if("join_cart"==D.value){let e=0,t="";H.value["goods_"+K.value.goods_id]&&H.value["goods_"+K.value.goods_id]["sku_"+K.value.sku_id]&&(e=g(H.value["goods_"+K.value.goods_id]["sku_"+K.value.sku_id].num),t=g(H.value["goods_"+K.value.goods_id]["sku_"+K.value.sku_id].id)),e+=N.value,U.increase({id:t||"",goods_id:K.value.goods_id,sku_id:K.value.sku_id,stock:K.value.stock,sale_price:K.value.sale_price,num:e},0,(()=>{b({title:"加入购物车成功",icon:"none"})}))}else if("buy_now"==D.value){var e={sku_id:K.value.sku_id,num:N.value};uni.setStorage({key:"orderCreateData",data:{sku_data:[e]},success:()=>{h({url:"/addon/shop/pages/order/payment"})}})}$()};return L({open:(e="",t="")=>{D.value=e,I.value=!0,B.value=t}}),(e,t)=>{const l=w,a=j(C("u--image"),Q),v=S,g=F,b=j(C("u-number-box"),ue),h=O,V=T,L=j(C("u-popup"),Z),z=j(C("u-overlay"),q);return r(),s(v,{onTouchmove:t[3]||(t[3]=d((()=>{}),["prevent","stop"]))},{default:o((()=>[u(z,{show:I.value,onClick:$,zIndex:"490"},{default:o((()=>[u(L,{class:"popup-type",show:I.value,onClose:$,mode:"bottom",overlay:!1,zIndex:"500"},{default:o((()=>[i(K).detail?(r(),s(v,{key:0,class:"p-[32rpx] relative",onTouchmove:t[2]||(t[2]=d((()=>{}),["prevent","stop"]))},{default:o((()=>[u(v,{class:"flex mb-[58rpx]"},{default:o((()=>[u(v,{class:"rounded-[8rpx] overflow-hidden"},{default:o((()=>[u(a,{width:"180rpx",height:"180rpx",src:i(y)(i(K).detail.sku_image),onClick:t[0]||(t[0]=e=>(e=>{if(""===e)return!1;var t=[];t.push(y(e)),k({indicator:"number",loop:!0,urls:t})})(i(K).detail.sku_image)),model:"aspectFill"},{error:o((()=>[u(l,{class:"w-[180rpx] h-[180rpx]",src:i(y)("static/resource/images/diy/shop_default.jpg"),mode:"aspectFill"},null,8,["src"])])),_:1},8,["src"])])),_:1}),u(v,{class:"flex flex-1 flex-col ml-[20rpx] py-[10rpx]"},{default:o((()=>[u(v,{class:"w-[100%]"},{default:o((()=>[u(v,{class:"text-[var(--price-text-color)] flex items-baseline"},{default:o((()=>[u(g,{class:"text-[28rpx] font-bold price-font"},{default:o((()=>[p("￥")])),_:1}),u(g,{class:"text-[48rpx] price-font"},{default:o((()=>[p(n(parseFloat(i(P)).toFixed(2).split(".")[0]),1)])),_:1}),u(g,{class:"text-[32rpx] mr-[6rpx] price-font"},{default:o((()=>[p("."+n(parseFloat(i(P)).toFixed(2).split(".")[1]),1)])),_:1})])),_:1}),u(v,{class:"text-[24rpx] leading-[32rpx] text-[#303133] mt-[12rpx]"},{default:o((()=>[p("库存"+n(i(K).detail.stock)+n(i(K).goods.unit),1)])),_:1})])),_:1}),i(K).goodsSpec&&i(K).goodsSpec.length?(r(),s(v,{key:0,class:"w-[100%] mt-auto",style:{"max-height":"calc(204rpx - 98rpx)",overflow:"hidden","box-sizing":"border-box"}},{default:o((()=>[u(g,{class:"text-[24rpx] leading-[30rpx] text-[#666] flex items-center h-[60rpx] mt-[10rpx]"},{default:o((()=>[p("已选规格："+n(i(K).detail.sku_spec_format),1)])),_:1})])),_:1})):c("v-if",!0),c(' \t\t\t\t\t\t<view v-if="goodsDetail.goodsSpec && goodsDetail.goodsSpec.length">\r\n\t\t\t\t\t\t\t\t<text>已选规格：{{goodsDetail.detail.sku_spec_format}}</text>\r\n\t\t\t\t\t\t\t</view> ')])),_:1})])),_:1}),u(h,{class:"h-[500rpx] mb-[30rpx]","scroll-y":"true"},{default:o((()=>[(r(!0),x(_,null,f(i(K).goodsSpec,((e,t)=>(r(),s(v,{class:m({"mt-[36rpx]":0!=t}),key:t},{default:o((()=>[u(v,{class:"text-[26rpx] leading-[36rpx] mb-[24rpx]"},{default:o((()=>[p(n(e.spec_name),1)])),_:2},1024),u(v,{class:"flex flex-wrap"},{default:o((()=>[(r(!0),x(_,null,f(e.values,((e,l)=>(r(),s(v,{class:m(["box-border bg-[#f2f2f2] text-[24rpx] px-[44rpx] text-center h-[56rpx] leading-[52rpx] mr-[20rpx] mb-[20rpx] border-1 border-solid rounded-[50rpx] border-[#f2f2f2]",{"!border-[var(--primary-color)] text-[var(--primary-color)] !bg-[var(--primary-color-light)]":e.selected}]),key:l,onClick:l=>((e,t)=>{E.value.name[t]=e.name,N.value=1,M()})(e,t)},{default:o((()=>[p(n(e.name),1)])),_:2},1032,["class","onClick"])))),128))])),_:2},1024)])),_:2},1032,["class"])))),128)),u(v,{class:"flex justify-between items-center mt-[30rpx]"},{default:o((()=>[u(v,{class:"text-[26rpx]"},{default:o((()=>[p("购买数量")])),_:1}),u(b,{min:1,max:i(K).stock,integer:"",step:1,"input-width":"68rpx",modelValue:N.value,"onUpdate:modelValue":t[1]||(t[1]=e=>N.value=e),"input-height":"52rpx"},{minus:o((()=>[u(g,{class:m(["text-[34rpx] nc-iconfont nc-icon-jianV6xx",{"!text-[#c8c9cc]":1===N.value}])},null,8,["class"])])),input:o((()=>[u(g,{class:"text-[#303133] text-[24rpx] mx-[10rpx] min-w-[56rpx] h-[38rpx] leading-[40rpx] text-center border-[1rpx] border-solid border-[#ddd] rounded-[4rpx]"},{default:o((()=>[p(n(N.value),1)])),_:1})])),plus:o((()=>[u(g,{class:m(["text-[34rpx] nc-iconfont nc-icon-jiahaoV6xx",{"!text-[#c8c9cc]":N.value===i(K).stock}])},null,8,["class"])])),_:1},8,["max","modelValue"])])),_:1})])),_:1}),i(K).detail.stock>0?(r(),s(V,{key:0,class:"!h-[72rpx] leading-[72rpx] text-[26rpx] rounded-[50rpx] primary-btn-bg",type:"primary",onClick:Y},{default:o((()=>[p("确定")])),_:1})):(r(),s(V,{key:1,class:"!h-[72rpx] leading-[72rpx] text-[26rpx] text-[#fff] bg-[#ccc] rounded-[50rpx]"},{default:o((()=>[p("已售罄")])),_:1}))])),_:1})):c("v-if",!0)])),_:1},8,["show"])])),_:1},8,["show"]),c(" 强制绑定手机号 "),u(de,{ref_key:"bindMobileRef",ref:X},null,512)])),_:1})}}}),[["__scopeId","data-v-2a86e3d9"]]),xe=pe(e({__name:"detail",setup(e){const{setShare:g}=J(),q=a(),ue=l((()=>q.info)),pe=ie();l((()=>pe.totalNum));const xe=t(null),fe=t({}),_e=t(!1),me=t(!1),ve=t(!1),ge=t(!1),be=t(!1),he=t(0),ye=t(""),ke=t(""),we=t("");L((e=>{te({goods_id:e.goods_id||"",sku_id:e.sku_id||""}).then((e=>{if(!e.data.goods||"[]"===JSON.stringify(e.data))return b({title:"找不到该商品",icon:"none"}),setTimeout((()=>{h({url:"/addon/shop/pages/index",mode:"reLaunch"})}),600),!1;fe.value=z(e.data),Te.value=fe.value.goods.is_collect,fe.value.delivery_type_list=fe.value.goods.delivery_type_list?Object.values(fe.value.goods.delivery_type_list).map((e=>e.name)):[],fe.value.goods.goods_image=fe.value.goods.goods_image_thumb_big,fe.value.goods.goods_image.forEach(((e,t)=>{fe.value.goods.goods_image[t]=y(e)}));let t=z(e.data);if(fe.value.goods.attr_format=[],t.goods&&t.goods.attr_format){z(JSON.parse(t.goods.attr_format)).forEach(((e,t)=>{(e.attr_child_value_name&&!(e.attr_child_value_name instanceof Array)||e.attr_child_value_name instanceof Array&&e.attr_child_value_name.length)&&fe.value.goods.attr_format.push(e)}))}ye.value=fe.value.goods.goods_name,ke.value="/addon/shop/pages/goods/detail?sku_id="+fe.value.sku_id,we.value=y(fe.value.goods.goods_cover_thumb_mid);let l={title:fe.value.goods.goods_name,desc:fe.value.goods.sub_title,url:fe.value.goods.goods_cover_thumb_mid};if(A({title:fe.value.goods.goods_name}),g({wechat:{...l},weapp:{...l}}),Object.keys(fe.value.goods).length&&fe.value.goods.is_discount&&Object.keys(fe.value.discount_info).length){let e=(new Date).getTime();he.value=1e3*fe.value.discount_info.active.end_time-e.toFixed(0)}ze(),Ie(),Ge(),I((()=>{setTimeout((()=>{const e=U().in(Je);e.select(".swiper-box").boundingClientRect((e=>{Ue=e?e.height:0})).exec(),e.select(".detail-head").boundingClientRect((e=>{e&&(He=e.height?e.height:0)})).exec()}),400)}))}))})),B((()=>{uni.removeStorageSync("distributionType"),pe.getList()}));const je=e=>{fe.value.skuList.forEach(((t,l)=>{t.sku_id==e&&Object.assign(fe.value,t)}))},Ce=l((()=>{let e=!1;return fe.value.skuList.forEach(((t,l)=>{t.sku_spec_format&&(e=!0)})),!(!e&&fe.value.stock<=0)&&(!e&&fe.value.stock,!0)})),Se=l((()=>{let e=!1;return(fe.value.service&&fe.value.service.length||fe.value.goodsSpec&&fe.value.goodsSpec.length||"real"==fe.value.goods.goods_type&&fe.value.delivery_type_list&&fe.value.delivery_type_list.length||Le.value.length)&&(e=!0),e})),Fe=e=>{xe.value.open(e)},Oe=t(null),Te=t(0),Ve=()=>{if(!ue.value)return v().setLoginBack({url:"/addon/shop/pages/goods/detail",param:{sku_id:fe.value.sku_id}}),!1;if(uni.getStorageSync("isbindmobile"))return Oe.value.open(),!1;(Te.value?ae(fe.value.goods_id):re(fe.value.goods_id)).then((e=>{Te.value=!Te.value,Te.value?b({title:"收藏成功",icon:"none"}):b({title:"取消收藏",icon:"none"})}))},Le=t([]),ze=()=>{se({category_id:fe.value.goods.goods_category||"",goods_id:fe.value.goods_id||""}).then((e=>{Le.value=e.data.data.map((e=>(-1!=e.sum_count&&e.receive_count===e.sum_count&&(e.btnType="collected"),ue.value&&e.is_receive&&e.limit_count===e.member_receive_count?e.btnType="using":e.btnType="collecting",e)))}))},Ae=t({count:0}),Ie=()=>{le(fe.value.goods_id).then((e=>{Ae.value=e.data}))},Be=(e,t)=>{if(Array.isArray(e)){if(!e.length)return!1;k({indicator:"number",current:t,loop:!0,urls:l=e})}else{if(""===e)return!1;var l;(l=[]).push(y(e)),k({indicator:"number",loop:!0,urls:l})}},Ee=t(0),De=()=>{ge.value=!0};let Ne=E().platform;const Pe=l((()=>{let e="";return e+="height: 100rpx;",e+="padding-right: 30rpx;",e+="padding-left: 30rpx;",e+="font-size: 32rpx;","ios"===Ne?e+="font-weight: 500;":"android"===Ne&&(e+="font-size: 36rpx;"),e})),Re=l((()=>{let e="";return e+="font-size: 26px;","font-size: 26px;"})),Je=K();let Ue=0,He=0;const $e=t(!1);D((e=>{if(0==Ue||0==He)return;let t=Ue-He-20;$e.value=!1,e.scrollTop>=t&&($e.value=!0)}));const Ke=e=>{"number"==typeof e&&Be(fe.value.goods.goods_image,e)},Me=t(null),Xe=t("");let Ye={};const Ge=()=>{Xe.value="?sku_id="+fe.value.sku_id,ue.value&&ue.value.member_id&&(Xe.value+="&mid="+ue.value.member_id)},Qe=()=>{Ye.sku_id=fe.value.sku_id,ue.value&&ue.value.member_id&&(Ye.member_id=ue.value.member_id),Me.value.openShare()},We=t(""),Ze=l((()=>{let e="0.00";return Object.keys(fe.value).length&&Object.keys(fe.value.goods).length&&fe.value.goods.is_discount&&fe.value.sale_price!=fe.value.price?(e=fe.value.sale_price?fe.value.sale_price:fe.value.price,We.value="discount_price"):Object.keys(fe.value).length&&Object.keys(fe.value.goods).length&&fe.value.goods.member_discount&&V()&&fe.value.member_price!=fe.value.price?(e=fe.value.member_price?fe.value.member_price:fe.value.price,We.value="member_price"):(e=fe.value.price,We.value=""),e}));return N((()=>{P()})),(e,t)=>{const l=F,a=S,g=j(C("u-swiper"),M),b=w,k=j(C("up-count-down"),X),V=j(C("u-avatar"),Y),L=j(C("u-icon"),G),z=j(C("u--image"),Q),A=j(C("u-parse"),W),I=T,B=O,E=j(C("u-popup"),Z),D=j(C("u-loading-page"),ee);return r(),s(a,{style:R(e.themeColor())},{default:o((()=>[Object.keys(fe.value).length?(r(),s(a,{key:0,class:"bg-[#f7f7f7] min-h-[100vh] relative"},{default:o((()=>[c(" 自定义头部 "),u(a,{class:m(["flex items-center fixed left-0 right-0 z-10 bg-transparent detail-head",{"!bg-[#fff]":$e.value}]),style:R(i(Pe))},{default:o((()=>[u(l,{class:"nc-iconfont nc-icon-zuoV6xx",style:R(i(Re)),onClick:t[0]||(t[0]=e=>{H().length>1?$({delta:1}):h({url:"/addon/shop/pages/index",mode:"reLaunch"})})},null,8,["style"]),u(a,{class:m(["ml-auto !pt-[12rpx] !pb-[8rpx] p-[10rpx] bg-[rgba(255,255,255,.4)] rounded-full border-[2rpx] border-solid border-transparent box-border nc-iconfont nc-icon-fenxiangV6xx font-bold text-[#303133] text-[36rpx]",{"border-[#d8d8d8]":$e.value}]),onClick:Qe},null,8,["class"])])),_:1},8,["class","style"]),u(a,{class:"swiper-box"},{default:o((()=>[u(g,{list:fe.value.goods.goods_image,indicator:fe.value.goods.goods_image.length,indicatorStyle:{bottom:"50rpx"},autoplay:!0,height:"100vw",onClick:Ke},null,8,["list","indicator"])])),_:1}),"discount_price"==We.value?(r(),s(a,{key:0,class:"-mt-[26rpx] relative flex items-center justify-between !bg-cover box-border pb-[26rpx] h-[136rpx] px-[30rpx]",style:R({background:"url("+i(y)("addon/shop/detail/discount_price_bg.png")+") no-repeat"})},{default:o((()=>[u(a,{class:"flex text-[#fff]"},{default:o((()=>[u(l,{class:"text-[26rpx] mt-[18rpx] mr-[8rpx]"},{default:o((()=>[p("折扣价")])),_:1}),u(a,{class:"flex"},{default:o((()=>[u(l,{class:"text-[26rpx] mt-[18rpx] font-medium price-font"},{default:o((()=>[p("￥")])),_:1}),u(l,{class:"text-[50rpx] price-font"},{default:o((()=>[p(n(parseFloat(i(Ze)).toFixed(2).split(".")[0]),1)])),_:1}),u(l,{class:"text-[50rpx] price-font"},{default:o((()=>[p("."+n(parseFloat(i(Ze)).toFixed(2).split(".")[1]),1)])),_:1}),fe.value.market_price&&parseFloat(fe.value.market_price)?(r(),s(l,{key:0,class:"text-[26rpx] mt-[18rpx] ml-[10rpx] line-through price-font"},{default:o((()=>[p(" ￥"+n(fe.value.market_price),1)])),_:1})):c("v-if",!0)])),_:1})])),_:1}),u(a,{class:"flex flex-col text-[#fff] items-end"},{default:o((()=>[u(b,{class:"h-[28rpx] mr-[2rpx]",src:i(y)("addon/shop/detail/discount_price.png"),mode:"heightFix"},null,8,["src"]),u(a,{class:"flex items-center text-[24rpx] -mb-[10rpx]"},{default:o((()=>[u(l,{class:"mr-[4rpx]"},{default:o((()=>[p("距结束")])),_:1}),u(k,{class:"text-[#fff] text-[28rpx]",time:he.value,format:"HH:mm:ss"},null,8,["time"])])),_:1})])),_:1})])),_:1},8,["style"])):c("v-if",!0),u(a,{class:"bg-[#f6f6f6] rounded-[16rpx] -mt-[26rpx] relative"},{default:o((()=>[u(a,{class:m(["relative mx-[30rpx] rounded-[16rpx]",{"pt-[30rpx]":"discount_price"==We.value,"pt-[20rpx]":"discount_price"!=We.value}])},{default:o((()=>["discount_price"!=We.value?(r(),s(a,{key:0,class:"text-[var(--price-text-color)] flex items-baseline mb-[16rpx]"},{default:o((()=>[u(l,{class:"text-[32rpx] font-medium price-font"},{default:o((()=>[p("￥")])),_:1}),u(l,{class:"text-[48rpx] price-font"},{default:o((()=>[p(n(parseFloat(i(Ze)).toFixed(2).split(".")[0]),1)])),_:1}),u(l,{class:"text-[32rpx] mr-[10rpx] price-font"},{default:o((()=>[p("."+n(parseFloat(i(Ze)).toFixed(2).split(".")[1]),1)])),_:1}),"member_price"==We.value?(r(),s(b,{key:0,class:"h-[34rpx] mr-[12rpx] w-[80rpx]",src:i(y)("addon/shop/VIP.png"),mode:"heightFix"},null,8,["src"])):c("v-if",!0),fe.value.market_price&&parseFloat(fe.value.market_price)?(r(),s(l,{key:1,class:"text-[26rpx] text-[#999] line-through price-font"},{default:o((()=>[p(" ￥"+n(fe.value.market_price),1)])),_:1})):c("v-if",!0)])),_:1})):c("v-if",!0),u(a,{class:"font-medium text-[32rpx] multi-hidden leading-[40rpx]"},{default:o((()=>[p(n(fe.value.goods.goods_name),1)])),_:1}),u(a,{class:"flex items-start mt-[12rpx] pb-[10rpx]"},{default:o((()=>[fe.value.label_info&&fe.value.label_info.length?(r(),s(a,{key:0,class:"flex flex-wrap"},{default:o((()=>[(r(!0),x(_,null,f(fe.value.label_info,(e=>(r(),s(a,{key:e.label_id,class:"text-[#FA6400] mb-[10rpx] leading-[36rpx] text-[22rpx] h-[40rpx] px-[10rpx] border-[2rpx] border-solid border-[#FA6400] rounded-[4rpx] mr-[15rpx] box-border truncate"},{default:o((()=>[p(n(e.label_name),1)])),_:2},1024)))),128))])),_:1})):c("v-if",!0),u(a,{class:"text-[26rpx] mt-[6rpx] text-[#666] flex items-baseline ml-auto"},{default:o((()=>[u(l,{class:"whitespace-nowrap"},{default:o((()=>[p("销量")])),_:1}),u(l,{class:"mx-[2rpx]"},{default:o((()=>[p(n(fe.value.goods.sale_num),1)])),_:1}),u(l,null,{default:o((()=>[p(n(fe.value.goods.unit),1)])),_:1})])),_:1})])),_:1})])),_:1},8,["class"]),i(Se)?(r(),s(a,{key:0,class:"mt-[20rpx] bg-white sidebar-marign rounded-[16rpx] px-[20rpx] py-[16rpx]"},{default:o((()=>[fe.value.service&&fe.value.service.length?(r(),s(a,{key:0,onClick:t[1]||(t[1]=e=>ve.value=!ve.value),class:"flex items-center h-[64rpx]"},{default:o((()=>[u(l,{class:"text-[#666] text-[26rpx] leading-[30rpx] font-400 shrink-0"},{default:o((()=>[p("服务")])),_:1}),u(a,{class:"text-[#343434] text-[26rpx] leading-[30rpx] font-400 truncate ml-auto"},{default:o((()=>[p(n(fe.value.service[0].service_name),1)])),_:1}),u(l,{class:"nc-iconfont nc-icon-youV6xx text-[26rpx] text-[#666]"})])),_:1})):c("v-if",!0),fe.value.goodsSpec&&fe.value.goodsSpec.length?(r(),s(a,{key:1,onClick:Fe,class:"flex items-center h-[64rpx]"},{default:o((()=>[u(l,{class:"text-[#666] text-[26rpx] leading-[30rpx] font-400 shrink-0 mr-[20rpx]"},{default:o((()=>[p("已选")])),_:1}),u(a,{class:"ml-auto text-right truncate flex-1 text-[#343434] text-[26rpx] leading-[30rpx] font-400"},{default:o((()=>[p(n(fe.value.sku_spec_format),1)])),_:1}),u(l,{class:"nc-iconfont nc-icon-youV6xx text-[26rpx] text-[#666]"})])),_:1})):c("v-if",!0),"real"==fe.value.goods.goods_type&&fe.value.delivery_type_list&&fe.value.delivery_type_list.length?(r(),s(a,{key:2,class:"flex items-center h-[64rpx]",onClick:De},{default:o((()=>[u(l,{class:"text-[#666] text-[26rpx] leading-[30rpx] font-400 shrink-0"},{default:o((()=>[p("配送")])),_:1}),u(a,{class:"ml-auto flex items-center text-[#343434] text-[26rpx] leading-[30rpx] font-400"},{default:o((()=>[p(n(fe.value.delivery_type_list[Ee.value]),1)])),_:1}),u(l,{class:"nc-iconfont nc-icon-youV6xx text-[26rpx] text-[#666]"})])),_:1})):c("v-if",!0),Le.value.length?(r(),s(a,{key:3,onClick:t[2]||(t[2]=e=>be.value=!0),class:"flex items-center h-[64rpx]"},{default:o((()=>[u(l,{class:"text-[#666] text-[26rpx] leading-[30rpx] font-400 shrink-0 mr-[20rpx]"},{default:o((()=>[p("领券")])),_:1}),u(a,{class:"ml-auto flex-1 flex-nowrap flex items-center overflow-hidden h-[44rpx] content-between"},{default:o((()=>[(r(!0),x(_,null,f(Le.value,((e,t)=>(r(),x(_,{key:t},[t<3?(r(),s(l,{key:0,class:m(["text-xs whitespace-nowrap rounded-sm border-[2rpx] px-[6rpx] py-[2rpx] border-solid border-[var(--primary-color)] text-[var(--primary-color)] mt-[4rpx]",{"mr-[8rpx]":Le.value.length!=t+1&&t<2,"ml-auto":0==t}])},{default:o((()=>[p(n(e.title),1)])),_:2},1032,["class"])):c("v-if",!0)],64)))),128))])),_:1}),u(l,{class:"nc-iconfont nc-icon-youV6xx text-[26rpx] text-[#666]"})])),_:1})):c("v-if",!0)])),_:1})):c("v-if",!0),u(a,{class:"mt-[20rpx] bg-white sidebar-marign rounded-[16rpx] px-[20rpx]"},{default:o((()=>[u(a,{class:"flex items-center justify-between h-[80rpx]"},{default:o((()=>[u(l,{class:"text-[28rpx] text-[#303133] font-bold"},{default:o((()=>[p("宝贝评价("+n(Ae.value.count)+")",1)])),_:1}),Ae.value.count?(r(),s(a,{key:0,class:"h-[80rpx] flex items-center",onClick:t[3]||(t[3]=e=>(fe.value.goods_id,void h({url:"/addon/shop/pages/evaluate/list",param:{goods_id:fe.value.goods_id}})))},{default:o((()=>[u(l,{class:"text-[24rpx] text-[#666]"},{default:o((()=>[p("查看全部")])),_:1}),u(l,{class:"nc-iconfont nc-icon-youV6xx text-[26rpx] text-[#666]"})])),_:1})):c("v-if",!0),Ae.value.count?c("v-if",!0):(r(),s(l,{key:1,class:"text-[24rpx] text-[#666]"},{default:o((()=>[p("暂无评价")])),_:1}))])),_:1}),u(a,null,{default:o((()=>[(r(!0),x(_,null,f(Ae.value.list,((e,t)=>(r(),s(a,{class:"pb-[20rpx]",key:t},{default:o((()=>[u(a,{class:"flex items-center w-full"},{default:o((()=>[u(V,{"default-url":i(y)("static/resource/images/default_headimg.png"),src:i(y)(e.member_head),size:"30rpx",leftIcon:"none"},null,8,["default-url","src"]),u(l,{class:"ml-[10rpx] text-[22rpx] text-[#999]"},{default:o((()=>[p(n(e.member_name),1)])),_:2},1024)])),_:2},1024),u(a,{class:"flex justify-between w-full mt-[10rpx]"},{default:o((()=>[u(a,{class:"flex-1 w-[540rpx] text-[26rpx] text-[#303133] max-h-[72rpx] leading-[36rpx] multi-hidden mr-[50rpx]"},{default:o((()=>[p(n(e.content),1)])),_:2},1024),u(a,{class:"w-[80rpx] shrink-0"},{default:o((()=>[e.image_mid&&e.image_mid.length?(r(),s(z,{key:0,width:"80rpx",height:"80rpx",radius:"8rpx",src:i(y)(e.image_mid[0]),model:"aspectFill",onClick:t=>Be(e.images[0])},{error:o((()=>[u(L,{name:"photo",color:"#999",size:"50"})])),_:2},1032,["src","onClick"])):c("v-if",!0)])),_:2},1024)])),_:2},1024)])),_:2},1024)))),128))])),_:1})])),_:1}),fe.value.goods&&fe.value.goods.attr_format&&Object.keys(fe.value.goods.attr_format).length?(r(),s(a,{key:1,class:"my-[20rpx] bg-white sidebar-marign rounded-[16rpx] px-[20rpx] pb-[20rpx]"},{default:o((()=>[u(a,{class:"text-[28rpx] h-[80rpx] leading-[80rpx] font-bold"},{default:o((()=>[p("商品属性")])),_:1}),u(a,{class:"border-[2rpx] border-solid border-[#f1f1f1] border-b-0"},{default:o((()=>[(r(!0),x(_,null,f(fe.value.goods.attr_format,((e,t)=>(r(),x(_,{key:t},[t<4||_e.value?(r(),s(a,{key:0,class:"flex border-0 border-solid border-[#f1f1f1] border-b-[2rpx]"},{default:o((()=>[u(a,{class:"w-[30%] px-[18rpx] py-[8rpx] text-[24rpx] min-h-[70rpx] break-all box-border flex items-center border-0 border-solid border-[#f1f1f1] border-r-[2rpx] bg-[#fbfafa]"},{default:o((()=>[p(n(e.attr_value_name),1)])),_:2},1024),u(a,{class:"w-[70%] px-[18rpx] py-[8rpx] text-[24rpx] min-h-[70rpx] break-all flex items-center box-border"},{default:o((()=>[p(n(Array.isArray(e.attr_child_value_name)?e.attr_child_value_name.join(","):e.attr_child_value_name),1)])),_:2},1024)])),_:2},1024)):c("v-if",!0)],64)))),128)),fe.value.goods.attr_format.length>4?(r(),s(a,{key:0,class:"flex items-center justify-center h-[70rpx] border-0 border-solid border-[#f1f1f1] border-b-[2rpx]",onClick:t[4]||(t[4]=e=>_e.value=!_e.value)},{default:o((()=>[u(l,{class:"text-[24rpx] mr-[10rpx]"},{default:o((()=>[p(n(_e.value?"收起":"展开"),1)])),_:1}),u(l,{class:m(["nc-iconfont !text-[22rpx]",{"nc-icon-xiaV6xx":!_e.value,"nc-icon-shangV6xx-1":_e.value}])},null,8,["class"])])),_:1})):c("v-if",!0)])),_:1})])),_:1})):c("v-if",!0),u(a,{class:"my-[20rpx] bg-white sidebar-marign rounded-[16rpx] px-[20rpx] pb-[20rpx]"},{default:o((()=>[u(a,{class:"text-[28rpx] h-[80rpx] leading-[80rpx] font-bold"},{default:o((()=>[p("商品详情")])),_:1}),u(a,{class:"u-content"},{default:o((()=>[u(A,{content:fe.value.goods.goods_desc,tagStyle:{img:"vertical-align: top;",p:"overflow: hidden;word-break:break-word;"}},null,8,["content"])])),_:1})])),_:1}),u(a,{class:"tab-bar-placeholder"}),u(a,{class:"w-[100%] flex justify-between px-[27rpx] bg-[#fff] box-border fixed left-0 bottom-0 tab-bar z-1 items-center"},{default:o((()=>[u(a,{class:"flex items-center ml-[10rpx]"},{default:o((()=>[u(a,{class:"flex flex-col justify-center items-center mr-[39rpx]",onClick:t[5]||(t[5]=e=>i(h)({url:"/addon/shop/pages/index",mode:"reLaunch"}))},{default:o((()=>[u(a,{class:"nc-iconfont nc-icon-shouyeV6xx text-[36rpx]"}),u(l,{class:"text-[20rpx] mt-[10rpx]"},{default:o((()=>[p("首页")])),_:1})])),_:1}),u(a,{class:"flex flex-col justify-center items-center mr-[39rpx]",onClick:Qe},{default:o((()=>[u(a,{class:"nc-iconfont nc-icon-fenxiangV6xx text-[36rpx]"}),u(l,{class:"text-[20rpx] mt-[10rpx]"},{default:o((()=>[p("分享")])),_:1})])),_:1}),u(a,{class:"flex flex-col justify-center items-center",onClick:Ve},{default:o((()=>[u(l,{class:m(["nc-iconfont text-[36rpx]",{"text-[#ff0000] nc-icon-xihuanV6mm":Te.value,"text-[#303133] nc-icon-guanzhuV6xx":!Te.value}])},null,8,["class"]),u(l,{class:"text-[20rpx] mt-[10rpx]"},{default:o((()=>[p("收藏")])),_:1})])),_:1})])),_:1}),1==fe.value.goods.status?(r(),s(a,{key:0,class:"flex"},{default:o((()=>["real"==fe.value.goods.goods_type||"virtual"==fe.value.goods.goods_type&&"verify"!=fe.value.goods.virtual_receive_type?(r(),s(I,{key:0,class:"!w-[200rpx] !h-[72rpx] text-[26rpx] !text-[#fff] !m-0 !mr-[20rpx] leading-[72rpx] rounded-full remove-border",style:{background:"linear-gradient(127deg, #FFB000 0%, #FFA029 100%)"},onClick:t[6]||(t[6]=e=>Fe("join_cart"))},{default:o((()=>[p(" 加入购物车")])),_:1})):c("v-if",!0),i(Ce)?(r(),s(I,{key:1,style:R({width:"real"==fe.value.goods.goods_type||"virtual"==fe.value.goods.goods_type&&"verify"!=fe.value.goods.virtual_receive_type?"200rpx":"420rpx!important"}),class:"!h-[72rpx] text-[26rpx] !text-[#fff] primary-btn-bg !m-0 leading-[72rpx] rounded-full remove-border",onClick:t[7]||(t[7]=e=>Fe("buy_now"))},{default:o((()=>[p("立即购买")])),_:1},8,["style"])):(r(),s(I,{key:2,style:R({width:"real"==fe.value.goods.goods_type||"virtual"==fe.value.goods.goods_type&&"verify"!=fe.value.goods.virtual_receive_type?"200rpx":"420rpx!important"}),class:"!h-[72rpx] text-[26rpx] !text-[#fff] !bg-[#ccc] !m-0 leading-[72rpx] rounded-full remove-border"},{default:o((()=>[p("已售罄")])),_:1},8,["style"]))])),_:1})):(r(),s(a,{key:1,class:"flex flex-1 ml-[40rpx]"},{default:o((()=>[u(I,{class:"w-[100%] !h-[72rpx] text-[26rpx] !text-[#fff] !bg-[#ccc] !m-0 leading-[72rpx] rounded-full remove-border"},{default:o((()=>[p("该商品已下架")])),_:1})])),_:1}))])),_:1})])),_:1}),c(" 服务 "),u(a,{onTouchmove:t[10]||(t[10]=d((()=>{}),["prevent","stop"]))},{default:o((()=>[u(E,{class:"popup-type",show:ve.value,onClose:t[9]||(t[9]=e=>ve.value=!1)},{default:o((()=>[u(a,{class:"min-h-[480rpx]",onTouchmove:t[8]||(t[8]=d((()=>{}),["prevent","stop"]))},{default:o((()=>[u(a,{class:"flex items-center justify-center py-[34rpx] relative"},{default:o((()=>[u(l,{class:"text-[32rpx] leading-[36rpx] font-500"},{default:o((()=>[p("商品服务")])),_:1})])),_:1}),u(B,{class:"h-[520rpx]","scroll-y":"true"},{default:o((()=>[u(a,{class:"pl-[22rpx] py-[28rpx] pr-[37rpx]"},{default:o((()=>[(r(!0),x(_,null,f(fe.value.service,((e,t)=>(r(),s(a,{class:"flex mb-[28rpx]"},{default:o((()=>[u(b,{class:"max-w-[34rpx] max-h-[34rpx] mr-[14rpx]",src:i(y)(e.image||"addon/shop/icon_service.png"),mode:"aspectFit"},null,8,["src"]),u(a,{class:"flex-1"},{default:o((()=>[u(a,{class:"text-[26rpx] leading-[36rpx] text-[#222] mb-[4rpx] w-[643rpx]"},{default:o((()=>[p(n(e.service_name),1)])),_:2},1024),u(a,{class:"text-[22rpx] leading-[36rpx] text-[#888] w-[643rpx]"},{default:o((()=>[p(n(e.desc),1)])),_:2},1024)])),_:2},1024)])),_:2},1024)))),256))])),_:1})])),_:1})])),_:1})])),_:1},8,["show"])])),_:1}),c(" 配送 "),u(a,{onTouchmove:t[13]||(t[13]=d((()=>{}),["prevent","stop"]))},{default:o((()=>[u(E,{class:"popup-type",show:ge.value,onClose:t[12]||(t[12]=e=>ge.value=!1)},{default:o((()=>[u(a,{class:"min-h-[360rpx]",onTouchmove:t[11]||(t[11]=d((()=>{}),["prevent","stop"]))},{default:o((()=>[u(a,{class:"flex items-center justify-center py-[34rpx] relative"},{default:o((()=>[u(l,{class:"text-[32rpx] leading-[36rpx] font-500"},{default:o((()=>[p("配送方式")])),_:1})])),_:1}),u(B,{class:"h-[520rpx]","scroll-y":"true"},{default:o((()=>[u(a,{class:"pl-[22rpx] pt-[28rpx] pr-[37rpx]"},{default:o((()=>[(r(!0),x(_,null,f(fe.value.delivery_type_list,((e,t)=>(r(),s(a,{class:"flex mb-[28rpx]",onClick:l=>((e,t)=>{Ee.value=t,ge.value=!1,uni.setStorageSync("distributionType",e)})(e,t)},{default:o((()=>[u(b,{class:"w-[34rpx] h-[34rpx] mr-[14rpx]",src:i(y)("addon/shop/icon_service.png"),mode:"aspectFit"},null,8,["src"]),u(a,{class:"flex-1"},{default:o((()=>[u(a,{class:"text-[26rpx] leading-[36rpx] text-[#222] mb-[4rpx]"},{default:o((()=>[p(n(e),1)])),_:2},1024),u(a,{class:"text-[22rpx] leading-[36rpx] text-[#888]"},{default:o((()=>[p(n(e),1)])),_:2},1024)])),_:2},1024)])),_:2},1032,["onClick"])))),256))])),_:1})])),_:1})])),_:1})])),_:1},8,["show"])])),_:1}),c(" 优惠券 "),u(a,{onTouchmove:t[17]||(t[17]=d((()=>{}),["prevent","stop"]))},{default:o((()=>[u(E,{class:"popup-type",show:be.value,onClose:t[16]||(t[16]=e=>be.value=!1)},{default:o((()=>[u(a,{class:"min-h-[480rpx]",onTouchmove:t[15]||(t[15]=d((()=>{}),["prevent","stop"]))},{default:o((()=>[u(a,{class:"flex items-center justify-center py-[34rpx] relative"},{default:o((()=>[u(l,{class:"text-[32rpx] leading-[36rpx] font-500"},{default:o((()=>[p("优惠券")])),_:1})])),_:1}),u(B,{class:"h-[520rpx]","scroll-y":"true"},{default:o((()=>[u(a,{class:"px-[20rpx]"},{default:o((()=>[(r(!0),x(_,null,f(Le.value,((e,t)=>(r(),s(a,{class:"mb-[30rpx] flex items-center border-[2rpx] border-solid border-[rgba(0,0,0,.1)] rounded",key:t},{default:o((()=>[u(a,{class:"flex flex-col items-center py-[20rpx] w-[240rpx] border-0 border-r-[2rpx] border-dashed border-[rgba(0,0,0,.1)]"},{default:o((()=>[u(a,{class:"text-xs price-font"},{default:o((()=>[u(l,{class:"text-[28rpx]"},{default:o((()=>[p("￥")])),_:1}),u(l,{class:"text-[48rpx]"},{default:o((()=>[p(n(e.price),1)])),_:2},1024)])),_:2},1024),u(l,{class:"text-xs mt-[12rpx]"},{default:o((()=>[p(n(Number(e.min_condition_money)?"满"+e.min_condition_money+"元可以使用":"无门槛优惠券"),1)])),_:2},1024)])),_:2},1024),u(a,{class:"ml-[20rpx] flex-1 flex flex-col py-[20rpx]"},{default:o((()=>[u(l,{class:"text-xs"},{default:o((()=>[p(n(e.title),1)])),_:2},1024),u(l,{class:"text-xs text-[#ABABAB] mt-[12rpx]"},{default:o((()=>[p(n(1==e.valid_type&&"领取之日起"+e.length+"天内有效"||2==e.valid_type&&"领取之日起至"+e.valid_end_time),1)])),_:2},1024)])),_:2},1024),"collecting"===e.btnType?(r(),s(l,{key:0,class:"bg-[var(--primary-color)] rounded-2xl text-[#fff] text-xs mr-[20rpx] py-[8rpx] px-[16rpx]",onClick:t=>{return l=e,ue.value?uni.getStorageSync("isbindmobile")?(Oe.value.open(),!1):void oe({coupon_id:l.id||"",number:1}).then((e=>{ze()})):(v().setLoginBack({url:"/addon/shop/pages/goods/detail",param:{sku_id:fe.value.sku_id}}),!1);var l}},{default:o((()=>[p("领取")])),_:2},1032,["onClick"])):(r(),s(l,{key:1,class:"!bg-[#fff] rounded-2xl text-[#ABABAB] text-xs mr-[20rpx] py-[8rpx] px-[16rpx]"},{default:o((()=>[p(n("collected"===e.btnType?"已领完":"已领取"),1)])),_:2},1024))])),_:2},1024)))),128))])),_:1})])),_:1}),u(a,{class:"px-[32rpx] pb-[67rpx] pt-[42rpx]"},{default:o((()=>[u(I,{class:"!w-[100%] !h-[72rpx] text-[26rpx] !bg-[var(--primary-color)] !text-[#fff] !m-0 rounded-full leading-[72rpx]",onClick:t[14]||(t[14]=e=>be.value=!1)},{default:o((()=>[p("确定")])),_:1})])),_:1})])),_:1})])),_:1},8,["show"])])),_:1}),u(ce,{ref_key:"goodsSkuRef",ref:xe,"goods-detail":fe.value,onChange:je},null,8,["goods-detail"]),u(ne,{ref_key:"sharePosterRef",ref:Me,posterType:"shop_goods",posterId:fe.value.goods.poster_id,posterParam:i(Ye),copyUrlParam:Xe.value},null,8,["posterId","posterParam","copyUrlParam"])])),_:1})):c("v-if",!0),u(D,{"bg-color":"rgb(248,248,248)",loading:me.value,loadingText:"",fontSize:"16",color:"#303133"},null,8,["loading"]),c(" 强制绑定手机号 "),u(de,{ref_key:"bindMobileRef",ref:Oe},null,512)])),_:1},8,["style"])}}}),[["__scopeId","data-v-209cf307"]]);export{xe as default};
