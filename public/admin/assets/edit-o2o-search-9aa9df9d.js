import{d as f,h as C,c as v,R as u,a0 as _,u as e,a as t,t as d,q as n,v as p,e as s,w as a,b as h,F as w,K as g,L as V,M as S,bv as k}from"./index-6ea097a6.js";/* empty css                        *//* empty css                 *//* empty css                  *//* empty css                     */import{u as j}from"./diy-6a9f0309.js";const q={class:"content-wrap"},E={class:"edit-attr-item-wrap"},$={class:"mb-[10px]"},F={class:"flex items-center mb-[18px] rounded overflow-hidden"},B={class:"edit-attr-item-wrap"},D={class:"mb-[10px]"},M={class:"style-wrap"},P={class:"edit-attr-item-wrap"},T={class:"mb-[10px]"},U={class:"flex-1"},z={class:"flex items-center"},I=f({__name:"edit-o2o-search",setup(N,{expose:b}){const o=j();return o.editComponent.ignore=[],b({}),(x,r)=>{const y=g,i=V,c=S,m=k;return C(),v(w,null,[u(t("div",q,[t("div",E,[t("h3",$,d(e(n)("selectStyle")),1),t("div",F,[t("span",{class:p(["o2o o2o-icon-sousuo11 border-[1px] border-solid border-[#eee] cursor-pointer flex-1 flex items-center justify-center py-[5px]",{"border-[var(--el-color-primary)] text-[var(--el-color-primary)]":e(o).editComponent.style=="style1"}]),onClick:r[0]||(r[0]=l=>e(o).editComponent.style="style1")},null,2),t("span",{class:p(["o2o o2o-icon-sousuo12 border-[1px] border-solid border-[#eee] cursor-pointer flex-1 flex items-center justify-center py-[5px]",{"border-[var(--el-color-primary)] text-[var(--el-color-primary)]":e(o).editComponent.style=="style2"}]),onClick:r[1]||(r[1]=l=>e(o).editComponent.style="style2")},null,2)])]),t("div",B,[t("h3",D,d(e(n)("searchContent")),1),s(c,{"label-width":"80px",class:"px-[10px]"},{default:a(()=>[s(i,{label:e(n)("searchContent")},{default:a(()=>[s(y,{modelValue:e(o).editComponent.search_text,"onUpdate:modelValue":r[2]||(r[2]=l=>e(o).editComponent.search_text=l),modelModifiers:{trim:!0},placeholder:e(n)("searchPlaceholder"),clearable:"",maxlength:"15","show-word-limit":""},null,8,["modelValue","placeholder"])]),_:1},8,["label"])]),_:1})])],512),[[_,e(o).editTab=="content"]]),u(t("div",M,[t("div",P,[t("h3",T,d(e(n)("searchStyle")),1),s(c,{"label-width":"80px",class:"px-[10px]"},{default:a(()=>[s(i,{label:e(n)("borderStyle")},{default:a(()=>[t("span",U,d(e(o).editComponent.border_radius=="square"?"方形":"圆形"),1),t("div",z,[t("span",{class:p(["o2o o2o-icon-gl-square border-[1px] border-solid border-[#eee] cursor-pointer flex-1 flex items-center px-[10px] justify-center",{"border-[var(--el-color-primary)] text-[var(--el-color-primary)]":e(o).editComponent.border_radius=="square"}]),onClick:r[3]||(r[3]=l=>e(o).editComponent.border_radius="square")},null,2),t("span",{class:p(["o2o o2o-icon-yuanjiao border-[1px] border-solid border-[#eee] cursor-pointer flex-1 flex items-center justify-center px-[10px]",{"border-[var(--el-color-primary)] text-[var(--el-color-primary)]":e(o).editComponent.border_radius=="circle"}]),onClick:r[4]||(r[4]=l=>e(o).editComponent.border_radius="circle")},null,2)])]),_:1},8,["label"]),s(i,{label:e(n)("textColor")},{default:a(()=>[s(m,{modelValue:e(o).editComponent.text_color,"onUpdate:modelValue":r[5]||(r[5]=l=>e(o).editComponent.text_color=l)},null,8,["modelValue"])]),_:1},8,["label"]),s(i,{label:e(n)("bgColor")},{default:a(()=>[s(m,{modelValue:e(o).editComponent.bg_color,"onUpdate:modelValue":r[6]||(r[6]=l=>e(o).editComponent.bg_color=l)},null,8,["modelValue"])]),_:1},8,["label"])]),_:1})]),h(x.$slots,"style")],512),[[_,e(o).editTab=="style"]])],64)}}}),H=Object.freeze(Object.defineProperty({__proto__:null,default:I},Symbol.toStringTag,{value:"Module"}));export{H as _};