import{d as e,r as t,m as o,p as a,j as n,H as r,a as l,o as u,c as p,w as s,n as i,u as c,b as d,y as x,z as _,f as m,I as f,K as v,C as g,i as b,D as h,Q as y,g as j,h as k,l as w}from"./index-d8a8f699.js";import{_ as T}from"./u-loading-page.c740ef13.js";import{b as D}from"./browser.24c5f3d4.js";import{t as L}from"./topTabbar.a37f79d9.js";import{e as C,d as F}from"./coupon.092bbaa2.js";import{b as E}from"./bind-mobile.63a8d6d0.js";import{_ as S}from"./_plugin-vue_export-helper.1b428a4d.js";import"./u-loading-icon.6808ae8c.js";import"./u-transition.db07fff7.js";import"./u-form.11d92cf8.js";import"./u-icon.5ba98c98.js";import"./u-line.d86b0940.js";import"./sms-code.vue_vue_type_script_setup_true_lang.ce239318.js";import"./u-input.9468a367.js";import"./u-modal.3708081d.js";import"./u-popup.0d48946e.js";import"./u-safe-bottom.a4431b09.js";import"./u-checkbox-group.00090a01.js";const z=S(e({__name:"detail",setup(e){const S=t(!1),z=t(""),I=t({}),R=o(),U=a((()=>R.info));L().setTopTabbarParam({title:"优惠券详情"}),n((e=>{if(!e.coupon_id)return r({title:"优惠券不存在",icon:"none"}),setTimeout((()=>{l({url:"/addon/phone_shop/pages/index",mode:"reLaunch"})}),600),!1;X(e.coupon_id),B(e.coupon_id)}));const X=e=>{S.value=!0,C(e).then((e=>{I.value=e.data,-1!=I.value.sum_count&&I.value.receive_count===I.value.sum_count&&(I.value.btnType="collected"),U.value&&I.value.is_receive&&I.value.limit_count===I.value.member_receive_count?I.value.btnType="using":I.value.btnType="collecting",S.value=!1})).catch((()=>{S.value=!1,I.value={},setTimeout((()=>{l({url:"/addon/phone_shop/pages/index",mode:"reLaunch"})}),600)}))},B=e=>{D.toDataURL(window.location.href,{errorCorrectionLevel:"L",margin:0,width:100}).then((e=>{z.value=e}))},H=t(null);return(e,t)=>{const o=b,a=h,n=y,r=j(k("u-loading-page"),T);return u(),p(o,{style:i(e.themeColor())},{default:s((()=>[Object.keys(I.value).length&&!S.value?(u(),p(o,{key:0,class:"overflow-hidden min-h-screen bg-style relative",style:i({background:"url("+c(w)("addon/phone_shop/coupon/coupon_bg.png")+") no-repeat"})},{default:s((()=>[d(o,{class:"relative mt-[236rpx] w-[100%] h-[932rpx]",style:i({background:"url("+c(w)("addon/phone_shop/coupon/coupon_bg_02.png")+") center / contain no-repeat"})},{default:s((()=>[I.value.limit_count?(u(),p(o,{key:0,style:i({background:"url("+c(w)("addon/phone_shop/coupon/top_tab.png")+") center / cover no-repeat",transform:"translateX(-50%)"}),class:"text-[32rpx] leading-[56rpx] top-[2rpx] left-[50%] px-[30rpx] box-border justify-center absolute min-w-[196rpx] h-[56rpx] flex items-center text-[#FFF9DD]"},{default:s((()=>[x(" 限领"+_(I.value.limit_count)+"张 ",1)])),_:1},8,["style"])):m("v-if",!0),d(o,{class:"flex justify-center pt-[90rpx]"},{default:s((()=>[d(a,{class:"max-w-[380rpx] text-[var(--price-text-color)] text-[140rpx] truncate price-font"},{default:s((()=>[x(_(I.value.coupon_price||0),1)])),_:1}),d(a,{class:"flex items-center justify-center text-[44rpx] mt-[54rpx] ml-[8rpx] text-[#F7D894] bg-[var(--price-text-color)] rounded-full w-[70rpx] h-[70rpx]"},{default:s((()=>[x("元")])),_:1})])),_:1}),d(o,{class:"h-[64rpx] leading-[64rpx] text-[42rpx] text-[#E22D17] mt-[10rpx] text-center"},{default:s((()=>["0.00"===I.value.min_condition_money?(u(),p(a,{key:0},{default:s((()=>[x("无门槛")])),_:1})):(u(),p(a,{key:1},{default:s((()=>[x("满"+_(I.value.coupon_min_price)+"元可用",1)])),_:1}))])),_:1}),d(o,{class:"text-[26rpx] h-[36rpx] text-[#E22D17] mt-[44rpx] text-center flex justify-center items-center"},{default:s((()=>[1==I.value.valid_type?(u(),f(v,{key:0},[d(a,null,{default:s((()=>[x("领取之日起")])),_:1}),d(a,null,{default:s((()=>[x(_(I.value.length),1)])),_:1}),d(a,null,{default:s((()=>[x("天内有效")])),_:1})],64)):(u(),f(v,{key:1},[d(a,null,{default:s((()=>[x("有效期至")])),_:1}),d(a,null,{default:s((()=>[x(_(I.value.valid_end_time?I.value.valid_end_time.slice(0,10):""),1)])),_:1})],64))])),_:1}),d(o,{class:"flex justify-center items-center mt-[20rpx]"},{default:s((()=>["collected"===I.value.btnType?(u(),p(a,{key:0,class:"!leading-[100rpx] text-center text-[#fff] text-[46rpx] min-w-[240rpx] h-[106rpx]",style:i({background:"url("+c(w)("addon/phone_shop/coupon/coupon_btn_02.png")+")  center / contain no-repeat"})},{default:s((()=>[x("已领完 ")])),_:1},8,["style"])):m("v-if",!0),"collecting"===I.value.btnType?(u(),p(a,{key:1,class:"!leading-[100rpx] text-center text-[#E22D17] text-[46rpx] min-w-[240rpx] h-[106rpx]",style:i({background:"url("+c(w)("addon/phone_shop/coupon/coupon_btn.png")+") center / contain no-repeat"}),onClick:t[0]||(t[0]=e=>{return t=I.value.id,U.value?uni.getStorageSync("isbindmobile")?(H.value.open(),!1):void F({coupon_id:t,number:1}).then((e=>{I.value.btnType="using"})):(g().setLoginBack({url:"/addon/phone_shop/pages/coupon/list"}),!1);var t})},{default:s((()=>[x("领取 ")])),_:1},8,["style"])):m("v-if",!0),"using"===I.value.btnType?(u(),p(a,{key:2,class:"!leading-[100rpx] text-center text-[#E22D17] text-[46rpx] min-w-[240rpx] h-[106rpx]",style:i({background:"url("+c(w)("addon/phone_shop/coupon/coupon_btn.png")+") center / contain no-repeat"}),onClick:t[1]||(t[1]=e=>{return t=I.value.id,void l({url:"/addon/phone_shop/pages/goods/list",param:{coupon_id:t}});var t})},{default:s((()=>[x("去使用 ")])),_:1},8,["style"])):m("v-if",!0)])),_:1}),d(o,{class:"w-[230rpx] h-[230rpx] box-border p-[14rpx] bg-[#fff] mx-[auto] mt-[50rpx]"},{default:s((()=>[d(n,{class:"w-[200rpx] h-[200rpx]",src:z.value,mode:"aspectFill"},null,8,["src"])])),_:1}),d(o,{class:"text-[24rpx] text-[rgba(255,255,255,0.7)] mt-[30rpx] text-center"},{default:s((()=>[x("注:扫描二维码或点击右上角进行分享")])),_:1})])),_:1},8,["style"])])),_:1},8,["style"])):m("v-if",!0),d(r,{"bg-color":"rgb(248,248,248)",loading:S.value,loadingText:"",fontSize:"16",color:"#303133"},null,8,["loading"]),m(" 强制绑定手机号 "),d(E,{ref_key:"bindMobileRef",ref:H},null,512)])),_:1},8,["style"])}}}),[["__scopeId","data-v-3ccfae14"]]);export{z as default};
