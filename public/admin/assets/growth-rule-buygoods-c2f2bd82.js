import{d as g,r as d,n as x,H as u,l as b,Q as _,h as E,s as R,w as p,e as m,a as o,R as j,a0 as B,aS as M,K as O,L as S,M as U}from"./index-2a89d409.js";/* empty css                */import"./el-form-item-4ed993c7.js";/* empty css                 *//* empty css                  */const C=o("span",{class:"el-form-item__label"},"购买商品",-1),D={class:"flex mt-[10px]"},F=o("span",{class:"el-form-item__label"},"每消费",-1),I={class:"w-[70px]"},N=o("span",{class:"ml-[10px] el-form-item__label"},"元，获得",-1),H={class:"w-[70px]"},K=o("span",{class:"ml-[10px] el-form-item__label"},"成长值",-1),J=g({__name:"growth-rule-buygoods",props:{modelValue:{type:Object,default:()=>({})}},emits:["update:modelValue"],setup(v,{expose:f,emit:c}){const y=v,e=d({is_use:0,money:"",growth:""}),n=d(null),h=x({money:[{validator:(s,t,l)=>{e.value.is_use&&(u.empty(e.value.money)&&l("请输入消费金额"),u.amount(e.value.money)||l("消费金额格式错误"),e.value.money<=0&&l("消费金额不能小于等于0"),u.empty(e.value.growth)&&l("请输入发放成长值数量"),u.digits(e.value.growth)||l("成长值数量格式错误"),e.value.growth<=0&&l("成长值数量不能小于等于0")),l()}}]}),r=b({get(){return y.modelValue},set(s){c("update:modelValue",s)}});return _(()=>r.value,(s,t)=>{(!t||!Object.keys(t).length)&&Object.keys(s).length&&(e.value=r.value)},{immediate:!0}),_(()=>e.value,()=>{r.value=e.value},{deep:!0}),f({verify:async()=>{var t;let s=!0;return await((t=n.value)==null?void 0:t.validate(l=>{s=l})),s}}),(s,t)=>{const l=M,i=O,w=S,V=U;return E(),R(V,{ref_key:"formRef",ref:n,model:e.value,rules:h},{default:p(()=>[m(w,{label:"",prop:"money"},{default:p(()=>[o("div",null,[o("div",null,[C,m(l,{modelValue:e.value.is_use,"onUpdate:modelValue":t[0]||(t[0]=a=>e.value.is_use=a),"active-value":1,"inactive-value":0},null,8,["modelValue"])]),j(o("div",D,[F,o("div",I,[m(i,{modelValue:e.value.money,"onUpdate:modelValue":t[1]||(t[1]=a=>e.value.money=a),modelModifiers:{trim:!0},clearable:""},null,8,["modelValue"])]),N,o("div",H,[m(i,{modelValue:e.value.growth,"onUpdate:modelValue":t[2]||(t[2]=a=>e.value.growth=a),modelModifiers:{number:!0,trim:!0},clearable:""},null,8,["modelValue"])]),K],512),[[B,e.value.is_use]])])]),_:1})]),_:1},8,["model","rules"])}}});export{J as default};
