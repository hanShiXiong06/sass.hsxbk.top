import{d as O,x as S,n as V,q as l,r as L,h as d,c as E,e as t,w as n,a as f,t as g,u as o,F as T,T as F,s as x,i as w,R as I,K,L as M,aa as H,cs as q,aB as G,bO as W,E as A,M as J,a6 as Q,ab as X,ac as Z,W as ee,Y as ae}from"./index-6ea097a6.js";/* empty css                   *//* empty css                      *//* empty css                 *//* empty css               *//* empty css                  *//* empty css                  *//* empty css                     *//* empty css                  *//* empty css                 *//* empty css                    */import"./el-tooltip-4ed993c7.js";/* empty css                        *//* empty css                *//* empty css                     *//* empty css                  *//* empty css                       */import{c as te,f as le}from"./notice-24ea0cca.js";import{_ as oe}from"./notice-records-info.vue_vue_type_script_setup_true_lang-3f9a87cf.js";/* empty css                  *//* empty css                   */const re={class:"main-container"},ne={class:"flex justify-between items-center"},se={class:"text-page-title"},ie={class:"mt-[10px]"},ce={class:"mt-[16px] flex justify-end"},Be=O({__name:"sms_records",setup(me){const N=S().meta.title,a=V({page:1,limit:10,total:0,loading:!0,data:[],searchParam:{key:"",mobile:"",create_time:[]}}),c=V({buyer:{label:l("buyerNotice"),list:[]},seller:{label:l("sellerNotice"),list:[]}});(async()=>{te({}).then(m=>{c.buyer.list=[],c.seller.list=[],m.data.forEach(e=>{if(e.notice.length){const p=[],s=[];Object.keys(e.notice).forEach((h,D)=>{const i=e.notice[h];i.addon_name=e.title,i.receiver_type==1?p.push({name:i.name,value:i.key}):s.push({name:i.name,value:i.key})}),p.length&&(p.unshift({name:e.title,value:e.key,disabled:!0}),c.buyer.list=c.buyer.list.concat(p)),s.length&&(s.unshift({name:e.title,value:e.key,disabled:!0}),c.seller.list=c.seller.list.concat(s))}})}).catch(m=>{})})();const P=L(),u=(m=1)=>{a.loading=!0,a.page=m,le({page:a.page,limit:a.limit,...a.searchParam}).then(e=>{a.loading=!1,a.data=e.data.data,a.total=e.data.total}).catch(()=>{a.loading=!1})};u();const y=L(null),z=m=>{y.value.setFormData(m),y.value.showDialog=!0};return(m,e)=>{const p=K,s=M,h=H,D=q,i=G,B=W,v=A,R=J,C=Q,_=X,U=Z,Y=ee,$=ae;return d(),E("div",re,[t(C,{class:"box-card !border-none",shadow:"never"},{default:n(()=>[f("div",ne,[f("span",se,g(o(N)),1)]),t(C,{class:"box-card !border-none my-[10px] table-search-wrap",shadow:"never"},{default:n(()=>[t(R,{inline:!0,model:a.searchParam,ref_key:"searchFormRef",ref:P},{default:n(()=>[t(s,{label:o(l)("searchReceiver"),prop:"receiver"},{default:n(()=>[t(p,{modelValue:a.searchParam.mobile,"onUpdate:modelValue":e[0]||(e[0]=r=>a.searchParam.mobile=r),placeholder:o(l)("receiverPlaceholder")},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),t(s,{label:o(l)("noticeKey"),prop:"key"},{default:n(()=>[t(i,{modelValue:a.searchParam.key,"onUpdate:modelValue":e[1]||(e[1]=r=>a.searchParam.key=r),clearable:"",placeholder:o(l)("groupIdPlaceholder"),class:"input-width"},{default:n(()=>[t(h,{label:o(l)("selectPlaceholder"),value:""},null,8,["label"]),(d(!0),E(T,null,F(c,(r,b)=>(d(),x(D,{key:b,label:r.label},{default:n(()=>[(d(!0),E(T,null,F(r.list,(k,j)=>(d(),x(h,{label:k.name,value:k.value,disabled:k.disabled??!1,key:j},null,8,["label","value","disabled"]))),128))]),_:2},1032,["label"]))),128))]),_:1},8,["modelValue","placeholder"])]),_:1},8,["label"]),t(s,{label:o(l)("createTime"),prop:"create_time"},{default:n(()=>[t(B,{modelValue:a.searchParam.create_time,"onUpdate:modelValue":e[2]||(e[2]=r=>a.searchParam.create_time=r),type:"datetimerange","value-format":"YYYY-MM-DD HH:mm:ss","start-placeholder":o(l)("startDate"),"end-placeholder":o(l)("endDate")},null,8,["modelValue","start-placeholder","end-placeholder"])]),_:1},8,["label"]),t(s,null,{default:n(()=>[t(v,{type:"primary",onClick:e[3]||(e[3]=r=>u())},{default:n(()=>[w(g(o(l)("search")),1)]),_:1}),t(v,{onClick:e[4]||(e[4]=r=>{var b;return(b=P.value)==null?void 0:b.resetFields()})},{default:n(()=>[w(g(o(l)("reset")),1)]),_:1})]),_:1})]),_:1},8,["model"])]),_:1}),f("div",ie,[I((d(),x(U,{data:a.data,size:"large"},{empty:n(()=>[f("span",null,g(a.loading?"":o(l)("emptyData")),1)]),default:n(()=>[t(_,{prop:"name",label:o(l)("noticeKey"),"min-width":"120"},null,8,["label"]),t(_,{prop:"sms_type_name",label:o(l)("smsType"),"min-width":"120"},null,8,["label"]),t(_,{prop:"mobile",label:o(l)("receiver"),"min-width":"120"},null,8,["label"]),t(_,{prop:"create_time",label:o(l)("createTime"),"min-width":"140"},null,8,["label"]),t(_,{label:o(l)("operation"),align:"right",fixed:"right",width:"100"},{default:n(({row:r})=>[t(v,{type:"primary",link:"",onClick:b=>z(r)},{default:n(()=>[w(g(o(l)("info")),1)]),_:2},1032,["onClick"])]),_:1},8,["label"])]),_:1},8,["data"])),[[$,a.loading]]),f("div",ce,[t(Y,{"current-page":a.page,"onUpdate:current-page":e[5]||(e[5]=r=>a.page=r),"page-size":a.limit,"onUpdate:page-size":e[6]||(e[6]=r=>a.limit=r),layout:"total, sizes, prev, pager, next, jumper",total:a.total,onSizeChange:e[7]||(e[7]=r=>u()),onCurrentChange:u},null,8,["current-page","page-size","total"])])]),t(oe,{ref_key:"recordsDialog",ref:y,onComplete:u},null,512)]),_:1})])}}});export{Be as default};