import{d as ee,x as le,f as ae,r as T,R as oe,h as p,c as b,e as u,w as r,u as a,aP as te,s as y,a as d,t as f,q as t,A as re,i as m,F as V,c8 as B,T as q,v as C,B as $,a3 as ue,aQ as ne,a7 as ie,aW as se,J as de,L as _e,at as pe,au as fe,ac as ve,K as xe,ad as ce,M as me,E as be,Y as ge,p as ke,g as ye}from"./index-6f32d09b.js";/* empty css                   *//* empty css                  *//* empty css                *//* empty css                 *//* empty css                    */import"./el-tooltip-4ed993c7.js";/* empty css                  *//* empty css                     *//* empty css                 *//* empty css                        *//* empty css               *//* empty css                       *//* empty css                 */import"./el-form-item-4ed993c7.js";/* empty css                 *//* empty css                        *//* empty css                 *//* empty css                *//* empty css                   *//* empty css                       */import{_ as A}from"./goods_default-247a7f2b.js";import{g as he,s as j}from"./goods-9c7738ee.js";import{_ as we}from"./_plugin-vue_export-helper-c27b6911.js";const Ve=O=>(ke("data-v-17bdf644"),O=O(),ye(),O),$e={class:"main-container"},Pe={class:"text mt-[20px] text-[14px] leading-[25px]"},Le=Ve(()=>d("div",{class:"image-slot"},[d("img",{class:"w-[98px] h-[98px]",src:A})],-1)),Re={key:1,class:"w-[98px] h-[98px]",src:A,fit:"contain"},Fe={class:"text text-[14px] leading-[25px]"},Ee={class:"text-[var(--el-text-color-secondary)] text-[12px] leading-[25px]"},Te={class:"w-full"},Be={class:"h-[62px] border-box py-[15px]"},Oe={class:"text-[var(--el-text-color-secondary)] text-[12px] leading-[25px]"},Ue={class:"px-[16px] border-box"},Ne={class:"h-[62px] border-box py-[15px] px-[16px]"},qe={class:"h-[62px] border-box py-[15px] px-[16px]"},Ce={class:"fixed-footer-wrap"},Ie={class:"fixed-footer"},De=ee({__name:"config",setup(O){const I=le(),J=ae(),H=I.meta.title,h=T(!1),L=T(!1),k=T({}),R={required:/[\S]+/,number:/^\d{0,10}$/,digit:/^\d{0,10}(.?\d{0,2})$/,special:/^\d{0,10}(.?\d{0,3})$/},e=T({id:0,is_fenxiao:1,fenxiao_type:1,skuList:[],fenxiao_rule:{}}),D=T(),Q=w=>{L.value=!0,he(w).then(n=>{k.value=n.data,e.value.id=I.query.goods_id,e.value.fenxiao_type=n.data.goods_info.fenxiao_type,e.value.is_fenxiao=n.data.goods_info.is_set_fenxiao,e.value.skuList=n.data.goods_info.skuList,e.value.fenxiao_rule=n.data.goods_info.fenxiaoGoods&&Object.keys(n.data.goods_info.fenxiaoGoods.fenxiao_rule).length?JSON.parse(n.data.goods_info.fenxiaoGoods.fenxiao_rule):{},n.data.goods_info.skuList.forEach((g,F)=>{g.calculate_price=g.calculate_price||"",e.value.fenxiao_rule[g.sku_id]||(e.value.fenxiao_rule[g.sku_id]={},n.data.rule.forEach((P,S)=>{e.value.fenxiao_rule[g.sku_id][P.level_id]=ue(P),e.value.fenxiao_rule[g.sku_id][P.level_id].one_money="0",e.value.fenxiao_rule[g.sku_id][P.level_id].two_money="0"}))}),L.value=!1}).catch(()=>{L.value=!1})};let W=Number(I.query.goods_id);Q(W);const U=w=>{var n;(n=D.value)==null||n.validateField(w)},Y=()=>{var w;if(e.value.fenxiao_type==2)(w=D.value)==null||w.validate(n=>{if(n){if(h.value)return;h.value=!0,j(e.value).then(g=>{h.value=!1,G()}).catch(()=>{h.value=!1})}});else{if(h.value)return;h.value=!0,j(e.value).then(n=>{h.value=!1,G()}).catch(()=>{h.value=!1})}},G=()=>{J.push("/shop_fenxiao/management/goods")};return(w,n)=>{const g=ne,F=ie,P=se,S=de,x=_e,N=pe,M=fe,c=ve,E=xe,K=ce,X=me,z=be,Z=ge;return oe((p(),b("div",$e,[u(F,{class:"card !border-none",shadow:"never"},{default:r(()=>[u(g,{content:a(H),icon:a(te),onBack:n[0]||(n[0]=l=>w.$router.back())},null,8,["content","icon"])]),_:1}),L.value?$("",!0):(p(),y(F,{key:0,class:"card mt-[15px] !border-none",shadow:"never"},{default:r(()=>[Object.keys(k.value).length?(p(),y(X,{key:0,class:"page-form",model:e.value,"label-width":"200px",ref_key:"formRef",ref:D},{default:r(()=>[u(P,{type:"info"},{default:r(()=>[d("ul",null,[d("li",null,f(a(t)("alertOne")),1),d("li",null,f(a(t)("alertTwo")),1),d("li",null,f(a(t)("alertthree")),1)])]),_:1}),d("div",Pe,f(a(t)("titleOne")),1),u(F,{class:"card !border-none",shadow:"never"},{default:r(()=>[u(x,{label:a(t)("goodsImage")},{default:r(()=>[k.value.goods_info.goods_cover_thumb_small?(p(),y(S,{key:0,class:"w-[98px] h-[98px]",src:a(re)(k.value.goods_info.goods_cover_thumb_small),fit:"contain"},{error:r(()=>[Le]),_:1},8,["src"])):(p(),b("img",Re))]),_:1},8,["label"]),u(x,{label:a(t)("goodsName")},{default:r(()=>[m(f(k.value.goods_info.goods_name),1)]),_:1},8,["label"])]),_:1}),d("div",Fe,f(a(t)("titleTwo")),1),u(F,{class:"card !border-none",shadow:"never"},{default:r(()=>[u(x,{label:a(t)("isFenxiao")},{default:r(()=>[d("div",null,[u(M,{modelValue:e.value.is_fenxiao,"onUpdate:modelValue":n[1]||(n[1]=l=>e.value.is_fenxiao=l)},{default:r(()=>[u(N,{label:1},{default:r(()=>[m(f(a(t)("isFenxiaoLabelOne")),1)]),_:1}),u(N,{label:0},{default:r(()=>[m(f(a(t)("isFenxiaoLabelTwo")),1)]),_:1})]),_:1},8,["modelValue"]),d("p",Ee,f(a(t)("isFenxiaoTipOne")),1)])]),_:1},8,["label"]),e.value.is_fenxiao?(p(),b(V,{key:0},[u(x,{label:a(t)("countPrice")},{default:r(()=>[d("div",Te,[u(K,{data:e.value.skuList,size:"large"},{default:r(()=>[u(c,{prop:"sku_name",label:a(t)("skuName"),"min-width":"120"},{default:r(({row:l})=>[d("span",null,f(l.sku_name||k.value.goods_info.goods_name),1)]),_:1},8,["label"]),u(c,{prop:"price",label:a(t)("skuPrice"),"min-width":"120"},null,8,["label"]),u(c,{prop:"cost_price",label:a(t)("costPrice"),"min-width":"120"},null,8,["label"]),u(c,{label:a(t)("calculatePrice"),"min-width":"120"},{default:r(({row:l,$index:o})=>[d("div",Be,[u(x,{prop:"skuList["+o+"].calculate_price",rules:[{trigger:"blur",required:!0,validator:(v,s,_)=>s?s<=0?_(a(t)("calculatePricePlaceholderTwo")):R.digit.test(s)?_():_(a(t)("calculatePricePlaceholderOne")):_()}],class:"sku-form-item-wrap"},{default:r(()=>[u(E,{modelValue:l.calculate_price,"onUpdate:modelValue":v=>l.calculate_price=v,clearable:"",class:"input-width mr-[10px]",onKeyup:n[2]||(n[2]=v=>a(B)(v))},{append:r(()=>[m("元")]),_:2},1032,["modelValue","onUpdate:modelValue"])]),_:2},1032,["prop","rules"])])]),_:1},8,["label"])]),_:1},8,["data"]),d("p",Oe,f(a(t)("calculatePriceTip")),1)])]),_:1},8,["label"]),u(x,{label:a(t)("type")},{default:r(()=>[u(M,{modelValue:e.value.fenxiao_type,"onUpdate:modelValue":n[3]||(n[3]=l=>e.value.fenxiao_type=l)},{default:r(()=>[u(N,{label:1},{default:r(()=>[m(f(a(t)("typeLabelOne")),1)]),_:1}),u(N,{label:2},{default:r(()=>[m(f(a(t)("typeLabelTwo")),1)]),_:1})]),_:1},8,["modelValue"])]),_:1},8,["label"]),e.value.fenxiao_type==1?(p(),y(x,{key:0},{default:r(()=>[u(K,{data:k.value.rule,size:"large"},{default:r(()=>[u(c,{prop:"level_name",label:a(t)("levelname"),"min-width":"120"},null,8,["label"]),u(c,{prop:"one_rate",label:a(t)("oneRate"),"min-width":"120"},{default:r(({row:l})=>[d("span",null,f(l.one_rate)+"%",1)]),_:1},8,["label"]),u(c,{prop:"two_rate",label:a(t)("twoRate"),"min-width":"120"},{default:r(({row:l})=>[d("span",null,f(l.two_rate)+"%",1)]),_:1},8,["label"])]),_:1},8,["data"])]),_:1})):(p(),y(x,{key:1},{default:r(()=>[u(K,{data:k.value.rule,size:"large",class:"rule"},{default:r(()=>[u(c,{label:a(t)("skuName"),"min-width":"120"},{default:r(({row:l})=>[(p(!0),b(V,null,q(e.value.skuList,(o,v)=>(p(),b("p",{class:C(["h-[124px] flex items-center px-[16px] border-box",{"border-b-[1px] border-solid border-[var(--el-table-border-color)]":v<e.value.skuList.length-1}]),key:v},f(o.sku_name||k.value.goods_info.goods_name),3))),128))]),_:1},8,["label"]),u(c,{label:a(t)("price"),"min-width":"120"},{default:r(({row:l})=>[(p(!0),b(V,null,q(e.value.skuList,(o,v)=>(p(),b("p",{class:C(["h-[124px] flex items-center px-[16px] border-box",{"border-b-[1px] border-solid border-[var(--el-table-border-color)]":v<e.value.skuList.length-1}]),key:v},"￥"+f(o.price),3))),128))]),_:1},8,["label"]),u(c,{prop:"level_name",label:a(t)("rateName"),"min-width":"120"},{default:r(({row:l})=>[d("p",Ue,f(l.level_name),1)]),_:1},8,["label"]),u(c,{label:a(t)("oneRate"),"min-width":"120"},{default:r(({row:l})=>[(p(!0),b(V,null,q(e.value.skuList,(o,v)=>(p(),b(V,{key:v},[d("div",Ne,[e.value.fenxiao_rule[o.sku_id][l.level_id]?(p(),y(x,{key:0,prop:`fenxiao_rule[${o.sku_id}][${l.level_id}].one_rate`,rules:[{trigger:"blur",required:!0,validator:(s,_,i)=>e.value.fenxiao_rule[o.sku_id][l.level_id].one_money!=""&&parseFloat(e.value.fenxiao_rule[o.sku_id][l.level_id].one_money)!=0?i():_?_>=100?i(a(t)("oneRatePlaceholderThree")):_<=0?i(a(t)("oneRatePlaceholderTwo")):R.digit.test(_)?i():i(a(t)("oneRatePlaceholderOne")):e.value.fenxiao_rule[o.sku_id][l.level_id].one_money?i():i(a(t)("oneRatePlaceholder"))}],class:"sku-form-item-wrap"},{default:r(()=>[u(E,{modelValue:e.value.fenxiao_rule[o.sku_id][l.level_id].one_rate,"onUpdate:modelValue":s=>e.value.fenxiao_rule[o.sku_id][l.level_id].one_rate=s,clearable:"",disabled:e.value.fenxiao_rule[o.sku_id][l.level_id].one_money!=""&&parseFloat(e.value.fenxiao_rule[o.sku_id][l.level_id].one_money)!=0,onBlur:s=>U(`fenxiao_rule[${o.sku_id}][${l.level_id}].one_money`),class:"input-width mr-[10px]",onKeyup:n[4]||(n[4]=s=>a(B)(s))},{append:r(()=>[m("%")]),_:2},1032,["modelValue","onUpdate:modelValue","disabled","onBlur"])]),_:2},1032,["prop","rules"])):$("",!0)]),d("div",{class:C(["h-[62px] border-box py-[15px] px-[16px]",{"border-b-[1px] border-solid border-[var(--el-table-border-color)]":v<e.value.skuList.length-1}])},[e.value.fenxiao_rule[o.sku_id][l.level_id]?(p(),y(x,{key:0,prop:`fenxiao_rule[${o.sku_id}][${l.level_id}].one_money`,rules:[{trigger:"blur",required:!0,validator:(s,_,i)=>e.value.fenxiao_rule[o.sku_id][l.level_id].one_rate!=""&&parseFloat(e.value.fenxiao_rule[o.sku_id][l.level_id].one_rate)!=0?i():_?_<=0?i(a(t)("oneMoneyPlaceholderTwo")):R.digit.test(_)?i():i(a(t)("oneMoneyPlaceholderOne")):e.value.fenxiao_rule[o.sku_id][l.level_id].one_rate?i():i(a(t)("oneRatePlaceholder"))}],class:"sku-form-item-wrap"},{default:r(()=>[u(E,{modelValue:e.value.fenxiao_rule[o.sku_id][l.level_id].one_money,"onUpdate:modelValue":s=>e.value.fenxiao_rule[o.sku_id][l.level_id].one_money=s,clearable:"",disabled:e.value.fenxiao_rule[o.sku_id][l.level_id].one_rate!=""&&parseFloat(e.value.fenxiao_rule[o.sku_id][l.level_id].one_rate)!=0,onBlur:s=>U(`fenxiao_rule[${o.sku_id}][${l.level_id}].one_rate`),class:"input-width mr-[10px]",onKeyup:n[5]||(n[5]=s=>a(B)(s))},{append:r(()=>[m("元")]),_:2},1032,["modelValue","onUpdate:modelValue","disabled","onBlur"])]),_:2},1032,["prop","rules"])):$("",!0)],2)],64))),128))]),_:1},8,["label"]),u(c,{prop:"two_rate",label:a(t)("twoRate"),"min-width":"120"},{default:r(({row:l})=>[(p(!0),b(V,null,q(e.value.skuList,(o,v)=>(p(),b(V,{key:v},[d("div",qe,[e.value.fenxiao_rule[o.sku_id][l.level_id]?(p(),y(x,{key:0,prop:`fenxiao_rule[${o.sku_id}][${l.level_id}].two_rate`,rules:[{trigger:"blur",required:!0,validator:(s,_,i)=>e.value.fenxiao_rule[o.sku_id][l.level_id].two_money!=""&&parseFloat(e.value.fenxiao_rule[o.sku_id][l.level_id].two_money)!=0?i():_?_>=100?i(a(t)("twoRatePlaceholderThree")):_<=0?i(a(t)("twoRatePlaceholderTwo")):R.digit.test(_)?i():i(a(t)("twoRatePlaceholderOne")):!e.value.fenxiao_rule[o.sku_id][l.level_id].two_money&&!e.value.fenxiao_rule[o.sku_id][l.level_id].two_rate?i(a(t)("twoRatePlaceholder")):i()}],class:"sku-form-item-wrap"},{default:r(()=>[u(E,{modelValue:e.value.fenxiao_rule[o.sku_id][l.level_id].two_rate,"onUpdate:modelValue":s=>e.value.fenxiao_rule[o.sku_id][l.level_id].two_rate=s,clearable:"",disabled:e.value.fenxiao_rule[o.sku_id][l.level_id].two_money!=""&&parseFloat(e.value.fenxiao_rule[o.sku_id][l.level_id].two_money)!=0,onBlur:s=>U(`fenxiao_rule[${o.sku_id}][${l.level_id}].two_money`),class:"input-width mr-[10px]",onKeyup:n[6]||(n[6]=s=>a(B)(s))},{append:r(()=>[m("%")]),_:2},1032,["modelValue","onUpdate:modelValue","disabled","onBlur"])]),_:2},1032,["prop","rules"])):$("",!0)]),d("div",{class:C(["h-[62px] border-box py-[15px] px-[16px]",{"border-b-[1px] border-solid border-[var(--el-table-border-color)]":v<e.value.skuList.length-1}])},[e.value.fenxiao_rule[o.sku_id][l.level_id]?(p(),y(x,{key:0,prop:`fenxiao_rule[${o.sku_id}][${l.level_id}].two_money`,rules:[{trigger:"blur",required:!0,validator:(s,_,i)=>e.value.fenxiao_rule[o.sku_id][l.level_id].two_rate!=""&&parseFloat(e.value.fenxiao_rule[o.sku_id][l.level_id].two_rate)!=0?i():_?_<=0?i(a(t)("twoMoneyPlaceholderTwo")):R.digit.test(_)?i():i(a(t)("twoMoneyPlaceholderOne")):e.value.fenxiao_rule[o.sku_id][l.level_id].two_rate?i():i(a(t)("twoRatePlaceholder"))}],class:"sku-form-item-wrap"},{default:r(()=>[u(E,{modelValue:e.value.fenxiao_rule[o.sku_id][l.level_id].two_money,"onUpdate:modelValue":s=>e.value.fenxiao_rule[o.sku_id][l.level_id].two_money=s,clearable:"",disabled:e.value.fenxiao_rule[o.sku_id][l.level_id].two_rate!=""&&parseFloat(e.value.fenxiao_rule[o.sku_id][l.level_id].two_rate)!=0,onBlur:s=>U(`fenxiao_rule[${o.sku_id}][${l.level_id}].two_rate`),class:"input-width mr-[10px]",onKeyup:n[7]||(n[7]=s=>a(B)(s))},{append:r(()=>[m("元")]),_:2},1032,["modelValue","onUpdate:modelValue","disabled","onBlur"])]),_:2},1032,["prop","rules"])):$("",!0)],2)],64))),128))]),_:1},8,["label"])]),_:1},8,["data"])]),_:1}))],64)):$("",!0)]),_:1})]),_:1},8,["model"])):$("",!0)]),_:1})),d("div",Ce,[d("div",Ie,[u(z,{type:"primary",onClick:n[8]||(n[8]=l=>Y())},{default:r(()=>[m(f(a(t)("save")),1)]),_:1}),u(z,{onClick:n[9]||(n[9]=l=>G())},{default:r(()=>[m(f(a(t)("back")),1)]),_:1})])])])),[[Z,L.value]])}}});const dl=we(De,[["__scopeId","data-v-17bdf644"]]);export{dl as default};
