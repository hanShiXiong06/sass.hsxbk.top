import{O as j,d as J,j as ee,n as te,P as se,l as oe,r as y,H as G,Q as ae,c as o,a as t,u as l,t as c,B as D,e as p,w as d,C as le,R as E,F as g,T as w,U as I,E as ne,V as ie,K as re,W as pe,X as ce,Y as de,p as _e,g as xe,h as a,A as N,i as H,v as F,Z as ue,_ as me,$ as fe,a0 as K,D as he,G as $,a1 as ve,L as ge,M as ye}from"./index-a3bdc7eb.js";/* empty css                   *//* empty css                  *//* empty css                   *//* empty css                */import"./el-form-item-4ed993c7.js";/* empty css                      *//* empty css                 *//* empty css               *//* empty css                  *//* empty css                  *//* empty css                     *//* empty css                  *//* empty css                  */import{_ as we}from"./icon-addon-339e16d0.js";import{_ as be}from"./member_head-d9fd7b2c.js";import{g as ke}from"./addon-53632301.js";import{_ as Ce}from"./_plugin-vue_export-helper-c27b6911.js";const Se=""+new URL("site_empty-90dceaae.png",import.meta.url).href;function De(x){return j.get("home/site",{params:x})}function Fe(){return j.get("home/site/group")}function Ve(x){return j.post("home/site/create",x)}const u=x=>(_e("data-v-83e4df1d"),x=x(),xe(),x),Ee={class:"flex justify-between items-center py-[24px] pl-[62px] pr-[64px] home-head"},Ie={key:0,class:"flex items-center"},$e=["src"],je={key:1,class:"w-[32x] h-[32px] rounded-full",src:we,alt:""},ze={class:"ml-[10px] text-[16px] font-bold"},Ue={class:"flex items-center"},Le={class:"mr-[12px] text-[14px]"},Ae={class:"w-[1200px] m-auto mt-[62px]"},Be={class:"flex justify-between items-center"},Re=u(()=>t("span",{class:"text-[24px] font-bold"},"站点列表",-1)),Ge={class:"flex justify-between items-center mt-[18px]"},Ne={class:"w-[800px] text-[14px] whitespace-nowrap"},He=["onClick"],Ke={class:"min-h-[580px]"},Me={class:"flex flex-wrap mt-[30px]"},Oe=["onClick"],Pe={class:"flex items-center px-[24px] pt-[22px] pb-[16px] bg-[#F0F2F4] home-item-head relative"},Te=["src"],qe={key:2,class:"w-[48px] h-[48px] mr-[15px] rounded-[50%] overflow-hidden",src:be},Qe={class:"flex flex-col flex-1 justify-center"},We={class:"flex items-center flex-wrap"},Xe={class:"text-[16px] text-[#000] max-w-[145px] font-bold truncate mr-[10px]"},Ye={key:0,class:"flex items-center justify-center min-w-[42px] h-[18px] bg-[#FF5500] rounded-tl-md rounded-br-md items-tab"},Ze={class:"text-[12px] text-[#fff]"},Je={class:"text-[12px] mt-[3px] text-[#555]"},et={class:"px-[24px] py-[20px] text-[#6D7278]"},tt={class:"text-[14px]"},st={class:"text-[14px] mt-[2px]"},ot={key:0,class:"m-auto mt-[100px]"},at=u(()=>t("img",{src:Se},null,-1)),lt=u(()=>t("p",{class:"text-center text-gray-400 mt-[20px]"},"暂无站点",-1)),nt=[at,lt],it={class:"mt-[16px] flex justify-end"},rt=u(()=>t("div",{class:"text-[#333333] text-[22px] ml-[15px] leading-[1] mt-[10px]"},"创建站点",-1)),pt={class:"flex flex-col mx-[25px] h-[430px] mt-[15px]"},ct={class:"flex items-center"},dt=u(()=>t("div",{class:"text-[18px] text-[#333333]"},"站点名称",-1)),_t={class:"w-[420px] h-[34px] ml-[10px]"},xt={class:"flex-1 mt-[20px] h-[160px]"},ut=u(()=>t("div",{class:"text-[18px] text-[#333333]"},"店铺套餐",-1)),mt={class:"w-full whitespace-nowrap"},ft=["onClick"],ht={class:"w-[140px] h-[40px] truncate text-white text-[16px] text-center leading-[40px] creatBg relative -left-[1px] -top-[2px]"},vt={class:"flex mx-[30px] mt-[14px] leading-[1] items-center"},gt=u(()=>t("div",{class:"nc-iconfont nc-icon-duiV6mm text-[#466CEA]"},null,-1)),yt={class:"text-[14px] text-[#666666] ml-[3px] truncate"},wt={class:"flex mx-[30px] mt-[14px] leading-[1] text-center"},bt=u(()=>t("div",{class:"nc-iconfont nc-icon-duiV6mm text-[#466CEA]"},null,-1)),kt={class:"text-[14px] text-[#666666] ml-[3px] truncate"},Ct={class:"dialog-footer"},St=J({__name:"index",setup(x){const z=ee(),r=te({params:{keywords:"",page:1,limit:12,app:"",sort:!1},loading:!1,tableData:[],total:0}),{params:b,loading:U,tableData:L}=se(r),m=(i=1)=>{r.params.page=i,r.loading=!0,De(r.params).then(s=>{r.tableData=s.data.data,r.total=s.data.total,r.loading=!1}).catch(()=>{r.loading=!1})};m();const A=i=>{r.params.app=i,m()},k=oe(()=>he().website),M=i=>{$.set({key:"siteId",data:i.site_id}),$.set({key:"siteInfo",data:i}),$.set({key:"comparisonSiteIdStorage",data:i.site_id}),location.href=`${location.origin}/site/`},O=()=>{z.logout()},B=y([]);ke().then(({data:i})=>{const s=[];Object.keys(i).forEach(S=>{const h=i[S];h.type=="app"&&s.push(h)}),B.value=s}).catch();const V=y(!0),C=y([]);Fe().then(({data:i})=>{!G.empty(i)&&(C.value=i),V.value=!1}).catch(()=>{V.value=!1});const f=y(!1),P=()=>{if(!C.value.length){I("暂无店铺套餐");return}f.value=!0},n=y({step:1,loading:!1,formData:{group_id:0,site_name:""}}),T=()=>{if(!n.value.formData.group_id){I({message:"请先选择店铺套餐",type:"error"});return}if(G.empty(n.value.formData.site_name)){I({message:"请输入站点名称",type:"error"});return}n.value.loading||(n.value.loading=!0,Ve(n.value.formData).then(()=>{n.value.loading=!1,f.value=!1,m()}).catch(()=>{n.value.loading=!1}))};return ae(()=>f.value,()=>{f.value||(n.value={step:1,loading:!1,formData:{group_id:0,site_name:""}})}),(i,s)=>{const S=ne,h=ie,q=ve,R=re,Q=pe,W=ge,X=ye,Y=ce,Z=de;return a(),o(g,null,[t("div",null,[t("div",Ee,[l(k)?(a(),o("div",Ie,[l(k).icon?(a(),o("img",{key:0,class:"w-[32x] h-[32px] rounded-full",src:l(N)(l(k).icon),alt:""},null,8,$e)):(a(),o("img",je)),t("span",ze,c(l(k).site_name),1)])):D("",!0),t("div",Ue,[t("span",Le,c(l(z).userInfo.username),1),t("span",{onClick:s[0]||(s[0]=e=>O()),class:"text-[14px] cursor-pointer text-[var(--el-color-primary)]"},"退出")])]),t("div",Ae,[t("div",Be,[Re,p(S,{type:"primary",class:"w-[90px] !h-[34px]",disabled:V.value,onClick:P},{default:d(()=>[H("创建站点")]),_:1},8,["disabled"])]),t("div",Ge,[t("div",Ne,[p(h,{always:!0},{default:d(()=>[t("span",{class:F(["px-[10px] cursor-pointer h-[35px] leading-[35px] inline-block",{"text-[var(--el-color-primary)]":l(b).app==""}]),onClick:s[1]||(s[1]=e=>A(""))},"所有应用",2),(a(!0),o(g,null,w(B.value,(e,_)=>(a(),o("span",{class:F(["px-[10px] cursor-pointer h-[35px] leading-[35px] inline-block",{"text-[var(--el-color-primary)]":l(b).app==e.key}]),onClick:v=>A(e.key),key:_},c(e.title),11,He))),128))]),_:1})]),p(R,{modelValue:l(b).keywords,"onUpdate:modelValue":s[3]||(s[3]=e=>l(b).keywords=e),class:"!w-[300px] !h-[34px]",placeholder:"请输入要搜索的站点名称",onKeyup:s[4]||(s[4]=le(e=>m(),["enter","native"]))},{suffix:d(()=>[p(q,{onClick:s[2]||(s[2]=ue(e=>m(),["stop"])),class:"cursor-pointer"},{default:d(()=>[p(l(me))]),_:1})]),_:1},8,["modelValue"])]),t("div",Ke,[E((a(),o("div",Me,[(a(!0),o(g,null,w(l(L),(e,_)=>(a(),o("div",{key:_,onClick:v=>M(e),class:F(["home-item w-[285px] box-border mb-[20px] cursor-pointer",{"mr-[20px]":_==0||(_+1)%4!=0}])},[t("div",Pe,[e.theme_color?(a(),o("div",{key:0,class:"absolute h-[5px] w-full z-1 left-0 top-0",style:fe({"background-color":e.theme_color})},null,4)):D("",!0),e.icon?(a(),o("img",{key:1,class:"w-[48px] h-[48px] mr-[15px] rounded-[50%] overflow-hidden",src:l(N)(e.icon)},null,8,Te)):(a(),o("img",qe)),t("div",Qe,[t("div",We,[t("span",Xe,c(e.site_name),1),e.app_name?(a(),o("div",Ye,[t("span",Ze,c(e.app_name),1)])):D("",!0)]),t("span",Je,c(e.create_time?e.create_time.split(" ")[0]:"--")+" 到 "+c(e.expire_time?e.expire_time.split(" ")[0]:"--"),1)])]),t("div",et,[t("p",tt,"站点编号："+c(e.site_id),1),t("p",st,"站点套餐："+c(e.group_name||"--"),1)])],10,Oe))),128)),!l(L).length&&!l(U)?(a(),o("div",ot,nt)):D("",!0)])),[[Z,l(U)]])]),t("div",it,[p(Q,{"current-page":r.params.page,"onUpdate:current-page":s[5]||(s[5]=e=>r.params.page=e),"page-size":r.params.limit,"onUpdate:page-size":s[6]||(s[6]=e=>r.params.limit=e),layout:"total, sizes, prev, pager, next, jumper",total:r.total,onSizeChange:s[7]||(s[7]=e=>m()),onCurrentChange:m,"hide-on-single-page":!0},null,8,["current-page","page-size","total"])])])]),p(Y,{modelValue:f.value,"onUpdate:modelValue":s[9]||(s[9]=e=>f.value=e),width:"54vw","destroy-on-close":!0,style:{"border-radius":"25px"}},{title:d(()=>[rt]),footer:d(()=>[t("span",Ct,[p(S,{type:"primary",onClick:T,class:"w-[118px] h-[44px] mt-[10px] text-[16px]"},{default:d(()=>[H("创建站点")]),_:1})])]),default:d(()=>[t("div",pt,[t("div",ct,[dt,t("div",_t,[p(X,{model:n.value.formData,ref:"formRef",rules:i.formRules},{default:d(()=>[p(W,{prop:"username"},{default:d(()=>[p(R,{class:"create-site-name",modelValue:n.value.formData.site_name,"onUpdate:modelValue":s[8]||(s[8]=e=>n.value.formData.site_name=e),maxlength:"20",placeholder:"请输入站点名称",autocomplete:"off"},null,8,["modelValue"])]),_:1})]),_:1},8,["model","rules"])])]),E(t("div",xt,[ut,p(h,{class:"w-full mt-[10px] meal-site -ml-[10px]",height:"350px"},{default:d(()=>[E(t("div",mt,[(a(!0),o(g,null,w(C.value,(e,_)=>(a(),o("div",{key:_,class:F(["inline-flex flex-col w-[300px] h-[330px] box-border rounded-[17px] border-transparent border-[2px] border-solid create-site-item my-[10px]",{"bg-[#F6F7FF] border-[#466CEA]":n.value.formData.group_id==e.group_id,"ml-[20px]":_>0," ml-[10px]":_==0,"mr-[10px]":C.value.length-1==_}]),onClick:v=>n.value.formData.group_id=e.group_id},[t("div",ht,c(e.site_group.group_name),1),p(h,{class:"flex pb-[20px] pt-[4px] box-border !h-[260px]"},{default:d(()=>[(a(!0),o(g,null,w(e.site_group.app_name,v=>(a(),o("div",vt,[gt,t("div",yt,c(v),1)]))),256)),(a(!0),o(g,null,w(e.site_group.addon_name,v=>(a(),o("div",wt,[bt,t("div",kt,c(v),1)]))),256))]),_:2},1024)],10,ft))),128))],512),[[K,n.value.step==1]])]),_:1})],512),[[K,n.value.step==1]])])]),_:1},8,["modelValue"])],64)}}});const Ot=Ce(St,[["__scopeId","data-v-83e4df1d"]]);export{Ot as default};
