import{d as M,r as m,n as v,l as $,q as t,a2 as j,h as g,s as h,w as s,a as q,e as a,i as E,t as k,u as r,R as A,c as K,F as X,T as Y,K as z,L as G,bF as H,ab as J,aC as W,a1 as Z,aS as ee,M as oe,E as te,X as ae,Y as le}from"./index-2a89d409.js";/* empty css                   *//* empty css                  *//* empty css                   *//* empty css                  *//* empty css                *//* empty css                  */import se from"./index-deaeeb3b.js";/* empty css                 *//* empty css               *//* empty css                  *//* empty css                  *//* empty css                     *//* empty css                  *//* empty css                          *//* empty css                    *//* empty css                 */import"./el-form-item-4ed993c7.js";import{e as ne,a as re,f as ie,g as de,h as ue}from"./questions-c0659403.js";const ce={class:"flex items-center"},pe={class:"dialog-footer"},Be=M({__name:"question-edit",emits:["complete"],setup(me,{expose:x,emit:F}){const p=m(!1),u=m(!1),f=m(""),b={category_id:"",category_name:"",image:"",pid:0,is_show:1,child_count:0,level:1},l=v({...b}),V=m(),D=$(()=>({category_id:[{required:!0,message:t("categoryIdPlaceholder"),trigger:"blur"}],category_name:[{required:!0,message:t("categoryNamePlaceholder"),trigger:"blur"}],pid:[{required:!0,message:t("pidPlaceholder"),trigger:"change"}]}));m([]);const P=async i=>{if(u.value||!i)return;const e=l.category_id?ne:re;await i.validate(async d=>{d&&(u.value=!0,e(l).then(c=>{u.value=!1,p.value=!1,F("complete")}).catch(c=>{u.value=!1}))})},w=v([]),T=()=>{de().then(i=>{const e=i.data;if(e){const d=[];e.forEach(n=>{const c=[];n.child_list&&n.child_list.forEach(_=>{c.push({value:_.category_id,label:_.category_name})}),d.push({value:n.category_id,label:n.category_name,children:c})}),y.splice(0,y.length,...d)}}),ue().then(i=>{const e=i.data.data;if(e)for(const d in e)w.push(e[d])})},U=async(i=null)=>{if(Object.assign(l,b),u.value=!0,i){f.value=t("updateQuestion");const e=await(await ie(i.id)).data;console.log(e)}else f.value=t("addQuestion");T(),u.value=!1},y=v([]);return x({showDialog:p,setFormData:U}),(i,e)=>{const d=z,n=G,c=H,_=J,B=W,S=j("CircleClose"),I=Z,N=se,Q=ee,R=oe,C=te,L=ae,O=le;return g(),h(L,{modelValue:p.value,"onUpdate:modelValue":e[7]||(e[7]=o=>p.value=o),title:f.value,width:"480",class:"diy-dialog-wrap","destroy-on-close":!0},{footer:s(()=>[q("span",pe,[a(C,{onClick:e[5]||(e[5]=o=>p.value=!1)},{default:s(()=>[E(k(r(t)("cancel")),1)]),_:1}),a(C,{type:"primary",loading:u.value,onClick:e[6]||(e[6]=o=>P(V.value))},{default:s(()=>[E(k(r(t)("confirm")),1)]),_:1},8,["loading"])])]),default:s(()=>[A((g(),h(R,{model:l,"label-width":"120px",ref_key:"formRef",ref:V,rules:r(D),class:"page-form"},{default:s(()=>[a(n,{label:r(t)("question"),prop:"question_desc"},{default:s(()=>[a(d,{type:"textarea",modelValue:l.question_desc,"onUpdate:modelValue":e[0]||(e[0]=o=>l.question_desc=o),modelModifiers:{trim:!0},clearable:"",placeholder:r(t)("questionPlaceholder"),class:"input-width","show-word-limit":""},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),a(n,{label:r(t)("科目分类"),prop:"category_id"},{default:s(()=>[a(c,{modelValue:l.category_id,"onUpdate:modelValue":e[1]||(e[1]=o=>l.category_id=o),options:y,placeholder:r(t)("goodsCategoryPlaceholder"),clearable:"",props:{value:"value",label:"label",emitPath:!1}},null,8,["modelValue","options","placeholder"])]),_:1},8,["label"]),a(n,{label:r(t)("questions_type"),prop:"questions_type"},{default:s(()=>[a(B,{modelValue:l.questions_type,"onUpdate:modelValue":e[2]||(e[2]=o=>l.questions_type=o),placeholder:r(t)("goodsTypePlaceholder"),clearable:""},{default:s(()=>[(g(!0),K(X,null,Y(w,o=>(g(),h(_,{key:o.type,label:o.type_name,value:o.questions_type},null,8,["label","value"]))),128))]),_:1},8,["modelValue","placeholder"])]),_:1},8,["label"]),a(n,{label:r(t)("options"),prop:"options"},{default:s(()=>[q("span",ce,[a(d),a(I,null,{default:s(()=>[a(S)]),_:1})])]),_:1},8,["label"]),a(n,{label:r(t)("image")},{default:s(()=>[a(N,{modelValue:l.image,"onUpdate:modelValue":e[3]||(e[3]=o=>l.image=o)},null,8,["modelValue"])]),_:1},8,["label"]),a(n,{label:r(t)("isShow"),prop:"is_show"},{default:s(()=>[a(Q,{modelValue:l.is_show,"onUpdate:modelValue":e[4]||(e[4]=o=>l.is_show=o),class:"input-width","active-value":1,"inactive-value":2},null,8,["modelValue"])]),_:1},8,["label"])]),_:1},8,["model","rules"])),[[O,u.value]])]),_:1},8,["modelValue","title"])}}});export{Be as _};
