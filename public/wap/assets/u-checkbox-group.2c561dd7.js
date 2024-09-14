import{_ as e}from"./u-icon.5e775659.js";import{am as t,an as a,ao as i,aX as l,aY as o,aW as s,aq as c,bL as n,g as r,h,o as d,c as p,w as u,b,Q as C,A as k,n as m,aR as S,y as f,z as D,i as x,D as y}from"./index-9317da28.js";/* empty css                                                                         */import{_ as g}from"./_plugin-vue_export-helper.1b428a4d.js";const v=g({name:"u-checkbox",mixins:[a,i,{props:{name:{type:[String,Number,Boolean],default:()=>t.checkbox.name},shape:{type:String,default:()=>t.checkbox.shape},size:{type:[String,Number],default:()=>t.checkbox.size},checked:{type:Boolean,default:()=>t.checkbox.checked},disabled:{type:[String,Boolean],default:()=>t.checkbox.disabled},activeColor:{type:String,default:()=>t.checkbox.activeColor},inactiveColor:{type:String,default:()=>t.checkbox.inactiveColor},iconSize:{type:[String,Number],default:()=>t.checkbox.iconSize},iconColor:{type:String,default:()=>t.checkbox.iconColor},label:{type:[String,Number],default:()=>t.checkbox.label},labelSize:{type:[String,Number],default:()=>t.checkbox.labelSize},labelColor:{type:String,default:()=>t.checkbox.labelColor},labelDisabled:{type:[String,Boolean],default:()=>t.checkbox.labelDisabled},usedAlone:{type:[Boolean],default:()=>!1}}}],data:()=>({isChecked:!1,parentData:{iconSize:12,labelDisabled:null,disabled:null,shape:"square",activeColor:null,inactiveColor:null,size:18,modelValue:null,iconColor:null,placement:"row",borderBottom:!1,iconPlacement:"left"}}),computed:{elDisabled(){return""!==this.disabled?this.disabled:null!==this.parentData.disabled&&this.parentData.disabled},elLabelDisabled(){return""!==this.labelDisabled?this.labelDisabled:null!==this.parentData.labelDisabled&&this.parentData.labelDisabled},elSize(){return this.size?this.size:this.parentData.size?this.parentData.size:21},elIconSize(){return this.iconSize?this.iconSize:this.parentData.iconSize?this.parentData.iconSize:12},elActiveColor(){return this.activeColor?this.activeColor:this.parentData.activeColor?this.parentData.activeColor:"#2979ff"},elInactiveColor(){return this.inactiveColor?this.inactiveColor:this.parentData.inactiveColor?this.parentData.inactiveColor:"#c8c9cc"},elLabelColor(){return this.labelColor?this.labelColor:this.parentData.labelColor?this.parentData.labelColor:"#606266"},elShape(){return this.shape?this.shape:this.parentData.shape?this.parentData.shape:"circle"},elLabelSize(){return l(this.labelSize?this.labelSize:this.parentData.labelSize?this.parentData.labelSize:"15")},elIconColor(){const e=this.iconColor?this.iconColor:this.parentData.iconColor?this.parentData.iconColor:"#ffffff";return this.elDisabled?this.isChecked?this.elInactiveColor:"transparent":this.isChecked?e:"transparent"},iconClasses(){let e=[];return e.push("u-checkbox__icon-wrap--"+this.elShape),this.elDisabled&&e.push("u-checkbox__icon-wrap--disabled"),this.isChecked&&this.elDisabled&&e.push("u-checkbox__icon-wrap--disabled--checked"),e},iconWrapStyle(){const e={};return e.backgroundColor=this.isChecked&&!this.elDisabled?this.elActiveColor:"#ffffff",e.borderColor=this.isChecked&&!this.elDisabled?this.elActiveColor:this.elInactiveColor,e.width=l(this.elSize),e.height=l(this.elSize),this.usedAlone||"right"===this.parentData.iconPlacement&&(e.marginRight=0),e},checkboxStyle(){const e={};return this.usedAlone||(this.parentData.borderBottom&&this.parentData.placement,this.parentData.borderBottom&&"column"===this.parentData.placement&&(e.paddingBottom="8px")),o(e,s(this.customStyle))}},mounted(){this.init()},emits:["change"],methods:{init(){this.usedAlone||(this.updateParentData(),this.parent);const e=this.parentData.modelValue;this.checked?this.isChecked=!0:!this.usedAlone&&c.array(e)&&(this.isChecked=e.some((e=>e===this.name)))},updateParentData(){this.getParentData("u-checkbox-group")},wrapperClickHandler(e){(this.usedAlone||"right"===this.parentData.iconPlacement)&&this.iconClickHandler(e)},iconClickHandler(e){this.preventEvent(e),this.elDisabled||this.setRadioCheckedStatus()},labelClickHandler(e){this.preventEvent(e),this.elLabelDisabled||this.elDisabled||this.setRadioCheckedStatus()},emitEvent(){this.$emit("change",this.isChecked),this.$nextTick((()=>{n(this,"change")}))},setRadioCheckedStatus(){this.isChecked=!this.isChecked,this.emitEvent(),this.usedAlone||"function"==typeof this.parent.unCheckedOther&&this.parent.unCheckedOther(this)}},watch:{checked(){this.isChecked=this.checked}}},[["render",function(t,a,i,l,o,s){const c=r(h("u-icon"),e),n=x,g=y;return d(),p(n,{class:C(["u-checkbox cursor-pointer",[`u-checkbox-label--${o.parentData.iconPlacement}`,o.parentData.borderBottom&&"column"===o.parentData.placement&&"u-border-bottom"]]),style:m([s.checkboxStyle]),onClick:k(s.wrapperClickHandler,["stop"])},{default:u((()=>[b(n,{class:C(["u-checkbox__icon-wrap cursor-pointer",s.iconClasses]),onClick:k(s.iconClickHandler,["stop"]),style:m([s.iconWrapStyle])},{default:u((()=>[S(t.$slots,"icon",{},(()=>[b(c,{class:"u-checkbox__icon-wrap__icon",name:"checkbox-mark",size:s.elIconSize,color:s.elIconColor},null,8,["size","color"])]),!0)])),_:3},8,["onClick","class","style"]),b(g,{onClick:k(s.labelClickHandler,["stop"]),style:m({color:s.elDisabled?s.elInactiveColor:s.elLabelColor,fontSize:s.elLabelSize,lineHeight:s.elLabelSize})},{default:u((()=>[f(D(t.label),1)])),_:1},8,["onClick","style"])])),_:3},8,["style","onClick","class"])}],["__scopeId","data-v-92081527"]]);const z=g({name:"u-checkbox-group",mixins:[a,i,{props:{name:{type:String,default:()=>t.checkboxGroup.name},modelValue:{type:Array,default:()=>t.checkboxGroup.value},shape:{type:String,default:()=>t.checkboxGroup.shape},disabled:{type:Boolean,default:()=>t.checkboxGroup.disabled},activeColor:{type:String,default:()=>t.checkboxGroup.activeColor},inactiveColor:{type:String,default:()=>t.checkboxGroup.inactiveColor},size:{type:[String,Number],default:()=>t.checkboxGroup.size},placement:{type:String,default:()=>t.checkboxGroup.placement},labelSize:{type:[String,Number],default:()=>t.checkboxGroup.labelSize},labelColor:{type:[String],default:()=>t.checkboxGroup.labelColor},labelDisabled:{type:Boolean,default:()=>t.checkboxGroup.labelDisabled},iconColor:{type:String,default:()=>t.checkboxGroup.iconColor},iconSize:{type:[String,Number],default:()=>t.checkboxGroup.iconSize},iconPlacement:{type:String,default:()=>t.checkboxGroup.iconPlacement},borderBottom:{type:Boolean,default:()=>t.checkboxGroup.borderBottom}}}],computed:{parentData(){return[this.modelValue,this.disabled,this.inactiveColor,this.activeColor,this.size,this.labelDisabled,this.shape,this.iconSize,this.borderBottom,this.placement]},bemClass(){return this.bem("checkbox-group",["placement"])}},watch:{parentData:{handler(){this.children.length&&this.children.map((e=>{"function"==typeof e.init&&e.init()}))},deep:!0}},data:()=>({}),created(){this.children=[]},emits:["update:modelValue","change"],methods:{unCheckedOther(e){const t=[];this.children.map((e=>{e.isChecked&&t.push(e.name)})),this.$emit("change",t),this.$emit("update:modelValue",t)}}},[["render",function(e,t,a,i,l,o){const s=x;return d(),p(s,{class:C(["u-checkbox-group",o.bemClass])},{default:u((()=>[S(e.$slots,"default",{},void 0,!0)])),_:3},8,["class"])}],["__scopeId","data-v-4665ee80"]]);export{v as _,z as a};
