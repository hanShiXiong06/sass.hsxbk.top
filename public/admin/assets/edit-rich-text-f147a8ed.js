import{_ as m}from"./index.vue_vue_type_script_setup_true_lang-edd497b7.js";import{d as _,q as n,h as p,c as u,R as r,a0 as i,u as o,a as s,t as h,e as f,b,F as g}from"./index-6f32d09b.js";import{u as v}from"./diy-452b5b8a.js";const y={class:"content-wrap"},S={class:"edit-attr-item-wrap"},w={class:"mb-[10px]"},C={class:"style-wrap"},x=_({__name:"edit-rich-text",setup(T,{expose:l}){const e=v();return e.editComponent.ignore=[],e.editComponent.verify=a=>{const t={code:!0,message:""};return e.value[a].html=="<p><br></p>"&&(t.code=!1,t.message=n("richTextPlaceholder")),t},l({}),(a,t)=>{const d=m;return p(),u(g,null,[r(s("div",y,[s("div",S,[s("h3",w,h(o(n)("richTextContentSet")),1),f(d,{modelValue:o(e).editComponent.html,"onUpdate:modelValue":t[0]||(t[0]=c=>o(e).editComponent.html=c),height:600,class:"editor-width"},null,8,["modelValue"])])],512),[[i,o(e).editTab=="content"]]),r(s("div",C,[b(a.$slots,"style")],512),[[i,o(e).editTab=="style"]])],64)}}}),j=Object.freeze(Object.defineProperty({__proto__:null,default:x},Symbol.toStringTag,{value:"Module"}));export{j as _};
