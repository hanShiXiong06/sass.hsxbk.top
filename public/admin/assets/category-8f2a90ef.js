import{d as z,x as A,cC as O,n as Y,aJ as H,a$ as K,r as T,bu as I,f as Q,h as S,c as U,e as s,w as l,a as m,t as u,u as i,i as b,q as n,R as W,s as X,A as Z,a4 as ee,E as te,aw as oe,ax as ae,ab as se,J as ne,aj as re,ac as le,a6 as ie,Y as ce,p as de,g as pe}from"./index-f7a01263.js";/* empty css                   *//* empty css                *//* empty css                 *//* empty css                    */import"./el-tooltip-4ed993c7.js";/* empty css                  *//* empty css                     *//* empty css               *//* empty css                 *//* empty css                        *//* empty css                        *//* empty css                    *//* empty css                  */import{_ as _e}from"./category_default-03996666.js";import{g as me,u as ge,q as ue,r as fe}from"./goods-d18d2d10.js";import{_ as he}from"./category-edit.vue_vue_type_style_index_0_lang-acd143d3.js";import{_ as ye}from"./goods-category-spread-popup.vue_vue_type_script_setup_true_lang-e8681201.js";import{S as be}from"./sortable.esm-be94e56d.js";import{_ as ve}from"./_plugin-vue_export-helper-c27b6911.js";/* empty css                  *//* empty css                   *//* empty css                     *//* empty css                  */import"./index-e6c6f5a6.js";import"./index.vue_vue_type_style_index_0_lang-0595c85c.js";import"./attachment-893e498c.js";import"./index.vue_vue_type_script_setup_true_lang-473c7dda.js";/* empty css                 *//* empty css                  *//* empty css                  *//* empty css                      *//* empty css               *//* empty css               *//* empty css                    *//* empty css                    */import"./el-dropdown-item-4ed993c7.js";import"./index.vue_vue_type_script_setup_true_lang-a36ce1b6.js";/* empty css                   */import"./index.vue_vue_type_script_setup_true_lang-73e73d1c.js";import"./browser-a1ac24ac.js";const B=v=>(de("data-v-474e046b"),v=v(),pe(),v),xe={class:"main-container"},Ce={class:"flex justify-between items-center mb-[5px]"},we={class:"text-page-title"},ke={class:"mt-[10px]"},Ee=B(()=>m("i",{class:"order-0 iconfont icontuodong vues-rank mr-[8px]"},null,-1)),Te={class:"order-2"},Ie={class:"h-[30px]"},Re=B(()=>m("div",{class:"image-slot"},[m("img",{class:"w-[30px] h-[30px]",src:_e})],-1)),De=z({__name:"category",setup(v){const $=A().meta.title,R=O(),o=Y({loading:!0,data:[],searchParam:{category_name:""}});H(()=>{K(()=>{N()}),C()});const _=T([]),N=()=>{const e=R.value.$el.querySelector(".el-table__body-wrapper tbody");be.create(e,{handle:".vues-rank",animation:300,onMove:({dragged:r,related:c})=>{const d=_.value[r.rowIndex],g=_.value[c.rowIndex];if(d.pid!==g.pid)return!1},onStart:()=>{_.value=P(I(o.data))},onEnd:r=>{var x;const c=_.value[r.oldIndex],d=_.value[r.newIndex];if(r.oldIndex===r.newIndex||c.pid!==d.pid||_.value.indexOf(c)<0)return!1;const a=_.value.splice(r.oldIndex,1)[0];_.value.splice(r.newIndex,0,a);const w=d.pid,k=(x=_.value.filter(p=>p.pid===w))==null?void 0:x.map((p,h)=>{if(p.level===1&&p.category_id===a.category_id&&(o.data=o.data.filter(t=>t.category_id!==a.category_id),o.data.splice(h,0,a)),p.level===2&&p.category_id===a.category_id){const t=o.data.findIndex(E=>E.category_id===p.pid),y=I(o.data[t].child_list.filter(E=>E.category_id!==a.category_id));o.data[t].child_list=[],o.data[t].child_list.push(...y),o.data[t].child_list.splice(h,0,a)}return{category_id:p.category_id,sort:9999-h}});j({category_sort_array:k})}})},P=(e,r="child_list")=>{const c=[],d=g=>{g&&g.length>0&&g.filter(a=>a).forEach(a=>{c.push(a),d(a[r]||[])})};return d(e),c},C=()=>{o.loading=!0,me({...o.searchParam}).then(e=>{o.loading=!1,o.data=e.data}).catch(()=>{o.loading=!1})},j=e=>{ge(e).then(r=>{})},q=e=>{e.is_show=e.is_show===1?2:1;const r=I(e);delete r.child_list,ue(r)},f=T(null),F=()=>{f.value.setFormData(),f.value.showDialog=!0},G=e=>{f.value.setFormData(e),f.value.showDialog=!0},L=e=>{ee.confirm(!e.child_list||!e.child_list.length?n("categoryDeleteTips"):n("categoryDeleteTips1"),n("warning"),{confirmButtonText:n("confirm"),cancelButtonText:n("cancel"),type:"warning"}).then(()=>{fe(e.category_id).then(()=>{C()}).catch(()=>{})})},D=T(null),M=e=>{D.value.show(e)},V=Q(),J=e=>{V.push({path:e})};return(e,r)=>{const c=te,d=oe,g=ae,a=se,w=ne,k=re,x=le,p=ie,h=ce;return S(),U("div",xe,[s(p,{class:"box-card !border-none",shadow:"never"},{default:l(()=>[m("div",Ce,[m("span",we,u(i($)),1),s(c,{type:"primary",onClick:F},{default:l(()=>[b(u(i(n)("addCategory")),1)]),_:1})]),s(g,{class:"demo-tabs","model-value":"/shop/goods/category",onTabChange:J},{default:l(()=>[s(d,{label:i(n)("tabGoodsCategory"),name:"/shop/goods/category"},null,8,["label"]),s(d,{label:i(n)("tabGoodsCategoryConfig"),name:"/shop/goods/category/config"},null,8,["label"])]),_:1}),m("div",ke,[W((S(),X(x,{data:o.data,ref_key:"tableRef",ref:R,size:"large","row-key":"category_id","tree-props":{hasChildren:"hasChildren",children:"child_list"}},{empty:l(()=>[m("span",null,u(o.loading?"":i(n)("emptyData")),1)]),default:l(()=>[s(a,{label:i(n)("categoryName"),"min-width":"120"},{default:l(({row:t})=>[Ee,m("span",Te,u(t.category_name),1)]),_:1},8,["label"]),s(a,{label:i(n)("image"),width:"170",align:"left"},{default:l(({row:t})=>[m("div",Ie,[s(w,{class:"w-[30px] h-[30px]",src:i(Z)(t.image),fit:"contain"},{error:l(()=>[Re]),_:2},1032,["src"])])]),_:1},8,["label"]),s(a,{prop:"is_show",label:i(n)("isShow"),width:"400"},{default:l(({row:t})=>[s(k,{class:"cursor-pointer",type:t.is_show!=2?"success":"danger",onClick:y=>q(t)},{default:l(()=>[b(u(t.is_show!=2?"是":"否"),1)]),_:2},1032,["type","onClick"])]),_:1},8,["label"]),s(a,{label:i(n)("operation"),fixed:"right",align:"right",width:"200"},{default:l(({row:t})=>[s(c,{type:"primary",link:"",onClick:y=>M(t)},{default:l(()=>[b(u(i(n)("spreadGoodsCategory")),1)]),_:2},1032,["onClick"]),s(c,{type:"primary",link:"",onClick:y=>G(t)},{default:l(()=>[b(u(i(n)("edit")),1)]),_:2},1032,["onClick"]),s(c,{type:"primary",link:"",onClick:y=>L(t)},{default:l(()=>[b(u(i(n)("delete")),1)]),_:2},1032,["onClick"])]),_:1},8,["label"])]),_:1},8,["data"])),[[h,o.loading]])]),s(he,{ref_key:"editCategoryDialog",ref:f,onComplete:C},null,512)]),_:1}),s(ye,{ref_key:"goodsCategorySpreadPopupRef",ref:D},null,512)])}}});const yt=ve(De,[["__scopeId","data-v-474e046b"]]);export{yt as default};
