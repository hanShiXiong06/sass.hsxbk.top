import{d as I,x as V,f as $,n as j,r as D,h as b,c as L,e as l,w as s,a as i,u as a,t as r,q as t,i as d,P as R,s as U,_ as q,E as M,J,K,L as A,a0 as G,aa as H,ac as O,T as Q,U as W,p as X,g as Y}from"./index-17984968.js";/* empty css                   *//* empty css                      *//* empty css                 *//* empty css               *//* empty css                  *//* empty css                  *//* empty css                     *//* empty css                  *//* empty css                 *//* empty css                    */import"./el-tooltip-4ed993c7.js";/* empty css                        *//* empty css                *//* empty css                */import"./el-form-item-4ed993c7.js";/* empty css                  */import{v as Z,w as ee}from"./delivery-9c7fac72.js";import{_ as te}from"./_plugin-vue_export-helper-c27b6911.js";const x=u=>(X("data-v-5583c9c8"),u=u(),Y(),u),ae={class:"main-container"},oe={class:"flex justify-between items-center"},le={class:"detail-head !m-0"},ne=x(()=>i("span",{class:"iconfont iconxiangzuojiantou !text-xs"},null,-1)),se={class:"ml-[1px]"},ie=x(()=>i("span",{class:"adorn"},"|",-1)),pe={class:"right"},re={class:"mt-[10px]"},me={class:"mt-[16px] flex justify-end"},de=I({__name:"template",setup(u){const y=V(),g=$(),w=y.meta.title,e=j({page:1,limit:10,total:0,loading:!0,data:[],searchParam:{template_name:""}}),f=D(),m=(p=1)=>{e.loading=!0,e.page=p,Z({page:e.page,limit:e.limit,...e.searchParam}).then(o=>{e.loading=!1,e.data=o.data.data,e.total=o.data.total}).catch(()=>{e.loading=!1})};m();const C=()=>{g.push({path:"/shop/order/shipping/template_edit"})},T=p=>{g.push({path:"/shop/order/shipping/template_edit",query:{id:p.template_id}})},k=p=>{q.confirm(t("templateDeleteTips"),t("warning"),{confirmButtonText:t("confirm"),cancelButtonText:t("cancel"),type:"warning"}).then(()=>{ee(p).then(()=>{m()}).catch(()=>{})})},E=p=>{p&&(p.resetFields(),m())};return(p,o)=>{const c=M,P=J,h=K,B=A,v=G,_=H,N=O,S=Q,z=W;return b(),L("div",ae,[l(v,{class:"box-card !border-none",shadow:"never"},{default:s(()=>[i("div",oe,[i("div",le,[i("div",{class:"left",onClick:o[0]||(o[0]=n=>a(g).push("/shop/order/delivery"))},[ne,i("span",se,r(a(t)("returnToPreviousPage")),1)]),ie,i("span",pe,r(a(w)),1)]),l(c,{type:"primary",onClick:C},{default:s(()=>[d(r(a(t)("addTemplate")),1)]),_:1})]),l(v,{class:"box-card !border-none my-[10px] table-search-wrap",shadow:"never"},{default:s(()=>[l(B,{inline:!0,model:e.searchParam,ref_key:"searchFormRef",ref:f},{default:s(()=>[l(h,{label:a(t)("templateName"),prop:"template_name"},{default:s(()=>[l(P,{modelValue:e.searchParam.template_name,"onUpdate:modelValue":o[1]||(o[1]=n=>e.searchParam.template_name=n),modelModifiers:{trim:!0},placeholder:a(t)("templateNamePlaceholder")},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),l(h,null,{default:s(()=>[l(c,{type:"primary",onClick:o[2]||(o[2]=n=>m())},{default:s(()=>[d(r(a(t)("search")),1)]),_:1}),l(c,{onClick:o[3]||(o[3]=n=>E(f.value))},{default:s(()=>[d(r(a(t)("reset")),1)]),_:1})]),_:1})]),_:1},8,["model"])]),_:1}),i("div",re,[R((b(),U(N,{data:e.data,size:"large"},{empty:s(()=>[i("span",null,r(e.loading?"":a(t)("emptyData")),1)]),default:s(()=>[l(_,{prop:"template_name",label:a(t)("templateName"),"min-width":"120"},null,8,["label"]),l(_,{prop:"fee_type_name",label:a(t)("feeTypeName"),"min-width":"120"},null,8,["label"]),l(_,{label:a(t)("freeShipping"),"min-width":"120",align:"center"},{default:s(({row:n})=>[d(r(n.is_free_shipping?a(t)("open"):a(t)("close")),1)]),_:1},8,["label"]),l(_,{prop:"create_time",label:a(t)("createTime"),"min-width":"120"},null,8,["label"]),l(_,{label:a(t)("operation"),fixed:"right","min-width":"120",align:"right"},{default:s(({row:n})=>[l(c,{type:"primary",link:"",onClick:F=>T(n)},{default:s(()=>[d(r(a(t)("edit")),1)]),_:2},1032,["onClick"]),l(c,{type:"danger",link:"",onClick:F=>k(n.template_id)},{default:s(()=>[d(r(a(t)("delete")),1)]),_:2},1032,["onClick"])]),_:1},8,["label"])]),_:1},8,["data"])),[[z,e.loading]]),i("div",me,[l(S,{"current-page":e.page,"onUpdate:current-page":o[4]||(o[4]=n=>e.page=n),"page-size":e.limit,"onUpdate:page-size":o[5]||(o[5]=n=>e.limit=n),layout:"total, sizes, prev, pager, next, jumper",total:e.total,onSizeChange:o[6]||(o[6]=n=>m()),onCurrentChange:m},null,8,["current-page","page-size","total"])])])]),_:1})])}}});const ze=te(de,[["__scopeId","data-v-5583c9c8"]]);export{ze as default};
