import{d as a,p as t,r as e,j as s,q as r,o as l,c as o,w as i,u as n,b as m,I as d,J as u,K as p,f as c,n as f,a3 as _,a4 as x,Q as g,i as h,g as k,h as v,l as b,L as y,y as w,z as j,Z as F,a9 as T,a as C,D as z}from"./index-d8a8f699.js";import{_ as A}from"./u-count-down.c4f9dc91.js";import{_ as D}from"./u-line-progress.b0f5c26d.js";import{_ as E}from"./u-empty.41eb000a.js";import{_ as P}from"./u-loading-page.c740ef13.js";import{g as S,a as I}from"./task.707c3c43.js";import{M as H}from"./mescroll-body.f9302aea.js";import{M}from"./mescroll-empty.2fe85dec.js";import{u as U}from"./useMescroll.26ccf5de.js";import{t as $}from"./topTabbar.a37f79d9.js";import{_ as B}from"./_plugin-vue_export-helper.1b428a4d.js";import"./u-icon.5ba98c98.js";import"./u-loading-icon.6808ae8c.js";import"./u-transition.db07fff7.js";import"./mescroll-i18n.49872024.js";const J=B(a({__name:"task_rewards",setup(a){const{mescrollInit:B,getMescroll:J}=U(x,_),L=$();L.setTopTabbarParam({title:"任务奖励"});let Z={};const q=t((()=>Object.keys(Z).length?T(Number(Z.height))+T(Z.top)+T(8)+426+"rpx":"426rpx"));let K=e(""),N=e(!0);s((async()=>{await S().then((a=>{K.value=a.data.is_open,0==K.value&&L.setTopTabbarParam({title:"任务奖励",topStatusBar:{textColor:"#333",bgColor:"#fff"}}),N.value=!1}))}));let O=e(!0),Q=e(!0);const R=e([{label:"未开始",value:1},{label:"进行中",value:2},{label:"已结束",value:3}]),W=r({data:[],searchParam:{status:2}}),X=a=>{Q.value=!0,I({page:a.num,limit:a.size,...W.searchParam}).then((t=>{let e=t.data.data.map((a=>(1===a.status?(a.time=new Date(a.start_time).getTime()-(new Date).getTime(),a.time=a.time<0?"":a.time):2===a.status&&(2!=a.time_type?(a.time=new Date(a.end_time).getTime()-(new Date).getTime(),a.time=a.time<0?"":a.time):a.time=""),a)));1==a.num&&(W.data=[]),W.data=W.data.concat(e),O.value=!1,Q.value=!1,a.endSuccess(e.length)})).catch((()=>{O.value=!1,Q.value=!1,a.endErr()}))};return(a,t)=>{const e=g,s=h,r=k(v("u-count-down"),A),_=z,x=k(v("u-line-progress"),D),T=k(v("u-empty"),E),S=k(v("u-loading-page"),P);return l(),o(s,{class:"bg-[#f8f8f8] min-h-[100vh]",style:f(a.themeColor())},{default:i((()=>[1!=n(K)||n(N)?c("v-if",!0):(l(),o(H,{key:0,ref:"mescrollRef",top:n(q),down:{use:!1},onInit:n(B),onUp:X},{default:i((()=>[n(O)?c("v-if",!0):(l(),o(s,{key:0,class:"fixed top-0 left-0 right-0 z-10"},{default:i((()=>[m(e,{class:"w-[100vw] min-h-[100%] h-[100%] align-middle",mode:"widthFix",src:n(b)("addon/shop_fenxiao/task_header_h5.png")},null,8,["src"]),m(s,{class:"bg-[#fff] text-[#626779] rounded-tl-[16rpx] rounded-tr-[16rpx] overflow-hidden relative z-10 -mt-[70rpx]"},{default:i((()=>[m(s,{class:"flex whitespace-nowrap justify-around pt-[26rpx] pb-[22rpx]"},{default:i((()=>[(l(!0),d(p,null,u(R.value,((a,t)=>(l(),o(s,{class:y(["text-[28rpx] leading-[52rpx] font-400",{"class-select":W.searchParam.status===a.value}]),onClick:t=>{return e=a.value,W.searchParam.status=e,W.data=[],void J().resetUpScroll();var e}},{default:i((()=>[w(j(a.label),1)])),_:2},1032,["class","onClick"])))),256))])),_:1})])),_:1})])),_:1})),W.data.length?(l(),o(s,{key:1,class:"py-[20rpx] sidebar-marign box-border relative z-2"},{default:i((()=>[(l(!0),d(p,null,u(W.data,((a,t)=>(l(),o(s,{key:t,class:y(["bg-[#fff] rounded-[16rpx] overflow-hidden",{"mb-[20rpx]":t<W.data.length}]),onClick:t=>(a=>{C({url:"/addon/shop_fenxiao/pages/task_detail",param:{id:a.id}})})(a)},{default:i((()=>[m(s,{class:"flex py-[30rpx] px-[20rpx] box-border"},{default:i((()=>[m(s,{class:"w-[160rpx] h-[160rpx] relative overflow-hidden"},{default:i((()=>[a.cover_thumb_mid?(l(),o(e,{key:0,class:"w-[160rpx] h-[160rpx] flex-shrink-0",mode:"aspectFill",src:n(b)(a.cover_thumb_mid),onError:t=>a.cover_thumb_mid="addon/shop_fenxiao/task.png"},null,8,["src","onError"])):(l(),o(e,{key:1,class:"w-[160rpx] h-[160rpx] flex-shrink-0",mode:"aspectFit",src:n(b)("addon/shop_fenxiao/task.png")},null,8,["src"])),m(s,{class:y(["absolute top-0 right-0 task opacity-60 rounded-tr-[12rpx] rounded-bl-[12rpx] px-[14rpx] leading-[1]",{"bg-[#EF000C]":2===a.status,"bg-[#FF6A1A]":1===a.status}])},{default:i((()=>[2===a.status?(l(),o(s,{key:0},{default:i((()=>["2"!=a.time_type?(l(),o(r,{key:0,time:a.time,format:"HH:mm:ss",autoStart:"",millisecond:""},null,8,["time"])):c("v-if",!0),"2"===a.time_type?(l(),o(_,{key:1},{default:i((()=>[w("长期有效")])),_:1})):c("v-if",!0)])),_:2},1024)):c("v-if",!0),1===a.status?(l(),o(s,{key:1},{default:i((()=>[m(r,{time:a.time,format:"HH:mm:ss",autoStart:"",millisecond:""},null,8,["time"])])),_:2},1024)):c("v-if",!0)])),_:2},1032,["class"])])),_:2},1024),m(s,{class:"flex-1 flex flex-col ml-[20rpx]"},{default:i((()=>[m(s,{class:"text-[28rpx] font-500 leading-[40rpx] flex items-center justify-between"},{default:i((()=>[m(_,{class:"text-[#333] truncate max-w-[380rpx]"},{default:i((()=>[w(j(a.name),1)])),_:2},1024),m(_,{class:y(["ml-[6rpx] text-[#8288A2]",{"!text-[var(--primary-color)]":2===a.status,"!text-[#FF6A1A]":1===a.status}])},{default:i((()=>[w(j(a.status_name),1)])),_:2},1032,["class"])])),_:2},1024),m(s,{class:"mt-[40rpx]"},{default:i((()=>[m(x,{percentage:a.task_member&&a.task_member.task_data.show_progress.rate||2,showText:!1,"active-color":"var(--primary-color)",inactiveColor:"#FFF1ED",height:"12rpx"},null,8,["percentage"]),m(s,{class:"flex items-center justify-between mt-[10rpx]"},{default:i((()=>[m(s,null,{default:i((()=>[m(_,{class:"text-[#626779] text-[24rpx] leading-[34rpx]"},{default:i((()=>[w("奖励佣金")])),_:1}),m(_,{class:"text-[var(--primary-color)] text-[26rpx] ml-[4rpx] leading-[36rpx] font-500"},{default:i((()=>{var t;return[w(j(n(F)(null==(t=a.rules[0].reward)?void 0:t.commission))+"元",1)]})),_:2},1024)])),_:2},1024),m(s,{class:"text-[24rpx]"},{default:i((()=>[a.task_member?(l(),o(s,{key:0},{default:i((()=>[m(_,{class:"text-[var(--primary-color)]"},{default:i((()=>[w(j(`${"元"==a.task_member.task_data.util?n(F)(a.task_member.task_data.now_data):a.task_member.task_data.now_data}/`),1)])),_:2},1024),m(_,{class:"text-[#8288A2]"},{default:i((()=>[w(j(`${"元"==a.task_member.task_data.util?n(F)(a.task_member.task_data.end_data):a.task_member.task_data.end_data}${a.task_member.task_data.util}`),1)])),_:2},1024)])),_:2},1024)):(l(),o(s,{key:1},{default:i((()=>[m(_,{class:"text-[var(--primary-color)]"},{default:i((()=>[w(" 0")])),_:1}),m(_,{class:"text-[#8288A2]"},{default:i((()=>[w("/"+j("元"==a.task_data.util?n(F)(a.task_data.end_data):a.task_data.end_data)+j(a.task_data.util),1)])),_:2},1024)])),_:2},1024))])),_:2},1024)])),_:2},1024)])),_:2},1024)])),_:2},1024)])),_:2},1024)])),_:2},1032,["class","onClick"])))),128))])),_:1})):c("v-if",!0),W.data.length||n(O)||n(Q)?c("v-if",!0):(l(),o(M,{key:2,option:{icon:n(b)("static/resource/images/empty.png")}},null,8,["option"]))])),_:1},8,["top","onInit"])),0!=n(K)||n(N)?c("v-if",!0):(l(),o(s,{key:1,class:"h-[100vh] w-[100vw] flex justify-center items-center"},{default:i((()=>[m(T,{text:"任务奖励设置未开启",width:"347rpx",height:"265rpx",icon:n(b)("static/resource/images/system/empty.png")},null,8,["icon"])])),_:1})),m(S,{"bg-color":"rgb(248,248,248)",loading:n(N),loadingText:"",fontSize:"16",color:"#333"},null,8,["loading"])])),_:1},8,["style"])}}}),[["__scopeId","data-v-171e541c"]]);export{J as default};
