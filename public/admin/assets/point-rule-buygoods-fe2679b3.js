import{d as w,r as d,n as g,H as u,l as b,Q as p,h as E,s as R,w as _,e as n,a as o,R as j,a0 as B,aS as M,K as O,L as S,M as U}from"./index-5a756a51.js";/* empty css                */import"./el-form-item-4ed993c7.js";/* empty css                 *//* empty css                  */const C=o("span",{class:"el-form-item__label"},"购买商品",-1),D={class:"flex mt-[10px]"},F=o("span",{class:"el-form-item__label"},"每消费",-1),I={class:"w-[100px]"},N=o("span",{class:"ml-[10px] el-form-item__label"},"元，获得",-1),H={class:"w-[100px]"},K=o("span",{class:"ml-[10px] el-form-item__label"},"积分",-1),J=w({__name:"point-rule-buygoods",props:{modelValue:{type:Object,default:()=>({})}},emits:["update:modelValue"],setup(v,{expose:f,emit:c}){const y=v,e=d({is_use:0,money:"",point:""}),m=d(null),V=g({money:[{validator:(s,t,l)=>{e.value.is_use&&(u.empty(e.value.money)&&l("请输入消费金额"),u.amount(e.value.money)||l("消费金额格式错误"),e.value.money<=0&&l("消费金额不能小于等于0"),u.empty(e.value.point)&&l("请输入发放积分数量"),u.digits(e.value.point)||l("积分数量格式错误"),e.value.point<=0&&l("积分数量不能小于等于0")),l()}}]}),i=b({get(){return y.modelValue},set(s){c("update:modelValue",s)}});return p(()=>i.value,(s,t)=>{(!t||!Object.keys(t).length)&&Object.keys(s).length&&(e.value=i.value)},{immediate:!0}),p(()=>e.value,()=>{i.value=e.value},{deep:!0}),f({verify:async()=>{var t;let s=!0;return await((t=m.value)==null?void 0:t.validate(l=>{s=l})),s}}),(s,t)=>{const l=M,r=O,h=S,x=U;return E(),R(x,{ref_key:"formRef",ref:m,model:e.value,rules:V},{default:_(()=>[n(h,{label:"",prop:"money"},{default:_(()=>[o("div",null,[o("div",null,[C,n(l,{modelValue:e.value.is_use,"onUpdate:modelValue":t[0]||(t[0]=a=>e.value.is_use=a),"active-value":1,"inactive-value":0},null,8,["modelValue"])]),j(o("div",D,[F,o("div",I,[n(r,{modelValue:e.value.money,"onUpdate:modelValue":t[1]||(t[1]=a=>e.value.money=a),modelModifiers:{trim:!0},clearable:"",maxlength:"8"},null,8,["modelValue"])]),N,o("div",H,[n(r,{modelValue:e.value.point,"onUpdate:modelValue":t[2]||(t[2]=a=>e.value.point=a),modelModifiers:{number:!0,trim:!0},clearable:"",maxlength:"8"},null,8,["modelValue"])]),K],512),[[B,e.value.is_use]])])]),_:1})]),_:1},8,["model","rules"])}}});export{J as default};