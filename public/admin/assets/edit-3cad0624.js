import{d as ge,f as ve,x as ye,r as N,l as he,q as o,aJ as xe,n as be,h as f,c as T,e as u,w as r,u as l,aP as ke,R as Se,s as k,a as p,t as v,A as Ne,i as M,B as J,a$ as Fe,aI as j,U as S,aQ as Te,a7 as Ve,K as Ee,L as $e,bO as Me,ac as Pe,J as Ce,E as Le,ad as Be,av as De,W as Ue,M as Ie,Y as Re,p as Oe,g as je}from"./index-6f32d09b.js";/* empty css                   *//* empty css                *//* empty css                      *//* empty css                 *//* empty css               *//* empty css                  *//* empty css                  *//* empty css                     *//* empty css                  *//* empty css                    *//* empty css                 */import"./el-tooltip-4ed993c7.js";/* empty css                  *//* empty css                 *//* empty css                        *//* empty css                        *//* empty css                       */import"./el-form-item-4ed993c7.js";/* empty css                *//* empty css                   *//* empty css                       */import{_ as H}from"./goods_default-665e448a.js";import{n as qe,r as Ae}from"./marketing-cb631817.js";import ze from"./goods-select-popup-b09e98dc.js";import Ge from"./goods-sku-popup-c6f86231.js";import{_ as Je}from"./_plugin-vue_export-helper-c27b6911.js";/* empty css                  *//* empty css                   *//* empty css                          *//* empty css                 */import"./goods-3890b03a.js";/* empty css                  */const He=C=>(Oe("data-v-f070673a"),C=C(),je(),C),Ke={class:"main-container"},Qe={class:"text-[14px] text-[#999]"},We={class:"text-[14px] text-[#999]"},Ye={class:"w-[180px]"},Xe={class:"w-full sku_list"},Ze={class:"flex items-center cursor-pointer"},we={class:"min-w-[60px] h-[60px] flex items-center justify-center"},et=He(()=>p("div",{class:"image-slot"},[p("img",{class:"w-[60px] h-[60px]",src:H})],-1)),tt={key:1,class:"w-[70px] h-[60px]",src:H,fit:"contain"},it={class:"ml-2"},st=["title"],ot={class:"text-primary text-[12px]"},at={key:0},lt={key:1},nt={key:0},dt={key:1},ut={key:0},rt={key:1},ct={key:0},pt={class:"flex items-center justify-between mt-[15px] !w-[1400px] !max-w-[100%]"},_t={class:"flex items-center mb-[15px]"},mt={class:"fixed-footer-wrap"},ft={class:"fixed-footer"},gt=ge({__name:"edit",setup(C){ve();const I=ye(),K=I.meta.title,E=N(!1),Q=new Date,R=new Date,W=N(null);R.setTime(R.getTime()+3600*1e3*2*360);const a=N({...{active_name:"",active_desc:"",active_status:"",start_time:"",end_time:"",goods_data:"",goods_ids:[],goods_list:[],discount_time:[Q,R]}}),h=N(),F={number:/^\d{0,10}(.?\d{0,1})$/,digit:/^\d{0,10}(.?\d{0,2})$/},Y=he(()=>({active_name:[{required:!0,message:o("namePlaceholder"),trigger:"blur"},{validator:q,trigger:"blur"}],active_desc:[{required:!0,message:o("titlePlaceholder"),trigger:"blur"},{validator:q,trigger:"blur"}],goods_list:[{required:!0,message:o("selectProductPlaceholder"),trigger:"change"}],discount_time:[{required:!0,validator:X,trigger:"change"}]})),q=(e,i,s)=>{if(i.trim()==="")return s(new Error(o("noSpaceAllowed")));s()},X=(e,i,s)=>{!a.value.discount_time||a.value.discount_time&&!a.value.discount_time[0]&&!a.value.discount_time[1]?s(new Error(o("请选择活动时间"))):a.value.discount_time[0]?a.value.discount_time[1]?a.value.discount_time[1]<=a.value.discount_time[0]&&s(new Error(o("活动结束时间不能小于等于活动开始时间"))):s(new Error(o("请选择活动结束时间"))):s(new Error(o("请选择活动开始时间"))),s()};xe(()=>{I.query.id&&Z(Number(I.query.id))});const Z=e=>{E.value=!0,qe(e).then(i=>{a.value=Object.assign(a.value,i.data),a.value.discount_time=[i.data.start_time,i.data.end_time],a.value.active_goods_info&&(a.value.active_goods_info.forEach(s=>{a.value.goods_ids.push(s.goods_id),a.value.goods_list.push(s)}),L()),E.value=!1})},w=e=>e.discount_rate.length==0||isNaN(e.discount_rate)||!F.number.test(e.discount_rate)||e.discount_rate<=0||e.discount_rate>9.9||e.reduce_money.length==0||isNaN(e.reduce_money)||!F.digit.test(e.reduce_money)||e.reduce_money<=0||e.reduce_money>=parseFloat(e.goodsSku.price)||e.specify_price.length==0||isNaN(e.specify_price)||!F.digit.test(e.specify_price)||e.specify_price<=0?!1:!(e.specify_price>=parseFloat(e.goodsSku.price)),ee=e=>{if(!(E.value||!e)){for(var i=0;i<a.value.goods_list.length;i++){let s=a.value.goods_list[i];if(s.goodsSku.sku_spec_format)if(s.valid)s.sku_list=s.skuList;else{let _=Math.ceil(i+1<=c.limit?1:(i+1)/c.limit);c.list=c.data[_-1],c.page=_;break}else if(w(s))s.skuList[0].discount_rate=s.discount_rate,s.skuList[0].reduce_money=s.reduce_money,s.skuList[0].specify_price=s.specify_price,s.skuList[0].discount_price=s.discount_price,s.skuList[0].discount_type=s.discount_type,s.skuList[0].is_enabled=s.is_enabled,s.sku_list=s.skuList;else{let _=Math.ceil(i+1<=c.limit?1:(i+1)/c.limit);c.list=c.data[_-1],c.page=_;break}}Fe(async()=>{await e.validate(s=>{s&&(E.value=!0,a.value.start_time=a.value.discount_time[0],a.value.end_time=a.value.discount_time[1],a.value.goods_data=JSON.stringify(a.value.goods_list),Ae(a.value).then(_=>{E.value=!1,history.back()}).catch(()=>{E.value=!1}))})})}},c=be({page:1,limit:5,total:0,data:[],list:[]}),te=e=>{if(a.value.goods_list.length){let i=j(Object.values(e)).map((s,_)=>(s.goodsSku.sku_spec_format?s.skuList=A(s.skuList):(s.discount_type="discount",s.discount_rate="",s.reduce_money="",s.specify_price="",s.is_enabled=1),s.valid=!1,s.index=_,a.value.goods_list.forEach(x=>{x.goods_id==s.goods_id&&(s=Object.assign(s,x),s.index=_)}),s));a.value.goods_list=i}else a.value.goods_list=j(Object.values(e)).map((i,s)=>(i.goodsSku.sku_spec_format?i.skuList=A(i.skuList):(i.discount_type="discount",i.discount_rate="",i.reduce_money="",i.specify_price="",i.is_enabled=1),i.index=s,i.valid=!1,i));L(),h.value&&h.value.validateField("goods_list").catch(()=>{})},A=e=>e.map(i=>(i.discount_rate||(i.discount_type="discount",i.discount_rate="",i.reduce_money="",i.specify_price="",i.is_enabled=1),i)),L=(e=1)=>{a.value.goods_list.length?(c.data=ie(a.value.goods_list,c.limit),c.list=c.data[e-1],c.total=parseInt(a.value.goods_list.length.toString())):(c.data=[],c.list=[],c.total=0,c.page=1)},ie=(e,i)=>{for(var s=[],_=0;_<e.length;_+=i)s.push(e.slice(_,_+i));return s},se=e=>{a.value.goods_list.splice(e,1),a.value.goods_list.forEach((i,s)=>{i.index=s}),a.value.goods_ids.splice(e,1),L(c.page),h.value&&h.value.validateField("goods_list").catch(()=>{})},z=N(),oe=e=>{var i;(i=z.value)==null||i.show(e)},ae=e=>{a.value.goods_list.forEach(i=>{i.goods_id==e.goods_id&&(i=j(Object.assign(i,e)))})},d=N({discount_type:"discount",discountNumber:""}),B=N(),D=N(!1),le=e=>{D.value=!1,G.value.toggleAllSelection()},G=N(),$=N([]),ne=e=>{$.value=e,B.value=!1,$.value.length>0&&$.value.length<c.list.length?D.value=!0:D.value=!1,$.value.length==c.list.length&&(B.value=!0)},de=()=>{if(!$.value.length){S({type:"warning",message:`${o("batchEmptySelectedGoodsTips")}`});return}if(d.value.discount_type=="discount"){if(d.value.discountNumber.length==0){S({type:"warning",message:`${o("discountsPlaceholder")}`});return}else if(isNaN(d.value.discountNumber)||!F.number.test(d.value.discountNumber)){S({type:"warning",message:`${o("discountsTips")}`});return}else if(d.value.discountNumber<=0){S({type:"warning",message:`${o("discountsTipsTwo")}`});return}else if(d.value.discountNumber>9.9){S({type:"warning",message:`${o("discountsTipsThree")}`});return}}else if(d.value.discount_type=="reduce"){if(d.value.discountNumber.length==0){S({type:"warning",message:`${o("reduceMoneyPlaceholder")}`});return}else if(isNaN(d.value.discountNumber)||!F.digit.test(d.value.discountNumber)){S({type:"warning",message:`${o("reduceMoneyTips")}`});return}else if(d.value.discountNumber<=0){S({type:"warning",message:`${o("reduceMoneyTipsTwo")}`});return}}else if(d.value.discountNumber.length==0){S({type:"warning",message:`${o("promotionalPlaceholder")}`});return}else if(isNaN(d.value.discountNumber)||!F.digit.test(d.value.discountNumber)){S({type:"warning",message:`${o("promotionalTips")}`});return}else if(d.value.discountNumber<=0){S({type:"warning",message:`${o("promotionalTipsTwo")}`});return}a.value.goods_list.forEach((e,i)=>{$.value.forEach(s=>{if(s.goods_id===e.goods_id){if(!e.goodsSku.sku_spec_format)d.value.discount_type=="discount"?(e.discount_rate=d.value.discountNumber+"",e.specify_price=(e.goodsSku.price*(d.value.discountNumber/10)).toFixed(2),e.discount_price=(e.goodsSku.price*(d.value.discountNumber/10)).toFixed(2),e.reduce_money=(e.goodsSku.price-e.specify_price).toFixed(2)):d.value.discount_type=="reduce"?(e.reduce_money=d.value.discountNumber+"",e.specify_price=e.goodsSku.price-e.reduce_money.toFixed(2),e.discount_price=(e.goodsSku.price-e.reduce_money).toFixed(2),e.discount_rate=(e.specify_price/e.goodsSku.price*10).toFixed(1)):(e.specify_price=d.value.discountNumber+"",e.discount_price=d.value.discountNumber+"",e.reduce_money=(e.goodsSku.price-e.specify_price).toFixed(2),e.discount_rate=(e.specify_price/e.goodsSku.price*10).toFixed(1)),e.discount_type=d.value.discount_type+"";else{e.skuList.forEach(n=>{n.is_enabled===1&&(d.value.discount_type=="discount"?(n.discount_rate=d.value.discountNumber+"",n.specify_price=(n.price*(d.value.discountNumber/10)).toFixed(2),n.discount_price=(n.price*(d.value.discountNumber/10)).toFixed(2),n.reduce_money=(n.price-n.specify_price).toFixed(2)):d.value.discount_type=="reduce"?(n.reduce_money=d.value.discountNumber+"",n.specify_price=n.price-n.reduce_money.toFixed(2),n.discount_price=(n.price-n.reduce_money).toFixed(2),n.discount_rate=(n.specify_price/n.price*10).toFixed(1)):(n.specify_price=d.value.discountNumber+"",n.discount_price=d.value.discountNumber+"",n.reduce_money=(n.price-n.specify_price).toFixed(2),n.discount_rate=(n.specify_price/n.price*10).toFixed(1)),n.discount_type=d.value.discount_type+"")});let _=e.skuList.filter(n=>n.is_enabled===1).map(n=>Number(n.discount_rate)),x=e.skuList.filter(n=>n.is_enabled===1).map(n=>Number(n.reduce_money)),y=e.skuList.filter(n=>n.is_enabled===1).map(n=>Number(n.specify_price));e.max_discount_rate=Math.max(..._),e.min_discount_rate=Math.min(..._),e.max_reduce_money=Math.max(...x),e.min_reduce_money=Math.min(...x),e.max_specify_price=Math.max(...y),e.min_specify_price=Math.min(...y)}e.valid=!0}})})},O=(e,i,s)=>{i=="discount"?e.discount_rate.length&&(e.specify_price=(e.goodsSku.price*(e.discount_rate/10)).toFixed(2),e.discount_price=(e.goodsSku.price*(e.discount_rate/10)).toFixed(2),e.reduce_money=(e.goodsSku.price-e.specify_price).toFixed(2),h.value&&(h.value.validateField("goods_list."+s+".specify_price").catch(()=>{}),h.value.validateField("goods_list."+s+".reduce_money").catch(()=>{}))):i=="reduce"?e.reduce_money.length&&(e.specify_price=(e.goodsSku.price-e.reduce_money).toFixed(2),e.discount_price=(e.goodsSku.price-e.reduce_money).toFixed(2),e.discount_rate=(e.specify_price/e.goodsSku.price*10).toFixed(1),h.value&&(h.value.validateField("goods_list."+s+".discount_rate").catch(()=>{}),h.value.validateField("goods_list."+s+".specify_price").catch(()=>{}))):e.specify_price.length&&(e.discount_price=e.specify_price+"",e.reduce_money=(e.goodsSku.price-e.specify_price).toFixed(2),e.discount_rate=(e.specify_price/e.goodsSku.price*10).toFixed(1),h.value&&(h.value.validateField("goods_list."+s+".discount_rate").catch(()=>{}),h.value.validateField("goods_list."+s+".reduce_money").catch(()=>{}))),e.discount_type=i+""},ue=()=>{history.back()};return(e,i)=>{const s=Te,_=Ve,x=Ee,y=$e,n=Me,V=Pe,re=Ce,P=Le,ce=Be,pe=De,_e=Ue,me=Ie,fe=Re;return f(),T("div",Ke,[u(_,{class:"card !border-none",shadow:"never"},{default:r(()=>[u(s,{content:l(K),icon:l(ke),onBack:i[0]||(i[0]=t=>e.$router.back())},null,8,["content","icon"])]),_:1}),Se((f(),k(_,{class:"box-card mt-[15px] !border-none",shadow:"never"},{default:r(()=>[u(me,{model:a.value,"label-width":"120px",ref_key:"formRef",ref:h,rules:l(Y),class:"page-form"},{default:r(()=>[u(y,{label:l(o)("name"),prop:"active_name"},{default:r(()=>[p("div",null,[u(x,{modelValue:a.value.active_name,"onUpdate:modelValue":i[1]||(i[1]=t=>a.value.active_name=t),clearable:"",placeholder:l(o)("namePlaceholder"),class:"input-width",maxlength:20},null,8,["modelValue","placeholder"]),p("p",Qe,v(l(o)("nameTip")),1)])]),_:1},8,["label"]),u(y,{label:l(o)("title"),prop:"active_desc"},{default:r(()=>[p("div",null,[u(x,{modelValue:a.value.active_desc,"onUpdate:modelValue":i[2]||(i[2]=t=>a.value.active_desc=t),clearable:"",placeholder:l(o)("titlePlaceholder"),class:"input-width",maxlength:20},null,8,["modelValue","placeholder"]),p("p",We,v(l(o)("titleTip")),1)])]),_:1},8,["label"]),u(y,{label:l(o)("activityTime"),prop:"discount_time"},{default:r(()=>[p("div",Ye,[u(n,{modelValue:a.value.discount_time,"onUpdate:modelValue":i[3]||(i[3]=t=>a.value.discount_time=t),type:"datetimerange","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期"},null,8,["modelValue"])])]),_:1},8,["label"]),u(y,{label:l(o)("selectProduct"),class:"!m-0"},{default:r(()=>[u(ze,{ref_key:"goodsSelectPopupRef",ref:W,modelValue:a.value.goods_ids,"onUpdate:modelValue":i[4]||(i[4]=t=>a.value.goods_ids=t),onGoodsSelect:te,min:1,max:99},null,8,["modelValue"])]),_:1},8,["label"]),u(y,{prop:"goods_list"}),a.value.goods_list.length&&c.data?(f(),k(y,{key:0},{default:r(()=>[p("div",Xe,[u(ce,{class:"!w-[1400px] !max-w-[100%]",data:c.list,size:"large",ref_key:"goods_listTableRef",ref:G,onSelectionChange:ne},{empty:r(()=>[p("span",null,v(l(o)("emptyData")),1)]),default:r(()=>[u(V,{type:"selection",width:"55"}),u(V,{label:l(o)("goodsSelectPopupGoodsInfo"),"min-width":"300"},{default:r(({row:t})=>[p("div",Ze,[p("div",we,[t.goods_cover_thumb_small?(f(),k(re,{key:0,class:"w-[60px] h-[60px]",src:l(Ne)(t.goods_cover_thumb_small),fit:"contain"},{error:r(()=>[et]),_:2},1032,["src"])):(f(),T("img",tt))]),p("div",it,[p("span",{title:t.goods_name,class:"multi-hidden"},v(t.goods_name),9,st),p("span",ot,v(t.goods_type_name),1)])])]),_:1},8,["label"]),u(V,{prop:"price",label:l(o)("price"),"min-width":"130"},{default:r(({row:t})=>[p("div",null,"￥"+v(t.goodsSku.price),1)]),_:1},8,["label"]),u(V,{label:l(o)("discounts"),width:"170"},{default:r(({row:t,$index:U})=>[t.goodsSku.sku_spec_format?(f(),k(y,{key:1,prop:"goods_list."+t.index+".valid",rules:[{trigger:"blur",validator:(b,g,m)=>{g?m():m(l(o)("skuDiscountSettingsPlaceholder"))}}]},{default:r(()=>[t.valid?(f(),T("span",at,v(t.min_discount_rate==t.max_discount_rate?t.min_discount_rate:t.min_discount_rate+"-"+t.max_discount_rate),1)):(f(),T("span",lt,"--"))]),_:2},1032,["prop","rules"])):(f(),k(y,{key:t.goods_id,prop:"goods_list."+t.index+".discount_rate",rules:[{trigger:"blur",validator:(b,g,m)=>{g.length==0?m(l(o)("discountsPlaceholder")):isNaN(g)||!F.number.test(g)?m(l(o)("discountsTips")):g<=0?m(l(o)("discountsTipsTwo")):g>9.9?m(l(o)("discountsTipsThree")):m()}}],class:"sku-form-item-wrap"},{default:r(()=>[u(x,{modelValue:t.discount_rate,"onUpdate:modelValue":b=>t.discount_rate=b,modelModifiers:{trim:!0},onBlur:b=>O(t,"discount",t.index),clearable:"",placeholder:"0.00",maxlength:"8"},null,8,["modelValue","onUpdate:modelValue","onBlur"])]),_:2},1032,["prop","rules"]))]),_:1},8,["label"]),u(V,{label:l(o)("reduceMoney"),width:"170"},{default:r(({row:t,$index:U})=>[t.goodsSku.sku_spec_format?(f(),k(y,{key:1},{default:r(()=>[t.valid?(f(),T("span",nt,v(t.min_reduce_money==t.max_reduce_money?t.min_reduce_money:t.min_reduce_money+"-"+t.max_reduce_money),1)):(f(),T("span",dt,"--"))]),_:2},1024)):(f(),k(y,{key:t.goods_id,prop:"goods_list."+t.index+".reduce_money",rules:[{trigger:"blur",validator:(b,g,m)=>{g.length==0?m(l(o)("reduceMoneyPlaceholder")):isNaN(g)||!F.digit.test(g)?m(l(o)("reduceMoneyTips")):g<=0?m(l(o)("reduceMoneyTipsTwo")):g>=parseFloat(t.goodsSku.price)?m(l(o)("reduceMoneyTipsThree")):m()}}],class:"sku-form-item-wrap"},{default:r(()=>[u(x,{modelValue:t.reduce_money,"onUpdate:modelValue":b=>t.reduce_money=b,modelModifiers:{trim:!0},onBlur:b=>O(t,"reduce",t.index),clearable:"",placeholder:"0.00",maxlength:"8"},null,8,["modelValue","onUpdate:modelValue","onBlur"])]),_:2},1032,["prop","rules"]))]),_:1},8,["label"]),u(V,{label:l(o)("promotional"),width:"170"},{default:r(({row:t,$index:U})=>[t.goodsSku.sku_spec_format?(f(),k(y,{key:1},{default:r(()=>[t.valid?(f(),T("span",ut,v(t.min_specify_price==t.max_specify_price?t.min_specify_price:t.min_specify_price+"-"+t.max_specify_price),1)):(f(),T("span",rt,"--"))]),_:2},1024)):(f(),k(y,{key:t.goods_id,prop:"goods_list."+t.index+".specify_price",rules:[{trigger:"blur",validator:(b,g,m)=>{g.length==0?m(l(o)("promotionalPlaceholder")):isNaN(g)||!F.digit.test(g)?m(l(o)("promotionalTips")):g<=0?m(l(o)("promotionalTipsTwo")):g>=parseFloat(t.goodsSku.price)?m(l(o)("promotionalTipsThree")):m()}}],class:"sku-form-item-wrap"},{default:r(()=>[u(x,{modelValue:t.specify_price,"onUpdate:modelValue":b=>t.specify_price=b,modelModifiers:{trim:!0},clearable:"",onBlur:b=>O(t,"specify",t.index),placeholder:"0.00",maxlength:"8"},null,8,["modelValue","onUpdate:modelValue","onBlur"])]),_:2},1032,["prop","rules"]))]),_:1},8,["label"]),u(V,{label:l(o)("discountType"),width:"130"},{default:r(({row:t})=>[t.goodsSku.sku_spec_format?(f(),k(y,{key:1},{default:r(()=>[M("请在设置中查看")]),_:1})):(f(),T("span",ct,v(t.discount_type=="discount"?l(o)("discounts"):t.discount_type=="reduce"?l(o)("reduceMoney"):l(o)("promotional")),1))]),_:1},8,["label"]),u(V,{label:l(o)("operation"),align:"right","min-width":"160"},{default:r(({row:t})=>[t.goodsSku.sku_spec_format?(f(),k(P,{key:0,type:"primary",link:"",onClick:U=>oe(a.value.goods_list[t.index])},{default:r(()=>[M(v(l(o)("skuDiscountSettings")),1)]),_:2},1032,["onClick"])):J("",!0),u(P,{type:"primary",link:"",onClick:U=>se(t.index)},{default:r(()=>[M(v(l(o)("delete")),1)]),_:2},1032,["onClick"])]),_:1},8,["label"])]),_:1},8,["data"]),p("div",pt,[p("div",_t,[u(pe,{modelValue:B.value,"onUpdate:modelValue":i[5]||(i[5]=t=>B.value=t),size:"large",class:"!mr-[15px]",onChange:le,indeterminate:D.value},{default:r(()=>[p("span",null,"已选 "+v($.value.length)+" 项",1)]),_:1},8,["modelValue","indeterminate"]),p("label",null,v(l(o)("batchOperation")),1),u(x,{modelValue:d.value.discountNumber,"onUpdate:modelValue":i[6]||(i[6]=t=>d.value.discountNumber=t),modelModifiers:{trim:!0},clearable:"",placeholder:d.value.discount_type=="discount"?l(o)("discounts"):d.value.discount_type=="reduce"?l(o)("reduceMoney"):l(o)("promotional"),class:"!w-[130px] ml-[10px]",maxlength:"8"},null,8,["modelValue","placeholder"]),u(P,{class:"ml-[10px]",type:"primary",onClick:de},{default:r(()=>[M(v(l(o)("confirm")),1)]),_:1})]),u(_e,{"current-page":c.page,"onUpdate:current-page":i[7]||(i[7]=t=>c.page=t),"page-size":c.limit,"onUpdate:page-size":i[8]||(i[8]=t=>c.limit=t),layout:"total, prev, pager, next, jumper",total:c.total,onCurrentChange:L},null,8,["current-page","page-size","total"])])])]),_:1})):J("",!0)]),_:1},8,["model","rules"])]),_:1})),[[fe,E.value]]),u(Ge,{ref_key:"goodsSkuPopupRef",ref:z,onSkuSave:ae},null,512),p("div",mt,[p("div",ft,[u(P,{type:"primary",onClick:i[9]||(i[9]=t=>ee(h.value))},{default:r(()=>[M(v(l(o)("save")),1)]),_:1}),u(P,{onClick:i[10]||(i[10]=t=>ue())},{default:r(()=>[M(v(l(o)("cancel")),1)]),_:1})])])])}}});const Xt=Je(gt,[["__scopeId","data-v-f070673a"]]);export{Xt as default};
