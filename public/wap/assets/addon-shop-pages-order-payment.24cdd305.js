import{d as e,r as t,Z as a,j as l,g as r,h as s,o,c as d,w as i,b as u,A as p,y as c,u as n,f as x,e as v,O as _,P as f,a6 as m,Q as y,z as b,v as g,i as h,D as k,a5 as w,C as j,aE as C,F,a as S,b8 as V,n as A,t as $,B as T,a4 as z,E,aF as O}from"./index-2882a2d8.js";import{_ as R}from"./u--image.d52c0594.js";import{_ as I}from"./u-alert.44ca23a1.js";import{_ as K}from"./u-tabbar.b113c065.js";import{_ as D}from"./pay.d604a92e.js";import{f as B,h as L,i as M}from"./order.74bd5d66.js";import{_ as P}from"./u-tabs.fdd28cbd.js";import{_ as Q}from"./u-popup.2abbe959.js";import{_ as U,a as Z}from"./invoice.vue_vue_type_script_setup_true_lang.83644a18.js";import{_ as q}from"./_plugin-vue_export-helper.1b428a4d.js";import"./u-image.46ebbbc1.js";import"./u-icon.1104ad2f.js";import"./u-transition.4448d2e5.js";import"./u-safe-bottom.f13b01b8.js";import"./pay.a752545f.js";import"./u-badge.e8ba7dff.js";import"./u-overlay.1a317a4e.js";import"./u-loading-icon.a37f7e61.js";/* empty css                                                                       */import"./u-empty.662c89c7.js";import"./u-form-item.03ed7ff5.js";import"./u-line.d7ff94e2.js";/* empty css                                                               */import"./u-form.54744837.js";import"./u-input.6410b5d0.js";/* empty css                                                                */const G=e({__name:"select-coupon",props:{orderKey:{type:String,default:""}},emits:["confirm"],setup(e,{expose:C,emit:F}){const S=e,V=t(0),A=t([]),$=t([]),T=t(!1),z=t(null);a((()=>S.orderKey),(()=>{S.orderKey&&!A.value.length&&B({order_key:S.orderKey}).then((({data:e})=>{const t=[],a=[];e.length&&e.forEach((e=>{e.is_normal?t.push(e):a.push(e)})),$.value=a,A.value=t,t.length&&(z.value=t[0],F("confirm",z.value))})).catch()}),{immediate:!0});const E=l((()=>[{name:`可用优惠券(${A.value.length})`,key:"normal"},{name:`不可用优惠券(${$.value.length})`,key:"disabled"}])),O=e=>{V.value=e.index},R=()=>{F("confirm",z.value),T.value=!1};return C({open:e=>{if(T.value=!0,e)for(let t=0;t<A.value.length;t++)if(A.value[t].id==e){z.value=A.value[t];break}},couponList:A}),(e,t)=>{const a=h,l=r(s("u-tabs"),P),C=k,F=w,S=j,I=r(s("u-popup"),Q);return o(),d(I,{show:T.value,onClose:t[1]||(t[1]=e=>T.value=!1),mode:"bottom",round:10,closeable:!0},{default:i((()=>[u(a,{onTouchmove:t[0]||(t[0]=p((()=>{}),["prevent","stop"])),class:"popup-common"},{default:i((()=>[u(a,{class:"title"},{default:i((()=>[c("请选择优惠券")])),_:1}),e.type?x("v-if",!0):(o(),d(a,{key:0,class:"-mt-[20rpx]"},{default:i((()=>[u(l,{list:n(E),onClick:O,current:V.value,itemStyle:"width:50%;height:88rpx;box-sizing: border-box; font-size: 28rpx;",activeStyle:{color:"var(--primary-color)"},lineColor:"var(--primary-color)"},null,8,["list","current","activeStyle"])])),_:1})),u(F,{"scroll-y":"true",class:"h-[50vh] pt-[10rpx]"},{default:i((()=>[v(u(a,{class:"px-[var(--popup-sidebar-m)] pb-[30rpx] pt-0 text-sm"},{default:i((()=>[(o(!0),_(f,null,m(A.value,(e=>(o(),d(a,{class:y(["mt-[var(--top-m)] px-[var(--pad-sidebar-m)] py-[var(--pad-top-m)] border-1 border-[#eee] border-solid rounded-[20rpx]",{"!border-[var(--primary-color)] bg-[var(--primary-color-light2)]":z.value&&z.value.id==e.id}]),onClick:t=>{return a=e,void(z.value?z.value=z.value.id!=a.id?a:null:z.value=a);var a}},{default:i((()=>[u(a,{class:y(["flex border-0 !border-b border-[#eee] border-dashed pb-[20rpx]",{"!border-[var(--primary-color)]":z.value&&z.value.id==e.id}])},{default:i((()=>[u(a,{class:"flex-1 w-0"},{default:i((()=>[u(a,{class:"text-[30rpx] mb-[20rpx] font-500"},{default:i((()=>[c(b(e.title),1)])),_:2},1024),e.min_condition_money>0?(o(),d(a,{key:0,class:"text-[24rpx] text-[var(--text-color-light6)]"},{default:i((()=>[c("满"+b(e.min_condition_money)+"可用",1)])),_:2},1024)):(o(),d(a,{key:1,class:"text-[24rpx] text-[var(--text-color-light6)]"},{default:i((()=>[c("无门槛券")])),_:1}))])),_:2},1024),u(a,{class:"text-[36rpx] price-font"},{default:i((()=>[u(C,{class:"text-xs mr-[2rpx]"},{default:i((()=>[c("￥")])),_:1}),c(b(e.price),1)])),_:2},1024)])),_:2},1032,["class"]),u(a,{class:"pt-[20rpx] text-[24rpx] text-[var(--text-color-light6)]"},{default:i((()=>[c(b(e.create_time)+" ~ "+b(e.expire_time)+"有效",1)])),_:2},1024)])),_:2},1032,["class","onClick"])))),256))])),_:1},512),[[g,0==V.value]]),v(u(a,{class:"px-[var(--popup-sidebar-m)] pb-[30rpx] pt-0 text-sm"},{default:i((()=>[(o(!0),_(f,null,m($.value,(e=>(o(),d(a,{class:"mt-[var(--top-m)] px-[var(--pad-sidebar-m)] py-[var(--pad-top-m)] border-1 !border-[#eee] border-solid rounded-[var(--rounded-mid)] bg-[var(--temp-bg)]"},{default:i((()=>[u(a,{class:"flex border-0 !border-b !border-[#ddd] border-dashed pb-[20rpx]"},{default:i((()=>[u(a,{class:"flex-1 w-0"},{default:i((()=>[u(a,{class:"text-[30rpx] mb-[20rpx] font-500"},{default:i((()=>[c(b(e.title),1)])),_:2},1024),e.min_condition_money>0?(o(),d(a,{key:0,class:"text-[24rpx] text-[var(--text-color-light9)]"},{default:i((()=>[c("满"+b(e.min_condition_money)+"可用",1)])),_:2},1024)):(o(),d(a,{key:1,class:"text-[24rpx] text-[var(--text-color-light9)]"},{default:i((()=>[c("无门槛券")])),_:1}))])),_:2},1024),u(a,{class:"text-[36rpx] price-font"},{default:i((()=>[u(C,{class:"text-xs mr-[2rpx]"},{default:i((()=>[c("￥")])),_:1}),c(b(e.price),1)])),_:2},1024)])),_:2},1024),u(a,{class:"pt-[20rpx] text-[24rpx] text-[var(--text-color-light9)]"},{default:i((()=>[c(b(e.create_time)+" ~ "+b(e.expire_time)+"期间有效",1)])),_:2},1024),u(a,{class:"text-[24rpx] pt-[10rpx] flex text-[var(--text-color-light9)]"},{default:i((()=>[c(" 不可用原因："+b(e.error),1)])),_:2},1024)])),_:2},1024)))),256))])),_:1},512),[[g,1==V.value]])])),_:1}),u(a,{class:"btn-wrap"},{default:i((()=>[u(S,{class:"primary-btn-bg btn",onClick:R},{default:i((()=>[c("确认")])),_:1})])),_:1})])),_:1})])),_:1},8,["show"])}}}),H=e({__name:"address-list",emits:["confirm"],setup(e,{expose:a,emit:l}){const v=t(!1),g=t(!1),V=t(""),A=t({}),$=t([]);C({}).then((({data:e})=>{$.value=e,g.value=!1}));const T=(e,t=2)=>{uni.setStorage({key:"selectAddressCallback",data:{back:"/addon/shop/pages/order/payment",delivery:A.value.delivery},success(){S({url:"/app/pages/member/address_edit",param:{id:e.id,source:"shop_order_payment",isSelectMap:t}})}})},z=()=>{uni.setStorage({key:"selectAddressCallback",data:{back:"/addon/shop/pages/order/payment",delivery:A.value.delivery},success(){S({url:"/app/pages/member/address_edit",param:{source:"shop_order_payment"}})}})};return a({open:e=>{v.value=!0,A.value=e,V.value=e.id}}),(e,t)=>{const a=h,g=k,C=w,S=j,E=r(s("u-popup"),Q);return o(),d(E,{show:v.value,onClose:t[1]||(t[1]=e=>v.value=!1),mode:"bottom",round:10},{default:i((()=>[u(a,{onTouchmove:t[0]||(t[0]=p((()=>{}),["prevent","stop"])),class:"popup-common"},{default:i((()=>[u(a,{class:"title"},{default:i((()=>[c(b(n(F)("selectAddress")),1)])),_:1}),u(C,{"scroll-y":"true",class:"h-[50vh]"},{default:i((()=>[(o(!0),_(f,null,m($.value,((e,t)=>(o(),d(a,{key:e.id,class:y(["flex items-center mx-[var(--popup-sidebar-m)] border-1 border-[#eee] border-solid rounded-[var(--rounded-mid)] px-[var(--pad-sidebar-m)] py-[var(--pad-top-m)]",{"mb-[var(--top-m)]":$.value.length-1!=t,"text-[var(--primary-color)] !border-[var(--primary-color)]":e.id==V.value}]),onClick:e=>(e=>{let t=$.value[e];if("local_delivery"!=A.value.delivery||t.lat||t.lng){let t={};t.address_id=$.value[e].id,t.delivery=A.value.delivery,l("confirm",t)}else T(t,1);v.value=!1})(t)},{default:i((()=>[u(g,{class:"nc-iconfont nc-icon-dingweiV6xx-1 text-[36rpx]"}),u(a,{class:"flex flex-col mx-[20rpx] w-[480rpx]"},{default:i((()=>[u(a,{class:"flex items-center truncate leading-[1.5]"},{default:i((()=>[u(g,{class:"mr-[8rpx] text-[30rpx] truncate max-w-[300rpx]"},{default:i((()=>[c(b(e.name),1)])),_:2},1024),u(g,{class:"text-[30rpx]"},{default:i((()=>[c(b(e.mobile),1)])),_:2},1024)])),_:2},1024),u(a,{class:"truncate text-[26rpx] leading-[1.5] mt-[12rpx]"},{default:i((()=>[c(b(e.full_address),1)])),_:2},1024)])),_:2},1024),u(g,{class:"nc-iconfont nc-icon-xiugaiV6xx text-[32rpx] ml-auto",onClick:t=>T(e)},null,8,["onClick"])])),_:2},1032,["class","onClick"])))),128)),!$.value||$.value&&!$.value.length?(o(),d(a,{key:0,class:"text-[var(--text-color-light6)] text-[28rpx] text-center"},{default:i((()=>[c(b(n(F)("emptyAddress")),1)])),_:1})):x("v-if",!0)])),_:1}),u(a,{class:"btn-wrap"},{default:i((()=>[u(S,{class:"primary-btn-bg btn",onClick:z},{default:i((()=>[c(b(n(F)("addAddress")),1)])),_:1})])),_:1})])),_:1})])),_:1},8,["show"])}}}),J=q(e({__name:"payment",setup(e){const p=t({order_key:"",member_remark:"",discount:{},invoice:{},delivery:{delivery_type:""}}),v=t(null),g=t(),w=t(),C=t(),F=t(),B=t(),P=t(!1),Q=t(0),q=t([]);uni.getStorageSync("orderCreateData")&&Object.assign(p.value,uni.getStorageSync("orderCreateData"));const J=uni.getStorageSync("selectAddressCallback");J&&(p.value.order_key="",p.value.delivery.delivery_type=J.delivery,p.value.delivery.take_address_id=J.address_id,uni.removeStorage({key:"selectAddressCallback"}));const N=(e,t)=>{p.value.delivery.delivery_type!=e&&(Q.value=t,p.value.order_key="",p.value.delivery.delivery_type=e,p.value.delivery.take_address_id=0,W())},W=()=>{L(p.value).then((({data:e})=>{v.value=e,p.value.order_key=e.order_key,v.value.delivery.delivery_type_list&&(q.value=Object.values(v.value.delivery.delivery_type_list)),J&&(Q.value=q.value.findIndex((e=>e.key===v.value.delivery.delivery_type))),!p.value.delivery.delivery_type&&e.delivery.delivery_type&&(p.value.delivery.delivery_type=e.delivery.delivery_type)})).catch()};W(),a((()=>q.value.length),((e,t)=>{q.value.length&&uni.getStorageSync("distributionType")&&(q.value.forEach(((e,t)=>{e.name==uni.getStorageSync("distributionType")&&(Q.value=t,N(e.key,t))})),uni.removeStorage({key:"distributionType"}))}));let X=0;const Y=()=>{ee()&&!P.value&&(P.value=!0,M(p.value).then((({data:e})=>{var t;X=e.order_id,0==v.value.basic.order_money?S({url:"/addon/shop/pages/order/detail",param:{order_id:X},mode:"redirectTo"}):null==(t=C.value)||t.open(e.trade_type,e.order_id,`/addon/shop/pages/order/detail?order_id=${e.order_id}`)})).catch((()=>{P.value=!1})))},ee=()=>{const e=p.value;if(v.value.basic.has_goods_types.includes("real")){if(["express","local_delivery"].includes(e.delivery.delivery_type)&&!v.value.delivery.take_address)return $({title:"请选择收货地址",icon:"none"}),!1;if("store"==e.delivery.delivery_type&&!e.delivery.take_store_id)return $({title:"请选择自提点",icon:"none"}),!1}return!0},te=()=>{S({url:"/addon/shop/pages/order/detail",param:{order_id:X},mode:"redirectTo"})},ae=()=>{let e={};e.delivery=p.value.delivery.delivery_type,e.type="local_delivery"==p.value.delivery.delivery_type?"location_address":"address",e.id=v.value.delivery.take_address.id,F.value.open(e)},le=l((()=>{var e;return(null==(e=g.value)?void 0:e.couponList)||[]})),re=e=>{p.value.discount.coupon_id=e?e.id:0,W()},se=e=>{p.value.delivery.take_store_id=e&&e.store_id?e.store_id:0,W()},oe=e=>{p.value.invoice=e},de=e=>{p.value.order_key="",p.value.delivery.delivery_type=e.delivery,p.value.delivery.take_address_id=e.address_id,W()};return(e,t)=>{const a=h,l=T,S=k,$=r(s("u--image"),R),L=r(s("u-alert"),I),M=z,P=j,J=r(s("u-tabbar"),K),W=r(s("pay"),D);return o(),d(a,{style:A(e.themeColor())},{default:i((()=>[v.value?(o(),d(a,{key:0,class:"bg-[var(--page-bg-color)] min-h-[100vh]"},{default:i((()=>[u(a,{class:"pt-[30rpx] sidebar-marign payment-bottom"},{default:i((()=>[x(" 配送方式 "),v.value.basic.has_goods_types.includes("real")&&q.value.length?(o(),d(a,{key:0,class:"mb-[var(--top-m)] rounded-[var(--rounded-big)] bg-white"},{default:i((()=>[q.value.length>1?(o(),d(a,{key:0,class:"rounded-tl-[var(--rounded-big)] rounded-tr-[var(--rounded-big)] head-tab flex items-center w-full bg-[#F1F1F1]"},{default:i((()=>[(o(!0),_(f,null,m(q.value,((e,t)=>(o(),d(a,{key:t,class:y(["head-tab-item flex-1 relative",{active:t===Q.value}])},{default:i((()=>[u(a,{class:"h-[74rpx] relative z-10 text-center leading-[74rpx] text-[28rpx]",onClick:a=>N(e.key,t)},{default:i((()=>[c(b(e.name),1)])),_:2},1032,["onClick"]),t===Q.value&&3==q.value.length?(o(),d(l,{key:0,class:"tab-image absolute bottom-[-2rpx] h-[94rpx] w-[240rpx]",src:n(E)(`addon/shop/payment/tab_${t}.png`),mode:"aspectFit"},null,8,["src"])):t===Q.value&&2==q.value.length?(o(),d(l,{key:1,class:"tab-img absolute bottom-[-2rpx] h-[95rpx] w-[354rpx]",src:n(E)(`addon/shop/payment/tabstyle_${t}.png`),mode:"aspectFit"},null,8,["src"])):x("v-if",!0)])),_:2},1032,["class"])))),128))])),_:1})):x("v-if",!0),u(a,{class:"min-h-[140rpx] flex items-center px-[30rpx]"},{default:i((()=>[x(" 收货地址 "),["express","local_delivery"].includes(p.value.delivery.delivery_type)?(o(),d(a,{key:0,class:"w-full",onClick:ae},{default:i((()=>[e.$u.test.isEmpty(v.value.delivery.take_address)?(o(),d(a,{key:1,class:"flex items-center"},{default:i((()=>[u(l,{class:"w-[26rpx] h-[30rpx] mr-[10rpx]",src:n(E)("addon/shop/payment/position_02.png"),mode:"aspectFit"},null,8,["src"]),u(S,{class:"text-[28rpx]"},{default:i((()=>[c("添加收货地址")])),_:1}),u(S,{class:"nc-iconfont nc-icon-youV6xx text-[26rpx] text-[var(--text-color-light9)] ml-auto"})])),_:1})):(o(),d(a,{key:0,class:"pt-[20rpx] pb-[30rpx] flex items-center"},{default:i((()=>[u(l,{class:"w-[60rpx] h-[60rpx] mr-[20rpx] flex-shrink-0",src:n(E)("addon/shop/payment/position_01.png"),mode:"aspectFit"},null,8,["src"]),u(a,{class:"flex flex-col overflow-hidden"},{default:i((()=>[u(S,{class:"text-[26rpx] text-[var(--text-color-light9)] mt-[16rpx] truncate max-w-[536rpx]"},{default:i((()=>[c(b(v.value.delivery.take_address.full_address.split(v.value.delivery.take_address.address)[0]),1)])),_:1}),u(S,{class:"font-500 text-[30rpx] mt-[14rpx] text-[#333] truncate max-w-[536rpx]"},{default:i((()=>[c(b(v.value.delivery.take_address.address),1)])),_:1}),u(a,{class:"flex items-center text-[26rpx] text-[var(--text-color-light6)] mt-[16rpx]"},{default:i((()=>[u(S,{class:"mr-[16rpx]"},{default:i((()=>[c(b(v.value.delivery.take_address.name),1)])),_:1}),u(S,null,{default:i((()=>[c(b(n(O)(v.value.delivery.take_address.mobile)),1)])),_:1})])),_:1})])),_:1}),u(S,{class:"ml-auto nc-iconfont nc-icon-youV6xx text-[26rpx] text-[var(--text-color-light9)]"})])),_:1}))])),_:1})):x("v-if",!0),x(" 自提点 "),"store"==p.value.delivery.delivery_type?(o(),d(a,{key:1,class:"flex items-center w-full",onClick:t[0]||(t[0]=e=>w.value.open())},{default:i((()=>[e.$u.test.isEmpty(v.value.delivery.take_store)?(o(),d(a,{key:1,class:"flex items-center w-full"},{default:i((()=>[u(l,{class:"w-[26rpx] h-[30rpx] mr-[10rpx]",src:n(E)("addon/shop/payment/position_02.png"),mode:"aspectFit"},null,8,["src"]),u(S,{class:"text-[28rpx]"},{default:i((()=>[c("请选择自提点")])),_:1}),u(S,{class:"ml-auto nc-iconfont nc-icon-youV6xx text-[26rpx] text-[var(--text-color-light9)]"})])),_:1})):(o(),d(a,{key:0,class:"pt-[26rpx] pb-[30rpx] w-full flex items-center"},{default:i((()=>[u(a,{class:"flex flex-col"},{default:i((()=>[u(a,{class:"text-[30rpx] font-500 text-[#303133] mb-[20rpx]"},{default:i((()=>[c(b(v.value.delivery.take_store.store_name),1)])),_:1}),u(a,{class:"text-[24rpx] text-[var(--text-color-light6)] mb-[14rpx]"},{default:i((()=>[c("门店地址："+b(v.value.delivery.take_store.full_address),1)])),_:1}),u(a,{class:"text-[24rpx] text-[var(--text-color-light6)] mb-[14rpx]"},{default:i((()=>[c("联系电话："+b(v.value.delivery.take_store.store_mobile),1)])),_:1}),u(a,{class:"text-[24rpx] text-[var(--text-color-light6)]"},{default:i((()=>[c("营业时间："+b(v.value.delivery.take_store.trade_time),1)])),_:1})])),_:1}),u(S,{class:"ml-auto nc-iconfont nc-icon-youV6xx text-[26rpx] text-[var(--text-color-light9)]"})])),_:1}))])),_:1})):x("v-if",!0)])),_:1})])),_:1})):x("v-if",!0),v.value.basic.has_goods_types.includes("real")&&!q.value.length?(o(),d(a,{key:1,class:"mb-[var(--top-m)] card-template h-[100rpx] flex items-center"},{default:i((()=>[V("p",{class:"text-[28rpx] text-[var(--primary-color)]"},"商家尚未配置配送方式")])),_:1})):x("v-if",!0),u(a,{class:"mb-[var(--top-m)] card-template"},{default:i((()=>[u(a,{class:"mb-[30rpx]"},{default:i((()=>[(o(!0),_(f,null,m(v.value.goods_data,((e,t,r)=>(o(),d(a,{class:y(["flex",{"pb-[40rpx]":r+1!=Object.keys(v.value.goods_data).length}]),key:r},{default:i((()=>[u($,{radius:"var(--goods-rounded-big)",width:"180rpx",height:"180rpx",src:n(E)(e.sku_image),model:"aspectFill"},{error:i((()=>[u(l,{class:"w-[180rpx] h-[180rpx] rounded-[var(--goods-rounded-big)] overflow-hidden",src:n(E)("static/resource/images/diy/shop_default.jpg"),mode:"aspectFill"},null,8,["src"])])),_:2},1032,["src"]),u(a,{class:"flex flex-1 w-0 flex-col justify-between ml-[20rpx] py-[6rpx]"},{default:i((()=>[u(a,{class:"line-normal"},{default:i((()=>[u(a,{class:"truncate text-[#303133] text-[28rpx] leading-[32rpx]"},{default:i((()=>[c(b(e.goods.goods_name),1)])),_:2},1024),e.sku_name?(o(),d(a,{key:0,class:"mt-[14rpx] flex"},{default:i((()=>[u(S,{class:"truncate text-[24rpx] text-[var(--text-color-light9)] leading-[28rpx]"},{default:i((()=>[c(b(e.sku_name),1)])),_:2},1024)])),_:2},1024)):x("v-if",!0)])),_:2},1024),e.not_support_delivery?(o(),d(a,{key:0,class:y(["mb-auto",{"mt-[6rpx]":!e.sku_name}])},{default:i((()=>[u(L,{type:"error",description:"该商品不支持当前所选配送方式",class:"leading-[30rpx] !inline-block",fontSize:"11"})])),_:2},1032,["class"])):x("v-if",!0),u(a,{class:"flex justify-between items-baseline"},{default:i((()=>[u(a,{class:"text-[var(--price-text-color)] flex items-baseline price-font"},{default:i((()=>[u(S,{class:"text-[24rpx] font-500 mr-[4rpx]"},{default:i((()=>[c("￥")])),_:1}),u(S,{class:"text-[40rpx] font-500"},{default:i((()=>[c(b(parseFloat(e.price).toFixed(2).split(".")[0]),1)])),_:2},1024),u(S,{class:"text-[24rpx] font-500"},{default:i((()=>[c("."+b(parseFloat(e.price).toFixed(2).split(".")[1]),1)])),_:2},1024)])),_:2},1024),u(a,{class:"font-400 text-[28rpx] text-[#303133]"},{default:i((()=>[u(S,null,{default:i((()=>[c("x")])),_:1}),u(S,null,{default:i((()=>[c(b(e.num),1)])),_:2},1024)])),_:2},1024)])),_:2},1024)])),_:2},1024)])),_:2},1032,["class"])))),128))])),_:1}),x(" 买家留言 "),u(a,{class:"bg-white flex items-center leading-[30rpx]"},{default:i((()=>[u(a,{class:"text-[28rpx] w-[150rpx] text-[#303133]"},{default:i((()=>[c("买家留言")])),_:1}),u(a,{class:"flex-1 text-[#303133]"},{default:i((()=>[u(M,{type:"text",modelValue:p.value.member_remark,"onUpdate:modelValue":t[1]||(t[1]=e=>p.value.member_remark=e),class:"text-right text-[#333] text-[28rpx]",maxlength:"50",placeholder:"请输入留言信息给卖家","placeholder-class":"text-[var(--text-color-light9)] text-[28rpx]"},null,8,["modelValue"])])),_:1})])),_:1}),x(" 发票 "),B.value&&B.value.invoiceOpen?(o(),d(a,{key:0,class:"flex items-center text-[#303133] leading-[30rpx] mt-[30rpx]",onClick:t[2]||(t[2]=e=>B.value.open())},{default:i((()=>[u(a,{class:"text-[28rpx] w-[150rpx] text-[#303133]"},{default:i((()=>[c("发票信息")])),_:1}),u(a,{class:"flex-1 w-0 text-right truncate"},{default:i((()=>[u(S,{class:"text-[28rpx] text-[#333]"},{default:i((()=>[c(b(p.value.invoice.header_name||"不需要发票"),1)])),_:1})])),_:1}),u(S,{class:"nc-iconfont nc-icon-youV6xx text-[26rpx] text-[var(--text-color-light9)]"})])),_:1})):x("v-if",!0)])),_:1}),g.value&&n(le).length?(o(),d(a,{key:2,class:"mb-[var(--top-m)] card-template"},{default:i((()=>[x(" 优惠券 "),n(le).length?(o(),d(a,{key:0,class:"flex items-center h-[40rpx] leading-[40rpx]",onClick:t[3]||(t[3]=e=>g.value.open(p.value.discount.coupon_id))},{default:i((()=>[u(a,{class:"text-[28rpx] w-[150rpx] text-[#303133] flex-shrink-0"},{default:i((()=>[c("优惠券")])),_:1}),u(a,{class:"flex-1 flex justify-end truncate"},{default:i((()=>[v.value.discount&&v.value.discount.coupon?(o(),d(S,{key:0,class:"text-[var(--primary-color)] text-[28rpx] truncate"},{default:i((()=>[c(b(v.value.discount.coupon.title),1)])),_:1})):(o(),d(S,{key:1,class:"text-[28rpx] text-gray-subtitle"},{default:i((()=>[c("请选择优惠券")])),_:1}))])),_:1}),u(S,{class:"nc-iconfont nc-icon-youV6xx -mb-[2rpx] text-[26rpx] text-[var(--text-color-light9)]"})])),_:1})):x("v-if",!0)])),_:1})):x("v-if",!0),u(a,{class:"card-template"},{default:i((()=>[u(a,{class:"title"},{default:i((()=>[c("价格明细")])),_:1}),u(a,{class:"card-template-item"},{default:i((()=>[u(a,{class:"text-[28rpx] w-[150rpx] leading-[30rpx] text-[#303133]"},{default:i((()=>[c("商品金额")])),_:1}),u(a,{class:"flex-1 w-0 text-right price-font text-[#333] text-[32rpx]"},{default:i((()=>[c(" ￥"+b(parseFloat(v.value.basic.goods_money)),1)])),_:1})])),_:1}),v.value.basic.delivery_money?(o(),d(a,{key:0,class:"card-template-item"},{default:i((()=>[u(a,{class:"text-[28rpx] w-[150rpx] leading-[30rpx] text-[#303133]"},{default:i((()=>[c("配送费用")])),_:1}),u(a,{class:"flex-1 w-0 text-right price-font text-[#333] text-[32rpx]"},{default:i((()=>[c(" ￥"+b(parseFloat(v.value.basic.delivery_money)),1)])),_:1})])),_:1})):x("v-if",!0),v.value.basic.discount_money?(o(),d(a,{key:1,class:"card-template-item"},{default:i((()=>[u(a,{class:"text-[28rpx] w-[150rpx] leading-[30rpx] text-[#303133]"},{default:i((()=>[c("优惠金额")])),_:1}),u(a,{class:"flex-1 w-0 text-right text-[var(--price-text-color)] text-[32rpx] price-font leading-[1]"},{default:i((()=>[c(" -￥"+b(parseFloat(v.value.basic.discount_money)),1)])),_:1})])),_:1})):x("v-if",!0)])),_:1})])),_:1}),u(J,{fixed:!0,placeholder:!0,safeAreaInsetBottom:!0,zIndex:"10"},{default:i((()=>[u(a,{class:"flex-1 flex items-center justify-between pl-[30rpx] pr-[20rpx]"},{default:i((()=>[u(a,{class:"flex items-baseline"},{default:i((()=>[u(S,{class:"text-[26rpx] text-[#333] leading-[32rpx]"},{default:i((()=>[c("合计：")])),_:1}),u(a,{class:"inline-block"},{default:i((()=>[u(S,{class:"text-[26rpx] font-500 text-[var(--price-text-color)] price-font leading-[30rpx]"},{default:i((()=>[c("￥")])),_:1}),u(S,{class:"text-[44rpx] font-500 text-[var(--price-text-color)] price-font leading-[46rpx]"},{default:i((()=>[c(b(parseFloat(v.value.basic.order_money).toFixed(2).split(".")[0]),1)])),_:1}),u(S,{class:"text-[26rpx] font-500 text-[var(--price-text-color)] price-font leading-[46rpx]"},{default:i((()=>[c("."+b(parseFloat(v.value.basic.order_money).toFixed(2).split(".")[1]),1)])),_:1})])),_:1})])),_:1}),u(P,{class:"w-[196rpx] h-[70rpx] font-500 text-[26rpx] leading-[70rpx] !text-[#fff] m-0 rounded-full primary-btn-bg remove-border","hover-class":"none",onClick:Y},{default:i((()=>[c("提交订单")])),_:1})])),_:1})])),_:1}),x(" 选择优惠券 "),u(n(G),{"order-key":p.value.order_key,ref_key:"couponRef",ref:g,onConfirm:re},null,8,["order-key"]),x(" 选择自提点 "),u(n(U),{ref_key:"storeRef",ref:w,onConfirm:se},null,512),x(" 发票 "),u(n(Z),{ref_key:"invoiceRef",ref:B,onConfirm:oe},null,512),x(" 地址 "),u(n(H),{ref_key:"addressRef",ref:F,onConfirm:de},null,512),u(W,{ref_key:"payRef",ref:C,onClose:te},null,512)])),_:1})):x("v-if",!0)])),_:1},8,["style"])}}}),[["__scopeId","data-v-fc5e00e2"]]);export{J as default};