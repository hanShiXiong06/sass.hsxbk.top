import{d as j,x as A,f as G,r as y,n as N,q as t,h as s,c as m,e as l,w as a,u as r,aP as H,R as Q,s as X,a as _,t as p,F as Y,T as J,B as v,i as f,aQ as W,a7 as Z,K as ee,L as oe,ab as le,aC as te,E as ae,at as re,au as ne,M as de,X as se,Y as pe}from"./index-5a756a51.js";/* empty css                   *//* empty css                  *//* empty css                   *//* empty css                *//* empty css                       *//* empty css                 *//* empty css                  */import{_ as ie}from"./index.vue_vue_type_script_setup_true_lang-75313763.js";import{_ as me}from"./index.vue_vue_type_style_index_0_lang-da4f10e9.js";import ue from"./index-92c2e799.js";/* empty css                 *//* empty css               *//* empty css                  *//* empty css                  *//* empty css                     *//* empty css                  */import"./el-form-item-4ed993c7.js";/* empty css                *//* empty css                   *//* empty css                       */import{c as ce,d as _e,f as fe}from"./wechat-ebed7018.js";import ge from"./reply-form-d718b0d8.js";import{_ as ye}from"./news-card.vue_vue_type_script_setup_true_lang-fa0779f0.js";import"./index.vue_vue_type_script_setup_true_lang-cb419dfd.js";import"./index.vue_vue_type_style_index_0_lang-c0b4b1fc.js";import"./attachment-a9811edd.js";/* empty css                        *//* empty css                      *//* empty css                    */import"./el-tooltip-4ed993c7.js";/* empty css                 *//* empty css               *//* empty css               *//* empty css                    *//* empty css                    */import"./el-dropdown-item-4ed993c7.js";import"./index.vue_vue_type_script_setup_true_lang-477c25f7.js";/* empty css                   */import"./_plugin-vue_export-helper-c27b6911.js";import"./sortable.esm-be94e56d.js";import"./upload-media.vue_vue_type_script_setup_true_lang-31f4ca28.js";import"./select-wechat-media.vue_vue_type_script_setup_true_lang-7dd6818e.js";/* empty css                 */const ve={class:"main-container"},he={class:"form-tip"},xe={class:"flex flex-col"},we={class:"flex items-center"},be={key:0,class:"w-[300px] bg-page p-[10px] mr-[10px] mb-[10px] rounded leading-none"},Ve={key:1,class:"w-[300px] bg-page p-[10px] mr-[10px] mb-[10px] rounded"},ke={key:2,class:"w-[300px] bg-page p-[10px] mr-[10px] mb-[10px] rounded"},Re={key:3,class:"w-[300px] bg-page p-[10px] mr-[10px] mb-[10px] rounded"},Ce={key:4,class:"w-[300px] bg-page p-[10px] mr-[10px] mb-[10px] rounded"},Ee={class:"mt-[10px]"},Ue={class:"fixed-footer-wrap"},Ne={class:"fixed-footer"},$e={class:"dialog-footer"},Vo=j({__name:"keyword_reply_edit",setup(Me){const b=A();G();const $=b.meta.title,g=y(!1),n=N({id:0,name:"",keyword:"",content:[],matching_type:"full",reply_method:"all"}),h=y({}),V=y(null),M=()=>{var d;(d=V.value)==null||d.verify().then(e=>{e&&(n.content.push(h.value),h.value={},g.value=!1)})},B=d=>{n.content.splice(d,1)},k=y(),P=N({name:[{required:!0,message:t("ruleNamePlaceholder"),trigger:"blur"}],keyword:[{required:!0,message:t("keywordPlaceholder"),trigger:"blur"}],content:[{validator:(d,e,u)=>{n.content.length||u(new Error(t("contentPlaceholder"))),u()},trigger:"blur"}]}),i=y(!1);b.query.id?ce(b.query.id).then(({data:d})=>{Object.keys(n).forEach(e=>{d[e]!=null&&(n[e]=d[e])}),i.value=!1}).catch():i.value=!1;const D=async d=>{i.value||!d||await d.validate(async e=>{if(e){const u=n.id?_e:fe;i.value=!0,u(n).then(()=>{i.value=!1}).catch(()=>{i.value=!1})}})};return(d,e)=>{const u=W,R=Z,C=ee,x=oe,E=le,q=te,F=ue,K=me,I=ie,w=ae,U=re,L=ne,T=de,z=se,O=pe;return s(),m("div",ve,[l(R,{class:"card !border-none",shadow:"never"},{default:a(()=>[l(u,{content:r($),icon:r(H),onBack:e[0]||(e[0]=o=>d.$router.back())},null,8,["content","icon"])]),_:1}),Q((s(),X(T,{class:"page-form mt-[15px]",model:n,"label-width":"150px",ref_key:"formRef",ref:k,rules:P},{default:a(()=>[l(R,{class:"box-card !border-none",shadow:"never"},{default:a(()=>[l(x,{label:r(t)("ruleName"),prop:"name"},{default:a(()=>[l(C,{modelValue:n.name,"onUpdate:modelValue":e[1]||(e[1]=o=>n.name=o),modelModifiers:{trim:!0},placeholder:r(t)("ruleNamePlaceholder"),class:"input-width",clearable:"",maxlength:"60"},null,8,["modelValue","placeholder"]),_("div",he,p(r(t)("ruleNameTips")),1)]),_:1},8,["label"]),l(x,{label:r(t)("keyword"),prop:"keyword"},{default:a(()=>[l(C,{modelValue:n.keyword,"onUpdate:modelValue":e[3]||(e[3]=o=>n.keyword=o),modelModifiers:{trim:!0},placeholder:r(t)("keywordPlaceholder"),class:"input-width",clearable:""},{prepend:a(()=>[l(q,{modelValue:n.matching_type,"onUpdate:modelValue":e[2]||(e[2]=o=>n.matching_type=o),style:{width:"115px"}},{default:a(()=>[l(E,{label:r(t)("allMatching"),value:"full"},null,8,["label"]),l(E,{label:r(t)("fuzzyMatching"),value:"like"},null,8,["label"])]),_:1},8,["modelValue"])]),_:1},8,["modelValue","placeholder"])]),_:1},8,["label"]),l(x,{label:r(t)("content"),prop:"content"},{default:a(()=>[_("div",xe,[(s(!0),m(Y,null,J(n.content,(o,S)=>(s(),m("div",we,[o.msgtype=="text"?(s(),m("div",be,p(o.text.content),1)):v("",!0),o.msgtype=="image"?(s(),m("div",Ve,[l(F,{limit:1,width:"120px",height:"120px",modelValue:o.image.url,"onUpdate:modelValue":c=>o.image.url=c},null,8,["modelValue","onUpdate:modelValue"])])):v("",!0),o.msgtype=="video"?(s(),m("div",ke,[l(K,{limit:1,width:"120px",height:"120px",modelValue:o.video.url,"onUpdate:modelValue":c=>o.video.url=c},null,8,["modelValue","onUpdate:modelValue"])])):v("",!0),o.msgtype=="mpnewsarticle"?(s(),m("div",Re,[l(ye,{modelValue:o.mpnewsarticle,"onUpdate:modelValue":c=>o.mpnewsarticle=c,mode:"show"},null,8,["modelValue","onUpdate:modelValue"])])):v("",!0),o.msgtype=="miniprogrampage"?(s(),m("div",Ce," 小程序卡片【"+p(o.miniprogrampage.appid)+"】 ",1)):v("",!0),l(I,{name:"element Delete",class:"cursor-pointer",onClick:c=>B(S)},null,8,["onClick"])]))),256)),_("div",Ee,[l(w,{type:"primary",onClick:e[4]||(e[4]=o=>g.value=!0)},{default:a(()=>[f(p(r(t)("addReplyContent")),1)]),_:1})])])]),_:1},8,["label"]),l(x,{label:r(t)("replyMethod"),prop:"reply_method"},{default:a(()=>[l(L,{modelValue:n.reply_method,"onUpdate:modelValue":e[5]||(e[5]=o=>n.reply_method=o)},{default:a(()=>[l(U,{label:"all"},{default:a(()=>[f(p(r(t)("replyMethodAll")),1)]),_:1}),l(U,{label:"rand"},{default:a(()=>[f(p(r(t)("replyMethodRand")),1)]),_:1})]),_:1},8,["modelValue"])]),_:1},8,["label"])]),_:1})]),_:1},8,["model","rules"])),[[O,i.value]]),_("div",Ue,[_("div",Ne,[l(w,{type:"primary",loading:i.value,onClick:e[6]||(e[6]=o=>D(k.value))},{default:a(()=>[f(p(r(t)("save")),1)]),_:1},8,["loading"])])]),l(z,{modelValue:g.value,"onUpdate:modelValue":e[9]||(e[9]=o=>g.value=o),title:r(t)("addReplyContent"),width:"60%","destroy-on-close":!0},{footer:a(()=>[_("span",$e,[l(w,{onClick:e[8]||(e[8]=o=>g.value=!1)},{default:a(()=>[f(p(r(t)("cancel")),1)]),_:1}),l(w,{type:"primary",onClick:M},{default:a(()=>[f(p(r(t)("confirm")),1)]),_:1})])]),default:a(()=>[l(ge,{modelValue:h.value,"onUpdate:modelValue":e[7]||(e[7]=o=>h.value=o),ref_key:"ReplyRef",ref:V},null,8,["modelValue"])]),_:1},8,["modelValue","title"])])}}});export{Vo as default};
