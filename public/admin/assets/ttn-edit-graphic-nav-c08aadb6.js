import{d as R,q as a,Q as I,A as P,r as B,aK as G,a$ as W,h as f,c as b,R as g,a0 as h,u as e,a as _,t as p,e as l,w as o,i as s,F as y,T as $,B as S,b as L,au as D,av as H,L as j,M as A,K,E as O,bz as q,bv as Q}from"./index-99f00cf3.js";/* empty css                        *//* empty css                 *//* empty css                  *//* empty css                  *//* empty css                        */import"./el-tooltip-4ed993c7.js";/* empty css                  */import{_ as J}from"./index.vue_vue_type_style_index_0_lang-572087a4.js";import{_ as X}from"./index.vue_vue_type_script_setup_true_lang-49ab6f2c.js";import Y from"./index-015c0c3e.js";/* empty css                */import"./el-form-item-4ed993c7.js";/* empty css                       *//* empty css                 */import{S as Z}from"./sortable.esm-be94e56d.js";import{u as ee}from"./diy-c8337ab9.js";import{r as le}from"./range-463f6550.js";import{_ as te}from"./_plugin-vue_export-helper-c27b6911.js";const oe={class:"content-wrap"},ae={class:"edit-attr-item-wrap"},ne={class:"mb-[10px]"},de={class:"edit-attr-item-wrap"},ie={class:"mb-[10px]"},pe={class:"text-sm text-gray-400 mb-[10px]"},se=["onClick"],me={key:0},re={key:1},ue={class:"style-wrap"},_e={class:"edit-attr-item-wrap"},ce={class:"mb-[10px]"},ge={class:"edit-attr-item-wrap"},he={class:"mb-[10px]"},fe=R({__name:"ttn-edit-graphic-nav",setup(Ce,{expose:N}){const t=ee();t.editComponent.ignore=[],t.editComponent.verify=m=>{const d={code:!0,message:""};return t.value[m].list.forEach(i=>{if((t.value[m].mode==="graphic"||t.value[m].mode==="img")&&i.imageUrl==="")return d.code=!1,d.message=a("imageUrlTip"),d;if((t.value[m].mode==="graphic"||t.value[m].mode==="text")&&i.title==="")return d.code=!1,d.message=a("graphicNavTitlePlaceholder"),d}),d},t.editComponent.list.forEach(m=>{m.id||(m.id=t.generateRandom())}),I(()=>t.editComponent.list,(m,d)=>{t.editComponent.list.forEach(i=>{const u=new Image;u.src=P(i.imageUrl),u.onload=async()=>{i.imgWidth=u.width,i.imgHeight=u.height}})},{deep:!0});const U=()=>{t.editComponent.list.push({id:t.generateRandom(),title:"",imageUrl:"",imgWidth:0,imgHeight:0,link:{name:""},label:{control:!1,text:"热门",textColor:"#FFFFFF",bgColorStart:"#F83287",bgColorEnd:"#FE3423"}})},v=B();G(()=>{W(()=>{const m=Z.create(v.value,{group:"item-wrap",animation:200,onEnd:d=>{const i=t.editComponent.list[d.oldIndex];t.editComponent.list.splice(d.oldIndex,1),t.editComponent.list.splice(d.newIndex,0,i),m.sort(le(t.editComponent.list.length).map(u=>u.toString()))}})})});const k=m=>{m=="1"?t.editComponent.showStyle="singleSlide":m=="2"&&(t.editComponent.showStyle="fixed")};return N({}),(m,d)=>{const i=D,u=H,r=j,C=A,x=Y,w=K,E=X,T=J,z=O,V=q,F=Q;return f(),b(y,null,[g(_("div",oe,[_("div",ae,[_("h3",ne,p(e(a)("graphicNavModeTitle")),1),l(C,{"label-width":"90px",class:"px-[10px]"},{default:o(()=>[l(r,{label:e(a)("layoutMode")},{default:o(()=>[l(u,{modelValue:e(t).editComponent.layout,"onUpdate:modelValue":d[0]||(d[0]=n=>e(t).editComponent.layout=n)},{default:o(()=>[l(i,{label:"horizontal"},{default:o(()=>[s(p(e(a)("layoutModeHorizontal")),1)]),_:1}),l(i,{label:"vertical"},{default:o(()=>[s(p(e(a)("layoutModeVertical")),1)]),_:1})]),_:1},8,["modelValue"])]),_:1},8,["label"]),l(r,{label:e(a)("graphicNavSelectMode")},{default:o(()=>[l(u,{modelValue:e(t).editComponent.mode,"onUpdate:modelValue":d[1]||(d[1]=n=>e(t).editComponent.mode=n)},{default:o(()=>[l(i,{label:"graphic"},{default:o(()=>[s(p(e(a)("graphicNavModeGraphic")),1)]),_:1}),l(i,{label:"img"},{default:o(()=>[s(p(e(a)("graphicNavModeImg")),1)]),_:1}),l(i,{label:"text"},{default:o(()=>[s(p(e(a)("graphicNavModeText")),1)]),_:1})]),_:1},8,["modelValue"])]),_:1},8,["label"]),g(_("view",null,[l(r,{label:e(a)("graphicNavPageCount")},{default:o(()=>[l(u,{modelValue:e(t).editComponent.pageCount,"onUpdate:modelValue":d[2]||(d[2]=n=>e(t).editComponent.pageCount=n),onChange:k},{default:o(()=>[l(i,{label:1},{default:o(()=>[s(p(e(a)("singleLine")),1)]),_:1}),l(i,{label:2},{default:o(()=>[s(p(e(a)("multiline")),1)]),_:1})]),_:1},8,["modelValue"])]),_:1},8,["label"]),l(r,{label:e(a)("graphicNavShowStyle")},{default:o(()=>[l(u,{modelValue:e(t).editComponent.showStyle,"onUpdate:modelValue":d[3]||(d[3]=n=>e(t).editComponent.showStyle=n),onChange:m.changeShowStyle},{default:o(()=>[l(i,{label:"fixed"},{default:o(()=>[s(p(e(a)("graphicNavStyleFixed")),1)]),_:1}),l(i,{label:"singleSlide"},{default:o(()=>[s(p(e(a)("graphicNavStyleSingleSlide")),1)]),_:1}),l(i,{label:"pageSlide"},{default:o(()=>[s(p(e(a)("graphicNavStylePageSlide")),1)]),_:1})]),_:1},8,["modelValue","onChange"])]),_:1},8,["label"]),l(r,{label:e(a)("graphicNavRowCount")},{default:o(()=>[l(u,{modelValue:e(t).editComponent.rowCount,"onUpdate:modelValue":d[4]||(d[4]=n=>e(t).editComponent.rowCount=n)},{default:o(()=>[l(i,{label:3},{default:o(()=>[s("3"+p(e(a)("piece")),1)]),_:1}),l(i,{label:4},{default:o(()=>[s("4"+p(e(a)("piece")),1)]),_:1}),l(i,{label:5},{default:o(()=>[s("5"+p(e(a)("piece")),1)]),_:1})]),_:1},8,["modelValue"])]),_:1},8,["label"])],512),[[h,e(t).editComponent.layout=="horizontal"]])]),_:1})]),_("div",de,[_("h3",ie,p(e(a)("graphicNavSetLabel")),1),l(C,{"label-width":"90px",class:"px-[10px]"},{default:o(()=>[_("p",pe,p(e(a)("graphicNavTips")),1),_("div",{ref_key:"imageBoxRef",ref:v},[(f(!0),b(y,null,$(e(t).editComponent.list,(n,M)=>(f(),b("div",{key:n.id,class:"item-wrap p-[10px] pb-0 relative border border-dashed border-gray-300 mb-[16px]"},[g(l(r,{label:e(a)("image")},{default:o(()=>[l(x,{modelValue:n.imageUrl,"onUpdate:modelValue":c=>n.imageUrl=c,limit:1},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1032,["label"]),[[h,e(t).editComponent.mode==="graphic"||e(t).editComponent.mode==="img"]]),g(l(r,{label:e(a)("graphicNavTitle")},{default:o(()=>[l(w,{modelValue:n.title,"onUpdate:modelValue":c=>n.title=c,modelModifiers:{trim:!0},placeholder:e(a)("graphicNavTitlePlaceholder"),clearable:"",maxlength:"20","show-word-limit":""},null,8,["modelValue","onUpdate:modelValue","placeholder"])]),_:2},1032,["label"]),[[h,e(t).editComponent.mode==="graphic"||e(t).editComponent.mode==="text"]]),g(_("div",{class:"del absolute cursor-pointer z-[2] top-[-8px] right-[-8px]",onClick:c=>e(t).editComponent.list.splice(M,1)},[l(E,{name:"element CircleCloseFilled",color:"#bbb",size:"20px"})],8,se),[[h,e(t).editComponent.list.length>1]]),l(r,{label:"点击类型"},{default:o(()=>[l(u,{modelValue:n.showType,"onUpdate:modelValue":c=>n.showType=c,class:"mb-[18px]"},{default:o(()=>[l(i,{label:"popup"},{default:o(()=>[s("弹出")]),_:1}),l(i,{label:"link"},{default:o(()=>[s("链接")]),_:1})]),_:2},1032,["modelValue","onUpdate:modelValue"])]),_:2},1024),n.showType=="link"?(f(),b("div",me,[l(r,{label:e(a)("link")},{default:o(()=>[l(T,{modelValue:n.link,"onUpdate:modelValue":c=>n.link=c},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1032,["label"])])):S("",!0),n.showType=="popup"?(f(),b("div",re,[l(r,{label:"标题"},{default:o(()=>[l(w,{modelValue:n.text,"onUpdate:modelValue":c=>n.text=c,placeholder:"标题",clearable:"","show-word-limit":""},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),l(r,{label:"弹出图片"},{default:o(()=>[l(x,{modelValue:n.imgPath,"onUpdate:modelValue":c=>n.imgPath=c,limit:1},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024)])):S("",!0)]))),128))],512),g(l(z,{class:"w-full",onClick:U},{default:o(()=>[s(p(e(a)("addGraphicNav")),1)]),_:1},512),[[h,e(t).editComponent.list.length<10]])]),_:1})])],512),[[h,e(t).editTab=="content"]]),g(_("div",ue,[g(_("div",_e,[_("h3",ce,p(e(a)("graphicNavImageSet")),1),l(C,{"label-width":"90px",class:"px-[10px]"},{default:o(()=>[l(r,{label:e(a)("graphicNavImageSize")},{default:o(()=>[l(V,{modelValue:e(t).editComponent.imageSize,"onUpdate:modelValue":d[5]||(d[5]=n=>e(t).editComponent.imageSize=n),"show-input":"",size:"small",class:"ml-[10px] graphic-nav-slider",min:20,max:60},null,8,["modelValue"])]),_:1},8,["label"]),l(r,{label:e(a)("graphicNavAroundRadius")},{default:o(()=>[l(V,{modelValue:e(t).editComponent.aroundRadius,"onUpdate:modelValue":d[6]||(d[6]=n=>e(t).editComponent.aroundRadius=n),"show-input":"",size:"small",class:"ml-[10px] graphic-nav-slider",max:50},null,8,["modelValue"])]),_:1},8,["label"])]),_:1})],512),[[h,["graphic","img"].includes(e(t).editComponent.mode)]]),g(_("div",ge,[_("h3",he,p(e(a)("textSet")),1),l(C,{"label-width":"90px",class:"px-[10px]"},{default:o(()=>[l(r,{label:e(a)("textFontSize")},{default:o(()=>[l(V,{modelValue:e(t).editComponent.font.size,"onUpdate:modelValue":d[7]||(d[7]=n=>e(t).editComponent.font.size=n),"show-input":"",size:"small",class:"ml-[10px] graphic-nav-slider",min:12,max:16},null,8,["modelValue"])]),_:1},8,["label"]),l(r,{label:e(a)("textFontWeight")},{default:o(()=>[l(u,{modelValue:e(t).editComponent.font.weight,"onUpdate:modelValue":d[8]||(d[8]=n=>e(t).editComponent.font.weight=n)},{default:o(()=>[l(i,{label:"normal"},{default:o(()=>[s(p(e(a)("fontWeightNormal")),1)]),_:1}),l(i,{label:"bold"},{default:o(()=>[s(p(e(a)("fontWeightBold")),1)]),_:1})]),_:1},8,["modelValue"])]),_:1},8,["label"]),l(r,{label:e(a)("textColor")},{default:o(()=>[l(F,{modelValue:e(t).editComponent.font.color,"onUpdate:modelValue":d[9]||(d[9]=n=>e(t).editComponent.font.color=n),"show-alpha":"",predefine:e(t).predefineColors},null,8,["modelValue","predefine"])]),_:1},8,["label"])]),_:1})],512),[[h,["graphic","text"].includes(e(t).editComponent.mode)]]),L(m.$slots,"style",{},void 0,!0)],512),[[h,e(t).editTab=="style"]])],64)}}});const be=te(fe,[["__scopeId","data-v-aa623518"]]),We=Object.freeze(Object.defineProperty({__proto__:null,default:be},Symbol.toStringTag,{value:"Module"}));export{We as _};
