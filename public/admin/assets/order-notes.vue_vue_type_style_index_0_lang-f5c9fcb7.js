import{d as R,r as m,n as B,l as C,h as v,s as g,w as s,a as N,e as n,i as y,t as k,u as i,q as d,R as b,K as I,L,M,E as S,X as U,Y as $}from"./index-5a756a51.js";/* empty css                   *//* empty css                  *//* empty css                   *//* empty css                  *//* empty css                */import"./el-form-item-4ed993c7.js";/* empty css                 */import{r as j}from"./order-dc33c81d.js";const q={class:"dialog-footer"},Q=R({__name:"order-notes",emits:["complete"],setup(K,{expose:h,emit:V}){const l=m(!1),o=m(!1),u={order_id:0,shop_remark:""},t=B({...u}),p=m(),w=C(()=>({})),x=async a=>{o.value||!a||await a.validate(async e=>{e&&(o.value=!0,j(t).then(c=>{o.value=!1,l.value=!1,V("complete")}).catch(()=>{o.value=!1}))})};return h({showDialog:l,setFormData:async(a=null)=>{Object.assign(t,u),o.value=!0,a&&(t.order_id=a.order_id,t.shop_remark=a.shop_remark),o.value=!1}}),(a,e)=>{const _=I,c=L,D=M,f=S,E=U,F=$;return v(),g(E,{modelValue:l.value,"onUpdate:modelValue":e[3]||(e[3]=r=>l.value=r),title:i(d)("notes"),width:"460px",class:"diy-dialog-wrap","destroy-on-close":!0},{footer:s(()=>[N("span",q,[n(f,{onClick:e[1]||(e[1]=r=>l.value=!1)},{default:s(()=>[y(k(i(d)("cancel")),1)]),_:1}),n(f,{type:"primary",loading:o.value,onClick:e[2]||(e[2]=r=>x(p.value))},{default:s(()=>[y(k(i(d)("confirm")),1)]),_:1},8,["loading"])])]),default:s(()=>[b((v(),g(D,{model:t,ref_key:"formRef",ref:p,rules:i(w),class:"page-form notes-form"},{default:s(()=>[n(c,{class:"mb-0"},{default:s(()=>[n(_,{modelValue:t.shop_remark,"onUpdate:modelValue":e[0]||(e[0]=r=>t.shop_remark=r),modelModifiers:{trim:!0},rows:5,type:"textarea",maxlength:"200","show-word-limit":""},null,8,["modelValue"])]),_:1})]),_:1},8,["model","rules"])),[[F,o.value]])]),_:1},8,["modelValue","title"])}}});export{Q as _};
