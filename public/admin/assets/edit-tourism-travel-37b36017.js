import{d as y,h as d,c as w,R as u,a0 as c,u as e,a as n,t as m,q as o,e as l,w as a,i as _,s as f,B as b,b as g,F as h,as as B,at as T,L as E,bz as P,M as k}from"./index-6ea097a6.js";/* empty css                     *//* empty css                  *//* empty css                 *//* empty css                        */import"./el-tooltip-4ed993c7.js";/* empty css                  *//* empty css                       *//* empty css                 */import{u as N}from"./diy-6a9f0309.js";import F from"./travel-select-popup-1f9d968f.js";const R={class:"content-wrap"},z={class:"edit-attr-item-wrap"},D={class:"mb-[10px]"},U={class:"flex items-center w-full ml-[5px]"},j={class:"ml-[15px]"},G={class:"style-wrap"},M=y({__name:"edit-tourism-travel",setup(O,{expose:S}){const t=N();return t.editComponent.ignore=[],S({}),(v,s)=>{const p=B,x=T,i=E,C=P,V=k;return d(),w(h,null,[u(n("div",R,[n("div",z,[n("h3",D,m(e(o)("selectSource")),1),l(V,{"label-width":"80px",class:"px-[10px]"},{default:a(()=>[l(i,{label:e(o)("travelSelectPopupSelectTravelButton")},{default:a(()=>[l(x,{modelValue:e(t).editComponent.source,"onUpdate:modelValue":s[0]||(s[0]=r=>e(t).editComponent.source=r),title:e(o)("travelSelectPopupSelectTravelButton")},{default:a(()=>[l(p,{label:"all"},{default:a(()=>[_(m(e(o)("travelSelectPopupAllTravel")),1)]),_:1}),l(p,{label:"custom"},{default:a(()=>[_(m(e(o)("manualSelectionSources")),1)]),_:1})]),_:1},8,["modelValue","title"])]),_:1},8,["label"]),e(t).editComponent.source=="all"?(d(),f(i,{key:0,label:e(o)("goodsNum")},{default:a(()=>[n("div",U,[l(C,{class:"flex-1",modelValue:e(t).editComponent.num,"onUpdate:modelValue":s[1]||(s[1]=r=>e(t).editComponent.num=r),max:"20",size:"small"},null,8,["modelValue"]),n("span",j,m(e(t).editComponent.num),1)])]),_:1},8,["label"])):b("",!0),e(t).editComponent.source=="custom"?(d(),f(i,{key:1,label:e(o)("customGoods")},{default:a(()=>[l(F,{ref:"goodsSelectPopupRef",modelValue:e(t).editComponent.way_id,"onUpdate:modelValue":s[2]||(s[2]=r=>e(t).editComponent.way_id=r),min:1,max:99},null,8,["modelValue"])]),_:1},8,["label"])):b("",!0)]),_:1})])],512),[[c,e(t).editTab=="content"]]),u(n("div",G,[g(v.$slots,"style")],512),[[c,e(t).editTab=="style"]])],64)}}}),Y=Object.freeze(Object.defineProperty({__proto__:null,default:M},Symbol.toStringTag,{value:"Module"}));export{Y as _};