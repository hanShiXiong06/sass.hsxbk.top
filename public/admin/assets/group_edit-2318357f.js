import{d as H,r as f,x as J,f as K,aI as M,l as O,q as d,a2 as Q,R as B,h as s,c as i,e as o,w as t,u as n,aP as Y,t as u,s as p,F as P,T as q,a,i as D,ai as z,aQ as W,a7 as X,K as Z,L as ee,J as le,a1 as oe,av as te,c1 as ae,M as se,E as re,Y as ne}from"./index-37fee5a0.js";/* empty css                   *//* empty css                  *//* empty css                *//* empty css                          *//* empty css                    *//* empty css                 *//* empty css                        */import"./el-form-item-4ed993c7.js";/* empty css                 *//* empty css                *//* empty css                   *//* empty css                       */import{r as de,s as ce,t as ue}from"./site-20a949a1.js";import{g as ie}from"./addon-9b550c66.js";import{_ as pe}from"./_plugin-vue_export-helper-c27b6911.js";const _e={class:"main-container"},me={key:0,class:"text-gray-400"},fe={class:"w-full"},ve={class:"flex"},he={class:"w-[60px] h-[60px] mr-[10px] rounded-md overflow-hidden"},ge={class:"image-error"},xe={class:"flex-1 w-0 flex flex-col justify-center"},be={class:"font-bold truncate"},we=["title"],ye={key:0,class:"text-gray-400"},ke={class:"w-full"},Ve={class:"flex"},Ee={class:"w-[60px] h-[60px] mr-[10px] rounded-md overflow-hidden"},Le={class:"image-error"},Ie={class:"flex-1 w-0 flex flex-col justify-center"},Ce={class:"font-bold truncate"},Re=["title"],Fe={class:"fixed-footer-wrap"},Ne={class:"fixed-footer"},Ae=H({__name:"group_edit",setup(Be){const b=f(!0),w=f([]),y=f([]),k=J(),G=K(),S=k.meta.title,h=f(!1),r=f({group_id:0,group_name:"",group_desc:"",app:[],addon:[]});(async()=>{await ie().then(({data:c})=>{const l=[],_=[];Object.keys(c).forEach(v=>{const m=c[v];m.type=="addon"?_.push(m):l.push(m)}),w.value=l,y.value=_}).catch()})(),k.query.id?de(k.query.id).then(c=>{let l=M(c.data);r.value=l,b.value=!1}).catch():b.value=!1;const E=()=>{G.push("/admin/site/group")},L=f(),U=O(()=>({group_name:[{required:!0,message:d("groupNamePlaceholder"),trigger:"blur"}],app:[{required:!0,message:d("mainAppPlaceholder"),trigger:"blur"}]})),$=async c=>{if(h.value||!c)return;const l=r.value.group_id?ce:ue;await c.validate(async _=>{_&&(h.value=!0,l(r.value).then(v=>{j(),setTimeout(()=>{E()},1e3)}).catch(()=>{h.value=!1}))})},j=()=>{z().then(c=>{}).catch(()=>{})};return(c,l)=>{const _=W,v=X,m=Z,g=ee,x=le,I=Q("icon-picture"),C=oe,R=te,F=ae,T=se,N=re,A=ne;return B((s(),i("div",_e,[o(v,{class:"card !border-none",shadow:"never"},{default:t(()=>[o(_,{content:n(S),icon:n(Y),onBack:l[0]||(l[0]=e=>c.$router.back())},null,8,["content","icon"])]),_:1}),o(v,{class:"box-card mt-[15px] !border-none",shadow:"never"},{default:t(()=>[o(T,{model:r.value,"label-width":"110px",ref_key:"formRef",ref:L,rules:n(U),class:"page-form"},{default:t(()=>[o(g,{label:n(d)("groupName"),prop:"group_name"},{default:t(()=>[o(m,{modelValue:r.value.group_name,"onUpdate:modelValue":l[1]||(l[1]=e=>r.value.group_name=e),placeholder:n(d)("groupNamePlaceholder"),clearable:"",disabled:r.value.uid,class:"input-width",maxlength:"20","show-word-limit":!0},null,8,["modelValue","placeholder","disabled"])]),_:1},8,["label"]),o(g,{label:n(d)("groupDesc"),prop:"group_desc"},{default:t(()=>[o(m,{modelValue:r.value.group_desc,"onUpdate:modelValue":l[2]||(l[2]=e=>r.value.group_desc=e),type:"textarea",rows:"4",clearable:"",placeholder:n(d)("groupDescPlaceholder"),class:"input-width",maxlength:"100"},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),o(g,{label:n(d)("mainApp"),prop:"app"},{default:t(()=>[w.value.length?(s(),p(F,{key:1,modelValue:r.value.app,"onUpdate:modelValue":l[3]||(l[3]=e=>r.value.app=e),class:"flex flex-wrap w-full"},{default:t(()=>[(s(!0),i(P,null,q(w.value,(e,V)=>(s(),i("div",{class:"flex w-[300px]",key:V},[o(R,{label:e.key,name:"",class:"w-full !h-auto border border-[var(--el-color-info-light-7)] border-solid p-[10px] !mr-[10px] !mb-[10px] rounded-md"},{default:t(()=>[a("div",fe,[a("div",ve,[a("div",he,[e.icon?(s(),p(x,{key:0,src:e.icon,class:"w-full h-full"},null,8,["src"])):(s(),p(x,{key:1,class:"w-full h-full"},{error:t(()=>[a("div",ge,[o(C,null,{default:t(()=>[o(I)]),_:1})])]),_:1}))]),a("div",xe,[a("div",be,u(e.title),1),a("div",{class:"text-gray-400 mt-[10px] truncate",title:e.desc},u(e.desc),9,we)])])])]),_:2},1032,["label"])]))),128))]),_:1},8,["modelValue"])):(s(),i("div",me,u(n(d)("appListEmpty")),1))]),_:1},8,["label"]),o(g,{label:n(d)("containAddon")},{default:t(()=>[y.value.length?(s(),p(F,{key:1,modelValue:r.value.addon,"onUpdate:modelValue":l[4]||(l[4]=e=>r.value.addon=e),class:"flex flex-wrap w-full"},{default:t(()=>[(s(!0),i(P,null,q(y.value,(e,V)=>(s(),i("div",{class:"flex w-[300px]",key:V},[o(R,{label:e.key,name:"",class:"w-full !h-auto border border-[var(--el-color-info-light-7)] border-solid p-[10px] !mr-[10px] !mb-[10px] rounded-md"},{default:t(()=>[a("div",ke,[a("div",Ve,[a("div",Ee,[e.icon?(s(),p(x,{key:0,src:e.icon,class:"w-full h-full"},null,8,["src"])):(s(),p(x,{key:1,class:"w-full h-full"},{error:t(()=>[a("div",Le,[o(C,null,{default:t(()=>[o(I)]),_:1})])]),_:1}))]),a("div",Ie,[a("div",Ce,u(e.title),1),a("div",{class:"text-gray-400 mt-[10px] truncate",title:e.desc},u(e.desc),9,Re)])])])]),_:2},1032,["label"])]))),128))]),_:1},8,["modelValue"])):(s(),i("div",ye,u(n(d)("addonListEmpty")),1))]),_:1},8,["label"])]),_:1},8,["model","rules"]),a("div",Fe,[a("div",Ne,[B((s(),p(N,{type:"primary",onClick:l[5]||(l[5]=e=>$(L.value))},{default:t(()=>[D(u(n(d)("save")),1)]),_:1})),[[A,h.value]]),o(N,{onClick:l[6]||(l[6]=e=>E())},{default:t(()=>[D(u(n(d)("cancel")),1)]),_:1})])])]),_:1})])),[[A,b.value]])}}});const We=pe(Ae,[["__scopeId","data-v-14dec0c9"]]);export{We as default};