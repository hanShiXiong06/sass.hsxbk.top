import{d as T,q as n,Q as B,A,r as R,aJ as $,a$ as F,h,c as f,R as c,a0 as g,u as o,a as r,t as b,e as l,w as m,i as x,F as v,T as M,b as N,K as z,L as D,E as P,M as W}from"./index-37fee5a0.js";/* empty css                *//* empty css                  */import{_ as j}from"./index.vue_vue_type_style_index_0_lang-c2556e37.js";import{_ as L}from"./index.vue_vue_type_script_setup_true_lang-165de32d.js";import O from"./index-75241224.js";import"./el-form-item-4ed993c7.js";/* empty css                 */import{S as q}from"./sortable.esm-be94e56d.js";import{u as J}from"./diy-5698262f.js";import{r as K}from"./range-5af46cc2.js";import{_ as Q}from"./_plugin-vue_export-helper-c27b6911.js";const G={class:"content-wrap"},X={class:"edit-attr-item-wrap"},Y={class:"mb-[10px]"},Z={class:"text-sm text-gray-400 mb-[10px]"},ee=["onClick"],te={class:"style-wrap"},oe=T({__name:"edit-image-ads",setup(ie,{expose:w}){const e=J();e.editComponent.ignore=[],e.editComponent.verify=a=>{const t={code:!0,message:""};return e.value[a].imageHeight==0?(t.code=!1,t.message=n("imageHeightPlaceholder"),t):/^\d+.?\d{0,2}$/.test(e.value[a].imageHeight)?(e.value[a].list.forEach(s=>{if(s.imageUrl==="")return t.code=!1,t.message=n("imageUrlTip"),t}),t):(t.code=!1,t.message=n("imageHeightRegNum"),t)},e.editComponent.list.forEach(a=>{a.id||(a.id=e.generateRandom())}),B(()=>e.editComponent.list,(a,t)=>{_()},{deep:!0});const y=()=>{e.editComponent.list.push({id:e.generateRandom(),imageUrl:"",imgWidth:0,imgHeight:0,link:{name:""}})},H=a=>{_(!0)},_=(a=!1)=>{e.editComponent.list.forEach((t,s)=>{const i=new Image;i.src=A(t.imageUrl),i.onload=async()=>{if(t.imgWidth=i.width,t.imgHeight=i.height,a&&s==0){const u=t.imgHeight/t.imgWidth;t.width=375-e.editComponent.margin.both*2,t.height=t.width*u,e.editComponent.imageHeight=parseInt(t.height)}}})},V=()=>{e.editComponent.imageHeight=e.editComponent.imageHeight?parseInt(e.editComponent.imageHeight):0},C=R();return $(()=>{F(()=>{const a=q.create(C.value,{group:"item-wrap",animation:200,onEnd:t=>{const s=e.editComponent.list[t.oldIndex];e.editComponent.list.splice(t.oldIndex,1),e.editComponent.list.splice(t.newIndex,0,s),a.sort(K(e.editComponent.list.length).map(i=>i.toString())),_(!0)}})})}),w({}),(a,t)=>{const s=z,i=D,u=O,I=L,k=j,S=P,U=W;return h(),f(v,null,[c(r("div",G,[r("div",X,[r("h3",Y,b(o(n)("imageSet")),1),l(U,{"label-width":"80px",class:"px-[10px]"},{default:m(()=>[l(i,{label:o(n)("imageHeight"),class:"display-block"},{default:m(()=>[l(s,{modelValue:o(e).editComponent.imageHeight,"onUpdate:modelValue":t[0]||(t[0]=d=>o(e).editComponent.imageHeight=d),modelModifiers:{trim:!0},placeholder:o(n)("imageHeightPlaceholder"),clearable:"",maxlength:"10",onBlur:V},{append:m(()=>[x("px")]),_:1},8,["modelValue","placeholder"]),r("div",Z,b(o(n)("imageAdsTips")),1)]),_:1},8,["label"]),r("div",{ref_key:"imageBoxRef",ref:C},[(h(!0),f(v,null,M(o(e).editComponent.list,(d,E)=>(h(),f("div",{key:d.id,class:"item-wrap p-[10px] pb-0 relative border border-dashed border-gray-300 mb-[16px]"},[l(i,{label:o(n)("image")},{default:m(()=>[l(u,{modelValue:d.imageUrl,"onUpdate:modelValue":p=>d.imageUrl=p,limit:1,onChange:H},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1032,["label"]),c(r("div",{class:"del absolute cursor-pointer z-[2] top-[-8px] right-[-8px]",onClick:p=>o(e).editComponent.list.splice(E,1)},[l(I,{name:"element CircleCloseFilled",color:"#bbb",size:"20px"})],8,ee),[[g,o(e).editComponent.list.length>1]]),l(i,{label:o(n)("link")},{default:m(()=>[l(k,{modelValue:d.link,"onUpdate:modelValue":p=>d.link=p},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1032,["label"])]))),128))],512),c(l(S,{class:"w-full",onClick:y},{default:m(()=>[x(b(o(n)("addImageAd")),1)]),_:1},512),[[g,o(e).editComponent.list.length<10]])]),_:1})])],512),[[g,o(e).editTab=="content"]]),c(r("div",te,[N(a.$slots,"style",{},void 0,!0)],512),[[g,o(e).editTab=="style"]])],64)}}});const ae=Q(oe,[["__scopeId","data-v-58bccb2b"]]),fe=Object.freeze(Object.defineProperty({__proto__:null,default:ae},Symbol.toStringTag,{value:"Module"}));export{fe as _};