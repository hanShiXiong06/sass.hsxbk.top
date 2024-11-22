import{_ as t}from"./u-icon.0c1c54c7.js";import{an as e,ao as a,ap as i,c0 as n,aZ as o,aX as s,bg as c,c1 as l,at as r,g as d,h as u,o as h,c as m,w as v,b as f,A as _,P as p,Q as g,a7 as I,R as y,n as x,f as C,i as b}from"./index-7bf68536.js";import{_ as w}from"./_plugin-vue_export-helper.1b428a4d.js";const W=w({name:"u-rate",mixins:[a,i,{props:{modelValue:{type:[String,Number],default:()=>e.rate.value},count:{type:[String,Number],default:()=>e.rate.count},disabled:{type:Boolean,default:()=>e.rate.disabled},readonly:{type:Boolean,default:()=>e.rate.readonly},size:{type:[String,Number],default:()=>e.rate.size},inactiveColor:{type:String,default:()=>e.rate.inactiveColor},activeColor:{type:String,default:()=>e.rate.activeColor},gutter:{type:[String,Number],default:()=>e.rate.gutter},minCount:{type:[String,Number],default:()=>e.rate.minCount},allowHalf:{type:Boolean,default:()=>e.rate.allowHalf},activeIcon:{type:String,default:()=>e.rate.activeIcon},inactiveIcon:{type:String,default:()=>e.rate.inactiveIcon},touchable:{type:Boolean,default:()=>e.rate.touchable}}}],data(){return{elId:n(),elClass:n(),rateBoxLeft:0,activeIndex:this.modelValue,rateWidth:0,moving:!1}},watch:{modelValue(t){this.activeIndex=t},activeIndex:"emitEvent"},emits:["update:modelValue","change"],methods:{addStyle:o,addUnit:s,init(){c().then((()=>{this.getRateItemRect(),this.getRateIconWrapRect()}))},async getRateItemRect(){await c(),this.$uGetRect("#"+this.elId).then((t=>{this.rateBoxLeft=t.left}))},getRateIconWrapRect(){this.$uGetRect("."+this.elClass).then((t=>{this.rateWidth=t.width}))},touchMove(t){if(!this.touchable)return;this.preventEvent(t);const e=t.changedTouches[0].pageX;this.getActiveIndex(e)},touchEnd(t){if(!this.touchable)return;this.preventEvent(t);const e=t.changedTouches[0].pageX;this.getActiveIndex(e)},clickHandler(t,e){if("ios"===l()&&this.moving)return;this.preventEvent(t);let a=0;a=t.changedTouches[0].pageX,this.getActiveIndex(a,!0)},emitEvent(){this.$emit("change",this.activeIndex),this.$emit("update:modelValue",this.activeIndex)},getActiveIndex(t,e=!1){if(this.disabled||this.readonly)return;const a=this.rateWidth*this.count+this.rateBoxLeft,i=t=r(this.rateBoxLeft,a,t)-this.rateBoxLeft;let n;if(this.allowHalf){n=Math.floor(i/this.rateWidth);const t=i%this.rateWidth;t<=this.rateWidth/2&&t>0?n+=.5:t>this.rateWidth/2&&n++}else{n=Math.floor(i/this.rateWidth);const t=i%this.rateWidth;e?t>0&&n++:t>this.rateWidth/2&&n++}this.activeIndex=Math.min(n,this.count),this.activeIndex<this.minCount&&(this.activeIndex=this.minCount),setTimeout((()=>{this.moving=!0}),10),setTimeout((()=>{this.moving=!1}),10)}},mounted(){this.init()}},[["render",function(e,a,i,n,o,s){const c=d(u("u-icon"),t),l=b;return h(),m(l,{class:"u-rate",id:o.elId,ref:"u-rate",style:x([s.addStyle(e.customStyle)])},{default:v((()=>[f(l,{class:"u-rate__content",onTouchmove:_(s.touchMove,["stop"]),onTouchend:_(s.touchEnd,["stop"])},{default:v((()=>[(h(!0),p(g,null,I(Number(e.count),((t,a)=>(h(),m(l,{class:y(["u-rate__content__item cursor-pointer",[o.elClass]]),key:a},{default:v((()=>[f(l,{class:"u-rate__content__item__icon-wrap",ref_for:!0,ref:"u-rate__content__item__icon-wrap",onClick:_((t=>s.clickHandler(t,a+1)),["stop"])},{default:v((()=>[f(c,{name:Math.floor(o.activeIndex)>a?e.activeIcon:e.inactiveIcon,color:e.disabled?"#c8c9cc":Math.floor(o.activeIndex)>a?e.activeColor:e.inactiveColor,"custom-style":{padding:`0 ${s.addUnit(e.gutter/2)}`},size:e.size},null,8,["name","color","custom-style","size"])])),_:2},1032,["onClick"]),e.allowHalf?(h(),m(l,{key:0,onClick:_((t=>s.clickHandler(t,a+1)),["stop"]),class:"u-rate__content__item__icon-wrap u-rate__content__item__icon-wrap--half",style:x([{width:s.addUnit(o.rateWidth/2)}]),ref_for:!0,ref:"u-rate__content__item__icon-wrap"},{default:v((()=>[f(c,{name:Math.ceil(o.activeIndex)>a?e.activeIcon:e.inactiveIcon,color:e.disabled?"#c8c9cc":Math.ceil(o.activeIndex)>a?e.activeColor:e.inactiveColor,"custom-style":{padding:`0 ${s.addUnit(e.gutter/2)}`},size:e.size},null,8,["name","color","custom-style","size"])])),_:2},1032,["onClick","style"])):C("v-if",!0)])),_:2},1032,["class"])))),128))])),_:1},8,["onTouchmove","onTouchend"])])),_:1},8,["id","style"])}],["__scopeId","data-v-2d03dda9"]]);export{W as _};
