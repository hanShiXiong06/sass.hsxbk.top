import{d as E,x as B,r as b,n as C,l as R,h as v,c as S,R as k,s as y,w as r,e as a,a as i,t as n,u as t,q as o,i as F,a3 as M,av as T,L,aS as N,a7 as P,K as A,M as I,E as Y,Y as j}from"./index-2a89d409.js";/* empty css                   *//* empty css                  *//* empty css                *//* empty css                 */import q from"./index-deaeeb3b.js";/* empty css                *//* empty css                  */import"./el-form-item-4ed993c7.js";/* empty css                    */import{Y as K,Z as O}from"./member-9ec97019.js";/* empty css                        */import"./index.vue_vue_type_style_index_0_lang-5224d015.js";/* empty css                  *//* empty css                   */import"./attachment-851184b5.js";import"./index.vue_vue_type_script_setup_true_lang-bee04220.js";/* empty css               *//* empty css                  *//* empty css                  *//* empty css                     *//* empty css                  *//* empty css                      */import"./el-tooltip-4ed993c7.js";/* empty css                 *//* empty css               *//* empty css               *//* empty css                    *//* empty css                    */import"./el-dropdown-item-4ed993c7.js";import"./index.vue_vue_type_script_setup_true_lang-f1303253.js";/* empty css                   */import"./index.vue_vue_type_script_setup_true_lang-4e818418.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./sortable.esm-be94e56d.js";const Z={class:"main-container"},$={class:"panel-title !text-sm"},z={class:"form-tip mb-[10px]"},G={class:"form-tip"},H={class:"form-tip"},J={class:"form-tip"},Q={class:"panel-title !text-sm"},W={class:"form-tip"},X={class:"panel-title !text-sm"},ee={class:"text-[12px] text-[#a9a9a9]"},te={class:"fixed-footer-wrap"},oe={class:"fixed-footer"},je=E({__name:"login",setup(le){B().meta.title;const p=b(!0),f=b(),l=C({is_username:0,is_mobile:0,is_auth_register:0,is_bind_mobile:0,agreement_show:0,bg_url:"",logo:"",desc:""}),g=R(()=>({}));(async()=>{const m=await(await K()).data;Object.keys(l).forEach(e=>{m[e]!=null&&(l[e]=m[e])}),p.value=!1})();const h=async m=>{p.value||!m||await m.validate(e=>{if(e){const u=M(l);O(u).then(()=>{p.value=!1}).catch(()=>{p.value=!1})}})};return(m,e)=>{const u=T,d=L,_=N,c=P,V=q,x=A,w=I,U=Y,D=j;return v(),S("div",Z,[k((v(),y(w,{class:"page-form",model:l,rules:t(g),"label-width":"150px",ref_key:"ruleFormRef",ref:f},{default:r(()=>[a(c,{class:"box-card !border-none",shadow:"never"},{default:r(()=>[i("h3",$,n(t(o)("commonSetting")),1),a(d,{label:t(o)("logonMode"),prop:"type"},{default:r(()=>[a(u,{modelValue:l.is_username,"onUpdate:modelValue":e[0]||(e[0]=s=>l.is_username=s),"true-value":1,"false-value":0,label:t(o)("isUsername")},null,8,["modelValue","label"]),i("div",z,n(t(o)("isUsernameTip")),1),a(u,{modelValue:l.is_mobile,"onUpdate:modelValue":e[1]||(e[1]=s=>l.is_mobile=s),"true-value":1,"false-value":0,label:t(o)("isMobile")},null,8,["modelValue","label"]),i("div",G,n(t(o)("isMobileTip")),1)]),_:1},8,["label"]),a(d,{label:t(o)("isBindMobile"),prop:"formData.is_bind_mobile"},{default:r(()=>[a(_,{modelValue:l.is_bind_mobile,"onUpdate:modelValue":e[2]||(e[2]=s=>l.is_bind_mobile=s),"active-value":1,"inactive-value":0},null,8,["modelValue"]),i("div",H,n(t(o)("isBindMobileTip")),1)]),_:1},8,["label"]),a(d,{label:t(o)("agreement"),prop:"formData.agreement_show"},{default:r(()=>[a(_,{modelValue:l.agreement_show,"onUpdate:modelValue":e[3]||(e[3]=s=>l.agreement_show=s),"active-value":1,"inactive-value":0},null,8,["modelValue"]),i("div",J,n(t(o)("agreementTips")),1)]),_:1},8,["label"])]),_:1}),a(c,{class:"box-card mt-[15px] !border-none",shadow:"never"},{default:r(()=>[i("h3",Q,n(t(o)("tripartiteSetting")),1),a(d,{label:t(o)("isAuthRegister"),prop:"formData.is_auth_register"},{default:r(()=>[a(_,{modelValue:l.is_auth_register,"onUpdate:modelValue":e[4]||(e[4]=s=>l.is_auth_register=s),"active-value":1,"inactive-value":0},null,8,["modelValue"]),i("div",W,n(t(o)("isAuthRegisterTip")),1)]),_:1},8,["label"])]),_:1}),a(c,{class:"box-card mt-[15px] !border-none",shadow:"never"},{default:r(()=>[i("h3",X,n(t(o)("loginPageSet")),1),a(d,{label:t(o)("bgUrl")},{default:r(()=>[i("div",null,[a(V,{modelValue:l.bg_url,"onUpdate:modelValue":e[5]||(e[5]=s=>l.bg_url=s)},null,8,["modelValue"]),i("p",ee,n(t(o)("bgUrlPlaceholder")),1)])]),_:1},8,["label"]),a(d,{label:t(o)("desc")},{default:r(()=>[a(x,{modelValue:l.desc,"onUpdate:modelValue":e[6]||(e[6]=s=>l.desc=s),placeholder:t(o)("descPlaceholder"),class:"input-width",clearable:"",maxlength:"20","show-word-limit":""},null,8,["modelValue","placeholder"])]),_:1},8,["label"])]),_:1})]),_:1},8,["model","rules"])),[[D,p.value]]),i("div",te,[i("div",oe,[a(U,{type:"primary",onClick:e[7]||(e[7]=s=>h(f.value))},{default:r(()=>[F(n(t(o)("save")),1)]),_:1})])])])}}});export{je as default};
