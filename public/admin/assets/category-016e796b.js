import{d as J,x as z,cA as O,n as Y,aJ as H,a$ as K,r as T,a3 as I,f as Q,h as S,c as U,e as s,w as i,a as m,t as u,u as r,i as v,q as n,R as W,s as X,A as Z,a5 as ee,E as te,ax as oe,ay as ae,ac as se,J as ne,ak as le,ad as ie,a7 as re,Y as ce,p as de,g as pe}from"./index-5a756a51.js";/* empty css                   *//* empty css                *//* empty css                 *//* empty css                    */import"./el-tooltip-4ed993c7.js";/* empty css                  *//* empty css                     *//* empty css               *//* empty css                 *//* empty css                        *//* empty css                        *//* empty css                    *//* empty css                  */import{_ as _e}from"./category_default-57987dd3.js";import{g as me,u as ge,e as ue,d as fe}from"./questions-9e82e6a4.js";import{_ as he}from"./category-edit.vue_vue_type_style_index_0_lang-43799c93.js";import{_ as ye}from"./questions-category-spread-popup.vue_vue_type_script_setup_true_lang-d1461cc2.js";import{S as ve}from"./sortable.esm-be94e56d.js";import{_ as be}from"./_plugin-vue_export-helper-c27b6911.js";/* empty css                  *//* empty css                   *//* empty css                *//* empty css                  */import"./index-92c2e799.js";import"./index.vue_vue_type_style_index_0_lang-c0b4b1fc.js";import"./attachment-a9811edd.js";import"./index.vue_vue_type_script_setup_true_lang-cb419dfd.js";import"./el-form-item-4ed993c7.js";/* empty css                 *//* empty css                  *//* empty css                  *//* empty css                      *//* empty css               *//* empty css               *//* empty css                    *//* empty css                    */import"./el-dropdown-item-4ed993c7.js";import"./index.vue_vue_type_script_setup_true_lang-477c25f7.js";/* empty css                   */import"./index.vue_vue_type_script_setup_true_lang-75313763.js";import"./browser-a1ac24ac.js";const B=b=>(de("data-v-35d300a9"),b=b(),pe(),b),xe={class:"main-container"},Ce={class:"flex justify-between items-center mb-[5px]"},we={class:"text-page-title"},ke={class:"mt-[10px]"},Ee=B(()=>m("i",{class:"order-0 iconfont icontuodong vues-rank mr-[8px]"},null,-1)),Te={class:"order-2"},Ie={class:"h-[30px]"},Re=B(()=>m("div",{class:"image-slot"},[m("img",{class:"w-[30px] h-[30px]",src:_e})],-1)),De=J({__name:"category",setup(b){const $=z().meta.title,R=O(),a=Y({loading:!0,data:[]});H(()=>{K(()=>{N()}),C()});const _=T([]),N=()=>{const e=R.value.$el.querySelector(".el-table__body-wrapper tbody");ve.create(e,{handle:".vues-rank",animation:300,onMove:({dragged:l,related:c})=>{const d=_.value[l.rowIndex],g=_.value[c.rowIndex];if(d.pid!==g.pid)return!1},onStart:()=>{_.value=j(I(a.data))},onEnd:l=>{var x;const c=_.value[l.oldIndex],d=_.value[l.newIndex];if(l.oldIndex===l.newIndex||c.pid!==d.pid||_.value.indexOf(c)<0)return!1;const o=_.value.splice(l.oldIndex,1)[0];_.value.splice(l.newIndex,0,o);const w=d.pid,k=(x=_.value.filter(p=>p.pid===w))==null?void 0:x.map((p,h)=>{if(p.level===1&&p.category_id===o.category_id&&(a.data=a.data.filter(t=>t.category_id!==o.category_id),a.data.splice(h,0,o)),p.level===2&&p.category_id===o.category_id){const t=a.data.findIndex(E=>E.category_id===p.pid),y=I(a.data[t].child_list.filter(E=>E.category_id!==o.category_id));a.data[t].child_list=[],a.data[t].child_list.push(...y),a.data[t].child_list.splice(h,0,o)}return{category_id:p.category_id,sort:9999-h}});F({category_sort_array:k})}})},j=(e,l="child_list")=>{const c=[],d=g=>{g&&g.length>0&&g.filter(o=>o).forEach(o=>{c.push(o),d(o[l]||[])})};return d(e),c},C=()=>{a.loading=!0,me().then(e=>{a.loading=!1,a.data=e.data}).catch(()=>{a.loading=!1})},F=e=>{ge(e).then(l=>{})},G=e=>{e.is_show=e.is_show===1?2:1;const l=I(e);delete l.child_list,ue(l)},f=T(null),L=()=>{f.value.setFormData(),f.value.showDialog=!0},M=e=>{f.value.setFormData(e),f.value.showDialog=!0},P=e=>{ee.confirm(!e.child_list||!e.child_list.length?n("categoryDeleteTips"):n("categoryDeleteTips1"),n("warning"),{confirmButtonText:n("confirm"),cancelButtonText:n("cancel"),type:"warning"}).then(()=>{fe(e.category_id).then(()=>{C()}).catch(()=>{})})},D=T(null),V=e=>{D.value.show(e)},q=Q(),A=e=>{q.push({path:e})};return(e,l)=>{const c=te,d=oe,g=ae,o=se,w=ne,k=le,x=ie,p=re,h=ce;return S(),U("div",xe,[s(p,{class:"box-card !border-none",shadow:"never"},{default:i(()=>[m("div",Ce,[m("span",we,u(r($)),1),s(c,{type:"primary",onClick:L},{default:i(()=>[v(u(r(n)("addCategory")),1)]),_:1})]),s(g,{class:"demo-tabs","model-value":"/shop/goods/category",onTabChange:A},{default:i(()=>[s(d,{label:r(n)("tabGoodsCategory"),name:"/shop/goods/category"},null,8,["label"]),s(d,{label:r(n)("tabGoodsCategoryConfig"),name:"/shop/goods/category/config"},null,8,["label"])]),_:1}),m("div",ke,[W((S(),X(x,{data:a.data,ref_key:"tableRef",ref:R,size:"large","row-key":"category_id","tree-props":{hasChildren:"hasChildren",children:"child_list"}},{empty:i(()=>[m("span",null,u(a.loading?"":r(n)("emptyData")),1)]),default:i(()=>[s(o,{label:r(n)("categoryName"),"min-width":"120"},{default:i(({row:t})=>[Ee,m("span",Te,u(t.category_name),1)]),_:1},8,["label"]),s(o,{label:r(n)("image"),width:"170",align:"left"},{default:i(({row:t})=>[m("div",Ie,[s(w,{class:"w-[30px] h-[30px]",src:r(Z)(t.image),fit:"contain"},{error:i(()=>[Re]),_:2},1032,["src"])])]),_:1},8,["label"]),s(o,{prop:"is_show",label:r(n)("isShow"),width:"400"},{default:i(({row:t})=>[s(k,{class:"cursor-pointer",type:t.is_show!=2?"success":"danger",onClick:y=>G(t)},{default:i(()=>[v(u(t.is_show!=2?"是":"否"),1)]),_:2},1032,["type","onClick"])]),_:1},8,["label"]),s(o,{label:r(n)("operation"),fixed:"right",align:"right",width:"200"},{default:i(({row:t})=>[s(c,{type:"primary",link:"",onClick:y=>V(t)},{default:i(()=>[v(u(r(n)("spreadGoodsCategory")),1)]),_:2},1032,["onClick"]),s(c,{type:"primary",link:"",onClick:y=>M(t)},{default:i(()=>[v(u(r(n)("edit")),1)]),_:2},1032,["onClick"]),s(c,{type:"primary",link:"",onClick:y=>P(t)},{default:i(()=>[v(u(r(n)("delete")),1)]),_:2},1032,["onClick"])]),_:1},8,["label"])]),_:1},8,["data"])),[[h,a.loading]])]),s(he,{ref_key:"editCategoryDialog",ref:f,onComplete:C},null,512)]),_:1}),s(ye,{ref_key:"goodsCategorySpreadPopupRef",ref:D},null,512)])}}});const vt=be(De,[["__scopeId","data-v-35d300a9"]]);export{vt as default};
