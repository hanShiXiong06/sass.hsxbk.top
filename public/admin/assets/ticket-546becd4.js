import{d as J,x as Q,n as X,r as _,f as ee,h as k,c as te,e as a,w as i,a as c,u as l,t as r,q as t,i as m,R as ae,s as E,B as L,a5 as oe,U as M,E as le,K as ne,L as se,bO as ie,M as re,a7 as ce,av as de,ac as me,ad as pe,W as ue,Y as _e}from"./index-5a756a51.js";/* empty css                   *//* empty css                      *//* empty css                 *//* empty css               *//* empty css                  *//* empty css                  *//* empty css                     *//* empty css                  *//* empty css                 *//* empty css                    */import"./el-tooltip-4ed993c7.js";/* empty css                        *//* empty css                *//* empty css                *//* empty css                       *//* empty css                  */import"./el-form-item-4ed993c7.js";import{Y as ge,Z as fe,_ as ve}from"./tourism-df1c9cc5.js";import he from"./goods-member-price-popup-cb86d2b5.js";import be from"./goods-day-member-price-popup-7f55373a.js";import{A as ke}from"./member-56384cd5.js";/* empty css                  *//* empty css                   *//* empty css                       *//* empty css                 */import"./_plugin-vue_export-helper-c27b6911.js";const ye={class:"main-container"},Pe={class:"flex justify-between items-center"},Ce={class:"detail-head"},xe=c("span",{class:"iconfont iconxiangzuojiantou !text-xs"},null,-1),Ee={class:"ml-[1px]"},Te=c("span",{class:"adorn"},"|",-1),we={class:"right"},Se={class:"mt-[10px]"},Ve={class:"mb-[10px] flex items-center"},$e={class:"mt-[16px] flex justify-end"},st=J({__name:"ticket",setup(De){const T=Q(),R=T.meta.title,y=parseInt(T.query.id),n=X({page:1,limit:10,total:0,loading:!0,data:[],searchParam:{goods_name:"",create_time:""}}),w=_(),p=(o=1)=>{n.loading=!0,n.page=o,ge({scenic_id:y,page:n.page,limit:n.limit,...n.searchParam}).then(e=>{n.loading=!1,n.data=e.data.data,n.total=e.data.total}).catch(()=>{n.loading=!1})};p();const P=ee(),z=()=>{P.push("/tourism/product/scenic/edit_ticket?scenic_id="+y)},B=o=>{P.push("/tourism/product/scenic/edit_ticket?scenic_id="+y+"&id="+o.goods_id)},F=o=>{oe.confirm(t("tourismScenicDeleteTips"),t("warning"),{confirmButtonText:t("confirm"),cancelButtonText:t("cancel"),type:"warning"}).then(()=>{fe(o).then(()=>{p()}).catch(()=>{})})},N=o=>{o&&(o.resetFields(),p())},S=(o,e)=>{ve({status:o,goods_id:e}).then(()=>{p()})},f=_([]);(()=>{ke().then(o=>{f.value=o.data?o.data:[]})})();const C=_(null),A=o=>{C.value.show(o,f.value)},I=()=>{if(u.value.length==0){M({type:"warning",message:`${t("batchEmptySelectedGoodsTips")}`});return}const o=[];u.value.forEach(e=>{o.push(e.goods_id)}),C.value.show({goods_id:o.toString(),goods_type:"scenic"},f.value)},V=_(null),U=()=>{if(u.value.length==0){M({type:"warning",message:`${t("batchEmptySelectedGoodsTips")}`});return}const o=[];u.value.forEach(e=>{o.push(e.goods_id)}),V.value.show({goods_id:o.toString()},f.value)},v=_(),h=_(!1),Y=o=>{h.value=!1,$.value.toggleAllSelection()},$=_(),u=_([]),j=o=>{u.value=o,v.value=!1,u.value.length>0&&u.value.length<n.data.length?h.value=!0:h.value=!1,u.value.length==n.data.length&&(v.value=!0)};return(o,e)=>{const d=le,q=ne,x=se,G=ie,H=re,D=ce,K=de,g=me,O=pe,W=ue,Z=_e;return k(),te("div",ye,[a(D,{class:"box-card !border-none",shadow:"never"},{default:i(()=>[c("div",Pe,[c("div",Ce,[c("div",{class:"left",onClick:e[0]||(e[0]=s=>l(P).push({path:"/tourism/product/scenic/scenic"}))},[xe,c("span",Ee,r(l(t)("returnToPreviousPage")),1),Te,c("span",we,r(l(R)),1)])]),a(d,{type:"primary",class:"w-[100px]",onClick:z},{default:i(()=>[m(r(l(t)("addTicket")),1)]),_:1})]),a(D,{class:"box-card !border-none my-[10px] table-search-wrap",shadow:"never"},{default:i(()=>[a(H,{inline:!0,model:n.searchParam,ref_key:"searchFormRef",ref:w},{default:i(()=>[a(x,{label:l(t)("ticketName"),prop:"goods_name"},{default:i(()=>[a(q,{modelValue:n.searchParam.goods_name,"onUpdate:modelValue":e[1]||(e[1]=s=>n.searchParam.goods_name=s),placeholder:l(t)("scenicNamePlaceholder")},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),a(x,{label:l(t)("createTime"),prop:"create_time"},{default:i(()=>[a(G,{modelValue:n.searchParam.create_time,"onUpdate:modelValue":e[2]||(e[2]=s=>n.searchParam.create_time=s),type:"datetimerange","value-format":"YYYY-MM-DD HH:mm:ss","start-placeholder":l(t)("startDate"),"end-placeholder":l(t)("endDate")},null,8,["modelValue","start-placeholder","end-placeholder"])]),_:1},8,["label"]),a(x,null,{default:i(()=>[a(d,{type:"primary",onClick:e[3]||(e[3]=s=>p())},{default:i(()=>[m(r(l(t)("search")),1)]),_:1}),a(d,{onClick:e[4]||(e[4]=s=>N(w.value))},{default:i(()=>[m(r(l(t)("reset")),1)]),_:1})]),_:1})]),_:1},8,["model"])]),_:1}),c("div",Se,[c("div",Ve,[a(K,{modelValue:v.value,"onUpdate:modelValue":e[5]||(e[5]=s=>v.value=s),size:"large",class:"px-[14px]",onChange:Y,indeterminate:h.value},null,8,["modelValue","indeterminate"]),a(d,{onClick:e[6]||(e[6]=s=>I()),size:"small"},{default:i(()=>[m(r(l(t)("memberPrice")),1)]),_:1}),a(d,{onClick:e[7]||(e[7]=s=>U()),size:"small"},{default:i(()=>[m(r(l(t)("dayMemberPrice")),1)]),_:1})]),ae((k(),E(O,{data:n.data,size:"large",ref_key:"goodsListTableRef",ref:$,onSelectionChange:j},{empty:i(()=>[c("span",null,r(n.loading?"":l(t)("emptyData")),1)]),default:i(()=>[a(g,{type:"selection",width:"55"}),a(g,{prop:"goods_name",label:l(t)("ticketName"),"min-width":"120"},null,8,["label"]),a(g,{prop:"price",label:l(t)("ticketPrice"),"min-width":"120"},null,8,["label"]),a(g,{prop:"stock",label:l(t)("ticketStock"),"min-width":"120"},null,8,["label"]),a(g,{prop:"status_name",label:l(t)("status"),"min-width":"120"},null,8,["label"]),a(g,{prop:"create_time",label:l(t)("createTime"),"min-width":"170"},null,8,["label"]),a(g,{label:l(t)("operation"),fixed:"right","min-width":"150",align:"right"},{default:i(({row:s})=>[s.status==1?(k(),E(d,{key:0,type:"primary",link:"",onClick:b=>S(0,s.goods_id)},{default:i(()=>[m(r(l(t)("down")),1)]),_:2},1032,["onClick"])):L("",!0),s.status==0?(k(),E(d,{key:1,type:"primary",link:"",onClick:b=>S(1,s.goods_id)},{default:i(()=>[m(r(l(t)("up")),1)]),_:2},1032,["onClick"])):L("",!0),a(d,{type:"primary",link:"",onClick:b=>A(s)},{default:i(()=>[m(r(l(t)("memberPrice")),1)]),_:2},1032,["onClick"]),a(d,{type:"primary",link:"",onClick:b=>B(s)},{default:i(()=>[m(r(l(t)("edit")),1)]),_:2},1032,["onClick"]),a(d,{type:"primary",link:"",onClick:b=>F(s.goods_id)},{default:i(()=>[m(r(l(t)("delete")),1)]),_:2},1032,["onClick"])]),_:1},8,["label"])]),_:1},8,["data"])),[[Z,n.loading]]),c("div",$e,[a(W,{"current-page":n.page,"onUpdate:current-page":e[8]||(e[8]=s=>n.page=s),"page-size":n.limit,"onUpdate:page-size":e[9]||(e[9]=s=>n.limit=s),layout:"total, sizes, prev, pager, next, jumper",total:n.total,onSizeChange:e[10]||(e[10]=s=>p()),onCurrentChange:p},null,8,["current-page","page-size","total"])])])]),_:1}),a(he,{ref_key:"memberPricePopupRef",ref:C,onLoad:p},null,512),a(be,{ref_key:"memberDayPricePopupRef",ref:V,onLoad:p},null,512)])}}});export{st as default};
