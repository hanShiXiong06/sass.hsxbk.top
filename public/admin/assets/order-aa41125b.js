import{O as v,d as T,x as Y,r as f,n as R,a2 as M,h as s,c as g,e as t,w as l,F as C,T as F,s as u,i as S,a as d,R as N,t as b,u as B,q as $,A as q,bO as A,L as K,K as W,ac as G,aD as H,E as J,M as Q,a7 as X,ad as Z,cz as ee,ae as te,W as ae,Y as oe,p as le,g as re}from"./index-99f00cf3.js";/* empty css                   *//* empty css                      *//* empty css                 *//* empty css               *//* empty css                  *//* empty css                  *//* empty css                     *//* empty css                  *//* empty css                 *//* empty css                    */import"./el-tooltip-4ed993c7.js";/* empty css                  *//* empty css                        *//* empty css                *//* empty css                *//* empty css                  */import"./el-form-item-4ed993c7.js";/* empty css                       */import{_ as se}from"./_plugin-vue_export-helper-c27b6911.js";function ne(i){return v.get("tk_cps/getjtkorderlist",{params:i})}function de(){return v.get("tk_cps/getjtkorderbrand")}function ie(){return v.get("tk_cps/getjtkorderstatus")}const pe=i=>(le("data-v-340182b0"),i=i(),re(),i),me={class:"main-container"},ue=pe(()=>d("div",{class:"flex justify-between items-center"},[d("span",{class:"text-lg"},"聚推客联盟统一订单")],-1)),ce={class:"mt-[10px]"},_e={class:"text-xs"},fe={class:"font-bold"},ge={class:"mt-[16px] flex justify-end"},be=T({__name:"order",setup(i){Y();const h=f(),e=R({page:1,limit:30,total:0,loading:!0,data:[],searchParam:{time:[],order_sn:"",status:"",brand_id:""}}),w=f();(async()=>{const r=await de();w.value=r.data})();const x=f();(async()=>{const r=await ie();x.value=r.data})();const p=(r=1)=>{e.loading=!0,e.page=r,ne({page:e.page,limit:e.limit,...e.searchParam}).then(o=>{console.log(o),e.loading=!1,e.data=o.data.data,e.total=o.data.total}).catch(()=>{e.loading=!1})};p();const j=r=>{r&&(r.resetFields(),p())};return(r,o)=>{const z=A,m=K,U=W,c=G,k=M("block"),y=H,V=J,D=Q,E=X,n=Z,P=ee,I=te,O=ae,L=oe;return s(),g("div",me,[t(E,{class:"box-card !border-none",shadow:"never"},{default:l(()=>[ue,t(E,{class:"box-card !border-none my-[10px] table-search-wrap",shadow:"never"},{default:l(()=>[t(D,{inline:!0,model:e.searchParam,ref_key:"searchFormRef",ref:h},{default:l(()=>[t(m,{label:"开始时间",prop:"time"},{default:l(()=>[t(z,{modelValue:e.searchParam.time,"onUpdate:modelValue":o[0]||(o[0]=a=>e.searchParam.time=a),type:"datetimerange",format:"YYYY-MM-DD hh:mm:ss","range-separator":"-","start-placeholder":"开始时间","end-placeholder":"结束时间"},null,8,["modelValue"])]),_:1}),t(m,{label:"订单号",prop:"order_sn"},{default:l(()=>[t(U,{modelValue:e.searchParam.order_sn,"onUpdate:modelValue":o[1]||(o[1]=a=>e.searchParam.order_sn=a),placeholder:"请输入订单sn"},null,8,["modelValue"])]),_:1}),t(m,{label:"渠道",prop:"brand_id"},{default:l(()=>[t(y,{class:"w-[280px]",modelValue:e.searchParam.brand_id,"onUpdate:modelValue":o[2]||(o[2]=a=>e.searchParam.brand_id=a),clearable:"",placeholder:"请选择"},{default:l(()=>[t(c,{label:"全部",value:""}),(s(!0),g(C,null,F(w.value,(a,_)=>(s(),u(k,{key:"index"},{default:l(()=>[t(c,{label:a,value:_},null,8,["label","value"])]),_:2},1024))),128))]),_:1},8,["modelValue"])]),_:1}),t(m,{label:"订单状态",prop:"status"},{default:l(()=>[t(y,{class:"w-[280px]",modelValue:e.searchParam.status,"onUpdate:modelValue":o[3]||(o[3]=a=>e.searchParam.status=a),clearable:"",placeholder:"请选择"},{default:l(()=>[t(c,{label:"全部",value:""}),(s(!0),g(C,null,F(x.value,(a,_)=>(s(),u(k,{key:"index"},{default:l(()=>[t(c,{label:a,value:_},null,8,["label","value"])]),_:2},1024))),128))]),_:1},8,["modelValue"])]),_:1}),t(m,null,{default:l(()=>[t(V,{type:"primary",onClick:o[4]||(o[4]=a=>p())},{default:l(()=>[S("搜索")]),_:1}),t(V,{onClick:o[5]||(o[5]=a=>j(h.value))},{default:l(()=>[S("重置")]),_:1})]),_:1})]),_:1},8,["model"])]),_:1}),d("div",ce,[N((s(),u(I,{data:e.data,size:"large"},{empty:l(()=>[d("span",null,b(e.loading?"":"还没有订单哟~~~"),1)]),default:l(()=>[t(n,{prop:"order_sn",label:"订单号","min-width":"80","show-overflow-tooltip":!0}),t(n,{label:B($)("icon"),width:"100",align:"left"},{default:l(({row:a})=>[a.icon?(s(),u(P,{key:0,src:B(q)(a.icon)},null,8,["src"])):(s(),u(P,{key:1,icon:"UserFilled"}))]),_:1},8,["label"]),t(n,{prop:"act_name",label:"渠道","min-width":"60","show-overflow-tooltip":!0}),t(n,{prop:"order_title",label:"名称","min-width":"80","show-overflow-tooltip":!0}),t(n,{label:"金额/分佣","min-width":"80","show-overflow-tooltip":!0},{default:l(({row:a})=>[d("text",_e,b(a.order_price)+"/",1),d("text",fe,b(a.jtk_share_fee),1)]),_:1}),t(n,{prop:"status_desc",label:"状态","min-width":"80","show-overflow-tooltip":!0}),t(n,{prop:"create_time",label:"创建时间","min-width":"80","show-overflow-tooltip":!0})]),_:1},8,["data"])),[[L,e.loading]]),d("div",ge,[t(O,{"current-page":e.page,"onUpdate:current-page":o[6]||(o[6]=a=>e.page=a),"page-size":e.limit,"onUpdate:page-size":o[7]||(o[7]=a=>e.limit=a),layout:"total, sizes, prev, pager, next, jumper",total:e.total,onSizeChange:o[8]||(o[8]=a=>p()),onCurrentChange:p},null,8,["current-page","page-size","total"])])])]),_:1})])}}});const Re=se(be,[["__scopeId","data-v-340182b0"]]);export{Re as default};
