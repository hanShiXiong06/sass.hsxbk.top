import{d as A,c3 as K,x as Q,f as U,r as k,n as X,Y,P as G,h as d,c as _,a as e,u as o,t as i,q as n,e as t,w as s,i as h,s as m,A as E,F as v,Q as T,B as j,E as H,K as J,I as M,aq as W,X as Z,a0 as ee,L as te,U as se}from"./index-17984968.js";/* empty css                   *//* empty css                *//* empty css                *//* empty css                *//* empty css               *//* empty css                 *//* empty css                        */import"./el-form-item-4ed993c7.js";/* empty css                  */import{_ as oe}from"./site_logo-5ed68b79.js";import{j as ae}from"./site-94cf8303.js";import{_ as le}from"./edit-site.vue_vue_type_script_setup_true_lang-cdb29c27.js";/* empty css                  *//* empty css                   *//* empty css                       *//* empty css                 *//* empty css                     *//* empty css                  *//* empty css                  *//* empty css                  *//* empty css                  */import"./member_head-a897263d.js";import"./user-f645fa82.js";import"./addon-0759f12a.js";const ie={class:"main-container"},ne={class:"detail-head !mb-[10px]"},re=e("span",{class:"iconfont iconxiangzuojiantou !text-xs"},null,-1),de={class:"ml-[1px]"},ce=e("span",{class:"adorn"},"|",-1),_e={class:"right"},pe={class:"input-width"},ue={key:1,class:"w-20 h-20",src:oe,alt:""},me={class:"input-width"},fe={class:"input-width"},he={class:"input-width"},ve={class:"input-width"},xe={class:"input-width"},be={class:"flex flex-wrap"},ge={key:0,class:"flex w-[300px] border border-solid p-[10px] !mr-[10px] !mb-[10px] rounded-md"},we={class:"w-[60px] h-[60px] mr-[10px] rounded-md overflow-hidden"},ye={class:"image-error"},ke={class:"flex-1 w-0 flex flex-col justify-center leading-tight"},Ee={class:"font-bold truncate"},Ce=["title"],De={class:"flex flex-wrap"},Se={key:0,class:"flex w-[300px] border border-solid p-[10px] !mr-[10px] !mb-[10px] rounded-md"},Fe={class:"w-[60px] h-[60px] mr-[10px] rounded-md overflow-hidden"},Ie={class:"image-error"},Ne={class:"flex-1 w-0 flex flex-col justify-center leading-tight"},Te={class:"font-bold truncate"},je=["title"],Be={class:"fixed-footer-wrap"},$e={class:"fixed-footer"},nt=A({__name:"info",setup(Le){const B=K(),x=Q(),C=U(),$=x.meta.title,b=parseInt(x.query.id),g=k(!0),D={site_id:0,site_name:"",expire_time:0,group_id:0,keywords:"",business_hours:"",logo:"",desc:"",latitude:"",longitude:"",province_id:"",city_id:"",district_id:"",address:"",full_address:"",phone:"",group_name:"",status:0,create_time:0,site_addons:[],status_name:"",site_domain:""},l=X({...D}),S=async(f=0)=>{Object.assign(l,D);const r=await(await ae(f)).data;Object.keys(l).forEach(p=>{r[p]!=null&&(l[p]=r[p])}),g.value=!1};b?S(b):g.value=!1;const L=()=>{S(b)},w=k(),y=k(null),R=f=>{y.value.setFormData(l),y.value.showDialog=!0},V=async f=>{F()},F=()=>{B.removeTab(x.path),C.push({path:"/admin/site/list"})};return(f,r)=>{const p=H,c=J,u=M,q=W,I=Y("icon-picture"),N=Z,P=ee,O=te,z=se;return G((d(),_("div",ie,[e("div",ne,[e("div",{class:"left",onClick:r[0]||(r[0]=a=>o(C).push({path:"/admin/site/list"}))},[re,e("span",de,i(o(n)("returnToPreviousPage")),1)]),ce,e("span",_e,i(o($)),1),t(p,{class:"ml-auto w-[100px] mr-[10px]",type:"primary",onClick:r[1]||(r[1]=a=>R(w.value))},{default:s(()=>[h(i(o(n)("edit")),1)]),_:1})]),t(O,{model:l,"label-width":"90px",ref_key:"formRef",ref:w,class:"page-form"},{default:s(()=>[t(P,{class:"box-card !border-none relative",shadow:"never"},{default:s(()=>[t(c,{label:o(n)("siteName")},{default:s(()=>[e("div",pe,i(l.site_name),1)]),_:1},8,["label"]),t(c,{label:o(n)("siteLogo")},{default:s(()=>[l.logo?(d(),m(u,{key:0,class:"w-20 h-20",src:o(E)(l.logo),fit:"contain"},null,8,["src"])):(d(),_("img",ue))]),_:1},8,["label"]),t(c,{label:o(n)("siteDomain")},{default:s(()=>[e("div",me,i(l.site_domain||""),1)]),_:1},8,["label"]),t(c,{label:o(n)("groupName")},{default:s(()=>[e("div",fe,i(l.group_name||""),1)]),_:1},8,["label"]),t(c,{label:o(n)("keywords")},{default:s(()=>[e("div",he,i(l.keywords||""),1)]),_:1},8,["label"]),t(c,{label:o(n)("status")},{default:s(({})=>[t(q,{class:"ml-2",type:l.status==1?"success":"error"},{default:s(()=>[h(i(l.status_name),1)]),_:1},8,["type"])]),_:1},8,["label"]),t(c,{label:o(n)("createTime")},{default:s(()=>[e("div",ve,i(l.create_time||""),1)]),_:1},8,["label"]),t(c,{label:o(n)("expireTime")},{default:s(()=>[e("div",xe,i(l.expire_time||""),1)]),_:1},8,["label"]),t(c,{label:o(n)("app")},{default:s(()=>[e("div",be,[(d(!0),_(v,null,T(l.site_addons,a=>(d(),_(v,null,[a.type=="app"?(d(),_("div",ge,[e("div",we,[a.icon?(d(),m(u,{key:0,src:o(E)(a.icon),class:"w-full h-full"},null,8,["src"])):(d(),m(u,{key:1,class:"w-full h-full"},{error:s(()=>[e("div",ye,[t(N,null,{default:s(()=>[t(I)]),_:1})])]),_:1}))]),e("div",ke,[e("div",Ee,i(a.title),1),e("div",{class:"text-gray-400 mt-[10px] truncate",title:a.desc},i(a.desc),9,Ce)])])):j("",!0)],64))),256))])]),_:1},8,["label"]),t(c,{label:o(n)("addon")},{default:s(()=>[e("div",De,[(d(!0),_(v,null,T(l.site_addons,a=>(d(),_(v,null,[a.type=="addon"?(d(),_("div",Se,[e("div",Fe,[a.icon?(d(),m(u,{key:0,src:o(E)(a.icon),class:"w-full h-full"},null,8,["src"])):(d(),m(u,{key:1,class:"w-full h-full"},{error:s(()=>[e("div",Ie,[t(N,null,{default:s(()=>[t(I)]),_:1})])]),_:1}))]),e("div",Ne,[e("div",Te,i(a.title),1),e("div",{class:"text-gray-400 mt-[10px] truncate",title:a.desc},i(a.desc),9,je)])])):j("",!0)],64))),256))])]),_:1},8,["label"])]),_:1})]),_:1},8,["model"]),t(le,{ref_key:"editSiteDialog",ref:y,onComplete:r[2]||(r[2]=a=>L())},null,512),e("div",Be,[e("div",$e,[t(p,{type:"primary",onClick:r[3]||(r[3]=a=>V(w.value))},{default:s(()=>[h(i(o(n)("confirm")),1)]),_:1}),t(p,{onClick:r[4]||(r[4]=a=>F())},{default:s(()=>[h(i(o(n)("cancel")),1)]),_:1})])])])),[[z,g.value]])}}});export{nt as default};