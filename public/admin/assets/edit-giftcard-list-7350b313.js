import{d as P,x as W,f as z,q as a,r as T,n as F,aJ as G,h as f,c as h,R as S,a0 as x,u as e,a as m,t as s,e as l,w as r,i as p,s as _,F as w,T as L,B as y,b as M,U as O,at as D,au as j,L as $,ab as q,aC as A,bz as I,M as J,bv as H}from"./index-6f32d09b.js";/* empty css                        *//* empty css                 *//* empty css                  *//* empty css                *//* empty css                  *//* empty css                        */import"./el-tooltip-4ed993c7.js";/* empty css                  *//* empty css               *//* empty css                  *//* empty css                  *//* empty css                     */import"./el-form-item-4ed993c7.js";/* empty css                       *//* empty css                 */import{g as K}from"./category-ed8b5ac2.js";import{u as Q}from"./diy-452b5b8a.js";import X from"./giftcard-select-popup-49d197b5.js";const Y={class:"content-wrap"},Z={class:"edit-attr-item-wrap"},ee={class:"mb-[10px]"},te={class:"ml-[10px]"},oe={class:"style-wrap"},le={class:"edit-attr-item-wrap"},ae={class:"mb-[10px]"},ne=m("div",{class:"mr-[20px]"},null,-1),re=P({__name:"edit-giftcard-list",setup(de,{expose:E}){W();const k=z(),t=Q();t.editComponent.ignore=[],t.editComponent.verify=d=>{const o={code:!0,message:""};return t.value[d].source=="category"?t.value[d].category_id==""&&(o.code=!1,o.message=a("giftcardCategoryPlaceholder")):t.value[d].source=="custom"&&t.value[d].giftcard_ids.length==0&&(o.code=!1,o.message=a("giftcardPlaceholder")),o},T();const c=F([]),R=()=>{const d=k.resolve({path:"/shop_giftcard/category"});window.open(d.href)},b=(d=!1)=>{K({}).then(o=>{const i=o.data;i&&(c.splice(0,c.length,...i),d&&O({message:a("refreshSuccess"),type:"success"}))})};G(()=>{b()});const N=d=>{for(let o=0;o<c.length;o++)if(c[o].category_id==d){t.editComponent.category_name=c[o].category_name;break}};return E({}),(d,o)=>{const i=D,g=j,u=$,U=q,B=A,C=I,V=J,v=H;return f(),h(w,null,[S(m("div",Y,[m("div",Z,[m("h3",ee,s(e(a)("selectSource")),1),l(V,{"label-width":"90px",class:"px-[10px]"},{default:r(()=>[l(u,{label:e(a)("sortWay")},{default:r(()=>[l(g,{modelValue:e(t).editComponent.sortWay,"onUpdate:modelValue":o[0]||(o[0]=n=>e(t).editComponent.sortWay=n)},{default:r(()=>[l(i,{label:"default"},{default:r(()=>[p(s(e(a)("default")),1)]),_:1}),l(i,{label:"sale_num"},{default:r(()=>[p(s(e(a)("sales")),1)]),_:1}),l(i,{label:"price"},{default:r(()=>[p(s(e(a)("price")),1)]),_:1})]),_:1},8,["modelValue"])]),_:1},8,["label"]),l(u,{label:e(a)("giftcardSource")},{default:r(()=>[l(g,{modelValue:e(t).editComponent.source,"onUpdate:modelValue":o[1]||(o[1]=n=>e(t).editComponent.source=n)},{default:r(()=>[l(i,{label:"all"},{default:r(()=>[p(s(e(a)("giftcardSelectPopupAllGiftcard")),1)]),_:1}),l(i,{label:"category"},{default:r(()=>[p(s(e(a)("selectCardCategory")),1)]),_:1}),l(i,{label:"custom"},{default:r(()=>[p(s(e(a)("manualSelectionSources")),1)]),_:1})]),_:1},8,["modelValue"])]),_:1},8,["label"]),e(t).editComponent.source=="category"?(f(),_(u,{key:0,label:e(a)("selectCardCategory")},{default:r(()=>[l(B,{modelValue:e(t).editComponent.category_id,"onUpdate:modelValue":o[2]||(o[2]=n=>e(t).editComponent.category_id=n),placeholder:e(a)("selectCategory"),clearable:"",onChange:N},{default:r(()=>[(f(!0),h(w,null,L(c,n=>(f(),_(U,{key:n.category_id,label:n.category_name,value:n.category_id},null,8,["label","value"]))),128))]),_:1},8,["modelValue","placeholder"]),m("div",te,[m("span",{class:"cursor-pointer text-primary mr-[10px]",onClick:o[3]||(o[3]=n=>b(!0))},s(e(a)("refresh")),1),m("span",{class:"cursor-pointer text-primary",onClick:R},s(e(a)("addCategory")),1)])]),_:1},8,["label"])):y("",!0),e(t).editComponent.source=="all"||e(t).editComponent.source=="category"?(f(),_(u,{key:1,label:e(a)("giftcardNum")},{default:r(()=>[l(C,{class:"graphic-nav-slider",modelValue:e(t).editComponent.num,"onUpdate:modelValue":o[4]||(o[4]=n=>e(t).editComponent.num=n),min:1,max:"20",size:"small","show-input":""},null,8,["modelValue"])]),_:1},8,["label"])):y("",!0),e(t).editComponent.source=="custom"?(f(),_(u,{key:2,label:e(a)("customGiftcard")},{default:r(()=>[l(X,{ref:"giftcardSelectPopupRef",modelValue:e(t).editComponent.giftcard_ids,"onUpdate:modelValue":o[5]||(o[5]=n=>e(t).editComponent.giftcard_ids=n),min:1,max:99},null,8,["modelValue"])]),_:1},8,["label"])):y("",!0)]),_:1})])],512),[[x,e(t).editTab=="content"]]),S(m("div",oe,[m("div",le,[m("h3",ae,s(e(a)("giftcardStyle")),1),l(V,{"label-width":"90px",class:"px-[10px]"},{default:r(()=>[l(u,{label:e(a)("giftcardBgColor")},{default:r(()=>[l(v,{modelValue:e(t).editComponent.elementBgColor,"onUpdate:modelValue":o[6]||(o[6]=n=>e(t).editComponent.elementBgColor=n),"show-alpha":"",predefine:e(t).predefineColors},null,8,["modelValue","predefine"])]),_:1},8,["label"]),l(u,{label:e(a)("giftcardNameColor")},{default:r(()=>[l(v,{modelValue:e(t).editComponent.cardNameStyle.color,"onUpdate:modelValue":o[7]||(o[7]=n=>e(t).editComponent.cardNameStyle.color=n),"show-alpha":"",predefine:e(t).predefineColors},null,8,["modelValue","predefine"]),ne,l(g,{modelValue:e(t).editComponent.cardNameStyle.fontWeight,"onUpdate:modelValue":o[8]||(o[8]=n=>e(t).editComponent.cardNameStyle.fontWeight=n)},{default:r(()=>[l(i,{label:"normal"},{default:r(()=>[p(s(e(a)("fontWeightNormal")),1)]),_:1}),l(i,{label:"bold"},{default:r(()=>[p(s(e(a)("fontWeightBold")),1)]),_:1})]),_:1},8,["modelValue"])]),_:1},8,["label"]),l(u,{label:e(a)("topRounded")},{default:r(()=>[l(C,{modelValue:e(t).editComponent.topElementRounded,"onUpdate:modelValue":o[9]||(o[9]=n=>e(t).editComponent.topElementRounded=n),"show-input":"",size:"small",class:"ml-[10px] graphic-nav-slider",max:50},null,8,["modelValue"])]),_:1},8,["label"]),l(u,{label:e(a)("bottomRounded")},{default:r(()=>[l(C,{modelValue:e(t).editComponent.bottomElementRounded,"onUpdate:modelValue":o[10]||(o[10]=n=>e(t).editComponent.bottomElementRounded=n),"show-input":"",size:"small",class:"ml-[10px] graphic-nav-slider",max:50},null,8,["modelValue"])]),_:1},8,["label"])]),_:1})]),M(d.$slots,"style")],512),[[x,e(t).editTab=="style"]])],64)}}});const ke=Object.freeze(Object.defineProperty({__proto__:null,default:re},Symbol.toStringTag,{value:"Module"}));export{ke as _};
