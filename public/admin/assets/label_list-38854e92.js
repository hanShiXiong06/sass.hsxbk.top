import{d as F,x as U,n as z,r as x,h as f,c as C,e as l,w as r,a as c,t as m,u as s,i as u,q as n,R as S,s as R,j,B as I,a5 as M,ap as q,U as K,E as W,K as Y,L as A,M as G,a7 as H,ac as J,ad as O,W as Q,Y as X}from"./index-5a756a51.js";/* empty css                   *//* empty css                      *//* empty css                 *//* empty css               *//* empty css                  *//* empty css                  *//* empty css                     *//* empty css                  *//* empty css                 *//* empty css                    */import"./el-tooltip-4ed993c7.js";/* empty css                        *//* empty css                *//* empty css                */import"./el-form-item-4ed993c7.js";/* empty css                  */import{R as Z,S as ee,T as ae}from"./goods-014ca322.js";import{_ as te}from"./label-edit.vue_vue_type_style_index_0_lang-c0c3253c.js";/* empty css                  *//* empty css                   */const le={class:"main-container"},oe={class:"flex justify-between items-center"},ne={class:"text-page-title"},se={class:"mt-[10px]"},re={key:0},ie={class:"mt-[16px] flex justify-end"},Te=F({__name:"label_list",setup(me){const k=U().meta.title,a=z({page:1,limit:10,total:0,loading:!0,data:[],searchParam:{label_name:"",order:"",sort:""}}),b=x(),E=t=>{let e="";t.order=="ascending"?e="asc":t.order=="descending"&&(e="desc"),e&&(a.searchParam.order=t.prop,a.searchParam.sort=e),i()},i=(t=1)=>{a.loading=!0,a.page=t,Z({page:a.page,limit:a.limit,...a.searchParam}).then(e=>{a.loading=!1,a.data=e.data.data,a.total=e.data.total}).catch(()=>{a.loading=!1})};i();const p=x(null),L=()=>{p.value.setFormData(),p.value.showDialog=!0},w=t=>{p.value.setFormData(t),p.value.showDialog=!0},B=t=>{M.confirm(n("labelDeleteTips"),n("warning"),{confirmButtonText:n("confirm"),cancelButtonText:n("cancel"),type:"warning"}).then(()=>{ee(t).then(()=>{i()}).catch(()=>{})})},V=q((t,e)=>{if(isNaN(t)||!/^\d{0,8}$/.test(t)){K({type:"warning",message:`${n("sortTips")}`});return}t>99999999&&(e.sort=99999999),ae({label_id:e.label_id,sort:t}).then(d=>{})}),D=t=>{t&&(t.resetFields(),i())};return(t,e)=>{const d=W,h=Y,v=A,N=G,y=H,_=J,P=O,T=Q,$=X;return f(),C("div",le,[l(y,{class:"box-card !border-none",shadow:"never"},{default:r(()=>[c("div",oe,[c("span",ne,m(s(k)),1),l(d,{type:"primary",onClick:L},{default:r(()=>[u(m(s(n)("addLabel")),1)]),_:1})]),l(y,{class:"box-card !border-none my-[10px] table-search-wrap",shadow:"never"},{default:r(()=>[l(N,{inline:!0,model:a.searchParam,ref_key:"searchFormRef",ref:b},{default:r(()=>[l(v,{label:s(n)("labelName"),prop:"label_name"},{default:r(()=>[l(h,{modelValue:a.searchParam.label_name,"onUpdate:modelValue":e[0]||(e[0]=o=>a.searchParam.label_name=o),modelModifiers:{trim:!0},placeholder:s(n)("labelNamePlaceholder")},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),l(v,null,{default:r(()=>[l(d,{type:"primary",onClick:e[1]||(e[1]=o=>i())},{default:r(()=>[u(m(s(n)("search")),1)]),_:1}),l(d,{onClick:e[2]||(e[2]=o=>D(b.value))},{default:r(()=>[u(m(s(n)("reset")),1)]),_:1})]),_:1})]),_:1},8,["model"])]),_:1}),c("div",se,[S((f(),R(P,{data:a.data,size:"large",onSortChange:E},{empty:r(()=>[c("span",null,m(a.loading?"":s(n)("emptyData")),1)]),default:r(()=>[l(_,{prop:"label_name",label:s(n)("labelName"),"min-width":"120"},null,8,["label"]),l(_,{prop:"memo",label:s(n)("memo"),"min-width":"200"},null,8,["label"]),l(_,{prop:"sort",label:s(n)("sort"),"min-width":"120",sortable:"custom"},{default:r(({row:o})=>[l(h,{modelValue:o.sort,"onUpdate:modelValue":g=>o.sort=g,class:"!w-[100px]",maxlength:"8",onBlur:g=>s(V)(o.sort,o)},null,8,["modelValue","onUpdate:modelValue","onBlur"])]),_:1},8,["label"]),l(_,{label:s(n)("operation"),fixed:"right",align:"right","min-width":"120"},{default:r(({row:o})=>[s(j)().siteInfo.site_id==o.site_id?(f(),C("div",re,[l(d,{type:"primary",link:"",onClick:g=>w(o)},{default:r(()=>[u(m(s(n)("edit")),1)]),_:2},1032,["onClick"]),l(d,{type:"primary",link:"",onClick:g=>B(o.label_id)},{default:r(()=>[u(m(s(n)("delete")),1)]),_:2},1032,["onClick"])])):I("",!0)]),_:1},8,["label"])]),_:1},8,["data"])),[[$,a.loading]]),c("div",ie,[l(T,{"current-page":a.page,"onUpdate:current-page":e[3]||(e[3]=o=>a.page=o),"page-size":a.limit,"onUpdate:page-size":e[4]||(e[4]=o=>a.limit=o),layout:"total, sizes, prev, pager, next, jumper",total:a.total,onSizeChange:e[5]||(e[5]=o=>i()),onCurrentChange:i},null,8,["current-page","page-size","total"])])]),l(te,{ref_key:"editLabelDialog",ref:p,onComplete:i},null,512)]),_:1})])}}});export{Te as default};
