import{d as yl,f as kl,x as bl,r,G as Ke,j as wl,a4 as Cl,Q as Tl,n as He,q as t,a2 as ie,h as d,c as p,a as s,e,w as l,t as u,u as i,C as Vl,v as ye,i as f,s as y,B as g,F as S,Z as Il,R as ue,T as X,a0 as ke,bL as Qe,U as Je,b3 as Al,ah as Ge,a5 as Y,a1 as El,K as Bl,E as Rl,J as Sl,ak as Ll,aU as Fl,ac as Dl,ad as $l,aa as Ml,bM as Ul,a6 as jl,L as Nl,a7 as zl,M as Ol,X as Pl,aK as ql,aL as Kl,aM as Hl,aN as Ql,V as Jl,b4 as Gl,aW as Wl,Y as Xl,p as Yl,g as Zl}from"./index-29db729d.js";/* empty css                   *//* empty css                 */import{T as et,_ as lt}from"./dark-7c7c4f50.js";/* empty css                     *//* empty css               *//* empty css                *//* empty css                  *//* empty css                   *//* empty css                     *//* empty css                *//* empty css                  *//* empty css                   *//* empty css                *//* empty css                 *//* empty css                 *//* empty css                    */import"./el-tooltip-4ed993c7.js";/* empty css                        *//* empty css               *//* empty css                 *//* empty css                        *//* empty css                  *//* empty css                 */import{_ as tt}from"./icon-addon-339e16d0.js";import{_ as be}from"./apply_empty-cdca3e85.js";import{a as at,p as st,b as nt,i as ot,c as it,d as ut,e as dt,u as rt,f as ct}from"./addon-746d0475.js";import{d as pt}from"./tools-951346f3.js";import{a as We,d as ft,s as _t}from"./module-73025eee.js";import vt from"./index-da66a945.js";import mt from"./index-441b329b.js";import{_ as ht}from"./_plugin-vue_export-helper-c27b6911.js";const A=Z=>(Yl("data-v-7b760f2c"),Z=Z(),Zl(),Z),xt={class:"main-container"},gt={class:"flex justify-between items-center"},yt={class:"text-page-title"},kt={class:"flex justify-between my-[20px]"},bt={class:"flex"},wt=A(()=>s("div",{class:"flex items-center w-full h-full"},[s("img",{class:"max-w-full max-h-full",src:tt,alt:""})],-1)),Ct={class:"flex-1 w-0 flex flex-col justify-center pl-[20px] font-500 text-[13px]"},Tt={class:"w-[236px] truncate leading-[18px]"},Vt={key:0,class:"w-[236px] truncate leading-[18px] mt-[6px]"},It={key:1,class:"w-[236px] truncate leading-[18px] mt-[6px]"},At={class:"mt-[3px] flex flex-nowrap"},Et={class:"flex items-center"},Bt={class:"font-500 text-[13px] mr-[5px]"},Rt={class:"font-500 text-[13px]"},St={class:"font-500 text-[13px] multi-hidden"},Lt={class:"font-500 text-[13px]"},Ft={class:"font-500 text-[13px]"},Dt={key:1,class:"data-loading"},$t=A(()=>s("span",null,null,-1)),Mt={key:0,class:"h-[100px]"},Ut=A(()=>s("div",{class:"w-[230px] mx-auto"},[s("img",{src:be,class:"max-w-full",alt:""})],-1)),jt={class:"flex items-center"},Nt=A(()=>s("div",{class:"w-[230px] mx-auto"},[s("img",{src:be,class:"max-w-full",alt:""})],-1)),zt={class:"flex items-center"},Ot={key:4,class:"mx-auto overview-empty flex flex-col items-center pt-14 pb-6"},Pt=A(()=>s("div",{class:"mb-[20px] text-sm text-[#888]"},"检测到当前账号尚未绑定授权，请先绑定授权！",-1)),qt={class:"flex flex-1 flex-wrap justify-center relative"},Kt={class:"px-[18px] py-[8px]"},Ht=A(()=>s("p",{class:"leading-[32px] text-[14px]"}," 您在官方应用市场购买任意一款应用，即可获得授权码。输入正确授权码认证通过后，即可支持在线升级和其它相关服务",-1)),Qt={class:"flex justify-end mt-[36px]"},Jt=A(()=>s("div",{class:"w-[230px] mx-auto"},[s("img",{src:be,class:"max-w-full",alt:""})],-1)),Gt={class:"flex items-center"},Wt={class:"mt-[20px]"},Xt={class:"text-sm mt-[10px] text-info"},Yt={class:"mt-[20px]"},Zt={class:"mt-[10px] text-right"},ea={class:"input-width"},la={class:"input-width"},ta={class:"input-width"},aa={class:"input-width"},sa={class:"dialog-footer"},na={class:"min-h-[150px]"},oa={key:0,class:"my-3"},ia={class:"pt-[20px] pl-[20px]"},ua={class:"px-[20px] pt-[10px] text-[14px]"},da={key:0},ra={key:1},ca={key:0},pa={key:1},fa={class:"flex justify-end"},_a={class:"h-[50vh] mt-[20px]"},va={class:"h-[50vh] mt-[20px] flex flex-col"},ma={class:"min-h-[150px]"},ha={key:0,class:"bg-[#fff] my-3"},xa={class:"pt-[20px] pl-[20px]"},ga={class:"px-[20px] pt-[10px] text-[14px]"},ya={key:0},ka={key:1},ba={key:0},wa={key:1},Ca=A(()=>s("span",null,"本地已经存在该插件/应用，再次下载会覆盖该插件/应用。",-1)),Ta={class:"dialog-footer"},Va=yl({__name:"store",setup(Z){kl();const we=bl(),k=r(Ke.get("storeActiveName")||"installed"),Ce=r(null),O=r(null),V=r(!0),L=r(""),de=r([]),ee=wl(),P=r(!1),F=r(null),Te=r("");Cl().then(o=>{Te.value=o.data.version.version});const Ve=r(),Xe=()=>{Ie(Ve.value,!0)},q=o=>{k.value=o,Ke.set({key:"storeActiveName",data:o})};we.query.id&&q(we.query.id);const Ie=(o,n=!1)=>{if(o.is_download&&k.value=="all"&&!n)return P.value=!0,Ve.value=o,!1;L.value||(L.value=o.key,ft({addon:o.key,version:o.version}).then(()=>{P.value=!1,Be(o.key),R(),L.value=""}).catch(()=>{L.value=""}))},re=r("");We().then(o=>{o.data.data&&o.data.data.auth_code&&(re.value=o.data.data.auth_code)}).catch(()=>{});const E=r(""),B=r({installed:[],uninstalled:[],all:[]}),ce=()=>{if(E.value==""||E.value==null)return B.value.installed=v.value.installed,B.value.uninstalled=v.value.uninstalled,B.value.all=v.value.all,!1;B.value.installed=v.value.installed.filter(o=>o.title.indexOf(E.value)!=-1),B.value.uninstalled=v.value.uninstalled.filter(o=>o.title.indexOf(E.value)!=-1),B.value.all=v.value.all.filter(o=>o.title.indexOf(E.value)!=-1)},v=r({installed:[],uninstalled:[],all:[],error:""}),R=()=>{V.value=!0,at({}).then(o=>{var h;const n=o.data.list;v.value.error=o.data.error,v.value.installed=[],v.value.uninstalled=[],v.value.all=[];for(const c in n)n[c].is_local==!1&&v.value.all.push(n[c]),n[c].install_info&&((h=Object.keys(n[c].install_info))!=null&&h.length)?v.value.installed.push(n[c]):n[c].is_download==!0&&v.value.uninstalled.push(n[c]);ce(),ee.routers.forEach((c,Q)=>{c.children&&c.children.length?(c.name=Qe(c.children),Ae.value[c.meta.app]=Qe(c.children)):Ae.value[c.meta.app]=c.name}),V.value=!1}).catch(()=>{V.value=!1})};R();const Ye=()=>{Je("请在站点中运行程序!")},Ae=r({}),I=r(""),D=r(!1),C=r(1),T=r({});let pe=null;const Ee=new et,Ze=(o,n,h,c,Q)=>{if(n=="开始安装插件"){h(Ee);const _=el(["/","——","\\","|"]);pe=setInterval(()=>{Ee.flush("> "+_.next().value)},150)}};function el(o){let n=0;return{next(){return n+1==o.length&&(n=0),{value:o[n++]}}}}const Be=o=>{I.value=o,st(o).then(n=>{C.value=1,D.value=!0,de.value=[],T.value=n.data,ee.clearRouters()}).catch(()=>{})};let K=null;const fe=(o=!0)=>{nt().then(n=>{if(n.data){if(o&&(_e=[],I.value=n.data.addon,D.value||(K=Al.success({title:t("warning"),dangerouslyUseHTMLString:!0,message:Ge("div",{},[t("installingTips"),Ge("span",{class:"text-primary cursor-pointer",onClick:ll},[t("installPercent")])]),duration:0,showClose:!1}))),n.data.error){Je({message:"插件安装失败",type:"error",duration:5e3});return}n.data.mode=="cloud"&&sl(),setTimeout(()=>{fe(!1)},2e3)}else o||(C.value=3,R(),ee.clearRouters(),K.close())}).catch(n=>{F.value.pushMessage({content:n.message,class:"error"})})};fe();const ll=()=>{D.value=!0,C.value=2},$=r(!1),tl=()=>{!T.value.is_pass||$.value||($.value=!0,ot({addon:I.value}).then(o=>{C.value=3,R(),$.value=!1,o.data.length&&(de.value=o.data)}).catch(o=>{$.value=!1}))},M=r(!1),al=()=>{if(!re.value){Re();return}!T.value.is_pass||M.value||(M.value=!0,it({addon:I.value}).then(o=>{C.value=2,F.value.execute("clear"),F.value.execute("开始安装插件"),fe(),M.value=!1}).catch(o=>{M.value=!1}))},Re=()=>{Y.confirm(t("authTips"),t("warning"),{distinguishCancelAndClose:!0,confirmButtonText:t("toBind"),cancelButtonText:t("toNiucloud")}).then(()=>{De()}).catch(o=>{o==="cancel"&&window.open("https://www.niucloud.com/app")})};let _e=[];const sl=()=>{ut(I.value).then(o=>{const n=o.data.data??[];n[0]&&n[0].length&&D.value==!0&&n[0].forEach(h=>{_e.includes(h.action)||(F.value.pushMessage({content:`正在执行：${h.action}`}),_e.push(h.action),h.code==0&&F.value.pushMessage({content:h.msg,class:"error"}))})}).catch(()=>{K==null||K.close()})};Tl(I,o=>{T.value={}});const ve=r(!1),le=r({}),nl=o=>{Y.confirm(t("uninstallTips"),t("warning"),{confirmButtonText:t("confirm"),cancelButtonText:t("cancel"),type:"warning"}).then(()=>{il(o)}).catch(()=>{})},ol=o=>{var n;(n=Ce.value)==null||n.open(o)},Se=()=>{var o;if(!re.value){Re();return}if(O.value.cloudBuildTask){(o=O.value)==null||o.open();return}Y.confirm(t("cloudBuildTips"),t("warning"),{confirmButtonText:t("confirm"),cancelButtonText:t("cancel"),type:"warning"}).then(()=>{var n;(n=O.value)==null||n.open()})},il=o=>{dt(o).then(({data:n})=>{n.is_pass?rt({addon:o}).then(h=>{R(),ee.clearRouters(),V.value=!1}).catch(()=>{V.value=!1}):(le.value=n,ve.value=!0)})},Le=()=>{window.open("https://www.niucloud.com/app")},ul=o=>{C.value==2?Y.confirm(t("installShowDialogCloseTips"),t("warning"),{confirmButtonText:t("confirm"),cancelButtonText:t("cancel"),type:"warning"}).then(()=>{ct(I.value),o()}).catch(()=>{}):C.value==3?(q("installed"),location.reload()):o(),pe&&clearInterval(pe)},te=r(!1),U=r({}),dl=o=>{te.value=!0,U.value=o},ae=r(!1),me=r(""),Fe=r(null),H=r(!1),b=r(!0);(()=>{b.value=!0,We().then(o=>{b.value=!1,o.data.data&&o.data.data.length!=0&&(me.value=o.data.data)}).catch(()=>{b.value=!1,ae.value=!1})})();const De=()=>{ae.value=!0},j=He({auth_code:"",auth_secret:""}),he=r(),rl=He({auth_code:[{required:!0,message:t("authCodePlaceholder"),trigger:"blur"}],auth_secret:[{required:!0,message:t("authSecretPlaceholder"),trigger:"blur"}]}),cl=async o=>{H.value||!o||await o.validate(async n=>{n&&(H.value=!0,_t(j).then(()=>{H.value=!1,setTimeout(()=>{location.reload()},1e3)}).catch(()=>{H.value=!1}))})},$e=()=>{window.open("https://www.niucloud.com/app")},pl=o=>{Y.confirm(t("deleteAddonTips"),t("warning"),{confirmButtonText:t("confirm"),cancelButtonText:t("cancel"),type:"warning"}).then(()=>{pt(o).then(()=>{R()})}).catch(()=>{})},fl=o=>{if(!o.support_version)return!0;const n=o.support_version.split("."),h=Te.value.split(".");return parseFloat(`${n[0]}.${n[1]}`)<parseFloat(`${h[0]}.${h[1]}`)};return(o,n)=>{const h=ie("search"),c=El,Q=Bl,_=Rl,_l=Sl,Me=Ll,se=Fl,w=Dl,vl=ie("QuestionFilled"),Ue=$l,xe=Ml,je=Ul,ml=jl,N=Nl,Ne=zl,ze=Ol,J=Pl,ge=ql,hl=Kl,m=Hl,z=Ql,ne=ie("Select"),oe=ie("CloseBold"),Oe=Jl,xl=Gl,gl=Wl,Pe=Xl;return d(),p(S,null,[s("div",xt,[e(Ne,{class:"box-card !border-none",shadow:"never"},{default:l(()=>{var qe;return[s("div",gt,[s("span",yt,u(i(t)("localAppText")),1),e(Q,{class:"!w-[250px]",placeholder:i(t)("search"),modelValue:E.value,"onUpdate:modelValue":n[0]||(n[0]=a=>E.value=a),modelModifiers:{trim:!0},onKeyup:Vl(ce,["enter"])},{suffix:l(()=>[e(c,{class:"el-input__icon cursor-pointer",size:"14px",onClick:ce},{default:l(()=>[e(h)]),_:1})]),_:1},8,["placeholder","modelValue","onKeyup"])]),s("div",kt,[s("div",bt,[s("div",{class:ye(["flex items-center text-[14px] h-[32px] text-[#a6a9ad] border-[1px] border-solid my-[3px] border-[var(--el-color-info-light-8)] rounded-full px-[20px] mr-[24px] cursor-pointer hover:bg-[var(--el-color-info-light-8)]",{"!text-[#fff] !bg-[#000] !border-[#000]":k.value==="installed"}]),onClick:n[1]||(n[1]=a=>q("installed"))},u(i(t)("installLabel")),3),s("div",{class:ye(["flex items-center text-[14px] h-[32px] text-[#a6a9ad] border-[1px] border-solid my-[3px] border-[var(--el-color-info-light-8)] rounded-full px-[20px] mr-[24px] cursor-pointer hover:bg-[var(--el-color-info-light-8)]",{"!text-[#fff] !bg-[#000] !border-[#000]":k.value==="uninstalled"}]),onClick:n[2]||(n[2]=a=>q("uninstalled"))},u(i(t)("uninstalledLabel")),3),s("div",{class:ye(["flex items-center text-[14px] h-[32px] text-[#a6a9ad] border-[1px] border-solid my-[3px] border-[var(--el-color-info-light-8)] rounded-full px-[20px] mr-[24px] cursor-pointer hover:bg-[var(--el-color-info-light-8)]",{"!text-[#fff] !bg-[#000] !border-[#000]":k.value==="all"}]),onClick:n[3]||(n[3]=a=>q("all"))},u(i(t)("buyLabel")),3)]),e(_,{type:"primary",round:"",onClick:Se,loading:(qe=O.value)==null?void 0:qe.loading,disabled:b.value},{default:l(()=>[f(u(i(t)("cloudBuild")),1)]),_:1},8,["loading","disabled"])]),s("div",null,[v.value[k.value].length&&!b.value?(d(),y(Ue,{key:0,data:B.value[k.value],size:"large",class:"pt-[5px]"},{default:l(()=>[e(w,{label:i(t)("appName"),align:"left",width:"320"},{default:l(({row:a})=>{var x,G;return[s("div",{class:"flex items-center cursor-pointer",onClick:Ye},[e(_l,{class:"w-[54px] h-[54px]",src:a.icon,fit:"contain"},{error:l(()=>[wt]),_:2},1032,["src"]),s("div",Ct,[s("div",Tt,u(a.title),1),a.install_info&&((x=Object.keys(a.install_info))!=null&&x.length)?(d(),p("div",Vt,u(a.install_info.version),1)):(d(),p("div",It,u(a.version),1)),s("div",At,[a.install_info&&((G=Object.keys(a.install_info))!=null&&G.length)&&a.install_info.version!=a.version?(d(),y(Me,{key:0,type:"danger",size:"small"},{default:l(()=>[f(u(i(t)("newVersion"))+u(a.version),1)]),_:2},1024)):g("",!0),fl(a)?(d(),y(se,{key:1,effect:"dark",content:"该插件与框架版本不兼容，可能存在未知问题",placement:"top-start"},{default:l(()=>[e(Me,{type:"info",size:"small",class:"ml-[3px]"},{default:l(()=>[f("该插件与框架版本不兼容，可能存在未知问题")]),_:1})]),_:1})):g("",!0)])])])]}),_:1},8,["label"]),e(w,{align:"left","min-width":"120"},{header:l(()=>[s("div",Et,[s("span",Bt,u(i(t)("appIdentification")),1),e(se,{class:"box-item",effect:"light",content:i(t)("tipText"),placement:"bottom"},{default:l(()=>[e(c,{class:"cursor-pointer text-[16px] text-[#a9a9a9]"},{default:l(()=>[e(vl)]),_:1})]),_:1},8,["content"])])]),default:l(({row:a})=>[s("span",Rt,u(a.key),1)]),_:1}),e(w,{prop:"",label:i(t)("introduction"),align:"left","min-width":"200"},{default:l(({row:a})=>[s("span",St,u(a.desc),1)]),_:1},8,["label"]),e(w,{label:i(t)("type"),align:"left","min-width":"100"},{default:l(({row:a})=>[s("span",Lt,u(a.type==="app"?i(t)("app"):i(t)("addon")),1)]),_:1},8,["label"]),e(w,{prop:"",label:i(t)("author"),align:"left","min-width":"100"},{default:l(({row:a})=>[s("span",Ft,u(a.author),1)]),_:1},8,["label"]),e(w,{label:i(t)("operation"),fixed:"right",align:"right",width:"200"},{default:l(({row:a})=>{var x,G;return[a.install_info&&((x=Object.keys(a.install_info))!=null&&x.length)&&a.install_info.version!=a.version?(d(),y(_,{key:0,class:"!text-[13px]",type:"primary",link:"",onClick:W=>ol(a.key)},{default:l(()=>[f(u(i(t)("upgrade")),1)]),_:2},1032,["onClick"])):g("",!0),a.install_info&&((G=Object.keys(a.install_info))!=null&&G.length)?(d(),y(_,{key:1,class:"!text-[13px]",type:"primary",link:"",onClick:W=>nl(a.key)},{default:l(()=>[f(u(i(t)("unload")),1)]),_:2},1032,["onClick"])):g("",!0),a.is_download&&(!a.install_info||!Object.keys(a.install_info).length)?(d(),p(S,{key:2},[e(_,{class:"!text-[13px]",type:"primary",link:"",onClick:W=>Be(a.key)},{default:l(()=>[f(u(i(t)("install")),1)]),_:2},1032,["onClick"]),e(_,{class:"!text-[13px]",type:"primary",link:"",onClick:W=>pl(a.key)},{default:l(()=>[f(u(i(t)("delete")),1)]),_:2},1032,["onClick"])],64)):g("",!0),a.is_download?g("",!0):(d(),y(_,{key:3,class:"!text-[13px]",loading:L.value==a.key,disabled:L.value!="",type:"primary",link:"",onClick:Il(W=>Ie(a),["stop"])},{default:l(()=>[s("span",null,u(i(t)("down")),1)]),_:2},1032,["loading","disabled","onClick"])),e(_,{class:"!text-[13px]",type:"primary",link:"",onClick:W=>dl(a)},{default:l(()=>[f(u(i(t)("detail")),1)]),_:2},1032,["onClick"])]}),_:1},8,["label"])]),_:1},8,["data"])):g("",!0),b.value||!v.value[k.value].length?(d(),p("div",Dt,[e(Ue,{data:[],size:"large",class:"pt-[5px]"},{empty:l(()=>[$t]),default:l(()=>[e(w,{label:i(t)("appName"),align:"left",width:"320"},null,8,["label"]),e(w,{align:"left","min-width":"120"}),e(w,{prop:"",label:i(t)("introduction"),align:"left","min-width":"200"},null,8,["label"]),e(w,{label:i(t)("type"),align:"left","min-width":"100"},null,8,["label"]),e(w,{prop:"",label:i(t)("author"),align:"left","min-width":"100"},null,8,["label"]),e(w,{label:i(t)("operation"),fixed:"right",align:"right",width:"150"},null,8,["label"])]),_:1}),b.value?ue((d(),p("div",Mt,null,512)),[[Pe,b.value]]):g("",!0)])):g("",!0),!v.value.installed.length&&!V.value&&k.value=="installed"&&!b.value?(d(),y(xe,{key:2,class:"mx-auto overview-empty"},{image:l(()=>[Ut]),description:l(()=>[s("p",jt,u(i(t)("installed-empty")),1)]),_:1})):g("",!0),!v.value.uninstalled.length&&!V.value&&k.value=="uninstalled"&&!b.value?(d(),y(xe,{key:3,class:"mx-auto overview-empty"},{image:l(()=>[Nt]),description:l(()=>[s("p",zt,[s("span",null,u(i(t)("descriptionLeft")),1),e(je,{type:"primary",onClick:$e,class:"mx-[5px]"},{default:l(()=>[f(u(i(t)("link")),1)]),_:1}),s("span",null,u(i(t)("descriptionRight")),1)])]),_:1})):g("",!0),!v.value.all.length&&!V.value&&!me.value&&k.value=="all"&&!b.value?(d(),p("div",Ot,[Pt,s("div",qt,[e(_,{class:"w-[154px] !h-[48px] mt-[8px]",type:"primary",onClick:De},{default:l(()=>[f("授权码认证")]),_:1}),e(ml,{ref_key:"getAuthCodeDialog",ref:Fe,placement:"bottom",width:478,trigger:"click",class:"mt-[8px]"},{reference:l(()=>[e(_,{class:"w-[154px] !h-[48px] mt-[8px] !text-[var(--el-color-primary)] hover:!text-[var(--el-color-primary)] !bg-transparent",plain:"",type:"primary"},{default:l(()=>[f("如何获取授权码?")]),_:1})]),default:l(()=>[s("div",Kt,[Ht,s("div",Qt,[e(_,{class:"w-[182px] !h-[48px]",plain:"",onClick:Le},{default:l(()=>[f("去应用市场逛逛")]),_:1}),e(_,{class:"w-[100px] !h-[48px]",plain:"",onClick:n[4]||(n[4]=a=>Fe.value.hide())},{default:l(()=>[f("关闭")]),_:1})])])]),_:1},512)])])):g("",!0),!v.value.all.length&&!V.value&&me.value&&k.value=="all"&&!b.value?(d(),y(xe,{key:5,class:"mx-auto overview-empty"},{image:l(()=>[Jt]),description:l(()=>[s("p",Gt,[s("span",null,u(i(t)("buyDescriptionLeft")),1),e(je,{type:"primary",onClick:$e,class:"mx-[5px]"},{default:l(()=>[f(u(i(t)("link")),1)]),_:1}),s("span",null,u(i(t)("descriptionRight")),1)])]),_:1})):g("",!0)]),e(J,{modelValue:ae.value,"onUpdate:modelValue":n[8]||(n[8]=a=>ae.value=a),title:"授权码认证",width:"400px"},{default:l(()=>[e(ze,{model:j,"label-width":"0",ref_key:"formRef",ref:he,rules:rl,class:"page-form"},{default:l(()=>[e(Ne,{class:"box-card !border-none",shadow:"never"},{default:l(()=>[e(N,{prop:"auth_code"},{default:l(()=>[e(Q,{modelValue:j.auth_code,"onUpdate:modelValue":n[5]||(n[5]=a=>j.auth_code=a),modelModifiers:{trim:!0},placeholder:i(t)("authCodePlaceholder"),class:"input-width",clearable:"",size:"large"},null,8,["modelValue","placeholder"])]),_:1}),s("div",Wt,[e(N,{prop:"auth_secret"},{default:l(()=>[e(Q,{modelValue:j.auth_secret,"onUpdate:modelValue":n[6]||(n[6]=a=>j.auth_secret=a),modelModifiers:{trim:!0},clearable:"",placeholder:i(t)("authSecretPlaceholder"),class:"input-width",size:"large"},null,8,["modelValue","placeholder"])]),_:1})]),s("div",Xt,u(i(t)("authInfoTips")),1),s("div",Yt,[e(_,{type:"primary",class:"w-full",size:"large",loading:H.value,onClick:n[7]||(n[7]=a=>cl(he.value))},{default:l(()=>[f(u(i(t)("confirm")),1)]),_:1},8,["loading"])]),s("div",Zt,[e(_,{type:"primary",link:"",onClick:Le},{default:l(()=>[f(u(i(t)("notHaveAuth")),1)]),_:1})])]),_:1})]),_:1},8,["model","rules"])]),_:1},8,["modelValue"]),e(J,{modelValue:te.value,"onUpdate:modelValue":n[10]||(n[10]=a=>te.value=a),title:i(t)("plugDetail"),width:"500px","destroy-on-close":!0},{footer:l(()=>[s("span",sa,[e(_,{type:"primary",onClick:n[9]||(n[9]=a=>te.value=!1)},{default:l(()=>[f(u(i(t)("confirm")),1)]),_:1})])]),default:l(()=>[e(ze,{model:U.value,"label-width":"120px",ref_key:"formRef",ref:he,class:"page-form"},{default:l(()=>[e(N,{label:i(t)("title")},{default:l(()=>[s("div",ea,u(U.value.title),1)]),_:1},8,["label"]),e(N,{label:i(t)("desc")},{default:l(()=>[s("div",la,u(U.value.desc),1)]),_:1},8,["label"]),e(N,{label:i(t)("author")},{default:l(()=>[s("div",ta,u(U.value.author),1)]),_:1},8,["label"]),e(N,{label:i(t)("version")},{default:l(()=>[s("div",aa,u(U.value.version),1)]),_:1},8,["label"])]),_:1},8,["model"])]),_:1},8,["modelValue","title"]),e(J,{modelValue:D.value,"onUpdate:modelValue":n[11]||(n[11]=a=>D.value=a),title:i(t)("addonInstall"),width:"850px","close-on-click-modal":!1,"close-on-press-escape":!1,"before-close":ul},{default:l(()=>[e(hl,{space:200,active:C.value,"finish-status":"success","align-center":""},{default:l(()=>[e(ge,{title:i(t)("envCheck"),class:"flex-1"},null,8,["title"]),e(ge,{title:i(t)("installProgress"),class:"flex-1"},null,8,["title"]),e(ge,{title:i(t)("installComplete"),class:"flex-1"},null,8,["title"])]),_:1},8,["active"]),ue((d(),p("div",null,[e(Oe,{"max-height":"50vh"},{default:l(()=>[s("div",na,[T.value.dir?(d(),p("div",oa,[s("p",ia,u(i(t)("dirPermission")),1),s("div",ua,[e(z,{class:"py-[10px] items table-head-bg pl-[15px] mb-[10px]"},{default:l(()=>[e(m,{span:12},{default:l(()=>[s("span",null,u(i(t)("path")),1)]),_:1}),e(m,{span:6},{default:l(()=>[s("span",null,u(i(t)("demand")),1)]),_:1}),e(m,{span:6},{default:l(()=>[s("span",null,u(i(t)("status")),1)]),_:1})]),_:1}),(d(!0),p(S,null,X(T.value.dir.is_readable,(a,x)=>(d(),y(z,{class:"pb-[10px] items pl-[15px]",key:x},{default:l(()=>[e(m,{span:12},{default:l(()=>[s("span",null,u(a.dir),1)]),_:2},1024),e(m,{span:6},{default:l(()=>[s("span",null,u(i(t)("readable")),1)]),_:1}),e(m,{span:6},{default:l(()=>[a.status?(d(),p("span",da,[e(c,{color:"green"},{default:l(()=>[e(ne)]),_:1})])):(d(),p("span",ra,[e(c,{color:"red"},{default:l(()=>[e(oe)]),_:1})]))]),_:2},1024)]),_:2},1024))),128)),(d(!0),p(S,null,X(T.value.dir.is_write,(a,x)=>(d(),y(z,{class:"pb-[10px] items pl-[15px]",key:x},{default:l(()=>[e(m,{span:12},{default:l(()=>[s("span",null,u(a.dir),1)]),_:2},1024),e(m,{span:6},{default:l(()=>[s("span",null,u(i(t)("write")),1)]),_:1}),e(m,{span:6},{default:l(()=>[a.status?(d(),p("span",ca,[e(c,{color:"green"},{default:l(()=>[e(ne)]),_:1})])):(d(),p("span",pa,[e(c,{color:"red"},{default:l(()=>[e(oe)]),_:1})]))]),_:2},1024)]),_:2},1024))),128))])])):g("",!0)])]),_:1}),s("div",fa,[e(se,{effect:"dark",content:i(t)("installTips"),placement:"top"},{default:l(()=>[e(_,{type:"default",disabled:!T.value.is_pass||M.value,loading:$.value,onClick:tl},{default:l(()=>[f(u(i(t)("localInstall")),1)]),_:1},8,["disabled","loading"])]),_:1},8,["content"]),e(se,{effect:"dark",content:i(t)("cloudInstallTips"),placement:"top"},{default:l(()=>[e(_,{type:"primary",disabled:!T.value.is_pass||$.value,loading:M.value,onClick:al},{default:l(()=>[f(u(i(t)("cloudInstall")),1)]),_:1},8,["disabled","loading"])]),_:1},8,["content"])])])),[[ke,C.value==1],[Pe,!T.value.dir]]),ue(s("div",_a,[e(i(lt),{ref_key:"terminalRef",ref:F,context:I.value,"init-log":null,"show-header":!1,"show-log-time":!0,onExecCmd:Ze},null,8,["context"])],512),[[ke,C.value==2]]),ue(s("div",va,[e(xl,{icon:"success",title:i(t)("addonInstallSuccess")},null,8,["title"]),(d(!0),p(S,null,X(de.value,(a,x)=>(d(),p("div",{class:"mb-[10px]",key:x},[e(gl,{title:a,type:"error",closable:!1},null,8,["title"])]))),128))],512),[[ke,C.value==3]])]),_:1},8,["modelValue","title"]),e(J,{modelValue:ve.value,"onUpdate:modelValue":n[12]||(n[12]=a=>ve.value=a),title:i(t)("addonUninstall"),width:"850px","close-on-click-modal":!1,"close-on-press-escape":!1},{default:l(()=>[e(Oe,{"max-height":"50vh"},{default:l(()=>[s("div",ma,[le.value.dir?(d(),p("div",ha,[s("p",xa,u(i(t)("dirPermission")),1),s("div",ga,[e(z,{class:"py-[10px] items table-head-bg pl-[15px] mb-[10px]"},{default:l(()=>[e(m,{span:12},{default:l(()=>[s("span",null,u(i(t)("path")),1)]),_:1}),e(m,{span:6},{default:l(()=>[s("span",null,u(i(t)("demand")),1)]),_:1}),e(m,{span:6},{default:l(()=>[s("span",null,u(i(t)("status")),1)]),_:1})]),_:1}),(d(!0),p(S,null,X(le.value.dir.is_readable,(a,x)=>(d(),y(z,{class:"pb-[10px] items pl-[15px]",key:x},{default:l(()=>[e(m,{span:12},{default:l(()=>[s("span",null,u(a.dir),1)]),_:2},1024),e(m,{span:6},{default:l(()=>[s("span",null,u(i(t)("readable")),1)]),_:1}),e(m,{span:6},{default:l(()=>[a.status?(d(),p("span",ya,[e(c,{color:"green"},{default:l(()=>[e(ne)]),_:1})])):(d(),p("span",ka,[e(c,{color:"red"},{default:l(()=>[e(oe)]),_:1})]))]),_:2},1024)]),_:2},1024))),128)),(d(!0),p(S,null,X(le.value.dir.is_write,(a,x)=>(d(),y(z,{class:"pb-[10px] items pl-[15px]",key:x},{default:l(()=>[e(m,{span:12},{default:l(()=>[s("span",null,u(a.dir),1)]),_:2},1024),e(m,{span:6},{default:l(()=>[s("span",null,u(i(t)("write")),1)]),_:1}),e(m,{span:6},{default:l(()=>[a.status?(d(),p("span",ba,[e(c,{color:"green"},{default:l(()=>[e(ne)]),_:1})])):(d(),p("span",wa,[e(c,{color:"red"},{default:l(()=>[e(oe)]),_:1})]))]),_:2},1024)]),_:2},1024))),128))])])):g("",!0)])]),_:1})]),_:1},8,["modelValue","title"]),e(J,{modelValue:P.value,"onUpdate:modelValue":n[14]||(n[14]=a=>P.value=a),title:"下载提示",width:"30%"},{footer:l(()=>[s("span",Ta,[e(_,{onClick:n[13]||(n[13]=a=>P.value=!1)},{default:l(()=>[f("取消")]),_:1}),e(_,{type:"primary",onClick:Xe},{default:l(()=>[f("确定")]),_:1})])]),default:l(()=>[Ca]),_:1},8,["modelValue"])]}),_:1})]),e(vt,{ref_key:"upgradeRef",ref:Ce,onComplete:R,onCloudbuild:Se},null,512),e(mt,{ref_key:"cloudBuildRef",ref:O},null,512)],64)}}});const os=ht(Va,[["__scopeId","data-v-7b760f2c"]]);export{os as default};
