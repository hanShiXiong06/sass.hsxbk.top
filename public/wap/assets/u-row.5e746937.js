import{P as t,Q as i,R as s,aX as e,by as a,aY as n,aV as u,o as r,c as l,w as o,aW as f,H as c,n as h,i as d,bi as g}from"./index-905183d4.js";import{_ as y}from"./_plugin-vue_export-helper.1b428a4d.js";const p=y({name:"u-col",mixins:[i,s,{props:{span:{type:[String,Number],default:()=>t.col.span},offset:{type:[String,Number],default:()=>t.col.offset},justify:{type:String,default:()=>t.col.justify},align:{type:String,default:()=>t.col.align},textAlign:{type:String,default:()=>t.col.textAlign}}}],data:()=>({width:0,parentData:{gutter:0},gridNum:12}),options:{virtualHost:!0},computed:{uJustify(){return"end"==this.justify||"start"==this.justify?"flex-"+this.justify:"around"==this.justify||"between"==this.justify?"space-"+this.justify:this.justify},uAlignItem(){return"top"==this.align?"flex-start":"bottom"==this.align?"flex-end":this.align},colStyle(){const t={paddingLeft:e(a(this.parentData.gutter)/2),paddingRight:e(a(this.parentData.gutter)/2),alignItems:this.uAlignItem,justifyContent:this.uJustify,textAlign:this.textAlign,flex:`0 0 ${100/this.gridNum*this.span}%`,marginLeft:100/12*this.offset+"%"};return n(t,u(this.customStyle))}},mounted(){this.init()},emits:["click"],methods:{async init(){this.updateParentData(),this.width=await this.parent.getComponentWidth()},updateParentData(){this.getParentData("u-row")},clickHandler(t){this.$emit("click")}}},[["render",function(t,i,s,e,a,n){const u=d;return r(),l(u,{class:c(["u-col",["u-col-"+t.span]]),ref:"u-col",style:h([n.colStyle]),onClick:n.clickHandler},{default:o((()=>[f(t.$slots,"default",{},void 0,!0)])),_:3},8,["class","style","onClick"])}],["__scopeId","data-v-18068545"]]);const m=y({name:"u-row",mixins:[i,s,{props:{gutter:{type:[String,Number],default:()=>t.row.gutter},justify:{type:String,default:()=>t.row.justify},align:{type:String,default:()=>t.row.align}}}],data:()=>({}),computed:{uJustify(){return"end"==this.justify||"start"==this.justify?"flex-"+this.justify:"around"==this.justify||"between"==this.justify?"space-"+this.justify:this.justify},uAlignItem(){return"top"==this.align?"flex-start":"bottom"==this.align?"flex-end":this.align},rowStyle(){const t={alignItems:this.uAlignItem,justifyContent:this.uJustify};return this.gutter&&(t.marginLeft=e(-Number(this.gutter)/2),t.marginRight=e(-Number(this.gutter)/2)),n(t,u(this.customStyle))}},emits:["click"],methods:{clickHandler(t){this.$emit("click")},async getComponentWidth(){return await g(),new Promise((t=>{this.$uGetRect(".u-row").then((i=>{t(i.width)}))}))}}},[["render",function(t,i,s,e,a,n){const u=d;return r(),l(u,{class:"u-row",ref:"u-row",style:h([n.rowStyle]),onClick:n.clickHandler},{default:o((()=>[f(t.$slots,"default",{},void 0,!0)])),_:3},8,["style","onClick"])}],["__scopeId","data-v-60eba671"]]);export{p as _,m as a};
