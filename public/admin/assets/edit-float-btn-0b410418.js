import{d as T,q as i,r as g,n as I,aJ as L,a$ as $,h as d,c as p,R as b,a0 as x,u as t,a as s,t as f,e as a,w as m,F as C,T as w,v as k,B as F,i as P,b as j,L as A,bz as D,M,E as O}from"./index-5a756a51.js";/* empty css                  */import{_ as q}from"./index.vue_vue_type_style_index_0_lang-f8854335.js";import{_ as J}from"./index.vue_vue_type_script_setup_true_lang-75313763.js";import G from"./index-92c2e799.js";/* empty css                *//* empty css                  *//* empty css                 *//* empty css                        */import"./el-tooltip-4ed993c7.js";/* empty css                  */import"./el-form-item-4ed993c7.js";import{S as H}from"./sortable.esm-be94e56d.js";import{u as K}from"./diy-a7b9cfa6.js";import{r as Q}from"./range-0faee7ba.js";const W={class:"content-wrap float-btn"},X={class:"edit-attr-item-wrap"},Y={class:"mb-[10px]"},Z={class:"ml-[10px] flex items-center"},ee=["onClick"],te={class:"edit-attr-item-wrap"},oe={class:"mb-[10px]"},le={class:"text-[12px] text-[#999] mb-[15px] mt-[5px]"},ae=["onClick"],ne={class:"style-wrap"},se=T({__name:"edit-float-btn",setup(ie,{expose:B}){const e=K();e.editComponent.ignore=["pageBgColor","marginTop","marginBottom","marginBoth"],e.editComponent.verify=n=>{const o={code:!0,message:""};return e.value[n].list.forEach(r=>{if(r.imageUrl==="")return o.code=!1,o.message=i("imageUrlTip"),o}),o},g(!1),I({title:e.editComponent.styleName,value:e.editComponent.style});const h=g([{name:"左上",src:"iconzuoshangpc",className:"upperLeft"},{name:"右上",src:"iconyoushangpc",className:"upperRight"},{name:"左下",src:"iconzuoxiapc",className:"lowerLeft"},{name:"右下",src:"iconyouxiapc",className:"lowerRight"}]),v=g({});h.value.forEach(n=>{n.className==e.editComponent.bottomPosition&&(v.value=n)});const S=n=>{v.value=n,e.editComponent.bottomPosition=n.className},z=()=>{e.editComponent.list.push({id:e.generateRandom(),imageUrl:"",link:{name:""}})},y=g();return e.editComponent.list.forEach(n=>{n.id||(n.id=e.generateRandom())}),L(()=>{$(()=>{const n=H.create(y.value,{group:"item-wrap",animation:200,onEnd:o=>{const r=e.editComponent.list[o.oldIndex];e.editComponent.list.splice(o.oldIndex,1),e.editComponent.list.splice(o.newIndex,0,r),n.sort(Q(e.editComponent.list.length).map(c=>c.toString()))}})})}),B({}),(n,o)=>{const r=A,c=D,V=M,N=G,U=J,E=q,R=O;return d(),p(C,null,[b(s("div",W,[s("div",X,[s("h3",Y,f(t(i)("floatBtnBtton")),1),a(V,{"label-width":"80px",class:"px-[10px]"},{default:m(()=>[a(r,{label:t(i)("floatBtnBtton")},{default:m(()=>[s("span",null,f(v.value.name),1),s("ul",Z,[(d(!0),p(C,null,w(h.value,(l,u)=>(d(),p(C,{key:u},[t(e).editComponent.style==="style-1"||t(e).editComponent.style==="style-2"&&u>1?(d(),p("li",{key:0,class:k(["w-[50px] h-[32px] flex items-center justify-center border-solid  border-[1px] border-[#eee] cursor-pointer",{"border-r-transparent":h.value.length!=u+1},l.className==t(e).editComponent.bottomPosition?"!border-[var(--el-color-primary)]":""]),onClick:_=>S(l)},[s("span",{class:k(["iconfont !text-[20px]",l.src])},null,2)],10,ee)):F("",!0)],64))),128))])]),_:1},8,["label"]),a(r,{label:t(i)("floatBtnOffset")},{default:m(()=>[a(c,{modelValue:t(e).editComponent.offset,"onUpdate:modelValue":o[0]||(o[0]=l=>t(e).editComponent.offset=l),"show-input":"",size:"small",class:"ml-[10px] horz-blank-slider",max:100},null,8,["modelValue"])]),_:1},8,["label"])]),_:1})]),s("div",te,[s("h3",oe,f(t(i)("floatBtnImageSet")),1),a(V,{"label-width":"80px",class:"px-[10px]"},{default:m(()=>[a(r,{label:t(i)("floatBtnImageSize")},{default:m(()=>[a(c,{modelValue:t(e).editComponent.imageSize,"onUpdate:modelValue":o[1]||(o[1]=l=>t(e).editComponent.imageSize=l),"show-input":"",size:"small",class:"ml-[10px] horz-blank-slider",min:30,max:100},null,8,["modelValue"])]),_:1},8,["label"]),a(r,{label:t(i)("floatBtnAroundRadius")},{default:m(()=>[a(c,{modelValue:t(e).editComponent.aroundRadius,"onUpdate:modelValue":o[2]||(o[2]=l=>t(e).editComponent.aroundRadius=l),"show-input":"",size:"small",class:"ml-[10px] graphic-nav-slider",max:50},null,8,["modelValue"])]),_:1},8,["label"]),s("div",le,f(t(i)("floatBtnImageSuggest")),1),s("div",{ref_key:"imageBoxRef",ref:y},[(d(!0),p(C,null,w(t(e).editComponent.list,(l,u)=>(d(),p("div",{key:l.id,class:"item-wrap p-[10px] pb-0 relative border border-dashed border-gray-300 mb-[16px]"},[a(r,{label:t(i)("image")},{default:m(()=>[a(N,{modelValue:l.imageUrl,"onUpdate:modelValue":_=>l.imageUrl=_,limit:1},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1032,["label"]),b(s("div",{class:"del absolute cursor-pointer z-[2] top-[-8px] right-[-8px]",onClick:_=>t(e).editComponent.list.splice(u,1)},[a(U,{name:"element CircleCloseFilled",color:"#bbb",size:"20px"})],8,ae),[[x,t(e).editComponent.list.length>1]]),a(r,{label:t(i)("link")},{default:m(()=>[a(E,{modelValue:l.link,"onUpdate:modelValue":_=>l.link=_},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1032,["label"])]))),128))],512)]),_:1}),b(a(R,{class:"w-full",onClick:z},{default:m(()=>[P(f(t(i)("addImageAd")),1)]),_:1},512),[[x,t(e).editComponent.list.length<3]])])],512),[[x,t(e).editTab=="content"]]),b(s("div",ne,[j(n.$slots,"style")],512),[[x,t(e).editTab=="style"]])],64)}}}),Ve=Object.freeze(Object.defineProperty({__proto__:null,default:se},Symbol.toStringTag,{value:"Module"}));export{Ve as _};
