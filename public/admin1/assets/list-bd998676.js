import{d as ue,x as fe,f as he,r as u,n as ye,h as d,c as m,e as a,w as i,a as p,t as s,u as l,q as t,F as N,Q as B,s as v,i as h,P as be,B as y,A as xe,_ as S,ak as ge,aI as ve,J as ke,K as we,bN as Ce,E as De,L as Te,a0 as Pe,aD as Ee,aE as Ve,aa as Fe,ac as Ne,a4 as Be,T as Se,U as $e}from"./index-17984968.js";/* empty css                   */import{_ as Ue}from"./index.vue_vue_type_script_setup_true_lang-2a93ed0d.js";/* empty css                      *//* empty css                 *//* empty css               *//* empty css                  *//* empty css                  *//* empty css                     *//* empty css                  *//* empty css                 *//* empty css                 *//* empty css                    */import"./el-tooltip-4ed993c7.js";/* empty css                        *//* empty css                    *//* empty css                *//* empty css                *//* empty css                  *//* empty css                       */import"./el-form-item-4ed993c7.js";import{g as ze,a as Me,b as Ye,c as Oe,l as Ae,m as je,p as Le}from"./order-fc033573.js";import{_ as Re}from"./delivery-action.vue_vue_type_style_index_0_lang-54c0f0a2.js";import{_ as He}from"./order-notes.vue_vue_type_style_index_0_lang-a077d836.js";import{_ as Ie}from"./order-export-select.vue_vue_type_script_setup_true_lang-5af996ea.js";import{_ as qe}from"./_plugin-vue_export-helper-c27b6911.js";/* empty css                  *//* empty css                   *//* empty css                       *//* empty css                 *//* empty css                 */import"./delivery-9c7fac72.js";import"./weapp-cc74ef2e.js";const Ge={class:"main-container"},Je={class:"flex justify-between items-center"},Ke={class:"text-page-title"},Qe={class:"table-body min-h-[150px]"},We={key:0},Xe={class:"flex items-center justify-between bg-[#f7f8fa] mt-[10px] border-[#e4e7ed] border-solid border-b-[1px] px-3 h-[35px] text-[12px] text-[#666]"},Ze={class:"ml-5"},et={key:0,class:"ml-5"},tt={class:"flex cursor-pointer"},at={class:"flex items-center min-w-[50px] mr-[10px]"},lt=["src"],ot={key:1,class:"w-[50px] h-[50px]",src:"",alt:""},st={class:"flex flex-col"},rt={class:"multi-hidden text-[14px]"},nt={class:"text-[12px] text-[#999]"},it={key:0,class:"text-[12px] text-[#999]"},dt={class:"flex flex-col"},pt={key:0},ct={key:0},mt={key:1,class:"text-[13px]"},_t={class:"text-[13px] mt-[5px]"},ut={class:"flex flex-col"},ft={key:0},ht={key:0,class:"text-[14px]"},yt={key:0},bt={key:1,class:"text-[14px]"},xt={class:"flex flex-col"},gt=["onClick"],vt={class:"text-[12px] mt-[5px]"},kt={class:"text-[12px] mt-[5px]"},wt={class:"text-[14px]"},Ct={class:"text-[14px]"},Dt={key:0,class:"text-[14px] min-h-[30px] leading-[30px] px-3 bg-[#fff0e5] text-[#ff7f5b]"},Tt={class:"mr-[5px]"},Pt={class:"mt-[16px] flex justify-end"},Et=ue({__name:"list",setup(Vt){const R=fe(),D=he(),H=R.meta.title,$=u(""),I=u([]),U=u([]),z=u([]);(async()=>{I.value=await(await ze()).data,U.value=await(await Me()).data,z.value=await(await Ye()).data})();const T=u(null),P=u(!1),q=()=>{if(P.value==!1){P.value=!0;for(const r in o.data)for(const n in o.data[r].order_goods)T.value[r].toggleRowSelection(o.data[r].order_goods[n],!0)}else{P.value=!1;for(const r in o.data)for(const n in o.data[r].order_goods)T.value[r].clearSelection()}},o=ye({page:1,limit:10,total:0,loading:!0,data:[],searchParam:{search_type:"order_no",search_name:"",pay_type:"",order_from:"",status:"",create_time:[],pay_time:[]}}),M=u(),f=(r=1)=>{o.loading=!0,o.page=r,Oe({page:o.page,limit:o.limit,...o.searchParam}).then(n=>{o.loading=!1,o.data=n.data.data.map(b=>(b.order_goods.forEach(x=>{x.rowNum=b.order_goods.length}),b)),o.total=n.data.total}).catch(()=>{o.loading=!1})};f();const G=r=>{o.searchParam.status=r,f()},J=({row:r,column:n,rowIndex:b,columnIndex:x})=>b===0?x===0?[r.rowNum,1]:x>3?[r.rowNum,1]:[1,1]:x===0?[0,0]:x>3?[0,0]:[1,1],K=u(null),Y=u(""),E=u(!1),Q=r=>{E.value=r},W=r=>{Y.value=r,E.value=!0},O=u(null),X=()=>{O.value.showDialog=!0},Z=r=>{D.push("/shop/order/detail?order_id="+r.order_id)},ee=r=>{const n=D.resolve({path:"/member/detail",query:{id:r}});window.open(n.href,"_blank")},te=r=>{S.confirm(t("orderCloseTips"),t("warning"),{confirmButtonText:t("confirm"),cancelButtonText:t("cancel"),type:"warning"}).then(()=>{Ae(r.order_id).then(()=>{f()})})},V=u(null),ae=r=>{if(console.log(r),r.delivery_type=="express"){D.push("/shop_order/list");return}V.value.setFormData(r),V.value.showDialog=!0},F=u(null),le=r=>{F.value.setFormData(r),F.value.showDialog=!0},oe=r=>{S.confirm(t("orderFinishTips"),t("warning"),{confirmButtonText:t("confirm"),cancelButtonText:t("cancel"),type:"warning"}).then(()=>{je(r.order_id).then(()=>{f()})})},se=r=>{r&&(r.resetFields(),f())},re=r=>{S.confirm(t("确定用户已完成付款了吗?"),t("warning"),{confirmButtonText:t("confirm"),cancelButtonText:t("cancel"),type:"warning"}).then(()=>{Le({order_id:r.order_id}).then(()=>{f()})})};return(r,n)=>{const b=ge,x=ve,ne=ke,k=we,A=Ce,g=De,ie=Te,j=Pe,w=Ee,de=Ve,_=Fe,L=Ne,pe=Be,ce=Se,me=Ue,_e=$e;return d(),m("div",Ge,[a(j,{class:"box-card !border-none",shadow:"never"},{default:i(()=>[p("div",Je,[p("span",Ke,s(l(H)),1)]),a(j,{class:"box-card !border-none my-[10px] table-search-wrap",shadow:"never"},{default:i(()=>[a(ie,{inline:!0,model:o.searchParam,ref_key:"searchFormRef",ref:M},{default:i(()=>[a(k,{label:l(t)("orderInfo"),prop:"search_name"},{default:i(()=>[a(x,{modelValue:o.searchParam.search_type,"onUpdate:modelValue":n[0]||(n[0]=e=>o.searchParam.search_type=e),clearable:"",class:"input-item"},{default:i(()=>[a(b,{label:l(t)("orderNo"),value:"order_no"},null,8,["label"]),a(b,{label:l(t)("outTradeNo"),value:"out_trade_no"},null,8,["label"])]),_:1},8,["modelValue"]),a(ne,{class:"input-item ml-3",modelValue:o.searchParam.search_name,"onUpdate:modelValue":n[1]||(n[1]=e=>o.searchParam.search_name=e),modelModifiers:{trim:!0}},null,8,["modelValue"])]),_:1},8,["label"]),a(k,{label:l(t)("payType"),prop:"pay_type"},{default:i(()=>[a(x,{modelValue:o.searchParam.pay_type,"onUpdate:modelValue":n[2]||(n[2]=e=>o.searchParam.pay_type=e),clearable:"",class:"input-item"},{default:i(()=>[(d(!0),m(N,null,B(U.value,(e,C)=>(d(),v(b,{key:C,label:e.name,value:e.key},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1},8,["label"]),a(k,{label:l(t)("fromType"),prop:"from_type"},{default:i(()=>[a(x,{modelValue:o.searchParam.order_from,"onUpdate:modelValue":n[3]||(n[3]=e=>o.searchParam.order_from=e),clearable:"",class:"input-item"},{default:i(()=>[(d(!0),m(N,null,B(z.value,(e,C)=>(d(),v(b,{key:C,label:e,value:C},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1},8,["label"]),a(k,{label:l(t)("createTime"),prop:"create_time"},{default:i(()=>[a(A,{modelValue:o.searchParam.create_time,"onUpdate:modelValue":n[4]||(n[4]=e=>o.searchParam.create_time=e),type:"datetimerange","value-format":"YYYY-MM-DD HH:mm:ss","start-placeholder":l(t)("startDate"),"end-placeholder":l(t)("endDate")},null,8,["modelValue","start-placeholder","end-placeholder"])]),_:1},8,["label"]),a(k,{label:l(t)("payTime"),prop:"pay_time"},{default:i(()=>[a(A,{modelValue:o.searchParam.pay_time,"onUpdate:modelValue":n[5]||(n[5]=e=>o.searchParam.pay_time=e),type:"datetimerange","value-format":"YYYY-MM-DD HH:mm:ss","start-placeholder":l(t)("startDate"),"end-placeholder":l(t)("endDate")},null,8,["modelValue","start-placeholder","end-placeholder"])]),_:1},8,["label"]),a(k,null,{default:i(()=>[a(g,{type:"primary",onClick:n[6]||(n[6]=e=>f())},{default:i(()=>[h(s(l(t)("search")),1)]),_:1}),a(g,{onClick:n[7]||(n[7]=e=>se(M.value))},{default:i(()=>[h(s(l(t)("reset")),1)]),_:1}),a(g,{type:"primary",onClick:X},{default:i(()=>[h(s(l(t)("export")),1)]),_:1})]),_:1})]),_:1},8,["model"])]),_:1}),a(de,{modelValue:$.value,"onUpdate:modelValue":n[8]||(n[8]=e=>$.value=e),class:"demo-tabs",onTabChange:G},{default:i(()=>[a(w,{label:l(t)("all"),name:""},null,8,["label"]),a(w,{label:l(t)("toBePaid"),name:"1"},null,8,["label"]),a(w,{label:l(t)("toBeShipped"),name:"2"},null,8,["label"]),a(w,{label:l(t)("shipped"),name:"3"},null,8,["label"]),a(w,{label:l(t)("completed"),name:"5"},null,8,["label"]),a(w,{label:l(t)("closed"),name:"-1"},null,8,["label"])]),_:1},8,["modelValue"]),p("div",null,[a(L,{data:o.data,size:"large",class:"table-top",onSelectAll:q},{default:i(()=>[a(_,{type:"selection",width:"40"}),a(_,{label:l(t)("orderGoods"),"min-width":"200"},null,8,["label"]),a(_,{label:l(t)("goodsPriceNumber"),"min-width":"120"},null,8,["label"]),a(_,{label:l(t)("rightsProtection"),"min-width":"120"},null,8,["label"]),a(_,{label:l(t)("orderMoney"),"min-width":"120"},null,8,["label"]),a(_,{label:l(t)("buyInfo"),"min-width":"120"},null,8,["label"]),a(_,{label:l(t)("deliveryType"),"min-width":"100"},null,8,["label"]),a(_,{label:l(t)("orderStatus"),"min-width":"100"},null,8,["label"]),a(_,{label:l(t)("operation"),fixed:"right",align:"right","min-width":"120"},null,8,["label"])]),_:1},8,["data"]),be((d(),m("div",Qe,[o.loading?y("",!0):(d(),m("div",We,[o.data.length?(d(!0),m(N,{key:0},B(o.data,(e,C)=>(d(),m("div",{key:C},[p("div",Xe,[p("div",null,[p("span",null,s(l(t)("orderNo"))+"："+s(e.order_no),1),p("span",Ze,s(l(t)("createTime"))+"："+s(e.create_time),1),e.pay?(d(),m("span",et,s(l(t)("payType"))+"："+s(e.pay.type_name),1)):y("",!0)]),p("div",null,[a(g,{type:"primary",link:"",onClick:c=>Z(e)},{default:i(()=>[h(s(l(t)("info")),1)]),_:2},1032,["onClick"]),a(g,{type:"primary",link:"",onClick:c=>le(e)},{default:i(()=>[h(s(l(t)("notes")),1)]),_:2},1032,["onClick"])])]),a(L,{data:e.order_goods,size:"large","show-header":!1,"span-method":J,ref_for:!0,ref_key:"multipleTable",ref:T},{default:i(()=>[a(_,{type:"selection",width:"40"}),a(_,{align:"left","min-width":"200"},{default:i(({row:c})=>[p("div",tt,[p("div",at,[c.goods_image?(d(),m("img",{key:0,class:"w-[50px] h-[50px]",src:l(xe)(c.goods_image),alt:""},null,8,lt)):(d(),m("img",ot))]),p("div",st,[p("p",rt,s(c.goods_name),1),p("span",nt,s(c.sku_name),1),c.sku_no?(d(),m("span",it,s(l(t)("商品编号"))+": "+s(c.sku_no),1)):y("",!0)])])]),_:1}),a(_,{"min-width":"120"},{default:i(({row:c})=>[p("div",dt,[e.activity_type=="exchange"?(d(),m("span",pt,[h(s(c.extend.point)+s(l(t)("point"))+" ",1),parseFloat(c.price)?(d(),m("span",ct,"+￥"+s(c.price),1)):y("",!0)])):(d(),m("span",mt,"￥"+s(c.price),1)),p("span",_t,s(c.num)+s(l(t)("piece")),1)])]),_:2},1024),a(_,{"min-width":"120"},{default:i(({row:c})=>[p("div",ut,[c.status!=1?(d(),m("span",ft,s(c.status_name),1)):y("",!0)])]),_:1}),a(_,{"min-width":"120","class-name":"border-0 border-l-[1px] border-solid border-[var(--el-table-border-color)]"},{default:i(()=>[e.activity_type=="exchange"?(d(),m("span",ht,[h(s(e.point)+s(l(t)("point"))+" ",1),parseFloat(e.order_money)?(d(),m("span",yt,"+￥"+s(e.order_money),1)):y("",!0)])):(d(),m("span",bt,"￥"+s(e.order_money),1))]),_:2},1024),a(_,{"min-width":"120"},{default:i(()=>[p("div",xt,[p("span",{class:"text-[12px] text-primary cursor-pointer",onClick:c=>ee(e.member.member_id)},s(e.member.nickname),9,gt),p("span",vt,s(e.taker_name)+" "+s(e.taker_mobile),1),p("span",kt,s(e.taker_full_address),1)])]),_:2},1024),a(_,{"min-width":"100"},{default:i(()=>[p("span",wt,s(e.delivery_type_name),1)]),_:2},1024),a(_,{"min-width":"100"},{default:i(()=>[p("span",Ct,s(e.status_name.name),1)]),_:2},1024),a(_,{align:"right","min-width":"120"},{default:i(()=>[e.status==1?(d(),v(g,{key:0,type:"primary",link:"",onClick:c=>te(e)},{default:i(()=>[h(s(l(t)("orderClose")),1)]),_:2},1032,["onClick"])):y("",!0),e.status==1?(d(),v(g,{key:1,type:"primary",link:"",onClick:c=>re(e)},{default:i(()=>[h(s(l(t)("已付款")),1)]),_:2},1032,["onClick"])):y("",!0),e.status==2?(d(),v(g,{key:2,type:"primary",link:"",onClick:c=>ae(e)},{default:i(()=>[h(s(l(t)("sendOutGoods")),1)]),_:2},1032,["onClick"])):y("",!0),e.status==3?(d(),v(g,{key:3,type:"primary",link:"",onClick:c=>oe(e)},{default:i(()=>[h(s(l(t)("confirmTakeDelivery")),1)]),_:2},1032,["onClick"])):y("",!0)]),_:2},1024)]),_:2},1032,["data"]),e.shop_remark?(d(),m("div",Dt,[p("span",Tt,s(l(t)("notes"))+"：",1),p("span",null,s(e.shop_remark),1)])):y("",!0)]))),128)):(d(),v(pe,{key:1,"image-size":1,description:l(t)("emptyData")},null,8,["description"]))]))])),[[_e,o.loading]]),p("div",Pt,[a(ce,{"current-page":o.page,"onUpdate:current-page":n[9]||(n[9]=e=>o.page=e),"page-size":o.limit,"onUpdate:page-size":n[10]||(n[10]=e=>o.limit=e),layout:"total, sizes, prev, pager, next, jumper",total:o.total,onSizeChange:n[11]||(n[11]=e=>f()),onCurrentChange:f},null,8,["current-page","page-size","total"])])])]),_:1}),a(Re,{ref_key:"deliveryActionDialog",ref:V,onComplete:f},null,512),a(He,{ref_key:"orderNotesDialog",ref:F,onComplete:f},null,512),a(Ie,{ref_key:"selectExportDialog",ref:O,onComplete:W},null,512),a(me,{ref_key:"exportSureDialog",ref:K,show:E.value,type:Y.value,searchParam:o.searchParam,onClose:Q},null,8,["show","type","searchParam"])])}}});const pa=qe(Et,[["__scopeId","data-v-5dc81628"]]);export{pa as default};