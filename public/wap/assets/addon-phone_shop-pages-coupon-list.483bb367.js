import{d as e,j as t,r,l,p as a,o,c as s,w as p,b as n,n as i,u,Q as c,y as d,O as x,a6 as _,P as f,f as m,A as v,a7 as b,a8 as g,ag as y,b2 as h,i as k,D as F,a5 as w,g as j,h as C,E as T,z as S,G as z,b3 as D,H as R,a as I,C as E}from"./index-2882a2d8.js";import{_ as M}from"./u-popup.2abbe959.js";import{t as V}from"./topTabbar.ab70b119.js";import{b as H,c as U,d as P}from"./coupon.1e558de6.js";import{b as A}from"./bind-mobile.7168b221.js";import{M as B}from"./mescroll-body.e69cb222.js";import{M as G}from"./mescroll-empty.7f392528.js";import{u as N}from"./useMescroll.26ccf5de.js";import{_ as O}from"./_plugin-vue_export-helper.1b428a4d.js";import"./u-overlay.1a317a4e.js";import"./u-transition.4448d2e5.js";import"./u-icon.1104ad2f.js";import"./u-safe-bottom.f13b01b8.js";import"./u-form-item.03ed7ff5.js";import"./u-line.d7ff94e2.js";/* empty css                                                               */import"./u-form.54744837.js";import"./sms-code.vue_vue_type_script_setup_true_lang.c0821f07.js";/* empty css                                                               */import"./u-input.6410b5d0.js";/* empty css                                                                */import"./u-modal.c146ecea.js";import"./u-loading-icon.a37f7e61.js";/* empty css                                                                       *//* empty css                                                                */import"./u-checkbox-group.5e46c6da.js";/* empty css                                                                         *//* empty css                                                                    */import"./mescroll-i18n.c2747603.js";/* empty css                                                                       */const Q=O(e({__name:"list",setup(e){const{mescrollInit:O,downCallback:Q,getMescroll:q}=N(g,b);let L={};V().setTopTabbarParam({title:"优惠券列表"}),t((()=>z(Number(L.height))+z(L.top)+z(8)+364+"rpx"));const Z=t((()=>{let e="";return e=Object.keys(L).length?z(Number(L.height))+z(L.top)+z(8)+416+"rpx":"416rpx",e})),$=D();let J=r();y((()=>{setTimeout((()=>{h().in($).select(".coupon-header").boundingClientRect((e=>{J.value=e.height+"px"})).exec()}))}));const K=t((()=>{let e="";return e="calc(100vh - 458rpx)","calc(100vh - 458rpx)"})),W=r([]),X=r(!0),Y=l(),ee=t((()=>Y.info)),te=e=>{X.value=!0;let t={page:e.num,limit:e.size,order:"all"===se.value?"":se.value,sort:"price"==se.value?ae.value:oe.value,type:ne.value||""};H(t).then((t=>{let r=t.data.data.map((e=>(-1!=e.sum_count&&e.receive_count===e.sum_count?e.btnType="collected":ee.value&&e.is_receive&&e.limit_count===e.member_receive_count?e.btnType="using":e.btnType="collecting",e)));1==e.num&&(W.value=[]),W.value=W.value.concat(r),e.endSuccess(r.length),X.value=!1})).catch((()=>{X.value=!1,e.endErr()}))},re=r(null),le=e=>{I({url:"/addon/phone_shop/pages/coupon/detail",param:{coupon_id:e}})},ae=r(""),oe=r(""),se=r("all"),pe=r(0),ne=r(""),ie=r([]),ue=r(!1);a((()=>{U().then((e=>{ie.value.push({label:"全部",value:""}),ie.value=ie.value.concat(e.data)}))}));const ce=e=>{se.value=e,"all"==e&&(oe.value="",ae.value=""),"price"==e&&(oe.value="",ae.value?ae.value="asc"==ae.value?"desc":"asc":ae.value="asc"),"create_time"==e&&(ae.value="",oe.value?oe.value="asc"==oe.value?"desc":"asc":oe.value="asc"),"type"==e?(oe.value="asc",ae.value="asc",ue.value=!0):(ue.value=!1,W.value=[],q().resetUpScroll())};return(e,t)=>{const r=k,l=F,a=E,b=w,g=j(C("u-popup"),M);return o(),s(r,{class:"bg-[#F6F6F6] min-h-[100vh] overflow-hidden",style:i(e.themeColor())},{default:p((()=>[n(r,{class:"coupon-header fixed left-0 right-0 top-0 z-10080"},{default:p((()=>[n(r,{class:"h-[364rpx]",style:i({backgroundImage:"url("+u(T)("addon/phone_shop/coupon/coupon_uniapp.png")+")",backgroundSize:"cover",backgroundPosition:"bottom",backgroundRepeat:"no-repeat"})},null,8,["style"]),n(r,{class:c(["-mt-[-36rpx] px-[var(--sidebar-m)] py-[24rpx] flex items-center justify-between leading-[40rpx] text-[28rpx] bg-[#F6F6F6] rounded-t-[26rpx] relative z-99999",{"!bg-[#fff]":ue.value}])},{default:p((()=>[n(l,{class:c({"text-primary ":"all"==se.value}),onClick:t[0]||(t[0]=e=>ce("all"))},{default:p((()=>[d("默认排序")])),_:1},8,["class"]),n(r,{class:c(["flex items-center",{"text-primary":"create_time"==se.value}]),onClick:t[1]||(t[1]=e=>ce("create_time"))},{default:p((()=>[n(l,{class:"mr-[4rpx]"},{default:p((()=>[d("最新")])),_:1}),"asc"==oe.value?(o(),s(l,{key:0,class:c(["text-[18rpx] text-[#626779] nc-iconfont nc-icon-a-xiangshangV6xx1",{"!text-primary":"create_time"==se.value}])},null,8,["class"])):(o(),s(l,{key:1,class:c(["text-[18rpx] text-[#626779] nc-iconfont nc-icon-a-xiangxiaV6xx1",{"!text-primary":"create_time"==se.value}])},null,8,["class"]))])),_:1},8,["class"]),n(r,{class:c(["flex items-center",{"text-primary":"price"==se.value}]),onClick:t[2]||(t[2]=e=>ce("price"))},{default:p((()=>[n(l,{class:"mr-[4rpx]"},{default:p((()=>[d("价格")])),_:1}),"asc"==ae.value?(o(),s(l,{key:0,class:c(["text-[18rpx] text-[#626779] nc-iconfont nc-icon-a-xiangshangV6xx1",{"!text-primary":"price"==se.value}])},null,8,["class"])):(o(),s(l,{key:1,class:c(["text-[18rpx] text-[#626779] nc-iconfont nc-icon-a-xiangxiaV6xx1",{"!text-primary":"price"==se.value}])},null,8,["class"]))])),_:1},8,["class"]),n(r,{class:c(["flex items-center",{"text-primary":"type"==se.value}]),onClick:t[3]||(t[3]=e=>ce("type"))},{default:p((()=>[n(r,{class:"w-[2rpx] h-[28rpx] bg-gradient-to-b from-[#333] to-[#fff] mr-[20rpx] flex-shrink-0"}),n(l,{class:"mr-[10rpx]"},{default:p((()=>[d("筛选")])),_:1}),n(l,{class:"nc-iconfont color-[#626779] nc-icon-shaixuanV6xx text-[28rpx]"})])),_:1},8,["class"])])),_:1},8,["class"])])),_:1}),n(B,{ref:"mescrollRef",onInit:u(O),down:{use:!1},height:"auto",onUp:te,top:u(Z)},{default:p((()=>[n(r,{class:"py-[20rpx] sidebar-marign"},{default:p((()=>[(o(!0),x(f,null,_(W.value,((e,t)=>(o(),x(f,null,["collected"===e.btnType?(o(),s(r,{key:0,class:c(["flex items-center relative w-[100%] rounded-[20rpx] overflow-hidden bg-[#fff] py-[20rpx] background-size",{"mt-[20rpx]":t}]),style:i({backgroundImage:"url("+u(T)("addon/phone_shop/coupon/coupn_loot.png")+")"}),onClick:t=>le(e.id)},{default:p((()=>[n(r,{class:"box-border flex-1 border-0 border-r-[1px] border-[#FFDCDC] border-dashed flex items-center"},{default:p((()=>[n(r,{class:"w-[164rpx] box-border flex justify-center"},{default:p((()=>[n(r,{class:"flex items-baseline text-[var(--price-text-color)]"},{default:p((()=>[n(l,{class:"text-[26rpx] leading-[34rpx] text-center font-400 price-font"},{default:p((()=>[d("￥")])),_:1}),n(l,{class:"text-[54rpx] font-500 text-left leading-[70rpx] max-w-[136rpx] truncate price-font"},{default:p((()=>[d(S(e.coupon_price),1)])),_:2},1024)])),_:2},1024)])),_:2},1024),n(r,{class:"flex-1 box-border ml-[10rpx]"},{default:p((()=>[n(r,{class:"text-[30rpx] leading-[42rpx] text-left font-500"},{default:p((()=>["0.00"===e.min_condition_money?(o(),s(l,{key:0},{default:p((()=>[d("无门槛")])),_:1})):(o(),s(l,{key:1},{default:p((()=>[d("满"+S(e.coupon_min_price)+"元可用",1)])),_:2},1024))])),_:2},1024),n(r,{class:"mt-[10rpx] text-left flex items-center"},{default:p((()=>[n(l,{class:"bg-[#FFEFF0] whitespace-nowrap text-[#EF000C] text-[20rpx] h-[28rpx] leading-[28rpx] px-[10rpx] rounded-[13rpx] mr-[10rpx] flex-shrink-0"},{default:p((()=>[d(S(e.type_name),1)])),_:2},1024),n(l,{class:"text-[22rpx] truncate max-w-[190rpx] leading-[30rpx] text-[#626779]"},{default:p((()=>[d(S(e.title),1)])),_:2},1024)])),_:2},1024),n(r,{class:"w-[100%] mt-[6rpx] text-[22rpx] leading-[30rpx] text-[#626779]"},{default:p((()=>[1==e.valid_type?(o(),s(l,{key:0},{default:p((()=>[d("领取之日起"+S(e.length||"")+"天内有效",1)])),_:2},1024)):(o(),s(l,{key:1},{default:p((()=>[d(" 有效期至"+S(e.valid_end_time?e.valid_end_time.slice(0,10):""),1)])),_:2},1024))])),_:2},1024)])),_:2},1024)])),_:2},1024),n(r,{class:"pr-[20rpx] pl-[34rpx]"},{default:p((()=>[n(a,{style:{width:"144rpx",height:"56rpx",color:"#fff",fontSize:"24rpx",lineHeight:"56rpx",padding:"0",backgroundColor:"#ee9ea2",border:"none",opacity:"1",borderRadius:"30rpx"},disabled:""},{default:p((()=>[d("已领完")])),_:1})])),_:1}),n(r,{class:"absolute top-0 right-[190rpx] h-[10rpx] w-[20rpx] rounded-br-[20rpx] rounded-bl-[20rpx] bg-[#F6F6F6]"}),n(r,{class:"absolute bottom-0 right-[190rpx] h-[10rpx] w-[20rpx] rounded-tr-[20rpx] rounded-tl-[20rpx] bg-[#F6F6F6]"})])),_:2},1032,["class","style","onClick"])):(o(),s(r,{key:1,class:c(["flex items-center relative w-[100%] rounded-[20rpx] overflow-hidden bg-[#fff] py-[20rpx] background-size",{"mt-[20rpx]":t}]),onClick:t=>le(e.id)},{default:p((()=>[n(r,{class:"relative box-border flex-1 border-0 border-r-[1px] border-[#FFDCDC] border-dashed flex items-center pl-[10rpx]"},{default:p((()=>[n(r,{class:"w-[164rpx] box-border flex justify-center"},{default:p((()=>[n(r,{class:"flex items-baseline text-[var(--price-text-color)]"},{default:p((()=>[n(l,{class:"text-[26rpx] leading-[34rpx] text-center font-400 price-font"},{default:p((()=>[d("￥")])),_:1}),n(l,{class:"text-[54rpx] font-500 text-left leading-[70rpx] max-w-[136rpx] truncate price-font"},{default:p((()=>[d(S(e.coupon_price),1)])),_:2},1024)])),_:2},1024)])),_:2},1024),n(r,{class:"flex-1 box-border ml-[10rpx]"},{default:p((()=>[n(r,{class:"text-[30rpx] leading-[42rpx] text-left font-500"},{default:p((()=>["0.00"===e.min_condition_money?(o(),s(l,{key:0},{default:p((()=>[d("无门槛")])),_:1})):(o(),s(l,{key:1},{default:p((()=>[d("满"+S(e.coupon_min_price)+"元可用",1)])),_:2},1024))])),_:2},1024),n(r,{class:"mt-[10rpx] text-left flex items-center"},{default:p((()=>[n(l,{class:"bg-[#FFEFF0] whitespace-nowrap text-[#EF000C] text-[20rpx] h-[28rpx] leading-[28rpx] px-[10rpx] rounded-[14rpx] mr-[10rpx] flex-shrink-0"},{default:p((()=>[d(S(e.type_name),1)])),_:2},1024),n(l,{class:"text-[22rpx] truncate max-w-[190rpx] leading-[30rpx] text-[#626779]"},{default:p((()=>[d(S(e.title),1)])),_:2},1024)])),_:2},1024),n(r,{class:"w-[100%] mt-[6rpx] text-[22rpx] leading-[30rpx] text-[#626779]"},{default:p((()=>[1==e.valid_type?(o(),s(l,{key:0},{default:p((()=>[d("领取之日起"),n(l,null,{default:p((()=>[d(S(e.length||""),1)])),_:2},1024),d("天内有效")])),_:2},1024)):(o(),s(l,{key:1},{default:p((()=>[d(" 有效期至"),n(l,null,{default:p((()=>[d(S(e.valid_end_time?e.valid_end_time.slice(0,10):""),1)])),_:2},1024)])),_:2},1024))])),_:2},1024)])),_:2},1024)])),_:2},1024),"collecting"===e.btnType?(o(),s(r,{key:0,onClick:v((r=>((e,t)=>ee.value?uni.getStorageSync("isbindmobile")?(re.value.open(),!1):void P({coupon_id:e,number:1,type:"receive"}).then((e=>{e.code>0&&(W.value[t].member_receive_count+=1,W.value[t].receive_count+=1,(W.value[t].member_receive_count==W.value[t].limit_count||-1!=W.value[t].sum_count&&W.value[t].receive_count===W.value[t].sum_count)&&(W.value[t].btnType="using"))})):(R().setLoginBack({url:"/addon/phone_shop/pages/coupon/list"}),!1))(e.id,t)),["stop"]),class:"pr-[20rpx] pl-[34rpx]"},{default:p((()=>[n(a,{style:i({width:"144rpx",height:"56rpx",color:"#fff",fontSize:"24rpx",lineHeight:"56rpx",padding:"0",backgroundColor:"var(--primary-color)",border:"none",borderRadius:"30rpx"})},{default:p((()=>[d("立即领取")])),_:1},8,["style"])])),_:2},1032,["onClick"])):m("v-if",!0),"using"===e.btnType?(o(),s(r,{key:1,onClick:v((t=>{return r=e.id,void I({url:"/addon/phone_shop/pages/goods/list",param:{coupon_id:r}});var r}),["stop"]),class:"pr-[20rpx] pl-[34rpx]"},{default:p((()=>[n(a,{style:i({width:"144rpx",height:"56rpx",color:"var(--primary-color)",fontSize:"24rpx",lineHeight:"52rpx",padding:"0",backgroundColor:"transparent",border:"2rpx solid var(--primary-color)",borderRadius:"30rpx"})},{default:p((()=>[d("去使用")])),_:1},8,["style"])])),_:2},1032,["onClick"])):m("v-if",!0),n(r,{class:"absolute top-0 right-[190rpx] h-[10rpx] w-[20rpx] rounded-br-[20rpx] rounded-bl-[20rpx] bg-[#F6F6F6]"}),n(r,{class:"absolute bottom-0 right-[190rpx] h-[10rpx] w-[20rpx] rounded-tr-[20rpx] rounded-tl-[20rpx] bg-[#F6F6F6]"})])),_:2},1032,["class","onClick"]))],64)))),256)),W.value.length||X.value?m("v-if",!0):(o(),s(r,{key:0,style:i({height:u(K)}),class:"noData rounded-[20rpx] flex items-center justify-center"},{default:p((()=>[n(G,{option:{tip:"暂无优惠券"}})])),_:1},8,["style"]))])),_:1})])),_:1},8,["onInit","top"]),n(g,{show:ue.value,mode:"top",onClose:t[5]||(t[5]=e=>ue.value=!1),customStyle:{top:u(J)},safeAreaInsetBottom:!1},{default:p((()=>[n(r,{onTouchmove:t[4]||(t[4]=v((()=>{}),["prevent","stop"]))},{default:p((()=>[n(b,{"scroll-x":!0,"scroll-with-animation":"","scroll-into-view":"id"+(pe.value?pe.value-1:0),class:"px-[var(--sidebar-m)] box-border bg-white rounded-b-[26rpx]"},{default:p((()=>[n(r,{class:"items-center flex py-[25rpx] border-0 border-t-[2rpx] border-solid border-[#F0F2F8]"},{default:p((()=>[(o(!0),x(f,null,_(ie.value,((e,t)=>(o(),s(l,{class:c(["flex-shrink-0 w-[120rpx] h-[50rpx] text-[26rpx] leading-[50rpx] text-center text-[#626779] bg-[#F8F9FD] rounded-[30rpx] border-box mr-[20rpx] border-[2rpx] border-solid border-[#F8F9FD]",{"!text-primary !border-primary !bg-[rgba(239,0,12,0.04)] font-500":e.value==ne.value}]),key:t,id:"id"+t,onClick:r=>((e,t)=>{pe.value=e,ne.value=t,W.value=[],q().resetUpScroll(),ue.value=!1})(t,e.value)},{default:p((()=>[d(S(e.label),1)])),_:2},1032,["class","id","onClick"])))),128))])),_:1})])),_:1},8,["scroll-into-view"])])),_:1})])),_:1},8,["show","customStyle"]),m(" 强制绑定手机号 "),n(A,{ref_key:"bindMobileRef",ref:re},null,512)])),_:1},8,["style"])}}}),[["__scopeId","data-v-df7a04e2"]]);export{Q as default};