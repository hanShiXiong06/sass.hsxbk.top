import{d as z,x as L,n as I,r as y,h as f,c as B,e as o,w as l,a as d,t as m,u as s,i as u,q as r,R,s as S,A as j,j as M,B as q,a5 as A,ap as J,U as K,E as W,K as Y,L as G,M as H,a7 as O,ac as Q,J as X,ad as Z,W as ee,Y as te}from"./index-6f32d09b.js";/* empty css                   *//* empty css                      *//* empty css                 *//* empty css               *//* empty css                  *//* empty css                  *//* empty css                     *//* empty css                  *//* empty css                 *//* empty css                    */import"./el-tooltip-4ed993c7.js";/* empty css                 *//* empty css                        *//* empty css                        *//* empty css                *//* empty css                */import"./el-form-item-4ed993c7.js";/* empty css                  */import{k as ae,l as oe,n as ne}from"./goods-3890b03a.js";import{_ as re}from"./brand-edit.vue_vue_type_style_index_0_lang-f1e253ca.js";/* empty css                  *//* empty css                   */import"./index-4df26bee.js";import"./index.vue_vue_type_style_index_0_lang-972988e5.js";import"./attachment-503e95ee.js";import"./index.vue_vue_type_script_setup_true_lang-bee7eaa7.js";/* empty css               *//* empty css               *//* empty css                    *//* empty css                    */import"./el-dropdown-item-4ed993c7.js";import"./index.vue_vue_type_script_setup_true_lang-ad575143.js";/* empty css                   */import"./index.vue_vue_type_script_setup_true_lang-0724e2f9.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./sortable.esm-be94e56d.js";const le=""+new URL("brand_default-ac73116e.png",import.meta.url).href,se={class:"main-container"},ie={class:"flex justify-between items-center"},de={class:"text-page-title"},me={class:"mt-[10px]"},pe={class:"h-[30px]"},ce=d("div",{class:"image-slot"},[d("img",{class:"w-[30px] h-[30px]",src:le})],-1),ue={key:0},_e={class:"mt-[16px] flex justify-end"},et=z({__name:"brand_list",setup(ge){const C=L().meta.title,t=I({page:1,limit:10,total:0,loading:!0,data:[],searchParam:{brand_name:"",order:"",sort:""}}),b=y(),k=n=>{let e="";n.order=="ascending"?e="asc":n.order=="descending"&&(e="desc"),e&&(t.searchParam.order=n.prop,t.searchParam.sort=e),i()},i=(n=1)=>{t.loading=!0,t.page=n,ae({page:t.page,limit:t.limit,...t.searchParam}).then(e=>{t.loading=!1,t.data=e.data.data,t.total=e.data.total}).catch(()=>{t.loading=!1})};i();const c=y(null),E=()=>{c.value.setFormData(),c.value.showDialog=!0},w=n=>{c.value.setFormData(n),c.value.showDialog=!0},V=n=>{A.confirm(r("brandDeleteTips"),r("warning"),{confirmButtonText:r("confirm"),cancelButtonText:r("cancel"),type:"warning"}).then(()=>{oe(n).then(()=>{i()}).catch(()=>{})})},D=J((n,e)=>{if(isNaN(n)||!/^\d{0,8}$/.test(n)){K({type:"warning",message:`${r("sortTips")}`});return}n>99999999&&(e.sort=99999999),ne({brand_id:e.brand_id,sort:n}).then(p=>{})}),N=n=>{n&&(n.resetFields(),i())};return(n,e)=>{const p=W,h=Y,v=G,P=H,x=O,_=Q,$=X,F=Z,T=ee,U=te;return f(),B("div",se,[o(x,{class:"box-card !border-none",shadow:"never"},{default:l(()=>[d("div",ie,[d("span",de,m(s(C)),1),o(p,{type:"primary",onClick:E},{default:l(()=>[u(m(s(r)("addBrand")),1)]),_:1})]),o(x,{class:"box-card !border-none my-[10px] table-search-wrap",shadow:"never"},{default:l(()=>[o(P,{inline:!0,model:t.searchParam,ref_key:"searchFormRef",ref:b},{default:l(()=>[o(v,{label:s(r)("brandName"),prop:"brand_name"},{default:l(()=>[o(h,{modelValue:t.searchParam.brand_name,"onUpdate:modelValue":e[0]||(e[0]=a=>t.searchParam.brand_name=a),modelModifiers:{trim:!0},placeholder:s(r)("brandNamePlaceholder")},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),o(v,null,{default:l(()=>[o(p,{type:"primary",onClick:e[1]||(e[1]=a=>i())},{default:l(()=>[u(m(s(r)("search")),1)]),_:1}),o(p,{onClick:e[2]||(e[2]=a=>N(b.value))},{default:l(()=>[u(m(s(r)("reset")),1)]),_:1})]),_:1})]),_:1},8,["model"])]),_:1}),d("div",me,[R((f(),S(F,{data:t.data,size:"large",onSortChange:k},{empty:l(()=>[d("span",null,m(t.loading?"":s(r)("emptyData")),1)]),default:l(()=>[o(_,{prop:"brand_name",label:s(r)("brandName"),"min-width":"120"},null,8,["label"]),o(_,{label:s(r)("logo"),"min-width":"120"},{default:l(({row:a})=>[d("div",pe,[o($,{class:"w-[30px] h-[30px]",src:s(j)(a.logo),fit:"contain"},{error:l(()=>[ce]),_:2},1032,["src"])])]),_:1},8,["label"]),o(_,{prop:"sort",label:s(r)("sort"),"min-width":"120",sortable:"custom"},{default:l(({row:a})=>[o(h,{modelValue:a.sort,"onUpdate:modelValue":g=>a.sort=g,class:"!w-[100px]",maxlength:"8",onBlur:g=>s(D)(a.sort,a)},null,8,["modelValue","onUpdate:modelValue","onBlur"])]),_:1},8,["label"]),o(_,{label:s(r)("operation"),fixed:"right",align:"right","min-width":"120"},{default:l(({row:a})=>[s(M)().siteInfo.site_id==a.site_id?(f(),B("div",ue,[o(p,{type:"primary",link:"",onClick:g=>w(a)},{default:l(()=>[u(m(s(r)("edit")),1)]),_:2},1032,["onClick"]),o(p,{type:"primary",link:"",onClick:g=>V(a.brand_id)},{default:l(()=>[u(m(s(r)("delete")),1)]),_:2},1032,["onClick"])])):q("",!0)]),_:1},8,["label"])]),_:1},8,["data"])),[[U,t.loading]]),d("div",_e,[o(T,{"current-page":t.page,"onUpdate:current-page":e[3]||(e[3]=a=>t.page=a),"page-size":t.limit,"onUpdate:page-size":e[4]||(e[4]=a=>t.limit=a),layout:"total, sizes, prev, pager, next, jumper",total:t.total,onSizeChange:e[5]||(e[5]=a=>i()),onCurrentChange:i},null,8,["current-page","page-size","total"])])]),o(re,{ref_key:"editBrandDialog",ref:c,onComplete:i},null,512)]),_:1})])}}});export{et as default};
