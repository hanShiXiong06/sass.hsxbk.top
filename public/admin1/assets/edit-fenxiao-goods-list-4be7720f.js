import{d as I,q as n,r as V,n as G,aQ as A,h as b,c as L,P as w,a6 as R,u as e,a as i,t as r,v as S,e as l,w as a,i as p,s as k,B as U,ac as O,A as M,b as q,F as K,a$ as Q,az as H,aA as J,K as X,bx as Y,L as Z,aa as ee,I as oe,E as te,a1 as le,bt as ae,U as ne}from"./index-17984968.js";/* empty css                   *//* empty css                        *//* empty css                 *//* empty css                  *//* empty css                  *//* empty css                   *//* empty css                 *//* empty css                        *//* empty css                        *//* empty css                    *//* empty css               *//* empty css                *//* empty css                  *//* empty css                        */import"./el-tooltip-4ed993c7.js";/* empty css                  */import"./el-form-item-4ed993c7.js";/* empty css                       *//* empty css                 */import{_ as se}from"./category_default-03996666.js";import{g as ie}from"./goods-e571a7e7.js";import{u as de}from"./diy-aad9db9a.js";const re={class:"content-wrap"},me={class:"edit-attr-item-wrap"},pe={class:"mb-[10px]"},ce={class:"flex items-center mb-[18px] rounded overflow-hidden"},ue={class:"edit-attr-item-wrap"},_e={class:"mb-[10px]"},ge={class:"flex items-center w-full"},fe={class:"text-[var(--el-color-primary)]"},ye=i("span",{class:"iconfont iconxiangyoujiantou"},null,-1),be={class:"flex items-center w-full ml-[5px]"},Ce={class:"ml-[15px]"},xe={class:"text-sm text-gray-400 mb-[10px]"},he={class:"order-2"},ve={class:"h-[30px]"},Ve=i("div",{class:"image-slot"},[i("img",{class:"w-[30px] h-[30px]",src:se})],-1),we={class:"flex items-center justify-end mt-[15px]"},Se={class:"style-wrap"},ke={class:"edit-attr-item-wrap"},Ee={class:"mb-[10px]"},Be=i("div",{class:"mr-[20px]"},null,-1),Re=I({__name:"edit-fenxiao-goods-list",setup(Ue,{expose:N}){const o=de();o.editComponent.ignore=[],o.editComponent.verify=d=>{const t={code:!0,message:""};return o.value[d].source=="category"?o.value[d].goods_category==""&&(t.code=!1,t.message=n("goodsCategoryPlaceholder")):o.value[d].source=="custom"&&o.value[d].goods_ids.length==0&&(t.code=!1,t.message=n("goodsPlaceholder")),t};const _=V(!1),c=G({loading:!0,data:[],searchParam:{category_name:""}});A(()=>{P()});const g=V();let C=null;const P=()=>{c.loading=!0,ie({...c.searchParam}).then(d=>{c.loading=!1,c.data=d.data}).catch(()=>{c.loading=!1})},T=d=>{let t="";d&&(t=d[d.length-1]),d.length>1&&g.value.clearSelection(),t&&g.value.toggleRowSelection(t,!0),C=t},D=()=>{o.editComponent.goods_category=C.category_id,o.editComponent.goods_category_name=C.category_name,_.value=!1},z=()=>{_.value=!0,Q(()=>{j()})},x=V([76]),j=()=>{x.value=[],c.data.forEach(d=>{o.editComponent.goods_category==d.category_id?g.value.toggleRowSelection(d,!0):d.child_list&&d.child_list.length&&d.child_list.forEach(t=>{o.editComponent.goods_category==t.category_id&&(x.value.push(d.category_id.toString()),g.value.toggleRowSelection(t,!0))})})};return N({}),(d,t)=>{const u=H,f=J,m=X,h=Y,E=Z,v=ee,W=oe,B=te,F=le,y=ae,$=ne;return b(),L(K,null,[w(i("div",re,[i("div",me,[i("h3",pe,r(e(n)("selectStyle")),1),i("div",ce,[i("span",{class:S(["iconfont icongudingzhanshi border-[1px] border-solid border-[#eee] cursor-pointer flex-1 flex items-center justify-center py-[5px]",{"border-[var(--el-color-primary)] text-[var(--el-color-primary)]":e(o).editComponent.style=="style-1"}]),onClick:t[0]||(t[0]=s=>e(o).editComponent.style="style-1")},null,2),i("span",{class:S(["iconfont icontuwendaohang3 border-[1px] border-solid border-[#eee] cursor-pointer flex-1 flex items-center justify-center py-[5px]",{"border-[var(--el-color-primary)] text-[var(--el-color-primary)]":e(o).editComponent.style=="style-2"}]),onClick:t[1]||(t[1]=s=>e(o).editComponent.style="style-2")},null,2),i("span",{class:S(["iconfont iconshangpinliebiaohengxianghuadong border-[1px] border-solid border-[#eee] cursor-pointer flex-1 flex items-center justify-center py-[5px]",{"border-[var(--el-color-primary)] text-[var(--el-color-primary)]":e(o).editComponent.style=="style-3"}]),onClick:t[2]||(t[2]=s=>e(o).editComponent.style="style-3")},null,2)])]),i("div",ue,[i("h3",_e,r(e(n)("selectSource")),1),l(E,{"label-width":"90px",class:"px-[10px]"},{default:a(()=>[l(m,{label:e(n)("sortWay")},{default:a(()=>[l(f,{modelValue:e(o).editComponent.sortWay,"onUpdate:modelValue":t[3]||(t[3]=s=>e(o).editComponent.sortWay=s)},{default:a(()=>[l(u,{label:"default"},{default:a(()=>[p(r(e(n)("default")),1)]),_:1}),l(u,{label:"sale_num"},{default:a(()=>[p(r(e(n)("sales")),1)]),_:1}),l(u,{label:"price"},{default:a(()=>[p(r(e(n)("price")),1)]),_:1})]),_:1},8,["modelValue"])]),_:1},8,["label"]),l(m,{label:e(n)("goodsSelectPopupSelectGoodsButton")},{default:a(()=>[l(f,{modelValue:e(o).editComponent.source,"onUpdate:modelValue":t[4]||(t[4]=s=>e(o).editComponent.source=s),title:e(n)("goodsSelectPopupSelectGoodsButton")},{default:a(()=>[l(u,{label:"all"},{default:a(()=>[p(r(e(n)("goodsSelectPopupAllGoods")),1)]),_:1}),l(u,{label:"category"},{default:a(()=>[p(r(e(n)("selectCategory")),1)]),_:1})]),_:1},8,["modelValue","title"])]),_:1},8,["label"]),e(o).editComponent.source=="category"?(b(),k(m,{key:0,label:e(n)("selectCategory")},{default:a(()=>[i("div",ge,[i("div",{class:"cursor-pointer ml-auto",onClick:z},[i("span",fe,r(e(o).editComponent.goods_category_name),1),ye])])]),_:1},8,["label"])):U("",!0),e(o).editComponent.source=="all"||e(o).editComponent.source=="category"?(b(),k(m,{key:1,label:e(n)("goodsNum")},{default:a(()=>[i("div",be,[l(h,{class:"flex-1",modelValue:e(o).editComponent.num,"onUpdate:modelValue":t[5]||(t[5]=s=>e(o).editComponent.num=s),max:"30",size:"small"},null,8,["modelValue"]),i("span",Ce,r(e(o).editComponent.num),1)])]),_:1},8,["label"])):U("",!0),l(m,{label:e(n)("isBecomeFenxiao")},{default:a(()=>[l(f,{modelValue:e(o).editComponent.is_become_fenxiao,"onUpdate:modelValue":t[6]||(t[6]=s=>e(o).editComponent.is_become_fenxiao=s)},{default:a(()=>[l(u,{label:"1"},{default:a(()=>[p(r(e(n)("are")),1)]),_:1}),l(u,{label:"2"},{default:a(()=>[p(r(e(n)("no")),1)]),_:1})]),_:1},8,["modelValue"]),i("div",xe,r(e(n)("isBecomeFenxiaoDesc")),1)]),_:1},8,["label"])]),_:1}),l(F,{modelValue:_.value,"onUpdate:modelValue":t[8]||(t[8]=s=>_.value=s),title:e(n)("goodsCategoryTitle"),width:"1000px","close-on-press-escape":!1,"destroy-on-close":!0,"close-on-click-modal":!1},{default:a(()=>[w((b(),k(e(O),{data:c.data,ref_key:"categoryTableRef",ref:g,size:"large",height:"490px",onSelectionChange:T,"row-key":"category_id","expand-row-keys":x.value,"tree-props":{hasChildren:"hasChildren",children:"child_list"}},{empty:a(()=>[i("span",null,r(c.loading?"":e(n)("emptyData")),1)]),default:a(()=>[l(v,{type:"selection",width:"55"}),l(v,{label:e(n)("categoryName"),"min-width":"120"},{default:a(({row:s})=>[i("span",he,r(s.category_name),1)]),_:1},8,["label"]),l(v,{label:e(n)("categoryImage"),width:"170",align:"left"},{default:a(({row:s})=>[i("div",ve,[l(W,{class:"w-[30px] h-[30px]",src:e(M)(s.image),fit:"contain"},{error:a(()=>[Ve]),_:2},1032,["src"])])]),_:1},8,["label"])]),_:1},8,["data","expand-row-keys"])),[[$,c.loading]]),i("div",we,[l(B,{type:"primary",onClick:D},{default:a(()=>[p(r(e(n)("confirm")),1)]),_:1}),l(B,{onClick:t[7]||(t[7]=s=>_.value=!1)},{default:a(()=>[p(r(e(n)("cancel")),1)]),_:1})])]),_:1},8,["modelValue","title"])])],512),[[R,e(o).editTab=="content"]]),w(i("div",Se,[i("div",ke,[i("h3",Ee,r(e(n)("goodsStyle")),1),l(E,{"label-width":"80px",class:"px-[10px]"},{default:a(()=>[l(m,{label:e(n)("goodsBgColor")},{default:a(()=>[l(y,{modelValue:e(o).editComponent.elementBgColor,"onUpdate:modelValue":t[9]||(t[9]=s=>e(o).editComponent.elementBgColor=s),"show-alpha":"",predefine:e(o).predefineColors},null,8,["modelValue","predefine"])]),_:1},8,["label"]),l(m,{label:e(n)("goodsNameColor")},{default:a(()=>[l(y,{modelValue:e(o).editComponent.goodsNameStyle.color,"onUpdate:modelValue":t[10]||(t[10]=s=>e(o).editComponent.goodsNameStyle.color=s),"show-alpha":"",predefine:e(o).predefineColors},null,8,["modelValue","predefine"]),Be,l(f,{modelValue:e(o).editComponent.goodsNameStyle.fontWeight,"onUpdate:modelValue":t[11]||(t[11]=s=>e(o).editComponent.goodsNameStyle.fontWeight=s)},{default:a(()=>[l(u,{label:"normal"},{default:a(()=>[p(r(e(n)("fontWeightNormal")),1)]),_:1}),l(u,{label:"bold"},{default:a(()=>[p(r(e(n)("fontWeightBold")),1)]),_:1})]),_:1},8,["modelValue"])]),_:1},8,["label"]),l(m,{label:e(n)("goodsPriceColor")},{default:a(()=>[l(y,{modelValue:e(o).editComponent.priceStyle.mainColor,"onUpdate:modelValue":t[12]||(t[12]=s=>e(o).editComponent.priceStyle.mainColor=s),"show-alpha":"",predefine:e(o).predefineColors},null,8,["modelValue","predefine"])]),_:1},8,["label"]),l(m,{label:e(n)("fenxiaoCommissionPriceColor")},{default:a(()=>[l(y,{modelValue:e(o).editComponent.commissionStyle.color,"onUpdate:modelValue":t[13]||(t[13]=s=>e(o).editComponent.commissionStyle.color=s),"show-alpha":"",predefine:e(o).predefineColors},null,8,["modelValue","predefine"])]),_:1},8,["label"]),l(m,{label:e(n)("topRounded")},{default:a(()=>[l(h,{modelValue:e(o).editComponent.topElementRounded,"onUpdate:modelValue":t[14]||(t[14]=s=>e(o).editComponent.topElementRounded=s),"show-input":"",size:"small",class:"ml-[10px] graphic-nav-slider",max:50},null,8,["modelValue"])]),_:1},8,["label"]),l(m,{label:e(n)("bottomRounded")},{default:a(()=>[l(h,{modelValue:e(o).editComponent.bottomElementRounded,"onUpdate:modelValue":t[15]||(t[15]=s=>e(o).editComponent.bottomElementRounded=s),"show-input":"",size:"small",class:"ml-[10px] graphic-nav-slider",max:50},null,8,["modelValue"])]),_:1},8,["label"])]),_:1})]),q(d.$slots,"style")],512),[[R,e(o).editTab=="style"]])],64)}}}),eo=Object.freeze(Object.defineProperty({__proto__:null,default:Re},Symbol.toStringTag,{value:"Module"}));export{eo as _};