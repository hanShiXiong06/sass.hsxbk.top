import{d as de,x as ue,r as f,n as N,q as a,h as u,c as _,e as r,w as o,a as d,t as l,u as n,P as q,s as y,B as w,F as K,Q as z,i as b,aU as ce,K as pe,aK as _e,aa as fe,E as me,ac as ve,J as ge,a0 as ye,L as we,a1 as be,U as Se,p as xe,g as he}from"./index-17984968.js";/* empty css                   *//* empty css                  *//* empty css                   *//* empty css                *//* empty css                *//* empty css                 *//* empty css                 *//* empty css                    *//* empty css               */import"./el-tooltip-4ed993c7.js";/* empty css                  *//* empty css                     *//* empty css                  *//* empty css                        *//* empty css                        */import"./el-form-item-4ed993c7.js";/* empty css                  */import{h as ke,i as G,s as Ce}from"./member-0ccc6229.js";import Oe from"./sign-day-fbf78526.js";import Ve from"./sign-continue-a87547e7.js";import{_ as Ne}from"./_plugin-vue_export-helper-c27b6911.js";/* empty css                 */const Q=E=>(xe("data-v-cd84fb59"),E=E(),he(),E),Ee={class:"main-container bg-[#fff] rounded-[4px]"},De={class:"flex justify-between items-center mb-[5px]"},Je={class:"text-page-title"},Ae={class:"panel-title !text-sm"},Te=Q(()=>d("span",{class:"ml-[10px]"},"天",-1)),Ue={key:0},$e={key:1,class:"flex ml-[5px]"},Be=Q(()=>d("span",{class:"ml-[5px] mr-[5px]"},"|",-1)),Re={class:"form-tip"},Fe={class:"form-tip"},Ie={class:"mt-[10px]"},Pe={key:0},Le={key:0},je={key:1},Me={class:"flex mt-[10px]"},qe={class:"form-tip"},Ke={class:"flex"},ze={class:"dialog-footer"},Ge={class:"dialog-footer"},Qe={class:"fixed-footer-wrap"},He={class:"fixed-footer"},We=de({__name:"sign_config",setup(E){const H=ue().meta.title;f("signSet");const O=f(!0),V=f(!1),h=f(!1),B=f(),c=f({});let D=!1,J=0;const W=N({sign_period:[{required:!0,message:a("signPeriodTip"),trigger:"blur"}]}),m=N({gifts:[]}),T=f([]),t=N({is_use:0,sign_period:30,day_award:"",continue_award:[],rule_explain:""}),S=N({receive_num:"",continue_sign:"",receive_limit:"",continue_award:[]}),v=N({loading:!1,data:[]});(async()=>{const s=await(await ke()).data;Object.keys(t).forEach(e=>{s[e]!=null&&(t[e]=s[e])}),t.day_award&&(m.gifts=t.day_award,R()),t.continue_award&&t.continue_award.forEach((e,x)=>{v.data.push(JSON.parse(JSON.stringify(e))),m.gifts=[];const p=JSON.parse(JSON.stringify(e));delete p.continue_sign,delete p.continue_tag,delete p.receive_limit,delete p.receive_num,m.gifts=p,F(m,e,x)}),O.value=!1})();const A=f([]),R=async()=>{const s=await(await G(m)).data;A.value=[],Object.values(s).forEach(e=>{A.value.push(e)})},F=async(s,e,x=0,p=0)=>{const U=await(await G(s)).data;T.value=[],Object.values(U).forEach(k=>{T.value.push(k)}),S.receive_num=e.receive_num,S.continue_sign=e.continue_sign,S.receive_limit=e.receive_limit,S.continue_award=T.value,D?v.data.splice(J,1,JSON.parse(JSON.stringify(S))):p==0?v.data.splice(x,1,JSON.parse(JSON.stringify(S))):v.data.push(JSON.parse(JSON.stringify(S))),D=!1,J=0},X=async s=>{O.value||!s||await s.validate(e=>{if(e){const x=JSON.parse(JSON.stringify(t));Ce(x).then(()=>{O.value=!1}).catch(()=>{O.value=!1})}})},I=()=>{V.value=!0},P=f(null),Y=async()=>{var s;await((s=P.value)==null?void 0:s.verify())&&(console.log(t.day_award),V.value=!1,!t.day_award.hasOwnProperty("balance")&&!t.day_award.hasOwnProperty("point")&&t.day_award.shop_coupon.is_use==0&&(t.day_award=""),m.gifts=t.day_award,R())},Z=()=>{t.day_award="",A.value=[]},ee=()=>{c.value="",h.value=!0},te=(s,e)=>{D=s,J=e,c.value=t.continue_award[e],h.value=!0},L=f(null),ae=async()=>{var s;if(await((s=L.value)==null?void 0:s.verify())&&(h.value=!1,!c.value.hasOwnProperty("balance")&&!c.value.hasOwnProperty("point")&&c.value.shop_coupon.is_use==0&&(c.value=""),Object.keys(c.value).length>0)){const e=JSON.parse(JSON.stringify(c.value));delete e.continue_sign,delete e.continue_tag,delete e.receive_limit,delete e.receive_num,m.gifts=e,t.continue_award.length>0&&t.continue_award.length-1,F(m,c.value,0,1),D?t.continue_award.splice(J,1,JSON.parse(JSON.stringify(c.value))):t.continue_award.push(JSON.parse(JSON.stringify(c.value)))}},ne=s=>{v.data.splice(s,1),t.continue_award.splice(s,1)},ie=()=>{t.rule_explain=a("ruleExplainDefault")};return(s,e)=>{const x=ce,p=pe,U=_e,k=fe,g=me,oe=ve,le=ge,$=ye,se=we,j=be,M=Se;return u(),_("div",Ee,[r($,{class:"box-card !border-none",shadow:"never"},{default:o(()=>[d("div",De,[d("span",Je,l(n(H)),1)]),r($,{class:"box-card !border-none my-[10px]",shadow:"never"},{default:o(()=>[q((u(),y(se,{model:t,"label-width":"150px",ref_key:"ruleFormRef",ref:B,rules:W,class:"page-form"},{default:o(()=>[r($,{class:"box-card !border-none",shadow:"never"},{default:o(()=>[d("h3",Ae,l(n(a)("signRule")),1),r(p,{label:n(a)("isUse")},{default:o(()=>[r(x,{modelValue:t.is_use,"onUpdate:modelValue":e[0]||(e[0]=i=>t.is_use=i)},null,8,["modelValue"])]),_:1},8,["label"]),t.is_use?(u(),y(p,{key:0,label:n(a)("signPeriod")},{default:o(()=>[r(U,{modelValue:t.sign_period,"onUpdate:modelValue":e[1]||(e[1]=i=>t.sign_period=i),clearable:"",class:"input-width","controls-position":"right"},null,8,["modelValue"]),Te]),_:1},8,["label"])):w("",!0),t.is_use?(u(),y(p,{key:1,label:n(a)("daySignAward"),prop:"formData.day_award"},{default:o(()=>[(u(!0),_(K,null,z(A.value,(i,C)=>(u(),_("div",{key:C},[i.is_use=="1"?(u(),_("span",Ue,l(i.content)+"  ",1)):w("",!0)]))),128)),t.day_award==""?(u(),_("span",{key:0,class:"cursor-pointer tutorial-btn ml-[5px]",onClick:I},l(n(a)("set")),1)):(u(),_("div",$e,[d("span",{class:"cursor-pointer tutorial-btn",onClick:I},l(n(a)("modify")),1),Be,d("span",{class:"cursor-pointer tutorial-btn",onClick:Z},l(n(a)("delete")),1)])),d("div",Re,l(n(a)("daySignAwardTip")),1)]),_:1},8,["label"])):w("",!0),t.is_use?(u(),y(p,{key:2,label:n(a)("continueSignAward"),prop:"formData.continue_award"},{default:o(()=>[d("div",null,[d("div",Fe,l(n(a)("continueSignAwardTipTop")),1),d("div",Ie,[q((u(),y(oe,{data:v.data,size:"large"},{empty:o(()=>[d("span",null,l(v.loading?"":n(a)("emptyData")),1)]),default:o(()=>[r(k,{prop:"continue_sign",label:n(a)("continueSign"),"min-width":"120"},null,8,["label"]),r(k,{label:n(a)("continueSignAward"),"min-width":"300"},{default:o(({row:i})=>[(u(!0),_(K,null,z(i.continue_award,(C,re)=>(u(),_("div",{key:re},[C.is_use=="1"?(u(),_("span",Pe,l(C.content),1)):w("",!0)]))),128))]),_:1},8,["label"]),r(k,{label:n(a)("receiveLimit"),"min-width":"120"},{default:o(({row:i})=>[i.receive_limit==1?(u(),_("span",Le,l(n(a)("noLimit")),1)):(u(),_("span",je,l(n(a)("everyOneLimit"))+l(i.receive_num)+l(n(a)("time")),1))]),_:1},8,["label"]),r(k,{label:n(a)("operation"),align:"right",fixed:"right",width:"130"},{default:o(i=>[r(g,{type:"primary",link:"",onClick:C=>te(!0,i.$index)},{default:o(()=>[b(l(n(a)("modify")),1)]),_:2},1032,["onClick"]),r(g,{type:"primary",link:"",onClick:C=>ne(i.$index)},{default:o(()=>[b(l(n(a)("delete")),1)]),_:2},1032,["onClick"])]),_:1},8,["label"])]),_:1},8,["data"])),[[M,v.loading]])]),d("div",Me,[d("span",{class:"cursor-pointer tutorial-btn",onClick:ee},l(n(a)("add")),1)]),d("div",qe,l(n(a)("continueSignAwardTipBottom")),1)])]),_:1},8,["label"])):w("",!0),t.is_use?(u(),y(p,{key:3,label:n(a)("ruleExplain"),prop:"formData.rule_explain"},{default:o(()=>[d("div",Ke,[r(le,{modelValue:t.rule_explain,"onUpdate:modelValue":e[2]||(e[2]=i=>t.rule_explain=i),placeholder:n(a)("ruleExplainTip"),type:"textarea",rows:"5",class:"textarea-width",clearable:""},null,8,["modelValue","placeholder"]),r(g,{class:"ml-[20px]",type:"primary",onClick:e[3]||(e[3]=i=>ie()),plain:""},{default:o(()=>[b(l(n(a)("useDefaultExplain")),1)]),_:1})])]),_:1},8,["label"])):w("",!0)]),_:1})]),_:1},8,["model","rules"])),[[M,O.value]]),t.is_use?(u(),y(j,{key:0,modelValue:V.value,"onUpdate:modelValue":e[7]||(e[7]=i=>V.value=i),title:n(a)("daySignTitle"),width:"1200px","destroy-on-close":!0},{footer:o(()=>[d("span",ze,[r(g,{onClick:e[5]||(e[5]=i=>V.value=!1)},{default:o(()=>[b(l(n(a)("cancel")),1)]),_:1}),r(g,{type:"primary",onClick:e[6]||(e[6]=i=>Y())},{default:o(()=>[b(l(n(a)("confirm")),1)]),_:1})])]),default:o(()=>[r(Oe,{ref_key:"benefitsRef",ref:P,modelValue:t.day_award,"onUpdate:modelValue":e[4]||(e[4]=i=>t.day_award=i)},null,8,["modelValue"])]),_:1},8,["modelValue","title"])):w("",!0),t.is_use?(u(),y(j,{key:1,modelValue:h.value,"onUpdate:modelValue":e[11]||(e[11]=i=>h.value=i),title:n(a)("continueSignTitle"),width:"1200px","destroy-on-close":!0},{footer:o(()=>[d("span",Ge,[r(g,{onClick:e[9]||(e[9]=i=>h.value=!1)},{default:o(()=>[b(l(n(a)("cancel")),1)]),_:1}),r(g,{type:"primary",onClick:e[10]||(e[10]=i=>ae())},{default:o(()=>[b(l(n(a)("confirm")),1)]),_:1})])]),default:o(()=>[r(Ve,{ref_key:"continueRef",ref:L,modelValue:c.value,"onUpdate:modelValue":e[8]||(e[8]=i=>c.value=i)},null,8,["modelValue"])]),_:1},8,["modelValue","title"])):w("",!0),d("div",Qe,[d("div",He,[r(g,{type:"primary",onClick:e[12]||(e[12]=i=>X(B.value))},{default:o(()=>[b(l(n(a)("save")),1)]),_:1})])])]),_:1})]),_:1})])}}});const xt=Ne(We,[["__scopeId","data-v-cd84fb59"]]);export{xt as default};