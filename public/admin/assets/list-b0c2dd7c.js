import{d as Ne,f as Ge,x as Le,r as f,n as E,a2 as Be,h as p,c as x,e as n,w as r,a as d,t as c,u as l,i as _,q as t,F as z,T as F,s as b,R as T,ca as G,b6 as L,B as w,A as Ue,a4 as B,U as y,ao as Ie,bu as Re,E as De,K as Oe,L as ze,bN as Fe,aa as Ae,aB as Me,M as Ke,a6 as je,aw as qe,ax as We,au as Ye,ab as He,J as Je,a1 as Xe,ac as Ze,W as Qe,Y as ea,p as aa,g as ta}from"./index-6ea097a6.js";/* empty css                   *//* empty css                      *//* empty css                 *//* empty css               *//* empty css                  *//* empty css                  *//* empty css                     *//* empty css                  *//* empty css                 *//* empty css                    */import"./el-tooltip-4ed993c7.js";/* empty css                 *//* empty css                        *//* empty css                        *//* empty css                    *//* empty css                *//* empty css                     *//* empty css                          *//* empty css                 *//* empty css                  */import{_ as ne}from"./goods_default-995568ac.js";import oa from"./goods-member-price-popup-519ebd30.js";import sa from"./goods-stock-edit-popup-6c6a1afa.js";import la from"./goods-price-edit-popup-456d2ec7.js";import{_ as na}from"./goods-spread-popup.vue_vue_type_script_setup_true_lang-70328a4a.js";import{g as ra,b as ia,U as da,V as ca,W as A,X as le,Y as pa,Z as ua,_ as ma}from"./goods-ff2f32a8.js";import{A as _a}from"./member-5d33ffd3.js";import{_ as ga}from"./_plugin-vue_export-helper-c27b6911.js";/* empty css                  *//* empty css                   *//* empty css                       */import"./browser-a1ac24ac.js";const M=V=>(aa("data-v-f56498ab"),V=V(),ta(),V),ha={class:"main-container"},fa={class:"flex justify-between items-center"},ba={class:"text-page-title"},va={class:"region-input"},ya=["placeholder"],Pa=M(()=>d("span",{class:"separator"},"-",-1)),ka=["placeholder"],xa={class:"region-input"},Ca=["placeholder"],Ea=M(()=>d("span",{class:"separator"},"-",-1)),Ta=["placeholder"],wa={class:"mt-[10px]"},Va={class:"mb-[10px] flex items-center"},Sa=["onClick"],$a={class:"min-w-[70px] h-[70px] flex items-center justify-center"},Na=M(()=>d("div",{class:"image-slot"},[d("img",{class:"w-[70px] h-[70px]",src:ne})],-1)),Ga={key:1,class:"w-[70px] h-[70px]",src:ne,fit:"contain"},La={class:"ml-2"},Ba=["title"],Ua={class:"text-primary text-[12px]"},Ia=["onClick"],Ra=["onClick"],Da={key:0},Oa={key:1},za={class:"mt-[16px] flex justify-end"},Fa=Ne({__name:"list",setup(V){const U=Ge(),re=Le().meta.title,g=f(!1),o=E({page:1,limit:10,total:0,loading:!0,data:[],searchParam:{goods_name:"",goods_category:[],goods_type:"",brand_id:"",label_ids:"",start_sale_num:"",end_sale_num:"",start_price:"",end_price:"",status:"1",order:"",sort:""}}),K=f(),C={number:/^\d{0,10}$/,digit:/^\d{0,10}(.?\d{0,2})$/},I=E([]),j=E([]),q=E([]),W=E([]);(()=>{ra().then(s=>{const a=s.data;if(a){const i=[];a.forEach(k=>{const h=[];k.child_list&&k.child_list.forEach(N=>{h.push({value:N.category_id,label:N.category_name})}),i.push({value:k.category_id,label:k.category_name,children:h})}),I.splice(0,I.length,...i)}}),ia().then(s=>{const a=s.data;if(a)for(const i in a)j.push(a[i])}),da({}).then(s=>{const a=s.data;a&&q.push(...a)}),ca({}).then(s=>{const a=s.data;a&&W.push(...a)})})();const ie=(s,a)=>{o.searchParam.status=s.props.name,u()},S=f(),$=f(!1),de=s=>{$.value=!1,Y.value.toggleAllSelection()},Y=f(),P=f([]),ce=s=>{P.value=s,S.value=!1,P.value.length>0&&P.value.length<o.data.length?$.value=!0:$.value=!1,P.value.length==o.data.length&&(S.value=!0)},pe=s=>{const a=U.resolve({path:"/preview/wap",query:{page:`/addon/shop/pages/goods/detail?goods_id=${s.goods_id}`}});window.open(a.href)},ue=s=>{let a="";s.order=="ascending"?a="asc":s.order=="descending"&&(a="desc"),a&&(o.searchParam.order=s.prop,o.searchParam.sort=a),u()},H=(s,a)=>{a?A({goods_ids:s.goods_id,status:a}).then(i=>{u()}):B.confirm(t("statusChangeTips"),t("warning"),{confirmButtonText:t("confirm"),cancelButtonText:t("cancel"),type:"warning"}).then(()=>{A({goods_ids:s.goods_id,status:a}).then(i=>{u()})})},J=s=>{if(P.value.length==0){y({type:"warning",message:`${t("batchEmptySelectedGoodsTips")}`});return}const a=[];P.value.forEach(i=>{a.push(i.goods_id)}),A({goods_ids:a,status:s}).then(i=>{u()})},me=()=>{if(P.value.length==0){y({type:"warning",message:`${t("batchEmptySelectedGoodsTips")}`});return}B.confirm(t("batchGoodsDeleteTips"),t("warning"),{confirmButtonText:t("confirm"),cancelButtonText:t("cancel"),type:"warning"}).then(()=>{if(g.value)return;g.value=!0;const s=[];P.value.forEach(a=>{s.push(a.goods_id)}),le({goods_ids:s}).then(()=>{u(),g.value=!1}).catch(()=>{g.value=!1})})},_e=Ie((s,a)=>{if(isNaN(s)||!C.number.test(s)){y({type:"warning",message:`${t("sortTips")}`});return}pa({goods_id:a.goods_id,sort:s}).then(i=>{})}),u=(s=1)=>{if(o.searchParam.start_sale_num&&!C.digit.test(o.searchParam.start_sale_num)){y({type:"warning",message:`${t("startSaleNumTips")}`});return}if(o.searchParam.end_sale_num&&!C.digit.test(o.searchParam.end_sale_num)){y({type:"warning",message:`${t("endSaleNumTips")}`});return}if(Number(o.searchParam.start_sale_num)>Number(o.searchParam.end_sale_num)){y({type:"warning",message:`${t("shopSaleNumTips")}`});return}if(o.searchParam.start_price&&!C.digit.test(o.searchParam.start_price)){y({type:"warning",message:`${t("startPriceTips")}`});return}if(o.searchParam.end_price&&!C.digit.test(o.searchParam.end_price)){y({type:"warning",message:`${t("endPriceTips")}`});return}if(Number(o.searchParam.start_price)>Number(o.searchParam.end_price)){y({type:"warning",message:`${t("shopPriceTips")}`});return}o.loading=!0,o.page=s;const a=Re(o.searchParam);ua({page:o.page,limit:o.limit,...a}).then(i=>{o.loading=!1,o.data=i.data.data,o.total=i.data.total}).catch(()=>{o.loading=!1})};u();const ge=()=>{U.push("/shop/goods/real_edit")},he=s=>{U.push(s.goods_edit_path+"?goods_id="+s.goods_id)},X=f(null),fe=s=>{X.value.show(s)},Z=f(null),be=s=>{Z.value.show(s)},Q=f(null),ve=s=>{Q.value.show(s)},ee=f([]);(()=>{_a().then(s=>{ee.value=s.data?s.data:[]})})();const ae=f(null),ye=s=>{ae.value.show(s,ee.value)},Pe=s=>{B.confirm(t("goodsCopyTips"),t("warning"),{confirmButtonText:t("confirm"),cancelButtonText:t("cancel"),type:"warning"}).then(()=>{g.value||(g.value=!0,ma({goods_id:s.goods_id}).then(a=>{a.code==1&&u(),g.value=!1}).catch(a=>{g.value=!1}))})},ke=s=>{B.confirm(t("goodsDeleteTips"),t("warning"),{confirmButtonText:t("confirm"),cancelButtonText:t("cancel"),type:"warning"}).then(()=>{g.value||(g.value=!0,le({goods_ids:s}).then(()=>{u(),g.value=!1}).catch(()=>{g.value=!1}))})},xe=s=>{s&&(s.resetFields(),o.searchParam.start_price="",o.searchParam.end_price="",o.searchParam.start_sale_num="",o.searchParam.end_sale_num="",u())};return(s,a)=>{const i=De,k=Oe,h=ze,N=Fe,R=Ae,D=Me,Ce=Ke,te=je,O=qe,Ee=We,Te=Ye,v=He,we=Je,oe=Be("EditPen"),se=Xe,Ve=Ze,Se=Qe,$e=ea;return p(),x("div",ha,[n(te,{class:"box-card !border-none",shadow:"never"},{default:r(()=>[d("div",fa,[d("span",ba,c(l(re)),1),n(i,{type:"primary",onClick:ge},{default:r(()=>[_(c(l(t)("addGoods")),1)]),_:1})]),n(te,{class:"box-card !border-none my-[10px] table-search-wrap",shadow:"never"},{default:r(()=>[n(Ce,{inline:!0,model:o.searchParam,ref_key:"searchFormRef",ref:K},{default:r(()=>[n(h,{label:l(t)("goodsName"),prop:"goods_name"},{default:r(()=>[n(k,{modelValue:o.searchParam.goods_name,"onUpdate:modelValue":a[0]||(a[0]=e=>o.searchParam.goods_name=e),modelModifiers:{trim:!0},placeholder:l(t)("goodsNamePlaceholder"),maxlength:"60"},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),n(h,{label:l(t)("goodsCategory"),prop:"goods_category"},{default:r(()=>[n(N,{modelValue:o.searchParam.goods_category,"onUpdate:modelValue":a[1]||(a[1]=e=>o.searchParam.goods_category=e),options:I,placeholder:l(t)("goodsCategoryPlaceholder"),clearable:"",props:{value:"value",label:"label",emitPath:!1}},null,8,["modelValue","options","placeholder"])]),_:1},8,["label"]),n(h,{label:l(t)("goodsType"),prop:"goods_type"},{default:r(()=>[n(D,{modelValue:o.searchParam.goods_type,"onUpdate:modelValue":a[2]||(a[2]=e=>o.searchParam.goods_type=e),placeholder:l(t)("goodsTypePlaceholder"),clearable:""},{default:r(()=>[(p(!0),x(z,null,F(j,e=>(p(),b(R,{key:e.type,label:e.name,value:e.type},null,8,["label","value"]))),128))]),_:1},8,["modelValue","placeholder"])]),_:1},8,["label"]),n(h,{label:l(t)("brand"),prop:"brand_id"},{default:r(()=>[n(D,{modelValue:o.searchParam.brand_id,"onUpdate:modelValue":a[3]||(a[3]=e=>o.searchParam.brand_id=e),placeholder:l(t)("brandPlaceholder"),clearable:""},{default:r(()=>[(p(!0),x(z,null,F(q,e=>(p(),b(R,{key:e.brand_id,label:e.brand_name,value:e.brand_id},null,8,["label","value"]))),128))]),_:1},8,["modelValue","placeholder"])]),_:1},8,["label"]),n(h,{label:l(t)("labelIds"),prop:"label_ids"},{default:r(()=>[n(D,{modelValue:o.searchParam.label_ids,"onUpdate:modelValue":a[4]||(a[4]=e=>o.searchParam.label_ids=e),placeholder:l(t)("labelIdsPlaceholder"),clearable:""},{default:r(()=>[(p(!0),x(z,null,F(W,e=>(p(),b(R,{key:e.label_id,label:e.label_name,value:e.label_id},null,8,["label","value"]))),128))]),_:1},8,["modelValue","placeholder"])]),_:1},8,["label"]),n(h,{label:l(t)("saleNum"),prop:"sale_num"},{default:r(()=>[d("div",va,[T(d("input",{type:"text",placeholder:l(t)("startSaleNumPlaceholder"),maxlength:"10","onUpdate:modelValue":a[5]||(a[5]=e=>o.searchParam.start_sale_num=e),onKeyup:a[6]||(a[6]=e=>l(G)(e))},null,40,ya),[[L,o.searchParam.start_sale_num,void 0,{trim:!0}]]),Pa,T(d("input",{type:"text",placeholder:l(t)("endSaleNumPlaceholder"),maxlength:"10","onUpdate:modelValue":a[7]||(a[7]=e=>o.searchParam.end_sale_num=e),onKeyup:a[8]||(a[8]=e=>l(G)(e))},null,40,ka),[[L,o.searchParam.end_sale_num,void 0,{trim:!0}]])])]),_:1},8,["label"]),n(h,{label:l(t)("skuPrice"),prop:"sku_price"},{default:r(()=>[d("div",xa,[T(d("input",{type:"text",placeholder:l(t)("startPricePlaceholder"),maxlength:"10","onUpdate:modelValue":a[9]||(a[9]=e=>o.searchParam.start_price=e),onKeyup:a[10]||(a[10]=e=>l(G)(e))},null,40,Ca),[[L,o.searchParam.start_price,void 0,{trim:!0}]]),Ea,T(d("input",{type:"text",placeholder:l(t)("endPricePlaceholder"),maxlength:"10","onUpdate:modelValue":a[11]||(a[11]=e=>o.searchParam.end_price=e),onKeyup:a[12]||(a[12]=e=>l(G)(e))},null,40,Ta),[[L,o.searchParam.end_price,void 0,{trim:!0}]])])]),_:1},8,["label"]),n(h,null,{default:r(()=>[n(i,{type:"primary",onClick:a[13]||(a[13]=e=>u())},{default:r(()=>[_(c(l(t)("search")),1)]),_:1}),n(i,{onClick:a[14]||(a[14]=e=>xe(K.value))},{default:r(()=>[_(c(l(t)("reset")),1)]),_:1})]),_:1})]),_:1},8,["model"])]),_:1}),d("div",wa,[n(Ee,{modelValue:o.searchParam.status,"onUpdate:modelValue":a[15]||(a[15]=e=>o.searchParam.status=e),class:"goods-tabs",onTabClick:ie},{default:r(()=>[n(O,{label:l(t)("statusOn"),name:"1"},null,8,["label"]),n(O,{label:l(t)("statusOff"),name:"0"},null,8,["label"]),n(O,{label:l(t)("statusAll"),name:""},null,8,["label"])]),_:1},8,["modelValue"]),d("div",Va,[n(Te,{modelValue:S.value,"onUpdate:modelValue":a[16]||(a[16]=e=>S.value=e),size:"large",class:"px-[14px]",onChange:de,indeterminate:$.value},null,8,["modelValue","indeterminate"]),o.searchParam.status!="1"?(p(),b(i,{key:0,onClick:a[17]||(a[17]=e=>J(1)),size:"small"},{default:r(()=>[_(c(l(t)("batchOnGoods")),1)]),_:1})):w("",!0),o.searchParam.status!="0"?(p(),b(i,{key:1,onClick:a[18]||(a[18]=e=>J(0)),size:"small"},{default:r(()=>[_(c(l(t)("batchOffGoods")),1)]),_:1})):w("",!0),n(i,{onClick:me,size:"small"},{default:r(()=>[_(c(l(t)("batchDeleteGoods")),1)]),_:1})]),T((p(),b(Ve,{data:o.data,size:"large",ref_key:"goodsListTableRef",ref:Y,onSortChange:ue,onSelectionChange:ce},{empty:r(()=>[d("span",null,c(o.loading?"":l(t)("emptyData")),1)]),default:r(()=>[n(v,{type:"selection",width:"55"}),n(v,{prop:"goods_id",label:l(t)("goodsInfo"),"min-width":"300"},{default:r(({row:e})=>[d("div",{class:"flex items-center cursor-pointer",onClick:m=>pe(e)},[d("div",$a,[e.goods_cover_thumb_small?(p(),b(we,{key:0,class:"w-[70px] h-[70px]",src:l(Ue)(e.goods_cover_thumb_small),fit:"contain"},{error:r(()=>[Na]),_:2},1032,["src"])):(p(),x("img",Ga))]),d("div",La,[d("span",{title:e.goods_name,class:"multi-hidden"},c(e.goods_name),9,Ba),d("span",Ua,c(e.goods_type_name),1)])],8,Sa)]),_:1},8,["label"]),n(v,{prop:"price",label:l(t)("skuPrice"),"min-width":"120",align:"right",sortable:"custom"},{default:r(({row:e})=>[d("div",{class:"cursor-pointer price-wrap",onClick:m=>fe(e)},[d("span",null,"￥"+c(e.goodsSku.price),1),n(se,{class:"icon-wrap ml-[5px] invisible"},{default:r(()=>[n(oe)]),_:1})],8,Ia)]),_:1},8,["label"]),n(v,{prop:"stock",label:l(t)("stock"),"min-width":"120",sortable:"custom"},{default:r(({row:e})=>[d("div",{class:"cursor-pointer stock-wrap",onClick:m=>be(e)},[d("span",null,c(e.stock),1),n(se,{class:"icon-wrap ml-[5px] invisible"},{default:r(()=>[n(oe)]),_:1})],8,Ra)]),_:1},8,["label"]),n(v,{prop:"sale_num",label:l(t)("saleNum"),"min-width":"100",sortable:"custom"},null,8,["label"]),n(v,{prop:"status",label:l(t)("status"),"min-width":"100"},{default:r(({row:e})=>[e.status==1?(p(),x("div",Da,c(l(t)("statusOn")),1)):w("",!0),e.status==0?(p(),x("div",Oa,c(l(t)("statusOff")),1)):w("",!0)]),_:1},8,["label"]),n(v,{prop:"sort",label:l(t)("sort"),"min-width":"120",sortable:"custom"},{default:r(({row:e})=>[n(k,{modelValue:e.sort,"onUpdate:modelValue":m=>e.sort=m,class:"w-[70px]",maxlength:"10",onInput:m=>l(_e)(m,e)},null,8,["modelValue","onUpdate:modelValue","onInput"])]),_:1},8,["label"]),n(v,{prop:"create_time",label:l(t)("createTime"),"min-width":"150",sortable:"custom"},{default:r(({row:e})=>[d("div",null,c(e.create_time),1)]),_:1},8,["label"]),n(v,{label:l(t)("operation"),fixed:"right",align:"right","min-width":"120"},{default:r(({row:e})=>[n(i,{type:"primary",link:"",onClick:m=>he(e)},{default:r(()=>[_(c(l(t)("edit")),1)]),_:2},1032,["onClick"]),n(i,{type:"primary",link:"",onClick:m=>ve(e)},{default:r(()=>[_(c(l(t)("spreadGoods")),1)]),_:2},1032,["onClick"]),n(i,{type:"primary",link:"",onClick:m=>ye(e)},{default:r(()=>[_(c(l(t)("memberPrice")),1)]),_:2},1032,["onClick"]),e.status==1?(p(),b(i,{key:0,type:"primary",link:"",onClick:m=>H(e,0)},{default:r(()=>[_(c(l(t)("statusActionOff")),1)]),_:2},1032,["onClick"])):(p(),b(i,{key:1,type:"primary",link:"",onClick:m=>H(e,1)},{default:r(()=>[_(c(l(t)("statusActionOn")),1)]),_:2},1032,["onClick"])),n(i,{type:"primary",link:"",onClick:m=>Pe(e)},{default:r(()=>[_(c(l(t)("copyGoods")),1)]),_:2},1032,["onClick"]),e.status!=1?(p(),b(i,{key:2,type:"primary",link:"",onClick:m=>ke(e.goods_id)},{default:r(()=>[_(c(l(t)("delete")),1)]),_:2},1032,["onClick"])):w("",!0)]),_:1},8,["label"])]),_:1},8,["data"])),[[$e,o.loading]]),d("div",za,[n(Se,{"current-page":o.page,"onUpdate:current-page":a[19]||(a[19]=e=>o.page=e),"page-size":o.limit,"onUpdate:page-size":a[20]||(a[20]=e=>o.limit=e),layout:"total, sizes, prev, pager, next, jumper",total:o.total,onSizeChange:a[21]||(a[21]=e=>u()),onCurrentChange:u},null,8,["current-page","page-size","total"])])])]),_:1}),n(sa,{ref_key:"goodsStockEditPopupRef",ref:Z,onLoad:u},null,512),n(la,{ref_key:"goodsPriceEditPopupRef",ref:X,onLoad:u},null,512),n(na,{ref_key:"goodsSpreadPopupRef",ref:Q},null,512),n(oa,{ref_key:"memberPricePopupRef",ref:ae,onLoad:u},null,512)])}}});const Ct=ga(Fa,[["__scopeId","data-v-f56498ab"]]);export{Ct as default};