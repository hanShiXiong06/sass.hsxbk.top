import{d as e,r as a,o as l,c as s,w as t,P as r,a7 as i,Q as o,f as m,u as n,b as p,n as u,a as d,i as c,a6 as x,g as f,h as _,E as v,y as g,z as h,B as y,D as b}from"./index-7bf68536.js";import{_ as j}from"./loading-page.vue_vue_type_script_setup_true_lang.124ad65f.js";import{c as k}from"./fenxiao.745a840a.js";import{M as w}from"./mescroll-empty.fcefb74e.js";import"./u-loading-page.566c330a.js";import"./u-loading-icon.b37701e7.js";import"./_plugin-vue_export-helper.1b428a4d.js";import"./u-transition.cdf87992.js";import"./mescroll-i18n.14e7fe02.js";/* empty css                                                                       */const F=e({__name:"child_fenxiao",setup(e){const F=a([]),z=a(!0);return z.value=!0,k().then((e=>{F.value=[],F.value=e.data,z.value=!1})).catch((()=>{z.value=!0,d({url:"/app/pages/member/index",mode:"switchTab"})})),(e,a)=>{const d=y,k=b,B=c,C=x,D=f(_("loading-page"),j);return l(),s(B,{class:"bg-[#f8f8f8] min-h-[100vh]",style:u(e.themeColor())},{default:t((()=>[z.value?m("v-if",!0):(l(),s(C,{key:0,"scroll-y":"true"},{default:t((()=>[F.value.length?(l(),s(B,{key:0,class:"pt-[var(--top-m)]"},{default:t((()=>[(l(!0),r(o,null,i(F.value,((e,a)=>(l(),s(B,{class:"flex items-center sidebar-margin mb-[var(--top-m)] h-[180rpx] card-template",key:a},{default:t((()=>[e.member.headimg?(l(),s(d,{key:0,class:"w-[100rpx] h-[100rpx] mr-[20rpx] rounded-full",src:n(v)(e.member.headimg),mode:"widthFix"},null,8,["src"])):(l(),s(d,{key:1,class:"w-[100rpx] h-[100rpx] mr-[20rpx] rounded-full",src:n(v)("addon/shop_fenxiao/index/head.png"),mode:"widthFix"},null,8,["src"])),p(B,{class:"flex flex-col"},{default:t((()=>[p(B,{class:"flex items-center"},{default:t((()=>[e.member?(l(),s(k,{key:0,class:"text-[30rpx] font-500 mr-[10rpx]"},{default:t((()=>[g(h(e.member.nickname||e.member.username),1)])),_:2},1024)):m("v-if",!0),e.fenxiao_level&&e.fenxiao_level.level_name?(l(),s(k,{key:1,class:"bg-primary-light !text-[var(--primary-color)] !text-[22rpx] px-[10rpx] h-[36rpx] ml-[10rpx] tag-item"},{default:t((()=>[g(h(e.fenxiao_level.level_name),1)])),_:2},1024)):m("v-if",!0)])),_:2},1024),p(k,{class:"text-[var(--text-color-light9)] text-[24rpx] mt-[20rpx]"},{default:t((()=>[g("加入时间:"+h(e.create_time),1)])),_:2},1024)])),_:2},1024),p(B,{class:"flex flex-col ml-auto items-end text-[24rpx]"},{default:t((()=>[p(k,{class:"leading-normal"},{default:t((()=>[g(h(e.child_fenxiao_num)+" 人",1)])),_:2},1024),p(k,{class:"leading-normal"},{default:t((()=>[g(h(e.fenxiao_order_num)+" 单",1)])),_:2},1024),p(k,{class:"leading-normal"},{default:t((()=>[g(h(e.fenxiao_commission)+" 元",1)])),_:2},1024)])),_:2},1024)])),_:2},1024)))),128))])),_:1})):m("v-if",!0),F.value.length||z.value?m("v-if",!0):(l(),s(w,{key:1,option:{icon:n(v)("static/resource/images/empty.png")}},null,8,["option"]))])),_:1})),p(D,{loading:z.value},null,8,["loading"])])),_:1},8,["style"])}}});export{F as default};
