import{d as de,f as pe,x as ue,n as T,l as O,q as t,r as h,h as p,c as b,e as o,w as n,a as w,t as d,u as a,i as m,F as E,Q as N,s as v,P as me,B as U,_ as ce,E as fe,J as _e,K as ye,ak as ge,aI as he,L as be,a0 as ve,aa as we,ac as Pe,T as Ve,a1 as ke,aD as Ce,aE as xe,U as De}from"./index-17984968.js";/* empty css                   */import Te from"./index-0ce1f7fc.js";/* empty css                    *//* empty css                  *//* empty css                   *//* empty css                      *//* empty css                 *//* empty css               *//* empty css                  *//* empty css                  *//* empty css                     *//* empty css                  *//* empty css                 *//* empty css                    */import"./el-tooltip-4ed993c7.js";/* empty css                        *//* empty css                *//* empty css                */import"./el-form-item-4ed993c7.js";/* empty css                  */import{h as Ee,j as Ue,k as Fe,s as $e,l as Se,m as Ne}from"./diy-90301b82.js";/* empty css                        */import"./index.vue_vue_type_style_index_0_lang-c5bcb8a9.js";import"./attachment-a816d3ef.js";import"./index.vue_vue_type_script_setup_true_lang-8693344a.js";/* empty css                 *//* empty css                 *//* empty css               *//* empty css               *//* empty css                    *//* empty css                         */import"./index.vue_vue_type_script_setup_true_lang-5615c67a.js";/* empty css                   */import"./index.vue_vue_type_script_setup_true_lang-8e50df98.js";/* empty css                */import"./_plugin-vue_export-helper-c27b6911.js";import"./sortable.esm-be94e56d.js";const Re={class:"main-container"},Be={class:"flex justify-between items-center"},Ie={class:"text-page-title"},Ae={key:0},qe={key:0,class:"text-primary"},ze={key:1},Le={class:"mt-[16px] flex justify-end"},je={class:"dialog-footer"},Ge={class:"dialog-footer"},Ul=de({__name:"list",setup(Je){const F=pe(),Y=ue().meta.title,k=T({}),y=T({title:"",type:""}),K=O(()=>({title:[{required:!0,message:t("titlePlaceholder"),trigger:"blur"}],type:[{required:!0,message:t("pageTypePlaceholder"),trigger:"blur"}]})),R=h(),C=h(!1),M=async r=>{r&&await r.validate(async e=>{if(e){const s={type:y.type,title:y.title},P=F.resolve({path:"/decorate/edit",query:s});window.open(P.href),C.value=!1,y.title="",y.type=""}})},B=(r="")=>{Ue({mode:"",addon:r}).then(e=>{for(let s in k)delete k[s];for(const s in e.data)k[s]=e.data[s]})};B();const I=T({});Ee().then(r=>{if(r.data)for(const e in r.data)I[e]=r.data[e]});const Q=r=>{i.searchParam.type="",B(r)},i=T({page:1,limit:10,total:0,loading:!0,data:[],searchParam:{title:"",type:"",mode:"",addon_name:""}}),A=h(),g=(r=1)=>{i.loading=!0,i.page=r,Fe({page:i.page,limit:i.limit,...i.searchParam}).then(e=>{i.loading=!1,i.data=e.data.data,i.total=e.data.total}).catch(()=>{i.loading=!1})};g();const H=r=>{const e=F.resolve({path:"/decorate/edit",query:{id:r.id}});window.open(e.href)},W=r=>{$e({id:r}).then(()=>{g()})},X=r=>{ce.confirm(t("diyPageDeleteTips"),t("warning"),{confirmButtonText:t("confirm"),cancelButtonText:t("cancel"),type:"warning"}).then(()=>{Se(r).then(()=>{g()}).catch(()=>{})})},Z=r=>{const e=F.resolve({path:"/preview/wap",query:{page:r.type_page+"?id="+r.id}});window.open(e.href)},c=h("wechat"),q=h(""),z=h(0),f=T({wechat:{title:"",desc:"",url:""},weapp:{title:"",url:""}}),x=h(!1),ee=O(()=>({})),L=h(),le=async r=>{z.value=r.id,q.value=r.title;const e=r.share?JSON.parse(r.share):{wechat:{title:"",desc:"",url:""},weapp:{title:"",url:""}};e&&(f.wechat=e.wechat,f.weapp=e.weapp),x.value=!0},te=async r=>{r&&await r.validate(async e=>{e&&Ne({id:z.value,share:JSON.stringify(f)}).then(()=>{g(),x.value=!1}).catch(()=>{})})},ae=r=>{r&&(r.resetFields(),g())};return(r,e)=>{const s=fe,P=_e,_=ye,D=ge,$=he,S=be,j=ve,V=we,oe=Pe,ne=Ve,G=ke,J=Ce,re=xe,ie=Te,se=De;return p(),b("div",Re,[o(j,{class:"box-card !border-none",shadow:"never"},{default:n(()=>[w("div",Be,[w("span",Ie,d(a(Y)),1),o(s,{type:"primary",class:"w-[100px]",onClick:e[0]||(e[0]=l=>C.value=!0)},{default:n(()=>[m(d(a(t)("addDiyPage")),1)]),_:1})]),o(j,{class:"box-card !border-none my-[10px] table-search-wrap",shadow:"never"},{default:n(()=>[o(S,{inline:!0,model:i.searchParam,ref_key:"searchFormDiyPageRef",ref:A},{default:n(()=>[o(_,{label:a(t)("title"),prop:"title"},{default:n(()=>[o(P,{modelValue:i.searchParam.title,"onUpdate:modelValue":e[1]||(e[1]=l=>i.searchParam.title=l),placeholder:a(t)("titlePlaceholder")},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),o(_,{label:a(t)("forAddon"),prop:"addon_name"},{default:n(()=>[o($,{modelValue:i.searchParam.addon_name,"onUpdate:modelValue":e[2]||(e[2]=l=>i.searchParam.addon_name=l),placeholder:a(t)("pageTypePlaceholder"),onChange:Q},{default:n(()=>[o(D,{label:a(t)("all"),value:""},null,8,["label"]),(p(!0),b(E,null,N(I,(l,u)=>(p(),v(D,{label:l.title,value:u,key:u},null,8,["label","value"]))),128))]),_:1},8,["modelValue","placeholder"])]),_:1},8,["label"]),o(_,{label:a(t)("typeName"),prop:"type"},{default:n(()=>[o($,{modelValue:i.searchParam.type,"onUpdate:modelValue":e[3]||(e[3]=l=>i.searchParam.type=l),placeholder:a(t)("pageTypePlaceholder")},{default:n(()=>[o(D,{label:a(t)("all"),value:""},null,8,["label"]),(p(!0),b(E,null,N(k,(l,u)=>(p(),v(D,{label:l.title,value:u,key:u},null,8,["label","value"]))),128))]),_:1},8,["modelValue","placeholder"])]),_:1},8,["label"]),o(_,null,{default:n(()=>[o(s,{type:"primary",onClick:e[4]||(e[4]=l=>g())},{default:n(()=>[m(d(a(t)("search")),1)]),_:1}),o(s,{onClick:e[5]||(e[5]=l=>ae(A.value))},{default:n(()=>[m(d(a(t)("reset")),1)]),_:1})]),_:1})]),_:1},8,["model"])]),_:1}),me((p(),v(oe,{data:i.data,size:"large"},{empty:n(()=>[w("span",null,d(i.loading?"":a(t)("emptyData")),1)]),default:n(()=>[o(V,{prop:"page_title",label:a(t)("title"),"min-width":"120"},null,8,["label"]),o(V,{prop:"addon_name",label:a(t)("forAddon"),"min-width":"80"},null,8,["label"]),o(V,{prop:"type_name",label:a(t)("typeName"),"min-width":"80"},null,8,["label"]),o(V,{label:a(t)("status"),"min-width":"80"},{default:n(({row:l})=>[l.type=="DIY_PAGE"?(p(),b("span",Ae,"-")):(p(),b(E,{key:1},[l.is_default==1?(p(),b("span",qe,d(a(t)("isUse")),1)):(p(),b("span",ze,d(a(t)("unused")),1))],64))]),_:1},8,["label"]),o(V,{prop:"update_time",label:a(t)("updateTime"),"min-width":"120"},null,8,["label"]),o(V,{label:a(t)("operation"),fixed:"right",align:"right","min-width":"160"},{default:n(({row:l})=>[o(s,{type:"primary",link:"",onClick:u=>Z(l)},{default:n(()=>[m(d(a(t)("preview")),1)]),_:2},1032,["onClick"]),l.is_default==0?(p(),v(s,{key:0,type:"primary",link:"",onClick:u=>W(l.id)},{default:n(()=>[m(d(a(t)("use")),1)]),_:2},1032,["onClick"])):U("",!0),l.type=="DIY_PAGE"?(p(),v(s,{key:1,type:"primary",link:"",onClick:u=>le(l)},{default:n(()=>[m(d(a(t)("shareSet")),1)]),_:2},1032,["onClick"])):U("",!0),o(s,{type:"primary",link:"",onClick:u=>H(l)},{default:n(()=>[m(d(a(t)("edit")),1)]),_:2},1032,["onClick"]),l.is_default==0||l.type=="DIY_PAGE"?(p(),v(s,{key:2,type:"primary",link:"",onClick:u=>X(l.id)},{default:n(()=>[m(d(a(t)("delete")),1)]),_:2},1032,["onClick"])):U("",!0)]),_:1},8,["label"])]),_:1},8,["data"])),[[se,i.loading]]),w("div",Le,[o(ne,{"current-page":i.page,"onUpdate:current-page":e[6]||(e[6]=l=>i.page=l),"page-size":i.limit,"onUpdate:page-size":e[7]||(e[7]=l=>i.limit=l),layout:"total, sizes, prev, pager, next, jumper",total:i.total,onSizeChange:e[8]||(e[8]=l=>g()),onCurrentChange:g},null,8,["current-page","page-size","total"])])]),_:1}),o(G,{modelValue:C.value,"onUpdate:modelValue":e[13]||(e[13]=l=>C.value=l),title:a(t)("addPageTips"),width:"25%"},{footer:n(()=>[w("span",je,[o(s,{onClick:e[11]||(e[11]=l=>C.value=!1)},{default:n(()=>[m(d(a(t)("cancel")),1)]),_:1}),o(s,{type:"primary",onClick:e[12]||(e[12]=l=>M(R.value))},{default:n(()=>[m(d(a(t)("confirm")),1)]),_:1})])]),default:n(()=>[o(S,{model:y,"label-width":"90px",ref_key:"formRef",ref:R,rules:a(K)},{default:n(()=>[o(_,{label:a(t)("title"),prop:"title"},{default:n(()=>[o(P,{modelValue:y.title,"onUpdate:modelValue":e[9]||(e[9]=l=>y.title=l),placeholder:a(t)("titlePlaceholder"),clearable:"",maxlength:"12","show-word-limit":"",class:"w-full"},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),o(_,{label:a(t)("typeName"),prop:"type"},{default:n(()=>[o($,{modelValue:y.type,"onUpdate:modelValue":e[10]||(e[10]=l=>y.type=l),placeholder:a(t)("pageTypePlaceholder"),class:"w-full"},{default:n(()=>[(p(!0),b(E,null,N(k,(l,u)=>(p(),v(D,{label:l.title,value:u,key:u},null,8,["label","value"]))),128))]),_:1},8,["modelValue","placeholder"])]),_:1},8,["label"])]),_:1},8,["model","rules"])]),_:1},8,["modelValue","title"]),o(G,{modelValue:x.value,"onUpdate:modelValue":e[20]||(e[20]=l=>x.value=l),title:a(t)("shareSet"),width:"30%"},{footer:n(()=>[w("span",Ge,[o(s,{onClick:e[18]||(e[18]=l=>x.value=!1)},{default:n(()=>[m(d(a(t)("cancel")),1)]),_:1}),o(s,{type:"primary",onClick:e[19]||(e[19]=l=>te(L.value))},{default:n(()=>[m(d(a(t)("confirm")),1)]),_:1})])]),default:n(()=>[o(re,{modelValue:c.value,"onUpdate:modelValue":e[14]||(e[14]=l=>c.value=l)},{default:n(()=>[o(J,{label:a(t)("wechat"),name:"wechat"},null,8,["label"]),o(J,{label:a(t)("weapp"),name:"weapp"},null,8,["label"])]),_:1},8,["modelValue"]),o(S,{model:f[c.value],"label-width":"90px",ref_key:"shareFormRef",ref:L,rules:a(ee)},{default:n(()=>[o(_,{label:a(t)("sharePage")},{default:n(()=>[w("span",null,d(q.value),1)]),_:1},8,["label"]),o(_,{label:a(t)("shareTitle"),prop:"title"},{default:n(()=>[o(P,{modelValue:f[c.value].title,"onUpdate:modelValue":e[15]||(e[15]=l=>f[c.value].title=l),placeholder:a(t)("shareTitlePlaceholder"),clearable:"",maxlength:"30","show-word-limit":""},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),c.value=="wechat"?(p(),v(_,{key:0,label:a(t)("shareDesc"),prop:"desc"},{default:n(()=>[o(P,{modelValue:f[c.value].desc,"onUpdate:modelValue":e[16]||(e[16]=l=>f[c.value].desc=l),placeholder:a(t)("shareDescPlaceholder"),type:"textarea",rows:"4",clearable:"",maxlength:"100","show-word-limit":""},null,8,["modelValue","placeholder"])]),_:1},8,["label"])):U("",!0),o(_,{label:a(t)("shareImageUrl"),prop:"url"},{default:n(()=>[o(ie,{modelValue:f[c.value].url,"onUpdate:modelValue":e[17]||(e[17]=l=>f[c.value].url=l),limit:1},null,8,["modelValue"])]),_:1},8,["label"])]),_:1},8,["model","rules"])]),_:1},8,["modelValue","title"])])}}});export{Ul as default};
