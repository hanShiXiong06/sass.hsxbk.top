import{al as t,am as a,an as e,o as s,c as o,w as n,aQ as i,i as r}from"./index-d8a8f699.js";import{_ as p}from"./_plugin-vue_export-helper.1b428a4d.js";const l=p({name:"u-swipe-action",mixins:[a,e,{props:{autoClose:{type:Boolean,default:()=>t.swipeAction.autoClose}}}],data:()=>({}),provide(){return{swipeAction:this}},computed:{parentData(){return[this.autoClose]}},watch:{parentData(){this.children.length&&this.children.map((t=>{"function"==typeof t.updateParentData&&t.updateParentData()}))}},created(){this.children=[]},methods:{closeOther(t){this.autoClose&&this.children.map(((a,e)=>{t!==a&&a.closeHandler()}))}}},[["render",function(t,a,e,p,l,c){const u=r;return s(),o(u,{class:"u-swipe-action"},{default:n((()=>[i(t.$slots,"default")])),_:3})}]]);export{l as _};
