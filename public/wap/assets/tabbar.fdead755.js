import{_ as t}from"./u-icon.5ba98c98.js";import{al as e,am as a,an as l,aW as o,g as n,h as i,o as s,c as r,w as c,b as u,I as d,K as b,aQ as p,n as m,y as v,z as h,i as y,D as f,d as g,F as x,q as k,T as _,p as S,bk as C,bl as D,J as I,u as j,l as O,f as P,a as A}from"./index-d8a8f699.js";import{_ as $}from"./u-badge.d38c6915.js";import{_ as w}from"./_plugin-vue_export-helper.1b428a4d.js";import{_ as H}from"./u-tabbar.5fed7184.js";const z=w({name:"u-tabbar-item",mixins:[a,l,{props:{name:{type:[String,Number,null],default:()=>e.tabbarItem.name},icon:{icon:String,default:()=>e.tabbarItem.icon},badge:{type:[String,Number,null],default:()=>e.tabbarItem.badge},dot:{type:Boolean,default:()=>e.tabbarItem.dot},text:{type:String,default:()=>e.tabbarItem.text},badgeStyle:{type:[Object,String],default:()=>e.tabbarItem.badgeStyle}}}],data:()=>({isActive:!1,parentData:{value:null,activeColor:"",inactiveColor:""}}),options:{virtualHost:!0},created(){this.init()},emits:["click","change"],methods:{addStyle:o,init(){this.updateParentData(),this.parent;const t=this.parent.children.indexOf(this);this.isActive=(this.name||t)===this.parentData.value},updateParentData(){this.getParentData("u-tabbar")},updateFromParent(){this.init()},clickHandler(){this.$nextTick((()=>{const t=this.parent.children.indexOf(this),e=this.name||t;e!==this.parent.value&&this.parent.$emit("change",e),this.$emit("click",e)}))}}},[["render",function(e,a,l,o,g,x){const k=n(i("u-icon"),t),_=n(i("u-badge"),$),S=y,C=f;return s(),r(S,{class:"u-tabbar-item cursor-pointer",style:m([x.addStyle(e.customStyle)]),onClick:x.clickHandler},{default:c((()=>[u(S,{class:"u-tabbar-item__icon"},{default:c((()=>[e.icon?(s(),r(k,{key:0,name:e.icon,color:g.isActive?g.parentData.activeColor:g.parentData.inactiveColor,size:20},null,8,["name","color"])):(s(),d(b,{key:1},[g.isActive?p(e.$slots,"active-icon",{key:0},void 0,!0):p(e.$slots,"inactive-icon",{key:1},void 0,!0)],64)),u(_,{absolute:"",offset:[0,e.dot?"34rpx":e.badge>9?"14rpx":"20rpx"],customStyle:e.badgeStyle,isDot:e.dot,value:e.badge||(e.dot?1:null),show:e.dot||e.badge>0},null,8,["offset","customStyle","isDot","value","show"])])),_:3}),p(e.$slots,"text",{},(()=>[u(C,{class:"u-tabbar-item__text",style:m({color:g.isActive?g.parentData.activeColor:g.parentData.inactiveColor})},{default:c((()=>[v(h(e.text),1)])),_:1},8,["style"])]),!0)])),_:3},8,["style","onClick"])}],["__scopeId","data-v-ed2788ef"]]),L=w(g({__name:"tabbar",props:{addon:{type:String,default:""}},setup(t,{expose:e}){const a=t;let l=a.addon;const o=x();!l&&o.addon&&(l=o.addon);const p=k({}),v=()=>{let t=x().tabbarList;if(1==t.length)Object.assign(p,t[0]);else for(let e=0;e<t.length;e++)if(t[e].key==l){Object.assign(p,t[e]);break}};v(),_((()=>a.addon),((t,e)=>{t&&e&&t!=e&&v()}),{immediate:!0}),a.addon||_((()=>x().tabbarList),((t,e)=>{t&&v()}),{deep:!0,immediate:!0});const h=S((()=>{let t=C().params,e=[];for(let a in t)e.push(a+"="+t[a]);return"/"+D()+(e.length>0?"?"+e.join("&"):"")})),f=t=>{-1!=t.indexOf("http")||-1!=t.indexOf("http")?window.location.href=t:A({url:t,mode:"reLaunch"})};return e({}),(t,e)=>{const a=n(i("u-tabbar-item"),z),l=n(i("u-tabbar"),H),o=y;return p&&Object.keys(p).length?(s(),d(b,{key:0},[u(l,{value:j(h),onChange:f,zIndex:"9999",fixed:!0,placeholder:!0,safeAreaInsetBottom:!0,"inactive-color":p.value.textColor,"active-color":p.value.textHoverColor},{default:c((()=>[(s(!0),d(b,null,I(p.value.list,(t=>(s(),d(b,null,[1==p.value.type?(s(),r(a,{key:0,class:"py-[5rpx]",style:m({"background-color":p.value.backgroundColor}),text:t.text,icon:j(O)(j(h)==t.link.url?t.iconSelectPath:t.iconPath),name:t.link.url},null,8,["style","text","icon","name"])):P("v-if",!0),2==p.value.type?(s(),r(a,{key:1,class:"py-[5rpx]",style:m({"background-color":p.value.backgroundColor}),icon:j(O)(j(h)==t.link.url?t.iconSelectPath:t.iconPath),name:t.link.url},null,8,["style","icon","name"])):P("v-if",!0),3==p.value.type?(s(),r(a,{key:2,class:"py-[5rpx]",style:m({"background-color":p.value.backgroundColor}),text:t.text,name:t.link.url},null,8,["style","text","name"])):P("v-if",!0)],64)))),256))])),_:1},8,["value","inactive-color","active-color"]),u(o,{class:"tab-bar-placeholder"})],64)):P("v-if",!0)}}}),[["__scopeId","data-v-18166812"]]);export{L as _};
