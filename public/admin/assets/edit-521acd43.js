import{d as be,x as ye,f as Ve,r as U,n as B,l as he,q as t,a2 as ke,h as b,c as v,e,w as s,u as a,a as _,i as c,t as m,F as C,T as ve,s as T,c9 as M,B as h,Z as W,b$ as X,U as Y,aR as xe,a7 as we,K as Ue,L as Pe,bF as Ee,au as Ne,av as $e,ac as Ce,aD as Te,M as Me,ay as Fe,aT as Ie,ad as Se,E as Re,ae as qe,a1 as De,aa as Ge,az as Be,p as Ke,g as Le,a3 as Ze}from"./index-99f00cf3.js";/* empty css                    */import{_ as Oe}from"./index.vue_vue_type_script_setup_true_lang-2f14504d.js";import"./el-tooltip-4ed993c7.js";/* empty css                  *//* empty css                 *//* empty css                    *//* empty css                     *//* empty css                  *//* empty css                        *//* empty css               *//* empty css                  *//* empty css                *//* empty css                 *//* empty css                  *//* empty css                  *//* empty css                       *//* empty css                 */import je from"./index-015c0c3e.js";/* empty css                          */import"./el-form-item-4ed993c7.js";/* empty css                *//* empty css                   *//* empty css                       */import{g as Ae}from"./category-cab25d32.js";import{b as He,c as Je,d as Qe}from"./goods-adcc5c0e.js";import{j as ze}from"./poster-a2e7062d.js";/* empty css                   */import{_ as We}from"./_plugin-vue_export-helper-c27b6911.js";import"./index.vue_vue_type_style_index_0_lang-2e54ab99.js";/* empty css                  *//* empty css                   */import"./attachment-6fc096d0.js";/* empty css                   */import"./index.vue_vue_type_script_setup_true_lang-a59c79e6.js";/* empty css                        *//* empty css                      *//* empty css                 *//* empty css               *//* empty css               *//* empty css                    *//* empty css                    */import"./el-dropdown-item-4ed993c7.js";import"./index.vue_vue_type_script_setup_true_lang-bde8c802.js";/* empty css                   */import"./index.vue_vue_type_script_setup_true_lang-49ab6f2c.js";import"./sortable.esm-be94e56d.js";const x=P=>(Ke("data-v-b85f9fb6"),P=P(),Le(),P),Xe={class:"main-container"},Ye=x(()=>_("div",{class:"text-[12px] text-[#999]"},"建议上传图片的大小为150px*150px",-1)),el={class:"ml-[10px]"},ll=x(()=>_("span",null,"元",-1)),ol=x(()=>_("p",{class:"text-[12px] text-[#a9a9a9]"},"0即为免费预约",-1)),tl={class:"add-product"},al=x(()=>_("span",null,"元",-1)),rl=x(()=>_("p",{class:"text-[12px] text-[#a9a9a9]"},"价目表显示在项目详情作为参考，价格透明，有助于客户下单，预约后实际支付按照技师报价结算",-1)),sl=x(()=>_("span",null,"元",-1)),dl={class:"server-tables"},il=x(()=>_("span",null,"元",-1)),ul={class:"flex items-center"},nl={key:0,class:"text-[12px] text-[#999] leading-[20px]"},pl={key:1,class:"text-[12px] text-[#999] leading-[20px]"},ml={class:"fixed-footer-wrap"},_l={class:"fixed-footer"},cl=be({__name:"edit",setup(P){const ee=ye(),le=Ve(),E=parseInt(ee.query.id),F=U(!1),I=U("basic"),K={goods_id:"",goods_name:"",goods_image:"",goods_category:"",virtually_sale:"",sort:"",status:"1",buy_type:"reservation",price_list:[],spec_type:"single",free:!1,price:"",sku_no:"",sku_unit:"次",min_buy:"1",goods_sku_data:[],after_sales:0,goods_content:"",buy_info:"",poster_id:"",member_discount:""},r=B({...K});E&&(async(n=0)=>{Object.assign(r,K);const o=await(await He({goods_id:n})).data.goods_info;Object.keys(r).forEach(d=>{o[d]!=null&&(r[d]=o[d]),o[d]!=null&&d=="goods_category"&&(r[d]=Number(o[d]))}),r.spec_type=="single"&&(r.price=o.sku_list[0].price,r.sku_no=o.sku_list[0].sku_no,r.sku_unit=o.sku_list[0].sku_unit,r.min_buy=o.sku_list[0].min_buy,Number(r.price)==0&&(r.free=!0)),r.goods_sku_data=o.sku_list})(E);const S=B([]);(async(n=null)=>{Ae().then(o=>{const d=o.data;if(d){const f=[];d.forEach(p=>{const i=[];p.children&&p.children.forEach(N=>{i.push({value:N.category_id,label:N.category_name})}),f.push({value:p.category_id,label:p.category_name,children:i})}),S.splice(0,S.length,...f)}})})();const R=B([]),oe=()=>{const n=le.resolve({path:"/poster/list"});window.open(n.href)},L=(n=!1)=>{ze({type:"o2o_goods"}).then(o=>{const d=o.data;d&&(R.splice(0,R.length,...d),n&&Y({message:t("refreshSuccess"),type:"success"}))})};L();const Z=U(),O=U(),j=U(),te={required:/[\S]+/,number:/^\d{0,10}$/,digit:/^\d{0,10}(.?\d{0,2})$/,special:/^\d{0,10}(.?\d{0,3})$/},q=he(()=>({goods_name:[{required:!0,message:t("goodsNamePlaceholder"),trigger:"blur"}],goods_image:[{required:!0,message:t("goodsImagePlaceholder"),trigger:"change"}],goods_category:[{required:!0,message:t("categoryIdPlaceholder"),trigger:"change"}],sort:[{trigger:"blur",validator:(n,o,d)=>{isNaN(o)||!te.number.test(o)?d(new Error(t("sortTips"))):d()}}],price:[{required:!0,trigger:"blur",validator:(n,o,d)=>{o==""&&r.buy_type=="reservation"?d(new Error(t("orderPricePricePlaceholder"))):o==""&&r.buy_type=="buy"?d(new Error(t("goodsPricePlaceholder"))):o<0&&r.buy_type=="reservation"?d(new Error(t("orderPriceNotZeroTips"))):o<=0&&r.buy_type=="buy"?d(new Error(t("goodsPriceNotZeroTips"))):d()}}],sku_unit:[{required:!0,message:t("productUnitTips"),trigger:"blur"}],min_buy:[{required:!0,message:t("miniGoodsPlaceholder"),trigger:"blur"},{trigger:"blur",validator:(n,o,d)=>{o<=0?d(new Error(t("minBuyNotZeroTips"))):d()}}]})),ae=n=>{const o=[{key:"basic",verify:!1,ref:Z.value},{key:"goods_charge",verify:!1,ref:O.value},{key:"detail",verify:!1,ref:j.value}];o.forEach((d,f)=>{d.ref.validate(p=>{d.verify=p})}),setTimeout(()=>{let d=!0;for(let f=0;f<o.length;f++)if(o[f].verify==!1){I.value=o[f].key,d=!1;break}d&&n&&n()},10)},re=()=>{ae(()=>{if(F.value=!0,r.goods_sku_data.length&&!r.goods_sku_data.some(f=>f.is_default)){Y({message:"请选择多规格的默认规格",type:"error"});return}r.free&&(r.price=0);const n=Ze(r);n.price_list=JSON.stringify(n.price_list),n.goods_sku_data=JSON.stringify(n.goods_sku_data),(E?Je:Qe)(n).then(d=>{F.value=!1,history.back()}).catch(()=>{F.value=!1})})},A=()=>{history.back()},se=()=>{r.price_list.push({name:"",price:"0",unit:"次"})},de=n=>{r.price_list.splice(n,1)},ie=()=>{r.goods_sku_data.length>0?r.goods_sku_data.push({sku_no:"",sku_image:"",sku_name:"",price:"0",sku_unit:"次",min_buy:1,is_default:0}):r.goods_sku_data.push({sku_no:"",sku_image:"",sku_name:"",price:"0",sku_unit:"次",min_buy:1,is_default:1})},ue=n=>{r.goods_sku_data.splice(n,1)},ne=(n,o)=>{for(const d in r.goods_sku_data)d==o?r.goods_sku_data[d].is_default=n:r.goods_sku_data[d].is_default=0};return(n,o)=>{const d=xe,f=we,p=Ue,i=Pe,N=Ee,H=je,V=Ne,$=$e,pe=Ce,me=Te,D=Me,G=Fe,J=Ie,g=Se,w=Re,Q=qe,_e=ke("QuestionFilled"),ce=De,fe=Ge,z=Oe,ge=Be;return b(),v("div",Xe,[e(f,{class:"card !border-none mb-[15px]",shadow:"never"},{default:s(()=>[e(d,{content:a(E)?a(t)("editGoods"):a(t)("addGoods"),icon:n.ArrowLeft,onBack:A},null,8,["content","icon"])]),_:1}),e(f,{class:"box-card !border-none",shadow:"never"},{default:s(()=>[e(ge,{modelValue:I.value,"onUpdate:modelValue":o[27]||(o[27]=l=>I.value=l)},{default:s(()=>[e(G,{label:a(t)("basicInfoTab"),name:"basic"},{default:s(()=>[e(D,{model:r,"label-width":"100px",ref_key:"basicFormRef",ref:Z,rules:a(q),class:"page-form"},{default:s(()=>[e(i,{label:a(t)("goodsName"),prop:"goods_name"},{default:s(()=>[e(p,{modelValue:r.goods_name,"onUpdate:modelValue":o[0]||(o[0]=l=>r.goods_name=l),modelModifiers:{trim:!0},clearable:"",placeholder:a(t)("goodsNamePlaceholder"),class:"input-width",maxlength:"60"},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),e(i,{label:a(t)("categoryId"),prop:"goods_category"},{default:s(()=>[e(N,{class:"input-width",modelValue:r.goods_category,"onUpdate:modelValue":o[1]||(o[1]=l=>r.goods_category=l),options:S,props:{value:"value",label:"label",emitPath:!1}},null,8,["modelValue","options"])]),_:1},8,["label"]),e(i,{label:a(t)("goodsImage"),prop:"goods_image"},{default:s(()=>[_("div",null,[e(H,{modelValue:r.goods_image,"onUpdate:modelValue":o[2]||(o[2]=l=>r.goods_image=l),limit:6},null,8,["modelValue"]),Ye])]),_:1},8,["label"]),e(i,{label:a(t)("virtualSaleNum"),prop:"virtual_sale_num"},{default:s(()=>[e(p,{modelValue:r.virtually_sale,"onUpdate:modelValue":o[3]||(o[3]=l=>r.virtually_sale=l),modelModifiers:{trim:!0},clearable:"",placeholder:a(t)("virtualSaleNumPlaceholder"),class:"input-width"},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),e(i,{label:a(t)("sort"),prop:"sort"},{default:s(()=>[e(p,{modelValue:r.sort,"onUpdate:modelValue":o[4]||(o[4]=l=>r.sort=l),modelModifiers:{trim:!0},clearable:"",placeholder:a(t)("sortPlaceholder"),class:"input-width","show-word-limit":"",maxlength:"10"},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),e(i,{label:a(t)("status")},{default:s(()=>[e($,{modelValue:r.status,"onUpdate:modelValue":o[5]||(o[5]=l=>r.status=l),class:"ml-4"},{default:s(()=>[e(V,{label:"1"},{default:s(()=>[c(m(a(t)("up")),1)]),_:1}),e(V,{label:"0"},{default:s(()=>[c(m(a(t)("down")),1)]),_:1})]),_:1},8,["modelValue"])]),_:1},8,["label"]),e(i,{label:a(t)("poster")},{default:s(()=>[e(me,{modelValue:r.poster_id,"onUpdate:modelValue":o[6]||(o[6]=l=>r.poster_id=l),placeholder:a(t)("posterPlaceholder"),clearable:""},{default:s(()=>[(b(!0),v(C,null,ve(R,l=>(b(),T(pe,{key:l.id,label:l.name,value:l.id},null,8,["label","value"]))),128))]),_:1},8,["modelValue","placeholder"]),_("div",el,[_("span",{class:"cursor-pointer text-primary mr-[10px]",onClick:o[7]||(o[7]=l=>L(!0))},m(a(t)("refresh")),1),_("span",{class:"cursor-pointer text-primary",onClick:oe},m(a(t)("addGoodsPoster")),1)])]),_:1},8,["label"])]),_:1},8,["model","rules"])]),_:1},8,["label"]),e(G,{label:a(t)("goodsChargeTab"),name:"goods_charge"},{default:s(()=>[e(D,{model:r,"label-width":"100px",ref_key:"goodsFormRef",ref:O,rules:a(q),class:"page-form"},{default:s(()=>[e(i,{label:a(t)("goodsModel")},{default:s(()=>[e($,{modelValue:r.buy_type,"onUpdate:modelValue":o[8]||(o[8]=l=>r.buy_type=l),class:"ml-4"},{default:s(()=>[e(V,{label:"reservation"},{default:s(()=>[c(m(a(t)("order")),1)]),_:1}),e(V,{label:"buy"},{default:s(()=>[c(m(a(t)("fixedPrice")),1)]),_:1})]),_:1},8,["modelValue"])]),_:1},8,["label"]),r.buy_type=="reservation"?(b(),v(C,{key:0},[e(i,{label:a(t)("freeReservation"),prop:"free"},{default:s(()=>[e(J,{modelValue:r.free,"onUpdate:modelValue":o[9]||(o[9]=l=>r.free=l)},null,8,["modelValue"])]),_:1},8,["label"]),r.free?h("",!0):(b(),T(i,{key:0,label:a(t)("orderPrice"),prop:"price"},{default:s(()=>[_("div",null,[e(p,{modelValue:r.price,"onUpdate:modelValue":o[10]||(o[10]=l=>r.price=l),modelModifiers:{trim:!0},clearable:"",class:"!w-[160px]",onKeyup:o[11]||(o[11]=l=>a(M)(l))},{append:s(()=>[ll]),_:1},8,["modelValue"]),ol])]),_:1},8,["label"])),e(i,{label:a(t)("priceList")},{default:s(()=>[_("div",tl,[e(Q,{data:r.price_list,style:{width:"800px"}},{default:s(()=>[e(g,{label:a(t)("productName"),class:"ml-[20px]"},{default:s(l=>[e(i,{prop:`price_list[${l.$index}].name`,rules:[{required:!0,message:a(t)("productNamePlaceholder"),trigger:"blur"}]},{default:s(()=>[e(p,{modelValue:l.row.name,"onUpdate:modelValue":u=>l.row.name=u,modelModifiers:{trim:!0},clearable:"",placeholder:a(t)("productNamePlaceholder"),class:"!w-[200px]",maxlength:"60"},null,8,["modelValue","onUpdate:modelValue","placeholder"])]),_:2},1032,["prop","rules"])]),_:1},8,["label"]),e(g,{label:a(t)("productPrice"),width:"200"},{default:s(l=>[e(i,{prop:`price_list[${l.$index}].price`,rules:[{trigger:"blur",validator:(u,k,y)=>{k==""?y(a(t)("productPricePlaceholder")):k<0?y(a(t)("priceNotZeroTips")):y()}}]},{default:s(()=>[e(p,{modelValue:l.row.price,"onUpdate:modelValue":u=>l.row.price=u,modelModifiers:{trim:!0},clearable:"",class:"!w-[160px]",onKeyup:o[12]||(o[12]=u=>a(M)(u))},{append:s(()=>[al]),_:2},1032,["modelValue","onUpdate:modelValue"])]),_:2},1032,["prop","rules"])]),_:1},8,["label"]),e(g,{label:a(t)("productUnit"),width:"200"},{default:s(l=>[e(i,{prop:`price_list[${l.$index}].unit`,rules:[{required:!0,message:a(t)("productUnitTips"),trigger:"blur"}]},{default:s(()=>[e(p,{modelValue:l.row.unit,"onUpdate:modelValue":u=>l.row.unit=u,modelModifiers:{trim:!0},clearable:"",placeholder:a(t)("productUnitPlaceholder"),class:"!w-[160px]"},null,8,["modelValue","onUpdate:modelValue","placeholder"])]),_:2},1032,["prop","rules"])]),_:1},8,["label"]),e(g,{label:a(t)("operations"),width:"150"},{default:s(l=>[e(w,{link:"",type:"primary",onClick:W(u=>de(l.$index),["prevent"])},{default:s(()=>[c(m(a(t)("delete")),1)]),_:2},1032,["onClick"])]),_:1},8,["label"])]),_:1},8,["data"]),e(w,{type:"primary",onClick:o[13]||(o[13]=l=>se()),class:"mt-[15px]"},{default:s(()=>[c(m(a(t)("addItem")),1)]),_:1}),rl])]),_:1},8,["label"])],64)):h("",!0),r.buy_type=="buy"?(b(),v(C,{key:1},[e(i,{label:a(t)("goodsSpecification")},{default:s(()=>[e($,{modelValue:r.spec_type,"onUpdate:modelValue":o[14]||(o[14]=l=>r.spec_type=l),class:"ml-4"},{default:s(()=>[e(V,{label:"single"},{default:s(()=>[c(m(a(t)("singleSpecification")),1)]),_:1}),e(V,{label:"multi"},{default:s(()=>[c(m(a(t)("moreSpecification")),1)]),_:1})]),_:1},8,["modelValue"])]),_:1},8,["label"]),r.spec_type=="single"?(b(),v(C,{key:0},[e(i,{label:a(t)("goodsPrice"),prop:"price"},{default:s(()=>[e(p,{modelValue:r.price,"onUpdate:modelValue":o[15]||(o[15]=l=>r.price=l),modelModifiers:{trim:!0},clearable:"",class:"!w-[160px]",onKeyup:o[16]||(o[16]=l=>a(M)(l))},{append:s(()=>[sl]),_:1},8,["modelValue"])]),_:1},8,["label"]),e(i,{label:a(t)("skuNo"),prop:"sku_no"},{default:s(()=>[e(p,{modelValue:r.sku_no,"onUpdate:modelValue":o[17]||(o[17]=l=>r.sku_no=l),modelModifiers:{trim:!0},clearable:"",placeholder:a(t)("skuNoPlaceholder"),class:"!w-[160px]"},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),e(i,{label:a(t)("goodsUnit"),prop:"sku_unit"},{default:s(()=>[e(p,{modelValue:r.sku_unit,"onUpdate:modelValue":o[18]||(o[18]=l=>r.sku_unit=l),modelModifiers:{trim:!0},clearable:"",placeholder:a(t)("productUnitPlaceholder"),class:"!w-[160px]"},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),e(i,{label:a(t)("miniGoods"),prop:"min_buy"},{default:s(()=>[e(p,{modelValue:r.min_buy,"onUpdate:modelValue":o[19]||(o[19]=l=>r.min_buy=l),modelModifiers:{trim:!0},clearable:"",placeholder:a(t)("miniGoodsPlaceholder"),class:"!w-[160px]",onKeyup:o[20]||(o[20]=l=>a(X)(l))},null,8,["modelValue","placeholder"])]),_:1},8,["label"])],64)):h("",!0),r.spec_type=="multi"?(b(),T(i,{key:1},{default:s(()=>[_("div",dl,[e(Q,{data:r.goods_sku_data,style:{width:"1500px"}},{default:s(()=>[e(g,{label:a(t)("productName")},{default:s(l=>[e(i,{prop:`goods_sku_data[${l.$index}].sku_name`,rules:[{required:!0,message:a(t)("productNamePlaceholder"),trigger:"blur"}]},{default:s(()=>[e(p,{modelValue:l.row.sku_name,"onUpdate:modelValue":u=>l.row.sku_name=u,modelModifiers:{trim:!0},clearable:"",placeholder:a(t)("productNamePlaceholder"),class:"!w-[200px]",maxlength:"60"},null,8,["modelValue","onUpdate:modelValue","placeholder"])]),_:2},1032,["prop","rules"])]),_:1},8,["label"]),e(g,{label:"图片",width:"100"},{default:s(l=>[e(H,{modelValue:l.row.sku_image,"onUpdate:modelValue":u=>l.row.sku_image=u,limit:1,width:"50px",height:"50px"},null,8,["modelValue","onUpdate:modelValue"])]),_:1}),e(g,{label:a(t)("goodsPrice"),width:"200"},{default:s(l=>[e(i,{prop:`goods_sku_data[${l.$index}].price`,rules:[{trigger:"blur",validator:(u,k,y)=>{k===""?y(a(t)("goodsPricePlaceholder")):k<=0?y(a(t)("goodsPriceNotZeroTips")):y()}}]},{default:s(()=>[e(p,{modelValue:l.row.price,"onUpdate:modelValue":u=>l.row.price=u,modelModifiers:{trim:!0},clearable:"",class:"!w-[160px]",onKeyup:o[21]||(o[21]=u=>a(M)(u))},{append:s(()=>[il]),_:2},1032,["modelValue","onUpdate:modelValue"])]),_:2},1032,["prop","rules"])]),_:1},8,["label"]),e(g,{label:a(t)("productUnit"),width:"200"},{default:s(l=>[e(i,{prop:`goods_sku_data[${l.$index}].sku_unit`,rules:[{required:!0,message:a(t)("productUnitTips"),trigger:"blur"}]},{default:s(()=>[e(p,{modelValue:l.row.sku_unit,"onUpdate:modelValue":u=>l.row.sku_unit=u,modelModifiers:{trim:!0},clearable:"",placeholder:a(t)("productUnitPlaceholder"),class:"!w-[160px]"},null,8,["modelValue","onUpdate:modelValue","placeholder"])]),_:2},1032,["prop","rules"])]),_:1},8,["label"]),e(g,{width:"200"},{header:s(()=>[_("div",ul,[c(m(a(t)("miniGoods"))+" ",1),e(fe,{class:"box-item",effect:"light",content:a(t)("miniServiceTips"),placement:"bottom"},{default:s(()=>[e(ce,{class:"cursor-pointer"},{default:s(()=>[e(_e)]),_:1})]),_:1},8,["content"])])]),default:s(l=>[e(i,{prop:`goods_sku_data[${l.$index}].min_buy`,rules:[{required:!0,message:a(t)("miniGoodsPlaceholder"),trigger:"blur"},{trigger:"blur",validator:(u,k,y)=>{k<=0?y(a(t)("minBuyNotZeroTips")):y()}}]},{default:s(()=>[e(p,{modelValue:l.row.min_buy,"onUpdate:modelValue":u=>l.row.min_buy=u,modelModifiers:{trim:!0},clearable:"",placeholder:a(t)("miniGoodsPlaceholder"),class:"!w-[160px]",onKeyup:o[22]||(o[22]=u=>a(X)(u))},null,8,["modelValue","onUpdate:modelValue","placeholder"])]),_:2},1032,["prop","rules"])]),_:1}),e(g,{label:a(t)("skuNo"),class:"ml-[20px]"},{default:s(l=>[e(i,{prop:`goods_sku_data[${l.$index}].sku_no`},{default:s(()=>[e(p,{modelValue:l.row.sku_no,"onUpdate:modelValue":u=>l.row.sku_no=u,modelModifiers:{trim:!0},clearable:"",placeholder:a(t)("skuNoPlaceholder"),class:"!w-[200px]"},null,8,["modelValue","onUpdate:modelValue","placeholder"])]),_:2},1032,["prop"])]),_:1},8,["label"]),e(g,{label:"默认规格",width:"200"},{default:s(l=>[e(i,null,{default:s(()=>[e(J,{modelValue:l.row.is_default,"onUpdate:modelValue":u=>l.row.is_default=u,"active-value":1,"inactive-value":0,onChange:u=>ne(u,l.$index)},null,8,["modelValue","onUpdate:modelValue","onChange"])]),_:2},1024)]),_:1}),e(g,{label:a(t)("operations"),width:"150"},{default:s(l=>[e(w,{link:"",type:"primary",onClick:W(u=>ue(l.$index),["prevent"])},{default:s(()=>[c(m(a(t)("delete")),1)]),_:2},1032,["onClick"])]),_:1},8,["label"])]),_:1},8,["data"]),e(w,{type:"primary",onClick:o[23]||(o[23]=l=>ie()),class:"mt-[15px]"},{default:s(()=>[c(m(a(t)("addspec")),1)]),_:1})])]),_:1})):h("",!0)],64)):h("",!0),r.buy_type=="buy"?(b(),T(i,{key:2,label:a(t)("memberDiscount")},{default:s(()=>[_("div",null,[e($,{modelValue:r.member_discount,"onUpdate:modelValue":o[24]||(o[24]=l=>r.member_discount=l)},{default:s(()=>[e(V,{label:""},{default:s(()=>[c(m(a(t)("nonparticipation")),1)]),_:1}),e(V,{label:"discount"},{default:s(()=>[c(m(a(t)("discount")),1)]),_:1}),e(V,{label:"fixed_price"},{default:s(()=>[c(m(a(t)("goodsFixedPrice")),1)]),_:1})]),_:1},8,["modelValue"]),r.member_discount=="discount"?(b(),v("div",nl,m(a(t)("discountHint")),1)):h("",!0),r.member_discount=="fixed_price"?(b(),v("div",pl,m(a(t)("fixedPriceHint")),1)):h("",!0)])]),_:1},8,["label"])):h("",!0)]),_:1},8,["model","rules"])]),_:1},8,["label"]),e(G,{label:a(t)("goodsDescTab"),name:"detail"},{default:s(()=>[e(D,{model:r,"label-width":"100px",ref_key:"detailFormRef",ref:j,rules:a(q),class:"page-form"},{default:s(()=>[e(i,{label:a(t)("goodsContent")},{default:s(()=>[e(z,{modelValue:r.goods_content,"onUpdate:modelValue":o[25]||(o[25]=l=>r.goods_content=l)},null,8,["modelValue"])]),_:1},8,["label"]),e(i,{label:a(t)("buyInfo")},{default:s(()=>[e(z,{modelValue:r.buy_info,"onUpdate:modelValue":o[26]||(o[26]=l=>r.buy_info=l)},null,8,["modelValue"])]),_:1},8,["label"])]),_:1},8,["model","rules"])]),_:1},8,["label"])]),_:1},8,["modelValue"])]),_:1}),_("div",ml,[_("div",_l,[e(w,{type:"primary",onClick:o[28]||(o[28]=l=>re())},{default:s(()=>[c(m(a(t)("save")),1)]),_:1}),e(w,{onClick:o[29]||(o[29]=l=>A())},{default:s(()=>[c(m(a(t)("cancel")),1)]),_:1})])])])}}});const po=We(cl,[["__scopeId","data-v-b85f9fb6"]]);export{po as default};
