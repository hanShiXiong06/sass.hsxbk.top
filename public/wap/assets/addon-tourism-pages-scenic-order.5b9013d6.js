import{d as t,r as e,p as l,j as a,o as r,c as n,w as s,b as o,y as u,z as i,U as d,ad as c,u as x,V as f,cd as m,f as p,n as v,t as b,aV as _,a as y,Z as h,$ as w,cc as g,i as F,D as k,g as C,h as V,ac as D,C as j,W as I,E as B,bY as A,M as $,aA as S,bm as z,R as U,ca as E,bX as N,a$ as O,ce as T,_ as W}from"./index-71c7df08.js";import{_ as M}from"./pay.6aa36878.js";import{_ as P}from"./loading-page.vue_vue_type_script_setup_true_lang.c7dc2256.js";import{s as R,t as X,u as Y,v as H,x as J}from"./tourism.86990a9a.js";import"./pay.4cfa8889.js";const L=W(t({__name:"order",setup(t){const W=t=>{G.value.num=t.value,ut(t.value),lt()},L=e(null),Z=e(!0),q=e(""),G=e(uni.getStorageSync("scenicCreateData")||{}),K=e(null),Q=e(!1),tt=e(!1),et=e("");l((()=>{yt(G.value.ticket_id),R(G.value).then((({data:t})=>{Z.value=!1,K.value=t,et.value=t.goods_info.buy_info,st()})).catch((t=>{q.value=t.msg,Z.value=!1}))}));const lt=()=>{Z.value=!0,Y(G.value).then((({data:t})=>{var e;K.value=t,K.value.reserve_time=it(null==(e=K.value)?void 0:e.reserve_time),Z.value=!1})).catch((t=>{Z.value=!1,b({title:t.msg,icon:"none"})}))},at=e(!1),rt=()=>{if(nt()){if(at.value)return;at.value=!0;const t=uni.$u.deepClone(_(G.value));t.buyer_info=JSON.stringify(t.buyer_info),H(t).then((({data:t})=>{var e;null==(e=L.value)||e.open(t.trade_type,t.trade_id,`/addon/tourism/pages/order/detail?order_id=${t.trade_id}`),at.value=!1})).catch((t=>{at.value=!1,b({title:t.msg,icon:"none"})}))}},nt=()=>{if(uni.$u.test.isEmpty(G.value.mobile))return b({title:"请输入手机号",icon:"none"}),!1;if(!/^1[3-9]\d{9}$/.test(G.value.mobile))return b({title:"请输入正确的手机号",icon:"none"}),!1;let t=!0;for(let e=0;e<G.value.buyer_info.length;e++){const l=G.value.buyer_info[e];if(uni.$u.test.isEmpty(l.name)){t=!1,b({title:"请输入游客"+(e+1)+"的联系人姓名",icon:"none"});break}if(uni.$u.test.isEmpty(l.id_card)){t=!1,b({title:"请输入游客"+(e+1)+"的身份证号",icon:"none"});break}if(!/^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/.test(l.id_card)){t=!1,b({title:"请输入游客"+(e+1)+"的正确身份证号",icon:"none"});break}}return!!t},st=()=>{var t;G.value.buyer_info=[{name:"",id_card:""}],G.value.mobile="",K.value.reserve_time=it(null==(t=K.value)?void 0:t.reserve_time)};let ot=e("0");J().then((t=>{ot.value=t.data.is_allow_refund}));const ut=t=>{G.value.num=t;for(let e=0;e<G.value.num;e++)null==G.value.buyer_info[e]&&(G.value.buyer_info[e]={name:"",id_card:""});G.value.buyer_info.length>G.value.num&&G.value.buyer_info.splice(G.value.num,G.value.buyer_info.length-G.value.num),lt()};a((()=>K.value?K.value.goods_info.goods_attribute.split(","):[]));const it=t=>{const e=new Date(t);return uni.$u.timeFormat(e,"yyyy-mm-dd ")+["周日","周一","周二","周三","周四","周五","周六"][e.getDay()]},dt=()=>{y({url:"/addon/tourism/pages/order/list",mode:"redirectTo"})},ct=()=>{h().length>1?w({delta:1}):y({url:"/addon/tourism/pages/index",mode:"reLaunch"})};let xt=e(!1),ft=e(!1),mt=e([]),pt=e(0),vt={};const bt=t=>{G.value.reserve_time=t[0];let e=new Date(t[0]).getTime();Ft(e),pt.value=0,xt.value=!1,lt()},_t=t=>{const e=g(Date.parse(t.date)/1e3,"year_month_day");return vt[e]&&(t.bottomInfo=vt[e]),t},yt=t=>{X(t).then((t=>{let e=t.data;e&&(vt=e),ft.value=!0,Ft()})).catch((()=>{Z.value=!0}))},ht=t=>{var e=[];return-1!=t.indexOf("-")?e=t.split("-"):-1!=t.indexOf("/")&&(e=t.split("/")),e[1]+"-"+e[2]},wt=(t,e="")=>{var l=864e5*t;return e?new Date(e+l):new Date(Date.now()+l)},gt=t=>{let e=t.getFullYear(),l=t.getMonth()+1,a=t.getDate();return""+(e+"-"+(l<10?"0"+l:l)+"-"+(a<10?"0"+a:a))},Ft=(t="")=>{let e,l=["周日","周一","周二","周三","周四","周五","周六"];mt.value=[];for(let a=0;a<4;a++){e={};let r=gt(wt(a,t));e.centerInfo=ht(r);let n=r.split("/").map((t=>{let e="";return e=t<10?"0"+t:t,e})).join("-");e.bottomInfo=vt[n]||"",e.topInfo=l[new Date(n).getDay()],e.initInfo=n,mt.value.push(e)}};return(t,e)=>{const l=F,a=k,b=C(V("u-number-box"),A),_=C(V("u-parse"),$),y=D,h=C(V("u-popup"),S),w=C(V("u--input"),z),g=C(V("u-form-item"),U),R=C(V("u--form"),E),X=C(V("u-button"),N),Y=C(V("pay"),M),H=C(V("u-empty"),O),J=j,nt=C(V("loading-page"),P),st=C(V("u-calendar"),T);return K.value?(r(),n(l,{key:0,class:"bg-[#f7f7f7] min-h-screen overflow-hidden",style:v(t.themeColor())},{default:s((()=>[o(l,{class:"chunk-wrap pb-2 pt-4"},{default:s((()=>[o(l,{class:"font-bold"},{default:s((()=>[u(i(K.value.goods_info.goods_name),1)])),_:1}),o(l,{class:"mt-4"},{default:s((()=>[o(l,{class:"font-bold text-[30rpx]"},{default:s((()=>[u("选择日期")])),_:1}),o(l,{class:"flex pt-[28rpx] pb-[24rpx]"},{default:s((()=>[(r(!0),d(f,null,c(x(mt),((t,e)=>(r(),n(l,{class:I(["relative flex flex-col items-center justify-center w-[130rpx] h-[142rpx] border-1 border-solid border-[#F0F0F0] mr-[14rpx] text-sm rounded",{"border-color":e==x(pt),"border-[#F0F0F0]":e!=x(pt)}]),onClick:l=>((t,e)=>{pt.value=e,G.value.reserve_time=t.initInfo,lt()})(t,e)},{default:s((()=>[e==x(pt)?(r(),n(l,{key:0,class:"absolute bottom-[0] right-[0] bg-[var(--primary-color)] rounded-tl-[16rpx] flex items-center justify-center leading-[1] px-[2rpx] pt-[4rpx]"},{default:s((()=>[o(a,{class:"nc-iconfont nc-icon-duihaoV6xx-1 text-[#fff] text-[28rpx]"})])),_:1})):p("v-if",!0),o(a,{class:"text-[#9B9B9B] text-xs"},{default:s((()=>[u(i(t.topInfo),1)])),_:2},1024),o(a,{class:"mt-[4rpx]"},{default:s((()=>[u(i(t.centerInfo),1)])),_:2},1024),t.bottomInfo?(r(),n(a,{key:1,class:"text-[#FA6400] text-xs"},{default:s((()=>[u(i(t.bottomInfo),1)])),_:2},1024)):p("v-if",!0)])),_:2},1032,["class","onClick"])))),256)),o(l,{class:"relative flex flex-col items-center justify-center w-[130rpx] h-[142rpx] border-1 border-solid border-[#F8F8F8] text-sm rounded bg-[#F8F8F8]",onClick:e[0]||(e[0]=t=>m(xt)?xt.value=!0:xt=!0)},{default:s((()=>[o(a,{class:"nc-iconfont nc-icon-a-riliV6xx-36 text-[44rpx] text-[#707070]"}),o(a,{class:"text-xs text-[#9B9B9B] mt-[4rpx]"},{default:s((()=>[u("更多")])),_:1})])),_:1})])),_:1})])),_:1}),o(l,{class:"flex items-center justify-between mt-2 bg-[#FFF8DC] py-[16rpx] px-[18rpx] rounded-md"},{default:s((()=>[o(a,{class:"text-xs text-[#7A5238]"},{default:s((()=>[u(i(Number(x(ot))?"随时可退":"购买后不可退款"),1)])),_:1}),o(l,{class:"flex items-center text-[#7A5238] text-xs",onClick:e[1]||(e[1]=t=>tt.value=!0)},{default:s((()=>[o(a,null,{default:s((()=>[u("购买须知")])),_:1}),o(a,{class:"nc-iconfont nc-icon-youV6xx text-[26rpx]"})])),_:1})])),_:1}),o(l,{class:"flex justify-between items-center mt-3"},{default:s((()=>[o(a,{class:"text-[30rpx] font-bold"},{default:s((()=>[u("购买数量")])),_:1}),o(b,{modelValue:G.value.num,"onUpdate:modelValue":e[2]||(e[2]=t=>G.value.num=t),max:K.value.goods_info.stock,onChange:W},null,8,["modelValue","max"])])),_:1})])),_:1}),p(" 购买须知弹窗 "),o(h,{show:tt.value,onClose:e[3]||(e[3]=t=>tt.value=!1),closeable:!0},{default:s((()=>[o(l,{class:"text-center py-[30rpx] font-bold leading-none"},{default:s((()=>[o(a,null,{default:s((()=>[u("购买须知")])),_:1})])),_:1}),o(l,{class:"pt-[28rpx] pb-[40rpx] px-[28rpx]"},{default:s((()=>[o(y,{class:"max-h-[60vh]","scroll-y":!0},{default:s((()=>[et.value?(r(),n(_,{key:0,content:et.value,tagStyle:{img:"vertical-align: top;"}},null,8,["content"])):(r(),n(a,{key:1,class:"block px-5"},{default:s((()=>[u("暂无购买须知")])),_:1}))])),_:1})])),_:1})])),_:1},8,["show"]),p(' <view class="chunk-wrap">\r\n\t\t\t<view class="chunk-head">\r\n\t\t\t\t<text>游客1信息</text>\r\n\t\t\t\t<view class="text-xs">需填写<text class="text-[#FF2F11]">1</text>位，用于入园身份验证</view>\r\n\t\t\t</view>\r\n\t\t\t<view class="py-2">\r\n\t\t\t\t<view class="flex my-2">\r\n\t\t\t\t\t<view class="w-[164rpx] h-[80rpx] rounded-md border-1 border-solid border-[#F0F0F0] relative flex items-center justify-center mr-2 select-box-color text-[#222]">\r\n\t\t\t\t\t\t<text class="text-sm">吴优</text>\r\n\t\t\t\t\t\t<text class="iconfont iconxuanze1 absolute -right-[2rpx] -bottom-[2rpx]"></text>\r\n\t\t\t\t\t</view>\r\n\t\t\t\t\t<view class="w-[164rpx] h-[80rpx] rounded-md border-1 border-solid border-[#F0F0F0] relative flex items-center justify-center mr-2 text-[#222]">\r\n\t\t\t\t\t\t<text class="text-sm">胡歌</text>\r\n\t\t\t\t\t\t<text class="iconfont iconxuanze1 absolute -right-[2rpx] -bottom-[2rpx]"></text>\r\n\t\t\t\t\t</view>\r\n\t\t\t\t\t<view class="w-[164rpx] h-[80rpx] rounded-md border-1 border-solid border-[#F0F0F0] relative flex items-center justify-center text-[#222]">\r\n\t\t\t\t\t\t<text class="text-sm">新增</text>\r\n\t\t\t\t\t\t<text class="nc-iconfont nc-icon-youV6xx text-[26rpx]"></text>\r\n\t\t\t\t\t</view>\r\n\t\t\t\t</view>\r\n\t\t\t\t<u--form labelPosition="left" ref="form1" labelWidth="70" :labelStyle="{color: \'#A3A3A3\', fontSize: \'14px\'}">\r\n\t\t\t\t\t<u-form-item label="联系姓名" prop="userInfo.name" borderBottom>\r\n\t\t\t\t\t\t<view class="border-style">\r\n\t\t\t\t\t\t\t<u--input border="none" placeholder="请输入联系姓名" placeholderClass="text-sm" v-model="createData.buyer_info.name"></u--input>\r\n\t\t\t\t\t\t</view>\r\n\t\t\t\t\t</u-form-item>\r\n\t\t\t\t\t<u-form-item label="手机号" prop="userInfo.name" borderBottom>\r\n\t\t\t\t\t\t<view class="border-style">\r\n\t\t\t\t\t\t\t<u--input border="none" placeholder="请输入手机号" placeholderClass="text-sm" v-model="createData.mobile"></u--input>\r\n\t\t\t\t\t\t</view>\r\n\t\t\t\t\t</u-form-item>\r\n\t\t\t\t\t<u-form-item label="证件类型" borderBottom>\r\n\t\t\t\t\t\t<view class="border-style">\r\n\t\t\t\t\t\t\t<text class="text-sm">身份证</text>\r\n\t\t\t\t\t\t</view>\r\n\t\t\t\t\t</u-form-item>\r\n\t\t\t\t\t<u-form-item label="证件号" prop="userInfo.name" borderBottom>\r\n\t\t\t\t\t\t<view class="border-style !border-0">\r\n\t\t\t\t\t\t\t<u--input border="none" placeholder="请输入证件号" placeholderClass="text-sm"  v-model="createData.buyer_info.id_card"></u--input>\r\n\t\t\t\t\t\t</view>\r\n\t\t\t\t\t</u-form-item>\r\n\t\t\t\t</u--form>\r\n\t\t\t</view>\r\n\t\t</view> '),(r(!0),d(f,null,c(G.value.num,(t=>(r(),n(l,{class:"chunk-wrap"},{default:s((()=>[o(l,{class:"chunk-head"},{default:s((()=>[o(a,null,{default:s((()=>[u("游客"+i(t)+"信息",1)])),_:2},1024)])),_:2},1024),o(l,{class:"py-2"},{default:s((()=>[o(R,{labelPosition:"left",ref_for:!0,ref:"form1",labelWidth:"70",labelStyle:{color:"#A3A3A3",fontSize:"14px"}},{default:s((()=>[o(g,{label:"联系姓名",prop:"userInfo.name",borderBottom:""},{default:s((()=>[o(l,{class:"border-style"},{default:s((()=>[o(w,{border:"none",placeholder:"请输入联系姓名",placeholderClass:"text-sm",modelValue:G.value.buyer_info[t-1].name,"onUpdate:modelValue":e=>G.value.buyer_info[t-1].name=e},null,8,["modelValue","onUpdate:modelValue"])])),_:2},1024)])),_:2},1024),1==t?(r(),n(g,{key:0,label:"手机号",prop:"userInfo.name",borderBottom:""},{default:s((()=>[o(l,{class:"border-style"},{default:s((()=>[o(w,{border:"none",type:"number",placeholder:"请输入手机号",placeholderClass:"text-sm",modelValue:G.value.mobile,"onUpdate:modelValue":e[4]||(e[4]=t=>G.value.mobile=t)},null,8,["modelValue"])])),_:1})])),_:1})):p("v-if",!0),o(g,{label:"证件类型",borderBottom:""},{default:s((()=>[o(l,{class:"border-style"},{default:s((()=>[o(a,{class:"text-sm"},{default:s((()=>[u("身份证")])),_:1})])),_:1})])),_:1}),o(g,{label:"证件号",prop:"userInfo.name",borderBottom:""},{default:s((()=>[o(l,{class:"border-style !border-0"},{default:s((()=>[o(w,{border:"none",type:"idcard",placeholder:"请输入证件号",placeholderClass:"text-sm",modelValue:G.value.buyer_info[t-1].id_card,"onUpdate:modelValue":e=>G.value.buyer_info[t-1].id_card=e},null,8,["modelValue","onUpdate:modelValue"])])),_:2},1024)])),_:2},1024)])),_:2},1536)])),_:2},1024)])),_:2},1024)))),256)),p(' <view class="chunk-wrap">\r\n\t\t\t<view class="chunk-head">\r\n\t\t\t\t<text>支付方式</text>\r\n\t\t\t</view>\r\n\t\t\t<view class="flex justify-between items-center h-[80rpx]">\r\n\t\t\t\t<view class="flex items-center">\r\n\t\t\t\t\t<image class="w-[42rpx] h-[42rpx]" :src="img(\'addon/tourism/tourism/way/discount_coupon.png\')" mode="widthFix"></image>\r\n\t\t\t\t\t<text class="ml-1 text-xs">微信支付</text>\r\n\t\t\t\t</view>\r\n\t\t\t\t<u-radio :labelDisabled="true"></u-radio>\r\n\t\t\t</view>\r\n\t\t</view>\r\n\t\t<view class="chunk-wrap">\r\n\t\t\t<view class="chunk-head">\r\n\t\t\t\t<text>优惠信息</text>\r\n\t\t\t</view>\r\n\t\t\t<view class="flex justify-between items-center h-[80rpx]">\r\n\t\t\t\t<view class="flex items-center">\r\n\t\t\t\t\t<image class="w-[42rpx] h-[42rpx]" :src="img(\'addon/tourism/tourism/way/discount_coupon.png\')" mode="widthFix"></image>\r\n\t\t\t\t\t<text class="ml-1 text-xs">抵用券</text>\r\n\t\t\t\t</view>\r\n\t\t\t\t<text class="text-[var(--text-color-light9)] text-xs flex items-center">查看<text class="nc-iconfont nc-icon-youV6xx text-[26rpx]"></text></text>\r\n\t\t\t</view>\r\n\t\t</view> '),o(l,{class:"h-[148rpx] w-screen"}),o(l,{class:"bg-white p-3 fixed bottom-0 left-0 right-0 flex items-center justify-between z-99"},{default:s((()=>[o(l,{class:"text-[#FA6400] text-xs"},{default:s((()=>[o(a,null,{default:s((()=>[u("总价")])),_:1}),o(a,{class:"ml-[2rpx] price-font"},{default:s((()=>[u("￥")])),_:1}),o(a,{class:"text-[38rpx] price-font"},{default:s((()=>{var t;return[u(i(null==(t=K.value.order_money)?void 0:t.toFixed(2)),1)]})),_:1})])),_:1}),o(l,{class:"ml-auto mr-2",onClick:e[5]||(e[5]=t=>Q.value=!Q.value)},{default:s((()=>[o(a,{class:"text-[#686868] text-xs mr-1"},{default:s((()=>[u("明细")])),_:1}),o(a,{class:"nc-iconfont nc-icon-shangV6xx-1 text-[#C2C2C2] text-xs font-bold"})])),_:1}),o(X,{text:"提交订单",color:"var(--primary-color)",shape:"circle",customStyle:{lineHeight:"76rpx",margin:"0rpx",color:"#fff",width:"278rpx"},type:"primary",size:"16",loading:at.value,onClick:rt},null,8,["loading"])])),_:1}),o(h,{show:Q.value,onClose:e[6]||(e[6]=t=>Q.value=!1),closeable:!0},{default:s((()=>[o(l,{class:"text-center py-[30rpx] font-bold leading-none"},{default:s((()=>[o(a,null,{default:s((()=>[u("费用明细")])),_:1})])),_:1}),o(y,{"scroll-y":"true",class:"max-h-[40vh]"},{default:s((()=>[o(l,{class:"flex px-[30rpx] mt-[20rpx]"},{default:s((()=>[o(l,{class:"font-bold"},{default:s((()=>[u("总价")])),_:1}),o(l,{class:"text-right flex-1 font-bold price-font"},{default:s((()=>[o(a,{class:"text-sm font-normal"},{default:s((()=>[u("￥")])),_:1}),o(a,{class:"text-[38rpx]"},{default:s((()=>{var t;return[u(i(null==(t=K.value.order_money)?void 0:t.toFixed(2)),1)]})),_:1})])),_:1})])),_:1}),(r(!0),d(f,null,c(K.value.order_items,((t,e)=>(r(),n(l,{class:"flex px-[30rpx] mt-[10rpx] text-sm text-gray-subtitle"},{default:s((()=>[o(l,null,{default:s((()=>[u(i(K.value.reserve_time)+" 出发",1)])),_:1}),p(" <view>{{ item.year }}-{{ item.month }}-{{ item.day }}</view> "),o(l,{class:"text-right flex-1"},{default:s((()=>[o(a,{class:"text-xs price-font"},{default:s((()=>[u("￥")])),_:1}),o(a,{class:"price-font"},{default:s((()=>[u(i(t.price),1)])),_:2},1024),o(a,{class:"mx-[10rpx]"},{default:s((()=>[u("x")])),_:1}),o(a,null,{default:s((()=>[u(i(t.num),1)])),_:2},1024)])),_:2},1024)])),_:2},1024)))),256)),p(' <view class="flex px-[30rpx] mt-[10rpx] text-sm text-gray-subtitle">\r\n\t\t            <view>{{ paymentData.reserve_time }} 出发</view>\r\n\t\t            <view class="text-right flex-1"></view>\r\n\t\t        </view> ')])),_:1}),o(l,{class:"h-[150rpx]"})])),_:1},8,["show"]),o(Y,{ref_key:"payRef",ref:L,onClose:dt},null,512),q.value?(r(),n(l,{key:0,class:"w-screen h-screen flex flex-col justify-center items-center"},{default:s((()=>[o(H,{icon:x(B)("static/resource/images/order_empty.png"),text:q.value},null,8,["icon","text"]),o(l,{class:"w-[240rpx] mt-[40rpx]"},{default:s((()=>[o(J,{class:"bg-[var(--primary-color)] text-[#fff] h-[80rpx] leading-[80rpx] rounded-[100rpx] text-[28rpx]",onClick:ct},{default:s((()=>[u("返回上一页")])),_:1})])),_:1})])),_:1})):p("v-if",!0),o(nt,{loading:Z.value},null,8,["loading"]),p(" 出发日期 "),x(ft)?(r(),n(st,{key:1,show:x(xt),defaultDate:G.value.reserve_time,onConfirm:bt,onClose:e[7]||(e[7]=t=>m(xt)?xt.value=!1:xt=!1),formatter:_t,confirmDisabledText:"请选择离店日期",ref:"calendar",monthNum:"2"},null,8,["show","defaultDate"])):p("v-if",!0)])),_:1},8,["style"])):p("v-if",!0)}}}),[["__scopeId","data-v-5b3fa075"]]);export{L as default};
