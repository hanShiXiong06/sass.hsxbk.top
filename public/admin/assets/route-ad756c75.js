import{d as ne,x as se,f as ie,n as k,r as _,aO as re,Q as pe,U as I,q as o,l as de,h as v,c as O,e as l,w as s,a as h,t as p,u as n,F as me,T as ue,s as C,i as g,R as ce,B as j,aR as _e,a3 as M,K as fe,L as he,ab as ge,aC as be,E as ve,M as ye,a7 as Ve,ac as De,ad as we,W as ke,ax as xe,ay as Ce,X as Re,Y as Pe}from"./index-29db729d.js";/* empty css                   *//* empty css                  *//* empty css                   */import Ee from"./index-ca4d57f5.js";/* empty css                    *//* empty css                      *//* empty css                 *//* empty css               *//* empty css                  *//* empty css                  *//* empty css                     *//* empty css                  *//* empty css                 *//* empty css                    */import"./el-tooltip-4ed993c7.js";/* empty css                        *//* empty css                *//* empty css                     *//* empty css                  */import{n as Fe,j as Ue,o as Se,p as Te,q as Le}from"./diy-17f382ac.js";/* empty css                        */import"./index.vue_vue_type_style_index_0_lang-2c4c413e.js";import"./attachment-202024c3.js";import"./index.vue_vue_type_script_setup_true_lang-1727bd35.js";/* empty css                 *//* empty css               *//* empty css                    *//* empty css                    */import"./el-dropdown-item-4ed993c7.js";import"./index.vue_vue_type_script_setup_true_lang-ed563346.js";/* empty css                   */import"./index.vue_vue_type_script_setup_true_lang-c9026bca.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./sortable.esm-be94e56d.js";const Ne={class:"main-container"},$e={class:"flex justify-between items-center"},ze={class:"text-page-title"},Be={class:"mr-[10px]"},Ae={class:"mr-[10px]"},Ie={class:"mt-[16px] flex justify-end"},Oe={class:"dialog-footer"},xa=ne({__name:"route",setup(je){const q=se();ie();const J=q.meta.title,G=k({});_(),_(!1);const i=k({page:1,limit:10,total:0,loading:!0,data:[],searchParam:{title:"",addon_name:""}}),E=_([]),R=_("");(async()=>{R.value=(await _e()).data.wap_url})();const F=k({});Fe().then(a=>{if(a.data)for(const e in a.data)F[e]=a.data[e]});const x=()=>{Se({}).then(a=>{i.loading=!1,E.value=M(a.data),P(i.page)}).catch(()=>{i.loading=!1})};x();const P=(a=1)=>{i.page=a;const e=M(E.value),r=[];for(let d=0;d<e.length;d++){let m=!0;i.searchParam.title&&e[d].title.indexOf(i.searchParam.title)==-1&&(m=!1),i.searchParam.addon_name&&e[d].addon_info&&e[d].addon_info.key!=i.searchParam.addon_name&&(m=!1),m&&r.push(e[d])}i.total=r.length;const f=Math.ceil(r.length/i.limit),V=[];for(let d=0;d<f;d++)V[d]=r.splice(0,i.limit);i.data=V[i.page-1]};Ue({}).then(a=>{for(const e in a.data)G[e]=a.data[e]});const U=_(),{copy:K,isSupported:Q,copied:S}=re(),T=a=>{Q.value||I({message:o("notSupportCopy"),type:"warning"}),K(a)};pe(S,()=>{S.value&&I({message:o("copySuccess"),type:"success"})});const u=_("wechat"),L=_(""),N=_(0),b=k({title:"",name:"",page:"",is_share:0,sort:0}),c=k({wechat:{title:"",desc:"",url:""},weapp:{title:"",url:""}}),y=_(!1),W=de(()=>({})),$=_(),X=async a=>{const e=(await Te({name:a.name})).data;e.title&&(a.id=e.id,a.title=e.title,a.name=e.name,a.page=e.page,a.is_share=e.is_share,a.sort=e.sort,a.share=e.share),b.title=a.title,b.name=a.name,b.page=a.page,b.is_share=a.is_share,b.sort=a.sort,N.value=a.id,L.value=a.title;const r=a.share?JSON.parse(a.share):{wechat:{title:"",desc:"",url:""},weapp:{title:"",url:""}};r&&(c.wechat=r.wechat,c.weapp=r.weapp),y.value=!0},Y=async a=>{a&&await a.validate(async e=>{e&&Le({id:N.value,share:JSON.stringify(c),...b}).then(()=>{x(),y.value=!1}).catch(()=>{})})},H=a=>{a&&(a.resetFields(),x())};return(a,e)=>{const r=fe,f=he,V=ge,d=be,m=ve,z=ye,B=Ve,D=De,Z=we,ee=ke,A=xe,ae=Ce,te=Ee,le=Re,oe=Pe;return v(),O("div",Ne,[l(B,{class:"box-card !border-none",shadow:"never"},{default:s(()=>[h("div",$e,[h("span",ze,p(n(J)),1)]),l(B,{class:"box-card !border-none my-[10px] table-search-wrap",shadow:"never"},{default:s(()=>[l(z,{inline:!0,model:i.searchParam,ref_key:"searchFormDiyRouteRef",ref:U},{default:s(()=>[l(f,{label:n(o)("title"),prop:"title"},{default:s(()=>[l(r,{modelValue:i.searchParam.title,"onUpdate:modelValue":e[0]||(e[0]=t=>i.searchParam.title=t),placeholder:n(o)("titlePlaceholder")},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),l(f,{label:n(o)("forAddon"),prop:"addon_name"},{default:s(()=>[l(d,{modelValue:i.searchParam.addon_name,"onUpdate:modelValue":e[1]||(e[1]=t=>i.searchParam.addon_name=t),placeholder:n(o)("forAddonPlaceholder")},{default:s(()=>[l(V,{label:n(o)("all"),value:""},null,8,["label"]),(v(!0),O(me,null,ue(F,(t,w)=>(v(),C(V,{label:t.title,value:w,key:w},null,8,["label","value"]))),128))]),_:1},8,["modelValue","placeholder"])]),_:1},8,["label"]),l(f,null,{default:s(()=>[l(m,{type:"primary",onClick:e[2]||(e[2]=t=>P())},{default:s(()=>[g(p(n(o)("search")),1)]),_:1}),l(m,{onClick:e[3]||(e[3]=t=>H(U.value))},{default:s(()=>[g(p(n(o)("reset")),1)]),_:1})]),_:1})]),_:1},8,["model"])]),_:1}),ce((v(),C(Z,{data:i.data,size:"large"},{empty:s(()=>[h("span",null,p(i.loading?"":n(o)("emptyData")),1)]),default:s(()=>[l(D,{prop:"title",label:n(o)("title"),"min-width":"70"},null,8,["label"]),l(D,{prop:"addon_title",label:n(o)("forAddon"),"min-width":"70"},{default:s(({row:t})=>[h("span",null,p(t.addon_info.title),1)]),_:1},8,["label"]),l(D,{prop:"page",label:n(o)("wapUrl"),"min-width":"230"},{default:s(({row:t})=>[h("span",Be,p(R.value+t.page),1),l(m,{type:"primary",link:"",onClick:w=>T(R.value+t.page)},{default:s(()=>[g(p(n(o)("copy")),1)]),_:2},1032,["onClick"])]),_:1},8,["label"]),l(D,{prop:"page",label:n(o)("weappUrl"),"min-width":"120"},{default:s(({row:t})=>[h("span",Ae,p(t.page),1),l(m,{type:"primary",link:"",onClick:w=>T(t.page)},{default:s(()=>[g(p(n(o)("copy")),1)]),_:2},1032,["onClick"])]),_:1},8,["label"]),l(D,{label:n(o)("share"),fixed:"right",align:"right","min-width":"40"},{default:s(({row:t})=>[t.is_share==1?(v(),C(m,{key:0,type:"primary",link:"",onClick:w=>X(t)},{default:s(()=>[g(p(n(o)("shareSet")),1)]),_:2},1032,["onClick"])):j("",!0)]),_:1},8,["label"])]),_:1},8,["data"])),[[oe,i.loading]]),h("div",Ie,[l(ee,{"current-page":i.page,"onUpdate:current-page":e[4]||(e[4]=t=>i.page=t),"page-size":i.limit,"onUpdate:page-size":e[5]||(e[5]=t=>i.limit=t),layout:"total, sizes, prev, pager, next, jumper",total:i.total,onSizeChange:x,onCurrentChange:P},null,8,["current-page","page-size","total"])])]),_:1}),l(le,{modelValue:y.value,"onUpdate:modelValue":e[12]||(e[12]=t=>y.value=t),title:n(o)("shareSet"),width:"30%"},{footer:s(()=>[h("span",Oe,[l(m,{onClick:e[10]||(e[10]=t=>y.value=!1)},{default:s(()=>[g(p(n(o)("cancel")),1)]),_:1}),l(m,{type:"primary",onClick:e[11]||(e[11]=t=>Y($.value))},{default:s(()=>[g(p(n(o)("confirm")),1)]),_:1})])]),default:s(()=>[l(ae,{modelValue:u.value,"onUpdate:modelValue":e[6]||(e[6]=t=>u.value=t)},{default:s(()=>[l(A,{label:n(o)("wechat"),name:"wechat"},null,8,["label"]),l(A,{label:n(o)("weapp"),name:"weapp"},null,8,["label"])]),_:1},8,["modelValue"]),l(z,{model:c[u.value],"label-width":"90px",ref_key:"shareFormRef",ref:$,rules:n(W)},{default:s(()=>[l(f,{label:n(o)("sharePage")},{default:s(()=>[h("span",null,p(L.value),1)]),_:1},8,["label"]),l(f,{label:n(o)("shareTitle"),prop:"title"},{default:s(()=>[l(r,{modelValue:c[u.value].title,"onUpdate:modelValue":e[7]||(e[7]=t=>c[u.value].title=t),placeholder:n(o)("shareTitlePlaceholder"),clearable:"",maxlength:"30","show-word-limit":""},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),u.value=="wechat"?(v(),C(f,{key:0,label:n(o)("shareDesc"),prop:"desc"},{default:s(()=>[l(r,{modelValue:c[u.value].desc,"onUpdate:modelValue":e[8]||(e[8]=t=>c[u.value].desc=t),placeholder:n(o)("shareDescPlaceholder"),type:"textarea",rows:"4",clearable:"",maxlength:"100","show-word-limit":""},null,8,["modelValue","placeholder"])]),_:1},8,["label"])):j("",!0),l(f,{label:n(o)("shareImageUrl"),prop:"url"},{default:s(()=>[l(te,{modelValue:c[u.value].url,"onUpdate:modelValue":e[9]||(e[9]=t=>c[u.value].url=t),limit:1},null,8,["modelValue"])]),_:1},8,["label"])]),_:1},8,["model","rules"])]),_:1},8,["modelValue","title"])])}}});export{xa as default};
