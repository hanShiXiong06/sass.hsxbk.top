import{d as y,h as r,c as g,R as u,a0 as c,u as e,a as n,t as i,q as o,e as l,w as s,i as _,s as f,B as b,b as w,F as v,as as B,at as E,L as P,bz as k,M as N}from"./index-6ea097a6.js";/* empty css                     *//* empty css                  *//* empty css                 *//* empty css                        */import"./el-tooltip-4ed993c7.js";/* empty css                  *//* empty css                       *//* empty css                 */import{u as F}from"./diy-6a9f0309.js";import R from"./hotel-select-popup-ec78b6ef.js";const T={class:"content-wrap"},z={class:"edit-attr-item-wrap"},D={class:"mb-[10px]"},H={class:"flex items-center w-full ml-[5px]"},U={class:"ml-[15px]"},j={class:"style-wrap"},G=y({__name:"edit-tourism-hotel",setup(M,{expose:S}){const t=F();return t.editComponent.ignore=[],S({}),(h,a)=>{const p=B,x=E,d=P,C=k,V=N;return r(),g(v,null,[u(n("div",T,[n("div",z,[n("h3",D,i(e(o)("selectSource")),1),l(V,{"label-width":"80px",class:"px-[10px]"},{default:s(()=>[l(d,{label:e(o)("hotelSelectPopupSelectHotelButton")},{default:s(()=>[l(x,{modelValue:e(t).editComponent.source,"onUpdate:modelValue":a[0]||(a[0]=m=>e(t).editComponent.source=m),title:e(o)("hotelSelectPopupSelectHotelButton")},{default:s(()=>[l(p,{label:"all"},{default:s(()=>[_(i(e(o)("hotelSelectPopupAllHotel")),1)]),_:1}),l(p,{label:"custom"},{default:s(()=>[_(i(e(o)("manualSelectionSources")),1)]),_:1})]),_:1},8,["modelValue","title"])]),_:1},8,["label"]),e(t).editComponent.source=="all"?(r(),f(d,{key:0,label:e(o)("goodsNum")},{default:s(()=>[n("div",H,[l(C,{class:"flex-1",modelValue:e(t).editComponent.num,"onUpdate:modelValue":a[1]||(a[1]=m=>e(t).editComponent.num=m),max:"20",size:"small"},null,8,["modelValue"]),n("span",U,i(e(t).editComponent.num),1)])]),_:1},8,["label"])):b("",!0),e(t).editComponent.source=="custom"?(r(),f(d,{key:1,label:e(o)("customGoods")},{default:s(()=>[l(R,{ref:"goodsSelectPopupRef",modelValue:e(t).editComponent.hotel_id,"onUpdate:modelValue":a[2]||(a[2]=m=>e(t).editComponent.hotel_id=m),min:1,max:99},null,8,["modelValue"])]),_:1},8,["label"])):b("",!0)]),_:1})])],512),[[c,e(t).editTab=="content"]]),u(n("div",j,[w(h.$slots,"style")],512),[[c,e(t).editTab=="style"]])],64)}}}),Y=Object.freeze(Object.defineProperty({__proto__:null,default:G},Symbol.toStringTag,{value:"Module"}));export{Y as _};