import{d as P,q as a,r as E,h as f,c as S,R as y,a0 as V,u as e,a as i,t as n,e as t,w as d,i as r,s as N,B as h,b as R,at as k,au as B,L as U,E as W,M as G,bv as z,bz as T}from"./index-5a756a51.js";/* empty css                  *//* empty css                 *//* empty css                        */import"./el-tooltip-4ed993c7.js";/* empty css                  *//* empty css                        *//* empty css                  *//* empty css                */import"./el-form-item-4ed993c7.js";/* empty css                       *//* empty css                 */import{u as D}from"./diy-a7b9cfa6.js";import{_ as $}from"./goods-select-popup.vue_vue_type_script_setup_true_lang-b5218f4e.js";const j={class:"content-wrap"},F={class:"edit-attr-item-wrap"},M={class:"mb-[10px]"},O={class:"inline-block ml-[10px] text-[14px]"},q={class:"text-primary mx-[2px]"},A={key:0,class:"style-wrap"},I={class:"edit-attr-item-wrap"},L={class:"mb-[10px]"},H=i("div",{class:"mr-[20px]"},null,-1),J=P({__name:"edit-phone-shop-exchange-goods",setup(K,{expose:v}){const o=D();o.editComponent.ignore=[],o.editComponent.verify=p=>{const l={code:!0,message:""};return o.value[p].source=="category"?o.value[p].goods_category==""&&(l.code=!1,l.message=a("goodsCategoryPlaceholder")):o.value[p].source=="custom"&&o.value[p].goods_ids.length==0&&(l.code=!1,l.message=a("goodsPlaceholder")),l};const g=E(),x=p=>{o.editComponent.goods_ids=p.map(l=>l.id)};return v({}),(p,l)=>{const u=k,c=B,m=U,w=W,b=G,_=z,C=T;return f(),S("div",null,[y(i("div",j,[i("div",F,[i("h3",M,n(e(a)("selectSource")),1),t(b,{"label-width":"80px",class:"px-[10px]"},{default:d(()=>[t(m,{label:e(a)("sortWay")},{default:d(()=>[t(c,{modelValue:e(o).editComponent.sortWay,"onUpdate:modelValue":l[0]||(l[0]=s=>e(o).editComponent.sortWay=s)},{default:d(()=>[t(u,{label:"total_order_num"},{default:d(()=>[r(n(e(a)("default")),1)]),_:1}),t(u,{label:"total_exchange_num"},{default:d(()=>[r(n(e(a)("sales")),1)]),_:1}),t(u,{label:"price"},{default:d(()=>[r(n(e(a)("price")),1)]),_:1})]),_:1},8,["modelValue"])]),_:1},8,["label"]),t(m,{label:e(a)("goodsSelectPopupSelectGoodsButton")},{default:d(()=>[t(c,{modelValue:e(o).editComponent.source,"onUpdate:modelValue":l[1]||(l[1]=s=>e(o).editComponent.source=s),title:e(a)("goodsSelectPopupSelectGoodsButton")},{default:d(()=>[t(u,{label:"all"},{default:d(()=>[r(n(e(a)("goodsSelectPopupAllGoods")),1)]),_:1}),t(u,{label:"custom"},{default:d(()=>[r(n(e(a)("manualSelectionSources")),1)]),_:1})]),_:1},8,["modelValue","title"])]),_:1},8,["label"]),e(o).editComponent.source=="custom"?(f(),N(m,{key:0,label:e(a)("customGoods")},{default:d(()=>[t(w,{type:"primary",onClick:l[2]||(l[2]=s=>g.value.show(e(o).editComponent.goods_ids))},{default:d(()=>[r(n(e(a)("goodsSelectPopupSelectGoodsButton")),1)]),_:1}),y(i("div",O,[i("span",null,n(e(a)("goodsSelectPopupSelect")),1),i("span",q,n(e(o).editComponent.goods_ids.length),1),i("span",null,n(e(a)("goodsSelectPopupPiece")),1)],512),[[V,e(o).editComponent.goods_ids.length]]),t($,{ref_key:"goodsSelectPopupRef",ref:g,min:1,onSelect:x},null,512)]),_:1},8,["label"])):h("",!0)]),_:1})])],512),[[V,e(o).editTab=="content"]]),e(o).editTab=="style"?(f(),S("div",A,[i("div",I,[i("h3",L,n(e(a)("goodsStyle")),1),t(b,{"label-width":"80px",class:"px-[10px]"},{default:d(()=>[t(m,{label:e(a)("goodsNameColor")},{default:d(()=>[t(_,{modelValue:e(o).editComponent.goodsNameStyle.color,"onUpdate:modelValue":l[3]||(l[3]=s=>e(o).editComponent.goodsNameStyle.color=s),"show-alpha":"",predefine:e(o).predefineColors},null,8,["modelValue","predefine"]),H,t(c,{modelValue:e(o).editComponent.goodsNameStyle.fontWeight,"onUpdate:modelValue":l[4]||(l[4]=s=>e(o).editComponent.goodsNameStyle.fontWeight=s)},{default:d(()=>[t(u,{label:"normal"},{default:d(()=>[r(n(e(a)("fontWeightNormal")),1)]),_:1}),t(u,{label:"bold"},{default:d(()=>[r(n(e(a)("fontWeightBold")),1)]),_:1})]),_:1},8,["modelValue"])]),_:1},8,["label"]),t(m,{label:e(a)("goodsNumColor")},{default:d(()=>[t(_,{modelValue:e(o).editComponent.saleStyle.color,"onUpdate:modelValue":l[5]||(l[5]=s=>e(o).editComponent.saleStyle.color=s),"show-alpha":"",predefine:e(o).predefineColors},null,8,["modelValue","predefine"])]),_:1},8,["label"]),t(m,{label:e(a)("goodsPriceColor")},{default:d(()=>[t(_,{modelValue:e(o).editComponent.priceStyle.mainColor,"onUpdate:modelValue":l[6]||(l[6]=s=>e(o).editComponent.priceStyle.mainColor=s),"show-alpha":"",predefine:e(o).predefineColors},null,8,["modelValue","predefine"])]),_:1},8,["label"]),t(m,{label:e(a)("topRounded")},{default:d(()=>[t(C,{modelValue:e(o).editComponent.topElementRounded,"onUpdate:modelValue":l[7]||(l[7]=s=>e(o).editComponent.topElementRounded=s),"show-input":"",size:"small",class:"ml-[10px] graphic-nav-slider",max:50},null,8,["modelValue"])]),_:1},8,["label"]),t(m,{label:e(a)("bottomRounded")},{default:d(()=>[t(C,{modelValue:e(o).editComponent.bottomElementRounded,"onUpdate:modelValue":l[8]||(l[8]=s=>e(o).editComponent.bottomElementRounded=s),"show-input":"",size:"small",class:"ml-[10px] graphic-nav-slider",max:50},null,8,["modelValue"])]),_:1},8,["label"])]),_:1})]),R(p.$slots,"style")])):h("",!0)])}}}),me=Object.freeze(Object.defineProperty({__proto__:null,default:J},Symbol.toStringTag,{value:"Module"}));export{me as _};
