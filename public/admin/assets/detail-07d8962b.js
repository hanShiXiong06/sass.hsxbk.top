import{d as O,x as B,f as E,r as p,n as R,R as C,h as i,c as l,e as _,w as r,u as t,aQ as P,q as o,a,t as s,s as y,A,B as d,F as I,T as M,a3 as S,cY as V,aR as q,a7 as Y,L as $,J as H,M as J,Y as Q}from"./index-99f00cf3.js";/* empty css                   *//* empty css                *//* empty css                 *//* empty css                        */import"./el-form-item-4ed993c7.js";/* empty css                *//* empty css                   *//* empty css                       */import{_ as h}from"./goods_default-247a7f2b.js";import{g as U}from"./task-dcca969a.js";import{h as j}from"./level-0d08fb21.js";const z={class:"main-container"},G=a("div",{class:"image-slot"},[a("img",{class:"w-[100px] h-[100px]",src:h,fit:"contain"})],-1),K={key:1,class:"w-[100px] h-[100px]",src:h,fit:"contain"},W={class:"flex items-center"},X=a("span",{class:"mx-[10px]"},"至",-1),Z={key:0},ee={key:1},te={key:0},se={key:1,class:"flex"},ae={class:"flex flex-col"},oe={key:0,class:"flex items-center mt-[2px]"},ne={class:"mr-[5px]"},ie={class:"text-[var(--el-color-primary)]"},le={class:"ml-[5px]"},re={key:1,class:"flex items-center mt-[2px]"},_e={class:"mr-[5px]"},me={class:"text-[var(--el-color-primary)]"},de={class:"ml-[5px]"},ce={key:2,class:"flex items-center mt-[2px]"},pe={class:"mr-[5px]"},ue={class:"text-[var(--el-color-primary)]"},xe={class:"ml-[5px]"},fe={class:"flex items-center"},ve={key:0},ye={key:1},he={class:"flex items-center"},ke={class:"mr-[5px]"},be={class:"text-[var(--el-color-primary)]"},ge={class:"ml-[5px]"},Fe={class:"w-[750px]"},Ve=O({__name:"detail",setup(we){const u=B();E();const k=u.meta.title;p(!1);const b=p(),e=R({...{id:"",name:"",time_type:"1",start_time:"",end_time:"",level_type:"1",level:["1"],level_data:[],times:"",rules:[{condition:{type:[]},reward:{commission:""}}],remark:"",type_name:"",type:""}});e.id=p(u.query.id);const g=p([]);(()=>{j().then(c=>{g.value=c.data})})();const x=p(!0),F=()=>{U({id:e.id}).then(c=>{let n=S(c.data);n&&(e.name=n.name,e.time_type=n.time_type,e.start_time=n.start_time,e.end_time=n.end_time,e.level_type=n.level_type,e.level=n.level,e.times=n.times.toString(),e.rules=n.rules,e.remark=n.remark,e.type_name=n.type_name,e.type=n.type,e.level_data=n.level_data,e.cover_thumb_mid=n.cover_thumb_mid,e.send_time_type=n.send_time_type,e.send_time=n.send_time_type==1?V(n.send_time):n.send_time),x.value=!1})};return e.id&&F(),(c,n)=>{const w=q,f=Y,m=$,T=H,L=J,N=Q;return C((i(),l("div",z,[_(f,{class:"card !border-none",shadow:"never"},{default:r(()=>[_(w,{content:t(k),icon:t(P),onBack:n[0]||(n[0]=v=>c.$router.back())},null,8,["content","icon"])]),_:1}),_(f,{class:"card mt-[15px] !border-none",shadow:"never"},{default:r(()=>[_(L,{class:"page-form",model:e,"label-width":"120px",ref_key:"taskFormRef",ref:b},{default:r(()=>[_(m,{label:t(o)("taskNam"),prop:"name"},{default:r(()=>[a("div",null,s(e.name),1)]),_:1},8,["label"]),_(m,{label:t(o)("cover")},{default:r(()=>[e.cover_thumb_mid?(i(),y(T,{key:0,class:"w-[100px] h-[100px]",src:t(A)(e.cover_thumb_mid)||"",fit:"contain"},{error:r(()=>[G]),_:1},8,["src"])):(i(),l("img",K))]),_:1},8,["label"]),_(m,{label:t(o)("taskTime")},{default:r(()=>[a("div",W,[a("span",null,s(e.start_time),1),X,e.time_type==2?(i(),l("span",Z,"长期有效")):(i(),l("span",ee,s(e.end_time),1))])]),_:1},8,["label"]),e.type===1?(i(),y(m,{key:0,label:t(o)("articipation")},{default:r(()=>[a("div",null,s(e.times!=0?e.times+t(o)("timesNext"):t(o)("timesUnlimited")),1)]),_:1},8,["label"])):d("",!0),_(m,{label:t(o)("level")},{default:r(()=>[e.level_type=="1"?(i(),l("div",te,s(t(o)("allLevel")),1)):d("",!0),e.level_type=="2"&&e.level_data?(i(),l("div",se,[(i(!0),l(I,null,M(e.level_data,(v,D)=>(i(),l("span",{key:D,class:"border-solid border-[1px] border-[var(--el-color-primary)] text-[var(--el-color-primary)] px-[5px] mr-[15px] h-[25px] leading-[25px] rounded text-[12px]"},s(v),1))),128))])):d("",!0)]),_:1},8,["label"]),_(m,{label:t(o)("taskIndex"),prop:"type"},{default:r(()=>[a("div",ae,[e.rules[0].condition.type.indexOf("order_num")>-1?(i(),l("div",oe,[a("span",ne,s(t(o)("conditionOrderNumTips1")),1),a("span",ie,s(e.rules[0].condition.order_num),1),a("span",le,s(t(o)("conditionOrderNumTips2")),1)])):d("",!0),e.rules[0].condition.type.indexOf("order_money")>-1?(i(),l("div",re,[a("span",_e,s(t(o)("conditionOrderMoneyTips1")),1),a("span",me,s(e.rules[0].condition.order_money),1),a("span",de,s(t(o)("conditionOrderMoneyTips2")),1)])):d("",!0),e.rules[0].condition.type.indexOf("fenxiao_num")>-1?(i(),l("div",ce,[a("span",pe,s(t(o)("conditionFenxiaoNumTips1")),1),a("span",ue,s(e.rules[0].condition.fenxiao_num),1),a("span",xe,s(t(o)("conditionFenxiaoNumTips2")),1)])):d("",!0)])]),_:1},8,["label"]),_(m,{label:t(o)("awardTime")},{default:r(()=>[a("div",fe,[e.send_time_type==1?(i(),l("span",ve,s(e.send_time),1)):d("",!0),e.send_time_type==2?(i(),l("span",ye,s(t(o)("taskAttainment"))+s(e.send_time)+s(t(o)("taskAttainment1")),1)):d("",!0)])]),_:1},8,["label"]),_(m,{label:t(o)("taskContent")},{default:r(()=>[a("div",he,[a("span",ke,s(t(o)("return")),1),a("span",be,s(e.rules[0].reward.commission),1),a("span",ge,s(t(o)("brokerage")),1)])]),_:1},8,["label"]),_(m,{label:t(o)("remark")},{default:r(()=>[a("div",Fe,s(e.remark),1)]),_:1},8,["label"])]),_:1},8,["model"])]),_:1})])),[[N,x.value]])}}});export{Ve as default};
