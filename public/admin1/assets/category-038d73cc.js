import{d as A,x as O,cy as Q,n as U,aQ as H,a$ as J,r as T,bs as I,f as K,h as S,c as W,e as s,w as l,a as m,t as u,u as i,i as v,q as r,P as X,s as Y,A as Z,_ as ee,E as te,aD as oe,aE as ae,aa as se,I as re,aq as ne,ac as le,a0 as ie,U as ce,p as de,g as pe}from"./index-17984968.js";/* empty css                   *//* empty css                *//* empty css                 *//* empty css                    *//* empty css               */import"./el-tooltip-4ed993c7.js";/* empty css                  *//* empty css                     *//* empty css                 *//* empty css                        *//* empty css                        *//* empty css                    *//* empty css                  */import{_ as _e}from"./category_default-03996666.js";import{g as me,u as ge,q as ue,r as fe}from"./goods-e571a7e7.js";import{_ as he}from"./category-edit.vue_vue_type_style_index_0_lang-41bc7392.js";import{_ as ye}from"./goods-category-spread-popup.vue_vue_type_script_setup_true_lang-7cee3772.js";import{S as ve}from"./sortable.esm-be94e56d.js";import{_ as be}from"./_plugin-vue_export-helper-c27b6911.js";/* empty css                  *//* empty css                   *//* empty css                *//* empty css                  */import"./index-0ce1f7fc.js";import"./index.vue_vue_type_style_index_0_lang-c5bcb8a9.js";import"./attachment-a816d3ef.js";import"./index.vue_vue_type_script_setup_true_lang-8693344a.js";import"./el-form-item-4ed993c7.js";/* empty css                 *//* empty css                  *//* empty css                  *//* empty css                      *//* empty css                 *//* empty css               *//* empty css               *//* empty css                    *//* empty css                         */import"./index.vue_vue_type_script_setup_true_lang-5615c67a.js";/* empty css                   */import"./index.vue_vue_type_script_setup_true_lang-8e50df98.js";/* empty css                */import"./browser-a1ac24ac.js";const B=b=>(de("data-v-474e046b"),b=b(),pe(),b),xe={class:"main-container"},Ce={class:"flex justify-between items-center mb-[5px]"},we={class:"text-page-title"},ke={class:"mt-[10px]"},Ee=B(()=>m("i",{class:"order-0 iconfont icontuodong vues-rank mr-[8px]"},null,-1)),Te={class:"order-2"},Ie={class:"h-[30px]"},De=B(()=>m("div",{class:"image-slot"},[m("img",{class:"w-[30px] h-[30px]",src:_e})],-1)),Re=A({__name:"category",setup(b){const $=O().meta.title,D=Q(),o=U({loading:!0,data:[],searchParam:{category_name:""}});H(()=>{J(()=>{P()}),C()});const _=T([]),P=()=>{const e=D.value.$el.querySelector(".el-table__body-wrapper tbody");ve.create(e,{handle:".vues-rank",animation:300,onMove:({dragged:n,related:c})=>{const d=_.value[n.rowIndex],g=_.value[c.rowIndex];if(d.pid!==g.pid)return!1},onStart:()=>{_.value=N(I(o.data))},onEnd:n=>{var x;const c=_.value[n.oldIndex],d=_.value[n.newIndex];if(n.oldIndex===n.newIndex||c.pid!==d.pid||_.value.indexOf(c)<0)return!1;const a=_.value.splice(n.oldIndex,1)[0];_.value.splice(n.newIndex,0,a);const w=d.pid,k=(x=_.value.filter(p=>p.pid===w))==null?void 0:x.map((p,h)=>{if(p.level===1&&p.category_id===a.category_id&&(o.data=o.data.filter(t=>t.category_id!==a.category_id),o.data.splice(h,0,a)),p.level===2&&p.category_id===a.category_id){const t=o.data.findIndex(E=>E.category_id===p.pid),y=I(o.data[t].child_list.filter(E=>E.category_id!==a.category_id));o.data[t].child_list=[],o.data[t].child_list.push(...y),o.data[t].child_list.splice(h,0,a)}return{category_id:p.category_id,sort:9999-h}});q({category_sort_array:k})}})},N=(e,n="child_list")=>{const c=[],d=g=>{g&&g.length>0&&g.filter(a=>a).forEach(a=>{c.push(a),d(a[n]||[])})};return d(e),c},C=()=>{o.loading=!0,me({...o.searchParam}).then(e=>{o.loading=!1,o.data=e.data}).catch(()=>{o.loading=!1})},q=e=>{ge(e).then(n=>{})},j=e=>{e.is_show=e.is_show===1?2:1;const n=I(e);delete n.child_list,ue(n)},f=T(null),F=()=>{f.value.setFormData(),f.value.showDialog=!0},G=e=>{f.value.setFormData(e),f.value.showDialog=!0},L=e=>{ee.confirm(!e.child_list||!e.child_list.length?r("categoryDeleteTips"):r("categoryDeleteTips1"),r("warning"),{confirmButtonText:r("confirm"),cancelButtonText:r("cancel"),type:"warning"}).then(()=>{fe(e.category_id).then(()=>{C()}).catch(()=>{})})},R=T(null),M=e=>{R.value.show(e)},V=K(),z=e=>{V.push({path:e})};return(e,n)=>{const c=te,d=oe,g=ae,a=se,w=re,k=ne,x=le,p=ie,h=ce;return S(),W("div",xe,[s(p,{class:"box-card !border-none",shadow:"never"},{default:l(()=>[m("div",Ce,[m("span",we,u(i($)),1),s(c,{type:"primary",onClick:F},{default:l(()=>[v(u(i(r)("addCategory")),1)]),_:1})]),s(g,{class:"demo-tabs","model-value":"/shop/goods/category",onTabChange:z},{default:l(()=>[s(d,{label:i(r)("tabGoodsCategory"),name:"/shop/goods/category"},null,8,["label"]),s(d,{label:i(r)("tabGoodsCategoryConfig"),name:"/shop/goods/category/config"},null,8,["label"])]),_:1}),m("div",ke,[X((S(),Y(x,{data:o.data,ref_key:"tableRef",ref:D,size:"large","row-key":"category_id","tree-props":{hasChildren:"hasChildren",children:"child_list"}},{empty:l(()=>[m("span",null,u(o.loading?"":i(r)("emptyData")),1)]),default:l(()=>[s(a,{label:i(r)("categoryName"),"min-width":"120"},{default:l(({row:t})=>[Ee,m("span",Te,u(t.category_name),1)]),_:1},8,["label"]),s(a,{label:i(r)("image"),width:"170",align:"left"},{default:l(({row:t})=>[m("div",Ie,[s(w,{class:"w-[30px] h-[30px]",src:i(Z)(t.image),fit:"contain"},{error:l(()=>[De]),_:2},1032,["src"])])]),_:1},8,["label"]),s(a,{prop:"is_show",label:i(r)("isShow"),width:"400"},{default:l(({row:t})=>[s(k,{class:"cursor-pointer",type:t.is_show!=2?"success":"danger",onClick:y=>j(t)},{default:l(()=>[v(u(t.is_show!=2?"是":"否"),1)]),_:2},1032,["type","onClick"])]),_:1},8,["label"]),s(a,{label:i(r)("operation"),fixed:"right",align:"right",width:"200"},{default:l(({row:t})=>[s(c,{type:"primary",link:"",onClick:y=>M(t)},{default:l(()=>[v(u(i(r)("spreadGoodsCategory")),1)]),_:2},1032,["onClick"]),s(c,{type:"primary",link:"",onClick:y=>G(t)},{default:l(()=>[v(u(i(r)("edit")),1)]),_:2},1032,["onClick"]),s(c,{type:"primary",link:"",onClick:y=>L(t)},{default:l(()=>[v(u(i(r)("delete")),1)]),_:2},1032,["onClick"])]),_:1},8,["label"])]),_:1},8,["data"])),[[h,o.loading]])]),s(he,{ref_key:"editCategoryDialog",ref:f,onComplete:C},null,512)]),_:1}),s(ye,{ref_key:"goodsCategorySpreadPopupRef",ref:R},null,512)])}}});const bt=be(Re,[["__scopeId","data-v-474e046b"]]);export{bt as default};
