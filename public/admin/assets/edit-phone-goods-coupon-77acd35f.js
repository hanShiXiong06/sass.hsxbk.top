import{d as F,q as n,n as g,r as j,a2 as A,h as c,c as C,R as x,a0 as h,u as e,a as i,t as p,e as l,w as s,i as _,F as S,T as L,v as $,A as G,s as w,B as V,b as M,a1 as O,L as q,M as K,E as X,X as H,K as J,at as Q,au as W,bz as Y}from"./index-a3bdc7eb.js";/* empty css                  *//* empty css                 *//* empty css                        */import"./el-tooltip-4ed993c7.js";/* empty css                  *//* empty css                       *//* empty css                 *//* empty css                  *//* empty css                   *//* empty css                  *//* empty css                */import"./el-form-item-4ed993c7.js";import{u as Z}from"./diy-3e446131.js";import ee from"./coupon-select-popup-ca0ad808.js";const oe={class:"content-wrap"},te={class:"edit-attr-item-wrap"},le={class:"mb-[10px]"},ne={class:"flex flex-wrap"},ae=["onClick"],se=["src"],ie={class:"dialog-footer"},ue={class:"edit-attr-item-wrap"},pe={class:"mb-[10px]"},de={class:"edit-attr-item-wrap"},re={class:"mb-[10px]"},me={class:"flex items-center w-full ml-[5px]"},ce={class:"ml-[15px]"},_e={class:"style-wrap"},fe=F({__name:"edit-phone-goods-coupon",setup(be,{expose:T}){const o=Z();o.editComponent.ignore=["componentBgColor","componentBgUrl"],o.editComponent.verify=u=>{const t={code:!0,message:""};return o.value[u].source=="custom"&&o.value[u].couponIds.length==0?(t.code=!1,t.message=n("couponPlaceholder"),t):o.value[u].btnText==""?(t.code=!1,t.message=n("couponBtnTextPlaceholder"),t):o.value[u].couponTitle==""?(t.code=!1,t.message=n("couponTitlePlaceholder"),t):(o.value[u].couponSubTitle==""&&(t.code=!1,t.message=n("couponSubTitlePlaceholder")),t)};const d=g({title:o.editComponent.styleName,value:o.editComponent.style}),m=j(!1),k=()=>{m.value=!0,d.title=o.editComponent.styleName,d.value=o.editComponent.style},B=g([{url:"addon/phone_shop/diy/goods_coupon/style-1.png",title:"风格1",value:"style-1"},{url:"addon/phone_shop/diy/goods_coupon/style-2.png",title:"风格2",value:"style-2"}]),E=u=>{d.title=u.title,d.value=u.value},N=()=>{o.editComponent.styleName=d.title,o.editComponent.style=d.value,m.value=!1};return T({}),(u,t)=>{const P=A("ArrowRight"),U=O,r=q,f=K,y=X,D=H,b=J,v=Q,I=W,R=Y;return c(),C(S,null,[x(i("div",oe,[i("div",te,[i("h3",le,p(e(n)("selectStyle")),1),l(f,{"label-width":"80px",class:"px-[10px]"},{default:s(()=>[l(r,{label:e(n)("selectStyle"),class:"flex"},{default:s(()=>[i("span",{class:"text-primary flex-1 cursor-pointer",onClick:k},p(e(o).editComponent.styleName),1),l(U,null,{default:s(()=>[l(P)]),_:1})]),_:1},8,["label"])]),_:1}),l(D,{modelValue:m.value,"onUpdate:modelValue":t[1]||(t[1]=a=>m.value=a),title:e(n)("selectStyle"),width:"500px"},{footer:s(()=>[i("span",ie,[l(y,{onClick:t[0]||(t[0]=a=>m.value=!1)},{default:s(()=>[_(p(e(n)("cancel")),1)]),_:1}),l(y,{type:"primary",onClick:N},{default:s(()=>[_(p(e(n)("confirm")),1)]),_:1})])]),default:s(()=>[i("div",ne,[(c(!0),C(S,null,L(B,(a,z)=>(c(),C("div",{key:z,class:$([{"border-primary":d.value==a.value},"flex items-center justify-center overflow-hidden w-[200px] h-[100px] mr-[12px] cursor-pointer border bg-gray-50"]),onClick:Ce=>E(a)},[i("img",{src:e(G)(a.url)},null,8,se)],10,ae))),128))])]),_:1},8,["modelValue","title"])]),i("div",ue,[i("h3",pe,p(e(n)("couponContent")),1),l(f,{"label-width":"90px",class:"px-[10px]"},{default:s(()=>[l(r,{label:e(n)("couponTitle")},{default:s(()=>[l(b,{modelValue:e(o).editComponent.couponTitle,"onUpdate:modelValue":t[2]||(t[2]=a=>e(o).editComponent.couponTitle=a),clearable:"",maxlength:"8","show-word-limit":""},null,8,["modelValue"])]),_:1},8,["label"]),l(r,{label:e(n)("couponSubTitle")},{default:s(()=>[l(b,{modelValue:e(o).editComponent.couponSubTitle,"onUpdate:modelValue":t[3]||(t[3]=a=>e(o).editComponent.couponSubTitle=a),clearable:"",maxlength:"10","show-word-limit":""},null,8,["modelValue"])]),_:1},8,["label"])]),_:1})]),i("div",de,[i("h3",re,p(e(n)("couponData")),1),l(f,{"label-width":"90px",class:"px-[10px]"},{default:s(()=>[l(r,{label:e(n)("selectCoupon")},{default:s(()=>[l(I,{modelValue:e(o).editComponent.source,"onUpdate:modelValue":t[4]||(t[4]=a=>e(o).editComponent.source=a),title:e(n)("goodsSelectPopupSelectGoodsButton")},{default:s(()=>[l(v,{label:"all"},{default:s(()=>[_(p(e(n)("allSources")),1)]),_:1}),l(v,{label:"custom"},{default:s(()=>[_(p(e(n)("manualSelectionSources")),1)]),_:1})]),_:1},8,["modelValue","title"])]),_:1},8,["label"]),e(o).editComponent.source=="custom"?(c(),w(r,{key:0,label:e(n)("manualSelectionSources")},{default:s(()=>[l(ee,{ref:"couponSelectPopupRef",modelValue:e(o).editComponent.couponIds,"onUpdate:modelValue":t[5]||(t[5]=a=>e(o).editComponent.couponIds=a),min:1,max:20},null,8,["modelValue"])]),_:1},8,["label"])):V("",!0),e(o).editComponent.source=="all"?(c(),w(r,{key:1,label:e(n)("couponNum")},{default:s(()=>[i("div",me,[l(R,{class:"flex-1",modelValue:e(o).editComponent.num,"onUpdate:modelValue":t[6]||(t[6]=a=>e(o).editComponent.num=a),min:1,max:"20",size:"small"},null,8,["modelValue"]),i("span",ce,p(e(o).editComponent.num),1)])]),_:1},8,["label"])):V("",!0),l(r,{label:e(n)("couponBtnText")},{default:s(()=>[l(b,{modelValue:e(o).editComponent.btnText,"onUpdate:modelValue":t[7]||(t[7]=a=>e(o).editComponent.btnText=a),clearable:"",maxlength:"5","show-word-limit":""},null,8,["modelValue"])]),_:1},8,["label"])]),_:1})])],512),[[h,e(o).editTab=="content"]]),x(i("div",_e,[M(u.$slots,"style")],512),[[h,e(o).editTab=="style"]])],64)}}}),De=Object.freeze(Object.defineProperty({__proto__:null,default:fe},Symbol.toStringTag,{value:"Module"}));export{De as _};
