import{d as z,x as V,n as $,r as R,h as l,c as d,e as a,w as n,a as _,t as i,u as t,i as c,q as e,R as j,s as f,B as h,ag as F,a5 as v,ah as g,ai as L,aj as q,E as I,ac as O,ak as S,ad as Y,a7 as A,Y as G}from"./index-37fee5a0.js";/* empty css                   *//* empty css                *//* empty css                 *//* empty css                    */import"./el-tooltip-4ed993c7.js";/* empty css                  *//* empty css                     *//* empty css               */import{_ as H}from"./index.vue_vue_type_script_setup_true_lang-165de32d.js";/* empty css                        *//* empty css                  */import{_ as J}from"./edit-menu.vue_vue_type_script_setup_true_lang-f89f564b.js";/* empty css                  *//* empty css                   *//* empty css                *//* empty css                 *//* empty css                        */import"./index-b7faebed.js";import"./index.vue_vue_type_style_index_0_lang-9e528ade.js";import"./attachment-78567e2f.js";import"./index.vue_vue_type_script_setup_true_lang-1f515813.js";/* empty css                        */import"./el-form-item-4ed993c7.js";/* empty css                  *//* empty css                  *//* empty css                      *//* empty css                 *//* empty css               *//* empty css               *//* empty css                    *//* empty css                    */import"./el-dropdown-item-4ed993c7.js";import"./index.vue_vue_type_script_setup_true_lang-a7856b99.js";/* empty css                   */import"./_plugin-vue_export-helper-c27b6911.js";/* empty css                *//* empty css                       *//* empty css                       *//* empty css                 */import"./tools-b4813e61.js";const K={class:"main-container"},P={class:"flex justify-between items-center"},Q={class:"text-page-title"},U={class:"flex items-center"},W={key:0},X={key:1},Z={key:2},Ge=z({__name:"menu",setup(ee){const k=V().meta.title,s=$({loading:!0,data:[]}),y=()=>{s.loading=!0,F("admin").then(r=>{s.loading=!1,s.data=r.data}).catch(()=>{})};y();const x=()=>{v.confirm(g("div",null,[g("p",null,e("initializeMenuTipsOne")),g("p",null,e("initializeMenuTipsTwo"))]),e("warning"),{confirmButtonText:e("confirm"),cancelButtonText:e("cancel")}).then(()=>{L().then(r=>{location.reload()}).catch(()=>{})}).catch(()=>{})},p=R(null),w=()=>{p.value.setFormData({app_type:"admin"}),p.value.showDialog=!0},T=r=>{p.value.setFormData(r),p.value.showDialog=!0},D=r=>{v.confirm(e("menuDeleteTips"),e("warning"),{confirmButtonText:e("confirm"),cancelButtonText:e("cancel"),type:"warning"}).then(()=>{q("admin",r).then(()=>{y()}).catch(()=>{})})};return(r,ae)=>{const u=I,m=O,B=H,b=S,C=Y,M=A,E=G;return l(),d("div",K,[a(M,{class:"box-card !border-none",shadow:"never"},{default:n(()=>[_("div",P,[_("span",Q,i(t(k)),1),_("div",U,[a(u,{type:"primary",class:"w-[100px]",onClick:w},{default:n(()=>[c(i(t(e)("addMenu")),1)]),_:1}),a(u,{class:"w-[100px]",onClick:x},{default:n(()=>[c(i(t(e)("initializeMenu")),1)]),_:1})])]),j((l(),f(C,{class:"mt-[20px]",data:s.data,"row-key":"menu_key",size:"large"},{empty:n(()=>[_("span",null,i(s.loading?"":t(e)("emptyData")),1)]),default:n(()=>[a(m,{prop:"menu_name","show-overflow-tooltip":!0,label:t(e)("menuName"),"min-width":"150"},null,8,["label"]),a(m,{label:t(e)("icon"),width:"100",align:"center"},{default:n(({row:o})=>[o.icon?(l(),f(B,{key:0,name:o.icon,size:"18px"},null,8,["name"])):h("",!0)]),_:1},8,["label"]),a(m,{label:t(e)("menuType"),width:"80"},{default:n(({row:o})=>[o.menu_type==0?(l(),d("div",W,i(t(e)("menuTypeDir")),1)):o.menu_type==1?(l(),d("div",X,i(t(e)("menuTypeMenu")),1)):o.menu_type==2?(l(),d("div",Z,i(t(e)("menuTypeButton")),1)):h("",!0)]),_:1},8,["label"]),a(m,{prop:"api_url",label:t(e)("authId"),"min-width":"150",align:"center"},null,8,["label"]),a(m,{label:t(e)("status"),"min-width":"120",align:"center"},{default:n(({row:o})=>[o.status==1?(l(),f(b,{key:0,class:"ml-2",type:"success"},{default:n(()=>[c(i(t(e)("statusNormal")),1)]),_:1})):h("",!0),o.status==0?(l(),f(b,{key:1,class:"ml-2",type:"error"},{default:n(()=>[c(i(t(e)("statusDeactivate")),1)]),_:1})):h("",!0)]),_:1},8,["label"]),a(m,{prop:"sort",label:t(e)("sort"),"min-width":"100"},null,8,["label"]),a(m,{label:t(e)("operation"),align:"right",fixed:"right",width:"130"},{default:n(({row:o})=>[a(u,{type:"primary",link:"",onClick:N=>T(o)},{default:n(()=>[c(i(t(e)("edit")),1)]),_:2},1032,["onClick"]),a(u,{type:"primary",link:"",onClick:N=>D(o.menu_key)},{default:n(()=>[c(i(t(e)("delete")),1)]),_:2},1032,["onClick"])]),_:1},8,["label"])]),_:1},8,["data"])),[[E,s.loading]]),a(J,{ref_key:"editMenuDialog",ref:p,"menu-tree":s.data,onComplete:y,"app-type":"admin"},null,8,["menu-tree"])]),_:1})])}}});export{Ge as default};
