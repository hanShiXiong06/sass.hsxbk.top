import{d as x,r,n as b,H as m,l as g,Q as p,h as j,s as E,w as d,e as i,a,R,a0 as B,aS as O,K as S,L as k,M as C}from"./index-5a756a51.js";/* empty css                */import"./el-form-item-4ed993c7.js";/* empty css                 *//* empty css                  */const D=a("span",{class:"el-form-item__label"},"聚合快递订单完成",-1),F={class:"flex mt-[10px]"},I=a("span",{class:"el-form-item__label"},"聚合快递订单完成赠送",-1),M={class:"w-[70px]"},N=a("span",{class:"ml-[10px] el-form-item__label"},"积分",-1),z=x({__name:"point-rule-jhkd",props:{modelValue:{type:Object,default:()=>({})}},emits:["update:modelValue"],setup(_,{expose:v,emit:c}){const f=_,e=r({is_use:0,point:""}),n=r(null),h=b({point:[{validator:(o,t,l)=>{e.value.is_use&&(m.empty(e.value.point)&&l("请输入发放积分数量"),m.digits(e.value.point)||l("积分数量格式错误"),e.value.point<=0&&l("积分数量不能小于等于0")),l()}}]}),s=g({get(){return f.modelValue},set(o){c("update:modelValue",o)}});return p(()=>s.value,(o,t)=>{(!t||!Object.keys(t).length)&&Object.keys(o).length&&(e.value=s.value)},{immediate:!0}),p(()=>e.value,()=>{s.value=e.value},{deep:!0}),v({verify:async()=>{var t;let o=!0;return await((t=n.value)==null?void 0:t.validate(l=>{o=l})),o}}),(o,t)=>{const l=O,V=S,w=k,y=C;return j(),E(y,{ref_key:"formRef",ref:n,model:e.value,rules:h},{default:d(()=>[i(w,{label:"",prop:"point"},{default:d(()=>[a("div",null,[a("div",null,[D,i(l,{modelValue:e.value.is_use,"onUpdate:modelValue":t[0]||(t[0]=u=>e.value.is_use=u),"active-value":1,"inactive-value":0},null,8,["modelValue"])]),R(a("div",F,[I,a("div",M,[i(V,{modelValue:e.value.point,"onUpdate:modelValue":t[1]||(t[1]=u=>e.value.point=u),modelModifiers:{number:!0,trim:!0},clearable:""},null,8,["modelValue"])]),N],512),[[B,e.value.is_use]])])]),_:1})]),_:1},8,["model","rules"])}}});export{z as default};
