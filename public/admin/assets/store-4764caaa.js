import{d as xl,f as gl,x as yl,r as c,G as Pe,j as kl,Q as bl,n as ze,q as t,a2 as oe,h as d,c as p,a,e,w as l,t as u,u as i,C as wl,v as ye,i as _,s as C,B as x,F as S,Z as Cl,R as ie,T as X,a0 as ke,bU as qe,U as Ke,b3 as Tl,ag as He,a4 as Y,a1 as Il,K as Vl,E as El,J as Al,aj as Bl,ab as Rl,aU as Sl,ac as Ll,a9 as Dl,bV as Fl,a5 as Ul,L as Ml,a6 as $l,M as jl,X as Nl,aK as Ol,aL as Pl,aM as zl,aN as ql,V as Kl,b4 as Hl,aW as Ql,Y as Gl,p as Jl,g as Wl}from"./index-6ea097a6.js";/* empty css                   *//* empty css                 */import{T as Xl,_ as Yl,C as Zl}from"./index-b0008fb0.js";/* empty css                     *//* empty css               *//* empty css               *//* empty css                *//* empty css                  *//* empty css                   *//* empty css                     *//* empty css                *//* empty css                  *//* empty css                   *//* empty css                *//* empty css                 *//* empty css                 *//* empty css                    */import"./el-tooltip-4ed993c7.js";/* empty css                        *//* empty css               *//* empty css                 *//* empty css                        *//* empty css                  *//* empty css                 */import{_ as et}from"./icon-addon-339e16d0.js";import{_ as be}from"./apply_empty-cdca3e85.js";import{a as lt,p as tt,b as at,i as st,c as nt,d as ot,e as it,u as ut,f as dt}from"./addon-0c58aeca.js";import{d as ct}from"./tools-d65dcaeb.js";import{a as Qe,d as rt,s as pt}from"./module-04cdc084.js";import ft from"./index-f452d8c6.js";import{_ as _t}from"./_plugin-vue_export-helper-c27b6911.js";const E=Z=>(Jl("data-v-2ec6054a"),Z=Z(),Wl(),Z),vt={class:"main-container"},mt={class:"flex justify-between items-center"},ht={class:"text-page-title"},xt={class:"flex justify-between my-[20px]"},gt={class:"flex"},yt=E(()=>a("div",{class:"flex items-center w-full h-full"},[a("img",{class:"max-w-full max-h-full",src:et,alt:""})],-1)),kt={class:"flex flex-col justify-center pl-[20px] font-500 text-[13px]"},bt={class:"w-[236px] truncate leading-[18px]"},wt={key:0,class:"w-[236px] truncate leading-[18px] mt-[6px]"},Ct={key:1,class:"w-[236px] truncate leading-[18px] mt-[6px]"},Tt={key:2,class:"mt-[3px]"},It={class:"flex items-center"},Vt={class:"font-500 text-[13px] mr-[5px]"},Et={class:"font-500 text-[13px]"},At={class:"font-500 text-[13px] multi-hidden"},Bt={class:"font-500 text-[13px]"},Rt={class:"font-500 text-[13px]"},St={key:1,class:"data-loading"},Lt=E(()=>a("span",null,null,-1)),Dt={key:0,class:"h-[100px]"},Ft=E(()=>a("div",{class:"w-[230px] mx-auto"},[a("img",{src:be,class:"max-w-full",alt:""})],-1)),Ut={class:"flex items-center"},Mt=E(()=>a("div",{class:"w-[230px] mx-auto"},[a("img",{src:be,class:"max-w-full",alt:""})],-1)),$t={class:"flex items-center"},jt={key:4,class:"mx-auto overview-empty flex flex-col items-center pt-14 pb-6"},Nt=E(()=>a("div",{class:"mb-[20px] text-sm text-[#888]"},"检测到当前账号尚未绑定授权，请先绑定授权！",-1)),Ot={class:"flex flex-1 flex-wrap justify-center relative"},Pt={class:"px-[18px] py-[8px]"},zt=E(()=>a("p",{class:"leading-[32px] text-[14px]"}," 您在官方应用市场购买任意一款应用，即可获得授权码。输入正确授权码认证通过后，即可支持在线升级和其它相关服务",-1)),qt={class:"flex justify-end mt-[36px]"},Kt=E(()=>a("div",{class:"w-[230px] mx-auto"},[a("img",{src:be,class:"max-w-full",alt:""})],-1)),Ht={class:"flex items-center"},Qt={class:"mt-[20px]"},Gt={class:"text-sm mt-[10px] text-info"},Jt={class:"mt-[20px]"},Wt={class:"mt-[10px] text-right"},Xt={class:"input-width"},Yt={class:"input-width"},Zt={class:"input-width"},ea={class:"input-width"},la={class:"dialog-footer"},ta={class:"min-h-[150px]"},aa={key:0,class:"my-3"},sa={class:"pt-[20px] pl-[20px]"},na={class:"px-[20px] pt-[10px] text-[14px]"},oa={key:0},ia={key:1},ua={key:0},da={key:1},ca={class:"flex justify-end"},ra={class:"h-[50vh] mt-[20px]"},pa={class:"h-[50vh] mt-[20px] flex flex-col"},fa={class:"min-h-[150px]"},_a={key:0,class:"bg-[#fff] my-3"},va={class:"pt-[20px] pl-[20px]"},ma={class:"px-[20px] pt-[10px] text-[14px]"},ha={key:0},xa={key:1},ga={key:0},ya={key:1},ka=E(()=>a("span",null,"本地已经存在该插件/应用，再次下载会覆盖该插件/应用。",-1)),ba={class:"dialog-footer"},wa=xl({__name:"store",setup(Z){gl();const we=yl(),y=c(Pe.get("storeActiveName")||"installed"),Ce=c(null),P=c(null),I=c(!0),L=c(""),ue=c([]),ee=kl(),z=c(!1),D=c(null),Te=c(),Ge=()=>{Ie(Te.value,!0)},q=o=>{y.value=o,Pe.set({key:"storeActiveName",data:o})};we.query.id&&q(we.query.id);const Ie=(o,n=!1)=>{if(o.is_download&&y.value=="all"&&!n)return z.value=!0,Te.value=o,!1;L.value||(L.value=o.key,rt({addon:o.key,version:o.version}).then(()=>{z.value=!1,Ae(o.key),R(),L.value=""}).catch(()=>{L.value=""}))},de=c("");Qe().then(o=>{o.data.data&&o.data.data.auth_code&&(de.value=o.data.data.auth_code)}).catch(()=>{});const A=c(""),B=c({installed:[],uninstalled:[],all:[]}),ce=()=>{if(A.value==""||A.value==null)return B.value.installed=v.value.installed,B.value.uninstalled=v.value.uninstalled,B.value.all=v.value.all,!1;B.value.installed=v.value.installed.filter(o=>o.title.indexOf(A.value)!=-1),B.value.uninstalled=v.value.uninstalled.filter(o=>o.title.indexOf(A.value)!=-1),B.value.all=v.value.all.filter(o=>o.title.indexOf(A.value)!=-1)},v=c({installed:[],uninstalled:[],all:[],error:""}),R=()=>{I.value=!0,lt({}).then(o=>{var g;const n=o.data.list;v.value.error=o.data.error,v.value.installed=[],v.value.uninstalled=[],v.value.all=[];for(const r in n)n[r].is_local==!1&&v.value.all.push(n[r]),n[r].install_info&&((g=Object.keys(n[r].install_info))!=null&&g.length)?v.value.installed.push(n[r]):n[r].is_download==!0&&v.value.uninstalled.push(n[r]);ce(),ee.routers.forEach((r,Q)=>{r.children&&r.children.length?(r.name=qe(r.children),Ve.value[r.meta.app]=qe(r.children)):Ve.value[r.meta.app]=r.name}),I.value=!1}).catch(()=>{I.value=!1})};R();const Je=()=>{Ke("请在站点中运行程序!")},Ve=c({}),V=c(""),F=c(!1),b=c(1),T=c({});let re=null;const Ee=new Xl,We=(o,n,g,r,Q)=>{if(n=="开始安装插件"){g(Ee);const f=Xe(["/","——","\\","|"]);re=setInterval(()=>{Ee.flush("> "+f.next().value)},150)}};function Xe(o){let n=0;return{next(){return n+1==o.length&&(n=0),{value:o[n++]}}}}const Ae=o=>{V.value=o,tt(o).then(n=>{b.value=1,F.value=!0,ue.value=[],T.value=n.data,ee.clearRouters()}).catch(()=>{})};let K=null;const pe=(o=!0)=>{at().then(n=>{if(n.data){if(o&&(fe=[],V.value=n.data.addon,F.value||(K=Tl.success({title:t("warning"),dangerouslyUseHTMLString:!0,message:He("div",{},[t("installingTips"),He("span",{class:"text-primary cursor-pointer",onClick:Ye},[t("installPercent")])]),duration:0,showClose:!1}))),n.data.error){Ke({message:"插件安装失败",type:"error",duration:5e3});return}n.data.mode=="cloud"&&ll(),setTimeout(()=>{pe(!1)},2e3)}else o||(b.value=3,R(),ee.clearRouters(),K.close())}).catch(n=>{D.value.pushMessage({content:n.message,class:"error"})})};pe();const Ye=()=>{F.value=!0,b.value=2},U=c(!1),Ze=()=>{!T.value.is_pass||U.value||(U.value=!0,st({addon:V.value}).then(o=>{b.value=3,R(),U.value=!1,o.data.length&&(ue.value=o.data)}).catch(o=>{U.value=!1}))},M=c(!1),el=()=>{if(!de.value){Be();return}!T.value.is_pass||M.value||(M.value=!0,nt({addon:V.value}).then(o=>{b.value=2,D.value.execute("clear"),D.value.execute("开始安装插件"),pe(),M.value=!1}).catch(o=>{M.value=!1}))},Be=()=>{Y.confirm(t("authTips"),t("warning"),{distinguishCancelAndClose:!0,confirmButtonText:t("toBind"),cancelButtonText:t("toNiucloud")}).then(()=>{Le()}).catch(o=>{o==="cancel"&&window.open("https://www.niucloud.com/app")})};let fe=[];const ll=()=>{ot(V.value).then(o=>{const n=o.data.data??[];n[0]&&n[0].length&&F.value==!0&&n[0].forEach(g=>{fe.includes(g.action)||(D.value.pushMessage({content:`正在执行：${g.action}`}),fe.push(g.action),g.code==0&&D.value.pushMessage({content:g.msg,class:"error"}))})}).catch(()=>{K==null||K.close()})};bl(V,o=>{T.value={}});const _e=c(!1),le=c({}),tl=o=>{Y.confirm(t("uninstallTips"),t("warning"),{confirmButtonText:t("confirm"),cancelButtonText:t("cancel"),type:"warning"}).then(()=>{nl(o)}).catch(()=>{})},al=o=>{var n;(n=Ce.value)==null||n.open(o)},sl=()=>{var o;if(!de.value){Be();return}if(P.value.cloudBuildTask){(o=P.value)==null||o.open();return}Y.confirm(t("cloudBuildTips"),t("warning"),{confirmButtonText:t("confirm"),cancelButtonText:t("cancel"),type:"warning"}).then(()=>{var n;(n=P.value)==null||n.open()})},nl=o=>{it(o).then(({data:n})=>{n.is_pass?ut({addon:o}).then(g=>{R(),ee.clearRouters(),I.value=!1}).catch(()=>{I.value=!1}):(le.value=n,_e.value=!0)})},Re=()=>{window.open("https://www.niucloud.com/app")},ol=o=>{b.value==2?Y.confirm(t("installShowDialogCloseTips"),t("warning"),{confirmButtonText:t("confirm"),cancelButtonText:t("cancel"),type:"warning"}).then(()=>{dt(V.value),o()}).catch(()=>{}):b.value==3?(q("installed"),location.reload()):o(),re&&clearInterval(re)},te=c(!1),$=c({}),il=o=>{te.value=!0,$.value=o},ae=c(!1),ve=c(""),Se=c(null),H=c(!1),w=c(!0);(()=>{w.value=!0,Qe().then(o=>{w.value=!1,o.data.data&&o.data.data.length!=0&&(ve.value=o.data.data)}).catch(()=>{w.value=!1,ae.value=!1})})();const Le=()=>{ae.value=!0},j=ze({auth_code:"",auth_secret:""}),me=c(),ul=ze({auth_code:[{required:!0,message:t("authCodePlaceholder"),trigger:"blur"}],auth_secret:[{required:!0,message:t("authSecretPlaceholder"),trigger:"blur"}]}),dl=async o=>{H.value||!o||await o.validate(async n=>{n&&(H.value=!0,pt(j).then(()=>{H.value=!1,setTimeout(()=>{location.reload()},1e3)}).catch(()=>{H.value=!1}))})},De=()=>{window.open("https://www.niucloud.com/app")},cl=o=>{Y.confirm(t("deleteAddonTips"),t("warning"),{confirmButtonText:t("confirm"),cancelButtonText:t("cancel"),type:"warning"}).then(()=>{ct(o).then(()=>{R()})}).catch(()=>{})};return(o,n)=>{const g=oe("search"),r=Il,Q=Vl,f=El,rl=Al,pl=Bl,k=Rl,fl=oe("QuestionFilled"),he=Sl,Fe=Ll,xe=Dl,Ue=Fl,_l=Ul,N=Ml,Me=$l,$e=jl,G=Nl,ge=Ol,vl=Pl,m=zl,O=ql,se=oe("Select"),ne=oe("CloseBold"),je=Kl,ml=Hl,hl=Ql,Ne=Gl;return d(),p(S,null,[a("div",vt,[e(Me,{class:"box-card !border-none",shadow:"never"},{default:l(()=>{var Oe;return[a("div",mt,[a("span",ht,u(i(t)("localAppText")),1),e(Q,{class:"!w-[250px]",placeholder:i(t)("search"),modelValue:A.value,"onUpdate:modelValue":n[0]||(n[0]=s=>A.value=s),modelModifiers:{trim:!0},onKeyup:wl(ce,["enter"])},{suffix:l(()=>[e(r,{class:"el-input__icon cursor-pointer",size:"14px",onClick:ce},{default:l(()=>[e(g)]),_:1})]),_:1},8,["placeholder","modelValue","onKeyup"])]),a("div",xt,[a("div",gt,[a("div",{class:ye(["flex items-center text-[14px] h-[32px] text-[#a6a9ad] border-[1px] border-solid my-[3px] border-[var(--el-color-info-light-8)] rounded-full px-[20px] mr-[24px] cursor-pointer hover:bg-[var(--el-color-info-light-8)]",{"!text-[#fff] !bg-[#000] !border-[#000]":y.value==="installed"}]),onClick:n[1]||(n[1]=s=>q("installed"))},u(i(t)("installLabel")),3),a("div",{class:ye(["flex items-center text-[14px] h-[32px] text-[#a6a9ad] border-[1px] border-solid my-[3px] border-[var(--el-color-info-light-8)] rounded-full px-[20px] mr-[24px] cursor-pointer hover:bg-[var(--el-color-info-light-8)]",{"!text-[#fff] !bg-[#000] !border-[#000]":y.value==="uninstalled"}]),onClick:n[2]||(n[2]=s=>q("uninstalled"))},u(i(t)("uninstalledLabel")),3),a("div",{class:ye(["flex items-center text-[14px] h-[32px] text-[#a6a9ad] border-[1px] border-solid my-[3px] border-[var(--el-color-info-light-8)] rounded-full px-[20px] mr-[24px] cursor-pointer hover:bg-[var(--el-color-info-light-8)]",{"!text-[#fff] !bg-[#000] !border-[#000]":y.value==="all"}]),onClick:n[3]||(n[3]=s=>q("all"))},u(i(t)("buyLabel")),3)]),e(f,{type:"primary",round:"",onClick:sl,loading:(Oe=P.value)==null?void 0:Oe.loading},{default:l(()=>[_(u(i(t)("cloudBuild")),1)]),_:1},8,["loading"])]),a("div",null,[v.value[y.value].length&&!w.value?(d(),C(Fe,{key:0,data:B.value[y.value],size:"large",class:"pt-[5px]"},{default:l(()=>[e(k,{label:i(t)("appName"),align:"left",width:"320"},{default:l(({row:s})=>{var h,J;return[a("div",{class:"flex items-center cursor-pointer",onClick:Je},[e(rl,{class:"w-[54px] h-[54px]",src:s.icon,fit:"contain"},{error:l(()=>[yt]),_:2},1032,["src"]),a("div",kt,[a("div",bt,u(s.title),1),s.install_info&&((h=Object.keys(s.install_info))!=null&&h.length)?(d(),p("div",wt,u(s.install_info.version),1)):(d(),p("div",Ct,u(s.version),1)),s.install_info&&((J=Object.keys(s.install_info))!=null&&J.length)&&s.install_info.version!=s.version?(d(),p("div",Tt,[e(pl,{type:"danger",size:"small"},{default:l(()=>[_(u(i(t)("newVersion"))+u(s.version),1)]),_:2},1024)])):x("",!0)])])]}),_:1},8,["label"]),e(k,{align:"left","min-width":"120"},{header:l(()=>[a("div",It,[a("span",Vt,u(i(t)("appIdentification")),1),e(he,{class:"box-item",effect:"light",content:i(t)("tipText"),placement:"bottom"},{default:l(()=>[e(r,{class:"cursor-pointer text-[16px] text-[#a9a9a9]"},{default:l(()=>[e(fl)]),_:1})]),_:1},8,["content"])])]),default:l(({row:s})=>[a("span",Et,u(s.key),1)]),_:1}),e(k,{prop:"",label:i(t)("introduction"),align:"left","min-width":"200"},{default:l(({row:s})=>[a("span",At,u(s.desc),1)]),_:1},8,["label"]),e(k,{label:i(t)("type"),align:"left","min-width":"100"},{default:l(({row:s})=>[a("span",Bt,u(s.type==="app"?i(t)("app"):i(t)("addon")),1)]),_:1},8,["label"]),e(k,{prop:"",label:i(t)("author"),align:"left","min-width":"100"},{default:l(({row:s})=>[a("span",Rt,u(s.author),1)]),_:1},8,["label"]),e(k,{label:i(t)("operation"),fixed:"right",align:"right",width:"200"},{default:l(({row:s})=>{var h,J;return[s.install_info&&((h=Object.keys(s.install_info))!=null&&h.length)&&s.install_info.version!=s.version?(d(),C(f,{key:0,class:"!text-[13px]",type:"primary",link:"",onClick:W=>al(s.key)},{default:l(()=>[_(u(i(t)("upgrade")),1)]),_:2},1032,["onClick"])):x("",!0),s.install_info&&((J=Object.keys(s.install_info))!=null&&J.length)?(d(),C(f,{key:1,class:"!text-[13px]",type:"primary",link:"",onClick:W=>tl(s.key)},{default:l(()=>[_(u(i(t)("unload")),1)]),_:2},1032,["onClick"])):x("",!0),s.is_download&&Object.keys(s.install_info)<=0?(d(),p(S,{key:2},[e(f,{class:"!text-[13px]",type:"primary",link:"",onClick:W=>Ae(s.key)},{default:l(()=>[_(u(i(t)("install")),1)]),_:2},1032,["onClick"]),e(f,{class:"!text-[13px]",type:"primary",link:"",onClick:W=>cl(s.key)},{default:l(()=>[_(u(i(t)("delete")),1)]),_:2},1032,["onClick"])],64)):x("",!0),s.is_download?x("",!0):(d(),C(f,{key:3,class:"!text-[13px]",loading:L.value==s.key,disabled:L.value!="",type:"primary",link:"",onClick:Cl(W=>Ie(s),["stop"])},{default:l(()=>[a("span",null,u(i(t)("down")),1)]),_:2},1032,["loading","disabled","onClick"])),e(f,{class:"!text-[13px]",type:"primary",link:"",onClick:W=>il(s)},{default:l(()=>[_(u(i(t)("detail")),1)]),_:2},1032,["onClick"])]}),_:1},8,["label"])]),_:1},8,["data"])):x("",!0),w.value||!v.value[y.value].length?(d(),p("div",St,[e(Fe,{data:[],size:"large",class:"pt-[5px]"},{empty:l(()=>[Lt]),default:l(()=>[e(k,{label:i(t)("appName"),align:"left",width:"320"},null,8,["label"]),e(k,{align:"left","min-width":"120"}),e(k,{prop:"",label:i(t)("introduction"),align:"left","min-width":"200"},null,8,["label"]),e(k,{label:i(t)("type"),align:"left","min-width":"100"},null,8,["label"]),e(k,{prop:"",label:i(t)("author"),align:"left","min-width":"100"},null,8,["label"]),e(k,{label:i(t)("operation"),fixed:"right",align:"right",width:"150"},null,8,["label"])]),_:1}),w.value?ie((d(),p("div",Dt,null,512)),[[Ne,w.value]]):x("",!0)])):x("",!0),!v.value.installed.length&&!I.value&&y.value=="installed"&&!w.value?(d(),C(xe,{key:2,class:"mx-auto overview-empty"},{image:l(()=>[Ft]),description:l(()=>[a("p",Ut,u(i(t)("installed-empty")),1)]),_:1})):x("",!0),!v.value.uninstalled.length&&!I.value&&y.value=="uninstalled"&&!w.value?(d(),C(xe,{key:3,class:"mx-auto overview-empty"},{image:l(()=>[Mt]),description:l(()=>[a("p",$t,[a("span",null,u(i(t)("descriptionLeft")),1),e(Ue,{type:"primary",onClick:De,class:"mx-[5px]"},{default:l(()=>[_(u(i(t)("link")),1)]),_:1}),a("span",null,u(i(t)("descriptionRight")),1)])]),_:1})):x("",!0),!v.value.all.length&&!I.value&&!ve.value&&y.value=="all"&&!w.value?(d(),p("div",jt,[Nt,a("div",Ot,[e(f,{class:"w-[154px] !h-[48px] mt-[8px]",type:"primary",onClick:Le},{default:l(()=>[_("授权码认证")]),_:1}),e(_l,{ref_key:"getAuthCodeDialog",ref:Se,placement:"bottom",width:478,trigger:"click",class:"mt-[8px]"},{reference:l(()=>[e(f,{class:"w-[154px] !h-[48px] mt-[8px] !text-[var(--el-color-primary)] hover:!text-[var(--el-color-primary)] !bg-transparent",plain:"",type:"primary"},{default:l(()=>[_("如何获取授权码?")]),_:1})]),default:l(()=>[a("div",Pt,[zt,a("div",qt,[e(f,{class:"w-[182px] !h-[48px]",plain:"",onClick:Re},{default:l(()=>[_("去应用市场逛逛")]),_:1}),e(f,{class:"w-[100px] !h-[48px]",plain:"",onClick:n[4]||(n[4]=s=>Se.value.hide())},{default:l(()=>[_("关闭")]),_:1})])])]),_:1},512)])])):x("",!0),!v.value.all.length&&!I.value&&ve.value&&y.value=="all"&&!w.value?(d(),C(xe,{key:5,class:"mx-auto overview-empty"},{image:l(()=>[Kt]),description:l(()=>[a("p",Ht,[a("span",null,u(i(t)("buyDescriptionLeft")),1),e(Ue,{type:"primary",onClick:De,class:"mx-[5px]"},{default:l(()=>[_(u(i(t)("link")),1)]),_:1}),a("span",null,u(i(t)("descriptionRight")),1)])]),_:1})):x("",!0)]),e(G,{modelValue:ae.value,"onUpdate:modelValue":n[8]||(n[8]=s=>ae.value=s),title:"授权码认证",width:"400px"},{default:l(()=>[e($e,{model:j,"label-width":"0",ref_key:"formRef",ref:me,rules:ul,class:"page-form"},{default:l(()=>[e(Me,{class:"box-card !border-none",shadow:"never"},{default:l(()=>[e(N,{prop:"auth_code"},{default:l(()=>[e(Q,{modelValue:j.auth_code,"onUpdate:modelValue":n[5]||(n[5]=s=>j.auth_code=s),modelModifiers:{trim:!0},placeholder:i(t)("authCodePlaceholder"),class:"input-width",clearable:"",size:"large"},null,8,["modelValue","placeholder"])]),_:1}),a("div",Qt,[e(N,{prop:"auth_secret"},{default:l(()=>[e(Q,{modelValue:j.auth_secret,"onUpdate:modelValue":n[6]||(n[6]=s=>j.auth_secret=s),modelModifiers:{trim:!0},clearable:"",placeholder:i(t)("authSecretPlaceholder"),class:"input-width",size:"large"},null,8,["modelValue","placeholder"])]),_:1})]),a("div",Gt,u(i(t)("authInfoTips")),1),a("div",Jt,[e(f,{type:"primary",class:"w-full",size:"large",loading:H.value,onClick:n[7]||(n[7]=s=>dl(me.value))},{default:l(()=>[_(u(i(t)("confirm")),1)]),_:1},8,["loading"])]),a("div",Wt,[e(f,{type:"primary",link:"",onClick:Re},{default:l(()=>[_(u(i(t)("notHaveAuth")),1)]),_:1})])]),_:1})]),_:1},8,["model","rules"])]),_:1},8,["modelValue"]),e(G,{modelValue:te.value,"onUpdate:modelValue":n[10]||(n[10]=s=>te.value=s),title:i(t)("plugDetail"),width:"500px","destroy-on-close":!0},{footer:l(()=>[a("span",la,[e(f,{type:"primary",onClick:n[9]||(n[9]=s=>te.value=!1)},{default:l(()=>[_(u(i(t)("confirm")),1)]),_:1})])]),default:l(()=>[e($e,{model:$.value,"label-width":"120px",ref_key:"formRef",ref:me,class:"page-form"},{default:l(()=>[e(N,{label:i(t)("title")},{default:l(()=>[a("div",Xt,u($.value.title),1)]),_:1},8,["label"]),e(N,{label:i(t)("desc")},{default:l(()=>[a("div",Yt,u($.value.desc),1)]),_:1},8,["label"]),e(N,{label:i(t)("author")},{default:l(()=>[a("div",Zt,u($.value.author),1)]),_:1},8,["label"]),e(N,{label:i(t)("version")},{default:l(()=>[a("div",ea,u($.value.version),1)]),_:1},8,["label"])]),_:1},8,["model"])]),_:1},8,["modelValue","title"]),e(G,{modelValue:F.value,"onUpdate:modelValue":n[11]||(n[11]=s=>F.value=s),title:i(t)("addonInstall"),width:"850px","close-on-click-modal":!1,"close-on-press-escape":!1,"before-close":ol},{default:l(()=>[e(vl,{space:200,active:b.value,"finish-status":"success","align-center":""},{default:l(()=>[e(ge,{title:i(t)("envCheck"),class:"flex-1"},null,8,["title"]),e(ge,{title:i(t)("installProgress"),class:"flex-1"},null,8,["title"]),e(ge,{title:i(t)("installComplete"),class:"flex-1"},null,8,["title"])]),_:1},8,["active"]),ie((d(),p("div",null,[e(je,{"max-height":"50vh"},{default:l(()=>[a("div",ta,[T.value.dir?(d(),p("div",aa,[a("p",sa,u(i(t)("dirPermission")),1),a("div",na,[e(O,{class:"py-[10px] items table-head-bg pl-[15px] mb-[10px]"},{default:l(()=>[e(m,{span:12},{default:l(()=>[a("span",null,u(i(t)("path")),1)]),_:1}),e(m,{span:6},{default:l(()=>[a("span",null,u(i(t)("demand")),1)]),_:1}),e(m,{span:6},{default:l(()=>[a("span",null,u(i(t)("status")),1)]),_:1})]),_:1}),(d(!0),p(S,null,X(T.value.dir.is_readable,(s,h)=>(d(),C(O,{class:"pb-[10px] items pl-[15px]",key:h},{default:l(()=>[e(m,{span:12},{default:l(()=>[a("span",null,u(s.dir),1)]),_:2},1024),e(m,{span:6},{default:l(()=>[a("span",null,u(i(t)("readable")),1)]),_:1}),e(m,{span:6},{default:l(()=>[s.status?(d(),p("span",oa,[e(r,{color:"green"},{default:l(()=>[e(se)]),_:1})])):(d(),p("span",ia,[e(r,{color:"red"},{default:l(()=>[e(ne)]),_:1})]))]),_:2},1024)]),_:2},1024))),128)),(d(!0),p(S,null,X(T.value.dir.is_write,(s,h)=>(d(),C(O,{class:"pb-[10px] items pl-[15px]",key:h},{default:l(()=>[e(m,{span:12},{default:l(()=>[a("span",null,u(s.dir),1)]),_:2},1024),e(m,{span:6},{default:l(()=>[a("span",null,u(i(t)("write")),1)]),_:1}),e(m,{span:6},{default:l(()=>[s.status?(d(),p("span",ua,[e(r,{color:"green"},{default:l(()=>[e(se)]),_:1})])):(d(),p("span",da,[e(r,{color:"red"},{default:l(()=>[e(ne)]),_:1})]))]),_:2},1024)]),_:2},1024))),128))])])):x("",!0)])]),_:1}),a("div",ca,[e(he,{effect:"dark",content:i(t)("installTips"),placement:"top"},{default:l(()=>[e(f,{type:"default",disabled:!T.value.is_pass||M.value,loading:U.value,onClick:Ze},{default:l(()=>[_(u(i(t)("localInstall")),1)]),_:1},8,["disabled","loading"])]),_:1},8,["content"]),e(he,{effect:"dark",content:i(t)("cloudInstallTips"),placement:"top"},{default:l(()=>[e(f,{type:"primary",disabled:!T.value.is_pass||U.value,loading:M.value,onClick:el},{default:l(()=>[_(u(i(t)("cloudInstall")),1)]),_:1},8,["disabled","loading"])]),_:1},8,["content"])])])),[[ke,b.value==1],[Ne,!T.value.dir]]),ie(a("div",ra,[e(i(Yl),{ref_key:"terminalRef",ref:D,context:V.value,"init-log":null,"show-header":!1,"show-log-time":!0,onExecCmd:We},null,8,["context"])],512),[[ke,b.value==2]]),ie(a("div",pa,[e(ml,{icon:"success",title:i(t)("addonInstallSuccess")},null,8,["title"]),(d(!0),p(S,null,X(ue.value,(s,h)=>(d(),p("div",{class:"mb-[10px]",key:h},[e(hl,{title:s,type:"error",closable:!1},null,8,["title"])]))),128))],512),[[ke,b.value==3]])]),_:1},8,["modelValue","title"]),e(G,{modelValue:_e.value,"onUpdate:modelValue":n[12]||(n[12]=s=>_e.value=s),title:i(t)("addonUninstall"),width:"850px","close-on-click-modal":!1,"close-on-press-escape":!1},{default:l(()=>[e(je,{"max-height":"50vh"},{default:l(()=>[a("div",fa,[le.value.dir?(d(),p("div",_a,[a("p",va,u(i(t)("dirPermission")),1),a("div",ma,[e(O,{class:"py-[10px] items table-head-bg pl-[15px] mb-[10px]"},{default:l(()=>[e(m,{span:12},{default:l(()=>[a("span",null,u(i(t)("path")),1)]),_:1}),e(m,{span:6},{default:l(()=>[a("span",null,u(i(t)("demand")),1)]),_:1}),e(m,{span:6},{default:l(()=>[a("span",null,u(i(t)("status")),1)]),_:1})]),_:1}),(d(!0),p(S,null,X(le.value.dir.is_readable,(s,h)=>(d(),C(O,{class:"pb-[10px] items pl-[15px]",key:h},{default:l(()=>[e(m,{span:12},{default:l(()=>[a("span",null,u(s.dir),1)]),_:2},1024),e(m,{span:6},{default:l(()=>[a("span",null,u(i(t)("readable")),1)]),_:1}),e(m,{span:6},{default:l(()=>[s.status?(d(),p("span",ha,[e(r,{color:"green"},{default:l(()=>[e(se)]),_:1})])):(d(),p("span",xa,[e(r,{color:"red"},{default:l(()=>[e(ne)]),_:1})]))]),_:2},1024)]),_:2},1024))),128)),(d(!0),p(S,null,X(le.value.dir.is_write,(s,h)=>(d(),C(O,{class:"pb-[10px] items pl-[15px]",key:h},{default:l(()=>[e(m,{span:12},{default:l(()=>[a("span",null,u(s.dir),1)]),_:2},1024),e(m,{span:6},{default:l(()=>[a("span",null,u(i(t)("write")),1)]),_:1}),e(m,{span:6},{default:l(()=>[s.status?(d(),p("span",ga,[e(r,{color:"green"},{default:l(()=>[e(se)]),_:1})])):(d(),p("span",ya,[e(r,{color:"red"},{default:l(()=>[e(ne)]),_:1})]))]),_:2},1024)]),_:2},1024))),128))])])):x("",!0)])]),_:1})]),_:1},8,["modelValue","title"]),e(G,{modelValue:z.value,"onUpdate:modelValue":n[14]||(n[14]=s=>z.value=s),title:"下载提示",width:"30%"},{footer:l(()=>[a("span",ba,[e(f,{onClick:n[13]||(n[13]=s=>z.value=!1)},{default:l(()=>[_("取消")]),_:1}),e(f,{type:"primary",onClick:Ge},{default:l(()=>[_("确定")]),_:1})])]),default:l(()=>[ka]),_:1},8,["modelValue"])]}),_:1})]),e(ft,{ref_key:"upgradeRef",ref:Ce,onComplete:R},null,512),e(Zl,{ref_key:"cloudBuildRef",ref:P},null,512)],64)}}});const as=_t(wa,[["__scopeId","data-v-2ec6054a"]]);export{as as default};