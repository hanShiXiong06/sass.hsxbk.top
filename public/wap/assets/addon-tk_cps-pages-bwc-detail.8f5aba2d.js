import{d as e,r as l,l as t,j as a,x as s,p as o,o as r,O as i,c as u,w as n,b as c,y as p,z as d,u as m,f,P as x,Y as _,H as b,s as v,a as g,J as h,B as y,i as w,g as k,h as j,D as S,C as F,aF as z}from"./index-2882a2d8.js";import{_ as C}from"./u-tag.4c3b3b6c.js";import{_ as T}from"./u-line-progress.db925d9b.js";import{_ as A}from"./u-parse.40683feb.js";import{_ as I}from"./u-icon.1104ad2f.js";import{_ as L}from"./u-button.0ab7ff00.js";import{_ as P}from"./u-input.6410b5d0.js";import{_ as B}from"./u-popup.2abbe959.js";import{_ as H}from"./share-poster.cdaa31fc.js";import{c as O,s as U,d as V}from"./bwc.9ba4e6d4.js";import{t as D}from"./common.7837e76b.js";import{_ as E}from"./_plugin-vue_export-helper.1b428a4d.js";import"./u-transition.4448d2e5.js";import"./u-loading-icon.a37f7e61.js";/* empty css                                                                       *//* empty css                                                                */import"./u-overlay.1a317a4e.js";import"./u-safe-bottom.f13b01b8.js";const N=E(e({__name:"detail",setup(e){const E=l(uni.getStorageSync("orderphone")),{setShare:N,onShareAppMessage:R,onShareTimeline:$}=_();N(),R(),$();const J=l(!1),M=t(),W=a((()=>M.info));let Y=l(null),q=l(""),G={};const K=l(0),Q=l(!1);l(!1);const X=()=>{Q.value=!0},Z=async()=>{if(uni.setStorageSync("orderphone",E.value),!E.value)return Q.value=!0,void uni.$u.toast("请填写电话号码");if(!v())return b().setLoginBack({url:"/addon/tk_cps/pages/bwc/detail",param:{planId:le.value.plan.planId}}),!1;J.value=!0;try{const l=await U({planId:le.value.plan.planId,telephone:E.value,mapLat:ee.value.latitude||"39.908823",mapLon:ee.value.longitude||"116.39747",data:le.value});Q.value=!1,J.value=!1,e=l.data,g({url:"/addon/tk_cps/pages/bwc/orderdetail?id="+e})}catch(l){Q.value=!1,J.value=!1}var e},ee=l(uni.getStorageSync("localtkcps")),le=l();return s((()=>{W.value&&W.value.member_id&&(q.value+="?mid="+W.value.member_id)})),o((e=>{if(e.mid)uni.setStorageSync("pid",e.mid),O({pid:e.mid});else{let e=uni.getStorageSync("pid");e&&e>0&&O({pid:e})}e.planId&&(async e=>{const l=await V({planId:e,mapLat:ee.value.latitude,mapLon:ee.value.longitude,telephone:E.value||"13545454545"});0!=l.data.code&&(uni.$u.toast("请切换地址--"+l.data.message),setTimeout((()=>{uni.removeStorageSync("localtkcps"),g({url:"/addon/tk_cps/pages/diy"})}),1e3)),le.value=l.data.data,h({title:le.value.name})})(e.planId)})),(e,l)=>{const t=y,a=w,s=k(j("u-tag"),C),o=S,_=k(j("u-line-progress"),T),v=k(j("u-parse"),A),h=k(j("u-icon"),I),O=k(j("u-button"),L),U=k(j("u-input"),P),V=k(j("u-popup"),B),N=F,R=k(j("share-poster"),H);return r(),i(x,null,[le.value?(r(),u(a,{key:0,class:"detail-box"},{default:n((()=>[c(a,{class:"tk-card"},{default:n((()=>[c(a,{class:"flex"},{default:n((()=>[c(t,{style:{width:"120rpx",height:"100rpx","background-color":"#eeeeee","border-radius":"8px"},src:le.value.logo,mode:"aspectFill"},null,8,["src"]),c(a,{class:"flex flex-col ml-2 w-[100%] text-xs justify-between",style:{}},{default:n((()=>[c(a,{class:"font-bold tk-sltext"},{default:n((()=>[p(d(le.value.name),1)])),_:1}),c(a,{class:"flex justify-between"},{default:n((()=>[c(a,{class:"flex items-center"},{default:n((()=>[c(t,{style:{width:"32rpx",height:"32rpx","background-color":"#eeeeee","border-radius":"8px"},src:le.value.platformLogo,mode:"aspectFill"},null,8,["src"]),c(a,{class:"text-xs mt-[4rpx] ml-2"},{default:n((()=>[p(d(le.value.platformName),1)])),_:1})])),_:1}),c(a,null,{default:n((()=>[p(d(le.value.distance),1)])),_:1})])),_:1})])),_:1})])),_:1}),c(a,{class:"flex mt-3 items-center"},{default:n((()=>[c(a,{class:""},{default:n((()=>[c(s,{class:"",text:"按实付"+le.value.plan.ratio+"%返",bgColor:"#FA6400",borderColor:"#FE5A49",size:"mini"},null,8,["text"])])),_:1}),c(a,{class:"ml-2 mr-2"},{default:n((()=>[c(s,{text:"最高可返"+le.value.plan.commission,type:"error",plain:"",plainFill:"",size:"mini"},null,8,["text"])])),_:1}),c(a,{class:""},{default:n((()=>[1==le.value.plan.planType?(r(),u(s,{key:0,text:"需要用餐评价",type:"success",plain:"",plainFill:"",size:"mini"})):(r(),u(s,{key:1,text:"无需评价",type:"error",plain:"",plainFill:"",size:"mini",color:"#FA6400"}))])),_:1})])),_:1}),c(a,{class:"line-box w-[100%] mt-3 mb-3"}),c(a,{class:"flex mt-2 justify-between items-center"},{default:n((()=>[c(a,{class:"flex text-xs"},{default:n((()=>[c(o,null,{default:n((()=>[p(d("0:0"==m(D)(le.value.plan.startTime)?"00:00":m(D)(e.item1.startTime))+"-",1)])),_:1}),c(o,null,{default:n((()=>[p(d(m(D)(le.value.plan.endTime)),1)])),_:1})])),_:1}),c(a,{class:"flex items-center"},{default:n((()=>[c(a,{class:""},{default:n((()=>[c(o,{class:"text-xs mb-1"},{default:n((()=>[p("还剩"+d(le.value.plan.restStock)+"份",1)])),_:1}),c(_,{percentage:le.value.plan.restStock/le.value.plan.totalStock*100,activeColor:"#FFBA00",height:"5",showText:!1},null,8,["percentage"])])),_:1})])),_:1})])),_:1}),c(a,{class:"flex mt-1"},{default:n((()=>[c(s,{onClick:l[0]||(l[0]=e=>(e=>{let l=e.actionUrl;1==e.platform&&(window.location.href=l.h5.mt),2==e.platform&&(window.location.href=l.h5.elm)})(le.value)),text:"查看店铺",type:"error",plain:"",plainFill:"",size:"mini",color:"#FA6400"})])),_:1})])),_:1}),c(a,{class:"tk-card"},{default:n((()=>[c(a,{class:"flex"},{default:n((()=>[c(a,{class:"font-bold"},{default:n((()=>[p("活动要求")])),_:1}),c(a,{class:"ml-2"},{default:n((()=>[p(" 先抢名额再下单")])),_:1})])),_:1}),c(a,{class:"flex mt-3 justify-between text-xs mb-2"},{default:n((()=>[c(a,{class:"font-bold"},{default:n((()=>[p("平台")])),_:1}),c(a,{class:"flex"},{default:n((()=>[c(t,{style:{width:"32rpx",height:"32rpx","background-color":"#eeeeee","border-radius":"8px"},src:le.value.platformLogo,mode:"aspectFill"},null,8,["src"]),c(a,{class:"ml-1"},{default:n((()=>[p(d(le.value.platformName),1)])),_:1}),c(a,{class:"ml-4"},{default:n((()=>[p("剩余名额"+d(le.value.plan.restStock)+"份",1)])),_:1})])),_:1})])),_:1}),c(a,{class:"line-box w-[100%] mb-3"}),c(a,{class:"flex justify-between text-xs mb-2"},{default:n((()=>[c(a,{class:"font-bold"},{default:n((()=>[p("报名手机号")])),_:1}),c(a,{class:"flex items-center"},{default:n((()=>[c(a,{class:"ml-2 mr-2"},{default:n((()=>[p(d(m(z)(E.value)),1)])),_:1}),E.value?(r(),u(s,{key:0,onClick:l[1]||(l[1]=e=>X()),class:"ml-2",text:"修改",type:"error",plain:"",plainFill:"",size:"mini"})):f("v-if",!0),E.value?f("v-if",!0):(r(),u(s,{key:1,onClick:l[2]||(l[2]=e=>X()),class:"ml-2",text:"填写手机号",type:"error",plain:"",plainFill:"",size:"mini"}))])),_:1})])),_:1}),c(a,{class:"line-box w-[100%] mb-3"}),c(a,{class:"flex text-xs mb-2 justify-between"},{default:n((()=>[c(a,{class:"font-bold"},{default:n((()=>[p("要求")])),_:1}),c(a,{class:"flex"},{default:n((()=>[c(a,{class:"ml-2"},{default:n((()=>[p(d(le.value.plan.planTypeCh),1)])),_:1}),c(a,{class:"ml-2 text-[#FA6400]"},{default:n((()=>[p(d(le.value.plan.planTypeDescCh),1)])),_:1})])),_:1})])),_:1}),c(a,{class:"line-box mb-3 bg-[#ffc300]",style:{"background-color":"#ffc300"}}),c(a,{class:"flex justify-between text-xs"},{default:n((()=>[c(a,{class:"font-bold"},{default:n((()=>[p("限购")])),_:1}),c(a,{class:"ml-2"},{default:n((()=>[p(d(le.value.limitBuyCh),1)])),_:1})])),_:1})])),_:1}),c(a,{class:"tk-card"},{default:n((()=>[c(a,{class:"font-bold"},{default:n((()=>[p("报名须知")])),_:1}),c(v,{content:le.value.rule},null,8,["content"])])),_:1}),c(a,{class:"mt-[380rpx] mb-[260rpx] flex items-center"}),c(a,{class:"b-tabbar safe-area-inset-bottom"},{default:n((()=>[c(a,{class:"b-tabbar-back fb items-center p-2"},{default:n((()=>[c(a,{class:"flex flex-col items-center",onClick:l[3]||(l[3]=e=>m(g)({url:"/addon/tk_cps/pages/bwc/act"}))},{default:n((()=>[c(h,{name:"clock",color:"#000000",size:"22"}),c(a,{class:"text-xs font-bold"},{default:n((()=>[p("活动")])),_:1})])),_:1}),c(a,{class:"flex flex-col items-center",onClick:l[4]||(l[4]=e=>m(g)({url:"/addon/tk_cps/pages/bwc/order"}))},{default:n((()=>[c(h,{name:"order",color:"#000000",size:"22"}),c(a,{class:"text-xs font-bold"},{default:n((()=>[p("订单")])),_:1})])),_:1}),c(O,{loading:J.value,loadingText:"正在报名",color:"#FA6400",shape:"circle",customStyle:{lineHeight:"76rpx",margin:"0rpx",color:"#fff",width:"278rpx"},type:"primary",size:"12",onClick:l[5]||(l[5]=e=>Z())},{default:n((()=>[p("立即报名")])),_:1},8,["loading"])])),_:1}),f(" \t\t<u-safe-bottom></u-safe-bottom> ")])),_:1})])),_:1})):f("v-if",!0),c(V,{show:Q.value,mode:"center",round:10,"border-radius":20,"safe-area-inset-bottom":!0},{default:n((()=>[c(a,{class:"p-4 items-center"},{default:n((()=>[c(a,{class:""},{default:n((()=>[p("请填写正确手机号")])),_:1}),c(a,{class:"ml-2 mb-4 text-[#fc7777] text-xs"},{default:n((()=>[p("*"+d(le.value.plan.planTypeDescCh),1)])),_:1}),c(U,{modelValue:E.value,"onUpdate:modelValue":l[6]||(l[6]=e=>E.value=e),placeholder:"请输入手机号",type:"number"},null,8,["modelValue"]),c(a,{class:"flex justify-between mt-2 mb-2"},{default:n((()=>[c(O,{color:"#828282",shape:"circle",size:"small",customStyle:{lineHeight:"76rpx",margin:"0rpx",color:"#fff",width:"200rpx",marginTop:"12rpx",marginRight:"12rpx"},onClick:l[7]||(l[7]=e=>Q.value=!1)},{default:n((()=>[p("关闭")])),_:1}),c(O,{loading:J.value,loadingText:"正在报名",color:"#FA6400",shape:"circle",size:"small",customStyle:{lineHeight:"76rpx",margin:"0rpx",color:"#fff",width:"200rpx",marginTop:"12rpx"},onClick:l[8]||(l[8]=e=>Z())},{default:n((()=>[p("立即报名")])),_:1},8,["loading"])])),_:1})])),_:1})])),_:1},8,["show"]),f(' <u-popup :show="showSubmitOrder" mode="center" :round="10" :border-radius="20" :safe-area-inset-bottom="true">\r\n\t\t<view class="p-4">\r\n\t\t\t<view class="">提示</view>\r\n\t\t\t<view class="">订单创建成功，请及时填写订单号</view>\r\n\t\t\t<view class="flex justify-end mt-2 mb-2">\r\n\t\t\t\t<u-button color="#828282" shape="circle" size="small"\r\n\t\t\t\t\t:customStyle="{lineHeight:\'76rpx\', margin:\'0rpx\', color:\'#fff\',width:\'120rpx\',marginTop:\'12rpx\',marginRight:\'12rpx\'}"\r\n\t\t\t\t\t@click="goOrder()">去下单</u-button>\r\n\t\t\t\t<u-button color="#FA6400" shape="circle" size="small"\r\n\t\t\t\t\t:customStyle="{lineHeight:\'76rpx\', margin:\'0rpx\', color:\'#fff\',width:\'240rpx\',marginTop:\'12rpx\'}"\r\n\t\t\t\t\t@click="showEditPhone=false">领大额优惠券</u-button>\r\n\t\t\t</view>\r\n\t\t</view>\r\n\t</u-popup> '),c(N,{onClick:l[9]||(l[9]=e=>(()=>{if(!W.value){let e=uni.getStorageSync("pid");return e&&e>0?(b().setLoginBack({url:"/addon/tk_cps/pages/bwc/act?mid="+e}),!1):(b().setLoginBack({url:"/addon/tk_cps/pages/bwc/act"}),!1)}W.value&&W.value.member_id&&(G.member_id=W.value.member_id),Y.value.openShare()})()),class:"fixed bottom-48 right-4 z-50 rounded-full p-2 text-white hover:bg-blue-700"},{default:n((()=>[c(h,{name:"share",color:"#000000",size:"24"})])),_:1}),c(R,{ref_key:"sharePosterRef",ref:Y,posterType:"tk_cps_bwc",posterId:K.value,posterParam:m(G),copyUrlParam:m(q)},null,8,["posterId","posterParam","copyUrlParam"])],64)}}}),[["__scopeId","data-v-c44eac53"]]);export{N as default};