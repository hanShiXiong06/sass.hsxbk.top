import{d as e,r as t,j as l,o as a,I as s,b as o,w as r,c as i,K as n,J as c,f as u,y as p,u as f,S as m,bc as d,i as x,a2 as g,g as h,h as _,L as b,z as y,a as v,l as w,Q as k}from"./index-d8a8f699.js";import{_ as S}from"./u-button.aa0eb212.js";import{_ as j}from"./tabbar.fdead755.js";import"./mescroll-uni.8cc97eeb.js";import{M as C}from"./mescroll-body.f9302aea.js";import{u as z}from"./useMescroll.26ccf5de.js";import{M as T}from"./mescroll-empty.2fe85dec.js";import{o as I,a as M}from"./bwc.1f602d20.js";import{_ as R}from"./_plugin-vue_export-helper.1b428a4d.js";import"./u-loading-icon.6808ae8c.js";import"./u-icon.5ba98c98.js";import"./u-badge.d38c6915.js";import"./u-tabbar.5fed7184.js";import"./u-safe-bottom.a4431b09.js";import"./mescroll-i18n.49872024.js";const D=R(e({__name:"order",setup(e){const{mescrollInit:R,downCallback:D,getMescroll:F}=z(),{setShare:H,onShareAppMessage:U,onShareTimeline:A}=m();let E=t([]),J=t(!1);const K=t(uni.getStorageSync("localtion"));H(),U(),A();const L=t("0");t([]);const N=t({0:"全部",3:"已报名",4:"已下单",1:"已取消",2:"已过期",8:"已返现"}),$=e=>{B(),J.value=!1;let t={page:e.num,limit:e.size,state:L.value};I(t).then((t=>{let l=t.data.data;1==e.num&&(E.value=[]),l==[]&&(uni.$u.toast("已经全部加载了"),e.endSuccess(l.length),J.value=!0),E.value=E.value.concat(l),e.endSuccess(l.length),J.value=!0})).catch((()=>{J.value=!0,e.endErr()}))},B=()=>{uni.getStorageSync("localtion")||d({type:"wgs84",success:function(e){K.value=e,uni.setStorageSync("localtion",K.value)}})};return l((()=>{B()})),(e,t)=>{const l=x,m=g,d=k,z=h(_("u-button"),S),I=h(_("tabbar"),j);return a(),s(n,null,[o(C,{ref:"mescrollRef",onInit:f(R),onDown:f(D),onUp:$},{default:r((()=>[N.value?(a(),i(l,{key:0,class:"mb-2 z-1000"},{default:r((()=>[o(m,{"scroll-x":"true",class:"scroll-Y box-border px-[24rpx] bg-white"},{default:r((()=>[o(l,{class:"flex whitespace-nowrap justify-around"},{default:r((()=>[(a(!0),s(n,null,c(N.value,((e,t)=>(a(),i(l,{class:b(["text-sm leading-[90rpx]",{"class-select":L.value===t}]),onClick:e=>{return l=t,L.value=l,void F().resetUpScroll();var l}},{default:r((()=>[p(y(e),1)])),_:2},1032,["class","onClick"])))),256))])),_:1})])),_:1})])),_:1})):u("v-if",!0),o(l,{class:"tk-card text-[#ff0004]"},{default:r((()=>[o(l,{class:"text-xs"},{default:r((()=>[p("1、评价类订单请在次日11点前完成评价")])),_:1}),o(l,{class:"text-xs mt-1"},{default:r((()=>[p("2、订单完成后才会显示预计佣金/积分")])),_:1})])),_:1}),(a(!0),s(n,null,c(f(E),((e,t)=>(a(),i(l,{class:"tk-card"},{default:r((()=>[o(l,{class:"flex justify-between mb-2"},{default:r((()=>[o(l,{class:"text-xs"},{default:r((()=>[p("订单号:"+y(e.orderSn),1)])),_:2},1024),(a(!0),s(n,null,c(N.value,((t,o)=>(a(),s(n,{key:o},[o==e.state?(a(),i(l,{key:0,class:"text-xs"},{default:r((()=>[p(y(t),1)])),_:2},1024)):u("v-if",!0)],64)))),128))])),_:2},1024),o(l,{class:"flex"},{default:r((()=>[o(d,{style:{width:"180rpx",height:"140rpx","background-color":"#eeeeee","border-radius":"8px"},src:e.logo,mode:"aspectFill"},null,8,["src"]),o(l,{class:"flex flex-col ml-2 w-[100%] justify-between",style:{}},{default:r((()=>[o(l,{class:"font-bold tk-sltext text-xs"},{default:r((()=>[p(y(e.name),1)])),_:2},1024),o(l,{class:"flex justify-between"},{default:r((()=>[o(l,{class:"flex items-center"},{default:r((()=>[o(d,{style:{width:"32rpx",height:"32rpx","background-color":"#eeeeee","border-radius":"8px"},src:e.platformLogo,mode:"aspectFill"},null,8,["src"]),o(l,{class:"text-xs mt-[4rpx] ml-2"},{default:r((()=>[p(y(e.platformName),1)])),_:2},1024)])),_:2},1024)])),_:2},1024),o(l,{class:"flex justify-between"},{default:r((()=>[o(l,{class:"text-xs"},{default:r((()=>[p(y(e.create_time),1)])),_:2},1024),e.fanxian>0?(a(),i(l,{key:0,class:"text-xs text-[#ff0202]"},{default:r((()=>[p("预计:"+y(e.fanxian>0?e.fanxian:""),1)])),_:2},1024)):u("v-if",!0)])),_:2},1024)])),_:2},1024)])),_:2},1024),o(l,{class:"line-box w-[100%] mt-3"}),1!=e.state?(a(),i(l,{key:0,class:"flex justify-end"},{default:r((()=>[u(" <u-button color=\"#828282\" shape=\"circle\" size=\"small\" :plain=\"true\"\r\n\t\t\t\t\t\t:customStyle=\"{lineHeight:'76rpx', margin:'0rpx', color:'#000000',width:'140rpx',marginTop:'12rpx',marginRight:'12rpx'}\"\r\n\t\t\t\t\t\t@click=\"openShop(item)\">查看店铺</u-button> "),1!=e.state||2!=e.state?(a(),i(z,{key:0,color:"#828282",shape:"circle",size:"small",plain:!0,customStyle:{lineHeight:"76rpx",margin:"0rpx",color:"#000000",width:"140rpx",marginTop:"12rpx",marginRight:"12rpx"},onClick:t=>f(v)({url:"/addon/tk_cps/pages/bwc/orderdetail?id="+e.id})},{default:r((()=>[p("查看订单")])),_:2},1032,["onClick"])):u("v-if",!0),3==e.state?(a(),i(z,{key:1,color:"#828282",shape:"circle",size:"small",plain:!0,customStyle:{lineHeight:"76rpx",margin:"0rpx",color:"#000000",width:"140rpx",marginTop:"12rpx",marginRight:"12rpx"},onClick:t=>(async e=>{await M({orderSn:e.orderSn,telephone:e.orderTelephone}),F().resetUpScroll()})(e)},{default:r((()=>[p("取消报名")])),_:2},1032,["onClick"])):u("v-if",!0),3==e.state?(a(),i(z,{key:2,color:"#FE6D3A",shape:"circle",size:"small",customStyle:{lineHeight:"76rpx",margin:"0rpx",color:"#ffffff",width:"140rpx",marginTop:"12rpx",marginRight:"12rpx"},onClick:t=>(e=>{let t=JSON.parse(e.actionUrl);1==e.platform&&(window.location.href=t.h5.mt),2==e.platform&&(window.location.href=t.h5.elm)})(e)},{default:r((()=>[p("前往下单")])),_:2},1032,["onClick"])):u("v-if",!0)])),_:2},1024)):u("v-if",!0)])),_:2},1024)))),256)),!f(E).length&&f(J)?(a(),i(T,{key:1,option:{icon:f(w)("static/resource/images/empty.png")}},null,8,["option"])):u("v-if",!0)])),_:1},8,["onInit","onDown"]),o(I,{addon:"tk_cps"})],64)}}}),[["__scopeId","data-v-6efc273d"]]);export{D as default};
