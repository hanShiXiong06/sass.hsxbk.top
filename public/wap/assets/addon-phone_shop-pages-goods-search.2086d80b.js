import{d as e,r as a,p as s,x as t,ah as o,o as l,c as i,w as c,b as r,f as n,y as u,n as h,P as d,a7 as y,Q as f,c3 as m,k as g,a as p,b5 as x,bb as v,a5 as _,g as S,h as k,D as C,i as b,z as H}from"./index-7bf68536.js";import{_ as V}from"./u-icon.0c1c54c7.js";import{_ as j}from"./_plugin-vue_export-helper.1b428a4d.js";const z=j(e({__name:"search",setup(e){const j=a(""),z=a([]),A=a(!1);s((e=>{!uni.getStorageSync("goodsSearchHistory")&&uni.setStorageSync("goodsSearchHistory",[])})),t((()=>{w(),o((()=>{P()}))}));const w=()=>{z.value=uni.getStorageSync("goodsSearchHistory").reverse()},D=()=>{m({title:"提示",content:"确认删除全部历史记录？",confirmColor:g().themeColor["--primary-color"],success:e=>{e.confirm&&(uni.setStorageSync("goodsSearchHistory",[]),w())}})},I=()=>{if(""!=j.value.trim()){let e=uni.getStorageSync("goodsSearchHistory"),a=[];e.length?(a=e.filter((e=>e!=j.value.trim())),a.push(j.value.trim())):a.push(j.value.trim()),uni.setStorageSync("goodsSearchHistory",a),p({url:"/addon/phone_shop/pages/goods/list",param:{goods_name:j.value.trim()},mode:"navigateTo"})}},P=()=>{x().in(this).select("#history-list").boundingClientRect((e=>{e&&e.height>2*v(70)+2*v(35)&&(A.value=!0)})).exec()};return(e,a)=>{const s=_,t=S(k("u-icon"),V),o=C,m=b;return l(),i(m,{style:h(e.themeColor())},{default:c((()=>[r(m,{class:"cate-search"},{default:c((()=>[r(m,{class:"search-box"},{default:c((()=>[r(s,{class:"uni-input text-[24rpx]",maxlength:"50",modelValue:j.value,"onUpdate:modelValue":a[0]||(a[0]=e=>j.value=e),"confirm-type":"search",focus:"",onConfirm:a[1]||(a[1]=e=>I()),placeholder:"搜索商品"},null,8,["modelValue"]),j.value?(l(),i(t,{key:0,name:"close-circle-fill",color:"#A5A6A6",size:"28rpx",onClick:a[2]||(a[2]=e=>j.value="")})):n("v-if",!0),r(o,{class:"nc-iconfont nc-icon-sousuo-duanV6xx1 !text-[32rpx]",onClick:a[3]||(a[3]=e=>I())})])),_:1})])),_:1}),r(m,{class:"search-content"},{default:c((()=>[n(" 历史搜索 "),z.value.length?(l(),i(m,{key:0,class:"history"},{default:c((()=>[r(m,{class:"history-box"},{default:c((()=>[r(m,{class:"history-top"},{default:c((()=>[r(m,{class:"title"},{default:c((()=>[u("历史搜索")])),_:1}),r(m,{class:"icon nc-iconfont nc-icon-shanchu-yuangaizhiV6xx text-[28rpx] text-[#999]",onClick:D})])),_:1}),r(m,{class:"history-bottom",id:"history-list",style:h({maxHeight:A.value?"168rpx":"100%"})},{default:c((()=>[(l(!0),d(f,null,y(z.value,((e,a)=>(l(),i(m,{class:"history-li",key:a,onClick:a=>{return s=e,j.value=s,void I();var s}},{default:c((()=>[r(m,null,{default:c((()=>[u(H(e),1)])),_:2},1024)])),_:2},1032,["onClick"])))),128)),A.value?(l(),i(m,{key:0,class:"history-li history_more",onClick:a[4]||(a[4]=e=>A.value=!1)},{default:c((()=>[r(m,null,{default:c((()=>[r(o,{class:"text-[30rpx] nc-iconfont nc-icon-xiaV6xx"})])),_:1})])),_:1})):n("v-if",!0)])),_:1},8,["style"])])),_:1})])),_:1})):n("v-if",!0)])),_:1})])),_:1},8,["style"])}}}),[["__scopeId","data-v-16af90c7"]]);export{z as default};