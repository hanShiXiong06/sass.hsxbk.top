import{d as M,x as S,n as L,q as a,r as N,h as c,c as f,e as o,w as r,a as h,t as d,u as n,F as T,T as F,s as w,i as x,R as H,B as E,K as I,L as q,ab as G,cp as W,aC as A,bO as J,E as Q,M as X,a7 as Z,ac as ee,ad as te,W as ae,Y as le}from"./index-5a756a51.js";/* empty css                   *//* empty css                      *//* empty css                 *//* empty css               *//* empty css                  *//* empty css                  *//* empty css                     *//* empty css                  *//* empty css                 *//* empty css                    */import"./el-tooltip-4ed993c7.js";/* empty css                        *//* empty css                *//* empty css                *//* empty css                  *//* empty css                       */import"./el-form-item-4ed993c7.js";import{c as oe,d as ne}from"./notice-cb7cb671.js";import{_ as re}from"./notice-records-info.vue_vue_type_script_setup_true_lang-ad5f069e.js";/* empty css                  *//* empty css                   */const se={class:"main-container"},ie={class:"flex justify-between items-center"},ce={class:"text-page-title"},pe={class:"mt-[10px]"},de={key:0},me={key:1},ue={key:2},_e={class:"mt-[16px] flex justify-end"},Ke=M({__name:"notice_records",setup(be){const z=S().meta.title,t=L({page:1,limit:10,total:0,loading:!0,data:[],searchParam:{key:"",receiver:"",create_time:[]}}),m=L({buyer:{label:a("buyerNotice"),list:[]},seller:{label:a("sellerNotice"),list:[]}});(async()=>{oe({}).then(s=>{m.buyer.list=[],m.seller.list=[],s.data.forEach(e=>{if(e.notice.length){const _=[],i=[];Object.keys(e.notice).forEach((g,D)=>{const p=e.notice[g];p.addon_name=e.title,p.receiver_type==1?_.push({name:p.name,value:p.key}):i.push({name:p.name,value:p.key})}),_.length&&(_.unshift({name:e.title,value:e.key,disabled:!0}),m.buyer.list=m.buyer.list.concat(_)),i.length&&(i.unshift({name:e.title,value:e.key,disabled:!0}),m.seller.list=m.seller.list.concat(i))}})}).catch(s=>{})})();const C=N(),u=(s=1)=>{t.loading=!0,t.page=s,ne({page:t.page,limit:t.limit,...t.searchParam}).then(e=>{t.loading=!1,t.data=e.data.data,t.total=e.data.total}).catch(()=>{t.loading=!1})};u();const B=s=>{s&&(s.resetFields(),u())},y=N(null),R=s=>{y.value.setFormData(s),y.value.showDialog=!0};return(s,e)=>{const _=I,i=q,g=G,D=W,p=A,U=J,v=Q,Y=X,P=Z,b=ee,$=te,j=ae,K=le;return c(),f("div",se,[o(P,{class:"box-card !border-none",shadow:"never"},{default:r(()=>[h("div",ie,[h("span",ce,d(n(z)),1)]),o(P,{class:"box-card !border-none my-[10px] table-search-wrap",shadow:"never"},{default:r(()=>[o(Y,{inline:!0,model:t.searchParam,ref_key:"searchFormRef",ref:C},{default:r(()=>[o(i,{label:n(a)("searchReceiver"),prop:"receiver"},{default:r(()=>[o(_,{modelValue:t.searchParam.receiver,"onUpdate:modelValue":e[0]||(e[0]=l=>t.searchParam.receiver=l),placeholder:n(a)("receiverPlaceholder")},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),o(i,{label:n(a)("noticeKey"),prop:"key"},{default:r(()=>[o(p,{modelValue:t.searchParam.key,"onUpdate:modelValue":e[1]||(e[1]=l=>t.searchParam.key=l),clearable:"",placeholder:n(a)("noticeKeyPlaceholder"),class:"input-width","popper-class":"notice"},{default:r(()=>[(c(!0),f(T,null,F(m,(l,V)=>(c(),w(D,{key:V,label:l.label},{default:r(()=>[(c(!0),f(T,null,F(l.list,(k,O)=>(c(),w(g,{label:k.name,value:k.value,disabled:k.disabled??!1,key:O},null,8,["label","value","disabled"]))),128))]),_:2},1032,["label"]))),128))]),_:1},8,["modelValue","placeholder"])]),_:1},8,["label"]),o(i,{label:n(a)("createTime"),prop:"create_time"},{default:r(()=>[o(U,{modelValue:t.searchParam.create_time,"onUpdate:modelValue":e[2]||(e[2]=l=>t.searchParam.create_time=l),type:"datetimerange","value-format":"YYYY-MM-DD HH:mm:ss","start-placeholder":n(a)("startDate"),"end-placeholder":n(a)("endDate")},null,8,["modelValue","start-placeholder","end-placeholder"])]),_:1},8,["label"]),o(i,null,{default:r(()=>[o(v,{type:"primary",onClick:e[3]||(e[3]=l=>u())},{default:r(()=>[x(d(n(a)("search")),1)]),_:1}),o(v,{onClick:e[4]||(e[4]=l=>B(C.value))},{default:r(()=>[x(d(n(a)("reset")),1)]),_:1})]),_:1})]),_:1},8,["model"])]),_:1}),h("div",pe,[H((c(),w($,{data:t.data,size:"large"},{empty:r(()=>[h("span",null,d(t.loading?"":n(a)("emptyData")),1)]),default:r(()=>[o(b,{prop:"name",label:n(a)("noticeKey"),"min-width":"120"},null,8,["label"]),o(b,{prop:"notice_type",label:n(a)("noticeType"),"min-width":"120"},{default:r(({row:l})=>[l.notice_type=="sms"?(c(),f("div",de,d(n(a)("sms")),1)):E("",!0),l.notice_type=="wechat"?(c(),f("div",me,d(n(a)("wechat")),1)):E("",!0),l.notice_type=="weapp"?(c(),f("div",ue,d(n(a)("weapp")),1)):E("",!0)]),_:1},8,["label"]),o(b,{prop:"nickname",label:n(a)("nickname"),"min-width":"120"},null,8,["label"]),o(b,{prop:"receiver",label:n(a)("receiver"),"min-width":"120"},null,8,["label"]),o(b,{prop:"create_time",label:n(a)("createTime"),"min-width":"140"},null,8,["label"]),o(b,{label:n(a)("operation"),align:"right",fixed:"right",width:"100"},{default:r(({row:l})=>[o(v,{type:"primary",link:"",onClick:V=>R(l)},{default:r(()=>[x(d(n(a)("info")),1)]),_:2},1032,["onClick"])]),_:1},8,["label"])]),_:1},8,["data"])),[[K,t.loading]]),h("div",_e,[o(j,{"current-page":t.page,"onUpdate:current-page":e[5]||(e[5]=l=>t.page=l),"page-size":t.limit,"onUpdate:page-size":e[6]||(e[6]=l=>t.limit=l),layout:"total, sizes, prev, pager, next, jumper",total:t.total,onSizeChange:e[7]||(e[7]=l=>u()),onCurrentChange:u},null,8,["current-page","page-size","total"])])]),o(re,{ref_key:"recordsDialog",ref:y,onComplete:u},null,512)]),_:1})])}}});export{Ke as default};
