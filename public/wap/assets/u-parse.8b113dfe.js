import{bn as t,bo as s,bp as e,ba as i,bq as n,bd as a,o as r,c as o,w as l,I as h,K as c,J as d,f as p,n as m,L as g,Y as u,b as f,y,z as b,Q as x,D as k,i as v,br as w,bs as T,be as _,s as $,b3 as N,bt as L,aQ as O}from"./index-d8a8f699.js";import{_ as S}from"./_plugin-vue_export-helper.1b428a4d.js";var C={abbr:!0,b:!0,big:!0,code:!0,del:!0,em:!0,i:!0,ins:!0,label:!0,q:!0,small:!0,span:!0,strong:!0,sub:!0,sup:!0};const I={isInline:function(t,s){return C[t]||-1!==(s||"").indexOf("display:inline")}},j=t=>{t.$wxs||(t.$wxs=[]),t.$wxs.push("handler"),t.mixins||(t.mixins=[]),t.mixins.push({beforeCreate(){this.handler=I}})},R={name:"node",options:{},data:()=>({ctrl:{}}),props:{name:String,attrs:{type:Object,default:()=>({})},childs:Array,opts:Array},components:{},mounted(){if(this.$nextTick((()=>{for(this.root=this.$parent;"u-parse"!==this.root.$options.name;this.root=this.root.$parent);})),this.opts[0]){let s;for(s=this.childs.length;s--&&"img"!==this.childs[s].name;);-1!==s&&(this.observer=t(this).relativeToViewport({top:500,bottom:500}),this.observer.observe("._img",(t=>{t.intersectionRatio&&(this.$set(this.ctrl,"load",1),this.observer.disconnect())})))}},beforeDestroy(){this.observer&&this.observer.disconnect()},methods:{play(t){if(this.root.$emit("play"),this.root.pauseVideo){let e=!1;const i=t.target.id;for(let t=this.root._videos.length;t--;)this.root._videos[t].id===i?e=!0:this.root._videos[t].pause();if(!e){const t=s(i,this);t.id=i,this.root.playbackRate&&t.playbackRate(this.root.playbackRate),this.root._videos.push(t)}}},imgTap(t){const s=this.childs[t.currentTarget.dataset.i];s.a?this.linkTap(s.a):s.attrs.ignore||(s.attrs.src=s.attrs.src||s.attrs["data-src"],this.root.$emit("imgTap",s.attrs),this.root.previewImg&&e({current:parseInt(s.attrs.i),urls:this.root.imgList}))},imgLongTap(t){},imgLoad(t){const s=t.currentTarget.dataset.i;(this.opts[1]&&!this.ctrl[s]||-1===this.ctrl[s])&&this.$set(this.ctrl,s,1),this.checkReady()},checkReady(){this.root.lazyLoad||(this.root._unloadimgs-=1,this.root._unloadimgs||setTimeout((()=>{this.root.getRect().then((t=>{this.root.$emit("ready",t)})).catch((()=>{this.root.$emit("ready",{})}))}),350))},linkTap(t){const s=t.currentTarget?this.childs[t.currentTarget.dataset.i]:{},e=s.attrs||t,a=e.href;this.root.$emit("linkTap",Object.assign({innerText:this.root.getText(s.children||[])},e)),a&&("#"===a[0]?this.root.navigateTo(a.substring(1)).catch((()=>{})):a.split("?")[0].includes("://")?this.root.copyLink&&window.open(a):i({url:a,fail(){n({url:a,fail(){}})}}))},mediaError(t){const s=t.currentTarget.dataset.i,e=this.childs[s];if("video"===e.name||"audio"===e.name){let t=(this.ctrl[s]||0)+1;if(t>e.src.length&&(t=0),t<e.src.length)return void this.$set(this.ctrl,s,t)}else if("img"===e.name){if(this.opts[0]&&!this.ctrl.load)return;this.opts[2]&&this.$set(this.ctrl,s,-1),this.checkReady()}this.root&&this.root.$emit("error",{source:e.name,attrs:e.attrs})}}};j(R);const A=S(R,[["render",function(t,s,e,i,n,_){const $=x,N=k,L=a("node",!0),O=v,S=w,C=T;return r(),o(O,{id:e.attrs.id,class:g("_block _"+e.name+" "+e.attrs.class),style:m(e.attrs.style)},{default:l((()=>[(r(!0),h(c,null,d(e.childs,((i,a)=>(r(),h(c,{key:a},[p(" 图片 "),p(" 占位图 "),"img"===i.name&&!i.t&&(e.opts[1]&&!n.ctrl[a]||n.ctrl[a]<0)?(r(),o($,{key:0,class:"_img",style:m(i.attrs.style),src:n.ctrl[a]<0?e.opts[2]:e.opts[1],mode:"widthFix"},null,8,["style","src"])):p("v-if",!0),p(" 显示图片 "),"img"===i.name?(r(),h("img",{key:1,id:i.attrs.id,class:g("_img "+i.attrs.class),style:m((-1===n.ctrl[a]?"display:none;":"")+i.attrs.style),src:i.attrs.src||(n.ctrl.load?i.attrs["data-src"]:""),"data-i":a,onLoad:s[0]||(s[0]=(...t)=>_.imgLoad&&_.imgLoad(...t)),onError:s[1]||(s[1]=(...t)=>_.mediaError&&_.mediaError(...t)),onClick:s[2]||(s[2]=u(((...t)=>_.imgTap&&_.imgTap(...t)),["stop"])),onLongpress:s[3]||(s[3]=(...t)=>_.imgLongTap&&_.imgLongTap(...t))},null,46,["id","src","data-i"])):i.text?(r(),h(c,{key:2},[p(" 文本 "),f(N,{decode:""},{default:l((()=>[y(b(i.text),1)])),_:2},1024)],2112)):"br"===i.name?(r(),o(N,{key:3},{default:l((()=>[y("\\n")])),_:1})):"a"===i.name?(r(),h(c,{key:4},[p(" 链接 "),f(O,{id:i.attrs.id,class:g((i.attrs.href?"_a ":"")+i.attrs.class),"hover-class":"_hover",style:m("display:inline;"+i.attrs.style),"data-i":a,onClick:u(_.linkTap,["stop"])},{default:l((()=>[f(L,{name:"span",childs:i.children,opts:e.opts,style:{display:"inherit"}},null,8,["childs","opts"])])),_:2},1032,["id","class","style","data-i","onClick"])],2112)):"video"===i.name?(r(),h(c,{key:5},[p(" 视频 "),f(S,{id:i.attrs.id,class:g(i.attrs.class),style:m(i.attrs.style),autoplay:i.attrs.autoplay,controls:i.attrs.controls,loop:i.attrs.loop,muted:i.attrs.muted,"object-fit":i.attrs["object-fit"],poster:i.attrs.poster,src:i.src[n.ctrl[a]||0],"data-i":a,onPlay:_.play,onError:_.mediaError},null,8,["id","class","style","autoplay","controls","loop","muted","object-fit","poster","src","data-i","onPlay","onError"])],2112)):"iframe"===i.name?(r(),h("iframe",{key:6,style:m(i.attrs.style),allowfullscreen:i.attrs.allowfullscreen,frameborder:i.attrs.frameborder,src:i.attrs.src},null,12,["allowfullscreen","frameborder","src"])):"embed"===i.name?(r(),h("embed",{key:7,style:m(i.attrs.style),src:i.attrs.src},null,12,["src"])):"table"===i.name&&i.c||"li"===i.name?(r(),o(O,{key:8,id:i.attrs.id,class:g("_"+i.name+" "+i.attrs.class),style:m(i.attrs.style)},{default:l((()=>["li"===i.name?(r(),o(L,{key:0,childs:i.children,opts:e.opts},null,8,["childs","opts"])):(r(!0),h(c,{key:1},d(i.children,((t,s)=>(r(),o(O,{key:s,class:g("_"+t.name+" "+t.attrs.class),style:m(t.attrs.style)},{default:l((()=>["td"===t.name||"th"===t.name?(r(),o(L,{key:0,childs:t.children,opts:e.opts},null,8,["childs","opts"])):(r(!0),h(c,{key:1},d(t.children,((t,s)=>(r(),h(c,{key:s},["td"===t.name||"th"===t.name?(r(),o(O,{key:0,class:g("_"+t.name+" "+t.attrs.class),style:m(t.attrs.style)},{default:l((()=>[f(L,{childs:t.children,opts:e.opts},null,8,["childs","opts"])])),_:2},1032,["class","style"])):(r(),o(O,{key:1,class:g("_"+t.name+" "+t.attrs.class),style:m(t.attrs.style)},{default:l((()=>[(r(!0),h(c,null,d(t.children,((t,s)=>(r(),o(O,{key:s,class:g("_"+t.name+" "+t.attrs.class),style:m(t.attrs.style)},{default:l((()=>[f(L,{childs:t.children,opts:e.opts},null,8,["childs","opts"])])),_:2},1032,["class","style"])))),128))])),_:2},1032,["class","style"]))],64)))),128))])),_:2},1032,["class","style"])))),128))])),_:2},1032,["id","class","style"])):i.c||t.handler.isInline(i.name,i.attrs.style)?2===i.c?(r(),h(c,{key:10},[p(" 继续递归 "),f(O,{id:i.attrs.id,class:g("_block _"+i.name+" "+i.attrs.class),style:m(i.f+";"+i.attrs.style)},{default:l((()=>[(r(!0),h(c,null,d(i.children,((t,s)=>(r(),o(L,{key:s,style:m(t.f),name:t.name,attrs:t.attrs,childs:t.children,opts:e.opts},null,8,["style","name","attrs","childs","opts"])))),128))])),_:2},1032,["id","class","style"])],2112)):(r(),o(L,{key:11,style:m(i.f),name:i.name,attrs:i.attrs,childs:i.children,opts:e.opts},null,8,["style","name","attrs","childs","opts"])):(r(),h(c,{key:9},[p(" 富文本 "),f(C,{id:i.attrs.id,style:m(i.f),"user-select":e.opts[4],nodes:[i]},null,8,["id","style","user-select","nodes"])],2112))],64)))),128))])),_:1},8,["id","class","style"])}],["__scopeId","data-v-e3fc8be5"]]),z={trustTags:D("a,abbr,ad,audio,b,blockquote,br,code,col,colgroup,dd,del,dl,dt,div,em,fieldset,h1,h2,h3,h4,h5,h6,hr,i,img,ins,label,legend,li,ol,p,q,ruby,rt,source,span,strong,sub,sup,table,tbody,td,tfoot,th,thead,tr,title,ul,video"),blockTags:D("address,article,aside,body,caption,center,cite,footer,header,html,nav,pre,section"),ignoreTags:D("area,base,canvas,embed,frame,head,iframe,input,link,map,meta,param,rp,script,source,style,textarea,title,track,wbr"),voidTags:D("area,base,br,col,circle,ellipse,embed,frame,hr,img,input,line,link,meta,param,path,polygon,rect,source,track,use,wbr"),entities:{lt:"<",gt:">",quot:'"',apos:"'",ensp:" ",emsp:" ",nbsp:" ",semi:";",ndash:"–",mdash:"—",middot:"·",lsquo:"‘",rsquo:"’",ldquo:"“",rdquo:"”",bull:"•",hellip:"…",larr:"←",uarr:"↑",rarr:"→",darr:"↓"},tagStyle:{address:"font-style:italic",big:"display:inline;font-size:1.2em",caption:"display:table-caption;text-align:center",center:"text-align:center",cite:"font-style:italic",dd:"margin-left:40px",mark:"background-color:yellow",pre:"font-family:monospace;white-space:pre",s:"text-decoration:line-through",small:"display:inline;font-size:0.8em",strike:"text-decoration:line-through",u:"text-decoration:underline"},svgDict:{animatetransform:"animateTransform",lineargradient:"linearGradient",viewbox:"viewBox",attributename:"attributeName",repeatcount:"repeatCount",repeatdur:"repeatDur"}},B={},{windowWidth:E}=_(),V=D(" ,\r,\n,\t,\f");let q=0;function D(t){const s=Object.create(null),e=t.split(",");for(let i=e.length;i--;)s[e[i]]=!0;return s}function F(t,s){let e=t.indexOf("&");for(;-1!==e;){const i=t.indexOf(";",e+3);let n;if(-1===i)break;"#"===t[e+1]?(n=parseInt(("x"===t[e+2]?"0":"")+t.substring(e+2,i)),isNaN(n)||(t=t.substr(0,e)+String.fromCharCode(n)+t.substr(i+1))):(n=t.substring(e+1,i),(z.entities[n]||"amp"===n&&s)&&(t=t.substr(0,e)+(z.entities[n]||"&")+t.substr(i+1))),e=t.indexOf("&",e+1)}return t}function P(t){let s=t.length-1;for(let e=s;e>=-1;e--)(-1===e||t[e].c||!t[e].name||"div"!==t[e].name&&"p"!==t[e].name&&"h"!==t[e].name[0]||(t[e].attrs.style||"").includes("inline"))&&(s-e>=5&&t.splice(e+1,s-e,{name:"div",attrs:{},children:t.slice(e+1,s+1)}),s=e-1)}function U(t){this.options=t||{},this.tagStyle=Object.assign({},z.tagStyle,this.options.tagStyle),this.imgList=t.imgList||[],this.imgList._unloadimgs=0,this.plugins=t.plugins||[],this.attrs=Object.create(null),this.stack=[],this.nodes=[],this.pre=(this.options.containerStyle||"").includes("white-space")&&this.options.containerStyle.includes("pre")?2:0}function M(t){this.handler=t}z.ignoreTags.iframe=void 0,z.trustTags.iframe=!0,z.ignoreTags.embed=void 0,z.trustTags.embed=!0,U.prototype.parse=function(t){for(let s=this.plugins.length;s--;)this.plugins[s].onUpdate&&(t=this.plugins[s].onUpdate(t,z)||t);for(new M(this).parse(t);this.stack.length;)this.popNode();return this.nodes.length>50&&P(this.nodes),this.nodes},U.prototype.expose=function(){for(let t=this.stack.length;t--;){const s=this.stack[t];if(s.c||"a"===s.name||"video"===s.name||"audio"===s.name)return;s.c=1}},U.prototype.hook=function(t){for(let s=this.plugins.length;s--;)if(this.plugins[s].onParse&&!1===this.plugins[s].onParse(t,this))return!1;return!0},U.prototype.getUrl=function(t){const s=this.options.domain;return"/"===t[0]?"/"===t[1]?t=(s?s.split("://")[0]:"http")+":"+t:s&&(t=s+t):t.includes("data:")||t.includes("://")||s&&(t=s+"/"+t),t},U.prototype.parseStyle=function(t){const s=t.attrs,e=(this.tagStyle[t.name]||"").split(";").concat((s.style||"").split(";")),i={};let n="";s.id&&!this.xml&&(this.options.useAnchor?this.expose():"img"!==t.name&&"a"!==t.name&&"video"!==t.name&&"audio"!==t.name&&(s.id=void 0)),s.width&&(i.width=parseFloat(s.width)+(s.width.includes("%")?"%":"px"),s.width=void 0),s.height&&(i.height=parseFloat(s.height)+(s.height.includes("%")?"%":"px"),s.height=void 0);for(let a=0,r=e.length;a<r;a++){const t=e[a].split(":");if(t.length<2)continue;const s=t.shift().trim().toLowerCase();let r=t.join(":").trim();if("-"===r[0]&&r.lastIndexOf("-")>0||r.includes("safe"))n+=`;${s}:${r}`;else if(!i[s]||r.includes("import")||!i[s].includes("import")){if(r.includes("url")){let t=r.indexOf("(")+1;if(t){for(;'"'===r[t]||"'"===r[t]||V[r[t]];)t++;r=r.substr(0,t)+this.getUrl(r.substr(t))}}else r.includes("rpx")&&(r=r.replace(/[0-9.]+\s*rpx/g,(t=>parseFloat(t)*E/750+"px")));i[s]=r}}return t.attrs.style=n,i},U.prototype.onTagName=function(t){this.tagName=this.xml?t:t.toLowerCase(),"svg"===this.tagName&&(this.xml=(this.xml||0)+1)},U.prototype.onAttrName=function(t){"data-"===(t=this.xml?t:t.toLowerCase()).substr(0,5)?"data-src"!==t||this.attrs.src?"img"===this.tagName||"a"===this.tagName?this.attrName=t:this.attrName=void 0:this.attrName="src":(this.attrName=t,this.attrs[t]="T")},U.prototype.onAttrVal=function(t){const s=this.attrName||"";"style"===s||"href"===s?this.attrs[s]=F(t,!0):s.includes("src")?this.attrs[s]=this.getUrl(F(t,!0)):s&&(this.attrs[s]=t)},U.prototype.onOpenTag=function(t){const s=Object.create(null);s.name=this.tagName,s.attrs=this.attrs,this.options.nodes.length&&(s.type="node"),this.attrs=Object.create(null);const e=s.attrs,i=this.stack[this.stack.length-1],n=i?i.children:this.nodes,a=this.xml?t:z.voidTags[s.name];if(B[s.name]&&(e.class=B[s.name]+(e.class?" "+e.class:"")),"embed"===s.name&&this.expose(),"video"!==s.name&&"audio"!==s.name||("video"!==s.name||e.id||(e.id="v"+q++),e.controls||e.autoplay||(e.controls="T"),s.src=[],e.src&&(s.src.push(e.src),e.src=void 0),this.expose()),a){if(!this.hook(s)||z.ignoreTags[s.name])return void("base"!==s.name||this.options.domain?"source"===s.name&&i&&("video"===i.name||"audio"===i.name)&&e.src&&i.src.push(e.src):this.options.domain=e.href);const t=this.parseStyle(s);if("img"===s.name){if(e.src&&(e.src.includes("webp")&&(s.webp="T"),e.src.includes("data:")&&!e["original-src"]&&(e.ignore="T"),!e.ignore||s.webp||e.src.includes("cloud://"))){for(let n=this.stack.length;n--;){const i=this.stack[n];"a"===i.name&&(s.a=i.attrs),"table"!==i.name||s.webp||e.src.includes("cloud://")||(!t.display||t.display.includes("inline")?s.t="inline-block":s.t=t.display,t.display=void 0),i.c=1}e.i=this.imgList.length.toString();let i=e["original-src"]||e.src;this.imgList.push(i),s.t||(this.imgList._unloadimgs+=1),this.options.lazyLoad&&(e["data-src"]=e.src,e.src=void 0)}"inline"===t.display&&(t.display=""),e.ignore&&(t["max-width"]=t["max-width"]||"100%",e.style+=";-webkit-touch-callout:none"),parseInt(t.width)>E&&(t.height=void 0),isNaN(parseInt(t.width))||(s.w="T"),!isNaN(parseInt(t.height))&&(!t.height.includes("%")||i&&(i.attrs.style||"").includes("height"))&&(s.h="T")}else if("svg"===s.name)return n.push(s),this.stack.push(s),void this.popNode();for(const s in t)t[s]&&(e.style+=`;${s}:${t[s].replace(" !important","")}`);e.style=e.style.substr(1)||void 0}else("pre"===s.name||(e.style||"").includes("white-space")&&e.style.includes("pre"))&&2!==this.pre&&(this.pre=s.pre=1),s.children=[],this.stack.push(s);n.push(s)},U.prototype.onCloseTag=function(t){let s;for(t=this.xml?t:t.toLowerCase(),s=this.stack.length;s--&&this.stack[s].name!==t;);if(-1!==s)for(;this.stack.length>s;)this.popNode();else if("p"===t||"br"===t){(this.stack.length?this.stack[this.stack.length-1].children:this.nodes).push({name:t,attrs:{class:B[t]||"",style:this.tagStyle[t]||""}})}},U.prototype.popNode=function(){const t=this.stack.pop();let s=t.attrs;const e=t.children,i=this.stack[this.stack.length-1],n=i?i.children:this.nodes;if(!this.hook(t)||z.ignoreTags[t.name])return"title"===t.name&&e.length&&"text"===e[0].type&&this.options.setTitle&&$({title:e[0].text}),void n.pop();if(t.pre&&2!==this.pre){this.pre=t.pre=void 0;for(let t=this.stack.length;t--;)this.stack[t].pre&&(this.pre=1)}const a={};if("svg"===t.name){if(this.xml>1)return void this.xml--;let e="";const i=s.style;return s.style="",s.xmlns="http://www.w3.org/2000/svg",function t(s){if("text"===s.type)return void(e+=s.text);const i=z.svgDict[s.name]||s.name;e+="<"+i;for(const n in s.attrs){const t=s.attrs[n];t&&(e+=` ${z.svgDict[n]||n}="${t}"`)}if(s.children){e+=">";for(let e=0;e<s.children.length;e++)t(s.children[e]);e+="</"+i+">"}else e+="/>"}(t),t.name="img",t.attrs={src:"data:image/svg+xml;utf8,"+e.replace(/#/g,"%23"),style:i,ignore:"T"},t.children=void 0,void(this.xml=!1)}if(s.align&&("table"===t.name?"center"===s.align?a["margin-inline-start"]=a["margin-inline-end"]="auto":a.float=s.align:a["text-align"]=s.align,s.align=void 0),s.dir&&(a.direction=s.dir,s.dir=void 0),"font"===t.name&&(s.color&&(a.color=s.color,s.color=void 0),s.face&&(a["font-family"]=s.face,s.face=void 0),s.size)){let t=parseInt(s.size);isNaN(t)||(t<1?t=1:t>7&&(t=7),a["font-size"]=["x-small","small","medium","large","x-large","xx-large","xxx-large"][t-1]),s.size=void 0}if((s.class||"").includes("align-center")&&(a["text-align"]="center"),Object.assign(a,this.parseStyle(t)),"table"!==t.name&&parseInt(a.width)>E&&(a["max-width"]="100%",a["box-sizing"]="border-box"),z.blockTags[t.name]?t.name="div":z.trustTags[t.name]||this.xml||(t.name="span"),"a"===t.name||"ad"===t.name||"iframe"===t.name)this.expose();else if("video"===t.name)(a.height||"").includes("auto")&&(a.height=void 0);else if("ul"!==t.name&&"ol"!==t.name||!t.c){if("table"===t.name){let i=parseFloat(s.cellpadding),n=parseFloat(s.cellspacing);const r=parseFloat(s.border),o=a["border-color"],l=a["border-style"];if(t.c&&(isNaN(i)&&(i=2),isNaN(n)&&(n=2)),r&&(s.style+=`;border:${r}px ${l||"solid"} ${o||"gray"}`),t.flag&&t.c){a.display="grid",n?(a["grid-gap"]=n+"px",a.padding=n+"px"):r&&(s.style+=";border-left:0;border-top:0");const h=[],c=[],d=[],p={};!function t(s){for(let e=0;e<s.length;e++)"tr"===s[e].name?c.push(s[e]):t(s[e].children||[])}(e);for(let t=1;t<=c.length;t++){let s=1;for(let e=0;e<c[t-1].children.length;e++){const a=c[t-1].children[e];if("td"===a.name||"th"===a.name){for(;p[t+"."+s];)s++;let e=a.attrs.style||"",c=e.indexOf("width")?e.indexOf(";width"):0;if(-1!==c){let t=e.indexOf(";",c+6);-1===t&&(t=e.length),a.attrs.colspan||(h[s]=e.substring(c?c+7:6,t)),e=e.substr(0,c)+e.substr(t)}if(e+=";display:flex",c=e.indexOf("vertical-align"),-1!==c){const t=e.substr(c+15,10);t.includes("middle")?e+=";align-items:center":t.includes("bottom")&&(e+=";align-items:flex-end")}else e+=";align-items:center";if(c=e.indexOf("text-align"),-1!==c){const t=e.substr(c+11,10);t.includes("center")?e+=";justify-content: center":t.includes("right")&&(e+=";justify-content: right")}if(e=(r?`;border:${r}px ${l||"solid"} ${o||"gray"}`+(n?"":";border-right:0;border-bottom:0"):"")+(i?`;padding:${i}px`:"")+";"+e,a.attrs.colspan&&(e+=`;grid-column-start:${s};grid-column-end:${s+parseInt(a.attrs.colspan)}`,a.attrs.rowspan||(e+=`;grid-row-start:${t};grid-row-end:${t+1}`),s+=parseInt(a.attrs.colspan)-1),a.attrs.rowspan){e+=`;grid-row-start:${t};grid-row-end:${t+parseInt(a.attrs.rowspan)}`,a.attrs.colspan||(e+=`;grid-column-start:${s};grid-column-end:${s+1}`);for(let e=1;e<a.attrs.rowspan;e++)for(let i=0;i<(a.attrs.colspan||1);i++)p[t+e+"."+(s-i)]=1}e&&(a.attrs.style=e),d.push(a),s++}}if(1===t){let t="";for(let e=1;e<s;e++)t+=(h[e]?h[e]:"auto")+" ";a["grid-template-columns"]=t}}t.children=d}else t.c&&(a.display="table"),isNaN(n)||(a["border-spacing"]=n+"px"),(r||i)&&function t(s){for(let e=0;e<s.length;e++){const n=s[e];"th"===n.name||"td"===n.name?(r&&(n.attrs.style=`border:${r}px ${l||"solid"} ${o||"gray"};${n.attrs.style||""}`),i&&(n.attrs.style=`padding:${i}px;${n.attrs.style||""}`)):n.children&&t(n.children)}}(e);if(this.options.scrollTable&&!(s.style||"").includes("inline")){const e=Object.assign({},t);t.name="div",t.attrs={style:"overflow:auto"},t.children=[e],s=e.attrs}}else if("td"!==t.name&&"th"!==t.name||!s.colspan&&!s.rowspan)if("ruby"===t.name){t.name="span";for(let t=0;t<e.length-1;t++)"text"===e[t].type&&"rt"===e[t+1].name&&(e[t]={name:"div",attrs:{style:"display:inline-block;text-align:center"},children:[{name:"div",attrs:{style:"font-size:50%;"+(e[t+1].attrs.style||"")},children:e[t+1].children},e[t]]},e.splice(t+1,1))}else t.c&&function(t){t.c=2;for(let s=t.children.length;s--;){const e=t.children[s];e.c&&"table"!==e.name||(t.c=1)}}(t);else for(let o=this.stack.length;o--;)if("table"===this.stack[o].name){this.stack[o].flag=1;break}}else{const t={a:"lower-alpha",A:"upper-alpha",i:"lower-roman",I:"upper-roman"};t[s.type]&&(s.style+=";list-style-type:"+t[s.type],s.type=void 0);for(let s=e.length;s--;)"li"===e[s].name&&(e[s].c=1)}if((a.display||"").includes("flex")&&!t.c)for(let o=e.length;o--;){const t=e[o];t.f&&(t.attrs.style=(t.attrs.style||"")+t.f,t.f=void 0)}const r=i&&((i.attrs.style||"").includes("flex")||(i.attrs.style||"").includes("grid"))&&!t.c;r&&(t.f=";max-width:100%"),e.length>=50&&t.c&&!(a.display||"").includes("flex")&&P(e);for(const o in a)if(a[o]){const e=`;${o}:${a[o].replace(" !important","")}`;r&&(o.includes("flex")&&"flex-direction"!==o||"align-self"===o||o.includes("grid")||"-"===a[o][0]||o.includes("width")&&e.includes("%"))?(t.f+=e,"width"===o&&(s.style+=";width:100%")):s.style+=e}s.style=s.style.substr(1)||void 0},U.prototype.onText=function(t){if(!this.pre){let s,e="";for(let i=0,n=t.length;i<n;i++)V[t[i]]?(" "!==e[e.length-1]&&(e+=" "),"\n"!==t[i]||s||(s=!0)):e+=t[i];if(" "===e){if(s)return;{const t=this.stack[this.stack.length-1];if(t&&"t"===t.name[0])return}}t=e}const s=Object.create(null);if(s.type="text",s.text=F(t),this.hook(s)){(this.stack.length?this.stack[this.stack.length-1].children:this.nodes).push(s)}},M.prototype.parse=function(t){this.content=t||"",this.i=0,this.start=0,this.state=this.text;for(let s=this.content.length;-1!==this.i&&this.i<s;)this.state()},M.prototype.checkClose=function(t){const s="/"===this.content[this.i];return!!(">"===this.content[this.i]||s&&">"===this.content[this.i+1])&&(t&&this.handler[t](this.content.substring(this.start,this.i)),this.i+=s?2:1,this.start=this.i,this.handler.onOpenTag(s),"script"===this.handler.tagName?(this.i=this.content.indexOf("</",this.i),-1!==this.i&&(this.i+=2,this.start=this.i),this.state=this.endTag):this.state=this.text,!0)},M.prototype.text=function(){if(this.i=this.content.indexOf("<",this.i),-1===this.i)return void(this.start<this.content.length&&this.handler.onText(this.content.substring(this.start,this.content.length)));const t=this.content[this.i+1];if(t>="a"&&t<="z"||t>="A"&&t<="Z")this.start!==this.i&&this.handler.onText(this.content.substring(this.start,this.i)),this.start=++this.i,this.state=this.tagName;else if("/"===t||"!"===t||"?"===t){this.start!==this.i&&this.handler.onText(this.content.substring(this.start,this.i));const s=this.content[this.i+2];if("/"===t&&(s>="a"&&s<="z"||s>="A"&&s<="Z"))return this.i+=2,this.start=this.i,void(this.state=this.endTag);let e="--\x3e";"!"===t&&"-"===this.content[this.i+2]&&"-"===this.content[this.i+3]||(e=">"),this.i=this.content.indexOf(e,this.i),-1!==this.i&&(this.i+=e.length,this.start=this.i)}else this.i++},M.prototype.tagName=function(){if(V[this.content[this.i]]){for(this.handler.onTagName(this.content.substring(this.start,this.i));V[this.content[++this.i]];);this.i<this.content.length&&!this.checkClose()&&(this.start=this.i,this.state=this.attrName)}else this.checkClose("onTagName")||this.i++},M.prototype.attrName=function(){let t=this.content[this.i];if(V[t]||"="===t){this.handler.onAttrName(this.content.substring(this.start,this.i));let s="="===t;const e=this.content.length;for(;++this.i<e;)if(t=this.content[this.i],!V[t]){if(this.checkClose())return;if(s)return this.start=this.i,void(this.state=this.attrVal);if("="!==this.content[this.i])return this.start=this.i,void(this.state=this.attrName);s=!0}}else this.checkClose("onAttrName")||this.i++},M.prototype.attrVal=function(){const t=this.content[this.i],s=this.content.length;if('"'===t||"'"===t){if(this.start=++this.i,this.i=this.content.indexOf(t,this.i),-1===this.i)return;this.handler.onAttrVal(this.content.substring(this.start,this.i))}else for(;this.i<s;this.i++){if(V[this.content[this.i]]){this.handler.onAttrVal(this.content.substring(this.start,this.i));break}if(this.checkClose("onAttrVal"))return}for(;V[this.content[++this.i]];);this.i<s&&!this.checkClose()&&(this.start=this.i,this.state=this.attrName)},M.prototype.endTag=function(){const t=this.content[this.i];if(V[t]||">"===t||"/"===t){if(this.handler.onCloseTag(this.content.substring(this.start,this.i)),">"!==t&&(this.i=this.content.indexOf(">",this.i),-1===this.i))return;this.start=++this.i,this.state=this.text}else this.i++};const Q=[];const W=S({name:"u-parse",data:()=>({nodes:[]}),props:{containerStyle:{type:String,default:""},content:{type:String,default:""},copyLink:{type:[Boolean,String],default:!0},domain:String,errorImg:{type:String,default:""},lazyLoad:{type:[Boolean,String],default:!1},loadingImg:{type:String,default:""},pauseVideo:{type:[Boolean,String],default:!0},previewImg:{type:[Boolean,String],default:!0},scrollTable:[Boolean,String],selectable:[Boolean,String],setTitle:{type:[Boolean,String],default:!0},showImgMenu:{type:[Boolean,String],default:!0},tagStyle:Object,useAnchor:[Boolean,Number]},emits:["load","ready","imgTap","linkTap","play","error"],components:{node:A},watch:{content(t){this.setContent(t)}},created(){this.plugins=[];for(let t=Q.length;t--;)this.plugins.push(new Q[t](this))},mounted(){this.content&&!this.nodes.length&&this.setContent(this.content)},beforeUnmount(){this._hook("onDetached")},methods:{in(t,s,e){t&&s&&e&&(this._in={page:t,selector:s,scrollTop:e})},navigateTo(t,s){return new Promise(((e,i)=>{if(!this.useAnchor)return void i(Error("Anchor is disabled"));s=s||parseInt(this.useAnchor)||0;const n=N().in(this._in?this._in.page:this).select((this._in?this._in.selector:"._root")+(t?` #${t}`:"")).boundingClientRect();this._in?n.select(this._in.selector).scrollOffset().select(this._in.selector).boundingClientRect():n.selectViewport().scrollOffset(),n.exec((t=>{if(!t[0])return void i(Error("Label not found"));const n=t[1].scrollTop+t[0].top-(t[2]?t[2].top:0)+s;this._in?this._in.page[this._in.scrollTop]=n:L({scrollTop:n,duration:300}),e()}))}))},getText(t){let s="";return function t(e){for(let i=0;i<e.length;i++){const n=e[i];if("text"===n.type)s+=n.text.replace(/&amp;/g,"&");else if("br"===n.name)s+="\n";else{const e="p"===n.name||"div"===n.name||"tr"===n.name||"li"===n.name||"h"===n.name[0]&&n.name[1]>"0"&&n.name[1]<"7";e&&s&&"\n"!==s[s.length-1]&&(s+="\n"),n.children&&t(n.children),e&&"\n"!==s[s.length-1]?s+="\n":"td"!==n.name&&"th"!==n.name||(s+="\t")}}}(t||this.nodes),s},getRect(){return new Promise(((t,s)=>{N().in(this).select("#_root").boundingClientRect().exec((e=>e[0]?t(e[0]):s(Error("Root label not found"))))}))},pauseMedia(){for(let t=(this._videos||[]).length;t--;)this._videos[t].pause()},setPlaybackRate(t){this.playbackRate=t;for(let s=(this._videos||[]).length;s--;)this._videos[s].playbackRate(t)},setContent(t,s){s&&this.imgList||(this.imgList=[]);const e=new U(this).parse(t);if(this.$set(this,"nodes",s?(this.nodes||[]).concat(e):e),this._videos=[],this.$nextTick((()=>{this._hook("onLoad"),this.$emit("load")})),this.lazyLoad||this.imgList._unloadimgs<this.imgList.length/2){let t=0;const s=e=>{e&&e.height||(e={}),e.height===t?this.$emit("ready",e):(t=e.height,setTimeout((()=>{this.getRect().then(s).catch(s)}),350))};this.getRect().then(s).catch(s)}else this.imgList._unloadimgs||this.getRect().then((t=>{this.$emit("ready",t)})).catch((()=>{this.$emit("ready",{})}))},_hook(t){for(let s=Q.length;s--;)this.plugins[s][t]&&this.plugins[s][t]()}}},[["render",function(t,s,e,i,n,h){const c=a("node"),d=v;return r(),o(d,{id:"_root",class:g((e.selectable?"_select ":"")+"_root"),style:m(e.containerStyle)},{default:l((()=>[n.nodes[0]?(r(),o(c,{key:1,childs:n.nodes,opts:[e.lazyLoad,e.loadingImg,e.errorImg,e.showImgMenu,e.selectable],name:"span"},null,8,["childs","opts"])):O(t.$slots,"default",{key:0},void 0,!0)])),_:3},8,["class","style"])}],["__scopeId","data-v-401f3692"]]);export{W as _};
