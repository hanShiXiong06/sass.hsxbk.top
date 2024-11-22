import{d as e,j as t,r as a,p as r,ax as l,ay as s,o as p,c as x,w as i,P as n,b as c,n as o,u as d,y as u,z as f,Q as g,a7 as m,f as b,a as _,i as h,B as v,D as y,C as k,g as w,h as j,E as F,G as C}from"./index-7bf68536.js";import{_ as E}from"./loading-page.vue_vue_type_script_setup_true_lang.124ad65f.js";import{t as z}from"./topTabbar.f3f9eebd.js";import{_ as I}from"./_plugin-vue_export-helper.1b428a4d.js";import"./u-loading-page.566c330a.js";import"./u-loading-icon.b37701e7.js";import"./u-transition.cdf87992.js";const R=I(e({__name:"point",setup(e){z().setTopTabbarParam({title:"我的积分"});let I={};const R=t((()=>({backgroundImage:"url("+F("static/resource/images/member/point/point_bg.png")+") ",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"bottom"}))),S=t((()=>Object.keys(I).length?C(Number(I.height))+C(I.top)+50+"rpx;":"50rpx")),B=a({}),P=a([]),T=a(!0);r((async()=>{let e=await l(),t=await s();B.value=e.data,P.value=t.data,T.value=!1}));const D=(e="",t={})=>{_({url:e,param:t})};return(e,t)=>{const a=h,r=v,l=y,s=k,_=w(j("loading-page"),E);return p(),x(a,{class:"bg-[var(--page-bg-color)] min-h-[100vh]",style:o(e.themeColor())},{default:i((()=>[T.value?b("v-if",!0):(p(),n(g,{key:0},[c(a,{class:"w-full bg-[var(--page-bg-color)]"},{default:i((()=>[c(a,{class:"pb-[210rpx] relative",style:o(d(R))},{default:i((()=>[c(a,{class:"text-[70rpx] leading-[90rpx] text-[#fff] pl-[60rpx] font-500 pt-[77rpx] price-font"},{default:i((()=>[u(f(B.value.point||0),1)])),_:1}),c(a,{class:"flex items-center pl-[60rpx]"},{default:i((()=>[c(r,{class:"h-[36rpx] w-[36rpx] -mb-[4rpx]",src:d(F)("static/resource/images/member/point/icon.png"),mode:"heightFix"},null,8,["src"]),c(a,{class:"text-[26rpx] leading-[36rpx] text-[#fff] ml-[10rpx]"},{default:i((()=>[u("我的积分")])),_:1})])),_:1}),c(a,{class:"side-tab",style:o({top:d(S)}),onClick:t[0]||(t[0]=e=>D("/app/pages/member/point_detail"))},{default:i((()=>[c(l,{class:"nc-iconfont nc-icon-jifenduihuanV6xx1 icon"}),c(l,{class:"desc"},{default:i((()=>[u("积分明细")])),_:1})])),_:1},8,["style"])])),_:1},8,["style"]),c(a,{class:"sidebar-margin flex flex-col mt-[-178rpx] relative"},{default:i((()=>[c(a,{class:"w-[322rpx] h-[80rpx] text-[30rpx] text-[#333] font-500 box-border pl-[30rpx] pt-[var(--pad-top-m)] rounded-tl-[var(--rounded-big)] overflow-hidden mb-[-2rpx]",style:o({backgroundImage:"url("+d(F)("static/resource/images/member/point/top_bg.png")+") ",backgroundSize:"100% 100%",backgroundRepeat:"no-repeat"})},{default:i((()=>[c(l,{class:"leading-[42rpx]"},{default:i((()=>[u("积分详情")])),_:1})])),_:1},8,["style"]),c(a,{class:"flex items-center px-[30rpx] rounded-[var(--rounded-big)] !rounded-tl-none bg-[#fff] h-[173rpx] box-border"},{default:i((()=>[c(a,{class:"w-[196rpx] flex-shrink-0 text-center"},{default:i((()=>[c(a,{class:"text-[#333] text-[42rpx] leading-[54rpx] price-font"},{default:i((()=>[u(f(B.value.point_get||0),1)])),_:1}),c(a,{class:"mt-[8rpx] text-[var(--text-color-light6)] text-[26rpx] leading-[36rpx] font-400"},{default:i((()=>[u("累计积分")])),_:1})])),_:1}),c(a,{class:"w-[1rpx] h-[50rpx] flex-shrink-0 bg-[var(--temp-bg)] mx-[10rpx]"}),c(a,{class:"w-[196rpx] flex-shrink-0 text-center"},{default:i((()=>[c(a,{class:"text-[#333] text-[42rpx] leading-[54rpx] price-font"},{default:i((()=>[u(f(B.value.use||0),1)])),_:1}),c(a,{class:"mt-[8rpx] text-[var(--text-color-light6)] text-[26rpx] leading-[36rpx] font-400"},{default:i((()=>[u("累计消费")])),_:1})])),_:1}),c(a,{class:"w-[1rpx] h-[50rpx] flex-shrink-0 bg-[var(--temp-bg)] mx-[10rpx]"}),c(a,{class:"w-[196rpx] min-w-[209.33rpx] flex-shrink-0 text-center"},{default:i((()=>[c(a,{class:"text-[#333] text-[42rpx] leading-[54rpx] price-font"},{default:i((()=>[u(f(B.value.point||0),1)])),_:1}),c(a,{class:"mt-[8rpx] text-[var(--text-color-light6)] text-[26rpx] leading-[36rpx] font-400"},{default:i((()=>[u("可用积分")])),_:1})])),_:1})])),_:1})])),_:1})])),_:1}),c(a,{class:"mt-[var(--top-m)] sidebar-margin card-template"},{default:i((()=>[c(a,{class:"title"},{default:i((()=>[u("热门活动")])),_:1}),c(a,{class:"mt-[60rpx] flex justify-between"},{default:i((()=>[c(a,{class:"w-[200rpx] h-[253rpx] box-border pt-[69rpx] relative text-center",style:o({backgroundImage:"url("+d(F)("static/resource/images/member/point/activity_1.png")+") ",backgroundSize:"100% 100%",backgroundRepeat:"no-repeat"})},{default:i((()=>[c(r,{class:"h-[78rpx] w-[78rpx] absolute left-[65rpx] top-[-21rpx]",src:d(F)("static/resource/images/member/point/activity_icon_1.png"),mode:"heightFix"},null,8,["src"]),c(a,{class:"text-[28rpx] leading-[39rpx] text-[#333]"},{default:i((()=>[u("每日赚积分")])),_:1}),c(a,{class:"mt-[10rpx] text-[24rpx] leading-[34rpx] text-[var(--text-color-light6)]"},{default:i((()=>[u("每日签到")])),_:1}),c(a,{class:"w-full flex justify-center mt-[20rpx]"},{default:i((()=>[c(s,{class:"h-[54rpx] !m-0 rounded-[100rpx] text-[24rpx] flex-center !text-[#fff]",shape:"circle",style:o({background:"linear-gradient( 94deg, #FB7939 0%, #FE120E 99%), #EF000C"}),onClick:t[1]||(t[1]=e=>D("/app/pages/member/sign_in"))},{default:i((()=>[u("去签到")])),_:1},8,["style"])])),_:1})])),_:1},8,["style"]),c(a,{class:"w-[200rpx] h-[253rpx] box-border pt-[69rpx] relative text-center",style:o({backgroundImage:"url("+d(F)("static/resource/images/member/point/activity_2.png")+") ",backgroundSize:"100% 100%",backgroundRepeat:"no-repeat"})},{default:i((()=>[c(r,{class:"h-[78rpx] w-[78rpx] absolute left-[65rpx] top-[-21rpx]",src:d(F)("static/resource/images/member/point/activity_icon_2.png"),mode:"heightFix"},null,8,["src"]),c(a,{class:"text-[28rpx] leading-[39rpx] text-[#333]"},{default:i((()=>[u("积分当钱花")])),_:1}),c(a,{class:"mt-[10rpx] text-[24rpx] leading-[34rpx] text-[var(--text-color-light6)]"},{default:i((()=>[u("抵扣部分费用")])),_:1}),c(a,{class:"w-full flex justify-center mt-[20rpx]"},{default:i((()=>[c(s,{class:"h-[54rpx] !m-0 rounded-[100rpx] text-[24rpx] flex-center !text-[#fff]",shape:"circle",style:o({background:"linear-gradient( 94deg, #FB7939 0%, #FE120E 99%), #EF000C"}),onClick:t[2]||(t[2]=e=>D("/addon/shop/pages/point/index"))},{default:i((()=>[u("去兑换")])),_:1},8,["style"])])),_:1})])),_:1},8,["style"]),c(a,{class:"w-[200rpx] h-[253rpx] box-border pt-[69rpx] relative text-center",style:o({backgroundImage:"url("+d(F)("static/resource/images/member/point/activity_3.png")+") ",backgroundSize:"100% 100%",backgroundRepeat:"no-repeat"})},{default:i((()=>[c(r,{class:"h-[78rpx] w-[78rpx] absolute left-[65rpx] top-[-21rpx]",src:d(F)("static/resource/images/member/point/icon.png"),mode:"heightFix"},null,8,["src"]),c(a,{class:"text-[28rpx] leading-[39rpx] text-[#333]"},{default:i((()=>[u("购物返积分")])),_:1}),c(a,{class:"mt-[10rpx] text-[24rpx] leading-[34rpx] text-[var(--text-color-light6)]"},{default:i((()=>[u("下单得积分")])),_:1}),c(a,{class:"w-full flex justify-center mt-[20rpx]"},{default:i((()=>[c(s,{class:"h-[54rpx] !m-0 rounded-[100rpx] text-[24rpx] flex-center !text-[#fff]",shape:"circle",style:o({background:"linear-gradient( 94deg, #FB7939 0%, #FE120E 99%), #EF000C"}),onClick:t[3]||(t[3]=e=>D("/addon/shop/pages/goods/list"))},{default:i((()=>[u("去逛逛")])),_:1},8,["style"])])),_:1})])),_:1},8,["style"])])),_:1})])),_:1}),P.value.length?(p(),x(a,{key:0,class:"mt-[var(--top-m)] sidebar-margin card-template"},{default:i((()=>[c(a,{class:"title"},{default:i((()=>[u("做任务领积分")])),_:1}),(p(!0),n(g,null,m(P.value,((e,t)=>(p(),x(a,{class:"flex items-center justify-between mt-[30rpx]"},{default:i((()=>[c(a,{class:"flex items-center flex-1"},{default:i((()=>[c(r,{class:"h-[80rpx] w-[80rpx]",src:d(F)(e.icon||""),mode:"heightFix"},null,8,["src"]),c(a,{class:"flex flex-col ml-[20rpx]"},{default:i((()=>[c(l,{class:"text-[28rpx]"},{default:i((()=>[u(f(e.title),1)])),_:2},1024),c(a,{class:"mt-[14rpx] text-[var(--text-color-light6)] text-[24rpx] font-400"},{default:i((()=>[u(f(e.desc),1)])),_:2},1024)])),_:2},1024)])),_:2},1024),e.button?(p(),x(s,{key:0,class:"h-[54rpx] !m-0 rounded-[40rpx] text-[24rpx] flex-center !text-[#fff] primary-btn-bg",shape:"circle",onClick:t=>D(e.button.wap_redirect)},{default:i((()=>[u(f(e.button.text),1)])),_:2},1032,["onClick"])):b("v-if",!0)])),_:2},1024)))),256))])),_:1})):b("v-if",!0)],64)),c(_,{loading:T.value},null,8,["loading"])])),_:1},8,["style"])}}}),[["__scopeId","data-v-1b8501ee"]]);export{R as default};