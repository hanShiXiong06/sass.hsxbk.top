import{d as I,x as j,f as M,r as w,h as _,c,a as e,u as l,t as s,q as o,R,s as u,w as t,e as a,B as p,F as k,T as F,A as L,L as S,aM as V,aN as q,ac as z,ad as P,a7 as A,M as O,Y as X}from"./index-a3bdc7eb.js";/* empty css                   *//* empty css                *//* empty css                *//* empty css                 *//* empty css                    */import"./el-tooltip-4ed993c7.js";/* empty css                  *//* empty css                     *//* empty css                        *//* empty css               *//* empty css               *//* empty css               */import"./el-form-item-4ed993c7.js";import{X as Y}from"./tourism-7250819d.js";const $={class:"main-container"},G={class:"detail-head"},H=e("span",{class:"iconfont iconxiangzuojiantou !text-xs"},null,-1),J={class:"ml-[1px]"},K=e("span",{class:"adorn"},"|",-1),Q={class:"right"},U={class:"panel-title"},W={class:"input-width"},Z={class:"input-width"},ee={class:"input-width"},te={class:"input-width"},ae={class:"input-width"},se={class:"input-width"},le={class:"input-width"},oe={class:"input-width"},ie={class:"input-width"},ne={class:"input-width"},de={class:"panel-title"},_e={class:"input-width"},re={class:"input-width"},ce={class:"input-width"},ue={class:"input-width"},pe={class:"panel-title"},me={class:"flex"},fe=["src"],he={class:"text-sm text-gray-400"},ve={class:"py-[12px] px-[16px] border-b border-color"},be={class:"flex width-full justify-end"},xe={class:"text-base"},ye={class:"text-base"},ge={class:"flex width-full justify-end mt-[5px]"},we={class:"text-base"},ke={class:"text-base"},Fe={class:"mt-[50px] mb-[20px]"},Ne={style:{height:"300px"}},Ce={class:"mr-[20px] min-w-[71px]"},De={class:"leading-[1] w-full text-[14px] w-[100px] flex justify-end"},Ee={class:"leading-[1] w-full text-[14px] w-[100px] flex justify-end mt-[5px]"},Te=e("div",{class:"w-[16px] h-[16px] flex items-center bg-[#D1EBFF] border-[1px] border-[#0091FF] rounded-[999px]"},[e("div",{class:"w-[8px] h-[8px] mx-auto bg-[#0091FF] rounded-[999px]"})],-1),Be={key:0,class:"w-[2px] h-[50px] bg-[#D1EBFF] mx-auto"},Ie={class:"leading-[1] ml-[20px] text-[14px]"},Ke=I({__name:"order_detail",setup(je){const x=j(),N=M(),C=x.meta.title,y=parseInt(x.query.order_id),m=w(!0),i=w(null);return y?(async(g=0)=>{m.value=!0,i.value=null,await Y(g).then(({data:f})=>{i.value=f}).catch(()=>{}),m.value=!1})(y):m.value=!1,(g,f)=>{const n=S,d=V,v=q,b=z,D=P,E=A,T=O,B=X;return _(),c("div",$,[e("div",G,[e("div",{class:"left",onClick:f[0]||(f[0]=r=>l(N).push({path:"/tourism/order/scenic"}))},[H,e("span",J,s(l(o)("returnToPreviousPage")),1)]),K,e("span",Q,s(l(C)),1)]),R((_(),u(T,{model:i.value,"label-width":"100px",ref:"formRef",class:"page-form"},{default:t(()=>[i.value?(_(),u(E,{key:0,class:"box-card !border-none relative",shadow:"never"},{default:t(()=>[e("h3",U,s(l(o)("orderInfo")),1),a(v,{class:"row-bg",justify:"space-between"},{default:t(()=>[a(d,{span:6},{default:t(()=>[a(n,{label:l(o)("orderNo")},{default:t(()=>[e("div",W,s(i.value.order_no),1)]),_:1},8,["label"])]),_:1}),a(d,{span:6},{default:t(()=>[a(n,{label:l(o)("createTime")},{default:t(()=>[e("div",Z,s(i.value.create_time||""),1)]),_:1},8,["label"])]),_:1}),a(d,{span:6},{default:t(()=>[a(n,{label:l(o)("orderFromName")},{default:t(()=>[e("div",ee,s(i.value.order_from_name),1)]),_:1},8,["label"])]),_:1}),a(d,{span:6},{default:t(()=>[a(n,{label:l(o)("member")},{default:t(()=>[e("div",te,s(i.value.member.nickname),1)]),_:1},8,["label"])]),_:1}),a(d,{span:6},{default:t(()=>[a(n,{label:l(o)("mobile")},{default:t(()=>[e("div",ae,s(i.value.mobile),1)]),_:1},8,["label"])]),_:1}),a(d,{span:6},{default:t(()=>[a(n,{label:l(o)("ip")},{default:t(()=>[e("div",se,s(i.value.ip),1)]),_:1},8,["label"])]),_:1}),a(d,{span:6},{default:t(()=>[a(n,{label:l(o)("orderStatus")},{default:t(()=>[e("div",le,s(i.value.order_status_info.name),1)]),_:1},8,["label"])]),_:1}),i.value.pay_time?(_(),u(d,{key:0,span:6},{default:t(()=>[a(n,{label:l(o)("payTime")},{default:t(()=>[e("div",oe,s(i.value.pay_time||""),1)]),_:1},8,["label"])]),_:1})):p("",!0),i.value.pay_type_name?(_(),u(d,{key:1,span:6},{default:t(()=>[a(n,{label:l(o)("payTypeName")},{default:t(()=>[e("div",ie,s(i.value.pay_type_name),1)]),_:1},8,["label"])]),_:1})):p("",!0),a(d,{span:6},{default:t(()=>[i.value.refund_status?(_(),u(n,{key:0,label:l(o)("refundStatus")},{default:t(()=>[e("div",ne,s(i.value.refund_status_name),1)]),_:1},8,["label"])):p("",!0)]),_:1})]),_:1}),e("h3",de,s(l(o)("reserveInfo")),1),a(v,{class:"row-bg"},{default:t(()=>[a(d,{span:24},{default:t(()=>[a(n,{label:l(o)("reserveDate")},{default:t(()=>[e("div",_e,s(i.value.start_time),1)]),_:1},8,["label"])]),_:1})]),_:1}),(_(!0),c(k,null,F(i.value.buyer_info,(r,h)=>(_(),u(v,{class:"row-bg",key:h},{default:t(()=>[a(d,{span:6},{default:t(()=>[a(n,{label:l(o)("touristName")},{default:t(()=>[e("div",re,s(r.name),1)]),_:2},1032,["label"])]),_:2},1024),a(d,{span:6},{default:t(()=>[a(n,{label:l(o)("touristCardType")},{default:t(()=>[e("div",ce,s(l(o)("idCard")),1)]),_:1},8,["label"])]),_:1}),a(d,{span:6},{default:t(()=>[a(n,{label:l(o)("touristCardNo")},{default:t(()=>[e("div",ue,s(r.id_card),1)]),_:2},1032,["label"])]),_:2},1024)]),_:2},1024))),128)),e("h3",pe,s(l(o)("orderDetail")),1),a(D,{data:i.value.item,size:"large"},{empty:t(()=>[e("span",null,s(l(o)("emptyData")),1)]),default:t(()=>[a(b,{label:l(o)("ticketInfo"),"min-width":"200",align:"left"},{default:t(({row:r})=>[e("div",me,[r.goods_image?(_(),c("img",{key:0,class:"w-[100px] max-h-[60px] mr-[10px]",src:l(L)(r.goods_image)},null,8,fe)):p("",!0),e("div",null,[e("p",null,s(i.value.scenic.scenic_name),1),e("p",he,s(r.goods_name),1)])])]),_:1},8,["label"]),a(b,{prop:"goods_money",label:l(o)("ticketMoney"),"min-width":"50",align:"left"},null,8,["label"]),a(b,{prop:"num",label:l(o)("ticketNum"),"min-width":"50",align:"center"},null,8,["label"])]),_:1},8,["data"]),e("div",ve,[e("div",be,[e("div",xe,s(l(o)("orderMoney"))+"：",1),e("div",ye,s(i.value.order_money),1)]),e("div",ge,[e("div",we,s(l(o)("payMoney"))+"：",1),e("div",ke,s(i.value.pay_money),1)])]),e("h3",Fe,s(l(o)("operateLog")),1),e("div",Ne,[(_(!0),c(k,null,F(i.value.order_log,(r,h)=>(_(),c("div",{class:"flex",key:h},[e("div",Ce,[e("div",De,s(r.action_time.split(" ")[0]),1),e("div",Ee,s(r.action_time.split(" ")[1]),1)]),e("div",null,[Te,h+1!=i.value.order_log.length?(_(),c("div",Be)):p("",!0)]),e("span",Ie,s(r.action),1)]))),128))])]),_:1})):p("",!0)]),_:1},8,["model"])),[[B,m.value]])])}}});export{Ke as default};
