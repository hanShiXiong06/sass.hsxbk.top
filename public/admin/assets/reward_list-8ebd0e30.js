import{d as $,x as D,f as N,r as h,n as T,h as _,c as k,e as a,w as l,u as n,aP as A,q as s,i as p,t as i,R as M,s as y,a as d,A as S,a3 as U,aQ as j,a7 as q,K as H,L as J,E as K,M as Q,J as W,ac as Y,ad as G,W as O,Y as X}from"./index-5a756a51.js";/* empty css                   *//* empty css                      *//* empty css                 *//* empty css               *//* empty css                  *//* empty css                  *//* empty css                     *//* empty css                  *//* empty css                 *//* empty css                    */import"./el-tooltip-4ed993c7.js";/* empty css                        *//* empty css                 *//* empty css                        *//* empty css                *//* empty css                  */import"./el-form-item-4ed993c7.js";/* empty css                *//* empty css                   *//* empty css                       */import{_ as Z}from"./member_head-d9fd7b2c.js";import{i as ee}from"./task-038d0a33.js";const te={class:"main-container"},ae={class:"flex items-center"},oe={key:1,class:"w-[50px] h-[50px] mr-[10px] rounded-full",src:Z,alt:""},le={class:"flex flex-col"},ne={class:"text-[14px]"},se={class:"text-[14px] text-[#666]"},re={class:"mt-[16px] flex justify-end"},Ve=$({__name:"reward_list",setup(ie){const b=D(),w=N(),C=b.meta.title,x=h();h(!1);const E=h(b.query.id)||0,P=r=>{r&&(t.searchParam.search="",r.resetFields(),u())},t=T({page:1,limit:10,total:0,loading:!1,data:[],searchParam:{search:""}}),u=(r=1)=>{t.loading=!0,t.page=r;const o=U(t.searchParam);ee({page:t.page,limit:t.limit,task_id:E.value,...o}).then(c=>{t.data=c.data.data,t.total=c.data.total,t.loading=!1})};u();const F=r=>{w.push("/shop_fenxiao/task/reward_detail?id="+r.id)};return(r,o)=>{const c=j,f=q,z=H,v=J,g=K,B=Q,I=W,m=Y,L=G,R=O,V=X;return _(),k("div",te,[a(f,{class:"card !border-none",shadow:"never"},{default:l(()=>[a(c,{content:n(C),icon:n(A),onBack:o[0]||(o[0]=e=>r.$router.back())},null,8,["content","icon"])]),_:1}),a(f,{class:"card mt-[15px] !border-none",shadow:"never"},{default:l(()=>[a(f,{class:"card !border-none my-[10px] table-search-wrap",shadow:"never"},{default:l(()=>[a(B,{inline:!0,model:t.searchParam,ref_key:"searchFormRef",ref:x},{default:l(()=>[a(v,{label:n(s)("memberInfo")},{default:l(()=>[a(z,{modelValue:t.searchParam.search,"onUpdate:modelValue":o[1]||(o[1]=e=>t.searchParam.search=e),placeholder:n(s)("memberInfoPlaceholder"),maxlength:"60"},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),a(v,null,{default:l(()=>[a(g,{type:"primary",onClick:o[2]||(o[2]=e=>u())},{default:l(()=>[p(i(n(s)("search")),1)]),_:1}),a(g,{onClick:o[3]||(o[3]=e=>P(x.value))},{default:l(()=>[p(i(n(s)("reset")),1)]),_:1})]),_:1})]),_:1},8,["model"])]),_:1}),M((_(),y(L,{data:t.data,size:"large",ref:"tableRef"},{empty:l(()=>[d("span",null,i(t.loading?"":n(s)("emptyData")),1)]),default:l(()=>[a(m,{prop:"name",label:n(s)("taskInfo"),"min-width":"150"},{default:l(({row:e})=>[d("div",ae,[e.member.headimg?(_(),y(I,{key:0,class:"w-[50px] h-[50px] mr-[10px]",src:n(S)(e.member.headimg),fit:"contain"},null,8,["src"])):(_(),k("img",oe)),d("div",le,[d("span",ne,i(e.member.nickname||e.member.username),1),d("span",se,i(e.mobile||"--"),1)])])]),_:1},8,["label"]),a(m,{prop:"total_reward_money",label:n(s)("totalMoney"),"min-width":"100"},null,8,["label"]),a(m,{label:n(s)("schedule"),"min-width":"100"},{default:l(({row:e})=>[p(i(e.progress)+"% ",1)]),_:1},8,["label"]),a(m,{prop:"status_name",label:n(s)("status"),"min-width":"100"},{default:l(({row:e})=>[p(i(e.task.status_name),1)]),_:1},8,["label"]),a(m,{prop:"create_time",label:n(s)("accomplishStatus"),"min-width":"100"},{default:l(({row:e})=>[p(i(e.complete_num>=1?"已完成":"未完成"),1)]),_:1},8,["label"]),a(m,{label:n(s)("operation"),fixed:"right",align:"right","min-width":"120"},{default:l(({row:e})=>[a(g,{type:"primary",link:"",onClick:me=>F(e)},{default:l(()=>[p(i(n(s)("detail")),1)]),_:2},1032,["onClick"])]),_:1},8,["label"])]),_:1},8,["data"])),[[V,t.loading]]),d("div",re,[a(R,{"current-page":t.page,"onUpdate:current-page":o[4]||(o[4]=e=>t.page=e),"page-size":t.limit,"onUpdate:page-size":o[5]||(o[5]=e=>t.limit=e),layout:"total, sizes, prev, pager, next, jumper",total:t.total,onSizeChange:o[6]||(o[6]=e=>r.getAgentListFn()),onCurrentChange:r.getAgentListFn},null,8,["current-page","page-size","total","onCurrentChange"])])]),_:1})])}}});export{Ve as default};
