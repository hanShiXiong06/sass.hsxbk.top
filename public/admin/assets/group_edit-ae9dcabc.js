import{d as T,r as m,x as H,f as J,aI as K,l as M,q as d,a2 as O,R as Q,h as n,c as i,e as o,w as t,u as r,aP as Y,t as u,s as f,F as A,T as B,a,i as P,ai as z,aQ as W,a7 as X,K as Z,L as ee,J as le,a1 as oe,av as te,bU as ae,M as se,E as ne,Y as re}from"./index-29db729d.js";/* empty css                   *//* empty css                  *//* empty css                     *//* empty css                          *//* empty css                    *//* empty css                 *//* empty css                        *//* empty css                 *//* empty css                *//* empty css                       */import{s as de,t as ce,v as ue}from"./site-bbb167c0.js";import{g as ie}from"./addon-746d0475.js";import{_ as pe}from"./_plugin-vue_export-helper-c27b6911.js";const _e={class:"main-container"},me={key:0,class:"text-gray-400"},fe={class:"w-full"},ve={class:"flex"},he={class:"w-[60px] h-[60px] mr-[10px] rounded-md overflow-hidden"},ge={class:"image-error"},xe={class:"flex-1 w-0 flex flex-col justify-center"},be={class:"font-bold truncate"},we=["title"],ye={key:0,class:"text-gray-400"},ke={class:"w-full"},Ve={class:"flex"},Ee={class:"w-[60px] h-[60px] mr-[10px] rounded-md overflow-hidden"},Le={class:"image-error"},Ie={class:"flex-1 w-0 flex flex-col justify-center"},Ce={class:"font-bold truncate"},Re=["title"],Fe={class:"fixed-footer-wrap"},Ne={class:"fixed-footer"},Ae=T({__name:"group_edit",setup(Be){const x=m(!0),b=m([]),w=m([]),y=H(),q=J(),D=y.meta.title,k=m(!1),s=m({group_id:0,group_name:"",group_desc:"",app:[],addon:[]});(async()=>{await ie().then(({data:c})=>{const l=[],p=[];Object.keys(c).forEach(v=>{const _=c[v];_.type=="addon"?p.push(_):l.push(_)}),b.value=l,w.value=p}).catch()})(),y.query.id?de(y.query.id).then(c=>{let l=K(c.data);s.value=l,x.value=!1}).catch():x.value=!1;const E=()=>{q.push("/admin/site/group")},L=m(),U=M(()=>({group_name:[{required:!0,message:d("groupNamePlaceholder"),trigger:"blur"}],app:[{required:!0,message:d("mainAppPlaceholder"),trigger:"blur"}]})),G=async c=>{if(k.value||!c)return;const l=s.value.group_id?ce:ue;await c.validate(async p=>{p&&(k.value=!0,l(s.value).then(v=>{S(),setTimeout(()=>{E()},1e3)}).catch(()=>{k.value=!1}))})},S=()=>{z().then(c=>{}).catch(()=>{})};return(c,l)=>{const p=W,v=X,_=Z,h=ee,g=le,I=O("icon-picture"),C=oe,R=te,F=ae,$=se,N=ne,j=re;return Q((n(),i("div",_e,[o(v,{class:"card !border-none",shadow:"never"},{default:t(()=>[o(p,{content:r(D),icon:r(Y),onBack:l[0]||(l[0]=e=>c.$router.back())},null,8,["content","icon"])]),_:1}),o(v,{class:"box-card mt-[15px] !border-none",shadow:"never"},{default:t(()=>[o($,{model:s.value,"label-width":"110px",ref_key:"formRef",ref:L,rules:r(U),class:"page-form"},{default:t(()=>[o(h,{label:r(d)("groupName"),prop:"group_name"},{default:t(()=>[o(_,{modelValue:s.value.group_name,"onUpdate:modelValue":l[1]||(l[1]=e=>s.value.group_name=e),placeholder:r(d)("groupNamePlaceholder"),clearable:"",disabled:s.value.uid,class:"input-width",maxlength:"20","show-word-limit":!0},null,8,["modelValue","placeholder","disabled"])]),_:1},8,["label"]),o(h,{label:r(d)("groupDesc"),prop:"group_desc"},{default:t(()=>[o(_,{modelValue:s.value.group_desc,"onUpdate:modelValue":l[2]||(l[2]=e=>s.value.group_desc=e),type:"textarea",rows:"4",clearable:"",placeholder:r(d)("groupDescPlaceholder"),class:"input-width",maxlength:"100"},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),o(h,{label:r(d)("mainApp"),prop:"app"},{default:t(()=>[b.value.length?(n(),f(F,{key:1,modelValue:s.value.app,"onUpdate:modelValue":l[3]||(l[3]=e=>s.value.app=e),class:"flex flex-wrap w-full"},{default:t(()=>[(n(!0),i(A,null,B(b.value,(e,V)=>(n(),i("div",{class:"flex w-[300px]",key:V},[o(R,{label:e.key,name:"",class:"w-full !h-auto border border-[var(--el-color-info-light-7)] border-solid p-[10px] !mr-[10px] !mb-[10px] rounded-md"},{default:t(()=>[a("div",fe,[a("div",ve,[a("div",he,[e.icon?(n(),f(g,{key:0,src:e.icon,class:"w-full h-full"},null,8,["src"])):(n(),f(g,{key:1,class:"w-full h-full"},{error:t(()=>[a("div",ge,[o(C,null,{default:t(()=>[o(I)]),_:1})])]),_:1}))]),a("div",xe,[a("div",be,u(e.title),1),a("div",{class:"text-gray-400 mt-[10px] truncate",title:e.desc},u(e.desc),9,we)])])])]),_:2},1032,["label"])]))),128))]),_:1},8,["modelValue"])):(n(),i("div",me,u(r(d)("appListEmpty")),1))]),_:1},8,["label"]),o(h,{label:r(d)("containAddon")},{default:t(()=>[w.value.length?(n(),f(F,{key:1,modelValue:s.value.addon,"onUpdate:modelValue":l[4]||(l[4]=e=>s.value.addon=e),class:"flex flex-wrap w-full"},{default:t(()=>[(n(!0),i(A,null,B(w.value,(e,V)=>(n(),i("div",{class:"flex w-[300px]",key:V},[o(R,{label:e.key,name:"",class:"w-full !h-auto border border-[var(--el-color-info-light-7)] border-solid p-[10px] !mr-[10px] !mb-[10px] rounded-md"},{default:t(()=>[a("div",ke,[a("div",Ve,[a("div",Ee,[e.icon?(n(),f(g,{key:0,src:e.icon,class:"w-full h-full"},null,8,["src"])):(n(),f(g,{key:1,class:"w-full h-full"},{error:t(()=>[a("div",Le,[o(C,null,{default:t(()=>[o(I)]),_:1})])]),_:1}))]),a("div",Ie,[a("div",Ce,u(e.title),1),a("div",{class:"text-gray-400 mt-[10px] truncate",title:e.desc},u(e.desc),9,Re)])])])]),_:2},1032,["label"])]))),128))]),_:1},8,["modelValue"])):(n(),i("div",ye,u(r(d)("addonListEmpty")),1))]),_:1},8,["label"])]),_:1},8,["model","rules"]),a("div",Fe,[a("div",Ne,[o(N,{type:"primary",onClick:l[5]||(l[5]=e=>G(L.value))},{default:t(()=>[P(u(r(d)("save")),1)]),_:1}),o(N,{onClick:l[6]||(l[6]=e=>E())},{default:t(()=>[P(u(r(d)("cancel")),1)]),_:1})])])]),_:1})])),[[j,x.value]])}}});const Ye=pe(Ae,[["__scopeId","data-v-0753d40e"]]);export{Ye as default};
