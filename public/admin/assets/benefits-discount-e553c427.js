import{d as b,r as d,n as w,H as m,l as g,Q as c,h as E,s as F,w as i,e as n,a,R,i as j,a0 as B,au as C,K as N,L as O,M as k}from"./index-f7a01263.js";/* empty css                     *//* empty css                 *//* empty css                    */const D={class:"flex items-center"},I=a("span",{class:"ml-[10px] el-form-item__label"},"消费折扣",-1),M={class:"w-[120px]"},U=a("div",{class:"text-sm text-gray-400 mb-[5px]"},"会员购买产品默认折扣，需要商品设置参与会员折扣有效",-1),S=b({__name:"benefits-discount",props:{modelValue:{type:Object,default:()=>({})}},emits:["update:modelValue"],setup(p,{expose:_,emit:f}){const v=p,e=d({is_use:0,discount:""}),r=d(null),x=w({discount:[{validator:(l,t,s)=>{e.value.is_use&&(m.empty(e.value.discount)&&s("请输入折扣"),m.decimal(e.value.discount,1)||s("折扣格式错误"),(parseFloat(e.value.discount)<.1||parseFloat(e.value.discount)>9.9)&&s("折扣只能输入0.1~9.9之间的值"),e.value.discount<=0&&s("折扣不能小于等于0")),s()}}]}),o=g({get(){return v.modelValue},set(l){f("update:modelValue",l)}});return c(()=>o.value,(l,t)=>{(!t||!Object.keys(t).length)&&Object.keys(l).length&&(e.value=o.value)},{immediate:!0}),c(()=>e.value,()=>{o.value=e.value},{deep:!0}),_({verify:async()=>{var t;let l=!0;return await((t=r.value)==null?void 0:t.validate(s=>{l=s})),l}}),(l,t)=>{const s=C,V=N,h=O,y=k;return E(),F(y,{ref_key:"formRef",ref:r,model:e.value,rules:x},{default:i(()=>[n(h,{label:"",prop:"discount",class:"!mb-[10px]"},{default:i(()=>[a("div",null,[a("div",D,[n(s,{modelValue:e.value.is_use,"onUpdate:modelValue":t[0]||(t[0]=u=>e.value.is_use=u),"true-label":1,"false-label":0,label:"",size:"large"},null,8,["modelValue"]),I,R(a("div",M,[n(V,{modelValue:e.value.discount,"onUpdate:modelValue":t[1]||(t[1]=u=>e.value.discount=u),modelModifiers:{trim:!0},clearable:""},{append:i(()=>[j("折")]),_:1},8,["modelValue"])],512),[[B,e.value.is_use]])]),U])]),_:1})]),_:1},8,["model","rules"])}}});export{S as default};
