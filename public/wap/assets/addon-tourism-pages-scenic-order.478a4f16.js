import{d as t,r as e,p as l,j as r,o as a,c as o,w as s,b as n,y as u,z as i,P as d,a7 as c,u as m,Q as f,bV as x,f as p,n as v,t as _,aM as b,a as y,U as h,V as w,bW as g,i as j,D as F,g as k,h as C,a6 as V,C as D,R as I,E as B}from"./index-7bf68536.js";import{_ as A}from"./u-number-box.30c0ab2e.js";import{_ as z}from"./u-parse.525658f5.js";import{_ as S}from"./u-popup.be4bfacd.js";import{_ as U}from"./u--input.ddc1d28b.js";import{_ as $}from"./u-form.78a4f7c2.js";import{_ as E}from"./u--form.632a93a1.js";import{_ as N}from"./u-button.359d7329.js";import{_ as M}from"./pay.d2e850e8.js";import{_ as O}from"./u-empty.68b4529f.js";import{_ as P}from"./loading-page.vue_vue_type_script_setup_true_lang.124ad65f.js";import{_ as T}from"./u-calendar.f4984da6.js";import{s as W,t as J,u as L,v as R,x as X}from"./tourism.3586533e.js";import{_ as G}from"./_plugin-vue_export-helper.1b428a4d.js";import"./u-icon.0c1c54c7.js";import"./u-transition.cdf87992.js";import"./u-safe-bottom.908eeae4.js";import"./u-input.09a5cedd.js";import"./u-line.463a2a45.js";import"./u-loading-icon.b37701e7.js";import"./u-image.e46f68ef.js";import"./pay.2db06871.js";import"./u-loading-page.566c330a.js";import"./index.a605aec4.js";const H=G(t({__name:"order",setup(t){const G=t=>{Y.value.num=t.value,ut(t.value),lt()},H=e(null),K=e(!0),Q=e(""),Y=e(uni.getStorageSync("scenicCreateData")||{}),q=e(null),Z=e(!1),tt=e(!1),et=e("");l((()=>{yt(Y.value.ticket_id),W(Y.value).then((({data:t})=>{K.value=!1,q.value=t,et.value=t.goods_info.buy_info,st()})).catch((t=>{Q.value=t.msg,K.value=!1}))}));const lt=()=>{K.value=!0,L(Y.value).then((({data:t})=>{var e;q.value=t,q.value.reserve_time=it(null==(e=q.value)?void 0:e.reserve_time),K.value=!1})).catch((t=>{K.value=!1,_({title:t.msg,icon:"none"})}))},rt=e(!1),at=()=>{if(ot()){if(rt.value)return;rt.value=!0;const t=uni.$u.deepClone(b(Y.value));t.buyer_info=JSON.stringify(t.buyer_info),R(t).then((({data:t})=>{var e;null==(e=H.value)||e.open(t.trade_type,t.trade_id,`/addon/tourism/pages/order/detail?order_id=${t.trade_id}`),rt.value=!1})).catch((t=>{rt.value=!1,_({title:t.msg,icon:"none"})}))}},ot=()=>{if(uni.$u.test.isEmpty(Y.value.mobile))return _({title:"请输入手机号",icon:"none"}),!1;if(!/^1[3-9]\d{9}$/.test(Y.value.mobile))return _({title:"请输入正确的手机号",icon:"none"}),!1;let t=!0;for(let e=0;e<Y.value.buyer_info.length;e++){const l=Y.value.buyer_info[e];if(uni.$u.test.isEmpty(l.name)){t=!1,_({title:"请输入游客"+(e+1)+"的联系人姓名",icon:"none"});break}if(uni.$u.test.isEmpty(l.id_card)){t=!1,_({title:"请输入游客"+(e+1)+"的身份证号",icon:"none"});break}if(!/^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/.test(l.id_card)){t=!1,_({title:"请输入游客"+(e+1)+"的正确身份证号",icon:"none"});break}}return!!t},st=()=>{var t;Y.value.buyer_info=[{name:"",id_card:""}],Y.value.mobile="",q.value.reserve_time=it(null==(t=q.value)?void 0:t.reserve_time)};let nt=e("0");X().then((t=>{nt.value=t.data.is_allow_refund}));const ut=t=>{Y.value.num=t;for(let e=0;e<Y.value.num;e++)null==Y.value.buyer_info[e]&&(Y.value.buyer_info[e]={name:"",id_card:""});Y.value.buyer_info.length>Y.value.num&&Y.value.buyer_info.splice(Y.value.num,Y.value.buyer_info.length-Y.value.num),lt()};r((()=>q.value?q.value.goods_info.goods_attribute.split(","):[]));const it=t=>{const e=new Date(t);return uni.$u.timeFormat(e,"yyyy-mm-dd ")+["周日","周一","周二","周三","周四","周五","周六"][e.getDay()]},dt=()=>{y({url:"/addon/tourism/pages/order/list",mode:"redirectTo"})},ct=()=>{h().length>1?w({delta:1}):y({url:"/addon/tourism/pages/index",mode:"reLaunch"})};let mt=e(!1),ft=e(!1),xt=e([]),pt=e(0),vt={};const _t=t=>{Y.value.reserve_time=t[0];let e=new Date(t[0]).getTime();jt(e),pt.value=0,mt.value=!1,lt()},bt=t=>{const e=g(Date.parse(t.date)/1e3,"year_month_day");return vt[e]&&(t.bottomInfo=vt[e]),t},yt=t=>{J(t).then((t=>{let e=t.data;e&&(vt=e),ft.value=!0,jt()})).catch((()=>{K.value=!0}))},ht=t=>{var e=[];return-1!=t.indexOf("-")?e=t.split("-"):-1!=t.indexOf("/")&&(e=t.split("/")),e[1]+"-"+e[2]},wt=(t,e="")=>{var l=864e5*t;return e?new Date(e+l):new Date(Date.now()+l)},gt=t=>{let e=t.getFullYear(),l=t.getMonth()+1,r=t.getDate();return""+(e+"-"+(l<10?"0"+l:l)+"-"+(r<10?"0"+r:r))},jt=(t="")=>{let e,l=["周日","周一","周二","周三","周四","周五","周六"];xt.value=[];for(let r=0;r<4;r++){e={};let a=gt(wt(r,t));e.centerInfo=ht(a);let o=a.split("/").map((t=>{let e="";return e=t<10?"0"+t:t,e})).join("-");e.bottomInfo=vt[o]||"",e.topInfo=l[new Date(o).getDay()],e.initInfo=o,xt.value.push(e)}};return(t,e)=>{const l=j,r=F,_=k(C("u-number-box"),A),b=k(C("u-parse"),z),y=V,h=k(C("u-popup"),S),w=k(C("u--input"),U),g=k(C("u-form-item"),$),W=k(C("u--form"),E),J=k(C("u-button"),N),L=k(C("pay"),M),R=k(C("u-empty"),O),X=D,ot=k(C("loading-page"),P),st=k(C("u-calendar"),T);return q.value?(a(),o(l,{key:0,class:"bg-[#f7f7f7] min-h-screen overflow-hidden",style:v(t.themeColor())},{default:s((()=>[n(l,{class:"chunk-wrap pb-2 pt-4"},{default:s((()=>[n(l,{class:"font-bold"},{default:s((()=>[u(i(q.value.goods_info.goods_name),1)])),_:1}),n(l,{class:"mt-4"},{default:s((()=>[n(l,{class:"font-bold text-[30rpx]"},{default:s((()=>[u("选择日期")])),_:1}),n(l,{class:"flex pt-[28rpx] pb-[24rpx]"},{default:s((()=>[(a(!0),d(f,null,c(m(xt),((t,e)=>(a(),o(l,{class:I(["relative flex flex-col items-center justify-center w-[130rpx] h-[142rpx] border-1 border-solid border-[#F0F0F0] mr-[14rpx] text-sm rounded",{"border-color":e==m(pt),"border-[#F0F0F0]":e!=m(pt)}]),onClick:l=>((t,e)=>{pt.value=e,Y.value.reserve_time=t.initInfo,lt()})(t,e)},{default:s((()=>[e==m(pt)?(a(),o(l,{key:0,class:"absolute bottom-[0] right-[0] bg-[var(--primary-color)] rounded-tl-[16rpx] flex items-center justify-center leading-[1] px-[2rpx] pt-[4rpx]"},{default:s((()=>[n(r,{class:"nc-iconfont nc-icon-duihaoV6xx-1 text-[#fff] text-[28rpx]"})])),_:1})):p("v-if",!0),n(r,{class:"text-[#9B9B9B] text-xs"},{default:s((()=>[u(i(t.topInfo),1)])),_:2},1024),n(r,{class:"mt-[4rpx]"},{default:s((()=>[u(i(t.centerInfo),1)])),_:2},1024),t.bottomInfo?(a(),o(r,{key:1,class:"text-[#FA6400] text-xs"},{default:s((()=>[u(i(t.bottomInfo),1)])),_:2},1024)):p("v-if",!0)])),_:2},1032,["class","onClick"])))),256)),n(l,{class:"relative flex flex-col items-center justify-center w-[130rpx] h-[142rpx] border-1 border-solid border-[#F8F8F8] text-sm rounded bg-[#F8F8F8]",onClick:e[0]||(e[0]=t=>x(mt)?mt.value=!0:mt=!0)},{default:s((()=>[n(r,{class:"nc-iconfont nc-icon-a-riliV6xx-36 text-[44rpx] text-[#707070]"}),n(r,{class:"text-xs text-[#9B9B9B] mt-[4rpx]"},{default:s((()=>[u("更多")])),_:1})])),_:1})])),_:1})])),_:1}),n(l,{class:"flex items-center justify-between mt-2 bg-[#FFF8DC] py-[16rpx] px-[18rpx] rounded-md"},{default:s((()=>[n(r,{class:"text-xs text-[#7A5238]"},{default:s((()=>[u(i(Number(m(nt))?"随时可退":"购买后不可退款"),1)])),_:1}),n(l,{class:"flex items-center text-[#7A5238] text-xs",onClick:e[1]||(e[1]=t=>tt.value=!0)},{default:s((()=>[n(r,null,{default:s((()=>[u("购买须知")])),_:1}),n(r,{class:"nc-iconfont nc-icon-youV6xx text-[26rpx]"})])),_:1})])),_:1}),n(l,{class:"flex justify-between items-center mt-3"},{default:s((()=>[n(r,{class:"text-[30rpx] font-bold"},{default:s((()=>[u("购买数量")])),_:1}),n(_,{modelValue:Y.value.num,"onUpdate:modelValue":e[2]||(e[2]=t=>Y.value.num=t),max:q.value.goods_info.stock,onChange:G},null,8,["modelValue","max"])])),_:1})])),_:1}),p(" 购买须知弹窗 "),n(h,{show:tt.value,onClose:e[3]||(e[3]=t=>tt.value=!1),closeable:!0},{default:s((()=>[n(l,{class:"text-center py-[30rpx] font-bold leading-none"},{default:s((()=>[n(r,null,{default:s((()=>[u("购买须知")])),_:1})])),_:1}),n(l,{class:"pt-[28rpx] pb-[40rpx] px-[28rpx]"},{default:s((()=>[n(y,{class:"max-h-[60vh]","scroll-y":!0},{default:s((()=>[et.value?(a(),o(b,{key:0,content:et.value,tagStyle:{img:"vertical-align: top;"}},null,8,["content"])):(a(),o(r,{key:1,class:"block px-5"},{default:s((()=>[u("暂无购买须知")])),_:1}))])),_:1})])),_:1})])),_:1},8,["show"]),p(' <view class="chunk-wrap">\r\n\t\t\t<view class="chunk-head">\r\n\t\t\t\t<text>游客1信息</text>\r\n\t\t\t\t<view class="text-xs">需填写<text class="text-[#FF2F11]">1</text>位，用于入园身份验证</view>\r\n\t\t\t</view>\r\n\t\t\t<view class="py-2">\r\n\t\t\t\t<view class="flex my-2">\r\n\t\t\t\t\t<view class="w-[164rpx] h-[80rpx] rounded-md border-1 border-solid border-[#F0F0F0] relative flex items-center justify-center mr-2 select-box-color text-[#222]">\r\n\t\t\t\t\t\t<text class="text-sm">吴优</text>\r\n\t\t\t\t\t\t<text class="iconfont iconxuanze1 absolute -right-[2rpx] -bottom-[2rpx]"></text>\r\n\t\t\t\t\t</view>\r\n\t\t\t\t\t<view class="w-[164rpx] h-[80rpx] rounded-md border-1 border-solid border-[#F0F0F0] relative flex items-center justify-center mr-2 text-[#222]">\r\n\t\t\t\t\t\t<text class="text-sm">胡歌</text>\r\n\t\t\t\t\t\t<text class="iconfont iconxuanze1 absolute -right-[2rpx] -bottom-[2rpx]"></text>\r\n\t\t\t\t\t</view>\r\n\t\t\t\t\t<view class="w-[164rpx] h-[80rpx] rounded-md border-1 border-solid border-[#F0F0F0] relative flex items-center justify-center text-[#222]">\r\n\t\t\t\t\t\t<text class="text-sm">新增</text>\r\n\t\t\t\t\t\t<text class="nc-iconfont nc-icon-youV6xx text-[26rpx]"></text>\r\n\t\t\t\t\t</view>\r\n\t\t\t\t</view>\r\n\t\t\t\t<u--form labelPosition="left" ref="form1" labelWidth="70" :labelStyle="{color: \'#A3A3A3\', fontSize: \'14px\'}">\r\n\t\t\t\t\t<u-form-item label="联系姓名" prop="userInfo.name" borderBottom>\r\n\t\t\t\t\t\t<view class="border-style">\r\n\t\t\t\t\t\t\t<u--input border="none" placeholder="请输入联系姓名" placeholderClass="text-sm" v-model="createData.buyer_info.name"></u--input>\r\n\t\t\t\t\t\t</view>\r\n\t\t\t\t\t</u-form-item>\r\n\t\t\t\t\t<u-form-item label="手机号" prop="userInfo.name" borderBottom>\r\n\t\t\t\t\t\t<view class="border-style">\r\n\t\t\t\t\t\t\t<u--input border="none" placeholder="请输入手机号" placeholderClass="text-sm" v-model="createData.mobile"></u--input>\r\n\t\t\t\t\t\t</view>\r\n\t\t\t\t\t</u-form-item>\r\n\t\t\t\t\t<u-form-item label="证件类型" borderBottom>\r\n\t\t\t\t\t\t<view class="border-style">\r\n\t\t\t\t\t\t\t<text class="text-sm">身份证</text>\r\n\t\t\t\t\t\t</view>\r\n\t\t\t\t\t</u-form-item>\r\n\t\t\t\t\t<u-form-item label="证件号" prop="userInfo.name" borderBottom>\r\n\t\t\t\t\t\t<view class="border-style !border-0">\r\n\t\t\t\t\t\t\t<u--input border="none" placeholder="请输入证件号" placeholderClass="text-sm"  v-model="createData.buyer_info.id_card"></u--input>\r\n\t\t\t\t\t\t</view>\r\n\t\t\t\t\t</u-form-item>\r\n\t\t\t\t</u--form>\r\n\t\t\t</view>\r\n\t\t</view> '),(a(!0),d(f,null,c(Y.value.num,(t=>(a(),o(l,{class:"chunk-wrap"},{default:s((()=>[n(l,{class:"chunk-head"},{default:s((()=>[n(r,null,{default:s((()=>[u("游客"+i(t)+"信息",1)])),_:2},1024)])),_:2},1024),n(l,{class:"py-2"},{default:s((()=>[n(W,{labelPosition:"left",ref_for:!0,ref:"form1",labelWidth:"70",labelStyle:{color:"#A3A3A3",fontSize:"14px"}},{default:s((()=>[n(g,{label:"联系姓名",prop:"userInfo.name",borderBottom:""},{default:s((()=>[n(l,{class:"border-style"},{default:s((()=>[n(w,{border:"none",placeholder:"请输入联系姓名",placeholderClass:"text-sm",modelValue:Y.value.buyer_info[t-1].name,"onUpdate:modelValue":e=>Y.value.buyer_info[t-1].name=e},null,8,["modelValue","onUpdate:modelValue"])])),_:2},1024)])),_:2},1024),1==t?(a(),o(g,{key:0,label:"手机号",prop:"userInfo.name",borderBottom:""},{default:s((()=>[n(l,{class:"border-style"},{default:s((()=>[n(w,{border:"none",type:"number",placeholder:"请输入手机号",placeholderClass:"text-sm",modelValue:Y.value.mobile,"onUpdate:modelValue":e[4]||(e[4]=t=>Y.value.mobile=t)},null,8,["modelValue"])])),_:1})])),_:1})):p("v-if",!0),n(g,{label:"证件类型",borderBottom:""},{default:s((()=>[n(l,{class:"border-style"},{default:s((()=>[n(r,{class:"text-sm"},{default:s((()=>[u("身份证")])),_:1})])),_:1})])),_:1}),n(g,{label:"证件号",prop:"userInfo.name",borderBottom:""},{default:s((()=>[n(l,{class:"border-style !border-0"},{default:s((()=>[n(w,{border:"none",type:"idcard",placeholder:"请输入证件号",placeholderClass:"text-sm",modelValue:Y.value.buyer_info[t-1].id_card,"onUpdate:modelValue":e=>Y.value.buyer_info[t-1].id_card=e},null,8,["modelValue","onUpdate:modelValue"])])),_:2},1024)])),_:2},1024)])),_:2},1536)])),_:2},1024)])),_:2},1024)))),256)),p(' <view class="chunk-wrap">\r\n\t\t\t<view class="chunk-head">\r\n\t\t\t\t<text>支付方式</text>\r\n\t\t\t</view>\r\n\t\t\t<view class="flex justify-between items-center h-[80rpx]">\r\n\t\t\t\t<view class="flex items-center">\r\n\t\t\t\t\t<image class="w-[42rpx] h-[42rpx]" :src="img(\'addon/tourism/tourism/way/discount_coupon.png\')" mode="widthFix"></image>\r\n\t\t\t\t\t<text class="ml-1 text-xs">微信支付</text>\r\n\t\t\t\t</view>\r\n\t\t\t\t<u-radio :labelDisabled="true"></u-radio>\r\n\t\t\t</view>\r\n\t\t</view>\r\n\t\t<view class="chunk-wrap">\r\n\t\t\t<view class="chunk-head">\r\n\t\t\t\t<text>优惠信息</text>\r\n\t\t\t</view>\r\n\t\t\t<view class="flex justify-between items-center h-[80rpx]">\r\n\t\t\t\t<view class="flex items-center">\r\n\t\t\t\t\t<image class="w-[42rpx] h-[42rpx]" :src="img(\'addon/tourism/tourism/way/discount_coupon.png\')" mode="widthFix"></image>\r\n\t\t\t\t\t<text class="ml-1 text-xs">抵用券</text>\r\n\t\t\t\t</view>\r\n\t\t\t\t<text class="text-[var(--text-color-light9)] text-xs flex items-center">查看<text class="nc-iconfont nc-icon-youV6xx text-[26rpx]"></text></text>\r\n\t\t\t</view>\r\n\t\t</view> '),n(l,{class:"h-[148rpx] w-screen"}),n(l,{class:"bg-white p-3 fixed bottom-0 left-0 right-0 flex items-center justify-between z-99"},{default:s((()=>[n(l,{class:"text-[#FA6400] text-xs"},{default:s((()=>[n(r,null,{default:s((()=>[u("总价")])),_:1}),n(r,{class:"ml-[2rpx] price-font"},{default:s((()=>[u("￥")])),_:1}),n(r,{class:"text-[38rpx] price-font"},{default:s((()=>{var t;return[u(i(null==(t=q.value.order_money)?void 0:t.toFixed(2)),1)]})),_:1})])),_:1}),n(l,{class:"ml-auto mr-2",onClick:e[5]||(e[5]=t=>Z.value=!Z.value)},{default:s((()=>[n(r,{class:"text-[#686868] text-xs mr-1"},{default:s((()=>[u("明细")])),_:1}),n(r,{class:"nc-iconfont nc-icon-shangV6xx-1 text-[#C2C2C2] text-xs font-bold"})])),_:1}),n(J,{text:"提交订单",color:"var(--primary-color)",shape:"circle",customStyle:{lineHeight:"76rpx",margin:"0rpx",color:"#fff",width:"278rpx"},type:"primary",size:"16",loading:rt.value,onClick:at},null,8,["loading"])])),_:1}),n(h,{show:Z.value,onClose:e[6]||(e[6]=t=>Z.value=!1),closeable:!0},{default:s((()=>[n(l,{class:"text-center py-[30rpx] font-bold leading-none"},{default:s((()=>[n(r,null,{default:s((()=>[u("费用明细")])),_:1})])),_:1}),n(y,{"scroll-y":"true",class:"max-h-[40vh]"},{default:s((()=>[n(l,{class:"flex px-[30rpx] mt-[20rpx]"},{default:s((()=>[n(l,{class:"font-bold"},{default:s((()=>[u("总价")])),_:1}),n(l,{class:"text-right flex-1 font-bold price-font"},{default:s((()=>[n(r,{class:"text-sm font-normal"},{default:s((()=>[u("￥")])),_:1}),n(r,{class:"text-[38rpx]"},{default:s((()=>{var t;return[u(i(null==(t=q.value.order_money)?void 0:t.toFixed(2)),1)]})),_:1})])),_:1})])),_:1}),(a(!0),d(f,null,c(q.value.order_items,((t,e)=>(a(),o(l,{class:"flex px-[30rpx] mt-[10rpx] text-sm text-gray-subtitle"},{default:s((()=>[n(l,null,{default:s((()=>[u(i(q.value.reserve_time)+" 出发",1)])),_:1}),p(" <view>{{ item.year }}-{{ item.month }}-{{ item.day }}</view> "),n(l,{class:"text-right flex-1"},{default:s((()=>[n(r,{class:"text-xs price-font"},{default:s((()=>[u("￥")])),_:1}),n(r,{class:"price-font"},{default:s((()=>[u(i(t.price),1)])),_:2},1024),n(r,{class:"mx-[10rpx]"},{default:s((()=>[u("x")])),_:1}),n(r,null,{default:s((()=>[u(i(t.num),1)])),_:2},1024)])),_:2},1024)])),_:2},1024)))),256)),p(' <view class="flex px-[30rpx] mt-[10rpx] text-sm text-gray-subtitle">\r\n\t\t            <view>{{ paymentData.reserve_time }} 出发</view>\r\n\t\t            <view class="text-right flex-1"></view>\r\n\t\t        </view> ')])),_:1}),n(l,{class:"h-[150rpx]"})])),_:1},8,["show"]),n(L,{ref_key:"payRef",ref:H,onClose:dt},null,512),Q.value?(a(),o(l,{key:0,class:"w-screen h-screen flex flex-col justify-center items-center"},{default:s((()=>[n(R,{icon:m(B)("static/resource/images/order_empty.png"),text:Q.value},null,8,["icon","text"]),n(l,{class:"w-[240rpx] mt-[40rpx]"},{default:s((()=>[n(X,{class:"bg-[var(--primary-color)] text-[#fff] h-[80rpx] leading-[80rpx] rounded-[100rpx] text-[28rpx]",onClick:ct},{default:s((()=>[u("返回上一页")])),_:1})])),_:1})])),_:1})):p("v-if",!0),n(ot,{loading:K.value},null,8,["loading"]),p(" 出发日期 "),m(ft)?(a(),o(st,{key:1,show:m(mt),defaultDate:Y.value.reserve_time,onConfirm:_t,onClose:e[7]||(e[7]=t=>x(mt)?mt.value=!1:mt=!1),formatter:bt,confirmDisabledText:"请选择离店日期",ref:"calendar",monthNum:"2"},null,8,["show","defaultDate"])):p("v-if",!0)])),_:1},8,["style"])):p("v-if",!0)}}}),[["__scopeId","data-v-5b3fa075"]]);export{H as default};