import{d as e,r as a,o as s,c as t,w as l,b as o,A as r,y as u,z as i,u as c,O as n,a6 as p,P as d,f as x,i as f,a5 as v,D as m,g as _,h as b,F as h,Q as y,bw as g}from"./index-9317da28.js";import{_ as k,a as w}from"./u-steps.28c054e9.js";import{_ as j}from"./u-popup.1f2ebcae.js";import{c as C}from"./order.69407eee.js";import{_ as I}from"./_plugin-vue_export-helper.1b428a4d.js";const T=I(e({__name:"logistics-tracking",setup(e,{expose:I}){const T=a(!1),z=a([]),A=a({}),O=async e=>{var a,s;(null==(s=null==(a=A.value)?void 0:a.traces)?void 0:s.list.length)&&(A.value.traces.list=[]);let t=await C(e);A.value=t.data},V=a(0),B=a(0),D=()=>{T.value=!1};return I({packageList:z,open:e=>{V.value=e.id,O(e),T.value=!0}}),(e,a)=>{const C=f,I=v,F=m,L=_(b("u-steps-item"),k),P=_(b("u-steps"),w),Q=_(b("u-popup"),j);return s(),t(C,{onTouchmove:a[3]||(a[3]=r((()=>{}),["prevent","stop"]))},{default:l((()=>[o(Q,{show:T.value,mode:"bottom",round:10,onClose:D,closeable:!0,safeAreaInsetBottom:!0,onTouchmove:a[2]||(a[2]=r((()=>{}),["prevent","stop"]))},{default:l((()=>[Object.keys(A.value).length?(s(),t(C,{key:0,class:"h-[70vh] px-[24rpx] bg-page pb-[20rpx]",onTouchmove:a[1]||(a[1]=r((()=>{}),["prevent","stop"]))},{default:l((()=>[o(C,{class:"font-500 text-center text-[32rpx] leading-[104rpx] box-border h-[104rpx]"},{default:l((()=>[u(i(c(h)("detailedInformation")),1)])),_:1}),o(I,{"scroll-x":!0,"scroll-with-animation":"","scroll-into-view":"id"+(B.value>3?B.value-2:0)},{default:l((()=>[z.value.length>1?(s(),t(C,{key:0,class:"flex py-[22rpx] whitespace-nowrap"},{default:l((()=>[(s(!0),n(d,null,p(z.value,((e,a)=>(s(),t(C,{id:"id"+a,class:y(["text-[26rpx] leading-[36rpx] mr-[30rpx] text-[#626779]",{"!text-primary class-select":e.id==V.value}]),key:a,onClick:s=>((e,a)=>{V.value=e.id,B.value=a;let s={id:e.id,mobile:e.mobile};O(s)})(e,a)},{default:l((()=>[u(i(e.name),1)])),_:2},1032,["id","class","onClick"])))),128))])),_:1})):x("v-if",!0)])),_:1},8,["scroll-into-view"]),o(C,{class:"text-[28rpx] mt-[20rpx]"},{default:l((()=>[o(C,{class:"flex justify-between mb-[20rpx]"},{default:l((()=>["none_express"==A.value.sub_delivery_type?(s(),t(F,{key:0,class:"mr-[20rpx]"},{default:l((()=>[u("无需物流")])),_:1})):(s(),n(d,{key:1},[o(F,{class:"mr-[20rpx]"},{default:l((()=>[u(i(A.value.company.company_name),1)])),_:1}),o(C,null,{default:l((()=>[o(F,{class:"mr-[14rpx]"},{default:l((()=>[u(i(A.value.express_number),1)])),_:1}),o(F,{onClick:a[0]||(a[0]=e=>c(g)(A.value.express_number))},{default:l((()=>[u(i(c(h)("copy")),1)])),_:1})])),_:1})],64))])),_:1})])),_:1}),"express"==A.value.sub_delivery_type?(s(),t(C,{key:0,class:"parcel",style:{height:"53vh"}},{default:l((()=>[0==A.value.traces.success?(s(),t(C,{key:0,class:"h-[56vh] flex flex-col items-center justify-center"},{default:l((()=>[o(F,{class:"nc-iconfont nc-icon-daishouhuoV6xx text-[180rpx] text-[#bfbfbf]"}),o(C,{class:"text-[28rpx] text-[#bfbfbf] leading-8"},{default:l((()=>[u("暂无物流信息～～")])),_:1})])),_:1})):(s(),t(I,{key:1,"scroll-y":!0,style:{height:"53vh",padding:"20rpx","box-sizing":"border-box"},class:"bg-white rounded-md"},{default:l((()=>[o(P,{current:0,dot:"",direction:"column",activeColor:"var(--primary-color)"},{default:l((()=>[(s(!0),n(d,null,p(A.value.traces.list,((e,a)=>(s(),t(L,{key:a+"id",title:e.remark,desc:e.datetime},null,8,["title","desc"])))),128))])),_:1})])),_:1}))])),_:1})):"none_express"==A.value.sub_delivery_type?(s(),t(C,{key:1,style:{height:"53vh"}},{default:l((()=>[o(C,{class:"h-[56vh] flex-col flex items-center justify-center"},{default:l((()=>[o(F,{class:"nc-iconfont nc-icon-daishouhuoV6xx text-[180rpx] text-[#bfbfbf]"}),o(C,{class:"text-[28rpx] text-[#bfbfbf] leading-8"},{default:l((()=>[u("无需物流～～")])),_:1})])),_:1})])),_:1})):x("v-if",!0)])),_:1})):x("v-if",!0)])),_:1},8,["show"])])),_:1})}}}),[["__scopeId","data-v-c054dc7a"]]);export{T as l};
