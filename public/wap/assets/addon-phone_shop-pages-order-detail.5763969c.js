import{d as e,r as l,p as a,E as t,j as r,o as s,c as d,w as o,b as p,y as u,z as i,u as x,f,O as n,a6 as _,P as c,n as v,a as m,c3 as y,i as g,B as b,D as h,g as k,h as j,ad as w,F,bw as C,c1 as T,k as z,af as E}from"./index-9317da28.js";import{_ as N}from"./u-icon.5e775659.js";import{_ as M}from"./u--image.5461b7b7.js";import{_ as V}from"./pay.b34fbbeb.js";import{_ as q}from"./u-loading-page.de89bca9.js";import{a as D,o as L,b as P}from"./order.57205b50.js";import{g as R}from"./shop.cd0b40da.js";import{d as $}from"./verify.05584230.js";import{l as A}from"./logistics-tracking.82456e56.js";import{t as B}from"./topTabbar.9a918190.js";import{_ as G}from"./_plugin-vue_export-helper.1b428a4d.js";import"./u-image.74ac23f6.js";import"./u-transition.65be38eb.js";import"./u-popup.1f2ebcae.js";import"./u-safe-bottom.3546c5bb.js";import"./pay.25e81968.js";import"./u-loading-icon.aabe3d05.js";/* empty css                                                                       */import"./u-steps.28c054e9.js";import"./u-text.91b44428.js";const I=G(e({__name:"detail",setup(e){B().setTopTabbarParam({title:"订单详情"});const G=l({}),I=l(!0);l("");const J=l("");l(!1);const O=l({}),S=l("");l("");const Y=l("");a((e=>{J.value=e.order_id,H(J.value)})),R().then((({data:e})=>{O.value=e}));const H=e=>{I.value=!0,D(e).then((e=>{if(G.value=e.data,e.data.order_goods&&e.data.order_goods.length&&ee.value){let l={};l.order_goods_id=e.data.order_goods[0].order_goods_id,ae(l)}S.value=G.value.order_goods[0].goods_name,Y.value=t(G.value.order_goods[0].goods_image_thumb_small||""),I.value=!1})).catch((()=>{I.value=!1}))},K=l(null),Q=l(null),U=(e="")=>{var l,a;if("pay"==e)null==(l=K.value)||l.open(G.value.order_type,G.value.order_id,`/addon/phone_shop/pages/order/detail?order_id=${G.value.order_id}`);else if("close"==e)a=G.value,T({title:"提示",content:"您确定要关闭该订单吗？",confirmColor:z().themeColor["--primary-color"],success:e=>{e.confirm&&L(a.order_id).then((e=>{H(a.order_id)}))}});else if("finish"==e)(e=>{T({title:"提示",content:"您确定物品已收到吗？",confirmColor:z().themeColor["--primary-color"],success:l=>{l.confirm&&P(e.order_id).then((l=>{H(e.order_id)}))}})})(G.value);else if("index"==e)m({url:"/addon/phone_shop/pages/index",mode:"reLaunch"});else if("logistics"==e){if(G.value.order_delivery.length>0){let e={id:G.value.order_delivery[0].id,mobile:G.value.taker_mobile},l=[];G.value.order_delivery.forEach(((e,a)=>{e.name=`包裹${a+1}`,l.push(e)})),Q.value.open(e),Q.value.packageList=l}}else"evaluate"==e&&(G.value.is_evaluate?m({url:"/addon/phone_shop/pages/evaluate/order_evaluate_view",param:{order_id:G.value.order_id}}):m({url:"/addon/phone_shop/pages/evaluate/order_evaluate",param:{order_id:G.value.order_id}}))},W=()=>{y({latitude:Number(G.value.taker_latitude),longitude:Number(G.value.taker_longitude),success:function(){}})},X=e=>{let l=!1;if("express"!=e.delivery_type)return!1;for(let a=0;a<e.order_delivery.length;a++){let t=e.order_delivery[a];if("express"===t.sub_delivery_type&&"3"===e.status){l=!0;break}if("express"===t.sub_delivery_type&&"5"===e.status){l=!0;break}l=!1}return l},Z=l({}),ee=r((()=>{let e=!1;if(1==G.value.order_goods.length){Z.value=G.value.order_goods[0];let l=G.value.order_goods[0];e=1==l.is_verify&&"virtual"==l.goods_type&&"delivery_finish"==l.delivery_status&&3==G.value.status||5==G.value.status}return e})),le=l([]),ae=e=>{le.value=[],$("shopVirtualGoods",e).then((e=>{le.value=e.data}))};return(e,l)=>{const a=g,r=b,y=h,T=k(j("u-icon"),N),z=k(j("u--image"),M),D=E,L=w,P=k(j("pay"),V),R=k(j("u-loading-page"),q);return s(),d(a,{style:v(e.themeColor())},{default:o((()=>[I.value?f("v-if",!0):(s(),d(a,{key:0,class:"bg-[#f8f8f8] min-h-screen overflow-hidden"},{default:o((()=>[I.value?f("v-if",!0):(s(),d(a,{key:0,class:"pb-20rpx"},{default:o((()=>[G.value.status_name?(s(),d(a,{key:0,class:"pl-[40rpx] pr-[50rpx] bg-linear pb-[100rpx]"},{default:o((()=>[p(a,{class:"flex justify-between items-center pt-[40rpx]"},{default:o((()=>[p(a,{class:"text-[#fff] text-[36rpx] font-500 leading-[42rpx]"},{default:o((()=>[u(i(G.value.status_name.name),1)])),_:1}),1==G.value.status?(s(),d(r,{key:0,class:"w-[180rpx] h-[140rpx]",src:x(t)("addon/phone_shop/detail/payment.png"),mode:"aspectFit"},null,8,["src"])):f("v-if",!0),2==G.value.status?(s(),d(r,{key:1,class:"w-[180rpx] h-[140rpx]",src:x(t)("addon/phone_shop/detail/deliver_goods.png"),mode:"aspectFit"},null,8,["src"])):f("v-if",!0),3==G.value.status?(s(),d(r,{key:2,class:"w-[180rpx] h-[140rpx]",src:x(t)("addon/phone_shop/detail/receive.png"),mode:"aspectFit"},null,8,["src"])):f("v-if",!0),5==G.value.status?(s(),d(r,{key:3,class:"w-[180rpx] h-[140rpx]",src:x(t)("addon/phone_shop/detail/complete.png"),mode:"aspectFit"},null,8,["src"])):f("v-if",!0),-1==G.value.status?(s(),d(r,{key:4,class:"w-[180rpx] h-[140rpx]",src:x(t)("addon/phone_shop/detail/close.png"),mode:"aspectFit"},null,8,["src"])):f("v-if",!0)])),_:1})])),_:1})):f("v-if",!0),"virtual"!=G.value.delivery_type?(s(),d(a,{key:1,class:"bg-[#fff] sidebar-marign p-[30rpx] mt-[-86rpx] rounded-[16rpx]"},{default:o((()=>["express"==G.value.delivery_type?(s(),d(a,{key:0},{default:o((()=>[p(a,{class:"text-[#303133]"},{default:o((()=>[p(a,{class:"flex items-center"},{default:o((()=>[p(y,{class:"nc-iconfont nc-icon-dizhiguanliV6xx text-[30rpx] mr-[6rpx]"}),p(a,{class:"text-[30rpx] font-500 leading-[38rpx] overflow-hidden"},{default:o((()=>[u(i(G.value.taker_address),1)])),_:1})])),_:1}),p(a,{class:"mt-[12rpx] text-[22rpx] leading-[26rpx]"},{default:o((()=>[u(i(G.value.taker_full_address.split(G.value.taker_address)[0]),1)])),_:1}),p(a,{class:"mt-[16rpx] text-[24rpx] leading-[28rpx]"},{default:o((()=>[p(y,null,{default:o((()=>[u(i(G.value.taker_name),1)])),_:1}),p(y,{class:"ml-[15rpx]"},{default:o((()=>[u(i(G.value.taker_mobile),1)])),_:1})])),_:1})])),_:1})])),_:1})):f("v-if",!0),"store"==G.value.delivery_type?(s(),d(a,{key:1},{default:o((()=>[p(a,{class:"flex"},{default:o((()=>[p(a,null,{default:o((()=>[p(z,{class:"overflow-hidden",radius:"10rpx",width:"100rpx",height:"100rpx",src:x(t)(G.value.store.store_logo?G.value.store.store_logo:""),model:"aspectFill"},{error:o((()=>[p(T,{name:"photo",color:"#999",size:"50"})])),_:1},8,["src"])])),_:1}),p(a,{class:"flex flex-col ml-[20rpx]"},{default:o((()=>[p(y,{class:"text-[24rpx]"},{default:o((()=>[u(i(G.value.store.store_name),1)])),_:1}),p(y,{class:"text-[24rpx] mt-[15rpx]"},{default:o((()=>[u(i(G.value.store.trade_time),1)])),_:1}),p(y,{class:"text-[24rpx] mt-[10rpx] leading-[35rpx]"},{default:o((()=>[u(i(G.value.store.full_address),1)])),_:1})])),_:1})])),_:1})])),_:1})):f("v-if",!0),"local_delivery"==G.value.delivery_type?(s(),d(a,{key:2,class:"flex"},{default:o((()=>[p(a,{onClick:W,class:"min-w-[100rpx] flex items-center justify-center"},{default:o((()=>[p(T,{name:"map",size:"25"})])),_:1}),p(a,{class:"flex flex-col ml-[20rpx]"},{default:o((()=>[p(y,{class:"text-[24rpx]"},{default:o((()=>[u(i(G.value.taker_name),1)])),_:1}),p(y,{class:"text-[24rpx] mt-[15rpx]"},{default:o((()=>[u(i(G.value.taker_mobile),1)])),_:1}),p(y,{class:"text-[24rpx] mt-[10rpx] leading-[35rpx]"},{default:o((()=>[u(i(G.value.taker_full_address),1)])),_:1})])),_:1})])),_:1})):f("v-if",!0)])),_:1})):f("v-if",!0),p(a,{class:"bg-[#fff] sidebar-marign p-[20rpx] rounded-[16rpx]",style:v("virtual"==G.value.delivery_type?"margin-top: -70rpx":"margin-top: 20rpx")},{default:o((()=>[(s(!0),n(c,null,_(G.value.order_goods,((e,l)=>(s(),d(a,{class:"order-goods-item flex justify-between flex-wrap mt-[30rpx]",key:l},{default:o((()=>[p(a,{class:"w-[150rpx] h-[150rpx] flex-2",onClick:l=>{return a=e.goods_id,void("exchange"==G.value.activity_type?m({url:"/addon/phone_shop/pages/point/detail",param:{id:G.value.relate_id}}):m({url:"/addon/phone_shop/pages/goods/detail",param:{goods_id:a}}));var a}},{default:o((()=>[p(z,{class:"overflow-hidden",radius:"10rpx",width:"150rpx",height:"150rpx",src:x(t)(e.goods_image_thumb_small?e.goods_image_thumb_small:""),model:"aspectFill"},{error:o((()=>[p(r,{class:"w-[150rpx] h-[150rpx] rounded-[10rpx] overflow-hidden",src:x(t)("static/resource/images/diy/shop_default.jpg"),mode:"aspectFill"},null,8,["src"])])),_:2},1032,["src"])])),_:2},1032,["onClick"]),p(a,{class:"ml-[20rpx] flex flex-1 flex-col justify-between"},{default:o((()=>[p(a,null,{default:o((()=>[p(y,{class:"text-[28rpx] text-item leading-[40rpx]"},{default:o((()=>[u(i(e.goods_name),1)])),_:2},1024),p(y,{class:"text-[20rpx] text-item leading-[40rpx]"},{default:o((()=>[u(i(e.sub_title),1)])),_:2},1024),e.sku_no?(s(),d(a,{key:0},{default:o((()=>[p(a,{class:"text-[24rpx] mt-[10rpx] text-[#999] truncate max-w-[450rpx] leading-[28rpx]"},{default:o((()=>[u(" sn: "+i(e.sku_no),1)])),_:2},1024)])),_:2},1024)):f("v-if",!0),e.sku_name?(s(),d(a,{key:1},{default:o((()=>[p(a,{class:"text-[24rpx] mt-[10rpx] text-[#999] truncate max-w-[450rpx] leading-[28rpx]"},{default:o((()=>[u(i(e.sku_name),1)])),_:2},1024)])),_:2},1024)):f("v-if",!0)])),_:2},1024),p(a,{class:"flex justify-between items-center leading-[28rpx]"},{default:o((()=>[p(a,{class:"price-font"},{default:o((()=>[e.extend&&parseFloat(e.extend.point)>0?(s(),d(y,{key:0,class:"text-[32rpx]"},{default:o((()=>[u(i(e.extend.point)+"积分",1)])),_:2},1024)):f("v-if",!0),parseFloat(e.price)&&e.extend&&parseFloat(e.extend.point)>0?(s(),d(y,{key:1,class:"mx-[4rpx] text-[32rpx]"},{default:o((()=>[u("+")])),_:1})):f("v-if",!0),parseFloat(e.price)?(s(),n(c,{key:2},[p(y,{class:"text-[32rpx]"},{default:o((()=>[u("￥")])),_:1}),p(y,{class:"text-[32rpx] font-500"},{default:o((()=>[u(i(parseFloat(e.price).toFixed(2).split(".")[0]),1)])),_:2},1024),p(y,{class:"text-[32rpx] font-500"},{default:o((()=>[u("."+i(parseFloat(e.price).toFixed(2).split(".")[1]),1)])),_:2},1024)],64)):f("v-if",!0)])),_:2},1024),p(y,{class:"text-right text-[26rpx]"},{default:o((()=>[u("x"+i(e.num),1)])),_:2},1024)])),_:2},1024)])),_:2},1024),"1"!=e.status||1==e.is_enable_refund?(s(),d(a,{key:0,class:"flex justify-end self-end w-[100%] mt-[10rpx]"},{default:o((()=>["1"!=e.status?(s(),d(a,{key:0,class:"text-[26rpx] text-[#303133] leading-[46rpx] px-[10rpx] border-[2rpx] border-solid border-[#999] rounded-[23rpx]",onClick:l=>x(m)({url:"/addon/phone_shop/pages/refund/detail",param:{order_refund_no:e.order_refund_no}})},{default:o((()=>[u(" 查看退款")])),_:2},1032,["onClick"])):1==e.is_enable_refund?(s(),d(a,{key:1,class:"text-[26rpx] text-[#303133] leading-[46rpx] px-[10rpx] border-[2rpx] border-solid border-[#999] rounded-[23rpx] ml-[20rpx]",onClick:l=>{return a=e.order_goods_id,void m({url:"/addon/phone_shop/pages/refund/apply",param:{order_id:G.value.order_id,order_goods_id:a}});var a}},{default:o((()=>[u("申请退款")])),_:2},1032,["onClick"])):f("v-if",!0)])),_:2},1024)):f("v-if",!0)])),_:2},1024)))),128))])),_:1},8,["style"]),p(a,{class:"bg-[#fff] sidebar-marign p-[20rpx] mt-[20rpx] rounded-[16rpx]"},{default:o((()=>[p(a,{class:"flex justify-between text-[28rpx] leading-[32rpx]"},{default:o((()=>[p(a,null,{default:o((()=>[u(i(x(F)("orderNo")),1)])),_:1}),p(a,{class:"flex items-center"},{default:o((()=>[p(y,null,{default:o((()=>[u(i(G.value.order_no),1)])),_:1}),p(y,{class:"w-[2rpx] h-[20rpx] bg-[#999] mx-[10rpx]"}),p(y,{class:"text-[#EF900A]",onClick:l[0]||(l[0]=e=>x(C)(G.value.order_no))},{default:o((()=>[u("复制")])),_:1})])),_:1})])),_:1}),G.value.out_trade_no?(s(),d(a,{key:0,class:"flex justify-between text-[28rpx] leading-[32rpx] mt-[30rpx]"},{default:o((()=>[p(a,null,{default:o((()=>[u(i(x(F)("orderTradeNo")),1)])),_:1}),p(a,null,{default:o((()=>[u(i(G.value.out_trade_no),1)])),_:1})])),_:1})):f("v-if",!0),p(a,{class:"flex justify-between text-[28rpx] leading-[32rpx] mt-[30rpx]"},{default:o((()=>[p(a,null,{default:o((()=>[u(i(x(F)("createTime")),1)])),_:1}),p(a,null,{default:o((()=>[u(i(G.value.create_time),1)])),_:1})])),_:1}),p(a,{class:"flex justify-between text-[28rpx] leading-[32rpx] mt-[30rpx]"},{default:o((()=>[p(a,null,{default:o((()=>[u(i(x(F)("deliveryType")),1)])),_:1}),p(a,null,{default:o((()=>[u(i(G.value.delivery_type_name),1)])),_:1})])),_:1}),G.value.pay?(s(),d(a,{key:1,class:"flex justify-between text-[28rpx] leading-[32rpx] mt-[30rpx]"},{default:o((()=>[p(a,null,{default:o((()=>[u(i(x(F)("payTypeName")),1)])),_:1}),p(a,null,{default:o((()=>[u(i(G.value.pay.type_name),1)])),_:1})])),_:1})):f("v-if",!0),G.value.pay?(s(),d(a,{key:2,class:"flex justify-between text-[28rpx] leading-[32rpx] mt-[30rpx]"},{default:o((()=>[p(a,null,{default:o((()=>[u(i(x(F)("payTime")),1)])),_:1}),p(a,null,{default:o((()=>[u(i(G.value.pay.pay_time),1)])),_:1})])),_:1})):f("v-if",!0)])),_:1}),f(" 核销码 "),x(ee)?(s(),n(c,{key:2},[le.value&&le.value.length?(s(),d(a,{key:0,class:"bg-[#fff] sidebar-marign p-[20rpx] mt-[20rpx] rounded-[16rpx]"},{default:o((()=>[le.value.length>1?(s(),d(L,{key:0,class:"h-[450rpx]",circular:"","indicator-dots":"true"},{default:o((()=>[(s(!0),n(c,null,_(le.value,((e,l)=>(s(),d(D,{key:l},{default:o((()=>[p(a,{class:"flex flex-col items-center justify-center"},{default:o((()=>[p(r,{src:e.qrcode,class:"w-[300rpx]",mode:"widthFix"},null,8,["src"])])),_:2},1024),p(a,{class:"w-full my-[20rpx] border-0 border-t-[2rpx] border-dashed border-[#e5e5e5]"}),p(a,{class:"flex items-center justify-center"},{default:o((()=>[p(y,{class:"text-[28rpx] font-bold"},{default:o((()=>[u(i(e.code),1)])),_:2},1024),p(y,{class:"text-[#666] text-[24rpx] ml-[10rpx] border-[2rpx] border-solid border-[#666] bg-[#f7f7f7] px-[12rpx] py-[6rpx] rounded",onClick:l=>x(C)(e.code)},{default:o((()=>[u("复制")])),_:2},1032,["onClick"])])),_:2},1024)])),_:2},1024)))),128))])),_:1})):(s(),n(c,{key:1},[p(a,{class:"flex flex-col items-center justify-center"},{default:o((()=>[p(r,{src:le.value[0].qrcode,class:"w-[300rpx]",mode:"widthFix"},null,8,["src"])])),_:1}),p(a,{class:"w-full my-[20rpx] border-0 border-t-[2rpx] border-dashed border-[#e5e5e5]"}),p(a,{class:"flex items-center justify-center"},{default:o((()=>[p(y,{class:"text-[28rpx] font-bold"},{default:o((()=>[u(i(le.value[0].code),1)])),_:1}),p(y,{class:"text-[#666] text-[24rpx] ml-[10rpx] border-[2rpx] border-solid border-[#666] bg-[#f7f7f7] px-[12rpx] py-[6rpx] rounded",onClick:l[1]||(l[1]=e=>x(C)(le.value[0].code))},{default:o((()=>[u("复制")])),_:1})])),_:1})],64))])),_:1})):f("v-if",!0),p(a,{class:"bg-[#fff] sidebar-marign p-[20rpx] mt-[20rpx] rounded-[16rpx]"},{default:o((()=>[p(a,{class:"pb-[20rpx] pt-[10rpx] border-0 border-b-[2rpx] border-dashed border-[#e5e5e5]"},{default:o((()=>[u("核销信息 ")])),_:1}),p(a,{class:"flex mt-[30rpx] justify-between leading-[32rpx]"},{default:o((()=>[p(a,{class:"text-[28rpx]"},{default:o((()=>[u("核销次数")])),_:1}),p(a,{class:"price-font font-500 text-[28rpx]"},{default:o((()=>[u(i("剩余"+(Z.value.num-Z.value.verify_count)+"次")+"/"+i("共"+Z.value.num+"次"),1)])),_:1})])),_:1}),p(a,{class:"flex mt-[30rpx] justify-between leading-[32rpx]"},{default:o((()=>[p(a,{class:"text-[28rpx]"},{default:o((()=>[u("有效期")])),_:1}),p(a,{class:"price-font font-500 text-[28rpx]"},{default:o((()=>[u(i(Z.value.verify_expire_time?Z.value.verify_expire_time:"永久"),1)])),_:1})])),_:1})])),_:1})],64)):f("v-if",!0),p(a,{class:"bg-[#fff] sidebar-marign p-[20rpx] mt-[20rpx] rounded-[16rpx]"},{default:o((()=>[p(a,{class:"flex justify-between leading-[32rpx]"},{default:o((()=>[p(a,{class:"text-[28rpx]"},{default:o((()=>[u(i(x(F)("goodsMoney")),1)])),_:1}),p(a,{class:"price-font font-500"},{default:o((()=>[parseFloat(G.value.point)>0?(s(),d(y,{key:0,class:"text-[28rpx]"},{default:o((()=>[u(i(G.value.point)+"积分",1)])),_:1})):f("v-if",!0),parseFloat(G.value.point)>0&&parseFloat(G.value.goods_money)?(s(),d(y,{key:1,class:"mx-[4rpx] text-[28rpx]"},{default:o((()=>[u("+")])),_:1})):f("v-if",!0),parseFloat(G.value.goods_money)||!parseFloat(G.value.point)?(s(),n(c,{key:2},[p(y,{class:"text-[28rpx]"},{default:o((()=>[u("￥")])),_:1}),p(y,{class:"text-[28rpx]"},{default:o((()=>[u(i(parseFloat(G.value.goods_money).toFixed(2).split(".")[0]),1)])),_:1}),p(y,{class:"text-[28rpx]"},{default:o((()=>[u("."+i(parseFloat(G.value.goods_money).toFixed(2).split(".")[1]),1)])),_:1})],64)):f("v-if",!0)])),_:1})])),_:1}),p(a,{class:"flex justify-between text-[28rpx] leading-[32rpx] mt-[30rpx]"},{default:o((()=>[p(a,{class:"text-[28rpx]"},{default:o((()=>[u(i(x(F)("discountMoney")),1)])),_:1}),p(a,{class:"price-font font-500"},{default:o((()=>[p(y,{class:"text-[24rpx]"},{default:o((()=>[u("-￥")])),_:1}),p(y,{class:"text-[28rpx]"},{default:o((()=>[u(i(parseFloat(G.value.discount_money).toFixed(2).split(".")[0]),1)])),_:1}),p(y,{class:"text-[22rpx]"},{default:o((()=>[u("."+i(parseFloat(G.value.discount_money).toFixed(2).split(".")[1]),1)])),_:1})])),_:1})])),_:1}),p(a,{class:"flex justify-between text-[28rpx] leading-[32rpx] mt-[30rpx]"},{default:o((()=>[p(a,{class:"text-[28rpx]"},{default:o((()=>[u(i(x(F)("deliveryMoney")),1)])),_:1}),p(a,{class:"price-font font-500"},{default:o((()=>[p(y,{class:"text-[24rpx]"},{default:o((()=>[u("￥")])),_:1}),p(y,{class:"text-[28rpx]"},{default:o((()=>[u(i(parseFloat(G.value.delivery_money).toFixed(2).split(".")[0]),1)])),_:1}),p(y,{class:"text-[22rpx]"},{default:o((()=>[u("."+i(parseFloat(G.value.delivery_money).toFixed(2).split(".")[1]),1)])),_:1})])),_:1})])),_:1}),p(a,{class:"flex justify-end text-[28rpx] leading-[32rpx] mt-[30rpx] items-baseline"},{default:o((()=>[p(a,{class:"text-[28rpx]"},{default:o((()=>[u(i(x(F)("orderMoney"))+"：",1)])),_:1}),p(a,{class:"text-[var(--price-text-color)] price-font font-500"},{default:o((()=>[parseFloat(G.value.point)>0?(s(),d(y,{key:0,class:"text-[28rpx]"},{default:o((()=>[u(i(G.value.point)+"积分",1)])),_:1})):f("v-if",!0),parseFloat(G.value.point)>0&&parseFloat(G.value.order_money)?(s(),d(y,{key:1,class:"mx-[4rpx] text-[28rpx]"},{default:o((()=>[u("+")])),_:1})):f("v-if",!0),parseFloat(G.value.order_money)||!parseFloat(G.value.point)?(s(),n(c,{key:2},[p(y,{class:"text-[28rpx]"},{default:o((()=>[u("￥")])),_:1}),p(y,{class:"text-[28rpx]"},{default:o((()=>[u(i(parseFloat(G.value.order_money).toFixed(2).split(".")[0]),1)])),_:1}),p(y,{class:"text-[28rpx]"},{default:o((()=>[u("."+i(parseFloat(G.value.order_money).toFixed(2).split(".")[1]),1)])),_:1})],64)):f("v-if",!0)])),_:1})])),_:1})])),_:1}),p(a,{class:"flex z-2 justify-between items-center bg-[#fff] fixed left-0 right-0 bottom-0 min-h-[100rpx] px-1 flex-wrap pb-ios"},{default:o((()=>[p(a,{class:"flex"},{default:o((()=>[p(a,{class:"flex w-[70rpx] mr-[20rpx] flex-col justify-center items-center",onClick:l[2]||(l[2]=e=>U("index"))},{default:o((()=>[p(a,{class:"nc-iconfont nc-icon-shouyeV6xx text-[36rpx]"}),p(y,{class:"text-[20rpx] mt-[10rpx]"},{default:o((()=>[u(i(x(F)("index")),1)])),_:1})])),_:1})])),_:1}),p(a,{class:"flex justify-end mr-[30rpx]"},{default:o((()=>[X(G.value)?(s(),d(a,{key:0,class:"text-[26rpx] leading-[58rpx] px-[23rpx] border-[2rpx] border-solid border-[#999] rounded-full ml-[20rpx] text-[#666]",onClick:l[3]||(l[3]=e=>U("logistics"))},{default:o((()=>[u(i(x(F)("logisticsTracking")),1)])),_:1})):f("v-if",!0),1==G.value.status?(s(),d(a,{key:1,class:"text-[26rpx] leading-[58rpx] px-[23rpx] border-[2rpx] border-solid border-[#999] rounded-full ml-[20rpx] text-[#666]",onClick:l[4]||(l[4]=e=>U("close"))},{default:o((()=>[u(i(x(F)("orderClose")),1)])),_:1})):f("v-if",!0),1==G.value.status?(s(),d(a,{key:2,class:"text-[26rpx] leading-[58rpx] px-[23rpx] text-[#fff] primary-btn-bg rounded-full ml-[20rpx]",onClick:l[5]||(l[5]=e=>U("pay"))},{default:o((()=>[u(i(x(F)("topay")),1)])),_:1})):f("v-if",!0),3==G.value.status?(s(),d(a,{key:3,class:"text-[26rpx] leading-[58rpx] px-[23rpx] text-[#fff] primary-btn-bg rounded-full ml-[20rpx]",onClick:l[6]||(l[6]=e=>U("finish"))},{default:o((()=>[u(i(x(F)("orderFinish")),1)])),_:1})):f("v-if",!0),5==G.value.status?(s(),n(c,{key:4},[1==G.value.is_evaluate||1!=G.value.is_evaluate&&1==O.value.is_evaluate?(s(),d(a,{key:0,class:"text-[26rpx] leading-[52rpx] px-[23rpx] border-[2rpx] border-solid border-[#999] rounded-full ml-[20rpx] !text-[#666]",onClick:l[7]||(l[7]=e=>U("evaluate"))},{default:o((()=>[u(i(1==G.value.is_evaluate?x(F)("selectedEvaluate"):x(F)("evaluate")),1)])),_:1})):f("v-if",!0)],64)):f("v-if",!0)])),_:1})])),_:1})])),_:1})),p(a,{class:"tab-bar-placeholder"}),p(P,{ref_key:"payRef",ref:K,onClose:e.payClose},null,8,["onClose"]),p(A,{ref_key:"materialRef",ref:Q},null,512)])),_:1})),p(R,{"bg-color":"rgb(248,248,248)",loading:I.value,loadingText:"",fontSize:"16",color:"#303133"},null,8,["loading"])])),_:1},8,["style"])}}}),[["__scopeId","data-v-359ec0aa"]]);export{I as default};
