import{am as e,an as t,ao as s,bz as n,aW as i,g as o,h as u,o as l,c as a,w as r,A as h,aR as c,Q as m,n as d,b,f as p,i as g,a4 as f}from"./index-2882a2d8.js";import{_ as y}from"./u-icon.1104ad2f.js";import{_ as x}from"./_plugin-vue_export-helper.1b428a4d.js";const S=x({name:"u-number-box",mixins:[t,s,{props:{name:{type:[String,Number],default:()=>e.numberBox.name},modelValue:{type:[String,Number],default:()=>e.numberBox.value},min:{type:[String,Number],default:()=>e.numberBox.min},max:{type:[String,Number],default:()=>e.numberBox.max},step:{type:[String,Number],default:()=>e.numberBox.step},integer:{type:Boolean,default:()=>e.numberBox.integer},disabled:{type:Boolean,default:()=>e.numberBox.disabled},disabledInput:{type:Boolean,default:()=>e.numberBox.disabledInput},asyncChange:{type:Boolean,default:()=>e.numberBox.asyncChange},inputWidth:{type:[String,Number],default:()=>e.numberBox.inputWidth},showMinus:{type:Boolean,default:()=>e.numberBox.showMinus},showPlus:{type:Boolean,default:()=>e.numberBox.showPlus},decimalLength:{type:[String,Number,null],default:()=>e.numberBox.decimalLength},longPress:{type:Boolean,default:()=>e.numberBox.longPress},color:{type:String,default:()=>e.numberBox.color},buttonSize:{type:[String,Number],default:()=>e.numberBox.buttonSize},bgColor:{type:String,default:()=>e.numberBox.bgColor},cursorSpacing:{type:[String,Number],default:()=>e.numberBox.cursorSpacing},disablePlus:{type:Boolean,default:()=>e.numberBox.disablePlus},disableMinus:{type:Boolean,default:()=>e.numberBox.disableMinus},iconStyle:{type:[Object,String],default:()=>e.numberBox.iconStyle}}}],data:()=>({currentValue:"",longPressTimer:null}),watch:{watchChange(e){this.check()},modelValue:{handler:function(e,t){e!==this.currentValue&&(this.currentValue=this.format(this.modelValue))},immediate:!0}},computed:{getCursorSpacing(){return n(this.cursorSpacing)},buttonStyle(){return e=>{const t={backgroundColor:this.bgColor,height:i(this.buttonSize),color:this.color};return this.isDisabled(e)&&(t.backgroundColor="#f7f8fa"),t}},inputStyle(){this.disabled||this.disabledInput;return{color:this.color,backgroundColor:this.bgColor,height:i(this.buttonSize),width:i(this.inputWidth)}},watchChange(){return[this.integer,this.decimalLength,this.min,this.max]},isDisabled(){return e=>"plus"===e?this.disabled||this.disablePlus||this.currentValue>=this.max:this.disabled||this.disableMinus||this.currentValue<=this.min}},mounted(){this.init()},emits:["update:modelValue","focus","blur","overlimit","change","plus","minus"],methods:{init(){this.currentValue=this.format(this.modelValue)},format(e){return e=""===(e=this.filter(e))?0:+e,e=Math.max(Math.min(this.max,e),this.min),null!==this.decimalLength&&(e=e.toFixed(this.decimalLength)),e},filter(e){return e=String(e).replace(/[^0-9.-]/g,""),this.integer&&-1!==e.indexOf(".")&&(e=e.split(".")[0]),e},check(){const e=this.format(this.currentValue);e!==this.currentValue&&(this.currentValue=e)},onFocus(e){this.$emit("focus",{...e.detail,name:this.name})},onBlur(e){this.format(e.detail.value),this.$emit("blur",{...e.detail,name:this.name})},onInput(e){const{value:t=""}=e.detail||{};if(""===t)return;let s=this.filter(t);if(null!==this.decimalLength&&-1!==s.indexOf(".")){const e=s.split(".");s=`${e[0]}.${e[1].slice(0,this.decimalLength)}`}s=this.format(s),this.emitChange(s)},emitChange(e){this.asyncChange||this.$nextTick((()=>{this.$emit("update:modelValue",e),this.currentValue=e,this.$forceUpdate()})),this.$emit("change",{value:e,name:this.name})},onChange(){const{type:e}=this;if(this.isDisabled(e))return this.$emit("overlimit",e);const t="minus"===e?-this.step:+this.step,s=this.format(this.add(+this.currentValue,t));this.emitChange(s),this.$emit(e)},add(e,t){const s=Math.pow(10,10);return Math.round((e+t)*s)/s},clickHandler(e){this.type=e,this.onChange()},longPressStep(){this.clearTimeout(),this.longPressTimer=setTimeout((()=>{this.onChange(),this.longPressStep()}),250)},onTouchStart(e){this.longPress&&(this.clearTimeout(),this.type=e,this.longPressTimer=setTimeout((()=>{this.onChange(),this.longPressStep()}),600))},onTouchEnd(){this.longPress&&this.clearTimeout()},clearTimeout(){clearTimeout(this.longPressTimer),this.longPressTimer=null}}},[["render",function(e,t,s,n,i,x){const S=g,T=o(u("u-icon"),y),B=f;return l(),a(S,{class:"u-number-box"},{default:r((()=>[e.showMinus&&e.$slots.minus?(l(),a(S,{key:0,class:"u-number-box__slot cursor-pointer",onClick:t[0]||(t[0]=h((e=>x.clickHandler("minus")),["stop"])),onTouchstart:t[1]||(t[1]=e=>x.onTouchStart("minus")),onTouchend:h(x.clearTimeout,["stop"])},{default:r((()=>[c(e.$slots,"minus",{},void 0,!0)])),_:3},8,["onTouchend"])):e.showMinus?(l(),a(S,{key:1,class:m(["u-number-box__minus cursor-pointer",{"u-number-box__minus--disabled":x.isDisabled("minus")}]),onClick:t[2]||(t[2]=h((e=>x.clickHandler("minus")),["stop"])),onTouchstart:t[3]||(t[3]=e=>x.onTouchStart("minus")),onTouchend:h(x.clearTimeout,["stop"]),"hover-class":"u-number-box__minus--hover","hover-stay-time":"150",style:d([x.buttonStyle("minus")])},{default:r((()=>[b(T,{name:"minus",color:x.isDisabled("minus")?"#c8c9cc":"#323233",size:"15",bold:"",customStyle:e.iconStyle},null,8,["color","customStyle"])])),_:1},8,["onTouchend","class","style"])):p("v-if",!0),c(e.$slots,"input",{},(()=>[b(B,{disabled:e.disabledInput||e.disabled,"cursor-spacing":x.getCursorSpacing,class:m([{"u-number-box__input--disabled":e.disabled||e.disabledInput},"u-number-box__input"]),modelValue:i.currentValue,"onUpdate:modelValue":t[4]||(t[4]=e=>i.currentValue=e),onBlur:x.onBlur,onFocus:x.onFocus,onInput:x.onInput,type:"number",style:d([x.inputStyle])},null,8,["disabled","cursor-spacing","class","modelValue","onBlur","onFocus","onInput","style"])]),!0),e.showPlus&&e.$slots.plus?(l(),a(S,{key:2,class:"u-number-box__slot cursor-pointer",onClick:t[5]||(t[5]=h((e=>x.clickHandler("plus")),["stop"])),onTouchstart:t[6]||(t[6]=e=>x.onTouchStart("plus")),onTouchend:h(x.clearTimeout,["stop"])},{default:r((()=>[c(e.$slots,"plus",{},void 0,!0)])),_:3},8,["onTouchend"])):e.showPlus?(l(),a(S,{key:3,class:m(["u-number-box__plus cursor-pointer",{"u-number-box__minus--disabled":x.isDisabled("plus")}]),onClick:t[7]||(t[7]=h((e=>x.clickHandler("plus")),["stop"])),onTouchstart:t[8]||(t[8]=e=>x.onTouchStart("plus")),onTouchend:h(x.clearTimeout,["stop"]),"hover-class":"u-number-box__plus--hover","hover-stay-time":"150",style:d([x.buttonStyle("plus")])},{default:r((()=>[b(T,{name:"plus",color:x.isDisabled("plus")?"#c8c9cc":"#323233",size:"15",bold:"",customStyle:e.iconStyle},null,8,["color","customStyle"])])),_:1},8,["onTouchend","class","style"])):p("v-if",!0)])),_:3})}],["__scopeId","data-v-254f2e11"]]);export{S as _};
