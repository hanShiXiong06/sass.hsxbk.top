import{d as N,l as V,n as z,Q as E,h as o,c as s,$ as h,u,F as g,a as i,A as y,e as l,s as A,w as x,b as $,T as D,B as L,ao as Q,X as R}from"./index-37fee5a0.js";/* empty css                  *//* empty css                   */import{_ as T}from"./index.vue_vue_type_script_setup_true_lang-1f515813.js";import{_ as U}from"./index.vue_vue_type_style_index_0_lang-9e528ade.js";import{_ as X}from"./index.vue_vue_type_script_setup_true_lang-165de32d.js";const q={class:"flex flex-wrap"},G={class:"w-full h-full relative flex items-center overflow-hidden rounded"},H=["src"],I={class:"absolute z-[1] flex items-center justify-center w-full h-full inset-0 bg-black bg-opacity-60 operation"},J={class:"w-full h-full flex items-center justify-center flex-col"},K={class:"w-full h-full relative flex items-center overflow-hidden rounded"},M=["src"],O={class:"absolute z-[1] flex items-center justify-center w-full h-full inset-0 bg-black bg-opacity-60 operation"},P={class:"w-full h-full flex items-center justify-center flex-col"},oe=N({__name:"index",props:{modelValue:{type:String,default:""},width:{type:String,default:"200px"},height:{type:String,default:"100px"},limit:{type:Number,default:1}},emits:["update:modelValue"],setup(r,{emit:S}){const c=r,f=V({get(){return c.modelValue},set(e){S("update:modelValue",e)}}),t=z({data:[]}),p=()=>{f.value=Q(t.data).toString()};E(()=>f.value,()=>{t.data=[...f.value.split(",").filter(e=>e)],p()},{immediate:!0});const v=V(()=>({width:c.width,height:c.height})),w=e=>{c.limit==1?(t.data.splice(0,1),e&&t.data.push(e.url)):e.forEach(a=>{t.data.length<c.limit&&t.data.push(a.url)}),p()},b=(e=0)=>{t.data.splice(e,1),p()},d=z({visible:!1,src:""}),C=(e=0)=>{d.visible=!0,d.src=y(t.data[e])};return(e,a)=>{const n=X,k=U,B=T,j=R;return o(),s("div",q,[r.limit==1?(o(),s("div",{key:0,class:"rounded cursor-pointer relative bg-page video-wrap mr-[10px]",style:h(u(v))},[t.data.length?(o(),s(g,{key:0},[i("div",G,[i("video",{src:u(y)(t.data[0]),class:"w-full"},null,8,H),i("div",I,[l(n,{name:"iconfont icon24gf-playCircle",color:"#fff",size:"25px",onClick:a[0]||(a[0]=m=>C())})])]),l(n,{name:"element CircleCloseFilled",color:"#bbb",size:"18px",onClick:b,class:"absolute z-[2] top-[-9px] right-[-9px]"})],64)):(o(),A(k,{key:1,limit:r.limit,type:"video",onConfirm:w},{default:x(()=>[i("div",J,[$(e.$slots,"icon",{},()=>[l(n,{name:"iconfont icon24gf-playCircle",size:"25px",color:"var(--el-text-color-secondary)"})])])]),_:3},8,["limit"]))],4)):(o(),s(g,{key:1},[(o(!0),s(g,null,D(t.data,(m,_)=>(o(),s("div",{class:"rounded cursor-pointer relative bg-page video-wrap mr-[10px]",style:h(u(v)),key:_},[i("div",K,[i("video",{src:u(y)(m),class:"w-full"},null,8,M),i("div",O,[l(n,{name:"iconfont icon24gf-playCircle",color:"#fff",size:"25px",onClick:F=>C(_)},null,8,["onClick"])])]),l(n,{name:"element CircleCloseFilled",color:"#bbb",size:"18px",onClick:F=>b(_),class:"absolute z-[2] top-[-9px] right-[-9px]"},null,8,["onClick"])],4))),128)),t.data.length<r.limit?(o(),s("div",{key:0,class:"rounded cursor-pointer relative bg-page video-wrap mr-[10px]",style:h(u(v))},[l(k,{limit:r.limit,type:"video",onConfirm:w},{default:x(()=>[i("div",P,[$(e.$slots,"icon",{},()=>[l(n,{name:"iconfont icon24gf-playCircle",size:"25px",color:"var(--el-text-color-secondary)"})])])]),_:3},8,["limit"])],4)):L("",!0)],64)),l(j,{modelValue:d.visible,"onUpdate:modelValue":a[1]||(a[1]=m=>d.visible=m),width:"50%","align-center":"","destroy-on-close":!0,"custom-class":"video-preview"},{default:x(()=>[l(B,{src:d.src,width:"100%"},null,8,["src"])]),_:1},8,["modelValue"])])}}});export{oe as _};
