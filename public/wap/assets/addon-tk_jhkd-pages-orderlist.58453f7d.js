import{c3 as e,d as t,r as a,p as s,o as l,P as o,b as r,w as d,c as n,Q as f,a7 as u,f as c,u as i,a8 as m,a9 as _,i as p,a6 as x,g as v,h as y,R as g,y as b,z as k,be as h,E as j,D as I}from"./index-7bf68536.js";import{_ as w}from"./u-icon.0c1c54c7.js";import{_ as C}from"./u-modal.b47eb877.js";import{_ as S}from"./tabbar.e049672c.js";import{_ as R}from"./pay.d2e850e8.js";import{g as z,a as M,d as O,c as D,b as J}from"./order.4cc1c605.js";import{M as N}from"./mescroll-body.b6d57b41.js";import{M as U}from"./mescroll-empty.fcefb74e.js";import{u as E}from"./useMescroll.26ccf5de.js";import{g as A}from"./goto.c2c6ac48.js";import{_ as L}from"./_plugin-vue_export-helper.1b428a4d.js";import"./u-line.463a2a45.js";import"./u-loading-icon.b37701e7.js";import"./u-popup.be4bfacd.js";import"./u-transition.cdf87992.js";import"./u-safe-bottom.908eeae4.js";import"./u-badge.d8d91719.js";import"./u-tabbar.d98653fa.js";import"./cloneDeep.77735539.js";import"./u-image.e46f68ef.js";import"./pay.2db06871.js";import"./mescroll-i18n.14e7fe02.js";/* empty css                                                                       */async function P(t,a,s){e({title:"操作提示",content:t,confirmColor:"#3569EA",cancelColor:"#646464",success:function(e){e.confirm?a(s):e.cancel&&console.log("用户点击取消")}})}const Y=L(t({__name:"orderlist",setup(e){const t=a(null),L=a(!1),Y=a({show:!1,msg:""}),{mescrollInit:q,downCallback:B,getMescroll:F}=E(_,m),H=a([]),Q=a(!1),V=a(!1),G=a(""),K=a([]);s((e=>{G.value=e.status||"",ee()}));const T=e=>{var a;L.value=!0,null==(a=t.value)||a.open(e.payInfo.trade_type,e.payInfo.trade_id,"/addon/tk_jhkd/pages/orderlist?status="+G.value)},W=async e=>{await O(e.id),F().resetUpScroll()},X=async e=>{await D(e.id),F().resetUpScroll()},Z=async e=>{const t={id:e.id,close_reason:"用户主动退款"};await J(t),F().resetUpScroll()},$=e=>{Q.value=!1;const t={page:e.num,limit:e.size,order_status:G.value};M(t).then((t=>{const a=t.data.data;1===e.num&&(H.value=[]),H.value=H.value.concat(a),e.endSuccess(a.length),Q.value=!0})).catch((()=>{Q.value=!0,e.endErr()}))},ee=()=>{V.value=!1,K.value=[];K.value.push({name:"全部",status:""}),z().then((e=>{Object.values(e.data).forEach((e=>{K.value.push(e)})),V.value=!0})).catch((()=>{V.value=!0}))};return(e,a)=>{const s=p,m=x,_=I,z=v(y("up-icon"),w),M=v(y("up-modal"),C),O=v(y("tabbar"),S),D=v(y("pay"),R);return l(),o(f,null,[r(s,{class:"bg-[#f8f8f8] min-h-screen overflow-hidden"},{default:d((()=>[V.value?(l(),n(s,{key:0,class:"fixed left-0 top-0 right-0 z-10"},{default:d((()=>[r(m,{"scroll-x":"true",class:"scroll-Y box-border px-[24rpx] bg-white"},{default:d((()=>[r(s,{class:"flex whitespace-nowrap justify-around"},{default:d((()=>[(l(!0),o(f,null,u(K.value,((e,t)=>(l(),n(s,{class:g(["text-sm leading-[90rpx]",{"class-select":G.value===e.status.toString()}]),onClick:t=>{return a=e.status,G.value=a.toString(),H.value=[],void F().resetUpScroll();var a}},{default:d((()=>[b(k(e.name),1)])),_:2},1032,["class","onClick"])))),256))])),_:1})])),_:1})])),_:1})):c("v-if",!0),r(s,{class:"h-[44rpx]"}),r(N,{ref:"mescrollRef",top:"44rpx",onInit:i(q),onDown:i(B),onUp:$},{default:d((()=>[H.value.length>0?(l(!0),o(f,{key:0},u(H.value,((e,a)=>(l(),n(s,{class:"tk-card m-2 mt-4 rounded-xl shadow-xl",key:a},{default:d((()=>[r(s,{class:"fb flex justify-between"},{default:d((()=>[r(s,{class:"text-xs font-weight"},{default:d((()=>[b(" 订单号:"+k(e.order_id)+" ",1),e.orderInfo.delivery_id?(l(),n(s,{key:0,class:"flex items-center",onClick:t=>i(h)(e.orderInfo.delivery_id)},{default:d((()=>[r(_,{class:"mr-2 text-primary text-xs mt-1"},{default:d((()=>[b("运单号:"+k(e.orderInfo.delivery_id),1)])),_:2},1024),r(s,null,{default:d((()=>[r(z,{class:"border-1 rounded",name:"cut",color:"#4541c7",size:"16"})])),_:1})])),_:2},1032,["onClick"])):c("v-if",!0)])),_:2},1024),"已关闭"==e.order_status_data.name?(l(),n(s,{key:0,class:"text-xs h-5 text-red-600"},{default:d((()=>[b(k(e.order_status_data.name),1)])),_:2},1024)):(l(),n(s,{key:1,class:"text-xs h-5"},{default:d((()=>[b(k(e.order_status_data.name),1)])),_:2},1024))])),_:2},1024),r(s,{class:"flex justify-center mt-3"},{default:d((()=>[r(s,{class:"flex items-center"},{default:d((()=>[r(s,{class:"mr-2"},{default:d((()=>[r(_,{class:"qu-tag text-sm p-2 rounded-xl"},{default:d((()=>[b("寄")])),_:1})])),_:1}),r(s,{class:"flex flex-col items-center"},{default:d((()=>[r(s,{class:"text-sm font-bold flex"},{default:d((()=>[r(s,{class:""},{default:d((()=>[b(k(JSON.parse(e.orderInfo.start_address).address.split("-")[0]),1)])),_:2},1024)])),_:2},1024),r(s,{class:"tk-sltext text-xs text-[#4b4b4b]"},{default:d((()=>[b(k(JSON.parse(e.orderInfo.start_address).name),1)])),_:2},1024)])),_:2},1024)])),_:2},1024),r(s,{class:"flex items-center ml-4 mr-4"},{default:d((()=>[r(s,{class:"flex"},{default:d((()=>[r(s,null,{default:d((()=>[r(z,{name:"more-dot-fill",color:"#63625f",size:"28"})])),_:1}),r(s,null,{default:d((()=>[r(z,{name:"more-dot-fill",color:"#63625f",size:"28"})])),_:1}),r(s,null,{default:d((()=>[r(z,{name:"arrow-right",color:"#63625f",size:"28"})])),_:1})])),_:1})])),_:1}),r(s,{class:"flex items-center"},{default:d((()=>[r(s,{class:"mr-4"},{default:d((()=>[r(_,{class:"song-tag text-sm p-2 rounded-xl"},{default:d((()=>[b("收")])),_:1})])),_:1}),r(s,{class:""},{default:d((()=>[r(s,{class:"flex flex-col items-center"},{default:d((()=>[r(s,{class:"text-sm font-bold flex"},{default:d((()=>[r(s,{class:""},{default:d((()=>[b(k(JSON.parse(e.orderInfo.end_address).address.split("-")[0]),1)])),_:2},1024)])),_:2},1024),r(s,{class:"tk-sltext text-xs text-[#4b4b4b]"},{default:d((()=>[b(k(JSON.parse(e.orderInfo.end_address).name),1)])),_:2},1024)])),_:2},1024)])),_:2},1024)])),_:2},1024)])),_:2},1024),r(s,{class:"flex mt-4 items-center justify-between"},{default:d((()=>[r(s,{class:"text-xs text-slate-600"},{default:d((()=>[b("下单时间:"+k(e.create_time),1)])),_:2},1024),r(s,{class:"text-red font-bold text-[32rpx]"},{default:d((()=>[b("￥"+k(e.order_money),1)])),_:2},1024)])),_:2},1024),r(s,{class:"text-[16rpx] pl-1 mt-1 text-[#7e7e7e]"},{default:d((()=>[b(" 注意：下单 1 分钟后才能取消订单哦")])),_:1}),e.addorderInfo&&e.deliveryRealInfo.fee_weight>0&&0==e.addorderInfo.order_status?(l(),n(s,{key:0},{default:d((()=>[r(s,{class:"line-box1"}),r(s,{class:"flex items-center mt-1 mb-2 flex text-xs font-bold p-2 text-[24rpx] bg-[#e5fffb] rounded-lg text-red bg-opacity-50"},{default:d((()=>[e.deliveryRealInfo.fee_weight>e.orderInfo.weight?(l(),n(s,{key:0,class:""},{default:d((()=>[b(" 超重: "+k(Math.ceil(e.deliveryRealInfo.fee_weight-e.orderInfo.weight))+"kg;￥"+k(Math.ceil(e.deliveryRealInfo.fee_weight-e.orderInfo.weight)*e.orderInfo.price_rule.add)+"; ",1)])),_:2},1024)):c("v-if",!0),e.deliveryRealInfo.fee_blockList?(l(!0),o(f,{key:1},u(e.deliveryRealInfo.fee_blockList,((e,t)=>(l(),n(s,{class:""},{default:d((()=>[b(k(e.name)+":￥"+k(e.fee),1)])),_:2},1024)))),256)):c("v-if",!0)])),_:2},1024),r(s,{class:"flex justify-end mt-1 items-center"},{default:d((()=>[r(s,{class:"font-bold text-red text-[28rpx]"},{default:d((()=>[b(" 需补差价:￥"+k(e.addorderInfo.order_money),1)])),_:2},1024)])),_:2},1024)])),_:2},1024)):(l(),n(s,{key:1},{default:d((()=>[r(s,{class:"flex"},{default:d((()=>[e.addorderInfo&&1==e.addorderInfo.order_status?(l(),n(s,{key:0,class:"flex text-xs font-bold ml-2 p-2 text-[24rpx] bg-[#e5fffb] rounded-lg text-red bg-opacity-50"},{default:d((()=>[b(" 已补差价：￥ "+k(e.addorderInfo.order_money),1)])),_:2},1024)):c("v-if",!0)])),_:2},1024)])),_:2},1024)),r(s,{class:"line-box1"}),r(s,{class:"flex mt-2 items-center justify-between"},{default:d((()=>[r(s,{class:"flex"},{default:d((()=>[e.order_status_arr?(l(!0),o(f,{key:0},u(e.order_status_arr.member_action,((t,a)=>(l(),n(s,{class:"tk-tag mr-4",onClick:a=>((e,t)=>{"gopay"===e?T(t):"del"===e?P("确定要删除订单吗？",W,t):"refund"===e?P("确定要申请退款吗？",Z,t):"close"===e&&P("确定要关闭订单吗？",X,t)})(t.class,e)},{default:d((()=>[b(k(t.name),1)])),_:2},1032,["onClick"])))),256)):c("v-if",!0)])),_:2},1024),r(s,{class:"flex"},{default:d((()=>[r(s,{class:"tk-tag",onClick:t=>i(A)("/addon/tk_jhkd/pages/orderdetail?id="+e.id)},{default:d((()=>[b("查看详情")])),_:2},1032,["onClick"]),e.addorderInfo&&0==e.addorderInfo.order_status?(l(),n(s,{key:0,onClick:a=>{return s=e.addorderInfo.id,L.value=!0,void(null==(l=t.value)||l.open("jhkdOrderAddPay",s,"/addon/tk_jhkd/pages/orderlist"));var s,l},class:"tk-tag1 ml-2"},{default:d((()=>[b("补差价")])),_:2},1032,["onClick"])):c("v-if",!0)])),_:2},1024)])),_:2},1024)])),_:2},1024)))),128)):c("v-if",!0),!H.value.length&&Q.value?(l(),n(U,{key:1,option:{icon:i(j)("static/resource/images/empty.png")}},null,8,["option"])):c("v-if",!0)])),_:1},8,["onInit","onDown"])])),_:1}),r(M,{show:Y.value.show,onConfirm:a[0]||(a[0]=t=>i(P)(e.item1.class,e.item)),ref:"uModal",onCancel:a[1]||(a[1]=e=>Y.value.show=!1),showCancelButton:!0,content:Y.value.msg,asyncClose:!0},null,8,["show","content"]),r(O,{addon:"tk_jhkd"}),r(D,{ref_key:"payRef",ref:t,onClose:a[2]||(a[2]=e=>L.value=!1)},null,512)],64)}}}),[["__scopeId","data-v-e3c03df0"]]);export{Y as default};
