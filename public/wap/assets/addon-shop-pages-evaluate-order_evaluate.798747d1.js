import{d as e,j as a,g as t,h as l,o as r,c as o,w as s,P as u,Q as n,a7 as d,u as i,R as p,b as c,E as x,A as m,e as f,y as v,z as _,v as g,t as h,av as b,bo as y,D as j,i as w,r as V,p as C,K as k,a as z,n as A,C as F,f as U,c2 as E}from"./index-7bf68536.js";import{_ as I}from"./u-icon.0c1c54c7.js";import{_ as P}from"./u--image.b3bf1d5c.js";import{_ as B}from"./u-rate.471bdcf6.js";import{_ as M}from"./u-tabbar.d98653fa.js";import{_ as N}from"./loading-page.vue_vue_type_script_setup_true_lang.124ad65f.js";import{a as R}from"./order.3552570e.js";import{s as q}from"./evaluate.d399ea31.js";import{_ as D}from"./u-upload.ab11cc5c.js";import{_ as J}from"./_plugin-vue_export-helper.1b428a4d.js";import"./u-image.e46f68ef.js";import"./u-transition.cdf87992.js";import"./u-safe-bottom.908eeae4.js";import"./u-loading-page.566c330a.js";import"./u-loading-icon.b37701e7.js";/* empty css                                                                 */const K=e({__name:"upload-img",props:{modelValue:{type:String||Array},maxCount:{type:Number,default:9},multiple:{type:Boolean,default:!1}},emits:["update:modelValue"],setup(e,{emit:V}){const C=e,k=a({get:()=>C.modelValue,set(e){V("update:modelValue",e)}}),z=a((()=>C.maxCount)),A=e=>{C.multiple?e.file.forEach((e=>{F({file:e})})):F(e)},F=e=>{var a;if((null==(a=k.value)?void 0:a.length)>=z.value)return h({title:`最多允许上传${z.value}张图片`,icon:"none"}),!1;b({filePath:e.file.url,name:"file"}).then((e=>{var a;(null==(a=k.value)?void 0:a.length)<z.value&&k.value.push(e.data.url)})).catch((()=>{}))};return(e,a)=>{const h=t(l("u-icon"),I),b=t(l("u--image"),P),V=j,F=w,U=t(l("u-upload"),D);return r(),o(F,{class:"flex flex-wrap"},{default:s((()=>[(r(!0),u(n,null,d(i(k),((e,a)=>(r(),o(F,{class:p(["mb-[18rpx] relative",{"mr-[18rpx]":(a+1)%4!=0}])},{default:s((()=>[c(b,{class:"rounded-[10rpx] overflow-hidden",width:"140rpx",height:"140rpx",src:i(x)(e||""),model:"aspectFill",onClick:a=>(e=>{if(""===e)return!1;var a=[];a.push(x(e)),y({indicator:"number",loop:!0,urls:a})})(e)},{error:s((()=>[c(h,{name:"photo",color:"#999",size:"50"})])),_:2},1032,["src","onClick"]),c(F,{class:"absolute top-0 right-[0] bg-[#373737] flex justify-end h-[28rpx] w-[28rpx] rounded-bl-[40rpx]",onClick:m((e=>(e=>{k.value.splice(e,1)})(a)),["stop"])},{default:s((()=>[c(V,{class:"nc-iconfont nc-icon-guanbiV6xx !text-[20rpx] mt-[2rpx] mr-[2rpx] text-[#fff]"})])),_:2},1032,["onClick"])])),_:2},1032,["class"])))),256)),f(c(F,{class:"w-[140rpx] h-[140rpx]"},{default:s((()=>[c(U,{onAfterRead:A,maxCount:i(z),multiple:C.multiple},{default:s((()=>[c(F,{class:"flex items-center justify-center w-[140rpx] h-[140rpx] border-[2rpx] border-dashed border-[#ddd] text-center text-[var(--text-color-light9)] rounded-[var(--goods-rounded-big)]"},{default:s((()=>[c(F,null,{default:s((()=>[c(F,{class:"nc-iconfont nc-icon-xiangjiV6xx text-[50rpx]"}),c(F,{class:"text-[24rpx] mt-[12rpx]"},{default:s((()=>[v(_(i(k).length)+"/"+_(i(z)),1)])),_:1})])),_:1})])),_:1})])),_:1},8,["maxCount","multiple"])])),_:1},512),[[g,i(k).length<i(z)]])])),_:1})}}}),Q=J(e({__name:"order_evaluate",setup(e){const a=V([]),m=V([]),f=V("2"),g=V(!1),b=V("");V(null),C((e=>{if(e.order_id)b.value=e.order_id,y(b.value);else{k({url:"/addon/shop/pages/order/list",param:{status:5},title:"缺少订单id"})}}));const y=e=>{g.value=!0,R(e).then((e=>{if(e.data.is_evaluate)return Q(b.value),!1;e.data.order_goods.forEach((e=>{1!=e.status||1==e.is_enable_refund||(a.value.push(e),m.value.push({order_id:e.order_id,order_goods_id:e.order_goods_id,goods_id:e.goods_id,content:"",images:[],scores:5}))})),g.value=!1})).catch((()=>{g.value=!1}))},D=()=>{f.value="1"===f.value?"2":"1"},J=()=>{if(m.value.some((e=>""==e.content)))return h({title:"请输入你的评价",icon:"none"}),!1;for(let e=0;e<m.value.length;e++){let a=m.value[e];a.content.length>200&&(a.content=a.content.substr(0,200))}m.value.forEach((e=>e.is_anonymous=f.value)),g.value=!0,q({evaluate_array:m.value}).then((e=>{g.value=!1,Q(b.value)})).catch((()=>{g.value=!1}))},Q=e=>{z({url:"/addon/shop/pages/evaluate/order_evaluate_view",param:{order_id:e},mode:"redirectTo"})};return(e,h)=>{const b=t(l("u-icon"),I),y=t(l("u--image"),P),V=w,C=j,k=t(l("u-rate"),B),z=E,R=F,q=t(l("u-tabbar"),M),Q=t(l("loading-page"),N);return r(),o(V,{class:"bg-[var(--page-bg-color)] min-h-screen",style:A(e.themeColor())},{default:s((()=>[c(V,{class:"px-[var(--sidebar-m)] py-[var(--top-m)]"},{default:s((()=>[(r(!0),u(n,null,d(a.value,((e,a)=>(r(),o(V,{key:a,class:"card-template mb-[var(--top-m)]"},{default:s((()=>[c(V,{class:"bg-[var(--temp-bg)] p-[20rpx] rounded-[var(--rounded-mid)] flex"},{default:s((()=>[c(y,{radius:"var(--goods-rounded-mid)",width:"150rpx",height:"150rpx",src:i(x)(e.goods_image_thumb_small?e.goods_image_thumb_small:""),model:"aspectFill"},{error:s((()=>[c(b,{name:"photo",color:"#999",size:"50"})])),_:2},1032,["src"]),c(V,{class:"flex-1 flex flex-wrap ml-[20rpx] my-[4rpx]"},{default:s((()=>[c(V,null,{default:s((()=>[c(V,{class:"text-[26rpx] leading-[40rpx] max-w-[450rpx] truncate"},{default:s((()=>[v(_(e.goods_name),1)])),_:2},1024),e.sku_name?(r(),o(V,{key:0,class:"max-w-[450rpx] mt-[14rpx] truncate text-[22rpx] text-[var(--text-color-light9)] leading-[28rpx]"},{default:s((()=>[v(_(e.sku_name),1)])),_:2},1024)):U("v-if",!0)])),_:2},1024),c(V,{class:"mt-auto w-full flex justify-between items-center"},{default:s((()=>[c(V,{class:"flex items-baseline price-font"},{default:s((()=>[c(C,{class:"text-[24rpx] font-500"},{default:s((()=>[v("￥")])),_:1}),c(C,{class:"text-[40rpx] font-500"},{default:s((()=>[v(_(parseFloat(e.price).toFixed(2).split(".")[0]),1)])),_:2},1024),c(C,{class:"text-[24rpx] font-500"},{default:s((()=>[v("."+_(parseFloat(e.price).toFixed(2).split(".")[1]),1)])),_:2},1024)])),_:2},1024),c(C,{class:"font-400 text-[28rpx] text-[#333]"},{default:s((()=>[v("x"+_(e.num),1)])),_:2},1024)])),_:2},1024)])),_:2},1024)])),_:2},1024),c(V,{class:"flex items-center mt-[30rpx]"},{default:s((()=>[c(k,{count:5,modelValue:m.value[a].scores,"onUpdate:modelValue":e=>m.value[a].scores=e,"active-color":"var(--primary-color)",size:"36rpx",gutter:"1"},null,8,["modelValue","onUpdate:modelValue"]),c(C,{class:"ml-[16rpx] text-[28rpx] pt-[2rpx] text-[var(--primary-color)]"},{default:s((()=>[v(_(1===m.value[a].scores?"差评":2===m.value[a].scores||3===m.value[a].scores?"中评":"好评"),1)])),_:2},1024)])),_:2},1024),c(z,{class:"!text-[26rpx] px-[2rpx] mt-[16rpx] w-[100%] !text-[#333] !leading-[1.5]",modelValue:m.value[a].content,"onUpdate:modelValue":e=>m.value[a].content=e,modelModifiers:{trim:!0},placeholder:"请在此处输入你的评价",placeholderClass:"text-[26rpx] text-[var(--text-color-light9)]",maxlength:"200"},null,8,["modelValue","onUpdate:modelValue"]),U(' <view class="text-right text-[24rpx] text-[var(--text-color-light6)]">{{ form[index].content.length >= 200 ? 200 : form[index].content.length }}/200</view> '),c(i(K),{class:"mt-[20rpx]",modelValue:m.value[a].images,"onUpdate:modelValue":e=>m.value[a].images=e,"max-count":9,multiple:!0},null,8,["modelValue","onUpdate:modelValue"])])),_:2},1024)))),128))])),_:1}),c(q,{fixed:!0,placeholder:!0,safeAreaInsetBottom:!0,zIndex:"9999"},{default:s((()=>[c(V,{class:"flex items-center pl-[30rpx] pr-[20rpx] box-border justify-between w-[100%]"},{default:s((()=>[c(V,{class:"flex items-center",onClick:D},{default:s((()=>[c(C,{class:p(["iconfont text-color text-[30rpx] mr-[12rpx] text-[var(--text-color-light9)]",{"iconxuanze1 text-[var(--primary-color)]":"1"===f.value,"nc-iconfont nc-icon-yuanquanV6xx":"1"!==f.value}])},null,8,["class"]),c(C,{class:p(["text-[28rpx] leading-[34rpx]",{"text-[var(--primary-color)]":"1"===f.value,"text-[var(--text-color-light6)]":"1"!==f.value}])},{default:s((()=>[v("匿名")])),_:1},8,["class"])])),_:1}),c(R,{class:"!w-[240rpx] !h-[70rpx] text-[26rpx] !m-0 flex-center rounded-full text-white primary-btn-bg remove-border font-500","hover-class":"none",onClick:J},{default:s((()=>[v("提交")])),_:1})])),_:1})])),_:1}),c(Q,{loading:g.value},null,8,["loading"])])),_:1},8,["style"])}}}),[["__scopeId","data-v-e362b96c"]]);export{Q as default};
