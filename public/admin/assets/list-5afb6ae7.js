import{d as W,x as q,f as K,r as b,n as Y,h,c as A,e as t,w as l,a as f,t as p,u as n,i as c,q as e,R as G,s as k,a5 as y,E as H,ax as J,ay as Q,K as X,L as Z,M as ee,a7 as te,ac as ae,ak as ne,ad as re,W as le,Y as oe}from"./index-5a756a51.js";/* empty css                   *//* empty css                      *//* empty css                 *//* empty css               *//* empty css                  *//* empty css                  *//* empty css                     *//* empty css                  *//* empty css                 *//* empty css                    */import"./el-tooltip-4ed993c7.js";/* empty css                        *//* empty css                *//* empty css                */import"./el-form-item-4ed993c7.js";/* empty css                    *//* empty css                  */import{f as ie,m as se,h as pe,t as ce,r as me}from"./printer-f8e37a2d.js";const de={class:"main-container"},ue={class:"flex justify-between items-center mb-[5px]"},_e={class:"text-lg"},fe={class:"mt-[10px]"},he={class:"mt-[16px] flex justify-end"},Me=W({__name:"list",setup(ve){const B=q(),v=K(),$=B.meta.title,s=b(!1),N=o=>{v.push({path:o})},a=Y({page:1,limit:10,total:0,loading:!0,data:[],searchParam:{printer_name:""}}),x=b(),m=(o=1)=>{a.loading=!0,a.page=o,ie({page:a.page,limit:a.limit,...a.searchParam}).then(r=>{a.loading=!1,a.data=r.data.data,a.total=r.data.total}).catch(()=>{a.loading=!1})};m();const g=b(!1),C=(o,r)=>{g.value||(g.value=!0,se({printer_id:o,status:r}).then(d=>{m(),g.value=!1}))},z=()=>{v.push("/printer/add")},F=o=>{v.push("/printer/edit?printer_id="+o.printer_id)},R=o=>{y.confirm(e("printerDeleteTips"),e("warning"),{confirmButtonText:e("confirm"),cancelButtonText:e("cancel"),type:"warning"}).then(()=>{s.value||(s.value=!0,pe(o).then(()=>{m(),s.value=!1}).catch(()=>{s.value=!1}))})},V=o=>{o&&(o.resetFields(),m())},D=o=>{y.confirm(e("testPrintTips"),e("warning"),{confirmButtonText:e("confirm"),cancelButtonText:e("cancel"),type:"warning"}).then(()=>{s.value||(s.value=!0,ce(o).then(r=>{s.value=!1}).catch(()=>{s.value=!1}))})},L=o=>{y.confirm(e("refreshTokenTips"),e("warning"),{confirmButtonText:e("confirm"),cancelButtonText:e("cancel"),type:"warning"}).then(()=>{s.value||(s.value=!0,me(o).then(r=>{m(),s.value=!1}).catch(()=>{s.value=!1}))})};return(o,r)=>{const d=H,w=J,M=Q,S=X,P=Z,j=ee,T=te,u=ae,E=ne,U=re,I=le,O=oe;return h(),A("div",de,[t(T,{class:"box-card !border-none",shadow:"never"},{default:l(()=>[f("div",ue,[f("span",_e,p(n($)),1),t(d,{type:"primary",onClick:z},{default:l(()=>[c(p(n(e)("addPrinter")),1)]),_:1})]),t(M,{class:"demo-tabs","model-value":"/printer/list",onTabChange:N},{default:l(()=>[t(w,{label:n(e)("tabPrinterManager"),name:"/printer/list"},null,8,["label"]),t(w,{label:n(e)("tabPrinterTemplate"),name:"/printer/template/list"},null,8,["label"])]),_:1}),t(T,{class:"box-card !border-none my-[10px] table-search-wrap",shadow:"never"},{default:l(()=>[t(j,{inline:!0,model:a.searchParam,ref_key:"searchFormRef",ref:x},{default:l(()=>[t(P,{label:n(e)("printerName"),prop:"printer_name"},{default:l(()=>[t(S,{modelValue:a.searchParam.printer_name,"onUpdate:modelValue":r[0]||(r[0]=i=>a.searchParam.printer_name=i),modelModifiers:{trim:!0},placeholder:n(e)("printerNamePlaceholder"),maxlength:"20"},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),t(P,null,{default:l(()=>[t(d,{type:"primary",onClick:r[1]||(r[1]=i=>m())},{default:l(()=>[c(p(n(e)("search")),1)]),_:1}),t(d,{onClick:r[2]||(r[2]=i=>V(x.value))},{default:l(()=>[c(p(n(e)("reset")),1)]),_:1})]),_:1})]),_:1},8,["model"])]),_:1}),f("div",fe,[G((h(),k(U,{data:a.data,size:"large"},{empty:l(()=>[f("span",null,p(a.loading?"":n(e)("emptyData")),1)]),default:l(()=>[t(u,{prop:"printer_name",label:n(e)("printerName"),"min-width":"220","show-overflow-tooltip":!0},null,8,["label"]),t(u,{prop:"brand_name",label:n(e)("brand"),"min-width":"120","show-overflow-tooltip":!0},null,8,["label"]),t(u,{prop:"print_width",label:n(e)("printWidth"),"min-width":"120","show-overflow-tooltip":!0},null,8,["label"]),t(u,{prop:"status",label:n(e)("status"),"min-width":"80","show-overflow-tooltip":!0},{default:l(({row:i})=>[i.status==1?(h(),k(E,{key:0,type:"success",onClick:_=>C(i.printer_id,0),class:"cursor-pointer"},{default:l(()=>[c(p(n(e)("statusOn")),1)]),_:2},1032,["onClick"])):(h(),k(E,{key:1,type:"info",onClick:_=>C(i.printer_id,1),class:"cursor-pointer"},{default:l(()=>[c(p(n(e)("statusOff")),1)]),_:2},1032,["onClick"]))]),_:1},8,["label"]),t(u,{label:n(e)("operation"),fixed:"right","min-width":"120"},{default:l(({row:i})=>[t(d,{type:"primary",link:"",onClick:_=>D(i.printer_id)},{default:l(()=>[c(p(n(e)("testPrint")),1)]),_:2},1032,["onClick"]),t(d,{type:"primary",link:"",onClick:_=>L(i.printer_id)},{default:l(()=>[c(p(n(e)("refreshToken")),1)]),_:2},1032,["onClick"]),t(d,{type:"primary",link:"",onClick:_=>F(i)},{default:l(()=>[c(p(n(e)("edit")),1)]),_:2},1032,["onClick"]),t(d,{type:"primary",link:"",onClick:_=>R(i.printer_id)},{default:l(()=>[c(p(n(e)("delete")),1)]),_:2},1032,["onClick"])]),_:1},8,["label"])]),_:1},8,["data"])),[[O,a.loading]]),f("div",he,[t(I,{"current-page":a.page,"onUpdate:current-page":r[3]||(r[3]=i=>a.page=i),"page-size":a.limit,"onUpdate:page-size":r[4]||(r[4]=i=>a.limit=i),layout:"total, sizes, prev, pager, next, jumper",total:a.total,onSizeChange:r[5]||(r[5]=i=>m()),onCurrentChange:m},null,8,["current-page","page-size","total"])])])]),_:1})])}}});export{Me as default};
