import{d as ee,x as te,f as se,r as m,h as a,c as n,e as i,w as d,u as l,R as oe,s as y,a as s,t,q as o,B as p,F as B,T as S,A as le,i as M,a5 as I,a3 as j,aQ as ae,a7 as ie,L as ne,aM as re,aN as de,ac as pe,ad as ce,aa as _e,M as ue,Y as xe,p as me,g as ve}from"./index-37fee5a0.js";/* empty css                   *//* empty css                *//* empty css                 *//* empty css                 *//* empty css                    */import"./el-tooltip-4ed993c7.js";/* empty css                  *//* empty css                     *//* empty css                        *//* empty css               *//* empty css               *//* empty css               */import"./el-form-item-4ed993c7.js";/* empty css                *//* empty css                   *//* empty css                       */import{v as fe,w as he,x as ye}from"./order-b0304810.js";import{p as be}from"./printer-17a959ed.js";import{_ as ge}from"./delivery-action.vue_vue_type_style_index_0_lang-3f7a149a.js";import{_ as ke}from"./order-notes.vue_vue_type_style_index_0_lang-8b541e16.js";import{_ as we}from"./order-edit-address.vue_vue_type_style_index_0_lang-41d82869.js";import{_ as De}from"./delivery-package.vue_vue_type_style_index_0_lang-96edcfa6.js";import{_ as Fe}from"./adjust-money.vue_vue_type_style_index_0_lang-0a850e49.js";import{_ as Ce}from"./electronic-sheet-print.vue_vue_type_style_index_0_lang-583722c8.js";import{_ as Ee}from"./_plugin-vue_export-helper-c27b6911.js";/* empty css                  *//* empty css                   *//* empty css                  *//* empty css                 *//* empty css                  *//* empty css                  *//* empty css                       *//* empty css                 *//* empty css                 */import"./delivery-d346ad15.js";import"./weapp-d6776f80.js";import"./qqmap-011f3cfb.js";/* empty css                    */import"./electronic_sheet-b99c0038.js";import"./lodop-e10b1588.js";const Te=b=>(me("data-v-462dddeb"),b=b(),ve(),b),Ae={class:"main-container"},Ne={class:"panel-title"},Be={class:"input-width"},Me={class:"input-width"},$e={class:"input-width"},Se={class:"input-width"},Ie={class:"input-width"},je={key:0},Le={class:"input-width"},Pe={class:"input-width"},Re={class:"input-width"},Oe={key:1},Ve={class:"input-width"},qe={class:"input-width"},ze={class:"input-width"},Ge={class:"input-width"},He={class:"input-width line-feed"},Qe={class:"input-width line-feed"},Ye={class:"panel-title"},Je={class:"mb-[20px]"},Ke={class:"ml-[30px] text-[14px] mr-[20px]"},Ue={class:"text-[14px]"},We={class:"flex mt-[10px]"},Xe={key:7,class:"flex"},Ze=["onClick"],et={class:"flex ml-[30px] mt-[15px]"},tt={class:"text-[14px] text-[#ff7f5b]"},st={class:"ml-[10px]"},ot={class:"text-[14px] text-[#a4a4a4]"},lt={class:"text-[14px] text-[#a4a4a4]"},at={class:"text-[14px] text-[#a4a4a4]"},it={class:"panel-title"},nt={class:"flex"},rt={class:"flex items-center shrink-0"},dt=["src"],pt={class:"flex flex-col"},ct={class:"multi-hidden text-[14px]"},_t={class:"text-[12px] text-[#999]"},ut={class:"flex flex-col"},xt={key:0},mt={key:0},vt={key:1,class:"text-[13px]"},ft={class:"text-[13px] mt-[5px]"},ht={class:"py-[12px] px-[16px] border-b border-color flex justify-end"},yt={class:"w-[310px] flex flex-col text-right"},bt={class:"flex mb-[10px]"},gt={class:"text-base flex-1"},kt={class:"text-base flex-1 pl-[30px]"},wt={key:0,class:"text-[14px]"},Dt={key:0},Ft={key:1,class:"text-[14px]"},Ct={class:"flex mb-[10px]"},Et={class:"text-base flex-1"},Tt={class:"text-base flex-1 pl-[30px]"},At={class:"flex mb-[10px]"},Nt={class:"text-base flex-1"},Bt={class:"text-base flex-1 pl-[30px]"},Mt={class:"flex"},$t={class:"text-base flex-1"},St={class:"text-base flex-1 pl-[30px] text-[red]"},It={key:0,class:"text-[14px]"},jt={key:0},Lt={key:1,class:"text-[14px]"},Pt={key:0,class:"mt-[50px] mb-[20px]"},Rt={key:1,class:"mb-[100px]",style:{"min-height":"100px"}},Ot={class:"mr-[20px] min-w-[71px]"},Vt={class:"leading-[1] w-full text-[14px] w-[100px] flex justify-end"},qt={class:"leading-[1] w-full text-[14px] w-[100px] flex justify-end mt-[15px]"},zt=Te(()=>s("div",{class:"w-[16px] h-[16px] flex items-center bg-[#D1EBFF] border-[1px] border-[#0091FF] rounded-[999px]"},[s("div",{class:"w-[8px] h-[8px] mx-auto bg-[#0091FF] rounded-[999px]"})],-1)),Gt={key:0,class:"w-[2px] h-[50px] bg-[#D1EBFF] mx-auto"},Ht={class:"leading-[1] ml-[20px] text-[14px]"},Qt={class:"leading-[1] ml-[20px] text-[14px] mt-[15px]"},Yt={class:"ml-[10px]"},Jt=ee({__name:"detail",setup(b){const $=te(),L=se(),P=$.meta.title,x=parseInt($.query.order_id),f=m(!0),e=m(null),v=async(_=0)=>{f.value=!0,e.value=null,await fe(_).then(({data:u})=>{e.value=u}).catch(()=>{}),f.value=!1};x?v(x):f.value=!1;const R=()=>{I.confirm(o("orderCloseTips"),o("warning"),{confirmButtonText:o("confirm"),cancelButtonText:o("cancel"),type:"warning"}).then(()=>{he(x).then(()=>{v(x)})})},k=m(null),O=()=>{k.value.setFormData(e.value),k.value.showDialog=!0},w=m(null),V=()=>{w.value.setFormData(e.value),w.value.showDialog=!0},D=m(null),q=()=>{D.value.setFormData(e.value),D.value.showDialog=!0},z=()=>{I.confirm(o("orderFinishTips"),o("warning"),{confirmButtonText:o("confirm"),cancelButtonText:o("cancel"),type:"warning"}).then(()=>{ye(x).then(()=>{v(x)})})},F=m(null),G=(_,u)=>{F.value.setFormData(_,u),F.value.showDialog=!0},C=m(null),H=()=>{let _={print_type:"single"};Object.assign(_,j(e.value)),C.value.setFormData(_),C.value.showDialog=!0},g=m(!1),E=m(null),Q=async()=>{let _=j(e.value);E.value.showDialog=!0,E.value.setFormData(_)},Y=()=>{e.value.order_id&&(g.value||(g.value=!0,be({type:"shopGoodsOrder",trigger:"manual",business:{order_id:e.value.order_id}}).then(_=>{g.value=!1}).catch(()=>{g.value=!1})))};return(_,u)=>{const J=ae,T=ie,c=ne,A=re,K=de,N=pe,U=ce,W=_e,X=ue,Z=xe;return a(),n("div",Ae,[i(T,{class:"card !border-none mb-[15px]",shadow:"never"},{default:d(()=>[i(J,{content:l(P),icon:_.ArrowLeft,onBack:u[0]||(u[0]=r=>l(L).push({path:"/shop/order/index"}))},null,8,["content","icon"])]),_:1}),oe((a(),y(X,{model:e.value,"label-width":"100px",ref:"formRef",class:"page-form","label-position":"left"},{default:d(()=>[e.value?(a(),y(T,{key:0,class:"box-card !border-none relative",shadow:"never"},{default:d(()=>[s("h3",Ne,t(l(o)("orderInfo")),1),i(K,{class:"row-bg px-[30px] mb-[20px]",gutter:20},{default:d(()=>[i(A,{span:8},{default:d(()=>[i(c,{label:l(o)("orderNo")},{default:d(()=>[s("div",Be,t(e.value.order_no),1)]),_:1},8,["label"]),i(c,{label:l(o)("orderForm")},{default:d(()=>[s("div",Me,t(e.value.order_from_name),1)]),_:1},8,["label"]),e.value.out_trade_no?(a(),y(c,{key:0,label:l(o)("outTradeNo")},{default:d(()=>[s("div",$e,t(e.value.out_trade_no),1)]),_:1},8,["label"])):p("",!0),e.value.pay?(a(),y(c,{key:1,label:l(o)("payType")},{default:d(()=>[s("div",Se,t(e.value.pay.type_name),1)]),_:1},8,["label"])):p("",!0)]),_:1}),i(A,{span:8},{default:d(()=>[i(c,{label:l(o)("deliveryType")},{default:d(()=>[s("div",Ie,t(e.value.delivery_type_name),1)]),_:1},8,["label"]),e.value.delivery_type=="express"||e.value.delivery_type=="local_delivery"?(a(),n("div",je,[i(c,{label:l(o)("takerName")},{default:d(()=>[s("div",Le,t(e.value.taker_name),1)]),_:1},8,["label"]),i(c,{label:l(o)("takerMobile")},{default:d(()=>[s("div",Pe,t(e.value.taker_mobile),1)]),_:1},8,["label"]),i(c,{label:l(o)("takerFullAddress")},{default:d(()=>[s("div",Re,t(e.value.taker_full_address),1)]),_:1},8,["label"])])):p("",!0),e.value.delivery_type=="store"?(a(),n("div",Oe,[i(c,{label:l(o)("storeName")},{default:d(()=>[s("div",Ve,t(e.value.store.store_name),1)]),_:1},8,["label"]),i(c,{label:l(o)("storeAddress")},{default:d(()=>[s("div",qe,t(e.value.store.full_address),1)]),_:1},8,["label"]),i(c,{label:l(o)("storeMobile")},{default:d(()=>[s("div",ze,t(e.value.store.store_mobile),1)]),_:1},8,["label"]),i(c,{label:l(o)("tradeTime")},{default:d(()=>[s("div",Ge,t(e.value.store.trade_time),1)]),_:1},8,["label"])])):p("",!0)]),_:1}),i(A,{span:8},{default:d(()=>[i(c,{label:l(o)("memberRemark")},{default:d(()=>[s("div",He,t(e.value.member_remark??"--"),1)]),_:1},8,["label"]),i(c,{label:l(o)("notes")},{default:d(()=>[s("div",Qe,t(e.value.shop_remark??"--"),1)]),_:1},8,["label"])]),_:1})]),_:1}),s("h3",Ye,t(l(o)("orderStatus")),1),s("div",Je,[s("p",null,[s("span",Ke,t(l(o)("orderStatus"))+"：",1),s("span",Ue,t(e.value.status_name.name),1)]),s("div",We,[s("span",{class:"text-[14px] px-[15px] py-[5px] ml-[30px] text-[#ff7f5b] bg-[#fff0e5] cursor-pointer",onClick:q},t(l(o)("notes")),1),e.value.status==2?(a(),n("span",{key:0,class:"text-[14px] px-[15px] py-[5px] ml-[30px] text-[#5c96fc] bg-[#ebf3ff] cursor-pointer",onClick:V},t(l(o)("delivery")),1)):p("",!0),e.value.status==1?(a(),n("span",{key:1,class:"text-[14px] px-[15px] py-[5px] ml-[30px] text-[#5c96fc] bg-[#ebf3ff] cursor-pointer",onClick:R},t(l(o)("close")),1)):p("",!0),e.value.status==1?(a(),n("span",{key:2,class:"text-[14px] px-[15px] py-[5px] ml-[30px] text-[#5c96fc] bg-[#ebf3ff] cursor-pointer",onClick:O},t(l(o)("editPrice")),1)):p("",!0),e.value.status==3?(a(),n("span",{key:3,class:"text-[14px] px-[15px] py-[5px] ml-[30px] text-[#5c96fc] bg-[#ebf3ff] cursor-pointer",onClick:z},t(l(o)("finish")),1)):p("",!0),e.value.delivery_type=="express"&&e.value.status==3?(a(),n("span",{key:4,class:"text-[14px] px-[15px] py-[5px] ml-[30px] text-[#5c96fc] bg-[#ebf3ff] cursor-pointer",onClick:H},t(l(o)("electronicSheetPrintTitle")),1)):p("",!0),e.value.delivery_type=="virtual"&&(e.value.status==2||e.value.status==3||e.value.status==5)?(a(),n("span",{key:5,class:"text-[14px] px-[15px] py-[5px] ml-[30px] text-[#5c96fc] bg-[#ebf3ff] cursor-pointer",onClick:Y},t(l(o)("printTicket")),1)):p("",!0),(e.value.status==1||e.value.status==2)&&e.value.delivery_type!="virtual"?(a(),n("span",{key:6,class:"text-[14px] px-[15px] py-[5px] ml-[30px] text-[#5c96fc] bg-[#ebf3ff] cursor-pointer",onClick:Q},t(l(o)("editAddress")),1)):p("",!0),e.value.order_delivery?(a(),n("div",Xe,[(a(!0),n(B,null,S(e.value.order_delivery,(r,h)=>(a(),n(B,{key:h},[r.delivery_type=="express"&&r.sub_delivery_type=="express"?(a(),n("span",{key:0,class:"text-[14px] px-[15px] py-[5px] ml-[30px] text-[#ff7f5b] bg-[#fff0e5] cursor-pointer",onClick:Kt=>G(r.id,e.value.taker_mobile)},t(l(o)("package"))+t(h+1),9,Ze)):p("",!0)],64))),128))])):p("",!0)]),s("div",et,[s("span",tt,t(l(o)("remind"))+"：",1),s("div",st,[s("p",ot,t(l(o)("remindTips1")),1),s("p",lt,t(l(o)("remindTips2")),1),s("p",at,t(l(o)("remindTips3")),1)])])]),s("h3",it,t(l(o)("goodsDetail")),1),i(U,{data:e.value.order_goods,size:"large"},{default:d(()=>[i(N,{label:l(o)("goodsName"),align:"left",width:"300"},{default:d(({row:r})=>[s("div",nt,[s("div",rt,[s("img",{class:"w-[50px] h-[50px] mr-[10px]",src:l(le)(r.goods_image)},null,8,dt)]),s("div",pt,[s("p",ct,t(r.goods_name),1),s("span",_t,t(r.sku_name),1)])])]),_:1},8,["label"]),i(N,{label:l(o)("price"),"min-width":"50",align:"left"},{default:d(({row:r})=>[s("div",ut,[e.value.activity_type=="exchange"?(a(),n("span",xt,[M(t(r.extend.point)+t(l(o)("point"))+" ",1),parseFloat(r.price)?(a(),n("span",mt,"+￥"+t(r.price),1)):p("",!0)])):(a(),n("span",vt,"￥"+t(r.price),1)),s("span",ft,t(r.num)+t(l(o)("piece")),1)])]),_:1},8,["label"]),i(N,{prop:"num",label:l(o)("num"),"min-width":"50",align:"right"},null,8,["label"])]),_:1},8,["data"]),s("div",ht,[s("div",yt,[s("div",bt,[s("div",gt,t(l(o)("goodsMoney")),1),s("div",kt,[e.value.activity_type=="exchange"?(a(),n("span",wt,[M(t(e.value.point)+t(l(o)("point"))+" ",1),parseFloat(e.value.goods_money)?(a(),n("span",Dt,"+￥"+t(e.value.goods_money),1)):p("",!0)])):(a(),n("span",Ft,"￥"+t(e.value.goods_money),1))])]),s("div",Ct,[s("div",Et,t(l(o)("discountMoney")),1),s("div",Tt,t(e.value.discount_money),1)]),s("div",At,[s("div",Nt,t(l(o)("deliveryMoney")),1),s("div",Bt,t(e.value.delivery_money),1)]),s("div",Mt,[s("div",$t,t(l(o)("orderMoney")),1),s("div",St,[e.value.activity_type=="exchange"?(a(),n("span",It,[M(t(e.value.point)+t(l(o)("point"))+" ",1),parseFloat(e.value.order_money)?(a(),n("span",jt,"+￥"+t(e.value.order_money),1)):p("",!0)])):(a(),n("span",Lt,"￥"+t(e.value.order_money),1))])])])]),e.value.order_log.length>0?(a(),n("h3",Pt,t(l(o)("operateLog")),1)):p("",!0),e.value.order_log.length>0?(a(),n("div",Rt,[(a(!0),n(B,null,S(e.value.order_log,(r,h)=>(a(),n("div",{class:"flex",key:h},[s("div",Ot,[s("div",Vt,t(r.create_time&&r.create_time.split(" ")[0]),1),s("div",qt,t(r.create_time&&r.create_time.split(" ")[1]),1)]),s("div",null,[zt,h+1!=e.value.order_log.length?(a(),n("div",Gt)):p("",!0)]),s("div",null,[s("div",Ht,t(r.main_type_name)+t(r.main_name),1),s("div",Qt,[s("span",null,t(r.type_name),1),s("span",Yt,t(r.content),1)])])]))),128))])):p("",!0)]),_:1})):p("",!0),!f.value&&!e.value?(a(),y(T,{key:1,class:"box-card !border-none relative",shadow:"never"},{default:d(()=>[i(W,{description:l(o)("orderInfoEmpty")},null,8,["description"])]),_:1})):p("",!0)]),_:1},8,["model"])),[[Z,f.value]]),i(Fe,{ref_key:"orderAdjustMoneyActionDialog",ref:k,onComplete:u[1]||(u[1]=r=>v(l(x)))},null,512),i(ge,{ref_key:"deliveryActionDialog",ref:w,onComplete:u[2]||(u[2]=r=>v(l(x)))},null,512),i(ke,{ref_key:"orderNotesDialog",ref:D,onComplete:u[3]||(u[3]=r=>v(l(x)))},null,512),i(De,{ref_key:"packageDialog",ref:F},null,512),i(Ce,{ref_key:"electronicSheetPrintDialog",ref:C,onComplete:_.loadOrderList},null,8,["onComplete"]),i(we,{ref_key:"orderEditAddressDialog",ref:E,onComplete:_.loadOrderList},null,8,["onComplete"])])}}});const Ls=Ee(Jt,[["__scopeId","data-v-462dddeb"]]);export{Ls as default};