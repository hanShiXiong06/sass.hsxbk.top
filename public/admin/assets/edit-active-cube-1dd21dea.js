import{d as Q,q as n,r as P,n as B,aJ as Y,a$ as Z,a2 as ee,h as f,c as _,R as C,a0 as x,u as e,a as d,t as p,e as l,w as i,i as v,F,T as M,v as I,A as L,s as le,B as te,b as oe,a1 as ae,L as ne,K as ie,M as se,E as de,X as re,bv as ue,as as pe,at as me}from"./index-f7a01263.js";/* empty css                       *//* empty css                 */import{_ as ce}from"./index.vue_vue_type_script_setup_true_lang-73e73d1c.js";/* empty css                        *//* empty css                 *//* empty css                  */import be from"./index-e6c6f5a6.js";/* empty css                  *//* empty css                   *//* empty css                     */import{_ as fe}from"./index.vue_vue_type_style_index_0_lang-27cf19ee.js";import{u as _e}from"./diy-b7806205.js";import{S as Ce}from"./sortable.esm-be94e56d.js";import{r as xe}from"./range-b6a9fbf2.js";const ve={class:"content-wrap"},ye={class:"edit-attr-item-wrap"},he={class:"mb-[10px]"},Ve={class:"flex flex-wrap"},ge=["onClick"],ke=["src"],Te={class:"dialog-footer"},we={class:"edit-attr-item-wrap"},Se={class:"mb-[10px]"},Ue={class:"flex flex-wrap"},Be=["onClick"],Fe=["src"],Ee={class:"dialog-footer"},Pe={class:"text-sm text-gray-400 mb-[10px]"},Me=["onClick"],Re={class:"style-wrap"},$e={class:"edit-attr-item-wrap"},ze={class:"mb-[10px]"},Ie={class:"edit-attr-item-wrap"},Le={class:"mb-[10px]"},Ae={class:"edit-attr-item-wrap"},De={class:"mb-[10px]"},je=Q({__name:"edit-active-cube",setup(Ne,{expose:A}){const t=_e();t.editComponent.ignore=[],t.editComponent.verify=u=>{const a={code:!0,message:""};return t.value[u].text==""?(a.code=!1,a.message=n("activeCubeTitlePlaceholder"),a):(t.value[u].list.forEach(b=>{if(b.imageUrl==="")return a.code=!1,a.message=n("imageUrlTip"),a;if(b.title.text==="")return a.code=!1,a.message=n("activeCubeTitlePlaceholder"),a;if(["style-1","style-2","style-4"].indexOf(t.value[u].blockStyle.value)!=-1&&b.subTitle.text==="")return a.code=!1,a.message=n("activeCubeSubTitlePlaceholder"),a;if(["style-1","style-2"].indexOf(t.value[u].blockStyle.value)!=-1&&b.moreTitle.text==="")return a.code=!1,a.message=n("activeCubeButtonPlaceholder"),a}),a)},t.editComponent.list.forEach(u=>{u.id||(u.id=t.generateRandom())});const y=P(!1),D=()=>{y.value=!0},j=B([{url:"static/resource/images/diy/active_cube/title_style1.png",title:"风格1",value:"style-1"},{url:"static/resource/images/diy/active_cube/title_style2.png",title:"风格2",value:"style-2"},{url:"static/resource/images/diy/active_cube/title_style3.png",title:"风格3",value:"style-3"},{url:"static/resource/images/diy/active_cube/title_style5.png",title:"风格4",value:"style-4"}]),h=B({title:t.editComponent.titleStyle.title,value:t.editComponent.titleStyle.value}),N=u=>{h.title=u.title,h.value=u.value},O=()=>{t.editComponent.titleStyle.title=h.title,t.editComponent.titleStyle.value=h.value,y.value=!1},V=P(!1),W=()=>{V.value=!0},q=B([{url:"static/resource/images/diy/active_cube/block_style1.png",title:"风格1",value:"style-1"},{url:"static/resource/images/diy/active_cube/block_style2.png",title:"风格2",value:"style-2"},{url:"static/resource/images/diy/active_cube/block_style3.png",title:"风格3",value:"style-3"},{url:"static/resource/images/diy/active_cube/block_style4.png",title:"风格4",value:"style-4"}]),c=B({title:t.editComponent.blockStyle.title,value:t.editComponent.blockStyle.value}),G=u=>{c.title=u.title,c.value=u.value},J=()=>{t.editComponent.blockStyle.title=c.title,t.editComponent.blockStyle.value=c.value,V.value=!1},K=()=>{t.editComponent.list.push({id:t.generateRandom(),title:{title:"标题",textColor:"#000000"},subTitle:{text:"副标题",textColor:"#999999",startColor:"",endColor:""},listFrame:{startColor:"#4AC1FF",endColor:"#1D7CFF"},moreTitle:{text:"去看看",startColor:"#FEA715",endColor:"#FE1E00"},imageUrl:"",link:{name:""}})},R=P();return Y(()=>{Z(()=>{const u=Ce.create(R.value,{group:"item-wrap",animation:200,onEnd:a=>{const b=t.editComponent.list[a.oldIndex];t.editComponent.list.splice(a.oldIndex,1),t.editComponent.list.splice(a.newIndex,0,b),u.sort(xe(t.editComponent.list.length).map(U=>U.toString()))}})})}),A({}),(u,a)=>{const b=ee("ArrowRight"),U=ae,r=ne,g=ie,E=fe,k=se,T=de,$=re,X=be,m=ue,w=ce,z=pe,H=me;return f(),_(F,null,[C(d("div",ve,[d("div",ye,[d("h3",he,p(e(n)("titleContent")),1),l(k,{"label-width":"80px",class:"px-[10px]"},{default:i(()=>[l(r,{label:e(n)("selectStyle"),class:"flex"},{default:i(()=>[d("span",{class:"text-primary flex-1 cursor-pointer",onClick:D},p(e(t).editComponent.titleStyle.title),1),l(U,null,{default:i(()=>[l(b)]),_:1})]),_:1},8,["label"]),l(r,{label:e(n)("title")},{default:i(()=>[l(g,{modelValue:e(t).editComponent.text,"onUpdate:modelValue":a[0]||(a[0]=o=>e(t).editComponent.text=o),modelModifiers:{trim:!0},placeholder:e(n)("titlePlaceholder"),clearable:"",maxlength:"10","show-word-limit":""},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),l(r,{label:e(n)("link")},{default:i(()=>[l(E,{modelValue:e(t).editComponent.textLink,"onUpdate:modelValue":a[1]||(a[1]=o=>e(t).editComponent.textLink=o)},null,8,["modelValue"])]),_:1},8,["label"]),l(r,{label:e(n)("subTitle")},{default:i(()=>[l(g,{modelValue:e(t).editComponent.subTitle.text,"onUpdate:modelValue":a[2]||(a[2]=o=>e(t).editComponent.subTitle.text=o),modelModifiers:{trim:!0},placeholder:e(n)("subTitlePlaceholder"),clearable:"",maxlength:"8","show-word-limit":""},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),l(r,{label:e(n)("link")},{default:i(()=>[l(E,{modelValue:e(t).editComponent.subTitle.link,"onUpdate:modelValue":a[3]||(a[3]=o=>e(t).editComponent.subTitle.link=o)},null,8,["modelValue"])]),_:1},8,["label"])]),_:1}),l($,{modelValue:y.value,"onUpdate:modelValue":a[5]||(a[5]=o=>y.value=o),title:e(n)("selectStyle"),width:"500px"},{footer:i(()=>[d("span",Te,[l(T,{onClick:a[4]||(a[4]=o=>y.value=!1)},{default:i(()=>[v(p(e(n)("cancel")),1)]),_:1}),l(T,{type:"primary",onClick:O},{default:i(()=>[v(p(e(n)("confirm")),1)]),_:1})])]),default:i(()=>[d("div",Ve,[(f(!0),_(F,null,M(j,(o,S)=>(f(),_("div",{key:S,class:I([{"border-primary":h.value==o.value},"flex items-center justify-center overflow-hidden w-[200px] h-[100px] mr-[12px] mb-[12px] cursor-pointer border bg-[#eee]"]),onClick:s=>N(o)},[d("img",{src:e(L)(o.url)},null,8,ke)],10,ge))),128))])]),_:1},8,["modelValue","title"])]),d("div",we,[d("h3",Se,p(e(n)("activeCubeBlockContent")),1),l(k,{"label-width":"90px",class:"px-[10px]"},{default:i(()=>[l(r,{label:e(n)("selectStyle"),class:"flex"},{default:i(()=>[d("span",{class:"text-primary flex-1 cursor-pointer",onClick:W},p(e(t).editComponent.blockStyle.title),1),l(U,null,{default:i(()=>[l(b)]),_:1})]),_:1},8,["label"]),l($,{modelValue:V.value,"onUpdate:modelValue":a[7]||(a[7]=o=>V.value=o),title:e(n)("selectStyle"),width:"600px"},{footer:i(()=>[d("span",Ee,[l(T,{onClick:a[6]||(a[6]=o=>V.value=!1)},{default:i(()=>[v(p(e(n)("cancel")),1)]),_:1}),l(T,{type:"primary",onClick:J},{default:i(()=>[v(p(e(n)("confirm")),1)]),_:1})])]),default:i(()=>[d("div",Ue,[(f(!0),_(F,null,M(q,(o,S)=>(f(),_("div",{key:S,class:I([{"border-primary":c.value==o.value},"flex items-center justify-center overflow-hidden w-[250px] h-[150px] mr-[12px] mb-[12px] cursor-pointer border bg-[#eee]"]),onClick:s=>G(o)},[d("img",{src:e(L)(o.url)},null,8,Fe)],10,Be))),128))])]),_:1},8,["modelValue","title"]),d("p",Pe,p(e(n)("dragMouseAdjustOrder")),1),d("div",{ref_key:"blockBoxRef",ref:R},[(f(!0),_(F,null,M(e(t).editComponent.list,(o,S)=>(f(),_("div",{key:o.id,class:"item-wrap p-[10px] pb-0 relative border border-dashed border-gray-300 mb-[16px]"},[l(r,{label:e(n)("image")},{default:i(()=>[l(X,{modelValue:o.imageUrl,"onUpdate:modelValue":s=>o.imageUrl=s,limit:1},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1032,["label"]),l(r,{label:e(n)("activeCubeTitle")},{default:i(()=>[l(g,{modelValue:o.title.text,"onUpdate:modelValue":s=>o.title.text=s,modelModifiers:{trim:!0},placeholder:e(n)("activeCubeTitlePlaceholder"),clearable:"",maxlength:"4","show-word-limit":""},null,8,["modelValue","onUpdate:modelValue","placeholder"])]),_:2},1032,["label"]),C(l(r,{label:e(n)("activeCubeSubTitleTextColor")},{default:i(()=>[l(m,{modelValue:o.title.textColor,"onUpdate:modelValue":s=>o.title.textColor=s,"show-alpha":"",predefine:e(t).predefineColors},null,8,["modelValue","onUpdate:modelValue","predefine"])]),_:2},1032,["label"]),[[x,c.value=="style-3"]]),c.value!="style-3"?(f(),le(r,{key:0,label:e(n)("activeCubeSubTitle")},{default:i(()=>[l(g,{modelValue:o.subTitle.text,"onUpdate:modelValue":s=>o.subTitle.text=s,modelModifiers:{trim:!0},placeholder:e(n)("activeCubeSubTitlePlaceholder"),clearable:"",maxlength:c.value!="style-4"?"6":"4","show-word-limit":""},null,8,["modelValue","onUpdate:modelValue","placeholder","maxlength"])]),_:2},1032,["label"])):te("",!0),C(d("div",null,[l(r,{label:e(n)("activeCubeSubTitleTextColor")},{default:i(()=>[l(m,{modelValue:o.subTitle.textColor,"onUpdate:modelValue":s=>o.subTitle.textColor=s,"show-alpha":"",predefine:e(t).predefineColors},null,8,["modelValue","onUpdate:modelValue","predefine"])]),_:2},1032,["label"]),l(r,{label:e(n)("activeCubeSubTitleBgColor")},{default:i(()=>[l(m,{modelValue:o.subTitle.startColor,"onUpdate:modelValue":s=>o.subTitle.startColor=s,"show-alpha":"",predefine:e(t).predefineColors},null,8,["modelValue","onUpdate:modelValue","predefine"]),l(w,{name:"iconfont iconmap-connect",size:"20px",class:"block !text-gray-400 mx-[5px]"}),l(m,{modelValue:o.subTitle.endColor,"onUpdate:modelValue":s=>o.subTitle.endColor=s,"show-alpha":"",predefine:e(t).predefineColors},null,8,["modelValue","onUpdate:modelValue","predefine"])]),_:2},1032,["label"]),l(r,{label:e(n)("activeListFrameColor")},{default:i(()=>[l(m,{modelValue:o.listFrame.startColor,"onUpdate:modelValue":s=>o.listFrame.startColor=s,"show-alpha":"",predefine:e(t).predefineColors},null,8,["modelValue","onUpdate:modelValue","predefine"]),l(w,{name:"iconfont iconmap-connect",size:"20px",class:"block !text-gray-400 mx-[5px]"}),l(m,{modelValue:o.listFrame.endColor,"onUpdate:modelValue":s=>o.listFrame.endColor=s,"show-alpha":"",predefine:e(t).predefineColors},null,8,["modelValue","onUpdate:modelValue","predefine"])]),_:2},1032,["label"])],512),[[x,c.value=="style-4"]]),C(d("div",null,[l(r,{label:e(n)("activeCubeButton")},{default:i(()=>[l(g,{modelValue:o.moreTitle.text,"onUpdate:modelValue":s=>o.moreTitle.text=s,modelModifiers:{trim:!0},placeholder:e(n)("activeCubeButtonPlaceholder"),clearable:"",maxlength:"3","show-word-limit":""},null,8,["modelValue","onUpdate:modelValue","placeholder"])]),_:2},1032,["label"]),l(r,{label:e(n)("activeCubeButtonColor")},{default:i(()=>[l(m,{modelValue:o.moreTitle.startColor,"onUpdate:modelValue":s=>o.moreTitle.startColor=s,"show-alpha":"",predefine:e(t).predefineColors},null,8,["modelValue","onUpdate:modelValue","predefine"]),l(w,{name:"iconfont iconmap-connect",size:"20px",class:"block !text-gray-400 mx-[5px]"}),l(m,{modelValue:o.moreTitle.endColor,"onUpdate:modelValue":s=>o.moreTitle.endColor=s,"show-alpha":"",predefine:e(t).predefineColors},null,8,["modelValue","onUpdate:modelValue","predefine"])]),_:2},1032,["label"])],512),[[x,c.value!="style-4"&&c.value!="style-3"]]),l(r,{label:e(n)("link")},{default:i(()=>[l(E,{modelValue:o.link,"onUpdate:modelValue":s=>o.link=s},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1032,["label"]),C(d("div",{class:"del absolute cursor-pointer z-[2] top-[-8px] right-[-8px]",onClick:s=>e(t).editComponent.list.splice(S,1)},[l(w,{name:"element CircleCloseFilled",color:"#bbb",size:"20px"})],8,Me),[[x,e(t).editComponent.list.length>1]])]))),128))],512),C(l(T,{class:"w-full",onClick:K},{default:i(()=>[v(p(e(n)("activeCubeAddItem")),1)]),_:1},512),[[x,e(t).editComponent.list.length<10]])]),_:1})])],512),[[x,e(t).editTab=="content"]]),C(d("div",Re,[d("div",$e,[d("h3",ze,p(e(n)("titleStyle")),1),l(k,{"label-width":"90px",class:"px-[10px]"},{default:i(()=>[l(r,{label:e(n)("textColor")},{default:i(()=>[l(m,{modelValue:e(t).editComponent.titleColor,"onUpdate:modelValue":a[8]||(a[8]=o=>e(t).editComponent.titleColor=o),"show-alpha":"",predefine:e(t).predefineColors},null,8,["modelValue","predefine"])]),_:1},8,["label"])]),_:1})]),d("div",Ie,[d("h3",Le,p(e(n)("subTitleStyle")),1),l(k,{"label-width":"90px",class:"px-[10px]"},{default:i(()=>[l(r,{label:e(n)("textColor")},{default:i(()=>[l(m,{modelValue:e(t).editComponent.subTitle.textColor,"onUpdate:modelValue":a[9]||(a[9]=o=>e(t).editComponent.subTitle.textColor=o),"show-alpha":"",predefine:e(t).predefineColors},null,8,["modelValue","predefine"])]),_:1},8,["label"]),l(r,{label:e(n)("subTextBgColor")},{default:i(()=>[l(m,{modelValue:e(t).editComponent.subTitle.startColor,"onUpdate:modelValue":a[10]||(a[10]=o=>e(t).editComponent.subTitle.startColor=o),"show-alpha":"",predefine:e(t).predefineColors},null,8,["modelValue","predefine"]),l(w,{name:"iconfont iconmap-connect",size:"20px",class:"block !text-gray-400 mx-[5px]"}),l(m,{modelValue:e(t).editComponent.subTitle.endColor,"onUpdate:modelValue":a[11]||(a[11]=o=>e(t).editComponent.subTitle.endColor=o),"show-alpha":"",predefine:e(t).predefineColors},null,8,["modelValue","predefine"])]),_:1},8,["label"])]),_:1})]),d("div",Ae,[d("h3",De,p(e(n)("activeCubeBlockStyle")),1),l(k,{"label-width":"80px",class:"px-[10px]"},{default:i(()=>[l(r,{label:e(n)("activeCubeBlockTextFontWeight")},{default:i(()=>[l(H,{modelValue:e(t).editComponent.blockStyle.fontWeight,"onUpdate:modelValue":a[12]||(a[12]=o=>e(t).editComponent.blockStyle.fontWeight=o)},{default:i(()=>[l(z,{label:"normal"},{default:i(()=>[v(p(e(n)("fontWeightNormal")),1)]),_:1}),l(z,{label:"bold"},{default:i(()=>[v(p(e(n)("fontWeightBold")),1)]),_:1})]),_:1},8,["modelValue"])]),_:1},8,["label"])]),_:1})]),oe(u.$slots,"style")],512),[[x,e(t).editTab=="style"]])],64)}}}),al=Object.freeze(Object.defineProperty({__proto__:null,default:je},Symbol.toStringTag,{value:"Module"}));export{al as _};
