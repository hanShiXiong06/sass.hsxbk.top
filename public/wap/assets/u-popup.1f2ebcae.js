import{_ as o}from"./u-transition.65be38eb.js";import{am as t,an as e,ao as s,aY as a,aW as l,g as i,h as r,o as n,c as u,w as p,aR as d,aX as c,by as m,n as y,i as f,f as h,b,A as v,Q as g}from"./index-9317da28.js";import{_}from"./_plugin-vue_export-helper.1b428a4d.js";import{_ as k}from"./u-icon.5e775659.js";import{_ as S}from"./u-safe-bottom.3546c5bb.js";const C=_({name:"u-overlay",mixins:[e,s,{props:{show:{type:Boolean,default:()=>t.overlay.show},zIndex:{type:[String,Number],default:()=>t.overlay.zIndex},duration:{type:[String,Number],default:()=>t.overlay.duration},opacity:{type:[String,Number],default:()=>t.overlay.opacity}}}],computed:{overlayStyle(){const o={position:"fixed",top:0,left:0,right:0,zIndex:this.zIndex,bottom:0,"background-color":`rgba(0, 0, 0, ${this.opacity})`};return a(o,l(this.customStyle))}},emits:["click"],methods:{clickHandler(){this.$emit("click")}}},[["render",function(t,e,s,a,l,c){const m=i(r("u-transition"),o);return n(),u(m,{show:t.show,"custom-class":"u-overlay",duration:t.duration,"custom-style":c.overlayStyle,onClick:c.clickHandler},{default:p((()=>[d(t.$slots,"default",{},void 0,!0)])),_:3},8,["show","duration","custom-style","onClick"])}],["__scopeId","data-v-b2ae91aa"]]);const I=_({name:"u-status-bar",mixins:[e,s,{props:{bgColor:{type:String,default:()=>t.statusBar.bgColor}}}],data:()=>({}),computed:{style(){const o={};return o.height=c(m().statusBarHeight,"px"),o.backgroundColor=this.bgColor,a(o,l(this.customStyle))}}},[["render",function(o,t,e,s,a,l){const i=f;return n(),u(i,{style:y([l.style]),class:"u-status-bar"},{default:p((()=>[d(o.$slots,"default",{},void 0,!0)])),_:3},8,["style"])}],["__scopeId","data-v-58963a5e"]]);const x=_({name:"u-popup",mixins:[e,s,{props:{show:{type:Boolean,default:()=>t.popup.show},overlay:{type:Boolean,default:()=>t.popup.overlay},mode:{type:String,default:()=>t.popup.mode},duration:{type:[String,Number],default:()=>t.popup.duration},closeable:{type:Boolean,default:()=>t.popup.closeable},overlayStyle:{type:[Object,String],default:()=>t.popup.overlayStyle},closeOnClickOverlay:{type:Boolean,default:()=>t.popup.closeOnClickOverlay},zIndex:{type:[String,Number],default:()=>t.popup.zIndex},safeAreaInsetBottom:{type:Boolean,default:()=>t.popup.safeAreaInsetBottom},safeAreaInsetTop:{type:Boolean,default:()=>t.popup.safeAreaInsetTop},closeIconPos:{type:String,default:()=>t.popup.closeIconPos},round:{type:[Boolean,String,Number],default:()=>t.popup.round},zoom:{type:Boolean,default:()=>t.popup.zoom},bgColor:{type:String,default:()=>t.popup.bgColor},overlayOpacity:{type:[Number,String],default:()=>t.popup.overlayOpacity}}}],data(){return{overlayDuration:this.duration+50}},watch:{show(o,t){}},computed:{transitionStyle(){const o={zIndex:this.zIndex,position:"fixed",display:"flex"};return o[this.mode]=0,"left"===this.mode||"right"===this.mode?a(o,{bottom:0,top:0}):"top"===this.mode||"bottom"===this.mode?a(o,{left:0,right:0}):"center"===this.mode?a(o,{alignItems:"center","justify-content":"center",top:0,left:0,right:0,bottom:0}):void 0},contentStyle(){const o={};if(m(),"center"!==this.mode&&(o.flex=1),this.bgColor&&(o.backgroundColor=this.bgColor),this.round){const t=c(this.round);"top"===this.mode?(o.borderBottomLeftRadius=t,o.borderBottomRightRadius=t):"bottom"===this.mode?(o.borderTopLeftRadius=t,o.borderTopRightRadius=t):"center"===this.mode&&(o.borderRadius=t)}return a(o,l(this.customStyle))},position(){return"center"===this.mode?this.zoom?"fade-zoom":"fade":"left"===this.mode?"slide-left":"right"===this.mode?"slide-right":"bottom"===this.mode?"slide-up":"top"===this.mode?"slide-down":void 0}},emits:["open","close","click"],methods:{overlayClick(){this.closeOnClickOverlay&&this.$emit("close")},close(o){this.$emit("close")},afterEnter(){this.$emit("open")},clickHandler(){"center"===this.mode&&this.overlayClick(),this.$emit("click")}}},[["render",function(t,e,s,a,l,c){const m=i(r("u-overlay"),C),_=i(r("u-status-bar"),I),x=i(r("u-icon"),k),w=f,z=i(r("u-safe-bottom"),S),B=i(r("u-transition"),o);return n(),u(w,{class:"u-popup"},{default:p((()=>[t.overlay?(n(),u(m,{key:0,show:t.show,onClick:c.overlayClick,zIndex:t.zIndex,duration:l.overlayDuration,customStyle:t.overlayStyle,opacity:t.overlayOpacity},null,8,["show","onClick","zIndex","duration","customStyle","opacity"])):h("v-if",!0),b(B,{show:t.show,customStyle:c.transitionStyle,mode:c.position,duration:t.duration,onAfterEnter:c.afterEnter,onClick:c.clickHandler},{default:p((()=>[b(w,{class:"u-popup__content",style:y([c.contentStyle]),onClick:v(t.noop,["stop"])},{default:p((()=>[t.safeAreaInsetTop?(n(),u(_,{key:0})):h("v-if",!0),d(t.$slots,"default",{},void 0,!0),t.closeable?(n(),u(w,{key:1,onClick:v(c.close,["stop"]),class:g(["u-popup__content__close",["u-popup__content__close--"+t.closeIconPos]]),"hover-class":"u-popup__content__close--hover","hover-stay-time":"150"},{default:p((()=>[b(x,{name:"close",color:"#909399",size:"18",bold:""})])),_:1},8,["onClick","class"])):h("v-if",!0),t.safeAreaInsetBottom?(n(),u(z,{key:2})):h("v-if",!0)])),_:3},8,["style","onClick"])])),_:3},8,["show","customStyle","mode","duration","onAfterEnter","onClick"])])),_:3})}],["__scopeId","data-v-934b81cb"]]);export{x as _,C as a};
