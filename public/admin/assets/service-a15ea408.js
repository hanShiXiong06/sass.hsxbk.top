import{d as N,x as T,n as z,r as h,h as b,c as V,e as t,w as r,a as c,t as m,u as i,i as u,q as o,R as $,s as L,a5 as R,E as j,K as M,L as U,M as I,a7 as q,ac as K,ad as W,W as Y,Y as A}from"./index-5a756a51.js";/* empty css                   *//* empty css                      *//* empty css                 *//* empty css               *//* empty css                  *//* empty css                  *//* empty css                     *//* empty css                  *//* empty css                 *//* empty css                    */import"./el-tooltip-4ed993c7.js";/* empty css                        *//* empty css                *//* empty css                */import"./el-form-item-4ed993c7.js";/* empty css                  */import{a7 as G,a8 as H}from"./goods-d1f9b95c.js";import{_ as J}from"./service-edit.vue_vue_type_style_index_0_lang-7d139049.js";/* empty css                  *//* empty css                   */import"./index-92c2e799.js";/* empty css                        */import"./index.vue_vue_type_style_index_0_lang-c0b4b1fc.js";import"./attachment-a9811edd.js";import"./index.vue_vue_type_script_setup_true_lang-cb419dfd.js";/* empty css                 *//* empty css               *//* empty css               *//* empty css                    *//* empty css                    */import"./el-dropdown-item-4ed993c7.js";import"./index.vue_vue_type_script_setup_true_lang-477c25f7.js";/* empty css                   */import"./index.vue_vue_type_script_setup_true_lang-75313763.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./sortable.esm-be94e56d.js";const O={class:"main-container"},Q={class:"flex justify-between items-center"},X={class:"text-page-title"},Z={class:"mt-[10px]"},ee={class:"mt-[16px] flex justify-end"},Ue=N({__name:"service",setup(te){const x=T().meta.title,e=z({page:1,limit:10,total:0,loading:!0,data:[],searchParam:{service_name:""}}),v=h(),s=(n=1)=>{e.loading=!0,e.page=n,G({page:e.page,limit:e.limit,...e.searchParam}).then(a=>{e.loading=!1,e.data=a.data.data,e.total=a.data.total}).catch(()=>{e.loading=!1})};s();const p=h(null),y=()=>{p.value.setFormData(),p.value.showDialog=!0},C=n=>{p.value.setFormData(n),p.value.showDialog=!0},k=n=>{R.confirm(o("serveDeleteTips"),o("warning"),{confirmButtonText:o("confirm"),cancelButtonText:o("cancel"),type:"warning"}).then(()=>{H(n).then(()=>{s()}).catch(()=>{})})},w=n=>{n&&(n.resetFields(),s())};return(n,a)=>{const d=j,E=M,g=U,D=I,f=q,_=K,B=W,F=Y,P=A;return b(),V("div",O,[t(f,{class:"box-card !border-none",shadow:"never"},{default:r(()=>[c("div",Q,[c("span",X,m(i(x)),1),t(d,{type:"primary",onClick:y},{default:r(()=>[u(m(i(o)("addServe")),1)]),_:1})]),t(f,{class:"box-card !border-none my-[10px] table-search-wrap",shadow:"never"},{default:r(()=>[t(D,{inline:!0,model:e.searchParam,ref_key:"searchFormRef",ref:v},{default:r(()=>[t(g,{label:i(o)("serviceName"),prop:"service_name"},{default:r(()=>[t(E,{modelValue:e.searchParam.service_name,"onUpdate:modelValue":a[0]||(a[0]=l=>e.searchParam.service_name=l),modelModifiers:{trim:!0},placeholder:i(o)("serviceNamePlaceholder")},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),t(g,null,{default:r(()=>[t(d,{type:"primary",onClick:a[1]||(a[1]=l=>s())},{default:r(()=>[u(m(i(o)("search")),1)]),_:1}),t(d,{onClick:a[2]||(a[2]=l=>w(v.value))},{default:r(()=>[u(m(i(o)("reset")),1)]),_:1})]),_:1})]),_:1},8,["model"])]),_:1}),c("div",Z,[$((b(),L(B,{data:e.data,size:"large"},{empty:r(()=>[c("span",null,m(e.loading?"":i(o)("emptyData")),1)]),default:r(()=>[t(_,{prop:"service_name",label:i(o)("serviceName"),"min-width":"120"},null,8,["label"]),t(_,{prop:"desc",label:i(o)("desc"),"min-width":"120"},null,8,["label"]),t(_,{label:i(o)("operation"),fixed:"right",align:"right","min-width":"120"},{default:r(({row:l})=>[t(d,{type:"primary",link:"",onClick:S=>C(l)},{default:r(()=>[u(m(i(o)("edit")),1)]),_:2},1032,["onClick"]),t(d,{type:"primary",link:"",onClick:S=>k(l.service_id)},{default:r(()=>[u(m(i(o)("delete")),1)]),_:2},1032,["onClick"])]),_:1},8,["label"])]),_:1},8,["data"])),[[P,e.loading]]),c("div",ee,[t(F,{"current-page":e.page,"onUpdate:current-page":a[3]||(a[3]=l=>e.page=l),"page-size":e.limit,"onUpdate:page-size":a[4]||(a[4]=l=>e.limit=l),layout:"total, sizes, prev, pager, next, jumper",total:e.total,onSizeChange:a[5]||(a[5]=l=>s()),onCurrentChange:s},null,8,["current-page","page-size","total"])])]),t(J,{ref_key:"editServeDialog",ref:p,onComplete:s},null,512)]),_:1})])}}});export{Ue as default};
