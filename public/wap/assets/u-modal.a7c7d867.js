import{P as o,Q as t,R as e,aX as a,g as l,h as n,o as s,c as r,w as i,b as c,n as u,x as d,y as m,f as p,aW as _,E as f,G as y,H as h,C as w,i as g}from"./index-905183d4.js";import{_ as C}from"./u-line.9e44f7cf.js";import{_ as v}from"./u-loading-icon.c376267d.js";import{_ as B}from"./u-popup.e3f6594b.js";import{_ as k}from"./_plugin-vue_export-helper.1b428a4d.js";const b=k({name:"u-modal",mixins:[t,e,{props:{show:{type:Boolean,default:()=>o.modal.show},title:{type:[String],default:()=>o.modal.title},content:{type:String,default:()=>o.modal.content},confirmText:{type:String,default:()=>o.modal.confirmText},cancelText:{type:String,default:()=>o.modal.cancelText},showConfirmButton:{type:Boolean,default:()=>o.modal.showConfirmButton},showCancelButton:{type:Boolean,default:()=>o.modal.showCancelButton},confirmColor:{type:String,default:()=>o.modal.confirmColor},cancelColor:{type:String,default:()=>o.modal.cancelColor},buttonReverse:{type:Boolean,default:()=>o.modal.buttonReverse},zoom:{type:Boolean,default:()=>o.modal.zoom},asyncClose:{type:Boolean,default:()=>o.modal.asyncClose},closeOnClickOverlay:{type:Boolean,default:()=>o.modal.closeOnClickOverlay},negativeTop:{type:[String,Number],default:()=>o.modal.negativeTop},width:{type:[String,Number],default:()=>o.modal.width},confirmButtonShape:{type:String,default:()=>o.modal.confirmButtonShape}}}],data:()=>({loading:!1}),watch:{show(o){o&&this.loading&&(this.loading=!1)}},emits:["confirm","cancel","close"],methods:{addUnit:a,confirmHandler(){this.asyncClose&&(this.loading=!0),this.$emit("confirm")},cancelHandler(){this.$emit("cancel")},clickHandler(){this.closeOnClickOverlay&&this.$emit("close")}}},[["render",function(o,t,e,a,k,b){const x=w,S=g,O=l(n("u-line"),C),T=l(n("u-loading-icon"),v),H=l(n("u-popup"),B);return s(),r(H,{mode:"center",zoom:o.zoom,show:o.show,customStyle:{borderRadius:"6px",overflow:"hidden",marginTop:`-${b.addUnit(o.negativeTop)}`},closeOnClickOverlay:o.closeOnClickOverlay,safeAreaInsetBottom:!1,duration:400,onClick:b.clickHandler},{default:i((()=>[c(S,{class:"u-modal",style:u({width:b.addUnit(o.width)})},{default:i((()=>[o.title?(s(),r(x,{key:0,class:"u-modal__title"},{default:i((()=>[d(m(o.title),1)])),_:1})):p("v-if",!0),c(S,{class:"u-modal__content",style:u({paddingTop:(o.title?12:25)+"px"})},{default:i((()=>[_(o.$slots,"default",{},(()=>[c(x,{class:"u-modal__content__text"},{default:i((()=>[d(m(o.content),1)])),_:1})]),!0)])),_:3},8,["style"]),o.$slots.confirmButton?(s(),r(S,{key:1,class:"u-modal__button-group--confirm-button"},{default:i((()=>[_(o.$slots,"confirmButton",{},void 0,!0)])),_:3})):(s(),f(y,{key:2},[c(O),c(S,{class:"u-modal__button-group",style:u({flexDirection:o.buttonReverse?"row-reverse":"row"})},{default:i((()=>[o.showCancelButton?(s(),r(S,{key:0,class:h(["u-modal__button-group__wrapper u-modal__button-group__wrapper--cancel",[o.showCancelButton&&!o.showConfirmButton&&"u-modal__button-group__wrapper--only-cancel"]]),"hover-stay-time":150,"hover-class":"u-modal__button-group__wrapper--hover",onClick:b.cancelHandler},{default:i((()=>[c(x,{class:"u-modal__button-group__wrapper__text",style:u({color:o.cancelColor})},{default:i((()=>[d(m(o.cancelText),1)])),_:1},8,["style"])])),_:1},8,["class","onClick"])):p("v-if",!0),o.showConfirmButton&&o.showCancelButton?(s(),r(O,{key:1,direction:"column"})):p("v-if",!0),o.showConfirmButton?(s(),r(S,{key:2,class:h(["u-modal__button-group__wrapper u-modal__button-group__wrapper--confirm",[!o.showCancelButton&&o.showConfirmButton&&"u-modal__button-group__wrapper--only-confirm"]]),"hover-stay-time":150,"hover-class":"u-modal__button-group__wrapper--hover",onClick:b.confirmHandler},{default:i((()=>[k.loading?(s(),r(T,{key:0})):(s(),r(x,{key:1,class:"u-modal__button-group__wrapper__text",style:u({color:o.confirmColor})},{default:i((()=>[d(m(o.confirmText),1)])),_:1},8,["style"]))])),_:1},8,["class","onClick"])):p("v-if",!0)])),_:1},8,["style"])],64))])),_:3},8,["style"])])),_:3},8,["zoom","show","customStyle","closeOnClickOverlay","onClick"])}],["__scopeId","data-v-af068078"]]);export{b as _};
