import{d as j,f as q,x as M,n as I,r as x,h as p,c as E,e as l,w as i,a as u,t as r,u as n,i as _,q as e,F as O,T as K,s as g,R as W,B as b,a5 as w,E as Y,K as G,L as H,ab as J,aC as Q,M as X,a7 as Z,ac as ee,ad as te,W as ae,Y as le}from"./index-a3bdc7eb.js";/* empty css                   *//* empty css                      *//* empty css                 *//* empty css               *//* empty css                  *//* empty css                  *//* empty css                     *//* empty css                  *//* empty css                 *//* empty css                    */import"./el-tooltip-4ed993c7.js";/* empty css                        *//* empty css                *//* empty css                */import"./el-form-item-4ed993c7.js";/* empty css                  */import{t as ne,u as ie,v as oe,w as se}from"./marketing-17dac742.js";const re={class:"main-container"},ce={class:"flex justify-between items-center"},ue={class:"text-page-title"},me={class:"mt-[16px] flex justify-end"},Ae=j({__name:"list",setup(de){const f=q(),D=M().meta.title,a=I({page:1,limit:10,total:0,loading:!1,data:[],searchParam:{active_name:"",active_status:""}}),y=x(),m=(s=1)=>{a.loading=!0,a.page=s,ne({page:a.page,limit:a.limit,...a.searchParam}).then(o=>{a.loading=!1,a.data=o.data.data,a.total=o.data.total}).catch(()=>{a.loading=!1})};m();const B=s=>{s&&(s.resetFields(),m())},k=x({});(()=>{ie().then(s=>{k.value=s.data})})();const P=()=>{f.push("/shop/marketing/discount/add")},T=s=>{f.push({path:"/shop/marketing/discount/detail",query:{id:s}})},F=s=>{f.push({path:"/shop/marketing/discount/edit",query:{id:s}})},V=s=>{w.confirm(e("closeTips"),e("warning"),{confirmButtonText:e("confirm"),cancelButtonText:e("cancel"),type:"warning"}).then(()=>{oe(s).then(()=>{m()}).catch(()=>{})})},L=s=>{w.confirm(e("deleteTips"),e("warning"),{confirmButtonText:e("confirm"),cancelButtonText:e("cancel"),type:"warning"}).then(()=>{se(s).then(()=>{m()}).catch(()=>{})})};return(s,o)=>{const d=Y,A=G,h=H,S=J,$=Q,z=X,C=Z,c=ee,N=te,R=ae,U=le;return p(),E("div",re,[l(C,{class:"box-card !border-none",shadow:"never"},{default:i(()=>[u("div",ce,[u("span",ue,r(n(D)),1),l(d,{type:"primary",onClick:P},{default:i(()=>[_(r(n(e)("addDiscount")),1)]),_:1})]),l(C,{class:"box-card !border-none my-[10px] table-search-wrap",shadow:"never"},{default:i(()=>[l(z,{inline:!0,model:a.searchParam,ref_key:"searchFormRef",ref:y},{default:i(()=>[l(h,{label:n(e)("name"),prop:"active_name"},{default:i(()=>[l(A,{modelValue:a.searchParam.active_name,"onUpdate:modelValue":o[0]||(o[0]=t=>a.searchParam.active_name=t),modelModifiers:{trim:!0},placeholder:n(e)("namePlaceholder")},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),l(h,{label:n(e)("status"),prop:"active_status"},{default:i(()=>[l($,{modelValue:a.searchParam.active_status,"onUpdate:modelValue":o[1]||(o[1]=t=>a.searchParam.active_status=t),clearable:"",placeholder:n(e)("statusPlaceholder"),class:"input-item"},{default:i(()=>[(p(!0),E(O,null,K(k.value,(t,v)=>(p(),g(S,{key:v,label:t,value:v},null,8,["label","value"]))),128))]),_:1},8,["modelValue","placeholder"])]),_:1},8,["label"]),l(h,null,{default:i(()=>[l(d,{type:"primary",onClick:o[2]||(o[2]=t=>m())},{default:i(()=>[_(r(n(e)("search")),1)]),_:1}),l(d,{onClick:o[3]||(o[3]=t=>B(y.value))},{default:i(()=>[_(r(n(e)("reset")),1)]),_:1})]),_:1})]),_:1},8,["model"])]),_:1}),u("div",null,[W((p(),g(N,{data:a.data,size:"large"},{empty:i(()=>[u("span",null,r(a.loading?"":n(e)("emptyData")),1)]),default:i(()=>[l(c,{prop:"active_name",label:n(e)("name"),"min-width":"130"},null,8,["label"]),l(c,{prop:"active_desc",label:n(e)("title"),"min-width":"130"},null,8,["label"]),l(c,{prop:"active_status_name",label:n(e)("status"),"min-width":"130"},null,8,["label"]),l(c,{prop:"active_order_money",label:n(e)("paymentAmount"),"min-width":"130"},null,8,["label"]),l(c,{prop:"active_order_num",label:n(e)("orderCount"),"min-width":"130"},null,8,["label"]),l(c,{prop:"active_member_num",label:n(e)("memberCount"),"min-width":"130"},null,8,["label"]),l(c,{label:n(e)("discountTime"),"min-width":"150"},{default:i(({row:t})=>[u("div",null,[u("p",null,"开始："+r(t.start_time),1),u("p",null,"结束："+r(t.end_time),1)])]),_:1},8,["label"]),l(c,{label:n(e)("operation"),fixed:"right",align:"right","min-width":"160"},{default:i(({row:t})=>[t.active_status=="not_active"||t.active_status=="active"?(p(),g(d,{key:0,type:"primary",link:"",onClick:v=>F(t.active_id)},{default:i(()=>[_(r(n(e)("edit")),1)]),_:2},1032,["onClick"])):b("",!0),l(d,{type:"primary",link:"",onClick:v=>T(t.active_id)},{default:i(()=>[_(r(n(e)("detail")),1)]),_:2},1032,["onClick"]),t.active_status=="active"?(p(),g(d,{key:1,type:"primary",link:"",onClick:v=>V(t.active_id)},{default:i(()=>[_(r(n(e)("close")),1)]),_:2},1032,["onClick"])):b("",!0),t.active_status!="active"?(p(),g(d,{key:2,type:"primary",link:"",onClick:v=>L(t.active_id)},{default:i(()=>[_(r(n(e)("delete")),1)]),_:2},1032,["onClick"])):b("",!0)]),_:1},8,["label"])]),_:1},8,["data"])),[[U,a.loading]]),u("div",me,[l(R,{"current-page":a.page,"onUpdate:current-page":o[4]||(o[4]=t=>a.page=t),"page-size":a.limit,"onUpdate:page-size":o[5]||(o[5]=t=>a.limit=t),layout:"total, sizes, prev, pager, next, jumper",total:a.total,onSizeChange:o[6]||(o[6]=t=>m()),onCurrentChange:m},null,8,["current-page","page-size","total"])])])]),_:1})])}}});export{Ae as default};