import{d as L,x as M,r as E,n as N,a2 as T,h as i,c as g,e as o,w as l,F as P,T as S,s as y,i as x,a as n,R as U,t as m,B as O,bO as R,L as j,K as H,ac as K,aD as W,E as q,M as A,a7 as G,ad as J,ae as Q,W as X,Y as Z,p as ee,g as te}from"./index-99f00cf3.js";/* empty css                   *//* empty css                      *//* empty css                 *//* empty css               *//* empty css                  *//* empty css                  *//* empty css                     *//* empty css                  *//* empty css                 *//* empty css                    */import"./el-tooltip-4ed993c7.js";/* empty css                        *//* empty css                *//* empty css                *//* empty css                  */import"./el-form-item-4ed993c7.js";/* empty css                       */import{g as oe,a as ae}from"./myxq-8e1a671a.js";import{_ as le}from"./_plugin-vue_export-helper-c27b6911.js";const re=c=>(ee("data-v-0994b8c7"),c=c(),te(),c),se={class:"main-container"},ne=re(()=>n("div",{class:"flex justify-between items-center"},[n("span",{class:"text-lg"},"点餐订单")],-1)),ie={class:"mt-[10px]"},de={key:0},pe={class:"mt-[16px] flex justify-end"},me=L({__name:"dc_order",setup(c){M();const k=E(),t=N({page:1,limit:30,total:0,loading:!0,data:[],searchParam:{time:[],orderid:"",status:""}}),F=r=>{const e=new Date(r*1e3),h=e.getFullYear(),d=e.getMonth()+1,v=e.getDate(),u=e.getHours(),_=e.getMinutes(),w=e.getSeconds();return`${h}-${d}-${v} ${u}:${_}:${w}`},f=E();(async()=>{const r=await oe();f.value=r.data})();const p=(r=1)=>{t.loading=!0,t.page=r,ae({page:t.page,limit:t.limit,...t.searchParam}).then(e=>{t.loading=!1,t.data=e.data.list,console.log(t.data),t.total=e.data.total}).catch(()=>{t.loading=!1})};p();const I=r=>{r&&(r.resetFields(),p())};return(r,e)=>{const h=R,d=j,v=H,u=K,_=T("block"),w=W,C=q,$=A,D=G,s=J,z=Q,B=X,Y=Z;return i(),g("div",se,[o(D,{class:"box-card !border-none",shadow:"never"},{default:l(()=>[ne,o(D,{class:"box-card !border-none my-[10px] table-search-wrap",shadow:"never"},{default:l(()=>[o($,{inline:!0,model:t.searchParam,ref_key:"searchFormRef",ref:k},{default:l(()=>[o(d,{label:"开始时间",prop:"time"},{default:l(()=>[o(h,{modelValue:t.searchParam.time,"onUpdate:modelValue":e[0]||(e[0]=a=>t.searchParam.time=a),type:"datetimerange",format:"YYYY-MM-DD hh:mm:ss","range-separator":"-","start-placeholder":"开始时间","end-placeholder":"结束时间"},null,8,["modelValue"])]),_:1}),o(d,{label:"订单ID",prop:"orderid"},{default:l(()=>[o(v,{modelValue:t.searchParam.orderid,"onUpdate:modelValue":e[1]||(e[1]=a=>t.searchParam.orderid=a),placeholder:"请输入订单ID"},null,8,["modelValue"])]),_:1}),o(d,{label:"订单状态",prop:"status"},{default:l(()=>[o(w,{class:"w-[280px]",modelValue:t.searchParam.status,"onUpdate:modelValue":e[2]||(e[2]=a=>t.searchParam.status=a),clearable:"",placeholder:"请选择"},{default:l(()=>[o(u,{label:"全部",value:""}),(i(!0),g(P,null,S(f.value,(a,b)=>(i(),y(_,{key:"index"},{default:l(()=>[o(u,{label:a,value:b},null,8,["label","value"])]),_:2},1024))),128))]),_:1},8,["modelValue"])]),_:1}),o(d,null,{default:l(()=>[o(C,{type:"primary",onClick:e[3]||(e[3]=a=>p())},{default:l(()=>[x("搜索")]),_:1}),o(C,{onClick:e[4]||(e[4]=a=>I(k.value))},{default:l(()=>[x("重置")]),_:1})]),_:1})]),_:1},8,["model"])]),_:1}),n("div",ie,[U((i(),y(z,{data:t.data,size:"large"},{empty:l(()=>[n("span",null,m(t.loading?"":"还没有订单哟~~~"),1)]),default:l(()=>[o(s,{prop:"orderid",label:"订单ID","min-width":"80","show-overflow-tooltip":!0}),o(s,{prop:"storeName",label:"门店","min-width":"120","show-overflow-tooltip":!0}),o(s,{prop:"goodsCount",label:"数量","min-width":"60","show-overflow-tooltip":!0}),o(s,{prop:"payprice",label:"支付金额","min-width":"80","show-overflow-tooltip":!0},{default:l(({row:a})=>[n("div",null,m(a.payprice/100),1)]),_:1}),o(s,{prop:"commission",label:"佣金","min-width":"80","show-overflow-tooltip":!0},{default:l(({row:a})=>[n("div",null,m(a.commission),1)]),_:1}),o(s,{prop:"status",label:"状态","min-width":"120","show-overflow-tooltip":!0},{default:l(({row:a})=>[(i(!0),g(P,null,S(f.value,(b,V)=>(i(),y(_,{key:V},{default:l(()=>[V==a.status?(i(),g("div",de,m(b),1)):O("",!0)]),_:2},1024))),128))]),_:1}),o(s,{prop:"closetxt",label:"关闭原因","min-width":"120","show-overflow-tooltip":!0}),o(s,{prop:"createdtime",label:"创建时间","min-width":"120","show-overflow-tooltip":!0},{default:l(({row:a})=>[n("div",null,m(F(a.createdtime)),1)]),_:1}),x("/> ")]),_:1},8,["data"])),[[Y,t.loading]]),n("div",pe,[o(B,{"current-page":t.page,"onUpdate:current-page":e[5]||(e[5]=a=>t.page=a),"page-size":t.limit,"onUpdate:page-size":e[6]||(e[6]=a=>t.limit=a),layout:"total, sizes, prev, pager, next, jumper",total:t.total,onSizeChange:e[7]||(e[7]=a=>p()),onCurrentChange:p},null,8,["current-page","page-size","total"])])])]),_:1})])}}});const ze=le(me,[["__scopeId","data-v-0994b8c7"]]);export{ze as default};
