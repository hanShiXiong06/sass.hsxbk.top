import{d as y,q as i,r as C,h as H,c as w,R as d,a0 as p,u as o,a as s,t as g,e as n,w as l,i as V,b as S,F as B,A as I,K as T,L as U,M as k}from"./index-2a89d409.js";/* empty css                */import E from"./index-deaeeb3b.js";import"./el-form-item-4ed993c7.js";/* empty css                 */import{u as F}from"./diy-62f5a59f.js";const N={class:"content-wrap"},R={class:"edit-attr-item-wrap"},D={class:"mb-[10px]"},M={class:"text-sm text-gray-400 mb-[10px]"},P={class:"item-wrap !cursor-move p-[10px] pb-0 relative border border-dashed border-gray-300 mb-[16px]"},j={class:"style-wrap"},A=y({__name:"edit-o2o-technician",setup(O,{expose:c}){const e=F();e.editComponent.ignore=[],e.editComponent.verify=a=>{const t={code:!0,message:""};return e.value[a].imageHeight==0?(t.code=!1,t.message=i("imageHeightPlaceholder"),t):(/^\d+.?\d{0,2}$/.test(e.value[a].imageHeight)||(t.code=!1,t.message=i("imageHeightRegNum")),t)};const _=a=>{u()},u=()=>{const a=new Image;a.src=I(e.editComponent.imageUrl),a.onload=async()=>{e.editComponent.imgWidth=a.width,e.editComponent.imgHeight=a.height}},h=()=>{e.editComponent.imageHeight=parseInt(e.editComponent.imageHeight)},f=C();return c({}),(a,t)=>{const b=T,r=U,v=E,x=k;return H(),w(B,null,[d(s("div",N,[s("div",R,[s("h3",D,g(o(i)("imageSet")),1),n(x,{"label-width":"80px",class:"px-[10px]"},{default:l(()=>[n(r,{label:o(i)("imageHeight"),class:"display-block"},{default:l(()=>[n(b,{modelValue:o(e).editComponent.imageHeight,"onUpdate:modelValue":t[0]||(t[0]=m=>o(e).editComponent.imageHeight=m),modelModifiers:{trim:!0},placeholder:o(i)("imageHeightPlaceholder"),clearable:"",maxlength:"10",onBlur:h},{append:l(()=>[V("px")]),_:1},8,["modelValue","placeholder"]),s("div",M,g(o(i)("imageAdsTips")),1)]),_:1},8,["label"]),s("div",{ref_key:"imageBoxRef",ref:f},[s("div",P,[n(r,{label:o(i)("image")},{default:l(()=>[n(v,{modelValue:o(e).editComponent.imageUrl,"onUpdate:modelValue":t[1]||(t[1]=m=>o(e).editComponent.imageUrl=m),limit:1,onChange:_},null,8,["modelValue"])]),_:1},8,["label"])])],512)]),_:1})])],512),[[p,o(e).editTab=="content"]]),d(s("div",j,[S(a.$slots,"style")],512),[[p,o(e).editTab=="style"]])],64)}}}),G=Object.freeze(Object.defineProperty({__proto__:null,default:A},Symbol.toStringTag,{value:"Module"}));export{G as _};
