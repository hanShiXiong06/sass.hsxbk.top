import{d as U,r as m,n as q,l as I,q as l,h as _,s as f,w as r,a as R,e as o,i as w,t as V,u as s,R as O,c as j,F as M,T,K as $,L as A,ab as K,aC as X,aS as Y,M as z,E as G,X as H,Y as J}from"./index-6f32d09b.js";/* empty css                   *//* empty css                  *//* empty css                   *//* empty css                  *//* empty css                *//* empty css                  */import Q from"./index-4df26bee.js";/* empty css                 *//* empty css               *//* empty css                  *//* empty css                  *//* empty css                     *//* empty css                  */import"./el-form-item-4ed993c7.js";import{e as W,a as Z,b as ee,c as ae}from"./questions-787dde7b.js";const te={class:"dialog-footer"},we=U({__name:"category-edit",emits:["complete"],setup(le,{expose:C,emit:E}){const u=m(!1),i=m(!1),g=m(""),v={category_id:"",category_name:"",image:"",pid:0,is_show:1,child_count:0,level:1},a=q({...v}),y=m(),D=I(()=>({category_id:[{required:!0,message:l("categoryIdPlaceholder"),trigger:"blur"}],category_name:[{required:!0,message:l("categoryNamePlaceholder"),trigger:"blur"}],pid:[{required:!0,message:l("pidPlaceholder"),trigger:"change"}]})),b=m([]),F=async n=>{if(i.value||!n)return;const e=a.category_id?W:Z;await n.validate(async d=>{d&&(i.value=!0,e(a).then(p=>{i.value=!1,u.value=!1,E("complete")}).catch(p=>{i.value=!1}))})},x=()=>{ae({level:1}).then(n=>{b.value=n.data.filter(e=>e.category_id!=a.category_id)})};return C({showDialog:u,setFormData:async(n=null)=>{if(Object.assign(a,v),i.value=!0,n){g.value=l("updateCategory");const e=await(await ee(n.category_id)).data;e&&Object.keys(a).forEach(d=>{e[d]!=null&&(a[d]=e[d])})}else g.value=l("addCategory");x(),i.value=!1}}),(n,e)=>{const d=$,c=A,p=K,k=X,N=Q,B=Y,L=z,h=G,P=H,S=J;return _(),f(P,{modelValue:u.value,"onUpdate:modelValue":e[6]||(e[6]=t=>u.value=t),title:g.value,width:"480",class:"diy-dialog-wrap","destroy-on-close":!0},{footer:r(()=>[R("span",te,[o(h,{onClick:e[4]||(e[4]=t=>u.value=!1)},{default:r(()=>[w(V(s(l)("cancel")),1)]),_:1}),o(h,{type:"primary",loading:i.value,onClick:e[5]||(e[5]=t=>F(y.value))},{default:r(()=>[w(V(s(l)("confirm")),1)]),_:1},8,["loading"])])]),default:r(()=>[O((_(),f(L,{model:a,"label-width":"120px",ref_key:"formRef",ref:y,rules:s(D),class:"page-form"},{default:r(()=>[o(c,{label:s(l)("categoryName"),prop:"category_name"},{default:r(()=>[o(d,{modelValue:a.category_name,"onUpdate:modelValue":e[0]||(e[0]=t=>a.category_name=t),modelModifiers:{trim:!0},clearable:"",placeholder:s(l)("categoryNamePlaceholder"),class:"input-width",maxlength:"20","show-word-limit":""},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),o(c,{label:s(l)("pid"),prop:"pid"},{default:r(()=>[o(k,{modelValue:a.pid,"onUpdate:modelValue":e[1]||(e[1]=t=>a.pid=t),clearable:"",disabled:!!a.child_count,placeholder:s(l)("pidPlaceholder"),class:"input-width"},{default:r(()=>[o(p,{label:"顶级分类",value:0}),(_(!0),j(M,null,T(b.value,t=>(_(),f(p,{key:t.category_id,label:t.category_name,value:t.category_id},null,8,["label","value"]))),128))]),_:1},8,["modelValue","disabled","placeholder"])]),_:1},8,["label"]),o(c,{label:s(l)("image")},{default:r(()=>[o(N,{modelValue:a.image,"onUpdate:modelValue":e[2]||(e[2]=t=>a.image=t)},null,8,["modelValue"])]),_:1},8,["label"]),o(c,{label:s(l)("isShow"),prop:"is_show"},{default:r(()=>[o(B,{modelValue:a.is_show,"onUpdate:modelValue":e[3]||(e[3]=t=>a.is_show=t),class:"input-width","active-value":1,"inactive-value":2},null,8,["modelValue"])]),_:1},8,["label"])]),_:1},8,["model","rules"])),[[S,i.value]])]),_:1},8,["modelValue","title"])}}});export{we as _};
