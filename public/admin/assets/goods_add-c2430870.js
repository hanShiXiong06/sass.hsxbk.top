import{d as re,x as de,f as ue,r as U,n as pe,l as me,q as e,a2 as ce,R as _e,h as m,c as h,a as d,u as l,t as p,e as s,w as a,s as k,A as O,B as w,i as C,U as T,aH as z,J as ge,a1 as fe,L as ve,ab as he,ac as be,K as xe,a6 as ye,au as Ve,E as ke,as as we,at as Te,M as Ne,Y as Ue,p as Se,g as Pe}from"./index-f7a01263.js";/* empty css                   *//* empty css                     */import{_ as Ce}from"./index.vue_vue_type_script_setup_true_lang-6490c353.js";/* empty css                       *//* empty css                 *//* empty css                  *//* empty css                    *//* empty css                */import Ee from"./index-e6c6f5a6.js";/* empty css                 *//* empty css                 */import"./el-tooltip-4ed993c7.js";/* empty css                  *//* empty css                     *//* empty css                        *//* empty css               *//* empty css                 *//* empty css                        */import{_ as B}from"./goods_default-664bb559.js";import{v as Ie}from"./marketing-fa8c56a7.js";import $e from"./goods-select-popup-d9818c3b.js";import Me from"./coupon-select-popup-4cac871d.js";import{_ as Re}from"./_plugin-vue_export-helper-c27b6911.js";import"./index.vue_vue_type_style_index_0_lang-0595c85c.js";/* empty css                  *//* empty css                   */import"./attachment-893e498c.js";import"./index.vue_vue_type_script_setup_true_lang-473c7dda.js";/* empty css                  *//* empty css                  *//* empty css                      *//* empty css               *//* empty css               *//* empty css                    *//* empty css                    */import"./el-dropdown-item-4ed993c7.js";import"./index.vue_vue_type_script_setup_true_lang-a36ce1b6.js";/* empty css                   */import"./index.vue_vue_type_script_setup_true_lang-73e73d1c.js";import"./sortable.esm-be94e56d.js";/* empty css                          */import"./goods-d18d2d10.js";const E=R=>(Se("data-v-c7e32cd2"),R=R(),Pe(),R),qe={class:"main-container"},Be={class:"detail-head"},Fe=E(()=>d("span",{class:"iconfont iconxiangzuojiantou !text-xs"},null,-1)),je={class:"ml-[1px]"},De=E(()=>d("span",{class:"adorn"},"|",-1)),Oe={class:"right"},ze={class:"panel-title"},Ge={key:0,class:"flex min-w-[512px] relative border-[1px] border-[#e7e7e7] border-solid mt-[16px]"},Je={class:"min-w-[78px] h-[78px] flex items-center justify-center"},Le=E(()=>d("div",{class:"image-slot"},[d("img",{class:"w-[78px] h-[78px]",src:B})],-1)),Ae={key:1,class:"w-[78px] h-[78px]",src:B,fit:"contain"},He={class:"flex-1 py-[5px] pl-[10px] pr-[30px]"},Ke={class:"text-[14px]"},Ye={class:"text-[14px] !text-[var(--el-color-primary)]"},Qe={class:"w-full"},We={key:0},Xe={key:1},Ze={key:0},el={key:1},ll={key:0},tl={key:1},ol={key:0},sl={key:0,class:"flex flex-col"},il={key:1},al={key:1},nl={class:"panel-title"},rl={class:"w-full sku_list"},dl={class:"flex items-center mb-[15px]"},ul={class:"flex items-center cursor-pointer"},pl={class:"min-w-[60px] h-[60px] flex items-center justify-center"},ml=E(()=>d("div",{class:"image-slot"},[d("img",{class:"w-[60px] h-[60px]",src:B})],-1)),cl={key:1,class:"w-[70px] h-[60px]",src:B,fit:"contain"},_l={class:"ml-2"},gl=["title"],fl={key:1},vl={key:1},hl={class:"flex justify-center"},bl={key:1},xl={key:2,class:"mx-[20px]"},yl={class:"panel-title"},Vl={class:"flex justify-center"},kl=E(()=>d("span",{class:"mx-[20px]"},"+",-1)),wl={class:"panel-title"},Tl={class:"flex justify-center"},Nl=E(()=>d("span",{class:"mx-[20px]"},"+",-1)),Ul={class:"panel-title"},Sl={class:"fixed-footer-wrap"},Pl={class:"fixed-footer"},Cl=re({__name:"goods_add",setup(R){de();const G=ue(),I=U(!1);pe([{name:"商品",type:"goods"}]);const o=U({...{type:"goods",names:"",title:"",image:"",goods_ids:[],coupon_ids:[],product_list:[],stock:"",limit_num:"",point:"",price:"",balance:"",isBalance:1,content:""}}),N=U(),b={required:/[\S]+/,number:/^\d{0,10}$/,digit:/^\d{0,10}(.?\d{0,2})$/,special:/^\d{0,10}(.?\d{0,3})$/},J=me(()=>({names:[{required:!0,message:e("goodsNamePlaceholder"),trigger:"blur"}],image:[{required:!0,message:e("imagePlaceholder"),trigger:"change"}],product_list:[{required:!0,message:e("selectGoodsPlaceholder"),trigger:"change"}],coupon_ids:[{required:!0,message:e("couponSelectPlaceholder"),trigger:"change"}]})),L=()=>{delete o.value.goods_info,o.value.goods_ids=[],o.value.product_list=[]},A=c=>{if(c.is_enabled=c.is_enabled?0:1,o.value.product_list.every(i=>i.is_enabled===0)){c.is_enabled=1,T({type:"warning",message:`${e("noEnabledTip")}`});return}c.stock="",c.limit_num="",c.point="",c.price=""},H=U(),K=c=>{const i=Object.values(z(c))[0];o.value.product_list=z(i.skuList.map(x=>(x.goods_stock=x.stock+"",x.goods_price=x.price+"",x.limit_num="",x.stock="",x.point="",x.price="",x.is_enabled=1,x))),o.value.goods_info={goods_name:i.goods_name,goods_cover:i.goods_cover,goods_price:i.goodsSku.price,goods_id:i.goods_id},o.value.image=i.goods_image,o.value.names=i.goods_name,o.value.title=i.sub_title,o.value.content=i.goods_desc,N.value&&N.value.validateField("product_list").catch(()=>{})},u=U({stock:"",limit_num:"",point:"",price:""}),$=U(),M=U(!1),Y=c=>{M.value=!1,F.value.toggleAllSelection()},F=U(),S=U([]),Q=c=>{S.value=c,$.value=!1,S.value.length>0&&S.value.length<o.value.product_list.length?M.value=!0:M.value=!1,S.value.length==o.value.product_list.length&&($.value=!0)},W=()=>{if(!S.value.length){T({type:"warning",message:`${e("batchEmptySelectedGoodsTips")}`});return}if(u.value.stock){if(isNaN(u.value.stock)||!b.number.test(u.value.stock)){T({type:"warning",message:`${e("stockTips")}`});return}else if(u.value.stock<=0){T({type:"warning",message:`${e("stockTipsTwo")}`});return}}if(u.value.limit_num){if(isNaN(u.value.limit_num)||!b.number.test(u.value.limit_num)){T({type:"warning",message:`${e("limitTips")}`});return}else if(u.value.limit_num<=0){T({type:"warning",message:`${e("limitTipsTwo")}`});return}}if(u.value.point){if(isNaN(u.value.point)||!b.number.test(u.value.point)){T({type:"warning",message:`${e("pointTips")}`});return}else if(u.value.point<=0){T({type:"warning",message:`${e("pointTipsTwo")}`});return}}if(u.value.price){if(isNaN(u.value.price)||!b.digit.test(u.value.price)){T({type:"warning",message:`${e("moneyTips")}`});return}else if(u.value.price<0){T({type:"warning",message:`${e("moneyTipsTwo")}`});return}}o.value.product_list.forEach((c,i)=>{S.value.forEach(x=>{x.sku_id===c.sku_id&&(u.value.stock&&(c.stock=u.value.stock+""),u.value.limit_num&&(c.limit_num=u.value.limit_num+""),u.value.point&&(c.point=u.value.point+""),u.value.price&&(c.price=u.value.price+""),N.value&&(N.value.validateField("product_list."+i+".stock").catch(()=>{}),N.value.validateField("product_list."+i+".limit_num").catch(()=>{}),N.value.validateField("product_list."+i+".point").catch(()=>{}),N.value.validateField("product_list."+i+".price").catch(()=>{})))})}),M.value=!1,$.value=!1,u.value={stock:"",limit_num:"",point:"",price:""},F.value.clearSelection()},X=c=>{o.value.product_list=Object.values(c)},Z=async c=>{I.value||!c||await c.validate(async i=>{i&&(I.value=!0,o.value.type=="goods"?o.value.product_detail=JSON.stringify(o.value.product_list.map(V=>({goods_id:V.goods_id,sku_id:V.sku_id,point:V.point||"0",price:V.price||"0",limit_num:V.limit_num||"0",stock:V.stock||"0",is_enabled:V.is_enabled})).filter(V=>V.is_enabled===1)):o.value.type=="coupon"?o.value.product_detail=JSON.stringify(o.value.product_list.map(V=>({coupon_id:V.id}))):o.value.isBalance?o.value.product_detail=JSON.stringify([{balance:o.value.balance}]):o.value.product_detail=JSON.stringify([{money:o.value.balance}]),Ie(o.value).then(V=>{I.value=!1,history.back()}).catch(()=>{I.value=!1}))})},ee=()=>{history.back()};return(c,i)=>{const x=ge,V=ce("Close"),le=fe,_=ve,y=he,j=be,v=xe,te=Ee,P=ye,oe=Ve,q=ke,D=we,se=Te,ie=Ce,ae=Ne,ne=Ue;return _e((m(),h("div",qe,[d("div",Be,[d("div",{class:"left",onClick:i[0]||(i[0]=t=>l(G).push("/shop/marketing/exchange/goods_list"))},[Fe,d("span",je,p(l(e)("returnToPreviousPage")),1)]),De,d("span",Oe,p(l(e)("addGoods")),1)]),s(P,{class:"box-card !border-none",shadow:"never"},{default:a(()=>[s(ae,{model:o.value,"label-width":"120px",ref_key:"formRef",ref:N,rules:l(J),class:"page-form"},{default:a(()=>[s(P,{class:"box-card !border-none",shadow:"never"},{default:a(()=>[d("h3",ze,p(l(e)("baseInfo")),1),o.value.type=="goods"?(m(),k(_,{key:0,label:l(e)("goodsSelect"),class:"!m-0"},{default:a(()=>[d("div",null,[s($e,{ref_key:"goodsSelectPopupRef",ref:H,modelValue:o.value.goods_ids,"onUpdate:modelValue":i[1]||(i[1]=t=>o.value.goods_ids=t),onGoodsSelect:K,min:1,max:1},null,8,["modelValue"]),o.value.goods_ids.length?(m(),h("div",Ge,[d("div",Je,[o.value.goods_info.goods_cover?(m(),k(x,{key:0,class:"w-[78px] h-[78px]",src:l(O)(o.value.goods_info.goods_cover),fit:"contain"},{error:a(()=>[Le]),_:1},8,["src"])):(m(),h("img",Ae))]),d("div",He,[d("div",Ke,p(o.value.goods_info.goods_name),1),d("div",Ye,p(o.value.goods_info.goods_price),1)]),s(le,{class:"absolute right-[10px] top-[10px] cursor-pointer",onClick:L},{default:a(()=>[s(V,{size:"24px",color:"#999"})]),_:1})])):w("",!0)])]),_:1},8,["label"])):w("",!0),o.value.type=="goods"?(m(),k(_,{key:1,prop:"product_list"})):w("",!0),o.value.type=="coupon"?(m(),k(_,{key:2,label:l(e)("couponSelect"),prop:"coupon_ids"},{default:a(()=>[d("div",Qe,[s(Me,{ref:"couponSelectPopupRef",modelValue:o.value.coupon_ids,"onUpdate:modelValue":i[2]||(i[2]=t=>o.value.coupon_ids=t),min:1,max:1,onCouponSelect:X},null,8,["modelValue"]),o.value.product_list.length?(m(),k(j,{key:0,class:"!max-w-[100%] mt-[16px]",data:o.value.product_list,size:"large"},{empty:a(()=>[d("span",null,p(l(e)("emptyData")),1)]),default:a(()=>[s(y,{prop:"title",label:l(e)("couponName"),"min-width":"130"},null,8,["label"]),s(y,{prop:"type_name",label:l(e)("couponType"),"min-width":"130"},null,8,["label"]),s(y,{label:l(e)("couponPrice"),"min-width":"130"},{default:a(({row:t})=>[d("span",null,"¥"+p(t.price),1)]),_:1},8,["label"]),s(y,{label:l(e)("threshold"),"min-width":"130"},{default:a(({row:t})=>[t.min_condition_money=="0.00"?(m(),h("span",We,"无门槛")):(m(),h("span",Xe,"满"+p(t.min_condition_money)+"元可用",1))]),_:1},8,["label"]),s(y,{label:l(e)("sumCount"),"min-width":"140"},{default:a(({row:t})=>[t.sum_count!="-1"?(m(),h("span",Ze,p(t.sum_count||""),1)):(m(),h("span",el,"不限量"))]),_:1},8,["label"]),s(y,{label:l(e)("validType"),"min-width":"210"},{default:a(({row:t})=>[t.valid_type==1?(m(),h("span",ll," 领取之日起"+p(t.length||"")+" 天内有效",1)):(m(),h("span",tl," 使用截止时间至"+p(t.valid_end_time||""),1))]),_:1},8,["label"]),s(y,{label:l(e)("receiveTypeTime"),"min-width":"210"},{default:a(({row:t})=>[t.receive_type==1?(m(),h("div",ol,[parseInt(t.start_time)!=0&&parseInt(t.end_time)!=0?(m(),h("div",sl,[d("span",null,"开始时间："+p(t.start_time),1),d("span",null,"结束时间："+p(t.end_time),1)])):(m(),h("div",il,"不限时"))])):(m(),h("span",al,"--"))]),_:1},8,["label"])]),_:1},8,["data"])):w("",!0)])]),_:1},8,["label"])):w("",!0),s(_,{label:l(e)("goodsName"),prop:"names"},{default:a(()=>[s(v,{modelValue:o.value.names,"onUpdate:modelValue":i[3]||(i[3]=t=>o.value.names=t),type:"textarea",clearable:"",placeholder:l(e)("goodsNamePlaceholder"),class:"!w-[512px]","show-word-limit":"",maxlength:60},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),s(_,{label:l(e)("goodsTitle")},{default:a(()=>[s(v,{modelValue:o.value.title,"onUpdate:modelValue":i[4]||(i[4]=t=>o.value.title=t),type:"textarea",clearable:"",placeholder:l(e)("goodsTitlePlaceholder"),class:"!w-[512px]","show-word-limit":"",maxlength:60},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),s(_,{label:l(e)("image"),prop:"image"},{default:a(()=>[s(te,{modelValue:o.value.image,"onUpdate:modelValue":i[5]||(i[5]=t=>o.value.image=t),limit:6},null,8,["modelValue"])]),_:1},8,["label"])]),_:1}),o.value.type=="goods"&&o.value.goods_info&&o.value.product_list.length?(m(),k(P,{key:0,class:"box-card !border-none",shadow:"never"},{default:a(()=>[d("h3",nl,p(l(e)("redemptionSettings")),1),s(_,null,{default:a(()=>[d("div",rl,[d("div",dl,[s(oe,{modelValue:$.value,"onUpdate:modelValue":i[6]||(i[6]=t=>$.value=t),size:"large",class:"!mr-[15px]",onChange:Y,indeterminate:M.value},{default:a(()=>[d("span",null,"已选"+p(S.value.length)+"项",1)]),_:1},8,["modelValue","indeterminate"]),d("label",null,p(l(e)("batchOperation")),1),s(v,{modelValue:u.value.stock,"onUpdate:modelValue":i[7]||(i[7]=t=>u.value.stock=t),modelModifiers:{trim:!0},clearable:"",placeholder:l(e)("stock"),class:"!w-[130px] ml-[10px]",maxlength:"8"},null,8,["modelValue","placeholder"]),s(v,{modelValue:u.value.limit_num,"onUpdate:modelValue":i[8]||(i[8]=t=>u.value.limit_num=t),modelModifiers:{trim:!0},clearable:"",placeholder:l(e)("limit"),class:"!w-[130px] ml-[10px]",maxlength:"8"},null,8,["modelValue","placeholder"]),s(v,{modelValue:u.value.point,"onUpdate:modelValue":i[9]||(i[9]=t=>u.value.point=t),modelModifiers:{trim:!0},clearable:"",placeholder:l(e)("integralUnit"),class:"!w-[130px] ml-[10px]",maxlength:"8"},null,8,["modelValue","placeholder"]),s(v,{modelValue:u.value.price,"onUpdate:modelValue":i[10]||(i[10]=t=>u.value.price=t),modelModifiers:{trim:!0},clearable:"",placeholder:l(e)("newPrice"),class:"!w-[130px] ml-[10px]",maxlength:"8"},null,8,["modelValue","placeholder"]),s(q,{class:"ml-[10px]",type:"primary",onClick:W},{default:a(()=>[C(p(l(e)("confirm")),1)]),_:1})]),s(j,{class:"!max-w-[100%]",data:o.value.product_list,size:"large",ref_key:"productListTableRef",ref:F,onSelectionChange:Q},{empty:a(()=>[d("span",null,p(l(e)("emptyData")),1)]),default:a(()=>[s(y,{type:"selection",width:"55"}),s(y,{label:l(e)("goodsSelectPopupGoodsInfo"),"min-width":"300"},{default:a(({row:t})=>{var r;return[d("div",ul,[d("div",pl,[t.sku_image?(m(),k(x,{key:0,class:"w-[60px] h-[60px]",src:l(O)(t.sku_image),fit:"contain"},{error:a(()=>[ml]),_:2},1032,["src"])):(m(),h("img",cl))]),d("div",_l,[d("span",{title:t.sku_name,class:"multi-hidden"},p(t.sku_name||((r=t.goods)==null?void 0:r.goods_name)),9,gl)])])]}),_:1},8,["label"]),s(y,{prop:"goods_price",label:l(e)("price"),"min-width":"170"},null,8,["label"]),s(y,{prop:"goods_stock",label:l(e)("goodsStock"),"min-width":"170"},null,8,["label"]),s(y,{label:l(e)("stock"),"min-width":"200"},{default:a(({row:t,$index:r})=>[t.is_enabled?(m(),k(_,{key:0,prop:"product_list."+r+".stock",rules:[{trigger:"blur",validator:(n,g,f)=>{g.length==0?f(l(e)("stockPlaceholder")):isNaN(g)||!b.number.test(g)?f(l(e)("stockTips")):g<=0?f(l(e)("stockTipsTwo")):parseInt(g)>parseInt(t.goods_stock)?f(l(e)("stockTipsThree")):f()}}],class:"sku-form-item-wrap"},{default:a(()=>[s(v,{modelValue:t.stock,"onUpdate:modelValue":n=>t.stock=n,modelModifiers:{trim:!0},class:"!w-[200px]",clearable:"",placeholder:"0",maxlength:"8"},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1032,["prop","rules"])):(m(),h("span",fl,"--"))]),_:1},8,["label"]),s(y,{label:l(e)("limit"),"min-width":"200"},{default:a(({row:t,$index:r})=>[t.is_enabled?(m(),k(_,{key:0,prop:"product_list."+r+".limit_num",rules:[{trigger:"blur",validator:(n,g,f)=>{g.length==0?f(l(e)("limitPlaceholder")):isNaN(g)||!b.number.test(g)?f(l(e)("limitTips")):g<=0?f(l(e)("limitTipsTwo")):f()}}],class:"sku-form-item-wrap"},{default:a(()=>[s(v,{modelValue:t.limit_num,"onUpdate:modelValue":n=>t.limit_num=n,modelModifiers:{trim:!0},class:"!w-[200px]",clearable:"",placeholder:"0",maxlength:"8"},{append:a(()=>[d("span",null,p(l(e)("limitUnit")),1)]),_:2},1032,["modelValue","onUpdate:modelValue"])]),_:2},1032,["prop","rules"])):(m(),h("span",vl,"--"))]),_:1},8,["label"]),s(y,{label:l(e)("money"),"min-width":"550",align:"center"},{default:a(({row:t,$index:r})=>[d("div",hl,[t.is_enabled?(m(),k(_,{key:0,prop:"product_list."+r+".point",rules:[{trigger:"blur",validator:(n,g,f)=>{g.length==0?f(l(e)("pointPlaceholder")):isNaN(g)||!b.number.test(g)?f(l(e)("pointTips")):g<=0?f(l(e)("pointTipsTwo")):f()}}],class:"sku-form-item-wrap"},{default:a(()=>[s(v,{modelValue:t.point,"onUpdate:modelValue":n=>t.point=n,modelModifiers:{trim:!0},class:"!w-[200px]",clearable:"",placeholder:"0",maxlength:"8"},{append:a(()=>[d("span",null,p(l(e)("integralUnit")),1)]),_:2},1032,["modelValue","onUpdate:modelValue"])]),_:2},1032,["prop","rules"])):(m(),h("span",bl,"--")),t.is_enabled?(m(),h("span",xl,"+")):w("",!0),t.is_enabled?(m(),k(_,{key:3,prop:"product_list."+r+".price",rules:[{trigger:"blur",validator:(n,g,f)=>{g.length?isNaN(g)||!b.digit.test(g)?f(l(e)("moneyTips")):g<0?f(l(e)("moneyTipsTwo")):f():f()}}],class:"sku-form-item-wrap"},{default:a(()=>[s(v,{modelValue:t.price,"onUpdate:modelValue":n=>t.price=n,modelModifiers:{trim:!0},class:"!w-[200px]",clearable:"",placeholder:"0.00",maxlength:"8"},{append:a(()=>[d("span",null,p(l(e)("prickUnit")),1)]),_:2},1032,["modelValue","onUpdate:modelValue"])]),_:2},1032,["prop","rules"])):w("",!0)])]),_:1},8,["label"]),s(y,{label:l(e)("operation"),fixed:"right",align:"right","min-width":"160"},{default:a(({row:t})=>[s(q,{type:"primary",link:"",onClick:r=>A(t)},{default:a(()=>[C(p(t.is_enabled?l(e)("noEnabled"):l(e)("enabled")),1)]),_:2},1032,["onClick"])]),_:1},8,["label"])]),_:1},8,["data"])])]),_:1})]),_:1})):w("",!0),o.value.type=="coupon"&&o.value.product_list.length?(m(),k(P,{key:1,class:"box-card !border-none",shadow:"never"},{default:a(()=>[d("h3",yl,p(l(e)("redemptionSettings")),1),s(_,{label:l(e)("stock"),prop:"stock",rules:[{required:!0,trigger:"blur",validator:(t,r,n)=>{r.length==0?n(l(e)("stockPlaceholder")):isNaN(r)||!b.number.test(r)?n(l(e)("stockTips")):r<=0?n(l(e)("stockTipsTwo")):o.value.product_list[0].sum_count!="-1"&&parseInt(r)>parseInt(o.value.product_list[0].sum_count.sum_count)?n(l(e)("stockTipsThree")):n()}}]},{default:a(()=>[s(v,{modelValue:o.value.stock,"onUpdate:modelValue":i[11]||(i[11]=t=>o.value.stock=t),clearable:"",placeholder:l(e)("stockPlaceholder"),class:"input-width"},null,8,["modelValue","placeholder"])]),_:1},8,["label","rules"]),s(_,{label:l(e)("limit"),prop:"limit_num",rules:[{trigger:"blur",validator:(t,r,n)=>{r?isNaN(r)||!b.number.test(r)?n(l(e)("limitTips")):r<=0?n(l(e)("limitTipsTwo")):n():n()}}]},{default:a(()=>[s(v,{modelValue:o.value.limit_num,"onUpdate:modelValue":i[12]||(i[12]=t=>o.value.limit_num=t),clearable:"",placeholder:l(e)("limitPlaceholder"),class:"input-width"},null,8,["modelValue","placeholder"])]),_:1},8,["label","rules"]),s(_,{label:l(e)("money"),required:""},{default:a(()=>[d("div",Vl,[s(_,{prop:"point",rules:[{trigger:"blur",validator:(t,r,n)=>{r.length==0&&n(l(e)("pointPlaceholder")),isNaN(r)||!b.number.test(r)?n(l(e)("pointTips")):r<=0?n(l(e)("pointTipsTwo")):n()}}],class:"sku-form-item-wrap"},{default:a(()=>[s(v,{modelValue:o.value.point,"onUpdate:modelValue":i[13]||(i[13]=t=>o.value.point=t),modelModifiers:{trim:!0},class:"!w-[200px]",clearable:"",placeholder:"0",maxlength:"8"},{append:a(()=>[d("span",null,p(l(e)("integralUnit")),1)]),_:1},8,["modelValue"])]),_:1},8,["rules"]),kl,s(_,{prop:"price",rules:[{trigger:"blur",validator:(t,r,n)=>{r.length?isNaN(r)||!b.digit.test(r)?n(l(e)("moneyTips")):r<0?n(l(e)("moneyTipsTwo")):n():n()}}],class:"sku-form-item-wrap"},{default:a(()=>[s(v,{modelValue:o.value.price,"onUpdate:modelValue":i[14]||(i[14]=t=>o.value.price=t),modelModifiers:{trim:!0},class:"!w-[200px]",clearable:"",placeholder:"0.00",maxlength:"8"},{append:a(()=>[d("span",null,p(l(e)("prickUnit")),1)]),_:1},8,["modelValue"])]),_:1},8,["rules"])])]),_:1},8,["label"])]),_:1})):w("",!0),o.value.type=="balance"?(m(),k(P,{key:2,class:"box-card !border-none",shadow:"never"},{default:a(()=>[d("h3",wl,p(l(e)("redemptionSettings")),1),s(_,{label:l(e)("balance"),prop:"balance",rules:[{required:!0,trigger:"blur",validator:(t,r,n)=>{r.length==0?n(l(e)("balancePlaceholder")):isNaN(r)||!b.digit.test(r)?n(l(e)("balanceTips")):r<=0?n(l(e)("balanceTipsTwo")):n()}}]},{default:a(()=>[s(v,{modelValue:o.value.balance,"onUpdate:modelValue":i[15]||(i[15]=t=>o.value.balance=t),clearable:"",placeholder:l(e)("balancePlaceholder"),class:"input-width"},null,8,["modelValue","placeholder"])]),_:1},8,["label","rules"]),s(_,{label:l(e)("balance")},{default:a(()=>[s(se,{modelValue:o.value.isBalance,"onUpdate:modelValue":i[16]||(i[16]=t=>o.value.isBalance=t),class:"ml-4"},{default:a(()=>[s(D,{label:0,size:"large"},{default:a(()=>[C("可提现余额")]),_:1}),s(D,{label:1,size:"large"},{default:a(()=>[C("不可提现余额")]),_:1})]),_:1},8,["modelValue"])]),_:1},8,["label"]),s(_,{label:l(e)("stock"),prop:"stock",rules:[{required:!0,trigger:"blur",validator:(t,r,n)=>{r.length==0?n(l(e)("stockPlaceholder")):isNaN(r)||!b.number.test(r)?n(l(e)("stockTips")):r<=0?n(l(e)("stockTipsTwo")):n()}}]},{default:a(()=>[s(v,{modelValue:o.value.stock,"onUpdate:modelValue":i[17]||(i[17]=t=>o.value.stock=t),clearable:"",placeholder:l(e)("stockPlaceholder"),class:"input-width"},null,8,["modelValue","placeholder"])]),_:1},8,["label","rules"]),s(_,{label:l(e)("limit"),prop:"limit_num",rules:[{trigger:"blur",validator:(t,r,n)=>{r?isNaN(r)||!b.number.test(r)?n(l(e)("limitTips")):r<=0?n(l(e)("limitTipsTwo")):n():n()}}]},{default:a(()=>[s(v,{modelValue:o.value.limit_num,"onUpdate:modelValue":i[18]||(i[18]=t=>o.value.limit_num=t),clearable:"",placeholder:l(e)("limitPlaceholder"),class:"input-width"},null,8,["modelValue","placeholder"])]),_:1},8,["label","rules"]),s(_,{label:l(e)("money"),required:""},{default:a(()=>[d("div",Tl,[s(_,{prop:"point",rules:[{trigger:"blur",validator:(t,r,n)=>{r.length==0?n(l(e)("pointPlaceholder")):r.length?isNaN(r)||!b.number.test(r)?n(l(e)("pointTips")):r<=0?n(l(e)("pointTipsTwo")):n():n()}}],class:"sku-form-item-wrap"},{default:a(()=>[s(v,{modelValue:o.value.point,"onUpdate:modelValue":i[19]||(i[19]=t=>o.value.point=t),modelModifiers:{trim:!0},class:"!w-[200px]",clearable:"",placeholder:"0",maxlength:"8"},{append:a(()=>[d("span",null,p(l(e)("integralUnit")),1)]),_:1},8,["modelValue"])]),_:1},8,["rules"]),Nl,s(_,{prop:"price",rules:[{trigger:"blur",validator:(t,r,n)=>{r.length?isNaN(r)||!b.digit.test(r)?n(l(e)("moneyTips")):r<0?n(l(e)("moneyTipsTwo")):n():n()}}],class:"sku-form-item-wrap"},{default:a(()=>[s(v,{modelValue:o.value.price,"onUpdate:modelValue":i[20]||(i[20]=t=>o.value.price=t),modelModifiers:{trim:!0},class:"!w-[200px]",clearable:"",placeholder:"0.00",maxlength:"8"},{append:a(()=>[d("span",null,p(l(e)("prickUnit")),1)]),_:1},8,["modelValue"])]),_:1},8,["rules"])])]),_:1},8,["label"])]),_:1})):w("",!0),s(P,{class:"box-card !border-none",shadow:"never"},{default:a(()=>[d("h3",Ul,p(l(e)("goodsDetail")),1),s(_,null,{default:a(()=>[s(ie,{modelValue:o.value.content,"onUpdate:modelValue":i[21]||(i[21]=t=>o.value.content=t),height:600,class:"!w-[512px]"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1},8,["model","rules"])]),_:1}),d("div",Sl,[d("div",Pl,[s(q,{type:"primary",onClick:i[22]||(i[22]=t=>Z(N.value))},{default:a(()=>[C(p(l(e)("save")),1)]),_:1}),s(q,{onClick:i[23]||(i[23]=t=>ee())},{default:a(()=>[C(p(l(e)("cancel")),1)]),_:1})])])])),[[ne,I.value]])}}});const yt=Re(Cl,[["__scopeId","data-v-c7e32cd2"]]);export{yt as default};
