import{P as e,Q as t,R as i,aX as r,aY as n,aV as s,o as a,c as l,n as o,i as d}from"./index-905183d4.js";import{_ as h}from"./_plugin-vue_export-helper.1b428a4d.js";const c=h({name:"u-line",mixins:[t,i,{props:{color:{type:String,default:()=>e.line.color},length:{type:[String,Number],default:()=>e.line.length},direction:{type:String,default:()=>e.line.direction},hairline:{type:Boolean,default:()=>e.line.hairline},margin:{type:[String,Number],default:()=>e.line.margin},dashed:{type:Boolean,default:()=>e.line.dashed}}}],computed:{lineStyle(){const e={};return e.margin=this.margin,"row"===this.direction?(e.borderBottomWidth="1px",e.borderBottomStyle=this.dashed?"dashed":"solid",e.width=r(this.length),this.hairline&&(e.transform="scaleY(0.5)")):(e.borderLeftWidth="1px",e.borderLeftStyle=this.dashed?"dashed":"solid",e.height=r(this.length),this.hairline&&(e.transform="scaleX(0.5)")),e.borderColor=this.color,n(e,s(this.customStyle))}}},[["render",function(e,t,i,r,n,s){const h=d;return a(),l(h,{class:"u-line",style:o([s.lineStyle])},null,8,["style"])}],["__scopeId","data-v-9482bdca"]]);export{c as _};
