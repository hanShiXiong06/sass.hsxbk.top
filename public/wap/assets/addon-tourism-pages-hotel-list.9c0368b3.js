import{_ as e}from"./u--input.f049e512.js";import{d as l,r as t,o as s,c as a,w as r,b as o,u as i,aN as n,E as c,F as u,G as m,f as p,n as d,a5 as x,a6 as f,g as _,h,C as b,i as v,t as g,V as y,x as j,y as F,H as w,X as k,a as C,N as V}from"./index-905183d4.js";import{j as I}from"./tourism.31e9949d.js";import{M as E}from"./mescroll-body.b8d008ed.js";import{M}from"./mescroll-empty.f9bce990.js";import{u as z}from"./useMescroll.26ccf5de.js";import{_ as D}from"./_plugin-vue_export-helper.1b428a4d.js";import"./u-input.07f64251.js";import"./u-icon.86a2aad0.js";import"./mescroll-uni-option.0af4878d.js";import"./mescroll-i18n.6025c811.js";/* empty css                                                                       */const N=D(l({__name:"list",setup(l){const{mescrollInit:D,downCallback:N,getMescroll:U}=z(f,x);let H=t([]),S=t(!1),A=t(""),B=t("all"),G=t("");const P=e=>{S.value=!1;let l={page:e.num,limit:e.size,hotel_name:A.value};"price"==B.value&&(l.price=G.value),I(l).then((l=>{let t=l.data.data;1==e.num&&(H.value=[]),H.value=H.value.concat(t),H.value.forEach(((e,l)=>{e.hotel_attribute&&(e.hotel_attribute=e.hotel_attribute.split(",").filter((e=>e&&e.trim())))})),e.endSuccess(t.length),S.value=!0})).catch((()=>{S.value=!0,e.endErr()}))},R=()=>{H.value=[],U().resetUpScroll()};let X=e=>{let l="";return l=e.goods.member_discount&&k()?"member_price":"",l},q=e=>{let l="0.00";return l=e.goods.member_discount&&k()?e.member_price:e.price,parseFloat(l).toFixed(2)};return(l,t)=>{const x=_(h("u--input"),e),f=b,k=v,I=V;return s(),a(k,{class:"min-h-screen overflow-hidden",style:d(l.themeColor())},{default:r((()=>[o(k,{class:"fixed z-10 left-0 right-0 bg-white"},{default:r((()=>[o(k,{class:"flex items-center px-[24rpx] py-[20rpx]"},{default:r((()=>[o(k,{class:"flex items-center bg-[#F2F2F2] ml-auto pl-[30rpx] pr-[24rpx] rounded-3xl text-[#949494] flex-1 h-[74rpx]"},{default:r((()=>[o(x,{placeholder:i(g)("searchHotelName"),class:"w-[280rpx] text-sm",placeholderClass:"text-sm",border:"none",modelValue:i(A),"onUpdate:modelValue":t[0]||(t[0]=e=>n(A)?A.value=e:A=e)},null,8,["placeholder","modelValue"]),o(f,{class:"nc-iconfont nc-icon-sousuoV6xx text-[32rpx]",onClick:R})])),_:1})])),_:1})])),_:1}),o(E,{ref:"mescrollRef",top:"114rpx",onInit:i(D),onDown:i(N),onUp:P},{default:r((()=>[o(k,{class:"mt-[2rpx]"},{default:r((()=>[(s(!0),c(m,null,u(i(H),((e,l)=>(s(),a(k,{class:"flex px-[24rpx] py-[30rpx] border-0 border-b-1 border-solid border-[#F0F0F0]",key:e.hotel_id,onClick:l=>{return t=e.hotel_id,void C({url:"/addon/tourism/pages/hotel/detail",param:{id:t}});var t}},{default:r((()=>[o(I,{class:"w-[238rpx] h-[238rpx] mr-[20rpx] rounded-md",src:i(y)(e.cover_thumb_mid),mode:"aspectFill"},null,8,["src"]),o(k,{class:"flex flex-col flex-1 py-[10rpx]"},{default:r((()=>[o(k,{class:"text-sm font-bold multi-hidden"},{default:r((()=>[j(F(e.hotel_name),1)])),_:2},1024),o(k,{class:"font-bold multi-hidden text-[#ffaf00] flex items-center text-xs my-1"},{default:r((()=>[o(f,{class:"iconfont iconxingxing mr-[2rpx] text-xs"}),o(f,null,{default:r((()=>[j(F(e.hotel_star)+"星",1)])),_:2},1024)])),_:2},1024),o(k,{class:"flex flex-wrap text-xs text-[#646464]"},{default:r((()=>[(s(!0),c(m,null,u(e.hotel_attribute,((e,l)=>(s(),c(m,{key:l},[l<3?(s(),a(f,{key:0,class:w(["break-all",{"class-select":2!=l}])},{default:r((()=>[j(F(e),1)])),_:2},1032,["class"])):p("v-if",!0)],64)))),128))])),_:2},1024),o(k,{class:"flex items-center mt-auto text-[#F55246] text-xs"},{default:r((()=>[o(k,{class:""},{default:r((()=>[o(f,{class:"price-font"},{default:r((()=>[j("￥")])),_:1}),o(f,{class:"text-base price-font"},{default:r((()=>[j(F(i(q)(e)),1)])),_:2},1024),o(f,{class:"ml-[4rpx] mr-[4rpx]"},{default:r((()=>[j(F(i(g)("rise")),1)])),_:1}),o(f,{class:""},{default:r((()=>["member_price"==i(X)(e)?(s(),a(I,{key:0,class:"h-[22rpx] ml-[4rpx] w-[50rpx]",src:i(y)("addon/tourism/VIP.png"),mode:"widthFix"},null,8,["src"])):p("v-if",!0)])),_:2},1024)])),_:2},1024)])),_:2},1024)])),_:2},1024)])),_:2},1032,["onClick"])))),128))])),_:1}),!i(H).length&&i(S)?(s(),a(M,{key:0,option:{icon:i(y)("static/resource/images/empty.png")}},null,8,["option"])):p("v-if",!0)])),_:1},8,["onInit","onDown"])])),_:1},8,["style"])}}}),[["__scopeId","data-v-8d5be78e"]]);export{N as default};
