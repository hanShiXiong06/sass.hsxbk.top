import{d as C,r as u,n as R,l as M,q as l,Q as P,h as _,s as f,w as i,a as j,e as n,br as h,i as I,t as V,u as r,R as q,c as N,F as U,T as S,ab as T,aC as K,L as Q,K as W,M as X,E as Y,X as $,Y as z}from"./index-2a89d409.js";/* empty css                   *//* empty css                  *//* empty css                   *//* empty css                  *//* empty css                *//* empty css                 */import"./el-form-item-4ed993c7.js";/* empty css               *//* empty css                  *//* empty css                  *//* empty css                     *//* empty css                  */import{u as G}from"./dict-8c494606.js";import{e as H,b as J,d as Z,f as ee}from"./order-b41e3884.js";const ae={class:"dialog-footer"},he=C({__name:"orderadd-edit",emits:["complete"],setup(te,{expose:D,emit:E}){let o=u(!1);const d=u(!1),v={id:"",member_id:"",order_id:""},a=R({...v}),b=u(),L=M(()=>({member_id:[{required:!0,message:l("memberIdPlaceholder"),trigger:"blur"}],order_id:[{required:!0,message:l("orderIdPlaceholder"),trigger:"blur"}]})),k=async m=>{if(d.value||!m)return;let e=a.id?H:J;await m.validate(async s=>{s&&(d.value=!0,e(a).then(c=>{d.value=!1,o.value=!1,E("complete")}).catch(c=>{d.value=!1}))})};let p=u([]);(async()=>{p.value=await(await G("jhkd_order_status")).data.dictionary})(),P(()=>p.value,()=>{a.order_status=p.value[0].value});const g=u([]);return(async()=>{g.value=await(await Z({})).data})(),D({showDialog:o,setFormData:async(m=null)=>{if(Object.assign(a,v),d.value=!0,m){const e=await(await ee(m.id)).data;e&&Object.keys(a).forEach(s=>{e[s]!=null&&(a[s]=e[s])})}d.value=!1}}),(m,e)=>{const s=T,w=K,c=Q,O=W,F=X,y=Y,x=$,A=z;return _(),f(x,{modelValue:r(o),"onUpdate:modelValue":e[4]||(e[4]=t=>h(o)?o.value=t:o=t),title:a.id?r(l)("updateOrderAdd"):r(l)("addOrderAdd"),width:"50%",class:"diy-dialog-wrap","destroy-on-close":!0},{footer:i(()=>[j("span",ae,[n(y,{onClick:e[2]||(e[2]=t=>h(o)?o.value=!1:o=!1)},{default:i(()=>[I(V(r(l)("cancel")),1)]),_:1}),n(y,{type:"primary",loading:d.value,onClick:e[3]||(e[3]=t=>k(b.value))},{default:i(()=>[I(V(r(l)("confirm")),1)]),_:1},8,["loading"])])]),default:i(()=>[q((_(),f(F,{model:a,"label-width":"120px",ref_key:"formRef",ref:b,rules:r(L),class:"page-form"},{default:i(()=>[n(c,{label:r(l)("memberId")},{default:i(()=>[n(w,{class:"input-width",modelValue:a.member_id,"onUpdate:modelValue":e[0]||(e[0]=t=>a.member_id=t),clearable:"",placeholder:r(l)("memberIdPlaceholder")},{default:i(()=>[n(s,{label:"请选择",value:""}),(_(!0),N(U,null,S(g.value,(t,B)=>(_(),f(s,{key:B,label:t.nickname,value:t.member_id},null,8,["label","value"]))),128))]),_:1},8,["modelValue","placeholder"])]),_:1},8,["label"]),n(c,{label:r(l)("orderId"),prop:"order_id"},{default:i(()=>[n(O,{modelValue:a.order_id,"onUpdate:modelValue":e[1]||(e[1]=t=>a.order_id=t),clearable:"",placeholder:r(l)("orderIdPlaceholder"),class:"input-width"},null,8,["modelValue","placeholder"])]),_:1},8,["label"])]),_:1},8,["model","rules"])),[[A,d.value]])]),_:1},8,["modelValue","title"])}}});export{he as _};
