import{d as h,r as d,n as y,H as w,l as g,a5 as i,h as k,s as j,w as r,e as n,a as s,P as B,i as E,a6 as C,aB as N,J as O,K as R,L as D}from"./index-17984968.js";/* empty css                */import"./el-form-item-4ed993c7.js";/* empty css                 *//* empty css                    */const F={class:"flex items-center"},I=s("span",{class:"ml-[10px] el-form-item__label"},"聚合快递单单返",-1),U={class:"w-[120px]"},z=s("div",{class:"text-sm text-gray-400 mb-[5px]"}," 此等级聚合快递会员专享，每单将会额外多返元到可提现余额 ",-1),S=h({__name:"benefits-jhkd-level",props:{modelValue:{type:Object,default:()=>({})}},emits:["update:modelValue"],setup(p,{expose:_,emit:c}){const f=p,e=d({is_use:0,expand:""}),m=d(null),v=y({expand:[{validator:(a,t,l)=>{e.value.is_use&&(w.empty(e.value.expand)&&l("请输入金额"),e.value.expand<=0&&l("金额小于等于0")),l()}}]}),o=g({get(){return f.modelValue},set(a){c("update:modelValue",a)}});return i(()=>o.value,(a,t)=>{(!t||!Object.keys(t).length)&&Object.keys(a).length&&(e.value=o.value)},{immediate:!0}),i(()=>e.value,()=>{o.value=e.value},{deep:!0}),_({verify:async()=>{var t;let a=!0;return await((t=m.value)==null?void 0:t.validate(l=>{a=l})),a}}),(a,t)=>{const l=N,x=O,V=R,b=D;return k(),j(b,{ref_key:"formRef",ref:m,model:e.value,rules:v},{default:r(()=>[n(V,{label:"",prop:"expand",class:"!mb-[10px]"},{default:r(()=>[s("div",null,[s("div",F,[n(l,{modelValue:e.value.is_use,"onUpdate:modelValue":t[0]||(t[0]=u=>e.value.is_use=u),"true-label":1,"false-label":0,label:"",size:"large"},null,8,["modelValue"]),I,B(s("div",U,[n(x,{modelValue:e.value.expand,"onUpdate:modelValue":t[1]||(t[1]=u=>e.value.expand=u),modelModifiers:{trim:!0},clearable:""},{append:r(()=>[E("元")]),_:1},8,["modelValue"])],512),[[C,e.value.is_use]])]),z])]),_:1})]),_:1},8,["model","rules"])}}});export{S as default};