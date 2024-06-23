import{P as e,Q as a,R as t,aV as l,aX as o,c4 as s,g as r,h as c,o as i,c as n,w as u,b as d,n as h,aW as p,x as m,y as f,f as y,H as b,_ as g,C as _,i as x,a3 as k,d as v,r as C,j as w,t as S,q as j,u as I,aN as B,E as $,F as A,G as z,a5 as V,a6 as T,U,a4 as F,V as M,a as N}from"./index-905183d4.js";import{_ as P}from"./u-icon.86a2aad0.js";import{_ as D}from"./_plugin-vue_export-helper.1b428a4d.js";import{_ as E}from"./u--image.b5d65e0e.js";import{_ as H}from"./tabbar.f4383367.js";import{a as R,b as O}from"./article.f9f175f7.js";import{M as q}from"./mescroll-body.b8d008ed.js";import{M as G}from"./mescroll-empty.f9bce990.js";import{u as Q}from"./useMescroll.26ccf5de.js";import"./u-image.44c969ef.js";import"./u-transition.dbaca185.js";import"./u-badge.82a65592.js";import"./u-tabbar.bedfa48a.js";import"./u-safe-bottom.e94b03c1.js";import"./mescroll-uni-option.0af4878d.js";import"./mescroll-i18n.6025c811.js";/* empty css                                                                       */const W=D({name:"u-search",mixins:[a,t,{props:{shape:{type:String,default:()=>e.search.shape},bgColor:{type:String,default:()=>e.search.bgColor},placeholder:{type:String,default:()=>e.search.placeholder},clearabled:{type:Boolean,default:()=>e.search.clearabled},focus:{type:Boolean,default:()=>e.search.focus},showAction:{type:Boolean,default:()=>e.search.showAction},actionStyle:{type:Object,default:()=>e.search.actionStyle},actionText:{type:String,default:()=>e.search.actionText},inputAlign:{type:String,default:()=>e.search.inputAlign},inputStyle:{type:Object,default:()=>e.search.inputStyle},disabled:{type:Boolean,default:()=>e.search.disabled},borderColor:{type:String,default:()=>e.search.borderColor},searchIconColor:{type:String,default:()=>e.search.searchIconColor},color:{type:String,default:()=>e.search.color},placeholderColor:{type:String,default:()=>e.search.placeholderColor},searchIcon:{type:String,default:()=>e.search.searchIcon},searchIconSize:{type:[Number,String],default:()=>e.search.searchIconSize},margin:{type:String,default:()=>e.search.margin},animation:{type:Boolean,default:()=>e.search.animation},modelValue:{type:String,default:()=>e.search.value},value:{type:String,default:()=>e.search.value},maxlength:{type:[String,Number],default:()=>e.search.maxlength},height:{type:[String,Number],default:()=>e.search.height},label:{type:[String,Number,null],default:()=>e.search.label},adjustPosition:{type:Boolean,default:()=>!0},autoBlur:{type:Boolean,default:()=>!1}}}],data(){return{keyword:"",showClear:!1,show:!1,focused:this.focus}},watch:{keyword(e){this.$emit("update:modelValue",e),this.$emit("change",e)},modelValue:{immediate:!0,handler(e){this.keyword=e}}},computed:{showActionBtn(){return!this.animation&&this.showAction}},emits:["clear","search","custom","focus","blur","click","clickIcon","update:modelValue","change"],methods:{addStyle:l,addUnit:o,inputChange(e){this.keyword=e.detail.value},clear(){this.keyword="",this.$nextTick((()=>{this.$emit("clear")}))},search(e){this.$emit("search",e.detail.value);try{s()}catch(a){}},custom(){this.$emit("custom",this.keyword);try{s()}catch(e){}},getFocus(){this.focused=!0,this.animation&&this.showAction&&(this.show=!0),this.$emit("focus",this.keyword)},blur(){setTimeout((()=>{this.focused=!1}),100),this.show=!1,this.$emit("blur",this.keyword)},clickHandler(){this.disabled&&this.$emit("click")},clickIcon(e){this.$emit("clickIcon",this.keyword);try{s()}catch(a){}}}},[["render",function(e,a,t,l,o,s){const v=_,C=r(c("u-icon"),P),w=x,S=k;return i(),n(w,{class:"u-search",onClick:s.clickHandler,style:h([{margin:e.margin},s.addStyle(e.customStyle)])},{default:u((()=>[d(w,{class:"u-search__content",style:h({backgroundColor:e.bgColor,borderRadius:"round"==e.shape?"100px":"4px",borderColor:e.borderColor})},{default:u((()=>[e.$slots.label||null!==e.label?p(e.$slots,"label",{key:0},(()=>[d(v,{class:"u-search__content__label"},{default:u((()=>[m(f(e.label),1)])),_:1})]),!0):y("v-if",!0),d(w,{class:"u-search__content__icon"},{default:u((()=>[d(C,{onClick:s.clickIcon,size:e.searchIconSize,name:e.searchIcon,color:e.searchIconColor?e.searchIconColor:e.color},null,8,["onClick","size","name","color"])])),_:1}),d(S,{"confirm-type":"search",onBlur:s.blur,value:o.keyword,onConfirm:s.search,onInput:s.inputChange,disabled:e.disabled,onFocus:s.getFocus,focus:e.focus,maxlength:e.maxlength,"adjust-position":e.adjustPosition,"auto-blur":e.autoBlur,"placeholder-class":"u-search__content__input--placeholder",placeholder:e.placeholder,"placeholder-style":`color: ${e.placeholderColor}`,class:"u-search__content__input",type:"text",style:h([{textAlign:e.inputAlign,color:e.color,backgroundColor:e.bgColor,height:s.addUnit(e.height)},e.inputStyle])},null,8,["onBlur","value","onConfirm","onInput","disabled","onFocus","focus","maxlength","adjust-position","auto-blur","placeholder","placeholder-style","style"]),o.keyword&&e.clearabled&&o.focused?(i(),n(w,{key:1,class:"u-search__content__icon u-search__content__close",onClick:s.clear},{default:u((()=>[d(C,{name:"close",size:"11",color:"#ffffff",customStyle:"line-height: 12px"})])),_:1},8,["onClick"])):y("v-if",!0)])),_:3},8,["style"]),d(v,{style:h([e.actionStyle]),class:b(["u-search__action",[(s.showActionBtn||o.show)&&"u-search__action--active"]]),onClick:g(s.custom,["stop","prevent"])},{default:u((()=>[m(f(e.actionText),1)])),_:1},8,["style","class","onClick"])])),_:3},8,["onClick","style"])}],["__scopeId","data-v-724ff103"]]),X=D(v({__name:"list",setup(e){const{mescrollInit:a,downCallback:t,getMescroll:l}=Q(T,V),{setShare:o,onShareAppMessage:s,onShareTimeline:p}=U();o(),s(),p();let g=C([]),k=C([]),v=C(""),D=C(""),X=C(null),J=C(!1);w((async()=>{await R().then((e=>{const a={name:S("all"),category_id:""};g.value.push(a),g.value=g.value.concat(e.data.data)}))}));const K=e=>{J.value=!1;let a={category_id:v.value,title:D.value,page:e.num,limit:e.size};O(a).then((a=>{let t=a.data.data;1==e.num&&(k.value=[]),k.value=k.value.concat(t),e.endSuccess(t.length),J.value=!0})).catch((()=>{J.value=!0,e.endErr()}))},L=()=>{l().resetUpScroll()};return j((()=>{setTimeout((()=>{l().optUp.textNoMore=S("end")}),500)})),(e,o)=>{const s=r(c("u-search"),W),p=x,C=F,w=r(c("u-icon"),P),j=r(c("u--image"),E),V=_,T=r(c("tabbar"),H);return i(),n(p,{class:"bg-gray-100 min-h-[100vh]",style:h(e.themeColor())},{default:u((()=>[d(p,{class:"fixed top-0 inset-x-0 z-10"},{default:u((()=>[d(p,{class:"p-[10px] bg-white border-solid border-t-0 border-l-0 border-r-0 border-b-[1px] border-gray-200"},{default:u((()=>[d(s,{placeholder:I(S)("searchPlaceholder"),actionText:"",actionStyle:{width:0,margin:0},modelValue:I(D),"onUpdate:modelValue":o[0]||(o[0]=e=>B(D)?D.value=e:D=e),onClickIcon:L},null,8,["placeholder","modelValue"])])),_:1}),d(C,{"scroll-x":!0,"enable-flex":!0,class:"nav-list bg-white align-center px-[10px] box-border"},{default:u((()=>[d(p,{class:"flex scroll-view-wrap"},{default:u((()=>[(i(!0),$(z,null,A(I(g),((e,a)=>(i(),n(p,{class:b(["nav-item text-[14px] mx-[5px] h-[30px] leading-[30px] my-[5px] border-t-0 border-l-0 border-r-0",{"border-solid border-b-[2px] active":I(v)==e.category_id}]),onClick:a=>{return t=e.category_id,v.value=t,void l().resetUpScroll();var t},key:e.category_id},{default:u((()=>[m(f(e.name),1)])),_:2},1032,["class","onClick"])))),128))])),_:1})])),_:1})])),_:1}),d(q,{ref_key:"mescrollRef",ref:X,onInit:I(a),top:"220rpx",onDown:I(t),onUp:K},{default:u((()=>[(i(!0),$(z,null,A(I(k),((e,a)=>(i(),n(p,{key:e.id,class:b(["bg-white flex align-center p-[10px]",{"border-solid border-t-0 border-l-0 border-r-0 border-b-[1px] border-gray-200":I(k).length-1!==a}]),onClick:a=>{return t=e.id,void N({url:"/addon/cms/pages/detail",param:{id:t}});var t}},{default:u((()=>[d(j,{width:"174rpx",height:"174rpx",src:I(M)(e.image),model:"aspectFill"},{error:u((()=>[d(w,{name:"photo",color:"#999",size:"50"})])),_:2},1032,["src"]),d(p,{class:"flex-1 flex flex-col justify-between ml-[10px]"},{default:u((()=>[d(p,{class:"text-[16px] leading-[1.3] multi-hidden mt-[2px]"},{default:u((()=>[m(f(e.title),1)])),_:2},1024),d(p,{class:"text-[14px] using-hidden mb-[10px] mt-[10px] text-gray-500"},{default:u((()=>[m(f(e.summary),1)])),_:2},1024),d(p,{class:"text-[12px] text-gray-400 flex justify-between mb-[5px]"},{default:u((()=>[d(V,null,{default:u((()=>[m(f(e.create_time),1)])),_:2},1024)])),_:2},1024)])),_:2},1024)])),_:2},1032,["class","onClick"])))),128)),!I(k).length&&I(J)?(i(),n(G,{key:0})):y("v-if",!0)])),_:1},8,["onInit","onDown"]),d(T)])),_:1},8,["style"])}}}),[["__scopeId","data-v-ecb41bcb"]]);export{X as default};