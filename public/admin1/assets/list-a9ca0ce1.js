import{d as q,x as J,f as K,r as y,n as Q,h as d,c as x,e as n,w as s,a as p,t as r,u as l,i as c,q as t,F as G,Q as W,s as k,P as X,A as Z,B as b,bs as ee,_ as F,E as te,J as ae,K as le,ak as se,aI as ne,bN as ie,L as oe,a0 as re,aa as me,I as ce,ac as de,T as pe,U as ue}from"./index-17984968.js";/* empty css                   *//* empty css                      *//* empty css                 *//* empty css               *//* empty css                  *//* empty css                  *//* empty css                     *//* empty css                  *//* empty css                 *//* empty css                    */import"./el-tooltip-4ed993c7.js";/* empty css                 *//* empty css                        *//* empty css                        *//* empty css                *//* empty css                *//* empty css                       *//* empty css                  */import"./el-form-item-4ed993c7.js";import{_ as V}from"./goods_default-665e448a.js";import{c as _e,d as fe,f as he,t as ke}from"./task-3bace6e5.js";const ge={class:"main-container"},ve={class:"flex justify-between items-center"},be={class:"text-page-title"},ye={class:"flex items-center cursor-pointer"},xe={class:"min-w-[50px] h-[50px] flex items-center justify-center"},Ce=p("div",{class:"image-slot"},[p("img",{class:"w-[50px] h-[50px]",src:V,fit:"contain"})],-1),Ee={key:1,class:"w-[50px] h-[50px]",src:V,fit:"contain"},Te={class:"ml-2"},Pe={class:"mt-[16px] flex justify-end"},We=q({__name:"list",setup(Fe){const D=J(),g=K(),w=D.meta.title,C=y(),u=y(!1),B=o=>{o&&(a.searchParam.name="",a.searchParam.status="",a.searchParam.create_time=[],o.resetFields(),_())},a=Q({page:1,limit:10,total:0,loading:!1,data:[],searchParam:{name:"",status:"",create_time:[]}}),_=(o=1)=>{a.loading=!0,a.page=o;const i=ee(a.searchParam);_e({page:a.page,limit:a.limit,...i}).then(m=>{a.data=m.data.data,a.total=m.data.total,a.loading=!1})};_();let E=y({});(()=>{fe().then(o=>{E.value=o.data})})();const N=()=>{g.push("/shop_fenxiao/task/task_edit")},S=o=>{g.push("/shop_fenxiao/task/task_detail?id="+o.id)},$=o=>{g.push("/shop_fenxiao/task/task_edit?id="+o.id)},z=o=>{g.push("/shop_fenxiao/task/reward?id="+o.id)},U=o=>{F.confirm(t("taskDeleteTips"),t("warning"),{confirmButtonText:t("confirm"),cancelButtonText:t("cancel"),type:"warning"}).then(()=>{u.value||(u.value=!0,he({id:o.id}).then(()=>{_(),u.value=!1}).catch(()=>{u.value=!1}))})},j=o=>{F.confirm(t("taskFinishTips"),t("warning"),{confirmButtonText:t("confirm"),cancelButtonText:t("cancel"),type:"warning"}).then(()=>{u.value||(u.value=!0,ke({id:o.id}).then(()=>{_(),u.value=!1}).catch(()=>{u.value=!1}))})};return(o,i)=>{const m=te,I=ae,v=le,T=se,L=ne,R=ie,Y=oe,P=re,f=me,M=ce,A=de,H=pe,O=ue;return d(),x("div",ge,[n(P,{class:"card !border-none",shadow:"never"},{default:s(()=>[p("div",ve,[p("span",be,r(l(w)),1),n(m,{type:"primary",onClick:N},{default:s(()=>[c(r(l(t)("addTask")),1)]),_:1})]),n(P,{class:"card !border-none my-[10px] table-search-wrap",shadow:"never"},{default:s(()=>[n(Y,{inline:!0,model:a.searchParam,ref_key:"searchFormRef",ref:C},{default:s(()=>[n(v,{label:l(t)("taskName")},{default:s(()=>[n(I,{modelValue:a.searchParam.name,"onUpdate:modelValue":i[0]||(i[0]=e=>a.searchParam.name=e),placeholder:l(t)("taskNamePlaceholder"),maxlength:"60"},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),n(v,{label:l(t)("status")},{default:s(()=>[n(L,{modelValue:a.searchParam.status,"onUpdate:modelValue":i[1]||(i[1]=e=>a.searchParam.status=e),placeholder:l(t)("statusPlaceholder")},{default:s(()=>[n(T,{label:l(t)("all"),value:""},null,8,["label"]),(d(!0),x(G,null,W(l(E),(e,h)=>(d(),k(T,{key:h,label:e,value:h},null,8,["label","value"]))),128))]),_:1},8,["modelValue","placeholder"])]),_:1},8,["label"]),n(v,{label:l(t)("createTime")},{default:s(()=>[n(R,{modelValue:a.searchParam.create_time,"onUpdate:modelValue":i[2]||(i[2]=e=>a.searchParam.create_time=e),type:"datetimerange","value-format":"YYYY-MM-DD HH:mm:ss","start-placeholder":l(t)("startDate"),"end-placeholder":l(t)("endDate")},null,8,["modelValue","start-placeholder","end-placeholder"])]),_:1},8,["label"]),n(v,null,{default:s(()=>[n(m,{type:"primary",onClick:i[3]||(i[3]=e=>_())},{default:s(()=>[c(r(l(t)("search")),1)]),_:1}),n(m,{onClick:i[4]||(i[4]=e=>B(C.value))},{default:s(()=>[c(r(l(t)("reset")),1)]),_:1})]),_:1})]),_:1},8,["model"])]),_:1}),X((d(),k(A,{data:a.data,size:"large",ref:"tableRef"},{empty:s(()=>[p("span",null,r(a.loading?"":l(t)("emptyData")),1)]),default:s(()=>[n(f,{type:"selection",width:"55"}),n(f,{label:l(t)("taskName"),"min-width":"150"},{default:s(({row:e})=>[p("div",ye,[p("div",xe,[e.cover_thumb_mid?(d(),k(M,{key:0,class:"w-[50px] h-[50px]",src:l(Z)(e.cover_thumb_mid),fit:"contain"},{error:s(()=>[Ce]),_:2},1032,["src"])):(d(),x("img",Ee))]),p("div",Te,[p("span",null,r(e.name),1)])])]),_:1},8,["label"]),n(f,{label:l(t)("level"),"min-width":"100"},{default:s(({row:e})=>[c(r(e.level_type==1&&"全部等级"||e.level_type==2&&Object.values(e.level_data).toString()),1)]),_:1},8,["label"]),n(f,{prop:"status_name",label:l(t)("state"),"min-width":"100"},null,8,["label"]),n(f,{prop:"create_time",label:l(t)("createTime"),"min-width":"200"},{default:s(({row:e})=>[c(r(e.create_time||"--"),1)]),_:1},8,["label"]),n(f,{label:l(t)("taskTime"),"min-width":"200"},{default:s(({row:e})=>[c(r(e.start_time||"--")+" 至 "+r(e.time_type==1?e.end_time:"长期有效"),1)]),_:1},8,["label"]),n(f,{label:l(t)("operation"),fixed:"right",align:"right","min-width":"120"},{default:s(({row:e})=>[e.status==1?(d(),k(m,{key:0,type:"primary",link:"",onClick:h=>$(e)},{default:s(()=>[c(r(l(t)("edit")),1)]),_:2},1032,["onClick"])):b("",!0),e.status!=1?(d(),k(m,{key:1,type:"primary",link:"",onClick:h=>z(e)},{default:s(()=>[c(r(l(t)("awardDetail")),1)]),_:2},1032,["onClick"])):b("",!0),n(m,{type:"primary",link:"",onClick:h=>S(e)},{default:s(()=>[c(r(l(t)("detail")),1)]),_:2},1032,["onClick"]),e.status!=3?(d(),k(m,{key:2,type:"primary",link:"",onClick:h=>j(e)},{default:s(()=>[c(r(l(t)("finish")),1)]),_:2},1032,["onClick"])):b("",!0),e.status==3?(d(),k(m,{key:3,type:"primary",link:"",onClick:h=>U(e)},{default:s(()=>[c(r(l(t)("delete")),1)]),_:2},1032,["onClick"])):b("",!0)]),_:1},8,["label"])]),_:1},8,["data"])),[[O,a.loading]]),p("div",Pe,[n(H,{"current-page":a.page,"onUpdate:current-page":i[5]||(i[5]=e=>a.page=e),"page-size":a.limit,"onUpdate:page-size":i[6]||(i[6]=e=>a.limit=e),layout:"total, sizes, prev, pager, next, jumper",total:a.total,onSizeChange:i[7]||(i[7]=e=>_()),onCurrentChange:_},null,8,["current-page","page-size","total"])])]),_:1})])}}});export{We as default};