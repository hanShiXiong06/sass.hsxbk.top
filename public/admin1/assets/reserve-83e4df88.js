import{d as le,f as ne,x as se,r as _,n as re,h as r,c as d,e as t,w as o,a as s,t as i,u as c,q as p,F as b,Q as y,aX as D,B as F,i as k,P as q,s as G,J as ie,K as de,E as ce,L as pe,a0 as ue,be as me,bf as _e,bg as fe,aa as ve,ac as he,T as xe,a1 as ge,U as be,p as ye,g as ke}from"./index-17984968.js";/* empty css                   *//* empty css                  *//* empty css                   *//* empty css                      *//* empty css                 *//* empty css               *//* empty css                  *//* empty css                  *//* empty css                     *//* empty css                  *//* empty css                 *//* empty css                    */import"./el-tooltip-4ed993c7.js";/* empty css                        *//* empty css                  *//* empty css                         *//* empty css                *//* empty css                */import"./el-form-item-4ed993c7.js";import{b as we,e as Ce,c as Se}from"./order-9cf50b74.js";import{g as Ve}from"./technician-4cd99a3c.js";import{_ as Ee}from"./_plugin-vue_export-helper-c27b6911.js";const Fe=w=>(ye("data-v-ee5e03fa"),w=w(),ke(),w),Ne={class:"main-container"},Te={class:"flex items-center"},Be={class:"text-page-title"},je={class:"flex items-center mt-5"},ze={class:"text-[14px] leading-[16px]"},De={key:1,class:"text-[14px] leading-[16px]"},Ue={key:0,class:"time-data mt-3"},$e={class:"flex justify-center items-center text-lg"},Le={class:"mx-6"},Oe={class:"time-data-head"},Pe={class:"time-data-body"},Re={key:0,class:"text-[14px]"},Me={class:"flex my-[5px]"},qe={class:"mb-[5px]"},Ge={class:"mb-[5px] multi-hidden"},Je=Fe(()=>s("span",{class:"item-btn iconfont icongengduo"},null,-1)),Ke={class:"mt-[16px] flex justify-end"},Qe=le({__name:"reserve",setup(w){const J=ne(),K=se().meta.title,U=_(),$=_([]),N=_({wait_pay:"#ccc",dispatch:"#8558fa",wait_service:"#1475fa",in_service:"#fa5b14",finish:"#10c610",close:"#fa1414"});(async(n=0)=>{const e=await(await we()).data;$.value=e})();const f=_({orderName:"",technician_search_text:"",member_search_text:""}),C=_(!1),v=_([]),T=_(0),h=(n=0)=>{C.value=!0;const e={length:n,...f.value};Ce(e).then(x=>{v.value=x.data,C.value=!1}).catch(()=>{C.value=!1})};h();const L=n=>{n=="add"?T.value++:n=="sub"&&T.value--,h(T.value)},l=re({page:1,limit:10,total:0,id:0,loading:!1,data:[]}),B=(n=1)=>{l.loading=!0,l.page=n,Ve({page:l.page,limit:l.limit,id:l.id}).then(e=>{l.loading=!1,l.total=e.data.total,l.data=e.data.data}).catch(()=>{l.loading=!1})},j=_({order_id:"",technician_id:""}),S=_(!1),Q=n=>{l.id=n.item[0].goods_id,B(),S.value=!0,j.value.order_id=n.order_id},W=n=>{j.value.technician_id=n.id,Se(j.value).then(e=>{S.value=!1,h()})},X=n=>{const e=J.resolve({path:"/o2o/order/detail",query:{order_id:n.order_id}});window.open(e.href)},A=n=>{n&&(n.resetFields(),h())};return(n,e)=>{const x=ie,V=de,z=ce,H=pe,O=ue,P=me,Y=_e,Z=fe,E=ve,I=he,ee=xe,te=ge,R=be;return r(),d("div",Ne,[t(O,{class:"box-card !border-none",shadow:"never"},{default:o(()=>{var m;return[s("div",Te,[s("span",Be,i(c(K)),1)]),s("div",je,[s("span",ze,i(c(p)("orderStatus")),1),(r(!0),d(b,null,y($.value,(a,g)=>(r(),d("div",{key:g,class:"flex items-center"},[a.status!="close"?(r(),d("span",{key:0,class:"w-[16px] h-[16px] ml-[30px] mr-[10px]",style:D({backgroundColor:N.value[a.status]})},null,4)):F("",!0),a.status!="close"?(r(),d("span",De,i(a.name),1)):F("",!0)]))),128))]),t(O,{class:"box-card !border-none my-[10px] table-search-wrap",shadow:"never"},{default:o(()=>[t(H,{inline:!0,model:f.value,ref_key:"searchFormRef",ref:U},{default:o(()=>[t(V,{label:c(p)("orderName"),prop:"orderName"},{default:o(()=>[t(x,{placeholder:c(p)("orderNnamePlaceholder"),modelValue:f.value.orderName,"onUpdate:modelValue":e[0]||(e[0]=a=>f.value.orderName=a),modelModifiers:{trim:!0},class:"w-[200px]"},null,8,["placeholder","modelValue"])]),_:1},8,["label"]),t(V,{label:c(p)("technicianSearchText"),prop:"technician_search_text"},{default:o(()=>[t(x,{modelValue:f.value.technician_search_text,"onUpdate:modelValue":e[1]||(e[1]=a=>f.value.technician_search_text=a),modelModifiers:{trim:!0},placeholder:c(p)("technicianSearchTextPlaceholder")},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),t(V,{label:c(p)("memberSearchText"),prop:"member_search_text"},{default:o(()=>[t(x,{modelValue:f.value.member_search_text,"onUpdate:modelValue":e[2]||(e[2]=a=>f.value.member_search_text=a),modelModifiers:{trim:!0},placeholder:c(p)("memberSearchTextPlaceholder"),class:"!w-[210px]"},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),t(V,null,{default:o(()=>[t(z,{type:"primary",onClick:e[3]||(e[3]=a=>h())},{default:o(()=>[k(i(c(p)("search")),1)]),_:1}),t(z,{onClick:e[4]||(e[4]=a=>A(U.value))},{default:o(()=>[k(i(c(p)("reset")),1)]),_:1})]),_:1})]),_:1},8,["model"])]),_:1}),(m=v.value)!=null&&m.length?(r(),d("div",Ue,[s("div",$e,[s("span",{class:"iconfont iconxiangzuojiantou font-bold cursor-pointer",onClick:e[5]||(e[5]=a=>L("sub"))}),s("div",Le,i(v.value[0].date)+" - "+i(v.value[v.value.length-1].date),1),s("span",{class:"iconfont iconxiangyoujiantou font-bold cursor-pointer",onClick:e[6]||(e[6]=a=>L("add"))})]),q((r(),d("div",null,[s("div",Oe,[(r(!0),d(b,null,y(v.value,(a,g)=>(r(),d("div",{key:g},[s("span",null,i(a.week)+" "+i(a.date),1)]))),128))]),s("div",Pe,[(r(!0),d(b,null,y(v.value,(a,g)=>(r(),d("div",{class:"flex flex-col common-scrollbar",key:g},[(r(!0),d(b,null,y(a.data,(u,ae)=>(r(),d("div",{class:"project-item",style:D({borderColor:N.value[u.order_status]}),key:ae},[u.member?(r(),d("p",Re,i(u.member.nickname),1)):F("",!0),s("p",Me,[s("span",{class:"text-[#fff] px-[6px] py-[2px] text-[12px] rounded-[2px]",style:D({backgroundColor:N.value[u.order_status_info.status]})},i(u.reserve_service_time),5)]),s("p",qe,i(u.technician_info?u.technician_info.name:""),1),s("p",Ge,i(u.item[0].item_name),1),t(Z,null,{dropdown:o(()=>[t(Y,null,{default:o(()=>[t(P,{onClick:M=>X(u)},{default:o(()=>[k(i(c(p)("detail")),1)]),_:2},1032,["onClick"]),(r(!0),d(b,null,y(u.order_status_info.action,(M,oe)=>(r(),G(P,{onClick:Ae=>Q(u),key:oe},{default:o(()=>[k(i(M.name),1)]),_:2},1032,["onClick"]))),128))]),_:2},1024)]),default:o(()=>[Je]),_:2},1024)],4))),128))]))),128))])])),[[R,C.value]])])):F("",!0)]}),_:1}),t(te,{modelValue:S.value,"onUpdate:modelValue":e[9]||(e[9]=m=>S.value=m),title:"请选择技师",width:"600px"},{default:o(()=>[q((r(),G(I,{data:l.data,class:"technician-table"},{empty:o(()=>[s("span",null,i(l.loading?"":c(p)("emptyData")),1)]),default:o(()=>[t(E,{prop:"name",label:"姓名",width:"180"}),t(E,{prop:"position_name",label:"职位"}),t(E,{prop:"mobile",label:"手机号",width:"180"}),t(E,{label:c(p)("operation"),fixed:"right","min-width":"50",align:"right"},{default:o(({row:m})=>[t(z,{type:"primary",link:"",onClick:a=>W(m)},{default:o(()=>[k("确定")]),_:2},1032,["onClick"])]),_:1},8,["label"])]),_:1},8,["data"])),[[R,l.loading]]),s("div",Ke,[t(ee,{"current-page":l.page,"onUpdate:current-page":e[7]||(e[7]=m=>l.page=m),"page-size":l.limit,"onUpdate:page-size":e[8]||(e[8]=m=>l.limit=m),layout:"total, sizes, prev, pager, next, jumper",total:l.total,onSizeChange:B,onCurrentChange:B},null,8,["current-page","page-size","total"])])]),_:1},8,["modelValue"])])}}});const gt=Ee(Qe,[["__scopeId","data-v-ee5e03fa"]]);export{gt as default};