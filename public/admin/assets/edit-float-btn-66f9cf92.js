import{d as I,q as i,r as C,aJ as T,a$ as j,h as c,c as u,R as b,a0 as g,u as t,a as s,t as _,e as a,w as m,F as v,T as k,v as y,i as L,b as $,L as F,bz as P,M as A,E as D}from"./index-f7a01263.js";/* empty css                  */import{_ as M}from"./index.vue_vue_type_style_index_0_lang-27cf19ee.js";import{_ as O}from"./index.vue_vue_type_script_setup_true_lang-73e73d1c.js";import q from"./index-e6c6f5a6.js";/* empty css                     *//* empty css                  *//* empty css                 *//* empty css                        */import"./el-tooltip-4ed993c7.js";/* empty css                  */import{S as J}from"./sortable.esm-be94e56d.js";import{u as G}from"./diy-b7806205.js";import{r as H}from"./range-b6a9fbf2.js";const K={class:"content-wrap float-btn"},Q={class:"edit-attr-item-wrap"},W={class:"mb-[10px]"},X={class:"ml-[10px] flex items-center"},Y=["onClick"],Z={class:"edit-attr-item-wrap"},ee={class:"mb-[10px]"},te={class:"text-[12px] text-[#999] mb-[15px] mt-[5px]"},oe=["onClick"],le={class:"style-wrap"},ae=I({__name:"edit-float-btn",setup(ne,{expose:S}){const e=G();e.editComponent.ignore=[],e.editComponent.verify=n=>{const o={code:!0,message:""};return e.value[n].list.forEach(r=>{if(r.imageUrl==="")return o.code=!1,o.message=i("imageUrlTip"),o}),o};const x=C([{name:"左上",src:"iconzuoshangjiao",className:"upperLeft"},{name:"右上",src:"iconyoushangjiao",className:"upperRight"},{name:"左下",src:"iconzuoxiajiao",className:"lowerLeft"},{name:"右下",src:"iconyouxiajiao",className:"lowerRight"}]);let h=C({});x.value.forEach(n=>{n.className==e.editComponent.bottomPosition&&(h.value=n)});const z=n=>{h.value=n,e.editComponent.bottomPosition=n.className},B=()=>{e.editComponent.list.push({id:e.generateRandom(),imageUrl:"",link:{name:""}})},w=C();return e.editComponent.list.forEach(n=>{n.id||(n.id=e.generateRandom())}),T(()=>{j(()=>{const n=J.create(w.value,{group:"item-wrap",animation:200,onEnd:o=>{const r=e.editComponent.list[o.oldIndex];e.editComponent.list.splice(o.oldIndex,1),e.editComponent.list.splice(o.newIndex,0,r),n.sort(H(e.editComponent.list.length).map(d=>d.toString()))}})})}),S({}),(n,o)=>{const r=F,d=P,V=A,U=q,E=O,N=M,R=D;return c(),u(v,null,[b(s("div",K,[s("div",Q,[s("h3",W,_(t(i)("floatBtnBtton")),1),a(V,{"label-width":"80px",class:"px-[10px]"},{default:m(()=>[a(r,{label:t(i)("floatBtnBtton")},{default:m(()=>[s("span",null,_(t(h).name),1),s("ul",X,[(c(!0),u(v,null,k(x.value,(l,f)=>(c(),u("li",{key:f,class:y(["w-[50px] h-[32px] flex items-center justify-center border-solid  border-[1px] border-[#eee] cursor-pointer",{"border-r-transparent":x.value.length!=f+1},l.className==t(e).editComponent.bottomPosition?"!border-[var(--el-color-primary)]":""]),onClick:p=>z(l)},[s("span",{class:y(["iconfont",l.src])},null,2)],10,Y))),128))])]),_:1},8,["label"]),a(r,{label:t(i)("floatBtnOffset")},{default:m(()=>[a(d,{modelValue:t(e).editComponent.offset,"onUpdate:modelValue":o[0]||(o[0]=l=>t(e).editComponent.offset=l),"show-input":"",size:"small",class:"ml-[10px] horz-blank-slider",max:100},null,8,["modelValue"])]),_:1},8,["label"])]),_:1})]),s("div",Z,[s("h3",ee,_(t(i)("floatBtnImageSet")),1),a(V,{"label-width":"80px",class:"px-[10px]"},{default:m(()=>[a(r,{label:t(i)("floatBtnImageSize")},{default:m(()=>[a(d,{modelValue:t(e).editComponent.imageSize,"onUpdate:modelValue":o[1]||(o[1]=l=>t(e).editComponent.imageSize=l),"show-input":"",size:"small",class:"ml-[10px] horz-blank-slider",min:40,max:100},null,8,["modelValue"])]),_:1},8,["label"]),a(r,{label:t(i)("floatBtnAroundRadius")},{default:m(()=>[a(d,{modelValue:t(e).editComponent.aroundRadius,"onUpdate:modelValue":o[2]||(o[2]=l=>t(e).editComponent.aroundRadius=l),"show-input":"",size:"small",class:"ml-[10px] graphic-nav-slider",max:50},null,8,["modelValue"])]),_:1},8,["label"]),s("div",te,_(t(i)("floatBtnImageSuggest")),1),s("div",{ref_key:"imageBoxRef",ref:w},[(c(!0),u(v,null,k(t(e).editComponent.list,(l,f)=>(c(),u("div",{key:l.id,class:"item-wrap p-[10px] pb-0 relative border border-dashed border-gray-300 mb-[16px]"},[a(r,{label:t(i)("image")},{default:m(()=>[a(U,{modelValue:l.imageUrl,"onUpdate:modelValue":p=>l.imageUrl=p,limit:1},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1032,["label"]),b(s("div",{class:"del absolute cursor-pointer z-[2] top-[-8px] right-[-8px]",onClick:p=>t(e).editComponent.list.splice(f,1)},[a(E,{name:"element CircleCloseFilled",color:"#bbb",size:"20px"})],8,oe),[[g,t(e).editComponent.list.length>1]]),a(r,{label:t(i)("link")},{default:m(()=>[a(N,{modelValue:l.link,"onUpdate:modelValue":p=>l.link=p},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1032,["label"])]))),128))],512)]),_:1}),b(a(R,{class:"w-full",onClick:B},{default:m(()=>[L(_(t(i)("addImageAd")),1)]),_:1},512),[[g,t(e).editComponent.list.length<3]])])],512),[[g,t(e).editTab=="content"]]),b(s("div",le,[$(n.$slots,"style")],512),[[g,t(e).editTab=="style"]])],64)}}}),Ce=Object.freeze(Object.defineProperty({__proto__:null,default:ae},Symbol.toStringTag,{value:"Module"}));export{Ce as _};
