import{d as z,x as F,n as I,r as y,h as s,c as $,e as o,w as l,u as e,q as n,i as p,t as g,a as v,R as U,s as _,B as c,a5 as x,K as Y,L,bO as M,E as R,M as j,a7 as q,ac as K,ak as W,ad as A,W as G,Y as H}from"./index-5a756a51.js";/* empty css                   *//* empty css                      *//* empty css                 *//* empty css               *//* empty css                  *//* empty css                  *//* empty css                     *//* empty css                  *//* empty css                 *//* empty css                    */import"./el-tooltip-4ed993c7.js";/* empty css                        *//* empty css                *//* empty css                *//* empty css                  *//* empty css                       */import"./el-form-item-4ed993c7.js";import{_ as J,g as Q,d as X}from"./shop-order-edit.vue_vue_type_style_index_0_lang-90d8191c.js";import{e as Z}from"./shop-84d61841.js";import{_ as ee}from"./_plugin-vue_export-helper-c27b6911.js";/* empty css                  *//* empty css                   */const te={class:"main-container"},ae={class:"mt-[10px]"},oe={class:"mt-[16px] flex justify-end"},re=z({__name:"shop_order",setup(le){F().meta.title;const C=async i=>{try{await x.confirm("本订单所有发货将会取消，是否确定？","确认",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}),await Z(i),d()}catch{}};let a=I({page:1,limit:10,total:0,loading:!0,data:[],searchParam:{order_no:"",delivery_id:"",order_status_name:"",create_time:[]}});const b=y();y([]);const d=(i=1)=>{a.loading=!0,a.page=i,Q({page:a.page,limit:a.limit,...a.searchParam}).then(r=>{a.loading=!1,a.data=r.data.data,a.total=r.data.total}).catch(()=>{a.loading=!1})};d();const E=y(null),P=i=>{x.confirm(n("shopOrderDeleteTips"),n("warning"),{confirmButtonText:n("confirm"),cancelButtonText:n("cancel"),type:"warning"}).then(()=>{X(i).then(()=>{d()}).catch(()=>{})})},V=i=>{i&&(i.resetFields(),d())};return(i,r)=>{const k=Y,u=L,B=M,f=R,D=j,w=q,m=K,h=W,T=A,O=G,N=H;return s(),$("div",te,[o(w,{class:"box-card !border-none",shadow:"never"},{default:l(()=>[o(w,{class:"box-card !border-none my-[10px] table-search-wrap",shadow:"never"},{default:l(()=>[o(D,{inline:!0,model:e(a).searchParam,ref_key:"searchFormRef",ref:b},{default:l(()=>[o(u,{label:e(n)("orderNo"),prop:"order_no"},{default:l(()=>[o(k,{modelValue:e(a).searchParam.order_no,"onUpdate:modelValue":r[0]||(r[0]=t=>e(a).searchParam.order_no=t),placeholder:e(n)("orderNoPlaceholder")},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),o(u,{label:e(n)("deliveryId"),prop:"delivery_id"},{default:l(()=>[o(k,{modelValue:e(a).searchParam.delivery_id,"onUpdate:modelValue":r[1]||(r[1]=t=>e(a).searchParam.delivery_id=t),placeholder:e(n)("deliveryIdPlaceholder")},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),o(u,{label:e(n)("createTime"),prop:"create_time"},{default:l(()=>[o(B,{modelValue:e(a).searchParam.create_time,"onUpdate:modelValue":r[2]||(r[2]=t=>e(a).searchParam.create_time=t),type:"datetimerange",format:"YYYY-MM-DD hh:mm:ss","start-placeholder":e(n)("startDate"),"end-placeholder":e(n)("endDate")},null,8,["modelValue","start-placeholder","end-placeholder"])]),_:1},8,["label"]),o(u,null,{default:l(()=>[o(f,{type:"primary",onClick:r[3]||(r[3]=t=>d())},{default:l(()=>[p(g(e(n)("search")),1)]),_:1}),o(f,{onClick:r[4]||(r[4]=t=>V(b.value))},{default:l(()=>[p(g(e(n)("reset")),1)]),_:1})]),_:1})]),_:1},8,["model"])]),_:1}),v("div",ae,[U((s(),_(T,{data:e(a).data,size:"large"},{empty:l(()=>[v("span",null,g(e(a).loading?"":e(n)("emptyData")),1)]),default:l(()=>[o(m,{prop:"order_no",label:e(n)("orderNo"),"min-width":"120","show-overflow-tooltip":!0},null,8,["label"]),o(m,{prop:"delivery_id",label:e(n)("deliveryId"),"min-width":"120","show-overflow-tooltip":!0},null,8,["label"]),o(m,{prop:"yida_order_no",label:e(n)("yidaOrderNo"),"min-width":"120","show-overflow-tooltip":!0},null,8,["label"]),o(m,{prop:"order_status_name",label:e(n)("orderStatusName"),"min-width":"120","show-overflow-tooltip":!0},null,8,["label"]),o(m,{prop:"is_pick",label:"揽收状态","min-width":"120","show-overflow-tooltip":!0},{default:l(({row:t})=>[t.is_pick==1?(s(),_(h,{key:0},{default:l(()=>[p("已揽收")]),_:1})):c("",!0),t.is_pick==0?(s(),_(h,{key:1,type:"warning"},{default:l(()=>[p("未揽收")]),_:1})):c("",!0)]),_:1}),o(m,{prop:"is_send",label:"发单状态","min-width":"120","show-overflow-tooltip":!0},{default:l(({row:t})=>[t.is_send==1?(s(),_(h,{key:0},{default:l(()=>[p("已发单")]),_:1})):c("",!0),t.is_send==0?(s(),_(h,{key:1,type:"warning"},{default:l(()=>[p("未发单")]),_:1})):c("",!0)]),_:1}),o(m,{label:e(n)("operation"),fixed:"right","min-width":"120"},{default:l(({row:t})=>[t.is_send==1&&t.is_pick==0?(s(),_(f,{key:0,type:"primary",link:"",onClick:S=>C(t)},{default:l(()=>[p("取消发货")]),_:2},1032,["onClick"])):c("",!0),t.is_send==0&&t.is_pick==0?(s(),_(f,{key:1,type:"primary",link:"",onClick:S=>P(t.id)},{default:l(()=>[p(g(e(n)("delete")),1)]),_:2},1032,["onClick"])):c("",!0)]),_:1},8,["label"])]),_:1},8,["data"])),[[N,e(a).loading]]),v("div",oe,[o(O,{"current-page":e(a).page,"onUpdate:current-page":r[5]||(r[5]=t=>e(a).page=t),"page-size":e(a).limit,"onUpdate:page-size":r[6]||(r[6]=t=>e(a).limit=t),layout:"total, sizes, prev, pager, next, jumper",total:e(a).total,onSizeChange:r[7]||(r[7]=t=>d()),onCurrentChange:d},null,8,["current-page","page-size","total"])])]),o(J,{ref_key:"editShopOrderDialog",ref:E,onComplete:d},null,512)]),_:1})])}}});const Te=ee(re,[["__scopeId","data-v-4b622ad6"]]);export{Te as default};
