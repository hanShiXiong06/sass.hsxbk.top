import{O as f,d as E,r,a2 as M,h as B,c as F,e as t,w as a,a as e,t as n,u as s,q as l,a1 as N,aU as D,bP as G,aM as I,aN as L,a6 as P}from"./index-6ea097a6.js";/* empty css                *//* empty css               *//* empty css               *//* empty css                     */import"./el-tooltip-4ed993c7.js";/* empty css                  */import{i as T}from"./index-d2519496.js";function Y(){return f.get("shop/stat/total")}function q(){return f.get("shop/stat/today")}function Q(){return f.get("shop/stat/yesterday")}function V(){return f.get("shop/stat")}function H(){return f.get("shop/stat/order")}function R(){return f.get("shop/stat/goods")}const U={class:"main-container"},j={class:"text-lg font-extrabold mr-[10px]"},z={class:"text-sm text-[#a19f98]"},J={class:"text-sm text-[#a19f98]"},K={class:"ml-[10px]"},W={class:"text-sm text-[#a19f98] leading-8"},X={style:{display:"inline-flex","align-items":"center"}},Z={class:"mr-[5px]"},$={class:"text-sm text-[#a19f98] leading-8"},tt={class:"text-sm text-[#a19f98] leading-8 mt-[15px]"},et={class:"ml-[10px]"},at={class:"text-sm text-[#a19f98] leading-8"},st={style:{display:"inline-flex","align-items":"center"}},lt={class:"mr-[5px]"},nt={class:"text-sm text-[#a19f98] leading-8"},ot={class:"text-sm text-[#a19f98] leading-8 mt-[15px]"},it={class:"ml-[10px]"},dt={class:"text-sm text-[#a19f98] leading-8"},ut={style:{display:"inline-flex","align-items":"center"}},ct={class:"mr-[5px]"},rt={class:"text-sm text-[#a19f98] leading-8"},_t={class:"text-sm text-[#a19f98] leading-8 mt-[15px]"},pt={class:"ml-[10px]"},vt={class:"text-sm text-[#a19f98] leading-8"},mt={style:{display:"inline-flex","align-items":"center"}},ft={class:"mr-[5px]"},ht={class:"text-sm text-[#a19f98] leading-8"},xt={class:"text-sm text-[#a19f98] leading-8 mt-[15px]"},yt={class:"text-lg font-extrabold"},gt={class:"ml-[10px]"},wt={style:{display:"inline-flex","align-items":"center"}},St={class:"mr-[5px]"},Ct={style:{display:"inline-flex","align-items":"center"}},bt={style:{display:"inline-flex","align-items":"center"}},Ot=e("div",{style:{display:"inline-flex","align-items":"center"}},"退款订单",-1),Tt={style:{display:"inline-flex","align-items":"center"}},At={style:{display:"inline-flex","align-items":"center"}},kt=e("span",{class:"text-lg font-extrabold"},"订单量趋势",-1),Et=e("span",{class:"text-lg font-extrabold"},"销售额（元）",-1),Qt=E({__name:"index",setup(Mt){const S=r(null),C=r(null),h=r([]),x=r([]),y=r([]),g=r([]),w=r([]),b=r([]);(async()=>{h.value=await(await Y()).data,x.value=await(await q()).data,y.value=await(await Q()).data,w.value=await(await H()).data,b.value=await(await R()).data,g.value=await(await V()).data,setTimeout(()=>{A(""),k("")},20)})();const A=u=>{let _=g.value.order_num;if(u&&(_=u),!S.value)return;const c=T(S.value),i=r({legend:{},xAxis:{data:[]},yAxis:{},tooltip:{trigger:"axis"},series:[{type:"line",data:[]}]});i.value.xAxis.data=g.value.time,i.value.series[0].data=_,c.setOption(i.value)},k=u=>{let _=g.value.sale_money;if(u&&(_=u),!C.value)return;const c=T(C.value),i=r({legend:{},xAxis:{data:[]},yAxis:{},tooltip:{trigger:"axis"},series:[{type:"line",data:[]}]});i.value.xAxis.data=g.value.time,i.value.series[0].data=_,c.setOption(i.value)},O=r("");return(()=>{const u=new Date,_=u.getFullYear(),c=u.getMonth()+1,i=u.getDate(),v=m(u.getHours()),o=m(u.getMinutes()),d=m(u.getSeconds());function m(p){return p<10?"0"+p:p}O.value=_+"-"+c+"-"+i+" "+v+":"+o+":"+d})(),(u,_)=>{const c=M("QuestionFilled"),i=N,v=D,o=G,d=I,m=L,p=P;return B(),F("div",U,[t(p,{shadow:"never",class:"!border-none"},{header:a(()=>[e("span",j,n(s(l)("realtimeOverview")),1),e("span",z,n(s(l)("updateTime")),1),e("span",J,n(O.value),1)]),default:a(()=>[t(m,null,{default:a(()=>[t(d,{span:6},{default:a(()=>[e("div",K,[e("div",W,[t(o,{value:x.value.order_num},{title:a(()=>[e("div",X,[e("span",Z,n(s(l)("todayOrderCount")),1),t(v,{class:"box-item",effect:"light",content:s(l)("todayOrderCount"),placement:"top"},{default:a(()=>[t(i,null,{default:a(()=>[t(c)]),_:1})]),_:1},8,["content"])])]),_:1},8,["value"])]),e("div",$,[e("span",null,n(s(l)("yesterday")),1),e("span",null,n(y.value.order_num),1)]),e("div",tt,[t(o,{title:s(l)("orderCount"),value:h.value.order_num},null,8,["title","value"])])])]),_:1}),t(d,{span:6},{default:a(()=>[e("div",et,[e("div",at,[t(o,{value:x.value.sale_money},{title:a(()=>[e("div",st,[e("span",lt,n(s(l)("todayOrderSale")),1),t(v,{class:"box-item",effect:"light",content:s(l)("todayOrderSale"),placement:"top"},{default:a(()=>[t(i,null,{default:a(()=>[t(c)]),_:1})]),_:1},8,["content"])])]),_:1},8,["value"])]),e("div",nt,[e("span",null,n(s(l)("yesterday")),1),e("span",null,n(y.value.sale_money),1)]),e("div",ot,[t(o,{title:s(l)("salesTotal"),value:h.value.sale_money},null,8,["title","value"])])])]),_:1}),t(d,{span:6},{default:a(()=>[e("div",it,[e("div",dt,[t(o,{value:x.value.refund_money},{title:a(()=>[e("div",ut,[e("span",ct,n(s(l)("todayAddMemberCount")),1),t(v,{class:"box-item",effect:"light",content:s(l)("todayAddMemberCount"),placement:"top"},{default:a(()=>[t(i,null,{default:a(()=>[t(c)]),_:1})]),_:1},8,["content"])])]),_:1},8,["value"])]),e("div",rt,[e("span",null,n(s(l)("yesterday")),1),e("span",null,n(y.value.refund_money),1)]),e("div",_t,[t(o,{title:s(l)("memberTotal"),value:h.value.refund_money},null,8,["title","value"])])])]),_:1}),t(d,{span:6},{default:a(()=>[e("div",pt,[e("div",vt,[t(o,{value:x.value.access_sum},{title:a(()=>[e("div",mt,[e("span",ft,n(s(l)("todayBrowseCount")),1),t(v,{class:"box-item",effect:"light",content:s(l)("todayBrowseCount"),placement:"top"},{default:a(()=>[t(i,null,{default:a(()=>[t(c)]),_:1})]),_:1},8,["content"])])]),_:1},8,["value"])]),e("div",ht,[e("span",null,n(s(l)("yesterday")),1),e("span",null,n(y.value.access_sum),1)]),e("div",xt,[t(o,{title:s(l)("browseTotal"),value:h.value.access_sum},null,8,["title","value"])])])]),_:1})]),_:1})]),_:1}),t(p,{shadow:"never",class:"mt-[15px] !border-none"},{header:a(()=>[e("span",yt,n(s(l)("agentMatters")),1)]),default:a(()=>[t(m,null,{default:a(()=>[t(d,{span:4},{default:a(()=>[e("div",gt,[t(o,{value:w.value.wait_pay_order},{title:a(()=>[e("div",wt,[e("span",St,n(s(l)("waitPayOrder")),1),t(v,{class:"box-item",effect:"light",content:s(l)("waitPayOrder"),placement:"top"},{default:a(()=>[t(i,null,{default:a(()=>[t(c)]),_:1})]),_:1},8,["content"])])]),_:1},8,["value"])])]),_:1}),t(d,{span:4},{default:a(()=>[t(o,{value:w.value.wait_delivery_order},{title:a(()=>[e("div",Ct,n(s(l)("waitDeliveryOrder")),1)]),_:1},8,["value"])]),_:1}),t(d,{span:4},{default:a(()=>[t(o,{value:w.value.wait_take_order},{title:a(()=>[e("div",bt,n(s(l)("waitTakeOrder")),1)]),_:1},8,["value"])]),_:1}),t(d,{span:4},{default:a(()=>[t(o,{value:w.value.refund_order},{title:a(()=>[Ot]),_:1},8,["value"])]),_:1}),t(d,{span:4},{default:a(()=>[t(o,{value:b.value.sale_goods_num},{title:a(()=>[e("div",Tt,n(s(l)("saleGoodsNum")),1)]),_:1},8,["value"])]),_:1}),t(d,{span:4},{default:a(()=>[t(o,{value:b.value.warehouse_goods_num},{title:a(()=>[e("div",At,n(s(l)("warehouseGoodsNum")),1)]),_:1},8,["value"])]),_:1})]),_:1})]),_:1}),t(m,{gutter:15,class:"mt-[15px]"},{default:a(()=>[t(d,{span:12},{default:a(()=>[t(p,{shadow:"never",class:"!border-none"},{header:a(()=>[kt]),default:a(()=>[e("div",{ref_key:"visitStat",ref:S,style:{width:"100%",height:"300px"}},null,512)]),_:1})]),_:1}),t(d,{span:12},{default:a(()=>[t(p,{shadow:"never",class:"!border-none"},{header:a(()=>[Et]),default:a(()=>[e("div",{ref_key:"hourStat",ref:C,style:{width:"100%",height:"300px"}},null,512)]),_:1})]),_:1})]),_:1})])}}});export{Qt as default};
