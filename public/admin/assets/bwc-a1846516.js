import{d as E,x as R,f as B,r as n,l as D,n as C,h as g,c as j,R as q,s as F,w as o,e as a,i,u as y,a as d,t as U,q as N,aW as I,a7 as L,K as A,L as G,at as K,au as M,M as S,E as T,Y as W}from"./index-37fee5a0.js";/* empty css                   *//* empty css                  *//* empty css                *//* empty css                       *//* empty css                 */import"./el-form-item-4ed993c7.js";/* empty css                 *//* empty css                *//* empty css                 */import{g as Y,s as $}from"./config-7e2d5d1c.js";const z={class:"main-container"},H=d("span",{class:"text-gray-400 ml-2"},"%",-1),J=d("span",{class:"text-gray-400 ml-4"},"这里直接结算到站点会员账户，可以配合其他应用使用",-1),O={class:"fixed-footer-wrap"},P={class:"fixed-footer"},ue=E({__name:"bwc",setup(Q){const b=R();B(),b.meta.title,n(),n(!1);const l=n(!0),_=n();n();const v=D(()=>({appkey:[{required:!0,message:"appkey必须填写",trigger:"blur"}],appsecret:[{required:!0,message:"appsecret必须填写",trigger:"blur"}],fanxianratio:[{required:!0,message:"客户端返现比率必须填写",trigger:"blur"}],js_type:[{required:!0,message:"请选择结算账户类型",trigger:"blur"}]})),t=C({...{appkey:"",appsecret:"",fanxianratio:"",js_type:1}});(async()=>{l.value=!0;const r=await Y();for(const e in t)t[e]=r.data[e];l.value=!1})();const w=async r=>{l.value||!r||await r.validate(async e=>{e&&(l.value=!0,$(t).then(u=>{l.value=!1}).catch(()=>{l.value=!1}))})};return(r,e)=>{const f=I,u=L,c=A,p=G,m=K,x=M,V=S,k=T,h=W;return g(),j("div",z,[q((g(),F(V,{model:t,"label-width":"140px",ref_key:"formRef",ref:_,rules:y(v),class:"page-form"},{default:o(()=>[a(u,{class:"box-card !border-none",shadow:"never"},{default:o(()=>[a(u,{class:"!border-none",shadow:"never",style:{width:"640px"}},{default:o(()=>[a(f,{type:"warning",title:"请完善接口信息为自己联盟后台信息",closable:!1,"show-icon":""})]),_:1}),a(p,{label:"联盟appkey",prop:"appkey"},{default:o(()=>[a(c,{modelValue:t.appkey,"onUpdate:modelValue":e[0]||(e[0]=s=>t.appkey=s),placeholder:"联盟appkey",class:"input-width",clearable:""},null,8,["modelValue"])]),_:1}),a(p,{label:"联盟appsecret",prop:"appsecret"},{default:o(()=>[a(c,{modelValue:t.appsecret,"onUpdate:modelValue":e[1]||(e[1]=s=>t.appsecret=s),placeholder:"联盟appsecret",class:"input-width",clearable:""},null,8,["modelValue"])]),_:1}),a(p,{label:"客户分佣比",prop:"fanxianratio"},{default:o(()=>[a(c,{type:"number",max:"100",min:"0",step:"1",modelValue:t.fanxianratio,"onUpdate:modelValue":e[2]||(e[2]=s=>t.fanxianratio=s),placeholder:"客户分佣比",class:"input-width",clearable:""},null,8,["modelValue"]),H]),_:1}),a(p,{label:"结算账户",prop:"js_type"},{default:o(()=>[a(x,{modelValue:t.js_type,"onUpdate:modelValue":e[3]||(e[3]=s=>t.js_type=s)},{default:o(()=>[a(m,{label:"0"},{default:o(()=>[i("可提现余额")]),_:1}),a(m,{label:"1"},{default:o(()=>[i("不可提现余额")]),_:1}),a(m,{label:"2"},{default:o(()=>[i("积分")]),_:1})]),_:1},8,["modelValue"]),J]),_:1})]),_:1})]),_:1},8,["model","rules"])),[[h,l.value]]),d("div",O,[d("div",P,[a(k,{type:"primary",loading:l.value,onClick:e[4]||(e[4]=s=>w(_.value))},{default:o(()=>[i(U(y(N)("confirm")),1)]),_:1},8,["loading"])])])])}}});export{ue as default};