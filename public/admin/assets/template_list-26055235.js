import{d as S,x as I,f as q,n as K,r as x,h as _,c as P,e as t,w as r,a as d,t as i,u as n,i as c,q as a,F as O,T as W,s as k,R as Y,a5 as A,E as G,ax as H,ay as J,K as Q,L as X,ab as Z,aC as ee,M as te,a7 as ae,ac as le,ad as ne,W as oe,Y as re}from"./index-6f32d09b.js";/* empty css                   *//* empty css                      *//* empty css                 *//* empty css               *//* empty css                  *//* empty css                  *//* empty css                     *//* empty css                  *//* empty css                 *//* empty css                    */import"./el-tooltip-4ed993c7.js";/* empty css                        *//* empty css                *//* empty css                */import"./el-form-item-4ed993c7.js";/* empty css                    *//* empty css                  */import{b as pe,l as ie,n as se}from"./printer-79f0f9a9.js";const me={class:"main-container"},de={class:"flex justify-between items-center mb-[5px]"},ce={class:"text-lg"},ue={class:"mt-[10px]"},_e={class:"mt-[16px] flex justify-end"},$e=S({__name:"template_list",setup(be){const C=I(),b=q(),E=C.meta.title,w=p=>{b.push({path:p})},e=K({page:1,limit:10,total:0,loading:!0,data:[],searchParam:{template_name:"",template_type:""}}),g=x(),h=x([]);pe({}).then(p=>{p.data&&(h.value=p.data)});const s=(p=1)=>{e.loading=!0,e.page=p,ie({page:e.page,limit:e.limit,...e.searchParam}).then(l=>{e.loading=!1,e.data=l.data.data,e.total=l.data.total}).catch(()=>{e.loading=!1})};s();const V=()=>{b.push("/printer/template/add")},B=p=>{b.push("/printer/template/edit?template_id="+p.template_id)},F=p=>{A.confirm(a("printerTemplateDeleteTips"),a("warning"),{confirmButtonText:a("confirm"),cancelButtonText:a("cancel"),type:"warning"}).then(()=>{se(p).then(()=>{s()})})},N=p=>{p&&(p.resetFields(),s())};return(p,l)=>{const m=G,y=H,z=J,L=Q,f=X,R=Z,$=ee,D=te,v=ae,u=le,U=ne,j=oe,M=re;return _(),P("div",me,[t(v,{class:"box-card !border-none",shadow:"never"},{default:r(()=>[d("div",de,[d("span",ce,i(n(E)),1),t(m,{type:"primary",onClick:V},{default:r(()=>[c(i(n(a)("addPrinterTemplate")),1)]),_:1})]),t(z,{class:"demo-tabs","model-value":"/printer/template/list",onTabChange:w},{default:r(()=>[t(y,{label:n(a)("tabPrinterManager"),name:"/printer/list"},null,8,["label"]),t(y,{label:n(a)("tabPrinterTemplate"),name:"/printer/template/list"},null,8,["label"])]),_:1}),t(v,{class:"box-card !border-none my-[10px] table-search-wrap",shadow:"never"},{default:r(()=>[t(D,{inline:!0,model:e.searchParam,ref_key:"searchFormRef",ref:g},{default:r(()=>[t(f,{label:n(a)("templateName"),prop:"template_name"},{default:r(()=>[t(L,{modelValue:e.searchParam.template_name,"onUpdate:modelValue":l[0]||(l[0]=o=>e.searchParam.template_name=o),placeholder:n(a)("templateNamePlaceholder")},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),t(f,{label:n(a)("templateType"),prop:"template_type"},{default:r(()=>[t($,{modelValue:e.searchParam.template_type,"onUpdate:modelValue":l[1]||(l[1]=o=>e.searchParam.template_type=o),placeholder:n(a)("templateTypePlaceholder"),clearable:""},{default:r(()=>[(_(!0),P(O,null,W(h.value,(o,T)=>(_(),k(R,{key:p.itemkey,label:o.title,value:o.key},null,8,["label","value"]))),128))]),_:1},8,["modelValue","placeholder"])]),_:1},8,["label"]),t(f,null,{default:r(()=>[t(m,{type:"primary",onClick:l[2]||(l[2]=o=>s())},{default:r(()=>[c(i(n(a)("search")),1)]),_:1}),t(m,{onClick:l[3]||(l[3]=o=>N(g.value))},{default:r(()=>[c(i(n(a)("reset")),1)]),_:1})]),_:1})]),_:1},8,["model"])]),_:1}),d("div",ue,[Y((_(),k(U,{data:e.data,size:"large"},{empty:r(()=>[d("span",null,i(e.loading?"":n(a)("emptyData")),1)]),default:r(()=>[t(u,{prop:"template_name",label:n(a)("templateName"),"min-width":"220","show-overflow-tooltip":!0},null,8,["label"]),t(u,{prop:"template_type_name",label:n(a)("templateType"),"min-width":"180","show-overflow-tooltip":!0},null,8,["label"]),t(u,{prop:"create_time",label:n(a)("createTime"),"min-width":"120"},null,8,["label"]),t(u,{label:n(a)("operation"),fixed:"right","min-width":"120"},{default:r(({row:o})=>[t(m,{type:"primary",link:"",onClick:T=>B(o)},{default:r(()=>[c(i(n(a)("edit")),1)]),_:2},1032,["onClick"]),t(m,{type:"primary",link:"",onClick:T=>F(o.template_id)},{default:r(()=>[c(i(n(a)("delete")),1)]),_:2},1032,["onClick"])]),_:1},8,["label"])]),_:1},8,["data"])),[[M,e.loading]]),d("div",_e,[t(j,{"current-page":e.page,"onUpdate:current-page":l[4]||(l[4]=o=>e.page=o),"page-size":e.limit,"onUpdate:page-size":l[5]||(l[5]=o=>e.limit=o),layout:"total, sizes, prev, pager, next, jumper",total:e.total,onSizeChange:l[6]||(l[6]=o=>s()),onCurrentChange:s},null,8,["current-page","page-size","total"])])])]),_:1})])}}});export{$e as default};
