import{d as F,x as $,f as z,n as U,r as N,h as f,c as R,e as t,w as o,a as c,t as r,u as l,q as a,i as d,R as H,s as w,c$ as x,B as L,a5 as j,bO as O,L as q,ab as I,aC as W,E as A,M as G,a7 as J,ac as K,ad as Q,W as X,Y as Z}from"./index-2a89d409.js";/* empty css                   *//* empty css                      *//* empty css                 *//* empty css               *//* empty css                  *//* empty css                  *//* empty css                     *//* empty css                  *//* empty css                 *//* empty css                    */import"./el-tooltip-4ed993c7.js";/* empty css                        *//* empty css                *//* empty css                *//* empty css                  */import"./el-form-item-4ed993c7.js";/* empty css                       */import{c as ee,d as te}from"./sale-e4e4ae91.js";/* empty css                   */const ae={class:"main-container"},le={class:"flex justify-between items-center"},ne={class:"text-page-title"},oe={class:"mt-[10px]"},se={class:"mt-[16px] flex justify-end"},Se=F({__name:"list",setup(re){const P=$(),V=z(),k=P.meta.title,n=U({page:1,limit:10,total:0,loading:!0,data:[],searchParam:{settlement_time:[],send_time:[],is_settlement:"",is_send:""}}),b=N(),p=(m=1)=>{n.loading=!0,n.page=m,ee({page:n.page,limit:n.limit,...n.searchParam}).then(s=>{n.loading=!1,n.data=s.data.data,n.total=s.data.total}).catch(()=>{n.loading=!1})};p();const C=m=>{m&&(m.resetFields(),p())},E=m=>{V.push(`/shop_fenxiao/sale/member_list?id=${m}`)},S=m=>{j.confirm(a("grantTip"),a("warning"),{confirmButtonText:a("confirm"),cancelButtonText:a("cancel"),type:"warning"}).then(()=>{te(m).then(s=>{p()})})};return(m,s)=>{const h=O,_=q,u=I,v=W,g=A,T=G,y=J,i=K,D=Q,B=X,M=Z;return f(),R("div",ae,[t(y,{class:"card !border-none",shadow:"never"},{default:o(()=>[c("div",le,[c("span",ne,r(l(k)),1)]),t(y,{class:"card my-[10px] !border-none table-search-wrap",shadow:"never"},{default:o(()=>[t(T,{inline:!0,model:n.searchParam,ref_key:"searchFormRef",ref:b},{default:o(()=>[t(_,{label:l(a)("settlementTime"),prop:"settlement_time"},{default:o(()=>[t(h,{modelValue:n.searchParam.settlement_time,"onUpdate:modelValue":s[0]||(s[0]=e=>n.searchParam.settlement_time=e),type:"datetimerange","value-format":"YYYY-MM-DD HH:mm:ss","start-placeholder":l(a)("startDate"),"end-placeholder":l(a)("endDate")},null,8,["modelValue","start-placeholder","end-placeholder"])]),_:1},8,["label"]),t(_,{label:l(a)("sendTime"),prop:"send_time"},{default:o(()=>[t(h,{modelValue:n.searchParam.send_time,"onUpdate:modelValue":s[1]||(s[1]=e=>n.searchParam.send_time=e),type:"datetimerange","value-format":"YYYY-MM-DD HH:mm:ss","start-placeholder":l(a)("startDate"),"end-placeholder":l(a)("endDate")},null,8,["modelValue","start-placeholder","end-placeholder"])]),_:1},8,["label"]),t(_,{label:l(a)("settlementStatus"),prop:"is_settlement"},{default:o(()=>[t(v,{modelValue:n.searchParam.is_settlement,"onUpdate:modelValue":s[2]||(s[2]=e=>n.searchParam.is_settlement=e),placeholder:l(a)("settlementStatusPlaceholder"),clearable:""},{default:o(()=>[t(u,{label:"已结算",value:1}),t(u,{label:"待结算",value:0})]),_:1},8,["modelValue","placeholder"])]),_:1},8,["label"]),t(_,{label:l(a)("sendStatus"),prop:"is_send"},{default:o(()=>[t(v,{modelValue:n.searchParam.is_send,"onUpdate:modelValue":s[3]||(s[3]=e=>n.searchParam.is_send=e),placeholder:l(a)("sendStatusPlaceholder"),clearable:""},{default:o(()=>[t(u,{label:"已发放",value:1}),t(u,{label:"待发放",value:0})]),_:1},8,["modelValue","placeholder"])]),_:1},8,["label"]),t(_,null,{default:o(()=>[t(g,{type:"primary",onClick:s[4]||(s[4]=e=>p())},{default:o(()=>[d(r(l(a)("search")),1)]),_:1}),t(g,{onClick:s[5]||(s[5]=e=>C(b.value))},{default:o(()=>[d(r(l(a)("reset")),1)]),_:1})]),_:1})]),_:1},8,["model"])]),_:1}),c("div",oe,[H((f(),w(D,{data:n.data,size:"large"},{empty:o(()=>[c("span",null,r(n.loading?"":l(a)("emptyData")),1)]),default:o(()=>[t(i,{prop:"period_type_name",label:l(a)("periodType"),"min-width":"80"},null,8,["label"]),t(i,{prop:"sale_start_time",label:l(a)("saleStartTime"),"min-width":"140"},null,8,["label"]),t(i,{prop:"sale_end_time",label:l(a)("saleEndTime"),"min-width":"140"},null,8,["label"]),t(i,{label:l(a)("orderMoney"),"min-width":"120",align:"right"},{default:o(({row:e})=>[d(r(l(x)(e.total_order_money)),1)]),_:1},8,["label"]),t(i,{label:l(a)("rewardMoney"),"min-width":"120",align:"right"},{default:o(({row:e})=>[d(r(l(x)(e.total_reward_money)),1)]),_:1},8,["label"]),t(i,{label:l(a)("settlementStatus"),"min-width":"150",align:"center"},{default:o(({row:e})=>[d(r(e.is_settlement>0?"已结算":"待结算"),1)]),_:1},8,["label"]),t(i,{label:l(a)("sendStatus"),"min-width":"150",align:"center"},{default:o(({row:e})=>[d(r(e.is_send>0?"已发放":"待发放"),1)]),_:1},8,["label"]),t(i,{label:l(a)("settlementTime"),"min-width":"150",align:"center"},{default:o(({row:e})=>[d(r(e.settlement_time||"--"),1)]),_:1},8,["label"]),t(i,{label:l(a)("sendTime"),"min-width":"150",align:"center"},{default:o(({row:e})=>[d(r(e.send_time||"--"),1)]),_:1},8,["label"]),t(i,{label:l(a)("operation"),align:"right",fixed:"right","min-width":"120"},{default:o(({row:e})=>[t(g,{type:"primary",link:"",onClick:Y=>E(e.id)},{default:o(()=>[d(r(l(a)("detail")),1)]),_:2},1032,["onClick"]),e.is_settlement&&!e.is_send?(f(),w(g,{key:0,type:"primary",link:"",onClick:Y=>S(e.id)},{default:o(()=>[d(r(l(a)("grant")),1)]),_:2},1032,["onClick"])):L("",!0)]),_:1},8,["label"])]),_:1},8,["data"])),[[M,n.loading]]),c("div",se,[t(B,{"current-page":n.page,"onUpdate:current-page":s[6]||(s[6]=e=>n.page=e),"page-size":n.limit,"onUpdate:page-size":s[7]||(s[7]=e=>n.limit=e),layout:"total, sizes, prev, pager, next, jumper",total:n.total,onSizeChange:s[8]||(s[8]=e=>p()),onCurrentChange:p},null,8,["current-page","page-size","total"])])])]),_:1})])}}});export{Se as default};
