import{d as q,n as N,r as T,h as _,c as v,e as r,w as i,a as p,i as f,t as c,u as l,q as e,s as w,A as z,B as E,R as J,U as u,J as K,K as M,E as R,ac as X,ad as Y,X as H,Y as Q,p as W,g as ee}from"./index-2a89d409.js";/* empty css                   *//* empty css                  *//* empty css                   *//* empty css                 *//* empty css                    */import"./el-tooltip-4ed993c7.js";/* empty css                  *//* empty css                     *//* empty css                        *//* empty css               *//* empty css                  *//* empty css                 *//* empty css                 *//* empty css                        */import{_ as B}from"./goods_default-664bb559.js";import{B as te,C as ae,A as oe}from"./goods-3259d825.js";import{_ as se}from"./_plugin-vue_export-helper-c27b6911.js";const le=y=>(W("data-v-1340fea7"),y=y(),ee(),y),ie={class:"flex items-center mb-[10px]"},re={class:"min-w-[70px] h-[70px] flex items-center justify-center"},ne=le(()=>p("div",{class:"image-slot"},[p("img",{class:"w-[70px] h-[70px]",src:B})],-1)),de={key:1,class:"w-[70px] h-[70px]",src:B,fit:"contain"},ce={class:"ml-2"},pe=["title"],me={class:"text-primary text-[12px]"},_e={key:0,class:"batch-operation-sku"},ue={key:0},ge={key:1},fe={class:"dialog-footer"},he=q({__name:"goods-price-edit-popup",emits:["load"],setup(y,{expose:U,emit:G}){const m=N({}),P=T(0),h=T(!1),n=N({loading:!0,data:[]}),o=N({field:"",value:""}),C=(a,t)=>{o.field=a,o.value=""},$=()=>{o.field="",o.value=""},I=()=>{if(o.value.length==0){u({type:"warning",message:`${e(o.field+"Placeholder")}`});return}if(!b.digit.test(o.value)){u({type:"warning",message:`${e(o.field+"Tips")}`});return}if(o.value<0){u({type:"warning",message:`${e(o.field+"NotZeroTips")}`});return}n.data.forEach(a=>{a[o.field]=o.value}),$()},S=()=>{n.loading=!0,oe({goods_id:m.goods_id}).then(a=>{n.loading=!1,n.data=a.data}).catch(()=>{n.loading=!1})},D=a=>{Object.assign(m,a),A(),S(),h.value=!0},A=()=>{te({goods_id:m.goods_id}).then(a=>{P.value=a.data})},b={digit:/^\d{0,10}(.?\d{0,2})$/},L=()=>{let a=!0;for(let t=0;t<n.data.length;t++){const d=n.data[t];if(isNaN(d.price)||!b.digit.test(d.price)){a=!1,u({type:"warning",message:`${e("priceTips")}`});break}else if(d.price<0){a=!1,u({type:"warning",message:`${e("priceNotZeroTips")}`});break}if(isNaN(d.market_price)||!b.digit.test(d.market_price)){a=!1,u({type:"warning",message:`${e("marketPriceTips")}`});break}else if(d.market_price<0){a=!1,u({type:"warning",message:`${e("marketPriceNotZeroTips")}`});break}if(isNaN(d.cost_price)||!b.digit.test(d.cost_price)){a=!1,u({type:"warning",message:`${e("costPriceTips")}`});break}else if(d.cost_price<0){a=!1,u({type:"warning",message:`${e("costPriceNotZeroTips")}`});break}}return a},Z=()=>{if(L()){let a=[];n.data.forEach(t=>{a.push({sku_id:t.sku_id,price:t.price,market_price:t.market_price,cost_price:t.cost_price})}),ae({goods_id:m.goods_id,sku_list:a}).then(t=>{G("load"),h.value=!1})}};return U({showDialog:h,show:D}),(a,t)=>{const d=K,x=M,g=R,V=X,O=Y,j=H,F=Q;return _(),v("div",null,[r(j,{modelValue:h.value,"onUpdate:modelValue":t[5]||(t[5]=s=>h.value=s),title:l(e)("editPricePopupTitle"),width:"800px","close-on-press-escape":!1,"destroy-on-close":!0,"close-on-click-modal":!1},{footer:i(()=>[p("span",fe,[r(g,{onClick:t[4]||(t[4]=s=>h.value=!1)},{default:i(()=>[f(c(l(e)("cancel")),1)]),_:1}),r(g,{type:"primary",onClick:Z},{default:i(()=>[f(c(l(e)("confirm")),1)]),_:1})])]),default:i(()=>[p("div",ie,[p("div",re,[m.goods_cover_thumb_small?(_(),w(d,{key:0,class:"w-[70px] h-[70px]",src:l(z)(m.goods_cover_thumb_small),fit:"contain"},{error:i(()=>[ne]),_:1},8,["src"])):(_(),v("img",de))]),p("div",ce,[p("span",{title:m.goods_name,class:"multi-hidden"},c(m.goods_name),9,pe),p("span",me,c(m.goods_type_name),1)])]),n.data.length>1?(_(),v("div",_e,[p("label",null,c(l(e)("batchOperationSku")),1),o.field?(_(),v("div",ue,[r(x,{modelValue:o.value,"onUpdate:modelValue":t[0]||(t[0]=s=>o.value=s),clearable:"",placeholder:l(e)(o.field),class:"set-input",maxlength:"10",autofocus:!0},null,8,["modelValue","placeholder"]),r(g,{type:"primary",onClick:I},{default:i(()=>[f(c(l(e)("confirm")),1)]),_:1}),r(g,{onClick:$},{default:i(()=>[f(c(l(e)("cancel")),1)]),_:1})])):(_(),v("div",ge,[P.value==0?(_(),w(g,{key:0,type:"primary",link:"",onClick:t[1]||(t[1]=s=>C("price"))},{default:i(()=>[f(c(l(e)("price")),1)]),_:1})):E("",!0),r(g,{type:"primary",link:"",onClick:t[2]||(t[2]=s=>C("market_price"))},{default:i(()=>[f(c(l(e)("marketPrice")),1)]),_:1}),r(g,{type:"primary",link:"",onClick:t[3]||(t[3]=s=>C("cost_price"))},{default:i(()=>[f(c(l(e)("costPrice")),1)]),_:1})]))])):E("",!0),J((_(),w(O,{data:n.data,size:"large","max-height":"400"},{empty:i(()=>[p("span",null,c(n.loading?"":l(e)("emptyData")),1)]),default:i(()=>[n.data.length>1?(_(),w(V,{key:0,prop:"sku_name",label:l(e)("skuName"),"min-width":"120"},null,8,["label"])):E("",!0),r(V,{prop:"price",label:l(e)("price"),"min-width":"120"},{default:i(({row:s})=>[r(x,{modelValue:s.price,"onUpdate:modelValue":k=>s.price=k,clearable:"",placeholder:"0.00",maxlength:"8",disabled:P.value>0},null,8,["modelValue","onUpdate:modelValue","disabled"])]),_:1},8,["label"]),r(V,{prop:"market_price",label:l(e)("marketPrice"),"min-width":"120"},{default:i(({row:s})=>[r(x,{modelValue:s.market_price,"onUpdate:modelValue":k=>s.market_price=k,clearable:"",placeholder:"0.00",maxlength:"8"},null,8,["modelValue","onUpdate:modelValue"])]),_:1},8,["label"]),r(V,{prop:"cost_price",label:l(e)("costPrice"),"min-width":"120"},{default:i(({row:s})=>[r(x,{modelValue:s.cost_price,"onUpdate:modelValue":k=>s.cost_price=k,clearable:"",placeholder:"0.00",maxlength:"8"},null,8,["modelValue","onUpdate:modelValue"])]),_:1},8,["label"])]),_:1},8,["data"])),[[F,n.loading]])]),_:1},8,["modelValue","title"])])}}});const De=se(he,[["__scopeId","data-v-1340fea7"]]);export{De as default};
