import{d as e,r as a,p as s,F as l,o as t,c as r,w as c,b as o,U as d,ah as n,V as u,f as i,y as f,z as p,u as x,n as m,bb as v,a as _,i as b,C as g,ag as h,bc as k,A as y,W as C,bd as A,be as S,D as w,_ as j}from"./index-22c9735d.js";import{M as V}from"./mescroll-empty.6040bd4d.js";import"./mescroll-i18n.1ec61c43.js";const z=j(e({__name:"address",setup(e){const j=a(!0),z=a(0),E=a([]);a([]);const F=a(""),D=a("");s((e=>{F.value=e.type||"",D.value=e.source||"",e.type&&(z.value="address"==e.type?0:1),uni.getStorageSync("selectAddressCallback")&&uni.removeStorage({key:"selectAddressCallback"})}));v({}).then((({data:e})=>{const a=[],s=[];e.forEach((e=>{"address"==e.type?a.push(e):s.push(e)})),D.value?E.value=0==z.value?a:s:E.value=e,j.value=!1})).catch((()=>{j.value=!1}));const I=()=>{_({url:"/app/pages/member/address_edit",param:{source:D.value}})};a([{text:l("delete"),style:{backgroundColor:"#F56C6C"}}]);return(e,a)=>{const s=b,v=w,z=g,F=h;return j.value?i("v-if",!0):(t(),r(s,{key:0,class:"address bg-[var(--page-bg-color)] min-h-[100vh]",style:m(e.themeColor())},{default:c((()=>[o(F,{"scroll-y":"true"},{default:c((()=>[E.value.length?(t(),r(s,{key:0,class:"sidebar-margin pt-[var(--top-m)]"},{default:c((()=>[(t(!0),d(u,null,n(E.value,((e,a)=>(t(),r(s,{class:"mb-[var(--top-m)] rounded-[var(--rounded-big)] overflow-hidden"},{default:c((()=>[o(s,{class:"flex flex-col card-template"},{default:c((()=>[o(s,{class:"flex-1 line-feed mr-[20rpx]",onClick:a=>(e=>{const a=uni.getStorageSync("selectAddressCallback");a&&(a.address_id=e.id,uni.setStorage({key:"selectAddressCallback",data:a,success(){_({url:a.back,mode:"redirectTo"})}}))})(e)},{default:c((()=>[o(s,{class:"flex items-center"},{default:c((()=>[o(s,{class:"text-[#333] text-[30rpx] leading-[34rpx] font-500"},{default:c((()=>[f(p(e.name),1)])),_:2},1024),o(v,{class:"text-[#333] text-[30rpx] ml-[10rpx]"},{default:c((()=>[f(p(x(k)(e.mobile)),1)])),_:2},1024)])),_:2},1024),o(s,{class:"mt-[16rpx] text-[26rpx] line-feed text-[var(--text-color-light9)] leading-[1.4]"},{default:c((()=>[f(p(e.full_address),1)])),_:2},1024)])),_:2},1032,["onClick"]),o(s,{class:"flex justify-between pt-[var(--top-m)]"},{default:c((()=>[o(s,{class:"flex items-center leading-none",onClick:y((e=>(e=>{const a=E.value[e];a.is_default||(a.is_default=1,S(a).then((()=>{E.value.forEach(((a,s)=>{a.is_default&&(a.is_default=0),s==e&&(a.is_default=1)}))})).catch())})(a)),["stop"])},{default:c((()=>[o(v,{class:C(["iconfont mr-[10rpx]",{"iconduigou text-primary":e.is_default,iconcheckbox_nol:!e.is_default}])},null,8,["class"]),f(" 设为默认 ")])),_:2},1032,["onClick"]),o(s,{class:"flex"},{default:c((()=>[o(s,{onClick:y((a=>{return s=e.id,void _({url:"/app/pages/member/address_edit",param:{id:s,source:D.value}});var s}),["stop"])},{default:c((()=>[o(v,{class:"nc-iconfont nc-icon-xiugaiV6xx shrink-0 text-[32rpx] mr-[4rpx]"}),f("编辑")])),_:2},1032,["onClick"]),o(s,{onClick:y((e=>(e=>{const a=E.value[e];A(a.id).then((()=>{E.value.splice(e,1)})).catch()})(a)),["stop"]),class:"ml-[40rpx]"},{default:c((()=>[o(v,{class:"nc-iconfont nc-icon-shanchu-yuangaizhiV6xx shrink-0 text-[32rpx] mr-[4rpx]"}),f("删除")])),_:2},1032,["onClick"])])),_:2},1024)])),_:2},1024)])),_:2},1024)])),_:2},1024)))),256))])),_:1})):i("v-if",!0),E.value.length?i("v-if",!0):(t(),r(V,{key:1,option:{tip:"暂无收货地址"}})),o(s,{class:"w-full footer"},{default:c((()=>[o(s,{class:"py-[var(--top-m)] px-[var(--sidebar-m)] footer w-full fixed bottom-0 left-0 right-0 box-border"},{default:c((()=>[o(z,{"hover-class":"none",class:"primary-btn-bg text-[#fff] h-[80rpx] leading-[80rpx] rounded-[100rpx] text-[26rpx] font-500",onClick:I},{default:c((()=>[f(p(x(l)("createAddress")),1)])),_:1})])),_:1})])),_:1})])),_:1})])),_:1},8,["style"]))}}}),[["__scopeId","data-v-55aa989b"]]);export{z as default};
