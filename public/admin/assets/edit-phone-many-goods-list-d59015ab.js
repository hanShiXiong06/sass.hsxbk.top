import{d as ce,q as d,r as h,n as j,aJ as ge,a$ as M,a2 as O,h as _,c as D,R as g,a0 as C,u as e,a as n,t as r,e as o,w as t,i as p,Z as _e,s as x,F as J,T as fe,B as q,ad as K,A as X,b as ye,at as Ce,au as be,L as he,bz as xe,M as Ve,a1 as ve,K as we,E as Se,ac as ke,J as Ue,X as Re,bv as Ee,Y as Te}from"./index-2a89d409.js";/* empty css                   *//* empty css                        *//* empty css                 *//* empty css                  *//* empty css                  *//* empty css                   *//* empty css                 *//* empty css                        *//* empty css                        *//* empty css                    *//* empty css               */import{_ as Be}from"./index.vue_vue_type_script_setup_true_lang-4e818418.js";import Ie from"./index-deaeeb3b.js";/* empty css                *//* empty css                  *//* empty css                        */import"./el-tooltip-4ed993c7.js";/* empty css                  */import"./el-form-item-4ed993c7.js";/* empty css                       *//* empty css                 */import{_ as Y}from"./category_default-57987dd3.js";import{u as Ne}from"./diy-62f5a59f.js";import{S as Le}from"./sortable.esm-be94e56d.js";import{g as De,a as Pe}from"./goods-3259d825.js";import Ge from"./goods-select-popup-c72e3e04.js";import{r as ze}from"./range-ce7c6ff9.js";const $e={class:"content-wrap"},Ae={class:"edit-attr-item-wrap"},Fe={class:"mb-[10px]"},We={class:"edit-attr-item-wrap"},je={class:"mb-[10px]"},Me={class:"flex items-center w-full ml-[5px]"},Oe={class:"ml-[15px]"},Je={class:"edit-attr-item-wrap"},qe={class:"mb-[10px]"},Ke=["onClick"],Xe={class:"text-sm text-gray-400 mb-[10px]"},Ye={class:"flex items-center w-full"},Ze=["onClick"],He={class:"text-[var(--el-color-primary)]"},Qe=n("span",{class:"iconfont iconxiangyoujiantou"},null,-1),eo=["onClick"],oo={class:"order-2"},lo={class:"h-[30px]"},to=n("div",{class:"image-slot"},[n("img",{class:"w-[30px] h-[30px]",src:Y})],-1),ao={class:"flex items-center justify-end mt-[15px]"},so={class:"order-2"},no={class:"h-[30px]"},io=n("div",{class:"image-slot"},[n("img",{class:"w-[30px] h-[30px]",src:Y})],-1),ro={class:"flex items-center justify-end mt-[15px]"},mo={class:"style-wrap"},uo={class:"edit-attr-item-wrap"},po={class:"mb-[10px]"},co=n("div",{class:"mr-[20px]"},null,-1),go=ce({__name:"edit-phone-many-goods-list",setup(_o,{expose:Z}){const l=Ne();l.editComponent.ignore=["componentBgUrl"],l.editComponent.verify=i=>{const a={code:!0,message:""};if(l.value[i].source=="custom")l.value[i].list.forEach(m=>{if(m.source==="category"){if(m.goods_category=="")return a.code=!1,a.message=d("goodsCategoryPlaceholder"),a}else m.source=="custom"&&m.goods_ids.length==0&&(a.code=!1,a.message=d("goodsPlaceholder"))});else if(l.value[i].source=="goods_category"&&l.value[i].goods_category=="")return a.code=!1,a.message=d("goodsCategoryPlaceholder"),a;return a},l.editComponent.list.forEach(i=>{i.id||(i.id=l.generateRandom())});const V=h(!1),f=j({loading:!0,data:[],searchParam:{level:1}}),P=h(),H=()=>{f.loading=!0,Pe({...f.searchParam}).then(i=>{f.loading=!1,f.data=i.data}).catch(()=>{f.loading=!1})},Q=()=>{l.editComponent.goods_category=v.category_id,l.editComponent.goods_category_name=v.category_name,V.value=!1},ee=()=>{V.value=!0,v&&setTimeout(()=>{P.value.setCurrentRow(v)},200)},oe=()=>{l.editComponent.goods_category="",l.editComponent.goods_category_name=""};let v={};const le=i=>{v=i},w=h(!1),G=h(),y=j({loading:!0,data:[]});ge(()=>{te(),H(),M(()=>{const i=Le.create(G.value,{group:"item-wrap",animation:200,onEnd:a=>{const m=l.editComponent.list[a.oldIndex];l.editComponent.list.splice(a.oldIndex,1),l.editComponent.list.splice(a.newIndex,0,m),i.sort(ze(l.editComponent.list.length).map(b=>b.toString()))}})})});const S=h();let I=null;const te=()=>{y.loading=!0,De().then(i=>{y.loading=!1,y.data=i.data}).catch(()=>{y.loading=!1})};let k=0;const ae=i=>{let a="";i&&(a=i[i.length-1]),i.length>1&&S.value.clearSelection(),a&&S.value.toggleRowSelection(a,!0),I=a},se=()=>{l.editComponent.list[k].goods_category=I.category_id,l.editComponent.list[k].goods_category_name=I.category_name,w.value=!1},de=i=>{k=i,w.value=!0,M(()=>{ne()})},N=h([]),ne=()=>{N.value=[],y.data.forEach(i=>{l.editComponent.list[k].goods_category==i.category_id?S.value.toggleRowSelection(i,!0):i.child_list&&i.child_list.length&&i.child_list.forEach(a=>{l.editComponent.list[k].goods_category==a.category_id&&(N.value.push(i.category_id.toString()),S.value.toggleRowSelection(a,!0))})})},ie=()=>{l.editComponent.list.push({id:l.generateRandom(),title:"分类",desc:"分类描述",source:"all",goods_category:"",goods_category_name:"请选择",goods_ids:[],imageUrl:""})};return Z({}),(i,a)=>{const m=Ce,b=be,u=he,E=xe,T=Ve,re=O("Close"),z=ve,me=O("ArrowRight"),L=we,ue=Ie,pe=Be,U=Se,R=ke,$=Ue,A=Re,B=Ee,F=Te;return _(),D(J,null,[g(n("div",$e,[n("div",Ae,[n("h3",Fe,r(e(d)("selectStyle")),1),o(T,{"label-width":"80px",class:"px-[10px]"},{default:t(()=>[o(u,{label:e(d)("styleLabel")},{default:t(()=>[o(b,{modelValue:e(l).editComponent.headStyle,"onUpdate:modelValue":a[0]||(a[0]=s=>e(l).editComponent.headStyle=s)},{default:t(()=>[o(m,{label:"style-1"},{default:t(()=>[p(r(e(d)("headStyle1")),1)]),_:1}),o(m,{label:"style-2"},{default:t(()=>[p(r(e(d)("headStyle2")),1)]),_:1}),o(m,{label:"style-3"},{default:t(()=>[p(r(e(d)("headStyle3")),1)]),_:1})]),_:1},8,["modelValue"])]),_:1},8,["label"]),g(o(u,{label:e(d)("manyGoodsListAroundRadius")},{default:t(()=>[o(E,{modelValue:e(l).editComponent.aroundRadius,"onUpdate:modelValue":a[1]||(a[1]=s=>e(l).editComponent.aroundRadius=s),"show-input":"",size:"small",class:"ml-[10px] graphic-nav-slider",max:50},null,8,["modelValue"])]),_:1},8,["label"]),[[C,e(l).editComponent.headStyle=="style-3"]])]),_:1})]),n("div",We,[n("h3",je,r(e(d)("goodsSet")),1),o(T,{"label-width":"80px",class:"px-[10px]"},{default:t(()=>[o(u,{label:e(d)("sortWay")},{default:t(()=>[o(b,{modelValue:e(l).editComponent.sortWay,"onUpdate:modelValue":a[2]||(a[2]=s=>e(l).editComponent.sortWay=s)},{default:t(()=>[o(m,{label:"default"},{default:t(()=>[p(r(e(d)("default")),1)]),_:1}),o(m,{label:"sale_num"},{default:t(()=>[p(r(e(d)("sales")),1)]),_:1}),o(m,{label:"price"},{default:t(()=>[p(r(e(d)("price")),1)]),_:1})]),_:1},8,["modelValue"])]),_:1},8,["label"]),o(u,{label:e(d)("goodsNum")},{default:t(()=>[n("div",Me,[o(E,{class:"flex-1",modelValue:e(l).editComponent.num,"onUpdate:modelValue":a[3]||(a[3]=s=>e(l).editComponent.num=s),max:"20",size:"small"},null,8,["modelValue"]),n("span",Oe,r(e(l).editComponent.num),1)])]),_:1},8,["label"])]),_:1})]),n("div",Je,[n("h3",qe,r(e(d)("manyGoodsListCategorySet")),1),o(T,{"label-width":"80px",class:"px-[10px]"},{default:t(()=>[o(u,{label:e(d)("dataSources")},{default:t(()=>[o(b,{modelValue:e(l).editComponent.source,"onUpdate:modelValue":a[4]||(a[4]=s=>e(l).editComponent.source=s)},{default:t(()=>[o(m,{label:"custom"},{default:t(()=>[p(r(e(d)("manyGoodsListSourceDiy")),1)]),_:1}),o(m,{label:"goods_category"},{default:t(()=>[p(r(e(d)("manyGoodsListSourceCategory")),1)]),_:1})]),_:1},8,["modelValue"])]),_:1},8,["label"]),g(o(u,{label:e(d)("goodsCategoryTitle")},{default:t(()=>[o(L,{modelValue:e(l).editComponent.goods_category_name,"onUpdate:modelValue":a[5]||(a[5]=s=>e(l).editComponent.goods_category_name=s),placeholder:e(d)("selectCategory"),readonly:"",class:"select-diy-page-input",onClick:a[6]||(a[6]=s=>ee())},{suffix:t(()=>[n("div",{onClick:_e(oe,["stop"])},[e(l).editComponent.goods_category_name?(_(),x(z,{key:0},{default:t(()=>[o(re)]),_:1})):(_(),x(z,{key:1},{default:t(()=>[o(me)]),_:1}))],8,Ke)]),_:1},8,["modelValue","placeholder"])]),_:1},8,["label"]),[[C,e(l).editComponent.source=="goods_category"]]),g(n("div",null,[n("p",Xe,r(e(d)("dragMouseAdjustOrder")),1),n("div",{ref_key:"goodsBoxRef",ref:G},[(_(!0),D(J,null,fe(e(l).editComponent.list,(s,W)=>(_(),D("div",{key:s.id,class:"item-wrap p-[10px] pb-0 relative border border-dashed border-gray-300 mb-[16px]"},[o(u,{label:e(d)("manyGoodsListCategoryName")},{default:t(()=>[o(L,{modelValue:s.title,"onUpdate:modelValue":c=>s.title=c,clearable:"",maxlength:"4","show-word-limit":""},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1032,["label"]),g(o(u,{label:e(d)("manyGoodsListSubTitle")},{default:t(()=>[o(L,{modelValue:s.desc,"onUpdate:modelValue":c=>s.desc=c,clearable:"",maxlength:"5","show-word-limit":""},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1032,["label"]),[[C,e(l).editComponent.headStyle=="style-1"]]),o(u,{label:e(d)("goodsSelectPopupSelectGoodsButton")},{default:t(()=>[o(b,{modelValue:s.source,"onUpdate:modelValue":c=>s.source=c},{default:t(()=>[o(m,{label:"all"},{default:t(()=>[p(r(e(d)("goodsSelectPopupAllGoods")),1)]),_:1}),o(m,{label:"category"},{default:t(()=>[p(r(e(d)("selectCategory")),1)]),_:1}),o(m,{label:"custom"},{default:t(()=>[p(r(e(d)("manualSelectionSources")),1)]),_:1})]),_:2},1032,["modelValue","onUpdate:modelValue"])]),_:2},1032,["label"]),s.source=="category"?(_(),x(u,{key:0,label:e(d)("selectCategory")},{default:t(()=>[n("div",Ye,[n("div",{class:"cursor-pointer ml-auto",onClick:c=>de(W)},[n("span",He,r(s.goods_category_name),1),Qe],8,Ze)])]),_:2},1032,["label"])):q("",!0),s.source=="custom"?(_(),x(u,{key:1,label:e(d)("customGoods")},{default:t(()=>[o(Ge,{ref_for:!0,ref:"goodsSelectPopupRef",modelValue:s.goods_ids,"onUpdate:modelValue":c=>s.goods_ids=c,min:1,max:99},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1032,["label"])):q("",!0),g(o(u,{label:e(d)("image")},{default:t(()=>[o(ue,{modelValue:s.imageUrl,"onUpdate:modelValue":c=>s.imageUrl=c,limit:1},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1032,["label"]),[[C,e(l).editComponent.headStyle=="style-3"]]),g(n("div",{class:"del absolute cursor-pointer z-[2] top-[-8px] right-[-8px]",onClick:c=>e(l).editComponent.list.splice(W,1)},[o(pe,{name:"element CircleCloseFilled",color:"#bbb",size:"20px"})],8,eo),[[C,e(l).editComponent.list.length>1]])]))),128))],512),o(U,{class:"w-full",onClick:ie},{default:t(()=>[p(r(e(d)("manyGoodsLisAddItem")),1)]),_:1})],512),[[C,e(l).editComponent.source=="custom"]])]),_:1}),o(A,{modelValue:V.value,"onUpdate:modelValue":a[8]||(a[8]=s=>V.value=s),title:e(d)("goodsCategoryTitle"),width:"1000px","close-on-press-escape":!1,"destroy-on-close":!0,"close-on-click-modal":!1},{default:t(()=>[g((_(),x(e(K),{data:f.data,ref_key:"firstCategoryTableRef",ref:P,size:"large",height:"490px",onCurrentChange:le,"row-key":"category_id","highlight-current-row":""},{empty:t(()=>[n("span",null,r(f.loading?"":e(d)("emptyData")),1)]),default:t(()=>[o(R,{label:e(d)("categoryName"),"min-width":"120"},{default:t(({row:s})=>[n("span",oo,r(s.category_name),1)]),_:1},8,["label"]),o(R,{label:e(d)("categoryImage"),width:"170",align:"left"},{default:t(({row:s})=>[n("div",lo,[o($,{class:"w-[30px] h-[30px]",src:e(X)(s.image),fit:"contain"},{error:t(()=>[to]),_:2},1032,["src"])])]),_:1},8,["label"])]),_:1},8,["data"])),[[F,f.loading]]),n("div",ao,[o(U,{type:"primary",onClick:Q},{default:t(()=>[p(r(e(d)("confirm")),1)]),_:1}),o(U,{onClick:a[7]||(a[7]=s=>V.value=!1)},{default:t(()=>[p(r(e(d)("cancel")),1)]),_:1})])]),_:1},8,["modelValue","title"]),o(A,{modelValue:w.value,"onUpdate:modelValue":a[10]||(a[10]=s=>w.value=s),title:e(d)("goodsCategoryTitle"),width:"1000px","close-on-press-escape":!1,"destroy-on-close":!0,"close-on-click-modal":!1},{default:t(()=>[g((_(),x(e(K),{data:y.data,ref_key:"categoryTableRef",ref:S,size:"large",height:"490px",onSelectionChange:ae,"row-key":"category_id","expand-row-keys":N.value,"tree-props":{hasChildren:"hasChildren",children:"child_list"}},{empty:t(()=>[n("span",null,r(y.loading?"":e(d)("emptyData")),1)]),default:t(()=>[o(R,{type:"selection",width:"55"}),o(R,{label:e(d)("categoryName"),"min-width":"120"},{default:t(({row:s})=>[n("span",so,r(s.category_name),1)]),_:1},8,["label"]),o(R,{label:e(d)("categoryImage"),width:"170",align:"left"},{default:t(({row:s})=>[n("div",no,[o($,{class:"w-[30px] h-[30px]",src:e(X)(s.image),fit:"contain"},{error:t(()=>[io]),_:2},1032,["src"])])]),_:1},8,["label"])]),_:1},8,["data","expand-row-keys"])),[[F,y.loading]]),n("div",ro,[o(U,{type:"primary",onClick:se},{default:t(()=>[p(r(e(d)("confirm")),1)]),_:1}),o(U,{onClick:a[9]||(a[9]=s=>w.value=!1)},{default:t(()=>[p(r(e(d)("cancel")),1)]),_:1})])]),_:1},8,["modelValue","title"])])],512),[[C,e(l).editTab=="content"]]),g(n("div",mo,[n("div",uo,[n("h3",po,r(e(d)("goodsStyle")),1),o(T,{"label-width":"80px",class:"px-[10px]"},{default:t(()=>[o(u,{label:e(d)("goodsBgColor")},{default:t(()=>[o(B,{modelValue:e(l).editComponent.elementBgColor,"onUpdate:modelValue":a[11]||(a[11]=s=>e(l).editComponent.elementBgColor=s),"show-alpha":"",predefine:e(l).predefineColors},null,8,["modelValue","predefine"])]),_:1},8,["label"]),o(u,{label:e(d)("goodsNameColor")},{default:t(()=>[o(B,{modelValue:e(l).editComponent.goodsNameStyle.color,"onUpdate:modelValue":a[12]||(a[12]=s=>e(l).editComponent.goodsNameStyle.color=s),"show-alpha":"",predefine:e(l).predefineColors},null,8,["modelValue","predefine"]),co,o(b,{modelValue:e(l).editComponent.goodsNameStyle.fontWeight,"onUpdate:modelValue":a[13]||(a[13]=s=>e(l).editComponent.goodsNameStyle.fontWeight=s)},{default:t(()=>[o(m,{label:"normal"},{default:t(()=>[p(r(e(d)("fontWeightNormal")),1)]),_:1}),o(m,{label:"bold"},{default:t(()=>[p(r(e(d)("fontWeightBold")),1)]),_:1})]),_:1},8,["modelValue"])]),_:1},8,["label"]),o(u,{label:e(d)("goodsPriceColor")},{default:t(()=>[o(B,{modelValue:e(l).editComponent.priceStyle.mainColor,"onUpdate:modelValue":a[14]||(a[14]=s=>e(l).editComponent.priceStyle.mainColor=s),"show-alpha":"",predefine:e(l).predefineColors},null,8,["modelValue","predefine"])]),_:1},8,["label"]),o(u,{label:e(d)("goodsSaleColor")},{default:t(()=>[o(B,{modelValue:e(l).editComponent.saleStyle.color,"onUpdate:modelValue":a[15]||(a[15]=s=>e(l).editComponent.saleStyle.color=s),"show-alpha":"",predefine:e(l).predefineColors},null,8,["modelValue","predefine"])]),_:1},8,["label"]),o(u,{label:e(d)("topRounded")},{default:t(()=>[o(E,{modelValue:e(l).editComponent.topElementRounded,"onUpdate:modelValue":a[16]||(a[16]=s=>e(l).editComponent.topElementRounded=s),"show-input":"",size:"small",class:"ml-[10px] graphic-nav-slider",max:50},null,8,["modelValue"])]),_:1},8,["label"]),o(u,{label:e(d)("bottomRounded")},{default:t(()=>[o(E,{modelValue:e(l).editComponent.bottomElementRounded,"onUpdate:modelValue":a[17]||(a[17]=s=>e(l).editComponent.bottomElementRounded=s),"show-input":"",size:"small",class:"ml-[10px] graphic-nav-slider",max:50},null,8,["modelValue"])]),_:1},8,["label"])]),_:1})]),ye(i.$slots,"style")],512),[[C,e(l).editTab=="style"]])],64)}}}),Mo=Object.freeze(Object.defineProperty({__proto__:null,default:go},Symbol.toStringTag,{value:"Module"}));export{Mo as _};
