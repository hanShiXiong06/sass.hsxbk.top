import{d as F,r as z,l as R,Q as S,n as D,h as a,c as r,a as i,v as c,e as l,i as f,B as _,w as m,s as $,t as O,u as T,q as A,H as g,U as y,K as H,L as K,M as L,p as Q,g as W}from"./index-f7a01263.js";/* empty css                     */import{_ as G}from"./index.vue_vue_type_style_index_0_lang-bc19dfb7.js";import J from"./index-e6c6f5a6.js";/* empty css                 */import{_ as X}from"./index.vue_vue_type_script_setup_true_lang-73e73d1c.js";import{_ as C}from"./upload-media.vue_vue_type_script_setup_true_lang-d824431f.js";import{_ as h}from"./select-wechat-media.vue_vue_type_script_setup_true_lang-f9277740.js";import{_ as Y}from"./news-card.vue_vue_type_script_setup_true_lang-bd5d4d07.js";import{_ as Z}from"./_plugin-vue_export-helper-c27b6911.js";/* empty css                  *//* empty css                   */import"./index.vue_vue_type_script_setup_true_lang-473c7dda.js";import"./index.vue_vue_type_style_index_0_lang-0595c85c.js";/* empty css                  */import"./attachment-893e498c.js";/* empty css                   *//* empty css                        *//* empty css               *//* empty css                  *//* empty css                  *//* empty css                     *//* empty css                  *//* empty css                      *//* empty css                    */import"./el-tooltip-4ed993c7.js";/* empty css                 *//* empty css               *//* empty css               *//* empty css                    *//* empty css                    */import"./el-dropdown-item-4ed993c7.js";import"./index.vue_vue_type_script_setup_true_lang-a36ce1b6.js";/* empty css                   */import"./sortable.esm-be94e56d.js";/* empty css                 */import"./wechat-2538ccca.js";const p=d=>(Q("data-v-e52132f0"),d=d(),W(),d),ee={class:"border border-br-light rounded"},te={class:"py-[10px] px-[30px] flex text-sm border-0 border-b border-br-light text-tx-regular"},le={class:"py-[20px] px-[30px] h-[350px]"},ie={key:0},se={key:1,class:"flex w-full h-full justify-center items-center image-media"},oe={key:0,class:"w-full h-full"},ae={key:1,class:"flex w-full h-full justify-center items-center image-media"},re={class:"flex flex-1 h-full border border-br-light cursor-pointer select-media"},ne={class:"flex items-center justify-center flex-col"},me=p(()=>i("div",{class:"leading-none text-xs mt-[10px] text-secondary"},"从素材库选择",-1)),pe={class:"flex flex-1 h-full ml-[20px] border border-br-light cursor-pointer"},de={class:"flex items-center justify-center flex-col"},ue=p(()=>i("div",{class:"leading-none text-xs mt-[10px] text-secondary"},"上传图片",-1)),ce={key:2,class:"flex w-full h-full justify-center items-center video-media"},fe={key:0,class:"w-full h-full"},_e={key:1,class:"flex w-full h-full justify-center items-center video-media"},ve={class:"flex flex-1 h-full border border-br-light cursor-pointer select-media"},xe={class:"flex items-center justify-center flex-col"},ge=p(()=>i("div",{class:"leading-none text-xs mt-[10px] text-secondary"},"从素材库选择",-1)),ye={class:"flex flex-1 h-full ml-[20px] border border-br-light cursor-pointer"},he={class:"flex items-center justify-center flex-col"},be=p(()=>i("div",{class:"leading-none text-xs mt-[10px] text-secondary"},"上传视频",-1)),we={key:3,class:"flex w-full h-full justify-center items-center image-media"},Ve={key:0,class:"w-full h-full"},ke={key:1,class:"flex w-full h-full justify-center items-center image-media"},je={class:"flex flex-1 h-full border border-br-light cursor-pointer select-media"},ze={class:"flex items-center justify-center flex-col"},Se=p(()=>i("div",{class:"leading-none text-xs mt-[10px] text-secondary"},"从素材库选择",-1)),$e={key:4},Ce=p(()=>i("div",{class:"form-tip"},"小程序需已经与公众号关联",-1)),Ie={class:"rounded cursor-pointer overflow-hidden relative border border-solid border-color image-wrap mr-[10px] w-[100px] h-[100px]"},Ue={class:"w-full h-full flex items-center justify-center flex-col content-wrap"},Pe={class:"leading-none text-xs mt-[10px] text-secondary"},Me=p(()=>i("div",{class:"form-tip"},"小程序卡片图片建议大小为520*416",-1)),qe=F({__name:"reply-form",props:{modelValue:{type:Object,default:()=>({})}},emits:["update:modelValue"],setup(d,{expose:I,emit:U}){const P=d,e=z({msgtype:"text",text:{content:""},image:{media_id:"",url:""},video:{media_id:"",url:""},miniprogrampage:{appid:"",title:"",pagepath:"",thumb_media_url:"",thumb_media_id:""},mpnewsarticle:null}),b=R({get(){return P.modelValue},set(s){U("update:modelValue",s)}});S(()=>b.value,(s,t)=>{(!t||!Object.keys(t).length)&&Object.keys(s).length&&(e.value=b.value)},{immediate:!0}),S(()=>e.value,()=>{b.value=e.value},{deep:!0});const u=s=>{e.value.msgtype=s},w=s=>{e.value.image.media_id=s.media_id,e.value.image.url=s.value},V=s=>{e.value.video.media_id=s.media_id,e.value.video.url=s.value},M=s=>{e.value.miniprogrampage.thumb_media_id=s.media_id,e.value.miniprogrampage.thumb_media_url=s.value},q=s=>{e.value.mpnewsarticle={article_id:s.media_id,value:s.value}},k=z(),B=D({appid:[{required:!0,message:"请填写小程序appid",trigger:"blur"}],title:[{required:!0,message:"请填写小程序卡片标题",trigger:"blur"}],pagepath:[{required:!0,message:"请填写小程序卡片跳转页面",trigger:"blur"}],thumb_media_url:[{required:!0,message:"请上传小程序卡片封面",trigger:"blur"}]});return I({verify:async()=>{let s=!0;switch(e.value.msgtype){case"text":g.empty(e.value.text.content)&&(y({message:"请输入回复内容",type:"warning"}),s=!1);break;case"image":g.empty(e.value.image.url)&&(y({message:"请上传回复图片",type:"warning"}),s=!1);break;case"video":g.empty(e.value.video.url)&&(y({message:"请上传回复视频",type:"warning"}),s=!1);break;case"miniprogrampage":await k.value.validate(async t=>{s=t});break;case"mpnewsarticle":g.empty(e.value.mpnewsarticle)&&(y({message:"请选择图文",type:"warning"}),s=!1);break}return s}}),(s,t)=>{const n=X,v=H,j=J,E=G,x=K,N=L;return a(),r("div",ee,[i("div",te,[i("div",{class:c(["pr-[25px] cursor-pointer flex items-center",{"text-primary":e.value.msgtype=="text"}]),onClick:t[0]||(t[0]=o=>u("text"))},[l(n,{name:"iconfont iconxingzhuang-wenzi",size:"18",class:"mr-[5px]"}),f(" 文本 ")],2),i("div",{class:c(["pr-[25px] cursor-pointer flex items-center",{"text-primary":e.value.msgtype=="image"}]),onClick:t[1]||(t[1]=o=>u("image"))},[l(n,{name:"iconfont icontupian",size:"18px",class:"mr-[5px]"}),f(" 图片 ")],2),i("div",{class:c(["pr-[25px] cursor-pointer flex items-center",{"text-primary":e.value.msgtype=="video"}]),onClick:t[2]||(t[2]=o=>u("video"))},[l(n,{name:"iconfont iconshipin1",size:"18",class:"mr-[5px]"}),f(" 视频 ")],2),i("div",{class:c(["pr-[25px] cursor-pointer flex items-center",{"text-primary":e.value.msgtype=="mpnewsarticle"}]),onClick:t[3]||(t[3]=o=>u("mpnewsarticle"))},[l(n,{name:"iconfont icontuwendaohang2",size:"13px",class:"mr-[5px]"}),f(" 图文 ")],2),i("div",{class:c(["pr-[25px] cursor-pointer flex items-center",{"text-primary":e.value.msgtype=="miniprogrampage"}]),onClick:t[4]||(t[4]=o=>u("miniprogrampage"))},[l(n,{name:"iconfont iconxiaochengxu",size:"14px",class:"mr-[5px]"}),f(" 小程序卡片 ")],2)]),i("div",le,[e.value.msgtype=="text"?(a(),r("div",ie,[l(v,{modelValue:e.value.text.content,"onUpdate:modelValue":t[5]||(t[5]=o=>e.value.text.content=o),rows:5,type:"textarea",placeholder:"",maxlength:"600","show-word-limit":!0,resize:"none","input-style":"box-shadow: none;height:300px"},null,8,["modelValue"])])):_("",!0),e.value.msgtype=="image"?(a(),r("div",se,[e.value.image.url?(a(),r("div",oe,[l(j,{limit:1,width:"150px",height:"150px",modelValue:e.value.image.url,"onUpdate:modelValue":t[6]||(t[6]=o=>e.value.image.url=o)},null,8,["modelValue"])])):(a(),r("div",ae,[i("div",re,[l(h,{type:"image",onSuccess:w},{default:m(()=>[i("div",ne,[l(n,{name:"element Plus",size:"20px",color:"var(--el-text-color-secondary)"}),me])]),_:1})]),i("div",pe,[l(C,{type:"image",class:"w-full h-full flex items-center justify-center",onSuccess:w},{default:m(()=>[i("div",de,[l(n,{name:"element Plus",size:"20px",color:"var(--el-text-color-secondary)"}),ue])]),_:1})])]))])):_("",!0),e.value.msgtype=="video"?(a(),r("div",ce,[e.value.video.url?(a(),r("div",fe,[l(E,{limit:1,width:"150px",height:"150px",modelValue:e.value.video.url,"onUpdate:modelValue":t[7]||(t[7]=o=>e.value.video.url=o)},null,8,["modelValue"])])):(a(),r("div",_e,[i("div",ve,[l(h,{type:"video",onSuccess:V},{default:m(()=>[i("div",xe,[l(n,{name:"element Plus",size:"20px",color:"var(--el-text-color-secondary)"}),ge])]),_:1})]),i("div",ye,[l(C,{type:"video",class:"w-full h-full flex items-center justify-center",onSuccess:V},{default:m(()=>[i("div",he,[l(n,{name:"element Plus",size:"20px",color:"var(--el-text-color-secondary)"}),be])]),_:1})])]))])):_("",!0),e.value.msgtype=="mpnewsarticle"?(a(),r("div",we,[e.value.mpnewsarticle?(a(),r("div",Ve,[l(Y,{modelValue:e.value.mpnewsarticle,"onUpdate:modelValue":t[8]||(t[8]=o=>e.value.mpnewsarticle=o)},null,8,["modelValue"])])):(a(),r("div",ke,[i("div",je,[l(h,{type:"news",onSuccess:q},{default:m(()=>[i("div",ze,[l(n,{name:"element Plus",size:"20px",color:"var(--el-text-color-secondary)"}),Se])]),_:1})])]))])):_("",!0),e.value.msgtype=="miniprogrampage"?(a(),r("div",$e,[l(N,{model:e.value.miniprogrampage,"label-width":"140px",class:"page-form",ref_key:"formRef",ref:k,rules:B},{default:m(()=>[l(x,{label:"小程序APPID",prop:"appid"},{default:m(()=>[l(v,{modelValue:e.value.miniprogrampage.appid,"onUpdate:modelValue":t[9]||(t[9]=o=>e.value.miniprogrampage.appid=o),class:"input-width"},null,8,["modelValue"]),Ce]),_:1}),l(x,{label:"小程序卡片标题",prop:"title"},{default:m(()=>[l(v,{modelValue:e.value.miniprogrampage.title,"onUpdate:modelValue":t[10]||(t[10]=o=>e.value.miniprogrampage.title=o),class:"input-width"},null,8,["modelValue"])]),_:1}),l(x,{label:"小程序的页面路径",prop:"pagepath"},{default:m(()=>[l(v,{modelValue:e.value.miniprogrampage.pagepath,"onUpdate:modelValue":t[11]||(t[11]=o=>e.value.miniprogrampage.pagepath=o),class:"input-width"},null,8,["modelValue"])]),_:1}),l(x,{label:"小程序卡片图片",prop:"thumb_media_url"},{default:m(()=>[e.value.miniprogrampage.thumb_media_url?(a(),$(j,{key:0,limit:1,width:"100px",height:"100px",modelValue:e.value.miniprogrampage.thumb_media_url,"onUpdate:modelValue":t[12]||(t[12]=o=>e.value.miniprogrampage.thumb_media_url=o)},null,8,["modelValue"])):(a(),$(h,{key:1,type:"image",onSuccess:M},{default:m(()=>[i("div",Ie,[i("div",Ue,[l(n,{name:"element Plus",size:"20px",color:"var(--el-text-color-secondary)"}),i("div",Pe,O(T(A)("upload.root")),1)])])]),_:1})),Me]),_:1})]),_:1},8,["model","rules"])])):_("",!0)])])}}});const yt=Z(qe,[["__scopeId","data-v-e52132f0"]]);export{yt as default};
