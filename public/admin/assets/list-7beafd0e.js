import{d as Te,x as Ve,f as Fe,r as f,n as W,h as d,c as m,e as t,w as i,a as u,t as n,u as r,q as a,F as $,T as O,s as w,i as h,B as y,R as $e,A as Ae,a3 as J,a5 as Q,U as X,ac as Ne,aD as Me,K as Be,L as Ue,bO as ze,E as Oe,M as Ye,a7 as je,ay as Re,az as Le,ad as qe,ae as He,ab as Ie,W as Ge,Y as Ke}from"./index-99f00cf3.js";/* empty css                   */import{_ as We}from"./index.vue_vue_type_script_setup_true_lang-56b03674.js";/* empty css                      *//* empty css                 *//* empty css               *//* empty css                  *//* empty css                  *//* empty css                     *//* empty css                  *//* empty css                 *//* empty css                 *//* empty css                    */import"./el-tooltip-4ed993c7.js";/* empty css                        *//* empty css                    *//* empty css                *//* empty css                *//* empty css                  *//* empty css                       */import"./el-form-item-4ed993c7.js";import{g as Je,a as Qe,b as Xe,c as Ze,w as et,x as tt}from"./order-b8bfbaf6.js";import{p as at}from"./printer-3e218f66.js";import{_ as lt}from"./delivery-action.vue_vue_type_style_index_0_lang-87e9bcfe.js";import{_ as ot}from"./order-notes.vue_vue_type_style_index_0_lang-0914ffec.js";import{_ as rt}from"./order-export-select.vue_vue_type_script_setup_true_lang-cd5c0f9f.js";import{_ as st}from"./order-edit-address.vue_vue_type_style_index_0_lang-a29211d3.js";import{_ as nt}from"./adjust-money.vue_vue_type_style_index_0_lang-8651fd0e.js";import{_ as it}from"./electronic-sheet-print.vue_vue_type_style_index_0_lang-8f93a124.js";import{_ as dt}from"./_plugin-vue_export-helper-c27b6911.js";/* empty css                  *//* empty css                   *//* empty css                       *//* empty css                 *//* empty css                 */import"./delivery-4012edce.js";import"./weapp-3dcfdbcd.js";import"./qqmap-011f3cfb.js";import"./electronic_sheet-37c41c1b.js";import"./lodop-ed3e665c.js";const pt={class:"main-container"},ct={class:"flex justify-between items-center"},ut={class:"text-page-title"},mt={key:0,class:"mb-[10px] flex items-center"},_t={class:"table-body min-h-[150px]"},ft={key:0},ht={class:"flex items-center justify-between bg-[#f7f8fa] mt-[10px] border-[#e4e7ed] border-solid border-b-[1px] px-3 h-[35px] text-[12px] text-[#666]"},yt={class:"ml-5"},gt={key:0,class:"ml-5"},vt={class:"flex cursor-pointer"},bt={class:"flex items-center min-w-[50px] mr-[10px]"},kt=["src"],xt={key:1,class:"w-[50px] h-[50px]",src:"",alt:""},wt={class:"flex flex-col"},Ct={class:"multi-hidden text-[14px]"},Dt={class:"text-[12px] text-[#999] truncate"},St={key:0,class:"text-[12px] text-[#999]"},Pt={class:"flex flex-col"},Et={key:0},Tt={key:0},Vt={key:1,class:"text-[13px]"},Ft={class:"text-[13px] mt-[5px]"},$t={class:"flex flex-col"},At={key:0},Nt={key:0,class:"text-[14px]"},Mt={key:0},Bt={key:1,class:"text-[14px]"},Ut={class:"flex flex-col"},zt=["onClick"],Ot={class:"text-[12px] mt-[5px]"},Yt={class:"text-[12px] mt-[5px]"},jt={class:"text-[14px]"},Rt={class:"text-[14px]"},Lt={key:0,class:"text-[14px] min-h-[30px] leading-[30px] px-3 bg-[#fff0e5] text-[#ff7f5b]"},qt={class:"mr-[5px]"},Ht={class:"mt-[16px] flex justify-end"},It=Te({__name:"list",setup(Gt){const A=Ve(),Y=Fe(),Z=A.meta.title,T=f(A.query.status||""),ee=f([]),j=f([]),R=f([]);(async()=>{ee.value=await(await Je()).data,j.value=await(await Qe()).data,R.value=await(await Xe()).data})();const x=W({}),V=f(null),P=f(!1),te=()=>{if(P.value){P.value=!1;for(const l in s.data)V.value[l].clearSelection(),delete x["order_"+s.data[l].order_id]}else{P.value=!0;for(const l in s.data){let o=!1;for(const p in s.data[l].order_goods)s.data[l].order_goods[p].status==1&&(V.value[l].toggleRowSelection(s.data[l].order_goods[p],!0),o=!0);o&&(x["order_"+s.data[l].order_id]=J(s.data[l]))}}},ae=(l,o)=>{let p=!1,g=null;for(let k=0;k<s.data.length;k++)if(s.data[k].order_id==o.order_id){g=s.data[k];break}for(let k=0;k<l.length;k++)if(l[k].order_id==o.order_id){p=!0;break}p?x["order_"+o.order_id]=g:delete x["order_"+o.order_id]},s=W({page:1,limit:10,total:0,loading:!0,data:[],searchParam:{search_type:"order_no",search_name:"",keyword:"",pay_type:"",order_from:"",status:A.query.status||"",create_time:[],pay_time:[]}}),L=f(),b=(l=1)=>{s.loading=!0,s.page=l,Ze({page:s.page,limit:s.limit,...s.searchParam}).then(o=>{s.loading=!1,s.data=o.data.data.map(p=>(p.isSupportElectronicSheet=!1,p.isSupportPrintTicket=!1,p.delivery_type=="express"&&p.status==3&&(p.isSupportElectronicSheet=!0),p.delivery_type!="virtual"&&(p.status==2||p.status==3||p.status==5)&&(p.isSupportPrintTicket=!0),p.order_goods.forEach(g=>{g.rowNum=p.order_goods.length}),p)),s.total=o.data.total}).catch(()=>{s.loading=!1})};b();const le=l=>{s.searchParam.status=l,P.value=!1;for(let o in x)delete x[o];b()},oe=({row:l,column:o,rowIndex:p,columnIndex:g})=>p===0?g===0?[l.rowNum,1]:g>3?[l.rowNum,1]:[1,1]:g===0?[0,0]:g>3?[0,0]:[1,1],re=f(null),q=f(""),N=f(!1),se=l=>{N.value=l},ne=l=>{q.value=l,N.value=!0},H=f(null),ie=()=>{H.value.showDialog=!0},de=l=>{Y.push("/phone_shop/order/detail?order_id="+l.order_id)},pe=l=>{const o=Y.resolve({path:"/member/detail",query:{id:l}});window.open(o.href,"_blank")},ce=l=>{Q.confirm(a("orderCloseTips"),a("warning"),{confirmButtonText:a("confirm"),cancelButtonText:a("cancel"),type:"warning"}).then(()=>{et(l.order_id).then(()=>{b()})})},M=f(null),ue=l=>{M.value.setFormData(l),M.value.showDialog=!0},B=f(null),me=l=>{B.value.setFormData(l),B.value.showDialog=!0},U=f(null),_e=l=>{U.value.setFormData(l),U.value.showDialog=!0},fe=l=>{Q.confirm(a("orderFinishTips"),a("warning"),{confirmButtonText:a("confirm"),cancelButtonText:a("cancel"),type:"warning"}).then(()=>{tt(l.order_id).then(()=>{b()})})},he=l=>{l&&(l.resetFields(),b())},z=f(null),ye=async l=>{z.value.showDialog=!0,z.value.setFormData(l)},E=f(null),ge=l=>{let o=J(l);o.print_type="single",E.value.setFormData(o),E.value.showDialog=!0},ve=(l,o)=>!0,be=()=>{let l=0,o=[];for(let p in x)x[p].isSupportElectronicSheet?o.push(x[p].order_id):l++;if(l&&o.length==0){X({type:"warning",message:`${a("notSupportPrintElectronicSheetTips")}`});return}if(o.length==0){X({type:"warning",message:`${a("batchEmptySelectedOrderTips")}`});return}E.value.setFormData({order_id:o.toString(),print_type:"multiple"}),E.value.showDialog=!0},ke=()=>{P.value=!1;for(const l in s.data)V.value[l].clearSelection(),delete x["order_"+s.data[l].order_id]},F=f(!1),xe=l=>{F.value||(F.value=!0,at({type:"shopGoodsOrder",trigger:"manual",business:{order_id:l.order_id}}).then(o=>{F.value=!1}).catch(()=>{F.value=!1}))};return(l,o)=>{const p=Ne,g=Me,k=Be,C=Ue,I=ze,v=Oe,we=Ye,G=je,D=Re,Ce=Le,_=qe,K=He,De=Ie,Se=Ge,Pe=We,Ee=Ke;return d(),m("div",pt,[t(G,{class:"box-card !border-none",shadow:"never"},{default:i(()=>[u("div",ct,[u("span",ut,n(r(Z)),1)]),t(G,{class:"box-card !border-none my-[10px] table-search-wrap",shadow:"never"},{default:i(()=>[t(we,{inline:!0,model:s.searchParam,ref_key:"searchFormRef",ref:L},{default:i(()=>[t(C,{label:r(a)("orderInfo"),prop:"search_name"},{default:i(()=>[t(g,{modelValue:s.searchParam.search_type,"onUpdate:modelValue":o[0]||(o[0]=e=>s.searchParam.search_type=e),clearable:"",class:"input-item"},{default:i(()=>[t(p,{label:r(a)("orderNo"),value:"order_no"},null,8,["label"]),t(p,{label:r(a)("outTradeNo"),value:"out_trade_no"},null,8,["label"])]),_:1},8,["modelValue"]),t(k,{class:"input-item ml-3",modelValue:s.searchParam.search_name,"onUpdate:modelValue":o[1]||(o[1]=e=>s.searchParam.search_name=e),modelModifiers:{trim:!0}},null,8,["modelValue"])]),_:1},8,["label"]),t(C,{label:r(a)("memberInfo"),prop:"keyword"},{default:i(()=>[t(k,{class:"w-[200px]",modelValue:s.searchParam.keyword,"onUpdate:modelValue":o[2]||(o[2]=e=>s.searchParam.keyword=e),modelModifiers:{trim:!0},placeholder:r(a)("memberInfoPlaceholder")},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),t(C,{label:r(a)("payType"),prop:"pay_type"},{default:i(()=>[t(g,{modelValue:s.searchParam.pay_type,"onUpdate:modelValue":o[3]||(o[3]=e=>s.searchParam.pay_type=e),clearable:"",class:"input-item"},{default:i(()=>[(d(!0),m($,null,O(j.value,(e,S)=>(d(),w(p,{key:S,label:e.name,value:e.key},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1},8,["label"]),t(C,{label:r(a)("fromType"),prop:"from_type"},{default:i(()=>[t(g,{modelValue:s.searchParam.order_from,"onUpdate:modelValue":o[4]||(o[4]=e=>s.searchParam.order_from=e),clearable:"",class:"input-item"},{default:i(()=>[(d(!0),m($,null,O(R.value,(e,S)=>(d(),w(p,{key:S,label:e,value:S},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1},8,["label"]),t(C,{label:r(a)("createTime"),prop:"create_time"},{default:i(()=>[t(I,{modelValue:s.searchParam.create_time,"onUpdate:modelValue":o[5]||(o[5]=e=>s.searchParam.create_time=e),type:"datetimerange","value-format":"YYYY-MM-DD HH:mm:ss","start-placeholder":r(a)("startDate"),"end-placeholder":r(a)("endDate")},null,8,["modelValue","start-placeholder","end-placeholder"])]),_:1},8,["label"]),t(C,{label:r(a)("payTime"),prop:"pay_time"},{default:i(()=>[t(I,{modelValue:s.searchParam.pay_time,"onUpdate:modelValue":o[6]||(o[6]=e=>s.searchParam.pay_time=e),type:"datetimerange","value-format":"YYYY-MM-DD HH:mm:ss","start-placeholder":r(a)("startDate"),"end-placeholder":r(a)("endDate")},null,8,["modelValue","start-placeholder","end-placeholder"])]),_:1},8,["label"]),t(C,null,{default:i(()=>[t(v,{type:"primary",onClick:o[7]||(o[7]=e=>b())},{default:i(()=>[h(n(r(a)("search")),1)]),_:1}),t(v,{onClick:o[8]||(o[8]=e=>he(L.value))},{default:i(()=>[h(n(r(a)("reset")),1)]),_:1}),t(v,{type:"primary",onClick:ie},{default:i(()=>[h(n(r(a)("export")),1)]),_:1})]),_:1})]),_:1},8,["model"])]),_:1}),t(Ce,{modelValue:T.value,"onUpdate:modelValue":o[9]||(o[9]=e=>T.value=e),class:"demo-tabs",onTabChange:le},{default:i(()=>[t(D,{label:r(a)("all"),name:""},null,8,["label"]),t(D,{label:r(a)("toBePaid"),name:"1"},null,8,["label"]),t(D,{label:r(a)("toBeShipped"),name:"2"},null,8,["label"]),t(D,{label:r(a)("shipped"),name:"3"},null,8,["label"]),t(D,{label:r(a)("completed"),name:"5"},null,8,["label"]),t(D,{label:r(a)("closed"),name:"-1"},null,8,["label"])]),_:1},8,["modelValue"]),u("div",null,[T.value==3?(d(),m("div",mt,[T.value==3?(d(),w(v,{key:0,onClick:be,size:"small"},{default:i(()=>[h(n(r(a)("batchPrintElectronicSheet")),1)]),_:1})):y("",!0)])):y("",!0),t(K,{data:s.data,size:"large",class:"table-top",onSelectAll:te},{default:i(()=>[t(_,{type:"selection",width:"40"}),t(_,{label:r(a)("orderGoods"),"min-width":"200"},null,8,["label"]),t(_,{label:r(a)("goodsPriceNumber"),"min-width":"120"},null,8,["label"]),t(_,{label:r(a)("rightsProtection"),"min-width":"120"},null,8,["label"]),t(_,{label:r(a)("orderMoney"),"min-width":"120"},null,8,["label"]),t(_,{label:r(a)("buyInfo"),"min-width":"120"},null,8,["label"]),t(_,{label:r(a)("deliveryType"),"min-width":"100"},null,8,["label"]),t(_,{label:r(a)("orderStatus"),"min-width":"100"},null,8,["label"]),t(_,{label:r(a)("operation"),fixed:"right",align:"right","min-width":"120"},null,8,["label"])]),_:1},8,["data"]),$e((d(),m("div",_t,[s.loading?y("",!0):(d(),m("div",ft,[s.data.length?(d(!0),m($,{key:0},O(s.data,(e,S)=>(d(),m("div",{key:S},[u("div",ht,[u("div",null,[u("span",null,n(r(a)("orderNo"))+"："+n(e.order_no),1),u("span",yt,n(r(a)("createTime"))+"："+n(e.create_time),1),e.pay?(d(),m("span",gt,n(r(a)("payType"))+"："+n(e.pay.type_name),1)):y("",!0)]),u("div",null,[e.isSupportPrintTicket?(d(),w(v,{key:0,type:"primary",link:"",onClick:c=>xe(e)},{default:i(()=>[h(n(r(a)("printTicket")),1)]),_:2},1032,["onClick"])):y("",!0),e.isSupportElectronicSheet?(d(),w(v,{key:1,type:"primary",link:"",onClick:c=>ge(e)},{default:i(()=>[h(n(r(a)("electronicSheetPrintTitle")),1)]),_:2},1032,["onClick"])):y("",!0),t(v,{type:"primary",link:"",onClick:c=>de(e)},{default:i(()=>[h(n(r(a)("info")),1)]),_:2},1032,["onClick"]),t(v,{type:"primary",link:"",onClick:c=>_e(e)},{default:i(()=>[h(n(r(a)("notes")),1)]),_:2},1032,["onClick"])])]),t(K,{data:e.order_goods,size:"large","show-header":!1,"span-method":oe,ref_for:!0,ref_key:"multipleTable",ref:V,onSelect:ae},{default:i(()=>[t(_,{type:"selection",width:"40",selectable:ve}),t(_,{align:"left","min-width":"200"},{default:i(({row:c})=>[u("div",vt,[u("div",bt,[c.goods_image?(d(),m("img",{key:0,class:"w-[50px] h-[50px]",src:r(Ae)(c.goods_image),alt:""},null,8,kt)):(d(),m("img",xt))]),u("div",wt,[u("p",Ct,n(c.goods_name),1),u("span",Dt,n(c.sku_name),1),c.sku_no?(d(),m("span",St,n(r(a)("商品编号"))+": "+n(c.sku_no),1)):y("",!0)])])]),_:1}),t(_,{"min-width":"120"},{default:i(({row:c})=>[u("div",Pt,[e.activity_type=="exchange"?(d(),m("span",Et,[h(n(c.extend.point)+n(r(a)("point"))+" ",1),parseFloat(c.price)?(d(),m("span",Tt,"+￥"+n(c.price),1)):y("",!0)])):(d(),m("span",Vt,"￥"+n(c.price),1)),u("span",Ft,n(c.num)+n(r(a)("piece")),1)])]),_:2},1024),t(_,{"min-width":"120"},{default:i(({row:c})=>[u("div",$t,[c.status!=1?(d(),m("span",At,n(c.status_name),1)):y("",!0)])]),_:1}),t(_,{"min-width":"120","class-name":"border-0 border-l-[1px] border-solid border-[var(--el-table-border-color)]"},{default:i(()=>[e.activity_type=="exchange"?(d(),m("span",Nt,[h(n(e.point)+n(r(a)("point"))+" ",1),parseFloat(e.order_money)?(d(),m("span",Mt,"+￥"+n(e.order_money),1)):y("",!0)])):(d(),m("span",Bt,"￥"+n(e.order_money),1))]),_:2},1024),t(_,{"min-width":"120"},{default:i(()=>[u("div",Ut,[u("span",{class:"text-[12px] text-primary cursor-pointer",onClick:c=>pe(e.member.member_id)},n(e.member.nickname),9,zt),u("span",Ot,n(e.taker_name)+" "+n(e.taker_mobile),1),u("span",Yt,n(e.taker_full_address),1)])]),_:2},1024),t(_,{"min-width":"100"},{default:i(()=>[u("span",jt,n(e.delivery_type_name),1)]),_:2},1024),t(_,{"min-width":"100"},{default:i(()=>[u("span",Rt,n(e.status_name.name),1)]),_:2},1024),t(_,{align:"right","min-width":"120"},{default:i(()=>[e.status==1?(d(),m($,{key:0},[t(v,{type:"primary",link:"",onClick:c=>ce(e)},{default:i(()=>[h(n(r(a)("orderClose")),1)]),_:2},1032,["onClick"]),t(v,{type:"primary",link:"",onClick:c=>ue(e)},{default:i(()=>[h(n(r(a)("editPrice")),1)]),_:2},1032,["onClick"]),e.delivery_type!="virtual"?(d(),w(v,{key:0,type:"primary",link:"",onClick:c=>ye(e)},{default:i(()=>[h(n(r(a)("editAddress")),1)]),_:2},1032,["onClick"])):y("",!0)],64)):y("",!0),e.status==2?(d(),w(v,{key:1,type:"primary",link:"",onClick:c=>me(e)},{default:i(()=>[h(n(r(a)("sendOutGoods")),1)]),_:2},1032,["onClick"])):y("",!0),e.status==3?(d(),w(v,{key:2,type:"primary",link:"",onClick:c=>fe(e)},{default:i(()=>[h(n(r(a)("confirmTakeDelivery")),1)]),_:2},1032,["onClick"])):y("",!0)]),_:2},1024)]),_:2},1032,["data"]),e.shop_remark?(d(),m("div",Lt,[u("span",qt,n(r(a)("notes"))+"：",1),u("span",null,n(e.shop_remark),1)])):y("",!0)]))),128)):(d(),w(De,{key:1,"image-size":1,description:r(a)("emptyData")},null,8,["description"]))]))])),[[Ee,s.loading]]),u("div",Ht,[t(Se,{"current-page":s.page,"onUpdate:current-page":o[10]||(o[10]=e=>s.page=e),"page-size":s.limit,"onUpdate:page-size":o[11]||(o[11]=e=>s.limit=e),layout:"total, sizes, prev, pager, next, jumper",total:s.total,onSizeChange:o[12]||(o[12]=e=>b()),onCurrentChange:b},null,8,["current-page","page-size","total"])])])]),_:1}),t(nt,{ref_key:"orderAdjustMoneyActionDialog",ref:M,onComplete:b},null,512),t(lt,{ref_key:"deliveryActionDialog",ref:B,onComplete:b},null,512),t(ot,{ref_key:"orderNotesDialog",ref:U,onComplete:b},null,512),t(rt,{ref_key:"selectExportDialog",ref:H,onComplete:ne},null,512),t(Pe,{ref_key:"exportSureDialog",ref:re,show:N.value,type:q.value,searchParam:s.searchParam,onClose:se},null,8,["show","type","searchParam"]),t(st,{ref_key:"orderEditAddressDialog",ref:z,onComplete:b},null,512),t(it,{ref_key:"electronicSheetPrintDialog",ref:E,onComplete:ke},null,512)])}}});const Ma=dt(It,[["__scopeId","data-v-eed521cd"]]);export{Ma as default};
