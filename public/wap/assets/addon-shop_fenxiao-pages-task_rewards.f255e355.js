import{d as e,r as t,g as a,h as s,o as l,c as r,w as o,b as d,x as u,y as i,C as n,i as m,p,u as _,n as c,E as f,F as x,G as v,f as k,a5 as h,a6 as b,V as g,H as y,$ as w,a as j,N as C}from"./index-905183d4.js";import{_ as E}from"./u-line-progress.374f35c8.js";import{g as D}from"./task.287f672e.js";import{_ as z}from"./u-count-down.eabeb208.js";import{M as I}from"./mescroll-body.b8d008ed.js";import{M as T}from"./mescroll-empty.f9bce990.js";import{u as M}from"./useMescroll.26ccf5de.js";import{_ as P}from"./_plugin-vue_export-helper.1b428a4d.js";import"./mescroll-uni-option.0af4878d.js";import"./mescroll-i18n.6025c811.js";/* empty css                                                                       */const S=e({__name:"count-down",props:{time:{type:String,default:""}},setup(e){const p=e,_=t({}),c=e=>{_.value=e};return(e,t)=>{const f=n,x=m,v=a(s("u-count-down"),z);return l(),r(v,{time:p.time,format:"DD:HH:mm:ss",autoStart:"",millisecond:"",onChange:c},{default:o((()=>[d(x,{class:"time"},{default:o((()=>[d(f,{class:"time__days"},{default:o((()=>[u(i(_.value.days)+" 天",1)])),_:1}),d(f,{class:"time__hours"},{default:o((()=>[u(i(_.value.hours>10?_.value.hours:"0"+_.value.hours)+" 时",1)])),_:1}),d(f,{class:"time__minutes"},{default:o((()=>[u(i(_.value.minutes>10?_.value.minutes:"0"+_.value.minutes)+" 分",1)])),_:1}),d(f,{class:"time__seconds"},{default:o((()=>[u(i(_.value.seconds>10?_.value.seconds:"0"+_.value.seconds)+" ",1)])),_:1})])),_:1})])),_:1},8,["time"])}}}),$=P(e({__name:"task_rewards",setup(e){const{mescrollInit:z,getMescroll:P}=M(b,h);let $=t(!0),F=t(!0);const H=t([{label:"未开始",value:1},{label:"进行中",value:2},{label:"已结束",value:3}]),U=p({data:[],searchParam:{status:2}}),A=e=>{F.value=!0,D({page:e.num,limit:e.size,...U.searchParam}).then((t=>{let a=t.data.data.map((e=>(1===e.status?(e.time=new Date(e.start_time).getTime()-(new Date).getTime(),e.time=e.time<0?"":e.time):2===e.status&&(2!=e.time_type?(e.time=new Date(e.end_time).getTime()-(new Date).getTime(),e.time=e.time<0?"":e.time):e.time=""),e)));1==e.num&&(U.data=[]),U.data=U.data.concat(a),$.value=!1,F.value=!1,e.endSuccess(a.length)})).catch((()=>{$.value=!1,F.value=!1,e.endErr()}))};return(e,t)=>{const p=m,h=n,b=C,D=a(s("u-line-progress"),E);return l(),r(p,{class:"bg-[#f8f8f8] min-h-[100vh]",style:c(e.themeColor())},{default:o((()=>[d(I,{ref:"mescrollRef",top:"402rpx",down:{use:!1},onInit:_(z),onUp:A},{default:o((()=>[_($)?k("v-if",!0):(l(),r(p,{key:0,class:"fixed top-0 left-0 right-0 z-10"},{default:o((()=>[d(p,{class:"w-[100%] h-[340rpx] background-size",style:c({backgroundImage:"url("+_(g)("addon/shop_fenxiao/task-header.png")+")"})},null,8,["style"]),d(p,{class:"bg-[#fff] text-[#999] rounded-tl-[28rpx] rounded-tr-[28rpx] overflow-hidden relative z-10 mt-[-28rpx]"},{default:o((()=>[d(p,{class:"flex whitespace-nowrap justify-around"},{default:o((()=>[(l(!0),f(v,null,x(H.value,((e,t)=>(l(),r(p,{class:y(["text-[28rpx] leading-[90rpx] font-bold",{"class-select":U.searchParam.status===e.value}]),onClick:t=>{return a=e.value,U.searchParam.status=a,U.data=[],void P().resetUpScroll();var a}},{default:o((()=>[u(i(e.label),1)])),_:2},1032,["class","onClick"])))),256))])),_:1})])),_:1})])),_:1})),U.data.length?(l(),r(p,{key:1,class:"p-[24rpx] box-border relative z-2"},{default:o((()=>[(l(!0),f(v,null,x(U.data,((e,t)=>(l(),r(p,{key:t,class:y(["bg-[#fff] rounded-[10rpx] overflow-hidden",{"mb-[24rpx]":t<U.data.length}]),onClick:t=>(e=>{j({url:"/addon/shop_fenxiao/pages/task_detail",param:{id:e.id}})})(e)},{default:o((()=>[d(p,{class:"h-[80rpx] flex items-center justify-between pl-[28rpx] border-[#E2E2E2] border-0 border-b-[1rpx] border-solid box-border"},{default:o((()=>[d(p,{class:"text-[24rpx] flex-1"},{default:o((()=>[u("奖励"),d(h,{class:"text-[var(--primary-color)] mx-[10rpx]"},{default:o((()=>{var t;return[u(i(_(w)(null==(t=e.rules[0].reward)?void 0:t.commission)),1)]})),_:2},1024),u("佣金")])),_:2},1024),1===e.status?(l(),r(p,{key:0,class:"pr-[15rpx] pl-[20rpx] rounded-l-[17.5rpx] !text-[24rpx] bg-[#fdf6ec] text-[#eebe77] h-[35rpx] flex items-center"},{default:o((()=>[d(_(S),{time:e.time},null,8,["time"]),d(h,null,{default:o((()=>[u("后开始")])),_:1})])),_:2},1024)):k("v-if",!0),2===e.status?(l(),r(p,{key:1,class:"pr-[15rpx] pl-[20rpx] rounded-l-[17.5rpx] !text-[24rpx] bg-[#fdf6ec] text-[#eebe77] h-[35rpx] flex items-center"},{default:o((()=>["2"!=e.time_type?(l(),r(_(S),{key:0,time:e.time},null,8,["time"])):k("v-if",!0),"2"!=e.time_type?(l(),r(h,{key:1},{default:o((()=>[u("后结束")])),_:1})):k("v-if",!0),"2"===e.time_type?(l(),r(h,{key:2},{default:o((()=>[u("长期有效")])),_:1})):k("v-if",!0)])),_:2},1024)):k("v-if",!0),3===e.status?(l(),r(p,{key:2,class:"pr-[15rpx] pl-[20rpx] rounded-l-[17.5rpx] !text-[24rpx] bg-[#ddd] text-[#fff] h-[35rpx] flex items-center"},{default:o((()=>[d(h,null,{default:o((()=>[u("已结束")])),_:1})])),_:1})):k("v-if",!0)])),_:2},1024),d(p,{class:"flex py-[30rpx] px-[28rpx] box-border"},{default:o((()=>[e.cover_thumb_mid?(l(),r(b,{key:0,class:"w-[180rpx] h-[180rpx] flex-shrink-0",mode:"aspectFill",src:_(g)(e.cover_thumb_mid),onError:t=>e.cover_thumb_mid="addon/shop_fenxiao/task.png"},null,8,["src","onError"])):(l(),r(b,{key:1,class:"w-[180rpx] h-[180rpx] flex-shrink-0",mode:"aspectFit",src:_(g)("addon/shop_fenxiao/task.png")},null,8,["src"])),d(p,{class:"flex-1 flex flex-col justify-between ml-[20rpx]"},{default:o((()=>[d(p,{class:"text-[28rpx] font-600 multi-hidden leading-[40rpx] min-h-[80rpx]"},{default:o((()=>[u(i(e.name),1)])),_:2},1024),d(p,null,{default:o((()=>[d(D,{percentage:e.task_member&&e.task_member.task_data.show_progress.rate||2,showText:!1,"active-color":"var(--primary-color)",height:"17rpx"},null,8,["percentage"]),d(p,{class:"text-right text-[24rpx] text-[var(--primary-color)] mt-[16rpx]"},{default:o((()=>[e.task_member?(l(),r(h,{key:0},{default:o((()=>[u(i(`${"元"==e.task_member.task_data.util?_(w)(e.task_member.task_data.now_data):e.task_member.task_data.now_data}/${"元"==e.task_member.task_data.util?_(w)(e.task_member.task_data.end_data):e.task_member.task_data.end_data}${e.task_member.task_data.util}`),1)])),_:2},1024)):(l(),r(h,{key:1},{default:o((()=>[u(" 0/"+i("元"==e.task_data.util?_(w)(e.task_data.end_data):e.task_data.end_data)+i(e.task_data.util),1)])),_:2},1024))])),_:2},1024)])),_:2},1024)])),_:2},1024)])),_:2},1024)])),_:2},1032,["class","onClick"])))),128))])),_:1})):k("v-if",!0),U.data.length||_($)||_(F)?k("v-if",!0):(l(),r(T,{key:2,option:{icon:_(g)("static/resource/images/empty.png")}},null,8,["option"]))])),_:1},8,["onInit"])])),_:1},8,["style"])}}}),[["__scopeId","data-v-64f3a7c3"]]);export{$ as default};