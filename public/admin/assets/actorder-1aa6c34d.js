import{d as F,x as T,n as U,r as g,h as m,c as A,e as t,w as s,a as f,u as e,q as o,i as d,t as v,R as N,s as c,B as h,aW as Y,K as $,L as J,ab as L,aC as M,bO as R,E as O,M as S,a7 as W,ac as q,ak as K,ad as G,W as H,Y as Q}from"./index-37fee5a0.js";/* empty css                   *//* empty css                      *//* empty css                 *//* empty css               *//* empty css                  *//* empty css                  *//* empty css                     *//* empty css                  *//* empty css                 *//* empty css                    */import"./el-tooltip-4ed993c7.js";/* empty css                        *//* empty css                *//* empty css                *//* empty css                  *//* empty css                       */import"./el-form-item-4ed993c7.js";/* empty css                 */import{a as X,_ as Z,g as ee}from"./actorder-edit.vue_vue_type_style_index_0_lang-ccce14b1.js";import{_ as te}from"./_plugin-vue_export-helper-c27b6911.js";/* empty css                  *//* empty css                   */const le={class:"main-container"},ae={class:"mb-4",style:{width:"640px"}},oe={class:"mt-[10px]"},re={class:"mt-[16px] flex justify-end"},se=F({__name:"actorder",setup(ne){T().meta.title;let l=U({page:1,limit:10,total:0,loading:!0,data:[],searchParam:{sid:"",order_id:"",jl_js:"",pt_js:"",create_time:[]}});const j=g();g([]);const i=(_=1)=>{l.loading=!0,l.page=_,ee({page:l.page,limit:l.limit,...l.searchParam}).then(a=>{l.loading=!1,l.data=a.data.data,l.total=a.data.total}).catch(()=>{l.loading=!1})};i();const P=g(null),V=_=>{_&&(_.resetFields(),i())};return(_,a)=>{const k=Y,E=$,u=J,p=L,y=M,C=R,w=O,D=S,x=W,n=q,b=K,I=G,z=H,B=Q;return m(),A("div",le,[t(x,{class:"box-card !border-none",shadow:"never"},{default:s(()=>[t(x,{class:"box-card !border-none table-search-wrap",shadow:"never"},{default:s(()=>[f("div",ae,[t(k,{type:"info",title:"此处订单非实时订单，如需查看实时订单可在订单管理里面查看;激励计算是设置的会员等级、分销、积分等权益，在三方平台结算佣金后会自动进行激励结算",closable:!1,"show-icon":""})]),t(D,{inline:!0,model:e(l).searchParam,ref_key:"searchFormRef",ref:j},{default:s(()=>[t(u,{label:e(o)("orderId"),prop:"order_id"},{default:s(()=>[t(E,{modelValue:e(l).searchParam.order_id,"onUpdate:modelValue":a[0]||(a[0]=r=>e(l).searchParam.order_id=r),placeholder:e(o)("orderIdPlaceholder")},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),t(u,{label:e(o)("jlJs"),prop:"jl_js"},{default:s(()=>[t(y,{class:"w-[280px]",modelValue:e(l).searchParam.jl_js,"onUpdate:modelValue":a[1]||(a[1]=r=>e(l).searchParam.jl_js=r),clearable:"",placeholder:e(o)("statusPlaceholder")},{default:s(()=>[t(p,{label:"全部",value:""}),t(p,{label:"未结算",value:"0"}),t(p,{label:"已结算",value:"1"})]),_:1},8,["modelValue","placeholder"])]),_:1},8,["label"]),t(u,{label:e(o)("ptJs"),prop:"pt_js"},{default:s(()=>[t(y,{class:"w-[280px]",modelValue:e(l).searchParam.pt_js,"onUpdate:modelValue":a[2]||(a[2]=r=>e(l).searchParam.pt_js=r),clearable:"",placeholder:e(o)("statusPlaceholder")},{default:s(()=>[t(p,{label:"全部",value:""}),t(p,{label:"未结算",value:"0"}),t(p,{label:"已结算",value:"1"})]),_:1},8,["modelValue","placeholder"])]),_:1},8,["label"]),t(u,{label:e(o)("createTime"),prop:"create_time"},{default:s(()=>[t(C,{modelValue:e(l).searchParam.create_time,"onUpdate:modelValue":a[3]||(a[3]=r=>e(l).searchParam.create_time=r),type:"datetimerange",format:"YYYY-MM-DD hh:mm:ss","start-placeholder":e(o)("startDate"),"end-placeholder":e(o)("endDate")},null,8,["modelValue","start-placeholder","end-placeholder"])]),_:1},8,["label"]),t(u,null,{default:s(()=>[t(w,{type:"primary",onClick:a[4]||(a[4]=r=>i())},{default:s(()=>[d(v(e(o)("search")),1)]),_:1}),t(w,{onClick:a[5]||(a[5]=r=>V(j.value))},{default:s(()=>[d(v(e(o)("reset")),1)]),_:1}),t(w,{onClick:a[6]||(a[6]=r=>e(X)())},{default:s(()=>[d("同步订单")]),_:1})]),_:1})]),_:1},8,["model"])]),_:1}),f("div",oe,[N((m(),c(I,{data:e(l).data,size:"large"},{empty:s(()=>[f("span",null,v(e(l).loading?"":e(o)("emptyData")),1)]),default:s(()=>[t(n,{prop:"sid",label:e(o)("sid"),"min-width":"120","show-overflow-tooltip":!0},null,8,["label"]),t(n,{prop:"member_id",label:e(o)("memberId"),"min-width":"120","show-overflow-tooltip":!0},null,8,["label"]),t(n,{prop:"name",label:e(o)("name"),"min-width":"120","show-overflow-tooltip":!0},null,8,["label"]),t(n,{prop:"chanel",label:e(o)("chanel"),"min-width":"120","show-overflow-tooltip":!0},null,8,["label"]),t(n,{prop:"order_id",label:e(o)("orderId"),"min-width":"120","show-overflow-tooltip":!0},null,8,["label"]),t(n,{prop:"pay_money",label:e(o)("payMoney"),"min-width":"120","show-overflow-tooltip":!0},null,8,["label"]),t(n,{prop:"commission",label:e(o)("commission"),"min-width":"120","show-overflow-tooltip":!0},null,8,["label"]),t(n,{prop:"status_name",label:e(o)("statusName"),"min-width":"120","show-overflow-tooltip":!0},null,8,["label"]),t(n,{prop:"jl_js",label:e(o)("jlJs"),"min-width":"120","show-overflow-tooltip":!0},{default:s(({row:r})=>[r.jl_js==1?(m(),c(b,{key:0},{default:s(()=>[d("已结算")]),_:1})):h("",!0),r.jl_js==0?(m(),c(b,{key:1,type:"error"},{default:s(()=>[d("未结算")]),_:1})):h("",!0)]),_:1},8,["label"]),t(n,{prop:"pt_js",label:e(o)("ptJs"),"min-width":"120","show-overflow-tooltip":!0},{default:s(({row:r})=>[r.pt_js==1?(m(),c(b,{key:0},{default:s(()=>[d("已结算")]),_:1})):h("",!0),r.pt_js==0?(m(),c(b,{key:1,type:"error"},{default:s(()=>[d("未结算")]),_:1})):h("",!0)]),_:1},8,["label"])]),_:1},8,["data"])),[[B,e(l).loading]]),f("div",re,[t(z,{"current-page":e(l).page,"onUpdate:current-page":a[7]||(a[7]=r=>e(l).page=r),"page-size":e(l).limit,"onUpdate:page-size":a[8]||(a[8]=r=>e(l).limit=r),layout:"total, sizes, prev, pager, next, jumper",total:e(l).total,onSizeChange:a[9]||(a[9]=r=>i()),onCurrentChange:i},null,8,["current-page","page-size","total"])])]),t(Z,{ref_key:"editActorderDialog",ref:P,onComplete:i},null,512)]),_:1})])}}});const Be=te(se,[["__scopeId","data-v-7deab124"]]);export{Be as default};