import{d as e,r as a,a9 as l,o as t,c as s,w as r,b as o,u as p,x as u,y as x,E as d,G as c,f as i,F as n,n as f,a as _,I as v,N as m,i as h,g as b,h as g,C as y,ab as k,V as w,t as j,$ as I,_ as C}from"./index-905183d4.js";import{_ as F}from"./u--image.b5d65e0e.js";import{_ as E,a as N}from"./u-checkbox-group.3c975ae4.js";import{_ as O}from"./u-icon.86a2aad0.js";import{j as z,k as M,b as $,l as S,m as T}from"./fenxiao.dacba751.js";import{_ as G}from"./_plugin-vue_export-helper.1b428a4d.js";import"./u-image.44c969ef.js";import"./u-transition.dbaca185.js";const H=G(e({__name:"apply",setup(e){const G=a({}),H=a({}),V=a(!1),q=a({memberInfo:!1,applyInfo:!1,config:!1,check:!1}),A=()=>{z().then((e=>{H.value=Object.assign(H.value,e.data),H.value.is_fenxiao&&_({url:"/addon/shop_fenxiao/pages/index",mode:"redirectTo",param:{}}),q.value.memberInfo=!0})).catch((()=>{q.value.memberInfo=!0}))},B=()=>{M().then((e=>{H.value.status=e.data.status||0,3===H.value.status&&(H.value.refuse_reason=e.data.refuse_reason||""),q.value.applyInfo=!0})).catch((()=>{q.value.applyInfo=!0}))},D=()=>{$().then((e=>{G.value=Object.assign(G.value,e.data.fenxiao_config),"1"!=G.value.is_show_apply&&(V.value=!0),q.value.config=!0})).catch((()=>{q.value.config=!0}))},J=()=>{S().then((e=>{G.value=Object.assign(G.value,e.data.condition_data),G.value.is_allow_apply=e.data.is_allow_apply,q.value.check=!0})).catch((()=>{q.value.check=!0}))};l((()=>{q.value={memberInfo:!1,applyInfo:!1,config:!1,check:!1},G.value={},H.value={},A(),B(),D(),J()}));const K=()=>{V.value=!V.value},L=a(!1),P=()=>V.value?!L.value&&(L.value=!0,void T().then((e=>{L.value=!1,q.value={memberInfo:!1,applyInfo:!1,config:!1,check:!1},G.value={},H.value={},A(),B(),D(),J()})).catch((()=>{L.value=!1}))):(v({title:"请阅读并同意《分销申请协议》",icon:"none"}),!1);return(e,a)=>{const l=m,v=h,z=b(g("u--image"),F),M=y,$=b(g("u-checkbox"),E),S=b(g("u-checkbox-group"),N),T=k,A=b(g("u-icon"),O);return Object.values(q.value).every((e=>e))?(t(),s(v,{key:0,class:"bg-[#f8f8f8] min-h-[100vh]",style:f(e.themeColor())},{default:r((()=>["0"==G.value.is_fenxiao?(t(),s(v,{key:0,class:"flex flex-col items-center pt-[100rpx]"},{default:r((()=>[o(v,{class:"w-[300rpx] h-[200rpx]"},{default:r((()=>[o(l,{class:"w-[300rpx] h-[200rpx]",mode:"aspectFit",src:p(w)("addon/shop_fenxiao/unopened-fenxiao.png")},null,8,["src"])])),_:1}),o(v,{class:"mt-[40rpx] text-[24rpx]"},{default:r((()=>[u(x(p(j)("fenxiaoNotOpen")),1)])),_:1})])),_:1})):3==G.value.apply_type?(t(),s(v,{key:1,class:"flex flex-col items-center pt-[100rpx]"},{default:r((()=>[o(v,{class:"w-[300rpx] h-[200rpx]"},{default:r((()=>[o(l,{class:"w-[300rpx] h-[200rpx]",mode:"aspectFit",src:p(w)("addon/shop_fenxiao/unopened-fenxiao.png")},null,8,["src"])])),_:1}),o(v,{class:"mt-[40rpx] text-[24rpx]"},{default:r((()=>[u("请联系客服成为分销商")])),_:1})])),_:1})):(t(),d(c,{key:2},[0===H.value.status&&Object.keys(G.value).length&&"3"!=G.value.apply_type?(t(),d(c,{key:0},[o(z,{width:"100%",height:"337rpx",src:p(w)(G.value.apply_head||""),model:"aspectFit"},null,8,["src"]),o(v,{class:"bg-[#fff] w-[694rpx] relative z-10 mx-auto py-[40rpx] px-[30rpx] box-border mt-[-28rpx] rounded-[10rpx]"},{default:r((()=>[o(v,{class:"flex justify-between border-[#E2E2E2] border-0 border-b-[1rpx] border-solid pb-[20rpx]"},{default:r((()=>[o(M,{class:"text-[26rpx]"},{default:r((()=>[u(x(p(j)("referrer")),1)])),_:1}),o(M,{class:"text-[26rpx]"},{default:r((()=>[u(x(H.value.bindFenxiaoMember?H.value.bindFenxiaoMember.nickname:p(j)("notHave")),1)])),_:1})])),_:1}),"1"===G.value.is_show_apply?(t(),s(v,{key:0,class:"flex justify-center items-start mt-[30rpx]"},{default:r((()=>[o(S,null,{default:r((()=>[o($,{activeColor:"var(--primary-color)",checked:V.value,shape:"shape",size:"14",onChange:K,customStyle:{marginTop:"4rpx"}},null,8,["checked"])])),_:1}),o(v,{class:"text-xs text-gray-400 flex flex-wrap"},{default:r((()=>[u(" 我已阅读并了解 "),o(v,{onClick:a[0]||(a[0]=e=>p(_)({url:"/app/pages/auth/agreement?key=fenxiao_service"}))},{default:r((()=>[o(M,{class:"text-primary"},{default:r((()=>[u("《分销申请协议》")])),_:1})])),_:1})])),_:1})])),_:1})):i("v-if",!0),o(T,{class:"w-full h-[70rpx] mt-[28rpx] text-[30rpx] leading-[70rpx] text-[#fff] m-0 rounded-[8rpx] bg-color remove-border",shape:"circle",disabled:!Number(G.value.is_allow_apply),onClick:P,"hover-class":"none"},{default:r((()=>[u(x(Number(G.value.is_allow_apply)?"申请成为分销商":"您尚未达到申请分销商条件"),1)])),_:1},8,["disabled"])])),_:1}),o(v,{class:"w-[694rpx] mx-auto px-[28rpx] box-border mt-[24rpx]"},{default:r((()=>["1"===G.value.fenxiao_condition?(t(),d(c,{key:0},[o(v,{class:"text-[26rpx] box-border pl-[20rpx] relative apply-message-title"},{default:r((()=>[u("成为分销商条件")])),_:1}),o(v,{class:"py-[20rpx] text-[22rpx] text-[#909399] leading-[1.2]"},{default:r((()=>[u(" 申请成为分销商,需要您的消费次数达到"+x(G.value.consume_count)+"次，"+x(Number(G.value.is_allow_apply)?"您已满足申请成为分销商条件":`您已消费${G.value.order_count}次`),1)])),_:1})],64)):i("v-if",!0),"2"===G.value.fenxiao_condition?(t(),d(c,{key:1},[o(v,{class:"text-[26rpx] box-border pl-[20rpx] relative apply-message-title"},{default:r((()=>[u("成为分销商条件")])),_:1}),o(v,{class:"py-[20rpx] text-[22rpx] text-[#909399] leading-[1.2]"},{default:r((()=>[u(" 申请成为分销商,需要您的消费金额达到"+x(G.value.consume_money)+"元，"+x(Number(G.value.is_allow_apply)?"您已满足申请成为分销商条件":`您已消费${p(I)(G.value.order_sum)}元`),1)])),_:1})],64)):i("v-if",!0)])),_:1}),"3"===G.value.fenxiao_condition?(t(),s(v,{key:0,class:"bg-[#fff] w-[694rpx] relative z-10 mx-auto p-[28rpx] box-border mt-[24rpx] rounded-[10rpx]"},{default:r((()=>[o(v,{class:"text-[26rpx] box-border pl-[20rpx] relative apply-message-title"},{default:r((()=>[u("成为分销商条件")])),_:1}),o(v,{class:"p-[20rpx] bg-[#f9f9f9] text-[22rpx] my-[20rpx] leading-[1.2]"},{default:r((()=>[u(" 申请成为分销商,需要购买以下指定商品(任选其一)"),Number(G.value.is_allow_apply)?(t(),s(M,{key:0},{default:r((()=>[u(",您已满足申请成为分销商条件")])),_:1})):i("v-if",!0)])),_:1}),o(v,null,{default:r((()=>[(t(!0),d(c,null,n(G.value.goods_list,((e,a)=>(t(),s(v,{class:"flex py-[20rpx] border-[#E2E2E2] border-0 border-b-[1rpx] border-solid",key:a},{default:r((()=>[o(v,{class:"w-[168rpx] h-[168rpx] overflow-hidden mr-[8rpx] rounded-md"},{default:r((()=>[o(z,{width:"168rpx",height:"168rpx",src:p(w)(e.goods_cover_thumb_mid?e.goods_cover_thumb_mid:""),model:"aspectFill"},{error:r((()=>[o(A,{name:"photo",color:"#999",size:"50"})])),_:2},1032,["src"])])),_:2},1024),o(v,{class:"flex flex-1 flex-col justify-between"},{default:r((()=>[o(v,null,{default:r((()=>[o(M,{class:"text-[26rpx]"},{default:r((()=>[u(x(e.goods_name),1)])),_:2},1024)])),_:2},1024),o(v,{class:"flex items-end justify-between"},{default:r((()=>[o(v,{class:"text-[var(--price-text-color)] price-font"},{default:r((()=>[o(M,{class:"text-[20rpx]"},{default:r((()=>[u("￥")])),_:1}),o(M,{class:"text-[28rpx] mr-[10rpx]"},{default:r((()=>[u(x(p(I)(e.goods_sku.price)),1)])),_:2},1024)])),_:2},1024),o(v,{class:"h-[44rpx] relative"},{default:r((()=>[o(M,{class:"text-[#fff] bg-color h-[44rpx] text-[28rpx] px-[10px] leading-[44rpx] rounded-[22rpx]",onClick:C((a=>{return l=e.goods_id,void _({url:"/addon/shop/pages/goods/detail",param:{goods_id:l}});var l}),["stop"])},{default:r((()=>[u(" 购买 ")])),_:2},1032,["onClick"])])),_:2},1024)])),_:2},1024)])),_:2},1024)])),_:2},1024)))),128))])),_:1})])),_:1})):i("v-if",!0)],64)):i("v-if",!0),1===H.value.status?(t(),s(v,{key:1,class:"flex flex-col items-center"},{default:r((()=>[o(v,{class:"w-[500rpx] h-[500rpx]"},{default:r((()=>[o(z,{width:"500rpx",height:"500rpx",src:p(w)("addon/shop_fenxiao/fenxiao.png"),model:"aspectFill"},null,8,["src"])])),_:1}),o(v,{class:"text-[24rpx]"},{default:r((()=>[u("您已提交分销商申请，等待平台审核")])),_:1})])),_:1})):i("v-if",!0),3===H.value.status?(t(),s(v,{key:2,class:"flex flex-col items-center"},{default:r((()=>[o(v,{class:"w-[500rpx] h-[500rpx]"},{default:r((()=>[o(z,{width:"500rpx",height:"500rpx",src:p(w)("addon/shop_fenxiao/no-fenxiao.png"),model:"aspectFill"},null,8,["src"])])),_:1}),o(v,{class:"mt-[40rpx] text-[24rpx] mb-[24rpx] text-[#999]"},{default:r((()=>[u("您提交的分销商申请已被拒绝")])),_:1}),o(v,{class:"text-[24rpx] mb-[24rpx] text-[#666]"},{default:r((()=>[u("拒绝原因："+x(H.value.refuse_reason),1)])),_:1}),o(T,{class:"w-[160rpx] h-[60rpx] text-[24rpx] leading-[60rpx] !p-0 text-[#fff] m-0 rounded-[8rpx] bg-color remove-border",shape:"circle",onClick:a[1]||(a[1]=e=>H.value.status=0)},{default:r((()=>[u("重新申请")])),_:1})])),_:1})):i("v-if",!0)],64)),i(' <u-loading-page bg-color="rgb(248,248,248)" :loading="loading" fontSize="16" color="#303133"></u-loading-page> ')])),_:1},8,["style"])):i("v-if",!0)}}}),[["__scopeId","data-v-f9e16f56"]]);export{H as default};
