import{d as Q,x as Z,n as O,r as f,f as ee,l as te,q as l,h as u,c as b,e as i,w as o,a as p,t as m,u as n,i as c,R as P,s as _,F as T,T as D,B as h,cC as ae,cD as le,cE as oe,cF as ne,cG as ie,cH as se,a5 as re,cI as me,E as de,aW as ue,ac as pe,ad as ce,W as _e,a7 as fe,ab as ye,aC as ge,L as ve,K as we,at as ke,au as be,M as he,X as xe,Y as Ve}from"./index-2a89d409.js";/* empty css                   *//* empty css                  *//* empty css                   *//* empty css                *//* empty css                       *//* empty css                 *//* empty css                 */import"./el-form-item-4ed993c7.js";/* empty css               *//* empty css                  *//* empty css                  *//* empty css                     *//* empty css                  *//* empty css                *//* empty css                      *//* empty css                 *//* empty css                    */import"./el-tooltip-4ed993c7.js";/* empty css                        *//* empty css                 *//* empty css                  */import{_ as Ce}from"./cron-info.vue_vue_type_script_setup_true_lang-ec610122.js";const Ee={class:"main-container"},Te={class:"flex justify-between items-center mb-[20px]"},De={class:"text-page-title"},Ue={class:"flex items-center"},Be={class:"mt-2"},Le={class:"mt-[20px]"},Re={class:"mt-[16px] flex justify-end"},Fe={class:"flex"},ze={class:"input-width flex items-center text-sm"},Ne={class:"dialog-footer"},mt=Q({__name:"schedule",setup(Oe){const $=Z().meta.title,s=O({page:1,limit:10,total:0,loading:!0,data:[],searchParam:{title:"",type:"",last_time:""}}),U=f([]),B=f([]),L=f([]);f(),(async()=>{U.value=await(await ae()).data,B.value=await(await le()).data,L.value=await(await oe()).data})();const g=(r=1)=>{s.loading=!0,s.page=r,ne({page:s.page,limit:s.limit,...s.searchParam}).then(a=>{s.loading=!1,s.data=a.data.data,s.total=a.data.total}).catch(()=>{s.loading=!1})};g(),ee();const w=f(!1),e=O({...{id:0,key:"",status:2,time:{type:"min",week:"",day:"",hour:"",min:""}}}),R=f(),S=()=>{e.id=0,e.key="",e.status=2,e.time.type="min",e.time.week="",e.time.day="",e.time.hour="",e.time.min="",w.value=!0},j=te(()=>({key:[{required:!0,message:l("titlePlaceholder"),trigger:"blur"}],timeDate:[{required:!0,validator:q,trigger:"blur"}]})),q=(r,a,d)=>e.time.type=="min"&&e.time.min!=""||e.time.type=="week"&&e.time.week!=""&&e.time.hour!=""&&e.time.min!=""||e.time.type=="month"&&e.time.day!=""&&e.time.hour!=""&&e.time.min!=""||e.time.type=="day"&&e.time.day!=""&&e.time.hour!=""&&e.time.min!=""||e.time.type=="hour"&&e.time.hour!=""&&e.time.min!=""?d():d(new Error(l("cronTimeTips"))),k=f(!1),I=async r=>{k.value||!r||await r.validate(async a=>{if(a){k.value=!0;const d=e;(e.id>0?ie:se)(d).then(v=>{k.value=!1,w.value=!1,g()}).catch(()=>{k.value=!1})}})},W=r=>{e.id=r.id,e.key=r.key,e.status=r.status,e.time=r.time,w.value=!0},G=r=>{re.confirm(l("cronDeleteTips"),l("warning"),{confirmButtonText:l("confirm"),cancelButtonText:l("cancel"),type:"warning"}).then(()=>{me(r).then(()=>{g()}).catch(()=>{})})},M=f(null);return(r,a)=>{const d=de,F=ue,v=pe,A=ce,H=_e,K=fe,x=ye,V=ge,C=ve,E=we,z=ke,X=be,Y=he,J=xe,N=Ve;return u(),b("div",Ee,[i(K,{class:"box-card !border-none",shadow:"never"},{default:o(()=>[p("div",Te,[p("span",De,m(n($)),1),i(d,{type:"primary",onClick:S},{default:o(()=>[c(m(n(l)("addCron")),1)]),_:1})]),i(F,{type:"info"},{default:o(()=>[p("div",Ue,[p("div",null,[p("p",null,m(n(l)("cronTipsOne")),1),p("p",Be,m(n(l)("cronTipsTwo")),1)])])]),_:1}),p("div",Le,[P((u(),_(A,{data:s.data,size:"large"},{empty:o(()=>[p("span",null,m(s.loading?"":n(l)("emptyData")),1)]),default:o(()=>[i(v,{prop:"name",label:n(l)("title"),"min-width":"150"},null,8,["label"]),i(v,{prop:"key",label:n(l)("key"),"min-width":"150"},null,8,["label"]),i(v,{label:n(l)("crondType"),"min-width":"150"},{default:o(({row:t})=>[c(m(t.crontab_content),1)]),_:1},8,["label"]),i(v,{prop:"status_name",label:n(l)("openStatus"),"min-width":"100"},null,8,["label"]),i(v,{label:n(l)("operation"),align:"right",fixed:"right",width:"130"},{default:o(({row:t})=>[i(d,{type:"primary",link:"",onClick:y=>W(t)},{default:o(()=>[c(m(n(l)("edit")),1)]),_:2},1032,["onClick"]),i(d,{type:"primary",link:"",onClick:y=>G(t.id)},{default:o(()=>[c(m(n(l)("delete")),1)]),_:2},1032,["onClick"])]),_:1},8,["label"])]),_:1},8,["data"])),[[N,s.loading]]),p("div",Re,[i(H,{"current-page":s.page,"onUpdate:current-page":a[0]||(a[0]=t=>s.page=t),"page-size":s.limit,"onUpdate:page-size":a[1]||(a[1]=t=>s.limit=t),layout:"total, sizes, prev, pager, next, jumper",total:s.total,onSizeChange:a[2]||(a[2]=t=>g()),onCurrentChange:g},null,8,["current-page","page-size","total"])])])]),_:1}),i(Ce,{ref_key:"cronDialog",ref:M,onComplete:g},null,512),i(J,{modelValue:w.value,"onUpdate:modelValue":a[11]||(a[11]=t=>w.value=t),title:n(l)("editCron"),width:"750px","destroy-on-close":!0},{footer:o(()=>[p("span",Ne,[i(d,{type:"primary",onClick:a[10]||(a[10]=t=>I(R.value))},{default:o(()=>[c(m(n(l)("confirm")),1)]),_:1})])]),default:o(()=>[P((u(),_(Y,{model:e,"label-width":"110px",ref_key:"formRef",ref:R,rules:n(j),class:"page-form"},{default:o(()=>[i(C,{label:n(l)("cronTemplate"),class:"items-center",prop:"key"},{default:o(()=>[i(V,{modelValue:e.key,"onUpdate:modelValue":a[3]||(a[3]=t=>e.key=t)},{default:o(()=>[(u(!0),b(T,null,D(U.value,t=>(u(),_(x,{key:t.key,label:t.name,value:t.key},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1},8,["label"]),i(C,{label:n(l)("cronTime"),prop:"timeDate"},{default:o(()=>[i(V,{modelValue:e.time.type,"onUpdate:modelValue":a[4]||(a[4]=t=>e.time.type=t),class:"w-[150px]"},{default:o(()=>[(u(!0),b(T,null,D(B.value,(t,y)=>(u(),_(x,{key:y,label:t,value:y},null,8,["label","value"]))),128))]),_:1},8,["modelValue"]),p("div",Fe,[e.time.type=="week"?(u(),_(V,{key:0,modelValue:e.time.week,"onUpdate:modelValue":a[5]||(a[5]=t=>e.time.week=t),class:"ml-2 w-[120px]"},{default:o(()=>[(u(!0),b(T,null,D(L.value,(t,y)=>(u(),_(x,{key:y,label:t,value:y},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])):h("",!0),["month","day"].indexOf(e.time.type)!=-1?(u(),_(E,{key:1,modelValue:e.time.day,"onUpdate:modelValue":a[6]||(a[6]=t=>e.time.day=t),class:"ml-2 w-[120px]"},{append:o(()=>[c(m(n(l)("day")),1)]),_:1},8,["modelValue"])):h("",!0),["month","day","hour","week"].indexOf(e.time.type)!=-1?(u(),_(E,{key:2,modelValue:e.time.hour,"onUpdate:modelValue":a[7]||(a[7]=t=>e.time.hour=t),class:"ml-2 w-[120px]"},{append:o(()=>[c(m(n(l)("hour")),1)]),_:1},8,["modelValue"])):h("",!0),["month","day","hour","week","min"].indexOf(e.time.type)!=-1?(u(),_(E,{key:3,modelValue:e.time.min,"onUpdate:modelValue":a[8]||(a[8]=t=>e.time.min=t),class:"ml-2 w-[120px]"},{append:o(()=>[c(m(n(l)("min")),1)]),_:1},8,["modelValue"])):h("",!0)])]),_:1},8,["label"]),i(C,{label:n(l)("isopen")},{default:o(()=>[p("div",ze,[i(X,{modelValue:e.status,"onUpdate:modelValue":a[9]||(a[9]=t=>e.status=t)},{default:o(()=>[i(z,{label:1},{default:o(()=>[c(m(n(l)("yes")),1)]),_:1}),i(z,{label:2},{default:o(()=>[c(m(n(l)("no")),1)]),_:1})]),_:1},8,["modelValue"])])]),_:1},8,["label"])]),_:1},8,["model","rules"])),[[N,r.loading]])]),_:1},8,["modelValue","title"])])}}});export{mt as default};
