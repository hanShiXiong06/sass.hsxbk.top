import{d as F,x as V,f as $,n as R,r as S,h as v,c as j,e as o,w as i,a as s,u as a,t as p,q as t,i as d,R as D,s as L,a5 as M,E as U,K as q,L as I,M as K,a7 as W,ac as Y,ad as A,W as G,Y as H}from"./index-2a89d409.js";/* empty css                   *//* empty css                      *//* empty css                 *//* empty css               *//* empty css                  *//* empty css                  *//* empty css                     *//* empty css                  *//* empty css                 *//* empty css                    */import"./el-tooltip-4ed993c7.js";/* empty css                        *//* empty css                *//* empty css                */import"./el-form-item-4ed993c7.js";/* empty css                  */import{w as J,x as O}from"./delivery-1d7618ff.js";const Q={class:"main-container"},X={class:"flex justify-between items-center"},Z={class:"detail-head !m-0"},ee=s("span",{class:"iconfont iconxiangzuojiantou !text-xs"},null,-1),te={class:"ml-[1px]"},ae=s("span",{class:"adorn"},"|",-1),le={class:"right"},oe={class:"mt-[10px]"},ne={class:"mt-[16px] flex justify-end"},Te=F({__name:"template",setup(ie){const b=V(),u=$(),x=b.meta.title,e=R({page:1,limit:10,total:0,loading:!0,data:[],searchParam:{template_name:""}}),g=S(),m=(r=1)=>{e.loading=!0,e.page=r,J({page:e.page,limit:e.limit,...e.searchParam}).then(l=>{e.loading=!1,e.data=l.data.data,e.total=l.data.total}).catch(()=>{e.loading=!1})};m();const y=()=>{u.push({path:"/shop/order/shipping/template_edit"})},C=r=>{u.push({path:"/shop/order/shipping/template_edit",query:{id:r.template_id}})},k=r=>{M.confirm(t("templateDeleteTips"),t("warning"),{confirmButtonText:t("confirm"),cancelButtonText:t("cancel"),type:"warning"}).then(()=>{O(r).then(()=>{m()}).catch(()=>{})})},w=r=>{r&&(r.resetFields(),m())};return(r,l)=>{const c=U,T=q,f=I,E=K,h=W,_=Y,P=A,B=G,N=H;return v(),j("div",Q,[o(h,{class:"box-card !border-none",shadow:"never"},{default:i(()=>[s("div",X,[s("div",Z,[s("div",{class:"left",onClick:l[0]||(l[0]=n=>a(u).push("/shop/order/delivery"))},[ee,s("span",te,p(a(t)("returnToPreviousPage")),1)]),ae,s("span",le,p(a(x)),1)]),o(c,{type:"primary",onClick:y},{default:i(()=>[d(p(a(t)("addTemplate")),1)]),_:1})]),o(h,{class:"box-card !border-none my-[10px] table-search-wrap",shadow:"never"},{default:i(()=>[o(E,{inline:!0,model:e.searchParam,ref_key:"searchFormRef",ref:g},{default:i(()=>[o(f,{label:a(t)("templateName"),prop:"template_name"},{default:i(()=>[o(T,{modelValue:e.searchParam.template_name,"onUpdate:modelValue":l[1]||(l[1]=n=>e.searchParam.template_name=n),modelModifiers:{trim:!0},placeholder:a(t)("templateNamePlaceholder")},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),o(f,null,{default:i(()=>[o(c,{type:"primary",onClick:l[2]||(l[2]=n=>m())},{default:i(()=>[d(p(a(t)("search")),1)]),_:1}),o(c,{onClick:l[3]||(l[3]=n=>w(g.value))},{default:i(()=>[d(p(a(t)("reset")),1)]),_:1})]),_:1})]),_:1},8,["model"])]),_:1}),s("div",oe,[D((v(),L(P,{data:e.data,size:"large"},{empty:i(()=>[s("span",null,p(e.loading?"":a(t)("emptyData")),1)]),default:i(()=>[o(_,{prop:"template_name",label:a(t)("templateName"),"min-width":"120"},null,8,["label"]),o(_,{prop:"fee_type_name",label:a(t)("feeTypeName"),"min-width":"120"},null,8,["label"]),o(_,{label:a(t)("freeShipping"),"min-width":"120",align:"center"},{default:i(({row:n})=>[d(p(n.is_free_shipping?a(t)("open"):a(t)("close")),1)]),_:1},8,["label"]),o(_,{prop:"create_time",label:a(t)("createTime"),"min-width":"120"},null,8,["label"]),o(_,{label:a(t)("operation"),fixed:"right","min-width":"120",align:"right"},{default:i(({row:n})=>[o(c,{type:"primary",link:"",onClick:z=>C(n)},{default:i(()=>[d(p(a(t)("edit")),1)]),_:2},1032,["onClick"]),o(c,{type:"primary",link:"",onClick:z=>k(n.template_id)},{default:i(()=>[d(p(a(t)("delete")),1)]),_:2},1032,["onClick"])]),_:1},8,["label"])]),_:1},8,["data"])),[[N,e.loading]]),s("div",ne,[o(B,{"current-page":e.page,"onUpdate:current-page":l[4]||(l[4]=n=>e.page=n),"page-size":e.limit,"onUpdate:page-size":l[5]||(l[5]=n=>e.limit=n),layout:"total, sizes, prev, pager, next, jumper",total:e.total,onSizeChange:l[6]||(l[6]=n=>m()),onCurrentChange:m},null,8,["current-page","page-size","total"])])])]),_:1})])}}});export{Te as default};
