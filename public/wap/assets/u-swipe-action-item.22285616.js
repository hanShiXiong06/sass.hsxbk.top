import{_ as t}from"./u-icon.0c1c54c7.js";import{an as e,ao as s,ap as a,aX as o,bx as i,bg as n,g as r,h as u,o as l,c as h,w as c,b as d,aS as f,P as p,Q as m,a7 as g,n as y,f as b,y as _,z as w,D as x,i as S}from"./index-7bf68536.js";import{_ as v}from"./_plugin-vue_export-helper.1b428a4d.js";const X={props:{show:{type:Boolean,default:()=>e.swipeActionItem.show},name:{type:[String,Number],default:()=>e.swipeActionItem.name},disabled:{type:Boolean,default:()=>e.swipeActionItem.disabled},autoClose:{type:Boolean,default:()=>e.swipeActionItem.autoClose},threshold:{type:Number,default:()=>e.swipeActionItem.threshold},options:{type:Array,default:()=>e.swipeActionItem.rightOptions},duration:{type:[String,Number],default:()=>e.swipeActionItem.duration}}};function z(t){return t.toString().indexOf("s")>=0?t:t>30?t+"ms":t+"s"}function C(t,e,s){e.getState(),s.selectAllComponents(".u-swipe-action-item__right__button"),e.requestAnimationFrame((function(){e.setStyle({transition:"none",transform:"translateX("+t+"px)","-webkit-transform":"translateX("+t+"px)"})}))}function T(t,e){var s=t.getState();e.selectAllComponents(".u-swipe-action-item__right__button");var a=z(s.duration),o=-s.buttonsWidth;t.requestAnimationFrame((function(){t.setStyle({transition:"transform "+a,transform:"translateX("+o+"px)","-webkit-transform":"translateX("+o+"px)"})})),k("open",t,e)}function k(t,e,s){e.getState().status=t,s.callMethod("setState",t)}function Y(t,e){var s=t.getState(),a=e.selectAllComponents(".u-swipe-action-item__right__button"),o=a.length,i=z(s.duration);t.requestAnimationFrame((function(){t.setStyle({transition:"transform "+i,transform:"translateX(0px)","-webkit-transform":"translateX(0px)"});for(var e=o-1;e>=0;e--)a[e].setStyle({transition:"transform "+i,transform:"translateX(0px)","-webkit-transform":"translateX(0px)"})})),k("close",t,e)}const A={touchstart:function(t,e){var s=t.instance.getState();if(!s.disabled){var a=t.touches;a&&a.length>1||(s.moving=!0,s.startX=a[0].pageX,s.startY=a[0].pageY,e.callMethod("closeOther"))}},touchmove:function(t,e){var s=t.instance,a=s.getState();if(!a.disabled&&a.moving){var o=t.touches,i=o[0].pageX,n=o[0].pageY,r=i-a.startX,u=n-a.startY,l=a.buttonsWidth;(Math.abs(r)>Math.abs(u)||Math.abs(r)>a.threshold)&&(t.preventDefault&&t.preventDefault(),t.stopPropagation&&t.stopPropagation()),Math.abs(r)<Math.abs(u)||("open"===a.status?(r<0&&(r=0),r>l&&(r=l),C(-l+r,s,e)):(r>0&&(r=0),Math.abs(r)>l&&(r=-l),C(r,s,e)))}},touchend:function(t,e){var s=t.instance,a=s.getState();if(a.moving&&!a.disabled){var o=t.changedTouches?t.changedTouches[0]:{},i=o.pageX;o.pageY;var n=i-a.startX;if("open"===a.status){if(n<0)return;if(0===n)return Y(s,e);Math.abs(n)<a.threshold?T(s,e):Y(s,e)}else{if(n>0)return;Math.abs(n)<a.threshold?Y(s,e):T(s,e)}}},sizeChange:function(t,e,s,a){var o=a.getState();if(o&&t){if(o.disabled=t.disabled,o.duration=t.duration,o.show=t.show,o.threshold=t.threshold,o.buttons=t.buttons,o.buttons)for(var i=o.buttons.length,n=0,r=t.buttons,u=0;u<i;u++)n+=r[u].width;o.buttonsWidth=n}},statusChange:function(t,e,s,a){var o=a.getState();o.disabled||("close"===t&&"open"===o.status?Y(a,s):"open"===t&&"close"===o.status&&T(a,s))}},M=t=>{t.$wxs||(t.$wxs=[]),t.$wxs.push("wxs"),t.mixins||(t.mixins=[]),t.mixins.push({beforeCreate(){this.wxs=A}})},I={name:"u-swipe-action-item",emits:["click"],mixins:[s,a,{methods:{getTouchPoint:t=>t?t.touches&&t.touches[0]?{x:t.touches[0].pageX,y:t.touches[0].pageY}:t.changedTouches&&t.changedTouches[0]?{x:t.changedTouches[0].pageX,y:t.changedTouches[0].pageY}:{x:t.clientX||0,y:t.clientY||0}:{x:0,y:0},resetTouchStatus(){this.direction="",this.deltaX=0,this.deltaY=0,this.offsetX=0,this.offsetY=0},touchStart(t){this.resetTouchStatus();const e=this.getTouchPoint(t);this.startX=e.x,this.startY=e.y},touchMove(t){const e=this.getTouchPoint(t);var s,a;this.deltaX=e.x-this.startX,this.deltaY=e.y-this.startY,this.offsetX=Math.abs(this.deltaX),this.offsetY=Math.abs(this.deltaY),this.direction=this.direction||(s=this.offsetX,a=this.offsetY,s>a&&s>10?"horizontal":a>s&&a>10?"vertical":"")}}},{methods:{closeHandler(){this.status="close"},setState(t){this.status=t},closeOther(){this.parent&&this.parent.closeOther(this)}}},X],data:()=>({size:{},parentData:{autoClose:!0},status:"close",sliderStyle:{}}),watch:{wxsInit(t,e){this.queryRect()}},computed:{wxsInit(){return[this.disabled,this.autoClose,this.threshold,this.options,this.duration]}},mounted(){this.init()},methods:{addUnit:o,getPx:i,init(){this.updateParentData(),n().then((()=>{this.queryRect()}))},updateParentData(){this.getParentData("u-swipe-action")},queryRect(){this.$uGetRect(".u-swipe-action-item__right__button",!0).then((t=>{this.size={buttons:t,show:this.show,disabled:this.disabled,threshold:this.threshold,duration:this.duration}}))},buttonClickHandler(t,e){this.$emit("click",{index:e,name:this.name})}}};M(I);const P=v(I,[["render",function(e,s,a,o,i,n){const v=r(u("u-icon"),t),X=x,z=S;return l(),h(z,{class:"u-swipe-action-item",ref:"u-swipe-action-item"},{default:c((()=>[d(z,{class:"u-swipe-action-item__right"},{default:c((()=>[f(e.$slots,"button",{},(()=>[(l(!0),p(m,null,g(e.options,((t,e)=>(l(),h(z,{key:e,class:"u-swipe-action-item__right__button",ref_for:!0,ref:`u-swipe-action-item__right__button-${e}`,style:y([{alignItems:t.style&&t.style.borderRadius?"center":"stretch"}]),onClick:s=>n.buttonClickHandler(t,e)},{default:c((()=>[d(z,{class:"u-swipe-action-item__right__button__wrapper",style:y([{backgroundColor:t.style&&t.style.backgroundColor?t.style.backgroundColor:"#C7C6CD",borderRadius:t.style&&t.style.borderRadius?t.style.borderRadius:"0",padding:t.style&&t.style.borderRadius?"0":"0 15px"},t.style])},{default:c((()=>[t.icon?(l(),h(v,{key:0,name:t.icon,color:t.style&&t.style.color?t.style.color:"#ffffff",size:t.iconSize?n.addUnit(t.iconSize):t.style&&t.style.fontSize?1.2*n.getPx(t.style.fontSize):17,customStyle:{marginRight:t.text?"2px":0}},null,8,["name","color","size","customStyle"])):b("v-if",!0),t.text?(l(),h(X,{key:1,class:"u-swipe-action-item__right__button__wrapper__text u-line-1",style:y([{color:t.style&&t.style.color?t.style.color:"#ffffff",fontSize:t.style&&t.style.fontSize?t.style.fontSize:"16px",lineHeight:t.style&&t.style.fontSize?t.style.fontSize:"16px"}])},{default:c((()=>[_(w(t.text),1)])),_:2},1032,["style"])):b("v-if",!0)])),_:2},1032,["style"])])),_:2},1032,["style","onClick"])))),128))]),!0)])),_:3}),d(z,{class:"u-swipe-action-item__content",onTouchstart:e.wxs.touchstart,onTouchmove:e.wxs.touchmove,onTouchend:e.wxs.touchend,status:i.status,"change:status":e.wxs.statusChange,size:i.size,"change:size":e.wxs.sizeChange},{default:c((()=>[f(e.$slots,"default",{},void 0,!0)])),_:3},8,["onTouchstart","onTouchmove","onTouchend","status","change:status","size","change:size"])])),_:3},512)}],["__scopeId","data-v-9e5550f1"]]);export{P as _};
