import{_ as e}from"./loading-page.vue_vue_type_script_setup_true_lang.cb99ee23.js";import{d as l,l as a,r as t,x as s,s as r,j as u,ab as n,ac as i,$ as x,o as c,c as o,w as p,b as f,u as v,n as d,f as _,O as g,a6 as m,P as b,y as h,g as y,h as w,i as k,B as j,ad as C,a5 as F,D as z,E,Q as T,z as X,a as $,ae as I,af as O}from"./index-2882a2d8.js";import{t as P}from"./topTabbar.ab70b119.js";import{_ as Z}from"./_plugin-vue_export-helper.1b428a4d.js";import"./u-loading-page.8280c7ab.js";import"./u-loading-icon.a37f7e61.js";/* empty css                                                                       */import"./u-transition.4448d2e5.js";const B=Z(l({__name:"level",setup(l){const Z=a(),B=t(!1),D=t([]),Q=t([]),q=t(0),A=t(0);P().setTopTabbarParam({title:"会员等级"}),s((()=>{r()&&(N(),M())}));const G=u((()=>Z.info)),H=e=>{let l=e,a=100;return D.value[l]&&D.value[l].growth&&(a=G.value.growth/D.value[l].growth*100),a},J=t(""),K=t(""),L=t(""),M=()=>{B.value=!0,n().then((e=>{D.value=e.data||[];let l=!0;G.value&&D.value&&D.value.length&&D.value.forEach(((e,a)=>{e.level_id==G.value.member_level&&(l=!1,q.value=a,A.value=q.value,U(a))})),l&&U(0),D.value&&D.value.length>=5?(J.value="width:115rpx;",K.value="max-width:115rpx;",L.value="width:460rpx;transform: translateX(-235rpx);"):D.value&&4==D.value.length?(J.value="width:144rpx;",K.value="max-width:144rpx;",L.value="width:436rpx;transform: translateX(-218rpx);"):D.value&&3==D.value.length?(J.value="width:192rpx;",K.value="max-width:192rpx;",L.value="width:388rpx;transform: translateX(-194rpx);"):D.value&&2==D.value.length?(J.value="width:289rpx;",K.value="max-width:289rpx;",L.value="width:289rpx;transform: translateX(-144rpx);"):(K.value="max-width:578rpx;",J.value="width:100%;"),B.value=!1})).catch((()=>{B.value=!1}))},N=()=>{i().then((e=>{Q.value=e.data}))},R=e=>{q.value=e.detail.current,A.value=q.value,U(e.detail.current)},S=t({}),U=e=>{let l=x(D.value[e]);if(l&&l.level_benefits&&(l.benefits_arr=[],Object.values(l.level_benefits).forEach(((e,a,t)=>{e.content&&l.benefits_arr.push(e.content)}))),l&&l.level_gifts){l.gifts_arr=[];for(let e in l.level_gifts)l.level_gifts[e].content&&(l.level_gifts[e].content.forEach(((l,a,t)=>{t[a].type=e})),l.gifts_arr=l.gifts_arr.concat(l.level_gifts[e].content))}S.value=l};return(l,a)=>{const t=y(w("loading-page"),e),s=k,r=j,u=I,n=O,i=C,x=F,P=z;return c(),o(s,{style:d(l.themeColor()),class:"bg-[var(--page-bg-color)] min-h-[100vh] overflow-hidden"},{default:p((()=>[f(t,{loading:B.value&&v(G)},null,8,["loading"]),!B.value&&v(G)&&D.value&&D.value.length?(c(),o(s,{key:0,class:"min-h-[100vh] overflow-hidden flex flex-col",style:d({backgroundColor:S.value.level_style.bg_color})},{default:p((()=>[f(s,null,{default:p((()=>[f(s,{class:"pt-[40rpx] mb-[40rpx]"},{default:p((()=>[_(" 轮播图 "),f(s,{class:"relative"},{default:p((()=>[f(i,{class:"swiper ns-indicator-dots relative",style:{height:"300rpx"},onChange:R,current:q.value,"previous-margin":"30rpx","next-margin":"30rpx"},{default:p((()=>[(c(!0),g(b,null,m(D.value,((e,l)=>(c(),o(n,{class:"swiper-item",key:e.id},{default:p((()=>[f(s,{class:"h-[300rpx] relative"},{default:p((()=>[v(G).member_level==e.level_id&&q.value==l?(c(),o(s,{key:0,class:"text-[24rpx] absolute top-0 left-0 z-10 h-[66rpx] !bg-contain w-[150rpx] flex pt-[12rpx] pl-[16rpx] box-border",style:d({background:"url("+v(E)(S.value.level_tag)+") no-repeat",color:S.value.level_style.level_color})},{default:p((()=>[h(" 当前等级 ")])),_:1},8,["style"])):_("v-if",!0),f(s,{class:T(["absolute top-0 left-0 right-0 bottom-0 z-20 px-[30rpx] pt-[68rpx] box-border",{"px-[50rpx]":q.value!=l}])},{default:p((()=>[f(s,{class:"flex items-center leading-[50rpx] mb-[90rpx]"},{default:p((()=>[f(r,{class:"h-[32rpx] w-[34rpx] align-middle",src:v(E)(e.level_icon?e.level_icon:""),mode:"aspectFill"},null,8,["src"]),f(s,{class:"text-[36rpx] font-bold ml-[10rpx] max-w-[340rpx] truncate",style:d({color:S.value.level_style.level_color})},{default:p((()=>[h(X(e.level_name),1)])),_:2},1032,["style"])])),_:2},1024),f(s,{class:"flex items-baseline",style:d({color:S.value.level_style.level_color})},{default:p((()=>[f(s,{class:"text-[30rpx] font-500 leading-[38rpx]"},{default:p((()=>[h(X(v(G).growth),1)])),_:1}),f(s,{class:"text-[24rpx] leading-[34rpx]"},{default:p((()=>[h("/"+X(D.value[l].growth)+"成长值",1)])),_:2},1024)])),_:2},1032,["style"]),f(s,{class:"flex justify-between items-center mt-[10rpx]"},{default:p((()=>[f(s,{class:"flex flex-col flex-1"},{default:p((()=>[f(s,null,{default:p((()=>[f(u,{percent:H(l),"border-radius":100,activeColor:S.value.level_style.level_color,backgroundColor:"#fff","stroke-width":"4"},null,8,["percent","activeColor"])])),_:2},1024)])),_:2},1024)])),_:2},1024)])),_:2},1032,["class"]),f(s,{class:"relatvie h-full w-full"},{default:p((()=>[f(r,{class:T(["h-full w-full",{"swiper-animation":q.value!=l}]),src:v(E)(e.level_bg),"show-menu-by-longpress":!0},null,8,["src","class"])])),_:2},1024)])),_:2},1024)])),_:2},1024)))),128))])),_:1},8,["current"])])),_:1})])),_:1}),f(s,{class:"mb-[30rpx] relative"},{default:p((()=>[f(s,{class:"bg-[#fff] opacity-15 h-[2rpx] w-full absolute top-[15rpx]"}),f(s,{style:d(L.value),class:"bg-[#fff] opacity-60 h-[2rpx] absolute top-[15rpx] z-4 left-[50%]"},null,8,["style"]),f(s,{class:"mx-[86rpx]"},{default:p((()=>[f(x,{"scroll-x":!0,"scroll-with-animation":"","scroll-into-view":"id"+(A.value?A.value-1:0)},{default:p((()=>[f(s,{class:"flex flex-nowrap py-[10rpx]"},{default:p((()=>[(c(!0),g(b,null,m(D.value,((e,l)=>(c(),o(s,{key:e.id,style:d(J.value),class:"flex-shrink-0 flex flex-col items-center justify-center",onClick:e=>(e=>{A.value=e,q.value=e,U(e)})(l),id:"id"+l},{default:p((()=>[f(s,{class:T(["w-[14rpx] h-[14rpx] level-class",{"level-select":A.value==l}])},null,8,["class"]),f(s,{style:d(K.value),class:T(["text-[22rpx] text-[#aaa] mt-[16rpx] truncate",{"!text-[#fff]":A.value==l}])},{default:p((()=>[h(X(e.level_name),1)])),_:2},1032,["style","class"])])),_:2},1032,["style","onClick","id"])))),128))])),_:1})])),_:1},8,["scroll-into-view"])])),_:1})])),_:1}),S.value.benefits_arr&&S.value.benefits_arr.length?(c(),o(s,{key:0,class:"flex mx-[var(--sidebar-m)] pt-[30rpx] pb-[46rpx] items-center flex-col level_benefits",style:d({backgroundImage:"url("+v(E)(S.value.member_bg)+")"})},{default:p((()=>[f(s,{class:"flex items-center justify-center"},{default:p((()=>[f(P,{class:"text-[#fff] text-[30rpx] font-500 leading-[44rpx]"},{default:p((()=>[h("会员权益")])),_:1})])),_:1}),f(s,{class:"flex flex-wrap w-[690rpx] mt-[40rpx] justify-between"},{default:p((()=>[(c(!0),g(b,null,m(S.value.benefits_arr,((e,l)=>(c(),o(s,{class:"flex flex-col w-[25%] items-center",key:l},{default:p((()=>[f(r,{class:"h-[88rpx] w-[88rpx]",src:v(E)(e.icon),mode:"heightFix"},null,8,["src"]),f(P,{class:"text-[rgba(255,255,255,0.9)] mt-[16rpx] text-[24rpx] leading-[34rpx]"},{default:p((()=>[h(X(e.title),1)])),_:2},1024)])),_:2},1024)))),128))])),_:1})])),_:1},8,["style"])):_("v-if",!0)])),_:1}),f(s,{class:"flex-1 rounded-t-[40rpx] px-[30rpx] pt-[var(--pad-top-m)] mt-[-10rpx] relative tab-bar",style:d({background:`linear-gradient( 180deg, ${S.value.level_style.gift} 0%, #FFFFFF 20%)`})},{default:p((()=>[_(" 升级礼包 "),S.value.gifts_arr&&S.value.gifts_arr.length?(c(),o(s,{key:0},{default:p((()=>[f(s,{class:"pb-[30rpx] flex items-center"},{default:p((()=>[f(P,{class:"text-[30rpx] text-[#333] font-500 leading-[44rpx]"},{default:p((()=>[h("升级礼包")])),_:1})])),_:1}),f(s,{class:"flex flex-wrap"},{default:p((()=>[(c(!0),g(b,null,m(S.value.gifts_arr,((e,l)=>(c(),o(s,{key:l,class:T(["mb-[20rpx]",{"mr-[21rpx]":(l+1)%3!=0}])},{default:p((()=>[f(s,{class:"relative box-border mb-[16rpx] w-[216rpx] h-[180rpx] !bg-contain",style:d({background:"url("+v(E)(e.background)+") no-repeat"})},null,8,["style"]),f(s,{class:"text-center font-500 text-[#333] text-[28rpx] truncate leading-[40rpx] max-w-[216rpx]"},{default:p((()=>[h(X(e.text),1)])),_:2},1024)])),_:2},1032,["class"])))),128))])),_:1})])),_:1})):_("v-if",!0),_(" 升级技巧 "),Q.value&&Q.value.length?(c(),o(s,{key:1},{default:p((()=>[f(s,{class:"pt-[30rpx] pb-[30rpx] flex items-center"},{default:p((()=>[f(P,{class:"text-[30rpx] text-[#333] font-500 leading-[44rpx]"},{default:p((()=>[h("升级技巧")])),_:1})])),_:1}),f(s,{class:"pb-[30rpx]"},{default:p((()=>[(c(!0),g(b,null,m(Q.value,((e,l)=>(c(),o(s,{class:"flex items-center mb-[34rpx]",key:l},{default:p((()=>[f(r,{class:"h-[100rpx] w-[100rpx] mr-[20rpx]",src:v(E)(e.icon),mode:"heightFix"},null,8,["src"]),f(s,{class:"flex flex-col"},{default:p((()=>[f(s,{class:"text-[28rpx] leading-[38rpx] mb-[8rpx]"},{default:p((()=>[h(X(e.title),1)])),_:2},1024),f(s,{class:"text-[24rpx] text-[var(--text-color-light9)] leading-[34rpx]"},{default:p((()=>[h(X(e.desc),1)])),_:2},1024)])),_:2},1024),f(P,{class:"skill-btn",onClick:l=>v($)({url:e.button.wap_redirect,param:{},mode:"redirectTo"})},{default:p((()=>[h(X(e.button.text),1)])),_:2},1032,["onClick"])])),_:2},1024)))),128))])),_:1})])),_:1})):_("v-if",!0)])),_:1},8,["style"])])),_:1},8,["style"])):_("v-if",!0),B.value||D.value&&D.value.length?_("v-if",!0):(c(),o(s,{key:1,class:"empty-page"},{default:p((()=>[f(r,{class:"img",src:v(E)("static/resource/images/empty.png"),mode:"aspectFill"},null,8,["src"]),f(P,{class:"desc"},{default:p((()=>[h("暂无会员等级")])),_:1})])),_:1}))])),_:1},8,["style"])}}}),[["__scopeId","data-v-e2264374"]]);export{B as default};