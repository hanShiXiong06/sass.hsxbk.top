import{d as e,r as t,l as o,j as n,p as a,t as l,a as r,o as u,c as p,w as s,n as i,u as c,b as _,y as d,z as x,f as m,O as v,P as f,H as g,i as b,D as y,B as h,g as j,h as k,E as w}from"./index-9317da28.js";import{_ as T}from"./u-loading-page.de89bca9.js";import{b as D}from"./browser.24c5f3d4.js";import{t as L}from"./topTabbar.9a918190.js";import{e as E,d as F}from"./coupon.795f1ac2.js";import{b as C}from"./bind-mobile.7937266a.js";import{_ as S}from"./_plugin-vue_export-helper.1b428a4d.js";import"./u-loading-icon.aabe3d05.js";/* empty css                                                                       */import"./u-transition.65be38eb.js";import"./u-form-item.83fe1c60.js";import"./u-icon.5e775659.js";import"./u-line.30917996.js";/* empty css                                                               */import"./u-form.cfe692b2.js";import"./sms-code.vue_vue_type_script_setup_true_lang.ef47410d.js";/* empty css                                                               */import"./u-input.e030155a.js";/* empty css                                                                */import"./u-modal.42c2671a.js";import"./u-popup.1f2ebcae.js";import"./u-safe-bottom.3546c5bb.js";/* empty css                                                                */import"./u-checkbox-group.2c561dd7.js";/* empty css                                                                         *//* empty css                                                                    */const z=S(e({__name:"detail",setup(e){const S=t(!1),z=t(""),B=t({}),O=o(),P=n((()=>O.info));L().setTopTabbarParam({title:"优惠券详情"}),a((e=>{if(!e.coupon_id)return l({title:"优惠券不存在",icon:"none"}),setTimeout((()=>{r({url:"/addon/phone_shop/pages/index",mode:"reLaunch"})}),600),!1;R(e.coupon_id),q(e.coupon_id)}));const R=e=>{S.value=!0,E(e).then((e=>{B.value=e.data,-1!=B.value.sum_count&&B.value.receive_count===B.value.sum_count&&(B.value.btnType="collected"),P.value&&B.value.is_receive&&B.value.limit_count===B.value.member_receive_count?B.value.btnType="using":B.value.btnType="collecting",S.value=!1})).catch((()=>{S.value=!1,B.value={},setTimeout((()=>{r({url:"/addon/phone_shop/pages/index",mode:"reLaunch"})}),600)}))},q=e=>{D.toDataURL(window.location.href,{errorCorrectionLevel:"L",margin:0,width:100}).then((e=>{z.value=e}))},G=t(null);return(e,t)=>{const o=b,n=y,a=h,l=j(k("u-loading-page"),T);return u(),p(o,{style:i(e.themeColor())},{default:s((()=>[Object.keys(B.value).length&&!S.value?(u(),p(o,{key:0,class:"overflow-hidden min-h-screen bg-style relative",style:i({background:"url("+c(w)("addon/phone_shop/coupon/coupon_bg.png")+") no-repeat"})},{default:s((()=>[_(o,{class:"relative mt-[236rpx] w-[100%] h-[932rpx]",style:i({background:"url("+c(w)("addon/phone_shop/coupon/coupon_bg_02.png")+") center / contain no-repeat"})},{default:s((()=>[B.value.limit_count?(u(),p(o,{key:0,style:i({background:"url("+c(w)("addon/phone_shop/coupon/top_tab.png")+") center / cover no-repeat",transform:"translateX(-50%)"}),class:"text-[32rpx] leading-[56rpx] top-[2rpx] left-[50%] px-[30rpx] box-border justify-center absolute min-w-[196rpx] h-[56rpx] flex items-center text-[#FFF9DD]"},{default:s((()=>[d(" 限领"+x(B.value.limit_count)+"张 ",1)])),_:1},8,["style"])):m("v-if",!0),_(o,{class:"flex justify-center pt-[90rpx]"},{default:s((()=>[_(n,{class:"max-w-[380rpx] text-[var(--price-text-color)] text-[140rpx] truncate price-font"},{default:s((()=>[d(x(B.value.coupon_price||0),1)])),_:1}),_(n,{class:"flex items-center justify-center text-[44rpx] mt-[54rpx] ml-[8rpx] text-[#F7D894] bg-[var(--price-text-color)] rounded-full w-[70rpx] h-[70rpx]"},{default:s((()=>[d("元")])),_:1})])),_:1}),_(o,{class:"h-[64rpx] leading-[64rpx] text-[42rpx] text-[#E22D17] mt-[10rpx] text-center"},{default:s((()=>["0.00"===B.value.min_condition_money?(u(),p(n,{key:0},{default:s((()=>[d("无门槛")])),_:1})):(u(),p(n,{key:1},{default:s((()=>[d("满"+x(B.value.coupon_min_price)+"元可用",1)])),_:1}))])),_:1}),_(o,{class:"text-[26rpx] h-[36rpx] text-[#E22D17] mt-[44rpx] text-center flex justify-center items-center"},{default:s((()=>[1==B.value.valid_type?(u(),v(f,{key:0},[_(n,null,{default:s((()=>[d("领取之日起")])),_:1}),_(n,null,{default:s((()=>[d(x(B.value.length),1)])),_:1}),_(n,null,{default:s((()=>[d("天内有效")])),_:1})],64)):(u(),v(f,{key:1},[_(n,null,{default:s((()=>[d("有效期至")])),_:1}),_(n,null,{default:s((()=>[d(x(B.value.valid_end_time?B.value.valid_end_time.slice(0,10):""),1)])),_:1})],64))])),_:1}),_(o,{class:"flex justify-center items-center mt-[20rpx]"},{default:s((()=>["collected"===B.value.btnType?(u(),p(n,{key:0,class:"!leading-[100rpx] text-center text-[#fff] text-[46rpx] min-w-[240rpx] h-[106rpx]",style:i({background:"url("+c(w)("addon/phone_shop/coupon/coupon_btn_02.png")+")  center / contain no-repeat"})},{default:s((()=>[d("已领完 ")])),_:1},8,["style"])):m("v-if",!0),"collecting"===B.value.btnType?(u(),p(n,{key:1,class:"!leading-[100rpx] text-center text-[#E22D17] text-[46rpx] min-w-[240rpx] h-[106rpx]",style:i({background:"url("+c(w)("addon/phone_shop/coupon/coupon_btn.png")+") center / contain no-repeat"}),onClick:t[0]||(t[0]=e=>{return t=B.value.id,P.value?uni.getStorageSync("isbindmobile")?(G.value.open(),!1):void F({coupon_id:t,number:1}).then((e=>{B.value.btnType="using"})):(g().setLoginBack({url:"/addon/phone_shop/pages/coupon/list"}),!1);var t})},{default:s((()=>[d("领取 ")])),_:1},8,["style"])):m("v-if",!0),"using"===B.value.btnType?(u(),p(n,{key:2,class:"!leading-[100rpx] text-center text-[#E22D17] text-[46rpx] min-w-[240rpx] h-[106rpx]",style:i({background:"url("+c(w)("addon/phone_shop/coupon/coupon_btn.png")+") center / contain no-repeat"}),onClick:t[1]||(t[1]=e=>{return t=B.value.id,void r({url:"/addon/phone_shop/pages/goods/list",param:{coupon_id:t}});var t})},{default:s((()=>[d("去使用 ")])),_:1},8,["style"])):m("v-if",!0)])),_:1}),_(o,{class:"w-[230rpx] h-[230rpx] box-border p-[14rpx] bg-[#fff] mx-[auto] mt-[50rpx]"},{default:s((()=>[_(a,{class:"w-[200rpx] h-[200rpx]",src:z.value,mode:"aspectFill"},null,8,["src"])])),_:1}),_(o,{class:"text-[24rpx] text-[rgba(255,255,255,0.7)] mt-[30rpx] text-center"},{default:s((()=>[d("注:扫描二维码或点击右上角进行分享")])),_:1})])),_:1},8,["style"])])),_:1},8,["style"])):m("v-if",!0),_(l,{"bg-color":"rgb(248,248,248)",loading:S.value,loadingText:"",fontSize:"16",color:"#303133"},null,8,["loading"]),m(" 强制绑定手机号 "),_(C,{ref_key:"bindMobileRef",ref:G},null,512)])),_:1},8,["style"])}}}),[["__scopeId","data-v-3ccfae14"]]);export{z as default};