import{d as M,x as z,r as C,l as A,q as t,n as O,f as J,P as K,h as u,c as v,a as n,t as d,u as a,e as l,w as r,s as V,i as p,F as k,Q,v as b,A as H,B as x,aD as W,aE as X,az as Y,aA as Z,K as ee,a0 as te,J as le,L as ae,E as oe,U as re,p as se,g as ne}from"./index-17984968.js";/* empty css                   *//* empty css                  *//* empty css                *//* empty css                 *//* empty css                */import"./el-form-item-4ed993c7.js";/* empty css                       *//* empty css                 *//* empty css                    */import{v as de,w as ce}from"./goods-e571a7e7.js";import{_ as ie}from"./_plugin-vue_export-helper-c27b6911.js";const T=f=>(se("data-v-c928a83c"),f=f(),ne(),f),ue={class:"main-container pt-[20px]"},pe={class:"flex ml-[18px] justify-between items-center mb-[5px]"},me={class:"text-page-title"},_e={class:"panel-title !text-[16px] pl-[15px]"},ve=["onClick"],xe=["src"],fe=T(()=>n("span",{class:"iconfont iconicon-selected absolute right-0 bottom-[-8px]"},null,-1)),ge={class:"panel-title !text-[16px] pl-[15px]"},be={class:"flex items-center"},he={class:"text-[#fff] bg-color h-[20px] text-[12px] px-[10px] leading-[20px] rounded-[10px]"},ye=T(()=>n("span",{class:"text-color iconfont icongouwuche !text-[30px]"},null,-1)),we=[ye],Ce=T(()=>n("div",{class:"text-[#fff] bg-color h-[30px] w-[30px] leading-[30px] rounded-[30px] text-center"},[n("span",{class:"iconfont icongouwuche !text-[20px]"})],-1)),Ve=[Ce],ke={key:1,class:"fixed-footer-wrap"},Te={class:"fixed-footer"},Ee=M({__name:"category_config",setup(f){const U=z().meta.title,e=C({}),_=C(!1),j=A(()=>({page_title:[{required:!0,message:t("pageTitlePlaceholder"),trigger:"blur"}],"search.title":[{required:!0,message:t("searchTitlePlaceholder"),trigger:"blur"}],sort:[{required:!0,message:t("sortPlaceholder"),trigger:"change"}],"cart.text":[{required:!0,message:t("cartTextPlaceholder"),trigger:"blur"}]})),B=O({level_1:[{template:"style-1",preview:"addon/shop/category_style1_1.png"}],level_2:[{template:"style-1",preview:"addon/shop/category_style2_1.png"},{template:"style-2",preview:"addon/shop/category_style2_2.png"}]}),E=()=>{_.value=!0,de().then(c=>{e.value=c.data,_.value=!1}).catch(()=>{_.value=!1})};E();const I=c=>{e.value.template=c},h=c=>{e.value.cart.style="style-"+c},P=C(),R=async c=>{await c.validate(async o=>{o&&(_.value=!0,ce(e.value).then(y=>{E()}).catch(()=>{_.value=!1}))})},$=J(),q=c=>{$.push({path:c})};return(c,o)=>{const y=W,F=X,m=Y,g=Z,i=ee,S=te,w=le,N=ae,D=oe,G=re;return K((u(),v("div",ue,[n("div",pe,[n("span",me,d(a(U)),1)]),l(F,{class:"demo-tabs mx-[18px]","model-value":"/shop/goods/category/config",onTabChange:q},{default:r(()=>[l(y,{label:a(t)("tabGoodsCategory"),name:"/shop/goods/category"},null,8,["label"]),l(y,{label:a(t)("tabGoodsCategoryConfig"),name:"/shop/goods/category/config"},null,8,["label"])]),_:1}),Object.keys(e.value).length?(u(),V(N,{key:0,model:e.value,"label-width":"170",ref_key:"formRef",ref:P,rules:a(j),class:"page-form"},{default:r(()=>[l(S,{class:"box-card !border-none",shadow:"never"},{default:r(()=>[n("h3",_e,d(a(t)("categoryTemplate")),1),l(i,{label:a(t)("categoryType")},{default:r(()=>[l(g,{class:"mx-[10px]",modelValue:e.value.level,"onUpdate:modelValue":o[0]||(o[0]=s=>e.value.level=s),onChange:o[1]||(o[1]=s=>e.value.template="style-1")},{default:r(()=>[l(m,{label:1},{default:r(()=>[p(d(a(t)("categorystyleOne")),1)]),_:1}),l(m,{label:2},{default:r(()=>[p(d(a(t)("categorystyleTwo")),1)]),_:1})]),_:1},8,["modelValue"])]),_:1},8,["label"]),l(i,{label:a(t)("categoryTemplate")},{default:r(()=>[(u(!0),v(k,null,Q(B["level_"+e.value.level],(s,L)=>(u(),v("div",{key:L,class:b(["w-[150px] border-[1px] border-[#ededed] border-solid overflow-hidden text-[#ededed] rounded-[4px] mr-[20px] relative",e.value.template===s.template?"border-color text-color":""]),onClick:Se=>I(s.template)},[n("img",{class:"w-[100%]",src:a(H)(s.preview),"fit-object":"contain"},null,8,xe),fe],10,ve))),128))]),_:1},8,["label"])]),_:1}),l(S,{class:"box-card !border-none",shadow:"never"},{default:r(()=>[n("h3",ge,d(a(t)("pageSettings")),1),l(i,{label:a(t)("pageTitle"),prop:"page_title"},{default:r(()=>[l(w,{modelValue:e.value.page_title,"onUpdate:modelValue":o[2]||(o[2]=s=>e.value.page_title=s),modelModifiers:{trim:!0},clearable:"",placeholder:a(t)("pageTitlePlaceholder"),class:"input-width",maxlength:"10","show-word-limit":""},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),l(i,{label:a(t)("searchControl")},{default:r(()=>[l(g,{class:"mx-[10px]",modelValue:e.value.search.control,"onUpdate:modelValue":o[3]||(o[3]=s=>e.value.search.control=s)},{default:r(()=>[l(m,{label:1},{default:r(()=>[p(d(a(t)("open")),1)]),_:1}),l(m,{label:0},{default:r(()=>[p(d(a(t)("close")),1)]),_:1})]),_:1},8,["modelValue"])]),_:1},8,["label"]),e.value.search.control?(u(),V(i,{key:0,label:a(t)("searchTitle"),prop:"search.title"},{default:r(()=>[l(w,{modelValue:e.value.search.title,"onUpdate:modelValue":o[4]||(o[4]=s=>e.value.search.title=s),modelModifiers:{trim:!0},clearable:"",placeholder:a(t)("searchTitlePlaceholder"),class:"input-width",maxlength:"12","show-word-limit":""},null,8,["modelValue","placeholder"])]),_:1},8,["label"])):x("",!0),e.value.level!=2||e.value.level===2&&e.value.template!="style-1"?(u(),v(k,{key:1},[l(i,{label:a(t)("cartControl")},{default:r(()=>[l(g,{class:"mx-[10px]",modelValue:e.value.cart.control,"onUpdate:modelValue":o[5]||(o[5]=s=>e.value.cart.control=s)},{default:r(()=>[l(m,{label:1},{default:r(()=>[p(d(a(t)("show")),1)]),_:1}),l(m,{label:0},{default:r(()=>[p(d(a(t)("hidden")),1)]),_:1})]),_:1},8,["modelValue"])]),_:1},8,["label"]),e.value.cart.control?(u(),v(k,{key:0},[l(i,{label:a(t)("cartStyle"),class:"carStyle"},{default:r(()=>[n("div",be,[n("div",{class:b(["flex items-center justify-center w-[65px] h-[65px] border-0 border-color rounded-[4px] border-solid box-border cursor-pointer mr-[15px]",e.value.cart.style==="style-1"?"!border-[1px]":""]),onClick:o[6]||(o[6]=s=>h(1))},[n("div",he,d(e.value.cart.text),1)],2),n("div",{class:b(["flex items-center justify-center w-[65px] h-[65px] border-0 border-color rounded-[4px] border-solid box-border cursor-pointer mr-[15px]",e.value.cart.style==="style-3"?"!border-[1px]":""]),onClick:o[7]||(o[7]=s=>h(3))},we,2),n("div",{class:b(["flex items-center justify-center w-[65px] h-[65px] border-0 border-color rounded-[4px] border-solid box-border cursor-pointer mr-[15px]",e.value.cart.style==="style-4"?"!border-[1px]":""]),onClick:o[8]||(o[8]=s=>h(4))},Ve,2)])]),_:1},8,["label"]),e.value.cart.style==="style-1"?(u(),V(i,{key:0,prop:"cart.text"},{default:r(()=>[l(w,{modelValue:e.value.cart.text,"onUpdate:modelValue":o[9]||(o[9]=s=>e.value.cart.text=s),modelModifiers:{trim:!0},clearable:"",placeholder:a(t)("cartTextPlaceholder"),class:"input-width",maxlength:"3","show-word-limit":""},null,8,["modelValue","placeholder"])]),_:1})):x("",!0),l(i,{label:a(t)("cartEvent")},{default:r(()=>[l(g,{class:"mx-[10px]",modelValue:e.value.cart.event,"onUpdate:modelValue":o[10]||(o[10]=s=>e.value.cart.event=s)},{default:r(()=>[l(m,{label:"detail"},{default:r(()=>[p(d(a(t)("detail")),1)]),_:1}),l(m,{label:"cart"},{default:r(()=>[p(d(a(t)("cart")),1)]),_:1})]),_:1},8,["modelValue"])]),_:1},8,["label"])],64)):x("",!0)],64)):x("",!0)]),_:1})]),_:1},8,["model","rules"])):x("",!0),_.value?x("",!0):(u(),v("div",ke,[n("div",Te,[l(D,{type:"primary",onClick:o[11]||(o[11]=s=>R(P.value))},{default:r(()=>[p(d(a(t)("save")),1)]),_:1})])]))])),[[G,_.value]])}}});const Me=ie(Ee,[["__scopeId","data-v-c928a83c"]]);export{Me as default};