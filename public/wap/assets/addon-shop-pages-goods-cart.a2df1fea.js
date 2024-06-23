import{d as e,l as t,m as l,r,a9 as s,W as a,t as o,o as d,c as i,w as c,u,b as n,x,y as p,E as f,F as m,G as g,f as _,H as h,n as v,B as b,I as k,a as w,N as y,i as F,ab as j,C as S,g as C,h as z,a4 as E,V,X as I,aj as H}from"./index-905183d4.js";import{_ as B}from"./u-icon.86a2aad0.js";import{_ as L}from"./u--image.b5d65e0e.js";import{_ as N}from"./u-number-box.3b1a803a.js";import{_ as P}from"./u-swipe-action-item.93bd90a4.js";import{_ as R}from"./u-swipe-action.72e56da6.js";import{_ as U}from"./u-button.d3798ecb.js";import{_ as W}from"./u-loading-page.7aa0a449.js";import{_ as X}from"./tabbar.f4383367.js";import{u as A,g as D}from"./cart.f169c06a.js";import{_ as G}from"./_plugin-vue_export-helper.1b428a4d.js";import"./u-image.44c969ef.js";import"./u-transition.dbaca185.js";import"./u-loading-icon.c376267d.js";import"./u-badge.82a65592.js";import"./u-tabbar.bedfa48a.js";import"./u-safe-bottom.e94b03c1.js";const O=G(e({__name:"cart",setup(e){const G=t(),O=l((()=>G.info)),T=r(!0),$=r(!1),q=r("0.00"),J=r([]),K=r([]),M=r(!1),Q=r(!0),Y=A(),Z=()=>{D({}).then((({data:e})=>{J.value=[],K.value=[],T.value=!1,e.forEach((e=>{e.checked=!1,e.goods.status&&0==e.goods.delete_time&&e.goodsSku.stock?(e.num>e.goodsSku.stock&&(e.num=e.goodsSku.stock),J.value.push(e)):K.value.push(e)})),ae(),Q.value&&(Q.value=!1)})).catch((e=>{401==e.code&&(J.value=[],K.value=[],T.value=!1)}))};s((()=>{Z(),Y.getList()}));const ee=l((()=>{let e=0;return J.value.forEach((t=>{t.checked&&(e+=1)})),e}));a((()=>J.value),(()=>{let e=0;J.value.forEach((t=>{if(t.checked&&t.goodsSku){let l=0;l=t.goods.is_discount?t.goodsSku.sale_price:t.goods.member_discount&&I()?t.goodsSku.member_price:t.goodsSku.price,e+=parseFloat(l)*t.num}})),q.value=e.toFixed(2)}),{deep:!0});const te=()=>{b().setLoginBack({url:"/addon/shop/pages/goods/cart"})},le=e=>({min:1,max:e.goodsSku.stock||1}),re=r([{text:o("delete"),style:{backgroundColor:"#F56C6C"}}]),se=r(),ae=()=>{const e=J.value.length!=ee.value;J.value.forEach((t=>{t.checked=e}))},oe=()=>{if(!ee.value)return void k({title:"还没有选择商品",icon:"none"});const e=[];J.value.forEach((t=>{t.checked&&e.push(t.id)})),uni.setStorage({key:"orderCreateData",data:{cart_ids:e},success(){w({url:"/addon/shop/pages/order/payment"})}})},de=()=>{if(!ee.value)return void k({title:"还没有选择商品",icon:"none"});if($.value)return;$.value=!0;const e=[];J.value.forEach((t=>{t.checked&&e.push(t.id)})),Y.delete(e,(()=>{Z(),$.value=!1}))},ie=()=>{if($.value)return;$.value=!0;const e=K.value.map((e=>e.id));Y.delete(e,(()=>{Z(),$.value=!1})),K.value=[]};let ce=e=>{let t="";return t=e.goods.is_discount?"discount_price":e.goods.member_discount&&I()?"member_price":"",t},ue=e=>{let t="0.00";return t=e.goods.is_discount?e.goodsSku.sale_price:e.goods.member_discount&&I()?e.goodsSku.member_price:e.goodsSku.price,t};return(e,t)=>{const l=y,r=F,s=j,a=S,o=C(z("u-icon"),B),b=C(z("u--image"),L),k=C(z("u-number-box"),N),I=C(z("u-swipe-action-item"),P),A=C(z("u-swipe-action"),R),D=E,G=C(z("u-button"),U),Q=C(z("u-loading-page"),W),Z=C(z("tabbar"),X);return d(),i(r,{style:v(e.themeColor())},{default:c((()=>[T.value?_("v-if",!0):(d(),i(r,{key:0,class:"bg-page h-screen overflow-hidden flex flex-col"},{default:c((()=>[u(O)?J.value.length||K.value.length?(d(),i(r,{key:2,class:"flex-1 h-0"},{default:c((()=>[n(D,{class:"scroll-height box-border","scroll-y":!0},{default:c((()=>[n(r,{class:"py-[20rpx] px-[30rpx]"},{default:c((()=>[J.value.length?(d(),i(r,{key:0,class:"bg-[#fff] pb-[10rpx] box-border rounded-[16rpx]"},{default:c((()=>[n(r,{class:"flex px-[20rpx] justify-between items-center h-[79rpx] box-border font-400 text-[#303133] text-[24rpx] mb-[10rpx] leading-[30rpx] border-0 border-b-[2rpx] border-solid border-[#f6f6f6]"},{default:c((()=>[n(a,null,{default:c((()=>[x("共"),n(a,{class:"text-[var(--price-text-color)]"},{default:c((()=>[x(p(J.value.length),1)])),_:1}),x("件商品")])),_:1}),n(a,{onClick:t[1]||(t[1]=e=>M.value=!M.value),class:"text-[#666] text-[26rpx]"},{default:c((()=>[x(p(M.value?"完成":"管理"),1)])),_:1})])),_:1}),n(A,{ref_key:"swipeActive",ref:se},{default:c((()=>[(d(!0),f(g,null,m(J.value,((e,t)=>(d(),f(g,null,[e.goodsSku?(d(),i(r,{key:0,class:"py-[20rpx] overflow-hidden w-full"},{default:c((()=>[n(I,{options:re.value,onClick:l=>((e,t)=>{$.value||($.value=!0,Y.delete(t.id,(()=>{J.value.splice(e,1),H((()=>{se.value&&se.value.closeOther()})),$.value=!1})))})(t,e)},{default:c((()=>[n(r,{class:"flex px-[20rpx]"},{default:c((()=>[n(a,{class:h(["self-center iconfont text-color text-[34rpx] mr-[20rpx] w-[34rpx] h-[34rpx] rounded-[17rpx] overflow-hidden shrink-0",{iconxuanze1:e.checked,"bg-[#F5F5F5]":!e.checked}]),onClick:t=>e.checked=!e.checked},null,8,["class","onClick"]),n(b,{class:"rounded-[8rpx] overflow-hidden",width:"170rpx",height:"170rpx",onClick:t=>{w({url:"/addon/shop/pages/goods/detail",param:{goods_id:e.goods_id}})},src:u(V)(e.goodsSku.sku_image_thumb_mid||""),model:"aspectFill"},{error:c((()=>[n(o,{name:"photo",color:"#999",size:"50"})])),_:2},1032,["onClick","src"]),n(r,{class:"flex flex-1 flex-wrap ml-[20rpx]"},{default:c((()=>[n(r,{class:"w-[100%]"},{default:c((()=>[n(r,{class:"w-[406rpx] text-[#333] text-[28rpx] max-h-[80rpx] leading-[40rpx] multi-hidden font-400"},{default:c((()=>[x(p(e.goods.goods_name),1)])),_:2},1024),n(r,{class:"w-[406rpx] mt-[12rpx] truncate text-[#888] text-[24rpx] leading-[32rpx]"},{default:c((()=>[x(p(e.goodsSku.sku_spec_format),1)])),_:2},1024)])),_:2},1024),n(r,{class:"flex justify-between items-end self-end w-[100%]"},{default:c((()=>[n(r,{class:"flex items-end text-[var(--price-text-color)] leading-[40rpx] price-font"},{default:c((()=>[n(a,{class:"text-[var(--price-text-color)] price-font"},{default:c((()=>[n(a,{class:"text-[26rpx] font-500"},{default:c((()=>[x("￥")])),_:1}),n(a,{class:"text-[36rpx] font-500"},{default:c((()=>[x(p(parseFloat(u(ue)(e)).toFixed(2).split(".")[0]),1)])),_:2},1024),n(a,{class:"text-[24rpx] font-500"},{default:c((()=>[x("."+p(parseFloat(u(ue)(e)).toFixed(2).split(".")[1]),1)])),_:2},1024),"member_price"==u(ce)(e)?(d(),i(l,{key:0,class:"h-[24rpx] ml-[6rpx]",src:u(V)("addon/shop/VIP.png"),mode:"heightFix"},null,8,["src"])):_("v-if",!0),"discount_price"==u(ce)(e)?(d(),i(l,{key:1,class:"h-[24rpx] ml-[6rpx]",src:u(V)("addon/shop/discount.png"),mode:"heightFix"},null,8,["src"])):_("v-if",!0)])),_:2},1024)])),_:2},1024),n(k,{modelValue:e.num,"onUpdate:modelValue":t=>e.num=t,min:le(e).min,max:le(e).max,integer:"",step:1,"input-width":"68rpx","input-height":"52rpx","button-size":"52rpx",disabledInput:"",onChange:e=>((e,t)=>{uni.$u.debounce((e=>{const l=J.value[t];Y.increase({id:l.id,goods_id:l.goods_id,sku_id:l.sku_id,stock:l.goodsSku.stock,sale_price:l.goodsSku.sale_price,num:l.num},0)}),500)})(0,t)},{minus:c((()=>[n(a,{class:h([{"text-[#999]":e.num===le(e).min,"text-[#303133]":e.num!==le(e).min},"text-[34rpx] iconfont iconjian"])},null,8,["class"])])),input:c((()=>[n(a,{class:"text-[#303133] text-[24rpx] mx-[10rpx] min-w-[56rpx] h-[38rpx] leading-[40rpx] text-center border-[1rpx] border-solid border-[#ddd] rounded-[4rpx]"},{default:c((()=>[x(p(e.num),1)])),_:2},1024)])),plus:c((()=>[n(a,{class:h([{"text-[#999]":e.num===le(e).max," text-[#303133]":e.num!==le(e).max},"text-[34rpx] iconfont iconjia"])},null,8,["class"])])),_:2},1032,["modelValue","onUpdate:modelValue","min","max","onChange"])])),_:2},1024)])),_:2},1024)])),_:2},1024)])),_:2},1032,["options","onClick"])])),_:2},1024)):_("v-if",!0)],64)))),256))])),_:1},512)])),_:1})):_("v-if",!0),K.value.length?(d(),i(r,{key:1,class:"bg-[#fff] pb-[10rpx] box-border rounded-[16rpx] mt-[20rpx]"},{default:c((()=>[n(r,{class:"flex px-[20rpx] justify-between items-center h-[79rpx] box-border font-400 text-[#303133] text-[24rpx] mb-[10rpx] leading-[30rpx] border-0 border-b-[2rpx] border-solid border-[#f6f6f6]"},{default:c((()=>[n(a,null,{default:c((()=>[x("共"),n(a,{class:"text-[var(--price-text-color)]"},{default:c((()=>[x(p(K.value.length),1)])),_:1}),x("件失效商品")])),_:1}),n(a,{class:"text-[#666] text-[26rpx]",onClick:ie},{default:c((()=>[x("清空")])),_:1})])),_:1}),(d(!0),f(g,null,m(K.value,((e,t)=>(d(),i(r,{class:"py-[20rpx] overflow-hidden"},{default:c((()=>[n(r,{class:"flex px-[20rpx]"},{default:c((()=>[n(a,{class:"self-center iconfont iconxuanze1 text-[34rpx] mr-[20rpx] text-[#F5F5F5] rounded-[50%] overflow-hidden shrink-0"}),n(r,{class:"relative w-[168rpx] h-[168rpx]"},{default:c((()=>[n(b,{class:"rounded-[8rpx] overflow-hidden",width:"168rpx",height:"168rpx",src:u(V)(e.goodsSku.sku_image_thumb_mid),model:"aspectFill"},{error:c((()=>[n(o,{name:"photo",color:"#999",size:"50"})])),_:2},1032,["src"]),n(r,{class:"absolute left-0 top-0 w-[168rpx] h-[168rpx] leading-[168rpx] text-center",style:{"background-color":"rgba(0,0,0,0.3)"}},{default:c((()=>[n(a,{class:"text-[#fff] text-[24rpx]"},{default:c((()=>[x("已失效")])),_:1})])),_:1})])),_:2},1024),n(r,{class:"flex flex-1 flex-wrap ml-[20rpx]"},{default:c((()=>[n(r,{class:"w-[100%]"},{default:c((()=>[n(r,{class:"w-[406rpx] text-[#333] text-[28rpx] max-h-[80rpx] leading-[40rpx] font-400 multi-hidden"},{default:c((()=>[x(p(e.goods.goods_name),1)])),_:2},1024),n(r,{class:"w-[406rpx] mt-[12rpx] truncate text-[#888] text-[24rpx] leading-[32rpx]"},{default:c((()=>[x(p(e.goodsSku.sku_spec_format),1)])),_:2},1024)])),_:2},1024),n(r,{class:"flex justify-between items-end self-end w-[100%]"},{default:c((()=>[n(r,{class:"flex items-end text-[var(--price-text-color)] leading-[40rpx] price-font"},{default:c((()=>[n(a,{class:"text-[var(--price-text-color)] price-font"},{default:c((()=>[n(a,{class:"text-[26rpx] font-500"},{default:c((()=>[x("￥")])),_:1}),n(a,{class:"text-[36rpx] font-500"},{default:c((()=>[x(p(parseFloat(u(ue)(e)).toFixed(2).split(".")[0]),1)])),_:2},1024),n(a,{class:"text-[24rpx] font-500"},{default:c((()=>[x("."+p(parseFloat(u(ue)(e)).toFixed(2).split(".")[1]),1)])),_:2},1024),"member_price"==u(ce)(e)?(d(),i(l,{key:0,class:"h-[24rpx] ml-[6rpx]",src:u(V)("addon/shop/VIP.png"),mode:"heightFix"},null,8,["src"])):_("v-if",!0),"discount_price"==u(ce)(e)?(d(),i(l,{key:1,class:"h-[24rpx] ml-[6rpx]",src:u(V)("addon/shop/discount.png"),mode:"heightFix"},null,8,["src"])):_("v-if",!0)])),_:2},1024)])),_:2},1024)])),_:2},1024)])),_:2},1024)])),_:2},1024)])),_:2},1024)))),256))])),_:1})):_("v-if",!0)])),_:1})])),_:1})])),_:1})):(d(),i(r,{key:1,class:"flex-1 flex flex-col justify-center bg-[#fff]"},{default:c((()=>[n(l,{class:"rounded-[8rpx] overflow-hidden mx-auto w-[390rpx] h-[222rpx]",src:u(V)("addon/shop/cart-empty.png"),model:"aspectFill"},null,8,["src"]),n(r,{class:"text-[#999] text-[26rpx] font-400 mt-[26rpx] text-center leading-[30rpx]"},{default:c((()=>[x("赶紧去逛逛, 购买心仪的商品吧")])),_:1}),n(s,{shape:"circle",class:"!w-[200rpx] mt-[40rpx] text-[26rpx] leading-[70rpx] !text-[#fff] rounded-full bg-color",onClick:t[0]||(t[0]=e=>u(w)({url:"/addon/shop/pages/goods/list"}))},{default:c((()=>[x("去逛逛")])),_:1})])),_:1})):(d(),i(r,{key:0,class:"flex-1 flex flex-col justify-center bg-[#fff]"},{default:c((()=>[n(l,{class:"rounded-[8rpx] overflow-hidden mx-auto w-[390rpx] h-[222rpx]",src:u(V)("static/resource/images/system/login.png"),model:"aspectFill"},null,8,["src"]),n(r,{class:"text-[#999] text-[26rpx] font-400 mt-[26rpx] text-center leading-[30rpx]"},{default:c((()=>[x("暂未登录")])),_:1}),n(s,{shape:"circle",class:"!w-[200rpx] mt-[40rpx] text-[26rpx] leading-[70rpx] !text-[#fff] rounded-full bg-color",onClick:te},{default:c((()=>[x("去登录")])),_:1})])),_:1}))])),_:1})),J.value.length?(d(),i(r,{key:1,class:"flex h-[100rpx] items-center bg-[#fff] fixed left-0 right-0 bottom-[50px] box-solid mb-ios justify-between"},{default:c((()=>[n(r,{class:"flex items-center pl-[30rpx]",onClick:ae},{default:c((()=>[n(a,{class:h(["self-center iconfont text-color text-[34rpx] mr-[20rpx] w-[34rpx] h-[34rpx] rounded-[17rpx] overflow-hidden shrink-0",J.value.length==u(ee)?"iconxuanze1":"bg-[#F5F5F5]"])},null,8,["class"]),n(a,{class:"font-400 text-[#303133] text-[26rpx]"},{default:c((()=>[x("全选")])),_:1})])),_:1}),n(r,{class:"flex items-center"},{default:c((()=>[M.value?(d(),i(r,{key:1,class:"flex-1 flex items-center justify-end"},{default:c((()=>[n(G,{customStyle:{width:"160rpx",height:"66rpx",color:"#fff",fontSize:"28rpx",lineHeight:"66rpx",marginRight:"30rpx",background:"linear-gradient( 94deg,  var(--primary-help-color) 0%, var(--price-text-color) 69%), var(--price-text-color)"},shape:"circle",onClick:de},{default:c((()=>[x("删除")])),_:1},8,["customStyle"])])),_:1})):(d(),i(r,{key:0,class:"flex-1 flex items-center justify-between"},{default:c((()=>[n(r,{class:"flex items-center mr-[67rpx] text-[var(--price-text-color)] leading-[45rpx]"},{default:c((()=>[n(r,{class:"font-400 text-[#303133] text-[26rpx]"},{default:c((()=>[x("合计：")])),_:1}),n(a,{class:"text-[var(--price-text-color)] price-font"},{default:c((()=>[n(a,{class:"text-[26rpx] font-500"},{default:c((()=>[x("￥")])),_:1}),n(a,{class:"text-[36rpx] font-500"},{default:c((()=>[x(p(parseFloat(q.value).toFixed(2).split(".")[0]),1)])),_:1}),n(a,{class:"text-[24rpx] font-500"},{default:c((()=>[x("."+p(parseFloat(q.value).toFixed(2).split(".")[1]),1)])),_:1})])),_:1})])),_:1}),n(G,{customStyle:{width:"160rpx",height:"66rpx",color:"#fff",fontSize:"28rpx",lineHeight:"66rpx",marginRight:"30rpx",background:"linear-gradient( 94deg,  var(--primary-help-color) 0%, var(--price-text-color) 69%), var(--price-text-color)"},shape:"circle",onClick:oe},{default:c((()=>[x("结算")])),_:1},8,["customStyle"])])),_:1}))])),_:1})])),_:1})):_("v-if",!0),n(Q,{"bg-color":"rgb(248,248,248)",loading:T.value,loadingText:"",fontSize:"16",color:"#303133"},null,8,["loading"]),n(Z,{addon:"shop"})])),_:1},8,["style"])}}}),[["__scopeId","data-v-3085148a"]]);export{O as default};