import{d as e,q as t,r as a,j as r,aK as l,aL as s,aM as n,m as c,p as u,o as x,c as p,w as o,b as i,y as f,f as d,n as g,u as m,z as h,I as b,J as _,K as y,aN as v,D as w,i as k,Q as F,E as M,g as j,h as C,a2 as D,l as Y,L as z,aO as E,aP as I,a9 as L}from"./index-d8a8f699.js";import{_ as $}from"./u-empty.41eb000a.js";import{_ as S}from"./u-popup.0d48946e.js";import{_ as O}from"./u-loading-page.c740ef13.js";import{t as N}from"./topTabbar.a37f79d9.js";import{_ as V}from"./_plugin-vue_export-helper.1b428a4d.js";import"./u-icon.5ba98c98.js";import"./u-transition.db07fff7.js";import"./u-safe-bottom.a4431b09.js";import"./u-loading-icon.6808ae8c.js";const W=V(e({__name:"sign_in",setup(e){const V=t({dataCount:[],weekCount:[],curYear:0,curMonth:0,curDate:0,curWeek:0,signInList:[],packList:[]}),W=t({weekDay:0,week:0}),A=a(!1),T=a(!1),q=a({}),B=a(!1),J=a({}),P=a(!1),R=a(!1),H=a({}),K=a(!1);let Q=null,U=null;r((()=>{let e=new Date;V.curYear=e.getFullYear(),V.curMonth=e.getMonth(),V.curDate=e.getDate(),V.curWeek=e.getDay(),0==V.curWeek&&(V.curWeek=7),Q=l(V.curYear),U=l(V.curMonth),G(),ee(),Z({year:V.curYear,month:V.curMonth+1}),X()}));const X=()=>{A.value=!0,s().then((e=>{q.value=e.data,q.value.is_use||(fe=ie.setTopTabbarParam({title:"我的签到",topStatusBar:{textColor:"#333",bgColor:"#fff"}})),A.value=!1}))},Z=e=>{n(e).then((e=>{V.signInList=[],V.packList=[],V.packList=e.data.period,e.data.length&&(V.signInList=e.data.days.map((e=>Number(e)))),K.value=!0}))},G=()=>{let e=new Date(V.curYear,V.curMonth+1,0).getDate(),t=new Date(V.curYear,V.curMonth,1).getDay();V.dataCount=[];for(let a=1;a<e+t;a++){let e=a-t+1;V.dataCount.push(e)}},ee=()=>{let e=`${V.curYear}-${V.curMonth+1>10?V.curMonth+1:"0"+(V.curMonth+1)}-${V.curDate>10?V.curDate:"0"+V.curDate}`;for(let t=V.curWeek-1;t>=0;t--){const a=new Date(e).getDate()-t;V.weekCount.push(a)}for(let t=1;t<=7-V.curWeek;t++){const a=new Date(e).getDate()+t;V.weekCount.push(a)}},te=()=>{let e=(new Date).getMonth();V.curMonth==e||(V.curMonth=(new Date).getMonth(),V.curYear=(new Date).getFullYear(),Z({year:V.curYear,month:V.curMonth+1})),T.value=!T.value},ae=e=>{V.dataCount=[],"prev"==e?(V.curMonth--,V.curMonth<0&&(V.curMonth=11,V.curYear--),W.weekDay=1,K.value=!1):(V.curMonth++,V.curMonth>11&&(V.curMonth=0,V.curYear++),W.weekDay=1,K.value=!1);let t={year:V.curYear,month:V.curMonth+1};Z(t),G()},re=c(),le=()=>{v().then((e=>{if(Object.values(e.data).length){J.value=e.data;let t=0;Object.values(J.value.awards).forEach(((e,a)=>{e.content||t++})),t==Object.values(J.value.awards).length&&(J.value.info=""),Z({year:V.curYear,month:V.curMonth+1}),X(),re.getMemberInfo(),P.value=!0}}))},se=a(null),ne=e=>{let{curYear:t,curMonth:a}=E(V),r=`${t.value}-${a.value+1<10?"0"+(a.value+1):a.value+1}-${e<10?"0"+e:e}`;if(!V.packList.some((e=>e.day==r)))return;se.value=e;let l={year:V.curYear,month:V.curMonth+1,day:e};I(l).then((e=>{"[]"!=JSON.stringify(e.data)&&(H.value=e.data,R.value=!0)}))},ce=e=>V.signInList.includes(e),ue=e=>e>0&&e<=V.dataCount.length&&(e==V.curDate&&Q==V.curYear&&U==V.curMonth||void 0),xe=e=>{let{curYear:t,curMonth:a}=E(V),r=`${t.value}-${a.value+1<10?"0"+(a.value+1):a.value+1}-${e<10?"0"+e:e}`;return V.packList.some((e=>e.day==r&&e.award))},pe=e=>e>0?e:"";let oe={};const ie=N();let fe=ie.setTopTabbarParam({title:"我的签到"});return u((()=>L(Number(oe.height)+oe.top+8)+382+"rpx;")),u((()=>L(Number(oe.height)+oe.top+8)+38+"rpx;")),(e,t)=>{const a=w,r=k,l=F,s=M,n=j(C("u-empty"),$),c=D,u=j(C("u-popup"),S),v=j(C("u-loading-page"),O);return x(),p(r,{style:g(e.themeColor())},{default:o((()=>[Object.values(q.value).length?(x(),p(r,{key:0,class:"bg-[#F6F6F6] min-h-screen overflow-hidden"},{default:o((()=>[q.value.is_use?(x(),p(r,{key:0},{default:o((()=>[i(r,{class:"sigin-header"},{default:o((()=>[q.value.rule_explain?(x(),p(r,{key:0,class:"flex items-center absolute top-[44rpx] right-0 px-[14rpx] bg-color rounded-l-[35rpx] text-[#fff] text-[24rpx] h-[40rpx] z-10",onClick:t[0]||(t[0]=e=>B.value=!0)},{default:o((()=>[i(a,{class:"nc-iconfont nc-icon-meiriqiandaoV6xx text-[28rpx] text-[#fff] mr-[6rpx]"}),i(a,{class:"text-[24rpx]"},{default:o((()=>[f("签到规则")])),_:1})])),_:1})):d("v-if",!0),i(r,{class:"h-[382rpx]",style:g({backgroundImage:"url("+m(Y)("static/resource/images/app/sigin_h5.png")+")",backgroundSize:"100%",backgroundRepeat:"no-repeat"})},null,8,["style"])])),_:1}),i(r,null,{default:o((()=>[i(r,{class:"sidebar-marign bg-[#fff] rounded-[16rpx] -mt-[85rpx]"},{default:o((()=>[i(r,{class:"card-template"},{default:o((()=>[T.value?(x(),p(r,{key:0,class:"mb-[30rpx] flex justify-between items-center"},{default:o((()=>[i(r,{class:"flex items-center"},{default:o((()=>[i(a,{class:"iconfont iconshangyibu text-[#333] text-[24rpx]",onClick:t[1]||(t[1]=e=>ae("prev"))}),i(r,{class:"mx-[30rpx] font-bold text-[32rpx] text-[#333] leading-[45rpx]"},{default:o((()=>[f(h(V.curYear)+"年"+h(V.curMonth+1)+"月",1)])),_:1}),i(a,{class:"iconfont iconxiayibu1 text-[#333] text-[24rpx]",onClick:t[2]||(t[2]=e=>ae("next"))})])),_:1}),i(r,{class:"flex items-center"},{default:o((()=>[i(a,{class:"nc-iconfont nc-icon-shangV6xx-1 text-[#626779] text-[26rpx]",onClick:te})])),_:1})])),_:1})):(x(),p(r,{key:1,class:"mb-[30rpx] flex justify-between items-center"},{default:o((()=>[i(r,{class:"flex items-center"},{default:o((()=>[i(r,{class:"font-500 text-[32rpx] text-[#333] leading-[45rpx]"},{default:o((()=>[f("已连续签到"),i(a,{class:"text-[#EF000C] mx-[4rpx]"},{default:o((()=>[f(h(q.value.days),1)])),_:1}),f("天")])),_:1})])),_:1}),T.value?d("v-if",!0):(x(),p(a,{key:0,class:"nc-iconfont nc-icon-xiaV6xx text-[#626779] text-[26rpx]",onClick:t[3]||(t[3]=e=>T.value=!T.value)}))])),_:1})),i(r,{class:"relative z-9 bg-[#fff] rounded-[18rpx]"},{default:o((()=>[i(r,null,{default:o((()=>[i(r,{class:"flex items-center justify-between text-[#626779] text-[24rpx] mb-[16rpx]"},{default:o((()=>[i(a,{class:"w-[14.28%] leading-[36rpx] text-center"},{default:o((()=>[f("周一")])),_:1}),i(a,{class:"w-[14.28%] leading-[36rpx] text-center"},{default:o((()=>[f("周二")])),_:1}),i(a,{class:"w-[14.28%] leading-[36rpx] text-center"},{default:o((()=>[f("周三")])),_:1}),i(a,{class:"w-[14.28%] leading-[36rpx] text-center"},{default:o((()=>[f("周四")])),_:1}),i(a,{class:"w-[14.28%] leading-[36rpx] text-center"},{default:o((()=>[f("周五")])),_:1}),i(a,{class:"w-[14.28%] leading-[36rpx] text-center"},{default:o((()=>[f("周六")])),_:1}),i(a,{class:"w-[14.28%] leading-[36rpx] text-center"},{default:o((()=>[f("周日")])),_:1})])),_:1}),T.value?(x(),p(r,{key:1,class:"flex flex-wrap items-center justify-start"},{default:o((()=>[(x(!0),b(y,null,_(V.dataCount,((e,t)=>(x(),p(r,{class:"w-[14.28%] flex flex-col justify-center items-center mb-[30rpx]"},{default:o((()=>[pe(e)?(x(),p(r,{key:0,class:z(["w-[74rpx] h-[92rpx] bg-[#F6FAFF] text-[#626779] box-border py-[10rpx] rounded-[8rpx] flex flex-col items-center",{"sigin-bg !text-[#fff]":ce(e)&&K.value,"!bg-[#FDFDFD] border-[1rpx] border-[#F0F4FA] border-solid":!ce(e)&&e<V.curDate&&V.curMonth+1==(new Date).getMonth()+1&&V.curYear==(new Date).getFullYear(),"mb-[20rpx]":ue(e),"mb-[30rpx]":!ue(e)}]),onClick:t=>ne(e)},{default:o((()=>[i(a,{class:"text-[24rpx] leading-[28rpx] mb-[6rpx]"},{default:o((()=>[f(h(pe(e)),1)])),_:2},1024),pe(e)?(x(),p(r,{key:0,class:"flex items-center justufy-center"},{default:o((()=>[xe(e)?(x(),p(l,{key:0,src:m(Y)("static/resource/images/app/package.png"),class:"w-[40rpx] h-[40rpx]"},null,8,["src"])):ce(e)&&K.value?(x(),p(l,{key:1,src:m(Y)("static/resource/images/app/hassigin.png"),class:"w-[34rpx] h-[34rpx]"},null,8,["src"])):(x(),b(y,{key:2},[!ce(e)&&e<V.curDate&&V.curMonth+1==(new Date).getMonth()+1?(x(),p(l,{key:0,src:m(Y)("static/resource/images/app/nosigin.png"),class:"w-[34rpx] h-[34rpx]"},null,8,["src"])):(x(),p(l,{key:1,src:m(Y)("static/resource/images/app/nosigin1.png"),class:"w-[34rpx] h-[34rpx]"},null,8,["src"]))],64))])),_:2},1024)):d("v-if",!0)])),_:2},1032,["class","onClick"])):d("v-if",!0),ue(e)?(x(),p(r,{key:1,class:"w-[10rpx] h-[10rpx] rounded-[50%] bg-[#FF5527]"})):d("v-if",!0)])),_:2},1024)))),256))])),_:1})):(x(),p(r,{key:0,class:"flex flex-wrap items-center justify-start"},{default:o((()=>[(x(!0),b(y,null,_(V.weekCount,((e,t)=>(x(),p(r,{key:t,class:"w-[14.28%] flex flex-col justify-center items-center"},{default:o((()=>[pe(e)?(x(),p(r,{key:0,class:z(["w-[74rpx] h-[92rpx] bg-[#F1F2F5] text-[#626779] box-border py-[10rpx] rounded-[8rpx] flex flex-col items-center",{"sigin-bg !text-[#fff]":ce(e),"!bg-[#F6FAFF] border-[1rpx] border-[#F0F4FA] border-solid":!ce(e)&&e<V.curDate&&V.curMonth+1==(new Date).getMonth()+1,"mb-[20rpx]":ue(e),"mb-[30rpx]":!ue(e)}]),onClick:t=>ne(e)},{default:o((()=>[i(a,{class:"text-[24rpx] leading-[28rpx] mb-[6rpx]"},{default:o((()=>[f(h(pe(e)),1)])),_:2},1024),pe(e)?(x(),p(r,{key:0,class:"flex items-center justufy-center"},{default:o((()=>[xe(e)?(x(),p(l,{key:0,src:m(Y)("static/resource/images/app/package.png"),class:"w-[40rpx] h-[40rpx]"},null,8,["src"])):ce(e)?(x(),p(l,{key:1,src:m(Y)("static/resource/images/app/hassigin.png"),class:"w-[34rpx] h-[34rpx]"},null,8,["src"])):(x(),b(y,{key:2},[!ce(e)&&e<V.curDate&&V.curMonth+1==(new Date).getMonth()+1?(x(),p(l,{key:0,src:m(Y)("static/resource/images/app/nosigin.png"),class:"w-[34rpx] h-[34rpx]"},null,8,["src"])):(x(),p(l,{key:1,src:m(Y)("static/resource/images/app/nosigin1.png"),class:"w-[34rpx] h-[34rpx]"},null,8,["src"]))],64))])),_:2},1024)):d("v-if",!0)])),_:2},1032,["class","onClick"])):d("v-if",!0),ue(e)?(x(),p(r,{key:1,class:"w-[10rpx] h-[10rpx] rounded-[50%] bg-[#FF5527]"})):d("v-if",!0)])),_:2},1024)))),128))])),_:1})),V.curMonth+1==(new Date).getMonth()+1&&V.curYear==(new Date).getFullYear()?(x(),p(r,{key:2,class:"mt-[40rpx] flex justify-center"},{default:o((()=>[q.value.is_sign?(x(),p(s,{key:1,class:"rounded-[40rpx] !bg-transparent",style:g({width:"490rpx",height:"88rpx",border:"none",color:"#fff",fontSize:"32rpx",lineHeight:"84rpx",backgroundImage:`url(${m(Y)("static/resource/images/app/button_bg1.png")})`,backgroundSize:"100%",backgroundRepeat:"no-repeat"}),shape:"circle"},{default:o((()=>[i(a,{class:"nc-iconfont nc-icon-meiriqiandaoV6xx text-[32rpx] text-[#fff] mr-[8rpx]"}),i(a,null,{default:o((()=>[f("已签到")])),_:1})])),_:1},8,["style"])):(x(),p(s,{key:0,class:"rounded-[40rpx] !bg-transparent",style:g({width:"490rpx",height:"88rpx",border:"none",color:"#fff",fontSize:"32rpx",lineHeight:"84rpx",backgroundImage:`url(${m(Y)("static/resource/images/app/button_bg2.png")})`,backgroundSize:"100%",backgroundRepeat:"no-repeat"}),shape:"circle",onClick:le},{default:o((()=>[i(a,{class:"nc-iconfont nc-icon-meiriqiandaoV6xx text-[32rpx] text-[#fff] mr-[8rpx]"}),i(a,null,{default:o((()=>[f("立即签到")])),_:1})])),_:1},8,["style"]))])),_:1})):d("v-if",!0)])),_:1})])),_:1})])),_:1})])),_:1}),q.value&&q.value.continue_award&&Object.keys(q.value.continue_award).length?(x(),p(r,{key:0,class:"mt-[20rpx] mb-[30rpx] sidebar-marign card-template"},{default:o((()=>[i(r,{class:"mb-[30rpx] flex items-center"},{default:o((()=>[i(r,{class:"font-500 text-[32rpx] text-[#333] leading-[44rpx]"},{default:o((()=>[f("签到奖励")])),_:1}),d(' <view class="text-[#666] text-[26rpx] leading-[30rpx]">\r\n                                <text>签到记录</text>\r\n                                <image :src="img(\'static/resource/images/app/more.png\')" class="w-[12rpx] h-[18rpx] ml-[8rpx]"></image>\r\n                            </view> ')])),_:1}),i(r,null,{default:o((()=>[(x(!0),b(y,null,_(q.value.continue_award,((e,t)=>(x(),p(r,{key:t,class:z(["flex items-center border-box",{"mt-[40rpx]":t}])},{default:o((()=>[(t+1)%4==1?(x(),p(r,{key:0,class:"w-[90rpx] h-[90rpx] rounded-[50%] bg-[#E7F6FF] flex items-center justify-center flex-shrink-0"},{default:o((()=>[i(l,{src:m(Y)("static/resource/images/app/icon_02.png"),class:"w-[40rpx] h-[40rpx]"},null,8,["src"])])),_:1})):(t+1)%4==2?(x(),p(r,{key:1,class:"w-[90rpx] h-[90rpx] rounded-[50%] bg-[#ffefef] flex items-center justify-center flex-shrink-0"},{default:o((()=>[i(l,{src:m(Y)("static/resource/images/app/icon_03.png"),class:"w-[40rpx] h-[40rpx]"},null,8,["src"])])),_:1})):(t+1)%4==3?(x(),p(r,{key:2,class:"w-[90rpx] h-[90rpx] rounded-[50%] bg-[#d3feeb] flex items-center justify-center flex-shrink-0"},{default:o((()=>[i(l,{src:m(Y)("static/resource/images/app/icon_04.png"),class:"w-[40rpx] h-[40rpx]"},null,8,["src"])])),_:1})):(t+1)%4==0?(x(),p(r,{key:3,class:"w-[90rpx] h-[90rpx] rounded-[50%] bg-[#ffeddd] flex items-center justify-center flex-shrink-0"},{default:o((()=>[i(l,{src:m(Y)("static/resource/images/app/icon_05.png"),class:"w-[40rpx] h-[40rpx]"},null,8,["src"])])),_:1})):d("v-if",!0),i(r,{class:"flex-1 mx-[20rpx]"},{default:o((()=>[i(r,{class:"font-400 text-[28rpx] text-[#333] leading-[38rpx] mb-[8rpx]"},{default:o((()=>[f("连续签到"+h(e.continue_sign)+"天",1)])),_:2},1024),e.gift?(x(),p(r,{key:0,class:"flex flex-wrap"},{default:o((()=>[i(r,{class:"flex"},{default:o((()=>[i(l,{src:m(Y)(e.gift.total.icon),class:"w-[30rpx] h-[30rpx] flex-shrink-0"},null,8,["src"]),i(r,{class:"text-[24rpx] ml-[8rpx] text-[#FF9000] leading-[34rpx] max-w-[330rpx]"},{default:o((()=>[f(h(e.gift.total.text),1)])),_:2},1024)])),_:2},1024)])),_:2},1024)):d("v-if",!0)])),_:2},1024),i(r,{class:"flex-shrink-0"},{default:o((()=>[Number(q.value.days)<Number(e.continue_sign)?(x(),p(r,{key:0,class:"w-[130rpx] h-[56rpx] text-center bg-[#FFECE9] rounded-[28rpx] font-400 text-[26rpx] text-[#FF343E] leading-[56rpx]"},{default:o((()=>[f("待完成")])),_:1})):(x(),p(r,{key:1,class:"w-[130rpx] h-[56rpx] text-center rounded-[28rpx] font-400 text-[26rpx] text-[#fff] leading-[56rpx]",style:{background:"linear-gradient( 90deg, #FB7939 0%, #FE120E 100%)"}},{default:o((()=>[f("已完成")])),_:1}))])),_:2},1024)])),_:2},1032,["class"])))),128))])),_:1})])),_:1})):d("v-if",!0)])),_:1})])),_:1})):(x(),p(r,{key:1,class:"h-[100vh] w-[100vw] flex justify-center items-center"},{default:o((()=>[i(n,{text:"签到未开启",width:"347rpx",height:"265rpx",icon:m(Y)("static/resource/images/system/empty.png")},null,8,["icon"])])),_:1})),d(" 签到规则"),i(u,{show:B.value,round:16,mode:"bottom",closeable:!0,onClose:t[5]||(t[5]=e=>B.value=!1)},{default:o((()=>[i(r,{class:"pt-[30rpx] px-[32rpx] pb-[20rpx]"},{default:o((()=>[i(r,{class:"text-center text-[32rpx] font-700 text-[#323233]"},{default:o((()=>[f("签到规则")])),_:1}),i(c,{"scroll-y":!0,class:"my-[20rpx] h-[360rpx] overflow-auto"},{default:o((()=>[(x(!0),b(y,null,_(q.value.rule_explain.split("\n"),(e=>(x(),p(r,{class:"text-[28rpx] leading-[40rpx] mb-[20rpx]"},{default:o((()=>[f(h(e),1)])),_:2},1024)))),256))])),_:1}),i(r,null,{default:o((()=>[i(s,{class:"primary-btn-bg h-[66rpx] text-[#fff] text-[28rpx] border-[0] leading-[66rpx] rounded-[50rpx]",shape:"circle",onClick:t[4]||(t[4]=e=>B.value=!1)},{default:o((()=>[f("知道了")])),_:1})])),_:1})])),_:1})])),_:1},8,["show"]),d(" 签到奖励 "),i(u,{show:P.value,class:"award-popup",customStyle:{backgroundColor:"transparent"},onClose:t[8]||(t[8]=e=>P.value=!1),mode:"center",round:5,safeAreaInsetBottom:!1},{default:o((()=>[Object.values(J.value).length?(x(),p(r,{key:0,class:"w-[550rpx] -mt-[124rpx]"},{default:o((()=>[i(r,{class:"flex justify-center"},{default:o((()=>[i(l,{src:m(Y)("static/resource/images/app/award.png"),class:"w-[484rpx] h-[480rpx] z-10",mode:"aspectFill"},null,8,["src"])])),_:1}),i(r,{class:"-mt-[265rpx] bg-award rounded-[30rpx] pt-[100rpx] pb-[40rpx] mb-[50rpx] relative"},{default:o((()=>[i(r,{class:"px-[32rpx]"},{default:o((()=>[i(r,{class:"text-[48rpx] text-[#EF000C] font-bold leading-[68rpx] mb-[6rpx] text-center"},{default:o((()=>[f(h(J.value.title),1)])),_:1}),J.value.info?(x(),p(r,{key:0,class:"text-[24rpx] text-[#F05F66] leading-[34rpx] text-center mb-[60rpx]"},{default:o((()=>[f(h(J.value.info),1)])),_:1})):d("v-if",!0),i(r,{class:"px-[68rpx] mb-[80rpx]"},{default:o((()=>[(x(!0),b(y,null,_(J.value.awards,((e,t)=>(x(),b(y,null,[e.content?(x(!0),b(y,{key:0},_(e.content,((e,t)=>(x(),p(r,{class:"flex items-center mb-[30rpx]"},{default:o((()=>[i(l,{src:m(Y)(e.icon),class:"w-[42rpx] h-[42rpx]"},null,8,["src"]),i(r,{class:"ml-[20rpx] text-[28rpx] text-[#333] leading-[38rpx]"},{default:o((()=>[f(h(e.text),1)])),_:2},1024)])),_:2},1024)))),256)):d("v-if",!0)],64)))),256))])),_:1}),i(r,{class:"flex justify-center relative z-30"},{default:o((()=>[i(r,{class:"w-[370rpx] h-[88rpx] primary-btn-bg rounded-[50rpx] text-[#ffffff] text-center leading-[88rpx] text-[32rpx]",onClick:t[6]||(t[6]=e=>P.value=!1)},{default:o((()=>[f("我知道了")])),_:1})])),_:1})])),_:1})])),_:1}),i(r,{class:"flex justify-center"},{default:o((()=>[i(a,{class:"nc-iconfont nc-icon-cuohaoV6xx text-[#fff] text-[60rpx]",onClick:t[7]||(t[7]=e=>P.value=!1)})])),_:1})])),_:1})):d("v-if",!0)])),_:1},8,["show"]),d(" 查看当日或连续签到奖励 "),i(u,{show:R.value,class:"award-popup",customStyle:{backgroundColor:"transparent"},onClose:t[11]||(t[11]=e=>R.value=!1),mode:"center",round:5,safeAreaInsetBottom:!1},{default:o((()=>[Object.values(H.value).length?(x(),p(r,{key:0,class:"w-[550rpx] -mt-[124rpx]"},{default:o((()=>[i(r,{class:"flex justify-center"},{default:o((()=>[i(l,{src:m(Y)("static/resource/images/app/award.png"),class:"w-[484rpx] h-[480rpx] z-10",mode:"aspectFill"},null,8,["src"])])),_:1}),i(r,{class:"-mt-[265rpx] bg-award rounded-[30rpx] pt-[100rpx] pb-[40rpx] mb-[50rpx] relative"},{default:o((()=>[i(r,{class:"px-[32rpx]"},{default:o((()=>[i(r,{class:"text-[48rpx] text-[#333] font-bold leading-[68rpx] mb-[6rpx] text-center relative z-20"},{default:o((()=>[f(h(H.value.title),1)])),_:1}),i(r,{class:"text-[24rpx] text-[#F05F66] leading-[34rpx] text-center mb-[60rpx]"},{default:o((()=>[f(h(H.value.info),1)])),_:1}),i(r,{class:"px-[68rpx] mb-[80rpx]"},{default:o((()=>[(x(!0),b(y,null,_(H.value.awards,((e,t)=>(x(),b(y,null,[e.content?(x(!0),b(y,{key:0},_(e.content,((e,t)=>(x(),p(r,{class:"flex items-center mb-[32rpx]",key:t},{default:o((()=>[i(l,{src:m(Y)(e.icon),class:"w-[42rpx] h-[42rpx]"},null,8,["src"]),i(r,{class:"ml-[20rpx] text-[28rpx] text-[#333] leading-[38rpx]"},{default:o((()=>[f(h(e.text),1)])),_:2},1024)])),_:2},1024)))),128)):d("v-if",!0)],64)))),256))])),_:1}),i(r,{class:"flex justify-center relative z-30"},{default:o((()=>[i(r,{class:"w-[370rpx] h-[88rpx] border-[4rpx] border-[#EF000C] border-solid rounded-[50rpx] text-[#EF000C] text-center leading-[88rpx] text-[32rpx] font-500 box-border",onClick:t[9]||(t[9]=e=>R.value=!1)},{default:o((()=>[f("我知道了")])),_:1})])),_:1})])),_:1})])),_:1}),i(r,{class:"flex justify-center"},{default:o((()=>[i(a,{class:"nc-iconfont nc-icon-cuohaoV6xx text-[#fff] text-[60rpx]",onClick:t[10]||(t[10]=e=>R.value=!1)})])),_:1})])),_:1})):d("v-if",!0)])),_:1},8,["show"])])),_:1})):d("v-if",!0),i(v,{"bg-color":"rgb(248,248,248)",loading:A.value,loadingText:"",fontSize:"16",color:"#303133"},null,8,["loading"])])),_:1},8,["style"])}}}),[["__scopeId","data-v-35ebdf50"]]);export{W as default};
