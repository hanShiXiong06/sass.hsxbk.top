import{bw as Oe,r as g,d as ze,f as De,x as Fe,n as $,a2 as Ae,h as p,c as P,e as n,w as r,a as i,t as c,u as o,i as _,q as t,F as q,T as J,s as k,R as L,c8 as z,b6 as D,B as x,A as Me,j as W,a5 as F,U as C,ap as je,a3 as Ke,E as qe,K as Je,L as We,bF as Ye,ab as He,aC as Xe,M as Ze,a7 as Qe,ax as ea,ay as aa,av as ta,ac as oa,J as sa,ak as la,a1 as na,ad as ra,W as ia,Y as da,p as ca,g as pa}from"./index-6f32d09b.js";/* empty css                   *//* empty css                      *//* empty css                 *//* empty css               *//* empty css                  *//* empty css                  *//* empty css                     *//* empty css                  *//* empty css                 *//* empty css                    */import"./el-tooltip-4ed993c7.js";/* empty css                 *//* empty css                        *//* empty css                        *//* empty css                    *//* empty css                *//* empty css                *//* empty css                          *//* empty css                 */import"./el-form-item-4ed993c7.js";/* empty css                  */import{_ as pe}from"./goods_default-995568ac.js";import ua from"./goods-member-price-popup-8391826a.js";import ma from"./goods-stock-edit-popup-b8dfa276.js";import _a from"./goods-price-edit-popup-6195b75c.js";import{_ as ga}from"./goods-spread-popup.vue_vue_type_script_setup_true_lang-d5c0b344.js";import{g as ha,b as fa,U as ba,V as va,W as Y,X as ce,Y as ya,Z as ka,_ as Pa,$ as xa}from"./goods-3890b03a.js";import{A as Ca}from"./member-9a6a6015.js";import{_ as Ea}from"./_plugin-vue_export-helper-c27b6911.js";/* empty css                  *//* empty css                   *//* empty css                       */import"./goods_default-665e448a.js";import"./browser-a1ac24ac.js";const Ta=Oe("pagination",()=>{const S=g(1),V=g(10),w=g(0),N=g(!0);function h(f){S.value=f}function u(f){V.value=f}function l(f){w.value=f}function G(f){N.value=f}return{page:S,limit:V,total:w,loading:N,setPage:h,setLimit:u,setTotal:l,setLoading:G}}),H=S=>(ca("data-v-6a7d97cb"),S=S(),pa(),S),Sa={class:"main-container"},Va={class:"flex justify-between items-center"},wa={class:"text-page-title"},$a={class:"region-input"},La=["placeholder"],Na=H(()=>i("span",{class:"separator"},"-",-1)),Ga=["placeholder"],Ua={class:"region-input"},Ba=["placeholder"],Ia=H(()=>i("span",{class:"separator"},"-",-1)),Ra=["placeholder"],Oa={class:"mt-[10px]"},za={class:"mb-[10px] flex items-center"},Da=["onClick"],Fa={class:"min-w-[70px] h-[70px] flex items-center justify-center"},Aa=H(()=>i("div",{class:"image-slot"},[i("img",{class:"w-[70px] h-[70px]",src:pe})],-1)),Ma={key:1,class:"w-[70px] h-[70px]",src:pe,fit:"contain"},ja={class:"ml-2"},Ka=["title"],qa={class:"text-[12px] multi-hidden"},Ja={key:1,class:"tag text-[12px]"},Wa={class:"text-primary text-[12px]"},Ya=["title"],Ha={key:0},Xa=["onClick"],Za=["onClick"],Qa={key:0},et=["onClick"],at={key:0},tt={key:1},ot={class:"mt-[16px] flex justify-end"},st=ze({__name:"list",setup(S){const V=De(),w=Fe(),N=w.meta.title,h=g(!1),u=Ta(),l=$({page:u.page,limit:u.limit,total:u.total,loading:u.loading,data:[],searchParam:{goods_name:"",goods_category:[],goods_type:"",brand_id:"",label_ids:"",start_sale_num:"",end_sale_num:"",start_price:"",end_price:"",status:w.query.status||"1",order:"",sort:"",sku_no:""}}),G=g(),f={number:/^\d{0,10}$/,digit:/^\d{0,10}(.?\d{0,2})$/},A=$([]),X=$([]),Z=$([]),Q=$([]);(()=>{ha().then(s=>{const a=s.data;if(a){const d=[];a.forEach(E=>{const b=[];E.child_list&&(b.push({value:E.category_id,label:t("全部")}),E.child_list.forEach(I=>{b.push({value:I.category_id,label:I.category_name})})),d.push({value:E.category_id,label:E.category_name,children:b})}),A.splice(0,A.length,...d)}}),fa().then(s=>{const a=s.data;if(a)for(const d in a)X.push(a[d])}),ba({}).then(s=>{const a=s.data;a&&Z.push(...a)}),va({}).then(s=>{const a=s.data;a&&Q.push(...a)})})();const ue=(s,a)=>{l.searchParam.status=s.props.name,m()},U=g(),B=g(!1),me=s=>{B.value=!1,ee.value.toggleAllSelection()},ee=g(),T=g([]),_e=s=>{T.value=s,U.value=!1,T.value.length>0&&T.value.length<l.data.length?B.value=!0:B.value=!1,T.value.length==l.data.length&&(U.value=!0)},ge=s=>{const a=V.resolve({path:"/preview/wap",query:{page:`/addon/phone_shop/pages/goods/detail?goods_id=${s.goods_id}`}});window.open(a.href)},he=s=>{let a="";s.order=="ascending"?a="asc":s.order=="descending"&&(a="desc"),a&&(l.searchParam.order=s.prop,l.searchParam.sort=a),m()},ae=(s,a)=>{a?Y({goods_ids:s.goods_id,status:a}).then(d=>{m()}):F.confirm(t("statusChangeTips"),t("warning"),{confirmButtonText:t("confirm"),cancelButtonText:t("cancel"),type:"warning"}).then(()=>{Y({goods_ids:s.goods_id,status:a}).then(d=>{m()})})},te=s=>{if(T.value.length==0){C({type:"warning",message:`${t("batchEmptySelectedGoodsTips")}`});return}const a=[];T.value.forEach(d=>{a.push(d.goods_id)}),Y({goods_ids:a,status:s}).then(d=>{m()})},fe=()=>{if(T.value.length==0){C({type:"warning",message:`${t("batchEmptySelectedGoodsTips")}`});return}F.confirm(t("batchGoodsDeleteTips"),t("warning"),{confirmButtonText:t("confirm"),cancelButtonText:t("cancel"),type:"warning"}).then(()=>{if(h.value)return;h.value=!0;const s=[];T.value.forEach(a=>{s.push(a.goods_id)}),ce({goods_ids:s}).then(()=>{m(),h.value=!1}).catch(()=>{h.value=!1})})},be=je((s,a)=>{if(isNaN(s)||!f.number.test(s)){C({type:"warning",message:`${t("sortTips")}`});return}s>99999999&&(a.sort=99999999),ya({goods_id:a.goods_id,sort:s}).then(d=>{})}),m=(s=1)=>{if(l.searchParam.start_sale_num&&!f.digit.test(l.searchParam.start_sale_num)){C({type:"warning",message:`${t("startSaleNumTips")}`});return}if(l.searchParam.end_sale_num&&!f.digit.test(l.searchParam.end_sale_num)){C({type:"warning",message:`${t("endSaleNumTips")}`});return}if(Number(l.searchParam.start_sale_num)>Number(l.searchParam.end_sale_num)){C({type:"warning",message:`${t("shopSaleNumTips")}`});return}if(l.searchParam.start_price&&!f.digit.test(l.searchParam.start_price)){C({type:"warning",message:`${t("startPriceTips")}`});return}if(l.searchParam.end_price&&!f.digit.test(l.searchParam.end_price)){C({type:"warning",message:`${t("endPriceTips")}`});return}if(Number(l.searchParam.start_price)>Number(l.searchParam.end_price)){C({type:"warning",message:`${t("shopPriceTips")}`});return}l.loading=!0,l.page=s;const a=Ke(l.searchParam);ka({page:u.page,limit:u.limit,...a}).then(d=>{l.loading=!1,l.data=d.data.data,l.total=d.data.total,u.setLoading(!1),u.setTotal(d.data.total)}).catch(()=>{l.loading=!1})};function ve(s){u.setLimit(s),m()}function ye(s){u.setPage(s),m()}m();const ke=()=>{V.push("/phone_shop/goods/real_edit")},Pe=s=>{V.push(s.goods_edit_path+"?goods_id="+s.goods_id)},oe=g(null),xe=s=>{oe.value.show(s)},se=g(null),Ce=s=>{se.value.show(s)},le=g(null),Ee=s=>{le.value.show(s)},ne=g([]);(()=>{Ca().then(s=>{ne.value=s.data?s.data:[]})})();const re=g(null),ie=s=>{re.value.show(s,ne.value)},Te=s=>{F.confirm(t("goodsCopyTips"),t("warning"),{confirmButtonText:t("confirm"),cancelButtonText:t("cancel"),type:"warning"}).then(()=>{h.value||(h.value=!0,Pa({goods_id:s.goods_id}).then(a=>{a.code==1&&m(),h.value=!1}).catch(a=>{h.value=!1}))})},Se=s=>{F.confirm(t("goodsDeleteTips"),t("warning"),{confirmButtonText:t("confirm"),cancelButtonText:t("cancel"),type:"warning"}).then(()=>{h.value||(h.value=!0,ce({goods_ids:s}).then(()=>{m(),h.value=!1}).catch(()=>{h.value=!1}))})},Ve=s=>{s&&(s.resetFields(),l.searchParam.start_price="",l.searchParam.end_price="",l.searchParam.start_sale_num="",l.searchParam.end_sale_num="",m())},we=()=>{l.loading=!0;const s=C({message:"同步中...",type:"warning",duration:0});xa().then(a=>{a.code==1&&m()}).finally(()=>{l.loading=!1,s.close()})};return(s,a)=>{const d=qe,E=Je,b=We,I=Ye,M=He,j=Xe,$e=Ze,de=Qe,K=ea,Le=aa,Ne=ta,v=oa,Ge=sa,Ue=la,R=Ae("EditPen"),O=na,Be=ra,Ie=ia,Re=da;return p(),P("div",Sa,[n(de,{class:"box-card !border-none",shadow:"never"},{default:r(()=>[i("div",Va,[i("span",wa,c(o(N)),1),i("span",null,[n(d,{type:"primary",onClick:ke},{default:r(()=>[_(c(o(t)("addGoods")),1)]),_:1}),n(d,{onClick:a[0]||(a[0]=e=>we())},{default:r(()=>[_(c(o(t)("一键同步")),1)]),_:1})])]),n(de,{class:"box-card !border-none my-[10px] table-search-wrap",shadow:"never"},{default:r(()=>[n($e,{inline:!0,model:l.searchParam,ref_key:"searchFormRef",ref:G},{default:r(()=>[n(b,{label:o(t)("商品sn"),prop:"goods_name"},{default:r(()=>[n(E,{modelValue:l.searchParam.sku_no,"onUpdate:modelValue":a[1]||(a[1]=e=>l.searchParam.sku_no=e),style:{width:"440px"},placeholder:o(t)("请输入商品sn编号,如有多个请以空格隔开,最多支持50个字符"),maxlength:"50",clearable:""},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),n(b,{label:o(t)("goodsName"),prop:"goods_name"},{default:r(()=>[n(E,{modelValue:l.searchParam.goods_name,"onUpdate:modelValue":a[2]||(a[2]=e=>l.searchParam.goods_name=e),modelModifiers:{trim:!0},placeholder:o(t)("goodsNamePlaceholder"),maxlength:"60"},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),n(b,{label:o(t)("goodsCategory"),prop:"goods_category"},{default:r(()=>[n(I,{modelValue:l.searchParam.goods_category,"onUpdate:modelValue":a[3]||(a[3]=e=>l.searchParam.goods_category=e),options:A,placeholder:o(t)("goodsCategoryPlaceholder"),clearable:"",props:{value:"value",label:"label",emitPath:!1}},null,8,["modelValue","options","placeholder"])]),_:1},8,["label"]),n(b,{label:o(t)("goodsType"),prop:"goods_type"},{default:r(()=>[n(j,{modelValue:l.searchParam.goods_type,"onUpdate:modelValue":a[4]||(a[4]=e=>l.searchParam.goods_type=e),placeholder:o(t)("goodsTypePlaceholder"),clearable:""},{default:r(()=>[(p(!0),P(q,null,J(X,e=>(p(),k(M,{key:e.type,label:e.name,value:e.type},null,8,["label","value"]))),128))]),_:1},8,["modelValue","placeholder"])]),_:1},8,["label"]),n(b,{label:o(t)("brand"),prop:"brand_id"},{default:r(()=>[n(j,{modelValue:l.searchParam.brand_id,"onUpdate:modelValue":a[5]||(a[5]=e=>l.searchParam.brand_id=e),placeholder:o(t)("brandPlaceholder"),clearable:""},{default:r(()=>[(p(!0),P(q,null,J(Z,e=>(p(),k(M,{key:e.brand_id,label:e.brand_name,value:e.brand_id},null,8,["label","value"]))),128))]),_:1},8,["modelValue","placeholder"])]),_:1},8,["label"]),n(b,{label:o(t)("labelIds"),prop:"label_ids"},{default:r(()=>[n(j,{modelValue:l.searchParam.label_ids,"onUpdate:modelValue":a[6]||(a[6]=e=>l.searchParam.label_ids=e),placeholder:o(t)("labelIdsPlaceholder"),clearable:""},{default:r(()=>[(p(!0),P(q,null,J(Q,e=>(p(),k(M,{key:e.label_id,label:e.label_name,value:e.label_id},null,8,["label","value"]))),128))]),_:1},8,["modelValue","placeholder"])]),_:1},8,["label"]),n(b,{label:o(t)("saleNum"),prop:"sale_num"},{default:r(()=>[i("div",$a,[L(i("input",{type:"text",placeholder:o(t)("startSaleNumPlaceholder"),maxlength:"10","onUpdate:modelValue":a[7]||(a[7]=e=>l.searchParam.start_sale_num=e),onKeyup:a[8]||(a[8]=e=>o(z)(e))},null,40,La),[[D,l.searchParam.start_sale_num,void 0,{trim:!0}]]),Na,L(i("input",{type:"text",placeholder:o(t)("endSaleNumPlaceholder"),maxlength:"10","onUpdate:modelValue":a[9]||(a[9]=e=>l.searchParam.end_sale_num=e),onKeyup:a[10]||(a[10]=e=>o(z)(e))},null,40,Ga),[[D,l.searchParam.end_sale_num,void 0,{trim:!0}]])])]),_:1},8,["label"]),n(b,{label:o(t)("skuPrice"),prop:"sku_price"},{default:r(()=>[i("div",Ua,[L(i("input",{type:"text",placeholder:o(t)("startPricePlaceholder"),maxlength:"10","onUpdate:modelValue":a[11]||(a[11]=e=>l.searchParam.start_price=e),onKeyup:a[12]||(a[12]=e=>o(z)(e))},null,40,Ba),[[D,l.searchParam.start_price,void 0,{trim:!0}]]),Ia,L(i("input",{type:"text",placeholder:o(t)("endPricePlaceholder"),maxlength:"10","onUpdate:modelValue":a[13]||(a[13]=e=>l.searchParam.end_price=e),onKeyup:a[14]||(a[14]=e=>o(z)(e))},null,40,Ra),[[D,l.searchParam.end_price,void 0,{trim:!0}]])])]),_:1},8,["label"]),n(b,null,{default:r(()=>[n(d,{type:"primary",onClick:a[15]||(a[15]=e=>m())},{default:r(()=>[_(c(o(t)("search")),1)]),_:1}),n(d,{onClick:a[16]||(a[16]=e=>Ve(G.value))},{default:r(()=>[_(c(o(t)("reset")),1)]),_:1})]),_:1})]),_:1},8,["model"])]),_:1}),i("div",Oa,[n(Le,{modelValue:l.searchParam.status,"onUpdate:modelValue":a[17]||(a[17]=e=>l.searchParam.status=e),class:"goods-tabs",onTabClick:ue},{default:r(()=>[n(K,{label:o(t)("statusOn"),name:"1"},null,8,["label"]),n(K,{label:o(t)("statusOff"),name:"0"},null,8,["label"]),n(K,{label:o(t)("statusAll"),name:""},null,8,["label"])]),_:1},8,["modelValue"]),i("div",za,[n(Ne,{modelValue:U.value,"onUpdate:modelValue":a[18]||(a[18]=e=>U.value=e),size:"large",class:"px-[14px]",onChange:me,indeterminate:B.value},null,8,["modelValue","indeterminate"]),l.searchParam.status!="1"?(p(),k(d,{key:0,onClick:a[19]||(a[19]=e=>te(1)),size:"small"},{default:r(()=>[_(c(o(t)("batchOnGoods")),1)]),_:1})):x("",!0),l.searchParam.status!="0"?(p(),k(d,{key:1,onClick:a[20]||(a[20]=e=>te(0)),size:"small"},{default:r(()=>[_(c(o(t)("batchOffGoods")),1)]),_:1})):x("",!0),n(d,{onClick:fe,size:"small"},{default:r(()=>[_(c(o(t)("batchDeleteGoods")),1)]),_:1})]),L((p(),k(Be,{data:l.data,size:"large",ref_key:"goodsListTableRef",ref:ee,onSortChange:he,onSelectionChange:_e},{empty:r(()=>[i("span",null,c(l.loading?"":o(t)("emptyData")),1)]),default:r(()=>[n(v,{type:"selection",width:"55"}),n(v,{prop:"goods_id",label:o(t)("goodsInfo"),"min-width":"300"},{default:r(({row:e})=>[i("div",{class:"flex items-center cursor-pointer",onClick:y=>ge(e)},[i("div",Fa,[e.goods_cover_thumb_small?(p(),k(Ge,{key:0,class:"w-[70px] h-[70px]",src:o(Me)(e.goods_cover_thumb_small),fit:"contain"},{error:r(()=>[Aa]),_:2},1032,["src"])):(p(),P("img",Ma))]),i("div",ja,[i("span",{title:e.goods_name,class:"multi-hidden"},c(e.goods_name),9,Ka),i("view",qa,c(e.sub_title),1),i("view",null,[e.brand_name?(p(),k(Ue,{key:0,type:"success",size:"small"},{default:r(()=>[_(c(e.brand_name),1)]),_:2},1024)):x("",!0),e.brand_name?(p(),P("span",Ja," | ")):x("",!0),i("span",Wa,c(e.goods_type_name),1)])])],8,Da)]),_:1},8,["label"]),n(v,{prop:"sku_no",label:o(t)("sn"),"min-width":"130"},{default:r(({row:e})=>[i("span",{title:e.sku_no},c(e.goodsSku.sku_no),9,Ya)]),_:1},8,["label"]),n(v,{prop:"price",label:o(t)("skuPrice"),"min-width":"120",align:"right",sortable:"custom"},{default:r(({row:e})=>[o(W)().siteInfo.site_id==100005?(p(),P("div",Ha,[i("span",null,"￥"+c(e.goodsSku.price),1),n(O,{class:"icon-wrap ml-[5px] invisible"},{default:r(()=>[n(R)]),_:1})])):(p(),P("div",{key:1,class:"cursor-pointer price-wrap",onClick:y=>xe(e)},[i("span",null,"￥"+c(e.goodsSku.price),1),n(O,{class:"icon-wrap ml-[5px] invisible"},{default:r(()=>[n(R)]),_:1})],8,Xa))]),_:1},8,["label"]),o(W)().siteInfo.site_id==100005?(p(),k(v,{key:0,prop:"price",label:o(t)("批发价格"),"min-width":"120",align:"right",sortable:"custom"},{default:r(({row:e})=>[i("div",{class:"cursor-pointer price-wrap",onClick:y=>ie(e)},[e.goodsSku.member_price?(p(),P("span",Qa,"￥"+c(JSON.parse(e.goodsSku.member_price).level_1),1)):x("",!0),n(O,{class:"icon-wrap ml-[5px] invisible"},{default:r(()=>[n(R)]),_:1})],8,Za)]),_:1},8,["label"])):x("",!0),n(v,{prop:"stock",label:o(t)("stock"),"min-width":"120",sortable:"custom"},{default:r(({row:e})=>[i("div",{class:"cursor-pointer stock-wrap",onClick:y=>Ce(e)},[i("span",null,c(e.stock),1),n(O,{class:"icon-wrap ml-[5px] invisible"},{default:r(()=>[n(R)]),_:1})],8,et)]),_:1},8,["label"]),n(v,{prop:"sale_num",label:o(t)("saleNum"),"min-width":"100",sortable:"custom"},null,8,["label"]),n(v,{prop:"status",label:o(t)("status"),"min-width":"100"},{default:r(({row:e})=>[e.status==1?(p(),P("div",at,c(o(t)("statusOn")),1)):x("",!0),e.status==0?(p(),P("div",tt,c(o(t)("statusOff")),1)):x("",!0)]),_:1},8,["label"]),n(v,{prop:"sort",label:o(t)("sort"),"min-width":"120",sortable:"custom"},{default:r(({row:e})=>[n(E,{modelValue:e.sort,"onUpdate:modelValue":y=>e.sort=y,class:"w-[70px]",maxlength:"8",onBlur:y=>o(be)(e.sort,e)},null,8,["modelValue","onUpdate:modelValue","onBlur"])]),_:1},8,["label"]),o(W)().siteInfo.site_id!==100005?(p(),k(v,{key:1,prop:"source",label:o(t)("来源"),"min-width":"120"},null,8,["label"])):x("",!0),n(v,{prop:"create_time",label:o(t)("createTime"),"min-width":"150",sortable:"custom"},{default:r(({row:e})=>[i("div",null,c(e.create_time),1)]),_:1},8,["label"]),n(v,{prop:"update_time",label:o(t)("updateTime"),"min-width":"150",sortable:"custom"},{default:r(({row:e})=>[i("div",null,c(e.update_time),1)]),_:1},8,["label"]),n(v,{label:o(t)("operation"),fixed:"right",align:"right","min-width":"120"},{default:r(({row:e})=>[n(d,{type:"primary",link:"",onClick:y=>Pe(e)},{default:r(()=>[_(c(o(t)("edit")),1)]),_:2},1032,["onClick"]),n(d,{type:"primary",link:"",onClick:y=>Ee(e)},{default:r(()=>[_(c(o(t)("spreadGoods")),1)]),_:2},1032,["onClick"]),n(d,{type:"primary",link:"",onClick:y=>ie(e)},{default:r(()=>[_(c(o(t)("memberPrice")),1)]),_:2},1032,["onClick"]),e.status==1?(p(),k(d,{key:0,type:"primary",link:"",onClick:y=>ae(e,0)},{default:r(()=>[_(c(o(t)("statusActionOff")),1)]),_:2},1032,["onClick"])):(p(),k(d,{key:1,type:"primary",link:"",onClick:y=>ae(e,1)},{default:r(()=>[_(c(o(t)("statusActionOn")),1)]),_:2},1032,["onClick"])),n(d,{type:"primary",link:"",onClick:y=>Te(e)},{default:r(()=>[_(c(o(t)("copyGoods")),1)]),_:2},1032,["onClick"]),e.status!=1?(p(),k(d,{key:2,type:"primary",link:"",onClick:y=>Se(e.goods_id)},{default:r(()=>[_(c(o(t)("delete")),1)]),_:2},1032,["onClick"])):x("",!0)]),_:1},8,["label"])]),_:1},8,["data"])),[[Re,l.loading]]),i("div",ot,[n(Ie,{"current-page":o(u).page,"onUpdate:current-page":a[21]||(a[21]=e=>o(u).page=e),"page-size":o(u).limit,"onUpdate:page-size":a[22]||(a[22]=e=>o(u).limit=e),layout:"total, sizes, prev, pager, next, jumper",total:o(u).total,onSizeChange:ve,onCurrentChange:ye},null,8,["current-page","page-size","total"])])])]),_:1}),n(ma,{ref_key:"goodsStockEditPopupRef",ref:se,onLoad:m},null,512),n(_a,{ref_key:"goodsPriceEditPopupRef",ref:oe,onLoad:m},null,512),n(ga,{ref_key:"goodsSpreadPopupRef",ref:le},null,512),n(ua,{ref_key:"memberPricePopupRef",ref:re,onLoad:m},null,512)])}}});const At=Ea(st,[["__scopeId","data-v-6a7d97cb"]]);export{At as default};
