import{d as t,bj as l,m as e,a$ as s,j as o,r as a,U as n,O as c,u as r,o as i,c as u,w as p,b as y,n as d,R as x,f,y as v,z as k,A as g,V as h,ah as m,b5 as b,i as B,B as _,D as C,E as w,b6 as S}from"./index-7bf68536.js";import{u as F}from"./useLocation.2a69509a.js";import{_ as V}from"./_plugin-vue_export-helper.1b428a4d.js";const z=V(t({__name:"top-tabbar",props:{data:{type:Object,default:{}},titleColor:{type:String,default:"#606266"},customBack:{type:Function,default:null},scrollBool:{type:[String,Number],default:-1},isBack:{type:Boolean,default:!0},isFill:{type:Boolean,default:!0}},setup(t,{expose:V}){const z=t;l().platform;const T=e(),j=s(),A=o((()=>z.data)),I=o((()=>{if(z.data&&z.data.topStatusBar)return z.data.topStatusBar})),R=o((()=>{let t="";return z.isBack&&H.value?(t+="padding-left: 30rpx;","style-1"==I.value.style&&(t+="padding-right:80rpx;")):("style-1"==I.value.style&&(t+="padding-right: 30rpx;"),t+="padding-left: 30rpx;"),t})),$=o((()=>{let t="";return t+="font-size: 28rpx;",t+=`color: ${L.value};`,"style-1"==I.value.style&&(t+=`text-align: ${I.value.textAlign};`),t})),L=o((()=>{let t="";return t=1==z.scrollBool?I.value.rollTextColor:I.value.textColor,t})),G=o((()=>{let t="";return t=1==z.scrollBool?I.value.rollBgColor:I.value.bgColor,t}));let U=uni.getStorageSync("componentsScrollValGroup");if(U)U.TopTabbar=0,uni.setStorageSync("componentsScrollValGroup",U);else{let t={TopTabbar:0};uni.setStorageSync("componentsScrollValGroup",t)}const H=a(!1);let O=n();const P=()=>{"function"==typeof z.customBack?z.customBack():h()},D=o((()=>`calc(100vw - ${T.menuButtonInfo.right}px + ${T.menuButtonInfo.width}px + 10px)`)),E=a(0),N=S();let q=!1;I.value&&"style-4"==I.value.style&&(q=!0);const J=F(q);J.onLoad(),J.initFn(),c((()=>{m((()=>{b().in(N).select(".ns-navbar-wrap .u-navbar .content-wrap").boundingClientRect((t=>{E.value=t?t.height:0,j.topTabarHeight=E.value})).exec()})),O.length>1&&(H.value=!0),J.refreshLocationFn()}));return V({refresh:()=>{J.refreshLocationFn()}}),(l,e)=>{const s=B,o=_,a=C;return"decorate"!=r(j).mode&&r(I)?(i(),u(s,{key:0,class:x(["ns-navbar-wrap",r(I).style])},{default:p((()=>[y(s,{class:x(["u-navbar",{fixed:-1!=z.scrollBool,absolute:-1==z.scrollBool}]),style:d({backgroundColor:r(G)})},{default:p((()=>[y(s,{class:"navbar-inner",style:d({width:"100%",height:E.value+"px"})},{default:p((()=>["style-1"==r(I).style?(i(),u(s,{key:0,class:x(["content-wrap",[r(I).textAlign]]),style:d(r(R))},{default:p((()=>[t.isBack&&H.value?(i(),u(s,{key:0,class:"back-wrap -ml-[16rpx] text-[27px] nc-iconfont nc-icon-zuoV6xx",style:d({color:r(L)}),onClick:P},null,8,["style"])):f("v-if",!0),y(s,{class:"title-wrap",style:d(r($))},{default:p((()=>[v(k(r(A).title),1)])),_:1},8,["style"])])),_:1},8,["class","style"])):f("v-if",!0),"style-2"==r(I).style?(i(),u(s,{key:1,class:"content-wrap",style:d(r(R)),onClick:e[0]||(e[0]=t=>r(j).toRedirect(r(I).link))},{default:p((()=>[t.isBack&&H.value?(i(),u(s,{key:0,class:"back-wrap -ml-[16rpx] text-[27px] nc-iconfont nc-icon-zuoV6xx",style:d({color:r(L)}),onClick:P},null,8,["style"])):f("v-if",!0),y(s,{class:"title-wrap",style:d({color:r(I).textColor})},{default:p((()=>[y(s,null,{default:p((()=>[y(o,{src:r(w)(r(I).imgUrl),mode:"heightFix"},null,8,["src"])])),_:1}),y(s,{style:d({color:r(I).textColor})},{default:p((()=>[v(k(r(A).title),1)])),_:1},8,["style"])])),_:1},8,["style"])])),_:1},8,["style"])):f("v-if",!0),"style-3"==r(I).style?(i(),u(s,{key:2,style:d(r(R)),class:"content-wrap"},{default:p((()=>[t.isBack&&H.value?(i(),u(s,{key:0,class:"back-wrap -ml-[16rpx] text-[27px] nc-iconfont nc-icon-zuoV6xx",style:d({color:r(L)}),onClick:P},null,8,["style"])):f("v-if",!0),y(s,{class:"title-wrap",onClick:e[1]||(e[1]=t=>r(j).toRedirect(r(I).link))},{default:p((()=>[y(o,{src:r(w)(r(I).imgUrl),mode:"heightFix"},null,8,["src"])])),_:1}),y(s,{class:"search",onClick:e[2]||(e[2]=t=>r(j).toRedirect(r(I).link)),style:d({height:r(T).menuButtonInfo.height-2+"px",lineHeight:r(T).menuButtonInfo.height-2+"px"})},{default:p((()=>[y(a,{class:"nc-iconfont nc-icon-sousuo-duanV6xx1 text-[24rpx] absolute left-[20rpx]"}),y(a,{class:"text-[24rpx]"},{default:p((()=>[v(k(r(I).inputPlaceholder),1)])),_:1})])),_:1},8,["style"]),y(s,{style:d({width:r(D)})},null,8,["style"])])),_:1},8,["style"])):f("v-if",!0),"style-4"==r(I).style?(i(),u(s,{key:3,style:d(r(R)),class:"content-wrap"},{default:p((()=>[t.isBack&&H.value?(i(),u(s,{key:0,class:"back-wrap -ml-[16rpx] text-[27px] nc-iconfont nc-icon-zuoV6xx",style:d({color:r(L)}),onClick:P},null,8,["style"])):f("v-if",!0),y(a,{class:"nc-iconfont nc-icon-dizhiguanliV6xx text-[28rpx]",style:d({color:r(I).textColor})},null,8,["style"]),r(T).currShippingAddress?(i(),u(s,{key:1,class:"title-wrap",onClick:e[3]||(e[3]=g((t=>r(J).repositionFn()),["stop"])),style:d({color:r(I).textColor})},{default:p((()=>[v(k(r(T).currShippingAddress.community),1)])),_:1},8,["style"])):(i(),u(s,{key:2,class:"title-wrap",onClick:e[4]||(e[4]=g((t=>r(J).repositionFn()),["stop"])),style:d({color:r(I).textColor})},{default:p((()=>[v(k(r(T).defaultPositionAddress),1)])),_:1},8,["style"])),y(a,{class:"nc-iconfont nc-icon-youV6xx text-[26rpx]",onClick:e[5]||(e[5]=g((t=>r(J).repositionFn()),["stop"])),style:d({color:r(I).textColor})},null,8,["style"])])),_:1},8,["style"])):f("v-if",!0)])),_:1},8,["style"])])),_:1},8,["class","style"]),f(" 解决fixed定位后导航栏塌陷的问题 "),z.isFill?(i(),u(s,{key:0,class:"u-navbar-placeholder",style:d({width:"100%",paddingTop:E.value+"px"})},null,8,["style"])):f("v-if",!0)])),_:1},8,["class"])):f("v-if",!0)}}}),[["__scopeId","data-v-49e0452d"]]);export{z as _};
