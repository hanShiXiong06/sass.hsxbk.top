import{d as e,r as t,p as a,x as s,ag as o,o as l,c as r,w as c,b as n,f as i,A as u,y as x,n as d,O as h,a6 as p,P as f,c5 as g,k as m,a as y,b2 as v,b7 as _,D as S,a4 as C,i as k,z as b}from"./index-2882a2d8.js";import{_ as H}from"./_plugin-vue_export-helper.1b428a4d.js";const V=H(e({__name:"search",setup(e){const H=t(""),V=t([]),j=t(!1);a((e=>{!uni.getStorageSync("goodsSearchHistory")&&uni.setStorageSync("goodsSearchHistory",[])})),s((()=>{I(),o((()=>{w()}))}));const I=()=>{V.value=uni.getStorageSync("goodsSearchHistory").reverse()},R=()=>{g({title:"提示",content:"确认删除全部历史记录？",confirmColor:m().themeColor["--primary-color"],success:e=>{e.confirm&&(uni.setStorageSync("goodsSearchHistory",[]),I())}})},U=()=>{if(""!=H.value.trim()){let e=uni.getStorageSync("goodsSearchHistory"),t=[];e.length?(t=e.filter((e=>e!=H.value.trim())),t.push(H.value.trim())):t.push(H.value.trim()),uni.setStorageSync("goodsSearchHistory",t),y({url:"/addon/shop/pages/goods/list",param:{goods_name:encodeURIComponent(H.value)},mode:"navigateTo"})}},w=()=>{v().in(this).select("#history-list").boundingClientRect((e=>{e&&e.height>2*_(70)+2*_(35)&&(j.value=!0)})).exec()};return(e,t)=>{const a=S,s=C,o=k;return l(),r(o,{style:d(e.themeColor())},{default:c((()=>[n(o,{class:"flex items-center px-[20rpx] h-[120rpx]"},{default:c((()=>[n(o,{class:"h-[68rpx] bg-[var(--temp-bg)] px-[30rpx] flex items-center rounded-[100rpx] flex-1"},{default:c((()=>[n(a,{class:"nc-iconfont nc-icon-sousuo-duanV6xx1 text-[var(--text-color-light9)] text-[26rpx] mr-[18rpx]"}),n(s,{class:"text-[28rpx] flex-1",maxlength:"50",type:"text",modelValue:H.value,"onUpdate:modelValue":t[0]||(t[0]=e=>H.value=e),placeholder:"请搜索您想要的商品","confirm-type":"search",placeholderClass:"text-[var(--text-color-light9)] text-[28rpx]",onConfirm:U},null,8,["modelValue"]),H.value?(l(),r(a,{key:0,class:"nc-iconfont nc-icon-cuohaoV6xx1 text-[24rpx] text-[var(--text-color-light9)]",onClick:t[1]||(t[1]=e=>H.value="")})):i("v-if",!0)])),_:1}),n(a,{onClick:t[2]||(t[2]=u((e=>U()),["stop"])),class:"text-[28rpx] ml-[32rpx] -mb-[2rpx]"},{default:c((()=>[x("搜索")])),_:1})])),_:1}),n(o,{class:"search-content"},{default:c((()=>[i(" 历史搜索 "),V.value.length?(l(),r(o,{key:0,class:"history"},{default:c((()=>[n(o,{class:"history-box"},{default:c((()=>[n(o,{class:"history-top"},{default:c((()=>[n(o,{class:"title font-500"},{default:c((()=>[x("历史搜索")])),_:1}),n(o,{class:"icon nc-iconfont nc-icon-a-shanchu-fanggai2V6xx-36 !text-[24rpx] text-[var(--text-color-light9)]",onClick:R})])),_:1}),n(o,{class:"history-bottom",id:"history-list",style:d({maxHeight:j.value?"168rpx":"100%"})},{default:c((()=>[(l(!0),h(f,null,p(V.value,((e,t)=>(l(),r(o,{class:"history-li",key:t,onClick:t=>{return a=e,H.value=a,void U();var a}},{default:c((()=>[n(o,null,{default:c((()=>[x(b(e),1)])),_:2},1024)])),_:2},1032,["onClick"])))),128)),j.value?(l(),r(o,{key:0,class:"history-li history_more",onClick:t[3]||(t[3]=e=>j.value=!1)},{default:c((()=>[n(o,null,{default:c((()=>[n(a,{class:"text-[30rpx] nc-iconfont nc-icon-xiaV6xx"})])),_:1})])),_:1})):i("v-if",!0)])),_:1},8,["style"])])),_:1})])),_:1})):i("v-if",!0)])),_:1})])),_:1},8,["style"])}}}),[["__scopeId","data-v-ff092c3d"]]);export{V as default};
