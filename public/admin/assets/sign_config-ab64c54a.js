import{d as de,x as ue,r as m,n as A,q as a,h as r,c as p,R as z,s as w,w as o,e as d,a as u,t as i,u as n,B as b,F as G,T as K,i as x,a3 as f,aS as ce,L as _e,aE as pe,ac as me,E as fe,ad as ve,K as ge,a7 as ye,M as we,X as be,Y as xe,p as he,g as ke}from"./index-a3bdc7eb.js";/* empty css                   *//* empty css                  *//* empty css                   *//* empty css                *//* empty css                *//* empty css                 *//* empty css                 *//* empty css                    */import"./el-tooltip-4ed993c7.js";/* empty css                  *//* empty css                     *//* empty css                  *//* empty css                        *//* empty css               *//* empty css                        */import"./el-form-item-4ed993c7.js";/* empty css                  */import{h as Se,i as X,s as Ce}from"./member-c164d00b.js";import Ve from"./sign-day-3f4bfe56.js";import Ee from"./sign-continue-72a44d56.js";import{_ as De}from"./_plugin-vue_export-helper-c27b6911.js";/* empty css                 */const Y=T=>(he("data-v-009824e4"),T=T(),ke(),T),Ae={class:"main-container"},Te={class:"panel-title !text-sm"},Re=Y(()=>u("span",{class:"ml-[10px]"},"天",-1)),$e={key:0},Be={key:1,class:"flex ml-[5px]"},Oe=Y(()=>u("span",{class:"ml-[5px] mr-[5px]"},"|",-1)),Fe={class:"form-tip"},Ie={class:"form-tip"},Ue={class:"mt-[10px]"},Le={key:0},Pe={key:0},Me={key:1},Ne={class:"flex mt-[10px]"},je={class:"form-tip"},qe={class:"flex"},ze={class:"dialog-footer"},Ge={class:"dialog-footer"},Ke={class:"fixed-footer-wrap"},Xe={class:"fixed-footer"},Ye=de({__name:"sign_config",setup(T){ue().meta.title,m("signSet");const E=m(!0),D=m(!1),S=m(!1),I=m(),c=m({});let R=!1,$=0;const H=A({sign_period:[{required:!0,message:a("signPeriodTip"),trigger:"blur"}]}),v=A({gifts:[]}),O=m([]),t=A({is_use:0,sign_period:30,day_award:"",continue_award:[],rule_explain:""}),h=A({receive_num:"",continue_sign:"",receive_limit:"",continue_award:[]}),g=A({loading:!1,data:[]});(async()=>{const s=await(await Se()).data;Object.keys(t).forEach(e=>{s[e]!=null&&(t[e]=s[e])}),t.day_award&&(v.gifts=t.day_award,U()),t.continue_award&&t.continue_award.forEach((e,k)=>{g.data.push(f(e)),v.gifts=[];const _=f(e);delete _.continue_sign,delete _.continue_tag,delete _.receive_limit,delete _.receive_num,v.gifts=_,L(v,e,k)}),E.value=!1})();const B=m([]),U=async()=>{const s=await(await X(v)).data;B.value=[],Object.values(s).forEach(e=>{B.value.push(e)})},L=async(s,e,k=0,_=0)=>{const F=await(await X(s)).data;O.value=[],Object.values(F).forEach(C=>{O.value.push(C)}),h.receive_num=e.receive_num,h.continue_sign=e.continue_sign,h.receive_limit=e.receive_limit,h.continue_award=O.value,R?g.data.splice($,1,f(h)):_==0?g.data.splice(k,1,f(h)):g.data.push(f(h)),R=!1,$=0},J=async s=>{E.value||!s||await s.validate(e=>{if(e){const k=f(t);Ce(k).then(()=>{E.value=!1}).catch(()=>{E.value=!1})}})},P=()=>{D.value=!0},M=m(null),Q=async()=>{var s;await((s=M.value)==null?void 0:s.verify())&&(D.value=!1,!t.day_award.hasOwnProperty("balance")&&!t.day_award.hasOwnProperty("point")&&t.day_award.shop_coupon.is_use==0&&(t.day_award=""),v.gifts=t.day_award,U())},W=()=>{t.day_award="",B.value=[]},Z=()=>{c.value="",S.value=!0},ee=(s,e)=>{R=s,$=e,c.value=t.continue_award[e],S.value=!0},N=m(null),te=async()=>{var s;if(await((s=N.value)==null?void 0:s.verify())&&(S.value=!1,!c.value.hasOwnProperty("balance")&&!c.value.hasOwnProperty("point")&&c.value.shop_coupon.is_use==0&&(c.value=""),Object.keys(c.value).length>0)){const e=f(c.value);delete e.continue_sign,delete e.continue_tag,delete e.receive_limit,delete e.receive_num,v.gifts=e,t.continue_award.length>0&&t.continue_award.length-1,L(v,c.value,0,1),R?t.continue_award.splice($,1,f(c.value)):t.continue_award.push(f(c.value))}},ae=s=>{g.data.splice(s,1),t.continue_award.splice(s,1)},ne=()=>{t.rule_explain=a("ruleExplainDefault")};return(s,e)=>{const k=ce,_=_e,F=pe,C=me,y=fe,le=ve,oe=ge,ie=ye,se=we,j=be,q=xe;return r(),p("div",Ae,[z((r(),w(se,{class:"page-form",model:t,"label-width":"150px",ref_key:"ruleFormRef",ref:I,rules:H},{default:o(()=>[d(ie,{class:"box-card !border-none",shadow:"never"},{default:o(()=>[u("h3",Te,i(n(a)("signRule")),1),d(_,{label:n(a)("isUse")},{default:o(()=>[d(k,{modelValue:t.is_use,"onUpdate:modelValue":e[0]||(e[0]=l=>t.is_use=l)},null,8,["modelValue"])]),_:1},8,["label"]),t.is_use?(r(),w(_,{key:0,label:n(a)("signPeriod")},{default:o(()=>[d(F,{modelValue:t.sign_period,"onUpdate:modelValue":e[1]||(e[1]=l=>t.sign_period=l),clearable:"",class:"input-width","controls-position":"right"},null,8,["modelValue"]),Re]),_:1},8,["label"])):b("",!0),t.is_use?(r(),w(_,{key:1,label:n(a)("daySignAward"),prop:"formData.day_award"},{default:o(()=>[(r(!0),p(G,null,K(B.value,(l,V)=>(r(),p("div",{key:V},[l.is_use=="1"?(r(),p("span",$e,i(l.content)+"  ",1)):b("",!0)]))),128)),t.day_award==""?(r(),p("span",{key:0,class:"cursor-pointer tutorial-btn ml-[5px]",onClick:P},i(n(a)("set")),1)):(r(),p("div",Be,[u("span",{class:"cursor-pointer tutorial-btn",onClick:P},i(n(a)("modify")),1),Oe,u("span",{class:"cursor-pointer tutorial-btn",onClick:W},i(n(a)("delete")),1)])),u("div",Fe,i(n(a)("daySignAwardTip")),1)]),_:1},8,["label"])):b("",!0),t.is_use?(r(),w(_,{key:2,label:n(a)("continueSignAward"),prop:"formData.continue_award"},{default:o(()=>[u("div",null,[u("div",Ie,i(n(a)("continueSignAwardTipTop")),1),u("div",Ue,[z((r(),w(le,{data:g.data,size:"large"},{empty:o(()=>[u("span",null,i(g.loading?"":n(a)("emptyData")),1)]),default:o(()=>[d(C,{prop:"continue_sign",label:n(a)("continueSign"),"min-width":"120"},null,8,["label"]),d(C,{label:n(a)("continueSignAward"),"min-width":"300"},{default:o(({row:l})=>[(r(!0),p(G,null,K(l.continue_award,(V,re)=>(r(),p("div",{key:re},[V.is_use=="1"?(r(),p("span",Le,i(V.content),1)):b("",!0)]))),128))]),_:1},8,["label"]),d(C,{label:n(a)("receiveLimit"),"min-width":"120"},{default:o(({row:l})=>[l.receive_limit==1?(r(),p("span",Pe,i(n(a)("noLimit")),1)):(r(),p("span",Me,i(n(a)("everyOneLimit"))+i(l.receive_num)+i(n(a)("time")),1))]),_:1},8,["label"]),d(C,{label:n(a)("operation"),align:"right",fixed:"right",width:"130"},{default:o(l=>[d(y,{type:"primary",link:"",onClick:V=>ee(!0,l.$index)},{default:o(()=>[x(i(n(a)("modify")),1)]),_:2},1032,["onClick"]),d(y,{type:"primary",link:"",onClick:V=>ae(l.$index)},{default:o(()=>[x(i(n(a)("delete")),1)]),_:2},1032,["onClick"])]),_:1},8,["label"])]),_:1},8,["data"])),[[q,g.loading]])]),u("div",Ne,[u("span",{class:"cursor-pointer tutorial-btn",onClick:Z},i(n(a)("add")),1)]),u("div",je,i(n(a)("continueSignAwardTipBottom")),1)])]),_:1},8,["label"])):b("",!0),t.is_use?(r(),w(_,{key:3,label:n(a)("ruleExplain"),prop:"formData.rule_explain"},{default:o(()=>[u("div",qe,[d(oe,{modelValue:t.rule_explain,"onUpdate:modelValue":e[2]||(e[2]=l=>t.rule_explain=l),placeholder:n(a)("ruleExplainTip"),type:"textarea",rows:"5",class:"textarea-width",clearable:""},null,8,["modelValue","placeholder"]),d(y,{class:"ml-[20px]",type:"primary",onClick:e[3]||(e[3]=l=>ne()),plain:""},{default:o(()=>[x(i(n(a)("useDefaultExplain")),1)]),_:1})])]),_:1},8,["label"])):b("",!0)]),_:1})]),_:1},8,["model","rules"])),[[q,E.value]]),t.is_use?(r(),w(j,{key:0,modelValue:D.value,"onUpdate:modelValue":e[7]||(e[7]=l=>D.value=l),title:n(a)("daySignTitle"),width:"1200px","destroy-on-close":!0},{footer:o(()=>[u("span",ze,[d(y,{onClick:e[5]||(e[5]=l=>D.value=!1)},{default:o(()=>[x(i(n(a)("cancel")),1)]),_:1}),d(y,{type:"primary",onClick:e[6]||(e[6]=l=>Q())},{default:o(()=>[x(i(n(a)("confirm")),1)]),_:1})])]),default:o(()=>[d(Ve,{ref_key:"benefitsRef",ref:M,modelValue:t.day_award,"onUpdate:modelValue":e[4]||(e[4]=l=>t.day_award=l)},null,8,["modelValue"])]),_:1},8,["modelValue","title"])):b("",!0),t.is_use?(r(),w(j,{key:1,modelValue:S.value,"onUpdate:modelValue":e[11]||(e[11]=l=>S.value=l),title:n(a)("continueSignTitle"),width:"1200px","destroy-on-close":!0},{footer:o(()=>[u("span",Ge,[d(y,{onClick:e[9]||(e[9]=l=>S.value=!1)},{default:o(()=>[x(i(n(a)("cancel")),1)]),_:1}),d(y,{type:"primary",onClick:e[10]||(e[10]=l=>te())},{default:o(()=>[x(i(n(a)("confirm")),1)]),_:1})])]),default:o(()=>[d(Ee,{ref_key:"continueRef",ref:N,modelValue:c.value,"onUpdate:modelValue":e[8]||(e[8]=l=>c.value=l)},null,8,["modelValue"])]),_:1},8,["modelValue","title"])):b("",!0),u("div",Ke,[u("div",Xe,[d(y,{type:"primary",onClick:e[12]||(e[12]=l=>J(I.value))},{default:o(()=>[x(i(n(a)("save")),1)]),_:1})])])])}}});const bt=De(Ye,[["__scopeId","data-v-009824e4"]]);export{bt as default};
