import{d as xl,f as gl,x as yl,r as c,G as ze,j as kl,Q as bl,n as qe,q as t,a2 as oe,h as d,c as p,a as s,e,w as l,t as u,u as i,C as wl,v as ye,i as _,s as C,B as x,F as S,Z as Cl,R as ie,T as X,a0 as ke,bU as Ke,U as He,b3 as Tl,ah as Qe,a5 as Y,a1 as Il,K as Vl,E as El,J as Al,ak as Bl,ac as Rl,aU as Sl,ad as Ll,aa as Dl,bV as Fl,a6 as Ul,L as Ml,a7 as $l,M as jl,X as Nl,aK as Ol,aL as Pl,aM as zl,aN as ql,V as Kl,b4 as Hl,aW as Ql,Y as Gl,p as Jl,g as Wl}from"./index-a3bdc7eb.js";/* empty css                   *//* empty css                 */import{T as Xl,_ as Yl}from"./dark-df394e1f.js";/* empty css                     *//* empty css               *//* empty css               *//* empty css                *//* empty css                  *//* empty css                   *//* empty css                *//* empty css                */import"./el-form-item-4ed993c7.js";/* empty css                  *//* empty css                   *//* empty css                *//* empty css                 *//* empty css                 *//* empty css                    */import"./el-tooltip-4ed993c7.js";/* empty css                        *//* empty css               *//* empty css                 *//* empty css                        *//* empty css                  *//* empty css                 */import{_ as Zl}from"./icon-addon-339e16d0.js";import{_ as be}from"./apply_empty-cdca3e85.js";import{a as et,p as lt,b as tt,i as at,c as st,d as nt,e as ot,u as it,f as ut}from"./addon-53632301.js";import{d as dt}from"./tools-282873ec.js";import{a as Ge,d as ct,s as rt}from"./module-c2b05871.js";import pt from"./index-44e93383.js";import ft from"./index-5a360b26.js";import{_ as _t}from"./_plugin-vue_export-helper-c27b6911.js";const E=Z=>(Jl("data-v-587e14a4"),Z=Z(),Wl(),Z),vt={class:"main-container"},mt={class:"flex justify-between items-center"},ht={class:"text-page-title"},xt={class:"flex justify-between my-[20px]"},gt={class:"flex"},yt=E(()=>s("div",{class:"flex items-center w-full h-full"},[s("img",{class:"max-w-full max-h-full",src:Zl,alt:""})],-1)),kt={class:"flex flex-col justify-center pl-[20px] font-500 text-[13px]"},bt={class:"w-[236px] truncate leading-[18px]"},wt={key:0,class:"w-[236px] truncate leading-[18px] mt-[6px]"},Ct={key:1,class:"w-[236px] truncate leading-[18px] mt-[6px]"},Tt={key:2,class:"mt-[3px]"},It={class:"flex items-center"},Vt={class:"font-500 text-[13px] mr-[5px]"},Et={class:"font-500 text-[13px]"},At={class:"font-500 text-[13px] multi-hidden"},Bt={class:"font-500 text-[13px]"},Rt={class:"font-500 text-[13px]"},St={key:1,class:"data-loading"},Lt=E(()=>s("span",null,null,-1)),Dt={key:0,class:"h-[100px]"},Ft=E(()=>s("div",{class:"w-[230px] mx-auto"},[s("img",{src:be,class:"max-w-full",alt:""})],-1)),Ut={class:"flex items-center"},Mt=E(()=>s("div",{class:"w-[230px] mx-auto"},[s("img",{src:be,class:"max-w-full",alt:""})],-1)),$t={class:"flex items-center"},jt={key:4,class:"mx-auto overview-empty flex flex-col items-center pt-14 pb-6"},Nt=E(()=>s("div",{class:"mb-[20px] text-sm text-[#888]"},"检测到当前账号尚未绑定授权，请先绑定授权！",-1)),Ot={class:"flex flex-1 flex-wrap justify-center relative"},Pt={class:"px-[18px] py-[8px]"},zt=E(()=>s("p",{class:"leading-[32px] text-[14px]"}," 您在官方应用市场购买任意一款应用，即可获得授权码。输入正确授权码认证通过后，即可支持在线升级和其它相关服务",-1)),qt={class:"flex justify-end mt-[36px]"},Kt=E(()=>s("div",{class:"w-[230px] mx-auto"},[s("img",{src:be,class:"max-w-full",alt:""})],-1)),Ht={class:"flex items-center"},Qt={class:"mt-[20px]"},Gt={class:"text-sm mt-[10px] text-info"},Jt={class:"mt-[20px]"},Wt={class:"mt-[10px] text-right"},Xt={class:"input-width"},Yt={class:"input-width"},Zt={class:"input-width"},ea={class:"input-width"},la={class:"dialog-footer"},ta={class:"min-h-[150px]"},aa={key:0,class:"my-3"},sa={class:"pt-[20px] pl-[20px]"},na={class:"px-[20px] pt-[10px] text-[14px]"},oa={key:0},ia={key:1},ua={key:0},da={key:1},ca={class:"flex justify-end"},ra={class:"h-[50vh] mt-[20px]"},pa={class:"h-[50vh] mt-[20px] flex flex-col"},fa={class:"min-h-[150px]"},_a={key:0,class:"bg-[#fff] my-3"},va={class:"pt-[20px] pl-[20px]"},ma={class:"px-[20px] pt-[10px] text-[14px]"},ha={key:0},xa={key:1},ga={key:0},ya={key:1},ka=E(()=>s("span",null,"本地已经存在该插件/应用，再次下载会覆盖该插件/应用。",-1)),ba={class:"dialog-footer"},wa=xl({__name:"store",setup(Z){gl();const we=yl(),y=c(ze.get("storeActiveName")||"installed"),Ce=c(null),P=c(null),I=c(!0),L=c(""),ue=c([]),ee=kl(),z=c(!1),D=c(null),Te=c(),Je=()=>{Ie(Te.value,!0)},q=o=>{y.value=o,ze.set({key:"storeActiveName",data:o})};we.query.id&&q(we.query.id);const Ie=(o,n=!1)=>{if(o.is_download&&y.value=="all"&&!n)return z.value=!0,Te.value=o,!1;L.value||(L.value=o.key,ct({addon:o.key,version:o.version}).then(()=>{z.value=!1,Ae(o.key),R(),L.value=""}).catch(()=>{L.value=""}))},de=c("");Ge().then(o=>{o.data.data&&o.data.data.auth_code&&(de.value=o.data.data.auth_code)}).catch(()=>{});const A=c(""),B=c({installed:[],uninstalled:[],all:[]}),ce=()=>{if(A.value==""||A.value==null)return B.value.installed=v.value.installed,B.value.uninstalled=v.value.uninstalled,B.value.all=v.value.all,!1;B.value.installed=v.value.installed.filter(o=>o.title.indexOf(A.value)!=-1),B.value.uninstalled=v.value.uninstalled.filter(o=>o.title.indexOf(A.value)!=-1),B.value.all=v.value.all.filter(o=>o.title.indexOf(A.value)!=-1)},v=c({installed:[],uninstalled:[],all:[],error:""}),R=()=>{I.value=!0,et({}).then(o=>{var g;const n=o.data.list;v.value.error=o.data.error,v.value.installed=[],v.value.uninstalled=[],v.value.all=[];for(const r in n)n[r].is_local==!1&&v.value.all.push(n[r]),n[r].install_info&&((g=Object.keys(n[r].install_info))!=null&&g.length)?v.value.installed.push(n[r]):n[r].is_download==!0&&v.value.uninstalled.push(n[r]);ce(),ee.routers.forEach((r,Q)=>{r.children&&r.children.length?(r.name=Ke(r.children),Ve.value[r.meta.app]=Ke(r.children)):Ve.value[r.meta.app]=r.name}),I.value=!1}).catch(()=>{I.value=!1})};R();const We=()=>{He("请在站点中运行程序!")},Ve=c({}),V=c(""),F=c(!1),b=c(1),T=c({});let re=null;const Ee=new Xl,Xe=(o,n,g,r,Q)=>{if(n=="开始安装插件"){g(Ee);const f=Ye(["/","——","\\","|"]);re=setInterval(()=>{Ee.flush("> "+f.next().value)},150)}};function Ye(o){let n=0;return{next(){return n+1==o.length&&(n=0),{value:o[n++]}}}}const Ae=o=>{V.value=o,lt(o).then(n=>{b.value=1,F.value=!0,ue.value=[],T.value=n.data,ee.clearRouters()}).catch(()=>{})};let K=null;const pe=(o=!0)=>{tt().then(n=>{if(n.data){if(o&&(fe=[],V.value=n.data.addon,F.value||(K=Tl.success({title:t("warning"),dangerouslyUseHTMLString:!0,message:Qe("div",{},[t("installingTips"),Qe("span",{class:"text-primary cursor-pointer",onClick:Ze},[t("installPercent")])]),duration:0,showClose:!1}))),n.data.error){He({message:"插件安装失败",type:"error",duration:5e3});return}n.data.mode=="cloud"&&tl(),setTimeout(()=>{pe(!1)},2e3)}else o||(b.value=3,R(),ee.clearRouters(),K.close())}).catch(n=>{D.value.pushMessage({content:n.message,class:"error"})})};pe();const Ze=()=>{F.value=!0,b.value=2},U=c(!1),el=()=>{!T.value.is_pass||U.value||(U.value=!0,at({addon:V.value}).then(o=>{b.value=3,R(),U.value=!1,o.data.length&&(ue.value=o.data)}).catch(o=>{U.value=!1}))},M=c(!1),ll=()=>{if(!de.value){Be();return}!T.value.is_pass||M.value||(M.value=!0,st({addon:V.value}).then(o=>{b.value=2,D.value.execute("clear"),D.value.execute("开始安装插件"),pe(),M.value=!1}).catch(o=>{M.value=!1}))},Be=()=>{Y.confirm(t("authTips"),t("warning"),{distinguishCancelAndClose:!0,confirmButtonText:t("toBind"),cancelButtonText:t("toNiucloud")}).then(()=>{De()}).catch(o=>{o==="cancel"&&window.open("https://www.niucloud.com/app")})};let fe=[];const tl=()=>{nt(V.value).then(o=>{const n=o.data.data??[];n[0]&&n[0].length&&F.value==!0&&n[0].forEach(g=>{fe.includes(g.action)||(D.value.pushMessage({content:`正在执行：${g.action}`}),fe.push(g.action),g.code==0&&D.value.pushMessage({content:g.msg,class:"error"}))})}).catch(()=>{K==null||K.close()})};bl(V,o=>{T.value={}});const _e=c(!1),le=c({}),al=o=>{Y.confirm(t("uninstallTips"),t("warning"),{confirmButtonText:t("confirm"),cancelButtonText:t("cancel"),type:"warning"}).then(()=>{nl(o)}).catch(()=>{})},sl=o=>{var n;(n=Ce.value)==null||n.open(o)},Re=()=>{var o;if(!de.value){Be();return}if(P.value.cloudBuildTask){(o=P.value)==null||o.open();return}Y.confirm(t("cloudBuildTips"),t("warning"),{confirmButtonText:t("confirm"),cancelButtonText:t("cancel"),type:"warning"}).then(()=>{var n;(n=P.value)==null||n.open()})},nl=o=>{ot(o).then(({data:n})=>{n.is_pass?it({addon:o}).then(g=>{R(),ee.clearRouters(),I.value=!1}).catch(()=>{I.value=!1}):(le.value=n,_e.value=!0)})},Se=()=>{window.open("https://www.niucloud.com/app")},ol=o=>{b.value==2?Y.confirm(t("installShowDialogCloseTips"),t("warning"),{confirmButtonText:t("confirm"),cancelButtonText:t("cancel"),type:"warning"}).then(()=>{ut(V.value),o()}).catch(()=>{}):b.value==3?(q("installed"),location.reload()):o(),re&&clearInterval(re)},te=c(!1),$=c({}),il=o=>{te.value=!0,$.value=o},ae=c(!1),ve=c(""),Le=c(null),H=c(!1),w=c(!0);(()=>{w.value=!0,Ge().then(o=>{w.value=!1,o.data.data&&o.data.data.length!=0&&(ve.value=o.data.data)}).catch(()=>{w.value=!1,ae.value=!1})})();const De=()=>{ae.value=!0},j=qe({auth_code:"",auth_secret:""}),me=c(),ul=qe({auth_code:[{required:!0,message:t("authCodePlaceholder"),trigger:"blur"}],auth_secret:[{required:!0,message:t("authSecretPlaceholder"),trigger:"blur"}]}),dl=async o=>{H.value||!o||await o.validate(async n=>{n&&(H.value=!0,rt(j).then(()=>{H.value=!1,setTimeout(()=>{location.reload()},1e3)}).catch(()=>{H.value=!1}))})},Fe=()=>{window.open("https://www.niucloud.com/app")},cl=o=>{Y.confirm(t("deleteAddonTips"),t("warning"),{confirmButtonText:t("confirm"),cancelButtonText:t("cancel"),type:"warning"}).then(()=>{dt(o).then(()=>{R()})}).catch(()=>{})};return(o,n)=>{const g=oe("search"),r=Il,Q=Vl,f=El,rl=Al,pl=Bl,k=Rl,fl=oe("QuestionFilled"),he=Sl,Ue=Ll,xe=Dl,Me=Fl,_l=Ul,N=Ml,$e=$l,je=jl,G=Nl,ge=Ol,vl=Pl,m=zl,O=ql,se=oe("Select"),ne=oe("CloseBold"),Ne=Kl,ml=Hl,hl=Ql,Oe=Gl;return d(),p(S,null,[s("div",vt,[e($e,{class:"box-card !border-none",shadow:"never"},{default:l(()=>{var Pe;return[s("div",mt,[s("span",ht,u(i(t)("localAppText")),1),e(Q,{class:"!w-[250px]",placeholder:i(t)("search"),modelValue:A.value,"onUpdate:modelValue":n[0]||(n[0]=a=>A.value=a),modelModifiers:{trim:!0},onKeyup:wl(ce,["enter"])},{suffix:l(()=>[e(r,{class:"el-input__icon cursor-pointer",size:"14px",onClick:ce},{default:l(()=>[e(g)]),_:1})]),_:1},8,["placeholder","modelValue","onKeyup"])]),s("div",xt,[s("div",gt,[s("div",{class:ye(["flex items-center text-[14px] h-[32px] text-[#a6a9ad] border-[1px] border-solid my-[3px] border-[var(--el-color-info-light-8)] rounded-full px-[20px] mr-[24px] cursor-pointer hover:bg-[var(--el-color-info-light-8)]",{"!text-[#fff] !bg-[#000] !border-[#000]":y.value==="installed"}]),onClick:n[1]||(n[1]=a=>q("installed"))},u(i(t)("installLabel")),3),s("div",{class:ye(["flex items-center text-[14px] h-[32px] text-[#a6a9ad] border-[1px] border-solid my-[3px] border-[var(--el-color-info-light-8)] rounded-full px-[20px] mr-[24px] cursor-pointer hover:bg-[var(--el-color-info-light-8)]",{"!text-[#fff] !bg-[#000] !border-[#000]":y.value==="uninstalled"}]),onClick:n[2]||(n[2]=a=>q("uninstalled"))},u(i(t)("uninstalledLabel")),3),s("div",{class:ye(["flex items-center text-[14px] h-[32px] text-[#a6a9ad] border-[1px] border-solid my-[3px] border-[var(--el-color-info-light-8)] rounded-full px-[20px] mr-[24px] cursor-pointer hover:bg-[var(--el-color-info-light-8)]",{"!text-[#fff] !bg-[#000] !border-[#000]":y.value==="all"}]),onClick:n[3]||(n[3]=a=>q("all"))},u(i(t)("buyLabel")),3)]),e(f,{type:"primary",round:"",onClick:Re,loading:(Pe=P.value)==null?void 0:Pe.loading},{default:l(()=>[_(u(i(t)("cloudBuild")),1)]),_:1},8,["loading"])]),s("div",null,[v.value[y.value].length&&!w.value?(d(),C(Ue,{key:0,data:B.value[y.value],size:"large",class:"pt-[5px]"},{default:l(()=>[e(k,{label:i(t)("appName"),align:"left",width:"320"},{default:l(({row:a})=>{var h,J;return[s("div",{class:"flex items-center cursor-pointer",onClick:We},[e(rl,{class:"w-[54px] h-[54px]",src:a.icon,fit:"contain"},{error:l(()=>[yt]),_:2},1032,["src"]),s("div",kt,[s("div",bt,u(a.title),1),a.install_info&&((h=Object.keys(a.install_info))!=null&&h.length)?(d(),p("div",wt,u(a.install_info.version),1)):(d(),p("div",Ct,u(a.version),1)),a.install_info&&((J=Object.keys(a.install_info))!=null&&J.length)&&a.install_info.version!=a.version?(d(),p("div",Tt,[e(pl,{type:"danger",size:"small"},{default:l(()=>[_(u(i(t)("newVersion"))+u(a.version),1)]),_:2},1024)])):x("",!0)])])]}),_:1},8,["label"]),e(k,{align:"left","min-width":"120"},{header:l(()=>[s("div",It,[s("span",Vt,u(i(t)("appIdentification")),1),e(he,{class:"box-item",effect:"light",content:i(t)("tipText"),placement:"bottom"},{default:l(()=>[e(r,{class:"cursor-pointer text-[16px] text-[#a9a9a9]"},{default:l(()=>[e(fl)]),_:1})]),_:1},8,["content"])])]),default:l(({row:a})=>[s("span",Et,u(a.key),1)]),_:1}),e(k,{prop:"",label:i(t)("introduction"),align:"left","min-width":"200"},{default:l(({row:a})=>[s("span",At,u(a.desc),1)]),_:1},8,["label"]),e(k,{label:i(t)("type"),align:"left","min-width":"100"},{default:l(({row:a})=>[s("span",Bt,u(a.type==="app"?i(t)("app"):i(t)("addon")),1)]),_:1},8,["label"]),e(k,{prop:"",label:i(t)("author"),align:"left","min-width":"100"},{default:l(({row:a})=>[s("span",Rt,u(a.author),1)]),_:1},8,["label"]),e(k,{label:i(t)("operation"),fixed:"right",align:"right",width:"200"},{default:l(({row:a})=>{var h,J;return[a.install_info&&((h=Object.keys(a.install_info))!=null&&h.length)&&a.install_info.version!=a.version?(d(),C(f,{key:0,class:"!text-[13px]",type:"primary",link:"",onClick:W=>sl(a.key)},{default:l(()=>[_(u(i(t)("upgrade")),1)]),_:2},1032,["onClick"])):x("",!0),a.install_info&&((J=Object.keys(a.install_info))!=null&&J.length)?(d(),C(f,{key:1,class:"!text-[13px]",type:"primary",link:"",onClick:W=>al(a.key)},{default:l(()=>[_(u(i(t)("unload")),1)]),_:2},1032,["onClick"])):x("",!0),a.is_download&&(!a.install_info||!Object.keys(a.install_info).length)?(d(),p(S,{key:2},[e(f,{class:"!text-[13px]",type:"primary",link:"",onClick:W=>Ae(a.key)},{default:l(()=>[_(u(i(t)("install")),1)]),_:2},1032,["onClick"]),e(f,{class:"!text-[13px]",type:"primary",link:"",onClick:W=>cl(a.key)},{default:l(()=>[_(u(i(t)("delete")),1)]),_:2},1032,["onClick"])],64)):x("",!0),a.is_download?x("",!0):(d(),C(f,{key:3,class:"!text-[13px]",loading:L.value==a.key,disabled:L.value!="",type:"primary",link:"",onClick:Cl(W=>Ie(a),["stop"])},{default:l(()=>[s("span",null,u(i(t)("down")),1)]),_:2},1032,["loading","disabled","onClick"])),e(f,{class:"!text-[13px]",type:"primary",link:"",onClick:W=>il(a)},{default:l(()=>[_(u(i(t)("detail")),1)]),_:2},1032,["onClick"])]}),_:1},8,["label"])]),_:1},8,["data"])):x("",!0),w.value||!v.value[y.value].length?(d(),p("div",St,[e(Ue,{data:[],size:"large",class:"pt-[5px]"},{empty:l(()=>[Lt]),default:l(()=>[e(k,{label:i(t)("appName"),align:"left",width:"320"},null,8,["label"]),e(k,{align:"left","min-width":"120"}),e(k,{prop:"",label:i(t)("introduction"),align:"left","min-width":"200"},null,8,["label"]),e(k,{label:i(t)("type"),align:"left","min-width":"100"},null,8,["label"]),e(k,{prop:"",label:i(t)("author"),align:"left","min-width":"100"},null,8,["label"]),e(k,{label:i(t)("operation"),fixed:"right",align:"right",width:"150"},null,8,["label"])]),_:1}),w.value?ie((d(),p("div",Dt,null,512)),[[Oe,w.value]]):x("",!0)])):x("",!0),!v.value.installed.length&&!I.value&&y.value=="installed"&&!w.value?(d(),C(xe,{key:2,class:"mx-auto overview-empty"},{image:l(()=>[Ft]),description:l(()=>[s("p",Ut,u(i(t)("installed-empty")),1)]),_:1})):x("",!0),!v.value.uninstalled.length&&!I.value&&y.value=="uninstalled"&&!w.value?(d(),C(xe,{key:3,class:"mx-auto overview-empty"},{image:l(()=>[Mt]),description:l(()=>[s("p",$t,[s("span",null,u(i(t)("descriptionLeft")),1),e(Me,{type:"primary",onClick:Fe,class:"mx-[5px]"},{default:l(()=>[_(u(i(t)("link")),1)]),_:1}),s("span",null,u(i(t)("descriptionRight")),1)])]),_:1})):x("",!0),!v.value.all.length&&!I.value&&!ve.value&&y.value=="all"&&!w.value?(d(),p("div",jt,[Nt,s("div",Ot,[e(f,{class:"w-[154px] !h-[48px] mt-[8px]",type:"primary",onClick:De},{default:l(()=>[_("授权码认证")]),_:1}),e(_l,{ref_key:"getAuthCodeDialog",ref:Le,placement:"bottom",width:478,trigger:"click",class:"mt-[8px]"},{reference:l(()=>[e(f,{class:"w-[154px] !h-[48px] mt-[8px] !text-[var(--el-color-primary)] hover:!text-[var(--el-color-primary)] !bg-transparent",plain:"",type:"primary"},{default:l(()=>[_("如何获取授权码?")]),_:1})]),default:l(()=>[s("div",Pt,[zt,s("div",qt,[e(f,{class:"w-[182px] !h-[48px]",plain:"",onClick:Se},{default:l(()=>[_("去应用市场逛逛")]),_:1}),e(f,{class:"w-[100px] !h-[48px]",plain:"",onClick:n[4]||(n[4]=a=>Le.value.hide())},{default:l(()=>[_("关闭")]),_:1})])])]),_:1},512)])])):x("",!0),!v.value.all.length&&!I.value&&ve.value&&y.value=="all"&&!w.value?(d(),C(xe,{key:5,class:"mx-auto overview-empty"},{image:l(()=>[Kt]),description:l(()=>[s("p",Ht,[s("span",null,u(i(t)("buyDescriptionLeft")),1),e(Me,{type:"primary",onClick:Fe,class:"mx-[5px]"},{default:l(()=>[_(u(i(t)("link")),1)]),_:1}),s("span",null,u(i(t)("descriptionRight")),1)])]),_:1})):x("",!0)]),e(G,{modelValue:ae.value,"onUpdate:modelValue":n[8]||(n[8]=a=>ae.value=a),title:"授权码认证",width:"400px"},{default:l(()=>[e(je,{model:j,"label-width":"0",ref_key:"formRef",ref:me,rules:ul,class:"page-form"},{default:l(()=>[e($e,{class:"box-card !border-none",shadow:"never"},{default:l(()=>[e(N,{prop:"auth_code"},{default:l(()=>[e(Q,{modelValue:j.auth_code,"onUpdate:modelValue":n[5]||(n[5]=a=>j.auth_code=a),modelModifiers:{trim:!0},placeholder:i(t)("authCodePlaceholder"),class:"input-width",clearable:"",size:"large"},null,8,["modelValue","placeholder"])]),_:1}),s("div",Qt,[e(N,{prop:"auth_secret"},{default:l(()=>[e(Q,{modelValue:j.auth_secret,"onUpdate:modelValue":n[6]||(n[6]=a=>j.auth_secret=a),modelModifiers:{trim:!0},clearable:"",placeholder:i(t)("authSecretPlaceholder"),class:"input-width",size:"large"},null,8,["modelValue","placeholder"])]),_:1})]),s("div",Gt,u(i(t)("authInfoTips")),1),s("div",Jt,[e(f,{type:"primary",class:"w-full",size:"large",loading:H.value,onClick:n[7]||(n[7]=a=>dl(me.value))},{default:l(()=>[_(u(i(t)("confirm")),1)]),_:1},8,["loading"])]),s("div",Wt,[e(f,{type:"primary",link:"",onClick:Se},{default:l(()=>[_(u(i(t)("notHaveAuth")),1)]),_:1})])]),_:1})]),_:1},8,["model","rules"])]),_:1},8,["modelValue"]),e(G,{modelValue:te.value,"onUpdate:modelValue":n[10]||(n[10]=a=>te.value=a),title:i(t)("plugDetail"),width:"500px","destroy-on-close":!0},{footer:l(()=>[s("span",la,[e(f,{type:"primary",onClick:n[9]||(n[9]=a=>te.value=!1)},{default:l(()=>[_(u(i(t)("confirm")),1)]),_:1})])]),default:l(()=>[e(je,{model:$.value,"label-width":"120px",ref_key:"formRef",ref:me,class:"page-form"},{default:l(()=>[e(N,{label:i(t)("title")},{default:l(()=>[s("div",Xt,u($.value.title),1)]),_:1},8,["label"]),e(N,{label:i(t)("desc")},{default:l(()=>[s("div",Yt,u($.value.desc),1)]),_:1},8,["label"]),e(N,{label:i(t)("author")},{default:l(()=>[s("div",Zt,u($.value.author),1)]),_:1},8,["label"]),e(N,{label:i(t)("version")},{default:l(()=>[s("div",ea,u($.value.version),1)]),_:1},8,["label"])]),_:1},8,["model"])]),_:1},8,["modelValue","title"]),e(G,{modelValue:F.value,"onUpdate:modelValue":n[11]||(n[11]=a=>F.value=a),title:i(t)("addonInstall"),width:"850px","close-on-click-modal":!1,"close-on-press-escape":!1,"before-close":ol},{default:l(()=>[e(vl,{space:200,active:b.value,"finish-status":"success","align-center":""},{default:l(()=>[e(ge,{title:i(t)("envCheck"),class:"flex-1"},null,8,["title"]),e(ge,{title:i(t)("installProgress"),class:"flex-1"},null,8,["title"]),e(ge,{title:i(t)("installComplete"),class:"flex-1"},null,8,["title"])]),_:1},8,["active"]),ie((d(),p("div",null,[e(Ne,{"max-height":"50vh"},{default:l(()=>[s("div",ta,[T.value.dir?(d(),p("div",aa,[s("p",sa,u(i(t)("dirPermission")),1),s("div",na,[e(O,{class:"py-[10px] items table-head-bg pl-[15px] mb-[10px]"},{default:l(()=>[e(m,{span:12},{default:l(()=>[s("span",null,u(i(t)("path")),1)]),_:1}),e(m,{span:6},{default:l(()=>[s("span",null,u(i(t)("demand")),1)]),_:1}),e(m,{span:6},{default:l(()=>[s("span",null,u(i(t)("status")),1)]),_:1})]),_:1}),(d(!0),p(S,null,X(T.value.dir.is_readable,(a,h)=>(d(),C(O,{class:"pb-[10px] items pl-[15px]",key:h},{default:l(()=>[e(m,{span:12},{default:l(()=>[s("span",null,u(a.dir),1)]),_:2},1024),e(m,{span:6},{default:l(()=>[s("span",null,u(i(t)("readable")),1)]),_:1}),e(m,{span:6},{default:l(()=>[a.status?(d(),p("span",oa,[e(r,{color:"green"},{default:l(()=>[e(se)]),_:1})])):(d(),p("span",ia,[e(r,{color:"red"},{default:l(()=>[e(ne)]),_:1})]))]),_:2},1024)]),_:2},1024))),128)),(d(!0),p(S,null,X(T.value.dir.is_write,(a,h)=>(d(),C(O,{class:"pb-[10px] items pl-[15px]",key:h},{default:l(()=>[e(m,{span:12},{default:l(()=>[s("span",null,u(a.dir),1)]),_:2},1024),e(m,{span:6},{default:l(()=>[s("span",null,u(i(t)("write")),1)]),_:1}),e(m,{span:6},{default:l(()=>[a.status?(d(),p("span",ua,[e(r,{color:"green"},{default:l(()=>[e(se)]),_:1})])):(d(),p("span",da,[e(r,{color:"red"},{default:l(()=>[e(ne)]),_:1})]))]),_:2},1024)]),_:2},1024))),128))])])):x("",!0)])]),_:1}),s("div",ca,[e(he,{effect:"dark",content:i(t)("installTips"),placement:"top"},{default:l(()=>[e(f,{type:"default",disabled:!T.value.is_pass||M.value,loading:U.value,onClick:el},{default:l(()=>[_(u(i(t)("localInstall")),1)]),_:1},8,["disabled","loading"])]),_:1},8,["content"]),e(he,{effect:"dark",content:i(t)("cloudInstallTips"),placement:"top"},{default:l(()=>[e(f,{type:"primary",disabled:!T.value.is_pass||U.value,loading:M.value,onClick:ll},{default:l(()=>[_(u(i(t)("cloudInstall")),1)]),_:1},8,["disabled","loading"])]),_:1},8,["content"])])])),[[ke,b.value==1],[Oe,!T.value.dir]]),ie(s("div",ra,[e(i(Yl),{ref_key:"terminalRef",ref:D,context:V.value,"init-log":null,"show-header":!1,"show-log-time":!0,onExecCmd:Xe},null,8,["context"])],512),[[ke,b.value==2]]),ie(s("div",pa,[e(ml,{icon:"success",title:i(t)("addonInstallSuccess")},null,8,["title"]),(d(!0),p(S,null,X(ue.value,(a,h)=>(d(),p("div",{class:"mb-[10px]",key:h},[e(hl,{title:a,type:"error",closable:!1},null,8,["title"])]))),128))],512),[[ke,b.value==3]])]),_:1},8,["modelValue","title"]),e(G,{modelValue:_e.value,"onUpdate:modelValue":n[12]||(n[12]=a=>_e.value=a),title:i(t)("addonUninstall"),width:"850px","close-on-click-modal":!1,"close-on-press-escape":!1},{default:l(()=>[e(Ne,{"max-height":"50vh"},{default:l(()=>[s("div",fa,[le.value.dir?(d(),p("div",_a,[s("p",va,u(i(t)("dirPermission")),1),s("div",ma,[e(O,{class:"py-[10px] items table-head-bg pl-[15px] mb-[10px]"},{default:l(()=>[e(m,{span:12},{default:l(()=>[s("span",null,u(i(t)("path")),1)]),_:1}),e(m,{span:6},{default:l(()=>[s("span",null,u(i(t)("demand")),1)]),_:1}),e(m,{span:6},{default:l(()=>[s("span",null,u(i(t)("status")),1)]),_:1})]),_:1}),(d(!0),p(S,null,X(le.value.dir.is_readable,(a,h)=>(d(),C(O,{class:"pb-[10px] items pl-[15px]",key:h},{default:l(()=>[e(m,{span:12},{default:l(()=>[s("span",null,u(a.dir),1)]),_:2},1024),e(m,{span:6},{default:l(()=>[s("span",null,u(i(t)("readable")),1)]),_:1}),e(m,{span:6},{default:l(()=>[a.status?(d(),p("span",ha,[e(r,{color:"green"},{default:l(()=>[e(se)]),_:1})])):(d(),p("span",xa,[e(r,{color:"red"},{default:l(()=>[e(ne)]),_:1})]))]),_:2},1024)]),_:2},1024))),128)),(d(!0),p(S,null,X(le.value.dir.is_write,(a,h)=>(d(),C(O,{class:"pb-[10px] items pl-[15px]",key:h},{default:l(()=>[e(m,{span:12},{default:l(()=>[s("span",null,u(a.dir),1)]),_:2},1024),e(m,{span:6},{default:l(()=>[s("span",null,u(i(t)("write")),1)]),_:1}),e(m,{span:6},{default:l(()=>[a.status?(d(),p("span",ga,[e(r,{color:"green"},{default:l(()=>[e(se)]),_:1})])):(d(),p("span",ya,[e(r,{color:"red"},{default:l(()=>[e(ne)]),_:1})]))]),_:2},1024)]),_:2},1024))),128))])])):x("",!0)])]),_:1})]),_:1},8,["modelValue","title"]),e(G,{modelValue:z.value,"onUpdate:modelValue":n[14]||(n[14]=a=>z.value=a),title:"下载提示",width:"30%"},{footer:l(()=>[s("span",ba,[e(f,{onClick:n[13]||(n[13]=a=>z.value=!1)},{default:l(()=>[_("取消")]),_:1}),e(f,{type:"primary",onClick:Je},{default:l(()=>[_("确定")]),_:1})])]),default:l(()=>[ka]),_:1},8,["modelValue"])]}),_:1})]),e(pt,{ref_key:"upgradeRef",ref:Ce,onComplete:R,onCloudbuild:Re},null,512),e(ft,{ref_key:"cloudBuildRef",ref:P},null,512)],64)}}});const ns=_t(wa,[["__scopeId","data-v-587e14a4"]]);export{ns as default};
