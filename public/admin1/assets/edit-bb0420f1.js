import{d as te,x as le,f as ae,r as k,n as re,l as oe,q as r,P as de,h as i,c as _,e as s,w as n,u as o,cW as ne,s as b,a as c,t as u,F as w,Q as N,v as q,B as V,c6 as T,i as f,bZ as se,cX as ie,a0 as ue,J as ce,K as pe,az as _e,aA as me,ab as ve,E as fe,L as xe,U as he,p as ge,g as be}from"./index-17984968.js";/* empty css                   *//* empty css                *//* empty css                  */import"./el-tooltip-4ed993c7.js";/* empty css                  *//* empty css                       *//* empty css                 */import"./el-form-item-4ed993c7.js";/* empty css                 *//* empty css                *//* empty css                   *//* empty css                       */import{a as we,b as ye,e as ke,c as Ve,d as Le}from"./level-113119c0.js";import{_ as Ee}from"./_plugin-vue_export-helper-c27b6911.js";const Fe=L=>(ge("data-v-da4c0bfd"),L=L(),be(),L),Re={class:"main-container"},Ce={class:"text text-[14px] leading-[25px]"},Pe={class:"flex"},$e={key:0,class:"w-[62px] h-[32px] mr-[10px] leading-[32px] text-center bg-[var(--el-color-info-light-8)] rounded-[4px] cursor-not-allowed"},Ne=["onClick"],Te={class:"text-[var(--el-text-color-secondary)] text-[12px] leading-[25px]"},De={class:"text-[var(--el-text-color-secondary)] text-[12px] leading-[25px]"},Oe={class:"text-[var(--el-text-color-secondary)] text-[12px] leading-[25px]"},Ue={class:"text text-[14px] leading-[25px]"},We={class:"mt-[10px] flex"},qe=["onClick"],Ie={class:"text-[var(--el-text-color-regular)]"},Me=Fe(()=>c("span",{class:"iconfont iconwenhao ml-[5px]"},null,-1)),Be={class:"text text-[14px] leading-[25px]"},Se={class:"fixed-footer-wrap"},Ke={class:"fixed-footer"},je=te({__name:"edit",setup(L){const D=le(),I=ae(),M=D.meta.title,m=k({levelWeightList:[{id:1,name:"一级"},{id:2,name:"二级"},{id:3,name:"三级"},{id:4,name:"四级"},{id:5,name:"五级"},{id:6,name:"六级"},{id:7,name:"七级"},{id:8,name:"八级"},{id:9,name:"九级"},{id:10,name:"十级"}],levelWeightDisableList:[],cardList:[]}),l=re({...{id:0,is_default:"0",level_num:0,level_name:"",one_rate:"",two_rate:"",upgrade_type:"1",card_ids:[]}}),x=k(!1),O=k(0),E={required:/[\S]+/,number:/^\d{0,10}$/,digit:/^\d{0,10}(.?\d{0,2})$/,special:/^\d{0,10}(.?\d{0,3})$/},B=(d,e,a)=>e?E.digit.test(e)?e>=100?a(new Error(r("oneRatePlaceholderThree"))):e<=0?a(new Error(r("oneRatePlaceholderFour"))):a():a(new Error(r("oneRatePlaceholderTwo"))):a(new Error(r("oneRatePlaceholderOne"))),S=(d,e,a)=>e?E.digit.test(e)?e>=100?a(new Error(r("twoRatePlaceholderThree"))):e<=0?a(new Error(r("twoRatePlaceholderFour"))):a():a(new Error(r("twoRatePlaceholderTwo"))):a(new Error(r("twoRatePlaceholderOne"))),K=(d,e,a)=>e?a():a(new Error(r("levelWeightPlaceholder"))),j=oe(()=>({level_num:[{required:!0,validator:K,trigger:"change"}],level_name:[{required:!0,message:r("levelNamePlaceholder"),trigger:"blur"}],one_rate:[{required:!0,validator:B,trigger:"blur"}],two_rate:[{required:!0,validator:S,trigger:"blur"}],card_ids:[{type:"array",required:!0,message:r("upgradeMethodPlaceholder"),trigger:"change"}]})),F=k(),z=d=>{l.level_num=d},A=d=>{var e;if(d.is_checkbox=d.is_checkbox?0:1,d.is_checkbox)l.card_ids.push(d.card_id);else{let a=l.card_ids.indexOf(d.card_id);l.card_ids.splice(a,1)}(e=F.value)==null||e.validateField("card_ids")},G=d=>{var a;d.is_checkbox=0;let e=l.card_ids.indexOf(d.card_id);l.card_ids.splice(e,1),(a=F.value)==null||a.validateField("card_ids")},H=d=>{Le(d).then(e=>{Object.keys(l).forEach(a=>{e.data[a]!=null&&(l[a]=e.data[a].toString())}),Object.values(m.value.cardList).forEach(a=>{e.data[a.key]!=null&&(l[a.key]=e.data[a.key],!l.card_ids.includes(a.card_id)&&a.is_checkbox&&l.card_ids.push(a.card_id))}),O.value=e.data.level_num,x.value=!1}).catch(()=>{x.value=!1})};l.id=D.query.id||0,(()=>{x.value=!0,we().then(d=>{m.value.levelWeightDisableList=d.data.map(e=>e.level_num),J(l.id)}).catch(()=>{x.value=!1})})();const J=d=>{ye({id:d}).then(e=>{m.value.cardList=e.data,l.id?H(l.id):x.value=!1}).catch(()=>{x.value=!1})},R=k(!1),Q=()=>{var d;(d=F.value)==null||d.validate(e=>{if(e){if(R.value)return;R.value=!0;let a=l.id?ke:Ve;Object.values(m.value.cardList).forEach(v=>{v.is_checkbox||delete l[v.key]}),a(l).then(v=>{R.value=!1,U()}).catch(()=>{R.value=!1})}})},U=()=>{I.push("/shop_fenxiao/management/level")};return(d,e)=>{const a=ie,v=ue,g=ce,h=pe,W=_e,X=me,Z=ve,$=fe,Y=xe,ee=he;return de((i(),_("div",Re,[s(v,{class:"card !border-none",shadow:"never"},{default:n(()=>[s(a,{content:o(M),icon:o(ne),onBack:e[0]||(e[0]=t=>d.$router.back())},null,8,["content","icon"])]),_:1}),s(v,{class:"card mt-[15px] !border-none",shadow:"never"},{default:n(()=>[x.value?V("",!0):(i(),b(Y,{key:0,class:"page-form",model:l,"label-width":"130px",ref_key:"formRef",ref:F,rules:o(j)},{default:n(()=>[c("div",Ce,u(o(r)("titleOne")),1),s(v,{class:"card !border-none",shadow:"never"},{default:n(()=>[l.is_default=="0"?(i(),b(h,{key:0,label:o(r)("levelWeight"),prop:"level_num"},{default:n(()=>[c("div",null,[c("div",Pe,[(i(!0),_(w,null,N(m.value.levelWeightList,(t,C)=>(i(),_(w,{key:t.id},[m.value.levelWeightDisableList.includes(t.id)&&t.id!=O.value?(i(),_("div",$e,u(t.name),1)):(i(),_("div",{key:1,class:q(["w-[62px] h-[32px] mr-[10px] leading-[30px] text-center border-[1px] border-solid border-[var(--el-border-color)] rounded-[4px] cursor-pointer",{"!border-[var(--el-color-primary)]":t.id==l.level_num}]),onClick:p=>z(t.id)},u(t.name),11,Ne)),s(g,{style:{display:"none"},modelValue:l.level_num,"onUpdate:modelValue":e[1]||(e[1]=p=>l.level_num=p),clearable:"",class:"input-width"},null,8,["modelValue"])],64))),128))]),c("p",Te,u(o(r)("levelWeightTip")),1)])]),_:1},8,["label"])):V("",!0),s(h,{label:o(r)("levelName"),prop:"level_name"},{default:n(()=>[s(g,{modelValue:l.level_name,"onUpdate:modelValue":e[2]||(e[2]=t=>l.level_name=t),maxlength:"25","show-word-limit":"",clearable:"",placeholder:o(r)("levelNamePlaceholder"),class:"input-width"},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),s(h,{label:o(r)("oneRate"),prop:"one_rate"},{default:n(()=>[c("div",null,[s(g,{modelValue:l.one_rate,"onUpdate:modelValue":e[3]||(e[3]=t=>l.one_rate=t),maxlength:"6","show-word-limit":"",clearable:"",class:"input-width",onKeyup:e[4]||(e[4]=t=>o(T)(t))},{append:n(()=>[f("%")]),_:1},8,["modelValue"]),c("p",De,u(o(r)("oneRatePlaceholder")),1)])]),_:1},8,["label"]),s(h,{label:o(r)("twoRate"),prop:"two_rate"},{default:n(()=>[c("div",null,[s(g,{modelValue:l.two_rate,"onUpdate:modelValue":e[5]||(e[5]=t=>l.two_rate=t),clearable:"",maxlength:"6","show-word-limit":"",class:"input-width",onKeyup:e[6]||(e[6]=t=>o(T)(t))},{append:n(()=>[f("%")]),_:1},8,["modelValue"]),c("p",Oe,u(o(r)("twoRatePlaceholder")),1)])]),_:1},8,["label"])]),_:1}),l.is_default=="0"?(i(),_(w,{key:0},[c("div",Ue,u(o(r)("titleTwo")),1),s(v,{class:"card !border-none",shadow:"never"},{default:n(()=>[s(h,{label:o(r)("upgradeMethod"),class:"!mb-0"},{default:n(()=>[s(X,{modelValue:l.upgrade_type,"onUpdate:modelValue":e[7]||(e[7]=t=>l.upgrade_type=t)},{default:n(()=>[s(W,{label:"1"},{default:n(()=>[f(u(o(r)("upgradeMethodLabelOne")),1)]),_:1}),s(W,{label:"2"},{default:n(()=>[f(u(o(r)("upgradeMethodLabelTwo")),1)]),_:1})]),_:1},8,["modelValue"])]),_:1},8,["label"]),m.value.cardList.length?(i(),b(h,{key:0,prop:"card_ids"},{default:n(()=>[c("div",We,[(i(!0),_(w,null,N(m.value.cardList,(t,C)=>(i(),_("div",{key:C,class:q(["h-[32px] flex flex-shrink-0 items-center mr-[10px] px-[16px] border-[1px] border-solid border-[var(--el-border-color)] rounded-[2px] cursor-pointer",{"!border-[var(--el-color-primary)]":t.is_checkbox}]),onClick:p=>A(t)},[c("span",Ie,u(t.card_name),1),s(Z,{class:"box-item",effect:"light",content:t.card_desc,placement:"bottom"},{default:n(()=>[Me]),_:2},1032,["content"])],10,qe))),128))])]),_:1})):V("",!0)]),_:1}),c("div",Be,u(o(r)("titleThree")),1),s(v,{class:"card !border-none",shadow:"never"},{default:n(()=>[(i(!0),_(w,null,N(m.value.cardList,(t,C)=>(i(),_(w,{key:C},[t.is_checkbox?(i(),b(h,{key:0,label:t.card_name,prop:t.key,rules:[{trigger:"blur",required:!0,validator:(p,P,y)=>P?P<=0?y(t.card_name+o(r)("rulesPlaceholderThree")):!E.digit.test(P)&&t.unit=="元"?y(`[${t.card_name}]${o(r)("reserveDecimal")}`):!E.number.test(P)&&t.unit!="元"?y(`[${t.card_name}]${o(r)("rulesPlaceholderTwo")}`):y():y(o(r)("rulesPlaceholderOne")+t.card_name)}],"label-width":"175px"},{default:n(()=>[t.key=="fenxiao_order_money"?(i(),b(g,{key:0,onKeyup:e[8]||(e[8]=p=>o(T)(p)),modelValue:l[t.key],"onUpdate:modelValue":p=>l[t.key]=p,modelModifiers:{trim:!0},maxlength:"7","show-word-limit":"",clearable:"",class:"input-width mr-[10px]"},{append:n(()=>[f(u(t.unit),1)]),_:2},1032,["modelValue","onUpdate:modelValue"])):(i(),b(g,{key:1,modelValue:l[t.key],"onUpdate:modelValue":p=>l[t.key]=p,modelModifiers:{trim:!0},onKeyup:e[9]||(e[9]=p=>o(se)(p)),maxlength:"7","show-word-limit":"",clearable:"",class:"input-width mr-[10px]"},{append:n(()=>[f(u(t.unit),1)]),_:2},1032,["modelValue","onUpdate:modelValue"])),s($,{type:"primary",link:"",onClick:p=>G(t)},{default:n(()=>[f(u(o(r)("delete")),1)]),_:2},1032,["onClick"])]),_:2},1032,["label","prop","rules"])):V("",!0)],64))),128))]),_:1})],64)):V("",!0)]),_:1},8,["model","rules"]))]),_:1}),c("div",Se,[c("div",Ke,[s($,{type:"primary",onClick:e[10]||(e[10]=t=>Q())},{default:n(()=>[f(u(o(r)("save")),1)]),_:1}),s($,{onClick:e[11]||(e[11]=t=>U())},{default:n(()=>[f(u(o(r)("back")),1)]),_:1})])])])),[[ee,x.value]])}}});const st=Ee(je,[["__scopeId","data-v-da4c0bfd"]]);export{st as default};
