import{d as P,r as u,n as U,l as q,q as o,h as g,s as f,w as r,a as I,e as l,i as w,t as C,u as i,R as O,c as j,F as M,T as S,K as T,L as $,ac as A,aD as K,M as X,E as Y,X as z,Y as G}from"./index-99f00cf3.js";/* empty css                   *//* empty css                  *//* empty css                   *//* empty css                  *//* empty css                */import H from"./index-015c0c3e.js";/* empty css                 *//* empty css               *//* empty css                  *//* empty css                  *//* empty css                     *//* empty css                  */import"./el-form-item-4ed993c7.js";import{e as J,a as Q,g as W,b as Z}from"./recycle_category-02e95fa2.js";/* empty css                        */import"./index.vue_vue_type_style_index_0_lang-2e54ab99.js";import"./attachment-6fc096d0.js";import"./index.vue_vue_type_script_setup_true_lang-a59c79e6.js";/* empty css                      *//* empty css                    */import"./el-tooltip-4ed993c7.js";/* empty css                 *//* empty css               *//* empty css               *//* empty css                    *//* empty css                    */import"./el-dropdown-item-4ed993c7.js";import"./index.vue_vue_type_script_setup_true_lang-bde8c802.js";/* empty css                   */import"./index.vue_vue_type_script_setup_true_lang-49ab6f2c.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./sortable.esm-be94e56d.js";const ee={class:"dialog-footer"},Ie=P({__name:"recycle-category-edit",emits:["complete"],setup(ae,{expose:E,emit:D}){const m=u(!1),s=u(!1),_=u(""),y={category_id:"",category_name:"",image:"",pid:0,is_show:1,child_count:0,level:1,images:""},a=U({...y}),v=u(),F=q(()=>({category_id:[{required:!0,message:o("categoryIdPlaceholder"),trigger:"blur"}],category_name:[{required:!0,message:o("categoryNamePlaceholder"),trigger:"blur"}],pid:[{required:!0,message:o("pidPlaceholder"),trigger:"change"}]})),b=u([]),R=async n=>{if(s.value||!n)return;const e=a.category_id?J:Q;await n.validate(async d=>{d&&(s.value=!0,e(a).then(p=>{s.value=!1,m.value=!1,D("complete")}).catch(p=>{s.value=!1}))})},x=()=>{Z({level:1}).then(n=>{b.value=n.data.data.filter(e=>e.category_id!=a.category_id)})};return E({showDialog:m,setFormData:async(n=null)=>{if(Object.assign(a,y),s.value=!0,n){_.value=o("updateCategory");const e=await(await W(n.category_id)).data;e&&Object.keys(a).forEach(d=>{e[d]!=null&&(a[d]=e[d])})}else _.value=o("addRecycleCategory");x(),s.value=!1}}),(n,e)=>{const d=T,c=$,p=A,k=K,V=H,N=X,h=Y,B=z,L=G;return g(),f(B,{modelValue:m.value,"onUpdate:modelValue":e[6]||(e[6]=t=>m.value=t),title:_.value,width:"480",class:"diy-dialog-wrap","destroy-on-close":!0},{footer:r(()=>[I("span",ee,[l(h,{onClick:e[4]||(e[4]=t=>m.value=!1)},{default:r(()=>[w(C(i(o)("cancel")),1)]),_:1}),l(h,{type:"primary",loading:s.value,onClick:e[5]||(e[5]=t=>R(v.value))},{default:r(()=>[w(C(i(o)("confirm")),1)]),_:1},8,["loading"])])]),default:r(()=>[O((g(),f(N,{model:a,"label-width":"120px",ref_key:"formRef",ref:v,rules:i(F),class:"page-form"},{default:r(()=>[l(c,{label:i(o)("categoryName"),prop:"category_name"},{default:r(()=>[l(d,{modelValue:a.category_name,"onUpdate:modelValue":e[0]||(e[0]=t=>a.category_name=t),modelModifiers:{trim:!0},clearable:"",placeholder:i(o)("categoryNamePlaceholder"),class:"input-width",maxlength:"10","show-word-limit":""},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),l(c,{label:i(o)("pid"),prop:"pid"},{default:r(()=>[l(k,{modelValue:a.pid,"onUpdate:modelValue":e[1]||(e[1]=t=>a.pid=t),clearable:"",disabled:!!a.child_count,placeholder:i(o)("pidPlaceholder"),class:"input-width"},{default:r(()=>[l(p,{label:"顶级分类",value:0}),(g(!0),j(M,null,S(b.value,t=>(g(),f(p,{key:t.category_id,label:t.category_name,value:t.category_id},null,8,["label","value"]))),128))]),_:1},8,["modelValue","disabled","placeholder"])]),_:1},8,["label"]),l(c,{label:i(o)("image")},{default:r(()=>[l(V,{modelValue:a.image,"onUpdate:modelValue":e[2]||(e[2]=t=>a.image=t)},null,8,["modelValue"])]),_:1},8,["label"]),l(c,{label:i(o)("报价上传")},{default:r(()=>[l(V,{modelValue:a.images,"onUpdate:modelValue":e[3]||(e[3]=t=>a.images=t)},null,8,["modelValue"])]),_:1},8,["label"])]),_:1},8,["model","rules"])),[[L,s.value]])]),_:1},8,["modelValue","title"])}}});export{Ie as default};
