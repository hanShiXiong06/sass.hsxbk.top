import{x as ge,f as ye,r as G,n as j,a$ as se,l as be,q as l,U as de,a3 as ne,d as he,a2 as ve,h as f,c as h,e as d,w as i,u as e,aP as xe,s as C,F as N,T as F,v as ce,a as u,t as m,B as L,i as b,R as V,b_ as M,a0 as w,cS as pe,c8 as ue,A as ke,aQ as De,a7 as Ve,L as we,K as Ee,ab as Re,aC as Te,at as Be,au as Pe,bO as je,av as Ce,c1 as Ne,aS as Se,a1 as Ge,M as Ue,ax as Ie,ac as Fe,ad as Le,J as Me,E as Ke,ay as qe,p as $e,g as Ae}from"./index-6f32d09b.js";/* empty css                    */import{_ as Oe}from"./index.vue_vue_type_script_setup_true_lang-edd497b7.js";/* empty css                  *//* empty css                 *//* empty css                        *//* empty css                 *//* empty css                    */import"./el-tooltip-4ed993c7.js";/* empty css                  *//* empty css                     *//* empty css                        *//* empty css               *//* empty css                *//* empty css                  *//* empty css                          *//* empty css                       *//* empty css                 *//* empty css                       *//* empty css                 *//* empty css                  *//* empty css                  */import"./el-form-item-4ed993c7.js";/* empty css                *//* empty css                   *//* empty css                       */import{_ as fe}from"./goods_default-995568ac.js";import{S as me}from"./sortable.esm-be94e56d.js";import{d as Ze,e as ze,f as He,h as We,i as Je}from"./giftcard-011e4eb3.js";import{g as Qe}from"./category-ed8b5ac2.js";import{j as Xe}from"./poster-11e724dc.js";import{r as _e}from"./range-2967ecbd.js";import Ye from"./goods-select-popup-c838215d.js";import ea from"./material-select-popup-9616fa43.js";import{_ as aa}from"./_plugin-vue_export-helper-c27b6911.js";import"./index.vue_vue_type_style_index_0_lang-972988e5.js";/* empty css                  *//* empty css                   */import"./attachment-503e95ee.js";/* empty css                   */import"./index.vue_vue_type_script_setup_true_lang-bee7eaa7.js";/* empty css                      *//* empty css               *//* empty css               *//* empty css                    *//* empty css                    */import"./el-dropdown-item-4ed993c7.js";import"./index.vue_vue_type_script_setup_true_lang-ad575143.js";/* empty css                   */import"./index.vue_vue_type_script_setup_true_lang-0724e2f9.js";/* empty css                          */import"./goods-8f7103ad.js";import"./material-select.vue_vue_type_style_index_0_lang-071d6e83.js";import"./material-a1349d7e.js";function ta(K={}){const Y=ge(),U=ye(),S=G(!1),n=j({giftcard_id:0,type:"virtual",card_name:"",category_id:"",cover:"",material_ids:"",card_price:0,is_give:1,blessing_json:[],validity_type:"forever",validity_day:30,validity_time:"",status:1,sort:"",card_right_type:"balance",balance_json:[],delivery_way:"all",card_goods_type:"all",card_goods_count:"",card_key_way:["0-9"],card_key_length:6,card_no_length:6,card_prefix:"",card_suffix:"",instruction:"",card_desc:"",goods_sku_relation:[]});j([]);const B=j([]),t=j([]);n.giftcard_id=G(Y.query.giftcard_id||0);const q=j({}),s=K.getFormRef;se(()=>{let p=s();for(let c in p)q[c]=p[c]});const ee=G("basic"),ae=(p,c)=>{},_=j([]),k=p=>{n.type=p.type};Ze({}).then(p=>{const c=p.data;if(c)for(const r in c)_.push(c[r])});const O=j([]);ze({}).then(p=>{const c=p.data;if(c)for(const r in c)O.push(c[r])});const $=j([]),E=()=>{const p=U.resolve({path:"/shop_giftcard/category"});window.open(p.href)},I=(p=!1)=>{Qe({}).then(c=>{const r=c.data;r&&($.splice(0,$.length,...r),p&&de({message:l("refreshSuccess"),type:"success"}))})};I();const Z=j([]),z=()=>{const p=U.resolve({path:"/poster/list"});window.open(p.href)},te=(p=!1)=>{Xe({type:"shop_giftcard_give"}).then(c=>{const r=c.data;r&&(Z.splice(0,Z.length,...r),p&&de({message:l("refreshSuccess"),type:"success"}))})};te();const le=()=>{He({giftcard_id:n.giftcard_id}).then(p=>{const c=p.data;if(c){if(Object.assign(n,c),n.card_right_type=="balance"){let r=[];n.balance_json.forEach(o=>{o.balance&&r.push(ne(o))})}else n.card_right_type=="goods"&&(B.splice(0,B.length),t.splice(0,t.length),n.goods_sku_relation.forEach(r=>{B.push(r.sku_id)}),c.goods_sku_list.forEach(r=>{let o=0;for(let g=0;g<n.goods_sku_relation.length;g++)if(n.goods_sku_relation[g].sku_id==r.sku_id){o=n.goods_sku_relation[g].num;break}t.push({goods_id:r.goods_id,sku_id:r.sku_id,goods_type_name:r.goods.goods_type_name,price:r.price,sku_image:r.sku_image,goods_name:r.goods.goods_name,sku_name:r.sku_name,stock:r.stock,num:o})}));n.validity_type=="date"&&(n.validity_time=new Date(n.validity_time)),se(()=>{W(),R()})}})};n.giftcard_id&&le();const H=(p=5)=>Number(Math.random().toString().substr(3,p)+Date.now()).toString(36),W=()=>{if(!s().cardBlessingRef)return;const p=s().cardBlessingRef,c=me.create(p,{group:"draggable-element",animation:200,onEnd:r=>{const o=n.blessing_json[r.oldIndex];n.blessing_json.splice(r.oldIndex,1),n.blessing_json.splice(r.newIndex,0,o),se(()=>{c.sort(_e(n.blessing_json.length).map(g=>g.toString()))})}})},A=()=>{if(n.blessing_json.length>10){de({type:"warning",message:`${l("maxAddBlessingTips")}`});return}n.blessing_json.push({id:H(),blessing:""}),W()},J=p=>{n.blessing_json.splice(p,1)},R=()=>{if(!s().cardRightBalanceRef)return;const p=s().cardRightBalanceRef,c=me.create(p,{group:"draggable-element",animation:200,onEnd:r=>{const o=n.balance_json[r.oldIndex];n.balance_json.splice(r.oldIndex,1),n.balance_json.splice(r.newIndex,0,o),se(()=>{c.sort(_e(n.balance_json.length).map(g=>g.toString()))})}})},re=()=>{if(n.balance_json.length>10){de({type:"warning",message:`${l("maxAddBalanceTips")}`});return}n.balance_json.push({id:H(),balance:"",price:""}),R()},ie=p=>{n.balance_json.splice(p,1)},Q=p=>{t.splice(0,t.length);for(let c in p){let r=p[c],o={goods_id:r.goods_id,sku_id:r.sku_id,goods_type_name:r.goods_type_name,price:r.price,sku_image:r.sku_image,goods_name:r.goods_name,sku_name:r.sku_name,stock:r.stock,num:1};t.push(o)}},oe=(p,c)=>{t.splice(c,1),B.splice(B.indexOf(p.sku_id),1)},T={required:/[\S]+/,number:/^\d{0,10}$/,digit:/^\d{0,10}(.?\d{0,2})$/,special:/^\d{0,10}(.?\d{0,3})$/},a=be(()=>({card_name:[{required:!0,trigger:"blur",validator:(c,r,o)=>{r===""&&o(new Error(l("cardNamePlaceholder"))),r.length>20?o(new Error(l("cardNameMaxLengthTips"))):o()}}],category_id:[{required:!0,message:l("categoryIdPlaceholder"),trigger:"blur"}],cover:[{required:!0,message:l("coverPlaceholder"),trigger:"blur"}],sort:[{trigger:"blur",validator:(c,r,o)=>{isNaN(r)||!T.number.test(r)?o(new Error(l("sortTips"))):o()}}],card_price:[{trigger:"blur",validator:(c,r,o)=>{n.card_right_type=="goods"&&(r===""?o(new Error(l("cardPricePlaceholder"))):isNaN(r)||!T.digit.test(r)?o(new Error(l("cardPriceTips"))):r<0&&o(new Error(l("cardPriceNotZeroTips")))),o()}}],validity_day:[{required:!0,trigger:"blur",validator:(c,r,o)=>{n.validity_type=="day"?r===""?o(new Error(l("validityDayPlaceholder"))):isNaN(r)||!T.digit.test(r)?o(new Error(l("validityDayTips"))):r<0?o(new Error(l("validityDayNotZeroTips"))):o():o()}}],validity_time:[{required:!0,trigger:"blur",validator:(c,r,o)=>{n.validity_type=="date"?r===""?o(new Error(l("validityTimePlaceholder"))):n.validity_time<=Date.now()?o(new Error(l("validityTimeVerify"))):o():o()}}],card_key_way:[{required:!0,trigger:"blur",validator:(c,r,o)=>{n.type=="real"&&r===""?o(new Error(l("cardKeyWayPlaceholder"))):o()}}],card_no_length:[{required:!0,trigger:"blur",validator:(c,r,o)=>{n.type=="real"?r===""?o(new Error(l("cardNoLengthPlaceholder"))):isNaN(r)||!T.digit.test(r)?o(new Error(l("cardNoLengthInputTips"))):r<6?o(new Error(l("cardNoLengthNotZeroTips"))):r>20?o(new Error(l("cardNoLengthMaxTips"))):o():o()}}],card_key_length:[{required:!0,trigger:"blur",validator:(c,r,o)=>{n.type=="real"?r===""?o(new Error(l("cardKeyLengthPlaceholder"))):isNaN(r)||!T.digit.test(r)?o(new Error(l("cardKeyLengthInputTips"))):r<6?o(new Error(l("cardKeyLengthNotZeroTips"))):r>20?o(new Error(l("cardKeyLengthMaxTips"))):o():o()}}],card_blessing:[{required:!0,trigger:"blur",validator:(c,r,o)=>{if(n.is_give){let g=[],v=!1,y="";for(let D=0;D<n.blessing_json.length;D++)if(n.blessing_json[D].blessing)if(g.indexOf(n.blessing_json[D].blessing)==-1)g.push(n.blessing_json[D].blessing);else{y=l("cardBlessingRepeatTips"),v=!0;break}else{y=l("cardBlessingPlaceholder"),v=!0;break}v&&o(new Error(y))}o()}}],card_right_balance:[{required:!0,trigger:"blur",validator:(c,r,o)=>{if(n.card_right_type=="balance")if(n.balance_json.length==0)o(new Error(l("cardRightBalanceEmpty")));else{let g=[],v=!1,y="";for(let D=0;D<n.balance_json.length;D++)if(n.balance_json[D].balance){if(isNaN(n.balance_json[D].balance)||!T.number.test(n.balance_json[D].balance)){y=l("cardRightBalancePriceTips"),v=!0;break}if(g.indexOf(n.balance_json[D].balance)==-1)g.push(n.balance_json[D].balance);else{y=l("cardRightBalanceRepeatTips"),v=!0;break}}else{y=l("cardRightBalancePlaceholder"),v=!0;break}v&&o(new Error(y))}o()}}],card_right_balance_price:[{required:!0,trigger:"blur",validator:(c,r,o)=>{if(n.card_right_type=="balance"){let g=!1,v="";for(let y=0;y<n.balance_json.length;y++)if(n.balance_json[y].price){if(isNaN(n.balance_json[y].price)||!T.digit.test(n.balance_json[y].price)){v=l("cardBalancePriceTips"),g=!0;break}if(n.balance_json[y].price<0){v=l("cardBalancePriceNotZeroTips"),g=!0;break}}else{v=l("cardBalancePricePlaceholder"),g=!0;break}g&&o(new Error(v))}o()}}],card_goods_count:[{required:!0,trigger:"blur",validator:(c,r,o)=>{n.card_goods_type=="diy"&&(r===""?o(new Error(l("cardGoodsCountPlaceholder"))):isNaN(r)||!T.digit.test(r)?o(new Error(l("cardGoodsTips"))):r<0?o(new Error(l("cardGoodsNotZeroTips"))):r==0&&o(new Error(l("cardGoodsMustBeGreaterZeroTips")))),o()}}],card_right_select_goods:[{required:!0,trigger:"blur",validator:(c,r,o)=>{if(n.card_right_type=="goods"){if(t.length==0)o(new Error(l("cardRightGoodsEmpty")));else if(n.card_goods_type=="all"){let g=!1,v="";for(let y=0;y<t.length;y++){if(t[y].num==""){g=!0,v=l("cardRightGoodsPlaceholder");break}if(t[y].num>t[y].stock){g=!0,v=l("cardRightGoodsNumOverStock");break}}g&&o(new Error(v))}}o()}}],instruction:[{required:!1,trigger:["blur","change"],validator:(c,r,o)=>{if(r.length>5e4)return o(new Error(l("cardInstructionMaxTips"))),!1;o()}}],card_desc:[{required:!1,trigger:["blur","change"],validator:(c,r,o)=>{if(r.length>5e4)return o(new Error(l("giftcardDescMaxTips"))),!1;o()}}]})),x=p=>{let c=[{key:"basic",verify:!1,ref:q.basicFormRef}];c.push({key:"card_right",verify:!1,ref:q.cardRightFormRef},{key:"detail",verify:!1,ref:q.detailFormRef}),c.forEach((r,o)=>{r&&r.ref&&r.ref.validate(g=>{r.verify=g})}),setTimeout(()=>{let r=!0;for(let o=0;o<c.length;o++)if(c[o].verify==!1){ee.value=c[o].key,r=!1;break}r&&p&&p()},10)};return{formData:n,activeName:ee,tabHandleClick:ae,giftcardType:_,changeGiftcardType:k,giftcardCardRightType:O,categoryOptions:$,toCategoryEvent:E,refreshCategory:I,posterOptions:Z,toPosterEvent:z,refreshPoster:te,formRules:a,addBlessing:A,deleteBlessing:J,addBalance:re,deleteBalance:ie,goodsSelect:Q,deleteGoodsEvent:oe,goodsIds:B,goodsSkuList:t,save:(p=null)=>{x(()=>{if(S.value)return;S.value=!0;const c=n.giftcard_id?We:Je,r=ne(n);r.card_right_type=="balance"||r.card_right_type=="goods"&&(r.goods_sku_relation.splice(0,r.goods_sku_relation.length),t.forEach(o=>{r.goods_sku_relation.push({goods_id:o.goods_id,sku_id:o.sku_id,num:parseInt(o.num)})})),c(r).then(o=>{S.value=!1,U.push("/shop_giftcard/giftcard/list")}).catch(()=>{S.value=!1})})},back:()=>{U.push("/shop_giftcard/giftcard/list")},filterSpecial:p=>{p.target.value=p.target.value.replace(/[^\u4e00-\u9fa5a-zA-Z0-9\s]/g,""),p.target.value=p.target.value.replace(/[`~!@#$%^&*()_\-+=<>?:"{}|,.\/;'\\[\]·~！@#￥%……&*（）——\-+={}|《》？：“”【】、；‘’，。、]/g,"")},handleBlur:p=>{var c;(c=q.detailFormRef.value)==null||c.validateField("goods_desc")}}}const X=K=>($e("data-v-60da0618"),K=K(),Ae(),K),la={class:"main-container"},ra={class:"type-name"},oa={class:"type-desc"},sa=X(()=>u("div",{class:"triangle"},null,-1)),da=X(()=>u("div",{class:"selected"},"✓",-1)),ia=["onClick"],na={class:"type-name"},ca={class:"type-desc"},pa=X(()=>u("div",{class:"triangle"},null,-1)),ua=X(()=>u("div",{class:"selected"},"✓",-1)),ma={class:"ml-[10px]"},_a={class:"flex items-center px-[5px]"},fa={class:"w-[220px] pl-[5px]"},ga={class:"mt-[10px] text-[12px] text-[#999] leading-[20px]"},ya={class:"mt-[10px] text-[12px] text-[#999] leading-[20px]"},ba={class:"ml-[10px]"},ha={class:"ml-[120px] mb-[10px] text-[12px] text-[#999] leading-[20px]"},va={class:"mt-[10px] text-[12px] text-[#999] leading-[20px]"},xa={class:"card-blessing-wrap"},ka={class:"blessing-item-wrap"},Da={class:"mt-[10px] text-[12px] text-[#999] leading-[20px]"},Va={class:"card-right-balance-wrap"},wa={class:"balance-item-wrap"},Ea={key:0},Ra={key:1},Ta={class:"mt-[10px] text-[12px] text-[#999] leading-[20px]"},Ba={class:"flex items-center cursor-pointer"},Pa={class:"min-w-[60px] h-[60px] flex items-center justify-center"},ja=X(()=>u("div",{class:"image-slot"},[u("img",{class:"w-[60px] h-[60px]",src:fe})],-1)),Ca={key:1,class:"w-[70px] h-[60px]",src:fe,fit:"contain"},Na={class:"ml-2"},Sa=["title"],Ga={class:"text-primary text-[12px]"},Ua={class:"fixed-footer-wrap"},Ia={class:"fixed-footer"},Fa=he({__name:"edit",setup(K){const Y=G(),U=G(),S=G(),n=G(),B=G(),t=ta({getFormRef(){return{basicFormRef:Y.value,cardRightFormRef:U.value,detailFormRef:S.value,cardBlessingRef:n.value,cardRightBalanceRef:B.value}}});return(q,s)=>{const ee=De,ae=Ve,_=we,k=Ee,O=Re,$=Te,E=Be,I=Pe,Z=je,z=Ce,te=Ne,le=Se,H=ve("CircleCloseFilled"),W=Ge,A=Ue,J=Ie,R=Fe,re=Le,ie=Me,Q=Ke,oe=Oe,T=qe;return f(),h("div",la,[d(ae,{class:"box-card !border-none",shadow:"never"},{default:i(()=>[d(ee,{content:e(t).formData.giftcard_id?e(l)("updateGiftcard"):e(l)("addGiftcard"),icon:e(xe),onBack:e(t).back},null,8,["content","icon","onBack"])]),_:1}),d(ae,{class:"box-card mt-[15px] !border-none",shadow:"never"},{default:i(()=>[d(T,{modelValue:e(t).activeName,"onUpdate:modelValue":s[38]||(s[38]=a=>e(t).activeName=a),onTabClick:e(t).tabHandleClick},{default:i(()=>[d(J,{label:e(l)("basicInfoTab"),name:"basic"},{default:i(()=>[d(A,{model:e(t).formData,"label-width":"120px",ref_key:"basicFormRef",ref:Y,rules:e(t).formRules,class:"page-form"},{default:i(()=>[e(t).formData.giftcard_id?(f(),C(_,{key:0,label:e(l)("giftcardType")},{default:i(()=>[(f(!0),h(N,null,F(e(t).giftcardType,a=>(f(),h("div",{key:a.type,class:ce(["giftcard-type-wrap",[e(t).formData.type==a.type?"selected":"disabled"]])},[u("div",ra,m(a.name),1),u("div",oa,"("+m(a.desc)+")",1),e(t).formData.type==a.type?(f(),h(N,{key:0},[sa,da],64)):L("",!0)],2))),128))]),_:1},8,["label"])):(f(),C(_,{key:1,label:e(l)("giftcardType")},{default:i(()=>[(f(!0),h(N,null,F(e(t).giftcardType,a=>(f(),h("div",{key:a.type,class:ce(["giftcard-type-wrap",{selected:e(t).formData.type==a.type}]),onClick:x=>e(t).changeGiftcardType(a)},[u("div",na,m(a.name),1),u("div",ca,"("+m(a.desc)+")",1),e(t).formData.type==a.type?(f(),h(N,{key:0},[pa,ua],64)):L("",!0)],10,ia))),128))]),_:1},8,["label"])),d(_,{label:e(l)("cardName"),prop:"card_name"},{default:i(()=>[d(k,{modelValue:e(t).formData.card_name,"onUpdate:modelValue":s[0]||(s[0]=a=>e(t).formData.card_name=a),modelModifiers:{trim:!0},clearable:"",placeholder:e(l)("cardNamePlaceholder"),class:"input-width",maxlength:"20","show-word-limit":""},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),d(_,{label:e(l)("categoryId"),prop:"category_id"},{default:i(()=>[d($,{modelValue:e(t).formData.category_id,"onUpdate:modelValue":s[1]||(s[1]=a=>e(t).formData.category_id=a),placeholder:e(l)("categoryIdPlaceholder"),clearable:""},{default:i(()=>[(f(!0),h(N,null,F(e(t).categoryOptions,a=>(f(),C(O,{key:a.category_id,label:a.category_name,value:a.category_id},null,8,["label","value"]))),128))]),_:1},8,["modelValue","placeholder"]),u("div",ma,[u("span",{class:"cursor-pointer text-primary mr-[10px]",onClick:s[2]||(s[2]=a=>e(t).refreshCategory(!0))},m(e(l)("refresh")),1),u("span",{class:"cursor-pointer text-primary",onClick:s[3]||(s[3]=(...a)=>e(t).toCategoryEvent&&e(t).toCategoryEvent(...a))},m(e(l)("addCategory")),1)])]),_:1},8,["label"]),d(_,{label:e(l)("cover"),prop:"cover"},{default:i(()=>[d(ea,{modelValue:e(t).formData.cover,"onUpdate:modelValue":s[4]||(s[4]=a=>e(t).formData.cover=a),limit:10},null,8,["modelValue"])]),_:1},8,["label"]),d(_,{label:e(l)("validityType")},{default:i(()=>[d(I,{modelValue:e(t).formData.validity_type,"onUpdate:modelValue":s[5]||(s[5]=a=>e(t).formData.validity_type=a)},{default:i(()=>[d(E,{label:"forever"},{default:i(()=>[b(m(e(l)("validityForever")),1)]),_:1}),d(E,{label:"day"},{default:i(()=>[b(m(e(l)("validityDay")),1)]),_:1}),d(E,{label:"date"},{default:i(()=>[b(m(e(l)("validityDate")),1)]),_:1})]),_:1},8,["modelValue"])]),_:1},8,["label"]),V(d(_,{prop:"validity_day"},{default:i(()=>[b(" 购买后立即生效， "),u("div",_a,[d(k,{modelValue:e(t).formData.validity_day,"onUpdate:modelValue":s[6]||(s[6]=a=>e(t).formData.validity_day=a),modelModifiers:{trim:!0},onKeyup:s[7]||(s[7]=a=>e(M)(a)),clearable:"",class:"input-width-short",maxlength:"3"},null,8,["modelValue"])]),b(" 天有效 ")]),_:1},512),[[w,e(t).formData.validity_type=="day"]]),V(d(_,{prop:"validity_time"},{default:i(()=>[b(" 购买后立即生效，使用时间截止为 "),u("div",fa,[d(Z,{modelValue:e(t).formData.validity_time,"onUpdate:modelValue":s[8]||(s[8]=a=>e(t).formData.validity_time=a),type:"datetime"},null,8,["modelValue"])])]),_:1},512),[[w,e(t).formData.validity_type=="date"]]),V(d(_,{label:e(l)("cardNoLength"),prop:"card_no_length"},{default:i(()=>[u("div",null,[d(k,{modelValue:e(t).formData.card_no_length,"onUpdate:modelValue":s[9]||(s[9]=a=>e(t).formData.card_no_length=a),modelModifiers:{trim:!0},clearable:"",placeholder:e(l)("cardNoLengthPlaceholder"),class:"input-width-short",maxlength:"2",onKeyup:s[10]||(s[10]=a=>e(M)(a))},null,8,["modelValue","placeholder"]),u("div",ga,m(e(l)("cardNoLengthTips")),1)])]),_:1},8,["label"]),[[w,e(t).formData.type=="real"]]),V(d(_,{label:e(l)("cardPrefix")},{default:i(()=>[d(k,{modelValue:e(t).formData.card_prefix,"onUpdate:modelValue":s[11]||(s[11]=a=>e(t).formData.card_prefix=a),modelModifiers:{trim:!0},clearable:"",placeholder:e(l)("cardPrefixPlaceholder"),class:"input-width",maxlength:"10"},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),[[w,e(t).formData.type=="real"]]),V(d(_,{label:e(l)("cardSuffix")},{default:i(()=>[d(k,{modelValue:e(t).formData.card_suffix,"onUpdate:modelValue":s[12]||(s[12]=a=>e(t).formData.card_suffix=a),modelModifiers:{trim:!0},clearable:"",placeholder:e(l)("cardSuffixPlaceholder"),class:"input-width",maxlength:"10"},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),[[w,e(t).formData.type=="real"]]),V(d(_,{label:e(l)("cardKeyWay"),prop:"card_key_way"},{default:i(()=>[d(te,{modelValue:e(t).formData.card_key_way,"onUpdate:modelValue":s[13]||(s[13]=a=>e(t).formData.card_key_way=a)},{default:i(()=>[d(z,{label:"0-9"},{default:i(()=>[b("0-9")]),_:1}),d(z,{label:"a-z"},{default:i(()=>[b("a-z")]),_:1}),d(z,{label:"A-Z"},{default:i(()=>[b("A-Z")]),_:1})]),_:1},8,["modelValue"])]),_:1},8,["label"]),[[w,e(t).formData.type=="real"]]),V(d(_,{label:e(l)("cardKeyLength"),prop:"card_key_length"},{default:i(()=>[u("div",null,[d(k,{modelValue:e(t).formData.card_key_length,"onUpdate:modelValue":s[14]||(s[14]=a=>e(t).formData.card_key_length=a),modelModifiers:{trim:!0},clearable:"",placeholder:e(l)("cardKeyLengthPlaceholder"),class:"input-width-short",maxlength:"2",onKeyup:s[15]||(s[15]=a=>e(M)(a))},null,8,["modelValue","placeholder"]),u("div",ya,m(e(l)("cardKeyLengthTips")),1)])]),_:1},8,["label"]),[[w,e(t).formData.type=="real"]]),d(_,{label:e(l)("poster")},{default:i(()=>[d($,{modelValue:e(t).formData.poster_id,"onUpdate:modelValue":s[16]||(s[16]=a=>e(t).formData.poster_id=a),placeholder:e(l)("posterPlaceholder"),clearable:""},{default:i(()=>[(f(!0),h(N,null,F(e(t).posterOptions,a=>(f(),C(O,{key:a.id,label:a.name,value:a.id},null,8,["label","value"]))),128))]),_:1},8,["modelValue","placeholder"]),u("div",ba,[u("span",{class:"cursor-pointer text-primary mr-[10px]",onClick:s[17]||(s[17]=a=>e(t).refreshPoster(!0))},m(e(l)("refresh")),1),u("span",{class:"cursor-pointer text-primary",onClick:s[18]||(s[18]=(...a)=>e(t).toPosterEvent&&e(t).toPosterEvent(...a))},m(e(l)("addPoster")),1)])]),_:1},8,["label"]),u("div",ha,m(e(l)("posterTips")),1),d(_,{label:e(l)("status")},{default:i(()=>[d(le,{modelValue:e(t).formData.status,"onUpdate:modelValue":s[19]||(s[19]=a=>e(t).formData.status=a),modelModifiers:{trim:!0},"active-value":1,"inactive-value":0},null,8,["modelValue"])]),_:1},8,["label"]),d(_,{label:e(l)("isGive")},{default:i(()=>[u("div",null,[d(le,{modelValue:e(t).formData.is_give,"onUpdate:modelValue":s[20]||(s[20]=a=>e(t).formData.is_give=a),"active-value":1,"inactive-value":0},null,8,["modelValue"]),u("div",va,m(e(l)("isGiveTips")),1)])]),_:1},8,["label"]),V(u("div",null,[d(_,{label:e(l)("cardBlessing"),prop:"card_blessing"},{default:i(()=>[u("div",xa,[u("div",ka,[e(t).formData.blessing_json.length?(f(),h("ul",{key:0,ref_key:"cardBlessingRef",ref:n},[(f(!0),h(N,null,F(e(t).formData.blessing_json,(a,x)=>(f(),h("li",{class:"draggable-element",key:a.id},[d(k,{modelValue:a.blessing,"onUpdate:modelValue":P=>a.blessing=P,modelModifiers:{trim:!0},clearable:"",placeholder:e(l)("cardBlessingPlaceholder"),class:"input-width","suffix-icon":e(pe),maxlength:"20"},null,8,["modelValue","onUpdate:modelValue","placeholder","suffix-icon"]),d(W,{class:"icon",size:20,color:"#7b7b7b",onClick:P=>e(t).deleteBlessing(x)},{default:i(()=>[d(H)]),_:2},1032,["onClick"])]))),128))],512)):L("",!0),V(u("span",{class:"text-primary text-[14px] add-value",onClick:s[21]||(s[21]=(...a)=>e(t).addBlessing&&e(t).addBlessing(...a))},m(e(l)("addBlessing")),513),[[w,e(t).formData.blessing_json.length==0||e(t).formData.blessing_json.length<10]])]),u("div",Da,m(e(l)("cardBlessingTips")),1)])]),_:1},8,["label"])],512),[[w,e(t).formData.is_give]]),d(_,{label:e(l)("sort")},{default:i(()=>[d(k,{modelValue:e(t).formData.sort,"onUpdate:modelValue":s[22]||(s[22]=a=>e(t).formData.sort=a),modelModifiers:{trim:!0},clearable:"",placeholder:e(l)("sortPlaceholder"),class:"input-width-mid","show-word-limit":"",maxlength:"6",onKeyup:s[23]||(s[23]=a=>e(M)(a))},null,8,["modelValue","placeholder"])]),_:1},8,["label"])]),_:1},8,["model","rules"])]),_:1},8,["label"]),d(J,{label:e(l)("cardRightTab"),name:"card_right"},{default:i(()=>[d(A,{model:e(t).formData,"label-width":"120px",ref_key:"cardRightFormRef",ref:U,rules:e(t).formRules,class:"page-form"},{default:i(()=>[d(_,{label:e(l)("cardRightType")},{default:i(()=>[d(I,{modelValue:e(t).formData.card_right_type,"onUpdate:modelValue":s[24]||(s[24]=a=>e(t).formData.card_right_type=a)},{default:i(()=>[(f(!0),h(N,null,F(e(t).giftcardCardRightType,a=>(f(),C(E,{key:a.type,label:a.type,disabled:e(t).formData.giftcard_id},{default:i(()=>[b(m(a.name),1)]),_:2},1032,["label","disabled"]))),128))]),_:1},8,["modelValue"])]),_:1},8,["label"]),V(u("div",null,[d(_,{label:e(l)("cardRightBalance"),prop:"card_right_balance"},{default:i(()=>[u("div",Va,[u("div",wa,[e(t).formData.balance_json.length?(f(),h("ul",{key:0,ref_key:"cardRightBalanceRef",ref:B},[(f(!0),h(N,null,F(e(t).formData.balance_json,(a,x)=>(f(),h("li",{class:"draggable-element",key:a.id},[d(k,{modelValue:a.balance,"onUpdate:modelValue":P=>a.balance=P,modelModifiers:{trim:!0},clearable:"",placeholder:e(l)("cardRightBalancePlaceholder"),class:"input-width","suffix-icon":e(pe),maxlength:"6",onKeyup:s[25]||(s[25]=P=>e(M)(P))},null,8,["modelValue","onUpdate:modelValue","placeholder","suffix-icon"]),d(W,{class:"icon",size:20,color:"#7b7b7b",onClick:P=>e(t).deleteBalance(x)},{default:i(()=>[d(H)]),_:2},1032,["onClick"])]))),128))],512)):L("",!0),V(u("span",{class:"text-primary text-[14px] add-balance-value",onClick:s[26]||(s[26]=(...a)=>e(t).addBalance&&e(t).addBalance(...a))},m(e(l)("addBalance")),513),[[w,e(t).formData.balance_json.length==0||e(t).formData.balance_json.length<9]])])])]),_:1},8,["label"]),e(t).formData.balance_json.length?(f(),C(_,{key:0,prop:"card_right_balance_price"},{default:i(()=>[d(re,{data:e(t).formData.balance_json,size:"large","max-height":"600",style:{"max-width":"350px"}},{default:i(()=>[d(R,{label:e(l)("cardRightBalance"),"min-width":"120"},{default:i(({row:a})=>[a.balance?(f(),h("div",Ea,"￥"+m(a.balance),1)):(f(),h("div",Ra,"--"))]),_:1},8,["label"]),d(R,{label:e(l)("cardBalancePrice"),"min-width":"120"},{default:i(({row:a})=>[d(k,{modelValue:a.price,"onUpdate:modelValue":x=>a.price=x,modelModifiers:{trim:!0},clearable:"",placeholder:"0.00",class:"!w-[140px]",maxlength:"4",onKeyup:s[27]||(s[27]=x=>e(ue)(x))},{append:i(()=>[b(m(e(l)("yuan")),1)]),_:2},1032,["modelValue","onUpdate:modelValue"])]),_:1},8,["label"])]),_:1},8,["data"])]),_:1})):L("",!0)],512),[[w,e(t).formData.card_right_type=="balance"]]),V(u("div",null,[d(_,{label:e(l)("cardPrice"),prop:"card_price"},{default:i(()=>[d(k,{modelValue:e(t).formData.card_price,"onUpdate:modelValue":s[28]||(s[28]=a=>e(t).formData.card_price=a),modelModifiers:{trim:!0},clearable:"",placeholder:"0.00",class:"input-width-mid",maxlength:"8",onKeyup:s[29]||(s[29]=a=>e(ue)(a))},{append:i(()=>[b(m(e(l)("yuan")),1)]),_:1},8,["modelValue"])]),_:1},8,["label"]),d(_,{label:e(l)("deliveryWay")},{default:i(()=>[d(I,{modelValue:e(t).formData.delivery_way,"onUpdate:modelValue":s[30]||(s[30]=a=>e(t).formData.delivery_way=a)},{default:i(()=>[d(E,{label:"all"},{default:i(()=>[b(m(e(l)("deliveryAll")),1)]),_:1}),d(E,{label:"batch"},{default:i(()=>[b(m(e(l)("deliveryBatch")),1)]),_:1})]),_:1},8,["modelValue"])]),_:1},8,["label"]),d(_,{label:e(l)("deliveryGoods")},{default:i(()=>[u("div",null,[d(I,{modelValue:e(t).formData.card_goods_type,"onUpdate:modelValue":s[31]||(s[31]=a=>e(t).formData.card_goods_type=a)},{default:i(()=>[d(E,{label:"all"},{default:i(()=>[b(m(e(l)("deliveryGoodsAll")),1)]),_:1}),d(E,{label:"diy"},{default:i(()=>[b(m(e(l)("deliveryGoodsDiy")),1)]),_:1})]),_:1},8,["modelValue"]),u("div",Ta,m(e(l)("deliveryGoodsTips")),1)])]),_:1},8,["label"]),V(d(_,{prop:"card_goods_count",label:e(l)("cardGoodsCount")},{default:i(()=>[d(k,{modelValue:e(t).formData.card_goods_count,"onUpdate:modelValue":s[32]||(s[32]=a=>e(t).formData.card_goods_count=a),modelModifiers:{trim:!0},clearable:"",placeholder:"0",class:"!w-[140px]",maxlength:"2",onKeyup:s[33]||(s[33]=a=>e(M)(a))},{append:i(()=>[b(m(e(l)("unit")),1)]),_:1},8,["modelValue"])]),_:1},8,["label"]),[[w,e(t).formData.card_goods_type=="diy"]]),d(_,{label:e(l)("selectGoods"),prop:"card_right_select_goods"},{default:i(()=>[d(Ye,{ref:"goodsSelectPopupRef",modelValue:e(t).goodsIds,"onUpdate:modelValue":s[34]||(s[34]=a=>e(t).goodsIds=a),onGoodsSelect:e(t).goodsSelect,way:"single",mode:"sku",min:1,max:99},null,8,["modelValue","onGoodsSelect"])]),_:1},8,["label"]),e(t).goodsSkuList&&e(t).goodsSkuList.length?(f(),C(_,{key:0},{default:i(()=>[d(re,{data:e(t).goodsSkuList,size:"large","max-height":"400"},{default:i(()=>[d(R,{prop:"goods_id",label:e(l)("goodsSelectPopupGoodsInfo"),"min-width":"300"},{default:i(({row:a})=>[u("div",Ba,[u("div",Pa,[a.sku_image?(f(),C(ie,{key:0,class:"w-[60px] h-[60px]",src:e(ke)(a.sku_image),fit:"contain"},{error:i(()=>[ja]),_:2},1032,["src"])):(f(),h("img",Ca))]),u("div",Na,[u("span",{title:a.sku_name,class:"multi-hidden"},m(a.sku_name?a.goods_name+" "+a.sku_name:a.goods_name),9,Sa),u("span",Ga,m(a.goods_type_name),1)])])]),_:1},8,["label"]),d(R,{prop:"price",label:e(l)("goodsSelectPopupPrice"),"min-width":"120"},{default:i(({row:a})=>[u("div",null,"￥"+m(a.price),1)]),_:1},8,["label"]),e(t).formData.card_goods_type=="all"?(f(),C(R,{key:0,prop:"price",label:e(l)("num"),"min-width":"120"},{default:i(({row:a})=>[d(k,{modelValue:a.num,"onUpdate:modelValue":x=>a.num=x,modelModifiers:{trim:!0},clearable:"",onKeyup:s[35]||(s[35]=x=>e(M)(x)),placeholder:"0",maxlength:"8"},null,8,["modelValue","onUpdate:modelValue"])]),_:1},8,["label"])):L("",!0),d(R,{prop:"stock",label:e(l)("goodsSelectPopupStock"),"min-width":"120",align:"right"},null,8,["label"]),d(R,{label:e(l)("operation"),align:"right","min-width":"160"},{default:i(({row:a,$index:x})=>[d(Q,{type:"primary",link:"",onClick:P=>e(t).deleteGoodsEvent(a,x)},{default:i(()=>[b(m(e(l)("delete")),1)]),_:2},1032,["onClick"])]),_:1},8,["label"])]),_:1},8,["data"])]),_:1})):L("",!0)],512),[[w,e(t).formData.card_right_type=="goods"]])]),_:1},8,["model","rules"])]),_:1},8,["label"]),d(J,{label:e(l)("giftcardDesc"),name:"detail"},{default:i(()=>[d(A,{model:e(t).formData,"label-width":"120px",ref_key:"detailFormRef",ref:S,rules:e(t).formRules,class:"page-form"},{default:i(()=>[d(_,{label:e(l)("cardInstruction"),prop:"instruction"},{default:i(()=>[d(oe,{modelValue:e(t).formData.instruction,"onUpdate:modelValue":s[36]||(s[36]=a=>e(t).formData.instruction=a),height:400,class:"editor-width"},null,8,["modelValue"])]),_:1},8,["label"])]),_:1},8,["model","rules"]),d(A,{model:e(t).formData,"label-width":"120px",ref_key:"detailFormRef",ref:S,rules:e(t).formRules,class:"page-form"},{default:i(()=>[d(_,{label:e(l)("cardDesc"),prop:"card_desc"},{default:i(()=>[d(oe,{modelValue:e(t).formData.card_desc,"onUpdate:modelValue":s[37]||(s[37]=a=>e(t).formData.card_desc=a),height:400,class:"editor-width"},null,8,["modelValue"])]),_:1},8,["label"])]),_:1},8,["model","rules"])]),_:1},8,["label"])]),_:1},8,["modelValue","onTabClick"])]),_:1}),u("div",Ua,[u("div",Ia,[d(Q,{type:"primary",onClick:s[39]||(s[39]=a=>e(t).save())},{default:i(()=>[b(m(e(l)("save")),1)]),_:1}),d(Q,{onClick:s[40]||(s[40]=a=>e(t).back())},{default:i(()=>[b(m(e(l)("cancel")),1)]),_:1})])])])}}});const qt=aa(Fa,[["__scopeId","data-v-60da0618"]]);export{qt as default};
