import{d as e,m as s,j as t,r as a,g as n,h as r,o,c as l,w as p,aR as c,b as u,A as d,y as m,u as i,z as g,aS as x,C as f,D as _,i as h,E as b,n as v,B as y,F as w}from"./index-9317da28.js";import{_ as j}from"./u-popup.1f2ebcae.js";import{_ as C}from"./_plugin-vue_export-helper.1b428a4d.js";import"./u-transition.65be38eb.js";import"./u-icon.5e775659.js";import"./u-safe-bottom.3546c5bb.js";const k=C(e({__name:"nc-contact",props:{sendMessageTitle:{type:String,default:""},sendMessagePath:{type:String,default:""},sendMessageImg:{type:String,default:""}},setup(e,{expose:b}){const v=e,y=s(),w=t((()=>y.site)),C=a(!1),k=()=>{C.value=!0},M=()=>{x({phoneNumber:w.value.phone})};return b({}),(e,s)=>{const t=f,a=_,x=h,b=n(r("u-popup"),j);return o(),l(x,{class:"contact-wrap"},{default:p((()=>[c(e.$slots,"default",{},void 0,!0),u(t,{type:"default","hover-class":"none","open-type":"contact",class:"contact-button",onClick:k,"send-message-title":v.sendMessageTitle,"send-message-path":v.sendMessagePath,"send-message-img":v.sendMessageImg,"show-message-card":!0},null,8,["send-message-title","send-message-path","send-message-img"]),u(b,{show:C.value,onClose:s[3]||(s[3]=e=>C.value=!1),mode:"center",round:5,safeAreaInsetBottom:!1},{default:p((()=>[u(x,{onTouchmove:s[2]||(s[2]=d((()=>{}),["prevent","stop"]))},{default:p((()=>[u(x,{class:"py-[25rpx] text-sm leading-none border-0 border-solid border-b-[2rpx] border-[#eee] flex items-center justify-between"},{default:p((()=>[u(a,{class:"ml-[30rpx]"},{default:p((()=>[m("联系客服")])),_:1}),u(a,{class:"mr-[20rpx] nc-iconfont nc-icon-guanbiV6xx text-[35rpx]",onClick:s[0]||(s[0]=e=>C.value=!1)})])),_:1}),i(w)&&i(w).phone?(o(),l(x,{key:0,class:"px-6 py-3 w-[480rpx] h-[100rpx] text-sm"},{default:p((()=>[u(x,{class:"mb-[10rpx]"},{default:p((()=>[m("客服电话")])),_:1}),u(x,{onClick:M,class:"text-primary truncate"},{default:p((()=>[m(g(i(w).phone),1)])),_:1})])),_:1})):(o(),l(x,{key:1,class:"px-6 py-3 w-[480rpx] h-[100rpx] leading-[100rpx] text-sm"},{default:p((()=>[m("抱歉，商家暂无客服，请线下联系")])),_:1})),u(t,{onClick:s[1]||(s[1]=e=>C.value=!1),class:"!mx-[30rpx] !mb-[40rpx] !w-auto !h-[70rpx] text-[24rpx] leading-[70rpx] rounded-full text-white !bg-[#ff4500] !text-[#fff]"},{default:p((()=>[m(" 我知道了 ")])),_:1})])),_:1})])),_:1},8,["show"])])),_:3})}}}),[["__scopeId","data-v-9bb4908c"]]),M=C(e({__name:"contact",setup(e){const s=a(""),t=a(""),c=a("");return c.value=b("static/resource/images/member/contact_service.png"),(e,a)=>{const d=y,x=h,_=f,j=n(r("nc-contact"),k);return o(),l(x,{class:"min-h-[100vh]",style:v(e.themeColor())},{default:p((()=>[u(x,{class:"contact-wrap pt-[22%]"},{default:p((()=>[u(d,{src:i(b)("static/resource/images/member/contact_service.png"),mode:"widthFix"},null,8,["src"]),u(x,{class:"mt-[40rpx] text-[28rpx]"},{default:p((()=>[m(" 欢迎您联系我们，提供您宝贵的意见！ ")])),_:1}),u(j,{"send-message-title":s.value,"send-message-path":t.value,"send-message-img":c.value},{default:p((()=>[u(_,{type:"primary",class:"btn-wrap font-500 primary-btn-bg"},{default:p((()=>[m(g(i(w)("customerService")),1)])),_:1})])),_:1},8,["send-message-title","send-message-path","send-message-img"])])),_:1})])),_:1},8,["style"])}}}),[["__scopeId","data-v-2e51fc2a"]]);export{M as default};