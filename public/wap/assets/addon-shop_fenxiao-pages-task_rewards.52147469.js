import{d as t,j as a,r as e,p as s,L as l,o as r,c as o,w as i,u as d,b as u,P as n,a7 as m,Q as c,f as p,n as _,a8 as x,a9 as f,B as v,i as g,g as k,h,E as b,R as y,y as w,z as j,a1 as F,a as T,D as C}from"./index-7bf68536.js";import{_ as P}from"./u-count-down.05562681.js";import{_ as D}from"./u-line-progress.288a6e80.js";import{_ as E}from"./loading-page.vue_vue_type_script_setup_true_lang.124ad65f.js";import{g as z,a as S}from"./task.e299cd26.js";import{M as A}from"./mescroll-body.b6d57b41.js";import{M as H}from"./mescroll-empty.fcefb74e.js";import{u as I}from"./useMescroll.26ccf5de.js";import{t as M}from"./topTabbar.f3f9eebd.js";import{_ as $}from"./_plugin-vue_export-helper.1b428a4d.js";import"./u-loading-page.566c330a.js";import"./u-loading-icon.b37701e7.js";import"./u-transition.cdf87992.js";import"./mescroll-i18n.14e7fe02.js";/* empty css                                                                       */const B=$(t({__name:"task_rewards",setup(t){const{mescrollInit:$,getMescroll:B}=I(f,x),R=M();R.setTopTabbarParam({title:"任务奖励"});let U={};const L=a((()=>Object.keys(U).length?"588rpx":"414rpx")),O=e(""),Q=e(!0);s((async()=>{await z().then((t=>{O.value=t.data.is_open,0==O.value&&R.setTopTabbarParam({title:"任务奖励",topStatusBar:{textColor:"#333",bgColor:"#fff"}}),Q.value=!1}))}));const q=e(!0),G=e(!0),J=e([{label:"未开始",value:1},{label:"进行中",value:2},{label:"已结束",value:3}]),K=l({data:[],searchParam:{status:2}}),N=t=>{G.value=!0,S({page:t.num,limit:t.size,...K.searchParam}).then((a=>{let e=a.data.data.map((t=>(1===t.status?(t.time=new Date(t.start_time).getTime()-(new Date).getTime(),t.time=t.time<0?"":t.time):2===t.status&&(2!=t.time_type?(t.time=new Date(t.end_time).getTime()-(new Date).getTime(),t.time=t.time<0?"":t.time):t.time=""),t)));1==t.num&&(K.data=[]),K.data=K.data.concat(e),q.value=!1,G.value=!1,t.endSuccess(e.length)})).catch((()=>{q.value=!1,G.value=!1,t.endErr()}))};return(t,a)=>{const e=v,s=g,l=k(h("u-count-down"),P),x=C,f=k(h("u-line-progress"),D),z=k(h("loading-page"),E);return r(),o(s,{class:"bg-[var(--page-bg-color)] min-h-[100vh]",style:_(t.themeColor())},{default:i((()=>[1!=O.value||Q.value?p("v-if",!0):(r(),o(A,{key:0,ref:"mescrollRef",top:d(L),down:{use:!1},onInit:d($),onUp:N},{default:i((()=>[q.value?p("v-if",!0):(r(),o(s,{key:0,class:"fixed top-0 left-0 right-0 z-10"},{default:i((()=>[u(e,{class:"w-[100vw] min-h-[100%] h-[100%] align-middle",mode:"widthFix",src:d(b)("addon/shop_fenxiao/task_header_h5.png")},null,8,["src"]),u(s,{class:"tab-style-2 rounded-tl-[var(--rounded-big)] rounded-tr-[var(--rounded-big)] relative z-10 -mt-[70rpx] !p-[0]"},{default:i((()=>[u(s,{class:"tab-content !justify-around"},{default:i((()=>[(r(!0),n(c,null,m(J.value,((t,a)=>(r(),o(s,{class:y(["tab-items",{"class-select":K.searchParam.status===t.value}]),onClick:a=>{return e=t.value,K.searchParam.status=e,K.data=[],void B().resetUpScroll();var e}},{default:i((()=>[w(j(t.label),1)])),_:2},1032,["class","onClick"])))),256))])),_:1})])),_:1})])),_:1})),K.data.length?(r(),o(s,{key:1,class:"py-[var(--top-m)] sidebar-margin box-border relative z-2"},{default:i((()=>[(r(!0),n(c,null,m(K.data,((t,a)=>(r(),o(s,{key:a,class:y(["card-template overflow-hidden",{"mt-[20rpx]":a}]),onClick:a=>(t=>{T({url:"/addon/shop_fenxiao/pages/task_detail",param:{id:t.id}})})(t)},{default:i((()=>[u(s,{class:"flex box-border"},{default:i((()=>[u(s,{class:"w-[200rpx] h-[200rpx] relative overflow-hidden"},{default:i((()=>[t.cover_thumb_mid?(r(),o(e,{key:0,class:"w-[200rpx] h-[200rpx] flex-shrink-0 rounded-[var(--goods-rounded-mid)]",mode:"aspectFill",src:d(b)(t.cover_thumb_mid),onError:a=>t.cover_thumb_mid="addon/shop_fenxiao/task.png"},null,8,["src","onError"])):(r(),o(e,{key:1,class:"w-[200rpx] h-[200rpx] flex-shrink-0 rounded-[var(--goods-rounded-mid)]",mode:"aspectFit",src:d(b)("addon/shop_fenxiao/task.png")},null,8,["src"])),u(s,{class:y(["absolute top-0 right-0 task rounded-tr-[var(--goods-rounded-mid)] rounded-bl-[var(--goods-rounded-mid)] px-[16rpx] leading-[30rpx] h-[36rpx] text-[#fff] flex-center",{"bg-[#EF000C]":2===t.status,"bg-[#FF6A1A]":1===t.status}])},{default:i((()=>[2===t.status?(r(),n(c,{key:0},["2"!=t.time_type?(r(),o(l,{key:0,time:t.time,format:"HH:mm:ss",autoStart:"",millisecond:""},null,8,["time"])):p("v-if",!0),"2"===t.time_type?(r(),o(x,{key:1,class:"text-[22rpx]"},{default:i((()=>[w("长期有效")])),_:1})):p("v-if",!0)],64)):p("v-if",!0),1===t.status?(r(),o(l,{key:1,time:t.time,format:"HH:mm:ss",autoStart:"",millisecond:""},null,8,["time"])):p("v-if",!0)])),_:2},1032,["class"])])),_:2},1024),u(s,{class:"flex-1 flex flex-col ml-[20rpx] py-[6rpx]"},{default:i((()=>[u(s,{class:"leading-[40rpx] flex items-center justify-between"},{default:i((()=>[u(x,{class:"text-[28rpx] text-[#333] truncate max-w-[380rpx]"},{default:i((()=>[w(j(t.name),1)])),_:2},1024),u(x,{class:y(["text-[26rpx] ml-[6rpx]",{"!text-[var(--primary-color)]":2===t.status,"!text-[#FF6A1A]":1===t.status," text-[var(--text-color-light9)]":3===t.status}])},{default:i((()=>[w(j(t.status_name),1)])),_:2},1032,["class"])])),_:2},1024),u(s,{class:"mt-[auto]"},{default:i((()=>[u(f,{percentage:t.task_member&&t.task_member.task_data.show_progress.rate||2,showText:!1,"active-color":"var(--primary-color)",inactiveColor:"#FFF1ED",height:"10rpx"},null,8,["percentage"]),u(s,{class:"flex items-center justify-between mt-[10rpx]"},{default:i((()=>[u(s,{class:"flex items-baseline"},{default:i((()=>[u(x,{class:"text-[#303133] text-[24rpx] leading-[34rpx]"},{default:i((()=>[w("奖励佣金")])),_:1}),u(x,{class:y(["text-[var(--price-text-color)] text-[26rpx] ml-[4rpx] leading-[36rpx] font-500",{"!text-[var(--text-color-light6)]":3===t.status}])},{default:i((()=>{var a;return[w(j(d(F)(null==(a=t.rules[0].reward)?void 0:a.commission))+"元",1)]})),_:2},1032,["class"])])),_:2},1024),u(s,{class:"text-[24rpx]"},{default:i((()=>[t.task_member?(r(),o(s,{key:0},{default:i((()=>[u(x,{class:y(["text-[var(--price-text-color)] text-[26rpx]",{"!text-[var(--text-color-light9)]":3===t.status}])},{default:i((()=>[w(j(`${"元"==t.task_member.task_data.util?d(F)(t.task_member.task_data.now_data):t.task_member.task_data.now_data}/`),1)])),_:2},1032,["class"]),u(x,{class:"text-[var(--text-color-light6)] text-[24rpx]"},{default:i((()=>[w(j(`${"元"==t.task_member.task_data.util?d(F)(t.task_member.task_data.end_data):t.task_member.task_data.end_data}${t.task_member.task_data.util}`),1)])),_:2},1024)])),_:2},1024)):(r(),o(s,{key:1},{default:i((()=>[u(x,{class:y(["text-[var(--primary-color)] text-[26rpx]",{"!text-[var(--text-color-light9)]":3===t.status}])},{default:i((()=>[w(" 0")])),_:2},1032,["class"]),u(x,{class:"text-[var(--text-color-light6)] text-[24rpx]"},{default:i((()=>[w("/"+j("元"==t.task_data.util?d(F)(t.task_data.end_data):t.task_data.end_data)+j(t.task_data.util),1)])),_:2},1024)])),_:2},1024))])),_:2},1024)])),_:2},1024)])),_:2},1024)])),_:2},1024)])),_:2},1024)])),_:2},1032,["class","onClick"])))),128))])),_:1})):p("v-if",!0),K.data.length||q.value||G.value?p("v-if",!0):(r(),o(H,{key:2,option:{icon:d(b)("static/resource/images/empty.png")}},null,8,["option"]))])),_:1},8,["top","onInit"])),0!=O.value||Q.value?p("v-if",!0):(r(),o(s,{key:1,class:"pt-[var(--top-m)] footer"},{default:i((()=>[u(H,{option:{icon:d(b)("static/resource/images/empty.png"),tip:"任务奖励设置未开启"}},null,8,["option"])])),_:1})),u(z,{loading:Q.value},null,8,["loading"])])),_:1},8,["style"])}}}),[["__scopeId","data-v-038d9b50"]]);export{B as default};