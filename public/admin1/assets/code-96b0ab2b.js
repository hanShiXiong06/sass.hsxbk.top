import{d as se,x as ie,f as pe,r as p,n as de,h as b,c as ue,a as u,t as d,u as l,e as t,w as n,q as e,P as M,s as V,i as c,B as A,_ as T,G as $,m as ce,aD as re,aE as me,E as fe,aa as _e,ab as ge,ac as ve,T as he,a0 as be,J as we,K as xe,L as Ve,a1 as Te,S as ye,U as Ce}from"./index-17984968.js";/* empty css                   *//* empty css                     *//* empty css                  *//* empty css                   *//* empty css                */import{_ as ke}from"./index.vue_vue_type_style_index_0_lang-90d7952a.js";import"./el-form-item-4ed993c7.js";/* empty css                 *//* empty css                *//* empty css                      *//* empty css               *//* empty css                  *//* empty css                  *//* empty css                  *//* empty css                 *//* empty css                    */import"./el-tooltip-4ed993c7.js";/* empty css                        *//* empty css                  *//* empty css                    */import{g as Ee,a as Be,b as Ue,s as Re,c as De}from"./weapp-cc74ef2e.js";import{a as Le}from"./module-12a2769a.js";import{_ as ze}from"./_plugin-vue_export-helper-c27b6911.js";/* empty css                    */const Fe={class:"main-container min-h-[300px] p-5 bg-[#fff] rounded-[4px]"},Se={class:"flex justify-between items-center mb-[20px]"},We={class:"text-page-title"},Ne={class:"mt-[50px]"},Pe={class:"mt-[16px] flex justify-end"},Ie={class:"dialog-footer"},Me=["innerHTML"],Ae={class:"flex justify-end"},$e=se({__name:"code",setup(je){const j=ie(),y=pe(),K=j.meta.title,C=p(!1),k=p(!0),i=de({page:1,limit:10,total:0,loading:!1,data:[]}),r=p({desc:"",code:"",path:"",content:""}),g=p(!1),E=p("");Le().then(s=>{s.data.data&&s.data.data.auth_code&&(E.value=s.data.data.auth_code,U()),k.value=!1}).catch(()=>{k.value=!1});const z=p({app_id:"",app_secret:""});Ee().then(s=>{z.value=s.data});const B=p("/channel/weapp/code"),H=s=>{y.push({path:B.value})},F=p(null),_=(s=1)=>{i.loading=!0,i.page=s,Ue({page:i.page,limit:i.limit}).then(a=>{i.loading=!1,i.data=a.data.data,i.total=a.data.total,s==1&&i.data.length&&i.data[0].status==0&&W(i.data[0].task_key)}).catch(()=>{i.loading=!1})};_();const q=()=>{F.value.clearValidate()},v=p(!1),S=()=>{if(!E.value){J();return}if(!z.value.app_id){O();return}v.value||(v.value=!0,w.value="",Re(r.value).then(s=>{_(),U(),v.value=!1}).catch(()=>{v.value=!1}))},G=()=>{T.alert(e("localInsertTips"),e("warning"),{confirmButtonText:e("confirm")})},w=p(""),U=()=>{E.value&&Be().then(s=>{s.data&&(w.value=`<img src="${s.data}" class="w-[150px]">`)}).catch()},W=s=>{De(s).then(a=>{const m=a.data.data??[];if(m[0]&&m[0].length){const h=m[0][m[0].length-1];if(h.code==0){_();return}if(h.code==1&&h.percent==100){_(),U(),!$.get("weappUploadTipsLock")&&(g.value=!0);return}setTimeout(()=>{W(s)},2e3)}})},J=()=>{ce()=="admin"?T.confirm(e("authTips"),e("warning"),{distinguishCancelAndClose:!0,confirmButtonText:e("toBind"),cancelButtonText:e("toNiucloud")}).then(()=>{y.push({path:"/app/authorize"})}).catch(s=>{s==="cancel"&&window.open("https://www.niucloud.com/app")}):T.alert(e("siteAuthTips"),e("warning"))},O=()=>{T.confirm(e("weappTips"),e("warning"),{confirmButtonText:e("toSetting"),cancelButtonText:e("cancel")}).then(()=>{y.push({path:"/channel/weapp/config"})}).catch(s=>{})},N=p(""),R=p(!1),Q=s=>{N.value=s.fail_reason,R.value=!0},X=()=>{$.set({key:"weappUploadTipsLock",data:!0}),g.value=!1};return(s,a)=>{const m=re,h=me,f=fe,x=_e,Y=ge,Z=ve,ee=he,ae=be,P=we,D=xe,te=ke,le=Ve,L=Te,oe=ye,I=Ce;return b(),ue("div",Fe,[u("div",Se,[u("span",We,d(l(K)),1)]),t(h,{modelValue:B.value,"onUpdate:modelValue":a[0]||(a[0]=o=>B.value=o),class:"demo-tabs",onTabChange:H},{default:n(()=>[t(m,{label:l(e)("weappAccessFlow"),name:"/channel/weapp"},null,8,["label"]),t(m,{label:l(e)("subscribeMessage"),name:"/channel/weapp/message"},null,8,["label"]),t(m,{label:l(e)("weappRelease"),name:"/channel/weapp/code"},null,8,["label"])]),_:1},8,["modelValue"]),M((b(),V(ae,{class:"box-card !border-none",shadow:"never"},{default:n(()=>[u("div",Ne,[t(f,{type:"primary",onClick:S,loading:v.value,disabled:i.loading},{default:n(()=>[c(d(l(e)("cloudRelease")),1)]),_:1},8,["loading","disabled"]),t(f,{onClick:G,disabled:i.loading},{default:n(()=>[c(d(l(e)("localRelease")),1)]),_:1},8,["disabled"])]),M((b(),V(Z,{class:"mt-[15px]",data:i.data,size:"default"},{empty:n(()=>[u("span",null,d(l(e)("emptyData")),1)]),default:n(()=>[t(x,{prop:"version",label:l(e)("code"),align:"left"},null,8,["label"]),t(x,{prop:"status_name",label:l(e)("status"),align:"left"},{default:n(({row:o})=>[u("div",null,d(o.status_name),1)]),_:1},8,["label"]),t(x,{prop:"create_time",label:l(e)("createTime"),align:"center"},null,8,["label"]),t(x,{label:l(e)("operation"),fixed:"right",align:"right","min-width":"120"},{default:n(({row:o,$index:ne})=>[w.value&&ne==0&&o.status==1&&i.page==1?(b(),V(Y,{key:0,content:w.value,"raw-content":"",effect:"light"},{default:n(()=>[t(f,{type:"primary",link:""},{default:n(()=>[c(d(l(e)("preview")),1)]),_:1})]),_:1},8,["content"])):A("",!0),o.status==-1?(b(),V(f,{key:1,type:"primary",link:"",onClick:Ke=>Q(o)},{default:n(()=>[c(d(l(e)("failReason")),1)]),_:2},1032,["onClick"])):A("",!0)]),_:1},8,["label"])]),_:1},8,["data"])),[[I,i.loading]]),u("div",Pe,[t(ee,{"current-page":i.page,"onUpdate:current-page":a[1]||(a[1]=o=>i.page=o),"page-size":i.limit,"onUpdate:page-size":a[2]||(a[2]=o=>i.limit=o),layout:"total, sizes, prev, pager, next, jumper",total:i.total,onSizeChange:_,onCurrentChange:_},null,8,["current-page","page-size","total"])])]),_:1})),[[I,k.value]]),t(L,{modelValue:C.value,"onUpdate:modelValue":a[7]||(a[7]=o=>C.value=o),title:l(e)("codeDownTwoDesc"),width:"30%","before-close":q},{footer:n(()=>[u("span",Ie,[t(f,{onClick:a[6]||(a[6]=o=>C.value=!1)},{default:n(()=>[c(d(l(e)("cancel")),1)]),_:1}),t(f,{type:"primary",onClick:S},{default:n(()=>[c(d(l(e)("confirm")),1)]),_:1})])]),default:n(()=>[t(le,{ref_key:"ruleFormRef",ref:F,model:r.value,"label-width":"120px"},{default:n(()=>[t(D,{prop:"code",label:l(e)("code")},{default:n(()=>[t(P,{modelValue:r.value.code,"onUpdate:modelValue":a[3]||(a[3]=o=>r.value.code=o),placeholder:l(e)("codePlaceholder"),onkeyup:"this.value = this.value.replace(/[^\\d\\.]/g,'');"},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),t(D,{prop:"path",label:l(e)("path")},{default:n(()=>[t(te,{modelValue:r.value.path,"onUpdate:modelValue":a[4]||(a[4]=o=>r.value.path=o),api:"weapp/upload",accept:".zip"},null,8,["modelValue","accept"])]),_:1},8,["label"]),t(D,{label:l(e)("content")},{default:n(()=>[t(P,{type:"textarea",modelValue:r.value.content,"onUpdate:modelValue":a[5]||(a[5]=o=>r.value.content=o),placeholder:l(e)("contentPlaceholder")},null,8,["modelValue","placeholder"])]),_:1},8,["label"])]),_:1},8,["model"])]),_:1},8,["modelValue","title"]),t(L,{modelValue:R.value,"onUpdate:modelValue":a[8]||(a[8]=o=>R.value=o),title:l(e)("failReason"),width:"60%"},{default:n(()=>[t(oe,{class:"h-[60vh] w-full whitespace-pre p-[20px]"},{default:n(()=>[c(d(N.value),1)]),_:1})]),_:1},8,["modelValue","title"]),t(L,{modelValue:g.value,"onUpdate:modelValue":a[10]||(a[10]=o=>g.value=o),title:l(e)("warning"),width:"500px",draggable:""},{footer:n(()=>[u("div",Ae,[t(f,{onClick:X,type:"primary"},{default:n(()=>[c(d(l(e)("knownToKnow")),1)]),_:1}),t(f,{onClick:a[9]||(a[9]=o=>g.value=!1),type:"primary",plain:""},{default:n(()=>[c(d(l(e)("confirm")),1)]),_:1})])]),default:n(()=>[u("span",{innerHTML:l(e)("uploadSuccessTips")},null,8,Me)]),_:1},8,["modelValue","title"])])}}});const ga=ze($e,[["__scopeId","data-v-0f411e38"]]);export{ga as default};