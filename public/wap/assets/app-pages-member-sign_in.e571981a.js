import{d as e,N as t,r as a,p as r,aV as l,aW as s,aX as c,l as n,j as u,o as x,c as o,w as p,b as i,y as f,f as d,n as g,u as m,z as h,U as b,ad as _,V as v,aY as y,D as w,i as k,B as M,C as D,g as C,h as j,ac as F,E as Y,W as $,aZ as I,a_ as z,G as L,a$ as V,aA as O,_ as W}from"./index-71c7df08.js";import{_ as N}from"./loading-page.vue_vue_type_script_setup_true_lang.c7dc2256.js";import{t as S}from"./topTabbar.cb42d19f.js";const A=W(e({__name:"sign_in",setup(e){const W=t({dataCount:[],weekCount:[],curYear:0,curMonth:0,curDate:0,curWeek:0,signInList:[],packList:[]}),A=t({weekDay:0,week:0}),E=a(!1),T=a(!1),B=a({}),q=a(!1),R=a({}),P=a(!1),G=a(!1),J=a({}),U=a(!1);let X=null,Z=null;r((()=>{let e=new Date;W.curYear=e.getFullYear(),W.curMonth=e.getMonth(),W.curDate=e.getDate(),W.curWeek=e.getDay(),0==W.curWeek&&(W.curWeek=7),X=l(W.curYear),Z=l(W.curMonth),Q(),ee(),K({year:W.curYear,month:W.curMonth+1}),H()}));const H=()=>{E.value=!0,s().then((e=>{B.value=e.data,B.value.is_use||(fe=ie.setTopTabbarParam({title:"我的签到",topStatusBar:{textColor:"#303133",bgColor:"#fff"}})),E.value=!1}))},K=e=>{c(e).then((e=>{W.signInList=[],W.packList=[],W.packList=e.data.period,e.data.length&&(W.signInList=e.data.days.map((e=>Number(e)))),U.value=!0}))},Q=()=>{let e=new Date(W.curYear,W.curMonth+1,0).getDate(),t=new Date(W.curYear,W.curMonth,1).getDay();W.dataCount=[];for(let a=1;a<e+t;a++){let e=a-t+1;W.dataCount.push(e)}},ee=()=>{let e=`${W.curYear}-${W.curMonth+1>10?W.curMonth+1:"0"+(W.curMonth+1)}-${W.curDate>10?W.curDate:"0"+W.curDate}`;for(let t=W.curWeek-1;t>=0;t--){const a=new Date(e).getDate()-t;W.weekCount.push(a)}for(let t=1;t<=7-W.curWeek;t++){const a=new Date(e).getDate()+t;W.weekCount.push(a)}},te=()=>{let e=(new Date).getMonth();W.curMonth==e||(W.curMonth=(new Date).getMonth(),W.curYear=(new Date).getFullYear(),K({year:W.curYear,month:W.curMonth+1})),T.value=!T.value},ae=e=>{W.dataCount=[],"prev"==e?(W.curMonth--,W.curMonth<0&&(W.curMonth=11,W.curYear--),A.weekDay=1,U.value=!1):(W.curMonth++,W.curMonth>11&&(W.curMonth=0,W.curYear++),A.weekDay=1,U.value=!1);let t={year:W.curYear,month:W.curMonth+1};K(t),Q()},re=n(),le=()=>{y().then((e=>{if(Object.values(e.data).length){R.value=e.data;let t=0;Object.values(R.value.awards).forEach(((e,a)=>{e.content||t++})),t==Object.values(R.value.awards).length&&(R.value.info=""),K({year:W.curYear,month:W.curMonth+1}),H(),re.getMemberInfo(),P.value=!0}}))},se=a(null),ce=e=>{let{curYear:t,curMonth:a}=I(W),r=`${t.value}-${a.value+1<10?"0"+(a.value+1):a.value+1}-${e<10?"0"+e:e}`;if(!W.packList.some((e=>e.day==r)))return;se.value=e;let l={year:W.curYear,month:W.curMonth+1,day:e};z(l).then((e=>{"[]"!=JSON.stringify(e.data)&&(J.value=e.data,G.value=!0)}))},ne=e=>W.signInList.includes(e),ue=e=>e>0&&e<=W.dataCount.length&&(e==W.curDate&&X==W.curYear&&Z==W.curMonth||void 0),xe=e=>{let{curYear:t,curMonth:a}=I(W),r=`${t.value}-${a.value+1<10?"0"+(a.value+1):a.value+1}-${e<10?"0"+e:e}`;return W.packList.some((e=>e.day==r&&e.award))},oe=e=>e>0?e:"";let pe={};const ie=S();let fe=ie.setTopTabbarParam({title:"我的签到"});return u((()=>L(Number(pe.height)+pe.top+8)+382+"rpx;")),u((()=>L(Number(pe.height)+pe.top+8)+50+"rpx;")),(e,t)=>{const a=w,r=k,l=M,s=D,c=C(j("u-empty"),V),n=F,u=C(j("u-popup"),O),y=C(j("loading-page"),N);return x(),o(r,{style:g(e.themeColor())},{default:p((()=>[Object.values(B.value).length?(x(),o(r,{key:0,class:"bg-[#F6F6F6] min-h-screen overflow-hidden"},{default:p((()=>[B.value.is_use?(x(),o(r,{key:0},{default:p((()=>[i(r,{class:"sigin-header"},{default:p((()=>[B.value.rule_explain?(x(),o(r,{key:0,class:"side-tab",onClick:t[0]||(t[0]=e=>q.value=!0)},{default:p((()=>[i(a,{class:"nc-iconfont nc-icon-a-meiriqiandaoV6xx-36 icon"}),i(a,{class:"desc"},{default:p((()=>[f("签到规则")])),_:1})])),_:1})):d("v-if",!0),i(r,{class:"h-[382rpx]",style:g({backgroundImage:"url("+m(Y)("static/resource/images/app/sigin_h5.png")+")",backgroundSize:"100%",backgroundRepeat:"no-repeat"})},null,8,["style"])])),_:1}),i(r,null,{default:p((()=>[i(r,{class:"sidebar-margin bg-[#fff] rounded-[16rpx] -mt-[85rpx]"},{default:p((()=>[i(r,{class:"card-template"},{default:p((()=>[T.value?(x(),o(r,{key:0,class:"mb-[30rpx] flex justify-between items-center"},{default:p((()=>[i(r,{class:"flex items-center"},{default:p((()=>[i(a,{class:"iconfont iconshangyibu text-[#303133] text-[20rpx]",onClick:t[1]||(t[1]=e=>ae("prev"))}),i(r,{class:"mx-[24rpx] text-[30rpx] font-500 text-[#303133] leading-[45rpx]"},{default:p((()=>[f(h(W.curYear)+"年"+h(W.curMonth+1)+"月",1)])),_:1}),i(a,{class:"iconfont iconxiayibu1 text-[#303133] text-[20rpx]",onClick:t[2]||(t[2]=e=>ae("next"))})])),_:1}),i(r,{class:"flex items-center"},{default:p((()=>[i(a,{class:"nc-iconfont nc-icon-shangV6xx-1 text-[var(--text-color-light9)] pt-[4rpx] px-[6rpx] text-[24rpx]",onClick:te})])),_:1})])),_:1})):(x(),o(r,{key:1,class:"mb-[30rpx] flex justify-between items-center"},{default:p((()=>[i(r,{class:"font-500 text-[30rpx]"},{default:p((()=>[f("已连续签到"),i(a,{class:"text-[#EF000C] mx-[4rpx]"},{default:p((()=>[f(h(B.value.days),1)])),_:1}),f("天")])),_:1}),T.value?d("v-if",!0):(x(),o(a,{key:0,class:"nc-iconfont nc-icon-xiaV6xx pt-[4rpx] px-[6rpx] text-[var(--text-color-light9)] text-[24rpx]",onClick:t[3]||(t[3]=e=>T.value=!T.value)}))])),_:1})),i(r,{class:"relative z-9 bg-[#fff] rounded-[18rpx]"},{default:p((()=>[i(r,null,{default:p((()=>[i(r,{class:"flex items-center justify-between text-[var(--text-color-light9)] text-[24rpx] mb-[16rpx]"},{default:p((()=>[i(a,{class:"w-[14.28%] leading-[36rpx] text-center"},{default:p((()=>[f("周一")])),_:1}),i(a,{class:"w-[14.28%] leading-[36rpx] text-center"},{default:p((()=>[f("周二")])),_:1}),i(a,{class:"w-[14.28%] leading-[36rpx] text-center"},{default:p((()=>[f("周三")])),_:1}),i(a,{class:"w-[14.28%] leading-[36rpx] text-center"},{default:p((()=>[f("周四")])),_:1}),i(a,{class:"w-[14.28%] leading-[36rpx] text-center"},{default:p((()=>[f("周五")])),_:1}),i(a,{class:"w-[14.28%] leading-[36rpx] text-center"},{default:p((()=>[f("周六")])),_:1}),i(a,{class:"w-[14.28%] leading-[36rpx] text-center"},{default:p((()=>[f("周日")])),_:1})])),_:1}),T.value?(x(),o(r,{key:1,class:"flex flex-wrap items-center justify-start"},{default:p((()=>[(x(!0),b(v,null,_(W.dataCount,((e,t)=>(x(),o(r,{class:"w-[14.28%] flex flex-col justify-center items-center mb-[30rpx]"},{default:p((()=>[oe(e)?(x(),o(r,{key:0,class:$(["w-[74rpx] h-[92rpx] bg-[#F6FAFF] text-[var(--text-color-light6)] box-border py-[10rpx] rounded-[8rpx] flex flex-col items-center",{"sigin-bg !text-[#fff]":ne(e)&&U.value,"!bg-[#FDFDFD] border-[1rpx] border-[#F0F4FA] border-solid":!ne(e)&&e<W.curDate&&W.curMonth+1==(new Date).getMonth()+1&&W.curYear==(new Date).getFullYear(),"mb-[20rpx]":ue(e),"mb-[30rpx]":!ue(e)}]),onClick:t=>ce(e)},{default:p((()=>[i(a,{class:"text-[24rpx] leading-[28rpx] mb-[6rpx]"},{default:p((()=>[f(h(oe(e)),1)])),_:2},1024),oe(e)?(x(),o(r,{key:0,class:"flex items-center justufy-center"},{default:p((()=>[xe(e)?(x(),o(l,{key:0,src:m(Y)("static/resource/images/app/package.png"),class:"w-[40rpx] h-[40rpx]"},null,8,["src"])):ne(e)&&U.value?(x(),o(l,{key:1,src:m(Y)("static/resource/images/app/hassigin.png"),class:"w-[34rpx] h-[34rpx]"},null,8,["src"])):(x(),b(v,{key:2},[!ne(e)&&e<W.curDate&&W.curMonth+1==(new Date).getMonth()+1?(x(),o(l,{key:0,src:m(Y)("static/resource/images/app/nosigin.png"),class:"w-[34rpx] h-[34rpx]"},null,8,["src"])):(x(),o(l,{key:1,src:m(Y)("static/resource/images/app/nosigin1.png"),class:"w-[34rpx] h-[34rpx]"},null,8,["src"]))],64))])),_:2},1024)):d("v-if",!0)])),_:2},1032,["class","onClick"])):d("v-if",!0),ue(e)?(x(),o(r,{key:1,class:"w-[10rpx] h-[10rpx] rounded-[50%] bg-[#FF5527]"})):d("v-if",!0)])),_:2},1024)))),256))])),_:1})):(x(),o(r,{key:0,class:"flex flex-wrap items-center justify-start"},{default:p((()=>[(x(!0),b(v,null,_(W.weekCount,((e,t)=>(x(),o(r,{key:t,class:"w-[14.28%] flex flex-col justify-center items-center"},{default:p((()=>[oe(e)?(x(),o(r,{key:0,class:$(["w-[74rpx] h-[92rpx] bg-[#f4f4f4] text-[var(--text-color-light6)] box-border py-[10rpx] rounded-[8rpx] flex flex-col items-center",{"sigin-bg !text-[#fff]":ne(e),"!bg-[#f9f9f9] border-[1rpx] !text-[var(--text-color-light9)] border-[#f5f5f5] border-solid":!ne(e)&&e<W.curDate&&W.curMonth+1==(new Date).getMonth()+1,"mb-[20rpx]":ue(e),"mb-[30rpx]":!ue(e)}]),onClick:t=>ce(e)},{default:p((()=>[i(a,{class:"text-[24rpx] leading-[28rpx] mb-[6rpx]"},{default:p((()=>[f(h(oe(e)),1)])),_:2},1024),oe(e)?(x(),o(r,{key:0,class:"flex items-center justufy-center"},{default:p((()=>[xe(e)?(x(),o(l,{key:0,src:m(Y)("static/resource/images/app/package.png"),class:"w-[40rpx] h-[40rpx]"},null,8,["src"])):ne(e)?(x(),o(l,{key:1,src:m(Y)("static/resource/images/app/hassigin.png"),class:"w-[34rpx] h-[34rpx]"},null,8,["src"])):(x(),b(v,{key:2},[!ne(e)&&e<W.curDate&&W.curMonth+1==(new Date).getMonth()+1?(x(),o(l,{key:0,src:m(Y)("static/resource/images/app/nosigin.png"),class:"w-[34rpx] h-[34rpx]"},null,8,["src"])):(x(),o(l,{key:1,src:m(Y)("static/resource/images/app/nosigin1.png"),class:"w-[34rpx] h-[34rpx]"},null,8,["src"]))],64))])),_:2},1024)):d("v-if",!0)])),_:2},1032,["class","onClick"])):d("v-if",!0),ue(e)?(x(),o(r,{key:1,class:"w-[10rpx] h-[10rpx] rounded-[50%] bg-[#FF5527]"})):d("v-if",!0)])),_:2},1024)))),128))])),_:1})),W.curMonth+1==(new Date).getMonth()+1&&W.curYear==(new Date).getFullYear()?(x(),o(r,{key:2,class:"mt-[40rpx] flex justify-center"},{default:p((()=>[B.value.is_sign?(x(),o(s,{key:1,class:"rounded-[40rpx] flex-center !bg-transparent text-[26rpx] font-500",style:g({width:"490rpx",height:"80rpx",border:"none",color:"#fff",backgroundImage:`url(${m(Y)("static/resource/images/app/button_bg1.png")})`,backgroundSize:"100%",backgroundRepeat:"no-repeat"}),shape:"circle"},{default:p((()=>[i(a,{class:"nc-iconfont nc-icon-a-meiriqiandaoV6xx-36 text-[26rpx] text-[#fff] mr-[8rpx]"}),i(a,null,{default:p((()=>[f("已签到")])),_:1})])),_:1},8,["style"])):(x(),o(s,{key:0,class:"rounded-[40rpx] flex-center !bg-transparent text-[26rpx] font-500",style:g({width:"490rpx",height:"80rpx",border:"none",color:"#fff",backgroundImage:`url(${m(Y)("static/resource/images/app/button_bg2.png")})`,backgroundSize:"100%",backgroundRepeat:"no-repeat"}),shape:"circle",onClick:le},{default:p((()=>[i(a,{class:"nc-iconfont nc-icon-a-meiriqiandaoV6xx-36 text-[26rpx] text-[#fff] mr-[8rpx]"}),i(a,null,{default:p((()=>[f("立即签到")])),_:1})])),_:1},8,["style"]))])),_:1})):d("v-if",!0)])),_:1})])),_:1})])),_:1})])),_:1}),B.value&&B.value.continue_award&&Object.keys(B.value.continue_award).length?(x(),o(r,{key:0,class:"mt-[20rpx] mb-[30rpx] sidebar-margin card-template"},{default:p((()=>[i(r,{class:"mb-[30rpx] flex items-center"},{default:p((()=>[i(r,{class:"font-500 text-[30rpx] text-[#303133]"},{default:p((()=>[f("签到奖励")])),_:1}),d(' <view class="text-[var(--text-color-light6)] text-[26rpx] leading-[30rpx]">\r\n                                <text>签到记录</text>\r\n                                <image :src="img(\'static/resource/images/app/more.png\')" class="w-[12rpx] h-[18rpx] ml-[8rpx]"></image>\r\n                            </view> ')])),_:1}),i(r,null,{default:p((()=>[(x(!0),b(v,null,_(B.value.continue_award,((e,t)=>(x(),o(r,{key:t,class:$(["flex items-center border-box",{"mt-[40rpx]":t}])},{default:p((()=>[(t+1)%4==1?(x(),o(r,{key:0,class:"w-[90rpx] h-[90rpx] rounded-[50%] bg-[#E7F6FF] flex items-center justify-center flex-shrink-0"},{default:p((()=>[i(l,{src:m(Y)("static/resource/images/app/icon_02.png"),class:"w-[40rpx] h-[40rpx]"},null,8,["src"])])),_:1})):(t+1)%4==2?(x(),o(r,{key:1,class:"w-[90rpx] h-[90rpx] rounded-[50%] bg-[#ffefef] flex items-center justify-center flex-shrink-0"},{default:p((()=>[i(l,{src:m(Y)("static/resource/images/app/icon_03.png"),class:"w-[40rpx] h-[40rpx]"},null,8,["src"])])),_:1})):(t+1)%4==3?(x(),o(r,{key:2,class:"w-[90rpx] h-[90rpx] rounded-[50%] bg-[#d3feeb] flex items-center justify-center flex-shrink-0"},{default:p((()=>[i(l,{src:m(Y)("static/resource/images/app/icon_04.png"),class:"w-[40rpx] h-[40rpx]"},null,8,["src"])])),_:1})):(t+1)%4==0?(x(),o(r,{key:3,class:"w-[90rpx] h-[90rpx] rounded-[50%] bg-[#ffeddd] flex items-center justify-center flex-shrink-0"},{default:p((()=>[i(l,{src:m(Y)("static/resource/images/app/icon_05.png"),class:"w-[40rpx] h-[40rpx]"},null,8,["src"])])),_:1})):d("v-if",!0),i(r,{class:"flex-1 mx-[20rpx]"},{default:p((()=>[i(r,{class:"font-400 text-[28rpx] text-[#303133] leading-[38rpx] mb-[10rpx]"},{default:p((()=>[f("连续签到"+h(e.continue_sign)+"天",1)])),_:2},1024),e.gift?(x(),o(r,{key:0,class:"flex flex-wrap"},{default:p((()=>[i(r,{class:"flex"},{default:p((()=>[i(l,{src:m(Y)(e.gift.total.icon),class:"w-[30rpx] h-[30rpx] flex-shrink-0"},null,8,["src"]),i(r,{class:"text-[24rpx] ml-[8rpx] text-[#FF9000] leading-[34rpx] max-w-[330rpx]"},{default:p((()=>[f(h(e.gift.total.text),1)])),_:2},1024)])),_:2},1024)])),_:2},1024)):d("v-if",!0)])),_:2},1024),i(r,{class:"flex-shrink-0"},{default:p((()=>[Number(B.value.days)<Number(e.continue_sign)?(x(),o(r,{key:0,class:"w-[130rpx] h-[54rpx] text-center bg-primary-light rounded-[28rpx] text-[22rpx] text-[var(--primary-color)] flex-center font-500"},{default:p((()=>[f("待完成")])),_:1})):(x(),o(r,{key:1,class:"primary-btn-bg w-[130rpx] h-[54rpx] text-center rounded-[27rpx] text-[22rpx] text-[#fff] flex-center font-500"},{default:p((()=>[f("已完成")])),_:1}))])),_:2},1024)])),_:2},1032,["class"])))),128))])),_:1})])),_:1})):d("v-if",!0)])),_:1})])),_:1})):(x(),o(r,{key:1,class:"h-[100vh] w-[100vw] flex justify-center items-center"},{default:p((()=>[i(c,{text:"签到未开启",width:"347rpx",height:"265rpx",icon:m(Y)("static/resource/images/system/empty.png")},null,8,["icon"])])),_:1})),d(" 签到规则"),i(u,{show:q.value,round:16,mode:"bottom",onClose:t[5]||(t[5]=e=>q.value=!1)},{default:p((()=>[i(r,{class:"popup-common"},{default:p((()=>[i(r,{class:"title"},{default:p((()=>[f("签到规则")])),_:1}),i(n,{"scroll-y":!0,class:"px-[30rpx] box-border h-[360rpx] overflow-auto"},{default:p((()=>[(x(!0),b(v,null,_(B.value.rule_explain.split("\n"),(e=>(x(),o(r,{class:"text-[28rpx] leading-[40rpx] mb-[20rpx]"},{default:p((()=>[f(h(e),1)])),_:2},1024)))),256))])),_:1}),i(r,{class:"btn-wrap"},{default:p((()=>[i(s,{class:"primary-btn-bg btn",onClick:t[4]||(t[4]=e=>q.value=!1)},{default:p((()=>[f("知道了")])),_:1})])),_:1})])),_:1})])),_:1},8,["show"]),d(" 签到奖励 "),i(u,{show:P.value,class:"award-popup overflow-hidden",customStyle:{backgroundColor:"transparent"},onClose:t[8]||(t[8]=e=>P.value=!1),mode:"center",round:"var(--rounded-big)",safeAreaInsetBottom:!1},{default:p((()=>[Object.values(R.value).length?(x(),o(r,{key:0,class:"w-[550rpx] -mt-[124rpx]"},{default:p((()=>[i(r,{class:"flex justify-center"},{default:p((()=>[i(l,{src:m(Y)("static/resource/images/app/award.png"),class:"w-[484rpx] h-[480rpx] z-10",mode:"aspectFill"},null,8,["src"])])),_:1}),i(r,{class:"-mt-[265rpx] bg-award rounded-[40rpx] pt-[100rpx] pb-[50rpx] mb-[50rpx] relative"},{default:p((()=>[i(r,{class:"px-[32rpx]"},{default:p((()=>[i(r,{class:"text-[36rpx] text-[#EF000C] font-500 mb-[10rpx] text-center"},{default:p((()=>[f(h(R.value.title),1)])),_:1}),R.value.info?(x(),o(r,{key:0,class:"text-[24rpx] text-[#333] leading-[34rpx] text-center mb-[60rpx]"},{default:p((()=>[f(h(R.value.info),1)])),_:1})):d("v-if",!0),i(r,{class:"px-[68rpx] mb-[100rpx]"},{default:p((()=>[(x(!0),b(v,null,_(R.value.awards,((e,t)=>(x(),b(v,null,[e.content?(x(!0),b(v,{key:0},_(e.content,((e,t)=>(x(),o(r,{class:"flex items-center mb-[30rpx]"},{default:p((()=>[i(l,{src:m(Y)(e.icon),class:"w-[42rpx] h-[42rpx]"},null,8,["src"]),i(r,{class:"ml-[20rpx] text-[28rpx] text-[#303133] leading-[38rpx]"},{default:p((()=>[f(h(e.text),1)])),_:2},1024)])),_:2},1024)))),256)):d("v-if",!0)],64)))),256))])),_:1}),i(r,{class:"flex justify-center relative z-30"},{default:p((()=>[i(r,{class:"w-[370rpx] h-[80rpx] primary-btn-bg font-500 rounded-[100rpx] text-[#ffffff] text-center leading-[80rpx] text-[26rpx]",onClick:t[6]||(t[6]=e=>P.value=!1)},{default:p((()=>[f("我知道了")])),_:1})])),_:1})])),_:1})])),_:1}),i(r,{class:"flex justify-center"},{default:p((()=>[i(a,{class:"nc-iconfont nc-icon-cuohaoV6xx1 text-[#fff] text-[50rpx]",onClick:t[7]||(t[7]=e=>P.value=!1)})])),_:1})])),_:1})):d("v-if",!0)])),_:1},8,["show"]),d(" 查看当日或连续签到奖励 "),i(u,{show:G.value,class:"award-popup overflow-hidden",customStyle:{backgroundColor:"transparent"},onClose:t[11]||(t[11]=e=>G.value=!1),mode:"center",round:"var(--rounded-big)",safeAreaInsetBottom:!1},{default:p((()=>[Object.values(J.value).length?(x(),o(r,{key:0,class:"w-[550rpx] -mt-[124rpx]"},{default:p((()=>[i(r,{class:"flex justify-center"},{default:p((()=>[i(l,{src:m(Y)("static/resource/images/app/award.png"),class:"w-[484rpx] h-[480rpx] z-10",mode:"aspectFill"},null,8,["src"])])),_:1}),i(r,{class:"-mt-[265rpx] bg-award rounded-[40rpx] pt-[100rpx] pb-[50rpx] mb-[50rpx] relative"},{default:p((()=>[i(r,{class:"px-[32rpx]"},{default:p((()=>[i(r,{class:"text-[36rpx] text-[#303133] font-500 mb-[10rpx] text-center relative z-20"},{default:p((()=>[f(h(J.value.title),1)])),_:1}),i(r,{class:"text-[24rpx] text-[#333] leading-[34rpx] text-center mb-[60rpx]"},{default:p((()=>[f(h(J.value.info),1)])),_:1}),i(r,{class:"px-[68rpx] mb-[100rpx]"},{default:p((()=>[(x(!0),b(v,null,_(J.value.awards,((e,t)=>(x(),b(v,null,[e.content?(x(!0),b(v,{key:0},_(e.content,((e,t)=>(x(),o(r,{class:"flex items-center mb-[32rpx]",key:t},{default:p((()=>[i(l,{src:m(Y)(e.icon),class:"w-[42rpx] h-[42rpx]"},null,8,["src"]),i(r,{class:"ml-[20rpx] text-[28rpx] text-[#303133] leading-[38rpx]"},{default:p((()=>[f(h(e.text),1)])),_:2},1024)])),_:2},1024)))),128)):d("v-if",!0)],64)))),256))])),_:1}),i(r,{class:"flex justify-center relative z-30"},{default:p((()=>[i(r,{class:"w-[370rpx] h-[80rpx] border-[2rpx] text-[var(--primary-color)] border-solid rounded-[40rpx] border-[var(--primary-color)] text-center flex-center text-[26rpx] box-border",onClick:t[9]||(t[9]=e=>G.value=!1)},{default:p((()=>[f("我知道了")])),_:1})])),_:1})])),_:1})])),_:1}),i(r,{class:"flex justify-center"},{default:p((()=>[i(a,{class:"nc-iconfont nc-icon-cuohaoV6xx1 text-[#fff] text-[50rpx]",onClick:t[10]||(t[10]=e=>G.value=!1)})])),_:1})])),_:1})):d("v-if",!0)])),_:1},8,["show"])])),_:1})):d("v-if",!0),i(y,{loading:E.value},null,8,["loading"])])),_:1},8,["style"])}}}),[["__scopeId","data-v-94c39734"]]);export{A as default};
