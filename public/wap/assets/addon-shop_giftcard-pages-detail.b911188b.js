import{d as e,r as t,p as a,t as l,a as r,E as s,L as i,an as d,l as n,j as u,o,c,w as p,b as x,u as m,W as f,y as v,z as _,f as g,U as b,ad as h,V as y,n as k,a3 as w,H as j,B as F,D as C,C as V,i as I,ac as S,ab as E,g as z,h as T,A as B,bY as L,M as O,_ as U}from"./index-71c7df08.js";import{b as D}from"./bind-mobile.b7e673b6.js";import{_ as J}from"./loading-page.vue_vue_type_script_setup_true_lang.c7dc2256.js";import{b as M}from"./giftcard.48be66f9.js";import"./sms-code.vue_vue_type_script_setup_true_lang.e09e1c1f.js";/* empty css                                                                    */const W=U(e({__name:"detail",setup(e){const U=t({}),W=t(0),A=t(!0);t(null);const H=t({giftcard_id:"",num:1,balance:"",material_id:""}),K=t(0),{setShare:N}=w();a((e=>{H.value.giftcard_id=e.giftcard_id||"",Y(e.giftcard_id)}));const R=e=>{W.value=e},Y=e=>{A.value=!0,M(e).then((e=>{if(!e.data||"[]"===JSON.stringify(e.data))return l({title:"找不到该礼品卡",icon:"none"}),setTimeout((()=>{r({url:"/addon/shop_giftcard/pages/index",mode:"reLaunch"})}),600),!1;if(U.value=e.data,setTimeout((()=>{let e={title:U.value.card_name,desc:"",url:s(U.value.material_list[W.value].url)};N({wechat:{...e},weapp:{...e}})}),600),i({title:U.value.card_name}),"goods"==U.value.card_right_type&&(K.value=U.value.card_price*(H.value.num||1)),"balance"==U.value.card_right_type){H.value.balance=U.value.balance_json[0].balance;let e=U.value.balance_json.findIndex((e=>e.balance==H.value.balance));K.value=U.value.balance_json[e].price*(H.value.num||1)}A.value=!1,R(0),d((()=>{}))}))},q=()=>{setTimeout((()=>{H.value.num>=99&&(H.value.num=99),H.value.num=parseInt(H.value.num)}),0)},G=()=>{setTimeout((()=>{if((!H.value.num||H.value.num<=0)&&(H.value.num=1),H.value.num>=99&&(H.value.num=99),"goods"==U.value.card_right_type&&(K.value=U.value.card_price*(H.value.num||1)),"balance"==U.value.card_right_type){let e=U.value.balance_json.findIndex((e=>e.balance==H.value.balance));K.value=U.value.balance_json[e].price*(H.value.num||1)}}),0)},P=n(),Q=u((()=>P.info)),X=t(null);t(uni.getStorageSync("isbindmobile"));const Z=()=>Q.value?uni.getStorageSync("isbindmobile")?(X.value.open(),!1):(H.value.material_id=U.value.material_list[W.value].material_id,(!H.value.num||H.value.num<=0)&&(H.value.num=1),void uni.setStorage({key:"giftCardOrderCreateData",data:{giftcard_data:H.value},success:()=>{r({url:"/addon/shop_giftcard/pages/payment"})}})):(j().setLoginBack({url:"/addon/shop_giftcard/pages/detail",param:{giftcard_id:U.value.giftcard_id}}),!1),$=e=>{let t="";return t="balance"==e.card_right_type?"addon/shop_giftcard/diy/index/value_card.jpg":"addon/shop_giftcard/diy/index/redemption_card.jpg",t};return(e,t)=>{const a=F,l=C,r=V,i=I,d=S,n=E,u=z(T("u-number-box"),L),w=z(T("u-parse"),O),j=z(T("bind-mobile"),D),M=z(T("loading-page"),J);return o(),c(i,{style:k(e.themeColor())},{default:p((()=>[Object.keys(U.value).length?(o(),c(i,{key:0,class:"bg-[#f8f8f8] min-h-[100vh]"},{default:p((()=>[x(i,{class:"px-[var(--sidebar-m)] py-[var(--top-m)]"},{default:p((()=>[x(i,{class:"w-full h-[430rpx] relative"},{default:p((()=>[U.value.material_list[W.value]?(o(),c(a,{key:0,class:"w-full h-[430rpx] rounded-[var(--rounded-mid)]",src:m(s)(U.value.material_list[W.value].url||""),onError:t[0]||(t[0]=e=>U.value.material_list[W.value].url=$(U.value)),mode:"aspectFill"},null,8,["src"])):(o(),c(a,{key:1,class:"w-full h-[430rpx] rounded-[var(--rounded-mid)]",src:m(s)($(U.value)),mode:"aspectFill"},null,8,["src"])),x(i,{class:"absolute bottom-[var(--pad-top-m)] left-0 right-0 flex justify-center"},{default:p((()=>[x(r,{class:f(["h-[44rpx] font-500 text-[24rpx] !text-[#fff] m-0 rounded-[var(--rounded-big)] remove-border",{"!bg-[#EF000C]":"balance"==U.value.card_right_type,"!bg-[#FF7700]":"goods"==U.value.card_right_type}])},{default:p((()=>[x(l,{class:f(["text-[24rpx] leading-[44rpx] iconfont mr-[5rpx]",{iconchuzhikaV6mm:"balance"==U.value.card_right_type,"iconduihuankaV6mm-1":"goods"==U.value.card_right_type}])},null,8,["class"]),x(l,{class:"leading-[44rpx]"},{default:p((()=>[v(_(U.value.card_right_type_name),1)])),_:1})])),_:1},8,["class"])])),_:1})])),_:1}),g(' <view v-if="detail.material_list.length>1" class="text-[28rpx] leading-[39rpx] font-400 mt-[var(--top-m)]">选择封面</view> '),U.value.material_list.length>1?(o(),c(i,{key:0,class:"h-[110rpx] mt-[var(--top-m)]"},{default:p((()=>[g(' <swiper v-if="detail.material_list.length > 5" class="h-full" display-multiple-items=\'5\' circular=\'true\' previous-margin=\'0rpx\'\r\n\t\t\t\t\t\tnext-margin=\'-160rpx\' :current="current" @change="swiperChange" indicator-active-color=\'red\'>\r\n\t\t\t\t\t\t<block v-for="(item,index) in detail.material_list" :key=\'index\'>\r\n\t\t\t\t\t\t\t<swiper-item class="sitem" @click.stop="swiperCardClick(index)">\r\n\t\t\t\t\t\t\t\t<view class="swiper-item flex justify-center items-center">\r\n\t\t\t\t\t\t\t\t\t<image class="w-[144rpx] h-[90rpx] rounded-[var(--goods-rounded-small)] flex-shrink-0"\r\n\t\t\t\t\t\t\t\t\t:class="{\'!w-[180rpx] !h-[110rpx] box-border border-[2rpx] border-solid border-[var(--primary-color)]\':index==activeIndex}"\r\n\t\t\t\t\t\t\t\t\t:src="img(item.url)" mode="aspectFit"/>\r\n\t\t\t\t\t\t\t\t</view>\r\n\t\t\t\t\t\t\t</swiper-item>\r\n\t\t\t\t\t\t</block>\r\n\t\t\t\t\t</swiper> '),g(" :scroll-into-view=\"'id' + activeIndex\" "),x(d,{"scroll-x":!0},{default:p((()=>[x(i,{class:"flex items-center"},{default:p((()=>[(o(!0),b(y,null,h(U.value.material_list,((e,t)=>(o(),b(y,{key:t},[e.url?(o(),c(a,{key:0,id:"id"+t,onClick:B((e=>R(t)),["stop"]),class:f(["w-[144rpx] h-[90rpx] rounded-[var(--goods-rounded-small)] flex-shrink-0 mr-[20rpx]",{"!w-[180rpx] !h-[110rpx] box-border border-[2rpx] border-solid border-[var(--primary-color)]":t==W.value}]),src:m(s)(e.url),onError:t=>e.url=$(U.value),mode:"aspectFill"},null,8,["id","onClick","class","src","onError"])):(o(),c(a,{key:1,id:"id"+t,onClick:B((e=>R(t)),["stop"]),class:f(["w-[144rpx] h-[90rpx] rounded-[var(--goods-rounded-small)] flex-shrink-0 mr-[20rpx]",{"!w-[180rpx] !h-[110rpx] box-border border-[2rpx] border-solid border-[var(--primary-color)]":t==W.value}]),src:m(s)($(U.value)),mode:"aspectFill"},null,8,["id","onClick","class","src"]))],64)))),128))])),_:1})])),_:1})])),_:1})):g("v-if",!0),x(i,{class:"mt-[var(--top-m)] card-template flex items-center justify-between"},{default:p((()=>[x(l,{class:"text-[28rpx] leading-[39rpx] font-400"},{default:p((()=>[v("购买数量")])),_:1}),x(u,{modelValue:H.value.num,"onUpdate:modelValue":t[2]||(t[2]=e=>H.value.num=e),min:1,max:99,integer:"",step:1,"input-width":"68rpx","input-height":"52rpx","button-size":"52rpx",disabledInput:""},{minus:p((()=>[x(l,{class:f(["text-[#303133] text-[24rpx] font-500 nc-iconfont nc-icon-jianV6xx",{"!text-[var(--text-color-light9)]":H.value.num<=1}])},null,8,["class"])])),input:p((()=>[x(n,{class:"text-[#303133] text-[28rpx] mx-[10rpx] w-[80rpx] h-[44rpx] bg-[var(--temp-bg)] leading-[44rpx] text-center rounded-[6rpx]",type:"number",modelValue:H.value.num,"onUpdate:modelValue":t[1]||(t[1]=e=>H.value.num=e),onInput:q,onBlur:G},null,8,["modelValue"])])),plus:p((()=>[x(l,{class:f(["text-[#303133] text-[24rpx] font-500 nc-iconfont nc-icon-jiahaoV6xx",{"!text-[var(--text-color-light9)]":H.value.num>=99}])},null,8,["class"])])),_:1},8,["modelValue"])])),_:1}),"balance"==U.value.card_right_type?(o(),c(i,{key:1,class:"mt-[var(--top-m)] card-template"},{default:p((()=>[x(i,{class:"text-[#333] text-[26rpx] leading-[30rpx] font-400 shrink-0 mr-[20rpx]"},{default:p((()=>[v("选择面值")])),_:1}),x(i,{class:"flex flex-wrap gap-x-[31rpx]"},{default:p((()=>[(o(!0),b(y,null,h(U.value.balance_json,((e,t)=>(o(),c(i,{key:t,onClick:t=>{return a=e.balance,void(H.value.balance=a);var a},class:f([{"border-0 primary-btn-bg !text-[#fff]":e.balance==H.value.balance},"w-[200rpx] h-[88rpx] box-border flex items-center justify-center mt-[30rpx] border-[2rpx] border-solid border-[#ddd] rounded-[var(--rounded-small)]"])},{default:p((()=>[x(i,{class:"flex items-baseline font-500"},{default:p((()=>[x(l,{class:"text-[24rpx]"},{default:p((()=>[v("￥")])),_:1}),x(l,{class:"text-[34rpx]"},{default:p((()=>[v(_(e.balance),1)])),_:2},1024)])),_:2},1024)])),_:2},1032,["onClick","class"])))),128))])),_:1})])),_:1})):g("v-if",!0),"goods"==U.value.card_right_type?(o(),c(i,{key:2,class:"mt-[var(--top-m)] card-template"},{default:p((()=>[x(i,{class:"flex items-center"},{default:p((()=>[x(l,{class:"title !mb-0"},{default:p((()=>[v("可兑换商品")])),_:1}),"diy"==U.value.card_goods_type?(o(),c(l,{key:0,class:"text-[24rpx] text-[var(--text-color-light9)] leading-[34rpx] ml-[10rpx]"},{default:p((()=>[v("该兑换卡可在以下商品中任选"+_(U.value.card_goods_count)+"件兑换",1)])),_:1})):(o(),c(l,{key:1,class:"text-[24rpx] text-[var(--text-color-light9)] leading-[34rpx] ml-[10rpx]"},{default:p((()=>[v("该兑换卡可兑换以下商品")])),_:1}))])),_:1}),(o(!0),b(y,null,h(U.value.goods_sku_list,((e,t)=>(o(),c(i,{key:t,class:"mt-[var(--pad-top-m)] flex"},{default:p((()=>[e.sku.sku_image?(o(),c(a,{key:0,class:"w-[190rpx] h-[190rpx] rounded-[var(--rounded-mid)]",src:m(s)(e.sku.sku_image),mode:"aspectFill",onError:t=>e.sku.sku_image="static/resource/images/diy/shop_default.jpg"},null,8,["src","onError"])):(o(),c(a,{key:1,class:"w-[170rpx] h-[170rpx] rounded-[var(--rounded-mid)]",src:m(s)("static/resource/images/diy/shop_default.jpg"),mode:"aspectFill"},null,8,["src"])),x(i,{class:"ml-[20rpx] flex-1 flex flex-col justify-between"},{default:p((()=>[x(i,{class:"w-full"},{default:p((()=>[x(i,{class:"max-w-[472rpx] text-[28rpx] leading-[40rpx] font-400 truncate text-[#303133]"},{default:p((()=>[v(_(e.goods.goods_name),1)])),_:2},1024),x(i,{class:"mt-[15rpx] flex items-center justify-between"},{default:p((()=>[x(i,{class:"text-[24rpx] text-[var(--text-color-light6)] font-400 truncate leading-[34rpx] w-[452rpx]"},{default:p((()=>[v(_(e.sku.sku_name),1)])),_:2},1024)])),_:2},1024)])),_:2},1024),x(i,{class:"flex items-center justify-between"},{default:p((()=>[x(i,{class:"text-[var(--price-text-color)] flex items-baseline"},{default:p((()=>[x(l,{class:"text-[22rpx] price-font"},{default:p((()=>[v("￥")])),_:1}),x(l,{class:"text-[36rpx] font-500 price-font"},{default:p((()=>[v(_(parseFloat(e.sku.price).toFixed(2).split(".")[0]),1)])),_:2},1024),x(l,{class:"text-[22rpx] font-500 price-font"},{default:p((()=>[v("."+_(parseFloat(e.sku.price).toFixed(2).split(".")[1]),1)])),_:2},1024)])),_:2},1024),"all"==U.value.card_goods_type?(o(),c(i,{key:0,class:"font-400 text-[28rpx] text-[#303133]"},{default:p((()=>[x(l,null,{default:p((()=>[v("x")])),_:1}),x(l,null,{default:p((()=>[v(_(e.num),1)])),_:2},1024)])),_:2},1024)):g("v-if",!0)])),_:2},1024)])),_:2},1024)])),_:2},1024)))),128))])),_:1})):g("v-if",!0),U.value.instruction?(o(),c(i,{key:3,class:"mt-[var(--top-m)] card-template"},{default:p((()=>[x(i,{class:"title"},{default:p((()=>[v("使用须知")])),_:1}),x(i,{class:"u-content"},{default:p((()=>[x(w,{content:U.value.instruction,tagStyle:{img:"vertical-align: top;",p:"overflow: hidden;word-break:break-word;"}},null,8,["content"])])),_:1})])),_:1})):g("v-if",!0),U.value.card_desc?(o(),c(i,{key:4,class:"mt-[var(--top-m)] card-template"},{default:p((()=>[x(i,{class:"title"},{default:p((()=>[v("礼品卡详情")])),_:1}),x(i,{class:"u-content"},{default:p((()=>[x(w,{content:U.value.card_desc,tagStyle:{img:"vertical-align: top;",p:"overflow: hidden;word-break:break-word;"}},null,8,["content"])])),_:1})])),_:1})):g("v-if",!0)])),_:1}),x(i,{class:"tab-bar-placeholder"}),x(i,{class:"border-[0] border-t-[2rpx] border-solid border-[#f5f5f5] w-[100%] flex justify-between pl-[30rpx] pr-[20rpx] bg-[#fff] box-border fixed left-0 bottom-0 tab-bar z-1 items-center"},{default:p((()=>[x(i,{class:"flex items-baseline"},{default:p((()=>[x(i,{class:"text-[24rpx] leading-[34rpx] font-500 mr-[6rpx]"},{default:p((()=>[v("售价:")])),_:1}),x(i,{class:"text-[var(--price-text-color)] flex items-baseline"},{default:p((()=>[x(l,{class:"text-[26rpx] price-font"},{default:p((()=>[v("￥")])),_:1}),x(l,{class:"text-[44rpx] font-500 price-font"},{default:p((()=>[v(_(parseFloat(K.value).toFixed(2).split(".")[0]),1)])),_:1}),x(l,{class:"text-[26rpx] font-500 price-font"},{default:p((()=>[v("."+_(parseFloat(K.value).toFixed(2).split(".")[1]),1)])),_:1})])),_:1})])),_:1}),x(r,{class:"w-[300rpx] !h-[70rpx] font-500 text-[26rpx] !text-[#fff] primary-btn-bg !m-0 leading-[70rpx] rounded-full remove-border",onClick:Z},{default:p((()=>[v("立即购买")])),_:1})])),_:1})])),_:1})):g("v-if",!0),g(" 强制绑定手机号 "),x(j,{ref_key:"bindMobileRef",ref:X},null,512),x(M,{loading:A.value},null,8,["loading"])])),_:1},8,["style"])}}}),[["__scopeId","data-v-984a6126"]]);export{W as default};
