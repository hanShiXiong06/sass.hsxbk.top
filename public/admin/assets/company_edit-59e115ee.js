import{d as H,x as O,f as Q,r as f,n as Y,l as G,q as e,h as z,c as J,e as o,w as r,u as l,R as x,s as W,a as s,t as d,b_ as X,i as g,a0 as w,v as C,aQ as Z,a7 as ee,K as te,L as le,aS as ae,ac as oe,E as pe,ad as ne,M as re,Y as ie}from"./index-37fee5a0.js";/* empty css                   *//* empty css                *//* empty css                 *//* empty css                    */import"./el-tooltip-4ed993c7.js";/* empty css                  *//* empty css                     *//* empty css                  *//* empty css                        *//* empty css               *//* empty css                  */import se from"./index-75241224.js";import"./el-form-item-4ed993c7.js";/* empty css                 *//* empty css                *//* empty css                   *//* empty css                       */import{a as me,e as de,b as ue}from"./delivery-f416965b.js";/* empty css                        */import"./index.vue_vue_type_style_index_0_lang-9e528ade.js";/* empty css                  *//* empty css                   */import"./attachment-78567e2f.js";import"./index.vue_vue_type_script_setup_true_lang-1f515813.js";/* empty css                  *//* empty css                  *//* empty css                      *//* empty css                 *//* empty css               *//* empty css               *//* empty css                    *//* empty css                    */import"./el-dropdown-item-4ed993c7.js";import"./index.vue_vue_type_script_setup_true_lang-a7856b99.js";/* empty css                   */import"./index.vue_vue_type_script_setup_true_lang-165de32d.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./sortable.esm-be94e56d.js";const _e={class:"main-container"},ce={class:"w-[380px] text-[12px] text-[#999] mt-[5px] leading-[20px]"},xe={class:"w-[380px] text-[12px] text-[#999] mt-[5px] leading-[20px]"},he={class:"w-[600px]"},ye={class:"text-[12px] text-[#999] mt-[5px] leading-[20px]"},fe={class:"ml-[3px] text-[var(--el-color-primary)]",target:"_blank",href:"https://www.yuque.com/kdnjishuzhichi/dfcrg1/hgx758hom5p6wz0l"},ge={class:"text-[12px] text-[#999] mt-[3px] leading-[20px]"},we={class:"w-[600px]"},be={class:"text-[12px] text-[#999] mt-[5px] leading-[20px]"},Ve={class:"ml-[3px] text-[var(--el-color-primary)]",target:"_blank",href:"https://www.yuque.com/kdnjishuzhichi/dfcrg1/vpptucr1q5ahcxa7"},ve={class:"text-[12px] text-[#999] mt-[3px] leading-[20px]"},Te={class:"text-[12px] text-[#999] mt-[3px] leading-[20px]"},Ee={class:"fixed-footer-wrap"},Se={class:"fixed-footer"},_t=H({__name:"company_edit",setup(ze){const v=O(),T=Q();v.meta.title;const V=f(!0),N={company_id:"",company_name:"",logo:"",url:"",express_no:"",express_no_electronic_sheet:"",print_style:[],exp_type:[],electronic_sheet_switch:1},k=f(10),U=f(10),a=Y({...N});a.company_id=f(v.query.company_id);const M=()=>{me(a.company_id).then(u=>{V.value=!1;let t=u.data;t&&Object.keys(a).forEach(i=>{t[i]!=null&&(a[i]=t[i])})})};a.company_id?M():V.value=!1;const E=f(),R=G(()=>({company_name:[{required:!0,message:e("companyNamePlaceholder"),trigger:"blur"}],exp_type:[{trigger:"blur",validator:(u,t,i)=>{if(!t.length)return i(),!1;let c=[],m=[];for(let n=0;n<t.length;n++){if(t[n].text)t[n].text&&c.push(t[n].text);else{i(new Error(e("expTypeTextTips")));break}if(t[n].value)if(parseFloat(t[n].value)==0){i(new Error(e("expTypeValueNullTips")));break}else t[n].value&&m.push(t[n].value);else{i(new Error(e("expTypeValueTips")));break}}new Set(c).size!==c.length&&i(new Error(e("expTypeTextRepeatTips"))),new Set(m).size!==m.length&&i(new Error(e("expTypeValueRepeatTips"))),i()}}],print_style:[{trigger:"blur",validator:(u,t,i)=>{if(!t.length)return i(),!1;let c=[],m=[];for(let n=0;n<t.length;n++){if(t[n].template_name)t[n].template_name&&c.push(t[n].template_name);else{i(new Error(e("printStyleNameTips")));break}if(t[n].template_size)t[n].template_size&&m.push(t[n].template_size);else{i(new Error(e("printStyleSizeTips")));break}}new Set(c).size!==c.length&&i(new Error(e("printStyleNameRepeatTips"))),new Set(m).size!==m.length&&i(new Error(e("printStyleSizeRepeatTips"))),i()}}]})),P=()=>{a.print_style.push({template_name:"",template_size:""})},q=()=>{a.exp_type.push({text:"",value:""})},B=u=>{a.print_style.splice(u,1)},D=u=>{a.exp_type.splice(u,1)},b=f(!1),$=async u=>{if(b.value||!u)return;const t=a.company_id?de:ue;await u.validate(async i=>{i&&(b.value=!0,t(a).then(m=>{T.push("/phone_shop/order/delivery/company"),b.value=!1}).catch(()=>{b.value=!1}))})},A=()=>{T.push("/phone_shop/order/delivery/company")};return(u,t)=>{const i=Z,c=ee,m=te,n=le,F=se,I=ae,h=oe,y=pe,S=ne,L=re,j=ie;return z(),J("div",_e,[o(c,{class:"box-card !border-none",shadow:"never"},{default:r(()=>[o(i,{content:a.company_id?l(e)("updateCompany"):l(e)("addCompany"),icon:u.ArrowLeft,onBack:t[0]||(t[0]=p=>u.$router.back())},null,8,["content","icon"])]),_:1}),o(c,{class:"box-card mt-[15px] !border-none",shadow:"never"},{default:r(()=>[x((z(),W(L,{model:a,"label-width":"130px",ref_key:"formRef",ref:E,rules:l(R),class:"page-form"},{default:r(()=>[o(n,{label:l(e)("companyName"),prop:"company_name"},{default:r(()=>[o(m,{modelValue:a.company_name,"onUpdate:modelValue":t[1]||(t[1]=p=>a.company_name=p),modelModifiers:{trim:!0},maxlength:"20",clearable:"",placeholder:l(e)("companyNamePlaceholder"),class:"input-width"},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),o(n,{label:l(e)("logo")},{default:r(()=>[o(F,{modelValue:a.logo,"onUpdate:modelValue":t[2]||(t[2]=p=>a.logo=p)},null,8,["modelValue"])]),_:1},8,["label"]),o(n,{label:l(e)("url")},{default:r(()=>[o(m,{modelValue:a.url,"onUpdate:modelValue":t[3]||(t[3]=p=>a.url=p),modelModifiers:{trim:!0},clearable:"",placeholder:l(e)("urlPlaceholder"),class:"input-width"},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),o(n,{label:l(e)("expressNo")},{default:r(()=>[s("div",null,[o(m,{modelValue:a.express_no,"onUpdate:modelValue":t[4]||(t[4]=p=>a.express_no=p),modelModifiers:{trim:!0},clearable:"",placeholder:l(e)("expressNoPlaceholder"),class:"input-width"},null,8,["modelValue","placeholder"]),s("p",ce,d(l(e)("expressNoTips")),1)])]),_:1},8,["label"]),o(n,{label:l(e)("expressNoElectronicSheet")},{default:r(()=>[s("div",null,[o(m,{modelValue:a.express_no_electronic_sheet,"onUpdate:modelValue":t[5]||(t[5]=p=>a.express_no_electronic_sheet=p),modelModifiers:{trim:!0},clearable:"",placeholder:l(e)("expressNoPlaceholder"),class:"input-width"},null,8,["modelValue","placeholder"]),s("p",xe,d(l(e)("expressNoElectronicSheetTips")),1)])]),_:1},8,["label"]),o(n,{label:l(e)("electronicSheetSwitch")},{default:r(()=>[o(I,{modelValue:a.electronic_sheet_switch,"onUpdate:modelValue":t[6]||(t[6]=p=>a.electronic_sheet_switch=p),"active-value":1,"inactive-value":0},null,8,["modelValue"])]),_:1},8,["label"]),x(o(n,{label:l(e)("expType"),prop:"exp_type"},{default:r(()=>[s("div",he,[x(o(S,{data:a.exp_type,size:"large"},{empty:r(()=>[s("span",null,d(a.exp_type.length==0?l(e)("emptyData"):""),1)]),default:r(()=>[o(h,{prop:"name",label:l(e)("expTypeName"),"min-width":"200"},{default:r(({row:p})=>[o(m,{modelValue:p.text,"onUpdate:modelValue":_=>p.text=_,modelModifiers:{trim:!0},class:"input-width",maxlength:"20",clearable:"","show-word-limit":""},null,8,["modelValue","onUpdate:modelValue"])]),_:1},8,["label"]),o(h,{prop:"name",label:l(e)("expTypeValue"),"min-width":"120"},{default:r(({row:p})=>[o(m,{modelValue:p.value,"onUpdate:modelValue":_=>p.value=_,modelModifiers:{trim:!0},class:"!w-[150px]",maxlength:"6",clearable:"","show-word-limit":"",onKeyup:t[7]||(t[7]=_=>l(X)(_))},null,8,["modelValue","onUpdate:modelValue"])]),_:1},8,["label"]),o(h,{label:l(e)("operation"),fixed:"right",align:"right","min-width":"60"},{default:r(({row:p,$index:_})=>[o(y,{type:"primary",link:"",onClick:K=>D(_)},{default:r(()=>[g(d(l(e)("delete")),1)]),_:2},1032,["onClick"])]),_:1},8,["label"])]),_:1},8,["data"]),[[w,a.exp_type.length]]),x(o(y,{type:"primary",plain:"",onClick:q,class:C({"mt-[10px]":a.exp_type.length})},{default:r(()=>[g(d(l(e)("addExpType")),1)]),_:1},8,["class"]),[[w,a.exp_type.length<U.value]]),s("div",ye,[s("span",null,d(l(e)("expTypeTips")),1),s("a",fe,d(l(e)("examine")),1)]),s("p",ge,d(l(e)("expTypeTips1")),1)])]),_:1},8,["label"]),[[w,a.electronic_sheet_switch]]),x(o(n,{label:l(e)("printStyle"),prop:"print_style"},{default:r(()=>[s("div",we,[x(o(S,{data:a.print_style,size:"large"},{empty:r(()=>[s("span",null,d(a.print_style.length==0?l(e)("emptyData"):""),1)]),default:r(()=>[o(h,{prop:"name",label:l(e)("printStyleName"),"min-width":"200"},{default:r(({row:p})=>[o(m,{modelValue:p.template_name,"onUpdate:modelValue":_=>p.template_name=_,modelModifiers:{trim:!0},class:"input-width",maxlength:"20",clearable:"","show-word-limit":""},null,8,["modelValue","onUpdate:modelValue"])]),_:1},8,["label"]),o(h,{prop:"name",label:l(e)("printStyleId"),"min-width":"120"},{default:r(({row:p})=>[o(m,{modelValue:p.template_size,"onUpdate:modelValue":_=>p.template_size=_,modelModifiers:{trim:!0},class:"!w-[150px]",maxlength:"6",clearable:"","show-word-limit":""},null,8,["modelValue","onUpdate:modelValue"])]),_:1},8,["label"]),o(h,{label:l(e)("operation"),fixed:"right",align:"right","min-width":"60"},{default:r(({row:p,$index:_})=>[o(y,{type:"primary",link:"",onClick:K=>B(_)},{default:r(()=>[g(d(l(e)("delete")),1)]),_:2},1032,["onClick"])]),_:1},8,["label"])]),_:1},8,["data"]),[[w,a.print_style.length]]),x(o(y,{type:"primary",plain:"",onClick:P,class:C({"mt-[10px]":a.print_style.length})},{default:r(()=>[g(d(l(e)("addPrintStyle")),1)]),_:1},8,["class"]),[[w,a.print_style.length<k.value]]),s("div",be,[s("span",null,d(l(e)("printStyleTips")),1),s("a",Ve,d(l(e)("examine")),1)]),s("p",ve,d(l(e)("printStyleTips1")),1),s("p",Te,d(l(e)("printStyleTips2")),1)])]),_:1},8,["label"]),[[w,a.electronic_sheet_switch]])]),_:1},8,["model","rules"])),[[j,V.value]])]),_:1}),s("div",Ee,[s("div",Se,[o(y,{type:"primary",onClick:t[8]||(t[8]=p=>$(E.value))},{default:r(()=>[g(d(l(e)("save")),1)]),_:1}),o(y,{onClick:t[9]||(t[9]=p=>A())},{default:r(()=>[g(d(l(e)("back")),1)]),_:1})])])])}}});export{_t as default};
