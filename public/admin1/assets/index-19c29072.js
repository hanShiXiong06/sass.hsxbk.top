import{N as v,d as R,x as A,f as B,r as m,l as C,n as U,h as f,c as q,a as n,t as F,u as g,P as J,s as x,w as l,e as t,i as p,B as $,aj as j,a0 as G,az as M,aA as O,K as L,J as T,E as z,L as K,U as P}from"./index-17984968.js";/* empty css                   *//* empty css                *//* empty css                  *//* empty css                 */import"./el-form-item-4ed993c7.js";/* empty css                       *//* empty css                 *//* empty css                *//* empty css                 */function H(d){return v.get(`tk_pan/storage/${d}`)}function Q(d){return v.put(`tk_pan/storage/${d.storage_type}`,d,{showSuccessMessage:!0})}function W(){return v.get("tk_pan/adddriver",{showErrorMessage:!0,showSuccessMessage:!0})}const X={class:"main-container"},Y={class:"flex ml-[18px] justify-between items-center mt-[20px]"},Z={class:"text-[20px]"},ee=n("div",{class:"ml-2 text-[#666]"},"域名组成：https://vip.123pan.cn/会员uid/目录",-1),te=n("a",{href:"https://www.123pan.com/s/Ggx9-gAmJv.html",target:"_blank"},"123网盘注册",-1),ae=n("a",{href:"https://www.123pan.com/developer",target:"_blank"},"开放平台申请",-1),le={class:"fixed-footer-wrap"},oe={class:"fixed-footer"},we=R({__name:"index",setup(d){const S=A();B();const I=S.meta.title;m();const r=m(!0),w=m(),h=m(!1);(()=>{let o="00",e="-1";localStorage.getItem("admin.userinfo")&&(o=JSON.parse(localStorage.getItem("admin.userinfo")).uid),localStorage.getItem("site.userinfo")&&(e=JSON.parse(localStorage.getItem("site.userinfo")).uid),o===e&&(h.value=!0)})();const D=C(()=>({clientID:[{required:!0,message:"client_id必须填写",trigger:"blur"}],clientSecret:[{required:!0,message:"client_secret必须填写",trigger:"blur"}],dir:[{required:!0,message:"目录名称必须填写",trigger:"blur"}]})),a=U({...{storage_type:"",clientID:"",clientSecret:"",dir:"",domain:"https://vip.123pan.cn/id/dir",is_use:"0"}});(async()=>{r.value=!0;const o=await(await H("ott")).data;Object.keys(a).forEach(e=>{o[e]!=null&&(a[e]=o[e]),o.params[e]!=null&&(a[e]=o.params[e].value)}),console.log(a),r.value=!1})();const y=async o=>{r.value||!o||await o.validate(async e=>{e&&(r.value=!0,Q(a).then(_=>{r.value=!1}).catch(()=>{r.value=!1}))})};return(o,e)=>{const b=j,_=G,V=M,E=O,i=L,u=T,c=z,k=K,N=P;return f(),q("div",X,[n("div",Y,[n("span",Z,F(g(I)),1)]),J((f(),x(k,{model:a,"label-width":"140px",ref_key:"formRef",ref:w,rules:g(D),class:"page-form"},{default:l(()=>[t(_,{class:"box-card !border-none",shadow:"never"},{default:l(()=>[t(_,{class:"!border-none",shadow:"never",style:{width:"640px"}},{default:l(()=>[t(b,{type:"warning",title:"本存储需使用123盘直链功能，目前会员才有此权限，普通会员每月有100G流量，超级会员有1T流量，可以按需购买流量，价格非常有性价比具体查看官方商城",closable:!1,"show-icon":""})]),_:1}),t(i,{label:"是否启用"},{default:l(()=>[t(E,{modelValue:a.is_use,"onUpdate:modelValue":e[0]||(e[0]=s=>a.is_use=s)},{default:l(()=>[t(V,{label:"1"},{default:l(()=>[p("启用")]),_:1}),t(V,{label:"0"},{default:l(()=>[p("停用")]),_:1})]),_:1},8,["modelValue"])]),_:1}),t(i,{label:"clientID",prop:"clientID"},{default:l(()=>[t(u,{modelValue:a.clientID,"onUpdate:modelValue":e[1]||(e[1]=s=>a.clientID=s),placeholder:"请填写client_id",class:"input-width",clearable:""},null,8,["modelValue"])]),_:1}),t(i,{label:"clientSecret",prop:"clientSecret"},{default:l(()=>[t(u,{modelValue:a.clientSecret,"onUpdate:modelValue":e[2]||(e[2]=s=>a.clientSecret=s),placeholder:"请填写client_secret",class:"input-width",clearable:""},null,8,["modelValue"])]),_:1}),t(i,{label:"上传目录",prop:"dir"},{default:l(()=>[t(u,{modelValue:a.dir,"onUpdate:modelValue":e[3]||(e[3]=s=>a.dir=s),placeholder:"如oss,根目录下需要不存在这个目录",class:"input-width",clearable:""},null,8,["modelValue"])]),_:1}),t(i,{label:"域名前缀",prop:"domain"},{default:l(()=>[t(u,{modelValue:a.domain,"onUpdate:modelValue":e[4]||(e[4]=s=>a.domain=s),placeholder:"进入123盘的直链空间获取地址",class:"input-width",clearable:""},null,8,["modelValue"]),ee]),_:1}),t(i,{label:"快速导航"},{default:l(()=>[t(c,null,{default:l(()=>[te]),_:1}),t(c,null,{default:l(()=>[ae]),_:1}),h.value==!0?(f(),x(c,{key:0,type:"primary",onClick:e[5]||(e[5]=s=>g(W)())},{default:l(()=>[p(" 注入驱动 ")]),_:1})):$("",!0)]),_:1})]),_:1})]),_:1},8,["model","rules"])),[[N,r.value]]),n("div",le,[n("div",oe,[t(c,{type:"primary",loading:r.value,onClick:e[6]||(e[6]=s=>y(w.value))},{default:l(()=>[p("保存配置")]),_:1},8,["loading"])])])])}}});export{we as default};