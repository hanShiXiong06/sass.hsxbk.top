import{d as j,f as q,x as M,n as I,r as x,h as p,c as E,e as n,w as i,a as _,t as r,u as l,i as c,q as e,F as O,T as K,s as g,R as W,B as b,a4 as B,E as Y,K as G,L as H,aa as J,aB as Q,M as X,a6 as Z,ab as ee,ac as te,W as ae,Y as ne}from"./index-f7a01263.js";/* empty css                   *//* empty css                      *//* empty css                 *//* empty css               *//* empty css                  *//* empty css                  *//* empty css                     *//* empty css                  *//* empty css                 *//* empty css                    */import"./el-tooltip-4ed993c7.js";/* empty css                        *//* empty css                *//* empty css                     *//* empty css                  */import{r as le,s as ie,t as oe,u as se}from"./marketing-fa8c56a7.js";const re={class:"main-container"},ce={class:"flex justify-between items-center mb-[5px]"},me={class:"text-page-title"},ue={class:"mt-[10px]"},de=_("br",null,null,-1),pe={class:"mt-[16px] flex justify-end"},Se=j({__name:"list",setup(_e){const h=q(),D=M().meta.title,a=I({page:1,limit:10,total:0,loading:!1,data:[],searchParam:{active_name:"",active_status:""}}),y=x(),u=(s=1)=>{a.loading=!0,a.page=s,le({page:a.page,limit:a.limit,...a.searchParam}).then(o=>{a.loading=!1,a.data=o.data.data,a.total=o.data.total}).catch(()=>{a.loading=!1})};u();const w=s=>{s&&(s.resetFields(),u())},k=x({});(()=>{ie().then(s=>{k.value=s.data})})();const P=()=>{h.push("/shop/marketing/discount/add")},T=s=>{h.push({path:"/shop/marketing/discount/detail",query:{id:s}})},F=s=>{h.push({path:"/shop/marketing/discount/edit",query:{id:s}})},V=s=>{B.confirm(e("closeTips"),e("warning"),{confirmButtonText:e("confirm"),cancelButtonText:e("cancel"),type:"warning"}).then(()=>{oe(s).then(()=>{u()}).catch(()=>{})})},L=s=>{B.confirm(e("deleteTips"),e("warning"),{confirmButtonText:e("confirm"),cancelButtonText:e("cancel"),type:"warning"}).then(()=>{se(s).then(()=>{u()}).catch(()=>{})})};return(s,o)=>{const d=Y,A=G,f=H,S=J,$=Q,z=X,C=Z,m=ee,N=te,R=ae,U=ne;return p(),E("div",re,[n(C,{class:"box-card !border-none",shadow:"never"},{default:i(()=>[_("div",ce,[_("span",me,r(l(D)),1),n(d,{type:"primary",onClick:P},{default:i(()=>[c(r(l(e)("addDiscount")),1)]),_:1})]),n(C,{class:"box-card !border-none my-[10px] table-search-wrap",shadow:"never"},{default:i(()=>[n(z,{inline:!0,model:a.searchParam,ref_key:"searchFormRef",ref:y},{default:i(()=>[n(f,{label:l(e)("name"),prop:"active_name"},{default:i(()=>[n(A,{modelValue:a.searchParam.active_name,"onUpdate:modelValue":o[0]||(o[0]=t=>a.searchParam.active_name=t),modelModifiers:{trim:!0},placeholder:l(e)("namePlaceholder")},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),n(f,{label:l(e)("status"),prop:"active_status"},{default:i(()=>[n($,{modelValue:a.searchParam.active_status,"onUpdate:modelValue":o[1]||(o[1]=t=>a.searchParam.active_status=t),clearable:"",placeholder:l(e)("statusPlaceholder"),class:"input-item"},{default:i(()=>[(p(!0),E(O,null,K(k.value,(t,v)=>(p(),g(S,{key:v,label:t,value:v},null,8,["label","value"]))),128))]),_:1},8,["modelValue","placeholder"])]),_:1},8,["label"]),n(f,null,{default:i(()=>[n(d,{type:"primary",onClick:o[2]||(o[2]=t=>u())},{default:i(()=>[c(r(l(e)("search")),1)]),_:1}),n(d,{onClick:o[3]||(o[3]=t=>w(y.value))},{default:i(()=>[c(r(l(e)("reset")),1)]),_:1})]),_:1})]),_:1},8,["model"])]),_:1}),_("div",ue,[W((p(),g(N,{data:a.data,size:"large"},{empty:i(()=>[_("span",null,r(a.loading?"":l(e)("emptyData")),1)]),default:i(()=>[n(m,{prop:"active_name",label:l(e)("name"),"min-width":"130"},null,8,["label"]),n(m,{prop:"active_desc",label:l(e)("title"),"min-width":"130"},null,8,["label"]),n(m,{prop:"active_status_name",label:l(e)("status"),"min-width":"130"},null,8,["label"]),n(m,{prop:"active_order_money",label:l(e)("paymentAmount"),"min-width":"130",align:"right"},null,8,["label"]),n(m,{prop:"active_order_num",label:l(e)("orderCount"),"min-width":"130"},null,8,["label"]),n(m,{prop:"active_member_num",label:l(e)("memberCount"),"min-width":"130"},null,8,["label"]),n(m,{label:l(e)("discountTime"),"min-width":"150"},{default:i(({row:t})=>[_("div",null,[c(r(t.start_time),1),de,c("至"+r(t.end_time),1)])]),_:1},8,["label"]),n(m,{label:l(e)("operation"),fixed:"right",align:"right","min-width":"160"},{default:i(({row:t})=>[t.active_status=="not_active"||t.active_status=="active"?(p(),g(d,{key:0,type:"primary",link:"",onClick:v=>F(t.active_id)},{default:i(()=>[c(r(l(e)("edit")),1)]),_:2},1032,["onClick"])):b("",!0),n(d,{type:"primary",link:"",onClick:v=>T(t.active_id)},{default:i(()=>[c(r(l(e)("detail")),1)]),_:2},1032,["onClick"]),t.active_status=="active"?(p(),g(d,{key:1,type:"primary",link:"",onClick:v=>V(t.active_id)},{default:i(()=>[c(r(l(e)("close")),1)]),_:2},1032,["onClick"])):b("",!0),t.active_status!="active"?(p(),g(d,{key:2,type:"primary",link:"",onClick:v=>L(t.active_id)},{default:i(()=>[c(r(l(e)("delete")),1)]),_:2},1032,["onClick"])):b("",!0)]),_:1},8,["label"])]),_:1},8,["data"])),[[U,a.loading]]),_("div",pe,[n(R,{"current-page":a.page,"onUpdate:current-page":o[4]||(o[4]=t=>a.page=t),"page-size":a.limit,"onUpdate:page-size":o[5]||(o[5]=t=>a.limit=t),layout:"total, sizes, prev, pager, next, jumper",total:a.total,onSizeChange:o[6]||(o[6]=t=>u()),onCurrentChange:u},null,8,["current-page","page-size","total"])])])]),_:1})])}}});export{Se as default};
