var V=Object.defineProperty;var I=(a,e,s)=>e in a?V(a,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):a[e]=s;var g=(a,e,s)=>(I(a,typeof e!="symbol"?e+"":e,s),s);import{b2 as L,G as x,b9 as b,U as f,q as t,bt as N,j,d as q,r as i,x as A,f as F,Q as P,a2 as v,h as k,c as z,a as r,R as O,s as $,w as u,e as n,F as W,a5 as D,aW as G,a1 as K,ax as Q,ay as Y,a7 as H,Y as J,p as X,g as Z}from"./index-6f32d09b.js";/* empty css                   *//* empty css                *//* empty css                    *//* empty css                 */import{_ as ee}from"./index.vue_vue_type_style_index_0_lang-4560d9f6.js";import se from"./index-f2b013b9.js";import{_ as te}from"./_plugin-vue_export-helper-c27b6911.js";/* empty css                    *//* empty css                 *//* empty css                  *//* empty css                   */import"./dark-11f94ba3.js";/* empty css                     *//* empty css               *//* empty css               */import"./cloud-9c7841e4.js";class ae{constructor(){g(this,"instance");this.instance=L.create({baseURL:"/adminapi/".substr(-1)=="/"?"/adminapi/":"/adminapi//",timeout:3e10,headers:{"Content-Type":"application/x-www-form-urlencoded;",lang:x.get("lang")??"zh-cn"}}),this.instance.interceptors.request.use(e=>(b()&&(e.headers.token=b(),e.headers["site-id"]=x.get("siteId")||0),e),e=>Promise.reject(e)),this.instance.interceptors.response.use(e=>{const s=e.data;return s.code!=1?(this.handleAuthError(s.code),s.code!=401&&f({message:s.msg,type:"error"}),Promise.reject(new Error(s.msg||"Error"))):(e.config.showSuccessMessage&&f({message:s.msg,type:"success"}),s)},e=>(this.handleNetworkError(e),Promise.reject(e)))}get(e,s){return this.instance.get(e,s)}post(e,s,c){return this.instance.post(e,s,c)}put(e,s,c){return this.instance.put(e,s,c)}delete(e,s){return this.instance.delete(e,s)}handleNetworkError(e){let s="";if(e.response&&e.response.status)switch(e.response.status){case 400:s=t("axios.400");break;case 401:s=t("axios.401");break;case 403:s=t("axios.403");break;case 404:s=(N(e.response.config.baseURL)?e.response.config.baseURL:location.origin)+t("axios.404");break;case 405:s=t("axios.405");break;case 408:s=t("axios.408");break;case 409:s=t("axios.409");break;case 500:s=t("axios.500");break;case 501:s=t("axios.501");break;case 502:s=t("axios.502");break;case 503:s=t("axios.503");break;case 504:s=t("axios.504");break;case 505:s=t("axios.505");break}e.message.includes("timeout")&&(s=t("axios.timeout")),e.code=="ERR_NETWORK"&&(s=e.config.baseURL+t("axios.errNetwork")),s&&f({message:s,type:"error"})}handleAuthError(e){switch(e){case 401:j().logout();break}}}const w=new ae;function oe(a){return w.post("tk_upgrade/addonupload",a,{showSuccessMessage:!0,showErrorMessage:!0})}function ne(){return w.get("tk_upgrade/checkauthinfo")}const E=a=>(X("data-v-0370a500"),a=a(),Z(),a),re={class:"main-container p-4"},ie={style:{width:"640px"},class:"mb-2 mt-6"},le={class:"flex mt-6 mb-6"},ce={class:"w-[320px]"},de={class:"d-card p-4"},ue=E(()=>r("div",{class:"text-[#409efc]"},"上传安装包",-1)),pe={class:"d-card p-4"},me=E(()=>r("div",{class:"text-[#409efc]"},"一键云编译",-1)),_e=q({__name:"index",setup(a){i(null);const e=i(null);i(null),i(!1);const s=()=>{var l;if(ne(),e.value.cloudBuildTask){(l=e.value)==null||l.open();return}D.confirm("如多个应用插件升级，可上传完成后再执行云编译，是否确认执行云编译？","云编译",{confirmButtonText:"确认",cancelButtonText:"取消",type:"warning"}).then(()=>{var o;(o=e.value)==null||o.open()})},c=A();F(),c.meta.title,i(null);const m=i("admin"),_=i(!1),d=i(),y=()=>{d.value&&(_.value=!0,oe({file_url:d.value}).then(l=>{s(),_.value=!1,d.value=""}))};return P(d,l=>{l&&y()}),(l,o)=>{const R=G,C=v("FolderOpened"),h=K,U=v("MostlyCloudy"),B=Q,T=Y,M=H,S=J;return k(),z(W,null,[r("div",re,[O((k(),$(M,{"element-loading-text":"正在解压安装包...",class:"box-card !border-none mt-2",shadow:"never"},{default:u(()=>[n(T,{modelValue:m.value,"onUpdate:modelValue":o[2]||(o[2]=p=>m.value=p),onTabClick:l.handleClick},{default:u(()=>[n(B,{label:"安装包",name:"admin"},{default:u(()=>[r("div",ie,[n(R,{type:"info",title:"提示:上传安装包会自动解析应用信息,未安装应用将会自动安装，已经安装会自动替换成最新上传包，同时会备份插件相关的代码和数据到站点upgrade下，升级出错可快速进行恢复还原",closable:!1,"show-icon":""})]),r("div",le,[r("div",ce,[n(ee,{modelValue:d.value,"onUpdate:modelValue":o[0]||(o[0]=p=>d.value=p),api:"sys/document/applet"},{default:u(()=>[r("div",de,[n(h,{size:"38",color:"#409efc"},{default:u(()=>[n(C)]),_:1}),ue])]),_:1},8,["modelValue"])]),r("div",{class:"w-[320px]",onClick:o[1]||(o[1]=p=>s())},[r("div",pe,[n(h,{size:"38",color:"#409efc"},{default:u(()=>[n(U)]),_:1}),me])])])]),_:1})]),_:1},8,["modelValue","onTabClick"])]),_:1})),[[S,_.value]])]),n(se,{ref_key:"cloudBuildRef",ref:e},null,512)],64)}}});const Ie=te(_e,[["__scopeId","data-v-0370a500"]]);export{Ie as default};
