import{d as G,x as Q,f as W,r as h,n as z,l as X,q as o,R as Z,u as a,h as x,c as P,e as s,w as d,aP as ee,a as r,i as v,t as m,s as b,c1 as k,F as te,T as le,B as oe,ca as U,cW as ae,aQ as se,a6 as ie,K as ne,L as re,as as de,at as me,bO as ue,au as pe,cb as _e,M as ce,E as fe,Y as xe}from"./index-6ea097a6.js";/* empty css                   *//* empty css                  *//* empty css                     *//* empty css                          *//* empty css                    *//* empty css                       *//* empty css                 *//* empty css                     *//* empty css                  *//* empty css                       *//* empty css                 */import ye from"./index-a6a5e859.js";/* empty css                *//* empty css                   *//* empty css                       */import{a as ve,e as ge,b as he}from"./task-ebb2d81d.js";import{h as be}from"./level-68948258.js";/* empty css                        */import"./index.vue_vue_type_style_index_0_lang-b4429e25.js";/* empty css                  *//* empty css                   */import"./attachment-eff12253.js";import"./index.vue_vue_type_script_setup_true_lang-5136f203.js";/* empty css               *//* empty css                  *//* empty css                  *//* empty css                      */import"./el-tooltip-4ed993c7.js";/* empty css                 *//* empty css               *//* empty css               *//* empty css                    *//* empty css                    */import"./el-dropdown-item-4ed993c7.js";import"./index.vue_vue_type_script_setup_true_lang-7edbe634.js";/* empty css                   */import"./index.vue_vue_type_script_setup_true_lang-3cb6d3b1.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./sortable.esm-be94e56d.js";const we={class:"main-container"},Ve={class:"flex"},ke=r("span",{class:"mx-[10px]"},"至",-1),Te={key:0},Fe={class:"flex flex-col"},Pe={class:"ml-[10px]"},Ne={class:"text-[#999] text-[12px]"},Ee={class:"flex flex-col mt-[10px]"},De={class:"flex -mt-[9px]"},Oe={class:"flex items-center ml-[2px] text-[#666]"},Ce={class:"ml-[10px]"},Ue={class:"flex -mt-[9px]"},Me={class:"flex items-center ml-[2px] text-[#666]"},Le={class:"ml-[10px]"},Ye={class:"flex -mt-[9px]"},$e={class:"flex items-center ml-[2px] text-[#666]"},Re={class:"ml-[10px]"},Se={class:"flex items-center"},He={class:"mr-[10px]"},Be={class:"ml-[10px]"},Ke={class:"flex flex-col mt-[10px]"},Ie={class:"flex -mt-[9px]"},qe={class:"mr-[10px]"},Je=r("span",null,null,-1),je={class:"flex items-center text-[#666] -mt-[9px]"},Ae={class:"mr-[10px]"},Ge={class:"ml-[10px]"},Qe=r("span",null,null,-1),We={class:"fixed-footer-wrap"},ze={class:"fixed-footer"},Bt=G({__name:"edit",setup(Xe){const N=Q(),E=W(),M=N.meta.title,T=h(!1);let g=h();const e=z({...{id:"",name:"",time_type:"1",time:"",start_time:"2024-01-22 12:52:00",end_time:"",level_type:"1",level:[],cover:"",times:"",rules:[{condition:{type:["order_num"]},reward:{commission:""}}],remark:"",send_time_type:"1",send_time:""}});e.id=h(N.query.id);const L=X(()=>({name:[{required:!0,message:o("taskNamPlaceholder"),trigger:"blur"}],time:[{validator:(n,t,i)=>{e.start_time||i(new Error(o("startTimePlaceholder"))),e.time_type!=2&&!e.end_time&&i(new Error(o("endTimePlaceholder"))),e.time_type!=2&&w(e.end_time)<w(e.start_time)&&i(new Error(o("tmePlaceholder1"))),i()},trigger:["blur","change"]}],times:[{validator:(n,t,i)=>{/^[1-9]\d*|0$/.test(parseFloat(e.times))?i():i(new Error(o("timesRepeatableRulesPlaceholder")))},trigger:["blur","change"]}],level:[{validator:(n,t,i)=>{e.level_type==2&&!e.level.length?i(new Error(o("levelPlaceholder"))):i()},trigger:["blur","change"]}],type:[{validator:(n,t,i)=>{e.rules[0].condition.type.length||i(new Error(o("leastSelectTaskIndex")));const _=u=>{const f=parseFloat(u);return!isNaN(f)&&f%1!==0},p=u=>{let f=parseFloat(u);if(typeof f!="number"||isNaN(f))return!1;const c=f.toString(),y=c.indexOf(".");return y===-1?!0:c.length-y-1<=2};e.rules[0].condition.type.indexOf("order_num")>-1&&(!e.rules[0].condition.order_num||e.rules[0].condition.order_num<=0||_(e.rules[0].condition.order_num))&&i(new Error(o("conditionOrderNumTips3"))),e.rules[0].condition.type.indexOf("order_money")>-1&&(!e.rules[0].condition.order_money||e.rules[0].condition.order_money<=0||!p(e.rules[0].condition.order_money))&&i(new Error(o("conditionOrderMoneyTips3"))),e.rules[0].condition.type.indexOf("child_num")>-1&&(!e.rules[0].condition.child_num||e.rules[0].condition.child_num<=0||_(e.rules[0].condition.child_num))&&i(new Error(o("conditionFenxiaoNumTips3"))),i()},trigger:["blur"]}],send_time_type:[{validator:(n,t,i)=>{e.send_time||i(new Error(o("selectTimePlaceholder1")));const _=/^[1-9]\d*$/;e.send_time_type==2&&!_.test(e.send_time)&&i(new Error(o("selectTimePlaceholder2"))),e.send_time_type==1&&w(e.end_time)>w(e.send_time)&&i(new Error(o("selectTimePlaceholder3"))),i()},trigger:["blur","change"]}],"rules[0].reward.commission":[{required:!0,message:o("taskContentPlaceholder"),trigger:"blur"},{validator:(n,t,i)=>{t<=0&&i(new Error(o("taskCommissionPlaceholder"))),i()},trigger:["blur","change"]}]}));let D=h([]);(()=>{be().then(n=>{D.value=n.data})})();let F=h(!0);const Y=()=>{ve({id:e.id}).then(n=>{let t=JSON.parse(JSON.stringify(n.data));t&&Object.keys(t).length&&(e.name=t.name,e.cover=t.cover,e.time_type=t.time_type,e.start_time=t.start_time,e.end_time=t.end_time,e.level_type=t.level_type,e.level=t.level,e.times=t.times.toString(),e.rules=t.rules,e.remark=t.remark,e.send_time_type=t.send_time_type,e.send_time=t.send_time_type==1?ae(t.send_time):t.send_time),F.value=!1})};e.id?Y():F.value=!1;const $=async n=>{T.value||!n||await n.validate(async t=>{if(t){let i=JSON.parse(JSON.stringify(e));e.time_type==2&&(i.end_time=0),(i.id?ge:he)(i).then(p=>{T.value=!1,E.push("/shop_fenxiao/task/list")}).catch(()=>{T.value=!1})}})},R=()=>{E.push("/shop_fenxiao/task/list")},S=()=>{var n=new Date,t=n.getFullYear(),i=("0"+(n.getMonth()+1)).slice(-2),_=("0"+n.getDate()).slice(-2),p=("0"+n.getHours()).slice(-2),u=("0"+n.getMinutes()).slice(-2),f=("0"+n.getSeconds()).slice(-2);return`${t}-${i}-${_} ${p}:${u}:${f}`};e.start_time=S();const O=n=>n.valueOf()<Date.now(),w=n=>{var t=new Date(n);return t.getTime()},H=(n,t)=>{n=="2"&&(e.send_time_type="2"),setTimeout(()=>{t&&t.clearValidate("send_time_type")})},B=n=>{e.send_time="",setTimeout(()=>{n&&n.clearValidate("send_time_type")})},K=n=>{let t=["order_num","order_money","child_num"],i=e.rules[0].condition.type[0];t.forEach((_,p)=>{_!=i&&(e.rules[0].condition[_]="")}),setTimeout(()=>{n&&n.clearValidate("type")})};return(n,t)=>{const i=se,_=ie,p=ne,u=re,f=ye,c=de,y=me,V=ue,I=pe,q=_e,J=ce,C=fe,j=xe;return Z((x(),P("div",we,[s(_,{class:"card !border-none",shadow:"never"},{default:d(()=>[s(i,{content:a(M),icon:a(ee),onBack:t[0]||(t[0]=l=>n.$router.back())},null,8,["content","icon"])]),_:1}),s(_,{class:"card mt-[15px] !border-none",shadow:"never"},{default:d(()=>[s(J,{class:"page-form",model:e,"label-width":"120px",ref_key:"taskFormRef",ref:g,rules:a(L)},{default:d(()=>[s(u,{label:a(o)("taskNam"),prop:"name"},{default:d(()=>[s(p,{modelValue:e.name,"onUpdate:modelValue":t[1]||(t[1]=l=>e.name=l),modelModifiers:{trim:!0},clearable:"",placeholder:a(o)("taskNamPlaceholder"),class:"input-width",maxlength:"60","show-word-limit":""},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),s(u,{label:a(o)("taskCover")},{default:d(()=>[r("div",null,[s(f,{modelValue:e.cover,"onUpdate:modelValue":t[2]||(t[2]=l=>e.cover=l),limit:1},null,8,["modelValue"])])]),_:1},8,["label"]),s(u,{label:a(o)("taskTime")},{default:d(()=>[s(y,{modelValue:e.time_type,"onUpdate:modelValue":t[3]||(t[3]=l=>e.time_type=l),onChange:t[4]||(t[4]=l=>H(l,a(g)))},{default:d(()=>[s(c,{label:"1"},{default:d(()=>[v(m(a(o)("assigntTime")),1)]),_:1}),s(c,{label:"2"},{default:d(()=>[v(m(a(o)("longTerm")),1)]),_:1})]),_:1},8,["modelValue"])]),_:1},8,["label"]),s(u,{label:"",prop:"time"},{default:d(()=>[s(V,{class:"!w-[200px]",modelValue:e.start_time,"onUpdate:modelValue":t[5]||(t[5]=l=>e.start_time=l),"value-format":"YYYY-MM-DD HH:mm:ss",type:"datetime","disabled-date":O,placeholder:a(o)("startTimePlaceholder")},null,8,["modelValue","placeholder"]),r("div",Ve,[ke,e.time_type==2?(x(),P("span",Te,"长期有效")):(x(),b(V,{key:1,class:"!w-[300px]",modelValue:e.end_time,"onUpdate:modelValue":t[6]||(t[6]=l=>e.end_time=l),"value-format":"YYYY-MM-DD HH:mm:ss","disabled-date":O,type:"datetime",placeholder:a(o)("endTimePlaceholder")},null,8,["modelValue","placeholder"]))])]),_:1}),s(u,{label:a(o)("taskType"),prop:"times"},{default:d(()=>[r("div",Fe,[r("div",null,[s(p,{modelValue:e.times,"onUpdate:modelValue":t[7]||(t[7]=l=>e.times=l),modelModifiers:{trim:!0},maxlength:"2","show-word-limit":"",clearable:"",placeholder:a(o)("timesRepeatablePlaceholder"),class:"!w-[180px]",onKeyup:t[8]||(t[8]=l=>a(k)(l))},null,8,["modelValue","placeholder"]),r("span",Pe,m(a(o)("timesNext")),1)]),r("span",Ne,m(a(o)("timesRepeatableHint")),1)])]),_:1},8,["label"]),s(u,{label:a(o)("level")},{default:d(()=>[s(y,{modelValue:e.level_type,"onUpdate:modelValue":t[9]||(t[9]=l=>e.level_type=l)},{default:d(()=>[s(c,{label:"1"},{default:d(()=>[v(m(a(o)("allLevel")),1)]),_:1}),s(c,{label:"2"},{default:d(()=>[v(m(a(o)("portionLevel")),1)]),_:1})]),_:1},8,["modelValue"])]),_:1},8,["label"]),e.level_type==2?(x(),b(u,{key:0,label:"",prop:"level"},{default:d(()=>[s(q,{modelValue:e.level,"onUpdate:modelValue":t[10]||(t[10]=l=>e.level=l)},{default:d(()=>[(x(!0),P(te,null,le(a(D),(l,A)=>(x(),b(I,{label:l.level_id+"",key:A},{default:d(()=>[v(m(l.level_name),1)]),_:2},1032,["label"]))),128))]),_:1},8,["modelValue"])]),_:1})):oe("",!0),s(u,{label:a(o)("taskIndex"),prop:"type"},{default:d(()=>[s(y,{modelValue:e.rules[0].condition.type[0],"onUpdate:modelValue":t[17]||(t[17]=l=>e.rules[0].condition.type[0]=l),onChange:t[18]||(t[18]=l=>K(a(g)))},{default:d(()=>[r("div",Ee,[s(c,{label:"order_num",class:"!h-[auto] !flex !items-start"},{default:d(()=>[r("div",De,[r("span",null,m(a(o)("conditionOrderNum")),1),r("div",Oe,[s(p,{modelValue:e.rules[0].condition.order_num,"onUpdate:modelValue":t[11]||(t[11]=l=>e.rules[0].condition.order_num=l),clearable:"",onKeyup:t[12]||(t[12]=l=>a(k)(l)),class:"!w-[100px] ml-2",maxlength:"7","show-word-limit":"",disabled:e.rules[0].condition.type.indexOf("order_num")==-1},null,8,["modelValue","disabled"]),r("span",Ce,m(a(o)("conditionOrderNumTips2")),1)])])]),_:1}),s(c,{label:"order_money",class:"my-[15px] !h-[auto] !flex !items-start"},{default:d(()=>[r("div",Ue,[r("span",null,m(a(o)("conditionOrderMoney")),1),r("div",Me,[s(p,{modelValue:e.rules[0].condition.order_money,"onUpdate:modelValue":t[13]||(t[13]=l=>e.rules[0].condition.order_money=l),maxlength:"7",onKeyup:t[14]||(t[14]=l=>a(U)(l)),"show-word-limit":"",clearable:"",class:"!w-[100px] ml-2",disabled:e.rules[0].condition.type.indexOf("order_money")==-1},null,8,["modelValue","disabled"]),r("span",Le,m(a(o)("conditionOrderMoneyTips2")),1)])])]),_:1}),s(c,{label:"child_num",class:"!h-[auto] !flex !items-start"},{default:d(()=>[r("div",Ye,[r("span",null,m(a(o)("conditionFenxiaoNum")),1),r("div",$e,[s(p,{modelValue:e.rules[0].condition.child_num,"onUpdate:modelValue":t[15]||(t[15]=l=>e.rules[0].condition.child_num=l),maxlength:"7",onKeyup:t[16]||(t[16]=l=>a(k)(l)),"show-word-limit":"",clearable:"",class:"!w-[100px] ml-2",disabled:e.rules[0].condition.type.indexOf("child_num")==-1},null,8,["modelValue","disabled"]),r("span",Re,m(a(o)("conditionFenxiaoNumTips2")),1)])])]),_:1})])]),_:1},8,["modelValue"])]),_:1},8,["label"]),s(u,{label:a(o)("taskContent"),prop:"rules[0].reward.commission"},{default:d(()=>[r("div",Se,[r("span",He,m(a(o)("return")),1),s(p,{modelValue:e.rules[0].reward.commission,"onUpdate:modelValue":t[19]||(t[19]=l=>e.rules[0].reward.commission=l),clearable:"",onKeyup:t[20]||(t[20]=l=>a(U)(l)),class:"!w-[200px]",maxlength:"7","show-word-limit":""},null,8,["modelValue"]),r("span",Be,m(a(o)("brokerage")),1)])]),_:1},8,["label"]),s(u,{label:a(o)("awardTime"),prop:"send_time_type"},{default:d(()=>[s(y,{modelValue:e.send_time_type,"onUpdate:modelValue":t[24]||(t[24]=l=>e.send_time_type=l),onChange:t[25]||(t[25]=l=>B(a(g)))},{default:d(()=>[r("div",Ke,[s(c,{label:"1",class:"!h-[auto] !flex !items-start",disabled:e.time_type==2},{default:d(()=>[r("div",Ie,[r("span",qe,m(a(o)("fixedTime")),1),s(V,{class:"!w-[200px]",modelValue:e.send_time,"onUpdate:modelValue":t[21]||(t[21]=l=>e.send_time=l),"value-format":"YYYY-MM-DD HH:mm:ss",type:"datetime",disabled:e.time_type==2||e.send_time_type==2,placeholder:a(o)("selectTimePlaceholder")},null,8,["modelValue","disabled","placeholder"])]),Je]),_:1},8,["disabled"]),s(c,{label:"2",class:"mt-[15px] !h-[auto] !flex !items-start"},{default:d(()=>[r("div",je,[r("span",Ae,m(a(o)("taskAttainment")),1),e.send_time_type==1?(x(),b(p,{key:0,class:"!w-[100px] ml-2",disabled:"true"})):(x(),b(p,{key:1,modelValue:e.send_time,"onUpdate:modelValue":t[22]||(t[22]=l=>e.send_time=l),modelModifiers:{trim:!0},maxlength:"4","show-word-limit":"",clearable:"",class:"!w-[100px] ml-2",onKeyup:t[23]||(t[23]=l=>a(k)(l))},null,8,["modelValue"])),r("span",Ge,m(a(o)("taskAttainment1")),1)]),Qe]),_:1})])]),_:1},8,["modelValue"])]),_:1},8,["label"]),s(u,{label:a(o)("remark")},{default:d(()=>[s(p,{modelValue:e.remark,"onUpdate:modelValue":t[26]||(t[26]=l=>e.remark=l),maxlength:"200","show-word-limit":"",type:"textarea",clearable:"",placeholder:a(o)("remarkPlaceholder"),class:"!w-[450px]",rows:"6"},null,8,["modelValue","placeholder"])]),_:1},8,["label"])]),_:1},8,["model","rules"])]),_:1}),r("div",We,[r("div",ze,[s(C,{type:"primary",onClick:t[27]||(t[27]=l=>$(a(g)))},{default:d(()=>[v(m(a(o)("save")),1)]),_:1}),s(C,{onClick:t[28]||(t[28]=l=>R())},{default:d(()=>[v(m(a(o)("back")),1)]),_:1})])])])),[[j,a(F)]])}}});export{Bt as default};