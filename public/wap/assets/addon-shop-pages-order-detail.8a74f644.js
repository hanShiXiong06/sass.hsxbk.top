import{d as e,r as t,p as a,K as l,E as r,j as s,o,c as d,w as i,b as u,y as p,z as x,u as n,f as c,P as f,a7 as _,Q as v,n as m,a as y,c6 as g,i as b,B as h,D as k,g as F,h as w,ae as j,F as C,be as T,c3 as N,k as M,ag as z}from"./index-7bf68536.js";import{_ as E}from"./u--image.b3bf1d5c.js";import{_ as V}from"./pay.d2e850e8.js";import{_ as q}from"./loading-page.vue_vue_type_script_setup_true_lang.124ad65f.js";import{a as A,o as B,b as G}from"./order.3552570e.js";import{g as L}from"./shop.23520c6c.js";import{d as P}from"./verify.2d231cd5.js";import{l as R}from"./logistics-tracking.2245bacf.js";import{t as $}from"./topTabbar.f3f9eebd.js";import{_ as D}from"./_plugin-vue_export-helper.1b428a4d.js";import"./u-image.e46f68ef.js";import"./u-icon.0c1c54c7.js";import"./u-transition.cdf87992.js";import"./u-popup.be4bfacd.js";import"./u-safe-bottom.908eeae4.js";import"./pay.2db06871.js";import"./u-loading-page.566c330a.js";import"./u-loading-icon.b37701e7.js";import"./u-steps.9fc55f35.js";import"./u-text.df478cbc.js";const I=D(e({__name:"detail",setup(e){$().setTopTabbarParam({title:"订单详情"});const D=t({}),I=t(!0);t("");const K=t("");t(!1);const Q=t({}),H=t(!0),J=t("");t("");const O=t("");t(null),a((e=>{if(e.order_id)K.value=e.order_id,S(K.value);else{l({url:"/addon/shop/pages/order/list",title:"缺少订单id"})}})),L().then((({data:e})=>{Q.value=e}));const S=e=>{I.value=!0,A(e).then((e=>{if(D.value=e.data,e.data.order_goods&&e.data.order_goods.length&&te.value){let t={};t.order_goods_id=e.data.order_goods[0].order_goods_id,le(t)}let t=0;for(let a=0;a<D.value.order_goods.length;a++)1==D.value.order_goods[a].status&&1!=D.value.order_goods[a].is_enable_refund||t++;t==D.value.order_goods.length&&(H.value=!1),J.value=D.value.order_goods[0].goods_name,O.value=r(D.value.order_goods[0].goods_image_thumb_small||""),I.value=!1})).catch((()=>{I.value=!1}))},U=t(null),W=t(null),X=(e="")=>{var t,a;if("pay"==e)null==(t=U.value)||t.open(D.value.order_type,D.value.order_id,`/addon/shop/pages/order/detail?order_id=${D.value.order_id}`);else if("close"==e)a=D.value,N({title:"提示",content:"您确定要关闭该订单吗？",confirmColor:M().themeColor["--primary-color"],success:e=>{e.confirm&&B(a.order_id).then((e=>{S(a.order_id)}))}});else if("finish"==e)(e=>{N({title:"提示",content:"您确定物品已收到吗？",confirmColor:M().themeColor["--primary-color"],success:t=>{t.confirm&&G(e.order_id).then((t=>{S(e.order_id)}))}})})(D.value);else if("index"==e)y({url:"/addon/shop/pages/index",mode:"reLaunch"});else if("logistics"==e){if(D.value.order_delivery.length>0){let e={id:D.value.order_delivery[0].id,mobile:D.value.taker_mobile},t=[];D.value.order_delivery.forEach(((e,a)=>{e.name=`包裹${a+1}`,t.push(e)})),W.value.open(e),W.value.packageList=t}}else"evaluate"==e&&(D.value.is_evaluate?y({url:"/addon/shop/pages/evaluate/order_evaluate_view",param:{order_id:D.value.order_id}}):y({url:"/addon/shop/pages/evaluate/order_evaluate",param:{order_id:D.value.order_id}}))},Y=()=>{g({latitude:Number(D.value.taker_latitude),longitude:Number(D.value.taker_longitude),success:function(){}})},Z=e=>{let t=!1;if("express"!=e.delivery_type)return!1;for(let a=0;a<e.order_delivery.length;a++){let l=e.order_delivery[a];if("express"===l.sub_delivery_type&&"3"===e.status){t=!0;break}if("express"===l.sub_delivery_type&&"5"===e.status){t=!0;break}t=!1}return t},ee=t({}),te=s((()=>{let e=!1;if(1==D.value.order_goods.length){ee.value=D.value.order_goods[0];let t=D.value.order_goods[0];e=1==t.is_verify&&"virtual"==t.goods_type&&"delivery_finish"==t.delivery_status&&3==D.value.status}return e})),ae=t([]),le=e=>{ae.value=[],P("shopVirtualGoods",e).then((e=>{ae.value=e.data}))};return(e,t)=>{const a=b,l=h,s=k,g=F(w("u--image"),E),N=z,M=j,A=F(w("pay"),V),B=F(w("loading-page"),q);return o(),d(a,{style:m(e.themeColor())},{default:i((()=>[I.value?c("v-if",!0):(o(),d(a,{key:0,class:"bg-[var(--page-bg-color)] min-h-screen overflow-hidden"},{default:i((()=>[I.value?c("v-if",!0):(o(),d(a,{key:0,class:"pb-20rpx"},{default:i((()=>[D.value.status_name?(o(),d(a,{key:0,class:"pl-[40rpx] pr-[50rpx] bg-linear pb-[100rpx]"},{default:i((()=>[u(a,{class:"flex justify-between items-center pt-[40rpx]"},{default:i((()=>[u(a,{class:"text-[#fff] text-[36rpx] font-500 leading-[42rpx]"},{default:i((()=>[p(x(D.value.status_name.name),1)])),_:1}),1==D.value.status?(o(),d(l,{key:0,class:"w-[180rpx] h-[140rpx]",src:n(r)("addon/shop/detail/payment.png"),mode:"aspectFit"},null,8,["src"])):c("v-if",!0),2==D.value.status?(o(),d(l,{key:1,class:"w-[180rpx] h-[140rpx]",src:n(r)("addon/shop/detail/deliver_goods.png"),mode:"aspectFit"},null,8,["src"])):c("v-if",!0),3==D.value.status?(o(),d(l,{key:2,class:"w-[180rpx] h-[140rpx]",src:n(r)("addon/shop/detail/receive.png"),mode:"aspectFit"},null,8,["src"])):c("v-if",!0),5==D.value.status?(o(),d(l,{key:3,class:"w-[180rpx] h-[140rpx]",src:n(r)("addon/shop/detail/complete.png"),mode:"aspectFit"},null,8,["src"])):c("v-if",!0),-1==D.value.status?(o(),d(l,{key:4,class:"w-[180rpx] h-[140rpx]",src:n(r)("addon/shop/detail/close.png"),mode:"aspectFit"},null,8,["src"])):c("v-if",!0)])),_:1})])),_:1})):c("v-if",!0),"virtual"!=D.value.delivery_type?(o(),d(a,{key:1,class:"sidebar-margin mt-[-86rpx] card-template"},{default:i((()=>["express"==D.value.delivery_type?(o(),d(a,{key:0},{default:i((()=>[u(a,{class:"text-[#303133] flex"},{default:i((()=>[u(s,{class:"nc-iconfont nc-icon-dizhiguanliV6xx text-[40rpx] pt-[12rpx] mr-[20rpx]"}),u(a,{class:"flex flex-col"},{default:i((()=>[u(a,{class:"text-[30rpx] leading-[38rpx] overflow-hidden"},{default:i((()=>[u(s,null,{default:i((()=>[p(x(D.value.taker_name),1)])),_:1}),u(s,{class:"ml-[15rpx]"},{default:i((()=>[p(x(D.value.taker_mobile),1)])),_:1})])),_:1}),u(a,{class:"mt-[12rpx] text-[24rpx] text-[var(--text-color-light6)] leading-[26rpx]"},{default:i((()=>[p(x(D.value.taker_full_address.split(D.value.taker_address)[0])+x(D.value.taker_address),1)])),_:1})])),_:1})])),_:1})])),_:1})):c("v-if",!0),"store"==D.value.delivery_type?(o(),d(a,{key:1},{default:i((()=>[u(a,{class:"flex items-center"},{default:i((()=>[u(a,null,{default:i((()=>[u(g,{class:"overflow-hidden",radius:"var(--goods-rounded-mid)",width:"100rpx",height:"100rpx",src:n(r)(D.value.store.store_logo?D.value.store.store_logo:""),model:"aspectFill"},{error:i((()=>[u(l,{class:"w-[100rpx] h-[100rpx] rounded-[var(--goods-rounded-mid)] overflow-hidden",src:n(r)("addon/shop/store_default.png"),mode:"aspectFill"},null,8,["src"])])),_:1},8,["src"])])),_:1}),u(a,{class:"flex flex-col ml-[20rpx]"},{default:i((()=>[u(s,{class:"text-[30rpx] font-500 text-[#303133] mb-[20rpx]"},{default:i((()=>[p(x(D.value.store.store_name),1)])),_:1}),u(s,{class:"text-[24rpx] text-[var(--text-color-light6)] mb-[14rpx]"},{default:i((()=>[p(x(D.value.store.trade_time),1)])),_:1}),u(s,{class:"text-[24rpx] text-[var(--text-color-light6)] leading-[1.4]"},{default:i((()=>[p(x(D.value.store.full_address),1)])),_:1})])),_:1})])),_:1})])),_:1})):c("v-if",!0),"local_delivery"==D.value.delivery_type?(o(),d(a,{key:2,class:"flex"},{default:i((()=>[u(s,{onClick:Y,class:"nc-iconfont nc-icon-dizhiguanliV6xx text-[40rpx] pt-[12rpx] mr-[20rpx]"}),u(a,{class:"flex flex-col"},{default:i((()=>[u(a,{class:"flex leading-[38rpx] overflow-hidden"},{default:i((()=>[u(s,{class:"text-[30rpx]"},{default:i((()=>[p(x(D.value.taker_name),1)])),_:1}),u(s,{class:"text-[30rpx] ml-[15rpx]"},{default:i((()=>[p(x(D.value.taker_mobile),1)])),_:1})])),_:1}),u(s,{class:"text-[24rpx] mt-[12rpx] leading-[26rpx]"},{default:i((()=>[p(x(D.value.taker_full_address),1)])),_:1})])),_:1})])),_:1})):c("v-if",!0)])),_:1})):c("v-if",!0),u(a,{class:"sidebar-margin card-template",style:m("virtual"==D.value.delivery_type?"margin-top: -86rpx":"margin-top: 20rpx")},{default:i((()=>[(o(!0),f(v,null,_(D.value.order_goods,((e,t)=>(o(),f(v,{key:t},[u(a,{class:"order-goods-item flex justify-between flex-wrap mt-[30rpx]"},{default:i((()=>[u(a,{class:"w-[150rpx] h-[150rpx] rounded-[var(--goods-rounded-big)] overflow-hidden",onClick:t=>{return a=e.goods_id,void("exchange"==D.value.activity_type?y({url:"/addon/shop/pages/point/detail",param:{id:D.value.relate_id}}):y({url:"/addon/shop/pages/goods/detail",param:{goods_id:a}}));var a}},{default:i((()=>[u(g,{class:"overflow-hidden",radius:"var(--goods-rounded-big)",width:"150rpx",height:"150rpx",src:n(r)(e.goods_image_thumb_small?e.goods_image_thumb_small:""),model:"aspectFill"},{error:i((()=>[u(l,{class:"w-[150rpx] h-[150rpx] rounded-[var(--goods-rounded-big)] overflow-hidden",src:n(r)("static/resource/images/diy/shop_default.jpg"),mode:"aspectFill"},null,8,["src"])])),_:2},1032,["src"])])),_:2},1032,["onClick"]),u(a,{class:"ml-[20rpx] flex flex-1 flex-col justify-between"},{default:i((()=>[u(a,null,{default:i((()=>[u(a,{class:"text-[28rpx] max-w-[490rpx] truncate leading-[40rpx] text-[#333]"},{default:i((()=>[p(x(e.goods_name),1)])),_:2},1024),e.sku_name?(o(),d(a,{key:0},{default:i((()=>[u(a,{class:"text-[22rpx] mt-[14rpx] text-[var(--text-color-light9)] truncate max-w-[490rpx] leading-[28rpx]"},{default:i((()=>[p(x(e.sku_name),1)])),_:2},1024)])),_:2},1024)):c("v-if",!0)])),_:2},1024),u(a,{class:"flex justify-between items-baseline leading-[28rpx] text-[#333]"},{default:i((()=>[u(a,{class:"price-font"},{default:i((()=>[e.extend&&parseFloat(e.extend.point)>0?(o(),d(a,{key:0,class:"text-[40rpx] inline-block"},{default:i((()=>[u(s,{class:"text-[40rpx] font-200"},{default:i((()=>[p(x(e.extend.point),1)])),_:2},1024),u(s,{class:"text-[32rpx] ml-[4rpx]"},{default:i((()=>[p("积分")])),_:1})])),_:2},1024)):c("v-if",!0),parseFloat(e.price)&&e.extend&&parseFloat(e.extend.point)>0?(o(),d(s,{key:1,class:"mx-[4rpx] text-[32rpx]"},{default:i((()=>[p("+")])),_:1})):c("v-if",!0),parseFloat(e.price)&&e.extend&&parseFloat(e.extend.point)>0?(o(),f(v,{key:2},[u(s,{class:"text-[40rpx] font-200"},{default:i((()=>[p(x(parseFloat(e.price).toFixed(2)),1)])),_:2},1024),u(s,{class:"text-[32rpx] ml-[4rpx]"},{default:i((()=>[p("元")])),_:1})],64)):c("v-if",!0),e.extend&&e.extend&&e.extend.is_newcomer?(o(),f(v,{key:3},[u(s,{class:"text-[24rpx]"},{default:i((()=>[p("￥")])),_:1}),u(s,{class:"text-[40rpx] font-500"},{default:i((()=>[p(x(parseFloat(e.price).toFixed(2).split(".")[0]),1)])),_:2},1024),u(s,{class:"text-[24rpx] font-500"},{default:i((()=>[p("."+x(parseFloat(e.price).toFixed(2).split(".")[1]),1)])),_:2},1024)],64)):c("v-if",!0),parseFloat(e.price)&&!e.extend?(o(),f(v,{key:4},[u(s,{class:"text-[24rpx]"},{default:i((()=>[p("￥")])),_:1}),u(s,{class:"text-[40rpx] font-500"},{default:i((()=>[p(x(parseFloat(e.price).toFixed(2).split(".")[0]),1)])),_:2},1024),u(s,{class:"text-[24rpx] font-500"},{default:i((()=>[p("."+x(parseFloat(e.price).toFixed(2).split(".")[1]),1)])),_:2},1024)],64)):c("v-if",!0)])),_:2},1024),u(s,{class:"text-right text-[26rpx]"},{default:i((()=>[p("x"+x(e.num),1)])),_:2},1024)])),_:2},1024)])),_:2},1024)])),_:2},1024),e.extend&&e.extend.is_newcomer&&e.num>1?(o(),d(a,{key:0,class:"flex items-center box-border mt-[8rpx]"},{default:i((()=>[u(l,{class:"h-[24rpx] w-[56rpx]",src:n(r)("addon/shop/newcomer.png"),mode:"heightFix"},null,8,["src"]),u(a,{class:"text-[24rpx] text-[#FFB000] leading-[34rpx] ml-[8rpx]"},{default:i((()=>[p("第1"+x(e.unit)+"，￥"+x(parseFloat(e.extend.newcomer_price).toFixed(2))+"/"+x(e.unit)+"；第"+x(e.num>2?"2~"+e.num:"2")+x(e.unit)+"，￥"+x(parseFloat(e.price).toFixed(2))+"/"+x(e.unit),1)])),_:2},1024)])),_:2},1024)):c("v-if",!0),"1"!=e.status||1==e.is_enable_refund?(o(),d(a,{key:1,class:"flex justify-end w-[100%] mt-[30rpx]"},{default:i((()=>["1"!=e.status?(o(),d(a,{key:0,class:"text-[22rpx] text-[#303133] leading-[50rpx] px-[20rpx] border-[2rpx] border-solid border-[#999] rounded-full",onClick:t=>n(y)({url:"/addon/shop/pages/refund/detail",param:{order_refund_no:e.order_refund_no}})},{default:i((()=>[p(" 查看退款")])),_:2},1032,["onClick"])):1==e.is_enable_refund?(o(),d(a,{key:1,class:"text-[22rpx] text-[#303133] leading-[50rpx] px-[20rpx] border-[2rpx] border-solid border-[#999] rounded-full ml-[20rpx]",onClick:t=>{return a=e.order_goods_id,void y({url:"/addon/shop/pages/refund/apply",param:{order_id:D.value.order_id,order_goods_id:a}});var a}},{default:i((()=>[p("申请退款")])),_:2},1032,["onClick"])):c("v-if",!0)])),_:2},1024)):c("v-if",!0)],64)))),128))])),_:1},8,["style"]),u(a,{class:"sidebar-margin mt-[var(--top-m)] card-template"},{default:i((()=>[u(a,{class:"justify-between card-template-item"},{default:i((()=>[u(a,{class:"text-[28rpx]"},{default:i((()=>[p(x(n(C)("orderNo")),1)])),_:1}),u(a,{class:"flex items-center text-[28rpx]"},{default:i((()=>[u(s,null,{default:i((()=>[p(x(D.value.order_no),1)])),_:1}),u(s,{class:"w-[2rpx] h-[20rpx] bg-[#999] mx-[10rpx]"}),u(s,{class:"text-[#EF900A]",onClick:t[0]||(t[0]=e=>n(T)(D.value.order_no))},{default:i((()=>[p("复制")])),_:1})])),_:1})])),_:1}),D.value.out_trade_no?(o(),d(a,{key:0,class:"justify-between card-template-item"},{default:i((()=>[u(a,{class:"text-[28rpx]"},{default:i((()=>[p(x(n(C)("orderTradeNo")),1)])),_:1}),u(a,{class:"text-[28rpx]"},{default:i((()=>[p(x(D.value.out_trade_no),1)])),_:1})])),_:1})):c("v-if",!0),u(a,{class:"justify-between card-template-item"},{default:i((()=>[u(a,{class:"text-[28rpx]"},{default:i((()=>[p(x(n(C)("createTime")),1)])),_:1}),u(a,{class:"text-[28rpx]"},{default:i((()=>[p(x(D.value.create_time),1)])),_:1})])),_:1}),u(a,{class:"card-template-item justify-between"},{default:i((()=>[u(a,{class:"text-[28rpx]"},{default:i((()=>[p(x(n(C)("deliveryType")),1)])),_:1}),u(a,{class:"text-[28rpx]"},{default:i((()=>[p(x(D.value.delivery_type_name),1)])),_:1})])),_:1}),D.value.pay?(o(),d(a,{key:1,class:"card-template-item justify-between"},{default:i((()=>[u(a,{class:"text-[28rpx]"},{default:i((()=>[p(x(n(C)("payTypeName")),1)])),_:1}),u(a,{class:"text-[28rpx]"},{default:i((()=>[p(x(D.value.pay.type_name),1)])),_:1})])),_:1})):c("v-if",!0),D.value.pay?(o(),d(a,{key:2,class:"card-template-item justify-between"},{default:i((()=>[u(a,{class:"text-[28rpx]"},{default:i((()=>[p(x(n(C)("payTime")),1)])),_:1}),u(a,{class:"text-[28rpx]"},{default:i((()=>[p(x(D.value.pay.pay_time),1)])),_:1})])),_:1})):c("v-if",!0)])),_:1}),c(" 核销码 "),n(te)?(o(),f(v,{key:2},[ae.value&&ae.value.length?(o(),d(a,{key:0,class:"sidebar-margin mt-[var(--top-m)] card-template"},{default:i((()=>[ae.value.length>1?(o(),d(M,{key:0,class:"h-[450rpx]",circular:"","indicator-dots":"true"},{default:i((()=>[(o(!0),f(v,null,_(ae.value,((e,t)=>(o(),d(N,{key:t},{default:i((()=>[u(a,{class:"flex flex-col items-center justify-center"},{default:i((()=>[u(l,{src:e.qrcode,class:"w-[300rpx] h-[auto]",mode:"widthFix"},null,8,["src"])])),_:2},1024),u(a,{class:"flex items-center justify-center mt-[30rpx]"},{default:i((()=>[u(s,{class:"text-[28rpx] font-500"},{default:i((()=>[p(x(e.code),1)])),_:2},1024),u(s,{class:"text-[var(--text-color-light6)] text-[24rpx] ml-[10rpx] border-[2rpx] border-solid border-[#666] bg-[#f7f7f7] px-[12rpx] py-[6rpx] rounded",onClick:t=>n(T)(e.code)},{default:i((()=>[p("复制")])),_:2},1032,["onClick"])])),_:2},1024)])),_:2},1024)))),128))])),_:1})):(o(),f(v,{key:1},[u(a,{class:"flex flex-col items-center justify-center"},{default:i((()=>[u(l,{src:ae.value[0].qrcode,class:"w-[300rpx] h-[auto]",mode:"widthFix"},null,8,["src"])])),_:1}),u(a,{class:"flex items-center justify-center mt-[30rpx]"},{default:i((()=>[u(s,{class:"text-[28rpx] font-500"},{default:i((()=>[p(x(ae.value[0].code),1)])),_:1}),u(s,{class:"text-[var(--text-color-light6)] text-[24rpx] ml-[10rpx] border-[2rpx] border-solid border-[#666] bg-[#f7f7f7] px-[12rpx] py-[6rpx] rounded",onClick:t[1]||(t[1]=e=>n(T)(ae.value[0].code))},{default:i((()=>[p("复制")])),_:1})])),_:1})],64))])),_:1})):c("v-if",!0),u(a,{class:"sidebar-margin mt-[var(--top-m)] card-template"},{default:i((()=>[u(a,{class:"title"},{default:i((()=>[p("核销信息")])),_:1}),u(a,{class:"card-template-item justify-between"},{default:i((()=>[u(a,{class:"text-[28rpx]"},{default:i((()=>[p("核销次数")])),_:1}),u(a,{class:"price-font font-500 text-[28rpx]"},{default:i((()=>[p(x("剩余"+(ee.value.num-ee.value.verify_count)+"次")+"/"+x("共"+ee.value.num+"次"),1)])),_:1})])),_:1}),u(a,{class:"card-template-item justify-between"},{default:i((()=>[u(a,{class:"text-[28rpx]"},{default:i((()=>[p("有效期")])),_:1}),u(a,{class:"price-font font-500 text-[28rpx]"},{default:i((()=>[p(x(ee.value.verify_expire_time?ee.value.verify_expire_time:"永久"),1)])),_:1})])),_:1})])),_:1})],64)):c("v-if",!0),u(a,{class:"sidebar-margin mt-[var(--top-m)] card-template"},{default:i((()=>[u(a,{class:"card-template-item justify-between"},{default:i((()=>[u(a,{class:"text-[28rpx]"},{default:i((()=>[p(x(n(C)("goodsMoney")),1)])),_:1}),u(a,{class:"price-font font-500"},{default:i((()=>[parseFloat(D.value.point)>0?(o(),d(s,{key:0,class:"text-[28rpx]"},{default:i((()=>[p(x(D.value.point)+"积分",1)])),_:1})):c("v-if",!0),parseFloat(D.value.point)>0&&parseFloat(D.value.goods_money)?(o(),d(s,{key:1,class:"mx-[4rpx] text-[28rpx]"},{default:i((()=>[p("+")])),_:1})):c("v-if",!0),parseFloat(D.value.goods_money)||!parseFloat(D.value.point)?(o(),f(v,{key:2},[u(s,{class:"text-[28rpx]"},{default:i((()=>[p("￥")])),_:1}),u(s,{class:"text-[28rpx]"},{default:i((()=>[p(x(parseFloat(D.value.goods_money).toFixed(2).split(".")[0]),1)])),_:1}),u(s,{class:"text-[28rpx]"},{default:i((()=>[p("."+x(parseFloat(D.value.goods_money).toFixed(2).split(".")[1]),1)])),_:1})],64)):c("v-if",!0)])),_:1})])),_:1}),u(a,{class:"card-template-item justify-between"},{default:i((()=>[u(a,{class:"text-[28rpx]"},{default:i((()=>[p(x(n(C)("discountMoney")),1)])),_:1}),u(a,{class:"price-font font-500 text-[28rpx]"},{default:i((()=>[p(" -￥"+x(parseFloat(D.value.discount_money).toFixed(2)),1)])),_:1})])),_:1}),u(a,{class:"card-template-item justify-between"},{default:i((()=>[u(a,{class:"text-[28rpx]"},{default:i((()=>[p(x(n(C)("deliveryMoney")),1)])),_:1}),u(a,{class:"price-font font-500 text-[28rpx]"},{default:i((()=>[p(x(parseFloat(D.value.delivery_money).toFixed(2)),1)])),_:1})])),_:1}),u(a,{class:"card-template-item justify-between items-baseline"},{default:i((()=>[u(a,{class:"text-[28rpx]"},{default:i((()=>[p(x(n(C)("orderMoney")),1)])),_:1}),u(a,{class:"text-[var(--price-text-color)] price-font"},{default:i((()=>[parseFloat(D.value.point)>0?(o(),d(s,{key:0,class:"text-[28rpx]"},{default:i((()=>[p(x(D.value.point)+"积分",1)])),_:1})):c("v-if",!0),parseFloat(D.value.point)>0&&parseFloat(D.value.order_money)?(o(),d(s,{key:1,class:"mx-[4rpx] text-[28rpx]"},{default:i((()=>[p("+")])),_:1})):c("v-if",!0),parseFloat(D.value.order_money)||!parseFloat(D.value.point)?(o(),d(s,{key:2,class:"text-[28rpx]"},{default:i((()=>[p("￥"+x(parseFloat(D.value.order_money).toFixed(2)),1)])),_:1})):c("v-if",!0)])),_:1})])),_:1})])),_:1}),u(a,{class:"flex z-2 justify-between items-center bg-[#fff] fixed left-0 right-0 bottom-0 min-h-[100rpx] pl-[30rpx] pr-[20rpx] flex-wrap pb-ios"},{default:i((()=>[u(a,{class:"flex"},{default:i((()=>[u(a,{class:"flex mr-[34rpx] flex-col justify-center items-center",onClick:t[2]||(t[2]=e=>X("index"))},{default:i((()=>[u(a,{class:"nc-iconfont nc-icon-shouyeV6xx11 text-[36rpx]"}),u(s,{class:"text-[20rpx] mt-[10rpx]"},{default:i((()=>[p(x(n(C)("index")),1)])),_:1})])),_:1})])),_:1}),u(a,{class:"flex justify-end"},{default:i((()=>[Z(D.value)?(o(),d(a,{key:0,class:"min-w-[180rpx] box-border text-[26rpx] h-[70rpx] flex-center border-[2rpx] border-solid border-[#999] rounded-full ml-[20rpx] text-[var(--text-color-light6)]",onClick:t[3]||(t[3]=e=>X("logistics"))},{default:i((()=>[p(x(n(C)("logisticsTracking")),1)])),_:1})):c("v-if",!0),1==D.value.status?(o(),d(a,{key:1,class:"min-w-[180rpx] box-border text-[26rpx] h-[70rpx] flex-center text-center border-[2rpx] border-solid border-[#999] rounded-full ml-[20rpx] text-[var(--text-color-light6)]",onClick:t[4]||(t[4]=e=>X("close"))},{default:i((()=>[p(x(n(C)("orderClose")),1)])),_:1})):c("v-if",!0),1==D.value.status?(o(),d(a,{key:2,class:"min-w-[180rpx] box-border text-[26rpx] h-[70rpx] flex-center text-center text-[#fff] primary-btn-bg rounded-full ml-[20rpx]",onClick:t[5]||(t[5]=e=>X("pay"))},{default:i((()=>[p(x(n(C)("topay")),1)])),_:1})):c("v-if",!0),3==D.value.status?(o(),d(a,{key:3,class:"min-w-[180rpx] box-border text-[26rpx] h-[70rpx] flex-center text-center text-[#fff] primary-btn-bg rounded-full ml-[20rpx]",onClick:t[6]||(t[6]=e=>X("finish"))},{default:i((()=>[p(x(n(C)("orderFinish")),1)])),_:1})):c("v-if",!0),5==D.value.status&&H.value?(o(),f(v,{key:4},[1==D.value.is_evaluate||1!=D.value.is_evaluate&&1==Q.value.is_evaluate?(o(),d(a,{key:0,class:"min-w-[180rpx] box-border text-[26rpx] h-[70rpx] flex-center border-[2rpx] border-solid border-[#999] rounded-full ml-[20rpx] !text-[var(--text-color-light6)]",onClick:t[7]||(t[7]=e=>X("evaluate"))},{default:i((()=>[p(x(1==D.value.is_evaluate?n(C)("selectedEvaluate"):n(C)("evaluate")),1)])),_:1})):c("v-if",!0)],64)):c("v-if",!0)])),_:1})])),_:1})])),_:1})),u(a,{class:"tab-bar-placeholder"}),u(A,{ref_key:"payRef",ref:U,onClose:e.payClose},null,8,["onClose"]),u(R,{ref_key:"materialRef",ref:W},null,512)])),_:1})),u(B,{loading:I.value},null,8,["loading"])])),_:1},8,["style"])}}}),[["__scopeId","data-v-30de5514"]]);export{I as default};