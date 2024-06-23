var l=Object.defineProperty;var d=(t,s,e)=>s in t?l(t,s,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[s]=e;var c=(t,s,e)=>(d(t,typeof s!="symbol"?s+"":s,e),e);import{b2 as b,G as i,b9 as u,U as n,q as a,c_ as g,j as p}from"./index-f7a01263.js";class k{constructor(){c(this,"instance");this.instance=b.create({baseURL:"/adminapi/".substr(-1)=="/"?"/adminapi/":"/adminapi//",timeout:3e10,headers:{"Content-Type":"application/x-www-form-urlencoded;",lang:i.get("lang")??"zh-cn"}}),this.instance.interceptors.request.use(s=>(u()&&(s.headers.token=u(),s.headers["site-id"]=i.get("siteId")||0),s),s=>Promise.reject(s)),this.instance.interceptors.response.use(s=>{const e=s.data;return e.code!=1?(this.handleAuthError(e.code),e.code!=401&&n({message:e.msg,type:"error"}),Promise.reject(new Error(e.msg||"Error"))):(s.config.showSuccessMessage&&n({message:e.msg,type:"success"}),e)},s=>(this.handleNetworkError(s),Promise.reject(s)))}get(s,e){return this.instance.get(s,e)}post(s,e,r){return this.instance.post(s,e,r)}put(s,e,r){return this.instance.put(s,e,r)}delete(s,e){return this.instance.delete(s,e)}handleNetworkError(s){let e="";if(s.response&&s.response.status)switch(s.response.status){case 400:e=a("axios.400");break;case 401:e=a("axios.401");break;case 403:e=a("axios.403");break;case 404:e=(g(s.response.config.baseURL)?s.response.config.baseURL:location.origin)+a("axios.404");break;case 405:e=a("axios.405");break;case 408:e=a("axios.408");break;case 409:e=a("axios.409");break;case 500:e=a("axios.500");break;case 501:e=a("axios.501");break;case 502:e=a("axios.502");break;case 503:e=a("axios.503");break;case 504:e=a("axios.504");break;case 505:e=a("axios.505");break}s.message.includes("timeout")&&(e=a("axios.timeout")),s.code=="ERR_NETWORK"&&(e=s.config.baseURL+a("axios.errNetwork")),e&&n({message:e,type:"error"})}handleAuthError(s){switch(s){case 401:p().logout();break}}}const o=new k;function m(t){return o.post("tk_devtool/execute",t,{showSuccessMessage:!0})}function w(){return o.get("tk_devtool/asyncbuild",{showErrorMessage:!0,showSuccessMessage:!0})}function v(){return o.get("tk_devtool/checkbuild")}function _(t){return o.post("tk_devtool/moveFile",t,{showSuccessMessage:!0})}function M(t){return o.post("tk_devtool/asyncadmin",t,{showSuccessMessage:!0})}function S(){return o.get("tk_devtool/gettables")}function E(t){return o.post("tk_devtool/updatetable",t,{showSuccessMessage:!0})}function R(t){return o.post("tk_devtool/deletetable",t,{showSuccessMessage:!0})}function T(t){return o.post("tk_devtool/gettableinfo",t)}function U(){return o.get("tk_devtool/backupdatabase",{showSuccessMessage:!0})}function y(t){return o.post("tk_devtool/exporttable",t,{showSuccessMessage:!0})}function L(t){return o.post("tk_devtool/exporttabletext",t)}export{y as a,U as b,S as c,R as d,L as e,w as f,T as g,v as h,M as i,m as j,_ as m,E as u};
