import{d as B,x as D,f as N,n as I,r as g,h as p,c as v,e as l,w as n,u as i,a as o,P as L,s as x,t as m,q as s,A as j,i as c,cX as M,a0 as U,I as V,aa as $,ac as q,T as A,U as R}from"./index-17984968.js";/* empty css                   *//* empty css                      *//* empty css                 *//* empty css               *//* empty css                  *//* empty css                  *//* empty css                     *//* empty css                  *//* empty css                 *//* empty css                    */import"./el-tooltip-4ed993c7.js";/* empty css                        *//* empty css                 *//* empty css                        *//* empty css                *//* empty css                   *//* empty css                       */import{_ as y}from"./default_headimg-a897263d.js";import{e as H,f as X}from"./sale-3ef63383.js";const F={class:"main-container"},G={class:"flex items-center cursor-pointer"},J={class:"min-w-[50px] h-[50px] flex items-center justify-center"},K=o("div",{class:"image-slot"},[o("img",{class:"w-[50px] h-[50px]",src:y})],-1),O={key:1,class:"w-[50px] h-[50px]",src:y,fit:"contain"},Q={class:"ml-2"},W=["title"],Y={class:"text-primary text-[12px]"},Z={class:"mt-[16px] flex justify-end"},ye=B({__name:"member_list",setup(ee){const b=D();N();const w=b.meta.title,t=I({page:1,limit:10,total:0,loading:!0,data:[],searchParam:{create_time:""}}),k=g({}),_=g(!1);g();const P=d=>{_.value=!0,H(d).then(a=>{k.value=a.data,_.value=!1}).catch(()=>{_.value=!1})};let f=Number(b.query.id);P(f);const u=(d=1)=>{t.loading=!0,t.page=d,X({page:t.page,limit:t.limit,period_id:f,...t.searchParam}).then(a=>{t.loading=!1,t.data=a.data.data,t.total=a.data.total}).catch(()=>{t.loading=!1})};return u(),(d,a)=>{const T=M,h=U,E=V,r=$,S=q,C=A,z=R;return p(),v("div",F,[l(h,{class:"card !border-none",shadow:"never"},{default:n(()=>[l(T,{content:i(w),icon:d.ArrowLeft,onBack:a[0]||(a[0]=e=>d.$router.back())},null,8,["content","icon"])]),_:1}),l(h,{class:"card mt-[15px] !border-none",shadow:"never"},{default:n(()=>[o("div",null,[L((p(),x(S,{data:t.data,size:"large"},{empty:n(()=>[o("span",null,m(t.loading?"":i(s)("emptyData")),1)]),default:n(()=>[l(r,{label:i(s)("memberInfo"),"min-width":"160"},{default:n(({row:e})=>[o("div",G,[o("div",J,[e.member&&e.member.headimg?(p(),x(E,{key:0,class:"w-[50px] h-[50px]",src:i(j)(e.member.headimg),fit:"contain"},{error:n(()=>[K]),_:2},1032,["src"])):(p(),v("img",O))]),o("div",Q,[o("span",{title:e.member&&e.member.nickname,class:"multi-hidden"},m(e.member&&e.member.nickname||e.member&&e.member.username),9,W),o("span",Y,m(e.member&&e.member.mobile),1)])])]),_:1},8,["label"]),l(r,{prop:"sale_start_time",label:i(s)("saleStartTime"),"min-width":"130"},null,8,["label"]),l(r,{prop:"sale_end_time",label:i(s)("saleEndTime"),"min-width":"130"},null,8,["label"]),l(r,{prop:"order_money",label:i(s)("orderMoney"),"min-width":"120",align:"right"},null,8,["label"]),l(r,{prop:"reward_money",label:i(s)("rewardMoney"),"min-width":"120",align:"right"},null,8,["label"]),l(r,{label:i(s)("settlementStatus"),"min-width":"120",align:"center"},{default:n(({row:e})=>[c(m(e.is_settlement>0?"已结算":"待结算"),1)]),_:1},8,["label"]),l(r,{label:i(s)("sendStatus"),"min-width":"120",align:"center"},{default:n(({row:e})=>[c(m(e.is_send>0?"已发放":"待发放"),1)]),_:1},8,["label"]),l(r,{label:i(s)("settlementTime"),"min-width":"150",align:"center"},{default:n(({row:e})=>[c(m(e.settlement_time||"--"),1)]),_:1},8,["label"]),l(r,{label:i(s)("sendTime"),"min-width":"150",align:"center"},{default:n(({row:e})=>[c(m(e.send_time||"--"),1)]),_:1},8,["label"])]),_:1},8,["data"])),[[z,t.loading]]),o("div",Z,[l(C,{"current-page":t.page,"onUpdate:current-page":a[1]||(a[1]=e=>t.page=e),"page-size":t.limit,"onUpdate:page-size":a[2]||(a[2]=e=>t.limit=e),layout:"total, sizes, prev, pager, next, jumper",total:t.total,onSizeChange:a[3]||(a[3]=e=>u()),onCurrentChange:u},null,8,["current-page","page-size","total"])])])]),_:1})])}}});export{ye as default};