import{d as z,x as F,n as $,r as g,h as y,c as Q,e as l,w as r,a as p,t as m,u as e,q as o,i as _,R as S,s as U,a5 as w,K as Y,L,bO as M,E as R,M as j,a7 as I,ad as O,ae as K,W,Y as A}from"./index-99f00cf3.js";/* empty css                   *//* empty css                      *//* empty css                 *//* empty css               *//* empty css                  *//* empty css                  *//* empty css                     *//* empty css                  *//* empty css                 *//* empty css                    */import"./el-tooltip-4ed993c7.js";/* empty css                        *//* empty css                *//* empty css                *//* empty css                  *//* empty css                       */import"./el-form-item-4ed993c7.js";import{_ as G,d as H,g as J,a as X}from"./qflog-edit.vue_vue_type_style_index_0_lang-6fcd556e.js";import{_ as Z}from"./_plugin-vue_export-helper-c27b6911.js";/* empty css                  *//* empty css                   */const ee={class:"main-container"},te={class:"flex justify-between items-center"},ae={class:"text-lg"},oe={class:"mt-[10px]"},le={class:"mt-[16px] flex justify-end"},ne=z({__name:"qflog",setup(re){const x=F().meta.title;let t=$({page:1,limit:10,total:0,loading:!0,data:[],searchParam:{addon_name:"",type:"",create_time:[]}});const h=g(),f=g([]),C=i=>{f.value=i.map(a=>a.id)},k=async()=>{f.value.length>0?H(f.value).then(i=>{s()}):w.confirm("请先选择要删除的数据",o("warning"),{confirmButtonText:o("confirm"),cancelButtonText:o("cancel"),type:"warning"})},s=(i=1)=>{t.loading=!0,t.page=i,J({page:t.page,limit:t.limit,...t.searchParam}).then(a=>{t.loading=!1,t.data=a.data.data,t.total=a.data.total}).catch(()=>{t.loading=!1})};s();const E=g(null),P=i=>{w.confirm(o("qflogDeleteTips"),o("warning"),{confirmButtonText:o("confirm"),cancelButtonText:o("cancel"),type:"warning"}).then(()=>{X(i).then(()=>{s()}).catch(()=>{})})},D=i=>{i&&(i.resetFields(),s())};return(i,a)=>{const b=Y,c=L,V=M,u=R,B=j,v=I,d=O,T=K,N=W,q=A;return y(),Q("div",ee,[l(v,{class:"box-card !border-none",shadow:"never"},{default:r(()=>[p("div",te,[p("span",ae,m(e(x)),1)]),l(v,{class:"box-card !border-none my-[10px] table-search-wrap",shadow:"never"},{default:r(()=>[l(B,{inline:!0,model:e(t).searchParam,ref_key:"searchFormRef",ref:h},{default:r(()=>[l(c,{label:e(o)("addonName"),prop:"addon_name"},{default:r(()=>[l(b,{modelValue:e(t).searchParam.addon_name,"onUpdate:modelValue":a[0]||(a[0]=n=>e(t).searchParam.addon_name=n),placeholder:e(o)("addonNamePlaceholder")},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),l(c,{label:e(o)("type"),prop:"type"},{default:r(()=>[l(b,{modelValue:e(t).searchParam.type,"onUpdate:modelValue":a[1]||(a[1]=n=>e(t).searchParam.type=n),placeholder:e(o)("typePlaceholder")},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),l(c,{label:e(o)("createTime"),prop:"create_time"},{default:r(()=>[l(V,{modelValue:e(t).searchParam.create_time,"onUpdate:modelValue":a[2]||(a[2]=n=>e(t).searchParam.create_time=n),type:"datetimerange",format:"YYYY-MM-DD hh:mm:ss","start-placeholder":e(o)("startDate"),"end-placeholder":e(o)("endDate")},null,8,["modelValue","start-placeholder","end-placeholder"])]),_:1},8,["label"]),l(c,null,{default:r(()=>[l(u,{type:"primary",onClick:a[3]||(a[3]=n=>s())},{default:r(()=>[_(m(e(o)("search")),1)]),_:1}),l(u,{onClick:a[4]||(a[4]=n=>D(h.value))},{default:r(()=>[_(m(e(o)("reset")),1)]),_:1})]),_:1})]),_:1},8,["model"])]),_:1}),l(u,{onClick:a[5]||(a[5]=n=>k())},{default:r(()=>[_("删除选中")]),_:1}),p("div",oe,[S((y(),U(T,{data:e(t).data,size:"large",onSelectionChange:C},{empty:r(()=>[p("span",null,m(e(t).loading?"":e(o)("emptyData")),1)]),default:r(()=>[l(d,{type:"selection",width:"85"}),l(d,{prop:"addon_name",label:e(o)("addonName"),"min-width":"120","show-overflow-tooltip":!0},null,8,["label"]),l(d,{prop:"wx_openid",label:e(o)("wxOpenid"),"min-width":"120","show-overflow-tooltip":!0},null,8,["label"]),l(d,{prop:"type_name",label:e(o)("type"),"min-width":"120","show-overflow-tooltip":!0},null,8,["label"]),l(d,{prop:"log",label:e(o)("log"),"min-width":"120","show-overflow-tooltip":!0},null,8,["label"]),l(d,{label:e(o)("operation"),fixed:"right","min-width":"120"},{default:r(({row:n})=>[l(u,{type:"primary",link:"",onClick:se=>P(n.id)},{default:r(()=>[_(m(e(o)("delete")),1)]),_:2},1032,["onClick"])]),_:1},8,["label"])]),_:1},8,["data"])),[[q,e(t).loading]]),p("div",le,[l(N,{"current-page":e(t).page,"onUpdate:current-page":a[6]||(a[6]=n=>e(t).page=n),"page-size":e(t).limit,"onUpdate:page-size":a[7]||(a[7]=n=>e(t).limit=n),layout:"total, sizes, prev, pager, next, jumper",total:e(t).total,onSizeChange:a[8]||(a[8]=n=>s()),onCurrentChange:s},null,8,["current-page","page-size","total"])])]),l(G,{ref_key:"editQflogDialog",ref:E,onComplete:s},null,512)]),_:1})])}}});const Ne=Z(ne,[["__scopeId","data-v-61ecc0ec"]]);export{Ne as default};