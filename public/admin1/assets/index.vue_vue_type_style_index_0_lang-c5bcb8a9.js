import{d as V,r as m,h as C,c as b,a as d,b as h,e as n,w as s,i as p,t as f,u as i,q as r,F as w,E as B,a1 as D}from"./index-17984968.js";/* empty css                  *//* empty css                   *//* empty css                  */import E from"./attachment-a816d3ef.js";const N={class:"dialog-footer"},O=V({__name:"index",props:{limit:{type:Number,default:1},type:{type:String,default:"image"}},emits:["confirm"],setup(t,{expose:_,emit:y}){const g=t,e=m(!1),l=m(null),v=()=>{e.value=!0},k=()=>{e.value=!1;const o=Object.values(l==null?void 0:l.value.selectedFile);y("confirm",g.limit==1?o[0]??null:o)};return _({showDialog:e}),(o,a)=>{const c=B,x=D;return C(),b(w,null,[d("span",{onClick:v,class:"cursor-pointer"},[h(o.$slots,"default")]),n(x,{modelValue:e.value,"onUpdate:modelValue":a[1]||(a[1]=u=>e.value=u),title:i(r)("upload.select"+t.type),width:"60%",class:"attachment-dialog","destroy-on-close":!0},{footer:s(()=>[d("span",N,[n(c,{onClick:a[0]||(a[0]=u=>e.value=!1)},{default:s(()=>[p(f(i(r)("cancel")),1)]),_:1}),n(c,{type:"primary",onClick:k},{default:s(()=>[p(f(i(r)("confirm")),1)]),_:1})])]),default:s(()=>[n(E,{limit:t.limit,type:t.type,ref_key:"attachmentRef",ref:l},null,8,["limit","type"])]),_:1},8,["modelValue","title"])],64)}}});export{O as _};
