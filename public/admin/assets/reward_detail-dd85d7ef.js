import{d as B,x as T,f as C,r as _,n as g,R as P,h as m,c as f,e as s,w as r,u as a,aP as M,s as h,a as o,t as l,q as t,A as V,i as w,B as I,a3 as q,aQ as A,a7 as S,L as $,J as z,M as H,ac as J,ad as Q,Y}from"./index-37fee5a0.js";/* empty css                   *//* empty css                 *//* empty css                    */import"./el-tooltip-4ed993c7.js";/* empty css                  *//* empty css                     *//* empty css                        *//* empty css               *//* empty css                *//* empty css                 *//* empty css                        */import"./el-form-item-4ed993c7.js";/* empty css                *//* empty css                   *//* empty css                       */import{_ as j}from"./member_head-d9fd7b2c.js";import{h as G}from"./task-6ff918e0.js";import{h as K}from"./level-68fbee86.js";const O={class:"main-container"},U={class:"text text-[14px] leading-[25px]"},W={class:"flex items-center"},X={key:1,class:"w-[50px] h-[50px] mr-[10px] rounded-full",src:j,alt:""},Z={class:"flex flex-col"},ee={class:"text-[14px] leading-[1]"},ae={class:"text-[14px] leading-[1] mt-[5px] text-[#666]"},te={class:"flex items-center"},se=o("span",{class:"mx-[10px]"},"至",-1),le={key:0},oe={key:1},ne={class:"text mt-[20px] text-[14px] leading-[25px]"},Be=B({__name:"reward_detail",setup(re){const b=T();C();const v=b.meta.title;_(!1);const k=_(),e=g({...{id:"",name:"",time_type:"1",start_time:"",end_time:"",level_type:"1",level:["1"],level_data:[],times:"1",timesNum:"",rules:[{condition:{type:[]},reward:{commission:""}}],remark:"",task_member_reward:""}});e.id=_(b.query.id);const y=g({loading:!0,data:[]}),F=_([]);(()=>{K().then(d=>{F.value=d.data})})();const p=_(!0);return(()=>{p.value=!0,G({id:e.id}).then(d=>{let n=q(d.data);n&&(e.member=n.member,e.name=n.task.name,e.status_name=n.task.status_name,e.progress=n.progress,e.end_time=n.task.end_time,e.start_time=n.task.start_time,e.time_type=n.task.time_type,e.total_reward_money=n.total_reward_money,e.task_member_reward=n.task_member_reward),p.value=!1})})(),(d,n)=>{const D=A,x=S,i=$,E=z,L=H,c=J,N=Q,R=Y;return P((m(),f("div",O,[s(x,{class:"card !border-none",shadow:"never"},{default:r(()=>[s(D,{content:a(v),icon:a(M),onBack:n[0]||(n[0]=u=>d.$router.back())},null,8,["content","icon"])]),_:1}),p.value?I("",!0):(m(),h(x,{key:0,class:"card mt-[15px] !border-none",shadow:"never"},{default:r(()=>[o("div",U,l(a(t)("baseInfo")),1),s(L,{class:"page-form",model:e,"label-width":"120px",ref_key:"taskFormRef",ref:k},{default:r(()=>[s(i,{label:a(t)("taskNam"),prop:"name"},{default:r(()=>[o("div",null,l(e.name),1)]),_:1},8,["label"]),s(i,{label:a(t)("recipient"),prop:"name"},{default:r(()=>[o("div",W,[e.member.headimg?(m(),h(E,{key:0,class:"w-[50px] h-[50px] mr-[10px]",src:a(V)(e.member.headimg),fit:"contain"},null,8,["src"])):(m(),f("img",X)),o("div",Z,[o("span",ee,l(e.member.nickname||e.member.username),1),o("span",ae,l(e.mobile||"--"),1)])])]),_:1},8,["label"]),s(i,{label:a(t)("schedule"),prop:"name"},{default:r(()=>[o("div",null,l(e.progress)+"%",1)]),_:1},8,["label"]),s(i,{label:a(t)("status"),prop:"name"},{default:r(()=>[o("div",null,l(e.status_name),1)]),_:1},8,["label"]),s(i,{label:a(t)("totalMoney"),prop:"name"},{default:r(()=>[o("div",null,l(e.total_reward_money),1)]),_:1},8,["label"]),s(i,{label:a(t)("taskTime")},{default:r(()=>[o("div",te,[o("span",null,l(e.start_time),1),se,e.time_type==2?(m(),f("span",le,"长期有效")):(m(),f("span",oe,l(e.end_time),1))])]),_:1},8,["label"])]),_:1},8,["model"]),o("div",ne,l(a(t)("rewardDetail")),1),s(N,{data:e.task_member_reward,size:"large",ref:"tableRef"},{empty:r(()=>[o("span",null,l(y.loading?"":a(t)("emptyData")),1)]),default:r(()=>[s(c,{prop:"name",label:a(t)("awardExplain"),"min-width":"150"},{default:r(({row:u})=>[w(l(u.step)+l(a(t)("stepAward")),1)]),_:1},8,["label"]),s(c,{prop:"reward_money",label:a(t)("awardMoney"),"min-width":"100"},null,8,["label"]),s(c,{prop:"reward_money",label:a(t)("awardStatus"),"min-width":"100"},{default:r(({row:u})=>[w(l(u.is_send>0?a(t)("issued"):a(t)("unissued")),1)]),_:1},8,["label"]),s(c,{prop:"complete_time",label:a(t)("awardTimeRelease"),"min-width":"100",align:"right"},null,8,["label"])]),_:1},8,["data"])]),_:1}))])),[[R,p.value]])}}});export{Be as default};
