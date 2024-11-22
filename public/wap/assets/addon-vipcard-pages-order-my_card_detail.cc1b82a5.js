import{d as e,r as t,p as a,o as l,c as s,w as o,b as r,u as d,y as c,z as n,f as u,P as i,a7 as f,Q as _,bV as m,n as x,B as p,i as g,D as v,g as b,h as y,E as h,F as w,R as k,a as j,C as F}from"./index-7bf68536.js";import{_ as C}from"./u-popup.be4bfacd.js";import{_ as B}from"./u-parse.525658f5.js";import{_ as V}from"./loading-page.vue_vue_type_script_setup_true_lang.124ad65f.js";import{p as z}from"./vipcard.fb0aea23.js";import{_ as A}from"./_plugin-vue_export-helper.1b428a4d.js";import"./u-transition.cdf87992.js";import"./u-icon.0c1c54c7.js";import"./u-safe-bottom.908eeae4.js";import"./u-loading-page.566c330a.js";import"./u-loading-icon.b37701e7.js";const D=A(e({__name:"my_card_detail",setup(e){let A=t({}),D=t(!1);const I=t(!0);a((e=>{R(e.card_id)}));const R=e=>{z(e).then((e=>{A.value=e.data,I.value=!1})).catch((()=>{I.value=!1}))};let q=t({});return(e,t)=>{const a=p,z=g,R=v,E=F,G=b(y("u-popup"),C),K=b(y("u-parse"),B),P=b(y("loading-page"),V);return l(),s(z,{class:"bg-[#F6F8FA] min-h-screen overflow-hidden",style:x(e.themeColor())},{default:o((()=>[I.value?u("v-if",!0):(l(),s(z,{key:0},{default:o((()=>[r(z,{class:"bg-[#fff] rounded-lg mx-3 mt-4 p-3"},{default:o((()=>[r(z,{class:"flex"},{default:o((()=>[r(a,{class:"w-[240rpx] h-[180rpx] rounded mr-3",src:d(h)(d(A).goods.cover_thumb_mid),mode:"aspectFill"},null,8,["src"]),r(z,{class:"flex flex-col py-1 flex-1"},{default:o((()=>[r(z,{class:"font-bold multi-hidden"},{default:o((()=>[c(n(d(A).goods.goods_name),1)])),_:1}),d(A).goods.keywords?(l(),s(z,{key:0,class:"text-xs text-[var(--text-color-light6)]"},{default:o((()=>[c(n(d(A).goods.keywords),1)])),_:1})):u("v-if",!0),r(z,{class:"mt-auto font-bold text-[#FF3223]"},{default:o((()=>[c("￥"+n(d(A).goods.price),1)])),_:1})])),_:1})])),_:1}),r(z,{class:"flex flex-wrap items-center justify-between text-[var(--text-color-light6)] mt-4"},{default:o((()=>[r(z,{class:"text-xs"},{default:o((()=>[c(n(d(w)("createTime"))+"："+n(d(A).create_time),1)])),_:1}),r(z,{class:"text-xs"},{default:o((()=>[c(n(d(w)("periodValidity"))+"："+n(d(A).expire_time_name),1)])),_:1})])),_:1})])),_:1}),r(z,{class:"flex flex-col mx-3 mt-4 px-3 py-4 bg-[#fff] rounded-lg"},{default:o((()=>[r(z,{class:"self-center mb-3 font-bold"},{default:o((()=>[c("- "+n(d(w)("serviceContent"))+" -",1)])),_:1}),r(z,{class:"text-xs text-[#888] mb-2"},{default:o((()=>["commoncard"==d(A).card_type&&d(A).total_num?(l(),s(R,{key:0},{default:o((()=>[c(n(d(w)("hitCount")+d(A).total_num)+" | 已使用: "+n(d(A).total_use_num)+" | 还剩 : "+n(d(A).total_num-d(A).total_use_num),1)])),_:1})):u("v-if",!0)])),_:1}),(l(!0),i(_,null,f(d(A).member_card_item,((e,t)=>(l(),s(z,{view:"",key:t,class:k(["bg-[#FBF9FC] rounded-md flex p-2 items-center",{"mb-3":d(A).member_card_item.length-1!=t}])},{default:o((()=>[r(a,{class:"w-[160rpx] h-[160rpx] rounded mr-3",src:d(h)(e.cover_thumb_small),mode:""},null,8,["src"]),r(z,{view:"",class:"flex-1 py-2 flex flex-col"},{default:o((()=>[r(z,{class:"multi-hidden font-bold"},{default:o((()=>[c(n(e.goods_name),1)])),_:2},1024),"oncecard"==d(A).card_type?(l(),s(z,{key:0,class:"text-xs text-[var(--text-color-light6)] mt-auto"},{default:o((()=>[c(n(d(w)("usable"))+"x"+n(d(A).total_num),1)])),_:1})):u("v-if",!0),"oncecard"==d(A).card_type?(l(),s(z,{key:1,class:"text-xs text-[var(--text-color-light6)] mt-1"},{default:o((()=>[c(n(d(w)("haveBeen"))+"x"+n(d(A).total_use_num),1)])),_:1})):u("v-if",!0),"oncecard"==d(A).card_type?(l(),s(z,{key:2,class:"text-xs text-[var(--text-color-light6)] mt-1"},{default:o((()=>[c(" 还剩: "+n(d(A).total_num-d(A).total_use_num)+" 次",1)])),_:1})):u("v-if",!0)])),_:2},1024),r(E,{class:"self-center border-[2rpx] border-solid border-[var(--primary-color)] ml-1 w-[128rpx] h-[48rpx] leading-[44rpx] rounded-xl px-[0] text-[var(--primary-color)] text-xs bg-[#fff]",onClick:t=>{return a=e,D.value=!0,void(q.value=a);var a}},{default:o((()=>[c(n(d(w)("verification")),1)])),_:2},1032,["onClick"])])),_:2},1032,["class"])))),128)),r(z,{class:"text-sm text-[#888] flex items-center self-center mt-4",onClick:t[0]||(t[0]=e=>d(j)({url:"/addon/vipcard/pages/order/card_record",param:{card_id:d(A).card_id}}))},{default:o((()=>[r(R,null,{default:o((()=>[c(n(d(w)("usageRecord")),1)])),_:1}),r(R,{class:"text-[26rpx] nc-iconfont nc-icon-youV6xx"})])),_:1})])),_:1}),r(G,{show:d(D),onClose:t[1]||(t[1]=e=>m(D)?D.value=!1:D=!1)},{default:o((()=>[r(z,{class:"text-center py-[30rpx] font-bold leading-none"},{default:o((()=>[r(R,null,{default:o((()=>[c(n(d(w)("verificationCode")),1)])),_:1})])),_:1}),r(z,{class:"flex flex-col p-3 pb-5 items-center"},{default:o((()=>[r(a,{src:d(q).verify_code_barcode,mode:"widthFix",class:"mb-5 w-[546rpx] border-1 border-[#aba9aa] border-dashed p-1"},null,8,["src"]),r(a,{src:d(q).verify_code_qrcode,mode:"widthFix",class:"w-[326rpx] border-1 border-[#aba9aa] border-dashed"},null,8,["src"]),r(z,{class:"text-xs text-[var(--text-color-light6)] mt-3"},{default:o((()=>[c(n(d(w)("codeDesc")),1)])),_:1})])),_:1})])),_:1},8,["show"]),r(z,{class:"flex flex-col mx-3 mt-4 px-3 py-4 bg-[#fff] rounded-lg"},{default:o((()=>[r(z,{class:"self-center mb-3 font-bold"},{default:o((()=>[c("- "+n(d(w)("instructions"))+" -",1)])),_:1}),r(z,{class:"mt-2"},{default:o((()=>[d(A).goods.goods_content?(l(),s(K,{key:0,content:d(A).goods.goods_content,tagStyle:{img:"vertical-align: top;"}},null,8,["content"])):(l(),s(z,{key:1},{default:o((()=>[c(n(d(w)("noInstructions")),1)])),_:1}))])),_:1})])),_:1})])),_:1})),r(P,{loading:I.value},null,8,["loading"])])),_:1},8,["style"])}}}),[["__scopeId","data-v-0d426420"]]);export{D as default};
