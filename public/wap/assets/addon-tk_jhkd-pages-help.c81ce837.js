import{am as e,an as t,ao as a,bX as n,ar as i,aq as l,ag as s,cf as o,bi as r,g as c,h as d,o as u,c as p,w as m,b as h,aR as f,y as _,z as b,f as v,D as g,i as y,d as k,r as I,O as x,P as j,a6 as D,u as w,a7 as $,a8 as C}from"./index-2882a2d8.js";import{_ as B}from"./u-icon.1104ad2f.js";import{_ as S}from"./u-cell.b0c66245.js";import{_ as P}from"./u-line.d7ff94e2.js";import{_ as R}from"./_plugin-vue_export-helper.1b428a4d.js";import{_ as z}from"./tabbar.f422f3d5.js";import{h as A}from"./tkjhkd.474b5148.js";import{M as L}from"./mescroll-body.e69cb222.js";import{M}from"./mescroll-empty.7f392528.js";import{u as q}from"./useMescroll.26ccf5de.js";/* empty css                                                               */import"./u-badge.e8ba7dff.js";import"./u-tabbar.b113c065.js";import"./u-safe-bottom.f13b01b8.js";import"./mescroll-i18n.c2747603.js";/* empty css                                                                       */const N=R({name:"u-collapse-item",mixins:[t,a,{props:{title:{type:String,default:()=>e.collapseItem.title},value:{type:String,default:()=>e.collapseItem.value},label:{type:String,default:()=>e.collapseItem.label},disabled:{type:Boolean,default:()=>e.collapseItem.disabled},isLink:{type:Boolean,default:()=>e.collapseItem.isLink},clickable:{type:Boolean,default:()=>e.collapseItem.clickable},border:{type:Boolean,default:()=>e.collapseItem.border},align:{type:String,default:()=>e.collapseItem.align},name:{type:[String,Number],default:()=>e.collapseItem.name},icon:{type:String,default:()=>e.collapseItem.icon},duration:{type:Number,default:()=>e.collapseItem.duration}}}],data:()=>({elId:n(),animationData:{},expanded:!1,showBorder:!1,animating:!1,parentData:{accordion:!1,border:!1}}),watch:{expanded(e){clearTimeout(this.timer),this.timer=null,this.timer=setTimeout((()=>{this.showBorder=e}),e?10:290)}},mounted(){this.init()},methods:{async init(){if(this.updateParentData(),!this.parent)return i();const{value:e,accordion:t,children:a=[]}=this.parent;if(t){if(l.array(e))return i();this.expanded=this.name==e}else{if(!l.array(e)&&null!==e)return i();this.expanded=(e||[]).some((e=>e==this.name))}await s(),this.setContentAnimate()},updateParentData(){this.getParentData("u-collapse")},async setContentAnimate(){const e=await this.queryRect(),t=this.expanded?e.height:0;this.animating=!0;const a=o({timingFunction:"ease-in-out"});a.height(t).step({duration:this.duration}).step(),this.animationData=a.export(),r(this.duration).then((()=>{this.animating=!1}))},clickHandler(){this.disabled&&this.animating||this.parent&&this.parent.onChange(this)},queryRect(){return new Promise((e=>{this.$uGetRect(`#${this.elId}`).then((t=>{e(t)}))}))}}},[["render",function(e,t,a,n,i,l){const s=g,o=c(d("u-icon"),B),r=c(d("u-cell"),S),k=y,I=c(d("u-line"),P);return u(),p(k,{class:"u-collapse-item"},{default:m((()=>[h(r,{title:e.$slots.title?"":e.title,value:e.value,label:e.label,icon:e.icon,isLink:e.isLink,clickable:e.clickable,border:i.parentData.border&&i.showBorder,onClick:l.clickHandler,arrowDirection:i.expanded?"up":"down",disabled:e.disabled},{title:m((()=>[f(e.$slots,"title",{},(()=>[!e.$slots.title&&e.title?(u(),p(s,{key:0},{default:m((()=>[_(b(e.title),1)])),_:1})):v("v-if",!0)]),!0)])),icon:m((()=>[f(e.$slots,"icon",{},(()=>[!e.$slots.icon&&e.icon?(u(),p(o,{key:0,size:22,name:e.icon},null,8,["name"])):v("v-if",!0)]),!0)])),value:m((()=>[f(e.$slots,"value",{},(()=>[!e.$slots.value&&e.value?(u(),p(s,{key:0},{default:m((()=>[_(b(e.value),1)])),_:1})):v("v-if",!0)]),!0)])),"right-icon":m((()=>[e.$slots["right-icon"]?v("v-if",!0):(u(),p(o,{key:0,size:16,name:"arrow-right"})),f(e.$slots,"right-icon",{},void 0,!0)])),_:3},8,["title","value","label","icon","isLink","clickable","border","onClick","arrowDirection","disabled"]),h(k,{class:"u-collapse-item__content",animation:i.animationData,ref:"animation"},{default:m((()=>[h(k,{class:"u-collapse-item__content__text content-class",id:i.elId,ref:i.elId},{default:m((()=>[f(e.$slots,"default",{},void 0,!0)])),_:3},8,["id"])])),_:3},8,["animation"]),i.parentData.border?(u(),p(I,{key:0})):v("v-if",!0)])),_:3})}],["__scopeId","data-v-b0e459d6"]]);const O=R({name:"u-collapse",mixins:[t,a,{props:{value:{type:[String,Number,Array,null],default:()=>e.collapse.value},accordion:{type:Boolean,default:()=>e.collapse.accordion},border:{type:Boolean,default:()=>e.collapse.border}}}],watch:{needInit(){this.init()},parentData(){this.children.length&&this.children.map((e=>{"function"==typeof e.updateParentData&&e.updateParentData()}))}},created(){this.children=[]},computed:{needInit(){return[this.accordion,this.value]}},emits:["open","close","change"],methods:{init(){this.children.map((e=>{e.init()}))},onChange(e){let t=[];this.children.map(((a,n)=>{this.accordion?(a.expanded=a===e&&!e.expanded,a.setContentAnimate()):a===e&&(a.expanded=!a.expanded,a.setContentAnimate()),t.push({name:a.name||n,status:a.expanded?"open":"close"})})),this.$emit("change",t),this.$emit(e.expanded?"open":"close",e.name)}}},[["render",function(e,t,a,n,i,l){const s=c(d("u-line"),P),o=y;return u(),p(o,{class:"u-collapse"},{default:m((()=>[e.border?(u(),p(s,{key:0})):v("v-if",!0),f(e.$slots,"default",{},void 0,!0)])),_:3})}],["__scopeId","data-v-0f894625"]]),T=R(k({__name:"help",setup(e){const{mescrollInit:t,downCallback:a,getMescroll:n}=q(C,$),i=I();let l=I(!1);const s=e=>{let t=I({});l.value=!1,t.value.page=e.num,t.value.page_size=e.size,A(t.value).then((t=>{let a=t.data.data;e.endSuccess(a.length),1==e.num&&(i.value=[]),i.value=i.value.concat(a),l.value=!0})).catch((t=>{console.log("erro",t),l.value=!0,e.endErr()}))};return(e,n)=>{const l=g,o=c(d("u-collapse-item"),N),r=c(d("u-collapse"),O),f=c(d("tabbar"),z);return u(),x(j,null,[h(L,{ref:"mescrollRef",onInit:w(t),onDown:w(a),onUp:s},{default:m((()=>[h(r,{onChange:e.change,onClose:e.close,onOpen:e.open},{default:m((()=>[(u(!0),x(j,null,D(i.value,((e,t)=>(u(),p(o,{title:e.title},{default:m((()=>[h(l,{class:"u-collapse-content"},{default:m((()=>[_(b(e.content),1)])),_:2},1024)])),_:2},1032,["title"])))),256))])),_:1},8,["onChange","onClose","onOpen"]),i.value?v("v-if",!0):(u(),p(M,{key:0,option:{tip:"没有地址数据"}}))])),_:1},8,["onInit","onDown"]),h(f,{addon:"tk_jhkd"})],64)}}}),[["__scopeId","data-v-c9f41fb4"]]);export{T as default};
