import{d as e,r as t,m as a,p as l,j as r,G as s,s as o,l as n,o as i,c as u,w as d,u as c,b as f,y as m,z as x,f as p,bw as _,I as v,J as b,K as y,n as g,c8 as h,a as w,C as k,g as j,h as F,D as I,Q as E,i as D,L as C}from"./index-d8a8f699.js";import{_ as S}from"./u-swiper.efc69b22.js";import{_ as B}from"./u-parse.8b113dfe.js";import{_ as V}from"./u-button.aa0eb212.js";import{_ as P}from"./u-loading-page.c740ef13.js";import{_ as z}from"./u-calendar.b777e5f2.js";import{d as A,e as L}from"./tourism.93d35d7c.js";import{_ as T}from"./share-poster.b1e17ebe.js";import{_ as U}from"./_plugin-vue_export-helper.1b428a4d.js";import"./u-loading-icon.6808ae8c.js";import"./u-icon.5ba98c98.js";import"./u-transition.db07fff7.js";import"./u-popup.0d48946e.js";import"./u-safe-bottom.a4431b09.js";import"./index.a605aec4.js";const K=U(e({__name:"detail",setup(e){let U=t([]),K=t([]),O=t(!0),R=t(!1),Y=t(!1),$=t("");const q=a(),G=l((()=>q.info));let H=t({way_id:"",reserve_time:"",num:1}),J=t([]),M=t(0);r((e=>{$.value=e.way_id,O.value=!0,X(e.way_id),A(e.way_id).then((e=>{K.value=e.data,K.value.goods.member_discount&&s()?ue.value=K.value.member_price:ue.value=K.value.price,de.value=K.value.day_info?K.value.day_info.time_date:"",o({title:K.value.way_name}),U.value=[],K.value.goods.image_thumb_big&&K.value.goods.image_thumb_big.length&&""!=K.value.goods.image_thumb_big.toString()?K.value.goods.image_thumb_big.forEach(((e,t)=>{U.value.push(n(e))})):U.value.push(n(K.value.goods.cover_thumb_big)),ne(),O.value=!1})).catch((()=>{O.value=!1}))}));let N={};const Q=e=>{let t=new Date(e[0]).getTime();ae(t),M.value=0,R.value=!1,H.value.reserve_time=e[0],K.value.goods.price=N[e[0]],ue.value=N[e[0]],de.value=e[0]},W=e=>{const t=h(Date.parse(e.date)/1e3,"year_month_day");return N[t]&&(e.bottomInfo=N[t]),e},X=e=>{L(e).then((e=>{let t=e.data;t&&(N=t),Y.value=!0,ae()})).catch((()=>{O.value=!1}))},Z=e=>{var t=[];return-1!=e.indexOf("-")?t=e.split("-"):-1!=e.indexOf("/")&&(t=e.split("/")),t[1]+"-"+t[2]},ee=(e,t="")=>{var a=864e5*e;return t?new Date(t+a):new Date(Date.now()+a)},te=e=>{let t=e.getFullYear(),a=e.getMonth()+1,l=e.getDate();return""+(t+"-"+(a<10?"0"+a:a)+"-"+(l<10?"0"+l:l))},ae=(e="")=>{let t,a=["周日","周一","周二","周三","周四","周五","周六"];J.value=[];for(let l=0;l<4;l++){t={};let r=te(ee(l,e));t.centerInfo=Z(r);let s=r.split("/").map((e=>{let t="";return t=e<10?"0"+e:e,t})).join("-");t.bottomInfo=N[s]||"",t.topInfo=a[new Date(s).getDay()],t.initInfo=s,J.value.push(t)}H.value.reserve_time=te(ee(0))},le=()=>{w({url:"/addon/tourism/pages/index",mode:"reLaunch"})};let re=t(null),se=t(""),oe={};const ne=()=>{se.value="?way_id="+K.value.way_id,G.value&&G.value.member_id&&(se.value+="&mid="+G.value.member_id)},ie=()=>{oe.way_id=K.value.way_id,G.value&&G.value.member_id&&(oe.member_id=G.value.member_id),re.value.openShare()};let ue=t("0.00"),de=t(""),ce=e=>{let t="";return t=!e.goods.member_discount||!s()||e.day_list[de.value]&&1!=e.day_list[de.value].member_price?"":"member_price",t};return(e,t)=>{const a=j(F("u-swiper"),S),l=I,r=E,o=D,h=j(F("u-parse"),B),A=j(F("u-button"),V),L=j(F("u-loading-page"),P),q=j(F("u-calendar"),z);return i(),u(o,{class:"bg-[#f7f7f7] min-h-screen overflow-hidden",style:g(e.themeColor())},{default:d((()=>[c(O)?p("v-if",!0):(i(),u(o,{key:0},{default:d((()=>[f(a,{list:c(U),height:"380rpx",radius:"0"},null,8,["list"]),f(o,{class:"chunk-wrap pt-4 pb-3 rounded-t-2xl relative -mt-[30rpx]"},{default:d((()=>[f(o,{class:"flex justify-between items-center"},{default:d((()=>[f(o,{class:"flex-1"},{default:d((()=>[f(o,{class:"flex items-baseline text-[24rpx] text-[#888]"},{default:d((()=>[f(l,{class:"text-[#FA6400] text-[26rpx] price-font"},{default:d((()=>[m("￥")])),_:1}),f(l,{class:"text-[#FA6400] text-[38rpx] price-font"},{default:d((()=>[m(x(c(ue)),1)])),_:1}),"member_price"==c(ce)(c(K))?(i(),u(r,{key:0,class:"h-[22rpx] ml-[6rpx] w-[55rpx]",src:c(n)("addon/tourism/VIP.png"),mode:"widthFix"},null,8,["src"])):p("v-if",!0),f(l,{class:"ml-1"},{default:d((()=>[m("/人起")])),_:1}),p(' <text class="ml-3">年销量268</text> ')])),_:1}),p(' <view class="flex justify-between text-[#543E3E] items-baseline member-price mt-3 pl-2 pb-1 rounded-l-md">\r\n\t\t\t\t\t\t\t<text class="text-xs">会员价: 188/人</text>\r\n\t\t\t\t\t\t\t<view class="text-xs">立即开通<text class="nc-iconfont nc-icon-youV6xx text-[26rpx]"></text></view>\r\n\t\t\t\t\t\t</view> ')])),_:1}),f(o,{class:"flex flex-col items-center text-[#6D7278] ml-[40rpx] pl-[50rpx] pr-[30rpx] border-0 border-l border-solid border-[#F0F0F0]",onClick:ie},{default:d((()=>[f(l,{class:"nc-iconfont nc-icon-fenxiangV6xx-1 text-lg"}),f(l,{class:"mt-1 text-xs"},{default:d((()=>[m("分享")])),_:1})])),_:1})])),_:1}),f(o,{class:"mt-2 font-bold multi-hidden"},{default:d((()=>[m(x(c(K).way_name),1)])),_:1}),f(o,{class:"flex flex-wrap mt-3 text-xs"},{default:d((()=>[c(K).group_buy_type_name?(i(),u(l,{key:0,class:"text-[#696969] border-1 border-solid border-[#E4E4E4] rounded-md px-3 py-1"},{default:d((()=>[m(x(c(K).group_buy_type_name),1)])),_:1})):p("v-if",!0),c(K).travel_type_name?(i(),u(l,{key:1,class:"text-[#696969] border-1 border-solid border-[#E4E4E4] rounded-md px-3 py-1 ml-2"},{default:d((()=>[m(x(c(K).travel_type_name),1)])),_:1})):p("v-if",!0),c(K).way_theme_name?(i(),u(l,{key:2,class:"text-[#696969] border-1 border-solid border-[#E4E4E4] rounded-md px-3 py-1 ml-2"},{default:d((()=>[m(x(c(K).way_theme_name),1)])),_:1})):p("v-if",!0),c(K).way_traffic_name?(i(),u(l,{key:3,class:"text-[#696969] border-1 border-solid border-[#E4E4E4] rounded-md px-3 py-1 ml-2"},{default:d((()=>[m(x(c(K).way_traffic_name),1)])),_:1})):p("v-if",!0)])),_:1}),f(o,{class:"flex justify-between mt-3 text-xs text-[#696969]"},{default:d((()=>[f(o,{class:"flex flex-wrap flex-1"},{default:d((()=>[f(l,null,{default:d((()=>[m("出发城市："+x(c(K).start_city),1)])),_:1}),f(l,{class:"iconfont iconshuangxiang mx-3"}),f(l,null,{default:d((()=>[m("目的地："+x(c(K).end_city),1)])),_:1})])),_:1}),p(" <text>库存：{{detail?.goods?.stock||0}}</text> ")])),_:1})])),_:1}),f(o,{class:"chunk-wrap"},{default:d((()=>[f(o,{class:"chunk-head"},{default:d((()=>[f(l,null,{default:d((()=>[m("出发日期")])),_:1}),f(l,{onClick:t[0]||(t[0]=e=>_(R)?R.value=!0:R=!0)},{default:d((()=>[m("查看"),f(l,{class:"nc-iconfont nc-icon-youV6xx text-[26rpx]"})])),_:1})])),_:1}),f(o,{class:"flex pt-[28rpx] pb-[24rpx]"},{default:d((()=>[(i(!0),v(y,null,b(c(J),((e,t)=>(i(),u(o,{class:C(["relative flex flex-col items-center justify-center w-[130rpx] h-[142rpx] border-1 border-solid border-[#F0F0F0] mr-[14rpx] text-sm rounded",{"bg-[#F8F8F8]":!c(N)[e.initInfo],"border-color":t==c(M),"border-[#F0F0F0]":t!=c(M)}]),onClick:a=>((e,t)=>{N[e.initInfo]&&(M.value=t,H.value.reserve_time=e.initInfo,K.value.price=N[e.initInfo],ue.value=N[e.initInfo],de.value=e.initInfo)})(e,t)},{default:d((()=>[t==c(M)?(i(),u(o,{key:0,class:"absolute bottom-[0] right-[0] bg-[var(--primary-color)] rounded-tl-[16rpx] flex items-center justify-center leading-[1] px-[2rpx] pt-[4rpx]"},{default:d((()=>[f(l,{class:"nc-iconfont nc-icon-duihaoV6xx-1 text-[#fff] text-[28rpx]"})])),_:1})):p("v-if",!0),f(l,{class:"text-[#9B9B9B] text-xs"},{default:d((()=>[m(x(e.topInfo),1)])),_:2},1024),f(l,{class:"mt-[4rpx]"},{default:d((()=>[m(x(e.centerInfo),1)])),_:2},1024),e.bottomInfo?(i(),u(l,{key:1,class:"text-[#FA6400] text-xs"},{default:d((()=>[m(x(e.bottomInfo),1)])),_:2},1024)):p("v-if",!0)])),_:2},1032,["class","onClick"])))),256)),f(o,{class:"relative flex flex-col items-center justify-center w-[130rpx] h-[142rpx] border-1 border-solid border-[#F8F8F8] text-sm rounded bg-[#F8F8F8]",onClick:t[1]||(t[1]=e=>_(R)?R.value=!0:R=!0)},{default:d((()=>[f(l,{class:"nc-iconfont nc-icon-riliV6xx text-[44rpx] text-[#707070]"}),f(l,{class:"text-xs text-[#9B9B9B] mt-[4rpx]"},{default:d((()=>[m("更多")])),_:1})])),_:1})])),_:1})])),_:1}),f(o,{class:"chunk-wrap pt-[34rpx] scheduling"},{default:d((()=>[f(o,{class:"text-center text-[34rpx] font-bold"},{default:d((()=>[m("-- 费用说明 --")])),_:1}),f(o,{class:"scheduling-content"},{default:d((()=>{var e;return[(null==(e=c(K))?void 0:e.fee_desc)?(i(),u(h,{key:0,content:c(K).fee_desc,tagStyle:{img:"vertical-align: top;"}},null,8,["content"])):(i(),u(l,{key:1,class:"pb-5 block"},{default:d((()=>[m("暂无费用说明")])),_:1}))]})),_:1})])),_:1}),f(o,{class:"chunk-wrap pt-[34rpx] scheduling"},{default:d((()=>[f(o,{class:"text-center text-[34rpx] font-bold"},{default:d((()=>[m("-- 线路特点 --")])),_:1}),f(o,{class:"scheduling-content"},{default:d((()=>{var e;return[(null==(e=c(K))?void 0:e.way_character)?(i(),u(h,{key:0,content:c(K).way_character,tagStyle:{img:"vertical-align: top;"}},null,8,["content"])):(i(),u(l,{key:1,class:"pb-5 block"},{default:d((()=>[m("暂无线路特点")])),_:1}))]})),_:1})])),_:1}),f(o,{class:"h-[148rpx] w-screen"}),f(o,{class:"flex justify-between bg-white p-3 fixed bottom-0 left-0 right-0"},{default:d((()=>[f(o,{class:"flex flex-col items-center",onClick:le},{default:d((()=>[p(' <image class="w-[38rpx] h-[38rpx]" :src="img(\'addon/tourism/tourism/way/index.png\')" mode="aspectFill"></image> '),f(l,{class:"nc-iconfont nc-icon-shouye-xiaolianV6xx text-[46rpx] text-[#333]"}),f(l,{class:"text-xs text-[#363636] mt-1"},{default:d((()=>[m("首页")])),_:1})])),_:1}),p(' <u-button class="!w-[276rpx] !rounded-3xl !mr-[24rpx]" type="primary" :plain="true" size="16">在线咨询</u-button> '),f(A,{text:"立即报名",color:"var(--primary-color)",shape:"circle",customStyle:{lineHeight:"76rpx",margin:"0rpx",color:"#fff",width:"276rpx"},size:"16",onClick:t[2]||(t[2]=e=>(e=>{if(H.value.way_id=e.goods.goods_id,!s())return k().setLoginBack({url:"/addon/tourism/pages/way/detail",param:{way_id:$.value}}),!1;uni.setStorageSync("wayCreateData",H.value),w({url:"/addon/tourism/pages/way/order"})})(c(K)))})])),_:1})])),_:1})),f(L,{"bg-color":"rgb(248,248,248)",loading:c(O),fontSize:"16",color:"#333"},null,8,["loading"]),p(" 出发日期 "),c(Y)?(i(),u(q,{key:1,show:c(R),defaultDate:c(H).reserve_time,onConfirm:Q,onClose:t[3]||(t[3]=e=>_(R)?R.value=!1:R=!1),formatter:W,confirmDisabledText:"请选择离店日期",ref:"calendar",monthNum:"2"},null,8,["show","defaultDate"])):p("v-if",!0),f(T,{ref_key:"sharePosterRef",ref:re,posterType:"tourism_way",posterId:c(K).poster_id,posterParam:c(oe),copyUrlParam:c(se)},null,8,["posterId","posterParam","copyUrlParam"])])),_:1},8,["style"])}}}),[["__scopeId","data-v-1447491b"]]);export{K as default};
