import{d as N,x as Y,r as E,n as L,a2 as M,h as i,c as f,e as t,w as l,F as P,T as D,s as y,i as x,a as n,R as T,t as m,B as U,bO as O,L as R,K as j,ab as H,aC as K,E as W,M as q,a7 as A,ac as G,ad as J,W as Q,Y as X,p as Z,g as ee}from"./index-37fee5a0.js";/* empty css                   *//* empty css                      *//* empty css                 *//* empty css               *//* empty css                  *//* empty css                  *//* empty css                     *//* empty css                  *//* empty css                 *//* empty css                    */import"./el-tooltip-4ed993c7.js";/* empty css                        *//* empty css                *//* empty css                *//* empty css                  */import"./el-form-item-4ed993c7.js";/* empty css                       */import{d as te,e as oe}from"./myxq-055c2b62.js";import{_ as ae}from"./_plugin-vue_export-helper-c27b6911.js";const le=u=>(Z("data-v-6d92f75b"),u=u(),ee(),u),re={class:"main-container"},se=le(()=>n("div",{class:"flex justify-between items-center"},[n("span",{class:"text-lg"},"周边优惠订单")],-1)),ne={class:"mt-[10px]"},ie={key:0},de={class:"mt-[16px] flex justify-end"},pe=N({__name:"near_order",setup(u){Y();const k=E(),o=L({page:1,limit:30,total:0,loading:!0,data:[],searchParam:{time:[],orderid:"",status:""}}),S=r=>{const e=new Date(r*1e3),h=e.getFullYear(),d=e.getMonth()+1,w=e.getDate(),c=e.getHours(),_=e.getMinutes(),v=e.getSeconds();return`${h}-${d}-${w} ${c}:${_}:${v}`},g=E();(async()=>{const r=await te();g.value=r.data})();const p=(r=1)=>{o.loading=!0,o.page=r,oe({page:o.page,limit:o.limit,...o.searchParam}).then(e=>{o.loading=!1,o.data=e.data.list,o.total=e.data.total}).catch(()=>{o.loading=!1})};p();const F=r=>{r&&(r.resetFields(),p())};return(r,e)=>{const h=O,d=R,w=j,c=H,_=M("block"),v=K,C=W,I=q,V=A,s=G,$=J,z=Q,B=X;return i(),f("div",re,[t(V,{class:"box-card !border-none",shadow:"never"},{default:l(()=>[se,t(V,{class:"box-card !border-none my-[10px] table-search-wrap",shadow:"never"},{default:l(()=>[t(I,{inline:!0,model:o.searchParam,ref_key:"searchFormRef",ref:k},{default:l(()=>[t(d,{label:"开始时间",prop:"time"},{default:l(()=>[t(h,{modelValue:o.searchParam.time,"onUpdate:modelValue":e[0]||(e[0]=a=>o.searchParam.time=a),type:"datetimerange",format:"YYYY-MM-DD hh:mm:ss","range-separator":"-","start-placeholder":"开始时间","end-placeholder":"结束时间"},null,8,["modelValue"])]),_:1}),t(d,{label:"订单ID",prop:"orderid"},{default:l(()=>[t(w,{modelValue:o.searchParam.orderid,"onUpdate:modelValue":e[1]||(e[1]=a=>o.searchParam.orderid=a),placeholder:"请输入订单ID"},null,8,["modelValue"])]),_:1}),t(d,{label:"订单状态",prop:"status"},{default:l(()=>[t(v,{class:"w-[280px]",modelValue:o.searchParam.status,"onUpdate:modelValue":e[2]||(e[2]=a=>o.searchParam.status=a),clearable:"",placeholder:"请选择"},{default:l(()=>[t(c,{label:"全部",value:""}),(i(!0),f(P,null,D(g.value,(a,b)=>(i(),y(_,{key:"index"},{default:l(()=>[t(c,{label:a,value:b},null,8,["label","value"])]),_:2},1024))),128))]),_:1},8,["modelValue"])]),_:1}),t(d,null,{default:l(()=>[t(C,{type:"primary",onClick:e[3]||(e[3]=a=>p())},{default:l(()=>[x("搜索")]),_:1}),t(C,{onClick:e[4]||(e[4]=a=>F(k.value))},{default:l(()=>[x("重置")]),_:1})]),_:1})]),_:1},8,["model"])]),_:1}),n("div",ne,[T((i(),y($,{data:o.data,size:"large"},{empty:l(()=>[n("span",null,m(o.loading?"":"还没有订单哟~~~"),1)]),default:l(()=>[t(s,{prop:"orderid",label:"订单ID","min-width":"80","show-overflow-tooltip":!0}),t(s,{prop:"showid",label:"场次","min-width":"120","show-overflow-tooltip":!0}),t(s,{prop:"ordernum",label:"数量","min-width":"60","show-overflow-tooltip":!0}),t(s,{prop:"realseat",label:"出票座位","min-width":"80","show-overflow-tooltip":!0}),t(s,{prop:"seatno",label:"预约座位","min-width":"60","show-overflow-tooltip":!0}),t(s,{prop:"payprice",label:"支付金额","min-width":"80","show-overflow-tooltip":!0},{default:l(({row:a})=>[n("div",null,m(a.payprice/100),1)]),_:1}),t(s,{prop:"commission",label:"佣金","min-width":"80","show-overflow-tooltip":!0},{default:l(({row:a})=>[n("div",null,m(a.commission/100),1)]),_:1}),t(s,{prop:"status",label:"状态","min-width":"120","show-overflow-tooltip":!0},{default:l(()=>[(i(!0),f(P,null,D(g.value,(a,b)=>(i(),y(_,{key:"index"},{default:l(()=>[b==r.row.status?(i(),f("div",ie,m(a),1)):U("",!0)]),_:2},1024))),128))]),_:1}),t(s,{prop:"closetx",label:"关闭原因","min-width":"120","show-overflow-tooltip":!0}),t(s,{prop:"createdtime",label:"创建时间","min-width":"120","show-overflow-tooltip":!0},{default:l(({row:a})=>[n("div",null,m(S(a.createdtime)),1)]),_:1}),x("/> ")]),_:1},8,["data"])),[[B,o.loading]]),n("div",de,[t(z,{"current-page":o.page,"onUpdate:current-page":e[5]||(e[5]=a=>o.page=a),"page-size":o.limit,"onUpdate:page-size":e[6]||(e[6]=a=>o.limit=a),layout:"total, sizes, prev, pager, next, jumper",total:o.total,onSizeChange:e[7]||(e[7]=a=>p()),onCurrentChange:p},null,8,["current-page","page-size","total"])])])]),_:1})])}}});const $e=ae(pe,[["__scopeId","data-v-6d92f75b"]]);export{$e as default};
