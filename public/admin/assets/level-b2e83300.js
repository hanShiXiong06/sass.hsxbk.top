import{d as D,x as R,f as $,n as j,r as U,h as m,c as p,e as t,w as o,a as c,t as s,u as r,i as f,q as a,R as q,s as I,F as g,T as x,B as k,a5 as K,E as S,K as G,L as J,M as W,a7 as Y,ac as A,ad as H,W as O,Y as Q}from"./index-5a756a51.js";/* empty css                   *//* empty css                      *//* empty css                 *//* empty css               *//* empty css                  *//* empty css                  *//* empty css                     *//* empty css                  *//* empty css                 *//* empty css                    */import"./el-tooltip-4ed993c7.js";/* empty css                        *//* empty css                *//* empty css                */import"./el-form-item-4ed993c7.js";/* empty css                  */import{J as X,K as Z}from"./member-56384cd5.js";const ee={class:"main-container"},te={class:"flex justify-between items-center"},ae={class:"text-page-title"},le={class:"mt-[10px]"},ne={key:0},oe={key:0},re={class:"mt-[16px] flex justify-end"},Le=D({__name:"level",setup(ie){const C=R(),b=$(),E=C.meta.title,e=j({page:1,limit:10,total:0,loading:!0,data:[],searchParam:{level_name:""}}),h=U(),L=i=>{i&&(i.resetFields(),u())},u=(i=1)=>{e.loading=!0,e.page=i,X({page:e.page,limit:e.limit,...e.searchParam}).then(l=>{e.loading=!1,e.data=l.data.data,e.total=l.data.total}).catch(()=>{e.loading=!1})};u();const B=()=>{b.push({path:"/member/level_edit"})},N=i=>{b.push({path:"/member/level_edit",query:{id:i.level_id}})},F=i=>{K.confirm(a("memberLevelDeleteTips"),a("warning"),{confirmButtonText:a("confirm"),cancelButtonText:a("cancel"),type:"warning"}).then(()=>{Z(i).then(()=>{u()}).catch(()=>{})})};return(i,l)=>{const v=S,P=G,y=J,T=W,w=Y,_=A,M=H,V=O,z=Q;return m(),p("div",ee,[t(w,{class:"box-card !border-none",shadow:"never"},{default:o(()=>[c("div",te,[c("span",ae,s(r(E)),1),t(v,{type:"primary",onClick:B},{default:o(()=>[f(s(r(a)("addMemberLevel")),1)]),_:1})]),t(w,{class:"box-card !border-none my-[10px] table-search-wrap",shadow:"never"},{default:o(()=>[t(T,{inline:!0,model:e.searchParam,ref_key:"searchFormRef",ref:h},{default:o(()=>[t(y,{label:r(a)("levelName"),prop:"level_name"},{default:o(()=>[t(P,{modelValue:e.searchParam.level_name,"onUpdate:modelValue":l[0]||(l[0]=n=>e.searchParam.level_name=n),modelModifiers:{trim:!0},placeholder:r(a)("levelNamePlaceholder")},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),t(y,null,{default:o(()=>[t(v,{type:"primary",onClick:l[1]||(l[1]=n=>u())},{default:o(()=>[f(s(r(a)("search")),1)]),_:1}),t(v,{onClick:l[2]||(l[2]=n=>L(h.value))},{default:o(()=>[f(s(r(a)("reset")),1)]),_:1})]),_:1})]),_:1},8,["model"])]),_:1}),c("div",le,[q((m(),I(M,{data:e.data,size:"large"},{empty:o(()=>[c("span",null,s(e.loading?"":r(a)("emptyData")),1)]),default:o(()=>[t(_,{prop:"level_name",label:r(a)("levelName"),"min-width":"120"},null,8,["label"]),t(_,{prop:"growth",label:r(a)("growth"),"min-width":"120"},null,8,["label"]),t(_,{label:r(a)("levelBenefits"),"min-width":"120","show-overflow-tooltip":!0},{default:o(({row:n})=>[c("div",null,[(m(!0),p(g,null,x(n.level_benefits,d=>(m(),p(g,null,[d.content?(m(),p("div",ne,s(d.content),1)):k("",!0)],64))),256))])]),_:1},8,["label"]),t(_,{label:r(a)("levelGifts"),"min-width":"120"},{default:o(({row:n})=>[c("div",null,[(m(!0),p(g,null,x(n.level_gifts,d=>(m(),p(g,null,[d.content?(m(),p("div",oe,s(d.content),1)):k("",!0)],64))),256))])]),_:1},8,["label"]),t(_,{prop:"member_num",label:r(a)("memberNumber"),"min-width":"120"},null,8,["label"]),t(_,{label:r(a)("operation"),align:"right",fixed:"right",width:"130"},{default:o(({row:n})=>[t(v,{type:"primary",link:"",onClick:d=>N(n)},{default:o(()=>[f(s(r(a)("edit")),1)]),_:2},1032,["onClick"]),t(v,{type:"primary",link:"",onClick:d=>F(n.level_id)},{default:o(()=>[f(s(r(a)("delete")),1)]),_:2},1032,["onClick"])]),_:1},8,["label"])]),_:1},8,["data"])),[[z,e.loading]]),c("div",re,[t(V,{"current-page":e.page,"onUpdate:current-page":l[3]||(l[3]=n=>e.page=n),"page-size":e.limit,"onUpdate:page-size":l[4]||(l[4]=n=>e.limit=n),layout:"total, sizes, prev, pager, next, jumper",total:e.total,onSizeChange:l[5]||(l[5]=n=>u()),onCurrentChange:u},null,8,["current-page","page-size","total"])])])]),_:1})])}}});export{Le as default};
