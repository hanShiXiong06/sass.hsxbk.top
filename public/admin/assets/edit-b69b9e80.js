import{d as z,x as O,f as Z,r as v,q as e,aK as G,R as H,h as i,c as _,e as r,w as s,u as t,aQ as Q,a as d,t as c,s as k,i as A,B as y,F as E,T as M,cA as Y,a5 as J,U as W,aR as X,a7 as ee,K as le,L as te,E as ae,ac as oe,aD as re,M as se,Y as ne}from"./index-99f00cf3.js";/* empty css                   *//* empty css                *//* empty css                 *//* empty css               *//* empty css                  *//* empty css                  *//* empty css                     *//* empty css                  *//* empty css                  */import de from"./index-015c0c3e.js";import"./el-form-item-4ed993c7.js";/* empty css                *//* empty css                   *//* empty css                       */import{a as ue,b as pe,c as ie,e as ce,f as me,h as ve}from"./tools-6537e418.js";/* empty css                        */import"./index.vue_vue_type_style_index_0_lang-2e54ab99.js";/* empty css                  *//* empty css                   */import"./attachment-6fc096d0.js";import"./index.vue_vue_type_script_setup_true_lang-a59c79e6.js";/* empty css                      *//* empty css                    */import"./el-tooltip-4ed993c7.js";/* empty css                 *//* empty css               *//* empty css               *//* empty css                    *//* empty css                    */import"./el-dropdown-item-4ed993c7.js";import"./index.vue_vue_type_script_setup_true_lang-bde8c802.js";/* empty css                   */import"./index.vue_vue_type_script_setup_true_lang-49ab6f2c.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./sortable.esm-be94e56d.js";const ge={class:"main-container"},_e={class:"text-[12px] text-[#a9a9a9] leading-normal mt-[5px]"},he={class:"text-[12px] text-[#a9a9a9] leading-normal mt-[5px]"},fe={class:"text-[12px] text-[#a9a9a9] leading-normal"},ye={key:1,class:"text-[12px] text-[#a9a9a9] leading-normal"},be={class:"text-[12px] text-[#a9a9a9] leading-normal mt-[5px]"},xe={class:"text-[12px] text-[#a9a9a9] leading-normal mt-[5px]"},ke={class:"text-[12px] text-[#a9a9a9] leading-normal mt-[5px]"},Ve={class:"text-[12px] text-[#a9a9a9] leading-normal"},we={key:0,class:"fixed-footer-wrap"},Pe={class:"fixed-footer"},pl=z({__name:"edit",setup(Ae){const g=O(),q=Z(),F=g.meta.title,a=v({title:"",icon:"",key:"",desc:"",author:"",version:"",cover:"",type:"",support_app:"",support_type:1}),C=v([]),m=v(!1),B=v(),V=v([]),T=(n,l,u)=>l!==""?/^[a-zA-Z][a-zA-Z0-9_]*$/.test(l)?u():u(new Error(e("keyPlaceholderErr"))):u(new Error(e("keyPlaceholder"))),$=(n,l,u)=>l!==""?/^([0-9]\d|[0-9])(\.([0-9]){1}){2}$/.test(l)?u():u(new Error(e("versionPlaceholderErr"))):u(new Error(e("versionPlaceholder"))),N=v({title:[{required:!0,message:e("titlePlaceholder"),trigger:"blur"}],icon:[{required:!0,message:e("iconPlaceholder"),trigger:"change"}],key:[{required:!0,validator:T,trigger:"blur"}],author:[{required:!0,message:e("authorPlaceholder"),trigger:"blur"}],version:[{required:!0,validator:$,trigger:"blur"}],cover:[{required:!0,message:e("coverPlaceholder"),trigger:"change"}],type:[{required:!0,message:e("typePlaceholder"),trigger:"change"}],support_app:[{required:!0,message:e("typePlaceholder"),trigger:"change"}]});G(async()=>{const n=await ue();C.value=n.data,g.query.key&&R(g.query.key)});const U=()=>{a.value.support_app=""},R=n=>{m.value=!0,pe(n).then(l=>{a.value=Object.assign(a.value,l.data),m.value=!1}).catch(()=>{m.value=!1})},L=v([]);(async()=>{const{data:n}=await Y();L.value=n})();const S=n=>{ce(n).then(l=>{J.alert(l.data?e("warningText"):e("successText"),e("warning"),{confirmButtonText:e("confirm"),callback:u=>{console.log(u)}})})},I=async n=>{await n.validate(async l=>{if(l){const u=g.query.key?me:ve;m.value=!0,u(a.value.key,a.value).then(h=>{m.value=!1,W({message:e("onSaveSuccessText"),type:"success"}),setTimeout(()=>{window.addonActiveName="pluginList",q.push({path:"/tools/addon"})},650)}).catch(()=>{m.value=!1})}})};return ie().then(({data:n})=>{V.value=n}),(n,l)=>{const u=X,h=ee,f=le,p=te,D=de,w=ae,b=oe,P=re,K=se,j=ne;return H((i(),_("div",ge,[r(h,{class:"card !border-none",shadow:"never"},{default:s(()=>[r(u,{content:t(F),icon:t(Q),onBack:l[0]||(l[0]=o=>n.$router.back())},null,8,["content","icon"])]),_:1}),r(h,{class:"box-card mt-[15px] !border-none",shadow:"never"},{default:s(()=>[r(K,{model:a.value,"label-width":"90px",ref_key:"formRef",ref:B,rules:N.value,class:"page-form"},{default:s(()=>[r(p,{label:t(e)("title"),prop:"title"},{default:s(()=>[r(f,{modelValue:a.value.title,"onUpdate:modelValue":l[1]||(l[1]=o=>a.value.title=o),modelModifiers:{trim:!0},clearable:"",placeholder:t(e)("titlePlaceholder"),class:"input-width"},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),r(p,{label:t(e)("icon"),prop:"icon"},{default:s(()=>[d("div",null,[r(D,{modelValue:a.value.icon,"onUpdate:modelValue":l[2]||(l[2]=o=>a.value.icon=o)},null,8,["modelValue"]),d("p",_e,c(t(e)("iconPlaceholder1")),1)])]),_:1},8,["label"]),r(p,{label:t(e)("key"),prop:"key"},{default:s(()=>[d("div",null,[r(f,{modelValue:a.value.key,"onUpdate:modelValue":l[3]||(l[3]=o=>a.value.key=o),modelModifiers:{trim:!0},clearable:"",disabled:t(g).query.key,placeholder:t(e)("keyPlaceholder"),class:"input-width mr-[15px]"},null,8,["modelValue","disabled","placeholder"]),t(g).query.key?y("",!0):(i(),k(w,{key:0,type:"primary",disabled:a.value.key=="",onClick:l[4]||(l[4]=o=>S(a.value.key))},{default:s(()=>[A("官方市场标识检测")]),_:1},8,["disabled"])),d("p",he,c(t(e)("keyPlaceholder1")),1),d("p",fe,c(t(e)("keyPlaceholder2")),1),V.value.length?(i(),_("p",ye," 插件标识不能定义成黑名单中的值，插件标识黑名单："+c(V.value.join("，")),1)):y("",!0)])]),_:1},8,["label"]),r(p,{label:t(e)("desc"),prop:"desc"},{default:s(()=>[r(f,{type:"textarea",modelValue:a.value.desc,"onUpdate:modelValue":l[5]||(l[5]=o=>a.value.desc=o),modelModifiers:{trim:!0},clearable:"",placeholder:t(e)("descPlaceholder"),class:"input-width"},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),r(p,{label:t(e)("author"),prop:"author"},{default:s(()=>[r(f,{modelValue:a.value.author,"onUpdate:modelValue":l[6]||(l[6]=o=>a.value.author=o),modelModifiers:{trim:!0},clearable:"",placeholder:t(e)("authorPlaceholder"),class:"input-width"},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),r(p,{label:t(e)("version"),prop:"version"},{default:s(()=>[d("div",null,[r(f,{modelValue:a.value.version,"onUpdate:modelValue":l[7]||(l[7]=o=>a.value.version=o),modelModifiers:{trim:!0},clearable:"",placeholder:t(e)("versionPlaceholder"),class:"input-width",onkeyup:"this.value = this.value.replace(/[^\\d\\.]/g,'');"},null,8,["modelValue","placeholder"]),d("p",be,c(t(e)("versionPlaceholder1")),1)])]),_:1},8,["label"]),r(p,{label:t(e)("cover"),prop:"cover"},{default:s(()=>[d("div",null,[r(D,{modelValue:a.value.cover,"onUpdate:modelValue":l[8]||(l[8]=o=>a.value.cover=o)},null,8,["modelValue"]),d("p",xe,c(t(e)("coverPlaceholder1")),1)])]),_:1},8,["label"]),r(p,{label:t(e)("type"),prop:"type"},{default:s(()=>[d("div",null,[r(P,{modelValue:a.value.type,"onUpdate:modelValue":l[9]||(l[9]=o=>a.value.type=o),placeholder:t(e)("typePlaceholder"),class:"input-width",clearable:"",onChange:U},{default:s(()=>[(i(!0),_(E,null,M(C.value,(o,x)=>(i(),k(b,{key:x,label:o,value:x},null,8,["label","value"]))),128))]),_:1},8,["modelValue","placeholder"]),d("p",ke,c(t(e)("typePlaceholder1")),1),d("p",Ve,c(t(e)("typePlaceholder2")),1)])]),_:1},8,["label"]),a.value.type==="addon"?(i(),_(E,{key:0},[r(p,{label:t(e)("supportType")},{default:s(()=>[d("div",null,[r(P,{modelValue:a.value.support_type,"onUpdate:modelValue":l[10]||(l[10]=o=>a.value.support_type=o),class:"input-width",onChange:U},{default:s(()=>[r(b,{label:"通用插件",value:1}),r(b,{label:"支持应用",value:2})]),_:1},8,["modelValue"])])]),_:1},8,["label"]),a.value.support_type!=1?(i(),k(p,{key:0,label:t(e)("supportApp"),prop:"support_app"},{default:s(()=>[r(P,{modelValue:a.value.support_app,"onUpdate:modelValue":l[11]||(l[11]=o=>a.value.support_app=o),placeholder:t(e)("supportAppPlaceholder"),class:"input-width"},{default:s(()=>[(i(!0),_(E,null,M(L.value,(o,x)=>(i(),k(b,{label:o.title,value:o.key,key:x},null,8,["label","value"]))),128))]),_:1},8,["modelValue","placeholder"])]),_:1},8,["label"])):y("",!0)],64)):y("",!0)]),_:1},8,["model","rules"])]),_:1}),m.value?y("",!0):(i(),_("div",we,[d("div",Pe,[r(w,{type:"primary",onClick:l[12]||(l[12]=o=>I(B.value))},{default:s(()=>[A(c(t(e)("GeneratePlugins")),1)]),_:1}),r(w,{onClick:l[13]||(l[13]=o=>t(q).push({path:"/tools/addon"}))},{default:s(()=>[A(c(t(e)("cancel")),1)]),_:1})])]))])),[[j,m.value]])}}});export{pl as default};
