import{d as e,r as t,p as a,m as l,o as r,c as s,w as o,b as i,u as p,Y as u,y as n,z as d,f as c,I as x,K as f,J as _,L as m,C as v,a as g,l as b,bp as h,i as y,Q as k,g as w,h as j,D as C,a2 as S,E as F,x as V,G as O,j as T,H as z,X as L,s as E,af as I,a7 as A,be as U,a4 as D,b0 as J,b$ as P,n as R,S as N,b3 as $,U as X,V as Y,b4 as B}from"./index-d8a8f699.js";import{_ as G}from"./u-swiper.efc69b22.js";import{_ as H}from"./u-avatar.f700209e.js";import{_ as K}from"./u-icon.5ba98c98.js";import{_ as M}from"./u--image.2df700b8.js";import{_ as Q}from"./u-parse.8b113dfe.js";import{_ as W}from"./u-popup.0d48946e.js";import{_ as Z}from"./u-loading-page.c740ef13.js";import{e as q}from"./goods.0e06a97b.js";import{c as ee}from"./point.83a6c3c8.js";import{_ as te}from"./u-number-box.a80e7907.js";import{b as ae}from"./bind-mobile.63a8d6d0.js";import{_ as le}from"./_plugin-vue_export-helper.1b428a4d.js";import{_ as re}from"./share-poster.b1e17ebe.js";import"./u-loading-icon.6808ae8c.js";import"./u-text.b9c32215.js";import"./u-image.e646392b.js";import"./u-transition.db07fff7.js";import"./u-safe-bottom.a4431b09.js";import"./u-form.11d92cf8.js";import"./u-line.d86b0940.js";import"./sms-code.vue_vue_type_script_setup_true_lang.ce239318.js";import"./u-input.9468a367.js";import"./u-modal.3708081d.js";import"./u-checkbox-group.00090a01.js";const se=le(e({__name:"goods-sku",props:["goodsDetail"],emits:["change"],setup(e,{expose:T,emit:z}){const L=e,E=t(!1),I=t(null),A=t({skuId:"",name:[]}),U=t(""),D=t(1),J=a((()=>{let e="0.00";return e=Object.keys($.value).length&&Object.keys($.value.goods).length&&$.value.goods.is_discount&&$.value.sale_price!=$.value.price?$.value.sale_price?$.value.sale_price:$.value.price:Object.keys($.value).length&&Object.keys($.value.goods).length&&$.value.goods.member_discount&&O()&&$.value.member_price!=$.value.price&&$.value.member_price?$.value.member_price:$.value.price,e})),P=l(),R=a((()=>P.info)),N=()=>{E.value=!1},$=a((()=>{let e=JSON.parse(JSON.stringify(L.goodsDetail));return Object.keys(e).length&&(Object.keys(A.value.name).length||(A.value.name=e.sku_spec_format.split(",")),e.goodsSpec.forEach(((e,t)=>{let a=e.spec_values.split(",");e.values=[],a.forEach(((a,l)=>{e.values[l]={},e.values[l].name=a,e.values[l].selected=!1,e.values[l].disabled=!1,A.value.name.forEach(((r,s)=>{s==t&&r==a&&(e.values[l].selected=!0)}))}))})),X(),e.skuList&&Object.keys(e.skuList).length&&e.skuList.forEach(((t,a)=>{t.sku_id==A.value.skuId&&(e.detail=t)}))),e})),X=()=>{L.goodsDetail.skuList.forEach(((e,t)=>{e.sku_spec_format==A.value.name.toString()&&(A.value.skuId=e.sku_id,z("change",e.sku_id))}))},Y=t(null),B=()=>{if(!R.value)return v().setLoginBack({url:"/addon/phone_shop/pages/point/detail",param:{id:$.value.exchange_id}}),!1;if(uni.getStorageSync("isbindmobile"))return Y.value.open(),!1;var e={sku_id:$.value.sku_id,num:D.value};uni.setStorage({key:"orderCreateData",data:{sku_data:[e]},success:()=>{g({url:"/addon/phone_shop/pages/point/payment"})}}),N()};return T({open:(e="",t="")=>{U.value=e,E.value=!0,I.value=t}}),(e,t)=>{const a=y,l=k,v=w(j("u--image"),M),g=C,O=w(j("u-number-box"),te),T=S,z=F,L=w(j("u-popup"),W);return r(),s(a,{onTouchmove:t[3]||(t[3]=u((()=>{}),["prevent","stop"]))},{default:o((()=>[i(L,{class:"popup-type",show:E.value,onClose:N,mode:"bottom"},{default:o((()=>[p($).detail?(r(),s(a,{key:0,class:"p-[32rpx] relative",onTouchmove:t[2]||(t[2]=u((()=>{}),["prevent","stop"]))},{default:o((()=>[i(a,{class:"absolute right-[37rpx] nc-iconfont nc-icon-guanbiV6xx text-[36rpx]",onClick:N}),i(a,{class:"flex mb-[58rpx]"},{default:o((()=>[i(a,{class:"rounded-[8rpx] overflow-hidden"},{default:o((()=>[i(v,{width:"180rpx",height:"180rpx",src:p(b)(p($).detail.sku_image),onClick:t[0]||(t[0]=e=>(e=>{if(""===e)return!1;var t=[];t.push(b(e)),h({indicator:"number",loop:!0,urls:t})})(p($).detail.sku_image)),model:"aspectFill"},{error:o((()=>[i(l,{class:"w-[180rpx] h-[180rpx]",src:p(b)("static/resource/images/diy/shop_default.jpg"),mode:"aspectFill"},null,8,["src"])])),_:1},8,["src"])])),_:1}),i(a,{class:"flex flex-1 flex-col ml-[20rpx] py-[10rpx]"},{default:o((()=>[i(a,{class:"w-[100%]"},{default:o((()=>[i(a,{class:"text-[var(--price-text-color)] flex items-baseline"},{default:o((()=>[p($).point?(r(),s(g,{key:0,class:"text-[44rpx] leading-[62rpx] price-font"},{default:o((()=>[n(d(p($).point)+d(p(V)("point")),1)])),_:1})):c("v-if",!0),p($).point&&parseFloat(p($).price)?(r(),s(g,{key:1,class:"text-[36rpx] mb-[10rpx]"},{default:o((()=>[n("+")])),_:1})):c("v-if",!0),parseFloat(p($).price)?(r(),x(f,{key:2},[i(g,{class:"text-[28rpx] font-bold price-font"},{default:o((()=>[n("￥")])),_:1}),i(g,{class:"text-[48rpx] price-font"},{default:o((()=>[n(d(parseFloat(p($).price).toFixed(2).split(".")[0]),1)])),_:1}),i(g,{class:"text-[32rpx] mr-[6rpx] price-font"},{default:o((()=>[n("."+d(parseFloat(p($).price).toFixed(2).split(".")[1]),1)])),_:1})],64)):c("v-if",!0),p($).point||parseFloat(p($).price)?c("v-if",!0):(r(),x(f,{key:3},[i(g,{class:"text-[28rpx] font-bold price-font"},{default:o((()=>[n("￥")])),_:1}),i(g,{class:"text-[48rpx] price-font"},{default:o((()=>[n(d(parseFloat(p($).price).toFixed(2).split(".")[0]),1)])),_:1}),i(g,{class:"text-[32rpx] mr-[6rpx] price-font"},{default:o((()=>[n("."+d(parseFloat(p(J)).toFixed(2).split(".")[1]),1)])),_:1})],64))])),_:1}),i(a,{class:"text-[24rpx] leading-[32rpx] text-[#303133] mt-[12rpx]"},{default:o((()=>[n(" 库存"+d(p($).detail.stock)+d(p($).goods.unit),1)])),_:1})])),_:1}),p($).goodsSpec&&p($).goodsSpec.length?(r(),s(a,{key:0,class:"w-[100%] mt-auto",style:{"max-height":"calc(204rpx - 98rpx)",overflow:"hidden"}},{default:o((()=>[i(g,{class:"text-[24rpx] leading-[30rpx] text-[#666]"},{default:o((()=>[n("已选规格："+d(p($).detail.sku_spec_format),1)])),_:1})])),_:1})):c("v-if",!0)])),_:1})])),_:1}),i(T,{class:"h-[500rpx] mb-[30rpx]","scroll-y":"true"},{default:o((()=>[(r(!0),x(f,null,_(p($).goodsSpec,((e,t)=>(r(),s(a,{class:m({"mt-[36rpx]":0!=t}),key:t},{default:o((()=>[i(a,{class:"text-[26rpx] leading-[36rpx] mb-[24rpx]"},{default:o((()=>[n(d(e.spec_name),1)])),_:2},1024),i(a,{class:"flex flex-wrap"},{default:o((()=>[(r(!0),x(f,null,_(e.values,((e,l)=>(r(),s(a,{class:m(["box-border bg-[#f2f2f2] text-[24rpx] px-[44rpx] text-center h-[56rpx] leading-[56rpx] mr-[20rpx] mb-[20rpx] border-1 border-solid rounded-[50rpx] border-[#f2f2f2]",{"!border-[var(--primary-color)] text-[var(--primary-color)] !bg-[var(--primary-color-light)]":e.selected}]),key:l,onClick:a=>((e,t)=>{A.value.name[t]=e.name,D.value=1,X()})(e,t)},{default:o((()=>[n(d(e.name),1)])),_:2},1032,["class","onClick"])))),128))])),_:2},1024)])),_:2},1032,["class"])))),128)),i(a,{class:"flex justify-between items-center mt-[30rpx]"},{default:o((()=>[i(a,{class:"text-[26rpx]"},{default:o((()=>[n("购买数量")])),_:1}),i(O,{min:1,max:parseInt(p($).detail.limit_num)<p($).stock?parseInt(p($).detail.limit_num):p($).stock,integer:"",step:1,"input-width":"98rpx",modelValue:D.value,"onUpdate:modelValue":t[1]||(t[1]=e=>D.value=e),"input-height":"54rpx"},{minus:o((()=>[i(g,{class:m(["text-[34rpx] nc-iconfont nc-icon-jianV6xx",{"!text-[#c8c9cc]":1===D.value}])},null,8,["class"])])),input:o((()=>[i(g,{class:"text-[#303133] text-[24rpx] mx-[10rpx] min-w-[56rpx] h-[38rpx] leading-[40rpx] text-center border-[1rpx] border-solid border-[#ddd] rounded-[4rpx]"},{default:o((()=>[n(d(D.value),1)])),_:1})])),plus:o((()=>[i(g,{class:m(["text-[34rpx] nc-iconfont nc-icon-jiahaoV6xx",{"!text-[#c8c9cc]":D.value===p($).stock||D.value==parseInt(p($).detail.limit_num)}])},null,8,["class"])])),_:1},8,["max","modelValue"])])),_:1})])),_:1}),p($).detail.stock>0?(r(),s(z,{key:0,class:"!h-[72rpx] primary-btn-bg leading-[72rpx] text-[26rpx] rounded-[50rpx]",type:"primary",onClick:B},{default:o((()=>[n("确定")])),_:1})):(r(),s(z,{key:1,class:"!h-[72rpx] leading-[72rpx] text-[26rpx] text-[#fff] bg-[#ccc] rounded-[50rpx]"},{default:o((()=>[n("已售罄")])),_:1}))])),_:1})):c("v-if",!0)])),_:1},8,["show"]),c(" 强制绑定手机号 "),i(ae,{ref_key:"bindMobileRef",ref:Y},null,512)])),_:1})}}}),[["__scopeId","data-v-a4246667"]]),oe=le(e({__name:"detail",setup(e){const{setShare:v}=N(),O=l(),te=a((()=>O.info)),ae=t(""),le=t(""),oe=t(""),ie=t(null),pe=t({}),ue=t(!1),ne=t(!1),de=t(!1),ce=t(!1);T((e=>{ee(e.id||"").then((e=>{if("[]"===JSON.stringify(e.data))return z({title:"找不到该商品",icon:"none"}),setTimeout((()=>{g({url:"/addon/phone_shop/pages/index",mode:"reLaunch"})}),600),!1;pe.value=L(e.data),pe.value.delivery_type_list=pe.value.goods.delivery_type_list?Object.values(pe.value.goods.delivery_type_list).map((e=>e.name)):[],pe.value.goods.goods_image=pe.value.goods.goods_image_thumb_big,pe.value.goods.goods_image.forEach(((e,t)=>{pe.value.goods.goods_image[t]=b(e)}));let t=L(e.data);if(pe.value.goods.attr_format=[],t.goods&&t.goods.attr_format){L(JSON.parse(t.goods.attr_format)).forEach(((e,t)=>{(e.attr_child_value_name&&!(e.attr_child_value_name instanceof Array)||e.attr_child_value_name instanceof Array&&e.attr_child_value_name.length)&&pe.value.goods.attr_format.push(e)}))}ae.value=pe.value.goods.goods_name,le.value="/addon/phone_shop/pages/point/detail?sku_id="+pe.value.sku_id,oe.value=b(pe.value.goods.goods_cover_thumb_mid);let a={title:pe.value.goods.goods_name,desc:pe.value.goods.sub_title,url:pe.value.goods.goods_cover_thumb_mid};E({title:pe.value.goods.goods_name}),v({wechat:{...a},weapp:{...a}}),ge(),Ee(),I((()=>{setTimeout((()=>{const e=$().in(Ce);e.select(".swiper-box").boundingClientRect((e=>{Se=e?e.height:0})).exec(),e.select(".detail-head").boundingClientRect((e=>{e&&(Fe=e.height?e.height:0)})).exec()}),400)}))}))})),A((()=>{uni.removeStorageSync("distributionType")}));const xe=e=>{pe.value.skuList.forEach(((t,a)=>{t.sku_id==e&&Object.assign(pe.value,t)}))},fe=a((()=>{let e=!1;return pe.value.skuList.forEach(((t,a)=>{t.sku_spec_format&&(e=!0)})),!(!e&&pe.value.stock<=0)&&(!e&&pe.value.stock,!0)})),_e=a((()=>{let e=!1;return(pe.value.service&&pe.value.service.length||pe.value.goodsSpec&&pe.value.goodsSpec.length||"real"==pe.value.goods.goods_type&&pe.value.delivery_type_list&&pe.value.delivery_type_list.length)&&(e=!0),e})),me=e=>{ie.value.open(e)},ve=t({count:0}),ge=()=>{q(pe.value.goods_id).then((e=>{ve.value=e.data}))},be=(e,t)=>{if(Array.isArray(e)){var a=e;if(!e.length)return!1;h({indicator:"number",current:t,loop:!0,urls:a})}else{if(""===e)return!1;(a=[]).push(b(e)),h({indicator:"number",loop:!0,urls:a})}},he=t(0),ye=()=>{ce.value=!0};let ke=U().platform;const we=a((()=>{let e="";return e+="height: 100rpx;",e+="padding-right: 30rpx;",e+="padding-left: 30rpx;",e+="font-size: 32rpx;","ios"===ke?e+="font-weight: 500;":"android"===ke&&(e+="font-size: 36rpx;"),e})),je=a((()=>{let e="";return e+="font-size: 26px;","font-size: 26px;"})),Ce=B();let Se=0,Fe=0;const Ve=t(!1);D((e=>{let t=Se-Fe-20;Ve.value=!1,e.scrollTop>=t&&(Ve.value=!0)}));const Oe=e=>{"number"==typeof e&&be(pe.value.goods.goods_image,e)},Te=t(null),ze=t("");let Le={};const Ee=()=>{ze.value="?id="+pe.value.exchange_id,te.value&&te.value.member_id&&(ze.value+="&mid="+te.value.member_id)},Ie=()=>{Le.id=pe.value.exchange_id,te.value&&te.value.member_id&&(Le.member_id=te.value.member_id),Te.value.openShare()};return J((()=>{P()})),(e,t)=>{const a=C,l=y,v=w(j("u-swiper"),G),h=w(j("u-avatar"),H),O=w(j("u-icon"),K),T=w(j("u--image"),M),z=w(j("u-parse"),Q),L=F,E=k,I=S,A=w(j("u-popup"),W),U=w(j("u-loading-page"),Z);return r(),s(l,{style:R(e.themeColor())},{default:o((()=>[Object.keys(pe.value).length?(r(),s(l,{key:0,class:"bg-[#f7f7f7] min-h-[100vh] relative"},{default:o((()=>[c(" 自定义头部 "),i(l,{class:m(["flex items-center fixed left-0 right-0 z-10 bg-transparent detail-head",{"!bg-[#fff]":Ve.value}]),style:R(p(we))},{default:o((()=>[i(a,{class:"nc-iconfont nc-icon-zuoV6xx",style:R(p(je)),onClick:t[0]||(t[0]=e=>{X().length>1?Y({delta:1}):g({url:"/addon/phone_shop/pages/index",mode:"reLaunch"})})},null,8,["style"]),i(l,{class:m(["ml-auto !pt-[12rpx] !pb-[8rpx] p-[10rpx] bg-[rgba(255,255,255,.4)] rounded-full border-[2rpx] border-solid border-transparent box-border nc-iconfont nc-icon-fenxiangV6xx font-bold text-[#303133] text-[36rpx]",{"border-[#d8d8d8]":Ve.value}]),onClick:Ie},null,8,["class"])])),_:1},8,["class","style"]),i(l,{class:"swiper-box"},{default:o((()=>[i(v,{list:pe.value.goods.goods_image,indicator:pe.value.goods.goods_image.length,indicatorStyle:{bottom:"50rpx"},autoplay:!0,height:"100vw",onClick:Oe},null,8,["list","indicator"])])),_:1}),i(l,{class:"-mt-[26rpx] relative flex items-center justify-between !bg-cover box-border pb-[26rpx] h-[136rpx] px-[30rpx]",style:R({background:"url("+p(b)("addon/phone_shop/detail/discount_price_bg.png")+") no-repeat"})},{default:o((()=>[i(l,{class:"flex items-baseline text-[#fff]"},{default:o((()=>[i(l,{class:"flex items-center"},{default:o((()=>[pe.value.point?(r(),s(a,{key:0,class:"text-[44rpx] leading-[62rpx] price-font"},{default:o((()=>[n(d(pe.value.point)+d(p(V)("point")),1)])),_:1})):c("v-if",!0),pe.value.point&&parseFloat(pe.value.price)?(r(),s(a,{key:1,class:"text-[36rpx]"},{default:o((()=>[n("+")])),_:1})):c("v-if",!0),parseFloat(pe.value.price)?(r(),s(a,{key:2,class:"text-[44rpx] leading-[62rpx] price-font"},{default:o((()=>[n(d(parseFloat(pe.value.price).toFixed(2))+d(p(V)("priceUnit")),1)])),_:1})):c("v-if",!0)])),_:1}),pe.value.market_price&&parseFloat(pe.value.market_price)?(r(),s(a,{key:0,class:"text-[26rpx] line-through ml-[5rpx]"},{default:o((()=>[n(" ￥"+d(parseFloat(pe.value.market_price).toFixed(2)),1)])),_:1})):c("v-if",!0)])),_:1})])),_:1},8,["style"]),i(l,{class:"bg-[#f6f6f6] rounded-[16rpx] -mt-[26rpx] relative"},{default:o((()=>[i(l,{class:"relative mx-[30rpx] rounded-[16rpx] pt-[20rpx]"},{default:o((()=>[i(l,{class:"font-medium text-[32rpx] multi-hidden leading-[40rpx]"},{default:o((()=>[n(d(pe.value.goods.goods_name),1)])),_:1}),i(l,{class:"flex items-start mt-[12rpx] pb-[10rpx]"},{default:o((()=>[pe.value.label_info&&pe.value.label_info.length?(r(),s(l,{key:0,class:"flex flex-wrap"},{default:o((()=>[(r(!0),x(f,null,_(pe.value.label_info,(e=>(r(),s(l,{key:e.label_id,class:"text-[#FA6400] mb-[10rpx] leading-[36rpx] text-[22rpx] h-[40rpx] px-[10rpx] border-[2rpx] border-solid border-[#FA6400] rounded-[4rpx] mr-[15rpx] box-border truncate"},{default:o((()=>[n(d(e.label_name),1)])),_:2},1024)))),128))])),_:1})):c("v-if",!0),i(l,{class:"text-[26rpx] mt-[6rpx] text-[#666] flex items-baseline ml-auto"},{default:o((()=>[i(a,{class:"whitespace-nowrap"},{default:o((()=>[n("销量")])),_:1}),i(a,{class:"mx-[2rpx]"},{default:o((()=>[n(d(pe.value.sale_num),1)])),_:1}),i(a,null,{default:o((()=>[n(d(pe.value.goods.unit),1)])),_:1})])),_:1})])),_:1})])),_:1}),p(_e)?(r(),s(l,{key:0,class:"mt-[20rpx] bg-white sidebar-marign rounded-[16rpx] px-[20rpx] py-[16rpx]"},{default:o((()=>[pe.value.service&&pe.value.service.length?(r(),s(l,{key:0,onClick:t[1]||(t[1]=e=>de.value=!de.value),class:"flex items-center h-[64rpx]"},{default:o((()=>[i(a,{class:"text-[#666] text-[26rpx] leading-[30rpx] font-400 shrink-0"},{default:o((()=>[n("服务")])),_:1}),i(l,{class:"text-[#343434] text-[26rpx] leading-[30rpx] font-400 truncate ml-auto"},{default:o((()=>[n(d(pe.value.service[0].service_name),1)])),_:1}),i(a,{class:"nc-iconfont nc-icon-youV6xx text-[26rpx] text-[#666]"})])),_:1})):c("v-if",!0),pe.value.goodsSpec&&pe.value.goodsSpec.length?(r(),s(l,{key:1,onClick:me,class:"flex items-center h-[64rpx]"},{default:o((()=>[i(a,{class:"text-[#666] text-[26rpx] leading-[30rpx] font-400 shrink-0 mr-[20rpx]"},{default:o((()=>[n("已选")])),_:1}),i(l,{class:"ml-auto text-right truncate flex-1 text-[#343434] text-[26rpx] leading-[30rpx] font-400"},{default:o((()=>[n(d(pe.value.sku_spec_format),1)])),_:1}),i(a,{class:"nc-iconfont nc-icon-youV6xx text-[26rpx] text-[#666]"})])),_:1})):c("v-if",!0),"real"==pe.value.goods.goods_type&&pe.value.delivery_type_list&&pe.value.delivery_type_list.length?(r(),s(l,{key:2,class:"flex items-center h-[64rpx]",onClick:ye},{default:o((()=>[i(a,{class:"text-[#666] text-[26rpx] leading-[30rpx] font-400 shrink-0"},{default:o((()=>[n("配送")])),_:1}),i(l,{class:"ml-auto flex items-center text-[#343434] text-[26rpx] leading-[30rpx] font-400"},{default:o((()=>[n(d(pe.value.delivery_type_list[he.value]),1)])),_:1}),i(a,{class:"nc-iconfont nc-icon-youV6xx text-[26rpx] text-[#666]"})])),_:1})):c("v-if",!0)])),_:1})):c("v-if",!0),i(l,{class:"mt-[20rpx] bg-white sidebar-marign rounded-[16rpx] px-[20rpx]"},{default:o((()=>[i(l,{class:"flex items-center justify-between h-[80rpx]"},{default:o((()=>[i(a,{class:"text-[28rpx] text-[#303133] font-bold"},{default:o((()=>[n("宝贝评价("+d(ve.value.count)+")",1)])),_:1}),ve.value.count?(r(),s(l,{key:0,class:"h-[80rpx] flex items-center",onClick:t[2]||(t[2]=e=>(pe.value.goods_id,void g({url:"/addon/phone_shop/pages/evaluate/list",param:{goods_id:pe.value.goods_id}})))},{default:o((()=>[i(a,{class:"text-[24rpx] text-[#666]"},{default:o((()=>[n("查看全部")])),_:1}),i(a,{class:"nc-iconfont nc-icon-youV6xx text-[26rpx] text-[#666]"})])),_:1})):c("v-if",!0),ve.value.count?c("v-if",!0):(r(),s(a,{key:1,class:"text-[24rpx] text-[#666]"},{default:o((()=>[n("暂无评价")])),_:1}))])),_:1}),i(l,null,{default:o((()=>[(r(!0),x(f,null,_(ve.value.list,((e,t)=>(r(),s(l,{class:"pb-[20rpx]",key:t},{default:o((()=>[i(l,{class:"flex items-center w-full"},{default:o((()=>[i(h,{"default-url":p(b)("static/resource/images/default_headimg.png"),src:p(b)(e.member_head),size:"30rpx",leftIcon:"none"},null,8,["default-url","src"]),i(a,{class:"ml-[10rpx] text-[22rpx] text-[#999]"},{default:o((()=>[n(d(e.member_name),1)])),_:2},1024)])),_:2},1024),i(l,{class:"flex justify-between w-full mt-[10rpx]"},{default:o((()=>[i(l,{class:"flex-1 w-[540rpx] text-[26rpx] text-[#303133] max-h-[72rpx] leading-[36rpx] multi-hidden mr-[50rpx]"},{default:o((()=>[n(d(e.content),1)])),_:2},1024),i(l,{class:"w-[80rpx] shrink-0"},{default:o((()=>[e.image_mid&&e.image_mid.length?(r(),s(T,{key:0,width:"80rpx",height:"80rpx",radius:"8rpx",src:p(b)(e.image_mid[0]),model:"aspectFill",onClick:t=>be(e.images[0])},{error:o((()=>[i(O,{name:"photo",color:"#999",size:"50"})])),_:2},1032,["src","onClick"])):c("v-if",!0)])),_:2},1024)])),_:2},1024)])),_:2},1024)))),128))])),_:1})])),_:1}),pe.value.goods&&pe.value.goods.attr_format&&Object.keys(pe.value.goods.attr_format).length?(r(),s(l,{key:1,class:"my-[20rpx] bg-white sidebar-marign rounded-[16rpx] px-[20rpx] pb-[20rpx]"},{default:o((()=>[i(l,{class:"text-[28rpx] h-[80rpx] leading-[80rpx] font-bold"},{default:o((()=>[n("商品属性")])),_:1}),i(l,{class:"border-[2rpx] border-solid border-[#f1f1f1] border-b-0"},{default:o((()=>[(r(!0),x(f,null,_(pe.value.goods.attr_format,((e,t)=>(r(),x(f,{key:t},[t<4||ue.value?(r(),s(l,{key:0,class:"flex border-0 border-solid border-[#f1f1f1] border-b-[2rpx]"},{default:o((()=>[i(l,{class:"w-[30%] px-[18rpx] py-[8rpx] text-[24rpx] min-h-[70rpx] break-all box-border flex items-center border-0 border-solid border-[#f1f1f1] border-r-[2rpx] bg-[#fbfafa]"},{default:o((()=>[n(d(e.attr_value_name),1)])),_:2},1024),i(l,{class:"w-[70%] px-[18rpx] py-[8rpx] text-[24rpx] min-h-[70rpx] break-all flex items-center box-border"},{default:o((()=>[n(d(Array.isArray(e.attr_child_value_name)?e.attr_child_value_name.join(","):e.attr_child_value_name),1)])),_:2},1024)])),_:2},1024)):c("v-if",!0)],64)))),128)),pe.value.goods.attr_format.length>4?(r(),s(l,{key:0,class:"flex items-center justify-center h-[70rpx] border-0 border-solid border-[#f1f1f1] border-b-[2rpx]",onClick:t[3]||(t[3]=e=>ue.value=!ue.value)},{default:o((()=>[i(a,{class:"text-[24rpx] mr-[10rpx]"},{default:o((()=>[n(d(ue.value?"展开":"收起"),1)])),_:1}),i(a,{class:m(["nc-iconfont !text-[22rpx]",{"nc-icon-xiaV6xx":ue.value,"nc-icon-shangV6xx-1":!ue.value}])},null,8,["class"])])),_:1})):c("v-if",!0)])),_:1})])),_:1})):c("v-if",!0),i(l,{class:"my-[20rpx] bg-white sidebar-marign rounded-[16rpx] px-[20rpx] pd-[10px]"},{default:o((()=>[i(l,{class:"text-[28rpx] h-[80rpx] leading-[80rpx] font-bold"},{default:o((()=>[n("商品详情")])),_:1}),i(l,{class:"u-content"},{default:o((()=>[i(z,{content:pe.value.goods.goods_desc,tagStyle:{img:"vertical-align: top;",p:"overflow: hidden;word-break:break-word;"}},null,8,["content"])])),_:1})])),_:1}),i(l,{class:"tab-bar-placeholder"}),i(l,{class:"w-[100%] flex justify-between px-[27rpx] bg-[#fff] box-border fixed left-0 bottom-0 tab-bar z-1"},{default:o((()=>[i(l,{class:"flex items-center"},{default:o((()=>[i(l,{class:"flex flex-col justify-center items-center mr-[39rpx]",onClick:t[4]||(t[4]=e=>p(g)({url:"/addon/phone_shop/pages/index",mode:"reLaunch"}))},{default:o((()=>[i(l,{class:"nc-iconfont nc-icon-shouyeV6xx text-[36rpx]"}),i(a,{class:"text-[20rpx] mt-1"},{default:o((()=>[n("首页")])),_:1})])),_:1}),i(l,{class:"flex flex-col justify-center items-center mr-[39rpx]",onClick:Ie},{default:o((()=>[i(l,{class:"nc-iconfont nc-icon-fenxiangV6xx text-[36rpx]"}),i(a,{class:"text-[20rpx] mt-1"},{default:o((()=>[n("分享")])),_:1})])),_:1})])),_:1}),1==pe.value.goods.status?(r(),s(l,{key:0,class:"flex-1"},{default:o((()=>[p(fe)?(r(),s(L,{key:0,class:"!h-[72rpx] text-[26rpx] !text-[#fff] primary-btn-bg !m-0 leading-[72rpx] rounded-full remove-border w-full",onClick:t[5]||(t[5]=e=>me("buy_now"))},{default:o((()=>[n("立即兑换")])),_:1})):(r(),s(L,{key:1,class:"!w-full !h-[72rpx] text-[26rpx] !text-[#fff] !bg-[#ccc] !m-0 leading-[72rpx] rounded-full remove-border"},{default:o((()=>[n("已售罄")])),_:1}))])),_:1})):(r(),s(l,{key:1,class:"flex flex-1 ml-[40rpx]"},{default:o((()=>[i(L,{class:"w-[100%] !h-[72rpx] text-[26rpx] !text-[#fff] !bg-[#ccc] !m-0 leading-[72rpx] rounded-full remove-border"},{default:o((()=>[n("该商品已下架")])),_:1})])),_:1}))])),_:1})])),_:1}),c(" 服务 "),i(l,{onTouchmove:t[9]||(t[9]=u((()=>{}),["prevent","stop"]))},{default:o((()=>[i(A,{class:"popup-type",show:de.value,onClose:t[8]||(t[8]=e=>de.value=!1)},{default:o((()=>[i(l,{class:"min-h-[480rpx] pb-[30rpx]",onTouchmove:t[7]||(t[7]=u((()=>{}),["prevent","stop"]))},{default:o((()=>[i(l,{class:"flex items-center justify-center py-[34rpx] relative"},{default:o((()=>[i(a,{class:"text-[32rpx] leading-[36rpx] font-500"},{default:o((()=>[n("商品服务")])),_:1}),i(l,{class:"absolute right-[37rpx] nc-iconfont nc-icon-guanbiV6xx text-[36rpx]",onClick:t[6]||(t[6]=e=>de.value=!1)})])),_:1}),i(I,{class:"h-[520rpx]","scroll-y":"true"},{default:o((()=>[i(l,{class:"pl-[22rpx] py-[28rpx] pr-[37rpx]"},{default:o((()=>[(r(!0),x(f,null,_(pe.value.service,((e,t)=>(r(),s(l,{class:"flex mb-[28rpx]"},{default:o((()=>[i(E,{class:"max-w-[34rpx] max-h-[34rpx] mr-[14rpx]",src:p(b)(e.image||"addon/phone_shop/icon_service.png"),mode:"aspectFit"},null,8,["src"]),i(l,{class:"flex-1"},{default:o((()=>[i(l,{class:"text-[26rpx] leading-[36rpx] text-[#222] mb-[4rpx] w-[643rpx]"},{default:o((()=>[n(d(e.service_name),1)])),_:2},1024),i(l,{class:"text-[22rpx] leading-[36rpx] text-[#888] w-[643rpx]"},{default:o((()=>[n(d(e.desc),1)])),_:2},1024)])),_:2},1024)])),_:2},1024)))),256))])),_:1})])),_:1})])),_:1})])),_:1},8,["show"])])),_:1}),c(" 配送 "),i(l,{onTouchmove:t[13]||(t[13]=u((()=>{}),["prevent","stop"]))},{default:o((()=>[i(A,{class:"popup-type",show:ce.value,onClose:t[12]||(t[12]=e=>ce.value=!1)},{default:o((()=>[i(l,{class:"min-h-[480rpx] pb-[30rpx]",onTouchmove:t[11]||(t[11]=u((()=>{}),["prevent","stop"]))},{default:o((()=>[i(l,{class:"flex items-center justify-center py-[34rpx] relative"},{default:o((()=>[i(a,{class:"text-[32rpx] leading-[36rpx] font-500"},{default:o((()=>[n("配送方式")])),_:1}),i(l,{class:"absolute right-[37rpx] nc-iconfont nc-icon-guanbiV6xx text-[36rpx]",onClick:t[10]||(t[10]=e=>ce.value=!1)})])),_:1}),i(I,{class:"h-[520rpx]","scroll-y":"true"},{default:o((()=>[i(l,{class:"pl-[22rpx] pt-[28rpx] pr-[37rpx]"},{default:o((()=>[(r(!0),x(f,null,_(pe.value.delivery_type_list,((e,t)=>(r(),s(l,{class:"flex mb-[28rpx]",onClick:a=>((e,t)=>{he.value=t,ce.value=!1,uni.setStorageSync("distributionType",e)})(e,t)},{default:o((()=>[i(E,{class:"w-[34rpx] h-[34rpx] mr-[14rpx]",src:p(b)("addon/phone_shop/icon_service.png"),mode:"aspectFit"},null,8,["src"]),i(l,{class:"flex-1"},{default:o((()=>[i(l,{class:"text-[26rpx] leading-[36rpx] text-[#222] mb-[4rpx]"},{default:o((()=>[n(d(e),1)])),_:2},1024),i(l,{class:"text-[22rpx] leading-[36rpx] text-[#888]"},{default:o((()=>[n(d(e),1)])),_:2},1024)])),_:2},1024)])),_:2},1032,["onClick"])))),256))])),_:1})])),_:1})])),_:1})])),_:1},8,["show"])])),_:1}),i(se,{ref_key:"goodsSkuRef",ref:ie,"goods-detail":pe.value,onChange:xe},null,8,["goods-detail"]),i(re,{ref_key:"sharePosterRef",ref:Te,posterType:"shop_point_goods",posterParam:p(Le),copyUrlParam:ze.value},null,8,["posterParam","copyUrlParam"])])),_:1})):c("v-if",!0),i(U,{"bg-color":"rgb(248,248,248)",loading:ne.value,loadingText:"",fontSize:"16",color:"#303133"},null,8,["loading"])])),_:1},8,["style"])}}}),[["__scopeId","data-v-834944ee"]]);export{oe as default};
