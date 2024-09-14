import{d as e,r as t,p as a,o as l,c as s,w as r,b as o,A as c,f as n,O as x,a6 as i,P as p,u,n as d,a7 as m,a8 as f,D as v,a4 as g,i as _,g as h,h as b,y,z as k,bw as j,E as w,a as C,B as V}from"./index-9317da28.js";import{_ as z}from"./u--image.5461b7b7.js";import{M as I}from"./mescroll-body.c2f6fcce.js";import{M}from"./mescroll-empty.82e9c349.js";import{u as U}from"./useMescroll.26ccf5de.js";import{c as S}from"./verify.05584230.js";import{s as D}from"./select-date.117645f6.js";import{_ as E}from"./_plugin-vue_export-helper.1b428a4d.js";import"./u-image.74ac23f6.js";import"./u-icon.5e775659.js";import"./u-transition.65be38eb.js";import"./mescroll-i18n.f3c5a2b0.js";import"./u-popup.1f2ebcae.js";import"./u-safe-bottom.3546c5bb.js";const F=E(e({__name:"record",setup(e){const E=t(""),F=t([]),O=t([]),P=t(!1),{mescrollInit:R,downCallback:A,getMescroll:B}=U(f,m);t(null),a((()=>{}));const N=e=>{P.value=!1;let t={page:e.num,limit:e.size,keyword:E.value,create_time:F.value};S(t).then((t=>{let a=t.data.data;1==e.num&&(O.value=[]),O.value=O.value.concat(a),e.endSuccess(a.length),P.value=!0})).catch((()=>{P.value=!0,e.endErr()}))},Q=()=>{B().resetUpScroll()},Z=t(),q=()=>{Z.value.show=!0},G=e=>{F.value=e,O.value=[],B().resetUpScroll()};return(e,t)=>{const a=v,m=g,f=_,U=V,S=h(b("u--image"),z);return l(),s(f,{class:"bg-[var(--page-bg-color)] min-h-screen overflow-hidden",style:d(e.themeColor())},{default:r((()=>[o(f,{class:"fixed left-0 right-0 top-0 z-99 bg-[#fff]"},{default:r((()=>[o(f,{class:"py-[14rpx] flex items-center justify-between px-[20rpx]"},{default:r((()=>[o(f,{class:"flex-1 search-input mr-[20rpx]"},{default:r((()=>[o(a,{onClick:t[0]||(t[0]=c((e=>Q()),["stop"])),class:"nc-iconfont nc-icon-sousuo-duanV6xx1 btn"}),o(m,{class:"input",maxlength:"50",type:"text",modelValue:E.value,"onUpdate:modelValue":t[1]||(t[1]=e=>E.value=e),placeholder:"请输入搜索关键词",placeholderClass:"text-[var(--text-color-light9)]","confirm-type":"search",onConfirm:t[2]||(t[2]=e=>Q())},null,8,["modelValue"]),E.value?(l(),s(a,{key:0,class:"nc-iconfont nc-icon-cuohaoV6xx1 clear",onClick:t[3]||(t[3]=e=>E.value="")})):n("v-if",!0)])),_:1}),o(f,{class:"nc-iconfont nc-icon-a-riliV6xx-36 !text-[30rpx] leading-[36rpx] text-[var(--text-color-light6)]",onClick:q})])),_:1})])),_:1}),o(I,{ref:"mescrollRef",top:"88rpx",onInit:u(R),down:{use:!1},onUp:N},{default:r((()=>[O.value.length?(l(),s(f,{key:0,class:"sidebar-marign pt-[var(--top-m)]"},{default:r((()=>[(l(!0),x(p,null,i(O.value,((e,t)=>(l(),s(f,{key:e.id,class:"w-full flex flex-col mb-[var(--top-m)] card-template",onClick:t=>{C({url:"/app/pages/verify/detail",param:{code:e.code}})}},{default:r((()=>[o(f,{class:"flex items-center mb-[30rpx] leading-[1] text-[26rpx]"},{default:r((()=>[o(f,{class:"nc-iconfont nc-icon-hexiaotaiV6xx !text-[26rpx] pr-[10rpx]"}),o(a,{class:"truncate text-[#303133] text-[26rpx]"},{default:r((()=>[y("核销码:")])),_:1}),o(a,{class:"ml-[10rpx] max-w-[494rpx]"},{default:r((()=>[y(k(e.code),1)])),_:2},1024),o(a,{class:"text-[#303133] text-[26rpx] font-400 nc-iconfont nc-icon-fuzhiV6xx1 ml-[11rpx]",onClick:c((t=>u(j)(e.code)),["stop"])},null,8,["onClick"])])),_:2},1024),(l(!0),x(p,null,i(e.value.list,((t,a)=>(l(),s(f,{class:"flex flex-1",key:a},{default:r((()=>[o(S,{width:"130rpx",height:"130rpx",radius:"var(--goods-rounded-big)",src:u(w)(t.cover?t.cover:""),mode:"aspectFill"},{error:r((()=>[o(U,{class:"w-[130rpx] h-[130rpx] rounded-[var(--goods-rounded-big)] overflow-hidden",src:u(w)("static/resource/images/diy/shop_default.jpg"),mode:"aspectFill"},null,8,["src"])])),_:2},1032,["radius","src"]),o(f,{class:"flex flex-col flex-1 ml-[20rpx] py-[4rpx]"},{default:r((()=>[o(f,{class:"max-w-[490rpx] leading-[1.3] truncate text-[28rpx] text-[#303133]"},{default:r((()=>[y(k(t.name),1)])),_:2},1024),e.sub_name?(l(),s(f,{key:0,class:"mt-[14rpx] truncate text-[24rpx] text-[var(--text-color-light9)] max-w-[490rpx]"},{default:r((()=>[y(k(e.sub_name),1)])),_:2},1024)):n("v-if",!0),o(f,{class:"text-[24rpx] mt-[10rpx] text-[var(--text-color-light9)]"},{default:r((()=>[y("x1")])),_:1})])),_:2},1024)])),_:2},1024)))),128)),o(f,{class:"flex bg-[var(--temp-bg)] py-[20rpx] px-[20rpx] rounded-[12rpx] mt-[20rpx]"},{default:r((()=>[o(f,{class:"flex-1"},{default:r((()=>[o(f,{class:"text-[22rpx] text-[var(--text-color-light9)] mb-[10rpx] leading-[30rpx]"},{default:r((()=>[y("核销时间")])),_:1}),o(f,{class:"text-[26rpx] text-[#303133] leading-[36rpx]"},{default:r((()=>[y(k(e.create_time),1)])),_:2},1024)])),_:2},1024),o(f,{class:"flex-1"},{default:r((()=>[o(f,{class:"text-[22rpx] text-[var(--text-color-light9)] mb-[10rpx] leading-[30rpx]"},{default:r((()=>[y("核销员")])),_:1}),o(f,{class:"text-[26rpx] text-[#303133] leading-[36rpx]"},{default:r((()=>[y(k(e.member?e.member.nickname:"--"),1)])),_:2},1024)])),_:2},1024)])),_:2},1024)])),_:2},1032,["onClick"])))),128))])),_:1})):n("v-if",!0),!O.value.length&&P.value?(l(),s(M,{key:1,option:{tip:"暂无核销记录"}})):n("v-if",!0)])),_:1},8,["onInit"]),n(" 时间选择 "),o(D,{ref_key:"selectDateRef",ref:Z,onConfirm:G},null,512)])),_:1},8,["style"])}}}),[["__scopeId","data-v-91ef5b88"]]);export{F as default};