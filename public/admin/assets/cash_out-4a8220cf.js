import{d as O,x as S,r as g,n as E,h as i,c as k,e as r,w as o,a as b,t as d,u as l,R as K,s as m,q as s,b$ as R,B as f,i as p,F as L,T as W,aS as j,L as G,K as H,at as I,au as M,av as P,bU as $,a7 as q,M as Y,E as J,Y as Q}from"./index-29db729d.js";/* empty css                   *//* empty css                  *//* empty css                     *//* empty css                *//* empty css                          *//* empty css                    *//* empty css                       *//* empty css                 *//* empty css                 *//* empty css                  */import{b as X,T as Z,U as ee}from"./member-a45af035.js";const ae={class:"main-container"},te={class:"flex justify-between items-center"},oe={class:"text-page-title"},le=b("span",{class:"ml-2"},"%",-1),se={class:"fixed-footer-wrap"},re={class:"fixed-footer"},ke=O({__name:"cash_out",setup(ne){const C=S().meta.title,c=g(!0),y=g(),a=E({is_auto_transfer:"0",is_auto_verify:"0",is_open:"0",min:"0.01",rate:"0",transfer_type:[]}),w=g([]);(async()=>{w.value=await(await X()).data})(),(async()=>{const u=await(await Z()).data;Object.keys(a).forEach(e=>{u[e]!=null&&(a[e]=u[e])}),c.value=!1})();const F=E({min:[{validator:(u,e,n)=>{Number(e)<.01?n(new Error(s("cashWithdrawalAmountHint"))):n()},trigger:"blur"}],rate:[{validator:(u,e,n)=>{Number(e)>100||Number(e)<0?n(new Error(s("commissionRatioHint"))):n()},trigger:"blur"}]}),T=async u=>{c.value||!u||await u.validate(e=>{if(e){const n={...a};ee(n).then(()=>{c.value=!1}).catch(()=>{c.value=!1})}})};return(u,e)=>{const n=j,_=G,V=H,v=I,h=M,N=P,U=$,x=q,B=Y,D=J,z=Q;return i(),k("div",ae,[r(x,{class:"box-card !border-none",shadow:"never"},{default:o(()=>[b("div",te,[b("span",oe,d(l(C)),1)]),K((i(),m(B,{class:"page-form mt-[20px]",model:a,"label-width":"150px",ref_key:"ruleFormRef",ref:y,rules:F},{default:o(()=>[r(x,{class:"box-card !border-none",shadow:"never"},{default:o(()=>[r(_,{label:l(s)("isOpen")},{default:o(()=>[r(n,{modelValue:a.is_open,"onUpdate:modelValue":e[0]||(e[0]=t=>a.is_open=t),"active-value":"1","inactive-value":"0"},null,8,["modelValue"])]),_:1},8,["label"]),a.is_open?(i(),m(_,{key:0,label:l(s)("cashWithdrawalAmount"),prop:"min"},{default:o(()=>[r(V,{modelValue:a.min,"onUpdate:modelValue":e[1]||(e[1]=t=>a.min=t),onKeyup:e[2]||(e[2]=t=>l(R)(t)),class:"input-width",placeholder:l(s)("cashWithdrawalAmountPlaceholder")},null,8,["modelValue","placeholder"])]),_:1},8,["label"])):f("",!0),a.is_open?(i(),m(_,{key:1,label:l(s)("commissionRatio"),prop:"rate"},{default:o(()=>[r(V,{modelValue:a.rate,"onUpdate:modelValue":e[3]||(e[3]=t=>a.rate=t),onKeyup:e[4]||(e[4]=t=>l(R)(t)),class:"input-width",placeholder:l(s)("commissionRatioPlaceholder")},null,8,["modelValue","placeholder"]),le]),_:1},8,["label"])):f("",!0),a.is_open?(i(),m(_,{key:2,label:l(s)("audit"),class:"items-center"},{default:o(()=>[r(h,{modelValue:a.is_auto_verify,"onUpdate:modelValue":e[5]||(e[5]=t=>a.is_auto_verify=t)},{default:o(()=>[r(v,{label:"0",size:"large"},{default:o(()=>[p(d(l(s)("manualAudit")),1)]),_:1}),r(v,{label:"1",size:"large"},{default:o(()=>[p(d(l(s)("automaticAudit")),1)]),_:1})]),_:1},8,["modelValue"])]),_:1},8,["label"])):f("",!0),a.is_open?(i(),m(_,{key:3,label:l(s)("transfer"),class:"items-center"},{default:o(()=>[r(h,{modelValue:a.is_auto_transfer,"onUpdate:modelValue":e[6]||(e[6]=t=>a.is_auto_transfer=t)},{default:o(()=>[r(v,{label:"0",size:"large"},{default:o(()=>[p(d(l(s)("manualTransfer")),1)]),_:1}),r(v,{label:"1",size:"large"},{default:o(()=>[p(d(l(s)("automatedTransit")),1)]),_:1})]),_:1},8,["modelValue"])]),_:1},8,["label"])):f("",!0),a.is_open?(i(),m(_,{key:4,label:l(s)("transferMode"),class:"items-center"},{default:o(()=>[r(U,{modelValue:a.transfer_type,"onUpdate:modelValue":e[7]||(e[7]=t=>a.transfer_type=t),size:"large"},{default:o(()=>[(i(!0),k(L,null,W(w.value,(t,A)=>(i(),m(N,{label:t.key,key:"a"+A},{default:o(()=>[p(d(t.name),1)]),_:2},1032,["label"]))),128))]),_:1},8,["modelValue"])]),_:1},8,["label"])):f("",!0)]),_:1})]),_:1},8,["model","rules"])),[[z,c.value]])]),_:1}),b("div",se,[b("div",re,[r(D,{type:"primary",onClick:e[8]||(e[8]=t=>T(y.value))},{default:o(()=>[p(d(l(s)("save")),1)]),_:1})])])])}}});export{ke as default};
