import{d as q,x as I,f as U,r as v,n as V,q as t,H as $,h as y,c as C,e as s,w as u,u as a,aP as D,R as F,s as G,a as i,t as _,i as A,aQ as H,a7 as T,K as j,L as K,M as O,E as Q,Y as S}from"./index-37fee5a0.js";/* empty css                   *//* empty css                  *//* empty css                */import"./el-form-item-4ed993c7.js";/* empty css                 *//* empty css                *//* empty css                   *//* empty css                       */import{_ as Y}from"./member-benefits.vue_vue_type_script_setup_true_lang-3eb7f2f9.js";import{_ as z}from"./member-gift.vue_vue_type_script_setup_true_lang-9cb796ca.js";import{L as J,A as k,M as W,N as X}from"./member-c2705b96.js";const Z={class:"main-container"},ee={class:"panel-title !text-sm"},le={class:"w-[150px]"},te={class:"text-sm text-gray-400 mb-[5px]"},oe={class:"panel-title !text-sm"},ae={class:"pl-[100px]"},re={class:"panel-title !text-sm"},se={class:"pl-[100px]"},ne={class:"fixed-footer-wrap"},ie={class:"fixed-footer"},Ve=q({__name:"level_edit",setup(me){const c=I(),N=U(),R=c.meta.title,w=v(null),b=v(null),h=v(!0),m=v({min:0,max:0}),l=V({level_id:0,level_name:"",remark:"",growth:"",level_benefits:{},level_gifts:{}}),x=v(),E=V({level_name:[{required:!0,message:t("levelNamePlaceholder"),trigger:"blur"}],growth:[{required:!0,message:t("growthPlaceholder"),trigger:"blur"},{validator:(r,e,o)=>{$.digits(l.growth)||o(t("growthFormatError")),l.growth<=0&&o(t("growthNeedGt")+0),m.value.min&&l.growth<=m.value.min&&o(t("growthNeedGt")+m.value.min),m.value.max&&l.growth>=m.value.max&&o(t("growthNeedLt")+m.value.max),o()}}]});c.query.id?J(c.query.id).then(({data:r})=>{Object.assign(l,r),k().then(({data:e})=>{let o=0;e.forEach((d,f)=>{d.level_id==l.level_id&&(o=f)}),e[o-1]&&(m.value.min=e[o-1].growth),e[o+1]&&(m.value.max=e[o+1].growth)}),h.value=!1}):(k().then(({data:r})=>{r[r.length-1]&&(m.value.min=r[r.length-1].growth)}),h.value=!1);const p=v(!1),L=async r=>{p.value||!r||await r.validate(async e=>{var o,d;if(e){if(!await((o=w.value)==null?void 0:o.verify())||!await((d=b.value)==null?void 0:d.verify()))return;p.value=!0,(l.level_id?W:X)(l).then(()=>{N.push({path:"/member/level"})}).catch(()=>{p.value=!1})}})};return(r,e)=>{const o=H,d=T,f=j,g=K,M=O,B=Q,P=S;return y(),C("div",Z,[s(d,{class:"card !border-none",shadow:"never"},{default:u(()=>[s(o,{content:a(R),icon:a(D),onBack:e[0]||(e[0]=n=>r.$router.back())},null,8,["content","icon"])]),_:1}),F((y(),G(d,{class:"box-card mt-[15px] !border-none",shadow:"never"},{default:u(()=>[s(M,{class:"page-form",model:l,"label-width":"120px",ref_key:"formRef",ref:x,rules:E},{default:u(()=>[i("h3",ee,_(a(t)("basicInfo")),1),s(g,{label:a(t)("levelName"),prop:"level_name"},{default:u(()=>[s(f,{modelValue:l.level_name,"onUpdate:modelValue":e[1]||(e[1]=n=>l.level_name=n),modelModifiers:{trim:!0},placeholder:a(t)("levelNamePlaceholder"),class:"input-width",maxlength:"20","show-word-limit":"",clearable:""},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),s(g,{label:a(t)("remark"),prop:"remark"},{default:u(()=>[s(f,{modelValue:l.remark,"onUpdate:modelValue":e[2]||(e[2]=n=>l.remark=n),modelModifiers:{trim:!0},type:"textarea",placeholder:a(t)("remarkPlaceholder"),class:"input-width",clearable:"",rows:"4",maxlength:"200","show-word-limit":""},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),s(g,{label:a(t)("growth"),prop:"growth"},{default:u(()=>[i("div",null,[i("div",le,[s(f,{modelValue:l.growth,"onUpdate:modelValue":e[3]||(e[3]=n=>l.growth=n),modelModifiers:{number:!0,trim:!0},placeholder:a(t)("growthPlaceholder"),clearable:""},null,8,["modelValue","placeholder"])]),i("div",te,_(a(t)("growthTips")),1)])]),_:1},8,["label"])]),_:1},8,["model","rules"]),i("h3",oe,_(a(t)("levelBenefits")),1),i("div",ae,[s(Y,{ref_key:"benefitsRef",ref:w,modelValue:l.level_benefits,"onUpdate:modelValue":e[4]||(e[4]=n=>l.level_benefits=n)},null,8,["modelValue"])]),i("h3",re,_(a(t)("levelGift")),1),i("div",se,[s(z,{ref_key:"giftRef",ref:b,modelValue:l.level_gifts,"onUpdate:modelValue":e[5]||(e[5]=n=>l.level_gifts=n)},null,8,["modelValue"])])]),_:1})),[[P,h.value]]),i("div",ne,[i("div",ie,[s(B,{type:"primary",loading:p.value,onClick:e[6]||(e[6]=n=>L(x.value))},{default:u(()=>[A(_(a(t)("save")),1)]),_:1},8,["loading"])])])])}}});export{Ve as default};
