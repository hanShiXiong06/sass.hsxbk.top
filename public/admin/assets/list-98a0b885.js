import{d as re,x as ne,f as ie,r as g,n as de,h as m,c as u,e,w as n,a as d,u as r,i as y,q as a,F as z,T as M,s as v,t as i,R as ce,B as b,A as pe,a5 as F,aW as me,a7 as _e,E as ue,ab as fe,aC as he,K as ye,L as ge,bO as be,M as xe,ax as ve,ay as ke,ac as we,ad as Ce,aa as Te,W as De,Y as Ee}from"./index-6f32d09b.js";/* empty css                   *//* empty css                      *//* empty css                 *//* empty css               *//* empty css                  *//* empty css                  *//* empty css                     *//* empty css                  *//* empty css                 *//* empty css                 *//* empty css                    */import"./el-tooltip-4ed993c7.js";/* empty css                        *//* empty css                    *//* empty css                *//* empty css                       *//* empty css                  */import"./el-form-item-4ed993c7.js";/* empty css                *//* empty css                 */import{b as Ve,c as Pe,d as Fe,e as Ne,g as Se,f as Be,h as $e,i as Ae}from"./shop-026f95c3.js";import{_ as Oe}from"./delivery-action.vue_vue_type_style_index_0_lang-5b39e8f2.js";import{_ as ze}from"./order-notes.vue_vue_type_style_index_0_lang-3dc1c630.js";import{_ as Me}from"./_plugin-vue_export-helper-c27b6911.js";/* empty css                  *//* empty css                   *//* empty css                       *//* empty css                 *//* empty css                  */const Ue={class:"main-container"},Re={class:"flex justify-between items-center"},je={class:"flex"},Le={class:"table-body min-h-[150px]"},Ye={key:0},Ie={class:"flex items-center justify-between bg-[#f7f8fa] mt-[10px] border-[#e4e7ed] border-solid border-b-[1px] px-3 h-[35px] text-[12px] text-[#666]"},qe={class:"ml-5"},Ge={key:0,class:"ml-5"},He={class:"flex cursor-pointer"},We={class:"flex items-center min-w-[50px] mr-[10px]"},Je=["src"],Ke={key:1,class:"w-[50px] h-[50px]",src:"",alt:""},Qe={class:"flex flex-col"},Xe={class:"multi-hidden text-[14px]"},Ze={class:"text-[12px] text-[#999]"},et={class:"flex flex-col"},tt={class:"text-[13px]"},at={class:"text-[13px] mt-[5px]"},ot={class:"flex flex-col"},lt={key:0},st={class:"text-[14px]"},rt={class:"flex flex-col"},nt=["onClick"],it={class:"text-[12px] mt-[5px]"},dt={class:"text-[12px] mt-[5px]"},ct={class:"text-[14px]"},pt={class:"text-[14px]"},mt={key:0,class:"text-[14px] min-h-[30px] leading-[30px] px-3 bg-[#fff0e5] text-[#ff7f5b]"},_t={class:"mr-[5px]"},ut={class:"mt-[16px] flex justify-end"},ft=re({__name:"list",setup(ht){const U=ne(),k=ie();U.meta.title;const N=g("2"),R=g([]),j=g([]),S=g([]);(async()=>{R.value=await(await Ve()).data,j.value=await(await Pe()).data,S.value=await(await Fe()).data})();const L=async s=>{try{await F.confirm("本单所有发货包裹将会，是否确定？","确认",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}),await Ne(s),_()}catch{}};(async()=>{const s=await(await Se({is_default_delivery:1})).data.data;localStorage.setItem("mr_address",JSON.stringify(s[0]))})();const T=g(null),D=g(!1),Y=()=>{if(D.value==!1){D.value=!0;for(const s in o.data)for(const l in o.data[s].order_goods)T.value[s].toggleRowSelection(o.data[s].order_goods[l],!0)}else{D.value=!1;for(const s in o.data)for(const l in o.data[s].order_goods)T.value[s].clearSelection()}},o=de({page:1,limit:10,total:0,loading:!0,data:[],searchParam:{search_type:"order_no",search_name:"",pay_type:"",order_from:"",status:"",create_time:[],pay_time:[]}}),B=g(),_=(s=1)=>{o.loading=!0,o.page=s,Be({page:o.page,limit:o.limit,...o.searchParam}).then(l=>{o.loading=!1,o.data=l.data.data.map(x=>(x.order_goods.forEach(f=>{f.rowNum=x.order_goods.length}),x)),o.total=l.data.total}).catch(()=>{o.loading=!1})};_();const I=s=>{o.searchParam.status=s,_()},q=({row:s,column:l,rowIndex:x,columnIndex:f})=>x===0?f===0?[s.rowNum,1]:f>3?[s.rowNum,1]:[1,1]:f===0?[0,0]:f>3?[0,0]:[1,1],G=s=>{k.push("/shop/order/detail?order_id="+s.order_id)},H=s=>{const l=k.resolve({path:"/member/detail",query:{id:s}});window.open(l.href,"_blank")},W=s=>{F.confirm(a("orderCloseTips"),a("warning"),{confirmButtonText:a("confirm"),cancelButtonText:a("cancel"),type:"warning"}).then(()=>{$e(s.order_id).then(()=>{_()})})},E=g(null),J=s=>{E.value.setFormData(s),E.value.showDialog=!0},V=g(null),K=s=>{V.value.setFormData(s),V.value.showDialog=!0},Q=s=>{F.confirm(a("orderFinishTips"),a("warning"),{confirmButtonText:a("confirm"),cancelButtonText:a("cancel"),type:"warning"}).then(()=>{Ae(s.order_id).then(()=>{_()})})},X=s=>{s&&(s.resetFields(),_())};return(s,l)=>{const x=me,f=_e,h=ue,P=fe,$=he,Z=ye,w=ge,ee=be,te=xe,A=ve,ae=ke,c=we,O=Ce,oe=Te,le=De,se=Ee;return m(),u("div",Ue,[e(f,{class:"box-card !border-none",shadow:"never"},{default:n(()=>[d("div",Re,[e(f,{class:"!border-none",shadow:"never",style:{width:"640px"}},{default:n(()=>[e(x,{type:"warning",title:"请在商家地址库先配置默认地址和发货地址",closable:!1,"show-icon":""})]),_:1}),d("div",je,[e(h,{type:"info",onClick:l[0]||(l[0]=t=>r(k).push("/shop/order/index"))},{default:n(()=>[y(" 商城订单 ")]),_:1}),e(h,{type:"primary",onClick:l[1]||(l[1]=t=>r(k).push("/shop_order/shop_order"))},{default:n(()=>[y(" 发单记录 ")]),_:1})])]),e(f,{class:"box-card !border-none my-[10px] table-search-wrap",shadow:"never"},{default:n(()=>[e(te,{inline:!0,model:o.searchParam,ref_key:"searchFormRef",ref:B},{default:n(()=>[e(w,{label:r(a)("orderInfo"),prop:"search_name"},{default:n(()=>[e($,{modelValue:o.searchParam.search_type,"onUpdate:modelValue":l[2]||(l[2]=t=>o.searchParam.search_type=t),clearable:"",class:"input-item"},{default:n(()=>[e(P,{label:r(a)("orderNo"),value:"order_no"},null,8,["label"]),e(P,{label:r(a)("outTradeNo"),value:"out_trade_no"},null,8,["label"])]),_:1},8,["modelValue"]),e(Z,{class:"input-item ml-3",modelValue:o.searchParam.search_name,"onUpdate:modelValue":l[3]||(l[3]=t=>o.searchParam.search_name=t),modelModifiers:{trim:!0}},null,8,["modelValue"])]),_:1},8,["label"]),e(w,{label:r(a)("fromType"),prop:"from_type"},{default:n(()=>[e($,{modelValue:o.searchParam.order_from,"onUpdate:modelValue":l[4]||(l[4]=t=>o.searchParam.order_from=t),clearable:"",class:"input-item"},{default:n(()=>[(m(!0),u(z,null,M(S.value,(t,C)=>(m(),v(P,{key:C,label:t,value:C},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1},8,["label"]),e(w,{label:r(a)("createTime"),prop:"create_time"},{default:n(()=>[e(ee,{modelValue:o.searchParam.create_time,"onUpdate:modelValue":l[5]||(l[5]=t=>o.searchParam.create_time=t),type:"datetimerange","value-format":"YYYY-MM-DD HH:mm:ss","start-placeholder":r(a)("startDate"),"end-placeholder":r(a)("endDate")},null,8,["modelValue","start-placeholder","end-placeholder"])]),_:1},8,["label"]),e(w,null,{default:n(()=>[e(h,{type:"primary",onClick:l[6]||(l[6]=t=>_())},{default:n(()=>[y(i(r(a)("search")),1)]),_:1}),e(h,{onClick:l[7]||(l[7]=t=>X(B.value))},{default:n(()=>[y(i(r(a)("reset")),1)]),_:1})]),_:1})]),_:1},8,["model"])]),_:1}),e(ae,{modelValue:N.value,"onUpdate:modelValue":l[8]||(l[8]=t=>N.value=t),class:"demo-tabs",onTabChange:I},{default:n(()=>[e(A,{label:r(a)("toBeShipped"),name:"2"},null,8,["label"]),e(A,{label:r(a)("shipped"),name:"3"},null,8,["label"])]),_:1},8,["modelValue"]),d("div",null,[e(O,{data:o.data,size:"large",class:"table-top",onSelectAll:Y},{default:n(()=>[e(c,{type:"selection",width:"40"}),e(c,{label:r(a)("orderGoods"),"min-width":"200"},null,8,["label"]),e(c,{label:r(a)("goodsPriceNumber"),"min-width":"120"},null,8,["label"]),e(c,{label:r(a)("rightsProtection"),"min-width":"120"},null,8,["label"]),e(c,{label:r(a)("orderMoney"),"min-width":"120"},null,8,["label"]),e(c,{label:r(a)("buyInfo"),"min-width":"120"},null,8,["label"]),e(c,{label:r(a)("deliveryType"),"min-width":"100"},null,8,["label"]),e(c,{label:r(a)("orderStatus"),"min-width":"100"},null,8,["label"]),e(c,{label:r(a)("operation"),fixed:"right",align:"right","min-width":"120"},null,8,["label"])]),_:1},8,["data"]),ce((m(),u("div",Le,[o.loading?b("",!0):(m(),u("div",Ye,[o.data.length?(m(!0),u(z,{key:0},M(o.data,(t,C)=>(m(),u("div",{key:C},[d("div",Ie,[d("div",null,[d("span",null,i(r(a)("orderNo"))+"："+i(t.order_no),1),d("span",qe,i(r(a)("createTime"))+"："+i(t.create_time),1),t.pay?(m(),u("span",Ge,i(r(a)("payType"))+"："+i(t.pay.type_name),1)):b("",!0)]),d("div",null,[e(h,{type:"primary",link:"",onClick:p=>G(t)},{default:n(()=>[y(i(r(a)("info")),1)]),_:2},1032,["onClick"]),e(h,{type:"primary",link:"",onClick:p=>K(t)},{default:n(()=>[y(i(r(a)("notes")),1)]),_:2},1032,["onClick"])])]),e(O,{data:t.order_goods,size:"large","show-header":!1,"span-method":q,ref_for:!0,ref_key:"multipleTable",ref:T},{default:n(()=>[e(c,{type:"selection",width:"40"}),e(c,{align:"left","min-width":"200"},{default:n(({row:p})=>[d("div",He,[d("div",We,[p.goods_image?(m(),u("img",{key:0,class:"w-[50px] h-[50px]",src:r(pe)(p.goods_image),alt:""},null,8,Je)):(m(),u("img",Ke))]),d("div",Qe,[d("p",Xe,i(p.goods_name),1),d("span",Ze,i(p.sku_name),1)])])]),_:1}),e(c,{"min-width":"120"},{default:n(({row:p})=>[d("div",et,[d("span",tt,"￥"+i(p.goods_money),1),d("span",at,i(p.num)+i(r(a)("piece")),1)])]),_:1}),e(c,{"min-width":"120"},{default:n(({row:p})=>[d("div",ot,[p.status!=1?(m(),u("span",lt,i(p.status_name),1)):b("",!0)])]),_:1}),e(c,{"min-width":"120","class-name":"border-0 border-l-[1px] border-solid border-[var(--el-table-border-color)]"},{default:n(()=>[d("span",st,"￥"+i(t.order_money),1)]),_:2},1024),e(c,{"min-width":"120"},{default:n(()=>[d("div",rt,[d("span",{class:"text-[12px] text-primary cursor-pointer",onClick:p=>H(t.member.member_id)},i(t.member.nickname),9,nt),d("span",it,i(t.taker_name)+" "+i(t.taker_mobile),1),d("span",dt,i(t.taker_full_address),1)])]),_:2},1024),e(c,{"min-width":"100"},{default:n(()=>[d("span",ct,i(t.delivery_type_name),1)]),_:2},1024),e(c,{"min-width":"100"},{default:n(()=>[d("span",pt,i(t.status_name.name),1)]),_:2},1024),e(c,{align:"right","min-width":"120"},{default:n(()=>[t.status==1?(m(),v(h,{key:0,type:"primary",link:"",onClick:p=>W(t)},{default:n(()=>[y(i(r(a)("orderClose")),1)]),_:2},1032,["onClick"])):b("",!0),t.status==2?(m(),v(h,{key:1,type:"primary",link:"",onClick:p=>J(t)},{default:n(()=>[y(i(r(a)("sendOutGoods")),1)]),_:2},1032,["onClick"])):b("",!0),t.status==3?(m(),v(h,{key:2,type:"primary",link:"",onClick:p=>Q(t)},{default:n(()=>[y(i(r(a)("confirmTakeDelivery")),1)]),_:2},1032,["onClick"])):b("",!0),t.status==3?(m(),v(h,{key:3,type:"info",size:"small",round:"",plain:"",onClick:p=>L(t)},{default:n(()=>[y("取消发货")]),_:2},1032,["onClick"])):b("",!0)]),_:2},1024)]),_:2},1032,["data"]),t.shop_remark?(m(),u("div",mt,[d("span",_t,i(r(a)("notes"))+"：",1),d("span",null,i(t.shop_remark),1)])):b("",!0)]))),128)):(m(),v(oe,{key:1,"image-size":1,description:r(a)("emptyData")},null,8,["description"]))]))])),[[se,o.loading]]),d("div",ut,[e(le,{"current-page":o.page,"onUpdate:current-page":l[9]||(l[9]=t=>o.page=t),"page-size":o.limit,"onUpdate:page-size":l[10]||(l[10]=t=>o.limit=t),layout:"total, sizes, prev, pager, next, jumper",total:o.total,onSizeChange:l[11]||(l[11]=t=>_()),onCurrentChange:_},null,8,["current-page","page-size","total"])])])]),_:1}),e(Oe,{ref_key:"deliveryActionDialog",ref:E,onComplete:_},null,512),e(ze,{ref_key:"orderNotesDialog",ref:V,onComplete:_},null,512)])}}});const Jt=Me(ft,[["__scopeId","data-v-315cc7ed"]]);export{Jt as default};
