import{d as O,x as X,f as Y,r as c,n as R,l as j,q as e,h as L,c as H,R as T,s as B,w as t,e as o,u as l,a as f,t as r,i as d,c$ as J,c8 as P,a5 as Q,at as W,au as Z,L as ee,E as le,ac as ae,ad as te,a7 as oe,M as ne,K as se,X as ie,Y as re}from"./index-37fee5a0.js";/* empty css                   *//* empty css                  *//* empty css                   *//* empty css                 *//* empty css                *//* empty css                *//* empty css                 *//* empty css                    */import"./el-tooltip-4ed993c7.js";/* empty css                  *//* empty css                     *//* empty css                        *//* empty css               *//* empty css                  */import"./el-form-item-4ed993c7.js";/* empty css                       *//* empty css                 */import{g as de,e as ue,a as me,d as pe,b as ce,s as fe}from"./agent-2632f1c1.js";const ge={class:"main-container"},_e={class:"text text-[14px] leading-[25px]"},ve={class:"flex flex-col"},be=f("span",{class:"text-[#999] leading-[1.3] mt-[5px] text-[12px]"},"等级费用指代理商申请的费用，目前代理申请线下处理，系统只做记录",-1),he={class:"flex flex-col"},xe=f("span",{class:"text-[#999] leading-[1.3] mt-[5px] text-[12px]"},"折扣数据0-10折",-1),ye={class:"dialog-footer"},ze=O({__name:"level_config",setup(we){const I=X();Y(),I.meta.title;const g=c(!1),m=R({loading:!1,data:[]}),E=()=>{m.loading=!0,de().then(s=>{m.data=s.data,m.loading=!1}).catch(()=>{m.loading=!1})};E();const k=c(),b=c(!1),i=R({name:"",money:"",discount:""}),U=()=>{b.value=!1,g.value=!0,i.discount="",i.money="",i.name=""},D=j(()=>({name:[{required:!0,message:e("levelNamePlaceholder"),trigger:"blur"}],money:[{required:!0,message:e("moneyPlaceholder"),trigger:"blur"},{validator:(s,a,u)=>{parseFloat(a)<0?u(new Error(e("lessThan"))):u()},trigger:["blur","change"]}],discount:[{required:!0,message:e("discountPlaceholder"),trigger:"blur"},{validator:(s,a,u)=>{var p=parseFloat(a);isNaN(p)||p<0||p>10||p.toFixed(2)!=p?u(new Error(e("discountIntPlaceholder"))):u()},trigger:["blur","change"]}]})),h=c(!1),$=async s=>{h.value||!s||await s.validate(async a=>{if(a){h.value=!0;const u=i;(b.value?ue:me)(u).then(_=>{h.value=!1,g.value=!1,E()}).catch(()=>{h.value=!1})}})},q=s=>{i.level_id=s.level_id,i.discount=s.discount,i.money=parseFloat(s.money),i.name=s.name,b.value=!0,g.value=!0},x=c(!1),K=s=>{Q.confirm(e("levelDeleteTips"),e("warning"),{confirmButtonText:e("confirm"),cancelButtonText:e("cancel"),type:"warning"}).then(()=>{x.value||(x.value=!0,pe({level_id:s}).then(()=>{E(),x.value=!1}).catch(()=>{x.value=!1}))})},y=c({is_open:0}),C=c(!1);((s=1)=>{ce().then(a=>{y.value.is_open=a.data.is_open})})();const M=()=>{if(C.value)return!1;C.value=!0,fe({is_open:y.value.is_open}).then(s=>{C.value=!1})};return(s,a)=>{const u=W,p=Z,_=ee,v=le,w=ae,S=te,F=oe,A=ne,V=se,z=ie,N=re;return L(),H("div",ge,[T((L(),B(F,{class:"card !border-none",shadow:"never"},{default:t(()=>[o(A,{class:"page-form",model:s.formData,"label-width":"180px",rules:l(D),ref:"formRef"},{default:t(()=>[f("div",_e,r(l(e)("baseTitle")),1),o(F,{class:"card !border-none",shadow:"never"},{default:t(()=>[o(_,{label:l(e)("isEnable")},{default:t(()=>[o(p,{modelValue:y.value.is_open,"onUpdate:modelValue":a[0]||(a[0]=n=>y.value.is_open=n),onChange:M},{default:t(()=>[o(u,{label:"1"},{default:t(()=>[d(r(l(e)("are")),1)]),_:1}),o(u,{label:"0"},{default:t(()=>[d(r(l(e)("no")),1)]),_:1})]),_:1},8,["modelValue"])]),_:1},8,["label"]),o(_,{label:l(e)("teamLevel")},{default:t(()=>[o(v,{type:"primary",class:"mb-[15px]",onClick:U},{default:t(()=>[d(r(l(e)("addLevel")),1)]),_:1}),T((L(),B(S,{data:m.data,size:"large"},{empty:t(()=>[f("span",null,r(m.loading?"":l(e)("emptyData")),1)]),default:t(()=>[o(w,{prop:"name",label:l(e)("levelName"),"min-width":"120"},null,8,["label"]),o(w,{label:l(e)("money"),"min-width":"120"},{default:t(({row:n})=>[d(r(l(J)(n.money)||"0.00"),1)]),_:1},8,["label"]),o(w,{label:l(e)("discount"),"min-width":"120"},{default:t(({row:n})=>[d(r(n.discount||0),1)]),_:1},8,["label"]),o(w,{label:l(e)("operation"),fixed:"right",align:"right","min-width":"120"},{default:t(({row:n})=>[o(v,{type:"primary",link:"",onClick:G=>q(n)},{default:t(()=>[d(r(l(e)("edit")),1)]),_:2},1032,["onClick"]),o(v,{type:"primary",link:"",onClick:G=>K(n.level_id)},{default:t(()=>[d(r(l(e)("delete")),1)]),_:2},1032,["onClick"])]),_:1},8,["label"])]),_:1},8,["data"])),[[N,m.loading]])]),_:1},8,["label"])]),_:1})]),_:1},8,["model","rules"])]),_:1})),[[N,m.loading]]),o(z,{modelValue:g.value,"onUpdate:modelValue":a[8]||(a[8]=n=>g.value=n),title:b.value?l(e)("editLevel"):l(e)("addLevel"),width:"450px","close-on-press-escape":!1,"destroy-on-close":!0,"close-on-click-modal":!1},{footer:t(()=>[f("span",ye,[o(v,{onClick:a[6]||(a[6]=n=>g.value=!1)},{default:t(()=>[d(r(l(e)("cancel")),1)]),_:1}),o(v,{type:"primary",onClick:a[7]||(a[7]=n=>$(k.value))},{default:t(()=>[d(r(l(e)("confirm")),1)]),_:1})])]),default:t(()=>[o(A,{ref_key:"levelListInfoRef",ref:k,model:i,"label-width":"110px",rules:l(D)},{default:t(()=>[o(_,{label:l(e)("levelName"),prop:"name"},{default:t(()=>[o(V,{modelValue:i.name,"onUpdate:modelValue":a[1]||(a[1]=n=>i.name=n),placeholder:l(e)("levelNamePlaceholder"),maxlength:"25","show-word-limit":""},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),o(_,{label:l(e)("money"),prop:"money"},{default:t(()=>[f("div",ve,[o(V,{modelValue:i.money,"onUpdate:modelValue":a[2]||(a[2]=n=>i.money=n),maxlength:"7","show-word-limit":"",onKeyup:a[3]||(a[3]=n=>l(P)(n)),class:"!w-[300px]",placeholder:l(e)("moneyPlaceholder")},{append:t(()=>[d("元")]),_:1},8,["modelValue","placeholder"]),be])]),_:1},8,["label"]),o(_,{label:l(e)("discount"),prop:"discount"},{default:t(()=>[f("div",he,[o(V,{modelValue:i.discount,"onUpdate:modelValue":a[4]||(a[4]=n=>i.discount=n),class:"!w-[300px]",onKeyup:a[5]||(a[5]=n=>l(P)(n)),placeholder:l(e)("discountPlaceholder"),maxlength:"60"},{append:t(()=>[d("折")]),_:1},8,["modelValue","placeholder"]),xe])]),_:1},8,["label"])]),_:1},8,["model","rules"])]),_:1},8,["modelValue","title"])])}}});export{ze as default};
