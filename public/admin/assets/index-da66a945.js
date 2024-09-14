import{O as C,d as ce,r as m,a4 as de,Q as _e,a2 as Q,h as u,c as p,e,w as a,R as I,a as n,i as g,t as o,B as y,F as M,T as D,u as i,q as s,a0 as F,s as W,U as H,b3 as fe,ah as X,G as z,a5 as ve,aW as ge,V as me,E as he,aM as xe,aN as ke,a1 as ye,b4 as we,X as be,p as Ce,g as Te}from"./index-29db729d.js";/* empty css                  *//* empty css                   */import{T as Ee,_ as Be}from"./dark-7c7c4f50.js";/* empty css               *//* empty css                  *//* empty css                     *//* empty css                 */import{b as Ve}from"./module-73025eee.js";import{_ as Ue}from"./_plugin-vue_export-helper-c27b6911.js";function Se(c=""){return C.get(c?`upgrade/${c}`:"upgrade")}function Ie(){return C.get("upgrade/task")}function Me(c=""){return C.post(c?`upgrade/${c}`:"upgrade")}function Fe(){return C.post("upgrade/execute",{})}function Ne(c=""){return C.get(c?`upgrade/check/${c}`:"upgrade/check")}function J(){return C.post("upgrade/clear")}const $e=c=>(Ce("data-v-983dd45b"),c=c(),Te(),c),Le={key:0,class:"h-[60vh] flex flex-col"},De={class:"text-lg"},He={class:"font-bold"},Re={class:"font-bold"},je={key:0,class:"mt-[10px]"},qe=$e(()=>n("a",{class:"text-primary",href:"https://www.niucloud.com",target:"_blank"},"niucloud-admin官网",-1)),Ae={class:"font-bold text-lg"},Ge={key:0,class:"mt-[5px]"},Ke=["innerHTML"],Oe={key:1,class:"flex justify-end"},Pe={key:0,class:"h-[60vh] flex flex-col"},Qe={key:0,class:"bg-[#fff] my-3"},We={class:"pt-[20px] pl-[20px]"},Xe={class:"px-[20px] pt-[10px] text-[14px] el-table"},ze={key:0},Je={key:1},Ye={key:0},Ze={key:1},et={class:"h-[60vh]"},tt={class:"h-[60vh] flex flex-col"},at={class:"flex-1 h-0"},lt={class:"flex justify-end"},st=["innerHTML"],nt={class:"flex justify-end"},ot=ce({__name:"index",emits:["complete","cloudbuild"],setup(c,{expose:Y,emit:R}){const _=m(!1),d=m(null),f=m(null),h=m("content"),T=m(null),w=m(!1),E=m(null),B=m(!1);let N=[];const U=()=>{Ie().then(({data:t})=>{if(t){if(!_.value){ee();return}if(f.value||(E.value.execute("clear"),E.value.execute("开始升级")),t.log.forEach(l=>{N.includes(l)||(E.value.pushMessage({content:`正在执行：${l}`}),N.push(l))}),t.error){f.value=t,H({message:"升级失败",type:"error"}),E.value.pushMessage({content:t.error,class:"error"});return}if(t.step=="upgradeComplete"){h.value="complete",V&&V.close(),R("complete"),J();return}f.value=t,Z()}}).catch()};U();const Z=()=>{Fe().then(()=>{U()}).catch()};let V=null;const ee=()=>{V=fe.success({title:s("warning"),dangerouslyUseHTMLString:!0,message:X("div",{},[s("upgrade.upgradingTips"),X("span",{class:"text-primary cursor-pointer",onClick:te},[s("upgrade.clickView")])]),duration:0,showClose:!1})},te=()=>{_.value=!0,h.value="upgrade",U(),V&&V.close()},j=m("");de().then(t=>{j.value=t.data.version.version});const q=m("");Ve().then(({data:t})=>{q.value=t.last_version});const ae=async()=>{var l,x;if(w.value)return;w.value=!0;const t=((l=d.value)==null?void 0:l.app.app_key)!="niucloud-admin"?(x=d.value)==null?void 0:x.app.app_key:"";await Ne(t).then(async({data:b})=>{b.is_pass?await Me(t).then(()=>{U()}).catch(()=>{w.value=!1}):T.value=b}).catch(),w.value&&(h.value="upgrade")},le=(t="")=>{if(f.value)H({message:"已有正在执行中的升级任务",type:"error"}),_.value=!0;else{if(t&&j.value!=q.value){H({message:"存在新版本框架，请先升级框架",type:"error"});return}Se(t).then(({data:l})=>{d.value=l,z.get("upgradeTipsLock")?_.value=!0:B.value=!0}).catch()}};let $=null;const A=new Ee,se=(t,l,x,b,k)=>{if(l=="开始升级"){x(A);const v=ne(["/","——","\\","|"]);$=setInterval(()=>{A.flush("> "+v.next().value)},150)}},ne=t=>{var l=0;return{next(){return l+1==t.length&&(l=0),{value:t[l++]}}}},oe=t=>{h.value=="upgrade"&&f.value&&!f.value.error?ve.confirm(s("upgrade.showDialogCloseTips"),s("warning"),{confirmButtonText:s("confirm"),cancelButtonText:s("cancel"),type:"warning"}).then(()=>{t()}).catch(()=>{}):t()};_e(()=>_.value,()=>{_.value||re()});const re=()=>{h.value="content",w.value=!1,f.value=null,N=[],$&&clearInterval($),J().then(()=>{}).catch()},ue=()=>{_.value=!1,R("cloudbuild")},G=(t=!1)=>{t&&z.set({key:"upgradeTipsLock",data:t}),B.value=!1,!t&&(_.value=!0)};return Y({open:le}),(t,l)=>{const x=ge,b=me,k=he,v=xe,L=ke,K=Q("Select"),S=ye,O=Q("CloseBold"),ie=we,P=be;return u(),p(M,null,[e(P,{modelValue:_.value,"onUpdate:modelValue":l[1]||(l[1]=r=>_.value=r),title:i(s)("upgrade.title"),width:"850px","close-on-click-modal":!1,"close-on-press-escape":!1,"before-close":oe},{default:a(()=>[I(n("div",null,[d.value?(u(),p("div",Le,[n("div",De,[g(" 本次升级将从"),n("span",He,o(d.value.version),1),g("升级到"),n("span",Re,o(d.value.upgrade_version),1),g("版本 ")]),d.value.upgrade_version!=d.value.last_version?(u(),p("div",je,[e(x,{type:"info","show-icon":""},{title:a(()=>[g(" 当前最新版本为"+o(d.value.last_version)+"，您的服务已于"+o(d.value.expire_time)+"到期。如需升级到最新版可在",1),qe,g("购买相关服务后再进行升级 ")]),_:1})])):y("",!0),e(b,{class:"flex-1 h-0 mt-[20px]"},{default:a(()=>[(u(!0),p(M,null,D(d.value.version_list,(r,pe)=>(u(),p("div",{class:"mt-[20px]",key:pe},[n("div",Ae,o(r.version_no),1),r.release_time?(u(),p("div",Ge,o(r.release_time),1)):y("",!0),r.upgrade_log?(u(),p("div",{key:1,class:"mt-[10px] p-[10px] rounded bg-[#f4f4f5] whitespace-pre-wrap !break-all",innerHTML:r.upgrade_log},null,8,Ke)):y("",!0)]))),128))]),_:1})])):y("",!0),d.value.version_list.length?(u(),p("div",Oe,[e(k,{type:"primary",onClick:ae,loading:w.value},{default:a(()=>[g(o(i(s)("upgrade.upgradeButton")),1)]),_:1},8,["loading"])])):y("",!0)],512),[[F,h.value=="content"]]),I(n("div",null,[T.value&&!f.value?(u(),p("div",Pe,[e(b,null,{default:a(()=>[T.value.dir?(u(),p("div",Qe,[n("p",We,o(i(s)("upgrade.dirPermission")),1),n("div",Xe,[e(L,{class:"py-[10px] items table-head-bg pl-[15px] mb-[10px]"},{default:a(()=>[e(v,{span:12},{default:a(()=>[n("span",null,o(i(s)("upgrade.path")),1)]),_:1}),e(v,{span:6},{default:a(()=>[n("span",null,o(i(s)("upgrade.demand")),1)]),_:1}),e(v,{span:6},{default:a(()=>[n("span",null,o(i(s)("status")),1)]),_:1})]),_:1}),(u(!0),p(M,null,D(T.value.dir.is_readable,r=>(u(),W(L,{class:"pb-[10px] items pl-[15px]"},{default:a(()=>[e(v,{span:12},{default:a(()=>[n("span",null,o(r.dir),1)]),_:2},1024),e(v,{span:6},{default:a(()=>[n("span",null,o(i(s)("upgrade.readable")),1)]),_:1}),e(v,{span:6},{default:a(()=>[r.status?(u(),p("span",ze,[e(S,{color:"green"},{default:a(()=>[e(K)]),_:1})])):(u(),p("span",Je,[e(S,{color:"red"},{default:a(()=>[e(O)]),_:1})]))]),_:2},1024)]),_:2},1024))),256)),(u(!0),p(M,null,D(T.value.dir.is_write,r=>(u(),W(L,{class:"pb-[10px] items pl-[15px]"},{default:a(()=>[e(v,{span:12},{default:a(()=>[n("span",null,o(r.dir),1)]),_:2},1024),e(v,{span:6},{default:a(()=>[n("span",null,o(i(s)("upgrade.write")),1)]),_:1}),e(v,{span:6},{default:a(()=>[r.status?(u(),p("span",Ye,[e(S,{color:"green"},{default:a(()=>[e(K)]),_:1})])):(u(),p("span",Ze,[e(S,{color:"red"},{default:a(()=>[e(O)]),_:1})]))]),_:2},1024)]),_:2},1024))),256))])])):y("",!0)]),_:1})])):y("",!0),I(n("div",et,[e(i(Be),{ref_key:"terminalRef",ref:E,context:f.value?f.value.upgrade.app_key:"","init-log":null,"show-header":!1,"show-log-time":!0,onExecCmd:se},null,8,["context"])],512),[[F,f.value]])],512),[[F,h.value=="upgrade"]]),I(n("div",null,[n("div",tt,[n("div",at,[e(ie,{icon:"success",title:i(s)("upgrade.upgradeSuccess")},null,8,["title"]),e(x,{title:i(s)("upgrade.upgradeCompleteTips"),type:"error",closable:!1},null,8,["title"])]),n("div",lt,[e(k,{type:"default",onClick:l[0]||(l[0]=r=>_.value=!1)},{default:a(()=>[g(o(i(s)("upgrade.localBuild")),1)]),_:1}),e(k,{type:"primary",onClick:ue},{default:a(()=>[g(o(i(s)("upgrade.cloudBuild")),1)]),_:1})])])],512),[[F,h.value=="complete"]])]),_:1},8,["modelValue","title"]),e(P,{modelValue:B.value,"onUpdate:modelValue":l[5]||(l[5]=r=>B.value=r),title:i(s)("warning"),width:"500px",draggable:""},{footer:a(()=>[n("div",nt,[e(k,{onClick:l[2]||(l[2]=r=>G(!0)),type:"primary"},{default:a(()=>[g(o(i(s)("upgrade.knownToKnow")),1)]),_:1}),e(k,{onClick:l[3]||(l[3]=r=>G()),type:"primary",plain:""},{default:a(()=>[g(o(i(s)("upgrade.upgradeButton")),1)]),_:1}),e(k,{onClick:l[4]||(l[4]=r=>B.value=!1)},{default:a(()=>[g(o(i(s)("cancel")),1)]),_:1})])]),default:a(()=>[n("span",{innerHTML:i(s)("upgrade.upgradeTips")},null,8,st)]),_:1},8,["modelValue","title"])],64)}}});const mt=Ue(ot,[["__scopeId","data-v-983dd45b"]]);export{mt as default};
