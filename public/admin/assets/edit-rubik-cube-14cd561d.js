import{d as R,q as p,r as A,l as T,h as r,c as u,R as f,a0 as h,u as e,a as o,t as x,e as n,w as c,F as b,T as z,v,A as w,b as L,L as j,M as F,bz as H}from"./index-99f00cf3.js";/* empty css                  *//* empty css                 *//* empty css                        */import"./el-tooltip-4ed993c7.js";/* empty css                  */import{_ as I}from"./index.vue_vue_type_style_index_0_lang-572087a4.js";import $ from"./index-015c0c3e.js";/* empty css                */import{_ as B}from"./index.vue_vue_type_script_setup_true_lang-49ab6f2c.js";import"./el-form-item-4ed993c7.js";import{u as D}from"./diy-c8337ab9.js";import{_ as G}from"./_plugin-vue_export-helper-c27b6911.js";const M={class:"content-wrap rubik-cube"},O={class:"edit-attr-item-wrap"},W={class:"mb-[10px]"},q={class:"selected-template-list"},P=["onClick"],J={class:"edit-attr-item-wrap"},K={class:"mb-[10px]"},Q={class:"layout"},X={class:"have-preview-image"},Y=["src"],Z={class:"style-wrap"},ee={class:"edit-attr-item-wrap"},se={class:"mb-[10px]"},te=R({__name:"edit-rubik-cube",setup(ae,{expose:S}){const s=D();s.editComponent.ignore=[],s.editComponent.verify=d=>{const t={code:!0,message:""};return s.value[d].list.forEach(i=>{if(i.imageUrl==="")return t.code=!1,t.message=p("imageUrlTip"),t}),t};const _=A([{name:"1行2个",src:"iconyihang2gepc1",className:"row1-of2",dimensionScale:[{desc:"宽度50%",size:"200px * 200px",name:"图一"},{desc:"宽度50%",size:"200px * 200px",name:"图二"}],descAux:"选定布局区域，在下方添加图片，建议添加尺寸一致的图片，宽度最小建议为：200px"},{name:"1行3个",src:"iconyihang3gepc",className:"row1-of3",dimensionScale:[{desc:"宽度33.33%",size:"200px * 200px",name:"图一"},{desc:"宽度33.33%",size:"200px * 200px",name:"图二"},{desc:"宽度33.33%",size:"200px * 200px",name:"图三"}],descAux:"选定布局区域，在下方添加图片，建议添加尺寸一致的图片，宽度最小建议为：130px"},{name:"1行4个",src:"iconyihang4gepc",className:"row1-of4",dimensionScale:[{desc:"宽度25%",size:"200px * 200px",name:"图一"},{desc:"宽度25%",size:"200px * 200px",name:"图二"},{desc:"宽度25%",size:"200px * 200px",name:"图三"},{desc:"宽度25%",size:"200px * 200px",name:"图四"}],descAux:"选定布局区域，在下方添加图片，建议添加尺寸一致的图片，宽度最小建议为：100px"},{name:"2左2右",src:"iconliangzuoliangyoupc",className:"row2-lt-of2-rt",dimensionScale:[{desc:"宽度50%",size:"200px * 200px",name:"图一"},{desc:"宽度50%",size:"200px * 200px",name:"图二"},{desc:"宽度50%",size:"200px * 200px",name:"图三"},{desc:"宽度50%",size:"200px * 200px",name:"图四"}],descAux:"选定布局区域，在下方添加图片，建议添加尺寸一致的图片，宽度最小建议为：200px"},{name:"1左2右",src:"iconyizuoliangyoupc",className:"row1-lt-of2-rt",dimensionScale:[{desc:"宽度50% * 高度100%",size:"200px * 400px",name:"图一"},{desc:"宽度50% * 高度50%",size:"200px * 200px",name:"图二"},{desc:"宽度50% * 高度50%",size:"200px * 200px",name:"图三"}],descAux:"选定布局区域，在下方添加图片，宽度最小建议为：200px，右侧两张图片高度一致，左侧图片高度为右侧两张图片高度之和（例：左侧图片尺寸：200px * 300px，右侧两张图片尺寸：200px * 150px）"},{name:"1上2下",src:"iconyishangliangxiapc",className:"row1-tp-of2-bm",dimensionScale:[{desc:"宽度100% * 高度50%",size:"400px * 200px",name:"图一"},{desc:"宽度50% * 高度50%",size:"200px * 200px",name:"图二"},{desc:"宽度50% * 高度50%",size:"200px * 200px",name:"图三"}],descAux:"选定布局区域，在下方添加图片，上方一张图片的宽度为下方两张图片宽度之和，下放两张图片尺寸一致，高度可根据实际需求自行确定（例：上方图片尺寸：400px * 150px，下方两张图片尺寸：200px * 150px）"},{name:"1左3右",src:"iconyizuosanyoupc",className:"row1-lt-of1-tp-of2-bm",dimensionScale:[{desc:"宽度50% * 高度100%",size:"200px * 400px",name:"图一"},{desc:"宽度50% * 高度50%",size:"200px * 200px",name:"图二"},{desc:"宽度25% * 高度50%",size:"100px * 200px",name:"图三"},{desc:"宽度25% * 高度50%",size:"100px * 200px",name:"图四"}],descAux:"选定布局区域，在下方添加图片，左右两侧内容宽高相同，右侧上下区域高度各占50%，右侧内容下半部分两张图片的宽度相同，各占右侧内容宽度的50%（例：左侧图片尺寸：200px * 400px，右侧上半部分图片尺寸：200px * 200px，右侧下半部分两张图片尺寸：100px * 200px）"}]),g=T(()=>{let d;return _.value.forEach(t=>{t.className==s.editComponent.mode&&(d=t)}),d}),V=d=>{for(let t=0;t<_.value.length;t++)if(t==d){s.editComponent.mode=_.value[t].className;const i=_.value[t].dimensionScale.length;if(i>s.editComponent.list.length)for(let a=0;a<i;a++)a+1>s.editComponent.list.length&&s.editComponent.list.push({imageUrl:"",imgWidth:0,imgHeight:0,link:{name:""}});else if(i!=s.editComponent.list.length)for(let a=0;a<s.editComponent.list.length;a++)a+1>i&&(s.editComponent.list.splice(a,1),a=0)}},k=d=>{U(!0)},U=(d=!1)=>{s.editComponent.list.forEach((t,i)=>{const a=new Image;a.src=w(t.imageUrl),a.onload=async()=>{t.imgWidth=a.width,t.imgHeight=a.height}})};return S({}),(d,t)=>{const i=j,a=B,y=F,N=$,E=I,C=H;return r(),u(b,null,[f(o("div",M,[o("div",O,[o("h3",W,x(e(p)("selectStyle")),1),n(y,{"label-width":"80px",class:"px-[10px]"},{default:c(()=>[n(i,{label:e(p)("template")},{default:c(()=>[o("span",null,x(e(g).name),1)]),_:1},8,["label"]),o("ul",q,[(r(!0),u(b,null,z(_.value,(l,m)=>(r(),u("li",{key:m,class:v([l.className==e(s).editComponent.mode?"selected":""]),onClick:oe=>V(m)},[n(a,{name:"iconfont "+l.src,size:"16px"},null,8,["name"])],10,P))),128))])]),_:1})]),o("div",J,[o("h3",K,x(e(p)("rubikCubeLayout")),1),n(y,{"label-width":"80px",class:"px-[10px]"},{default:c(()=>[o("ul",Q,[(r(!0),u(b,null,z(e(g).dimensionScale,(l,m)=>(r(),u("li",{key:m,class:v([e(g).className])},[f(o("div",X,[o("img",{src:e(w)(e(s).editComponent.list[m].imageUrl)},null,8,Y)],512),[[h,e(s).editComponent.list[m].imageUrl&&e(s).editComponent.list[m].imageUrl!="static/resource/images/diy/figure.png"]]),f(o("div",{class:v(["empty",[e(g).className]])},[o("p",null,x(l.name),1),o("p",null,x(l.desc),1)],2),[[h,!e(s).editComponent.list[m].imageUrl||e(s).editComponent.list[m].imageUrl=="static/resource/images/diy/figure.png"]])],2))),128))]),(r(!0),u(b,null,z(e(s).editComponent.list,l=>(r(),u("div",{key:l.id,class:"item-wrap p-[10px] pb-0 relative border border-dashed border-gray-300 mb-[16px]"},[n(i,{label:e(p)("image")},{default:c(()=>[n(N,{modelValue:l.imageUrl,"onUpdate:modelValue":m=>l.imageUrl=m,limit:1,onChange:k},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1032,["label"]),n(i,{label:e(p)("link")},{default:c(()=>[n(E,{modelValue:l.link,"onUpdate:modelValue":m=>l.link=m},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1032,["label"])]))),128))]),_:1})])],512),[[h,e(s).editTab=="content"]]),f(o("div",Z,[o("div",ee,[o("h3",se,x(e(p)("rubikCubeStyle")),1),n(y,{"label-width":"80px",class:"px-[10px]"},{default:c(()=>[n(i,{label:e(p)("imageGap")},{default:c(()=>[n(C,{modelValue:e(s).editComponent.imageGap,"onUpdate:modelValue":t[0]||(t[0]=l=>e(s).editComponent.imageGap=l),"show-input":"",size:"small",class:"ml-[10px] diy-nav-slider",max:30},null,8,["modelValue"])]),_:1},8,["label"]),n(i,{label:e(p)("topRounded")},{default:c(()=>[n(C,{modelValue:e(s).editComponent.topElementRounded,"onUpdate:modelValue":t[1]||(t[1]=l=>e(s).editComponent.topElementRounded=l),"show-input":"",size:"small",class:"ml-[10px] diy-nav-slider",max:50},null,8,["modelValue"])]),_:1},8,["label"]),n(i,{label:e(p)("bottomRounded")},{default:c(()=>[n(C,{modelValue:e(s).editComponent.bottomElementRounded,"onUpdate:modelValue":t[2]||(t[2]=l=>e(s).editComponent.bottomElementRounded=l),"show-input":"",size:"small",class:"ml-[10px] diy-nav-slider",max:50},null,8,["modelValue"])]),_:1},8,["label"])]),_:1})]),L(d.$slots,"style",{},void 0,!0)],512),[[h,e(s).editTab=="style"]])],64)}}});const le=G(te,[["__scopeId","data-v-2324d099"]]),be=Object.freeze(Object.defineProperty({__proto__:null,default:le},Symbol.toStringTag,{value:"Module"}));export{be as _};
