import{d as K,x as M,n as T,q as a,r as L,h as i,c as b,e as l,w as r,a as g,t as p,u as o,F as N,T as F,s as E,i as x,R as S,B as P,K as H,L as q,aa as G,cs as W,aB as A,bO as J,E as Q,M as X,a6 as Z,ab as ee,ac as te,W as ae,Y as le}from"./index-f7a01263.js";/* empty css                   *//* empty css                      *//* empty css                 *//* empty css               *//* empty css                  *//* empty css                  *//* empty css                     *//* empty css                  *//* empty css                 *//* empty css                    */import"./el-tooltip-4ed993c7.js";/* empty css                        *//* empty css                *//* empty css                     *//* empty css                  *//* empty css                       */import{c as B}from"./notice-bd839023.js";import{_ as oe}from"./notice-records-info.vue_vue_type_script_setup_true_lang-b3581657.js";/* empty css                  *//* empty css                   */const ne={class:"main-container"},re={class:"flex justify-between items-center"},se={class:"text-page-title"},ie={class:"mt-[10px]"},ce={key:0},pe={key:1},de={key:2},me={class:"mt-[16px] flex justify-end"},Ye=K({__name:"notice_records",setup(ue){const z=M().meta.title,t=T({page:1,limit:10,total:0,loading:!0,data:[],searchParam:{key:"",receiver:"",create_time:[]}}),d=T({buyer:{label:a("buyerNotice"),list:[]},seller:{label:a("sellerNotice"),list:[]}});(async()=>{B({}).then(m=>{d.buyer.list=[],d.seller.list=[],m.data.forEach(e=>{if(e.notice.length){const u=[],s=[];Object.keys(e.notice).forEach((y,D)=>{const c=e.notice[y];c.addon_name=e.title,c.receiver_type==1?u.push({name:c.name,value:c.key}):s.push({name:c.name,value:c.key})}),u.length&&(u.unshift({name:e.title,value:e.key,disabled:!0}),d.buyer.list=d.buyer.list.concat(u)),s.length&&(s.unshift({name:e.title,value:e.key,disabled:!0}),d.seller.list=d.seller.list.concat(s))}})}).catch(m=>{})})();const C=L(),f=(m=1)=>{t.loading=!0,t.page=m,B({page:t.page,limit:t.limit,...t.searchParam}).then(e=>{t.loading=!1,t.data=e.data.data,t.total=e.data.total}).catch(()=>{t.loading=!1})};f();const v=L(null),R=m=>{v.value.setFormData(m),v.value.showDialog=!0};return(m,e)=>{const u=H,s=q,y=G,D=W,c=A,U=J,k=Q,Y=X,V=Z,_=ee,$=te,j=ae,O=le;return i(),b("div",ne,[l(V,{class:"box-card !border-none",shadow:"never"},{default:r(()=>[g("div",re,[g("span",se,p(o(z)),1)]),l(V,{class:"box-card !border-none my-[10px] table-search-wrap",shadow:"never"},{default:r(()=>[l(Y,{inline:!0,model:t.searchParam,ref_key:"searchFormRef",ref:C},{default:r(()=>[l(s,{label:o(a)("searchReceiver"),prop:"receiver"},{default:r(()=>[l(u,{modelValue:t.searchParam.receiver,"onUpdate:modelValue":e[0]||(e[0]=n=>t.searchParam.receiver=n),placeholder:o(a)("receiverPlaceholder")},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),l(s,{label:o(a)("noticeKey"),prop:"key"},{default:r(()=>[l(c,{modelValue:t.searchParam.key,"onUpdate:modelValue":e[1]||(e[1]=n=>t.searchParam.key=n),clearable:"",placeholder:o(a)("groupIdPlaceholder"),class:"input-width"},{default:r(()=>[l(y,{label:o(a)("selectPlaceholder"),value:""},null,8,["label"]),(i(!0),b(N,null,F(d,(n,h)=>(i(),E(D,{key:h,label:n.label},{default:r(()=>[(i(!0),b(N,null,F(n.list,(w,I)=>(i(),E(y,{label:w.name,value:w.value,disabled:w.disabled??!1,key:I},null,8,["label","value","disabled"]))),128))]),_:2},1032,["label"]))),128))]),_:1},8,["modelValue","placeholder"])]),_:1},8,["label"]),l(s,{label:o(a)("createTime"),prop:"create_time"},{default:r(()=>[l(U,{modelValue:t.searchParam.create_time,"onUpdate:modelValue":e[2]||(e[2]=n=>t.searchParam.create_time=n),type:"datetimerange","value-format":"YYYY-MM-DD HH:mm:ss","start-placeholder":o(a)("startDate"),"end-placeholder":o(a)("endDate")},null,8,["modelValue","start-placeholder","end-placeholder"])]),_:1},8,["label"]),l(s,null,{default:r(()=>[l(k,{type:"primary",onClick:e[3]||(e[3]=n=>f())},{default:r(()=>[x(p(o(a)("search")),1)]),_:1}),l(k,{onClick:e[4]||(e[4]=n=>{var h;return(h=C.value)==null?void 0:h.resetFields()})},{default:r(()=>[x(p(o(a)("reset")),1)]),_:1})]),_:1})]),_:1},8,["model"])]),_:1}),g("div",ie,[S((i(),E($,{data:t.data,size:"large"},{empty:r(()=>[g("span",null,p(t.loading?"":o(a)("emptyData")),1)]),default:r(()=>[l(_,{prop:"name",label:o(a)("noticeKey"),"min-width":"120"},null,8,["label"]),l(_,{prop:"notice_type",label:o(a)("noticeType"),"min-width":"120"},{default:r(({row:n})=>[n.notice_type=="sms"?(i(),b("div",ce,p(o(a)("sms")),1)):P("",!0),n.notice_type=="wechat"?(i(),b("div",pe,p(o(a)("wechat")),1)):P("",!0),n.notice_type=="weapp"?(i(),b("div",de,p(o(a)("weapp")),1)):P("",!0)]),_:1},8,["label"]),l(_,{prop:"nickname",label:o(a)("nickname"),"min-width":"120"},null,8,["label"]),l(_,{prop:"receiver",label:o(a)("receiver"),"min-width":"120"},null,8,["label"]),l(_,{prop:"create_time",label:o(a)("createTime"),"min-width":"140"},null,8,["label"]),l(_,{label:o(a)("operation"),align:"right",fixed:"right",width:"100"},{default:r(({row:n})=>[l(k,{type:"primary",link:"",onClick:h=>R(n)},{default:r(()=>[x(p(o(a)("info")),1)]),_:2},1032,["onClick"])]),_:1},8,["label"])]),_:1},8,["data"])),[[O,t.loading]]),g("div",me,[l(j,{"current-page":t.page,"onUpdate:current-page":e[5]||(e[5]=n=>t.page=n),"page-size":t.limit,"onUpdate:page-size":e[6]||(e[6]=n=>t.limit=n),layout:"total, sizes, prev, pager, next, jumper",total:t.total,onSizeChange:e[7]||(e[7]=n=>f()),onCurrentChange:f},null,8,["current-page","page-size","total"])])]),l(oe,{ref_key:"recordsDialog",ref:v,onComplete:f},null,512)]),_:1})])}}});export{Ye as default};
