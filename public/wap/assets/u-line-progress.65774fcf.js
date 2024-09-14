import{am as e,an as s,ao as t,aX as r,as as i,aW as a,bj as n,o,c as l,w as g,b as h,n as d,aR as u,y as c,z as p,f as _,i as y,D as f}from"./index-9317da28.js";import{_ as m}from"./_plugin-vue_export-helper.1b428a4d.js";const P=m({name:"u-line-progress",mixins:[s,t,{props:{activeColor:{type:String,default:()=>e.lineProgress.activeColor},inactiveColor:{type:String,default:()=>e.lineProgress.color},percentage:{type:[String,Number],default:()=>e.lineProgress.inactiveColor},showText:{type:Boolean,default:()=>e.lineProgress.showText},height:{type:[String,Number],default:()=>e.lineProgress.height}}}],data:()=>({lineWidth:0}),watch:{percentage(e){this.resizeProgressWidth()}},computed:{progressStyle(){let e={};return e.width=this.lineWidth,e.backgroundColor=this.activeColor,e.height=r(this.height),e},innserPercentage(){return i(0,100,this.percentage)}},mounted(){this.init()},methods:{addStyle:a,addUnit:r,init(){n(20).then((()=>{this.resizeProgressWidth()}))},getProgressWidth(){return this.$uGetRect(".u-line-progress__background")},resizeProgressWidth(){this.getProgressWidth().then((e=>{const{width:s}=e;this.lineWidth=s*this.innserPercentage/100+"px"}))}}},[["render",function(e,s,t,r,i,a){const n=y,m=f;return o(),l(n,{class:"u-line-progress",style:d([a.addStyle(e.customStyle)])},{default:g((()=>[h(n,{class:"u-line-progress__background",ref:"u-line-progress__background",style:d([{backgroundColor:e.inactiveColor,height:a.addUnit(e.height)}])},null,8,["style"]),h(n,{class:"u-line-progress__line",style:d([a.progressStyle])},{default:g((()=>[u(e.$slots,"default",{},(()=>[e.showText&&e.percentage>=10?(o(),l(m,{key:0,class:"u-line-progress__text"},{default:g((()=>[c(p(a.innserPercentage+"%"),1)])),_:1})):_("v-if",!0)]),!0)])),_:3},8,["style"])])),_:3},8,["style"])}],["__scopeId","data-v-4e8ebb54"]]);export{P as _};