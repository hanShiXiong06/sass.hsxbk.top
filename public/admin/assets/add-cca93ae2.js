import{d as me,f as fe,x as ge,r as N,l as ve,q as o,n as ye,h as f,c as T,e as u,w as r,u as a,aP as he,R as be,s as k,a as p,t as v,A as xe,i as $,B as G,a$ as ke,aI as O,U as S,aQ as Se,a7 as Ne,K as Fe,L as Te,bO as Ve,ac as Ee,J as $e,E as Pe,ad as Me,av as Ce,W as Le,M as Be,Y as Ue,p as De,g as Re}from"./index-a3bdc7eb.js";/* empty css                   *//* empty css                *//* empty css                      *//* empty css                 *//* empty css               *//* empty css                  *//* empty css                  *//* empty css                     *//* empty css                  *//* empty css                    *//* empty css                 */import"./el-tooltip-4ed993c7.js";/* empty css                  *//* empty css                 *//* empty css                        *//* empty css                        *//* empty css                       */import"./el-form-item-4ed993c7.js";/* empty css                *//* empty css                   *//* empty css                       */import{_ as J}from"./goods_default-664bb559.js";import{k as Ie}from"./marketing-1a74f24b.js";import Oe from"./goods-select-popup-55140071.js";import je from"./goods-sku-popup-7e1fa7a4.js";import{_ as qe}from"./_plugin-vue_export-helper-c27b6911.js";/* empty css                  *//* empty css                   *//* empty css                          *//* empty css                 */import"./goods-3dae38ed.js";/* empty css                  */const Ae=C=>(De("data-v-b6b1d9ab"),C=C(),Re(),C),ze={class:"main-container"},Ge={class:"text-[14px] text-[#999]"},Je={class:"text-[14px] text-[#999]"},He={class:"w-[180px]"},Ke={class:"w-full sku_list"},Qe={class:"flex items-center cursor-pointer"},We={class:"min-w-[60px] h-[60px] flex items-center justify-center"},Ye=Ae(()=>p("div",{class:"image-slot"},[p("img",{class:"w-[60px] h-[60px]",src:J})],-1)),Xe={key:1,class:"w-[70px] h-[60px]",src:J,fit:"contain"},Ze={class:"ml-2"},we=["title"],et={class:"text-primary text-[12px]"},tt={key:0},it={key:1},st={key:0},ot={key:1},at={key:0},lt={key:1},nt={key:0},dt={class:"flex items-center justify-between mt-[15px] !w-[1400px] !max-w-[100%]"},ut={class:"flex items-center mb-[15px]"},rt={class:"fixed-footer-wrap"},ct={class:"fixed-footer"},pt=me({__name:"add",setup(C){fe();const H=ge().meta.title,P=N(!1),K=new Date,D=new Date,Q=N(null);D.setTime(D.getTime()+3600*1e3*2*360);const n=N({...{active_name:"",active_desc:"",active_status:"",start_time:"",end_time:"",goods_data:"",goods_ids:[],goods_list:[],discount_time:[K,D]}}),h=N(),F={number:/^\d{0,10}(.?\d{0,1})$/,digit:/^\d{0,10}(.?\d{0,2})$/},W=ve(()=>({active_name:[{required:!0,message:o("namePlaceholder"),trigger:"blur"},{validator:j,trigger:"blur"}],active_desc:[{required:!0,message:o("titlePlaceholder"),trigger:"blur"},{validator:j,trigger:"blur"}],goods_list:[{required:!0,message:o("selectProductPlaceholder"),trigger:"change"}],discount_time:[{required:!0,validator:Y,trigger:"change"}]})),j=(e,i,s)=>{if(i.trim()==="")return s(new Error(o("noSpaceAllowed")));s()},Y=(e,i,s)=>{!n.value.discount_time||n.value.discount_time&&!n.value.discount_time[0]&&!n.value.discount_time[1]?s(new Error(o("请选择活动时间"))):n.value.discount_time[0]?n.value.discount_time[1]?n.value.discount_time[1]<=n.value.discount_time[0]&&s(new Error(o("活动结束时间不能小于等于活动开始时间"))):s(new Error(o("请选择活动结束时间"))):s(new Error(o("请选择活动开始时间"))),s()},X=e=>e.discount_rate.length==0||isNaN(e.discount_rate)||!F.number.test(e.discount_rate)||e.discount_rate<=0||e.discount_rate>9.9||e.reduce_money.length==0||isNaN(e.reduce_money)||!F.digit.test(e.reduce_money)||e.reduce_money<=0||e.reduce_money>=parseFloat(e.goodsSku.price)||e.specify_price.length==0||isNaN(e.specify_price)||!F.digit.test(e.specify_price)||e.specify_price<=0?!1:!(e.specify_price>=parseFloat(e.goodsSku.price)),Z=e=>{if(!(P.value||!e)){for(var i=0;i<n.value.goods_list.length;i++){let s=n.value.goods_list[i];if(s.goodsSku.sku_spec_format)if(s.valid)s.sku_list=s.skuList;else{let _=Math.ceil(i+1<=c.limit?1:(i+1)/c.limit);c.list=c.data[_-1],c.page=_;break}else if(X(s))s.skuList[0].discount_rate=s.discount_rate,s.skuList[0].reduce_money=s.reduce_money,s.skuList[0].specify_price=s.specify_price,s.skuList[0].discount_price=s.discount_price,s.skuList[0].discount_type=s.discount_type,s.skuList[0].is_enabled=s.is_enabled,s.sku_list=s.skuList;else{let _=Math.ceil(i+1<=c.limit?1:(i+1)/c.limit);c.list=c.data[_-1],c.page=_;break}}ke(async()=>{await e.validate(s=>{s&&(P.value=!0,n.value.start_time=n.value.discount_time[0],n.value.end_time=n.value.discount_time[1],n.value.goods_data=JSON.stringify(n.value.goods_list),Ie(n.value).then(_=>{P.value=!1,history.back()}).catch(()=>{P.value=!1}))})})}},c=ye({page:1,limit:5,total:0,data:[],list:[]}),w=e=>{if(n.value.goods_list.length){let i=O(Object.values(e)).map((s,_)=>(s.goodsSku.sku_spec_format?s.skuList=q(s.skuList):(s.discount_type="discount",s.discount_rate="",s.reduce_money="",s.specify_price="",s.is_enabled=1),s.index=_,s.valid=!1,n.value.goods_list.forEach(b=>{b.goods_id==s.goods_id&&(s=Object.assign(s,b),s.index=_)}),s));n.value.goods_list=i}else n.value.goods_list=O(Object.values(e)).map((i,s)=>(i.goodsSku.sku_spec_format?i.skuList=q(i.skuList):(i.discount_type="discount",i.discount_rate="",i.reduce_money="",i.specify_price="",i.is_enabled=1),i.index=s,i.valid=!1,i));R(),h.value&&h.value.validateField("goods_list").catch(()=>{})},q=e=>e.map(i=>(i.discount_rate||(i.discount_type="discount",i.discount_rate="",i.reduce_money="",i.specify_price="",i.is_enabled=1),i)),R=(e=1)=>{n.value.goods_list.length?(c.data=ee(n.value.goods_list,c.limit),c.list=c.data[e-1],c.total=parseInt(n.value.goods_list.length.toString())):(c.data=[],c.list=[],c.total=0,c.page=1)},ee=(e,i)=>{for(var s=[],_=0;_<e.length;_+=i)s.push(e.slice(_,_+i));return s},te=e=>{n.value.goods_list.splice(e,1),n.value.goods_list.forEach((i,s)=>{i.index=s}),n.value.goods_ids.splice(e,1),R(c.page),h.value&&h.value.validateField("goods_list").catch(()=>{})},A=N(),ie=e=>{var i;(i=A.value)==null||i.show(e)},se=e=>{n.value.goods_list.forEach(i=>{i.goods_id==e.goods_id&&(i=O(Object.assign(i,e)))})},d=N({discount_type:"discount",discountNumber:""}),L=N(),B=N(!1),oe=e=>{B.value=!1,z.value.toggleAllSelection()},z=N(),E=N([]),ae=e=>{E.value=e,L.value=!1,E.value.length>0&&E.value.length<c.list.length?B.value=!0:B.value=!1,E.value.length==c.list.length&&(L.value=!0)},le=()=>{if(!E.value.length){S({type:"warning",message:`${o("batchEmptySelectedGoodsTips")}`});return}if(d.value.discount_type=="discount"){if(d.value.discountNumber.length==0){S({type:"warning",message:`${o("discountsPlaceholder")}`});return}else if(isNaN(d.value.discountNumber)||!F.number.test(d.value.discountNumber)){S({type:"warning",message:`${o("discountsTips")}`});return}else if(d.value.discountNumber<=0){S({type:"warning",message:`${o("discountsTipsTwo")}`});return}else if(d.value.discountNumber>9.9){S({type:"warning",message:`${o("discountsTipsThree")}`});return}}else if(d.value.discount_type=="reduce"){if(d.value.discountNumber.length==0){S({type:"warning",message:`${o("reduceMoneyPlaceholder")}`});return}else if(isNaN(d.value.discountNumber)||!F.digit.test(d.value.discountNumber)){S({type:"warning",message:`${o("reduceMoneyTips")}`});return}else if(d.value.discountNumber<=0){S({type:"warning",message:`${o("reduceMoneyTipsTwo")}`});return}}else if(d.value.discountNumber.length==0){S({type:"warning",message:`${o("promotionalPlaceholder")}`});return}else if(isNaN(d.value.discountNumber)||!F.digit.test(d.value.discountNumber)){S({type:"warning",message:`${o("promotionalTips")}`});return}else if(d.value.discountNumber<=0){S({type:"warning",message:`${o("promotionalTipsTwo")}`});return}n.value.goods_list.forEach((e,i)=>{E.value.forEach(s=>{if(s.goods_id===e.goods_id){if(!e.goodsSku.sku_spec_format)d.value.discount_type=="discount"?(e.discount_rate=d.value.discountNumber+"",e.specify_price=(e.goodsSku.price*(d.value.discountNumber/10)).toFixed(2),e.discount_price=(e.goodsSku.price*(d.value.discountNumber/10)).toFixed(2),e.reduce_money=(e.goodsSku.price-e.specify_price).toFixed(2)):d.value.discount_type=="reduce"?(e.reduce_money=d.value.discountNumber+"",e.specify_price=e.goodsSku.price-e.reduce_money.toFixed(2),e.discount_price=(e.goodsSku.price-e.reduce_money).toFixed(2),e.discount_rate=(e.specify_price/e.goodsSku.price*10).toFixed(1)):(e.specify_price=d.value.discountNumber+"",e.discount_price=d.value.discountNumber+"",e.reduce_money=(e.goodsSku.price-e.specify_price).toFixed(2),e.discount_rate=(e.specify_price/e.goodsSku.price*10).toFixed(1)),e.discount_type=d.value.discount_type+"";else{e.skuList.forEach(l=>{l.is_enabled===1&&(d.value.discount_type=="discount"?(l.discount_rate=d.value.discountNumber+"",l.specify_price=(l.price*(d.value.discountNumber/10)).toFixed(2),l.discount_price=(l.price*(d.value.discountNumber/10)).toFixed(2),l.reduce_money=(l.price-l.specify_price).toFixed(2)):d.value.discount_type=="reduce"?(l.reduce_money=d.value.discountNumber+"",l.specify_price=l.price-l.reduce_money.toFixed(2),l.discount_price=(l.price-l.reduce_money).toFixed(2),l.discount_rate=(l.specify_price/l.price*10).toFixed(1)):(l.specify_price=d.value.discountNumber+"",l.discount_price=d.value.discountNumber+"",l.reduce_money=(l.price-l.specify_price).toFixed(2),l.discount_rate=(l.specify_price/l.price*10).toFixed(1)),l.discount_type=d.value.discount_type+"")});let _=e.skuList.filter(l=>l.is_enabled===1).map(l=>Number(l.discount_rate)),b=e.skuList.filter(l=>l.is_enabled===1).map(l=>Number(l.reduce_money)),y=e.skuList.filter(l=>l.is_enabled===1).map(l=>Number(l.specify_price));e.max_discount_rate=Math.max(..._),e.min_discount_rate=Math.min(..._),e.max_reduce_money=Math.max(...b),e.min_reduce_money=Math.min(...b),e.max_specify_price=Math.max(...y),e.min_specify_price=Math.min(...y)}e.valid=!0}})})},I=(e,i,s)=>{i=="discount"?e.discount_rate.length&&(e.specify_price=(e.goodsSku.price*(e.discount_rate/10)).toFixed(2),e.discount_price=(e.goodsSku.price*(e.discount_rate/10)).toFixed(2),e.reduce_money=(e.goodsSku.price-e.specify_price).toFixed(2),h.value&&(h.value.validateField("goods_list."+s+".specify_price").catch(()=>{}),h.value.validateField("goods_list."+s+".reduce_money").catch(()=>{}))):i=="reduce"?e.reduce_money.length&&(e.specify_price=(e.goodsSku.price-e.reduce_money).toFixed(2),e.discount_price=(e.goodsSku.price-e.reduce_money).toFixed(2),e.discount_rate=(e.specify_price/e.goodsSku.price*10).toFixed(1),h.value&&(h.value.validateField("goods_list."+s+".discount_rate").catch(()=>{}),h.value.validateField("goods_list."+s+".specify_price").catch(()=>{}))):e.specify_price.length&&(e.discount_price=e.specify_price+"",e.reduce_money=(e.goodsSku.price-e.specify_price).toFixed(2),e.discount_rate=(e.specify_price/e.goodsSku.price*10).toFixed(1),h.value&&(h.value.validateField("goods_list."+s+".discount_rate").catch(()=>{}),h.value.validateField("goods_list."+s+".reduce_money").catch(()=>{}))),e.discount_type=i+""},ne=()=>{history.back()};return(e,i)=>{const s=Se,_=Ne,b=Fe,y=Te,l=Ve,V=Ee,de=$e,M=Pe,ue=Me,re=Ce,ce=Le,pe=Be,_e=Ue;return f(),T("div",ze,[u(_,{class:"card !border-none",shadow:"never"},{default:r(()=>[u(s,{content:a(H),icon:a(he),onBack:i[0]||(i[0]=t=>e.$router.back())},null,8,["content","icon"])]),_:1}),be((f(),k(_,{class:"box-card mt-[15px] !border-none",shadow:"never"},{default:r(()=>[u(pe,{model:n.value,"label-width":"120px",ref_key:"formRef",ref:h,rules:a(W),class:"page-form"},{default:r(()=>[u(y,{label:a(o)("name"),prop:"active_name"},{default:r(()=>[p("div",null,[u(b,{modelValue:n.value.active_name,"onUpdate:modelValue":i[1]||(i[1]=t=>n.value.active_name=t),clearable:"",placeholder:a(o)("namePlaceholder"),class:"input-width",maxlength:20},null,8,["modelValue","placeholder"]),p("p",Ge,v(a(o)("nameTip")),1)])]),_:1},8,["label"]),u(y,{label:a(o)("title"),prop:"active_desc"},{default:r(()=>[p("div",null,[u(b,{modelValue:n.value.active_desc,"onUpdate:modelValue":i[2]||(i[2]=t=>n.value.active_desc=t),clearable:"",placeholder:a(o)("titlePlaceholder"),class:"input-width",maxlength:20},null,8,["modelValue","placeholder"]),p("p",Je,v(a(o)("titleTip")),1)])]),_:1},8,["label"]),u(y,{label:a(o)("activityTime"),prop:"discount_time"},{default:r(()=>[p("div",He,[u(l,{modelValue:n.value.discount_time,"onUpdate:modelValue":i[3]||(i[3]=t=>n.value.discount_time=t),type:"datetimerange","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期"},null,8,["modelValue"])])]),_:1},8,["label"]),u(y,{label:a(o)("selectProduct"),class:"!m-0"},{default:r(()=>[u(Oe,{ref_key:"goodsSelectPopupRef",ref:Q,modelValue:n.value.goods_ids,"onUpdate:modelValue":i[4]||(i[4]=t=>n.value.goods_ids=t),onGoodsSelect:w,min:1,max:99},null,8,["modelValue"])]),_:1},8,["label"]),u(y,{prop:"goods_list"}),n.value.goods_list.length&&c.data?(f(),k(y,{key:0},{default:r(()=>[p("div",Ke,[u(ue,{class:"!w-[1400px] !max-w-[100%]",data:c.list,size:"large",ref_key:"goods_listTableRef",ref:z,onSelectionChange:ae},{empty:r(()=>[p("span",null,v(a(o)("emptyData")),1)]),default:r(()=>[u(V,{type:"selection",width:"55"}),u(V,{label:a(o)("goodsSelectPopupGoodsInfo"),"min-width":"300"},{default:r(({row:t})=>[p("div",Qe,[p("div",We,[t.goods_cover_thumb_small?(f(),k(de,{key:0,class:"w-[60px] h-[60px]",src:a(xe)(t.goods_cover_thumb_small),fit:"contain"},{error:r(()=>[Ye]),_:2},1032,["src"])):(f(),T("img",Xe))]),p("div",Ze,[p("span",{title:t.goods_name,class:"multi-hidden"},v(t.goods_name),9,we),p("span",et,v(t.goods_type_name),1)])])]),_:1},8,["label"]),u(V,{prop:"price",label:a(o)("price"),"min-width":"130"},{default:r(({row:t})=>[p("div",null,"￥"+v(t.goodsSku.price),1)]),_:1},8,["label"]),u(V,{label:a(o)("discounts"),width:"170"},{default:r(({row:t,$index:U})=>[t.goodsSku.sku_spec_format?(f(),k(y,{key:1,prop:"goods_list."+t.index+".valid",rules:[{trigger:"blur",validator:(x,g,m)=>{g?m():m(a(o)("skuDiscountSettingsPlaceholder"))}}]},{default:r(()=>[t.valid?(f(),T("span",tt,v(t.min_discount_rate==t.max_discount_rate?t.min_discount_rate:t.min_discount_rate+"-"+t.max_discount_rate),1)):(f(),T("span",it,"--"))]),_:2},1032,["prop","rules"])):(f(),k(y,{key:t.goods_id,prop:"goods_list."+t.index+".discount_rate",rules:[{trigger:"blur",validator:(x,g,m)=>{g.length==0?m(a(o)("discountsPlaceholder")):isNaN(g)||!F.number.test(g)?m(a(o)("discountsTips")):g<=0?m(a(o)("discountsTipsTwo")):g>9.9?m(a(o)("discountsTipsThree")):m()}}],class:"sku-form-item-wrap"},{default:r(()=>[u(b,{modelValue:t.discount_rate,"onUpdate:modelValue":x=>t.discount_rate=x,modelModifiers:{trim:!0},onBlur:x=>I(t,"discount",t.index),clearable:"",placeholder:"0.00",maxlength:"8"},null,8,["modelValue","onUpdate:modelValue","onBlur"])]),_:2},1032,["prop","rules"]))]),_:1},8,["label"]),u(V,{label:a(o)("reduceMoney"),width:"170"},{default:r(({row:t,$index:U})=>[t.goodsSku.sku_spec_format?(f(),k(y,{key:1},{default:r(()=>[t.valid?(f(),T("span",st,v(t.min_reduce_money==t.max_reduce_money?t.min_reduce_money:t.min_reduce_money+"-"+t.max_reduce_money),1)):(f(),T("span",ot,"--"))]),_:2},1024)):(f(),k(y,{key:t.goods_id,prop:"goods_list."+t.index+".reduce_money",rules:[{trigger:"blur",validator:(x,g,m)=>{g.length==0?m(a(o)("reduceMoneyPlaceholder")):isNaN(g)||!F.digit.test(g)?m(a(o)("reduceMoneyTips")):g<=0?m(a(o)("reduceMoneyTipsTwo")):g>=parseFloat(t.goodsSku.price)?m(a(o)("reduceMoneyTipsThree")):m()}}],class:"sku-form-item-wrap"},{default:r(()=>[u(b,{modelValue:t.reduce_money,"onUpdate:modelValue":x=>t.reduce_money=x,modelModifiers:{trim:!0},onBlur:x=>I(t,"reduce",t.index),clearable:"",placeholder:"0.00",maxlength:"8"},null,8,["modelValue","onUpdate:modelValue","onBlur"])]),_:2},1032,["prop","rules"]))]),_:1},8,["label"]),u(V,{label:a(o)("promotional"),width:"170"},{default:r(({row:t,$index:U})=>[t.goodsSku.sku_spec_format?(f(),k(y,{key:1},{default:r(()=>[t.valid?(f(),T("span",at,v(t.min_specify_price==t.max_specify_price?t.min_specify_price:t.min_specify_price+"-"+t.max_specify_price),1)):(f(),T("span",lt,"--"))]),_:2},1024)):(f(),k(y,{key:t.goods_id,prop:"goods_list."+t.index+".specify_price",rules:[{trigger:"blur",validator:(x,g,m)=>{g.length==0?m(a(o)("promotionalPlaceholder")):isNaN(g)||!F.digit.test(g)?m(a(o)("promotionalTips")):g<=0?m(a(o)("promotionalTipsTwo")):g>=parseFloat(t.goodsSku.price)?m(a(o)("promotionalTipsThree")):m()}}],class:"sku-form-item-wrap"},{default:r(()=>[u(b,{modelValue:t.specify_price,"onUpdate:modelValue":x=>t.specify_price=x,modelModifiers:{trim:!0},clearable:"",onBlur:x=>I(t,"specify",t.index),placeholder:"0.00",maxlength:"8"},null,8,["modelValue","onUpdate:modelValue","onBlur"])]),_:2},1032,["prop","rules"]))]),_:1},8,["label"]),u(V,{label:a(o)("discountType"),width:"130"},{default:r(({row:t})=>[t.goodsSku.sku_spec_format?(f(),k(y,{key:1},{default:r(()=>[$("请在设置中查看")]),_:1})):(f(),T("span",nt,v(t.discount_type=="discount"?a(o)("discounts"):t.discount_type=="reduce"?a(o)("reduceMoney"):a(o)("promotional")),1))]),_:1},8,["label"]),u(V,{label:a(o)("operation"),align:"right","min-width":"160"},{default:r(({row:t})=>[t.goodsSku.sku_spec_format?(f(),k(M,{key:0,type:"primary",link:"",onClick:U=>ie(n.value.goods_list[t.index])},{default:r(()=>[$(v(a(o)("skuDiscountSettings")),1)]),_:2},1032,["onClick"])):G("",!0),u(M,{type:"primary",link:"",onClick:U=>te(t.index)},{default:r(()=>[$(v(a(o)("delete")),1)]),_:2},1032,["onClick"])]),_:1},8,["label"])]),_:1},8,["data"]),p("div",dt,[p("div",ut,[u(re,{modelValue:L.value,"onUpdate:modelValue":i[5]||(i[5]=t=>L.value=t),size:"large",class:"!mr-[15px]",onChange:oe,indeterminate:B.value},{default:r(()=>[p("span",null,"已选 "+v(E.value.length)+" 项",1)]),_:1},8,["modelValue","indeterminate"]),p("label",null,v(a(o)("batchOperation")),1),u(b,{modelValue:d.value.discountNumber,"onUpdate:modelValue":i[6]||(i[6]=t=>d.value.discountNumber=t),modelModifiers:{trim:!0},clearable:"",placeholder:d.value.discount_type=="discount"?a(o)("discounts"):d.value.discount_type=="reduce"?a(o)("reduceMoney"):a(o)("promotional"),class:"!w-[130px] ml-[10px]",maxlength:"8"},null,8,["modelValue","placeholder"]),u(M,{class:"ml-[10px]",type:"primary",onClick:le},{default:r(()=>[$(v(a(o)("confirm")),1)]),_:1})]),u(ce,{"current-page":c.page,"onUpdate:current-page":i[7]||(i[7]=t=>c.page=t),"page-size":c.limit,"onUpdate:page-size":i[8]||(i[8]=t=>c.limit=t),layout:"total, prev, pager, next, jumper",total:c.total,onCurrentChange:R},null,8,["current-page","page-size","total"])])])]),_:1})):G("",!0)]),_:1},8,["model","rules"])]),_:1})),[[_e,P.value]]),u(je,{ref_key:"goodsSkuPopupRef",ref:A,onSkuSave:se},null,512),p("div",rt,[p("div",ct,[u(M,{type:"primary",onClick:i[9]||(i[9]=t=>Z(h.value))},{default:r(()=>[$(v(a(o)("save")),1)]),_:1}),u(M,{onClick:i[10]||(i[10]=t=>ne())},{default:r(()=>[$(v(a(o)("cancel")),1)]),_:1})])])])}}});const Qt=qe(pt,[["__scopeId","data-v-b6b1d9ab"]]);export{Qt as default};
