import{an as t,ao as e,ap as s,c0 as l,aX as i,aY as a,aZ as o,c9 as c,bm as n,bx as r,c1 as u,bv as d,o as p,c as h,w as f,b as y,n as m,aS as x,i as v,d as b,r as k,l as _,j as g,p as S,u as C,f as j,P as I,a7 as T,Q as w,R as z,y as F,t as N,a as O,g as V,h as $,a6 as H,C as R,z as Z}from"./index-7bf68536.js";import{_ as L}from"./u-tabs.d81e913a.js";import{_ as E}from"./u-text.df478cbc.js";import{_ as U}from"./u-textarea.441d8e5e.js";import{_ as q}from"./u-button.359d7329.js";import{_ as B}from"./_plugin-vue_export-helper.1b428a4d.js";import{_ as G}from"./u-cell.1557b609.js";import{_ as P}from"./u-cell-group.5ef0b483.js";import{_ as Q}from"./u-empty.68b4529f.js";import{_ as W}from"./u-loading-icon.b37701e7.js";import"./mescroll-i18n.14e7fe02.js";/* empty css                                                                       */import{g as X,a as Y,b as A}from"./index.7e7f9b1a.js";import"./mescroll-body.b6d57b41.js";import"./cart.b4d15020.js";import"./u-badge.d8d91719.js";import"./u-icon.0c1c54c7.js";import"./u-line.463a2a45.js";const D=B({name:"u-sticky",mixins:[e,s,{props:{offsetTop:{type:[String,Number],default:()=>t.sticky.offsetTop},customNavHeight:{type:[String,Number],default:44},disabled:{type:Boolean,default:()=>t.sticky.disabled},bgColor:{type:String,default:()=>t.sticky.bgColor},zIndex:{type:[String,Number],default:()=>t.sticky.zIndex},index:{type:[String,Number],default:()=>t.sticky.index}}}],data:()=>({cssSticky:!1,stickyTop:0,elId:l(),left:0,width:"auto",height:"auto",fixed:!1}),computed:{style(){const t={};return this.disabled?t.position="static":this.cssSticky?(t.position="sticky",t.zIndex=this.uZindex,t.top=i(this.stickyTop)):t.height=this.fixed?this.height+"px":"auto",t.backgroundColor=this.bgColor,a(o(this.customStyle),t)},stickyContent(){const t={};return this.cssSticky||(t.position=this.fixed?"fixed":"static",t.top=this.stickyTop+"px",t.left=this.left+"px",t.width="auto"==this.width?"auto":this.width+"px",t.zIndex=this.uZindex),t},uZindex(){return this.zIndex?this.zIndex:c.sticky}},mounted(){this.init()},methods:{init(){this.getStickyTop(),this.checkSupportCssSticky(),this.cssSticky||!this.disabled&&this.initObserveContent()},initObserveContent(){this.$uGetRect("#"+this.elId).then((t=>{this.height=t.height,this.left=t.left,this.width=t.width,this.$nextTick((()=>{this.observeContent()}))}))},observeContent(){this.disconnectObserver("contentObserver");const t=n({thresholds:[.95,.98,1]});t.relativeToViewport({top:-this.stickyTop}),t.observe(`#${this.elId}`,(t=>{this.setFixed(t.boundingClientRect.top)})),this.contentObserver=t},setFixed(t){const e=t<=this.stickyTop;this.fixed=e},disconnectObserver(t){const e=this[t];e&&e.disconnect()},getStickyTop(){this.stickyTop=r(this.offsetTop)+r(this.customNavHeight)},async checkSupportCssSticky(){this.checkCssStickyForH5()&&(this.cssSticky=!0),"android"===u()&&Number(d().system)>8&&(this.cssSticky=!0),"ios"===u()&&(this.cssSticky=!0)},checkComputedStyle(){},checkCssStickyForH5(){const t=["","-webkit-","-ms-","-moz-","-o-"],e=t.length,s=document.createElement("div");for(let l=0;l<e;l++)if(s.style.position=t[l]+"sticky",""!==s.style.position)return!0;return!1}},beforeUnmount(){this.disconnectObserver("contentObserver")}},[["render",function(t,e,s,l,i,a){const o=v;return p(),h(o,{class:"u-sticky",id:i.elId,style:m([a.style])},{default:f((()=>[y(o,{style:m([a.stickyContent]),class:"u-sticky__content"},{default:f((()=>[x(t.$slots,"default",{},void 0,!0)])),_:3},8,["style"])])),_:3},8,["id","style"])}],["__scopeId","data-v-dbb1d77f"]]),J=B(b({__name:"index",props:{config:{type:Object,default:()=>({})},categoryId:{type:[String,Number],default:0}},setup(t){let e={level:1,template:"style-1",page_title:"商品分类",search:{control:1,title:"请输入搜索型号"},goods:{style:"single-cols"},sort:"default",cart:{control:0,event:"detail",style:"style-1",text:"购买"}};t.categoryId,k("");const s=k(!0),l=k(""),i=k([]),a=k(0),o=_();g((()=>o.info)),k("");const c=k([]),n=k(0);S((async()=>{await X().then((t=>{c.value=t.data,s.value=!1,m()}))}));const r=(t,e)=>{n.value=t.index,a.value=0,i.value=[],l.value=""};k(null);const u=async(t,e)=>{s.value=!0,l.value?(await A({imeis:l.value,id:t,payType:e}).then((t=>{1==t.code&&m()})).catch((t=>{N({title:t.msg,icon:"none",duration:2e3})})),l.value="",s.value=!1):N({title:"请输入手机SN",icon:"error",duration:2e3})},d=k([]),m=t=>{Y().then((t=>{d.value=t.data.data,s.value=!1}))},x=()=>{O({url:"/addon/recharge/pages/recharge",mode:"navigateTo"})};return(t,i)=>{const o=V($("up-tabs"),L),m=v,b=H,k=V($("up-text"),E),_=R,g=V($("up-textarea"),U),S=V($("up-button"),q),N=V($("up-sticky"),D),O=V($("up-cell"),G),B=V($("up-cell-group"),P),X=V($("u-empty"),Q),Y=V($("u-loading-icon"),W);return p(),h(m,{class:"bg-[#F4F6F8] min-h-screen"},{default:f((()=>[c.value.length?(p(),h(m,{key:0,class:"mescroll-box"},{default:f((()=>[C(e).search.control?(p(),h(m,{key:0,class:"search-box z-10 bg-[#fff] fixed top-0 left-0 right-0 h-[106rpx] box-border"},{default:f((()=>[y(o,{list:c.value,onClick:r},null,8,["list"])])),_:1})):j("v-if",!0),y(m,{class:z(["tabs-box z-2 fixed left-0 bg-[#fff] bottom-[50px] top-0",{"!top-[106rpx]":C(e).search.control}])},{default:f((()=>[y(b,{"scroll-y":!0,class:"scroll-height"},{default:f((()=>[y(m,{class:"bg-[#F4F6F8]"},{default:f((()=>[(p(!0),I(w,null,T(c.value[n.value].child,((t,e)=>(p(),h(m,{class:z(["tab-item flex",{"tab-item-active":e==a.value,"rounded-br-[12rpx]":a.value-1===e,"rounded-tr-[12rpx]":a.value+1===e}]),key:e,onClick:t=>((t,e)=>{a.value=t})(e)},{default:f((()=>[y(m,{class:"text-box px-[10rpx] text-[24rpx]"},{default:f((()=>[F(Z(t.name),1)])),_:2},1024)])),_:2},1032,["class","onClick"])))),128))])),_:1})])),_:1})])),_:1},8,["class"]),y(b,{class:"h-[100vh]","scroll-y":!0},{default:f((()=>[y(m,{class:z(["pl-[212rpx] scroll-ios pt-[20rpx] pr-[20rpx]",{"!pt-[126rpx]":C(e).search.control}])},{default:f((()=>[y(N,null,{default:f((()=>[y(m,{class:"bg-[#fff] rounded p-2"},{default:f((()=>[y(m,{class:"flex justify-between items-center"},{default:f((()=>[y(k,{type:"primary",text:c.value[n.value].child[a.value].name},null,8,["text"]),y(_,{size:"mini",type:"link",onClick:x},{default:f((()=>[F(" 立即充值")])),_:1})])),_:1}),y(m,{class:"flex justify-between items-center"},{default:f((()=>[F(" 价格: "),y(k,{type:"error",text:c.value[n.value].child[a.value].price},null,8,["text"]),F(" 积分: "),y(k,{type:"error",text:(100*c.value[n.value].child[a.value].price).toFixed(0)},null,8,["text"])])),_:1}),y(g,{class:"m-2",modelValue:l.value,"onUpdate:modelValue":i[0]||(i[0]=t=>l.value=t),placeholder:"请输入手机串号查询"},null,8,["modelValue"]),y(m,{class:"flex m-2"},{default:f((()=>[y(S,{class:"m-2",type:"primary",onClick:i[1]||(i[1]=t=>u(c.value[n.value].child[a.value].id,"point")),text:"积分查询"}),y(S,{class:"m-2",type:"primary",onClick:i[2]||(i[2]=t=>u(c.value[n.value].child[a.value].id,"balance")),text:"余额查询"})])),_:1})])),_:1})])),_:1}),y(m,{class:"mt-2"},{default:f((()=>[F(" 查询历史 ")])),_:1}),0!==d.value.length?(p(),h(m,{key:0,class:"bg-[#fff] rounded p-2"},{default:f((()=>[y(B,null,{default:f((()=>[j(' <up-cell v-for="(value, key) in modelList" :key="key" :title="key" isLink\n                                @click=\'tolink(value.id)\'> '),(p(!0),I(w,null,T(d.value,((t,e)=>(p(),h(O,{key:e,title:e,isLink:"",url:"/addon/hsx_phone_query/pages/detail?id="+t.id},{title:f((()=>[y(m,{class:"u-slot-title"},{default:f((()=>[y(m,{class:"u-cell-text text-sm"},{default:f((()=>[F(Z(t.type_name),1)])),_:2},1024),y(m,{class:"u-cell-text text-sm"},{default:f((()=>[F(Z(t.sn),1)])),_:2},1024)])),_:2},1024)])),_:2},1032,["title","url"])))),128))])),_:1})])),_:1})):(p(),h(m,{key:1},{default:f((()=>[y(X,{text:"暂无查询记录",mode:"list"})])),_:1}))])),_:1},8,["class"])])),_:1})])),_:1})):j("v-if",!0),y(m,{class:"loading"},{default:f((()=>[s.value?(p(),h(Y,{key:0,"bg-color":"rgb(248,248,248)",loadingText:"",fontSize:"32",color:"#303133"})):j("v-if",!0)])),_:1}),j(" <tabbar /> ")])),_:1})}}}),[["__scopeId","data-v-3b879919"]]);export{J as default};