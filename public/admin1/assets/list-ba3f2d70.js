import{d as I,f as L,x as N,n as S,r as C,h as p,c as d,e as t,w as n,a as _,t as i,u as o,i as u,q as a,P as U,s as j,_ as M,E as q,J as G,K as J,L as K,a0 as A,aa as H,ac as O,T as Q,U as W}from"./index-17984968.js";/* empty css                   *//* empty css                      *//* empty css                 *//* empty css               *//* empty css                  *//* empty css                  *//* empty css                     *//* empty css                  *//* empty css                 *//* empty css                    */import"./el-tooltip-4ed993c7.js";/* empty css                        *//* empty css                *//* empty css                */import"./el-form-item-4ed993c7.js";/* empty css                  */import{g as X,i as Y}from"./marketing-cc0d1b16.js";import{_ as Z}from"./coupon-spread-popup.vue_vue_type_script_setup_true_lang-4963b52f.js";import{_ as ee}from"./_plugin-vue_export-helper-c27b6911.js";/* empty css                  *//* empty css                   *//* empty css                 *//* empty css                        */import"./browser-a1ac24ac.js";const te={class:"main-container"},ae={class:"flex justify-between items-center mb-[5px]"},ne={class:"text-page-title"},oe={class:"mt-[10px]"},le={key:0},ie={key:1},se={key:0},pe={key:1},re={key:0},de={key:1},ce={key:0},_e={key:1},me={key:0},ue={key:0,class:"flex flex-col"},fe={key:1},he={key:1},ye={class:"mt-[16px] flex justify-end"},ge=I({__name:"list",setup(ve){const h=L(),x=N().meta.title,l=S({page:1,limit:10,total:0,loading:!0,data:[],searchParam:{title:""}}),g=C(),f=(r=1)=>{l.loading=!0,l.page=r,X({page:l.page,limit:l.limit,...l.searchParam}).then(s=>{l.loading=!1,l.data=s.data.data,l.total=s.data.total}).catch(()=>{l.loading=!1})};f();const v=C(null),E=r=>{v.value.show(r)},T=()=>{h.push("/shop/marketing/coupon/add")},P=r=>{h.push("/shop/marketing/coupon/edit?id="+r.id)},w=r=>{h.push("/shop/marketing/coupon/collection?id="+r.id)},B=r=>{M.confirm(a("couponDeleteTips"),a("warning"),{confirmButtonText:a("confirm"),cancelButtonText:a("cancel"),type:"warning"}).then(()=>{Y(r.id).then(()=>{f()}).catch(()=>{})})},$=r=>{r&&(r.resetFields(),f())};return(r,s)=>{const m=q,z=G,b=J,F=K,k=A,c=H,R=O,V=Q,D=W;return p(),d("div",te,[t(k,{class:"box-card !border-none",shadow:"never"},{default:n(()=>[_("div",ae,[_("span",ne,i(o(x)),1),t(m,{type:"primary",onClick:T},{default:n(()=>[u(i(o(a)("addCoupon")),1)]),_:1})]),t(k,{class:"box-card !border-none my-[10px] table-search-wrap",shadow:"never"},{default:n(()=>[t(F,{inline:!0,model:l.searchParam,ref_key:"searchFormRef",ref:g},{default:n(()=>[t(b,{label:o(a)("title"),prop:"title"},{default:n(()=>[t(z,{modelValue:l.searchParam.title,"onUpdate:modelValue":s[0]||(s[0]=e=>l.searchParam.title=e),modelModifiers:{trim:!0},placeholder:o(a)("titlePlaceholder")},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),t(b,null,{default:n(()=>[t(m,{type:"primary",onClick:s[1]||(s[1]=e=>f())},{default:n(()=>[u(i(o(a)("search")),1)]),_:1}),t(m,{onClick:s[2]||(s[2]=e=>$(g.value))},{default:n(()=>[u(i(o(a)("reset")),1)]),_:1})]),_:1})]),_:1},8,["model"])]),_:1}),_("div",oe,[U((p(),j(R,{data:l.data,size:"large"},{empty:n(()=>[_("span",null,i(l.loading?"":o(a)("emptyData")),1)]),default:n(()=>[t(c,{prop:"title",label:o(a)("title"),"min-width":"130"},null,8,["label"]),t(c,{prop:"type_name",label:o(a)("type"),"min-width":"130"},null,8,["label"]),t(c,{prop:"price",label:o(a)("price"),"min-width":"130"},{default:n(({row:e})=>[_("span",null,"¥"+i(e.price),1)]),_:1},8,["label"]),t(c,{label:o(a)("receiveType"),"min-width":"130"},{default:n(({row:e})=>[e.receive_type==1?(p(),d("span",le,"是")):(p(),d("span",ie,"否"))]),_:1},8,["label"]),t(c,{label:o(a)("sumCount"),"min-width":"140"},{default:n(({row:e})=>[e.sum_count!="-1"?(p(),d("span",se,i(e.sum_count||""),1)):(p(),d("span",pe,"不限量"))]),_:1},8,["label"]),t(c,{label:o(a)("remainCount"),"min-width":"140"},{default:n(({row:e})=>[_("span",null,i(e.receive_count||0)+" / "+i(e.receive_use_count||0),1)]),_:1},8,["label"]),t(c,{label:o(a)("threshold"),"min-width":"130"},{default:n(({row:e})=>[e.min_condition_money=="0.00"?(p(),d("span",re,"无门槛")):(p(),d("span",de,"满"+i(e.min_condition_money)+"元可用",1))]),_:1},8,["label"]),t(c,{label:o(a)("validType"),"min-width":"210"},{default:n(({row:e})=>[e.valid_type==1?(p(),d("span",ce," 领取之日起"+i(e.length||"")+" 天内有效",1)):(p(),d("span",_e," 使用截止时间至"+i(e.valid_end_time||""),1))]),_:1},8,["label"]),t(c,{label:o(a)("receiveTypeTime"),"min-width":"210"},{default:n(({row:e})=>[e.receive_type==1?(p(),d("div",me,[parseInt(e.start_time)!=0&&parseInt(e.end_time)!=0?(p(),d("div",ue,[_("span",null,"开始时间："+i(e.start_time),1),_("span",null,"结束时间："+i(e.end_time),1)])):(p(),d("div",fe,"不限时"))])):(p(),d("span",he,"--"))]),_:1},8,["label"]),t(c,{label:o(a)("operation"),fixed:"right",align:"right","min-width":"160"},{default:n(({row:e})=>[t(m,{type:"primary",link:"",onClick:y=>E(e)},{default:n(()=>[u(i(o(a)("spreadGoods")),1)]),_:2},1032,["onClick"]),t(m,{type:"primary",link:"",onClick:y=>P(e)},{default:n(()=>[u(i(o(a)("edit")),1)]),_:2},1032,["onClick"]),t(m,{type:"primary",link:"",onClick:y=>B(e)},{default:n(()=>[u(i(o(a)("delete")),1)]),_:2},1032,["onClick"]),t(m,{type:"primary",link:"",onClick:y=>w(e)},{default:n(()=>[u(i(o(a)("receive")),1)]),_:2},1032,["onClick"])]),_:1},8,["label"])]),_:1},8,["data"])),[[D,l.loading]]),_("div",ye,[t(V,{"current-page":l.page,"onUpdate:current-page":s[3]||(s[3]=e=>l.page=e),"page-size":l.limit,"onUpdate:page-size":s[4]||(s[4]=e=>l.limit=e),layout:"total, sizes, prev, pager, next, jumper",total:l.total,onSizeChange:s[5]||(s[5]=e=>f()),onCurrentChange:f},null,8,["current-page","page-size","total"])])])]),_:1}),t(Z,{ref_key:"couponSpreadPopupRef",ref:v},null,512)])}}});const Ae=ee(ge,[["__scopeId","data-v-1566b525"]]);export{Ae as default};