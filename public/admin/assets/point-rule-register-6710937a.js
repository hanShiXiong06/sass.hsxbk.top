import{d as x,r,n as b,H as m,l as g,Q as p,h as E,s as R,w as d,e as i,a as s,R as j,a0 as B,aS as O,K as S,L as C,M as D}from"./index-5a756a51.js";/* empty css                */import"./el-form-item-4ed993c7.js";/* empty css                 *//* empty css                  */const F=s("span",{class:"el-form-item__label"},"会员注册",-1),I={class:"flex mt-[10px]"},M=s("span",{class:"el-form-item__label"},"发放",-1),N={class:"w-[70px]"},U=s("span",{class:"ml-[10px] el-form-item__label"},"积分",-1),z=x({__name:"point-rule-register",props:{modelValue:{type:Object,default:()=>({})}},emits:["update:modelValue"],setup(_,{expose:v,emit:c}){const f=_,e=r({is_use:0,point:""}),n=r(null),V=b({point:[{validator:(o,t,l)=>{e.value.is_use&&(m.empty(e.value.point)&&l("请输入发放积分数量"),m.digits(e.value.point)||l("积分数量格式错误"),e.value.point<=0&&l("积分数量不能小于等于0")),l()}}]}),a=g({get(){return f.modelValue},set(o){c("update:modelValue",o)}});return p(()=>a.value,(o,t)=>{(!t||!Object.keys(t).length)&&Object.keys(o).length&&(e.value=a.value)},{immediate:!0}),p(()=>e.value,()=>{a.value=e.value},{deep:!0}),v({verify:async()=>{var t;let o=!0;return await((t=n.value)==null?void 0:t.validate(l=>{o=l})),o}}),(o,t)=>{const l=O,h=S,w=C,y=D;return E(),R(y,{ref_key:"formRef",ref:n,model:e.value,rules:V},{default:d(()=>[i(w,{label:"",prop:"point"},{default:d(()=>[s("div",null,[s("div",null,[F,i(l,{modelValue:e.value.is_use,"onUpdate:modelValue":t[0]||(t[0]=u=>e.value.is_use=u),"active-value":1,"inactive-value":0},null,8,["modelValue"])]),j(s("div",I,[M,s("div",N,[i(h,{modelValue:e.value.point,"onUpdate:modelValue":t[1]||(t[1]=u=>e.value.point=u),modelModifiers:{number:!0,trim:!0},clearable:""},null,8,["modelValue"])]),U],512),[[B,e.value.is_use]])])]),_:1})]),_:1},8,["model","rules"])}}});export{z as default};
