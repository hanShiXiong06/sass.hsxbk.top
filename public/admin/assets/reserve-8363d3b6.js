import{d as le,f as ne,x as se,r as _,n as re,h as r,c as d,e as t,w as l,a as s,t as i,u as c,q as p,F as b,T as y,$ as z,B as F,i as k,R as q,s as W,K as ie,L as de,E as ce,M as pe,a7 as ue,bg as me,bh as _e,bi as fe,ac as ve,ad as he,W as xe,X as ge,Y as be,p as ye,g as ke}from"./index-6f32d09b.js";/* empty css                   *//* empty css                  *//* empty css                   *//* empty css                      *//* empty css                 *//* empty css               *//* empty css                  *//* empty css                  *//* empty css                     *//* empty css                  *//* empty css                 *//* empty css                    */import"./el-tooltip-4ed993c7.js";/* empty css                        *//* empty css                  *//* empty css                    */import"./el-dropdown-item-4ed993c7.js";/* empty css                *//* empty css                */import"./el-form-item-4ed993c7.js";import{b as we,e as Ce,c as Se}from"./order-1c7ed437.js";import{g as Ve}from"./technician-58e7674a.js";import{_ as Ee}from"./_plugin-vue_export-helper-c27b6911.js";const Fe=w=>(ye("data-v-d6f72c91"),w=w(),ke(),w),Ne={class:"main-container"},Te={class:"flex items-center"},Be={class:"text-page-title"},$e={class:"flex items-center mt-5"},je={class:"text-[14px] leading-[16px]"},ze={key:1,class:"text-[14px] leading-[16px]"},De={key:0,class:"time-data mt-3"},Re={class:"flex justify-center items-center text-lg"},Le={class:"mx-6"},Oe={class:"time-data-head"},Ue={class:"time-data-body"},Me={key:0,class:"text-[14px]"},Pe={class:"flex my-[5px]"},qe={class:"mb-[5px]"},We={class:"mb-[5px] multi-hidden"},Ge=Fe(()=>s("span",{class:"item-btn iconfont icongengduo"},null,-1)),Ke={class:"mt-[16px] flex justify-end"},Xe=le({__name:"reserve",setup(w){const G=ne(),K=se().meta.title,D=_(),R=_([]),N=_({wait_pay:"#ccc",dispatch:"#8558fa",wait_service:"#1475fa",in_service:"#fa5b14",finish:"#10c610",close:"#fa1414"});(async()=>{const o=await(await we()).data;R.value=o})();const f=_({orderName:"",technician_search_text:"",member_search_text:""}),C=_(!1),v=_([]),T=_(0),h=(o=0)=>{C.value=!0;const e={length:o,...f.value};Ce(e).then(x=>{v.value=x.data,C.value=!1}).catch(()=>{C.value=!1})};h();const L=o=>{o=="add"?T.value++:o=="sub"&&T.value--,h(T.value)},n=re({page:1,limit:10,total:0,id:0,loading:!1,data:[]}),B=(o=1)=>{n.loading=!0,n.page=o,Ve({page:n.page,limit:n.limit,id:n.id}).then(e=>{n.loading=!1,n.total=e.data.total,n.data=e.data.data}).catch(()=>{n.loading=!1})},$=_({order_id:"",technician_id:""}),S=_(!1),X=o=>{n.id=o.item[0].goods_id,B(),S.value=!0,$.value.order_id=o.order_id},Y=o=>{$.value.technician_id=o.id,Se($.value).then(e=>{S.value=!1,h()})},A=o=>{const e=G.resolve({path:"/o2o/order/detail",query:{order_id:o.order_id}});window.open(e.href)},H=o=>{o&&(o.resetFields(),h())};return(o,e)=>{const x=ie,V=de,j=ce,J=pe,O=ue,U=me,Q=_e,Z=fe,E=ve,I=he,ee=xe,te=ge,M=be;return r(),d("div",Ne,[t(O,{class:"box-card !border-none",shadow:"never"},{default:l(()=>{var m;return[s("div",Te,[s("span",Be,i(c(K)),1)]),s("div",$e,[s("span",je,i(c(p)("orderStatus")),1),(r(!0),d(b,null,y(R.value,(a,g)=>(r(),d("div",{key:g,class:"flex items-center"},[a.status!="close"?(r(),d("span",{key:0,class:"w-[16px] h-[16px] ml-[30px] mr-[10px]",style:z({backgroundColor:N.value[a.status]})},null,4)):F("",!0),a.status!="close"?(r(),d("span",ze,i(a.name),1)):F("",!0)]))),128))]),t(O,{class:"box-card !border-none my-[10px] table-search-wrap",shadow:"never"},{default:l(()=>[t(J,{inline:!0,model:f.value,ref_key:"searchFormRef",ref:D},{default:l(()=>[t(V,{label:c(p)("orderName"),prop:"orderName"},{default:l(()=>[t(x,{placeholder:c(p)("orderNamePlaceholder"),modelValue:f.value.orderName,"onUpdate:modelValue":e[0]||(e[0]=a=>f.value.orderName=a),modelModifiers:{trim:!0},class:"w-[200px]"},null,8,["placeholder","modelValue"])]),_:1},8,["label"]),t(V,{label:c(p)("technicianSearchText"),prop:"technician_search_text"},{default:l(()=>[t(x,{modelValue:f.value.technician_search_text,"onUpdate:modelValue":e[1]||(e[1]=a=>f.value.technician_search_text=a),modelModifiers:{trim:!0},placeholder:c(p)("technicianSearchTextPlaceholder")},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),t(V,{label:c(p)("memberSearchText"),prop:"member_search_text"},{default:l(()=>[t(x,{modelValue:f.value.member_search_text,"onUpdate:modelValue":e[2]||(e[2]=a=>f.value.member_search_text=a),modelModifiers:{trim:!0},placeholder:c(p)("memberSearchTextPlaceholder"),class:"!w-[210px]"},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),t(V,null,{default:l(()=>[t(j,{type:"primary",onClick:e[3]||(e[3]=a=>h())},{default:l(()=>[k(i(c(p)("search")),1)]),_:1}),t(j,{onClick:e[4]||(e[4]=a=>H(D.value))},{default:l(()=>[k(i(c(p)("reset")),1)]),_:1})]),_:1})]),_:1},8,["model"])]),_:1}),(m=v.value)!=null&&m.length?(r(),d("div",De,[s("div",Re,[s("span",{class:"iconfont iconxiangzuojiantou font-bold cursor-pointer",onClick:e[5]||(e[5]=a=>L("sub"))}),s("div",Le,i(v.value[0].date)+" - "+i(v.value[v.value.length-1].date),1),s("span",{class:"iconfont iconxiangyoujiantou font-bold cursor-pointer",onClick:e[6]||(e[6]=a=>L("add"))})]),q((r(),d("div",null,[s("div",Oe,[(r(!0),d(b,null,y(v.value,(a,g)=>(r(),d("div",{key:g},[s("span",null,i(a.week)+" "+i(a.date),1)]))),128))]),s("div",Ue,[(r(!0),d(b,null,y(v.value,(a,g)=>(r(),d("div",{class:"flex flex-col common-scrollbar",key:g},[(r(!0),d(b,null,y(a.data,(u,ae)=>(r(),d("div",{class:"project-item",style:z({borderColor:N.value[u.order_status]}),key:ae},[u.member?(r(),d("p",Me,i(u.member.nickname),1)):F("",!0),s("p",Pe,[s("span",{class:"text-[#fff] px-[6px] py-[2px] text-[12px] rounded-[2px]",style:z({backgroundColor:N.value[u.order_status_info.status]})},i(u.reserve_service_time),5)]),s("p",qe,i(u.technician_info?u.technician_info.name:""),1),s("p",We,i(u.item[0].item_name),1),t(Z,null,{dropdown:l(()=>[t(Q,null,{default:l(()=>[t(U,{onClick:P=>A(u)},{default:l(()=>[k(i(c(p)("detail")),1)]),_:2},1032,["onClick"]),(r(!0),d(b,null,y(u.order_status_info.action,(P,oe)=>(r(),W(U,{onClick:He=>X(u),key:oe},{default:l(()=>[k(i(P.name),1)]),_:2},1032,["onClick"]))),128))]),_:2},1024)]),default:l(()=>[Ge]),_:2},1024)],4))),128))]))),128))])])),[[M,C.value]])])):F("",!0)]}),_:1}),t(te,{modelValue:S.value,"onUpdate:modelValue":e[9]||(e[9]=m=>S.value=m),title:"请选择技师",width:"600px"},{default:l(()=>[q((r(),W(I,{data:n.data,class:"technician-table"},{empty:l(()=>[s("span",null,i(n.loading?"":c(p)("emptyData")),1)]),default:l(()=>[t(E,{prop:"name",label:"姓名",width:"180"}),t(E,{prop:"position_name",label:"职位"}),t(E,{prop:"mobile",label:"手机号",width:"180"}),t(E,{label:c(p)("operation"),fixed:"right","min-width":"50",align:"right"},{default:l(({row:m})=>[t(j,{type:"primary",link:"",onClick:a=>Y(m)},{default:l(()=>[k("确定")]),_:2},1032,["onClick"])]),_:1},8,["label"])]),_:1},8,["data"])),[[M,n.loading]]),s("div",Ke,[t(ee,{"current-page":n.page,"onUpdate:current-page":e[7]||(e[7]=m=>n.page=m),"page-size":n.limit,"onUpdate:page-size":e[8]||(e[8]=m=>n.limit=m),layout:"total, sizes, prev, pager, next, jumper",total:n.total,onSizeChange:B,onCurrentChange:B},null,8,["current-page","page-size","total"])])]),_:1},8,["modelValue"])])}}});const bt=Ee(Xe,[["__scopeId","data-v-d6f72c91"]]);export{bt as default};
