import{d as Y,f as H,x as J,r as P,n as q,a2 as w,h as d,c as f,e as o,w as s,a as h,t as p,u as r,i as y,q as l,F as B,T as S,s as v,R as X,v as Z,B as z,a3 as ee,a5 as te,E as ae,K as oe,L as le,bF as se,ab as ne,aC as re,M as ie,a7 as de,ac as pe,a1 as ce,ad as me,W as ue,Y as _e}from"./index-37fee5a0.js";/* empty css                   *//* empty css                      *//* empty css                 *//* empty css               *//* empty css                  *//* empty css                  *//* empty css                     *//* empty css                  *//* empty css                 *//* empty css                    */import"./el-tooltip-4ed993c7.js";/* empty css                        *//* empty css                *//* empty css                *//* empty css                          *//* empty css                 */import"./el-form-item-4ed993c7.js";/* empty css                  */import{_ as ge}from"./question-edit.vue_vue_type_style_index_0_lang-5721fb02.js";import{g as fe,h as he,i as ye,j as ve}from"./questions-ed9350e1.js";import{_ as be}from"./_plugin-vue_export-helper-c27b6911.js";/* empty css                  *//* empty css                   *//* empty css                  */import"./index-75241224.js";/* empty css                        */import"./index.vue_vue_type_style_index_0_lang-9e528ade.js";import"./attachment-78567e2f.js";import"./index.vue_vue_type_script_setup_true_lang-1f515813.js";/* empty css                 *//* empty css               *//* empty css               *//* empty css                    *//* empty css                    */import"./el-dropdown-item-4ed993c7.js";import"./index.vue_vue_type_script_setup_true_lang-a7856b99.js";/* empty css                   */import"./index.vue_vue_type_script_setup_true_lang-165de32d.js";import"./sortable.esm-be94e56d.js";const Ce={class:"main-container"},ke={class:"flex justify-between items-center"},xe={class:"text-page-title"},Ee={class:"mt-[10px]"},Pe={key:0},qe={key:1},De={class:"mt-[16px] flex justify-end"},Te=Y({__name:"list",setup(Ve){H();const L=J().meta.title,k=P(!1),a=q({page:1,limit:10,total:0,loading:!0,data:[],searchParam:{questions_desc:"",category_id:[],questions_type:"",order:"",sort:""}}),D=P(),x=q([]),E=q([]);(()=>{fe().then(n=>{const e=n.data;if(e){const i=[];e.forEach(c=>{const m=[];c.child_list&&c.child_list.forEach(_=>{m.push({value:_.category_id,label:_.category_name})}),i.push({value:c.category_id,label:c.category_name,children:m})}),x.splice(0,x.length,...i)}}),he().then(n=>{const e=n.data.data;if(e)for(const i in e)E.push(e[i])})})();const u=(n=1)=>{a.loading=!0,a.page=n;const e=ee(a.searchParam);ye({page:a.page,limit:a.limit,...e}).then(i=>{a.loading=!1,a.data=i.data.data,a.total=i.data.total}).catch(()=>{a.loading=!1})};u();const b=P(null),N=()=>{b.value.setFormData(),b.value.showDialog=!0},$=n=>{b.value.setFormData(n),b.value.showDialog=!0},R=(n,e)=>{if(typeof e=="string"&&e.length===1)return[n.findIndex(i=>i.id===e)];{const i=e.split(",");return n.reduce((c,m,_)=>(i.includes(m.id)&&c.push(_),c),[])}},Q=n=>{te.confirm(l("goodsDeleteTips"),l("warning"),{confirmButtonText:l("confirm"),cancelButtonText:l("cancel"),type:"warning"}).then(()=>{k.value||(k.value=!0,ve({id:n}).then(()=>{u(),k.value=!1}).catch(()=>{k.value=!1}))})},U=n=>{n&&(n.resetFields(),a.searchParam.start_price="",a.searchParam.end_price="",a.searchParam.start_sale_num="",a.searchParam.end_sale_num="",u())};return(n,e)=>{const i=ae,c=oe,m=le,_=se,j=ne,I=re,M=ie,T=de,g=pe,O=w("Check"),V=ce,G=w("Close"),A=me,K=ue,W=_e;return d(),f("div",Ce,[o(T,{class:"box-card !border-none",shadow:"never"},{default:s(()=>[h("div",ke,[h("span",xe,p(r(L)),1),o(i,{type:"primary",onClick:N},{default:s(()=>[y(p(r(l)("addGoods")),1)]),_:1})]),o(T,{class:"box-card !border-none my-[10px] table-search-wrap",shadow:"never"},{default:s(()=>[o(M,{inline:!0,model:a.searchParam,ref_key:"searchFormRef",ref:D},{default:s(()=>[o(m,{label:r(l)("goodsName"),prop:"goods_name"},{default:s(()=>[o(c,{modelValue:a.searchParam.questions_desc,"onUpdate:modelValue":e[0]||(e[0]=t=>a.searchParam.questions_desc=t),modelModifiers:{trim:!0},placeholder:r(l)("goodsNamePlaceholder"),maxlength:"60"},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),o(m,{label:r(l)("科目分类"),prop:"category_id"},{default:s(()=>[o(_,{modelValue:a.searchParam.category_id,"onUpdate:modelValue":e[1]||(e[1]=t=>a.searchParam.category_id=t),options:x,placeholder:r(l)("goodsCategoryPlaceholder"),clearable:"",props:{value:"value",label:"label",emitPath:!1}},null,8,["modelValue","options","placeholder"])]),_:1},8,["label"]),o(m,{label:r(l)("questions_type"),prop:"questions_type"},{default:s(()=>[o(I,{modelValue:a.searchParam.questions_type,"onUpdate:modelValue":e[2]||(e[2]=t=>a.searchParam.questions_type=t),placeholder:r(l)("goodsTypePlaceholder"),clearable:""},{default:s(()=>[(d(!0),f(B,null,S(E,t=>(d(),v(j,{key:t.type,label:t.type_name,value:t.questions_type},null,8,["label","value"]))),128))]),_:1},8,["modelValue","placeholder"])]),_:1},8,["label"]),o(m,null,{default:s(()=>[o(i,{type:"primary",onClick:e[3]||(e[3]=t=>u())},{default:s(()=>[y(p(r(l)("search")),1)]),_:1}),o(i,{onClick:e[4]||(e[4]=t=>U(D.value))},{default:s(()=>[y(p(r(l)("reset")),1)]),_:1})]),_:1})]),_:1},8,["model"])]),_:1}),h("div",Ee,[X((d(),v(A,{data:a.data,size:"large",ref:"goodsListTableRef",onSortChange:n.sortChange,onSelectionChange:n.handleSelectionChange},{empty:s(()=>[h("span",null,p(a.loading?"":r(l)("emptyData")),1)]),default:s(()=>[o(g,{type:"selection",width:"55"}),o(g,{prop:"id",label:r(l)("id"),"min-width":"50"},null,8,["label"]),o(g,{prop:"questions_type",label:r(l)("题目类型"),"min-width":"100"},{default:s(({row:t})=>[h("div",null,p(E[t.questions_type-1].type_name),1)]),_:1},8,["label"]),o(g,{prop:"questions_desc",label:r(l)("questions_desc"),"min-width":"300"},null,8,["label"]),o(g,{label:r(l)("questions_options"),"min-width":"300"},{default:s(({row:t})=>[t.options?(d(),f("div",Pe,[(d(!0),f(B,null,S(t.options,(C,F)=>(d(),f("div",{key:F,class:Z(R(t.options,t.answer).includes(F)?"text-green-500":"")},p(C.id)+". "+p(C.value),3))),128))])):(d(),f("div",qe,[+t.answer?(d(),v(V,{key:0,class:"text-green-500"},{default:s(()=>[o(O)]),_:1})):(d(),v(V,{key:1,class:"text-red-500"},{default:s(()=>[o(G)]),_:1}))]))]),_:1},8,["label"]),o(g,{label:r(l)("operation"),fixed:"right",align:"right","min-width":"120"},{default:s(({row:t})=>[o(i,{type:"primary",link:"",onClick:C=>$(t)},{default:s(()=>[y(p(r(l)("edit")),1)]),_:2},1032,["onClick"]),t.status==1?(d(),v(i,{key:0,type:"primary",link:"",onClick:C=>n.statusChange(t,0)},{default:s(()=>[y(p(r(l)("statusActionOff")),1)]),_:2},1032,["onClick"])):z("",!0),t.status!=1?(d(),v(i,{key:1,type:"primary",link:"",onClick:C=>Q(t.id)},{default:s(()=>[y(p(r(l)("delete")),1)]),_:2},1032,["onClick"])):z("",!0)]),_:1},8,["label"])]),_:1},8,["data","onSortChange","onSelectionChange"])),[[W,a.loading]]),h("div",De,[o(K,{"current-page":a.page,"onUpdate:current-page":e[5]||(e[5]=t=>a.page=t),"page-size":a.limit,"onUpdate:page-size":e[6]||(e[6]=t=>a.limit=t),layout:"total, sizes, prev, pager, next, jumper",total:a.total,onSizeChange:e[7]||(e[7]=t=>u()),onCurrentChange:u},null,8,["current-page","page-size","total"])])]),o(ge,{ref_key:"editQuestionDialog",ref:b,onComplete:n.loadCategoryList},null,8,["onComplete"])]),_:1})])}}});const yt=be(Te,[["__scopeId","data-v-d271bb76"]]);export{yt as default};