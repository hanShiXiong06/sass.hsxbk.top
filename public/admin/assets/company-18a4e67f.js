import{d as F,x as $,f as j,n as R,r as S,h,c as x,e as a,w as s,a as i,u as o,t as p,q as t,i as _,R as D,s as L,A as M,B as U,a5 as I,E as q,K as A,L as K,M as W,a7 as Y,ac as G,ad as H,W as J,Y as O}from"./index-a3bdc7eb.js";/* empty css                   *//* empty css                      *//* empty css                 *//* empty css               *//* empty css                  *//* empty css                  *//* empty css                     *//* empty css                  *//* empty css                 *//* empty css                    */import"./el-tooltip-4ed993c7.js";/* empty css                        *//* empty css                *//* empty css                */import"./el-form-item-4ed993c7.js";/* empty css                  */import{g as Q,d as X}from"./delivery-9e32c627.js";const Z={class:"main-container"},ee={class:"flex justify-between items-center"},te={class:"detail-head !m-0"},ae=i("span",{class:"iconfont iconxiangzuojiantou !text-xs"},null,-1),oe={class:"ml-[1px]"},ne=i("span",{class:"adorn"},"|",-1),le={class:"right"},se={class:"mt-[10px]"},ie={class:"w-[50px] h-[50px] flex items-center justify-center"},re=["src"],pe={class:"mt-[16px] flex justify-end"},Te=F({__name:"company",setup(me){const b=$(),u=j(),v=b.meta.title,e=R({page:1,limit:10,total:0,loading:!0,data:[],searchParam:{company_name:"",logo:"",url:"",create_time:"",modify_time:""}}),g=S(),c=(r=1)=>{e.loading=!0,e.page=r,Q({page:e.page,limit:e.limit,...e.searchParam}).then(n=>{e.loading=!1,e.data=n.data.data,e.total=n.data.total}).catch(()=>{e.loading=!1})};c();const C=()=>{u.push("/phone_shop/order/delivery/company_add")},w=r=>{u.push("/phone_shop/order/delivery/company_edit?company_id="+r.company_id)},k=r=>{I.confirm(t("companyDeleteTips"),t("warning"),{confirmButtonText:t("confirm"),cancelButtonText:t("cancel"),type:"warning"}).then(()=>{X(r).then(()=>{c()}).catch(()=>{})})},E=r=>{r&&(r.resetFields(),c())};return(r,n)=>{const d=q,N=A,f=K,P=W,y=Y,m=G,B=H,T=J,z=O;return h(),x("div",Z,[a(y,{class:"box-card !border-none",shadow:"never"},{default:s(()=>[i("div",ee,[i("div",te,[i("div",{class:"left",onClick:n[0]||(n[0]=l=>o(u).push("/phone_shop/order/delivery"))},[ae,i("span",oe,p(o(t)("returnToPreviousPage")),1)]),ne,i("span",le,p(o(v)),1)]),a(d,{type:"primary",onClick:C},{default:s(()=>[_(p(o(t)("addCompany")),1)]),_:1})]),a(y,{class:"box-card !border-none my-[10px] table-search-wrap",shadow:"never"},{default:s(()=>[a(P,{inline:!0,model:e.searchParam,ref_key:"searchFormRef",ref:g},{default:s(()=>[a(f,{label:o(t)("companyName"),prop:"company_name"},{default:s(()=>[a(N,{modelValue:e.searchParam.company_name,"onUpdate:modelValue":n[1]||(n[1]=l=>e.searchParam.company_name=l),modelModifiers:{trim:!0},placeholder:o(t)("companyNamePlaceholder")},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),a(f,null,{default:s(()=>[a(d,{type:"primary",onClick:n[2]||(n[2]=l=>c())},{default:s(()=>[_(p(o(t)("search")),1)]),_:1}),a(d,{onClick:n[3]||(n[3]=l=>E(g.value))},{default:s(()=>[_(p(o(t)("reset")),1)]),_:1})]),_:1})]),_:1},8,["model"])]),_:1}),i("div",se,[D((h(),L(B,{data:e.data,size:"large"},{empty:s(()=>[i("span",null,p(e.loading?"":o(t)("emptyData")),1)]),default:s(()=>[a(m,{prop:"company_name",label:o(t)("companyName"),"min-width":"120"},null,8,["label"]),a(m,{prop:"logo",label:o(t)("logo"),"min-width":"120"},{default:s(({row:l})=>[i("div",ie,[l.logo?(h(),x("img",{key:0,class:"max-w-[100%] max-h-[100%]",src:o(M)(l.logo)},null,8,re)):U("",!0)])]),_:1},8,["label"]),a(m,{prop:"url",label:o(t)("url"),"min-width":"120"},null,8,["label"]),a(m,{prop:"express_no",label:o(t)("expressNo"),"min-width":"120"},null,8,["label"]),a(m,{prop:"express_no_electronic_sheet",label:o(t)("expressNoElectronicSheet"),"min-width":"120"},null,8,["label"]),a(m,{label:o(t)("electronicSheetSwitchName"),"min-width":"120"},{default:s(({row:l})=>[i("span",null,p(l.electronic_sheet_switch==1?"支持":"不支持"),1)]),_:1},8,["label"]),a(m,{label:o(t)("operation"),fixed:"right",align:"right","min-width":"120"},{default:s(({row:l})=>[a(d,{type:"primary",link:"",onClick:V=>w(l)},{default:s(()=>[_(p(o(t)("edit")),1)]),_:2},1032,["onClick"]),a(d,{type:"primary",link:"",onClick:V=>k(l.company_id)},{default:s(()=>[_(p(o(t)("delete")),1)]),_:2},1032,["onClick"])]),_:1},8,["label"])]),_:1},8,["data"])),[[z,e.loading]]),i("div",pe,[a(T,{"current-page":e.page,"onUpdate:current-page":n[4]||(n[4]=l=>e.page=l),"page-size":e.limit,"onUpdate:page-size":n[5]||(n[5]=l=>e.limit=l),layout:"total, sizes, prev, pager, next, jumper",total:e.total,onSizeChange:n[6]||(n[6]=l=>c()),onCurrentChange:c},null,8,["current-page","page-size","total"])])])]),_:1})])}}});export{Te as default};
