import{d as y,h as r,c as g,R as p,a0 as u,u as e,a as n,t as m,q as o,e as l,w as s,i as _,s as f,B as b,b as w,F as v,at as h,au as B,L as T,bz as E,M as P}from"./index-a3bdc7eb.js";/* empty css                *//* empty css                  *//* empty css                 *//* empty css                        */import"./el-tooltip-4ed993c7.js";/* empty css                  */import"./el-form-item-4ed993c7.js";/* empty css                       *//* empty css                 */import{u as N}from"./diy-3e446131.js";import F from"./tickets-select-popup-2c22373c.js";const R={class:"content-wrap"},z={class:"edit-attr-item-wrap"},D={class:"mb-[10px]"},U={class:"flex items-center w-full ml-[5px]"},j={class:"ml-[15px]"},G={class:"style-wrap"},M=y({__name:"edit-tourism-tickets",setup(O,{expose:S}){const t=N();return t.editComponent.ignore=[],S({}),(k,a)=>{const c=h,x=B,d=T,C=E,V=P;return r(),g(v,null,[p(n("div",R,[n("div",z,[n("h3",D,m(e(o)("selectSource")),1),l(V,{"label-width":"80px",class:"px-[10px]"},{default:s(()=>[l(d,{label:e(o)("ticketsSelectPopupSelectTicketsButton")},{default:s(()=>[l(x,{modelValue:e(t).editComponent.source,"onUpdate:modelValue":a[0]||(a[0]=i=>e(t).editComponent.source=i),title:e(o)("ticketsSelectPopupSelectTicketsButton")},{default:s(()=>[l(c,{label:"all"},{default:s(()=>[_(m(e(o)("ticketsSelectPopupAllTickets")),1)]),_:1}),l(c,{label:"custom"},{default:s(()=>[_(m(e(o)("manualSelectionSources")),1)]),_:1})]),_:1},8,["modelValue","title"])]),_:1},8,["label"]),e(t).editComponent.source=="all"?(r(),f(d,{key:0,label:e(o)("goodsNum")},{default:s(()=>[n("div",U,[l(C,{class:"flex-1",modelValue:e(t).editComponent.num,"onUpdate:modelValue":a[1]||(a[1]=i=>e(t).editComponent.num=i),max:"20",size:"small"},null,8,["modelValue"]),n("span",j,m(e(t).editComponent.num),1)])]),_:1},8,["label"])):b("",!0),e(t).editComponent.source=="custom"?(r(),f(d,{key:1,label:e(o)("customGoods")},{default:s(()=>[l(F,{ref:"goodsSelectPopupRef",modelValue:e(t).editComponent.scenic_id,"onUpdate:modelValue":a[2]||(a[2]=i=>e(t).editComponent.scenic_id=i),min:1,max:99},null,8,["modelValue"])]),_:1},8,["label"])):b("",!0)]),_:1})])],512),[[u,e(t).editTab=="content"]]),p(n("div",G,[w(k.$slots,"style")],512),[[u,e(t).editTab=="style"]])],64)}}}),Z=Object.freeze(Object.defineProperty({__proto__:null,default:M},Symbol.toStringTag,{value:"Module"}));export{Z as _};
