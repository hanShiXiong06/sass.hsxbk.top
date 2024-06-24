import{d as e,a8 as t,r as a,a9 as s,I as l,Y as x,a as r,o,c as n,w as p,u as c,E as d,b as i,x as f,y as m,f as u,n as _,_ as h,G as g,g as b,h as w,i as k,C as v,N as y,V as j,t as C,$ as F}from"./index-656dc629.js";import{_ as E}from"./u-avatar.7ebcca8a.js";import{_ as O}from"./u-loading-page.f8275a02.js";import{_ as z}from"./tabbar.d997a979.js";import{a as I,b as D,c as T,d as S}from"./fenxiao.6f2151fd.js";import{_ as A}from"./_plugin-vue_export-helper.1b428a4d.js";import"./u-icon.286409fc.js";import"./u-text.d2d9d7e3.js";import"./u-loading-icon.5e5c27a0.js";import"./u-transition.825c0e35.js";import"./u-badge.973492be.js";import"./u-tabbar.8ee28cae.js";import"./u-safe-bottom.d9fa806b.js";const V=A(e({__name:"index",setup(e){const A=t();let V=a({member:{},fenxiao_level:{}}),G=a(!0);s((()=>{setTimeout((()=>{if(!A.siteAddons.includes("shop_fenxiao"))return l({title:"该站点未安装分销插件",icon:"none"}),setTimeout((()=>{x()}),1500),!1}),500),B(),P(),Y(),I().then((e=>{let t=e.data;Object.keys(t).length?(V.value=e.data,G.value=!1):(G.value=!0,r({url:"/addon/shop_fenxiao/pages/apply",mode:"redirectTo"}))}))}));const N=a({}),B=()=>{D().then((e=>{N.value=Object.assign(N.value,e.data.fenxiao_config)}))};let H=a(0);const P=()=>{T().then((e=>{H.value=e.data.length||0})).catch((()=>{H.value=0}))};let R=a(0);const Y=()=>{S().then((e=>{R.value=e.data.direct.length+e.data.indirect.length||0})).catch((()=>{R.value=0}))},$=()=>{uni.setStorageSync("cashOutAccountType","commission"),r({url:"/app/pages/member/apply_cash_out"})},q=()=>{r({url:"/app/pages/member/detailed_account",param:{type:"commission"}})},J=()=>{r({url:"/app/pages/member/commission"})};return(e,t)=>{const a=b(w("u-avatar"),E),s=k,l=v,x=y,I=b(w("u-loading-page"),O),D=b(w("tabbar"),z);return o(),n(s,{style:_(e.themeColor()),class:"bg-[#F6F6F6] min-h-[100vh]"},{default:p((()=>[c(G)?u("v-if",!0):(o(),n(s,{key:0},{default:p((()=>[1==N.value.is_fenxiao?(o(),d(g,{key:0},[i(s,{class:"h-[320rpx] box-border px-[32rpx] pt-[44rpx] flex flex-col justify-between",style:_({background:"url("+c(j)("addon/shop_fenxiao/index/header_bg.png")+") left top / 100% 100% no-repeat"})},{default:p((()=>[i(s,{class:"flex items-center"},{default:p((()=>[i(s,{class:"!w-[120rpx] !h-[120rpx] rounded-full flex-shrink-0 overflow-hidden"},{default:p((()=>[c(V).member.headimg?(o(),n(a,{key:0,src:c(j)(c(V).member.headimg),size:"120rpx",leftIcon:"none"},null,8,["src"])):(o(),n(a,{key:1,src:c(j)("addon/shop_fenxiao/index/head.png"),size:"120rpx",leftIcon:"none"},null,8,["src"]))])),_:1}),i(s,{class:"flex flex-col text-[#303133] ml-[32rpx]"},{default:p((()=>[i(s,{class:"text-[30rpx] truncate max-w-[520rpx]"},{default:p((()=>[i(l,{class:"font-bold whitespace-nowrap"},{default:p((()=>[f(m(c(V).member.nickname),1)])),_:1})])),_:1}),c(V).parent_fenxiao?(o(),n(s,{key:0,class:"text-[24rpx] mt-[20rpx]"},{default:p((()=>[f(" 上级分销商："+m(c(V).parent_fenxiao.nickname),1)])),_:1})):u("v-if",!0)])),_:1}),u(' <view class="flex items-center text-[#fff] text-[24rpx] ml-auto">\r\n                            <text class="nc-iconfont nc-icon-bangzhuV6xx mr-[10rpx]"></text>\r\n                            <text>推广规则</text>\r\n                        </view> ')])),_:1}),i(s,{class:"flex items-center h-[140rpx] box-border rounded-t-[20rpx] p-[30rpx]",style:_({backgroundImage:"url("+c(j)("addon/shop_fenxiao/index/head_bg.png")+") ",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"cover"}),onClick:t[0]||(t[0]=e=>c(r)({url:"/addon/shop_fenxiao/pages/level"}))},{default:p((()=>[i(s,{class:"flex flex-col"},{default:p((()=>[i(s,{class:"flex items-center"},{default:p((()=>[i(x,{class:"w-[30rpx] h-[30rpx] mr-[10rpx]",src:c(j)("addon/shop_fenxiao/info_vip.png"),mode:"widthFix"},null,8,["src"]),i(l,{class:"text-[28rpx] truncate w-[320rpx] font-bold text-[#FDD6A1] font-bold"},{default:p((()=>[f(m(Object.keys(c(V).fenxiao_level).length&&!c(V).fenxiao_level.is_default?c(V).fenxiao_level.level_name:"等级未解锁"),1)])),_:1})])),_:1}),i(l,{class:"text-[26rpx] text-[#E8D3B6] mt-[20rpx]"},{default:p((()=>[f("下单、邀请好友均可提升等级")])),_:1})])),_:1}),i(l,{class:"ml-auto level-wrap w-[140rpx] h-[46rpx] text-center rounded-[54rpx] text-[24rpx] leading-[48rpx] text-[#794200]"},{default:p((()=>[f("去升级")])),_:1})])),_:1},8,["style"])])),_:1},8,["style"]),i(s,{class:"commission-bg mx-[24rpx] my-[20rpx] rounded-[16rpx] pb-[35rpx]"},{default:p((()=>[i(s,{class:"flex justify-between h-[90rpx] px-[24rpx] items-center border-0 border-b-[1rpx] border-[#E0E0E0] border-solid"},{default:p((()=>[i(l,{class:"text-[28rpx] font-bold"},{default:p((()=>[f(m(c(C)("billingInformation")),1)])),_:1}),i(s,{class:"text-[#666] text-[26rpx]",onClick:q},{default:p((()=>[i(l,null,{default:p((()=>[f("佣金明细")])),_:1}),i(l,{class:"nc-iconfont nc-icon-youV6xx text-[#666] !text-[26rpx]"})])),_:1})])),_:1}),i(s,{class:"flex mt-[50rpx] justify-around commission-content"},{default:p((()=>[i(s,{class:"flex flex-col items-center",onClick:J},{default:p((()=>[i(l,{class:"text-[22rpx] text-[#666]"},{default:p((()=>[f(m(c(C)("commissionGet")),1)])),_:1}),i(l,{class:"text-[#303133] text-[28rpx] font-bold mt-[20rpx]"},{default:p((()=>[f(m(c(F)(c(V).member.commission_get)),1)])),_:1})])),_:1}),i(s,{class:"flex flex-col items-center",onClick:J},{default:p((()=>[i(l,{class:"text-[22rpx] text-[#666]"},{default:p((()=>[f(m(c(C)("commission")),1)])),_:1}),i(l,{class:"text-[#303133] text-[28rpx] font-bold mt-[20rpx]"},{default:p((()=>[f(m(c(F)(c(V).member.commission)),1)])),_:1})])),_:1}),i(s,{class:"flex flex-col items-center",onClick:J},{default:p((()=>[i(l,{class:"text-[22rpx] text-[#666]"},{default:p((()=>[f("已提现")])),_:1}),i(l,{class:"text-[#303133] text-[28rpx] font-bold mt-[20rpx]"},{default:p((()=>[f(m(c(F)(c(V).member.commission_get-c(V).member.commission-c(V).member.commission_cash_outing)),1)])),_:1})])),_:1}),i(s,{class:"flex flex-col items-center",onClick:J},{default:p((()=>[i(l,{class:"text-[22rpx] text-[#666]"},{default:p((()=>[f(m(c(C)("commissionCashOuting")),1)])),_:1}),i(l,{class:"text-[#303133] text-[28rpx] font-bold mt-[20rpx]"},{default:p((()=>[f(m(c(F)(c(V).member.commission_cash_outing)),1)])),_:1})])),_:1})])),_:1}),i(s,{class:"text-center mt-[40rpx] mx-auto w-[570rpx] h-[76rpx] leading-[76rpx] level-wrap text-[#985400] rounded-[90rpx] text-[28rpx]",onClick:$},{default:p((()=>[f(m(c(C)("cashOut")),1)])),_:1})])),_:1}),i(s,{class:"flex"},{default:p((()=>[i(s,{class:"flex px-[30rpx] rounded-[16rpx] items-center flex-1 mx-[24rpx] h-[140rpx] team-bg",onClick:t[1]||(t[1]=h((e=>c(r)({url:"/addon/shop_fenxiao/pages/team"})),["stop"]))},{default:p((()=>[i(x,{class:"w-[80rpx] h-[80rpx] mr-[20rpx]",src:c(j)("addon/shop_fenxiao/index/team1.png"),mode:"widthFix"},null,8,["src"]),i(s,{class:"flex flex-col"},{default:p((()=>[i(l,{class:"text-[26rpx]"},{default:p((()=>[f("我的团队")])),_:1}),i(l,{class:"text-[#666] text-[24rpx] mt-[20rpx]"},{default:p((()=>[f(m(c(R))+"人",1)])),_:1})])),_:1})])),_:1}),i(s,{class:"flex px-[30rpx] rounded-[16rpx] items-center flex-1 mr-[24rpx] h-[140rpx] fenxiao-bg",onClick:t[2]||(t[2]=h((e=>c(r)({url:"/addon/shop_fenxiao/pages/child_fenxiao"})),["stop"]))},{default:p((()=>[i(x,{class:"w-[80rpx] h-[80rpx] mr-[24rpx]",src:c(j)("addon/shop_fenxiao/index/fenxiao.png"),mode:"widthFix"},null,8,["src"]),i(s,{class:"flex flex-col"},{default:p((()=>[i(l,{class:"text-[26rpx]"},{default:p((()=>[f("分销商")])),_:1}),i(l,{class:"text-[#666] text-[24rpx] mt-[10rpx]"},{default:p((()=>[f(m(c(H))+"人",1)])),_:1})])),_:1})])),_:1})])),_:1}),i(s,{class:"commission-bg pb-[35rpx] mx-[24rpx] my-[20rpx] rounded-[16rpx]"},{default:p((()=>[i(s,{class:"text-[32rpx] h-[90rpx] px-[24rpx] leading-[90rpx] border-0 border-b-[2rpx] border-solid border-[#E0E0E0] text-[28rpx] font-bold"},{default:p((()=>[f("常用功能")])),_:1}),i(s,{class:"flex flex-wrap common-module"},{default:p((()=>[i(s,{class:"flex items-center flex-col w-[33.3%] py-[20rpx]",onClick:t[3]||(t[3]=e=>c(r)({url:"/addon/shop_fenxiao/pages/promote"}))},{default:p((()=>[i(x,{class:"w-[60rpx] h-[60rpx]",src:c(j)("addon/shop_fenxiao/index/code.png"),mode:"widthFix"},null,8,["src"]),i(s,{class:"flex flex-col items-center mt-[12rpx]"},{default:p((()=>[i(l,{class:"text-[24rpx]"},{default:p((()=>[f("邀请好友")])),_:1}),i(l,{class:"text-[22rpx] text-[#aaa] mt-[12rpx]"},{default:p((()=>[f("邀好友赚好礼")])),_:1})])),_:1})])),_:1}),i(s,{class:"flex items-center flex-col w-[33.3%] py-[20rpx]",onClick:t[4]||(t[4]=e=>c(r)({url:"/addon/shop_fenxiao/pages/order"}))},{default:p((()=>[i(x,{class:"w-[60rpx] h-[60rpx]",src:c(j)("addon/shop_fenxiao/index/order.png"),mode:"widthFix"},null,8,["src"]),i(s,{class:"flex flex-col items-center mt-[12rpx]"},{default:p((()=>[i(l,{class:"text-[24rpx]"},{default:p((()=>[f("分销订单")])),_:1}),i(l,{class:"text-[22rpx] text-[#aaa] mt-[12rpx]"},{default:p((()=>[f("分销订单明细")])),_:1})])),_:1})])),_:1}),i(s,{class:"flex items-center flex-col w-[33.3%] py-[20rpx]",onClick:t[5]||(t[5]=e=>c(r)({url:"/addon/shop_fenxiao/pages/team_dividend"}))},{default:p((()=>[i(x,{class:"w-[60rpx] h-[60rpx]",src:c(j)("addon/shop_fenxiao/index/team2.png"),mode:"widthFix"},null,8,["src"]),i(s,{class:"flex flex-col items-center mt-[12rpx]"},{default:p((()=>[i(l,{class:"text-[24rpx]"},{default:p((()=>[f("团队分红")])),_:1}),i(l,{class:"text-[22rpx] text-[#aaa] mt-[12rpx]"},{default:p((()=>[f("团队分红")])),_:1})])),_:1})])),_:1}),i(s,{class:"flex items-center flex-col w-[33.3%] py-[20rpx]",onClick:t[6]||(t[6]=e=>c(r)({url:"/addon/shop_fenxiao/pages/agent_list"}))},{default:p((()=>[i(x,{class:"w-[60rpx] h-[60rpx]",src:c(j)("addon/shop_fenxiao/index/channel.png"),mode:"widthFix"},null,8,["src"]),i(s,{class:"flex flex-col items-center mt-[12rpx]"},{default:p((()=>[i(l,{class:"text-[24rpx]"},{default:p((()=>[f("渠道代理")])),_:1}),i(l,{class:"text-[22rpx] text-[#aaa] mt-[12rpx]"},{default:p((()=>[f("渠道代理")])),_:1})])),_:1})])),_:1}),i(s,{class:"flex items-center flex-col w-[33.3%] py-[20rpx]",onClick:t[7]||(t[7]=e=>c(r)({url:"/addon/shop_fenxiao/pages/task_rewards"}))},{default:p((()=>[i(x,{class:"w-[60rpx] h-[60rpx]",src:c(j)("addon/shop_fenxiao/index/task.png"),mode:"widthFix"},null,8,["src"]),i(s,{class:"flex flex-col items-center mt-[12rpx]"},{default:p((()=>[i(l,{class:"text-[24rpx]"},{default:p((()=>[f(m(c(C)("task")),1)])),_:1}),i(l,{class:"text-[22rpx] text-[#aaa] mt-[12rpx]"},{default:p((()=>[f(m(c(C)("taskDesc")),1)])),_:1})])),_:1})])),_:1}),i(s,{class:"flex items-center flex-col w-[33.3%] py-[20rpx]",onClick:t[8]||(t[8]=e=>c(r)({url:"/addon/shop_fenxiao/pages/sale"}))},{default:p((()=>[i(x,{class:"w-[60rpx] h-[60rpx]",src:c(j)("addon/shop_fenxiao/index/market.png"),mode:"widthFix"},null,8,["src"]),i(s,{class:"flex flex-col items-center mt-[12rpx]"},{default:p((()=>[i(l,{class:"text-[24rpx]"},{default:p((()=>[f(m(c(C)("sale")),1)])),_:1}),i(l,{class:"text-[22rpx] text-[#aaa] mt-[12rpx]"},{default:p((()=>[f(m(c(C)("saleDesc")),1)])),_:1})])),_:1})])),_:1}),i(s,{class:"flex items-center flex-col w-[33.3%] py-[20rpx]",onClick:t[9]||(t[9]=e=>c(r)({url:"/addon/shop_fenxiao/pages/goods"}))},{default:p((()=>[i(x,{class:"w-[60rpx] h-[60rpx]",src:c(j)("addon/shop_fenxiao/index/fenxiao_goods_01.png"),mode:"widthFix"},null,8,["src"]),i(s,{class:"flex flex-col items-center mt-[12rpx]"},{default:p((()=>[i(l,{class:"text-[24rpx]"},{default:p((()=>[f("分销商品")])),_:1}),i(l,{class:"text-[22rpx] text-[#aaa] mt-[12rpx]"},{default:p((()=>[f("分销商品")])),_:1})])),_:1})])),_:1}),u(' <view class="flex items-center flex-col w-[33.3%] py-[20rpx]" @click="redirect({ url: \'/addon/shop_fenxiao/pages/zone\' })">\r\n\t\t\t\t\t\t    <image class="w-[60rpx] h-[60rpx]" :src="img(\'addon/shop_fenxiao/index/fenxiao_prefecture.png\')" mode="widthFix"/>\r\n\t\t\t\t\t\t    <view class="flex flex-col items-center mt-[12rpx]">\r\n\t\t\t\t\t\t        <text class="text-[24rpx]">分销专区</text>\r\n\t\t\t\t\t\t        <text class="text-[22rpx] text-[#aaa] mt-[12rpx]">分销专区</text>\r\n\t\t\t\t\t\t    </view>\r\n\t\t\t\t\t\t</view> ')])),_:1})])),_:1})],64)):(o(),n(s,{key:1,class:"flex flex-col items-center pt-[100rpx]"},{default:p((()=>[i(x,{class:"w-[260rpx] h-[152rpx]",mode:"widthFix",src:c(j)("addon/shop_fenxiao/unopened-fenxiao.png")},null,8,["src"]),i(s,{class:"mt-[40rpx] text-[24rpx]"},{default:p((()=>[f(m(c(C)("fenxiaoNotOpen")),1)])),_:1})])),_:1}))])),_:1})),i(I,{"bg-color":"rgb(248,248,248)",loading:c(G),loadingText:"",fontSize:"16",color:"#333"},null,8,["loading"]),i(D,{addon:"shop"})])),_:1},8,["style"])}}}),[["__scopeId","data-v-99c7769b"]]);export{V as default};
