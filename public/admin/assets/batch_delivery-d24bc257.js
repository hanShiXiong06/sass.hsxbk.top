import{d as q,x as W,f as X,r as v,n as G,h as s,c as y,e as l,w as o,a as p,t as i,u as r,q as n,F as x,T as D,s as _,A as J,i as d,R as K,B as V,bO as Q,L as Z,ac as ee,aD as ae,cz as te,E as le,M as oe,a7 as re,ad as ne,ae as se,W as ie,X as me,Y as ue}from"./index-99f00cf3.js";/* empty css                   *//* empty css                  *//* empty css                   *//* empty css                      *//* empty css                 *//* empty css               *//* empty css                  *//* empty css                  *//* empty css                     *//* empty css                  *//* empty css                 *//* empty css                    */import"./el-tooltip-4ed993c7.js";/* empty css                        *//* empty css                *//* empty css                *//* empty css                  *//* empty css                  */import"./el-form-item-4ed993c7.js";/* empty css                       */import{_ as pe}from"./member_head-d9fd7b2c.js";import{d as de,e as ce,f as _e}from"./order-b8bfbaf6.js";import{g as fe}from"./user-b61685bc.js";import{_ as ve}from"./import-data.vue_vue_type_script_setup_true_lang-21d07850.js";import"./index.vue_vue_type_style_index_0_lang-bad0a04a.js";/* empty css                    *//* empty css                       *//* empty css                 */const ge={class:"main-container"},be={class:"flex justify-between items-center"},ye={class:"text-page-title"},he={class:"flex items-center"},ke={key:1,src:pe,alt:"",class:"mr-[10px] w-[24px]"},Ce={class:"flex items-center"},xe={class:"mt-[16px] flex justify-end"},De={class:"break-all -mt-[20px]"},Ve={class:"dialog-footer"},la=q({__name:"batch_delivery",setup(we){const z=W();X();const N=z.meta.title,w=v([]),F=v([]),E=v([]);(async()=>{w.value=await(await de()).data,F.value=await(await ce()).data,E.value=await(await fe()).data})();const t=G({page:1,limit:10,total:0,loading:!0,data:[],searchParam:{create_time:"",main_id:"",type:"",status:""}}),P=v(),L=u=>{u&&(u.resetFields(),t.searchParam.main_id="",g())},g=(u=1)=>{t.loading=!0,t.page=u,_e({page:t.page,limit:t.limit,...t.searchParam}).then(a=>{t.loading=!1,t.data=a.data.data,t.total=a.data.total}).catch(()=>{t.loading=!1})};g();const T=u=>{let a=`${location.origin}/${u}`;window.open(a)},$=v(null),R=u=>{$.value.open()},h=v(!1),B=v(""),O=u=>{B.value=u.fail_remark,h.value=!0};return(u,a)=>{const S=Q,b=Z,k=ee,C=ae,Y=te,f=le,j=oe,U=re,c=ne,A=se,M=ie,H=me,I=ue;return s(),y("div",ge,[l(U,{class:"box-card !border-none",shadow:"never"},{default:o(()=>[p("div",be,[p("span",ye,i(r(N)),1)]),l(U,{class:"box-card !border-none my-[10px] table-search-wrap",shadow:"never"},{default:o(()=>[l(j,{inline:!0,model:t.searchParam,ref_key:"searchFormRef",ref:P},{default:o(()=>[l(b,{label:r(n)("createTime"),prop:"create_time"},{default:o(()=>[l(S,{modelValue:t.searchParam.create_time,"onUpdate:modelValue":a[0]||(a[0]=e=>t.searchParam.create_time=e),type:"datetimerange","value-format":"YYYY-MM-DD HH:mm:ss","start-placeholder":r(n)("startTime"),"end-placeholder":r(n)("endTime")},null,8,["modelValue","start-placeholder","end-placeholder"])]),_:1},8,["label"]),l(b,{label:r(n)("operationType"),prop:"type"},{default:o(()=>[l(C,{modelValue:t.searchParam.type,"onUpdate:modelValue":a[1]||(a[1]=e=>t.searchParam.type=e),clearable:"",class:"input-item"},{default:o(()=>[(s(!0),y(x,null,D(w.value,(e,m)=>(s(),_(k,{key:m,label:e,value:m},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1},8,["label"]),l(b,{label:r(n)("state"),prop:"status"},{default:o(()=>[l(C,{modelValue:t.searchParam.status,"onUpdate:modelValue":a[2]||(a[2]=e=>t.searchParam.status=e),clearable:"",class:"input-item"},{default:o(()=>[(s(!0),y(x,null,D(F.value,(e,m)=>(s(),_(k,{key:m,label:e,value:m},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1},8,["label"]),l(b,{label:r(n)("operator"),prop:"pay_type"},{default:o(()=>[l(C,{modelValue:t.searchParam.main_id,"onUpdate:modelValue":a[3]||(a[3]=e=>t.searchParam.main_id=e),clearable:"",class:"input-width",filterable:""},{default:o(()=>[(s(!0),y(x,null,D(E.value,e=>(s(),_(k,{key:e.uid,label:e.username,value:e.uid},{default:o(()=>[p("div",he,[e.head_img?(s(),_(Y,{key:0,src:r(J)(e.head_img),size:"small",class:"mr-[10px]"},null,8,["src"])):(s(),y("img",ke)),d(" "+i(e.username),1)])]),_:2},1032,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1},8,["label"]),l(b,null,{default:o(()=>[l(f,{type:"primary",onClick:a[4]||(a[4]=e=>g())},{default:o(()=>[d(i(r(n)("search")),1)]),_:1}),l(f,{onClick:a[5]||(a[5]=e=>L(P.value))},{default:o(()=>[d(i(r(n)("reset")),1)]),_:1}),l(f,{type:"primary",onClick:R},{default:o(()=>[d(i(r(n)("importData")),1)]),_:1})]),_:1})]),_:1},8,["model"])]),_:1}),p("div",null,[K((s(),_(A,{data:t.data,size:"large"},{empty:o(()=>[p("span",null,i(t.loading?"":r(n)("emptyData")),1)]),default:o(()=>[l(c,{prop:"type_name",label:r(n)("operationType"),"min-width":"100"},null,8,["label"]),l(c,{label:r(n)("operator"),"min-width":"100"},{default:o(({row:e})=>{var m;return[p("div",Ce,[p("span",null,i((m=e==null?void 0:e.user)==null?void 0:m.username),1)])]}),_:1},8,["label"]),l(c,{prop:"total_num",label:r(n)("totalNum"),"min-width":"120"},null,8,["label"]),l(c,{prop:"success_num",label:r(n)("succeedNum"),"min-width":"120"},null,8,["label"]),l(c,{prop:"fail_num",label:r(n)("failuresNum"),"min-width":"120"},null,8,["label"]),l(c,{prop:"status_name",label:r(n)("state"),"min-width":"100"},null,8,["label"]),l(c,{label:r(n)("operationTime"),"min-width":"150"},{default:o(({row:e})=>[d(i(e.create_time||""),1)]),_:1},8,["label"]),l(c,{label:r(n)("operation"),fixed:"right",align:"right","min-width":"180"},{default:o(({row:e})=>[e.status==2&&e.output?(s(),_(f,{key:0,type:"primary",link:"",onClick:m=>T(e.output)},{default:o(()=>[d(i(r(n)("downloadRecord")),1)]),_:2},1032,["onClick"])):V("",!0),e.status==2&&e.fail_output?(s(),_(f,{key:1,type:"primary",link:"",onClick:m=>T(e.fail_output)},{default:o(()=>[d(i(r(n)("causeFailure")),1)]),_:2},1032,["onClick"])):V("",!0),e.status==3?(s(),_(f,{key:2,type:"primary",link:"",onClick:m=>O(e)},{default:o(()=>[d(i(r(n)("checkCause")),1)]),_:2},1032,["onClick"])):V("",!0)]),_:1},8,["label"])]),_:1},8,["data"])),[[I,t.loading]]),p("div",xe,[l(M,{"current-page":t.page,"onUpdate:current-page":a[6]||(a[6]=e=>t.page=e),"page-size":t.limit,"onUpdate:page-size":a[7]||(a[7]=e=>t.limit=e),layout:"total, sizes, prev, pager, next, jumper",total:t.total,onSizeChange:a[8]||(a[8]=e=>g()),onCurrentChange:g},null,8,["current-page","page-size","total"])]),l(ve,{ref_key:"importDataDialog",ref:$,onComplete:a[9]||(a[9]=e=>g())},null,512),l(H,{modelValue:h.value,"onUpdate:modelValue":a[11]||(a[11]=e=>h.value=e),title:r(n)("checkCause1"),width:"420px"},{footer:o(()=>[p("span",Ve,[l(f,{onClick:a[10]||(a[10]=e=>h.value=!1)},{default:o(()=>[d(i(r(n)("confirm")),1)]),_:1})])]),default:o(()=>[p("div",De,i(B.value),1)]),_:1},8,["modelValue","title"])])]),_:1})])}}});export{la as default};
