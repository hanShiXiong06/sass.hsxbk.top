import{p as e,a as r}from"./u-form.7ae4e9da.js";import{Q as l,R as t,bd as s,o,c as a,w as i,aW as m}from"./index-905183d4.js";import{_ as d}from"./_plugin-vue_export-helper.1b428a4d.js";const u=d({name:"u--form",mixins:[l,e,t],components:{uvForm:r},created(){this.children=[]},methods:{setRules(e){this.$refs.uForm.setRules(e)},validate(){return this.$refs.uForm.validate()},validateField(e,r){return this.$refs.uForm.validateField(e,r)},resetFields(){return this.$refs.uForm.resetFields()},clearValidate(e){return this.$refs.uForm.clearValidate(e)},setMpData(){this.$refs.uForm.children=this.children}}},[["render",function(e,r,l,t,d,u){const n=s("uvForm");return o(),a(n,{ref:"uForm",model:e.model,rules:e.rules,errorType:e.errorType,borderBottom:e.borderBottom,labelPosition:e.labelPosition,labelWidth:e.labelWidth,labelAlign:e.labelAlign,labelStyle:e.labelStyle,customStyle:e.customStyle},{default:i((()=>[m(e.$slots,"default")])),_:3},8,["model","rules","errorType","borderBottom","labelPosition","labelWidth","labelAlign","labelStyle","customStyle"])}]]);export{u as _};
