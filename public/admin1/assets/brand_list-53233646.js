import{d as z,x as V,n as $,r as v,h as x,c as L,e as t,w as n,a as s,t as d,u as r,i as _,q as a,P as S,s as U,A as R,_ as j,E as M,J as q,K as A,L as J,a0 as K,aa as G,I as H,ac as O,T as Q,U as W,p as X,g as Y}from"./index-17984968.js";/* empty css                   *//* empty css                      *//* empty css                 *//* empty css               *//* empty css                  *//* empty css                  *//* empty css                     *//* empty css                  *//* empty css                 *//* empty css                    */import"./el-tooltip-4ed993c7.js";/* empty css                 *//* empty css                        *//* empty css                        *//* empty css                *//* empty css                */import"./el-form-item-4ed993c7.js";/* empty css                  */import{k as Z,l as ee}from"./goods-e571a7e7.js";import{_ as te}from"./brand-edit.vue_vue_type_style_index_0_lang-d74171e5.js";import{_ as ae}from"./_plugin-vue_export-helper-c27b6911.js";/* empty css                  *//* empty css                   */import"./index-0ce1f7fc.js";import"./index.vue_vue_type_style_index_0_lang-c5bcb8a9.js";import"./attachment-a816d3ef.js";import"./index.vue_vue_type_script_setup_true_lang-8693344a.js";/* empty css                 *//* empty css               *//* empty css               *//* empty css                    *//* empty css                         */import"./index.vue_vue_type_script_setup_true_lang-5615c67a.js";/* empty css                   */import"./index.vue_vue_type_script_setup_true_lang-8e50df98.js";/* empty css                */import"./sortable.esm-be94e56d.js";const oe=""+new URL("brand_default-ac73116e.png",import.meta.url).href,ne=u=>(X("data-v-26f735d1"),u=u(),Y(),u),re={class:"main-container"},le={class:"flex justify-between items-center"},ie={class:"text-page-title"},se={class:"mt-[10px]"},pe={class:"h-[30px]"},de=ne(()=>s("div",{class:"image-slot"},[s("img",{class:"w-[30px] h-[30px]",src:oe})],-1)),me={class:"mt-[16px] flex justify-end"},ce=z({__name:"brand_list",setup(u){const y=V().meta.title,e=$({page:1,limit:10,total:0,loading:!0,data:[],searchParam:{brand_name:""}}),f=v(),p=(i=1)=>{e.loading=!0,e.page=i,Z({page:e.page,limit:e.limit,...e.searchParam}).then(o=>{e.loading=!1,e.data=o.data.data,e.total=o.data.total}).catch(()=>{e.loading=!1})};p();const m=v(null),w=()=>{m.value.setFormData(),m.value.showDialog=!0},k=i=>{m.value.setFormData(i),m.value.showDialog=!0},C=i=>{j.confirm(a("brandDeleteTips"),a("warning"),{confirmButtonText:a("confirm"),cancelButtonText:a("cancel"),type:"warning"}).then(()=>{ee(i).then(()=>{p()}).catch(()=>{})})},B=i=>{i&&(i.resetFields(),p())};return(i,o)=>{const c=M,E=q,b=A,D=J,h=K,g=G,P=H,F=O,I=Q,T=W;return x(),L("div",re,[t(h,{class:"box-card !border-none",shadow:"never"},{default:n(()=>[s("div",le,[s("span",ie,d(r(y)),1),t(c,{type:"primary",onClick:w},{default:n(()=>[_(d(r(a)("addBrand")),1)]),_:1})]),t(h,{class:"box-card !border-none my-[10px] table-search-wrap",shadow:"never"},{default:n(()=>[t(D,{inline:!0,model:e.searchParam,ref_key:"searchFormRef",ref:f},{default:n(()=>[t(b,{label:r(a)("brandName"),prop:"brand_name"},{default:n(()=>[t(E,{modelValue:e.searchParam.brand_name,"onUpdate:modelValue":o[0]||(o[0]=l=>e.searchParam.brand_name=l),modelModifiers:{trim:!0},placeholder:r(a)("brandNamePlaceholder")},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),t(b,null,{default:n(()=>[t(c,{type:"primary",onClick:o[1]||(o[1]=l=>p())},{default:n(()=>[_(d(r(a)("search")),1)]),_:1}),t(c,{onClick:o[2]||(o[2]=l=>B(f.value))},{default:n(()=>[_(d(r(a)("reset")),1)]),_:1})]),_:1})]),_:1},8,["model"])]),_:1}),s("div",se,[S((x(),U(F,{data:e.data,size:"large"},{empty:n(()=>[s("span",null,d(e.loading?"":r(a)("emptyData")),1)]),default:n(()=>[t(g,{prop:"brand_name",label:r(a)("brandName"),"min-width":"120"},null,8,["label"]),t(g,{label:r(a)("logo"),"min-width":"120"},{default:n(({row:l})=>[s("div",pe,[t(P,{class:"w-[30px] h-[30px]",src:r(R)(l.logo),fit:"contain"},{error:n(()=>[de]),_:2},1032,["src"])])]),_:1},8,["label"]),t(g,{prop:"sort",label:r(a)("sort"),"min-width":"120"},null,8,["label"]),t(g,{label:r(a)("operation"),fixed:"right",align:"right","min-width":"120"},{default:n(({row:l})=>[t(c,{type:"primary",link:"",onClick:N=>k(l)},{default:n(()=>[_(d(r(a)("edit")),1)]),_:2},1032,["onClick"]),t(c,{type:"primary",link:"",onClick:N=>C(l.brand_id)},{default:n(()=>[_(d(r(a)("delete")),1)]),_:2},1032,["onClick"])]),_:1},8,["label"])]),_:1},8,["data"])),[[T,e.loading]]),s("div",me,[t(I,{"current-page":e.page,"onUpdate:current-page":o[3]||(o[3]=l=>e.page=l),"page-size":e.limit,"onUpdate:page-size":o[4]||(o[4]=l=>e.limit=l),layout:"total, sizes, prev, pager, next, jumper",total:e.total,onSizeChange:o[5]||(o[5]=l=>p()),onCurrentChange:p},null,8,["current-page","page-size","total"])])]),t(te,{ref_key:"editBrandDialog",ref:m,onComplete:p},null,512)]),_:1})])}}});const Ye=ae(ce,[["__scopeId","data-v-26f735d1"]]);export{Ye as default};