import{d as $,x as F,n as z,r as x,h as y,c as U,e as l,w as r,a as c,t as m,u as s,i as u,q as o,R,s as S,a5 as M,ap as j,U as I,E as q,K,L as W,M as Y,a7 as A,ac as G,ad as H,W as J,Y as O}from"./index-2a89d409.js";/* empty css                   *//* empty css                      *//* empty css                 *//* empty css               *//* empty css                  *//* empty css                  *//* empty css                     *//* empty css                  *//* empty css                 *//* empty css                    */import"./el-tooltip-4ed993c7.js";/* empty css                        *//* empty css                *//* empty css                */import"./el-form-item-4ed993c7.js";/* empty css                  */import{R as Q,S as X,T as Z}from"./goods-60ec1a36.js";import{_ as ee}from"./label-edit.vue_vue_type_style_index_0_lang-7d37307b.js";/* empty css                  *//* empty css                   */const ae={class:"main-container"},te={class:"flex justify-between items-center"},le={class:"text-page-title"},oe={class:"mt-[10px]"},ne={class:"mt-[16px] flex justify-end"},Pe=$({__name:"label_list",setup(re){const C=F().meta.title,a=z({page:1,limit:10,total:0,loading:!0,data:[],searchParam:{label_name:"",order:"",sort:""}}),f=x(),k=t=>{let e="";t.order=="ascending"?e="asc":t.order=="descending"&&(e="desc"),e&&(a.searchParam.order=t.prop,a.searchParam.sort=e),i()},i=(t=1)=>{a.loading=!0,a.page=t,Q({page:a.page,limit:a.limit,...a.searchParam}).then(e=>{a.loading=!1,a.data=e.data.data,a.total=e.data.total}).catch(()=>{a.loading=!1})};i();const p=x(null),E=()=>{p.value.setFormData(),p.value.showDialog=!0},w=t=>{p.value.setFormData(t),p.value.showDialog=!0},L=t=>{M.confirm(o("labelDeleteTips"),o("warning"),{confirmButtonText:o("confirm"),cancelButtonText:o("cancel"),type:"warning"}).then(()=>{X(t).then(()=>{i()}).catch(()=>{})})},B=j((t,e)=>{if(isNaN(t)||!/^\d{0,8}$/.test(t)){I({type:"warning",message:`${o("sortTips")}`});return}t>99999999&&(e.sort=99999999),Z({label_id:e.label_id,sort:t}).then(d=>{})}),D=t=>{t&&(t.resetFields(),i())};return(t,e)=>{const d=q,b=K,h=W,P=Y,v=A,_=G,V=H,N=J,T=O;return y(),U("div",ae,[l(v,{class:"box-card !border-none",shadow:"never"},{default:r(()=>[c("div",te,[c("span",le,m(s(C)),1),l(d,{type:"primary",onClick:E},{default:r(()=>[u(m(s(o)("addLabel")),1)]),_:1})]),l(v,{class:"box-card !border-none my-[10px] table-search-wrap",shadow:"never"},{default:r(()=>[l(P,{inline:!0,model:a.searchParam,ref_key:"searchFormRef",ref:f},{default:r(()=>[l(h,{label:s(o)("labelName"),prop:"label_name"},{default:r(()=>[l(b,{modelValue:a.searchParam.label_name,"onUpdate:modelValue":e[0]||(e[0]=n=>a.searchParam.label_name=n),modelModifiers:{trim:!0},placeholder:s(o)("labelNamePlaceholder")},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),l(h,null,{default:r(()=>[l(d,{type:"primary",onClick:e[1]||(e[1]=n=>i())},{default:r(()=>[u(m(s(o)("search")),1)]),_:1}),l(d,{onClick:e[2]||(e[2]=n=>D(f.value))},{default:r(()=>[u(m(s(o)("reset")),1)]),_:1})]),_:1})]),_:1},8,["model"])]),_:1}),c("div",oe,[R((y(),S(V,{data:a.data,size:"large",onSortChange:k},{empty:r(()=>[c("span",null,m(a.loading?"":s(o)("emptyData")),1)]),default:r(()=>[l(_,{prop:"label_name",label:s(o)("labelName"),"min-width":"120"},null,8,["label"]),l(_,{prop:"memo",label:s(o)("memo"),"min-width":"200"},null,8,["label"]),l(_,{prop:"sort",label:s(o)("sort"),"min-width":"120",sortable:"custom"},{default:r(({row:n})=>[l(b,{modelValue:n.sort,"onUpdate:modelValue":g=>n.sort=g,class:"!w-[100px]",maxlength:"8",onBlur:g=>s(B)(n.sort,n)},null,8,["modelValue","onUpdate:modelValue","onBlur"])]),_:1},8,["label"]),l(_,{label:s(o)("operation"),fixed:"right",align:"right","min-width":"120"},{default:r(({row:n})=>[l(d,{type:"primary",link:"",onClick:g=>w(n)},{default:r(()=>[u(m(s(o)("edit")),1)]),_:2},1032,["onClick"]),l(d,{type:"primary",link:"",onClick:g=>L(n.label_id)},{default:r(()=>[u(m(s(o)("delete")),1)]),_:2},1032,["onClick"])]),_:1},8,["label"])]),_:1},8,["data"])),[[T,a.loading]]),c("div",ne,[l(N,{"current-page":a.page,"onUpdate:current-page":e[3]||(e[3]=n=>a.page=n),"page-size":a.limit,"onUpdate:page-size":e[4]||(e[4]=n=>a.limit=n),layout:"total, sizes, prev, pager, next, jumper",total:a.total,onSizeChange:e[5]||(e[5]=n=>i()),onCurrentChange:i},null,8,["current-page","page-size","total"])])]),l(ee,{ref_key:"editLabelDialog",ref:p,onComplete:i},null,512)]),_:1})])}}});export{Pe as default};
