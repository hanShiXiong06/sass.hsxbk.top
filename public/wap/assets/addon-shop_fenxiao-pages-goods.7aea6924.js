import{d as e,l as a,j as s,r as o,p as r,o as l,c as t,w as d,b as i,n as p,u,P as n,a7 as c,Q as m,f as _,a8 as x,a9 as f,i as g,g as v,h,E as b,R as y,y as j,z as k,A as w,a as C,B as F,D as P}from"./index-7bf68536.js";import{_ as I}from"./u--image.b3bf1d5c.js";import{M}from"./mescroll-body.b6d57b41.js";import{M as S}from"./mescroll-empty.fcefb74e.js";import{u as U}from"./useMescroll.26ccf5de.js";import{e as z}from"./fenxiao.745a840a.js";import{s as R}from"./share-poster.5efeffe7.js";import{_ as A}from"./_plugin-vue_export-helper.1b428a4d.js";import"./u-image.e46f68ef.js";import"./u-icon.0c1c54c7.js";import"./u-transition.cdf87992.js";import"./mescroll-i18n.14e7fe02.js";/* empty css                                                                       */import"./u-popup.be4bfacd.js";import"./u-safe-bottom.908eeae4.js";/* empty css                                                                     */const E=A(e({__name:"goods",setup(e){const{mescrollInit:A,downCallback:E,getMescroll:B}=U(f,x),D=a(),N=s((()=>D.info)),Q=o([]),T=o(!0);o(null),r((()=>{}));const V=e=>{let a={page:e.num,limit:e.size};T.value=!0,z(a).then((a=>{let s=a.data.data;1==e.num&&(Q.value=[]),Q.value=Q.value.concat(s),T.value=!1,e.endSuccess(s.length)})).catch((()=>{T.value=!1,e.endErr()}))},q=o(null),G=o(""),H=o("");let J={};const K=e=>{J.sku_id=e.goodsSku.sku_id,N.value&&N.value.member_id&&(J.member_id=N.value.member_id),(e=>{H.value="/addon/shop/pages/goods/detail",G.value="?goods_id="+e.goods_id,N.value&&N.value.member_id&&(G.value+="&mid="+N.value.member_id)})(e),q.value.openShare()};return(e,a)=>{const s=g,o=F,r=v(h("u--image"),I),x=P;return l(),t(s,{class:"bg-[var(--page-bg-color)] min-h-[100vh]",style:p(e.themeColor())},{default:d((()=>[i(M,{ref:"mescrollRef",onInit:u(A),onUp:V,down:{use:!1}},{default:d((()=>[i(s,{class:"w-[100%] h-[340rpx]",style:p({backgroundImage:"url("+u(b)("addon/shop_fenxiao/fenxiao_goods_bg.png")+")","background-size":"cover"})},null,8,["style"]),(l(!0),n(m,null,c(Q.value,((e,a)=>(l(),t(s,{class:y(["bg-white flex card-template sidebar-margin rounded-[var(--rounded-big)] overflow-hidden mt-[var(--top-m)]",{"mb-[20rpx]":a+1==Q.value.length}]),key:a,onClick:a=>{C({url:"/addon/shop/pages/goods/detail",param:{goods_id:e.goods_id}})}},{default:d((()=>[i(s,{class:"w-[190rpx] h-[190rpx]"},{default:d((()=>[i(r,{width:"190rpx",height:"190rpx",radius:"var(--goods-rounded-big)",src:u(b)(e.goods_cover_thumb_mid?e.goods_cover_thumb_mid:""),model:"aspectFill"},{error:d((()=>[i(o,{class:"w-[190rpx] h-[190rpx] rounded-[var(--goods-rounded-big)] overflow-hidden",src:u(b)("static/resource/images/diy/shop_default.jpg"),mode:"aspectFill"},null,8,["src"])])),_:2},1032,["src"])])),_:2},1024),i(s,{class:"flex-1 flex flex-col ml-[20rpx] py-[4rpx]"},{default:d((()=>[i(s,{class:"text-[28rpx] text-[#333] leading-[40rpx] multi-hidden mb-[10rpx]"},{default:d((()=>[j(k(e.goods_name),1)])),_:2},1024),i(s,{class:"mt-auto flex justify-between items-end"},{default:d((()=>[i(s,{class:"text-[var(--price-text-color)] price-font max-w-[194rpx] h-[40rpx] truncate"},{default:d((()=>[i(x,{class:"text-[24rpx] font-500"},{default:d((()=>[j("￥")])),_:1}),i(x,{class:"text-[40rpx] font-500"},{default:d((()=>[j(k(parseFloat(e.goodsSku.price).toFixed(2).split(".")[0]),1)])),_:2},1024),i(x,{class:"text-[24rpx] font-500"},{default:d((()=>[j("."+k(parseFloat(e.goodsSku.price).toFixed(2).split(".")[1]),1)])),_:2},1024)])),_:2},1024),i(s,{onClick:w((a=>K(e)),["stop"]),class:"text-[24rpx] box-border border-[2rpx] border-solid border-[var(--price-text-color)] px-[16rpx] h-[54rpx] flex-center rounded-[50rpx] text-[var(--price-text-color)]"},{default:d((()=>[i(x,{class:"nc-iconfont nc-icon-fenxiangV6xx-1 mr-[6rpx] !text-[26rpx]"}),i(x,null,{default:d((()=>[j("赚")])),_:1}),i(x,{class:"max-w-[129rpx] truncate"},{default:d((()=>[j(k(e.commission),1)])),_:2},1024),i(x,null,{default:d((()=>[j("元")])),_:1})])),_:2},1032,["onClick"])])),_:2},1024)])),_:2},1024)])),_:2},1032,["class","onClick"])))),128)),Q.value.length||T.value?_("v-if",!0):(l(),t(S,{key:0,option:{icon:u(b)("static/resource/images/empty.png")}},null,8,["option"]))])),_:1},8,["onInit"]),i(R,{ref_key:"sharePosterRef",ref:q,posterType:"fenxiao_goods",posterParam:u(J),copyUrlParam:G.value,copyUrl:H.value},null,8,["posterParam","copyUrlParam","copyUrl"])])),_:1},8,["style"])}}}),[["__scopeId","data-v-be443004"]]);export{E as default};
