import{d as e,l as t,j as s,r,x as l,_ as o,F as a,o as d,c as u,w as p,u as i,b as x,y as n,z as c,P as f,a7 as m,Q as g,f as _,R as h,n as b,H as k,t as v,a as w,B as y,i as F,C as S,D as j,g as C,h as E,a6 as V,E as z,s as I,ah as D}from"./index-7bf68536.js";import{_ as B}from"./u--image.b3bf1d5c.js";import{_ as P}from"./u-number-box.30c0ab2e.js";import{_ as R}from"./u-swipe-action-item.22285616.js";import{_ as U}from"./u-swipe-action.4d9d59b1.js";import{_ as A}from"./u-loading-page.566c330a.js";import{_ as H}from"./tabbar.e049672c.js";import{u as L,g as M}from"./cart.b4d15020.js";import{b as T}from"./bind-mobile.37d1c6df.js";import{_ as J}from"./_plugin-vue_export-helper.1b428a4d.js";import"./u-image.e46f68ef.js";import"./u-icon.0c1c54c7.js";import"./u-transition.cdf87992.js";import"./u-loading-icon.b37701e7.js";import"./u-badge.d8d91719.js";import"./u-tabbar.d98653fa.js";import"./u-safe-bottom.908eeae4.js";import"./cloneDeep.77735539.js";import"./u-form.78a4f7c2.js";import"./u-line.463a2a45.js";import"./sms-code.vue_vue_type_script_setup_true_lang.eace8f61.js";import"./u-input.09a5cedd.js";import"./u-modal.b47eb877.js";import"./u-popup.be4bfacd.js";import"./u-checkbox-group.b2a485bf.js";const K=J(e({__name:"cart",setup(e){const J=t(),K=s((()=>J.info)),N=r(!0),O=r(!1),Q=r("0.00"),W=r([]),X=r([]),Y=r(!1),Z=r(!0),$=L(),q=()=>{M({}).then((({data:e})=>{W.value=[],X.value=[],N.value=!1,e.forEach((e=>{e.checked=!1,e.goodsSku&&(e.goods.status&&0==e.goods.delete_time&&e.goodsSku.stock?(e.num>e.goodsSku.stock&&(e.num=e.goodsSku.stock),W.value.push(e)):X.value.push(e))})),le(),Z.value&&(Z.value=!1)})).catch((e=>{401==e.code&&(W.value=[],X.value=[],N.value=!1)}))};l((()=>{q(),$.getList()}));const G=s((()=>{let e=0;return W.value.forEach((t=>{t.checked&&(e+=1)})),e}));o((()=>W.value),(()=>{let e=0;W.value.forEach((t=>{if(t.checked&&t.goodsSku){let s=0;s=t.goods.is_discount&&t.goodsSku.sale_price!=t.goodsSku.price?t.goodsSku.sale_price:t.goods.member_discount&&I()&&t.goodsSku.member_price!=t.goodsSku.price?t.goodsSku.member_price:t.goodsSku.price,e+=parseFloat(s)*t.num}})),Q.value=e.toFixed(2)}),{deep:!0});const ee=()=>{k().setLoginBack({url:"/addon/phone_shop/pages/goods/cart"})},te=e=>({min:1,max:e.goodsSku.stock||1}),se=r([{text:a("delete"),style:{backgroundColor:"#F56C6C"}}]),re=r(),le=()=>{const e=W.value.length!=G.value;W.value.forEach((t=>{t.checked=e}))},oe=r(null),ae=()=>{if(uni.getStorageSync("isbindmobile"))return oe.value.open(),!1;if(!G.value)return void v({title:"还没有选择商品",icon:"none"});const e=[];W.value.forEach((t=>{t.checked&&e.push(t.id)})),uni.setStorage({key:"orderCreateData",data:{cart_ids:e},success(){w({url:"/addon/phone_shop/pages/order/payment"})}})},de=()=>{if(!G.value)return void v({title:"还没有选择商品",icon:"none"});if(O.value)return;O.value=!0;const e=[];W.value.forEach((t=>{t.checked&&e.push(t.id)})),$.delete(e,(()=>{q(),O.value=!1}))},ue=()=>{if(O.value)return;O.value=!0;const e=X.value.map((e=>e.id));$.delete(e,(()=>{q(),O.value=!1})),X.value=[]},pe=e=>{let t="";return t=e.goods.is_discount&&e.goodsSku.sale_price!=e.goodsSku.price?"discount_price":e.goods.member_discount&&I()&&e.goodsSku.member_price!=e.goodsSku.price?"member_price":"",t},ie=e=>{let t="0.00";return t=e.goods.is_discount&&e.goodsSku.sale_price!=e.goodsSku.price?e.goodsSku.sale_price?e.goodsSku.sale_price:e.goodsSku.price:e.goods.member_discount&&I()&&e.goodsSku.member_price!=e.goodsSku.price&&e.goodsSku.member_price?e.goodsSku.member_price:e.goodsSku.price,t};return(e,t)=>{const s=y,r=F,l=S,o=j,a=C(E("u--image"),B),k=C(E("u-number-box"),P),v=C(E("u-swipe-action-item"),R),I=C(E("u-swipe-action"),U),L=V,M=C(E("u-loading-page"),A),J=C(E("tabbar"),H);return d(),u(r,{style:b(e.themeColor())},{default:p((()=>[N.value?_("v-if",!0):(d(),u(r,{key:0,class:"bg-page h-screen overflow-hidden flex flex-col"},{default:p((()=>[i(K)?W.value.length||X.value.length?(d(),u(r,{key:2,class:"flex-1 h-0"},{default:p((()=>[x(L,{class:"scroll-height box-border","scroll-y":!0},{default:p((()=>[x(r,{class:"py-[20rpx] sidebar-marign"},{default:p((()=>[W.value.length?(d(),u(r,{key:0,class:"bg-[#fff] pb-[10rpx] box-border rounded-[16rpx]"},{default:p((()=>[x(r,{class:"flex mx-[20rpx] justify-between items-center h-[76rpx] box-border font-400 text-[24rpx] mb-[10rpx] leading-[30rpx] border-0 border-b-[2rpx] border-solid border-[#F6F6F6]"},{default:p((()=>[x(r,{class:"flex items-center text-[26rpx] text-[#333]"},{default:p((()=>[x(o,null,{default:p((()=>[n("共")])),_:1}),x(o,{class:"text-[32rpx] mx-[2rpx] text-[var(--price-text-color)]"},{default:p((()=>[n(c(W.value.length),1)])),_:1}),x(o,null,{default:p((()=>[n("件商品")])),_:1})])),_:1}),x(o,{onClick:t[1]||(t[1]=e=>Y.value=!Y.value),class:"text-[#666] text-[26rpx]"},{default:p((()=>[n(c(Y.value?"完成":"管理"),1)])),_:1})])),_:1}),x(I,{ref_key:"swipeActive",ref:re},{default:p((()=>[(d(!0),f(g,null,m(W.value,((e,t)=>(d(),f(g,null,[e.goodsSku?(d(),u(r,{key:0,class:"py-[20rpx] overflow-hidden w-full"},{default:p((()=>[x(v,{options:se.value,onClick:s=>((e,t)=>{O.value||(O.value=!0,$.delete(t.id,(()=>{W.value.splice(e,1),D((()=>{re.value&&re.value.closeOther()})),O.value=!1})))})(t,e)},{default:p((()=>[x(r,{class:"flex px-[20rpx]"},{default:p((()=>[x(o,{class:h(["self-center iconfont text-color text-[34rpx] mr-[16rpx] w-[34rpx] h-[34rpx] rounded-[17rpx] overflow-hidden shrink-0",{iconxuanze1:e.checked,"bg-[#F5F5F5]":!e.checked}]),onClick:t=>e.checked=!e.checked},null,8,["class","onClick"]),x(a,{class:"rounded-[8rpx] overflow-hidden",width:"170rpx",height:"170rpx",onClick:t=>{w({url:"/addon/phone_shop/pages/goods/detail",param:{goods_id:e.goods_id}})},src:i(z)(e.goodsSku.sku_image_thumb_mid||""),model:"aspectFill"},{error:p((()=>[x(s,{class:"w-[170rpx] h-[170rpx] rounded-[8rpx] overflow-hidden",src:i(z)("static/resource/images/diy/shop_default.jpg"),mode:"aspectFill"},null,8,["src"])])),_:2},1032,["onClick","src"]),x(r,{class:"flex flex-1 flex-wrap ml-[20rpx] w-[410rpx]"},{default:p((()=>[x(r,{class:"w-[100%] flex flex-col items-baseline"},{default:p((()=>[x(r,{class:"w-[406rpx] text-[#333] text-[28rpx] max-h-[80rpx] leading-[40rpx] multi-hidden font-400"},{default:p((()=>[n(c(e.goods.goods_name),1)])),_:2},1024),x(r,{class:"w-[406rpx] text-[#333] text-[20rpx] max-h-[80rpx] leading-[40rpx] multi-hidden font-400"},{default:p((()=>[n(c(e.goods.sub_title),1)])),_:2},1024),e.goodsSku&&e.goodsSku.sku_spec_format?(d(),u(r,{key:0,class:"box-border max-w-[406rpx] mt-[4rpx] px-[14rpx] h-[36rpx] leading-[36rpx] truncate text-[#666] bg-[#F5F5F5] text-[22rpx] rounded-[20rpx]"},{default:p((()=>[n(c(e.goodsSku.sku_spec_format),1)])),_:2},1024)):_("v-if",!0)])),_:2},1024),x(r,{class:"flex justify-between items-end self-end w-[100%]"},{default:p((()=>[x(r,{class:"flex items-end text-[var(--price-text-color)] leading-[40rpx] price-font"},{default:p((()=>[x(r,{class:"text-[var(--price-text-color)] price-font"},{default:p((()=>[x(o,{class:"text-[26rpx] font-500"},{default:p((()=>[n("￥")])),_:1}),x(o,{class:"text-[36rpx] font-500"},{default:p((()=>[n(c(parseFloat(ie(e)).toFixed(2).split(".")[0]),1)])),_:2},1024),x(o,{class:"text-[24rpx] font-500"},{default:p((()=>[n("."+c(parseFloat(ie(e)).toFixed(2).split(".")[1]),1)])),_:2},1024),"member_price"==pe(e)?(d(),u(s,{key:0,class:"h-[24rpx] ml-[6rpx]",src:i(z)("addon/phone_shop/VIP.png"),mode:"heightFix"},null,8,["src"])):_("v-if",!0),"discount_price"==pe(e)?(d(),u(s,{key:1,class:"h-[24rpx] ml-[6rpx]",src:i(z)("addon/phone_shop/discount.png"),mode:"heightFix"},null,8,["src"])):_("v-if",!0)])),_:2},1024)])),_:2},1024),x(k,{modelValue:e.num,"onUpdate:modelValue":t=>e.num=t,min:te(e).min,max:te(e).max,integer:"",step:1,"input-width":"68rpx","input-height":"52rpx","button-size":"52rpx",disabledInput:"",onChange:e=>((e,t)=>{uni.$u.debounce((e=>{const s=W.value[t];$.increase({id:s.id,goods_id:s.goods_id,sku_id:s.sku_id,stock:s.goodsSku.stock,sale_price:s.goodsSku.sale_price,num:s.num},0)}),500)})(0,t)},{minus:p((()=>[x(o,{class:h([{"text-[#999]":e.num===te(e).min,"text-[#303133]":e.num!==te(e).min},"text-[34rpx] nc-iconfont nc-icon-jianV6xx"])},null,8,["class"])])),input:p((()=>[x(o,{class:"text-[#303133] text-[24rpx] mx-[10rpx] min-w-[56rpx] h-[38rpx] leading-[40rpx] text-center border-[1rpx] border-solid border-[#ddd] rounded-[4rpx]"},{default:p((()=>[n(c(e.num),1)])),_:2},1024)])),plus:p((()=>[x(o,{class:h([{"text-[#999]":e.num===te(e).max," text-[#303133]":e.num!==te(e).max},"text-[34rpx] nc-iconfont nc-icon-jiahaoV6xx"])},null,8,["class"])])),_:2},1032,["modelValue","onUpdate:modelValue","min","max","onChange"])])),_:2},1024)])),_:2},1024)])),_:2},1024)])),_:2},1032,["options","onClick"])])),_:2},1024)):_("v-if",!0)],64)))),256))])),_:1},512)])),_:1})):_("v-if",!0),X.value.length?(d(),u(r,{key:1,class:"bg-[#fff] pb-[10rpx] box-border rounded-[16rpx] mt-[20rpx]"},{default:p((()=>[x(r,{class:"flex px-[20rpx] justify-between items-center h-[79rpx] box-border font-400 text-[#303133] text-[24rpx] mb-[10rpx] leading-[30rpx] border-0 border-b-[2rpx] border-solid border-[#f6f6f6]"},{default:p((()=>[x(o,null,{default:p((()=>[n("共"),x(o,{class:"text-[var(--price-text-color)]"},{default:p((()=>[n(c(X.value.length),1)])),_:1}),n("件失效商品")])),_:1}),x(o,{class:"text-[#666] text-[26rpx]",onClick:ue},{default:p((()=>[n("清空")])),_:1})])),_:1}),(d(!0),f(g,null,m(X.value,((e,t)=>(d(),u(r,{class:"py-[20rpx] overflow-hidden"},{default:p((()=>[x(r,{class:"flex px-[20rpx]"},{default:p((()=>[x(o,{class:"self-center iconfont iconxuanze1 text-[34rpx] mr-[20rpx] text-[#F5F5F5] rounded-[50%] overflow-hidden shrink-0"}),x(r,{class:"relative w-[168rpx] h-[168rpx]"},{default:p((()=>[x(a,{class:"rounded-[8rpx] overflow-hidden",width:"168rpx",height:"168rpx",src:i(z)(e.goodsSku.sku_image_thumb_mid),model:"aspectFill"},{error:p((()=>[x(s,{class:"w-[168rpx] h-[168rpx] rounded-[8rpx] overflow-hidden",src:i(z)("static/resource/images/diy/shop_default.jpg"),mode:"aspectFill"},null,8,["src"])])),_:2},1032,["src"]),0==e.goodsSku.stock?(d(),u(r,{key:0,class:"absolute left-0 top-0 w-[168rpx] h-[168rpx] leading-[168rpx] text-center",style:{"background-color":"rgba(0,0,0,0.3)"}},{default:p((()=>[x(o,{class:"text-[#fff] text-[24rpx]"},{default:p((()=>[n("已售罄")])),_:1})])),_:1})):_("v-if",!0),0!=e.goodsSku.stock?(d(),u(r,{key:1,class:"absolute left-0 top-0 w-[168rpx] h-[168rpx] leading-[168rpx] text-center",style:{"background-color":"rgba(0,0,0,0.3)"}},{default:p((()=>[x(o,{class:"text-[#fff] text-[24rpx]"},{default:p((()=>[n("已失效")])),_:1})])),_:1})):_("v-if",!0)])),_:2},1024),x(r,{class:"flex flex-1 flex-wrap ml-[20rpx] w-[410rpx]"},{default:p((()=>[x(r,{class:"w-[100%] flex flex-col items-baseline"},{default:p((()=>[x(r,{class:"w-[406rpx] text-[#333] text-[28rpx] max-h-[80rpx] leading-[40rpx] font-400 multi-hidden"},{default:p((()=>[n(c(e.goods.goods_name),1)])),_:2},1024),x(r,{class:"w-[406rpx] text-[#333] text-[20rpx] max-h-[80rpx] leading-[40rpx] font-400 multi-hidden"},{default:p((()=>[n(c(e.goods.sub_title),1)])),_:2},1024),e.goodsSku&&e.goodsSku.sku_spec_format?(d(),u(r,{key:0,class:"box-border max-w-[406rpx] mt-[4rpx] px-[14rpx] h-[36rpx] leading-[36rpx] truncate text-[#666] bg-[#F5F5F5] text-[22rpx] rounded-[20rpx]"},{default:p((()=>[n(c(e.goodsSku.sku_spec_format),1)])),_:2},1024)):_("v-if",!0)])),_:2},1024),x(r,{class:"flex justify-between items-end self-end w-[100%]"},{default:p((()=>[x(r,{class:"flex items-end text-[var(--price-text-color)] leading-[40rpx] price-font"},{default:p((()=>[x(r,{class:"text-[var(--price-text-color)] price-font"},{default:p((()=>[x(o,{class:"text-[26rpx] font-500"},{default:p((()=>[n("￥")])),_:1}),x(o,{class:"text-[36rpx] font-500"},{default:p((()=>[n(c(parseFloat(ie(e)).toFixed(2).split(".")[0]),1)])),_:2},1024),x(o,{class:"text-[24rpx] font-500"},{default:p((()=>[n("."+c(parseFloat(ie(e)).toFixed(2).split(".")[1]),1)])),_:2},1024),"member_price"==pe(e)?(d(),u(s,{key:0,class:"h-[24rpx] ml-[6rpx]",src:i(z)("addon/phone_shop/VIP.png"),mode:"heightFix"},null,8,["src"])):_("v-if",!0),"discount_price"==pe(e)?(d(),u(s,{key:1,class:"h-[24rpx] ml-[6rpx]",src:i(z)("addon/phone_shop/discount.png"),mode:"heightFix"},null,8,["src"])):_("v-if",!0)])),_:2},1024)])),_:2},1024)])),_:2},1024)])),_:2},1024)])),_:2},1024)])),_:2},1024)))),256))])),_:1})):_("v-if",!0)])),_:1})])),_:1})])),_:1})):(d(),u(r,{key:1,class:"flex-1 flex flex-col justify-center bg-[#fff]"},{default:p((()=>[x(s,{class:"overflow-hidden mx-auto w-[348rpx] h-[256rpx]",src:i(z)("addon/phone_shop/cart-empty.png"),model:"aspectFit"},null,8,["src"]),x(r,{class:"text-[#999] text-[26rpx] font-400 text-center leading-[30rpx]"},{default:p((()=>[n("赶紧去逛逛, 购买心仪的商品吧")])),_:1}),x(l,{shape:"circle",plain:"true",class:"!min-w-[220rpx] mt-[40rpx] text-[26rpx] h-[66rpx] leading-[62rpx] !text-[#EF000C] !border-[#EF000C] rounded-full",onClick:t[0]||(t[0]=e=>i(w)({url:"/addon/phone_shop/pages/goods/list"}))},{default:p((()=>[n("去逛逛")])),_:1})])),_:1})):(d(),u(r,{key:0,class:"flex-1 flex flex-col justify-center bg-[#fff]"},{default:p((()=>[x(s,{class:"overflow-hidden mx-auto w-[348rpx] h-[250rpx]",src:i(z)("static/resource/images/system/login.png"),model:"aspectFit"},null,8,["src"]),x(r,{class:"text-[#999] text-[26rpx] font-400 text-center leading-[30rpx]"},{default:p((()=>[n("暂未登录")])),_:1}),x(l,{shape:"circle",plain:"true",class:"!w-[220rpx] mt-[40rpx] text-[26rpx] !text-[#EF000C] !border-[#EF000C] leading-[62rpx] h-[66rpx] rounded-full",onClick:ee},{default:p((()=>[n("去登录")])),_:1})])),_:1}))])),_:1})),W.value.length?(d(),u(r,{key:1,class:"flex h-[100rpx] items-center bg-[#fff] fixed left-0 right-0 bottom-[50px] box-solid mb-ios justify-between"},{default:p((()=>[x(r,{class:"flex items-center pl-[30rpx]",onClick:le},{default:p((()=>[x(o,{class:h(["self-center iconfont text-color text-[34rpx] mr-[20rpx] w-[34rpx] h-[34rpx] rounded-[17rpx] overflow-hidden shrink-0",W.value.length==i(G)?"iconxuanze1":"bg-[#F5F5F5]"])},null,8,["class"]),x(o,{class:"font-400 text-[#303133] text-[26rpx]"},{default:p((()=>[n("全选")])),_:1})])),_:1}),x(r,{class:"flex items-center"},{default:p((()=>[Y.value?(d(),u(r,{key:1,class:"flex-1 flex items-center justify-end"},{default:p((()=>[x(l,{class:"w-[160rpx] h-[66rpx] text-[28rpx] leading-[66rpx] !text-[#fff] m-0 !mr-[30rpx] rounded-full primary-btn-bg remove-border",onClick:de},{default:p((()=>[n("删除")])),_:1})])),_:1})):(d(),u(r,{key:0,class:"flex-1 flex items-center justify-between"},{default:p((()=>[x(r,{class:"flex items-center mr-[67rpx] text-[var(--price-text-color)] leading-[45rpx]"},{default:p((()=>[x(r,{class:"font-400 text-[#303133] text-[26rpx]"},{default:p((()=>[n("合计：")])),_:1}),x(o,{class:"text-[var(--price-text-color)] price-font"},{default:p((()=>[x(o,{class:"text-[26rpx] font-500"},{default:p((()=>[n("￥")])),_:1}),x(o,{class:"text-[36rpx] font-500"},{default:p((()=>[n(c(parseFloat(Q.value).toFixed(2).split(".")[0]),1)])),_:1}),x(o,{class:"text-[24rpx] font-500"},{default:p((()=>[n("."+c(parseFloat(Q.value).toFixed(2).split(".")[1]),1)])),_:1})])),_:1})])),_:1}),x(l,{class:"w-[160rpx] h-[66rpx] text-[28rpx] leading-[66rpx] !text-[#fff] m-0 !mr-[30rpx] rounded-full primary-btn-bg remove-border",onClick:ae},{default:p((()=>[n("结算")])),_:1})])),_:1}))])),_:1})])),_:1})):_("v-if",!0),x(M,{"bg-color":"rgb(248,248,248)",loading:N.value,loadingText:"",fontSize:"16",color:"#303133"},null,8,["loading"]),x(J),_(" 强制绑定手机号 "),x(T,{ref_key:"bindMobileRef",ref:oe},null,512)])),_:1},8,["style"])}}}),[["__scopeId","data-v-b07fbd90"]]);export{K as default};