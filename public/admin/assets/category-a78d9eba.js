import{d as $,x as z,n as V,r as y,h as b,c as N,e as o,w as r,a as _,t as s,u as t,i as p,q as a,R as L,s as R,ap as S,a5 as j,E as A,K as U,L as I,M,a7 as q,ac as K,ad as W,W as Y,Y as G}from"./index-a3bdc7eb.js";/* empty css                   *//* empty css                      *//* empty css                 *//* empty css               *//* empty css                  *//* empty css                  *//* empty css                     *//* empty css                  *//* empty css                 *//* empty css                    */import"./el-tooltip-4ed993c7.js";/* empty css                        *//* empty css                *//* empty css                */import"./el-form-item-4ed993c7.js";/* empty css                  */import{a as H,d as J}from"./article-2aa864db.js";import{_ as O}from"./edit-category.vue_vue_type_script_setup_true_lang-27834584.js";/* empty css                  *//* empty css                   *//* empty css                       *//* empty css                 *//* empty css                        */const Q={class:"main-container"},X={class:"flex justify-between items-center"},Z={class:"text-page-title"},ee={class:"mt-[10px]"},te={class:"mt-[16px] flex justify-end"},Fe=$({__name:"category",setup(ae){const v=z().meta.title,e=V({page:1,limit:10,total:0,loading:!0,data:[],searchParam:{name:""}}),g=y(),C=i=>{i&&(i.resetFields(),m())},m=S((i=1)=>{e.loading=!0,e.page=i,H({page:e.page,limit:e.limit,...e.searchParam}).then(l=>{e.loading=!1,e.data=l.data.data,e.total=l.data.total}).catch(()=>{e.loading=!1})});m();const d=y(null),w=()=>{d.value.setFormData(),d.value.showDialog=!0},x=i=>{d.value.setFormData(i),d.value.showDialog=!0},k=i=>{j.confirm(a("articleCategoryDeleteTips"),a("warning"),{confirmButtonText:a("confirm"),cancelButtonText:a("cancel"),type:"warning"}).then(()=>{J(i).then(()=>{m()}).catch(()=>{})})};return(i,l)=>{const c=A,E=U,f=I,D=M,h=q,u=K,B=W,F=Y,P=G;return b(),N("div",Q,[o(h,{class:"box-card !border-none",shadow:"never"},{default:r(()=>[_("div",X,[_("span",Z,s(t(v)),1),o(c,{type:"primary",onClick:w},{default:r(()=>[p(s(t(a)("addArticleCategory")),1)]),_:1})]),o(h,{class:"box-card !border-none my-[10px] table-search-wrap",shadow:"never"},{default:r(()=>[o(D,{inline:!0,model:e.searchParam,ref_key:"searchFormRef",ref:g},{default:r(()=>[o(f,{label:t(a)("name"),prop:"name"},{default:r(()=>[o(E,{modelValue:e.searchParam.name,"onUpdate:modelValue":l[0]||(l[0]=n=>e.searchParam.name=n),placeholder:t(a)("namePlaceholder"),class:"w-[190px]","prefix-icon":"Search",clearable:""},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),o(f,null,{default:r(()=>[o(c,{type:"primary",onClick:l[1]||(l[1]=n=>t(m)())},{default:r(()=>[p(s(t(a)("search")),1)]),_:1}),o(c,{onClick:l[2]||(l[2]=n=>C(g.value))},{default:r(()=>[p(s(t(a)("reset")),1)]),_:1})]),_:1})]),_:1},8,["model"])]),_:1}),_("div",ee,[L((b(),R(B,{data:e.data,size:"large"},{empty:r(()=>[_("span",null,s(e.loading?"":t(a)("emptyData")),1)]),default:r(()=>[o(u,{prop:"name",label:t(a)("name"),"min-width":"150"},null,8,["label"]),o(u,{prop:"article_num",label:t(a)("articleNumber"),"min-width":"140"},null,8,["label"]),o(u,{prop:"is_show",label:t(a)("isShow"),"min-width":"150"},{default:r(({row:n})=>[p(s(n.is_show==1?t(a)("show"):t(a)("hide")),1)]),_:1},8,["label"]),o(u,{prop:"sort",label:t(a)("sort"),"min-width":"120"},null,8,["label"]),o(u,{label:t(a)("operation"),fixed:"right",width:"130",align:"right"},{default:r(({row:n})=>[o(c,{type:"primary",link:"",onClick:T=>x(n)},{default:r(()=>[p(s(t(a)("edit")),1)]),_:2},1032,["onClick"]),o(c,{type:"primary",link:"",onClick:T=>k(n.category_id)},{default:r(()=>[p(s(t(a)("delete")),1)]),_:2},1032,["onClick"])]),_:1},8,["label"])]),_:1},8,["data"])),[[P,e.loading]]),_("div",te,[o(F,{"current-page":e.page,"onUpdate:current-page":l[3]||(l[3]=n=>e.page=n),"page-size":e.limit,"onUpdate:page-size":l[4]||(l[4]=n=>e.limit=n),layout:"total, sizes, prev, pager, next, jumper",total:e.total,onSizeChange:l[5]||(l[5]=n=>t(m)()),onCurrentChange:t(m)},null,8,["current-page","page-size","total","onCurrentChange"])])]),o(O,{ref_key:"editCategoryDialog",ref:d,onComplete:l[6]||(l[6]=n=>t(m)())},null,512)]),_:1})])}}});export{Fe as default};
