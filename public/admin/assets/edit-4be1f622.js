import{d as te,x as ae,f as le,r as k,n as re,l as oe,q as r,R as de,h as i,c as _,e as s,w as n,u as o,aP as ne,s as b,a as c,t as u,F as w,T as N,v as M,B as V,c8 as T,i as f,b_ as se,aQ as ie,a7 as ue,K as ce,L as pe,at as _e,au as me,aU as ve,E as fe,M as xe,Y as he,p as ge,g as be}from"./index-a3bdc7eb.js";/* empty css                   *//* empty css                *//* empty css                  */import"./el-tooltip-4ed993c7.js";/* empty css                  *//* empty css                       *//* empty css                 */import"./el-form-item-4ed993c7.js";/* empty css                 *//* empty css                *//* empty css                   *//* empty css                       */import{a as we,b as ye,e as ke,c as Ve,d as Le}from"./level-800ddc67.js";import{_ as Ee}from"./_plugin-vue_export-helper-c27b6911.js";const Fe=L=>(ge("data-v-cff3393d"),L=L(),be(),L),Re={class:"main-container"},Ce={class:"text text-[14px] leading-[25px]"},Pe={class:"flex"},$e={key:0,class:"w-[62px] h-[32px] mr-[10px] leading-[32px] text-center bg-[var(--el-color-info-light-8)] rounded-[4px] cursor-not-allowed"},Ne=["onClick"],Te={class:"text-[var(--el-text-color-secondary)] text-[12px] leading-[25px]"},De={class:"text-[var(--el-text-color-secondary)] text-[12px] leading-[25px]"},Oe={class:"text-[var(--el-text-color-secondary)] text-[12px] leading-[25px]"},Ue={class:"text text-[14px] leading-[25px]"},qe={class:"mt-[10px] flex"},Me=["onClick"],We={class:"text-[var(--el-text-color-regular)]"},Ie=Fe(()=>c("span",{class:"iconfont iconwenhao ml-[5px]"},null,-1)),Be={class:"text text-[14px] leading-[25px]"},Se={class:"fixed-footer-wrap"},Ke={class:"fixed-footer"},je=te({__name:"edit",setup(L){const D=ae(),W=le(),I=D.meta.title,m=k({levelWeightList:[{id:1,name:"一级"},{id:2,name:"二级"},{id:3,name:"三级"},{id:4,name:"四级"},{id:5,name:"五级"},{id:6,name:"六级"},{id:7,name:"七级"},{id:8,name:"八级"},{id:9,name:"九级"},{id:10,name:"十级"}],levelWeightDisableList:[],cardList:[]}),a=re({...{id:0,is_default:"0",level_num:0,level_name:"",one_rate:"",two_rate:"",upgrade_type:"1",card_ids:[]}}),x=k(!1),O=k(0),E={required:/[\S]+/,number:/^\d{0,10}$/,digit:/^\d{0,10}(.?\d{0,2})$/,special:/^\d{0,10}(.?\d{0,3})$/},B=(d,e,l)=>e?E.digit.test(e)?e>=100?l(new Error(r("oneRatePlaceholderThree"))):e<=0?l(new Error(r("oneRatePlaceholderFour"))):l():l(new Error(r("oneRatePlaceholderTwo"))):l(new Error(r("oneRatePlaceholderOne"))),S=(d,e,l)=>e?E.digit.test(e)?e>=100?l(new Error(r("twoRatePlaceholderThree"))):e<=0?l(new Error(r("twoRatePlaceholderFour"))):l():l(new Error(r("twoRatePlaceholderTwo"))):l(new Error(r("twoRatePlaceholderOne"))),K=(d,e,l)=>e?l():l(new Error(r("levelWeightPlaceholder"))),j=oe(()=>({level_num:[{required:!0,validator:K,trigger:"change"}],level_name:[{required:!0,message:r("levelNamePlaceholder"),trigger:"blur"}],one_rate:[{required:!0,validator:B,trigger:"blur"}],two_rate:[{required:!0,validator:S,trigger:"blur"}],card_ids:[{type:"array",required:!0,message:r("upgradeMethodPlaceholder"),trigger:"change"}]})),F=k(),z=d=>{a.level_num=d},G=d=>{var e;if(d.is_checkbox=d.is_checkbox?0:1,d.is_checkbox)a.card_ids.push(d.card_id);else{let l=a.card_ids.indexOf(d.card_id);a.card_ids.splice(l,1)}(e=F.value)==null||e.validateField("card_ids")},H=d=>{var l;d.is_checkbox=0;let e=a.card_ids.indexOf(d.card_id);a.card_ids.splice(e,1),(l=F.value)==null||l.validateField("card_ids")},Q=d=>{Le(d).then(e=>{Object.keys(a).forEach(l=>{e.data[l]!=null&&(a[l]=e.data[l].toString())}),Object.values(m.value.cardList).forEach(l=>{e.data[l.key]!=null&&(a[l.key]=e.data[l.key],!a.card_ids.includes(l.card_id)&&l.is_checkbox&&a.card_ids.push(l.card_id))}),O.value=e.data.level_num,x.value=!1}).catch(()=>{x.value=!1})};a.id=D.query.id||0,(()=>{x.value=!0,we().then(d=>{m.value.levelWeightDisableList=d.data.map(e=>e.level_num),Y(a.id)}).catch(()=>{x.value=!1})})();const Y=d=>{ye({id:d}).then(e=>{m.value.cardList=e.data,a.id?Q(a.id):x.value=!1}).catch(()=>{x.value=!1})},R=k(!1),A=()=>{var d;(d=F.value)==null||d.validate(e=>{if(e){if(R.value)return;R.value=!0;let l=a.id?ke:Ve;Object.values(m.value.cardList).forEach(v=>{v.is_checkbox||delete a[v.key]}),l(a).then(v=>{R.value=!1,U()}).catch(()=>{R.value=!1})}})},U=()=>{W.push("/shop_fenxiao/management/level")};return(d,e)=>{const l=ie,v=ue,g=ce,h=pe,q=_e,J=me,X=ve,$=fe,Z=xe,ee=he;return de((i(),_("div",Re,[s(v,{class:"card !border-none",shadow:"never"},{default:n(()=>[s(l,{content:o(I),icon:o(ne),onBack:e[0]||(e[0]=t=>d.$router.back())},null,8,["content","icon"])]),_:1}),s(v,{class:"card mt-[15px] !border-none",shadow:"never"},{default:n(()=>[x.value?V("",!0):(i(),b(Z,{key:0,class:"page-form",model:a,"label-width":"130px",ref_key:"formRef",ref:F,rules:o(j)},{default:n(()=>[c("div",Ce,u(o(r)("titleOne")),1),s(v,{class:"card !border-none",shadow:"never"},{default:n(()=>[a.is_default=="0"?(i(),b(h,{key:0,label:o(r)("levelWeight"),prop:"level_num"},{default:n(()=>[c("div",null,[c("div",Pe,[(i(!0),_(w,null,N(m.value.levelWeightList,(t,C)=>(i(),_(w,{key:t.id},[m.value.levelWeightDisableList.includes(t.id)&&t.id!=O.value?(i(),_("div",$e,u(t.name),1)):(i(),_("div",{key:1,class:M(["w-[62px] h-[32px] mr-[10px] leading-[30px] text-center border-[1px] border-solid border-[var(--el-border-color)] rounded-[4px] cursor-pointer",{"!border-[var(--el-color-primary)]":t.id==a.level_num}]),onClick:p=>z(t.id)},u(t.name),11,Ne)),s(g,{style:{display:"none"},modelValue:a.level_num,"onUpdate:modelValue":e[1]||(e[1]=p=>a.level_num=p),clearable:"",class:"input-width"},null,8,["modelValue"])],64))),128))]),c("p",Te,u(o(r)("levelWeightTip")),1)])]),_:1},8,["label"])):V("",!0),s(h,{label:o(r)("levelName"),prop:"level_name"},{default:n(()=>[s(g,{modelValue:a.level_name,"onUpdate:modelValue":e[2]||(e[2]=t=>a.level_name=t),maxlength:"25","show-word-limit":"",clearable:"",placeholder:o(r)("levelNamePlaceholder"),class:"input-width"},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),s(h,{label:o(r)("oneRate"),prop:"one_rate"},{default:n(()=>[c("div",null,[s(g,{modelValue:a.one_rate,"onUpdate:modelValue":e[3]||(e[3]=t=>a.one_rate=t),maxlength:"6",clearable:"",class:"input-width",onKeyup:e[4]||(e[4]=t=>o(T)(t))},{append:n(()=>[f("%")]),_:1},8,["modelValue"]),c("p",De,u(o(r)("oneRatePlaceholder")),1)])]),_:1},8,["label"]),s(h,{label:o(r)("twoRate"),prop:"two_rate"},{default:n(()=>[c("div",null,[s(g,{modelValue:a.two_rate,"onUpdate:modelValue":e[5]||(e[5]=t=>a.two_rate=t),clearable:"",maxlength:"6",class:"input-width",onKeyup:e[6]||(e[6]=t=>o(T)(t))},{append:n(()=>[f("%")]),_:1},8,["modelValue"]),c("p",Oe,u(o(r)("twoRatePlaceholder")),1)])]),_:1},8,["label"])]),_:1}),a.is_default=="0"?(i(),_(w,{key:0},[c("div",Ue,u(o(r)("titleTwo")),1),s(v,{class:"card !border-none",shadow:"never"},{default:n(()=>[s(h,{label:o(r)("upgradeMethod"),class:"!mb-0"},{default:n(()=>[s(J,{modelValue:a.upgrade_type,"onUpdate:modelValue":e[7]||(e[7]=t=>a.upgrade_type=t)},{default:n(()=>[s(q,{label:"1"},{default:n(()=>[f(u(o(r)("upgradeMethodLabelOne")),1)]),_:1}),s(q,{label:"2"},{default:n(()=>[f(u(o(r)("upgradeMethodLabelTwo")),1)]),_:1})]),_:1},8,["modelValue"])]),_:1},8,["label"]),m.value.cardList.length?(i(),b(h,{key:0,prop:"card_ids"},{default:n(()=>[c("div",qe,[(i(!0),_(w,null,N(m.value.cardList,(t,C)=>(i(),_("div",{key:C,class:M(["h-[32px] flex flex-shrink-0 items-center mr-[10px] px-[16px] border-[1px] border-solid border-[var(--el-border-color)] rounded-[2px] cursor-pointer",{"!border-[var(--el-color-primary)]":t.is_checkbox}]),onClick:p=>G(t)},[c("span",We,u(t.card_name),1),s(X,{class:"box-item",effect:"light",content:t.card_desc,placement:"bottom"},{default:n(()=>[Ie]),_:2},1032,["content"])],10,Me))),128))])]),_:1})):V("",!0)]),_:1}),c("div",Be,u(o(r)("titleThree")),1),s(v,{class:"card !border-none",shadow:"never"},{default:n(()=>[(i(!0),_(w,null,N(m.value.cardList,(t,C)=>(i(),_(w,{key:C},[t.is_checkbox?(i(),b(h,{key:0,label:t.card_name,prop:t.key,rules:[{trigger:"blur",required:!0,validator:(p,P,y)=>P?P<=0?y(t.card_name+o(r)("rulesPlaceholderThree")):!E.digit.test(P)&&t.unit=="元"?y(`[${t.card_name}]${o(r)("reserveDecimal")}`):!E.number.test(P)&&t.unit!="元"?y(`[${t.card_name}]${o(r)("rulesPlaceholderTwo")}`):y():y(o(r)("rulesPlaceholderOne")+t.card_name)}],"label-width":"175px"},{default:n(()=>[t.key=="fenxiao_order_money"?(i(),b(g,{key:0,onKeyup:e[8]||(e[8]=p=>o(T)(p)),modelValue:a[t.key],"onUpdate:modelValue":p=>a[t.key]=p,modelModifiers:{trim:!0},maxlength:"7",clearable:"",class:"input-width mr-[10px]"},{append:n(()=>[f(u(t.unit),1)]),_:2},1032,["modelValue","onUpdate:modelValue"])):(i(),b(g,{key:1,modelValue:a[t.key],"onUpdate:modelValue":p=>a[t.key]=p,modelModifiers:{trim:!0},onKeyup:e[9]||(e[9]=p=>o(se)(p)),maxlength:"7",clearable:"",class:"input-width mr-[10px]"},{append:n(()=>[f(u(t.unit),1)]),_:2},1032,["modelValue","onUpdate:modelValue"])),s($,{type:"primary",link:"",onClick:p=>H(t)},{default:n(()=>[f(u(o(r)("delete")),1)]),_:2},1032,["onClick"])]),_:2},1032,["label","prop","rules"])):V("",!0)],64))),128))]),_:1})],64)):V("",!0)]),_:1},8,["model","rules"]))]),_:1}),c("div",Se,[c("div",Ke,[s($,{type:"primary",onClick:e[10]||(e[10]=t=>A())},{default:n(()=>[f(u(o(r)("save")),1)]),_:1}),s($,{onClick:e[11]||(e[11]=t=>U())},{default:n(()=>[f(u(o(r)("back")),1)]),_:1})])])])),[[ee,x.value]])}}});const st=Ee(je,[["__scopeId","data-v-cff3393d"]]);export{st as default};
