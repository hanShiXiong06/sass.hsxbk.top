import{d as R,x as T,f as C,r as _,n as g,P,u as t,h as m,c as f,e as s,w as r,cW as I,s as h,a as o,t as l,q as a,A as S,i as w,B as V,cX as M,a0 as q,K as A,I as J,L as O,aa as $,ac as z,U as H}from"./index-17984968.js";/* empty css                   *//* empty css                 *//* empty css                    *//* empty css               */import"./el-tooltip-4ed993c7.js";/* empty css                  *//* empty css                     *//* empty css                        *//* empty css                *//* empty css                 *//* empty css                        */import"./el-form-item-4ed993c7.js";/* empty css                *//* empty css                   *//* empty css                       */import{_ as K}from"./default_headimg-a897263d.js";import{h as U}from"./task-3bace6e5.js";import{h as W}from"./level-113119c0.js";const X={class:"main-container"},j={class:"text text-[14px] leading-[25px]"},G={class:"flex items-center"},Q={key:1,class:"w-[50px] h-[50px] mr-[10px]",src:K,alt:""},Y={class:"flex flex-col"},Z={class:"text-[14px] leading-[1]"},ee={class:"text-[14px] leading-[1] mt-[5px] text-[#666]"},te={class:"flex items-center"},ae=o("span",{class:"mx-[10px]"},"至",-1),se={key:0},le={key:1},oe={class:"text mt-[20px] text-[14px] leading-[25px]"},Be=R({__name:"reward_detail",setup(ne){const b=T();C();const k=b.meta.title;_(!1);let v=_();const e=g({...{id:"",name:"",time_type:"1",start_time:"",end_time:"",level_type:"1",level:["1"],level_data:[],times:"1",timesNum:"",rules:[{condition:{type:[]},reward:{commission:""}}],remark:"",task_member_reward:""}});e.id=_(b.query.id);const y=g({loading:!0,data:[]});let F=_([]);(()=>{W().then(d=>{F.value=d.data})})();let p=_(!0);return(()=>{p.value=!0,U({id:e.id}).then(d=>{let n=JSON.parse(JSON.stringify(d.data));n&&(e.member=n.member,e.name=n.task.name,e.status_name=n.task.status_name,e.progress=n.progress,e.end_time=n.task.end_time,e.start_time=n.task.start_time,e.time_type=n.task.time_type,e.total_reward_money=n.total_reward_money,e.task_member_reward=n.task_member_reward),p.value=!1})})(),(d,n)=>{const E=M,x=q,i=A,L=J,N=O,c=$,D=z,B=H;return P((m(),f("div",X,[s(x,{class:"card !border-none",shadow:"never"},{default:r(()=>[s(E,{content:t(k),icon:t(I),onBack:n[0]||(n[0]=u=>d.$router.back())},null,8,["content","icon"])]),_:1}),t(p)?V("",!0):(m(),h(x,{key:0,class:"card mt-[15px] !border-none",shadow:"never"},{default:r(()=>[o("div",j,l(t(a)("baseInfo")),1),s(N,{class:"page-form",model:e,"label-width":"120px",ref_key:"taskFormRef",ref:v},{default:r(()=>[s(i,{label:t(a)("taskNam"),prop:"name"},{default:r(()=>[o("div",null,l(e.name),1)]),_:1},8,["label"]),s(i,{label:t(a)("recipient"),prop:"name"},{default:r(()=>[o("div",G,[e.member.headimg?(m(),h(L,{key:0,class:"w-[50px] h-[50px] mr-[10px]",src:t(S)(e.member.headimg),fit:"contain"},null,8,["src"])):(m(),f("img",Q)),o("div",Y,[o("span",Z,l(e.member.nickname||e.member.username),1),o("span",ee,l(e.mobile||"--"),1)])])]),_:1},8,["label"]),s(i,{label:t(a)("schedule"),prop:"name"},{default:r(()=>[o("div",null,l(e.progress)+"%",1)]),_:1},8,["label"]),s(i,{label:t(a)("status"),prop:"name"},{default:r(()=>[o("div",null,l(e.status_name),1)]),_:1},8,["label"]),s(i,{label:t(a)("totalMoney"),prop:"name"},{default:r(()=>[o("div",null,l(e.total_reward_money),1)]),_:1},8,["label"]),s(i,{label:t(a)("taskTime")},{default:r(()=>[o("div",te,[o("span",null,l(e.start_time),1),ae,e.time_type==2?(m(),f("span",se,"长期有效")):(m(),f("span",le,l(e.end_time),1))])]),_:1},8,["label"])]),_:1},8,["model"]),o("div",oe,l(t(a)("rewardDetail")),1),s(D,{data:e.task_member_reward,size:"large",ref:"tableRef"},{empty:r(()=>[o("span",null,l(y.loading?"":t(a)("emptyData")),1)]),default:r(()=>[s(c,{prop:"name",label:t(a)("awardExplain"),"min-width":"150"},{default:r(({row:u})=>[w(l(u.step)+l(t(a)("stepAward")),1)]),_:1},8,["label"]),s(c,{prop:"reward_money",label:t(a)("awardMoney"),"min-width":"100"},null,8,["label"]),s(c,{prop:"reward_money",label:t(a)("awardStatus"),"min-width":"100"},{default:r(({row:u})=>[w(l(u.is_send>0?t(a)("issued"):t(a)("unissued")),1)]),_:1},8,["label"]),s(c,{prop:"complete_time",label:t(a)("awardTimeRelease"),"min-width":"100",align:"right"},null,8,["label"])]),_:1},8,["data"])]),_:1}))])),[[B,t(p)]])}}});export{Be as default};