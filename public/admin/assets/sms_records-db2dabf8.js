import{d as O,x as S,n as V,q as l,r as L,h as u,c as k,e as a,w as r,a as b,t as f,u as n,F as T,T as F,s as x,i as E,R as M,K as H,L as I,ab as q,cp as G,aC as W,bO as A,E as J,M as Q,a7 as X,ac as Z,ad as ee,W as te,Y as ae}from"./index-6f32d09b.js";/* empty css                   *//* empty css                      *//* empty css                 *//* empty css               *//* empty css                  *//* empty css                  *//* empty css                     *//* empty css                  *//* empty css                 *//* empty css                    */import"./el-tooltip-4ed993c7.js";/* empty css                        *//* empty css                *//* empty css                *//* empty css                  *//* empty css                       */import"./el-form-item-4ed993c7.js";import{c as le,h as oe}from"./notice-b28bde60.js";import{_ as ne}from"./sms-records-info.vue_vue_type_script_setup_true_lang-4864545d.js";/* empty css                  *//* empty css                   */const re={class:"main-container"},se={class:"flex justify-between items-center"},ie={class:"text-page-title"},me={class:"mt-[10px]"},ce={class:"mt-[16px] flex justify-end"},Ue=O({__name:"sms_records",setup(pe){const N=S().meta.title,t=V({page:1,limit:10,total:0,loading:!0,data:[],searchParam:{key:"",mobile:"",create_time:[]}}),c=V({buyer:{label:l("buyerNotice"),list:[]},seller:{label:l("sellerNotice"),list:[]}});(async()=>{le({}).then(s=>{c.buyer.list=[],c.seller.list=[],s.data.forEach(e=>{if(e.notice.length){const d=[],i=[];Object.keys(e.notice).forEach((h,C)=>{const m=e.notice[h];m.addon_name=e.title,m.receiver_type==1?d.push({name:m.name,value:m.key}):i.push({name:m.name,value:m.key})}),d.length&&(d.unshift({name:e.title,value:e.key,disabled:!0}),c.buyer.list=c.buyer.list.concat(d)),i.length&&(i.unshift({name:e.title,value:e.key,disabled:!0}),c.seller.list=c.seller.list.concat(i))}})}).catch(s=>{})})();const w=L(),p=(s=1)=>{t.loading=!0,t.page=s,oe({page:t.page,limit:t.limit,...t.searchParam}).then(e=>{t.loading=!1,t.data=e.data.data,t.total=e.data.total}).catch(()=>{t.loading=!1})};p();const z=s=>{s&&(s.resetFields(),p())},g=L(null),B=s=>{g.value.setFormData(s),g.value.showDialog=!0};return(s,e)=>{const d=H,i=I,h=q,C=G,m=W,R=A,y=J,U=Q,D=X,_=Z,Y=ee,$=te,j=ae;return u(),k("div",re,[a(D,{class:"box-card !border-none",shadow:"never"},{default:r(()=>[b("div",se,[b("span",ie,f(n(N)),1)]),a(D,{class:"box-card !border-none my-[10px] table-search-wrap",shadow:"never"},{default:r(()=>[a(U,{inline:!0,model:t.searchParam,ref_key:"searchFormRef",ref:w},{default:r(()=>[a(i,{label:n(l)("searchReceiver"),prop:"mobile"},{default:r(()=>[a(d,{modelValue:t.searchParam.mobile,"onUpdate:modelValue":e[0]||(e[0]=o=>t.searchParam.mobile=o),placeholder:n(l)("receiverPlaceholder")},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),a(i,{label:n(l)("noticeKey"),prop:"key"},{default:r(()=>[a(m,{modelValue:t.searchParam.key,"onUpdate:modelValue":e[1]||(e[1]=o=>t.searchParam.key=o),clearable:"",placeholder:n(l)("noticeKeyPlaceholder"),class:"input-width"},{default:r(()=>[(u(!0),k(T,null,F(c,(o,P)=>(u(),x(C,{key:P,label:o.label},{default:r(()=>[(u(!0),k(T,null,F(o.list,(v,K)=>(u(),x(h,{label:v.name,value:v.value,disabled:v.disabled??!1,key:K},null,8,["label","value","disabled"]))),128))]),_:2},1032,["label"]))),128))]),_:1},8,["modelValue","placeholder"])]),_:1},8,["label"]),a(i,{label:n(l)("createTime"),prop:"create_time"},{default:r(()=>[a(R,{modelValue:t.searchParam.create_time,"onUpdate:modelValue":e[2]||(e[2]=o=>t.searchParam.create_time=o),type:"datetimerange","value-format":"YYYY-MM-DD HH:mm:ss","start-placeholder":n(l)("startDate"),"end-placeholder":n(l)("endDate")},null,8,["modelValue","start-placeholder","end-placeholder"])]),_:1},8,["label"]),a(i,null,{default:r(()=>[a(y,{type:"primary",onClick:e[3]||(e[3]=o=>p())},{default:r(()=>[E(f(n(l)("search")),1)]),_:1}),a(y,{onClick:e[4]||(e[4]=o=>z(w.value))},{default:r(()=>[E(f(n(l)("reset")),1)]),_:1})]),_:1})]),_:1},8,["model"])]),_:1}),b("div",me,[M((u(),x(Y,{data:t.data,size:"large"},{empty:r(()=>[b("span",null,f(t.loading?"":n(l)("emptyData")),1)]),default:r(()=>[a(_,{prop:"name",label:n(l)("noticeKey"),"min-width":"120"},null,8,["label"]),a(_,{prop:"sms_type_name",label:n(l)("smsType"),"min-width":"120"},null,8,["label"]),a(_,{prop:"mobile",label:n(l)("receiver"),"min-width":"120"},null,8,["label"]),a(_,{prop:"create_time",label:n(l)("createTime"),"min-width":"140"},null,8,["label"]),a(_,{label:n(l)("operation"),align:"right",fixed:"right",width:"100"},{default:r(({row:o})=>[a(y,{type:"primary",link:"",onClick:P=>B(o)},{default:r(()=>[E(f(n(l)("info")),1)]),_:2},1032,["onClick"])]),_:1},8,["label"])]),_:1},8,["data"])),[[j,t.loading]]),b("div",ce,[a($,{"current-page":t.page,"onUpdate:current-page":e[5]||(e[5]=o=>t.page=o),"page-size":t.limit,"onUpdate:page-size":e[6]||(e[6]=o=>t.limit=o),layout:"total, sizes, prev, pager, next, jumper",total:t.total,onSizeChange:e[7]||(e[7]=o=>p()),onCurrentChange:p},null,8,["current-page","page-size","total"])])]),a(ne,{ref_key:"recordsDialog",ref:g,onComplete:p},null,512)]),_:1})])}}});export{Ue as default};
