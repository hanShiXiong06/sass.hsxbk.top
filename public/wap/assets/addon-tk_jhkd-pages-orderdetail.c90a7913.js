import{d as e,r as t,K as a,p as s,o as r,O as o,b as d,w as l,y as f,z as u,c as n,f as i,P as c,a6 as _,e as m,v as x,u as p,aS as k,i as v,D as y,g as I,h as g,B as b,E as h}from"./index-2882a2d8.js";import{_ as j}from"./u-icon.1104ad2f.js";import{_ as w}from"./u-code-input.d6deff6a.js";import{_ as N,a as O}from"./u-steps.efe1398b.js";import{_ as S}from"./tabbar.f422f3d5.js";import{_ as C}from"./pay.d604a92e.js";import{e as J,c as z,d as P,b as K,f as U}from"./order.065f7736.js";import{g as $}from"./goto.c6391162.js";import{_ as q}from"./_plugin-vue_export-helper.1b428a4d.js";import"./u-text.1d25de27.js";import"./u-badge.e8ba7dff.js";import"./u-tabbar.b113c065.js";import"./u-safe-bottom.f13b01b8.js";import"./u-image.46ebbbc1.js";import"./u-transition.4448d2e5.js";import"./u-popup.2abbe959.js";import"./u-overlay.1a317a4e.js";import"./pay.a752545f.js";const B=q(e({__name:"orderdetail",setup(e){const q=t(null),B=t(!1),D=a({}),E=t(),M=t(),R=e=>{k({phoneNumber:e})},T=async()=>{await z(D.id),$("/addon/tk_jhkd/pages/orderlist")},A=async()=>{await P(D.id),$("/addon/tk_jhkd/pages/orderlist")},F=async()=>{let e={id:D.id,close_reason:"用户主动退款"};await K(e),$("/addon/tk_jhkd/pages/orderlist")},G=()=>{var e;B.value=!0,null==(e=q.value)||e.open(D.payInfo.trade_type,D.payInfo.trade_id,"/tk_jhkd/pages/orderdetail?id="+D.id)},H=async e=>{const t=await J(e);null==t.data.order_status_arr&&(uni.$u.toast("订单不存在或删除"),setTimeout((function(){$("/addon/tk_jhkd/pages/orderlist")}),1e3)),Object.assign(D,t.data),D.orderInfo.delivery_id&&(async e=>{const t=await U(e);E.value=t.data})(D.orderInfo.delivery_id),D.orderInfo.courier_context&&(M.value=JSON.parse(D.orderInfo.courier_context),console.log(M.value))};return s((e=>{e.id&&H(e.id)})),(e,t)=>{const a=v,s=y,k=I(g("u-icon"),j),J=I(g("u-code-input"),w),z=b,P=I(g("u-steps-item"),N),K=I(g("u-steps"),O),U=I(g("tabbar"),S),$=I(g("pay"),C);return r(),o(c,null,[d(a,{class:""},{default:l((()=>[d(a,{class:"tk-card"},{default:l((()=>[d(a,{class:"order-num-card"},{default:l((()=>[d(a,{class:"text-xs font-weight text-slate-600"},{default:l((()=>[f("订单号:"+u(D.order_id),1)])),_:1}),d(a,{class:"fb mt-1"},{default:l((()=>[d(a,{class:"text-xs font-weight text-slate-500"},{default:l((()=>[f(u(D.create_time),1)])),_:1}),D.order_status_arr?(r(),n(a,{key:0,class:"mr-4 tk-tag"},{default:l((()=>[f(u(D.order_status_arr.name),1)])),_:1})):i("v-if",!0)])),_:1})])),_:1}),d(a,{class:"flex mt-1 items-center"},{default:l((()=>[d(a,{class:"mr-4"},{default:l((()=>[d(s,{class:"qu-tag text-xs"},{default:l((()=>[f("取")])),_:1})])),_:1}),D.orderInfo?(r(),n(a,{key:0,class:""},{default:l((()=>[d(a,{class:"tk-sltext text-xs text-[#4b4b4b] font-bold"},{default:l((()=>[f(u(JSON.parse(D.orderInfo.start_address).address),1)])),_:1}),d(a,{class:"text-xs flex"},{default:l((()=>[d(a,{class:"tk-sltext"},{default:l((()=>[f(u(JSON.parse(D.orderInfo.start_address).full_address),1)])),_:1})])),_:1}),d(a,{class:"text-xs flex"},{default:l((()=>[d(a,{class:"tk-sltext"},{default:l((()=>[f(u(JSON.parse(D.orderInfo.start_address).mobile),1)])),_:1})])),_:1})])),_:1})):i("v-if",!0)])),_:1}),d(a,{class:"flex mt-2 items-center"},{default:l((()=>[d(a,{class:"mr-4"},{default:l((()=>[d(s,{class:"song-tag text-xs"},{default:l((()=>[f("送")])),_:1})])),_:1}),D.orderInfo?(r(),n(a,{key:0,class:""},{default:l((()=>[d(a,{class:"tk-sltext text-xs text-[#4b4b4b] font-bold"},{default:l((()=>[f(u(JSON.parse(D.orderInfo.end_address).address),1)])),_:1}),d(a,{class:"text-xs flex"},{default:l((()=>[d(a,{class:"tk-sltext w-3/4"},{default:l((()=>[f(u(JSON.parse(D.orderInfo.end_address).full_address),1)])),_:1})])),_:1}),d(a,{class:"text-xs flex"},{default:l((()=>[d(a,{class:"tk-sltext w-3/4"},{default:l((()=>[f(u(JSON.parse(D.orderInfo.end_address).mobile),1)])),_:1})])),_:1})])),_:1})):i("v-if",!0)])),_:1}),D.orderInfo?(r(),n(a,{key:0,class:"detail-tag mt-2 text-xs font-weight p-4 text-[#878787]"},{default:l((()=>[f(" 物品:"+u(D.orderInfo.goods)+"重量:"+u(D.orderInfo.weight)+"kg "+u(D.orderInfo.goods)+" "+u(D.orderInfo.long)+"x"+u(D.orderInfo.width)+"x"+u(D.orderInfo.height)+"cm ",1)])),_:1})):i("v-if",!0),d(a,{class:"detail-tag font-weight p-4 text-[#313131]"},{default:l((()=>[f("备注:"+u(D.remark),1)])),_:1}),d(a,{class:"flex justify-end mt-2"},{default:l((()=>[D.order_status_arr?(r(!0),o(c,{key:0},_(D.order_status_arr.member_action,((e,t)=>(r(),n(a,{class:"tk-tag mr-4",onClick:t=>{return"gopay"==(a=e.class)&&G(),"del"==a&&A(),"refund"==a&&F(),void("close"==a&&T());var a}},{default:l((()=>[f(u(e.name),1)])),_:2},1032,["onClick"])))),256)):i("v-if",!0)])),_:1})])),_:1}),d(a,{class:"tk-card"},{default:l((()=>[D.orderInfo&&M.value&&1==D.orderInfo.order_status?(r(),n(a,{key:0,class:"mb-2 font-weight text-xs text-slate-600"},{default:l((()=>[d(a,{class:"fl items-center"},{default:l((()=>[d(a,{class:""},{default:l((()=>[f("揽件员："+u(M.value.courierName),1)])),_:1}),d(a,{class:"ml-4 mr-1",onClick:t[0]||(t[0]=e=>R(M.value.courierPhone))},{default:l((()=>[f("联系电话："+u(M.value.courierPhone),1)])),_:1}),d(k,{name:"phone",color:"#676767",size:"18",onClick:t[1]||(t[1]=e=>R(M.value.courierPhone))})])),_:1}),M.value&&M.value.pickUpCode?(r(),n(a,{key:0,class:"mt-2"},{default:l((()=>[d(J,{size:"24",bold:"",color:"#2931cc",value:M.value.pickUpCode},null,8,["value"])])),_:1})):i("v-if",!0)])),_:1})):i("v-if",!0),m(d(a,{class:"mt-2 flex items-center"},{default:l((()=>[d(z,{src:p(h)(D.orderInfo&&D.orderInfo.delivery_arry?D.orderInfo.delivery_arry.logo:""),mode:"",style:{width:"34px",height:"34px","border-radius":"100%"}},null,8,["src"]),d(a,{class:""},{default:l((()=>[d(a,{class:"ml-2 text-sm"},{default:l((()=>[f(u(D.orderInfo&&D.orderInfo.delivery_arry?D.orderInfo.delivery_arry.name:""),1)])),_:1}),D.orderInfo&&1!=D.orderInfo.order_status?(r(),n(a,{key:0,class:"ml-2 font-weight text-xs text-slate-600"},{default:l((()=>[f(u(D.orderInfo&&D.orderInfo.delivery_id?D.orderInfo.delivery_id:"暂无单号"),1)])),_:1})):i("v-if",!0)])),_:1}),d(a,{class:"tk-tag ml-2 font-weight text-xs text-slate-600"},{default:l((()=>[f(u(D.orderInfo&&D.orderInfo.order_status_desc?D.orderInfo.order_status_desc:"暂无状态"),1)])),_:1})])),_:1},512),[[x,D.orderInfo&&D.orderInfo.delivery_arry]])])),_:1}),d(a,{class:"tk-card"},{default:l((()=>[E.value&&E.value.length>0?(r(),n(a,{key:0,class:"p-2"},{default:l((()=>[d(K,{dot:"true",direction:"column"},{default:l((()=>[(r(!0),o(c,null,_(E.value,((e,t)=>(r(),n(P,{key:"index",title:e.desc,desc:e.time},null,8,["title","desc"])))),128))])),_:1})])),_:1})):(r(),n(a,{key:1,class:"text-xs text-slate-400"},{default:l((()=>[f("暂无运单动态")])),_:1}))])),_:1})])),_:1}),d(U,{addon:"tk_jhkd"}),d($,{ref_key:"payRef",ref:q,onClose:t[2]||(t[2]=e=>B.value=!1)},null,512)],64)}}}),[["__scopeId","data-v-4069dea9"]]);export{B as default};
