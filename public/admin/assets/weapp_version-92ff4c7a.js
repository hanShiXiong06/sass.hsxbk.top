import{d as N,x as S,r as u,n as j,h as _,c as y,a as r,e as s,w as n,t as i,u as a,i as c,q as o,B as C,R as F,s as R,F as L,E as P,a7 as W,ac as $,ad as q,W as X,X as Y,V as A,Y as G}from"./index-6f32d09b.js";/* empty css                   *//* empty css                     *//* empty css                  *//* empty css                   *//* empty css                      *//* empty css                 *//* empty css               *//* empty css                  *//* empty css                  *//* empty css                  *//* empty css                 *//* empty css                    */import"./el-tooltip-4ed993c7.js";/* empty css                        *//* empty css                *//* empty css                  */import{d as H,w as I,f as J}from"./wxoplatform-fbf67370.js";const K={class:"main-container"},M={class:"flex justify-between items-center"},O={class:"text-page-title"},Q={class:"mt-[50px] ml-[100px] h-[60vh]"},Z={class:"text-secondary text-sm mt-[10px]"},ee={key:0,class:"text-secondary text-sm mt-[10px]"},te={class:"mt-[16px] flex justify-end"},Ce=N({__name:"weapp_version",setup(ae){const V=S().meta.title,m=u(!1),g=u({}),f=u(!1),e=j({page:1,limit:10,total:0,loading:!0,data:[],searchParam:{search:""}}),b=u(""),v=u(!1),k=p=>{b.value=p.fail_reason,v.value=!0};H().then(({data:p})=>{g.value=p});const E=()=>{m.value||(m.value=!0,I().then(()=>{m.value=!1}).catch(()=>{m.value=!1}))},h=(p=1)=>{e.loading=!0,e.page=p,J({page:e.page,limit:e.limit,role_name:e.searchParam.search}).then(t=>{e.loading=!1,e.data=t.data.data,e.total=t.data.total}).catch(()=>{e.loading=!1})};return h(),(p,t)=>{const x=P,D=W,d=$,T=q,U=X,w=Y,z=A,B=G;return _(),y(L,null,[r("div",K,[s(D,{class:"box-card !border-none",shadow:"never"},{default:n(()=>[r("div",M,[r("span",O,i(a(V)),1)]),r("div",Q,[s(x,{type:"primary",loading:m.value,onClick:E},{default:n(()=>[c(i(a(o)("weappVersionUpdate")),1)]),_:1},8,["loading"]),r("p",Z,i(a(o)("updateTips")),1),g.value.create_time?(_(),y("p",ee,[c(i(a(o)("lastTime"))+"："+i(g.value.create_time)+" ",1),s(x,{type:"primary",link:"",onClick:t[0]||(t[0]=l=>f.value=!0)},{default:n(()=>[c(i(a(o)("seeUpdateRecord")),1)]),_:1})])):C("",!0)])]),_:1})]),s(w,{modelValue:f.value,"onUpdate:modelValue":t[4]||(t[4]=l=>f.value=l),title:a(o)("weappVersionUpdateRecord"),width:"1000px","destroy-on-close":!0},{default:n(()=>[F((_(),R(T,{data:e.data,size:"large"},{empty:n(()=>[r("span",null,i(e.loading?"":a(o)("emptyData")),1)]),default:n(()=>[s(d,{prop:"user_version",label:a(o)("userVersion")},null,8,["label"]),s(d,{prop:"site_group_name",label:a(o)("groupName")},null,8,["label"]),s(d,{label:a(o)("status"),prop:"status_name"},null,8,["label"]),s(d,{prop:"create_time",label:a(o)("createTime")},null,8,["label"]),s(d,{label:a(o)("operation"),align:"right",fixed:"right",width:"130"},{default:n(({row:l})=>[l.status==-1?(_(),R(x,{key:0,type:"primary",link:"",onClick:le=>k(l)},{default:n(()=>[c(i(a(o)("failReason")),1)]),_:2},1032,["onClick"])):C("",!0)]),_:1},8,["label"])]),_:1},8,["data"])),[[B,e.loading]]),r("div",te,[s(U,{"current-page":e.page,"onUpdate:current-page":t[1]||(t[1]=l=>e.page=l),"page-size":e.limit,"onUpdate:page-size":t[2]||(t[2]=l=>e.limit=l),layout:"total, sizes, prev, pager, next, jumper",total:e.total,onSizeChange:t[3]||(t[3]=l=>h()),onCurrentChange:h},null,8,["current-page","page-size","total"])])]),_:1},8,["modelValue","title"]),s(w,{modelValue:v.value,"onUpdate:modelValue":t[5]||(t[5]=l=>v.value=l),title:a(o)("failReason"),width:"60%"},{default:n(()=>[s(z,{class:"h-[60vh] w-full whitespace-pre-wrap p-[20px]"},{default:n(()=>[c(i(b.value),1)]),_:1})]),_:1},8,["modelValue","title"])],64)}}});export{Ce as default};
