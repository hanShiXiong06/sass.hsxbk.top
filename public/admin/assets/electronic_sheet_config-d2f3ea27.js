import{d as N,x as j,f as A,r as y,n as x,q as t,h,c as v,e as o,w as r,a,t as i,u as l,R as F,s as K,i as u,B as V,ax as z,ay as H,at as $,au as G,E as J,L as O,K as W,a7 as Y,aW as Q,M as X,Y as Z,p as ee,g as te}from"./index-5a756a51.js";/* empty css                   *//* empty css                *//* empty css                 *//* empty css                *//* empty css                 */import"./el-form-item-4ed993c7.js";/* empty css                  *//* empty css                       *//* empty css                 *//* empty css                    */import{a as oe,b as le}from"./electronic_sheet-cb2ca4d2.js";import{_ as ae}from"./_plugin-vue_export-helper-c27b6911.js";const m=f=>(ee("data-v-0202d79b"),f=f(),te(),f),se={class:"main-container"},re={class:"flex justify-between items-center mb-[5px] h-[32px]"},ne={class:"text-lg"},de={class:"panel-title !text-sm"},ie={key:0,class:"text-[12px] text-[#b2b2b2]"},pe={key:0},ce={class:"text-[12px] text-[#b2b2b2]"},_e={class:"text-[12px] text-[#b2b2b2]"},ue={class:"panel-title !text-sm"},me=m(()=>a("p",null,"用双端口加载主JS文件Lodop.js（或CLodopfuncs.js兼容老版本）以防其中某端口被占",-1)),fe=m(()=>a("p",null,"HTTP推荐端口：8000/18000，HTTPS推荐端口：8443",-1)),he=m(()=>a("p",null,"1. 请将打印机连接至本机。 ",-1)),be=m(()=>a("p",null,[u("2. 在本机上安装打印控件。下载链接："),a("a",{href:"http://www.lodop.net/download.html",target:"_blank",class:"text-primary"},"http://www.lodop.net/download.html")],-1)),ve=m(()=>a("p",null,"3. 将打印控件中的打印端口下面的打印端口设为相同。",-1)),we={class:"fixed-footer-wrap"},ge={class:"fixed-footer"},ke=N({__name:"electronic_sheet_config",setup(f){const P=j(),E=A(),T=P.meta.title,p=y(!0),C=d=>{E.push({path:d})},s=x({interface_type:"kdbird",kdniao_id:"",kdniao_api_key:"",server_port1:"8000",server_port2:"18000",https_port:"8443"});(async()=>{const d=await(await oe()).data;Object.keys(s).forEach(e=>{d[e]!=null&&(s[e]=d[e])}),p.value=!1})();const S=d=>{window.open(d,"_blank")},w=y(),I=x({server_port1:[{required:!0,message:t("serverPort1Placeholder"),trigger:"blur"}],server_port2:[{required:!0,message:t("serverPort2Placeholder"),trigger:"blur"}],https_port:[{required:!0,message:t("httpsPortPlaceholder"),trigger:"blur"}]}),B=async d=>{p.value||!d||await d.validate(async e=>{e&&(p.value=!0,le(s).then(()=>{p.value=!1}).catch(()=>{p.value=!1}))})};return(d,e)=>{const g=z,D=H,R=$,q=G,k=J,c=O,_=W,b=Y,M=Q,U=X,L=Z;return h(),v("div",se,[o(b,{class:"box-card !border-none",shadow:"never"},{default:r(()=>[a("div",re,[a("span",ne,i(l(T)),1)]),o(D,{"model-value":"/shop/delivery/electronic_sheet/config",onTabChange:C},{default:r(()=>[o(g,{label:l(t)("tabESTemplate"),name:"/shop/delivery/electronic_sheet"},null,8,["label"]),o(g,{label:l(t)("tabESConfig"),name:"/shop/delivery/electronic_sheet/config"},null,8,["label"])]),_:1}),F((h(),K(U,{class:"page-form",model:s,rules:I,"label-width":"150px",ref_key:"formRef",ref:w},{default:r(()=>[o(b,{class:"box-card !border-none",shadow:"never"},{default:r(()=>[a("h3",de,i(l(t)("apiSet")),1),o(c,{label:l(t)("interfaceType"),prop:"interface_type"},{default:r(()=>[a("div",null,[o(q,{modelValue:s.interface_type,"onUpdate:modelValue":e[0]||(e[0]=n=>s.interface_type=n)},{default:r(()=>[o(R,{label:"kdbird",size:"large"},{default:r(()=>[u(i(l(t)("kdn")),1)]),_:1})]),_:1},8,["modelValue"]),s.interface_type=="kdbird"?(h(),v("p",ie,[u(i(l(t)("promptTips1-1")),1),o(k,{class:"button-size",type:"primary",link:"",onClick:e[1]||(e[1]=n=>S("https://www.kdniao.com"))},{default:r(()=>[u("https://www.kdniao.com")]),_:1})])):V("",!0)])]),_:1},8,["label"]),s.interface_type=="kdbird"?(h(),v("div",pe,[o(c,{label:l(t)("kdnEBusinessIDLabel"),class:"input-item"},{default:r(()=>[a("div",null,[o(_,{modelValue:s.kdniao_id,"onUpdate:modelValue":e[2]||(e[2]=n=>s.kdniao_id=n),modelModifiers:{trim:!0},placeholder:l(t)("kdnEBusinessIDPlaceholder"),class:"input-width",clearable:""},null,8,["modelValue","placeholder"]),a("p",ce,i(l(t)("kdnEBusinessIDTips")),1)])]),_:1},8,["label"]),o(c,{label:"API key",class:"input-item"},{default:r(()=>[a("div",null,[o(_,{modelValue:s.kdniao_api_key,"onUpdate:modelValue":e[3]||(e[3]=n=>s.kdniao_api_key=n),modelModifiers:{trim:!0},clearable:"",placeholder:l(t)("kdnAppKeyPlaceholder"),class:"input-width"},null,8,["modelValue","placeholder"]),a("p",_e,i(l(t)("kdnAppKeyTips")),1)])]),_:1})])):V("",!0)]),_:1}),o(b,{class:"box-card !border-none",shadow:"never"},{default:r(()=>[a("h3",ue,i(l(t)("printerSet")),1),o(M,{type:"warning",closable:!1,class:"!mb-[10px]"},{default:r(()=>[me,fe,he,be,ve]),_:1}),o(c,{label:l(t)("serverPort1"),class:"input-item-required",prop:"server_port1"},{default:r(()=>[a("div",null,[o(_,{modelValue:s.server_port1,"onUpdate:modelValue":e[4]||(e[4]=n=>s.server_port1=n),modelModifiers:{trim:!0},placeholder:l(t)("serverPort1Placeholder"),class:"input-width",clearable:""},null,8,["modelValue","placeholder"])])]),_:1},8,["label"]),o(c,{label:l(t)("serverPort2"),class:"input-item-required",prop:"server_port2"},{default:r(()=>[a("div",null,[o(_,{modelValue:s.server_port2,"onUpdate:modelValue":e[5]||(e[5]=n=>s.server_port2=n),modelModifiers:{trim:!0},placeholder:l(t)("serverPort2Placeholder"),class:"input-width",clearable:""},null,8,["modelValue","placeholder"])])]),_:1},8,["label"]),o(c,{label:l(t)("httpsPort"),class:"input-item-required",prop:"https_port"},{default:r(()=>[a("div",null,[o(_,{modelValue:s.https_port,"onUpdate:modelValue":e[6]||(e[6]=n=>s.https_port=n),modelModifiers:{trim:!0},placeholder:l(t)("httpsPortPlaceholder"),class:"input-width",clearable:""},null,8,["modelValue","placeholder"])])]),_:1},8,["label"])]),_:1})]),_:1},8,["model","rules"])),[[L,p.value]]),a("div",we,[a("div",ge,[o(k,{type:"primary",loading:p.value,onClick:e[7]||(e[7]=n=>B(w.value))},{default:r(()=>[u(i(l(t)("save")),1)]),_:1},8,["loading"])])])]),_:1})])}}});const Ue=ae(ke,[["__scopeId","data-v-0202d79b"]]);export{Ue as default};
