import{d as J,r as z,n as q,aJ as K,h as c,c as T,R as E,a0 as F,u as e,a as i,t as d,q as n,v as P,e as o,w as s,F as B,B as x,i as _,s as h,ad as X,A as Y,b as H,aS as Q,L as Z,M as ee,K as te,at as oe,au as le,bz as ae,ac as ne,J as se,E as ie,X as de,bv as re,Y as me}from"./index-6f32d09b.js";/* empty css                   *//* empty css                        *//* empty css                 *//* empty css                  *//* empty css                  *//* empty css                   *//* empty css                 *//* empty css                        *//* empty css                        *//* empty css                    *//* empty css               *//* empty css                  *//* empty css                        */import"./el-tooltip-4ed993c7.js";/* empty css                  *//* empty css                       *//* empty css                 */import{_ as pe}from"./index.vue_vue_type_style_index_0_lang-f89585f1.js";import ue from"./index-4df26bee.js";/* empty css                */import"./el-form-item-4ed993c7.js";/* empty css                  */import{g as ce}from"./category-9dea0c7a.js";import{u as _e}from"./diy-452b5b8a.js";import fe from"./goods-select-popup-77c9ca96.js";const be=""+new URL("category_default-74216c25.png",import.meta.url).href,xe={class:"content-wrap"},ge={class:"edit-attr-item-wrap"},Ce={class:"mb-[10px]"},ye={class:"flex items-center mb-[18px] rounded overflow-hidden"},he={class:"edit-attr-item-wrap"},we={class:"mb-[10px]"},Ve={class:"edit-attr-item-wrap"},ve={class:"mb-[10px]"},Se={class:"edit-attr-item-wrap"},ke={class:"mb-[10px]"},Ue={class:"edit- attr-item-wrap"},ze={class:"mb-[10px]"},Te={class:"edit-attr-item-wrap"},Ee={class:"mb-[10px]"},Pe={class:"edit-attr-item-wrap"},Be={class:"mb-[10px]"},Re={class:"flex items-center w-full ml-[5px]"},De={class:"ml-[15px]"},Fe={class:"flex items-center w-full"},Ne={class:"text-[var(--el-color-primary)]"},je=i("span",{class:"iconfont iconxiangyoujiantou"},null,-1),Ie={class:"order-2"},Me={class:"h-[30px]"},$e=i("div",{class:"image-slot"},[i("img",{class:"w-[30px] h-[30px]",src:be})],-1),Ge={class:"flex items-center justify-end mt-[15px]"},Le={class:"style-wrap"},Oe={class:"edit-attr-item-wrap"},We={class:"mb-[10px]"},Ae={class:"edit-attr-item-wrap"},Je={class:"mb-[10px]"},qe={class:"edit-attr-item-wrap"},Ke={class:"mb-[10px]"},Xe=J({__name:"edit-o2o-goods-list",setup(Ye,{expose:N}){const l=_e();l.editComponent.ignore=[];const f=z(!1),p=q({loading:!0,data:[]});K(()=>{j()});const g=z();let C=null;const j=()=>{p.loading=!0,ce().then(u=>{p.loading=!1,p.data=u.data,l.editComponent.source=="category"&&p.data.forEach((t,v)=>{l.editComponent.goods_category==t.category_id&&(V.value=t.category_name,C=t)})}).catch(()=>{p.loading=!1})};let w={};const V=z("请选择"),I=u=>{let t="";u&&(t=u[u.length-1]),u.length>1&&g.value.clearSelection(),t&&g.value.toggleRowSelection(t,!0),C=t,w=t},M=()=>{l.editComponent.goods_category=w.category_id,V.value=w.category_name,f.value=!1},$=()=>{f.value=!0,C&&setTimeout(()=>{g.value.toggleRowSelection(C,!0)},200)};return N({}),(u,t)=>{const v=Q,r=Z,m=ee,G=ue,S=te,L=pe,b=oe,R=le,y=ae,k=ne,O=se,D=ie,W=de,U=re,A=me;return c(),T(B,null,[E(i("div",xe,[i("div",ge,[i("h3",Ce,d(e(n)("selectStyle")),1),i("div",ye,[i("span",{class:P(["iconfont iconshangxiatuwenpc border-[1px] border-solid border-[#eee] cursor-pointer flex-1 flex items-center justify-center py-[5px]",{"border-[var(--el-color-primary)] text-[var(--el-color-primary)]":e(l).editComponent.style=="style1"}]),onClick:t[0]||(t[0]=a=>e(l).editComponent.style="style1")},null,2),i("span",{class:P(["iconfont iconzuoyoutuwenpc border-[1px] border-solid border-[#eee] cursor-pointer flex-1 flex items-center justify-center py-[5px]",{"border-[var(--el-color-primary)] text-[var(--el-color-primary)]":e(l).editComponent.style=="style2"}]),onClick:t[1]||(t[1]=a=>e(l).editComponent.style="style2")},null,2),i("span",{class:P(["iconfont iconliebiaopc border-[1px] border-solid border-[#eee] cursor-pointer flex-1 flex items-center justify-center py-[5px]",{"border-[var(--el-color-primary)] text-[var(--el-color-primary)]":e(l).editComponent.style=="style3"}]),onClick:t[2]||(t[2]=a=>e(l).editComponent.style="style3")},null,2)])]),i("div",he,[i("h3",we,d(e(n)("showTitle")),1),o(m,{"label-width":"80px",class:"px-[10px]"},{default:s(()=>[o(r,{label:e(n)("moreIsShow")},{default:s(()=>[o(v,{modelValue:e(l).editComponent.title_is_show,"onUpdate:modelValue":t[3]||(t[3]=a=>e(l).editComponent.title_is_show=a)},null,8,["modelValue"])]),_:1},8,["label"])]),_:1})]),e(l).editComponent.title_is_show?(c(),T(B,{key:0},[i("div",Ve,[i("h3",ve,d(e(n)("icon")),1),o(m,{"label-width":"80px",class:"px-[10px]"},{default:s(()=>[o(r,{label:e(n)("icon")},{default:s(()=>[o(G,{modelValue:e(l).editComponent.title_icon,"onUpdate:modelValue":t[4]||(t[4]=a=>e(l).editComponent.title_icon=a),limit:1},null,8,["modelValue"])]),_:1},8,["label"])]),_:1})]),i("div",Se,[i("h3",ke,d(e(n)("titleContent")),1),o(m,{"label-width":"80px",class:"px-[10px]"},{default:s(()=>[o(r,{label:e(n)("title")},{default:s(()=>[o(S,{modelValue:e(l).editComponent.title_text,"onUpdate:modelValue":t[5]||(t[5]=a=>e(l).editComponent.title_text=a),modelModifiers:{trim:!0},placeholder:e(n)("titlePlaceholder"),clearable:"",maxlength:"15","show-word-limit":""},null,8,["modelValue","placeholder"])]),_:1},8,["label"])]),_:1})]),i("div",Ue,[i("h3",ze,d(e(n)("subTitleContent")),1),o(m,{"label-width":"80px",class:"px-[10px]"},{default:s(()=>[o(r,{label:e(n)("subTitle")},{default:s(()=>[o(S,{modelValue:e(l).editComponent.sub_title_text,"onUpdate:modelValue":t[6]||(t[6]=a=>e(l).editComponent.sub_title_text=a),modelModifiers:{trim:!0},placeholder:e(n)("subTitlePlaceholder"),clearable:"",maxlength:"30","show-word-limit":""},null,8,["modelValue","placeholder"])]),_:1},8,["label"])]),_:1})]),i("div",Te,[i("h3",Ee,d(e(n)("moreContent")),1),o(m,{"label-width":"80px",class:"px-[10px]"},{default:s(()=>[o(r,{label:e(n)("more")},{default:s(()=>[o(S,{modelValue:e(l).editComponent.more_text,"onUpdate:modelValue":t[7]||(t[7]=a=>e(l).editComponent.more_text=a),modelModifiers:{trim:!0},placeholder:e(n)("morePlaceholder"),clearable:"",maxlength:"8","show-word-limit":""},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),o(r,{label:e(n)("link")},{default:s(()=>[o(L,{modelValue:e(l).editComponent.more_link,"onUpdate:modelValue":t[8]||(t[8]=a=>e(l).editComponent.more_link=a)},null,8,["modelValue"])]),_:1},8,["label"]),o(r,{label:e(n)("moreIsShow")},{default:s(()=>[o(v,{modelValue:e(l).editComponent.more_is_show,"onUpdate:modelValue":t[9]||(t[9]=a=>e(l).editComponent.more_is_show=a)},null,8,["modelValue"])]),_:1},8,["label"])]),_:1})])],64)):x("",!0),i("div",Pe,[i("h3",Be,d(e(n)("selectSource")),1),o(m,{"label-width":"80px",class:"px-[10px]"},{default:s(()=>[o(r,{label:e(n)("goodsSelectPopupSelectGoodsButton")},{default:s(()=>[o(R,{modelValue:e(l).editComponent.source,"onUpdate:modelValue":t[10]||(t[10]=a=>e(l).editComponent.source=a),title:e(n)("goodsSelectPopupSelectGoodsButton")},{default:s(()=>[o(b,{label:"all"},{default:s(()=>[_(d(e(n)("goodsSelectPopupAllGoods")),1)]),_:1}),o(b,{label:"category"},{default:s(()=>[_(d(e(n)("selectCategory")),1)]),_:1}),o(b,{label:"custom"},{default:s(()=>[_(d(e(n)("manualSelectionSources")),1)]),_:1})]),_:1},8,["modelValue","title"])]),_:1},8,["label"]),e(l).editComponent.source=="all"?(c(),h(r,{key:0,label:e(n)("goodsNum")},{default:s(()=>[i("div",Re,[o(y,{class:"flex-1",modelValue:e(l).editComponent.num,"onUpdate:modelValue":t[11]||(t[11]=a=>e(l).editComponent.num=a),min:1,max:"20",size:"small"},null,8,["modelValue"]),i("span",De,d(e(l).editComponent.num),1)])]),_:1},8,["label"])):x("",!0),e(l).editComponent.source=="category"?(c(),h(r,{key:1,label:e(n)("selectCategory")},{default:s(()=>[i("div",Fe,[i("div",{class:"cursor-pointer ml-auto",onClick:$},[i("span",Ne,d(V.value),1),je])])]),_:1},8,["label"])):x("",!0),e(l).editComponent.source=="custom"?(c(),h(r,{key:2,label:e(n)("customGoods")},{default:s(()=>[o(fe,{ref:"goodsSelectPopupRef",modelValue:e(l).editComponent.goods_ids,"onUpdate:modelValue":t[12]||(t[12]=a=>e(l).editComponent.goods_ids=a),min:1,max:99},null,8,["modelValue"])]),_:1},8,["label"])):x("",!0)]),_:1}),o(W,{modelValue:f.value,"onUpdate:modelValue":t[14]||(t[14]=a=>f.value=a),title:e(n)("goodsCategoryTitle"),width:"1000px","close-on-press-escape":!1,"destroy-on-close":!0,"close-on-click-modal":!1},{default:s(()=>[E((c(),h(e(X),{data:p.data,ref_key:"categoryTableRef",ref:g,size:"large",height:"490px",onSelectionChange:I,"row-key":"category_id","tree-props":{hasChildren:"hasChildren",children:"children"}},{empty:s(()=>[i("span",null,d(p.loading?"":e(n)("emptyData")),1)]),default:s(()=>[o(k,{type:"selection",width:"55"}),o(k,{label:e(n)("categoryName"),"min-width":"120"},{default:s(({row:a})=>[i("span",Ie,d(a.category_name),1)]),_:1},8,["label"]),o(k,{label:e(n)("categoryImage"),width:"170",align:"left"},{default:s(({row:a})=>[i("div",Me,[o(O,{class:"w-[30px] h-[30px]",src:e(Y)(a.image?a.image:""),fit:"contain"},{error:s(()=>[$e]),_:2},1032,["src"])])]),_:1},8,["label"])]),_:1},8,["data"])),[[A,p.loading]]),i("div",Ge,[o(D,{type:"primary",onClick:M},{default:s(()=>[_(d(e(n)("confirm")),1)]),_:1}),o(D,{onClick:t[13]||(t[13]=a=>f.value=!1)},{default:s(()=>[_(d(e(n)("cancel")),1)]),_:1})])]),_:1},8,["modelValue","title"])])],512),[[F,e(l).editTab=="content"]]),E(i("div",Le,[e(l).editComponent.title_is_show?(c(),T(B,{key:0},[i("div",Oe,[i("h3",We,d(e(n)("titleStyle")),1),o(m,{"label-width":"80px",class:"px-[10px]"},{default:s(()=>[o(r,{label:e(n)("textFontSize")},{default:s(()=>[o(y,{modelValue:e(l).editComponent.title_font_size,"onUpdate:modelValue":t[15]||(t[15]=a=>e(l).editComponent.title_font_size=a),"show-input":"",size:"small",class:"ml-[10px] article-slider",min:12,max:20},null,8,["modelValue"])]),_:1},8,["label"]),o(r,{label:e(n)("textFontWeight")},{default:s(()=>[o(R,{modelValue:e(l).editComponent.title_font_weight,"onUpdate:modelValue":t[16]||(t[16]=a=>e(l).editComponent.title_font_weight=a)},{default:s(()=>[o(b,{label:"normal"},{default:s(()=>[_(d(e(n)("fontWeightNormal")),1)]),_:1}),o(b,{label:"bold"},{default:s(()=>[_(d(e(n)("fontWeightBold")),1)]),_:1})]),_:1},8,["modelValue"])]),_:1},8,["label"]),o(r,{label:e(n)("textColor")},{default:s(()=>[o(U,{modelValue:e(l).editComponent.title_text_color,"onUpdate:modelValue":t[17]||(t[17]=a=>e(l).editComponent.title_text_color=a)},null,8,["modelValue"])]),_:1},8,["label"])]),_:1})]),i("div",Ae,[i("h3",Je,d(e(n)("subTitleStyle")),1),o(m,{"label-width":"80px",class:"px-[10px]"},{default:s(()=>[o(r,{label:e(n)("textFontSize")},{default:s(()=>[o(y,{modelValue:e(l).editComponent.sub_title_font_size,"onUpdate:modelValue":t[18]||(t[18]=a=>e(l).editComponent.sub_title_font_size=a),"show-input":"",size:"small",class:"ml-[10px] article-slider",min:12,max:16},null,8,["modelValue"])]),_:1},8,["label"]),o(r,{label:e(n)("textColor")},{default:s(()=>[o(U,{modelValue:e(l).editComponent.sub_title_color,"onUpdate:modelValue":t[19]||(t[19]=a=>e(l).editComponent.sub_title_color=a)},null,8,["modelValue"])]),_:1},8,["label"])]),_:1})]),i("div",qe,[i("h3",Ke,d(e(n)("moreContent")),1),o(m,{"label-width":"80px",class:"px-[10px]"},{default:s(()=>[o(r,{label:e(n)("textFontSize")},{default:s(()=>[o(y,{modelValue:e(l).editComponent.more_font_size,"onUpdate:modelValue":t[20]||(t[20]=a=>e(l).editComponent.more_font_size=a),"show-input":"",size:"small",class:"ml-[10px] article-slider",min:12,max:16},null,8,["modelValue"])]),_:1},8,["label"]),o(r,{label:e(n)("textColor")},{default:s(()=>[o(U,{modelValue:e(l).editComponent.more_color,"onUpdate:modelValue":t[21]||(t[21]=a=>e(l).editComponent.more_color=a)},null,8,["modelValue"])]),_:1},8,["label"])]),_:1})])],64)):x("",!0),H(u.$slots,"style")],512),[[F,e(l).editTab=="style"]])],64)}}}),Vt=Object.freeze(Object.defineProperty({__proto__:null,default:Xe},Symbol.toStringTag,{value:"Module"}));export{Vt as _};
