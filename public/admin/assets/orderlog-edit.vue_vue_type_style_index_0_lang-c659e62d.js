import{d as E,r as c,n as L,l as O,q as l,h as b,s as h,w as i,a as U,e as r,br as V,i as v,t as y,u as o,R as x,K as N,L as F,M as R,E as B,X as C,Y as S}from"./index-f7a01263.js";/* empty css                   *//* empty css                  *//* empty css                   *//* empty css                  *//* empty css                     *//* empty css                 */import{f as T,h as j,i as K}from"./order-17cbf9da.js";const M={class:"dialog-footer"},Z=E({__name:"orderlog-edit",emits:["complete"],setup(X,{expose:w,emit:k}){let n=c(!1);const s=c(!1),_={id:"",order_id:"",action:"",main_type:"",main_id:"",nick_name:"",order_status:""},a=L({..._}),f=c(),P=O(()=>({order_id:[{required:!0,message:l("orderIdPlaceholder"),trigger:"blur"}],action:[{required:!0,message:l("actionPlaceholder"),trigger:"blur"}],main_type:[{required:!0,message:l("mainTypePlaceholder"),trigger:"blur"}],main_id:[{required:!0,message:l("mainIdPlaceholder"),trigger:"blur"}],nick_name:[{required:!0,message:l("nickNamePlaceholder"),trigger:"blur"}],order_status:[{required:!0,message:l("orderStatusPlaceholder"),trigger:"blur"}]})),I=async m=>{if(s.value||!m)return;let e=a.id?T:j;await m.validate(async d=>{d&&(s.value=!0,e(a).then(p=>{s.value=!1,n.value=!1,k("complete")}).catch(p=>{s.value=!1}))})};return w({showDialog:n,setFormData:async(m=null)=>{if(Object.assign(a,_),s.value=!0,m){const e=await(await K(m.id)).data;e&&Object.keys(a).forEach(d=>{e[d]!=null&&(a[d]=e[d])})}s.value=!1}}),(m,e)=>{const d=N,u=F,p=R,g=B,D=C,q=S;return b(),h(D,{modelValue:o(n),"onUpdate:modelValue":e[8]||(e[8]=t=>V(n)?n.value=t:n=t),title:a.id?o(l)("updateOrderLog"):o(l)("addOrderLog"),width:"50%",class:"diy-dialog-wrap","destroy-on-close":!0},{footer:i(()=>[U("span",M,[r(g,{onClick:e[6]||(e[6]=t=>V(n)?n.value=!1:n=!1)},{default:i(()=>[v(y(o(l)("cancel")),1)]),_:1}),r(g,{type:"primary",loading:s.value,onClick:e[7]||(e[7]=t=>I(f.value))},{default:i(()=>[v(y(o(l)("confirm")),1)]),_:1},8,["loading"])])]),default:i(()=>[x((b(),h(p,{model:a,"label-width":"120px",ref_key:"formRef",ref:f,rules:o(P),class:"page-form"},{default:i(()=>[r(u,{label:o(l)("orderId"),prop:"order_id"},{default:i(()=>[r(d,{modelValue:a.order_id,"onUpdate:modelValue":e[0]||(e[0]=t=>a.order_id=t),clearable:"",placeholder:o(l)("orderIdPlaceholder"),class:"input-width"},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),r(u,{label:o(l)("action"),prop:"action"},{default:i(()=>[r(d,{modelValue:a.action,"onUpdate:modelValue":e[1]||(e[1]=t=>a.action=t),clearable:"",placeholder:o(l)("actionPlaceholder"),class:"input-width"},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),r(u,{label:o(l)("mainType"),prop:"main_type"},{default:i(()=>[r(d,{modelValue:a.main_type,"onUpdate:modelValue":e[2]||(e[2]=t=>a.main_type=t),clearable:"",placeholder:o(l)("mainTypePlaceholder"),class:"input-width"},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),r(u,{label:o(l)("mainId")},{default:i(()=>[r(d,{modelValue:a.main_id,"onUpdate:modelValue":e[3]||(e[3]=t=>a.main_id=t),clearable:"",placeholder:o(l)("mainIdPlaceholder"),class:"input-width"},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),r(u,{label:o(l)("nickName"),prop:"nick_name"},{default:i(()=>[r(d,{modelValue:a.nick_name,"onUpdate:modelValue":e[4]||(e[4]=t=>a.nick_name=t),clearable:"",placeholder:o(l)("nickNamePlaceholder"),class:"input-width"},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),r(u,{label:o(l)("orderStatus")},{default:i(()=>[r(d,{modelValue:a.order_status,"onUpdate:modelValue":e[5]||(e[5]=t=>a.order_status=t),clearable:"",placeholder:o(l)("orderStatusPlaceholder"),class:"input-width"},null,8,["modelValue","placeholder"])]),_:1},8,["label"])]),_:1},8,["model","rules"])),[[q,s.value]])]),_:1},8,["modelValue","title"])}}});export{Z as _};
