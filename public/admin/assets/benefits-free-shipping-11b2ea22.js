import{d as x,r as o,n as y,l as V,Q as r,h as k,s as g,w as m,e as u,a,au as j,L as w,M as B}from"./index-6ea097a6.js";/* empty css                     *//* empty css                    */const C={class:"flex items-center"},E=a("span",{class:"ml-[10px] el-form-item__label"},"包邮",-1),O=a("div",{class:"text-sm text-gray-400 mb-[5px]"},"该包邮仅针对物流配送",-1),D=x({__name:"benefits-free-shipping",props:{modelValue:{type:Object,default:()=>({})}},emits:["update:modelValue"],setup(n,{expose:c,emit:i}){const d=n,e=o({is_use:0}),_=o(null),p=y({}),s=V({get(){return d.modelValue},set(l){i("update:modelValue",l)}});return r(()=>s.value,(l,t)=>{(!t||!Object.keys(t).length)&&Object.keys(l).length&&(e.value=s.value)},{immediate:!0}),r(()=>e.value,()=>{s.value=e.value},{deep:!0}),c({verify:async()=>!0}),(l,t)=>{const f=j,v=w,b=B;return k(),g(b,{ref_key:"formRef",ref:_,model:e.value,rules:p},{default:m(()=>[u(v,{label:"",prop:"money",class:"!mb-0"},{default:m(()=>[a("div",C,[u(f,{modelValue:e.value.is_use,"onUpdate:modelValue":t[0]||(t[0]=h=>e.value.is_use=h),"true-label":1,"false-label":0,label:"",size:"large",class:"!mr-0"},null,8,["modelValue"]),E])]),_:1}),O]),_:1},8,["model","rules"])}}});export{D as default};