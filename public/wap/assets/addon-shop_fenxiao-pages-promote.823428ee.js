import{d as e,r as a,o as t,c as l,w as s,u as r,n as o,b as n,x as d,y as x,f as p,k as f,a as u,N as c,C as i,i as m,bs as _,ab as g,g as h,h as b,V as v,$ as y}from"./index-905183d4.js";import{_ as j}from"./u-loading-page.7aa0a449.js";import{c as k,d as w,f as C}from"./fenxiao.dacba751.js";import{_ as z}from"./_plugin-vue_export-helper.1b428a4d.js";import"./u-loading-icon.c376267d.js";import"./u-transition.dbaca185.js";const I=z(e({__name:"promote",setup(e){let z=a(!0),I=a({}),N=a(0);k().then((e=>{N.value=e.data.length||0})).catch((()=>{N.value=0}));let S=a(0);w().then((e=>{S.value=e.data.direct.length+e.data.indirect.length||0})).catch((()=>{S.value=0}));let T=a({});z.value=!0,C().then((e=>{T.value=e.data,z.value=!1}));f("fenxiao_poster").then((e=>{I.value=e.data.content}));const V=()=>{u({url:"/addon/shop_fenxiao/pages/promote_code",param:{id:T.value.member_id}})};return(e,a)=>{const f=c,k=i,w=m,C=_,$=g,q=h(b("u-loading-page"),j);return t(),l(w,{class:"min-h-[100vh]",style:o(e.themeColor())},{default:s((()=>[r(z)?p("v-if",!0):(t(),l(w,{key:0,class:"min-h-[100vh] p-[30rpx] box-border",style:o({background:"url("+r(v)("addon/shop_fenxiao/index/promote_bg.png")+") left top / 100% 100% no-repeat"})},{default:s((()=>[n(w,{class:"mt-[230rpx] bg-[#fff] rounded-[30rpx]"},{default:s((()=>[n(w,{class:"bg-[#fff7f5] flex flex-col justify-center rounded-[30rpx]"},{default:s((()=>[n(f,{class:"w-[384rpx] h-[74rpx] m-auto -mt-[20rpx]",src:r(v)("addon/shop_fenxiao/index/my_earnings.png"),mode:""},null,8,["src"]),n(w,{class:"flex items-center justify-center text-[24rpx] py-[20rpx]"},{default:s((()=>[n(f,{class:"w-[80rpx] h-[80rpx] mr-[10rpx]",src:r(v)("addon/shop_fenxiao/index/money.png"),mode:""},null,8,["src"]),n(w,{class:"flex items-baseline"},{default:s((()=>[n(k,null,{default:s((()=>[d("累计收益")])),_:1}),r(T).member?(t(),l(k,{key:0,class:"text-[40rpx]"},{default:s((()=>[d(x(r(y)(r(T).member.commission_get||0)),1)])),_:1})):p("v-if",!0),n(k,null,{default:s((()=>[d("元")])),_:1})])),_:1})])),_:1})])),_:1}),n(w,{class:"flex justify-around pt-[50rpx] pb-[60rpx]"},{default:s((()=>[n(w,{class:"flex items-center flex-col",onClick:a[0]||(a[0]=e=>r(u)({url:"/addon/shop_fenxiao/pages/team"}))},{default:s((()=>[n(k,{class:"text-[28rpx] text-[#666]"},{default:s((()=>[d("我的团队人数")])),_:1}),n(k,{class:"text-[#303133] text-[36rpx] font-bold mt-[20rpx]"},{default:s((()=>[d(x(r(S)),1)])),_:1})])),_:1}),n(w,{class:"flex items-center flex-col",onClick:a[1]||(a[1]=e=>r(u)({url:"/addon/shop_fenxiao/pages/child_fenxiao"}))},{default:s((()=>[n(k,{class:"text-[28rpx] text-[#666]"},{default:s((()=>[d("分销商人数")])),_:1}),n(k,{class:"text-[#303133] text-[36rpx] font-bold mt-[20rpx]"},{default:s((()=>[d(x(r(N)),1)])),_:1})])),_:1})])),_:1})])),_:1}),n(w,{class:"mt-[100rpx] bg-[#fff] rounded-[30rpx] flex flex-col px-[30rpx] pb-[50rpx]"},{default:s((()=>[n(f,{class:"w-[384rpx] h-[74rpx] m-auto -mt-[20rpx] mb-[30rpx]",src:r(v)("addon/shop_fenxiao/index/activity_rules.png"),mode:""},null,8,["src"]),r(I)?(t(),l(w,{key:0,class:"content"},{default:s((()=>[n(C,{nodes:r(I)},null,8,["nodes"])])),_:1})):(t(),l(w,{key:1,class:"rules-empty"},{default:s((()=>[d("暂无活动规则")])),_:1}))])),_:1}),n(w,{class:"fixed left-[30rpx] bottom-[0] h-[160rpx] right-[30rpx] flex items-center z-10"},{default:s((()=>[n($,{class:"w-[100%] h-[80rpx] leading-[80rpx] level-wrap text-[#985400] rounded-[90rpx] text-[32rpx]",onClick:V},{default:s((()=>[d("邀请好友")])),_:1})])),_:1})])),_:1},8,["style"])),n(q,{"bg-color":"rgb(248,248,248)",loading:r(z),loadingText:"",fontSize:"16",color:"#333"},null,8,["loading"])])),_:1},8,["style"])}}}),[["__scopeId","data-v-cae45fd4"]]);export{I as default};
