import{d as ae,x as se,f as re,r as V,n as ne,l as de,q as e,aJ as ue,R as pe,h as v,c as k,e as a,w as n,u as l,aP as me,a as d,t as c,s as x,A as J,B as N,i as P,aI as ce,U as y,aQ as _e,a7 as fe,J as ge,L as ve,K as he,av as be,E as xe,ac as ye,ad as Ve,at as we,au as Te,M as ke,Y as Ne,p as Ue,g as Ee}from"./index-6f32d09b.js";/* empty css                   *//* empty css                */import{_ as Se}from"./index.vue_vue_type_script_setup_true_lang-edd497b7.js";/* empty css                       *//* empty css                 *//* empty css                 *//* empty css                    */import"./el-tooltip-4ed993c7.js";/* empty css                  *//* empty css                     *//* empty css                        *//* empty css               *//* empty css                  */import Pe from"./index-4df26bee.js";/* empty css                 */import"./el-form-item-4ed993c7.js";/* empty css                 *//* empty css                        *//* empty css                *//* empty css                   *//* empty css                       */import{_ as q}from"./goods_default-665e448a.js";import{x as $e,y as Ce}from"./marketing-cb631817.js";import{_ as Ie}from"./_plugin-vue_export-helper-c27b6911.js";import"./index.vue_vue_type_style_index_0_lang-972988e5.js";/* empty css                  *//* empty css                   */import"./attachment-503e95ee.js";import"./index.vue_vue_type_script_setup_true_lang-bee7eaa7.js";/* empty css                  *//* empty css                  *//* empty css                      *//* empty css               *//* empty css               *//* empty css                    *//* empty css                    */import"./el-dropdown-item-4ed993c7.js";import"./index.vue_vue_type_script_setup_true_lang-ad575143.js";/* empty css                   */import"./index.vue_vue_type_script_setup_true_lang-0724e2f9.js";import"./sortable.esm-be94e56d.js";const B=I=>(Ue("data-v-3566567b"),I=I(),Ee(),I),Me={class:"main-container"},qe={class:"panel-title !text-sm"},Be={key:0,class:"flex min-w-[512px] relative border-[1px] border-[#e7e7e7] border-solid mt-[16px]"},Re={class:"min-w-[78px] h-[78px] flex items-center justify-center"},Fe=B(()=>d("div",{class:"image-slot"},[d("img",{class:"w-[78px] h-[78px]",src:q})],-1)),Oe={key:1,class:"w-[78px] h-[78px]",src:q,fit:"contain"},je={class:"flex-1 py-[5px] pl-[10px] pr-[30px]"},De={class:"text-[14px]"},Je={class:"text-[14px] !text-[var(--el-color-primary)]"},Ae={class:"panel-title !text-sm"},ze={class:"w-full sku_list"},Le={class:"flex items-center mb-[15px]"},Ge={class:"flex items-center cursor-pointer"},He={class:"min-w-[60px] h-[60px] flex items-center justify-center"},Ke=B(()=>d("div",{class:"image-slot"},[d("img",{class:"w-[60px] h-[60px]",src:q})],-1)),Qe={key:1,class:"w-[70px] h-[60px]",src:q,fit:"contain"},Ye={class:"ml-2"},We=["title"],Xe={key:1},Ze={key:1},el={class:"flex justify-center"},ll={key:1},tl={key:2,class:"mx-[20px]"},ol={class:"panel-title !text-sm"},il={class:"flex justify-center"},al=B(()=>d("span",{class:"mx-[20px]"},"+",-1)),sl={class:"panel-title !text-sm"},rl={class:"flex justify-center"},nl=B(()=>d("span",{class:"mx-[20px]"},"+",-1)),dl={class:"panel-title !text-sm"},ul={class:"fixed-footer-wrap"},pl={class:"fixed-footer"},ml=ae({__name:"goods_edit",setup(I){const R=se(),O=re(),A=R.meta.title,w=V(!0);ne([{name:"商品",type:"goods"}]);const o=V({...{type:"goods",names:"",title:"",image:"",goods_info:{},coupon_ids:[],product_list:[],stock:"",limit_num:"",point:"",price:"",balance:"",isBalance:1,content:""}}),U=V(),h={required:/[\S]+/,number:/^\d{0,10}$/,digit:/^\d{0,10}(.?\d{0,2})$/,special:/^\d{0,10}(.?\d{0,3})$/},z=de(()=>({names:[{required:!0,message:e("goodsNamePlaceholder"),trigger:"blur"}],image:[{required:!0,message:e("imagePlaceholder"),trigger:"change"}],coupon_ids:[{required:!0,message:e("couponSelectPlaceholder"),trigger:"change"}],product_list:[{required:!0,message:e("goodsSkuPlaceholder"),trigger:"change"}]})),L=p=>{w.value=!0,$e(p).then(r=>{o.value=Object.assign(o.value,r.data),o.value.type=="goods"?o.value.product_list=r.data.goods_list:o.value.type=="coupon"?(o.value.product_list=[],o.value.product_list.push(ce(o.value.coupon_info))):(o.value.balance=o.value.product_detail[0].balance?o.value.product_detail[0].balance:o.value.product_detail[0].money,o.value.isBalance=o.value.product_detail[0].balance?1:0),w.value=!1}).catch(()=>{w.value=!1})};ue(()=>{R.query.id&&L(Number(R.query.id))}),V();const G=p=>{if(p.is_enabled=p.is_enabled?0:1,o.value.product_list.every(r=>r.is_enabled===0)){p.is_enabled=1,y({type:"warning",message:`${e("noEnabledTip")}`});return}p.stock="",p.limit_num="",p.point="",p.price=""},u=V({stock:"",limit_num:"",point:"",price:""}),$=V(),C=V(!1),H=p=>{C.value=!1,F.value.toggleAllSelection()},F=V(),E=V([]),K=p=>{E.value=p,$.value=!1,E.value.length>0&&E.value.length<o.value.product_list.length?C.value=!0:C.value=!1,E.value.length==o.value.product_list.length&&($.value=!0)},Q=()=>{if(!E.value.length){y({type:"warning",message:`${e("batchEmptySelectedGoodsTips")}`});return}if(u.value.stock){if(isNaN(Number(u.value.stock))||!h.number.test(u.value.stock)){y({type:"warning",message:`${e("stockTips")}`});return}else if(u.value.stock<=0){y({type:"warning",message:`${e("stockTipsTwo")}`});return}}if(u.value.limit_num){if(isNaN(u.value.limit_num)||!h.number.test(u.value.limit_num)){y({type:"warning",message:`${e("limitTips")}`});return}else if(u.value.limit_num<=0){y({type:"warning",message:`${e("limitTipsTwo")}`});return}}if(u.value.point){if(isNaN(u.value.point)||!h.number.test(u.value.point)){y({type:"warning",message:`${e("pointTips")}`});return}else if(u.value.point<=0){y({type:"warning",message:`${e("pointTipsTwo")}`});return}}if(u.value.price){if(isNaN(u.value.price)||!h.digit.test(u.value.price)){y({type:"warning",message:`${e("moneyTips")}`});return}else if(u.value.price<=0){y({type:"warning",message:`${e("moneyTipsTwo")}`});return}}o.value.product_list.forEach((p,r)=>{E.value.forEach(b=>{b.sku_id===p.sku_id&&(u.value.stock&&(p.stock=u.value.stock+""),u.value.limit_num&&(p.limit_num=u.value.limit_num+""),u.value.point&&(p.point=u.value.point+""),u.value.price&&(p.price=u.value.price+""),U.value&&(U.value.validateField("product_list."+r+".stock"),U.value.validateField("product_list."+r+".limit_num"),U.value.validateField("product_list."+r+".point"),U.value.validateField("product_list."+r+".price")))})}),C.value=!1,$.value=!1,u.value={stock:"",limit_num:"",point:"",price:""},F.value.clearSelection()},Y=async p=>{w.value||!p||await p.validate(async r=>{r&&(w.value=!0,o.value.type=="goods"?o.value.product_detail=JSON.stringify(o.value.product_list.map(b=>({goods_id:b.goods_id,sku_id:b.sku_id,point:b.point,price:b.price,limit_num:b.limit_num,stock:b.stock,is_enabled:b.is_enabled})).filter(b=>b.is_enabled===1)):o.value.type=="coupon"?o.value.product_detail=JSON.stringify(o.value.product_list.map(b=>({coupon_id:b.id}))):o.value.isBalance?o.value.product_detail=JSON.stringify([{balance:o.value.balance}]):o.value.product_detail=JSON.stringify([{money:o.value.balance}]),Ce(o.value).then(b=>{w.value=!1,O.push("/phone_shop/marketing/exchange/goods_list")}).catch(()=>{w.value=!1}))})},W=()=>{O.push("/phone_shop/marketing/exchange/goods_list")};return(p,r)=>{const b=_e,S=fe,j=ge,m=ve,g=he,X=Pe,Z=be,M=xe,T=ye,ee=Ve,D=we,le=Te,te=Se,oe=ke,ie=Ne;return pe((v(),k("div",Me,[a(S,{class:"card !border-none",shadow:"never"},{default:n(()=>[a(b,{content:l(A),icon:l(me),onBack:r[0]||(r[0]=t=>p.$router.back())},null,8,["content","icon"])]),_:1}),a(oe,{class:"page-form mt-[15px]",model:o.value,"label-width":"120px",ref_key:"formRef",ref:U,rules:l(z)},{default:n(()=>[a(S,{class:"box-card !border-none",shadow:"never"},{default:n(()=>[d("h3",qe,c(l(e)("baseInfo")),1),o.value.type=="goods"?(v(),x(m,{key:0,label:l(e)("goodsSelect")},{default:n(()=>[Object.keys(o.value.goods_info).length?(v(),k("div",Be,[d("div",Re,[o.value.goods_info.goods_cover?(v(),x(j,{key:0,class:"w-[78px] h-[78px]",src:l(J)(o.value.goods_info.goods_cover),fit:"contain"},{error:n(()=>[Fe]),_:1},8,["src"])):(v(),k("img",Oe))]),d("div",je,[d("div",De,c(o.value.goods_info.goods_name),1),d("div",Je,c(o.value.goods_info.goods_price),1)])])):N("",!0)]),_:1},8,["label"])):N("",!0),a(m,{label:l(e)("goodsName"),prop:"names"},{default:n(()=>[a(g,{modelValue:o.value.names,"onUpdate:modelValue":r[1]||(r[1]=t=>o.value.names=t),type:"textarea",clearable:"",placeholder:l(e)("goodsNamePlaceholder"),class:"!w-[512px]","show-word-limit":"",maxlength:60},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),a(m,{label:l(e)("goodsTitle")},{default:n(()=>[a(g,{modelValue:o.value.title,"onUpdate:modelValue":r[2]||(r[2]=t=>o.value.title=t),type:"textarea",clearable:"",placeholder:l(e)("goodsTitlePlaceholder"),class:"!w-[512px]","show-word-limit":"",maxlength:60},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),a(m,{label:l(e)("image"),prop:"image"},{default:n(()=>[a(X,{modelValue:o.value.image,"onUpdate:modelValue":r[3]||(r[3]=t=>o.value.image=t),limit:6},null,8,["modelValue"])]),_:1},8,["label"])]),_:1}),o.value.type=="goods"?(v(),x(S,{key:0,class:"box-card !border-none",shadow:"never"},{default:n(()=>[d("h3",Ae,c(l(e)("redemptionSettings")),1),o.value.product_list.length?(v(),x(m,{key:0},{default:n(()=>[d("div",ze,[d("div",Le,[a(Z,{modelValue:$.value,"onUpdate:modelValue":r[4]||(r[4]=t=>$.value=t),size:"large",class:"!mr-[15px]",onChange:H,indeterminate:C.value},{default:n(()=>[d("span",null,"已选"+c(E.value.length)+"项",1)]),_:1},8,["modelValue","indeterminate"]),d("label",null,c(l(e)("batchOperation")),1),a(g,{modelValue:u.value.stock,"onUpdate:modelValue":r[5]||(r[5]=t=>u.value.stock=t),modelModifiers:{trim:!0},clearable:"",placeholder:l(e)("stock"),class:"!w-[130px] ml-[10px]",maxlength:"8"},null,8,["modelValue","placeholder"]),a(g,{modelValue:u.value.limit_num,"onUpdate:modelValue":r[6]||(r[6]=t=>u.value.limit_num=t),modelModifiers:{trim:!0},clearable:"",placeholder:l(e)("limit"),class:"!w-[130px] ml-[10px]",maxlength:"8"},null,8,["modelValue","placeholder"]),a(g,{modelValue:u.value.point,"onUpdate:modelValue":r[7]||(r[7]=t=>u.value.point=t),modelModifiers:{trim:!0},clearable:"",placeholder:l(e)("integralUnit"),class:"!w-[130px] ml-[10px]",maxlength:"8"},null,8,["modelValue","placeholder"]),a(g,{modelValue:u.value.price,"onUpdate:modelValue":r[8]||(r[8]=t=>u.value.price=t),modelModifiers:{trim:!0},clearable:"",placeholder:l(e)("newPrice"),class:"!w-[130px] ml-[10px]",maxlength:"8"},null,8,["modelValue","placeholder"]),a(M,{class:"ml-[10px]",type:"primary",onClick:Q},{default:n(()=>[P(c(l(e)("confirm")),1)]),_:1})]),a(ee,{class:"!max-w-[100%]",data:o.value.product_list,size:"large",ref_key:"productListTableRef",ref:F,onSelectionChange:K},{empty:n(()=>[d("span",null,c(l(e)("emptyData")),1)]),default:n(()=>[a(T,{type:"selection",width:"55"}),a(T,{label:l(e)("goodsSelectPopupGoodsInfo"),"min-width":"300"},{default:n(({row:t})=>{var s;return[d("div",Ge,[d("div",He,[t.sku_image?(v(),x(j,{key:0,class:"w-[60px] h-[60px]",src:l(J)(t.sku_image),fit:"contain"},{error:n(()=>[Ke]),_:2},1032,["src"])):(v(),k("img",Qe))]),d("div",Ye,[d("span",{title:t.sku_name,class:"multi-hidden"},c(t.sku_name||((s=t.goods)==null?void 0:s.goods_name)),9,We)])])]}),_:1},8,["label"]),a(T,{prop:"goods_price",label:l(e)("price"),"min-width":"170"},null,8,["label"]),a(T,{prop:"goods_stock",label:l(e)("goodsStock"),"min-width":"170"},null,8,["label"]),a(T,{label:l(e)("stock"),"min-width":"200"},{default:n(({row:t,$index:s})=>[t.is_enabled?(v(),x(m,{key:0,prop:"product_list."+s+".stock",rules:[{trigger:"blur",validator:(i,_,f)=>{_.length==0?f(l(e)("stockPlaceholder")):isNaN(_)||!h.number.test(_)?f(l(e)("stockTips")):_<=0?f(l(e)("stockTipsTwo")):parseInt(_)>parseInt(t.goods_stock)?f(l(e)("stockTipsThree")):f()}}],class:"sku-form-item-wrap"},{default:n(()=>[a(g,{modelValue:t.stock,"onUpdate:modelValue":i=>t.stock=i,modelModifiers:{trim:!0},class:"!w-[200px]",clearable:"",placeholder:"0",maxlength:"8"},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1032,["prop","rules"])):(v(),k("span",Xe,"--"))]),_:1},8,["label"]),a(T,{label:l(e)("limit"),"min-width":"200"},{default:n(({row:t,$index:s})=>[t.is_enabled?(v(),x(m,{key:0,prop:"product_list."+s+".limit_num",rules:[{trigger:"blur",validator:(i,_,f)=>{_.length==0?f(l(e)("limitPlaceholder")):isNaN(_)||!h.number.test(_)?f(l(e)("limitTips")):_<=0?f(l(e)("limitTipsTwo")):f()}}],class:"sku-form-item-wrap"},{default:n(()=>[a(g,{modelValue:t.limit_num,"onUpdate:modelValue":i=>t.limit_num=i,modelModifiers:{trim:!0},class:"!w-[200px]",clearable:"",placeholder:"0",maxlength:"8"},{append:n(()=>[d("span",null,c(l(e)("limitUnit")),1)]),_:2},1032,["modelValue","onUpdate:modelValue"])]),_:2},1032,["prop","rules"])):(v(),k("span",Ze,"--"))]),_:1},8,["label"]),a(T,{label:l(e)("money"),"min-width":"550",align:"center"},{default:n(({row:t,$index:s})=>[d("div",el,[t.is_enabled?(v(),x(m,{key:0,prop:"product_list."+s+".point",rules:[{trigger:"blur",validator:(i,_,f)=>{_.length==0?f(l(e)("pointPlaceholder")):isNaN(_)||!h.number.test(_)?f(l(e)("pointTips")):_<=0?f(l(e)("pointTipsTwo")):f()}}],class:"sku-form-item-wrap"},{default:n(()=>[a(g,{modelValue:t.point,"onUpdate:modelValue":i=>t.point=i,modelModifiers:{trim:!0},class:"!w-[200px]",clearable:"",placeholder:"0",maxlength:"8"},{append:n(()=>[d("span",null,c(l(e)("integralUnit")),1)]),_:2},1032,["modelValue","onUpdate:modelValue"])]),_:2},1032,["prop","rules"])):(v(),k("span",ll,"--")),t.is_enabled?(v(),k("span",tl,"+")):N("",!0),t.is_enabled?(v(),x(m,{key:3,prop:"product_list."+s+".price",rules:[{trigger:"blur",validator:(i,_,f)=>{_.length?isNaN(_)||!h.digit.test(_)?f(l(e)("moneyTips")):_<0?f(l(e)("moneyTipsTwo")):f():f()}}],class:"sku-form-item-wrap"},{default:n(()=>[a(g,{modelValue:t.price,"onUpdate:modelValue":i=>t.price=i,modelModifiers:{trim:!0},class:"!w-[200px]",clearable:"",placeholder:"0.00",maxlength:"8"},{append:n(()=>[d("span",null,c(l(e)("prickUnit")),1)]),_:2},1032,["modelValue","onUpdate:modelValue"])]),_:2},1032,["prop","rules"])):N("",!0)])]),_:1},8,["label"]),a(T,{label:l(e)("operation"),fixed:"right",align:"right","min-width":"160"},{default:n(({row:t})=>[a(M,{type:"primary",link:"",onClick:s=>G(t)},{default:n(()=>[P(c(t.is_enabled?l(e)("noEnabled"):l(e)("enabled")),1)]),_:2},1032,["onClick"])]),_:1},8,["label"])]),_:1},8,["data"])])]),_:1})):N("",!0)]),_:1})):N("",!0),o.value.type=="coupon"&&o.value.product_list.length?(v(),x(S,{key:1,class:"box-card !border-none",shadow:"never"},{default:n(()=>[d("h3",ol,c(l(e)("redemptionSettings")),1),a(m,{label:l(e)("stock"),prop:"stock",rules:[{required:!0,trigger:"blur",validator:(t,s,i)=>{s.length==0?i(l(e)("stockPlaceholder")):isNaN(s)||!h.number.test(s)?i(l(e)("stockTips")):s<=0?i(l(e)("stockTipsTwo")):o.value.product_list[0].remain_count!="-1"&&s>o.value.product_list[0].remain_count.remain_count?i(l(e)("stockTipsThree")):i()}}]},{default:n(()=>[a(g,{modelValue:o.value.stock,"onUpdate:modelValue":r[9]||(r[9]=t=>o.value.stock=t),clearable:"",placeholder:l(e)("stockPlaceholder"),class:"input-width"},null,8,["modelValue","placeholder"])]),_:1},8,["label","rules"]),a(m,{label:l(e)("limit"),prop:"limit_num",rules:[{trigger:"blur",validator:(t,s,i)=>{s?isNaN(s)||!h.number.test(s)?i(l(e)("limitTips")):s<=0?i(l(e)("limitTipsTwo")):i():i()}}]},{default:n(()=>[a(g,{modelValue:o.value.limit_num,"onUpdate:modelValue":r[10]||(r[10]=t=>o.value.limit_num=t),clearable:"",placeholder:l(e)("limitPlaceholder"),class:"input-width"},null,8,["modelValue","placeholder"])]),_:1},8,["label","rules"]),a(m,{label:l(e)("money"),required:""},{default:n(()=>[d("div",il,[a(m,{prop:"point",rules:[{trigger:"blur",validator:(t,s,i)=>{s.length==0?i(l(e)("pointPlaceholder")):s.length?isNaN(s)||!h.number.test(s)?i(l(e)("pointTips")):s<=0?i(l(e)("pointTipsTwo")):i():i()}}],class:"sku-form-item-wrap"},{default:n(()=>[a(g,{modelValue:o.value.point,"onUpdate:modelValue":r[11]||(r[11]=t=>o.value.point=t),modelModifiers:{trim:!0},class:"!w-[200px]",clearable:"",placeholder:"0",maxlength:"8"},{append:n(()=>[d("span",null,c(l(e)("integralUnit")),1)]),_:1},8,["modelValue"])]),_:1},8,["rules"]),al,a(m,{prop:"price",rules:[{trigger:"blur",validator:(t,s,i)=>{s.length?isNaN(s)||!h.digit.test(s)?i(l(e)("moneyTips")):s<0?i(l(e)("moneyTipsTwo")):i():i()}}],class:"sku-form-item-wrap"},{default:n(()=>[a(g,{modelValue:o.value.price,"onUpdate:modelValue":r[12]||(r[12]=t=>o.value.price=t),modelModifiers:{trim:!0},class:"!w-[200px]",clearable:"",placeholder:"0.00",maxlength:"8"},{append:n(()=>[d("span",null,c(l(e)("prickUnit")),1)]),_:1},8,["modelValue"])]),_:1},8,["rules"])])]),_:1},8,["label"])]),_:1})):N("",!0),o.value.type=="balance"?(v(),x(S,{key:2,class:"box-card !border-none",shadow:"never"},{default:n(()=>[d("h3",sl,c(l(e)("redemptionSettings")),1),a(m,{label:l(e)("balance"),prop:"balance",rules:[{required:!0,trigger:"blur",validator:(t,s,i)=>{s.length==0?i(l(e)("balancePlaceholder")):isNaN(s)||!h.digit.test(s)?i(l(e)("balanceTips")):s<=0?i(l(e)("balanceTipsTwo")):i()}}]},{default:n(()=>[a(g,{modelValue:o.value.balance,"onUpdate:modelValue":r[13]||(r[13]=t=>o.value.balance=t),clearable:"",placeholder:l(e)("balancePlaceholder"),class:"input-width"},null,8,["modelValue","placeholder"])]),_:1},8,["label","rules"]),a(m,{label:l(e)("balance")},{default:n(()=>[a(le,{modelValue:o.value.isBalance,"onUpdate:modelValue":r[14]||(r[14]=t=>o.value.isBalance=t),class:"ml-4"},{default:n(()=>[a(D,{label:0,size:"large"},{default:n(()=>[P("可提现余额")]),_:1}),a(D,{label:1,size:"large"},{default:n(()=>[P("不可提现余额")]),_:1})]),_:1},8,["modelValue"])]),_:1},8,["label"]),a(m,{label:l(e)("stock"),prop:"stock",rules:[{required:!0,trigger:"blur",validator:(t,s,i)=>{s.length==0?i(l(e)("stockPlaceholder")):isNaN(s)||!h.number.test(s)?i(l(e)("stockTips")):s<=0?i(l(e)("stockTipsTwo")):i()}}]},{default:n(()=>[a(g,{modelValue:o.value.stock,"onUpdate:modelValue":r[15]||(r[15]=t=>o.value.stock=t),clearable:"",placeholder:l(e)("stockPlaceholder"),class:"input-width"},null,8,["modelValue","placeholder"])]),_:1},8,["label","rules"]),a(m,{label:l(e)("limit"),prop:"limit_num",rules:[{trigger:"blur",validator:(t,s,i)=>{s?isNaN(s)||!h.number.test(s)?i(l(e)("limitTips")):s<=0?i(l(e)("limitTipsTwo")):i():i()}}]},{default:n(()=>[a(g,{modelValue:o.value.limit_num,"onUpdate:modelValue":r[16]||(r[16]=t=>o.value.limit_num=t),clearable:"",placeholder:l(e)("limitPlaceholder"),class:"input-width"},null,8,["modelValue","placeholder"])]),_:1},8,["label","rules"]),a(m,{label:l(e)("money"),required:""},{default:n(()=>[d("div",rl,[a(m,{prop:"point",rules:[{trigger:"blur",validator:(t,s,i)=>{s.length==0?i(l(e)("pointPlaceholder")):s.length?isNaN(s)||!h.number.test(s)?i(l(e)("pointTips")):s<=0?i(l(e)("pointTipsTwo")):i():i()}}],class:"sku-form-item-wrap"},{default:n(()=>[a(g,{modelValue:o.value.point,"onUpdate:modelValue":r[17]||(r[17]=t=>o.value.point=t),modelModifiers:{trim:!0},class:"!w-[200px]",clearable:"",placeholder:"0",maxlength:"8"},{append:n(()=>[d("span",null,c(l(e)("integralUnit")),1)]),_:1},8,["modelValue"])]),_:1},8,["rules"]),nl,a(m,{prop:"price",rules:[{trigger:"blur",validator:(t,s,i)=>{s.length?isNaN(s)||!h.digit.test(s)?i(l(e)("moneyTips")):s<0?i(l(e)("moneyTipsTwo")):i():i()}}],class:"sku-form-item-wrap"},{default:n(()=>[a(g,{modelValue:o.value.price,"onUpdate:modelValue":r[18]||(r[18]=t=>o.value.price=t),modelModifiers:{trim:!0},class:"!w-[200px]",clearable:"",placeholder:"0.00",maxlength:"8"},{append:n(()=>[d("span",null,c(l(e)("prickUnit")),1)]),_:1},8,["modelValue"])]),_:1},8,["rules"])])]),_:1},8,["label"])]),_:1})):N("",!0),a(S,{class:"box-card !border-none",shadow:"never"},{default:n(()=>[d("h3",dl,c(l(e)("goodsDetail")),1),a(m,null,{default:n(()=>[a(te,{modelValue:o.value.content,"onUpdate:modelValue":r[19]||(r[19]=t=>o.value.content=t),height:600,class:"!w-[512px]"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1},8,["model","rules"]),d("div",ul,[d("div",pl,[a(M,{type:"primary",onClick:r[20]||(r[20]=t=>Y(U.value))},{default:n(()=>[P(c(l(e)("save")),1)]),_:1}),a(M,{onClick:r[21]||(r[21]=t=>W())},{default:n(()=>[P(c(l(e)("cancel")),1)]),_:1})])])])),[[ie,w.value]])}}});const tt=Ie(ml,[["__scopeId","data-v-3566567b"]]);export{tt as default};
