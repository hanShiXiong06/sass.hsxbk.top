import{d as e,j as a,o as l,c as r,w as t,U as s,ad as u,u as o,V as i,b as d,y as n,z as m,f as p,t as c,au as f,g as x,h as _,i as g,W as v,E as b,A as h,b7 as y,bl as V,D as w,ax as C,r as S,p as j,N as k,n as I,a as E,F,Q as q,R as A,bX as P,S as R,_ as U}from"./index-71c7df08.js";import{_ as z}from"./loading-page.vue_vue_type_script_setup_true_lang.c7dc2256.js";import{e as N,h as D}from"./o2o.b73b40c6.js";import{f as W}from"./cloneDeep.77735539.js";const B=e({__name:"upload-img",props:{modelValue:{type:String||Array},maxCount:{type:Number,default:9},multiple:{type:Boolean,default:!1}},emits:["update:modelValue"],setup(e,{emit:S}){const j=e,k=a({get:()=>j.modelValue,set(e){S("update:modelValue",e)}}),I=a((()=>j.maxCount)),E=e=>{j.multiple?e.file.forEach((e=>{F({file:e})})):F(e)},F=e=>{var a;if((null==(a=k.value)?void 0:a.length)>=I.value)return c({title:`最多允许上传${I.value}张图片`,icon:"none"}),!1;f({filePath:e.file.url,name:"file"}).then((e=>{var a;(null==(a=k.value)?void 0:a.length)<I.value&&k.value.push(e.data.url)})).catch((()=>{}))};return(e,a)=>{const c=x(_("u-icon"),y),f=x(_("u--image"),V),S=w,F=g,q=x(_("u-upload"),C);return l(),r(F,{class:"flex flex-wrap"},{default:t((()=>[(l(!0),s(i,null,u(o(k),((e,a)=>(l(),r(F,{class:v(["mb-[18rpx] relative",(a+1)%3==0?"":"mr-[18rpx]"])},{default:t((()=>[d(f,{class:"rounded-[10rpx] overflow-hidden",width:"168rpx",height:"168rpx",src:o(b)(e||""),model:"aspectFill"},{error:t((()=>[d(c,{name:"photo",color:"#999",size:"50"})])),_:2},1032,["src"]),d(S,{class:"nc-iconfont nc-icon-guanbiV6xx text-[32rpx] absolute top-0 right-[0rpx] text-[#fff] bg-[#888] rounded-bl-[16rpx]",onClick:h((e=>(e=>{k.value.splice(e,1)})(a)),["stop"])},null,8,["onClick"])])),_:2},1032,["class"])))),256)),o(k).length<o(I)?(l(),r(F,{key:0,class:"w-[168rpx] h-[168rpx]"},{default:t((()=>[d(q,{onAfterRead:E,maxCount:o(I),multiple:j.multiple},{default:t((()=>[d(F,{class:"flex items-center justify-center w-[168rpx] h-[168rpx] border-[2rpx] border-dashed border-[#ebebec] text-center text-[#888]"},{default:t((()=>[d(F,null,{default:t((()=>[d(F,{class:"nc-iconfont nc-icon-xiangjiV6xx text-[50rpx]"}),d(F,{class:"text-[24rpx] mt-[10rpx]"},{default:t((()=>[n(m(o(k).length)+"/"+m(o(I)),1)])),_:1})])),_:1})])),_:1})])),_:1},8,["maxCount","multiple"])])),_:1})):p("v-if",!0)])),_:1})}}}),L=U(e({__name:"add",setup(e){const a=S(!1),s=S({order_id:"",order_item_id:"",item_name:"",price:0,images:[],item_images:""});j((e=>{Object.keys(s.value).forEach((a=>{if(null!=e[a]&&(s.value[a]=e[a]),"images"==a){s.value[a]=[];let l=e.item_images?e.item_images:null;s.value[a]=l?e.item_images.split(","):[]}}))}));const u=S(null),i=k({item_name:[{required:!0,message:"请输入服务项目",trigger:"blur"}],price:[{required:!0,validator:(e,a,l)=>{""===a||null==a?l(new Error("请输入价格")):Number(a)<=0?l(new Error("价格需大于0")):l()},trigger:"blur"}]});return(e,p)=>{const c=g,f=x(_("u-input"),q),v=x(_("u-form-item"),A),b=w,h=x(_("u-button"),P),y=x(_("u-form"),R),V=x(_("loading-page"),z);return l(),r(c,{class:"bg-[#F5F6FA] min-h-screen overflow-hidden",style:I(e.themeColor())},{default:t((()=>[d(c,{class:"mx-[30rpx] my-[20rpx] bg-[#fff] rounded-[16rpx]"},{default:t((()=>[d(c,{class:"text-[34rpx] p-[36rpx] border"},{default:t((()=>[n(m(s.value.order_item_id?o(F)("editServiceItem"):o(F)("addServiceItem")),1)])),_:1}),d(y,{labelPosition:"left",model:s.value,errorType:"toast",rules:i,ref_key:"serviceRef",ref:u,labelWidth:100,class:"px-[30rpx]",labelStyle:{paddingLeft:"30rpx",fontSize:"28rpx"}},{default:t((()=>[d(v,{label:o(F)("serviceItem"),prop:"item_name",required:""},{default:t((()=>[d(f,{modelValue:s.value.item_name,"onUpdate:modelValue":p[0]||(p[0]=e=>s.value.item_name=e),modelModifiers:{trim:!0},border:"surround",clearable:"",placeholder:o(F)("serviceItemPlaceholder"),maxlength:"50"},null,8,["modelValue","placeholder"])])),_:1},8,["label"]),d(v,{label:o(F)("price"),prop:"price",required:""},{default:t((()=>[d(f,{modelValue:s.value.price,"onUpdate:modelValue":p[1]||(p[1]=e=>s.value.price=e),border:"surround",clearable:"",placeholder:o(F)("pricePlaceholder"),type:"digit",maxlength:"6"},{suffix:t((()=>[d(b,null,{default:t((()=>[n(m(o(F)("yuan")),1)])),_:1})])),_:1},8,["modelValue","placeholder"])])),_:1},8,["label"]),d(v,{label:o(F)("serviceImg"),prop:"images",class:"form-images"},{default:t((()=>[d(c,{class:"px-[30rpx]"},{default:t((()=>[d(B,{class:"mt-[20rpx]",modelValue:s.value.images,"onUpdate:modelValue":p[2]||(p[2]=e=>s.value.images=e),"max-count":6,multiple:!1},null,8,["modelValue"])])),_:1})])),_:1},8,["label"]),d(v,{class:"mt-[30rpx]"},{default:t((()=>[d(h,{text:o(F)("save"),onClick:p[3]||(p[3]=e=>(async()=>{u.value.validate().then((()=>{if(a.value)return;a.value=!0;const e=W(s.value);e.item_images=e.images.toString(),(s.value.order_item_id?N:D)(e).then((e=>{a.value=!1,E({url:"/addon/o2o/pages/master/task/detail",param:{order_id:s.value.order_id}})})).catch((()=>{a.value=!1}))}))})()),customStyle:{borderRadius:"38rpx",color:"#fff",margin:"30rpx 0",backgroundColor:"var(--primary-color)"}},null,8,["text","customStyle"])])),_:1})])),_:1},8,["model","rules"])])),_:1}),d(V,{loading:a.value},null,8,["loading"])])),_:1},8,["style"])}}}),[["__scopeId","data-v-9ffc4bf4"]]);export{L as default};
