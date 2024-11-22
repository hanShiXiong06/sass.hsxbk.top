import{d as e,j as a,g as l,h as t,o as r,c as o,w as s,P as u,Q as n,a7 as d,u as i,R as p,b as c,E as x,A as m,e as f,y as _,z as v,v as g,t as h,av as b,D as y,i as j,r as w,p as V,a as C,n as z,C as k,c2 as A}from"./index-7bf68536.js";import{_ as U}from"./u-icon.0c1c54c7.js";import{_ as E}from"./u--image.b3bf1d5c.js";import{_ as I}from"./u-rate.471bdcf6.js";import{_ as P}from"./u-tabbar.d98653fa.js";import{_ as B}from"./u-loading-page.566c330a.js";import{a as F}from"./order.2608f784.js";import{s as M}from"./evaluate.c2a9d759.js";import{_ as N}from"./u-upload.ab11cc5c.js";import{_ as Q}from"./_plugin-vue_export-helper.1b428a4d.js";import"./u-image.e46f68ef.js";import"./u-transition.cdf87992.js";import"./u-safe-bottom.908eeae4.js";import"./u-loading-icon.b37701e7.js";/* empty css                                                                 */const R=e({__name:"upload-img",props:{modelValue:{type:String||Array},maxCount:{type:Number,default:9},multiple:{type:Boolean,default:!1}},emits:["update:modelValue"],setup(e,{emit:w}){const V=e,C=a({get:()=>V.modelValue,set(e){w("update:modelValue",e)}}),z=a((()=>V.maxCount)),k=e=>{V.multiple?e.file.forEach((e=>{A({file:e})})):A(e)},A=e=>{var a;if((null==(a=C.value)?void 0:a.length)>=z.value)return h({title:`最多允许上传${z.value}张图片`,icon:"none"}),!1;b({filePath:e.file.url,name:"file"}).then((e=>{var a;(null==(a=C.value)?void 0:a.length)<z.value&&C.value.push(e.data.url)})).catch((()=>{}))};return(e,a)=>{const h=l(t("u-icon"),U),b=l(t("u--image"),E),w=y,A=j,I=l(t("u-upload"),N);return r(),o(A,{class:"flex flex-wrap"},{default:s((()=>[(r(!0),u(n,null,d(i(C),((e,a)=>(r(),o(A,{class:p(["mb-[18rpx] relative",(a+1)%3==0?"":"mr-[18rpx]"])},{default:s((()=>[c(b,{class:"rounded-[10rpx] overflow-hidden",width:"204rpx",height:"204rpx",src:i(x)(e||""),model:"aspectFill"},{error:s((()=>[c(h,{name:"photo",color:"#999",size:"50"})])),_:2},1032,["src"]),c(w,{class:"nc-iconfont nc-icon-guanbiV6xx absolute top-0 right-[5rpx] text-[#fff] bg-[#888] rounded-bl-[16rpx]",onClick:m((e=>(e=>{C.value.splice(e,1)})(a)),["stop"])},null,8,["onClick"])])),_:2},1032,["class"])))),256)),f(c(A,{class:"w-[204rpx] h-[204rpx]"},{default:s((()=>[c(I,{onAfterRead:k,maxCount:i(z),multiple:V.multiple},{default:s((()=>[c(A,{class:"flex items-center justify-center w-[204rpx] h-[204rpx] border-[2rpx] border-dashed border-[#ebebec] text-center text-[#888]"},{default:s((()=>[c(A,null,{default:s((()=>[c(A,{class:"nc-iconfont nc-icon-xiangjiV6xx text-[50rpx]"}),c(A,{class:"text-[24rpx] mt-[10rpx]"},{default:s((()=>[_(v(i(C).length)+"/"+v(i(z)),1)])),_:1})])),_:1})])),_:1})])),_:1},8,["maxCount","multiple"])])),_:1},512),[[g,i(C).length<i(z)]])])),_:1})}}}),S=Q(e({__name:"order_evaluate",setup(e){const a=w([]),m=w([]),f=w("2"),g=w(!1),b=w("");V((e=>{b.value=e.order_id,N(b.value)}));const N=e=>{g.value=!0,F(e).then((e=>{if(e.data.is_evaluate)return T(b.value),!1;a.value=e.data.order_goods,e.data.order_goods.forEach((e=>{m.value.push({order_id:e.order_id,order_goods_id:e.order_goods_id,goods_id:e.goods_id,content:"",images:[],scores:5})})),g.value=!1})).catch((()=>{g.value=!1}))},Q=()=>{f.value="1"===f.value?"2":"1"},S=()=>{if(m.value.some((e=>""==e.content)))return h({title:"请输入你的评价",icon:"none"}),!1;for(let e=0;e<m.value.length;e++){let a=m.value[e];a.content.length>200&&(a.content=a.content.substr(0,200))}m.value.forEach((e=>e.is_anonymous=f.value)),g.value=!0,M({evaluate_array:m.value}).then((e=>{g.value=!1,T(b.value)})).catch((()=>{g.value=!1}))},T=e=>{C({url:"/addon/phone_shop/pages/evaluate/order_evaluate_view",param:{order_id:e},mode:"redirectTo"})};return(e,h)=>{const b=l(t("u-icon"),U),w=l(t("u--image"),E),V=j,C=y,F=l(t("u-rate"),I),M=A,N=k,T=l(t("u-tabbar"),P),q=l(t("u-loading-page"),B);return r(),o(V,{class:"bg-[#f8f8f8] min-h-screen",style:z(e.themeColor())},{default:s((()=>[c(V,{class:"px-[24rpx] py-[20rpx]"},{default:s((()=>[(r(!0),u(n,null,d(a.value,((e,a)=>(r(),o(V,{key:a,class:"bg-white py-[20rpx] px-[24rpx] mb-[20rpx] rounded-[16rpx]"},{default:s((()=>[c(V,{class:"flex mb-[20rpx]"},{default:s((()=>[c(w,{class:"rounded-[10rpx] overflow-hidden",width:"200rpx",height:"200rpx",src:i(x)(e.goods_image_thumb_small?e.goods_image_thumb_small:""),model:"aspectFill"},{error:s((()=>[c(b,{name:"photo",color:"#999",size:"50"})])),_:2},1032,["src"]),c(V,{class:"flex-1 flex flex-wrap ml-[20rpx]"},{default:s((()=>[c(V,null,{default:s((()=>[c(V,{class:"text-[26rpx] h-[80rpx] leading-[40rpx] multi-hidden mb-[10rpx]"},{default:s((()=>[_(v(e.goods_name),1)])),_:2},1024),c(V,{class:"w-[404rpx] mt-[12rpx] truncate text-[#888] text-[24rpx] leading-[32rpx]"},{default:s((()=>[_(v(e.sku_name),1)])),_:2},1024)])),_:2},1024),c(V,{class:"mt-auto flex self-end justify-between w-[100%]"},{default:s((()=>[c(V,{class:"flex flex-col"},{default:s((()=>[c(C,{class:"text-[28rpx] text-[var(--price-text-color)] price-font"},{default:s((()=>[_("￥"+v(e.price),1)])),_:2},1024)])),_:2},1024),c(C,{class:"text--[24rpx] text-[#666]"},{default:s((()=>[_("x"+v(e.num),1)])),_:2},1024)])),_:2},1024)])),_:2},1024)])),_:2},1024),c(V,{class:"pt-[20rpx] flex items-center border-0 border-t-[2rpx] border-solid border-[#ebebec]"},{default:s((()=>[c(F,{count:5,modelValue:m.value[a].scores,"onUpdate:modelValue":e=>m.value[a].scores=e,"active-color":"var(--primary-color)",size:"32rpx"},null,8,["modelValue","onUpdate:modelValue"]),c(C,{class:"ml-[20rpx] text-[26rpx] text-[#888]"},{default:s((()=>[_(v(1===m.value[a].scores?"差评":2===m.value[a].scores||3===m.value[a].scores?"中评":"好评"),1)])),_:2},1024)])),_:2},1024),c(M,{class:"!text-[26rpx] mt-[20rpx] w-[100%]",modelValue:m.value[a].content,"onUpdate:modelValue":e=>m.value[a].content=e,modelModifiers:{trim:!0},placeholder:"请在此处输入你的评价",maxlength:"200"},null,8,["modelValue","onUpdate:modelValue"]),c(V,{class:"text-right text-[24rpx] text-[#888]"},{default:s((()=>[_(v(m.value[a].content.length>=200?200:m.value[a].content.length)+"/200",1)])),_:2},1024),c(i(R),{class:"mt-[20rpx]",modelValue:m.value[a].images,"onUpdate:modelValue":e=>m.value[a].images=e,"max-count":9,multiple:!0},null,8,["modelValue","onUpdate:modelValue"])])),_:2},1024)))),128))])),_:1}),c(T,{fixed:!0,placeholder:!0,safeAreaInsetBottom:!0,zIndex:"9999"},{default:s((()=>[c(V,{class:"flex items-center px-[30rpx] py-[10rpx] box-border justify-between w-[100%]"},{default:s((()=>[c(V,{class:"flex items-center",onClick:Q},{default:s((()=>[c(C,{class:p(["iconfont text-color text-[34rpx] mr-[12rpx]",{"iconxuanze1 text-[var(--primary-color)]":"1"===f.value,"nc-iconfont nc-icon-yuanquanV6xx":"1"!==f.value}])},null,8,["class"]),c(C,{class:p(["font-500 text-[28rpx]",{"text-[var(--primary-color)]":"1"===f.value,"text-[#676767]":"1"!==f.value}])},{default:s((()=>[_("匿名")])),_:1},8,["class"])])),_:1}),c(N,{class:"!w-[444rpx] !h-[80rpx] text-[32rpx] !m-0 leading-[80rpx] rounded-full text-white bg-[var(--primary-color)] remove-border",onClick:S},{default:s((()=>[_("提交")])),_:1})])),_:1})])),_:1}),c(q,{"bg-color":"rgb(248,248,248)",loading:g.value,loadingText:"",fontSize:"16",color:"#303133"},null,8,["loading"])])),_:1},8,["style"])}}}),[["__scopeId","data-v-c1ded404"]]);export{S as default};
