import{d as Q,x as W,f as Y,r as b,n as G,P as H,aJ as X,Q as Z,a2 as ee,h as m,c as N,R as T,s as g,w as t,e,a as s,u as a,q as o,i as _,t as r,A as te,B as ae,a5 as le,aW as oe,a1 as ne,ax as se,K as ie,L as ce,E as de,M as re,a7 as pe,J as me,ac as _e,ad as ue,ay as fe,Y as ve,p as he,g as be}from"./index-2a89d409.js";/* empty css                   *//* empty css                    *//* empty css                 *//* empty css                    */import"./el-tooltip-4ed993c7.js";/* empty css                  *//* empty css                     *//* empty css                        *//* empty css               *//* empty css                 *//* empty css                        *//* empty css                *//* empty css                *//* empty css                  */import"./el-form-item-4ed993c7.js";/* empty css                 *//* empty css                 */import{_ as B}from"./category_default-6c62f083.js";import{_ as ge}from"./index.vue_vue_type_style_index_0_lang-b5cbd72d.js";import{a as ye}from"./tkdevtool-52fb9537.js";import{g as xe,d as we}from"./tools-fc8a632b.js";import{_ as ke}from"./_plugin-vue_export-helper-c27b6911.js";/* empty css                    */const A=u=>(he("data-v-07108f1e"),u=u(),be(),u),Ee={class:"main-container p-4"},Ce={style:{width:"640px"},class:"mb-2"},Ve={class:"flex"},Ne={class:"w-[320px]"},Te={class:"d-card p-4"},Be=A(()=>s("div",{class:"text-[#409efc]"},"上传插件",-1)),Ae={class:"flex justify-between"},Ie={class:"flex items-center justify-between"},De=A(()=>s("img",{class:"w-[45px] h-[45px]",src:B,alt:""},null,-1)),Fe={key:1,class:"w-[45px] h-[45px]",src:B,alt:""},Ue={class:"flex-1 w-[236px] pl-[15px] truncate"},Re=Q({__name:"copy",setup(u){const I=W(),D=Y();I.meta.title;const x=b(null),f=G({params:{search:""},loading:!1,data:[],activeName:"developmentProcess",active:0}),{params:y,data:F,activeName:je,active:Pe}=H(f);X(()=>{window.addonActiveName&&(f.activeName=window.addonActiveName+"",window.addonActiveName=null),v()});const v=()=>{i.value=!0,xe(f.params).then(n=>{f.data=n.data,i.value=!1}).catch(()=>{i.value=!1})},U=n=>{n&&(n.resetFields(),v())},R=n=>{D.push({path:"/tools/addon_edit",query:{key:n}})},j=n=>{le.confirm(o("codeDeleteTips"),o("warning"),{confirmButtonText:o("confirm"),cancelButtonText:o("cancel"),type:"warning"}).then(()=>{i.value=!0,we(n).then(()=>{v()}).catch(()=>{i.value=!1})})},w=b("admin"),i=b(!1),p=b(),P=()=>{p.value&&(i.value=!0,ye({file_url:p.value}).then(n=>{i.value=!1,p.value=""}))};return Z(p,n=>{n&&P()}),(n,c)=>{const S=oe,$=ee("Upload"),M=ne,k=se,O=ie,E=ce,h=de,q=re,C=pe,J=me,d=_e,L=ue,z=fe,V=ve;return m(),N("div",Ee,[T((m(),g(C,{"element-loading-text":"正在执行,请稍后...",class:"box-card !border-none mt-2",shadow:"never"},{default:t(()=>[e(z,{modelValue:w.value,"onUpdate:modelValue":c[3]||(c[3]=l=>w.value=l),onTabClick:n.handleClick},{default:t(()=>[e(k,{label:"插件上传",name:"admin"},{default:t(()=>[s("div",Ce,[e(S,{type:"warning",title:"提示：上传插件会自动解析插件信息,未安装插件将会自动安装，已经安装插件将会自动替换成最新上传包，同时会备份插件相关的代码和数据到站点upgrade下，出错可快速恢复",closable:!1,"show-icon":""})]),s("div",Ve,[s("div",Ne,[e(ge,{modelValue:p.value,"onUpdate:modelValue":c[0]||(c[0]=l=>p.value=l),api:"sys/document/applet"},{default:t(()=>[s("div",Te,[e(M,{color:"#409efc"},{default:t(()=>[e($)]),_:1}),Be])]),_:1},8,["modelValue"])])])]),_:1}),e(k,{label:"插件列表",name:"addonlist"},{default:t(()=>[e(C,{class:"box-card !border-none mb-[10px] table-search-wrap",shadow:"never"},{default:t(()=>[s("div",Ae,[e(q,{inline:!0,model:a(y),ref_key:"searchFormRef",ref:x},{default:t(()=>[e(E,{label:a(o)("title"),prop:"search"},{default:t(()=>[e(O,{modelValue:a(y).search,"onUpdate:modelValue":c[1]||(c[1]=l=>a(y).search=l),placeholder:a(o)("titlePlaceholder")},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),e(E,null,{default:t(()=>[e(h,{type:"primary",onClick:v},{default:t(()=>[_(r(a(o)("search")),1)]),_:1}),e(h,{onClick:c[2]||(c[2]=l=>U(x.value))},{default:t(()=>[_(r(a(o)("reset")),1)]),_:1})]),_:1})]),_:1},8,["model"])])]),_:1}),T((m(),g(L,{data:a(F),size:"large",class:"pt-[5px]"},{empty:t(()=>[s("span",null,r(a(o)("emptyData")),1)]),default:t(()=>[e(d,{label:a(o)("title"),align:"left","min-width":"320"},{default:t(({row:l})=>[s("div",Ie,[l.icon?(m(),g(J,{key:0,class:"w-[45px] h-[45px]",src:l.icon.indexOf("data:image")!=-1?l.icon:a(te)(l.icon),fit:"contain"},{error:t(()=>[De]),_:2},1032,["src"])):(m(),N("img",Fe)),s("div",Ue,r(l.title),1)])]),_:1},8,["label"]),e(d,{prop:"key",label:a(o)("key"),align:"center","min-width":"200"},null,8,["label"]),e(d,{prop:"type_name",label:a(o)("type"),align:"center","min-width":"200"},null,8,["label"]),e(d,{prop:"author",label:a(o)("author"),align:"center","min-width":"200"},null,8,["label"]),e(d,{prop:"version",label:a(o)("version"),align:"center","min-width":"200"},null,8,["label"]),e(d,{label:a(o)("status"),align:"center","min-width":"200"},{default:t(({row:l})=>[_(r(Object.keys(l.install_info).length?"已安装":"未安装"),1)]),_:1},8,["label"]),e(d,{label:a(o)("operation"),fixed:"right",align:"right",width:"180","show-overflow-tooltip":!0},{default:t(({row:l})=>[e(h,{type:"primary",link:"",onClick:K=>R(l.key)},{default:t(()=>[_(r(a(o)("edit")),1)]),_:2},1032,["onClick"]),Object.keys(l.install_info).length?ae("",!0):(m(),g(h,{key:0,type:"primary",link:"",onClick:K=>j(l.key)},{default:t(()=>[_(r(a(o)("delete")),1)]),_:2},1032,["onClick"]))]),_:1},8,["label"])]),_:1},8,["data"])),[[V,i.value]])]),_:1})]),_:1},8,["modelValue","onTabClick"])]),_:1})),[[V,i.value]])])}}});const ct=ke(Re,[["__scopeId","data-v-07108f1e"]]);export{ct as default};
