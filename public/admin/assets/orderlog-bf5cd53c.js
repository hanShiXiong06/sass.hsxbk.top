import{d as k,x as T,n as B,r as g,h as v,c as z,e as o,w as n,a as d,t as p,u as e,q as l,i as f,R as D,s as F,a5 as O,K as U,L as $,E as N,M as R,a7 as j,ad as I,ae as M,W as S,Y as q}from"./index-99f00cf3.js";/* empty css                   *//* empty css                      *//* empty css                 *//* empty css               *//* empty css                  *//* empty css                  *//* empty css                     *//* empty css                  *//* empty css                 *//* empty css                    */import"./el-tooltip-4ed993c7.js";/* empty css                        *//* empty css                *//* empty css                *//* empty css                  */import"./el-form-item-4ed993c7.js";import{u as K,v as W}from"./order-442c45cb.js";import{_ as Y}from"./orderlog-edit.vue_vue_type_style_index_0_lang-a145b882.js";import{_ as A}from"./_plugin-vue_export-helper-c27b6911.js";/* empty css                  *//* empty css                   */const G={class:"main-container"},H={class:"flex justify-between items-center"},J={class:"text-[20px]"},Q={class:"mt-[10px]"},X={class:"mt-[16px] flex justify-end"},Z=k({__name:"orderlog",setup(ee){const x=T().meta.title;let t=B({page:1,limit:10,total:0,loading:!0,data:[],searchParam:{order_id:"",action:"",main_type:"",create_time:""}});const h=g();g([]);const i=(s=1)=>{t.loading=!0,t.page=s,K({page:t.page,limit:t.limit,...t.searchParam}).then(a=>{t.loading=!1,t.data=a.data.data,t.total=a.data.total}).catch(()=>{t.loading=!1})};i();const w=g(null),y=s=>{O.confirm(l("orderLogDeleteTips"),l("warning"),{confirmButtonText:l("confirm"),cancelButtonText:l("cancel"),type:"warning"}).then(()=>{W(s).then(()=>{i()}).catch(()=>{})})},C=s=>{s&&(s.resetFields(),i())};return(s,a)=>{const _=U,m=$,u=N,P=R,b=j,c=I,V=M,E=S,L=q;return v(),z("div",G,[o(b,{class:"box-card !border-none",shadow:"never"},{default:n(()=>[d("div",H,[d("span",J,p(e(x)),1)]),o(b,{class:"box-card !border-none my-[10px] table-search-wrap",shadow:"never"},{default:n(()=>[o(P,{inline:!0,model:e(t).searchParam,ref_key:"searchFormRef",ref:h},{default:n(()=>[o(m,{label:"订单号",prop:"order_id"},{default:n(()=>[o(_,{modelValue:e(t).searchParam.order_id,"onUpdate:modelValue":a[0]||(a[0]=r=>e(t).searchParam.order_id=r),placeholder:"请输入订单号"},null,8,["modelValue"])]),_:1}),o(m,{label:e(l)("action"),prop:"action"},{default:n(()=>[o(_,{modelValue:e(t).searchParam.action,"onUpdate:modelValue":a[1]||(a[1]=r=>e(t).searchParam.action=r),placeholder:e(l)("actionPlaceholder")},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),o(m,{label:e(l)("createTime"),prop:"create_time"},{default:n(()=>[o(_,{modelValue:e(t).searchParam.create_time,"onUpdate:modelValue":a[2]||(a[2]=r=>e(t).searchParam.create_time=r),placeholder:e(l)("createTimePlaceholder")},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),o(m,null,{default:n(()=>[o(u,{type:"primary",onClick:a[3]||(a[3]=r=>i())},{default:n(()=>[f(p(e(l)("search")),1)]),_:1}),o(u,{onClick:a[4]||(a[4]=r=>C(h.value))},{default:n(()=>[f(p(e(l)("reset")),1)]),_:1})]),_:1})]),_:1},8,["model"])]),_:1}),d("div",Q,[D((v(),F(V,{data:e(t).data,size:"large"},{empty:n(()=>[d("span",null,p(e(t).loading?"":e(l)("emptyData")),1)]),default:n(()=>[o(c,{prop:"order_id",label:"订单号","min-width":"120","show-overflow-tooltip":!0}),o(c,{prop:"action",label:e(l)("action"),"min-width":"120","show-overflow-tooltip":!0},null,8,["label"]),o(c,{prop:"main_type",label:e(l)("mainType"),"min-width":"120","show-overflow-tooltip":!0},null,8,["label"]),o(c,{label:e(l)("operation"),fixed:"right","min-width":"120"},{default:n(({row:r})=>[o(u,{type:"primary",link:"",onClick:ae=>y(r.id)},{default:n(()=>[f(p(e(l)("delete")),1)]),_:2},1032,["onClick"])]),_:1},8,["label"])]),_:1},8,["data"])),[[L,e(t).loading]]),d("div",X,[o(E,{"current-page":e(t).page,"onUpdate:current-page":a[5]||(a[5]=r=>e(t).page=r),"page-size":e(t).limit,"onUpdate:page-size":a[6]||(a[6]=r=>e(t).limit=r),layout:"total, sizes, prev, pager, next, jumper",total:e(t).total,onSizeChange:a[7]||(a[7]=r=>i()),onCurrentChange:i},null,8,["current-page","page-size","total"])])]),o(Y,{ref_key:"editOrderLogDialog",ref:w,onComplete:i},null,512)]),_:1})])}}});const Ve=A(Z,[["__scopeId","data-v-7b18a38e"]]);export{Ve as default};
