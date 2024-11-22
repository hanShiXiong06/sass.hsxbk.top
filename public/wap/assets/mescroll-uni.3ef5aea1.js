import{bb as t,b5 as e,bj as o,bC as i,bD as s}from"./index-7bf68536.js";import{r as n,b as l,W as r,a as d,c as p}from"./mescroll-body.b6d57b41.js";import{m as c,G as h}from"./mescroll-i18n.14e7fe02.js";const m={mixins:[n]},a=t=>{t.$renderjs||(t.$renderjs=[]),t.$renderjs.push("renderBiz"),t.mixins||(t.mixins=[]),t.mixins.push({beforeCreate(){this.renderBiz=this},mounted(){this.$ownerInstance=this.$gcd(this,!0)}}),t.mixins.push(m)},w={name:"mescroll-uni",mixins:[r],components:{MescrollTop:d},props:{down:Object,up:Object,i18n:Object,top:[String,Number],topbar:[Boolean,String],bottom:[String,Number],safearea:Boolean,fixed:{type:Boolean,default:!0},height:[String,Number],bottombar:{type:Boolean,default:!0},disableScroll:Boolean},data:()=>({mescroll:{optDown:{},optUp:{}},viewId:"id_"+Math.random().toString(36).substr(2,16),downHight:0,downRate:0,downLoadType:0,upLoadType:0,isShowEmpty:!1,isShowToTop:!1,scrollTop:0,scrollAnim:!1,windowTop:0,windowBottom:0,windowHeight:0,statusBarHeight:0}),computed:{isFixed(){return!this.height&&this.fixed},scrollHeight(){return this.isFixed?"auto":this.height?this.toPx(this.height)+"px":"100%"},numTop(){return this.toPx(this.top)},fixedTop(){return this.isFixed?this.numTop+this.windowTop+"px":0},padTop(){return this.isFixed?0:this.numTop+"px"},numBottom(){return this.toPx(this.bottom)},fixedBottom(){return this.isFixed?this.numBottom+this.windowBottom+"px":0},padBottom(){return this.isFixed?0:this.numBottom+"px"},isDownReset(){return 3===this.downLoadType||4===this.downLoadType},transition(){return this.isDownReset?"transform 300ms":""},translateY(){return this.downHight>0?"translateY("+this.downHight+"px)":""},scrollable(){return!this.disableScroll&&(0===this.downLoadType||this.isDownReset)},isDownLoading(){return 3===this.downLoadType},downRotate(){return"rotate("+360*this.downRate+"deg)"},downText(){if(!this.mescroll)return"";switch(this.downLoadType){case 1:default:return this.mescroll.optDown.textInOffset;case 2:return this.mescroll.optDown.textOutOffset;case 3:return this.mescroll.optDown.textLoading;case 4:return this.mescroll.isDownEndSuccess?this.mescroll.optDown.textSuccess:0==this.mescroll.isDownEndSuccess?this.mescroll.optDown.textErr:this.mescroll.optDown.textInOffset}}},methods:{toPx(e){if("string"==typeof e)if(-1!==e.indexOf("px"))if(-1!==e.indexOf("rpx"))e=e.replace("rpx","");else{if(-1===e.indexOf("upx"))return Number(e.replace("px",""));e=e.replace("upx","")}else if(-1!==e.indexOf("%")){let t=Number(e.replace("%",""))/100;return this.windowHeight*t}return e?t(Number(e)):0},scroll(t){this.mescroll.scroll(t.detail,(()=>{this.$emit("scroll",this.mescroll)}))},emptyClick(){this.$emit("emptyclick",this.mescroll)},toTopClick(){this.mescroll.scrollTo(0,this.mescroll.optUp.toTop.duration),this.$emit("topclick",this.mescroll)},setClientHeight(){0!==this.mescroll.getClientHeight(!0)||this.isExec||(this.isExec=!0,this.$nextTick((()=>{this.getClientInfo((t=>{this.isExec=!1,t?this.mescroll.setClientHeight(t.height):3!=this.clientNum&&(this.clientNum=null==this.clientNum?1:this.clientNum+1,setTimeout((()=>{this.setClientHeight()}),100*this.clientNum))}))})))},getClientInfo(t){let o=e();o=o.in(this),o.select("#"+this.viewId).boundingClientRect((e=>{t(e)})).exec()}},created(){let t=this,s={down:{inOffset(){t.downLoadType=1},outOffset(){t.downLoadType=2},onMoving(e,o,i){t.downHight=i,t.downRate=o},showLoading(e,o){t.downLoadType=3,t.downHight=o},beforeEndDownScroll:e=>(t.downLoadType=4,e.optDown.beforeEndDelay),endDownScroll(){t.downLoadType=4,t.downHight=0,t.downResetTimer&&clearTimeout(t.downResetTimer),t.downResetTimer=setTimeout((()=>{4===t.downLoadType&&(t.downLoadType=0)}),300)},callback:function(e){t.$emit("down",e)}},up:{showLoading(){t.upLoadType=1},showNoMore(){t.upLoadType=2},hideUpScroll(e){t.upLoadType=e.optUp.hasNext?0:3},empty:{onShow(e){t.isShowEmpty=e}},toTop:{onShow(e){t.isShowToTop=e}},callback:function(e){t.$emit("up",e),t.setClientHeight()}}},n=c.getType(),l={type:n};p.extend(l,t.i18n),p.extend(l,h.i18n),p.extend(s,l[n]),p.extend(s,{down:h.down,up:h.up});let r=JSON.parse(JSON.stringify({down:t.down,up:t.up}));p.extend(r,s),t.mescroll=new p(r),t.mescroll.viewId=t.viewId,t.mescroll.i18n=l,t.$emit("init",t.mescroll);const d=o();d.windowTop&&(t.windowTop=d.windowTop),d.windowBottom&&(t.windowBottom=d.windowBottom),d.windowHeight&&(t.windowHeight=d.windowHeight),d.statusBarHeight&&(t.statusBarHeight=d.statusBarHeight),t.mescroll.setBodyHeight(d.windowHeight),t.mescroll.resetScrollTo(((o,i)=>{if(t.scrollAnim=0!==i,"string"==typeof o)return void t.getClientInfo((function(i){let s,n=i.top;-1==o.indexOf("#")&&-1==o.indexOf(".")?s="#"+o:(s=o,-1!=o.indexOf(">>>")&&(s=o.split(">>>")[1].trim())),e().select(s).boundingClientRect((function(e){if(e){let o=t.mescroll.getScrollTop(),i=e.top-n;i+=o,t.isFixed||(i-=t.numTop),t.scrollTop=o,t.$nextTick((function(){t.scrollTop=i}))}else console.error(s+" does not exist")})).exec()}));let s=t.mescroll.getScrollTop();0===i||300===i?(t.scrollTop=s,t.$nextTick((function(){t.scrollTop=o}))):t.mescroll.getStep(s,o,(e=>{t.scrollTop=e}),i)})),t.up&&t.up.toTop&&null!=t.up.toTop.safearea||(t.mescroll.optUp.toTop.safearea=t.safearea),i("setMescrollGlobalOption",(e=>{if(!e)return;let o=e.i18n?e.i18n.type:null;if(o&&t.mescroll.i18n.type!=o&&(t.mescroll.i18n.type=o,c.setType(o),p.extend(e,t.mescroll.i18n[o])),e.down){let o=p.extend({},e.down);t.mescroll.optDown=p.extend(o,t.mescroll.optDown)}if(e.up){let o=p.extend({},e.up);t.mescroll.optUp=p.extend(o,t.mescroll.optUp)}}))},mounted(){this.setClientHeight()},destroyed(){s("setMescrollGlobalOption")}};"function"==typeof l&&l(w),a(w);