import{d as ie,r as k,n as se,h as g,s as V,w as r,a as f,e as u,i as S,t as y,u as l,q as i,A as le,c as B,B as D,aI as ae,a$ as z,U as v,ac as ne,J as ue,K as oe,L as re,E as de,ad as ce,av as pe,ab as me,aC as _e,W as fe,M as ye,cU as ge,p as ve,g as he}from"./index-2a89d409.js";/* empty css                  *//* empty css                   *//* empty css                *//* empty css                      *//* empty css                 *//* empty css               *//* empty css                  *//* empty css                  *//* empty css                     *//* empty css                  *//* empty css                    *//* empty css                 */import"./el-tooltip-4ed993c7.js";/* empty css                  */import"./el-form-item-4ed993c7.js";/* empty css                 *//* empty css                        *//* empty css                        */import{_ as R}from"./goods_default-995568ac.js";import{_ as be}from"./_plugin-vue_export-helper-c27b6911.js";const xe=C=>(ve("data-v-f4384f6f"),C=C(),he(),C),ke={class:"w-full sku_list"},Ne={class:"flex items-center cursor-pointer"},Te={class:"min-w-[60px] h-[60px] flex items-center justify-center"},Ve=xe(()=>f("div",{class:"image-slot"},[f("img",{class:"w-[60px] h-[60px]",src:R})],-1)),Fe={key:1,class:"w-[70px] h-[60px]",src:R,fit:"contain"},Me={class:"ml-2"},Ee=["title"],$e={key:1},Ce={key:1},Le={key:1},Se={class:"flex items-center justify-between mt-[15px] !w-[1400px] !max-w-[100%]"},Be={class:"flex items-center mb-[15px]"},Ue={class:"dialog-footer"},Ie=ie({__name:"goods-sku-popup",emits:["skuSave"],setup(C,{expose:j,emit:A}){const F=k(!1),d=k({skuList:[]}),N=k(),h={number:/^\d{0,10}(.?\d{0,1})$/,digit:/^\d{0,10}(.?\d{0,2})$/},G=e=>{d.value=ae(e),d.value.skuList.forEach((s,o)=>{s.index=o}),P(),F.value=!0},n=se({page:1,limit:5,total:0,data:[],list:[]}),P=(e=1)=>{d.value.skuList.length?(n.data=O(d.value.skuList,n.limit),n.list=n.data[e-1],n.total=parseInt(d.value.skuList.length.toString()),z(()=>{a.value.discountNumber="",x.value=[],L.value&&L.value.clearSelection(),E.value&&(E.value=!1),M.value&&(M.value=!1)})):(n.data=[],n.list=[],n.total=0,n.page=1)},O=(e,s)=>{for(var o=[],b=0;b<e.length;b+=s)o.push(e.slice(b,b+s));return o},a=k({discount_type:"discount",discountNumber:""}),M=k(),E=k(!1),q=e=>{E.value=!1,L.value.toggleAllSelection()},L=k(),x=k([]),J=e=>{x.value=e,M.value=!1,x.value.length>0&&x.value.length<n.list.length?E.value=!0:E.value=!1,x.value.length==n.list.length&&(M.value=!0)},K=()=>{if(!x.value.length){v({type:"warning",message:`${i("batchEmptySelectedGoodsTips")}`});return}if(a.value.discount_type=="discount"){if(a.value.discountNumber.length==0){v({type:"warning",message:`${i("discountsPlaceholder")}`});return}else if(isNaN(a.value.discountNumber)||!h.number.test(a.value.discountNumber)){v({type:"warning",message:`${i("discountsTips")}`});return}else if(a.value.discountNumber<=0){v({type:"warning",message:`${i("discountsTipsTwo")}`});return}else if(a.value.discountNumber>9.9){v({type:"warning",message:`${i("discountsTipsThree")}`});return}}else if(a.value.discount_type=="reduce"){if(a.value.discountNumber.length==0){v({type:"warning",message:`${i("reduceMoneyPlaceholder")}`});return}else if(isNaN(a.value.discountNumber)||!h.digit.test(a.value.discountNumber)){v({type:"warning",message:`${i("reduceMoneyTips")}`});return}else if(a.value.discountNumber<=0){v({type:"warning",message:`${i("reduceMoneyTipsTwo")}`});return}}else if(a.value.discountNumber.length==0){v({type:"warning",message:`${i("promotionalPlaceholder")}`});return}else if(isNaN(a.value.discountNumber)||!h.digit.test(a.value.discountNumber)){v({type:"warning",message:`${i("promotionalTips")}`});return}else if(a.value.discountNumber<=0){v({type:"warning",message:`${i("promotionalTipsTwo")}`});return}d.value.skuList.forEach((e,s)=>{x.value.forEach(o=>{o.sku_id===e.sku_id&&e.is_enabled===1&&(a.value.discount_type=="discount"?(e.discount_rate=a.value.discountNumber+"",e.specify_price=(e.price*(a.value.discountNumber/10)).toFixed(2),e.discount_price=(e.price*(a.value.discountNumber/10)).toFixed(2),e.reduce_money=(e.price-e.specify_price).toFixed(2)):a.value.discount_type=="reduce"?(e.reduce_money=a.value.discountNumber+"",e.specify_price=(e.price-e.reduce_money).toFixed(2),e.discount_price=(e.price-e.reduce_money).toFixed(2),e.discount_rate=(e.specify_price/e.price*10).toFixed(1)):(e.specify_price=a.value.discountNumber+"",e.discount_price=a.value.discountNumber+"",e.reduce_money=(e.price-e.specify_price).toFixed(2),e.discount_rate=(e.specify_price/e.price*10).toFixed(1)),e.discount_type=a.value.discount_type+"",N.value&&(N.value.validateField("skuList."+s+".discount_rate"),N.value.validateField("skuList."+s+".specify_price"),N.value.validateField("skuList."+s+".reduce_money")))})})},U=(e,s,o)=>{s=="discount"?e.discount_rate.length&&(e.specify_price=(e.price*(e.discount_rate/10)).toFixed(2),e.discount_price=(e.price*(e.discount_rate/10)).toFixed(2),e.reduce_money=(e.price-e.specify_price).toFixed(2)):s=="reduce"?e.reduce_money.length&&(e.specify_price=(e.price-e.reduce_money).toFixed(2),e.discount_price=(e.price-e.reduce_money).toFixed(2),e.discount_rate=(e.specify_price/e.price*10).toFixed(1)):e.specify_price.length&&(e.discount_price=e.specify_price+"",e.reduce_money=(e.price-e.specify_price).toFixed(2),e.discount_rate=(e.specify_price/e.price*10).toFixed(1)),e.discount_type=s+"",N.value},W=e=>{e.is_enabled=e.is_enabled?0:1,e.is_enabled?(e.discount_type="discount",e.discount_rate="",e.reduce_money="",e.specify_price=""):(e.discount_type="discount",e.discount_rate="10",e.reduce_money="0",e.specify_price=e.price+"")},H=e=>e.is_enabled===0?!0:e.discount_rate.length==0||isNaN(e.discount_rate)||!h.number.test(e.discount_rate)||e.discount_rate<=0||e.discount_rate>9.9||e.reduce_money.length==0||isNaN(e.reduce_money)||!h.digit.test(e.reduce_money)||e.reduce_money<=0||e.reduce_money>=parseFloat(e.price)||e.specify_price.length==0||isNaN(e.specify_price)||!h.digit.test(e.specify_price)||e.specify_price<=0?!1:!(e.specify_price>=parseFloat(e.price)),Q=e=>{if(e){for(var s=0;s<d.value.skuList.length;s++)if(!H(d.value.skuList[s])){let o=Math.ceil(s+1<=n.limit?1:(s+1)/n.limit);n.list=n.data[o-1],n.page=o;break}z(async()=>{await e.validate(o=>{if(o){d.value.valid=!0;let b=d.value.skuList.filter(m=>m.is_enabled===1).map(m=>Number(m.discount_rate)),T=d.value.skuList.filter(m=>m.is_enabled===1).map(m=>Number(m.reduce_money)),$=d.value.skuList.filter(m=>m.is_enabled===1).map(m=>Number(m.specify_price));d.value.max_discount_rate=Math.max(...b),d.value.min_discount_rate=Math.min(...b),d.value.max_reduce_money=Math.max(...T),d.value.min_reduce_money=Math.min(...T),d.value.max_specify_price=Math.max(...$),d.value.min_specify_price=Math.min(...$),A("skuSave",d.value),F.value=!1}})})}};return j({show:G}),(e,s)=>{const o=ne,b=ue,T=oe,$=re,m=de,X=ce,Y=pe,I=me,Z=_e,w=fe,ee=ye,te=ge;return g(),V(te,{modelValue:F.value,"onUpdate:modelValue":s[8]||(s[8]=t=>F.value=t),title:l(i)("skuDiscountSettings"),size:"55%"},{footer:r(()=>[f("span",Ue,[u(m,{onClick:s[6]||(s[6]=t=>F.value=!1)},{default:r(()=>[S(y(l(i)("cancel")),1)]),_:1}),u(m,{type:"primary",onClick:s[7]||(s[7]=t=>Q(N.value))},{default:r(()=>[S(y(l(i)("confirm")),1)]),_:1})])]),default:r(()=>[F.value?(g(),V(ee,{key:0,model:d.value,"label-width":"120px",ref_key:"formRef",ref:N,class:"page-form"},{default:r(()=>[f("div",ke,[n.list.length?(g(),V(X,{key:0,class:"!w-[1400px] !max-w-[100%]",data:n.list,size:"large",ref_key:"goods_listTableRef",ref:L,onSelectionChange:J},{empty:r(()=>[f("span",null,y(l(i)("emptyData")),1)]),default:r(()=>[u(o,{type:"selection",width:"55"}),u(o,{label:l(i)("goodsSelectPopupGoodsInfo"),"min-width":"300"},{default:r(({row:t})=>{var _;return[f("div",Ne,[f("div",Te,[t.sku_image?(g(),V(b,{key:0,class:"w-[60px] h-[60px]",src:l(le)(t.sku_image),fit:"contain"},{error:r(()=>[Ve]),_:2},1032,["src"])):(g(),B("img",Fe))]),f("div",Me,[f("span",{title:t.sku_name,class:"multi-hidden"},y(t.sku_name||((_=t.goods)==null?void 0:_.goods_name)),9,Ee)])])]}),_:1},8,["label"]),u(o,{prop:"price",label:l(i)("price"),"min-width":"130"},null,8,["label"]),u(o,{label:l(i)("discounts"),width:"170"},{default:r(({row:t})=>[t.is_enabled?(g(),V($,{key:t.sku_id,prop:"skuList."+t.index+".discount_rate",rules:[{trigger:"blur",validator:(_,c,p)=>{c.length==0?p(l(i)("discountsPlaceholder")):isNaN(c)||!h.number.test(c)?p(l(i)("discountsTips")):c<=0?p(l(i)("discountsTipsTwo")):c>9.9?p(l(i)("discountsTipsThree")):p()}}],class:"sku-form-item-wrap"},{default:r(()=>[u(T,{modelValue:t.discount_rate,"onUpdate:modelValue":_=>t.discount_rate=_,modelModifiers:{trim:!0},onBlur:_=>U(t,"discount",t.index),clearable:"",placeholder:"0.00",maxlength:"8"},null,8,["modelValue","onUpdate:modelValue","onBlur"])]),_:2},1032,["prop","rules"])):(g(),B("span",$e,y(t.discount_rate),1))]),_:1},8,["label"]),u(o,{label:l(i)("reduceMoney"),width:"170"},{default:r(({row:t})=>[t.is_enabled?(g(),V($,{key:t.sku_id,prop:"skuList."+t.index+".reduce_money",rules:[{trigger:"blur",validator:(_,c,p)=>{c.length==0?p(l(i)("reduceMoneyPlaceholder")):isNaN(c)||!h.digit.test(c)?p(l(i)("reduceMoneyTips")):c<=0?p(l(i)("reduceMoneyTipsTwo")):c>=parseFloat(t.price)?p(l(i)("reduceMoneyTipsThree")):p()}}],class:"sku-form-item-wrap"},{default:r(()=>[u(T,{modelValue:t.reduce_money,"onUpdate:modelValue":_=>t.reduce_money=_,modelModifiers:{trim:!0},onBlur:_=>U(t,"reduce",t.index),clearable:"",placeholder:"0.00",maxlength:"8"},null,8,["modelValue","onUpdate:modelValue","onBlur"])]),_:2},1032,["prop","rules"])):(g(),B("span",Ce,y(t.reduce_money),1))]),_:1},8,["label"]),u(o,{label:l(i)("promotional"),width:"170"},{default:r(({row:t})=>[t.is_enabled?(g(),V($,{key:t.sku_id,prop:"skuList."+t.index+".specify_price",rules:[{trigger:"blur",validator:(_,c,p)=>{c.length==0?p(l(i)("promotionalPlaceholder")):isNaN(c)||!h.digit.test(c)?p(l(i)("promotionalTips")):c<=0?p(l(i)("promotionalTipsTwo")):c>=parseFloat(t.price)?p(l(i)("promotionalTipsThree")):p()}}],class:"sku-form-item-wrap"},{default:r(()=>[u(T,{modelValue:t.specify_price,"onUpdate:modelValue":_=>t.specify_price=_,modelModifiers:{trim:!0},clearable:"",onBlur:_=>U(t,"specify",t.index),placeholder:"0.00",maxlength:"8"},null,8,["modelValue","onUpdate:modelValue","onBlur"])]),_:2},1032,["prop","rules"])):(g(),B("span",Le,y(t.specify_price),1))]),_:1},8,["label"]),u(o,{label:l(i)("discountType"),width:"130"},{default:r(({row:t})=>[f("span",null,y(t.discount_type=="discount"?l(i)("discounts"):t.discount_type=="reduce"?l(i)("reduceMoney"):l(i)("promotional")),1)]),_:1},8,["label"]),u(o,{label:l(i)("operation"),fixed:"right",align:"right","min-width":"160"},{default:r(({row:t})=>[u(m,{type:"primary",link:"",onClick:_=>W(t)},{default:r(()=>[S(y(t.is_enabled?l(i)("noEnabled"):l(i)("enabled")),1)]),_:2},1032,["onClick"])]),_:1},8,["label"])]),_:1},8,["data"])):D("",!0),f("div",Se,[f("div",Be,[u(Y,{modelValue:M.value,"onUpdate:modelValue":s[0]||(s[0]=t=>M.value=t),size:"large",class:"!mr-[15px]",onChange:q,indeterminate:E.value},{default:r(()=>[f("span",null,"已选"+y(x.value.length)+"项",1)]),_:1},8,["modelValue","indeterminate"]),f("label",null,y(l(i)("batchOperation")),1),u(Z,{modelValue:a.value.discount_type,"onUpdate:modelValue":s[1]||(s[1]=t=>a.value.discount_type=t),class:"!w-[130px] ml-[10px]",onChange:s[2]||(s[2]=t=>a.value.discountNumber="")},{default:r(()=>[u(I,{label:l(i)("discounts"),value:"discount"},null,8,["label"]),u(I,{label:l(i)("reduceMoney"),value:"reduce"},null,8,["label"]),u(I,{label:l(i)("promotional"),value:"specify"},null,8,["label"])]),_:1},8,["modelValue"]),u(T,{modelValue:a.value.discountNumber,"onUpdate:modelValue":s[3]||(s[3]=t=>a.value.discountNumber=t),modelModifiers:{trim:!0},clearable:"",placeholder:a.value.discount_type=="discount"?l(i)("discounts"):a.value.discount_type=="reduce"?l(i)("reduceMoney"):l(i)("promotional"),class:"!w-[130px] ml-[10px]",maxlength:"8"},null,8,["modelValue","placeholder"]),u(m,{class:"ml-[10px]",type:"primary",onClick:K},{default:r(()=>[S(y(l(i)("confirm")),1)]),_:1})]),u(w,{"current-page":n.page,"onUpdate:current-page":s[4]||(s[4]=t=>n.page=t),"page-size":n.limit,"onUpdate:page-size":s[5]||(s[5]=t=>n.limit=t),layout:"total, prev, pager, next, jumper",total:n.total,onCurrentChange:P},null,8,["current-page","page-size","total"])])])]),_:1},8,["model"])):D("",!0)]),_:1},8,["modelValue","title"])}}});const st=be(Ie,[["__scopeId","data-v-f4384f6f"]]);export{st as default};
