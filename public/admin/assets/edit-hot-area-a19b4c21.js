import{d as b,q as l,h as v,c as C,R as d,a0 as p,u as a,a as n,t as w,e as s,w as r,b as y,F as x,A as S,L as V,M as U}from"./index-5a756a51.js";/* empty css                */import B from"./index-15fb34e4.js";import"./el-form-item-4ed993c7.js";import A from"./index-92c2e799.js";import{u as F}from"./diy-a7b9cfa6.js";const T={class:"content-wrap"},k={class:"edit-attr-item-wrap"},D={class:"mb-[10px]"},E={ref:"imageBoxRef"},I={class:"item-wrap p-[10px] pb-0 relative border border-dashed border-gray-300 mb-[16px]"},j={class:"style-wrap"},H=b({__name:"edit-hot-area",setup(M,{expose:_}){const e=F();e.editComponent.ignore=[],e.editComponent.verify=t=>{const o={code:!0,message:""};return e.value[t].imageUrl===""&&(o.code=!1,o.message=l("imageUrlTip")),o};const c=t=>{u()},u=()=>{const t=new Image;t.src=S(e.editComponent.imageUrl),t.onload=async()=>{e.editComponent.imgWidth=t.width,e.editComponent.imgHeight=t.height}};return _({}),(t,o)=>{const g=A,m=V,h=B,f=U;return v(),C(x,null,[d(n("div",T,[n("div",k,[n("h3",D,w(a(l)("hotAreaSet")),1),s(f,{"label-width":"80px",class:"px-[10px]"},{default:r(()=>[n("div",E,[n("div",I,[s(m,{label:a(l)("hotAreaBackground")},{default:r(()=>[s(g,{modelValue:a(e).editComponent.imageUrl,"onUpdate:modelValue":o[0]||(o[0]=i=>a(e).editComponent.imageUrl=i),limit:1,onChange:c},null,8,["modelValue"])]),_:1},8,["label"]),s(m,{label:a(l)("hotAreaSet")},{default:r(()=>[s(h,{modelValue:a(e).editComponent,"onUpdate:modelValue":o[1]||(o[1]=i=>a(e).editComponent=i)},null,8,["modelValue"])]),_:1},8,["label"])])],512)]),_:1})])],512),[[p,a(e).editTab=="content"]]),d(n("div",j,[y(t.$slots,"style")],512),[[p,a(e).editTab=="style"]])],64)}}}),P=Object.freeze(Object.defineProperty({__proto__:null,default:H},Symbol.toStringTag,{value:"Module"}));export{P as _};