import{g as e,h as t,o as a,c as r,w as l,b as s,x as i,f as o,E as d,G as n,F as c,H as u,y as m,C as p,i as f,a4 as x,d as h,r as _,j as v,l as g,b4 as b,aR as y,b5 as k,u as w,aN as D,n as A,a as $,a3 as j,ab as T,aE as S,t as C,V as E,$ as M,I as N}from"./index-656dc629.js";import{_ as V}from"./u-icon.286409fc.js";import{_ as O}from"./u--image.8451ef47.js";import{_ as F}from"./u-picker.0440c6d1.js";import{_ as H}from"./u-tabbar.8ee28cae.js";import{_ as Q}from"./pay.99eeea8c.js";import{_ as I}from"./u-loading-page.f8275a02.js";import{b as P}from"./technician.38170cd2.js";import{o as z,a as J}from"./order.7b3e1a9b.js";import{d as q}from"./goods.69a93840.js";import{_ as B}from"./u-popup.7e287da6.js";import{_ as G}from"./_plugin-vue_export-helper.1b428a4d.js";import{c as L}from"./cloneDeep.245cd6de.js";import"./u-image.38c45e12.js";import"./u-transition.825c0e35.js";import"./u-loading-icon.5e5c27a0.js";import"./u-safe-bottom.d9fa806b.js";import"./u-button.e2de732d.js";import"./pay.c96fa6a1.js";import"./isArrayLike.512b2e7f.js";function R(e){return e<10?`0${e}`:e}function Y(){const e=new Date,t=e.getFullYear(),a=e.getMonth()+1,r=e.getDate(),l=t+"-"+R(a)+"-"+R(r),s=R(a)+"-"+R(r),i=R(a)+"月"+R(r)+"日",o=e.getHours(),d=e.getMinutes(),n=e.getSeconds(),c=Math.floor(Date.now()/1e3);return{y:t,md:i,mdTime:s,date:l,time:R(o)+":"+R(d)+":"+R(n),seconTime:c}}function U(e,t){const a=new Date(e),r=a.getFullYear(),l=a.getMonth()+1,s=a.getDate(),i=a.getDay(),o=a.getHours(),d=a.getMinutes();return{allDate:`${r}/${R(l)}/${R(s)}`,date:`${R(r)}-${R(l)}-${R(s)}`,md:`${R(l)}月${R(s)}日`,mdTime:`${R(l)}-${R(s)}`,day:`周${["日","一","二","三","四","五","六"][i]}`,dayNum:`${[7,1,2,3,4,5,6][i]}`,hour:R(o)+":"+R(d)+(t?"":":00")}}function K(e){let t=Math.floor(e/3600),a=Math.floor(e/60)-60*t,r=e%60;return t=t<10?"0"+t:t,a=a<10?"0"+a:a,r=r<10?"0"+r:r,t+":"+a+":"+r}function W(e){const t=e.split(":");return 60*t[0]*60+60*t[1]+Number(t[2])}const X=G({name:"times",model:{prop:"showPop",event:"change"},props:{rules:{type:Object,default:()=>({})},isQuantum:{type:Boolean,default:!1}},data:()=>({orderDateTime:"",orderDateStamp:"",dateArr:[],timeArr:[],nowDate:"",dateActive:0,timeActive:0,selectDate:"",show:!1}),created(){this.nowDate=Y().md,this.initOnload()},methods:{initOnload(){let e=function(){const e=[],t=(new Date).getTime();let a=864e5,r={0:"今天",1:"明天",2:"后天"};for(let l=0;l<10;l++)e.push({date:U(t+a*l).date,mdTime:U(t+a*l).md,md:r[l]?r[l]:U(t+a*l).md,timeStamp:t+a*l,week:U(t+a*l).day,dayNum:U(t+a*l).dayNum,disable:!1});return e}();this.timeArr=function(e="10:00:00",t="21:00:00",a=1,r=!1){const l=[],s=U(Date.now()).allDate,i=`${s} ${t}`,o=new Date(`${s} ${e}`).getTime(),d=new Date(i).getTime(),n=36e5*a,c=(d-o)/n,u=c%2==0?c:c-1;let m=0;for(let p=o;p<=d;p+=n)if(r?(m++,l.push({begin:U(p,r).hour,end:U(p+n,r).hour,disable:!1})):l.push({time:U(p).hour,disable:!1}),r&&m>=u)return l;return l}(K(this.rules.start),K(this.rules.end),Number(this.rules.interval)/60,this.isQuantum);let t=Math.floor(W(Y().time))+60*parseFloat(this.rules.advance)*60;this.dateArr=[],e.forEach(((e,a)=>{-1!=this.rules.week.indexOf(e.dayNum)&&(e.children=JSON.parse(JSON.stringify(this.timeArr)),e.children.forEach(((a,r)=>{e.mdTime==this.nowDate&&t>`${W(a.begin+":00")}`&&delete e.children[r]})),e.children=e.children.filter((e=>""!==e)),this.dateArr.push(e))}));let a=!0;this.dateArr.forEach(((e,t)=>{e.children.forEach(((r,l)=>{!r.disable&&a&&(a=!1,this.timeActive=l,this.dateActive=t,this.selectDate=this.dateArr[t].mdTime,this.orderDateStamp=this.dateArr[t].date,this.orderDateTime=`${this.selectDate} ${e.children[this.timeActive].begin}-${e.children[this.timeActive].end}`,this.$emit("change",this.orderDateTime),this.$emit("getStamp",this.orderDateStamp))}))}))},selectDateEvent(e,t){this.dateActive=e,this.selectDate=t.mdTime,this.orderDateStamp=t.date,this.timeActive=0,this.orderDateTime=`${this.selectDate} ${t.children[this.timeActive].begin}-${t.children[this.timeActive].end}`,this.$emit("change",this.orderDateTime),this.$emit("getStamp",this.orderDateStamp)},selectTimeEvent(e,t){this.handleSelectQuantum(e,t),this.show=!1,this.$emit("change",this.orderDateTime)},handleSelectQuantum(e,t){this.timeActive=e,this.orderDateTime=`${this.selectDate} ${t.begin}-${t.end}`}}},[["render",function(h,_,v,g,b,y){const k=p,w=f,D=x,A=e(t("u-popup"),B);return a(),r(A,{show:b.show,mode:"bottom",round:10,closeable:"",onClose:_[0]||(_[0]=e=>b.show=!1)},{default:l((()=>[s(w,{class:"box h-[728rpx]"},{default:l((()=>[s(w,{class:"title px-[30rpx] box-border text-center text-[28rpx] font-bold h-[90rpx] leading-[90rpx] border-0 border-solid border-[#f7f4f4] border-b-[2rpx]"},{default:l((()=>[s(k,null,{default:l((()=>[i("请选择上门时间")])),_:1})])),_:1}),b.dateArr.length?(a(),r(w,{key:0,class:"body flex h-[calc(100%-90rpx)] box-border"},{default:l((()=>[o(" 左侧日期选择 "),s(D,{"scroll-y":!0,class:"left bg-[#f8f8f8] shrink-0 w-[230rpx]","scroll-with-animation":"","scroll-into-view":"id"+(b.dateActive?b.dateActive-1:0)},{default:l((()=>[(a(!0),d(n,null,c(b.dateArr,((e,t)=>(a(),d(n,{key:t},[e.children.length>0?(a(),r(w,{key:0,class:u(["date-box flex px-[30rpx] py-[16rpx] box-border text-[24rpx] items-center",{"bg-[#fff]":t==b.dateActive}]),id:"id"+t,onClick:a=>y.selectDateEvent(t,e)},{default:l((()=>[s(w,{class:"text-[24rpx] leading-[58rpx]"},{default:l((()=>[i(m(e.md),1)])),_:2},1024),s(w,{class:"text-[24rpx] leading-[58rpx]"},{default:l((()=>[i("("+m(e.week)+")",1)])),_:2},1024)])),_:2},1032,["id","onClick","class"])):o("v-if",!0)],64)))),128))])),_:1},8,["scroll-into-view"]),o(" 右侧时间选择 "),s(D,{"scroll-y":!0,class:"right w-[calc(100%-230rpx)] px-[30rpx] box-border","scroll-with-animation":"","scroll-into-view":"id"+(b.timeActive?b.timeActive-1:0)},{default:l((()=>[o(" 时间选项 "),(a(!0),d(n,null,c(b.dateArr[b.dateActive].children,((e,t)=>(a(),d(n,{key:t},[e.disable?o("v-if",!0):(a(),r(w,{key:0,class:u(["h-[72rpx] flex border-0 border-solid border-b-[2rpx] border-[#eee] justify-between items-center",{"text-[var(--primary-color)]":t==b.timeActive}]),onClick:a=>y.selectTimeEvent(t,e),id:"id"+t},{default:l((()=>[s(w,{class:u(["text-[24rpx]",{"text-[var(--primary-color)]":t==b.timeActive}])},{default:l((()=>[s(k,null,{default:l((()=>[i(m(e.begin)+"-"+m(e.end),1)])),_:2},1024)])),_:2},1032,["class"]),t==b.timeActive?(a(),r(k,{key:0,class:"nc-iconfont nc-icon-duihaoV6mm mr-[30rpx] text-[38rpx]"})):o("v-if",!0)])),_:2},1032,["onClick","class","id"]))],64)))),128))])),_:1},8,["scroll-into-view"])])),_:1})):o("v-if",!0)])),_:1})])),_:1},8,["show"])}]]),Z=G(h({__name:"payment",setup(u){let x=_(!1),h=_([[]]),B=_(!1),G=_({}),R=_(null);const Y=_(!1);let U=_({order_key:"",technician_id:"",technician_name:"默认分配",reserve_service_time:"",reserve_service_time_stamp:"",member_remark:"",delivery:{take_address_id:""}});uni.getStorageSync("o2oCreateData")&&Object.assign(U.value,uni.getStorageSync("o2oCreateData"));let K=_("");v((e=>{K.value=e.id,W(e.id),Z()}));const W=e=>{x.value=!0,P(e).then((e=>{h.value[0].push({label:"默认分配",id:""}),e.data.forEach(((e,t)=>{let a={};a.label=e.name,a.id=e.id,h.value[0].push(a),x.value=!1}))})).catch((()=>{x.value=!1}))},Z=()=>{q().then((e=>{G.value=e.data}))},ee=e=>{U.value.technician_id=e.value[0].id,U.value.technician_name=e.value[0].label,B.value=!1},te=uni.getStorageSync("selectAddressCallback");te&&(U.value.delivery.take_address_id=te.address_id,uni.removeStorage({key:"selectAddressCallback"}));const ae=()=>{uni.setStorage({key:"selectAddressCallback",data:{back:`/addon/o2o/pages/order/payment?id=${K.value}`},success(){$({url:"/addon/o2o/pages/address/index"})}})};(()=>{let e=L(U.value);e.sku=JSON.stringify(e.sku),x.value=!0,z(e).then((e=>{R.value=e.data,U.value.order_key=e.data.order_key,x.value=!1})).catch((()=>{x.value=!1}))})();let re=0;const le=_(null),se=()=>{if(!R.value.delivery.take_address&&(N({title:"请选择上门地址",icon:"none"}),1)||!U.value.reserve_service_time&&(N({title:"请选择上门时间",icon:"none"}),1)||Y.value)return;Y.value=!0;let e=L(U.value);J(e).then((({data:e})=>{var t;re=e.order_id,0==R.value.basic.order_money?$({url:"/addon/o2o/pages/order/detail",param:{order_id:re},mode:"redirectTo"}):null==(t=le.value)||t.open(e.trade_type,e.order_id,`/addon/o2o/pages/order/detail?order_id=${e.order_id}`)})).catch((()=>{Y.value=!1}))};let ie=_(null);const oe=()=>{ie.value.show=!0},de=e=>{U.value.reserve_service_time=e},ne=e=>{U.value.reserve_service_time_stamp=new Date(e).getTime()/1e3},ce=()=>{$({url:"/addon/o2o/pages/order/detail",param:{order_id:re},mode:"redirectTo"})},ue=g(),{query:me}=b(location.href);return me.code&&y()&&k({code:me.code}).then((e=>{ue.getMemberInfo()})),(u,_)=>{const v=p,g=f,b=e(t("u-icon"),V),y=e(t("u--image"),O),k=e(t("u-picker"),F),$=j,N=T,P=e(t("u-tabbar"),H),z=e(t("pay"),Q),J=e(t("u-loading-page"),I);return a(),r(g,{style:A(u.themeColor())},{default:l((()=>[!w(x)&&w(R)?(a(),r(g,{key:0,class:"bg-[#F6F8FA] min-h-screen overflow-hidden py-[20rpx] px-[24rpx]"},{default:l((()=>[o(" 上门地址 "),s(g,{class:"flex items-center py-[24rpx] px-[24rpx] bg-[#fff] rounded",onClick:ae},{default:l((()=>[s(g,{class:"flex-1 w-0"},{default:l((()=>[u.$u.test.isEmpty(w(R).delivery.take_address)?(a(),r(g,{key:1,class:"text-[26rpx]"},{default:l((()=>[i(m(w(C)("addHomeAddress")),1)])),_:1})):(a(),r(g,{key:0},{default:l((()=>[s(g,{class:"font-500 text-[30rpx] mb-[10rpx]"},{default:l((()=>[i(m(w(R).delivery.take_address.name)+" ",1),s(v,{class:"text-[30rpx]"},{default:l((()=>[i(m(w(S)(w(R).delivery.take_address.mobile)),1)])),_:1})])),_:1}),s(g,{class:"text-[26rpx] text-gray-subtitle mt-[10rpx] leading-[40rpx] line-feed"},{default:l((()=>[i(m(w(R).delivery.take_address.full_address),1)])),_:1})])),_:1}))])),_:1}),s(v,{class:"nc-iconfont nc-icon-youV6xx text-[26rpx] text-[#666]"})])),_:1}),(a(!0),d(n,null,c(w(R).goods_data,((e,t)=>(a(),r(g,{class:"outline-border"},{default:l((()=>[s(y,{width:"168rpx",height:"168rpx",src:w(E)(e.sku_image),model:"aspectFill"},{error:l((()=>[s(b,{name:"photo",color:"#999",size:"50"})])),_:2},1032,["src"]),s(g,{class:"flex flex-col py-1 flex-1 ml-[10rpx]"},{default:l((()=>[s(g,{class:"text-ellipsis text-[#333] text-[26rpx] leading-normal font-500"},{default:l((()=>[i(m(e.goods.goods_name),1)])),_:2},1024),s(g,{class:"flex justify-between mt-auto"},{default:l((()=>[s(g,{class:"text-[var(--price-text-color)] font-500 price-font"},{default:l((()=>[s(v,{class:"text-xs"},{default:l((()=>[i("￥")])),_:1}),s(v,null,{default:l((()=>[i(m(w(M)(e.price)),1)])),_:2},1024)])),_:2},1024),s(g,{class:"font-500 text-sm"},{default:l((()=>[s(v,{class:"text-[26rpx]"},{default:l((()=>[i("x")])),_:1}),i(m(e.num),1)])),_:2},1024)])),_:2},1024)])),_:2},1024)])),_:2},1024)))),256)),s(g,{class:"bg-[#fff] mt-4 p-3 rounded-lg"},{default:l((()=>[o(" 预约技师 "),s(g,{class:"flex justify-between items-center box-border py-[24rpx]"},{default:l((()=>[s(g,{class:"flex-align"},{default:l((()=>[s(v,{class:"text-[28rpx] text-[#4D4D4D] font-bold nc-iconfont nc-icon-qiuzhirenyuanV6xx1"}),s(v,{class:"text-[28rpx] ml-2"},{default:l((()=>[i(m(w(C)("selectiveTechnician")),1)])),_:1})])),_:1}),s(g,{class:"flex-align text-[#63676D]",onClick:_[0]||(_[0]=e=>D(B)?B.value=!0:B=!0)},{default:l((()=>[s(g,{class:"text-[28rpx] ml-2 text-right"},{default:l((()=>[i(m(w(U).technician_name?w(U).technician_name:w(C)("selectiveTechnician")),1)])),_:1}),s(v,{class:"text-[26rpx] text-[#666] nc-iconfont nc-icon-youV6xx"})])),_:1})])),_:1}),s(k,{show:w(B),columns:w(h),keyName:"label",onConfirm:ee,onCancel:_[1]||(_[1]=e=>D(B)?B.value=!1:B=!1)},null,8,["show","columns"]),o(" 预约时间 "),s(g,{class:"flex justify-between items-center box-border py-[24rpx]"},{default:l((()=>[s(g,{class:"flex-align"},{default:l((()=>[s(v,{class:"text-[28rpx] text-[#4D4D4D] font-bold nc-iconfont nc-icon-shijianV6xx"}),s(v,{class:"text-[28rpx] ml-2"},{default:l((()=>[i(m(w(C)("addHomeTime")),1)])),_:1})])),_:1}),s(g,{class:"flex-align text-[#63676D]",onClick:oe},{default:l((()=>[s(g,{class:"text-[28rpx] ml-2 text-right"},{default:l((()=>[i(m(w(U).reserve_service_time?w(U).reserve_service_time:w(C)("selectAddTimePlaceholder")),1)])),_:1}),s(v,{class:"text-[26rpx] text-[#666] nc-iconfont nc-icon-youV6xx"})])),_:1})])),_:1}),Object.keys(w(G)).length?(a(),r(w(X),{key:0,ref_key:"selectTime",ref:ie,rules:w(G),isQuantum:!0,onChange:de,onGetStamp:ne},null,8,["rules"])):o("v-if",!0),o(" 备注 "),s(g,{class:"flex justify-between items-center box-border py-[24rpx]"},{default:l((()=>[s(v,{class:"text-[28rpx]"},{default:l((()=>[i(m(w(C)("buysMessage")),1)])),_:1}),s(g,{class:"flex-align text-[#63676D]"},{default:l((()=>[s($,{class:"uni-input text-[28rpx] ml-2 text-right",placeholder:w(C)("messagePlaceholder"),modelValue:w(U).member_remark,"onUpdate:modelValue":_[2]||(_[2]=e=>w(U).member_remark=e)},null,8,["placeholder","modelValue"])])),_:1})])),_:1})])),_:1}),s(g,{class:"mt-[20rpx] p-[24rpx] rounded-md bg-white"},{default:l((()=>[s(g,{class:"flex font-500 py-[10rpx]"},{default:l((()=>[s(g,{class:"text-[28rpx] w-[150rpx]"},{default:l((()=>[i(m(w(C)("goodsMoney")),1)])),_:1}),s(g,{class:"flex-1 w-0 text-right text-[var(--price-text-color)] price-font"},{default:l((()=>[s(v,{class:"text-[24rpx]"},{default:l((()=>[i("￥")])),_:1}),s(v,null,{default:l((()=>[i(m(w(M)(w(R).basic.goods_money)),1)])),_:1})])),_:1})])),_:1})])),_:1}),s(g,{class:"h-[148rpx] w-screen"}),s(P,{fixed:!0,placeholder:!0,safeAreaInsetBottom:!0},{default:l((()=>[s(g,{class:"flex-1 flex items-center justify-between"},{default:l((()=>[s(g,{class:"whitespace-nowrap px-[30rpx] text-color font-600 leading-[45rpx]"},{default:l((()=>[s(v,{class:"text-[#333333] text-[26rpx]"},{default:l((()=>[i(m(w(C)("total")),1)])),_:1}),s(v,{class:"text-[24rpx] font-500 text-[var(--price-text-color)] price-font"},{default:l((()=>[i("￥")])),_:1}),s(v,{class:"text-[34rpx] mr-[10rpx] font-500 text-[var(--price-text-color)] price-font"},{default:l((()=>[i(m(w(M)(w(R).basic.order_money)),1)])),_:1})])),_:1}),s(N,{class:"!px-[40rpx] !h-[60rpx] text-[28rpx] mr-[30rpx] leading-[60rpx] rounded-full text-white bg-[var(--primary-color)]",onClick:se},{default:l((()=>[i(m(w(C)("submit")),1)])),_:1})])),_:1})])),_:1}),s(z,{ref_key:"payRef",ref:le,onClose:ce},null,512)])),_:1})):o("v-if",!0),s(J,{"bg-color":"rgb(248,248,248)",loading:w(x),fontSize:"16",color:"#333"},null,8,["loading"])])),_:1},8,["style"])}}}),[["__scopeId","data-v-7226638e"]]);export{Z as default};
