import{d as T,x as V,n as z,r as b,h as v,c as y,e as t,w as r,a as c,t as m,u as i,i as u,q as o,R as $,s as j,j as L,B as R,a5 as U,E as I,K as M,L as q,M as K,a7 as W,ac as Y,ad as A,W as G,Y as H}from"./index-2a89d409.js";/* empty css                   *//* empty css                      *//* empty css                 *//* empty css               *//* empty css                  *//* empty css                  *//* empty css                     *//* empty css                  *//* empty css                 *//* empty css                    */import"./el-tooltip-4ed993c7.js";/* empty css                        *//* empty css                *//* empty css                */import"./el-form-item-4ed993c7.js";/* empty css                  */import{a8 as J,a9 as O}from"./goods-3259d825.js";import{_ as Q}from"./service-edit.vue_vue_type_style_index_0_lang-37cc1038.js";/* empty css                  *//* empty css                   */import"./index-deaeeb3b.js";/* empty css                        */import"./index.vue_vue_type_style_index_0_lang-5224d015.js";import"./attachment-851184b5.js";import"./index.vue_vue_type_script_setup_true_lang-bee04220.js";/* empty css                 *//* empty css               *//* empty css               *//* empty css                    *//* empty css                    */import"./el-dropdown-item-4ed993c7.js";import"./index.vue_vue_type_script_setup_true_lang-f1303253.js";/* empty css                   */import"./index.vue_vue_type_script_setup_true_lang-4e818418.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./sortable.esm-be94e56d.js";const X={class:"main-container"},Z={class:"flex justify-between items-center"},ee={class:"text-page-title"},te={class:"mt-[10px]"},ae={key:0},oe={class:"mt-[16px] flex justify-end"},Ke=T({__name:"service",setup(re){const x=V().meta.title,e=z({page:1,limit:10,total:0,loading:!0,data:[],searchParam:{service_name:""}}),f=b(),s=(l=1)=>{e.loading=!0,e.page=l,J({page:e.page,limit:e.limit,...e.searchParam}).then(a=>{e.loading=!1,e.data=a.data.data,e.total=a.data.total}).catch(()=>{e.loading=!1})};s();const p=b(null),C=()=>{p.value.setFormData(),p.value.showDialog=!0},k=l=>{p.value.setFormData(l),p.value.showDialog=!0},E=l=>{U.confirm(o("serveDeleteTips"),o("warning"),{confirmButtonText:o("confirm"),cancelButtonText:o("cancel"),type:"warning"}).then(()=>{O(l).then(()=>{s()}).catch(()=>{})})},w=l=>{l&&(l.resetFields(),s())};return(l,a)=>{const d=I,D=M,g=q,B=K,h=W,_=Y,S=A,F=G,N=H;return v(),y("div",X,[t(h,{class:"box-card !border-none",shadow:"never"},{default:r(()=>[c("div",Z,[c("span",ee,m(i(x)),1),t(d,{type:"primary",onClick:C},{default:r(()=>[u(m(i(o)("addServe")),1)]),_:1})]),t(h,{class:"box-card !border-none my-[10px] table-search-wrap",shadow:"never"},{default:r(()=>[t(B,{inline:!0,model:e.searchParam,ref_key:"searchFormRef",ref:f},{default:r(()=>[t(g,{label:i(o)("serviceName"),prop:"service_name"},{default:r(()=>[t(D,{modelValue:e.searchParam.service_name,"onUpdate:modelValue":a[0]||(a[0]=n=>e.searchParam.service_name=n),modelModifiers:{trim:!0},placeholder:i(o)("serviceNamePlaceholder")},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),t(g,null,{default:r(()=>[t(d,{type:"primary",onClick:a[1]||(a[1]=n=>s())},{default:r(()=>[u(m(i(o)("search")),1)]),_:1}),t(d,{onClick:a[2]||(a[2]=n=>w(f.value))},{default:r(()=>[u(m(i(o)("reset")),1)]),_:1})]),_:1})]),_:1},8,["model"])]),_:1}),c("div",te,[$((v(),j(S,{data:e.data,size:"large"},{empty:r(()=>[c("span",null,m(e.loading?"":i(o)("emptyData")),1)]),default:r(()=>[t(_,{prop:"service_name",label:i(o)("serviceName"),"min-width":"120"},null,8,["label"]),t(_,{prop:"desc",label:i(o)("desc"),"min-width":"120"},null,8,["label"]),t(_,{label:i(o)("operation"),fixed:"right",align:"right","min-width":"120"},{default:r(({row:n})=>[i(L)().siteInfo.site_id==n.site_id?(v(),y("div",ae,[t(d,{type:"primary",link:"",onClick:P=>k(n)},{default:r(()=>[u(m(i(o)("edit")),1)]),_:2},1032,["onClick"]),t(d,{type:"primary",link:"",onClick:P=>E(n.service_id)},{default:r(()=>[u(m(i(o)("delete")),1)]),_:2},1032,["onClick"])])):R("",!0)]),_:1},8,["label"])]),_:1},8,["data"])),[[N,e.loading]]),c("div",oe,[t(F,{"current-page":e.page,"onUpdate:current-page":a[3]||(a[3]=n=>e.page=n),"page-size":e.limit,"onUpdate:page-size":a[4]||(a[4]=n=>e.limit=n),layout:"total, sizes, prev, pager, next, jumper",total:e.total,onSizeChange:a[5]||(a[5]=n=>s()),onCurrentChange:s},null,8,["current-page","page-size","total"])])]),t(Q,{ref_key:"editServeDialog",ref:p,onComplete:s},null,512)]),_:1})])}}});export{Ke as default};
