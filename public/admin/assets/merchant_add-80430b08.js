import{d as C,x as D,f as M,r as g,c5 as F,n as $,l as q,h,c as I,e as t,w as n,u as i,aP as L,R as O,s as T,a as b,i as w,t as x,q as V,aQ as U,a7 as P,K as G,L as H,M as J,E as K,Y as Q}from"./index-6f32d09b.js";/* empty css                   *//* empty css                  *//* empty css                */import Y from"./index-4df26bee.js";import"./el-form-item-4ed993c7.js";/* empty css                 *//* empty css                *//* empty css                   *//* empty css                       */import{e as j,a as z}from"./merchant-0c76a0d7.js";/* empty css                        */import"./index.vue_vue_type_style_index_0_lang-972988e5.js";/* empty css                  *//* empty css                   */import"./attachment-503e95ee.js";import"./index.vue_vue_type_script_setup_true_lang-bee7eaa7.js";/* empty css               *//* empty css                  *//* empty css                  *//* empty css                     *//* empty css                  *//* empty css                      *//* empty css                    */import"./el-tooltip-4ed993c7.js";/* empty css                 *//* empty css               *//* empty css               *//* empty css                    *//* empty css                    */import"./el-dropdown-item-4ed993c7.js";import"./index.vue_vue_type_script_setup_true_lang-ad575143.js";/* empty css                   */import"./index.vue_vue_type_script_setup_true_lang-0724e2f9.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./sortable.esm-be94e56d.js";const A={class:"main-container"},W={class:"fixed-footer-wrap"},X={class:"fixed-footer"},Oe=C({__name:"merchant_add",setup(Z){const s=D(),y=M(),l=g(!1),k=F();let c=s.meta.title;const e=$({...{name:"",mch_id:"",logo:"",id:""}}),u=g();if((Number(s.query.merchant_id)||0)>0){const a=JSON.parse(localStorage.getItem("seafoxpay_row"));console.log(a),e.id=a.id,e.name=a.name,e.logo=a.logo,e.mch_id=a.mch_id,c="编辑商户"}const E=q(()=>({name:[{required:!0,message:"请输入商家名称",trigger:"blur"}]})),N=async a=>{l.value||!a||await a.validate(async o=>{o&&(l.value=!0,Number(e.id)>0?j(e).then(d=>{l.value=!1,m()}).catch(()=>{l.value=!1}):z(e).then(d=>{l.value=!1,m()}).catch(()=>{l.value=!1}))})},m=()=>{k.removeTab(s.path),y.push({path:"/seafoxpay/merchant/merchant"})};return(a,o)=>{const d=U,_=P,f=G,p=H,B=Y,R=J,v=K,S=Q;return h(),I("div",A,[t(_,{class:"card !border-none",shadow:"never"},{default:n(()=>[t(d,{content:i(c),icon:i(L),onBack:o[0]||(o[0]=r=>a.$router.back())},null,8,["content","icon"])]),_:1}),O((h(),T(_,{class:"box-card mt-[15px] !border-none",shadow:"never"},{default:n(()=>[t(R,{model:e,"label-width":"90px",ref_key:"formRef",ref:u,rules:i(E),class:"page-form"},{default:n(()=>[t(p,{label:"商家名称"},{default:n(()=>[t(f,{modelValue:e.name,"onUpdate:modelValue":o[1]||(o[1]=r=>e.name=r),modelModifiers:{trim:!0},class:"input-width"},null,8,["modelValue"])]),_:1}),t(p,{label:"商家号"},{default:n(()=>[t(f,{modelValue:e.mch_id,"onUpdate:modelValue":o[2]||(o[2]=r=>e.mch_id=r),modelModifiers:{trim:!0},class:"input-width"},null,8,["modelValue"])]),_:1}),t(p,{label:"LOGO",prop:"logo"},{default:n(()=>[t(B,{modelValue:e.logo,"onUpdate:modelValue":o[3]||(o[3]=r=>e.logo=r)},null,8,["modelValue"])]),_:1})]),_:1},8,["model","rules"])]),_:1})),[[S,l.value]]),b("div",W,[b("div",X,[t(v,{type:"primary",onClick:o[4]||(o[4]=r=>N(u.value))},{default:n(()=>[w(x(i(V)("save")),1)]),_:1}),t(v,{onClick:o[5]||(o[5]=r=>m())},{default:n(()=>[w(x(i(V)("cancel")),1)]),_:1})])])])}}});export{Oe as default};
