import{d as y,h as r,c as g,R as u,a0 as c,u as e,a as n,t as i,q as o,e as l,w as a,i as _,s as f,B as b,b as w,F as v,at as B,au as E,L as P,bz as k,M as N}from"./index-6f32d09b.js";/* empty css                *//* empty css                  *//* empty css                 *//* empty css                        */import"./el-tooltip-4ed993c7.js";/* empty css                  */import"./el-form-item-4ed993c7.js";/* empty css                       *//* empty css                 */import{u as F}from"./diy-452b5b8a.js";import R from"./hotel-select-popup-451ccfc3.js";const T={class:"content-wrap"},z={class:"edit-attr-item-wrap"},D={class:"mb-[10px]"},H={class:"flex items-center w-full ml-[5px]"},U={class:"ml-[15px]"},j={class:"style-wrap"},G=y({__name:"edit-tourism-hotel",setup(M,{expose:S}){const t=F();return t.editComponent.ignore=[],S({}),(h,s)=>{const p=B,x=E,d=P,C=k,V=N;return r(),g(v,null,[u(n("div",T,[n("div",z,[n("h3",D,i(e(o)("selectSource")),1),l(V,{"label-width":"80px",class:"px-[10px]"},{default:a(()=>[l(d,{label:e(o)("hotelSelectPopupSelectHotelButton")},{default:a(()=>[l(x,{modelValue:e(t).editComponent.source,"onUpdate:modelValue":s[0]||(s[0]=m=>e(t).editComponent.source=m),title:e(o)("hotelSelectPopupSelectHotelButton")},{default:a(()=>[l(p,{label:"all"},{default:a(()=>[_(i(e(o)("hotelSelectPopupAllHotel")),1)]),_:1}),l(p,{label:"custom"},{default:a(()=>[_(i(e(o)("manualSelectionSources")),1)]),_:1})]),_:1},8,["modelValue","title"])]),_:1},8,["label"]),e(t).editComponent.source=="all"?(r(),f(d,{key:0,label:e(o)("goodsNum")},{default:a(()=>[n("div",H,[l(C,{class:"flex-1",modelValue:e(t).editComponent.num,"onUpdate:modelValue":s[1]||(s[1]=m=>e(t).editComponent.num=m),min:1,max:"20",size:"small"},null,8,["modelValue"]),n("span",U,i(e(t).editComponent.num),1)])]),_:1},8,["label"])):b("",!0),e(t).editComponent.source=="custom"?(r(),f(d,{key:1,label:e(o)("customGoods")},{default:a(()=>[l(R,{ref:"goodsSelectPopupRef",modelValue:e(t).editComponent.hotel_id,"onUpdate:modelValue":s[2]||(s[2]=m=>e(t).editComponent.hotel_id=m),min:1,max:99},null,8,["modelValue"])]),_:1},8,["label"])):b("",!0)]),_:1})])],512),[[c,e(t).editTab=="content"]]),u(n("div",j,[w(h.$slots,"style")],512),[[c,e(t).editTab=="style"]])],64)}}}),Z=Object.freeze(Object.defineProperty({__proto__:null,default:G},Symbol.toStringTag,{value:"Module"}));export{Z as _};
