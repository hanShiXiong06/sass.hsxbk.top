import{d as e,j as r,r as t,k as a,l as s,m as l,p as o,q as n,s as i,t as p,a as u,x as c,o as x,c as d,w as f,b as m,u as g,y as _,z as h,f as b,A as v,n as y,B as k,i as w,C as j,g as C,h as L,D as T,E as A,F,G as z,H as q}from"./index-7bf68536.js";import{_ as I,a as N}from"./u-checkbox-group.b2a485bf.js";import{t as O}from"./topTabbar.f3f9eebd.js";import{_ as P}from"./_plugin-vue_export-helper.1b428a4d.js";import"./u-icon.0c1c54c7.js";const S=P(e({__name:"index",setup(e){let P={};O().setTopTabbarParam({title:""}),r((()=>Object.keys(P).length?z(Number(P.height))+z(P.top)+z(8)+"rpx":"auto")),t("");const S=t(!1),B=a(),D=r((()=>B.login)),E=q();s(),r((()=>s().info));const G=l();r((()=>!S.value&&B.login.agreement_show?"":"getPhoneNumber")),t(null);const H=r((()=>!B.login.is_auth_register)),V=t(!1);o((async()=>{await G.getSiteInfoFn(),await B.getLoginConfig();let e=!B.login.is_username&&!B.login.is_mobile&&!B.login.is_bind_mobile;n()?!i()&&e&&H.value&&(p({title:"商家未开启登录注册",icon:"none"}),setTimeout((()=>{u({url:"/app/pages/index/index",mode:"reLaunch"})}),100)):!i()&&e&&(p({title:"商家未开启登录注册",icon:"none"}),setTimeout((()=>{u({url:"/app/pages/index/index",mode:"reLaunch"})}),100))})),c((()=>{V.value=!1}));const Z=r((()=>{var e="";return B.login.bg_url&&(e+="background-image:url("+A(B.login.bg_url)+");",e+="background-size: 100%;",e+="background-position: top;",e+="background-repeat: no-repeat;"),e})),J=(e=null)=>{(S.value||!B.login.agreement_show||(p({title:F("isAgreeTips"),icon:"none"}),0))&&(V.value||(V.value=!0,e||(e=()=>{V.value=!1}),K()))},K=()=>{n()&&(E.getAuthCode({scopes:"snsapi_userinfo"}),V.value=!1)},M=()=>{S.value=!S.value};return(e,r)=>{const t=k,a=w,s=j,l=C(L("u-checkbox"),I),o=C(L("u-checkbox-group"),N),i=T;return x(),d(a,{class:"w-screen h-screen",style:y(e.themeColor())},{default:f((()=>[m(a,{class:"w-screen h-screen",style:y(g(Z))},{default:f((()=>[m(a,{class:"mx-[var(--sidebar-m)] px-[var(--pad-sidebar-m)]"},{default:f((()=>[m(a,{class:"pt-[154rpx] flex justify-center"},{default:f((()=>{var e,r;return[(null==(e=g(G).site)?void 0:e.front_end_logo)?(x(),d(a,{key:0,class:"h-[90rpx] w-[300rpx]"},{default:f((()=>{var e;return[m(t,{class:"h-[90rpx] w-[300rpx]",src:g(A)(null==(e=g(G).site)?void 0:e.front_end_logo),mode:"aspectFit"},null,8,["src"])]})),_:1})):(null==(r=g(G).site)?void 0:r.front_end_icon)?(x(),d(a,{key:1,class:"h-[250rpx] w-[250rpx]"},{default:f((()=>{var e;return[m(t,{class:"h-[250rpx] w-[250rpx]",src:g(A)(null==(e=g(G).site)?void 0:e.front_end_icon),mode:"aspectFit"},null,8,["src"])]})),_:1})):(x(),d(a,{key:2,class:"h-[90rpx] w-[300rpx]"}))]})),_:1}),m(a,{class:"text-[var(--text-color-light6)]] text-[28rpx] text-center leading-[34rpx] min-h-[34rpx] mt-[40rpx]"},{default:f((()=>[_(h(g(D).desc),1)])),_:1}),m(a,{class:"mt-[181rpx]"},{default:f((()=>[b(" 微信公众号快捷登录 "),g(n)()&&g(D).is_auth_register?(x(),d(a,{key:0,class:"w-full flex items-center justify-center mb-[40rpx]"},{default:f((()=>[m(s,{class:"w-[630rpx] h-[88rpx] !mx-[0] !bg-[var(--primary-color)] text-[26rpx] rounded-[44rpx] leading-[88rpx] font-500 !text-[#fff]",onClick:r[0]||(r[0]=e=>J())},{default:f((()=>[_(h(g(F)("quickLoginOrLogout")),1)])),_:1})])),_:1})):b("v-if",!0),b(" 手机号登录 "),g(D).is_mobile?(x(),d(a,{key:1,class:"mb-[40rpx] w-full flex items-center justify-center"},{default:f((()=>[m(s,{class:"w-[630rpx] h-[88rpx] !mx-[0] !bg-[#fff] border-[var(--primary-color)] border-solid border-[2rpx] text-[26rpx] rounded-[44rpx] leading-[84rpx] !text-[var(--primary-color)]",onClick:r[1]||(r[1]=e=>g(u)({url:"/app/pages/auth/login",param:{type:"mobile"}}))},{default:f((()=>[_(h(g(F)("mobileLogin")),1)])),_:1})])),_:1})):!g(D).is_mobile&&g(D).is_username?(x(),d(a,{key:2,class:"w-full flex items-center justify-center"},{default:f((()=>[m(s,{class:"w-[630rpx] h-[88rpx] !mx-[0] !bg-[#fff] !border-[var(--primary-color)] border-solid border-[2rpx] text-[26rpx] rounded-[44rpx] leading-[84rpx] !text-[var(--primary-color)]",onClick:r[2]||(r[2]=e=>g(u)({url:"/app/pages/auth/login",param:{type:"username"}}))},{default:f((()=>[_(h(g(F)("accountLogin")),1)])),_:1})])),_:1})):b("v-if",!0),g(D).agreement_show?(x(),d(a,{key:3,class:"w-full flex items-center justify-center mt-[28rpx]"},{default:f((()=>[m(a,{class:"flex items-center justify-center mt-[28rpx] py-[10rpx]",onClick:v(M,["stop"])},{default:f((()=>[m(o,{onChange:M},{default:f((()=>[m(l,{activeColor:"var(--primary-color)",checked:S.value,shape:"circle",size:"24rpx",customStyle:{marginTop:"4rpx"}},null,8,["checked"])])),_:1}),m(a,{class:"text-[24rpx] text-[var(--text-color-light6)] flex items-center flex-wrap"},{default:f((()=>[m(i,null,{default:f((()=>[_(h(g(F)("agreeTips")),1)])),_:1}),m(i,{onClick:r[3]||(r[3]=v((e=>g(u)({url:"/app/pages/auth/agreement?key=privacy"})),["stop"])),class:"text-primary"},{default:f((()=>[_("《"+h(g(F)("privacyAgreement"))+"》",1)])),_:1}),m(i,null,{default:f((()=>[_(h(g(F)("and")),1)])),_:1}),m(i,{onClick:r[4]||(r[4]=v((e=>g(u)({url:"/app/pages/auth/agreement?key=service"})),["stop"])),class:"text-primary"},{default:f((()=>[_("《"+h(g(F)("userAgreement"))+"》",1)])),_:1})])),_:1})])),_:1},8,["onClick"])])),_:1})):b("v-if",!0),g(D).is_mobile&&g(D).is_username?(x(),d(a,{key:4,class:"footer w-full"},{default:f((()=>[m(a,{class:"text-[26rpx] leading-[36rpx] text-[333] text-center mb-[30rpx] font-400"},{default:f((()=>[_(h(g(F)("otherLogin")),1)])),_:1}),m(a,{class:"flex justify-center"},{default:f((()=>[m(a,{class:"h-[80rpx] w-[80rpx] text-center leading-[78rpx] border-[2rpx] text-primary rounded-[50%] border-solid border-[#ddd] nc-iconfont nc-icon-a-wodeV6xx-36 text-[46rpx] overflow-hidden",onClick:r[5]||(r[5]=e=>g(u)({url:"/app/pages/auth/login",param:{type:"username"}}))})])),_:1}),m(a,{class:"text-[24rpx] leading-[36rpx] text-[var(--text-color-light9)] text-center font-400 mt-[30rpx]"},{default:f((()=>[_(h(g(F)("accountLogin")),1)])),_:1})])),_:1})):b("v-if",!0)])),_:1})])),_:1})])),_:1},8,["style"])])),_:1},8,["style"])}}}),[["__scopeId","data-v-03de795d"]]);export{S as default};
