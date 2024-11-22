import{d as e,r as t,x as a,s,t as l,U as r,V as o,a as n,o as u,c as p,w as c,b as x,u as i,f as d,e as f,v as m,y as _,R as g,P as v,a7 as h,Q as b,n as y,q as w,bw as k,i as j,B as C,D as S,a5 as V,g as z,h as F,E as I,z as E}from"./index-7bf68536.js";import{_ as R}from"./u-loading-page.566c330a.js";import{_ as U}from"./u-button.359d7329.js";import{_ as A}from"./u-popup.be4bfacd.js";import{g as D}from"./verify.2d231cd5.js";import{b as Q,o as Z}from"./goods.501e5f32.js";import{_ as q}from"./_plugin-vue_export-helper.1b428a4d.js";import"./u-loading-icon.b37701e7.js";import"./u-transition.cdf87992.js";import"./u-icon.0c1c54c7.js";import"./u-safe-bottom.908eeae4.js";const B=q(e({__name:"operation",setup(e){const q=t("manualInput"),B=t(!1),G=t([]);q.value="manualInput";const H=t(!1),L=t(""),O=t(!0);a((()=>{s()&&P()}));const P=()=>{D().then((e=>{e.data?O.value=!1:(l({title:"非操作员无此权限",icon:"none"}),setTimeout((()=>{r().length>1?o({delta:1}):n({url:"/app/pages/member/index",mode:"reLaunch"})}),1e3))}))},T=()=>{w()&&(k.init(),k.scanQRCode((e=>{if(e.resultStr){let t=e.resultStr;Q({sku_no:t,status:"all"}).then((e=>{G.value=e.data.data,B.value=!0,X=!1}))}})))};let X=!1;const J=()=>/[\S]+/.test(L.value)?!X&&(X=!0,void Q({sku_no:L.value,status:"all"}).then((e=>{console.log(e),G.value=e.data.data,B.value=!0,X=!1}))):(l({title:"请输入核销码",icon:"none"}),!1),K=()=>{H.value=!H.value},M=()=>{B.value=!1},N=()=>{B.value=!0},W=e=>{Z(e).then((e=>{console.log(e),1==e.code&&l({title:"操作成功",icon:"none"}),B.value=!1}))},Y=e=>{"sweepCode"!=e||w()?q.value=e:l({title:"H5端不支持扫码核销",icon:"none"})},$=e=>{let t="0.00";return t=e.is_discount&&e.goodsSku.sale_price!=e.goodsSku.price?e.goodsSku.sale_price?e.goodsSku.sale_price:e.goodsSku.price:e.member_discount&&s()&&e.goodsSku.member_price!=e.goodsSku.price&&e.goodsSku.member_price?e.goodsSku.member_price:e.goodsSku.price,parseFloat(t)};return(e,t)=>{const a=j,s=C,l=S,r=V,o=z(F("u-loading-page"),R),w=z(F("up-button"),U),k=z(F("up-popup"),A);return u(),p(a,{style:y(e.themeColor())},{default:c((()=>[O.value?d("v-if",!0):(u(),p(a,{key:0,class:"w-[100vw] min-h-[100vh] bg-[#f8f8f8]"},{default:c((()=>[x(a,{class:"w-full bg-[#fff] verify-box h-[760rpx]"},{default:c((()=>[x(a,{class:"text-[var(--primary-color)] fixed top-[40rpx] right-[30rpx] flex items-center",onClick:t[0]||(t[0]=e=>i(n)({url:"/app/pages/verify/record"}))},{default:c((()=>[d(' <image class="w-[26rpx] h-[28rpx]" :src="img(\'static/resource/images/verify/history.png\')" /> '),d(' <text class="text-[26rpx] ml-[10rpx]">核销记录</text> ')])),_:1}),f(x(a,{class:"flex flex-col items-center justify-center"},{default:c((()=>[x(a,{class:"sweep-code flex items-center justify-center",onClick:T},{default:c((()=>[x(s,{class:"w-[354rpx] h-[354rpx]",src:i(I)("static/resource/images/verify/saoma.png")},null,8,["src"])])),_:1}),x(a,{class:"mt-[40rpx] text-[32rpx]"},{default:c((()=>[_("点击扫描二维码")])),_:1}),x(a,{class:"mt-[20rpx] text-[#8288A2] text-[26rpx] font-400 pb-[142rpx]"},{default:c((()=>[_("扫描二维码进行查找设备")])),_:1})])),_:1},512),[[m,"sweepCode"==q.value]]),f(x(a,null,{default:c((()=>[x(a,{class:"flex pt-[126rpx] items-center justify-center"},{default:c((()=>[x(a,{class:"flex justify-center items-center flex-col pr-[30rpx] w-[130rpx]"},{default:c((()=>[x(s,{class:"w-[100rpx] h-[100rpx]",src:i(I)("static/resource/images/verify/shuruhexiaoma.png")},null,8,["src"]),x(a,{class:"text-[26rpx] h-[36rpx] leading-[36rpx] mt-[12rpx]"},{default:c((()=>[_("操作设备")])),_:1})])),_:1}),x(s,{class:"w-[74rpx] h-[12rpx] mb-[50rpx]",src:i(I)("static/resource/images/verify/youjiantou.png")},null,8,["src"]),x(a,{class:"flex justify-center items-center flex-col pl-[30rpx] w-[130rpx]"},{default:c((()=>[x(s,{class:"w-[100rpx] h-[100rpx]",src:i(I)("static/resource/images/verify/hexiao1.png")},null,8,["src"]),x(a,{class:"text-[26rpx] h-[36rpx] leading-[36rpx] mt-[12rpx]"},{default:c((()=>[_("上/下架")])),_:1})])),_:1})])),_:1}),x(a,{class:"mt-[50rpx]"},{default:c((()=>[x(a,{class:"h-[90rpx] border-[2rpx] border-solid border-[#DCE0EF] rounded-[16rpx] box-border p-[20rpx] mx-[60rpx] flex items-center"},{default:c((()=>[x(l,{class:"nc-iconfont nc-icon-saotiaoxingmaV6xx text-[44rpx] text-[#EF000C]"}),x(r,{type:"text",placeholder:"请输入设备sn号",class:"h-[90rpx] border-none text-start ml-[30rpx] text-[28rpx] flex-1","placeholder-class":"_placeholder",modelValue:L.value,"onUpdate:modelValue":t[1]||(t[1]=e=>L.value=e),focus:H.value,ref:"input"},null,8,["modelValue","focus"])])),_:1}),x(a,{class:"h-[88rpx] min-w-[630rpx] text-[#fff] flex items-center justify-center !text-[32rpx] save-btn rounded-[50rpx] h-[88rpx] mx-[60rpx] mt-[146rpx] relative z-1",onClick:J},{default:c((()=>[_("确认")])),_:1})])),_:1})])),_:1},512),[[m,"manualInput"==q.value]])])),_:1}),x(a,{class:"w-[630rpx] h-[100rpx] bg-[#fff] mx-[auto] mt-[220rpx] rounded-[90rpx] flex relative action-type-wrap"},{default:c((()=>[x(a,{class:g(["relative w-[51%] pr-[50rpx] box-border rounded-[50rpx] z-0 flex flex-col items-center justify-center",{xuanZhong1:"sweepCode"==q.value}]),onClick:t[2]||(t[2]=e=>Y("sweepCode"))},{default:c((()=>[x(l,{class:"nc-iconfont nc-icon-saoyisaoV6xx !text-[40rpx]"}),x(a,{class:"text-[24rpx] leading-[1] mt-[10rpx]"},{default:c((()=>[_("扫码操作")])),_:1})])),_:1},8,["class"]),x(a,{class:"flex flex-col items-center flex-col w-[120rpx] h-[120rpx] bg-[#FF7354] rounded-[50%] absolute top-[-10rpx] left-[255rpx] heXiao text-white z-10 shrink-0"},{default:c((()=>[x(a,{class:"nc-iconfont nc-icon-saotiaoxingmaV6xx ns-gradient-otherpages-member-balance-balance-rechange !text-[44rpx] mt-[19rpx]"}),x(a,{class:"text-[24rpx] mt-[8rpx] leading-[34rpx] h-[34rpx]"},{default:c((()=>[_("操作台")])),_:1})])),_:1}),x(a,{class:g(["relative w-[51%] pl-[50rpx] box-border rounded-[50rpx] z-0 flex flex-col items-center justify-center",{xuanZhong:"manualInput"==q.value}]),onClick:t[3]||(t[3]=e=>Y("manualInput"))},{default:c((()=>[x(l,{class:"iconfont iconVector-77 !text-[40rpx]"}),x(a,{class:"ml-[20rpx] text-[24rpx] leading-[1] mt-[10rpx]",onClick:K},{default:c((()=>[_("手动输入")])),_:1})])),_:1},8,["class"])])),_:1})])),_:1})),x(o,{loading:O.value,"loading-text":"",loadingColor:"var(--primary-color)",iconSize:"35"},null,8,["loading"]),x(k,{round:10,show:B.value,"onUpdate:show":t[4]||(t[4]=e=>B.value=e),mode:"center",onClose:M,onOpen:N},{default:c((()=>[x(a,{class:"up-popup-wrap"},{default:c((()=>[(u(!0),v(b,null,h(G.value,(e=>(u(),p(a,{class:"p-2 flex justify-between m-2"},{default:c((()=>[x(a,null,{default:c((()=>[x(a,null,{default:c((()=>[_(E(e.goods_name),1)])),_:2},1024),x(a,null,{default:c((()=>[_(E(e.sub_title),1)])),_:2},1024),x(a,null,{default:c((()=>[_(" sn:"+E(e.goodsSku.sku_no),1)])),_:2},1024),x(a,null,{default:c((()=>[_("入库时间:"+E(e.create_time),1)])),_:2},1024)])),_:2},1024),x(a,null,{default:c((()=>[x(a,null,{default:c((()=>[x(l,{class:"text-[26rpx] font-500"},{default:c((()=>[_("￥")])),_:1}),x(l,{class:"text-[36rpx] font-500"},{default:c((()=>[_(E($(e).toFixed(2).split(".")[0]),1)])),_:2},1024),x(l,{class:"text-[24rpx] font-500"},{default:c((()=>[_("."+E($(e).toFixed(2).split(".")[1]),1)])),_:2},1024)])),_:2},1024),x(a,null,{default:c((()=>[e.status?(u(),p(w,{key:0,type:"error",onClick:t=>W(e.goods_id),text:"下架"},null,8,["onClick"])):(u(),p(w,{key:1,type:"success",onClick:t=>W(e.goods_id),text:"上架"},null,8,["onClick"]))])),_:2},1024)])),_:2},1024)])),_:2},1024)))),256))])),_:1})])),_:1},8,["show"])])),_:1},8,["style"])}}}),[["__scopeId","data-v-eaf39082"]]);export{B as default};
