import{d as P,r as f,n as U,l as B,q as a,h as w,s as V,w as i,a as C,e as n,i as h,t as y,u as r,P as O,bZ as I,J as R,K as T,L as j,E as k,a1 as q,U as K}from"./index-17984968.js";/* empty css                   *//* empty css                  *//* empty css                   *//* empty css                  *//* empty css                */import"./el-form-item-4ed993c7.js";/* empty css                 */import{x as S,y as $,z}from"./member-0ccc6229.js";const J={class:"dialog-footer"},te=P({__name:"edit-label",emits:["complete"],setup(Z,{expose:x,emit:D}){const d=f(!1),s=f(!1),u=f(!1);let c="";const b={label_id:"",label_name:"",memo:"",sort:0},t=U({...b}),_=f(),E=B(()=>({label_name:[{required:!0,message:a("labelNamePlaceholder"),trigger:"blur"}],sort:[{validator:M,trigger:"blur"}]})),M=(m,e,l)=>{e<0?l(new Error(a("sortVerifyOne"))):e.toString().indexOf(".")!=-1?l(new Error(a("sortVerifyTwo"))):l()},L=async m=>{if(s.value||!m)return;const e=t.label_id?S:$;await m.validate(async l=>{if(l){if(s.value=!0,u.value)return;u.value=!0,e(t).then(v=>{s.value=!1,u.value=!1,d.value=!1,D("complete")}).catch(()=>{s.value=!1,u.value=!1})}})};return x({showDialog:d,setFormData:async(m=null)=>{if(s.value=!0,Object.assign(t,b),c=a("addMemberLabel"),m){c=a("updateMemberLabel");const e=await(await z(m.label_id)).data;e&&Object.keys(t).forEach(l=>{e[l]!=null&&(t[l]=e[l])})}s.value=!1}}),(m,e)=>{const l=R,p=T,v=j,g=k,N=q,F=K;return w(),V(N,{modelValue:d.value,"onUpdate:modelValue":e[6]||(e[6]=o=>d.value=o),title:r(c),width:"500px","destroy-on-close":!0},{footer:i(()=>[C("span",J,[n(g,{onClick:e[4]||(e[4]=o=>d.value=!1)},{default:i(()=>[h(y(r(a)("cancel")),1)]),_:1}),n(g,{type:"primary",loading:s.value,onClick:e[5]||(e[5]=o=>L(_.value))},{default:i(()=>[h(y(r(a)("confirm")),1)]),_:1},8,["loading"])])]),default:i(()=>[O((w(),V(v,{model:t,"label-width":"90px",ref_key:"formRef",ref:_,rules:r(E),class:"page-form"},{default:i(()=>[n(p,{label:r(a)("labelName"),prop:"label_name"},{default:i(()=>[n(l,{modelValue:t.label_name,"onUpdate:modelValue":e[0]||(e[0]=o=>t.label_name=o),modelModifiers:{trim:!0},clearable:"",placeholder:r(a)("labelNamePlaceholder"),class:"input-width"},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),n(p,{label:r(a)("memo")},{default:i(()=>[n(l,{modelValue:t.memo,"onUpdate:modelValue":e[1]||(e[1]=o=>t.memo=o),modelModifiers:{trim:!0},type:"textarea",rows:"4",clearable:"",placeholder:r(a)("memoPlaceholder"),class:"input-width",maxlength:"200","show-word-limit":""},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),n(p,{label:r(a)("sort"),prop:"sort"},{default:i(()=>[n(l,{modelValue:t.sort,"onUpdate:modelValue":e[2]||(e[2]=o=>t.sort=o),modelModifiers:{trim:!0},clearable:"",maxlength:"6","show-word-limit":"",placeholder:r(a)("sortPlaceholder"),class:"input-width",onKeyup:e[3]||(e[3]=o=>r(I)(o))},null,8,["modelValue","placeholder"])]),_:1},8,["label"])]),_:1},8,["model","rules"])),[[F,s.value]])]),_:1},8,["modelValue","title"])}}});export{te as _};
