import{d as N,x as P,r as h,m as S,n as V,q as t,h as w,c as C,R as g,s as v,w as n,e as o,a as i,t as c,u as d,a0 as I,B,i as D,ck as R,cl as T,cm as F,D as q,j as W,K as j,L,a7 as M,M as A,E as K,Y as O}from"./index-29db729d.js";/* empty css                   *//* empty css                  *//* empty css                     *//* empty css                */import Y from"./index-ca4d57f5.js";/* empty css                 *//* empty css                        */import"./index.vue_vue_type_style_index_0_lang-2c4c413e.js";/* empty css                  *//* empty css                   */import"./attachment-202024c3.js";import"./index.vue_vue_type_script_setup_true_lang-1727bd35.js";/* empty css               *//* empty css                  *//* empty css                  *//* empty css                     *//* empty css                  *//* empty css                      *//* empty css                    */import"./el-tooltip-4ed993c7.js";/* empty css                 *//* empty css               *//* empty css                    *//* empty css                    */import"./el-dropdown-item-4ed993c7.js";import"./index.vue_vue_type_script_setup_true_lang-ed563346.js";/* empty css                   */import"./index.vue_vue_type_script_setup_true_lang-c9026bca.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./sortable.esm-be94e56d.js";const $={class:"main-container"},z={class:"panel-title !text-sm"},G={class:"text-[12px] text-[#a9a9a9]"},H={class:"text-[12px] text-[#a9a9a9]"},J={class:"panel-title !text-sm"},Q={class:"panel-title !text-sm"},X={class:"fixed-footer-wrap"},Z={class:"fixed-footer"},Re=N({__name:"system",setup(ee){P().meta.title;const m=h(!0),_=h(S()),l=V({site_name:"",logo:"",desc:"",latitude:"",keywords:"",longitude:"",province_id:"",city_id:"",district_id:"",address:"",full_address:"",business_hours:"",phone:"",front_end_name:"",front_end_logo:"",front_end_icon:"",icon:"",wechat_code:"",enterprise_wechat:"",tel:""});(async()=>{const u=await(await R()).data;Object.keys(l).forEach(r=>{u[r]!=null&&(l[r]=u[r])});const e=await(await T()).data;l.wechat_code=e.wechat_code,l.enterprise_wechat=e.enterprise_wechat,l.tel=e.tel,m.value=!1})();const b=h(),x=V({site_name:[{required:!0,message:t("siteNamePlaceholder"),trigger:"blur"}],front_end_name:[{required:!0,message:t("frontEndNamePlaceholder"),trigger:"blur"}]}),y=async u=>{m.value||!u||await u.validate(async e=>{e&&(m.value=!0,F(l).then(()=>{m.value=!1,_.value=="admin"?q().getWebsiteInfo():W().getSiteInfo()}).catch(()=>{m.value=!1}))})};return(u,e)=>{const r=j,s=L,p=Y,f=M,U=A,k=K,E=O;return w(),C("div",$,[g((w(),v(U,{class:"page-form",model:l,"label-width":"150px",ref_key:"formRef",ref:b,rules:x},{default:n(()=>[o(f,{class:"box-card !border-none",shadow:"never"},{default:n(()=>[i("h3",z,c(d(t)("websiteInfo")),1),o(s,{label:d(t)("siteName"),prop:"site_name"},{default:n(()=>[o(r,{modelValue:l.site_name,"onUpdate:modelValue":e[0]||(e[0]=a=>l.site_name=a),modelModifiers:{trim:!0},placeholder:d(t)("siteNamePlaceholder"),class:"input-width",clearable:"",maxlength:"20","show-word-limit":""},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),o(s,{label:d(t)("logo")},{default:n(()=>[i("div",null,[o(p,{modelValue:l.logo,"onUpdate:modelValue":e[1]||(e[1]=a=>l.logo=a)},null,8,["modelValue"]),i("p",G,c(d(t)("logoPlaceholder")),1)])]),_:1},8,["label"]),o(s,{label:d(t)("icon")},{default:n(()=>[i("div",null,[o(p,{modelValue:l.icon,"onUpdate:modelValue":e[2]||(e[2]=a=>l.icon=a)},null,8,["modelValue"]),i("p",H,c(d(t)("iconPlaceholder")),1)])]),_:1},8,["label"]),o(s,{label:d(t)("keywords")},{default:n(()=>[o(r,{modelValue:l.keywords,"onUpdate:modelValue":e[3]||(e[3]=a=>l.keywords=a),placeholder:d(t)("keywordsPlaceholder"),class:"input-width",clearable:"",maxlength:"20","show-word-limit":""},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),o(s,{label:d(t)("desc")},{default:n(()=>[o(r,{modelValue:l.desc,"onUpdate:modelValue":e[4]||(e[4]=a=>l.desc=a),type:"textarea",rows:4,clearable:"",placeholder:d(t)("descPlaceholder"),class:"input-width",maxlength:"100","show-word-limit":""},null,8,["modelValue","placeholder"])]),_:1},8,["label"])]),_:1}),g(o(f,{class:"box-card mt-[15px] !border-none",shadow:"never"},{default:n(()=>[i("h3",J,c(d(t)("frontEndInfo")),1),o(s,{label:d(t)("frontEndName")},{default:n(()=>[o(r,{modelValue:l.front_end_name,"onUpdate:modelValue":e[5]||(e[5]=a=>l.front_end_name=a),placeholder:d(t)("frontEndNamePlaceholder"),class:"input-width",clearable:"",maxlength:"20","show-word-limit":""},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),o(s,{label:d(t)("phone")},{default:n(()=>[o(r,{modelValue:l.phone,"onUpdate:modelValue":e[6]||(e[6]=a=>l.phone=a),placeholder:d(t)("phonePlaceholder"),class:"input-width",clearable:"",maxlength:"20","show-word-limit":""},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),o(s,{label:d(t)("logo")},{default:n(()=>[o(p,{modelValue:l.front_end_logo,"onUpdate:modelValue":e[7]||(e[7]=a=>l.front_end_logo=a)},null,8,["modelValue"])]),_:1},8,["label"]),o(s,{label:d(t)("icon")},{default:n(()=>[o(p,{modelValue:l.front_end_icon,"onUpdate:modelValue":e[8]||(e[8]=a=>l.front_end_icon=a)},null,8,["modelValue"])]),_:1},8,["label"])]),_:1},512),[[I,_.value=="site"]]),_.value=="admin"?(w(),v(f,{key:0,class:"box-card mt-[15px] !border-none",shadow:"never"},{default:n(()=>[i("h3",Q,c(d(t)("serviceInformation")),1),o(s,{label:d(t)("contactsTel")},{default:n(()=>[o(r,{modelValue:l.tel,"onUpdate:modelValue":e[9]||(e[9]=a=>l.tel=a),placeholder:d(t)("contactsTelPlaceholder"),class:"input-width",clearable:"",maxlength:"20","show-word-limit":""},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),o(s,{label:d(t)("wechatCode")},{default:n(()=>[o(p,{modelValue:l.wechat_code,"onUpdate:modelValue":e[10]||(e[10]=a=>l.wechat_code=a)},null,8,["modelValue"])]),_:1},8,["label"]),o(s,{label:d(t)("customerServiceCode")},{default:n(()=>[o(p,{modelValue:l.enterprise_wechat,"onUpdate:modelValue":e[11]||(e[11]=a=>l.enterprise_wechat=a)},null,8,["modelValue"])]),_:1},8,["label"])]),_:1})):B("",!0)]),_:1},8,["model","rules"])),[[E,m.value]]),i("div",X,[i("div",Z,[o(k,{type:"primary",loading:m.value,onClick:e[12]||(e[12]=a=>y(b.value))},{default:n(()=>[D(c(d(t)("save")),1)]),_:1},8,["loading"])])])])}}});export{Re as default};
