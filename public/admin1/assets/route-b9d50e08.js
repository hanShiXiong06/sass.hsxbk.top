import{d as ae,n as x,f as te,x as le,r as c,aS as oe,a5 as ne,R as I,q as o,l as se,h as v,c as L,e as l,w as s,a as _,t as r,u as n,F as ie,Q as re,s as C,i as h,P as pe,B as J,aT as de,J as me,K as ue,ak as ce,aI as _e,E as fe,L as he,a0 as ge,aa as be,ac as ve,T as ye,aD as Ve,aE as we,a1 as ke,U as De}from"./index-17984968.js";/* empty css                   *//* empty css                  *//* empty css                   */import xe from"./index-0ce1f7fc.js";/* empty css                    *//* empty css                      *//* empty css                 *//* empty css               *//* empty css                  *//* empty css                  *//* empty css                     *//* empty css                  *//* empty css                 *//* empty css                    */import"./el-tooltip-4ed993c7.js";/* empty css                        *//* empty css                *//* empty css                *//* empty css                  */import"./el-form-item-4ed993c7.js";import{n as Ce,j as Ee,o as Re,p as Pe,q as Se}from"./diy-90301b82.js";/* empty css                        */import"./index.vue_vue_type_style_index_0_lang-c5bcb8a9.js";import"./attachment-a816d3ef.js";import"./index.vue_vue_type_script_setup_true_lang-8693344a.js";/* empty css                 *//* empty css                 *//* empty css               *//* empty css               *//* empty css                    *//* empty css                         */import"./index.vue_vue_type_script_setup_true_lang-5615c67a.js";/* empty css                   */import"./index.vue_vue_type_script_setup_true_lang-8e50df98.js";/* empty css                */import"./_plugin-vue_export-helper-c27b6911.js";import"./sortable.esm-be94e56d.js";const Te={class:"main-container"},Ue={class:"flex justify-between items-center"},Fe={class:"text-page-title"},Ne={class:"mr-[10px]"},$e={class:"mr-[10px]"},ze={class:"mt-[16px] flex justify-end"},Be={class:"dialog-footer"},xa=ae({__name:"route",setup(Ie){const O=x({});te();const j=le().meta.title;c(),c(!1);const i=x({page:1,limit:10,total:0,loading:!0,data:[],searchParam:{title:"",addon_name:""}}),E=c("");(async()=>{E.value=(await de()).data.wap_url})();const R=x({});Ce().then(a=>{if(a.data)for(const e in a.data)R[e]=a.data[e]});const g=(a=1)=>{i.loading=!0,i.page=a,Re({page:i.page,limit:i.limit,...i.searchParam}).then(e=>{i.loading=!1;const m=Math.ceil(e.data.length/i.limit),u=JSON.parse(JSON.stringify(e.data)),V=[];for(let w=0;w<m;w++)V[w]=u.splice(0,i.limit);i.data=V[i.page-1],i.total=e.data.length}).catch(()=>{i.loading=!1})};g(),Ee({}).then(a=>{for(const e in a.data)O[e]=a.data[e]});const P=c(),{copy:A,isSupported:q,copied:S}=oe(),T=a=>{q.value||I({message:o("notSupportCopy"),type:"warning"}),A(a)};ne(S,()=>{S.value&&I({message:o("copySuccess"),type:"success"})});const p=c("wechat"),U=c(""),F=c(0),b=x({title:"",name:"",page:"",is_share:0,sort:0}),d=x({wechat:{title:"",desc:"",url:""},weapp:{title:"",url:""}}),y=c(!1),M=se(()=>({})),N=c(),G=async a=>{const e=(await Pe({name:a.name})).data;e.title&&(a.id=e.id,a.title=e.title,a.name=e.name,a.page=e.page,a.is_share=e.is_share,a.sort=e.sort,a.share=e.share),b.title=a.title,b.name=a.name,b.page=a.page,b.is_share=a.is_share,b.sort=a.sort,F.value=a.id,U.value=a.title;const m=a.share?JSON.parse(a.share):{wechat:{title:"",desc:"",url:""},weapp:{title:"",url:""}};m&&(d.wechat=m.wechat,d.weapp=m.weapp),y.value=!0},K=async a=>{a&&await a.validate(async e=>{e&&Se({id:F.value,share:JSON.stringify(d),...b}).then(()=>{g(),y.value=!1}).catch(()=>{})})},Q=a=>{a&&(a.resetFields(),g())};return(a,e)=>{const m=me,u=ue,V=ce,w=_e,f=fe,$=he,z=ge,k=be,H=ve,W=ye,B=Ve,X=we,Y=xe,Z=ke,ee=De;return v(),L("div",Te,[l(z,{class:"box-card !border-none",shadow:"never"},{default:s(()=>[_("div",Ue,[_("span",Fe,r(n(j)),1)]),l(z,{class:"box-card !border-none my-[10px] table-search-wrap",shadow:"never"},{default:s(()=>[l($,{inline:!0,model:i.searchParam,ref_key:"searchFormDiyRouteRef",ref:P},{default:s(()=>[l(u,{label:n(o)("title"),prop:"title"},{default:s(()=>[l(m,{modelValue:i.searchParam.title,"onUpdate:modelValue":e[0]||(e[0]=t=>i.searchParam.title=t),placeholder:n(o)("titlePlaceholder")},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),l(u,{label:n(o)("forAddon"),prop:"addon_name"},{default:s(()=>[l(w,{modelValue:i.searchParam.addon_name,"onUpdate:modelValue":e[1]||(e[1]=t=>i.searchParam.addon_name=t),placeholder:n(o)("pageTypePlaceholder")},{default:s(()=>[l(V,{label:n(o)("all"),value:""},null,8,["label"]),(v(!0),L(ie,null,re(R,(t,D)=>(v(),C(V,{label:t.title,value:D,key:D},null,8,["label","value"]))),128))]),_:1},8,["modelValue","placeholder"])]),_:1},8,["label"]),l(u,null,{default:s(()=>[l(f,{type:"primary",onClick:e[2]||(e[2]=t=>g())},{default:s(()=>[h(r(n(o)("search")),1)]),_:1}),l(f,{onClick:e[3]||(e[3]=t=>Q(P.value))},{default:s(()=>[h(r(n(o)("reset")),1)]),_:1})]),_:1})]),_:1},8,["model"])]),_:1}),pe((v(),C(H,{data:i.data,size:"large"},{empty:s(()=>[_("span",null,r(i.loading?"":n(o)("emptyData")),1)]),default:s(()=>[l(k,{prop:"title",label:n(o)("title"),"min-width":"70"},null,8,["label"]),l(k,{prop:"addon_title",label:n(o)("forAddon"),"min-width":"70"},{default:s(({row:t})=>[_("span",null,r(t.addon_info.title),1)]),_:1},8,["label"]),l(k,{prop:"page",label:n(o)("wapUrl"),"min-width":"230"},{default:s(({row:t})=>[_("span",Ne,r(E.value+t.page),1),l(f,{type:"primary",link:"",onClick:D=>T(E.value+t.page)},{default:s(()=>[h(r(n(o)("copy")),1)]),_:2},1032,["onClick"])]),_:1},8,["label"]),l(k,{prop:"page",label:n(o)("weappUrl"),"min-width":"120"},{default:s(({row:t})=>[_("span",$e,r(t.page),1),l(f,{type:"primary",link:"",onClick:D=>T(t.page)},{default:s(()=>[h(r(n(o)("copy")),1)]),_:2},1032,["onClick"])]),_:1},8,["label"]),l(k,{label:n(o)("share"),fixed:"right",align:"right","min-width":"40"},{default:s(({row:t})=>[t.is_share==1?(v(),C(f,{key:0,type:"primary",link:"",onClick:D=>G(t)},{default:s(()=>[h(r(n(o)("shareSet")),1)]),_:2},1032,["onClick"])):J("",!0)]),_:1},8,["label"])]),_:1},8,["data"])),[[ee,i.loading]]),_("div",ze,[l(W,{"current-page":i.page,"onUpdate:current-page":e[4]||(e[4]=t=>i.page=t),"page-size":i.limit,"onUpdate:page-size":e[5]||(e[5]=t=>i.limit=t),layout:"total, sizes, prev, pager, next, jumper",total:i.total,onSizeChange:e[6]||(e[6]=t=>g()),onCurrentChange:g},null,8,["current-page","page-size","total"])])]),_:1}),l(Z,{modelValue:y.value,"onUpdate:modelValue":e[13]||(e[13]=t=>y.value=t),title:n(o)("shareSet"),width:"30%"},{footer:s(()=>[_("span",Be,[l(f,{onClick:e[11]||(e[11]=t=>y.value=!1)},{default:s(()=>[h(r(n(o)("cancel")),1)]),_:1}),l(f,{type:"primary",onClick:e[12]||(e[12]=t=>K(N.value))},{default:s(()=>[h(r(n(o)("confirm")),1)]),_:1})])]),default:s(()=>[l(X,{modelValue:p.value,"onUpdate:modelValue":e[7]||(e[7]=t=>p.value=t)},{default:s(()=>[l(B,{label:n(o)("wechat"),name:"wechat"},null,8,["label"]),l(B,{label:n(o)("weapp"),name:"weapp"},null,8,["label"])]),_:1},8,["modelValue"]),l($,{model:d[p.value],"label-width":"90px",ref_key:"shareFormRef",ref:N,rules:n(M)},{default:s(()=>[l(u,{label:n(o)("sharePage")},{default:s(()=>[_("span",null,r(U.value),1)]),_:1},8,["label"]),l(u,{label:n(o)("shareTitle"),prop:"title"},{default:s(()=>[l(m,{modelValue:d[p.value].title,"onUpdate:modelValue":e[8]||(e[8]=t=>d[p.value].title=t),placeholder:n(o)("shareTitlePlaceholder"),clearable:"",maxlength:"30","show-word-limit":""},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),p.value=="wechat"?(v(),C(u,{key:0,label:n(o)("shareDesc"),prop:"desc"},{default:s(()=>[l(m,{modelValue:d[p.value].desc,"onUpdate:modelValue":e[9]||(e[9]=t=>d[p.value].desc=t),placeholder:n(o)("shareDescPlaceholder"),type:"textarea",rows:"4",clearable:"",maxlength:"100","show-word-limit":""},null,8,["modelValue","placeholder"])]),_:1},8,["label"])):J("",!0),l(u,{label:n(o)("shareImageUrl"),prop:"url"},{default:s(()=>[l(Y,{modelValue:d[p.value].url,"onUpdate:modelValue":e[10]||(e[10]=t=>d[p.value].url=t),limit:1},null,8,["modelValue"])]),_:1},8,["label"])]),_:1},8,["model","rules"])]),_:1},8,["modelValue","title"])])}}});export{xa as default};