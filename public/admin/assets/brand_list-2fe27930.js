import{d as U,x as z,n as L,r as x,h as y,c as R,e as a,w as l,a as d,t as m,u as s,i as u,q as r,R as I,s as M,A as S,a5 as j,ap as q,U as A,E as J,K,L as W,M as Y,a7 as G,ac as H,J as O,ad as Q,W as X,Y as Z}from"./index-37fee5a0.js";/* empty css                   *//* empty css                      *//* empty css                 *//* empty css               *//* empty css                  *//* empty css                  *//* empty css                     *//* empty css                  *//* empty css                 *//* empty css                    */import"./el-tooltip-4ed993c7.js";/* empty css                 *//* empty css                        *//* empty css                        *//* empty css                *//* empty css                */import"./el-form-item-4ed993c7.js";/* empty css                  */import{k as ee,l as te,n as ae}from"./goods-26f79dea.js";import{_ as oe}from"./brand-edit.vue_vue_type_style_index_0_lang-b1f5eff3.js";/* empty css                  *//* empty css                   */import"./index-75241224.js";import"./index.vue_vue_type_style_index_0_lang-9e528ade.js";import"./attachment-78567e2f.js";import"./index.vue_vue_type_script_setup_true_lang-1f515813.js";/* empty css               *//* empty css               *//* empty css                    *//* empty css                    */import"./el-dropdown-item-4ed993c7.js";import"./index.vue_vue_type_script_setup_true_lang-a7856b99.js";/* empty css                   */import"./index.vue_vue_type_script_setup_true_lang-165de32d.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./sortable.esm-be94e56d.js";const ne=""+new URL("brand_default-ac73116e.png",import.meta.url).href,re={class:"main-container"},le={class:"flex justify-between items-center"},se={class:"text-page-title"},ie={class:"mt-[10px]"},de={class:"h-[30px]"},me=d("div",{class:"image-slot"},[d("img",{class:"w-[30px] h-[30px]",src:ne})],-1),pe={class:"mt-[16px] flex justify-end"},Qe=U({__name:"brand_list",setup(ce){const B=z().meta.title,t=L({page:1,limit:10,total:0,loading:!0,data:[],searchParam:{brand_name:"",order:"",sort:""}}),f=x(),C=o=>{let e="";o.order=="ascending"?e="asc":o.order=="descending"&&(e="desc"),e&&(t.searchParam.order=o.prop,t.searchParam.sort=e),i()},i=(o=1)=>{t.loading=!0,t.page=o,ee({page:t.page,limit:t.limit,...t.searchParam}).then(e=>{t.loading=!1,t.data=e.data.data,t.total=e.data.total}).catch(()=>{t.loading=!1})};i();const c=x(null),k=()=>{c.value.setFormData(),c.value.showDialog=!0},w=o=>{c.value.setFormData(o),c.value.showDialog=!0},E=o=>{j.confirm(r("brandDeleteTips"),r("warning"),{confirmButtonText:r("confirm"),cancelButtonText:r("cancel"),type:"warning"}).then(()=>{te(o).then(()=>{i()}).catch(()=>{})})},D=q((o,e)=>{if(isNaN(o)||!/^\d{0,8}$/.test(o)){A({type:"warning",message:`${r("sortTips")}`});return}o>99999999&&(e.sort=99999999),ae({brand_id:e.brand_id,sort:o}).then(p=>{})}),P=o=>{o&&(o.resetFields(),i())};return(o,e)=>{const p=J,b=K,h=W,V=Y,v=G,_=H,N=O,$=Q,F=X,T=Z;return y(),R("div",re,[a(v,{class:"box-card !border-none",shadow:"never"},{default:l(()=>[d("div",le,[d("span",se,m(s(B)),1),a(p,{type:"primary",onClick:k},{default:l(()=>[u(m(s(r)("addBrand")),1)]),_:1})]),a(v,{class:"box-card !border-none my-[10px] table-search-wrap",shadow:"never"},{default:l(()=>[a(V,{inline:!0,model:t.searchParam,ref_key:"searchFormRef",ref:f},{default:l(()=>[a(h,{label:s(r)("brandName"),prop:"brand_name"},{default:l(()=>[a(b,{modelValue:t.searchParam.brand_name,"onUpdate:modelValue":e[0]||(e[0]=n=>t.searchParam.brand_name=n),modelModifiers:{trim:!0},placeholder:s(r)("brandNamePlaceholder")},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),a(h,null,{default:l(()=>[a(p,{type:"primary",onClick:e[1]||(e[1]=n=>i())},{default:l(()=>[u(m(s(r)("search")),1)]),_:1}),a(p,{onClick:e[2]||(e[2]=n=>P(f.value))},{default:l(()=>[u(m(s(r)("reset")),1)]),_:1})]),_:1})]),_:1},8,["model"])]),_:1}),d("div",ie,[I((y(),M($,{data:t.data,size:"large",onSortChange:C},{empty:l(()=>[d("span",null,m(t.loading?"":s(r)("emptyData")),1)]),default:l(()=>[a(_,{prop:"brand_name",label:s(r)("brandName"),"min-width":"120"},null,8,["label"]),a(_,{label:s(r)("logo"),"min-width":"120"},{default:l(({row:n})=>[d("div",de,[a(N,{class:"w-[30px] h-[30px]",src:s(S)(n.logo),fit:"contain"},{error:l(()=>[me]),_:2},1032,["src"])])]),_:1},8,["label"]),a(_,{prop:"sort",label:s(r)("sort"),"min-width":"120",sortable:"custom"},{default:l(({row:n})=>[a(b,{modelValue:n.sort,"onUpdate:modelValue":g=>n.sort=g,class:"!w-[100px]",maxlength:"8",onBlur:g=>s(D)(n.sort,n)},null,8,["modelValue","onUpdate:modelValue","onBlur"])]),_:1},8,["label"]),a(_,{label:s(r)("operation"),fixed:"right",align:"right","min-width":"120"},{default:l(({row:n})=>[a(p,{type:"primary",link:"",onClick:g=>w(n)},{default:l(()=>[u(m(s(r)("edit")),1)]),_:2},1032,["onClick"]),a(p,{type:"primary",link:"",onClick:g=>E(n.brand_id)},{default:l(()=>[u(m(s(r)("delete")),1)]),_:2},1032,["onClick"])]),_:1},8,["label"])]),_:1},8,["data"])),[[T,t.loading]]),d("div",pe,[a(F,{"current-page":t.page,"onUpdate:current-page":e[3]||(e[3]=n=>t.page=n),"page-size":t.limit,"onUpdate:page-size":e[4]||(e[4]=n=>t.limit=n),layout:"total, sizes, prev, pager, next, jumper",total:t.total,onSizeChange:e[5]||(e[5]=n=>i()),onCurrentChange:i},null,8,["current-page","page-size","total"])])]),a(oe,{ref_key:"editBrandDialog",ref:c,onComplete:i},null,512)]),_:1})])}}});export{Qe as default};
