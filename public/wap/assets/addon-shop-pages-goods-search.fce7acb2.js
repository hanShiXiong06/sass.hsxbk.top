import{d as a,r as e,j as s,a9 as t,aj as o,o as l,c as i,w as c,b as r,f as n,x as u,n as d,E as h,F as f,G as y,c1 as g,a as m,b2 as v,b7 as _,a3 as p,g as x,h as S,C as k,i as C,y as b}from"./index-905183d4.js";import{_ as H}from"./u-icon.86a2aad0.js";import{_ as j}from"./_plugin-vue_export-helper.1b428a4d.js";const A=j(a({__name:"search",setup(a){const j=e(""),A=e([]),V=e(!1);s((a=>{!uni.getStorageSync("goodsSearchHistory")&&uni.setStorageSync("goodsSearchHistory",[])})),t((()=>{z(),o((()=>{F()}))}));const z=()=>{A.value=uni.getStorageSync("goodsSearchHistory").reverse()},w=()=>{g({title:"提示",content:"确认删除全部历史记录？",success:a=>{a.confirm&&(uni.setStorageSync("goodsSearchHistory",[]),z())}})},E=()=>{if(""!=j.value.trim()){let a=uni.getStorageSync("goodsSearchHistory"),e=[];a.length?(e=a.filter((a=>a!=j.value.trim())),e.push(j.value.trim())):e.push(j.value.trim()),uni.setStorageSync("goodsSearchHistory",e),m({url:"/addon/shop/pages/goods/list",param:{goods_name:j.value.trim()},mode:"navigateTo"})}},F=()=>{v().in(this).select("#history-list").boundingClientRect((a=>{a&&a.height>2*_(70)+2*_(35)&&(V.value=!0)})).exec()};return(a,e)=>{const s=p,t=x(S("u-icon"),H),o=k,g=C;return l(),i(g,{style:d(a.themeColor())},{default:c((()=>[r(g,{class:"cate-search"},{default:c((()=>[r(g,{class:"search-box"},{default:c((()=>[r(s,{class:"uni-input text-[24rpx]",maxlength:"50",modelValue:j.value,"onUpdate:modelValue":e[0]||(e[0]=a=>j.value=a),"confirm-type":"search",focus:"",onConfirm:e[1]||(e[1]=a=>E()),placeholder:"搜索商品"},null,8,["modelValue"]),j.value?(l(),i(t,{key:0,name:"close-circle-fill",color:"#A5A6A6",size:"28rpx",onClick:e[2]||(e[2]=a=>j.value="")})):n("v-if",!0),r(o,{class:"iconfont iconxiazai17",onClick:e[3]||(e[3]=a=>E())})])),_:1})])),_:1}),r(g,{class:"search-content"},{default:c((()=>[n(" 历史搜索 "),A.value.length?(l(),i(g,{key:0,class:"history"},{default:c((()=>[r(g,{class:"history-box"},{default:c((()=>[r(g,{class:"history-top"},{default:c((()=>[r(g,{class:"title"},{default:c((()=>[u("历史搜索")])),_:1}),r(g,{class:"icon iconfont iconicon7",onClick:w})])),_:1}),r(g,{class:"history-bottom",id:"history-list",style:d({maxHeight:V.value?"168rpx":"100%"})},{default:c((()=>[(l(!0),h(y,null,f(A.value,((a,e)=>(l(),i(g,{class:"history-li",key:e,onClick:e=>{return s=a,j.value=s,void E();var s}},{default:c((()=>[r(g,null,{default:c((()=>[u(b(a),1)])),_:2},1024)])),_:2},1032,["onClick"])))),128)),V.value?(l(),i(g,{key:0,class:"history-li history_more",onClick:e[4]||(e[4]=a=>V.value=!1)},{default:c((()=>[r(g,null,{default:c((()=>[r(o,{class:"text-xs iconfont iconxialajiantouxiao"})])),_:1})])),_:1})):n("v-if",!0)])),_:1},8,["style"])])),_:1})])),_:1})):n("v-if",!0)])),_:1})])),_:1},8,["style"])}}}),[["__scopeId","data-v-f6b36433"]]);export{A as default};
