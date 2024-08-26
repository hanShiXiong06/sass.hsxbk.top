import{d as e,r as t,x as a,s as r,t as l,T as s,U as x,a as n,o as p,c,w as o,b as i,u,y as f,e as d,v as m,Q as _,f as g,n as v,q as h,bV as b,D as y,i as w,B as j,a4 as C,g as V,h as k,E as I}from"./index-2882a2d8.js";import{_ as z}from"./loading-page.vue_vue_type_script_setup_true_lang.cb99ee23.js";import{g as F,a as S}from"./verify.5647ae06.js";import{_ as Z}from"./_plugin-vue_export-helper.1b428a4d.js";import"./u-loading-page.8280c7ab.js";import"./u-loading-icon.a37f7e61.js";/* empty css                                                                       */import"./u-transition.4448d2e5.js";const E=Z(e({__name:"index",setup(e){const Z=t("manualInput");Z.value="manualInput";const E=t(!1),Q=t(""),T=t(!0);a((()=>{r()&&U()}));const U=()=>{F().then((e=>{e.data?T.value=!1:(l({title:"非核销员无此权限",icon:"none"}),setTimeout((()=>{s().length>1?x({delta:1}):n({url:"/app/pages/member/index",mode:"reLaunch"})}),1e3))}))},q=()=>{h()&&(b.init(),b.scanQRCode((e=>{if(e.resultStr){let t=e.resultStr;n({url:"/app/pages/verify/verify",param:{code:t}})}})))};let B=!1;const D=()=>/[\S]+/.test(Q.value)?!B&&(B=!0,void S(Q.value).then((e=>{B=!1,n({url:"/app/pages/verify/verify",param:{code:Q.value}})})).catch((()=>{B=!1}))):(l({title:"请输入核销码",icon:"none"}),!1),L=()=>{E.value=!E.value},R=e=>{Z.value=e};return(e,t)=>{const a=y,r=w,l=j,s=C,x=V(k("loading-page"),z);return p(),c(r,{style:v(e.themeColor())},{default:o((()=>[T.value?g("v-if",!0):(p(),c(r,{key:0,class:"w-[100vw] min-h-[100vh] bg-[#f8f8f8]"},{default:o((()=>[i(r,{class:"w-full bg-[#fff] verify-box h-[760rpx]"},{default:o((()=>[i(r,{class:"text-[var(--primary-color)] fixed top-[40rpx] right-[30rpx] flex items-center",onClick:t[0]||(t[0]=e=>u(n)({url:"/app/pages/verify/record"}))},{default:o((()=>[i(a,{class:"nc-iconfont nc-icon-lishijiluV6xx !text-[28rpx] -mb-[2rpx]"}),i(a,{class:"text-[26rpx] ml-[8rpx]"},{default:o((()=>[f("核销记录")])),_:1})])),_:1}),d(i(r,{class:"flex flex-col items-center justify-center"},{default:o((()=>[i(r,{class:"sweep-code flex items-center justify-center",onClick:q},{default:o((()=>[i(l,{class:"w-[354rpx] h-[354rpx]",src:u(I)("static/resource/images/verify/saoma.png")},null,8,["src"])])),_:1}),i(r,{class:"mt-[40rpx] text-[30rpx]"},{default:o((()=>[f("点击扫描二维码")])),_:1}),i(r,{class:"mt-[20rpx] text-[var(--text-color-light9)] text-[26rpx] font-400 pb-[142rpx]"},{default:o((()=>[f("扫描二维码进行核销")])),_:1})])),_:1},512),[[m,"sweepCode"==Z.value]]),d(i(r,null,{default:o((()=>[i(r,{class:"flex pt-[126rpx] items-center justify-center"},{default:o((()=>[i(r,{class:"flex justify-center items-center flex-col pr-[30rpx] min-w-[130rpx]"},{default:o((()=>[i(l,{class:"w-[100rpx] h-[100rpx]",src:u(I)("static/resource/images/verify/shuruhexiaoma.png")},null,8,["src"]),i(r,{class:"text-[26rpx] h-[36rpx] leading-[36rpx] mt-[14rpx]"},{default:o((()=>[f("验证核销码")])),_:1})])),_:1}),i(l,{class:"w-[74rpx] h-[12rpx] mb-[50rpx]",src:u(I)("static/resource/images/verify/youjiantou.png")},null,8,["src"]),i(r,{class:"flex justify-center items-center flex-col pl-[30rpx] min-w-[130rpx]"},{default:o((()=>[i(l,{class:"w-[100rpx] h-[100rpx]",src:u(I)("static/resource/images/verify/hexiao1.png")},null,8,["src"]),i(r,{class:"text-[26rpx] h-[36rpx] leading-[36rpx] mt-[14rpx]"},{default:o((()=>[f("核销")])),_:1})])),_:1})])),_:1}),i(r,{class:"mt-[50rpx]"},{default:o((()=>[i(r,{class:"h-[90rpx] border-[2rpx] border-solid border-[#eee] rounded-[16rpx] box-border p-[20rpx] mx-[60rpx] flex items-center"},{default:o((()=>[i(a,{class:"nc-iconfont nc-icon-saotiaoxingmaV6xx text-[44rpx] text-[#EF000C]"}),i(s,{type:"text",placeholder:"请输入核销码",class:"h-[90rpx] border-none text-start ml-[30rpx] text-[28rpx] flex-1","placeholder-class":"_placeholder",modelValue:Q.value,"onUpdate:modelValue":t[1]||(t[1]=e=>Q.value=e),focus:E.value,ref:"input"},null,8,["modelValue","focus"])])),_:1}),i(r,{class:"h-[80rpx] primary-btn-bg min-w-[630rpx] text-[#fff] flex-center !text-[26rpx] save-btn rounded-[100rpx] h-[80rpx] font-500 mx-[60rpx] mt-[146rpx] relative z-1",onClick:D},{default:o((()=>[f("核销")])),_:1})])),_:1})])),_:1},512),[[m,"manualInput"==Z.value]])])),_:1}),i(r,{class:"w-[630rpx] h-[100rpx] bg-[#fff] mx-[auto] mt-[220rpx] rounded-[90rpx] flex relative action-type-wrap"},{default:o((()=>[i(r,{class:_(["relative w-[51%] pr-[50rpx] box-border rounded-[50rpx] z-0 flex flex-col items-center justify-center",{xuanZhong1:"sweepCode"==Z.value}]),onClick:t[2]||(t[2]=e=>R("sweepCode"))},{default:o((()=>[i(a,{class:"nc-iconfont nc-icon-saoyisaoV6xx !text-[40rpx]"}),i(r,{class:"text-[24rpx] leading-[1] mt-[10rpx]"},{default:o((()=>[f("扫码核销")])),_:1})])),_:1},8,["class"]),i(r,{class:"flex flex-col items-center flex-col w-[120rpx] h-[120rpx] bg-[#FF7354] rounded-[50%] absolute top-[-10rpx] left-[255rpx] heXiao text-white z-10 shrink-0"},{default:o((()=>[i(r,{class:"nc-iconfont nc-icon-saotiaoxingmaV6xx ns-gradient-otherpages-member-balance-balance-rechange !text-[44rpx] mt-[19rpx]"}),i(r,{class:"text-[24rpx] mt-[8rpx] leading-[34rpx] h-[34rpx]"},{default:o((()=>[f("核销台")])),_:1})])),_:1}),i(r,{class:_(["relative w-[51%] pl-[50rpx] box-border rounded-[50rpx] z-0 flex flex-col items-center justify-center",{xuanZhong:"manualInput"==Z.value}]),onClick:t[3]||(t[3]=e=>R("manualInput"))},{default:o((()=>[i(a,{class:"iconfont iconVector-77 !text-[40rpx]"}),i(r,{class:"ml-[20rpx] text-[24rpx] leading-[1] mt-[10rpx]",onClick:L},{default:o((()=>[f("手动输入")])),_:1})])),_:1},8,["class"])])),_:1})])),_:1})),i(x,{loading:T.value},null,8,["loading"])])),_:1},8,["style"])}}}),[["__scopeId","data-v-93e8b1de"]]);export{E as default};
