import{d as h,l as x,r as b,h as V,s as w,w as r,b as y,e as s,u as i,bp as S,a as k,i as d,t as m,q as c,R as B,J as E,E as C,$ as N}from"./index-17984968.js";/* empty css                  *//* empty css                   *//* empty css                  *//* empty css                 */const $={class:"text-right mt-[15px]"},J=h({__name:"index",props:{width:{type:String,default:"350px"},modelValue:{type:String,default:""},placeholder:{type:String,default:""},required:{type:Boolean,default:!0},maxlength:{type:Number,default:10}},emits:["confirm"],setup(f,{emit:p}){const t=f,l=x({get(){return t.modelValue},set(n){p("update:modelValue",n)}}),a=b(!1),v=()=>{if(!/[\S]+/.test(l.value)){B.error(t.placeholder||"不能为空");return}p("confirm",l.value),a.value=!1};return(n,e)=>{const _=E,u=C,g=N;return V(),w(g,{placement:"top",trigger:"click",width:t.width,visible:a.value,"onUpdate:visible":e[2]||(e[2]=o=>a.value=o)},{reference:r(()=>[y(n.$slots,"default")]),default:r(()=>[s(_,{modelValue:i(l),"onUpdate:modelValue":e[0]||(e[0]=o=>S(l)?l.value=o:null),placeholder:t.placeholder,clearable:"",class:"mr-[10px]",maxlength:t.maxlength,"show-word-limit":!0},null,8,["modelValue","placeholder","maxlength"]),k("div",$,[s(u,{onClick:e[1]||(e[1]=o=>a.value=!1)},{default:r(()=>[d(m(i(c)("cancel")),1)]),_:1}),s(u,{type:"primary",onClick:v},{default:r(()=>[d(m(i(c)("confirm")),1)]),_:1})])]),_:3},8,["width","visible"])}}});export{J as _};
