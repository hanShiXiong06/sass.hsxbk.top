import{d as y,r as c,n as _,a5 as v,h as l,s as r,w as d,aY as f,aX as i,v as p,c as S,X as k}from"./index-17984968.js";/* empty css                */const h=y({__name:"index",props:{name:{type:String,required:!0},color:{type:String,default:"var(--color)"},class:{type:[String,Object],default:""},size:{type:String,default:"16px"}},setup(m){const e=m,a=c(""),s=c(""),n=_({color:e.color,fontSize:e.size}),o=()=>{const t=e.name.split(/-(.*)/);a.value=t[0],s.value=t[1]};return o(),v(()=>e.name,()=>{o()}),(t,x)=>{const u=k;return a.value=="element"?(l(),r(u,{key:0,style:i(n),class:p(["icon el-icon",e.class])},{default:d(()=>[(l(),r(f(s.value)))]),_:1},8,["style","class"])):(l(),S("i",{key:1,class:p([a.value,s.value,e.class]),style:i(n)},null,6))}}});export{h as _};
