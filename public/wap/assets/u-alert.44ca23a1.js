import{_ as e}from"./u-icon.1104ad2f.js";import{am as t,an as l,ao as a,aW as s,bh as r,g as o,h as c,o as i,c as n,w as f,b as d,Q as u,A as _,n as p,f as y,y as m,z as h,i as k,D as g}from"./index-2882a2d8.js";import{_ as S}from"./u-transition.4448d2e5.js";import{_ as w}from"./_plugin-vue_export-helper.1b428a4d.js";const x=w({name:"u-alert",mixins:[l,a,{props:{title:{type:String,default:()=>t.alert.title},type:{type:String,default:()=>t.alert.type},description:{type:String,default:()=>t.alert.description},closable:{type:Boolean,default:()=>t.alert.closable},showIcon:{type:Boolean,default:()=>t.alert.showIcon},effect:{type:String,default:()=>t.alert.effect},center:{type:Boolean,default:()=>t.alert.center},fontSize:{type:[String,Number],default:()=>t.alert.fontSize}}}],data:()=>({show:!0}),computed:{iconColor(){return"light"===this.effect?this.type:"#fff"},iconName(){switch(this.type){case"success":return"checkmark-circle-fill";case"error":return"close-circle-fill";case"warning":default:return"error-circle-fill";case"info":return"info-circle-fill";case"primary":return"more-circle-fill"}}},emits:["click"],methods:{addUnit:s,addStyle:r,clickHandler(){this.$emit("click")},closeHandler(){this.show=!1}}},[["render",function(t,l,a,s,r,w){const x=o(c("u-icon"),e),z=k,b=g,C=o(c("u-transition"),S);return i(),n(C,{mode:"fade",show:r.show},{default:f((()=>[d(z,{class:u(["u-alert",[`u-alert--${t.type}--${t.effect}`]]),onClick:_(w.clickHandler,["stop"]),style:p([w.addStyle(t.customStyle)])},{default:f((()=>[t.showIcon?(i(),n(z,{key:0,class:"u-alert__icon"},{default:f((()=>[d(x,{name:w.iconName,size:"18",color:w.iconColor},null,8,["name","color"])])),_:1})):y("v-if",!0),d(z,{class:"u-alert__content",style:p([{paddingRight:t.closable?"20px":0}])},{default:f((()=>[t.title?(i(),n(b,{key:0,class:u(["u-alert__content__title",["dark"===t.effect?"u-alert__text--dark":`u-alert__text--${t.type}--light`]]),style:p([{fontSize:w.addUnit(t.fontSize),textAlign:t.center?"center":"left"}])},{default:f((()=>[m(h(t.title),1)])),_:1},8,["style","class"])):y("v-if",!0),t.description?(i(),n(b,{key:1,class:u(["u-alert__content__desc",["dark"===t.effect?"u-alert__text--dark":`u-alert__text--${t.type}--light`]]),style:p([{fontSize:w.addUnit(t.fontSize),textAlign:t.center?"center":"left"}])},{default:f((()=>[m(h(t.description),1)])),_:1},8,["style","class"])):y("v-if",!0)])),_:1},8,["style"]),t.closable?(i(),n(z,{key:1,class:"u-alert__close",onClick:_(w.closeHandler,["stop"])},{default:f((()=>[d(x,{name:"close",color:w.iconColor,size:"15"},null,8,["color"])])),_:1},8,["onClick"])):y("v-if",!0)])),_:1},8,["class","onClick","style"])])),_:1},8,["show"])}],["__scopeId","data-v-0e484b05"]]);export{x as _};