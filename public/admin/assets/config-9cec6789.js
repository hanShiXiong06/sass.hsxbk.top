import{d as P,x as M,r as h,l as W,a2 as Y,R as G,h as a,c,e as o,w as i,a as e,t as v,u as s,s as L,F as x,T as U,A as H,B as V,q as p,i as E,cV as J,cW as K,L as O,a1 as Q,E as X,M as Z,a7 as ee,Y as te,p as oe,g as se}from"./index-a3bdc7eb.js";/* empty css                   *//* empty css                *//* empty css                *//* empty css                  */import{_ as le}from"./index.vue_vue_type_style_index_0_lang-06408dae.js";import"./el-form-item-4ed993c7.js";import ae from"./index-a76a08b7.js";/* empty css                         */import{l as ie,m as re}from"./marketing-1a74f24b.js";import{_ as ne}from"./_plugin-vue_export-helper-c27b6911.js";/* empty css                  *//* empty css                   *//* empty css                     *//* empty css                 */import"./diy-5584e40d.js";/* empty css                        */import"./index.vue_vue_type_style_index_0_lang-56f89855.js";import"./attachment-00d8a467.js";import"./index.vue_vue_type_script_setup_true_lang-58bfacba.js";/* empty css               *//* empty css                  *//* empty css                  *//* empty css                  *//* empty css                      *//* empty css                    */import"./el-tooltip-4ed993c7.js";/* empty css                 *//* empty css               *//* empty css               *//* empty css                    *//* empty css                    */import"./el-dropdown-item-4ed993c7.js";import"./index.vue_vue_type_script_setup_true_lang-d51e8a6d.js";/* empty css                   */import"./index.vue_vue_type_script_setup_true_lang-d42256f5.js";import"./sortable.esm-be94e56d.js";const ce=""+new URL("discount_config-529ffddb.png",import.meta.url).href,pe=""+new URL("discount_banner-7034cc02.png",import.meta.url).href,me=u=>(oe("data-v-28f615f4"),u=u(),se(),u),de={class:"main-container"},_e={class:"flex justify-between items-center"},ue={class:"text-page-title"},fe={class:"flex mt-[20px]"},ve={class:"relative overflow-hidden w-[340px] h-[680px] z-0 bg-[#f5f5f5]"},ge=me(()=>e("img",{class:"absolute top-0 left-0 z-10 pointer-events-none",src:ce},null,-1)),he={class:"absolute top-0 left-0 w-[340px]"},xe={key:0,class:"w-full h-[256px]",src:pe},be=["src"],we={class:"ml-[20px]"},Ce={class:"panel-title !text-sm"},ke=["onClick"],ye={class:"flex w-full justify-center"},Le={class:"fixed-footer-wrap"},Ue={class:"fixed-footer"},Ve=P({__name:"config",setup(u){const F=M().meta.title,r=h(!1),I=W(()=>l.value.list.every(t=>t.imageUrl=="")),l=h({list:[{imageUrl:"",toLink:{name:""}}]}),b=h(),w=()=>{r.value=!0,ie().then(t=>{t.data.length&&(l.value.list=t.data),r.value=!1}).catch(()=>{r.value=!1})};w();const B=()=>{l.value.list.push({imageUrl:"",toLink:{name:""}})},D=t=>{l.value.list.splice(t,1)},R=async t=>{r.value||!t||await t.validate(async f=>{f&&(r.value=!0,re(l.value).then(C=>{r.value=!1,w()}).catch(()=>{r.value=!1}))})};return(t,f)=>{const C=J,S=K,N=ae,k=O,$=le,A=Y("CircleCloseFilled"),q=Q,y=X,z=Z,T=ee,j=te;return G((a(),c("div",de,[o(T,{class:"box-card !border-none",shadow:"never"},{default:i(()=>[e("div",_e,[e("span",ue,v(s(F)),1)]),e("div",fe,[e("div",ve,[ge,e("div",he,[s(I)?(a(),c("img",xe)):(a(),L(S,{key:1,height:"256px",arrow:"never"},{default:i(()=>[(a(!0),c(x,null,U(l.value.list,(n,m)=>(a(),c(x,{key:"img"+m},[n.imageUrl?(a(),L(C,{key:0},{default:i(()=>[e("img",{class:"w-full h-full",src:s(H)(n.imageUrl)},null,8,be)]),_:2},1024)):V("",!0)],64))),128))]),_:1}))])]),e("div",we,[e("h3",Ce,v(s(p)("headTitle")),1),o(z,{class:"page-form",model:l.value,"label-width":"120px",ref_key:"formRef",ref:b},{default:i(()=>[(a(!0),c(x,null,U(l.value.list,(n,m)=>(a(),c("div",{class:"border-[1px] border-[var(--el-border-color)] border-dashed w-[500px] pt-[15px] mb-[15px] relative item",key:m},[o(k,{label:s(p)("image"),prop:`list.${m}.imageUrl`,rules:[{required:!0,trigger:"change",validator:(d,g,_)=>{g||_(s(p)("imagePlaceholder")),_()}}]},{default:i(()=>[o(N,{modelValue:n.imageUrl,"onUpdate:modelValue":d=>n.imageUrl=d,limit:1},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1032,["label","prop","rules"]),o(k,{label:s(p)("toLink"),prop:`list.${m}.toLink.name`,rules:[{required:!0,trigger:"change",validator:(d,g,_)=>{g||_(s(p)("toLinkPlaceholder")),_()}}]},{default:i(()=>[o($,{modelValue:n.toLink,"onUpdate:modelValue":d=>n.toLink=d},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1032,["label","prop","rules"]),l.value.list.length>1?(a(),c("span",{key:0,class:"cursor-pointer absolute top-[-8px] right-[-8px] delete",onClick:d=>D(m)},[o(q,{color:"#bbbbbb",size:"20px"},{default:i(()=>[o(A)]),_:1})],8,ke)):V("",!0)]))),128)),e("div",ye,[o(y,{class:"w-[400px]",onClick:B},{default:i(()=>[E(v(s(p)("addConfigList")),1)]),_:1})])]),_:1},8,["model"])])])]),_:1}),e("div",Le,[e("div",Ue,[o(y,{type:"primary",onClick:f[0]||(f[0]=n=>R(b.value))},{default:i(()=>[E(v(s(p)("save")),1)]),_:1})])])])),[[j,r.value]])}}});const dt=ne(Ve,[["__scopeId","data-v-28f615f4"]]);export{dt as default};
