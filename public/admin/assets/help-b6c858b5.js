import{d as $,x as z,n as V,r as f,h as y,c as L,e as o,w as l,a as u,t as d,u as e,i as m,q as n,R as N,s as R,a5 as j,E as I,K as U,L as M,M as S,a7 as q,ac as K,ad as W,W as Y,Y as A}from"./index-37fee5a0.js";/* empty css                   *//* empty css                      *//* empty css                 *//* empty css               *//* empty css                  *//* empty css                  *//* empty css                     *//* empty css                  *//* empty css                 *//* empty css                    */import"./el-tooltip-4ed993c7.js";/* empty css                        *//* empty css                *//* empty css                */import"./el-form-item-4ed993c7.js";/* empty css                  */import{_ as G,a as J,g as O,d as Q}from"./help-edit.vue_vue_type_style_index_0_lang-7e763764.js";import{_ as X}from"./_plugin-vue_export-helper-c27b6911.js";/* empty css                  *//* empty css                   */const Z={class:"main-container"},ee={class:"flex justify-between items-center"},te={class:"text-[20px]"},ae={class:"mt-[10px]"},oe={class:"mt-[16px] flex justify-end"},le=$({__name:"help",setup(ne){const x=z().meta.title;let t=V({page:1,limit:10,total:0,loading:!0,data:[],searchParam:{title:""}});const g=f();f([]);const b=async()=>{await J(),s()},s=(r=1)=>{t.loading=!0,t.page=r,O({page:t.page,limit:t.limit,...t.searchParam}).then(a=>{t.loading=!1,t.data=a.data.data,t.total=a.data.total}).catch(()=>{t.loading=!1})};s();const c=f(null),w=()=>{c.value.setFormData(),c.value.showDialog=!0},C=r=>{c.value.setFormData(r),c.value.showDialog=!0},k=r=>{j.confirm(n("helpDeleteTips"),n("warning"),{confirmButtonText:n("confirm"),cancelButtonText:n("cancel"),type:"warning"}).then(()=>{Q(r).then(()=>{s()}).catch(()=>{})})},E=r=>{r&&(r.resetFields(),s())};return(r,a)=>{const p=I,D=U,v=M,B=S,h=q,_=K,F=W,H=Y,P=A;return y(),L("div",Z,[o(h,{class:"box-card !border-none",shadow:"never"},{default:l(()=>[u("div",ee,[u("span",te,d(e(x)),1),o(p,{type:"primary",onClick:w},{default:l(()=>[m(" 添加帮助 ")]),_:1})]),o(h,{class:"box-card !border-none my-[10px] table-search-wrap",shadow:"never"},{default:l(()=>[o(B,{inline:!0,model:e(t).searchParam,ref_key:"searchFormRef",ref:g},{default:l(()=>[o(v,{label:e(n)("title"),prop:"title"},{default:l(()=>[o(D,{modelValue:e(t).searchParam.title,"onUpdate:modelValue":a[0]||(a[0]=i=>e(t).searchParam.title=i),placeholder:e(n)("titlePlaceholder")},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),o(v,null,{default:l(()=>[o(p,{type:"primary",onClick:a[1]||(a[1]=i=>s())},{default:l(()=>[m(d(e(n)("search")),1)]),_:1}),o(p,{onClick:a[2]||(a[2]=i=>E(g.value))},{default:l(()=>[m(d(e(n)("reset")),1)]),_:1}),o(p,{type:"primary",onClick:a[3]||(a[3]=i=>b())},{default:l(()=>[m("默认帮助")]),_:1})]),_:1})]),_:1},8,["model"])]),_:1}),u("div",ae,[N((y(),R(F,{data:e(t).data,size:"large"},{empty:l(()=>[u("span",null,d(e(t).loading?"":e(n)("emptyData")),1)]),default:l(()=>[o(_,{prop:"title",label:e(n)("title"),"min-width":"120","show-overflow-tooltip":!0},null,8,["label"]),o(_,{prop:"content",label:e(n)("content"),"min-width":"120","show-overflow-tooltip":!0},null,8,["label"]),o(_,{label:e(n)("operation"),fixed:"right","min-width":"120"},{default:l(({row:i})=>[o(p,{type:"primary",link:"",onClick:T=>C(i)},{default:l(()=>[m(d(e(n)("edit")),1)]),_:2},1032,["onClick"]),o(p,{type:"primary",link:"",onClick:T=>k(i.id)},{default:l(()=>[m(d(e(n)("delete")),1)]),_:2},1032,["onClick"])]),_:1},8,["label"])]),_:1},8,["data"])),[[P,e(t).loading]]),u("div",oe,[o(H,{"current-page":e(t).page,"onUpdate:current-page":a[4]||(a[4]=i=>e(t).page=i),"page-size":e(t).limit,"onUpdate:page-size":a[5]||(a[5]=i=>e(t).limit=i),layout:"total, sizes, prev, pager, next, jumper",total:e(t).total,onSizeChange:a[6]||(a[6]=i=>s()),onCurrentChange:s},null,8,["current-page","page-size","total"])])]),o(G,{ref_key:"editHelpDialog",ref:c,onComplete:s},null,512)]),_:1})])}}});const Fe=X(le,[["__scopeId","data-v-177ff858"]]);export{Fe as default};
