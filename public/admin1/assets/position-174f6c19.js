import{d as z,x as V,n as D,r as b,h as v,c as R,e as t,w as o,a as d,t as m,u as n,i as c,q as l,P as $,s as U,_ as j,E as L,J as I,K as M,L as S,a0 as q,aa as J,ac as K,T as A,U as G}from"./index-17984968.js";/* empty css                   *//* empty css                      *//* empty css                 *//* empty css               *//* empty css                  *//* empty css                  *//* empty css                     *//* empty css                  *//* empty css                 *//* empty css                    */import"./el-tooltip-4ed993c7.js";/* empty css                        *//* empty css                *//* empty css                */import"./el-form-item-4ed993c7.js";/* empty css                  */import{_ as H}from"./edit-position.vue_vue_type_script_setup_true_lang-8b22eea3.js";import{k as O,l as Q}from"./technician-4cd99a3c.js";/* empty css                  *//* empty css                   */const W={class:"main-container"},X={class:"flex justify-between items-center"},Y={class:"text-page-title"},Z={class:"mt-[10px]"},ee={class:"mt-[16px] flex justify-end"},Pe=z({__name:"position",setup(te){const x=V().meta.title,e=D({page:1,limit:10,total:0,loading:!1,data:[],searchParam:{name:""}}),f=b(),y=()=>{_.value.setFormData()},r=(s=1)=>{e.loading=!0,e.page=s,O({page:e.page,limit:e.limit,...e.searchParam}).then(a=>{e.loading=!1,e.data=a.data.data,e.total=a.data.total}).catch(()=>{e.loading=!1})};r();const _=b(),k=s=>{s&&(s.resetFields(),r())},C=s=>{_.value.setFormData(s)},P=s=>{j.confirm("确定要删除这个岗位吗?","删除",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(()=>{Q(s).then(a=>{r()})})};return(s,a)=>{const p=L,w=I,g=M,E=S,h=q,u=J,F=K,B=A,T=G;return v(),R("div",W,[t(h,{class:"box-card !border-none",shadow:"never"},{default:o(()=>[d("div",X,[d("span",Y,m(n(x)),1),t(p,{type:"primary",class:"w-[100px]",onClick:y},{default:o(()=>[c(m(n(l)("addPosition")),1)]),_:1})]),t(h,{class:"box-card !border-none my-[10px] table-search-wrap",shadow:"never"},{default:o(()=>[t(E,{inline:!0,model:e.searchParam,ref_key:"searchFormRef",ref:f},{default:o(()=>[t(g,{label:n(l)("positionName"),prop:"name"},{default:o(()=>[t(w,{modelValue:e.searchParam.name,"onUpdate:modelValue":a[0]||(a[0]=i=>e.searchParam.name=i),modelModifiers:{trim:!0},placeholder:n(l)("positionNamePlaceholder")},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),t(g,null,{default:o(()=>[t(p,{type:"primary",onClick:a[1]||(a[1]=i=>r())},{default:o(()=>[c(m(n(l)("search")),1)]),_:1}),t(p,{onClick:a[2]||(a[2]=i=>k(f.value))},{default:o(()=>[c(m(n(l)("reset")),1)]),_:1})]),_:1})]),_:1},8,["model"])]),_:1}),d("div",Z,[$((v(),U(F,{data:e.data,size:"large"},{empty:o(()=>[d("span",null,m(e.loading?"":n(l)("emptyData")),1)]),default:o(()=>[t(u,{prop:"name",label:n(l)("positionName"),"min-width":"300"},null,8,["label"]),t(u,{prop:"desc",label:n(l)("remark"),"min-width":"300"},null,8,["label"]),t(u,{prop:"create_time",label:n(l)("createTime"),"min-width":"300"},null,8,["label"]),t(u,{label:n(l)("operation"),fixed:"right","min-width":"120",align:"right"},{default:o(({row:i})=>[t(p,{type:"primary",link:"",onClick:N=>C(i)},{default:o(()=>[c(m(n(l)("edit")),1)]),_:2},1032,["onClick"]),t(p,{type:"primary",link:"",onClick:N=>P(i.id)},{default:o(()=>[c(m(n(l)("delete")),1)]),_:2},1032,["onClick"])]),_:1},8,["label"])]),_:1},8,["data"])),[[T,e.loading]]),d("div",ee,[t(B,{"current-page":e.page,"onUpdate:current-page":a[3]||(a[3]=i=>e.page=i),"page-size":e.limit,"onUpdate:page-size":a[4]||(a[4]=i=>e.limit=i),layout:"total, sizes, prev, pager, next, jumper",total:e.total,onSizeChange:r,onCurrentChange:r},null,8,["current-page","page-size","total"])])])]),_:1}),t(H,{ref_key:"editPositionRef",ref:_,onComplete:r},null,512)])}}});export{Pe as default};
