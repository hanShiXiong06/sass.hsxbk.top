import{d as U,r as u,n as k,l as B,q as a,h as x,s as V,w as m,a as c,e as r,i as b,t as _,u as l,R as M,K as P,L as R,M as I,E as j,X as q,Y as L}from"./index-6f32d09b.js";/* empty css                   *//* empty css                  *//* empty css                   *//* empty css                  *//* empty css                */import O from"./index-4df26bee.js";import"./el-form-item-4ed993c7.js";/* empty css                 */import{e as T,b as $,a as K}from"./delivery-346280b9.js";/* empty css                        */import"./index.vue_vue_type_style_index_0_lang-972988e5.js";import"./attachment-503e95ee.js";import"./index.vue_vue_type_script_setup_true_lang-bee7eaa7.js";/* empty css               *//* empty css                  *//* empty css                  *//* empty css                     *//* empty css                  *//* empty css                      *//* empty css                    */import"./el-tooltip-4ed993c7.js";/* empty css                 *//* empty css               *//* empty css               *//* empty css                    *//* empty css                    */import"./el-dropdown-item-4ed993c7.js";import"./index.vue_vue_type_script_setup_true_lang-ad575143.js";/* empty css                   */import"./index.vue_vue_type_script_setup_true_lang-0724e2f9.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./sortable.esm-be94e56d.js";const S={class:"input-width text-[12px] text-[#999] mt-[5px] leading-[20px]"},X={class:"dialog-footer"},De=U({__name:"company-edit",emits:["complete"],setup(Y,{expose:w,emit:h}){const p=u(!1),i=u(!1),f={company_id:"",company_name:"",logo:"",url:"",express_no:""},o=k({...f}),y=u(),C=B(()=>({company_name:[{required:!0,message:a("companyNamePlaceholder"),trigger:"blur"}]})),N=async s=>{if(i.value||!s)return;const e=o.company_id?T:$;await s.validate(async n=>{n&&(i.value=!0,e(o).then(g=>{i.value=!1,p.value=!1,h("complete")}).catch(()=>{i.value=!1}))})};return w({showDialog:p,setFormData:async(s=null)=>{if(Object.assign(o,f),i.value=!0,s){const e=await(await K(s.company_id)).data;e&&Object.keys(o).forEach(n=>{e[n]!=null&&(o[n]=e[n])})}i.value=!1}}),(s,e)=>{const n=P,d=R,g=O,D=I,v=j,E=q,F=L;return x(),V(E,{modelValue:p.value,"onUpdate:modelValue":e[6]||(e[6]=t=>p.value=t),title:o.company_id?l(a)("updateCompany"):l(a)("addCompany"),width:"500px",class:"diy-dialog-wrap","destroy-on-close":!0},{footer:m(()=>[c("span",X,[r(v,{onClick:e[4]||(e[4]=t=>p.value=!1)},{default:m(()=>[b(_(l(a)("cancel")),1)]),_:1}),r(v,{type:"primary",loading:i.value,onClick:e[5]||(e[5]=t=>N(y.value))},{default:m(()=>[b(_(l(a)("confirm")),1)]),_:1},8,["loading"])])]),default:m(()=>[M((x(),V(D,{model:o,"label-width":"120px",ref_key:"formRef",ref:y,rules:l(C),class:"page-form"},{default:m(()=>[r(d,{label:l(a)("companyName"),prop:"company_name"},{default:m(()=>[r(n,{modelValue:o.company_name,"onUpdate:modelValue":e[0]||(e[0]=t=>o.company_name=t),modelModifiers:{trim:!0},clearable:"",placeholder:l(a)("companyNamePlaceholder"),class:"input-width"},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),r(d,{label:l(a)("logo")},{default:m(()=>[r(g,{modelValue:o.logo,"onUpdate:modelValue":e[1]||(e[1]=t=>o.logo=t)},null,8,["modelValue"])]),_:1},8,["label"]),r(d,{label:l(a)("url")},{default:m(()=>[r(n,{modelValue:o.url,"onUpdate:modelValue":e[2]||(e[2]=t=>o.url=t),modelModifiers:{trim:!0},clearable:"",placeholder:l(a)("urlPlaceholder"),class:"input-width"},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),r(d,{label:l(a)("expressNo")},{default:m(()=>[c("div",null,[r(n,{modelValue:o.express_no,"onUpdate:modelValue":e[3]||(e[3]=t=>o.express_no=t),modelModifiers:{trim:!0},clearable:"",placeholder:l(a)("expressNoPlaceholder"),class:"input-width"},null,8,["modelValue","placeholder"]),c("p",S,_(l(a)("expressNoTips")),1)])]),_:1},8,["label"])]),_:1},8,["model","rules"])),[[F,i.value]])]),_:1},8,["modelValue","title"])}}});export{De as default};
