import{d as e,r as t,p as l,o as s,O as a,b as r,w as o,u as d,c as f,P as n,a6 as i,f as c,a7 as u,a8 as _,i as m,a5 as x,g as p,h as g,Q as v,y as b,z as y,E as k,D as h}from"./index-9317da28.js";import{_ as j}from"./u-icon.5e775659.js";import{_ as I}from"./tabbar.31005363.js";import{_ as w}from"./pay.b34fbbeb.js";import{g as C,a as R,d as z}from"./orderadd.19c67a0f.js";import{M}from"./mescroll-body.c2f6fcce.js";import{M as S}from"./mescroll-empty.82e9c349.js";import{u as O}from"./useMescroll.26ccf5de.js";import{g as D}from"./goto.7bab76c1.js";import{_ as E}from"./_plugin-vue_export-helper.1b428a4d.js";import"./u-badge.4fd7810d.js";import"./u-tabbar.c8394bc9.js";import"./u-safe-bottom.3546c5bb.js";import"./u-image.74ac23f6.js";import"./u-transition.65be38eb.js";import"./u-popup.1f2ebcae.js";import"./pay.25e81968.js";import"./mescroll-i18n.f3c5a2b0.js";const P=E(e({__name:"orderaddlist",setup(e){const E=t(null),P=t(!1),{mescrollInit:U,downCallback:L,getMescroll:Q}=O(_,u);let q=t([]),A=t(!1),N=t(!1),V=t(""),Y=t([]);t([]),l((e=>{V.value=e.status||"0",F()}));const B=e=>{A.value=!1;let t={page:e.num,limit:e.size,order_status:V.value};console.log(V.value),R(t).then((t=>{let l=t.data.data;1==e.num&&(q.value=[]),q.value=q.value.concat(l),e.endSuccess(l.length),A.value=!0})).catch((()=>{A.value=!0,e.endErr()}))},F=()=>{N.value=!1,Y.value=[],C().then((e=>{Object.values(e.data).forEach(((e,t)=>{Y.value.push(e)})),N.value=!0})).catch((()=>{N.value=!0}))};return(e,t)=>{const l=m,u=x,_=h,C=p(g("up-icon"),j),R=p(g("tabbar"),I),O=p(g("pay"),w);return s(),a(n,null,[r(l,{class:"bg-[#f8f8f8] min-h-screen overflow-hidden"},{default:o((()=>[d(N)?(s(),f(l,{key:0,class:"fixed left-0 top-0 right-0 z-10 mb-2"},{default:o((()=>[r(u,{"scroll-x":"true",class:"scroll-Y box-border px-[24rpx] bg-white"},{default:o((()=>[r(l,{class:"flex whitespace-nowrap justify-around"},{default:o((()=>[(s(!0),a(n,null,i(d(Y),((e,t)=>(s(),f(l,{class:v(["text-sm leading-[90rpx]",{"class-select":d(V)===e.status.toString()}]),onClick:t=>{return l=e.status,V.value=l.toString(),q.value=[],void Q().resetUpScroll();var l}},{default:o((()=>[b(y(e.name),1)])),_:2},1032,["class","onClick"])))),256))])),_:1})])),_:1})])),_:1})):c("v-if",!0),r(M,{ref:"mescrollRef",top:"44rpx",onInit:d(U),onDown:d(L),onUp:B},{default:o((()=>[d(q).length>0?(s(!0),a(n,{key:0},i(d(q),((t,u)=>(s(),f(l,{class:"tk-card",key:"index"},{default:o((()=>[r(l,{class:"text-xs font-weight",onClick:e=>d(D)("/addon/tk_jhkd/pages/orderdetail?id="+t.orderInfo.id)},{default:o((()=>[b("订单号:"+y(t.order_id),1)])),_:2},1032,["onClick"]),r(l,{class:"fb flex justify-between"},{default:o((()=>[r(l,{class:"text-xs font-weight"},{default:o((()=>[t.orderInfo.delivery_id?(s(),f(l,{key:0,class:"flex items-center",onClick:l=>e.copy(t.orderInfo.delivery_id)},{default:o((()=>[r(_,{class:"mr-2 text-primary text-xs mt-1"},{default:o((()=>[b("运单号:"+y(t.orderInfo.delivery_id),1)])),_:2},1024),r(l,null,{default:o((()=>[r(C,{class:"border-1 rounded",name:"cut",color:"#4541c7",size:"16"})])),_:1})])),_:2},1032,["onClick"])):c("v-if",!0)])),_:2},1024)])),_:2},1024),t.orderInfo?(s(),f(l,{key:0,class:"flex justify-center mt-3"},{default:o((()=>[r(l,{class:"flex items-center"},{default:o((()=>[r(l,{class:"mr-2"},{default:o((()=>[r(_,{class:"qu-tag text-sm p-2 rounded-xl"},{default:o((()=>[b("寄")])),_:1})])),_:1}),r(l,{class:"flex flex-col items-center"},{default:o((()=>[r(l,{class:"text-sm font-bold flex"},{default:o((()=>[r(l,{class:""},{default:o((()=>[b(y(t.orderInfo.start_address.address.split("-")[0]),1)])),_:2},1024)])),_:2},1024),r(l,{class:"tk-sltext text-xs text-[#4b4b4b]"},{default:o((()=>[b(y(t.orderInfo.start_address.name),1)])),_:2},1024)])),_:2},1024)])),_:2},1024),r(l,{class:"flex items-center ml-4 mr-4"},{default:o((()=>[r(l,{class:"flex"},{default:o((()=>[r(l,null,{default:o((()=>[r(C,{name:"more-dot-fill",color:"#63625f",size:"28"})])),_:1}),r(l,null,{default:o((()=>[r(C,{name:"more-dot-fill",color:"#63625f",size:"28"})])),_:1}),r(l,null,{default:o((()=>[r(C,{name:"arrow-right",color:"#63625f",size:"28"})])),_:1})])),_:1})])),_:1}),r(l,{class:"flex items-center"},{default:o((()=>[r(l,{class:"mr-4"},{default:o((()=>[r(_,{class:"song-tag text-sm p-2 rounded-xl"},{default:o((()=>[b("收")])),_:1})])),_:1}),r(l,{class:""},{default:o((()=>[r(l,{class:"flex flex-col items-center"},{default:o((()=>[r(l,{class:"text-sm font-bold flex"},{default:o((()=>[r(l,{class:""},{default:o((()=>[b(y(t.orderInfo.end_address.address.split("-")[0]),1)])),_:2},1024)])),_:2},1024),r(l,{class:"tk-sltext text-xs text-[#4b4b4b]"},{default:o((()=>[b(y(t.orderInfo.end_address.name),1)])),_:2},1024)])),_:2},1024)])),_:2},1024)])),_:2},1024)])),_:2},1024)):c("v-if",!0),r(l,{class:"flex mt-4 items-center justify-between"},{default:o((()=>[r(l,{class:"text-xs text-slate-600"},{default:o((()=>[b("下单时间:"+y(t.orderInfo.create_time),1)])),_:2},1024)])),_:2},1024),r(l,{class:"line-box1"}),t.deliveryRealInfo.fee_weight>0&&t.deliveryRealInfo.fee_weight-t.orderInfo.weight>0&&0==t.order_status?(s(),f(l,{key:1},{default:o((()=>[r(l,{class:"flex items-center mt-1 mb-2 flex text-xs font-bold p-2 text-[24rpx] bg-[#e5fffb] rounded-lg text-red bg-opacity-50"},{default:o((()=>[t.deliveryRealInfo.fee_weight>t.orderInfo.weight?(s(),f(l,{key:0,class:""},{default:o((()=>[b(" 超重: "+y(Math.ceil(t.deliveryRealInfo.fee_weight-t.orderInfo.weight))+"kg;￥"+y(Math.ceil(t.deliveryRealInfo.fee_weight-t.orderInfo.weight)*t.orderInfo.price_rule.add)+"; ",1)])),_:2},1024)):c("v-if",!0),t.deliveryRealInfo.fee_blockList?(s(!0),a(n,{key:1},i(t.deliveryRealInfo.fee_blockList,((e,t)=>(s(),f(l,{class:""},{default:o((()=>[b(y(e.name)+":￥"+y(e.fee),1)])),_:2},1024)))),256)):c("v-if",!0)])),_:2},1024),r(l,{class:"flex justify-end mt-1 items-center"},{default:o((()=>[r(l,{class:"font-bold text-red text-[28rpx]"},{default:o((()=>[b(" 需补差价:￥"+y(t.order_money),1)])),_:2},1024)])),_:2},1024)])),_:2},1024)):(s(),f(l,{key:2},{default:o((()=>[r(l,{class:"flex"},{default:o((()=>[1==t.order_status?(s(),f(l,{key:0,class:"flex text-xs font-bold ml-2 p-2 text-[24rpx] bg-[#e5fffb] rounded-lg text-red bg-opacity-50"},{default:o((()=>[b(" 已补差价：￥ "+y(t.order_money),1)])),_:2},1024)):c("v-if",!0)])),_:2},1024)])),_:2},1024)),r(l,{class:"line-box1"}),r(l,{class:"fb items-center"},{default:o((()=>[r(l,{class:"text-xs"},{default:o((()=>[b(y(t.create_time),1)])),_:2},1024),0==t.order_status?(s(),f(l,{key:0,class:"tk-tag",onClick:e=>(e=>{var t;P.value=!0,null==(t=E.value)||t.open("jhkdOrderAddPay",e.id,"/addon/tk_jhkd/pages/orderaddlist")})(t)},{default:o((()=>[b("立即支付")])),_:2},1032,["onClick"])):c("v-if",!0),1==t.order_status?(s(),f(l,{key:1,class:"tk-tag",onClick:e=>(async e=>{await z(e),Q().resetUpScroll()})(t.id)},{default:o((()=>[b("删除订单")])),_:2},1032,["onClick"])):c("v-if",!0)])),_:2},1024)])),_:2},1024)))),128)):c("v-if",!0),!d(q).length&&d(A)?(s(),f(S,{key:1,option:{icon:d(k)("static/resource/images/empty.png")}},null,8,["option"])):c("v-if",!0)])),_:1},8,["onInit","onDown"])])),_:1}),r(R,{addon:"tk_jhkd"}),r(O,{ref_key:"payRef",ref:E,onClose:t[0]||(t[0]=e=>P.value=!1)},null,512)],64)}}}),[["__scopeId","data-v-113168cf"]]);export{P as default};