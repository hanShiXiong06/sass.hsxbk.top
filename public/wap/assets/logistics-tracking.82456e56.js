import{d as e,r as s,o as a,c as t,w as l,b as o,A as r,y as u,z as i,u as c,O as n,a6 as p,P as d,f,i as x,a5 as v,D as m,g as _,h as y,F as b,Q as h,bw as g}from"./index-9317da28.js";import{_ as k,a as w}from"./u-steps.28c054e9.js";import{_ as j}from"./u-popup.1f2ebcae.js";import{c as C}from"./order.57205b50.js";import{_ as I}from"./_plugin-vue_export-helper.1b428a4d.js";const T=I(e({__name:"logistics-tracking",setup(e,{expose:I}){const T=s(!1),z=s([]),A=s({}),O=async e=>{var s,a;(null==(a=null==(s=A.value)?void 0:s.traces)?void 0:a.list.length)&&(A.value.traces.list=[]);let t=await C(e);A.value=t.data},V=s(0),B=s(0),D=()=>{T.value=!1};return I({packageList:z,open:e=>{V.value=e.id,O(e),T.value=!0}}),(e,s)=>{const C=x,I=v,F=m,J=_(y("u-steps-item"),k),L=_(y("u-steps"),w),P=_(y("u-popup"),j);return a(),t(C,{onTouchmove:s[3]||(s[3]=r((()=>{}),["prevent","stop"]))},{default:l((()=>[o(P,{show:T.value,mode:"bottom",round:10,onClose:D,closeable:!0,safeAreaInsetBottom:!0,onTouchmove:s[2]||(s[2]=r((()=>{}),["prevent","stop"]))},{default:l((()=>[Object.keys(A.value).length?(a(),t(C,{key:0,class:"h-[70vh] px-[24rpx] bg-page pb-[20rpx]",onTouchmove:s[1]||(s[1]=r((()=>{}),["prevent","stop"]))},{default:l((()=>[o(C,{class:"text-center text-[32rpx] py-[30rpx]"},{default:l((()=>[u(i(c(b)("detailedInformation")),1)])),_:1}),o(I,{"scroll-x":!0,"scroll-with-animation":"","scroll-into-view":"id"+(B.value>3?B.value-2:0)},{default:l((()=>[z.value.length>1?(a(),t(C,{key:0,class:"flex py-[22rpx] whitespace-nowrap"},{default:l((()=>[(a(!0),n(d,null,p(z.value,((e,s)=>(a(),t(C,{id:"id"+s,class:h(["text-[26rpx] leading-[36rpx] mr-[30rpx] text-[#626779]",{"!text-primary class-select":e.id==V.value}]),key:s,onClick:a=>((e,s)=>{V.value=e.id,B.value=s;let a={id:e.id,mobile:e.mobile};O(a)})(e,s)},{default:l((()=>[u(i(e.name),1)])),_:2},1032,["id","class","onClick"])))),128))])),_:1})):f("v-if",!0)])),_:1},8,["scroll-into-view"]),o(C,{class:"text-[28rpx] mt-[20rpx]"},{default:l((()=>[o(C,{class:"flex justify-between mb-[20rpx]"},{default:l((()=>["none_express"==A.value.sub_delivery_type?(a(),t(F,{key:0,class:"mr-[20rpx]"},{default:l((()=>[u("无需物流")])),_:1})):(a(),n(d,{key:1},[o(F,{class:"mr-[20rpx]"},{default:l((()=>[u(i(A.value.company.company_name),1)])),_:1}),o(C,null,{default:l((()=>[o(F,{class:"mr-[14rpx]"},{default:l((()=>[u(i(A.value.express_number),1)])),_:1}),o(F,{onClick:s[0]||(s[0]=e=>c(g)(A.value.express_number))},{default:l((()=>[u(i(c(b)("copy")),1)])),_:1})])),_:1})],64))])),_:1})])),_:1}),"express"==A.value.sub_delivery_type?(a(),t(C,{key:0,class:"parcel",style:{height:"53vh"}},{default:l((()=>[0==A.value.traces.success?(a(),t(C,{key:0,class:"h-[56vh] flex flex-col items-center justify-center"},{default:l((()=>[o(F,{class:"nc-iconfont nc-icon-daishouhuoV6xx text-[180rpx] text-[#bfbfbf]"}),o(C,{class:"text-[28rpx] text-[#bfbfbf] leading-8"},{default:l((()=>[u("暂无物流信息～～")])),_:1})])),_:1})):(a(),t(I,{key:1,"scroll-y":!0,style:{height:"53vh",padding:"20rpx","box-sizing":"border-box"},class:"bg-white rounded-md"},{default:l((()=>[o(L,{current:0,dot:"",direction:"column",activeColor:"var(--primary-color)"},{default:l((()=>[(a(!0),n(d,null,p(A.value.traces.list,((e,s)=>(a(),t(J,{key:s+"id",title:e.remark,desc:e.datetime},null,8,["title","desc"])))),128))])),_:1})])),_:1}))])),_:1})):"none_express"==A.value.sub_delivery_type?(a(),t(C,{key:1,style:{height:"53vh"}},{default:l((()=>[o(C,{class:"h-[56vh] flex-col flex items-center justify-center"},{default:l((()=>[o(F,{class:"nc-iconfont nc-icon-daishouhuoV6xx text-[180rpx] text-[#bfbfbf]"}),o(C,{class:"text-[28rpx] text-[#bfbfbf] leading-8"},{default:l((()=>[u("无需物流～～")])),_:1})])),_:1})])),_:1})):f("v-if",!0)])),_:1})):f("v-if",!0)])),_:1},8,["show"])])),_:1})}}}),[["__scopeId","data-v-0fa0df23"]]);export{T as l};
