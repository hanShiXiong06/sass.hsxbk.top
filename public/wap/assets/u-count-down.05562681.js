import{an as t,ao as e,ap as i,o as s,c as a,w as n,aS as o,b as m,y as r,z as h,D as c,i as u}from"./index-7bf68536.js";import{_ as l}from"./_plugin-vue_export-helper.1b428a4d.js";const d={props:{time:{type:[String,Number],default:()=>t.countDown.time},format:{type:String,default:()=>t.countDown.format},autoStart:{type:Boolean,default:()=>t.countDown.autoStart},millisecond:{type:Boolean,default:()=>t.countDown.millisecond}}};function T(t,e=2){let i=`${t}`;for(;i.length<e;)i=`0${i}`;return i}const f=1e3,p=6e4,g=36e5,D=24*g;function w(t){return{days:Math.floor(t/D),hours:Math.floor(t%D/g),minutes:Math.floor(t%g/p),seconds:Math.floor(t%p/f),milliseconds:Math.floor(t%f)}}const x=l({name:"u-count-down",mixins:[e,i,d],data:()=>({timer:null,timeData:w(0),formattedTime:"0",runing:!1,endTime:0,remainTime:0}),watch:{time(t){this.reset()}},mounted(){this.init()},emits:["change","finish"],methods:{init(){this.reset()},start(){this.runing||(this.runing=!0,this.endTime=Date.now()+this.remainTime,this.toTick())},toTick(){this.millisecond?this.microTick():this.macroTick()},macroTick(){this.clearTimeout(),this.timer=setTimeout((()=>{const t=this.getRemainTime();var e,i;e=t,i=this.remainTime,(Math.floor(e/1e3)!==Math.floor(i/1e3)||0===t)&&this.setRemainTime(t),0!==this.remainTime&&this.macroTick()}),30)},microTick(){this.clearTimeout(),this.timer=setTimeout((()=>{this.setRemainTime(this.getRemainTime()),0!==this.remainTime&&this.microTick()}),50)},getRemainTime(){return Math.max(this.endTime-Date.now(),0)},setRemainTime(t){this.remainTime=t;const e=w(t);this.$emit("change",e),this.formattedTime=function(t,e){let{days:i,hours:s,minutes:a,seconds:n,milliseconds:o}=e;return-1===t.indexOf("DD")?s+=24*i:t=t.replace("DD",T(i)),-1===t.indexOf("HH")?a+=60*s:t=t.replace("HH",T(s)),-1===t.indexOf("mm")?n+=60*a:t=t.replace("mm",T(a)),-1===t.indexOf("ss")?o+=1e3*n:t=t.replace("ss",T(n)),t.replace("SSS",T(o,3))}(this.format,e),t<=0&&(this.pause(),this.$emit("finish"))},reset(){this.pause(),this.remainTime=this.time,this.setRemainTime(this.remainTime),this.autoStart&&this.start()},pause(){this.runing=!1,this.clearTimeout()},clearTimeout(){clearTimeout(this.timer),this.timer=null}},beforeUnmount(){this.clearTimeout()}},[["render",function(t,e,i,l,d,T){const f=c,p=u;return s(),a(p,{class:"u-count-down"},{default:n((()=>[o(t.$slots,"default",{},(()=>[m(f,{class:"u-count-down__text"},{default:n((()=>[r(h(d.formattedTime),1)])),_:1})]),!0)])),_:3})}],["__scopeId","data-v-1f3dc818"]]);export{x as _};