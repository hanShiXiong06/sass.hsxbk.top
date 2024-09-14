import{am as e,ao as t,aW as o,g as a,h as s,o as i,c as n,w as c,b as l,y as r,z as d,A as u,f as p,n as h,aR as m,O as _,P as f,a6 as g,D as y,i as S}from"./index-2882a2d8.js";import{_ as k}from"./u-icon.1104ad2f.js";import{_ as v}from"./u-line.d7ff94e2.js";import{_ as C}from"./u-loading-icon.a37f7e61.js";import{a as b}from"./u-gap.13fde593.js";import{_ as w}from"./u-popup.2abbe959.js";import{_ as T}from"./_plugin-vue_export-helper.1b428a4d.js";const $={props:{lang:String,sessionFrom:String,sendMessageTitle:String,sendMessagePath:String,sendMessageImg:String,showMessageCard:Boolean,appParameter:String,formType:String,openType:String}};const x=T({name:"u-action-sheet",mixins:[{props:{openType:String},methods:{onGetUserInfo(e){this.$emit("getuserinfo",e.detail)},onContact(e){this.$emit("contact",e.detail)},onGetPhoneNumber(e){this.$emit("getphonenumber",e.detail)},onError(e){this.$emit("error",e.detail)},onLaunchApp(e){this.$emit("launchapp",e.detail)},onOpenSetting(e){this.$emit("opensetting",e.detail)}}},$,t,{props:{show:{type:Boolean,default:()=>e.actionSheet.show},title:{type:String,default:()=>e.actionSheet.title},description:{type:String,default:()=>e.actionSheet.description},actions:{type:Array,default:()=>e.actionSheet.actions},cancelText:{type:String,default:()=>e.actionSheet.cancelText},closeOnClickAction:{type:Boolean,default:()=>e.actionSheet.closeOnClickAction},safeAreaInsetBottom:{type:Boolean,default:()=>e.actionSheet.safeAreaInsetBottom},openType:{type:String,default:()=>e.actionSheet.openType},closeOnClickOverlay:{type:Boolean,default:()=>e.actionSheet.closeOnClickOverlay},round:{type:[Boolean,String,Number],default:()=>e.actionSheet.round}}}],data:()=>({}),computed:{itemStyle(){return e=>{let t={};return this.actions[e].color&&(t.color=this.actions[e].color),this.actions[e].fontSize&&(t.fontSize=o(this.actions[e].fontSize)),this.actions[e].disabled&&(t.color="#c0c4cc"),t}}},emits:["close","select"],methods:{closeHandler(){this.closeOnClickOverlay&&this.$emit("close")},cancel(){this.$emit("close")},selectHandler(e){const t=this.actions[e];!t||t.disabled||t.loading||(this.$emit("select",t),this.closeOnClickAction&&this.$emit("close"))}}},[["render",function(e,t,o,T,$,x){const A=y,B=a(s("u-icon"),k),O=S,I=a(s("u-line"),v),j=a(s("u-loading-icon"),C),z=a(s("u-gap"),b),H=a(s("u-popup"),w);return i(),n(H,{show:e.show,mode:"bottom",onClose:x.closeHandler,safeAreaInsetBottom:e.safeAreaInsetBottom,round:e.round},{default:c((()=>[l(O,{class:"u-action-sheet"},{default:c((()=>[e.title?(i(),n(O,{key:0,class:"u-action-sheet__header"},{default:c((()=>[l(A,{class:"u-action-sheet__header__title u-line-1"},{default:c((()=>[r(d(e.title),1)])),_:1}),l(O,{class:"u-action-sheet__header__icon-wrap",onClick:u(x.cancel,["stop"])},{default:c((()=>[l(B,{name:"close",size:"17",color:"#c8c9cc",bold:""})])),_:1},8,["onClick"])])),_:1})):p("v-if",!0),e.description?(i(),n(A,{key:1,class:"u-action-sheet__description",style:h([{marginTop:`${e.title&&e.description?0:"18px"}`}])},{default:c((()=>[r(d(e.description),1)])),_:1},8,["style"])):p("v-if",!0),m(e.$slots,"default",{},(()=>[e.description?(i(),n(I,{key:0})):p("v-if",!0),l(O,{class:"u-action-sheet__item-wrap"},{default:c((()=>[(i(!0),_(f,null,g(e.actions,((t,o)=>(i(),n(O,{key:o},{default:c((()=>[l(O,{class:"u-action-sheet__item-wrap__item",onClick:u((e=>x.selectHandler(o)),["stop"]),"hover-class":t.disabled||t.loading?"":"u-action-sheet--hover","hover-stay-time":150},{default:c((()=>[t.loading?(i(),n(j,{key:1,"custom-class":"van-action-sheet__loading",size:"18",mode:"circle"})):(i(),_(f,{key:0},[l(A,{class:"u-action-sheet__item-wrap__item__name",style:h([x.itemStyle(o)])},{default:c((()=>[r(d(t.name),1)])),_:2},1032,["style"]),t.subname?(i(),n(A,{key:0,class:"u-action-sheet__item-wrap__item__subname"},{default:c((()=>[r(d(t.subname),1)])),_:2},1024)):p("v-if",!0)],64))])),_:2},1032,["onClick","hover-class"]),o!==e.actions.length-1?(i(),n(I,{key:0})):p("v-if",!0)])),_:2},1024)))),128))])),_:1})]),!0),e.cancelText?(i(),n(z,{key:2,bgColor:"#eaeaec",height:"6"})):p("v-if",!0),l(O,{class:"u-action-sheet__item-wrap__item u-action-sheet__cancel","hover-class":"u-action-sheet--hover"},{default:c((()=>[e.cancelText?(i(),n(A,{key:0,onTouchmove:t[0]||(t[0]=u((()=>{}),["stop","prevent"])),"hover-stay-time":150,class:"u-action-sheet__cancel-text",onClick:x.cancel},{default:c((()=>[r(d(e.cancelText),1)])),_:1},8,["onClick"])):p("v-if",!0)])),_:1})])),_:3})])),_:3},8,["show","onClose","safeAreaInsetBottom","round"])}],["__scopeId","data-v-ad7e8d01"]]);export{x as _};