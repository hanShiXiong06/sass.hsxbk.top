import{an as e,ao as t,ap as a,aX as o,aZ as s,o as l,c as r,w as u,y as d,z as i,R as n,n as b,f as h,D as g}from"./index-7bf68536.js";import{_ as p}from"./_plugin-vue_export-helper.1b428a4d.js";const f=p({name:"u-badge",mixins:[t,{props:{isDot:{type:Boolean,default:()=>e.badge.isDot},value:{type:[Number,String],default:()=>e.badge.value},modelValue:{type:[Number,String],default:()=>e.badge.modelValue},show:{type:Boolean,default:()=>e.badge.show},max:{type:[Number,String],default:()=>e.badge.max},type:{type:String,default:()=>e.badge.type},showZero:{type:Boolean,default:()=>e.badge.showZero},bgColor:{type:[String,null],default:()=>e.badge.bgColor},color:{type:[String,null],default:()=>e.badge.color},shape:{type:String,default:()=>e.badge.shape},numberType:{type:String,default:()=>e.badge.numberType},offset:{type:Array,default:()=>e.badge.offset},inverted:{type:Boolean,default:()=>e.badge.inverted},absolute:{type:Boolean,default:()=>e.badge.absolute}}},a],computed:{boxStyle:()=>({}),badgeStyle(){const e={};if(this.color&&(e.color=this.color),this.bgColor&&!this.inverted&&(e.backgroundColor=this.bgColor),this.absolute&&(e.position="absolute",this.offset.length)){const t=this.offset[0],a=this.offset[1]||t;e.top=o(t),e.right=o(a)}return e},showValue(){switch(this.numberType){case"overflow":return Number(this.value)>Number(this.max)?this.max+"+":this.value;case"ellipsis":return Number(this.value)>Number(this.max)?"...":this.value;case"limit":return Number(this.value)>999?Number(this.value)>=9999?Math.floor(this.value/1e4*100)/100+"w":Math.floor(this.value/1e3*100)/100+"k":this.value;default:return Number(this.value)}}},methods:{addStyle:s}},[["render",function(e,t,a,o,s,p){const f=g;return e.show&&(0!==Number(e.value)||e.showZero||e.isDot)?(l(),r(f,{key:0,class:n([[e.isDot?"u-badge--dot":"u-badge--not-dot",e.inverted&&"u-badge--inverted","horn"===e.shape&&"u-badge--horn",`u-badge--${e.type}${e.inverted?"--inverted":""}`],"u-badge"]),style:b([p.addStyle(e.customStyle),p.badgeStyle])},{default:u((()=>[d(i(e.isDot?"":p.showValue),1)])),_:1},8,["class","style"])):h("v-if",!0)}],["__scopeId","data-v-0e56696e"]]);export{f as _};