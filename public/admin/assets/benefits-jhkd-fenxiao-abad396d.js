import{d as U,r as f,n as B,H as x,l as j,Q as v,h as i,s as C,w as d,e as o,a as l,R as F,i as V,c as u,B as p,a0 as N,au as O,as as D,at as I,K as z,L as G,M as H}from"./index-f7a01263.js";/* empty css                     *//* empty css                 *//* empty css                       *//* empty css                 *//* empty css                    */const K={class:"flex items-center"},L=l("span",{class:"ml-[10px] el-form-item__label"},"聚合快递分销",-1),M={class:"w-[680px]"},Q=l("span",{class:"ml-[10px] el-form-item__label"},"分销方式",-1),S={key:0,class:"flex items-center mt-[5px]"},T=l("span",{class:"ml-[10px] mr-4"},"一级分销",-1),q=l("span",{class:"ml-[5px]"},"%",-1),A={key:1,class:"flex items-center mt-[5px]"},J=l("span",{class:"ml-[10px] mr-4"},"二级分销",-1),P=l("span",{class:"ml-[5px]"},"%",-1),W={key:2,class:"flex items-center mt-[5px]"},X=l("span",{class:"ml-[10px] mr-4"},"一级分销",-1),Y=l("span",{class:"ml-[5px]"},"元",-1),Z={key:3,class:"flex items-center mt-[5px]"},$=l("span",{class:"ml-[10px] mr-4"},"二级分销",-1),ee=l("span",{class:"ml-[5px]"},"元",-1),se=l("div",{class:"text-sm text-gray-400 mb-[5px]"}," 开启后将获得推广权限，将可以获取推广订单的返利，如不需开启二级分销，填写0即可 ",-1),me=U({__name:"benefits-jhkd-fenxiao",props:{modelValue:{type:Object,default:()=>({})}},emits:["update:modelValue"],setup(y,{expose:h,emit:w}){const b=y,e=f({is_use:0,fenxiao_type:"",first_rate:"",second_rate:"",first_commission:"",second_commission:""}),_=f(null),k=B({expand:[{validator:(n,s,a)=>{e.value.is_use&&(x.empty(e.value.expand)&&a("请输入折扣"),x.decimal(e.value.expand,1)||a("折扣格式错误"),(parseFloat(e.value.expand)<.1||parseFloat(e.value.expand)>9.9)&&a("折扣只能输入0.1~9.9之间的值"),e.value.discount<=0&&a("折扣不能小于等于0")),a()}}]}),r=j({get(){return b.modelValue},set(n){w("update:modelValue",n)}});return v(()=>r.value,(n,s)=>{(!s||!Object.keys(s).length)&&Object.keys(n).length&&(e.value=r.value)},{immediate:!0}),v(()=>e.value,()=>{r.value=e.value},{deep:!0}),h({verify:async()=>{var s;let n=!0;return await((s=_.value)==null?void 0:s.validate(a=>{n=a})),n}}),(n,s)=>{const a=O,c=D,E=I,m=z,g=G,R=H;return i(),C(R,{ref_key:"formRef",ref:_,model:e.value,rules:k},{default:d(()=>[o(g,{label:"",prop:"discount",class:"!mb-[10px]"},{default:d(()=>[l("div",null,[l("div",K,[o(a,{modelValue:e.value.is_use,"onUpdate:modelValue":s[0]||(s[0]=t=>e.value.is_use=t),"true-label":1,"false-label":0,label:"",size:"large"},null,8,["modelValue"]),L,F(l("div",M,[Q,o(E,{modelValue:e.value.fenxiao_type,"onUpdate:modelValue":s[1]||(s[1]=t=>e.value.fenxiao_type=t)},{default:d(()=>[o(c,{label:0},{default:d(()=>[V("按比例")]),_:1}),o(c,{label:1},{default:d(()=>[V("按固定金额")]),_:1})]),_:1},8,["modelValue"]),e.value.fenxiao_type==0?(i(),u("div",S,[T,o(m,{style:{width:"80px"},modelValue:e.value.first_rate,"onUpdate:modelValue":s[2]||(s[2]=t=>e.value.first_rate=t),placeholder:"请输入",class:"w-[120px]"},null,8,["modelValue"]),q])):p("",!0),e.value.fenxiao_type==0?(i(),u("div",A,[J,o(m,{style:{width:"80px"},modelValue:e.value.second_rate,"onUpdate:modelValue":s[3]||(s[3]=t=>e.value.second_rate=t),placeholder:"请输入",class:"w-[120px]"},null,8,["modelValue"]),P])):p("",!0),e.value.fenxiao_type==1?(i(),u("div",W,[X,o(m,{style:{width:"80px"},modelValue:e.value.first_commission,"onUpdate:modelValue":s[4]||(s[4]=t=>e.value.first_commission=t),placeholder:"请输入",class:"w-[120px]"},null,8,["modelValue"]),Y])):p("",!0),e.value.fenxiao_type==1?(i(),u("div",Z,[$,o(m,{style:{width:"80px"},modelValue:e.value.second_commission,"onUpdate:modelValue":s[5]||(s[5]=t=>e.value.second_commission=t),placeholder:"请输入",class:"w-[120px]"},null,8,["modelValue"]),ee])):p("",!0)],512),[[N,e.value.is_use]])]),se])]),_:1})]),_:1},8,["model","rules"])}}});export{me as default};
