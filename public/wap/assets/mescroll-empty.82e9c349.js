import{o as t,c as i,w as e,b as n,f as o,y as p,z as s,Q as l,n as c,B as a,i as r}from"./index-9317da28.js";import{m,G as u}from"./mescroll-i18n.f3c5a2b0.js";import{_ as y}from"./_plugin-vue_export-helper.1b428a4d.js";const f=y({props:{option:{type:Object,default:()=>({})}},computed:{icon(){if(null!=this.option.icon)return this.option.icon;{let t=m.getType();return this.option.i18n?this.option.i18n[t].icon:u.i18n[t].up.empty.icon||u.up.empty.icon}},tip(){if(null!=this.option.tip)return this.option.tip;{let t=m.getType();return this.option.i18n?this.option.i18n[t].tip:u.i18n[t].up.empty.tip||u.up.empty.tip}},btnText(){if(this.option.i18n){let t=m.getType();return this.option.i18n[t].btnText}return this.option.btnText}},methods:{emptyClick(){this.$emit("emptyclick")}}},[["render",function(m,u,y,f,d,h){const x=a,_=r;return t(),i(_,{class:l(["mescroll-empty empty-page",{"empty-fixed":y.option.fixed}]),style:c({"z-index":y.option.zIndex,top:y.option.top})},{default:e((()=>[n(_,null,{default:e((()=>[h.icon?(t(),i(x,{key:0,class:"img",src:h.icon,mode:"aspectFit"},null,8,["src"])):o("v-if",!0)])),_:1}),h.tip?(t(),i(_,{key:0,class:"desc"},{default:e((()=>[p(s(h.tip),1)])),_:1})):o("v-if",!0),h.btnText?(t(),i(_,{key:1,class:"btn",onClick:h.emptyClick},{default:e((()=>[p(s(h.btnText),1)])),_:1},8,["onClick"])):o("v-if",!0)])),_:1},8,["class","style"])}],["__scopeId","data-v-58cfd0a2"]]);export{f as M};