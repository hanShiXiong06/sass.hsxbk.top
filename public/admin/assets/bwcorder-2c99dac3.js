import{d as I,x as D,r as b,n as j,a2 as $,h as n,c as x,e as o,w as a,a as c,t as _,u as e,q as s,F as C,T as F,s as i,i as d,R as q,A as K,B as f,K as M,L as W,ab as Y,aC as G,E as H,M as J,a7 as Q,cy as X,ac as Z,ak as ee,ad as te,W as ae,Y as oe}from"./index-2a89d409.js";/* empty css                   *//* empty css                      *//* empty css                 *//* empty css               *//* empty css                  *//* empty css                  *//* empty css                     *//* empty css                  *//* empty css                 *//* empty css                    */import"./el-tooltip-4ed993c7.js";/* empty css                        *//* empty css                  *//* empty css                *//* empty css                *//* empty css                  */import"./el-form-item-4ed993c7.js";import{g as le,a as re}from"./bwcorder-7a346796.js";import{_ as ne}from"./_plugin-vue_export-helper-c27b6911.js";const se={class:"main-container"},ie={class:"flex justify-between items-center"},pe={class:"text-lg"},de={class:"mt-[10px]"},me={class:"flex items-center"},ue={class:"ml-2 font-bold overflow-hidden text-ellipsis whitespace-nowrap"},ce={class:"mt-[16px] flex justify-end"},_e=I({__name:"bwcorder",setup(fe){const z=D().meta.title,y=b();(async()=>{const u=await le();y.value=u.data})();let l=j({page:1,limit:10,total:0,loading:!0,data:[],searchParam:{member_id:"",orderSn:"",order_no:"",userOrderSn:"",paidAmount:"",shopOriginId:"",orderTelephone:"",name:"",logo:"",address:"",platformName:"",platformLogo:"",source:"",planId:"",planTypeCh:"",planTypeDescCh:"",commissionType:"",sid:"",minAmount:"",maxAmount:"",commission:"",commissionRatio:"",ecommission:"",ecommissionRatio:"",state:"",createTime:"",finishedTime:"",xgzSettleStatus:"",xgzSettleTime:"",create_time:"",close_time:"",reason:"",fanxian:"",is_fanxian:""}});const T=b();b([]);const h=(u=1)=>{l.loading=!0,l.page=u,re({page:l.page,limit:l.limit,...l.searchParam}).then(r=>{l.loading=!1,l.data=r.data.data,l.total=r.data.total}).catch(()=>{l.loading=!1})};h(),b(null);const O=u=>{u&&(u.resetFields(),h())};return(u,r)=>{const v=M,g=W,k=Y,B=G,S=H,R=J,V=Q,E=X,p=Z,m=ee,A=$("block"),U=te,L=ae,N=oe;return n(),x("div",se,[o(V,{class:"box-card !border-none",shadow:"never"},{default:a(()=>[c("div",ie,[c("span",pe,_(e(z)),1)]),o(V,{class:"box-card !border-none my-[10px] table-search-wrap",shadow:"never"},{default:a(()=>[o(R,{inline:!0,model:e(l).searchParam,ref_key:"searchFormRef",ref:T},{default:a(()=>[o(g,{label:e(s)("orderSn"),prop:"orderSn"},{default:a(()=>[o(v,{modelValue:e(l).searchParam.orderSn,"onUpdate:modelValue":r[0]||(r[0]=t=>e(l).searchParam.orderSn=t),placeholder:e(s)("orderSnPlaceholder")},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),o(g,{label:e(s)("orderTelephone"),prop:"orderTelephone"},{default:a(()=>[o(v,{modelValue:e(l).searchParam.orderTelephone,"onUpdate:modelValue":r[1]||(r[1]=t=>e(l).searchParam.orderTelephone=t),placeholder:e(s)("orderTelephonePlaceholder")},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),o(g,{label:e(s)("state"),prop:"state"},{default:a(()=>[o(B,{class:"w-[280px]",modelValue:e(l).searchParam.state,"onUpdate:modelValue":r[2]||(r[2]=t=>e(l).searchParam.state=t),clearable:"",placeholder:"请选择"},{default:a(()=>[o(k,{label:"全部",value:""}),(n(!0),x(C,null,F(y.value,(t,w)=>(n(),i(k,{key:w,label:t,value:w},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1},8,["label"]),o(g,{label:e(s)("isFanxian"),prop:"is_fanxian"},{default:a(()=>[o(v,{modelValue:e(l).searchParam.is_fanxian,"onUpdate:modelValue":r[3]||(r[3]=t=>e(l).searchParam.is_fanxian=t),placeholder:e(s)("isFanxianPlaceholder")},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),o(g,null,{default:a(()=>[o(S,{type:"primary",onClick:r[4]||(r[4]=t=>h())},{default:a(()=>[d(_(e(s)("search")),1)]),_:1}),o(S,{onClick:r[5]||(r[5]=t=>O(T.value))},{default:a(()=>[d(_(e(s)("reset")),1)]),_:1})]),_:1})]),_:1},8,["model"])]),_:1}),c("div",de,[q((n(),i(U,{data:e(l).data,size:"large"},{empty:a(()=>[c("span",null,_(e(l).loading?"":e(s)("emptyData")),1)]),default:a(()=>[o(p,{label:"商家信息",width:"300",align:"left"},{default:a(({row:t})=>[c("div",me,[t.logo?(n(),i(E,{key:0,src:e(K)(t.logo)},null,8,["src"])):(n(),i(E,{key:1,icon:"UserFilled"})),c("div",ue,_(t.name),1)])]),_:1}),o(p,{prop:"orderSn",label:e(s)("orderSn"),"min-width":"120","show-overflow-tooltip":!0},null,8,["label"]),o(p,{prop:"orderTelephone",label:e(s)("orderTelephone"),"min-width":"80","show-overflow-tooltip":!0},null,8,["label"]),o(p,{prop:"source",label:e(s)("source"),"min-width":"80","show-overflow-tooltip":!0},{default:a(({row:t})=>[t.source==1?(n(),i(m,{key:0,type:"warning"},{default:a(()=>[d("美团")]),_:1})):f("",!0),t.source==2?(n(),i(m,{key:1,type:"primary"},{default:a(()=>[d("饿了么")]),_:1})):f("",!0),t.source==2?(n(),i(m,{key:2,type:"danger"},{default:a(()=>[d("三方")]),_:1})):f("",!0)]),_:1},8,["label"]),o(p,{prop:"commissionType",label:e(s)("commissionType"),"min-width":"80","show-overflow-tooltip":!0},{default:a(({row:t})=>[t.commissionType==1?(n(),i(m,{key:0,type:"warning"},{default:a(()=>[d("固定金额")]),_:1})):f("",!0),t.commissionType==2?(n(),i(m,{key:1,type:"primary"},{default:a(()=>[d("按比例")]),_:1})):f("",!0)]),_:1},8,["label"]),o(p,{prop:"commission",label:"联盟佣金","min-width":"80","show-overflow-tooltip":!0}),o(p,{prop:"commissionRatio",label:"佣金比例","min-width":"80","show-overflow-tooltip":!0},{default:a(({row:t})=>[d(_(t.commissionRatio)+"% ",1)]),_:1}),o(p,{prop:"xgzSettleStatus",label:"联盟结算","min-width":"80","show-overflow-tooltip":!0},{default:a(({row:t})=>[t.xgzSettleStatus==1?(n(),i(m,{key:0,type:"warning"},{default:a(()=>[d("已结算")]),_:1})):(n(),i(m,{key:1,type:"primary"},{default:a(()=>[d("未结算")]),_:1}))]),_:1}),o(p,{prop:"fanxian",label:"客户佣金","min-width":"80","show-overflow-tooltip":!0}),o(p,{prop:"is_fanxian",label:"客户结算","min-width":"80","show-overflow-tooltip":!0},{default:a(({row:t})=>[t.is_fanxian==1?(n(),i(m,{key:0,type:"warning"},{default:a(()=>[d("已结算")]),_:1})):(n(),i(m,{key:1,type:"primary"},{default:a(()=>[d("未结算")]),_:1}))]),_:1}),o(p,{prop:"state",label:e(s)("state"),"min-width":"80","show-overflow-tooltip":!0},{default:a(({row:t})=>[(n(!0),x(C,null,F(y.value,(w,P)=>(n(),i(A,{key:P},{default:a(()=>[t.state==P?(n(),i(m,{key:0,type:"warning"},{default:a(()=>[d(_(w),1)]),_:2},1024)):f("",!0)]),_:2},1024))),128))]),_:1},8,["label"]),o(p,{prop:"reason",label:e(s)("reason"),"min-width":"120","show-overflow-tooltip":!0},null,8,["label"]),o(p,{prop:"paidAmount",label:e(s)("paidAmount"),"min-width":"120","show-overflow-tooltip":!0},null,8,["label"])]),_:1},8,["data"])),[[N,e(l).loading]]),c("div",ce,[o(L,{"current-page":e(l).page,"onUpdate:current-page":r[6]||(r[6]=t=>e(l).page=t),"page-size":e(l).limit,"onUpdate:page-size":r[7]||(r[7]=t=>e(l).limit=t),layout:"total, sizes, prev, pager, next, jumper",total:e(l).total,onSizeChange:r[8]||(r[8]=t=>h()),onCurrentChange:h},null,8,["current-page","page-size","total"])])])]),_:1})])}}});const Ne=ne(_e,[["__scopeId","data-v-203a05fe"]]);export{Ne as default};
