import{d as W,x as Y,f as z,n as R,r as p,l as A,q as a,Y as G,P as J,h as c,c as d,e as r,w as s,u as l,cW as Z,F as ee,Q as te,s as oe,a as i,t as m,B as b,i as v,R as re,cX as ae,a0 as le,ak as se,aI as ne,K as ie,X as me,E as ce,L as de,U as pe}from"./index-17984968.js";/* empty css                   *//* empty css                *//* empty css                  *//* empty css                */import"./el-form-item-4ed993c7.js";/* empty css                 *//* empty css               *//* empty css                  *//* empty css                  *//* empty css                     *//* empty css                  *//* empty css                *//* empty css                   *//* empty css                       */import{g as _e}from"./level-113119c0.js";import{d as ue}from"./fenxiao-75a63893.js";import{_ as fe}from"./fenxiao-of-select-popup.vue_vue_type_script_setup_true_lang-91e983de.js";import{_ as be}from"./member-of-select-popup.vue_vue_type_script_setup_true_lang-fb80e48b.js";import{_ as ve}from"./_plugin-vue_export-helper-c27b6911.js";/* empty css                  *//* empty css                   *//* empty css                      *//* empty css                 *//* empty css                    */import"./el-tooltip-4ed993c7.js";/* empty css                 *//* empty css                        *//* empty css                        */import"./default_headimg-a897263d.js";const xe={class:"main-container"},he={key:0,class:"w-[180px] h-[32px] mr-[15px] px-[10px] box-border border-[1px] border-solid border-[var(--el-border-color)]"},ge={class:"text-[var(--el-text-color-secondary)]"},ke={key:1,class:"parent-name w-[180px] h-[32px] flex justify-between items-center mr-[15px] px-[10px] box-border border-[1px] border-solid border-[var(--el-border-color)]"},ye={class:"text-[var(--el-text-color-regular)]"},Fe={key:0,class:"w-[180px] h-[32px] mr-[15px] px-[10px] box-border border-[1px] border-solid border-[var(--el-border-color)]"},Ce={class:"text-[var(--el-text-color-secondary)]"},we={key:1,class:"parent-name w-[180px] h-[32px] flex justify-between items-center mr-[15px] px-[10px] box-border border-[1px] border-solid border-[var(--el-border-color)]"},Le={class:"text-[var(--el-text-color-regular)]"},Pe={class:"fixed-footer-wrap"},Ee={class:"fixed-footer"},Ne=W({__name:"edit",setup(Re){const S=Y(),g=z(),D=S.meta.title,k=R({leveList:[]}),o=R({...{id:0,level_id:null,parent_name:"",parent:null,member_name:"",member_id:null}}),B=p(!1),_=p(),M=A(()=>({level_id:[{required:!0,message:a("levelNamePlaceholder"),trigger:"change"}],member_id:[{required:!0,message:a("selectMemberNamePlaceholder"),trigger:"change"}]}));let x=!1;const y=(e=!1)=>{if(x)return!1;x=!0,_e({page:1,limit:11}).then(t=>{k.leveList=t.data.data,x=!1,e&&re({message:a("refreshSuccess"),type:"success"})})};y();const F=p(),V=()=>{var e;(e=F.value)==null||e.show()},$=()=>{o.parent=null,o.parent_name=""},O=e=>{var t;o.parent=e.member.member_id,o.parent_name=e.member.nickname||e.member.username,(t=_.value)==null||t.validateField("parent")},C=p(),I=()=>{var e;(e=C.value)==null||e.show()},q=e=>{var t;o.member_id=e.member_id,o.member_name=e.member.nickname||e.member.username,(t=_.value)==null||t.validateField("member_id")},T=()=>{o.member_id=null,o.member_name=""},u=p(!1),j=()=>{var e;(e=_.value)==null||e.validate(t=>{if(t){if(u.value)return;u.value=!0,ue(o).then(L=>{u.value=!1,w()}).catch(()=>{u.value=!1})}})},w=()=>{g.push("/shop_fenxiao/lists")},U=()=>{const e=g.resolve("/shop_fenxiao/management/level");window.open(e.href)};return(e,t)=>{const L=ae,P=le,X=se,H=ne,h=ie,E=G("CircleClose"),N=me,f=ce,K=de,Q=pe;return J((c(),d("div",xe,[r(P,{class:"card !border-none",shadow:"never"},{default:s(()=>[r(L,{content:l(D),icon:l(Z),onBack:t[0]||(t[0]=n=>e.$router.back())},null,8,["content","icon"])]),_:1}),r(P,{class:"card mt-[15px] !border-none",shadow:"never"},{default:s(()=>[r(K,{class:"page-form",model:o,"label-width":"130px",ref_key:"formRef",ref:_,rules:l(M)},{default:s(()=>[r(h,{label:l(a)("levelName"),prop:"level_id"},{default:s(()=>[r(H,{modelValue:o.level_id,"onUpdate:modelValue":t[1]||(t[1]=n=>o.level_id=n),class:"input-width",clearable:"",placeholder:l(a)("levelNamePlaceholder")},{default:s(()=>[(c(!0),d(ee,null,te(k.leveList,n=>(c(),oe(X,{key:n.value,label:n.level_name,value:n.level_id},null,8,["label","value"]))),128))]),_:1},8,["modelValue","placeholder"]),i("span",{class:"text-[var(--el-color-primary)] ml-[10px] cursor-pointer",onClick:t[2]||(t[2]=n=>y(!0))},"刷新"),i("span",{class:"text-[var(--el-color-primary)] ml-[10px] cursor-pointer",onClick:U},"添加等级")]),_:1},8,["label"]),r(h,{label:l(a)("fenxiaoMemberName"),prop:"member_id"},{default:s(()=>[o.member_id?b("",!0):(c(),d("div",he,[i("span",ge,m(l(a)("memberDefault")),1)])),o.member_id?(c(),d("div",ke,[i("span",ye,m(o.member_name),1),r(N,{class:"!hidden cursor-pointer",color:"#dcdfe6",onClick:T},{default:s(()=>[r(E)]),_:1})])):b("",!0),r(f,{type:"primary",onClick:I},{default:s(()=>[v(m(l(a)("selectMemberName")),1)]),_:1})]),_:1},8,["label"]),r(h,{label:l(a)("fenxiao")},{default:s(()=>[o.parent?b("",!0):(c(),d("div",Fe,[i("span",Ce,m(l(a)("fenxiaoDefault")),1)])),o.parent?(c(),d("div",we,[i("span",Le,m(o.parent_name),1),r(N,{class:"!hidden cursor-pointer",color:"#dcdfe6",onClick:$},{default:s(()=>[r(E)]),_:1})])):b("",!0),r(f,{type:"primary",onClick:V},{default:s(()=>[v(m(l(a)("selectFenxiao")),1)]),_:1})]),_:1},8,["label"])]),_:1},8,["model","rules"])]),_:1}),i("div",Pe,[i("div",Ee,[r(f,{type:"primary",onClick:t[3]||(t[3]=n=>j())},{default:s(()=>[v(m(l(a)("save")),1)]),_:1}),r(f,{onClick:t[4]||(t[4]=n=>w())},{default:s(()=>[v(m(l(a)("back")),1)]),_:1})])]),r(fe,{title:l(a)("fenxiaoSelectPricePopupTitle"),ref_key:"fenxiaoOfSelectPopupRef",ref:F,onLoad:O},null,8,["title"]),r(be,{title:l(a)("memberSelectPricePopupTitle"),ref_key:"memberOfSelectPopupRef",ref:C,onLoad:q},null,8,["title"])])),[[Q,B.value]])}}});const it=ve(Ne,[["__scopeId","data-v-5c99bced"]]);export{it as default};
