import{d as z,x as O,f as Z,r as v,q as e,aJ as G,R as H,h as i,c as _,e as r,w as n,u as a,aP as J,a as d,t as c,s as k,i as E,B as f,F as A,T as F,cB as Q,a4 as Y,U as W,aQ as X,a6 as ee,K as le,L as ae,E as te,aa as oe,aB as re,M as ne,Y as se}from"./index-f7a01263.js";/* empty css                   *//* empty css                     *//* empty css                 *//* empty css               *//* empty css                  *//* empty css                  *//* empty css                     *//* empty css                  *//* empty css                  */import de from"./index-e6c6f5a6.js";/* empty css                *//* empty css                   *//* empty css                       */import{a as ue,b as pe,c as ie,e as ce,f as me,h as ve}from"./tools-fc580032.js";/* empty css                        */import"./index.vue_vue_type_style_index_0_lang-0595c85c.js";/* empty css                  *//* empty css                   */import"./attachment-893e498c.js";import"./index.vue_vue_type_script_setup_true_lang-473c7dda.js";/* empty css                      *//* empty css                    */import"./el-tooltip-4ed993c7.js";/* empty css                 *//* empty css               *//* empty css               *//* empty css                    *//* empty css                    */import"./el-dropdown-item-4ed993c7.js";import"./index.vue_vue_type_script_setup_true_lang-a36ce1b6.js";/* empty css                   */import"./index.vue_vue_type_script_setup_true_lang-73e73d1c.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./sortable.esm-be94e56d.js";const ge={class:"main-container"},_e={class:"text-[12px] text-[#a9a9a9] leading-normal mt-[5px]"},he={class:"text-[12px] text-[#a9a9a9] leading-normal mt-[5px]"},ye={class:"text-[12px] text-[#a9a9a9] leading-normal"},fe={key:1,class:"text-[12px] text-[#a9a9a9] leading-normal"},be={class:"text-[12px] text-[#a9a9a9] leading-normal mt-[5px]"},xe={class:"text-[12px] text-[#a9a9a9] leading-normal mt-[5px]"},ke={class:"text-[12px] text-[#a9a9a9] leading-normal mt-[5px]"},Ve={class:"text-[12px] text-[#a9a9a9] leading-normal"},we={key:0,class:"fixed-footer-wrap"},Pe={class:"fixed-footer"},ul=z({__name:"edit",setup(Ee){const g=O(),q=Z(),T=g.meta.title,t=v({title:"",icon:"",key:"",desc:"",author:"",version:"",cover:"",type:"",support_app:"",support_type:1}),B=v([]),m=v(!1),C=v(),V=v([]),$=(s,l,u)=>l!==""?/^[a-zA-Z][a-zA-Z0-9_]*$/.test(l)?u():u(new Error(e("keyPlaceholderErr"))):u(new Error(e("keyPlaceholder"))),N=(s,l,u)=>l!==""?/^([0-9]\d|[0-9])(\.([0-9]){1}){2}$/.test(l)?u():u(new Error(e("versionPlaceholderErr"))):u(new Error(e("versionPlaceholder"))),R=v({title:[{required:!0,message:e("titlePlaceholder"),trigger:"blur"}],icon:[{required:!0,message:e("iconPlaceholder"),trigger:"change"}],key:[{required:!0,validator:$,trigger:"blur"}],author:[{required:!0,message:e("authorPlaceholder"),trigger:"blur"}],version:[{required:!0,validator:N,trigger:"blur"}],cover:[{required:!0,message:e("coverPlaceholder"),trigger:"change"}],type:[{required:!0,message:e("typePlaceholder"),trigger:"change"}],support_app:[{required:!0,message:e("typePlaceholder"),trigger:"change"}]});G(async()=>{const s=await ue();B.value=s.data,g.query.key&&S(g.query.key)});const U=()=>{t.value.support_app=""},S=s=>{m.value=!0,pe(s).then(l=>{t.value=Object.assign(t.value,l.data),m.value=!1}).catch(()=>{m.value=!1})},L=v([]);(async()=>{const{data:s}=await Q();L.value=s})();const I=s=>{ce(s).then(l=>{Y.alert(l.data?e("warningText"):e("successText"),e("warning"),{confirmButtonText:e("confirm"),callback:u=>{console.log(u)}})})},M=async s=>{await s.validate(async l=>{if(l){const u=g.query.key?me:ve;m.value=!0,u(t.value.key,t.value).then(h=>{m.value=!1,W({message:e("onSaveSuccessText"),type:"success"}),setTimeout(()=>{window.addonActiveName="pluginList",q.push({path:"/tools/addon"})},650)}).catch(()=>{m.value=!1})}})};return ie().then(({data:s})=>{V.value=s}),(s,l)=>{const u=X,h=ee,y=le,p=ae,D=de,w=te,b=oe,P=re,K=ne,j=se;return H((i(),_("div",ge,[r(h,{class:"card !border-none",shadow:"never"},{default:n(()=>[r(u,{content:a(T),icon:a(J),onBack:l[0]||(l[0]=o=>s.$router.back())},null,8,["content","icon"])]),_:1}),r(h,{class:"box-card mt-[15px] !border-none",shadow:"never"},{default:n(()=>[r(K,{model:t.value,"label-width":"90px",ref_key:"formRef",ref:C,rules:R.value,class:"page-form"},{default:n(()=>[r(p,{label:a(e)("title"),prop:"title"},{default:n(()=>[r(y,{modelValue:t.value.title,"onUpdate:modelValue":l[1]||(l[1]=o=>t.value.title=o),clearable:"",placeholder:a(e)("titlePlaceholder"),class:"input-width"},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),r(p,{label:a(e)("icon"),prop:"icon"},{default:n(()=>[d("div",null,[r(D,{modelValue:t.value.icon,"onUpdate:modelValue":l[2]||(l[2]=o=>t.value.icon=o)},null,8,["modelValue"]),d("p",_e,c(a(e)("iconPlaceholder1")),1)])]),_:1},8,["label"]),r(p,{label:a(e)("key"),prop:"key"},{default:n(()=>[d("div",null,[r(y,{modelValue:t.value.key,"onUpdate:modelValue":l[3]||(l[3]=o=>t.value.key=o),clearable:"",disabled:a(g).query.key,placeholder:a(e)("keyPlaceholder"),class:"input-width mr-[15px]"},null,8,["modelValue","disabled","placeholder"]),a(g).query.key?f("",!0):(i(),k(w,{key:0,type:"primary",disabled:t.value.key=="",onClick:l[4]||(l[4]=o=>I(t.value.key))},{default:n(()=>[E("官方市场标识检测")]),_:1},8,["disabled"])),d("p",he,c(a(e)("keyPlaceholder1")),1),d("p",ye,c(a(e)("keyPlaceholder2")),1),V.value.length?(i(),_("p",fe," 插件标识不能定义成黑名单中的值，插件标识黑名单："+c(V.value.join("，")),1)):f("",!0)])]),_:1},8,["label"]),r(p,{label:a(e)("desc"),prop:"desc"},{default:n(()=>[r(y,{type:"textarea",modelValue:t.value.desc,"onUpdate:modelValue":l[5]||(l[5]=o=>t.value.desc=o),clearable:"",placeholder:a(e)("descPlaceholder"),class:"input-width"},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),r(p,{label:a(e)("author"),prop:"author"},{default:n(()=>[r(y,{modelValue:t.value.author,"onUpdate:modelValue":l[6]||(l[6]=o=>t.value.author=o),clearable:"",placeholder:a(e)("authorPlaceholder"),class:"input-width"},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),r(p,{label:a(e)("version"),prop:"version"},{default:n(()=>[d("div",null,[r(y,{modelValue:t.value.version,"onUpdate:modelValue":l[7]||(l[7]=o=>t.value.version=o),clearable:"",placeholder:a(e)("versionPlaceholder"),class:"input-width",onkeyup:"this.value = this.value.replace(/[^\\d\\.]/g,'');"},null,8,["modelValue","placeholder"]),d("p",be,c(a(e)("versionPlaceholder1")),1)])]),_:1},8,["label"]),r(p,{label:a(e)("cover"),prop:"cover"},{default:n(()=>[d("div",null,[r(D,{modelValue:t.value.cover,"onUpdate:modelValue":l[8]||(l[8]=o=>t.value.cover=o)},null,8,["modelValue"]),d("p",xe,c(a(e)("coverPlaceholder1")),1)])]),_:1},8,["label"]),r(p,{label:a(e)("type"),prop:"type"},{default:n(()=>[d("div",null,[r(P,{modelValue:t.value.type,"onUpdate:modelValue":l[9]||(l[9]=o=>t.value.type=o),placeholder:a(e)("typePlaceholder"),class:"input-width",clearable:"",onChange:U},{default:n(()=>[(i(!0),_(A,null,F(B.value,(o,x)=>(i(),k(b,{key:x,label:o,value:x},null,8,["label","value"]))),128))]),_:1},8,["modelValue","placeholder"]),d("p",ke,c(a(e)("typePlaceholder1")),1),d("p",Ve,c(a(e)("typePlaceholder2")),1)])]),_:1},8,["label"]),t.value.type==="addon"?(i(),_(A,{key:0},[r(p,{label:a(e)("supportType")},{default:n(()=>[d("div",null,[r(P,{modelValue:t.value.support_type,"onUpdate:modelValue":l[10]||(l[10]=o=>t.value.support_type=o),class:"input-width",onChange:U},{default:n(()=>[r(b,{label:"通用插件",value:1}),r(b,{label:"支持应用",value:2})]),_:1},8,["modelValue"])])]),_:1},8,["label"]),t.value.support_type!=1?(i(),k(p,{key:0,label:a(e)("supportApp"),prop:"support_app"},{default:n(()=>[r(P,{modelValue:t.value.support_app,"onUpdate:modelValue":l[11]||(l[11]=o=>t.value.support_app=o),placeholder:a(e)("supportAppPlaceholder"),class:"input-width"},{default:n(()=>[(i(!0),_(A,null,F(L.value,(o,x)=>(i(),k(b,{label:o.title,value:o.key,key:x},null,8,["label","value"]))),128))]),_:1},8,["modelValue","placeholder"])]),_:1},8,["label"])):f("",!0)],64)):f("",!0)]),_:1},8,["model","rules"])]),_:1}),m.value?f("",!0):(i(),_("div",we,[d("div",Pe,[r(w,{type:"primary",onClick:l[12]||(l[12]=o=>M(C.value))},{default:n(()=>[E(c(a(e)("GeneratePlugins")),1)]),_:1}),r(w,{onClick:l[13]||(l[13]=o=>a(q).push({path:"/tools/addon"}))},{default:n(()=>[E(c(a(e)("cancel")),1)]),_:1})])]))])),[[j,m.value]])}}});export{ul as default};
